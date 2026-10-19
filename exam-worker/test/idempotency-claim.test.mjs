/* IN-FLIGHT IDEMPOTENCY CLAIMS (ABSENT → PENDING → COMPLETED) for start, Hören interrupted and complete.
   Real Worker + in-memory D1 shim, deterministic barriers, no sleeps. Logic evidence only: D1 batch atomicity,
   claim races and takeover behaviour must also pass on a non-production D1 (exam-worker/verification/idempotency-d1/).

   Barriers hook the FIRST business write of a request — DB.batch() on the atomic path, the first guarded UPDATE on
   the legacy path — so every test also runs (and fails, without hanging) against the pre-claim code:
     hold — stop right before that write (in flight, nothing committed)
     die  — perform that write, then never return (the Worker died after committing, before answering) */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { setup, call, newUser, grant, rid, PROXY_SECRET, WORKER_DIR } from './harness.mjs';
import { A, post, start, submit } from './flow.mjs';
import worker from '../src/index.js';
import { createApi, ExamApiError } from '../../exam/js/api.js';

const CLAIM_TTL_MS = 60_000;   // core.js CLAIM_TTL_MS (not imported, so this file also loads against the pre-claim code)
const BUSINESS = /^(UPDATE attempt_modules|UPDATE audio_plays|UPDATE attempts)/;
function barrier(s, mode) {
  let release, reachedResolve; const gate = new Promise((r) => { release = r; }); const reached = new Promise((r) => { reachedResolve = r; });
  let used = false;
  const hit = async (exec) => {
    if (used) return exec(); used = true; reachedResolve();
    if (mode === 'hold') { await gate; return exec(); }
    await exec(); return new Promise(() => {});                     // die: committed, never answers
  };
  const DB = Object.create(s.env.DB);
  DB.batch = (stmts) => hit(() => s.env.DB.batch(stmts));
  DB.prepare = (sql) => {
    const st = s.env.DB.prepare(sql);
    if (!BUSINESS.test(sql)) return st;
    // keep the statement's prototype (bind/first/_runSync for batch) and only intercept a direct run()
    return Object.assign(Object.create(st), { bind: (...b) => { const x = st.bind(...b); return Object.assign(Object.create(x), { run: () => hit(() => x.run()) }); } });
  };
  return { env: { ...s.env, DB }, reached, release };
}
const q = async (s, sql, ...b) => (await s.env.DB.prepare(sql).bind(s.attempt, ...b).first()).n;
const effects = async (s) => ({
  started: await q(s, "SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action = 'module_started'"),
  interrupted: await q(s, "SELECT COUNT(*) AS n FROM incidents WHERE attempt_id = ?1 AND kind = 'listening_play_interrupted'"),
  results: await q(s, 'SELECT COUNT(*) AS n FROM results WHERE attempt_id = ?1'),
  completed: await q(s, "SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action = 'attempt_completed'")
});
const toModule = async (s, mod) => { for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) { if (m === mod) return; await start(s, m); if (m === 'hoeren') await post(s, '/hoeren/events', { type: 'ready' }); await submit(s, m); } };
const ROUTES = {
  start: { prep: async () => {}, path: '/modules/lesen/start', body: {}, once: { started: 1 } },
  interrupted: { prep: async (s) => { await toModule(s, 'hoeren'); await start(s, 'hoeren'); const r = await post(s, '/hoeren/events', { type: 'ready' });
      s.clock.t = r.json.plan_started_at + 2_000; await post(s, '/hoeren/events', { type: 'play_start', phase_seq: 1 }); s.clock.t += 500; },
    path: '/hoeren/events', body: { type: 'interrupted', phase_seq: 1 }, once: { interrupted: 1 },
    // past the 60 s claim TTL the 1.5 s clip has long finished: a takeover re-validates and is refused; nothing committed
    afterTtl: { status: 409, error: 'play_already_finished' } },
  complete: { prep: async (s) => { await toModule(s, 'none'); }, path: '/complete', body: {}, once: { results: 1, completed: 1 } }
};
async function scenario(name, mode) {
  const R = ROUTES[name];
  const s = await setup(); await R.prep(s);
  const base = await effects(s);
  const request_id = rid();
  const b = barrier(s, mode);
  const first = call(b.env, 'POST', A(s, R.path), { user: s.user, body: { lease_id: s.lease, ...R.body, request_id } });
  await Promise.race([b.reached, first]);
  const again = () => post(s, R.path, { ...R.body, request_id });
  const applied = async () => { const now = await effects(s); return Object.fromEntries(Object.keys(R.once).map((k) => [k, now[k] - base[k]])); };
  const record = async () => s.env.DB.prepare('SELECT * FROM request_log WHERE attempt_id = ?1 AND request_id = ?2').bind(s.attempt, request_id).first();
  return { s, R, b, first, again, applied, record, request_id };
}
const zero = (o) => Object.fromEntries(Object.keys(o).map((k) => [k, 0]));
/* jump past the claim TTL, keeping (or, after complete's lease is gone... never — complete keeps it until commit) the lease */
async function pastTtl(s) { s.clock.t += CLAIM_TTL_MS + 1; const l = await call(s.env, 'POST', A(s, '/lease'), { user: s.user, body: { device_id: s.device, takeover: true } }); s.lease = l.json.lease.lease_id; }

/* ---------- contract per route ---------- */
for (const name of Object.keys(ROUTES)) {
  test(`CLAIM ${name}: a same-id duplicate while the original is in flight gets 503 request_in_progress (Retry-After) and executes nothing; afterwards it replays`, async () => {
    const { R, b, first, again, applied } = await scenario(name, 'hold');
    const dup = await again();
    assert.equal(dup.status, 503, JSON.stringify(dup.json));
    assert.equal(dup.json.error, 'request_in_progress'); assert.equal(dup.json.retry_after_s, 1); assert.equal(dup.headers.get('retry-after'), '1');
    assert.deepEqual(await applied(), zero(R.once), 'the duplicate executed nothing');
    b.release();
    const o = await first;
    assert.equal(o.status, 200, JSON.stringify(o.json)); assert.notEqual(o.json.replayed, true);
    const r = await again();
    assert.equal(r.status, 200); assert.equal(r.json.replayed, true);
    assert.deepEqual({ ...r.json, replayed: undefined }, { ...o.json, replayed: undefined }, 'the stored original response');
    assert.deepEqual(await applied(), R.once, 'exactly once');
  });

  test(`CLAIM ${name}: the Worker dies after committing, before answering — the retry replays the committed response, nothing twice`, async () => {
    const { R, again, applied } = await scenario(name, 'die');
    const r = await again();
    assert.equal(r.status, 200, JSON.stringify(r.json)); assert.equal(r.json.replayed, true);
    assert.deepEqual(await applied(), R.once);
  });

  test(`CLAIM ${name}: the Worker dies before its final batch — 503 within the TTL; after it, a compare-and-set takeover executes exactly once`, async () => {
    const { s, R, again, applied } = await scenario(name, 'hold');     // never released
    assert.equal((await again()).status, 503);
    await pastTtl(s);
    const r = await again();
    if (R.afterTtl) {                                                   // the takeover re-validated and refused
      assert.equal(r.status, R.afterTtl.status, JSON.stringify(r.json)); assert.equal(r.json.error, R.afterTtl.error);
      assert.deepEqual(await applied(), zero(R.once), 'nothing committed by the dead original or the taker');
      assert.equal(await q(s, "SELECT COUNT(*) AS n FROM request_log WHERE attempt_id = ?1 AND state = 'pending'"), 0, 'the refused taker released its claim');
      return;
    }
    assert.equal(r.status, 200, JSON.stringify(r.json)); assert.notEqual(r.json.replayed, true);
    assert.deepEqual(await applied(), R.once);
    assert.equal((await again()).json.replayed, true);
  });

  test(`CLAIM ${name}: an original resuming after a takeover fails its claim assertion — rolled back, answered with the taker's response, nothing twice`, async () => {
    const { s, R, b, first, again, applied, record } = await scenario(name, 'hold');
    await pastTtl(s);
    const taker = await again();
    if (R.afterTtl) {                                                   // taker refused and released; the original resumes
      assert.equal(taker.json.error, R.afterTtl.error);
      b.release();
      const o = await first;
      assert.equal(o.status, R.afterTtl.status, JSON.stringify(o.json)); assert.equal(o.json.error, R.afterTtl.error);
      assert.deepEqual(await applied(), zero(R.once), 'its claim was gone: the batch rolled back, nothing applied');
      assert.equal(await record(), null);
      return;
    }
    assert.equal(taker.status, 200, JSON.stringify(taker.json));
    b.release();
    const o = await first;
    assert.equal(o.status, 200, JSON.stringify(o.json)); assert.equal(o.json.replayed, true);
    assert.deepEqual(await applied(), R.once);
    const rec = await record();
    assert.equal(rec.state, 'completed', 'the resumed original did not delete or overwrite the completed record');
    assert.deepEqual({ ...JSON.parse(rec.response_json) }, { ...taker.json });
  });
}

/* ---------- atomicity of the final batch ---------- */
test('CLAIM start: a failing statement in the final batch rolls everything back (no partial start) and releases the claim; a retry then runs once', async () => {
  const s = await setup();
  const DB = Object.create(s.env.DB);
  DB.prepare = (sql) => s.env.DB.prepare(sql.startsWith('INSERT INTO audit_log') ? 'INSERT INTO no_such_table VALUES (1)' : sql);
  const request_id = rid();
  const r = await call({ ...s.env, DB }, 'POST', A(s, '/modules/lesen/start'), { user: s.user, body: { lease_id: s.lease, request_id } });
  assert.notEqual(r.status, 200);
  assert.equal((await s.env.DB.prepare("SELECT status FROM attempt_modules WHERE attempt_id = ?1 AND module = 'lesen'").bind(s.attempt).first()).status, 'available', 'no partial effect');
  assert.equal((await s.env.DB.prepare('SELECT status FROM attempts WHERE id = ?1').bind(s.attempt).first()).status, 'created');
  assert.equal(await q(s, 'SELECT COUNT(*) AS n FROM request_log WHERE attempt_id = ?1'), 0, 'claim released, nothing recorded');
  const again = await post(s, '/modules/lesen/start', { request_id });
  assert.equal(again.status, 200, JSON.stringify(again.json));
  assert.equal(await q(s, "SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action = 'module_started'"), 1);
});

/* ---------- guards that must not move ---------- */
test('CLAIM guards: refusals release only their own claim; a new request id is still refused; cross-route, cross-user and cross-attempt stay isolated', async () => {
  const s = await setup();
  await start(s, 'lesen');
  const again = await post(s, '/modules/lesen/start', {});               // new id: the state rule still applies
  assert.equal(again.status, 409); assert.equal(again.json.error, 'invalid_transition');
  assert.equal(await q(s, "SELECT COUNT(*) AS n FROM request_log WHERE attempt_id = ?1 AND state = 'pending'"), 0, 'the refusal left no claim');
  const saveId = rid();
  assert.equal((await post(s, '/modules/lesen/answers', { request_id: saveId, answers: [{ item_id: 'itm:b1:syn-l1-01', value: { option_id: 'richtig' }, seq: 1 }] })).status, 200);
  const reused = await post(s, '/modules/lesen/start', { request_id: saveId });
  assert.equal(reused.status, 409); assert.equal(reused.json.error, 'request_id_reused');
  // a pending claim on one route is never answered for another route; other users cannot reach it
  const s2 = await setup();
  const b = barrier(s2, 'hold');
  const pendingId = rid();
  const held = call(b.env, 'POST', A(s2, '/modules/lesen/start'), { user: s2.user, body: { lease_id: s2.lease, request_id: pendingId } });
  await b.reached;
  const cross = await post(s2, '/hoeren/events', { request_id: pendingId, type: 'ready' });
  assert.equal(cross.status, 409); assert.equal(cross.json.error, 'request_id_reused');
  const other = newUser(); await grant(s2.env, other);
  const foreign = await call(s2.env, 'POST', A(s2, '/modules/lesen/start'), { user: other, body: { lease_id: s2.lease, request_id: pendingId } });
  assert.equal(foreign.status, 404);
  b.release(); assert.equal((await held).status, 200);
  // the same request id in another attempt is independent
  const s3 = await setup();
  assert.equal((await post(s3, '/modules/lesen/start', { request_id: pendingId })).status, 200);
});

/* ---------- migration ---------- */
test('MIGRATION 0002: existing request_log rows become completed records (never pending); state and assertion columns are constrained', () => {
  const db = new DatabaseSync(':memory:');
  const dir = path.join(WORKER_DIR, 'migrations');
  db.exec(fs.readFileSync(path.join(dir, '0001_exam_init.sql'), 'utf8'));
  db.exec("INSERT INTO request_log (attempt_id, request_id, route, status, response_json, created_at) VALUES ('att_x', 'rq_legacy_000001', 'complete', 200, '{\"ok\":true}', 1)");
  db.exec(fs.readFileSync(path.join(dir, '0002_idempotency_claims.sql'), 'utf8'));
  assert.deepEqual({ ...db.prepare('SELECT state, claim_token, claimed_at, response_json FROM request_log').get() }, { state: 'completed', claim_token: null, claimed_at: null, response_json: '{"ok":true}' });
  assert.throws(() => db.exec("UPDATE request_log SET state = 'other'"), /CHECK/);
  assert.throws(() => db.exec("INSERT INTO idempotency_assertions (token, ok) VALUES ('t', 0)"), /CHECK/);
});

/* ---------- client contract ---------- */
const jsonRes = (status, body) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });
test('CLIENT: a 503 request_in_progress is retried with the SAME request id, never sooner than retry_after_s; then the replay is returned', async () => {
  const seen = [], sleeps = [];
  let n = 0;
  const fetchImpl = async (url, init) => { seen.push(JSON.parse(init.body).request_id); return n++ < 2 ? jsonRes(503, { ok: false, error: 'request_in_progress', retry_after_s: 1 }) : jsonRes(200, { ok: true, replayed: true }); };
  const api = createApi({ base: '', fetchImpl, sleep: async (ms) => { sleeps.push(ms); } });
  assert.equal((await api.start('att_x', 'ls_x', 'lesen')).replayed, true);
  assert.equal(new Set(seen).size, 1, 'one request id for the original and both retries');
  assert.deepEqual(sleeps, [1000, 1000], 'max(backoff 400 / 800 ms, advised 1000 ms)');
});

test('CLIENT: a claim that outlives all retries fails the call with request_in_progress (as any failed call); the advised wait is capped at 10 s', async () => {
  const sleeps = [];
  const api = createApi({ base: '', fetchImpl: async () => jsonRes(503, { ok: false, error: 'request_in_progress', retry_after_s: 3600 }), sleep: async (ms) => { sleeps.push(ms); } });
  await assert.rejects(api.complete('att_x', 'ls_x'), (e) => e instanceof ExamApiError && e.code === 'request_in_progress' && e.status === 503);
  assert.deepEqual(sleeps, [10_000, 10_000, 10_000]);
});

test('CLIENT ↔ WORKER: a real in-flight duplicate gets 503, the client waits as advised, retries the same id and receives the replay', async () => {
  const { s, b, first, request_id } = await scenario('start', 'hold');
  const sleeps = [];
  const fetchImpl = async (url, init) => worker.fetch(new Request('https://klarweg-exam.internal' + url, { ...init, headers: { ...init.headers, 'x-kw-proxy-auth': PROXY_SECRET, 'x-kw-user': s.user } }), s.env);
  const api = createApi({ base: '', fetchImpl, sleep: async (ms) => { sleeps.push(ms); if (sleeps.length === 1) { b.release(); await first; } } });
  const r = await api.call('POST', `/exam/v1/attempts/${s.attempt}/modules/lesen/start`, { body: { lease_id: s.lease, request_id } });
  assert.equal(r.replayed, true);
  assert.deepEqual(sleeps, [1000]);
});
