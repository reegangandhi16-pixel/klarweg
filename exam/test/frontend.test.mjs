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
import { createRenderer, resultPage, header, moduleNav, reviewPanel, itemReview, testBanner, recordingsSection, ratedFeedback, esc, RESULT_TITLE, RESULT_DISCLAIMER, errorView, startChoice, startScreen } from '../js/render.js';
import { nextAction, assertSupported, unansweredCount, answerableItems, partProgress, isAnswered, itemNumber } from '../js/engine.js';
import { countWords } from '../js/wordcount.js';
import { speakingSchedule, speakingPhaseAt, prepEndsAt, partOfPhase, partForListenPhase, speakingItemsForPart, partnerAssetFor,
  listenPhaseAssets, topicItems, partnerPlayOffset, turnWindowMs, resumeAction, speakingPhaseLabel } from '../js/sprechen.js';
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
  const q = new ChunkQueue({ attemptId: 'att_fe_test', store, sleep: async () => {},
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
  const q2 = new ChunkQueue({ attemptId: 'att_fe_test', store, sleep: async () => {}, upload: async () => { throw new ExamApiError(403, 'consent_required'); }, completeTurn: async () => {} });
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
  assert.ok(html.includes('SYNTHETISCHE ÜBUNGSINHALTE'));
  assert.ok(/TEST AUDIO/.test(html));
  assert.equal(/"correct"|data-correct|data-key/.test(html), false);
  const evil = item({ item_id: 'x"><script>', interaction: 'binary_choice', stem: '<img src=x onerror=alert(1)>', options: [{ option_id: 'a', label: '<b>' }] }, {}, {});
  assert.equal(/<script>|<img|<b>/.test(evil), false);
  assert.equal(esc(`<"'&>`), '&lt;&quot;&#39;&amp;&gt;');
  assert.match(header({ module: 'hoeren', remainingMs: 61_000, saveState: 'saved' }), /role="timer"[^>]*>01:01</);
});

test('RESULTS (render): OD-45 title and disclaimer, per-module rows with counts, no duplicated verdict, no combined score, never "Goethe score"', () => {
  const html = resultPage({ label: RESULT_TITLE, test_content: true, disclaimer: 'ignored by the page',
    modules: [{ module: 'lesen', status: 'final', points: 100, max_points: 100, pass: true, predikat: 'sehr gut', counts: { correct: 30, incorrect: 0, unanswered: 0 } },
      { module: 'hoeren', status: 'final', points: 33, max_points: 100, pass: false, predikat: 'nicht bestanden', counts: { correct: 10, incorrect: 15, unanswered: 5 } },
      { module: 'schreiben', status: 'pending_rating', points: null, max_points: 100, note: 'Awaiting two independent human ratings.' },
      { module: 'sprechen', status: 'not_taken', points: null, max_points: 100 }] });
  assert.equal(RESULT_TITLE, 'Klarweg B1 Simulation – Ergebnis', 'OD-45 title');
  assert.equal(RESULT_DISCLAIMER, 'Klarweg-Simulation – kein offizielles Ergebnis des Goethe-Instituts.', 'OD-45 disclaimer');
  assert.ok(html.includes(esc(RESULT_TITLE)) && html.includes(esc(RESULT_DISCLAIMER)));
  assert.ok(html.includes('100 / 100') && html.includes('bestanden · sehr gut'));
  assert.ok(html.includes('33 / 100') && html.includes('richtig 10 · falsch 15 · ohne Antwort 5'));
  assert.equal(/nicht bestanden · nicht bestanden/.test(html), false, 'a band equal to the verdict is not repeated');
  assert.ok(html.includes('in Bewertung') && html.includes('Wartet auf zwei unabhängige Bewertungen.') && html.includes('nicht abgelegt'));
  assert.equal(/Awaiting|TEST RESULT/.test(html), false, 'no English learner-facing text');
  assert.ok(html.includes('kein Gesamtergebnis'));
  assert.equal(/Goethe[- ]?(score|Ergebnis|Zertifikat|certificate)|official score|Gesamtpunkte/i.test(html.replace(esc(RESULT_DISCLAIMER), '')), false);
  assert.ok(/<th scope="col">/.test(html) && /<caption>/.test(html));
});

test('PROGRESS: answered counts per part on the real synthetic packages; examples and spoken turns excluded; whitespace text is unanswered', () => {
  const lesen = pkgFor(build, 'lesen');
  const empty = partProgress(lesen, {});
  assert.equal(empty.reduce((n, p) => n + p.total, 0), answerableItems(lesen).length);
  assert.ok(empty.every((p) => p.answered === 0 && p.items.every((r) => !r.answered)));
  // the review uses the number the learner sees on the page (the stem's "29. …"), not the position within the part
  const byId = Object.fromEntries(answerableItems(lesen).map((it) => [it.item_id, it]));
  for (const r of empty.flatMap((p) => p.items)) assert.ok(String(byId[r.item_id].stem).startsWith(`${r.no}. `), `${r.item_id} → ${r.no}`);
  assert.deepEqual(empty.flatMap((p) => p.items).map((r) => r.no), answerableItems(lesen).map((_, i) => String(i + 1)), 'synthetic Lesen numbers 1…30 in order');
  assert.equal(itemNumber({ display_no: '01', stem: '7. irrelevant' }, 0), '01', 'the package display_no wins (keeps leading zeros and gaps)');
  assert.equal(itemNumber({ stem: '12) Mit Klammer' }, 0), '12');
  assert.equal(itemNumber({ stem: 'Ohne Nummer' }, 4), '5', 'fallback: position in the part');
  const first = empty.find((p) => p.total).items[0];
  const one = partProgress(lesen, { [first.item_id]: { option_id: 'x' } });
  assert.equal(one.reduce((n, p) => n + p.answered, 0), 1);
  assert.equal(unansweredCount(lesen, { [first.item_id]: { option_id: 'x' } }), answerableItems(lesen).length - 1, 'unansweredCount agrees');
  assert.equal(isAnswered({ text: '   ' }), false); assert.equal(isAnswered({ option_id: null }), false); assert.equal(isAnswered({ text: 'Hallo' }), true);
  const schreiben = pkgFor(build, 'schreiben');
  const w = partProgress(schreiben, { [answerableItems(schreiben)[0].item_id]: { text: 'Liebe Grüße aus der Stadt' } }).flatMap((p) => p.items).find((r) => r.interaction === 'text_response');
  assert.equal(w.words, 5);
  assert.equal(partProgress(pkgFor(build, 'sprechen'), {}).flatMap((p) => p.items).some((r) => r.interaction === 'spoken_response'), false);
});

test('NAVIGATION + REVIEW (render): one link per part with counts; header progress; the review lists unanswered items with working anchors and word counts', () => {
  const lesen = pkgFor(build, 'lesen');
  const prog = partProgress(lesen, {});
  const nav = moduleNav(prog);
  assert.equal((nav.match(/<a href="#part-/g) || []).length, lesen.parts.length);
  for (const p of lesen.parts) assert.ok(nav.includes(`href="#part-${p.part}"`));
  const page = createRenderer().module(lesen, {});
  for (const p of lesen.parts) assert.ok(page.includes(`id="part-${p.part}"`), 'every nav target exists on the page');
  assert.match(nav, /aria-label="Teile dieses Moduls"/);
  assert.equal(moduleNav([prog[0]]), '', 'no navigation for a single part');
  assert.match(header({ module: 'lesen', remainingMs: 1000, saveState: 'saved', progress: prog }), new RegExp(`0 von ${answerableItems(lesen).length} beantwortet`));
  assert.equal(/beantwortet/.test(header({ module: 'sprechen', remainingMs: 1000, saveState: 'saved' })), false);
  const review = reviewPanel(prog);
  assert.match(review, new RegExp(`${answerableItems(lesen).length} von ${answerableItems(lesen).length} Aufgaben sind noch ohne Antwort`));
  for (const id of [...review.matchAll(/href="#(item-[^"]+)"/g)].map((m) => m[1])) assert.ok(page.includes(`id="${id}"`), `review anchor ${id} exists on the page`);
  assert.ok(review.includes('data-act="submit-confirm"') && review.includes('data-act="review-close"'));
  const all = Object.fromEntries(answerableItems(lesen).map((it) => [it.item_id, { option_id: 'x' }]));
  assert.match(reviewPanel(partProgress(lesen, all)), /Alle \d+ Aufgaben sind beantwortet/);
  const schreiben = pkgFor(build, 'schreiben');
  assert.match(reviewPanel(partProgress(schreiben, {})), /Text: 0 Wörter \(Ziel ca\. \d+\)/);
  assert.match(reviewPanel([]), /keine Aufgaben zum Ankreuzen/);
});

test('SUBMIT (static): the shell submits only from the review step; no browser confirm dialog remains', () => {
  const main = read('exam/js/main.js');
  assert.equal(/\bconfirm\(/.test(main), false);
  assert.ok(/act === 'submit'\)[\s\S]{0,200}reviewPanel/.test(main), 'the first click opens the review');
  assert.ok(/act === 'submit-confirm'\)[\s\S]{0,500}api\.submit\(/.test(main), 'only the confirmation submits');
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

/* ---------- SPRECHEN phase-driven flow (SPEAKING-SPEC §2, §5) ---------- */
const sprechenPkg = pkgFor(build, 'sprechen');
const SPLAN = sprechenPkg.timing.plan;

test('SPRECHEN (client): schedule = preparation then the configured phases; the multiplier stretches the preparation only', () => {
  assert.equal(sprechenPkg.timing.kind, 'speaking_phases');
  const s1 = speakingSchedule(SPLAN);
  assert.deepEqual(s1.map((p) => [p.id, p.kind, p.start_ms, p.ms]), [
    ['prep', 'prep', 0, SPLAN.prep_ms], ['intro', 'speak', 20_000, 5_000], ['teil1', 'speak', 25_000, 120_000],
    ['teil2', 'speak', 145_000, 120_000], ['partner', 'listen', 265_000, 5_000], ['teil3', 'speak', 270_000, 120_000]]);
  const s2 = speakingSchedule(SPLAN, 1.5);
  assert.equal(s2[0].ms, 30_000); assert.equal(s2[1].start_ms, 30_000);
  assert.equal(s2.slice(1).reduce((n, p) => n + p.ms, 0), s1.slice(1).reduce((n, p) => n + p.ms, 0), 'speaking phases are not stretched');
  // the published configuration: a 15-minute preparation (lc:b1@1), here as a plan with prep_ms 900 000
  const published = { prep_ms: 900_000, phases: [{ seq: 0, id: 'teil1', ms: 210_000 }] };
  assert.deepEqual(speakingSchedule(published).map((p) => [p.id, p.ms]), [['prep', 900_000], ['teil1', 210_000]]);
  assert.equal(prepEndsAt(published, 1_000, 1), 901_000);
  assert.equal(prepEndsAt(SPLAN, 1_000, 1.25), 1_000 + 25_000);
});

test('SPRECHEN (client): phase position is a pure function of server time — a refresh lands in the same phase with the same remaining time', () => {
  const T0 = 1_000_000;
  assert.equal(speakingPhaseAt(SPLAN, null, T0).state, 'not_started');
  assert.equal(speakingPhaseAt(SPLAN, T0, T0 - 5).state, 'not_started');
  const a = speakingPhaseAt(SPLAN, T0, T0);
  assert.equal(a.phase.id, 'prep'); assert.equal(a.remaining_ms, 20_000); assert.equal(a.ends_at, T0 + 20_000);
  assert.equal(speakingPhaseAt(SPLAN, T0, T0 + 19_999).phase.id, 'prep');
  const b = speakingPhaseAt(SPLAN, T0, T0 + 20_000);
  assert.equal(b.phase.id, 'intro'); assert.equal(b.elapsed_ms, 0); assert.equal(b.remaining_ms, 5_000);
  const mid = T0 + 200_000;
  const before = speakingPhaseAt(SPLAN, T0, mid), after = speakingPhaseAt(SPLAN, T0, mid);   // "reload": same inputs, same answer
  assert.deepEqual(before, after);
  assert.equal(before.phase.id, 'teil2'); assert.equal(before.remaining_ms, 65_000);
  assert.equal(speakingPhaseAt(SPLAN, T0, T0 + 266_000).phase.id, 'partner');
  assert.equal(speakingPhaseAt(SPLAN, T0, T0 + 389_999).phase.id, 'teil3');
  assert.equal(speakingPhaseAt(SPLAN, T0, T0 + 390_000).state, 'finished');
  assert.equal(speakingPhaseAt(SPLAN, T0, T0 + 30_000, 2).phase.id, 'prep', 'with multiplier 2 the preparation lasts 40 s');
});

test('SPRECHEN (client): phases map to parts; the partner phase plays the next part\'s partner presentation, which no turn replays', () => {
  assert.equal(partOfPhase({ id: 'teil2' }), 2); assert.equal(partOfPhase({ id: 'intro' }), null); assert.equal(partOfPhase({ id: 'prep' }), null);
  const partner = SPLAN.phases.find((p) => p.listen_only);
  assert.equal(partForListenPhase(SPLAN, partner.seq), 3);
  assert.deepEqual(partnerAssetFor(sprechenPkg, SPLAN, partner), { asset_id: 'ast:syn-sp3-partner-talk', duration_ms: 2000 });
  assert.equal(partnerAssetFor(sprechenPkg, SPLAN, SPLAN.phases[1]), null, 'speaking phases have no partner presentation');
  assert.deepEqual([...listenPhaseAssets(sprechenPkg, SPLAN)], ['ast:syn-sp3-partner-talk']);
  assert.deepEqual(speakingItemsForPart(sprechenPkg, 1).map((i) => i.item_id), ['itm:b1:syn-sp1']);
  assert.deepEqual(speakingItemsForPart(sprechenPkg, 2).map((i) => i.item_id), ['itm:b1:syn-sp2'], 'the topic choice is not a recording item');
  assert.deepEqual(speakingItemsForPart(sprechenPkg, 9), []);
  assert.deepEqual(topicItems(sprechenPkg).map((i) => i.item_id), ['itm:b1:syn-sp2-topic']);
  const t3 = speakingItemsForPart(sprechenPkg, 3)[0].response_spec.turns;
  assert.equal(t3[0].prompt_asset, 'ast:syn-sp3-partner-talk', 'fixture: Teil 3 turn 1 names the partner talk as its prompt');
  assert.ok(listenPhaseAssets(sprechenPkg, SPLAN).has(t3[0].prompt_asset));
  assert.equal(listenPhaseAssets(sprechenPkg, SPLAN).has(t3[1].prompt_asset), false, 'the examiner question is still played');
});

test('SPRECHEN (client): the partner presentation is played at most once, from its scheduled position', () => {
  const T0 = 0, partnerStart = 265_000;
  const at = (dt) => speakingPhaseAt(SPLAN, T0, partnerStart + dt);
  assert.equal(partnerPlayOffset(at(0), 2000), 0);
  assert.equal(partnerPlayOffset(at(1500), 2000), 1500, 'a refresh mid-presentation continues, never restarts');
  assert.equal(partnerPlayOffset(at(2000), 2000), null, 'finished: nothing is replayed');
  assert.equal(partnerPlayOffset(at(4000), 2000), null);
  assert.equal(partnerPlayOffset(speakingPhaseAt(SPLAN, T0, 100_000), 2000), null, 'only in a listen-only phase');
});

test('SPRECHEN (client): recording windows are the turn seconds, capped at the end of the phase', () => {
  assert.equal(turnWindowMs(30, 0, 120_000), 30_000);
  assert.equal(turnWindowMs(30, 100_000, 120_000), 20_000, 'capped at the phase end');
  assert.equal(turnWindowMs(240, 0, 120_000), 120_000);
  assert.equal(turnWindowMs(30, 119_500, 120_000), 0, 'under 1 s left: the turn is not started');
  assert.equal(turnWindowMs(30, 121_000, 120_000), 0);
});

test('SPRECHEN (client): after a reload an interrupted turn is finalised only when its chunks are contiguous (server rule)', () => {
  assert.deepEqual(resumeAction('complete', [0, 1]), { kind: 'done' });
  assert.deepEqual(resumeAction(undefined, []), { kind: 'record' });
  assert.deepEqual(resumeAction('open', [0, 1, 2]), { kind: 'finalize', chunks: 3 });
  assert.deepEqual(resumeAction('open', [0], [1, 2]), { kind: 'finalize', chunks: 3 }, 'locally buffered chunks count (they are uploaded first)');
  assert.deepEqual(resumeAction('open', [0, 1], [1]), { kind: 'finalize', chunks: 2 }, 'a chunk both local and on the server counts once');
  // a gap is never finalised (the server would refuse: chunk_count_mismatch / chunks_missing) — the turn stays open
  assert.deepEqual(resumeAction('open', [0, 2]), { kind: 'gap', have: [0, 2], missing: [1] });
  assert.deepEqual(resumeAction('open', [0, 1, 3]), { kind: 'gap', have: [0, 1, 3], missing: [2] });
  assert.deepEqual(resumeAction('open', [1, 2]), { kind: 'gap', have: [1, 2], missing: [0] });
  assert.deepEqual(resumeAction('open', [0], [2]), { kind: 'gap', have: [0, 2], missing: [1] });
});

test('SPRECHEN (client ↔ worker): every finalize the client asks for is accepted by the real server rule; a gap is refused there', async () => {
  const { setup } = await import('../../exam-worker/test/harness.mjs');
  const { post, start, submit, uploadChunk } = await import('../../exam-worker/test/flow.mjs');
  const toSprechen = async (s) => { for (const m of ['lesen', 'hoeren', 'schreiben']) { await start(s, m); if (m === 'hoeren') await post(s, '/hoeren/events', { type: 'ready' }); await submit(s, m); }
    await post(s, '/sprechen/consent', { granted: true, version: 'rec-consent@1' }); await start(s, 'sprechen'); };
  for (const [seqs, expectFinalize] of [[[0, 1, 2], true], [[0], true], [[0, 1, 3], false], [[1, 2], false]]) {
    const s = await setup(); await toSprechen(s);
    for (const q of seqs) await uploadChunk(s, 'itm:b1:syn-sp1', 't1', q, Buffer.from(`c${q}`));
    const action = resumeAction('open', seqs);
    assert.equal(action.kind === 'finalize', expectFinalize, JSON.stringify(seqs));
    // the client's request (finalize), or — for a gap — the old invalid prefix request, which the server must refuse
    let prefix = 0; while (seqs.includes(prefix)) prefix++;
    const n = action.kind === 'finalize' ? action.chunks : Math.max(1, prefix);
    const r = await post(s, '/sprechen/turns', { item_id: 'itm:b1:syn-sp1', turn: 't1', chunks: n, duration_ms: n * 1000 });
    assert.equal(r.status === 200, expectFinalize, `${JSON.stringify(seqs)} → ${r.status} ${r.json.error || ''}`);
  }
});

test('SPRECHEN (render + labels): a locked topic choice renders disabled; German phase labels', () => {
  const { module } = createRenderer();
  const open = module(sprechenPkg, {}, {});
  const locked = module(sprechenPkg, { 'itm:b1:syn-sp2-topic': { option_id: 't1' } }, { locked: new Set(['itm:b1:syn-sp2-topic']) });
  const radios = (html) => html.match(/<input type="radio"[^>]*data-item="itm:b1:syn-sp2-topic"[^>]*>/g) || [];
  assert.equal(radios(open).length, 2); assert.equal(radios(open).some((r) => r.includes(' disabled')), false);
  assert.equal(radios(locked).length, 2); assert.ok(radios(locked).every((r) => r.includes(' disabled')));
  assert.ok(radios(locked).some((r) => r.includes('value="t1"') && r.includes(' checked')), 'the chosen topic stays visible');
  assert.match(speakingPhaseLabel({ kind: 'prep' }), /^Vorbereitung/);
  assert.match(speakingPhaseLabel({ kind: 'listen', listen_only: true }), /nichts aufgenommen/);
  assert.equal(speakingPhaseLabel({ kind: 'speak', id: 'teil3' }), 'Teil 3');
  assert.equal(speakingPhaseLabel({ kind: 'speak', id: 'intro' }), 'Einführung');
  assert.equal(speakingPhaseLabel(null), '');
});

test('AUTOSAVE: a save refused for good (topic_locked) is dropped and reported, not retried', async () => {
  const sent = []; const dropped = [];
  const a = new Autosave({
    key: 'k', store: memoryStore(), debounceMs: 10, setTimer: () => 1, clearTimer: () => {},
    onDropped: (code, batch) => dropped.push([code, batch.map((b) => b.item_id)]),
    send: async (batch) => { sent.push(batch.length); throw new ExamApiError(409, 'topic_locked'); }
  });
  await a.load([]);
  await a.set('itm:b1:syn-sp2-topic', { option_id: 't2' });
  await a.flush();
  assert.deepEqual(dropped, [['topic_locked', ['itm:b1:syn-sp2-topic']]]);
  assert.equal(a.hasPending(), false); assert.equal(a.state, 'saved'); assert.equal(sent.length, 1);
  await a.flush();
  assert.equal(sent.length, 1, 'nothing left to retry');
});

test('RENDER: Lesen example stems are not labelled twice ("Beispiel Beispiel:"); Teil 3 instruction wording', () => {
  const { module } = createRenderer();
  const html = module(pkgFor(build, 'lesen'), {});
  const LABEL = '<span class="kx-ex">Beispiel</span> ';
  assert.ok(html.includes(`${LABEL}Alpha wohnt in Teststadt A.`), 'Teil 1 example: label followed by the stem without "Beispiel:"');
  assert.ok(html.includes(`${LABEL}Testperson 0 sucht Angebot Nummer 2.`), 'Teil 3 (matching) example: same rule');
  assert.ok(!/kx-ex">Beispiel<\/span>\s*Beispiel:/.test(html), 'no duplicated "Beispiel" label + "Beispiel:" stem');
  assert.ok(html.includes('Jede Anzeige darf nur einmal gewählt werden. Gibt es keine passende Anzeige, wählen Sie 0.'));
  assert.ok(!html.includes('Jede Anzeige nur einmal.'));
});

test('SPEAKING (client): the chunk queue is attempt-scoped — it refuses to run without an attempt id; keys carry it', () => {
  assert.throws(() => new ChunkQueue({ store: memoryStore(), upload: async () => {}, completeTurn: async () => {} }), /attemptId required/);
  const q = new ChunkQueue({ attemptId: 'att_x', store: memoryStore(), upload: async () => {}, completeTurn: async () => {} });
  assert.equal(q.key({ item_id: 'itm:b1:syn-sp1', turn: 't1' }, 3), 'chunk:att_x:itm:b1:syn-sp1:t1:0003');
});

test('COMPLETE (client ↔ worker): a lost "complete" response is retried with the same request id and replays the result', async () => {
  const { setup, PROXY_SECRET } = await import('../../exam-worker/test/harness.mjs');
  const { post, start, submit } = await import('../../exam-worker/test/flow.mjs');
  const { default: worker } = await import('../../exam-worker/src/index.js');
  const s = await setup();
  for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) { await start(s, m); if (m === 'hoeren') await post(s, '/hoeren/events', { type: 'ready' }); await submit(s, m); }
  let dropped = 0;
  const fetchImpl = async (url, init) => {
    const res = await worker.fetch(new Request('https://klarweg-exam.internal' + url, { ...init, headers: { ...init.headers, 'x-kw-proxy-auth': PROXY_SECRET, 'x-kw-user': s.user } }), s.env);
    if (url.endsWith('/complete') && !dropped++) throw new TypeError('network: response lost');   // the server committed; the client never saw it
    return res;
  };
  const api = createApi({ base: '', fetchImpl, sleep: async () => {} });
  const r = await api.complete(s.attempt, s.lease);
  assert.equal(dropped, 2, 'the request was retried once');
  assert.equal(r.ok, true); assert.equal(r.replayed, true); assert.equal(r.status, 'completed');
  assert.equal(r.result.label, RESULT_TITLE);
  const n = await s.env.DB.prepare("SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action = 'attempt_completed'").bind(s.attempt).first();
  assert.equal(n.n, 1, 'completed once');
});

test('ITEM REVIEW render: explanation and evidence under each row, scripts collapsed after the table, all escaped', () => {
  const html = itemReview('hoeren', {
    summary: { correct: 1, incorrect: 0, unanswered: 1, total: 2 },
    items: [
      { display_no: '1', status: 'correct', points: 1, max_points: 1, your_answer: { label: 'a', text: 'x' }, correct_answer: { label: 'a', text: 'x' },
        explanation: 'Lea sagt <nicht> ab.', evidence: [{ text: 'halb zehn' }] },
      { display_no: '2', status: 'unanswered', points: 0, max_points: 1, your_answer: null, correct_answer: { label: 'b', text: 'y' }, explanation: null, evidence: [] }
    ],
    transcripts: [{ part: 1, text: 'Hallo Ben,\nhier ist Lea.' }]
  });
  assert.equal((html.match(/class="kx-rv-explain"/g) || []).length, 1, 'only rows with an explanation get one');
  assert.match(html, /Lea sagt &lt;nicht&gt; ab\. <q>halb zehn<\/q>/);
  assert.match(html, /<details class="kx-transcripts"><summary>Hörtexte zum Nachlesen \(1\)<\/summary><h3>Teil 1<\/h3><p>Hallo Ben,<br>hier ist Lea\.<\/p><\/details>/);
  assert.equal(/kx-transcripts/.test(itemReview('lesen', { summary: { correct: 0, incorrect: 0, unanswered: 0, total: 0 }, items: [], transcripts: [] })), false);
});

test('TIMING label: synthetic packages with adjusted timing say so; exam-timed modules do not', () => {
  const b = syntheticBuild();
  for (const m of ['hoeren', 'sprechen']) assert.match(testBanner(pkgFor(b, m)), /Verkürzte Übungszeiten – nicht die Zeiten der Prüfung\./, m);
  for (const m of ['lesen', 'schreiben']) { assert.equal(pkgFor(b, m).timing.adjusted, undefined); assert.equal(/Verkürzte/.test(testBanner(pkgFor(b, m))), false, m); }
  assert.equal(testBanner({ test_content: false, timing: { adjusted: true } }), '');
});

test('MY RECORDINGS render: one load button per available turn, no player until requested, gaps labelled', () => {
  const html = recordingsSection({ recordings: [
    { part: 1, turn: 't1', complete: true, duration_ms: 31000, available: true },
    { part: 2, turn: 't1', complete: false, duration_ms: null, available: true },
    { part: 3, turn: 't2', complete: true, duration_ms: 4000, available: false }] });
  assert.equal((html.match(/data-act="my-recording"/g) || []).length, 2);
  assert.match(html, /Teil 1, Beitrag 1 · 31 s/); assert.match(html, /Teil 2, Beitrag 1 · unvollständig übertragen/);
  assert.match(html, /Teil 3, Beitrag 2 · 4 s<\/span><span class="kx-meta">nicht mehr verfügbar/);
  assert.equal(/<audio/.test(html), false, 'nothing loads or plays before the learner asks');
  assert.match(recordingsSection({ recordings: [] }), /Es sind keine Aufnahmen verfügbar/);
});

test('RATED FEEDBACK render: per task and criterion with German decimals; own text collapsed; zero rule explained; per-part line in reviews', () => {
  const html = ratedFeedback('schreiben', { units: [
    { item_id: 'w1', part: 1, total: 35, max: 40, zero_rule: false, criteria: [{ criterion: 'erfuellung', points: 8.75, max: 10 }], text: 'Hallo <Tom>', words: 2, target_words: 80 },
    { item_id: 'w3', part: 3, total: 10, max: 20, zero_rule: true, criteria: [{ criterion: 'erfuellung', points: 5, max: 10 }] }] }, { erfuellung: 'Erfüllung' });
  assert.match(html, /Schreiben Teil 1: 35 \/ 40 Punkte/); assert.match(html, /<th scope="row">Erfüllung<\/th><td>8,75 \/ 10<\/td>/);
  assert.match(html, /<summary>Ihr Text \(2 Wörter, Ziel ca\. 80\)<\/summary><p class="kx-written" lang="de">Hallo &lt;Tom&gt;<\/p>/);
  assert.equal((html.match(/Erfüllung E/g) || []).length, 1, 'zero rule noted only where it applied');
  assert.match(ratedFeedback('sprechen', { units: [{ item_id: 'sprechen:pron', part: null, total: 16, max: 16, criteria: [] }] }), /Aussprache \(ganze Prüfung\): 16 \/ 16 Punkte/);
  const rv = itemReview('lesen', { summary: { correct: 2, incorrect: 1, unanswered: 0, total: 3 }, transcripts: [], items: [
    { part: 1, display_no: '1', status: 'correct', points: 1, max_points: 1 }, { part: 1, display_no: '2', status: 'incorrect', points: 0, max_points: 1 },
    { part: 2, display_no: '3', status: 'correct', points: 1, max_points: 1 }] });
  assert.match(rv, /<p class="kx-meta kx-rv-parts">Teil 1: 1 von 2 · Teil 2: 1 von 1<\/p>/);
});

test('HISTORY render: a row per practice with each module result and a way back into it; nothing when empty', async () => {
  const { attemptHistory } = await import('../js/render.js');
  const html = attemptHistory({ attempts: [{ attempt_id: 'att_x', completed_at: 0, form_label: 'Übung <P1>', modules: [
    { module: 'lesen', status: 'final', points: 70, max_points: 100 }, { module: 'hoeren', status: 'final', points: 100, max_points: 100 },
    { module: 'schreiben', status: 'pending_rating', points: null, max_points: 100 }, { module: 'sprechen', status: 'not_taken', points: null, max_points: 100 }] }] }, () => '14.10.2026');
  assert.match(html, /<th scope="row">14\.10\.2026<\/th><td>Übung &lt;P1&gt;<\/td><td>70 \/ 100<\/td><td>100 \/ 100<\/td><td>in Bewertung<\/td><td><button/);   // Sprechen (not taken by anyone) has no column
  assert.match(html, /data-act="last-result" data-attempt="att_x">Ergebnis ansehen/);
  assert.equal(attemptHistory({ attempts: [] }), '');
  // a Lesen-only history: no empty columns for modules nobody took
  const lesenOnly = attemptHistory({ attempts: [{ attempt_id: 'att_l', completed_at: 0, form_label: 'P3', modules: [{ module: 'lesen', status: 'final', points: 80, max_points: 100 },
    ...['hoeren', 'schreiben', 'sprechen'].map((m) => ({ module: m, status: 'not_taken', points: null, max_points: 100 }))] }] }, () => '21.10.2026');
  assert.match(lesenOnly, /<th scope="col">Lesen<\/th><th scope="col"><span class="kx-sr">Aktion/);
  assert.equal(/Hören|Schreiben|Sprechen/.test(lesenOnly), false);
  assert.match(lesenOnly, /class="kx-btn kx-btn-quiet" data-act="last-result"/, 'a full-size (44px) button');
});

test('ACCESSIBILITY (live regions): the redrawn header is not a live region; saving problems and the recovery are announced in the persistent status region; the word count is read with the textarea, not on every keystroke', async () => {
  const { header, saveAnnouncement, createRenderer } = await import('../js/render.js');
  for (const st of ['saved', 'pending', 'saving', 'offline', 'stopped']) assert.equal(/aria-live/.test(header({ module: 'lesen', remainingMs: 60000, saveState: st })), false, `header (${st})`);
  assert.equal(saveAnnouncement('saved', 'pending'), null); assert.equal(saveAnnouncement('pending', 'saving'), null); assert.equal(saveAnnouncement('saving', 'saved'), null);
  assert.match(saveAnnouncement('saving', 'offline'), /^Offline – Ihre Antworten bleiben auf diesem Gerät gespeichert und werden automatisch gesendet/); assert.match(saveAnnouncement('saving', 'offline', 'memory'), /^Offline – Ihre Antworten sind nur in diesem Fenster gespeichert\. Bitte schließen Sie die Seite nicht/); assert.match(saveAnnouncement('saving', 'offline', 'indexeddb'), /auf diesem Gerät/); assert.match(saveAnnouncement('offline', 'saved'), /Wieder verbunden/);
  assert.match(saveAnnouncement('saving', 'stopped'), /gestoppt/); assert.equal(saveAnnouncement('offline', 'offline'), null);
  const pkg = { module: 'schreiben', parts: [{ part: 1, tasks: [{ task_id: 't', instructions: 'x', stimuli: [], items: [{ item_id: 'itm:b1:x-s1', interaction: 'text_response', stem: 'Schreiben Teil 1', response_spec: { type: 'text', target_words: 80 } }] }] }] };
  const html = createRenderer().module(pkg, {}, {});
  const ta = html.match(/<textarea[^>]*aria-describedby="([^"]+)"/);
  assert.ok(ta, 'the textarea is described by its word count');
  assert.match(html, new RegExp(`<p class="kx-wc" id="${ta[1]}">`)); assert.equal(/class="kx-wc"[^>]*aria-live/.test(html), false);
  const main = fs.readFileSync(new URL('../js/main.js', import.meta.url), 'utf8');
  assert.match(main, /const prev = S\.saveTrouble \|\| S\.saveState;\s*if \(st === 'offline'\) S\.saveTrouble = 'offline'; else if \(st === 'saved' \|\| st === 'stopped'\) S\.saveTrouble = null;\s*const say = saveAnnouncement\(prev, st, S\.store && S\.store\.kind\); S\.saveState = st; if \(say\) announce\(say\);/);
  // the real sequence: offline → saving (retry) → offline (retry failed: not repeated) → saving → saved (recovery announced)
  let trouble = null, state = 'saving'; const heard = [];
  for (const st of ['offline', 'saving', 'offline', 'saving', 'saved']) { const prev = trouble || state; if (st === 'offline') trouble = 'offline'; else if (st === 'saved' || st === 'stopped') trouble = null; const say = saveAnnouncement(prev, st); state = st; if (say) heard.push(say.split(' – ')[0].split('.')[0]); }
  assert.deepEqual(heard, ['Offline', 'Wieder verbunden']);
  assert.match(main, /id="kx-announce" role="status"/);
});

test('ERROR SCREENS: only a network or server failure is called an interrupted connection; terminal states say what happened', () => {
  for (const e of [{ code: 'network' }, { code: 'internal', status: 500 }, { code: 'content_unavailable', status: 503 }, { code: 'lease_expired', status: 409 }]) {
    const v = errorView(e);
    assert.equal(v.title, 'Verbindung unterbrochen'); assert.match(v.body, /lokal gesichert/); assert.deepEqual(v.actions, [{ act: 'reload', label: 'Erneut verbinden' }]);
  }
  const closed = errorView({ code: 'attempt_closed', status: 409 });
  assert.equal(closed.title, 'Prüfung bereits abgeschlossen'); assert.deepEqual(closed.actions, [{ act: 'reload', label: 'Zur Übersicht' }]);
  assert.equal(errorView({ code: 'attempt_voided', status: 409 }).title, 'Versuch ungültig');
  assert.equal(errorView({ code: 'exam_access_required', status: 403 }).title, 'Nicht verfügbar');
  assert.equal(errorView({ code: 'rate_limited', status: 429 }).title, 'Bitte kurz warten');
  assert.deepEqual(errorView({ code: 'lease_superseded', status: 409 }).actions, [{ act: 'takeover', label: 'Hier fortsetzen' }]);
  // ENGINE §8: sign in again in a new tab, then continue in this tab
  const auth = errorView({ code: 'auth_required', status: 401 });
  assert.deepEqual(auth.actions, [{ act: 'reload', label: 'Weiter' }]);
  assert.deepEqual(auth.links, [{ href: '../account/index.html', label: 'In neuem Tab anmelden', newTab: true }]);
  assert.match(auth.body, /Gespeicherte Antworten bleiben erhalten/);
  // any other refusal: no claim about a lost connection or a local queue
  for (const code of ['module_locked', 'another_module_running', 'review_not_available', 'some_new_code']) {
    const v = errorView({ code, status: 409 });
    assert.equal(v.title, 'Aktion nicht möglich', code); assert.equal(/Verbindung|lokal gesichert/.test(v.body), false, code); assert.ok(v.body.includes(`(${code})`));
  }
  // every view is used through fail(): escaped buttons, no browser dialog
  const main = fs.readFileSync(new URL('../js/main.js', import.meta.url), 'utf8');
  assert.match(main, /function fail\(e\) \{\s*const code = e instanceof ExamApiError \? e\.code : 'network';\s*showError\(errorView\(e instanceof ExamApiError \? \{ code, status: e\.status \} : \{ code \}\)\);/);
  assert.match(main, /<button class="kx-btn" data-act="\$\{esc\(a\.act\)\}">\$\{esc\(a\.label\)\}<\/button>/, 'buttons escaped');
  assert.match(main, /<a class="kx-btn kx-btn-quiet" href="\$\{esc\(l\.href\)\}"\$\{l\.newTab \? ' target="_blank" rel="noopener"' : ''\}>\$\{esc\(l\.label\)\}<\/a>/, 'links escaped, new tab with noopener');
  assert.equal(/Verbindung unterbrochen/.test(main), false, 'the copy lives in render.js only');
});

test('LEASE EXPIRY (static): an expired lease is reacquired like a reload (no takeover) by the heartbeat, autosave and every leased call', () => {
  const main = fs.readFileSync(new URL('../js/main.js', import.meta.url), 'utf8');
  assert.match(main, /const r = await api\.lease\(S\.attempt\.attempt_id, deviceId\(\), false\);/, 'never a takeover');
  assert.match(main, /if \(S\.autosave && S\.autosave\.hasPending\(\)\) S\.autosave\.schedule\(0\);/, 'queued answers are sent again');
  assert.match(main, /else if \(e\.code === 'lease_expired'\) onLeaseExpired\(sent\);/, 'heartbeat path');
  // a late lease_expired for a lease that was already replaced must not reacquire again (it would meet our own new
  // lease and wrongly show the takeover screen)
  assert.match(main, /if \(staleLease && staleLease !== S\.lease && !reacquiring\) return Promise\.resolve\(null\);/);
  assert.match(main, /const err = await reacquireLease\(lease\);/);
  assert.match(main, /else if \(code === 'lease_expired'\) onLeaseExpired\(\);/, 'autosave path');
  assert.match(main, /else if \(code === 'auth_required' \|\| code === 'exam_access_required'\) \{ clearInterval\(S\.hb\); clearInterval\(S\.timer\); fail\(/, 'signed out: the sign-in screen, not a retry loop');
  assert.match(main, /if \(!reacquiring\) reacquiring = /, 'single-flight');
  assert.match(main, /e\.code === 'lease_held' \? new ExamApiError\(409, 'lease_superseded'\)/, 'another tab took it meanwhile: the takeover screen');
  // every api method that takes the lease is wrapped (one retry with the new lease)
  const list = JSON.parse(/const LEASED_CALLS = (\[[^\]]*\]);/.exec(main)[1].replace(/'/g, '"'));
  const apiSrc = fs.readFileSync(new URL('../js/api.js', import.meta.url), 'utf8');
  const leased = [...apiSrc.matchAll(/^\s+([a-zA-Z]+): \(id, leaseId\b/gm)].map((m) => m[1]).filter((n) => n !== 'heartbeat');
  assert.deepEqual([...list].sort(), [...leased].sort(), 'LEASED_CALLS covers every lease-carrying API method except heartbeat');
  assert.match(main, /return call\(id, S\.lease, \.\.\.rest\);/, 'retried once with the reacquired lease');
});

test('COOKIE PRE-FLIGHT (OD-20 interim): cookieCheck() true/false/null, never throws; "signed out" becomes "cookies blocked" only on a definite answer', async () => {
  const fake = (received, { fail = false } = {}) => async (url, init) => {
    if (fail) throw new TypeError('offline');
    if (init.method === 'POST') return new Response('{"ok":true}', { status: 200 });
    return new Response(JSON.stringify(received === undefined ? { ok: true } : { ok: true, received }), { status: 200 });
  };
  assert.equal(await createApi({ base: '', fetchImpl: fake(true) }).cookieCheck(), true);
  assert.equal(await createApi({ base: '', fetchImpl: fake(false) }).cookieCheck(), false);
  assert.equal(await createApi({ base: '', fetchImpl: fake(undefined) }).cookieCheck(), null, 'unexpected reply: unknown');
  assert.equal(await createApi({ base: '', fetchImpl: fake(true, { fail: true }) }).cookieCheck(), null, 'offline: unknown, no throw');
  const notFound = async () => new Response('{"ok":false,"error":"not_found"}', { status: 404 });
  assert.equal(await createApi({ base: '', fetchImpl: notFound }).cookieCheck(), null, 'no probe endpoint (dev server): unknown');
  const v = errorView({ code: 'cookies_blocked' });
  assert.equal(v.title, 'Cookies blockiert'); assert.match(v.body, /Drittanbietern/); assert.deepEqual(v.actions, [{ act: 'reload', label: 'Erneut versuchen' }]);
  const main = fs.readFileSync(new URL('../js/main.js', import.meta.url), 'utf8');
  assert.match(main, /if \(code === 'auth_required'\) api\.cookieCheck\(\)\.then\(\(received\) => \{ if \(received === false\) showError\(errorView\(\{ code: 'cookies_blocked' \}\)\); \}\);/);
  const rater = fs.readFileSync(new URL('../js/rater.js', import.meta.url), 'utf8');
  assert.match(rater, /e\.code === 'auth_required' && \(await api\.cookieCheck\(\)\) === false\) e = new ExamApiError\(401, 'cookies_blocked'\)/);
});

test('CSP: both exam pages carry a strict Content-Security-Policy and contain nothing it would have to allow', () => {
  for (const page of ['../index.html', '../rater.html']) {
    const html = fs.readFileSync(new URL(page, import.meta.url), 'utf8');
    const m = /<meta http-equiv="Content-Security-Policy" content="([^"]+)">/.exec(html);
    assert.ok(m, `${page}: CSP present`);
    const csp = Object.fromEntries(m[1].split(';').map((d) => d.trim().split(/\s+/)).map(([k, ...v]) => [k, v]));
    assert.deepEqual(csp['default-src'], ["'none'"]); assert.deepEqual(csp['script-src'], ["'self'"]);
    assert.deepEqual(csp['object-src'], ["'none'"]); assert.deepEqual(csp['base-uri'], ["'none'"]); assert.deepEqual(csp['form-action'], ["'none'"]);
    assert.equal(/unsafe-inline|unsafe-eval|\*(?!\.klarweg\.in)/.test(m[1]), false, `${page}: no unsafe-* and no bare wildcard`);
    assert.ok(csp['media-src'].includes('blob:'), 'recordings and test tones play from blob: URLs');
    // nothing inline that the policy would block
    assert.equal(/<script(?![^>]*\bsrc=)/.test(html), false, `${page}: no inline script`);
    assert.equal(/<style\b|\sstyle="|\son[a-z]+="/.test(html), false, `${page}: no inline style or handler`);
  }
  for (const f of fs.readdirSync(new URL('../js/', import.meta.url))) {
    const src = fs.readFileSync(new URL(`../js/${f}`, import.meta.url), 'utf8');
    assert.equal(/\sstyle=\\?["']|\son(click|load|error|change|input|submit)=|eval\(|new Function\(/.test(src), false, `${f}: no inline style/handler/eval in rendered HTML`);
  }
});

test('START SCREEN: full simulation when available, else the single available module (Lesen-only self-practice), else nothing', () => {
  const m = (mode, available, extra = {}) => ({ mode, level: 'b1', available, reason: available ? null : 'disabled', ...extra });
  assert.equal(startChoice({ modes: [] }), null);
  assert.equal(startChoice({ modes: [m('synthetic_full', false), m('synthetic_module', false, { module: null })] }), null);
  assert.deepEqual(startChoice({ modes: [m('synthetic_full', true), m('synthetic_module', true, { module: 'lesen' })] }), { mode: 'synthetic_full', module: null });
  const lesen = startChoice({ modes: [m('synthetic_full', false), m('synthetic_module', true, { module: 'lesen' })] });
  assert.deepEqual(lesen, { mode: 'synthetic_module', module: 'lesen' });
  assert.equal(startChoice({ modes: [m('synthetic_module', true, { module: 'nope' })] }), null);
  assert.equal(startChoice({ modes: [{ ...m('synthetic_module', true, { module: 'lesen' }), level: 'b2' }] }), null);

  const one = startScreen(lesen, { lastCompleted: 'att_1' });
  assert.match(one, /data-act="create" data-mode="synthetic_module" data-module="lesen"/);
  assert.match(one, /Hören, Schreiben und Sprechen sind in dieser Version nicht verfügbar/);
  assert.match(one, /kein Prüfungsergebnis und keine Vorhersage/);
  assert.match(one, /data-act="last-result" data-attempt="att_1"/);
  assert.equal(/allen vier Modulen|Goethe|bestehen Sie|garantiert/i.test(one), false);
  const full = startScreen({ mode: 'synthetic_full', module: null });
  assert.match(full, /allen vier Modulen/); assert.match(full, /data-act="create" data-mode="synthetic_full">/);
  assert.equal(/data-module=/.test(full), false);
  assert.equal(/<h1>/.test(one) && (one.match(/<h1/g) || []).length, 1);
});

test('ERRORS (release set): a missing/invalid release or a withdrawn form gets its own message, not "Verbindung unterbrochen"', () => {
  for (const code of ['release_unconfigured', 'release_misconfigured']) {
    const v = errorView({ code, status: 503 });
    assert.equal(v.title, 'Vorübergehend nicht verfügbar', code);
    assert.equal(/Verbindung|EXAM_|frm:/.test(v.body), false, code);   // no operator detail for learners
  }
  const w = errorView({ code: 'form_not_in_release', status: 403 });
  assert.equal(w.title, 'Übung nicht mehr verfügbar');
});

test('MODULE INTRO render: time, parts and tasks before the start; the rules say what the engine really does', async () => {
  const { moduleIntro } = await import('../js/render.js');
  const html = moduleIntro('lesen', { minutes: 65, parts: 5, items: 30 });
  assert.match(html, /65 Minuten · 5 Teile · 30 Aufgaben/);
  assert.match(html, /läuft auf dem Server weiter/); assert.match(html, /automatisch gespeichert/); assert.match(html, /automatisch abgegeben/);
  assert.match(moduleIntro('hoeren', { minutes: null, parts: 4, items: 30 }), /4 Teile · 30 Aufgaben/);
  assert.equal(/Minuten/.test(moduleIntro('hoeren', { minutes: null, parts: 4, items: 30 })), false, 'no promised time for a phase-planned module');
  const sp = moduleIntro('sprechen', { minutes: null, approx_minutes: 9, parts: 3, items: 4, prep_minutes: 15, partner_listen: true });
  assert.match(sp, /ca\. 9 Minuten · 3 Teile/); assert.match(sp, /15 Minuten Vorbereitungszeit/); assert.match(sp, /danach ist die Wahl gesperrt/);
  assert.match(sp, /Mikrofon wird erst vor der ersten Aufnahme angefragt/); assert.match(sp, /hören Sie einmal; dabei wird nicht aufgenommen/);
  assert.equal(/Gesprächspartners/.test(moduleIntro('sprechen', { parts: 3, items: 4, prep_minutes: 1, partner_listen: false })), false);
  assert.equal(moduleIntro('lesen', undefined).includes('Minuten'), false, 'an older server without intro data still renders');
});

test('MATCHING (Lesen Teil 3): usage by situation number ("verwendet bei 15"), never blocked; item numbers; accent-insensitive ad filter', async () => {
  const { adUsage, usedText, itemNo, adMatches, foldText } = await import('../js/render.js');
  const u = adUsage([{ no: 'Beispiel', value: 'a' }, { no: '13', value: 'c' }, { no: '14', value: '' }, { no: '15', value: 'c' }]);
  assert.deepEqual([...u], [['a', ['Beispiel']], ['c', ['13', '15']]]);
  assert.equal(usedText(['13', '15']), 'verwendet bei 13, 15'); assert.equal(usedText([]), ''); assert.equal(usedText(['Beispiel']), 'verwendet im Beispiel'); assert.equal(usedText(['Beispiel', '13']), 'verwendet im Beispiel und bei 13');
  assert.equal(itemNo({ is_example: true, stem: 'Beispiel: x' }), 'Beispiel'); assert.equal(itemNo({ stem: '13. Sie möchten …' }), '13'); assert.equal(itemNo({ stem: 'x', display_no: 7 }), '7');
  assert.equal(foldText('Möbel  Straße'), 'mobel strasse');
  assert.ok(adMatches('Gebrauchte Möbel günstig', 'mobel')); assert.ok(adMatches('Fußball', 'FUSSBALL')); assert.ok(adMatches('x', '  ')); assert.equal(adMatches('Yoga', 'gitarre'), false);
  const html = createRenderer().module(pkgFor(build, 'lesen'), {}, {});
  assert.match(html, /<option value="[^"]+" data-label="[^"]+"/, 'options carry their original label for re-marking');
});

test('LESEN TEIL 3 ADS (ENGINE §9.1 L3): only the ad-pool task of every practice form renders ad cards (10, one per letter) with a usage line, a phone filter and numbered selects', async () => {
  const r = createRenderer();
  for (let n = 1; n <= 15; n++) {
    const pkg = pkgFor(syntheticBuild([path.join(ROOT, `exam-content/forms/synthetic/b1-synthetic-p${n}`)]), 'lesen');
    for (const p of pkg.parts) {
      const html = r.part(p, {}, { split: true });
      const cards = [...html.matchAll(/<article class="kx-stim kx-ad" id="kx-ad-[^"]+" data-ad="([^"]+)"><h3 class="kx-stim-label"><span class="kx-sr">Anzeige <\/span>\1<\/h3>[\s\S]*?<p class="kx-ad-used" data-ad-status><\/p><\/article>/g)];
      if (p.part !== 3) { assert.equal(cards.length, 0, `P${n} Teil ${p.part}: no ad cards`); assert.equal(/kx-ad-filter/.test(html), false); continue; }
      assert.deepEqual(cards.map((c) => c[1]), 'abcdefghij'.split(''), `P${n}: ads a–j`);
      assert.match(html, /<div class="kx-ad-filter" role="group" aria-label="Anzeigen filtern"><label for="(kx-adq-[^"]+)">Anzeigen durchsuchen<\/label><input type="search" id="\1" data-ad-filter/);
      assert.match(html, /<p class="kx-ad-count" data-ad-count data-total="10" role="status"><\/p>/);
      const nos = [...html.matchAll(/<select id="[^"]+" data-item="[^"]+" data-no="([^"]+)"/g)].map((m) => m[1]);
      assert.deepEqual(nos, ['Beispiel', ...Array.from({ length: nos.length - 1 }, (_, i) => String(13 + i))], `P${n}: select numbers`);
    }
  }
  const css = read('exam/exam.css');
  assert.match(css, /@media \(min-width: 768px\) {\s*\.kx-ads-list { display: grid; grid-template-columns: repeat\(auto-fill, minmax\(200px, 1fr\)\);/);
  assert.match(css, /\.kx-ad-filter { display: none; }/);
  const phone = css.slice(css.indexOf('@media (max-width: 767px) {\n  .kx-ad-filter'));
  assert.match(phone, /\.kx-ad\.kx-ad-out { display: none; }/, 'the filter hides cards only on phones');
  assert.match(phone, /input\[type="search"\] { min-height: 44px;/); assert.match(phone, /\.kx-ad-unused { display: flex; align-items: center; gap: 8px; min-height: 44px;/);
  const main = read('exam/js/main.js');
  assert.match(main, /if \(el\.matches && el\.matches\('\[data-ad-unused\]'\)\) \{ applyAdFilter\(el\.closest\('\.kx-task'\)\); return; \}/, 'the filter checkbox is never saved as an answer');
  assert.match(main, /if \(el\.matches && el\.matches\('\[data-ad-filter\]'\)\) \{ applyAdFilter\(el\.closest\('\.kx-task'\)\); return; \}/);
  const mark = main.slice(main.indexOf('function markUsedOptions'), main.indexOf('function applyAdFilter'));
  assert.equal(/\.value\s*=(?!=)|autosave|S\.answers/.test(mark), false, 'marking never changes an answer');
});

test('BANNER: the Prüftöne note appears only where audio is played (Hören, Sprechen)', () => {
  const b = syntheticBuild();
  for (const m of ['lesen', 'schreiben']) assert.equal(/Prüftöne/.test(testBanner(pkgFor(b, m))), false, m);
  for (const m of ['hoeren', 'sprechen']) assert.match(testBanner(pkgFor(b, m)), /Prüftöne/, m);
});

test('RESULT: a way back to the overview (start screen with history and a new practice)', async () => {
  const { RESULT_ACTIONS } = await import('../js/render.js');
  assert.match(RESULT_ACTIONS, /<button type="button" class="kx-btn" data-act="home">Zur Übersicht<\/button>/);
  const main = read('exam/js/main.js');
  assert.match(main, /if \(act === 'home'\)/);
  assert.match(main, /screen\(resultPage\(r\.result\) \+ RESULT_ACTIONS/);
});

test('STICKY BAR: header (timer, progress, save state) and part navigation share one sticky container', () => {
  const css = read('exam/exam.css'); const main = read('exam/js/main.js');
  assert.match(main, /<div class="kx-bar"><div id="kx-head"><\/div><p class="kx-phase" id="kx-phase"[^>]*><\/p>\$\{phaseTime\}<p class="kx-announce" id="kx-announce"[^>]*><\/p><p class="kx-sr" id="kx-sr-announce"[^>]*><\/p><div id="kx-nav-slot"><\/div><\/div>/, 'live status (phase, alerts, warnings) sits in the sticky bar');
  assert.match(css, /\.kx-phase:empty { display: none; }/);
  assert.match(main, /setProperty\('--kx-bar-h'/, 'jump targets follow the bar\'s real height');
  assert.match(css, /\.kx-bar\s*{[^}]*position: sticky;[^}]*top: 0/);
  // sticky on .kx-head itself never stuck: its parent #kx-head is exactly as tall as the header
  assert.equal(/\.kx-head\s*{[^}]*position: sticky/.test(css), false);
  // part-navigation targets (the "Teil n" headings, id part-n) land below the sticky bar, not under it
  assert.ok([...css.matchAll(/\[id\^="part-"\] { scroll-margin-top: calc\(var\(--kx-bar-h, 120px\) \+ 8px\); }/g)].length >= 1);
});

test('LESEN LAYOUT: texts and tasks are split into two columns (scrollable, labelled, focusable text region); other modules unchanged', async () => {
  const { createRenderer } = await import('../js/render.js');
  const r = createRenderer();
  const lesen = r.module(pkgFor(build, 'lesen'), {}, {});
  assert.ok((lesen.match(/class="kx-task kx-split"/g) || []).length >= 4, 'Lesen tasks with texts are split');
  assert.match(lesen, /<div class="kx-task-texts" id="kx-texts-[^"]+" role="region" tabindex="0" aria-label="Texte zu Teil 1">/);
  // Schreiben: only Teil 2 has a stimulus beyond its instructions (the forum post), pinned beside the editor (ENGINE §9.4)
  const schreiben = r.module(pkgFor(build, 'schreiben'), {}, {});
  assert.equal((schreiben.match(/class="kx-task kx-split"/g) || []).length, 1, 'only the Schreiben task with a post is split');
  assert.match(schreiben, /data-part="2"[\s\S]*class="kx-task kx-split"[\s\S]*aria-label="Beitrag zu Teil 2"[\s\S]*<textarea[\s\S]*<a href="#kx-texts-[^"]+">Beitrag<\/a><a href="#kx-items-[^"]+">Ihr Text<\/a>/);
  assert.equal(/kx-split/.test(r.module(pkgFor(build, 'hoeren'), {}, {})), false, 'Hören is never split');
  assert.equal(/kx-split/.test(r.module(pkgFor(build, 'lesen'), {}, { split: false })), false, 'can be turned off');
  const css = read('exam/exam.css');
  assert.match(css, /@media \(min-width: 768px\) {\s*\.kx-split-grid { display: grid;/);
  assert.match(css, /\.kx-task-texts { position: sticky; top: calc\(var\(--kx-bar-h, 120px\) \+ 8px\); max-height: calc\(100vh - var\(--kx-bar-h, 120px\) - 24px\); overflow-y: auto;/);
});

test('PART NAV: the part on screen is marked aria-current (and styled), nothing else', () => {
  const prog = [{ part: 1, answered: 0, total: 6 }, { part: 2, answered: 1, total: 6 }];
  const html = moduleNav(prog, 2);
  assert.match(html, /<a href="#part-2" aria-current="true">Teil 2/);
  assert.equal((html.match(/aria-current/g) || []).length, 1);
  assert.equal(/aria-current/.test(moduleNav(prog)), false);
  assert.match(read('exam/exam.css'), /\.kx-nav a\[aria-current="true"\] {[^}]*border-color: var\(--accent\)/);
});

test('ITEM REVIEW on a phone: answer and solution cells carry their labels; the table stacks into one card per task', () => {
  const html = itemReview('lesen', { summary: { correct: 1, incorrect: 0, unanswered: 0, total: 1 }, items: [{ display_no: 1, part: 1, status: 'correct', points: 1, max_points: 1,
    your_answer: { label: 'a' }, correct_answer: { label: 'a' }, explanation: 'Weil …' }] });
  assert.match(html, /<td data-label="Ihre Antwort">a<\/td><td data-label="Lösung">a<\/td>/);
  const css = read('exam/exam.css');
  const mobile = css.slice(css.indexOf('@media (max-width: 720px)'));
  assert.match(mobile, /\.kx-review-items tr:not\(\.kx-rv-explain\) { display: grid;/);
  assert.match(mobile, /\.kx-review-items td\[data-label\]::before { content: attr\(data-label\) ": "/);
});

test('ACCESS ADMIN screen: escaped values, revoke only for active grants, effective access, audit; page has the same CSP/noindex as the rater page', async () => {
  const { accessView, lookupForm } = await import('../js/admin-render.js');
  const v = { user_id: 'usr_00000000-0000-0000-0000-000000000001', is_exam_admin: false, effective: { B1: { synthetic: true, mock: false, sets: false } },
    grants: [{ grant_id: 'xa_1', level: 'B1', scope: 'synthetic', status: 'active', granted_at: 1, granted_by: 'usr_admin', valid_until: null, reason: '<b>Pilot</b>' },
      { grant_id: 'xa_0', level: 'B1', scope: 'mock', status: 'revoked', granted_at: 1, granted_by: null, valid_until: null, reason: null, revoked_at: 2, revoke_reason: 'Ende' }],
    audit: [{ at: 2000, actor: 'usr_admin', action: 'access_granted', detail: { level: 'B1', scope: 'synthetic', reason: 'Pilot' } }] };
  const html = accessView(v);
  assert.match(html, /&lt;b&gt;Pilot&lt;\/b&gt;/); assert.equal(/<b>Pilot/.test(html), false);
  assert.equal((html.match(/data-form="revoke"/g) || []).length, 1, 'only the active grant can be revoked');
  assert.match(html, /data-grant="xa_1"/);
  assert.match(html, /Wirksam: B1: Übungen \(synthetisch\)/);
  assert.match(html, /nicht erfasst/, 'a hand-made grant without reason or administrator says so');
  assert.match(html, /Zugang erteilt · B1 Übungen/);
  assert.match(lookupForm('', 'Fehler'), /role="alert">Fehler/);
  const admin = read('exam/admin.html'), rater = read('exam/rater.html');
  const csp = (h) => /http-equiv="Content-Security-Policy" content="([^"]+)"/.exec(h)[1];
  assert.equal(csp(admin), csp(rater)); assert.match(admin, /name="robots" content="noindex, nofollow"/); assert.match(admin, /<html lang="de">/);
  assert.match(read('exam/js/api.js'), /accessGrant: \(b\) => once\('POST'/, 'grant writes are never retried automatically');
});

test('ACCOMMODATIONS screen: current extra time, remove only when one exists, allowed values from the server, escaped reason', async () => {
  const { accommodationSection } = await import('../js/admin-render.js');
  const none = accommodationSection({ accommodation: null, audit: [], allowed_multipliers: [1.25, 1.5, 1.75, 2] });
  assert.match(none, /Kein Nachteilsausgleich/); assert.equal(/data-form="acc-remove"/.test(none), false);
  assert.deepEqual([...none.matchAll(/<option value="([^"]+)">([^<]+)</g)].map((m) => [m[1], m[2]]), [['1.25', '+25 %'], ['1.5', '+50 %'], ['1.75', '+75 %'], ['2', '+100 %']]);
  const one = accommodationSection({ accommodation: { time_multiplier: 1.5, status: 'active', valid_until: null, reason: '<x>' }, audit: [{ at: 1, actor: 'usr_a', action: 'accommodation_set', detail: { time_multiplier: 1.5, reason: 'r' } }], allowed_multipliers: [1.5] });
  assert.match(one, /Aktuell: \+50 % · aktiv · gültig bis unbegrenzt · &lt;x&gt;/); assert.match(one, /data-form="acc-remove"/); assert.match(one, />Ersetzen</);
  assert.match(one, /gesetzt · \+50 % · usr_a: r/);
});

test('ADVISORY TIMES + LENGTH RULE + WARNINGS (ENGINE §9/§10): per-part advisory time, scaled by an accommodation; <50 % word-count warning in the review; 10/1-minute warnings', async () => {
  const { advisory, belowHalf, LENGTH_RULE_NOTE, createRenderer } = await import('../js/render.js');
  assert.equal(advisory({ advisory_seconds: 600 }), '<p class="kx-advisory">Empfohlene Zeit: ca. 10 Minuten</p>');
  assert.match(advisory({ advisory_seconds: 600 }, { multiplier: 1.5 }), /ca\. 15 Minuten/);
  assert.equal(advisory({ advisory_seconds: 0 }), ''); assert.equal(advisory({}), '');
  const lesen = createRenderer().module(pkgFor(build, 'lesen'), {}, {});
  assert.equal((lesen.match(/class="kx-advisory"/g) || []).length, pkgFor(build, 'lesen').parts.filter((p) => p.advisory_seconds > 0).length);
  assert.equal(/kx-advisory/.test(createRenderer().module(pkgFor(build, 'hoeren'), {}, {})), false, 'Hören has no advisory times');
  assert.equal(belowHalf(39, 80), true); assert.equal(belowHalf(40, 80), false); assert.equal(belowHalf(10, null), false);
  const review = reviewPanel([{ part: 1, answered: 1, total: 1, items: [{ item_id: 'w1', no: 1, answered: true, interaction: 'text_response', words: 30, target_words: 80 }] },
    { part: 2, answered: 1, total: 1, items: [{ item_id: 'w2', no: 2, answered: true, interaction: 'text_response', words: 90, target_words: 100 }] }]);
  assert.equal((review.match(/class="kx-review-warn"/g) || []).length, 1);
  assert.ok(review.includes(LENGTH_RULE_NOTE));
  const main = read('exam/js/main.js');
  assert.match(main, /for \(const mark of \[600_000, 60_000\]\)/);
  assert.match(main, /total > mark && rem <= mark/, 'a module shorter than the mark never starts with a warning');
});

test('PRE-CHECKS (ENGINE §10): environment notes only when needed; microphone check passes on a live track and fails with a guided reason; the tone plays once and closes its context', async () => {
  const { environmentNotes, testMicrophone, playTestTone, MIC_FIX, AUDIO_CHECK, MIC_CHECK } = await import('../js/precheck.js');
  assert.deepEqual(environmentNotes({ storageKind: 'indexeddb', offsetMs: 1000, rttMs: 200 }), []);
  assert.deepEqual(environmentNotes({ storageKind: 'memory', offsetMs: -300000, rttMs: 4000 }).map((n) => n.kind), ['storage', 'clock', 'connection']);
  const track = (state) => ({ readyState: state, stop() { this.stopped = true; } });
  const live = track('live');
  const ok = await testMicrophone({ getUserMedia: async () => ({ getAudioTracks: () => [live], getTracks: () => [live] }), createContext: () => { throw new Error('no audio'); }, ms: 0 });
  assert.equal(ok.ok, true); assert.equal(live.stopped, true, 'the stream is released after the test');
  const denied = await testMicrophone({ getUserMedia: async () => { const e = new Error('x'); e.name = 'NotAllowedError'; throw e; } });
  assert.deepEqual(denied, { ok: false, error: 'NotAllowedError' }); assert.ok(MIC_FIX.NotAllowedError);
  const dead = track('ended');
  assert.deepEqual(await testMicrophone({ getUserMedia: async () => ({ getAudioTracks: () => [dead], getTracks: () => [dead] }), ms: 0 }), { ok: false, error: 'NotReadableError' });
  let closed = false, started = 0;
  const param = { setValueAtTime() {}, linearRampToValueAtTime() {} };
  await playTestTone(() => ({ state: 'running', currentTime: 0, destination: {}, async close() { closed = true; },
    createGain: () => ({ gain: param, connect: (d) => d }),
    createOscillator: () => { const o = { frequency: {}, connect: (g) => ({ connect: () => {} }), start() { started++; }, stop() { setTimeout(() => o.onended(), 0); } }; return o; } }));
  assert.equal(started, 1); assert.equal(closed, true);
  assert.match(AUDIO_CHECK, /id="kx-tone-heard"/); assert.match(MIC_CHECK, /data-act="mic-test"/);
  const main = read('exam/js/main.js');
  assert.match(main, /b\.dataset\.module === 'hoeren' && \$\('#kx-tone-heard'\) && !\$\('#kx-tone-heard'\)\.checked/, 'no Hören start before the audio check');
  assert.match(main, /b\.dataset\.module === 'sprechen' && \$\('#kx-mic-msg'\) && !S\.micOk/, 'no Sprechen start before the microphone check');
});

test('AUTOSAVE signed out (ENGINE §8): auth_required stops retrying, keeps the queued answer on the device and hands over to the sign-in screen', async () => {
  const store = memoryStore(); const fatal = []; const timers = [];
  const a = new Autosave({ key: 'k', store, debounceMs: 0, send: async () => { throw new ExamApiError(401, 'auth_required'); },
    onFatal: (c) => fatal.push(c), setTimer: (fn, ms) => { timers.push(ms); return 1; }, clearTimer: () => {} });
  await a.load([]);
  await a.set('itm:x', { option_id: 'a' });
  timers.length = 0;
  await a.flush();
  assert.deepEqual(fatal, ['auth_required']);
  assert.equal(a.state, 'stopped');
  assert.deepEqual(timers, [], 'no retry loop while signed out');
  assert.deepEqual(Object.keys((await store.get('k')).pending), ['itm:x'], 'the answer stays queued for after the sign-in');
  // a fresh queue after resuming sends it
  const sent = [];
  const b = new Autosave({ key: 'k', store, debounceMs: 0, send: async (batch) => { sent.push(...batch); return { results: batch.map((x) => ({ item_id: x.item_id, current_seq: x.seq })) }; } });
  await b.load([]); await b.flush();
  assert.deepEqual(sent.map((x) => [x.item_id, x.value.option_id]), [['itm:x', 'a']]);
  assert.equal(b.hasPending(), false);
});

test('TAKEOVER WARNING (ENGINE §8): both the "open elsewhere" and the "superseded" screens warn before taking over', async () => {
  const { TAKEOVER_NOTE } = await import('../js/render.js');
  assert.match(TAKEOVER_NOTE, /auf einem anderen Gerät noch nicht übertragen wurden, gehen dabei verloren/);
  assert.ok(errorView({ code: 'lease_superseded', status: 409 }).body.includes(TAKEOVER_NOTE));
  assert.match(read('exam/js/main.js'), /message\('Bereits geöffnet', `Diese Prüfung ist in einem anderen Tab oder auf einem anderen Gerät geöffnet\. \$\{TAKEOVER_NOTE\}`/);
});

test('ADMIN LOOKUP screen: email search first, user id as fallback; the match is shown for confirmation (escaped) before anything is managed', async () => {
  const { lookupForm, lookupResult, ADMIN_ERRORS } = await import('../js/admin-render.js');
  const f = lookupForm();
  assert.ok(f.indexOf('data-form="email"') < f.indexOf('data-form="lookup"'), 'email search before the id fallback');
  assert.match(f, /<input id="kx-email" name="email" type="email" required maxlength="254"/);
  const r = lookupResult('<x>@example.com', { user_id: 'usr_00000000-0000-0000-0000-000000000001', account_created: 0 });
  assert.match(r, /&lt;x&gt;@example\.com · Konto seit unbekannt/);
  assert.match(r, /data-act="manage" data-user="usr_00000000-0000-0000-0000-000000000001"/);
  for (const k of ['invalid_email', 'user_not_found', 'rate_limited']) assert.ok(ADMIN_ERRORS[k], k);
  assert.match(read('exam/js/api.js'), /accessLookup: \(email\) => once\('POST', '\/exam\/v1\/admin\/access\/lookup'/);
});

test('CONNECTION PRE-CHECK (ENGINE §10): timed 1 MiB download → ok / slow / failed / timeout / skipped (save-data), with guidance; never blocks', async () => {
  const { measureDownload, downloadNote, SLOW_MBPS } = await import('../js/precheck.js');
  const MiB = 1024 * 1024;
  const clock = (ms) => { let t = 0; return () => { const v = t; t += ms; return v; }; };   // first call = start, second = end
  const ok = (bytes) => async () => ({ ok: true, arrayBuffer: async () => new ArrayBuffer(bytes) });
  const fast = await measureDownload({ fetchImpl: ok(MiB), url: 'u', now: clock(500) });   // 8.4 Mbit in 0.5 s
  assert.deepEqual(fast, { state: 'ok', mbps: 16.8 });
  const slow = await measureDownload({ fetchImpl: ok(MiB), url: 'u', now: clock(10_000) });
  assert.equal(slow.state, 'slow'); assert.ok(slow.mbps < SLOW_MBPS);
  assert.deepEqual(await measureDownload({ fetchImpl: async () => ({ ok: false }), url: 'u' }), { state: 'failed' });
  assert.deepEqual(await measureDownload({ fetchImpl: ok(1000), url: 'u' }), { state: 'failed' }, 'a truncated body is not a measurement');
  assert.deepEqual(await measureDownload({ fetchImpl: async () => { throw new TypeError('network'); }, url: 'u' }), { state: 'failed' });
  const hang = (u, o) => new Promise((_, rej) => o.signal.addEventListener('abort', () => { const e = new Error('aborted'); e.name = 'AbortError'; rej(e); }));
  assert.deepEqual(await measureDownload({ fetchImpl: hang, url: 'u', timeoutMs: 20 }), { state: 'timeout' });
  let called = false;
  assert.deepEqual(await measureDownload({ fetchImpl: async () => { called = true; }, url: 'u', saveData: true }), { state: 'skipped' });
  assert.equal(called, false, 'no download in data-saver mode');
  assert.match(downloadNote(fast), /16,8 Mbit\/s/); assert.match(downloadNote(slow), /langsam.*Hörzeit beginnt erst danach/);
  for (const st of ['failed', 'timeout', 'skipped']) assert.ok(downloadNote({ state: st }).length > 20, st);
  const main = read('exam/js/main.js');
  assert.match(main, /if \(module === 'hoeren'\) runConnectionCheck\(\)/);
  assert.match(main, /sessionStorage\.setItem\(key, JSON\.stringify\(r\)\)/, 'measured once per attempt in this tab');
});

test('BREAK (OD-04): optional ≤ 15-min break only between written modules of a full attempt; counted from the last submission; never starts anything', async () => {
  const { breakApplies, breakPanel, BREAK_MS } = await import('../js/render.js');
  const full = (mods) => ({ module_scope: null, part_scope: null, modules: mods });
  const sub = (module, at) => ({ module, status: 'submitted', submitted_at: at });
  assert.equal(breakApplies(full([{ module: 'lesen', status: 'available' }]), 'lesen'), null, 'nothing to rest from before the first module');
  assert.equal(breakApplies(full([sub('lesen', 1000)]), 'hoeren'), 1000);
  assert.equal(breakApplies(full([sub('lesen', 1000), sub('hoeren', 5000)]), 'schreiben'), 5000);
  assert.equal(breakApplies(full([sub('lesen', 1), sub('hoeren', 2), sub('schreiben', 3)]), 'sprechen'), null, 'not before the oral module');
  assert.equal(breakApplies({ ...full([sub('lesen', 1)]), module_scope: 'lesen' }, 'hoeren'), null, 'single-module attempts have no break');
  assert.equal(BREAK_MS, 900000);
  assert.match(breakPanel(600000), /Pausenzeit zählt nicht zur Prüfungszeit[\s\S]*10:00/);
  assert.match(breakPanel(0), /Die empfohlene Pause ist vorbei/);
  assert.match(breakPanel(1), /mindestens 15 Minuten Pause/, 'labelled as a simulation deviation');
});

test('SCHREIBEN EDITOR (ENGINE §9.4): plain textarea without browser writing aids; the character row has umlauts, ß, „ “ – € with spoken names', async () => {
  const { createRenderer, UMLAUTS } = await import('../js/render.js');
  assert.deepEqual(UMLAUTS, ['ä', 'ö', 'ü', 'Ä', 'Ö', 'Ü', 'ß', '„', '“', '–', '€']);
  const pkg = { module: 'schreiben', parts: [{ part: 1, tasks: [{ task_id: 't', instructions: 'x', stimuli: [], items: [{ item_id: 'itm:b1:x-s1', interaction: 'text_response', stem: 'Schreiben Teil 1', response_spec: { type: 'text', target_words: 80 } }] }] }] };
  const html = createRenderer().module(pkg, {}, {});
  const ta = html.match(/<textarea[^>]*>/)[0];
  for (const a of ['lang="de"', 'spellcheck="false"', 'autocomplete="off"', 'autocorrect="off"', 'autocapitalize="off"']) assert.ok(ta.includes(a), a);
  for (const c of UMLAUTS) assert.ok(html.includes(`data-insert="${c}"`), c);
  assert.match(html, /aria-label="Anführungszeichen unten einfügen">„</); assert.match(html, /aria-label="Eurozeichen einfügen">€</);
  assert.match(html, /aria-label="ä einfügen">ä</);
});

test('LESEN SPLIT (ENGINE §9.1): each split task has a Text / Aufgaben link pair to its own columns; CSS shows it only below 768 px, sticky', async () => {
  const { createRenderer } = await import('../js/render.js');
  const pkg = { module: 'lesen', parts: [{ part: 1, tasks: [{ task_id: 'tsk:b1:x-l1', instructions: 'Lesen Sie.', stimuli: [{ kind: 'text', text: 'Ein Text.' }],
    items: [{ item_id: 'itm:b1:x-l1-1', interaction: 'binary_choice', stem: 'Richtig?', options: [{ option_id: 'r', label: 'Richtig' }, { option_id: 'f', label: 'Falsch' }] }] }] }] };
  const html = createRenderer().module(pkg, {}, { split: true });
  assert.match(html, /<div class="kx-task-texts" id="kx-texts-tsk_b1_x-l1"/); assert.match(html, /<div class="kx-task-items" id="kx-items-tsk_b1_x-l1">/);
  assert.match(html, /<nav class="kx-split-toggle" aria-label="Teil 1: Texte und Aufgaben"><a href="#kx-texts-tsk_b1_x-l1">Text<\/a><a href="#kx-items-tsk_b1_x-l1">Aufgaben<\/a><\/nav><\/div>/);
  const css = read('exam/exam.css');
  assert.match(css, /\.kx-split-toggle { display: none; }/);
  assert.match(css, /@media \(max-width: 767px\) {\s*\.kx-split-toggle { position: sticky; bottom: 96px; display: flex;/);
  assert.match(css, /\.kx-split-toggle a { pointer-events: auto;[^}]*min-height: 44px/);
});

test('ITEM FLAGS (ENGINE §9.1): choice and matching items get a fixed-label toggle (aria-pressed); examples, locked, writing and speaking items do not; the review lists marked items with jump links', async () => {
  const { createRenderer, reviewPanel, FLAGGABLE } = await import('../js/render.js');
  assert.deepEqual([...FLAGGABLE].sort(), ['binary_choice', 'matching_pool', 'mcq_single', 'speaker_assignment']);
  const opts = [{ option_id: 'r', label: 'Richtig' }, { option_id: 'f', label: 'Falsch' }];
  const pkg = { module: 'lesen', parts: [{ part: 1, tasks: [{ task_id: 't', instructions: 'x', stimuli: [], items: [
    { item_id: 'itm:ex', interaction: 'binary_choice', stem: 'Bsp', is_example: true, example_answer: 'r', options: opts },
    { item_id: 'itm:a', interaction: 'binary_choice', stem: 'A', options: opts },
    { item_id: 'itm:b', interaction: 'matching_pool', stem: 'B', options: opts },
    { item_id: 'itm:c', interaction: 'binary_choice', stem: 'C', options: opts }] }] }] };
  const r = createRenderer();
  const html = r.module(pkg, {}, { flags: new Set(['itm:b']), locked: new Set(['itm:c']) });
  assert.match(html, /<button type="button" class="kx-flag" data-flag="itm:a" aria-pressed="false">Zur Kontrolle markieren<\/button><\/fieldset>/);
  assert.match(html, /<button type="button" class="kx-flag" data-flag="itm:b" aria-pressed="true">Zur Kontrolle markieren<\/button><\/div>/);
  assert.equal(/data-flag="itm:ex"/.test(html), false, 'no flag on an example'); assert.equal(/data-flag="itm:c"/.test(html), false, 'no flag on a locked item');
  assert.equal(/kx-flag/.test(r.module(pkg, {}, {})), false, 'no flags without a flag set (e.g. read-only views)');
  const w = r.module({ module: 'schreiben', parts: [{ part: 1, tasks: [{ task_id: 't', instructions: 'x', stimuli: [], items: [{ item_id: 'itm:w', interaction: 'text_response', stem: 'W', response_spec: { type: 'text' } }] }] }] }, {}, { flags: new Set() });
  assert.equal(/kx-flag/.test(w), false, 'no flag on a writing task');
  const progress = [{ part: 1, answered: 1, total: 2, items: [{ item_id: 'itm:a', no: '1', answered: true }, { item_id: 'itm:b', no: '2', answered: false }] }];
  const rv = reviewPanel(progress, new Set(['itm:a', 'itm:b']));
  assert.match(rv, /1 von 2 Aufgaben sind noch ohne Antwort\. 2 Aufgaben sind zur Kontrolle markiert\./);
  assert.match(rv, /<span class="kx-review-marked"> · markiert: <a href="#item-itm_a" data-review-jump>Aufgabe 1<\/a>, <a href="#item-itm_b" data-review-jump>Aufgabe 2<\/a><\/span>/);
  assert.match(reviewPanel(progress, new Set(['itm:a'])), /1 Aufgabe ist zur Kontrolle markiert\./);
  assert.equal(/markiert/.test(reviewPanel(progress)), false, 'nothing marked → no mention');
  const main = read('exam/js/main.js');
  assert.match(main, /localStorage\.getItem\(flagKey\(attemptId\)\)/); assert.match(main, /reviewPanel\(progress\(\) \|\| \[\], S\.flags, reviewRemaining\(\)\)/);
  const handler = main.slice(main.indexOf('if (b.dataset.flag) {'), main.indexOf('if (b.dataset.insert) {'));
  assert.ok(handler.length > 50 && handler.includes('saveFlags('), 'flag handler found');
  assert.equal(/\bapi\.|autosave|fetch\(/i.test(handler), false, 'toggling a flag sends nothing');
});

test('LESEN TEIL 4 (ENGINE §9.1): every item name links to its own comment in all 15 practice forms; no other part gets links; repeated labels link nothing', async () => {
  const { createRenderer: cr } = await import('../js/render.js');
  const r = cr();
  for (let n = 1; n <= 15; n++) {
    const pkg = pkgFor(syntheticBuild([path.join(ROOT, `exam-content/forms/synthetic/b1-synthetic-p${n}`)]), 'lesen');
    for (const p of pkg.parts) {
      const html = r.part(p, {}, { split: true });
      const jumps = [...html.matchAll(/<a class="kx-stim-jump" href="#([^"]+)" aria-label="Zum Text von ([^"]+)">Zum Text<\/a>/g)];
      if (p.part !== 4) { assert.equal(jumps.length, 0, `P${n} Teil ${p.part}: no links`); continue; }
      assert.equal(jumps.length, p.tasks.flatMap((t) => t.items).length, `P${n} Teil 4: one link per item`);
      for (const [, id, name] of jumps) assert.match(html, new RegExp(`<article class="kx-stim" id="${id}" tabindex="-1"><h3 class="kx-stim-label">${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</h3>`), `P${n}: ${name} → its own comment`);
    }
  }
  const opts = [{ option_id: 'j', label: 'Ja' }, { option_id: 'n', label: 'Nein' }];
  const twin = { module: 'lesen', parts: [{ part: 4, tasks: [{ task_id: 't', instructions: 'x', stimuli: [{ kind: 'text', label: 'Anna, 30', text: 'a' }, { kind: 'text', label: 'Anna, 30', text: 'b' }],
    items: [{ item_id: 'i', interaction: 'binary_choice', stem: '20. Anna, 30', options: opts }] }] }] };
  assert.equal(/kx-stim-jump|kx-stim" id=/.test(r.module(twin, {}, {})), false, 'an ambiguous name links nowhere');
});

test('TABLET SPLIT (ENGINE §9.1): 768–1023 px split pane with a collapsible texts column — disclosure button (fixed label, aria-expanded, aria-controls), CSS only at tablet width, jumps open a collapsed panel', async () => {
  const { createRenderer: cr } = await import('../js/render.js');
  const html = cr().module(pkgFor(build, 'lesen'), {}, {});
  const buttons = [...html.matchAll(/<button type="button" class="kx-split-collapse" data-act="toggle-texts" aria-expanded="true" aria-controls="(kx-texts-[^"]+)">Texte zu Teil (\d)<\/button><div class="kx-split-grid">/g)];
  assert.equal(buttons.length, (html.match(/class="kx-task kx-split"/g) || []).length, 'one collapse control per split task');
  for (const [, id] of buttons) assert.ok(html.includes(`<div class="kx-task-texts" id="${id}"`), `controls ${id}`);
  const sw = cr().module(pkgFor(build, 'schreiben'), {}, {});
  assert.match(sw, /aria-controls="kx-texts-[^"]+">Beitrag zu Teil 2<\/button>/);
  const css = read('exam/exam.css');
  assert.match(css, /\.kx-split-collapse { display: none; }/);
  const tablet = css.slice(css.indexOf('@media (min-width: 768px) and (max-width: 1023px) {'));
  assert.match(tablet, /^@media \(min-width: 768px\) and \(max-width: 1023px\) {\s*\.kx-split-collapse { display: inline-flex;[^}]*min-height: 44px/);
  assert.match(tablet, /\.kx-split\.kx-collapsed \.kx-split-grid { grid-template-columns: minmax\(0, 1fr\); }\s*\.kx-split\.kx-collapsed \.kx-task-texts { display: none; }\s*}/);
  assert.ok(css.indexOf('@media (min-width: 768px) {\n  .kx-split-grid') < css.indexOf('@media (min-width: 768px) and (max-width: 1023px)'), 'tablet rules come after the general split rules');
  const main = read('exam/js/main.js');
  assert.match(main, /if \(act === 'toggle-texts'\) \{ const split = b\.closest\('\.kx-split'\); setTextsExpanded\(split, split\.classList\.contains\('kx-collapsed'\)\); return; \}/);
  assert.match(main, /const split = target && target\.closest\('\.kx-task-texts'\) && target\.closest\('\.kx-split\.kx-collapsed'\);\s*if \(split\) setTextsExpanded\(split, true\);/);
});

test('SPRECHEN NOTES (SPEAKING §2): a labelled plain field with the "frei sprechen" rule, escaped, no answer id; device-only storage; never saved as an answer; sticky panel that fits between the bars', async () => {
  const { notesPanel, NOTES_MAX } = await import('../js/render.js');
  const html = notesPanel('a <b> & "c"');
  assert.match(html, /^<aside class="kx-notes" aria-labelledby="kx-notes-title"><h2 id="kx-notes-title">Ihre Notizen<\/h2><p class="kx-notes-rule">Frei sprechen – nicht ablesen\.<\/p>/);
  assert.match(html, /<label for="kx-notes-text" class="kx-sr">Ihre Notizen<\/label><textarea id="kx-notes-text" data-notes lang="de" rows="10" maxlength="4000" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off" aria-describedby="kx-notes-hint">a &lt;b&gt; &amp; &quot;c&quot;<\/textarea>/);
  assert.equal(NOTES_MAX, 4000); assert.equal(/data-item/.test(html), false, 'not an answer field (autosave and paste policy ignore it)');
  assert.match(html, /Nur auf diesem Gerät gespeichert, nicht bewertet\./);
  const main = read('exam/js/main.js');
  assert.match(main, /if \(el\.matches && el\.matches\('\[data-notes\]'\)\) \{ saveNotes\(S\.attempt\.attempt_id, el\.value\); return; \}/);
  assert.ok(main.indexOf("matches('[data-notes]')") < main.indexOf("if (el.tagName !== 'TEXTAREA' || !S.autosave) return;"), 'notes handled before the answer textarea path');
  assert.match(main, /localStorage\.getItem\(notesKey\(attemptId\)\)/);
  assert.match(main, /S\.module === 'sprechen' \? notesPanel\(loadNotes\(S\.attempt\.attempt_id\)\) \+ '<\/div>' : ''/);
  const css = read('exam/exam.css');
  assert.match(css, /@media \(min-width: 768px\) {\s*\.kx-speak-layout { display: grid; grid-template-columns: minmax\(0, 1fr\) minmax\(240px, 300px\);[^}]*}\s*\.kx-speak-layout \.kx-notes { margin: 0; position: sticky; top: calc\(var\(--kx-bar-h, 120px\) \+ 8px\); }/);
  assert.match(css, /\.kx-speak-layout \.kx-notes textarea { min-height: 120px; height: calc\(100vh - var\(--kx-bar-h, 120px\) - 360px\); max-height: 480px; }/);
});

test('SPRECHEN TEIL 2 SLIDES (SPEAKING §2): every practice form renders one deck per topic (5 slides, first shown), linked to its topic option by the "Thema n:" label; S0 decks stay unlinked; prev/next controls', async () => {
  const r = createRenderer();
  for (let n = 1; n <= 15; n++) {
    const pkg = pkgFor(syntheticBuild([path.join(ROOT, `exam-content/forms/synthetic/b1-synthetic-p${n}`)]), 'sprechen');
    const html = r.part(pkg.parts.find((p) => p.part === 2), {}, {});
    const decks = [...html.matchAll(/<section class="kx-deck" id="(kx-deck-[^"]+)" data-deck data-topic="(t[12])" aria-labelledby="\1-title"><h3 id="\1-title">(Thema [12]: [^<]+)<span class="kx-deck-mine" hidden> · Ihr Thema<\/span><\/h3><ol class="kx-slides">([\s\S]*?)<\/ol>/g)];
    assert.deepEqual(decks.map((d) => d[2]), ['t1', 't2'], `P${n}: decks t1, t2`);
    for (const d of decks) {
      assert.ok(d[3].startsWith(d[2] === 't1' ? 'Thema 1: ' : 'Thema 2: '), d[3]);
      assert.equal((d[4].match(/<li class="kx-slide/g) || []).length, 5); assert.equal((d[4].match(/ hidden>/g) || []).length, 4, 'one slide shown');
    }
    assert.match(html, /data-act="slide-prev" aria-controls="kx-deck-[^"]+" disabled>Vorherige Folie<\/button><span class="kx-deck-pos" aria-live="polite">Folie 1 von 5<\/span><button type="button" class="kx-btn kx-btn-quiet" data-act="slide-next" aria-controls="kx-deck-[^"]+">Nächste Folie<\/button>/);
    assert.equal((html.match(/class="kx-stim"/g) || []).length, 0, `P${n}: no slide as a loose text block`);
  }
  const s0 = r.part(pkgFor(build, 'sprechen').parts.find((p) => p.part === 2), {}, {});
  assert.equal((s0.match(/<section class="kx-deck"/g) || []).length, 2); assert.equal(/data-topic=/.test(s0), false, 'unmatched labels link nothing');
  const main = read('exam/js/main.js');
  assert.match(main, /d\.hidden = locked && !!chosen && !mine;/, 'after the lock only the chosen deck stays (none chosen → all)');
});

test('HÖREN VOLUME (AUDIO-SPEC A4): master gain between every play and the speakers; clamped 0–1; labelled range in the bar; never an answer', async () => {
  const { ControlledPlayer, clampVolume, volumeControl } = await import('../js/hoeren.js');
  const made = [];
  const ctx = { destination: { name: 'out' }, createGain() { const g = { gain: { value: 1 }, connect(d) { g.to = d; return d; } }; made.push(g); return g; },
    createBufferSource() { const s = { playbackRate: { value: 1 }, connect(d) { s.to = d; }, start() { setTimeout(() => s.onended && s.onended(), 0); }, stop() {} }; made.push(s); return s; },
    async decodeAudioData(b) { return { b }; } };
  const p = new ControlledPlayer(ctx, 0.5);
  assert.equal(p.gain.gain.value, 0.5); assert.equal(p.gain.to, ctx.destination);
  await p.preload('a', new ArrayBuffer(4)); await p.play('a');
  assert.equal(made.find((x) => x.playbackRate).to, p.gain, 'plays go through the master gain');
  p.setVolume(2); assert.equal(p.gain.gain.value, 1); p.setVolume(-1); assert.equal(p.gain.gain.value, 0); p.setVolume('x'); assert.equal(p.gain.gain.value, 1);
  assert.equal(clampVolume(0.35), 0.35);
  assert.equal(volumeControl(40), '<div class="kx-volume"><label for="kx-volume">Lautstärke</label><input type="range" id="kx-volume" data-volume min="0" max="100" step="5" value="40" aria-valuetext="40 %"><span class="kx-volume-val" aria-hidden="true">40 %</span></div>');
  const main = read('exam/js/main.js');
  assert.match(main, /S\.module === 'hoeren' \? volumeControl\(savedVolume\(\) \* 100\)/);
  const h = main.slice(main.indexOf("el.matches('[data-volume]')"), main.indexOf("el.matches('[data-volume]')") + 500);
  assert.equal(/autosave|S\.answers|\.stop\(|currentTime|playbackRate/.test(h), false, 'volume never saves, stops or seeks');
});

test('HÖREN PRELOAD (AUDIO-SPEC A3): each download has a timeout; a media failure is reported once and offered for retry in the page; session/lease errors keep their screens', () => {
  const main = read('exam/js/main.js');
  const fn = main.slice(main.indexOf('async function preloadHoeren'), main.indexOf('const HOEREN_PRELOAD_FAILED'));
  assert.match(fn, /const PRELOAD_TIMEOUT_MS = 30_000;|setTimeout\(\(\) => ctl\.abort\(\), PRELOAD_TIMEOUT_MS\)/);
  assert.match(main, /const PRELOAD_TIMEOUT_MS = 30_000;/);
  assert.match(fn, /if \(player\.isReady\(\[a\]\)\) continue;/, 'a retry loads only what is missing');
  assert.match(fn, /if \(e instanceof ExamApiError && !\/\^media_\/\.test\(e\.code\)\) throw e;/);
  assert.match(fn, /api\.hoerenEvent\(id, S\.lease, \{ type: 'preload_failed', reason: failed \}\)\.catch\(\(\) => \{\}\);/);
  assert.match(fn, /showAlert\('preload', HOEREN_PRELOAD_FAILED, \{ act: 'hoeren-reload', label: 'Erneut laden' \}\)/);
  assert.match(main, /const HOEREN_PRELOAD_FAILED = 'Die Hördateien konnten nicht vollständig geladen werden\.[^']*Ihre Antworten bleiben erhalten\. Hinweis: Der Hörteil beginnt nach einer kurzen Ladezeit auch dann, wenn noch nicht alle Dateien geladen sind\.';/);
  assert.match(read('exam/js/api.js'), /mediaBytes: async \(url, \{ signal \} = \{\}\) => \{\s*const res = await fetchImpl\(base \+ url, \{ credentials: 'omit', \.\.\.\(signal \? \{ signal \} : \{\}\) \}\);/);
});

test('ADMIN ATTEMPTS VIEW: on-request button (audited note); attempts with module table and labelled incidents; values escaped; no answer fields rendered', async () => {
  const { attemptsButton, attemptsList, INCIDENT_LABELS } = await import('../js/admin-render.js');
  assert.match(attemptsButton(), /<button class="kx-btn kx-btn-quiet" type="button" data-act="attempts">Versuche und Vorfälle anzeigen<\/button><\/div><div id="kx-att-slot"><\/div>/);
  assert.match(attemptsButton(), /ohne Antworten oder Ergebnisse\. Jeder Abruf wird protokolliert\./);
  assert.deepEqual(Object.keys(INCIDENT_LABELS).sort(), ['lease_takeover', 'listening_play_interrupted', 'listening_preload_failed', 'listening_recovery_replay']);
  const html = attemptsList({ limit: 20, attempts: [{ attempt_id: 'att_<x>', mode: 'synthetic_full', level: 'b1', module_scope: 'lesen', part_scope: null, status: 'in_progress', time_multiplier: 1.5, created_at: 0, started_at: null, completed_at: null,
    modules: [{ module: 'lesen', status: 'submitted', started_at: 1000, submitted_at: 2000, submit_kind: 'auto_deadline', recovery_used: false }],
    incidents: [{ kind: 'lease_takeover', at: 3000, detail: { generation: 2, note: '<b>' } }, { kind: 'mystery_kind', at: 4000, detail: {} }] }] });
  assert.match(html, /<h3>att_&lt;x&gt;<\/h3>/); assert.match(html, /läuft · angelegt – · nur Lesen · Zeit \+50 %/);
  assert.match(html, /<th scope="row">Lesen<\/th><td>abgegeben<\/td><td>1970-01-01 00:00 UTC<\/td><td>1970-01-01 00:00 UTC \(Zeitablauf\)<\/td><td>–<\/td>/);
  assert.match(html, /Auf anderem Gerät\/Tab übernommen <span class="kx-admin-detail">\(generation: 2, note: &lt;b&gt;\)<\/span>/);
  assert.match(html, /mystery_kind/, 'unknown kinds are shown as they are');
  assert.equal(attemptsList({ limit: 20, attempts: [] }), '<p role="status">Keine Versuche.</p>');
});

test('RESUME POSITION (GOETHE-B1-DIGITAL §10): Lesen/Schreiben remember the last answered or focused item per attempt+module on this device and bring it back below the measured bar after a reload, without focusing it', () => {
  const main = read('exam/js/main.js');
  assert.match(main, /const POS_MODULES = \['lesen', 'schreiben'\];/);
  assert.match(main, /const posKey = \(\) => `kx-pos:\$\{S\.attempt && S\.attempt\.attempt_id\}:\$\{S\.module\}`;/);
  assert.match(main, /app\.addEventListener\('focusin', \(e\) => rememberPosition\(e\.target\)\);/);
  assert.match(main, /rememberPosition\(el\);\n  const value = \{ option_id:/, 'an answer change also records the position');
  const fn = main.slice(main.indexOf('function restorePosition'), main.indexOf("app.addEventListener('focusin'"));
  assert.equal(/\.focus\(/.test(fn), false, 'never focuses (no phone keyboard)');
  assert.match(fn, /requestAnimationFrame\(go\); setTimeout\(go, 100\);/); assert.match(fn, /if \(done\) return; done = true;/);
  assert.match(fn, /bar\.getBoundingClientRect\(\)\.bottom \+ 8/, 'measured bar, not the possibly stale --kx-bar-h');
  assert.match(fn, /announce\(`Weiter in Teil \$\{part\.dataset\.part\}, bei der zuletzt bearbeiteten Aufgabe\.`\)/);
  assert.match(main, /markTopicDecks\(S\.locked\.size > 0\);\n  if \(!setupTabs\(\)\) trackCurrentPart\(\);\n  restorePosition\(\);\n\}/, 'restored once, when the module page is drawn (after the tabs are set up)');
});

test('RESULT SUMMARY (SCORING §5): "n von m bewerteten Modulen bestanden (Klarweg-Simulation)" from final modules only; open ratings named; no sum of points; nothing for single parts or when nothing is final', async () => {
  const { resultSummary, resultPage } = await import('../js/render.js');
  const M = (module, status, pass, points) => ({ module, status, pass, points, max_points: 100 });
  assert.equal(resultSummary([M('lesen', 'final', true, 80), M('hoeren', 'final', false, 50), M('schreiben', 'pending_rating'), M('sprechen', 'not_taken')]),
    '<p class="kx-result-summary">1 von 2 bewerteten Modulen bestanden (Klarweg-Simulation) · 1 Modul noch in Bewertung.</p>');
  assert.equal(resultSummary([M('lesen', 'final', true, 90)]), '<p class="kx-result-summary">1 von 1 bewerteten Modul bestanden (Klarweg-Simulation).</p>');
  assert.equal(resultSummary([M('lesen', 'final', true, 1), M('hoeren', 'final', true, 1), M('schreiben', 'final', true, 1), M('sprechen', 'final', true, 1)]),
    '<p class="kx-result-summary">4 von 4 bewerteten Modulen bestanden (Klarweg-Simulation).</p>');
  assert.equal(resultSummary([M('lesen', 'pending_rating'), M('hoeren', 'not_taken')]), '');
  const page = resultPage({ modules: [M('lesen', 'final', true, 80), M('hoeren', 'final', true, 70)], pass_points: 60 });
  assert.match(page, /2 von 2 bewerteten Modulen bestanden/); assert.equal(/150|Gesamtpunkt/.test(page), false, 'no summed points');
  assert.equal(/kx-result-summary/.test(resultPage({ practice_part: { module: 'lesen', part: 1 }, modules: [{ module: 'lesen', counts: { correct: 1, incorrect: 0, unanswered: 0 } }] })), false);
});

test('LEAD REVIEW (SCORING §4.4): disagreement list with criterion, rounds and bands; a labelled note field per flag; escaped; empty state; monitoring-only wording', async () => {
  const { disagreementSection } = await import('../js/rating.js');
  const key = 'att_00000000-0000-4000-8000-000000000000:sprechen:pron:aussprache';
  const html = disagreementSection({ threshold: 2, more: false, flags: [{ key, attempt_id: 'att_00000000-0000-4000-8000-000000000000', module: 'sprechen', item_id: 'sprechen:pron', criterion: 'aussprache', r1: 'B', r2: 'D', diff: 2 }] }, esc);
  assert.match(html, /<h2 id="kx-lead-title">Bewertungsabweichungen \(Lead-Prüfung\)<\/h2>/);
  assert.match(html, /das Ergebnis folgt immer der offiziellen Verrechnung\. Erst nach der endgültigen Wertung sichtbar\./);
  assert.match(html, /<strong>Aussprache<\/strong> · Sprechen · Aussprache \(ganzes Modul\) · Runde 1: B, Runde 2: D \(2 Bänder\)/);
  assert.match(html, /<form class="kx-flag-review" data-key="att_00000000-0000-4000-8000-000000000000:sprechen:pron:aussprache" novalidate><label for="(kx-fr-[A-Za-z0-9_-]+)">Notiz zur Prüfung<\/label><input id="\1" name="note" required minlength="3" maxlength="500">/);
  assert.equal(disagreementSection({ threshold: 2, flags: [] }, esc).includes('Keine offenen Abweichungen.'), true);
  assert.equal(disagreementSection(null, esc), '');
  assert.match(disagreementSection({ threshold: 2, flags: [{ key, attempt_id: 'att_x', module: 'schreiben', item_id: 'itm:<b>', criterion: 'x"y', r1: 'A', r2: 'C', diff: 2 }] }, esc), /itm:&lt;b&gt;/);
});

test('ITEM PALETTE (ENGINE §9.1): toggle in the part navigation (aria-expanded/controls); every item as a jump with its state in words; summary; closed by default', async () => {
  const { moduleNav, itemPalette } = await import('../js/render.js');
  const progress = [{ part: 1, answered: 1, total: 2, items: [{ item_id: 'itm:a', no: '1', answered: true }, { item_id: 'itm:b', no: '2', answered: false }] },
    { part: 2, answered: 0, total: 1, items: [{ item_id: 'itm:c', no: '3', answered: false }] }];
  const closed = moduleNav(progress, 1);
  assert.match(closed, /<li><button type="button" class="kx-palette-toggle" data-act="palette" aria-expanded="false" aria-controls="kx-palette">Übersicht<\/button><\/li><\/ol><\/nav>$/);
  const open = moduleNav(progress, 1, { palette: true, flags: new Set(['itm:b']) });
  assert.match(open, /aria-expanded="true"/);
  assert.match(open, /<div class="kx-palette" id="kx-palette" role="region" aria-label="Aufgabenübersicht"><p class="kx-palette-sum">1 beantwortet · 2 offen · 1 markiert<\/p>/);
  assert.match(open, /<a href="#item-itm_a" data-palette-jump class="kx-pal is-answered">1<span class="kx-sr">: beantwortet<\/span><\/a>/);
  assert.match(open, /<a href="#item-itm_b" data-palette-jump class="kx-pal is-open is-flagged">2<span class="kx-sr">: offen, markiert<\/span><\/a>/);
  assert.match(itemPalette(progress), /1 beantwortet · 2 offen<\/p>/, 'no "markiert" without flags');
  const main = read('exam/js/main.js');
  assert.match(main, /moduleNav\(progress\(\), S\.currentPart, \{ palette: !!S\.paletteOpen, flags: S\.flags, tabs: tabsMode\(\) \}\)/);
  assert.match(main, /S\.paletteOpen = false; if \(item\) revealPart\(item\); paintNav\(\);\s*if \(item\) \{ item\.scrollIntoView\(\{ block: 'start' \}\); const c = item\.querySelector/);
  const css = read('exam/exam.css');
  assert.match(css, /\.kx-pal \{[^}]*min-width: 44px; min-height: 44px;/); assert.match(css, /\.kx-palette \{ max-height: 40vh; overflow-y: auto;/);
});

test('PART TABS (GOETHE-B1-DIGITAL §2.3/§4): Lesen/Schreiben parts as an ARIA tablist — roving tabindex, aria-selected/controls, overview beside (not in) the tablist; Hören keeps links', async () => {
  const { moduleNav, partTabs } = await import('../js/render.js');
  const progress = [{ part: 1, answered: 1, total: 2, items: [] }, { part: 2, answered: 0, total: 3, items: [] }];
  const html = moduleNav(progress, 2, { tabs: true });
  assert.match(html, /^<nav class="kx-nav" aria-label="Teile dieses Moduls"><div class="kx-nav-row"><ol role="tablist" aria-label="Teile">/);
  assert.match(html, /<li role="presentation"><button type="button" role="tab" class="kx-tab" id="tab-part-1" data-tab="1" aria-controls="panel-part-1" aria-selected="false" tabindex="-1">Teil 1 <span class="kx-nav-count" data-progress-part="1">1\/2<\/span><\/button><\/li>/);
  assert.match(html, /id="tab-part-2" data-tab="2" aria-controls="panel-part-2" aria-selected="true" tabindex="0">Teil 2/);
  assert.match(html, /<\/ol><button type="button" class="kx-palette-toggle" data-act="palette" aria-expanded="false" aria-controls="kx-palette">Übersicht<\/button><\/div><\/nav>$/, 'the overview toggle is outside the tablist');
  assert.match(partTabs(progress, 99), /id="tab-part-1"[^>]*aria-selected="true" tabindex="0"/, 'an unknown part selects the first tab');
  assert.match(moduleNav(progress, 1), /<a href="#part-1"/, 'without tabs (Hören): part links as before');
  const main = read('exam/js/main.js');
  assert.match(main, /const TAB_MODULES = \['lesen', 'schreiben'\];/);
  assert.match(main, /const tabsMode = \(\) => TAB_MODULES\.includes\(S\.module\) && document\.querySelectorAll\('#kx-main \.kx-part'\)\.length > 1;/);
  assert.match(main, /sec\.setAttribute\('role', 'tabpanel'\); sec\.setAttribute\('aria-labelledby', `tab-part-\$\{n\}`\);/);
  assert.match(main, /if \(focus\) \{ const h = document\.getElementById\(`part-\$\{n\}`\); if \(h\) \{ h\.setAttribute\('tabindex', '-1'\); h\.focus/, 'activation moves focus to the part heading');
  assert.match(main, /if \(changed && !quiet\) announceSr\(`Teil \$\{n\} geöffnet\.`\);/); assert.match(main, /<p class="kx-sr" id="kx-sr-announce" role="status" aria-live="polite"><\/p>/);
  assert.match(main, /const to = \{ ArrowRight: i \+ 1, ArrowLeft: i - 1, Home: 0, End: tabs\.length - 1 \}\[e\.key\];/);
  const show = main.slice(main.indexOf('function showPart'), main.indexOf('function revealPart'));
  assert.equal(/autosave|S\.answers|\.value\s*=|innerHTML/.test(show), false, 'switching never touches answers or re-renders parts');
  assert.match(read('exam/exam.css'), /\.kx-part\[hidden\] \{ display: none; \}/);
});

test('BACK GUARD (GOETHE-B1-DIGITAL §4 Global): while a module runs, Back opens a modal "Prüfung verlassen? Die Zeit läuft weiter."; only a return to the marked exam entry counts (not in-page #links); stay keeps the guard; leave flushes and goes home', () => {
  const main = read('exam/js/main.js');
  assert.match(main, /paint\(\);\n  guardBack\(\);/, 'guarded when the module page is drawn');
  assert.match(main, /history\.replaceState\(\{ kxBase: true \}, '', location\.href\); history\.pushState\(\{ kxGuard: true \}, '', location\.href\);/);
  assert.match(main, /if \(leaving \|\| !\(e\.state && e\.state\.kxBase\) \|\| !moduleRunning\(\) \|\| !\$\('#kx-main'\)\) return;/, 'fragment navigations (state null) and non-running pages are ignored');
  assert.match(main, /history\.pushState\(\{ kxGuard: true \}, '', location\.href\);   \/\/ stay until the learner decides/);
  assert.match(main, /if \(!d\.open\) d\.showModal\(\);/, 'a native modal dialog (focus trapped, Escape = stay)');
  assert.match(main, /if \(S\.autosave\) await S\.autosave\.flush\(\)\.catch\(\(\) => \{\}\);\n  \/\/ an explicit destination[^\n]*\n  location\.assign\('\.\.\/'\);/);
  assert.match(main, /<dialog class="kx-leave" id="kx-leave" aria-labelledby="kx-leave-title" aria-describedby="kx-leave-text">/);
  assert.match(main, /<h2 id="kx-leave-title">Prüfung verlassen\?<\/h2><p id="kx-leave-text">Die Zeit läuft weiter/);
  assert.match(main, /data-leave="stay">In der Prüfung bleiben<\/button><button type="button" class="kx-btn kx-btn-quiet" data-leave="go">Prüfung verlassen<\/button>/, 'staying is the primary action');
});

test('SAVE TRIGGERS (GOETHE-B1-DIGITAL §5): flush options reach send (keepalive on pagehide); flush when hidden, on pagehide and on every part change', async () => {
  const sent = [];
  const a = new Autosave({ send: async (batch, requestId, opts) => { sent.push({ n: batch.length, opts }); return { results: batch.map((b) => ({ item_id: b.item_id, current_seq: b.seq })) }; },
    store: memoryStore(), key: 'k', debounceMs: 60_000, setTimer: () => 1, clearTimer: () => {} });
  await a.init?.();
  a.set('itm:a', { option_id: 'x' });
  await a.flush({ keepalive: true });
  assert.deepEqual(sent, [{ n: 1, opts: { keepalive: true } }]);
  a.set('itm:b', { option_id: 'y' }); await a.flush();
  assert.deepEqual(sent[1].opts, {});
  const main = read('exam/js/main.js');
  assert.match(main, /const flushSoon = \(opts\) => \{ if \(S\.autosave && S\.autosave\.hasPending\(\)\) S\.autosave\.flush\(opts\)\.catch\(\(\) => \{\}\); \};/);
  assert.match(main, /document\.addEventListener\('visibilitychange', \(\) => \{ if \(document\.visibilityState === 'hidden'\) flushSoon\(\); \}\);/);
  assert.match(main, /window\.addEventListener\('pagehide', \(\) => \{ flushSoon\(\{ keepalive: true \}\); if \(S\.onPageHide\) S\.onPageHide\(\); \}\);/);
  assert.match(main, /if \(changed\) flushSoon\(\);   \/\/ §5: saved on part change/);
  assert.match(main, /send: \(batch, requestId, opts\) => api\.save\(id, S\.lease, module, batch, requestId, opts\),/);
  assert.match(read('exam/js/api.js'), /save: \(id, leaseId, module, answers, requestId, \{ keepalive = false \} = \{\}\) => call\('POST', att\(id, `\/modules\/\$\{module\}\/answers`\), \{ body: rq\(\{ lease_id: leaseId, answers, request_id: requestId \}\), keepalive \}\),/);
});

test('SUBMIT REVIEW TIME (GOETHE-B1-DIGITAL §10): the confirmation shows the time remaining, kept current by the timer tick; none when untimed', async () => {
  const { reviewPanel } = await import('../js/render.js');
  const progress = [{ part: 1, answered: 0, total: 1, items: [{ item_id: 'itm:a', no: '1', answered: false }] }];
  assert.match(reviewPanel(progress, new Set(), 754_000), /<p class="kx-review-time">Verbleibende Zeit: <span data-review-remaining>12:34<\/span><\/p>/);
  assert.equal(/kx-review-time/.test(reviewPanel(progress, new Set(), null)), false, 'untimed: no time line');
  assert.equal(/kx-review-time/.test(reviewPanel(progress)), false);
  const main = read('exam/js/main.js');
  assert.match(main, /const rv = \$\('\[data-review-remaining\]'\); if \(rv\) rv\.textContent = formatRemaining\(rem\);/);
  assert.match(main, /function reviewRemaining\(\) \{ const m = moduleState\(\); return !m \|\| S\.attempt\.part_scope != null \|\| !m\.deadline_at \? null : clock\.remaining\(m\.deadline_at\); \}/);
  assert.equal((main.match(/reviewPanel\(progress\(\) \|\| \[\], S\.flags, reviewRemaining\(\)\)/g) || []).length, 2, 'both the first draw and every redraw');
});

test('INTERSTITIAL (GOETHE-B1-DIGITAL §2.2): the next module intro states the module just submitted with its answered count; without counts only the submission; announced', async () => {
  const { submittedNote, previousModule } = await import('../js/render.js');
  assert.equal(submittedNote({ module: 'lesen', answered: 28, total: 30 }), '<p class="kx-interstitial" role="status">Lesen abgegeben · 28 von 30 Aufgaben beantwortet.</p>');
  assert.equal(submittedNote({ module: 'schreiben', answered: 3, total: 3 }), '<p class="kx-interstitial" role="status">Schreiben abgegeben · 3 von 3 Texten geschrieben.</p>');
  assert.equal(submittedNote({ module: 'hoeren' }), '<p class="kx-interstitial" role="status">Hören abgegeben.</p>');
  assert.equal(submittedNote(null), ''); assert.equal(submittedNote({ module: 'x' }), '');
  assert.deepEqual(['lesen', 'hoeren', 'schreiben', 'sprechen'].map(previousModule), [null, 'lesen', 'hoeren', 'schreiben']);
  const main = read('exam/js/main.js');
  assert.match(main, /S\.lastSubmitted = pg \? \{ module: S\.module, answered: pg\.reduce/);
  assert.match(main, /<main class="kx-card">\$\{prevNote\(module\)\}<p class="kx-eyebrow">Nächstes Modul<\/p>/);
  assert.match(main, /if \(!m \|\| m\.status !== 'submitted'\) return '';/);
});

test('PRE-EXAM CHECKS (GOETHE-B1-DIGITAL §2.1): browser support by features per module; keyboard (umlaut) check before Schreiben, informational, never an answer', async () => {
  const { missingFeatures, keyboardNote, KEYBOARD_CHECK, environmentNotes } = await import('../js/precheck.js');
  const full = { fetch() {}, AbortController: function () {}, HTMLDialogElement: function () {}, AudioContext: function () {}, MediaRecorder: function () {}, navigator: { mediaDevices: { getUserMedia() {} } } };
  for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) assert.deepEqual(missingFeatures(m, full), [], m);
  assert.deepEqual(missingFeatures('lesen', { ...full, HTMLDialogElement: undefined }), ['Dialogfenster']);
  assert.deepEqual(missingFeatures('hoeren', { ...full, AudioContext: undefined }), ['Audiowiedergabe (Web Audio)']);
  assert.deepEqual(missingFeatures('hoeren', { ...full, AudioContext: undefined, webkitAudioContext: function () {} }), [], 'Safari prefix accepted');
  assert.deepEqual(missingFeatures('sprechen', { ...full, MediaRecorder: undefined, navigator: {} }), ['Mikrofonzugriff', 'Aufnahme (MediaRecorder)']);
  assert.deepEqual(missingFeatures('lesen', { ...full, MediaRecorder: undefined }), [], 'only what the module needs');
  assert.match(environmentNotes({ missing: ['Dialogfenster'] })[0].text, /^Ihr Browser unterstützt nicht alles, was dieses Modul braucht \(Dialogfenster\)\. Bitte verwenden Sie eine aktuelle Version von Chrome, Edge, Firefox oder Safari\.$/);
  assert.deepEqual(environmentNotes({}), []);
  assert.equal(keyboardNote(''), ''); assert.equal(keyboardNote('äöüß'), 'Ihre Tastatur kann Umlaute und ß eingeben.');
  assert.match(keyboardNote('ae oe'), /^Noch nicht alle Zeichen \(ä ö ü ß\)\. Kein Problem: Im Editor gibt es eine Zeichenleiste/);
  assert.match(keyboardNote('ä ö ü'), /\(ß\)/);
  assert.match(KEYBOARD_CHECK, /<label for="kx-kbd-test">Tippen Sie zur Probe: ä ö ü ß<\/label><input id="kx-kbd-test" data-kbd-test type="text" lang="de"/);
  assert.equal(/data-item/.test(KEYBOARD_CHECK), false, 'never an answer field');
  const main = read('exam/js/main.js');
  assert.match(main, /module === 'schreiben' \? KEYBOARD_CHECK : ''/);
  assert.match(main, /missing: missingFeatures\(module\)/);
  assert.match(main, /if \(el\.matches && el\.matches\('\[data-kbd-test\]'\)\) \{ const msg = \$\('#kx-kbd-msg'\); if \(msg\) msg\.textContent = keyboardNote\(el\.value\); return; \}/);
});

test('BACK GUARD RELEASE: once no module runs, the guard entry is taken off (one Back leaves); never during a resume; the page owns its scroll position', () => {
  const main = read('exam/js/main.js');
  assert.match(main, /if \(a\.kind !== 'resume'\) releaseBackGuard\(\);/);
  assert.match(main, /function releaseBackGuard\(\) \{ if \(history\.state && history\.state\.kxGuard && !moduleRunning\(\)\) history\.back\(\); \}/);
  assert.match(main, /if \('scrollRestoration' in history\) history\.scrollRestoration = 'manual';/);
  // the release steps onto the kxBase entry while nothing runs: the popstate handler must ignore it
  assert.match(main, /if \(leaving \|\| !\(e\.state && e\.state\.kxBase\) \|\| !moduleRunning\(\) \|\| !\$\('#kx-main'\)\) return;/);
});

test('EXAM TEXT + TIMER ZERO: module text 17 px from 768 px (16 on phones), line-height 1.55 (ENGINE §9.2/§9.3, OD-39 default); unsent answers are sent the moment the timer reaches zero', () => {
  const css = read('exam/exam.css');
  assert.match(css, /\.kx-module \{ line-height: 1\.55; \}\n@media \(min-width: 768px\) \{ \.kx-module \{ font-size: 17px; \} \}/);
  assert.match(css, /body \{[^}]*font: 400 16px\/1\.6 var\(--font-ui\);/, 'other pages unchanged');
  assert.match(read('exam/js/main.js'), /if \(rem === 0\) \{ clearInterval\(S\.timer\); flushSoon\(\); setTimeout\(refresh, 11_000\); \}/);
});
