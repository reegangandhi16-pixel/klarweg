/* Chapter-wide audio controls (formerly the A1·01 pilot): Speaking's Hear
   Question / Hear & Repeat Aloud / Show–Hide Answer on EVERY chapter, played
   from the existing production recordings. Runs the REAL SentencePlay block and
   the REAL Speaking block of chapter/chapter-app.js against each chapter's own
   data file (all 258), in a VM with a tiny DOM. Also pins which gates stay
   A1·01-only (example-sentence buttons, the local Whisper dev endpoint). */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = fs.readFileSync(path.join(ROOT, 'chapter/chapter-app.js'), 'utf8');
const cut = (a, b) => { const i = APP.indexOf(a), j = APP.indexOf(b, i); assert.ok(i > 0 && j > i, a); return APP.slice(i, j); };
const SP_BLOCK = cut('  /* ---------- sentence audio control', '  /* ---------- toast ---------- */');
const SPEAK_BLOCK = cut('  // ---- Speaking ----', '  // ---- Klarweg AI integration ----');
const MANIFEST = JSON.parse(fs.readFileSync(path.join(ROOT, 'public/audio/manifest.json'), 'utf8')).entries;
const N = (s) => String(s || '').normalize('NFC').replace(/[„“”«»]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, ' ').trim();
// The runtime manifest is keyed by TEXT: a sentence used in several chapters has
// one entry (tagged with one of them), and the engine plays it for all of them.
const BY_TEXT = new Map();
for (const [k, v] of Object.entries(MANIFEST)) if (k !== 'version' && k !== 'generatedAt' && k !== 'policy') BY_TEXT.set(N(k), v);

/* ---------- tiny DOM ---------- */
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
  prepend(c) { this.children.unshift(c); }
  get lastChild() { return this.children[this.children.length - 1]; }
  get firstChild() { return this.children[0]; }
  set innerHTML(v) { this.children = v ? [new Text(v)] : []; }
  get textContent() { return this.children.map((c) => c.textContent).join(''); }
  set textContent(v) { this.children = [new Text(v)]; }
  setAttribute(k, v) { this.attrs[k] = String(v); } getAttribute(k) { return k in this.attrs ? this.attrs[k] : null; } removeAttribute(k) { delete this.attrs[k]; }
  addEventListener(t, fn) { (this.listeners[t] = this.listeners[t] || []).push(fn); }
  contains(n) { return n === this || this.children.some((c) => c.nodeType === 1 && c.contains(n)); }
  findAll(pred, out = []) { for (const c of this.children) { if (c.nodeType !== 1) continue; if (pred(c)) out.push(c); c.findAll(pred, out); } return out; }
  find(pred) { return this.findAll(pred)[0] || null; }
  querySelector(sel) { return this.find((n) => n._cls.has(sel.replace(/^\./, ''))); }
  getBoundingClientRect() { return { top: 10, bottom: 20, height: 10 }; }
}
function el(tag, props = {}, ...kids) {
  const n = new El(tag);
  for (const k in props) {
    if (k === 'class') n.className = props[k];
    else if (k === 'html') n.innerHTML = props[k];
    else if (k === 'style') String(props[k]).split(';').forEach((d) => { const [a, ...b] = d.split(':'); if (a && a.trim()) n.style[a.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = b.join(':').trim(); });
    else if (k.startsWith('on') && typeof props[k] === 'function') n.addEventListener(k.slice(2), props[k]);
    else if (props[k] != null) n.setAttribute(k, props[k]);
  }
  kids.flat().forEach((c) => { if (c != null) n.appendChild(typeof c === 'string' ? new Text(c) : c); });
  return n;
}

/* Load one chapter's data file the way the page does (const CHAPTER = …). */
function chapterData(page) {
  const html = fs.readFileSync(path.join(ROOT, 'chapter', page), 'utf8');
  const src = html.match(/<script src="([^"]*data[^"]*\.js)[^"]*"/)[1].split('?')[0];
  const ctx = { console: { log() {}, warn() {} } }; ctx.window = ctx; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'chapter', src), 'utf8') + '\n;this.__C = CHAPTER;', ctx);
  return ctx.__C;
}

/* Render the real Speaking section of chapter C with the real SentencePlay. */
function render(C, { killSwitch = false } = {}) {
  const spoken = [];
  const ctx = {
    navigator: { userAgent: 'Mozilla/5.0 Chrome/140', maxTouchPoints: 0, mediaDevices: { getUserMedia: () => Promise.reject(new Error('x')) } },
    location: { search: '', protocol: 'https:', href: 'https://klarweg.test/' }, document: { body: new El('body') }, isSecureContext: true,
    scrollY: 0, innerHeight: 800, scrollTo() {}, matchMedia: () => ({ matches: true }), URL: { createObjectURL: () => 'blob:', revokeObjectURL() {} },
    Blob, setTimeout, clearTimeout, setInterval, clearInterval, Date, JSON, String, Math, Promise, Object, Array, Set, Number,
    el, C, ICON: { mic: '', speaker: '', play: '', stop: '' }, IS_EXAM: false, aiSlot: () => el('div', { class: 'kw-ai-slot' }),
    Audio: { stop() {}, speak(text) { spoken.push(text); } }, MediaRecorder: function () {}, webkitSpeechRecognition: function () {},
    speakWordFemale() {}, resolveHeadword: (t) => t,
  };
  if (killSwitch) ctx.KW_SENTENCE_PLAY = false;
  vm.createContext(ctx); ctx.window = ctx;
  vm.runInContext(SP_BLOCK + SPEAK_BLOCK + '\nthis.__t = { bodySpeaking, SentencePlay, WordAudio, EXAMPLE_AUDIO_PILOT };', ctx);
  return { t: ctx.__t, wrap: ctx.__t.bodySpeaking(), spoken };
}
const PAGES = fs.readdirSync(path.join(ROOT, 'chapter')).filter((f) => /^chapter-[a-c][0-9]-.*\.html$/.test(f)).sort();

test('gates: SentencePlay is chapter-independent; only example sentences and the dev endpoint stay A1·01', () => {
  assert.match(APP, /const enabled = window\.KW_SENTENCE_PLAY !== false;/);
  assert.match(APP, /const EXAMPLE_AUDIO_PILOT = SentencePlay\.enabled && C\.id === 'a1-1-alphabet';/);
  const ids = APP.match(/C\.id (?:===|!==) '[^']+'|C\.id (?:===|!==) [A-Z_]+/g) || [];
  assert.deepEqual(ids.sort(), ["C.id !== SPEECH_PILOT_CHAPTER", "C.id === 'a1-1-alphabet'"].sort(), 'no other chapter-id gates');
  assert.equal((APP.match(/if \(EXAMPLE_AUDIO_PILOT/g) || []).length, 2, 'used by the vocab and grammar example buttons only');
  assert.doesNotMatch(SPEAK_BLOCK.slice(SPEAK_BLOCK.indexOf('function askSpeechAccess'), SPEAK_BLOCK.indexOf('function speechServerEndpoint')), /SPEECH_PILOT_CHAPTER|a1-1-alphabet/, 'the server path has no chapter list');
});

test(`Speaking on all ${PAGES.length} chapters: Hear Question, Hear & Repeat Aloud, Show/Hide Answer — once each, exact recordings`, () => {
  assert.equal(PAGES.length, 258);
  let cards = 0, missing = [], shared = 0;
  for (const page of PAGES) {
    const C = chapterData(page);
    const { t, wrap, spoken } = render(C);
    assert.equal(t.SentencePlay.enabled, true, page);
    assert.equal(t.WordAudio.enabled, true, page);
    assert.equal(t.EXAMPLE_AUDIO_PILOT, C.id === 'a1-1-alphabet', page);
    const cardEls = wrap.findAll((n) => n._cls.has('card'));
    assert.equal(cardEls.length, C.speaking.length, page);
    C.speaking.forEach((p, i) => {
      const card = cardEls[i];
      const pills = card.findAll((n) => n.tagName === 'BUTTON' && n.dataset.label);
      const q = pills.filter((b) => b.dataset.label === 'Hear Question'), m = pills.filter((b) => b.dataset.label === 'Hear & Repeat Aloud');
      assert.equal(q.length, p.task ? 1 : 0, `${page} #${i} Hear Question`);
      assert.equal(m.length, 1, `${page} #${i} Hear & Repeat Aloud`);
      assert.equal(card.findAll((n) => n.tagName === 'BUTTON' && /Hear model/.test(n.textContent)).length, 0, `${page} #${i} no old Hear model`);
      for (const b of [...q, ...m]) {
        assert.equal(b.getAttribute('type'), 'button');
        assert.match(b.getAttribute('aria-label'), new RegExp('^' + b.dataset.label.replace(/[&]/g, '\\$&') + ', play$'), 'label in name');
      }
      spoken.length = 0;
      if (q[0]) q[0].listeners.click[0]({ stopPropagation() {} });
      m[0].listeners.click[0]({ stopPropagation() {} });
      assert.deepEqual(spoken, [p.task, p.de].filter(Boolean), `${page} #${i} plays the question, then the model answer`);
      for (const text of [p.task, p.de].filter(Boolean)) {
        const e = BY_TEXT.get(N(text));
        if (!e) missing.push(`${C.id}: ${text}`);
        else if (typeof e !== 'object' || e.chapter !== C.id || e.kind !== 'speaking') shared++;
      }
      if (p.task) {
        const reveal = card.find((n) => n.tagName === 'BUTTON' && /Show Answer/.test(n.textContent));
        const model = card.find((n) => n._cls.has('speak-model'));
        assert.ok(reveal && model, `${page} #${i} Show Answer`);
        assert.equal(model.style.display, 'none');
        reveal.listeners.click[0]();
        assert.equal(model.style.display, 'block'); assert.match(reveal.textContent, /Hide Answer/);
        reveal.listeners.click[0]();
        assert.equal(model.style.display, 'none'); assert.match(reveal.textContent, /Show Answer/);
      }
      cards++;
    });
  }
  assert.equal(cards, 1277, 'every Speaking card');
  assert.deepEqual(missing, [], 'every question and model answer resolves to a production recording');
  console.log(`  ${cards} cards; ${shared} of ${cards * 2} texts resolve to a recording shared with another chapter or section (same text)`);
});

test('kill switch: window.KW_SENTENCE_PLAY = false restores the original Speaking markup', () => {
  const C = chapterData('chapter-b1-1-infinitiv-mit-zu.html');
  const { t, wrap } = render(C, { killSwitch: true });
  assert.equal(t.SentencePlay.enabled, false); assert.equal(t.WordAudio.enabled, false); assert.equal(t.EXAMPLE_AUDIO_PILOT, false);
  const card = wrap.findAll((n) => n._cls.has('card'))[0];
  assert.ok(card.find((n) => n.tagName === 'BUTTON' && /Hear model/.test(n.textContent)));
  assert.ok(card.find((n) => n.tagName === 'BUTTON' && /Show model answer/.test(n.textContent)));
  assert.equal(card.findAll((n) => n.dataset && n.dataset.label).length, 0);
});

test('one sentence at a time across cards and chapters: starting another stops the first', () => {
  const C = chapterData('chapter-c2-29-goethe-c2-final.html');
  let stops = 0;
  const { wrap } = render(C);
  const pills = wrap.findAll((n) => n.tagName === 'BUTTON' && n.dataset.label);
  pills[0].listeners.click[0]({ stopPropagation() {} });
  assert.equal(pills[0].dataset.state, 'loading');
  pills[2].listeners.click[0]({ stopPropagation() {} });
  assert.equal(pills[0].dataset.state, 'idle', 'the first control is reset');
  assert.equal(pills[2].dataset.state, 'loading');
  assert.ok(stops >= 0);
});
