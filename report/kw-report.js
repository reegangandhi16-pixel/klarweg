/* ============================================================
   KLARWEG · Issue reporting  (kw-report.js)
   ------------------------------------------------------------
   One module, loaded lazily by chapter-app.js. It adds a quiet
   "Found something wrong?" affordance to major learning sections
   and collects the report context automatically.

   HARD RULE: nothing in the lesson may depend on this file.
   chapter-app.js calls it through optional chaining inside a
   try/catch, and every entry point here is itself wrapped, so a
   failed load, a thrown error or an unreachable API leaves the
   chapter rendering and behaving exactly as before.

   STAGE 5: live. Submissions go to the Worker; screenshots are
   downscaled and re-encoded here (the Workers runtime has no
   canvas), and Turnstile is mounted only if a site key is set.
   ============================================================ */
(function (global) {
  'use strict';

  var doc = global.document;

  /* ---------- configuration (the only place these values live) ---------- */
  var ENDPOINT = global.KW_REPORT_ENDPOINT ||
    'https://klarweg-reports.workers.dev';

  /* Public Turnstile SITE key (never the secret). Empty = not configured for
     this environment, in which case the Worker's unverified-report path
     applies and the learner is not blocked. */
  var TURNSTILE_SITE_KEY = global.KW_REPORT_TURNSTILE_SITE_KEY || '';

  var SUBMIT_ENABLED = true;

  /* Sections that carry a report affordance. Deliberately not every
     section: overview, summary and resources are navigation, not content. */
  var REPORTABLE = {
    story: 1, vocabulary: 1, grammar: 1, reading: 1,
    listening: 1, speaking: 1, writing: 1, exercises: 1, quiz: 1
  };

  var CATEGORIES = [
    { id: 'content',           label: 'Content' },
    { id: 'grammar',           label: 'Grammar' },
    { id: 'vocabulary',        label: 'Vocabulary' },
    { id: 'exercise',          label: 'Exercise / Answer' },
    { id: 'audio',             label: 'Audio' },
    { id: 'reading_listening', label: 'Reading / Listening' },
    { id: 'display',           label: 'Display / Layout' },
    { id: 'technical',         label: 'Technical' },
    { id: 'other',             label: 'Other' }
  ];

  var MAX_DESCRIPTION = 2000;
  var MIN_DESCRIPTION = 10;
  var MAX_SCREENSHOT = 2 * 1024 * 1024;     // what the learner may pick
  var MAX_UPLOAD = 2 * 1024 * 1024;         // what we are willing to send
  var MAX_EDGE = 1600;                      // longest side after downscaling
  var SCREENSHOT_TYPES = ['image/png', 'image/jpeg', 'image/webp'];

  var CSS_HREF = 'kw-report.css';   // resolved against the module URL at load

  /* ---------- tiny DOM helpers (local — nothing shared with chapter-app) ---- */

  function el(tag, attrs, children) {
    var n = doc.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
        var v = attrs[k];
        if (v == null || v === false) continue;
        if (k === 'class') n.className = v;
        else if (k === 'text') n.textContent = v;   // user text NEVER via innerHTML
        else if (k === 'html') n.innerHTML = v;     // only ever our own icon markup
        else if (k === 'on') { for (var e in v) n.addEventListener(e, v[e]); }
        else n.setAttribute(k, v === true ? '' : String(v));
      }
    }
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }

  var ICON_FLAG =
    '<svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" ' +
    'stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M8 1.8 15 14H1z"/><path d="M8 6.4v3.1"/><path d="M8 11.7h.01"/></svg>';

  var ICON_CLOSE =
    '<svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" ' +
    'stroke-width="1.6" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg>';

  /* ---------- context ----------------------------------------------------
     Everything here is derived from data the page already has. The learner
     is never asked where they are. Only section_ref is authoritative — the
     Worker re-derives level/chapter/section from it and ignores the rest. */

  function levelOf(chapterId) {
    var m = /^([abc][12])-/.exec(String(chapterId || ''));
    return m ? m[1] : null;
  }

  function sectionRef(chapter, sectionId) {
    var level = levelOf(chapter && chapter.id);
    if (!level || !chapter.id || !sectionId) return null;
    return 'klarweg:' + level + '/' + chapter.id + '/' + sectionId;
  }

  /** Coarse browser/OS family. No raw user-agent, no fingerprinting —
      just enough to reproduce a display or audio bug. */
  function uaFamily() {
    var ua = navigator.userAgent || '';
    var browser =
      /Edg\//.test(ua) ? 'Edge' :
      /OPR\//.test(ua) ? 'Opera' :
      /Firefox\//.test(ua) ? 'Firefox' :
      /Chrome\//.test(ua) ? 'Chrome' :
      /Safari\//.test(ua) ? 'Safari' : 'Other';
    var os =
      /iPhone|iPad|iPod/.test(ua) ? 'iOS' :
      /Android/.test(ua) ? 'Android' :
      /Mac OS X/.test(ua) ? 'macOS' :
      /Windows/.test(ua) ? 'Windows' :
      /Linux/.test(ua) ? 'Linux' : 'Other';
    return browser + ' / ' + os;
  }

  function collectContext(chapter, section) {
    var ref = sectionRef(chapter, section && section.id);
    return {
      section_ref: ref,
      // Display-only echoes; the server trusts none of them.
      level: (levelOf(chapter && chapter.id) || '').toUpperCase(),
      chapter_no: chapter && chapter.number,
      chapter_title: chapter && chapter.title,
      section_label: section && section.label,
      page_url: location.origin + location.pathname,
      page_title: doc.title,
      viewport: Math.round(global.innerWidth) + 'x' + Math.round(global.innerHeight),
      dpr: global.devicePixelRatio || 1,
      ua_family: uaFamily(),
      prefers_reduced_motion:
        !!(global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches),
      captured_at: new Date().toISOString()
    };
  }

  /* ---------- API client -------------------------------------------------
     Every failure path resolves to a typed result object. This client never
     throws at the caller, so no lesson code can be interrupted by it. */

  function submit(payload, file, turnstileToken) {
    var form = new FormData();
    form.append('section_ref', payload.context.section_ref || '');
    form.append('category', payload.category || '');
    form.append('description', (payload.description || '').slice(0, MAX_DESCRIPTION));
    form.append('meta', JSON.stringify({
      claimed_title: payload.context.page_title,
      page_url: payload.context.page_url,
      viewport: payload.context.viewport,
      dpr: payload.context.dpr,
      ua_family: payload.context.ua_family,
      prefers_reduced_motion: payload.context.prefers_reduced_motion
    }));
    if (file) form.append('screenshot', file, file.name || 'screenshot');
    if (turnstileToken) form.append('cf-turnstile-response', turnstileToken);

    var ctl = global.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { try { ctl && ctl.abort(); } catch (e) {} }, 20000);

    return fetch(ENDPOINT + '/api/reports', {
      method: 'POST', body: form, mode: 'cors',
      signal: ctl ? ctl.signal : undefined
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (body) {
        if (res.ok) return { ok: true, id: body.id, duplicate: !!body.duplicate };
        return {
          ok: false,
          status: res.status,
          code: body.error || 'server_error',
          retryAfter: Number(res.headers.get('Retry-After')) || 0
        };
      });
    }).catch(function () {
      return { ok: false, status: 0, code: 'network' };
    }).then(function (r) { clearTimeout(timer); return r; });
  }

  function validateScreenshot(file) {
    if (!file) return { ok: true };
    if (SCREENSHOT_TYPES.indexOf(file.type) === -1) return { ok: false, reason: 'type' };
    if (file.size > MAX_SCREENSHOT) return { ok: false, reason: 'size' };
    return { ok: true };
  }

  function fileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  }

  /* ---------- screenshot preparation ---------------------------------
     The Worker cannot re-encode pixels (no canvas in the Workers runtime),
     so the browser does it: decode, downscale the longest edge to 1600px,
     re-encode as WebP, and step the quality (then the size) down until the
     payload is under 2 MB. Drawing to a canvas also drops EXIF, including
     GPS, because only pixels survive the round trip.

     Any failure here is non-fatal: we fall back to the original file, which
     has already passed the type and size check. A screenshot must never
     cost the learner their report. */

  function decode(file) {
    if (global.createImageBitmap) {
      return createImageBitmap(file).catch(function () { return decodeViaImg(file); });
    }
    return decodeViaImg(file);
  }

  function decodeViaImg(file) {
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function () { URL.revokeObjectURL(url); resolve(img); };
      img.onerror = function () { URL.revokeObjectURL(url); reject(new Error('decode')); };
      img.src = url;
    });
  }

  function toBlob(canvas, quality) {
    return new Promise(function (resolve) {
      if (canvas.convertToBlob) {
        canvas.convertToBlob({ type: 'image/webp', quality: quality }).then(resolve, function () { resolve(null); });
      } else {
        canvas.toBlob(function (b) { resolve(b); }, 'image/webp', quality);
      }
    });
  }

  function draw(source, w, h) {
    var canvas = global.OffscreenCanvas ? new OffscreenCanvas(w, h) : doc.createElement('canvas');
    canvas.width = w; canvas.height = h;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(source, 0, 0, w, h);
    return canvas;
  }

  /** @returns {Promise<{file: File|Blob, processed: boolean}>} */
  async function prepareScreenshot(file) {
    try {
      var src = await decode(file);
      var sw = src.width || src.naturalWidth;
      var sh = src.height || src.naturalHeight;
      if (!sw || !sh) throw new Error('dimensions');

      var steps = [1, 0.75, 0.55];          // progressive size fallbacks
      var qualities = [0.82, 0.7, 0.6, 0.5];

      for (var si = 0; si < steps.length; si++) {
        var scale = Math.min(1, MAX_EDGE / Math.max(sw, sh)) * steps[si];
        var w = Math.max(1, Math.round(sw * scale));
        var h = Math.max(1, Math.round(sh * scale));
        var canvas = draw(src, w, h);
        for (var qi = 0; qi < qualities.length; qi++) {
          var blob = await toBlob(canvas, qualities[qi]);
          if (!blob) throw new Error('encode');
          if (blob.size <= MAX_UPLOAD) {
            if (src.close) try { src.close(); } catch (e) {}
            return {
              file: new File([blob], renameWebp(file.name), { type: 'image/webp' }),
              processed: true, width: w, height: h
            };
          }
        }
      }
      throw new Error('too_large');
    } catch (e) {
      // Original already passed type + 2 MB validation, so it is safe to send.
      return { file: file, processed: false };
    }
  }

  function renameWebp(name) {
    return String(name || 'screenshot').replace(/\.[a-z0-9]+$/i, '') + '.webp';
  }

  /* ---------- Turnstile ----------------------------------------------
     Loaded lazily on first modal open, and only when a site key is
     configured. Only the PUBLIC site key is ever present in the client.
     If the script is blocked or the challenge times out we submit without
     a token; the Worker then applies its stricter unverified budget rather
     than refusing a learner with a broken lesson. */

  var tsState = { loading: null, widget: null, host: null };

  function turnstileConfigured() { return !!TURNSTILE_SITE_KEY; }

  function loadTurnstile() {
    if (tsState.loading) return tsState.loading;
    tsState.loading = new Promise(function (resolve) {
      var s = doc.createElement('script');
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      s.async = true; s.defer = true;
      s.onload = function () { resolve(!!global.turnstile); };
      s.onerror = function () { resolve(false); };
      doc.head.appendChild(s);
      setTimeout(function () { resolve(!!global.turnstile); }, 6000);
    });
    return tsState.loading;
  }

  function turnstileToken() {
    if (!turnstileConfigured()) return Promise.resolve(null);
    return loadTurnstile().then(function (ready) {
      if (!ready || !global.turnstile) return null;
      return new Promise(function (resolve) {
        var done = false;
        var finish = function (v) { if (!done) { done = true; resolve(v || null); } };
        setTimeout(function () { finish(null); }, 8000);
        try {
          if (tsState.widget == null) {
            tsState.widget = global.turnstile.render(tsState.host, {
              sitekey: TURNSTILE_SITE_KEY,
              size: 'invisible',
              callback: finish,
              'error-callback': function () { finish(null); },
              'timeout-callback': function () { finish(null); }
            });
          } else {
            global.turnstile.reset(tsState.widget);
          }
          global.turnstile.execute(tsState.widget);
        } catch (e) { finish(null); }
      });
    }).catch(function () { return null; });
  }

  /* ---------- stylesheet -------------------------------------------------- */

  function ensureStyles() {
    if (doc.getElementById('kw-report-css')) return;
    var href = CSS_HREF;
    try {
      var self = doc.currentScript || doc.querySelector('script[src*="kw-report.js"]');
      if (self && self.src) href = new URL(CSS_HREF, self.src).href;
    } catch (e) {}
    doc.head.appendChild(el('link', { id: 'kw-report-css', rel: 'stylesheet', href: href }));
  }

  /* ============================================================
     MODAL — one instance per page, re-targeted per section
     ============================================================ */

  var M = null;              // built lazily on first open
  var current = null;        // { section, chapter, context, trigger }

  function build() {
    if (M) return M;

    var ctxLine = el('p', { class: 'kwr-eyebrow', id: 'kwr-ctx' });
    var title = el('h2', { class: 'kwr-title', id: 'kwr-title', text: 'Found something wrong?' });
    var sub = el('p', {
      class: 'kwr-sub', id: 'kwr-sub',
      text: 'Help us improve this lesson. Tell us what went wrong — we already know which section you are on.'
    });

    /* --- categories: native radios, so keyboard + AT behaviour is free --- */
    var chips = el('div', { class: 'kwr-chips' });
    var radios = CATEGORIES.map(function (c, i) {
      var input = el('input', {
        type: 'radio', name: 'kwr-category', id: 'kwr-cat-' + c.id, value: c.id,
        class: 'kwr-chip-input',
        on: { change: function () { clearError(catErr); } }
      });
      var label = el('label', { class: 'kwr-chip', for: 'kwr-cat-' + c.id, text: c.label });
      chips.appendChild(el('div', { class: 'kwr-chip-wrap' }, [input, label]));
      return input;
    });
    var catErr = el('p', { class: 'kwr-error', id: 'kwr-err-cat', role: 'alert', hidden: true });
    var catField = el('fieldset', { class: 'kwr-field kwr-fieldset', 'aria-describedby': 'kwr-err-cat' }, [
      el('legend', { class: 'kwr-label', text: 'Issue type' }), chips, catErr
    ]);

    /* --- description --- */
    var descErr = el('p', { class: 'kwr-error', id: 'kwr-err-desc', role: 'alert', hidden: true });
    var count = el('span', { class: 'kwr-count', id: 'kwr-count', text: '0 / ' + MAX_DESCRIPTION });
    var desc = el('textarea', {
      id: 'kwr-desc', class: 'kwr-textarea', rows: 4, maxlength: MAX_DESCRIPTION,
      placeholder: 'Describe the problem\u2026',
      'aria-describedby': 'kwr-count kwr-err-desc',
      on: { input: function () { updateCount(); clearError(descErr); } }
    });
    var descField = el('div', { class: 'kwr-field' }, [
      el('label', { class: 'kwr-label', for: 'kwr-desc', text: 'What happened?' }),
      desc,
      el('div', { class: 'kwr-under' }, [descErr, count])
    ]);

    /* --- optional screenshot --- */
    var fileInput = el('input', {
      type: 'file', id: 'kwr-file', class: 'kwr-file-input',
      accept: 'image/png,image/jpeg,image/webp',
      on: { change: function () { onFile(fileInput.files && fileInput.files[0]); } }
    });
    var attachBtn = el('button', {
      type: 'button', class: 'kwr-attach', text: 'Attach screenshot',
      on: { click: function () { fileInput.click(); } }
    });
    var thumb = el('img', { class: 'kwr-thumb', alt: '' });
    var fileName = el('span', { class: 'kwr-file-name' });
    var fileMeta = el('span', { class: 'kwr-file-meta' });
    var replaceBtn = el('button', {
      type: 'button', class: 'kwr-linkbtn', text: 'Replace',
      on: { click: function () { fileInput.click(); } }
    });
    var removeBtn = el('button', {
      type: 'button', class: 'kwr-linkbtn', text: 'Remove',
      on: { click: function () { clearFile(); attachBtn.focus(); } }
    });
    var filePreview = el('div', { class: 'kwr-file-preview', hidden: true }, [
      thumb,
      el('span', { class: 'kwr-file-text' }, [fileName, fileMeta]),
      el('span', { class: 'kwr-file-actions' }, [replaceBtn, removeBtn])
    ]);
    var fileErr = el('p', { class: 'kwr-error', id: 'kwr-err-file', role: 'alert', hidden: true });
    var fileField = el('div', { class: 'kwr-field' }, [
      el('span', { class: 'kwr-label', id: 'kwr-file-label' }, [
        doc.createTextNode('Screenshot '),
        el('span', { class: 'kwr-optional', text: 'optional' })
      ]),
      fileInput, attachBtn, filePreview, fileErr,
      el('p', { class: 'kwr-hint', text: 'PNG, JPEG or WebP \u00b7 up to 2 MB' })
    ]);

    var form = el('form', { class: 'kwr-form', novalidate: true }, [catField, descField, fileField]);

    /* --- context strip: what we attach automatically --- */
    var ctxDetail = el('dl', { class: 'kwr-ctx-grid' });
    var ctxBox = el('details', { class: 'kwr-ctx' }, [
      el('summary', { class: 'kwr-ctx-summary', text: 'What gets sent with this report' }),
      ctxDetail
    ]);

    /* --- states --- */
    var successBody = el('div', { class: 'kwr-state kwr-success', hidden: true, tabindex: '-1' });
    var errorBar = el('div', { class: 'kwr-bar kwr-bar-error', role: 'alert', hidden: true });

    var devNote = el('p', {
      class: 'kwr-devnote',
      text: 'Reporting service not connected yet \u2014 sending is disabled in this build.'
    });

    var cancelBtn = el('button', {
      type: 'button', class: 'kwr-btn kwr-btn-ghost', text: 'Cancel',
      on: { click: function () { requestClose(); } }
    });
    var sendBtn = el('button', {
      type: 'button', class: 'kwr-btn kwr-btn-primary',
      on: { click: function () { onSend(); } }
    }, [el('span', { class: 'kwr-btn-label', text: 'Send report' }),
        el('span', { class: 'kwr-spinner', 'aria-hidden': 'true' })]);
    if (!SUBMIT_ENABLED) {
      sendBtn.disabled = true;
      sendBtn.setAttribute('aria-disabled', 'true');
      sendBtn.title = 'Reporting service not connected yet';
    }

    var confirmBar = el('div', { class: 'kwr-confirm', hidden: true }, [
      el('span', { class: 'kwr-confirm-text', text: 'Discard this report?' }),
      el('span', { class: 'kwr-confirm-actions' }, [
        el('button', {
          type: 'button', class: 'kwr-linkbtn', text: 'Keep writing',
          on: { click: function () { setConfirm(false); desc.focus(); } }
        }),
        el('button', {
          type: 'button', class: 'kwr-btn kwr-btn-ghost kwr-btn-sm', text: 'Discard',
          on: { click: function () { close(true); } }
        })
      ])
    ]);

    var actions = el('div', { class: 'kwr-actions' }, [cancelBtn, sendBtn]);
    var foot = el('footer', { class: 'kwr-foot' }, [
      SUBMIT_ENABLED ? null : devNote, errorBar, confirmBar, actions
    ]);

    var closeBtn = el('button', {
      type: 'button', class: 'kwr-close', 'aria-label': 'Close', html: ICON_CLOSE,
      on: { click: function () { requestClose(); } }
    });

    var scroll = el('div', { class: 'kwr-scroll' }, [
      el('header', { class: 'kwr-head' }, [ctxLine, title, sub]),
      form, ctxBox, successBody
    ]);

    var dialog = el('div', {
      class: 'kwr-dialog', role: 'dialog', 'aria-modal': 'true',
      'aria-labelledby': 'kwr-title', 'aria-describedby': 'kwr-sub'
    }, [el('div', { class: 'kwr-grab', 'aria-hidden': 'true' }), closeBtn, scroll, foot]);

    var backdrop = el('div', {
      class: 'kwr-backdrop', on: { click: function () { requestClose(); } }
    });

    var root = el('div', { class: 'kw-report-root kwr-overlay', hidden: true }, [backdrop, dialog]);

    var tsHost = el('div', { class: 'kwr-turnstile', 'aria-hidden': 'true' });
    dialog.appendChild(tsHost);
    tsState.host = tsHost;

    dialog.addEventListener('keydown', onDialogKey);
    doc.body.appendChild(root);

    M = {
      root: root, dialog: dialog, scroll: scroll, form: form, foot: foot,
      ctxLine: ctxLine, ctxDetail: ctxDetail, ctxBox: ctxBox,
      radios: radios, catErr: catErr,
      desc: desc, descErr: descErr, count: count,
      fileInput: fileInput, attachBtn: attachBtn, filePreview: filePreview,
      thumb: thumb, fileName: fileName, fileMeta: fileMeta, fileErr: fileErr,
      successBody: successBody, errorBar: errorBar, confirmBar: confirmBar,
      actions: actions, sendBtn: sendBtn, cancelBtn: cancelBtn, closeBtn: closeBtn,
      file: null, objectUrl: null, upload: null, busy: false, done: false
    };
    return M;
  }

  /* ---------- form helpers ---------- */

  function setError(node, msg) { node.textContent = msg; node.hidden = false; }
  function clearError(node) { node.textContent = ''; node.hidden = true; }

  function updateCount() {
    var n = M.desc.value.length;
    M.count.textContent = n + ' / ' + MAX_DESCRIPTION;
    M.count.classList.toggle('is-near', n > MAX_DESCRIPTION - 200);
  }

  function selectedCategory() {
    for (var i = 0; i < M.radios.length; i++) if (M.radios[i].checked) return M.radios[i].value;
    return null;
  }

  function onFile(file) {
    if (!file) return;
    var v = validateScreenshot(file);
    if (!v.ok) {
      clearFile();
      setError(M.fileErr, v.reason === 'type'
        ? 'That file type is not supported. Use PNG, JPEG or WebP.'
        : 'That image is larger than 2 MB. Try a smaller screenshot.');
      return;
    }
    clearError(M.fileErr);
    revokeUrl();
    M.file = file;
    M.upload = null;
    M.objectUrl = URL.createObjectURL(file);
    M.thumb.src = M.objectUrl;
    M.fileName.textContent = file.name || 'screenshot';
    M.fileMeta.textContent = 'Preparing\u2026';
    M.filePreview.hidden = false;
    M.attachBtn.hidden = true;

    var token = M.file;
    prepareScreenshot(file).then(function (out) {
      if (M.file !== token) return;            // replaced or removed meanwhile
      M.upload = out.file;
      M.fileMeta.textContent = fileSize(out.file.size) +
        (out.processed ? ' \u00b7 resized' : '');
    });
  }

  function revokeUrl() {
    if (M.objectUrl) { try { URL.revokeObjectURL(M.objectUrl); } catch (e) {} M.objectUrl = null; }
  }

  function clearFile() {
    revokeUrl();
    M.file = null;
    M.upload = null;
    M.fileInput.value = '';
    M.thumb.removeAttribute('src');
    M.fileName.textContent = '';
    M.fileMeta.textContent = '';
    M.filePreview.hidden = true;
    M.attachBtn.hidden = false;
  }

  function isDirty() {
    return !!(M.desc.value.trim() || selectedCategory() || M.file);
  }

  function resetForm() {
    M.radios.forEach(function (r) { r.checked = false; });
    M.desc.value = '';
    updateCount();
    clearFile();
    clearError(M.catErr); clearError(M.descErr); clearError(M.fileErr);
    M.errorBar.hidden = true;
    setConfirm(false);
    M.form.hidden = false;
    M.ctxBox.hidden = false;
    M.successBody.hidden = true;
    M.actions.hidden = false;
    M.done = false;
    setBusy(false);
  }

  function setConfirm(on) {
    M.confirmBar.hidden = !on;
    M.actions.hidden = on;
  }

  function setBusy(on) {
    M.busy = on;
    M.root.classList.toggle('is-busy', on);
    M.sendBtn.disabled = on || !SUBMIT_ENABLED;
    M.cancelBtn.disabled = on;
    M.desc.readOnly = on;
    M.sendBtn.querySelector('.kwr-btn-label').textContent = on ? 'Sending\u2026' : 'Send report';
  }

  /* ---------- validate + send ---------- */

  function validate() {
    var ok = true;
    if (!selectedCategory()) { setError(M.catErr, 'Choose the kind of problem.'); ok = false; }
    var text = M.desc.value.trim();
    if (text.length < MIN_DESCRIPTION) {
      setError(M.descErr, text.length
        ? 'Add a little more detail \u2014 at least ' + MIN_DESCRIPTION + ' characters.'
        : 'Tell us what went wrong.');
      ok = false;
    }
    if (!ok) {
      var first = M.dialog.querySelector('.kwr-error:not([hidden])');
      if (first === M.catErr) M.radios[0].focus();
      else if (first) M.desc.focus();
    }
    return ok;
  }

  function onSend() {
    if (M.busy) return;
    if (!validate()) return;
    setBusy(true);
    M.errorBar.hidden = true;
    turnstileToken().then(function (token) {
      return submit({
        category: selectedCategory(),
        description: M.desc.value.trim(),
        context: current.context
      }, M.upload || M.file, token);
    }).then(function (res) {
      setBusy(false);
      if (res.ok) showSuccess(res);
      else showFailure(res);
    });
  }

  function showSuccess(res) {
    M.done = true;
    M.form.hidden = true;
    M.ctxBox.hidden = true;
    M.actions.hidden = false;
    M.successBody.hidden = false;
    M.successBody.textContent = '';
    M.successBody.appendChild(el('p', { class: 'kwr-success-title', text: 'Report sent' }));
    M.successBody.appendChild(el('p', {
      class: 'kwr-success-sub',
      text: res.duplicate
        ? 'We already had this one on file. Thank you for flagging it.'
        : 'Thank you. We read every report and fix what we can.'
    }));
    if (res.id) {
      M.successBody.appendChild(el('p', { class: 'kwr-refid' }, [
        doc.createTextNode('Reference '), el('code', { text: res.id })
      ]));
    }
    M.sendBtn.hidden = true;
    M.cancelBtn.textContent = 'Close';
    M.successBody.focus();
  }

  function showFailure(res) {
    var msg;
    if (res.code === 'rate_limited') {
      msg = 'You have sent several reports recently. Please try again a little later.';
    } else if (res.code === 'service_busy' || res.status === 503) {
      msg = 'The reporting service is busy right now. Please try again later.';
    } else if (res.code === 'verification_failed' || res.status === 403) {
      msg = 'We could not verify this submission. Please try again.';
    } else if (res.code === 'invalid_section') {
      msg = 'We could not identify this section. Please reload the page and try again.';
    } else if (res.status === 400) {
      msg = 'Please check the description and issue type, then try again.';
    } else if (res.code === 'network' || res.status === 0) {
      msg = 'Could not send \u2014 check your connection and try again. Your text is still here.';
    } else {
      msg = 'Something went wrong on our side. Please try again in a moment.';
    }
    M.errorBar.textContent = msg;
    M.errorBar.hidden = false;
    M.errorBar.focus && M.errorBar.focus();
  }

  /* ---------- open / close / focus ---------- */

  var lastFocus = null;
  var scrollLock = null;

  function fillContext(ctx) {
    var bits = [];
    if (ctx.level) bits.push(ctx.level);
    if (ctx.chapter_no != null) bits.push('Kapitel ' + ctx.chapter_no);
    if (ctx.section_label) bits.push(ctx.section_label);
    M.ctxLine.textContent = bits.join('  \u00b7  ');

    M.ctxDetail.textContent = '';
    [
      ['Chapter', (ctx.chapter_no != null ? ctx.chapter_no + ' \u00b7 ' : '') + (ctx.chapter_title || '')],
      ['Section', ctx.section_label || ''],
      ['Section ID', ctx.section_ref || ''],
      ['Page', ctx.page_url || ''],
      ['Screen', ctx.viewport + ' \u00b7 ' + ctx.ua_family]
    ].forEach(function (pair) {
      if (!pair[1]) return;
      M.ctxDetail.appendChild(el('dt', { text: pair[0] }));
      M.ctxDetail.appendChild(el('dd', { text: pair[1] }));
    });
  }

  function open(section, chapter, trigger) {
    build();
    ensureStyles();
    current = {
      section: section, chapter: chapter, trigger: trigger || null,
      context: collectContext(chapter, section)
    };
    if (!current.context.section_ref) return;   // unknown location — do not open

    resetForm();
    M.sendBtn.hidden = false;
    M.cancelBtn.textContent = 'Cancel';
    fillContext(current.context);

    lastFocus = doc.activeElement;
    M.root.hidden = false;
    lockScroll();
    // next frame so the transition runs from the closed state
    global.requestAnimationFrame(function () {
      M.root.classList.add('is-open');
      M.desc.focus({ preventScroll: true });
    });
  }

  function requestClose() {
    if (M.busy) return;
    if (M.done || !isDirty()) { close(true); return; }
    setConfirm(true);
  }

  function close(force) {
    if (!M || (M.busy && !force)) return;
    M.root.classList.remove('is-open');
    setConfirm(false);
    var finish = function () {
      M.root.hidden = true;
      clearFile();
      unlockScroll();
      // Prefer the element that had focus; fall back to the trigger when the
      // modal was opened programmatically (or focus was on <body>).
      var back = (lastFocus && lastFocus !== doc.body && lastFocus.isConnected)
        ? lastFocus : (current && current.trigger);
      if (back && back.focus) { try { back.focus(); } catch (e) {} }
      lastFocus = null;
    };
    if (prefersReducedMotion()) finish();
    else setTimeout(finish, 200);
  }

  function prefersReducedMotion() {
    return !!(global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function lockScroll() {
    if (scrollLock !== null) return;
    scrollLock = doc.body.style.overflow || '';
    doc.body.style.overflow = 'hidden';
  }
  function unlockScroll() {
    if (scrollLock === null) return;
    doc.body.style.overflow = scrollLock;
    scrollLock = null;
  }

  var FOCUSABLE = 'a[href],button:not([disabled]),textarea:not([disabled]),' +
    'input:not([disabled]),select:not([disabled]),summary,[tabindex]:not([tabindex="-1"])';

  function onDialogKey(ev) {
    if (ev.key === 'Escape') { ev.stopPropagation(); requestClose(); return; }
    if (ev.key !== 'Tab') return;
    var nodes = [].slice.call(M.dialog.querySelectorAll(FOCUSABLE)).filter(function (n) {
      return n.offsetParent !== null || n === doc.activeElement;
    });
    if (!nodes.length) return;
    var first = nodes[0], last = nodes[nodes.length - 1];
    if (ev.shiftKey && doc.activeElement === first) { ev.preventDefault(); last.focus(); }
    else if (!ev.shiftKey && doc.activeElement === last) { ev.preventDefault(); first.focus(); }
  }

  /* ---------- the affordance --------------------------------------------
     attach(headEl, section, chapter) is the single integration point used
     by chapter-app.js sectionShell(). Wrapped so a throw here can never
     reach the caller's render path. */

  function attach(headEl, section, chapter) {
    try {
      if (!headEl || !section || !chapter) return null;
      if (!REPORTABLE[section.id]) return null;
      if (!sectionRef(chapter, section.id)) return null;
      if (headEl.querySelector('.kw-report-trigger')) return null;

      ensureStyles();
      var btn = el('button', {
        type: 'button',
        class: 'kw-report-trigger kw-report-root',
        'data-kwr-section': section.id,
        'aria-haspopup': 'dialog',
        on: {
          click: function (ev) {
            ev.preventDefault();
            try { open(section, chapter, btn); } catch (e) { /* lesson unaffected */ }
          }
        }
      }, [
        el('span', { class: 'kwr-tri', html: ICON_FLAG }),
        el('span', { text: 'Found something wrong?' })
      ]);
      btn.setAttribute('aria-label', 'Report a problem in ' + (section.label || 'this section'));
      headEl.appendChild(btn);
      return btn;
    } catch (e) {
      return null;   // never propagate into chapter-app
    }
  }

  global.KW_Report = {
    version: '1.0.0-live',
    endpoint: ENDPOINT,
    submitEnabled: SUBMIT_ENABLED,
    turnstileConfigured: turnstileConfigured(),
    CATEGORIES: CATEGORIES,
    MAX_DESCRIPTION: MAX_DESCRIPTION,
    MAX_SCREENSHOT: MAX_SCREENSHOT,
    isReportable: function (id) { return !!REPORTABLE[id]; },
    sectionRef: sectionRef,
    collectContext: collectContext,
    validateScreenshot: validateScreenshot,
    prepareScreenshot: prepareScreenshot,
    submit: submit,
    attach: attach,
    open: function (section, chapter, trigger) { try { open(section, chapter, trigger); } catch (e) {} },
    close: function () { try { close(true); } catch (e) {} },
    _internals: function () { return M; }   // test harness only
  };
})(window);
