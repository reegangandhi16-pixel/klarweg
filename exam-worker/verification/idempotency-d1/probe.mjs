/* Idempotency-claim probe (ABSENT → PENDING → COMPLETED) — runs the REAL idempotentAtomic() (exam-worker/src/core.js)
   against a D1 binding migrated with 0001 + 0002. Business effects go to the probe's own idem_probe_* tables.
   Evidence only when run on an explicitly identified, isolated NON-PRODUCTION D1 (README.md). */
import { idempotentAtomic, CLAIM_TTL_MS } from '../../src/core.js';
import { sha256Hex } from '../../src/http.js';

/* ---------- database qualification (fail closed, read-only) ----------
   A Worker cannot read the physical identity (id or name) of its D1 binding at runtime. So the probe cannot PROVE which
   database it is bound to. It instead requires evidence that only the operator's out-of-band provisioning step creates:
   the probe schema (probe-schema.sql) and a marker row holding sha256(IDEM_PROBE_DB_NONCE), inserted by the operator with
   a wrangler command that names the database whose name and id they verified. The Worker never creates tables or the
   marker. Every endpoint verifies all of this BEFORE any write; any doubt refuses. As defence in depth, a database that
   holds exam content (forms, level configs, items, access grants, attempts) is refused even if marked. */
const EXAM_CONTENT_TABLES = ['attempts', 'forms', 'level_configs', 'items_index', 'exam_access'];
const PROBE_TABLES = ['idem_probe_marker', 'idem_probe_state', 'idem_probe_effects'];
const refuse = (code, extra = {}) => { throw Object.assign(new Error(code), { code, ...extra }); };
const sameHex = (a, b) => typeof a === 'string' && typeof b === 'string' && a.length === b.length && [...a].reduce((d, c, i) => d | (c.charCodeAt(0) ^ b.charCodeAt(i)), 0) === 0;

export async function verifyProbeDatabase(db, { label, nonce }) {
  if (typeof label !== 'string' || !/^nonprod-[a-z0-9-]{3,40}$/.test(label)) refuse('label_required');
  if (typeof nonce !== 'string' || nonce.length < 32) refuse('db_nonce_required');
  const tables = (await db.prepare("SELECT name FROM sqlite_master WHERE type = 'table'").all()).results.map((r) => r.name);
  for (const t of ['request_log', 'idempotency_assertions']) if (!tables.includes(t)) refuse('migrations_missing', { table: t });
  for (const t of PROBE_TABLES) if (!tables.includes(t)) refuse('probe_schema_missing', { table: t });
  const markers = (await db.prepare('SELECT label, nonce_sha256 FROM idem_probe_marker').all()).results;
  if (markers.length !== 1) refuse('marker_missing_or_ambiguous', { markers: markers.length });
  if (markers[0].label !== label) refuse('label_mismatch');
  if (!sameHex(String(markers[0].nonce_sha256).toLowerCase(), await sha256Hex(nonce))) refuse('db_nonce_mismatch');   // hex case-insensitive only
  for (const t of EXAM_CONTENT_TABLES) {
    if (tables.includes(t) && (await db.prepare(`SELECT COUNT(*) AS n FROM ${t}`).first()).n > 0) refuse('refusing_database_with_exam_content', { table: t });
  }
  return { ok: true, label };
}

/* Wait for the OBSERVABLE condition "this request id has a pending claim" (bounded polling; the sleep only paces the
   polls and is never evidence). Returns { token } or { error: 'original_never_claimed', ... }. `canPoll` (optional) is
   asked before every poll; the Free-plan worker uses it to keep the polls inside the invocation's query budget, and a
   wait stopped by it reports reason 'poll_budget_exhausted' (inconclusive, never a pass). */
export async function waitForPendingClaim(db, attemptId, requestId, { pollMs = 25, timeoutMs = 10_000, sleep = (ms) => new Promise((r) => setTimeout(r, ms)), clock = () => Date.now(), canPoll = null } = {}) {
  const t0 = clock();
  for (;;) {
    if (canPoll && !canPoll()) return { error: 'original_never_claimed', reason: 'poll_budget_exhausted', waited_ms: clock() - t0 };
    const row = await db.prepare("SELECT claim_token FROM request_log WHERE attempt_id = ?1 AND request_id = ?2 AND state = 'pending'").bind(attemptId, requestId).first();
    if (row && row.claim_token) return { token: row.claim_token };
    if (clock() - t0 >= timeoutMs) return { error: 'original_never_claimed', waited_ms: clock() - t0 };
    await sleep(pollMs);
  }
}

const envAt = (base, t) => ({ ...base, __clock: () => t });
const attemptOf = (run) => `att_probe_${run}`;
const effects = async (db, run) => (await db.prepare('SELECT COUNT(*) AS n FROM idem_probe_effects WHERE run_id = ?1').bind(run).first()).n;
const record = (db, run, rid) => db.prepare('SELECT state, route, claim_token, status FROM request_log WHERE attempt_id = ?1 AND request_id = ?2').bind(attemptOf(run), rid).first();
async function outcome(p) { try { const r = await p; return { status: r.status, replayed: !!r.body.replayed }; } catch (e) { return { status: e.status || 500, error: e.code || String(e.message).slice(0, 80) }; } }

/* One business operation: transition idem_probe_state open → done and add one effect row. */
function op(env, run, rid, { gate, extra = [], precondOk = true } = {}) {
  return idempotentAtomic(env, attemptOf(run), rid, 'probe:op', async () => {
    if (gate) await gate;
    return {
      precondition: { sql: precondOk ? `EXISTS (SELECT 1 FROM idem_probe_state WHERE run_id = ?4 AND state = 'open')` : '0 = 1', binds: precondOk ? [run] : [] },
      statements: [
        env.DB.prepare("UPDATE idem_probe_state SET state = 'done' WHERE run_id = ?1 AND state = 'open'").bind(run),
        env.DB.prepare('INSERT INTO idem_probe_effects (run_id, request_id, tag) VALUES (?1, ?2, ?3)').bind(run, rid, 'op'),
        ...extra.map((sql) => env.DB.prepare(sql))
      ],
      body: { ok: true, run, request_id: rid }
    };
  });
}
async function fresh(db, run) { await db.prepare("INSERT INTO idem_probe_state (run_id, state) VALUES (?1, 'open')").bind(run).run(); }
const deferred = () => { let resolve; const promise = new Promise((r) => { resolve = r; }); return { promise, resolve }; };

const statuses = (rs) => [...new Set(rs.map((r) => `${r.status}${r.replayed ? ':replayed' : ''}${r.error ? ':' + r.error : ''}`))];

/* Each scenario is self-contained (its own run ids, its own state rows) and returns { pass, detail }. A detail with
   `violation` is a definite failure already observed (more than one execution or successful takeover); it stays a
   failure even if the invocation later runs out of query budget. runScenarios()
   runs them all in one invocation (Workers Paid); worker-free.mjs runs each in its own invocation (Workers Free).
   Both call these same functions, so the assertions are identical. */
export const SCENARIOS = {
  async S1(base, runPrefix, { n = 20, T0 = Date.now() } = {}) { // simultaneous same-id claims inside one isolate
    const db = base.DB; const run = `${runPrefix}-s1`, rid = `rq_${run}_x`; await fresh(db, run);
    const rs = await Promise.all(Array.from({ length: n }, () => outcome(op(envAt(base, T0), run, rid))));
    const executed = rs.filter((r) => r.status === 200 && !r.replayed).length;
    if (executed > 1) return { pass: false, detail: { n, executed, violation: 'multiple_executions', statuses: statuses(rs) } };
    return { pass: executed === 1 && (await effects(db, run)) === 1 && rs.every((r) => r.status === 200 || r.error === 'request_in_progress'),
      detail: { n, executed, statuses: statuses(rs) } };
  },
  async S2(base, runPrefix, { wait = {}, T0 = Date.now() } = {}) { // claim stolen before commit → assertion fails → whole batch rolls back
    const db = base.DB; const run = `${runPrefix}-s2`, rid = `rq_${run}_x`; await fresh(db, run);
    const g = deferred();
    const p = outcome(op(envAt(base, T0), run, rid, { gate: g.promise }));
    const w = await waitForPendingClaim(db, attemptOf(run), rid, wait);   // the original's pending claim exists
    if (w.error) { g.resolve(); await p; return { pass: false, detail: w }; }
    const stolen = await db.prepare("UPDATE request_log SET claim_token = 'clm_stolen' WHERE attempt_id = ?1 AND request_id = ?2 AND state = 'pending' AND claim_token = ?3")
      .bind(attemptOf(run), rid, w.token).run();
    g.resolve(); const r = await p;
    const st = (await db.prepare('SELECT state FROM idem_probe_state WHERE run_id = ?1').bind(run).first()).state;
    return { pass: stolen.meta.changes === 1 && (await effects(db, run)) === 0 && st === 'open' && (await record(db, run, rid)).state === 'pending',
      detail: { response: r, state: st, stolen: stolen.meta.changes } };
  },
  async S3(base, runPrefix, { T0 = Date.now() } = {}) { // precondition false → rollback, claim released
    const db = base.DB; const run = `${runPrefix}-s3`, rid = `rq_${run}_x`; await fresh(db, run);
    const r = await outcome(op(envAt(base, T0), run, rid, { precondOk: false }));
    return { pass: (await effects(db, run)) === 0 && !(await record(db, run, rid)), detail: { response: r } };
  },
  async S4(base, runPrefix, { T0 = Date.now() } = {}) { // effect + completed record commit together; a failing later statement leaves neither
    const db = base.DB; const run = `${runPrefix}-s4a`, rid = `rq_${run}_x`; await fresh(db, run);
    const ok = await outcome(op(envAt(base, T0), run, rid));
    const rec = await record(db, run, rid);
    const run2 = `${runPrefix}-s4b`, rid2 = `rq_${run2}_x`; await fresh(db, run2);
    const bad = await outcome(op(envAt(base, T0), run2, rid2, { extra: ["INSERT INTO idempotency_assertions (token, ok) VALUES ('probe-forced-failure', 0)"] }));
    return { pass: ok.status === 200 && rec && rec.state === 'completed' && (await effects(db, run)) === 1
      && (await effects(db, run2)) === 0 && !(await record(db, run2, rid2)), detail: { ok, bad } };
  },
  async S5(base, runPrefix, { n = 20, T0 = Date.now() } = {}) { // stale claim, many simultaneous takeovers → exactly one executes
    const db = base.DB; const run = `${runPrefix}-s5`, rid = `rq_${run}_x`; await fresh(db, run);
    await insertStaleClaim(db, run, rid, T0);
    const later = T0 + CLAIM_TTL_MS + 1; const logs = [];
    const rs = await Promise.all(Array.from({ length: n }, () => outcome(op({ ...envAt(base, later), __logs: logs }, run, rid))));
    const executed = rs.filter((r) => r.status === 200 && !r.replayed).length;
    const takeovers = countTakeovers(logs);          // compare-and-set: D1 reported changes = 1 for exactly one takeover UPDATE
    if (executed > 1 || takeovers > 1) return { pass: false, detail: { n, executed, takeovers, violation: executed > 1 ? 'multiple_executions' : 'multiple_takeovers', statuses: statuses(rs) } };
    return { pass: executed === 1 && takeovers === 1 && (await effects(db, run)) === 1 && rs.every((r) => r.status === 200 || r.error === 'request_in_progress'),
      detail: { n, executed, takeovers, statuses: statuses(rs) } };
  },
  async S6(base, runPrefix, { wait = {}, T0 = Date.now() } = {}) { // original resumes after a takeover → its batch rolls back; answered with the taker's response
    const db = base.DB; const run = `${runPrefix}-s6`, rid = `rq_${run}_x`; await fresh(db, run);
    const g = deferred();
    const original = outcome(op(envAt(base, T0), run, rid, { gate: g.promise }));
    const w = await waitForPendingClaim(db, attemptOf(run), rid, wait);   // the original holds the claim before the takeover
    if (w.error) { g.resolve(); await original; return { pass: false, detail: w }; }
    const taker = await outcome(op(envAt(base, T0 + CLAIM_TTL_MS + 1), run, rid));
    g.resolve(); const o = await original;
    return { pass: taker.status === 200 && !taker.replayed && o.status === 200 && o.replayed && (await effects(db, run)) === 1, detail: { taker, original: o } };
  },
  async S7a(base, runPrefix, { wait = {}, T0 = Date.now() } = {}) { // dies before the batch → 503 within the TTL, takeover after
    const db = base.DB; const run = `${runPrefix}-s7a`, rid = `rq_${run}_x`; await fresh(db, run);
    op(envAt(base, T0), run, rid, { gate: new Promise(() => {}) }).catch(() => {});   // abandoned forever
    const w = await waitForPendingClaim(db, attemptOf(run), rid, wait);   // it died holding a pending claim
    if (w.error) return { pass: false, detail: w };
    const within = await outcome(op(envAt(base, T0 + 1000), run, rid));
    const after = await outcome(op(envAt(base, T0 + CLAIM_TTL_MS + 1), run, rid));
    return { pass: within.error === 'request_in_progress' && after.status === 200 && !after.replayed && (await effects(db, run)) === 1, detail: { within, after } };
  },
  async S7b(base, runPrefix, { T0 = Date.now() } = {}) { // dies after commit → the retry replays
    const db = base.DB; const run2 = `${runPrefix}-s7b`, rid2 = `rq_${run2}_x`; await fresh(db, run2);
    await op(envAt(base, T0), run2, rid2);                                               // committed; response "lost"
    const retry = await outcome(op(envAt(base, T0 + 5), run2, rid2));
    return { pass: retry.status === 200 && retry.replayed && (await effects(db, run2)) === 1, detail: { retry } };
  }
};
async function insertStaleClaim(db, run, rid, claimedAt) {
  await db.prepare(`INSERT INTO request_log (attempt_id, request_id, route, status, response_json, created_at, state, claim_token, claimed_at)
      VALUES (?1, ?2, 'probe:op', 0, '{}', ?3, 'pending', 'clm_dead', ?3)`).bind(attemptOf(run), rid, claimedAt).run();
}

/* All scenarios in ONE invocation (Workers Paid: measured 227 D1 statements at n = 20, see README). S7 = S7a AND S7b. */
export async function runScenarios(base, runPrefix, { n = 20, wait = {} } = {}) {
  const out = []; const T0 = Date.now(); const o = { n, wait, T0 };
  for (const id of ['S1', 'S2', 'S3', 'S4', 'S5', 'S6']) { const r = await SCENARIOS[id](base, runPrefix, o); out.push({ id: SCENARIO_NAMES[id], pass: !!r.pass, detail: r.detail }); }
  const a = await SCENARIOS.S7a(base, runPrefix, o);
  if (a.detail && a.detail.error) { out.push({ id: SCENARIO_NAMES.S7, pass: false, detail: a.detail }); return out; }
  const b = await SCENARIOS.S7b(base, runPrefix, o);
  out.push({ id: SCENARIO_NAMES.S7, pass: !!(a.pass && b.pass), detail: { ...a.detail, ...b.detail } });
  return out;
}
export const SCENARIO_NAMES = { S1: 'S1_simultaneous_claims_one_execution', S2: 'S2_claim_assertion_rolls_back', S3: 'S3_precondition_assertion_rolls_back',
  S4: 'S4_effect_and_record_commit_together', S5: 'S5_stale_takeover_race_one_execution', S6: 'S6_resumed_original_rolls_back', S7: 'S7_crash_windows',
  S7a: 'S7a_crash_before_commit_in_progress_then_takeover', S7b: 'S7b_crash_after_commit_replays' };

/* idempotentAtomic() logs 'claim_takeover' only when its compare-and-set UPDATE changed a row (src/core.js). The
   outcome checks alone cannot see a takeover that is NOT compare-and-set: the claim-token assertion and the transition
   precondition still let only one batch commit. Counting successful takeovers makes "exactly one winner" observable. */
const countTakeovers = (logs) => logs.filter((l) => JSON.parse(l).evt === 'claim_takeover').length;

/* Cross-request race (runner fires many HTTP requests at once): one claim attempt per request; `took_over` reports
   whether THIS request's compare-and-set takeover succeeded (the runner requires exactly one per stale round, none
   per fresh round). */
export async function raceOne(base, run, rid) { const logs = []; const r = await outcome(op({ ...envAt(base, Date.now()), __logs: logs }, run, rid)); return { ...r, took_over: countTakeovers(logs) > 0 }; }
export async function raceState(db, run, rid) { return { effects: await effects(db, run), record: await record(db, run, rid) }; }
export const prepareRace = (db, run) => fresh(db, run);
/* Cross-request STALE-claim race (Free split of S5): a dead claim older than the TTL by `marginMs` (real clock, so it is
   stale for every request of the round), then many HTTP requests try the compare-and-set takeover at once. */
export async function prepareStaleRace(db, run, rid, { marginMs = 5 * 60_000, now = Date.now() } = {}) { await fresh(db, run); await insertStaleClaim(db, run, rid, now - CLAIM_TTL_MS - marginMs); }
