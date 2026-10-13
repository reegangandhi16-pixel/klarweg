/* Idempotency-claim probe Worker for Workers FREE — NON-PRODUCTION ONLY. Same fail-closed guards as worker.mjs
   (IDEM_PROBE = "on", secret x-idem-token, verifyProbeDatabase() before any write), but every invocation does ONE
   scenario (or one race step) and runs on a budgeted D1 handle capped at FREE_QUERY_BUDGET statements (budget.mjs).
   Each response carries { budget: { used, cap } }. A tripped budget makes the result INCONCLUSIVE. */
import { verifyProbeDatabase, SCENARIOS, SCENARIO_NAMES, raceOne, raceFan, raceState, prepareRace, prepareStaleRace } from './probe.mjs';
import { budgetedDB, FREE_QUERY_BUDGET, FREE_N, FREE_FAN, AFTER_WAIT } from './budget.mjs';

const json = (b, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
const tokenOk = (g, e) => typeof e === 'string' && e.length >= 32 && typeof g === 'string' && g.length === e.length && [...e].reduce((d, c, i) => d | (c.charCodeAt(0) ^ g.charCodeAt(i)), 0) === 0;
const RUN = /^[a-z0-9-]{8,64}$/;
const FREE_SCENARIOS = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7a', 'S7b'];
const BARRIER_MAX_MS = 10_000;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function handle(request, env, { cap = FREE_QUERY_BUDGET, wait = {} } = {}) {
  if (env.IDEM_PROBE !== 'on') return json({ ok: false, error: 'probe_disabled' }, 403);
  if (!tokenOk(request.headers.get('x-idem-token') || '', env.IDEM_PROBE_TOKEN)) return json({ ok: false, error: 'unauthorised' }, 401);
  const db = budgetedDB(env.DB, cap);
  const budget = () => ({ used: db.used, cap: db.cap, ...(db.tripped ? { tripped: db.tripped } : {}) });
  const url = new URL(request.url); const run = url.searchParams.get('run') || '';
  try {
    await verifyProbeDatabase(db, { label: env.IDEM_PROBE_LABEL, nonce: env.IDEM_PROBE_DB_NONCE });   // read-only, before anything else
  } catch (e) {
    if (db.tripped) return json({ ok: false, error: 'query_budget_exceeded', status: 'inconclusive', budget: budget() }, 500);
    return json({ ok: false, error: (e && e.code) || 'verification_failed', ...(e && e.table ? { table: e.table } : {}), budget: budget() }, 412);
  }
  try {
    if (request.method === 'GET' && url.pathname === '/idem/verify') return json({ ok: true, verified: true, label: env.IDEM_PROBE_LABEL, budget: budget() });
    if (!RUN.test(run)) return json({ ok: false, error: 'invalid_run' }, 400);
    const rid = `rq_${run}_race`;
    if (request.method === 'POST' && url.pathname === '/idem/scenario') {
      const id = url.searchParams.get('id') || '';
      if (!FREE_SCENARIOS.includes(id)) return json({ ok: false, error: 'invalid_scenario' }, 400);
      const w = AFTER_WAIT[id] != null ? { ...wait, canPoll: () => db.remaining() - 1 >= AFTER_WAIT[id] } : wait;
      let r;
      try { r = await SCENARIOS[id]({ DB: db }, run, { n: FREE_N[id], wait: w }); } catch (e) { r = { pass: false, detail: { error: (e && e.code) || 'probe_error' } }; }
      const status = r.detail && r.detail.violation ? 'fail'                                  // observed before any budget trip
        : db.tripped || (r.detail && r.detail.reason === 'poll_budget_exhausted') ? 'inconclusive' : r.pass ? 'pass' : 'fail';
      return json({ ok: true, id: SCENARIO_NAMES[id], status, pass: status === 'pass', detail: r.detail, budget: budget() });
    }
    if (request.method === 'POST' && url.pathname === '/idem/race/prepare') {
      const kind = url.searchParams.get('kind') || 'fresh';
      if (kind === 'fresh') await prepareRace(db, run);
      else if (kind === 'stale') await prepareStaleRace(db, run, rid);
      else return json({ ok: false, error: 'invalid_kind' }, 400);
      return json({ ok: true, kind, now: Date.now(), budget: budget() });
    }
    if (request.method === 'POST' && (url.pathname === '/idem/race/one' || url.pathname === '/idem/race/fan')) {
      /* Start barrier: every request of a round carries the same `at` (server ms, from race/prepare's `now`). After its
         read-only verification, each invocation waits until `at`, so the claims hit D1 together instead of being spread
         by the verification queries. The wait only paces the start (it costs no CPU and no query); the evidence is
         the observed overlap and takeover counts. A request that arrives after `at` starts at once and reports `late`. */
      const fan = url.pathname === '/idem/race/fan';
      const m = fan ? Number(url.searchParams.get('m') || FREE_FAN.m) : 1;
      if (fan && !(Number.isInteger(m) && m >= 2 && m <= FREE_FAN.m)) return json({ ok: false, error: 'invalid_m' }, 400);
      const at = Number(url.searchParams.get('at') || 0); const t = Date.now();
      if (url.searchParams.has('at') && !(Number.isInteger(at) && at > t - 60_000 && at < t + BARRIER_MAX_MS)) return json({ ok: false, error: 'invalid_at' }, 400);
      const late = at > 0 && at <= t;
      if (at > t) await sleep(at - t);
      const r = fan ? await raceFan({ DB: db }, run, rid, m) : await raceOne({ DB: db }, run, rid);
      return json({ ok: true, ...r, ...(late ? { late: true } : {}), ...(db.tripped ? { inconclusive: true } : {}), budget: budget() });
    }
    if (request.method === 'GET' && url.pathname === '/idem/race/state') return json({ ok: true, ...(await raceState(db, run, rid)), budget: budget() });
    return json({ ok: false, error: 'not_found' }, 404);
  } catch (e) { return json({ ok: false, error: (e && e.code) || 'probe_error', ...(db.tripped ? { status: 'inconclusive' } : {}), budget: budget() }, 500); }
}
export default { fetch: (request, env) => handle(request, env) };
