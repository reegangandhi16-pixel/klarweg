/* CORE LIFECYCLE under concurrency (real Worker, in-memory D1 shim). Requests fired together with Promise.all
   interleave at every await inside the handlers, so these tests exercise the compare-and-set transitions,
   idempotency records and lease checks against interleaved execution. They are evidence about the code's logic,
   not about Cloudflare D1 production behaviour. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, makeEnv, call, newUser, grant, rid, dev } from './harness.mjs';
import { A, post, start, submit, answerObjective } from './flow.mjs';
import worker from '../src/index.js';

const one = async (env, sql, ...b) => env.DB.prepare(sql).bind(...b).first();
const n = async (env, sql, ...b) => (await one(env, sql, ...b)).n;
const statusOf = async (s, m) => (await one(s.env, 'SELECT status FROM attempt_modules WHERE attempt_id = ?1 AND module = ?2', s.attempt, m)).status;

test('CONCURRENCY create: a retry racing the original (same request id) gets the same attempt, not attempt_open', async () => {
  const { env } = makeEnv();
  const u = newUser(); await grant(env, u);
  const body = { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dev() };
  const [a, b] = await Promise.all([1, 2].map(() => call(env, 'POST', '/exam/v1/attempts', { user: u, body })));
  assert.deepEqual([a.status, b.status], [200, 200], JSON.stringify([a.json, b.json]));
  assert.equal(a.json.attempt_id, b.json.attempt_id);
  assert.equal(await n(env, 'SELECT COUNT(*) AS n FROM attempts WHERE user_id = ?1', u), 1);
  // exactly one lease is current, and it is one of the two the client was given
  const cur = (await one(env, 'SELECT lease_id FROM attempt_leases WHERE attempt_id = ?1', a.json.attempt_id)).lease_id;
  assert.ok([a.json.lease.lease_id, b.json.lease.lease_id].includes(cur));
  const viaCurrent = await call(env, 'POST', `/exam/v1/attempts/${a.json.attempt_id}/modules/lesen/start`, { user: u, body: { lease_id: cur, request_id: rid() } });
  assert.equal(viaCurrent.status, 200, JSON.stringify(viaCurrent.json));
});

test('CONCURRENCY create: a retry that looked before the original committed and checks after it still replays (forced interleaving)', async () => {
  const { env } = makeEnv();
  const u = newUser(); await grant(env, u);
  const body = { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dev() };
  // the retry's DB pauses right after its first request-id lookup, until the original request has completed
  let release; const gate = new Promise((r) => { release = r; });
  let paused = false;
  const DB = Object.create(env.DB);
  DB.prepare = (sql) => {
    const st = env.DB.prepare(sql);
    if (!paused && sql.includes('client_request_id = ?2')) {
      paused = true;
      return { bind: (...b) => { const x = st.bind(...b); return { ...x, first: async () => { const v = await x.first(); await gate; return v; } }; } };
    }
    return st;
  };
  const retry = call({ ...env, DB }, 'POST', '/exam/v1/attempts', { user: u, body });
  await new Promise((r) => setImmediate(r));
  const original = await call(env, 'POST', '/exam/v1/attempts', { user: u, body });
  release();
  const late = await retry;
  assert.equal(original.status, 200, JSON.stringify(original.json));
  assert.equal(late.status, 200, JSON.stringify(late.json));
  assert.equal(late.json.attempt_id, original.json.attempt_id);
  assert.equal(late.json.replayed, true);
});

test('CONCURRENCY create: two different requests → exactly one attempt; the other gets attempt_open naming it', async () => {
  const { env } = makeEnv();
  const u = newUser(); await grant(env, u);
  const mk = () => call(env, 'POST', '/exam/v1/attempts', { user: u, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dev() } });
  const rs = await Promise.all([mk(), mk(), mk()]);
  const ok = rs.filter((r) => r.status === 200);
  assert.equal(ok.length, 1, JSON.stringify(rs.map((r) => [r.status, r.json.error])));
  for (const r of rs.filter((x) => x.status !== 200)) { assert.equal(r.status, 409); assert.equal(r.json.error, 'attempt_open'); assert.equal(r.json.attempt_id, ok[0].json.attempt_id); }
  assert.equal(await n(env, 'SELECT COUNT(*) AS n FROM attempts WHERE user_id = ?1', u), 1);
  assert.equal(await n(env, 'SELECT COUNT(*) AS n FROM attempt_modules WHERE attempt_id = ?1', ok[0].json.attempt_id), 4);
});

test('CONCURRENCY start: two starts of the same module → one start, one deadline; the other is refused', async () => {
  const s = await setup();
  const rs = await Promise.all([post(s, '/modules/lesen/start', {}), post(s, '/modules/lesen/start', {})]);
  assert.deepEqual(rs.map((r) => r.status).sort(), [200, 409], JSON.stringify(rs.map((r) => r.json)));
  assert.equal(rs.find((r) => r.status === 409).json.error, 'invalid_transition');
  assert.equal(await n(s.env, "SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action = 'module_started'", s.attempt), 1);
});

test('CONCURRENCY submit: double submit (different request ids) → one score, one audit entry, next module unlocked once; no error', async () => {
  const s = await setup();
  await start(s, 'lesen');
  await answerObjective(s, 'lesen');
  const rs = await Promise.all([post(s, '/modules/lesen/submit', {}), post(s, '/modules/lesen/submit', {})]);
  assert.deepEqual(rs.map((r) => r.status), [200, 200], JSON.stringify(rs.map((r) => r.json)));
  assert.equal(await statusOf(s, 'lesen'), 'submitted');
  assert.equal(await statusOf(s, 'hoeren'), 'available');
  assert.equal(await n(s.env, "SELECT COUNT(*) AS n FROM module_scores WHERE attempt_id = ?1 AND module = 'lesen'", s.attempt), 1);
  assert.equal(await n(s.env, "SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action = 'module_submitted'", s.attempt), 1);
  assert.equal((await one(s.env, "SELECT raw FROM module_scores WHERE attempt_id = ?1 AND module = 'lesen'", s.attempt)).raw, 30);
});

test('CONCURRENCY submit: a retry racing the original (same request id) → both succeed, one effect', async () => {
  const s = await setup();
  await start(s, 'lesen');
  const id = rid();
  const rs = await Promise.all([post(s, '/modules/lesen/submit', { request_id: id }), post(s, '/modules/lesen/submit', { request_id: id })]);
  assert.deepEqual(rs.map((r) => r.status), [200, 200], JSON.stringify(rs.map((r) => r.json)));
  assert.equal(await n(s.env, "SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action = 'module_submitted'", s.attempt), 1);
});

test('CONCURRENCY deadline: the cron sweep racing a manual submit → finalized once', async () => {
  const s = await setup();
  const m = await start(s, 'lesen');
  await answerObjective(s, 'lesen');
  s.clock.t = m.deadline_at + 5_000;                      // inside the grace: the manual submit is still allowed
  await post(s, '/heartbeat', {});
  s.clock.t = m.deadline_at + 9_000;
  await Promise.all([post(s, '/modules/lesen/submit', {}), worker.scheduled({}, s.env)]);
  s.clock.t = m.deadline_at + 20_000;
  await worker.scheduled({}, s.env);
  assert.equal(await statusOf(s, 'lesen'), 'submitted');
  assert.equal(await n(s.env, "SELECT COUNT(*) AS n FROM module_scores WHERE attempt_id = ?1 AND module = 'lesen'", s.attempt), 1);
  assert.equal(await n(s.env, "SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action = 'module_submitted'", s.attempt), 1);
});

test('CONCURRENCY complete: double complete → one result row, one completion audit; the other is refused', async () => {
  const s = await setup();
  for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) { await start(s, m); if (m === 'hoeren') await post(s, '/hoeren/events', { type: 'ready' }); await submit(s, m); }
  const rs = await Promise.all([post(s, '/complete', {}), post(s, '/complete', {})]);
  assert.deepEqual(rs.map((r) => r.status).sort(), [200, 409], JSON.stringify(rs.map((r) => r.json)));
  assert.equal(await n(s.env, 'SELECT COUNT(*) AS n FROM results WHERE attempt_id = ?1', s.attempt), 1);
  assert.equal(await n(s.env, "SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action = 'attempt_completed'", s.attempt), 1);
});

test('CONCURRENCY lease: two simultaneous takeovers → exactly one lease is current; the other tab is superseded everywhere', async () => {
  const s = await setup();
  await start(s, 'lesen');
  const take = () => call(s.env, 'POST', A(s, '/lease'), { user: s.user, body: { device_id: dev(), takeover: true } });
  const [x, y] = await Promise.all([take(), take()]);
  assert.deepEqual([x.status, y.status], [200, 200]);
  const cur = (await one(s.env, 'SELECT lease_id FROM attempt_leases WHERE attempt_id = ?1', s.attempt)).lease_id;
  const [win, lose] = x.json.lease.lease_id === cur ? [x, y] : [y, x];
  assert.equal(win.json.lease.lease_id, cur);
  const as = (l) => ({ ...s, lease: l.json.lease.lease_id });
  const item = { item_id: 'itm:b1:syn-l1-01', value: { option_id: 'richtig' }, seq: 5 };
  for (const [path, body] of [['/modules/lesen/answers', { answers: [item] }], ['/modules/lesen/submit', {}], ['/heartbeat', {}]]) {
    const r = await post(as(lose), path, body);
    assert.equal(r.status, 409, path); assert.equal(r.json.error, 'lease_superseded', path);
  }
  for (const old of [s]) assert.equal((await post(old, '/heartbeat', {})).json.error, 'lease_superseded');
  assert.equal(await statusOf(s, 'lesen'), 'running');
  assert.equal((await post(as(win), '/modules/lesen/answers', { answers: [item] })).status, 200);
});

test('COMPLETE retry after a lost response: the owner\'s same request id replays without a lease; nobody else, nothing new', async () => {
  const s = await setup();
  for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) { await start(s, m); if (m === 'hoeren') await post(s, '/hoeren/events', { type: 'ready' }); await submit(s, m); }
  const id = rid();
  const first = await post(s, '/complete', { request_id: id });
  assert.equal(first.status, 200);
  const again = await post(s, '/complete', { request_id: id });            // the lease is gone after completion
  assert.equal(again.status, 200, JSON.stringify(again.json)); assert.equal(again.json.replayed, true);
  assert.deepEqual(again.json.result, first.json.result);
  const other = newUser(); await grant(s.env, other);
  const foreign = await call(s.env, 'POST', A(s, '/complete'), { user: other, body: { lease_id: s.lease, request_id: id } });
  assert.equal(foreign.status, 404); assert.equal(foreign.json.error, 'attempt_not_found');
  const fresh = await post(s, '/complete', { request_id: rid() });          // a new completion request is still refused
  assert.equal(fresh.status, 409);
  const submitId = rid();
  const s2 = await setup();
  await start(s2, 'lesen'); await post(s2, '/modules/lesen/submit', { request_id: submitId });
  const crossRoute = await post(s2, '/complete', { request_id: submitId });  // another route's request id never replays here
  assert.equal(crossRoute.status, 409); assert.notEqual(crossRoute.json.replayed, true);
  assert.equal(await n(s.env, "SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action = 'attempt_completed'", s.attempt), 1);
});
