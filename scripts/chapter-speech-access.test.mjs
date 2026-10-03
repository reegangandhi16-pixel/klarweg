/* A1·01 Record & Check through the Klarweg speech service (klarweg-access
   /speech/*). Runs the REAL Speaking block of chapter/chapter-app.js in a VM
   with a fake DOM, microphone, MediaRecorder, SpeechRecognition and fetch,
   and drives it through the real click handler. Pins:
     • flag off / not eligible / other chapters → browser recognition exactly as before;
     • eligible on A1·01 → the recording goes to /speech/transcribe and the
       returned text is scored by the unchanged Word Match;
     • failures: manual Check again with the same Blob, no automatic resubmission,
       a clearly worded return to browser recognition;
     • no provider secret anywhere in the public site. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = fs.readFileSync(path.join(ROOT, 'chapter/chapter-app.js'), 'utf8');
const BLOCK = APP.slice(APP.indexOf('  // ---- Speaking ----'), APP.indexOf('  // ---- Klarweg AI integration ----'));
const API = 'https://klarweg-access.example.workers.dev';
const DESKTOP_UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36';
const IPHONE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1';

/* ---------- tiny DOM (same shape as chapter-speaking.test.mjs) ---------- */
class Text { constructor(t) { this.nodeType = 3; this.textContent = String(t); } }
class El {
  constructor(tag) {
    this.nodeType = 1; this.tagName = tag.toUpperCase(); this.children = []; this.attrs = {}; this.style = {}; this.listeners = {}; this.dataset = {};
    const set = new Set(); this._cls = set;
    this.classList = { add: (...c) => c.forEach((x) => set.add(x)), remove: (...c) => c.forEach((x) => set.delete(x)), contains: (c) => set.has(c), toggle: (c, v) => (v ?? !set.has(c)) ? set.add(c) : set.delete(c) };
  }
  set className(v) { this._cls.clear(); String(v).split(/\s+/).filter(Boolean).forEach((c) => this._cls.add(c)); }
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

/* ---------- harness ---------- */
function harness({ chapter = 'a1-1-alphabet', status = { ok: true, enabled: true, signedIn: true, eligible: true }, statusFails = false, api = API,
  speechApi = undefined, ua = DESKTOP_UA, replies = [], snap = { authenticated: true } } = {}) {
  let now = 1000; const timers = [];
  const setTimeout_ = (fn, ms) => { const t = { fn, at: now + (ms || 0), id: timers.length + 1 }; timers.push(t); return t.id; };
  const clearTimeout_ = (id) => { const t = timers.find((x) => x.id === id); if (t) t.fn = null; };
  const advance = (ms) => { now += ms; timers.filter((t) => t.fn && t.at <= now).sort((a, b) => a.at - b.at).forEach((t) => { const f = t.fn; t.fn = null; f(); }); };
  const recs = [], recorders = [], fetches = [];
  class FakeRec { constructor() { recs.push(this); } start() { this.started = true; } stop() { this.stopped = true; } abort() {} }
  class FakeMR {
    constructor(stream, opts) { this.state = 'inactive'; this.mimeType = (opts && opts.mimeType) || ''; recorders.push(this); }
    static isTypeSupported(m) { return ['audio/webm;codecs=opus', 'audio/webm'].includes(m); }
    start() { this.state = 'recording'; } stop() { this.state = 'inactive'; }
    finish(bytes = 2048) { this.ondataavailable && this.ondataavailable({ data: new Blob([new Uint8Array(bytes)], { type: 'audio/webm' }) }); this.onstop && this.onstop(); }
  }
  const queue = replies.slice();
  const fetch_ = (url, init = {}) => {
    fetches.push({ url: String(url), init });
    if (/\/speech\/status/.test(url)) return statusFails ? Promise.reject(new TypeError('offline')) : Promise.resolve({ ok: true, status: 200, json: async () => status });
    const r = queue.length ? queue.shift() : { status: 200, body: { ok: true, text: 'Ich heiße Rohan' } };
    if (r.network) return Promise.reject(new TypeError('Failed to fetch'));
    return Promise.resolve({ ok: r.status < 400, status: r.status, json: async () => r.body });
  };
  const stream = { getTracks: () => [{ stop() {} }], getAudioTracks: () => [{ readyState: 'live', muted: false, label: 'mic' }] };
  const navigator = { userAgent: ua, maxTouchPoints: /iPhone/.test(ua) ? 5 : 0, mediaDevices: { getUserMedia: () => Promise.resolve(stream) } };
  const ctx = {
    navigator, location: { search: '', protocol: 'https:', href: 'https://klarweg.test/chapter/x.html', hostname: 'klarweg.test' },
    document: { body: new El('body') }, isSecureContext: true, scrollY: 0, innerHeight: 800, scrollTo() {},
    matchMedia: () => ({ matches: true }), URL: Object.assign(function (u) { return new URL(u); }, { createObjectURL: () => 'blob:rec', revokeObjectURL() {} }),
    Blob, FormData, AbortController, setTimeout: setTimeout_, clearTimeout: clearTimeout_, Date: { now: () => now }, JSON, String, Math, Promise, Object, Array, Set, Number, encodeURIComponent, decodeURIComponent,
    el, C: { id: chapter, speaking: [{ de: 'Ich heiße Rohan.', en: 'My name is Rohan.' }] }, ICON: { mic: '', speaker: '' },
    Audio: { stop() {}, speak() {} }, aiSlot: () => el('div', { class: 'kw-ai-slot' }), IS_EXAM: false, SentencePlay: { enabled: false },
    MediaRecorder: FakeMR, webkitSpeechRecognition: FakeRec, fetch: fetch_,
    KWAccess: { ready: () => Promise.resolve(snap) }, KW_ACCESS_API: api
  };
  if (speechApi) ctx.KW_SPEECH_API = speechApi;
  vm.createContext(ctx);
  ctx.window = ctx; ctx.self = ctx; ctx.top = ctx;
  vm.runInContext(BLOCK + '\nthis.__t = { bodySpeaking, wordMatch };', ctx);
  const wrap = ctx.__t.bodySpeaking();
  const btn = wrap.find((n) => n._cls.has('mic-btn'));
  const result = wrap.find((n) => n._cls.has('speak-result'));
  const flush = async () => { for (let i = 0; i < 6; i++) await new Promise((r) => setImmediate(r)); };
  const click = (b = btn) => b.listeners.click.forEach((f) => f());
  const buttons = () => result.findAll((n) => n.tagName === 'BUTTON');
  const button = (label) => buttons().find((b) => b.textContent.includes(label));
  /* record → stop → recorder delivers; returns once the check request is out */
  const recordOnce = async (ms = 2400) => { click(); await flush(); advance(ms); click(); recorders[recorders.length - 1].finish(); await flush(); };
  const transcribeCalls = () => fetches.filter((f) => /\/speech\/transcribe/.test(f.url));
  return { ctx, btn, result, click, flush, advance, recs, recorders, fetches, transcribeCalls, recordOnce, buttons, button,
    state: () => result.getAttribute('data-mic-state'), text: () => result.textContent, wordMatch: ctx.__t.wordMatch };
}

test('A1·01 eligible → the recording goes to the Klarweg speech service and is scored by Word Match', async () => {
  const h = harness();
  await h.flush();
  const st = h.fetches.find((f) => /\/speech\/status/.test(f.url));
  assert.equal(st.url, API + '/speech/status?chapter=a1-1-alphabet');
  assert.equal(st.init.credentials, 'include');
  await h.recordOnce(2400);
  assert.equal(h.recs.length, 0, 'browser recognition is NOT used on the server path');
  const [c] = h.transcribeCalls();
  assert.equal(c.url, API + '/speech/transcribe?chapter=a1-1-alphabet&ms=2400');
  assert.equal(c.init.method, 'POST');
  assert.equal(c.init.credentials, 'include', 'the session cookie identifies the learner');
  assert.ok(c.init.body instanceof Blob, 'the recording itself, not multipart');
  assert.equal(c.init.headers['Content-Type'], 'audio/webm;codecs=opus', 'the recorder\'s own type');
  assert.equal(h.state(), 'result');
  const expected = h.wordMatch('Ich heiße Rohan.', 'Ich heiße Rohan');
  assert.match(h.text(), new RegExp('Word Match: ' + expected.matched + '/' + expected.targetWords));
  assert.match(h.text(), /Target.*Ich heiße Rohan\..*Recognized.*Ich heiße Rohan/);
  assert.match(h.text(), /not a pronunciation score/);
  assert.match(h.text(), /Your recording/, 'playback kept');
});

test('scorer unchanged: the Word Match block is byte-identical to origin/main', () => {
  const cut = (s) => s.slice(s.indexOf('  // ---- Word Match scorer (deterministic) ----'), s.indexOf('  // ---- end Word Match scorer ----'));
  let main;
  try { main = execFileSync('git', ['show', 'origin/main:chapter/chapter-app.js'], { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 << 20 }); } catch { main = null; }
  if (main) assert.equal(cut(APP), cut(main));
  const h = harness();
  const r = h.wordMatch('Ich möchte einen Kaffee.', 'Ich möchte ein Kaffee');
  assert.equal(r.matched + '/' + r.targetWords, '3/4', 'grammar error stays an error');
});

test('flag OFF on the server → browser recognition exactly as before', async () => {
  const h = harness({ status: { ok: true, enabled: false } });
  await h.flush();
  h.click();
  assert.equal(h.recs.length, 1, 'recognition constructed in the click tick');
  assert.ok(h.recs[0].started);
  assert.equal(h.transcribeCalls().length, 0);
});

test('not eligible (signed out / not entitled) → browser recognition', async () => {
  for (const status of [{ ok: true, enabled: true, signedIn: false, eligible: false }, { ok: true, enabled: true, signedIn: true, eligible: false }]) {
    const h = harness({ status });
    await h.flush(); h.click();
    assert.equal(h.recs.length, 1); assert.equal(h.transcribeCalls().length, 0);
  }
});

test('every chapter asks the server; out of scope → browser recognition, in scope → server path', async () => {
  for (const chapter of ['a1-2-vokale', 'b1-1-infinitiv-mit-zu', 'b2-14-goethe-mini-test-1', 'c2-29-goethe-c2-final']) {
    let h = harness({ chapter, status: { ok: true, enabled: true, eligible: false } });
    await h.flush();
    assert.equal(h.fetches[0].url, API + '/speech/status?chapter=' + chapter, 'the page holds no chapter list: ' + chapter);
    h.click();
    assert.equal(h.recs.length, 1, chapter + ': out of scope → browser recognition');
    assert.equal(h.transcribeCalls().length, 0);
    h = harness({ chapter });
    await h.flush(); await h.recordOnce();
    assert.equal(h.recs.length, 0, chapter + ': eligible → server path');
    assert.equal(h.transcribeCalls()[0].url, API + '/speech/transcribe?chapter=' + chapter + '&ms=2400');
    assert.equal(h.state(), 'result');
  }
});

test('signed out: no status request at all, browser recognition', async () => {
  const h = harness({ chapter: 'b1-1-infinitiv-mit-zu', snap: { authenticated: false } });
  await h.flush(); h.click();
  assert.equal(h.fetches.length, 0, 'nothing to ask for a signed-out visitor');
  assert.equal(h.recs.length, 1);
});

test('status unreachable, no Access API, or a click before the answer → browser recognition', async () => {
  let h = harness({ statusFails: true });
  await h.flush(); h.click();
  assert.equal(h.recs.length, 1);
  h = harness({ api: 'http://evil.example' });
  await h.flush(); h.click();
  assert.equal(h.fetches.length, 0, 'a non-https Access origin is never used');
  assert.equal(h.recs.length, 1);
  h = harness();
  h.click();                                       // before /speech/status answered
  assert.equal(h.recs.length, 1, 'never waits on the network inside the click');
});

test('dev endpoint (KW_SPEECH_API) still wins and keeps its own request shape', async () => {
  const h = harness({ speechApi: 'https://speech.example' });
  await h.flush();
  await h.recordOnce();
  const call = h.fetches.find((f) => /\/v1\/transcribe/.test(f.url));
  assert.equal(call.url, 'https://speech.example/v1/transcribe');
  assert.equal(call.init.credentials, 'omit');
  assert.ok(call.init.body instanceof FormData);
  assert.equal(h.transcribeCalls().length, 0);
});

test('transient failure → Check again resends the SAME recording; no automatic resubmission; no double submit', async () => {
  const h = harness({ replies: [{ status: 503, body: { ok: false, error: 'speech_unavailable' } }, { status: 200, body: { ok: true, text: 'Ich heiße Rohan' } }] });
  await h.flush();
  await h.recordOnce();
  assert.equal(h.state(), 'check-error');
  assert.match(h.text(), /Your recording is kept/);
  assert.equal(h.transcribeCalls().length, 1, 'no automatic retry');
  const again = h.button('Check again');
  assert.ok(h.button('Use browser check'), 'an explicit way back to browser recognition');
  again.listeners.click.forEach((f) => f());
  again.listeners.click.forEach((f) => f());       // a double click while checking
  await h.flush();
  const calls = h.transcribeCalls();
  assert.equal(calls.length, 2, 'the double click sent one request');
  assert.equal(calls[1].init.body, calls[0].init.body, 'the same Blob, not a new recording');
  assert.equal(h.state(), 'result');
});

test('repeated failures → browser recognition for the next attempt, clearly said', async () => {
  const fail = { status: 504, body: { ok: false, error: 'speech_timeout' } };
  const h = harness({ replies: [fail, fail, fail] });
  await h.flush();
  await h.recordOnce();
  for (let i = 0; i < 2; i++) { h.button('Check again').listeners.click.forEach((f) => f()); await h.flush(); }
  assert.equal(h.transcribeCalls().length, 3);
  assert.equal(h.state(), 'check-fallback');
  assert.match(h.text(), /browser’s speech recognition will check it instead/);
  assert.equal(h.button('Check again'), undefined, 'no more server retries');
  h.click();
  assert.equal(h.recs.length, 1, 'next Record & check uses browser recognition');
});

test('quota, access and switched-off answers fall back at once; rate limit stays retryable', async () => {
  for (const [status, error, retry] of [[429, 'quota_day', false], [429, 'quota_month', false], [403, 'not_entitled', false], [401, 'auth_required', false], [503, 'speech_disabled', false], [503, 'speech_busy', false], [429, 'rate_minute', true]]) {
    const h = harness({ replies: [{ status, body: { ok: false, error } }] });
    await h.flush(); await h.recordOnce();
    assert.equal(h.state(), retry ? 'check-error' : 'check-fallback', error);
    assert.equal(!!h.button('Check again'), retry, error);
    h.click();
    assert.equal(h.recs.length, retry ? 0 : 1, error + ': next attempt ' + (retry ? 'stays on the server path' : 'uses the browser'));
  }
});

test('too long / unreadable: honest message, no retry of the same recording', async () => {
  for (const [status, error, msg] of [[413, 'too_long', /longer than 30 seconds/], [422, 'unreadable_audio', /could not be read/], [415, 'unsupported_type', /could not be read/]]) {
    const h = harness({ replies: [{ status, body: { ok: false, error } }] });
    await h.flush(); await h.recordOnce();
    assert.match(h.text(), msg); assert.equal(h.button('Check again'), undefined);
  }
});

test('network error and empty transcript', async () => {
  let h = harness({ replies: [{ network: true }] });
  await h.flush(); await h.recordOnce();
  assert.equal(h.state(), 'check-error'); assert.ok(h.button('Check again'));
  h = harness({ replies: [{ status: 200, body: { ok: true, text: '' } }] });
  await h.flush(); await h.recordOnce();
  assert.equal(h.state(), 'no-speech');
  assert.match(h.text(), /No German words were recognised/);
});

test('"Use browser check" switches the page back to browser recognition', async () => {
  const h = harness({ replies: [{ status: 503, body: { ok: false, error: 'speech_unavailable' } }] });
  await h.flush(); await h.recordOnce();
  h.button('Use browser check').listeners.click.forEach((f) => f());
  assert.equal(h.state(), 'check-fallback');
  h.click();
  assert.equal(h.recs.length, 1);
});

test('mobile (iPhone): the server path records with MediaRecorder only — one mic consumer', async () => {
  const h = harness({ ua: IPHONE_UA });
  await h.flush(); await h.recordOnce();
  assert.equal(h.recs.length, 0, 'no SpeechRecognition competing for the mic');
  assert.equal(h.recorders.length, 1);
  assert.equal(h.state(), 'result');
});

test('result is announced politely and the busy button is marked for assistive tech', async () => {
  const h = harness({ replies: [{ status: 200, body: { ok: true, text: 'Ich heiße' } }] });
  await h.flush();
  h.click(); await h.flush(); h.click(); h.recorders[0].finish();
  assert.equal(h.btn.getAttribute('aria-busy'), 'true', 'Checking… is exposed as busy');
  await h.flush();
  assert.equal(h.btn.getAttribute('aria-busy'), null);
  assert.equal(h.result.getAttribute('aria-live'), 'polite');
  const items = h.result.findAll((n) => n.tagName === 'LI');
  assert.ok(items.length && items.every((li) => li.getAttribute('aria-label')), 'every word has a screen-reader label');
});

test('no provider secret, model URL or key name in any file the site publishes', () => {
  const wf = fs.readFileSync(path.join(ROOT, '.github/workflows', fs.readdirSync(path.join(ROOT, '.github/workflows')).find((f) => /pages/i.test(fs.readFileSync(path.join(ROOT, '.github/workflows', f), 'utf8')))), 'utf8');
  assert.doesNotMatch(wf, /(^|\s)(access|tutor)\//m, 'Worker source is not in the Pages allowlist');
  const pub = [];
  const walk = (d) => { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); if (f.isDirectory()) { if (!/^(node_modules|\.git|access|tutor|speech|scripts|audit|deliverables|react-lib|uploads|content|report|deployment|screenshots)$/.test(f.name)) walk(p); } else if (/\.(js|html|json)$/.test(f.name)) pub.push(p); } };
  walk(ROOT);
  for (const f of pub) {
    const s = fs.readFileSync(f, 'utf8');
    assert.doesNotMatch(s, /OPENAI_API_KEY|api\.openai\.com|\bsk-[A-Za-z0-9_-]{16,}/, path.relative(ROOT, f));
  }
  assert.doesNotMatch(BLOCK, /gpt-transcribe|openai/i, 'the page does not name the provider');
});
