/* SCORING §4.4 / CALIBRATION §5.1.5: criterion disagreements of two or more bands go to lead review (monitoring only). */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, newUser, role } from './harness.mjs';
import { start, submit, answerObjective, runHoeren, runSchreiben, runSprechen, complete } from './flow.mjs';
import { disagreements } from '../src/rating-review.js';

async function finishedAttempt() {
  const s = await setup();
  await start(s, 'lesen'); await answerObjective(s, 'lesen'); await submit(s, 'lesen');
  await runHoeren(s, (it, k) => k.correct); await submit(s, 'hoeren');
  await runSchreiben(s); await submit(s, 'schreiben');
  await runSprechen(s); await submit(s, 'sprechen');
  await complete(s);
  return s;
}
const productive = (s, user) => call(s.env, 'GET', `/exam/v1/admin/attempts/${s.attempt}/productive`, { user });
const rate = (s, user, body) => call(s.env, 'POST', '/exam/v1/admin/ratings', { user, body: { attempt_id: s.attempt, ...body } });
const list = (s, user, opts = {}) => call(s.env, 'GET', '/exam/v1/admin/rating-disagreements', { user, ...opts });
const review = (s, user, body) => call(s.env, 'POST', '/exam/v1/admin/rating-disagreements/review', { user, body });
const allBands = (u, band = 'B') => Object.fromEntries(Object.keys(u.criteria).map((c) => [c, band]));

test('DISAGREEMENT (pure): |band difference| >= 2 per criterion; unknown bands ignored', () => {
  assert.deepEqual(disagreements({ a: 'A', b: 'B', c: 'B', d: 'X' }, { a: 'C', b: 'C', c: 'E', d: 'A' }), [{ criterion: 'a', r1: 'A', r2: 'C', diff: 2 }, { criterion: 'c', r1: 'B', r2: 'E', diff: 3 }]);
  assert.deepEqual(disagreements({ a: 'A' }, {}), []);
});

test('DISAGREEMENT (lead review): lead_rater/exam_admin only (fresh second factor); listed only after the module is final; review needs a note, is audited and removes the flag', async () => {
  const s = await finishedAttempt();
  const r1 = newUser(), r2 = newUser(), lead = newUser(), admin = newUser();
  await role(s.env, r1, 'rater'); await role(s.env, r2, 'rater'); await role(s.env, lead, 'lead_rater'); await role(s.env, admin, 'exam_admin');
  for (const u of [s.user, r1]) assert.equal((await list(s, u)).json.error, 'lead_role_required');
  assert.equal((await list(s, lead, { mfa: false })).json.error, 'mfa_required');
  const d = (await productive(s, r1)).json;
  for (const u of d.units) assert.equal((await rate(s, r1, { item_id: u.item_id, round: 1, bands: allBands(u) })).status, 200);
  const sp = d.units.filter((u) => u.module === 'sprechen');
  // round 2 for Sprechen differs by 2 bands on Aussprache only
  for (const u of sp) assert.equal((await rate(s, r2, { item_id: u.item_id, round: 2, bands: u.item_id === 'sprechen:pron' ? { aussprache: 'D' } : allBands(u) })).status, 200);
  let l = await list(s, lead);
  assert.equal(l.status, 200); assert.equal(l.json.threshold, 2);
  assert.deepEqual(l.json.flags.map((f) => [f.module, f.item_id, f.criterion, f.r1, f.r2, f.diff]), [['sprechen', 'sprechen:pron', 'aussprache', 'B', 'D', 2]]);
  assert.equal(l.json.flags[0].rater1, r1); assert.equal(l.json.flags[0].rater2, r2);
  assert.deepEqual((await list(s, admin)).json.flags.length, 1, 'exam_admin sees it too');
  const key = l.json.flags[0].key;
  assert.equal((await review(s, lead, { key: 'nope', note: 'ok ok' })).json.error, 'invalid_key');
  assert.equal((await review(s, lead, { key, note: '' })).json.error, 'note_required');
  assert.equal((await review(s, lead, { key: `${s.attempt}:sprechen:pron:erfuellung`, note: 'not a flag' })).json.error, 'flag_not_found');
  assert.equal((await review(s, r1, { key, note: 'rater cannot' })).json.error, 'lead_role_required');
  const ok = await review(s, lead, { key, note: 'Feedback an Rater 2 gegeben' });
  assert.equal(ok.status, 200, JSON.stringify(ok.json));
  const a = await s.env.DB.prepare("SELECT actor, attempt_id, detail_json FROM audit_log WHERE action = 'disagreement_reviewed'").first();
  assert.equal(a.actor, lead); assert.equal(a.attempt_id, s.attempt); assert.deepEqual(JSON.parse(a.detail_json), { key, note: 'Feedback an Rater 2 gegeben' });
  assert.deepEqual((await list(s, lead)).json.flags, [], 'reviewed flags leave the list');
  assert.equal((await review(s, lead, { key, note: 'twice' })).json.error, 'flag_not_found', 'no second review');
  // the score itself is untouched by the review
  const res = await call(s.env, 'GET', `/exam/v1/attempts/${s.attempt}/result`, { user: s.user });
  assert.equal(res.json.result.modules.find((m) => m.module === 'sprechen').status, 'final');
});

test('DISAGREEMENT (blindness): nothing is listed while the module is not final', async () => {
  const s = await finishedAttempt();
  const r1 = newUser(), lead = newUser();
  await role(s.env, r1, 'rater'); await role(s.env, lead, 'lead_rater');
  const d = (await productive(s, r1)).json;
  for (const u of d.units) assert.equal((await rate(s, r1, { item_id: u.item_id, round: 1, bands: allBands(u, 'A') })).status, 200);
  // only round 1 exists: not final, nothing listed (a lead may still give the second rating)
  assert.deepEqual((await list(s, lead)).json.flags, []);
});
