/* ============================================================
   PASSWORD RESET · headless browser checks
   ------------------------------------------------------------
   Real headless Chrome against a local server that serves the repo
   (read-only) AND runs the real klarweg-access Worker in-process under
   /api — the same shape as production (klarweg.in/api/* → Worker), with
   an in-memory D1 and a recording stand-in for the Cloudflare Email
   Service binding. Hermetic: every other host resolves to nothing, so no
   email is ever sent and no real service is reached.

   Covers, at desktop (1280×900) and phone (375×812) sizes:
     login page "Forgot password?" link (visible, ≥44 px target, navigates)
     forgot page: invalid email, unknown email, known email (same state),
       Google-only account, feature switched off, rate limit
     reset page: missing/garbage token, valid link (fragment removed from
       the address bar), visibility toggles, short/mismatched passwords,
       success → login with notice → sign in with the new password,
       used link, expired link
     no horizontal scroll, no page errors, no coral/orange on new pages
   Screenshots of every state go to SHOTS_DIR (default: <os tmp>/kw-password-reset-shots).

   Usage:  npm run test:password-reset:browser
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
const SHOTS = path.resolve(process.env.SHOTS_DIR || path.join(os.tmpdir(), 'kw-password-reset-shots'));
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
      if (preDeploy && url.pathname.startsWith('/api/auth/password/')) { res.writeHead(404, { 'Content-Type': 'application/json' }); res.end('{"ok":false,"error":"Not found"}'); return; }
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
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-pwreset-'));
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
const watchdog = setTimeout(() => { console.log('WATCHDOG: stopped'); b.close(); process.exit(2); }, 240000);
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
const tokenOf = (msg) => (msg.text.match(/#token=([A-Za-z0-9_-]{43})/) || [])[1];

async function signup(email, password) {
  const r = await worker.fetch(new Request('https://klarweg-access.test/auth/signup', {
    method: 'POST', headers: { 'content-type': 'application/json', origin: ORIGIN, 'CF-Connecting-IP': '203.0.113.1' },
    body: JSON.stringify({ email, password, name: 'Asha' })
  }), env, { waitUntil() {} });
  if (r.status !== 201) throw new Error('signup failed ' + r.status);
}

const A = (p) => `${ORIGIN}/account/${p}`;

for (const vp of [{ width: 1280, height: 900, mobile: false, tag: 'desktop' }, { width: 375, height: 812, mobile: true, tag: 'mobile' }]) {
  viewport = vp;
  const T = `[${vp.tag}] `;
  freshEnv();
  sent.length = 0;
  clientIp = `198.51.100.${vp.mobile ? 20 : 10}`;
  const email = `asha.${vp.tag}@example.com`;
  await signup(email, 'old-password-1');

  /* login page link */
  await load(A('index.html?mode=login'), visible('#login-forgot'));
  ok(T + 'login: "Forgot password?" link is visible', await b.ev(visible('#login-forgot')));
  const linkBox = await b.ev(`(function(){var r=document.getElementById('login-forgot').getBoundingClientRect();return {h:r.height,w:r.width,top:r.top};})()`);
  ok(T + 'login: link tap target ≥ 44 px tall', linkBox.h >= 44, JSON.stringify(linkBox));
  ok(T + 'login: link sits with the password field', await b.ev(`document.getElementById('f-login-password').contains(document.getElementById('login-forgot'))`));
  ok(T + 'login: no horizontal scroll', await noHScroll());
  await shot('01-login-with-forgot-link');
  await click('#login-forgot');
  ok(T + 'login: link opens the forgot page', await waitFor(`location.pathname.endsWith('/account/forgot-password.html') && document.getElementById('forgot-email')`));

  /* forgot page */
  await waitFor(visible('#forgot-email'));
  await shot('02-forgot-form');
  ok(T + 'forgot: no coral/orange anywhere', (await noCoral()) === true, String(await noCoral()));
  ok(T + 'forgot: no horizontal scroll', await noHScroll());
  await type('#forgot-email', 'not-an-email');
  await click('#forgot-submit');
  ok(T + 'forgot: invalid email → field error', await waitFor(`document.getElementById('f-forgot-email').classList.contains('invalid')`));
  ok(T + 'forgot: invalid email sent nothing', sent.length === 0);
  await shot('03-forgot-invalid-email');

  await type('#forgot-email', 'nobody@example.com');
  await click('#forgot-submit');
  ok(T + 'forgot: unknown email → neutral "check your email"', await waitFor(visible('#state-sent')));
  const unknownText = await b.ev(`document.querySelector('#state-sent .state-body').textContent.replace('nobody@example.com','<E>')`);
  ok(T + 'forgot: unknown email sent nothing', sent.length === 0);
  await click('#btn-again');
  await waitFor(visible('#forgot-email'));
  await type('#forgot-email', email.toUpperCase());
  await click('#forgot-submit');
  await waitFor(visible('#state-sent'));
  const knownText = await b.ev(`document.querySelector('#state-sent .state-body').textContent.replace(${JSON.stringify(email)},'<E>')`);
  ok(T + 'forgot: known and unknown email show identical text', knownText === unknownText);
  ok(T + 'forgot: known email → exactly one email', sent.length === 1 && sent[0].to === email);
  ok(T + 'forgot: sent state has no horizontal scroll', await noHScroll());
  await shot('04-forgot-sent');
  const token = tokenOf(sent[0]);
  ok(T + 'email: link is https://klarweg.in/account/reset-password#token=…', /https:\/\/klarweg\.in\/account\/reset-password#token=[A-Za-z0-9_-]{43}/.test(sent[0].text));

  /* reset page: bad links */
  await load(A('reset-password.html'), visible('#state-invalid'));
  ok(T + 'reset: no token → "link no longer works"', await b.ev(visible('#state-invalid')));
  await shot('05-reset-invalid-link');
  ok(T + 'reset: invalid state offers "Request a new link"', await b.ev(`!!document.querySelector('#state-invalid a[href="forgot-password.html"]')`));
  await load(A('reset-password.html#token=' + 'Z'.repeat(43)), visible('#state-invalid'));
  ok(T + 'reset: unknown token → invalid state', await b.ev(visible('#state-invalid')));

  /* reset page: valid link (clean URL, like the email) */
  await load(`${ORIGIN}/account/reset-password#token=${token}`, visible('#reset-password'));
  ok(T + 'reset: valid link → form', await b.ev(visible('#reset-password')));
  ok(T + 'reset: token removed from the address bar', await b.ev(`location.hash === '' && !location.href.includes(${JSON.stringify(token)})`));
  ok(T + 'reset: no coral/orange anywhere', (await noCoral()) === true);
  ok(T + 'reset: no horizontal scroll', await noHScroll());
  const toggleBox = await b.ev(`(function(){var r=document.querySelector('[data-toggle="reset-password"]').getBoundingClientRect();return r.width>=44&&r.height>=44;})()`);
  ok(T + 'reset: visibility toggle is ≥ 44×44', toggleBox);
  await shot('06-reset-form');

  await type('#reset-password', 'short');
  await type('#reset-confirm', 'short');
  await click('#reset-submit');
  ok(T + 'reset: short password → field error, no request', await waitFor(`document.getElementById('f-reset-password').classList.contains('invalid')`));
  await type('#reset-password', 'brand-new-pass-7');
  await type('#reset-confirm', 'brand-new-pass-8');
  await click('[data-toggle="reset-password"]');
  await click('[data-toggle="reset-confirm"]');
  ok(T + 'reset: toggles reveal both fields', await b.ev(`document.getElementById('reset-password').type==='text' && document.getElementById('reset-confirm').type==='text'`));
  ok(T + 'reset: toggle state is announced (aria-pressed/label)', await b.ev(`(function(){var t=document.querySelector('[data-toggle="reset-password"]');return t.getAttribute('aria-pressed')==='true'&&t.getAttribute('aria-label')==='Hide password';})()`));
  await click('#reset-submit');
  ok(T + 'reset: mismatch → confirm field error', await waitFor(`document.getElementById('f-reset-confirm').classList.contains('invalid')`));
  await shot('07-reset-mismatch-visible');
  await click('[data-toggle="reset-password"]');
  ok(T + 'reset: toggle hides again', await b.ev(`document.getElementById('reset-password').type==='password'`));
  await type('#reset-confirm', 'brand-new-pass-7');
  await click('#reset-submit');
  ok(T + 'reset: success state', await waitFor(visible('#state-done')));
  ok(T + 'reset: "password changed" notice email sent', sent.length === 2 && /changed/.test(sent[1].subject));
  await shot('08-reset-success');

  await click('#btn-signin');
  ok(T + 'login: back on login with a confirmation notice', await waitFor(visible('#login-ok')));
  ok(T + 'login: ?reset=done removed from the address bar', await b.ev(`!location.search.includes('reset=')`));
  await shot('09-login-after-reset');
  await type('#login-email', email);
  await type('#login-password', 'old-password-1');
  await click('#login-submit');
  ok(T + 'login: old password refused', await waitFor(`document.getElementById('login-error').classList.contains('on')`));
  await type('#login-password', 'brand-new-pass-7');
  await click('#login-submit');
  ok(T + 'login: new password signs in', await waitFor(visible('#view-account')));

  /* used + expired links */
  await load(`${ORIGIN}/account/reset-password#token=${token}`, visible('#state-invalid'));
  ok(T + 'reset: used link → invalid state', await b.ev(visible('#state-invalid')));
  await load(A('forgot-password.html'), visible('#forgot-email'));
  await type('#forgot-email', email);
  await click('#forgot-submit');
  await waitFor(visible('#state-sent'));
  const token2 = tokenOf(sent[sent.length - 1]);
  env.DB.raw.exec(`UPDATE password_reset_tokens SET expires_at = ${Math.floor(Date.now() / 1000) - 1}`);
  await load(`${ORIGIN}/account/reset-password#token=${token2}`, visible('#state-invalid'));
  ok(T + 'reset: expired link → invalid state', await b.ev(visible('#state-invalid')));

  /* Google-only account */
  env.DB.raw.prepare("INSERT INTO users (id, email, name, google_sub, created_at, updated_at) VALUES ('usr_g', 'gee@example.com', 'Gee', 'g-1', 0, 0)").run();
  const before = sent.length;
  await load(A('forgot-password.html'), visible('#forgot-email'));
  await type('#forgot-email', 'gee@example.com');
  await click('#forgot-submit');
  ok(T + 'forgot: Google-only account → same neutral state', await waitFor(visible('#state-sent')));
  ok(T + 'forgot: Google-only account gets the "use Google Sign-In" email, no link', sent.length === before + 1 && /Google Sign-In/.test(sent[before].text) && !tokenOf(sent[before]));

  /* rate limit */
  for (let i = 0; i < 6; i++) {
    await load(A('forgot-password.html'), visible('#forgot-email'));
    await type('#forgot-email', `n${i}@example.com`);
    await click('#forgot-submit');
    await waitFor(`${visible('#state-sent')} || document.getElementById('forgot-error').classList.contains('on')`);
  }
  ok(T + 'forgot: rate limit → calm error message', await b.ev(`document.getElementById('forgot-error').classList.contains('on') && /wait a few minutes/.test(document.getElementById('forgot-error').textContent)`));
  await shot('10-forgot-rate-limited');

  /* feature switched off */
  freshEnv({ PASSWORD_RESET: 'off' });
  await load(A('forgot-password.html'), visible('#forgot-email'));
  await type('#forgot-email', 'anyone@example.com');
  await click('#forgot-submit');
  ok(T + 'forgot: feature off → "not available yet" with support contact', await waitFor(visible('#state-unavailable')));
  ok(T + 'forgot: unavailable state has no horizontal scroll', await noHScroll());
  await shot('11-forgot-unavailable');

  /* pages published before the Worker deploy */
  freshEnv();
  preDeploy = true;
  await load(A('forgot-password.html'), visible('#forgot-email'));
  await type('#forgot-email', 'anyone@example.com');
  await click('#forgot-submit');
  ok(T + 'forgot: Worker without the routes (404) → same "not available yet" state', await waitFor(visible('#state-unavailable')));
  preDeploy = false;
}

ok('no uncaught page errors', pageErrors.length === 0, pageErrors.slice(0, 3).join(' | '));
clearTimeout(watchdog);
b.close();
server.close();
const failed = results.filter((r) => r[0] === 'FAIL');
console.log(`\n${results.length - failed.length}/${results.length} checks passed. Screenshots: ${SHOTS}`);
process.exit(failed.length ? 1 : 0);
