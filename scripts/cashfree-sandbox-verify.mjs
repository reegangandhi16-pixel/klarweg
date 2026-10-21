/* ============================================================
   CASHFREE SANDBOX VERIFICATION — ₹100 consultation + full-payment A1
   ------------------------------------------------------------
   Drives the isolated payment-sandbox Worker
   (access/worker/wrangler.payments-sandbox.toml) through every flow and
   checks each result three ways: the Worker's answer, the Worker's own
   database, and Cashfree's sandbox API read independently.

   Two modes, the SAME checks:

   REAL (the proof). Talks to Cashfree's SANDBOX and the deployed
   klarweg-access-payments-nonprod Worker. Test money only; nothing here can
   reach production. Needs, in the environment only (never in a file,
   argument or log):
       SANDBOX_WORKER_URL            https://klarweg-access-payments-nonprod.<sub>.workers.dev
       CASHFREE_SANDBOX_APP_ID       the sandbox app id (starts with TEST)
       CASHFREE_SANDBOX_SECRET_KEY   the matching sandbox secret key
   and a logged-in wrangler (the database is read through
   `wrangler d1 execute --config wrangler.payments-sandbox.toml`).
   Same-day consultations can only be booked 09:00–12:00 IST.
       node scripts/cashfree-sandbox-verify.mjs
       node scripts/cashfree-sandbox-verify.mjs --check-expired   (≥ 31 min later: the seat hold is 30 min)

   REHEARSAL (not a proof). --rehearse runs the real Worker code in this
   process against an in-memory D1 and a local emulation of Cashfree's
   sandbox (orders, payments, the test-UPI "Order Pay" call, signed
   webhooks). It proves the script and the Worker flows agree; it proves
   NOTHING about Cashfree itself, and its report says so.
       node scripts/cashfree-sandbox-verify.mjs --rehearse

   Never prints, stores or sends a secret anywhere but Cashfree's sandbox
   API. The report (--out=<file>, JSON) holds references and results only.
   ============================================================ */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WORKER_DIR = path.join(ROOT, 'access', 'worker');
const REHEARSE = process.argv.includes('--rehearse');
const CHECK_EXPIRED = process.argv.includes('--check-expired');
const OUT = (process.argv.find((a) => a.startsWith('--out=')) || '').slice(6) || path.join(os.tmpdir(), `kw-cashfree-sandbox-${REHEARSE ? 'rehearsal' : 'real'}.json`);
const STATE = path.join(os.tmpdir(), 'kw-cashfree-sandbox-pending.json');
const CF_BASE = 'https://sandbox.cashfree.com/pg';
const CF_VERSION = '2023-08-01';
const ORIGIN = 'http://localhost:8789';
const WORKER_URL_RE = /^https:\/\/klarweg-access-payments-nonprod\.[a-z0-9-]+\.workers\.dev$/;
const REF = /^KW[CE]-[2-9A-HJ-NP-Z]{8}$/;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------------- report ---------------- */
const results = [];
const secrets = [];
const scrub = (v) => { let s = typeof v === 'string' ? v : JSON.stringify(v); for (const x of secrets) if (x) s = s.split(x).join('[redacted]'); return s; };
function record(status, name, detail) {
  results.push({ status, name, detail: detail === undefined ? undefined : scrub(detail).slice(0, 400) });
  console.log(`${status.padEnd(6)} ${name}${status === 'FAIL' && detail !== undefined ? '  ' + scrub(detail).slice(0, 300) : ''}`);
}
const ok = (name, cond, detail) => { record(cond ? 'PASS' : 'FAIL', name, cond ? undefined : detail); return !!cond; };
const manual = (name, how) => record('MANUAL', name, how);

/* ---------------- the environment: real or rehearsal ---------------- */
let ops;
if (REHEARSE) ops = await rehearsalOps();
else ops = realOps();

async function signedWebhook(payload, { secret = ops.secret, ts = Math.floor(Date.now() / 1000) } = {}) {
  const raw = JSON.stringify(payload);
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = Buffer.from(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(String(ts) + raw))).toString('base64');
  return ops.api('POST', '/webhooks/cashfree', { raw, headers: { 'x-webhook-timestamp': String(ts), 'x-webhook-signature': sig } });
}
const successPayload = (orderId, amount, paymentId) => ({ type: 'PAYMENT_SUCCESS_WEBHOOK', data: { order: { order_id: orderId, order_amount: amount, order_currency: 'INR' }, payment: { cf_payment_id: paymentId, payment_status: 'SUCCESS', payment_amount: amount } } });

async function learner(tag) {
  const email = `sandbox-${tag}-${Date.now().toString(36)}@example.test`;
  const pw = 'Sandbox-' + crypto.randomUUID();
  const s = await ops.api('POST', '/auth/signup', { body: { email, password: pw, name: 'Sandbox ' + tag } });
  let cookie = s.cookie;
  if (!cookie) cookie = (await ops.api('POST', '/auth/login', { body: { email, password: pw } })).cookie;
  const p = await ops.api('POST', '/auth/phone', { cookie, body: { phone: '9999999999' } });
  const me = await ops.api('GET', '/auth/me', { cookie });
  const id = me.json && me.json.user && me.json.user.id;
  if (!(s.status === 201 && cookie && p.status === 200 && id)) throw new Error(`sandbox learner ${tag} could not be created (${s.status}/${p.status})`);
  return { cookie, id };
}
const one = async (sql) => (await ops.sql(sql))[0] || null;
async function waitFor(fn, ms = 120000, every = 3000) {
  const end = Date.now() + ms;
  for (;;) { const v = await fn(); if (v) return v; if (Date.now() > end) return null; await ops.wait(every); }
}

/* ================= the checks ================= */
async function verify() {
  console.log(REHEARSE ? '\nREHEARSAL — local Worker + local Cashfree emulation. NOT a real sandbox transaction.\n' : '\nREAL CASHFREE SANDBOX — test money only.\n');

  /* 0. the Worker is the sandbox one, in sandbox mode */
  const avail = await ops.api('GET', '/consult/availability');
  const cat = await ops.api('GET', '/enrol/catalog');
  ok('preflight: consultation booking is on in TEST mode', avail.status === 200 && avail.json.testMode === true && avail.json.enabled !== false, avail.json);
  const a1 = cat.json && (cat.json.courses || []).find((c) => c.id === 'live-a1');
  ok('preflight: enrolment sells only live-a1, at ₹7,999 in full, in TEST mode', cat.status === 200 && cat.json.testMode === true && a1 && a1.feePaise === 799900 && cat.json.courses.length === 1, cat.json);

  /* fixture: today's availability for the owner's profile, in the SANDBOX database only */
  const today = ops.istDate();
  await ops.sql(`INSERT OR IGNORE INTO consult_availability (teacher_id, date, confirmed_by, confirmed_at) VALUES ('reegan-gandhi', '${today}', 'sandbox-verification-fixture', ${Math.floor(Date.now() / 1000)})`);
  const slots = ((await ops.api('GET', '/consult/availability')).json.teachers || []).find((t) => t.teacherId === 'reegan-gandhi');
  const free = slots ? (slots.slots || []).filter((s) => s.available !== false).map((s) => s.start || s) : [];
  if (!ok('preflight: at least two same-day slots are bookable now (09:00–12:00 IST)', free.length >= 2, slots)) return;

  const A = await learner('a'), B = await learner('b');

  /* ---------- ₹100 consultation: success ---------- */
  const bk = await ops.api('POST', '/consult/bookings', { cookie: A.cookie, body: { teacher_id: 'reegan-gandhi', slot: free[0], amount: 1 } });
  const ref = bk.json && bk.json.booking && bk.json.booking.ref;
  ok('consult: the Worker creates a booking hold and a Cashfree session (the browser amount is ignored)', bk.status === 200 && REF.test(ref || '') && bk.json.paymentSessionId && bk.json.checkout.mode === 'sandbox', bk.json);
  if (!REF.test(ref || '')) return;
  const row = await one(`SELECT cashfree_order_id, status, amount_paise FROM consult_bookings WHERE ref = '${ref}'`);
  const order = await ops.cfOrder(row.cashfree_order_id);
  ok('consult: Cashfree holds a server-side order for exactly ₹100.00 INR', Number(order.order_amount) === 100 && order.order_currency === 'INR' && row.amount_paise === 10000, order);
  ok('consult: before payment the slot is only held (pending), and no joining link is given', row.status === 'pending' && (await ops.api('GET', `/consult/bookings/${ref}/join`, { cookie: A.cookie })).status === 409);

  const paid = await ops.cfPay(bk.json.paymentSessionId, 'testsuccess@gocash');
  ok('consult: sandbox checkout completed with Cashfree\'s test UPI (testsuccess@gocash)', paid.ok, paid.body);
  /* Only the webhook (or the 15-minute cron) can change the row: the status endpoint is not called first. */
  const confirmed = await waitFor(async () => (await one(`SELECT status FROM consult_bookings WHERE ref = '${ref}'`)).status === 'confirmed');
  ok('consult: Cashfree\'s signed success webhook confirmed the slot (database changed before any status call)', confirmed);
  const pays = await ops.cfPayments(row.cashfree_order_id);
  ok('consult: Cashfree\'s payments API independently shows one SUCCESS payment of ₹100', pays.filter((p) => p.payment_status === 'SUCCESS').length === 1 && Number(pays.find((p) => p.payment_status === 'SUCCESS').payment_amount) === 100, pays);
  const remote = await ops.cfOrder(row.cashfree_order_id);
  ok('consult: Cashfree\'s order API independently shows the order PAID', remote.order_status === 'PAID', remote.order_status);
  const view = await ops.api('GET', `/consult/bookings/${ref}`, { cookie: A.cookie });
  ok('consult: the learner sees the booking confirmed', view.status === 200 && view.json.booking.status === 'confirmed', view.json);

  const joinA = await ops.api('GET', `/consult/bookings/${ref}/join`, { cookie: A.cookie });
  ok('consult: the signed-in owner of the confirmed booking gets the joining details', joinA.status === 200 && joinA.json.ok === true && (joinA.json.joinUrl === null ? joinA.json.code === 'not-configured' : /^https:\/\/meet\.google\.com\//.test(joinA.json.joinUrl)), { status: joinA.status, code: joinA.json && joinA.json.code, hasLink: !!(joinA.json && joinA.json.joinUrl) });
  if (joinA.json && joinA.json.joinUrl === null) manual('consult: a real joining link is returned', 'CONSULT_JOIN_LINKS is not set on the sandbox Worker; the owner-only rule was checked, the link itself was not.');
  ok('consult: another signed-in learner cannot get it', (await ops.api('GET', `/consult/bookings/${ref}/join`, { cookie: B.cookie })).status === 404);
  ok('consult: a signed-out visitor cannot get it', (await ops.api('GET', `/consult/bookings/${ref}/join`)).status === 401);

  /* signatures, replay and duplicates, against the deployed Worker */
  const dup = await signedWebhook(successPayload(row.cashfree_order_id, 100, 'dup-check'));
  ok('webhook: a duplicate success notification is acknowledged once, nothing applied twice', dup.status === 200 && dup.json.duplicate === true, dup.json);
  const bad = await signedWebhook(successPayload(row.cashfree_order_id, 100, 'x'), { secret: 'not-the-sandbox-secret' });
  ok('webhook: a wrong signature is refused (401)', bad.status === 401, bad.json);
  const stale = await signedWebhook(successPayload(row.cashfree_order_id, 100, 'x'), { ts: Math.floor(Date.now() / 1000) - 3600 });
  ok('webhook: a stale timestamp is refused (401)', stale.status === 401, stale.json);

  /* ---------- ₹100 consultation: failure and user-dropped ---------- */
  const bk2 = await ops.api('POST', '/consult/bookings', { cookie: B.cookie, body: { teacher_id: 'reegan-gandhi', slot: free[1] } });
  const ref2 = bk2.json && bk2.json.booking && bk2.json.booking.ref;
  if (REF.test(ref2 || '')) {
    const row2 = await one(`SELECT cashfree_order_id FROM consult_bookings WHERE ref = '${ref2}'`);
    const failed = await ops.cfPay(bk2.json.paymentSessionId, 'testfailure@gocash');
    ok('consult: a failed sandbox payment is accepted by Cashfree as a failure', failed.ok || failed.failed, failed.body);
    await waitFor(async () => (await ops.cfPayments(row2.cashfree_order_id)).some((p) => p.payment_status === 'FAILED'), 60000);
    ok('consult: Cashfree independently records the payment as FAILED', (await ops.cfPayments(row2.cashfree_order_id)).some((p) => p.payment_status === 'FAILED'));
    ok('consult: after a failure the slot is NOT confirmed (still a pending hold)', (await one(`SELECT status FROM consult_bookings WHERE ref = '${ref2}'`)).status === 'pending');
    const ev = await ops.webhookEvidence('PAYMENT_FAILED_WEBHOOK');
    if (ev == null) manual('webhook: Cashfree\'s signed PAYMENT_FAILED_WEBHOOK reached the Worker and was verified', 'In `wrangler tail --config wrangler.payments-sandbox.toml`, look for "cashfree-webhook: signature verified PAYMENT_FAILED_WEBHOOK cons", and in the Cashfree sandbox dashboard → Developers → Webhooks → Logs, a 200 response.');
    else ok('webhook: Cashfree\'s signed PAYMENT_FAILED_WEBHOOK was verified and acknowledged (200, ignored)', ev, ev);
  } else ok('consult: a second learner can hold another slot', false, bk2.json);
  const evDrop = await ops.webhookEvidence('PAYMENT_USER_DROPPED_WEBHOOK', ref2 && bk2.json.paymentSessionId);
  if (evDrop == null) manual('webhook: Cashfree\'s signed PAYMENT_USER_DROPPED_WEBHOOK', 'Open the local test page (scripts/payments-sandbox-site.mjs), start a booking, close Cashfree\'s checkout without paying, then check `wrangler tail` for "signature verified PAYMENT_USER_DROPPED_WEBHOOK" and that the booking stays pending.');
  else ok('webhook: a signed user-dropped event is verified and acknowledged; the booking stays pending', evDrop, evDrop);

  /* ---------- A1: full payment with the ₹100 credit ---------- */
  const q = await ops.api('GET', '/enrol/quote?course_id=live-a1', { cookie: A.cookie });
  ok('enrol: the quote is ₹7,999 in full, less the ₹100 credit from the consultation confirmed today → ₹7,899 due', q.status === 200 && q.json.quote.totalPaise === 799900 && q.json.quote.creditPaise === 10000 && q.json.quote.creditConsultRef === ref && q.json.quote.dueNowPaise === 789900, q.json);
  ok('enrol: instalments are refused (400 bad-plan)', (await ops.api('POST', '/enrol/checkout', { cookie: A.cookie, body: { course_id: 'live-a1', plan: 'instalments' } })).json?.code === 'bad-plan');
  const before = (await one(`SELECT COUNT(*) AS n FROM live_payments p JOIN live_enrolments e ON e.id = p.enrolment_id WHERE e.user_id = '${A.id}'`)).n;
  const mism = await ops.api('POST', '/enrol/checkout', { cookie: A.cookie, body: { course_id: 'live-a1', expected_amount_paise: 799900 } });
  ok('enrol: a stale browser amount (₹7,999 instead of ₹7,899) is refused before any gateway order', mism.status === 409 && mism.json.code === 'amount-changed' && (await one(`SELECT COUNT(*) AS n FROM live_payments p JOIN live_enrolments e ON e.id = p.enrolment_id WHERE e.user_id = '${A.id}'`)).n === before, mism.json);
  const co = await ops.api('POST', '/enrol/checkout', { cookie: A.cookie, body: { course_id: 'live-a1', expected_amount_paise: 789900 } });
  const eref = co.json && co.json.enrolment && co.json.enrolment.ref;
  if (!ok('enrol: checkout holds a place and opens one Cashfree order', co.status === 200 && REF.test(eref || '') && co.json.checkout.mode === 'sandbox', co.json)) return;
  const pay1 = await one(`SELECT p.id, p.amount_paise FROM live_payments p JOIN live_enrolments e ON e.id = p.enrolment_id WHERE e.ref = '${eref}' AND p.status = 'pending'`);
  const eo = await ops.cfOrder(pay1.id);
  ok('enrol: Cashfree holds a server-side order for exactly ₹7,899.00 INR (full fee less the credit)', Number(eo.order_amount) === 7899 && eo.order_currency === 'INR' && pay1.amount_paise === 789900, eo);
  const retry = await ops.api('POST', '/enrol/checkout', { cookie: A.cookie, body: { course_id: 'live-a1', expected_amount_paise: 789900 } });
  ok('enrol: a retry resumes the SAME Cashfree order (no second order, no second seat)', retry.status === 200 && retry.json.resumed === true && retry.json.paymentSessionId === co.json.paymentSessionId
    && (await one(`SELECT COUNT(*) AS n FROM live_payments p JOIN live_enrolments e ON e.id = p.enrolment_id WHERE e.user_id = '${A.id}'`)).n === before + 1, retry.json);
  const epaid = await ops.cfPay(co.json.paymentSessionId, 'testsuccess@gocash');
  ok('enrol: sandbox checkout completed with Cashfree\'s test UPI', epaid.ok, epaid.body);
  const enrolled = await waitFor(async () => (await one(`SELECT status FROM live_enrolments WHERE ref = '${eref}'`)).status === 'enrolled');
  ok('enrol: Cashfree\'s signed success webhook enrolled the learner only after verifying the exact amount', enrolled);
  const ep = await ops.cfPayments(pay1.id);
  ok('enrol: Cashfree\'s payments API independently shows one SUCCESS payment of ₹7,899', ep.filter((p) => p.payment_status === 'SUCCESS').length === 1 && Number(ep.find((p) => p.payment_status === 'SUCCESS').payment_amount) === 7899, ep);
  const ev2 = await ops.api('GET', `/enrol/enrolments/${eref}`, { cookie: A.cookie });
  ok('enrol: the learner sees "enrolled · paid", ₹7,899 paid, nothing more due', ev2.json?.enrolment?.status === 'enrolled' && ev2.json.enrolment.paymentStatus === 'paid' && ev2.json.enrolment.paidPaise === 789900, ev2.json);
  const edup = await signedWebhook(successPayload(pay1.id, 7899, 'dup-check'));
  ok('enrol: a duplicate success webhook changes nothing', edup.status === 200 && edup.json.duplicate === true, edup.json);
  ok('enrol: the consultation credit is used once (a second quote has no credit)', (await one(`SELECT COUNT(*) AS n FROM live_enrolments WHERE credit_consult_ref = '${ref}'`)).n === 1);

  /* ---------- no self-paced access from a live payment ---------- */
  const ent = await one(`SELECT (SELECT COUNT(*) FROM user_entitlements WHERE user_id = '${A.id}') AS ents, (SELECT COUNT(*) FROM orders WHERE user_id = '${A.id}') AS orders`);
  ok('separation: no self-paced entitlement or order was created for the paying learner', ent.ents === 0 && ent.orders === 0, ent);

  /* ---------- expired holds ---------- */
  const C = await learner('c');
  const cco = await ops.api('POST', '/enrol/checkout', { cookie: C.cookie, body: { course_id: 'live-a1', expected_amount_paise: 799900 } });
  const cref = cco.json && cco.json.enrolment && cco.json.enrolment.ref;
  ok('expiry: an unpaid checkout holds a place (pending)', REF.test(cref || '') && cco.json.enrolment.status === 'pending', cco.json);
  if (ops.advance) {
    await ops.advance(31 * 60);   // the seat hold (HOLD_SECONDS) is 30 minutes; the Cashfree order lapses at 26
    await ops.scheduled();
    await checkExpired({ refs: [cref], cookie: C.cookie });
  } else {
    fs.writeFileSync(STATE, JSON.stringify({ refs: [cref], cookie: C.cookie, at: Date.now() }), { mode: 0o600 });
    manual('expiry: the unpaid hold expires and frees its place', `Run again with --check-expired at least 31 minutes from now (state kept in ${STATE}, mode 600).`);
  }
}

async function checkExpired(state) {
  for (const r of state.refs) {
    const v = await ops.api('GET', `/enrol/enrolments/${r}`, { cookie: state.cookie });
    const pay = await one(`SELECT p.id FROM live_payments p JOIN live_enrolments e ON e.id = p.enrolment_id WHERE e.ref = '${r}'`);
    const remote = pay ? await ops.cfOrder(pay.id) : {};
    ok(`expiry: ${r} expired after its hold lapsed, its place was freed, and Cashfree shows the order unpaid`, v.json?.enrolment && ['expired', 'released'].includes(v.json.enrolment.status) && remote.order_status !== 'PAID', { status: v.json?.enrolment?.status, cashfree: remote.order_status });
  }
}

/* ================= REAL: Cashfree sandbox + the deployed sandbox Worker ================= */
function realOps() {
  const url = String(process.env.SANDBOX_WORKER_URL || '').replace(/\/$/, '');
  const appId = String(process.env.CASHFREE_SANDBOX_APP_ID || '');
  const secret = String(process.env.CASHFREE_SANDBOX_SECRET_KEY || '');
  const missing = [];
  if (!WORKER_URL_RE.test(url)) missing.push('SANDBOX_WORKER_URL (https://klarweg-access-payments-nonprod.<sub>.workers.dev)');
  if (!/^TEST/.test(appId)) missing.push('CASHFREE_SANDBOX_APP_ID (a sandbox app id, starting with TEST)');
  if (!secret || /^cfsk_ma_prod_/.test(secret)) missing.push('CASHFREE_SANDBOX_SECRET_KEY (the sandbox secret, never a production key)');
  if (missing.length) {
    console.error('Not run: the real sandbox verification needs, in the environment:\n  - ' + missing.join('\n  - ') + '\nSee docs/live-classes-payments-sandbox.md. Nothing was contacted.');
    process.exit(2);
  }
  secrets.push(appId, secret);
  const cf = async (pathname, init = {}) => {
    const res = await fetch(CF_BASE + pathname, { ...init, headers: { 'x-api-version': CF_VERSION, 'x-client-id': appId, 'x-client-secret': secret, accept: 'application/json', 'content-type': 'application/json', ...(init.headers || {}) } });
    return { status: res.status, body: await res.json().catch(() => null) };
  };
  return {
    secret,
    istDate: () => new Date(Date.now() + 330 * 60000).toISOString().slice(0, 10),
    wait: sleep,
    async api(method, pathname, { cookie, body, raw, headers = {} } = {}) {
      const h = { origin: ORIGIN, ...headers };
      if (cookie) h.cookie = cookie;
      if (body !== undefined || raw !== undefined) h['content-type'] = 'application/json';
      const res = await fetch(url + pathname, { method, headers: h, body: raw ?? (body === undefined ? undefined : JSON.stringify(body)) });
      const sc = (res.headers.getSetCookie ? res.headers.getSetCookie() : []).map((c) => c.split(';')[0]).find((c) => /=/.test(c) && !/=;?$/.test(c));
      return { status: res.status, json: await res.json().catch(() => null), cookie: sc || null };
    },
    async cfOrder(id) { return (await cf('/orders/' + encodeURIComponent(id))).body || {}; },
    async cfPayments(id) { const r = await cf('/orders/' + encodeURIComponent(id) + '/payments'); return Array.isArray(r.body) ? r.body : []; },
    /* Cashfree "Order Pay" with the sandbox's documented test UPI ids. */
    async cfPay(sessionId, vpa) {
      const res = await fetch(CF_BASE + '/orders/sessions', { method: 'POST', headers: { 'x-api-version': CF_VERSION, 'content-type': 'application/json', accept: 'application/json' }, body: JSON.stringify({ payment_session_id: sessionId, payment_method: { upi: { channel: 'collect', upi_id: vpa } } }) });
      const b = await res.json().catch(() => null);
      return { ok: res.ok, failed: /failure/.test(vpa) && res.ok, body: b };
    },
    async sql(query) {
      if (!/^\s*(SELECT|INSERT OR IGNORE INTO consult_availability)\b/i.test(query)) throw new Error('verify: only reads and the availability fixture are allowed');
      const r = spawnSync('npx', ['wrangler', 'd1', 'execute', 'klarweg-access-payments-nonprod', '--config', 'wrangler.payments-sandbox.toml', '--remote', '--json', '--command', query], { cwd: WORKER_DIR, encoding: 'utf8' });
      if (r.status !== 0) throw new Error('wrangler d1 execute failed: ' + scrub((r.stderr || '').slice(-300)));
      const parsed = JSON.parse(r.stdout);
      return (Array.isArray(parsed) ? parsed[0] : parsed).results || [];
    },
    webhookEvidence: async () => null,
    advance: null
  };
}

/* ================= REHEARSAL: the real Worker + a local Cashfree emulation ================= */
async function rehearsalOps() {
  const REAL_NOW = Date.now, T0 = REAL_NOW();
  let offset = 0;
  const start = Date.UTC(2026, 9, 21, 10, 0) - 330 * 60000;   // 10:00 IST, inside the booking window
  Date.now = () => start + offset + (REAL_NOW() - T0);
  const SECRET = 'rehearsal-only-not-a-real-secret';
  const API = 'https://klarweg-access-payments-nonprod.rehearsal.workers.dev';
  const { default: worker } = await import('../access/worker/src/index.js');
  const { createD1 } = await import('../access/worker/test/d1-sqlite.mjs');
  const env = {
    DB: createD1(WORKER_DIR), CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST_REHEARSAL', CASHFREE_SECRET_KEY: SECRET, RATE_SALT: 'rehearsal',
    CONSULT_BOOKING: 'sandbox', CONSULT_TEACHERS: 'reegan-gandhi', ENROL_PAYMENTS: 'sandbox', ENROL_COURSES: JSON.stringify({ 'live-a1': { batch: '2099-01-05' } }),
    ENROL_CONSULT_CREDIT: 'course-fee', CORS_EXTRA_ORIGINS: ORIGIN, CASHFREE_NOTIFY_URL: API + '/webhooks/cashfree'
  };
  const ctx = { waitUntil() {} };
  const orders = new Map(), hooks = [];
  let ip = 0;
  const call = async (method, pathname, { cookie, body, raw, headers = {} } = {}) => {
    const h = { origin: ORIGIN, 'CF-Connecting-IP': '198.51.100.' + (++ip % 250), ...headers };
    if (cookie) h.cookie = cookie;
    if (body !== undefined || raw !== undefined) h['content-type'] = 'application/json';
    const res = await worker.fetch(new Request(API + pathname, { method, headers: h, body: raw ?? (body === undefined ? undefined : JSON.stringify(body)) }), env, ctx);
    const sc = (res.headers.getSetCookie ? res.headers.getSetCookie() : []).map((c) => c.split(';')[0]).find((c) => /=./.test(c));
    return { status: res.status, json: await res.json().catch(() => null), cookie: sc || null };
  };
  async function deliver(type, o, status) {
    const pid = 'rh_' + o.order_id.slice(-6) + '_' + o.payments.length;
    o.payments.push({ cf_payment_id: pid, payment_status: status, payment_amount: o.order_amount, payment_currency: 'INR' });
    const raw = JSON.stringify({ type, data: { order: { order_id: o.order_id, order_amount: o.order_amount }, payment: { cf_payment_id: pid, payment_status: status } } });
    const ts = String(Math.floor(Date.now() / 1000));
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const sig = Buffer.from(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(ts + raw))).toString('base64');
    const r = await call('POST', '/webhooks/cashfree', { raw, headers: { 'x-webhook-timestamp': ts, 'x-webhook-signature': sig } });
    hooks.push({ type, status: r.status, json: r.json });
  }
  /* Cashfree's sandbox, emulated at fetch(): only the calls the Worker and this script make. */
  const realFetch = globalThis.fetch;
  globalThis.fetch = async (input, init = {}) => {
    const u = typeof input === 'string' ? input : input.url;
    const m = u.match(/^https:\/\/sandbox\.cashfree\.com\/pg\/orders(?:\/([^/]+))?(\/payments)?$/);
    if (!m) throw new Error('rehearsal: blocked network call to ' + u);
    const method = (init.method || 'GET').toUpperCase();
    if (method === 'POST' && m[1] === 'sessions') {
      const b = JSON.parse(init.body);
      const o = [...orders.values()].find((x) => x.payment_session_id === b.payment_session_id);
      if (!o || o.order_status !== 'ACTIVE') return Response.json({ message: 'order not active' }, { status: 400 });
      const good = b.payment_method.upi.upi_id === 'testsuccess@gocash';
      if (good) o.order_status = 'PAID';
      await deliver(good ? 'PAYMENT_SUCCESS_WEBHOOK' : 'PAYMENT_FAILED_WEBHOOK', o, good ? 'SUCCESS' : 'FAILED');
      return Response.json({ payment_method: 'upi', channel: 'collect', action: 'custom' });
    }
    if (method === 'POST' && !m[1]) {
      const b = JSON.parse(init.body);
      const o = { order_id: b.order_id, order_amount: b.order_amount, order_currency: b.order_currency, order_status: 'ACTIVE', payment_session_id: 'session_' + b.order_id, expires: Date.parse(b.order_expiry_time), payments: [] };
      orders.set(b.order_id, o);
      return Response.json({ order_id: o.order_id, order_amount: o.order_amount, order_currency: o.order_currency, payment_session_id: o.payment_session_id, order_status: 'ACTIVE', order_expiry_time: b.order_expiry_time });
    }
    const o = orders.get(decodeURIComponent(m[1] || ''));
    if (!o) return Response.json({ message: 'order not found' }, { status: 404 });
    if (o.order_status === 'ACTIVE' && Date.now() > o.expires) o.order_status = 'EXPIRED';
    if (m[2]) return Response.json(o.payments);
    return Response.json({ order_id: o.order_id, order_amount: o.order_amount, order_currency: o.order_currency, order_status: o.order_status });
  };
  void realFetch;
  return {
    secret: SECRET,
    istDate: () => new Date(Date.now() + 330 * 60000).toISOString().slice(0, 10),
    wait: async () => {},
    api: call,
    async cfOrder(id) { const o = orders.get(id); if (o && o.order_status === 'ACTIVE' && Date.now() > o.expires) o.order_status = 'EXPIRED'; return o ? { ...o } : {}; },
    async cfPayments(id) { return orders.get(id) ? [...orders.get(id).payments] : []; },
    async cfPay(sessionId, vpa) { const r = await globalThis.fetch(CF_BASE + '/orders/sessions', { method: 'POST', body: JSON.stringify({ payment_session_id: sessionId, payment_method: { upi: { channel: 'collect', upi_id: vpa } } }) }); return { ok: r.ok, failed: /failure/.test(vpa), body: await r.json() }; },
    async sql(query) { return (await env.DB.prepare(query).all()).results; },
    async webhookEvidence(type, sessionId) {
      if (type === 'PAYMENT_USER_DROPPED_WEBHOOK') {
        const o = [...orders.values()].find((x) => x.payment_session_id === sessionId);
        if (!o) return false;
        await deliver(type, o, 'USER_DROPPED');
      }
      const h = hooks.filter((x) => x.type === type).at(-1);
      return !!h && h.status === 200 && h.json && h.json.ignored === true;
    },
    async advance(sec) { offset += sec * 1000; },
    async scheduled() { await worker.scheduled({ cron: '*/15 * * * *', scheduledTime: Date.now() }, env, ctx); }
  };
}

/* ================= run ================= */
try {
  if (CHECK_EXPIRED) {
    const state = JSON.parse(fs.readFileSync(STATE, 'utf8'));
    await checkExpired(state);
  } else {
    await verify();
  }
} catch (e) {
  record('FAIL', 'the verification ran to completion', String(e && e.stack || e));
}
const counts = results.reduce((a, r) => ({ ...a, [r.status]: (a[r.status] || 0) + 1 }), {});
const report = { mode: REHEARSE ? 'rehearsal (local emulation, NOT a real Cashfree sandbox transaction)' : 'real Cashfree sandbox', when: new Date().toISOString(), counts, results };
fs.writeFileSync(OUT, scrub(JSON.stringify(report, null, 2)), { mode: 0o600 });
console.log(`\n${report.mode}: ${counts.PASS || 0} passed, ${counts.FAIL || 0} failed, ${counts.MANUAL || 0} manual · report: ${OUT}`);
process.exit(counts.FAIL ? 1 : 0);
