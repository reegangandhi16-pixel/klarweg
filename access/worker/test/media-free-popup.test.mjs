/* Hotfix 2026-11-04: word-popup audio on the free pages (FREE_POPUP_MEDIA).

   The popup speaker and paradigm cells (conjugation / plural / comparison forms)
   on the homepage and the six Chapter 1 pages play their own word files. They
   were missing from the free list, so free learners got 401. These tests pin
   that exactly those files are now free for anyone, that the addition is word
   audio only, and that every paid file stays behind the purchase check. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import { classify, _resetMediaCache } from '../src/media.js';
import { FREE_MEDIA, FREE_POPUP_MEDIA } from '../src/media-free.js';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://klarweg.in';
const ctx = { waitUntil() {} };
const J = (o) => JSON.stringify(o);

/* Real popup files from free pages (A1·1 crawl): headword form, conjugation, plural form. */
const MUTTER = 'vocab/public/audio/forms/0629c55de58058cc.mp3';       // Mutter (A1·1 popup speaker)
const MUESSEN = 'vocab/audio/conjugation/female/muessen-6dfe425754401a63.mp3';  // müssen
const FRAGTE = 'vocab/audio/conjugation/female/fragte-f98696544ab27d30.mp3';    // fragte (paradigm cell)
const POPUP_WORD = FREE_POPUP_MEDIA.find((k) => k.startsWith('words/female/'));
const POPUP_VOCAB = FREE_POPUP_MEDIA.find((k) => k.startsWith('vocab/audio/female/'));
/* Paid fixtures: listed in the manifests (used), but NOT on any free list. */
const PAID_CONJ = 'vocab/audio/conjugation/female/zzpaid-0000000000000001.mp3';
const PAID_FORM = 'vocab/public/audio/forms/zzzz00000000paid.mp3';
const PAID_WORD = 'words/female/zzzz000000000paid.mp3';
const PAID_LESSON = 'story/A1_017_S003.mp3';

const AUDIO = {
  [MUTTER]: 'mutter', [MUESSEN]: 'muessen', [FRAGTE]: 'fragte', [POPUP_WORD]: 'popup-word', [POPUP_VOCAB]: 'popup-vocab',
  [PAID_CONJ]: 'paid-conj', [PAID_FORM]: 'paid-form', [PAID_WORD]: 'paid-word', [PAID_LESSON]: 'paid-lesson',
  'a1-words-manifest.json': J({ Paid: { female: '/audio/' + PAID_WORD } }),
  'a2-words-manifest.json': '{}', 'b1-words-manifest.json': '{}',
  'vocab/manifest.json': '{}',
  'vocab/manifest-word-form.json': J({ paidform: PAID_FORM.slice(6) }),
  'vocab/manifest-conjugation.json': J({ paidconj: PAID_CONJ.slice(6) }),
};
function audioBucket() {
  return {
    async head(k) { const v = AUDIO[k]; return v == null ? null : { size: Buffer.byteLength(v), httpEtag: '"e"' }; },
    async get(k, opts) {
      const v = AUDIO[k]; if (v == null) return null;
      if (k.endsWith('.json')) return { async text() { return v; }, body: new Blob([Buffer.from(v)]).stream() };
      let b = Buffer.from(v);
      if (opts && opts.range) b = b.subarray(opts.range.offset, opts.range.offset + opts.range.length);
      return { body: new Blob([b]).stream() };
    },
  };
}
function chapterBucket() {
  const o = new Map([
    ['chapters/r4/index.json', J({ chapters: { 'a1-17-goethe2': { title: 'G' } } })],
    ['chapters/r4/a1-17-goethe2.js', 'window.CHAPTER = {};\nwindow.KW_CHAPTER_AUDIO = ' + J({ chapter: 'a1-17-goethe2', entries: { 'Satz.': { file: 'audio/' + PAID_LESSON } }, timing: {} }) + ';\n'],
  ]);
  return { async get(k) { const v = o.get(k); return v == null ? null : { async text() { return v; }, async json() { return JSON.parse(v); } }; } };
}
function makeEnv() {
  _resetMediaCache();
  return {
    DB: createD1(WORKER_DIR),
    CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1234567890', CASHFREE_SECRET_KEY: 'cfsk_test', RATE_SALT: 'test-salt',
    MEDIA: audioBucket(), RESOURCES: chapterBucket(), CHAPTER_RELEASE: 'r4',
  };
}
async function signup(env) {
  const res = await worker.fetch(new Request(SITE + '/api/auth/signup', {
    method: 'POST', headers: { 'content-type': 'application/json', origin: SITE, 'CF-Connecting-IP': '198.51.100.' + Math.floor(Math.random() * 200) },
    body: JSON.stringify({ email: `p${Math.random().toString(36).slice(2)}@example.com`, password: 'correct-horse-9', name: 'Test' }),
  }), env, ctx);
  assert.equal(res.status, 201);
  return res.headers.get('set-cookie').split(';')[0];
}
async function media(env, key, cookie) {
  const h = { referer: SITE + '/chapter/chapter-a1-1-alphabet.html' };
  if (cookie) h.cookie = cookie;
  const res = await worker.fetch(new Request(SITE + '/api/media/' + key, { headers: h }), env, ctx);
  return { status: res.status, cc: res.headers.get('cache-control'), body: Buffer.from(await res.arrayBuffer()).toString('utf8') };
}

test('popup additions are word audio only: never a lesson clip, chapter data, dictionary or manifest', () => {
  assert.ok(FREE_POPUP_MEDIA.length > 0);
  assert.equal(new Set(FREE_POPUP_MEDIA).size, FREE_POPUP_MEDIA.length, 'no duplicates');
  for (const k of FREE_POPUP_MEDIA) {
    assert.match(k, /^(words\/female\/[0-9a-f]{16}|vocab\/audio\/female\/[^/]+|vocab\/audio\/conjugation\/female\/[^/]+|vocab\/public\/audio\/forms\/[0-9a-f]{16})\.mp3$/, k);
    assert.ok(!/^(story|listening|reading|speaking|dialogues|chapters|lexicon)\//.test(k), k);
    assert.deepEqual(classify(k), { free: true }, k);
  }
});

test('the original page list is unchanged and still free; the union is exactly both lists', () => {
  for (const k of FREE_POPUP_MEDIA) assert.ok(FREE_MEDIA.has(k));
  const lessons = [...FREE_MEDIA].filter((k) => /^(story|listening|reading|speaking)\//.test(k));
  for (const k of lessons) assert.match(k, /^(story|listening|reading|speaking)\/[ABC][12]_001_/, 'only Chapter 1 lesson clips: ' + k);
});

test('signed out: the exact free popup files play (200, public cache)', async () => {
  const env = makeEnv();
  for (const k of [MUTTER, MUESSEN, FRAGTE, POPUP_WORD, POPUP_VOCAB]) {
    assert.ok(FREE_POPUP_MEDIA.includes(k), k);
    const r = await media(env, k);
    assert.equal(r.status, 200, k);
    assert.equal(r.body, AUDIO[k]);
    assert.match(r.cc, /^public/);
  }
});

test('signed out: paid word, form, conjugation and lesson audio stay 401', async () => {
  const env = makeEnv();
  for (const k of [PAID_CONJ, PAID_FORM, PAID_WORD, PAID_LESSON]) {
    assert.ok(!FREE_MEDIA.has(k), k);
    const r = await media(env, k);
    assert.equal(r.status, 401, k);
    assert.equal(r.cc, 'private, no-store');
  }
});

test('signed in without a purchase: free popup files 200, paid audio 403', async () => {
  const env = makeEnv();
  const cookie = await signup(env);
  assert.equal((await media(env, MUESSEN, cookie)).status, 200);
  assert.equal((await media(env, MUTTER, cookie)).status, 200);
  for (const k of [PAID_CONJ, PAID_FORM, PAID_WORD, PAID_LESSON]) assert.equal((await media(env, k, cookie)).status, 403, k);
});
