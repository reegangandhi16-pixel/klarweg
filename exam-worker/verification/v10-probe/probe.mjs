/* V10 probe — F4 transition invariant (F4-IMPLEMENTATION-BLUEPRINT §6.1, test V10).

   Checks, against a D1 binding, the design's assumption that a multi-statement transition is all-or-nothing when its
   FIRST statement asserts the precondition through a CHECK constraint, and a transition-ledger primary key makes it
   apply at most once. Uses only its own `v10_*` tables and refuses to run on a database that holds exam tables.

   Evidence status: results count as V10 evidence ONLY when produced by a deployed, non-production probe Worker bound
   to a separate, non-production D1 database (see README). In-process runs only check this file's own logic.

   The D1 binding is injected (`db.prepare(sql).bind(...).run()/first()/all()`, `db.batch([...])`), so the same code
   runs in the probe Worker and in the local self-check test. */

export const PROBE_TABLES = ['v10_assertions', 'v10_ledger', 'v10_state', 'v10_rows'];

export const PROBE_SCHEMA = [
  'CREATE TABLE IF NOT EXISTS v10_assertions (id INTEGER PRIMARY KEY AUTOINCREMENT, ok INTEGER NOT NULL CHECK (ok = 1))',
  'CREATE TABLE IF NOT EXISTS v10_ledger (op_key TEXT PRIMARY KEY, run_id TEXT NOT NULL, applied_at INTEGER NOT NULL)',
  'CREATE TABLE IF NOT EXISTS v10_state (run_id TEXT PRIMARY KEY, state TEXT NOT NULL)',
  'CREATE TABLE IF NOT EXISTS v10_rows (run_id TEXT NOT NULL, k TEXT NOT NULL, v TEXT NOT NULL, PRIMARY KEY (run_id, k))'
];

/* Tables whose presence means this is an exam database (migration 0001): the probe must never run there. */
const EXAM_TABLES = ['attempts', 'attempt_modules', 'recording_chunks', 'recording_turns'];

export const RUN_ID_RE = /^[a-z0-9-]{8,64}$/;

export async function assertProbeDatabase(db) {
  const rows = (await db.prepare("SELECT name FROM sqlite_master WHERE type = 'table'").all()).results.map((r) => r.name);
  const hit = rows.filter((n) => EXAM_TABLES.includes(n));
  if (hit.length) throw Object.assign(new Error('refusing_exam_database'), { code: 'refusing_exam_database', tables: hit });
}

export async function setupSchema(db) {
  await assertProbeDatabase(db);
  for (const sql of PROBE_SCHEMA) await db.prepare(sql).run();
}

/* The assertion statement: inserts 1 when `condSql` is true, 0 otherwise. CHECK (ok = 1) makes a false precondition fail
   the statement, which (per the documented D1 batch semantics) must roll back the whole batch. */
const assertion = (db, condSql, ...binds) => db.prepare(`INSERT INTO v10_assertions (ok) SELECT CASE WHEN (${condSql}) THEN 1 ELSE 0 END`).bind(...binds);
const ledger = (db, opKey, runId) => db.prepare('INSERT INTO v10_ledger (op_key, run_id, applied_at) VALUES (?1, ?2, ?3)').bind(opKey, runId, Date.now());
const row = (db, runId, k, v) => db.prepare('INSERT INTO v10_rows (run_id, k, v) VALUES (?1, ?2, ?3)').bind(runId, k, v);
const setState = (db, runId, state) => db.prepare('INSERT INTO v10_state (run_id, state) VALUES (?1, ?2) ON CONFLICT(run_id) DO UPDATE SET state = excluded.state').bind(runId, state);

async function tryBatch(db, stmts) {
  try { await db.batch(stmts); return { ok: true }; } catch (e) { return { ok: false, error: String((e && e.message) || e).slice(0, 200) }; }
}
const has = async (db, sql, ...b) => !!(await db.prepare(sql).bind(...b).first());
const count = async (db, sql, ...b) => (await db.prepare(sql).bind(...b).first()).n;

export async function resetRun(db, runId) {
  await db.batch([
    db.prepare('DELETE FROM v10_rows WHERE run_id = ?1').bind(runId),
    db.prepare('DELETE FROM v10_ledger WHERE run_id = ?1').bind(runId),
    db.prepare('DELETE FROM v10_state WHERE run_id = ?1').bind(runId)
  ]);
}

/* Sequential scenarios A–D. Each returns { id, pass, detail }. */
export async function runScenarios(db, runId) {
  await assertProbeDatabase(db);
  await resetRun(db, runId);
  const out = [];

  // A: a false assertion as the first statement rolls back every later statement.
  await setState(db, runId, 'open').run();
  const a = await tryBatch(db, [
    assertion(db, "EXISTS (SELECT 1 FROM v10_state WHERE run_id = ?1 AND state = 'reserved')", runId),
    ledger(db, `A:${runId}`, runId),
    row(db, runId, 'a', '1'),
    db.prepare("UPDATE v10_state SET state = 'committed' WHERE run_id = ?1").bind(runId)
  ]);
  const aState = (await db.prepare('SELECT state FROM v10_state WHERE run_id = ?1').bind(runId).first()).state;
  out.push({ id: 'A_false_assertion_rolls_back_batch', pass: !a.ok && !(await has(db, 'SELECT 1 FROM v10_ledger WHERE op_key = ?1', `A:${runId}`))
    && !(await has(db, "SELECT 1 FROM v10_rows WHERE run_id = ?1 AND k = 'a'", runId)) && aState === 'open', detail: { batch: a, state: aState } });

  // B: replaying a ledger key fails and applies nothing of the replay.
  const b1 = await tryBatch(db, [assertion(db, '1 = 1'), ledger(db, `B:${runId}`, runId), row(db, runId, 'b1', '1')]);
  const b2 = await tryBatch(db, [assertion(db, '1 = 1'), ledger(db, `B:${runId}`, runId), row(db, runId, 'b2', '1')]);
  out.push({ id: 'B_ledger_replay_applies_once', pass: b1.ok && !b2.ok && (await has(db, "SELECT 1 FROM v10_rows WHERE run_id = ?1 AND k = 'b1'", runId))
    && !(await has(db, "SELECT 1 FROM v10_rows WHERE run_id = ?1 AND k = 'b2'", runId))
    && (await count(db, 'SELECT COUNT(*) AS n FROM v10_ledger WHERE op_key = ?1', `B:${runId}`)) === 1, detail: { first: b1, replay: b2 } });

  // C: a constraint violation in a LATER statement rolls back the earlier ones (assertion, ledger, first insert).
  const c = await tryBatch(db, [assertion(db, '1 = 1'), ledger(db, `C:${runId}`, runId), row(db, runId, 'c', '1'), row(db, runId, 'c', '2')]);
  out.push({ id: 'C_late_constraint_rolls_back_earlier_statements', pass: !c.ok && !(await has(db, 'SELECT 1 FROM v10_ledger WHERE op_key = ?1', `C:${runId}`))
    && !(await has(db, "SELECT 1 FROM v10_rows WHERE run_id = ?1 AND k = 'c'", runId)), detail: { batch: c } });

  // D: the hazard the invariant exists for — a zero-row guarded UPDATE is NOT a failure, so later statements still apply.
  const d = await tryBatch(db, [
    db.prepare("UPDATE v10_state SET state = 'x' WHERE run_id = ?1 AND state = 'no-such-state'").bind(runId),
    row(db, runId, 'd', '1')
  ]);
  out.push({ id: 'D_zero_row_guard_does_not_roll_back', pass: d.ok && (await has(db, "SELECT 1 FROM v10_rows WHERE run_id = ?1 AND k = 'd'", runId)),
    detail: { batch: d, note: 'pass = the hazard is present, confirming why §6.1 needs a failing assertion' } });

  return out;
}

/* Concurrency primitive E: transition reserved → committed under the §6.1 invariant. */
export async function prepareClaim(db, runId) {
  await assertProbeDatabase(db);
  await resetRun(db, runId);
  await setState(db, runId, 'reserved').run();
}

export async function claim(db, runId, opKey) {
  const r = await tryBatch(db, [
    assertion(db, "EXISTS (SELECT 1 FROM v10_state WHERE run_id = ?1 AND state = 'reserved')", runId),
    ledger(db, opKey, runId),
    db.prepare("UPDATE v10_state SET state = 'committed' WHERE run_id = ?1").bind(runId),
    row(db, runId, `claim:${opKey}`, '1')
  ]);
  return { applied: r.ok, error: r.ok ? null : r.error };
}

export async function readState(db, runId) {
  const st = await db.prepare('SELECT state FROM v10_state WHERE run_id = ?1').bind(runId).first();
  return {
    state: st ? st.state : null,
    ledger_rows: await count(db, 'SELECT COUNT(*) AS n FROM v10_ledger WHERE run_id = ?1', runId),
    claim_rows: await count(db, "SELECT COUNT(*) AS n FROM v10_rows WHERE run_id = ?1 AND k LIKE 'claim:%'", runId)
  };
}

/* Is a ledger key applied? Used to resolve an ambiguous (unknown) batch result (§6.1 rule 6). */
export async function ledgerApplied(db, opKey) {
  return has(db, 'SELECT 1 FROM v10_ledger WHERE op_key = ?1', opKey);
}
