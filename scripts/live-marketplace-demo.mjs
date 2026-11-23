/* ============================================================
   LIVE TEACHER MARKETPLACE · local preview and end-to-end check
   ------------------------------------------------------------
   Runs the REAL access Worker (access/worker/src) in Node against an
   in-memory D1 (schema + every migration) and serves the REAL
   live-classes.html, My Account and admin pages. Cashfree is replaced by
   a local mock order API plus a hosted-checkout page plainly labelled
   "MOCK CASHFREE · LOCAL ONLY · NO REAL PAYMENT", whose buttons send
   webhooks signed exactly as Cashfree signs them.

   SAMPLE DATA, IN MEMORY ONLY: demo slots and batch dates below exist only
   for this preview (the page shows a "LOCAL PREVIEW" banner). Nothing is
   written to any file, Cloudflare, Cashfree or any other host; the
   switches in live-classes-data.js and wrangler.toml stay off.
   /prod/live-classes.html serves the page exactly as committed (payments
   off) to show the production default.

   Usage:
     node scripts/live-marketplace-demo.mjs           interactive (prints URLs)
     node scripts/live-marketplace-demo.mjs --e2e [--out=<dir>]
         headless Chrome runs every flow, asserts on the database and saves
         desktop + mobile screenshots (default: a new temp directory).
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
const OUT = (process.argv.find((a) => a.startsWith('--out=')) || '').slice(6) || fs.mkdtempSync(path.join(os.tmpdir(), 'kw-marketplace-'));
fs.mkdirSync(OUT, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* clock: Friday 20 November 2026, 10:00 IST, running forward */
const REAL_NOW = Date.now;
const T0 = REAL_NOW();
const START = Date.UTC(2026, 10, 20, 10, 0) - 330 * 60000;
Date.now = () => START + (REAL_NOW() - T0);

/* ---------- Cashfree mock ---------- */
const realFetch = globalThis.fetch;
const cf = { orders: new Map(), creates: [] };
globalThis.fetch = async (input, init = {}) => {
  const url = typeof input === 'string' ? input : input.url;
  const m = url.match(/^https:\/\/(sandbox|api)\.cashfree\.com\/pg\/orders(?:\/([^/]+))?$/);
  if (!m) {
    if (/^http:\/\/(localhost|127\.0\.0\.1)[:/]/.test(url)) return realFetch(input, init);
    throw new Error('preview: blocked network call to ' + url);
  }
  if (m[1] !== 'sandbox') throw new Error('preview: refused a production Cashfree call');
  if ((init.method || 'GET').toUpperCase() === 'POST' && !m[2]) {
    const b = JSON.parse(init.body);
    const o = { order_id: b.order_id, order_amount: b.order_amount, order_currency: 'INR', order_status: 'ACTIVE', payment_session_id: 'session_' + b.order_id, return_url: b.order_meta.return_url, payments: 0 };
    cf.orders.set(b.order_id, o); cf.creates.push(b.order_id);
    return Response.json({ order_id: o.order_id, order_amount: o.order_amount, order_currency: 'INR', payment_session_id: o.payment_session_id, order_status: 'ACTIVE', order_expiry_time: b.order_expiry_time });
  }
  const o = cf.orders.get(decodeURIComponent(m[2]));
  if (!o) return Response.json({ message: 'order not found' }, { status: 404 });
  return Response.json({ order_id: o.order_id, order_amount: o.order_amount, order_currency: 'INR', order_status: o.order_status });
};
const bySession = (s) => [...cf.orders.values()].find((o) => o.payment_session_id === s);

/* ---------- the real Worker ---------- */
const { default: worker } = await import('../access/worker/src/index.js');
const { createD1 } = await import('../access/worker/test/d1-sqlite.mjs');
const SECRET = 'local-preview-webhook-secret';
const servers = [];
const listen = (handler, port = 0) => new Promise((r) => { const s = http.createServer(handler); servers.push(s); s.listen(port, '127.0.0.1', () => r(s.address().port)); });
const guarded = (fn) => (req, res) => fn(req, res).catch((e) => { console.error('preview server error:', req.method, req.url, e); if (!res.headersSent) res.writeHead(500); res.end(String(e && e.message)); });
const API_PORT = await listen(guarded(toWorker), Number(process.env.API_PORT || 0));
const SITE_PORT = await listen(guarded(site), Number(process.env.SITE_PORT || 0));
const API = `http://localhost:${API_PORT}`;
const SITE = `http://localhost:${SITE_PORT}`;
const ADMIN_EMAIL = 'admin-preview@example.test';
const env = {
  DB: createD1(WORKER_DIR),
  CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST_LOCAL_PREVIEW', CASHFREE_SECRET_KEY: SECRET,
  GOOGLE_CLIENT_ID: 'local-preview.apps.googleusercontent.com', RATE_SALT: 'local-preview',
  DEMO_BOOKING: 'sandbox', ENROL_PAYMENTS: 'sandbox', ENROL_CONSULT_CREDIT: 'course-fee',
  CONSULT_JOIN_LINKS: JSON.stringify({ 'reegan-gandhi': 'https://meet.google.com/abc-defg-hij' }),
  LIVE_ADMIN_EMAILS: ADMIN_EMAIL, CORS_EXTRA_ORIGINS: SITE,
  TOTP_ENC_KEY: Buffer.alloc(32, 7).toString('base64')   // local preview only
};

/* ---------- SAMPLE schedule (in memory only) ---------- */
const now = Math.floor(Date.now() / 1000);
const slot = (d, t) => env.DB.prepare("INSERT INTO demo_slots (teacher_id, date, slot_start, status, updated_by, updated_at) VALUES ('reegan-gandhi', ?1, ?2, 'open', 'preview', ?3)").bind(d, t, now).run();
for (const [d, times] of [['2026-11-22', ['17:00', '17:20', '18:00', '18:20']], ['2026-11-27', ['16:20', '16:40', '19:00']], ['2026-11-29', ['18:00', '18:20', '20:00']], ['2026-12-04', ['17:40']]]) for (const t of times) await slot(d, t);
const batch = (id, course, level, format, s, e, sched, cap, status, note) => env.DB.prepare(
  `INSERT INTO live_batches (id, course_id, teacher_id, level, format, start_date, end_date, schedule, capacity, status, fulfilment_note, approved_by, approved_at, created_at, updated_at)
   VALUES (?1, ?2, 'reegan-gandhi', ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?12, ?12)`
).bind(id, course, level, format, s, e, sched, cap, status, note, status === 'open' ? 'preview' : null, now).run();
const B = (n) => `bat_00000000-0000-4000-8000-${String(n).padStart(12, '0')}`;
await batch(B(1), 'live-reegan-gandhi-a1-group', 'A1', 'group', '2027-01-11', '2027-04-02', 'Mon, Wed, Fri · 7:30–9:00 PM IST', 8, 'open', '36 live classes on Google Meet · class notes and worksheets · written homework feedback');
await batch(B(2), 'live-reegan-gandhi-a1-individual', 'A1', 'individual', '2027-01-04', '2027-03-26', 'Scheduled with your teacher · 24 lessons of 60 minutes', 1, 'open', '24 one-to-one lessons on Google Meet');
await batch(B(3), 'live-reegan-gandhi-b2-individual', 'B2', 'individual', '2027-01-04', '2027-04-30', 'Scheduled with your teacher', 1, 'open', null);
await env.DB.prepare(`INSERT INTO live_enrolments (id, ref, user_id, course_id, batch, status, total_paise, credit_paise, hold_expires_at, created_at, updated_at, batch_id)
  VALUES ('enr_preview-full', 'KWE-PREVIEW2', 'preview-user', 'live-reegan-gandhi-b2-individual', ?1, 'enrolled', 2000000, 0, 0, 0, 0, ?1)`).bind(B(3)).run();

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
async function webhook(type, orderId) {
  const o = cf.orders.get(orderId);
  const payload = { type, data: { order: { order_id: orderId, order_amount: o.order_amount }, payment: { cf_payment_id: 'mockpay_' + orderId.slice(-6) + '_' + o.payments, payment_status: type === 'PAYMENT_SUCCESS_WEBHOOK' ? 'SUCCESS' : 'FAILED' } } };
  const raw = JSON.stringify(payload), ts = String(Math.floor(Date.now() / 1000));
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = Buffer.from(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(ts + raw))).toString('base64');
  await worker.fetch(new Request(API + '/webhooks/cashfree', { method: 'POST', headers: { 'content-type': 'application/json', 'x-webhook-timestamp': ts, 'x-webhook-signature': sig }, body: raw }), env, { waitUntil() {} });
}

/* ---------- the site ---------- */
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json', '.ico': 'image/x-icon', '.webp': 'image/webp' };
const PREVIEW_CONFIG = `window.KW_ACCESS_API = ${JSON.stringify(API)};
window.Cashfree = function (opts) { return { checkout: function (o) {
  location.href = '/__mock_cashfree/pay?session=' + encodeURIComponent(o.paymentSessionId);
  return new Promise(function () {});
} }; };`;
const BANNER = '<div style="position:relative;z-index:200;background:#3D2F73;color:#fff;font:600 12px/1.4 Inter,system-ui,sans-serif;letter-spacing:.04em;text-align:center;padding:8px 16px">LOCAL PREVIEW · MOCK CASHFREE (no real payment) · sample batch dates and demo times, not real</div>';
function previewData() {
  let s = fs.readFileSync(path.join(ROOT, 'live-classes-data.js'), 'utf8');
  for (const k of ['demoBookingEnabled', 'courseCheckoutEnabled']) {
    if (new RegExp(`${k}: true`).test(s)) continue;
    const re = new RegExp(`(${k}: )false`);
    if (!re.test(s)) throw new Error('preview: data edit did not apply: ' + k);
    s = s.replace(re, '$1true');
  }
  return s;
}
const MOCK_CSS = 'body{font:16px/1.5 system-ui,sans-serif;margin:0;background:#F4F5F7;color:#111}.bar{background:#3D2F73;color:#fff;padding:10px 16px;font-weight:700;letter-spacing:.04em;text-align:center}'
  + '.box{max-width:440px;margin:32px auto;background:#fff;border-radius:14px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,.08)}h1{font-size:20px;margin:0 0 4px}.amt{font-size:34px;font-weight:800;margin:12px 0}'
  + 'code{font-size:12px;word-break:break-all}a.b{display:block;text-align:center;padding:12px;border-radius:10px;margin:10px 0 0;text-decoration:none;font-weight:600;border:1px solid #ccd;color:#111}a.pay{background:#1F4E4A;color:#fff;border-color:#1F4E4A}';
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
${opt('paid', 'Pay (success)', 'pay')}${opt('failed', 'Payment fails (bank declined)')}</div>`);
  }
  if (u.pathname === '/__mock_cashfree/complete') {
    const o = bySession(u.searchParams.get('session'));
    if (!o) { res.writeHead(404); return res.end('unknown session'); }
    if (u.searchParams.get('outcome') === 'paid') { o.order_status = 'PAID'; o.payments++; await webhook('PAYMENT_SUCCESS_WEBHOOK', o.order_id); }
    else await webhook('PAYMENT_FAILED_WEBHOOK', o.order_id);
    res.writeHead(303, { location: o.return_url.replace(/^https:\/\/[^/]+(\/klarweg)?/, SITE) });
    return res.end();
  }
  const prod = u.pathname.startsWith('/prod/');
  const rel = decodeURIComponent(prod ? u.pathname.slice(5) : u.pathname).replace(/^\/+/, '') || 'index.html';
  if (rel.endsWith('kw-config.js')) { res.writeHead(200, { 'content-type': TYPES['.js'], 'cache-control': 'no-store' }); return res.end(PREVIEW_CONFIG); }
  if (rel === 'live-classes-data.js' && !prod) { res.writeHead(200, { 'content-type': TYPES['.js'], 'cache-control': 'no-store' }); return res.end(previewData()); }
  const file = path.resolve(ROOT, rel);
  if (!file.startsWith(ROOT + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); return res.end('not found'); }
  if (file.endsWith('.html')) {
    let html = fs.readFileSync(file, 'utf8');
    html = html.replace(/<body([^>]*)>/, `<body$1>${prod ? BANNER.replace(/LOCAL PREVIEW[^<]*/, 'LOCAL PREVIEW · PRODUCTION DEFAULT · payments switched off') : BANNER}`);
    res.writeHead(200, { 'content-type': TYPES['.html'], 'cache-control': 'no-store' });
    return res.end(html);
  }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
}

if (!E2E) {
  console.log(`Live marketplace preview (MOCK Cashfree, in-memory database, sample schedule)
  Marketplace:          ${SITE}/live-classes.html
  Production default:   ${SITE}/prod/live-classes.html
  My Account:           ${SITE}/account/index.html
  Admin:                ${SITE}/live-admin.html   (sign up as ${ADMIN_EMAIL}, then set up 2FA on the page)
Ctrl+C to stop.`);
} else {
  await runE2E().catch((e) => { console.error(e); process.exitCode = 1; });
  servers.forEach((s) => s.close());
  process.exit();
}

/* ===================================================================== */
async function runE2E() {
  const CHROME = process.env.CHROME || (process.platform === 'darwin' ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' : 'google-chrome');
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-mk-chrome-'));
  const proc = spawn(CHROME, [...(process.env.CHROME_ARGS || '').split(' ').filter(Boolean), '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', '--hide-scrollbars',
    `--user-data-dir=${dir}`, '--remote-debugging-port=0', '--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE localhost, EXCLUDE 127.0.0.1', 'about:blank'], { stdio: 'ignore' });
  const watchdog = setTimeout(() => { console.log('WATCHDOG: stopped'); proc.kill(); process.exit(2); }, 480000);
  process.on('exit', () => { try { proc.kill(); } catch {} });
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
    const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
    return r.result.value;
  };
  await send('Runtime.enable'); await send('Page.enable');
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  const results = [];
  const ok = (name, cond, info = '') => { results.push([!!cond, name]); console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}${cond || info === '' ? '' : '  ' + JSON.stringify(info).slice(0, 400)}`); };
  const size = (width, height, mobile = false) => send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 2, mobile });
  async function waitFor(expr, ms = 15000) {
    const t = REAL_NOW();
    while (REAL_NOW() - t < ms) { if (await ev(`(()=>{try{return !!(${expr})}catch(e){return false}})()`).catch(() => false)) return true; await sleep(150); }
    return false;
  }
  /* about:blank first: a URL that differs only by its #hash would otherwise be a same-document navigation. */
  const go = async (url) => { await send('Page.navigate', { url: 'about:blank' }); await sleep(100); await send('Page.navigate', { url }); await waitFor('document.readyState === "complete" && location.href !== "about:blank"'); await sleep(700); };
  const text = (sel) => ev(`(document.querySelector(${JSON.stringify(sel)})||{}).innerText||''`);
  const click = (sel) => ev(`(()=>{const e=document.querySelector(${JSON.stringify(sel)});if(!e)return false;e.click();return true})()`);
  const setVal = (sel, v) => ev(`(()=>{const e=document.querySelector(${JSON.stringify(sel)});e.value=${JSON.stringify(v)};e.dispatchEvent(new Event('input',{bubbles:true}));return true})()`);
  let shot = 0;
  async function snap(name, sel, { full = false } = {}) {
    let clip;
    if (sel) {
      const r = await ev(`(()=>{const e=document.querySelector(${JSON.stringify(sel)});if(!e)return null;e.scrollIntoView({block:'start'});const b=e.getBoundingClientRect();return {y:b.top+scrollY,h:b.height,w:document.documentElement.clientWidth}})()`);
      await sleep(250);
      if (r) clip = { x: 0, y: Math.max(0, r.y - 8), width: r.w, height: Math.min(r.h + 16, 4000), scale: 1 };
    } else if (full) {
      const h = await ev('document.documentElement.scrollHeight'); const w = await ev('document.documentElement.clientWidth');
      clip = { x: 0, y: 0, width: w, height: Math.min(h, 12000), scale: 1 };
    }
    const { data } = await send('Page.captureScreenshot', clip ? { format: 'png', clip, captureBeyondViewport: true } : { format: 'png' });
    fs.writeFileSync(path.join(OUT, `${String(++shot).padStart(2, '0')}-${name}.png`), Buffer.from(data, 'base64'));
  }
  const overflow = () => ev('document.documentElement.scrollWidth - document.documentElement.clientWidth');
  const row = (sql, ...a) => env.DB.prepare(sql).bind(...a).first();
  async function signUp(email) {
    return ev(`(async()=>{const o={method:'POST',credentials:'include',headers:{'content-type':'application/json'}};
      const s=await fetch(${JSON.stringify(API)}+'/auth/signup',{...o,body:JSON.stringify({email:${JSON.stringify(email)},password:'local-preview-pass-9',name:'Asha Verma'})});
      return s.status})()`);
  }
  const PAGE = SITE + '/live-classes.html';

  /* ============ production default (payments off) ============ */
  await size(1440, 900);
  await go(SITE + '/prod/live-classes.html');
  ok('prod default: teachers render; the ₹100 demo stepper is open (owner go-live 2026-11-20)',
    await waitFor('document.querySelector(".mk-tcard") && document.querySelector("[data-d-date]")'));
  await snap('desktop-prod-default-demo-open', '#demo');
  await click('[data-choose="live-reegan-gandhi-a1-group"]');
  ok('prod default: checkout shows "To be announced" and the pay button is disabled', await waitFor('document.getElementById("checkout").open && /Enrolment opens soon/.test(document.getElementById("checkout-body").innerText) && document.getElementById("co-pay").disabled'));
  await snap('desktop-prod-default-checkout-tba');
  ok('prod default: no checkout order was created', cf.creates.length === 0);

  /* ============ marketplace, desktop ============ */
  await go(PAGE);
  ok('page: hero, one verified teacher card, ten "joining" teachers, eight courses', await waitFor('document.querySelectorAll(".mk-tcard").length === 1 && document.querySelectorAll("#joining-list li").length === 10 && document.querySelectorAll(".mk-ccard").length === 8'), await text('#filter-count'));
  ok('page: no orange/coral colour anywhere in the marketplace stylesheet', !/#E55A3F|#C9371B|#F59E0B|#EA580C|#B45309|#CA8A04|\b(coral|orange|gold)\b/i.test(fs.readFileSync(path.join(ROOT, 'live-marketplace.css'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '')));
  await snap('desktop-hero');
  await snap('desktop-teachers', '#teachers');
  await snap('desktop-courses', '#courses');
  await ev('document.querySelector(\'input[name="f-level"][value="A2"]\').click()');
  await ev('document.querySelector(\'input[name="f-format"][value="individual"]\').click()');
  ok('filters: A2 + One-to-One → exactly one course, ₹15,000 after PERSONAL7000', await waitFor('document.querySelectorAll(".mk-ccard").length === 1 && /₹15,000/.test(document.querySelector(".mk-ccard").innerText) && /PERSONAL7000/.test(document.querySelector(".mk-ccard").innerText)'));
  await snap('desktop-filtered', '#filters');
  await click('[data-reset-filters]');
  ok('courses: A1 Group shows "Enrolment open · 8 places left"; B2 One-to-One shows "Fully booked"; B1 shows "Schedule to be announced"',
    await waitFor('/8 places left/.test(document.querySelector(\'[data-course="live-reegan-gandhi-a1-group"]\').innerText) && /Fully booked/.test(document.querySelector(\'[data-course="live-reegan-gandhi-b2-individual"]\').innerText) && /To be announced/.test(document.querySelector(\'[data-course="live-reegan-gandhi-b1-group"]\').innerText)'));

  /* signed out checkout */
  await click('[data-choose="live-reegan-gandhi-a1-group"]');
  ok('checkout (signed out): sign-in prompt, original ₹16,000, pay disabled', await waitFor('document.getElementById("checkout").open && /Sign in or create account/.test(document.getElementById("checkout-body").innerText) && /₹16,000/.test(document.getElementById("checkout-body").innerText) && document.getElementById("co-pay").disabled'));
  await snap('desktop-checkout-signed-out');

  /* sign in */
  ok('account: learner signs up (in-memory)', (await signUp('asha@example.test')) === 201);
  await go(PAGE + '?course=live-reegan-gandhi-a1-group#courses');
  ok('checkout: reopens the chosen course after sign-in and asks for a mobile number', await waitFor('document.getElementById("checkout").open && document.getElementById("co-phone")'), (await text('#checkout-body')).slice(-500));
  await setVal('#co-phone', '9876543210');
  await click('[data-save-phone]');
  await waitFor('!document.getElementById("co-phone")');
  await setVal('#co-coupon', 'PERSONAL7000');
  await ev('document.querySelector("[data-coupon-form]").requestSubmit()');
  ok('coupon: PERSONAL7000 on a Group course is refused with a clear message', await waitFor('/applies only to One-to-One/.test(document.getElementById("co-coupon-msg").innerText)'));
  await snap('desktop-checkout-wrong-coupon');
  await setVal('#co-coupon', 'group3000');
  await ev('document.querySelector("[data-coupon-form]").requestSubmit()');
  ok('coupon: GROUP3000 applied; server-confirmed final payable ₹13,000', await waitFor('/Amount confirmed by Klarweg/.test(document.getElementById("checkout-body").innerText) && document.querySelector("[data-final]").innerText === "₹13,000"'), await text('#checkout-body'));
  await click('#co-terms');
  await snap('desktop-checkout-ready');
  await click('#co-pay');
  ok('checkout: mock Cashfree shows a Worker-created order for ₹13,000', await waitFor('location.pathname === "/__mock_cashfree/pay"') && (await text('#mock-amount')) === '₹13,000');
  await snap('desktop-mock-cashfree-course');
  await click('#mock-paid');
  ok('checkout: after verified payment, "You are enrolled" with reference, coupon and amount paid', await waitFor('/You are enrolled/.test(document.getElementById("checkout-body").innerText)', 30000), await text('#checkout-body'));
  const eref = (await text('#checkout-body [data-ref]')).trim();
  const er = await row("SELECT e.status, e.coupon_code, e.original_paise, e.discount_paise, p.status AS pay, p.amount_paise FROM live_enrolments e JOIN live_payments p ON p.enrolment_id = e.id WHERE e.ref = ?1", eref);
  ok('database: enrolled, paid ₹13,000 with GROUP3000 (₹16,000 − ₹3,000)', er && er.status === 'enrolled' && er.pay === 'paid' && er.amount_paise === 1300000 && er.coupon_code === 'GROUP3000' && er.original_paise === 1600000 && er.discount_paise === 300000, er);
  await snap('desktop-enrolment-confirmed');

  /* TBA + full */
  await go(PAGE);
  await waitFor('document.querySelector(".mk-ccard")');
  await click('[data-choose="live-reegan-gandhi-b1-group"]');
  ok('checkout: a course without dates shows "To be announced" and cannot be paid', await waitFor('/Start date\\s*To be announced/.test(document.getElementById("checkout-body").innerText) && document.getElementById("co-pay").disabled'));
  await snap('desktop-checkout-tba');
  await ev('document.getElementById("checkout").close()');
  await click('[data-choose="live-reegan-gandhi-b2-individual"]');
  ok('checkout: a full batch says "fully booked" and cannot be paid', await waitFor('/fully booked/i.test(document.getElementById("checkout-body").innerText) && document.getElementById("co-pay").disabled'));
  await ev('document.getElementById("checkout").close()');

  /* ============ demo ============ */
  await go(PAGE + '#demo');
  ok('demo: only Friday/Sunday dates are offered; times come from the Worker', await waitFor('document.querySelectorAll("[data-d-date]").length >= 4') && await ev('[...document.querySelectorAll("[data-d-date]")].every(b=>[5,0].includes(new Date(b.dataset.dDate+"T12:00:00Z").getUTCDay()))'));
  await click('[data-d-date="2026-11-27"]');
  ok('demo: Friday 27 Nov offers exactly the opened times (4:20, 4:40, 7:00 PM)', await waitFor('[...document.querySelectorAll("[data-d-slot]")].map(b=>b.dataset.dSlot).join() === "16:20,16:40,19:00"'));
  await click('[data-d-slot="19:00"]');
  await setVal('#d-phone', '98765 43210');
  await click('#d-terms');
  await snap('desktop-demo-review', '#demo-panel');
  await click('#d-pay');
  ok('demo: mock Cashfree shows a Worker-created ₹100 order', await waitFor('location.pathname === "/__mock_cashfree/pay"') && (await text('#mock-amount')) === '₹100');
  const demoOrder = await text('#mock-order');
  await click('#mock-failed');
  ok('demo: a failed payment shows "Payment not completed yet" with Complete payment', await waitFor('/Payment not completed yet/.test(document.getElementById("demo-panel").innerText)', 40000), await text('#demo-panel'));
  ok('database: the failed demo stays pending (held), never confirmed', (await row("SELECT status FROM consult_bookings WHERE id = ?1", demoOrder)).status === 'pending');
  await snap('desktop-demo-payment-failed', '#demo-panel');
  await click('[data-resume]');
  ok('demo: Complete payment resumes the SAME ₹100 order (no second order)', await waitFor('location.pathname === "/__mock_cashfree/pay"') && (await text('#mock-order')) === demoOrder && cf.creates.filter((x) => x.startsWith('cons_')).length === 1);
  await click('#mock-paid');
  ok('demo: confirmed with reference after verified payment', await waitFor('/Your demo is booked/.test(document.getElementById("demo-panel").innerText)', 30000));
  ok('demo: the confirmation says the teacher emails the Meet link a day before, to the account email', await waitFor('/emails you the Google Meet link one day before/.test(document.querySelector("[data-link-by-email]").innerText) && /asha@example\\.test/.test(document.querySelector("[data-link-by-email]").innerText)'));
  ok('demo: no meeting link is shown on the page', !(await ev('!!document.querySelector(\'#demo-panel a[href*="meet.google.com"]\')')));
  await snap('desktop-demo-confirmed', '#demo-panel');
  const dref = (await text('#demo-panel [data-ref]')).trim();
  await click('[data-move]');
  await waitFor('document.querySelector("[data-to]")');
  await ev('document.querySelector(\'[data-to="2026-11-29|18:00"]\').click()');
  ok('demo: moved once to Sunday 29 Nov 6:00 PM; the move option is then gone', await waitFor('/Your demo is booked/.test(document.getElementById("demo-panel").innerText) && /6:00 PM/.test(document.getElementById("demo-panel").innerText) && !document.querySelector("[data-move]")'));
  const moved = await row('SELECT date, slot_start, reschedule_count FROM consult_bookings WHERE ref = ?1', dref);
  ok('database: reschedule recorded (2026-11-29 18:00, count 1)', moved.date === '2026-11-29' && moved.slot_start === '18:00' && moved.reschedule_count === 1, moved);

  /* ============ My Account ============ */
  await go(SITE + '/account/index.html#live');
  ok('My Account: Live classes lists the confirmed demo and the paid course', await waitFor('!document.getElementById("live").hidden && /₹100 demo class/i.test(document.getElementById("live").innerText) && /Enrolled · paid/.test(document.getElementById("live").innerText)', 20000), await text('#live'));
  await snap('desktop-my-account-live', '#live');

  /* ============ admin ============ */
  await ev(`fetch(${JSON.stringify(API)}+'/auth/logout',{method:'POST',credentials:'include'})`);
  ok('admin: admin account signs up (in-memory)', (await signUp(ADMIN_EMAIL)) === 201);
  await go(SITE + '/live-admin.html');
  ok('admin: an admin without two-factor is offered setup, not access', await waitFor('/Set up two-factor authentication/.test(document.body.innerText) && !/Demo bookings/.test(document.body.innerText)'));
  await click('#mfa-start');
  ok('admin: setup shows a QR code and the setup key', await waitFor('document.querySelector(".qr svg") && document.getElementById("mfa-secret")'));
  await snap('desktop-admin-2fa-setup', '#app');
  const { base32Decode, hotp, stepAt } = await import('../access/worker/src/totp.js');
  const secret = base32Decode(await text('#mfa-secret'));
  await setVal('#mfa-new-code', '000000');
  await ev('document.getElementById("mfa-new").requestSubmit()');
  ok('admin: a wrong code is refused with a clear message', await waitFor('/That code is not right/.test(document.getElementById("mfa-new-msg").innerText)'));
  await setVal('#mfa-new-code', await hotp(secret, stepAt(Math.floor(Date.now() / 1000))));
  await ev('document.getElementById("mfa-new").requestSubmit()');
  ok('admin: the right code turns two-factor on and shows recovery codes once', await waitFor('/Two-factor is on/.test(document.body.innerText) && document.querySelectorAll(".codes span").length >= 8'));
  await click('#mfa-saved'); await click('#mfa-done');
  ok('admin: overview shows teachers, coupons, slots, batches, the demo booking and the enrolment', await waitFor('/Demo bookings/.test(document.body.innerText) && document.body.innerText.includes(' + JSON.stringify(dref) + ') && document.body.innerText.includes(' + JSON.stringify(eref) + ')'));
  await env.DB.prepare("UPDATE sessions SET mfa_verified_at = ?1 WHERE user_id IN (SELECT id FROM users WHERE email = ?2)").bind(Math.floor(Date.now() / 1000) - 13 * 3600, ADMIN_EMAIL).run();
  await go(SITE + '/live-admin.html');
  ok('admin: after 12 hours the page asks for a fresh code', await waitFor('/Two-factor confirmation/.test(document.body.innerText)'));
  await setVal('#mfa-code', await hotp(secret, stepAt(Math.floor(Date.now() / 1000)) + 1));
  await ev('document.getElementById("mfa").requestSubmit()');
  ok('admin: a fresh code opens the admin again', await waitFor('/Demo bookings/.test(document.body.innerText)'));
  await snap('desktop-admin', null, { full: true });

  /* ============ mobile ============ */
  await size(390, 844, true);
  await ev(`fetch(${JSON.stringify(API)}+'/auth/logout',{method:'POST',credentials:'include'})`);
  await go(PAGE);
  await waitFor('document.querySelector(".mk-tcard")');
  ok('mobile: no horizontal overflow on the marketplace page', (await overflow()) <= 0, await overflow());
  await snap('mobile-hero');
  await snap('mobile-teacher', '#teachers');
  await snap('mobile-courses', '#course-grid');
  await snap('mobile-demo', '#demo');
  await click('[data-choose="live-reegan-gandhi-a2-individual"]');
  await waitFor('document.getElementById("checkout").open');
  await snap('mobile-checkout');
  ok('mobile: checkout fits the screen (no horizontal overflow inside the dialog)', await ev('document.getElementById("checkout").scrollWidth <= document.getElementById("checkout").clientWidth + 1'));
  await ev('document.getElementById("checkout").close()');
  await go(SITE + '/prod/live-classes.html');
  await waitFor('document.querySelector(".mk-tcard")');
  ok('mobile: production default has no overflow either', (await overflow()) <= 0);

  ok('no JavaScript errors on any page', pageErrors.length === 0, pageErrors);
  clearTimeout(watchdog);
  proc.kill();
  const failed = results.filter((r) => !r[0]);
  console.log(`\n${results.length - failed.length}/${results.length} checks passed · screenshots: ${OUT}`);
  if (failed.length) process.exitCode = 1;
}
