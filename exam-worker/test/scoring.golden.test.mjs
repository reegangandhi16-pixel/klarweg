/* SCORING — golden tests for the pure scoring engine (src/scoring.js). */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './harness.mjs';
import {
  roundHalfUp, objectiveRaw, convert, grade, scoreObjectiveModule, rubricTotal, rubricMax, scoreRubricModule, rubricUnits
} from '../src/scoring.js';

const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'exam-content/levels/b1/level-config.json'), 'utf8'));
const mc = (m) => cfg.modules.find((x) => x.module === m);
const table = cfg.objective_tables.b1_30_to_100;

/* Official B1 table (Durchführungsbestimmungen §4.1–4.2) — independent golden copy. */
const GOLDEN = [0, 3, 7, 10, 13, 17, 20, 23, 27, 30, 33, 37, 40, 43, 47, 50, 53, 57, 60, 63, 67, 70, 73, 77, 80, 83, 87, 90, 93, 97, 100];

test('SCORING conversion: all 31 raw scores map to the official table', () => {
  for (let raw = 0; raw <= 30; raw++) assert.equal(convert(table, raw), GOLDEN[raw], `raw ${raw}`);
  assert.throws(() => convert(table, 31));
  assert.throws(() => convert(table, -1));
  assert.throws(() => convert(table, 1.5));
});

test('SCORING pass/fail boundary: 18 raw → 60 pass, 17 raw → 57 fail', () => {
  assert.deepEqual(grade(cfg, convert(table, 18)), { pass: true, predikat: 'ausreichend' });
  assert.deepEqual(grade(cfg, convert(table, 17)), { pass: false, predikat: 'nicht bestanden' });
  assert.equal(grade(cfg, 90).predikat, 'sehr gut');
  assert.equal(grade(cfg, 89).predikat, 'gut');
  assert.equal(grade(cfg, 70).predikat, 'befriedigend');
  assert.deepEqual(grade(cfg, null), { pass: null, predikat: null });
});

const items = Array.from({ length: 30 }, (_, i) => ({ item_id: `i${i}`, points: 1 })).concat([{ item_id: 'ex', points: 0 }]);
const keys = Object.fromEntries(items.map((it, i) => [it.item_id, { kind: 'single', correct: i % 2 ? 'a' : 'b' }]));

test('SCORING correct / incorrect / unanswered counting; examples never score', () => {
  const resp = {};
  items.forEach((it, i) => {
    if (i < 20) resp[it.item_id] = { option_id: keys[it.item_id].correct };          // 20 correct (+ example)
    else if (i < 25) resp[it.item_id] = { option_id: 'z' };                         // 5 incorrect
    else if (i < 27) resp[it.item_id] = { option_id: null };                        // 2 cleared → unanswered
  });                                                                                // 3 never answered
  resp.ex = { option_id: 'b' };
  assert.deepEqual(objectiveRaw(items, keys, resp), { raw: 20, correct: 20, incorrect: 5, unanswered: 5, scored_items: 30 });
});

test('SCORING objective module: all correct = 100, nothing answered = 0, partial = table value', () => {
  const all = Object.fromEntries(items.map((it) => [it.item_id, { option_id: keys[it.item_id].correct }]));
  assert.equal(scoreObjectiveModule(cfg, mc('lesen'), items, keys, all).points, 100);
  const none = scoreObjectiveModule(cfg, mc('lesen'), items, keys, {});
  assert.equal(none.points, 0); assert.equal(none.pass, false); assert.equal(none.rule_flags.unanswered, 30);
  const partial = Object.fromEntries(items.slice(0, 18).map((it) => [it.item_id, { option_id: keys[it.item_id].correct }]));
  const p = scoreObjectiveModule(cfg, mc('hoeren'), items, keys, partial);
  assert.equal(p.points, 60); assert.equal(p.pass, true); assert.equal(p.status, 'final');
});

test('SCORING matching "0" (no suitable ad) is an ordinary option and can be the key', () => {
  const k = { m: { kind: 'single', correct: '0' } };
  assert.equal(objectiveRaw([{ item_id: 'm', points: 1 }], k, { m: { option_id: '0' } }).correct, 1);
  assert.equal(objectiveRaw([{ item_id: 'm', points: 1 }], k, { m: { option_id: 'a' } }).incorrect, 1);
});

test('SCORING objective module refuses a form whose scored-item count disagrees with the table', () => {
  assert.throws(() => scoreObjectiveModule(cfg, mc('lesen'), items.slice(0, 29), keys, {}), /table expects 30/);
});

test('SCORING half-up rounding (official Sprechen §5)', () => {
  assert.equal(roundHalfUp(59.5), 60);
  assert.equal(roundHalfUp(59.49), 59);
  assert.equal(roundHalfUp(0.5), 1);
  assert.equal(roundHalfUp(72.25), 72);
  assert.equal(roundHalfUp(72.75), 73);
  assert.equal(roundHalfUp(0.1 + 0.2 + 59.2), 60);   // float noise: 59.5000…1
});

test('SCORING rubric maxima: Schreiben 40+40+20 = 100, Sprechen 28+40+16+16 = 100', () => {
  const w = ['p1', 'p2', 'p3'].map((p) => rubricMax(cfg.rubrics[`rub:b1:schreiben:${p}@1`]));
  assert.deepEqual(w, [40, 40, 20]);
  const s = ['p1', 'p2', 'p3', 'pron'].map((p) => rubricMax(cfg.rubrics[`rub:b1:sprechen:${p}@1`]));
  assert.deepEqual(s, [28, 40, 16, 16]);
  assert.equal(cfg.rubrics['rub:b1:sprechen:pron@1'].ai_allowed, false);
});

test('SCORING rubric total + zero rule (Erfüllung E → 0) + invalid bands', () => {
  const r = cfg.rubrics['rub:b1:schreiben:p1@1'];
  assert.equal(rubricTotal(r, { erfuellung: 'A', kohaerenz: 'B', wortschatz: 'C', strukturen: 'D' }).total, 10 + 7.5 + 5 + 2.5);
  const z = rubricTotal(r, { erfuellung: 'E', kohaerenz: 'A', wortschatz: 'A', strukturen: 'A' });
  assert.equal(z.total, 0); assert.equal(z.zero_rule_applied, true);
  assert.throws(() => rubricTotal(r, { erfuellung: 'A', kohaerenz: 'A', wortschatz: 'A' }));             // missing criterion
  assert.throws(() => rubricTotal(r, { erfuellung: 'F', kohaerenz: 'A', wortschatz: 'A', strukturen: 'A' }));
  assert.throws(() => rubricTotal(r, { erfuellung: 'A', kohaerenz: 'A', wortschatz: 'A', strukturen: 'A', extra: 'A' }));
});

const wUnits = rubricUnits(cfg, 'schreiben', [{ item_id: 's1', rubric_id: 'rub:b1:schreiben:p1@1' }, { item_id: 's2', rubric_id: 'rub:b1:schreiben:p2@1' }, { item_id: 's3', rubric_id: 'rub:b1:schreiben:p3@1' }]);
const sUnits = rubricUnits(cfg, 'sprechen', [{ item_id: 'p1', rubric_id: 'rub:b1:sprechen:p1@1' }, { item_id: 'p2', rubric_id: 'rub:b1:sprechen:p2@1' }, { item_id: 'p3', rubric_id: 'rub:b1:sprechen:p3@1' }, { item_id: 'topic', rubric_id: null }]);
const rate = (units, round, totals, kind = 'teacher') => units.map((u, i) => ({ item_id: u.item_id, rubric_id: u.rubric_id, round, rater_kind: kind, total: totals[i] }));

test('SCORING Sprechen units include Aussprache once; topic choice is not rated', () => {
  assert.deepEqual(sUnits.map((u) => u.item_id), ['p1', 'p2', 'p3', 'sprechen:pron']);
});

test('SCORING Sprechen: mean of two raters, half-up → final', () => {
  const s = scoreRubricModule(cfg, mc('sprechen'), sUnits, [...rate(sUnits, 1, [20, 30, 12, 12]), ...rate(sUnits, 2, [21, 30, 12, 12])]);   // 74 / 75 → 74.5
  assert.equal(s.status, 'final'); assert.equal(s.raw_unrounded, 74.5); assert.equal(s.points, 75); assert.equal(s.pass, true);
});

test('SCORING rubric module waits for both ratings; AI ratings never count', () => {
  const s = scoreRubricModule(cfg, mc('sprechen'), sUnits, [...rate(sUnits, 1, [20, 30, 12, 12]), ...rate(sUnits, 2, [20, 30, 12, 12], 'ai')]);
  assert.equal(s.status, 'pending_rating'); assert.equal(s.points, null);
  assert.deepEqual(s.rule_flags.awaiting_ratings, ['p1', 'p2', 'p3', 'sprechen:pron']);
});

test('SCORING Schreiben: integer mean is final; fractional mean stays pending_rule with raw stored (rounding unresolved)', () => {
  const fin = scoreRubricModule(cfg, mc('schreiben'), wUnits, [...rate(wUnits, 1, [30, 30, 10]), ...rate(wUnits, 2, [32.5, 27.5, 10])]);
  assert.equal(fin.status, 'final'); assert.equal(fin.points, 70);
  const pend = scoreRubricModule(cfg, mc('schreiben'), wUnits, [...rate(wUnits, 1, [30, 30, 10]), ...rate(wUnits, 2, [30, 27.5, 10])]);
  assert.equal(pend.status, 'pending_rule'); assert.equal(pend.points, null); assert.equal(pend.raw_unrounded, 68.75);
  assert.equal(pend.rule_flags.unresolved, 'rounding');
});

test('SCORING Schreiben third-rating trigger: one below / one at-or-above pass and mean below pass', () => {
  const r12 = [...rate(wUnits, 1, [25, 25, 7.5]), ...rate(wUnits, 2, [30, 25, 5])];   // 57.5 / 60 → mean 58.75
  const s = scoreRubricModule(cfg, mc('schreiben'), wUnits, r12);
  assert.equal(s.status, 'pending_rating'); assert.equal(s.rule_flags.third_rating_required, true);
  const s3 = scoreRubricModule(cfg, mc('schreiben'), wUnits, [...r12, ...rate(wUnits, 3, [30, 30, 10], 'lead')]);
  assert.equal(s3.status, 'pending_rule'); assert.equal(s3.rule_flags.unresolved, 'third_rating_combination'); assert.equal(s3.rule_flags.third_rater_total, 70);
  // not triggered: both below pass
  const both = scoreRubricModule(cfg, mc('schreiben'), wUnits, [...rate(wUnits, 1, [20, 20, 10]), ...rate(wUnits, 2, [25, 20, 5])]);
  assert.notEqual(both.rule_flags.third_rating_required, true);
  // not triggered: mean at/above pass
  const above = scoreRubricModule(cfg, mc('schreiben'), wUnits, [...rate(wUnits, 1, [25, 25, 7.5]), ...rate(wUnits, 2, [30, 27.5, 7.5])]);
  assert.notEqual(above.rule_flags.third_rating_required, true);
});

test('SCORING unresolved rules are configurable: rounding half_up / third_replaces_lower resolve to final', () => {
  const resolved = { ...mc('schreiben'), scoring: { ...mc('schreiben').scoring, rounding: 'half_up', third_rating: { ...mc('schreiben').scoring.third_rating, combination: 'third_replaces_lower' } } };
  const a = scoreRubricModule(cfg, resolved, wUnits, [...rate(wUnits, 1, [30, 30, 10]), ...rate(wUnits, 2, [30, 27.5, 10])]);
  assert.equal(a.status, 'final'); assert.equal(a.points, 69);
  const r12 = [...rate(wUnits, 1, [25, 25, 7.5]), ...rate(wUnits, 2, [30, 25, 5])];
  const b = scoreRubricModule(cfg, resolved, wUnits, [...r12, ...rate(wUnits, 3, [30, 30, 10], 'lead')]);
  assert.equal(b.status, 'final'); assert.equal(b.points, 65);   // (60 + 70) / 2
});
