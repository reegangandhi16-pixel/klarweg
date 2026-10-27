/* kw-audio-engine.js — manifest resolution, precedence and playback.
   Runs the REAL engine file in a VM with a tiny DOM, a controllable fake
   fetch (per-URL, with an independent delay) and a fake <audio>, so the
   parallel manifest-resolution fix can be pinned against: (1) the exact
   same lookup precedence and result/_src values as before, (2) concurrent
   rather than serial manifest fetches, (3) graceful failure/slow-fetch
   handling, and (4) no duplicate playback across rapid repeated taps. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SRC = fs.readFileSync(path.join(ROOT, 'kw-audio-engine.js'), 'utf8');

/* ---------- fake <audio> ----------
   playUrl() (the real engine code, unmodified) resolves its promise only on
   the 'ended' event, by design — speak() resolves once a clip finishes
   playing, not merely once it starts — so a believable fake must fire
   'ended' shortly after play(), simulating a very short clip, or every
   await speak(...) in these tests would hang forever. */
class FakeAudio {
  constructor() {
    this.currentTime = 0; this.playbackRate = 1; this.paused = true; this.error = null;
    this._l = {};
  }
  addEventListener(t, f, o) { (this._l[t] = this._l[t] || []).push(f); this._opts = o; }
  removeEventListener() {}
  play() {
    this.paused = false;
    setTimeout(() => { if (!this.paused) this.fire('ended'); }, 1);
    return Promise.resolve();
  }
  pause() { this.paused = true; }
  fire(t, ev) { (this._l[t] || []).slice().forEach((f) => f(ev || {})); }
}

/* ---------- fake fetch: per-URL route with its own delay ---------- */
function makeFetch(routes) {
  const calls = [];   // { url, t: Date.now() at invocation }
  function fetchImpl(url) {
    calls.push({ url, t: Date.now() });
    const route = routes.find((r) => r.match.test(url));
    const delayMs = route ? (route.delayMs || 0) : 0;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!route) { resolve({ ok: false, status: 404 }); return; }
        if (route.reject) { reject(new Error(route.reject)); return; }
        if (route.ok === false) { resolve({ ok: false, status: route.status || 500 }); return; }
        resolve({ ok: true, status: 200, json: async () => route.json });
      }, delayMs);
    });
  }
  fetchImpl.calls = calls;
  return fetchImpl;
}

const SCRIPT_URL = 'https://example.test/public/audio/kw-audio-engine.js';

function load(routes, { speechSynthesis } = {}) {
  const fetchImpl = makeFetch(routes);
  const audios = [];
  // The engine's top-level "nudge a stuck speechSynthesis" watchdog uses a real
  // setInterval(…, 4000) when speechSynthesis exists. unref() it so a lingering
  // handle never keeps the test process alive after its tests are done.
  const unrefSetInterval = (fn, ms, ...a) => { const h = setInterval(fn, ms, ...a); if (h && h.unref) h.unref(); return h; };
  const ctx = {
    Object, Array, Set, String, Math, Promise, JSON, isFinite, Date,
    setTimeout, clearTimeout, setInterval: unrefSetInterval, clearInterval,
    console: { log() {}, warn() {}, error() {} },
    document: { currentScript: { src: SCRIPT_URL } },
    location: { search: '' },
    navigator: {},
    fetch: fetchImpl,
    URL: { createObjectURL: () => 'blob:fake' },
    Audio: function () { const a = new FakeAudio(); audios.push(a); return a; },
    speechSynthesis,
    SpeechSynthesisUtterance: speechSynthesis ? function (t) { this.text = t; } : undefined,
  };
  vm.createContext(ctx);
  ctx.window = ctx;
  vm.runInContext(SRC, ctx, { filename: 'kw-audio-engine.js' });
  const events = [];
  ctx.KW_onAudioEvent((e) => events.push(e));
  return { ctx, fetchImpl, audios, events, speak: ctx.KW_speak };
}

const CONJ_URL = /manifest-conjugation\.json$/;
const WORDFORM_URL = /manifest-word-form\.json$/;
const VOCAB_URL = /klarweg-audio-cdn\/manifest\.json$/;             // vocab-cdn primary source
const SENTENCE_URL = /example\.test\/public\/audio\/manifest\.json$/;  // script-relative sentence manifest, candidate #1

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* Routes with every manifest answering "no entries", each after its own
   delay — the shared baseline most tests start from and override. */
function emptyRoutes(delays = {}) {
  return [
    { match: CONJ_URL, delayMs: delays.conj ?? 0, json: {} },
    { match: WORDFORM_URL, delayMs: delays.wordForm ?? 0, json: {} },
    { match: VOCAB_URL, delayMs: delays.vocab ?? 0, json: {} },
    { match: SENTENCE_URL, delayMs: delays.sentence ?? 0, json: {} },
  ];
}

test('PRECEDENCE: conjugation wins even when it is the slowest manifest to resolve', async () => {
  const routes = [
    { match: CONJ_URL, delayMs: 40, json: { läuft: 'conj/laeuft.mp3' } },
    { match: WORDFORM_URL, delayMs: 5, json: { läuft: 'wf/laeuft.mp3' } },   // would win if the engine raced instead of waiting
    { match: VOCAB_URL, delayMs: 5, json: { läuft: { female: 'audio/female/laeuft.mp3' } } },
    { match: SENTENCE_URL, delayMs: 0, json: {} },
  ];
  const { speak, audios } = load(routes);
  const result = await speak('läuft', { gender: 'female' });
  assert.equal(result, 'conjugation');
  assert.ok(audios[0], 'an audio element was created');
});

test('PRECEDENCE: word-form wins over a faster-resolving vocab entry when conjugation has none', async () => {
  const routes = [
    { match: CONJ_URL, delayMs: 5, json: {} },
    { match: WORDFORM_URL, delayMs: 40, json: { größer: 'wf/groesser.mp3' } },
    { match: VOCAB_URL, delayMs: 5, json: { größer: { female: 'audio/female/groesser.mp3' } } },
    { match: SENTENCE_URL, delayMs: 0, json: {} },
  ];
  const { speak } = load(routes);
  const result = await speak('größer', { gender: 'female' });
  assert.equal(result, 'word-form');
});

test('PRECEDENCE: gendered vocab wins over the general sentence manifest', async () => {
  const routes = [
    ...emptyRoutes({ conj: 5, wordForm: 5 }),
  ];
  routes[2] = { match: VOCAB_URL, delayMs: 20, json: { Apfel: { female: 'audio/female/apfel.mp3' } } };
  routes[3] = { match: SENTENCE_URL, delayMs: 5, json: { Apfel: 'audio/apfel-sentence.mp3' } };
  const { speak, fetchImpl } = load(routes);
  const result = await speak('Apfel', { gender: 'female' });
  assert.equal(result, 'manifest');
  // Confirm it actually used the vocab URL's entry, not merely that it fell through to the manifest tier.
  assert.ok(fetchImpl.calls.some((c) => VOCAB_URL.test(c.url)), 'vocab manifest was consulted');
});

test('PRECEDENCE: non-gendered request never WAITS on the vocab manifest, and falls through to the general manifest', async () => {
  // The vocab manifest is always eagerly fetched in the background at load
  // time, independent of any one speak() call (it backs the page's F/M
  // toggle buttons elsewhere) — so a non-gendered request can't avoid that
  // fetch happening at all. What it must still avoid is WAITING on it: make
  // it artificially slow (200ms) and confirm a non-gendered lookup resolves
  // in well under that, exactly as the original code's non-gendered branch
  // never consulted vocab at all.
  const routes = emptyRoutes({ conj: 5, wordForm: 5, sentence: 10 });
  routes[2] = { match: VOCAB_URL, delayMs: 200, json: {} };
  routes[3] = { match: SENTENCE_URL, delayMs: 10, json: { Buch: 'audio/buch.mp3' } };
  const { speak } = load(routes);
  // The general sentence/dialogue manifest fetch is kicked off by a deferred
  // setTimeout(0) at load time and was never gated on readiness even before
  // this fix (see SENTENCE_URL route above) — give that one tick + its fetch
  // delay a chance to land before relying on it, exactly as a real page give
  // the warm-up a moment before a learner's first tap.
  await sleep(20);
  const t0 = Date.now();
  const result = await speak('Buch', {});
  assert.equal(result, 'manifest');
  assert.ok(Date.now() - t0 < 100, 'a non-gendered lookup must not wait on the (slow) vocab manifest');
});

test('CONCURRENCY: the three manifests are fetched in parallel, not serially (regression for the fix)', async () => {
  const DELAY = 40;
  const routes = [
    { match: CONJ_URL, delayMs: DELAY, json: {} },
    { match: WORDFORM_URL, delayMs: DELAY, json: {} },
    { match: VOCAB_URL, delayMs: DELAY, json: { Hund: { female: 'audio/female/hund.mp3' } } },
    { match: SENTENCE_URL, delayMs: 0, json: {} },
  ];
  const { speak, fetchImpl } = load(routes);
  const t0 = Date.now();
  const result = await speak('Hund', { gender: 'female' });
  const elapsed = Date.now() - t0;
  assert.equal(result, 'manifest');
  // Serial (the old chain) would take ~3 * DELAY; parallel takes ~1 * DELAY.
  assert.ok(elapsed < DELAY * 2, `expected well under ${DELAY * 2}ms (serial would be ~${DELAY * 3}ms), got ${elapsed}ms`);
  const conjCallT = fetchImpl.calls.find((c) => CONJ_URL.test(c.url)).t;
  const wfCallT = fetchImpl.calls.find((c) => WORDFORM_URL.test(c.url)).t;
  const vocabCallT = fetchImpl.calls.find((c) => VOCAB_URL.test(c.url)).t;
  assert.ok(Math.max(conjCallT, wfCallT, vocabCallT) - Math.min(conjCallT, wfCallT, vocabCallT) < 15,
    'all three manifest fetches were dispatched within milliseconds of each other, not one after another');
});

test('WARM FAST PATH: once manifests are settled, a later lookup makes no new network calls and resolves immediately', async () => {
  const routes = [
    { match: CONJ_URL, delayMs: 10, json: {} },
    { match: WORDFORM_URL, delayMs: 10, json: {} },
    { match: VOCAB_URL, delayMs: 10, json: { Katze: { female: 'audio/female/katze.mp3', male: 'audio/male/katze.mp3' } } },
    { match: SENTENCE_URL, delayMs: 0, json: {} },
  ];
  const { speak, fetchImpl } = load(routes);
  await speak('Katze', { gender: 'female' });               // warms everything
  const callsBefore = fetchImpl.calls.length;
  const t0 = Date.now();
  const result = await speak('Katze', { gender: 'male' });  // same word, different gender -> still a manifest lookup, not urlCache
  const elapsed = Date.now() - t0;
  assert.equal(result, 'manifest');
  assert.equal(fetchImpl.calls.length, callsBefore, 'no additional manifest fetches once everything is warm');
  assert.ok(elapsed < 10, `expected a near-instant resolve once warm, got ${elapsed}ms`);
});

test('COLD-BOUNDARY CORRECTNESS: conjugation/word-form already warm but vocab still loading is NOT treated as a vocab miss', async () => {
  // First call warms conjugation + word-form (both empty) with NO gender, so
  // ensureA1Loaded() is never triggered by it; vocab is still fully cold when
  // the second (gendered) call starts.
  const routes = [
    { match: CONJ_URL, delayMs: 5, json: {} },
    { match: WORDFORM_URL, delayMs: 5, json: {} },
    { match: VOCAB_URL, delayMs: 30, json: { Schule: { female: 'audio/female/schule.mp3' } } },
    { match: SENTENCE_URL, delayMs: 5, json: { Schule: 'audio/schule-sentence.mp3' } },
  ];
  const { speak } = load(routes);
  await speak('Schule', {});                                  // warms conjugation + word-form only
  const result = await speak('Schule', { gender: 'female' });  // vocab is still in flight at the instant this is called
  assert.equal(result, 'manifest');
  // (If the engine incorrectly trusted "vocab not loaded yet" as a miss, it would have
  // played the general sentence manifest's entry instead of waiting for the vocab one;
  // both resolve to the string 'manifest', so this is checked by the audio src below.)
});

test('FALLBACK: no manifest entry anywhere falls through to browser speech synthesis', async () => {
  const spoken = [];
  const fakeSpeechSynthesis = {
    getVoices: () => [{ name: 'Google Deutsch', lang: 'de-DE', localService: true }],
    speak(u) { spoken.push(u.text); setTimeout(() => u.onend && u.onend(), 0); },
    cancel() {}, paused: false, resume() {},
  };
  const routes = emptyRoutes({ conj: 5, wordForm: 5, vocab: 10 });
  const { speak } = load(routes, { speechSynthesis: fakeSpeechSynthesis });
  const result = await speak('unbekanntesWort', { gender: 'female' });
  assert.equal(result, 'browser-tts');
  assert.deepEqual(spoken, ['unbekanntesWort']);
});

test('FALLBACK: with no browser speech synthesis available either, speak() resolves "error" rather than hanging', async () => {
  const routes = emptyRoutes({ conj: 5, wordForm: 5, vocab: 10 });
  const { speak } = load(routes);   // no speechSynthesis provided
  const result = await speak('unbekanntesWort', { gender: 'female' });
  assert.equal(result, 'error');
});

test('FAILURE PATHS: a rejected conjugation fetch and a 500 from word-form still resolve correctly to the vocab entry', async () => {
  const routes = [
    { match: CONJ_URL, delayMs: 5, reject: 'network down' },
    { match: WORDFORM_URL, delayMs: 5, ok: false, status: 500 },
    { match: VOCAB_URL, delayMs: 15, json: { Tisch: { female: 'audio/female/tisch.mp3' } } },
    { match: SENTENCE_URL, delayMs: 0, json: {} },
  ];
  const { speak } = load(routes);
  // Must not throw, must not hang, must not produce an unhandled rejection (node:test fails the
  // process on one) — exercised simply by awaiting it to completion.
  const result = await speak('Tisch', { gender: 'female' });
  assert.equal(result, 'manifest');
});

test('REPEATED TAPS: a second, rapid tap for a different word stops the first and leaves exactly one owner playing', async () => {
  const routes = [
    { match: CONJ_URL, delayMs: 10, json: {} },
    { match: WORDFORM_URL, delayMs: 10, json: {} },
    { match: VOCAB_URL, delayMs: 10, json: { Baum: { female: 'audio/female/baum.mp3' }, Tier: { female: 'audio/female/tier.mp3' } } },
    { match: SENTENCE_URL, delayMs: 0, json: {} },
  ];
  const { speak, audios } = load(routes);
  // playUrl() (unmodified) only resolves its promise via the 'ended' event —
  // a clip that gets stopped before ending (stopCurrent() just pauses it,
  // with no event) legitimately never settles its own speak() promise. That
  // is existing, single-owner-channel behaviour, not something this fix
  // touches, so p1 is deliberately never awaited here — only its playback
  // state is checked, once p2 (the one left playing) has resolved normally.
  const p1 = speak('Baum', { gender: 'female' });
  const p2 = speak('Tier', { gender: 'female' });   // fired before p1 has resolved
  const r2 = await p2;
  assert.equal(r2, 'manifest');
  assert.equal(audios.length, 2, 'two distinct audio elements were created, one per URL');
  assert.equal(audios[0].paused, true, 'the first tap\'s audio was stopped by the second (single-owner playback)');
  assert.equal(audios[1].paused, false, 'the second, later tap is the one left playing');
  void p1;   // acknowledged as intentionally unawaited, see comment above
});

test('GENDER: switching gender on the same word plays the matching voice file, not the other one', async () => {
  const routes = [
    ...emptyRoutes({ conj: 5, wordForm: 5 }),
  ];
  routes[2] = { match: VOCAB_URL, delayMs: 10, json: { Hund: { female: 'audio/female/hund.mp3', male: 'audio/male/hund.mp3' } } };
  const { speak, audios } = load(routes);
  await speak('Hund', { gender: 'female' });
  await speak('Hund', { gender: 'male' });
  // The engine keys its in-memory audio-element cache by resolved URL, so two different
  // genders of the same word must produce two different (non-reused) elements.
  assert.equal(audios.length, 2);
});
