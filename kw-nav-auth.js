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

  function render(s) {
    if (!s || s.status === 'unknown') return;          // no answer yet: stay pending
    setLabel(s.status === 'authenticated' && s.authenticated ? SIGNED_IN : SIGNED_OUT);
  }

  // A check that never answers must not keep the links hidden. The CSS
  // delay covers a missing script, but CSS animations do not run inside a
  // closed (display:none) mobile drawer, so the drawer copy is revealed
  // here. Only the pending state is cleared; the text stays as it is and a
  // late answer still sets the right label.
  function revealPending() {
    var list = links();
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
