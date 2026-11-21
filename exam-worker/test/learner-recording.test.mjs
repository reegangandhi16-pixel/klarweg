/* The learner's own Sprechen recordings (SPEAKING §6): GET /attempts/<id>/sprechen/recordings and
   /sprechen/recordings/<part>/<turn> — owner only, after the Sprechen module was submitted, integrity-checked, never cached. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, newUser, role } from './harness.mjs';
import { A, start, submit, answerObjective, runHoeren, runSchreiben, runSprechen } from './flow.mjs';

const list = (s, user = s.user, extra = {}) => call(s.env, 'GET', A(s, '/sprechen/recordings'), { user, ...extra });
const one = (s, user = s.user, part = 1, turn = 't1') => call(s.env, 'GET', A(s, `/sprechen/recordings/${part}/${turn}`), { user });

test('MY RECORDINGS: refused before submission and to anyone but the owner; exact bytes after submission', async () => {
  const s = await setup();
  let r = await list(s);
  assert.equal(r.status, 409, 'before Sprechen'); assert.equal(r.json.error, 'module_not_submitted');
  await start(s, 'lesen'); await answerObjective(s, 'lesen'); await submit(s, 'lesen');
  await runHoeren(s, (it, k) => k.correct); await submit(s, 'hoeren');
  await runSchreiben(s); await submit(s, 'schreiben');
  await runSprechen(s);
  for (const res of [await list(s), await one(s)]) { assert.equal(res.status, 409, 'not while Sprechen runs'); assert.equal(res.json.error, 'module_not_submitted'); }
  await submit(s, 'sprechen');

  // another learner, a rater (raters use the rater endpoint), no session, wrong proxy secret
  const rater = newUser(); await role(s.env, rater, 'rater');
  for (const u of [newUser(), rater]) for (const res of [await list(s, u), await one(s, u)]) { assert.equal(res.status, 404); assert.equal(res.json.error, 'attempt_not_found'); }
  r = await call(s.env, 'GET', A(s, '/sprechen/recordings'), {}); assert.ok(r.status === 401 || r.status === 403, `no session → ${r.status}`);
  r = await list(s, s.user, { proxyAuth: 'wrong-secret-0123456789abcdef0123' }); assert.ok(r.status === 401 || r.status === 403);

  // the owner: the list of turns, then exact bytes of one turn, uncached
  r = await list(s);
  assert.equal(r.status, 200);
  const turns = (await s.env.DB.prepare('SELECT part, turn FROM recording_turns WHERE attempt_id = ?1 ORDER BY part, turn').bind(s.attempt).all()).results;
  assert.deepEqual(r.json.recordings.map((x) => [x.part, x.turn]), turns.map((t) => [t.part, t.turn]));
  assert.ok(r.json.recordings.every((x) => x.available && x.complete && x.duration_ms === 5000));
  assert.equal(/r2_key|rec\/|sha256/.test(JSON.stringify(r.json)), false, 'no storage keys or hashes in the list');
  r = await one(s);
  assert.equal(r.status, 200);
  const item = (await s.env.DB.prepare("SELECT item_id FROM recording_chunks WHERE attempt_id = ?1 AND part = 1 AND turn = 't1'").bind(s.attempt).first()).item_id;
  assert.equal(r.buf.toString('utf8'), `synthetic-${item}-t1-0synthetic-${item}-t1-1`);
  assert.equal(r.headers.get('cache-control'), 'private, no-store');
  assert.equal(r.headers.get('content-type'), 'audio/webm');
  r = await one(s, s.user, 1, 't9'); assert.equal(r.status, 404); assert.equal(r.json.error, 'recording_not_found');

  // a deleted or tampered chunk is never served; a turn without chunks is listed as not available
  const key = (await s.env.DB.prepare("SELECT r2_key FROM recording_chunks WHERE attempt_id = ?1 AND part = 1 AND turn = 't1' AND seq = 1").bind(s.attempt).first()).r2_key;
  s.env.RECORDINGS.objects.get(key).bytes = Buffer.from('tampered');
  r = await one(s); assert.equal(r.status, 503); assert.equal(r.json.error, 'recording_integrity');
  await s.env.DB.prepare("DELETE FROM recording_chunks WHERE attempt_id = ?1 AND part = 1 AND turn = 't1'").bind(s.attempt).run();
  r = await list(s);
  assert.equal(r.json.recordings.find((x) => x.part === 1 && x.turn === 't1').available, false);
});
