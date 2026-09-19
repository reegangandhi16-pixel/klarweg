/* ============================================================
   KLARWEG · Admin dashboard  (admin-app.js)
   Vanilla, no framework, no build step — same rules as the
   shipped learner pages. All network access goes through
   KW_AdminAPI; this file only renders and reacts.

   Every piece of report text is written with textContent, never
   innerHTML, so learner-submitted text cannot execute here.
   ============================================================ */
(function (global) {
  'use strict';

  var API = global.KW_AdminAPI;
  var doc = document;

  var STATUSES = [
    { id: 'new', label: 'New' },
    { id: 'reviewing', label: 'Reviewing' },
    { id: 'fixed', label: 'Fixed' },
    { id: 'dismissed', label: 'Dismissed' }
  ];
  var CATEGORIES = [
    { id: 'content', label: 'Content' },
    { id: 'grammar', label: 'Grammar' },
    { id: 'vocabulary', label: 'Vocabulary' },
    { id: 'exercise', label: 'Exercise / Answer' },
    { id: 'audio', label: 'Audio' },
    { id: 'reading_listening', label: 'Reading / Listening' },
    { id: 'display', label: 'Display / Layout' },
    { id: 'technical', label: 'Technical' },
    { id: 'other', label: 'Other' }
  ];
  var LEVELS = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

  var labelOf = function (list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i].label;
    return id || '—';
  };

  /* ---------- tiny DOM helper ---------- */
  function el(tag, attrs, children) {
    var n = doc.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
      var v = attrs[k];
      if (v == null || v === false) continue;
      if (k === 'class') n.className = v;
      else if (k === 'text') n.textContent = v;
      else if (k === 'on') { for (var e in v) n.addEventListener(e, v[e]); }
      else n.setAttribute(k, v === true ? '' : String(v));
    }
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  var $ = function (s) { return doc.querySelector(s); };

  function when(ms) {
    if (!ms) return '—';
    var d = new Date(ms);
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) +
      ' · ' + d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  }
  function shortWhen(ms) {
    if (!ms) return '';
    var diff = Date.now() - ms;
    if (diff < 60000) return 'just now';
    if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
    if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago';
    if (diff < 604800000) return Math.floor(diff / 86400000) + 'd ago';
    return new Date(ms).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
  }

  /* ---------- state ---------- */
  var state = {
    filters: { status: '', category: '', level: '', chapter: '', q: '' },
    reports: [], nextCursor: null, loading: false,
    counts: { new: 0, reviewing: 0, fixed: 0, dismissed: 0, total: 0 },
    chapters: [], openId: null, lastRow: null
  };
  var searchTimer = null;

  /* ============================================================
     AUTH SHELL
     ============================================================ */

  function showLogin(message) {
    $('#dashboard').hidden = true;
    $('#login').hidden = false;
    var msg = $('#login-msg');
    if (message) { msg.textContent = message; msg.hidden = false; msg.className = 'msg msg-info'; }
    else { msg.hidden = true; }
    $('#passphrase').value = '';
    $('#passphrase').focus();
  }

  function showDashboard() {
    $('#login').hidden = true;
    $('#dashboard').hidden = false;
  }

  async function onLoginSubmit(ev) {
    ev.preventDefault();
    var btn = $('#login-btn'), input = $('#passphrase'), msg = $('#login-msg');
    if (!input.value) { input.focus(); return; }
    btn.disabled = true; btn.textContent = 'Signing in…';
    var res = await API.login(input.value);
    input.value = '';                       // never kept in memory longer than the request
    btn.disabled = false; btn.textContent = 'Sign in';
    if (res.ok) { msg.hidden = true; showDashboard(); return boot(); }
    msg.className = 'msg msg-error';
    msg.hidden = false;
    // Deliberately identical copy for wrong / empty / unknown — no oracle.
    msg.textContent =
      res.code === 'rate_limited' ? 'Too many attempts. Try again in a few minutes.' :
      res.code === 'not_configured' ? 'Admin access is not configured on this deployment.' :
      res.code === 'network' ? 'Could not reach the server. Check your connection and try again.' :
      'That passphrase was not accepted.';
  }

  async function onLogout() {
    await API.logout();
    state.reports = []; state.openId = null;
    closeDrawer();
    showLogin('Signed out.');
  }

  global.addEventListener('kw-admin:unauthorized', function () {
    // Session expired or revoked anywhere in the app → straight back to login.
    if ($('#dashboard').hidden) return;
    closeDrawer();
    showLogin('Your session expired. Please sign in again.');
  });

  /* ============================================================
     LIST
     ============================================================ */

  function renderCounts() {
    var host = $('#counts');
    host.textContent = '';
    var cards = [{ id: '', label: 'Total reports', n: state.counts.total }].concat(
      STATUSES.map(function (s) { return { id: s.id, label: s.label, n: state.counts[s.id] || 0 }; })
    );
    cards.forEach(function (c) {
      var active = state.filters.status === c.id;
      host.appendChild(el('button', {
        class: 'count' + (active ? ' is-active' : ''), role: 'button', type: 'button',
        'aria-pressed': active ? 'true' : 'false',
        on: { click: function () { setFilter('status', c.id); } }
      }, [
        el('b', { text: String(c.n) }),
        el('span', { class: 'eyebrow', text: c.label })
      ]));
    });
  }

  function statusPill(s) {
    return el('span', { class: 'status', 'data-s': s, text: labelOf(STATUSES, s) });
  }

  function renderRow(r) {
    var loc = el('div', { class: 'row-loc' }, [
      statusPill(r.status),
      el('span', { class: 'chip chip-level', text: String(r.level || '').toUpperCase() }),
      el('span', { class: 'chip', text: 'Kap. ' + (r.chapter_no != null ? r.chapter_no : '—') }),
      el('span', { class: 'chip', text: r.section_label || r.section_id }),
      el('span', { class: 'chip', text: labelOf(CATEGORIES, r.category) }),
      r.dup_count > 1 ? el('span', { class: 'chip chip-dup', text: '×' + r.dup_count }) : null
    ]);
    var row = el('button', {
      class: 'row' + (state.openId === r.id ? ' is-open' : ''), type: 'button',
      'data-id': r.id, 'aria-label': 'Open report ' + r.id,
      on: { click: function () { openDetail(r.id, row); } }
    }, [
      el('div', { class: 'row-main' }, [
        loc,
        el('p', { class: 'row-desc', text: r.description || '' }),
        el('p', { class: 'mono', style: 'margin:6px 0 0;color:var(--ink-3)', text: r.chapter_title || r.chapter_id })
      ]),
      el('div', { class: 'row-meta' }, [
        el('span', { class: 'rid', text: r.id }),
        el('span', { class: 'when', title: when(r.created_at), text: shortWhen(r.created_at) })
      ])
    ]);
    // three-column grid: main, spacer, meta
    row.insertBefore(el('span', { class: 'sr', text: labelOf(STATUSES, r.status) }), row.firstChild);
    return row;
  }

  function renderList() {
    var host = $('#list');
    host.textContent = '';
    if (state.loading && !state.reports.length) {
      for (var i = 0; i < 4; i++) host.appendChild(el('div', { class: 'skeleton' }));
      $('#more').hidden = true;
      return;
    }
    if (!state.reports.length) {
      host.appendChild(emptyState());
      $('#more').hidden = true;
      return;
    }
    state.reports.forEach(function (r) { host.appendChild(renderRow(r)); });
    $('#more').hidden = !state.nextCursor;
  }

  function emptyState() {
    var filtered = Object.keys(state.filters).some(function (k) { return state.filters[k]; });
    return el('div', { class: 'state' }, [
      el('h3', { text: filtered ? 'No reports match these filters' : 'No reports yet' }),
      el('p', {
        text: filtered
          ? 'Try clearing the search or widening the filters.'
          : 'Reports submitted from a chapter section will appear here, newest first.'
      }),
      filtered ? el('button', {
        class: 'btn btn-ghost btn-sm', type: 'button', text: 'Clear filters',
        on: { click: clearFilters }
      }) : null
    ]);
  }

  function errorState(res, retry) {
    var msg =
      res.code === 'network' ? 'Could not reach the server.' :
      res.status === 403 ? 'You do not have permission to view this.' :
      'Something went wrong loading reports.';
    return el('div', { class: 'state' }, [
      el('h3', { text: 'Could not load' }),
      el('p', { text: msg }),
      el('button', { class: 'btn btn-ghost btn-sm', type: 'button', text: 'Try again', on: { click: retry } })
    ]);
  }

  var reqSeq = 0;
  async function loadList(append) {
    // Requests are sequenced rather than blocked: a fast typist changing the
    // search while a fetch is in flight must still get the latest result.
    var seq = ++reqSeq;
    state.loading = true;
    if (!append) { state.reports = []; state.nextCursor = null; renderList(); }

    var f = state.filters;
    var res = await API.list({
      status: f.status, category: f.category, level: f.level, chapter: f.chapter,
      q: f.q, cursor: append ? state.nextCursor : null
    });
    if (seq !== reqSeq) return;            // superseded by a newer request
    state.loading = false;

    if (!res.ok) {
      if (res.status === 401) return;                  // handled by the shell
      var host = $('#list');
      host.textContent = '';
      host.appendChild(errorState(res, function () { loadList(false); }));
      $('#more').hidden = true;
      return;
    }
    state.reports = append ? state.reports.concat(res.data.reports || []) : (res.data.reports || []);
    state.nextCursor = res.data.nextCursor || null;
    renderList();
  }

  async function loadFacets() {
    var res = await API.facets();
    if (!res.ok) return;
    var d = res.data;
    var counts = { new: 0, reviewing: 0, fixed: 0, dismissed: 0, total: 0 };
    (d.statuses || []).forEach(function (s) { counts[s.status] = s.n; counts.total += s.n; });
    state.counts = counts;
    state.chapters = d.chapters || [];
    renderCounts();
    renderChapterFilter();
  }

  function renderChapterFilter() {
    var sel = $('#f-chapter');
    var current = state.filters.chapter;
    sel.textContent = '';
    sel.appendChild(el('option', { value: '', text: 'All chapters' }));
    state.chapters
      .filter(function (c) { return !state.filters.level || c.level === state.filters.level; })
      .forEach(function (c) {
        sel.appendChild(el('option', {
          value: c.chapter_id,
          text: String(c.level || '').toUpperCase() + ' · ' + (c.chapter_no != null ? c.chapter_no + ' · ' : '') +
                (c.chapter_title || c.chapter_id) + '  (' + c.n + ')'
        }));
      });
    sel.value = current;
    if (sel.value !== current) state.filters.chapter = '';
  }

  function setFilter(key, value) {
    state.filters[key] = value === state.filters[key] && key === 'status' ? '' : value;
    if (key === 'level') { state.filters.chapter = ''; renderChapterFilter(); }
    $('#f-status').value = state.filters.status;
    $('#f-category').value = state.filters.category;
    $('#f-level').value = state.filters.level;
    $('#f-chapter').value = state.filters.chapter;
    renderCounts();
    loadList(false);
  }

  function clearFilters() {
    state.filters = { status: '', category: '', level: '', chapter: '', q: '' };
    $('#f-search').value = '';
    renderChapterFilter();
    setFilter('status', '');
  }

  /* ============================================================
     DETAIL DRAWER
     ============================================================ */

  var lastFocus = null;

  function closeDrawer() {
    var host = $('#drawer-host');
    if (host.hidden) return;
    var id = state.openId;
    host.classList.remove('is-open');
    state.openId = null;
    var rows = doc.querySelectorAll('.row.is-open');
    for (var i = 0; i < rows.length; i++) rows[i].classList.remove('is-open');
    setTimeout(function () { host.hidden = true; }, 200);
    releaseShot();
    // The list may have re-rendered while the drawer was open (a status
    // change repaints it), so fall back to the row with the same id.
    var back = (lastFocus && lastFocus.isConnected) ? lastFocus :
      (id ? doc.querySelector('.row[data-id="' + id + '"]') : null);
    if (back && back.focus) { try { back.focus(); } catch (e) {} }
    lastFocus = null;
  }

  function drawerKey(ev) {
    if (ev.key === 'Escape') { closeDrawer(); return; }
    if (ev.key !== 'Tab') return;
    var nodes = [].slice.call($('#drawer').querySelectorAll(
      'a[href],button:not([disabled]),select:not([disabled]),textarea:not([disabled]),input:not([disabled]),[tabindex]:not([tabindex="-1"])'
    )).filter(function (n) { return n.offsetParent !== null; });
    if (!nodes.length) return;
    var first = nodes[0], last = nodes[nodes.length - 1];
    if (ev.shiftKey && doc.activeElement === first) { ev.preventDefault(); last.focus(); }
    else if (!ev.shiftKey && doc.activeElement === last) { ev.preventDefault(); first.focus(); }
  }

  async function openDetail(id, rowEl) {
    lastFocus = rowEl || doc.activeElement;
    state.openId = id;
    state.lastRow = rowEl || null;
    if (rowEl) {
      var open = doc.querySelectorAll('.row.is-open');
      for (var i = 0; i < open.length; i++) open[i].classList.remove('is-open');
      rowEl.classList.add('is-open');
    }
    var host = $('#drawer-host');
    host.hidden = false;
    setTimeout(function () { host.classList.add('is-open'); }, 16);
    var body = $('#drawer-body');
    body.textContent = '';
    body.appendChild(el('div', { class: 'skeleton', style: 'height:180px' }));
    $('#drawer-title').textContent = id;
    $('#drawer-close').focus();

    var res = await API.get(id);
    if (!res.ok) {
      body.textContent = '';
      if (res.status === 401) return;
      body.appendChild(errorState(res, function () { openDetail(id, rowEl); }));
      return;
    }
    renderDetail(res.data.report);
  }

  function renderDetail(r) {
    var body = $('#drawer-body');
    body.textContent = '';
    $('#drawer-title').textContent = r.id;
    $('#drawer-kicker').textContent = labelOf(CATEGORIES, r.category) + ' issue';

    body.appendChild(el('div', { class: 'row-loc' }, [
      statusPill(r.status),
      el('span', { class: 'chip chip-level', text: String(r.level || '').toUpperCase() }),
      el('span', { class: 'chip', text: 'Kapitel ' + (r.chapter_no != null ? r.chapter_no : '—') }),
      el('span', { class: 'chip', text: r.section_label || r.section_id }),
      r.dup_count > 1 ? el('span', { class: 'chip chip-dup', text: 'Reported ×' + r.dup_count }) : null
    ]));

    body.appendChild(el('div', { class: 'block' }, [
      el('h3', { text: 'What the learner wrote' }),
      el('p', { class: 'quote', text: r.description || '' })
    ]));

    var grid = el('dl', { class: 'meta-grid' });
    [
      ['Chapter', (r.chapter_no != null ? r.chapter_no + ' · ' : '') + (r.chapter_title || r.chapter_id)],
      ['Section', (r.section_label || r.section_id) + ' (' + r.section_id + ')'],
      ['Section ID', r.section_ref],
      ['Page', r.page_path],
      ['Reported', when(r.created_at)],
      ['Viewport', r.viewport ? r.viewport + (r.dpr ? ' @' + r.dpr + 'x' : '') : '—'],
      ['Device', r.ua_family || '—'],
      ['Reduced motion', r.prefers_rm ? 'on' : 'off'],
      ['Page title', r.claimed_title || '—'],
      ['Last updated', r.updated_at ? when(r.updated_at) + (r.updated_by ? ' · ' + r.updated_by : '') : '—']
    ].forEach(function (p) {
      grid.appendChild(el('dt', { text: p[0] }));
      grid.appendChild(el('dd', { text: p[1] == null ? '—' : String(p[1]) }));
    });
    body.appendChild(el('div', { class: 'block' }, [el('h3', { text: 'Context' }), grid]));

    /* screenshot — fetched through the Worker with the session cookie, then
       shown from a blob URL. No R2 URL is ever constructed or exposed. */
    if (r.has_screenshot) {
      var box = el('div', { class: 'shot-box', text: 'Loading screenshot…' });
      var block = el('div', { class: 'block' }, [el('h3', { text: 'Screenshot' }), box]);
      body.appendChild(block);
      loadShot(r.id, block, box);
    }

    /* status + notes */
    var saved = el('span', { class: 'saved', hidden: true, role: 'status', text: 'Saved' });
    var statusSel = el('select', { id: 'd-status', 'aria-label': 'Report status' },
      STATUSES.map(function (s) { return el('option', { value: s.id, text: s.label, selected: r.status === s.id }); }));
    statusSel.value = r.status;
    statusSel.addEventListener('change', function () { patch(r, { status: statusSel.value }, saved, statusSel); });

    body.appendChild(el('div', { class: 'block' }, [
      el('h3', { text: 'Status' }),
      el('div', { class: 'status-row' }, [statusSel, saved])
    ]));

    var notes = el('textarea', {
      id: 'd-notes', maxlength: 4000, placeholder: 'Internal notes — never shown to learners.',
      'aria-label': 'Internal notes'
    });
    notes.value = r.admin_notes || '';
    var notesSaved = el('span', { class: 'saved', hidden: true, role: 'status', text: 'Saved' });
    var saveNotes = el('button', {
      class: 'btn btn-ghost btn-sm', type: 'button', text: 'Save notes',
      on: { click: function () { patch(r, { admin_notes: notes.value }, notesSaved, saveNotes); } }
    });
    body.appendChild(el('div', { class: 'block' }, [
      el('h3', { text: 'Internal notes' }), notes,
      el('div', { class: 'status-row' }, [saveNotes, notesSaved])
    ]));

    /* deep link to the exact section */
    var href = r.open_url || (r.page_path + '#sec-' + r.section_id);
    $('#drawer-open').href = href;
    $('#drawer-open').hidden = false;
  }

  var shotUrl = null;
  function releaseShot() {
    if (shotUrl) { try { URL.revokeObjectURL(shotUrl); } catch (e) {} shotUrl = null; }
  }

  async function loadShot(id, block, box) {
    box.textContent = 'Loading screenshot…';
    var res = await API.screenshot(id);
    if (!res.ok) {
      box.textContent = '';
      box.appendChild(el('span', {
        text: res.code === 'network' ? 'Could not reach the server.' : 'Screenshot could not be loaded.'
      }));
      box.appendChild(el('button', {
        class: 'btn btn-ghost btn-sm', type: 'button', text: 'Retry', style: 'margin-left:12px',
        on: { click: function () { loadShot(id, block, box); } }
      }));
      return;
    }
    releaseShot();
    shotUrl = URL.createObjectURL(res.blob);
    var img = el('img', { class: 'shot', src: shotUrl, alt: 'Screenshot attached to report ' + id });
    if (box.parentNode === block) block.replaceChild(img, box);
    else block.appendChild(img);
  }

  async function patch(r, changes, savedEl, control) {
    control.disabled = true;
    savedEl.hidden = true;
    var res = await API.patch(r.id, changes);
    control.disabled = false;
    if (!res.ok) {
      if (res.status === 401) return;
      savedEl.hidden = false;
      savedEl.style.color = 'var(--danger)';
      savedEl.textContent = res.code === 'csrf' ? 'Session problem — sign in again.' :
        res.code === 'network' ? 'Could not save — try again.' : 'Could not save.';
      return;
    }
    savedEl.style.color = '';
    savedEl.textContent = 'Saved';
    savedEl.hidden = false;
    setTimeout(function () { savedEl.hidden = true; }, 2200);
    if (changes.status) {
      r.status = changes.status;
      var row = state.reports.filter(function (x) { return x.id === r.id; })[0];
      if (row) row.status = changes.status;
      renderList();
      loadFacets();
    }
    if (changes.admin_notes !== undefined) r.admin_notes = changes.admin_notes;
  }

  /* ============================================================
     BOOT
     ============================================================ */

  function wire() {
    $('#login-form').addEventListener('submit', onLoginSubmit);
    $('#logout').addEventListener('click', onLogout);
    $('#drawer-close').addEventListener('click', closeDrawer);
    $('#drawer-backdrop').addEventListener('click', closeDrawer);
    $('#drawer').addEventListener('keydown', drawerKey);
    $('#more-btn').addEventListener('click', function () { loadList(true); });
    $('#clear').addEventListener('click', clearFilters);

    var sel = { 'f-status': 'status', 'f-category': 'category', 'f-level': 'level', 'f-chapter': 'chapter' };
    Object.keys(sel).forEach(function (id) {
      $('#' + id).addEventListener('change', function (e) { setFilter(sel[id], e.target.value); });
    });
    $('#f-search').addEventListener('input', function (e) {
      clearTimeout(searchTimer);
      var v = e.target.value.trim();
      searchTimer = setTimeout(function () { state.filters.q = v; loadList(false); }, 280);
    });

    // populate the static option lists
    STATUSES.forEach(function (s) { $('#f-status').appendChild(el('option', { value: s.id, text: s.label })); });
    CATEGORIES.forEach(function (c) { $('#f-category').appendChild(el('option', { value: c.id, text: c.label })); });
    LEVELS.forEach(function (l) { $('#f-level').appendChild(el('option', { value: l, text: l.toUpperCase() })); });
  }

  async function boot() {
    renderCounts();
    await Promise.all([loadFacets(), loadList(false)]);
  }

  async function start() {
    wire();
    var me = await API.me();
    if (me.ok) { showDashboard(); return boot(); }
    if (me.code === 'network') { showLogin('Could not reach the server. Sign in to try again.'); return; }
    showLogin();
  }

  global.KW_Admin = { start: start, _state: state, _boot: boot };
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', start);
  else start();
})(window);
