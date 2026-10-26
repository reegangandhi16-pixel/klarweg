/* V10 probe Worker — NON-PRODUCTION ONLY. Never bind this Worker to the exam database (`klarweg-exam`); probe.mjs also
   refuses to run on any database that holds exam tables.

   Disabled unless the Worker variable V10_PROBE is exactly "on" AND the request carries the secret
   V10_PROBE_TOKEN (≥ 32 characters) in the `x-v10-token` header. See README.md. */
import { RUN_ID_RE, setupSchema, runScenarios, prepareClaim, claim, readState, ledgerApplied } from './probe.mjs';

const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

function tokenOk(given, expected) {
  if (typeof expected !== 'string' || expected.length < 32 || typeof given !== 'string' || given.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= given.charCodeAt(i) ^ expected.charCodeAt(i);
  return diff === 0;
}

export default {
  async fetch(request, env) {
    if (env.V10_PROBE !== 'on') return json({ ok: false, error: 'probe_disabled' }, 403);
    if (!tokenOk(request.headers.get('x-v10-token') || '', env.V10_PROBE_TOKEN)) return json({ ok: false, error: 'unauthorised' }, 401);
    const url = new URL(request.url);
    const run = url.searchParams.get('run') || '';
    try {
      if (request.method === 'POST' && url.pathname === '/v10/setup') { await setupSchema(env.DB); return json({ ok: true }); }
      if (!RUN_ID_RE.test(run)) return json({ ok: false, error: 'invalid_run' }, 400);
      if (request.method === 'POST' && url.pathname === '/v10/scenarios') return json({ ok: true, results: await runScenarios(env.DB, run) });
      if (request.method === 'POST' && url.pathname === '/v10/prepare-claim') { await prepareClaim(env.DB, run); return json({ ok: true }); }
      if (request.method === 'POST' && url.pathname === '/v10/claim') {
        const op = url.searchParams.get('op') || '';
        if (!/^[a-z0-9:_-]{1,96}$/.test(op)) return json({ ok: false, error: 'invalid_op' }, 400);
        return json({ ok: true, ...(await claim(env.DB, run, op)) });
      }
      if (request.method === 'GET' && url.pathname === '/v10/state') return json({ ok: true, ...(await readState(env.DB, run)) });
      if (request.method === 'GET' && url.pathname === '/v10/ledger') {
        const op = url.searchParams.get('op') || '';
        return json({ ok: true, op, applied: await ledgerApplied(env.DB, op) });
      }
      return json({ ok: false, error: 'not_found' }, 404);
    } catch (e) {
      return json({ ok: false, error: (e && e.code) || 'probe_error' }, e && e.code === 'refusing_exam_database' ? 409 : 500);
    }
  }
};
