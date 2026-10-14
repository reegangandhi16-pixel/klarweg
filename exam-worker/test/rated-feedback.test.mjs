/* Rated feedback for Schreiben/Sprechen (SCORING §6): GET /attempts/<id>/modules/<module>/feedback — owner only, only
   when the module is FINAL; per task and criterion the mean of the two counted ratings, consistent with the final
   score; never a rater id, an individual band or an individual rater's total. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, newUser, role, pkgFor } from './harness.mjs';
import { A, start, submit, answerObjective, runHoeren, runSchreiben, runSprechen, complete } from './flow.mjs';

const fb = (s, module, user = s.user) => call(s.env, 'GET', A(s, `/modules/${module}/feedback`), { user });
const rate = (s, user, item_id, round, bands) => call(s.env, 'POST', '/exam/v1/admin/ratings', { user, body: { attempt_id: s.attempt, item_id, round, bands } });

test('RATED FEEDBACK: refused until final and to anyone but the owner; means per criterion add up to the final score', async () => {
  const s = await setup();
  await start(s, 'lesen'); await answerObjective(s, 'lesen'); await submit(s, 'lesen');
  await runHoeren(s, (it, k) => k.correct); await submit(s, 'hoeren');
  await runSchreiben(s); await submit(s, 'schreiben');
  await runSprechen(s); await submit(s, 'sprechen');
  await complete(s);
  const r1 = newUser(), r2 = newUser(); await role(s.env, r1, 'rater'); await role(s.env, r2, 'rater');
  const ws = pkgFor(s.build, 'schreiben').rubric_structure;
  const wItems = (await s.env.DB.prepare("SELECT item_id, rubric_id FROM items_index WHERE form_id = (SELECT form_id FROM attempts WHERE id = ?1) AND module = 'schreiben' AND rubric_id IS NOT NULL ORDER BY part").bind(s.attempt).all()).results;
  const bandsFor = (rub, b) => Object.fromEntries(ws[rub].criteria.map((c) => [c, typeof b === 'function' ? b(c) : b]));

  let r = await fb(s, 'schreiben');
  assert.equal(r.status, 409, 'not before any rating'); assert.equal(r.json.error, 'feedback_not_available');
  // round 1: A everywhere, except Teil 3 gets Erfüllung E (zero rule) from rater 1
  for (const it of wItems) assert.equal((await rate(s, r1, it.item_id, 1, bandsFor(it.rubric_id, (c) => (it.item_id === wItems[2].item_id && c === 'erfuellung' ? 'E' : 'A')))).status, 200);
  r = await fb(s, 'schreiben');
  assert.equal(r.status, 409, 'not with one rating: no individual rater result leaks'); assert.equal(/"total"|"criteria"/.test(r.buf.toString('utf8')), false);
  // round 2: B for Teil 1 and 2, A for Teil 3 → totals 80 and 80, an integer mean, so Schreiben becomes final
  for (const it of wItems) assert.equal((await rate(s, r2, it.item_id, 2, bandsFor(it.rubric_id, it.item_id === wItems[2].item_id ? 'A' : 'B'))).status, 200);

  const score = await s.env.DB.prepare("SELECT status, points FROM module_scores WHERE attempt_id = ?1 AND module = 'schreiben'").bind(s.attempt).first();
  r = await fb(s, 'schreiben');
  assert.equal(score.status, 'final', 'these bands give an integer mean, so Schreiben is final');
  assert.equal(r.status, 200);
  assert.equal(r.json.points, score.points);
  for (const u of r.json.units) assert.equal(u.criteria.reduce((n, c) => n + c.points, 0), u.total, `${u.item_id}: criteria add up to the task mean`);
  const t1 = r.json.units.find((u) => u.item_id === wItems[0].item_id);
  assert.deepEqual(t1.criteria.map((c) => [c.criterion, c.points, c.max]), ws[wItems[0].rubric_id].criteria.map((c) => [c, 8.75, 10]), 'mean of A (10) and B (7.5)');
  const t3 = r.json.units.find((u) => u.item_id === wItems[2].item_id);
  assert.equal(t3.zero_rule, true); assert.ok(t3.criteria.every((c) => c.points === c.max / 2), 'mean of the zero-rule rating (0 for every criterion) and A');
  assert.ok(typeof t1.text === 'string' && t1.words > 0, 'the learner sees their own text');
  const raw = r.buf.toString('utf8');
  assert.equal(raw.includes(r1) || raw.includes(r2) || /"band|"bands|rater|"round/.test(raw), false, 'no rater identity, bands or rounds');

  // owner only; objective modules have no criterion feedback
  for (const u of [newUser(), r1]) { r = await fb(s, 'schreiben', u); assert.equal(r.status, 404); }
  r = await call(s.env, 'GET', A(s, '/modules/schreiben/feedback'), {}); assert.ok(r.status === 401 || r.status === 403);
  r = await fb(s, 'lesen'); assert.equal(r.status, 422);

  // Sprechen: all four units including Aussprache once final
  const ss = pkgFor(s.build, 'sprechen').rubric_structure;
  const sp = [['itm:b1:syn-sp1', 'p1'], ['itm:b1:syn-sp2', 'p2'], ['itm:b1:syn-sp3', 'p3'], ['sprechen:pron', 'pron']];
  for (const [rater, round] of [[r1, 1], [r2, 2]]) for (const [id, rub] of sp) {
    assert.equal((await rate(s, rater, id, round, Object.fromEntries(ss[`rub:b1:sprechen:${rub}@1`].criteria.map((c) => [c, 'A'])))).status, 200);
  }
  r = await fb(s, 'sprechen');
  assert.equal(r.status, 200);
  assert.deepEqual(r.json.units.map((u) => [u.item_id, u.part]), [['itm:b1:syn-sp1', 1], ['itm:b1:syn-sp2', 2], ['itm:b1:syn-sp3', 3], ['sprechen:pron', null]]);
  assert.ok(r.json.units.every((u) => u.total === u.max && u.text === undefined));
});
