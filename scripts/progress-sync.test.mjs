// kw-progress-sync.js — account-backed chapter progress on the client:
// the pure merge rules, the chapter / roadmap wiring, and the request flow
// against a fake /progress endpoint (owner switch, 409 merge-and-retry).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = fs.readFileSync(path.join(ROOT, 'kw-progress-sync.js'), 'utf8');
const APP = fs.readFileSync(path.join(ROOT, 'chapter/chapter-app.js'), 'utf8');

function storage(init = {}) {
  const m = new Map(Object.entries(init));
  return {
    get length() { return m.size; }, key: (i) => [...m.keys()][i] ?? null,
    getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)),
    removeItem: (k) => m.delete(k), dump: () => Object.fromEntries(m),
  };
}
function load({ ls = storage(), fetch } = {}) {
  const events = [];
  const win = {
    localStorage: ls, fetch, KW_ACCESS_API: 'https://klarweg.in/api',
    addEventListener() {}, dispatchEvent: (e) => events.push(e.type),
    document: { addEventListener() {}, visibilityState: 'visible' },
    setTimeout, clearTimeout, CustomEvent: class { constructor(t) { this.type = t; } },
  };
  win.window = win;
  vm.runInNewContext(SRC, { window: win, fetch, setTimeout, clearTimeout, CustomEvent: win.CustomEvent, JSON, Object, Math, Number, Promise, Array, String });
  return { S: win.KWProgressSync, ls, events };
}
const res = (status, body) => Promise.resolve({ status, ok: status >= 200 && status < 300, json: () => Promise.resolve(body) });

test('merge: union of sections, best quiz, learned by last change, local-only fields kept', () => {
  const { S } = load();
  const m = S.merge(
    { done: { story: true }, learned: { Tisch: true }, quizScore: 3, saved: { Tisch: true }, panel: 'x', vocabVoice: 'female' },
    { done: { vocabulary: true }, learned: { Stuhl: true }, quizScore: 5, vocabVoice: 'male' });
  assert.deepEqual(JSON.parse(JSON.stringify(m)), { done: { story: true, vocabulary: true }, learned: { Tisch: true, Stuhl: true }, quizScore: 5, saved: { Tisch: true }, panel: 'x', vocabVoice: 'female' });
  const l = S.merge({ learned: { a: true }, learnedAt: 10 }, { learned: { b: true }, learnedAt: 20 });
  assert.deepEqual({ ...l.learned }, { b: true }); assert.equal(l.learnedAt, 20);
  // a newer Restart wins wholesale, an older one loses
  const r = S.merge({ done: { story: true }, quizScore: 5 }, { done: {}, quizScore: null, resetAt: 99 });
  assert.deepEqual({ ...r.done }, {}); assert.equal(r.quizScore, null); assert.equal(r.resetAt, 99);
  const r2 = S.merge({ done: { grammar: true }, resetAt: 200 }, { done: { story: true }, resetAt: 100 });
  assert.deepEqual({ ...r2.done }, { grammar: true });
  assert.deepEqual({ ...S.merge({ done: { a: true } }, null).done }, { a: true });
});

test('pick never sends saved words or UI state', () => {
  const { S } = load();
  const p = S.pick({ done: { story: true, x: false }, learned: { a: true }, saved: { a: true }, panel: 'p', unit: 2, quizScore: 4, xpEarned: 10, xpMax: 160 });
  assert.deepEqual(Object.keys(p).sort(), ['done', 'learned', 'quizScore', 'xpEarned', 'xpMax']);
  assert.deepEqual({ ...p.done }, { story: true });
});

test('syncAll: guest progress merges into the first account and is uploaded', async () => {
  const posts = [];
  const ls = storage({ 'kw-ch-a1-1': JSON.stringify({ done: { story: true }, learned: {}, quizScore: null, saved: { x: true } }) });
  const fetch = (url, o = {}) => {
    if (url.endsWith('/progress')) return res(200, { ok: true, user: 'u1', chapters: { 'a1-2': { record: { done: { vocabulary: true }, learned: {}, quizScore: 4 }, updatedAt: 100 } } });
    posts.push([url, JSON.parse(o.body)]); return res(200, { ok: true, updatedAt: 200 });
  };
  const { S, events } = load({ ls, fetch });
  assert.equal(await S.syncAll(), true);
  assert.deepEqual(events, ['kw:progress-synced']);
  assert.deepEqual(JSON.parse(ls.getItem('kw-ch-a1-2')).done, { vocabulary: true });
  assert.deepEqual(JSON.parse(ls.getItem('kw-ch-a1-1')).saved, { x: true });
  assert.equal(posts.length, 1);
  assert.equal(posts[0][0], 'https://klarweg.in/api/progress/a1-1');
  assert.equal(posts[0][1].baseUpdatedAt, null);
  assert.equal(posts[0][1].record.saved, undefined);
  assert.deepEqual(JSON.parse(ls.getItem('kw-progress-meta')), { user: 'u1', bases: { 'a1-2': 100, 'a1-1': 200 } });
});

test('a different account on the same browser gets its own progress, not the previous one', async () => {
  const posts = [];
  const ls = storage({
    'kw-progress-meta': JSON.stringify({ user: 'u1', bases: { 'a1-1': 5 } }),
    'kw-ch-a1-1': JSON.stringify({ done: { story: true }, learned: { a: true }, quizScore: 5, saved: { a: true }, panel: 'p' }),
  });
  const fetch = (url, o = {}) => url.endsWith('/progress')
    ? res(200, { ok: true, user: 'u2', chapters: {} })
    : (posts.push(url), res(200, { ok: true, updatedAt: 1 }));
  const { S } = load({ ls, fetch });
  await S.syncAll();
  const rec = JSON.parse(ls.getItem('kw-ch-a1-1'));
  assert.deepEqual(rec.done, {}); assert.deepEqual(rec.learned, {}); assert.equal(rec.quizScore, null);
  assert.equal(rec.saved, undefined); assert.equal(rec.panel, 'p');
  assert.deepEqual(posts, []);
  assert.equal(JSON.parse(ls.getItem('kw-progress-meta')).user, 'u2');
});

test('chapter attach: 409 merges the stored row, retries with the new base, applies the result', async () => {
  const posts = [];
  let state = { done: { grammar: true }, learned: {}, quizScore: null };
  const ls = storage({ 'kw-progress-meta': JSON.stringify({ user: 'u1', bases: {} }) });
  const fetch = (url, o = {}) => {
    if (url.endsWith('/progress')) return res(200, { ok: true, user: 'u1', chapters: {} });
    const b = JSON.parse(o.body); posts.push(b);
    if (posts.length === 1) return res(409, { ok: false, error: 'conflict', record: { done: { story: true }, learned: {}, quizScore: 2 }, updatedAt: 300 });
    return res(200, { ok: true, updatedAt: 301 });
  };
  const { S } = load({ ls, fetch });
  const applied = [];
  S.attach({ id: 'a1-1', read: () => state, apply: (r) => { state = r; applied.push(r); } });
  for (let i = 0; i < 20 && posts.length < 2; i++) await new Promise((r) => setTimeout(r, 5));
  assert.equal(posts.length, 2);
  assert.equal(posts[0].baseUpdatedAt, null);
  assert.equal(posts[1].baseUpdatedAt, 300);
  assert.deepEqual(posts[1].record.done, { grammar: true, story: true });
  assert.equal(posts[1].record.quizScore, 2);
  assert.deepEqual({ ...state.done }, { grammar: true, story: true });
});

test('signed out or no endpoint: nothing is written and nothing is posted', async () => {
  for (const status of [401, 404]) {
    let calls = 0;
    const ls = storage({ 'kw-ch-a1-1': '{"done":{"story":true}}' });
    const { S } = load({ ls, fetch: () => (calls++, res(status, { ok: false })) });
    assert.equal(await S.syncAll(), false);
    assert.equal(calls, 1);
    assert.equal(ls.getItem('kw-progress-meta'), null);
  }
  const { S } = load({ fetch: () => Promise.reject(new Error('offline')) });
  assert.equal(await S.syncAll(), false);
});

test('chapter page and roadmaps are wired to the sync', () => {
  assert.match(APP, /if \(progressSync\) progressSync\.schedule\(\);/);
  assert.match(APP, /sc\.src = '\.\.\/kw-progress-sync\.js\?v=1';/);
  assert.match(APP, /if \(!snap \|\| !snap\.authenticated\) return;/);
  assert.match(APP, /state\.learnedAt = Date\.now\(\);/);
  assert.match(APP, /quizScore: null, resetAt: Date\.now\(\) \}; save\(\);\n      if \(progressSync\) progressSync\.flush\(true\);/);
  for (const lv of ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']) {
    const h = fs.readFileSync(path.join(ROOT, lv + '.html'), 'utf8');
    assert.ok(h.includes('<script src="kw-progress-sync.js?v=1"></script>'), lv);
    assert.ok(h.includes("window.addEventListener('kw:progress-synced'"), lv);
    assert.ok(h.includes('window.KWProgressSync.syncAll()'), lv);
  }
  assert.match(fs.readFileSync(path.join(ROOT, '.github/pages-allowlist.txt'), 'utf8'), /^kw-progress-sync\.js$/m);
});
