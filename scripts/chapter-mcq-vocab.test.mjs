// Regression guards for the 2026-11-01 chapter audit fixes:
//  - multiple-choice options are shown in a shuffled order (the authored data
//    puts the correct answer first or second in most items), scoring keeps the
//    authored indices, and no explanation refers to an option by position;
//  - long vocabulary lists open capped with "Show all N words", and the search
//    placeholder uses the real word count;
//  - every gap exercise has a real answer (B2·20 had an empty one).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = fs.readFileSync(path.join(ROOT, 'chapter/chapter-app.js'), 'utf8');

function chapters() {
  const dir = path.join(ROOT, 'chapter');
  return fs.readdirSync(dir).filter((f) => /^chapter-.*-data\.js$/.test(f)).map((f) => {
    const ctx = { window: {} }; ctx.self = ctx.window;
    vm.runInNewContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx);
    return [f, Object.values(ctx.window).find((v) => v && v.sections)];
  }).filter(([, C]) => C);
}
function mcqs(C) {
  return [
    ...(C.quiz || []).map((q, i) => ['quiz ' + i, q]),
    ...(C.exercises && C.exercises.mcq ? [['exercises.mcq', C.exercises.mcq]] : []),
    ...((C.listening && C.listening.questions) || []).map((q, i) => ['listening ' + i, q]),
    ...(C.vocabularyReview || []).map((q, i) => ['vocabularyReview ' + i, q]),
  ].filter(([, q]) => q && Array.isArray(q.options));
}

test('MCQ renderers shuffle the display order and keep authored indices', () => {
  assert.match(APP, /function shuffledOrder\(n\) \{/);
  // mcqBlock (exercises, listening, review cards) and the quiz both use it
  assert.equal((APP.match(/shuffledOrder\(q\.options\.length\)\.forEach\(\(oi, pos\) => \{/g) || []).length, 2);
  // letters follow the on-screen position; the correct option is found by its authored index
  assert.equal((APP.match(/String\.fromCharCode\(65 \+ pos\)/g) || []).length, 2);
  assert.doesNotMatch(APP, /opts\.children\[q\.answer\]/);
  assert.equal((APP.match(/opts\.querySelector\('\[data-oi="' \+ q\.answer \+ '"\]'\)/g) || []).length, 2);
  // the AI quiz review still receives the authored index
  assert.match(APP, /chosen\[idx\] = oi;/);
});

test('no MCQ explanation or question refers to an option by its position', () => {
  const re = /\b(option|answer|choice)\s+[A-D]\b|\(([A-D])\)|\b[A-D] is (correct|right|wrong)\b|\b(first|second|third|fourth|last) (option|answer|choice)\b|\bletter [A-D]\b/i;
  const bad = [];
  for (const [f, C] of chapters()) for (const [k, q] of mcqs(C)) if (re.test((q.explain || '') + ' ' + q.q)) bad.push(f + ' ' + k);
  assert.deepEqual(bad, []);
});

test('every MCQ answer index points at an option', () => {
  const bad = [];
  for (const [f, C] of chapters()) for (const [k, q] of mcqs(C)) if (!(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length)) bad.push(f + ' ' + k);
  assert.deepEqual(bad, []);
});

test('every gap exercise has a non-empty answer', () => {
  const bad = [];
  for (const [f, C] of chapters()) {
    const g = C.exercises && C.exercises.gap; if (!g) continue;
    (g.gaps || []).forEach((x, i) => { if (!x || !String(x.answer || '').trim() || (x.accepts || []).some((a) => !String(a).trim())) bad.push(f + ' gap ' + i); });
  }
  assert.deepEqual(bad, []);
});

test('vocabulary: real word count in the search box; long lists open capped with Show all', () => {
  assert.doesNotMatch(APP, /Search 12 words/);
  assert.match(APP, /placeholder: 'Search ' \+ C\.vocab\.length \+/);
  assert.match(APP, /const VOCAB_FIRST = 24;/);
  assert.match(APP, /const capped = !vocabExpanded && list\.length > VOCAB_FIRST \+ 8;/);
  assert.match(APP, /'Show all ' \+ list\.length \+ ' words'/);
  assert.match(APP, /'aria-expanded': capped \? 'false' : 'true'/);
});
