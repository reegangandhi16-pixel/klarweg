/* Homepage chat UI (kw-ai-chat.js): what the chat shows and allows for
   each /ai/status answer. The real file runs in a vm sandbox against a
   minimal stand-in DOM and a stubbed Access Worker — no browser, no
   network. The server remains the only quota authority; this checks the
   display and the gating only. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = fs.readFileSync(path.join(ROOT, 'kw-ai-chat.js'), 'utf8');

/* ---------- a stand-in DOM: just what kw-ai-chat.js touches ---------- */
class Node {
  constructor(tag, attrs = {}) {
    this.tagName = tag.toUpperCase();
    this.attrs = { ...attrs };
    this.children = [];
    this.parent = null;
    this.listeners = {};
    this.className = '';
    this.hidden = false;
    this.disabled = false;
    this.value = '';
    this._text = '';
    this.classList = { toggle() {} };
  }
  get textContent() { return this._text + this.children.map((c) => c.textContent).join(''); }
  set textContent(v) { this._text = String(v); this.children.forEach((c) => { c.parent = null; }); this.children = []; }
  setAttribute(k, v) { this.attrs[k] = String(v); }
  getAttribute(k) { return k in this.attrs ? this.attrs[k] : null; }
  appendChild(c) { c.parent = this; this.children.push(c); return c; }
  remove() { if (this.parent) this.parent.children = this.parent.children.filter((c) => c !== this); this.parent = null; }
  addEventListener(type, fn) { (this.listeners[type] = this.listeners[type] || []).push(fn); }
  fire(type, ev = {}) { for (const fn of this.listeners[type] || []) fn.call(this, { preventDefault() {}, ...ev }); }
  focus() {}
  matches(sel) {
    const a = sel.match(/^\[([a-z-]+)\]$/);
    return a ? a[1] in this.attrs : this.tagName === sel.toUpperCase();
  }
  querySelectorAll(sel) {
    const out = [];
    const walk = (n) => { for (const c of n.children) { if (c.matches(sel)) out.push(c); walk(c); } };
    walk(this);
    return out;
  }
  querySelector(sel) { return this.querySelectorAll(sel)[0] || null; }
}

function page() {
  const root = new Node('section', { 'data-kw-chat': '' });
  const add = (parent, tag, attr) => parent.appendChild(new Node(tag, attr ? { [attr]: '' } : {}));
  const status = add(root, 'div', 'data-kw-chat-status');
  const lang = add(root, 'button', 'data-kw-chat-lang'); lang.attrs['data-kw-chat-lang'] = 'en';
  const log = add(root, 'div', 'data-kw-chat-log');
  const starters = add(log, 'div', 'data-kw-chat-starters');
  add(starters, 'button').textContent = 'Explain Akkusativ in simple Hindi.';
  const gate = add(root, 'p', 'data-kw-chat-gate'); gate.hidden = true;
  const form = add(root, 'form', 'data-kw-chat-form');
  const input = add(form, 'textarea', 'data-kw-chat-input'); input.disabled = true;
  const send = add(form, 'button', 'data-kw-chat-send'); send.disabled = true;
  const body = new Node('body'); body.appendChild(root);
  return { body, log, status, gate, form, input, send };
}

/* Load kw-ai-chat.js with a stubbed Access Worker. `server.status` is the
   /ai/status body; `server.chat(n)` answers the n-th POST /ai/chat. */
async function load(server) {
  const p = page();
  const posts = [];
  const res = (status, body) => ({ ok: status >= 200 && status < 300, status, json: async () => body });
  const ctx = {
    document: { querySelector: (s) => p.body.querySelector(s), createElement: (t) => new Node(t) },
    localStorage: { getItem: () => null, setItem() {} },
    KW_ACCESS_API: 'https://access.test',
    fetch: async (url, init = {}) => {
      if (url.includes('/ai/status')) return res(200, typeof server.status === 'function' ? server.status() : server.status);
      posts.push(JSON.parse(init.body));
      const [code, body] = server.chat(posts.length);
      return res(code, body);
    },
  };
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(SOURCE, ctx);
  await settle();
  const ask = async (text) => { p.input.value = text; p.input.fire('input'); p.form.fire('submit'); await settle(); };
  return { ...p, posts, ask, statusText: () => p.status.textContent, gateText: () => (p.gate.hidden ? null : p.gate.textContent) };
}
const settle = () => new Promise((r) => setTimeout(r, 5));

const answer = [200, { ok: true, source: 'ai', result: { answer: 'Antwort', examples: [], follow_ups: [] } }];
const buyer = (day, month) => ({ status: { ok: true, enabled: true, signedIn: true, eligible: true, tier: 'chat', remaining: { day, month } }, chat: () => answer });
const anon = (day, chat = () => answer) => ({ status: { ok: true, enabled: true, signedIn: false, eligible: true, tier: 'anon', remaining: { day } }, chat });

/* ---------- buyers: day vs month ---------- */
test('chat UI A: buyer 20 today / 100 this month → "20 questions left today"', async () => {
  const c = await load(buyer(20, 100));
  assert.equal(c.statusText(), '20 questions left today');
  assert.equal(c.input.disabled, false);
  assert.equal(c.gateText(), null);
});

test('chat UI B: buyer 4 today / 100 this month → "4 questions left today"', async () => {
  const c = await load(buyer(4, 100));
  assert.equal(c.statusText(), '4 questions left today');
});

test('chat UI C: buyer 20 today / 4 this month → "4 questions left this month", counting down by month', async () => {
  const c = await load(buyer(20, 4));
  assert.equal(c.statusText(), '4 questions left this month');
  await c.ask('Frage?');
  assert.equal(c.statusText(), '3 questions left this month');
  assert.equal(c.input.disabled, false);
});

test('chat UI: equal day and month remaining reads as today', async () => {
  const c = await load(buyer(5, 5));
  assert.equal(c.statusText(), '5 questions left today');
});

test('chat UI D: buyer with the month used up → locked with the monthly message, even with daily questions left', async () => {
  const c = await load(buyer(20, 0));
  assert.equal(c.statusText(), '0 questions left this month');
  assert.equal(c.gateText(), 'You have used this month’s Klarweg AI chat questions. ');
  assert.equal(c.input.disabled, true);
  assert.equal(c.send.disabled, true);

  // reaching 0 during the session locks the same way
  const d = await load(buyer(20, 1));
  await d.ask('Frage?');
  assert.equal(d.statusText(), '0 questions left this month');
  assert.match(d.gateText(), /this month’s/);
  assert.equal(d.input.disabled, true);
});

test('chat UI: buyer with today used up (month left) keeps the daily message', async () => {
  const c = await load(buyer(0, 50));
  assert.equal(c.statusText(), '0 questions left today');
  assert.match(c.gateText(), /today’s Klarweg AI chat questions\. They reset at midnight UTC\./);
  assert.equal(c.input.disabled, true);
});

/* ---------- signed-out visitors (unchanged by the month display) ---------- */
test('chat UI E/F: anonymous 3 → "3 free questions left today"; typing and Send allowed; locks with sign-in at 0', async () => {
  const c = await load(anon(3));
  assert.equal(c.statusText(), '3 free questions left today');
  assert.equal(c.input.disabled, false, 'signed-out visitor can type');
  assert.equal(c.send.disabled, true, 'Send waits for text');
  c.input.value = 'Hallo'; c.input.fire('input');
  assert.equal(c.send.disabled, false, 'Send enabled with text');
  c.input.value = '';

  await c.ask('Eins?');
  assert.equal(c.statusText(), '2 free questions left today');
  await c.ask('Zwei?');
  assert.equal(c.statusText(), '1 free question left today');
  await c.ask('Drei?');
  assert.equal(c.statusText(), 'Sign in to ask');
  assert.match(c.gateText(), /^You have used today’s free Klarweg AI questions\. Sign in to keep asking\. Sign in$/);
  assert.match(c.gate.querySelector('a').href, /mode=login/, 'sign-in link rendered');
  assert.equal(c.input.disabled, true);
  assert.equal(c.send.disabled, true);
  assert.equal(c.posts.length, 3);
  assert.deepEqual(Object.keys(c.posts[0]).sort(), ['history', 'lang', 'message']);
});

test('chat UI F: anonymous refused by the server (429) re-checks status and locks with sign-in', async () => {
  let left = 2;
  const c = await load({
    status: () => ({ ok: true, enabled: true, signedIn: false, eligible: true, tier: 'anon', remaining: { day: left } }),
    chat: () => { left = 0; return [429, { ok: false, error: 'quota_day', message: 'You have used today’s free Klarweg AI questions. Sign in to keep asking.' }]; },
  });
  assert.equal(c.statusText(), '2 free questions left today');
  await c.ask('Frage?');
  await settle();
  assert.equal(c.statusText(), 'Sign in to ask');
  assert.match(c.gateText(), /Sign in to keep asking/);
  assert.equal(c.input.disabled, true);
});

test('chat UI: signed out with anonymous chat off, and signed in without a level, are unchanged', async () => {
  const off = await load({ status: { ok: true, enabled: true, signedIn: false, eligible: false }, chat: () => answer });
  assert.equal(off.statusText(), 'Sign in to ask');
  assert.equal(off.gateText(), 'Sign in to ask Klarweg AI. Sign in');
  assert.equal(off.input.disabled, true);

  const plain = await load({ status: { ok: true, enabled: true, signedIn: true, eligible: false }, chat: () => answer });
  assert.equal(plain.statusText(), 'Included with every course level');
  assert.equal(plain.gateText(), 'Klarweg AI chat is included with every Klarweg course level. See the courses');
  assert.equal(plain.input.disabled, true);

  const down = await load({ status: { ok: true, enabled: false }, chat: () => answer });
  assert.equal(down.statusText(), 'Not available right now');
  assert.equal(down.input.disabled, true);
});
