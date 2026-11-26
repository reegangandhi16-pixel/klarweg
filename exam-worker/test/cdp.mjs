/* Minimal headless-Chrome-over-CDP driver for the exam browser checks that run outside browser-e2e.mjs
   (modelltest-browser.mjs). Same launch flags as browser-e2e.mjs: throw-away profile, muted audio, fake microphone,
   autoplay allowed unless asked otherwise. No extra dependencies. */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

export const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const CHROME_ARGS = (process.env.CHROME_ARGS || '').split(/\s+/).filter(Boolean);
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const NAVIGATING = /Execution context was destroyed|Cannot find context|Inspected target navigated or closed/;

const PROFILES = new Set(), CHROMES = new Set();
const removeProfile = (dir) => { try { fs.rmSync(dir, { recursive: true, force: true }); } catch { /* best effort */ } PROFILES.delete(dir); };
process.on('exit', () => { for (const p of CHROMES) { try { p.kill('SIGKILL'); } catch { /* gone */ } } for (const d of [...PROFILES]) removeProfile(d); });

async function startChrome({ autoplayFlag }) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-chrome-'));
  PROFILES.add(dir);
  const proc = spawn(CHROME, [...CHROME_ARGS, '--headless=new', '--mute-audio', '--disable-gpu', '--no-first-run', '--no-default-browser-check', `--user-data-dir=${dir}`,
    '--remote-debugging-port=0', ...(autoplayFlag ? ['--autoplay-policy=no-user-gesture-required'] : []), '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream',
    'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'] });
  let stderr = '', exited = null;
  proc.stderr.on('data', (d) => { stderr = (stderr + d).slice(-2000); });
  CHROMES.add(proc);
  proc.on('exit', (code, signal) => { exited = signal || code; CHROMES.delete(proc); removeProfile(dir); });
  const portFile = path.join(dir, 'DevToolsActivePort');
  const readPort = () => { try { const p = fs.readFileSync(portFile, 'utf8').split('\n')[0]; return /^\d+$/.test(p) ? p : null; } catch { return null; } };
  const t0 = Date.now(); let port = null;
  while (!(port = readPort()) && exited === null && Date.now() - t0 < 30000) await sleep(100);
  if (port) return { proc, port };
  proc.kill();
  throw new Error(`Chrome did not start (exit: ${exited}); stderr tail:\n${stderr}`);
}

/* → { send, events, evaluate, text, waitFor, click, close } */
export async function launch({ autoplayFlag = true } = {}) {
  let started;
  try { started = await startChrome({ autoplayFlag }); } catch { started = await startChrome({ autoplayFlag }); }
  const { proc, port } = started;
  const page = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));
  let id = 0; const pending = new Map(); const events = [];
  ws.addEventListener('message', (m) => {
    const msg = JSON.parse(m.data);
    if (msg.id && pending.has(msg.id)) { const { resolve, reject, timer } = pending.get(msg.id); clearTimeout(timer); pending.delete(msg.id); msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result); }
    else if (msg.method) {
      events.push(msg);
      if (msg.method === 'Page.javascriptDialogOpening') ws.send(JSON.stringify({ id: ++id, method: 'Page.handleJavaScriptDialog', params: { accept: true } }));
    }
  });
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const i = ++id;
    const timer = setTimeout(() => { if (pending.delete(i)) reject(new Error(`CDP ${method} did not answer within 120 s`)); }, 120_000);
    pending.set(i, { resolve, reject, timer }); ws.send(JSON.stringify({ id: i, method, params }));
  });
  const evaluate = async (expr) => {
    const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
    return r.result.value;
  };
  const text = () => evaluate('document.body.innerText');
  const consoleErrors = () => events.filter((e) => e.method === 'Runtime.exceptionThrown' || (e.method === 'Runtime.consoleAPICalled' && e.params.type === 'error'))
    .map((e) => JSON.stringify(e.params).slice(0, 300));
  const waitFor = async (src, ms = 15000, label = src) => {
    const t0 = Date.now();
    while (Date.now() - t0 < ms) {
      try { if (await evaluate(`(() => { try { return !!(${src}); } catch { return false; } })()`)) return; } catch (e) { if (!NAVIGATING.test(String(e && e.message))) throw e; }
      await sleep(200);
    }
    let page = '';
    try { page = (await text()).slice(0, 900); } catch { /* navigating */ }
    throw new Error(`timeout: ${label}\n--- page ---\n${page}\n--- console ---\n${consoleErrors().join('\n')}`);
  };
  const click = (sel) => evaluate(`document.querySelector(${JSON.stringify(sel)}).click()`);
  return { send, events, evaluate, text, waitFor, click, consoleErrors, close: () => { try { ws.close(); } catch { /* closed */ } proc.kill(); } };
}
