/* Rater playback of Sprechen recordings: GET /exam/v1/admin/attempts/<id>/recordings/<part>/<turn>.
   Session-bound (no URL token), rater/lead_rater only, never the rater's own attempt, only after Sprechen was
   submitted; bytes re-checked against the stored SHA-256; never cached; every playback audit-logged. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, newUser, role } from './harness.mjs';
import { start, submit, answerObjective, runHoeren, runSchreiben, runSprechen } from './flow.mjs';

const rec = (s, user, part = 1, turn = 't1', extra = {}) => call(s.env, 'GET', `/exam/v1/admin/attempts/${s.attempt}/recordings/${part}/${turn}`, { user, ...extra });

test('RECORDING PLAYBACK: refused before submission and to everyone but an independent rater; exact bytes after submission', async () => {
  const s = await setup();
  const r1 = newUser(); await role(s.env, r1, 'rater');
  await start(s, 'lesen'); await answerObjective(s, 'lesen'); await submit(s, 'lesen');   // modules run in order
  await runHoeren(s, (it, k) => k.correct); await submit(s, 'hoeren');
  await runSchreiben(s); await submit(s, 'schreiben');
  await runSprechen(s);   // recorded, module still running
  let r = await rec(s, r1);
  assert.equal(r.status, 409, 'not while Sprechen is running'); assert.equal(r.json.error, 'module_not_submitted');
  await submit(s, 'sprechen');

  // unauthorized: the learner, another learner, the learner holding a rater role, no session, no proxy secret
  for (const u of [s.user, newUser()]) { r = await rec(s, u); assert.equal(r.status, 403); assert.equal(r.json.error, 'rater_role_required'); }
  await role(s.env, s.user, 'rater');
  r = await rec(s, s.user); assert.equal(r.status, 403); assert.equal(r.json.error, 'cannot_rate_own_attempt');
  r = await rec(s, undefined); assert.ok(r.status === 401 || r.status === 403, `no session → ${r.status}`);
  r = await rec(s, r1, 1, 't1', { proxyAuth: 'wrong-secret-0123456789abcdef0123' }); assert.ok(r.status === 401 || r.status === 403);
  assert.equal((await s.env.DB.prepare("SELECT COUNT(*) AS n FROM audit_log WHERE action = 'recording_played_by_rater'").first()).n, 0, 'nothing played yet');

  // the independent rater gets exactly the uploaded chunks, in order, uncached
  r = await rec(s, r1);
  assert.equal(r.status, 200);
  const item = (await s.env.DB.prepare("SELECT item_id FROM recording_chunks WHERE attempt_id = ?1 AND part = 1 AND turn = 't1'").bind(s.attempt).first()).item_id;
  assert.equal(r.buf.toString('utf8'), `synthetic-${item}-t1-0synthetic-${item}-t1-1`);
  assert.equal(r.headers.get('content-type'), 'audio/webm');
  assert.equal(r.headers.get('cache-control'), 'private, no-store');
  assert.equal(r.headers.get('x-content-type-options'), 'nosniff');
  const log = await s.env.DB.prepare("SELECT actor, detail_json FROM audit_log WHERE action = 'recording_played_by_rater'").first();
  assert.equal(log.actor, r1); assert.deepEqual(JSON.parse(log.detail_json), { part: 1, turn: 't1', chunks: 2 });

  // a turn without audio and malformed paths
  r = await rec(s, r1, 1, 't9'); assert.equal(r.status, 404); assert.equal(r.json.error, 'recording_not_found');
  r = await call(s.env, 'GET', `/exam/v1/admin/attempts/${s.attempt}/recordings/4/t1`, { user: r1 }); assert.equal(r.status, 404);

  // a stored chunk that no longer matches its checksum is never served
  const key = (await s.env.DB.prepare("SELECT r2_key FROM recording_chunks WHERE attempt_id = ?1 AND part = 1 AND turn = 't1' AND seq = 1").bind(s.attempt).first()).r2_key;
  s.env.RECORDINGS.objects.get(key).bytes = Buffer.from('tampered');
  r = await rec(s, r1); assert.equal(r.status, 503); assert.equal(r.json.error, 'recording_integrity');
});

test('RECORDING PLAYBACK: a rater cannot reach an attempt whose Sprechen was never started', async () => {
  const s = await setup();
  const r1 = newUser(); await role(s.env, r1, 'rater');
  await start(s, 'lesen');
  const r = await rec(s, r1);
  assert.equal(r.status, 409); assert.equal(r.json.error, 'module_not_submitted');
});
