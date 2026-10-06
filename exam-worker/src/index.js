/* klarweg-exam — private exam Worker (no public route; reached only through
   the klarweg-access /exam/* proxy over a service binding).
   API version: /exam/v1. Disabled unless EXAM_ENABLED = "on". */
import { ApiError, json, errorResponse, now, ATTEMPT_ID_RE } from './http.js';
import { log } from './log.js';
import { flags } from './flags.js';
import { verifyProxy, requireUser } from './auth.js';
import { streamMedia } from './media.js';
import { settle } from './core.js';
import * as api from './api.js';

const MODULE = '(lesen|hoeren|schreiben|sprechen)';
const A = '(att_[0-9a-f-]{36})';
const R = (s) => new RegExp(`^/exam/v1${s}$`);

const ROUTES = [
  ['GET', R('/availability'), (c) => api.availability(c.env, c.user)],
  ['POST', R('/attempts'), (c) => api.createAttempt(c.env, c.user, c.request)],
  ['GET', R(`/attempts/${A}`), (c, m) => api.getAttempt(c.env, c.user, m[1])],
  ['POST', R(`/attempts/${A}/lease`), (c, m) => api.lease(c.env, c.user, m[1], c.request)],
  ['POST', R(`/attempts/${A}/heartbeat`), (c, m) => api.heartbeat(c.env, c.user, m[1], c.request)],
  ['POST', R(`/attempts/${A}/modules/${MODULE}/start`), (c, m) => api.startModule(c.env, c.user, m[1], m[2], c.request)],
  ['GET', R(`/attempts/${A}/modules/${MODULE}/package`), (c, m) => api.getPackage(c.env, c.user, m[1], m[2], c.url)],
  ['GET', R(`/attempts/${A}/modules/${MODULE}/answers`), (c, m) => api.getAnswers(c.env, c.user, m[1], m[2], c.url)],
  ['POST', R(`/attempts/${A}/modules/${MODULE}/answers`), (c, m) => api.saveAnswers(c.env, c.user, m[1], m[2], c.request)],
  ['POST', R(`/attempts/${A}/modules/${MODULE}/submit`), (c, m) => api.submit(c.env, c.user, m[1], m[2], c.request)],
  ['POST', R(`/attempts/${A}/hoeren/events`), (c, m) => api.hoerenEvent(c.env, c.user, m[1], c.request)],
  ['POST', R(`/attempts/${A}/media`), (c, m) => api.requestMedia(c.env, c.user, m[1], c.request)],
  ['POST', R(`/attempts/${A}/sprechen/consent`), (c, m) => api.consent(c.env, c.user, m[1], c.request)],
  ['POST', R(`/attempts/${A}/sprechen/chunks`), (c, m) => api.uploadChunk(c.env, c.user, m[1], c.request, c.url)],
  ['POST', R(`/attempts/${A}/sprechen/turns`), (c, m) => api.completeTurn(c.env, c.user, m[1], c.request)],
  ['GET', R(`/attempts/${A}/sprechen/status`), (c, m) => api.speakingStatus(c.env, c.user, m[1], c.url)],
  ['POST', R(`/attempts/${A}/complete`), (c, m) => api.completeAttempt(c.env, c.user, m[1], c.request)],
  ['GET', R(`/attempts/${A}/result`), (c, m) => api.getResult(c.env, c.user, m[1])],
  ['POST', R('/admin/ratings'), (c) => api.submitRating(c.env, c.user, c.request)],
  ['GET', R(`/admin/attempts/${A}/productive`), (c, m) => api.productiveForRating(c.env, c.user, m[1])]
];
const MEDIA = R('/media/([A-Za-z0-9_.-]{20,500})');

async function route(request, env) {
  const url = new URL(request.url);
  verifyProxy(request, env);
  if (!flags(env).enabled) return json({ ok: false, error: 'exam_disabled' }, 503);
  if (!url.pathname.startsWith('/exam/v1/')) return json({ ok: false, error: 'unsupported_api_version' }, 404);

  const media = request.method === 'GET' && MEDIA.exec(url.pathname);
  if (media) return streamMedia(env, media[1]);

  let pathKnown = false;
  for (const [method, re, handler] of ROUTES) {
    const m = re.exec(url.pathname);
    if (!m) continue;
    pathKnown = true;
    if (request.method !== method) continue;
    const user = requireUser(request);
    const out = await handler({ env, request, url, user }, m);
    if (out && typeof out.status === 'number' && out.body) return json(out.body, out.status);   // idempotent() envelope
    return json(out);
  }
  if (pathKnown) return json({ ok: false, error: 'method_not_allowed' }, 405);
  return json({ ok: false, error: 'not_found' }, 404);
}

export default {
  async fetch(request, env) {
    const started = now(env);
    let res;
    try {
      res = await route(request, env);
    } catch (err) {
      if (err instanceof ApiError) res = errorResponse(err);
      else {
        log(env, 'unhandled', { error: (err && err.name) || 'Error', msg: String(err && err.message || '').slice(0, 80) });
        res = json({ ok: false, error: 'server_error' }, 500);
      }
    }
    let path = '';
    try { path = new URL(request.url).pathname.replace(/att_[0-9a-f-]{36}/, ':att').replace(/\/media\/.+$/, '/media/:token'); } catch {}
    log(env, 'request', { method: request.method, path, status: res.status, ms: now(env) - started });
    return res;
  },

  /* Cron sweep: auto-submit modules whose deadline + grace has passed even if
     the candidate never comes back, and finish any interrupted finalization
     (scores and unlocks happen server-side). */
  async scheduled(event, env) {
    if (!flags(env).enabled) return;
    const rows = (await env.DB.prepare(`SELECT DISTINCT a.* FROM attempt_modules m JOIN attempts a ON a.id = m.attempt_id
        WHERE (m.status = 'running' AND m.deadline_at < ?1) OR m.status = 'submitting' LIMIT 200`).bind(now(env) - 10_000).all()).results;
    for (const a of rows) {
      try { await settle(env, a); } catch (e) { log(env, 'sweep_error', { attempt: a.id, error: e && e.name }); }
    }
    log(env, 'sweep', { settled: rows.length });
  }
};

export { ATTEMPT_ID_RE };
