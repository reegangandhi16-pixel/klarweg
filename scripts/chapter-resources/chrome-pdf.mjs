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
  const waiters = [];   // { sessionId, method, resolve }
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
    const id = nextId++;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
  });
  const once = (method, sessionId) => new Promise((resolve) => waiters.push({ method, sessionId, resolve }));

  async function printToPdf(fileUrl) {
    const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
    try {
      await send('Page.enable', {}, sessionId);
      const loaded = once('Page.loadEventFired', sessionId);
      await send('Page.navigate', { url: fileUrl }, sessionId);
      await loaded;
      await send('Runtime.evaluate', { expression: 'document.fonts.ready.then(() => document.fonts.size)', awaitPromise: true }, sessionId);
      const { data } = await send('Page.printToPDF', {
        printBackground: true, preferCSSPageSize: true, displayHeaderFooter: false,
        generateDocumentOutline: true, generateTaggedPDF: true,
      }, sessionId);
      return Buffer.from(data, 'base64');
    } finally {
      await send('Target.closeTarget', { targetId }).catch(() => {});
    }
  }

  async function close() {
    try { await send('Browser.close'); } catch { /* already gone */ }
    ws.close();
    await new Promise((r) => { if (proc.exitCode != null) r(); else { proc.once('exit', r); setTimeout(() => { proc.kill('SIGKILL'); r(); }, 5000); } });
    fs.rmSync(profile, { recursive: true, force: true });
  }

  return { printToPdf, close };
}
