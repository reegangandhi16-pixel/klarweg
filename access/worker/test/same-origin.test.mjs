/* klarweg-access — same-origin API on klarweg.in/api/* (src/same-origin.js).
   The same Worker answers on two hosts:
     · workers.dev — bare paths, cross-site SameSite=None cookie (unchanged)
     · klarweg.in  — /api/* prefix stripped, first-party SameSite=Lax cookie
                     scoped to Path=/api (fixes the iOS Google login loop)
   Drives the real fetch handler against the in-memory D1; Google JWKS is
   mocked with a locally generated key. No network, no real credentials. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WORKERS_DEV = 'https://klarweg-access.example.workers.dev';
const SAME_ORIGIN = 'https://klarweg.in/api';
const SITE = 'https://klarweg.in';
const ACCOUNT_RETURN_URL = 'https://klarweg.in/account/index.html';
const GOOGLE_CLIENT_ID = 'test-client.apps.googleusercontent.com';
const RESOURCE_SECRET = 'test-resource-url-secret-0123456789abcdef';

/* ---------------- Google mock ---------------- */
let googleJwk = null;
let googleKeyPair = null;
const b64u = (buf) => Buffer.from(buf).toString('base64url');

async function googleIdToken(claims) {
  const header = b64u(JSON.stringify({ alg: 'RS256', kid: 'test-kid', typ: 'JWT' }));
  const now = Math.floor(Date.now() / 1000);
  const payload = b64u(JSON.stringify({ iss: 'https://accounts.google.com', aud: GOOGLE_CLIENT_ID, iat: now, exp: now + 600, email_verified: true, ...claims }));
  const sig = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', googleKeyPair.privateKey, new TextEncoder().encode(`${header}.${payload}`));
  return `${header}.${payload}.${b64u(sig)}`;
}

test.before(async () => {
  googleKeyPair = await crypto.subtle.generateKey(
    { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
    true, ['sign', 'verify']);
  googleJwk = { ...(await crypto.subtle.exportKey('jwk', googleKeyPair.publicKey)), kid: 'test-kid', alg: 'RS256', use: 'sig' };
});

globalThis.fetch = async (input) => {
  const url = typeof input === 'string' ? input : input.url;
  if (url === 'https://www.googleapis.com/oauth2/v3/certs') {
    return new Response(JSON.stringify({ keys: [googleJwk] }), { headers: { 'Cache-Control': 'max-age=3600' } });
  }
  throw new Error('Unexpected network call in test: ' + url);
};

/* ---------------- private R2 stand-in (free Chapter 1 only) ---------------- */
function makeBucket() {
  const objects = new Map();
  const put = (key, v) => objects.set(key, Buffer.from(v));
  const pdf = Buffer.from('%PDF-1.4\n% a1-1-alphabet/vocabulary\n%%EOF\n');
  put('r1/pdfs/a1/a1-1-alphabet/vocabulary.pdf', pdf);
  put('r1/pdfs/a1/a1-1-alphabet/index.json', JSON.stringify({
    chapter: 'a1-1-alphabet',
    resources: { vocabulary: { file: 'vocabulary.pdf', pages: 3, bytes: pdf.length, contentHash: 'abcdef0123456789' } },
  }));
  return {
    async get(key) {
      const b = objects.get(key);
      if (!b) return null;
      return { size: b.length, body: new Blob([b]).stream(), async json() { return JSON.parse(b.toString('utf8')); } };
    },
  };
}

/* ---------------- harness ---------------- */
function makeEnv() {
  return {
    DB: createD1(WORKER_DIR),
    CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1234567890', CASHFREE_SECRET_KEY: 'cfsk_test',
    GOOGLE_CLIENT_ID,
    RATE_SALT: 'test-salt',
    ACCOUNT_RETURN_URL,
    RESOURCES: makeBucket(), RESOURCE_URL_SECRET: RESOURCE_SECRET, RESOURCE_RELEASE: 'r1',
  };
}

const ctx = { waitUntil() {} };
async function req(env, method, url, { body, form, cookie, origin = SITE } = {}) {
  const h = { 'CF-Connecting-IP': '203.0.113.' + Math.floor(Math.random() * 200) };
  if (cookie) h.cookie = cookie;
  if (origin) h.origin = origin;
  let payload;
  if (form) { payload = new URLSearchParams(form).toString(); h['content-type'] = 'application/x-www-form-urlencoded'; }
  else if (body !== undefined) { payload = JSON.stringify(body); h['content-type'] = 'application/json'; }
  const res = await worker.fetch(new Request(url, { method, headers: h, body: payload, redirect: 'manual' }), env, ctx);
  const buf = Buffer.from(await res.arrayBuffer());
  let json = null;
  try { json = JSON.parse(buf.toString('utf8')); } catch {}
  return { status: res.status, json, headers: res.headers, buf, text: buf.toString('utf8') };
}
const setCookie = (r) => r.headers.get('set-cookie');
const cookieOf = (r) => { const c = setCookie(r); return c ? c.split(';')[0] : null; };
const attrs = (c) => c.split(';').slice(1).map((s) => s.trim());
const email = () => `u${Math.random().toString(36).slice(2)}@example.com`;

async function signup(env, base) {
  const r = await req(env, 'POST', base + '/auth/signup', { body: { email: email(), password: 'correct-horse-9', name: 'Test' } });
  assert.equal(r.status, 201, JSON.stringify(r.json));
  return r;
}

/* Redirect-mode Google login exactly as iOS performs it: nonce from the
   API, then Google's top-level form POST to login_uri. */
async function redirectLogin(env, base, sub = 'g-' + Math.random().toString(36).slice(2)) {
  const n = await req(env, 'GET', base + '/auth/google/nonce?mode=login');
  assert.equal(n.status, 200, n.text);
  const credential = await googleIdToken({ sub, email: sub + '@example.com', name: 'G', nonce: n.json.nonce });
  const r = await req(env, 'POST', base + '/auth/google/redirect', { form: { credential }, origin: 'https://accounts.google.com' });
  return { r, credential };
}

/* ================= workers.dev — unchanged ================= */
test('workers.dev: session cookie is still Path=/; SameSite=None; HttpOnly; Secure; no Domain', async () => {
  const env = makeEnv();
  const r = await signup(env, WORKERS_DEV);
  const a = attrs(setCookie(r));
  assert.deepEqual(a.slice(0, 4), ['Path=/', 'HttpOnly', 'Secure', 'SameSite=None']);
  assert.match(a[4], /^Max-Age=\d+$/);
  assert.ok(!/Domain=/i.test(setCookie(r)));
  assert.equal((await req(env, 'GET', WORKERS_DEV + '/auth/me', { cookie: cookieOf(r) })).status, 200);
  const out = await req(env, 'POST', WORKERS_DEV + '/auth/logout', { cookie: cookieOf(r) });
  assert.deepEqual(attrs(setCookie(out)), ['Path=/', 'HttpOnly', 'Secure', 'SameSite=None', 'Max-Age=0']);
});

test('workers.dev: /api is not a prefix there — /api/auth/me is not routed', async () => {
  const env = makeEnv();
  const r = await signup(env, WORKERS_DEV);
  const m = await req(env, 'GET', WORKERS_DEV + '/api/auth/me', { cookie: cookieOf(r) });
  assert.notEqual(m.status, 200);
});

test('workers.dev: redirect-mode Google login unchanged (303 to the account page, SameSite=None cookie)', async () => {
  const env = makeEnv();
  const { r } = await redirectLogin(env, WORKERS_DEV);
  assert.equal(r.status, 303);
  assert.equal(r.headers.get('location'), ACCOUNT_RETURN_URL + '?mode=login');
  assert.match(setCookie(r), /; Path=\/; HttpOnly; Secure; SameSite=None; /);
});

test('workers.dev: signed resource link has no /api prefix', async () => {
  const env = makeEnv();
  const u = await signup(env, WORKERS_DEV);
  const l = await req(env, 'POST', WORKERS_DEV + '/resources/a1-1-alphabet/vocabulary/link', { cookie: cookieOf(u) });
  assert.equal(l.status, 200, l.text);
  const x = new URL(l.json.url);
  assert.equal(x.origin, WORKERS_DEV);
  assert.equal(x.pathname, '/resources/file/a1-1-alphabet/vocabulary');
});

/* ================= klarweg.in/api/* ================= */
test('klarweg.in: signup/me/logout under /api; cookie is Path=/api; SameSite=Lax; HttpOnly; Secure; no Domain', async () => {
  const env = makeEnv();
  const r = await signup(env, SAME_ORIGIN);
  const a = attrs(setCookie(r));
  assert.deepEqual(a.slice(0, 4), ['Path=/api', 'HttpOnly', 'Secure', 'SameSite=Lax']);
  assert.match(a[4], /^Max-Age=\d+$/);
  assert.ok(!/Domain=/i.test(setCookie(r)));
  assert.ok(!/SameSite=None/i.test(setCookie(r)));
  const m = await req(env, 'GET', SAME_ORIGIN + '/auth/me', { cookie: cookieOf(r) });
  assert.equal(m.status, 200);
  assert.equal(m.json.authenticated, true);
  const out = await req(env, 'POST', SAME_ORIGIN + '/auth/logout', { cookie: cookieOf(r) });
  assert.equal(out.status, 200);
  assert.deepEqual(attrs(setCookie(out)), ['Path=/api', 'HttpOnly', 'Secure', 'SameSite=Lax', 'Max-Age=0']);
  assert.equal((await req(env, 'GET', SAME_ORIGIN + '/auth/me', { cookie: cookieOf(r) })).status, 401);
});

test('klarweg.in: email login (POST body survives the prefix strip) sets the same-origin cookie', async () => {
  const env = makeEnv();
  const e = email();
  await req(env, 'POST', SAME_ORIGIN + '/auth/signup', { body: { email: e, password: 'correct-horse-9' } });
  const ok = await req(env, 'POST', SAME_ORIGIN + '/auth/login', { body: { email: e, password: 'correct-horse-9' } });
  assert.equal(ok.status, 200, ok.text);
  assert.match(setCookie(ok), /; Path=\/api; HttpOnly; Secure; SameSite=Lax; /);
  const bad = await req(env, 'POST', SAME_ORIGIN + '/auth/login', { body: { email: e, password: 'wrong-password' } });
  assert.equal(bad.status, 401);
});

test('klarweg.in: paths outside /api/* are not answered (404), including bare Worker paths', async () => {
  const env = makeEnv();
  for (const p of ['/auth/me', '/api', '/apix/auth/me', '/index.html', '/', '/webhooks/cashfree']) {
    const r = await req(env, 'GET', SITE + p);
    assert.equal(r.status, 404, p);
  }
});

test('klarweg.in: iOS redirect-mode Google login → 303 to the account page with a first-party cookie that /api/auth/me accepts', async () => {
  const env = makeEnv();
  const { r, credential } = await redirectLogin(env, SAME_ORIGIN);
  assert.equal(r.status, 303);
  assert.equal(r.headers.get('location'), ACCOUNT_RETURN_URL + '?mode=login');
  assert.match(setCookie(r), /^kw_session=[^;]+; Path=\/api; HttpOnly; Secure; SameSite=Lax; Max-Age=\d+$/);
  const m = await req(env, 'GET', SAME_ORIGIN + '/auth/me', { cookie: cookieOf(r) });
  assert.equal(m.status, 200);
  assert.equal(m.json.authenticated, true);
  // Nonce stays single-use on the new host: a replayed POST is refused, no session.
  const replay = await req(env, 'POST', SAME_ORIGIN + '/auth/google/redirect', { form: { credential }, origin: 'https://accounts.google.com' });
  assert.equal(replay.status, 303);
  assert.equal(replay.headers.get('location'), ACCOUNT_RETURN_URL + '?authError=invalid_nonce');
  assert.equal(setCookie(replay), null);
});

test('klarweg.in: redirect login still rejects a token without a nonce and a CSRF-token mismatch', async () => {
  const env = makeEnv();
  const noNonce = await googleIdToken({ sub: 'g-nn', email: 'nn@example.com' });
  const a = await req(env, 'POST', SAME_ORIGIN + '/auth/google/redirect', { form: { credential: noNonce }, origin: 'https://accounts.google.com' });
  assert.equal(a.headers.get('location'), ACCOUNT_RETURN_URL + '?authError=invalid_nonce');
  assert.equal(setCookie(a), null);
  const n = await req(env, 'GET', SAME_ORIGIN + '/auth/google/nonce');
  const credential = await googleIdToken({ sub: 'g-cs', email: 'cs@example.com', nonce: n.json.nonce });
  const b = await req(env, 'POST', SAME_ORIGIN + '/auth/google/redirect', {
    form: { credential, g_csrf_token: 'body-value' }, cookie: 'g_csrf_token=cookie-value', origin: 'https://accounts.google.com',
  });
  assert.equal(b.headers.get('location'), ACCOUNT_RETURN_URL + '?authError=invalid_credential');
  assert.equal(setCookie(b), null);
});

test('klarweg.in: popup Google login (POST /api/auth/google) sets the same-origin cookie', async () => {
  const env = makeEnv();
  const credential = await googleIdToken({ sub: 'g-pop', email: 'pop@example.com', name: 'P' });
  const r = await req(env, 'POST', SAME_ORIGIN + '/auth/google', { body: { credential } });
  assert.equal(r.status, 200, r.text);
  assert.match(setCookie(r), /; Path=\/api; HttpOnly; Secure; SameSite=Lax; /);
});

test('klarweg.in: a foreign-origin write is still refused', async () => {
  const env = makeEnv();
  const u = await signup(env, SAME_ORIGIN);
  const r = await req(env, 'POST', SAME_ORIGIN + '/orders', { cookie: cookieOf(u), origin: 'https://evil.example', body: { product_id: 'A1' } });
  assert.equal(r.status, 403);
});

test('klarweg.in: signed resource link keeps the /api prefix and the file downloads through it', async () => {
  const env = makeEnv();
  const u = await signup(env, SAME_ORIGIN);
  const l = await req(env, 'POST', SAME_ORIGIN + '/resources/a1-1-alphabet/vocabulary/link', { cookie: cookieOf(u) });
  assert.equal(l.status, 200, l.text);
  const x = new URL(l.json.url);
  assert.equal(x.origin, SITE);
  assert.equal(x.pathname, '/api/resources/file/a1-1-alphabet/vocabulary');
  const f = await req(env, 'GET', l.json.url, { origin: null });
  assert.equal(f.status, 200, f.text);
  assert.equal(f.headers.get('content-type'), 'application/pdf');
  assert.ok(f.buf.toString('latin1').startsWith('%PDF-'));
});
