/* ============================================================
   klarweg-tutor · PRIVATE WORKER ENTRY
   ------------------------------------------------------------
   Reachable ONLY through the klarweg-access service binding
   (env.TUTOR in that Worker). wrangler.toml sets
   workers_dev = false and declares no routes, so this Worker has
   no public URL. Authentication, entitlement, quotas, the kill
   switch and usage accounting all happen in klarweg-access
   before a request arrives here — this Worker receives no user
   identity at all (data minimisation), only:

     POST /v1/<action>
     { chapterId, sectionId, itemId, input?, attempt?, lang?,
       mode?, recent?, answers?, submitted? }

   Response (always JSON):
     200 { ok:true, source:'ai'|'deterministic'|'fallback',
           result, notice?, meta:{ llm, usage, costMicros, … } }
     4xx { ok:false, error, message }
     503 { ok:false, error:'ai_unavailable'|…, message, meta }
   ============================================================ */
import { ACTIONS, RequestError } from './actions.js';
import { getChapter, isChapterId } from './registry.js';
import { providerConfig } from './providers/index.js';
import { BUILT_FROM } from './registry/generated/index.js';

const MAX_BODY = 12 * 1024;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
}

export async function handle(request, env) {
  const url = new URL(request.url);

  if (request.method === 'GET' && url.pathname === '/v1/health') {
    const { provider, model } = providerConfig(env);
    return json({ ok: true, service: 'klarweg-tutor', provider, model: model || null, registry: BUILT_FROM });
  }

  const m = url.pathname.match(/^\/v1\/([a-z_]{3,32})$/);
  if (request.method !== 'POST' || !m) return json({ ok: false, error: 'not_found' }, 404);

  const action = ACTIONS[m[1]];
  if (!action) return json({ ok: false, error: 'unknown_action' }, 404);

  const raw = await request.text();
  if (raw.length > MAX_BODY) return json({ ok: false, error: 'too_large', message: 'Request too large.' }, 413);
  let body;
  try { body = JSON.parse(raw); } catch { return json({ ok: false, error: 'invalid_json' }, 400); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return json({ ok: false, error: 'invalid_json' }, 400);

  if (!isChapterId(body.chapterId)) return json({ ok: false, error: 'invalid_chapter', message: 'Unknown chapter.' }, 400);
  const C = await getChapter(body.chapterId);
  if (!C) return json({ ok: false, error: 'invalid_chapter', message: 'Unknown chapter.' }, 400);

  body.lang = body.lang === 'hi' ? 'hi' : 'en';
  const started = Date.now();
  try {
    const out = await action(env, C, body);
    out.meta = { ...(out.meta || {}), ms: Date.now() - started };
    // Operational log: ids and numbers only — never learner text.
    console.log(JSON.stringify({ svc: 'klarweg-tutor', action: m[1], chapter: C.id, item: body.itemId, source: out.source || 'error', ok: out.ok, ms: out.meta.ms, in: out.meta.usage && out.meta.usage.input, out: out.meta.usage && out.meta.usage.output }));
    return json(out, out.ok ? 200 : (out.status || 503));
  } catch (err) {
    if (err instanceof RequestError) return json({ ok: false, error: err.code, message: err.message }, err.status);
    console.error(JSON.stringify({ svc: 'klarweg-tutor', action: m[1], chapter: C.id, error: String((err && err.message) || err) }));
    return json({ ok: false, error: 'internal', message: 'Klarweg AI could not process this request.' }, 500);
  }
}

export default { fetch: handle };
