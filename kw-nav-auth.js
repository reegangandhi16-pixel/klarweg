/* ============================================================
   KLARWEG · HEADER LOGIN / MY ACCOUNT LABEL  (kw-nav-auth.js)
   ------------------------------------------------------------
   Keeps every `.js-nav-login` link (desktop header + mobile drawer)
   in step with the real session, using KWAuth (kw-auth.js) only:

     session confirmed ............ "My Account"
     signed out / check failed .... "Login"
     still checking ("unknown") ... left as it is

   The href is never touched — it always opens the Account page,
   which shows login or account overview from the same session.

   The links start with a `data-auth-pending` attribute: page CSS
   keeps them in place but not shown until the first answer, so a
   signed-in learner never sees "Login" flash first. If no answer
   arrives, the static "Login" text is revealed anyway: by this script
   after 3s, and by the page CSS on its own (after 2.5s) if this script
   never runs — so the link is never left invisible.

   Header "Try Chapter 1 free" CTAs (`.js-nav-cta`) follow the learner's
   purchases through KWAuth.hasLevel() — the same entitlement answer the
   roadmaps use (server-side, so expired access is already "not owned"
   and Lifetime owns every level). The relevant level is the one whose
   Chapter 1 the CTA links to. If that level is owned, the CTA becomes
   the Account page's owner link, "Open <LEVEL> roadmap", or is hidden on
   that level's own roadmap, which already shows owner CTAs. Signed out
   or not owned: the original CTA, unchanged. While the answer is still
   pending the CTAs carry `data-auth-pending` too, so an owner never sees
   the trial CTA first; they are revealed the same way as the login link.

   Load after kw-config.js and kw-auth.js.
   ============================================================ */
(function (global) {
  'use strict';
  if (global.KWNavAuth) return;

  var SIGNED_IN = 'My Account';
  var SIGNED_OUT = 'Login';
  var RECHECK_MIN_MS = 5000;   // one re-check per burst of focus/visibility events
  var REVEAL_AFTER_MS = 3000;  // no answer yet: show the static label anyway
  var lastCheck = 0;

  function links() { return document.querySelectorAll('.js-nav-login'); }

  function setLabel(label) {
    var list = links();
    for (var i = 0; i < list.length; i++) {
      if (list[i].textContent !== label) list[i].textContent = label;
      list[i].removeAttribute('data-auth-pending');
    }
  }

  // Level whose Chapter 1 a header CTA links to ("chapter-b1-1-…" → "B1").
  function ctaLevel(orig) {
    var m = /chapter-([abc][12])-0?1-/.exec(orig.href || '');
    return m ? m[1].toUpperCase() : null;
  }
  function onRoadmapOf(level) {
    return new RegExp('(^|/)' + level.toLowerCase() + '\\.html$').test(global.location.pathname);
  }
  function renderCtas(signedIn) {
    var list = document.querySelectorAll('.js-nav-cta');
    for (var i = 0; i < list.length; i++) {
      var a = list[i];
      if (!a._kwOrig) a._kwOrig = { html: a.innerHTML, href: a.getAttribute('href') };
      var o = a._kwOrig, level = ctaLevel(o);
      var owned = signedIn && level && typeof global.KWAuth.hasLevel === 'function' && global.KWAuth.hasLevel(level);
      if (!owned) {                                     // original CTA
        if (a.innerHTML !== o.html) a.innerHTML = o.html;
        a.setAttribute('href', o.href);
        a.style.display = ''; a.removeAttribute('aria-hidden');
      } else if (onRoadmapOf(level)) {                  // this roadmap already has owner CTAs
        a.style.display = 'none'; a.setAttribute('aria-hidden', 'true');
      } else {                                          // Account page's owner link
        var arrow = /class="arrow"/.test(o.html) ? ' <span class="arrow">→</span>' : '';
        a.innerHTML = 'Open ' + level + ' roadmap' + arrow;
        a.setAttribute('href', level.toLowerCase() + '.html');
        a.style.display = ''; a.removeAttribute('aria-hidden');
      }
      a.removeAttribute('data-auth-pending');            // ownership known: show the result
    }
  }

  function render(s) {
    if (!s || s.status === 'unknown') return;          // no answer yet: stay pending
    var signedIn = s.status === 'authenticated' && !!s.authenticated;
    setLabel(signedIn ? SIGNED_IN : SIGNED_OUT);
    renderCtas(signedIn);
  }

  // A check that never answers must not keep the links hidden. The CSS
  // delay covers a missing script, but CSS animations do not run inside a
  // closed (display:none) mobile drawer, so the drawer copy is revealed
  // here. Only the pending state is cleared; the text stays as it is and a
  // late answer still sets the right label.
  function revealPending() {
    var list = document.querySelectorAll('.js-nav-login, .js-nav-cta');
    for (var i = 0; i < list.length; i++) list[i].removeAttribute('data-auth-pending');
  }

  function recheck() {
    var now = Date.now();
    if (now - lastCheck < RECHECK_MIN_MS) return;
    lastCheck = now;
    global.KWAuth.refresh();
  }

  function start() {
    var auth = global.KWAuth;
    if (!auth || typeof auth.getState !== 'function' || typeof auth.onChange !== 'function') {
      setLabel(SIGNED_OUT);                           // no auth code: never claim a session
      revealPending();                                 // CTAs show their original trial link
      return;
    }
    auth.onChange(render);
    render(auth.getState());
    setTimeout(revealPending, REVEAL_AFTER_MS);
    // Reuses a check the page already started (KWAuth de-duplicates an
    // in-flight request); otherwise starts one.
    lastCheck = Date.now();
    auth.refresh();

    // Back/Forward cache restore and returning to the tab: the session
    // may have changed elsewhere (e.g. logout in another tab).
    global.addEventListener('pageshow', function (e) { if (e.persisted) recheck(); });
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') recheck();
    });
  }

  // Run after the page's own inline scripts, so a page that starts its
  // own KWAuth.refresh() shares that single /auth/me request.
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else setTimeout(start, 0);

  global.KWNavAuth = { render: render, labels: { signedIn: SIGNED_IN, signedOut: SIGNED_OUT } };
})(window);
