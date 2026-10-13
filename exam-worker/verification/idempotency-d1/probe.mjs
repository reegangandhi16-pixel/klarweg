/* Idempotency-claim probe (ABSENT → PENDING → COMPLETED) — runs the REAL idempotentAtomic() (exam-worker/src/core.js)
   against a D1 binding migrated with 0001 + 0002. Business effects go to the probe's own idem_probe_* tables.
   Evidence only when run on an explicitly identified, isolated NON-PRODUCTION D1 (README.md). */
import { idempotentAtomic, CLAIM_TTL_MS } from '../../src/core.js';

export const PROBE_SCHEMA = [
  'CREATE TABLE IF NOT EXISTS idem_probe_marker (label TEXT PRIMARY KEY)',
  'CREATE TABLE IF NOT EXISTS idem_probe_state (run_id TEXT PRIMARY KEY, state TEXT NOT NULL)',
  'CREATE TABLE IF NOT EXISTS idem_probe_effects (id INTEGER PRIMARY KEY AUTOINCREMENT, run_id TEXT NOT NULL, request_id TEXT NOT NULL, tag TEXT NOT NULL)'
];

/* Refuse anything that is not a fresh, labelled probe database: a real exam database has attempts. */
export async function guard(db, label) {
  if (typeof label !== 'string' || !/^nonprod-[a-z0-9-]{3,40}$/.test(label)) throw Object.assign(new Error('label_required'), { code: 'label_required' });
  const tables = (await db.prepare("SELECT name FROM sqlite_master WHERE type = 'table'").all()).results.map((r) => r.name);
  for (const t of ['request_log', 'idempotency_assertions']) if (!tables.includes(t)) throw Object.assign(new Error('migrations_missing'), { code: 'migrations_missing', table: t });
  if (tables.includes('attempts') && (await db.prepare('SELECT COUNT(*) AS n FROM attempts').first()).n > 0) throw Object.assign(new Error('refusing_database_with_attempts'), { code: 'refusing_database_with_attempts' });
  if (tables.includes('idem_probe_marker')) {
    const m = await db.prepare('SELECT label FROM idem_probe_marker').first();
    if (m && m.label !== label) throw Object.assign(new Error('label_mismatch'), { code: 'label_mismatch' });
  }
}
export async function setupProbe(db, label) {
  await guard(db, label);
  for (const sql of PROBE_SCHEMA) await db.prepare(sql).run();
  await db.prepare('INSERT OR IGNORE INTO idem_probe_marker (label) VALUES (?1)').bind(label).run();
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

export async function runScenarios(base, runPrefix, { n = 20 } = {}) {
  const db = base.DB; const out = []; const T0 = Date.now();
  const check = (id, pass, detail) => out.push({ id, pass: !!pass, detail });

  { // S1 simultaneous same-id claims inside one isolate
    const run = `${runPrefix}-s1`, rid = `rq_${run}_x`; await fresh(db, run);
    const rs = await Promise.all(Array.from({ length: n }, () => outcome(op(envAt(base, T0), run, rid))));
    const executed = rs.filter((r) => r.status === 200 && !r.replayed).length;
    check('S1_simultaneous_claims_one_execution', executed === 1 && (await effects(db, run)) === 1 && rs.every((r) => r.status === 200 || r.error === 'request_in_progress'),
      { executed, statuses: [...new Set(rs.map((r) => `${r.status}${r.replayed ? ':replayed' : ''}${r.error ? ':' + r.error : ''}`))] });
  }
  { // S2 claim stolen before commit → assertion fails → whole batch rolls back
    const run = `${runPrefix}-s2`, rid = `rq_${run}_x`; await fresh(db, run);
    const g = deferred();
    const p = outcome(op(envAt(base, T0), run, rid, { gate: g.promise }));
    await new Promise((r) => setTimeout(r, 50));
    await db.prepare("UPDATE request_log SET claim_token = 'clm_stolen' WHERE attempt_id = ?1 AND request_id = ?2").bind(attemptOf(run), rid).run();
    g.resolve(); const r = await p;
    const st = (await db.prepare('SELECT state FROM idem_probe_state WHERE run_id = ?1').bind(run).first()).state;
    check('S2_claim_assertion_rolls_back', (await effects(db, run)) === 0 && st === 'open' && (await record(db, run, rid)).state === 'pending', { response: r, state: st });
  }
  { // S3 precondition false → rollback, claim released
    const run = `${runPrefix}-s3`, rid = `rq_${run}_x`; await fresh(db, run);
    const r = await outcome(op(envAt(base, T0), run, rid, { precondOk: false }));
    check('S3_precondition_assertion_rolls_back', (await effects(db, run)) === 0 && !(await record(db, run, rid)), { response: r });
  }
  { // S4 effect + completed record commit together; a failing later statement leaves neither
    const run = `${runPrefix}-s4a`, rid = `rq_${run}_x`; await fresh(db, run);
    const ok = await outcome(op(envAt(base, T0), run, rid));
    const rec = await record(db, run, rid);
    const run2 = `${runPrefix}-s4b`, rid2 = `rq_${run2}_x`; await fresh(db, run2);
    const bad = await outcome(op(envAt(base, T0), run2, rid2, { extra: ["INSERT INTO idempotency_assertions (token, ok) VALUES ('probe-forced-failure', 0)"] }));
    check('S4_effect_and_record_commit_together', ok.status === 200 && rec && rec.state === 'completed' && (await effects(db, run)) === 1
      && (await effects(db, run2)) === 0 && !(await record(db, run2, rid2)), { ok, bad });
  }
  { // S5 stale claim, many simultaneous takeovers → exactly one executes
    const run = `${runPrefix}-s5`, rid = `rq_${run}_x`; await fresh(db, run);
    await db.prepare(`INSERT INTO request_log (attempt_id, request_id, route, status, response_json, created_at, state, claim_token, claimed_at)
        VALUES (?1, ?2, 'probe:op', 0, '{}', ?3, 'pending', 'clm_dead', ?3)`).bind(attemptOf(run), rid, T0).run();
    const later = T0 + CLAIM_TTL_MS + 1;
    const rs = await Promise.all(Array.from({ length: n }, () => outcome(op(envAt(base, later), run, rid))));
    const executed = rs.filter((r) => r.status === 200 && !r.replayed).length;
    check('S5_stale_takeover_race_one_execution', executed === 1 && (await effects(db, run)) === 1, { executed, statuses: [...new Set(rs.map((r) => `${r.status}${r.replayed ? ':replayed' : ''}${r.error ? ':' + r.error : ''}`))] });
  }
  { // S6 original resumes after a takeover → its batch rolls back; answered with the taker's response
    const run = `${runPrefix}-s6`, rid = `rq_${run}_x`; await fresh(db, run);
    const g = deferred();
    const original = outcome(op(envAt(base, T0), run, rid, { gate: g.promise }));
    await new Promise((r) => setTimeout(r, 50));
    const taker = await outcome(op(envAt(base, T0 + CLAIM_TTL_MS + 1), run, rid));
    g.resolve(); const o = await original;
    check('S6_resumed_original_rolls_back', taker.status === 200 && !taker.replayed && o.status === 200 && o.replayed && (await effects(db, run)) === 1, { taker, original: o });
  }
  { // S7 crash windows: (a) dies before the batch → 503 within the TTL, takeover after; (b) dies after commit → replay
    const run = `${runPrefix}-s7a`, rid = `rq_${run}_x`; await fresh(db, run);
    op(envAt(base, T0), run, rid, { gate: new Promise(() => {}) }).catch(() => {});   // abandoned forever
    await new Promise((r) => setTimeout(r, 50));
    const within = await outcome(op(envAt(base, T0 + 1000), run, rid));
    const after = await outcome(op(envAt(base, T0 + CLAIM_TTL_MS + 1), run, rid));
    const run2 = `${runPrefix}-s7b`, rid2 = `rq_${run2}_x`; await fresh(db, run2);
    await op(envAt(base, T0), run2, rid2);                                               // committed; response "lost"
    const retry = await outcome(op(envAt(base, T0 + 5), run2, rid2));
    check('S7_crash_windows', within.error === 'request_in_progress' && after.status === 200 && !after.replayed && (await effects(db, run)) === 1
      && retry.status === 200 && retry.replayed && (await effects(db, run2)) === 1, { within, after, retry });
  }
  return out;
}

/* Cross-request race (runner fires many HTTP requests at once): one claim attempt per request. */
export async function raceOne(base, run, rid) { return outcome(op(envAt(base, Date.now()), run, rid)); }
export async function raceState(db, run, rid) { return { effects: await effects(db, run), record: await record(db, run, rid) }; }
export const prepareRace = (db, run) => fresh(db, run);
