/* klarweg-access — security regression tests (audit 2026-11-02).
   Real Worker fetch handler, in-memory D1 (schema + every migration),
   Cashfree and Google mocked at the fetch() boundary. No network, no real
   credentials, no production data. Covers: unauthenticated access, cross-
   account isolation (IDOR), payment forgery, CSRF, input limits, the
   Google nonce budget and the baseline response headers. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import { NONCE_LIMIT } from '../src/ratelimit.js';
import { MAX_PASSWORD_LENGTH } from '../src/auth-routes.js';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://reegangandhi16-pixel.github.io';
const API = 'https://klarweg-access.example.workers.dev';
const SECRET = 'cfsk_test_secret_value';

/* Cashfree mock: orders stay ACTIVE (unpaid) unless a test marks them PAID. */
const gateway = new Map();
const created = [];
globalThis.fetch = async (input, init = {}) => {
  const url = typeof input === 'string' ? input : input.url;
  const method = (init.method || 'GET').toUpperCase();
  const m = url.match(/^https:\/\/sandbox\.cashfree\.com\/pg\/orders(?:\/([^/]+))?(\/payments)?$/);
  if (!m) throw new Error('Unexpected network call in test: ' + url);
  if (method === 'POST' && !m[1]) {
    const b = JSON.parse(init.body);
    created.push(b);
    gateway.set(b.order_id, { order_id: b.order_id, order_amount: b.order_amount, order_currency: 'INR', order_status: 'ACTIVE' });
    return Response.json({ ...gateway.get(b.order_id), payment_session_id: 'ps_' + b.order_id });
  }
  const o = gateway.get(decodeURIComponent(m[1]));
  if (!o) return Response.json({ message: 'not found' }, { status: 404 });
  if (m[2]) return Response.json(o.order_status === 'PAID' ? [{ cf_payment_id: 'p1', payment_status: 'SUCCESS' }] : []);
  return Response.json(o);
};

function makeEnv() {
  return { DB: createD1(WORKER_DIR), CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1234567890', CASHFREE_SECRET_KEY: SECRET, GOOGLE_CLIENT_ID: 'test.apps.googleusercontent.com', RATE_SALT: 'test-salt' };
}
const waits = [];
const ctx = { waitUntil(p) { waits.push(p); } };
let ipSeq = 0;
async function req(env, method, pathname, { body, cookie, origin = SITE, headers = {}, ip } = {}) {
  const h = { ...headers, 'CF-Connecting-IP': ip || '203.0.113.' + ((ipSeq++ % 250) + 1) };
  if (body !== undefined) h['content-type'] = 'application/json';
  if (cookie) h.cookie = cookie;
  if (origin) h.origin = origin;
  const res = await worker.fetch(new Request(API + pathname, { method, headers: h, body: body === undefined ? undefined : (typeof body === 'string' ? body : JSON.stringify(body)) }), env, ctx);
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch {}
  return { status: res.status, json, headers: res.headers };
}
async function student(env) {
  const r = await req(env, 'POST', '/auth/signup', { body: { email: `s${Math.random().toString(36).slice(2)}@example.com`, password: 'correct-horse-9', name: 'S' } });
  assert.equal(r.status, 201, JSON.stringify(r.json));
  const cookie = r.headers.get('set-cookie').split(';')[0];
  assert.equal((await req(env, 'POST', '/auth/phone', { cookie, body: { phone: '9876543210' } })).status, 200);
  return { cookie, id: r.json.user.id };
}
async function webhook(env, payload, secret = SECRET) {
  const raw = JSON.stringify(payload);
  const ts = String(Math.floor(Date.now() / 1000));
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = Buffer.from(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(ts + raw))).toString('base64');
  return req(env, 'POST', '/webhooks/cashfree', { origin: null, body: raw, headers: { 'x-webhook-timestamp': ts, 'x-webhook-signature': sig } });
}
const paidEvent = (id) => ({ type: 'PAYMENT_SUCCESS_WEBHOOK', data: { order: { order_id: id }, payment: { cf_payment_id: 'p1', payment_status: 'SUCCESS' } } });
const ent = async (env, cookie) => (await req(env, 'GET', '/auth/me', { cookie })).json.entitlements;

/* ---------- unauthenticated ---------- */
test('every account/payment route rejects a request with no session', async () => {
  const env = makeEnv();
  const routes = [
    ['GET', '/auth/me'], ['POST', '/auth/phone', { phone: '9876543210' }],
    ['POST', '/orders', { product_id: 'A2' }], ['GET', '/orders/ord_00000000-0000-0000-0000-000000000000'],
    ['GET', '/progress'], ['POST', '/progress/a1-2', { record: { done: {} } }],
    ['GET', '/saved-words'], ['POST', '/saved-words', { de: 'Tisch', level: 'A1' }],
    ['GET', '/resources/a2-2-test'], ['POST', '/resources/a2-2-test/vocabulary/link', {}],
  ];
  for (const [method, p, body] of routes) {
    const r = await req(env, method, p, { body });
    assert.ok([401, 503].includes(r.status), `${method} ${p} → ${r.status}`);
    assert.notEqual(r.json && r.json.ok, true, `${method} ${p}`);
  }
});

test('a forged or random session cookie is not a session', async () => {
  const env = makeEnv();
  for (const cookie of ['kw_session=forged', 'kw_session=' + 'A'.repeat(43), 'kw_session=']) {
    assert.equal((await req(env, 'GET', '/auth/me', { cookie })).status, 401, cookie);
  }
});

test('logout revokes the session server-side (the old cookie stops working)', async () => {
  const env = makeEnv();
  const a = await student(env);
  assert.equal((await req(env, 'POST', '/auth/logout', { cookie: a.cookie })).status, 200);
  assert.equal((await req(env, 'GET', '/auth/me', { cookie: a.cookie })).status, 401);
});

/* ---------- student A vs student B ---------- */
test('IDOR: student B cannot read or change student A\'s progress', async () => {
  const env = makeEnv();
  const a = await student(env), b = await student(env);
  const w = await req(env, 'POST', '/progress/a1-2', { cookie: a.cookie, body: { record: { done: { story: true }, learned: { Tisch: true } } } });
  assert.equal(w.status, 200, JSON.stringify(w.json));
  const seenByB = await req(env, 'GET', '/progress', { cookie: b.cookie });
  assert.equal(seenByB.status, 200);
  assert.deepEqual(seenByB.json.chapters, {});
  assert.equal(seenByB.json.user, b.id);
  // A user id in the body or query is ignored: the session decides.
  await req(env, 'POST', '/progress/a1-2?user_id=' + a.id, { cookie: b.cookie, body: { user_id: a.id, record: { done: {} } } });
  const seenByA = await req(env, 'GET', '/progress', { cookie: a.cookie });
  assert.deepEqual(seenByA.json.chapters['a1-2'].record.done, { story: true });
});

test('IDOR: student B cannot list, delete or review student A\'s saved words', async () => {
  const env = makeEnv();
  const a = await student(env), b = await student(env);
  const c = await req(env, 'POST', '/saved-words', { cookie: a.cookie, body: { de: 'Tisch', en: 'table', level: 'A1' } });
  assert.equal(c.status, 201, JSON.stringify(c.json));
  const id = c.json.word.id;
  const listB = await req(env, 'GET', '/saved-words', { cookie: b.cookie });
  assert.equal(JSON.stringify(listB.json).includes(id), false);
  await req(env, 'DELETE', '/saved-words/' + id, { cookie: b.cookie });
  const rv = await req(env, 'PATCH', `/saved-words/${id}/review`, { cookie: b.cookie, body: { grade: 'easy' } });
  assert.notEqual(rv.status, 200);
  const listA = await req(env, 'GET', '/saved-words', { cookie: a.cookie });
  assert.ok(JSON.stringify(listA.json).includes(id), 'A still owns the word');
});

test('IDOR: student B cannot read student A\'s order (404, no details)', async () => {
  const env = makeEnv();
  const a = await student(env), b = await student(env);
  const o = await req(env, 'POST', '/orders', { cookie: a.cookie, body: { product_id: 'B1' } });
  assert.equal(o.status, 200, JSON.stringify(o.json));
  const r = await req(env, 'GET', '/orders/' + o.json.order.id, { cookie: b.cookie });
  assert.equal(r.status, 404);
  assert.equal(JSON.stringify(r.json).includes(a.id), false);
});

/* ---------- payments ---------- */
test('payment: client-supplied price/coupon/status fields never reach Cashfree or the grant', async () => {
  const env = makeEnv();
  const a = await student(env);
  created.length = 0;
  const o = await req(env, 'POST', '/orders', { cookie: a.cookie, body: { product_id: 'LIFETIME', amount: 1, order_amount: 1, amount_paise: 100, coupon: 'ANYCODE', status: 'paid' } });
  assert.equal(o.status, 200, JSON.stringify(o.json));
  assert.equal(created.length, 1);
  assert.equal(created[0].order_amount, 4999, 'amount comes from the server catalog');
  assert.equal(o.json.order.status, 'created');
  assert.equal((await ent(env, a.cookie)).LIFETIME, false);
});

test('payment: an unpaid order never unlocks, however often it is polled', async () => {
  const env = makeEnv();
  const a = await student(env);
  const o = await req(env, 'POST', '/orders', { cookie: a.cookie, body: { product_id: 'A2' } });
  for (let i = 0; i < 3; i++) {
    const r = await req(env, 'GET', '/orders/' + o.json.order.id, { cookie: a.cookie });
    assert.equal(r.json.order.status, 'created');
  }
  assert.equal((await ent(env, a.cookie)).A2, false);
});

test('payment: forged webhooks are refused and grant nothing', async () => {
  const env = makeEnv();
  const a = await student(env);
  const o = await req(env, 'POST', '/orders', { cookie: a.cookie, body: { product_id: 'A2' } });
  const id = o.json.order.id;
  // Wrong signing key.
  assert.equal((await webhook(env, paidEvent(id), 'attacker-key')).status, 401);
  // No signature at all.
  const raw = await req(env, 'POST', '/webhooks/cashfree', { origin: null, body: paidEvent(id), headers: { 'x-webhook-timestamp': String(Math.floor(Date.now() / 1000)) } });
  assert.equal(raw.status, 401);
  // Stale (replayed) timestamp with an otherwise valid shape.
  const old = await req(env, 'POST', '/webhooks/cashfree', { origin: null, body: paidEvent(id), headers: { 'x-webhook-timestamp': '1600000000', 'x-webhook-signature': 'x' } });
  assert.equal(old.status, 401);
  assert.equal((await ent(env, a.cookie)).A2, false);
});

test('payment: a correctly signed webhook still grants nothing while Cashfree says unpaid', async () => {
  const env = makeEnv();
  const a = await student(env);
  const o = await req(env, 'POST', '/orders', { cookie: a.cookie, body: { product_id: 'A2' } });
  const r = await webhook(env, paidEvent(o.json.order.id));
  assert.notEqual(r.json.ok, true);
  assert.equal((await ent(env, a.cookie)).A2, false);
  // Once Cashfree itself reports PAID, the same path grants exactly that level.
  gateway.get(o.json.order.id).order_status = 'PAID';
  assert.equal((await webhook(env, paidEvent(o.json.order.id))).json.status, 'paid');
  const e = await ent(env, a.cookie);
  assert.equal(e.A2, true);
  assert.equal(e.B1, false);
  assert.equal(e.LIFETIME, false);
});

test('payment: student B cannot claim student A\'s paid order', async () => {
  const env = makeEnv();
  const a = await student(env), b = await student(env);
  const o = await req(env, 'POST', '/orders', { cookie: a.cookie, body: { product_id: 'C1' } });
  gateway.get(o.json.order.id).order_status = 'PAID';
  assert.equal((await req(env, 'GET', '/orders/' + o.json.order.id, { cookie: b.cookie })).status, 404);
  assert.equal((await ent(env, b.cookie)).C1, false);
  assert.equal((await req(env, 'GET', '/orders/' + o.json.order.id, { cookie: a.cookie })).json.order.status, 'paid');
  assert.equal((await ent(env, a.cookie)).C1, true);
});

/* ---------- CSRF / input ---------- */
test('CSRF: a state-changing request from a foreign site is refused', async () => {
  const env = makeEnv();
  const a = await student(env);
  for (const [m, p, body] of [['POST', '/orders', { product_id: 'A2' }], ['POST', '/auth/phone', { phone: '9999999999' }], ['POST', '/progress/a1-2', { record: { done: {} } }], ['POST', '/auth/logout', {}]]) {
    const r = await req(env, m, p, { cookie: a.cookie, origin: 'https://evil.example', body });
    assert.equal(r.status, 403, `${m} ${p}`);
  }
  assert.equal((await req(env, 'GET', '/auth/me', { cookie: a.cookie })).json.user.phone, '9876543210');
});

test('input: malformed JSON, wrong types and unknown products are rejected cleanly', async () => {
  const env = makeEnv();
  const a = await student(env);
  for (const body of ['{not json', '[]', 'null']) {
    const r = await req(env, 'POST', '/orders', { cookie: a.cookie, body });
    assert.equal(r.status, 400, body);
  }
  for (const product_id of ['FREE', 'LIFETIME; DROP TABLE orders', 123, null]) {
    assert.equal((await req(env, 'POST', '/orders', { cookie: a.cookie, body: { product_id } })).status, 400, String(product_id));
  }
  const bad = await req(env, 'POST', '/auth/login', { body: { email: { $ne: '' }, password: ['x'] } });
  assert.equal(bad.status, 400);
  // No stack trace or SQL ever reaches the client.
  assert.equal(/at \w+ \(|SQLITE|SELECT /i.test(JSON.stringify(bad.json)), false);
});

test(`input: passwords longer than ${MAX_PASSWORD_LENGTH} characters are refused before hashing`, async () => {
  const env = makeEnv();
  const huge = 'x'.repeat(MAX_PASSWORD_LENGTH + 1);
  const s = await req(env, 'POST', '/auth/signup', { body: { email: 'long@example.com', password: huge } });
  assert.equal(s.status, 400);
  const l = await req(env, 'POST', '/auth/login', { body: { email: 'long@example.com', password: huge } });
  assert.equal(l.status, 401);
  // The limit itself is still accepted.
  const ok = await req(env, 'POST', '/auth/signup', { body: { email: 'max@example.com', password: 'y'.repeat(MAX_PASSWORD_LENGTH) } });
  assert.equal(ok.status, 201);
});

/* ---------- Google nonce ---------- */
test('google nonce: per-network budget, then 429; other networks unaffected', async () => {
  const env = makeEnv();
  const ip = '198.51.100.7';
  for (let i = 0; i < NONCE_LIMIT.max; i++) {
    const r = await req(env, 'GET', '/auth/google/nonce', { ip });
    assert.equal(r.status, 200, 'call ' + i);
  }
  const over = await req(env, 'GET', '/auth/google/nonce', { ip });
  assert.equal(over.status, 429);
  assert.ok(Number(over.headers.get('retry-after')) > 0);
  assert.equal((await req(env, 'GET', '/auth/google/nonce', { ip: '198.51.100.8' })).status, 200);
});

test('google nonce: expired rows are swept', async () => {
  const env = makeEnv();
  await env.DB.prepare("INSERT INTO google_login_nonces (nonce, expires_at) VALUES ('old', 1)").run();
  waits.length = 0;
  assert.equal((await req(env, 'GET', '/auth/google/nonce')).status, 200);
  await Promise.all(waits);
  assert.equal(await env.DB.prepare("SELECT nonce FROM google_login_nonces WHERE nonce = 'old'").first(), null);
  const live = await env.DB.prepare('SELECT COUNT(*) AS n FROM google_login_nonces').first();
  assert.equal(live.n, 1);
});

/* ---------- headers / disclosure ---------- */
test('headers: every API answer is no-store + nosniff + no-referrer + DENY', async () => {
  const env = makeEnv();
  const a = await student(env);
  for (const [m, p, opts] of [['GET', '/'], ['GET', '/auth/me', { cookie: a.cookie }], ['GET', '/auth/me'], ['GET', '/auth/google/nonce'], ['GET', '/progress', { cookie: a.cookie }], ['GET', '/nope'], ['POST', '/orders', { origin: 'https://evil.example', body: {} }]]) {
    const r = await req(env, m, p, opts || {});
    assert.equal(r.headers.get('cache-control'), 'no-store', `${m} ${p}`);
    assert.equal(r.headers.get('x-content-type-options'), 'nosniff', `${m} ${p}`);
    assert.equal(r.headers.get('referrer-policy'), 'no-referrer', `${m} ${p}`);
    assert.equal(r.headers.get('x-frame-options'), 'DENY', `${m} ${p}`);
  }
});

test('headers: the session cookie keeps its flags through the header wrapper', async () => {
  const env = makeEnv();
  const r = await req(env, 'POST', '/auth/signup', { body: { email: 'c@example.com', password: 'correct-horse-9' } });
  const c = r.headers.get('set-cookie');
  assert.match(c, /kw_session=/);
  assert.match(c, /HttpOnly/);
  assert.match(c, /Secure/);
});

test('disclosure: /auth/me returns only the caller\'s own minimal profile, never hashes', async () => {
  const env = makeEnv();
  const a = await student(env);
  const r = await req(env, 'GET', '/auth/me', { cookie: a.cookie });
  assert.deepEqual(Object.keys(r.json.user).sort(), ['email', 'id', 'name', 'phone']);
  assert.equal(/password|salt|hash|token/i.test(JSON.stringify(r.json)), false);
});
