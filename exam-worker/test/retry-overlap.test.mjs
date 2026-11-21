/* RETRY OVERLAP (real Worker, in-memory D1 shim, deterministic interleaving): a client retry with the SAME request id
   that looked up the idempotency record before its original committed, and runs after the original has committed.
   The retry must replay the original's response instead of being refused by the state the original created.
   Logic evidence only — not evidence about Cloudflare D1 production timing. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, newUser, grant, rid } from './harness.mjs';
import { A, post, start, submit } from './flow.mjs';

/* Fire the retry first, hold it right after its request_log lookup, run the original to completion, then release. */
async function overlapRetry(s, path, body) {
  let release; const gate = new Promise((r) => { release = r; });
  let held = false;
  const DB = Object.create(s.env.DB);
  DB.prepare = (sql) => {
    const st = s.env.DB.prepare(sql);
    if (!held && sql.startsWith('SELECT route, status, response_json FROM request_log')) {
      held = true;
      return { bind: (...b) => { const x = st.bind(...b); return { ...x, first: async () => { const v = await x.first(); await gate; return v; } }; } };
    }
    return st;
  };
  const request_id = rid();
  const retry = call({ ...s.env, DB }, 'POST', A(s, path), { user: s.user, body: { lease_id: s.lease, ...body, request_id } });
  await new Promise((r) => setImmediate(r));
  const original = await post(s, path, { ...body, request_id });
  release();
  return { original, retry: await retry };
}
const count = async (s, sql) => (await s.env.DB.prepare(sql).bind(s.attempt).first()).n;
const toModule = async (s, mod) => { for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) { if (m === mod) return; await start(s, m); if (m === 'hoeren') await post(s, '/hoeren/events', { type: 'ready' }); await submit(s, m); } };

test('RETRY OVERLAP start: the retry replays the started module instead of invalid_transition; one start', async () => {
  const s = await setup();
  const { original, retry } = await overlapRetry(s, '/modules/lesen/start', {});
  assert.equal(original.status, 200);
  assert.equal(retry.status, 200, JSON.stringify(retry.json)); assert.equal(retry.json.replayed, true);
  assert.equal(retry.json.module.deadline_at, original.json.module.deadline_at);
  assert.equal(await count(s, "SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action = 'module_started'"), 1);
});

test('RETRY OVERLAP Hören play_start: the retry replays (not play_limit_reached), so the client plays the clip; one play row', async () => {
  const s = await setup();
  await toModule(s, 'hoeren'); await start(s, 'hoeren');
  const ready = await post(s, '/hoeren/events', { type: 'ready' });
  s.clock.t = ready.json.plan_started_at + 2_000;            // synthetic plan: the first play phase (seq 1) starts at 2 s
  const { original, retry } = await overlapRetry(s, '/hoeren/events', { type: 'play_start', phase_seq: 1 });
  assert.equal(original.status, 200);
  assert.equal(retry.status, 200, JSON.stringify(retry.json)); assert.equal(retry.json.replayed, true);
  assert.equal(await count(s, 'SELECT COUNT(*) AS n FROM audio_plays WHERE attempt_id = ?1'), 1);
});

test('RETRY OVERLAP Hören interrupted: the retry replays (not play_not_started); one incident', async () => {
  const s = await setup();
  await toModule(s, 'hoeren'); await start(s, 'hoeren');
  const ready = await post(s, '/hoeren/events', { type: 'ready' });
  s.clock.t = ready.json.plan_started_at + 2_000;
  await post(s, '/hoeren/events', { type: 'play_start', phase_seq: 1 });
  s.clock.t += 500;
  const { retry } = await overlapRetry(s, '/hoeren/events', { type: 'interrupted', phase_seq: 1 });
  assert.equal(retry.status, 200, JSON.stringify(retry.json)); assert.equal(retry.json.outcome, 'interrupted');
  assert.equal(await count(s, "SELECT COUNT(*) AS n FROM incidents WHERE attempt_id = ?1 AND kind = 'listening_play_interrupted'"), 1);
});

test('RETRY OVERLAP complete: the retry replays the result (not invalid_transition); one result row, one completion audit', async () => {
  const s = await setup();
  await toModule(s, 'none');
  const { original, retry } = await overlapRetry(s, '/complete', {});
  assert.equal(original.status, 200);
  assert.equal(retry.status, 200, JSON.stringify(retry.json)); assert.equal(retry.json.replayed, true);
  assert.deepEqual(retry.json.result, original.json.result);
  assert.equal(await count(s, 'SELECT COUNT(*) AS n FROM results WHERE attempt_id = ?1'), 1);
  assert.equal(await count(s, "SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action = 'attempt_completed'"), 1);
});

test('RETRY OVERLAP boundaries: a different request id is still refused; another route\'s id never replays; other users get 404', async () => {
  const s = await setup();
  await start(s, 'lesen');
  const again = await post(s, '/modules/lesen/start', {});                       // new id: the real state still applies
  assert.equal(again.status, 409); assert.equal(again.json.error, 'invalid_transition');
  const saveId = rid();
  assert.equal((await post(s, '/modules/lesen/answers', { request_id: saveId, answers: [{ item_id: 'itm:b1:syn-l1-01', value: { option_id: 'richtig' }, seq: 1 }] })).status, 200);
  const reused = await post(s, '/modules/lesen/start', { request_id: saveId });   // a save's id on start: refused, no replay
  assert.equal(reused.status, 409); assert.equal(reused.json.error, 'request_id_reused');
  const other = newUser(); await grant(s.env, other);
  const foreign = await call(s.env, 'POST', A(s, '/modules/lesen/start'), { user: other, body: { lease_id: s.lease, request_id: saveId } });
  assert.equal(foreign.status, 404); assert.equal(foreign.json.error, 'attempt_not_found');
});

test('CONSENT: granting is idempotent — duplicate or overlapping grants of the same version leave one consent and one audit entry', async () => {
  const s = await setup();
  await toModule(s, 'sprechen');
  const body = { granted: true, version: 'rec-consent@1' };
  await Promise.all([post(s, '/sprechen/consent', body), post(s, '/sprechen/consent', body)]);   // different request ids
  await overlapRetry(s, '/sprechen/consent', body);
  assert.equal(await count(s, "SELECT COUNT(*) AS n FROM consents WHERE attempt_id = ?1 AND withdrawn_at IS NULL"), 1);
  assert.equal(await count(s, "SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action = 'speaking_consent'"), 1);
  assert.equal((await post(s, '/sprechen/consent', { granted: true, version: 'rec-consent@2' })).status, 200);   // a new version is recorded
  assert.equal(await count(s, "SELECT COUNT(*) AS n FROM consents WHERE attempt_id = ?1"), 2);
});
