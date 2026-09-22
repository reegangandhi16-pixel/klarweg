/* ============================================================
   KLARWEG · CHAPTER ACCESS CONTROL  (kw-access.js)
   ------------------------------------------------------------
   SINGLE SOURCE OF TRUTH for "can this learner open this chapter".
   Loaded by the level roadmap pages (a1..c2.html) and by every
   chapter page. Nothing else in the project may decide access.

   Access rule (business):
     FREE    → Chapter 1 of every level (A1, A2, B1, B2, C1, C2)
     LOCKED  → every other chapter, A1 through C2
     A level entitlement unlocks every chapter of THAT level.
     LIFETIME unlocks all six levels.

   ------------------------------------------------------------
   SECURITY — READ BEFORE EXTENDING
   ------------------------------------------------------------
   This site is static (GitHub Pages). Everything served here is
   publicly downloadable. This module is an ACCESS-CONTROL UI
   LAYER, not content protection: it decides what the app renders,
   it does not and cannot keep a determined visitor away from a
   chapter data file that is served publicly.

   Real protection requires the chapter payload to be served by
   an authenticated endpoint. The integration boundary for that
   is KWAccess.configureEntitlementSource() below.
   ============================================================ */
(function (global) {
  'use strict';

  var LEVELS = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

  /* Free chapters, expressed as a rule rather than 259 permissions.
     Derived from level + chapter number only. */
  var FREE_CHAPTER_NUMBER = 1;

  /* Where this file was loaded from — used to pull in its siblings
     (kw-config / kw-products / kw-auth / kw-checkout) without having
     to add four script tags to 259 chapter pages. */
  var SELF_SRC = (function () {
    var s = document.currentScript;
    if (s && s.src) return s.src;
    var all = document.getElementsByTagName('script');
    for (var i = all.length - 1; i >= 0; i--) {
      if (/kw-access\.js(\?|$)/.test(all[i].src || '')) return all[i].src;
    }
    return '';
  })();
  function siblingUrl(name) {
    return SELF_SRC ? SELF_SRC.replace(/kw-access\.js(\?.*)?$/, name) : name;
  }
  function rootPrefix() {
    var p = global.location.pathname;
    return /\/(chapter|account|report|admin)\//.test(p) ? '../' : '';
  }

  function normLevel(level) {
    if (!level) return null;
    var l = String(level).trim().toLowerCase();
    return LEVELS.indexOf(l) === -1 ? null : l;
  }
  function normNumber(n) {
    var v = typeof n === 'number' ? n : parseInt(String(n), 10);
    return isFinite(v) && v > 0 ? v : null;
  }

  /* Chapter ids in this project look like "a1-3-zahlen" / "b2-41-...".
     parseChapterRef accepts an id, a CHAPTER object, or (level, number). */
  function parseChapterRef(a, b) {
    if (a && typeof a === 'object') {
      var id = a.id || '';
      var fromId = /^([a-c][12])-(\d+)/i.exec(id);
      return {
        level: normLevel(a.level || (fromId && fromId[1])),
        number: normNumber(a.number != null ? a.number : (fromId && fromId[2])),
        title: a.title || null,
        id: id || null
      };
    }
    if (typeof a === 'string' && b == null) {
      var m = /^([a-c][12])-(\d+)/i.exec(a.trim());
      if (m) return { level: normLevel(m[1]), number: normNumber(m[2]), title: null, id: a };
      return { level: normLevel(a), number: null, title: null, id: null };
    }
    return { level: normLevel(a), number: normNumber(b), title: null, id: null };
  }

  /* ---------- Entitlement state ----------
     Authoritative state comes from the server. Until a source is
     configured the app runs in its only safe default: anonymous,
     no entitlement. */
  function emptyLevels() {
    var e = {};
    LEVELS.forEach(function (l) { e[l] = false; });
    return e;
  }

  var state = {
    authenticated: false,
    hasFullAccess: false,
    levels: emptyLevels(),
    source: 'default-anonymous',
    resolvedAt: null
  };

  var entitlementSource = null;   // see configureEntitlementSource()
  var listeners = [];

  /* ---------- Readiness ----------
     Resolves once, the first time the entitlement source has actually
     answered (success or failure — "never fail open" still applies to
     the state itself; ready() only reports that a real answer, not the
     default-anonymous placeholder, is now in state). Callers that must
     not render before the server-authoritative access decision is known
     (e.g. a chapter page) await KWAccess.ready() before checking access. */
  var readyResolve = null;
  var readyResolved = false;
  var readyPromise = new Promise(function (resolve) { readyResolve = resolve; });
  function resolveReady(snap) {
    if (readyResolved) return;
    readyResolved = true;
    readyResolve(snap);
  }
  function ready() { return readyPromise; }

  function snapshot() {
    return {
      authenticated: !!state.authenticated,
      hasFullAccess: !!state.hasFullAccess,
      levels: Object.assign({}, state.levels),
      source: state.source,
      resolvedAt: state.resolvedAt
    };
  }

  /* Accepts either shape of entitlement payload:
       { authenticated, hasFullAccess }                       (legacy)
       { authenticated, hasFullAccess, entitlements:{A1..C2} } (current)
     hasFullAccess / LIFETIME implies every level. Never the reverse. */
  function readEntitlements(res) {
    res = res || {};
    var authed = res.authenticated === true;
    var src = res.entitlements && typeof res.entitlements === 'object' ? res.entitlements : {};
    var full = authed && (res.hasFullAccess === true || src.LIFETIME === true);
    var lv = emptyLevels();
    if (authed) {
      LEVELS.forEach(function (l) {
        lv[l] = full || src[l.toUpperCase()] === true || src[l] === true;
      });
    }
    return { authenticated: authed, hasFullAccess: full, levels: lv };
  }

  function setState(next, source) {
    var before = JSON.stringify([state.authenticated, state.hasFullAccess, state.levels]);
    var parsed = next && next.levels ? next : readEntitlements(next);
    state.authenticated = !!parsed.authenticated;
    state.hasFullAccess = !!parsed.hasFullAccess;
    state.levels = parsed.levels;
    state.source = source || 'unknown';
    state.resolvedAt = Date.now();
    if (JSON.stringify([state.authenticated, state.hasFullAccess, state.levels]) !== before) {
      var snap = snapshot();
      listeners.slice().forEach(function (fn) { try { fn(snap); } catch (e) {} });
      try { global.dispatchEvent(new CustomEvent('kw:access-changed', { detail: snap })); } catch (e) {}
    }
    return snapshot();
  }

  /* ============================================================
     BACKEND INTEGRATION POINT  (Cloudflare Worker + D1)
     ------------------------------------------------------------
     The payment/entitlement backend attaches HERE and nowhere else.
     By default this file wires itself to kw-auth.js, which is the
     adapter for the Access Worker's /auth/me. A different backend
     can replace it wholesale:

       KWAccess.configureEntitlementSource({
         fetchEntitlement: function () {
           return fetch(API + '/auth/me', { credentials: 'include' })
             .then(function (r) { return r.json(); });
         }
       });
       KWAccess.refresh();

     Contract:
       - Entitlement is accepted ONLY from this source.
       - A browser-side payment callback ("payment succeeded") must
         NEVER call setState / grant access. It may only trigger
         refresh(), which re-asks the server. Until the webhook has
         been verified server-side and the D1 entitlement row exists,
         refresh() keeps returning no entitlement — which is the
         required behaviour.
       - No Cashfree keys, order ids, or secrets belong in this file
         or in any frontend file.
     ============================================================ */
  function configureEntitlementSource(source) {
    if (!source || typeof source.fetchEntitlement !== 'function') {
      throw new Error('kw-access: entitlement source needs fetchEntitlement()');
    }
    entitlementSource = source;
    return API;
  }

  function refresh() {
    if (!entitlementSource) return Promise.resolve(snapshot());
    return Promise.resolve()
      .then(function () { return entitlementSource.fetchEntitlement(); })
      .then(function (res) {
        var snap = setState(readEntitlements(res), 'server');
        resolveReady(snap);
        return snap;
      })
      .catch(function () {
        // Never fail open.
        var snap = setState(readEntitlements(null), 'server-unavailable');
        resolveReady(snap);
        return snap;
      });
  }

  /* ---------- Queries ---------- */
  function isChapterFree(level, number) {
    var ref = parseChapterRef(level, number);
    if (!ref.level || !ref.number) return false;
    return ref.number === FREE_CHAPTER_NUMBER;
  }
  function hasFullAccess() { return state.hasFullAccess === true; }
  function hasLevelAccess(level) {
    var l = normLevel(level);
    return !!l && (state.hasFullAccess === true || state.levels[l] === true);
  }
  function getAccessState() { return snapshot(); }

  function canAccessChapter(level, number) {
    var ref = parseChapterRef(level, number);
    return isChapterFree(ref.level, ref.number) || hasLevelAccess(ref.level);
  }
  function isChapterLocked(level, number) { return !canAccessChapter(level, number); }

  function getChapterAccess(level, number) {
    var ref = parseChapterRef(level, number);
    var free = isChapterFree(ref.level, ref.number);
    var owned = hasLevelAccess(ref.level);
    return {
      level: ref.level,
      number: ref.number,
      free: free,
      locked: !(free || owned),
      reason: free ? 'free-chapter'
            : (hasFullAccess() ? 'entitlement-lifetime'
            : (owned ? 'entitlement-level' : 'requires-purchase'))
    };
  }

  function onAccessChange(fn) {
    if (typeof fn === 'function') listeners.push(fn);
    return function () { listeners = listeners.filter(function (f) { return f !== fn; }); };
  }

  /* ---------- TEMPORARY DEVELOPMENT SWITCH ----------
     NOT a payment flow, NOT persisted, NOT reachable from the UI.
     Exists so access states can be exercised without a backend.
     Console only:
       KWAccess.__devOnly_setEntitlement({authenticated:true, entitlements:{A1:true}})
     Delete this block once the backend is live in production. */
  function __devOnly_setEntitlement(next) {
    if (global.console && console.warn) {
      console.warn('[kw-access] TEMPORARY DEV OVERRIDE — not an entitlement. In-memory only.');
    }
    return setState(readEntitlements(next || {}), 'dev-override');
  }

  /* ---------- Unlock routing ---------- */
  var unlockHandler = null;
  function onUnlockRequested(fn) { unlockHandler = typeof fn === 'function' ? fn : null; }

  function levelPageUrl(level, prefix) {
    var l = normLevel(level) || 'a1';
    return (prefix || '') + l + '.html';
  }

  /* Opens checkout for a product id, loading the payment adapter on
     demand. Falls back to the level page's pricing section if the
     adapter cannot be loaded. */
  function buy(productId, ctx) {
    ctx = ctx || {};
    if (global.KWCheckout) return global.KWCheckout.start(productId, ctx);
    return loadScript(siblingUrl('kw-products.js'))
      .then(function () { return loadScript(siblingUrl('kw-auth.js')); })
      .then(function () { return loadScript(siblingUrl('kw-checkout.js')); })
      .then(function () {
        if (global.KWCheckout) return global.KWCheckout.start(productId, ctx);
        throw new Error('checkout-unavailable');
      })
      .catch(function () {
        global.location.href = levelPageUrl(ctx.level, ctx.prefix) + '#pricing';
      });
  }

  function requestUnlock(ctx) {
    ctx = ctx || {};
    if (unlockHandler) return unlockHandler(ctx);
    var product = (normLevel(ctx.level) || 'a1').toUpperCase();
    return buy(ctx.product || product, ctx);
  }

  var loaded = {};
  function loadScript(src) {
    if (loaded[src]) return loaded[src];
    loaded[src] = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = resolve;
      s.onerror = function () { loaded[src] = null; reject(new Error('load ' + src)); };
      (document.head || document.documentElement).appendChild(s);
    });
    return loaded[src];
  }

  /* ============================================================
     LOCKED-CHAPTER COMPONENT (one implementation, reused)
     ============================================================ */
  var LOCK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"/><path d="M8.25 10.5V7.75a3.75 3.75 0 0 1 7.5 0v2.75"/></svg>';

  var CSS = [
    '.kwlock{display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 64px);padding:96px 24px;background:var(--bg-canvas,#FAFAF7);box-sizing:border-box}',
    '.kwlock-inner{width:100%;max-width:560px;text-align:center}',
    '.kwlock-mark{width:52px;height:52px;margin:0 auto 24px;border-radius:999px;display:flex;align-items:center;justify-content:center;background:var(--bg-elevated,#F4F3EE);border:1px solid rgba(14,14,16,.08);color:var(--ink-secondary,#5A5A60)}',
    '.kwlock-mark svg{width:22px;height:22px}',
    '.kwlock-eyebrow{font-family:var(--font-mono,"JetBrains Mono",ui-monospace,monospace);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-tertiary,#9A9AA0);margin:0 0 16px}',
    '.kwlock-title{font-family:var(--font-display,Fraunces,Georgia,serif);font-weight:500;font-size:clamp(30px,6vw,44px);line-height:1.12;color:var(--ink-primary,#0E0E10);margin:0}',
    '.kwlock-chapter{font-family:var(--font-display,Fraunces,Georgia,serif);font-style:italic;font-weight:500;font-size:clamp(17px,3.4vw,20px);color:var(--ink-secondary,#5A5A60);margin:12px 0 0}',
    '.kwlock-lede{font-family:var(--font-ui,Inter,system-ui,sans-serif);font-size:16px;line-height:1.65;color:var(--ink-secondary,#5A5A60);margin:24px auto 0;max-width:460px;text-wrap:pretty}',
    '.kwlock-actions{display:flex;flex-direction:column;align-items:stretch;gap:12px;margin:36px auto 0;max-width:340px}',
    '.kwlock-cta{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:0 24px;border:1px solid transparent;border-radius:10px;background:var(--coral,#E55A3F);color:#fff;font-family:var(--font-ui,Inter,system-ui,sans-serif);font-size:15px;font-weight:600;text-decoration:none;cursor:pointer;transition:transform 240ms cubic-bezier(.16,1,.3,1),box-shadow 240ms cubic-bezier(.16,1,.3,1)}',
    '.kwlock-cta:hover{transform:translateY(-1px);box-shadow:0 8px 24px rgba(229,90,63,.22)}',
    '.kwlock-cta.secondary{background:transparent;color:var(--ink-primary,#0E0E10);border-color:rgba(14,14,16,.16)}',
    '.kwlock-cta.secondary:hover{box-shadow:0 6px 18px rgba(14,14,16,.07);border-color:rgba(14,14,16,.3)}',
    '.kwlock-cta:focus-visible{outline:2px solid var(--ink-primary,#0E0E10);outline-offset:3px}',
    '.kwlock-sub{font-family:var(--font-ui,Inter,system-ui,sans-serif);font-size:13px;line-height:1.5;color:var(--ink-tertiary,#9A9AA0);margin:0}',
    '.kwlock-foot{margin-top:48px;padding-top:24px;border-top:1px solid rgba(14,14,16,.07);font-family:var(--font-ui,Inter,system-ui,sans-serif);font-size:13px;line-height:1.6;color:var(--ink-tertiary,#9A9AA0);display:flex;flex-direction:column;gap:8px}',
    '.kwlock-foot a{color:var(--ink-secondary,#5A5A60);text-decoration:none;border-bottom:1px solid rgba(14,14,16,.18)}',
    '.kwlock-foot a:hover{color:var(--ink-primary,#0E0E10)}',
    '@media (max-width:480px){.kwlock{padding:64px 20px;min-height:calc(100vh - 56px)}.kwlock-actions{max-width:none}.kwlock-foot{margin-top:36px}}',
    '@media (prefers-reduced-motion:reduce){.kwlock-cta{transition:none}.kwlock-cta:hover{transform:none}}'
  ].join('');

  function injectCss() {
    if (document.getElementById('kw-access-css')) return;
    var s = document.createElement('style');
    s.id = 'kw-access-css';
    s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }

  function esc(str) {
    return String(str == null ? '' : str).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  /* Display prices come from kw-products.js when it is present; the
     literals here are only a fallback for a page that did not load it.
     Neither is ever used as a payment amount. */
  var FALLBACK_PRICE = { A1: '₹1,999', A2: '₹2,999', B1: '₹3,999', B2: '₹4,999', C1: '₹7,999', C2: '₹8,999', LIFETIME: '₹4,999' };
  function priceLabel(id) {
    var P = global.KWProducts;
    return (P && P.priceLabel(id)) || FALLBACK_PRICE[id] || '';
  }

  /* Renders the locked-chapter screen. Deliberately carries NO chapter
     content beyond the public title already shown on the roadmap. */
  function renderLockedChapter(opts) {
    opts = opts || {};
    injectCss();
    var level = normLevel(opts.level) || 'a1';
    var LVL = level.toUpperCase();
    var num = normNumber(opts.number);
    var prefix = opts.prefix == null ? '' : opts.prefix;
    var eyebrow = LVL + (num ? ' · Chapter ' + String(num).padStart(2, '0') : '');

    var el = document.createElement('main');
    el.className = 'kwlock';
    el.setAttribute('role', 'main');
    el.innerHTML =
      '<div class="kwlock-inner">' +
        '<div class="kwlock-mark">' + LOCK_ICON + '</div>' +
        '<p class="kwlock-eyebrow">' + esc(eyebrow) + '</p>' +
        '<h1 class="kwlock-title">Chapter Locked</h1>' +
        (opts.title ? '<p class="kwlock-chapter">' + esc(opts.title) + '</p>' : '') +
        '<p class="kwlock-lede">This chapter is part of the ' + esc(LVL) + ' course. Chapter 1 of every level, A1 through C2, stays open to read.</p>' +
        '<div class="kwlock-actions">' +
          '<button type="button" class="kwlock-cta" data-kw-unlock="' + esc(LVL) + '">Unlock ' + esc(LVL) + ' — ' + esc(priceLabel(LVL)) + '</button>' +
          '<p class="kwlock-sub">One payment opens every ' + esc(LVL) + ' chapter.</p>' +
          '<button type="button" class="kwlock-cta secondary" data-kw-unlock="LIFETIME">Get Lifetime Access — ' + esc(priceLabel('LIFETIME')) + '</button>' +
          '<p class="kwlock-sub">All six levels, A1 through C2.</p>' +
        '</div>' +
        '<div class="kwlock-foot">' +
          '<span>Already bought this? <a href="' + esc(prefix) + 'account/index.html">Sign in to restore access</a></span>' +
          '<span><a href="' + esc(levelPageUrl(level, prefix)) + '">Back to the ' + esc(LVL) + ' roadmap</a></span>' +
        '</div>' +
      '</div>';

    el.querySelectorAll('[data-kw-unlock]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        requestUnlock({
          level: level,
          number: num,
          prefix: prefix,
          product: btn.getAttribute('data-kw-unlock')
        });
      });
    });
    return el;
  }

  /* ---------- Chapter-page gate ----------
     Called by chapter-app.js BEFORE any chapter content is rendered.
     Returns true when the learner may proceed; when false it has
     already replaced the page shell with the locked screen and the
     caller must stop. */
  function guardChapterPage(chapterData, options) {
    options = options || {};
    var ref = parseChapterRef(chapterData);
    // Fail CLOSED, not open: a chapter we cannot identify is a chapter we
    // cannot prove is free or entitled. renderLockedChapter() below
    // tolerates a missing level/number (falls back to 'a1' / omits the
    // chapter number in the eyebrow), so this stays visually safe.
    if (ref.level && ref.number && canAccessChapter(ref.level, ref.number)) return true;

    var prefix = options.prefix == null ? '../' : options.prefix;
    var removeSelectors = options.remove || ['#story-stage', '#dashboard'];
    removeSelectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (n) { n.remove(); });
    });

    var screen = renderLockedChapter({
      level: ref.level, number: ref.number, title: ref.title, prefix: prefix
    });
    document.body.appendChild(screen);
    document.title = 'Chapter Locked · Klarweg';
    global.KW_CHAPTER_LOCKED = true;

    /* The learner may hold this entitlement already (a new device, a
       just-completed purchase). Re-ask the server, and if the answer
       comes back positive, reload into the real chapter. */
    if (entitlementSource) {
      refresh().then(function (s) {
        if (s.hasFullAccess || s.levels[ref.level]) global.location.reload();
      });
    }
    return false;
  }

  /* ============================================================
     DEFAULT WIRING — Access Worker via kw-auth.js
     ------------------------------------------------------------
     Loaded on demand so the 259 chapter pages need no new script
     tags. A page that already includes kw-auth.js just reuses it.
     ============================================================ */
  function bootstrap() {
    function wire() {
      if (!global.KWAuth) { resolveReady(snapshot()); return; }
      configureEntitlementSource({
        fetchEntitlement: function () {
          return global.KWAuth.refresh().then(function (s) {
            return {
              authenticated: s.authenticated,
              hasFullAccess: s.hasFullAccess,
              entitlements: s.entitlements
            };
          });
        }
      });
      global.KWAuth.onChange(function (s) {
        setState(readEntitlements({
          authenticated: s.authenticated,
          hasFullAccess: s.hasFullAccess,
          entitlements: s.entitlements
        }), 'server');
      });
      refresh();
    }
    if (global.KWAuth) return wire();
    loadScript(siblingUrl('kw-config.js'))
      .catch(function () {})
      .then(function () { return loadScript(siblingUrl('kw-products.js')).catch(function () {}); })
      .then(function () { return loadScript(siblingUrl('kw-auth.js')); })
      .then(wire)
      .catch(function () {
        /* stays anonymous — never fails open */
        resolveReady(snapshot());
      });
  }

  var API = {
    LEVELS: LEVELS.slice(),
    FREE_CHAPTER_NUMBER: FREE_CHAPTER_NUMBER,
    parseChapterRef: parseChapterRef,
    isChapterFree: isChapterFree,
    isChapterLocked: isChapterLocked,
    canAccessChapter: canAccessChapter,
    getChapterAccess: getChapterAccess,
    getAccessState: getAccessState,
    hasFullAccess: hasFullAccess,
    hasLevelAccess: hasLevelAccess,
    onAccessChange: onAccessChange,
    configureEntitlementSource: configureEntitlementSource,
    refresh: refresh,
    ready: ready,
    onUnlockRequested: onUnlockRequested,
    requestUnlock: requestUnlock,
    buy: buy,
    rootPrefix: rootPrefix,
    renderLockedChapter: renderLockedChapter,
    guardChapterPage: guardChapterPage,
    __devOnly_setEntitlement: __devOnly_setEntitlement
  };

  global.KWAccess = API;
  bootstrap();
})(window);
