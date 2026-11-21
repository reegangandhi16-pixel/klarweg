/* AUDIO-SPEC A3 — a failed or stalled Hören download is recorded as an incident before the schedule starts. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup } from './harness.mjs';
import { post, start, submit } from './flow.mjs';

const incidents = async (s) => (await s.env.DB.prepare("SELECT kind, detail_json FROM incidents WHERE attempt_id = ?1 AND kind = 'listening_preload_failed' ORDER BY created_at").bind(s.attempt).all()).results;

test('A3 preload_failed before the schedule starts → incident with a sanitised reason; capped at 5; nothing about the schedule changes', async () => {
  const s = await setup();
  await start(s, 'lesen'); await submit(s, 'lesen'); await start(s, 'hoeren');
  const before = await s.env.DB.prepare("SELECT plan_started_at, deadline_at FROM attempt_modules WHERE attempt_id = ?1 AND module = 'hoeren'").bind(s.attempt).first();
  const r = await post(s, '/hoeren/events', { type: 'preload_failed', reason: 'timeout<script>' });
  assert.equal(r.status, 200); assert.equal(r.json.ok, true); assert.equal(r.json.plan_started_at, null);
  let rows = await incidents(s);
  assert.equal(rows.length, 1); assert.deepEqual(JSON.parse(rows[0].detail_json), { reason: 'timeoutscript' });
  for (let i = 0; i < 8; i++) assert.equal((await post(s, '/hoeren/events', { type: 'preload_failed', reason: 'media_503' })).status, 200);
  rows = await incidents(s);
  assert.equal(rows.length, 5, 'at most 5 per attempt');
  const after = await s.env.DB.prepare("SELECT plan_started_at, deadline_at FROM attempt_modules WHERE attempt_id = ?1 AND module = 'hoeren'").bind(s.attempt).first();
  assert.deepEqual(after, before, 'the schedule and deadline are untouched');
  // once the schedule runs, a late report is accepted but not recorded
  const s2 = await setup();
  await start(s2, 'lesen'); await submit(s2, 'lesen'); await start(s2, 'hoeren');
  assert.equal((await post(s2, '/hoeren/events', { type: 'ready' })).status, 200);
  assert.equal((await post(s2, '/hoeren/events', { type: 'preload_failed', reason: 'network' })).status, 200);
  assert.equal((await incidents(s2)).length, 0);
});

test('A3 preload_failed needs the attempt owner and a valid lease', async () => {
  const s = await setup();
  await start(s, 'lesen'); await submit(s, 'lesen'); await start(s, 'hoeren');
  const r = await post(s, '/hoeren/events', { type: 'preload_failed', reason: 'network', lease_id: 'lease_wrong_000000000000' });
  assert.notEqual(r.status, 200);
  assert.equal((await incidents(s)).length, 0);
});
