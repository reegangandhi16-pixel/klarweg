/* media.js — klarweg.in/api/media/<key>: key validation, free vs paid, the
   existing session + purchase check on every paid request, used-files-only
   (chapter payload / word manifest), Range/HEAD/304, cache headers, and that
   nothing outside klarweg.in is served. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import { parseRange, classify, _resetMediaCache, MANIFESTS } from '../src/media.js';
import { FREE_MEDIA } from '../src/media-free.js';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://klarweg.in';
const MEDIA = SITE + '/api/media/';
const ctx = { waitUntil() {} };

/* Real keys from media-free.js, plus paid fixtures. */
const FREE_WORD = [...FREE_MEDIA].find((k) => k.startsWith('words/'));
const FREE_OTHER = [...FREE_MEDIA].find((k) => k.startsWith('dialogues/'));
const FREE_CH1 = [...FREE_MEDIA].find((k) => /^story\/A1_001_/.test(k));
const J = (o) => JSON.stringify(o);
const AUDIO = {
  [FREE_CH1]: 'free-a1-chapter-1',
  [FREE_WORD]: 'free-word',
  [FREE_OTHER]: 'free-line',
  'story/A1_017_S003.mp3': 'paid-a1-17-' + 'x'.repeat(1000),
  'speaking/B2_009_P001.mp3': 'paid-b2-9',
  'words/female/bbbb000000000002.mp3': 'paid-word',
  'words/male/bbbb000000000002.mp3': 'paid-word-male',
  'vocab/audio/female/café.mp3': 'paid-word-accent',
  'dialogues/not-on-free-list.mp3': 'restricted-line',
  /* Unused recordings: in the bucket, but no page plays them. */
  'story/A1_017_S099.mp3': 'unused-lesson',
  'story/A1_001_S999.mp3': 'unused-chapter-1',
  'words/female/cccc000000000003.mp3': 'unused-word',
  'vocab/audio/male/unbenutzt.mp3': 'unused-vocab',
  /* The word manifests the player loads from this bucket. */
  'a1-words-manifest.json': J({ Haus: { female: '/audio/words/female/bbbb000000000002.mp3', male: '/audio/words/male/bbbb000000000002.mp3' } }),
  'a2-words-manifest.json': '{}',
  'b1-words-manifest.json': '{}',
  'vocab/manifest.json': J({ 'Café': { female: 'audio/female/café.mp3', male: 'audio/male/café.mp3' } }),
  'vocab/manifest-word-form.json': '{}',
  'vocab/manifest-conjugation.json': '{}',
};
/* Gated chapter payloads (klarweg-resources chapters/<release>/), as chapter-lock builds them. */
function chapterBucket(release = 'r3') {
  const o = new Map([
    [`chapters/${release}/index.json`, J({ chapters: { 'a1-1-alphabet': { title: 'A' }, 'a1-17-goethe2': { title: 'G' }, 'b2-09-passiv': { title: 'P' } } })],
    [`chapters/${release}/a1-1-alphabet.js`, 'window.CHAPTER = {};\n'],
    [`chapters/${release}/a1-17-goethe2.js`, 'window.CHAPTER = {};\nwindow.KW_CHAPTER_AUDIO = ' + J({ chapter: 'a1-17-goethe2', entries: { 'Satz.': { id: 'A1_017_S003', file: 'audio/story/A1_017_S003.mp3' } }, timing: {} }) + ';\n'],
    [`chapters/${release}/b2-09-passiv.js`, 'window.CHAPTER = {};\nwindow.KW_CHAPTER_AUDIO = ' + J({ chapter: 'b2-09-passiv', entries: { 'X.': { file: 'audio/speaking/B2_009_P001.mp3' } }, timing: {} }) + ';\n'],
  ]);
  return { async get(k) { const v = o.get(k); return v == null ? null : { async text() { return v; }, async json() { return JSON.parse(v); } }; } };
}
function audioBucket() {
  const calls = [];
  const etag = (k) => '"' + Buffer.from(k).toString('hex').slice(0, 16) + '"';
  return {
    calls,
    async head(k) { if (k.endsWith('.mp3')) calls.push(['head', k]); const v = AUDIO[k]; return v == null ? null : { size: Buffer.byteLength(v), httpEtag: etag(k) }; },
    async get(k, opts) {
      const v = AUDIO[k];
      if (k.endsWith('.json')) return v == null ? null : { async text() { return v; }, body: new Blob([Buffer.from(v)]).stream() };
      calls.push(['get', k, opts]); if (v == null) return null;
      let b = Buffer.from(v);
      if (opts && opts.range) b = b.subarray(opts.range.offset, opts.range.offset + opts.range.length);
      return { body: new Blob([b]).stream() };
    },
  };
}
function makeEnv(over = {}) {
  _resetMediaCache();
  return {
    DB: createD1(WORKER_DIR),
    CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1234567890', CASHFREE_SECRET_KEY: 'cfsk_test', RATE_SALT: 'test-salt',
    MEDIA: audioBucket(), RESOURCES: chapterBucket(), CHAPTER_RELEASE: 'r3',
    ...over,
  };
}
async function signup(env) {
  const res = await worker.fetch(new Request(SITE + '/api/auth/signup', {
    method: 'POST', headers: { 'content-type': 'application/json', origin: SITE, 'CF-Connecting-IP': '198.51.100.' + Math.floor(Math.random() * 200) },
    body: JSON.stringify({ email: `u${Math.random().toString(36).slice(2)}@example.com`, password: 'correct-horse-9', name: 'Test' }),
  }), env, ctx);
  const body = await res.json();
  assert.equal(res.status, 201, JSON.stringify(body));
  return { id: body.user.id, cookie: res.headers.get('set-cookie').split(';')[0] };
}
async function grant(env, userId, product, expiresAt = null) {
  await env.DB.prepare('INSERT INTO user_entitlements (user_id, product_id, granted_at, expires_at) VALUES (?1, ?2, ?3, ?4)')
    .bind(userId, product, Math.floor(Date.now() / 1000), expiresAt).run();
}
async function media(env, key, { cookie, method = 'GET', headers = {}, base = MEDIA, referer = SITE + '/chapter/x.html' } = {}) {
  const h = { ...headers };
  if (referer) h.referer = referer;
  if (cookie) h.cookie = cookie;
  const res = await worker.fetch(new Request(base + key, { method, headers: h }), env, ctx);
  const buf = Buffer.from(await res.arrayBuffer());
  return { status: res.status, h: res.headers, text: buf.toString('utf8') };
}

test('classify: free list, Chapter 1 by rule, paid lesson by level, word prefixes, else 404', () => {
  assert.deepEqual(classify(FREE_WORD), { free: true });
  assert.deepEqual(classify(FREE_CH1), { free: true });
  assert.deepEqual(classify('story/A1_001_S999.mp3'), { level: 'A1', number: 1 });   // Chapter 1 is free only if listed
  assert.deepEqual(classify('story/A1_017_S003.mp3'), { level: 'A1', number: 17 });
  assert.deepEqual(classify('speaking/B2_009_P001.mp3'), { level: 'B2', number: 9 });
  assert.equal(classify('vocab/audio/conjugation/x.mp3').level, 'any');
  assert.equal(classify('vocab/audio/conjugation/x.mp3').needle, '"audio/conjugation/x.mp3"');
  assert.equal(classify('words/male/x.mp3').needle, '"/audio/words/male/x.mp3"');
  assert.equal(classify('dialogues/not-on-free-list.mp3'), null);
  assert.equal(classify('a1-words-manifest.json'), null);
});

test('free list holds no paid lesson clip', () => {
  for (const k of FREE_MEDIA) {
    const m = /^(story|listening|reading|speaking)\/[ABC][12]_(\d{3})_/.exec(k);
    assert.ok(!m || Number(m[2]) === 1, k);
  }
});

test('parseRange (ported from the audio Worker)', () => {
  assert.equal(parseRange(null, 100), null);
  assert.deepEqual(parseRange('bytes=0-9', 100), { offset: 0, length: 10 });
  assert.deepEqual(parseRange('bytes=90-', 100), { offset: 90, length: 10 });
  assert.deepEqual(parseRange('bytes=-10', 100), { offset: 90, length: 10 });
  assert.deepEqual(parseRange('bytes=100-', 100), { invalid: true });
  assert.deepEqual(parseRange('bytes=-0', 100), { invalid: true });
});

test('only klarweg.in: workers.dev answers 404', async () => {
  const env = makeEnv();
  const r = await media(env, FREE_CH1, { base: 'https://klarweg-access.example.workers.dev/media/' });
  assert.equal(r.status, 404);
  assert.equal(env.MEDIA.calls.length, 0);
});

test('malformed keys → 404 before any read', async () => {
  const env = makeEnv();
  for (const k of ['..%2Fsecret.mp3', 'story//A1_017_S003.mp3', 'story/A1_017_S003.wav', '%E0%A4%A.mp3', '.hidden.mp3']) {
    assert.equal((await media(env, k)).status, 404, k);
  }
  assert.equal(env.MEDIA.calls.length, 0);
});

test('no MEDIA binding → 503', async () => {
  assert.equal((await media(makeEnv({ MEDIA: undefined }), FREE_CH1)).status, 503);
});

test('free audio: anyone, public cache times', async () => {
  const env = makeEnv();
  const a = await media(env, FREE_CH1);
  assert.equal(a.status, 200);
  assert.equal(a.text, 'free-a1-chapter-1');
  assert.equal(a.h.get('cache-control'), 'public, max-age=86400');
  assert.equal(a.h.get('content-type'), 'audio/mpeg');
  const w = await media(env, FREE_WORD);
  assert.equal(w.status, 200);
  assert.equal(w.h.get('cache-control'), 'public, max-age=31536000, immutable');
  assert.equal((await media(env, FREE_OTHER)).status, 200);
});

test('Range → 206, invalid → 416, HEAD reads no body, If-None-Match → 304', async () => {
  const env = makeEnv();
  const r = await media(env, FREE_CH1, { headers: { range: 'bytes=0-3' } });
  assert.equal(r.status, 206);
  assert.equal(r.text, 'free');
  assert.equal(r.h.get('content-range'), 'bytes 0-3/17');
  assert.equal((await media(env, FREE_CH1, { headers: { range: 'bytes=99-' } })).status, 416);
  const before = env.MEDIA.calls.filter((c) => c[0] === 'get').length;
  const h = await media(env, FREE_CH1, { method: 'HEAD' });
  assert.equal(h.status, 200);
  assert.equal(h.h.get('content-length'), '17');
  assert.equal(env.MEDIA.calls.filter((c) => c[0] === 'get').length, before);
  const etag = (await media(env, FREE_CH1)).h.get('etag');
  assert.equal((await media(env, FREE_CH1, { headers: { 'if-none-match': etag } })).status, 304);
});

test('foreign Referer → 403; missing Referer allowed', async () => {
  const env = makeEnv();
  assert.equal((await media(env, FREE_CH1, { referer: 'https://evil.example/' })).status, 403);
  assert.equal((await media(env, FREE_CH1, { referer: null })).status, 200);
});

test('restricted non-chapter lines and unknown keys → 404 for everyone', async () => {
  const env = makeEnv();
  const u = await signup(env);
  await grant(env, u.id, 'LIFETIME');
  assert.equal((await media(env, 'dialogues/not-on-free-list.mp3', { cookie: u.cookie })).status, 404);
  assert.equal((await media(env, 'misc/whatever.mp3', { cookie: u.cookie })).status, 404);
});

test('signed out → 401 for paid lesson and word audio; refusals are private, no-store', async () => {
  const env = makeEnv();
  for (const k of ['story/A1_017_S003.mp3', 'words/female/bbbb000000000002.mp3']) {
    const r = await media(env, k);
    assert.equal(r.status, 401, k);
    assert.equal(r.h.get('cache-control'), 'private, no-store');
  }
  const bad = await media(env, 'story/A1_017_S003.mp3', { cookie: 'kw_session=forged' });
  assert.equal(bad.status, 401);
  assert.equal(env.MEDIA.calls.length, 0);
});

test('signed in without a purchase → 403', async () => {
  const env = makeEnv();
  const u = await signup(env);
  assert.equal((await media(env, 'story/A1_017_S003.mp3', { cookie: u.cookie })).status, 403);
  assert.equal((await media(env, 'words/female/bbbb000000000002.mp3', { cookie: u.cookie })).status, 403);
  assert.equal(env.MEDIA.calls.length, 0);
});

test('A1 buyer: A1 lesson + word audio 200 (private, no-store), B2 lesson 403', async () => {
  const env = makeEnv();
  const u = await signup(env);
  await grant(env, u.id, 'A1');
  const a = await media(env, 'story/A1_017_S003.mp3', { cookie: u.cookie });
  assert.equal(a.status, 200);
  assert.ok(a.text.startsWith('paid-a1-17-'));
  assert.equal(a.h.get('cache-control'), 'private, no-store');
  assert.equal(a.h.get('cross-origin-resource-policy'), 'same-origin');
  assert.equal((await media(env, 'words/female/bbbb000000000002.mp3', { cookie: u.cookie })).status, 200);
  assert.equal((await media(env, 'vocab/audio/female/caf%C3%A9.mp3', { cookie: u.cookie })).status, 200);
  assert.equal((await media(env, 'speaking/B2_009_P001.mp3', { cookie: u.cookie })).status, 403);
  const r = await media(env, 'story/A1_017_S003.mp3', { cookie: u.cookie, headers: { range: 'bytes=0-9' } });
  assert.equal(r.status, 206);
  assert.equal(r.text, 'paid-a1-17');
});

test('Lifetime unlocks every level; an expired level does not', async () => {
  const env = makeEnv();
  const life = await signup(env);
  await grant(env, life.id, 'LIFETIME');
  assert.equal((await media(env, 'speaking/B2_009_P001.mp3', { cookie: life.cookie })).status, 200);
  const old = await signup(env);
  await grant(env, old.id, 'A1', Math.floor(Date.now() / 1000) - 60);
  assert.equal((await media(env, 'story/A1_017_S003.mp3', { cookie: old.cookie })).status, 403);
  assert.equal((await media(env, 'words/female/bbbb000000000002.mp3', { cookie: old.cookie })).status, 403);
});

test('after logout the same cookie → 401 (checked on every request)', async () => {
  const env = makeEnv();
  const u = await signup(env);
  await grant(env, u.id, 'A1');
  assert.equal((await media(env, 'story/A1_017_S003.mp3', { cookie: u.cookie })).status, 200);
  const out = await worker.fetch(new Request(SITE + '/api/auth/logout', { method: 'POST', headers: { origin: SITE, cookie: u.cookie } }), env, ctx);
  assert.equal(out.status, 200);
  assert.equal((await media(env, 'story/A1_017_S003.mp3', { cookie: u.cookie })).status, 401);
});

test('unused recordings → 404 for everyone, Lifetime buyers included', async () => {
  const env = makeEnv();
  const u = await signup(env);
  await grant(env, u.id, 'LIFETIME');
  for (const k of ['story/A1_017_S099.mp3', 'story/A1_001_S999.mp3', 'words/female/cccc000000000003.mp3', 'vocab/audio/male/unbenutzt.mp3']) {
    const r = await media(env, k, { cookie: u.cookie });
    assert.equal(r.status, 404, k);
    assert.equal(r.h.get('cache-control'), 'private, no-store');
  }
  assert.equal(env.MEDIA.calls.length, 0, 'no audio object was even looked up');
  // …while the used files next to them are served
  assert.equal((await media(env, 'story/A1_017_S003.mp3', { cookie: u.cookie })).status, 200);
  assert.equal((await media(env, 'words/male/bbbb000000000002.mp3', { cookie: u.cookie })).status, 200);
});

test('used-files list unreadable → 503 (fail closed), never served', async () => {
  const noManifest = makeEnv({ MEDIA: { ...audioBucket(), async get(k, o) { return k.endsWith('.json') ? null : audioBucket().get(k, o); } } });
  const a = await signup(noManifest);
  await grant(noManifest, a.id, 'LIFETIME');
  assert.equal((await media(noManifest, 'words/female/bbbb000000000002.mp3', { cookie: a.cookie })).status, 503);
  const noPayload = makeEnv({ CHAPTER_RELEASE: 'r9' });
  const b = await signup(noPayload);
  await grant(noPayload, b.id, 'LIFETIME');
  assert.equal((await media(noPayload, 'story/A1_017_S003.mp3', { cookie: b.cookie })).status, 503);
});

test('the six word manifests: public JSON for anyone on klarweg.in, like the old audio Worker', async () => {
  const env = makeEnv();
  assert.equal(MANIFESTS.size, 6);
  for (const f of MANIFESTS) {
    const r = await media(env, f, { referer: null });
    assert.equal(r.status, 200, f);
    assert.equal(r.text, AUDIO[f]);
    assert.equal(r.h.get('content-type'), 'application/json; charset=utf-8');
    assert.equal(r.h.get('cache-control'), 'public, max-age=300');
    assert.equal(r.h.get('cross-origin-resource-policy'), 'same-origin');
  }
  const h = await media(env, 'vocab/manifest.json', { method: 'HEAD' });
  assert.equal(h.status, 200);
  assert.equal(h.text, '');
  assert.equal((await media(env, 'a1-words-manifest.json', { referer: 'https://evil.example/' })).status, 403);
  // only those six names: no other JSON, no path tricks
  for (const k of ['manifest.json', 'manifest-public.json', 'a1-words-manifest.json.bak', 'vocab%2F..%2Fa1-words-manifest.json', '..%2Fa1-words-manifest.json', 'vocab%2Fmanifest.json', 'A1-words-manifest.json', 'c1-words-manifest.json']) {
    assert.equal((await media(env, k)).status, 404, k);
  }
  assert.equal((await media(makeEnv({ MEDIA: undefined }), 'vocab/manifest.json')).status, 503);
});

test('production domain enforces authorization; direct workers.dev cannot bypass it', async () => {
  const env = makeEnv();
  const u = await signup(env);
  await grant(env, u.id, 'LIFETIME');
  const PAID = ['story/A1_017_S003.mp3', 'speaking/B2_009_P001.mp3', 'words/female/bbbb000000000002.mp3', 'vocab/audio/female/caf%C3%A9.mp3'];
  // klarweg.in/api/media: signed out → 401, signed-in buyer → 200
  for (const k of PAID) {
    assert.equal((await media(env, k)).status, 401, 'signed out ' + k);
    assert.equal((await media(env, k, { cookie: u.cookie })).status, 200, 'buyer ' + k);
  }
  // Any other host — the Worker's workers.dev URL (with or without /api), www, a look-alike —
  // answers 404 for every media file, even with a valid buyer cookie, and never touches the bucket.
  env.MEDIA.calls.length = 0;
  const token = u.cookie.split('=').slice(1).join('=');
  const bases = [
    'https://klarweg-access.klarweg-issue-reports-2026.workers.dev/media/',
    'https://klarweg-access.klarweg-issue-reports-2026.workers.dev/api/media/',
    'https://www.klarweg.in/api/media/',
    'https://klarweg.in.evil.example/api/media/',
  ];
  for (const base of bases) {
    for (const k of [...PAID, FREE_CH1, 'story/A1_017_S099.mp3', 'vocab/manifest.json']) {
      for (const cookie of [undefined, u.cookie, 'kw_session_x=' + token]) {
        const r = await media(env, k, { base, cookie });
        assert.equal(r.status, 404, base + k);
        assert.notEqual(r.h.get('content-type'), 'audio/mpeg');
      }
      const auth = await media(env, k, { base, headers: { authorization: 'Bearer ' + token } });
      assert.equal(auth.status, 404, 'bearer ' + base + k);
    }
  }
  assert.equal(env.MEDIA.calls.length, 0, 'no audio object read for any other host');
});

test('media.js never writes, deletes or lists the bucket', () => {
  const src = fs.readFileSync(path.join(WORKER_DIR, 'src/media.js'), 'utf8');
  assert.doesNotMatch(src, /MEDIA\.(put|delete|list|createMultipartUpload)\b/);
});
