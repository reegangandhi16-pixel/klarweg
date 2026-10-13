/* V10 probe — F4 transition invariant (F4-IMPLEMENTATION-BLUEPRINT §6.1, test V10).

   Checks, against a D1 binding, the design's assumption that a multi-statement transition is all-or-nothing when its
   FIRST statement asserts the precondition through a CHECK constraint, and a transition-ledger primary key makes it
   apply at most once. Uses only its own `v10_*` tables. The Worker never creates them: the operator applies
   probe-schema.sql and a qualification marker out of band, and verifyProbeDatabase() must pass before any route.

   Evidence status: results count as V10 evidence ONLY when produced by a deployed, non-production probe Worker bound
   to a separate, non-production D1 database (see README). In-process runs only check this file's own logic.

   The D1 binding is injected (`db.prepare(sql).bind(...).run()/first()/all()`, `db.batch([...])`), so the same code
   runs in the probe Worker and in the local self-check test. */

export const PROBE_TABLES = ['v10_assertions', 'v10_ledger', 'v10_state', 'v10_rows'];
export const MARKER_TABLE = 'v10_probe_marker';

/* Tables whose presence means this is an exam database (migration 0001): the probe must never run there. */
const EXAM_TABLES = ['attempts', 'attempt_modules', 'recording_chunks', 'recording_turns'];

export const RUN_ID_RE = /^[a-z0-9-]{8,64}$/;

/* ---------- database qualification (fail closed, read-only) ----------
   A Worker cannot read the physical identity (id or name) of its D1 binding at runtime, so this probe CANNOT PROVE
   which database it is bound to. It requires evidence that only the operator's out-of-band provisioning creates: the
   probe schema and exactly one marker row (label, sha256(V10_PROBE_DB_NONCE)), inserted with a wrangler command that
   names the database whose name and id the operator verified. The Worker never creates tables or the marker, and runs
   this check before every route; any doubt refuses. Operator name/id verification remains mandatory. */
const refuse = (code, extra = {}) => { throw Object.assign(new Error(code), { code, ...extra }); };
const sameHex = (a, b) => typeof a === 'string' && typeof b === 'string' && a.length === b.length && [...a].reduce((d, c, i) => d | (c.charCodeAt(0) ^ b.charCodeAt(i)), 0) === 0;
export async function sha256Hex(text) {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function verifyProbeDatabase(db, { label, nonce }) {
  if (typeof label !== 'string' || !/^nonprod-[a-z0-9-]{3,40}$/.test(label)) refuse('label_required');
  if (typeof nonce !== 'string' || nonce.length < 32) refuse('db_nonce_required');
  const tables = (await db.prepare("SELECT name FROM sqlite_master WHERE type = 'table'").all()).results.map((r) => r.name);
  const exam = tables.filter((n) => EXAM_TABLES.includes(n));
  if (exam.length) refuse('refusing_exam_database', { tables: exam });
  for (const t of [...PROBE_TABLES, MARKER_TABLE]) if (!tables.includes(t)) refuse('probe_schema_missing', { table: t });
  const markers = (await db.prepare(`SELECT label, nonce_sha256 FROM ${MARKER_TABLE}`).all()).results;
  if (markers.length !== 1) refuse('marker_missing_or_ambiguous', { markers: markers.length });
  if (markers[0].label !== label) refuse('label_mismatch');
  if (!sameHex(String(markers[0].nonce_sha256).toLowerCase(), await sha256Hex(nonce))) refuse('db_nonce_mismatch');   // hex case-insensitive only
  return { ok: true, label };
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
/* Callers must have passed verifyProbeDatabase() (the Worker does, before every route). */
export async function runScenarios(db, runId) {
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
