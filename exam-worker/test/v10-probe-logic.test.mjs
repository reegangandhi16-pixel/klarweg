/* V10 probe — LOCAL SELF-CHECK of the probe's own logic on in-process SQLite (node:sqlite, BEGIN/COMMIT/ROLLBACK).
   This is NOT V10 evidence: V10 requires the probe deployed against a separate non-production D1 database
   (exam-worker/verification/v10-probe/README.md). */
import test from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { setupSchema, runScenarios, prepareClaim, claim, readState, ledgerApplied } from '../verification/v10-probe/probe.mjs';
import { createExamD1 } from './harness.mjs';

/* Minimal D1-shaped wrapper; batch is all-or-nothing on a failing statement, like the documented D1 semantics. */
function localD1(mode = 'atomic') {
  const db = new DatabaseSync(':memory:');
  const stmt = (sql, params = []) => ({
    bind: (...p) => stmt(sql, p),
    first: async () => { const r = db.prepare(sql).get(...params); return r === undefined ? null : { ...r }; },
    all: async () => ({ results: db.prepare(sql).all(...params).map((r) => ({ ...r })) }),
    run: async () => { const i = db.prepare(sql).run(...params); return { meta: { changes: Number(i.changes) } }; },
    _sync: () => db.prepare(sql).run(...params)
  });
  return {
    prepare: (sql) => stmt(sql),
    async batch(stmts) {
      if (mode === 'stop-no-rollback') { for (const s of stmts) s._sync(); return; }
      if (mode === 'continue-past-error') { let err; for (const s of stmts) { try { s._sync(); } catch (e) { err = err || e; } } if (err) throw err; return; }
      db.exec('BEGIN'); try { for (const s of stmts) s._sync(); db.exec('COMMIT'); } catch (e) { db.exec('ROLLBACK'); throw e; }
    }
  };
}

test('V10 probe (local self-check, not evidence): scenarios A–D report pass on a transactional batch', async () => {
  const db = localD1();
  await setupSchema(db);
  const results = await runScenarios(db, 'local-run-0001');
  assert.deepEqual(results.map((r) => r.id), ['A_false_assertion_rolls_back_batch', 'B_ledger_replay_applies_once',
    'C_late_constraint_rolls_back_earlier_statements', 'D_zero_row_guard_does_not_roll_back']);
  for (const r of results) assert.equal(r.pass, true, `${r.id}: ${JSON.stringify(r.detail)}`);
});

test('V10 probe (local self-check, not evidence): a claim applies once — same op key and distinct op keys', async () => {
  const db = localD1();
  await setupSchema(db);
  for (const distinct of [false, true]) {
    const run = distinct ? 'local-claim-dist' : 'local-claim-same';
    await prepareClaim(db, run);
    const results = await Promise.all(Array.from({ length: 10 }, (_, i) => claim(db, run, distinct ? `commit:${run}:${i}` : `commit:${run}`)));
    assert.equal(results.filter((r) => r.applied).length, 1);
    assert.deepEqual(await readState(db, run), { state: 'committed', ledger_rows: 1, claim_rows: 1 });
    assert.equal(await ledgerApplied(db, distinct ? `commit:${run}:0` : `commit:${run}`), true);
  }
});

test('V10 probe (local self-check, not evidence): negative controls — a non-atomic batch is reported as FAIL', async () => {
  const verdicts = async (mode) => {
    const db = localD1(mode);
    await setupSchema(db);
    return Object.fromEntries((await runScenarios(db, 'local-neg-0001')).map((r) => [r.id[0], r.pass]));
  };
  // Stops at the failing statement but keeps earlier writes: C must catch it.
  assert.equal((await verdicts('stop-no-rollback')).C, false);
  // Keeps executing after a failing statement: A, B and C must all catch it.
  assert.deepEqual(await verdicts('continue-past-error'), { A: false, B: false, C: false, D: true });
});

test('V10 probe refuses to run on a database that holds exam tables', async () => {
  const examDb = createExamD1();   // in-memory exam schema from migration 0001
  await assert.rejects(() => setupSchema(examDb), (e) => e.code === 'refusing_exam_database');
  await assert.rejects(() => runScenarios(examDb, 'local-run-0002'), (e) => e.code === 'refusing_exam_database');
});
