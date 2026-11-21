/* LISTENING (test tones) + private signed media. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, pkgFor, makeEnv } from './harness.mjs';
import { A, post, start, submit, runHoeren } from './flow.mjs';
import { signMediaToken, MEDIA_TTL_MS } from '../src/media.js';

async function toHoeren(s) {
  await start(s, 'lesen'); await submit(s, 'lesen');
  await start(s, 'hoeren');
  return pkgFor(s.build, 'hoeren').timing.plan;
}
const firstPlay = (plan) => plan.phases.find((p) => p.kind === 'play');
const offsetOf = (plan, seq) => plan.phases.filter((p) => p.seq < seq).reduce((n, p) => n + p.ms, 0);

test('LISTENING: package carries the deterministic phase plan, TEST AUDIO labels and the provisional behaviour label — no keys', async () => {
  const s = await setup();
  const plan = await toHoeren(s);
  const ready = await post(s, '/hoeren/events', { type: 'ready' });
  for (let t = s.clock.t; t < ready.json.plan_started_at + plan.total_ms; ) { t = Math.min(ready.json.plan_started_at + plan.total_ms, t + 50_000); s.clock.t = t; await post(s, '/heartbeat', {}); }   // F2: all parts open in the review phase
  const r = await call(s.env, 'GET', A(s, `/modules/hoeren/package?lease_id=${s.lease}`), { user: s.user });
  assert.equal(r.status, 200);
  const pkg = r.json.package;
  assert.equal(pkg.navigation, 'linear');
  assert.match(pkg.timing.plan.behaviour_label, /Klarweg Standardized Exam Behaviour/);
  const audio = pkg.parts.flatMap((p) => p.tasks.flatMap((t) => t.stimuli.filter((x) => x.kind === 'audio')));
  assert.equal(audio.length, 9);   // P1 example + 5 texts, P2, P3, P4
  assert.ok(audio.every((a) => /^TEST AUDIO/.test(a.label) && a.duration_ms > 0));
  // plays per part: 2 / 1 / 1 / 2 (example task: 1)
  const plays = {}; for (const p of plan.phases.filter((x) => x.kind === 'play')) plays[p.task_id] = Math.max(plays[p.task_id] || 0, p.plays_allowed);
  const byPart = {}; for (const p of plan.phases.filter((x) => x.kind === 'play')) byPart[p.part] = new Set([...(byPart[p.part] || []), p.plays_allowed]);
  assert.deepEqual([...byPart[1]].sort(), [1, 2]); assert.deepEqual([...byPart[2]], [1]); assert.deepEqual([...byPart[3]], [1]); assert.deepEqual([...byPart[4]], [2]);
  assert.equal(JSON.stringify(pkg).includes('"correct"'), false);
  assert.equal(plan.total_ms, pkg.timing.plan.total_ms);
});

test('LISTENING: readiness — answers refused before ready; ready fixes the schedule base and the deadline', async () => {
  const s = await setup();
  const plan = await toHoeren(s);
  const early = await post(s, '/modules/hoeren/answers', { answers: [{ item_id: 'itm:b1:syn-h1-01x', value: { option_id: 'richtig' }, seq: 1 }] });
  assert.equal(early.json.error, 'listening_not_started');
  s.advance(30_000);
  const r = await post(s, '/hoeren/events', { type: 'ready' });
  assert.equal(r.json.plan_started_at, s.clock.t);
  assert.equal(r.json.deadline_at, s.clock.t + plan.total_ms + 60_000);   // + jitter allowance
  const again = await post(s, '/hoeren/events', { type: 'ready' });
  assert.equal(again.json.plan_started_at, r.json.plan_started_at);
});

test('LISTENING: readiness timeout — schedule starts at start + 120 s even without the client', async () => {
  const s = await setup();
  const plan = await toHoeren(s);
  const started = s.clock.t;
  s.advance(59_000); await post(s, '/heartbeat', {});
  s.advance(59_000); await post(s, '/heartbeat', {});
  s.advance(12_000);
  const r = await post(s, '/hoeren/events', { type: 'ready' });
  assert.equal(r.json.plan_started_at, started + 120_000);
  assert.equal(r.json.deadline_at, started + 120_000 + plan.total_ms + 60_000);
});

test('LISTENING: play-count enforcement — each play phase plays once; no early play; closed window', async () => {
  const s = await setup();
  const plan = await toHoeren(s);
  const ready = await post(s, '/hoeren/events', { type: 'ready' });
  const p = firstPlay(plan);
  s.clock.t = ready.json.plan_started_at + offsetOf(plan, p.seq) - 6_000;
  assert.equal((await post(s, '/hoeren/events', { type: 'play_start', phase_seq: p.seq })).json.error, 'play_too_early');
  s.clock.t += 6_000;
  assert.equal((await post(s, '/hoeren/events', { type: 'play_start', phase_seq: p.seq })).status, 200);
  const dup = await post(s, '/hoeren/events', { type: 'play_start', phase_seq: p.seq });
  assert.equal(dup.status, 409); assert.equal(dup.json.error, 'play_limit_reached');
  assert.equal((await post(s, '/hoeren/events', { type: 'play_start', phase_seq: 0 })).json.error, plan.phases[0].kind === 'play' ? 'play_limit_reached' : 'invalid_phase');
  const later = plan.phases.filter((x) => x.kind === 'play')[1];
  s.clock.t = ready.json.plan_started_at + offsetOf(plan, later.seq) + later.ms + 6_000;
  assert.equal((await post(s, '/hoeren/events', { type: 'play_start', phase_seq: later.seq })).json.error, 'play_window_closed');
});

test('LISTENING: deterministic completion — play_end records completion; end without start refused', async () => {
  const s = await setup();
  const plan = await toHoeren(s);
  const ready = await post(s, '/hoeren/events', { type: 'ready' });
  const p = firstPlay(plan);
  s.clock.t = ready.json.plan_started_at + offsetOf(plan, p.seq);
  const later = plan.phases.filter((x) => x.kind === 'play')[1];
  assert.equal((await post(s, '/hoeren/events', { type: 'play_end', phase_seq: later.seq })).json.error, 'play_not_started');
  await post(s, '/hoeren/events', { type: 'play_start', phase_seq: p.seq });
  s.clock.t += p.ms;
  assert.equal((await post(s, '/hoeren/events', { type: 'play_end', phase_seq: p.seq })).json.outcome, 'complete');
  const row = await s.env.DB.prepare('SELECT outcome, ended_at - started_at AS d FROM audio_plays WHERE attempt_id = ?1').bind(s.attempt).first();
  assert.deepEqual(row, { outcome: 'complete', d: p.ms });
});

test('LISTENING: one recovery replay per module, only after an interrupted LAST play; it shifts the deadline (F1 / OD-05)', async () => {
  const s = await setup();
  const plan = await toHoeren(s);
  const ready = await post(s, '/hoeren/events', { type: 'ready' });
  const lastPlays = plan.phases.filter((x) => x.kind === 'play' && x.play_no === x.plays_allowed && x.seq > 0);
  const [p1, p2] = lastPlays;
  s.clock.t = ready.json.plan_started_at + offsetOf(plan, p1.seq);
  await post(s, '/hoeren/events', { type: 'play_start', phase_seq: p1.seq });
  assert.equal((await post(s, '/hoeren/events', { type: 'play_start', phase_seq: p1.seq, kind: 'recovery' })).json.error, 'recovery_not_applicable');   // not interrupted
  await post(s, '/hoeren/events', { type: 'interrupted', phase_seq: p1.seq });
  assert.equal((await post(s, '/hoeren/events', { type: 'play_start', phase_seq: p1.seq, kind: 'recovery' })).status, 200);
  const st = await call(s.env, 'GET', A(s), { user: s.user });
  const h = st.json.modules.find((m) => m.module === 'hoeren');
  assert.equal(h.recovery_used, 1); assert.equal(h.plan_shift_ms, p1.ms);
  assert.equal(h.deadline_at, ready.json.deadline_at + p1.ms);
  s.clock.t = ready.json.plan_started_at + offsetOf(plan, p2.seq) + p1.ms;
  await call(s.env, 'POST', A(s, '/lease'), { user: s.user, body: { device_id: s.device, takeover: true } }).then((r) => { s.lease = r.json.lease.lease_id; });
  await post(s, '/hoeren/events', { type: 'play_start', phase_seq: p2.seq });
  await post(s, '/hoeren/events', { type: 'interrupted', phase_seq: p2.seq });
  assert.equal((await post(s, '/hoeren/events', { type: 'play_start', phase_seq: p2.seq, kind: 'recovery' })).json.error, 'recovery_exhausted');
  assert.ok(await s.env.DB.prepare("SELECT 1 FROM incidents WHERE attempt_id = ?1 AND kind = 'listening_recovery_replay'").bind(s.attempt).first());
});

test('LISTENING: recovery is refused for a completed play', async () => {
  const s = await setup();
  const plan = await toHoeren(s);
  const ready = await post(s, '/hoeren/events', { type: 'ready' });
  const p = firstPlay(plan);
  s.clock.t = ready.json.plan_started_at + offsetOf(plan, p.seq);
  await post(s, '/hoeren/events', { type: 'play_start', phase_seq: p.seq });
  await post(s, '/hoeren/events', { type: 'play_end', phase_seq: p.seq });
  assert.equal((await post(s, '/hoeren/events', { type: 'play_start', phase_seq: p.seq, kind: 'recovery' })).json.error, 'recovery_not_applicable');
});

test('LISTENING: module timing — deadline auto-submits Hören and scores it server-side', async () => {
  const s = await setup();
  await toHoeren(s);
  const r = await runHoeren({ ...s, attempt: s.attempt }, () => undefined).catch((e) => e);   // module already started: runHoeren's start fails
  assert.ok(r instanceof Error);
  const ready = await post(s, '/hoeren/events', { type: 'ready' });
  s.clock.t = ready.json.deadline_at + 10_001;
  await worker_settle(s);
  const m = await s.env.DB.prepare("SELECT status, submit_kind FROM attempt_modules WHERE attempt_id = ?1 AND module = 'hoeren'").bind(s.attempt).first();
  assert.deepEqual(m, { status: 'submitted', submit_kind: 'auto_deadline' });
});
async function worker_settle(s) { await call(s.env, 'GET', A(s), { user: s.user }); }

/* ---------- media ---------- */
async function mediaUrl(s, assetId) {
  const r = await post(s, '/media', { asset_id: assetId });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  return r.json;
}

test('MEDIA: signed, attempt-scoped, private no-store WAV test tone from the private bucket', async () => {
  const s = await setup();
  const plan = await toHoeren(s);
  const asset = firstPlay(plan).asset_id;
  const m = await mediaUrl(s, asset);
  assert.match(m.url, /^\/exam\/v1\/media\/[A-Za-z0-9_-]+\.[A-Za-z0-9_-]{43}$/);
  assert.equal(m.expires_at, s.clock.t + MEDIA_TTL_MS);
  const f = await call(s.env, 'GET', m.url, {});   // no user needed — token is the capability
  assert.equal(f.status, 200);
  assert.equal(f.headers.get('content-type'), 'audio/wav');
  assert.equal(f.headers.get('cache-control'), 'private, no-store');
  assert.equal(f.buf.subarray(0, 4).toString('latin1'), 'RIFF');
  assert.equal(f.buf.length, m.bytes);
});

test('MEDIA: expired token, tampered token, cross-attempt token, wrong-module asset, foreign asset are refused', async () => {
  const s = await setup();
  const plan = await toHoeren(s);
  const asset = firstPlay(plan).asset_id;
  const m = await mediaUrl(s, asset);
  // tampered signature / payload
  const [p, sig] = m.url.split('/').pop().split('.');
  const flip = (x) => x.slice(0, -2) + (x.at(-2) === 'A' ? 'B' : 'A') + x.at(-1);
  assert.equal((await call(s.env, 'GET', `/exam/v1/media/${p}.${flip(sig)}`, {})).json.error, 'media_token_invalid');
  assert.equal((await call(s.env, 'GET', `/exam/v1/media/${flip(p)}.${sig}`, {})).json.error, 'media_token_invalid');
  // expired
  s.advance(MEDIA_TTL_MS + 1);
  assert.equal((await call(s.env, 'GET', m.url, {})).json.error, 'media_token_expired');
  // forged with the wrong secret
  const forged = await signMediaToken({ ...s.env, EXAM_MEDIA_SECRET: 'another-secret-0123456789abcdef-xyz' }, { attemptId: s.attempt, formId: 'frm:b1:synthetic-s0@1', assetId: asset, purpose: 'listen', exp: s.clock.t + 60_000 });
  assert.equal((await call(s.env, 'GET', `/exam/v1/media/${forged}`, {})).json.error, 'media_token_invalid');
  // cross-attempt: a valid token for attempt B cannot fetch while B is not running that module
  const other = await setup();
  const tok = await signMediaToken(other.env, { attemptId: other.attempt, formId: 'frm:b1:synthetic-s0@1', assetId: asset, purpose: 'listen', exp: other.clock.t + 60_000 });
  assert.equal((await call(other.env, 'GET', `/exam/v1/media/${tok}`, {})).json.error, 'media_not_allowed');
  // asset from a module that is not running (Sprechen prompt during Hören)
  const sp = pkgFor(s.build, 'sprechen').parts[0].tasks[0].items[0].response_spec.turns[0].prompt_asset;
  s.clock.t -= MEDIA_TTL_MS + 1;
  await call(s.env, 'POST', A(s, '/lease'), { user: s.user, body: { device_id: s.device, takeover: true } }).then((r) => { s.lease = r.json.lease.lease_id; });
  assert.equal((await post(s, '/media', { asset_id: sp })).json.error, 'module_not_running');
  assert.equal((await post(s, '/media', { asset_id: 'ast:not-in-form' })).json.error, 'media_not_found');
});

test('MEDIA: token stops working once the module is submitted', async () => {
  const s = await setup();
  const plan = await toHoeren(s);
  const m = await mediaUrl(s, firstPlay(plan).asset_id);
  await post(s, '/hoeren/events', { type: 'ready' });
  await submit(s, 'hoeren');
  assert.equal((await call(s.env, 'GET', m.url, {})).json.error, 'media_not_allowed');
});

test('MEDIA: no exam audio references the public CDN, jsDelivr or chapter manifests', async () => {
  const { build } = makeEnv();
  const all = [...build.files.entries()].filter(([k]) => k.endsWith('.json')).map(([, b]) => b.toString('utf8')).join('\n') + build.sql;
  assert.equal(/jsdelivr|klarweg-audio|manifest\.pilot|public\/audio/i.test(all), false);
  for (const [k] of build.files) if (k.includes('/assets/')) assert.match(k, /\.wav$/);
});
