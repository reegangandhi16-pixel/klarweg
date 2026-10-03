/* Vocabulary word control, Reading seek and Listening player (all chapters).
   Runs the REAL SentencePlay / WordAudio / PlayerUI block of chapter-app.js in a
   VM with a tiny DOM and fake <audio>, pins that the Reading and Listening audio
   calls are the same calls as before (same text, rate, word sync), and checks
   the production audio mapping for every chapter's Reading and Listening. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = fs.readFileSync(path.join(ROOT, 'chapter/chapter-app.js'), 'utf8');
const cut = (src, a, b) => { const i = src.indexOf(a), j = src.indexOf(b, i); assert.ok(i > 0 && j > i, a); return src.slice(i, j); };
const CTRL = cut(APP, '  /* ---------- sentence audio control', '  /* ---------- toast ---------- */');

/* ---------- tiny DOM + fake audio ---------- */
class Text { constructor(t) { this.nodeType = 3; this.textContent = String(t); } }
class El {
  constructor(tag) {
    this.nodeType = 1; this.tagName = tag.toUpperCase(); this.children = []; this.attrs = {}; this.style = {}; this.listeners = {}; this.dataset = {}; this.tabIndex = 0;
    const set = new Set(); this._cls = set;
    this.classList = { add: (...c) => c.forEach((x) => set.add(x)), remove: (...c) => c.forEach((x) => set.delete(x)), contains: (c) => set.has(c), toggle: (c, v) => ((v ?? !set.has(c)) ? set.add(c) : set.delete(c)) };
  }
  set className(v) { this._cls.clear(); String(v).split(/\s+/).filter(Boolean).forEach((c) => this._cls.add(c)); }
  appendChild(c) { this.children.push(c); c.parentNode = this; return c; }
  append(...k) { k.forEach((c) => c != null && this.appendChild(typeof c === 'string' ? new Text(c) : c)); }
  prepend(c) { this.children.unshift(c); }
  get childNodes() { return this.children.slice(); }
  set innerHTML(v) { this.children = v ? [new Text(v)] : []; }
  get textContent() { return this.children.map((c) => c.textContent).join(''); }
  setAttribute(k, v) { this.attrs[k] = String(v); } getAttribute(k) { return k in this.attrs ? this.attrs[k] : null; } removeAttribute(k) { delete this.attrs[k]; }
  addEventListener(t, fn) { (this.listeners[t] = this.listeners[t] || []).push(fn); }
  fire(t, e = {}) { (this.listeners[t] || []).forEach((f) => f(Object.assign({ preventDefault() {}, stopPropagation() {} }, e))); }
  contains(n) { return n === this || this.children.some((c) => c.nodeType === 1 && c.contains(n)); }
  getBoundingClientRect() { return { left: 100, width: 200, top: 0, height: 6 }; }
  setPointerCapture() {}
}
function el(tag, props = {}, ...kids) {
  const n = new El(tag);
  for (const k in props) {
    if (k === 'class') n.className = props[k];
    else if (k === 'html') n.innerHTML = props[k];
    else if (props[k] != null) n.setAttribute(k, props[k]);
  }
  kids.flat().forEach((c) => { if (c != null) n.appendChild(typeof c === 'string' ? new Text(c) : c); });
  return n;
}
class FakeAudio {
  constructor(d = 20) { this.duration = d; this.currentTime = 0; this.paused = false; this.ended = false; this.readyState = 4; this.l = {}; }
  addEventListener(t, f, o) { (this.l[t] = this.l[t] || []).push(f); if (o && o.signal) o.signal.addEventListener('abort', () => { this.l[t] = (this.l[t] || []).filter((x) => x !== f); }); }
  fire(t) { (this.l[t] || []).slice().forEach((f) => f({})); }
  pause() { this.paused = true; this.fire('pause'); }
  play() { this.paused = false; this.fire('play'); return Promise.resolve(); }
}

function load({ killSwitch = false } = {}) {
  const speaks = [], listeners = [];
  const ctx = {
    el, C: { id: 'b1-1-infinitiv-mit-zu' }, setTimeout, clearTimeout, setInterval, clearInterval, Promise, Object, Array, Set, String, Math, isFinite, AbortController,
    requestAnimationFrame: () => 0, cancelAnimationFrame() {},
    Audio: { stop() { speaks.push({ stop: true }); }, speak(text, rate, done, opts) { speaks.push({ text, rate, done, opts }); } },
    speakWordFemale: (t, r, o) => { speaks.push({ word: t, opts: o }); return Promise.resolve(); }, resolveHeadword: (t) => t,
    KW_onAudioEvent: (f) => listeners.push(f),
  };
  if (killSwitch) ctx.KW_SENTENCE_PLAY = false;
  vm.createContext(ctx); ctx.window = ctx;
  vm.runInContext(CTRL + '\nthis.__t = { SentencePlay, WordAudio, PlayerUI };', ctx);
  return { ...ctx.__t, speaks, listeners };
}

test('PlayerUI seek bar: slider semantics, click/drag/keyboard seek the real <audio>, disabled ignores input', () => {
  const { PlayerUI } = load();
  const fill = el('div'), bar = el('div', {}, fill), a = new FakeAudio(20);
  let shown = null;
  const seek = PlayerUI.seekBar(bar, fill, { label: 'Position in passage', step: 2, getAudio: () => a, onShow: (t, d) => { shown = [t, d]; } });
  assert.equal(bar.getAttribute('role'), 'slider'); assert.equal(bar.getAttribute('aria-label'), 'Position in passage');
  assert.equal(bar.getAttribute('aria-valuemin'), '0'); assert.equal(bar.getAttribute('aria-valuetext'), '0:00 of 0:00');
  assert.ok(bar._cls.has('kw-seek')); assert.ok(bar.children.some((c) => c._cls && c._cls.has('kw-seek-thumb')));
  bar.fire('pointerdown', { clientX: 150, pointerId: 1 });                        // 25% of a 200px bar starting at x=100
  assert.equal(a.currentTime, 5); assert.equal(fill.style.width, '25%'); assert.equal(bar.getAttribute('aria-valuenow'), '5'); assert.deepEqual(shown, [5, 20]);
  bar.fire('pointermove', { clientX: 250 }); assert.equal(a.currentTime, 15, 'drag');
  bar.fire('pointerup'); bar.fire('pointermove', { clientX: 120 }); assert.equal(a.currentTime, 15, 'no drag after release');
  bar.fire('keydown', { key: 'ArrowLeft' }); assert.equal(a.currentTime, 13);
  bar.fire('keydown', { key: 'ArrowRight' }); assert.equal(a.currentTime, 15);
  bar.fire('keydown', { key: 'Home' }); assert.equal(a.currentTime, 0);
  bar.fire('keydown', { key: 'End' }); assert.ok(Math.abs(a.currentTime - 19.95) < 1e-9);
  bar.fire('keydown', { key: 'PageDown' }); assert.ok(Math.abs(a.currentTime - 9.95) < 1e-9);
  bar.fire('pointerdown', { clientX: 400 }); assert.equal(a.currentTime, 20, 'clamped to the end');
  assert.equal(bar.getAttribute('aria-valuetext'), '0:20 of 0:20');
  seek.setEnabled(false);
  assert.equal(bar.tabIndex, -1); assert.equal(bar.getAttribute('aria-disabled'), 'true');
  a.currentTime = 3; bar.fire('pointerdown', { clientX: 300 }); bar.fire('keydown', { key: 'End' });
  assert.equal(a.currentTime, 3, 'disabled: no seek');
  seek.setEnabled(true); assert.equal(bar.tabIndex, 0); assert.equal(bar.getAttribute('aria-disabled'), null);
  const none = PlayerUI.seekBar(el('div', {}, el('div')), el('div'), { label: 'x', step: 1, getAudio: () => null });
  assert.doesNotThrow(() => none.show(0, 0, 0), 'no audio yet (before Play): nothing to seek');
});

test('PlayerUI.follow keeps the bar on the real position and stops when aborted; round button states', () => {
  const { PlayerUI } = load();
  const fill = el('div'), bar = el('div', {}, fill), a = new FakeAudio(10);
  const seek = PlayerUI.seekBar(bar, fill, { label: 'x', step: 1, getAudio: () => a });
  const ac = new AbortController();
  PlayerUI.follow(a, seek, ac.signal, () => true);
  a.currentTime = 4; a.fire('timeupdate'); assert.equal(fill.style.width, '40%');
  a.currentTime = 7; a.fire('seeked'); assert.equal(fill.style.width, '70%');
  ac.abort(); a.currentTime = 9; a.fire('timeupdate'); assert.equal(fill.style.width, '70%', 'no longer following');
  const b = el('button'); PlayerUI.decorate(b, 'dialogue');
  assert.equal(b.getAttribute('aria-label'), 'Play dialogue'); assert.equal(b.type, 'button');
  for (const [st, label] of [['loading', 'Stop dialogue'], ['playing', 'Pause dialogue'], ['paused', 'Resume dialogue'], ['speaking', 'Stop dialogue'], ['idle', 'Play dialogue']]) {
    PlayerUI.state(b, st); assert.equal(b.dataset.state, st); assert.equal(b.getAttribute('aria-label'), label);
  }
  assert.equal(PlayerUI.fmt(75.9), '1:15'); assert.equal(PlayerUI.fmt(NaN), '0:00');
});

test('SentencePlay hooks (Reading): rate 0.92, word sync on the same <audio>, seek hooks, cancel at the end', () => {
  const { SentencePlay, speaks } = load();
  const calls = { sync: 0, cancel: 0, onAudio: 0, onIdle: 0 };
  const btn = SentencePlay.button('Rohan ist in der Schule.', { noun: 'passage', rate: 0.92,
    sync: (a) => { calls.sync++; calls.syncAudio = a; return () => { calls.cancel++; }; },
    onAudio: (a) => { calls.onAudio++; calls.audio = a; }, onIdle: () => { calls.onIdle++; } });
  assert.equal(btn.getAttribute('aria-label'), 'Play passage');
  btn.fire('click');
  const sp = speaks.find((x) => x.text);
  assert.equal(sp.text, 'Rohan ist in der Schule.'); assert.equal(sp.rate, 0.92, 'the Reading rate is unchanged');
  const a = new FakeAudio(21);
  sp.opts.onAudio(a);
  assert.equal(calls.sync, 1); assert.equal(calls.syncAudio, a, 'word sync on the very <audio> that plays');
  assert.equal(calls.onAudio, 1); assert.equal(SentencePlay.audioOf(btn), a);
  assert.equal(btn.dataset.state, 'playing');
  btn.fire('click'); assert.equal(btn.dataset.state, 'paused'); assert.equal(a.paused, true);
  assert.equal(SentencePlay.audioOf(btn), a, 'paused: the bar can still seek');
  btn.fire('click'); assert.equal(btn.dataset.state, 'playing');
  sp.done();                                                                    // natural end
  assert.equal(btn.dataset.state, 'idle'); assert.equal(calls.cancel, 1, 'highlight retired at the end'); assert.equal(calls.onIdle, 1);
  assert.equal(SentencePlay.audioOf(btn), null);
  const plain = SentencePlay.button('Hallo.');                                  // controls without opts are unchanged
  plain.fire('click'); assert.equal(speaks.filter((x) => x.text).pop().rate, 1);
});

test('SentencePlay takeover: another audio request resets the Reading control and its sync', () => {
  const { SentencePlay, speaks, listeners } = load();
  let cancel = 0, idle = 0;
  const btn = SentencePlay.button('Text.', { rate: 0.92, sync: () => () => { cancel++; }, onIdle: () => { idle++; } });
  btn.fire('click');
  speaks.find((x) => x.text).opts.onAudio(new FakeAudio());
  listeners.forEach((f) => f({ type: 'request', text: 'something else' }));
  assert.equal(btn.dataset.state, 'idle'); assert.equal(cancel, 1); assert.equal(idle, 1);
});

test('WordAudio: a vocabulary F/M call plays through the word control, with the voice in its label', () => {
  const { WordAudio, speaks } = load();
  const b = el('button'); b.dataset.voice = 'male'; WordAudio.decorate(b);
  assert.equal(b.getAttribute('aria-label'), 'Play word, male voice');
  let used = null;
  WordAudio.play(b, 'der Apfel', 1, null, false, (o) => { used = o; return Promise.resolve(); });
  assert.ok(used && typeof used.onAudio === 'function', 'the caller audio call gets the onAudio hook');
  assert.equal(speaks.filter((x) => x.word).length, 0, 'not the popup default (speakWordFemale)');
  assert.equal(b.dataset.state, 'loading'); assert.equal(b.getAttribute('aria-label'), 'Stop word, male voice');
  b.dataset.voice = 'female'; WordAudio.label(b, 'idle'); assert.equal(b.getAttribute('aria-label'), 'Play word, female voice');
  const pop = el('button'); WordAudio.decorate(pop); assert.equal(pop.getAttribute('aria-label'), 'Play word', 'popup speaker label unchanged');
  WordAudio.play(pop, 'Haus', 1, {}); assert.equal(speaks.filter((x) => x.word).length, 1, 'popup keeps speakWordFemale');
});

test('kill switch: window.KW_SENTENCE_PLAY = false disables the new controls', () => {
  const t = load({ killSwitch: true });
  assert.equal(t.SentencePlay.enabled, false); assert.equal(t.WordAudio.enabled, false);
});

test('code: same audio calls as before; no sentence buttons in vocabulary outside A1·01', () => {
  const reading = cut(APP, '  function bodyReading() {', '  let wordPop, wordPopBackdrop');
  assert.match(reading, /Audio\.speak\(txt, 0\.92,/, 'legacy Reading button kept as the fallback');
  assert.match(reading, /SentencePlay\.button\(txt, \{ noun: 'passage', rate: 0\.92, sync: sync,/);
  assert.equal((reading.match(/KW_wordSync\.syncFor\(a, \$\$\('\.rw', passage\), \{ text: txt, sentenceEls: \$\$\('\.sentence-inline-unit', passage\) \}\)/g) || []).length, 2, 'identical word-sync call in both paths');
  const listening = cut(APP, '  function bodyListening() {', '  // ---- Speaking ----');
  assert.equal((listening.match(/Audio\.speakSequence\(lines, rate,/g) || []).length, 2, 'same sequence call in both paths');
  assert.equal((listening.match(/L\.dialogue\.map\((x|y) => (x|y) && (x|y)\.de\)\.filter\(Boolean\)/g) || []).length, 2, 'same authored line mapping');
  assert.equal((listening.match(/ws\.syncFor\(a, slices\[i\], \{ text: lines\[i\] \}\)/g) || []).length, 2, 'same per-line word sync');
  const vocab = cut(APP, '  function vocabCard(w) {', '  function learnBtn(w) {');
  assert.equal((vocab.match(/SentencePlay\.button\(/g) || []).length, 1, 'one sentence button: the A1·01 example pilot');
  assert.match(vocab, /if \(EXAMPLE_AUDIO_PILOT && \(w\.ex \|\| ''\)\.trim\(\)\) \{/);
  assert.match(vocab, /fn\(term, \{ gender: g, onAudio: o\.onAudio \}\)/, 'word control: the same KW_speak(term, { gender }) lookup');
  assert.match(vocab, /fn\(term, \{ gender: g \}\)/, 'fallback path unchanged');
  assert.match(vocab, /x\.setAttribute\('aria-pressed', on \? 'true' : 'false'\)/);
});

test('scorer and Speaking/Story code unchanged by this rollout', () => {
  let base;
  try { base = execFileSync('git', ['show', 'e66604c:chapter/chapter-app.js'], { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 << 20 }); } catch { return; }
  const same = (a, b) => assert.equal(cut(APP, a, b), cut(base, a, b), a);
  same('  // ---- Word Match scorer (deterministic) ----', '  // ---- end Word Match scorer ----');
  same('  function bodySpeaking() {', '  /* Speaking check — microphone context');
  same('  function bodyStory() {', '  function bodyVocabulary() {');
  same('  function askSpeechAccess() {', '  function speechServerEndpoint() {');
});

/* ---------- production audio mapping (data only, no playback) ---------- */
const MANIFEST = JSON.parse(fs.readFileSync(path.join(ROOT, 'public/audio/manifest.json'), 'utf8')).entries;
const N = (s) => String(s || '').normalize('NFC').replace(/[„“”«»]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, ' ').trim();
// Same formatting-insensitive key as the engine's canonKey() (kw-audio-engine.js).
const canon = (t) => String(t || '').normalize('NFC').replace(/[\u2013\u2014]/g, '-').replace(/\u2026/g, '.').replace(/[\u201E\u201C\u201D\u00AB\u00BB\u2039\u203A]/g, '"')
  .replace(/[.,!?;:\u00BF\u00A1"'()\[\]{}\u2026\u2013\u2014-]+/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
const BY = new Map(), CANON = new Map();
for (const [k, v] of Object.entries(MANIFEST)) if (v && typeof v === 'object') { BY.set(N(k), v); CANON.set(canon(k), v); }
const lookup = (t) => BY.get(N(t)) || CANON.get(canon(t)) || null;
function chapterData(page) {
  const html = fs.readFileSync(path.join(ROOT, 'chapter', page), 'utf8');
  const src = html.match(/<script src="([^"]*data[^"]*\.js)[^"]*"/)[1].split('?')[0];
  const c = { console: { log() {}, warn() {} } }; c.window = c; vm.createContext(c);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'chapter', src), 'utf8') + '\n;this.__C = CHAPTER;', c);
  return c.__C;
}
const PAGES = fs.readdirSync(path.join(ROOT, 'chapter')).filter((f) => /^chapter-[a-c][0-9]-.*\.html$/.test(f)).sort();
const READING_EXC = fs.readFileSync(path.join(ROOT, 'public/audio/kw-reading-exceptions.js'), 'utf8');
/* Run the page's own Reading exception script(s) (the shared table and/or an
   inline page exception such as C2·01) against a stub engine, then ask for the
   displayed passage exactly as the Reading player does; return the text the
   engine is really asked for. */
function readingRequest(page, C, displayed) {
  const html = fs.readFileSync(path.join(ROOT, 'chapter', page), 'utf8');
  const scripts = [];
  if (/kw-reading-exceptions\.js/.test(html)) scripts.push(READING_EXC);
  for (const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) if (/displayedKey/.test(m[1])) scripts.push(m[1]);
  let asked = null;
  const g = { CHAPTER: C, KW_canonKey: canon, requestAnimationFrame: () => 0, cancelAnimationFrame() {},
    KW_resolveInfo: (t) => { const e = lookup(t); return e ? { url: 'https://cdn.example/audio/' + e.file.replace(/^audio\//, '') } : null; },
    KW_speak: function (t) { asked = t; return Promise.resolve('manifest'); }, console: { log() {}, warn() {} } };
  g.window = g; vm.createContext(g);
  for (const sc of scripts) vm.runInContext(sc, g);
  g.KW_speak(displayed, {});
  return { text: asked, alias: N(asked) !== N(displayed) };
}

test('Reading + Listening on all 258 chapters: the requested texts are the authored recordings (counts reported)', () => {
  let readingOk = 0, aliasOk = 0, lines = 0, linesOk = 0; const readingMiss = [], transcriptOnly = [];
  for (const page of PAGES) {
    const C = chapterData(page);
    const txt = C.reading.tokens.filter((t) => !t.plain).map((t) => t.w).join(' ');
    const asked = readingRequest(page, C, txt);                // what KW_speak really asks for on this page
    const r = lookup(asked.text);
    if (r && r.kind === 'reading' && r.chapter === C.id) { readingOk++; if (asked.alias) aliasOk++; } else readingMiss.push(C.id);
    const L = C.listening;
    const ls = Array.isArray(L.dialogue) && L.dialogue.length ? L.dialogue.map((x) => x && x.de).filter(Boolean) : [L.transcript];
    if (!(Array.isArray(L.dialogue) && L.dialogue.length)) transcriptOnly.push(C.id);
    for (const l of ls) { lines++; if (lookup(l)) linesOk++; }
  }
  console.log(`  Reading: ${readingOk}/258 passages request their own reading recording (${aliasOk} through the page's exception alias); Listening: ${linesOk}/${lines} lines resolve; transcript-only: ${transcriptOnly.join(', ')}`);
  assert.equal(PAGES.length, 258);
  assert.deepEqual(readingMiss, [], 'every Reading passage requests its own recording');
  assert.equal(aliasOk, 81, '80 table aliases + the C2·01 page exception');
  assert.equal(linesOk, lines, 'every Listening line resolves');
  assert.deepEqual(transcriptOnly.sort(), ['b2-14-goethe-mini-test-1', 'b2-26-goethe-mini-test-2', 'b2-36-goethe-halbzeit-test', 'b2-43-goethe-mini-3']);
});
