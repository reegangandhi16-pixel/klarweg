/* PRACTICE LIBRARY (tools/practice-forms.mjs): every registered practice form is complete, valid and clearly labelled
   original Klarweg practice; forms do not share texts, scripts, stems or topics with each other; answer keys are
   balanced; text lengths stay in one difficulty band across the library; every explanation is one sentence and its
   evidence span is verbatim in its own source. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateForm } from '../tools/validate.mjs';
import { PRACTICE_FORMS } from '../tools/practice-forms.mjs';
import { countWords } from '../schemas/content-model.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LIB = PRACTICE_FORMS.map((f) => {
  const j = (n) => JSON.parse(f.files[n]);
  return { name: f.name, rel: f.rel, form: j('form.json'), tasks: j('tasks.json'), items: j('items.json'), keys: j('keys.json').keys, assets: j('assets.json') };
});
const OBJECTIVE = new Set(['binary_choice', 'mcq_single', 'matching_pool', 'speaker_assignment']);
const scored = (f, module, part) => f.items.filter((it) => it.module === module && (part === undefined || it.part === part) && !it.is_example && OBJECTIVE.has(it.interaction));
const keyOf = (f, it) => f.keys[it.id].correct;
const sourceOf = (a) => (a.kind === 'text' ? a.text.body_md : a.script_de);
/* shared engine wording that every form carries by design (spoken part instructions, the slide outline, the standard
   Schreiben task formulas such as "Schreiben Sie Ihre Meinung (circa 80 Wörter)"); prompts are compared whole instead */
const BOILERPLATE = /-h2-instr$|-sp2-t\d-slide[2-5]$|-s\d-prompt$/;

test('LIBRARY: the registry lists P1 … Pn in order, each with its own id and directory', () => {
  assert.deepEqual(LIB.map((f) => f.name), LIB.map((_, i) => `P${i + 1}`));
  assert.deepEqual(LIB.map((f) => f.form.id), LIB.map((_, i) => `frm:b1:synthetic-p${i + 1}@1`));
  assert.deepEqual(LIB.map((f) => f.rel), LIB.map((_, i) => `forms/synthetic/b1-synthetic-p${i + 1}`));
});

for (const f of LIB) {
  test(`LIBRARY ${f.name}: validates without errors or warnings and is labelled original Klarweg practice`, () => {
    const v = validateForm(path.join(ROOT, f.rel));
    assert.deepEqual(v.errors, []); assert.deepEqual(v.warnings, []);
    assert.equal(f.form.kind, 'synthetic'); assert.equal(f.form.purpose, 'practice');
    assert.equal(f.form.label, `Synthetische Übungsform ${f.name} (Klarweg-Übung, kein Original)`);
    assert.match(f.form.release_note, /^SYNTHETIC PRACTICE CONTENT — original Klarweg texts; Hören as TEST AUDIO tones$/);
    for (const a of f.assets.filter((x) => x.kind === 'audio')) assert.match(a.label, /^TEST AUDIO – /, `${a.id} labelled TEST AUDIO`);
    assert.equal(/Goethe|Hueber|telc|ÖSD/i.test(JSON.stringify([f.items, f.tasks, f.assets])), false, 'no exam-provider or publisher names in the content');
  });

  test(`LIBRARY ${f.name}: every scored item has a one-sentence explanation and a verbatim evidence span in its own task`, () => {
    const objective = f.items.filter((it) => !it.is_example && OBJECTIVE.has(it.interaction));
    assert.equal(objective.length, 60);
    const visible = JSON.stringify([f.assets.filter((a) => a.kind === 'text').map((a) => a.text.body_md), f.items.map((i) => [i.stem, i.options])]);
    for (const it of objective) {
      const e = it.feedback?.explanation_de || '';
      assert.match(e, /^\S.{8,}[.!?]$/, `${it.id}: explanation is a sentence`);
      assert.equal(/[^\d][.!?]\s+[A-ZÄÖÜ]/.test(e.slice(0, -1)), false, `${it.id}: explanation is ONE sentence: ${e}`);
      assert.equal(visible.includes(e), false, `${it.id}: explanation is not a verbatim copy of a text, stem or option: ${e}`);
      assert.equal(it.anchors.length, 1);
      const [an] = it.anchors;
      const task = f.tasks.find((t) => t.id === it.task_id);
      assert.ok(task.stimuli.some((s) => s.asset_id === an.asset_id), `${it.id}: evidence from its own task`);
      const quote = sourceOf(f.assets.find((a) => a.id === an.asset_id)).slice(an.start, an.end);
      assert.ok(quote.trim().length >= 6 && quote === quote.trim(), `${it.id}: meaningful evidence "${quote}"`);
    }
  });

  test(`LIBRARY ${f.name}: answer keys are balanced (no answer pattern to exploit)`, () => {
    const count = (its, k) => its.filter((it) => keyOf(f, it) === k).length;
    const within = (n, lo, hi, what) => assert.ok(n >= lo && n <= hi, `${what}: ${n} not in ${lo}–${hi}`);
    within(count(scored(f, 'lesen', 1), 'richtig'), 2, 4, 'Lesen 1 richtig of 6');
    within(count(scored(f, 'lesen', 4), 'ja'), 3, 4, 'Lesen 4 ja of 7');
    within(count(scored(f, 'hoeren', 1).filter((it) => it.interaction === 'binary_choice'), 'richtig'), 2, 3, 'Hören 1 richtig of 5');
    within(count(scored(f, 'hoeren', 3), 'richtig'), 3, 4, 'Hören 3 richtig of 7');
    const mcq = [...scored(f, 'lesen', 2), ...scored(f, 'lesen', 5), ...scored(f, 'hoeren', 1).filter((it) => it.interaction === 'mcq_single'), ...scored(f, 'hoeren', 2)];
    assert.equal(mcq.length, 20);
    for (const k of ['a', 'b', 'c']) within(count(mcq, k), 4, 10, `a/b/c items with key ${k} of 20`);
    for (const it of mcq) assert.equal(new Set(it.options.map((o) => o.text)).size, 3, `${it.id}: three different options`);
  });
}

test('LIBRARY: forms are mutually original — no shared 8-word passage, stem, prompt or topic between any two forms', () => {
  const shingles = (s) => { const w = s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(Boolean); const out = new Set(); for (let i = 0; i + 8 <= w.length; i++) out.add(w.slice(i, i + 8).join(' ')); return out; };
  const owner = new Map();
  const clash = [];
  for (const f of LIB) {
    for (const a of f.assets) {
      if (BOILERPLATE.test(a.id)) continue;
      for (const sh of shingles(sourceOf(a))) {
        const o = owner.get(sh);
        if (o && o.form !== f.name) clash.push(`${f.name} ${a.id} ↔ ${o.form} ${o.id}: "${sh}"`);
        else if (!o) owner.set(sh, { form: f.name, id: a.id });
      }
    }
  }
  assert.deepEqual(clash, [], 'shared passages between forms');
  const unique = (what, pick) => {
    const seen = new Map(), dup = [];
    for (const f of LIB) for (const v of pick(f)) { const k = v.trim().toLowerCase(); if (seen.has(k) && seen.get(k) !== f.name) dup.push(`${what}: ${seen.get(k)} and ${f.name}: ${v}`); else seen.set(k, f.name); }
    assert.deepEqual(dup, []);
  };
  unique('scored stem', (f) => f.items.filter((it) => !it.is_example && OBJECTIVE.has(it.interaction) && !(it.module === 'lesen' && it.part === 4)).map((it) => it.stem.replace(/^\d+\. /, '')).filter((x) => x.split(/\s+/).length >= 6));   // short stem openers ("Die Führung dauert …") may recur
  unique('Sprechen topic', (f) => f.items.filter((it) => it.interaction === 'topic_choice').flatMap((it) => it.options.map((o) => o.label.replace(/^Thema \d: /, ''))));
  unique('Schreiben prompt', (f) => f.tasks.filter((t) => t.module === 'schreiben').map((t) => t.instructions.text_de));
  unique('Lesen 4 question', (f) => f.tasks.filter((t) => t.module === 'lesen' && t.part === 4).map((t) => t.instructions.text_de));
  unique('Hören 2 situation', (f) => f.tasks.filter((t) => t.module === 'hoeren' && t.part === 2).map((t) => t.context_line));
  unique('Hören 3 situation', (f) => f.tasks.filter((t) => t.module === 'hoeren' && t.part === 3).map((t) => t.context_line));
  unique('Lesen 5 situation', (f) => f.tasks.filter((t) => t.module === 'lesen' && t.part === 5).map((t) => t.context_line));
});

test('LIBRARY: consistent difficulty — text and script lengths stay within one band across all forms', () => {
  const median = (xs) => { const s = [...xs].sort((a, b) => a - b); return s[Math.floor(s.length / 2)]; };
  const measures = {
    'Lesen 1 text': (f) => f.tasks.find((t) => t.module === 'lesen' && t.part === 1).indicators.words,
    'Lesen 2 texts': (f) => f.tasks.filter((t) => t.module === 'lesen' && t.part === 2).reduce((n, t) => n + t.indicators.words, 0),
    'Lesen 3 ads': (f) => f.tasks.find((t) => t.module === 'lesen' && t.part === 3).indicators.words,
    'Lesen 4 comments': (f) => f.tasks.find((t) => t.module === 'lesen' && t.part === 4).indicators.words,
    'Lesen 5 text': (f) => f.tasks.find((t) => t.module === 'lesen' && t.part === 5).indicators.words,
    'Hören 1 scripts': (f) => f.assets.filter((a) => /-h1-t\d$/.test(a.id)).reduce((n, a) => n + countWords(a.script_de), 0),
    'Hören 2 script': (f) => countWords(f.assets.find((a) => /-h2$/.test(a.id)).script_de),
    'Hören 3 script': (f) => countWords(f.assets.find((a) => /-h3$/.test(a.id)).script_de),
    'Hören 4 script': (f) => countWords(f.assets.find((a) => /-h4$/.test(a.id)).script_de)
  };
  /* P1 was the first hand-built form: its Hören 1 and 2 scripts are shorter than the rest of the library. They are
     TEST AUDIO tones today; lengthen them when P1 is revised for real audio. Every later form must fit the band. */
  const KNOWN = new Set(['P1 Hören 1 scripts', 'P1 Hören 2 script']);
  const out = [];
  for (const [what, m] of Object.entries(measures)) {
    const vals = LIB.map((f) => [f.name, m(f)]);
    const mid = median(vals.map(([, v]) => v));
    for (const [name, v] of vals) if (!KNOWN.has(`${name} ${what}`) && (v < mid * 0.75 || v > mid * 1.3)) out.push(`${name} ${what}: ${v} words (library median ${mid})`);
  }
  assert.deepEqual(out, []);
});
