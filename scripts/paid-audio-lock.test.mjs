/* Paid lesson text never ships publicly through the audio files.
   public/audio/manifest.json (full corpus) and audio-timing/ hold the text of
   every story, listening, reading and speaking line. Only the free Chapter 1,
   homepage and legacy lines may be public; a paid chapter's lines and word
   timing travel inside its gated payload (scripts/chapter-lock.mjs). */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { splitAudio, releasePayload, loadChapters } from './chapter-lock.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const FULL = JSON.parse(read('public/audio/manifest.json')).entries;
const PUB = JSON.parse(read('public/audio/manifest-public.json')).entries;
const allow = read('.github/pages-allowlist.txt').split('\n').map((l) => l.trim());
const isPaidChapter = (id) => typeof id === 'string' && !/^(a1|a2|b1|b2|c1|c2)-0?1-/.test(id);

test('the public manifest holds no paid chapter line', () => {
  for (const [text, v] of Object.entries(PUB)) assert.ok(!(v && isPaidChapter(v.chapter)), 'paid line public: ' + text.slice(0, 60));
  const freeOrHome = Object.entries(FULL).filter(([, v]) => !(v && isPaidChapter(v.chapter)));
  assert.equal(Object.keys(PUB).length, freeOrHome.length, 'every free, homepage and legacy line is still public');
});

test('the full manifest is never published', () => {
  assert.ok(!allow.includes('public/audio/manifest.json'));
  assert.ok(allow.includes('public/audio/manifest-public.json'));
  assert.ok(!allow.some((l) => l.startsWith('GLOB:audio-timing')), 'no glob over audio-timing');
  assert.match(read('.github/workflows/deploy-pages.yml'), /public\/audio\/manifest\.json/);
  /* Each workflow step is its own shell: a variable the assertion step uses
     must be set in that step (set -u would otherwise fail the deploy). */
  const wf = read('.github/workflows/deploy-pages.yml');
  const assertStep = wf.slice(wf.indexOf('- name: Assert no prohibited private paths in artifact'), wf.indexOf('- name: Upload artifact'));
  for (const v of new Set([...assertStep.matchAll(/\$\{?([A-Z_]+)\}?/g)].map((m) => m[1]))) {
    if (['GITHUB_OUTPUT', 'GITHUB_ENV', 'GITHUB_STEP_SUMMARY'].includes(v)) continue;
    assert.match(assertStep, new RegExp('(^|\\s)' + v + '='), 'assertion step uses $' + v + ' without setting it');
  }
});

test('only free Chapter 1 and homepage timing sidecars are public', () => {
  const paidHashes = new Set(Object.values(FULL).filter((v) => v && isPaidChapter(v.chapter) && v.contentHash).map((v) => v.contentHash));
  const listed = allow.filter((l) => l.startsWith('audio-timing/'));
  assert.ok(listed.length > 0 && listed.length < 200);
  for (const l of listed) {
    assert.ok(fs.existsSync(path.join(ROOT, l)), l + ' exists');
    assert.ok(!paidHashes.has(path.basename(l, '.json')), 'paid timing public: ' + l);
    const side = JSON.parse(read(l));
    const m = /^(A1|A2|B1|B2|C1|C2)_(\d+)_/.exec(side.id);
    assert.ok(!m || Number(m[2]) === 1, 'paid timing id ' + side.id);
  }
});

test('every paid line and timing file is delivered with its chapter', () => {
  const { paid, paidTimingCount } = splitAudio();
  let lines = 0, timing = 0;
  for (const c of loadChapters()) {
    if (c.number === 1) continue;
    const sb = { window: {} };
    vm.runInNewContext(releasePayload(c).toString('utf8'), sb);
    const A = sb.window.KW_CHAPTER_AUDIO;
    assert.equal(A.chapter, c.id);
    assert.deepEqual(Object.keys(A.entries).sort(), Object.keys((paid.get(c.id) || { entries: {} }).entries).sort());
    lines += Object.keys(A.entries).length;
    timing += Object.keys(A.timing).length;
  }
  assert.equal(lines, Object.values(FULL).filter((v) => v && isPaidChapter(v.chapter)).length);
  assert.equal(timing, paidTimingCount);
});

/* The browser side: the engine resolves a paid line from KW_CHAPTER_AUDIO,
   and word-sync uses its timing without a network request. */
function loadEngine(win) {
  vm.runInNewContext(read('public/audio/kw-audio-engine.js'), win);
}
function browser(own) {
  const fetched = [];
  const timers = [];
  const win = {
    KW_CHAPTER_AUDIO: own,
    document: { currentScript: { src: 'https://klarweg.in/public/audio/kw-audio-engine.js?v=2' }, addEventListener() {}, querySelectorAll: () => [], createElement: () => ({ style: {}, setAttribute() {}, addEventListener() {} }) },
    location: { origin: 'https://klarweg.in', href: 'https://klarweg.in/chapter/x.html' },
    navigator: { userAgent: 'node' },
    setTimeout: (f) => { timers.push(f); return timers.length; }, clearTimeout() {},
    addEventListener() {}, dispatchEvent() {}, CustomEvent: function () {},
    localStorage: { getItem: () => null, setItem() {} }, sessionStorage: { getItem: () => null, setItem() {} },
    AbortController: globalThis.AbortController, URL, Promise, console,
    fetch: (u) => { fetched.push(String(u)); const ok = /manifest-public\.json$/.test(u); return Promise.resolve({ ok, status: ok ? 200 : 404, json: () => Promise.resolve(ok ? { entries: { ...PUB } } : {}) }); },
  };
  win.window = win;
  return { win, fetched, timers };
}

test('engine: loads the public manifest and merges the chapter\'s own lines', async () => {
  const c = loadChapters().find((x) => x.number === 17 && x.id.startsWith('a1-'));
  const sb = { window: {} };
  vm.runInNewContext(releasePayload(c).toString('utf8'), sb);
  const own = sb.window.KW_CHAPTER_AUDIO;
  const [text] = Object.keys(own.entries);
  const { win, fetched, timers } = browser(own);
  loadEngine(win);
  while (timers.length) timers.shift()();
  for (let i = 0; i < 20; i++) await new Promise((r) => setImmediate(r));
  assert.ok(fetched[0].endsWith('/public/audio/manifest-public.json'), fetched[0]);
  assert.ok(!fetched.some((u) => /\/public\/audio\/manifest\.json/.test(u)), 'never asks for the full manifest: ' + fetched.join(' '));
  assert.equal(typeof win.audioUrl, 'function');
  assert.ok(win.audioUrl(text), 'paid line resolves from the gated payload');
  assert.ok(win.audioUrl(Object.keys(PUB).find((k) => PUB[k] && PUB[k].chapter)), 'public line still resolves');
});

test('engine: a chapter payload that arrives AFTER the public manifest still resolves', async () => {
  /* Page order: the engine script runs, then <script src=".../api/chapters/<id>.js">.
     The public manifest can finish loading before that Worker response arrives. */
  const c = loadChapters().find((x) => x.number === 17 && x.id.startsWith('a1-'));
  const sb = { window: {} };
  vm.runInNewContext(releasePayload(c).toString('utf8'), sb);
  const own = sb.window.KW_CHAPTER_AUDIO;
  const [text] = Object.keys(own.entries);
  const { win, timers } = browser(undefined);
  loadEngine(win);
  while (timers.length) timers.shift()();
  for (let i = 0; i < 20; i++) await new Promise((r) => setImmediate(r));
  assert.equal(win.audioUrl(text), undefined, 'not resolvable before the payload exists');
  win.KW_CHAPTER_AUDIO = own;                       // the gated payload executes now
  assert.ok(win.audioUrl(text), 'paid line resolves once the payload has run');
  assert.ok(win.audioUrl(Object.keys(PUB).find((k) => PUB[k] && PUB[k].chapter)), 'public lines unaffected');
});

test('word-sync: a chapter\'s own timing needs no request', async () => {
  const fetched = [];
  const own = { chapter: 'x', entries: {}, timing: { abcdef0123456789: { v: 1, words: [] } } };
  const win = { KW_CHAPTER_AUDIO: own, document: { currentScript: null }, fetch: (u) => { fetched.push(u); return Promise.resolve({ ok: false }); }, URL, Promise };
  win.window = win;
  vm.runInNewContext(read('public/audio/kw-word-sync.js'), win);
  assert.deepEqual(await win.KW_wordSync.loadTiming('abcdef0123456789'), own.timing.abcdef0123456789);
  assert.equal(fetched.length, 0);
  await win.KW_wordSync.loadTiming('0011223344556677');
  assert.deepEqual(fetched, ['/audio-timing/0011223344556677.json']);
});

test('a server lock stub never starts progress sync (would blank this browser\'s record)', () => {
  const app = read('chapter/chapter-app.js');
  const body = app.slice(app.indexOf('function startProgressSync()'), app.indexOf('function startProgressSync()') + 400);
  assert.match(body, /if \(C\.kwLocked\) return;/);
  assert.ok(body.indexOf('C.kwLocked') < body.indexOf('KWAccess.ready'), 'checked before any sync starts');
});
