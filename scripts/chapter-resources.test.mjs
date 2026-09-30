/* Regression tests for the chapter resource PDF system
   (scripts/generate-chapter-resources.mjs + scripts/chapter-resources/*). */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadAllChapters } from './chapter-resources/load.mjs';
import { listResources, DERIVED_RESOURCES, resourceFile, resourceTypeOf, parseId, stableShuffle, joinTokens, isWellFormedGap, esc, cssString } from './chapter-resources/common.mjs';
import { buildResource, vocabExamples, stackOptions, writingLines, WRITING, KEEP_TABLE_MAX_ROWS, stripChapterHint, CHAPTER_HINT } from './chapter-resources/templates.mjs';
import { planChapter, roleCssFrom, contentHash } from './chapter-resources/plan.mjs';
import { findChrome, launchChrome } from './chapter-resources/chrome-pdf.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const chapters = loadAllChapters(path.join(ROOT, 'chapter'));
const byId = new Map(chapters.map((C) => [C.id, C]));
const chapterCss = fs.readFileSync(path.join(ROOT, 'chapter', 'chapter.css'), 'utf8');
const ctx = { css: fs.readFileSync(path.join(ROOT, 'scripts', 'chapter-resources', 'resource.css'), 'utf8'), roleCss: roleCssFrom(chapterCss), siteBase: 'https://example.test/klarweg' };
const plans = new Map(chapters.map((C) => [C.id, planChapter(C, ctx)]));
const STANDARD = ['Vocabulary PDF', 'Homework PDF', 'Grammar Rules PDF'];
const isStandard = (C) => C.resources.length === 3 && C.resources.every((r, i) => r.title === STANDARD[i]);
const resource = (C, type) => listResources(C).find((r) => r.type === type);
const htmlOf = (id, type) => plans.get(id).resources[type].html;
const text = (h) => h.replace(/<style>[\s\S]*?<\/style>/, '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/\s+/g, ' ');

test('all 258 canonical chapters load with unique, well-formed ids', () => {
  assert.equal(chapters.length, 258);
  assert.equal(byId.size, 258);
  for (const C of chapters) assert.doesNotThrow(() => parseId(C.id), C.id);
});

test('standard chapters generate Vocabulary, Homework and Grammar Rules', () => {
  const std = chapters.filter(isStandard);
  assert.equal(std.length, 228);
  for (const C of std) {
    const types = Object.keys(plans.get(C.id).resources).sort();
    assert.deepEqual(types, ['grammar', 'homework', 'vocabulary'], C.id);
  }
});

test('special resource sets keep their authored types and titles', () => {
  const b2 = plans.get('b2-14-goethe-mini-test-1');
  assert.deepEqual(Object.keys(b2.resources).sort(), ['answer-key', 'revision-guide', 'scoring', 'test-paper']);
  assert.equal(b2.resources.scoring.title, 'Scoring Table PDF');
  assert.equal(plans.get('a1-2-vokale').resources.grammar.title, 'Sound Rules PDF');
  assert.ok(htmlOf('a1-2-vokale', 'grammar').includes('<h1>Sound Rules</h1>'));
  assert.ok(plans.get('a2-25-goethe-mini-3').resources['mock-test']);
  // personalised cards are never generated
  for (const [id, type] of [['c1-43-goethe-zertifikat-c1-final', 'certificate'], ['c2-20-goethe-mini-3', 'progress-dashboard']]) {
    assert.equal(plans.get(id).resources[type], undefined);
    assert.ok(plans.get(id).skipped.some((s) => s.type === type), id);
  }
  // every listed resource (authored + centrally derived) is generated or skipped with a reason
  for (const C of chapters) {
    const p = plans.get(C.id);
    assert.equal(Object.keys(p.resources).length + p.skipped.length, listResources(C).length, C.id);
  }
});

test('empty vocabulary is skipped cleanly; tiny vocab gives a short list', () => {
  const C = byId.get('b2-14-goethe-mini-test-1');
  assert.equal(C.vocab.length, 0);
  assert.equal(buildResource(C, { type: 'vocabulary', template: 'vocabulary', title: 'Vocabulary PDF' }, { ...ctx, chapterUrl: '' }), null);
  const small = byId.get('a1-41-dativpronomen');
  const h = htmlOf('a1-41-dativpronomen', 'vocabulary');
  assert.equal((h.match(/class="ventry"/g) || []).length, small.vocab.length);
});

test('internal "AI Tutor Empfehlungslogik" blocks never reach a PDF', () => {
  for (const [id, p] of plans) for (const [type, r] of Object.entries(p.resources)) {
    assert.ok(!/Empfehlungslogik/.test(r.html), `${id}/${type}`);
  }
});

test('articles use the semantic article colour; role colours come from chapter.css', () => {
  assert.match(htmlOf('a1-9-verben', 'vocabulary'), /<span class="de art r-article">das<\/span> <span class="de vde">Wochenende<\/span>/);
  assert.match(htmlOf('c2-02-verben-mit-praefixen', 'vocabulary'), /<span class="de art r-article">das<\/span> <span class="de vde">Abkommen<\/span>/);
  const token = (name) => new RegExp(`--g-${name}:\\s*([^;]+);`).exec(chapterCss)[1].trim();
  assert.ok(ctx.roleCss.includes(`--g-article: ${token('article')}`));
  assert.ok(ctx.roleCss.includes(`--g-verb: ${token('verb')}`));
  assert.match(ctx.roleCss, /\.r-article \{ color: var\(--g-article\); \}/);
  assert.ok(htmlOf('a1-9-verben', 'grammar').includes('class="de r-verb"'), 'authored role markup preserved');
});

test('resource URLs are deterministic and map chapter ids to their own files', () => {
  assert.equal(resourceFile('a1-9-verben', 'vocabulary'), 'pdfs/a1/a1-9-verben/vocabulary.pdf');
  assert.equal(resourceTypeOf({ pdfUrl: '/pdfs/grammar.pdf' }), 'grammar');
  const files = new Set();
  for (const [id, p] of plans) for (const [type, r] of Object.entries(p.resources)) {
    assert.equal(r.file, `pdfs/${parseId(id).level}/${id}/${type}.pdf`);
    assert.ok(!files.has(r.file), 'duplicate ' + r.file);
    files.add(r.file);
  }
  assert.equal(files.size, 777);   // 773 authored + 4 checkpoint Test Papers
});

test('planning is deterministic and hashes change only with content', () => {
  const C = byId.get('a1-9-verben');
  const a = planChapter(C, ctx), b = planChapter(C, ctx);
  assert.deepEqual(a, b);
  const edited = structuredClone(C);
  edited.vocab[0].en = 'to labour';
  const c = planChapter(edited, ctx);
  assert.notEqual(c.resources.vocabulary.contentHash, a.resources.vocabulary.contentHash);
  assert.equal(c.resources.grammar.contentHash, a.resources.grammar.contentHash);
  assert.equal(c.resources.homework.contentHash, a.resources.homework.contentHash);
  assert.equal(contentHash('x'), contentHash('x'));
});

test('HTML escaping is safe', () => {
  const C = { ...structuredClone(byId.get('a1-9-verben')), title: 'Evil </style><script>alert(1)</script>' };
  C.vocab[0].de = '<img src=x onerror=alert(1)>';
  const { html } = planChapter(C, ctx).resources.vocabulary;
  assert.ok(!html.includes('<script>alert(1)'));
  assert.ok(!html.includes('<img src=x'));
  assert.ok(!/<\/style><script>/.test(html));
  assert.equal(esc('<a href="x">'), '&lt;a href=&quot;x&quot;&gt;');
  assert.ok(!cssString('a"</style>').includes('<'));
});

test('no authored content is invented or dropped', () => {
  for (const C of chapters) {
    const p = plans.get(C.id);
    if (p.resources.vocabulary) {
      const h = p.resources.vocabulary.html;
      assert.equal((h.match(/class="ventry"/g) || []).length, C.vocab.filter((v) => v && v.de).length, C.id);
    }
    if (p.resources.grammar) {
      const blocks = C.grammar.filter((g) => !/^AI Tutor\b/i.test(g.title));
      const t = text(p.resources.grammar.html);
      assert.equal(p.resources.grammar.sections.length, blocks.length, C.id);
      for (const g of blocks) assert.ok(t.includes(text(esc(g.title))), `${C.id}: ${g.title}`);
    }
    const hw = p.resources.homework || p.resources['mock-test'];
    if (hw) {
      const t = text(hw.html);
      for (const q of C.quiz || []) assert.ok(t.includes(text(esc(q.q))), `${C.id} quiz: ${q.q}`);
    }
  }
});

test('no stringified objects or missing values leak into any resource', () => {
  for (const [id, p] of plans) for (const [type, r] of Object.entries(p.resources)) {
    const t = text(r.html);
    for (const bad of ['[object Object]', 'undefined', 'NaN']) assert.ok(!t.includes(bad), `${id}/${type}: "${bad}"`);
  }
});

test('every authored vocabulary example is printed, in either authored shape', () => {
  let objectShaped = 0;
  for (const C of chapters) {
    const r = plans.get(C.id).resources.vocabulary;
    if (!r) continue;
    const t = text(r.html);
    for (const v of C.vocab) {
      const shown = vocabExamples(v);
      for (const k of ['ex', 'ex1', 'ex2']) {
        const x = v[k];
        const de = typeof x === 'string' ? x : x && x.de;
        if (!de) continue;
        if (typeof x === 'object') objectShaped++;
        assert.ok(shown.some((e) => e[0] === de), `${C.id}: ${k} not normalised`);
        assert.ok(t.includes(text(esc(de))), `${C.id}: ${k} missing from PDF`);
      }
    }
  }
  assert.equal(objectShaped, 60, 'the 30 C1 entries with ex1/ex2 objects');
});

test('homework never leaks answers', () => {
  for (const C of chapters) {
    const hw = plans.get(C.id).resources.homework || plans.get(C.id).resources['mock-test'];
    if (!hw) continue;
    const t = text(hw.html);
    const E = C.exercises || {};
    for (const x of [E.mcq, E.gap, E.errorCorrection, ...(C.quiz || [])]) {
      if (x && x.explain && x.explain.length > 25) assert.ok(!t.includes(text(esc(x.explain))), `${C.id}: explanation leaked`);
    }
    const { errorCorrection: ec, ...otherExercises } = E;
    const authoredElsewhere = JSON.stringify([otherExercises, C.quiz, C.writing, C.speaking.map((s) => [s.task, s.taskEn])]);
    if (ec && ec.right && ec.right !== ec.wrong && !authoredElsewhere.includes(ec.right)) {
      assert.ok(!t.includes(text(esc(ec.right))), `${C.id}: correction leaked`);
    }
    // Speaking model answers stay online — unless the same sentence is itself
    // authored in another printed practice field (e.g. an exercise option).
    const printedElsewhere = JSON.stringify([C.exercises, C.quiz, C.writing, C.reading && C.reading.comprehension, C.speaking.map((s) => [s.task, s.taskEn])]);
    for (const s of C.speaking || []) {
      if (s.de && !printedElsewhere.includes(s.de)) assert.ok(!t.includes(text(esc(s.de))), `${C.id}: model answer leaked`);
    }
  }
});

test('word banks never print in answer order; malformed gaps are skipped', () => {
  for (const C of chapters) {
    const B = C.exercises.builder;
    if (new Set(B.bank).size > 1) assert.notDeepEqual(stableShuffle(B.bank, C.id + ':builder', B.answer), B.answer, C.id);
  }
  const bad = chapters.filter((C) => !isWellFormedGap(C.exercises.gap)).map((C) => C.id).sort();
  assert.deepEqual(bad, ['a1-44-imperativ-modal2', 'b2-03-informationsstruktur-thema-rhema', 'b2-34-temporalsaetze-waehrend-seitdem', 'b2-62-konjunktiv-i-berichtende-sprache']);
  assert.ok(!htmlOf('b2-34-temporalsaetze-waehrend-seitdem', 'homework').includes('Fill the gaps'));
  assert.equal(joinTokens(['Das', 'stimmt', '.'].map((w) => ({ w }))), 'Das stimmt.');
});

test('Hindi and the Klarweg faces survive PDF rendering; no system or Type3 fallback fonts', { skip: !findChrome() && 'Google Chrome not installed' }, async () => {
  const dir = path.join(ROOT, 'scripts', 'chapter-resources', '.build');
  fs.mkdirSync(dir, { recursive: true });
  const browser = await launchChrome(findChrome());
  const render = async (id, type) => {
    const file = path.join(dir, `test--${id}--${type}.html`);
    fs.writeFileSync(file, htmlOf(id, type).replace(/url\(fonts\//g, 'url(../fonts/'));
    try { return (await browser.printToPdf('file://' + file)).toString('latin1'); } finally { fs.rmSync(file, { force: true }); }
  };
  try {
    const vocab = await render('a1-9-verben', 'vocabulary');
    for (const face of ['NotoSansDevanagari', 'Fraunces', 'Inter', 'JetBrainsMono']) assert.match(vocab, new RegExp(`/BaseFont /[A-Z]{6}\\+${face}`), face);
    assert.ok((vocab.match(/\/Type\s*\/Page(?!s)/g) || []).length >= 2);
    // Grammar PDFs carry ✕/✓ mistake marks and authored arrows (→) — the cases
    // that once fell back to Type3 / Times New Roman / Lucida Grande.
    for (const [id, type] of [['a1-9-verben', 'grammar'], ['c2-02-verben-mit-praefixen', 'grammar'], ['b2-14-goethe-mini-test-1', 'answer-key']]) {
      const pdf = await render(id, type);
      const faces = [...new Set((pdf.match(/\/BaseFont\s*\/[A-Za-z0-9+_-]+/g) || []).map((f) => f.split('+').pop()))];
      assert.deepEqual(faces.filter((f) => !/^(Fraunces|Inter|JetBrainsMono|NotoSansDevanagari|NotoSansSymbols2|NotoEmoji)/.test(f)), [], `${id}/${type} foreign fonts`);
      assert.ok(!/\/Subtype\s*\/Type3/.test(pdf), `${id}/${type} Type3 font`);
    }
  } finally {
    await browser.close();
  }
});

/* ---------- final template revision ---------- */
const CHECKPOINTS = ['b2-14-goethe-mini-test-1', 'b2-26-goethe-mini-test-2', 'b2-36-goethe-halbzeit-test', 'b2-43-goethe-mini-3'];

test('exactly the 4 B2 checkpoints get a Test Paper, first in the flow, from one central rule', () => {
  const withPaper = chapters.filter((C) => plans.get(C.id).resources['test-paper']).map((C) => C.id);
  assert.deepEqual(withPaper, CHECKPOINTS);
  assert.equal(DERIVED_RESOURCES.length, 1);
  for (const id of CHECKPOINTS) {
    const list = listResources(byId.get(id));
    assert.deepEqual(list.map((r) => r.type), ['test-paper', 'scoring', 'answer-key', 'revision-guide'], id);
    assert.equal(list[0].derived, true);
    assert.equal(plans.get(id).resources['test-paper'].file, `pdfs/b2/${id}/test-paper.pdf`);
    assert.equal(byId.get(id).resources.length, 3, 'chapter data untouched');
  }
});

test('Test Paper contains every authored question and its options, and no answers', () => {
  for (const id of CHECKPOINTS) {
    const C = byId.get(id);
    const t = text(htmlOf(id, 'test-paper'));
    const mcqs = [...C.reading.comprehension, ...C.listening.questions, ...C.grammarReview, ...C.vocabularyReview, ...C.quiz];
    for (const it of mcqs) {
      assert.ok(t.includes(text(esc(it.q))), `${id}: question missing: ${it.q}`);
      for (const o of it.options) assert.ok(t.includes(text(esc(stripChapterHint(o)))), `${id}: option missing: ${o}`);
      if (it.explain) assert.ok(!t.includes(text(esc(it.explain))), `${id}: explanation leaked`);
    }
    for (const e of C.errorCorrectionSet) {
      assert.ok(t.includes(text(esc(e.wrong))), `${id}: error sentence missing`);
      if (e.right !== e.wrong && !JSON.stringify([C.exercises, C.quiz, C.grammarReview, C.vocabularyReview]).includes(e.right)) {
        assert.ok(!t.includes(text(esc(e.right))), `${id}: correction leaked: ${e.right}`);
      }
    }
    // no answer-key markup of any kind: no ✓ answers, no references, no filled gaps, no explanations
    const h = htmlOf(id, 'test-paper');
    for (const cls of ['class="key"', 'class="ref"', 'class="fill-in"', 'class="kexp"', 'class="mk-mark ok"']) assert.ok(!h.includes(cls), `${id}: ${cls}`);
    assert.ok(t.includes(text(esc(C.writing.prompt))), `${id}: writing task missing`);
    for (const s of C.speaking) assert.ok(t.includes(text(esc(s.task))), `${id}: speaking task missing`);
    assert.ok(t.includes('Play the listening audio in this chapter on Klarweg'));
  }
});

test('Test Paper shuffle is deterministic and never restores authored (answer-first) order across a section', () => {
  const C = byId.get('b2-14-goethe-mini-test-1');
  const a = planChapter(C, ctx).resources['test-paper'].html;
  assert.equal(a, planChapter(C, ctx).resources['test-paper'].html);
  // grammarReview answers are all authored first; on paper they must not all print as option a
  const firsts = C.grammarReview.map((it, i) => stableShuffle(it.options, `${C.id}:grammarReview:${i}:${it.q}`)[0]);
  const answers = C.grammarReview.map((it) => it.options[it.answer]);
  assert.ok(firsts.filter((f, i) => f === answers[i]).length < C.grammarReview.length / 2);
});

test('worksheets carry a Name / Date line; Vocabulary, Grammar and checkpoint keys do not', () => {
  const has = (id, type) => htmlOf(id, type).includes('class="namedate"');
  assert.ok(has('a1-9-verben', 'homework'));
  assert.ok(has('a2-25-goethe-mini-3', 'mock-test'));
  assert.ok(has('b2-14-goethe-mini-test-1', 'test-paper'));
  for (const [id, type] of [['a1-9-verben', 'vocabulary'], ['a1-9-verben', 'grammar'], ['b2-14-goethe-mini-test-1', 'answer-key'], ['b2-14-goethe-mini-test-1', 'scoring'], ['b2-14-goethe-mini-test-1', 'revision-guide']]) {
    assert.ok(!has(id, type), `${id}/${type}`);
  }
});

test('writing area: sized from the authored target, capped, kept with its prompt in one block', () => {
  assert.deepEqual(writingLines(16), { lines: WRITING.minLines, overflow: false });
  assert.deepEqual(writingLines(150), { lines: 19, overflow: false });
  assert.deepEqual(writingLines(350), { lines: WRITING.maxLines, overflow: true });
  assert.deepEqual(writingLines(undefined), { lines: 6, overflow: false });
  const h = htmlOf('c2-02-verben-mit-praefixen', 'homework');
  const sec = h.slice(h.lastIndexOf('<section class="sec">'));
  assert.match(sec, /<div class="keep">.*<h2>Writing<\/h2>(<div class="keep">)?<div class="writing-area">/s, 'heading + prompt + lines in one keep block');
  assert.equal((sec.match(/class="wl"/g) || []).length, 19);
  assert.ok(sec.includes('At least 150 words.'));
  const big = chapters.find((C) => C.writing && C.writing.minWords === 350);
  const bh = htmlOf(big.id, Object.keys(plans.get(big.id).resources).find((t) => /homework|mock-test/.test(t)));
  assert.ok(bh.includes('Continue on a separate sheet to reach 350 words.'));
});

test('long multiple-choice options go one per line; short sets stay inline', () => {
  assert.equal(stackOptions(['spielt', 'spiele', 'spielst', 'spielen']), false);
  assert.equal(stackOptions(['Am Wochenende koche ich.', 'Am Wochenende ich koche.', 'Ich am Wochenende koche.', 'Koche am Wochenende ich.']), true);
  assert.equal(stackOptions(['Because "zeigen" is grammatically incorrect', 'a', 'b']), true);
  const h = htmlOf('a1-9-verben', 'homework');
  assert.ok(h.includes('<ol class="opts stack">') && h.includes('<ol class="opts">'));
});

test('conjugation forms are unbreakable units; a "—" plural is omitted', () => {
  const h = htmlOf('a1-9-verben', 'vocabulary');
  assert.ok(h.includes('<span class="nb"><span class="clbl">Perf.</span> <span class="de">hat gearbeitet</span></span>'));
  assert.ok(htmlOf('a2-12-reflexive-verben', 'vocabulary').includes('<span class="de">hat sich gefreut</span></span>'));
  const lw = h.slice(h.indexOf('Lernwortschatz'), h.indexOf('</div></div>', h.indexOf('Lernwortschatz')));
  assert.ok(!/Pl\.<\/span> <span class="de">—/.test(h) && !lw.includes('Pl.'));
});

test('tables of up to 8 rows are kept together; longer ones may split', () => {
  const h = htmlOf('c1-24-nominalisierung-im-formellen-stil', 'grammar');
  const tables = h.match(/<table class="tbl[^"]*">[\s\S]*?<\/table>/g);
  for (const t of tables) {
    const rows = (t.match(/<tbody>[\s\S]*<\/tbody>/)[0].match(/<tr>/g) || []).length;
    assert.equal(t.startsWith('<table class="tbl keep-table">'), rows <= KEEP_TABLE_MAX_ROWS);
  }
});

test('answer-key gap answers keep German typography and are underlined, not a sans-serif swap', () => {
  const h = htmlOf('b2-14-goethe-mini-test-1', 'answer-key');
  assert.match(h, /<div class="de tq">Ich helfe meinem <span class="fill-in">Bruder<\/span>\.<\/div>/);
  assert.match(ctx.css, /\.fill-in \{ font: inherit;[^}]*text-decoration: underline/);
  assert.ok(!/\.fill-in \{[^}]*font-family/.test(ctx.css));
});

test('the closing note is kept with the last block, never alone on a page', () => {
  for (const [id, type] of [['b2-14-goethe-mini-test-1', 'test-paper'], ['a1-9-verben', 'homework'], ['a1-9-verben', 'vocabulary']]) {
    const h = htmlOf(id, type);
    assert.match(h, /<div class="keep">(?:(?!<section)[\s\S])*<footer class="doc-end">[\s\S]*<\/footer><\/div>(<\/div>)?<\/section>/, `${id}/${type}`);
  }
});

test('a heading with a one-line lead-in stays with the block it introduces', () => {
  const h = htmlOf('c1-24-nominalisierung-im-formellen-stil', 'grammar');
  assert.match(h, /<div class="keep"><div class="eyebrow">09<\/div><h2>Meister-Tabelle<\/h2><p>Structure mapped to function\.<\/p><table class="tbl keep-table">/);
});

test('a lead-in never glues a long (splittable) table to its heading', () => {
  const h = htmlOf('b2-14-goethe-mini-test-1', 'revision-guide');
  assert.match(h, /<div class="keep"><div class="eyebrow">02<\/div><h2>Prüfungsumfang \(Chapters 1–13\)<\/h2><p>[^<]*<\/p><\/div><table class="tbl">/);
});

/* ---------- option B: Test-Paper-only chapter-hint stripping ---------- */
// Every authored MCQ option in a checkpoint where only SOME options carry a
// trailing "(… Ch.N)" hint — each such hint sits on the correct answer.
function hintedAnswers(C) {
  const sets = [C.quiz, C.reading && C.reading.comprehension, C.listening && C.listening.questions, C.grammarReview, C.vocabularyReview, C.exercises && C.exercises.mcq && [C.exercises.mcq]].filter(Array.isArray).flat();
  return sets.filter((q) => q && q.options).flatMap((q) => {
    const flagged = q.options.map((o) => CHAPTER_HINT.test(o));
    const n = flagged.filter(Boolean).length;
    return n > 0 && n < q.options.length ? [q.options[q.answer]] : [];
  });
}

test('the 34 hinted correct answers lose their hint in Test Papers — and only there', () => {
  const leaks = CHECKPOINTS.flatMap((id) => hintedAnswers(byId.get(id)).map((a) => [id, a]));
  assert.equal(leaks.length, 34);
  for (const [id, a] of leaks) {
    assert.ok(CHAPTER_HINT.test(a), `${id}: expected a hinted correct option: ${a}`);
    const tp = htmlOf(id, 'test-paper');
    assert.ok(!tp.includes(esc(a)), `${id}: hint still printed on the Test Paper: ${a}`);
    assert.ok(tp.includes(esc(stripChapterHint(a))), `${id}: stripped option missing: ${a}`);
  }
  // no trailing chapter hint survives on any Test Paper option
  for (const id of CHECKPOINTS) {
    const opts = [...htmlOf(id, 'test-paper').matchAll(/<span class="opt-t">([^<]*)<\/span>/g)].map((m) => m[1]);
    assert.ok(opts.length > 40);
    for (const o of opts) assert.ok(!CHAPTER_HINT.test(o), `${id}: ${o}`);
  }
});

test('hint stripping keeps every other parenthesis and all other wording', () => {
  assert.equal(stripChapterHint('Sehr stark (Ch.13)'), 'Sehr stark');
  assert.equal(stripChapterHint('Nicht unmöglich, aber schwierig (Litotes, Ch.12)'), 'Nicht unmöglich, aber schwierig');
  assert.equal(stripChapterHint('Ja, trotzdem/obgleich es Hindernisse gab (Ch.15/25)'), 'Ja, trotzdem/obgleich es Hindernisse gab');
  assert.equal(stripChapterHint('das Team (Ch.37/38, nested)'), 'das Team');
  for (const keep of ['Was meint er? (Script B)', 'to be glad (auf/über)', '(nothing needed)', 'Es war nicht unwichtig (Litotes) — sie sind zufrieden.', 'Ch.13 ist gut', 'Chapter (Ch.13) im Satz']) {
    assert.equal(stripChapterHint(keep), keep);
  }
  // legitimate parentheses in Test Paper questions/options survive
  const tp = text(htmlOf('b2-14-goethe-mini-test-1', 'test-paper'));
  assert.ok(tp.includes('(Script B)') && tp.includes('(Text B)'));
  assert.ok(tp.includes('Es war nicht unwichtig (Litotes) — sie sind zufrieden.'));
});

test('Answer Key, Scoring, Revision Guide and all other resources keep hints exactly as authored', () => {
  for (const id of CHECKPOINTS) {
    const key = htmlOf(id, 'answer-key');
    for (const a of hintedAnswers(byId.get(id))) assert.ok(key.includes(esc(a)), `${id}: answer key altered: ${a}`);
  }
  // Mock-test / homework PDFs are not test papers: they print authored options verbatim
  const withHints = chapters.filter((C) => !CHECKPOINTS.includes(C.id)).find((C) => (C.quiz || []).some((q) => q.options.some((o) => CHAPTER_HINT.test(o))));
  if (withHints) {
    const type = Object.keys(plans.get(withHints.id).resources).find((t) => /homework|mock-test/.test(t));
    const h = htmlOf(withHints.id, type);
    for (const q of withHints.quiz) for (const o of q.options) if (CHAPTER_HINT.test(o)) assert.ok(h.includes(esc(o)), `${withHints.id}/${type}: ${o}`);
  }
});

test('chapter data is never mutated by planning', () => {
  const C = byId.get('b2-14-goethe-mini-test-1');
  const before = JSON.stringify(C);
  planChapter(C, ctx);
  assert.equal(JSON.stringify(C), before);
  const fresh = loadAllChapters(path.join(ROOT, 'chapter')).find((x) => x.id === C.id);
  assert.ok(hintedAnswers(fresh).every((a) => CHAPTER_HINT.test(a)), 'data file still carries the authored hints');
});

test('Hinglish box uses the teal tint and teal label; semantic grammar colours are untouched', () => {
  assert.match(ctx.css, /\.co-hinglish \{ background: var\(--accent-tint\); \}/);
  assert.match(ctx.css, /\.co-hinglish \.lbl \{ color: var\(--accent\); \}/);
  assert.match(ctx.css, /--accent: #1F4E4A; --accent-tint: #E7F0EE;/);
  assert.ok(!/\.co-hinglish[^}]*var\(--warm\)/.test(ctx.css), 'no cream on the Hinglish box');
  // the PDF stylesheet itself holds no orange/amber; warm colours come only from chapter.css role tokens
  const hexes = ctx.css.match(/#[0-9A-Fa-f]{6}/g).map((h) => h.toUpperCase());
  for (const h of hexes) {
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
    assert.ok(!(r > 150 && r > g + 30 && g > b && b < 120), `orange-family colour in resource.css: ${h}`);
  }
  assert.match(ctx.roleCss, /--g-article: #B45309;/);
  assert.match(ctx.roleCss, /\.r-article \{ color: var\(--g-article\); \}/);
  assert.ok(htmlOf('a1-9-verben', 'vocabulary').includes('<span class="de art r-article">das</span>'));
});

test('every PDF ends with one clickable chapter link built only from SITE_BASE', async () => {
  const { SITE_BASE } = await import('./site-origin.mjs');
  assert.equal(SITE_BASE, 'https://reegangandhi16-pixel.github.io/klarweg', 'domain unchanged for now');
  for (const [id, p] of plans) for (const [type, r] of Object.entries(p.resources)) {
    const want = `${ctx.siteBase}/chapter/chapter-${id}.html`;
    const anchors = [...r.html.matchAll(/<a href="([^"]*)">([^<]*)<\/a>/g)];
    assert.equal(anchors.length, 1, `${id}/${type}: exactly one link`);
    assert.equal(anchors[0][1], want, `${id}/${type}: link target`);
    assert.equal(anchors[0][2], want, `${id}/${type}: link text matches target`);
    assert.match(r.html, /<p class="url"><a href="[^"]+">[^<]+<\/a><\/p><\/footer>/);
  }
  // migration: a new SITE_BASE flows straight through, same /chapter/chapter-<id>.html path
  const migrated = planChapter(byId.get('b2-14-goethe-mini-test-1'), { ...ctx, siteBase: 'https://klarweg.in' });
  for (const r of Object.values(migrated.resources)) {
    assert.ok(r.html.includes('<a href="https://klarweg.in/chapter/chapter-b2-14-goethe-mini-test-1.html">'));
    assert.ok(!r.html.includes('github.io'));
  }
  // no domain is hard-coded in the templates or plan
  for (const f of ['templates.mjs', 'plan.mjs', 'common.mjs']) {
    const src = fs.readFileSync(path.join(ROOT, 'scripts', 'chapter-resources', f), 'utf8');
    assert.ok(!/github\.io|klarweg\.in|https?:\/\/[a-z]/i.test(src.replace(/\/\*[\s\S]*?\*\//g, '')), f);
  }
});
