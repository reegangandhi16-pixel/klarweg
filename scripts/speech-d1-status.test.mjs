/* End to end, the observed production case: a signed-in, entitled learner on
   B1·18 (b1-18-relativsaetze-mit-praepositionen) with today's counters.
   The REAL Speaking block of chapter/chapter-app.js runs in a VM; its fetch()
   goes straight to the REAL klarweg-access Worker over the test D1, which
   enforces Cloudflare D1's 50-byte LIKE/GLOB limit (the limit that made
   /speech/status throw in production). Mocked mic / recorder / recognition;
   the tutor binding is never reached (no audio, no AI). */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WORKER_DIR = path.join(ROOT, 'access/worker');
const worker = (await import(path.join(WORKER_DIR, 'src/index.js'))).default;
const { createD1 } = await import(path.join(WORKER_DIR, 'test/d1-sqlite.mjs'));
const APP = fs.readFileSync(path.join(ROOT, 'chapter/chapter-app.js'), 'utf8');
const BLOCK = APP.slice(APP.indexOf('  // ---- Speaking ----'), APP.indexOf('  // ---- Klarweg AI integration ----'));
const SITE = 'https://reegangandhi16-pixel.github.io', API = 'https://klarweg-access.example.workers.dev';
const B118 = 'b1-18-relativsaetze-mit-praepositionen';

class Text { constructor(t) { this.nodeType = 3; this.textContent = String(t); } }
class El {
  constructor(tag) { this.nodeType = 1; this.tagName = tag.toUpperCase(); this.children = []; this.attrs = {}; this.style = {}; this.listeners = {}; this.dataset = {}; this.hidden = false; this.disabled = false; const set = new Set(); this._cls = set;
    this.classList = { add: (...c) => c.forEach((x) => set.add(x)), remove: (...c) => c.forEach((x) => set.delete(x)), contains: (c) => set.has(c), toggle: (c, v) => (v ?? !set.has(c)) ? set.add(c) : set.delete(c) }; }
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
  find(pred) { for (const c of this.children) { if (c.nodeType !== 1) continue; if (pred(c)) return c; const d = c.find(pred); if (d) return d; } return null; }
  findAll(pred, out = []) { for (const c of this.children) { if (c.nodeType !== 1) continue; if (pred(c)) out.push(c); c.findAll(pred, out); } return out; }
  getBoundingClientRect() { return { top: 10, bottom: 20, height: 10 }; }
  remove() {}
}
function el(tag, props = {}, ...kids) {
  const n = new El(tag);
  for (const k in props) { if (k === 'class') n.className = props[k]; else if (k.startsWith('on') && typeof props[k] === 'function') n.addEventListener(k.slice(2), props[k]); else if (props[k] != null) n.setAttribute(k, props[k]); }
  kids.flat().forEach((c) => { if (c != null) n.appendChild(typeof c === 'string' ? new Text(c) : c); });
  return n;
}
function chapterData(id) {
  const html = fs.readFileSync(path.join(ROOT, 'chapter', 'chapter-' + id + '.html'), 'utf8');
  const src = html.match(/<script src="([^"]*data[^"]*\.js)[^"]*"/)[1].split('?')[0];
  const c = { console: { log() {}, warn() {} } }; c.window = c; vm.createContext(c);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'chapter', src), 'utf8') + '\n;this.__C = CHAPTER;', c);
  return c.__C;
}

async function page(chapterId) {
  const tutorCalls = [];
  const env = { DB: createD1(WORKER_DIR), RATE_SALT: 's', CASHFREE_ENV: 'sandbox', CASHFREE_APP_ID: 'TEST1', CASHFREE_SECRET_KEY: 'x', GOOGLE_CLIENT_ID: 'g',
    SPEECH_MODE: 'entitled', SPEECH_SCOPE: 'all', SPEECH_CHAPTERS: '', TUTOR: { fetch: async () => { tutorCalls.push(1); throw new Error('no AI in this test'); } } };
  const su = await worker.fetch(new Request(API + '/auth/signup', { method: 'POST', headers: { origin: SITE, 'content-type': 'application/json', 'CF-Connecting-IP': '198.51.100.4' }, body: JSON.stringify({ email: 'e2e@example.com', password: 'correct-horse-9', name: 'E' }) }), env, { waitUntil() {} });
  const user = (await su.json()).user, cookie = su.headers.get('set-cookie').split(';')[0];
  await env.DB.prepare('INSERT INTO user_entitlements (user_id, product_id, source_order_id, granted_at, expires_at) VALUES (?1, ?2, NULL, 1, NULL)').bind(user.id, 'LIFETIME').run();
  const d = new Date().toISOString().slice(0, 10);
  for (const [p, n] of [['sd:' + d, 5], ['sm:' + d.slice(0, 7), 8], [`st:${d}:a1-10-artikel:0`, 3], [`st:${d}:a1-10-artikel:1`, 1], [`st:${d}:${B118}:0`, 2]])
    await env.DB.prepare('INSERT INTO ai_usage (user_id, period, units) VALUES (?1, ?2, ?3)').bind(user.id, p, n).run();
  const fetches = [], recs = [], recorders = [];
  // the page's fetch → the real Worker (origin = the site, the learner's session cookie)
  const fetch_ = async (url, init = {}) => {
    fetches.push(String(url));
    const res = await worker.fetch(new Request(String(url), { method: init.method || 'GET', headers: { origin: SITE, cookie, ...(init.headers || {}) }, body: init.body }), env, { waitUntil() {} });
    const text = await res.text();
    return { ok: res.ok, status: res.status, json: async () => JSON.parse(text) };
  };
  class FakeRec { constructor() { recs.push(this); } start() {} stop() {} abort() {} }
  class FakeMR { constructor() { this.state = 'inactive'; this.mimeType = 'audio/webm'; recorders.push(this); } static isTypeSupported() { return true; } start() { this.state = 'recording'; } stop() { this.state = 'inactive'; } }
  const C = chapterData(chapterId);
  const ctx = {
    navigator: { userAgent: 'Mozilla/5.0 (Macintosh) Chrome/140.0', maxTouchPoints: 0, mediaDevices: { getUserMedia: async () => ({ getTracks: () => [{ stop() {} }], getAudioTracks: () => [{}] }) } },
    location: { search: '', protocol: 'https:', href: 'https://klarweg.test/x', hostname: 'klarweg.test' }, document: { body: new El('body') }, isSecureContext: true, scrollY: 0, innerHeight: 800, scrollTo() {},
    matchMedia: () => ({ matches: true }), URL: Object.assign(function (u) { return new URL(u); }, { createObjectURL: () => 'blob:x', revokeObjectURL() {} }),
    // real timers, unref'd: the page's midnight re-check timer must not keep the test process alive
    Blob, FormData, AbortController, setTimeout: (fn, ms) => { const t = setTimeout(fn, ms); if (t && t.unref) t.unref(); return t; }, clearTimeout, Date, JSON, String, Math, Promise, Object, Array, Set, Number, encodeURIComponent, decodeURIComponent,
    el, C, ICON: { mic: '', speaker: '' }, Audio: { stop() {}, speak() {} }, aiSlot: () => el('div'), IS_EXAM: false, SentencePlay: { enabled: false },
    MediaRecorder: FakeMR, webkitSpeechRecognition: FakeRec, fetch: fetch_, localStorage: { getItem: () => null, setItem() {} },
    KWAccess: { ready: async () => ({ authenticated: true, source: 'server' }) }, KW_ACCESS_API: API
  };
  vm.createContext(ctx); ctx.window = ctx; ctx.self = ctx; ctx.top = ctx;
  vm.runInContext(BLOCK + '\nthis.__t = { bodySpeaking };', ctx);
  const wrap = ctx.__t.bodySpeaking();
  const flush = async () => { for (let i = 0; i < 20; i++) await new Promise((r) => setImmediate(r)); };
  await flush();
  return { ctx, C, wrap, fetches, recs, recorders, tutorCalls, flush,
    btns: wrap.findAll((n) => n._cls.has('mic-btn')), notes: wrap.findAll((n) => n._cls.has('kw-task-left')), results: wrap.findAll((n) => n._cls.has('speak-result')),
    trace: () => (ctx.KW_micTrace || []).filter((r) => /speech\.status|whisper-pilot|recognition\.new/.test(r.step)).map((r) => r.step + ' ' + JSON.stringify(r.info)) };
}

test('B1·18, signed-in entitled learner: status 200 eligible → the page picks the AI path; no unavailable state, no browser fallback, no task-check', async () => {
  const p = await page(B118);
  assert.equal(p.fetches.filter((u) => u === API + '/speech/status?chapter=' + B118).length, 1, 'one status request, no retries needed');
  const st = p.trace()[0];
  assert.match(st, /^speech\.status \{"state":"eligible","enabled":true,"eligible":true,"tasks":\[2,0,0,0,0,0,0\]\}$/, st);
  assert.equal(p.notes[0].textContent, 'Checks left today: 1', 'task 1 shows its real remaining count (2 used today)');
  assert.equal(p.notes[1].textContent, 'Checks left today: 3');
  assert.ok(p.notes.every((n) => !/could not be reached|Checking speech access/.test(n.textContent)), 'no unavailable / pending state');
  p.btns[1].listeners.click.forEach((f) => f()); await p.flush();
  assert.ok(p.trace().some((t) => t === 'whisper-pilot "kw-access"'), 'the press selected the AI server path');
  assert.equal(p.recs.length, 0, 'browser recognition never started');
  assert.equal(p.recorders.length, 1, 'recording via MediaRecorder (mocked) for the AI check');
  assert.equal(p.results[1].getAttribute('data-mic-state'), 'recording');
  assert.equal(p.fetches.filter((u) => /\/speech\/task-check/.test(u)).length, 0);
  assert.equal(p.tutorCalls.length, 0, 'no AI request was made by this test');
});

test('other long-id chapters and A1·10 behave the same through the real Worker', async () => {
  for (const id of ['a1-10-artikel', 'c1-03-nebensaetze-sicher-beherrschen', 'c2-28-praepositionen-der-schriftsprache', 'a2-27-adjektiv-unbestimmter-artikel']) {
    const p = await page(id);
    assert.match(p.trace()[0], /"state":"eligible"/, id);
    assert.ok(p.notes.every((n) => /^Checks left today: [0-3]$/.test(n.textContent) || /used all 3 checks/.test(n.textContent)), id);
    if (id === 'a1-10-artikel') assert.deepEqual(p.notes.map((n) => n.textContent), ['You’ve used all 3 checks for this task today. Move to the next speaking task.', 'Checks left today: 2', 'Checks left today: 3']);
  }
});
