/* Record & Check — speech-access decision vs the first press (the B1·18 case).
   Observed in production 2026-10-03: an entitled, signed-in learner pressed
   Record & check on B1·18 while /speech/status had not (yet) answered
   eligible:true; the page silently used browser recognition and spent two of
   the task's checks at /speech/task-check. Runs the REAL Speaking block of
   chapter/chapter-app.js in a VM with a fake DOM, mocked microphone /
   MediaRecorder / SpeechRecognition / fetch (nothing is played or recorded). */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = fs.readFileSync(path.join(ROOT, 'chapter/chapter-app.js'), 'utf8');
const BLOCK = APP.slice(APP.indexOf('  // ---- Speaking ----'), APP.indexOf('  // ---- Klarweg AI integration ----'));
const API = 'https://klarweg-access.example.workers.dev';
const B118 = 'b1-18-relativsaetze-mit-praepositionen';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36';

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
const TASKS = [{ task: 'Zeig deinem Freund den Park.', taskEn: 'Show your friend the park.', de: 'Das ist der Park, in dem ich als Kind immer gespielt habe.', en: 'That is the park.' },
  { de: 'Das ist die Frau, mit der ich arbeite.', en: 'That is the woman I work with.' }];

/* status: a function (n-th call) → { ok: body } | { http: code } | 'fail' | 'manual' */
function harness({ chapter = B118, status = () => ({ ok: { ok: true, enabled: true, signedIn: true, eligible: true, tasks: { limit: 3, used: [0, 0], remaining: [3, 3], resetsAt: '2026-10-04T00:00:00.000Z' } } }),
  snap = { authenticated: true, source: 'server' }, transcribe = [] } = {}) {
  let now = Date.UTC(2026, 9, 3, 10, 0); const timers = [];
  const setTimeout_ = (fn, ms) => { const t = { fn, at: now + (ms || 0), id: timers.length + 1 }; timers.push(t); return t.id; };
  const clearTimeout_ = (id) => { const t = timers.find((x) => x.id === id); if (t) t.fn = null; };
  const advance = (ms) => { now += ms; timers.filter((t) => t.fn && t.at <= now).sort((a, b) => a.at - b.at).forEach((t) => { const f = t.fn; t.fn = null; f(); }); };
  const recs = [], recorders = [], fetches = [], pending = [];
  class FakeRec {
    constructor() { recs.push(this); } start() { this.started = true; } stop() {} abort() {}
    result(t) { this.onresult && this.onresult({ results: [Object.assign([{ transcript: t }], { isFinal: true })] }); }
    end() { this.onend && this.onend(); }
  }
  class FakeMR {
    constructor(s, o) { this.state = 'inactive'; this.mimeType = (o && o.mimeType) || ''; recorders.push(this); }
    static isTypeSupported(m) { return ['audio/webm;codecs=opus', 'audio/webm'].includes(m); }
    start() { this.state = 'recording'; } stop() { this.state = 'inactive'; }
    finish() { this.ondataavailable && this.ondataavailable({ data: new Blob([new Uint8Array(2048)], { type: 'audio/webm' }) }); this.onstop && this.onstop(); }
  }
  let statusCalls = 0; const tq = transcribe.slice(); const used = [0, 0];
  const reply = (code, body) => ({ ok: code < 400, status: code, json: async () => body });
  const fetch_ = (url, init = {}) => {
    url = String(url); fetches.push({ url, init });
    if (/\/speech\/status/.test(url)) {
      const a = status(statusCalls++);
      if (a === 'fail') return Promise.reject(new TypeError('Failed to fetch'));
      if (a === 'manual') return new Promise((resolve, reject) => pending.push({ resolve: (body) => resolve(reply(200, body)), reject }));
      if (a.http) return Promise.resolve(reply(a.http, { ok: false }));
      return Promise.resolve(reply(200, a.ok));
    }
    const task = Number((url.match(/[?&]task=(\d+)/) || [])[1]);
    if (/\/speech\/task-check/.test(url)) { used[task]++; return Promise.resolve(reply(200, { ok: true, task: { limit: 3, used: used[task], remaining: 3 - used[task], locked: used[task] >= 3 } })); }
    const r = tq.shift();
    if (r) return Promise.resolve(reply(r.status, r.body));
    if (used[task] >= 3) return Promise.resolve(reply(429, { ok: false, error: 'task_limit', task: { limit: 3, used: 3, remaining: 0, locked: true } }));
    used[task]++;
    return Promise.resolve(reply(200, { ok: true, text: 'Das ist der Park in dem ich als Kind immer gespielt habe', task: { limit: 3, used: used[task], remaining: 3 - used[task], locked: used[task] >= 3 } }));
  };
  const stream = { getTracks: () => [{ stop() {} }], getAudioTracks: () => [{ readyState: 'live', muted: false, label: 'mock' }] };
  let ready; const readyP = new Promise((r) => { ready = r; });
  const ctx = {
    navigator: { userAgent: UA, maxTouchPoints: 0, mediaDevices: { getUserMedia: () => Promise.resolve(stream) } },
    location: { search: '', protocol: 'https:', href: 'https://klarweg.test/chapter/x.html', hostname: 'klarweg.test' },
    document: { body: new El('body') }, isSecureContext: true, scrollY: 0, innerHeight: 800, scrollTo() {},
    matchMedia: () => ({ matches: true }), URL: Object.assign(function (u) { return new URL(u); }, { createObjectURL: () => 'blob:rec', revokeObjectURL() {} }),
    Blob, FormData, AbortController, setTimeout: setTimeout_, clearTimeout: clearTimeout_, Date: { now: () => now, parse: Date.parse }, JSON, String, Math, Promise, Object, Array, Set, Number, encodeURIComponent, decodeURIComponent,
    el, C: { id: chapter, speaking: TASKS }, ICON: { mic: '', speaker: '' },
    Audio: { stop() {}, speak() {} }, aiSlot: () => el('div', { class: 'kw-ai-slot' }), IS_EXAM: false, SentencePlay: { enabled: false },
    MediaRecorder: FakeMR, webkitSpeechRecognition: FakeRec, fetch: fetch_, localStorage: { getItem: () => null, setItem() {} },
    KWAccess: { ready: () => readyP }, KW_ACCESS_API: API
  };
  vm.createContext(ctx);
  ctx.window = ctx; ctx.self = ctx; ctx.top = ctx;
  vm.runInContext(BLOCK + '\nthis.__t = { bodySpeaking };', ctx);
  const wrap = ctx.__t.bodySpeaking();
  const btns = wrap.findAll((n) => n._cls.has('mic-btn')), results = wrap.findAll((n) => n._cls.has('speak-result')), notes = wrap.findAll((n) => n._cls.has('kw-task-left'));
  const flush = async () => { for (let i = 0; i < 10; i++) await new Promise((r) => setImmediate(r)); };
  const click = (i = 0) => btns[i].listeners.click.forEach((f) => f());
  const calls = (re) => fetches.filter((f) => re.test(f.url));
  // finish an AI recording that is already open on task i
  const finishAi = async (i = 0) => { advance(2400); click(i); recorders[recorders.length - 1].finish(); await flush(); advance(800); await flush(); };
  return { ctx, btns, results, notes, click, flush, advance, calls, recs, recorders, pending, finishAi, signIn: () => ready(snap), ready,
    state: (i = 0) => results[i].getAttribute('data-mic-state'), text: (i = 0) => results[i].textContent, label: (i = 0) => btns[i].textContent.trim(), note: (i = 0) => (notes[i].hidden ? null : notes[i].textContent),
    access: () => Array.from((ctx.KW_micTrace || []).filter((r) => r.step === 'speech.status'), (r) => String(r.info && r.info.state)) };
}
const ELIGIBLE = { ok: true, enabled: true, signedIn: true, eligible: true, tasks: { limit: 3, used: [0, 0], remaining: [3, 3], resetsAt: '2026-10-04T00:00:00.000Z' } };
const NOT_ENTITLED = { ok: true, enabled: true, signedIn: true, eligible: false, tasks: { limit: 3, used: [0, 0], remaining: [3, 3], resetsAt: '2026-10-04T00:00:00.000Z' } };

test('B1·18 regression: entitled learner presses before /speech/status answers → waits, then the AI path; no browser check, no task-check', async () => {
  const h = harness({ status: () => 'manual' });
  h.signIn(); await h.flush();
  assert.equal(h.calls(/\/speech\/status\?chapter=b1-18-relativsaetze-mit-praepositionen$/).length, 1, 'status asked for B1·18');
  assert.equal(h.note(0), 'Checking speech access…', 'not "Checks left today" while unknown');
  h.click(0); await h.flush();                                    // the press arrives first
  assert.equal(h.recs.length, 0, 'browser recognition is NOT started');
  assert.equal(h.recorders.length, 0, 'nothing recorded yet');
  assert.equal(h.label(0), 'Checking speech access…'); assert.equal(h.btns[0].getAttribute('aria-busy'), 'true');
  assert.equal(h.state(0), 'checking-access'); assert.match(h.text(0), /Checking speech access/);
  assert.equal(h.calls(/\/speech\/task-check/).length, 0, 'no task check consumed while eligibility is unresolved');
  h.advance(3000); await h.flush();                               // a slow answer (3 s)
  h.pending[0].resolve(ELIGIBLE); await h.flush();
  assert.equal(h.recorders.length, 1, 'eligible:true → the AI path records (MediaRecorder)');
  assert.equal(h.recs.length, 0, 'still no browser recognition');
  assert.equal(h.label(0), 'Stop & check');
  await h.finishAi(0);
  const tx = h.calls(/\/speech\/transcribe/);
  assert.equal(tx.length, 1); assert.equal(tx[0].url, API + '/speech/transcribe?chapter=' + B118 + '&task=0&ms=2400');
  assert.equal(h.state(0), 'result'); assert.match(h.text(0), /Target.*Recognized.*Word Match/s, 'unchanged result panel');
  assert.equal(h.calls(/\/speech\/task-check/).length, 0, 'never /speech/task-check on the AI path');
  assert.equal(h.note(0), 'Checks left today: 2', 'the one real AI check is the only one counted');
});

test('A) explicit eligible:false (not entitled) → browser recognition, counted as a browser check', async () => {
  const h = harness({ status: () => ({ ok: NOT_ENTITLED }) });
  h.signIn(); await h.flush();
  assert.deepEqual(h.access(), ['not-eligible']);
  h.click(0);
  assert.equal(h.recs.length, 1, 'browser recognition starts in the click itself (no wait needed)');
  h.recs[0].result(TASKS[0].de); h.recs[0].end(); await h.flush();
  assert.equal(h.calls(/\/speech\/task-check/).length, 1);
  assert.equal(h.calls(/\/speech\/transcribe/).length, 0);
  const s = harness({ snap: { authenticated: false, source: 'server' } });
  s.signIn(); await s.flush();
  assert.equal(s.calls(/\/speech\/status/).length, 0, 'signed out: nothing to ask');
  s.click(0); assert.equal(s.recs.length, 1, 'signed out → browser recognition');
});

test('A2) the press waits, and an explicit eligible:false that arrives then → browser recognition', async () => {
  const h = harness({ status: () => 'manual' });
  h.signIn(); await h.flush();
  h.click(0); await h.flush();
  assert.equal(h.recs.length, 0);
  h.pending[0].resolve(NOT_ENTITLED); await h.flush();
  assert.equal(h.recs.length, 1, 'not eligible → browser recognition');
  assert.equal(h.recorders.length, 1, 'desktop keeps its parallel playback recording, as before');
  assert.equal(h.calls(/\/speech\/transcribe/).length, 0);
});

test('B) the status request fails → bounded retries, then "unavailable": no silent browser fallback, no task check, retry on the next press', async () => {
  const h = harness({ status: () => 'fail' });
  h.signIn(); await h.flush();
  assert.equal(h.calls(/\/speech\/status/).length, 1);
  h.advance(1500); await h.flush(); assert.equal(h.calls(/\/speech\/status/).length, 2, 'retry 1 after 1.5 s');
  h.advance(4000); await h.flush(); assert.equal(h.calls(/\/speech\/status/).length, 3, 'retry 2 after 4 s');
  h.advance(60000); await h.flush(); assert.equal(h.calls(/\/speech\/status/).length, 3, 'then it stops — no polling');
  assert.deepEqual(h.access(), ['unavailable']);
  assert.match(h.note(0), /could not be reached/); assert.doesNotMatch(h.note(0), /Checks left/);
  h.click(0); await h.flush();
  assert.equal(h.calls(/\/speech\/status/).length, 4, 'the press asks again');
  h.advance(1500); await h.flush(); h.advance(4000); await h.flush();
  assert.equal(h.calls(/\/speech\/status/).length, 6, 'with the same bounded retries');
  assert.equal(h.recs.length, 0, 'never browser recognition'); assert.equal(h.recorders.length, 0, 'never a recording');
  assert.equal(h.state(0), 'access-unavailable');
  assert.match(h.text(0), /could not be reached, so nothing was checked and none of this task’s checks was used/);
  assert.equal(h.label(0), 'Record & check'); assert.equal(h.btns[0].getAttribute('aria-busy'), null);
  assert.equal(h.calls(/\/speech\/task-check/).length, 0); assert.equal(h.calls(/\/speech\/transcribe/).length, 0);
  const x = harness({ status: () => ({ http: 503 }) });
  x.signIn(); await x.flush(); x.advance(1500); await x.flush(); x.advance(4000); await x.flush();
  assert.deepEqual(x.access(), ['unavailable'], 'a 5xx is unavailable, not "not eligible"');
  const t = harness({ status: () => 'manual' });                 // a request that never answers
  t.signIn(); await t.flush(); t.click(0); await t.flush();
  t.advance(10000); await t.flush();
  assert.equal(t.state(0), 'access-unavailable', 'the press gives up after 10 s with a clear message');
  assert.equal(t.recs.length, 0);
});

test('B2) a failed sign-in lookup (/auth/me unavailable) is not "signed out": the server is still asked', async () => {
  const h = harness({ snap: { authenticated: false, source: 'server-unavailable' } });
  h.signIn(); await h.flush();
  assert.equal(h.calls(/\/speech\/status/).length, 1);
  assert.deepEqual(h.access(), ['eligible']);
});

test('C/D) eligible:true — answered before the press, or within the wait → the AI path', async () => {
  const h = harness();
  h.signIn(); await h.flush();
  assert.deepEqual(h.access(), ['eligible']); assert.equal(h.note(0), 'Checks left today: 3');
  h.click(0); await h.flush();
  assert.equal(h.recs.length, 0); assert.equal(h.recorders.length, 1, 'quick answer → straight to the AI path, no wait');
  assert.equal(h.state(0), 'recording');
  await h.finishAi(0);
  assert.equal(h.calls(/\/speech\/transcribe/).length, 1); assert.equal(h.state(0), 'result');
  const w = harness({ status: () => 'manual' });                 // KWAccess itself still pending at the press
  w.click(0); await w.flush();
  assert.equal(w.calls(/\/speech\/status/).length, 0); assert.equal(w.recs.length, 0);
  w.signIn(); await w.flush(); w.pending[0].resolve(ELIGIBLE); await w.flush();
  assert.equal(w.recorders.length, 1, 'eligible arrives during the wait → AI path');
});

test('E) explicit "Use browser check" → browser path (intentional, counted)', async () => {
  const h = harness({ transcribe: [{ status: 503, body: { ok: false, error: 'speech_unavailable', task: { limit: 3, used: 0, remaining: 3, locked: false } } }] });
  h.signIn(); await h.flush();
  h.click(0); await h.flush(); await h.finishAi(0);
  assert.equal(h.state(0), 'check-error');
  const b = h.results[0].findAll((n) => n.tagName === 'BUTTON').find((x) => /Use browser check/.test(x.textContent));
  b.listeners.click.forEach((f) => f());
  h.click(0); await h.flush();
  assert.equal(h.recs.length, 1, 'browser recognition, chosen by the learner');
  h.recs[0].result(TASKS[0].de); h.recs[0].end(); await h.flush();
  assert.equal(h.calls(/\/speech\/task-check/).length, 1, 'an intentional browser check is counted');
});

test('F) a real AI refusal/failure keeps the documented fallback (quota → browser; 3 failures → browser)', async () => {
  const h = harness({ transcribe: [{ status: 429, body: { ok: false, error: 'quota_day' } }] });
  h.signIn(); await h.flush();
  h.click(0); await h.flush(); await h.finishAi(0);
  assert.equal(h.state(0), 'check-fallback'); assert.match(h.text(0), /browser’s speech recognition will check it instead/);
  h.click(0); assert.equal(h.recs.length, 1, 'next press → browser (after a genuine AI refusal)');
  const fail = { status: 503, body: { ok: false, error: 'speech_unavailable' } };
  const f = harness({ transcribe: [fail, fail, fail] });
  f.signIn(); await f.flush();
  f.click(0); await f.flush(); await f.finishAi(0);
  for (let k = 0; k < 2; k++) { const again = f.results[0].findAll((n) => n.tagName === 'BUTTON').find((x) => /Check again/.test(x.textContent)); again.listeners.click.forEach((fn) => fn()); await f.flush(); f.advance(800); await f.flush(); }
  assert.equal(f.state(0), 'check-fallback', 'three genuine AI failures → browser fallback');
  assert.equal(f.calls(/\/speech\/transcribe/).length, 3);
});

test('G) reload after a temporary status failure → a fresh status attempt that can succeed', async () => {
  const a = harness({ status: () => 'fail' });
  a.signIn(); await a.flush(); a.advance(1500); await a.flush(); a.advance(4000); await a.flush();
  assert.deepEqual(a.access(), ['unavailable']);
  const b = harness();                                            // a new page load
  b.signIn(); await b.flush();
  assert.equal(b.calls(/\/speech\/status/).length, 1);
  assert.deepEqual(b.access(), ['eligible']);
  b.click(0); await b.flush(); assert.equal(b.recorders.length, 1);
  const c = harness({ status: (n) => (n < 3 ? 'fail' : { ok: ELIGIBLE }) });   // same page: the press retries and succeeds
  c.signIn(); await c.flush(); c.advance(1500); await c.flush(); c.advance(4000); await c.flush();
  c.click(0); await c.flush();
  assert.equal(c.recorders.length, 1, 'the press asked again, got eligible, and continued on the AI path');
  assert.equal(c.recs.length, 0);
});

test('H) the 3-check task cap works exactly as before once eligible', async () => {
  const h = harness({ status: () => 'manual' });
  h.signIn(); await h.flush();
  h.click(0); await h.flush(); h.pending[0].resolve(ELIGIBLE); await h.flush(); await h.finishAi(0);
  for (let k = 0; k < 2; k++) { h.click(0); await h.flush(); await h.finishAi(0); }
  assert.equal(h.calls(/\/speech\/transcribe/).length, 3);
  assert.match(h.note(0), /You’ve used all 3 checks for this task today/);
  assert.equal(h.btns[0].disabled, true);
  h.click(0); await h.flush(); assert.equal(h.calls(/\/speech\/transcribe/).length, 3, 'no 4th');
  assert.equal(h.note(1), 'Checks left today: 3', 'the other task is untouched');
  assert.equal(h.calls(/\/speech\/task-check/).length, 0);
});
