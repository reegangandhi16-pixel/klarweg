/* Same-day ₹100 consultation booking — node --test
   Drives the real Worker against the in-memory D1 (schema + every
   migration), with Cashfree mocked at fetch() like access.test.mjs.
   The clock is pinned per test (Date.now) to a chosen Asia/Kolkata time. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { createD1 } from './d1-sqlite.mjs';
import {
  SLOTS, DURATION_MINUTES, FEE_PAISE, ELIGIBLE_TEACHERS, BOOKING_REF_RE,
  istClock, istEpoch, bookingOpen, closedMessage, consultMode, bookableTeachers, HOLD_SECONDS
} from '../src/consultations.js';

const WORKER_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://reegangandhi16-pixel.github.io';
const API = 'https://klarweg-access.example.workers.dev';
const SECRET = 'cfsk_test_secret_value';

/* ---------------- clock ---------------- */
const REAL_NOW = Date.now;
/* 'YYYY-MM-DD HH:MM' in IST → ms */
const ist = (s) => Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +s.slice(8, 10), +s.slice(11, 13), +s.slice(14, 16)) - 330 * 60000;
let fakeNow = null;
Date.now = () => (fakeNow == null ? REAL_NOW() : fakeNow);
const at = (s) => { fakeNow = ist(s); };
const advance = (sec) => { fakeNow += sec * 1000; };
const DAY = '2026-10-21';

/* ---------------- Cashfree + network mock ---------------- */
const cashfree = { orders: new Map(), calls: [], failCreate: false };
const offHost = [];
globalThis.fetch = async (input, init = {}) => {
  const url = typeof input === 'string' ? input : input.url;
  const method = (init.method || 'GET').toUpperCase();
  const m = url.match(/^https:\/\/(sandbox|api)\.cashfree\.com\/pg\/orders(?:\/([^/]+))?$/);
  if (!m) { offHost.push(url); throw new Error('Unexpected network call in test: ' + url); }
  const host = m[1] === 'sandbox' ? 'sandbox' : 'production';
  cashfree.calls.push({ host, method, body: init.body ? JSON.parse(init.body) : null });
  if (method === 'POST' && !m[2]) {
    if (cashfree.failCreate) return new Response('<html>gateway down</html>', { status: 502 });
    const b = JSON.parse(init.body);
    cashfree.orders.set(b.order_id, { order_id: b.order_id, order_amount: b.order_amount, order_currency: 'INR', order_status: 'ACTIVE' });
    return Response.json({ order_id: b.order_id, order_amount: b.order_amount, order_currency: 'INR', payment_session_id: 'session_' + b.order_id, order_status: 'ACTIVE' });
  }
  const o = cashfree.orders.get(decodeURIComponent(m[2]));
  if (!o) return Response.json({ message: 'order not found' }, { status: 404 });
  return Response.json({ ...o });
};

/* ---------------- harness ---------------- */
function makeEnv(overrides = {}) {
  return {
    DB: createD1(WORKER_DIR),
    CASHFREE_ENV: 'sandbox',
    CASHFREE_APP_ID: 'TEST1234567890',
    CASHFREE_SECRET_KEY: SECRET,
    GOOGLE_CLIENT_ID: 'test-client.apps.googleusercontent.com',
    RATE_SALT: 'test-salt',
    CONSULT_BOOKING: 'sandbox',
    CONSULT_TEACHERS: 'reegan-gandhi,candidate-01',
    ...overrides,
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
  return { status: res.status, json, headers: res.headers };
}
async function user(env, { phone = true } = {}) {
  const r = await req(env, 'POST', '/auth/signup', { body: { email: `u${Math.random().toString(36).slice(2)}@example.com`, password: 'correct-horse-9', name: 'Test' } });
  assert.equal(r.status, 201, JSON.stringify(r.json));
  const cookie = r.headers.get('set-cookie').split(';')[0];
  const res = r;
  if (phone) assert.equal((await req(env, 'POST', '/auth/phone', { cookie, body: { phone: '9876543210' } })).status, 200);
  return { cookie, id: res.json.user.id };
}
async function confirmDay(env, teacherId, date = DAY) {
  await env.DB.prepare("INSERT INTO consult_availability (teacher_id, date, confirmed_by, confirmed_at) VALUES (?1, ?2, 'owner', 0)").bind(teacherId, date).run();
}
const book = (env, cookie, body) => req(env, 'POST', '/consult/bookings', { cookie, body });
const view = (env, cookie, ref) => req(env, 'GET', '/consult/bookings/' + ref, { cookie });
const row = (env, ref) => env.DB.prepare('SELECT * FROM consult_bookings WHERE ref = ?1').bind(ref).first();
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
const success = (orderId, pay = 'pay_' + orderId.slice(-6)) => ({ type: 'PAYMENT_SUCCESS_WEBHOOK', data: { order: { order_id: orderId }, payment: { cf_payment_id: pay, payment_status: 'SUCCESS' } } });
const orderIdOf = async (env, ref) => (await row(env, ref)).cashfree_order_id;
async function noCourseAccess(env, u) {
  assert.equal((await env.DB.prepare('SELECT COUNT(*) AS n FROM user_entitlements WHERE user_id = ?1').bind(u.id).first()).n, 0, 'no self-paced entitlement');
  assert.equal((await env.DB.prepare('SELECT COUNT(*) AS n FROM orders WHERE user_id = ?1').bind(u.id).first()).n, 0, 'no self-paced order');
  const me = await req(env, 'GET', '/auth/me', { cookie: u.cookie });
  assert.ok(Object.values(me.json.entitlements || {}).every((v) => v === false), JSON.stringify(me.json.entitlements));
  assert.notEqual(me.json.hasFullAccess, true);
}

test.beforeEach(() => { at(`${DAY} 10:00`); cashfree.failCreate = false; });
test.after(() => { Date.now = REAL_NOW; });

/* ================= time rules (pure) ================= */
test('slots: the 15:00–16:00 IST window cut into non-overlapping 20-minute slots', () => {
  assert.equal(DURATION_MINUTES, 20);
  assert.deepEqual([...SLOTS], ['15:00', '15:20', '15:40']);
  const mins = SLOTS.map((s) => +s.slice(0, 2) * 60 + +s.slice(3));
  for (let i = 1; i < mins.length; i++) assert.ok(mins[i] - mins[i - 1] >= DURATION_MINUTES, 'no overlap');
  assert.ok(mins[0] >= 15 * 60 && mins.at(-1) + DURATION_MINUTES <= 16 * 60, 'inside the window');
});

test('clock: Asia/Kolkata date and time come from the server clock (UTC+05:30)', () => {
  // 2026-10-20 23:00 UTC is already 21 October 04:30 in India
  const c = istClock(Date.UTC(2026, 9, 20, 23, 0));
  assert.equal(c.date, '2026-10-21');
  assert.equal(c.minutes, 4 * 60 + 30);
  assert.equal(istEpoch('2026-10-21', '15:00') * 1000, Date.UTC(2026, 9, 21, 9, 30));
});

test('booking window: 09:00 ≤ IST time < 12:00 only', () => {
  const open = (s) => bookingOpen(istClock(ist(`${DAY} ${s}`)));
  assert.equal(open('08:59'), false);
  assert.equal(open('09:00'), true);
  assert.equal(open('11:59'), true);
  assert.equal(open('12:00'), false);
  assert.equal(open('15:10'), false);
  assert.match(closedMessage(istClock(ist(`${DAY} 08:00`))), /^Same-day booking is closed\. It opens today at 09:00 IST\./);
  assert.match(closedMessage(istClock(ist(`${DAY} 12:00`))), /^Same-day booking is closed for today\./);
});

/* ================= configuration ================= */
test('switch: off by default; sandbox only with sandbox Cashfree; live only with production', () => {
  const base = { CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1', CASHFREE_SECRET_KEY: 'x' };
  const prod = { CASHFREE_ENV: 'production', CASHFREE_APP_ID: 'LIVE1', CASHFREE_SECRET_KEY: 'x' };
  assert.equal(consultMode(base).enabled, false);
  assert.equal(consultMode({ ...base, CONSULT_BOOKING: 'sandbox' }).enabled, true);
  assert.equal(consultMode({ ...base, CONSULT_BOOKING: 'live' }).enabled, false, 'never live money through sandbox');
  assert.equal(consultMode({ ...prod, CONSULT_BOOKING: 'sandbox' }).enabled, false);
  assert.equal(consultMode({ ...prod, CONSULT_BOOKING: 'live' }).enabled, true);
  assert.equal(consultMode({ ...base, CONSULT_BOOKING: 'yes' }).enabled, false);
  assert.equal(consultMode({ ...base, CASHFREE_APP_ID: 'LIVE1', CONSULT_BOOKING: 'sandbox' }).enabled, false, 'incoherent Cashfree config');
  assert.equal(consultMode({ CONSULT_BOOKING: 'sandbox' }).enabled, false, 'no credentials');
});

test('the committed wrangler.toml keeps consultation booking off, with no bookable teacher', () => {
  const toml = fs.readFileSync(path.join(WORKER_DIR, 'wrangler.toml'), 'utf8');
  assert.match(toml, /^CONSULT_BOOKING = "off"$/m);
  assert.match(toml, /^CONSULT_TEACHERS = ""$/m);
  assert.match(toml, /^CASHFREE_ENV = "sandbox"$/m);
});

test('bookable teachers: only the owner and candidate-01, and only when configured', () => {
  assert.deepEqual([...ELIGIBLE_TEACHERS], ['reegan-gandhi', 'candidate-01']);
  assert.deepEqual(bookableTeachers({}), []);
  assert.deepEqual(bookableTeachers({ CONSULT_TEACHERS: 'reegan-gandhi' }), ['reegan-gandhi']);
  assert.deepEqual(bookableTeachers({ CONSULT_TEACHERS: 'candidate-02, teacher-1, reegan-gandhi ,candidate-01,someone' }), ['reegan-gandhi', 'candidate-01']);
});

/* ================= availability ================= */
test('availability: disabled service reports nothing bookable and calls no gateway', async () => {
  const env = makeEnv({ CONSULT_BOOKING: 'off' });
  await confirmDay(env, 'reegan-gandhi');
  const n = cashfree.calls.length;
  const a = await req(env, 'GET', '/consult/availability');
  assert.equal(a.status, 200);
  assert.equal(a.json.enabled, false);
  assert.deepEqual(a.json.teachers, []);
  assert.equal(cashfree.calls.length, n);
});

test('availability: only confirmed dates of configured eligible teachers; candidate-02 never', async () => {
  const env = makeEnv({ CONSULT_TEACHERS: 'reegan-gandhi,candidate-01,candidate-02' });
  let a = (await req(env, 'GET', '/consult/availability')).json;
  assert.equal(a.bookingOpen, true);
  assert.deepEqual(a.teachers.map((t) => [t.teacherId, t.availableToday]), [['reegan-gandhi', false], ['candidate-01', false]], 'no confirmed availability → nobody bookable');
  await confirmDay(env, 'reegan-gandhi');
  await confirmDay(env, 'candidate-01', '2026-10-22'); // another day does not count
  await confirmDay(env, 'candidate-02');                // not eligible, whatever the table says
  a = (await req(env, 'GET', '/consult/availability')).json;
  assert.equal(a.date, DAY);
  assert.equal(a.timezone, 'Asia/Kolkata');
  assert.deepEqual(a.fee, { amountPaise: 10000, currency: 'INR' });
  assert.equal(a.testMode, true);
  assert.deepEqual(a.teachers, [
    { teacherId: 'reegan-gandhi', availableToday: true, slots: [{ start: '15:00', end: '15:20' }, { start: '15:20', end: '15:40' }, { start: '15:40', end: '16:00' }] },
    { teacherId: 'candidate-01', availableToday: false, slots: [] }
  ]);
});

test('availability: outside 09:00–12:00 IST same-day booking is closed, with a clear message', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  for (const t of ['08:59', '12:00', '15:05', '23:30']) {
    at(`${DAY} ${t}`);
    const a = (await req(env, 'GET', '/consult/availability')).json;
    assert.equal(a.bookingOpen, false, t);
    assert.match(a.message, /Same-day booking is closed/, t);
    assert.ok(a.teachers.every((x) => !x.availableToday && x.slots.length === 0), t);
  }
});

/* ================= booking ================= */
test('book: sign-in, enabled service, open window, bookable teacher, valid future slot and a phone are all required', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  assert.equal((await book(env, null, { teacher_id: 'reegan-gandhi', slot: '15:00' })).status, 401);
  const u = await user(env);
  const off = makeEnv({ CONSULT_BOOKING: 'off', DB: env.DB });
  assert.equal((await book(off, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' })).status, 503);
  assert.equal((await book(env, u.cookie, { teacher_id: 'candidate-01', slot: '15:00' })).json.code, 'teacher-unavailable', 'eligible but no confirmed day');
  assert.equal((await book(env, u.cookie, { teacher_id: 'candidate-02', slot: '15:00' })).json.code, 'teacher-unavailable');
  assert.equal((await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:10' })).json.code, 'slot-unavailable', 'not a slot boundary');
  assert.equal((await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '16:00' })).json.code, 'slot-unavailable', 'outside the window');
  assert.equal((await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00', date: '2026-10-22' })).status, 400, 'same day only');
  at(`${DAY} 12:00`);
  const closed = await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' });
  assert.equal(closed.status, 409);
  assert.equal(closed.json.code, 'booking-closed');
  at(`${DAY} 10:00`);
  const nophone = await user(env, { phone: false });
  assert.equal((await book(env, nophone.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' })).json.code, 'phone-required');
  assert.equal((await env.DB.prepare('SELECT COUNT(*) AS n FROM consult_bookings').first()).n, 0, 'no hold from any refused request');
});

test('book: the server fixes ₹100 — a tampered amount in the request is ignored', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  const u = await user(env);
  const r = await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:20', amount: 1, amount_paise: 100, order_amount: 1 });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.match(r.json.booking.ref, BOOKING_REF_RE);
  assert.equal(r.json.booking.status, 'pending');
  assert.equal(r.json.booking.amountPaise, FEE_PAISE);
  assert.equal(r.json.paymentSessionId, 'session_' + (await orderIdOf(env, r.json.booking.ref)));
  const call = cashfree.calls.at(-1);
  assert.equal(call.host, 'sandbox');
  assert.equal(call.body.order_amount, 100);
  assert.match(call.body.order_id, /^cons_/);
  assert.match(call.body.order_meta.return_url, /\/live-classes\.html\?consult_ref=KWC-/);
  assert.ok(Date.parse(call.body.order_expiry_time) / 1000 < (await row(env, r.json.booking.ref)).hold_expires_at, 'the gateway order expires before the hold');
  assert.equal((await row(env, r.json.booking.ref)).amount_paise, 10000);
  await noCourseAccess(env, u);
});

test('book: the database refuses any amount other than ₹100 for a consultation', async () => {
  const env = makeEnv();
  await assert.rejects(env.DB.prepare(
    "INSERT INTO consult_bookings (id, ref, user_id, teacher_id, date, slot_start, status, amount_paise, cashfree_order_id, hold_expires_at, created_at, updated_at) VALUES ('cons_x','KWC-AAAAAAAA','u','reegan-gandhi','2026-10-21','15:00','pending',100,'cons_x',0,0,0)"
  ).run(), /CHECK constraint failed/);
});

test('double booking: a held slot is not offered and cannot be taken by someone else', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  const a = await user(env), b = await user(env);
  assert.equal((await book(env, a.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' })).status, 200);
  const taken = await book(env, b.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' });
  assert.equal(taken.status, 409);
  assert.equal(taken.json.code, 'slot-taken');
  const av = (await req(env, 'GET', '/consult/availability')).json.teachers[0].slots.map((s) => s.start);
  assert.deepEqual(av, ['15:20', '15:40']);
});

test('race: simultaneous requests for one slot — exactly one hold wins', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  const users = await Promise.all([user(env), user(env), user(env), user(env)]);
  const results = await Promise.all(users.map((u) => book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:40' })));
  assert.deepEqual(results.map((r) => r.status).sort(), [200, 409, 409, 409]);
  assert.equal((await env.DB.prepare("SELECT COUNT(*) AS n FROM consult_bookings WHERE slot_start = '15:40' AND status IN ('pending','confirmed')").first()).n, 1);
});

test('one pending hold per learner: retrying the same slot resumes it; another slot releases it', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  const u = await user(env);
  const first = await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' });
  const again = await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' });
  assert.equal(again.json.resumed, true);
  assert.equal(again.json.booking.ref, first.json.booking.ref);
  const other = await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:20' });
  assert.notEqual(other.json.booking.ref, first.json.booking.ref);
  assert.equal((await row(env, first.json.booking.ref)).status, 'released');
  assert.deepEqual((await req(env, 'GET', '/consult/availability')).json.teachers[0].slots.map((s) => s.start), ['15:00', '15:40']);
});

test('attempts are capped per learner per day', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  const u = await user(env);
  const slots = ['15:00', '15:20', '15:40', '15:00', '15:20', '15:40'];
  for (const s of slots) assert.equal((await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: s })).status, 200, s);
  assert.equal((await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' })).status, 429);
});

test('gateway failure: no booking, the hold is released at once', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  const u = await user(env);
  cashfree.failCreate = true;
  const r = await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' });
  assert.equal(r.status, 502);
  assert.equal((await env.DB.prepare('SELECT status FROM consult_bookings').first()).status, 'failed');
  cashfree.failCreate = false;
  assert.equal((await req(env, 'GET', '/consult/availability')).json.teachers[0].slots[0].start, '15:00');
});

/* ================= payment verification ================= */
test('verified payment → confirmed, reference shown; the return redirect alone confirms nothing', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  const u = await user(env);
  const { booking } = (await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' })).json;
  // learner lands back on ?consult_ref=… before paying: still pending
  assert.equal((await view(env, u.cookie, booking.ref)).json.booking.status, 'pending');
  gatewayPays(await orderIdOf(env, booking.ref));
  const wh = await webhook(env, success(await orderIdOf(env, booking.ref)));
  assert.equal(wh.status, 200, JSON.stringify(wh.json));
  const v = (await view(env, u.cookie, booking.ref)).json.booking;
  assert.equal(v.status, 'confirmed');
  assert.equal(v.ref, booking.ref);
  assert.deepEqual([v.date, v.slotStart, v.slotEnd, v.timezone], [DAY, '15:00', '15:20', 'Asia/Kolkata']);
  const list = (await req(env, 'GET', '/consult/bookings', { cookie: u.cookie })).json.bookings.map((b) => b.ref);
  assert.deepEqual(list, [booking.ref], 'the learner can see the reference again later');
  await noCourseAccess(env, u);
});

test('duplicate webhooks: confirmed once, one payment recorded, no course access', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  const u = await user(env);
  const { booking } = (await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:20' })).json;
  const oid = await orderIdOf(env, booking.ref);
  gatewayPays(oid);
  const replies = [];
  for (let i = 0; i < 3; i++) replies.push(await webhook(env, success(oid)));
  assert.deepEqual(replies.map((r) => r.status), [200, 200, 200]);
  assert.equal(replies.filter((r) => r.json.duplicate).length, 2);
  const r = await row(env, booking.ref);
  assert.equal(r.status, 'confirmed');
  assert.equal(r.payment_id, 'pay_' + oid.slice(-6));
  await noCourseAccess(env, u);
});

test('webhook before the gateway reads PAID → 503 retry, booking stays pending', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  const u = await user(env);
  const { booking } = (await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' })).json;
  const r = await webhook(env, success(await orderIdOf(env, booking.ref)));
  assert.equal(r.status, 503);
  assert.equal((await row(env, booking.ref)).status, 'pending');
});

test('forged or stale webhooks change nothing', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  const u = await user(env);
  const { booking } = (await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' })).json;
  const oid = await orderIdOf(env, booking.ref);
  gatewayPays(oid);
  assert.equal((await webhook(env, success(oid), { secret: 'wrong' })).status, 401);
  assert.equal((await webhook(env, success(oid), { ts: Math.floor(Date.now() / 1000) - 3600 })).status, 401);
  assert.equal((await row(env, booking.ref)).status, 'pending');
});

test('wrong amount at the gateway → review, never confirmed; the slot is freed for others', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  const u = await user(env);
  const { booking } = (await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' })).json;
  const oid = await orderIdOf(env, booking.ref);
  gatewayPays(oid, 1);
  const r = await webhook(env, success(oid));
  assert.equal(r.status, 400);
  const saved = await row(env, booking.ref);
  assert.equal(saved.status, 'review');
  assert.equal(saved.review_reason, 'amount');
  assert.equal((await view(env, u.cookie, booking.ref)).json.booking.status, 'review');
  const other = await user(env);
  assert.equal((await book(env, other.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' })).status, 200);
});

test('failed payment: ignored; the learner can retry; an expired gateway order releases the slot', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  const u = await user(env);
  const { booking } = (await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' })).json;
  const oid = await orderIdOf(env, booking.ref);
  const failed = await webhook(env, { type: 'PAYMENT_FAILED_WEBHOOK', data: { order: { order_id: oid }, payment: { payment_status: 'FAILED' } } });
  assert.equal(failed.json.ignored, true);
  assert.equal((await row(env, booking.ref)).status, 'pending');
  cashfree.orders.get(oid).order_status = 'EXPIRED';
  assert.equal((await view(env, u.cookie, booking.ref)).json.booking.status, 'expired');
  assert.equal((await req(env, 'GET', '/consult/availability')).json.teachers[0].slots[0].start, '15:00');
});

test('lost webhook: the learner\'s status check reconciles a verified payment', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  const u = await user(env);
  const { booking } = (await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:40' })).json;
  const oid = await orderIdOf(env, booking.ref);
  gatewayPays(oid);
  assert.equal((await view(env, u.cookie, booking.ref)).json.booking.status, 'confirmed');
  assert.equal((await webhook(env, success(oid))).json.duplicate, true);
  await noCourseAccess(env, u);
});

test('pending expiry: an unpaid hold lapses after 20 minutes and the slot returns', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  const u = await user(env);
  const { booking } = (await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' })).json;
  advance(HOLD_SECONDS - 60);
  assert.ok(!(await req(env, 'GET', '/consult/availability')).json.teachers[0].slots.some((s) => s.start === '15:00'), 'still held');
  advance(120);
  assert.ok((await req(env, 'GET', '/consult/availability')).json.teachers[0].slots.some((s) => s.start === '15:00'), 'released');
  assert.equal((await row(env, booking.ref)).status, 'expired');
});

test('recovery: a late payment confirms if the slot is still free, else goes to review (never two bookings)', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  const a = await user(env), b = await user(env), c = await user(env);
  const ra = (await book(env, a.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' })).json.booking;
  const rc = (await book(env, c.cookie, { teacher_id: 'reegan-gandhi', slot: '15:20' })).json.booking;
  advance(HOLD_SECONDS + 60);
  await req(env, 'GET', '/consult/availability'); // sweep: both holds lapse
  // b takes a's slot; then a's late payment lands
  assert.equal((await book(env, b.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' })).status, 200);
  const oa = await orderIdOf(env, ra.ref);
  gatewayPays(oa);
  const late = await webhook(env, success(oa));
  assert.equal(late.status, 200, 'acknowledged, so Cashfree stops retrying');
  assert.equal((await row(env, ra.ref)).status, 'review');
  assert.equal((await row(env, ra.ref)).review_reason, 'late-payment-slot-taken');
  // c's slot is still free: the late payment re-takes it
  const oc = await orderIdOf(env, rc.ref);
  gatewayPays(oc);
  assert.equal((await webhook(env, success(oc))).status, 200);
  assert.equal((await row(env, rc.ref)).status, 'confirmed');
  assert.equal((await env.DB.prepare("SELECT COUNT(*) AS n FROM consult_bookings WHERE slot_start = '15:00' AND status IN ('pending','confirmed')").first()).n, 1);
});

test('a booking is private: another learner cannot read or reconcile it', async () => {
  const env = makeEnv();
  await confirmDay(env, 'reegan-gandhi');
  const a = await user(env), b = await user(env);
  const { booking } = (await book(env, a.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' })).json;
  assert.equal((await view(env, b.cookie, booking.ref)).status, 404);
  assert.equal((await view(env, null, booking.ref)).status, 401);
  assert.deepEqual((await req(env, 'GET', '/consult/bookings', { cookie: b.cookie })).json.bookings, []);
});

test('production Cashfree with CONSULT_BOOKING=sandbox: refused before any gateway call', async () => {
  const env = makeEnv({ CASHFREE_ENV: 'production', CASHFREE_APP_ID: 'LIVE987654321', CASHFREE_SECRET_KEY: 'cfsk_ma_prod_x' });
  await confirmDay(env, 'reegan-gandhi');
  const u = await user(env);
  const n = cashfree.calls.length;
  assert.equal((await req(env, 'GET', '/consult/availability')).json.enabled, false);
  assert.equal((await book(env, u.cookie, { teacher_id: 'reegan-gandhi', slot: '15:00' })).status, 503);
  assert.equal(cashfree.calls.length, n);
});

/* ================= separation and no messages ================= */
test('separation: the consultation module never reaches the self-paced entitlement code, and sends no email', () => {
  const src = fs.readFileSync(path.join(WORKER_DIR, 'src', 'consultations.js'), 'utf8');
  const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
  assert.equal(/grantProduct|entitlements\.js|products\.js|user_entitlements|\bFROM orders\b|INTO orders/.test(code), false);
  assert.equal(/mailchannels|sendgrid|resend|smtp|send_?email|sendMail|\bMAIL\b|whatsapp|sms/i.test(code), false);
  const imports = [...code.matchAll(/from\s+["'](\.[^"']+)["']/g)].map((m) => m[1]).sort();
  assert.deepEqual(imports, ['./auth.js', './cashfree-config.js', './sessions.js']);
  const wh = fs.readFileSync(path.join(WORKER_DIR, 'src', 'webhooks-cashfree.js'), 'utf8');
  assert.ok(wh.indexOf('isConsultOrderId(claimedOrderId)') < wh.indexOf('await grantProduct('), 'consultation orders branch off before the grant');
});

test('no network call other than Cashfree was made by any booking path', () => {
  assert.deepEqual(offHost, []);
  assert.ok(cashfree.calls.every((c) => c.host === 'sandbox'));
});

test('an "ord_" self-paced order id never reaches the consultation table, and a "cons_" id never grants', async () => {
  const env = makeEnv();
  const r = await webhook(env, success('cons_00000000-0000-0000-0000-000000000000'));
  assert.equal(r.json.reason, 'unknown-order');
  assert.equal((await env.DB.prepare('SELECT COUNT(*) AS n FROM user_entitlements').first()).n, 0);
});
