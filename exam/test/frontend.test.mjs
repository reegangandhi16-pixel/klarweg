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
  assert.ok(/act === 'submit-confirm'\)[\s\S]{0,200}api\.submit\(/.test(main), 'only the confirmation submits');
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
  assert.match(html, /<th scope="row">14\.10\.2026<\/th><td>Übung &lt;P1&gt;<\/td><td>70 \/ 100<\/td><td>100 \/ 100<\/td><td>in Bewertung<\/td><td>–<\/td>/);
  assert.match(html, /data-act="last-result" data-attempt="att_x">Ergebnis ansehen/);
  assert.equal(attemptHistory({ attempts: [] }), '');
});

test('ACCESSIBILITY (live regions): the redrawn header is not a live region; saving problems and the recovery are announced in the persistent status region; the word count is read with the textarea, not on every keystroke', async () => {
  const { header, saveAnnouncement, createRenderer } = await import('../js/render.js');
  for (const st of ['saved', 'pending', 'saving', 'offline', 'stopped']) assert.equal(/aria-live/.test(header({ module: 'lesen', remainingMs: 60000, saveState: st })), false, `header (${st})`);
  assert.equal(saveAnnouncement('saved', 'pending'), null); assert.equal(saveAnnouncement('pending', 'saving'), null); assert.equal(saveAnnouncement('saving', 'saved'), null);
  assert.match(saveAnnouncement('saving', 'offline'), /nicht möglich/); assert.match(saveAnnouncement('offline', 'saved'), /Wieder verbunden/);
  assert.match(saveAnnouncement('saving', 'stopped'), /gestoppt/); assert.equal(saveAnnouncement('offline', 'offline'), null);
  const pkg = { module: 'schreiben', parts: [{ part: 1, tasks: [{ task_id: 't', instructions: 'x', stimuli: [], items: [{ item_id: 'itm:b1:x-s1', interaction: 'text_response', stem: 'Schreiben Teil 1', response_spec: { type: 'text', target_words: 80 } }] }] }] };
  const html = createRenderer().module(pkg, {}, {});
  const ta = html.match(/<textarea[^>]*aria-describedby="([^"]+)"/);
  assert.ok(ta, 'the textarea is described by its word count');
  assert.match(html, new RegExp(`<p class="kx-wc" id="${ta[1]}">`)); assert.equal(/class="kx-wc"[^>]*aria-live/.test(html), false);
  const main = fs.readFileSync(new URL('../js/main.js', import.meta.url), 'utf8');
  assert.match(main, /onState: \(st\) => \{ const say = saveAnnouncement\(S\.saveState, st\); S\.saveState = st; if \(say\) announce\(say\);/);
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
  assert.deepEqual(errorView({ code: 'auth_required', status: 401 }).actions, []);
  // any other refusal: no claim about a lost connection or a local queue
  for (const code of ['module_locked', 'another_module_running', 'review_not_available', 'some_new_code']) {
    const v = errorView({ code, status: 409 });
    assert.equal(v.title, 'Aktion nicht möglich', code); assert.equal(/Verbindung|lokal gesichert/.test(v.body), false, code); assert.ok(v.body.includes(`(${code})`));
  }
  // every view is used through fail(): escaped buttons, no browser dialog
  const main = fs.readFileSync(new URL('../js/main.js', import.meta.url), 'utf8');
  assert.match(main, /function fail\(e\) \{\s*const code = e instanceof ExamApiError \? e\.code : 'network';\s*showError\(errorView\(e instanceof ExamApiError \? \{ code, status: e\.status \} : \{ code \}\)\);/);
  assert.match(main, /function showError\(v\) \{ message\(v\.title, v\.body, v\.actions\.map\(\(a\) => `<button class="kx-btn" data-act="\$\{esc\(a\.act\)\}">\$\{esc\(a\.label\)\}<\/button>`\)\.join\(''\)\); \}/, 'buttons escaped');
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
  assert.match(main, /else if \(code === 'lease_expired'\) onLeaseExpired\(\); else refresh\(\);/, 'autosave path');
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
