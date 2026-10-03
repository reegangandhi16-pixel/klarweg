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
  same('  function bodyStory() {', '  function bodyVocabulary() {');
  // The Speaking cards changed only by the per-task daily cap (the note under
  // Record & check and the locked-click guard; scripts/speech-task-cap.test.mjs).
  const TASK_CAP_LINES = /^ {6}\/\/ Per-task daily cap|^ {6}const note = el\('p', \{ class: 'muted kw-task-left'|^ {6}note\.hidden = true;$|^ {6}micBtn\.setAttribute\('aria-describedby', note\.id\);$|^ {6}taskUI\[i\] = |^ {6}paintTask\(i\);$|^ {8}if \(taskState\(i\)\.locked && !micBtn\._kwSession\)/;
  const speaking = cut(APP, '  function bodySpeaking() {', '  /* Speaking check — microphone context').split('\n').filter((l) => !TASK_CAP_LINES.test(l)).join('\n')
    .replace('card.append(micBtn, note, result);', 'card.append(micBtn, result);');
  assert.equal(speaking, cut(base, '  function bodySpeaking() {', '  /* Speaking check — microphone context'), 'Speaking cards: only the per-task cap was added');
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

/* ---------- Reading seek range on alias pages: 0 → authored endAt ---------- */
test('PlayerUI with end(): range is 0 → endAt (not the whole file), seeks clamp to endAt, Listening-style bars unaffected', () => {
  const { PlayerUI } = load();
  const fill = el('div'), bar = el('div', {}, fill), a = new FakeAudio(30);   // 30 s file, unplayed tail after 20 s
  a.kwEndAt = 20;
  let shown = null;
  const seek = PlayerUI.seekBar(bar, fill, { label: 'Position in passage', step: 2, end: (x) => x.kwEndAt, getAudio: () => a, onShow: (t, d) => { shown = [t, d]; } });
  bar.fire('pointerdown', { clientX: 150, pointerId: 1 }); bar.fire('pointerup');       // 25%
  assert.equal(a.currentTime, 5); assert.deepEqual(shown, [5, 20]); assert.equal(bar.getAttribute('aria-valuemax'), '20');
  bar.fire('pointerdown', { clientX: 400, pointerId: 1 }); bar.fire('pointerup');       // past the right edge
  assert.equal(a.currentTime, 20, 'clamped to endAt, never into the tail'); assert.equal(fill.style.width, '100%');
  bar.fire('keydown', { key: 'Home' }); assert.equal(a.currentTime, 0);
  bar.fire('keydown', { key: 'End' }); assert.ok(Math.abs(a.currentTime - 19.95) < 1e-9, 'End = just before endAt');
  bar.fire('keydown', { key: 'PageUp' }); assert.equal(a.currentTime, 20, 'keys clamp to endAt');
  assert.equal(bar.getAttribute('aria-valuetext'), '0:20 of 0:20');
  // follow(): position painted against endAt; the exception's jump to the file end paints 100%, not past it
  const ac = new AbortController();
  PlayerUI.follow(a, seek, ac.signal, () => true, (x) => x.kwEndAt);
  a.currentTime = 10; a.fire('timeupdate'); assert.equal(fill.style.width, '50%');
  a.currentTime = 30; a.fire('timeupdate'); assert.equal(fill.style.width, '100%'); assert.equal(bar.getAttribute('aria-valuenow'), '20');
  ac.abort();
  // metadata not loaded yet (duration NaN): no range yet, exactly like a normal page; endAt applies once it loads
  const b2 = el('div', {}, el('div')), f2 = b2.children[0], n = new FakeAudio(NaN); n.kwEndAt = 12;
  const s2 = PlayerUI.seekBar(b2, f2, { label: 'x', step: 2, end: (x) => x.kwEndAt, getAudio: () => n });
  PlayerUI.follow(n, s2, new AbortController().signal, () => true, (x) => x.kwEndAt);
  b2.fire('pointerdown', { clientX: 150, pointerId: 1 }); b2.fire('pointerup'); assert.equal(n.currentTime, 0, 'no seek before metadata');
  assert.equal(b2.getAttribute('aria-valuemax'), '0');
  n.duration = 20; n.fire('loadedmetadata'); assert.equal(b2.getAttribute('aria-valuemax'), '12');
  // no end() (Listening) or no kwEndAt (normal Reading): full duration, as before
  const b3 = el('div', {}, el('div')), f3 = b3.children[0], l = new FakeAudio(30); l.kwEndAt = 20;
  PlayerUI.seekBar(b3, f3, { label: 'x', step: 2, getAudio: () => l });
  b3.fire('pointerdown', { clientX: 400, pointerId: 1 }); assert.equal(l.currentTime, 30, 'no end(): whole file');
  const b4 = el('div', {}, el('div')), f4 = b4.children[0], r = new FakeAudio(30);
  PlayerUI.seekBar(b4, f4, { label: 'x', step: 2, end: (x) => x.kwEndAt, getAudio: () => r });
  b4.fire('pointerdown', { clientX: 400, pointerId: 1 }); assert.equal(r.currentTime, 30, 'no kwEndAt: whole file');
  // an endAt at/after the file's end is ignored (the file is shorter): whole file
  const b5 = el('div', {}, el('div')), f5 = b5.children[0], s = new FakeAudio(10); s.kwEndAt = 15;
  PlayerUI.seekBar(b5, f5, { label: 'x', step: 2, end: (x) => x.kwEndAt, getAudio: () => s });
  b5.fire('pointerdown', { clientX: 400, pointerId: 1 }); assert.equal(s.currentTime, 10);
});

test('Reading wiring: readingStart passes the authored endAt to the seek bar and follow(); nothing else uses it', () => {
  const rs = cut(APP, '  function readingStart(r, passage) {', '  let wordPop,');
  assert.match(rs, /const endAt = \(a\) => a\.kwEndAt;/);
  assert.match(rs, /PlayerUI\.seekBar\(bar, fill, \{ label: 'Position in passage', step: 2, end: endAt,/);
  assert.match(rs, /PlayerUI\.follow\(a, seek, ac\.signal, \(\) => SentencePlay\.audioOf\(btn\) === a, endAt\)/);
  assert.match(rs, /SentencePlay\.button\(txt, \{ noun: 'passage', rate: 0\.92, sync: sync,/, 'same Reading audio request');
  assert.equal((APP.match(/kwEndAt/g) || []).length, 1, 'only Reading reads kwEndAt');
  const listening = cut(APP, '  function bodyListening() {', '  function bodySpeaking() {');
  assert.doesNotMatch(listening, /end:|kwEndAt/, 'Listening seek range unchanged');
});

test('Reading alias pages (81): the exception tags the recording with its authored endAt; normal pages are untagged; table data unchanged', () => {
  const tags = {}; let tagged = 0, untagged = 0;
  for (const page of PAGES) {
    const html = fs.readFileSync(path.join(ROOT, 'chapter', page), 'utf8');
    const C = chapterData(page);
    const scripts = [];
    if (/kw-reading-exceptions\.js/.test(html)) scripts.push(READING_EXC);
    for (const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) if (/displayedKey/.test(m[1])) scripts.push(m[1]);
    let url = null, onAudio = null;
    const g = { CHAPTER: C, KW_canonKey: canon, requestAnimationFrame: () => 0, cancelAnimationFrame() {},
      KW_resolveInfo: (t) => { const e = lookup(t); return e ? { url: 'https://cdn.example/audio/' + e.file.replace(/^audio\//, '') } : null; },
      KW_speak: function (t, o) { const e = lookup(t); url = e ? 'https://cdn.example/audio/' + e.file.replace(/^audio\//, '') : null; onAudio = o && o.onAudio; return Promise.resolve('manifest'); },
      console: { log() {}, warn() {} } };
    g.window = g; vm.createContext(g);
    for (const sc of scripts) vm.runInContext(sc, g);
    let seen = null;
    g.KW_speak(C.reading.tokens.filter((t) => !t.plain).map((t) => t.w).join(' '), { onAudio: (a) => { seen = a; } });
    const a = new FakeAudio(60); a.src = url;
    if (onAudio) onAudio(a);
    assert.equal(seen, a, page + ': the Reading player still receives the <audio>');
    if (a.kwEndAt !== undefined) { tagged++; tags[C.id] = a.kwEndAt; assert.ok(isFinite(a.kwEndAt) && a.kwEndAt > 0, page); } else untagged++;
  }
  assert.equal(tagged, 81); assert.equal(untagged, 258 - 81);
  assert.equal(tags['c2-01-zeitformen-der-verben'], 19.40);
  assert.equal(tags['c2-24-goethe-mini-4'], 6.48);
  let base;
  try { base = execFileSync('git', ['show', 'c622798:public/audio/kw-reading-exceptions.js'], { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 << 20 }); } catch { return; }
  const table = (s) => cut(s, '  var EXCEPTIONS = {', '  var speak = global.KW_speak;');
  assert.equal(table(READING_EXC), table(base), 'exception table (files, stale tails, endAt) byte-identical');
});
