/* ============================================================
   Klarweg — issue reporting Worker
   ------------------------------------------------------------
   One origin, two clearly separated surfaces:

     PUBLIC  (cross-origin, from the static GitHub Pages site)
       POST   /api/reports
       GET    /api/health

     ADMIN   (same-origin only, served by this Worker at /admin)
       POST   /api/admin/login | /api/admin/logout
       GET    /api/admin/me | /reports | /reports/:id | /facets
       GET    /api/admin/reports/:id/screenshot
       PATCH  /api/admin/reports/:id

   Admin code and admin HTML are deployed with the Worker and are NOT
   published to GitHub Pages. Everything under /api/admin/* is deny-by-
   default via requireAdmin(), and admin routes never receive CORS
   headers, so no other origin can drive them with a session cookie.

   Failure policy: handlers are wrapped; a thrown error is logged with a
   short server-side message and answered with a generic 500. No stack
   trace, SQL text, binding name or file path ever reaches a client.
   ============================================================ */
import { allowedOrigin, json, preflight } from './cors.js';
import { createReport } from './reports.js';
import { handleAdmin } from './admin.js';

const SEC_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
  'X-Frame-Options': 'DENY'
};

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    const path = url.pathname.replace(/\/+$/, '') || '/';

    if (req.method === 'OPTIONS') return preflight(env, req);

    /* ---------- public ---------- */
    if (path === '/api/health') {
      // Liveness only. No version, binding, region or config detail.
      return json({ ok: true }, {}, allowedOrigin(env, req));
    }

    if (path === '/api/reports') {
      if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, { status: 405 });
      const origin = allowedOrigin(env, req);
      // A browser request carrying an Origin we don't know is refused outright.
      if (req.headers.get('Origin') && !origin) {
        return json({ error: 'origin_not_allowed' }, { status: 403 });
      }
      try {
        return await createReport(env, req, origin, ctx);
      } catch (err) {
        console.log(JSON.stringify({ svc: 'reports', event: 'create_failed', msg: String(err && err.message) }));
        return json({ error: 'server_error' }, { status: 500 }, origin);
      }
    }

    /* ---------- admin (same-origin only, never CORS) ---------- */
    if (path.startsWith('/api/admin/')) {
      if (req.headers.get('Origin') && req.headers.get('Origin') !== url.origin) {
        return json({ error: 'forbidden' }, { status: 403 });
      }
      try {
        const res = await handleAdmin(env, req, url, ctx);
        Object.entries(SEC_HEADERS).forEach(([k, v]) => { if (!res.headers.has(k)) res.headers.set(k, v); });
        return res;
      } catch (err) {
        console.log(JSON.stringify({ svc: 'admin', event: 'failed', msg: String(err && err.message) }));
        return json({ error: 'server_error' }, { status: 500 });
      }
    }

    /* ---------- admin UI (static asset, served by the Worker) ---------- */
    if (path === '/admin' || path === '/admin/reports.html') {
      const res = await env.ASSETS.fetch(new Request(url.origin + '/reports.html', req));
      const out = new Response(res.body, res);
      Object.entries(SEC_HEADERS).forEach(([k, v]) => out.headers.set(k, v));
      out.headers.set('Cache-Control', 'no-store');
      return out;
    }

    return json({ error: 'not_found' }, { status: 404 });
  }
};
