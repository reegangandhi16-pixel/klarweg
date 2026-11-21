/* ITEM REVIEW after submission (SCORING §6 items[], OS §23.1; OD-48: keys never in the browser before submission).
   GET /exam/v1/attempts/<id>/modules/<module>/review — owner only, objective modules only, after THAT module is submitted. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, newUser, role, pkgFor, keysFor } from './harness.mjs';
import { A, start, submit, answerObjective, runHoeren } from './flow.mjs';

const review = (s, module, user = s.user) => call(s.env, 'GET', A(s, `/modules/${module}/review`), { user });

test('REVIEW: no key before submission; after submitting Lesen exactly the server truth — numbers, answers, keys, status, points', async () => {
  const s = await setup();
  const keys = keysFor(s.build);
  // before the module starts, and while it is running: refused, and no key-shaped data in the refusal
  let r = await review(s, 'lesen');
  assert.equal(r.status, 409); assert.equal(r.json.error, 'review_not_available');
  await start(s, 'lesen');
  r = await review(s, 'lesen');
  assert.equal(r.status, 409); assert.equal(r.json.error, 'review_not_available');
  assert.equal(/correct/.test(JSON.stringify(r.json)), false, 'nothing about the key while running');
  // the running package itself carries no key either (existing contract, re-asserted here)
  assert.equal(/"correct"/.test(JSON.stringify(pkgFor(s.build, 'lesen'))), false);

  // answer: items 1–10 correct, 11–20 wrong (the other option), 21–30 unanswered
  const pick = (it, k) => { const n = Number(it.display_no); if (n <= 10) return k.correct; if (n <= 20) return (it.options || []).find((o) => o.option_id !== k.correct).option_id; return undefined; };
  await answerObjective(s, 'lesen', pick);
  r = await review(s, 'lesen');
  assert.equal(r.status, 409, 'still running: no review');
  await submit(s, 'lesen');

  r = await review(s, 'lesen');
  assert.equal(r.status, 200, JSON.stringify(r.json));
  const items = r.json.items;
  assert.equal(items.length, 30, 'scored items only (examples excluded)');
  assert.deepEqual(items.map((i) => i.display_no), Array.from({ length: 30 }, (_, i) => String(i + 1)), 'exam-wide numbers, not restarting per part');
  assert.deepEqual([...new Set(items.map((i) => i.part))], [1, 2, 3, 4, 5]);
  for (const it of items) {
    const n = Number(it.display_no), k = keys[it.item_id];
    assert.equal(it.correct_answer.option_id, k.correct, `${it.display_no}: correct answer is the server key`);
    if (n <= 10) { assert.equal(it.status, 'correct'); assert.equal(it.your_answer.option_id, k.correct); assert.equal(it.points, 1); }
    else if (n <= 20) { assert.equal(it.status, 'incorrect'); assert.notEqual(it.your_answer.option_id, k.correct); assert.equal(it.points, 0); }
    else { assert.equal(it.status, 'unanswered'); assert.equal(it.your_answer, null); assert.equal(it.points, 0); }
    assert.equal(it.max_points, 1);
    assert.ok(it.correct_answer.label, 'answers carry the label shown in the test');
  }
  assert.deepEqual(r.json.summary, { correct: 10, incorrect: 10, unanswered: 10, total: 30 });

  // the module score agrees with the review (one source of truth)
  const ms = await s.env.DB.prepare("SELECT raw, rule_flags_json FROM module_scores WHERE attempt_id = ?1 AND module = 'lesen'").bind(s.attempt).first();
  assert.ok(ms, 'the module is scored at submission'); assert.equal(ms.raw, 10);
  assert.deepEqual(JSON.parse(ms.rule_flags_json), { correct: 10, incorrect: 10, unanswered: 10 });

  // Hören is still locked/unsubmitted: refused; Schreiben is not objective: refused
  r = await review(s, 'hoeren'); assert.equal(r.status, 409);
  r = await review(s, 'schreiben'); assert.equal(r.status, 422); assert.equal(r.json.error, 'review_not_available');
});

test('REVIEW: only the owner — another learner, a rater and an unauthenticated caller get nothing; Hören numbering keeps its gaps', async () => {
  const s = await setup();
  await start(s, 'lesen'); await answerObjective(s, 'lesen'); await submit(s, 'lesen');
  const other = newUser();
  let r = await review(s, 'lesen', other);
  assert.equal(r.status, 404, 'a foreign attempt is indistinguishable from a missing one'); assert.equal(/correct/.test(JSON.stringify(r.json)), false);
  const rater = newUser(); await role(s.env, rater, 'rater');
  r = await review(s, 'lesen', rater);
  assert.equal(r.status, 404, 'raters do not get learner answer reviews');
  r = await call(s.env, 'GET', A(s, '/modules/lesen/review'), {});
  assert.ok(r.status === 401 || r.status === 403, `unauthenticated → ${r.status}`);
  r = await call(s.env, 'GET', A(s, '/modules/lesen/review'), { user: s.user, proxyAuth: 'wrong-secret-0123456789abcdef0123' });
  assert.ok(r.status === 401 || r.status === 403, `without the proxy secret → ${r.status}`);

  await runHoeren(s, (it, k) => k.correct);
  await submit(s, 'hoeren');
  r = await review(s, 'hoeren');
  assert.equal(r.status, 200);
  const nos = r.json.items.map((i) => i.display_no);
  assert.equal(nos.includes('01') || nos.includes('02'), false, 'Hören examples (01, 02) are not reviewed');
  assert.deepEqual(nos, Array.from({ length: 30 }, (_, i) => String(i + 1)));
  assert.equal(r.json.summary.correct, 30);
});
