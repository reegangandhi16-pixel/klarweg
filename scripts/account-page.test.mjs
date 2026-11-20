/* account/index.html — static checks that keep the account page honest.
   1. CHAPTER_TOTALS equals the number of chapter cards on each level
      roadmap (a1.html … c2.html), so "x of N chapters" never drifts.
   2. chapterStatus() gives exactly the result kw-roadmap-progress.js read()
      gives for the same record, so the account page and the roadmaps can
      never disagree about "completed" / "in progress".
   3. No coral/orange on the account page. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const page = fs.readFileSync(path.join(ROOT, 'account/index.html'), 'utf8');

function extract(name) {
  const start = page.indexOf(`function ${name}(`);
  assert.ok(start > 0, name + ' not found');
  let depth = 0, i = page.indexOf('{', start);
  for (; i < page.length; i++) {
    if (page[i] === '{') depth++;
    else if (page[i] === '}' && --depth === 0) break;
  }
  return page.slice(start, i + 1);
}

test('CHAPTER_TOTALS matches the chapter cards on every level roadmap', () => {
  const totals = JSON.parse(/var CHAPTER_TOTALS = (\{[^}]+\})/.exec(page)[1].replace(/(\w\d):/g, '"$1":'));
  for (const level of ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']) {
    const html = fs.readFileSync(path.join(ROOT, level + '.html'), 'utf8');
    const ids = new Set([...html.matchAll(new RegExp(`chapter/chapter-(${level}-[0-9]{1,2}(?:-[a-z0-9]+)*)\\.html`, 'g'))].map((m) => m[1]));
    assert.equal(totals[level.toUpperCase()], ids.size, level);
    // and every chapter file exists
    assert.equal(fs.readdirSync(path.join(ROOT, 'chapter')).filter((f) => f.startsWith(`chapter-${level}-`) && f.endsWith('.html')).length, ids.size, level + ' files');
  }
});

test('chapterStatus() agrees with kw-roadmap-progress.js read()', () => {
  const store = {};
  const sandbox = { localStorage: { getItem: (k) => (k in store ? store[k] : null) } };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'kw-roadmap-progress.js'), 'utf8'), sandbox);
  vm.runInContext(extract('chapterStatus'), sandbox);
  const records = [
    null, {}, [], 'x',
    { xpEarned: 0, xpMax: 160 }, { xpEarned: 80, xpMax: 160 }, { xpEarned: 160, xpMax: 160 }, { xpEarned: 159, xpMax: 160 },
    { xpEarned: 200, xpMax: 160 }, { xpEarned: '80', xpMax: 160 }, { xpEarned: NaN, xpMax: 160 }, { xpEarned: 5, xpMax: 0 },
    { done: { story: true } }, { done: { quiz: true } }, { done: { story: 'yes' } }, { done: [true] },
    { quizScore: 3 }, { quizScore: 0 }, { quizScore: 2.5 },
    { done: { story: true }, xpEarned: 0, xpMax: 160 }, { done: { story: true }, xpEarned: 200, xpMax: 160 }
  ];
  for (const rec of records) {
    store['kw-ch-a1-1-alphabet'] = JSON.stringify(rec);
    const roadmap = sandbox.KWRoadmapProgress.read('chapter/chapter-a1-1-alphabet.html');
    const account = sandbox.chapterStatus(JSON.parse(JSON.stringify(rec)));
    assert.deepEqual({ ...account }, { ...roadmap }, JSON.stringify(rec));
  }
});

test('no coral/orange on the account page', () => {
  assert.doesNotMatch(page, /#E55A3F|#e55a3f|229,\s*90,\s*63|--coral|btn-coral|#993C1D|#C9371B/);
});

test('every account write goes through KWAuth.request (credentials, no tokens in storage)', () => {
  assert.doesNotMatch(page, /localStorage\.setItem|sessionStorage/);
  for (const p of ['/account/profile', '/account/avatar', '/account/password', '/account/delete']) {
    assert.match(page, new RegExp(`KWAuth\\.request\\('${p.replace(/\//g, '\\/')}'`), p);
  }
});
