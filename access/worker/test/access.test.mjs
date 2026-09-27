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
  assert.equal((await req(env, 'GET', '/ai/status?chapter=a2-5-dass', { cookie: u.cookie })).json.tier, 'full');
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
  const env = aiEnv(t, { AI_DAILY_UNITS: '3' });
  const u = await signupUser(env);
  await entitle(env, u.id, 'A2');
  const results = await Promise.all(Array.from({ length: 6 }, () => req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() })));
  assert.equal(results.filter((r) => r.status === 200).length, 3);
  assert.equal(results.filter((r) => r.status === 429).length, 3);
  // a fresh user whose calls are deterministic (no model) never runs out
  const t2 = tutorStub({ ok: true, source: 'deterministic', result: { correct: true }, meta: { llm: false } });
  const env2 = aiEnv(t2, { AI_DAILY_UNITS: '2' });
  const v = await signupUser(env2);
  await entitle(env2, v.id, 'A2');
  for (let i = 0; i < 5; i++) assert.equal((await req(env2, 'POST', '/ai/check_exercise', { cookie: v.cookie, body: aiBody() })).status, 200);
});

test('AI quota: monthly limit and preview limits', async () => {
  const env = aiEnv(tutorStub(), { AI_MONTHLY_UNITS: '2', AI_PREVIEW_DAILY_UNITS: '1' });
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
  const env = aiEnv(failing, { AI_DAILY_UNITS: '1' });
  const u = await signupUser(env);
  await entitle(env, u.id, 'A2');
  for (let i = 0; i < 3; i++) {
    const r = await req(env, 'POST', '/ai/check_exercise', { cookie: u.cookie, body: aiBody() });
    assert.equal(r.status, 503);
    assert.equal(r.json.error, 'ai_unavailable');
  }
  const used = await env.DB.prepare("SELECT units FROM ai_usage WHERE period LIKE 'd:%'").first();
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
  const used = await env.DB.prepare("SELECT units FROM ai_usage WHERE period LIKE 'd:%'").first();
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
