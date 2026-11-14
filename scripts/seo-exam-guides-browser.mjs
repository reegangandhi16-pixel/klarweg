#!/usr/bin/env node
/* Browser audit of the twelve exam guides and their hub in the BUILT artifact.
   bash scripts/site-artifact.sh _site
   node scripts/seo-exam-guides-browser.mjs _site
   Optional: CHROME_PATH, CHROME_ARGS, EXAM_GUIDE_SCREENSHOTS (output directory).
   Requires Node 22+ and Chromium/Chrome. Never publishes the artifact. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { findChrome } from './chapter-resources/chrome-pdf.mjs';
import { loadExamGuides, HUB } from './build-exam-guides.mjs';
import { SITE_BASE } from './site-origin.mjs';

const root = fs.realpathSync(process.argv[2] || '_site');
const lessons = loadExamGuides();
const files = [HUB, ...lessons.map(g => g.path)];
const screenshots = process.env.EXAM_GUIDE_SCREENSHOTS;
if (screenshots) fs.mkdirSync(screenshots, { recursive: true });
const server = http.createServer((req, res) => {
  let file = path.resolve(root, '.' + new URL(req.url, 'http://localhost').pathname);
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  else if (!fs.existsSync(file) && fs.existsSync(file + '.html')) file += '.html';
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); res.end(); return; }
  const type = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.ico': 'image/x-icon', '.png': 'image/png' }[path.extname(file)] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': type }); fs.createReadStream(file).pipe(res);
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-exam-guides-'));
let proc, ws;
const errors = [], networkErrors = [], external = [];
let passed = 0;
try {
  const chrome = findChrome();
  assert.ok(chrome, 'Chrome/Chromium is required; set CHROME_PATH');
  proc = spawn(chrome, [...(process.env.CHROME_ARGS || '').split(' ').filter(Boolean), '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', '--disable-extensions', '--remote-debugging-port=0', `--user-data-dir=${profile}`, '--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE 127.0.0.1', 'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'] });
  const wsUrl = await new Promise((resolve, reject) => {
    let stderr = '';
    const timeout = setTimeout(() => reject(new Error('Chrome did not start in 30 seconds: ' + stderr.slice(-500))), 30000);
    proc.stderr.on('data', d => {
      stderr = (stderr + d).slice(-2000);
      const match = /DevTools listening on (ws:\/\/\S+)/.exec(stderr);
      if (match) { clearTimeout(timeout); resolve(match[1]); }
    });
    proc.once('error', e => { clearTimeout(timeout); reject(e); });
    proc.once('exit', code => { clearTimeout(timeout); reject(new Error('Chrome exited: ' + code)); });
  });
  const browserUrl = new URL(wsUrl);
  const targets = await (await fetch(`http://${browserUrl.host}/json`)).json();
  ws = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
  let id = 0;
  const pending = new Map(), events = [];
  ws.onmessage = message => {
    const msg = JSON.parse(message.data);
    if (pending.has(msg.id)) {
      const p = pending.get(msg.id); pending.delete(msg.id); clearTimeout(p.timer);
      msg.error ? p.reject(new Error(msg.error.message)) : p.resolve(msg.result);
    } else {
      const i = events.findIndex(e => e.method === msg.method);
      if (i >= 0) events.splice(i, 1)[0].resolve(msg.params);
      if (msg.method === 'Runtime.exceptionThrown') errors.push(msg.params.exceptionDetails.text);
      if (msg.method === 'Network.responseReceived' && msg.params.response.status >= 400) networkErrors.push(msg.params.response.url);
      if (msg.method === 'Network.requestWillBeSent') {
        const u = new URL(msg.params.request.url);
        if (/^https?:$/.test(u.protocol) && u.origin !== origin) external.push(u.origin);
      }
    }
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const current = ++id;
    const timer = setTimeout(() => { pending.delete(current); reject(new Error(method + ' timed out')); }, 15000);
    pending.set(current, { resolve, reject, timer }); ws.send(JSON.stringify({ id: current, method, params }));
  });
  const once = method => new Promise(resolve => events.push({ method, resolve }));
  const evaluate = async expression => {
    const result = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    assert.ok(!result.exceptionDetails, JSON.stringify(result.exceptionDetails));
    return result.result.value;
  };
  const enter = async () => {
    await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Enter', code: 'Enter', text: '\r', unmodifiedText: '\r', windowsVirtualKeyCode: 13 });
    await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
  };
  const load = async url => {
    const loaded = once('Page.loadEventFired');
    const result = await send('Page.navigate', { url });
    assert.ok(!result.errorText, result.errorText); await loaded;
  };
  await send('Page.enable'); await send('Page.bringToFront'); await send('Runtime.enable'); await send('Network.enable');
  const watchdog = setTimeout(() => proc.kill(), 360000);
  try {
    for (const width of [320, 390, 768, 1440]) {
      await send('Emulation.setDeviceMetricsOverride', { width, height: 1000, deviceScaleFactor: 1, mobile: width < 768 });
      for (const file of files) {
        const url = '/' + file.slice(0, -5);
        await load(origin + url);
        const data = await evaluate(`(() => {
          const ids = [...document.querySelectorAll('[id]')].map(e => e.id);
          const section = document.querySelector('.exam-update') || document.querySelector('.panel');
          return {overflow:document.documentElement.scrollWidth-innerWidth,h1:document.querySelectorAll('h1').length,uniqueIds:new Set(ids).size===ids.length,canonical:document.querySelector('[rel=canonical]').href,sourceDate:document.body.textContent.includes('14 November 2026'),section:!!section};
        })()`);
        assert.ok(data.overflow <= 1, `${file} at ${width}: overflow ${data.overflow}`);
        assert.equal(data.h1, 1); assert.ok(data.uniqueIds); assert.ok(data.section);assert.ok(data.sourceDate);
        assert.equal(data.canonical, SITE_BASE + url);
        const expected = file.startsWith('goethe/') ? '#provider-planning' : file === HUB ? '#c2' : '#sources';
        if (file.startsWith('telc/')) {
          await evaluate("document.querySelector('.hero a[href=\"#sources\"]').focus()");
          await enter();
          assert.equal(await evaluate('location.hash'), '#sources');
        }
        await evaluate(`document.querySelector('${expected}').scrollIntoView({behavior:'instant',block:'start'})`);
        assert.ok(await evaluate(`document.querySelector('${expected}').getBoundingClientRect().top < innerHeight`), `${file} at ${width}: target section visible`);
        if (screenshots && [390,1440].includes(width)) {
          const { data: png } = await send('Page.captureScreenshot', { format: 'png' });
          fs.writeFileSync(path.join(screenshots, file.replaceAll('/','-').slice(0,-5) + '-section-' + width + '.png'), Buffer.from(png, 'base64'));
          await evaluate('scrollTo(0,0)');
          const top = await send('Page.captureScreenshot', { format: 'png' });
          fs.writeFileSync(path.join(screenshots, file.replaceAll('/','-').slice(0,-5) + '-' + width + '.png'), Buffer.from(top.data, 'base64'));
        }
        passed++;
      }
      console.log(`PASS: ${files.length} pages at ${width}px`);
    }
    await send('Emulation.setScriptExecutionDisabled', { value: true });
    await load(origin + '/telc/c2-exam');
    await evaluate("document.querySelector('.hero a[href=\"#sources\"]').focus()");await enter();
    assert.equal(await evaluate('location.hash'), '#sources', 'source links work without page scripts');
    assert.deepEqual(errors, []); assert.deepEqual(networkErrors, []); assert.deepEqual(external, []);
    console.log(JSON.stringify({ passed, viewports: [320,390,768,1440], pageErrors: errors.length, failedRequests: networkErrors.length, externalRequests: external.length, sourceNavigationWithoutJS: true }));
  } finally { clearTimeout(watchdog); }
} finally {
  ws?.close();
  if (proc && proc.exitCode === null) { const stopped = new Promise(resolve => proc.once('exit', resolve)); proc.kill(); await stopped; }
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
}
