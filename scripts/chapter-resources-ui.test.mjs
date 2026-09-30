/* Study Resources UI (chapter/chapter-app.js) — runs the real resources block
   in node:vm with a minimal DOM stand-in and stubbed KWAccess / KWAuth,
   in the same style as kw-chapter-ai.test.mjs. No browser. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { DERIVED_RESOURCES } from './chapter-resources/common.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = fs.readFileSync(path.join(ROOT, 'chapter', 'chapter-app.js'), 'utf8');
const START = APP.indexOf('  /* ---------- Study Resources ----------');
const END = APP.indexOf('  /* ---------- Preview dialog ---------- */');
const BLOCK = APP.slice(START, END);

/* ---------- tiny DOM stand-in ---------- */
class Text { constructor(t) { this.textContent = t; } }
class Node {
  constructor(tag, props = {}) {
    this.tag = tag; this.props = props; this.children = []; this.dataset = {}; this.attrs = {};
    if (props.role) this.attrs.role = props.role;
  }
  appendChild(c) { this.children.push(c); return c; }
  insertBefore(c, ref) { const i = this.children.indexOf(ref); this.children.splice(i < 0 ? 0 : i, 0, c); return c; }
  get firstChild() { return this.children[0] || null; }
  get lastChild() { return this.children[this.children.length - 1] || null; }
  setAttribute(k, v) { this.attrs[k] = String(v); }
  removeAttribute(k) { delete this.attrs[k]; }
  get textContent() { return this.children.map((c) => c.textContent).join(''); }
  find(pred) { if (pred(this)) return this; for (const c of this.children) if (c instanceof Node) { const f = c.find(pred); if (f) return f; } return null; }
  all(pred, out = []) { if (pred(this)) out.push(this); for (const c of this.children) if (c instanceof Node) c.all(pred, out); return out; }
}
const el = (tag, props = {}, ...kids) => { const n = new Node(tag, props); for (const k of kids.flat()) if (k != null) n.appendChild(typeof k === 'string' ? new Text(k) : k); return n; };

const flush = async () => { for (let i = 0; i < 6; i++) await new Promise((r) => setImmediate(r)); };

function mount({ resources, list, link, signedIn = true, timers } = {}) {
  const toasts = [], tabs = [], calls = [];
  const KWAuth = {
    getState: () => ({ user: signedIn ? { id: 'u1' } : null }),
    request: (p, opts) => { calls.push([opts && opts.method || 'GET', p]); return p.endsWith('/link') ? link(p) : list(p); },
  };
  const ctx = {
    C: { id: 'b2-14-goethe-mini-test-1', resources },
    KWAccess: { ready: () => Promise.resolve() }, KWAuth,
    el, ICON: { file: '<svg/>', download: '<svg/>' },
    toast: (m) => toasts.push(m),
    setTimeout: timers ? timers.set : setTimeout, clearTimeout: timers ? timers.clear : clearTimeout,
    Promise, encodeURIComponent,
  };
  ctx.window = ctx;
  ctx.window.open = () => { const t = { closed: false, close() { this.closed = true; }, location: { replace(u) { t.url = u; } }, document: {} }; tabs.push(t); return t; };
  ctx.window.location = { assign(u) { ctx.assigned = u; } };
  vm.createContext(ctx);
  vm.runInContext(BLOCK + '\nthis.__api = { bodyResources, onDownload, DERIVED_RESOURCE_CARDS, RESOURCE_LINK_TIMEOUT_MS };', ctx);
  const wrap = ctx.__api.bodyResources();
  const grid = wrap.children[0];
  const cards = () => grid.children.map((card) => ({
    title: card.find((n) => n.props.class === 'resource-title').textContent,
    meta: card.find((n) => n.props.class === 'resource-meta').textContent.trim(),
    link: card.find((n) => n.tag === 'a'),
  }));
  const click = (i) => { const a = cards()[i].link; a.props.onclick({ preventDefault() {}, currentTarget: a }); };
  return { ctx, wrap, grid, cards, click, toasts, tabs, calls };
}

const B2_14 = [
  { icon: '📊', title: 'Scoring Table PDF', desc: 'd', pdfUrl: '/pdfs/scoring.pdf', kind: 'Assessment' },
  { icon: '🔑', title: 'Complete Answer Key PDF', desc: 'd', pdfUrl: '/pdfs/answer-key.pdf', kind: 'Assessment' },
  { icon: '📖', title: 'Revision Guide PDF', desc: 'd', pdfUrl: '/pdfs/revision-guide.pdf', kind: 'Grammar' },
];
const LISTED = { ok: true, chapter: 'b2-14-goethe-mini-test-1', resources: {
  'test-paper': { type: 'test-paper', pages: 8, bytes: 226655, available: true },
  scoring: { type: 'scoring', pages: 2, bytes: 58000, available: true },
  'answer-key': { type: 'answer-key', pages: 6, bytes: 113122, available: true },
  'revision-guide': { type: 'revision-guide', pages: 2, bytes: 69182, available: true },
} };
const authErr = (code, status) => Object.assign(new Error(code), { code, status });

test('loading: every card shows a calm "Checking…" state until the list answers', async () => {
  let resolve;
  const ui = mount({ resources: B2_14, list: () => new Promise((r) => { resolve = r; }), link: () => Promise.reject(new Error('x')) });
  await flush();
  for (const c of ui.cards()) {
    assert.equal(c.meta, 'PDF · Checking…');
    assert.equal(c.link.dataset.state, 'loading');
    assert.equal(c.link.attrs['aria-busy'], 'true');
  }
  ui.click(0);
  assert.equal(ui.tabs.length, 0, 'no tab while loading');
  assert.match(ui.toasts.at(-1), /Checking your study resources/);
  assert.ok(!/available soon/.test(ui.toasts.at(-1)), 'loading is not confused with unavailable');
  resolve(LISTED); await flush();
  assert.equal(ui.cards()[0].link.dataset.state, 'ready');
});

test('signed out: cards stay calm, click asks to sign in, no tab and no link request', async () => {
  const ui = mount({ resources: B2_14, signedIn: false, list: () => Promise.reject(authErr('unauthorized', 401)), link: () => { throw new Error('must not be called'); } });
  await flush();
  for (const c of ui.cards()) { assert.equal(c.meta, 'PDF'); assert.equal(c.link.dataset.state, 'signed-out'); }
  ui.click(1);
  assert.equal(ui.toasts.at(-1), 'Sign in to download Complete Answer Key PDF');
  assert.equal(ui.tabs.length, 0);
  assert.ok(!ui.calls.some(([, p]) => p.endsWith('/link')));
});

test('entitled: page count + size shown, Test Paper first; click opens tab and navigates to the signed URL', async () => {
  const ui = mount({ resources: B2_14, list: () => Promise.resolve(LISTED), link: () => Promise.resolve({ ok: true, url: 'https://worker.example/resources/file/b2-14-goethe-mini-test-1/test-paper?u=u1&e=1&s=ab' }) });
  await flush();
  const cards = ui.cards();
  assert.deepEqual(cards.map((c) => c.title), ['Test Paper PDF', 'Scoring Table PDF', 'Complete Answer Key PDF', 'Revision Guide PDF']);
  assert.equal(cards[0].meta, 'PDF · 8 pages · 221 KB');
  assert.equal(cards[2].meta, 'PDF · 6 pages · 110 KB');
  ui.click(0);
  assert.equal(ui.tabs.length, 1, 'tab opened synchronously in the click');
  await flush();
  assert.deepEqual(ui.calls.at(-1), ['POST', '/resources/b2-14-goethe-mini-test-1/test-paper/link']);
  assert.match(ui.tabs[0].url, /\/resources\/file\/b2-14-goethe-mini-test-1\/test-paper\?/);
  assert.equal(ui.tabs[0].closed, false);
  assert.equal(ui.toasts.length, 0);
  assert.equal(cards[0].link.dataset.busy, '', 'busy flag cleared');
});

test('the page never holds a bucket, release prefix or permanent PDF path', async () => {
  const ui = mount({ resources: B2_14, list: () => Promise.resolve(LISTED), link: () => Promise.resolve({ url: 'x' }) });
  await flush();
  const dump = JSON.stringify(ui.wrap, (k, v) => (typeof v === 'function' ? undefined : v));
  assert.ok(!/klarweg-resources|r2\/|r1\/|cloudflarestorage|r2\.dev/.test(dump));
  for (const c of ui.cards()) assert.equal(c.link.props.href, '#', 'no pdfUrl in the link');
  assert.ok(!/r2\/|klarweg-resources|cloudflarestorage/.test(BLOCK), 'no storage path in the source');
});

test('list request fails: error state (not "available soon"); click retries', async () => {
  let n = 0;
  const ui = mount({ resources: B2_14, list: () => (++n === 1 ? Promise.reject(authErr('network', 0)) : Promise.resolve(LISTED)), link: () => Promise.resolve({ url: 'x' }) });
  await flush();
  for (const c of ui.cards()) assert.equal(c.link.dataset.state, 'error');
  ui.click(0);
  assert.match(ui.toasts.at(-1), /couldn’t load the study resources/);
  assert.equal(ui.tabs.length, 0);
  await flush();
  assert.equal(n, 2, 'retried once');
  assert.equal(ui.cards()[0].title, 'Test Paper PDF');
  assert.ok(ui.cards().every((c) => c.link.dataset.state === 'ready'));
});

test('link request fails: blank tab is closed and a calm toast appears', async () => {
  const ui = mount({ resources: B2_14, list: () => Promise.resolve(LISTED), link: () => Promise.reject(authErr('server', 500)) });
  await flush();
  ui.click(1);
  await flush();
  assert.equal(ui.tabs[0].closed, true);
  assert.equal(ui.toasts.at(-1), 'We couldn’t open Scoring Table PDF just now. Please try again.');
});

test('session expired (401 on the link request): tab closed, sign-in message', async () => {
  const ui = mount({ resources: B2_14, list: () => Promise.resolve(LISTED), link: () => Promise.reject(authErr('unauthorized', 401)) });
  await flush();
  ui.click(2);
  await flush();
  assert.equal(ui.tabs[0].closed, true);
  assert.equal(ui.toasts.at(-1), 'Sign in to download Complete Answer Key PDF');
});

test('rate limited: tab closed, rate-limit message', async () => {
  const ui = mount({ resources: B2_14, list: () => Promise.resolve(LISTED), link: () => Promise.reject(authErr('rate-limited', 429)) });
  await flush();
  ui.click(0); await flush();
  assert.equal(ui.tabs[0].closed, true);
  assert.match(ui.toasts.at(-1), /Too many downloads/);
});

test('hanging link request: 15-second timeout closes the tab and clears the busy state', async () => {
  const pending = [];
  const timers = { set: (fn, ms) => { pending.push({ fn, ms }); return pending.length; }, clear: () => {} };
  const ui = mount({ resources: B2_14, timers, list: () => Promise.resolve(LISTED), link: () => new Promise(() => {}) });
  await flush();
  ui.click(0);
  await flush();
  assert.equal(ui.tabs[0].closed, false);
  const t = pending.find((p) => p.ms === 15000);
  assert.ok(t, 'a 15 s timer guards the link request');
  assert.equal(ui.ctx.__api.RESOURCE_LINK_TIMEOUT_MS, 15000);
  t.fn(); await flush();
  assert.equal(ui.tabs[0].closed, true);
  assert.match(ui.toasts.at(-1), /couldn’t open Test Paper PDF/);
  assert.equal(ui.cards()[0].link.dataset.busy, '', 'no stuck busy state');
});

test('double click while a download is starting opens only one tab', async () => {
  const ui = mount({ resources: B2_14, list: () => Promise.resolve(LISTED), link: () => new Promise(() => {}) });
  await flush();
  ui.click(1); ui.click(1);
  assert.equal(ui.tabs.length, 1);
});

test('no resources for this learner/chapter: cards unavailable, no Test Paper invented', async () => {
  const ui = mount({ resources: B2_14, list: () => Promise.resolve({ ok: true, chapter: 'b2-14-goethe-mini-test-1', resources: {} }), link: () => { throw new Error('must not be called'); } });
  await flush();
  assert.deepEqual(ui.cards().map((c) => c.title), B2_14.map((r) => r.title));
  for (const c of ui.cards()) { assert.equal(c.link.dataset.state, 'unavailable'); assert.equal(c.meta, 'PDF'); }
  ui.click(0);
  assert.equal(ui.toasts.at(-1), 'Scoring Table PDF will be available soon');
  assert.equal(ui.tabs.length, 0);
});

test('a chapter with no authored resources renders an empty grid without errors', async () => {
  const ui = mount({ resources: [], list: () => Promise.resolve({ ok: true, chapter: 'b2-14-goethe-mini-test-1', resources: {} }), link: () => Promise.resolve({}) });
  await flush();
  assert.equal(ui.cards().length, 0);
});

test('403 from the list (locked) keeps cards unavailable — never a download', async () => {
  const ui = mount({ resources: B2_14, list: () => Promise.reject(authErr('server', 403)), link: () => { throw new Error('must not be called'); } });
  await flush();
  assert.ok(ui.cards().every((c) => c.link.dataset.state === 'unavailable'));
  ui.click(0);
  assert.equal(ui.tabs.length, 0);
});

test('helper text is accurate (new tab), with no storage/implementation details', () => {
  assert.ok(BLOCK.includes("'PDFs open in a new tab. Sign in to download them.'"));
  assert.ok(!APP.includes('Resources open in a preview panel'));
});

test('Test Paper card text is identical in chapter-app.js and the generator (cannot drift)', async () => {
  const ui = mount({ resources: [], list: () => Promise.resolve({}), link: () => Promise.resolve({}) });
  const site = ui.ctx.__api.DERIVED_RESOURCE_CARDS;
  assert.deepEqual(Object.keys(site), DERIVED_RESOURCES.map((d) => d.type));
  for (const d of DERIVED_RESOURCES) {
    for (const k of ['icon', 'title', 'desc', 'kind']) assert.equal(site[d.type][k], d.card[k], `${d.type}.${k}`);
  }
});
