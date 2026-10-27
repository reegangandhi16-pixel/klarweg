// Static guards for the Lesen practice page (lesen-practice.html + lesen-practice-data.js).
// The page is an UNPUBLISHED draft again (public 2026-10-24 to 2026-10-27, hidden by the owner). These tests
// keep it unpublished and unlinked, keep it offline (no network, no storage), and keep the content honest:
// every passage matches its source chapter text except the edits it declares, and every
// evidence quote appears verbatim in the passage.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const read = (p) => readFileSync(new URL(p, root), 'utf8');
const DATA = (() => { const ctx = {}; vm.runInNewContext(read('lesen-practice-data.js') + ';this.__D = LESEN_PRACTICE;', ctx); return ctx.__D; })();
const html = read('lesen-practice.html');

function chapterReadingText(file) {
  const ctx = { window: {}, document: {} };
  vm.runInNewContext(read(file) + ';this.__C = CHAPTER;', ctx);
  let text = '';
  for (const t of ctx.__C.reading.tokens) text += (t.plain && /^[.,!?;:)]/.test(t.w) ? '' : ' ') + t.w;
  return text.trim();
}

test('UNPUBLISHED: not allowlisted for Pages, noindex, no canonical, not in the sitemap; review record is honest', () => {
  // Hidden again 2026-10-27 (owner: not working well enough). Pages deploys only what
  // .github/pages-allowlist.txt lists, so leaving it out is what stops the URL being served.
  assert.equal(DATA.review.status, 'unpublished');
  assert.equal(DATA.review.unpublishedOn, '2026-10-27');
  assert.equal(DATA.review.independentReview, null, 'no independent review is claimed until one happens');
  const allow = read('.github/pages-allowlist.txt').split('\n').map((l) => l.trim());
  for (const f of ['lesen-practice.html', 'lesen-practice-data.js']) assert.equal(allow.includes(f), false, `${f} is NOT in .github/pages-allowlist.txt`);
  assert.equal(allow.some((l) => l.startsWith('GLOB:') && !l.startsWith('GLOB:chapter/') && !l.startsWith('GLOB:audio-timing/')), false,
    'no root-level glob that could pull the draft back into the Pages artifact');
  assert.match(html, /<meta name="robots" content="noindex, nofollow">/);
  assert.match(html, /UNPUBLISHED DRAFT/);
  assert.equal(/rel="canonical"|og:url|twitter:card/.test(html), false, 'no canonical or share metadata while unpublished');
  assert.equal(read('sitemap.xml').includes('lesen-practice'), false, 'not in sitemap.xml');
});

test('UNLINKED: no page and no site script links the draft', () => {
  const files = readdirSync(new URL('.', root)).filter((f) => (f.endsWith('.html') || f === 'site.js') && f !== 'lesen-practice.html');
  assert.ok(files.includes('index.html') && files.length >= 18, `scanned the root pages (${files.length})`);
  for (const f of files) assert.equal(read(f).includes('lesen-practice'), false, `${f} does not link the draft`);
  assert.equal(/href="lesen-practice\.html"/.test(html), false, 'the draft does not link itself in its nav');
});

test('the page is offline: no fetch, XHR, beacons, storage, auth or analytics scripts', () => {
  const pageAndData = html + read('lesen-practice-data.js');
  for (const banned of [/fetch\(/, /XMLHttpRequest/, /sendBeacon/, /localStorage/, /sessionStorage/, /indexedDB/, /document\.cookie/,
    /kw-auth\.js/, /kw-config\.js/, /kw-access\.js/, /kw-nav-auth\.js/, /gtag|googletagmanager|analytics/i]) {
    assert.equal(banned.test(pageAndData), false, `page must not use ${banned}`);
  }
  const scripts = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map((m) => m[1]);
  assert.deepEqual(scripts, ['site.js', 'lesen-practice-data.js']);
});

test('the page says it is practice, not an official exam, and keeps the trademark out', () => {
  assert.match(html, /Practice, not an exam\./);
  assert.match(html, /not an official examination/);
  assert.match(html, /not affiliated with any examination provider/);
  const ownText = html.replace(/<nav[\s\S]*?<\/nav>/g, '').replace(/<div class="mobile-nav"[\s\S]*?<\/div>\s*<\/div>/, '').replace(/<footer[\s\S]*?<\/footer>/, '');
  assert.equal(/goethe/i.test(ownText.replace(/goethe-exam\.html/g, '')), false, 'no Goethe naming in the page body');
  assert.equal(/goethe|zertifikat|prüfungsteil/i.test(read('lesen-practice-data.js')), false, 'no exam branding in the content');
});

test('every set: one per level, passage = source chapter text with only the declared edits', () => {
  assert.equal(DATA.sets.map((s) => s.level).join(','), 'A1,A2,B1,B2,C1,C2');
  assert.equal(new Set(DATA.sets.map((s) => s.id)).size, DATA.sets.length, 'unique set ids');
  for (const set of DATA.sets) {
    assert.ok(existsSync(new URL(set.source.file, root)), `${set.id}: source file exists`);
    assert.ok(existsSync(new URL(set.source.href, root)), `${set.id}: chapter page exists`);
    let expected = chapterReadingText(set.source.file);
    for (const e of set.edits) {
      assert.ok(expected.includes(e.from), `${set.id}: edit source "${e.from}" is in the chapter text`);
      assert.ok(e.why && e.why.length > 10, `${set.id}: edit has a reason`);
      expected = expected.replace(e.from, e.to);
    }
    assert.equal(set.passage.join(' '), expected, `${set.id}: passage matches the chapter text`);
  }
});

test('every question: valid key, explanation, verbatim non-overlapping evidence', () => {
  const keyPositions = {};
  for (const set of DATA.sets) {
    assert.ok(set.questions.length >= 4 && set.questions.length <= 6, `${set.id}: 4–6 questions`);
    const ranges = [];
    set.questions.forEach((q, i) => {
      const at = `${set.id} q${i + 1}`;
      assert.ok(q.q && q.explain && q.explain.length > 20, `${at}: question and explanation`);
      if (q.type === 'rf') {
        assert.ok(['richtig', 'falsch'].includes(q.answer), `${at}: rf answer`);
      } else {
        assert.equal(q.type, 'mc', `${at}: type`);
        assert.equal(q.options.length, 3, `${at}: three options`);
        assert.equal(new Set(q.options).size, 3, `${at}: distinct options`);
        assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 3, `${at}: mc answer index`);
        keyPositions[q.answer] = (keyPositions[q.answer] || 0) + 1;
      }
      const hits = set.passage.filter((p) => p.includes(q.evidence));
      assert.equal(hits.length, 1, `${at}: evidence appears in exactly one paragraph`);
      const p = set.passage.indexOf(hits[0]);
      const start = hits[0].indexOf(q.evidence);
      assert.equal(hits[0].indexOf(q.evidence, start + 1), -1, `${at}: evidence is unique in its paragraph`);
      for (const r of ranges) {
        assert.ok(r.p !== p || start >= r.end || start + q.evidence.length <= r.start, `${at}: evidence overlaps q${r.n}`);
      }
      ranges.push({ p, start, end: start + q.evidence.length, n: i + 1 });
    });
    const rf = set.questions.filter((q) => q.type === 'rf');
    assert.ok(rf.length >= 1 && set.questions.some((q) => q.type === 'mc'), `${set.id}: mixes Richtig/Falsch and multiple choice`);
  }
  // The key must not always sit in the same position (the unrendered chapter comprehension data is all "A").
  assert.equal(Object.keys(keyPositions).length, 3, 'mc keys use all three positions');
});
