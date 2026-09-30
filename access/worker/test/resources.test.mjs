/* klarweg-access — protected chapter-resource delivery (src/resources.js).
   Drives the real Worker fetch handler against the in-memory D1 (real schema
   + migrations) and an in-memory stand-in for the private R2 bucket. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import {
  FREE_CHAPTER_NUMBER, LINK_TTL_SECONDS, LINK_LIMIT, canonicalPayload, signLink, verifyLink,
} from '../src/resources.js';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = path.resolve(WORKER_DIR, '..', '..');
const SITE = 'https://reegangandhi16-pixel.github.io';
const API = 'https://klarweg-access.example.workers.dev';
const SECRET = 'test-resource-url-secret-0123456789abcdef';

/* ---------- private R2 stand-in ---------- */
function makeBucket() {
  const objects = new Map();
  return {
    objects,
    put(key, bytes) { objects.set(key, Buffer.from(bytes)); },
    async get(key) {
      const b = objects.get(key);
      if (!b) return null;
      return {
        size: b.length,
        body: new Blob([b]).stream(),
        async json() { return JSON.parse(b.toString('utf8')); },
      };
    },
  };
}

const PDF = (label) => Buffer.from(`%PDF-1.4\n% ${label}\n%%EOF\n`);
function seed(bucket, release = 'r1') {
  const add = (id, resources) => {
    const lvl = id.slice(0, 2);
    const index = { chapter: id, resources: {} };
    for (const [type, pages] of Object.entries(resources)) {
      const bytes = PDF(`${id}/${type}`);
      bucket.put(`${release}/pdfs/${lvl}/${id}/${type}.pdf`, bytes);
      index.resources[type] = { file: `${type}.pdf`, pages, bytes: bytes.length, contentHash: 'abcdef0123456789' };
    }
    bucket.put(`${release}/pdfs/${lvl}/${id}/index.json`, JSON.stringify(index));
  };
  add('a1-1-alphabet', { vocabulary: 3, homework: 3, grammar: 4 });
  add('a1-9-verben', { vocabulary: 3, homework: 3, grammar: 5 });
  add('c2-02-verben-mit-praefixen', { vocabulary: 18, homework: 4, grammar: 5 });
  add('c1-43-goethe-zertifikat-c1-final', { vocabulary: 2 });
  bucket.put(`${release}/manifest.json`, JSON.stringify({ version: 1 }));
}

function makeEnv(overrides = {}) {
  const RESOURCES = makeBucket();
  seed(RESOURCES);
  return {
    DB: createD1(WORKER_DIR),
    CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1234567890', CASHFREE_SECRET_KEY: 'cfsk_test',
    RATE_SALT: 'test-salt',
    RESOURCES, RESOURCE_URL_SECRET: SECRET, RESOURCE_RELEASE: 'r1',
    ...overrides,
  };
}

const ctx = { waitUntil() {} };
async function req(env, method, pathname, { cookie, origin = SITE, ip } = {}) {
  const h = { 'CF-Connecting-IP': ip || '203.0.113.' + Math.floor(Math.random() * 200) };
  if (cookie) h.cookie = cookie;
  if (origin) h.origin = origin;
  const url = pathname.startsWith('http') ? pathname : API + pathname;
  const res = await worker.fetch(new Request(url, { method, headers: h }), env, ctx);
  const buf = Buffer.from(await res.arrayBuffer());
  let json = null;
  try { json = JSON.parse(buf.toString('utf8')); } catch {}
  return { status: res.status, json, headers: res.headers, buf, text: buf.toString('utf8') };
}
async function signupUser(env) {
  const email = `u${Math.random().toString(36).slice(2)}@example.com`;
  const res = await worker.fetch(new Request(API + '/auth/signup', {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: SITE, 'CF-Connecting-IP': '198.51.100.' + Math.floor(Math.random() * 200) },
    body: JSON.stringify({ email, password: 'correct-horse-9', name: 'Test' }),
  }), env, ctx);
  const body = await res.json();
  assert.equal(res.status, 201, JSON.stringify(body));
  return { cookie: res.headers.get('set-cookie').split(';')[0], id: body.user.id };
}
async function grant(env, userId, product, expiresAt = null) {
  await env.DB.prepare('INSERT INTO user_entitlements (user_id, product_id, granted_at, expires_at) VALUES (?1, ?2, ?3, ?4)')
    .bind(userId, product, Math.floor(Date.now() / 1000), expiresAt).run();
}
const link = (env, user, id, type) => req(env, 'POST', `/resources/${id}/${type}/link`, { cookie: user.cookie });
const tamper = (u, key, value) => { const x = new URL(u); x.searchParams.set(key, value); return x.toString(); };
const swapPath = (u, from, to) => u.replace(from, to);

/* ---------- entitlement ---------- */
test('1. free Chapter 1 — any signed-in user can list, sign and download', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  const list = await req(env, 'GET', '/resources/a1-1-alphabet', { cookie: u.cookie });
  assert.equal(list.status, 200);
  assert.deepEqual(Object.keys(list.json.resources).sort(), ['grammar', 'homework', 'vocabulary']);
  const l = await link(env, u, 'a1-1-alphabet', 'vocabulary');
  assert.equal(l.status, 200);
  const f = await req(env, 'GET', l.json.url, { origin: null });
  assert.equal(f.status, 200);
  assert.equal(f.headers.get('content-type'), 'application/pdf');
  assert.equal(f.headers.get('cache-control'), 'private, no-store');
  assert.ok(f.buf.toString('latin1').startsWith('%PDF-'));
  assert.ok(f.text.includes('a1-1-alphabet/vocabulary'), 'correct chapter/resource object');
});

test('2. entitled paid chapter — allowed', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  await grant(env, u.id, 'A1');
  const l = await link(env, u, 'a1-9-verben', 'grammar');
  assert.equal(l.status, 200);
  const f = await req(env, 'GET', l.json.url, { origin: null });
  assert.equal(f.status, 200);
  assert.ok(f.text.includes('a1-9-verben/grammar'));
});

test('3. locked paid chapter — denied (list and link)', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  await grant(env, u.id, 'A2');                         // wrong level
  assert.equal((await req(env, 'GET', '/resources/a1-9-verben', { cookie: u.cookie })).status, 403);
  assert.equal((await link(env, u, 'a1-9-verben', 'grammar')).status, 403);
});

test('4. signed-out user — denied', async () => {
  const env = makeEnv();
  assert.equal((await req(env, 'GET', '/resources/a1-1-alphabet')).status, 401);
  assert.equal((await req(env, 'POST', '/resources/a1-1-alphabet/vocabulary/link')).status, 401);
});

test('5. expired entitlement — denied', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  await grant(env, u.id, 'A1', Math.floor(Date.now() / 1000) - 60);
  assert.equal((await link(env, u, 'a1-9-verben', 'grammar')).status, 403);
});

test('6. lifetime entitlement — allowed on every level', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  await grant(env, u.id, 'LIFETIME');
  assert.equal((await link(env, u, 'a1-9-verben', 'grammar')).status, 200);
  assert.equal((await link(env, u, 'c2-02-verben-mit-praefixen', 'vocabulary')).status, 200);
});

test('7. missing resource — not found; skipped personalised cards are never listed', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  await grant(env, u.id, 'LIFETIME');
  assert.equal((await link(env, u, 'a1-9-verben', 'test-paper')).status, 404);
  assert.equal((await link(env, u, 'c1-43-goethe-zertifikat-c1-final', 'certificate')).status, 404);
  const list = await req(env, 'GET', '/resources/c1-43-goethe-zertifikat-c1-final', { cookie: u.cookie });
  assert.deepEqual(Object.keys(list.json.resources), ['vocabulary']);
  // an owned chapter with no release data lists nothing (and nothing is signed for it)
  const none = await req(env, 'GET', '/resources/b1-3-konjunktiv2-hoefliche-bitten', { cookie: u.cookie });
  assert.equal(none.status, 200);
  assert.deepEqual(none.json.resources, {});
  assert.equal((await link(env, u, 'b1-3-konjunktiv2-hoefliche-bitten', 'grammar')).status, 404);
});

/* ---------- signature ---------- */
async function freshLink(env, id = 'c2-02-verben-mit-praefixen', type = 'vocabulary') {
  const u = await signupUser(env);
  await grant(env, u.id, 'LIFETIME');
  const l = await link(env, u, id, type);
  assert.equal(l.status, 200);
  return { u, url: l.json.url };
}

test('8. invalid signature — denied, with a generic error', async () => {
  const env = makeEnv();
  const { url } = await freshLink(env);
  const bad = tamper(url, 's', 'f'.repeat(64));
  const r = await req(env, 'GET', bad, { origin: null });
  assert.equal(r.status, 403);
  assert.equal(r.json.error, 'link_invalid');
  for (const k of ['s', 'e', 'u']) assert.equal((await req(env, 'GET', tamper(url, k, ''), { origin: null })).status, 403, `empty ${k}`);
  assert.equal((await req(env, 'GET', url.split('?')[0], { origin: null })).status, 403, 'no token at all');
});

test('9. expired signed link — denied; a fresh one is reusable within its window', async () => {
  const env = makeEnv();
  const { u, url } = await freshLink(env);
  assert.equal((await req(env, 'GET', url, { origin: null })).status, 200);
  assert.equal((await req(env, 'GET', url, { origin: null })).status, 200, 'reusable, not one-time');
  const past = Math.floor(Date.now() / 1000) - 1;
  const sig = await signLink(env, u.id, 'c2-02-verben-mit-praefixen', 'vocabulary', past);
  const expired = tamper(tamper(url, 'e', String(past)), 's', sig);
  assert.equal((await req(env, 'GET', expired, { origin: null })).status, 403);
  // an expiry beyond the allowed lifetime is refused even when correctly signed
  const far = Math.floor(Date.now() / 1000) + LINK_TTL_SECONDS * 20;
  const farSig = await signLink(env, u.id, 'c2-02-verben-mit-praefixen', 'vocabulary', far);
  assert.equal((await req(env, 'GET', tamper(tamper(url, 'e', String(far)), 's', farSig), { origin: null })).status, 403);
});

test('10. changed chapter ID — denied', async () => {
  const env = makeEnv();
  const { url } = await freshLink(env);
  const other = swapPath(url, '/c2-02-verben-mit-praefixen/', '/a1-9-verben/');
  assert.equal((await req(env, 'GET', other, { origin: null })).status, 403);
});

test('11. changed resource type — denied (C2·02 vocabulary cannot become grammar)', async () => {
  const env = makeEnv();
  const { url } = await freshLink(env);
  assert.equal((await req(env, 'GET', swapPath(url, '/vocabulary?', '/grammar?'), { origin: null })).status, 403);
});

test('12. changed user ID — denied', async () => {
  const env = makeEnv();
  const { url } = await freshLink(env);
  const other = await signupUser(env);
  assert.equal((await req(env, 'GET', tamper(url, 'u', other.id), { origin: null })).status, 403);
});

test('signature covers a canonical payload and verifies in constant-time form', async () => {
  const env = makeEnv();
  assert.equal(canonicalPayload('u1', 'a1-9-verben', 'grammar', 123), 'kw-res-v1|u1|a1-9-verben|grammar|123');
  const exp = Math.floor(Date.now() / 1000) + 60;
  const s = await signLink(env, 'u1', 'a1-9-verben', 'grammar', exp);
  assert.match(s, /^[0-9a-f]{64}$/);
  assert.equal(await verifyLink(env, { userId: 'u1', chapterId: 'a1-9-verben', type: 'grammar', expires: String(exp), signature: s }), true);
  assert.equal(await verifyLink({ ...env, RESOURCE_URL_SECRET: 'other' }, { userId: 'u1', chapterId: 'a1-9-verben', type: 'grammar', expires: String(exp), signature: s }), false);
  assert.equal(await verifyLink(env, { userId: 'u1|x', chapterId: 'a1-9-verben', type: 'grammar', expires: String(exp), signature: s }), false, 'malformed user id');
  assert.equal(await verifyLink(env, { userId: 'u1', chapterId: '../etc', type: 'grammar', expires: String(exp), signature: s }), false, 'malformed chapter');
});

/* ---------- rate limit ---------- */
test('13. signed-link rate limit — 60 per user per hour, then 429', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  for (let i = 0; i < LINK_LIMIT.max; i++) assert.equal((await link(env, u, 'a1-1-alphabet', 'vocabulary')).status, 200, `request ${i + 1}`);
  const r = await link(env, u, 'a1-1-alphabet', 'vocabulary');
  assert.equal(r.status, 429);
  assert.ok(Number(r.headers.get('retry-after')) > 0);
  // another user is unaffected
  const v = await signupUser(env);
  assert.equal((await link(env, v, 'a1-1-alphabet', 'vocabulary')).status, 200);
});

/* ---------- privacy ---------- */
test('14. the private bucket is only reachable through a valid signed link', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  // no route serves raw object keys, the release or the manifest
  for (const p of ['/r1/pdfs/a1/a1-1-alphabet/vocabulary.pdf', '/resources/r1/manifest.json', '/resources/file/a1-1-alphabet/vocabulary', '/r1/manifest.json']) {
    const r = await req(env, 'GET', p, { cookie: u.cookie });
    assert.ok(r.status === 403 || r.status === 404, p);
    assert.ok(!r.buf.toString('latin1').startsWith('%PDF'), p);
  }
  // wrangler.toml binds the bucket privately and exposes no public domain
  const toml = fs.readFileSync(path.join(WORKER_DIR, 'wrangler.toml'), 'utf8');
  assert.match(toml, /\[\[r2_buckets\]\]\s*\nbinding = "RESOURCES"\s*\nbucket_name = "klarweg-resources"/);
  assert.ok(!/r2\.dev|custom_domain|public/i.test(toml.split('[[r2_buckets]]')[1].split('[[')[0]));
  assert.ok(!/RESOURCE_URL_SECRET\s*=/.test(toml), 'the secret is never in wrangler.toml');
});

test('15. a signed URL carries no credentials, bucket, release or object key', async () => {
  const env = makeEnv();
  const { u, url } = await freshLink(env);
  const x = new URL(url);
  assert.deepEqual([...x.searchParams.keys()].sort(), ['e', 's', 'u']);
  assert.equal(x.searchParams.get('u'), u.id);
  assert.equal(x.pathname, '/resources/file/c2-02-verben-mit-praefixen/vocabulary');
  for (const leak of [SECRET, 'klarweg-resources', 'r1/', '.pdf', 'index.json']) assert.ok(!url.includes(leak), leak);
});

test('16. metadata exposes only safe fields — no keys, hashes, release or bucket', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  const r = await req(env, 'GET', '/resources/a1-1-alphabet', { cookie: u.cookie });
  assert.deepEqual(Object.keys(r.json).sort(), ['chapter', 'ok', 'resources']);
  for (const v of Object.values(r.json.resources)) assert.deepEqual(Object.keys(v).sort(), ['available', 'bytes', 'pages', 'type']);
  for (const leak of ['klarweg-resources', 'r1', '.pdf', 'contentHash', 'abcdef0123456789', 'url', SECRET]) assert.ok(!r.text.includes(leak), leak);
});

test('fails closed when the bucket, secret or release is not configured', async () => {
  for (const missing of ['RESOURCES', 'RESOURCE_URL_SECRET', 'RESOURCE_RELEASE']) {
    const env = makeEnv({ [missing]: undefined });
    const u = await signupUser(env);
    assert.equal((await req(env, 'GET', '/resources/a1-1-alphabet', { cookie: u.cookie })).status, 503, missing);
    assert.equal((await link(env, u, 'a1-1-alphabet', 'vocabulary')).status, 503, missing);
  }
});

test('the release is one config value: switching RESOURCE_RELEASE switches every file', async () => {
  const env = makeEnv({ RESOURCE_RELEASE: 'r2' });
  seed(env.RESOURCES, 'r2');
  env.RESOURCES.put('r2/pdfs/a1/a1-1-alphabet/vocabulary.pdf', PDF('r2 build'));
  const u = await signupUser(env);
  const l = await link(env, u, 'a1-1-alphabet', 'vocabulary');
  const f = await req(env, 'GET', l.json.url, { origin: null });
  assert.ok(f.text.includes('r2 build'));
});

test('the Worker free rule matches the browser rule in kw-access.js', () => {
  const src = fs.readFileSync(path.join(ROOT, 'kw-access.js'), 'utf8');
  const m = /var FREE_CHAPTER_NUMBER = (\d+);/.exec(src);
  assert.ok(m, 'kw-access.js declares FREE_CHAPTER_NUMBER');
  assert.equal(Number(m[1]), FREE_CHAPTER_NUMBER);
});

test('link creation refuses cross-site POSTs (existing CSRF guard applies)', async () => {
  const env = makeEnv();
  const u = await signupUser(env);
  const r = await req(env, 'POST', '/resources/a1-1-alphabet/vocabulary/link', { cookie: u.cookie, origin: 'https://evil.example' });
  assert.equal(r.status, 403);
  assert.ok(!r.json.url);
});
