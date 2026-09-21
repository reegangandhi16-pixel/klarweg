/* ============================================================
   KLARWEG · AUTHENTICATION + ENTITLEMENT ADAPTER (kw-auth.js)
   ------------------------------------------------------------
   The ONLY place the frontend talks to the Access Worker's auth
   surface. Every other file asks this module.

   Endpoints (Access Worker · klarweg-access):
     POST /auth/signup   { name, email, password }
     POST /auth/login    { email, password }
     POST /auth/logout
     GET  /auth/me

   SESSION HANDLING — non-negotiable
     The session lives in an HttpOnly, Secure, SameSite=None cookie
     set by the Worker. This file never reads it, never writes it,
     never mirrors it. No token, no password, no user id is put in
     localStorage or sessionStorage. Every request is sent with
     credentials:'include' so the browser attaches the cookie.

   ENTITLEMENT — the server is authoritative
     /auth/me is the only accepted source of entitlement. The
     browser cannot grant itself access: a Cashfree "success"
     callback may only call KWAuth.refresh(), which re-asks the
     server. Until the Worker has verified the payment and written
     the D1 entitlement row, /auth/me keeps returning no access —
     which is the correct behaviour, not a bug.
   ============================================================ */
(function (global) {
  'use strict';
  if (global.KWAuth) return;

  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  function api() {
    return String(global.KW_ACCESS_API || '').replace(/\/+$/, '');
  }

  /* ---------- state ---------- */
  var state = {
    status: 'unknown',          // unknown | anonymous | authenticated
    user: null,                 // { id, email, name } — never a token
    entitlements: emptyEnt(),
    hasFullAccess: false,
    error: null,                // 'network' | 'server' | null
    resolvedAt: null
  };
  var listeners = [];
  var inflight = null;

  function emptyEnt() {
    var e = {};
    LEVELS.forEach(function (l) { e[l] = false; });
    e.LIFETIME = false;
    return e;
  }

  function snapshot() {
    return {
      status: state.status,
      authenticated: state.status === 'authenticated',
      user: state.user ? { id: state.user.id, email: state.user.email, name: state.user.name } : null,
      entitlements: Object.assign({}, state.entitlements),
      hasFullAccess: !!state.hasFullAccess,
      error: state.error,
      resolvedAt: state.resolvedAt
    };
  }

  function emit() {
    var snap = snapshot();
    listeners.slice().forEach(function (fn) { try { fn(snap); } catch (e) {} });
    try { global.dispatchEvent(new CustomEvent('kw:auth-changed', { detail: snap })); } catch (e) {}
  }

  /* ---------- response normalisation ----------
     Tolerates BOTH shapes of the /auth/me contract:
       legacy  { authenticated, user, hasFullAccess }
       current { authenticated, user, hasFullAccess, entitlements:{A1..C2,LIFETIME} }
     A legacy hasFullAccess:true is read as all six levels. Nothing
     is ever inferred in the other direction. */
  function normalise(res) {
    res = res || {};
    var authed = res.authenticated === true && !!res.user;
    var src = res.entitlements && typeof res.entitlements === 'object' ? res.entitlements : {};
    var full = res.hasFullAccess === true || src.LIFETIME === true;
    var ent = emptyEnt();
    if (authed) {
      LEVELS.forEach(function (l) { ent[l] = full || src[l] === true; });
      ent.LIFETIME = full;
    }
    return {
      authenticated: authed,
      user: authed ? { id: res.user.id, email: res.user.email, name: res.user.name } : null,
      entitlements: ent,
      hasFullAccess: authed && full
    };
  }

  function apply(next, error) {
    state.status = next.authenticated ? 'authenticated' : 'anonymous';
    state.user = next.user;
    state.entitlements = next.entitlements;
    state.hasFullAccess = next.hasFullAccess;
    state.error = error || null;
    state.resolvedAt = Date.now();
    emit();
    return snapshot();
  }

  /* ---------- transport ---------- */
  function request(path, options) {
    options = options || {};
    var base = api();
    if (!base) return Promise.reject(err('config', 'The Klarweg account service is not configured.'));
    var init = {
      method: options.method || 'GET',
      credentials: 'include',
      headers: { 'Accept': 'application/json' },
      mode: 'cors'
    };
    if (options.body != null) {
      init.headers['Content-Type'] = 'application/json';
      init.body = JSON.stringify(options.body);
    }
    return fetch(base + path, init).then(function (r) {
      return r.text().then(function (text) {
        var data = null;
        try { data = text ? JSON.parse(text) : null; } catch (e) { data = null; }
        if (!r.ok || !data || data.ok === false) {
          throw err(
            r.status === 401 ? 'unauthorized' : (r.status === 429 ? 'rate-limited' : 'server'),
            (data && (data.message || data.error)) || defaultMessage(r.status),
            r.status,
            data && data.field
          );
        }
        return data;
      });
    }, function () {
      throw err('network', 'We could not reach Klarweg. Check your connection and try again.');
    });
  }

  function err(code, message, status, field) {
    var e = new Error(message || 'Something went wrong.');
    e.code = code; e.status = status || 0; e.field = field || null;
    return e;
  }
  function defaultMessage(status) {
    if (status === 401) return 'Your email or password did not match.';
    if (status === 409) return 'An account with this email already exists.';
    if (status === 429) return 'Too many attempts. Please wait a minute and try again.';
    return 'Something went wrong at our end. Please try again.';
  }

  /* ---------- public calls ---------- */
  function refresh(opts) {
    if (inflight && !(opts && opts.force)) return inflight;
    inflight = request('/auth/me')
      .then(function (data) { inflight = null; return apply(normalise(data)); })
      .catch(function (e) {
        inflight = null;
        // Never fail open: an unreachable server is an anonymous session.
        return apply(normalise(null), e.code === 'network' ? 'network' : 'server');
      });
    return inflight;
  }

  function signup(input) {
    var v = validateSignup(input);
    if (v) return Promise.reject(err('validation', v.message, 0, v.field));
    return request('/auth/signup', {
      method: 'POST',
      body: { name: input.name.trim(), email: input.email.trim().toLowerCase(), password: input.password }
    }).then(function () { return refresh({ force: true }); });
  }

  function login(input) {
    var v = validateLogin(input);
    if (v) return Promise.reject(err('validation', v.message, 0, v.field));
    return request('/auth/login', {
      method: 'POST',
      body: { email: input.email.trim().toLowerCase(), password: input.password }
    }).then(function () { return refresh({ force: true }); });
  }

  function logout() {
    return request('/auth/logout', { method: 'POST' })
      .catch(function () { /* the local session is dropped either way */ })
      .then(function () { return refresh({ force: true }); });
  }

  /* ---------- validation (mirrors the Worker's rules) ---------- */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function validateSignup(i) {
    i = i || {};
    if (!i.name || i.name.trim().length < 2) return { field: 'name', message: 'Please enter your name.' };
    if (i.name.trim().length > 80) return { field: 'name', message: 'That name is too long.' };
    if (!i.email || !EMAIL_RE.test(i.email.trim())) return { field: 'email', message: 'Please enter a valid email address.' };
    if (!i.password || i.password.length < 8) return { field: 'password', message: 'Use at least 8 characters.' };
    if (i.password.length > 200) return { field: 'password', message: 'That password is too long.' };
    if (i.password !== i.confirm) return { field: 'confirm', message: 'The two passwords do not match.' };
    return null;
  }
  function validateLogin(i) {
    i = i || {};
    if (!i.email || !EMAIL_RE.test(i.email.trim())) return { field: 'email', message: 'Please enter a valid email address.' };
    if (!i.password) return { field: 'password', message: 'Please enter your password.' };
    return null;
  }

  /* ---------- queries ---------- */
  function getState() { return snapshot(); }
  function isAuthenticated() { return state.status === 'authenticated'; }
  function hasLevel(level) {
    var k = String(level || '').trim().toUpperCase();
    if (LEVELS.indexOf(k) === -1) return false;
    return state.entitlements[k] === true;
  }
  function ownedLevels() { return LEVELS.filter(hasLevel); }
  function onChange(fn) {
    if (typeof fn === 'function') listeners.push(fn);
    return function () { listeners = listeners.filter(function (f) { return f !== fn; }); };
  }

  /* Where the learner signs in from anywhere on the site. `next` brings
     them back; `buy` resumes an interrupted checkout after login. */
  function accountUrl(opts) {
    opts = opts || {};
    var prefix = opts.prefix == null ? '' : opts.prefix;
    var url = prefix + 'account/index.html';
    var q = [];
    if (opts.mode) q.push('mode=' + encodeURIComponent(opts.mode));
    if (opts.buy) q.push('buy=' + encodeURIComponent(opts.buy));
    if (opts.next !== null) q.push('next=' + encodeURIComponent(opts.next || global.location.href));
    return url + (q.length ? '?' + q.join('&') : '');
  }

  global.KWAuth = {
    LEVELS: LEVELS.slice(),
    request: request,
    refresh: refresh,
    signup: signup,
    login: login,
    logout: logout,
    getState: getState,
    isAuthenticated: isAuthenticated,
    hasLevel: hasLevel,
    ownedLevels: ownedLevels,
    onChange: onChange,
    accountUrl: accountUrl,
    validateSignup: validateSignup,
    validateLogin: validateLogin
  };
})(window);
