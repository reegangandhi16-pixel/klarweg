/* klarweg-access end-to-end tests — node --test
   Drives the real Worker fetch handler against an in-memory D1 built
   from schema.sql + every migration. External services are mocked at
   the fetch() boundary:
     · Cashfree PG (sandbox AND production hosts, recorded per call)
     · Google JWKS (a locally generated RSA key signs test ID tokens)
     · the klarweg-tutor service binding (env.TUTOR)
   No network, no real credentials. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import { cashfreeConfigProblem } from '../src/cashfree-config.js';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://reegangandhi16-pixel.github.io';
const API = 'https://klarweg-access.example.workers.dev';
const GOOGLE_CLIENT_ID = 'test-client.apps.googleusercontent.com';
const SANDBOX_SECRET = 'cfsk_test_secret_value';

/* ---------------- mocks ---------------- */
const cashfree = { orders: new Map(), calls: [], failCreate: false };
let googleJwk = null;
let googleKeyPair = null;

async function setupGoogleKey() {
  googleKeyPair = await crypto.subtle.generateKey(
    { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
    true, ['sign', 'verify']);
  googleJwk = { ...(await crypto.subtle.exportKey('jwk', googleKeyPair.publicKey)), kid: 'test-kid', alg: 'RS256', use: 'sig' };
}

const b64u = (buf) => Buffer.from(buf).toString('base64url');
async function googleIdToken(claims) {
  const header = b64u(JSON.stringify({ alg: 'RS256', kid: 'test-kid', typ: 'JWT' }));
  const now = Math.floor(Date.now() / 1000);
  const payload = b64u(JSON.stringify({ iss: 'https://accounts.google.com', aud: GOOGLE_CLIENT_ID, iat: now, exp: now + 600, email_verified: true, ...claims }));
  const sig = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', googleKeyPair.privateKey, new TextEncoder().encode(`${header}.${payload}`));
  return `${header}.${payload}.${b64u(sig)}`;
}

globalThis.fetch = async (input, init = {}) => {
  const url = typeof input === 'string' ? input : input.url;
  const method = (init.method || 'GET').toUpperCase();
  if (url === 'https://www.googleapis.com/oauth2/v3/certs') {
    return new Response(JSON.stringify({ keys: [googleJwk] }), { headers: { 'Cache-Control': 'max-age=3600' } });
  }
  const m = url.match(/^https:\/\/(sandbox|api)\.cashfree\.com\/pg\/orders(?:\/([^/]+))?(\/payments)?$/);
  if (m) {
    const host = m[1] === 'sandbox' ? 'sandbox' : 'production';
    const headers = init.headers || {};
    cashfree.calls.push({ host, method, path: url.replace(/^https:\/\/[^/]+/, ''), appId: headers['x-client-id'], body: init.body ? JSON.parse(init.body) : null });
    if (method === 'POST' && !m[2]) {
      if (cashfree.failCreate) return new Response('<html>gateway down</html>', { status: 502 });
      const b = JSON.parse(init.body);
      cashfree.orders.set(b.order_id, { order_id: b.order_id, order_amount: b.order_amount, order_currency: 'INR', order_status: 'ACTIVE', host, payments: [] });
      return Response.json({ order_id: b.order_id, order_amount: b.order_amount, order_currency: 'INR', payment_session_id: 'session_' + b.order_id, order_status: 'ACTIVE' });
    }
    const o = cashfree.orders.get(decodeURIComponent(m[2]));
    if (!o) return Response.json({ message: 'order not found' }, { status: 404 });
    if (m[3]) return Response.json(o.payments);
    return Response.json({ order_id: o.order_id, order_amount: o.order_amount, order_currency: o.order_currency, order_status: o.order_status });
  }
  throw new Error('Unexpected network call in test: ' + url);
};

/* ---------------- harness ---------------- */
function makeEnv(overrides = {}) {
  return {
    DB: createD1(WORKER_DIR),
    CASHFREE_ENV: 'sandbox',
    CASHFREE_APP_ID: 'TEST1234567890',
    CASHFREE_SECRET_KEY: SANDBOX_SECRET,
    GOOGLE_CLIENT_ID,
    RATE_SALT: 'test-salt',
    ...overrides,
  };
}

const ctx = { waitUntil() {} };
async function req(env, method, pathname, { body, cookie, origin = SITE, headers = {} } = {}) {
  const h = { ...headers };
  if (body !== undefined) h['content-type'] = 'application/json';
  if (cookie) h.cookie = cookie;
  if (origin) h.origin = origin;
  h['CF-Connecting-IP'] = h['CF-Connecting-IP'] || '203.0.113.' + Math.floor(Math.random() * 200);
  const res = await worker.fetch(new Request(API + pathname, { method, headers: h, body: body === undefined ? undefined : (typeof body === 'string' ? body : JSON.stringify(body)) }), env, ctx);
  const text = await res.text();
  let json = null;
  try { json = JSON.parse(text); } catch {}
  return { status: res.status, json, headers: res.headers, text };
}
const cookieOf = (r) => { const c = r.headers.get('set-cookie'); return c ? c.split(';')[0] : null; };

async function signupUser(env, email = `u${Math.random().toString(36).slice(2)}@example.com`) {
  const r = await req(env, 'POST', '/auth/signup', { body: { email, password: 'correct-horse-9', name: 'Test' } });
  assert.equal(r.status, 201, JSON.stringify(r.json));
  return { email, cookie: cookieOf(r), id: r.json.user.id };
}
async function withPhone(env, cookie) {
  const r = await req(env, 'POST', '/auth/phone', { cookie, body: { phone: '9876543210' } });
  assert.equal(r.status, 200, JSON.stringify(r.json));
}

async function signedWebhook(env, payload, { secret = SANDBOX_SECRET, ts = Math.floor(Date.now() / 1000) } = {}) {
  const raw = JSON.stringify(payload);
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(String(ts) + raw));
  return req(env, 'POST', '/webhooks/cashfree', {
    origin: null,
    body: raw,
    headers: { 'x-webhook-timestamp': String(ts), 'x-webhook-signature': Buffer.from(mac).toString('base64') },
  });
}
const successPayload = (orderId) => ({ type: 'PAYMENT_SUCCESS_WEBHOOK', data: { order: { order_id: orderId }, payment: { cf_payment_id: 'pay_' + orderId.slice(-6), payment_status: 'SUCCESS' } } });

async function me(env, cookie) { return req(env, 'GET', '/auth/me', { cookie }); }

async function buy(env, cookie, product = 'A2') {
  const r = await req(env, 'POST', '/orders', { cookie, body: { product_id: product } });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  return r.json;
}
function gatewayPays(orderId) {
  const o = cashfree.orders.get(orderId);
  o.order_status = 'PAID';
  o.payments = [{ cf_payment_id: 'pay_' + orderId.slice(-6), payment_status: 'SUCCESS' }];
}

test.before(setupGoogleKey);

/* ================= AUTH ================= */
test('signup → session cookie is HttpOnly/Secure/SameSite=None; /auth/me works', async () => {
  const env = makeEnv();
  const r = await req(env, 'POST', '/auth/signup', { body: { email: 'A@Example.com', password: 'correct-horse-9' } });
  assert.equal(r.status, 201);
  const sc = r.headers.get('set-cookie');
  assert.match(sc, /HttpOnly/); assert.match(sc, /Secure/); assert.match(sc, /SameSite=None/);
  const m = await me(env, cookieOf(r));
  assert.equal(m.status, 200);
  assert.equal(m.json.user.email, 'a@example.com');
  assert.equal(m.json.entitlements.A1, false);
  const dup = await req(env, 'POST', '/auth/signup', { body: { email: 'a@example.com', password: 'another-pass-1' } });
  assert.equal(dup.status, 409);
  const weak = await req(env, 'POST', '/auth/signup', { body: { email: 'b@example.com', password: 'short' } });
  assert.equal(weak.status, 400);
});

test('login: right password → session; wrong password → 401; repeated failures → 429', async () => {
  const env = makeEnv();
  const { email } = await signupUser(env);
  const ok = await req(env, 'POST', '/auth/login', { body: { email, password: 'correct-horse-9' } });
  assert.equal(ok.status, 200);
  assert.ok(cookieOf(ok));
  const ip = { 'CF-Connecting-IP': '198.51.100.7' };
  let last;
  for (let i = 0; i < 11; i++) last = await req(env, 'POST', '/auth/login', { headers: ip, body: { email, password: 'wrong-password' } });
  assert.equal(last.status, 429);
});

test('logout revokes the session server-side', async () => {
  const env = makeEnv();
  const { cookie } = await signupUser(env);
  assert.equal((await me(env, cookie)).status, 200);
  const out = await req(env, 'POST', '/auth/logout', { cookie });
  assert.equal(out.status, 200);
  assert.equal((await me(env, cookie)).status, 401, 'old cookie no longer valid');
});

test('expired session → 401 everywhere (me, orders, AI)', async () => {
  const env = makeEnv({ AI_ENABLED: 'true', TUTOR: { fetch: async () => Response.json({ ok: true }) } });
  const { cookie } = await signupUser(env);
  env.DB.raw.exec('UPDATE sessions SET expires_at = 1');
  assert.equal((await me(env, cookie)).status, 401);
  assert.equal((await req(env, 'POST', '/orders', { cookie, body: { product_id: 'A1' } })).status, 401);
  assert.equal((await req(env, 'POST', '/ai/check_exercise', { cookie, body: { chapterId: 'a1-1-alphabet' } })).status, 401);
});

test('forged / garbage session cookies are rejected', async () => {
  const env = makeEnv();
  for (const cookie of ['kw_session=', 'kw_session=abc', 'kw_session=' + 'f'.repeat(64)]) {
    assert.equal((await me(env, cookie)).status, 401);
  }
});

test('Google login: valid token creates account + session; bad audience/expired rejected; email clash refused', async () => {
  const env = makeEnv();
  const tok = await googleIdToken({ sub: 'g-123', email: 'g@example.com', name: 'G' });
  const r = await req(env, 'POST', '/auth/google', { body: { credential: tok } });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.ok(cookieOf(r));
  const again = await req(env, 'POST', '/auth/google', { body: { credential: tok } });
  assert.equal(again.json.user.id, r.json.user.id, 'same Google account → same Klarweg user');
  const wrongAud = await req(env, 'POST', '/auth/google', { body: { credential: await googleIdToken({ sub: 'g-9', email: 'x@example.com', aud: 'someone-else' }) } });
  assert.equal(wrongAud.status, 401);
  const expired = await req(env, 'POST', '/auth/google', { body: { credential: await googleIdToken({ sub: 'g-8', email: 'y@example.com', exp: 100 }) } });
  assert.equal(expired.status, 401);
  // An existing email/password account is never silently taken over by Google.
  await signupUser(env, 'owner@example.com');
  const clash = await req(env, 'POST', '/auth/google', { body: { credential: await googleIdToken({ sub: 'g-777', email: 'owner@example.com' }) } });
  assert.equal(clash.status, 409);
});

test('CSRF: state-changing request from a foreign origin is refused', async () => {
  const env = makeEnv();
  const { cookie } = await signupUser(env);
  const r = await req(env, 'POST', '/orders', { cookie, origin: 'https://evil.example', body: { product_id: 'A1' } });
  assert.equal(r.status, 403);
  const ai = await req(env, 'POST', '/ai/check_writing', { cookie, origin: 'https://evil.example', body: {} });
  assert.equal(ai.status, 403);
});

/* ================= PAYMENT ================= */
test('config interlock: sandbox mode refuses a live app id; production refuses a TEST id', () => {
  assert.equal(cashfreeConfigProblem({ CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1', CASHFREE_SECRET_KEY: 's' }), null);
  assert.equal(cashfreeConfigProblem({ CASHFREE_ENV: 'production', CASHFREE_APP_ID: '123livekey', CASHFREE_SECRET_KEY: 's' }), null);
  assert.match(cashfreeConfigProblem({ CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: '123livekey', CASHFREE_SECRET_KEY: 's' }), /live app id/);
  assert.match(cashfreeConfigProblem({ CASHFREE_ENV: 'production', CASHFREE_APP_ID: 'TEST1', CASHFREE_SECRET_KEY: 's' }), /TEST/);
  assert.match(cashfreeConfigProblem({ CASHFREE_ENV: 'prod', CASHFREE_APP_ID: 'x', CASHFREE_SECRET_KEY: 's' }), /must be/);
  assert.match(cashfreeConfigProblem({ CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1' }), /SECRET/);
  // secret-key environment marker must agree with the mode
  assert.match(cashfreeConfigProblem({ CASHFREE_ENV: 'production', CASHFREE_APP_ID: '123live', CASHFREE_SECRET_KEY: 'cfsk_ma_test_abc' }), /sandbox \(test\) secret/);
  assert.match(cashfreeConfigProblem({ CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1', CASHFREE_SECRET_KEY: 'cfsk_ma_prod_abc' }), /production secret/);
  assert.equal(cashfreeConfigProblem({ CASHFREE_ENV: 'production', CASHFREE_APP_ID: '123live', CASHFREE_SECRET_KEY: 'cfsk_ma_prod_abc' }), null);
  // callback URLs must be well-formed https
  assert.match(cashfreeConfigProblem({ CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1', CASHFREE_SECRET_KEY: 's', CASHFREE_NOTIFY_URL: 'http://x.dev/webhooks/cashfree' }), /NOTIFY/);
  assert.match(cashfreeConfigProblem({ CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1', CASHFREE_SECRET_KEY: 's', SITE_BASE_URL: 'https://klarweg.in/' }), /SITE_BASE_URL/);
  assert.equal(cashfreeConfigProblem({ CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1', CASHFREE_SECRET_KEY: 's', SITE_BASE_URL: 'https://klarweg.in', CASHFREE_NOTIFY_URL: 'https://api.klarweg.in/webhooks/cashfree' }), null);
});

test('repeated confirmation polls after payment: one grant, stable status', async () => {
  const env = makeEnv();
  const { cookie, id } = await signupUser(env);
  await withPhone(env, cookie);
  const { order } = await buy(env, cookie, 'B1');
  gatewayPays(order.id);
  const polls = await Promise.all(Array.from({ length: 5 }, () => req(env, 'GET', `/orders/${order.id}`, { cookie })));
  assert.ok(polls.every((p) => p.json.order.status === 'paid'));
  assert.equal((await signedWebhook(env, successPayload(order.id))).json.duplicate, true);
  const n = (await env.DB.prepare("SELECT COUNT(*) AS n FROM user_entitlements WHERE user_id = ?1").bind(id).first()).n;
  assert.equal(n, 1);
});

test('abandoned checkout (gateway still ACTIVE): nothing granted, order stays open, can start again', async () => {
  const env = makeEnv();
  const { cookie } = await signupUser(env);
  await withPhone(env, cookie);
  const { order } = await buy(env, cookie, 'A2');
  const r = await req(env, 'GET', `/orders/${order.id}`, { cookie });
  assert.equal(r.json.order.status, 'created');
  assert.equal(r.json.order.cashfreeStatus, 'active');
  assert.equal((await me(env, cookie)).json.entitlements.A2, false);
  assert.equal((await req(env, 'POST', '/orders', { cookie, body: { product_id: 'A2' } })).status, 200);
});

test('client cannot claim payment: forged webhook body without a valid signature grants nothing', async () => {
  const env = makeEnv();
  const { cookie } = await signupUser(env);
  await withPhone(env, cookie);
  const { order } = await buy(env, cookie, 'C2');
  const r = await req(env, 'POST', '/webhooks/cashfree', { origin: null, body: successPayload(order.id), headers: { 'x-webhook-timestamp': String(Math.floor(Date.now() / 1000)), 'x-webhook-signature': 'forged' } });
  assert.equal(r.status, 401);
  assert.equal((await me(env, cookie)).json.entitlements.C2, false);
});

test('misconfigured payments refuse to start (no Cashfree call)', async () => {
  const env = makeEnv({ CASHFREE_ENV: 'production' }); // but TEST app id
  const { cookie } = await signupUser(env);
  await withPhone(env, cookie);
  const before = cashfree.calls.length;
  const r = await req(env, 'POST', '/orders', { cookie, body: { product_id: 'A1' } });
  assert.equal(r.status, 503);
  assert.equal(cashfree.calls.length, before);
});

test('createOrder (sandbox): server price, sandbox host, checkout.mode=sandbox, origin-aware return_url', async () => {
  const env = makeEnv();
  const { cookie } = await signupUser(env);
  const noPhone = await req(env, 'POST', '/orders', { cookie, body: { product_id: 'A1' } });
  assert.equal(noPhone.status, 400, 'phone required before checkout');
  await withPhone(env, cookie);
  const bad = await req(env, 'POST', '/orders', { cookie, body: { product_id: 'FREE' } });
  assert.equal(bad.status, 400);
  const r = await req(env, 'POST', '/orders', { cookie, body: { product_id: 'A1', amount: 1 } });
  assert.equal(r.status, 200);
  assert.deepEqual(r.json.checkout, { mode: 'sandbox' });
  assert.equal(r.json.order.amountPaise, 199900, 'client-supplied amount ignored');
  const call = cashfree.calls.filter((c) => c.method === 'POST').pop();
  assert.equal(call.host, 'sandbox');
  assert.equal(call.body.order_amount, 1999);
  assert.equal(call.body.order_meta.return_url, 'https://reegangandhi16-pixel.github.io/klarweg/account/index.html?order_id={order_id}');
  const r2 = await req(env, 'POST', '/orders', { cookie, origin: 'https://klarweg.in', body: { product_id: 'A2' } });
  assert.equal(r2.status, 200);
  assert.equal(cashfree.calls.filter((c) => c.method === 'POST').pop().body.order_meta.return_url, 'https://klarweg.in/account/index.html?order_id={order_id}');
});

test('createOrder (production config): production host and checkout.mode=production', async () => {
  const env = makeEnv({ CASHFREE_ENV: 'production', CASHFREE_APP_ID: '98765livefake' });
  const { cookie } = await signupUser(env);
  await withPhone(env, cookie);
  const r = await req(env, 'POST', '/orders', { cookie, body: { product_id: 'B1' } });
  assert.equal(r.status, 200);
  assert.deepEqual(r.json.checkout, { mode: 'production' });
  assert.equal(cashfree.calls.filter((c) => c.method === 'POST').pop().host, 'production');
});

test('gateway outage on create → clean 502, no local order row', async () => {
  const env = makeEnv();
  const { cookie, id } = await signupUser(env);
  await withPhone(env, cookie);
  cashfree.failCreate = true;
  try {
    const r = await req(env, 'POST', '/orders', { cookie, body: { product_id: 'A1' } });
    assert.equal(r.status, 502);
  } finally { cashfree.failCreate = false; }
  const n = (await env.DB.prepare('SELECT COUNT(*) AS n FROM orders WHERE user_id = ?1').bind(id).first()).n;
  assert.equal(n, 0);
});

test('happy path: pay → webhook → entitlement → /auth/me → persists across new session', async () => {
  const env = makeEnv();
  const { cookie, email } = await signupUser(env);
  await withPhone(env, cookie);
  const { order } = await buy(env, cookie, 'A2');
  assert.equal((await me(env, cookie)).json.entitlements.A2, false, 'nothing granted at order creation');
  gatewayPays(order.id);
  const wh = await signedWebhook(env, successPayload(order.id));
  assert.equal(wh.status, 200, JSON.stringify(wh.json));
  const m = await me(env, cookie);
  assert.equal(m.json.entitlements.A2, true);
  assert.equal(m.json.entitlements.A1, false, 'only the purchased level');
  // refresh / new device: a fresh login sees the same entitlement
  const login = await req(env, 'POST', '/auth/login', { body: { email, password: 'correct-horse-9' } });
  assert.equal((await me(env, cookieOf(login))).json.entitlements.A2, true);
  const row = await env.DB.prepare('SELECT status, payment_id FROM orders WHERE id = ?1').bind(order.id).first();
  assert.equal(row.status, 'paid');
  const exp = await env.DB.prepare("SELECT expires_at FROM user_entitlements WHERE product_id = 'A2'").first();
  assert.ok(exp.expires_at > Date.now() / 1000 + 700 * 86400, 'single level: ~2-year expiry');
});

test('duplicate webhook: idempotent, one entitlement row', async () => {
  const env = makeEnv();
  const { cookie, id } = await signupUser(env);
  await withPhone(env, cookie);
  const { order } = await buy(env, cookie, 'B1');
  gatewayPays(order.id);
  for (let i = 0; i < 3; i++) assert.equal((await signedWebhook(env, successPayload(order.id))).status, 200);
  const n = (await env.DB.prepare("SELECT COUNT(*) AS n FROM user_entitlements WHERE user_id = ?1 AND product_id = 'B1'").bind(id).first()).n;
  assert.equal(n, 1);
});

test('webhook before gateway reads PAID: order untouched, 503 asks Cashfree to retry', async () => {
  const env = makeEnv();
  const { cookie } = await signupUser(env);
  await withPhone(env, cookie);
  const { order } = await buy(env, cookie, 'A1');
  const early = await signedWebhook(env, successPayload(order.id)); // gateway still ACTIVE
  assert.equal(early.status, 503);
  const row = await env.DB.prepare('SELECT status FROM orders WHERE id = ?1').bind(order.id).first();
  assert.equal(row.status, 'created', 'never marked failed');
  gatewayPays(order.id);
  assert.equal((await signedWebhook(env, successPayload(order.id))).status, 200);
  assert.equal((await me(env, cookie)).json.entitlements.A1, true);
});

test('lost/delayed webhook: learner poll of GET /orders/:id reconciles from Cashfree', async () => {
  const env = makeEnv();
  const { cookie } = await signupUser(env);
  await withPhone(env, cookie);
  const { order } = await buy(env, cookie, 'C1');
  const pending = await req(env, 'GET', `/orders/${order.id}`, { cookie });
  assert.equal(pending.json.order.status, 'created');
  gatewayPays(order.id); // webhook never arrives
  const polled = await req(env, 'GET', `/orders/${order.id}`, { cookie });
  assert.equal(polled.json.order.status, 'paid');
  assert.equal((await me(env, cookie)).json.entitlements.C1, true);
  // the late webhook is then a harmless duplicate
  assert.equal((await signedWebhook(env, successPayload(order.id))).json.duplicate, true);
});

test('failed / abandoned / expired order: no entitlement; expired mirrored locally; retry allowed', async () => {
  const env = makeEnv();
  const { cookie } = await signupUser(env);
  await withPhone(env, cookie);
  const { order } = await buy(env, cookie, 'A1');
  cashfree.orders.get(order.id).order_status = 'EXPIRED';
  const r = await req(env, 'GET', `/orders/${order.id}`, { cookie });
  assert.equal(r.json.order.status, 'expired');
  assert.equal((await me(env, cookie)).json.entitlements.A1, false);
  const failedWh = await signedWebhook(env, { type: 'PAYMENT_FAILED_WEBHOOK', data: { order: { order_id: order.id }, payment: { payment_status: 'FAILED' } } });
  assert.equal(failedWh.json.ignored, true);
  assert.equal((await me(env, cookie)).json.entitlements.A1, false);
  const retry = await req(env, 'POST', '/orders', { cookie, body: { product_id: 'A1' } });
  assert.equal(retry.status, 200, 'a new attempt can be started');
});

test('webhook forgery: bad signature, stale timestamp, amount mismatch', async () => {
  const env = makeEnv();
  const { cookie } = await signupUser(env);
  await withPhone(env, cookie);
  const { order } = await buy(env, cookie, 'B2');
  gatewayPays(order.id);
  assert.equal((await signedWebhook(env, successPayload(order.id), { secret: 'wrong' })).status, 401);
  assert.equal((await signedWebhook(env, successPayload(order.id), { ts: Math.floor(Date.now() / 1000) - 3600 })).status, 401);
  assert.equal((await me(env, cookie)).json.entitlements.B2, false);
  cashfree.orders.get(order.id).order_amount = 1; // gateway says a different amount
  const mm = await signedWebhook(env, successPayload(order.id));
  assert.equal(mm.status, 400);
  assert.equal((await me(env, cookie)).json.entitlements.B2, false);
  assert.equal((await env.DB.prepare('SELECT status FROM orders WHERE id = ?1').bind(order.id).first()).status, 'review');
});

test('orders are private: another user cannot read or reconcile my order', async () => {
  const env = makeEnv();
  const a = await signupUser(env);
  await withPhone(env, a.cookie);
  const { order } = await buy(env, a.cookie, 'A1');
  const b = await signupUser(env);
  const r = await req(env, 'GET', `/orders/${order.id}`, { cookie: b.cookie });
  assert.equal(r.status, 404);
});

test('duplicate purchase of an owned level → 409; Lifetime unlocks all levels', async () => {
  const env = makeEnv();
  const { cookie } = await signupUser(env);
  await withPhone(env, cookie);
  const { order } = await buy(env, cookie, 'A1');
  gatewayPays(order.id);
  await signedWebhook(env, successPayload(order.id));
  assert.equal((await req(env, 'POST', '/orders', { cookie, body: { product_id: 'A1' } })).status, 409);
  const life = await buy(env, cookie, 'LIFETIME');
  gatewayPays(life.order.id);
  await signedWebhook(env, successPayload(life.order.id));
  const ent = (await me(env, cookie)).json.entitlements;
  assert.ok(['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'LIFETIME'].every((k) => ent[k] === true));
  assert.equal((await req(env, 'POST', '/orders', { cookie, body: { product_id: 'C2' } })).status, 409);
});

test('expired single-level entitlement locks again and can be renewed', async () => {
  const env = makeEnv();
  const { cookie } = await signupUser(env);
  await withPhone(env, cookie);
  const { order } = await buy(env, cookie, 'A2');
  gatewayPays(order.id);
  await signedWebhook(env, successPayload(order.id));
  env.DB.raw.exec("UPDATE user_entitlements SET expires_at = 10 WHERE product_id = 'A2'");
  assert.equal((await me(env, cookie)).json.entitlements.A2, false);
  const again = await buy(env, cookie, 'A2');
  gatewayPays(again.order.id);
  await signedWebhook(env, successPayload(again.order.id));
  assert.equal((await me(env, cookie)).json.entitlements.A2, true);
});

/* ================= KLARWEG AI FRONT DOOR ================= */
function tutorStub(reply = { ok: true, source: 'ai', result: { correct: false }, meta: { llm: true, usage: { input: 1000, output: 200, calls: 1 }, costMicros: 2000 } }) {
  const seen = [];
  return { seen, fetch: async (url, init) => { seen.push({ url, body: JSON.parse(init.body) }); return Response.json(typeof reply === 'function' ? reply(seen.length) : reply); } };
}
const aiEnv = (tutor, extra = {}) => makeEnv({ AI_ENABLED: 'true', TUTOR: tutor, ...extra });
const aiBody = (chapterId = 'a2-5-dass') => ({ chapterId, sectionId: 'exercises', itemId: 'ex.gap', input: 'x | y', attempt: 1 });

async function entitle(env, userId, product) {
  await env.DB.prepare('INSERT INTO user_entitlements (user_id, product_id, source_order_id, granted_at, expires_at) VALUES (?1, ?2, NULL, 1, NULL)').bind(userId, product).run();
}

test('AI kill switch: disabled unless AI_ENABLED=true and binding present', async () => {
  const env = makeEnv({ AI_ENABLED: 'false', TUTOR: tutorStub() });
  const { cookie } = await signupUser(env);
  assert.equal((await req(env, 'POST', '/ai/check_exercise', { cookie, body: aiBody() })).status, 503);
  assert.equal((await req(env, 'GET', '/ai/status')).json.enabled, false);
  const noBinding = makeEnv({ AI_ENABLED: 'true' });
  assert.equal((await req(noBinding, 'GET', '/ai/status')).json.enabled, false);
});

test('AI: unauthenticated → 401; unknown action → 404; bad chapter → 400', async () => {
  const t = tutorStub();
  const env = aiEnv(t);
  assert.equal((await req(env, 'POST', '/ai/check_exercise', { body: aiBody() })).status, 401);
  const { cookie } = await signupUser(env);
  assert.equal((await req(env, 'POST', '/ai/roleplay_unlimited', { cookie, body: aiBody() })).status, 404);
  assert.equal((await req(env, 'POST', '/ai/check_exercise', { cookie, body: { ...aiBody(), chapterId: '../x' } })).status, 400);
  assert.equal(t.seen.length, 0);
});

test('AI entitlement: locked level → 403; owned level → allowed; Chapter 1 → preview tier', async () => {
  const t = tutorStub();
  const env = aiEnv(t);
  const u = await signupUser(env);
  const locked = await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody('a2-5-dass') });
  assert.equal(locked.status, 403);
  const preview = await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody('a2-1-perfekt-mit-haben') });
  assert.equal(preview.status, 200);
  const st = await req(env, 'GET', '/ai/status?chapter=a2-1-perfekt-mit-haben', { cookie: u.cookie });
  assert.equal(st.json.tier, 'preview');
  await entitle(env, u.id, 'A2');
  assert.equal((await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody('a2-5-dass') })).status, 200);
  assert.equal((await req(env, 'GET', '/ai/status?chapter=a2-5-dass', { cookie: u.cookie })).json.tier, 'chat', 'owned level → the account-wide allowance');
});

test('AI forwards no personal data to the tutor', async () => {
  const t = tutorStub();
  const env = aiEnv(t);
  const u = await signupUser(env, 'private.person@example.com');
  await entitle(env, u.id, 'A2');
  await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: { ...aiBody(), email: 'leak@example.com', userId: 'x', name: 'Leak' } });
  const sent = JSON.stringify(t.seen[0].body);
  assert.ok(!sent.includes('private.person') && !sent.includes(u.id) && !sent.includes('leak@') && !sent.includes('Leak'));
  assert.deepEqual(Object.keys(t.seen[0].body).filter((k) => t.seen[0].body[k] !== undefined).sort(), ['attempt', 'chapterId', 'input', 'itemId', 'lang', 'sectionId']);
});

test('AI quota: daily limit enforced atomically; deterministic answers are refunded', async () => {
  const t = tutorStub();
  const env = aiEnv(t, { AI_CHAT_DAILY_UNITS: '3' });
  const u = await signupUser(env);
  await entitle(env, u.id, 'A2');
  const results = await Promise.all(Array.from({ length: 6 }, () => req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() })));
  assert.equal(results.filter((r) => r.status === 200).length, 3);
  assert.equal(results.filter((r) => r.status === 429).length, 3);
  // a fresh user whose calls are deterministic (no model) never runs out
  const t2 = tutorStub({ ok: true, source: 'deterministic', result: { correct: true }, meta: { llm: false } });
  const env2 = aiEnv(t2, { AI_CHAT_DAILY_UNITS: '2' });
  const v = await signupUser(env2);
  await entitle(env2, v.id, 'A2');
  for (let i = 0; i < 5; i++) assert.equal((await req(env2, 'POST', '/ai/check_exercise', { cookie: v.cookie, body: aiBody() })).status, 200);
});

test('AI quota: monthly limit and preview limits', async () => {
  const env = aiEnv(tutorStub(), { AI_CHAT_MONTHLY_UNITS: '2', AI_PREVIEW_DAILY_UNITS: '1' });
  const u = await signupUser(env);
  await entitle(env, u.id, 'A2');
  assert.equal((await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() })).status, 200);
  assert.equal((await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() })).status, 200);
  const third = await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() });
  assert.equal(third.status, 429);
  assert.equal(third.json.error, 'quota_month');
  const p = await signupUser(env);
  assert.equal((await req(env, 'POST', '/ai/check_exercise', { cookie: p.cookie, body: aiBody('b1-1-infinitiv-mit-zu') })).status, 200);
  assert.equal((await req(env, 'POST', '/ai/check_exercise', { cookie: p.cookie, body: aiBody('b1-1-infinitiv-mit-zu') })).json.error, 'quota_day');
});

test('AI global daily spend breaker trips for everyone', async () => {
  const env = aiEnv(tutorStub(), { AI_GLOBAL_DAILY_BUDGET_MICROS: '3000' }); // each call costs 2000
  const u = await signupUser(env);
  await entitle(env, u.id, 'A2');
  assert.equal((await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() })).status, 200);
  assert.equal((await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() })).status, 200);
  const tripped = await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() });
  assert.equal(tripped.status, 503);
  assert.equal(tripped.json.error, 'ai_busy');
  const g = await env.DB.prepare('SELECT requests, cost_micros, input_tokens FROM ai_global').first();
  assert.equal(g.requests, 2); assert.equal(g.cost_micros, 4000); assert.equal(g.input_tokens, 2000);
});

test('AI tutor failure: learner refunded, failure counted, clean 503', async () => {
  const failing = { fetch: async () => { throw new Error('binding down'); } };
  const env = aiEnv(failing, { AI_CHAT_DAILY_UNITS: '1' });
  const u = await signupUser(env);
  await entitle(env, u.id, 'A2');
  for (let i = 0; i < 3; i++) {
    const r = await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() });
    assert.equal(r.status, 503);
    assert.equal(r.json.error, 'ai_unavailable');
  }
  const used = await env.DB.prepare("SELECT units FROM ai_usage WHERE period LIKE 'cd:%'").first();
  assert.equal(used.units, 0);
});

test('AI usage tables store counts only — no learner text', async () => {
  const env = aiEnv(tutorStub());
  const u = await signupUser(env);
  await entitle(env, u.id, 'A2');
  await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: { ...aiBody(), input: 'SECRET-LEARNER-TEXT | x' } });
  const dump = JSON.stringify([
    ...(await env.DB.prepare('SELECT * FROM ai_usage').all()).results,
    ...(await env.DB.prepare('SELECT * FROM ai_global').all()).results,
  ]);
  assert.ok(!dump.includes('SECRET-LEARNER-TEXT'));
});

test('AI response to the browser strips internal meta (provider, tokens, cost)', async () => {
  const env = aiEnv(tutorStub());
  const u = await signupUser(env);
  await entitle(env, u.id, 'A2');
  const r = await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() });
  assert.equal(r.json.meta, undefined);
  assert.ok(!r.text.includes('costMicros'));
});

/* ---------- failed provider calls cannot bypass the global day ---------- */
const failedTutor = (failedCalls, costMicros = 0) => tutorStub({ ok: true, source: 'fallback', result: { correct: false }, error: 'ai_timeout', meta: { llm: true, usage: { input: 0, output: 0, calls: 0, failedCalls }, costMicros } });

test('AI accounting: failed provider calls count against the global day; the learner is refunded', async () => {
  const env = aiEnv(failedTutor(1, 900));
  const u = await signupUser(env);
  await entitle(env, u.id, 'A2');
  const r = await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() });
  assert.equal(r.status, 200);
  assert.equal(r.json.source, 'fallback');
  const g = await env.DB.prepare('SELECT requests, cost_micros, failures FROM ai_global').first();
  assert.equal(g.requests, 1); assert.equal(g.cost_micros, 900); assert.equal(g.failures, 1);
  const used = await env.DB.prepare("SELECT units FROM ai_usage WHERE period LIKE 'cd:%'").first();
  assert.equal(used.units, 0, 'learner not charged for our failure');
});

test('AI accounting: repeated refunded failures still trip the global request ceiling', async () => {
  const t = failedTutor(2);
  const env = aiEnv(t, { AI_GLOBAL_DAILY_REQUESTS: '4' });
  const u = await signupUser(env);
  await entitle(env, u.id, 'A2');
  assert.equal((await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() })).status, 200);
  assert.equal((await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() })).status, 200);
  const tripped = await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() });
  assert.equal(tripped.status, 503);
  assert.equal(tripped.json.error, 'ai_busy');
  assert.equal(t.seen.length, 2, 'no provider traffic after the ceiling');
});

test('AI accounting: our own 25 s abort is recorded as a failed request; a binding error before the tutor runs is not', async () => {
  const timedOut = { fetch: async () => { throw Object.assign(new Error('The operation was aborted due to timeout'), { name: 'TimeoutError' }); } };
  const env = aiEnv(timedOut);
  const u = await signupUser(env);
  await entitle(env, u.id, 'A2');
  const r = await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() });
  assert.equal(r.status, 503);
  assert.equal(r.json.error, 'ai_unavailable');
  const g = await env.DB.prepare('SELECT requests, failures FROM ai_global').first();
  assert.equal(g.requests, 1); assert.equal(g.failures, 1);

  const down = aiEnv({ fetch: async () => { throw new Error('binding down'); } });
  const v = await signupUser(down);
  await entitle(down, v.id, 'A2');
  assert.equal((await req(down, 'POST', '/ai/check_exercise', { cookie: v.cookie, body: aiBody() })).status, 503);
  assert.equal(await down.DB.prepare('SELECT requests FROM ai_global').first(), null);
});

/* ---------- homepage chat ---------- */
const chatReply = { ok: true, source: 'ai', result: { answer: 'a', examples: [], follow_ups: [] }, meta: { llm: true, usage: { input: 1500, output: 400, calls: 1 }, costMicros: 350 } };
const chatBody = (message = 'What is the difference between gern and gerne?', extra = {}) => ({ message, ...extra });

test('AI chat: signed out with anonymous chat off → 401; signed in without any level → 403; tutor never called', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t, { AI_ANON_DAILY_UNITS: '0' });
  assert.equal((await req(env, 'POST', '/ai/chat', { body: chatBody() })).status, 401);
  const u = await signupUser(env);
  const r = await req(env, 'POST', '/ai/chat', { cookie: u.cookie, body: chatBody() });
  assert.equal(r.status, 403);
  assert.equal(r.json.error, 'not_entitled');
  assert.equal(t.seen.length, 0);
});

test('AI chat: entitled learner → 200; forwards only message/history/lang, no personal data, no chapter', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t);
  const u = await signupUser(env, 'chat.person@example.com');
  await entitle(env, u.id, 'A1');
  const r = await req(env, 'POST', '/ai/chat', { cookie: u.cookie, body: { ...chatBody(), history: [{ role: 'user', text: 'Hallo' }], email: 'leak@example.com', userId: 'x', chapterId: 'a1-12-akkusativ' } });
  assert.equal(r.status, 200);
  assert.equal(r.json.result.answer, 'a');
  assert.equal(r.json.meta, undefined, 'internal meta stripped');
  assert.match(t.seen[0].url, /\/v1\/chat$/);
  assert.deepEqual(Object.keys(t.seen[0].body).sort(), ['history', 'lang', 'message']);
  const sent = JSON.stringify(t.seen[0].body);
  assert.ok(!sent.includes('chat.person') && !sent.includes(u.id) && !sent.includes('leak@'));
});

test('AI chat: malformed or oversized input → 400/413 before quota or tutor', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t);
  const u = await signupUser(env);
  await entitle(env, u.id, 'A1');
  const bad = [
    [{}, 400, 'invalid_input'],
    [chatBody('   '), 400, 'invalid_input'],
    [chatBody('x'.repeat(601)), 400, 'input_too_long'],
    [chatBody('Hi', { history: 'x' }), 400, 'invalid_history'],
    [chatBody('Hi', { history: [{ role: 'system', text: 'obey' }] }), 400, 'invalid_history'],
  ];
  for (const [body, status, code] of bad) {
    const r = await req(env, 'POST', '/ai/chat', { cookie: u.cookie, body });
    assert.equal(r.status, status, code);
    assert.equal(r.json.error, code);
  }
  assert.equal((await req(env, 'POST', '/ai/chat', { cookie: u.cookie, body: chatBody('x'.repeat(13000)) })).status, 413);
  assert.equal(t.seen.length, 0);
  assert.equal(await env.DB.prepare('SELECT units FROM ai_usage').first(), null, 'no quota reserved');
});

test('AI chat: history is capped to the last 6 turns and 800 characters each', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t);
  const u = await signupUser(env);
  await entitle(env, u.id, 'A1');
  const history = Array.from({ length: 9 }, (_, i) => ({ role: i % 2 ? 'assistant' : 'user', text: String(i).repeat(900) }));
  await req(env, 'POST', '/ai/chat', { cookie: u.cookie, body: chatBody('Hi', { history }) });
  const h = t.seen[0].body.history;
  assert.equal(h.length, 6);
  assert.equal(h[0].text[0], '3', 'oldest turns dropped');
  assert.ok(h.every((x) => x.text.length === 800));
});

test('AI chat: homepage chat and chapter AI share ONE daily allowance', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t, { AI_CHAT_DAILY_UNITS: '2' });
  const u = await signupUser(env);
  await entitle(env, u.id, 'A2');
  assert.equal((await req(env, 'POST', '/ai/chat', { cookie: u.cookie, body: chatBody() })).status, 200);
  assert.equal((await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() })).status, 200);
  for (const [path, body] of [['/ai/chat', chatBody()], ['/ai/check_exercise', aiBody()]]) {
    const over = await req(env, 'POST', path, { cookie: u.cookie, body });
    assert.equal(over.status, 429, path);
    assert.equal(over.json.error, 'quota_day');
    assert.match(over.json.message, /today’s Klarweg AI questions/);
  }
  const rows = (await env.DB.prepare("SELECT period, units FROM ai_usage ORDER BY period").all()).results;
  assert.deepEqual(rows.filter((r) => r.period.startsWith('cd:')).map((r) => r.units), [2], 'both surfaces in one bucket');
  assert.equal(rows.filter((r) => /^d:|^m:/.test(r.period)).length, 0, 'no separate chapter bucket');
});

test('AI chat: usage accounting — success charged and recorded globally; failure refunded but still counted globally', async () => {
  const env = aiEnv(tutorStub(chatReply));
  const u = await signupUser(env);
  await entitle(env, u.id, 'A1');
  await req(env, 'POST', '/ai/chat', { cookie: u.cookie, body: chatBody() });
  let g = await env.DB.prepare('SELECT requests, cost_micros, failures FROM ai_global').first();
  assert.equal(g.requests, 1); assert.equal(g.cost_micros, 350); assert.equal(g.failures, 0);
  assert.equal((await env.DB.prepare("SELECT units FROM ai_usage WHERE period LIKE 'cd:%'").first()).units, 1);

  const failing = tutorStub({ ok: false, error: 'ai_timeout', message: 'Klarweg AI chat is unavailable right now.', meta: { llm: true, usage: { input: 0, output: 0, calls: 0, failedCalls: 1 }, costMicros: 950 } });
  const env2 = aiEnv(failing);
  const v = await signupUser(env2);
  await entitle(env2, v.id, 'A1');
  const r = await req(env2, 'POST', '/ai/chat', { cookie: v.cookie, body: chatBody() });
  assert.equal(r.status, 503);
  g = await env2.DB.prepare('SELECT requests, cost_micros, failures FROM ai_global').first();
  assert.equal(g.requests, 1); assert.equal(g.cost_micros, 950); assert.equal(g.failures, 1);
  assert.equal((await env2.DB.prepare("SELECT units FROM ai_usage WHERE period LIKE 'cd:%'").first()).units, 0, 'learner refunded');
});

test('AI chat: shares the global ceiling and the kill switch', async () => {
  const env = aiEnv(tutorStub(chatReply), { AI_GLOBAL_DAILY_BUDGET_MICROS: '300' });
  const u = await signupUser(env);
  await entitle(env, u.id, 'A1');
  assert.equal((await req(env, 'POST', '/ai/chat', { cookie: u.cookie, body: chatBody() })).status, 200);
  const tripped = await req(env, 'POST', '/ai/chat', { cookie: u.cookie, body: chatBody() });
  assert.equal(tripped.status, 503);
  assert.equal(tripped.json.error, 'ai_busy');
  const off = makeEnv({ AI_ENABLED: 'false', TUTOR: tutorStub(chatReply) });
  const w = await signupUser(off);
  assert.equal((await req(off, 'POST', '/ai/chat', { cookie: w.cookie, body: chatBody() })).status, 503);
});

test('AI chat status: scope=chat reports eligibility and remaining chat messages only', async () => {
  const env = aiEnv(tutorStub(chatReply));
  assert.deepEqual((await req(env, 'GET', '/ai/status?scope=chat', { headers: { 'X-Klarweg-Anon': dev(1) } })).json, { ok: true, enabled: true, signedIn: false, eligible: true, tier: 'anon', remaining: { day: 3 } });
  const u = await signupUser(env);
  assert.equal((await req(env, 'GET', '/ai/status?scope=chat', { cookie: u.cookie })).json.eligible, false);
  await entitle(env, u.id, 'B1');
  await req(env, 'POST', '/ai/chat', { cookie: u.cookie, body: chatBody() });
  const s = (await req(env, 'GET', '/ai/status?scope=chat', { cookie: u.cookie })).json;
  assert.equal(s.eligible, true);
  assert.equal(s.tier, 'chat');
  assert.deepEqual(s.remaining, { day: 19, month: 99 });
  // the chapter status is unchanged by chat usage
  assert.deepEqual((await req(env, 'GET', '/ai/status?chapter=b1-10-passiv-praesens', { cookie: u.cookie })).json.remaining, { day: 19, month: 99 }, 'chapter status shows the same shared allowance');
});

/* ---------- homepage chat: 20/day per buyer account, 3/day per anonymous device ---------- */
import { readFileSync } from 'node:fs';
import { networkOf } from '../src/ratelimit.js';

/* A signed-out browser: its random device id (X-Klarweg-Anon) on a network (CF-Connecting-IP). */
function dev(n) { return n.toString(16).padStart(32, '0'); }
const anon = (ip, device, opts = {}) => ({ ...opts, headers: { 'CF-Connecting-IP': ip, ...(device ? { 'X-Klarweg-Anon': device } : {}), ...(opts.headers || {}) } });
const anonStatus = async (env, ip, device) => (await req(env, 'GET', '/ai/status?scope=chat', anon(ip, device))).json;
const anonAsk = (env, ip, device) => req(env, 'POST', '/ai/chat', anon(ip, device, { body: chatBody() }));
const today = () => new Date().toISOString().slice(0, 10);
const tomlVar = (k) => (readFileSync(path.join(WORKER_DIR, 'wrangler.toml'), 'utf8').match(new RegExp('^' + k + ' = "([^"]*)"', 'm')) || [])[1];

test('AI chat limits: shipped config — buyers 20/day + 100/month shared by homepage and chapters; anonymous 3/device, 30/network, 100 pool; global unchanged', () => {
  assert.equal(tomlVar('AI_CHAT_DAILY_UNITS'), '20');
  assert.equal(tomlVar('AI_CHAT_MONTHLY_UNITS'), '100');
  assert.equal(tomlVar('AI_ANON_DAILY_UNITS'), '3');
  assert.equal(tomlVar('AI_ANON_NETWORK_DAILY_REQUESTS'), '30');
  assert.equal(tomlVar('AI_ANON_GLOBAL_DAILY_REQUESTS'), '100');
  assert.equal(tomlVar('AI_DAILY_UNITS'), undefined, 'separate chapter allowance removed');
  assert.equal(tomlVar('AI_MONTHLY_UNITS'), undefined);
  assert.equal(tomlVar('AI_GLOBAL_DAILY_REQUESTS'), '300');
  assert.equal(tomlVar('AI_GLOBAL_DAILY_BUDGET_MICROS'), '1000000');
});

test('AI chat: a buyer gets 20 questions a day (21st → 429); the 100/month limit is unchanged', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t);
  const u = await signupUser(env);
  await entitle(env, u.id, 'A1');
  for (let i = 0; i < 20; i++) assert.equal((await req(env, 'POST', '/ai/chat', { cookie: u.cookie, body: chatBody() })).status, 200, 'question ' + (i + 1));
  const over = await req(env, 'POST', '/ai/chat', { cookie: u.cookie, body: chatBody() });
  assert.equal(over.status, 429);
  assert.equal(over.json.error, 'quota_day');
  assert.equal(t.seen.length, 20);
  assert.deepEqual((await req(env, 'GET', '/ai/status?scope=chat', { cookie: u.cookie })).json.remaining, { day: 0, month: 80 });

  // month: 100 used this month → quota_month even with the day untouched
  const env2 = aiEnv(tutorStub(chatReply));
  const v = await signupUser(env2);
  await entitle(env2, v.id, 'A1');
  await env2.DB.prepare('INSERT INTO ai_usage (user_id, period, units) VALUES (?1, ?2, 100)').bind(v.id, 'cm:' + today().slice(0, 7)).run();
  const month = await req(env2, 'POST', '/ai/chat', { cookie: v.cookie, body: chatBody() });
  assert.equal(month.status, 429);
  assert.equal(month.json.error, 'quota_month');
});

test('AI chat: a buyer on two devices shares ONE account quota; the device header never changes it', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t);
  const u = await signupUser(env);
  await entitle(env, u.id, 'A1');
  const phone = anon('198.51.100.1', dev(101), { cookie: u.cookie, body: chatBody() });
  const laptop = anon('203.0.113.9', dev(102), { cookie: u.cookie, body: chatBody() });
  for (let i = 0; i < 10; i++) assert.equal((await req(env, 'POST', '/ai/chat', phone)).status, 200);
  for (let i = 0; i < 10; i++) assert.equal((await req(env, 'POST', '/ai/chat', laptop)).status, 200);
  assert.equal((await req(env, 'POST', '/ai/chat', phone)).status, 429, '21st on either device');
  assert.equal((await req(env, 'POST', '/ai/chat', laptop)).status, 429);
  for (const d of [phone, laptop]) {
    assert.deepEqual((await req(env, 'GET', '/ai/status?scope=chat', { ...d, body: undefined })).json.remaining, { day: 0, month: 80 });
  }
  const rows = (await env.DB.prepare('SELECT user_id, period FROM ai_usage').all()).results;
  assert.ok(rows.every((r) => r.user_id === u.id), 'signed-in use writes only the account’s rows');
  // those devices, signed out, still have their own untouched free questions
  assert.deepEqual((await anonStatus(env, '198.51.100.1', dev(101))).remaining, { day: 3 });
});

test('AI chat anonymous: each device gets 3 a day (3 → 2 → 1 → 0); the 4th → 429 and never reaches the tutor; nothing raw is stored or forwarded', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t);
  const ip = '198.51.100.7', a = dev(1);
  assert.deepEqual(await anonStatus(env, ip, a), { ok: true, enabled: true, signedIn: false, eligible: true, tier: 'anon', remaining: { day: 3 } });
  for (const left of [2, 1, 0]) {
    const r = await anonAsk(env, ip, a);
    assert.equal(r.status, 200);
    assert.equal(r.json.result.answer, 'a');
    assert.deepEqual((await anonStatus(env, ip, a)).remaining, { day: left });
  }
  const fourth = await anonAsk(env, ip, a);
  assert.equal(fourth.status, 429);
  assert.equal(fourth.json.error, 'quota_day');
  assert.match(fourth.json.message, /Sign in/);
  assert.equal(t.seen.length, 3, 'the 4th never reached the tutor');
  assert.deepEqual(Object.keys(t.seen[0].body).sort(), ['history', 'lang', 'message']);
  assert.ok(!JSON.stringify(t.seen).includes(ip) && !JSON.stringify(t.seen).includes(a), 'no IP or device id forwarded');
  const rows = (await env.DB.prepare('SELECT user_id, period, units FROM ai_usage ORDER BY period').all()).results;
  assert.ok(rows.every((r) => !r.user_id.includes('198.51') && !r.user_id.includes(a)), 'raw IP / device id never stored');
  assert.ok(rows.every((r) => !r.user_id.startsWith('usr_')), 'anonymous use never writes an account row');
  assert.deepEqual(rows.map((r) => [r.period.slice(0, 3), r.units]), [['ad:', 3], ['ag:', 3], ['an:', 3]]);
  // chapter actions stay sign-in only, with or without a device id
  assert.equal((await req(env, 'POST', '/ai/check_exercise', anon('198.51.100.9', dev(9), { body: aiBody() }))).status, 401);
});

test('AI chat anonymous: devices on the SAME network each get their own 3; the same id keeps its count; a new id starts fresh', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t);
  const ip = '198.51.100.20';
  for (let i = 0; i < 3; i++) assert.equal((await anonAsk(env, ip, dev(1))).status, 200);
  assert.equal((await anonAsk(env, ip, dev(1))).status, 429, 'device A used up');
  for (const d of [dev(2), dev(3)]) {
    assert.deepEqual((await anonStatus(env, ip, d)).remaining, { day: 3 }, 'untouched by device A');
    for (let i = 0; i < 3; i++) assert.equal((await anonAsk(env, ip, d)).status, 200);
    assert.equal((await anonAsk(env, ip, d)).status, 429);
  }
  // a reload sends the same id again → same count; a new id (cleared storage) → fresh 3
  assert.deepEqual((await anonStatus(env, ip, dev(1))).remaining, { day: 0 });
  assert.deepEqual((await anonStatus(env, ip, dev(4))).remaining, { day: 3 });
  assert.equal(t.seen.length, 9);
});

test('AI chat anonymous: the per-network cap (default 30) is a secondary limit on top of the per-device 3', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t);
  const ip = '198.51.100.30';
  for (let d = 1; d <= 10; d++) for (let i = 0; i < 3; i++) assert.equal((await anonAsk(env, ip, dev(d))).status, 200, `device ${d} q${i + 1}`);
  assert.equal(t.seen.length, 30);
  assert.deepEqual((await anonStatus(env, ip, dev(11))).remaining, { day: 0 }, 'a fresh device on a capped network sees 0');
  const capped = await anonAsk(env, ip, dev(11));
  assert.equal(capped.status, 429);
  assert.equal(capped.json.error, 'anon_busy');
  assert.equal(t.seen.length, 30, 'never reached the tutor');
  const devices = (await env.DB.prepare("SELECT units FROM ai_usage WHERE period LIKE 'ad:%' ORDER BY units").all()).results.map((r) => r.units);
  assert.deepEqual(devices, [0, ...Array(10).fill(3)], 'the refused device was released');
  assert.equal((await anonAsk(env, '198.51.100.31', dev(11))).status, 200, 'the same device on another network is fine');

  const small = aiEnv(tutorStub(chatReply), { AI_ANON_NETWORK_DAILY_REQUESTS: '4' });
  for (let i = 0; i < 3; i++) assert.equal((await anonAsk(small, ip, dev(1))).status, 200);
  assert.equal((await anonAsk(small, ip, dev(2))).status, 200);
  assert.equal((await anonAsk(small, ip, dev(2))).status, 429, 'network cap reached although device 2 has 2 left');
});

test('AI chat anonymous: separate from signed-in quotas in both directions; a signed-in non-buyer stays 403', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t);
  const ip = '198.51.100.40';
  const buyer = await signupUser(env);
  await entitle(env, buyer.id, 'A1');
  assert.equal((await req(env, 'POST', '/ai/chat', anon(ip, dev(1), { cookie: buyer.cookie, body: chatBody() }))).status, 200);
  assert.deepEqual((await anonStatus(env, ip, dev(1))).remaining, { day: 3 }, 'buyer use does not touch the device’s free questions');
  for (let i = 0; i < 3; i++) assert.equal((await anonAsk(env, ip, dev(1))).status, 200);
  assert.equal((await anonAsk(env, ip, dev(1))).status, 429);
  assert.equal((await req(env, 'POST', '/ai/chat', anon(ip, dev(1), { cookie: buyer.cookie, body: chatBody() }))).status, 200, 'the buyer is unaffected');
  assert.deepEqual((await req(env, 'GET', '/ai/status?scope=chat', anon(ip, dev(1), { cookie: buyer.cookie }))).json.remaining, { day: 18, month: 98 });

  const seen = t.seen.length;
  const plain = await signupUser(env);
  const r = await req(env, 'POST', '/ai/chat', anon('198.51.100.41', dev(2), { cookie: plain.cookie, body: chatBody() }));
  assert.equal(r.status, 403);
  assert.equal(r.json.error, 'not_entitled');
  assert.equal((await req(env, 'GET', '/ai/status?scope=chat', anon('198.51.100.41', dev(2), { cookie: plain.cookie }))).json.eligible, false);
  assert.equal(t.seen.length, seen, 'tutor not called');
});

test('AI chat anonymous: all visitors share a daily pool (default 100); buyers keep working', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t, { AI_ANON_GLOBAL_DAILY_REQUESTS: '2' });
  assert.equal((await anonAsk(env, '198.51.100.50', dev(1))).status, 200);
  assert.equal((await anonAsk(env, '198.51.100.51', dev(2))).status, 200);
  const third = await anonAsk(env, '198.51.100.52', dev(3));
  assert.equal(third.status, 429);
  assert.equal(third.json.error, 'anon_busy');
  assert.equal(t.seen.length, 2);
  const net = await env.DB.prepare("SELECT units FROM ai_usage WHERE period LIKE 'an:%' AND units = 0").first();
  assert.ok(net, 'the refused request released its network reservation');
  assert.deepEqual((await anonStatus(env, '198.51.100.53', dev(4))).remaining, { day: 0 });
  const buyer = await signupUser(env);
  await entitle(env, buyer.id, 'A1');
  assert.equal((await req(env, 'POST', '/ai/chat', { cookie: buyer.cookie, body: chatBody() })).status, 200, 'buyers are not limited by the anonymous pool');

  const env2 = aiEnv(tutorStub(chatReply));
  await env2.DB.prepare("INSERT INTO ai_usage (user_id, period, units) VALUES ('anon:all', ?1, 100)").bind('ag:' + today()).run();
  const full = await anonAsk(env2, '198.51.100.54', dev(5));
  assert.equal(full.status, 429);
  assert.equal(full.json.error, 'anon_busy');
});

test('AI chat anonymous: AI_ANON_DAILY_UNITS="0" switches it off; kill switch, 300-request and $1 ceilings still apply', async () => {
  const t = tutorStub(chatReply);
  const off = aiEnv(t, { AI_ANON_DAILY_UNITS: '0' });
  assert.deepEqual(await anonStatus(off, '198.51.100.60', dev(1)), { ok: true, enabled: true, signedIn: false, eligible: false });
  const r = await anonAsk(off, '198.51.100.60', dev(1));
  assert.equal(r.status, 401);
  assert.equal(r.json.error, 'auth_required');
  const killed = makeEnv({ AI_ENABLED: 'false', TUTOR: t });
  assert.equal((await anonAsk(killed, '198.51.100.61', dev(1))).status, 503);
  assert.deepEqual(await anonStatus(killed, '198.51.100.61', dev(1)), { ok: true, enabled: false });
  const requests = aiEnv(t, { AI_GLOBAL_DAILY_REQUESTS: tomlVar('AI_GLOBAL_DAILY_REQUESTS') });
  await requests.DB.prepare('INSERT INTO ai_global (day, requests) VALUES (?1, 300)').bind(today()).run();
  const busy = await anonAsk(requests, '198.51.100.62', dev(1));
  assert.equal(busy.status, 503);
  assert.equal(busy.json.error, 'ai_busy');
  const budget = aiEnv(t, { AI_GLOBAL_DAILY_BUDGET_MICROS: tomlVar('AI_GLOBAL_DAILY_BUDGET_MICROS') });
  await budget.DB.prepare('INSERT INTO ai_global (day, requests, cost_micros) VALUES (?1, 1, 1000000)').bind(today()).run();
  assert.equal((await anonAsk(budget, '198.51.100.63', dev(1))).json.error, 'ai_busy');
  assert.equal(t.seen.length, 0);
});

test('AI chat anonymous: a missing or malformed device id fails closed', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t);
  const ip = '198.51.100.70';
  assert.deepEqual(await anonStatus(env, ip, null), { ok: true, enabled: true, signedIn: false, eligible: false });
  for (const bad of [null, 'abc', dev(1).toUpperCase().replace(/0/g, 'A'), dev(1) + '0', 'g'.repeat(32), ' ' + dev(1).slice(1), '../../' + dev(1).slice(6)]) {
    const r = await anonAsk(env, ip, bad);
    assert.equal(r.status, 401, String(bad));
    assert.equal(r.json.error, 'auth_required');
  }
  assert.equal(t.seen.length, 0);
  assert.equal(await env.DB.prepare('SELECT units FROM ai_usage').first(), null, 'nothing reserved');
});

test('AI chat anonymous: a missing or foreign Origin, or no usable client IP, is refused; CORS allows only the site to send X-Klarweg-Anon', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t);
  const none = await req(env, 'POST', '/ai/chat', anon('198.51.100.80', dev(1), { origin: null, body: chatBody() }));
  assert.equal(none.status, 401);
  assert.equal(none.json.error, 'auth_required');
  assert.equal((await req(env, 'POST', '/ai/chat', anon('198.51.100.80', dev(1), { origin: 'https://evil.example', body: chatBody() }))).status, 403);
  assert.equal((await anonAsk(env, 'not-an-ip', dev(1))).status, 401);
  assert.equal(t.seen.length, 0);
  assert.equal(await env.DB.prepare('SELECT units FROM ai_usage').first(), null, 'nothing reserved');

  const pre = await req(env, 'OPTIONS', '/ai/chat', { headers: { 'Access-Control-Request-Method': 'POST', 'Access-Control-Request-Headers': 'content-type, x-klarweg-anon' } });
  assert.equal(pre.status, 204);
  assert.match(pre.headers.get('access-control-allow-headers'), /X-Klarweg-Anon/);
  assert.equal(pre.headers.get('access-control-allow-origin'), 'https://reegangandhi16-pixel.github.io');
  assert.equal((await req(env, 'OPTIONS', '/ai/chat', { origin: 'https://evil.example' })).status, 403);
});

test('AI chat anonymous: IPv6 is grouped by /64 for the network cap; IPv4-mapped IPv6 counts as the IPv4 address', async () => {
  assert.equal(networkOf('2001:db8:1:2::1'), '2001:0db8:0001:0002::/64');
  assert.equal(networkOf('2001:0DB8:0001:0002:aaaa:bbbb:cccc:dddd'), '2001:0db8:0001:0002::/64');
  assert.equal(networkOf('::ffff:198.51.100.60'), '198.51.100.60');
  assert.equal(networkOf('198.51.100.60'), '198.51.100.60');
  assert.equal(networkOf('2001:db8::1::2'), null);
  assert.equal(networkOf(''), null);

  const env = aiEnv(tutorStub(chatReply), { AI_ANON_NETWORK_DAILY_REQUESTS: '3' });
  const ips = ['2001:db8:1:2::1', '2001:db8:1:2:ffff::9', '2001:0db8:0001:0002:aaaa:bbbb:cccc:dddd'];
  for (let i = 0; i < ips.length; i++) assert.equal((await anonAsk(env, ips[i], dev(i + 1))).status, 200, ips[i]);
  const same = await anonAsk(env, '2001:db8:1:2:1234::5', dev(4));
  assert.equal(same.status, 429, 'same /64, new device, network cap reached');
  assert.equal(same.json.error, 'anon_busy');
  assert.equal((await anonAsk(env, '2001:db8:1:3::1', dev(4))).status, 200, 'the next /64 is a separate network');
});

test('AI chat anonymous: refunds — failed model call refunds the device but keeps the network, pool and global count; no-model answers and bad input cost nothing', async () => {
  const failing = tutorStub({ ok: false, error: 'ai_timeout', message: 'Klarweg AI chat is unavailable right now.', meta: { llm: true, usage: { input: 0, output: 0, calls: 0, failedCalls: 1 }, costMicros: 950 } });
  const env = aiEnv(failing);
  const r = await anonAsk(env, '198.51.100.90', dev(1));
  assert.equal(r.status, 503);
  const units = async (e, like) => (await e.DB.prepare('SELECT units FROM ai_usage WHERE period LIKE ?1').bind(like).first()).units;
  assert.equal(await units(env, 'ad:%'), 0, 'device refunded');
  assert.equal(await units(env, 'an:%'), 1, 'network cap keeps the model call');
  assert.equal(await units(env, 'ag:%'), 1, 'pool keeps the model call');
  const g = await env.DB.prepare('SELECT requests, failures FROM ai_global').first();
  assert.equal(g.requests, 1); assert.equal(g.failures, 1);
  assert.deepEqual((await anonStatus(env, '198.51.100.90', dev(1))).remaining, { day: 3 });

  const noModel = aiEnv(tutorStub({ ok: true, source: 'deterministic', result: { answer: 'x', examples: [], follow_ups: [] }, meta: { llm: false } }));
  assert.equal((await anonAsk(noModel, '198.51.100.91', dev(1))).status, 200);
  const rows = (await noModel.DB.prepare('SELECT units FROM ai_usage').all()).results;
  assert.equal(rows.length, 3);
  assert.ok(rows.every((x) => x.units === 0), 'device, network and pool all released');

  const bad = aiEnv(tutorStub(chatReply));
  assert.equal((await req(bad, 'POST', '/ai/chat', anon('198.51.100.92', dev(1), { body: chatBody('x'.repeat(601)) }))).status, 400);
  assert.equal(await bad.DB.prepare('SELECT units FROM ai_usage').first(), null);
});

test('AI chat status signed out: per device, exposes only the remaining count; non-chat scopes unchanged', async () => {
  const env = aiEnv(tutorStub(chatReply));
  await anonAsk(env, '198.51.100.95', dev(1));
  const s = await anonStatus(env, '198.51.100.95', dev(1));
  assert.deepEqual(s, { ok: true, enabled: true, signedIn: false, eligible: true, tier: 'anon', remaining: { day: 2 } });
  assert.ok(!JSON.stringify(s).includes('anon:') && !JSON.stringify(s).includes(dev(1)), 'no ids in the response');
  assert.deepEqual((await anonStatus(env, '198.51.100.95', dev(2))).remaining, { day: 3 });
  assert.deepEqual((await req(env, 'GET', '/ai/status?chapter=a1-1-alphabet', anon('198.51.100.95', dev(1)))).json, { ok: true, enabled: true, signedIn: false, eligible: false });
});

/* ---------- one account-wide allowance: homepage + chapters ---------- */
const chapterChat = (chapterId = 'a2-5-dass', extra = {}) => ({ chapterId, message: 'Why does dass send the verb to the end?', ...extra });

test('AI shared allowance: 5 homepage + 3 chapter exercise + 2 chapter chat = 10 of 20 used, on every surface', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t);
  const u = await signupUser(env);
  await entitle(env, u.id, 'A2');
  for (let i = 0; i < 5; i++) assert.equal((await req(env, 'POST', '/ai/chat', { cookie: u.cookie, body: chatBody() })).status, 200);
  for (let i = 0; i < 3; i++) assert.equal((await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody('a2-1-perfekt-mit-haben') })).status, 200);
  for (let i = 0; i < 2; i++) assert.equal((await req(env, 'POST', '/ai/chapter_chat', { cookie: u.cookie, body: chapterChat('a2-4-weil') })).status, 200);
  const want = { day: 10, month: 90 };
  assert.deepEqual((await req(env, 'GET', '/ai/status?scope=chat', { cookie: u.cookie })).json.remaining, want);
  assert.deepEqual((await req(env, 'GET', '/ai/status?chapter=a2-1-perfekt-mit-haben', { cookie: u.cookie })).json.remaining, want);
  assert.deepEqual((await req(env, 'GET', '/ai/status?chapter=a2-4-weil', { cookie: u.cookie })).json.remaining, want);
  for (let i = 0; i < 10; i++) assert.equal((await req(env, 'POST', i % 2 ? '/ai/chat' : '/ai/chapter_chat', { cookie: u.cookie, body: i % 2 ? chatBody() : chapterChat() })).status, 200);
  const seen = t.seen.length;
  for (const [path, body] of [['/ai/chat', chatBody()], ['/ai/chapter_chat', chapterChat()], ['/ai/explain_grammar', { ...aiBody(), sectionId: 'grammar', itemId: 'grammar.0', mode: 'simpler' }]]) {
    const r = await req(env, 'POST', path, { cookie: u.cookie, body });
    assert.equal(r.status, 429, path + ' after 20 in total');
    assert.equal(r.json.error, 'quota_day');
  }
  assert.equal(t.seen.length, seen, 'the 21st never reaches the tutor');
});

test('AI shared allowance: the 100/month limit covers homepage and chapters together', async () => {
  const env = aiEnv(tutorStub(chatReply));
  const u = await signupUser(env);
  await entitle(env, u.id, 'A2');
  await env.DB.prepare('INSERT INTO ai_usage (user_id, period, units) VALUES (?1, ?2, 99)').bind(u.id, 'cm:' + today().slice(0, 7)).run();
  assert.equal((await req(env, 'POST', '/ai/chapter_chat', { cookie: u.cookie, body: chapterChat() })).status, 200);
  for (const [path, body] of [['/ai/chat', chatBody()], ['/ai/check_exercise', aiBody()], ['/ai/chapter_chat', chapterChat()]]) {
    const r = await req(env, 'POST', path, { cookie: u.cookie, body });
    assert.equal(r.status, 429, path);
    assert.equal(r.json.error, 'quota_month');
    assert.match(r.json.message, /this month’s Klarweg AI questions/);
  }
});

test('AI shared allowance: a submitted exam writing check still costs 3 of the 20', async () => {
  const env = aiEnv(tutorStub());
  const u = await signupUser(env);
  await entitle(env, u.id, 'A1');
  const body = { chapterId: 'a1-12-goethe-mini-1', sectionId: 'writing', itemId: 'writing', input: 'Ich heiße Anna. Ich wohne in Köln.', mode: 'exam', submitted: true };
  assert.equal((await req(env, 'POST', '/ai/check_writing', { cookie: u.cookie, body })).status, 200);
  assert.deepEqual((await req(env, 'GET', '/ai/status?scope=chat', { cookie: u.cookie })).json.remaining, { day: 17, month: 97 });
  assert.equal((await req(env, 'POST', '/ai/check_writing', { cookie: u.cookie, body: { ...body, submitted: false, mode: 'check' } })).status, 200);
  assert.deepEqual((await req(env, 'GET', '/ai/status?scope=chat', { cookie: u.cookie })).json.remaining, { day: 16, month: 96 }, 'an ordinary check costs 1');
});

test('AI chapter chat: level owner only; forwards only chapterId/message/history/lang; the preview bucket stays separate', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t);
  const u = await signupUser(env, 'chapter.chat@example.com');
  await entitle(env, u.id, 'A1');
  const other = await req(env, 'POST', '/ai/chapter_chat', { cookie: u.cookie, body: chapterChat('a2-5-dass') });
  assert.equal(other.status, 403, 'owning A1 does not open A2 chapters');
  assert.equal(other.json.error, 'not_entitled');
  const r = await req(env, 'POST', '/ai/chapter_chat', { cookie: u.cookie, body: { ...chapterChat('a1-3-nominativ'), history: [{ role: 'user', text: 'Hallo' }], email: 'leak@example.com', userId: 'x', sectionId: 'grammar', itemId: 'grammar.0' } });
  assert.equal(r.status, 200);
  assert.equal(r.json.result.answer, 'a');
  assert.equal(r.json.meta, undefined);
  assert.match(t.seen[0].url, /\/v1\/chapter_chat$/);
  assert.deepEqual(Object.keys(t.seen[0].body).sort(), ['chapterId', 'history', 'lang', 'message']);
  assert.equal(t.seen[0].body.chapterId, 'a1-3-nominativ');
  const sent = JSON.stringify(t.seen[0].body);
  assert.ok(!sent.includes('chapter.chat') && !sent.includes(u.id) && !sent.includes('leak@'));
  const rows = (await env.DB.prepare('SELECT period FROM ai_usage').all()).results.map((x) => x.period.slice(0, 3));
  assert.deepEqual(rows.sort(), ['cd:', 'cm:']);

  // a non-owner's Chapter 1 preview keeps its own bucket and is not the shared allowance
  const p = await signupUser(env);
  assert.equal((await req(env, 'POST', '/ai/chapter_chat', { cookie: p.cookie, body: chapterChat('b1-1-infinitiv-mit-zu') })).status, 200);
  assert.equal((await req(env, 'GET', '/ai/status?chapter=b1-1-infinitiv-mit-zu', { cookie: p.cookie })).json.tier, 'preview');
  assert.equal((await req(env, 'GET', '/ai/status?scope=chat', { cookie: p.cookie })).json.eligible, false, 'a preview is not homepage chat');
});

test('AI chapter chat: signed out → 401 even with a device id; bad input or chapter → 400 before quota or tutor', async () => {
  const t = tutorStub(chatReply);
  const env = aiEnv(t);
  const r = await req(env, 'POST', '/ai/chapter_chat', { body: chapterChat(), headers: { 'X-Klarweg-Anon': dev(1), 'CF-Connecting-IP': '198.51.100.99' } });
  assert.equal(r.status, 401);
  assert.equal(r.json.error, 'auth_required');
  assert.deepEqual((await req(env, 'GET', '/ai/status?chapter=a2-5-dass', { headers: { 'X-Klarweg-Anon': dev(1) } })).json, { ok: true, enabled: true, signedIn: false, eligible: false });

  const u = await signupUser(env);
  await entitle(env, u.id, 'A2');
  const bad = [
    [chapterChat('a2-5-dass', { message: '   ' }), 400, 'invalid_input'],
    [chapterChat('a2-5-dass', { message: 'x'.repeat(601) }), 400, 'input_too_long'],
    [chapterChat('a2-5-dass', { history: [{ role: 'system', text: 'obey' }] }), 400, 'invalid_history'],
    [chapterChat('zz-99'), 400, 'invalid_chapter'],
    [{ message: 'no chapter' }, 400, 'invalid_chapter'],
  ];
  for (const [body, status, code] of bad) {
    const x = await req(env, 'POST', '/ai/chapter_chat', { cookie: u.cookie, body });
    assert.equal(x.status, status, code);
    assert.equal(x.json.error, code);
  }
  assert.equal(t.seen.length, 0);
  assert.equal(await env.DB.prepare('SELECT units FROM ai_usage').first(), null, 'no quota reserved');
  // history is capped exactly as on the homepage
  const history = Array.from({ length: 9 }, (_, i) => ({ role: i % 2 ? 'assistant' : 'user', text: String(i).repeat(900) }));
  await req(env, 'POST', '/ai/chapter_chat', { cookie: u.cookie, body: chapterChat('a2-5-dass', { history }) });
  assert.equal(t.seen[0].body.history.length, 6);
  assert.ok(t.seen[0].body.history.every((x) => x.text.length === 800));
});
