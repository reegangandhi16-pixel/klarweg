/* TIMER + RECOVERY: server-authoritative deadlines, refresh, close/reopen,
   disconnect, delayed save, clock mismatch, second tab, device change,
   expired lease, stale request, duplicated request, network retry. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, rid, dev } from './harness.mjs';
import { A, post, get, start, submit } from './flow.mjs';
import worker from '../src/index.js';

const LESEN_MS = 3900 * 1000;
const item = 'itm:b1:syn-l1-01';
const save = (s, seq, opt = 'richtig', extra = {}) => post(s, '/modules/lesen/answers', { answers: [{ item_id: item, value: { option_id: opt }, seq, client_ts: s.clock.t }], ...extra });

test('TIMER: deadline is set by the server at start (65 min Lesen); client-sent deadlines are ignored', async () => {
  const s = await setup();
  const r = await post(s, '/modules/lesen/start', { deadline_at: s.clock.t + 999_999_999, seconds: 99999 });
  assert.equal(r.json.module.deadline_at, s.clock.t + LESEN_MS);
  assert.equal(r.json.module.remaining_ms, LESEN_MS);
});

test('TIMER: refresh — GET attempt returns the same deadline and a smaller remaining time', async () => {
  const s = await setup();
  const m = await start(s, 'lesen');
  s.advance(600_000);
  const st = await call(s.env, 'GET', A(s), { user: s.user });
  const l = st.json.modules.find((x) => x.module === 'lesen');
  assert.equal(l.deadline_at, m.deadline_at);
  assert.equal(l.remaining_ms, LESEN_MS - 600_000);
  assert.equal(st.json.server_now, s.clock.t);
});

test('TIMER: close/reopen after the deadline → module auto-submitted and scored, next module unlocked', async () => {
  const s = await setup();
  await start(s, 'lesen');
  await save(s, 1, 'richtig');
  s.advance(LESEN_MS + 10_001);
  const st = await call(s.env, 'GET', A(s), { user: s.user });
  const l = st.json.modules.find((x) => x.module === 'lesen');
  assert.equal(l.status, 'submitted'); assert.equal(l.submit_kind, 'auto_deadline');
  assert.equal(l.submitted_at, l.deadline_at + 10_000);
  assert.equal(st.json.modules.find((x) => x.module === 'hoeren').status, 'available');
  const score = await s.env.DB.prepare("SELECT status, raw FROM module_scores WHERE attempt_id = ?1 AND module = 'lesen'").bind(s.attempt).first();
  assert.equal(score.status, 'final');
});

test('TIMER: delayed save inside the 10 s grace is accepted; after the grace it is refused', async () => {
  const s = await setup();
  await start(s, 'lesen');
  s.advance(LESEN_MS + 9_000);
  const re = await call(s.env, 'POST', A(s, '/lease'), { user: s.user, body: { device_id: s.device } });   // lease lapsed meanwhile
  const s2 = { ...s, lease: re.json.lease.lease_id };
  assert.equal((await save(s2, 1)).status, 200);
  s.advance(2_000);
  const late = await save(s2, 2);
  assert.equal(late.status, 409);   // module was auto-submitted by settle() on this very request
  assert.equal(late.json.error, 'module_submitted');
});

test('TIMER: disconnect — the cron sweep auto-submits abandoned modules without any client', async () => {
  const s = await setup();
  await start(s, 'lesen');
  s.advance(LESEN_MS + 60_000);
  await worker.scheduled({}, s.env);
  const m = await s.env.DB.prepare("SELECT status, submit_kind FROM attempt_modules WHERE attempt_id = ?1 AND module = 'lesen'").bind(s.attempt).first();
  assert.deepEqual(m, { status: 'submitted', submit_kind: 'auto_deadline' });
});

test('TIMER: clock mismatch — client_ts far in the future/past changes nothing; server_now is authoritative', async () => {
  const s = await setup();
  const m = await start(s, 'lesen');
  const r = await post(s, '/modules/lesen/answers', { answers: [{ item_id: item, value: { option_id: 'richtig' }, seq: 1, client_ts: s.clock.t + 86_400_000 }] });
  assert.equal(r.status, 200);
  assert.equal(r.json.server_now, s.clock.t);
  assert.equal(r.json.deadline_at, m.deadline_at);
  const ev = await s.env.DB.prepare('SELECT client_ts, server_ts FROM response_events WHERE attempt_id = ?1').bind(s.attempt).first();
  assert.equal(ev.server_ts, s.clock.t); assert.equal(ev.client_ts, s.clock.t + 86_400_000);   // stored for audit only
});

test('TIMER: accommodation multiplier extends fixed modules server-side', async () => {
  const s = await setup();
  await s.env.DB.prepare('UPDATE attempts SET time_multiplier = 1.25 WHERE id = ?1').bind(s.attempt).run();
  const m = await start(s, 'lesen');
  assert.equal(m.deadline_at - m.started_at, LESEN_MS * 1.25);
});

test('RECOVERY: same tab refresh — same lease keeps working; saved answers are returned with their seq', async () => {
  const s = await setup();
  await start(s, 'lesen');
  await save(s, 3, 'falsch');
  const hb = await post(s, '/heartbeat', {});
  assert.equal(hb.status, 200);
  const a = await get(s, '/modules/lesen/answers');
  assert.deepEqual(a.json.answers, [{ item_id: item, value: { option_id: 'falsch' }, seq: 3 }]);
});

test('RECOVERY: second tab — lease_held until takeover; after takeover the first tab is superseded', async () => {
  const s = await setup();
  await start(s, 'lesen');
  const tab2 = await call(s.env, 'POST', A(s, '/lease'), { user: s.user, body: { device_id: s.device } });
  assert.equal(tab2.status, 409); assert.equal(tab2.json.error, 'lease_held'); assert.equal(tab2.json.same_device, true);
  const take = await call(s.env, 'POST', A(s, '/lease'), { user: s.user, body: { device_id: s.device, takeover: true } });
  assert.equal(take.status, 200); assert.equal(take.json.lease.generation, 2);
  const old = await save(s, 1);
  assert.equal(old.status, 409); assert.equal(old.json.error, 'lease_superseded');
  const s2 = { ...s, lease: take.json.lease.lease_id };
  assert.equal((await save(s2, 1)).status, 200);
  assert.ok(await s.env.DB.prepare("SELECT 1 FROM incidents WHERE attempt_id = ?1 AND kind = 'lease_takeover'").bind(s.attempt).first());
});

test('RECOVERY: device change — new device takes over; timer continues unchanged; answers preserved', async () => {
  const s = await setup();
  const m = await start(s, 'lesen');
  await save(s, 1, 'falsch');
  s.advance(120_000);
  const d2 = await call(s.env, 'POST', A(s, '/lease'), { user: s.user, body: { device_id: dev(), takeover: true } });
  assert.equal(d2.status, 200);
  assert.equal(d2.json.lease.generation, 2);
  assert.equal(d2.json.modules.find((x) => x.module === 'lesen').deadline_at, m.deadline_at);
  const s2 = { ...s, lease: d2.json.lease.lease_id };
  assert.equal((await get(s2, '/modules/lesen/answers')).json.answers[0].value.option_id, 'falsch');
});

test('RECOVERY: expired lease — refused, then re-acquired without takeover; deadline unaffected', async () => {
  const s = await setup();
  const m = await start(s, 'lesen');
  s.advance(61_000);
  const r = await save(s, 1);
  assert.equal(r.json.error, 'lease_expired');
  const re = await call(s.env, 'POST', A(s, '/lease'), { user: s.user, body: { device_id: s.device } });
  assert.equal(re.status, 200);
  assert.equal(re.json.modules.find((x) => x.module === 'lesen').deadline_at, m.deadline_at);
  assert.equal((await save({ ...s, lease: re.json.lease.lease_id }, 1)).status, 200);
});

test('RECOVERY: heartbeat and saves renew the lease', async () => {
  const s = await setup();
  await start(s, 'lesen');
  for (let i = 0; i < 5; i++) { s.advance(45_000); assert.equal((await post(s, '/heartbeat', {})).status, 200); }
  s.advance(45_000);
  assert.equal((await save(s, 1)).status, 200);
});

test('RECOVERY: stale request — lower seq never overwrites a newer answer', async () => {
  const s = await setup();
  await start(s, 'lesen');
  assert.equal((await save(s, 5, 'falsch')).json.results[0].status, 'accepted');
  const stale = await save(s, 4, 'richtig');
  assert.equal(stale.json.results[0].status, 'stale'); assert.equal(stale.json.results[0].current_seq, 5);
  const eq = await save(s, 5, 'richtig');
  assert.equal(eq.json.results[0].status, 'stale');
  assert.equal((await get(s, '/modules/lesen/answers')).json.answers[0].value.option_id, 'falsch');
  const ev = (await s.env.DB.prepare('SELECT outcome FROM response_events WHERE attempt_id = ?1 ORDER BY id').bind(s.attempt).all()).results.map((r) => r.outcome);
  assert.deepEqual(ev, ['accepted', 'stale', 'stale']);
});

test('RECOVERY: duplicated request / network retry — same request id replays the stored response, no double effect', async () => {
  const s = await setup();
  await start(s, 'lesen');
  const id = rid();
  const a = await save(s, 1, 'richtig', { request_id: id });
  const b = await save(s, 1, 'richtig', { request_id: id });
  assert.equal(b.status, 200); assert.equal(b.json.replayed, true);
  assert.deepEqual(b.json.results, a.json.results);
  const n = await s.env.DB.prepare('SELECT COUNT(*) AS n FROM response_events WHERE attempt_id = ?1').bind(s.attempt).first();
  assert.equal(n.n, 1);
  const reuse = await post(s, '/modules/lesen/submit', { request_id: id });
  assert.equal(reuse.status, 409); assert.equal(reuse.json.error, 'request_id_reused');
});

test('RECOVERY: retried submit is idempotent; retried start replays', async () => {
  const s = await setup();
  const id = rid();
  const a = await post(s, '/modules/lesen/start', { request_id: id });
  const b = await post(s, '/modules/lesen/start', { request_id: id });
  assert.equal(b.json.replayed, true); assert.equal(b.json.module.deadline_at, a.json.module.deadline_at);
  const sid = rid();
  await post(s, '/modules/lesen/submit', { request_id: sid });
  const again = await post(s, '/modules/lesen/submit', { request_id: sid });
  assert.equal(again.status, 200); assert.equal(again.json.replayed, true);
  const n = await s.env.DB.prepare("SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action = 'module_submitted'").bind(s.attempt).first();
  assert.equal(n.n, 1);
});

test('RECOVERY: request id and lease are mandatory and well-formed', async () => {
  const s = await setup();
  assert.equal((await post(s, '/modules/lesen/start', { request_id: 'short' })).json.error, 'request_id_required');
  assert.equal((await post(s, '/modules/lesen/start', { lease_id: 'ls_nope' })).json.error, 'lease_required');
  assert.equal((await post(s, '/modules/lesen/start', { lease_id: `ls_${crypto.randomUUID()}` })).json.error, 'lease_superseded');
  assert.equal((await call(s.env, 'POST', A(s, '/lease'), { user: s.user, body: { device_id: 'x' } })).json.error, 'device_id_required');
});

test('RECOVERY: completed attempt cannot be re-leased or modified', async () => {
  const s = await setup();
  for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) {
    await start(s, m);
    if (m === 'hoeren') await post(s, '/hoeren/events', { type: 'ready' });
    await submit(s, m);
  }
  assert.equal((await post(s, '/complete', {})).status, 200);
  assert.equal((await call(s.env, 'POST', A(s, '/lease'), { user: s.user, body: { device_id: s.device, takeover: true } })).json.error, 'attempt_closed');
  assert.equal((await post(s, '/complete', {})).json.error, 'lease_superseded');
});
