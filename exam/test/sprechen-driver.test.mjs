/* SPRECHEN driver + audio: deterministic tests with a fake clock (no real time, no browser).
   Covers review findings F1 (autoplay refusal is not playback; gesture; phase-bounded playback),
   F2 (slow/failed uploads never block the next server-scheduled phase; chunks are kept) and
   F3 (chunk gaps are never finalised; a server refusal does not stop the phase driver). */
import test from 'node:test';
import assert from 'node:assert/strict';
import { createSpeakingAudio } from '../js/speaking-audio.js';
import { createSpeakingDriver } from '../js/sprechen-driver.js';
import { ChunkQueue } from '../js/recorder.js';
import { memoryStore } from '../js/store.js';
import { syntheticBuild, pkgFor } from '../../exam-worker/test/harness.mjs';

const pkg = pkgFor(syntheticBuild(), 'sprechen');
const plan = pkg.timing.plan;           // synthetic: prep 20 s · intro 5 · teil1 120 · teil2 120 · partner 5 · teil3 120
const T0 = 1_000_000;                   // module started_at (server time)
const AT = { teil1: T0 + 25_000, teil2: T0 + 145_000, partner: T0 + 265_000, teil3: T0 + 270_000, end: T0 + 390_000 };
const PARTNER = 'ast:syn-sp3-partner-talk';

/* Fake time: sleep() registers a timer; run(until) fires timers in order and lets pending work settle in between. */
function fakeTime(start) {
  let t = start, seq = 0;
  const timers = [];
  const settle = async () => { for (let i = 0; i < 5; i++) await new Promise((r) => setImmediate(r)); };
  return {
    now: () => t,
    sleep: (ms) => new Promise((r) => timers.push({ at: t + Math.max(0, ms), r, seq: seq++ })),
    async run(until) {
      for (;;) {
        await settle();
        timers.sort((a, b) => a.at - b.at || a.seq - b.seq);
        if (!timers.length || timers[0].at > until) { t = Math.max(t, until); await settle(); return; }
        const next = timers.shift();
        t = Math.max(t, next.at);
        next.r();
      }
    }
  };
}

/* Fake <audio>: play() follows a script ('ok' | 'not_allowed' | 'error'); ends after durationMs of fake time. */
function fakeAudioFactory(clock, { durationMs = 2000, script = [] } = {}) {
  const made = [];
  const factory = () => {
    const a = { dataset: {}, currentTime: 0, paused: true, starts: [], src: null, onended: null, onerror: null };
    a.play = () => {
      const step = script.length ? script.shift() : 'ok';
      if (step === 'not_allowed') return Promise.reject(Object.assign(new Error('blocked'), { name: 'NotAllowedError' }));
      if (step === 'error') return Promise.reject(Object.assign(new Error('bad'), { name: 'NotSupportedError' }));
      a.paused = false; a.starts.push({ at: clock.now(), offset: a.currentTime });
      const remaining = durationMs - a.currentTime * 1000;
      clock.sleep(Math.max(0, remaining)).then(() => { if (!a.paused && a.onended) { a.paused = true; a.onended(); } });
      return Promise.resolve();
    };
    a.pause = () => { a.paused = true; a.pausedAt = clock.now(); };
    made.push(a);
    return a;
  };
  return { factory, made };
}

function makeAudio(clock, { loadMs = 0, loadFails = false, durationMs, script, gesture = null } = {}) {
  const f = fakeAudioFactory(clock, { durationMs, script });
  const gestures = [];
  const audio = createSpeakingAudio({
    fetchAsset: async (id) => { if (loadMs) await clock.sleep(loadMs); if (loadFails) throw Object.assign(new Error('net'), { code: 'network' }); return { bytes: new Uint8Array([1]), mime: 'audio/wav' }; },
    makeAudio: f.factory, makeUrl: () => 'blob:fake', now: clock.now, sleep: clock.sleep,
    requestGesture: async (endsAt) => { gestures.push({ at: clock.now(), endsAt }); return gesture ? gesture(endsAt) : 'timeout'; }
  });
  return { audio, made: f.made, gestures };
}

/* ---------- F1: speaking-audio ---------- */
test('AUDIO: an autoplay refusal is not playback — a click ("Audio starten") retries, from the recomputed scheduled offset', async () => {
  const clock = fakeTime(0);
  const { audio, made, gestures } = makeAudio(clock, { durationMs: 2000, script: ['not_allowed', 'ok'],
    gesture: async () => { await clock.sleep(700); return 'clicked'; } });
  const phaseStart = 0;
  let result;
  audio.play('a1', { offsetMs: () => clock.now() - phaseStart, endsAt: 5000 }).then((r) => { result = r; });
  await clock.run(400);
  assert.equal(result, undefined, 'still waiting for the click: nothing counts as played');
  assert.equal(gestures.length, 1);
  await clock.run(10_000);
  assert.deepEqual(result, { status: 'played' });
  assert.equal(made[0].starts.length, 1, 'started exactly once');
  assert.ok(Math.abs(made[0].starts[0].offset - 0.7) < 1e-9, 'continues at the scheduled position after the 700 ms click delay, never restarts');
});

test('AUDIO: no click before the phase ends → missed (never "played"); load failure and media errors → error', async () => {
  const clock = fakeTime(0);
  const a = makeAudio(clock, { script: ['not_allowed'] });   // gesture() → 'timeout'
  let r1; a.audio.play('x', { endsAt: 3000 }).then((r) => { r1 = r; });
  await clock.run(5000);
  assert.deepEqual(r1, { status: 'missed', reason: 'no_gesture_in_time' });
  assert.equal(a.made[0].starts.length, 0);
  const b = makeAudio(clock, { loadFails: true });
  let r2; b.audio.play('y', { endsAt: clock.now() + 3000 }).then((r) => { r2 = r; });
  await clock.run(clock.now() + 5000);
  assert.equal(r2.status, 'error'); assert.equal(r2.reason, 'load_failed');
  const c = makeAudio(clock, { script: ['error'] });
  let r3; c.audio.play('z', { endsAt: clock.now() + 3000 }).then((r) => { r3 = r; });
  await clock.run(clock.now() + 5000);
  assert.equal(r3.status, 'error'); assert.equal(r3.reason, 'play_failed');
});

test('AUDIO (F2): slow loading → the offset is recomputed after loading; not loaded before the phase end → missed; playback stops at the boundary', async () => {
  const clock = fakeTime(0);
  const slow = makeAudio(clock, { loadMs: 1200, durationMs: 2000 });
  let r1; slow.audio.play('p', { offsetMs: () => clock.now(), endsAt: 5000 }).then((r) => { r1 = r; });
  await clock.run(6000);
  assert.deepEqual(r1, { status: 'played' });
  assert.ok(Math.abs(slow.made[0].starts[0].offset - 1.2) < 1e-9, 'starts at the scheduled position (1.2 s), not at 0');
  const tooSlow = makeAudio(clock, { loadMs: 10_000 });
  let r2; tooSlow.audio.play('q', { endsAt: clock.now() + 3000 }).then((r) => { r2 = r; });
  await clock.run(clock.now() + 20_000);
  assert.deepEqual(r2, { status: 'missed', reason: 'not_loaded_in_time' });
  const long = makeAudio(clock, { durationMs: 180_000 });
  const t0 = clock.now();
  let r3; long.audio.play('r', { offsetMs: 0, endsAt: t0 + 5000 }).then((r) => { r3 = r; });
  await clock.run(t0 + 200_000);
  assert.deepEqual(r3, { status: 'stopped' });
  assert.ok(long.made[0].pausedAt >= t0 + 5000 && long.made[0].pausedAt < t0 + 5200, 'stopped at the scheduled phase boundary');
  const over = makeAudio(clock);
  let r4; over.audio.play('s', { offsetMs: () => null, endsAt: clock.now() + 3000 }).then((r) => { r4 = r; });
  await clock.run(clock.now() + 5000);
  assert.deepEqual(r4, { status: 'missed', reason: 'already_over' });
});

/* ---------- driver harness ---------- */
function harness({ startAt = AT.teil2 - 4000, upload, complete, status = { turns: [], chunks: [] }, audioOpts = {}, mic = true, finalizeRetries = 3, local = [] } = {}) {
  const clock = fakeTime(startAt);
  const store = memoryStore();
  const calls = { uploads: [], completes: [], recStarts: [], micAt: [], ui: [], alerts: [], logs: [], locks: [] };
  const queue = new ChunkQueue({
    store, sleep: clock.sleep, maxRetries: 2,
    upload: async (q) => { calls.uploads.push({ ...q, at: clock.now() }); return upload ? upload(q, clock) : { ok: true }; },
    completeTurn: async (b) => { calls.completes.push({ ...b, at: clock.now() }); return complete ? complete(b, clock) : { ok: true }; }
  });
  const { audio, made, gestures } = makeAudio(clock, audioOpts);
  let active = true;
  const driver = createSpeakingDriver({
    pkg, plan, startedAt: T0, multiplier: 1, now: clock.now, sleep: clock.sleep, active: () => active, status, queue, audio,
    getMic: async () => { calls.micAt.push(clock.now()); return mic ? { live: true } : null; },
    recorder: (turn) => ({
      start() { calls.recStarts.push({ key: `${turn.item_id}:${turn.turn}`, at: clock.now() }); this.t0 = clock.now(); },
      async stop() {   // two 1 s chunks written to the local queue (as the TurnRecorder would), without hashing
        for (const seq of [0, 1]) await store.set(queue.key(turn, seq), { ...turn, seq, mime: 'audio/webm', sha256: 'f'.repeat(64), bytes: new Uint8Array([seq]) });
        return { chunks: 2, duration_ms: clock.now() - this.t0 };
      }
    }),
    ui: { phase: (t) => calls.ui.push({ at: clock.now(), t }), turn: (k, t) => calls.ui.push({ at: clock.now(), k, t }), alert: (kind, t) => calls.alerts.push({ kind, t, at: clock.now() }), clear: () => {}, lockTopics: () => calls.locks.push(clock.now()) },
    log: (e, d) => calls.logs.push({ e, d }), finalizeRetries, finalizeBackoffMs: () => 2000
  });
  for (const c of local) store.set(queue.key(c, c.seq), { ...c, mime: 'audio/webm', sha256: 'f'.repeat(64), bytes: new Uint8Array([c.seq]) });
  return { clock, store, queue, calls, driver, made, gestures, stop: () => { active = false; } };
}
const partnerStarts = (made) => made.filter((a) => a.dataset.asset === PARTNER).flatMap((a) => a.starts);

/* ---------- F2: uploads never block phases ---------- */
test('DRIVER (F2): a slow turn upload at the end of Teil 2 does not delay the partner presentation or Teil 3', async () => {
  const h = harness({ complete: async (b, clock) => { if (b.item_id === 'itm:b1:syn-sp2') await clock.sleep(60_000); return { ok: true }; } });
  h.driver.run();
  await h.clock.run(AT.teil3 + 3_000);
  const p = partnerStarts(h.made);
  assert.equal(p.length, 1, 'partner presentation played once');
  assert.ok(p[0].at >= AT.partner && p[0].at < AT.partner + 300, `partner started on schedule (at +${p[0].at - AT.partner} ms)`);
  const t3 = h.calls.recStarts.find((r) => r.key.startsWith('itm:b1:syn-sp3'));
  assert.ok(t3 && t3.at < AT.teil3 + 300, 'Teil 3 recording started on schedule (its prompt was heard in the partner phase)');
  assert.equal(h.calls.completes.filter((c) => c.item_id === 'itm:b1:syn-sp2').length, 1, 'Teil 2 finalisation still in flight');
  await h.clock.run(AT.teil3 + 120_000);
  assert.ok(h.driver.done.has('itm:b1:syn-sp2:t1'));
  h.stop();
});

test('DRIVER (F2): failing uploads never abort the flow; chunks stay in the local queue; the problem is surfaced', async () => {
  const net = () => { throw new TypeError('fetch failed'); };
  const h = harness({ upload: net, complete: net, finalizeRetries: 2 });
  h.driver.run();
  await h.clock.run(AT.teil3 + 5_000);
  assert.equal(partnerStarts(h.made).length, 1, 'partner presentation still on schedule');
  assert.ok(h.calls.recStarts.some((r) => r.key.startsWith('itm:b1:syn-sp3')), 'Teil 3 still recorded');
  const kept = await h.store.keys('chunk:itm:b1:syn-sp2:t1:');
  assert.equal(kept.length, 2, 'recorded chunks are not discarded while the network is down');
  assert.ok(h.calls.alerts.some((a) => a.kind === 'upload'), 'upload problem surfaced');
  await h.clock.run(AT.teil3 + 120_000);
  assert.ok(h.calls.logs.some((l) => l.e === 'turn_finalize_pending' && l.d.key === 'itm:b1:syn-sp2:t1'), 'retries exhausted → pending, logged');
  assert.equal((await h.store.keys('chunk:itm:b1:syn-sp2:t1:')).length, 2, 'still kept for the next reload');
  h.stop();
});

test('DRIVER (F2): a failing partner audio load is surfaced; the next phase still starts', async () => {
  const h = harness({ audioOpts: { loadFails: true } });
  h.driver.run();
  await h.clock.run(AT.teil3 + 3_000);
  assert.ok(h.calls.alerts.some((a) => a.kind === 'audio'));
  assert.ok(h.calls.logs.some((l) => l.e === 'partner_audio_error'));
  assert.ok(h.calls.recStarts.some((r) => r.key.startsWith('itm:b1:syn-sp3')), 'Teil 3 recorded despite the audio failure');
  h.stop();
});

/* ---------- F1 in the driver ---------- */
test('DRIVER (F1): after a reload the blocked partner audio waits for a click and then continues from its scheduled position — once', async () => {
  const h = harness({ startAt: AT.partner + 500, audioOpts: { durationMs: 2000, script: ['not_allowed', 'ok'], gesture: async () => 'clicked' } });
  h.driver.run();
  await h.clock.run(AT.teil3 + 1_000);
  const p = partnerStarts(h.made);
  assert.equal(h.gestures.length, 1, '"Audio starten" requested');
  assert.equal(p.length, 1);
  assert.ok(p[0].offset >= 0.5, `continued from ${p[0].offset} s (not from 0)`);
  h.stop();
});

test('DRIVER (F1): reload after the partner audio has finished → nothing is replayed', async () => {
  const h = harness({ startAt: AT.partner + 2_500, audioOpts: { durationMs: 2000 } });
  h.driver.run();
  await h.clock.run(AT.teil3 + 1_000);
  assert.equal(partnerStarts(h.made).length, 0);
  assert.ok(h.calls.logs.some((l) => l.e === 'partner_audio_missed' && l.d.reason === 'already_over'));
  h.stop();
});

/* ---------- F3: recovery after reload ---------- */
const sp1t1 = { item_id: 'itm:b1:syn-sp1', turn: 't1' };
test('DRIVER (F3): contiguous chunks → finalised with n; a gap → no finalise request, turn kept open and surfaced', async () => {
  const contiguous = harness({ startAt: AT.teil2 + 1_000, status: { turns: [{ part: 1, turn: 't1', status: 'open' }], chunks: [0, 1, 2].map((seq) => ({ part: 1, turn: 't1', seq })) } });
  contiguous.driver.run();
  await contiguous.clock.run(AT.teil2 + 3_000);
  assert.deepEqual(contiguous.calls.completes.filter((c) => c.item_id === sp1t1.item_id && c.turn === 't1').map((c) => [c.chunks, c.duration_ms]), [[3, 3000]]);
  contiguous.stop();

  const gap = harness({ startAt: AT.teil2 + 1_000, status: { turns: [{ part: 1, turn: 't1', status: 'open' }], chunks: [0, 1, 3].map((seq) => ({ part: 1, turn: 't1', seq })) } });
  gap.driver.run();
  await gap.clock.run(AT.teil2 + 3_000);
  assert.equal(gap.calls.completes.filter((c) => c.item_id === sp1t1.item_id && c.turn === 't1').length, 0, 'no invalid finalisation request');
  assert.ok(gap.calls.ui.some((u) => u.k === 'itm:b1:syn-sp1:t1' && /unvollständig/.test(u.t)));
  assert.ok(gap.calls.alerts.some((a) => a.kind === 'recovery'));
  assert.ok(gap.calls.logs.some((l) => l.e === 'turn_incomplete_after_reload' && l.d.missing.join() === '2'));
  assert.ok(gap.calls.recStarts.some((r) => r.key === 'itm:b1:syn-sp2:t1'), 'the phase driver carries on (Teil 2 recorded)');
  gap.stop();
});

test('DRIVER (F3): a locally buffered missing chunk closes the gap (resent, then finalised); retry after reload is safe', async () => {
  const h = harness({ startAt: AT.teil2 + 1_000, status: { turns: [{ part: 1, turn: 't1', status: 'open' }], chunks: [0, 2].map((seq) => ({ part: 1, turn: 't1', seq })) },
    local: [{ ...sp1t1, seq: 1 }] });
  h.driver.run();
  await h.clock.run(AT.teil2 + 5_000);
  assert.ok(h.calls.uploads.some((u) => u.item_id === sp1t1.item_id && u.seq === '1'), 'buffered chunk 1 resent');
  assert.deepEqual(h.calls.completes.filter((c) => c.item_id === sp1t1.item_id && c.turn === 't1').map((c) => c.chunks), [3]);
  h.stop();
  // a second "reload" with the same gap and nothing local: still no invalid request
  const again = harness({ startAt: AT.teil2 + 6_000, status: { turns: [{ part: 1, turn: 't1', status: 'open' }], chunks: [0, 2].map((seq) => ({ part: 1, turn: 't1', seq })) } });
  again.driver.run();
  await again.clock.run(AT.teil2 + 8_000);
  assert.equal(again.calls.completes.filter((c) => c.item_id === sp1t1.item_id && c.turn === 't1').length, 0);
  again.stop();
});

test('DRIVER (F3): a server refusal of a finalisation (chunk_count_mismatch) is surfaced, the chunks stay local, and the flow continues', async () => {
  const refuse = (b) => { if (b.item_id === 'itm:b1:syn-sp2') throw Object.assign(new Error('x'), { code: 'chunk_count_mismatch' }); return { ok: true }; };
  const h = harness({ complete: refuse });
  h.driver.run();
  await h.clock.run(AT.teil3 + 3_000);
  assert.ok(h.calls.logs.some((l) => l.e === 'turn_finalize_refused' && l.d.code === 'chunk_count_mismatch'));
  assert.ok(h.calls.ui.some((u) => u.k === 'itm:b1:syn-sp2:t1' && u.t === 'nicht abgeschlossen'));
  assert.equal(h.calls.completes.filter((c) => c.item_id === 'itm:b1:syn-sp2').length, 1, 'not retried after a definitive refusal');
  assert.equal(partnerStarts(h.made).length, 1); assert.ok(h.calls.recStarts.some((r) => r.key.startsWith('itm:b1:syn-sp3')));
  h.stop();
});

/* ---------- F5 ---------- */
test('DRIVER (F5): the microphone is requested only when the first recording phase starts; without it turns are not recorded and the flow continues', async () => {
  const h = harness({ startAt: T0, mic: false });
  h.driver.run();
  await h.clock.run(AT.teil1 + 5_000);
  assert.ok(h.calls.micAt.length >= 1);
  assert.ok(h.calls.micAt.every((t) => t >= AT.teil1), 'not requested during the preparation or the intro');
  assert.equal(h.calls.locks.length, 1, 'topic locked at the end of the preparation');
  assert.ok(h.calls.locks[0] >= T0 + 20_000 && h.calls.locks[0] < T0 + 20_300);
  assert.equal(h.calls.recStarts.length, 0, 'nothing is recorded without a microphone');
  assert.ok(h.calls.ui.some((u) => u.k === 'itm:b1:syn-sp1:t1' && /Mikrofon/.test(u.t)));
  h.stop();
});
