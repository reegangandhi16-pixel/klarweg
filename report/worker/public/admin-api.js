/* ============================================================
   KLARWEG · Admin API client  (admin-api.js)
   ------------------------------------------------------------
   The only place in the admin UI that talks to the network.
   Every call returns a typed result — { ok, data } or
   { ok:false, code, status } — so the UI never handles a raw
   fetch rejection and never duplicates auth logic.

   Auth is a same-origin HttpOnly cookie set by the Worker. The
   passphrase is sent once, at login, and is never stored by this
   client: no localStorage, no sessionStorage, no URL parameters.
   The CSRF token is read from the non-HttpOnly kw_admin_csrf
   cookie and echoed on mutations.
   ============================================================ */
(function (global) {
  'use strict';

  var BASE = '';   // same origin as the Worker-served admin page

  function csrfToken() {
    var m = /(?:^|;\s*)kw_admin_csrf=([^;]+)/.exec(document.cookie || '');
    return m ? m[1] : null;
  }

  /** Never throws. 401 also fires 'kw-admin:unauthorized' so the shell
   *  can drop straight back to the login screen from anywhere. */
  async function call(path, opts) {
    opts = opts || {};
    var init = {
      method: opts.method || 'GET',
      credentials: 'same-origin',
      headers: Object.assign({}, opts.headers)
    };
    if (opts.body !== undefined) {
      init.headers['Content-Type'] = 'application/json';
      init.body = JSON.stringify(opts.body);
    }
    if (init.method !== 'GET') {
      var t = csrfToken();
      if (t) init.headers['X-KW-CSRF'] = t;
    }

    var res;
    try {
      res = await fetch(BASE + path, init);
    } catch (e) {
      return { ok: false, status: 0, code: 'network' };
    }

    var data = null;
    try { data = await res.json(); } catch (e) { data = null; }

    if (res.ok) return { ok: true, status: res.status, data: data };

    if (res.status === 401) {
      try { global.dispatchEvent(new CustomEvent('kw-admin:unauthorized')); } catch (e) {}
    }
    return {
      ok: false,
      status: res.status,
      code: (data && data.error) || (res.status === 403 ? 'forbidden' : 'server_error'),
      retryAfter: Number(res.headers.get('Retry-After')) || 0
    };
  }

  function query(params) {
    var q = Object.keys(params || {})
      .filter(function (k) { return params[k] !== null && params[k] !== undefined && params[k] !== ''; })
      .map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); })
      .join('&');
    return q ? '?' + q : '';
  }

  global.KW_AdminAPI = {
    me: function () { return call('/api/admin/me'); },
    login: function (passphrase) {
      return call('/api/admin/login', { method: 'POST', body: { passphrase: passphrase } });
    },
    logout: function () { return call('/api/admin/logout', { method: 'POST' }); },
    facets: function () { return call('/api/admin/facets'); },
    list: function (filters) { return call('/api/admin/reports' + query(filters)); },
    get: function (id) { return call('/api/admin/reports/' + encodeURIComponent(id)); },
    patch: function (id, changes) {
      return call('/api/admin/reports/' + encodeURIComponent(id), { method: 'PATCH', body: changes });
    },
    /** Fetches the image itself so the session cookie is sent and real
     *  loading/error states are possible. Returns a Blob, never a URL into
     *  R2 — the object key is unknown to the browser. */
    screenshot: async function (id) {
      var url = BASE + '/api/admin/reports/' + encodeURIComponent(id) + '/screenshot';
      var res;
      try {
        res = await fetch(url, { credentials: 'same-origin' });
      } catch (e) {
        return { ok: false, status: 0, code: 'network' };
      }
      if (!res.ok) {
        if (res.status === 401) {
          try { global.dispatchEvent(new CustomEvent('kw-admin:unauthorized')); } catch (e) {}
        }
        return { ok: false, status: res.status, code: 'unavailable' };
      }
      return { ok: true, blob: await res.blob() };
    },
    screenshotUrl: function (id) {
      return BASE + '/api/admin/reports/' + encodeURIComponent(id) + '/screenshot';
    }
  };
})(window);
