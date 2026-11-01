// Level bundles (scripts/chapter-resources/combined.mjs): pure checks, no Chrome.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadAllChapters } from './chapter-resources/load.mjs';
import { cssString, parseId } from './chapter-resources/common.mjs';
import { QR_LABEL, qrDataUri } from './chapter-resources/templates.mjs';
import { planChapter, roleCssFrom } from './chapter-resources/plan.mjs';
import { COMBINED_TYPES, combinedFile, collectLevel, buildCombined, namedDestPages } from './chapter-resources/combined.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RES = path.join(ROOT, 'scripts', 'chapter-resources');
const chapters = loadAllChapters(path.join(ROOT, 'chapter'));
const ctx = {
  css: fs.readFileSync(path.join(RES, 'resource.css'), 'utf8'),
  roleCss: roleCssFrom(fs.readFileSync(path.join(ROOT, 'chapter', 'chapter.css'), 'utf8')),
  siteBase: 'https://example.test/klarweg',
};
const combinedCss = fs.readFileSync(path.join(RES, 'combined.css'), 'utf8');

test('18 bundle files, named Klarweg_<LEVEL>_All_Chapters_<Type>.pdf', () => {
  const files = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'].flatMap((l) => Object.keys(COMBINED_TYPES).map((t) => combinedFile(l, t)));
  assert.equal(new Set(files).size, 18);
  assert.equal(combinedFile('a1', 'grammar'), 'a1/Klarweg_A1_All_Chapters_Grammar_Rules.pdf');
  assert.equal(combinedFile('c2', 'vocabulary'), 'c2/Klarweg_C2_All_Chapters_Vocabulary.pdf');
});

test('every chapter of a level is either in its bundle, in course order, or listed as not included — never both, never dropped', () => {
  for (const level of ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']) for (const type of Object.keys(COMBINED_TYPES)) {
    const { included, missing } = collectLevel(chapters, level, type, ctx);
    const ofLevel = chapters.filter((C) => parseId(C.id).level === level);
    assert.equal(included.length + missing.length, ofLevel.length, `${level}/${type}`);
    const nums = included.map((c) => c.number);
    assert.deepEqual(nums, [...nums].sort((a, b) => a - b), `${level}/${type}: course order`);
    for (const m of missing) assert.ok(!planChapter(chapters.find((C) => C.id === m.id), ctx).resources[type], `${m.id} has a ${type} PDF`);
  }
  // the gaps found in the audit: test chapters without Homework
  assert.deepEqual(collectLevel(chapters, 'a2', 'homework', ctx).missing.map((m) => m.number), [25, 35]);
});

test('each chapter in a bundle is its own PDF body, on its own page with its own running title and QR', () => {
  const { included, missing } = collectLevel(chapters, 'a1', 'homework', ctx);
  const html = buildCombined({ level: 'a1', type: 'homework', included, missing, ...ctx, combinedCss });
  for (const c of included) {
    const own = planChapter(chapters.find((C) => C.id === c.id), ctx).resources.homework.html;
    assert.ok(own.includes(`<body>${c.body}</body>`), `${c.id}: body is the single-chapter body`);
    assert.ok(html.includes(`<section class="kw-ch kw-ch-${c.number}" id="kw-ch-${c.number}">${c.body}</section>`), c.id);
    assert.ok(html.includes(`.kw-ch-${c.number} { page: kw-ch${c.number}; }`), c.id);
    assert.ok(html.includes(`@bottom-left { content: ${cssString(c.running)}; }`), c.id);
    assert.ok(html.includes(`"\\A " ${cssString(QR_LABEL)}; background-image: url("${qrDataUri(`${ctx.siteBase}/chapter/chapter-${c.id}.html`)}"); }`), `${c.id}: own QR`);
    assert.ok(html.includes(`<a href="#kw-ch-${c.number}">`), `${c.id}: contents link`);
  }
  assert.equal((html.match(/background-image: url\("data:image\/svg/g) || []).length, included.length, 'no QR outside chapter pages');
});

test('contents page numbers: empty on the measuring pass, then the given start pages', () => {
  const { included, missing } = collectLevel(chapters, 'c2', 'grammar', ctx);
  const opts = { level: 'c2', type: 'grammar', included, missing, ...ctx, combinedCss };
  assert.equal((buildCombined(opts).match(/<span class="kw-toc-p"><\/span>/g) || []).length, included.length);
  const starts = included.map((_, i) => 3 + i * 5);
  const html = buildCombined({ ...opts, startPages: starts });
  starts.forEach((p) => assert.ok(html.includes(`<span class="kw-toc-p">${p}</span>`)));
});

test('namedDestPages maps each #anchor to the 1-based page it landed on', () => {
  const pdf = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R /Dests 9 0 R >>\nendobj',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R 5 0 R 4 0 R] /Count 3 >>\nendobj',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R >>\nendobj',
    '4 0 obj\n<< /Type /Page /Parent 2 0 R >>\nendobj',
    '5 0 obj\n<< /Type /Page /Parent 2 0 R >>\nendobj',
    '9 0 obj\n<< /kw-ch-1 [5 0 R /XYZ 0 841.91998 0] /kw-ch-2 [4 0 R /XYZ 0 841.91998 0] >>\nendobj',
  ].join('\n');
  const r = namedDestPages(pdf);
  assert.equal(r.pageCount, 3);
  assert.equal(r.pageOf('kw-ch-1'), 2);
  assert.equal(r.pageOf('kw-ch-2'), 3);
  assert.throws(() => r.pageOf('kw-ch-3'), /no page destination/);
});
