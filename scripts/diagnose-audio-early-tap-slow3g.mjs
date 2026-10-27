/* Direct repro attempt: a learner who taps a vocabulary word within ~1s of
   the vocabulary cards appearing — i.e. BEFORE the background manifest
   warm-up (conjugation/word-form/vocab) has necessarily finished — on a
   slower-but-realistic mobile profile ("Slow 3G": 400ms RTT, 500kbps both
   ways; a plausible stand-in for a longer-haul/congested route to a US/EU
   CDN edge, distinct from Fast 3G used in the earlier clean run). */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PAGE_URL = 'https://reegangandhi16-pixel.github.io/klarweg/chapter/chapter-a1-1-alphabet.html';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function startChrome() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-audio-slow3g-'));
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

// Slow 3G: higher latency, lower throughput than the earlier Fast-3G run.
await b.send('Network.emulateNetworkConditions', { offline: false, latency: 400, downloadThroughput: 500 * 1024 / 8, uploadThroughput: 500 * 1024 / 8 });

await b.send('Page.addScriptToEvaluateOnNewDocument', {
  source: `
    window.__kwLog = [];
    (function installHook(){
      if (window.KW_onAudioEvent) { window.KW_onAudioEvent(function(e){ window.__kwLog.push(Object.assign({}, e, { tp: performance.now() })); }); return; }
      var tries = 0;
      var iv = setInterval(function(){
        if (window.KW_onAudioEvent) { clearInterval(iv); window.KW_onAudioEvent(function(e){ window.__kwLog.push(Object.assign({}, e, { tp: performance.now() })); }); }
        else if (++tries > 400) clearInterval(iv);
      }, 10);
    })();
  `,
});

const navStartWall = Date.now();
// Fire-and-forget navigate — we do NOT wait for the load event this time;
// we want to land on the page the way a real visitor's render pipeline would
// and jump straight to "does the vocab section exist yet".
b.send('Page.navigate', { url: PAGE_URL });

// Jump to the vocab section and poll for the FIRST moment a card for "der
// Apfel" with its Listen control exists, then click AS SOON AS POSSIBLE —
// this is the realistic "tapped before warm-up finished" scenario.
let sawHash = false;
const cardDeadline = Date.now() + 30000;
let cardFoundAtMs = null;
while (Date.now() < cardDeadline) {
  if (!sawHash) { try { await b.ev(`location.hash = '#sec-vocabulary'; true`); sawHash = true; } catch {} }
  let st;
  try {
    st = await b.ev(`
      (function(){
        var cards = Array.from(document.querySelectorAll('.vword'));
        var card = cards.find(c => c.querySelector('.vword-de') && c.querySelector('.vword-de').textContent.trim() === 'der Apfel');
        var btn = card ? (card.querySelector('.kw-wa') || card.querySelector('.vword-voice[data-g="female"]') || card.querySelector('.vword-btn[aria-label="Listen"]')) : null;
        return { hasBtn: !!btn, disabled: btn ? btn.disabled : null };
      })()
    `);
  } catch { st = { hasBtn: false }; }
  if (st.hasBtn) { cardFoundAtMs = Date.now() - navStartWall; break; }
  await sleep(50);
}
console.log('vocab card + Listen control first existed at +' + cardFoundAtMs + 'ms (disabled=unknown until click)');

reqs.clear();
const clickWall = Date.now();
const clickPerf = await b.ev(`
  (function(){
    var cards = Array.from(document.querySelectorAll('.vword'));
    var card = cards.find(c => c.querySelector('.vword-de') && c.querySelector('.vword-de').textContent.trim() === 'der Apfel');
    var btn = card.querySelector('.kw-wa') || card.querySelector('.vword-voice[data-g="female"]') || card.querySelector('.vword-btn[aria-label="Listen"]');
    var wasDisabled = btn.disabled;
    btn.click();
    return performance.now();
  })()
`);
console.log('clicked at +' + (Date.now() - navStartWall) + 'ms since navigation (this is the "early tap" instant)');

const deadline = Date.now() + 30000;
let log = [];
while (Date.now() < deadline) {
  log = await b.ev(`window.__kwLog.filter(e => e.tp >= ${clickPerf} - 5)`);
  if (log.some((e) => ['play-start', 'play-error', 'all-failed'].includes(e.type))) break;
  await sleep(100);
}
console.log('\nclick -> settle wall-clock: ' + (Date.now() - clickWall) + 'ms');
const playStart = log.find((e) => e.type === 'play-start');
console.log('click -> play-start (perf delta): ' + (playStart ? (playStart.tp - clickPerf).toFixed(1) + 'ms' : 'n/a (timed out)'));
console.log('event timeline (ms since click):', JSON.stringify(log.map((e) => ({ type: e.type, text: e.text, entries: e.entries, source: e.source, dMs: Math.round(e.tp - clickPerf) }))));

b.close();
