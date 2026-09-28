/* Chapter Klarweg AI launcher + panel (chapter/chapter-tutor.js): what a
   chapter page shows and sends for each /ai/status answer. The real file
   runs in a vm sandbox against a minimal stand-in DOM and a stubbed Access
   Worker — no browser, no network. The server remains the only authority
   on who may ask and how much; this checks display, gating and requests. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = fs.readFileSync(path.join(ROOT, 'chapter/chapter-tutor.js'), 'utf8');
const CSS = fs.readFileSync(path.join(ROOT, 'chapter/chapter.css'), 'utf8');

/* ---------- a stand-in DOM: just what chapter-tutor.js touches ---------- */
class Node {
  constructor(tag) {
    this.tagName = tag.toUpperCase();
    this.attrs = {};
    this.children = [];
    this.parent = null;
    this.listeners = {};
    this._cls = new Set();
    this.hidden = false; this.disabled = false; this.inert = false;
    this.value = ''; this._text = ''; this._html = '';
    this.scrollTop = 0; this.scrollHeight = 0;
    const self = this;
    this.classList = {
      add: (...c) => c.forEach((x) => self._cls.add(x)),
      remove: (...c) => c.forEach((x) => self._cls.delete(x)),
      contains: (c) => self._cls.has(c),
      toggle: (c, on) => { const v = on === undefined ? !self._cls.has(c) : on; v ? self._cls.add(c) : self._cls.delete(c); return v; },
    };
  }
  get className() { return [...this._cls].join(' '); }
  set className(v) { this._cls = new Set(String(v).split(/\s+/).filter(Boolean)); }
  get textContent() { return this._text + this.children.map((c) => c.textContent).join(''); }
  set textContent(v) { this._text = String(v); this.children = []; }
  set innerHTML(v) { this._html = String(v); this.children = []; this._text = ''; }
  get innerHTML() { return this._html; }
  set id(v) { this.attrs.id = v; }
  get id() { return this.attrs.id; }
  setAttribute(k, v) { this.attrs[k] = String(v); }
  getAttribute(k) { return k in this.attrs ? this.attrs[k] : null; }
  appendChild(c) { c.parent = this; this.children.push(c); return c; }
  remove() { if (this.parent) this.parent.children = this.parent.children.filter((c) => c !== this); this.parent = null; }
  addEventListener(type, fn) { (this.listeners[type] = this.listeners[type] || []).push(fn); }
  fire(type, ev = {}) { for (const fn of this.listeners[type] || []) fn.call(this, { preventDefault() {}, ...ev }); }
  focus() { focused = this; }
  get isConnected() { let n = this; while (n.parent) n = n.parent; return n === body; }
  matches(sel) { return sel.split(',').some((one) => one.trim().split('.').filter(Boolean).every((c) => this._cls.has(c))); }
  querySelectorAll(sel) { const out = []; const walk = (n) => { for (const c of n.children) { if (c.matches(sel)) out.push(c); walk(c); } }; walk(this); return out; }
  querySelector(sel) { return this.querySelectorAll(sel)[0] || null; }
}
let body, focused, docListeners;
const $ = (sel) => body.querySelector(sel);
const settle = () => new Promise((r) => setTimeout(r, 70));

/* Load chapter-tutor.js for chapter A2·5 with a stubbed Access Worker.
   `status` is the /ai/status?chapter= body; `answer(n)` → [httpStatus, body]
   for the n-th POST /ai/chapter_chat. */
async function load(status, answer = () => [200, { ok: true, source: 'ai', result: { answer: 'Dass sends the verb to the end.', examples: [{ de: 'Ich weiß, dass er kommt.', en: 'I know that he is coming.' }], follow_ups: ['What about weil?'] } }], { lateConfig = false } = {}) {
  body = new Node('body'); focused = null; docListeners = {};
  const requests = [];
  const res = (code, b) => ({ ok: code >= 200 && code < 300, status: code, json: async () => b });
  /* lateConfig reproduces the real chapter pages: kw-access.js loads
     kw-config.js asynchronously, so KW_ACCESS_API does not exist yet when
     chapter-tutor.js runs; KWAccess.ready() resolves once it does. */
  let readyResolve;
  const readyP = new Promise((r) => { readyResolve = r; });
  const ctx = {
    CHAPTER: { id: 'a2-5-dass', number: 5, title: 'Nebensätze mit dass', sections: [] },
    ...(lateConfig ? { KWAccess: { ready: () => readyP } } : { KW_ACCESS_API: 'https://access.test' }),
    document: {
      body,
      createElement: (t) => new Node(t),
      querySelector: (s) => body.querySelector(s),
      addEventListener: (type, fn) => { (docListeners[type] = docListeners[type] || []).push(fn); },
      get activeElement() { return focused; },
    },
    localStorage: { getItem: () => null, setItem() {} },
    sessionStorage: { getItem: () => null, setItem() {} },
    setTimeout,
    fetch: async (url, init = {}) => {
      requests.push({ url, init });
      if (url.includes('/ai/status')) return res(200, status);
      const n = requests.filter((r) => r.url.endsWith('/ai/chapter_chat')).length;
      const [code, b] = answer(n);
      return res(code, b);
    },
  };
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(SOURCE, ctx);
  await settle();
  const key = (k) => (docListeners.keydown || []).forEach((fn) => fn({ key: k, preventDefault() {} }));
  const ask = async (text) => { const i = $('kw-ai-chat-input'); i.value = text; i.fire('input'); $('kw-ai-chat-form').fire('submit'); await settle(); };
  const configReady = async () => { ctx.KW_ACCESS_API = 'https://access.test'; readyResolve(); await settle(); };
  return { ctx, requests, configReady, key, ask, status: () => $('kw-ai-chat-status').textContent, gate: () => { const g = $('kw-ai-chat-gate'); return g.hidden ? null : g.textContent; } };
}
const buyer = (day, month) => ({ ok: true, enabled: true, signedIn: true, eligible: true, tier: 'chat', remaining: { day, month } });

test('chapter AI: an eligible learner gets the bottom-right "Klarweg AI" launcher; the panel starts closed', async () => {
  const c = await load(buyer(20, 100));
  const fab = $('kw-ai-fab');
  assert.ok(fab, 'launcher rendered');
  assert.equal($('kw-ai-fab-label').textContent, 'Klarweg AI');
  assert.equal(fab.getAttribute('aria-expanded'), 'false');
  assert.equal(fab.getAttribute('aria-controls'), 'kw-ai-chat');
  assert.match(fab.innerHTML, /^<svg [^>]*aria-hidden="true"/, 'a static line icon — no avatar, no emoji');
  const panel = $('kw-ai-chat');
  assert.equal(panel.getAttribute('role'), 'dialog');
  assert.equal(panel.getAttribute('aria-hidden'), 'true');
  assert.equal(panel.inert, true);
  assert.equal($('kw-ai-chat-name').textContent, 'Klarweg AI');
  assert.equal($('kw-ai-chat-scope').textContent, 'Chapter 5 · Nebensätze mit dass');
  assert.equal(c.status(), '20 questions left today');
  assert.equal(c.requests.filter((r) => r.url.includes('/ai/status')).length, 1, 'one status request per page');
  assert.match(c.requests[0].url, /\/ai\/status\?chapter=a2-5-dass$/);
});

test('chapter AI: signed out, not entitled or AI off → no launcher at all', async () => {
  for (const s of [{ ok: true, enabled: true, signedIn: false, eligible: false }, { ok: true, enabled: true, signedIn: true, eligible: false }, { ok: true, enabled: false }]) {
    await load(s);
    assert.equal($('kw-ai-fab'), null, JSON.stringify(s));
    assert.equal($('kw-ai-chat'), null);
  }
});

test('chapter AI: the count is the shared allowance — today, or this month when the month is lower; a used-up month locks', async () => {
  assert.equal((await load(buyer(4, 100))).status(), '4 questions left today');
  assert.equal((await load(buyer(20, 4))).status(), '4 questions left this month');
  const out = await load(buyer(20, 0));
  assert.equal(out.status(), '0 questions left this month');
  assert.equal(out.gate(), 'You have used this month’s Klarweg AI questions.');
  assert.equal($('kw-ai-chat-input').disabled, true);
  assert.equal($('kw-ai-chat-send').disabled, true);
  const day = await load(buyer(0, 50));
  assert.match(day.gate(), /today’s Klarweg AI questions\. They reset at midnight UTC\./);
});

test('chapter AI: open/close — launcher, close button, backdrop and Escape', async () => {
  const c = await load(buyer(20, 100));
  const fab = $('kw-ai-fab'), panel = $('kw-ai-chat');
  fab.fire('click');
  assert.ok(panel.classList.contains('is-open'));
  assert.equal(panel.getAttribute('aria-hidden'), 'false');
  assert.equal(panel.inert, false);
  assert.equal(fab.getAttribute('aria-expanded'), 'true');
  assert.ok($('kw-ai-scrim').classList.contains('is-open'));
  c.key('Escape');
  assert.ok(!panel.classList.contains('is-open'));
  assert.equal(panel.inert, true);
  assert.equal(focused, fab, 'focus returns to the launcher');
  fab.fire('click'); $('kw-ai-chat-close').fire('click');
  assert.ok(!panel.classList.contains('is-open'));
  fab.fire('click'); $('kw-ai-scrim').fire('click');
  assert.ok(!panel.classList.contains('is-open'));
});

test('chapter AI: asking sends only the chapter id and the question to /ai/chapter_chat, renders the answer and counts down', async () => {
  const c = await load(buyer(2, 100));
  $('kw-ai-fab').fire('click');
  const send = $('kw-ai-chat-send');
  assert.equal(send.disabled, true, 'Send waits for text');
  $('kw-ai-chat-input').value = 'x'; $('kw-ai-chat-input').fire('input');
  assert.equal(send.disabled, false);
  await c.ask('Why does dass send the verb to the end?');
  const post = c.requests.find((r) => r.url.endsWith('/ai/chapter_chat'));
  assert.ok(post, 'POST /ai/chapter_chat');
  assert.equal(post.init.method, 'POST');
  assert.equal(post.init.credentials, 'include', 'the account session decides eligibility');
  assert.ok(!('X-Klarweg-Anon' in post.init.headers), 'no anonymous device id on chapter requests');
  const b = JSON.parse(post.init.body);
  assert.deepEqual(Object.keys(b).sort(), ['chapterId', 'history', 'lang', 'message', 'recent']);
  assert.equal(b.chapterId, 'a2-5-dass');
  assert.equal(b.message, 'Why does dass send the verb to the end?');
  assert.deepEqual(b.history, []);
  const answer = $('kw-ai-chat-log').textContent;
  assert.match(answer, /Dass sends the verb to the end\./);
  assert.match(answer, /Ich weiß, dass er kommt\./);
  assert.equal(c.status(), '1 question left today');
  await c.ask('Und weil?');
  assert.equal(JSON.parse(c.requests.filter((r) => r.url.endsWith('/ai/chapter_chat'))[1].init.body).history.length, 2, 'previous turn sent as context');
  assert.equal(c.status(), '0 questions left today');
  assert.match(c.gate(), /They reset at midnight UTC/);
  assert.equal($('kw-ai-chat-input').disabled, true);
});

test('chapter AI: server refusals lock the panel with the server’s fixed message; a failure leaves it usable', async () => {
  const q = await load(buyer(5, 100), () => [429, { ok: false, error: 'quota_day', message: 'You have used today’s Klarweg AI questions. They reset at midnight UTC.' }]);
  await q.ask('Frage?');
  assert.match(q.gate(), /today’s Klarweg AI questions/);
  assert.equal($('kw-ai-chat-input').disabled, true);

  const s = await load(buyer(5, 100), () => [401, { ok: false, error: 'auth_required', message: 'Sign in to use Klarweg AI.' }]);
  await s.ask('Frage?');
  assert.equal(s.gate(), 'Your session has ended. Sign in again to use Klarweg AI.');

  const f = await load(buyer(5, 100), () => [503, { ok: false, error: 'ai_unavailable', message: 'Klarweg AI is unavailable right now. The lesson works as normal — try again in a moment.' }]);
  await f.ask('Frage?');
  assert.equal(f.gate(), null);
  assert.match($('kw-ai-chat-log').textContent, /The lesson works as normal/);
  assert.equal($('kw-ai-chat-input').disabled, false);
  assert.equal(f.status(), '5 questions left today', 'nothing counted for a failure');
});

/* ---------- CSS: placement, mobile, layering, motion ---------- */
const rule = (sel) => { const m = CSS.match(new RegExp('\\n' + sel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*\\{([^}]*)\\}')); return m ? m[1] : ''; };
const px = (block, prop) => { const m = block.match(new RegExp('(?:^|[;\\s])' + prop + ':\\s*(-?\\d+)px')); return m ? Number(m[1]) : null; };
const z = (block) => Number((block.match(/z-index:\s*(\d+)/) || [])[1]);
const media = (q) => [...CSS.matchAll(new RegExp('@media \\(' + q.replace(/[()]/g, '\\$&') + '\\) \\{([\\s\\S]*?)\\n\\}', 'g'))].map((m) => m[1]).join('\n');

test('chapter AI CSS: bottom-right under the Grammar Helper; ≥44px targets; mobile 16px from the edges', () => {
  const fab = rule('.kw-ai-fab');
  assert.match(fab, /position: fixed; right: 24px; bottom: 24px;/);
  assert.ok(px(fab, 'min-height') >= 44);
  const gh = rule('.grammar-helper-btn');
  assert.ok(px(gh, 'bottom') >= 24 + 48 + 8, 'Grammar Helper "Aa" sits above the launcher');
  const mobile = media('max-width: 560px');
  assert.match(mobile, /\.kw-ai-fab \{ right: 16px; bottom: 16px; width: 48px; height: 48px;/);
  assert.match(mobile, /\.kw-ai-fab-label \{ display: none; \}/);
  assert.match(media('max-width: 640px'), /\.kw-ai-chat \{ width: 100vw; min-width: 0; max-width: none;/, 'full width on phones — no horizontal overflow');
  for (const sel of ['.kw-ai-chat-close', '.kw-ai-chip', '.kw-ai-chat-send', '.kw-ai-chat-input']) {
    const b = rule(sel);
    assert.ok((px(b, 'min-height') || px(b, 'height')) >= 44, sel + ' ≥ 44px');
  }
});

test('chapter AI CSS: layered below the word pop-up, above the top bar and Grammar Helper; calm motion', () => {
  const panel = z(rule('.kw-ai-chat')), scrim = z(rule('.kw-ai-scrim')), fab = z(rule('.kw-ai-fab'));
  assert.ok(panel < z(rule('.word-pop-backdrop')) && panel < z(rule('.word-pop')), 'tapped German words open above the panel');
  assert.ok(panel > scrim && scrim > fab && fab > z(rule('.grammar-helper-btn')) && fab > z(rule('.chapter-topbar')));
  assert.ok(fab < z(rule('.toast')), 'toasts stay visible');
  assert.doesNotMatch(rule('.kw-ai-fab:hover'), /scale/, 'hover lifts, never scales');
  const reduced = media('prefers-reduced-motion: reduce');
  assert.match(reduced, /\.kw-ai-fab, \.kw-ai-scrim, \.kw-ai-chat, \.kw-ai-chat\.is-open, \.kw-ai-chip \{ transition: none; \}/);
  const block = CSS.slice(CSS.indexOf('/* ---- Klarweg AI chapter chat'), CSS.indexOf('/* Typed-answer exercises'));
  assert.ok(block.length > 1000);
  assert.match(block, /\.kw-ai-chat \[hidden\] \{ display: none; \}/, 'hidden starters/gate really hide despite display:flex');
  assert.doesNotMatch(block, /var\(--g-/, 'no grammar colours in the launcher or panel');
  assert.doesNotMatch(block, /(?:^|[\s:])(?:18|20|50)px/m, 'spacing stays on the scale');
});

/* ---------- production load order: kw-config.js arrives AFTER chapter-tutor.js ---------- */
function grammarSlot(ctx) {
  const host = body.appendChild(new Node('div'));
  ctx.KW_AI_QUEUE.push({ host, kind: 'grammar', itemId: 'grammar.0' });
  return host;
}

test('load order: with KW_ACCESS_API missing at start, chapter AI waits for KWAccess.ready() instead of caching "disabled"', async () => {
  const c = await load(buyer(20, 100), undefined, { lateConfig: true });
  assert.equal(c.requests.length, 0, 'no request before the config exists');
  assert.equal($('kw-ai-fab'), null, 'nothing rendered yet');
  await c.configReady();
  const statusCalls = c.requests.filter((r) => r.url.includes('/ai/status'));
  assert.equal(statusCalls.length, 1, 'the normal status request happens once the config is ready');
  assert.match(statusCalls[0].url, /^https:\/\/access\.test\/ai\/status\?chapter=a2-5-dass$/);
  assert.ok($('kw-ai-fab'), 'an eligible owner gets the launcher');
  // chapter-app.js renders (and pushes inline AI slots) after KWAccess.ready()
  const host = grammarSlot(c.ctx);
  await settle();
  assert.equal(host.getAttribute('data-kw-ai'), 'on', 'existing inline AI mounts too');
  assert.ok(host.querySelector('kw-ai-btn'), 'inline Klarweg AI buttons rendered');
  assert.equal(c.requests.filter((r) => r.url.includes('/ai/status')).length, 1, 'still one status request per page');
  assert.deepEqual(await c.ctx.KW_AI.status(), buyer(20, 100), 'server truth, not a cached "disabled"');
});

test('load order: an inline slot pushed before the config is ready still mounts once it is', async () => {
  const c = await load(buyer(20, 100), undefined, { lateConfig: true });
  const host = grammarSlot(c.ctx);
  await settle();
  assert.equal(host.getAttribute('data-kw-ai'), null);
  await c.configReady();
  assert.equal(host.getAttribute('data-kw-ai'), 'on');
});

test('load order: non-owner, signed out and AI off stay hidden after the config arrives', async () => {
  for (const s of [{ ok: true, enabled: true, signedIn: true, eligible: false }, { ok: true, enabled: true, signedIn: false, eligible: false }, { ok: true, enabled: false }]) {
    const c = await load(s, undefined, { lateConfig: true });
    await c.configReady();
    assert.equal(c.requests.filter((r) => r.url.includes('/ai/status')).length, 1, JSON.stringify(s));
    assert.equal($('kw-ai-fab'), null, JSON.stringify(s));
    const host = grammarSlot(c.ctx);
    await settle();
    assert.equal(host.getAttribute('data-kw-ai'), null, 'no inline AI: ' + JSON.stringify(s));
  }
});

test('load order: if the config never loads, AI stays off and nothing is requested', async () => {
  const c = await load(buyer(20, 100), undefined, { lateConfig: true });
  // kw-access.js resolves ready() even when kw-config.js failed to load
  c.ctx.KWAccess.ready = () => Promise.resolve();
  await settle();
  assert.equal(c.requests.length, 0);
  assert.equal($('kw-ai-fab'), null);
});
