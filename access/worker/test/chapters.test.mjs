/* klarweg-access — protected paid chapter content (src/chapters.js).
   Drives the real Worker fetch handler against the in-memory D1 (real schema
   + migrations) and an in-memory private R2 seeded by the real release
   builder (scripts/chapter-lock.mjs). Deploy-branch copy: Worker tests
   only — the page rewrite and the kw-access.js guard ship from main. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import { buildRelease, loadChapters } from '../../../scripts/chapter-lock.mjs';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = path.resolve(WORKER_DIR, '..', '..');
const SITE = 'https://klarweg.in';
const API = 'https://klarweg-access.example.workers.dev';
const PAID = 'a1-9-verben';
const FREE = 'a1-1-alphabet';
const OTHER_LEVEL = 'c2-02-verben-mit-praefixen';

/* ---------- private R2 stand-in, seeded from the real release ---------- */
const OUT = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-chapters-'));
const BUILT = buildRelease({ release: 'r1', out: OUT });
function makeBucket() {
  const objects = new Map();
  for (const f of BUILT.files) objects.set(`chapters/r1/${f}`, fs.readFileSync(path.join(BUILT.dir, f)));
  return {
    objects,
    async get(key) {
      const b = objects.get(key);
      if (!b) return null;
      return { size: b.length, body: new Blob([b]).stream(), async json() { return JSON.parse(b.toString('utf8')); } };
    },
  };
}
const dataFile = (id) => fs.readFileSync(path.join(ROOT, 'chapter', loadChapters().find((c) => c.id === id).file));

function makeEnv(overrides = {}) {
  return {
    DB: createD1(WORKER_DIR),
    CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1234567890', CASHFREE_SECRET_KEY: 'cfsk_test',
    RATE_SALT: 'test-salt',
    RESOURCES: makeBucket(), CHAPTER_RELEASE: 'r1',
    ...overrides,
  };
}

const ctx = { waitUntil() {} };
/* A classic <script src> request: cookie and Referer, never an Origin. */
async function script(env, id, { cookie, referer = SITE + '/chapter/chapter-' + id + '.html' } = {}) {
  const h = { 'CF-Connecting-IP': '203.0.113.' + Math.floor(Math.random() * 200) };
  if (cookie) h.cookie = cookie;
  if (referer) h.referer = referer;
  const res = await worker.fetch(new Request(`${API}/chapters/${id}.js`, { headers: h }), env, ctx);
  const buf = Buffer.from(await res.arrayBuffer());
  return { status: res.status, headers: res.headers, buf, text: buf.toString('utf8') };
}
async function signupUser(env) {
  const res = await worker.fetch(new Request(API + '/auth/signup', {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: SITE, 'CF-Connecting-IP': '198.51.100.' + Math.floor(Math.random() * 200) },
    body: JSON.stringify({ email: `u${Math.random().toString(36).slice(2)}@example.com`, password: 'correct-horse-9', name: 'Test' }),
  }), env, ctx);
  const body = await res.json();
  assert.equal(res.status, 201, JSON.stringify(body));
  return { cookie: res.headers.get('set-cookie').split(';')[0], id: body.user.id };
}
async function grant(env, userId, product, expiresAt = null) {
  await env.DB.prepare('INSERT INTO user_entitlements (user_id, product_id, granted_at, expires_at) VALUES (?1, ?2, ?3, ?4)')
    .bind(userId, product, Math.floor(Date.now() / 1000), expiresAt).run();
}
/* What a page would hold in window.CHAPTER after loading this script. */
function evalChapter(text) {
  const sandbox = { window: {} };
  vm.runInNewContext(text, sandbox);
  return sandbox.window.CHAPTER;
}
function assertStub(r, id, reason) {
  assert.equal(r.status, 200, 'a stub must be a 200 or the browser never runs it');
  assert.equal(r.headers.get('content-type'), 'text/javascript; charset=utf-8');
  assert.equal(r.headers.get('cache-control'), 'private, no-store');
  const C = evalChapter(r.text);
  assert.equal(C.id, id);
  assert.equal(C.kwLocked, reason);
  for (const [k, v] of Object.entries(C)) {
    if (['id', 'title', 'kwLocked', 'number'].includes(k)) continue;
    const empty = v === null || v === 0 || (Array.isArray(v) ? v.length === 0 : typeof v === 'object' && Object.keys(v).length === 0);
    assert.ok(empty, `stub field ${k} must be empty — a stub carries no content`);
  }
  // The runtime reads these while it loads, before the guard: they must have the right type.
  assert.ok(Array.isArray(C.sections) && typeof C.xp === 'number');
  assert.ok(r.text.length < 700, 'stub is metadata only');
  return C;
}
function assertContent(r, id) {
  assert.equal(r.status, 200);
  assert.equal(r.headers.get('content-type'), 'text/javascript; charset=utf-8');
  assert.equal(r.headers.get('cache-control'), 'private, no-store');
  assert.equal(r.headers.get('x-content-type-options'), 'nosniff');
  assert.ok(r.buf.equals(dataFile(id)), 'byte-for-byte the chapter data file');
  assert.equal(evalChapter(r.text).id, id);
}

/* ---------- access ---------- */
test('signed out — paid chapter is a metadata stub with the public title', async () => {
  const env = makeEnv();
  const C = assertStub(await script(env, PAID), PAID, 'signed_out');
  assert.equal(C.title, loadChapters().find((c) => c.id === PAID).title);
});

test('signed in without the level — not_entitled stub', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  assertStub(await script(env, PAID, { cookie: u.cookie }), PAID, 'not_entitled');
});

test('level owner — full content; other levels stay locked', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  await grant(env, u.id, 'A1');
  assertContent(await script(env, PAID, { cookie: u.cookie }), PAID);
  assertStub(await script(env, OTHER_LEVEL, { cookie: u.cookie }), OTHER_LEVEL, 'not_entitled');
});

test('Lifetime — every level', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  await grant(env, u.id, 'LIFETIME');
  assertContent(await script(env, PAID, { cookie: u.cookie }), PAID);
  assertContent(await script(env, OTHER_LEVEL, { cookie: u.cookie }), OTHER_LEVEL);
});

test('expired level entitlement — locked again', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  await grant(env, u.id, 'A1', Math.floor(Date.now() / 1000) - 60);
  assertStub(await script(env, PAID, { cookie: u.cookie }), PAID, 'not_entitled');
});

test('free Chapter 1 — content without a session', async () => {
  assertContent(await script(makeEnv(), FREE), FREE);
});

test('a forged or revoked session cookie is not a session', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  await grant(env, u.id, 'A1');
  assertStub(await script(env, PAID, { cookie: 'kw_session=forged-token-value' }), PAID, 'signed_out');
  await worker.fetch(new Request(API + '/auth/logout', { method: 'POST', headers: { cookie: u.cookie, origin: SITE } }), env, ctx);
  assertStub(await script(env, PAID, { cookie: u.cookie }), PAID, 'signed_out');
});

/* ---------- embedding by another site ---------- */
test('foreign Referer is refused even for an owner; site and missing Referer are served', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  await grant(env, u.id, 'A1');
  assertStub(await script(env, PAID, { cookie: u.cookie, referer: 'https://evil.example/steal.html' }), PAID, 'unavailable');
  assertStub(await script(env, PAID, { cookie: u.cookie, referer: 'not a url' }), PAID, 'unavailable');
  assertContent(await script(env, PAID, { cookie: u.cookie, referer: 'https://klarweg.in/chapter/x.html' }), PAID);
  assertContent(await script(env, PAID, { cookie: u.cookie, referer: null }), PAID);
});

/* ---------- configuration and storage failures fail closed ---------- */
test('no release, bad release, missing index or object — unavailable, never content', async () => {
  const u = { cookie: null };
  for (const overrides of [{ CHAPTER_RELEASE: undefined }, { CHAPTER_RELEASE: '../r1' }, { RESOURCES: undefined }, { CHAPTER_RELEASE: 'r9' }]) {
    assertStub(await script(makeEnv(overrides), FREE, u), FREE, 'unavailable');
  }
  const env = makeEnv();
  const owner = await signupUser(env);
  await grant(env, owner.id, 'A1');
  env.RESOURCES.objects.delete(`chapters/r1/${PAID}.js`);
  assertStub(await script(env, PAID, { cookie: owner.cookie }), PAID, 'unavailable');
});

test('unknown or malformed chapter ids — 404, nothing read', async () => {
  const env = makeEnv();
  assert.equal((await script(env, 'a1-99-not-a-chapter')).status, 404);
  assert.equal((await script(env, 'x9-2-nope')).status, 404);
  for (const p of ['/chapters/..%2Fr1%2Findex.js', '/chapters/a1-9-verben.json', '/chapters/A1-9-VERBEN.js', '/chapters/index.js']) {
    const res = await worker.fetch(new Request(API + p), env, ctx);
    assert.equal(res.status, 404, p);
  }
});

test('stub title is an inert JS literal', async () => {
  const hostile = 'Bad </script><script>alert(1)</script> \u2028 \u2029 "q" \'s\'';
  const env = makeEnv();
  const idx = JSON.parse(env.RESOURCES.objects.get('chapters/r1/index.json'));
  idx.chapters[PAID].title = hostile;
  env.RESOURCES.objects.set('chapters/r2/index.json', Buffer.from(JSON.stringify(idx)));
  env.CHAPTER_RELEASE = 'r2';
  const r = await script(env, PAID);
  assert.ok(!r.text.includes('</script>') && !r.text.includes('\u2028'));
  assert.equal(assertStub(r, PAID, 'signed_out').title, hostile);
});

/* ---------- the release covers every chapter ---------- */
test('the release indexes every chapter with its title', () => {
  const chapters = loadChapters();
  assert.equal(chapters.length, 258);
  assert.equal(chapters.filter((c) => c.number === 1).length, 6);
  const index = JSON.parse(fs.readFileSync(path.join(BUILT.dir, 'index.json'), 'utf8'));
  assert.deepEqual(Object.keys(index.chapters).sort(), chapters.map((c) => c.id).sort());
  assert.ok(chapters.every((c) => index.chapters[c.id].title === c.title));
});
