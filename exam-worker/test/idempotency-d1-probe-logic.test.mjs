/* Idempotency-claim D1 probe — LOCAL SELF-CHECK of the probe's own logic on the in-memory shim.
   NOT D1 evidence: the merge gate requires the probe on an isolated non-production D1
   (exam-worker/verification/idempotency-d1/README.md). */
import test from 'node:test';
import assert from 'node:assert/strict';
import { createExamD1 } from './harness.mjs';
import { setupProbe, guard, runScenarios } from '../verification/idempotency-d1/probe.mjs';

test('IDEM PROBE (local self-check, not evidence): scenarios S1–S7 pass against the real helper on the shim', async () => {
  const DB = createExamD1();
  await setupProbe(DB, 'nonprod-local-check');
  const results = await runScenarios({ DB }, 'local-check-0001', { n: 8 });
  assert.equal(results.length, 7);
  for (const r of results) assert.equal(r.pass, true, `${r.id}: ${JSON.stringify(r.detail)}`);
});

test('IDEM PROBE refuses unlabelled databases, a mismatched label, and any database holding exam attempts', async () => {
  const DB = createExamD1();
  await assert.rejects(() => guard(DB, 'prod'), (e) => e.code === 'label_required');
  await setupProbe(DB, 'nonprod-a-check');
  await assert.rejects(() => guard(DB, 'nonprod-b-check'), (e) => e.code === 'label_mismatch');
  const withAttempt = createExamD1();
  withAttempt.raw.exec('PRAGMA foreign_keys = OFF');
  withAttempt.raw.exec("INSERT INTO attempts (id, user_id, mode, level, form_id, release, status, client_request_id, assignment_reason, assignment_seed, created_at) VALUES ('att_real', 'u', 'synthetic_full', 'B1', 'f', 'r', 'created', 'rq_xxxxxxxx', 'x', 'x', 0)");
  await assert.rejects(() => setupProbe(withAttempt, 'nonprod-a-check'), (e) => e.code === 'refusing_database_with_attempts');
});
