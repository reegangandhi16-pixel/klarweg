/* Record & Check — 3 checks per Speaking task per day, page side.
   Runs the REAL Speaking block of chapter/chapter-app.js in a VM with a fake
   DOM, microphone, MediaRecorder, SpeechRecognition, fetch and localStorage
   (nothing is played or recorded) and drives it through the real click
   handlers. The server side (the actual enforcement) is tested in
   access/worker/test/speech-task-cap.test.mjs. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { speakingCounts, render } from './build-speech-tasks.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = fs.readFileSync(path.join(ROOT, 'chapter/chapter-app.js'), 'utf8');
const BLOCK = APP.slice(APP.indexOf('  // ---- Speaking ----'), APP.indexOf('  // ---- Klarweg AI integration ----'));
const API = 'https://klarweg-access.example.workers.dev';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36';
const LIMIT_MSG = 'You’ve used all 3 checks for this task today. Move to the next speaking task.';
const DAY = 86400000;

/* ---------- tiny DOM ---------- */
class Text { constructor(t) { this.nodeType = 3; this.textContent = String(t); } }
class El {
  constructor(tag) {
    this.nodeType = 1; this.tagName = tag.toUpperCase(); this.children = []; this.attrs = {}; this.style = {}; this.listeners = {}; this.dataset = {}; this.hidden = false; this.disabled = false;
    const set = new Set(); this._cls = set;
    this.classList = { add: (...c) => c.forEach((x) => set.add(x)), remove: (...c) => c.forEach((x) => set.delete(x)), contains: (c) => set.has(c), toggle: (c, v) => (v ?? !set.has(c)) ? set.add(c) : set.delete(c) };
  }
  set className(v) { this._cls.clear(); String(v).split(/\s+/).filter(Boolean).forEach((c) => this._cls.add(c)); }
  get id() { return this.attrs.id; }
  appendChild(c) { this.children.push(c); c.parentNode = this; return c; }
  append(...k) { k.forEach((c) => c != null && this.appendChild(typeof c === 'string' ? new Text(c) : c)); }
  get lastChild() { return this.children[this.children.length - 1]; }
  set innerHTML(v) { this.children = v ? [new Text(v)] : []; }
  get textContent() { return this.children.map((c) => c.textContent).join(''); }
  set textContent(v) { this.children = [new Text(v)]; }
  setAttribute(k, v) { this.attrs[k] = String(v); } getAttribute(k) { return k in this.attrs ? this.attrs[k] : null; } removeAttribute(k) { delete this.attrs[k]; }
  addEventListener(t, fn) { (this.listeners[t] = this.listeners[t] || []).push(fn); }
  querySelector(sel) { return this.find((n) => n._cls && n._cls.has(sel.replace(/^\./, ''))) || null; }
  find(pred) { for (const c of this.children) { if (c.nodeType !== 1) continue; if (pred(c)) return c; const d = c.find(pred); if (d) return d; } return null; }
  findAll(pred, out = []) { for (const c of this.children) { if (c.nodeType !== 1) continue; if (pred(c)) out.push(c); c.findAll(pred, out); } return out; }
  getBoundingClientRect() { return { top: 10, bottom: 20, height: 10 }; }
  remove() {}
}
function el(tag, props = {}, ...kids) {
  const n = new El(tag);
  for (const k in props) {
    if (k === 'class') n.className = props[k];
    else if (k.startsWith('on') && typeof props[k] === 'function') n.addEventListener(k.slice(2), props[k]);
    else if (props[k] != null) n.setAttribute(k, props[k]);
  }
  kids.flat().forEach((c) => { if (c != null) n.appendChild(typeof c === 'string' ? new Text(c) : c); });
  return n;
}
const memStorage = () => { const m = new Map(); return { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), _m: m }; };

/* ---------- harness ---------- */
const TASKS = [{ de: 'Ich heiße Rohan.', en: 'My name is Rohan.' }, { de: 'Ich komme aus Indien.', en: 'I come from India.' }, { de: 'Ich wohne in Pune.', en: 'I live in Pune.' }];
function harness({ chapter = 'a1-1-alphabet', speaking = TASKS, eligible = true, signedIn = true, used = null, statusFails = false, api = API,
  transcribe = [], taskCheck = [], storage = memStorage(), now0 = Date.UTC(2026, 9, 3, 10, 0) } = {}) {
  let now = now0; const timers = [];
  const setTimeout_ = (fn, ms) => { const t = { fn, at: now + (ms || 0), id: timers.length + 1 }; timers.push(t); return t.id; };
  const clearTimeout_ = (id) => { const t = timers.find((x) => x.id === id); if (t) t.fn = null; };
  const advance = (ms) => { now += ms; timers.filter((t) => t.fn && t.at <= now).sort((a, b) => a.at - b.at).forEach((t) => { const f = t.fn; t.fn = null; f(); }); };
  const recs = [], recorders = [], fetches = [];
  class FakeRec {
    constructor() { recs.push(this); } start() { this.started = true; } stop() { this.stopped = true; } abort() {}
    result(t) { this.onresult && this.onresult({ results: [Object.assign([{ transcript: t }], { isFinal: true })] }); }
    end() { this.onend && this.onend(); }
  }
  class FakeMR {
    constructor(stream, opts) { this.state = 'inactive'; this.mimeType = (opts && opts.mimeType) || ''; recorders.push(this); }
    static isTypeSupported(m) { return ['audio/webm;codecs=opus', 'audio/webm'].includes(m); }
    start() { this.state = 'recording'; } stop() { this.state = 'inactive'; }
    finish(bytes = 2048) { this.ondataavailable && this.ondataavailable({ data: new Blob([new Uint8Array(bytes)], { type: 'audio/webm' }) }); this.onstop && this.onstop(); }
  }
  const server = { used: used ? used.slice() : speaking.map(() => 0) };
  const tq = transcribe.slice(), cq = taskCheck.slice();
  const status = () => {
    if (!signedIn) return { ok: true, enabled: true, signedIn: false, eligible: false };
    return { ok: true, enabled: true, signedIn: true, eligible, tasks: { limit: 3, used: server.used.slice(), remaining: server.used.map((x) => 3 - x), resetsAt: new Date(Math.floor(now / DAY) * DAY + DAY).toISOString() } };
  };
  // A server stand-in that applies the same 3-per-task rule as klarweg-access.
  const count = (i) => { if (server.used[i] >= 3) return null; server.used[i]++; return { limit: 3, used: server.used[i], remaining: 3 - server.used[i], locked: server.used[i] >= 3 }; };
  const fetch_ = (url, init = {}) => {
    url = String(url); fetches.push({ url, init });
    const reply = (status, body) => Promise.resolve({ ok: status < 400, status, json: async () => body });
    if (/\/speech\/status/.test(url)) return statusFails ? Promise.reject(new TypeError('offline')) : reply(200, status());
    const task = Number((url.match(/[?&]task=(\d+)/) || [])[1]);
    if (/\/speech\/task-check/.test(url)) {
      const r = cq.shift();
      if (r && r.network) return Promise.reject(new TypeError('Failed to fetch'));
      if (r) return reply(r.status, r.body);
      const t = count(task);
      return t ? reply(200, { ok: true, task: t }) : reply(429, { ok: false, error: 'task_limit', message: LIMIT_MSG, task: { limit: 3, used: 3, remaining: 0, locked: true } });
    }
    const r = tq.shift();
    if (r) return reply(r.status, r.body);
    const t = count(task);
    return t ? reply(200, { ok: true, text: speaking[task].de.replace(/\.$/, ''), task: t }) : reply(429, { ok: false, error: 'task_limit', message: LIMIT_MSG, task: { limit: 3, used: 3, remaining: 0, locked: true } });
  };
  const stream = { getTracks: () => [{ stop() {} }], getAudioTracks: () => [{ readyState: 'live', muted: false, label: 'mic' }] };
  const ctx = {
    navigator: { userAgent: UA, maxTouchPoints: 0, mediaDevices: { getUserMedia: () => Promise.resolve(stream) } },
    location: { search: '', protocol: 'https:', href: 'https://klarweg.test/chapter/x.html', hostname: 'klarweg.test' },
    document: { body: new El('body') }, isSecureContext: true, scrollY: 0, innerHeight: 800, scrollTo() {},
    matchMedia: () => ({ matches: true }), URL: Object.assign(function (u) { return new URL(u); }, { createObjectURL: () => 'blob:rec', revokeObjectURL() {} }),
    Blob, FormData, AbortController, setTimeout: setTimeout_, clearTimeout: clearTimeout_, Date: { now: () => now, parse: Date.parse }, JSON, String, Math, Promise, Object, Array, Set, Number, encodeURIComponent, decodeURIComponent,
    el, C: { id: chapter, speaking }, ICON: { mic: '', speaker: '' },
    Audio: { stop() {}, speak() {} }, aiSlot: () => el('div', { class: 'kw-ai-slot' }), IS_EXAM: false, SentencePlay: { enabled: false },
    MediaRecorder: FakeMR, webkitSpeechRecognition: FakeRec, fetch: fetch_, localStorage: storage,
    KWAccess: { ready: () => Promise.resolve({ authenticated: signedIn }) }, KW_ACCESS_API: api
  };
  vm.createContext(ctx);
  ctx.window = ctx; ctx.self = ctx; ctx.top = ctx;
  vm.runInContext(BLOCK + '\nthis.__t = { bodySpeaking };', ctx);
  const wrap = ctx.__t.bodySpeaking();
  const btns = wrap.findAll((n) => n._cls.has('mic-btn'));
  const results = wrap.findAll((n) => n._cls.has('speak-result'));
  const notes = wrap.findAll((n) => n._cls.has('kw-task-left'));
  const flush = async () => { for (let i = 0; i < 8; i++) await new Promise((r) => setImmediate(r)); };
  const click = (i = 0) => btns[i].listeners.click.forEach((f) => f());
  // AI path: record → Stop & check → recorder delivers → request out → answer rendered
  const aiCheck = async (i = 0) => { click(i); await flush(); advance(2400); click(i); recorders[recorders.length - 1].finish(); await flush(); advance(800); await flush(); };
  // Browser recognition path: recognition hears the sentence → counted → scored
  const browserCheck = async (i = 0, said = speaking[i].de) => { const n = recs.length; click(i); await flush(); const r = recs[n]; if (!r) return false; r.result(said); r.end(); await flush(); advance(800); await flush(); return true; };
  const calls = (re) => fetches.filter((f) => re.test(f.url));
  return { ctx, wrap, btns, results, notes, click, flush, advance, aiCheck, browserCheck, calls, server, recs, recorders, storage,
    note: (i = 0) => (notes[i].hidden ? null : notes[i].textContent), state: (i = 0) => results[i].getAttribute('data-mic-state'), text: (i = 0) => results[i].textContent,
    locked: (i = 0) => btns[i].disabled === true && btns[i].getAttribute('aria-disabled') === 'true' };
}

test('AI path: "Checks left today" 3 → 2 → 1, then the task locks with the message; another task stays usable', async () => {
  const h = harness();
  assert.equal(h.note(0), null, 'nothing shown before the server answered');
  await h.flush();
  assert.equal(h.note(0), 'Checks left today: 3');
  for (const left of [2, 1]) { await h.aiCheck(0); assert.equal(h.state(0), 'result'); assert.equal(h.note(0), 'Checks left today: ' + left); assert.equal(h.locked(0), false); }
  await h.aiCheck(0);
  assert.equal(h.state(0), 'result', 'the 3rd check still shows its full result');
  assert.match(h.text(0), /Target.*Recognized.*Word Match/s, 'result panel unchanged');
  assert.equal(h.note(0), LIMIT_MSG);
  assert.equal(h.locked(0), true);
  assert.equal(h.calls(/\/speech\/transcribe/).length, 3);
  assert.ok(h.calls(/\/speech\/transcribe/).every((f) => /[?&]task=0&/.test(f.url)), 'the request names its task');
  h.click(0); await h.flush();
  assert.equal(h.calls(/\/speech\/transcribe/).length, 3, 'a 4th click sends nothing');
  assert.equal(h.recorders.length, 3, 'and does not even open the microphone');
  assert.equal(h.note(1), 'Checks left today: 3'); assert.equal(h.locked(1), false);
  await h.aiCheck(1);
  assert.equal(h.state(1), 'result'); assert.equal(h.note(1), 'Checks left today: 2');
  assert.ok(/[?&]task=1&/.test(h.calls(/\/speech\/transcribe/).pop().url));
});

test('accessibility: the note is a polite status the button points to; the locked button is disabled and aria-disabled', async () => {
  const h = harness({ used: [3, 1, 0] });
  await h.flush();
  const [b, n] = [h.btns[0], h.notes[0]];
  assert.equal(n.getAttribute('role'), 'status'); assert.equal(n.getAttribute('aria-live'), 'polite');
  assert.equal(b.getAttribute('aria-describedby'), n.id); assert.equal(n.id, 'kw-task-note-0');
  assert.equal(h.locked(0), true, 'locked on load (checks used on another device)');
  assert.equal(n.textContent, LIMIT_MSG); assert.match(n.textContent, /this task/); assert.doesNotMatch(n.textContent, /chapter/);
  assert.equal(n.dataset.taskState, 'locked');
  assert.equal(h.note(1), 'Checks left today: 2'); assert.equal(h.locked(1), false);
  assert.equal(h.note(2), 'Checks left today: 3');
  assert.equal(h.notes[1].id, 'kw-task-note-1'); assert.equal(h.btns[2].getAttribute('aria-describedby'), 'kw-task-note-2');
});

test('stale tab: the server refuses a 4th check → locked message, no browser fallback offered, other tasks keep the AI path', async () => {
  const h = harness({ transcribe: [{ status: 429, body: { ok: false, error: 'task_limit', message: LIMIT_MSG, task: { limit: 3, used: 3, remaining: 0, locked: true } } }] });
  await h.flush();
  assert.equal(h.note(0), 'Checks left today: 3');            // another device used them meanwhile
  await h.aiCheck(0);
  assert.equal(h.state(0), 'task-limit'); assert.match(h.text(0), /used all 3 checks for this task today/);
  assert.equal(h.results[0].findAll((n) => n.tagName === 'BUTTON').length, 0, 'no Check again, no Use browser check');
  assert.equal(h.locked(0), true); assert.equal(h.note(0), LIMIT_MSG);
  await h.aiCheck(1);
  assert.equal(h.state(1), 'result', 'task 1 still goes to the AI');
  assert.equal(h.recs.length, 0, 'browser recognition never started');
});

test('browser path (not entitled): every transcript is counted on the server first; after 3 the task locks', async () => {
  const h = harness({ eligible: false });
  await h.flush();
  assert.equal(h.note(0), 'Checks left today: 3');
  for (const left of [2, 1]) { assert.ok(await h.browserCheck(0)); assert.equal(h.state(0), 'result'); assert.equal(h.note(0), 'Checks left today: ' + left); }
  assert.ok(await h.browserCheck(0));
  assert.equal(h.state(0), 'result'); assert.equal(h.note(0), LIMIT_MSG); assert.equal(h.locked(0), true);
  assert.equal(h.calls(/\/speech\/task-check\?chapter=a1-1-alphabet&task=0$/).length, 3);
  assert.equal(h.calls(/\/speech\/transcribe/).length, 0, 'no AI request on this path');
  h.click(0); await h.flush();
  assert.equal(h.recs.length, 3, 'locked: recognition does not start again');
  assert.ok(await h.browserCheck(2)); assert.equal(h.note(2), 'Checks left today: 2', 'another task has its own 3');
});

test('browser path: a refusal from the server (checks used elsewhere) shows the limit, not a score', async () => {
  const h = harness({ eligible: false, taskCheck: [{ status: 429, body: { ok: false, error: 'task_limit', message: LIMIT_MSG, task: { limit: 3, used: 3, remaining: 0, locked: true } } }] });
  await h.flush();
  await h.browserCheck(0);
  assert.equal(h.state(0), 'task-limit'); assert.doesNotMatch(h.text(0), /Words matched|Word Match/);
  assert.equal(h.locked(0), true);
});

test('"Use browser check" after AI failures is not an unlimited path: it counts against the same task', async () => {
  const fail = { status: 503, body: { ok: false, error: 'speech_unavailable', task: { limit: 3, used: 2, remaining: 1, locked: false } } };
  const h = harness({ used: [2, 0, 0], transcribe: [fail] });
  await h.flush();
  await h.aiCheck(0);
  assert.equal(h.state(0), 'check-error');
  const useBrowser = h.results[0].findAll((n) => n.tagName === 'BUTTON').find((b) => /Use browser check/.test(b.textContent));
  useBrowser.listeners.click.forEach((f) => f());
  assert.ok(await h.browserCheck(0), 'browser recognition runs');
  assert.equal(h.state(0), 'result'); assert.equal(h.note(0), LIMIT_MSG, '2 AI + 1 browser = 3');
  assert.equal(h.locked(0), true);
  h.click(0); await h.flush();
  assert.equal(h.recs.length, 1, 'no 4th check through the browser either');
});

test('signed out: counted in this browser — 3 per task, kept across a refresh, fresh on the next UTC day', async () => {
  const storage = memStorage();
  let h = harness({ signedIn: false, storage });
  await h.flush();
  assert.equal(h.calls(/\/speech\/status/).length, 0, 'signed out: no status request (unchanged)');
  assert.equal(h.note(0), 'Checks left today: 3');
  for (let i = 0; i < 3; i++) assert.ok(await h.browserCheck(0));
  assert.equal(h.locked(0), true); assert.equal(h.note(0), LIMIT_MSG);
  assert.equal(h.calls(/\/speech\/task-check/).length, 0, 'no account → nothing sent');
  h = harness({ signedIn: false, storage });                                       // refresh / reopen
  await h.flush();
  assert.equal(h.locked(0), true, 'refresh keeps the lock'); assert.equal(h.note(1), 'Checks left today: 3');
  h = harness({ signedIn: false, storage, now0: Date.UTC(2026, 9, 4, 0, 1) });     // next UTC day
  await h.flush();
  assert.equal(h.locked(0), false); assert.equal(h.note(0), 'Checks left today: 3');
});

test('server unreachable for a browser check: this browser still caps the task at 3', async () => {
  const net = { network: true };
  const h = harness({ eligible: false, taskCheck: [net, net, net, net] });
  await h.flush();
  for (let i = 0; i < 3; i++) { assert.ok(await h.browserCheck(0)); assert.equal(h.state(0), 'result'); }
  assert.equal(h.locked(0), true);
  h.click(0); await h.flush();
  assert.equal(h.recs.length, 3);
});

test('a page left open past midnight UTC asks the server again and unlocks', async () => {
  const h = harness({ used: [3, 0, 0], now0: Date.UTC(2026, 9, 3, 23, 50) });
  await h.flush();
  assert.equal(h.locked(0), true);
  h.server.used = [0, 0, 0];                                     // the server's new day
  h.advance(11 * 60 * 1000); await h.flush();
  assert.equal(h.calls(/\/speech\/status/).length, 2, 'status asked again after resetsAt');
  assert.equal(h.locked(0), false); assert.equal(h.note(0), 'Checks left today: 3');
});

test('the transcribe URL now always names the task; the dev pilot endpoint path is unchanged', () => {
  assert.match(BLOCK, /'\/speech\/transcribe\?chapter=' \+ encodeURIComponent\(C\.id\) \+ '&task=' \+ C\.speaking\.indexOf\(s\.p\) \+ '&ms=' \+ ms/);
  assert.match(BLOCK, /fetch\(s\.whisper \+ '\/v1\/transcribe'/);
  assert.ok(BLOCK.includes("'You\\u2019ve used all ' + taskLimit() + ' checks for this task today. Move to the next speaking task.'"), 'exact message');
});

/* ---------- all 258 chapters, real data ---------- */
const PAGES = fs.readdirSync(path.join(ROOT, 'chapter')).filter((f) => /^chapter-[a-c][0-9]-.*\.html$/.test(f)).sort();
function chapterData(page) {
  const html = fs.readFileSync(path.join(ROOT, 'chapter', page), 'utf8');
  const src = html.match(/<script src="([^"]*data[^"]*\.js)[^"]*"/)[1].split('?')[0];
  const c = { console: { log() {}, warn() {} } }; c.window = c; vm.createContext(c);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'chapter', src), 'utf8') + '\n;this.__C = CHAPTER;', c);
  return c.__C;
}

test('15: the Worker’s task table is current — every chapter and every Speaking task, ids = positions', () => {
  const counts = speakingCounts();
  assert.equal(Object.keys(counts).length, 258);
  assert.equal(fs.readFileSync(path.join(ROOT, 'access/worker/src/speech-tasks.js'), 'utf8'), render(counts), 'run: node scripts/build-speech-tasks.mjs');
  assert.equal(Object.values(counts).reduce((a, b) => a + b, 0), 1277);
});

test('7: all 258 chapters × all 1,277 tasks — Record & check present, own note, AI request names its task, Target = that task’s answer', async () => {
  let tasks = 0;
  for (const page of PAGES) {
    const C = chapterData(page);
    const h = harness({ chapter: C.id, speaking: C.speaking });
    await h.flush();
    assert.equal(h.btns.length, C.speaking.length, C.id + ': one Record & check per task');
    for (let i = 0; i < C.speaking.length; i++) {
      assert.equal(h.notes[i].id, 'kw-task-note-' + i, C.id);
      assert.equal(h.note(i), 'Checks left today: 3', C.id + ' task ' + i);
      await h.aiCheck(i);
      const req = h.calls(/\/speech\/transcribe/).pop();
      assert.equal(req.url, API + '/speech/transcribe?chapter=' + encodeURIComponent(C.id) + '&task=' + i + '&ms=2400', C.id + ' task ' + i);
      assert.equal(h.state(i), 'result', C.id + ' task ' + i);
      assert.ok(h.text(i).startsWith('Target' + C.speaking[i].de), C.id + ' task ' + i + ': target text');
      assert.equal(h.note(i), 'Checks left today: 2');
      tasks++;
    }
  }
  assert.equal(tasks, 1277);
});
