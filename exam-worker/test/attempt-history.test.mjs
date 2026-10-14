/* GET /exam/v1/attempts — the learner's own completed attempts, newest first, with the stored per-module result. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { makeEnv, call, newUser, grant, rid, dev } from './harness.mjs';

const create = (env, user) => call(env, 'POST', '/exam/v1/attempts', { user, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dev() } });
const complete = async (env, id, at) => {   // the lifecycle is tested elsewhere: close directly and store a result
  await env.DB.prepare("UPDATE attempts SET status = 'completed', completed_at = ?2 WHERE id = ?1").bind(id, at).run();
  await env.DB.prepare('INSERT INTO results (attempt_id, json, computed_at) VALUES (?1, ?2, ?3)').bind(id, JSON.stringify({ modules: [
    { module: 'lesen', status: 'final', points: 70, max_points: 100, pass: true, counts: { correct: 21, incorrect: 9, unanswered: 0 } },
    { module: 'schreiben', status: 'pending_rating', points: null, max_points: 100, pass: null }] }), at).run();
};

test('HISTORY: only the caller’s completed attempts, newest first, results only — nothing private beyond that', async () => {
  const h = makeEnv();
  const u = newUser(), other = newUser(); await grant(h.env, u); await grant(h.env, other);
  let r = await call(h.env, 'GET', '/exam/v1/attempts', { user: u });
  assert.equal(r.status, 200); assert.deepEqual(r.json.attempts, [], 'nothing yet');
  const a1 = (await create(h.env, u)).json.attempt_id; await complete(h.env, a1, 1000);
  const a2 = (await create(h.env, u)).json.attempt_id; await complete(h.env, a2, 2000);
  const open = (await create(h.env, u)).json.attempt_id;                         // still open: not listed
  const o1 = (await create(h.env, other)).json.attempt_id; await complete(h.env, o1, 3000);
  r = await call(h.env, 'GET', '/exam/v1/attempts', { user: u });
  assert.deepEqual(r.json.attempts.map((a) => a.attempt_id), [a2, a1], 'own completed attempts, newest first');
  const e = r.json.attempts[0];
  assert.equal(e.completed_at, 2000); assert.equal(e.test_content, true); assert.match(e.form_label, /Synthetische/);
  assert.deepEqual(e.modules, [{ module: 'lesen', status: 'final', points: 70, max_points: 100, pass: true }, { module: 'schreiben', status: 'pending_rating', points: null, max_points: 100, pass: null }]);
  const raw = r.buf.toString('utf8');
  assert.equal(raw.includes(open) || raw.includes(o1) || raw.includes(other), false, 'no open attempt and nothing of another learner');
  assert.equal(/correct|form_id|assignment|seed|counts/.test(raw), false, 'no keys, form ids, assignment data or answer counts');
  r = await call(h.env, 'GET', '/exam/v1/attempts', {});
  assert.ok(r.status === 401 || r.status === 403, `no session → ${r.status}`);
});

test('HISTORY: at most 20 entries', async () => {
  const h = makeEnv();
  const u = newUser(); await grant(h.env, u);
  for (let i = 0; i < 22; i++) { const id = (await create(h.env, u)).json.attempt_id; await complete(h.env, id, 1000 + i); }
  const r = await call(h.env, 'GET', '/exam/v1/attempts', { user: u });
  assert.equal(r.json.attempts.length, 20); assert.equal(r.json.attempts[0].completed_at, 1021);
});
