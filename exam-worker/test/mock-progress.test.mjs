/* Modelltest progress on the learner's history (Issue #384): "n von N Modelltests vollständig bearbeitet".
   N = the assignable mock forms (status + release set, as assignment); n = distinct ones this learner COMPLETED in
   full. Another learner's attempts, single-module attempts and unassignable forms never count; no form id is sent. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { makeEnv, newUser, grant, call, rid, dev, PRACTICE_FORM_DIR, PRACTICE_P2_FORM_DIR } from './harness.mjs';
import { attemptHistory } from '../../exam/js/render.js';

/* practice forms P1/P2 stand in for two Modelltests: built normally, then registered as kind 'mock' in the in-memory test
   registry (real mock content never lives in this public repo, and the validator rightly refuses synthetic assets in a
   real-kind form) */
const M1 = { id: 'frm:b1:synthetic-p1@1' }, M2 = { id: 'frm:b1:synthetic-p2@1' };
function env(flags) {
  const h = makeEnv({ formDirs: [PRACTICE_FORM_DIR, PRACTICE_P2_FORM_DIR], flags });
  h.env.DB.raw.exec("UPDATE forms SET kind = 'mock', purpose = NULL");
  return h;
}
const FLAGS = { EXAM_SYNTHETIC_FORMS: 'off', EXAM_MOCK_FORMS: 'on', EXAM_MODULE_CHOICE: 'on' };
const list = async (env, user) => (await call(env, 'GET', '/exam/v1/attempts', { user })).json;
async function finish(env, user, body) {
  const c = await call(env, 'POST', '/exam/v1/attempts', { user, body: { level: 'b1', request_id: rid(), device_id: dev(), ...body } });
  assert.equal(c.status, 200, JSON.stringify(c.json));
  await env.DB.prepare("UPDATE attempts SET status = 'completed', completed_at = ?2 WHERE id = ?1").bind(c.json.attempt_id, Date.now()).run();
  return c.json.attempt_id;
}

test('MOCK PROGRESS: 0 → 1 → 2 of 2; single-module attempts and other learners do not count; no form ids', async () => {
  const h = env(FLAGS);
  const u = newUser(), other = newUser();
  await grant(h.env, u, 'mock'); await grant(h.env, other, 'mock');
  assert.deepEqual((await list(h.env, u)).mock_progress, { completed: 0, total: 2 });
  await finish(h.env, other, { mode: 'mock_m0' });
  assert.deepEqual((await list(h.env, u)).mock_progress, { completed: 0, total: 2 }, 'another learner does not count');
  await finish(h.env, u, { mode: 'mock_m0' });
  assert.deepEqual((await list(h.env, u)).mock_progress, { completed: 1, total: 2 });
  await finish(h.env, u, { mode: 'mock_m0' });   // least-attempted assignment: the other form
  const l = await list(h.env, u);
  assert.deepEqual(l.mock_progress, { completed: 2, total: 2 });
  // a single-module attempt never counts as a completed Modelltest
  const h2 = env(FLAGS); const w = newUser(); await grant(h2.env, w, 'mock');
  await finish(h2.env, w, { mode: 'mock_module', module: 'lesen' });
  assert.deepEqual((await list(h2.env, w)).mock_progress, { completed: 0, total: 2 }, 'single module does not count');
  assert.ok(!JSON.stringify(l).includes(M1.id) && !JSON.stringify(l).includes(M2.id), 'no form id reaches the client');
});

test('MOCK PROGRESS: the release set narrows the total; no assignable Modelltest → null', async () => {
  const h = env({ ...FLAGS, EXAM_RELEASE_FORMS: M1.id });
  const u = newUser(); await grant(h.env, u, 'mock');
  assert.deepEqual((await list(h.env, u)).mock_progress, { completed: 0, total: 1 });
  const none = makeEnv({ flags: { EXAM_SYNTHETIC_FORMS: 'on' } });   // S0 only: no Modelltest
  const v = newUser(); await grant(none.env, v);
  assert.equal((await list(none.env, v)).mock_progress, null);
});

test('MOCK PROGRESS (render): progress line above the history table', () => {
  const row = { attempt_id: 'att_1', completed_at: Date.UTC(2026, 10, 24), form_label: 'Klarweg B1 Modelltest M3', modules: [{ module: 'lesen', status: 'final', points: 80, max_points: 100 }] };
  assert.match(attemptHistory({ attempts: [row], mock_progress: { completed: 3, total: 11 } }), /3 von 11 Modelltests vollständig bearbeitet\. Neue Starts wählen bevorzugt/);
  assert.match(attemptHistory({ attempts: [row], mock_progress: { completed: 11, total: 11 } }), /alle Modelltests bearbeitet/);
  assert.ok(!attemptHistory({ attempts: [row], mock_progress: null }).includes('Modelltests vollständig'));
});
