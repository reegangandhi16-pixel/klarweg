/* klarweg-access — CORS_PUBLIC_SITE_ORIGINS (src/cors.js). The isolated
   payment-sandbox Worker (wrangler.payments-sandbox.toml) sets it to "deny"
   so it answers ONLY its local test page (http://localhost:8789), never the
   public Klarweg site origins hard-coded for production. These tests prove
   that "deny" removes those origins from response CORS, preflight, the CSRF
   write guard and the Cashfree return URL; that unset keeps production's
   behaviour exactly; and that any other value fails closed. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { publicSiteOriginsAllowed } from '../src/cors.js';
import { siteBaseUrl } from '../src/cashfree-config.js';
import { createD1 } from './d1-sqlite.mjs';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const API = 'https://klarweg-access-payments-nonprod.example.workers.dev';
const SANDBOX_PAGE = 'http://localhost:8789';
const EXAM_PAGE = 'http://localhost:8788';
const PUBLIC = ['https://klarweg.in', 'https://reegangandhi16-pixel.github.io'];
const ctx = { waitUntil() {} };

/* the payment-sandbox config's CORS settings; extra overrides */
function sandboxEnv(extra = {}) {
  return { DB: createD1(WORKER_DIR), RATE_SALT: 'test-salt', CORS_EXTRA_ORIGINS: SANDBOX_PAGE, CORS_PUBLIC_SITE_ORIGINS: 'deny', ...extra };
}
/* production's: neither variable set */
function productionEnv() {
  return { DB: createD1(WORKER_DIR), RATE_SALT: 'test-salt' };
}
let ip = 0;
const send = (e, method, pathname, origin, body) => worker.fetch(new Request(API + pathname, {
  method, body: body === undefined ? undefined : JSON.stringify(body),
  headers: { ...(origin ? { origin } : {}), 'content-type': 'application/json', 'CF-Connecting-IP': '203.0.113.' + (++ip % 250) }
}), e, ctx);
const preflight = (e, origin) => send(e, 'OPTIONS', '/auth/me', origin);
const signupBody = () => ({ email: `u${Math.random().toString(36).slice(2)}@example.com`, password: 'correct-horse-9', name: 'T' });

test('PUBLIC ORIGINS: unset or "allow" keeps them; "deny" and any other value (fails closed) remove them', () => {
  assert.equal(publicSiteOriginsAllowed({}), true);
  assert.equal(publicSiteOriginsAllowed(undefined), true);
  assert.equal(publicSiteOriginsAllowed({ CORS_PUBLIC_SITE_ORIGINS: 'allow' }), true);
  for (const v of ['deny', 'Deny', 'DENY', 'false', 'off', '', ' allow', 'allow ', 'true', '0', '1']) {
    assert.equal(publicSiteOriginsAllowed({ CORS_PUBLIC_SITE_ORIGINS: v }), false, `"${v}" must not allow the public origins`);
  }
});

test('SANDBOX ("deny"): localhost:8789 gets credentialed CORS and its writes pass', async () => {
  const e = sandboxEnv();
  const pf = await preflight(e, SANDBOX_PAGE);
  assert.equal(pf.status, 204);
  assert.equal(pf.headers.get('access-control-allow-origin'), SANDBOX_PAGE);
  assert.equal(pf.headers.get('access-control-allow-credentials'), 'true');
  const su = await send(e, 'POST', '/auth/signup', SANDBOX_PAGE, signupBody());
  assert.ok(su.status >= 200 && su.status < 300, `signup from the sandbox page must succeed, got ${su.status}`);
  assert.equal(su.headers.get('access-control-allow-origin'), SANDBOX_PAGE);
});

test('SANDBOX ("deny"): neither public site origin gets Access-Control-Allow-Origin, on preflight or on a normal response', async () => {
  const e = sandboxEnv();
  for (const origin of PUBLIC) {
    const pf = await preflight(e, origin);
    assert.equal(pf.status, 403, `${origin} preflight refused`);
    assert.equal(pf.headers.get('access-control-allow-origin'), null);
    for (const p of ['/enrol/catalog', '/consult/availability', '/auth/me']) {
      const r = await send(e, 'GET', p, origin);
      assert.equal(r.headers.get('access-control-allow-origin'), null, `${origin} GET ${p}: no ACAO`);
      assert.equal(r.headers.get('access-control-allow-credentials'), null);
    }
  }
});

test('SANDBOX ("deny"): state-changing requests from the public site origins are refused by the CSRF guard (403), not just left without CORS headers', async () => {
  const e = sandboxEnv();
  for (const origin of PUBLIC) {
    for (const [method, p, body] of [['POST', '/auth/signup', signupBody()], ['POST', '/auth/login', { email: 'a@example.com', password: 'x' }],
      ['POST', '/consult/bookings', { teacher_id: 'reegan-gandhi', slot: '15:00' }], ['POST', '/enrol/checkout', { course_id: 'live-a1' }],
      ['POST', '/orders', { product_id: 'A1' }], ['POST', '/auth/logout', {}]]) {
      const r = await send(e, method, p, origin, body);
      assert.equal(r.status, 403, `${origin} ${method} ${p}`);
      assert.deepEqual(await r.json(), { ok: false, error: 'Cross-site request refused.' });
    }
  }
  const users = await e.DB.prepare('SELECT COUNT(*) AS n FROM users').first();
  assert.equal(users.n, 0, 'no refused write created anything');
});

test('SANDBOX ("deny"): localhost:8788 (the exam/QA page) and unknown origins stay refused', async () => {
  const e = sandboxEnv();
  for (const origin of [EXAM_PAGE, 'https://evil.example', 'http://localhost:9999', 'null']) {
    assert.equal((await preflight(e, origin)).status, 403, `${origin} preflight`);
    const r = await send(e, 'POST', '/auth/signup', origin, signupBody());
    assert.equal(r.status, 403, `${origin} write`);
    assert.equal(r.headers.get('access-control-allow-origin'), null);
  }
});

test('SANDBOX: an invalid CORS_PUBLIC_SITE_ORIGINS value fails closed (public origins refused), never open', async () => {
  for (const v of ['Deny', 'no', '']) {
    const e = sandboxEnv({ CORS_PUBLIC_SITE_ORIGINS: v });
    assert.equal((await preflight(e, PUBLIC[0])).status, 403, `"${v}"`);
    assert.equal((await send(e, 'POST', '/auth/signup', PUBLIC[1], signupBody())).status, 403, `"${v}"`);
    assert.equal((await preflight(e, SANDBOX_PAGE)).status, 204, `"${v}": the listed sandbox page still works`);
  }
});

test('PRODUCTION (unset): both public origins keep CORS and their writes; localhost and unknown origins stay refused', async () => {
  const e = productionEnv();
  for (const origin of PUBLIC) {
    const pf = await preflight(e, origin);
    assert.equal(pf.status, 204, origin);
    assert.equal(pf.headers.get('access-control-allow-origin'), origin);
    const su = await send(e, 'POST', '/auth/signup', origin, signupBody());
    assert.ok(su.status >= 200 && su.status < 300, `${origin} signup, got ${su.status}`);
    assert.equal(su.headers.get('access-control-allow-origin'), origin);
  }
  for (const origin of [SANDBOX_PAGE, EXAM_PAGE, 'https://evil.example']) {
    assert.equal((await preflight(e, origin)).status, 403, origin);
    assert.equal((await send(e, 'POST', '/auth/signup', origin, signupBody())).status, 403, origin);
  }
});

test('"deny" does not leak into a later request served with an env that lacks it', async () => {
  assert.equal((await preflight(sandboxEnv(), PUBLIC[0])).status, 403);
  assert.equal((await preflight(productionEnv(), PUBLIC[0])).status, 204);
  assert.equal((await preflight(sandboxEnv(), PUBLIC[1])).status, 403);
});

test('Cashfree return URL: the sandbox sends learners back to localhost:8789, never to a public site origin; production unchanged', () => {
  const req = (origin) => new Request(API + '/enrol/checkout', { method: 'POST', headers: origin ? { Origin: origin } : {} });
  const SANDBOX = { CASHFREE_ENV: 'sandbox', CORS_EXTRA_ORIGINS: SANDBOX_PAGE, CORS_PUBLIC_SITE_ORIGINS: 'deny' };
  assert.equal(siteBaseUrl(SANDBOX, req(SANDBOX_PAGE)), SANDBOX_PAGE);
  for (const origin of [...PUBLIC, null, 'https://evil.example']) assert.equal(siteBaseUrl(SANDBOX, req(origin)), SANDBOX_PAGE, `deny: ${origin} → only the sandbox page`);
  assert.equal(siteBaseUrl({ CASHFREE_ENV: 'sandbox' }, req('https://klarweg.in')), 'https://klarweg.in', 'production: unchanged');
  assert.equal(siteBaseUrl({ CASHFREE_ENV: 'sandbox' }, req(PUBLIC[1])), 'https://reegangandhi16-pixel.github.io/klarweg', 'production: unchanged');
});

test('Cashfree return URL, end to end: an A1 checkout from localhost:8789 creates a sandbox order whose return_url is the local test page', async () => {
  const e = sandboxEnv({ CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST_UNIT', CASHFREE_SECRET_KEY: 'cfsk_ma_test_unit', ENROL_PAYMENTS: 'sandbox',
    ENROL_COURSES: JSON.stringify({ 'live-a1': { batch: '2099-01-05' } }), ENROL_CONSULT_CREDIT: 'course-fee' });
  const realFetch = globalThis.fetch;
  let created = null;
  globalThis.fetch = async (input, init = {}) => {
    const u = typeof input === 'string' ? input : input.url;
    if (u === 'https://sandbox.cashfree.com/pg/orders' && (init.method || 'GET').toUpperCase() === 'POST') {
      created = JSON.parse(init.body);
      return Response.json({ order_id: created.order_id, order_amount: created.order_amount, order_currency: 'INR', order_status: 'ACTIVE', payment_session_id: 'session_unit_test', order_expiry_time: created.order_expiry_time });
    }
    throw new Error('unexpected network call ' + u);
  };
  try {
    const su = await send(e, 'POST', '/auth/signup', SANDBOX_PAGE, signupBody());
    const cookie = (su.headers.get('set-cookie') || '').split(';')[0];
    const ph = await worker.fetch(new Request(API + '/auth/phone', { method: 'POST', body: JSON.stringify({ phone: '9999999999' }), headers: { origin: SANDBOX_PAGE, cookie, 'content-type': 'application/json' } }), e, ctx);
    assert.equal(ph.status, 200);
    const co = await worker.fetch(new Request(API + '/enrol/checkout', { method: 'POST', body: JSON.stringify({ course_id: 'live-a1', expected_amount_paise: 799900 }), headers: { origin: SANDBOX_PAGE, cookie, 'content-type': 'application/json' } }), e, ctx);
    assert.equal(co.status, 200, JSON.stringify(await co.clone().json()));
    assert.ok(created, 'a Cashfree sandbox order was created');
    assert.match(created.order_meta.return_url, /^http:\/\/localhost:8789\/live-classes\.html\?enrol_ref=KWE-[2-9A-HJ-NP-Z]{8}#enrol$/);
  } finally { globalThis.fetch = realFetch; }
});
