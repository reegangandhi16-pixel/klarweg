/* EXAM_SINGLE_EXAMINER (owner decision 2026-11-06): one examiner may give both rating rounds. Off by default (OD-13: two
   different raters); when on, both rounds by the same person are accepted, each round still only once, and the result,
   the criterion feedback and the rater view say so. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, newUser, role } from './harness.mjs';
import { start, submit, answerObjective, runHoeren, runSchreiben, runSprechen, complete } from './flow.mjs';
import { ratingRound } from '../../exam/js/rating.js';
import { resultPage, ratedFeedback, SAME_EXAMINER_NOTE } from '../../exam/js/render.js';

async function finishedAttempt(vars = {}) {
  const s = await setup({ flags: vars });
  await start(s, 'lesen'); await answerObjective(s, 'lesen'); await submit(s, 'lesen');
  await runHoeren(s, (it, k) => k.correct); await submit(s, 'hoeren');
  await runSchreiben(s); await submit(s, 'schreiben');
  await runSprechen(s); await submit(s, 'sprechen');
  await complete(s);
  return s;
}
const productive = (s, user) => call(s.env, 'GET', `/exam/v1/admin/attempts/${s.attempt}/productive`, { user });
const rate = (s, user, body) => call(s.env, 'POST', '/exam/v1/admin/ratings', { user, body: { attempt_id: s.attempt, ...body } });
const allBands = (u, band = 'B') => Object.fromEntries(Object.keys(u.criteria).map((c) => [c, band]));

test('SINGLE EXAMINER off (default): the same rater cannot give round 2', async () => {
  const s = await finishedAttempt();
  const r1 = newUser(); await role(s.env, r1, 'rater');
  const d = (await productive(s, r1)).json;
  assert.equal(d.single_examiner, false);
  const u = d.units[0];
  assert.equal((await rate(s, r1, { item_id: u.item_id, round: 1, bands: allBands(u) })).status, 200);
  assert.equal((await rate(s, r1, { item_id: u.item_id, round: 2, bands: allBands(u) })).json.error, 'rater_not_independent');
});

test('SINGLE EXAMINER on: one examiner rates rounds 1 and 2; each round once; result and feedback say "same examiner"', async () => {
  const s = await finishedAttempt({ EXAM_SINGLE_EXAMINER: 'on' });
  const ex = newUser(); await role(s.env, ex, 'rater');
  let d = (await productive(s, ex)).json;
  assert.equal(d.single_examiner, true);
  assert.equal(ratingRound(d, 'schreiben'), 1);
  for (const u of d.units) assert.equal((await rate(s, ex, { item_id: u.item_id, round: 1, bands: allBands(u, 'B') })).status, 200);
  d = (await productive(s, ex)).json;
  assert.equal(ratingRound(d, 'schreiben'), 2, 'the rater view moves the same examiner on to round 2');
  assert.equal(/"aussprache":"B"|bands_json/.test(JSON.stringify(d)), false, 'round 1 bands are not shown in round 2 (blind)');
  assert.equal((await rate(s, ex, { item_id: d.units[0].item_id, round: 1, bands: allBands(d.units[0]) })).json.error, 'already_rated');
  for (const u of d.units) { const x = await rate(s, ex, { item_id: u.item_id, round: 2, bands: allBands(u, 'C') }); assert.equal(x.status, 200, JSON.stringify(x.json)); }
  const res = (await call(s.env, 'GET', `/exam/v1/attempts/${s.attempt}/result`, { user: s.user })).json.result;
  const by = Object.fromEntries(res.modules.map((m) => [m.module, m]));
  for (const m of ['schreiben', 'sprechen']) { assert.equal(by[m].status, 'final'); assert.equal(by[m].same_examiner, true); assert.equal(by[m].note, SAME_EXAMINER_NOTE); }
  assert.equal(by.lesen.same_examiner, undefined);
  assert.ok(resultPage(res).includes('derselben zertifizierten Prüfperson'));
  const fb = await call(s.env, 'GET', `/exam/v1/attempts/${s.attempt}/modules/schreiben/feedback`, { user: s.user });
  assert.equal(fb.status, 200, JSON.stringify(fb.json));
  assert.equal(fb.json.same_examiner, true);
  const html = ratedFeedback('schreiben', fb.json);
  assert.ok(html.includes('derselben zertifizierten Prüfperson') && !html.includes('Mittelwert aus zwei unabhängigen Bewertungen'));
});

test('SINGLE EXAMINER on, two different raters: nothing claims "same examiner"', async () => {
  const s = await finishedAttempt({ EXAM_SINGLE_EXAMINER: 'on' });
  const r1 = newUser(), r2 = newUser(); await role(s.env, r1, 'rater'); await role(s.env, r2, 'rater');
  const d = (await productive(s, r1)).json;
  for (const u of d.units) assert.equal((await rate(s, r1, { item_id: u.item_id, round: 1, bands: allBands(u) })).status, 200);
  for (const u of d.units) assert.equal((await rate(s, r2, { item_id: u.item_id, round: 2, bands: allBands(u) })).status, 200);
  const res = (await call(s.env, 'GET', `/exam/v1/attempts/${s.attempt}/result`, { user: s.user })).json.result;
  assert.ok(res.modules.every((m) => !m.same_examiner));
  assert.ok(!resultPage(res).includes('derselben'));
});
