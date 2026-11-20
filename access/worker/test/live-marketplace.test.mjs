/* Live teacher marketplace — node --test
   Pricing for every teacher × level × format, coupons, ₹100 Friday/Sunday
   demo booking (availability, double booking, holds, payment verification,
   late payments, rescheduling, join links), marketplace course checkout
   (batches, server quotes, no coupon stacking, capacity), and the admin
   API (access control, approvals, audit). Real Worker, in-memory D1 with
   every migration, Cashfree mocked at fetch(). */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import fs from 'node:fs';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import {
  TEACHERS, LEVELS, FORMATS, COUPONS, PRICES_PAISE, DEMO_TIMES, DEMO_FEE_PAISE, COURSE_ELIGIBILITY,
  listPrice, quoteCourse, courseId, parseCourseId, courseStatus, demoEligible, isDemoDay, demoDates, normaliseCoupon
} from '../src/live-catalog.js';
import { HOLD_SECONDS } from '../src/consultations.js';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = path.resolve(WORKER_DIR, '..', '..');
/* The page's UMD display file, evaluated as the browser does. */
function loadPagePricing() {
  const sandbox = {};
  sandbox.window = sandbox;
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'live-marketplace-pricing.js'), 'utf8'), sandbox);
  return sandbox.KWLiveMarketplace;
}
const SITE = 'https://reegangandhi16-pixel.github.io';
const API = 'https://klarweg-access.example.workers.dev';
const SECRET = 'cfsk_test_secret_value';

/* ---------------- clock (IST) ---------------- */
const REAL_NOW = Date.now;
const ist = (s) => Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +s.slice(8, 10), +s.slice(11, 13), +s.slice(14, 16)) - 330 * 60000;
let fakeNow = null;
Date.now = () => (fakeNow == null ? REAL_NOW() : fakeNow);
const at = (s) => { fakeNow = ist(s); };
const advance = (sec) => { fakeNow += sec * 1000; };
// Friday 2026-11-20; Sunday 11-22; Friday 11-27; Sunday 11-29; Saturday 11-21.
const FRI = '2026-11-27', SUN = '2026-11-29', SAT = '2026-11-28';

/* ---------------- Cashfree mock ---------------- */
const cashfree = { orders: new Map(), calls: [], failCreate: false };
globalThis.fetch = async (input, init = {}) => {
  const url = typeof input === 'string' ? input : input.url;
  const method = (init.method || 'GET').toUpperCase();
  const m = url.match(/^https:\/\/(sandbox|api)\.cashfree\.com\/pg\/orders(?:\/([^/]+))?$/);
  if (!m) throw new Error('Unexpected network call in test: ' + url);
  cashfree.calls.push({ method, body: init.body ? JSON.parse(init.body) : null });
  if (method === 'POST' && !m[2]) {
    if (cashfree.failCreate) return new Response('down', { status: 502 });
    const b = JSON.parse(init.body);
    cashfree.orders.set(b.order_id, { order_id: b.order_id, order_amount: b.order_amount, order_currency: 'INR', order_status: 'ACTIVE' });
    return Response.json({ order_id: b.order_id, order_amount: b.order_amount, order_currency: 'INR', payment_session_id: 'session_' + b.order_id, order_status: 'ACTIVE', order_expiry_time: b.order_expiry_time });
  }
  const o = cashfree.orders.get(decodeURIComponent(m[2]));
  return o ? Response.json({ ...o }) : Response.json({ message: 'not found' }, { status: 404 });
};
const pays = (orderId, amount) => { const o = cashfree.orders.get(orderId); o.order_status = 'PAID'; if (amount != null) o.order_amount = amount; };
const lastCreate = () => [...cashfree.calls].reverse().find((c) => c.method === 'POST').body;
const creates = () => cashfree.calls.filter((c) => c.method === 'POST').length;

/* ---------------- harness ---------------- */
const ADMIN_EMAIL = 'owner-admin@example.com';
function makeEnv(o = {}) {
  return {
    DB: createD1(WORKER_DIR), CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1234567890', CASHFREE_SECRET_KEY: SECRET,
    GOOGLE_CLIENT_ID: 'x.apps.googleusercontent.com', RATE_SALT: 's',
    DEMO_BOOKING: 'sandbox', ENROL_PAYMENTS: 'sandbox', ENROL_CONSULT_CREDIT: 'off', LIVE_ADMIN_EMAILS: ADMIN_EMAIL, ...o
  };
}
const ctx = { waitUntil() {} };
async function req(env, method, pathname, { body, cookie, headers = {} } = {}) {
  const h = { origin: SITE, 'CF-Connecting-IP': '198.51.100.' + Math.floor(Math.random() * 200), ...headers };
  if (body !== undefined) h['content-type'] = 'application/json';
  if (cookie) h.cookie = cookie;
  const res = await worker.fetch(new Request(API + pathname, { method, headers: h, body: body === undefined ? undefined : (typeof body === 'string' ? body : JSON.stringify(body)) }), env, ctx);
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch {}
  return { status: res.status, json };
}
/* A signed-up learner with its session cookie (and a phone on the account). */
async function account(env, { email, phone = true, mfa = false } = {}) {
  email = email || `u${Math.random().toString(36).slice(2)}@example.com`;
  const res = await worker.fetch(new Request(API + '/auth/signup', { method: 'POST', headers: { origin: SITE, 'content-type': 'application/json', 'CF-Connecting-IP': '198.51.100.' + Math.floor(Math.random() * 200) }, body: JSON.stringify({ email, password: 'correct-horse-9', name: 'Test Learner' }) }), env, ctx);
  assert.equal(res.status, 201);
  const data = await res.json();
  const cookie = res.headers.get('set-cookie').split(';')[0];
  if (phone) assert.equal((await req(env, 'POST', '/auth/phone', { cookie, body: { phone: '9876543210' } })).status, 200);
  if (mfa) await env.DB.prepare('UPDATE sessions SET mfa_verified_at = ?1 WHERE user_id = ?2').bind(Math.floor(Date.now() / 1000), data.user.id).run();
  return { id: data.user.id, email, cookie };
}
const admin = (env) => account(env, { email: ADMIN_EMAIL, mfa: true });
const openSlots = (env, a, date, times, teacher = 'reegan-gandhi', status = 'open') => req(env, 'POST', '/live-admin/slots', { cookie: a.cookie, body: { teacher_id: teacher, date, times, status } });
const bookDemo = (env, u, body) => req(env, 'POST', '/demo/bookings', { cookie: u.cookie, body: { teacher_id: 'reegan-gandhi', contact_name: 'Asha Verma', contact_phone: '98765 43210', accept_terms: true, ...body } });
const bookingRow = (env, ref) => env.DB.prepare('SELECT * FROM consult_bookings WHERE ref = ?1').bind(ref).first();
async function webhook(env, orderId) {
  const raw = JSON.stringify({ type: 'PAYMENT_SUCCESS_WEBHOOK', data: { order: { order_id: orderId }, payment: { cf_payment_id: 'pay_' + orderId.slice(-8), payment_status: 'SUCCESS' } } });
  const ts = Math.floor(Date.now() / 1000);
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(String(ts) + raw));
  return req(env, 'POST', '/webhooks/cashfree', { body: raw, headers: { origin: '', 'x-webhook-timestamp': String(ts), 'x-webhook-signature': Buffer.from(mac).toString('base64') } });
}
async function noSelfPacedAccess(env, u) {
  assert.equal((await env.DB.prepare('SELECT COUNT(*) AS n FROM user_entitlements WHERE user_id = ?1').bind(u.id).first()).n, 0);
  assert.equal((await env.DB.prepare('SELECT COUNT(*) AS n FROM orders WHERE user_id = ?1').bind(u.id).first()).n, 0);
}

test.beforeEach(() => { at('2026-11-20 10:00'); cashfree.failCreate = false; });
test.after(() => { Date.now = REAL_NOW; });

/* ================= pricing (pure) ================= */
const EXPECTED = {
  preferred: { group: [16000, 3000, 13000], individual: [22000, 7000, 15000] },
  standard: { group: [21000, 3000, 18000], individual: [27000, 7000, 20000] }
};
test('pricing: every teacher × level × format has the owner price, coupon and final amount', () => {
  assert.equal(Object.keys(TEACHERS).length, 11);
  let n = 0;
  for (const [id, t] of Object.entries(TEACHERS)) {
    const tier = ['reegan-gandhi', 'geetika-dhawan'].includes(id) ? 'preferred' : 'standard';
    assert.equal(t.preferred, tier === 'preferred', id);
    for (const level of LEVELS) for (const format of FORMATS) {
      const lp = listPrice(id, level, format);
      const [orig, disc, fin] = EXPECTED[tier][format];
      assert.equal(lp.originalPaise, orig * 100, `${id} ${level} ${format}`);
      assert.equal(lp.couponDiscountPaise, disc * 100);
      assert.equal(lp.priceWithCouponPaise, fin * 100);
      assert.equal(lp.couponCode, format === 'group' ? 'GROUP3000' : 'PERSONAL7000');
      const withCoupon = quoteCourse({ teacherId: id, level, format, coupon: lp.couponCode });
      assert.equal(withCoupon.finalPaise, fin * 100);
      assert.equal(quoteCourse({ teacherId: id, level, format, coupon: '' }).finalPaise, orig * 100);
      n++;
    }
  }
  assert.equal(n, 88);
  assert.deepEqual(LEVELS, ['A1', 'A2', 'B1', 'B2']);
});

test('pricing: the browser display file shows exactly the server prices', () => {
  const page = loadPagePricing();
  assert.equal(page.paymentsEnabled, false, 'the display file is never a payment authority');
  for (const id of Object.keys(TEACHERS)) for (const level of LEVELS) for (const format of FORMATS) {
    const p = page.prices(id, level, format), s = listPrice(id, level, format);
    assert.equal(p.original * 100, s.originalPaise, `${id} ${level} ${format}`);
    assert.equal(p.discount * 100, s.couponDiscountPaise);
    assert.equal(p.discounted * 100, s.priceWithCouponPaise);
    assert.equal(p.coupon, s.couponCode);
  }
  assert.deepEqual([...page.SPECIAL_TEACHERS].sort(), Object.keys(TEACHERS).filter((id) => TEACHERS[id].preferred).sort());
  assert.equal(page.demoFee * 100, DEMO_FEE_PAISE);
  assert.deepEqual(JSON.parse(JSON.stringify(page.candidateDemoTimes())), [...DEMO_TIMES]);
});

test('coupons: one per order, only for their own format, case/space tolerant, never stacked', () => {
  const base = { teacherId: 'reegan-gandhi', level: 'B1' };
  assert.equal(quoteCourse({ ...base, format: 'group', coupon: ' group3000 ' }).discountPaise, 300000);
  assert.equal(quoteCourse({ ...base, format: 'individual', coupon: 'PERSONAL7000' }).discountPaise, 700000);
  assert.equal(quoteCourse({ ...base, format: 'group', coupon: 'PERSONAL7000' }).code, 'coupon-wrong-format');
  assert.equal(quoteCourse({ ...base, format: 'individual', coupon: 'GROUP3000' }).code, 'coupon-wrong-format');
  assert.equal(quoteCourse({ ...base, format: 'group', coupon: 'GROUP3000,PERSONAL7000' }).code, 'coupon-invalid');
  assert.equal(quoteCourse({ ...base, format: 'group', coupon: 'GROUP3000GROUP3000' }).code, 'coupon-invalid');
  assert.equal(quoteCourse({ ...base, format: 'group', coupon: 'FREE100' }).code, 'coupon-invalid');
  assert.equal(quoteCourse({ ...base, format: 'group', coupon: 'GROUP3000', activeCoupons: new Set() }).code, 'coupon-inactive');
  assert.equal(normaliseCoupon('  per sonal7000 '), 'PERSONAL7000');
  assert.deepEqual(Object.keys(COUPONS).sort(), ['GROUP3000', 'PERSONAL7000']);
  assert.equal(PRICES_PAISE.preferred.group - COUPONS.GROUP3000.discountPaise, 1300000);
});

test('eligibility: only verified courses are sellable; unverified teachers stay draft', () => {
  assert.deepEqual(Object.keys(COURSE_ELIGIBILITY), ['reegan-gandhi']);
  for (const level of LEVELS) for (const format of FORMATS) {
    assert.equal(courseStatus('reegan-gandhi', level, format), 'verified');
    assert.equal(courseStatus('geetika-dhawan', level, format), 'draft', 'listed-only teacher: no verified profile');
    assert.equal(courseStatus('sahil-arora', level, format), 'draft');
  }
  assert.ok(demoEligible('reegan-gandhi'));
  assert.ok(!demoEligible('geetika-dhawan'));
  const id = courseId('kanika-taneja', 'B2', 'individual');
  assert.equal(id, 'live-kanika-taneja-b2-individual');
  assert.deepEqual(parseCourseId(id), { teacherId: 'kanika-taneja', level: 'B2', format: 'individual' });
  assert.equal(parseCourseId('live-unknown-person-a1-group'), null);
  assert.equal(parseCourseId('live-reegan-gandhi-c1-group'), null);
});

test('demo calendar: Fridays and Sundays only; 20-minute slots after 4 PM IST ending by 10 PM', () => {
  assert.ok(isDemoDay('2026-11-20') && isDemoDay('2026-11-22'));
  for (const d of ['2026-11-21', '2026-11-23', '2026-11-24', '2026-11-25', '2026-11-26']) assert.ok(!isDemoDay(d), d);
  assert.ok(!isDemoDay('2026-02-30'));
  assert.deepEqual(demoDates('2026-11-21', 4), ['2026-11-22', '2026-11-27', '2026-11-29', '2026-12-04']);
  assert.equal(DEMO_TIMES[0], '16:20');
  assert.equal(DEMO_TIMES.at(-1), '21:40');
  for (const t of DEMO_TIMES) assert.ok(t > '16:00' && t <= '21:40' && /^(1[6-9]|2[01]):[024]0$/.test(t), t);
});

/* ================= admin access ================= */
test('admin: refused without the allowlist, without a fresh second factor, or when the list is empty', async () => {
  const env = makeEnv();
  const stranger = await account(env, { mfa: true });
  assert.equal((await req(env, 'GET', '/live-admin/overview', { cookie: stranger.cookie })).json.code, 'not-admin');
  const noMfa = await account(env, { email: ADMIN_EMAIL });
  const r = await req(env, 'GET', '/live-admin/overview', { cookie: noMfa.cookie });
  assert.equal(r.status, 403); assert.equal(r.json.code, 'mfa-required');
  assert.equal((await req(env, 'GET', '/live-admin/overview')).status, 401);
  const env2 = makeEnv({ LIVE_ADMIN_EMAILS: '' });
  const a2 = await account(env2, { email: ADMIN_EMAIL, mfa: true });
  assert.equal((await req(env2, 'GET', '/live-admin/overview', { cookie: a2.cookie })).status, 403);
});

test('admin: overview works for an allowlisted admin with a fresh second factor', async () => {
  const env = makeEnv();
  const a = await admin(env);
  const r = await req(env, 'GET', '/live-admin/overview', { cookie: a.cookie });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.equal(r.json.teachers.length, 11);
  assert.equal(r.json.teachers.find((t) => t.id === 'reegan-gandhi').verifiedCourses.length, 8);
  assert.equal(r.json.coupons.length, 2);
});

test('admin slots: only verified demo teachers, Fridays/Sundays, 16:20–21:40; audited', async () => {
  const env = makeEnv();
  const a = await admin(env);
  assert.equal((await openSlots(env, a, SAT, ['17:00'])).json.code, 'bad-day');
  assert.equal((await openSlots(env, a, FRI, ['16:00'])).json.code, 'bad-time');
  assert.equal((await openSlots(env, a, FRI, ['17:00'], 'geetika-dhawan')).json.code, 'teacher-not-eligible');
  assert.equal((await openSlots(env, a, '2026-11-13', ['17:00'])).json.code, 'past');
  assert.equal((await openSlots(env, a, FRI, ['17:00', '17:20'])).status, 200);
  const audit = await env.DB.prepare("SELECT COUNT(*) AS n FROM live_admin_audit WHERE action = 'slots'").first();
  assert.equal(audit.n, 1);
});

/* ================= demo booking ================= */
test('demo availability: off by default; shows only admin-opened, unheld slots at least 3 h ahead', async () => {
  const off = makeEnv({ DEMO_BOOKING: undefined });
  const r0 = await req(off, 'GET', '/demo/availability');
  assert.equal(r0.json.enabled, false); assert.deepEqual(r0.json.teachers, []);

  const env = makeEnv();
  const a = await admin(env);
  await openSlots(env, a, '2026-11-20', ['16:20', '17:00']);   // today
  await openSlots(env, a, FRI, ['18:00', '18:20']);
  at('2026-11-20 14:00');   // 16:20 is only 2h20 away → hidden; 17:00 is exactly 3 h → shown
  const r = await req(env, 'GET', '/demo/availability?teacher_id=reegan-gandhi');
  const t = r.json.teachers[0];
  assert.equal(r.json.fee.amountPaise, 10000);
  const today = t.dates.find((d) => d.date === '2026-11-20');
  assert.deepEqual(today.slots.map((s) => s.start), ['17:00']);
  assert.deepEqual(t.dates.find((d) => d.date === FRI).slots.map((s) => s.start), ['18:00', '18:20']);
  assert.ok(t.dates.every((d) => isDemoDay(d.date)));
  assert.equal(t.dates.find((d) => d.date === SUN).slots.length, 0, 'no slot opened = nothing offered');
});

test('demo: ₹100 order (client amount ignored); confirmed only after Cashfree reports PAID', async () => {
  const env = makeEnv({ CONSULT_JOIN_LINKS: JSON.stringify({ 'reegan-gandhi': 'https://meet.google.com/abc-defg-hij' }) });
  const a = await admin(env);
  await openSlots(env, a, FRI, ['18:00']);
  const u = await account(env);
  const r = await bookDemo(env, u, { date: FRI, slot: '18:00', amount: 1, amount_paise: 100 });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.equal(lastCreate().order_amount, 100);
  assert.equal(lastCreate().customer_details.customer_phone, '9876543210');
  assert.match(lastCreate().order_meta.return_url, /live-classes\.html\?demo_ref=KWC-/);
  const ref = r.json.booking.ref;
  assert.equal(r.json.booking.status, 'pending');
  assert.equal(r.json.booking.kind, 'demo');

  // the return redirect alone proves nothing
  let v = await req(env, 'GET', '/consult/bookings/' + ref, { cookie: u.cookie });
  assert.equal(v.json.booking.status, 'pending');
  assert.equal((await req(env, 'GET', `/consult/bookings/${ref}/join`, { cookie: u.cookie })).json.code, 'not-confirmed');

  const row = await bookingRow(env, ref);
  pays(row.cashfree_order_id);
  assert.equal((await webhook(env, row.cashfree_order_id)).status, 200);
  v = await req(env, 'GET', '/consult/bookings/' + ref, { cookie: u.cookie });
  assert.equal(v.json.booking.status, 'confirmed');
  assert.equal(v.json.booking.date, FRI); assert.equal(v.json.booking.slotStart, '18:00'); assert.equal(v.json.booking.slotEnd, '18:20');
  const j = await req(env, 'GET', `/consult/bookings/${ref}/join`, { cookie: u.cookie });
  assert.equal(j.json.joinUrl, 'https://meet.google.com/abc-defg-hij');
  const other = await account(env);
  assert.equal((await req(env, 'GET', `/consult/bookings/${ref}/join`, { cookie: other.cookie })).status, 404, 'never another learner');
  await noSelfPacedAccess(env, u);
});

test('demo: refuses unopened, Saturday, before-4-PM and too-soon times without charging', async () => {
  const env = makeEnv();
  const a = await admin(env);
  await openSlots(env, a, FRI, ['18:00']);
  const u = await account(env);
  const before = creates();
  assert.equal((await bookDemo(env, u, { date: FRI, slot: '18:20' })).json.code, 'slot-unavailable');
  assert.equal((await bookDemo(env, u, { date: SAT, slot: '18:00' })).json.code, 'bad-day');
  assert.equal((await bookDemo(env, u, { date: FRI, slot: '15:00' })).json.code, 'bad-time');
  assert.equal((await bookDemo(env, u, { date: FRI, slot: '18:00', teacher_id: 'geetika-dhawan' })).json.code, 'teacher-unavailable');
  assert.equal((await bookDemo(env, u, { date: FRI, slot: '18:00', accept_terms: false })).json.code, 'terms');
  assert.equal((await bookDemo(env, u, { date: FRI, slot: '18:00', contact_phone: '123' })).json.code, 'contact-phone');
  at(`${FRI} 16:00`);
  assert.equal((await bookDemo(env, u, { date: FRI, slot: '18:00' })).json.code, 'slot-unavailable', 'less than 3 h ahead');
  assert.equal(creates(), before, 'no gateway order for a refused request');
  assert.equal((await req(env, 'POST', '/demo/bookings', { body: {} })).status, 401);
});

test('demo: one slot, one learner — sequential and concurrent double bookings are refused', async () => {
  const env = makeEnv();
  const a = await admin(env);
  await openSlots(env, a, SUN, ['17:00']);
  const [u1, u2, u3] = [await account(env), await account(env), await account(env)];
  assert.equal((await bookDemo(env, u1, { date: SUN, slot: '17:00' })).status, 200);
  const r2 = await bookDemo(env, u2, { date: SUN, slot: '17:00' });
  assert.equal(r2.status, 409); assert.equal(r2.json.code, 'slot-taken');
  // concurrent: a fresh slot requested by two learners at once
  await openSlots(env, a, SUN, ['17:20']);
  const [x, y] = await Promise.all([bookDemo(env, u2, { date: SUN, slot: '17:20' }), bookDemo(env, u3, { date: SUN, slot: '17:20' })]);
  assert.deepEqual([x.status, y.status].sort(), [200, 409]);
  const held = await env.DB.prepare("SELECT COUNT(*) AS n FROM consult_bookings WHERE date = ?1 AND slot_start = '17:20' AND status IN ('pending','confirmed')").bind(SUN).first();
  assert.equal(held.n, 1);
  const avail = await req(env, 'GET', '/demo/availability');
  assert.equal(avail.json.teachers[0].dates.find((d) => d.date === SUN).slots.length, 0, 'held slots are not offered');
});

test('demo: an expired hold frees the slot; a late payment for a taken slot goes to review (refund), never double-confirms', async () => {
  const env = makeEnv();
  const a = await admin(env);
  await openSlots(env, a, FRI, ['19:00']);
  const u1 = await account(env), u2 = await account(env);
  const r1 = await bookDemo(env, u1, { date: FRI, slot: '19:00' });
  advance(HOLD_SECONDS + 1);
  const r2 = await bookDemo(env, u2, { date: FRI, slot: '19:00' });
  assert.equal(r2.status, 200, 'expired hold no longer blocks');
  const late = await bookingRow(env, r1.json.booking.ref);
  pays(late.cashfree_order_id);
  await webhook(env, late.cashfree_order_id);
  assert.equal((await bookingRow(env, r1.json.booking.ref)).status, 'review');
  assert.equal((await bookingRow(env, r1.json.booking.ref)).review_reason, 'late-payment-slot-taken');
  assert.equal((await bookingRow(env, r2.json.booking.ref)).status, 'pending');
});

test('demo: a late payment for a still-free slot is recovered; a wrong amount is never confirmed', async () => {
  const env = makeEnv();
  const a = await admin(env);
  await openSlots(env, a, FRI, ['19:20', '19:40']);
  const u = await account(env);
  const r = await bookDemo(env, u, { date: FRI, slot: '19:20' });
  advance(HOLD_SECONDS + 1);
  const row = await bookingRow(env, r.json.booking.ref);
  pays(row.cashfree_order_id);
  const v = await req(env, 'GET', '/consult/bookings/' + row.ref, { cookie: u.cookie });
  assert.equal(v.json.booking.status, 'confirmed', 'reconciled on view after webhook loss');

  const u2 = await account(env);
  const r2 = await bookDemo(env, u2, { date: FRI, slot: '19:40' });
  const row2 = await bookingRow(env, r2.json.booking.ref);
  pays(row2.cashfree_order_id, 1);
  await webhook(env, row2.cashfree_order_id);
  assert.equal((await bookingRow(env, row2.ref)).status, 'review');
  assert.equal((await bookingRow(env, row2.ref)).review_reason, 'amount');
});

test('demo: payment failure at the gateway charges nothing and holds nothing', async () => {
  const env = makeEnv();
  const a = await admin(env);
  await openSlots(env, a, FRI, ['20:00']);
  const u = await account(env);
  cashfree.failCreate = true;
  const r = await bookDemo(env, u, { date: FRI, slot: '20:00' });
  assert.equal(r.status, 502); assert.equal(r.json.code, 'payment-unavailable');
  assert.equal((await env.DB.prepare("SELECT COUNT(*) AS n FROM consult_bookings WHERE user_id = ?1").bind(u.id).first()).n, 0);
});

test('demo reschedule: once, ≥12 h before, only into an open free slot; admin can move without the learner limits', async () => {
  const env = makeEnv();
  const a = await admin(env);
  await openSlots(env, a, FRI, ['18:00', '18:20', '18:40']);
  await openSlots(env, a, SUN, ['17:00']);
  const u = await account(env), other = await account(env);
  const r = await bookDemo(env, u, { date: FRI, slot: '18:00' });
  const ref = r.json.booking.ref;
  const mv = (body, who = u) => req(env, 'POST', `/demo/bookings/${ref}/reschedule`, { cookie: who.cookie, body });
  assert.equal((await mv({ date: FRI, slot: '18:20' })).json.code, 'not-confirmed', 'pending cannot move');
  const row = await bookingRow(env, ref); pays(row.cashfree_order_id); await webhook(env, row.cashfree_order_id);

  const ro = await bookDemo(env, other, { date: FRI, slot: '18:40' });
  const oro = await bookingRow(env, ro.json.booking.ref); pays(oro.cashfree_order_id); await webhook(env, oro.cashfree_order_id);
  assert.equal((await mv({ date: FRI, slot: '18:40' })).json.code, 'slot-taken');
  assert.equal((await mv({ date: SAT, slot: '18:00' })).json.code, 'slot-unavailable');
  assert.equal((await mv({ date: SUN, slot: '17:00' }, other)).status, 404, 'not your booking');
  const ok = await mv({ date: SUN, slot: '17:00' });
  assert.equal(ok.status, 200, JSON.stringify(ok.json));
  assert.equal(ok.json.booking.date, SUN); assert.equal(ok.json.booking.rescheduleCount, 1);
  assert.equal((await bookingRow(env, ref)).original_date, FRI);
  assert.equal((await mv({ date: FRI, slot: '18:20' })).json.code, 'reschedule-used');
  // the old slot is free again
  const avail = await req(env, 'GET', '/demo/availability');
  assert.ok(avail.json.teachers[0].dates.find((d) => d.date === FRI).slots.some((s) => s.start === '18:00'));
  // admin move is not limited by the learner's single reschedule
  const am = await req(env, 'POST', `/live-admin/demos/${ref}`, { cookie: a.cookie, body: { action: 'reschedule', date: FRI, slot: '18:20' } });
  assert.equal(am.status, 200, JSON.stringify(am.json));
  // within 12 h the learner can no longer move
  const u3 = await account(env);
  await openSlots(env, a, FRI, ['21:00', '21:20']);
  const r3 = await bookDemo(env, u3, { date: FRI, slot: '21:00' });
  const row3 = await bookingRow(env, r3.json.booking.ref); pays(row3.cashfree_order_id); await webhook(env, row3.cashfree_order_id);
  at(`${FRI} 10:00`);
  const late = await req(env, 'POST', `/demo/bookings/${row3.ref}/reschedule`, { cookie: u3.cookie, body: { date: FRI, slot: '21:20' } });
  assert.equal(late.json.code, 'too-late');
});

test('demo admin: cancel frees the slot and requests a refund; refunded is recorded; nothing can be marked paid', async () => {
  const env = makeEnv();
  const a = await admin(env);
  await openSlots(env, a, SUN, ['20:00']);
  const u = await account(env);
  const r = await bookDemo(env, u, { date: SUN, slot: '20:00' });
  const row = await bookingRow(env, r.json.booking.ref); pays(row.cashfree_order_id); await webhook(env, row.cashfree_order_id);
  const c = await req(env, 'POST', `/live-admin/demos/${row.ref}`, { cookie: a.cookie, body: { action: 'cancel', note: 'Teacher unwell' } });
  assert.equal(c.json.booking.status, 'cancelled'); assert.equal(c.json.booking.refund_status, 'requested');
  const f = await req(env, 'POST', `/live-admin/demos/${row.ref}`, { cookie: a.cookie, body: { action: 'refunded' } });
  assert.equal(f.json.booking.refund_status, 'refunded');
  assert.equal((await req(env, 'POST', `/live-admin/demos/${row.ref}`, { cookie: a.cookie, body: { action: 'confirm' } })).status, 400);
  const u2 = await account(env);
  assert.equal((await bookDemo(env, u2, { date: SUN, slot: '20:00' })).status, 200, 'cancelled slot is bookable again');
});

/* ================= marketplace courses ================= */
const GROUP_A1 = 'live-reegan-gandhi-a1-group';
const ONE_A2 = 'live-reegan-gandhi-a2-individual';
async function openBatch(env, a, over = {}) {
  const r = await req(env, 'POST', '/live-admin/batches', { cookie: a.cookie, body: {
    teacher_id: 'reegan-gandhi', level: 'A1', format: 'group', start_date: '2027-01-11', end_date: '2027-04-02',
    schedule: 'Mon, Wed, Fri · 19:30–21:00 IST', capacity: 8, status: 'open', approve: true, fulfilment_note: '36 live classes on Google Meet', ...over } });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  return r.json.batch;
}
const quote = (env, u, q) => req(env, 'GET', '/enrol/quote?' + new URLSearchParams(q), { cookie: u.cookie });
const checkout = (env, u, body) => req(env, 'POST', '/enrol/checkout', { cookie: u.cookie, body });

test('catalogue: verified courses only, owner prices, dates "To be announced" until set', async () => {
  const env = makeEnv({ ENROL_PAYMENTS: undefined });
  const a = await admin(env);
  await req(env, 'POST', '/live-admin/batches', { cookie: a.cookie, body: { teacher_id: 'reegan-gandhi', level: 'B1', format: 'group', status: 'announced', capacity: 8 } });
  const r = await req(env, 'GET', '/enrol/catalog');
  assert.equal(r.json.enabled, false);
  const courses = r.json.marketplace.courses;
  assert.equal(courses.length, 8);
  assert.ok(courses.every((c) => c.teacherId === 'reegan-gandhi'));
  const b1 = courses.find((c) => c.courseId === 'live-reegan-gandhi-b1-group');
  assert.equal(b1.originalPaise, 1600000); assert.equal(b1.priceWithCouponPaise, 1300000); assert.equal(b1.couponCode, 'GROUP3000');
  assert.equal(b1.batches[0].startDate, null); assert.equal(b1.batches[0].state, 'awaiting-schedule'); assert.equal(b1.batches[0].purchasable, false);
  const ind = courses.find((c) => c.courseId === 'live-reegan-gandhi-b2-individual');
  assert.equal(ind.priceWithCouponPaise, 1500000); assert.equal(ind.couponCode, 'PERSONAL7000');
});

test('admin batches: draft courses refused; opening for payment needs dates, schedule, capacity and explicit approval', async () => {
  const env = makeEnv();
  const a = await admin(env);
  const post = (body) => req(env, 'POST', '/live-admin/batches', { cookie: a.cookie, body: { teacher_id: 'reegan-gandhi', level: 'A1', format: 'group', capacity: 8, ...body } });
  assert.equal((await post({ teacher_id: 'geetika-dhawan' })).json.code, 'course-draft');
  assert.equal((await post({ status: 'open', approve: true })).json.code, 'incomplete');
  assert.equal((await post({ status: 'open', start_date: '2027-01-11', end_date: '2027-04-02', schedule: 'x' })).json.code, 'approval-required');
  assert.equal((await post({ status: 'open', approve: true, start_date: '2026-11-01', end_date: '2027-04-02', schedule: 'x' })).json.code, 'past');
  assert.equal((await post({ format: 'individual', capacity: 2 })).status, 400, 'one-to-one capacity is 1');
  const b = await openBatch(env, a);
  assert.equal(b.status, 'open'); assert.ok(b.approved_by);
});

test('checkout: server quote with GROUP3000 = ₹13,000; amount must match what was shown; Cashfree order for exactly that', async () => {
  const env = makeEnv();
  const a = await admin(env);
  const b = await openBatch(env, a);
  const u = await account(env);
  let q = await quote(env, u, { course_id: GROUP_A1, batch_id: b.id, coupon: 'GROUP3000' });
  assert.equal(q.json.quote.originalPaise, 1600000); assert.equal(q.json.quote.discountPaise, 300000); assert.equal(q.json.quote.dueNowPaise, 1300000);
  q = await quote(env, u, { course_id: GROUP_A1, batch_id: b.id, coupon: 'PERSONAL7000' });
  assert.equal(q.status, 400); assert.equal(q.json.code, 'coupon-wrong-format');
  assert.equal((await quote(env, u, { course_id: GROUP_A1, batch_id: b.id })).json.quote.dueNowPaise, 1600000);

  assert.equal((await checkout(env, u, { course_id: GROUP_A1, batch_id: b.id, coupon: 'GROUP3000' })).json.code, 'amount-required');
  assert.equal((await checkout(env, u, { course_id: GROUP_A1, batch_id: b.id, coupon: 'GROUP3000', expected_amount_paise: 100 })).json.code, 'amount-changed');
  const r = await checkout(env, u, { course_id: GROUP_A1, batch_id: b.id, coupon: 'group3000', expected_amount_paise: 1300000, amount: 1 });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.equal(lastCreate().order_amount, 13000);
  const e = r.json.enrolment;
  assert.equal(e.couponCode, 'GROUP3000'); assert.equal(e.originalPaise, 1600000); assert.equal(e.discountPaise, 300000); assert.equal(e.amountDuePaise, 1300000);
  assert.equal(e.paymentStatus, 'pending');

  const pay = await env.DB.prepare("SELECT p.id FROM live_payments p JOIN live_enrolments e ON e.id = p.enrolment_id WHERE e.ref = ?1").bind(e.ref).first();
  let v = await req(env, 'GET', '/enrol/enrolments/' + e.ref, { cookie: u.cookie });
  assert.equal(v.json.enrolment.status, 'pending', 'no confirmation before Cashfree says PAID');
  pays(pay.id);
  await webhook(env, pay.id);
  v = await req(env, 'GET', '/enrol/enrolments/' + e.ref, { cookie: u.cookie });
  assert.equal(v.json.enrolment.status, 'enrolled'); assert.equal(v.json.enrolment.paymentStatus, 'paid');
  assert.equal(v.json.enrolment.startDate, '2027-01-11'); assert.equal(v.json.enrolment.schedule, 'Mon, Wed, Fri · 19:30–21:00 IST');
  await noSelfPacedAccess(env, u);
  assert.equal((await checkout(env, u, { course_id: GROUP_A1, batch_id: b.id, coupon: 'GROUP3000', expected_amount_paise: 1300000 })).json.code, 'already-enrolled');
});

test('checkout: one-to-one PERSONAL7000 = ₹15,000; underpayment goes to review, never enrols', async () => {
  const env = makeEnv();
  const a = await admin(env);
  const b = await openBatch(env, a, { level: 'A2', format: 'individual', capacity: 1, schedule: 'Scheduled with your teacher · 24 lessons' });
  const u = await account(env);
  const r = await checkout(env, u, { course_id: ONE_A2, batch_id: b.id, coupon: 'PERSONAL7000', expected_amount_paise: 1500000 });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.equal(lastCreate().order_amount, 15000);
  const pay = await env.DB.prepare("SELECT p.id FROM live_payments p JOIN live_enrolments e ON e.id = p.enrolment_id WHERE e.ref = ?1").bind(r.json.enrolment.ref).first();
  pays(pay.id, 1500);
  await webhook(env, pay.id);
  const row = await env.DB.prepare('SELECT status, review_reason FROM live_payments WHERE id = ?1').bind(pay.id).first();
  assert.equal(row.status, 'review'); assert.equal(row.review_reason, 'amount');
  assert.equal((await env.DB.prepare('SELECT status FROM live_enrolments WHERE ref = ?1').bind(r.json.enrolment.ref).first()).status, 'pending');
});

test('checkout: a coupon and the ₹100 consultation adjustment never combine', async () => {
  const env = makeEnv({ ENROL_CONSULT_CREDIT: 'course-fee' });
  const a = await admin(env);
  const b = await openBatch(env, a);
  const u = await account(env);
  await env.DB.prepare(`INSERT INTO consult_bookings (id, ref, user_id, teacher_id, date, slot_start, status, amount_paise, currency, cashfree_order_id, hold_expires_at, created_at, updated_at)
    VALUES ('cons_00000000-0000-0000-0000-000000000001', 'KWC-AAAAAAAA', ?1, 'reegan-gandhi', '2026-11-19', '15:00', 'confirmed', 10000, 'INR', 'cons_00000000-0000-0000-0000-000000000001', 0, 0, 0)`).bind(u.id).run();
  const plain = (await quote(env, u, { course_id: GROUP_A1, batch_id: b.id })).json.quote;
  assert.equal(plain.creditPaise, 10000); assert.equal(plain.dueNowPaise, 1590000);
  const withCoupon = (await quote(env, u, { course_id: GROUP_A1, batch_id: b.id, coupon: 'GROUP3000' })).json.quote;
  assert.equal(withCoupon.creditPaise, 0); assert.equal(withCoupon.dueNowPaise, 1300000);
  const r = await checkout(env, u, { course_id: GROUP_A1, batch_id: b.id, coupon: 'GROUP3000', expected_amount_paise: 1290000 });
  assert.equal(r.json.code, 'amount-changed', 'a stacked amount is refused');
});

test('checkout: adding a coupon to an open hold replaces it (old order closed), never resumes the higher amount', async () => {
  const env = makeEnv();
  const a = await admin(env);
  const b = await openBatch(env, a);
  const u = await account(env);
  const r1 = await checkout(env, u, { course_id: GROUP_A1, batch_id: b.id, expected_amount_paise: 1600000 });
  assert.equal(r1.status, 200);
  const r2 = await checkout(env, u, { course_id: GROUP_A1, batch_id: b.id, coupon: 'GROUP3000', expected_amount_paise: 1300000 });
  assert.equal(r2.status, 200, JSON.stringify(r2.json));
  assert.notEqual(r2.json.enrolment.ref, r1.json.enrolment.ref);
  assert.equal(lastCreate().order_amount, 13000);
  const old = await env.DB.prepare("SELECT p.status FROM live_payments p JOIN live_enrolments e ON e.id = p.enrolment_id WHERE e.ref = ?1").bind(r1.json.enrolment.ref).first();
  assert.equal(old.status, 'expired');
  const r3 = await checkout(env, u, { course_id: GROUP_A1, batch_id: b.id, coupon: 'GROUP3000', expected_amount_paise: 1300000 });
  assert.equal(r3.json.resumed, true, 'same amount resumes');
});

test('checkout refusals: payments off, unscheduled batch, draft course, paused teacher, inactive coupon, full batch, started batch', async () => {
  const env = makeEnv();
  const a = await admin(env);
  const b = await openBatch(env, a, { level: 'B2', format: 'individual', capacity: 1, schedule: 'With your teacher' });
  const u1 = await account(env), u2 = await account(env);
  const C = 'live-reegan-gandhi-b2-individual';
  const off = { ...env, ENROL_PAYMENTS: 'off' };
  assert.equal((await checkout(off, u1, { course_id: C, batch_id: b.id, expected_amount_paise: 2200000 })).status, 503);
  const cat = await req(off, 'GET', '/enrol/catalog');
  assert.equal(cat.json.marketplace.courses.find((c) => c.courseId === C).batches[0].state, 'payments-off');

  const ann = (await req(env, 'POST', '/live-admin/batches', { cookie: a.cookie, body: { teacher_id: 'reegan-gandhi', level: 'B2', format: 'group', status: 'announced', capacity: 8 } })).json.batch;
  assert.equal((await checkout(env, u1, { course_id: 'live-reegan-gandhi-b2-group', batch_id: ann.id, expected_amount_paise: 1600000 })).json.code, 'course-closed');
  assert.equal((await checkout(env, u1, { course_id: 'live-geetika-dhawan-a1-group', batch_id: b.id, expected_amount_paise: 1600000 })).json.code, 'course-closed');
  assert.equal((await checkout(env, u1, { course_id: C, batch_id: 'bat_' + '0'.repeat(8) + '-0000-0000-0000-' + '0'.repeat(12), expected_amount_paise: 2200000 })).json.code, 'course-closed');

  await req(env, 'POST', '/live-admin/coupons', { cookie: a.cookie, body: { code: 'PERSONAL7000', active: false } });
  assert.equal((await checkout(env, u1, { course_id: C, batch_id: b.id, coupon: 'PERSONAL7000', expected_amount_paise: 1500000 })).json.code, 'coupon-inactive');
  await req(env, 'POST', '/live-admin/coupons', { cookie: a.cookie, body: { code: 'PERSONAL7000', active: true } });

  await req(env, 'POST', '/live-admin/teachers', { cookie: a.cookie, body: { teacher_id: 'reegan-gandhi', courses_paused: true } });
  assert.equal((await checkout(env, u1, { course_id: C, batch_id: b.id, coupon: 'PERSONAL7000', expected_amount_paise: 1500000 })).json.code, 'course-closed');
  await req(env, 'POST', '/live-admin/teachers', { cookie: a.cookie, body: { teacher_id: 'reegan-gandhi', courses_paused: false } });

  assert.equal((await checkout(env, u1, { course_id: C, batch_id: b.id, coupon: 'PERSONAL7000', expected_amount_paise: 1500000 })).status, 200);
  const full = await checkout(env, u2, { course_id: C, batch_id: b.id, coupon: 'PERSONAL7000', expected_amount_paise: 1500000 });
  assert.equal(full.json.code, 'sold-out');
  const c2 = await req(env, 'GET', '/enrol/catalog');
  assert.equal(c2.json.marketplace.courses.find((c) => c.courseId === C).batches[0].state, 'full');

  at('2027-01-11 09:00');
  const late = await account(env);
  assert.equal((await checkout(env, late, { course_id: C, batch_id: b.id, expected_amount_paise: 2200000 })).json.code, 'course-closed');
});

test('enrolment admin: cancel requests a refund, refunded marks the payment; learner lists show marketplace details', async () => {
  const env = makeEnv();
  const a = await admin(env);
  const b = await openBatch(env, a);
  const u = await account(env);
  const r = await checkout(env, u, { course_id: GROUP_A1, batch_id: b.id, coupon: 'GROUP3000', expected_amount_paise: 1300000 });
  const pay = await env.DB.prepare("SELECT p.id FROM live_payments p JOIN live_enrolments e ON e.id = p.enrolment_id WHERE e.ref = ?1").bind(r.json.enrolment.ref).first();
  pays(pay.id); await webhook(env, pay.id);
  const list = await req(env, 'GET', '/enrol/enrolments', { cookie: u.cookie });
  assert.equal(list.json.enrolments[0].teacherId, 'reegan-gandhi'); assert.equal(list.json.enrolments[0].level, 'A1'); assert.equal(list.json.enrolments[0].format, 'group');
  const ref = r.json.enrolment.ref;
  assert.equal((await req(env, 'POST', `/live-admin/enrolments/${ref}`, { cookie: a.cookie, body: { action: 'refunded' } })).status, 409, 'cancel first');
  assert.equal((await req(env, 'POST', `/live-admin/enrolments/${ref}`, { cookie: a.cookie, body: { action: 'cancel' } })).status, 200);
  assert.equal((await req(env, 'POST', `/live-admin/enrolments/${ref}`, { cookie: a.cookie, body: { action: 'refunded' } })).status, 200);
  const p = await env.DB.prepare('SELECT status FROM live_payments WHERE id = ?1').bind(pay.id).first();
  assert.equal(p.status, 'refunded');
  const ov = await req(env, 'GET', '/live-admin/overview', { cookie: a.cookie });
  assert.equal(ov.json.enrolments[0].refund_status, 'refunded');
  assert.ok(ov.json.audit.length >= 3);
});

test('legacy live-a1 path is unchanged and refuses coupons', async () => {
  const env = makeEnv({ ENROL_COURSES: JSON.stringify({ 'live-a1': { batch: '2027-01-04' } }) });
  const u = await account(env);
  const q = await quote(env, u, { course_id: 'live-a1' });
  assert.equal(q.json.quote.dueNowPaise, 799900);
  assert.equal((await quote(env, u, { course_id: 'live-a1', coupon: 'GROUP3000' })).json.code, 'coupon-invalid');
});

test('separation: marketplace modules never reach self-paced entitlements, send no messages, and never put a join link in code', () => {
  for (const f of ['live-catalog.js', 'live-demos.js', 'live-admin.js']) {
    const src = fs.readFileSync(path.join(WORKER_DIR, 'src', f), 'utf8');
    const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
    assert.equal(/grantProduct|entitlements\.js|products\.js|user_entitlements|\bFROM orders\b|INTO orders/.test(code), false, f);
    assert.equal(/mailchannels|sendgrid|resend|smtp|send_?email|sendMail|whatsapp|\bsms\b/i.test(code), false, f);
    assert.equal(/meet\.google\.com\/[a-z]{3}-/.test(src), false, f);
  }
  const cat = fs.readFileSync(path.join(WORKER_DIR, 'src', 'live-catalog.js'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
  assert.equal(/\bimport\b/.test(cat), false, 'live-catalog.js is pure data and functions');
});
