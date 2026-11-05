/* ============================================================
   WORD POPUP · headless browser checks (homepage + a chapter page)
   ------------------------------------------------------------
   The homepage opens the course word popup (chapter-app.js in popup-only
   host mode). This drives real headless Chrome with real mouse, touch and
   key events against a local static server over the repo root:

   (W) the five homepage words without a page-specific entry in WORDS
       before this change — das, mir (now course-sourced entries), ist,
       Deutsch, Montag (course dictionary) — in their homepage sentences;
   (K) keyboard: every trigger is a focusable button (none nested), Tab
       reaches it with a visible focus indicator, Enter / Space open the
       popup, focus moves into it and stays there, Escape closes and
       returns focus to the word; in-popup words are reachable too — on
       the homepage and on a chapter page (.rw story words, .de-link words);
   (L) layering: the homepage popup covers the page's fixed nav;
   (M) mobile: a tap opens the popup inside the viewport.

   Usage:  npm run test:popup:browser
   Env:    CHROME=<binary>   CHROME_ARGS="--no-sandbox"   (CI on Linux)
   ============================================================ */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHROME = process.env.CHROME || (process.platform === 'darwin'
  ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  : 'google-chrome');
const CHROME_ARGS = (process.env.CHROME_ARGS || '').split(' ').filter(Boolean);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------- static server (repo root, read-only) ---------- */
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json' };
function startServer() {
  const server = http.createServer((req, res) => {
    const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/^\/+/, '') || 'index.html';
    const file = path.join(ROOT, rel);
    if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((r) => server.listen(0, '127.0.0.1', () => r(server)));
}

/* ---------- minimal CDP client ---------- */
async function launch() {
  const port = 9600 + Math.floor(Math.random() * 300);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-popup-'));
  const proc = spawn(CHROME, ['--headless=new', '--mute-audio', '--autoplay-policy=no-user-gesture-required', '--remote-debugging-port=' + port,
    '--user-data-dir=' + dir, '--no-first-run', '--no-default-browser-check', '--hide-scrollbars', ...CHROME_ARGS, 'about:blank'], { stdio: 'ignore' });
  for (let i = 0; i < 100; i++) { try { await (await fetch(`http://127.0.0.1:${port}/json/version`)).json(); break; } catch { await sleep(100); } }
  return { port, close() { try { proc.kill('SIGKILL'); } catch {} try { fs.rmSync(dir, { recursive: true, force: true }); } catch {} } };
}
async function openPage(browser, { width, height, mobile = false, touch = false }) {
  const t = await (await fetch(`http://127.0.0.1:${browser.port}/json/new?about:blank`, { method: 'PUT' })).json();
  const ws = new WebSocket(t.webSocketDebuggerUrl);
  await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
  let id = 0; const pending = new Map(); const exceptions = []; let onLoad = null;
  ws.onmessage = (m) => {
    const d = JSON.parse(m.data);
    if (d.id && pending.has(d.id)) { const p = pending.get(d.id); pending.delete(d.id); d.error ? p.j(new Error(d.error.message)) : p.r(d.result); }
    else if (d.method === 'Runtime.exceptionThrown') exceptions.push(d.params.exceptionDetails.exception?.description || d.params.exceptionDetails.text);
    else if (d.method === 'Page.loadEventFired' && onLoad) onLoad();
  };
  const send = (method, params = {}) => new Promise((r, j) => { const i = ++id; pending.set(i, { r, j }); ws.send(JSON.stringify({ id: i, method, params })); });
  await send('Page.enable'); await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile });
  if (touch) await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
  const KEYS = { Tab: ['Tab', 9, ''], Enter: ['Enter', 13, '\r'], Space: [' ', 32, ' '], Escape: ['Escape', 27, ''] };
  const page = {
    exceptions,
    async goto(url) { const l = new Promise((r) => { onLoad = r; }); await send('Page.navigate', { url }); await l; await sleep(1500); },
    async eval(expr) {
      const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true, userGesture: true });
      if (r.exceptionDetails) throw new Error('eval: ' + (r.exceptionDetails.exception?.description || r.exceptionDetails.text));
      return r.result.value;
    },
    async until(expr, ms = 8000) { for (let t = 0; t < ms / 100; t++) { if (await page.eval(expr)) return true; await sleep(100); } return false; },
    async click(x, y) { for (const type of ['mouseMoved', 'mousePressed', 'mouseReleased']) await send('Input.dispatchMouseEvent', { type, x, y, button: 'left', clickCount: 1 }); },
    async tap(x, y) { await send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] }); await send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); },
    async key(k, shift = false) {
      const [key, kc, text] = KEYS[k]; const modifiers = shift ? 8 : 0; const code = k === 'Space' ? 'Space' : key;
      await send('Input.dispatchKeyEvent', { type: 'rawKeyDown', key, code, windowsVirtualKeyCode: kc, modifiers });
      if (text) await send('Input.dispatchKeyEvent', { type: 'char', key, code, text, modifiers });
      await send('Input.dispatchKeyEvent', { type: 'keyUp', key, code, windowsVirtualKeyCode: kc, modifiers });
    },
    close() { try { ws.close(); } catch {} },
  };
  return page;
}

/* ---------- checks ---------- */
const results = [];
const check = (name, cond, info) => results.push({ name, pass: !!cond, info });
const POP = `(() => { const w = document.querySelector('.word-pop'); const o = !!(w && w.classList.contains('is-open'));
  return { open: o, head: o ? w.querySelector('.word-pop-de').innerText : null, text: o ? w.innerText.split('\\n').join(' / ') : '',
    current: o ? [...w.querySelectorAll('.wp-compare-cell.is-current .wp-compare-label')].map((x) => x.innerText.toLowerCase()) : [],
    label: w && w.getAttribute('aria-label') }; })()`;
const ACTIVE = `(() => { const a = document.activeElement; if (!a) return null; const cs = getComputedStyle(a);
  return { cls: String(a.className), text: (a.textContent || '').trim().slice(0, 40), role: a.getAttribute('role'), inPop: !!a.closest('.word-pop'),
    outline: cs.outlineStyle + ' ' + cs.outlineWidth, shadow: cs.boxShadow }; })()`;
const centre = (p, sel) => p.eval(`(() => { const e = ${sel}; e.scrollIntoView({ block: 'center', behavior: 'instant' }); const r = e.getBoundingClientRect(); return [r.x + r.width / 2, r.y + r.height / 2]; })()`);

const server = await startServer();
const BASE = `http://127.0.0.1:${server.address().port}`;
const browser = await launch();
try {
  /* (W) five words, homepage sentences */
  const h = await openPage(browser, { width: 1280, height: 900 });
  await h.goto(BASE + '/index.html');
  check('homepage: popup engine and course lexicon load', await h.until('!!window.KW_WordPop && !!window.KW_GLOBAL_LEXICON', 15000));
  const word = async (k) => {
    await h.eval(`document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))`);
    const [x, y] = await centre(h, `document.querySelector('.de[data-word="${k}"]')`);
    await h.click(x, y); await sleep(500);
    return Object.assign(await h.eval(POP), { sentence: await h.eval(`document.querySelector('.de[data-word="${k}"]').closest('[data-sentence]').dataset.sentence`) });
  };
  let r = await word('das');
  check('das in "Sie gibt mir das Buch." = article "the (neut.)" (Akkusativ), never the pronoun "this, that"',
    r.sentence === 'Sie gibt mir das Buch.' && / \/ the \(neut\.\) \/ यह \/ Article \/ Akkusativ \/ case \//.test(r.text) && !/this, that/.test(r.text), r.text);
  r = await word('mir');
  check('mir in "Sie gibt mir das Buch." = dative "me", Dativ cell current, never "I"',
    / \/ me \/ मुझे \/ Pronoun \/ Dativ \/ case \//.test(r.text) && r.current.join() === 'dativ' && !/ \/ I \/ /.test(r.text), [r.text, r.current]);
  r = await word('ist');
  check('ist in "Heute ist Montag." = Verb (sein), 3rd sg. Präsens cell current', r.sentence === 'Heute ist Montag.' && / \/ Verb \//.test(r.text) && /3\. sg/.test(r.current.join()), [r.text.slice(0, 80), r.current]);
  r = await word('deutsch');
  check('Deutsch in "Anna lernt Deutsch." = German (language)', r.sentence === 'Anna lernt Deutsch.' && / \/ German \(language\) \/ जर्मन भाषा \//.test(r.text), r.text.slice(0, 80));
  r = await word('montag');
  check('Montag in "Heute ist Montag." = Monday (Noun)', / \/ Monday \/ सोमवार \/ Noun \//.test(r.text), r.text.slice(0, 80));

  /* (L) layering: the popup covers the fixed nav */
  const navHit = await h.eval(`(() => { const n = document.querySelector('.nav'); const b = n.getBoundingClientRect(); const e = document.elementFromPoint(b.x + 40, b.y + b.height / 2); return e && (e.closest('.word-pop, .word-pop-backdrop') ? 'popup' : e.className); })()`);
  check('homepage popup sits above the fixed nav', navHit === 'popup', navHit);
  await h.key('Escape'); await sleep(350);

  /* (K) keyboard on the homepage */
  const trig = await h.eval(`(() => { const all = [...document.querySelectorAll('.de[data-word]')]; return { n: all.length, buttons: all.filter((e) => e.tabIndex === 0 && e.getAttribute('role') === 'button' && e.getAttribute('aria-haspopup') === 'dialog').length,
    nested: [...document.querySelectorAll('[role="button"]')].filter((e) => e.parentElement && e.parentElement.closest('button, a[href], [role="button"]')).length }; })()`);
  check('homepage: every word trigger is a focusable button; nothing nested', trig.n > 0 && trig.buttons === trig.n && trig.nested === 0, trig);
  await h.eval(`(() => { const t = document.querySelector('.de[data-word="lehrer"]'); t.scrollIntoView({ block: 'center', behavior: 'instant' }); const s = document.createElement('button'); s.id = '__kwStart'; t.parentElement.insertBefore(s, t); s.focus(); })()`);
  await h.key('Tab'); await sleep(300);
  let a = await h.eval(ACTIVE);
  check('homepage: Tab reaches the next word', a && a.role === 'button' && a.text === 'Lehrer', a);
  check('homepage: keyboard focus is visible', a && /0px 0px 0px 2px/.test(a.shadow), a && a.shadow);
  await h.eval(`document.getElementById('__kwStart').remove()`);
  await h.key('Enter'); await sleep(500);
  let s = await h.eval(POP); a = await h.eval(ACTIVE);
  check('homepage: Enter opens that word; the dialog is named by it; focus moves inside', s.open && s.head === 'Lehrer' && s.label === 'Lehrer' && a.inPop, [s.head, s.label, a && a.cls]);
  let escaped = false, link = null;
  for (let i = 0; i < 30; i++) { await h.key('Tab'); const x = await h.eval(ACTIVE); if (!x || !x.inPop) escaped = true; if (!link && x && /de-link/.test(x.cls)) link = x.text; }
  for (let i = 0; i < 5; i++) { await h.key('Tab', true); const x = await h.eval(ACTIVE); if (!x || !x.inPop) escaped = true; }
  check('homepage: Tab / Shift+Tab stay inside the open popup; in-popup words are reachable', !escaped && !!link, link);
  await h.key('Escape'); await sleep(350);
  s = await h.eval(POP); a = await h.eval(ACTIVE);
  check('homepage: Escape closes; focus returns to the word', !s.open && a.text === 'Lehrer' && a.role === 'button', a);
  await h.key('Space'); await sleep(500);
  check('homepage: Space opens it too', (await h.eval(POP)).head === 'Lehrer');
  await h.click(20, 450); await sleep(350);
  a = await h.eval(ACTIVE);
  check('homepage: backdrop click closes; focus returns to the word', !(await h.eval(POP)).open && a.text === 'Lehrer', a);
  // Mouse only: click a word, click the backdrop — no keyboard ring appears on the page.
  const [ax, ay] = await centre(h, `document.querySelector('.de[data-word="anna"]')`);
  await h.click(ax, ay); await sleep(500);
  const mouseOpen = (await h.eval(POP)).head;
  await h.click(20, 450); await sleep(350);
  a = await h.eval(ACTIVE);
  check('homepage: mouse open/close leaves no keyboard ring on the word', mouseOpen === 'Anna' && a.text === 'Anna' && a.shadow === 'none' && /^none/.test(a.outline), a);
  check('homepage: no uncaught exceptions', h.exceptions.length === 0, h.exceptions);
  h.close();

  /* (K) keyboard on a chapter page (Ch 1 of A2 is open without sign-in) */
  const c = await openPage(browser, { width: 1280, height: 900 });
  await c.goto(BASE + '/chapter/chapter-a2-1-genitiv.html');
  await c.until(`document.querySelectorAll('.rw').length > 0`, 15000);
  const ct = await c.eval(`(() => { const all = [...document.querySelectorAll('.de-link, .rw')]; const inCtl = all.filter((e) => e.parentElement.closest('button, a[href], summary, label, select, textarea, input, [role="button"]'));
    return { n: all.length, buttons: all.filter((e) => e.tabIndex === 0 && e.getAttribute('role') === 'button').length, inControl: inCtl.length, inControlMarked: inCtl.filter((e) => e.hasAttribute('role')).length,
      nested: [...document.querySelectorAll('[role="button"]')].filter((e) => e.parentElement && e.parentElement.closest('button, a[href], [role="button"]')).length }; })()`);
  check('chapter: every word trigger outside a control is a focusable button; nothing nested', ct.n > 0 && ct.buttons === ct.n - ct.inControl && ct.inControlMarked === 0 && ct.nested === 0, ct);
  await c.eval(`(() => { const t = document.querySelector('.rw[role="button"]'); t.scrollIntoView({ block: 'center', behavior: 'instant' }); const s = document.createElement('button'); s.id = '__kwStart'; t.parentElement.insertBefore(s, t); s.focus(); })()`);
  await c.key('Tab'); a = await c.eval(ACTIVE);
  const cw = a && a.text;
  check('chapter: Tab reaches a story word with a visible focus ring', a && /\brw\b/.test(a.cls) && /^solid 2px/.test(a.outline), a);
  await c.eval(`document.getElementById('__kwStart').remove()`);
  await c.key('Enter'); await sleep(500);
  s = await c.eval(POP); a = await c.eval(ACTIVE);
  check('chapter: Enter opens that word; focus moves inside', s.open && s.head === cw && a.inPop, [cw, s.head]);
  await c.key('Escape'); await sleep(350);
  a = await c.eval(ACTIVE);
  check('chapter: Escape closes; focus returns to the word', !(await c.eval(POP)).open && a.text === cw, a);
  await c.eval(`(() => { const t = [...document.querySelectorAll('.de-link[role="button"]')].find((e) => !e.closest('.word-pop')); t.scrollIntoView({ block: 'center', behavior: 'instant' }); t.focus(); })()`);
  const lw = (await c.eval(ACTIVE)).text;
  await c.key('Space'); await sleep(500);
  check('chapter: Space opens an auto-linked word', (await c.eval(POP)).head === lw, lw);
  await c.key('Escape'); await sleep(300);
  check('chapter: no uncaught exceptions', c.exceptions.length === 0, c.exceptions);
  c.close();

  /* (M) mobile tap */
  const m = await openPage(browser, { width: 375, height: 667, mobile: true, touch: true });
  await m.goto(BASE + '/index.html');
  await m.until('!!window.KW_WordPop', 15000);
  const [mx, my] = await centre(m, `document.querySelector('.de[data-word="mir"]')`);
  await m.tap(mx, my); await sleep(600);
  s = await m.eval(POP);
  const g = await m.eval(`(() => { const r = document.querySelector('.word-pop').getBoundingClientRect(); return [r.left, r.right, r.top, r.bottom]; })()`);
  check('mobile: tap opens the popup inside the viewport', s.open && s.head === 'mir' && g[0] >= 11 && g[1] <= 364 && g[2] >= 0 && g[3] <= 667, [s.head, g]);
  m.close();
} catch (e) {
  check('suite ran to completion', false, e.stack || String(e));
} finally {
  browser.close(); server.close();
}
const failed = results.filter((x) => !x.pass);
for (const x of results) console.log((x.pass ? '  ✓ ' : '  ✗ ') + x.name + (x.pass ? '' : '  — ' + JSON.stringify(x.info)));
console.log(`[word-popup] ${results.length - failed.length}/${results.length} checks passed`);
process.exit(failed.length ? 1 : 0);
