/* V10 probe Worker — NON-PRODUCTION ONLY. Fails closed. Every request is refused unless:
   - the Worker variable V10_PROBE is exactly "on";
   - the request carries the secret V10_PROBE_TOKEN (≥ 32 characters) in the `x-v10-token` header;
   - the bound database passes verifyProbeDatabase(): no exam tables, the operator-applied probe schema, and exactly one
     marker whose label equals V10_PROBE_LABEL and whose nonce_sha256 equals sha256(secret V10_PROBE_DB_NONCE).
   The Worker creates no tables and no marker (there is no setup endpoint). Verification runs before EVERY route,
   reads included, and before any write. A Worker cannot read its D1 binding's id or name, so it cannot prove which
   database it is bound to: the operator's name/id verification is mandatory (README.md).

   FAULT INJECTION (test tooling, not normal probe behaviour): with V10_FAULT_INJECTION === "on", POST /v10/claim
   accepts post_commit_delay_ms (integer 1–5000). It is validated BEFORE the claim runs (a refused value writes nothing)
   and applied only AFTER the claim's D1 batch has committed (applied: true), just before the response is returned.
   It exists so run-v10-ambiguous.mjs can abort the client after a commit and before the answer. Never in exam code. */
import { RUN_ID_RE, verifyProbeDatabase, runScenarios, prepareClaim, claim, readState, ledgerApplied } from './probe.mjs';

const MAX_POST_COMMIT_DELAY_MS = 5000;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

function tokenOk(given, expected) {
  if (typeof expected !== 'string' || expected.length < 32 || typeof given !== 'string' || given.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= given.charCodeAt(i) ^ expected.charCodeAt(i);
  return diff === 0;
}

export async function handle(request, env) {
  if (env.V10_PROBE !== 'on') return json({ ok: false, error: 'probe_disabled' }, 403);
  if (!tokenOk(request.headers.get('x-v10-token') || '', env.V10_PROBE_TOKEN)) return json({ ok: false, error: 'unauthorised' }, 401);
  try {
    await verifyProbeDatabase(env.DB, { label: env.V10_PROBE_LABEL, nonce: env.V10_PROBE_DB_NONCE });   // read-only, before anything else
  } catch (e) { return json({ ok: false, error: (e && e.code) || 'verification_failed', ...(e && e.table ? { table: e.table } : {}) }, 412); }
  const url = new URL(request.url);
  const run = url.searchParams.get('run') || '';
  try {
    if (request.method === 'GET' && url.pathname === '/v10/verify') return json({ ok: true, verified: true, label: env.V10_PROBE_LABEL });
    if (!RUN_ID_RE.test(run)) return json({ ok: false, error: 'invalid_run' }, 400);
    if (request.method === 'POST' && url.pathname === '/v10/scenarios') return json({ ok: true, results: await runScenarios(env.DB, run) });
    if (request.method === 'POST' && url.pathname === '/v10/prepare-claim') { await prepareClaim(env.DB, run); return json({ ok: true }); }
    if (request.method === 'POST' && url.pathname === '/v10/claim') {
      const op = url.searchParams.get('op') || '';
      if (!/^[a-z0-9:_-]{1,96}$/.test(op)) return json({ ok: false, error: 'invalid_op' }, 400);
      // fault injection: validated before the claim runs, applied only after a committed claim
      const rawDelay = url.searchParams.get('post_commit_delay_ms');
      let delay = 0;
      if (rawDelay !== null) {
        if (env.V10_FAULT_INJECTION !== 'on') return json({ ok: false, error: 'fault_injection_disabled' }, 400);
        if (!/^[0-9]{1,4}$/.test(rawDelay) || Number(rawDelay) < 1 || Number(rawDelay) > MAX_POST_COMMIT_DELAY_MS) return json({ ok: false, error: 'invalid_delay' }, 400);
        delay = Number(rawDelay);
      }
      const r = await claim(env.DB, run, op);
      if (delay && r.applied) await sleep(delay);                // after the committed batch, before the response
      return json({ ok: true, ...r });
    }
    if (request.method === 'GET' && url.pathname === '/v10/state') return json({ ok: true, ...(await readState(env.DB, run)) });
    if (request.method === 'GET' && url.pathname === '/v10/ledger') {
      const op = url.searchParams.get('op') || '';
      return json({ ok: true, op, applied: await ledgerApplied(env.DB, op) });
    }
    return json({ ok: false, error: 'not_found' }, 404);
  } catch (e) {
    return json({ ok: false, error: (e && e.code) || 'probe_error' }, 500);
  }
}
export default { fetch: handle };
