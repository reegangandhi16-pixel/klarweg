/* Frontend pure modules + static RESPONSIVE / ACCESSIBILITY checks. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ServerClock, formatRemaining } from '../js/clock.js';
import { Autosave } from '../js/autosave.js';
import { memoryStore } from '../js/store.js';
import { createApi, ExamApiError } from '../js/api.js';
import { phaseAt, phaseLabel } from '../js/hoeren.js';
import { ChunkQueue, sha256Hex } from '../js/recorder.js';
import { createRenderer, resultPage, header, esc, RESULT_TITLE } from '../js/render.js';
import { nextAction, assertSupported, unansweredCount, answerableItems } from '../js/engine.js';
import { countWords } from '../js/wordcount.js';
import { syntheticBuild, pkgFor } from '../../exam-worker/test/harness.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const build = syntheticBuild();

test('TIMER (client): offset = median of RTT-midpoint samples; device clock skew does not move the deadline', () => {
  let local = 1_000;
  const c = new ServerClock(() => local);
  c.sample(1_000, 1_100, 1_000_050);          // offset 999_000
  c.sample(2_000, 2_400, 1_001_200);          // offset 999_000
  c.sample(3_000, 3_020, 2_000_000);          // outlier
  assert.equal(c.offset, 999_000);
  local = 5_000;
  assert.equal(c.serverNow(), 1_004_000);
  assert.equal(c.remaining(1_010_000), 6_000);
  assert.equal(c.remaining(1_000_000), 0);
  assert.equal(formatRemaining(3_900_000), '1:05:00');
  assert.equal(formatRemaining(61_000), '01:01');
  assert.equal(formatRemaining(null), '–');
});

test('AUTOSAVE: per-item seq increases; stale responses keep newer local value; retry after failure', async () => {
  const sent = [];
  let failNext = 1;
  const timers = [];
  const a = new Autosave({
    key: 'k', store: memoryStore(), debounceMs: 10,
    setTimer: (fn) => { timers.push(fn); return timers.length; }, clearTimer: () => {},
    send: async (batch, requestId) => {
      sent.push({ batch: structuredClone(batch), requestId });
      if (failNext-- > 0) throw new TypeError('network');
      return { results: batch.map((b) => ({ item_id: b.item_id, status: 'accepted', current_seq: b.seq })) };
    }
  });
  await a.load([{ item_id: 'x', seq: 7 }]);
  await a.set('x', { option_id: 'a' });
  await a.set('x', { option_id: 'b' });
  assert.equal(a.seq.x, 9);
  await a.flush();                                  // network error → offline, retry scheduled
  assert.equal(a.state, 'offline');
  await a.flush();
  assert.equal(a.state, 'saved'); assert.equal(a.hasPending(), false);
  assert.deepEqual(sent.map((s) => s.batch.map((b) => [b.item_id, b.value.option_id, b.seq])), [[['x', 'b', 9]], [['x', 'b', 9]]]);
});

test('AUTOSAVE: lease loss stops saving and reports once; unsent answers persist for recovery', async () => {
  const store = memoryStore();
  let fatal = null;
  const a = new Autosave({ key: 'k2', store, setTimer: () => 0, clearTimer: () => {}, onFatal: (c) => { fatal = c; },
    send: async () => { throw new ExamApiError(409, 'lease_superseded'); } });
  await a.load();
  await a.set('y', { text: 'Grüße' });
  await a.flush();
  assert.equal(fatal, 'lease_superseded'); assert.equal(a.state, 'stopped');
  const persisted = await store.get('k2');
  assert.deepEqual(persisted.pending.y.value, { text: 'Grüße' });
  const b = new Autosave({ key: 'k2', store, setTimer: () => 0, clearTimer: () => {}, send: async () => ({ results: [] }) });
  await b.load([{ item_id: 'y', seq: 1 }]);
  assert.ok(b.hasPending());
});

test('API client: network retry reuses the same request id; 4xx is not retried; JSON error codes surface', async () => {
  const calls = [];
  let n = 0;
  const fetchImpl = async (url, init) => {
    calls.push(JSON.parse(init.body || '{}'));
    n++;
    if (n === 1) throw new TypeError('offline');
    if (n === 2) return new Response(JSON.stringify({ ok: false, error: 'server_error' }), { status: 500 });
    return new Response(JSON.stringify({ ok: true, server_now: 1 }), { status: 200 });
  };
  const api = createApi({ base: '', fetchImpl, sleep: async () => {} });
  await api.start('att_x', 'ls_x', 'lesen');
  assert.equal(calls.length, 3);
  assert.ok(calls.every((c) => c.request_id === calls[0].request_id));
  const api2 = createApi({ base: '', sleep: async () => {}, fetchImpl: async () => new Response(JSON.stringify({ ok: false, error: 'module_locked' }), { status: 409 }) });
  await assert.rejects(api2.start('att_x', 'ls_x', 'hoeren'), (e) => e.code === 'module_locked' && e.status === 409);
});

test('LISTENING (client): phaseAt is a pure function of server time — refresh lands in the same phase', () => {
  const plan = pkgFor(build, 'hoeren').timing.plan;
  const start = 1_000_000;
  assert.equal(phaseAt(plan, null, start).state, 'readiness');
  assert.equal(phaseAt(plan, start, start).index, 0);
  let off = 0;
  for (const [i, p] of plan.phases.entries()) {
    const at = phaseAt(plan, start, start + off + 1);
    assert.equal(at.index, i); assert.equal(at.remaining_ms, p.ms - 1);
    off += p.ms;
  }
  assert.equal(phaseAt(plan, start, start + plan.total_ms).state, 'finished');
  const shifted = phaseAt(plan, start, start + 500, 500);
  assert.equal(shifted.index, 0); assert.equal(shifted.elapsed_ms, 0);
  assert.match(phaseLabel({ kind: 'play', play_no: 2, plays_allowed: 2 }), /2\. von 2/);
});

test('SPEAKING (client): chunk queue hashes, buffers, resends only gaps, stops on non-retryable errors', async () => {
  const store = memoryStore();
  const uploads = [];
  let flaky = 1;
  const q = new ChunkQueue({ store, sleep: async () => {},
    upload: async (meta, bytes) => { if (flaky-- > 0) throw new TypeError('offline'); uploads.push({ ...meta, n: bytes.length }); },
    completeTurn: async (b) => ({ ok: true, ...b }) });
  const t = { item_id: 'itm:b1:syn-sp1', turn: 't1' };
  for (let i = 0; i < 3; i++) await q.add(t, i, new TextEncoder().encode(`c${i}`).buffer, 'audio/webm');
  const stored = await store.get(q.key(t, 0));
  assert.equal(stored.sha256, await sha256Hex(new TextEncoder().encode('c0')));
  await q.drain(t, new Set([1]));                  // server already has seq 1
  assert.deepEqual(uploads.map((u) => u.seq), ['0', '2']);
  assert.deepEqual(await q.pending(t), []);
  const r = await q.finish(t, 3, 4000);
  assert.deepEqual(r, { ok: true, item_id: t.item_id, turn: 't1', chunks: 3, duration_ms: 4000 });
  const q2 = new ChunkQueue({ store, sleep: async () => {}, upload: async () => { throw new ExamApiError(403, 'consent_required'); }, completeTurn: async () => {} });
  await q2.add(t, 9, new Uint8Array([1]).buffer, 'audio/webm');
  await assert.rejects(q2.drain(t), (e) => e.code === 'consent_required');
  assert.equal((await q2.pending(t)).length, 1);   // still buffered locally
});

test('ENGINE: generic sequencing from server state; every synthetic package is supported by the renderer registry', () => {
  const { registry } = createRenderer();
  for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) assert.ok(assertSupported(pkgFor(build, m), registry));
  assert.throws(() => assertSupported({ timing: { kind: 'fixed' }, parts: [{ tasks: [{ items: [{ interaction: 'hotspot' }] }] }] }, registry), /no renderer for hotspot/);
  assert.throws(() => assertSupported({ timing: { kind: 'stopwatch' }, parts: [] }, registry), /unsupported timing/);
  const mods = (s) => s.map(([module, status]) => ({ module, status }));
  assert.deepEqual(nextAction({ status: 'created', modules: mods([['lesen', 'available'], ['hoeren', 'locked']]) }), { kind: 'start', module: 'lesen' });
  assert.deepEqual(nextAction({ status: 'in_progress', modules: mods([['lesen', 'running'], ['hoeren', 'locked']]) }), { kind: 'resume', module: 'lesen' });
  assert.deepEqual(nextAction({ status: 'in_progress', modules: mods([['lesen', 'submitted'], ['hoeren', 'submitted']]) }), { kind: 'complete' });
  assert.deepEqual(nextAction({ status: 'completed', modules: [] }), { kind: 'result' });
  const lesen = pkgFor(build, 'lesen');
  assert.equal(answerableItems(lesen).length, 30);
  assert.equal(unansweredCount(lesen, { [answerableItems(lesen)[0].item_id]: { option_id: 'richtig' } }), 29);
});

test('ACCESSIBILITY (render): labelled controls, legends, examples read-only, umlaut buttons labelled, escaping', () => {
  const { module, item } = createRenderer();
  const html = ['lesen', 'hoeren', 'schreiben', 'sprechen'].map((m) => module(pkgFor(build, m), {})).join('');
  const radios = html.match(/<input type="radio" id="([^"]+)"/g) || [];
  assert.ok(radios.length > 100);
  for (const r of radios) { const id = r.match(/id="([^"]+)"/)[1]; assert.ok(html.includes(`for="${id}"`), id); }
  for (const s of html.match(/<select id="([^"]+)"/g) || []) { const id = s.match(/id="([^"]+)"/)[1]; assert.ok(html.includes(`<label for="${id}"`), id); }
  for (const t of html.match(/<textarea id="([^"]+)"/g) || []) { const id = t.match(/id="([^"]+)"/)[1]; assert.ok(html.includes(`<label for="${id}"`) && html.includes(`aria-describedby="${id}_wc"`)); }
  assert.equal((html.match(/<fieldset/g) || []).length, (html.match(/<legend>/g) || []).length);
  assert.ok(/class="kx-item kx-example"[\s\S]*?disabled/.test(html));
  assert.ok(html.includes('aria-label="ä einfügen"'));
  assert.ok(html.includes('SYNTHETISCHER SYSTEMTEST'));
  assert.ok(/TEST AUDIO/.test(html));
  assert.equal(/"correct"|data-correct|data-key/.test(html), false);
  const evil = item({ item_id: 'x"><script>', interaction: 'binary_choice', stem: '<img src=x onerror=alert(1)>', options: [{ option_id: 'a', label: '<b>' }] }, {}, {});
  assert.equal(/<script>|<img|<b>/.test(evil), false);
  assert.equal(esc(`<"'&>`), '&lt;&quot;&#39;&amp;&gt;');
  assert.match(header({ module: 'hoeren', remainingMs: 61_000, saveState: 'saved' }), /role="timer"[^>]*>01:01</);
});

test('RESULTS (render): exact label, per-module rows, no combined score, never "Goethe score / official score / certificate"', () => {
  const html = resultPage({ label: RESULT_TITLE, test_content: true, disclaimer: 'Klarweg B1 Simulation. Not an official Goethe-Institut result and not a certificate.',
    modules: [{ module: 'lesen', status: 'final', points: 100, max_points: 100, pass: true, predikat: 'sehr gut' }, { module: 'schreiben', status: 'pending_rating', points: null, max_points: 100, note: 'Awaiting two independent human ratings.' }] });
  assert.ok(html.includes('KLARWEG B1 SIMULATION — TEST RESULT'));
  assert.ok(html.includes('100 / 100') && html.includes('in Bewertung'));
  assert.ok(html.includes('kein Gesamtergebnis'));
  assert.equal(/Goethe[- ]?(score|Zertifikat|certificate)|official score|Gesamtpunkte/i.test(html.replace('Not an official Goethe-Institut result and not a certificate.', '')), false);
  assert.ok(/<th scope="col">/.test(html) && /<caption>/.test(html));
});

test('WRITING: browser, worker and content-model word counts are the same function', () => {
  const body = (src) => src.slice(src.indexOf('export function countWords'), src.indexOf('\n}', src.indexOf('export function countWords')) + 2);
  const a = body(read('exam/js/wordcount.js')), b = body(read('exam-worker/src/wordcount.js')), c = body(read('exam-content/schemas/content-model.mjs'));
  assert.equal(a, b); assert.equal(b, c);
  assert.equal(countWords('Übung macht den Meister — wirklich.'), 5);
});

test('RESPONSIVE + ACCESSIBILITY (static): viewport, lang, skip link, focus ring, 44px targets, mobile breakpoint, reduced motion', () => {
  const html = read('exam/index.html');
  const css = read('exam/exam.css');
  assert.match(html, /<html lang="de">/);
  assert.match(html, /name="viewport" content="width=device-width, initial-scale=1"/);
  assert.match(html, /class="kx-skip" href="#kx-app"/);
  assert.match(html, /name="robots" content="noindex, nofollow"/);
  assert.match(css, /:focus-visible\s*{[^}]*outline: 3px/);
  for (const sel of ['.kx-btn', '.kx-opt', '.kx-char', '.kx-match select']) assert.match(css, new RegExp(sel.replace('.', '\\.') + '\\s*{[^}]*min-height: 44px'), sel);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /body\s*{[^}]*background: var\(--canvas\)/);
  assert.match(css, /--canvas: #FAFAF7/);
  assert.equal(/scale\(/.test(css), false, 'hover must never scale()');
  assert.equal(/#E55A3F/i.test(css), false, 'no coral on an in-app surface');
  assert.equal(/@keyframes|bounce|confetti/i.test(css), false);
  const px = [...css.matchAll(/(?:margin|padding|gap)[^:;]*:\s*([^;]+);/g)].flatMap((m) => [...m[1].matchAll(/(\d+)px/g)].map((x) => Number(x[1])));
  const scale = new Set([0, 2, 4, 8, 12, 16, 24, 36, 48, 64, 80, 96, 120]);
  assert.deepEqual(px.filter((v) => !scale.has(v)), [], 'spacing must stay on the scale');
});

test('PUBLISHING: exam/ is not in the Pages allowlist; no exam page links public audio CDNs', () => {
  const allow = read('.github/pages-allowlist.txt');
  assert.equal(/^\/?exam(\/|$)/m.test(allow), false);
  const front = ['exam/index.html', ...fs.readdirSync(path.join(ROOT, 'exam/js')).map((f) => `exam/js/${f}`)].map(read).join('\n');
  assert.equal(/jsdelivr|klarweg-audio|manifest\.pilot|\/public\/audio/i.test(front), false);
  assert.equal(/speech\/transcribe|speech\/task-check|record-check/i.test(front), false, 'exam must not reuse chapter Record & Check');
});

test('F2 (render): a Hören package with only the opened parts renders only those parts — future text never reaches the DOM', () => {
  const full = pkgFor(build, 'hoeren');
  const opened = { ...full, parts: full.parts.filter((p) => p.part === 1) };
  const { module, part } = createRenderer();
  const html = module(opened, {});
  assert.equal((html.match(/class="kx-part"/g) || []).length, 1);
  assert.match(html, /data-part="1"/);
  for (const id of ['syn-h2', 'syn-h3', 'syn-h4']) assert.equal(html.includes(id), false, id);
  const p4 = part(full.parts.find((p) => p.part === 4), {});
  assert.match(p4, /^<section class="kx-part" data-part="4"/);
});

test('F1 (client): interruption reports use a keepalive request that survives page unload; no retry loop', async () => {
  const seen = [];
  const api = createApi({ base: '', sleep: async () => {}, fetchImpl: async (url, init) => { seen.push(init); return new Response(JSON.stringify({ ok: true }), { status: 200 }); } });
  await api.hoerenEvent('att_x', 'ls_x', { type: 'interrupted', phase_seq: 5, kind: 'normal' }, { keepalive: true });
  await api.hoerenEvent('att_x', 'ls_x', { type: 'play_end', phase_seq: 5 });
  assert.equal(seen[0].keepalive, true);
  assert.equal(seen[1].keepalive, undefined);
  assert.equal(JSON.parse(seen[0].body).type, 'interrupted');
});
