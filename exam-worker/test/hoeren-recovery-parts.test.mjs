/* F1 — Hören recovery replay (OD-05) and F2 — future-part visibility (OD-02). */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, pkgFor } from './harness.mjs';
import { post, get, start, submit, runHoeren } from './flow.mjs';

const plan = (s) => pkgFor(s.build, 'hoeren').timing.plan;
const offsetOf = (p, seq) => p.phases.filter((x) => x.seq < seq).reduce((n, x) => n + x.ms, 0);
const phase = (p, seq) => p.phases.find((x) => x.seq === seq);
const firstOfPart = (p, part) => p.phases.find((x) => x.part === part);
const ev = (s, type, seq, kind) => post(s, '/hoeren/events', { type, phase_seq: seq, ...(kind ? { kind } : {}) });
const save = (s, item, opt = 'a', seq = 1) => post(s, '/modules/hoeren/answers', { answers: [{ item_id: item, value: { option_id: opt }, seq }] });

/* move the server clock forward, keeping the device lease alive like the real heartbeat */
async function goto(s, t) {
  while (s.clock.t < t) { s.clock.t = Math.min(t, s.clock.t + 50_000); await post(s, '/heartbeat', {}); }
  s.clock.t = t;
}
async function toHoeren(s, { ready = true } = {}) {
  await start(s, 'lesen'); await submit(s, 'lesen');
  await start(s, 'hoeren');
  if (!ready) return null;
  const r = await post(s, '/hoeren/events', { type: 'ready' });
  return r.json;
}
const at = (s, ready, seq, plus = 0) => goto(s, ready.plan_started_at + offsetOf(plan(s), seq) + plus);

/* ---------------- F1 ---------------- */
test('F1 unfinished but NOT interrupted play → recovery denied', async () => {
  const s = await setup();
  const ready = await toHoeren(s);
  await at(s, ready, 5);                                   // P1 text 1, play 2 of 2 (a last play)
  assert.equal((await ev(s, 'play_start', 5)).status, 200);
  const r = await ev(s, 'play_start', 5, 'recovery');
  assert.equal(r.status, 409); assert.equal(r.json.error, 'recovery_not_applicable');
});

test('F1 interrupted play that is NOT the last allowed play → recovery denied; the next normal play still runs', async () => {
  const s = await setup();
  const ready = await toHoeren(s);
  await at(s, ready, 3);                                   // play 1 of 2
  await ev(s, 'play_start', 3);
  assert.equal((await ev(s, 'interrupted', 3)).json.outcome, 'interrupted');
  assert.equal((await ev(s, 'play_start', 3, 'recovery')).json.error, 'recovery_not_applicable');
  await at(s, ready, 5);
  assert.equal((await ev(s, 'play_start', 5)).status, 200);   // play 2 of 2 is unaffected
});

test('F1 genuinely interrupted LAST play → exactly one recovery replay; reported as pending; shifts the schedule; incident logged', async () => {
  const s = await setup();
  const ready = await toHoeren(s);
  const p = plan(s);
  await at(s, ready, 5);
  await ev(s, 'play_start', 5);
  await goto(s, s.clock.t + 800);                          // still playing (2000 ms clip)
  assert.equal((await ev(s, 'interrupted', 5)).status, 200);
  const pkgBefore = await get(s, '/modules/hoeren/package');
  assert.equal(pkgBefore.json.hoeren.pending_recovery_seq, 5);
  const again = await post(s, '/hoeren/events', { type: 'ready' });   // a reloaded client learns it too
  assert.equal(again.json.pending_recovery_seq, 5);
  const r = await ev(s, 'play_start', 5, 'recovery');
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.equal(r.json.plan_shift_ms, phase(p, 5).ms);
  assert.equal(r.json.deadline_at, ready.deadline_at + phase(p, 5).ms);
  assert.equal((await ev(s, 'play_end', 5, 'recovery')).json.outcome, 'complete');
  assert.equal((await get(s, '/modules/hoeren/package')).json.hoeren.pending_recovery_seq, null);
  const inc = await s.env.DB.prepare("SELECT kind FROM incidents WHERE attempt_id = ?1 ORDER BY created_at").bind(s.attempt).all();
  assert.deepEqual(inc.results.map((x) => x.kind), ['listening_play_interrupted', 'listening_recovery_replay']);
});

test('F1 recovery used once → a second recovery (same or another segment) is denied; allowance never exceeded', async () => {
  const s = await setup();
  const ready = await toHoeren(s);
  const p = plan(s);
  await at(s, ready, 5); await ev(s, 'play_start', 5); await ev(s, 'interrupted', 5);
  assert.equal((await ev(s, 'play_start', 5, 'recovery')).status, 200);
  assert.equal((await ev(s, 'play_start', 5, 'recovery')).json.error, 'recovery_exhausted');
  await at(s, ready, 10, phase(p, 5).ms);                  // schedule is shifted by the replay
  await ev(s, 'play_start', 10); await ev(s, 'interrupted', 10);
  assert.equal((await ev(s, 'play_start', 10, 'recovery')).json.error, 'recovery_exhausted');
  const m = await s.env.DB.prepare("SELECT recovery_used FROM attempt_modules WHERE attempt_id = ?1 AND module = 'hoeren'").bind(s.attempt).first();
  assert.equal(m.recovery_used, 1);
  const n = await s.env.DB.prepare("SELECT COUNT(*) AS n FROM audio_plays WHERE attempt_id = ?1 AND kind = 'recovery'").bind(s.attempt).first();
  assert.equal(n.n, p.recovery_replays_per_module);
});

test('F1 an "interruption" reported after the clip had finished is not genuine → refused, no recovery', async () => {
  const s = await setup();
  const ready = await toHoeren(s);
  await at(s, ready, 5);
  await ev(s, 'play_start', 5);
  await goto(s, s.clock.t + 2_000);                        // clip length elapsed
  assert.equal((await ev(s, 'interrupted', 5)).json.error, 'play_already_finished');
  assert.equal((await ev(s, 'play_start', 5, 'recovery')).json.error, 'recovery_not_applicable');
});

test('F1 normal playback counts unchanged: 2/1/1/2 plan → 15 text plays (example 1 + 5×2, 1, 1, 2) + 1 instruction play, no recovery plays', async () => {
  const s = await setup();
  await start(s, 'lesen'); await submit(s, 'lesen');
  await runHoeren(s, (it, k) => k.correct);
  const rows = (await s.env.DB.prepare("SELECT kind, play_no, asset_id FROM audio_plays WHERE attempt_id = ?1").bind(s.attempt).all()).results;
  const instr = new Set(plan(s).phases.filter((x) => x.purpose === 'instruction').map((x) => x.asset_id));
  assert.equal(rows.filter((r) => r.kind === 'normal' && !instr.has(r.asset_id)).length, 15);
  assert.equal(rows.filter((r) => r.kind === 'normal' && instr.has(r.asset_id)).length, 1);   // synthetic Teil 2 instruction, played once
  assert.equal(rows.filter((r) => r.kind === 'recovery').length, 0);
  const byPart = {};
  for (const ph of plan(s).phases.filter((x) => x.kind === 'play' && x.purpose !== 'instruction')) byPart[ph.part] = (byPart[ph.part] || 0) + 1;
  assert.deepEqual(byPart, { 1: 11, 2: 1, 3: 1, 4: 2 });
});

test('INSTRUCTION AUDIO (AUDIO-SPEC A1/A2): a measured instruction play opens its part, is played once and an interrupted one is never recovered', async () => {
  const s = await setup();
  const ready = await toHoeren(s);
  const p = plan(s);
  const ins = p.phases.filter((x) => x.purpose === 'instruction');
  assert.equal(ins.length, 1);
  const [i] = ins;
  assert.deepEqual([i.kind, i.part, i.play_no, i.plays_allowed, i.recoverable], ['play', 2, 1, 1, false]);
  assert.equal(firstOfPart(p, 2).seq, i.seq, 'the instruction is the first phase of its part');
  assert.ok(i.ms > 0);
  await at(s, ready, i.seq, 100);
  assert.equal((await ev(s, 'play_start', i.seq)).status, 200);
  assert.equal((await ev(s, 'play_start', i.seq)).json.error, 'play_limit_reached', 'played once only');
  assert.equal((await ev(s, 'interrupted', i.seq)).status, 200);
  const r = await ev(s, 'play_start', i.seq, 'recovery');
  assert.equal(r.status, 409); assert.equal(r.json.error, 'recovery_not_applicable');
  assert.equal((await post(s, '/hoeren/events', { type: 'ready' })).json.pending_recovery_seq, null, 'no pending recovery is offered');
  const h = await s.env.DB.prepare("SELECT recovery_used FROM attempt_modules WHERE attempt_id = ?1 AND module = 'hoeren'").bind(s.attempt).first();
  assert.equal(h.recovery_used, 0, 'an instruction never uses up the module recovery');
});

/* ---------------- F2 ---------------- */
const P2 = 'itm:b1:syn-h2-11', P4 = 'itm:b1:syn-h4-23';

test('F2 before readiness no part is open; at plan start only Teil 1 is in the package (no future text, ids or answers)', async () => {
  const s = await setup();
  await toHoeren(s, { ready: false });
  const before = await get(s, '/modules/hoeren/package');
  assert.deepEqual(before.json.package.parts, []);
  await post(s, '/hoeren/events', { type: 'ready' });
  const r = await get(s, '/modules/hoeren/package');
  assert.deepEqual(r.json.package.parts.map((p) => p.part), [1]);
  assert.equal(r.json.hoeren.open_part, 1);
  const text = JSON.stringify(r.json);
  for (const id of ['syn-h2', 'syn-h3', 'syn-h4']) assert.equal(text.includes(`itm:b1:${id}`), false, id);
  assert.equal(r.json.package.timing.plan.phases.length, plan(s).phases.length);   // schedule still complete
  assert.ok(r.json.package.timing.plan.phases.every((p) => !('items' in p) && !('task_id' in p)));
});

test('F2 active-part answer accepted; future-part answer rejected; skipping straight to a later part rejected', async () => {
  const s = await setup();
  const ready = await toHoeren(s);
  assert.equal((await save(s, 'itm:b1:syn-h1-01x', 'richtig')).status, 200);
  const f2 = await save(s, P2, 'a');
  assert.equal(f2.status, 409); assert.equal(f2.json.error, 'part_not_open');
  assert.equal((await save(s, P4, 'a')).json.error, 'part_not_open');
  // mixed batch with one future item is refused as a whole
  const mixed = await post(s, '/modules/hoeren/answers', { answers: [{ item_id: 'itm:b1:syn-h1-02x', value: { option_id: 'a' }, seq: 1 }, { item_id: P4, value: { option_id: 'a' }, seq: 1 }] });
  assert.equal(mixed.json.error, 'part_not_open');
  const stored = await s.env.DB.prepare("SELECT COUNT(*) AS n FROM responses_current WHERE attempt_id = ?1 AND item_id = 'itm:b1:syn-h1-02x'").bind(s.attempt).first();
  assert.equal(stored.n, 0);   // nothing from the rejected batch was applied
  // cannot pull the Teil 4 recording forward either
  const p4 = plan(s).phases.find((x) => x.kind === 'play' && x.part === 4);
  assert.equal((await ev(s, 'play_start', p4.seq)).json.error, 'play_too_early');
  // client query parameters cannot widen the package
  const forged = await get(s, '/modules/hoeren/package?part=4&open_part=4');
  assert.deepEqual(forged.json.package.parts.map((p) => p.part), [1]);
  assert.ok(ready);
});

test('F2 the next part opens only at its server-side phase transition; finished parts stay editable (OD-02)', async () => {
  const s = await setup();
  const ready = await toHoeren(s);
  const p = plan(s);
  const p2start = ready.plan_started_at + offsetOf(p, firstOfPart(p, 2).seq);
  await goto(s, p2start - 2_001);                          // just before the 2 s opening lead
  assert.deepEqual((await get(s, '/modules/hoeren/package')).json.package.parts.map((x) => x.part), [1]);
  assert.equal((await save(s, P2, 'a')).json.error, 'part_not_open');
  const pk = await get(s, '/modules/hoeren/package');
  assert.equal(pk.json.hoeren.next_part_at, p2start - 2_000);
  await goto(s, p2start - 2_000);
  assert.deepEqual((await get(s, '/modules/hoeren/package')).json.package.parts.map((x) => x.part), [1, 2]);
  assert.equal((await save(s, P2, 'a')).status, 200);
  assert.equal((await save(s, P4, 'a')).json.error, 'part_not_open');
  assert.equal((await save(s, 'itm:b1:syn-h1-01x', 'falsch', 2)).status, 200);   // Teil 1 still editable
  // review phase: everything open
  await goto(s, ready.plan_started_at + offsetOf(p, p.phases.find((x) => x.kind === 'review').seq));
  const all = await get(s, '/modules/hoeren/package');
  assert.deepEqual(all.json.package.parts.map((x) => x.part), [1, 2, 3, 4]);
  assert.equal(all.json.hoeren.open_part, 'all');
  assert.equal((await save(s, P4, 'a')).status, 200);
});

test('F2 readiness timeout opens Teil 1 without the client; a recovery shift delays the next part', async () => {
  const s = await setup();
  await toHoeren(s, { ready: false });
  const started = s.clock.t;
  await goto(s, started + 120_000);
  assert.deepEqual((await get(s, '/modules/hoeren/package')).json.package.parts.map((x) => x.part), [1]);

  const s2 = await setup();
  const ready = await toHoeren(s2);
  const p = plan(s2);
  await at(s2, ready, 25); await ev(s2, 'play_start', 25); await ev(s2, 'interrupted', 25);   // last P1 play
  await ev(s2, 'play_start', 25, 'recovery');
  const p2start = ready.plan_started_at + offsetOf(p, firstOfPart(p, 2).seq);
  await goto(s2, p2start - 2_000);                         // would have opened without the replay
  assert.deepEqual((await get(s2, '/modules/hoeren/package')).json.package.parts.map((x) => x.part), [1]);
  await goto(s2, p2start - 2_000 + phase(p, 25).ms);
  assert.deepEqual((await get(s2, '/modules/hoeren/package')).json.package.parts.map((x) => x.part), [1, 2]);
});
