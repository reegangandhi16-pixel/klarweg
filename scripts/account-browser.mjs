/* ============================================================
   MY ACCOUNT · headless browser checks
   ------------------------------------------------------------
   Real headless Chrome against a local server that serves the repo
   (read-only) AND runs the real klarweg-access Worker in-process under
   /api — the same shape as production (klarweg.in/api/* → Worker), with
   an in-memory D1 (real schema + every migration). Hermetic: every other
   host resolves to nothing; no payment provider or email is reached.

   Covers, at desktop (1280×900) and phone (375×812) sizes:
     sign in through the real form → redesigned account page
     profile header (name, email, initials, member + focus chips)
     learning overview from the account's /progress rows (resume, stats,
       per-level counts), empty state for a new account
     membership: access with expiry, paid purchases, "Unlock everything"
       in the CTA green and hidden for Lifetime owners; checkout opens
     edit profile: validation, cancel discards, save name + level + photo,
       persists after reload and for a second sign-in (another device),
       header name follows, remove photo
     change password (wrong current, success, old password refused,
       other session signed out), Google-only account (no password form,
       "Verified by Google"), account deletion (switch on), sign out
     a Worker without /account (pre-deploy) → no Edit button, no errors
     homepage Listen + Story "Play conversation" in the dark-green accent
     no horizontal scroll, no coral/orange, no page errors
   Screenshots go to SHOTS_DIR (default: <os tmp>/kw-account-shots).

   Usage:  npm run test:account:browser
   Env:    CHROME=<binary>   CHROME_ARGS="--no-sandbox"   SHOTS_DIR=<dir>
   ============================================================ */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../access/worker/src/index.js';
import { createD1 } from '../access/worker/test/d1-sqlite.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WORKER_DIR = path.join(ROOT, 'access', 'worker');
const CHROME = process.env.CHROME || (process.platform === 'darwin'
  ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  : 'google-chrome');
const CHROME_ARGS = (process.env.CHROME_ARGS || '').split(' ').filter(Boolean);
const SHOTS = path.resolve(process.env.SHOTS_DIR || path.join(os.tmpdir(), 'kw-account-shots'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
fs.mkdirSync(SHOTS, { recursive: true });

/* ---------- Worker under test ---------- */
const sent = [];
let env;
function freshEnv(overrides = {}) {
  env = {
    DB: createD1(WORKER_DIR),
    RATE_SALT: 'browser-test-salt',
    GOOGLE_CLIENT_ID: 'test-client.apps.googleusercontent.com',
    SITE_BASE_URL: 'https://klarweg.in',
    PASSWORD_RESET: 'on',
    CORS_EXTRA_ORIGINS: '',      // set once the port is known
    EMAIL: { async send(msg) { sent.push(msg); return { messageId: 'm' + sent.length }; } },
    ...overrides
  };
  env.CORS_EXTRA_ORIGINS = ORIGIN;
  return env;
}

/* ---------- server: static repo + /api → Worker ---------- */
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.json': 'application/json' };
let ORIGIN = '';
let clientIp = '198.51.100.10';
let preDeploy = false;   // simulate the live Worker before this change ships (unknown route → 404)
function startServer() {
  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, 'http://x');
    if (url.pathname.startsWith('/api/')) {
      if (preDeploy && (url.pathname === '/api/account' || url.pathname.startsWith('/api/account/'))) { res.writeHead(404, { 'Content-Type': 'application/json' }); res.end('{"ok":false,"error":"Not found"}'); return; }
      const chunks = [];
      for await (const c of req) chunks.push(c);
      const headers = new Headers();
      for (const [k, v] of Object.entries(req.headers)) if (typeof v === 'string') headers.set(k, v);
      headers.set('CF-Connecting-IP', clientIp);
      const pending = [];
      const r = await worker.fetch(new Request('https://klarweg-access.test' + url.pathname.slice(4) + url.search, {
        method: req.method, headers, body: ['GET', 'HEAD'].includes(req.method) ? undefined : Buffer.concat(chunks)
      }), env, { waitUntil: (p) => pending.push(p) });
      await Promise.all(pending);
      const out = {};
      r.headers.forEach((v, k) => { out[k] = v; });
      res.writeHead(r.status, out);
      res.end(Buffer.from(await r.arrayBuffer()));
      return;
    }
    if (url.pathname === '/kw-config.js') {   // point the site at this server's /api
      res.writeHead(200, { 'Content-Type': 'application/javascript', 'Cache-Control': 'no-store' });
      res.end(`window.KW_ACCESS_API = ${JSON.stringify(ORIGIN + '/api')}; window.KW_GOOGLE_CLIENT_ID = '';`);
      return;
    }
    let rel = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index.html';
    if (!path.extname(rel) && fs.existsSync(path.join(ROOT, rel + '.html'))) rel += '.html';   // Pages-style clean URLs
    const file = path.resolve(ROOT, rel);
    if (!file.startsWith(ROOT + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); res.end('not found'); return; }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((r) => server.listen(0, '127.0.0.1', () => r(server)));
}

/* ---------- Chrome over the DevTools protocol ---------- */
async function startChrome() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-account-'));
  const proc = spawn(CHROME, [...CHROME_ARGS, '--headless=new', '--mute-audio', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
    `--user-data-dir=${dir}`, '--remote-debugging-port=0',
    '--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE 127.0.0.1', 'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'] });
  let exited = null; let stderr = '';
  proc.stderr.on('data', (d) => { stderr = (stderr + d).slice(-2000); });
  proc.on('exit', (c, s) => { exited = s || c; });
  const portFile = path.join(dir, 'DevToolsActivePort');
  const readPort = () => { try { const p = fs.readFileSync(portFile, 'utf8').split('\n')[0]; return /^\d+$/.test(p) ? p : null; } catch { return null; } };
  const t0 = Date.now(); let port = null;
  while (!(port = readPort()) && exited === null && Date.now() - t0 < 30000) await sleep(100);
  if (!port) { proc.kill(); throw new Error(`Chrome did not start (exit ${exited}): ${stderr}`); }
  const page = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));
  let id = 0; const pend = new Map(); const handlers = [];
  ws.addEventListener('message', (m) => {
    const msg = JSON.parse(m.data);
    if (msg.id && pend.has(msg.id)) { const p = pend.get(msg.id); pend.delete(msg.id); msg.error ? p.rej(new Error(msg.error.message)) : p.res(msg.result); }
    else handlers.forEach((h) => h(msg));
  });
  const send = (method, params = {}) => new Promise((res, rej) => { const i = ++id; pend.set(i, { res, rej }); ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (expr) => {
    const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
    return r.result.value;
  };
  return { send, ev, handlers, close: () => { try { ws.close(); } catch {} proc.kill(); } };
}

/* ---------- checks ---------- */
const results = [];
function ok(name, cond, info = '') {
  results.push([cond ? 'PASS' : 'FAIL', name]);
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}${info ? '  ' + info : ''}`);
}

const server = await startServer();
ORIGIN = `http://127.0.0.1:${server.address().port}`;
const b = await startChrome();
const watchdog = setTimeout(() => { console.log('WATCHDOG: stopped'); b.close(); process.exit(2); }, 420000);
const pageErrors = [];
b.handlers.push((msg) => {
  if (msg.method === 'Runtime.exceptionThrown') pageErrors.push(msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text);
});
await b.send('Runtime.enable'); await b.send('Page.enable'); await b.send('Network.enable');

let viewport = { width: 1280, height: 900, mobile: false, tag: 'desktop' };
async function load(url, ready) {
  await b.send('Emulation.setDeviceMetricsOverride', { width: viewport.width, height: viewport.height, deviceScaleFactor: viewport.mobile ? 2 : 1, mobile: viewport.mobile });
  await b.send('Page.navigate', { url: 'about:blank' }); await sleep(80);
  await b.send('Page.navigate', { url });
  await waitFor(ready || 'document.readyState==="complete"');
  await sleep(150);
}
async function waitFor(expr, ms = 6000) {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) { if (await b.ev(`!!(${expr})`).catch(() => false)) return true; await sleep(60); }
  return false;
}
const visible = (sel) => `(function(){var e=document.querySelector(${JSON.stringify(sel)});if(!e)return false;var r=e.getBoundingClientRect();return !e.closest('[hidden]')&&r.width>0&&r.height>0;})()`;
async function shot(name) {
  const metrics = await b.send('Page.getLayoutMetrics');
  const h = Math.ceil(Math.max(viewport.height, metrics.cssContentSize ? metrics.cssContentSize.height : metrics.contentSize.height));
  const r = await b.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: { x: 0, y: 0, width: viewport.width, height: h, scale: 1 } });
  fs.writeFileSync(path.join(SHOTS, `${viewport.tag}-${name}.png`), Buffer.from(r.data, 'base64'));
}
async function type(sel, text) {
  await b.ev(`(function(){var e=document.querySelector(${JSON.stringify(sel)});e.focus();e.value='';})()`);
  await b.send('Input.insertText', { text });
}
const click = (sel) => b.ev(`document.querySelector(${JSON.stringify(sel)}).click()`);
const noHScroll = () => b.ev('document.documentElement.scrollWidth <= window.innerWidth');
const noCoral = () => b.ev(`(function(){var bad=/rgb\\(229, 90, 63\\)|rgb\\(153, 60, 29\\)|rgb\\(234, 88, 12\\)/;var all=document.querySelectorAll('body *');for(var i=0;i<all.length;i++){var s=getComputedStyle(all[i]);if(bad.test(s.color)||bad.test(s.backgroundColor)||bad.test(s.borderTopColor))return all[i].tagName+'#'+all[i].id;}return true;})()`);

const A = (p) => `${ORIGIN}/account/${p}`;

/* ---------- test data through the real Worker ---------- */
async function api(method, p, { cookie, body } = {}) {
  const h = { origin: ORIGIN, 'CF-Connecting-IP': '203.0.113.' + Math.floor(Math.random() * 200) };
  if (cookie) h.cookie = cookie;
  if (body !== undefined) h['content-type'] = 'application/json';
  const r = await worker.fetch(new Request('https://klarweg-access.test' + p, { method, headers: h, body: body === undefined ? undefined : JSON.stringify(body) }), env, { waitUntil() {} });
  let json = null; try { json = await r.clone().json(); } catch {}
  return { status: r.status, json, cookie: (r.headers.get('set-cookie') || '').split(';')[0] };
}
async function makeUser(email, password, name) {
  const r = await api('POST', '/auth/signup', { body: { email, password, name } });
  if (r.status !== 201) throw new Error('signup failed ' + r.status);
  return { email, password, cookie: r.cookie, id: r.json.user.id };
}
const nowSec = () => Math.floor(Date.now() / 1000);
async function grant(userId, product, { paid = 0, expires = null } = {}) {
  env.DB.raw.prepare('INSERT INTO user_entitlements (user_id, product_id, granted_at, expires_at) VALUES (?, ?, ?, ?)').run(userId, product, nowSec(), expires);
  if (paid) env.DB.raw.prepare("INSERT INTO orders (id, user_id, cashfree_order_id, amount_paise, status, product_id, created_at, updated_at) VALUES (?, ?, ?, ?, 'paid', ?, ?, ?)")
    .run('ord_' + Math.random().toString(16).slice(2), userId, 'cf_' + Math.random().toString(16).slice(2), paid, product, nowSec(), nowSec());
}
async function signInUI(email, password) {
  await b.send('Network.clearBrowserCookies');
  await load(A('index.html?mode=login'), visible('#login-email'));
  await type('#login-email', email);
  await type('#login-password', password);
  await click('#login-submit');
  return waitFor(visible('#view-account') + ` && !document.getElementById('learn-loading').offsetParent`, 8000);
}
const text = (sel) => b.ev(`(document.querySelector(${JSON.stringify(sel)})||{}).textContent||''`);
const bg = (sel) => b.ev(`getComputedStyle(document.querySelector(${JSON.stringify(sel)})).backgroundColor`);
async function setFile(sel, file) {
  const { root } = await b.send('DOM.getDocument', { depth: -1 });
  const { nodeId } = await b.send('DOM.querySelector', { nodeId: root.nodeId, selector: sel });
  await b.send('DOM.setFileInputFiles', { nodeId, files: [file] });
}
const PHOTO = path.join(ROOT, 'og-image.png');
const GREEN = 'rgb(31, 168, 75)';
const ACCENT = 'rgb(31, 78, 74)';

for (const vp of [{ width: 1280, height: 900, mobile: false, tag: 'desktop' }, { width: 375, height: 812, mobile: true, tag: 'mobile' }]) {
  viewport = vp;
  const T = `[${vp.tag}] `;

  /* homepage colours (item 1) */
  freshEnv();
  await load(`${ORIGIN}/index.html`, '!!document.getElementById("story-play-btn")');
  ok(T + 'home: Story "Play conversation" in the dark-green accent', (await bg('#story-play-btn')) === ACCENT, await bg('#story-play-btn'));
  ok(T + 'home: hero "Listen" still in the dark-green accent', (await bg('#hero-demo .sp-play')) === ACCENT);
  ok(T + 'home: white text on the Story button', (await b.ev(`getComputedStyle(document.getElementById('story-play-btn')).color`)) === 'rgb(255, 255, 255)');
  await b.ev(`document.getElementById('story-play-btn').scrollIntoView({block:'center'})`); await sleep(1200);
  await b.ev(`(function(){for(var e=document.getElementById('story-dialogue-player');e&&e!==document.body;e=e.parentElement){e.style.opacity='1';e.style.visibility='visible';}})()`); await sleep(300);
  const box = await b.ev(`(function(){var r=document.getElementById('story-dialogue-player').getBoundingClientRect();return {x:Math.max(0,r.left-24),y:Math.max(0,r.top+window.scrollY-24),w:r.width+48,h:r.height+48};})()`);
  const cap = await b.send('Page.captureScreenshot', { format: 'png', clip: { x: box.x, y: box.y, width: Math.min(box.w, vp.width), height: box.h, scale: vp.mobile ? 2 : 1 } });
  fs.writeFileSync(path.join(SHOTS, `${vp.tag}-00-home-story-play.png`), Buffer.from(cap.data, 'base64'));

  /* a learner with A1 (paid), progress in A1 */
  const u = await makeUser(`asha.${vp.tag}@example.com`, 'first-pass-1', 'Asha Rao');
  await grant(u.id, 'A1', { paid: 99900, expires: nowSec() + 2 * 365 * 86400 });
  await api('POST', '/progress/a1-1-alphabet', { cookie: u.cookie, body: { record: { done: { story: true }, xpEarned: 160, xpMax: 160 } } });
  await api('POST', '/progress/a1-2-begruessungen', { cookie: u.cookie, body: { record: { done: { story: true }, xpEarned: 160, xpMax: 160 } } });
  await api('POST', '/progress/a1-3-nominativ', { cookie: u.cookie, body: { record: { done: { story: true }, xpEarned: 72, xpMax: 160 } } });

  ok(T + 'sign in through the form → account page', await signInUI(u.email, u.password));
  ok(T + 'header: name + email', (await text('#acct-name')) === 'Asha Rao' && (await text('#acct-email')) === u.email);
  ok(T + 'header: initials avatar "AR"', (await text('#acct-initial')) === 'AR');
  ok(T + 'header: member chip shows A1 access', /A1 access/.test(await text('#chip-member')));
  ok(T + 'header: Edit profile button visible', await b.ev(visible('#btn-edit')));
  ok(T + 'learning: resume = A1 · Chapter 3, 45%', (await text('#resume-t')) === 'A1 · Chapter 3' && /45% complete/.test(await text('#resume-s')));
  ok(T + 'learning: resume links to the chapter', /\/chapter\/chapter-a1-3-nominativ\.html$/.test(await b.ev(`document.getElementById('resume-link').href`)));
  ok(T + 'learning: 2 completed · 1 in progress', (await text('#stat-done')) === '2' && (await text('#stat-prog')) === '1');
  ok(T + 'courses: A1 card shows 2 of 47', /2 of 47 chapters completed · 1 in progress/.test(await text('#acct-levels .lv.owned')));
  ok(T + 'membership: access row with expiry', /A1 · Beginner/.test(await text('#access-list')) && /Active until/.test(await text('#access-list')));
  ok(T + 'membership: purchase row ₹999', /₹999/.test(await text('#purchase-list')));
  ok(T + 'membership: "Unlock everything" visible in the CTA green', await b.ev(visible('#acct-lifetime-offer')) && (await bg('#acct-lifetime-offer [data-kw-buy="LIFETIME"]')) === GREEN);
  ok(T + 'membership: CTA text white (contrast)', (await b.ev(`getComputedStyle(document.querySelector('#acct-lifetime-offer [data-kw-buy]')).color`)) === 'rgb(255, 255, 255)');
  ok(T + 'security: change password + reset link offered', await b.ev(visible('#btn-pw')) && await b.ev(visible('#link-reset')));
  ok(T + 'security: no "Verified by Google" for a password account', !(await b.ev(visible('#sec-verified'))));
  ok(T + 'security: deletion switched off → contact link, no delete button', !(await b.ev(visible('#btn-delete'))) && /Contact us/.test(await text('#delete-d')));
  ok(T + 'account: no horizontal scroll', await noHScroll());
  ok(T + 'account: no coral/orange anywhere', (await noCoral()) === true, String(await noCoral()));
  await shot('01-account-overview');

  /* checkout opens from "Unlock everything" (behaviour unchanged) */
  await click('#acct-lifetime-offer [data-kw-buy="LIFETIME"]');
  ok(T + 'checkout: dialog opens from "Unlock everything"', await waitFor(`!!(function(){var s=document.querySelector('.kwco-scrim');return s&&getComputedStyle(s).display!=='none'&&s.querySelector('.kwco-card').textContent.length>0;})()`, 4000));
  await sleep(300);
  await shot('02-checkout-from-unlock');
  ok(T + 'checkout: dialog has no coral', (await noCoral()) === true, String(await noCoral()));
  await b.ev(`document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}))`);
  await b.ev(`(function(){var c=document.querySelector('[data-kwco-close], .kwco-close');if(c)c.click();})()`);
  await sleep(300);

  /* edit profile */
  await click('#btn-edit');
  ok(T + 'edit: panel opens with current values', await waitFor(visible('#edit-panel')) && (await b.ev(`document.getElementById('profile-name').value`)) === 'Asha Rao');
  ok(T + 'edit: email shown read-only', await b.ev(`document.getElementById('profile-email').readOnly && document.getElementById('profile-email').value === ${JSON.stringify(u.email)}`));
  await shot('03-edit-open');
  await type('#profile-name', 'A');
  await click('#profile-save');
  ok(T + 'edit: 1-character name → field error, nothing sent', await waitFor(`document.getElementById('f-profile-name').classList.contains('invalid')`));
  await shot('04-edit-invalid');
  await type('#profile-name', 'Discard Me');
  await click('#profile-cancel');
  ok(T + 'edit: cancel closes without saving', !(await b.ev(visible('#edit-panel'))) && (await text('#acct-name')) === 'Asha Rao');
  ok(T + 'edit: cancel returns focus to Edit profile', await b.ev(`document.activeElement && document.activeElement.id === 'btn-edit'`));
  await click('#btn-edit');
  ok(T + 'edit: reopened form shows the saved name again', (await b.ev(`document.getElementById('profile-name').value`)) === 'Asha Rao');
  await type('#profile-name', 'Asha Verma');
  await click('input[name="level"][value="B1"]');
  await setFile('#photo-input', PHOTO);
  ok(T + 'edit: photo preview shown', await waitFor(`!document.getElementById('edit-avatar-img').hidden && document.getElementById('edit-avatar-img').src.startsWith('data:image/jpeg')`));
  await shot('05-edit-filled');
  await click('#profile-save');
  ok(T + 'edit: saved → success message, panel closed', await waitFor(visible('#profile-saved')) && !(await b.ev(visible('#edit-panel'))));
  ok(T + 'edit: header shows new name, B1 chip and photo', (await text('#acct-name')) === 'Asha Verma' && /Focus level B1/.test(await text('#chip-level')) && await b.ev(`!document.getElementById('acct-avatar-img').hidden`));
  await shot('06-profile-saved');
  const stored = (await api('GET', '/account', { cookie: u.cookie })).json.profile;
  ok(T + 'persisted in D1 (name, level, ≤ 96 KB JPEG photo)', stored.name === 'Asha Verma' && stored.preferredLevel === 'B1' && /^data:image\/jpeg;base64,/.test(stored.avatar) && stored.avatar.length * 0.75 < 96 * 1024);
  await load(A('index.html'), visible('#view-account') + ` && document.getElementById('acct-name').textContent === 'Asha Verma'`);
  ok(T + 'persists after reload', (await text('#acct-name')) === 'Asha Verma' && await b.ev(`!document.getElementById('acct-avatar-img').hidden`));
  const device2 = await api('POST', '/auth/login', { body: { email: u.email, password: u.password } });
  const d2 = (await api('GET', '/account', { cookie: device2.cookie })).json.profile;
  ok(T + 'persists for another sign-in (another device)', d2.name === 'Asha Verma' && d2.preferredLevel === 'B1' && !!d2.avatar);
  ok(T + 'site-wide name (/auth/me) updated', (await api('GET', '/auth/me', { cookie: device2.cookie })).json.user.name === 'Asha Verma');

  await click('#btn-edit');
  await click('#btn-photo-remove');
  await click('input[name="level"][value=""]');
  await click('#profile-save');
  await waitFor(visible('#profile-saved') + ` && document.getElementById('acct-avatar-img').hidden`);
  const afterRemove = (await api('GET', '/account', { cookie: u.cookie })).json.profile;
  ok(T + 'edit: remove photo + clear level persisted', afterRemove.avatar === null && afterRemove.preferredLevel === null);
  ok(T + 'edit: initials back ("AV")', (await text('#acct-initial')) === 'AV');

  /* change password */
  await click('#btn-pw');
  ok(T + 'password: form opens', await waitFor(visible('#form-password')));
  await type('#password-current', 'not-my-pass');
  await type('#password-new', 'second-pass-2');
  await type('#password-confirm', 'second-pass-2');
  await click('#password-save');
  ok(T + 'password: wrong current → field error', await waitFor(`document.getElementById('f-password-current').classList.contains('invalid')`));
  await shot('07-password-wrong');
  await type('#password-current', 'first-pass-1');
  await type('#password-confirm', 'second-pass-X');
  await click('#password-save');
  ok(T + 'password: mismatch caught in the browser', await waitFor(`document.getElementById('f-password-confirm').classList.contains('invalid')`));
  await type('#password-confirm', 'second-pass-2');
  await click('#password-save');
  ok(T + 'password: success message', await waitFor(visible('#password-ok')));
  await shot('08-password-changed');
  ok(T + 'password: old password refused, new accepted', (await api('POST', '/auth/login', { body: { email: u.email, password: 'first-pass-1' } })).status === 401 &&
    (await api('POST', '/auth/login', { body: { email: u.email, password: 'second-pass-2' } })).status === 200);
  ok(T + 'password: the other device was signed out', (await api('GET', '/auth/me', { cookie: device2.cookie })).status === 401);
  ok(T + 'password: this device still signed in', await b.ev(`fetch(${JSON.stringify(ORIGIN + '/api/auth/me')},{credentials:'include'}).then(function(r){return r.status===200})`));

  /* sign out */
  await click('#btn-logout');
  ok(T + 'sign out → sign-in form', await waitFor(visible('#form-login')));

  /* new account: empty states */
  const fresh = await makeUser(`new.${vp.tag}@example.com`, 'fresh-pass-1', 'Ravi Kumar');
  await signInUI(fresh.email, fresh.password);
  ok(T + 'new account: empty learning state', await waitFor(visible('#learn-empty')));
  ok(T + 'new account: free plan + Unlock everything', /Free access/.test(await text('#plan-t')) && await b.ev(visible('#acct-lifetime-offer')));
  ok(T + 'new account: no access / purchase lists', !(await b.ev(visible('#access-wrap'))) && !(await b.ev(visible('#purchases-wrap'))));
  await shot('09-new-account-empty');

  /* lifetime owner: no upgrade CTA */
  const life = await makeUser(`life.${vp.tag}@example.com`, 'life-pass-1', 'Meera Iyer');
  await grant(life.id, 'LIFETIME', { paid: 499900 });
  for (const l of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']) await grant(life.id, l);
  await signInUI(life.email, life.password);
  ok(T + 'lifetime: "Unlock everything" hidden', !(await b.ev(visible('#acct-lifetime-offer'))));
  ok(T + 'lifetime: no level unlock buttons', await b.ev(`document.querySelectorAll('#acct-levels [data-kw-buy]').length === 0`));
  ok(T + 'lifetime: plan + single access row', /Klarweg Lifetime/.test(await text('#plan-t')) && await b.ev(`document.querySelectorAll('#access-list li').length === 1`));
  await shot('10-lifetime');

  /* Google-only account */
  const gid = 'usr_g' + vp.tag;
  env.DB.raw.prepare('INSERT INTO users (id, email, name, google_sub, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)').run(gid, `g.${vp.tag}@gmail.com`, 'Gita Nair', 'sub-' + vp.tag, nowSec(), nowSec());
  const { createSessionToken } = await import('../access/worker/src/auth.js');
  const { hashSessionToken } = await import('../access/worker/src/sessions.js');
  const gtok = createSessionToken();
  env.DB.raw.prepare('INSERT INTO sessions (token_hash, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)').run(await hashSessionToken(gtok), gid, nowSec(), nowSec() + 86400);
  await b.send('Network.clearBrowserCookies');
  await b.send('Network.setCookie', { name: 'kw_session', value: gtok, url: ORIGIN + '/', httpOnly: true, secure: true, sameSite: 'None' });
  await load(A('index.html'), visible('#view-account') + ` && !document.getElementById('row-method').hidden`);
  ok(T + 'google: "Verified by Google" + Google sign-in method', await b.ev(visible('#sec-verified')) && /Google/.test(await text('#sec-method')));
  ok(T + 'google: no change-password form, explains Google manages it', !(await b.ev(visible('#btn-pw'))) && /Google account/.test(await text('#sec-password-d')));
  await shot('11-google-account');

  /* deletion switched on */
  freshEnv({ ACCOUNT_DELETION: 'on' });
  const del = await makeUser(`bye.${vp.tag}@example.com`, 'bye-pass-12', 'Dev Shah');
  await signInUI(del.email, del.password);
  ok(T + 'delete: button shown when the Worker enables it', await b.ev(visible('#btn-delete')));
  await click('#btn-delete');
  await type('#delete-email', 'wrong@example.com');
  await click('#delete-submit');
  ok(T + 'delete: wrong email → field error', await waitFor(`document.getElementById('f-delete-email').classList.contains('invalid')`));
  await type('#delete-email', del.email);
  await type('#delete-password', 'bye-pass-12');
  await shot('12-delete-confirm');
  await click('#delete-submit');
  ok(T + 'delete: back to sign-in with a confirmation', await waitFor(visible('#login-ok')) && /deleted/.test(await text('#login-ok')));
  ok(T + 'delete: account is gone', (await api('POST', '/auth/login', { body: { email: del.email, password: 'bye-pass-12' } })).status === 401);

  /* Worker without /account (pages published before the Worker deploy) */
  freshEnv();
  const pre = await makeUser(`pre.${vp.tag}@example.com`, 'pre-pass-12', 'Neha Joshi');
  preDeploy = true;
  await signInUI(pre.email, pre.password);
  await sleep(400);
  ok(T + 'pre-deploy: page works from /auth/me alone', (await text('#acct-name')) === 'Neha Joshi');
  ok(T + 'pre-deploy: no Edit profile / password / delete buttons', !(await b.ev(visible('#btn-edit'))) && !(await b.ev(visible('#btn-pw'))) && !(await b.ev(visible('#btn-delete'))));
  ok(T + 'pre-deploy: Unlock everything still offered', await b.ev(visible('#acct-lifetime-offer')));
  await shot('13-pre-deploy-worker');
  preDeploy = false;

  /* signed-out page */
  await b.send('Network.clearBrowserCookies');
  await load(A('index.html'), visible('#form-login'));
  ok(T + 'sign-in page: no coral/orange', (await noCoral()) === true, String(await noCoral()));
  ok(T + 'sign-in page: no horizontal scroll', await noHScroll());
  await shot('14-sign-in');
}

ok('no uncaught page errors', pageErrors.length === 0, pageErrors.slice(0, 3).join(' | '));
clearTimeout(watchdog);
b.close();
server.close();
const failed = results.filter((r) => r[0] === 'FAIL');
console.log(`\n${results.length - failed.length}/${results.length} checks passed. Screenshots: ${SHOTS}`);
process.exit(failed.length ? 1 : 0);
