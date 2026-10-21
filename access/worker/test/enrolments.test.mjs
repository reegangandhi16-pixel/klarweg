/* Live-course enrolment with online payment — node --test
   Drives the real Worker against the in-memory D1 (schema + every
   migration), with Cashfree mocked at fetch() like consultations.test.mjs.
   Covers: server-side amounts, success, failure, cancel/expiry, pending,
   duplicate requests and webhooks, signature checks, amount mismatch,
   capacity, late payments, full payment only (no instalments), the
   consultation adjustment and the separation from self-paced access. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import { LIVE_COURSES, HOLD_SECONDS, enrolMode, configuredCourses, ENROL_REF_RE } from '../src/enrolments.js';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://reegangandhi16-pixel.github.io';
const API = 'https://klarweg-access.example.workers.dev';
const SECRET = 'cfsk_test_secret_value';

/* ---------------- clock ---------------- */
const REAL_NOW = Date.now;
const ist = (s) => Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +s.slice(8, 10), +s.slice(11, 13), +s.slice(14, 16)) - 330 * 60000;
let fakeNow = null;
Date.now = () => (fakeNow == null ? REAL_NOW() : fakeNow);
const at = (s) => { fakeNow = ist(s); };
const advance = (sec) => { fakeNow += sec * 1000; };
const BATCH = '2026-11-02';

/* ---------------- Cashfree mock ---------------- */
const cashfree = { orders: new Map(), calls: [], failCreate: false };
globalThis.fetch = async (input, init = {}) => {
  const url = typeof input === 'string' ? input : input.url;
  const method = (init.method || 'GET').toUpperCase();
  const m = url.match(/^https:\/\/(sandbox|api)\.cashfree\.com\/pg\/orders(?:\/([^/]+))?$/);
  if (!m) throw new Error('Unexpected network call in test: ' + url);
  cashfree.calls.push({ host: m[1], method, body: init.body ? JSON.parse(init.body) : null, headers: init.headers || {} });
  if (method === 'POST' && !m[2]) {
    if (cashfree.failCreate) return new Response('<html>gateway down</html>', { status: 502 });
    const b = JSON.parse(init.body);
    cashfree.orders.set(b.order_id, { order_id: b.order_id, order_amount: b.order_amount, order_currency: 'INR', order_status: 'ACTIVE' });
    return Response.json({ order_id: b.order_id, order_amount: b.order_amount, order_currency: 'INR', payment_session_id: 'session_' + b.order_id, order_status: 'ACTIVE', order_expiry_time: b.order_expiry_time });
  }
  const o = cashfree.orders.get(decodeURIComponent(m[2]));
  if (!o) return Response.json({ message: 'order not found' }, { status: 404 });
  return Response.json({ ...o });
};
const creates = () => cashfree.calls.filter((c) => c.method === 'POST');

/* ---------------- harness ---------------- */
function makeEnv(overrides = {}) {
  return {
    DB: createD1(WORKER_DIR),
    CASHFREE_ENV: 'sandbox',
    CASHFREE_APP_ID: 'TEST1234567890',
    CASHFREE_SECRET_KEY: SECRET,
    GOOGLE_CLIENT_ID: 'test-client.apps.googleusercontent.com',
    RATE_SALT: 'test-salt',
    ENROL_PAYMENTS: 'sandbox',
    ENROL_COURSES: JSON.stringify({ 'live-a1': { batch: BATCH } }),
    ...overrides
  };
}
const ctx = { waitUntil() {} };
async function req(env, method, pathname, { body, cookie, origin = SITE, headers = {} } = {}) {
  const h = { ...headers };
  if (body !== undefined) h['content-type'] = 'application/json';
  if (cookie) h.cookie = cookie;
  if (origin) h.origin = origin;
  h['CF-Connecting-IP'] = h['CF-Connecting-IP'] || '198.51.100.' + Math.floor(Math.random() * 200);
  const res = await worker.fetch(new Request(API + pathname, { method, headers: h, body: body === undefined ? undefined : (typeof body === 'string' ? body : JSON.stringify(body)) }), env, ctx);
  const text = await res.text();
  let json = null;
  try { json = JSON.parse(text); } catch {}
  return { status: res.status, json };
}
async function user(env, { phone = true } = {}) {
  const r = await req(env, 'POST', '/auth/signup', { body: { email: `u${Math.random().toString(36).slice(2)}@example.com`, password: 'correct-horse-9', name: 'Test' } });
  assert.equal(r.status, 201, JSON.stringify(r.json));
  const cookie = (await (async () => {
    const res = await worker.fetch(new Request(API + '/auth/login', { method: 'POST', headers: { 'content-type': 'application/json', origin: SITE, 'CF-Connecting-IP': '203.0.113.9' }, body: JSON.stringify({ email: r.json.user.email, password: 'correct-horse-9' }) }), env, ctx);
    return res.headers.get('set-cookie').split(';')[0];
  })());
  if (phone) assert.equal((await req(env, 'POST', '/auth/phone', { cookie, body: { phone: '9876543210' } })).status, 200);
  return { cookie, id: r.json.user.id };
}
const checkout = (env, cookie, body) => req(env, 'POST', '/enrol/checkout', { cookie, body });
const view = (env, cookie, ref) => req(env, 'GET', '/enrol/enrolments/' + ref, { cookie });
const payments = async (env, ref) => (await env.DB.prepare('SELECT p.* FROM live_payments p JOIN live_enrolments e ON e.id = p.enrolment_id WHERE e.ref = ?1 ORDER BY p.created_at').bind(ref).all()).results;
const enrolmentRow = (env, ref) => env.DB.prepare('SELECT * FROM live_enrolments WHERE ref = ?1').bind(ref).first();
const openOrderId = async (env, ref) => (await payments(env, ref)).find((p) => p.status === 'pending').id;
function gatewayPays(orderId, amount) {
  const o = cashfree.orders.get(orderId);
  o.order_status = 'PAID';
  if (amount != null) o.order_amount = amount;
}
async function webhook(env, payload, { secret = SECRET, ts = Math.floor(Date.now() / 1000) } = {}) {
  const raw = JSON.stringify(payload);
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(String(ts) + raw));
  return req(env, 'POST', '/webhooks/cashfree', { origin: null, body: raw, headers: { 'x-webhook-timestamp': String(ts), 'x-webhook-signature': Buffer.from(mac).toString('base64') } });
}
const success = (orderId, pay = 'pay_' + orderId.slice(-8)) => ({ type: 'PAYMENT_SUCCESS_WEBHOOK', data: { order: { order_id: orderId }, payment: { cf_payment_id: pay, payment_status: 'SUCCESS' } } });
async function noCourseAccess(env, u) {
  assert.equal((await env.DB.prepare('SELECT COUNT(*) AS n FROM user_entitlements WHERE user_id = ?1').bind(u.id).first()).n, 0, 'no self-paced entitlement');
  assert.equal((await env.DB.prepare('SELECT COUNT(*) AS n FROM orders WHERE user_id = ?1').bind(u.id).first()).n, 0, 'no self-paced order');
  assert.equal((await env.DB.prepare('SELECT COUNT(*) AS n FROM consult_bookings WHERE user_id = ?1').bind(u.id).first()).n, 0, 'no consultation row');
}

test.beforeEach(() => { at('2026-10-21 10:00'); cashfree.failCreate = false; cashfree.calls.length = 0; });
test.after(() => { Date.now = REAL_NOW; });

/* ================= switches ================= */
test('OFF by default: the catalogue is empty and checkout refuses, with no gateway call', async () => {
  const env = makeEnv({ ENROL_PAYMENTS: undefined, ENROL_COURSES: undefined });
  const cat = await req(env, 'GET', '/enrol/catalog');
  assert.equal(cat.status, 200);
  assert.equal(cat.json.enabled, false);
  assert.deepEqual(cat.json.courses, []);
  const u = await user(env);
  assert.equal((await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' })).status, 503);
  assert.equal(creates().length, 0);
});

test('interlocks: "live" needs production Cashfree, "sandbox" needs sandbox; bad course config closes the course', () => {
  assert.equal(enrolMode(makeEnv({ ENROL_PAYMENTS: 'live' })).enabled, false);
  assert.equal(enrolMode(makeEnv({ ENROL_PAYMENTS: 'sandbox', CASHFREE_ENV: 'production', CASHFREE_APP_ID: 'LIVE123' })).enabled, false);
  assert.equal(enrolMode(makeEnv({ ENROL_PAYMENTS: 'yes' })).enabled, false);
  assert.equal(enrolMode(makeEnv()).enabled, true);
  assert.deepEqual(configuredCourses(makeEnv({ ENROL_COURSES: '{not json' })), {});
  assert.deepEqual(configuredCourses(makeEnv({ ENROL_COURSES: JSON.stringify({ 'live-b9': { batch: BATCH } }) })), {}, 'unknown course');
  assert.deepEqual(configuredCourses(makeEnv({ ENROL_COURSES: JSON.stringify({ 'live-a1': { batch: 'soon' } }) })), {}, 'no batch date');
});

/* ================= catalogue and quote: amounts from the server ================= */
test('catalogue: the published full course fee, in paise, with seats left; no plans; a started batch is closed', async () => {
  const env = makeEnv();
  const cat = (await req(env, 'GET', '/enrol/catalog')).json;
  assert.equal(cat.enabled, true);
  assert.equal(cat.testMode, true);
  assert.equal(cat.courses.length, 1);
  const c = cat.courses[0];
  assert.deepEqual({ id: c.id, batch: c.batch, capacity: c.capacity, seatsLeft: c.seatsLeft }, { id: 'live-a1', batch: BATCH, capacity: 8, seatsLeft: 8 });
  assert.equal(c.feePaise, 799900);
  assert.equal('plans' in c, false, 'full payment only: no payment plans are offered');
  at('2026-11-02 08:00');
  assert.deepEqual((await req(env, 'GET', '/enrol/catalog')).json.courses, [], 'the batch has started');
});

test('quote: signed-in only; the amount due now is computed on the server', async () => {
  const env = makeEnv();
  assert.equal((await req(env, 'GET', '/enrol/quote?course_id=live-a1&plan=full')).status, 401);
  const u = await user(env);
  const full = (await req(env, 'GET', '/enrol/quote?course_id=live-a1&plan=full', { cookie: u.cookie })).json.quote;
  assert.deepEqual({ due: full.dueNowPaise, total: full.totalPaise, credit: full.creditPaise }, { due: 799900, total: 799900, credit: 0 });
  assert.equal('schedule' in full, false, 'one payment: no schedule');
  const noPlan = (await req(env, 'GET', '/enrol/quote?course_id=live-a1', { cookie: u.cookie })).json.quote;
  assert.equal(noPlan.dueNowPaise, 799900, 'the plan may be omitted');
  for (const plan of ['instalments', 'monthly']) {
    const r = await req(env, 'GET', `/enrol/quote?course_id=live-a1&plan=${plan}`, { cookie: u.cookie });
    assert.equal(r.status, 400);
    assert.equal(r.json.code, 'bad-plan');
  }
  assert.equal((await req(env, 'GET', '/enrol/quote?course_id=live-b2&plan=full', { cookie: u.cookie })).status, 409);
});

/* ================= checkout ================= */
test('checkout: signed in + phone; the gateway order carries the server amount, never the browser\'s', async () => {
  const env = makeEnv();
  assert.equal((await checkout(env, null, { course_id: 'live-a1', plan: 'full' })).status, 401);
  const nophone = await user(env, { phone: false });
  assert.equal((await checkout(env, nophone.cookie, { course_id: 'live-a1', plan: 'full' })).json.code, 'phone-required');
  const u = await user(env);
  const r = await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full', amount: 1, order_amount: 1, amount_paise: 100, expected_amount_paise: 799900 });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.match(r.json.enrolment.ref, ENROL_REF_RE);
  assert.equal(r.json.enrolment.status, 'pending');
  assert.equal(r.json.paymentSessionId.startsWith('session_enrp_'), true);
  const sent = creates().at(-1);
  assert.equal(sent.host, 'sandbox');
  assert.equal(sent.body.order_amount, 7999);
  assert.equal(sent.body.order_currency, 'INR');
  assert.match(sent.body.order_id, /^enrp_[0-9a-f-]{36}$/);
  assert.equal(sent.headers['x-idempotency-key'], sent.body.order_id);
  assert.match(sent.body.order_expiry_time, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+05:30$/);
  assert.match(sent.body.order_meta.return_url, /\/live-classes\.html\?enrol_ref=KWE-[2-9A-HJ-NP-Z]{8}#enrol$/);
  assert.equal(JSON.stringify(r.json).includes(SECRET), false, 'no secret in the reply');
});

test('checkout: refuses when the amount shown is no longer the amount due — before any gateway order', async () => {
  const env = makeEnv();
  const u = await user(env);
  const r = await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full', expected_amount_paise: 699900 });
  assert.equal(r.status, 409);
  assert.equal(r.json.code, 'amount-changed');
  assert.equal(r.json.quote.dueNowPaise, 799900);
  assert.equal(creates().length, 0);
});

test('refresh / retry / back: a held enrolment resumes the same order — one gateway order, one seat', async () => {
  const env = makeEnv();
  const u = await user(env);
  const a = await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' });
  const b = await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' });
  const c = await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' });
  assert.equal(b.json.resumed, true);
  assert.equal(b.json.paymentSessionId, a.json.paymentSessionId);
  assert.equal(c.json.enrolment.ref, a.json.enrolment.ref);
  assert.equal(creates().length, 1);
  assert.equal((await req(env, 'GET', '/enrol/catalog')).json.courses[0].seatsLeft, 7);
});

test('instalments are refused: an old page asking for them gets 400 before any hold or gateway order', async () => {
  const env = makeEnv();
  const u = await user(env);
  for (const body of [{ course_id: 'live-a1', plan: 'instalments' }, { course_id: 'live-a1', plan: 'instalments', expected_amount_paise: 400000 }]) {
    const r = await checkout(env, u.cookie, body);
    assert.equal(r.status, 400);
    assert.equal(r.json.code, 'bad-plan');
  }
  assert.equal(creates().length, 0);
  assert.equal((await env.DB.prepare('SELECT COUNT(*) AS n FROM live_enrolments').first()).n, 0);
  assert.equal((await req(env, 'POST', '/enrol/enrolments/KWE-ABCDEFGH/pay', { cookie: u.cookie })).status, 404, 'the second-instalment route is gone');
});

test('the order lapses while the place is still held: a retry opens one new order for the same full fee, still one seat', async () => {
  const env = makeEnv();
  const u = await user(env);
  const a = await checkout(env, u.cookie, { course_id: 'live-a1' });
  const first = await openOrderId(env, a.json.enrolment.ref);
  cashfree.orders.get(first).order_status = 'EXPIRED';
  advance(27 * 60);                                  // the order expired; the 30-minute hold has not
  const b = await checkout(env, u.cookie, { course_id: 'live-a1' });
  assert.equal(b.status, 200);
  assert.equal(b.json.released, a.json.enrolment.ref);
  assert.equal(creates().length, 2);
  assert.equal(creates().at(-1).body.order_amount, 7999);
  assert.equal((await req(env, 'GET', '/enrol/catalog')).json.courses[0].seatsLeft, 7, 'still one seat');
});

test('gateway down: nothing is held, nothing charged, a clear message', async () => {
  const env = makeEnv();
  const u = await user(env);
  cashfree.failCreate = true;
  const r = await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' });
  assert.equal(r.status, 502);
  assert.match(r.json.error, /Nothing has been charged/);
  assert.equal((await env.DB.prepare('SELECT COUNT(*) AS n FROM live_enrolments').first()).n, 0);
});

/* ================= payment outcomes ================= */
test('SUCCESS: the return redirect alone proves nothing; Cashfree PAID confirms the enrolment, once', async () => {
  const env = makeEnv();
  const u = await user(env);
  const ref = (await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' })).json.enrolment.ref;
  // learner is back on the page, gateway still ACTIVE → pending
  assert.equal((await view(env, u.cookie, ref)).json.enrolment.status, 'pending');
  const orderId = await openOrderId(env, ref);
  gatewayPays(orderId);
  const w1 = await webhook(env, success(orderId, 'cfpay_1'));
  assert.equal(w1.status, 200);
  assert.equal(w1.json.enrolled, true);
  const v = (await view(env, u.cookie, ref)).json.enrolment;
  assert.equal(v.status, 'enrolled');
  assert.equal(v.paidPaise, 799900);
  assert.equal(v.paymentStatus, 'paid');
  assert.equal(v.amountDuePaise, 799900);
  assert.equal('parts' in v, false, 'one payment: nothing further is ever due');
  // duplicate deliveries and polls: acknowledged, nothing changes
  const w2 = await webhook(env, success(orderId, 'cfpay_1'));
  assert.equal(w2.json.duplicate, true);
  await view(env, u.cookie, ref);
  assert.equal((await payments(env, ref)).filter((p) => p.status === 'paid').length, 1);
  // already enrolled: no second checkout
  const again = await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' });
  assert.equal(again.json.code, 'already-enrolled');
  assert.equal(creates().length, 1);
  await noCourseAccess(env, u);
});

test('reconciliation without any webhook: the status check asks Cashfree and confirms', async () => {
  const env = makeEnv();
  const u = await user(env);
  const ref = (await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' })).json.enrolment.ref;
  gatewayPays(await openOrderId(env, ref));
  const r = await view(env, u.cookie, ref);
  assert.equal(r.json.enrolment.status, 'enrolled');
  assert.equal(r.json.verification, 'paid');
});

test('FAILED / CANCELLED: a failed or dropped payment leaves the hold pending and the same order retryable; failure events change nothing', async () => {
  const env = makeEnv();
  const u = await user(env);
  const first = await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' });
  const orderId = await openOrderId(env, first.json.enrolment.ref);
  for (const type of ['PAYMENT_FAILED_WEBHOOK', 'PAYMENT_USER_DROPPED_WEBHOOK']) {
    const w = await webhook(env, { type, data: { order: { order_id: orderId }, payment: { payment_status: 'FAILED' } } });
    assert.equal(w.status, 200);
    assert.equal(w.json.ignored, true);
  }
  // a forged "success" for an unpaid order does not enrol
  const forged = await webhook(env, success(orderId));
  assert.equal(forged.status, 503, 'Cashfree still says ACTIVE → retry later');
  assert.equal((await view(env, u.cookie, first.json.enrolment.ref)).json.enrolment.status, 'pending');
  const retry = await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' });
  assert.equal(retry.json.paymentSessionId, first.json.paymentSessionId, 'retry uses the same order');
  assert.equal(creates().length, 1);
});

test('EXPIRED: an unpaid hold lapses, the seat returns, and a new attempt opens a new order', async () => {
  const env = makeEnv();
  const u = await user(env);
  const ref = (await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' })).json.enrolment.ref;
  cashfree.orders.get(await openOrderId(env, ref)).order_status = 'EXPIRED';
  advance(HOLD_SECONDS + 1);
  const v = (await view(env, u.cookie, ref)).json.enrolment;
  assert.equal(v.status, 'expired');
  assert.equal((await req(env, 'GET', '/enrol/catalog')).json.courses[0].seatsLeft, 8);
  const again = await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' });
  assert.equal(again.status, 200);
  assert.notEqual(again.json.enrolment.ref, ref);
  assert.equal(creates().length, 2);
});

test('webhook security: bad signature, stale timestamp and wrong secret are refused before anything is read', async () => {
  const env = makeEnv();
  const u = await user(env);
  const ref = (await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' })).json.enrolment.ref;
  const orderId = await openOrderId(env, ref);
  gatewayPays(orderId);
  assert.equal((await webhook(env, success(orderId), { secret: 'wrong' })).status, 401);
  assert.equal((await webhook(env, success(orderId), { ts: Math.floor(Date.now() / 1000) - 3600 })).status, 401);
  assert.equal((await enrolmentRow(env, ref)).status, 'pending', 'nothing applied');
});

test('amount or currency mismatch at the gateway: never enrolled; the payment goes to review', async () => {
  const env = makeEnv();
  const u = await user(env);
  const ref = (await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' })).json.enrolment.ref;
  const orderId = await openOrderId(env, ref);
  gatewayPays(orderId, 1);
  const w = await webhook(env, success(orderId));
  assert.equal(w.status, 400);
  assert.equal(w.json.reason, 'amount');
  assert.equal((await enrolmentRow(env, ref)).status, 'pending');
  assert.equal((await payments(env, ref))[0].status, 'review');
});

/* ================= seats ================= */
test('capacity: 8 seats; the 9th learner is refused before any gateway order; held seats count', async () => {
  const env = makeEnv();
  for (let i = 0; i < 8; i++) {
    const u = await user(env);
    assert.equal((await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' })).status, 200);
  }
  const before = creates().length;
  const late = await user(env);
  const r = await checkout(env, late.cookie, { course_id: 'live-a1', plan: 'full' });
  assert.equal(r.status, 409);
  assert.equal(r.json.code, 'sold-out');
  assert.equal(creates().length, before, 'no order for a full batch');
});

test('capacity race: the last seat goes to one learner; the other\'s gateway order is never used', async () => {
  const env = makeEnv();
  for (let i = 0; i < 7; i++) await checkout(env, (await user(env)).cookie, { course_id: 'live-a1', plan: 'full' });
  const a = await user(env), b = await user(env);
  const [ra, rb] = await Promise.all([checkout(env, a.cookie, { course_id: 'live-a1', plan: 'full' }), checkout(env, b.cookie, { course_id: 'live-a1', plan: 'full' })]);
  const ok = [ra, rb].filter((r) => r.status === 200), out = [ra, rb].filter((r) => r.status === 409);
  assert.equal(ok.length, 1);
  assert.equal(out.length, 1);
  assert.equal(out[0].json.code, 'sold-out');
  assert.equal((await env.DB.prepare("SELECT COUNT(*) AS n FROM live_enrolments WHERE status IN ('pending','enrolled')").first()).n, 8);
});

test('late payment after the hold lapsed: re-takes a free seat; with no seat left it goes to review for a refund', async () => {
  const env = makeEnv();
  const u = await user(env);
  const ref = (await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' })).json.enrolment.ref;
  const orderId = await openOrderId(env, ref);
  advance(HOLD_SECONDS + 1);
  await req(env, 'GET', '/enrol/catalog'); // sweep
  gatewayPays(orderId);
  assert.equal((await webhook(env, success(orderId))).json.enrolled, true);
  assert.equal((await enrolmentRow(env, ref)).status, 'enrolled');

  const env2 = makeEnv();
  const v = await user(env2);
  const ref2 = (await checkout(env2, v.cookie, { course_id: 'live-a1', plan: 'full' })).json.enrolment.ref;
  const order2 = await openOrderId(env2, ref2);
  advance(HOLD_SECONDS + 1);
  for (let i = 0; i < 8; i++) await checkout(env2, (await user(env2)).cookie, { course_id: 'live-a1', plan: 'full' });
  gatewayPays(order2);
  const w = await webhook(env2, success(order2));
  assert.equal(w.json.reason, 'late-payment-no-seat');
  const row = await enrolmentRow(env2, ref2);
  assert.equal(row.status, 'review');
  assert.equal((await payments(env2, ref2))[0].status, 'paid', 'the money is recorded, for the refund');
});

/* ================= duplicate charge ================= */
test('a second paid order for the same enrolment is a duplicate charge: recorded for refund, never counted twice', async () => {
  const env = makeEnv();
  const u = await user(env);
  const ref = (await checkout(env, u.cookie, { course_id: 'live-a1' })).json.enrolment.ref;
  const oa = await openOrderId(env, ref);
  // that order expires unpaid; the learner retries within the hold and pays the new one
  cashfree.orders.get(oa).order_status = 'EXPIRED';
  advance(27 * 60);
  await checkout(env, u.cookie, { course_id: 'live-a1' });
  const ref2 = (await env.DB.prepare("SELECT ref FROM live_enrolments WHERE status = 'pending'").first()).ref;
  const ob = await openOrderId(env, ref2);
  gatewayPays(ob); await webhook(env, success(ob, 'cf_b'));
  assert.equal((await enrolmentRow(env, ref2)).status, 'enrolled');
  // the old order is paid late (e.g. a bank delay): never a second seat or a second counted payment
  gatewayPays(oa);
  const w = await webhook(env, success(oa, 'cf_a'));
  assert.equal(w.json.reason, 'late-payment-already-enrolled');
  const paid = (await env.DB.prepare("SELECT COUNT(*) AS n FROM live_payments WHERE status = 'paid'").first()).n;
  assert.equal((await view(env, u.cookie, ref2)).json.enrolment.paidPaise, 799900);
  assert.equal((await env.DB.prepare("SELECT COUNT(*) AS n FROM live_enrolments WHERE status = 'enrolled'").first()).n, 1, 'one seat');
  assert.equal(paid, 2, 'both payments are recorded, the late one for refund');
  assert.equal((await enrolmentRow(env, ref)).status, 'review');

  // two paid orders on ONE enrolment (e.g. Cashfree retried): the second goes to review
  const env2 = makeEnv();
  const v2 = await user(env2);
  const r = (await checkout(env2, v2.cookie, { course_id: 'live-a1' })).json.enrolment.ref;
  const o1 = await openOrderId(env2, r);
  const enr = await enrolmentRow(env2, r);
  await env2.DB.prepare("UPDATE live_payments SET status = 'expired' WHERE id = ?1").bind(o1).run();
  const o2 = 'enrp_' + crypto.randomUUID();
  await env2.DB.prepare("INSERT INTO live_payments (id, enrolment_id, amount_paise, currency, status, expires_at, created_at, updated_at) VALUES (?1, ?2, 799900, 'INR', 'pending', 9999999999, 0, 0)").bind(o2, enr.id).run();
  cashfree.orders.set(o2, { order_id: o2, order_amount: 7999, order_currency: 'INR', order_status: 'PAID' });
  await webhook(env2, success(o2, 'cf_2'));
  gatewayPays(o1);
  const dup = await webhook(env2, success(o1, 'cf_1'));
  assert.equal(dup.json.reason, 'duplicate-payment');
  assert.equal((await view(env2, v2.cookie, r)).json.enrolment.paidPaise, 799900, 'counted once');
  assert.equal((await payments(env2, r)).find((p) => p.id === o1).status, 'review');
});

/* ================= authorisation ================= */
test('enrolment details are visible to their owner only', async () => {
  const env = makeEnv();
  const a = await user(env), b = await user(env);
  const ref = (await checkout(env, a.cookie, { course_id: 'live-a1', plan: 'full' })).json.enrolment.ref;
  assert.equal((await view(env, b.cookie, ref)).status, 404);
  assert.equal((await view(env, null, ref)).status, 401);
  assert.equal((await req(env, 'POST', `/enrol/enrolments/${ref}/pay`, { cookie: b.cookie })).status, 404);
  assert.deepEqual((await req(env, 'GET', '/enrol/enrolments', { cookie: b.cookie })).json.enrolments, []);
  assert.equal((await req(env, 'GET', '/enrol/enrolments', { cookie: a.cookie })).json.enrolments.length, 1);
  assert.equal((await view(env, a.cookie, 'KWE-0000')).status, 404, 'malformed reference never reaches the handler');
});

test('cross-site writes are refused', async () => {
  const env = makeEnv();
  const u = await user(env);
  assert.equal((await req(env, 'POST', '/enrol/checkout', { cookie: u.cookie, origin: 'https://evil.example', body: { course_id: 'live-a1', plan: 'full' } })).status, 403);
});

/* ================= the ₹100 consultation adjustment (owner decision) ================= */
async function confirmedConsult(env, u, date) {
  const ref = 'KWC-' + Math.random().toString(36).slice(2, 10).toUpperCase().replace(/[^2-9A-HJ-NP-Z]/g, 'X').padEnd(8, 'X').slice(0, 8);
  await env.DB.prepare(
    `INSERT INTO consult_bookings (id, ref, user_id, teacher_id, date, slot_start, status, amount_paise, currency, cashfree_order_id, hold_expires_at, created_at, updated_at)
     VALUES (?1, ?2, ?3, 'reegan-gandhi', ?4, '15:00', 'confirmed', 10000, 'INR', ?1, 0, 0, 0)`
  ).bind('cons_' + crypto.randomUUID(), ref, u.id, date).run();
  return ref;
}

test('consultation adjustment OFF (default): a recent ₹100 consultation does not change the fee', async () => {
  const env = makeEnv();
  const u = await user(env);
  await confirmedConsult(env, u, '2026-10-19');
  const q = (await req(env, 'GET', '/enrol/quote?course_id=live-a1&plan=full', { cookie: u.cookie })).json.quote;
  assert.equal(q.creditPaise, 0);
  assert.equal(q.dueNowPaise, 799900);
});

test('consultation adjustment "course-fee": ₹100 off the course fee, within 7 days, used once', async () => {
  const env = makeEnv({ ENROL_CONSULT_CREDIT: 'course-fee' });
  const u = await user(env);
  const old = await user(env);
  await confirmedConsult(env, old, '2026-10-10');
  assert.equal((await req(env, 'GET', '/enrol/quote?course_id=live-a1&plan=full', { cookie: old.cookie })).json.quote.creditPaise, 0, 'older than 7 days');
  const cref = await confirmedConsult(env, u, '2026-10-16');
  const q = (await req(env, 'GET', '/enrol/quote?course_id=live-a1', { cookie: u.cookie })).json.quote;
  assert.deepEqual({ credit: q.creditPaise, ref: q.creditConsultRef, due: q.dueNowPaise, total: q.totalPaise }, { credit: 10000, ref: cref, due: 789900, total: 799900 });
  const r = await checkout(env, u.cookie, { course_id: 'live-a1', expected_amount_paise: 789900 });
  assert.equal(r.status, 200);
  assert.equal(creates().at(-1).body.order_amount, 7899);
  const o = await openOrderId(env, r.json.enrolment.ref);
  gatewayPays(o); await webhook(env, success(o));
  const v = (await view(env, u.cookie, r.json.enrolment.ref)).json.enrolment;
  assert.equal(v.status, 'enrolled');
  assert.equal(v.creditPaise, 10000);
  assert.deepEqual({ paid: v.paidPaise, due: v.amountDuePaise, total: v.totalPaise }, { paid: 789900, due: 789900, total: 799900 });
  const u2 = await user(env);
  await env.DB.prepare('UPDATE consult_bookings SET user_id = ?1 WHERE ref = ?2').bind(u2.id, cref).run();
  assert.equal((await req(env, 'GET', '/enrol/quote?course_id=live-a1', { cookie: u2.cookie })).json.quote.creditPaise, 0, 'used once');
});

/* ================= separation and reconciliation ================= */
test('self-paced orders and consultation webhooks are unaffected by the enrolment branch', async () => {
  const env = makeEnv();
  const w = await webhook(env, success('ord_' + crypto.randomUUID()));
  assert.equal(w.json.reason, 'unknown-order');
  const w2 = await webhook(env, success('enrp_' + crypto.randomUUID()));
  assert.equal(w2.json.reason, 'unknown-order');
});

test('scheduled reconciliation settles a paid order whose webhook and return were both lost', async () => {
  const env = makeEnv();
  const u = await user(env);
  const ref = (await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' })).json.enrolment.ref;
  gatewayPays(await openOrderId(env, ref));
  await worker.scheduled({ cron: '*/15 * * * *' }, env, null);
  assert.equal((await enrolmentRow(env, ref)).status, 'enrolled');
});

test('the Worker\'s course catalogue matches the published course (full fee, capacity); no instalments anywhere', async () => {
  const fs = await import('node:fs');
  const src = fs.readFileSync(path.join(WORKER_DIR, '..', '..', 'live-classes-data.js'), 'utf8');
  const window = {};
  new Function('window', src)(window);
  const a1 = window.KWLive.courses.find((c) => c.id === 'live-a1');
  const rupees = (p) => '₹' + (p / 100).toLocaleString('en-IN');
  const c = LIVE_COURSES['live-a1'];
  assert.equal(c.title, a1.title);
  assert.equal(rupees(c.feePaise), a1.priceLabel);
  assert.equal(a1.priceLabel, '₹7,999');
  assert.equal(a1.paymentTerms.startsWith(`${rupees(c.feePaise)} in full before the first class`), true, a1.paymentTerms);
  assert.equal(/instal/i.test(a1.paymentTerms), false, 'the published terms offer no instalments');
  assert.deepEqual(Object.keys(c).sort(), ['capacity', 'feePaise', 'title'], 'no plans or parts in the Worker catalogue');
  assert.match(a1.batchSize, new RegExp(`Up to ${c.capacity} learners`));
});

test('refund runbook: the documented UPDATE statements run against the real schema and free the place and the slot', async () => {
  const fs = await import('node:fs');
  const doc = fs.readFileSync(path.join(WORKER_DIR, '..', '..', 'docs', 'live-classes-online-payments.md'), 'utf8');
  const sql = [...doc.matchAll(/^\s*(UPDATE (?:live_payments|live_enrolments|consult_bookings) SET [^\n]+;)$/gm)].map((m) => m[1]);
  assert.equal(sql.length, 3, 'three runbook statements');
  const env = makeEnv();
  const u = await user(env);
  const ref = (await checkout(env, u.cookie, { course_id: 'live-a1', plan: 'full' })).json.enrolment.ref;
  const orderId = await openOrderId(env, ref);
  gatewayPays(orderId); await webhook(env, success(orderId));
  const cref = await confirmedConsult(env, u, '2026-10-21');
  const fill = (s) => s.replace("'<order id>'", `'${orderId}'`).replace("'<KWE-…>'", `'${ref}'`).replace("'<KWC-…>'", `'${cref}'`).replace('<cashfree refund id> <date>', 'rf_1 2026-10-21');
  for (const s of sql) await env.DB.prepare(fill(s)).run();
  assert.equal((await payments(env, ref))[0].status, 'refunded');
  assert.equal((await view(env, u.cookie, ref)).json.enrolment.status, 'cancelled');
  assert.equal((await req(env, 'GET', '/enrol/catalog')).json.courses[0].seatsLeft, 8, 'the place is free again');
  assert.equal((await env.DB.prepare('SELECT status FROM consult_bookings WHERE ref = ?1').bind(cref).first()).status, 'cancelled');
});
