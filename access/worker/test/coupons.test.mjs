/* Coupon KLARWEGFREE1 — node --test
   Drives the real Worker against an in-memory D1 (schema.sql + every
   migration). Cashfree is mocked at the fetch() boundary and every call
   is recorded; no network, no real order, no real payment. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import { getProducts, getProduct } from '../src/products.js';
import { priceWithCoupon, normalizeCouponCode } from '../src/coupons.js';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://klarweg.in';
const API = 'https://klarweg-access.example.workers.dev';
const SECRET = 'cfsk_test_secret_value';
const CODE = 'KLARWEGFREE1';

/* ---------------- Cashfree mock ---------------- */
const cashfree = { orders: new Map(), calls: [] };
globalThis.fetch = async (input, init = {}) => {
  const url = typeof input === 'string' ? input : input.url;
  const method = (init.method || 'GET').toUpperCase();
  const m = url.match(/^https:\/\/(sandbox|api)\.cashfree\.com\/pg\/orders(?:\/([^/]+))?(\/payments)?$/);
  if (!m) throw new Error('Unexpected network call in test: ' + url);
  cashfree.calls.push({ method, path: url.replace(/^https:\/\/[^/]+/, ''), body: init.body ? JSON.parse(init.body) : null });
  if (method === 'POST' && !m[2]) {
    const b = JSON.parse(init.body);
    cashfree.orders.set(b.order_id, { order_id: b.order_id, order_amount: b.order_amount, order_currency: 'INR', order_status: 'ACTIVE', payments: [] });
    return Response.json({ order_id: b.order_id, order_amount: b.order_amount, order_currency: 'INR', payment_session_id: 'session_' + b.order_id, order_status: 'ACTIVE' });
  }
  const o = cashfree.orders.get(decodeURIComponent(m[2]));
  if (!o) return Response.json({ message: 'order not found' }, { status: 404 });
  if (m[3]) return Response.json(o.payments);
  return Response.json({ order_id: o.order_id, order_amount: o.order_amount, order_currency: o.order_currency, order_status: o.order_status });
};
const creates = () => cashfree.calls.filter((c) => c.method === 'POST');
function gatewayPays(orderId) {
  const o = cashfree.orders.get(orderId);
  o.order_status = 'PAID';
  o.payments = [{ cf_payment_id: 'pay_' + orderId.slice(-6), payment_status: 'SUCCESS' }];
}

/* ---------------- harness ---------------- */
function makeEnv(overrides = {}) {
  return {
    DB: createD1(WORKER_DIR),
    CASHFREE_ENV: 'sandbox',
    CASHFREE_APP_ID: 'TEST1234567890',
    CASHFREE_SECRET_KEY: SECRET,
    RATE_SALT: 'test-salt',
    COUPON_KLARWEGFREE1: 'on',
    ...overrides,
  };
}
const ctx = { waitUntil() {} };
async function req(env, method, pathname, { body, cookie, origin = SITE, headers = {} } = {}) {
  const h = { ...headers };
  if (body !== undefined) h['content-type'] = 'application/json';
  if (cookie) h.cookie = cookie;
  if (origin) h.origin = origin;
  h['CF-Connecting-IP'] = '203.0.113.' + Math.floor(Math.random() * 200);
  const res = await worker.fetch(new Request(API + pathname, { method, headers: h, body: body === undefined ? undefined : (typeof body === 'string' ? body : JSON.stringify(body)) }), env, ctx);
  const text = await res.text();
  let json = null;
  try { json = JSON.parse(text); } catch {}
  return { status: res.status, json };
}
async function signedUp(env) {
  const email = `u${Math.random().toString(36).slice(2)}@example.com`;
  const res = await worker.fetch(new Request(API + '/auth/signup', { method: 'POST', headers: { 'content-type': 'application/json', origin: SITE, 'CF-Connecting-IP': '198.51.100.' + Math.floor(Math.random() * 200) }, body: JSON.stringify({ email, password: 'correct-horse-9', name: 'Test' }) }), env, ctx);
  assert.equal(res.status, 201);
  const cookie = res.headers.get('set-cookie').split(';')[0];
  const id = (await res.json()).user.id;
  const p = await req(env, 'POST', '/auth/phone', { cookie, body: { phone: '9876543210' } });
  assert.equal(p.status, 200, JSON.stringify(p.json));
  return { cookie, id };
}
async function signedWebhook(env, payload, { secret = SECRET, ts = Math.floor(Date.now() / 1000), signature } = {}) {
  const raw = JSON.stringify(payload);
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(String(ts) + raw));
  return req(env, 'POST', '/webhooks/cashfree', {
    origin: null, body: raw,
    headers: { 'x-webhook-timestamp': String(ts), 'x-webhook-signature': signature || Buffer.from(mac).toString('base64') },
  });
}
const success = (orderId) => ({ type: 'PAYMENT_SUCCESS_WEBHOOK', data: { order: { order_id: orderId }, payment: { cf_payment_id: 'pay_' + orderId.slice(-6), payment_status: 'SUCCESS' } } });
const ents = (env, id) => env.DB.prepare('SELECT product_id, expires_at FROM user_entitlements WHERE user_id = ?1 ORDER BY product_id').bind(id).all().then((r) => r.results);
const orderRow = (env, id) => env.DB.prepare('SELECT amount_paise, original_amount_paise, discount_paise, coupon_code, product_id, status FROM orders WHERE id = ?1').bind(id).first();

/* ============ 12. existing pricing unchanged ============ */
test('catalogue prices are unchanged (paise)', () => {
  assert.deepEqual(Object.fromEntries(getProducts().map((p) => [p.id, p.amountPaise])), {
    A1: 199900, A2: 299900, B1: 399900, B2: 499900, C1: 799900, C2: 899900, LIFETIME: 499900,
  });
});

/* ============ calculation (pure) ============ */
test('code matching is case-insensitive and whitespace-safe', () => {
  for (const raw of ['KLARWEGFREE1', 'klarwegfree1', '  KlarwegFree1 ', 'KLARWEG FREE1', '\tklarweg\nfree1 ']) {
    assert.equal(normalizeCouponCode(raw), CODE, JSON.stringify(raw));
  }
  for (const raw of ['', '   ', null, 42, {}, 'KLARWEG-FREE1', 'K'.repeat(33)]) assert.equal(normalizeCouponCode(raw), '', JSON.stringify(raw));
});

test('1. KLARWEGFREE1 on Lifetime: ₹4,999 − ₹4,998 = ₹1', () => {
  const r = priceWithCoupon({ COUPON_KLARWEGFREE1: 'on' }, getProduct('LIFETIME'), ' klarwegfree1 ');
  assert.deepEqual(r, { ok: true, quote: { productId: 'LIFETIME', couponCode: CODE, originalPaise: 499900, discountPaise: 499800, payablePaise: 100 } });
});

test('6. a zero or negative payable amount is refused, never charged', () => {
  const env = { COUPON_KLARWEGFREE1: 'on' };
  for (const amountPaise of [499800, 400000, 100, 0]) {
    const r = priceWithCoupon(env, { id: 'LIFETIME', amountPaise }, CODE);
    assert.equal(r.ok, false, `catalogue price ${amountPaise}`);
    assert.equal(r.error, 'invalid-coupon');
  }
  const okAtMinimum = priceWithCoupon(env, { id: 'LIFETIME', amountPaise: 499900 }, CODE);
  assert.equal(okAtMinimum.quote.payablePaise, 100, '₹1 is the floor (Cashfree minimum)');
});

/* ============ quote endpoint ============ */
test('quote: server price with and without the coupon; sign-in required', async () => {
  const env = makeEnv();
  assert.equal((await req(env, 'POST', '/coupons/quote', { body: { product_id: 'LIFETIME', coupon: CODE } })).status, 401);
  const { cookie } = await signedUp(env);
  const q = await req(env, 'POST', '/coupons/quote', { cookie, body: { product_id: 'LIFETIME', coupon: 'Klarweg Free1' } });
  assert.equal(q.status, 200, JSON.stringify(q.json));
  assert.deepEqual(q.json.quote, { productId: 'LIFETIME', couponCode: CODE, originalPaise: 499900, discountPaise: 499800, payablePaise: 100, currency: 'INR' });
  // 7. removing the code: original price
  const plain = await req(env, 'POST', '/coupons/quote', { cookie, body: { product_id: 'LIFETIME', coupon: '' } });
  assert.equal(plain.json.quote.payablePaise, 499900);
  assert.equal(plain.json.quote.couponCode, null);
  assert.equal(creates().length, 0, 'a quote never creates a Cashfree order');
});

/* ============ 1 + 8. the ₹1 order ============ */
test('1/8. Lifetime + KLARWEGFREE1: Cashfree Create Order receives exactly ₹1; the order records how', async () => {
  const env = makeEnv();
  const { cookie } = await signedUp(env);
  cashfree.calls.length = 0;
  const r = await req(env, 'POST', '/orders', { cookie, body: { product_id: 'LIFETIME', coupon: '  klarwegfree1 ' } });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.equal(r.json.order.amountPaise, 100);
  assert.equal(r.json.order.originalAmountPaise, 499900);
  assert.equal(r.json.order.discountPaise, 499800);
  assert.equal(r.json.order.couponCode, CODE);
  const [call] = creates();
  assert.equal(call.body.order_amount, 1, 'exactly ₹1');
  assert.equal(call.body.order_currency, 'INR');
  assert.deepEqual(call.body.cart_details.cart_items[0], {
    item_id: 'LIFETIME', item_name: 'Klarweg A1–C2 Lifetime', item_quantity: 1,
    item_original_unit_price: 4999, item_discounted_unit_price: 1, item_currency: 'INR',
  });
  assert.deepEqual(await orderRow(env, r.json.order.id), {
    amount_paise: 100, original_amount_paise: 499900, discount_paise: 499800, coupon_code: CODE, product_id: 'LIFETIME', status: 'created',
  });
});

/* ============ 2. other plans ============ */
test('2. the coupon is refused for every other plan, before any Cashfree call', async () => {
  const env = makeEnv();
  const { cookie } = await signedUp(env);
  cashfree.calls.length = 0;
  for (const product of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
    const r = await req(env, 'POST', '/orders', { cookie, body: { product_id: product, coupon: CODE } });
    assert.equal(r.status, 400, product);
    assert.equal(r.json.code, 'coupon-not-eligible', product);
    const q = await req(env, 'POST', '/coupons/quote', { cookie, body: { product_id: product, coupon: CODE } });
    assert.equal(q.status, 400, product);
  }
  assert.equal(creates().length, 0);
});

/* ============ 3. invalid / disabled ============ */
test('3. unknown codes are refused; a disabled coupon looks exactly like an unknown one', async () => {
  const env = makeEnv();
  const { cookie } = await signedUp(env);
  cashfree.calls.length = 0;
  const answers = [];
  for (const coupon of ['KLARWEG1', 'FREE', 'KLARWEGFREE2', 'klarweg-free1', '<script>', 12345]) {
    const r = await req(env, 'POST', '/orders', { cookie, body: { product_id: 'LIFETIME', coupon } });
    assert.equal(r.status, 400, String(coupon));
    assert.equal(r.json.code, 'invalid-coupon', String(coupon));
    answers.push(r.json.error);
  }
  for (const COUPON_KLARWEGFREE1 of ['off', '', undefined, 'true', 'ON ']) {
    const off = makeEnv({ COUPON_KLARWEGFREE1 });
    const u = await signedUp(off);
    const r = await req(off, 'POST', '/orders', { cookie: u.cookie, body: { product_id: 'LIFETIME', coupon: CODE } });
    assert.equal(r.status, 400, String(COUPON_KLARWEGFREE1));
    answers.push(r.json.error);
  }
  assert.equal(new Set(answers).size, 1, 'one message for every refusal');
  assert.equal(creates().length, 0);
});

/* ============ 4 + 5. browser-supplied amounts ============ */
test('4/5. discount or payable amounts sent by the browser are ignored', async () => {
  const env = makeEnv();
  const forged = { amount: 1, amount_paise: 1, order_amount: 0.01, discount: 4999, discount_paise: 499900, discountPaise: 499900, payable: 0, payablePaise: 1, payable_paise: -100, price: 1 };
  const a = await signedUp(env);
  cashfree.calls.length = 0;
  const withCode = await req(env, 'POST', '/orders', { cookie: a.cookie, body: { product_id: 'LIFETIME', coupon: CODE, ...forged } });
  assert.equal(withCode.status, 200);
  assert.equal(withCode.json.order.amountPaise, 100, 'the coupon price, not the forged one');
  const b = await signedUp(env);
  const without = await req(env, 'POST', '/orders', { cookie: b.cookie, body: { product_id: 'LIFETIME', ...forged } });
  assert.equal(without.status, 200);
  assert.equal(without.json.order.amountPaise, 499900, 'full price without a code');
  const c = await signedUp(env);
  const levelForged = await req(env, 'POST', '/orders', { cookie: c.cookie, body: { product_id: 'C2', ...forged } });
  assert.equal(levelForged.json.order.amountPaise, 899900);
  assert.deepEqual(creates().map((x) => x.body.order_amount), [1, 4999, 8999]);
});

/* ============ 7. removal ============ */
test('7. ordering without the code after a quote charges the original ₹4,999', async () => {
  const env = makeEnv();
  const { cookie, id } = await signedUp(env);
  await req(env, 'POST', '/coupons/quote', { cookie, body: { product_id: 'LIFETIME', coupon: CODE } });
  cashfree.calls.length = 0;
  for (const coupon of [undefined, '', '   ', null]) {
    const r = await req(env, 'POST', '/orders', { cookie, body: { product_id: 'LIFETIME', ...(coupon === undefined ? {} : { coupon }) } });
    assert.equal(r.status, 200, String(coupon));
    assert.equal(r.json.order.amountPaise, 499900);
    assert.equal(r.json.order.couponCode, null);
    assert.equal(r.json.order.discountPaise, 0);
  }
  assert.ok(creates().every((x) => x.body.order_amount === 4999 && !('item_discounted_unit_price' in x.body.cart_details.cart_items[0])));
  const row = await env.DB.prepare('SELECT discount_paise, coupon_code, original_amount_paise FROM orders WHERE user_id = ?1 LIMIT 1').bind(id).first();
  assert.deepEqual(row, { discount_paise: 0, coupon_code: null, original_amount_paise: 499900 });
});

/* ============ 9. payment still verified server-side ============ */
test('9. a ₹1 order unlocks nothing until Cashfree itself reports PAID; forged webhooks grant nothing', async () => {
  const env = makeEnv();
  const { cookie, id } = await signedUp(env);
  const { json } = await req(env, 'POST', '/orders', { cookie, body: { product_id: 'LIFETIME', coupon: CODE } });
  const orderId = json.order.id;

  assert.equal((await signedWebhook(env, success(orderId), { signature: 'ZmFrZQ==' })).status, 401, 'bad signature');
  assert.equal((await signedWebhook(env, success(orderId), { secret: 'wrong-secret' })).status, 401, 'wrong key');
  assert.equal((await signedWebhook(env, success(orderId))).status, 503, 'signed, but the gateway still says ACTIVE');
  assert.equal((await req(env, 'GET', `/orders/${orderId}`, { cookie })).json.order.status, 'created', 'a browser poll alone unlocks nothing');
  assert.deepEqual(await ents(env, id), []);

  // the gateway's amount must match the ₹1 we recorded
  cashfree.orders.get(orderId).order_amount = 4999;
  gatewayPays(orderId);
  assert.equal((await signedWebhook(env, success(orderId))).status, 400, 'amount mismatch');
  assert.equal((await orderRow(env, orderId)).status, 'review');
  assert.deepEqual(await ents(env, id), []);
});

test('9/10. paid ₹1 Lifetime order: Lifetime granted once; duplicate webhooks and polls add nothing', async () => {
  const env = makeEnv();
  const { cookie, id } = await signedUp(env);
  const { json } = await req(env, 'POST', '/orders', { cookie, body: { product_id: 'LIFETIME', coupon: CODE } });
  const orderId = json.order.id;
  gatewayPays(orderId);
  for (let i = 0; i < 3; i++) assert.equal((await signedWebhook(env, success(orderId))).status, 200);
  assert.equal((await req(env, 'GET', `/orders/${orderId}`, { cookie })).json.order.status, 'paid');
  const rows = await ents(env, id);
  assert.deepEqual(rows.map((r) => r.product_id), ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'LIFETIME'], 'exactly what Lifetime grants, once each');
  assert.ok(rows.every((r) => r.expires_at === null), 'Lifetime never expires');
  assert.equal((await orderRow(env, orderId)).status, 'paid');
  // an owner cannot buy it again, coupon or not
  const again = await req(env, 'POST', '/orders', { cookie, body: { product_id: 'LIFETIME', coupon: CODE } });
  assert.equal(again.status, 409);
});

/* ============ 11. normal checkout ============ */
test('11. checkout without a coupon still works end to end for a level and for Lifetime', async () => {
  const env = makeEnv({ COUPON_KLARWEGFREE1: 'off' });
  for (const [product, rupees] of [['B2', 4999], ['LIFETIME', 4999], ['A1', 1999]]) {
    const { cookie, id } = await signedUp(env);
    const r = await req(env, 'POST', '/orders', { cookie, body: { product_id: product } });
    assert.equal(r.status, 200, product);
    assert.equal(cashfree.orders.get(r.json.order.id).order_amount, rupees, product);
    gatewayPays(r.json.order.id);
    assert.equal((await signedWebhook(env, success(r.json.order.id))).status, 200, product);
    assert.ok((await ents(env, id)).some((e) => e.product_id === product), product);
  }
});
