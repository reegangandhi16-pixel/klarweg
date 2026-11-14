#!/usr/bin/env node
/* Browser audit of the BUILT public artifact; no npm dependencies or live site.
   bash scripts/site-artifact.sh _site
   node scripts/seo-practice-browser.mjs _site
   Optional: CHROME_PATH, CHROME_ARGS, PRACTICE_SCREENSHOTS (output directory).
   Requires Node 22+ and Chromium/Chrome. Never publishes the artifact. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { findChrome } from './chapter-resources/chrome-pdf.mjs';
import { loadGuides } from './build-seo-practice.mjs';
import { SITE_BASE } from './site-origin.mjs';

const root = fs.realpathSync(process.argv[2] || '_site');
const files = fs.readdirSync(path.join(root, 'practice')).filter(f => f.endsWith('.html')).sort();
const lessons = loadGuides();
const lessonCount = lessons.length;
const wordBankPages = new Set(lessons.filter(g => g.wordBank).map(g => g.slug + '.html'));
assert.equal(files.length, lessonCount + 1, 'expected all registered lessons and the hub in the public artifact');
const screenshots = process.env.PRACTICE_SCREENSHOTS;
if (screenshots) fs.mkdirSync(screenshots, { recursive: true });
const representatives = new Set(['index.html', 'a1-ein-eine-exercises.html', 'a2-wechselpraepositionen-wohin-exercises.html', 'b1-polite-konjunktiv-ii-exercises.html', 'b2-nominalisation-exercises.html', 'a1-modal-verbs-present-exercises.html', 'a2-adjective-endings-indefinite-exercises.html', 'b1-relative-clauses-dative-exercises.html', 'b2-passive-perfect-tense-exercises.html', 'a1-lernen-studieren-word-choice-exercises.html', 'a2-kennen-wissen-word-choice-exercises.html', 'b1-legen-liegen-word-choice-exercises.html', 'b2-effektiv-effizient-word-choice-exercises.html', 'a1-ordering-in-cafe-communication-exercises.html', 'a2-rescheduling-appointment-communication-exercises.html', 'b1-requesting-specific-feedback-communication-exercises.html', 'b2-moderating-discussion-communication-exercises.html', 'a1-family-relations-vocabulary-exercises.html', 'a2-file-actions-vocabulary-exercises.html', 'b1-online-delivery-vocabulary-exercises.html', 'b2-research-methods-vocabulary-exercises.html', 'a1-viel-sehr-word-choice-exercises.html', 'a2-antworten-beantworten-word-choice-exercises.html', 'b1-rechtzeitig-puenktlich-word-choice-exercises.html', 'b2-foerdern-fordern-word-choice-exercises.html']);
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
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-practice-'));
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
        const url = file === 'index.html' ? '/practice/' : '/practice/' + file.slice(0, -5);
        await load(origin + url);
        const data = await evaluate(`(() => {
          const ids = [...document.querySelectorAll('[id]')].map(e => e.id);
          const color = s => { const rgb=s.match(/\\d+/g).slice(0,3).map(Number).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4});return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722; };
          const button = document.querySelector('.btn:not(.secondary)');
          const c = button ? getComputedStyle(button) : null;
          const lum = c ? [color(c.color),color(c.backgroundColor)].sort((a,b)=>b-a) : [1,0];
          return {wordBank:[...document.querySelectorAll('#quiz .mini strong')].some(e=>e.textContent==='Word bank:'),overflow:document.documentElement.scrollWidth-innerWidth,h1:document.querySelectorAll('h1').length,uniqueIds:new Set(ids).size===ids.length,css:getComputedStyle(document.querySelector('.hero')).borderRadius,canonical:document.querySelector('[rel=canonical]').href,details:document.querySelectorAll('details').length,topics:document.querySelectorAll('.topic').length,contrast:(lum[0]+.05)/(lum[1]+.05),targets:[...document.querySelectorAll('summary')].every(e=>e.getBoundingClientRect().height>=44)};
        })()`);
        assert.ok(data.overflow <= 1, `${file} at ${width}: overflow ${data.overflow}`);
        assert.equal(data.wordBank, wordBankPages.has(file), file + ': correct word-bank presence');
        assert.equal(data.h1, 1); assert.ok(data.uniqueIds); assert.equal(data.css, '24px');
        assert.equal(data.canonical, SITE_BASE + url); assert.ok(data.contrast >= 4.5); assert.ok(data.targets);
        assert.equal(data.details, file === 'index.html' ? 0 : 4);
        if (file === 'index.html') assert.equal(data.topics, lessonCount);
        for (let i = 0; i < data.details; i++) {
          await evaluate(`document.querySelectorAll('summary')[${i}].focus()`);
          await enter(); assert.equal(await evaluate(`document.querySelectorAll('details')[${i}].open`), true);
          await enter(); assert.equal(await evaluate(`document.querySelectorAll('details')[${i}].open`), false);
        }
        if (screenshots && representatives.has(file) && [390,1440].includes(width)) {
          await evaluate('scrollTo(0,0)');
          const { data: png } = await send('Page.captureScreenshot', { format: 'png' });
          fs.writeFileSync(path.join(screenshots, file.slice(0,-5) + '-' + width + '.png'), Buffer.from(png, 'base64'));
        }
        passed++;
      }
      console.log(`PASS: ${files.length} pages at ${width}px`);
    }
    await send('Emulation.setScriptExecutionDisabled', { value: true });
    await load(origin + '/practice/a1-der-die-das-exercises');
    await evaluate("document.querySelector('summary').focus()"); await enter();
    assert.equal(await evaluate("document.querySelector('details').open"), true, 'native answers work without page scripts');
    assert.deepEqual(errors, []); assert.deepEqual(networkErrors, []); assert.deepEqual(external, []);
    console.log(JSON.stringify({ passed, viewports: [320,390,768,1440], pageErrors: errors.length, failedRequests: networkErrors.length, externalRequests: external.length, nativeAnswersWithoutJS: true }));
  } finally { clearTimeout(watchdog); }
} finally {
  ws?.close();
  if (proc && proc.exitCode === null) { const stopped = new Promise(resolve => proc.once('exit', resolve)); proc.kill(); await stopped; }
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
}
