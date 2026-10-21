/* ============================================================
   LIVE CLASSES · local payment demo and end-to-end check
   ------------------------------------------------------------
   Runs the REAL access Worker (access/worker/src) in Node against an
   in-memory D1 (schema + every migration), and serves the REAL Live
   Classes page with both payment switches turned on IN MEMORY ONLY.
   Cashfree is replaced by a local mock:
     · its order API (create / fetch order) inside this process, and
     · a hosted-checkout page at /__mock_cashfree/pay, plainly labelled
       "MOCK CASHFREE · LOCAL ONLY · NO REAL PAYMENT", whose buttons pick
       the outcome (paid, failed, cancelled, bank delay, duplicate
       notification) and send webhooks signed exactly as Cashfree signs.
   Nothing here reaches Cashfree, Cloudflare, Google or any other host,
   and no committed file is changed: the switches in live-classes-data.js
   and wrangler.toml stay off.

   Usage:
     node scripts/live-payments-demo.mjs          interactive: prints a URL
     node scripts/live-payments-demo.mjs --e2e    headless Chrome runs every
         flow, asserts on the database, and saves screenshots to
         --out=<dir> (default: a new temp directory, printed at the end)
   Env:  CHROME=<binary>   CHROME_ARGS="--no-sandbox"
   ============================================================ */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WORKER_DIR = path.join(ROOT, 'access', 'worker');
const E2E = process.argv.includes('--e2e');
const OUT = (process.argv.find((a) => a.startsWith('--out=')) || '').slice(6) || fs.mkdtempSync(path.join(os.tmpdir(), 'kw-payments-demo-'));
fs.mkdirSync(OUT, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------- clock: today, 10:00 IST (inside the same-day booking window) ---------- */
const REAL_NOW = Date.now;
const T0 = REAL_NOW();
const DEMO_START = Date.UTC(2026, 9, 21, 10, 0) - 330 * 60000;
Date.now = () => DEMO_START + (REAL_NOW() - T0);

/* ---------- Cashfree API mock (this process only) ---------- */
const realFetch = globalThis.fetch;
const cf = { orders: new Map(), creates: [] };
globalThis.fetch = async (input, init = {}) => {
  const url = typeof input === 'string' ? input : input.url;
  const m = url.match(/^https:\/\/(sandbox|api)\.cashfree\.com\/pg\/orders(?:\/([^/]+))?$/);
  if (!m) {
    if (/^http:\/\/(localhost|127\.0\.0\.1)[:/]/.test(url)) return realFetch(input, init);
    throw new Error('demo: blocked network call to ' + url);
  }
  if (m[1] !== 'sandbox') throw new Error('demo: refused a production Cashfree call');
  const method = (init.method || 'GET').toUpperCase();
  if (method === 'POST' && !m[2]) {
    const b = JSON.parse(init.body);
    const o = { order_id: b.order_id, order_amount: b.order_amount, order_currency: b.order_currency, order_status: 'ACTIVE',
      payment_session_id: 'session_' + b.order_id, return_url: b.order_meta.return_url, payments: 0 };
    cf.orders.set(b.order_id, o); cf.creates.push(b.order_id);
    return Response.json({ order_id: o.order_id, order_amount: o.order_amount, order_currency: o.order_currency, payment_session_id: o.payment_session_id, order_status: 'ACTIVE', order_expiry_time: b.order_expiry_time });
  }
  const o = cf.orders.get(decodeURIComponent(m[2]));
  if (!o) return Response.json({ message: 'order not found' }, { status: 404 });
  return Response.json({ order_id: o.order_id, order_amount: o.order_amount, order_currency: o.order_currency, order_status: o.order_status });
};
const bySession = (s) => [...cf.orders.values()].find((o) => o.payment_session_id === s);

/* ---------- the real Worker ---------- */
const { default: worker } = await import('../access/worker/src/index.js');
const { createD1 } = await import('../access/worker/test/d1-sqlite.mjs');
const SECRET = 'local-demo-webhook-secret';
const servers = [];
const listen = (handler) => new Promise((r) => { const s = http.createServer(handler); servers.push(s); s.listen(0, '127.0.0.1', () => r(s.address().port)); });
const guarded = (fn) => (req, res) => fn(req, res).catch((e) => { console.error('demo server error:', req.method, req.url, e); if (!res.headersSent) res.writeHead(500); res.end(String(e && e.message)); });
const API_PORT = await listen(guarded(toWorker));
const SITE_PORT = await listen(guarded(site));
const API = `http://localhost:${API_PORT}`;
const SITE = `http://localhost:${SITE_PORT}`;
const env = {
  DB: createD1(WORKER_DIR),
  CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST_LOCAL_DEMO', CASHFREE_SECRET_KEY: SECRET,
  GOOGLE_CLIENT_ID: 'local-demo.apps.googleusercontent.com', RATE_SALT: 'local-demo',
  CONSULT_BOOKING: 'sandbox', CONSULT_TEACHERS: 'reegan-gandhi',
  ENROL_PAYMENTS: 'sandbox', ENROL_COURSES: JSON.stringify({ 'live-a1': { batch: '2026-11-02' } }), ENROL_CONSULT_CREDIT: 'course-fee',
  CORS_EXTRA_ORIGINS: SITE
};
const today = new Date(Date.now() + 330 * 60000).toISOString().slice(0, 10);
await env.DB.prepare("INSERT INTO consult_availability (teacher_id, date, confirmed_by, confirmed_at) VALUES ('reegan-gandhi', ?1, 'local-demo', 0)").bind(today).run();

async function toWorker(req, res) {
  const chunks = []; for await (const c of req) chunks.push(c);
  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) if (typeof v === 'string') headers.set(k, v);
  headers.set('CF-Connecting-IP', '127.0.0.1');
  const r = await worker.fetch(new Request(API + req.url, { method: req.method, headers, body: ['GET', 'HEAD'].includes(req.method) ? undefined : Buffer.concat(chunks) }), env, { waitUntil() {} });
  const out = {}; r.headers.forEach((v, k) => { if (k !== 'set-cookie') out[k] = v; });
  const cookies = r.headers.getSetCookie ? r.headers.getSetCookie() : [];
  if (cookies.length) out['set-cookie'] = cookies;
  res.writeHead(r.status, out); res.end(Buffer.from(await r.arrayBuffer()));
}

/* Cashfree-style signed webhook: HMAC-SHA256(timestamp + raw body), base64. */
async function webhook(type, orderId, { secret = SECRET } = {}) {
  const o = cf.orders.get(orderId);
  const payload = { type, data: { order: { order_id: orderId, order_amount: o.order_amount }, payment: { cf_payment_id: 'mockpay_' + orderId.slice(-6) + '_' + o.payments, payment_status: type === 'PAYMENT_SUCCESS_WEBHOOK' ? 'SUCCESS' : type === 'PAYMENT_FAILED_WEBHOOK' ? 'FAILED' : 'USER_DROPPED' } } };
  const raw = JSON.stringify(payload), ts = String(Math.floor(Date.now() / 1000));
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = Buffer.from(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(ts + raw))).toString('base64');
  const r = await worker.fetch(new Request(API + '/webhooks/cashfree', { method: 'POST', headers: { 'content-type': 'application/json', 'x-webhook-timestamp': ts, 'x-webhook-signature': sig }, body: raw }), env, { waitUntil() {} });
  return { status: r.status, body: await r.json().catch(() => null) };
}
const webhookLog = [];

/* ---------- the site, with the switches on in memory only ---------- */
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json', '.webp': 'image/webp', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };
function demoData() {
  const edits = [
    [/(onlineBooking: \{\s*enabled: )false/, '$1true'],
    [/(onlineBooking: \{[\s\S]*?legalTermsUpdated: )true/, '$1true'],
    [/(onlineBooking: \{[\s\S]*?joinLinksConfigured: )false/, '$1true'],
    [/(liveEnrolment: \{\s*enabled: )false/, '$1true'],
    [/(liveEnrolment: \{[\s\S]*?legalTermsUpdated: )true/, '$1true'],
    [/nextBatch: null,(\s*\/\/ no start date)/, "nextBatch: 'Monday 2 November 2026',$1"],
    [/(paymentTerms: '₹7,999 in full, in one payment, before the first class\.) Paid online on this page once enrolment opens\.'/, "$1 Paid online through Cashfree.'"],
    [/(title: 'Beginner German · A1',[\s\S]*?enrolment: )'waitlist'/, "$1'open'"]
  ];
  let s = fs.readFileSync(path.join(ROOT, 'live-classes-data.js'), 'utf8');
  for (const [re, to] of edits) { if (!re.test(s)) throw new Error('demo: data edit did not apply: ' + re); s = s.replace(re, to); }
  return s;
}
/* kw-config.js for the demo: the local Worker, and a mock Cashfree SDK.
   kw-consult.js / kw-enrol.js use window.Cashfree when it already exists,
   so the real SDK is never loaded. */
const DEMO_CONFIG = `window.KW_ACCESS_API = ${JSON.stringify(API)};
window.Cashfree = function (opts) { return { checkout: function (o) {
  location.href = '/__mock_cashfree/pay?session=' + encodeURIComponent(o.paymentSessionId) + '&mode=' + encodeURIComponent(opts && opts.mode);
  return new Promise(function () {});
} }; };`;
const LIVE_BASE = 'https://reegangandhi16-pixel.github.io/klarweg';
const local = (u) => u.replace(LIVE_BASE, SITE);
const MOCK_CSS = 'body{font:16px/1.5 system-ui,sans-serif;margin:0;background:#F4F5F7;color:#111}.bar{background:#7A4E00;color:#fff;padding:10px 16px;font-weight:700;letter-spacing:.04em;text-align:center}'
  + '.box{max-width:440px;margin:32px auto;background:#fff;border-radius:14px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,.08)}h1{font-size:20px;margin:0 0 4px}.amt{font-size:34px;font-weight:800;margin:12px 0}'
  + 'code{font-size:12px;word-break:break-all}a.b{display:block;text-align:center;padding:12px;border-radius:10px;margin:10px 0 0;text-decoration:none;font-weight:600;border:1px solid #ccd}a.pay{background:#1F7A3A;color:#fff;border-color:#1F7A3A}small{color:#666}';
async function site(req, res) {
  const u = new URL(req.url, SITE);
  if (u.pathname === '/__mock_cashfree/pay') {
    const o = bySession(u.searchParams.get('session'));
    if (!o) { res.writeHead(404); return res.end('unknown session'); }
    const s = encodeURIComponent(o.payment_session_id);
    const opt = (k, label, cls = '') => `<a class="b ${cls}" id="mock-${k}" href="/__mock_cashfree/complete?session=${s}&outcome=${k}">${label}</a>`;
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    return res.end(`<!doctype html><meta name=viewport content="width=device-width,initial-scale=1"><title>MOCK Cashfree checkout</title><style>${MOCK_CSS}</style>
<div class=bar>MOCK CASHFREE · LOCAL ONLY · NO REAL PAYMENT</div><div class=box><h1>Klarweg</h1><small>Order created by the Klarweg Worker</small>
<div class=amt id=mock-amount>₹${Number(o.order_amount).toLocaleString('en-IN')}</div><code id=mock-order>${o.order_id}</code>
${opt('paid', 'Pay (success)', 'pay')}${opt('failed', 'Payment fails (bank declined)')}${opt('cancelled', 'Cancel and go back')}${opt('delayed', 'Paid, bank confirmation delayed (no webhook yet)')}${opt('duplicate', 'Pay, and Cashfree sends the notification twice')}</div>`);
  }
  if (u.pathname === '/__mock_cashfree/complete') {
    const o = bySession(u.searchParams.get('session'));
    const outcome = u.searchParams.get('outcome');
    if (!o) { res.writeHead(404); return res.end('unknown session'); }
    if (outcome === 'paid' || outcome === 'duplicate') {
      o.order_status = 'PAID'; o.payments++;
      webhookLog.push([o.order_id, 'success', await webhook('PAYMENT_SUCCESS_WEBHOOK', o.order_id)]);
      if (outcome === 'duplicate') webhookLog.push([o.order_id, 'success-again', await webhook('PAYMENT_SUCCESS_WEBHOOK', o.order_id)]);
    } else if (outcome === 'failed') webhookLog.push([o.order_id, 'failed', await webhook('PAYMENT_FAILED_WEBHOOK', o.order_id)]);
    else if (outcome === 'cancelled') webhookLog.push([o.order_id, 'dropped', await webhook('PAYMENT_USER_DROPPED_WEBHOOK', o.order_id)]);
    // 'delayed': nothing yet; settleLater() marks it paid without a webhook
    res.writeHead(303, { location: local(o.return_url) });
    return res.end();
  }
  const rel = decodeURIComponent(u.pathname).replace(/^\/+/, '') || 'index.html';
  if (rel === 'live-classes-data.js' || rel === 'kw-config.js') {
    res.writeHead(200, { 'content-type': TYPES['.js'], 'cache-control': 'no-store' });
    return res.end(rel === 'kw-config.js' ? DEMO_CONFIG : demoData());
  }
  const file = path.resolve(ROOT, rel);
  if (!file.startsWith(ROOT + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); return res.end('not found'); }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
}

if (!E2E) {
  console.log(`Local payment demo (MOCK Cashfree, in-memory database, nothing leaves this machine)
  Page:   ${SITE}/live-classes.html
  Worker: ${API}
Sign in with an account created on ${SITE}/account.html (it lives only in this process). Ctrl+C to stop.`);
} else {
  await runE2E().catch((e) => { console.error(e); process.exitCode = 1; });
  servers.forEach((s) => s.close());
}

/* ===================================================================== */
async function runE2E() {
  const CHROME = process.env.CHROME || (process.platform === 'darwin' ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' : 'google-chrome');
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-pay-chrome-'));
  let proc = null;
  const watchdog = setTimeout(() => { console.log('[payments-demo] WATCHDOG: stopped'); if (proc) proc.kill(); process.exit(2); }, 420000);
  proc = spawn(CHROME, [...(process.env.CHROME_ARGS || '').split(' ').filter(Boolean), '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
    `--user-data-dir=${dir}`, '--remote-debugging-port=0', '--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE localhost, EXCLUDE 127.0.0.1', 'about:blank'], { stdio: 'ignore' });
  console.log('[payments-demo] site ' + SITE + ' · worker ' + API);
  let port = null;
  for (let i = 0; i < 300 && !port; i++) { await sleep(100); try { const p = fs.readFileSync(path.join(dir, 'DevToolsActivePort'), 'utf8').split('\n')[0]; if (/^\d+$/.test(p)) port = p; } catch {} }
  if (!port) { proc.kill(); throw new Error('Chrome did not start'); }
  const target = (await (await realFetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page');
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));
  let id = 0; const pend = new Map(); const pageErrors = [];
  ws.addEventListener('message', (m) => {
    const msg = JSON.parse(m.data);
    if (msg.id && pend.has(msg.id)) { const p = pend.get(msg.id); pend.delete(msg.id); msg.error ? p.rej(new Error(msg.error.message)) : p.res(msg.result); }
    if (msg.method === 'Runtime.exceptionThrown') pageErrors.push(msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text);
  });
  const send = (method, params = {}) => new Promise((res, rej) => { const i = ++id; pend.set(i, { res, rej }); ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (expr) => {
    const r = await Promise.race([send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true }),
      new Promise((_, rej) => setTimeout(() => rej(new Error('evaluate timed out: ' + expr.slice(0, 100))), 20000))]);
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
    return r.result.value;
  };
  await send('Runtime.enable'); await send('Page.enable');
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });

  const results = [];
  const ok = (name, cond, info = '') => { results.push([cond, name]); console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}${cond || info === '' ? '' : '  ' + JSON.stringify(info)}`); };
  const size = (width, height, mobile = false) => send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: mobile ? 2 : 1, mobile });
  const go = async (url) => { await send('Page.navigate', { url }); await waitFor('document.readyState === "complete"'); await sleep(400); };
  async function waitFor(expr, ms = 15000) {
    const t = REAL_NOW();
    while (REAL_NOW() - t < ms) { if (await ev(`(()=>{try{return !!(${expr})}catch(e){return false}})()`).catch(() => false)) return true; await sleep(150); }
    return false;
  }
  const text = (sel) => ev(`(document.querySelector(${JSON.stringify(sel)})||{}).innerText||''`);
  const click = (sel) => ev(`(()=>{const e=document.querySelector(${JSON.stringify(sel)});if(!e)return false;e.click();return true})()`);
  const clickText = (sel, t) => ev(`(()=>{const e=[...document.querySelectorAll(${JSON.stringify(sel)})].find(x=>x.textContent.includes(${JSON.stringify(t)}));if(!e)return false;e.click();return true})()`);
  let shot = 0;
  /* An element shot: the element itself (plus a margin), whatever the
     page's own scrolling did; without a selector, the viewport. */
  async function snap(name, sel) {
    let clip;
    if (sel) {
      await ev(`(()=>{document.documentElement.style.scrollBehavior='auto';let s=document.getElementById('kw-demo-shot');if(!s){s=document.createElement('style');s.id='kw-demo-shot';s.textContent='.sticky-book,header,nav{visibility:hidden!important}';document.head.appendChild(s)}})()`);
      await sleep(500);
      const r = await ev(`(()=>{const e=document.querySelector(${JSON.stringify(sel)});if(!e)return null;const b=e.getBoundingClientRect();return {y:b.top+scrollY,h:b.height,w:document.documentElement.clientWidth}})()`);
      if (r) clip = { x: 0, y: Math.max(0, r.y - 16), width: r.w, height: Math.min(r.h + 32, 1800), scale: 1 };
    }
    const { data } = await send('Page.captureScreenshot', clip ? { format: 'png', clip, captureBeyondViewport: true } : { format: 'png' });
    if (sel) await ev(`(()=>{const s=document.getElementById('kw-demo-shot');if(s)s.remove()})()`);
    fs.writeFileSync(path.join(OUT, `${String(++shot).padStart(2, '0')}-${name}.png`), Buffer.from(data, 'base64'));
  }
  const overflow = () => ev('document.documentElement.scrollWidth - document.documentElement.clientWidth');
  const row = (sql, ...a) => env.DB.prepare(sql).bind(...a).first();
  const rows = async (sql, ...a) => (await env.DB.prepare(sql).bind(...a).all()).results;
  async function signIn(email) {
    await go(SITE + '/live-classes.html');
    const r = await ev(`(async()=>{const o={method:'POST',credentials:'include',headers:{'content-type':'application/json'}};
      const s=await fetch(${JSON.stringify(API)}+'/auth/signup',{...o,body:JSON.stringify({email:${JSON.stringify(email)},password:'local-demo-pass-9',name:'Demo Learner'})});
      const p=await fetch(${JSON.stringify(API)}+'/auth/phone',{...o,body:JSON.stringify({phone:'9876543210'})});
      return [s.status,p.status]})()`);
    return r;
  }

  /* ============ DEMO BOOKING · ₹100 ============ */
  await size(1280, 900);
  const su = await signIn('demo-booking@example.test');
  ok('booking: learner signed up and added a phone (in-memory account)', su[0] === 201 && su[1] === 200, su);
  await go(SITE + '/live-classes.html#book');
  ok('booking: the online booking panel loads, in TEST MODE', await waitFor('document.querySelector("#consult-online #kwcb-pay")'), await text('#consult-online'));
  ok('booking: the panel shows the ₹100 fee', /Fee: ₹100/.test(await text('#consult-online')) && /Pay ₹100 and book/.test(await text('#kwcb-pay')));
  ok('booking: with booking on, the "not open yet" notice is gone, the CTAs say "Book a consultation", and the form stays the free waitlist only',
    await ev('document.getElementById("consult-closed").hidden && !document.querySelector(\'input[name="rtype"]\') && document.getElementById("form-title").textContent === "Join the course waitlist" && /^Book a consultation/.test(document.querySelector(".nav-cta-live").textContent.trim())'));
  await snap('booking-1-choose-slot', '#book-form');
  await click('#kwcb-pay');
  ok('booking: Pay opens the (mock) checkout for a Worker-created ₹100 order', await waitFor('location.pathname === "/__mock_cashfree/pay"') && (await text('#mock-amount')) === '₹100');
  const consultOrder = await text('#mock-order');
  await snap('booking-2-mock-checkout');
  await click('#mock-failed');
  ok('booking: a FAILED payment returns to "Payment not completed yet" with Continue payment',
    await waitFor('/Payment not completed yet/.test(document.body.innerText) && document.querySelector("#kwcb-resume")', 45000), await text('#consult-online'));
  const b1 = await row('SELECT status FROM consult_bookings ORDER BY created_at DESC LIMIT 1');
  ok('booking: after the failure the booking is still pending (not confirmed)', b1.status === 'pending', b1);
  await snap('booking-3-failed-retry', '#consult-online');
  await click('#kwcb-resume');
  ok('booking: Continue payment re-opens the SAME order (no second order)', await waitFor('location.pathname === "/__mock_cashfree/pay"') && (await text('#mock-order')) === consultOrder && cf.creates.filter((x) => x.startsWith('cons_')).length === 1);
  await click('#mock-paid');
  ok('booking: after a verified payment the page shows "Your consultation is booked" with the reference', await waitFor('/Your consultation is booked/.test(document.body.innerText)', 45000), await text('#consult-online'));
  const cref = (await text('#consult-online .kwcb-ref')).trim();
  ok('booking: reference shown', /^KWC-[2-9A-HJ-NP-Z]{8}$/.test(cref), cref);
  await snap('booking-4-confirmed', '#consult-online');
  const confirmedUrl = await ev('location.href');
  await go(confirmedUrl);
  await waitFor('/Your consultation is booked/.test(document.body.innerText)', 45000);
  const again = await webhook('PAYMENT_SUCCESS_WEBHOOK', consultOrder);
  const cb = await rows("SELECT status FROM consult_bookings WHERE user_id = (SELECT id FROM users WHERE email = 'demo-booking@example.test')");
  ok('booking: refresh + duplicate webhook → still exactly one confirmed booking and one order',
    cb.length === 1 && cb[0].status === 'confirmed' && cf.creates.filter((x) => x.startsWith('cons_')).length === 1 && again.status === 200, { cb, again });

  /* ============ FULL COURSE PAYMENT ============ */
  const su2 = await signIn('demo-course@example.test');
  ok('course: second learner signed in', su2[0] === 201 && su2[1] === 200, su2);
  await go(SITE + '/live-classes.html#courses');
  ok('course: the open A1 course card says "Enrol and pay online" and shows ₹7,999',
    await waitFor('document.querySelector("[data-enrol-course=live-a1]")') && /₹7,999/.test(await text('#course-grid')));
  ok('course: the enrolment panel lists the course with its full fee and seats left; no payment-plan choice',
    await waitFor('document.querySelector("#enrol #kwen-next")') && /Beginner German · A1 · ₹7,999/.test(await text('#enrol')) && /8 of 8 places left/.test(await text('#enrol'))
      && !/instal|payment plan/i.test(await text('#enrol')) && !(await ev('!!document.querySelector("input[name=kwen-plan]")')), await text('#enrol'));
  await snap('course-1-card', '.c-card');
  await click('[data-enrol-course=live-a1]');
  await sleep(300); await snap('course-2-choose-course', '#enrol');
  await click('#kwen-next');
  ok('course: the review screen shows the course fee and the full amount due (₹7,999), and no instalment',
    await waitFor('/Due now, in full/.test(document.querySelector("#enrol").innerText)') && /Course fee\s*₹7,999/.test(await text('#enrol')) && /Due now, in full\s*₹7,999/.test(await text('#enrol')) && !/instal/i.test(await text('#enrol')), await text('#enrol'));
  ok('course: Pay is disabled until the terms box is ticked', await ev('document.querySelector("#kwen-pay").disabled === true'));
  await snap('course-3-review-amount', '#enrol');
  await click('#kwen-agree'); await click('#kwen-pay');
  ok('course: checkout opens for a ₹7,999 Worker-created order', await waitFor('location.pathname === "/__mock_cashfree/pay"') && (await text('#mock-amount')) === '₹7,999');
  const order1 = await text('#mock-order');
  await click('#mock-cancelled');
  ok('course: a CANCELLED payment returns to "Payment not completed yet", place held, Continue payment offered',
    await waitFor('/Payment not completed yet/.test(document.body.innerText) && document.querySelector("[data-kwen-resume]")', 45000), await text('#enrol'));
  ok('course: still pending in the database; nothing confirmed by the redirect', (await row('SELECT status FROM live_enrolments ORDER BY created_at DESC LIMIT 1')).status === 'pending');
  await snap('course-4-cancelled-retry', '#enrol');
  await click('[data-kwen-resume]');
  ok('course: Continue payment re-opens the SAME order', await waitFor('location.pathname === "/__mock_cashfree/pay"') && (await text('#mock-order')) === order1 && cf.creates.filter((x) => x.startsWith('enrp_')).length === 1);
  await click('#mock-delayed');
  ok('course: paid but not yet confirmed by the bank → the page keeps saying it is not confirmed (no false success)',
    await waitFor('/Payment not completed yet/.test(document.body.innerText)', 45000) && !/You are enrolled/.test(await text('#enrol')));
  await snap('course-5-pending-delayed', '#enrol');
  cf.orders.get(order1).order_status = 'PAID'; cf.orders.get(order1).payments++;   // the bank confirms; no webhook arrives
  await click('[data-kwen-check]');
  ok('course: "Check again" reconciles with Cashfree (no webhook needed) → "You are enrolled"', await waitFor('/You are enrolled/.test(document.body.innerText)', 45000), await text('#enrol'));
  ok('course: confirmation shows the reference and ₹7,999 paid in full; nothing more due, no further payment button',
    /KWE-[2-9A-HJ-NP-Z]{8}/.test(await text('#enrol')) && /Paid: ₹7,999/.test(await text('#enrol')) && /Nothing more is due/.test(await text('#enrol'))
      && !(await ev('!!document.querySelector("#enrol [data-kwen-resume]")')) && !/instal/i.test(await text('#enrol')), await text('#enrol'));
  await snap('course-6-enrolled-paid-in-full', '#enrol');
  webhookLog.push([order1, 'success-again', await webhook('PAYMENT_SUCCESS_WEBHOOK', order1)]);   // a late, repeated notification
  const enrolledUrl = await ev('location.href');
  await go(enrolledUrl); await waitFor('/You are enrolled/.test(document.body.innerText)', 45000);
  const pays = await rows("SELECT status, amount_paise FROM live_payments ORDER BY created_at");
  ok('course: refresh + duplicate webhook → one paid ₹7,999 payment, one order, no extra order',
    JSON.stringify(pays) === JSON.stringify([{ status: 'paid', amount_paise: 799900 }]) && cf.creates.filter((x) => x.startsWith('enrp_')).length === 1, pays);
  ok('course: the duplicate notification was acknowledged as a duplicate', webhookLog.some(([, k, r]) => k === 'success-again' && r.body && r.body.duplicate === true), webhookLog.map(([o, k, r]) => [k, r.status, r.body]));
  const ent = await row("SELECT COUNT(*) AS n FROM user_entitlements");
  ok('course: no self-paced access was granted by either payment', ent.n === 0);

  /* ============ mobile ============ */
  await size(390, 844, true);
  await go(enrolledUrl); await waitFor('/You are enrolled/.test(document.body.innerText)', 45000);
  ok('mobile: enrolment confirmation fits a 390 px screen (no horizontal scroll)', (await overflow()) <= 0, await overflow());
  await snap('mobile-1-enrolled', '#enrol');
  const su3 = await signIn('demo-mobile@example.test');
  await go(SITE + '/live-classes.html#courses');
  await waitFor('document.querySelector("#enrol #kwen-next")');
  await click('#kwen-next');
  await waitFor('/Due now/.test(document.querySelector("#enrol").innerText)');
  ok('mobile: review screen fits (no horizontal scroll)', su3[0] === 201 && (await overflow()) <= 0, await overflow());
  await snap('mobile-2-review-amount', '#enrol');
  await go(SITE + '/live-classes.html#book'); await waitFor('document.querySelector("#kwcb-pay")');
  ok('mobile: booking panel fits (no horizontal scroll)', (await overflow()) <= 0, await overflow());
  await snap('mobile-3-booking', '#consult-online');
  await size(1280, 900);

  /* ============ server-side amount, signatures ============ */
  const tamper = await ev(`(async()=>{const o={method:'POST',credentials:'include',headers:{'content-type':'application/json'}};
    const i=await fetch(${JSON.stringify(API)}+'/enrol/checkout',{...o,body:JSON.stringify({course_id:'live-a1',plan:'instalments'})});
    const a=await fetch(${JSON.stringify(API)}+'/enrol/checkout',{...o,body:JSON.stringify({course_id:'live-a1',expected_amount_paise:100})});
    const b=await fetch(${JSON.stringify(API)}+'/enrol/checkout',{...o,body:JSON.stringify({course_id:'live-a1',amount:1,order_amount:1,amount_paise:100})});
    return [a.status,(await a.json()).code,b.status,(await b.json()).enrolment.ref,i.status,(await i.json()).code]})()`);
  const lastOrder = cf.orders.get(cf.creates.at(-1));
  ok('security: an instalment plan is refused (400 bad-plan): full payment only', tamper[4] === 400 && tamper[5] === 'bad-plan', tamper);
  ok('security: a wrong expected amount is refused (409 amount-changed) before any order', tamper[0] === 409 && tamper[1] === 'amount-changed', tamper);
  ok('security: amounts sent by the browser are ignored — the gateway order is ₹7,999', tamper[2] === 200 && lastOrder.order_amount === 7999, { tamper, amount: lastOrder.order_amount });
  const forged = await webhook('PAYMENT_SUCCESS_WEBHOOK', lastOrder.order_id, { secret: 'not-the-secret' });
  ok('security: a webhook with a wrong signature is refused (401) and changes nothing',
    forged.status === 401 && (await row('SELECT status FROM live_enrolments WHERE ref = ?1', tamper[3])).status === 'pending', forged);
  const unpaid = await webhook('PAYMENT_SUCCESS_WEBHOOK', lastOrder.order_id);
  ok('security: a correctly signed "success" for an order Cashfree still reports unpaid does not enrol',
    unpaid.status === 503 && (await row('SELECT status FROM live_enrolments WHERE ref = ?1', tamper[3])).status === 'pending', unpaid);

  ok('no JavaScript errors on any page', pageErrors.length === 0, pageErrors);
  clearTimeout(watchdog); ws.close(); proc.kill();
  const failed = results.filter(([c]) => !c).length;
  console.log(`\n[payments-demo] ${results.length - failed}/${results.length} checks passed · screenshots: ${OUT}`);
  if (failed) process.exitCode = 1;
}
