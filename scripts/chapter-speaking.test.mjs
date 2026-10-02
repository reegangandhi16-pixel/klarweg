/* Chapter Speaking (A1–C2): Record & check on desktop AND mobile.
   Runs the REAL Speaking block from chapter/chapter-app.js — sliced between
   its section markers — against fake microphone / MediaRecorder /
   SpeechRecognition implementations, and drives it through the real click
   handler. Pins the mobile failure modes found in the audit:
     • a second mic consumer (getUserMedia) next to live recognition on
       Android/iOS starves recognition → recording without a transcript;
     • iOS recognition that never fires result/error/end, or ends without a
       final result → panel stuck on "Checking…";
     • recognition-unavailable / empty transcripts rendered as a learner failure. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = fs.readFileSync(path.join(ROOT, 'chapter/chapter-app.js'), 'utf8');
const START = APP.indexOf('  // ---- Speaking ----');
const END = APP.indexOf('  // ---- Klarweg AI integration ----');
const BLOCK = APP.slice(START, END);

const DESKTOP_UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36';
const ANDROID_UA = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Mobile Safari/537.36';
const IPHONE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1';

/* ---------- tiny DOM ---------- */
class Text { constructor(t) { this.nodeType = 3; this.textContent = String(t); } }
class El {
  constructor(tag) {
    this.nodeType = 1; this.tagName = tag.toUpperCase(); this.children = []; this.attrs = {}; this.style = {}; this.listeners = {};
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
  getBoundingClientRect() { return { top: 10, bottom: 20, height: 10 }; }
  remove() {}
}
function el(tag, props = {}, ...kids) {
  const n = new El(tag);
  for (const k in props) {
    if (k === 'class') n.className = props[k];
    else if (k === 'html') n.innerHTML = props[k];
    else if (k.startsWith('on') && typeof props[k] === 'function') n.addEventListener(k.slice(2), props[k]);
    else if (props[k] != null) n.setAttribute(k, props[k]);
  }
  kids.flat().forEach((c) => { if (c != null) n.appendChild(typeof c === 'string' ? new Text(c) : c); });
  return n;
}

/* ---------- harness ---------- */
function harness({ ua = DESKTOP_UA, sr = 'webkit', gum = 'ok', mimes = ['audio/webm;codecs=opus', 'audio/webm'], mr = true, ctorRejectsMime = false, recorderMime = null, chunkType = 'audio/webm' } = {}) {
  const timers = []; let now = 0;
  const setTimeout_ = (fn, ms) => { const t = { fn, at: now + (ms || 0), id: timers.length + 1 }; timers.push(t); return t.id; };
  const clearTimeout_ = (id) => { const t = timers.find((x) => x.id === id); if (t) t.fn = null; };
  const advance = (ms) => { now += ms; timers.filter((t) => t.fn && t.at <= now).sort((a, b) => a.at - b.at).forEach((t) => { const f = t.fn; t.fn = null; f(); }); };

  const recs = []; const recorders = []; const gumCalls = []; let audioStops = 0; let lastBlob = null;
  class FakeRec {
    constructor() { this.started = false; this.aborted = false; this.stopped = false; recs.push(this); }
    start() { this.started = true; }
    stop() { this.stopped = true; }
    abort() { this.aborted = true; }
    // test drivers
    result(parts) { this.onresult && this.onresult({ results: parts.map(([t, fin]) => Object.assign([{ transcript: t }], { isFinal: fin })) }); }
    error(code) { this.onerror && this.onerror({ error: code }); }
    end() { this.onend && this.onend(); }
  }
  class FakeMR {
    constructor(stream, opts) {
      if (opts && opts.mimeType && ctorRejectsMime) { const e = new Error('nope'); e.name = 'NotSupportedError'; throw e; }
      this.opts = opts; this.state = 'inactive'; this.mimeType = recorderMime ?? ((opts && opts.mimeType) || ''); recorders.push(this);
    }
    static isTypeSupported(m) { return mimes.includes(m); }
    start() { this.state = 'recording'; }
    stop() { this.state = 'inactive'; }
    // test driver: deliver data then onstop
    finish(bytes = 2048) { this.ondataavailable && this.ondataavailable({ data: new Blob([new Uint8Array(bytes)], { type: chunkType }) }); this.onstop && this.onstop(); }
  }
  const stream = { getTracks: () => [{ stop() {} }], getAudioTracks: () => [{ readyState: 'live', muted: false, label: 'mic' }] };
  const navigator = { userAgent: ua, maxTouchPoints: /iPhone|Android/.test(ua) ? 5 : 0 };
  if (gum !== 'missing') navigator.mediaDevices = { getUserMedia: (c) => { gumCalls.push(c); if (gum === 'ok') return Promise.resolve(stream); const e = new Error(gum); e.name = gum; return Promise.reject(e); } };

  const ctx = {
    navigator, location: { search: '', protocol: 'https:', href: 'https://klarweg.test/chapter/x.html' },
    document: { body: new El('body') }, isSecureContext: true, scrollY: 0, innerHeight: 800, scrollTo() {},
    matchMedia: () => ({ matches: true }), URL: { createObjectURL: (b) => { lastBlob = b; return 'blob:rec'; }, revokeObjectURL() {} },
    Blob, setTimeout: setTimeout_, clearTimeout: clearTimeout_, Date: { now: () => now }, JSON, String, Math, Promise, Object, Array, Set,
    el, C: { id: 'a1-3', speaking: [{ de: 'Der Hund ist groß.', en: 'The dog is big.' }] }, ICON: { mic: '', speaker: '' },
    Audio: { stop() { audioStops++; }, speak() {} }, aiSlot: () => el('div', { class: 'kw-ai-slot' }), IS_EXAM: false,
    SentencePlay: { enabled: false }   // A1·01-only sentence audio pilot: off for this chapter id, so the original "Hear model" path runs
  };
  if (mr) ctx.MediaRecorder = FakeMR;
  if (sr === 'webkit' || sr === 'both') ctx.webkitSpeechRecognition = FakeRec;
  if (sr === 'std' || sr === 'both') ctx.SpeechRecognition = FakeRec;
  vm.createContext(ctx);
  ctx.window = ctx; ctx.self = ctx; ctx.top = ctx;
  vm.runInContext(BLOCK + '\nthis.__t = { bodySpeaking, micMime, speechRecognitionCtor, micSharedWithRecognition, transcriptFrom, recErrorKind, wordAccuracy, MIC_SETTLE_MS };', ctx);
  const t = ctx.__t;
  const wrap = t.bodySpeaking();
  const btn = wrap.find((n) => n._cls.has('mic-btn'));
  const result = wrap.find((n) => n._cls.has('speak-result'));
  const click = () => btn.listeners.click.forEach((f) => f());
  const flush = () => new Promise((r) => setImmediate(r));
  return { t, ctx, btn, result, click, flush, advance, recs, recorders, gumCalls, get audioStops() { return audioStops; }, get lastBlob() { return lastBlob; },
    state: () => result.getAttribute('data-mic-state'), text: () => result.textContent };
}

test('slice: the Speaking block is found and self-contained', () => {
  assert.ok(START > 0 && END > START, 'section markers present');
  assert.match(BLOCK, /function runRecognition\(/);
  assert.match(BLOCK, /function wordAccuracy\(/);
});

test('MIME: picks the first format the browser really supports', () => {
  assert.equal(harness({ mimes: ['audio/webm;codecs=opus', 'audio/webm'] }).t.micMime(), 'audio/webm;codecs=opus', 'Chrome/Android → WebM Opus');
  assert.equal(harness({ mimes: ['audio/mp4'] }).t.micMime(), 'audio/mp4', 'iOS Safari → MP4, never WebM');
  assert.equal(harness({ mimes: ['audio/ogg;codecs=opus'] }).t.micMime(), 'audio/ogg;codecs=opus', 'Firefox → Ogg');
  assert.equal(harness({ mimes: [] }).t.micMime(), '', 'nothing listed → browser default container');
  assert.equal(harness({ mr: false }).t.micMime(), null, 'no MediaRecorder → null');
});

test('MIME: a constructor that rejects the detected type falls back to the browser default', async () => {
  const h = harness({ sr: 'none', mimes: ['audio/webm'], ctorRejectsMime: true });
  h.click(); await h.flush(); await h.flush();
  assert.equal(h.recorders.length, 1, 'recorder built on retry');
  assert.equal(h.recorders[0].opts, undefined, 'retry uses no mimeType');
  assert.equal(h.state(), 'recording');
});

test('Blob is labelled with what the recorder produced, never a guessed WebM', async () => {
  const h = harness({ sr: 'none', mimes: [], recorderMime: '', chunkType: 'audio/mp4' });
  h.click(); await h.flush(); await h.flush();
  h.click();                         // Stop & check
  h.recorders[0].finish();
  assert.match(h.text(), /Your recording/);
  assert.equal(h.recorders[0].mimeType, '', 'recorder reported no type');
  assert.equal(h.lastBlob.type, 'audio/mp4', 'Blob typed from the recorded chunk (Safari MP4)');
  assert.doesNotMatch(APP.slice(START, END).split('KW_micDiagnose')[0], /'audio\/webm' \}\)/, 'no hard-coded WebM Blob type in the session path');
});

test('recognition capability: both vendor globals are detected', () => {
  assert.ok(harness({ sr: 'webkit' }).t.speechRecognitionCtor(), 'webkitSpeechRecognition (Chrome, Android, Safari)');
  assert.ok(harness({ sr: 'std' }).t.speechRecognitionCtor(), 'unprefixed SpeechRecognition');
  assert.equal(harness({ sr: 'none' }).t.speechRecognitionCtor(), null, 'neither → null');
});

test('mobile: recognition owns the mic — no parallel getUserMedia on Android or iPhone', async () => {
  for (const ua of [ANDROID_UA, IPHONE_UA]) {
    const h = harness({ ua });
    assert.equal(h.t.micSharedWithRecognition(), false);
    h.click(); await h.flush(); await h.flush();
    assert.equal(h.recs.length, 1); assert.ok(h.recs[0].started, 'recognition started in the click tick');
    assert.equal(h.gumCalls.length, 0, 'no second microphone consumer on ' + (ua.includes('iPhone') ? 'iPhone' : 'Android'));
  }
  const ipad = harness({ ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Version/18.5 Safari/605.1.15' });
  ipad.ctx.navigator.maxTouchPoints = 5;
  assert.equal(ipad.t.micSharedWithRecognition(), false, 'iPadOS desktop-class UA is still mobile');
});

test('desktop: the parallel playback recording is kept (UX unchanged)', async () => {
  const h = harness({ ua: DESKTOP_UA });
  assert.equal(h.t.micSharedWithRecognition(), true);
  h.click(); await h.flush(); await h.flush();
  assert.equal(h.gumCalls.length, 1, 'getUserMedia opened alongside recognition');
  assert.equal(h.recorders.length, 1);
  h.recs[0].result([['Der Hund ist groß', true]]);
  assert.equal(h.state(), 'result');
  assert.match(h.text(), /100%/);
  h.recorders[0].finish();
  assert.equal(h.state(), 'result', 'recording arriving later keeps the score');
  assert.match(h.text(), /Your recording/);
});

test('model audio is stopped before recognition starts', () => {
  const h = harness({ ua: IPHONE_UA });
  h.click();
  assert.equal(h.audioStops, 1);
});

test('successful final transcript → existing word match (scoring unchanged)', () => {
  const h = harness({ ua: ANDROID_UA });
  h.click();
  h.recs[0].result([['der hund ist', true]]);
  assert.equal(h.state(), 'result');
  assert.match(h.text(), /You said/);
  assert.match(h.text(), /75%/, '3 of 4 target words');
  assert.equal(h.t.wordAccuracy('Der Hund ist groß.', 'der Hund, ist groß!'), 100, 'case/punctuation-insensitive as before');
  assert.equal(h.t.wordAccuracy('Der Hund ist groß.', 'die Katze'), 0);
});

test('interim results are never scored while recognition is still running', () => {
  const h = harness({ ua: ANDROID_UA });
  h.click();
  h.recs[0].result([['der hund', false]]);
  assert.equal(h.state(), 'recording');
  assert.doesNotMatch(h.text(), /%/);
});

test('iOS: recognition that ends without a final result scores the words it heard', () => {
  const h = harness({ ua: IPHONE_UA });
  h.click();
  h.recs[0].result([['Der Hund ist groß', false]]);
  h.recs[0].end();
  assert.equal(h.state(), 'result');
  assert.match(h.text(), /100%/);
});

test('empty transcript is never a successful check', () => {
  const h = harness({ ua: ANDROID_UA });
  h.click();
  h.recs[0].result([['   ', true]]);
  assert.equal(h.state(), 'recording', 'empty final result does not finish the check');
  h.recs[0].end();
  assert.equal(h.state(), 'no-transcript');
  assert.doesNotMatch(h.text(), /%|You said/);
  assert.match(h.text(), /did not return any words/);
});

test('manual stop waits for recognition: "Checking…" first, score only once the result arrives', () => {
  const h = harness({ ua: ANDROID_UA });
  h.click();
  h.click();                                   // Stop & check before any result
  assert.ok(h.recs[0].stopped, 'stop(), not abort()');
  assert.equal(h.state(), 'checking');
  assert.doesNotMatch(h.text(), /%/);
  h.recs[0].result([['Der Hund ist groß', true]]);
  assert.equal(h.state(), 'result');
  assert.match(h.text(), /100%/);
  h.recs[0].end();
  assert.equal(h.state(), 'result');
});

test('a recogniser that never answers (iOS hang) settles to an explicit state', () => {
  const h = harness({ ua: IPHONE_UA });
  h.click();
  h.advance(20000);                            // 20s listening cap
  assert.equal(h.state(), 'checking');
  h.advance(h.t.MIC_SETTLE_MS);
  assert.ok(h.recs[0].aborted);
  assert.equal(h.state(), 'no-transcript');
  assert.equal(h.btn.getAttribute('aria-pressed'), 'false');
});

test('recognition errors map to learner-facing classes without raw codes', () => {
  const cases = { 'not-allowed': 'permission-denied', 'service-not-allowed': 'recognition-unavailable', 'language-not-supported': 'recognition-unavailable', 'audio-capture': 'no-device' };
  for (const [code, kind] of Object.entries(cases)) {
    const h = harness({ ua: IPHONE_UA });
    h.click();
    h.recs[0].error(code); h.recs[0].end();
    assert.equal(h.state(), kind, code);
    assert.doesNotMatch(h.text(), new RegExp(code), 'raw code hidden');
  }
  const ns = harness({ ua: ANDROID_UA }); ns.click(); ns.recs[0].error('no-speech'); ns.recs[0].end();
  assert.equal(ns.state(), 'no-speech');
  const net = harness({ ua: ANDROID_UA }); net.click(); net.recs[0].error('network'); net.recs[0].end();
  assert.equal(net.state(), 'network');
  assert.equal(harness().t.recErrorKind('aborted'), null);
});

test('no recognition in the browser → record-only with an explicit "unavailable" state, never a no-match', async () => {
  const h = harness({ sr: 'none', mimes: ['audio/ogg;codecs=opus'] });
  h.click(); await h.flush(); await h.flush();
  assert.equal(h.state(), 'recording');
  h.click();
  h.recorders[0].finish();
  assert.equal(h.state(), 'recognition-unavailable');
  assert.match(h.text(), /does not offer speech recognition/);
  assert.match(h.text(), /Your recording/);
  assert.doesNotMatch(h.text(), /%|not recognised/);
});

test('record-only: a recorder that never fires onstop still settles', async () => {
  const h = harness({ sr: 'none' });
  h.click(); await h.flush(); await h.flush();
  h.recorders[0].ondataavailable({ data: new Blob([new Uint8Array(512)], { type: 'audio/webm' }) });
  h.click();
  h.advance(h.t.MIC_SETTLE_MS);
  assert.equal(h.state(), 'recognition-unavailable');
  assert.match(h.text(), /Your recording/);
});

test('getUserMedia failures are explicit and never silent', async () => {
  const denied = harness({ sr: 'none', gum: 'NotAllowedError' });
  denied.click(); await denied.flush(); await denied.flush(); await denied.flush();
  assert.equal(denied.state(), 'permission-denied');
  assert.match(denied.text(), /permission was denied/);

  const nodev = harness({ sr: 'none', gum: 'NotFoundError' });
  nodev.click(); await nodev.flush(); await nodev.flush(); await nodev.flush();
  assert.equal(nodev.state(), 'no-device');

  const busy = harness({ sr: 'none', gum: 'NotReadableError' });
  busy.click(); await busy.flush(); await busy.flush(); await busy.flush();
  assert.equal(busy.state(), 'no-device');

  // No getUserMedia and no recognition: nothing can capture, so the button
  // is disabled up front with an explanation instead of failing on click.
  const missing = harness({ sr: 'none', gum: 'missing' });
  assert.equal(missing.btn.disabled, true);
  assert.match(missing.btn.parentNode.textContent, /cannot open a microphone/);
});

test('no microphone API and no recognition → button disabled with a message', () => {
  const h = harness({ sr: 'none', gum: 'missing', mr: false });
  assert.equal(h.btn.disabled, true);
  assert.equal(h.result, null);
});
