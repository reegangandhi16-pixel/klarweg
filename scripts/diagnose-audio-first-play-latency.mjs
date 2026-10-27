/* Controlled, representative measurement: headless Chrome with CDP network
   throttling set to a standard "Fast 3G" mobile profile (150ms RTT, 1.6Mbps
   down / 750kbps up — the profile Lighthouse/DevTools use), rather than
   relying on this sandbox's own (anomalously slow) ambient network. Hooks
   kw-audio-engine.js's lifecycle events from document start via
   Page.addScriptToEvaluateOnNewDocument, so nothing is missed. */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PAGE_URL = 'https://reegangandhi16-pixel.github.io/klarweg/chapter/chapter-a1-1-alphabet.html';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function startChrome() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-audio-throttled-'));
  const proc = spawn(CHROME, ['--headless=new', '--mute-audio', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
    `--user-data-dir=${dir}`, '--remote-debugging-port=0', '--autoplay-policy=no-user-gesture-required', 'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'] });
  let exited = null; proc.on('exit', (c, s) => { exited = s || c; });
  const portFile = path.join(dir, 'DevToolsActivePort');
  const readPort = () => { try { const p = fs.readFileSync(portFile, 'utf8').split('\n')[0]; return /^\d+$/.test(p) ? p : null; } catch { return null; } };
  const t0 = Date.now(); let port = null;
  while (!(port = readPort()) && exited === null && Date.now() - t0 < 30000) await sleep(100);
  if (!port) throw new Error('no chrome');
  return { proc, port };
}
async function connect() {
  const { proc, port } = await startChrome();
  const page = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));
  let id = 0; const pend = new Map(); const handlers = [];
  ws.addEventListener('message', (m) => { const msg = JSON.parse(m.data);
    if (msg.id && pend.has(msg.id)) { const p = pend.get(msg.id); pend.delete(msg.id); msg.error ? p.rej(new Error(msg.error.message)) : p.res(msg.result); }
    else handlers.forEach((h) => h(msg)); });
  const send = (method, params = {}) => new Promise((res, rej) => { const i = ++id; pend.set(i, { res, rej }); ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (expr, awaitPromise = true) => {
    const r = await Promise.race([send('Runtime.evaluate', { expression: expr, awaitPromise, returnByValue: true }),
      new Promise((_, rej) => setTimeout(() => rej(new Error('timeout: ' + expr.slice(0, 60))), 20000))]);
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
    return r.result.value;
  };
  return { send, ev, handlers, close: () => { try { ws.close(); } catch {} proc.kill(); } };
}
function trackNetwork(b) {
  const reqs = new Map();
  b.handlers.push((msg) => {
    if (msg.method === 'Network.requestWillBeSent') reqs.set(msg.params.requestId, { url: msg.params.request.url, monoStart: msg.params.timestamp });
    else if (msg.method === 'Network.responseReceived') { const r = reqs.get(msg.params.requestId); if (r) { r.status = msg.params.response.status; r.timing = msg.params.response.timing; } }
    else if (msg.method === 'Network.loadingFinished') { const r = reqs.get(msg.params.requestId); if (r) r.monoFinished = msg.params.timestamp; }
  });
  return reqs;
}

const b = await connect();
const reqs = trackNetwork(b);
await b.send('Network.enable');
await b.send('Page.enable');
await b.send('Runtime.enable');

// Fast-3G-ish mobile profile (same numbers Chrome DevTools/Lighthouse use).
await b.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 1.6 * 1024 * 1024 / 8, uploadThroughput: 750 * 1024 / 8 });

// Install the kw-audio-engine hook before ANY page script runs.
await b.send('Page.addScriptToEvaluateOnNewDocument', {
  source: `
    window.__kwLog = [];
    window.__kwNavStart = performance.now();
    (function installHook(){
      if (window.KW_onAudioEvent) { window.KW_onAudioEvent(function(e){ window.__kwLog.push(Object.assign({}, e, { tp: performance.now() })); }); return; }
      var tries = 0;
      var iv = setInterval(function(){
        if (window.KW_onAudioEvent) { clearInterval(iv); window.KW_onAudioEvent(function(e){ window.__kwLog.push(Object.assign({}, e, { tp: performance.now() })); }); }
        else if (++tries > 200) clearInterval(iv);
      }, 10);
    })();
  `,
});

const navStartWall = Date.now();
await b.send('Page.navigate', { url: PAGE_URL });
await new Promise((r) => { const h = (m) => { if (m.method === 'Page.loadEventFired') { b.handlers.splice(b.handlers.indexOf(h), 1); r(); } }; b.handlers.push(h); });
console.log('STAGE load event: +' + (Date.now() - navStartWall) + 'ms');

await b.ev(`location.hash = '#sec-vocabulary'; true`);

// Poll for the Listen control to exist and be enabled.
const enableDeadline = Date.now() + 30000;
let enabledAtMs = null;
while (Date.now() < enableDeadline) {
  const st = await b.ev(`
    (function(){
      var cards = Array.from(document.querySelectorAll('.vword'));
      var card = cards.find(c => c.querySelector('.vword-de').textContent.trim() === 'der Apfel');
      var btn = card ? (card.querySelector('.kw-wa') || card.querySelector('.vword-voice[data-g="female"]') || card.querySelector('.vword-btn[aria-label="Listen"]')) : null;
      return { hasCard: !!card, hasBtn: !!btn, disabled: btn ? btn.disabled : null };
    })()
  `);
  if (st.hasBtn && st.disabled === false) { enabledAtMs = Date.now() - navStartWall; break; }
  await sleep(150);
}
console.log('STAGE listen-control enabled: +' + enabledAtMs + 'ms');

async function clickAndWait(label, timeoutMs) {
  reqs.clear();
  const clickWall = Date.now();
  await b.ev(`window.__kwClickMarker = performance.now(); true`);
  const clickPerf = await b.ev(`
    (function(){
      var cards = Array.from(document.querySelectorAll('.vword'));
      var card = cards.find(c => c.querySelector('.vword-de').textContent.trim() === 'der Apfel');
      var btn = card.querySelector('.kw-wa') || card.querySelector('.vword-voice[data-g="female"]') || card.querySelector('.vword-btn[aria-label="Listen"]');
      btn.click();
      return performance.now();
    })()
  `);
  const deadline = Date.now() + timeoutMs;
  let log = [];
  while (Date.now() < deadline) {
    log = await b.ev(`window.__kwLog.filter(e => e.tp >= ${clickPerf} - 5)`);
    if (log.some((e) => ['play-start', 'play-error', 'all-failed'].includes(e.type))) break;
    await sleep(100);
  }
  const elapsedWall = Date.now() - clickWall;
  const playStart = log.find((e) => e.type === 'play-start');
  const playError = log.find((e) => e.type === 'play-error');
  const mp3 = [...reqs.values()].find((r) => /\.mp3(\?|$)/.test(r.url));
  console.log(`\n=== ${label} ===`);
  console.log(`  click -> settle wall-clock: ${elapsedWall}ms`);
  console.log(`  click -> play-start (page performance.now() delta): ${playStart ? (playStart.tp - clickPerf).toFixed(1) : 'n/a'}ms`);
  console.log(`  click -> play-error: ${playError ? (playError.tp - clickPerf).toFixed(1) : 'n/a'}ms`);
  console.log(`  event timeline (tp relative to click, ms): ${JSON.stringify(log.map((e) => ({ type: e.type, text: e.text, url: e.url, dMs: Math.round(e.tp - clickPerf) })))}`);
  if (mp3) {
    console.log(`  mp3: ${mp3.url}`);
    if (mp3.timing) console.log(`  mp3 timing (ms): ${JSON.stringify(mp3.timing)}`);
    if (mp3.monoFinished) console.log(`  mp3 total download: ${((mp3.monoFinished - mp3.monoStart) * 1000).toFixed(1)}ms`);
  } else {
    console.log('  mp3: none (urlCache reuse or no audio request observed)');
  }
  return { elapsedWall, log };
}

await clickAndWait('FIRST PLAY (cold urlCache, throttled Fast-3G)', 30000);
await sleep(800);
await clickAndWait('SECOND PLAY (warm urlCache, same word, throttled Fast-3G)', 10000);

b.close();
