/* ============================================================
   Minimal headless-Chrome PDF printer over the DevTools protocol.
   One browser for the whole run, one tab per job. No npm deps —
   uses Node's built-in WebSocket (Node 22+).
   (`chrome --print-to-pdf` writes the file but can hang for
   minutes before exiting on macOS, so the CLI path is not used.)
============================================================ */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';

export function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser',
  ].filter(Boolean);
  return candidates.find((p) => fs.existsSync(p)) || null;
}

export async function launchChrome(chromePath) {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-sg-'));
  const proc = spawn(chromePath, [
    '--headless', '--disable-gpu', '--no-first-run', '--no-default-browser-check', '--disable-extensions',
    '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank',
  ], { stdio: ['ignore', 'ignore', 'pipe'] });

  const wsUrl = await new Promise((resolve, reject) => {
    let buf = '';
    const t = setTimeout(() => reject(new Error('Chrome did not start within 30s')), 30000);
    proc.stderr.on('data', (d) => {
      buf += d;
      const m = /DevTools listening on (ws:\/\/\S+)/.exec(buf);
      if (m) { clearTimeout(t); resolve(m[1]); }
    });
    proc.on('exit', (code) => { clearTimeout(t); reject(new Error('Chrome exited early (' + code + ')')); });
  });

  const ws = new WebSocket(wsUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = () => rej(new Error('DevTools connection failed')); });

  let nextId = 1;
  const pending = new Map();
  const waiters = [];   // { sessionId, method, resolve, reject }
  // Once the DevTools socket is gone nothing can answer: fail every waiting
  // and every later request at once instead of letting each run to its timeout.
  let lost = null;
  const disconnect = (why) => {
    if (lost) return;
    lost = new Error(`Chrome: DevTools connection lost (${why})`);
    for (const { reject } of pending.values()) reject(lost);
    pending.clear();
    for (const w of waiters.splice(0)) w.reject(lost);
  };
  ws.onclose = (ev) => disconnect(`close code ${ev.code}`);
  ws.onerror = () => disconnect('socket error');
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
    } else if (msg.method) {
      const i = waiters.findIndex((w) => w.method === msg.method && w.sessionId === msg.sessionId);
      if (i >= 0) waiters.splice(i, 1)[0].resolve(msg.params);
    }
  };
  const send = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
    if (lost) { reject(lost); return; }
    const id = nextId++;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
  });
  const once = (method, sessionId) => new Promise((resolve, reject) => { if (lost) reject(lost); else waiters.push({ method, sessionId, resolve, reject }); });

  // Every step is bounded: a hung tab fails its job with the step's name instead of stalling the run.
  const within = (ms, step, p) => {
    let t;
    return Promise.race([p, new Promise((_, reject) => { t = setTimeout(() => reject(new Error(`Chrome: ${step} timed out after ${ms / 1000}s`)), ms); })]).finally(() => clearTimeout(t));
  };

  /* The PDF comes back as a stream read in 1 MB pieces: returned whole, a PDF
     over ~3 MB is a base64 message over 4 MiB, and the socket drops it.
     outline: PDF bookmarks from the headings (the level bundles switch them off). */
  async function printToPdf(fileUrl, { outline = true, timeoutMs = 300000 } = {}) {
    const { targetId } = await within(30000, 'open tab', send('Target.createTarget', { url: 'about:blank' }));
    try {
      const { sessionId } = await within(30000, 'attach', send('Target.attachToTarget', { targetId, flatten: true }));
      await within(30000, 'Page.enable', send('Page.enable', {}, sessionId));
      const loaded = once('Page.loadEventFired', sessionId);
      await within(60000, 'navigate', send('Page.navigate', { url: fileUrl }, sessionId));
      await within(60000, 'load', loaded);
      await within(60000, 'fonts', send('Runtime.evaluate', { expression: 'document.fonts.ready.then(() => document.fonts.size)', awaitPromise: true }, sessionId));
      const { stream } = await within(timeoutMs, 'printToPDF', send('Page.printToPDF', {
        printBackground: true, preferCSSPageSize: true, displayHeaderFooter: false,
        generateDocumentOutline: outline, generateTaggedPDF: true, transferMode: 'ReturnAsStream',
      }, sessionId));
      const parts = [];
      for (let eof = false; !eof;) {
        const r = await within(60000, 'read PDF stream', send('IO.read', { handle: stream, size: 1 << 20 }, sessionId));
        parts.push(Buffer.from(r.data, r.base64Encoded ? 'base64' : 'latin1'));
        eof = r.eof;
      }
      await within(10000, 'close PDF stream', send('IO.close', { handle: stream }, sessionId)).catch(() => {});
      return Buffer.concat(parts);
    } finally {
      await within(10000, 'close tab', send('Target.closeTarget', { targetId })).catch(() => {});
    }
  }

  async function close() {
    try { await within(10000, 'close browser', send('Browser.close')); } catch { /* already gone, or killed below */ }
    ws.close();
    await new Promise((r) => { if (proc.exitCode != null) r(); else { proc.once('exit', r); setTimeout(() => { proc.kill('SIGKILL'); r(); }, 5000); } });
    fs.rmSync(profile, { recursive: true, force: true });
  }

  return { printToPdf, close };
}
