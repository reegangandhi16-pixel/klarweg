/* OPT-IN real-browser E2E (headless Chrome over CDP, no extra dependencies):
   START → LESEN → HÖREN (real WebAudio playback of test tones, real time)
   → SCHREIBEN (typing + umlaut button + reload recovery) → SPRECHEN (fake
   microphone, chunk upload) → SUBMIT → RESULT, at desktop and mobile widths.
   Synthetic content only, against the local dev server. Takes ~3–4 minutes.
   Usage: node exam-worker/test/browser-e2e.mjs   (CHROME=/path/to/chrome to override) */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import { startDevServer } from './dev-server.mjs';

const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.log('[browser-e2e]', ...a);

async function launch() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-chrome-'));
  const proc = spawn(CHROME, ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', `--user-data-dir=${dir}`,
    '--remote-debugging-port=0', '--autoplay-policy=no-user-gesture-required', '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream',
    'about:blank'], { stdio: 'ignore' });
  const portFile = path.join(dir, 'DevToolsActivePort');
  for (let i = 0; i < 100 && !fs.existsSync(portFile); i++) await sleep(100);
  const port = fs.readFileSync(portFile, 'utf8').split('\n')[0];
  const targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const page = targets.find((t) => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));
  let id = 0; const pending = new Map(); const events = [];
  ws.addEventListener('message', (m) => {
    const msg = JSON.parse(m.data);
    if (msg.id && pending.has(msg.id)) { const { resolve, reject } = pending.get(msg.id); pending.delete(msg.id); msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result); }
    else if (msg.method) events.push(msg);
  });
  const send = (method, params = {}) => new Promise((resolve, reject) => { const i = ++id; pending.set(i, { resolve, reject }); ws.send(JSON.stringify({ id: i, method, params })); });
  return { proc, dir, send, events, close: () => { try { ws.close(); } catch {} proc.kill(); } };
}

async function run(viewport) {
  const dev = await startDevServer();
  const b = await launch();
  const { send } = b;
  const errors = [];
  try {
    await send('Runtime.enable'); await send('Page.enable'); await send('Log.enable');
    await send('Emulation.setDeviceMetricsOverride', { width: viewport.w, height: viewport.h, deviceScaleFactor: 1, mobile: viewport.mobile });
    const evaluate = async (expr) => {
      const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
      return r.result.value;
    };
    const text = () => evaluate('document.body.innerText');
    const waitFor = async (fnSrc, ms = 15000, label = fnSrc) => {
      const t0 = Date.now();
      while (Date.now() - t0 < ms) { if (await evaluate(`(() => { try { return !!(${fnSrc}); } catch { return false; } })()`)) return; await sleep(200); }
      throw new Error(`timeout: ${label}\n--- page ---\n${(await text()).slice(0, 800)}\n--- console ---\n${b.events.filter((e) => e.method === 'Runtime.exceptionThrown' || e.method === 'Log.entryAdded' || (e.method === 'Runtime.consoleAPICalled' && e.params.type === 'error')).map((e) => JSON.stringify(e.params).slice(0, 300)).join('\n')}`);
    };
    const click = (sel) => evaluate(`document.querySelector(${JSON.stringify(sel)}).click()`);
    await send('Runtime.evaluate', { expression: 'window.confirm = () => true' });
    await send('Page.addScriptToEvaluateOnNewDocument', { source: 'window.confirm = () => true;' });
    const base = `http://127.0.0.1:${dev.port}/exam/`;
    await send('Page.navigate', { url: base });

    await waitFor(`document.querySelector('[data-act="create"]')`, 15000, 'start screen');
    await click('[data-act="create"]');
    await waitFor(`document.querySelector('[data-act="start"][data-module="lesen"]')`, 15000, 'Lesen intro');
    await click('[data-act="start"][data-module="lesen"]');
    await waitFor(`document.querySelectorAll('input[type=radio]').length > 20`, 15000, 'Lesen rendered');
    assert.match(await text(), /SYNTHETISCHER SYSTEMTEST/);
    // answer: first option of each non-example radio group, first real option of each select
    await evaluate(`(() => { const seen = new Set(); for (const r of document.querySelectorAll('input[type=radio]:not([disabled])')) { if (!seen.has(r.name)) { seen.add(r.name); r.click(); } }
      for (const s of document.querySelectorAll('select:not([disabled])')) { s.selectedIndex = 1; s.dispatchEvent(new Event('change', { bubbles: true })); } })()`);
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'Lesen autosaved');
    const overflow = await evaluate('document.documentElement.scrollWidth > window.innerWidth + 1');
    assert.equal(overflow, false, 'no horizontal scroll');
    await click('[data-act="submit"]');

    await waitFor(`document.querySelector('[data-act="start"][data-module="hoeren"]')`, 15000, 'Hören intro');
    await click('[data-act="start"][data-module="hoeren"]');
    await waitFor(`/Sie hören den Text|Lesen Sie die Aufgaben/.test(document.querySelector('#kx-phase')?.textContent || '')`, 30000, 'Hören schedule running');
    // F2: only Teil 1 is in the DOM; future parts' items/text are absent (not merely hidden)
    await waitFor(`document.querySelectorAll('#kx-main .kx-part').length === 1`, 10000, 'Teil 1 rendered');
    const dom = await evaluate('document.documentElement.outerHTML');
    assert.equal(/syn-h[234]-|data-part="[234]"/.test(dom), false, 'future Hören parts must not be in the DOM');
    log(viewport.name, 'Hören running (real-time synthetic plan); future parts absent from DOM');
    // F1: genuine interruption — reload the page while a LAST allowed play (P1 text 1, play 2/2) is playing
    const lastPlaySeq = 5;
    const t0 = Date.now();
    for (;;) {
      const row = await dev.env.DB.prepare("SELECT outcome FROM audio_plays WHERE phase_seq = ?1 AND kind = 'normal'").bind(lastPlaySeq).first();
      if (row && row.outcome === 'started') break;
      if (Date.now() - t0 > 30000) throw new Error('last play never started');
      await sleep(30);
    }
    await evaluate('window.__beforeReload = true');
    await send('Page.reload');
    await waitFor(`!window.__beforeReload && document.querySelector('#kx-phase')`, 20000, 'reloaded into Hören');
    for (const t1 = Date.now(); ; ) {
      const rec = await dev.env.DB.prepare("SELECT outcome FROM audio_plays WHERE phase_seq = ?1 AND kind = 'recovery'").bind(lastPlaySeq).first();
      if (rec && rec.outcome === 'complete') break;
      if (Date.now() - t1 > 30000) throw new Error('recovery replay did not complete: ' + JSON.stringify(rec));
      await sleep(100);
    }
    log(viewport.name, 'interrupted last play recovered once');
    await waitFor(`/Ende des Hörteils/.test(document.querySelector('#kx-phase')?.textContent || '')`, 150000, 'Hören finished');
    assert.equal(await evaluate(`document.querySelectorAll('#kx-main .kx-part').length`), 4, 'all four parts open by the end');
    const plays = (await dev.env.DB.prepare('SELECT kind, outcome, COUNT(*) AS n FROM audio_plays GROUP BY kind, outcome').all()).results;
    const n = (k, o) => plays.filter((r) => r.kind === k && (!o || r.outcome === o)).reduce((a, r) => a + r.n, 0);
    // 15 text plays (example 1 + 5×2, 1, 1, 2) + 1 synthetic Teil 2 instruction play (AUDIO-SPEC A1/A2)
    assert.equal(n('normal'), 16, JSON.stringify(plays));
    assert.equal(n('normal', 'interrupted'), 1, JSON.stringify(plays));
    assert.equal(n('normal', 'complete'), 15, JSON.stringify(plays));
    assert.equal(n('recovery'), 1); assert.equal(n('recovery', 'complete'), 1);
    await click('[data-act="submit"]');

    await waitFor(`document.querySelector('[data-act="start"][data-module="schreiben"]')`, 15000, 'Schreiben intro');
    await click('[data-act="start"][data-module="schreiben"]');
    await waitFor(`document.querySelector('textarea')`, 15000, 'editor');
    await evaluate(`(() => { const t = document.querySelector('textarea'); t.focus(); t.value = 'Liebe Grüße aus der Straße '; t.dispatchEvent(new Event('input', { bubbles: true })); })()`);
    await click('.kx-char[data-insert="ä"]');
    await waitFor(`document.querySelector('.kx-save')?.textContent === 'Gespeichert'`, 15000, 'Schreiben autosaved');
    // recovery: reload the tab mid-module
    await evaluate('window.__beforeReload = true');
    await send('Page.reload');
    await waitFor(`!window.__beforeReload && document.querySelector('[data-wc-for]') && document.querySelector('textarea') && document.querySelector('textarea').value.startsWith('Liebe Grüße aus der Straße ä')`, 15000, 'text recovered after reload');
    assert.match(await evaluate(`document.querySelector('[data-wc-for]').textContent`), /^[56]$/);
    await click('[data-act="submit"]');

    await waitFor(`document.querySelector('[data-act="start"][data-module="sprechen"]')`, 15000, 'Sprechen intro');
    await click('#kx-consent');
    await click('[data-act="start"][data-module="sprechen"]');
    await waitFor(`/Aufnahme läuft/.test(document.querySelector('#kx-phase')?.textContent || '')`, 30000, 'recording');
    await sleep(3500);
    const chunks = await dev.env.DB.prepare('SELECT COUNT(*) AS n FROM recording_chunks').first();
    assert.ok(chunks.n >= 1, 'chunks are uploaded progressively while recording');
    await click('[data-act="submit"]');
    await waitFor(`document.querySelector('[data-act="complete"]')`, 20000, 'complete screen');
    await click('[data-act="complete"]');
    await waitFor(`/KLARWEG B1 SIMULATION — TEST RESULT/.test(document.body.innerText)`, 15000, 'result page');
    const result = await text();
    assert.match(result, /Lesen/); assert.match(result, /in Bewertung/);
    assert.equal(/Goethe[- ]?(score|Zertifikat)|official score/i.test(result.replace(/Not an official Goethe-Institut result and not a certificate\./, '')), false);
    const exceptions = b.events.filter((e) => e.method === 'Runtime.exceptionThrown');
    errors.push(...exceptions.map((e) => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text));
    log(viewport.name, 'PASS', { normal_plays: n('normal'), recovery_plays: n('recovery'), chunks: chunks.n });
  } finally {
    b.close(); dev.server.close();
  }
  return errors;
}

const results = [];
for (const vp of [{ name: 'desktop 1280×800', w: 1280, h: 800, mobile: false }, { name: 'mobile 390×844', w: 390, h: 844, mobile: true }]) {
  const errs = await run(vp);
  results.push({ vp: vp.name, uncaught: errs });
}
console.log(JSON.stringify(results));
if (results.some((r) => r.uncaught.length)) process.exit(1);
