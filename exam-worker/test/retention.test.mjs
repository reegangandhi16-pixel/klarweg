/* Speaking-recording retention (register OD-21; retention.js): admin-configured days after the final rating, nothing
   deleted while unset, only final + old-enough attempts, R2 objects and rows removed together, everything else kept,
   every deletion audit-logged, partial failures retried. */
import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../src/index.js';
import { retentionPolicy, runRetention } from '../src/retention.js';
import { makeEnv, call, newUser, grant, role, rid, dev, pkgFor } from './harness.mjs';
import { A, start, submit, answerObjective, runHoeren, runSchreiben, runSprechen, complete } from './flow.mjs';

const DAY = 86_400_000;
const SP_UNITS = [['itm:b1:syn-sp1', 'p1'], ['itm:b1:syn-sp2', 'p2'], ['itm:b1:syn-sp3', 'p3'], ['sprechen:pron', 'pron']];

async function finishedAttempt(h) {
  const user = newUser(); await grant(h.env, user);
  const r = await call(h.env, 'POST', '/exam/v1/attempts', { user, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dev() } });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  const s = { ...h, user, attempt: r.json.attempt_id, lease: r.json.lease.lease_id };
  await start(s, 'lesen'); await answerObjective(s, 'lesen'); await submit(s, 'lesen');
  await runHoeren(s, (it, k) => k.correct); await submit(s, 'hoeren');
  await runSchreiben(s); await submit(s, 'schreiben');
  await runSprechen(s); await submit(s, 'sprechen');
  await complete(s);
  return s;
}
async function rateSprechen(s, rater, round) {
  const rs = pkgFor(s.build, 'sprechen').rubric_structure;
  for (const [id, rub] of SP_UNITS) {
    const crits = rs[`rub:b1:sprechen:${rub}@1`].criteria;
    const x = await call(s.env, 'POST', '/exam/v1/admin/ratings', { user: rater, body: { attempt_id: s.attempt, item_id: id, round, bands: Object.fromEntries(crits.map((c) => [c, 'B'])) } });
    assert.equal(x.status, 200, JSON.stringify(x.json));
  }
}
const count = async (env, sql, ...args) => (await env.DB.prepare(sql).bind(...args).first()).n;
const recordingState = async (s) => ({
  chunks: await count(s.env, 'SELECT COUNT(*) AS n FROM recording_chunks WHERE attempt_id = ?1', s.attempt),
  turns: await count(s.env, 'SELECT COUNT(*) AS n FROM recording_turns WHERE attempt_id = ?1', s.attempt),
  objects: [...s.env.RECORDINGS.objects.keys()].filter((k) => k.startsWith(`rec/${s.attempt}/`)).length
});
const audits = (env, action) => env.DB.prepare('SELECT actor, attempt_id, detail_json FROM audit_log WHERE action = ?1').bind(action).all().then((r) => r.results);
const cron = (env) => worker.scheduled({ cron: '*/5 * * * *' }, env);

test('RETENTION policy value: only an integer 1–3650 enables deletion', () => {
  for (const v of [undefined, null, '']) assert.deepEqual(retentionPolicy({ EXAM_RECORDING_RETENTION_DAYS: v }), { enabled: false, reason: 'not_configured' });
  for (const v of ['0', '-1', '30.5', '3e1', 'abc', '3651', '30 days']) assert.deepEqual(retentionPolicy({ EXAM_RECORDING_RETENTION_DAYS: v }), { enabled: false, reason: 'invalid_value' }, v);
  assert.deepEqual(retentionPolicy({ EXAM_RECORDING_RETENTION_DAYS: '30' }), { enabled: true, days: 30 });
  assert.deepEqual(retentionPolicy({ EXAM_RECORDING_RETENTION_DAYS: ' 7 ' }), { enabled: true, days: 7 });
});

test('RETENTION: deletes exactly the final attempts past the policy age, keeps everything else, audit-logs each deletion', async () => {
  const h = makeEnv();
  const r1 = newUser(), r2 = newUser(); await role(h.env, r1, 'rater'); await role(h.env, r2, 'rater');
  const fin = await finishedAttempt(h);            // two ratings → Sprechen final
  const pending = await finishedAttempt(h);        // one rating → pending, never eligible
  await rateSprechen(fin, r1, 1); await rateSprechen(pending, r1, 1);
  h.advance(10 * DAY);
  await rateSprechen(fin, r2, 2);                  // the FINAL rating: the retention clock starts here
  const finalAt = h.env.__clock();
  assert.equal(await count(h.env, "SELECT COUNT(*) AS n FROM module_scores WHERE attempt_id = ?1 AND module = 'sprechen' AND status = 'final'", fin.attempt), 1);
  const before = await recordingState(fin);
  assert.ok(before.chunks > 0 && before.turns > 0 && before.objects === before.chunks);
  const kept = { scores: await count(h.env, 'SELECT COUNT(*) AS n FROM module_scores WHERE attempt_id = ?1', fin.attempt),
    ratings: await count(h.env, 'SELECT COUNT(*) AS n FROM ratings WHERE attempt_id = ?1', fin.attempt),
    writing: await count(h.env, 'SELECT COUNT(*) AS n FROM writing_final WHERE attempt_id = ?1', fin.attempt) };

  // policy unset: nothing is ever deleted, however old
  h.advance(400 * DAY); await cron(h.env);
  assert.deepEqual(await recordingState(fin), before, 'unset policy deletes nothing');
  h.clock.t = finalAt;

  // policy 30 days: not one millisecond early, then exactly the final attempt
  h.env.EXAM_RECORDING_RETENTION_DAYS = '30';
  h.clock.t = finalAt + 30 * DAY - 1; await cron(h.env);
  assert.deepEqual(await recordingState(fin), before, 'one millisecond before the policy age');
  h.clock.t = finalAt + 30 * DAY; await cron(h.env);
  assert.deepEqual(await recordingState(fin), { chunks: 0, turns: 0, objects: 0 }, 'objects and rows deleted together');
  const p = await recordingState(pending);
  assert.ok(p.chunks > 0 && p.objects === p.chunks && p.turns > 0, 'a pending attempt keeps its recordings');

  // the record of it, and everything that is not a recording, stays
  const a = await audits(h.env, 'recordings_deleted');
  assert.equal(a.length, 1); assert.equal(a[0].actor, 'system:retention'); assert.equal(a[0].attempt_id, fin.attempt);
  assert.deepEqual(JSON.parse(a[0].detail_json), { policy_days: 30, final_at: finalAt, chunks_deleted: before.chunks,
    bytes_deleted: JSON.parse(a[0].detail_json).bytes_deleted, chunks_remaining: 0 });
  assert.ok(JSON.parse(a[0].detail_json).bytes_deleted > 0);
  assert.deepEqual({ scores: await count(h.env, 'SELECT COUNT(*) AS n FROM module_scores WHERE attempt_id = ?1', fin.attempt),
    ratings: await count(h.env, 'SELECT COUNT(*) AS n FROM ratings WHERE attempt_id = ?1', fin.attempt),
    writing: await count(h.env, 'SELECT COUNT(*) AS n FROM writing_final WHERE attempt_id = ?1', fin.attempt) }, kept);
  const res = await call(h.env, 'GET', A(fin, '/result'), { user: fin.user });
  assert.equal(res.status, 200); assert.equal(res.json.result.modules.find((m) => m.module === 'sprechen').status, 'final', 'the learner result is unchanged');
  const prod = await call(h.env, 'GET', `/exam/v1/admin/attempts/${fin.attempt}/productive`, { user: r1 });
  assert.equal(prod.status, 200); assert.deepEqual(prod.json.recordings, [], 'raters see no recording any more');

  // idempotent: a later run finds nothing and writes no further audit row
  h.advance(DAY); await cron(h.env);
  assert.equal((await audits(h.env, 'recordings_deleted')).length, 1);
});

test('RETENTION: a failed object delete call keeps its rows, is audit-logged as incomplete and retried next run', async () => {
  const h = makeEnv({ flags: { EXAM_RECORDING_RETENTION_DAYS: '30' } });
  const r1 = newUser(), r2 = newUser(); await role(h.env, r1, 'rater'); await role(h.env, r2, 'rater');
  const s = await finishedAttempt(h);
  await rateSprechen(s, r1, 1); await rateSprechen(s, r2, 2);
  const before = await recordingState(s);
  const failing = (await h.env.DB.prepare('SELECT r2_key FROM recording_chunks WHERE attempt_id = ?1 ORDER BY r2_key LIMIT 1').bind(s.attempt).first()).r2_key;
  const del = h.env.RECORDINGS.delete;
  h.env.RECORDINGS.delete = async (k) => { if ([].concat(k).includes(failing)) throw new Error('r2 down'); return del(k); };
  h.advance(31 * DAY);
  const out = await runRetention(h.env, h.env.__clock());
  assert.equal(out.deleted[0].complete, false);
  assert.deepEqual(await recordingState(s), before, 'a failed delete call removes no row; turns stay until all chunks are gone');
  assert.equal(await count(h.env, 'SELECT COUNT(*) AS n FROM recording_chunks WHERE attempt_id = ?1 AND r2_key = ?2', s.attempt, failing), 1);
  const inc = await audits(h.env, 'recordings_delete_incomplete');
  assert.equal(inc.length, 1); assert.equal(JSON.parse(inc[0].detail_json).chunks_remaining, before.chunks);
  assert.equal((await audits(h.env, 'recordings_deleted')).length, 0, 'never reported as fully deleted');
  h.env.RECORDINGS.delete = del;
  await runRetention(h.env, h.env.__clock());
  assert.deepEqual(await recordingState(s), { chunks: 0, turns: 0, objects: 0 });
  assert.equal((await audits(h.env, 'recordings_deleted')).length, 1);
});

test('RETENTION: an invalid policy value deletes nothing and is logged without the value', async () => {
  const h = makeEnv({ flags: { EXAM_RECORDING_RETENTION_DAYS: 'thirty' } });
  const r1 = newUser(), r2 = newUser(); await role(h.env, r1, 'rater'); await role(h.env, r2, 'rater');
  const s = await finishedAttempt(h);
  await rateSprechen(s, r1, 1); await rateSprechen(s, r2, 2);
  const before = await recordingState(s);
  h.advance(400 * DAY); await cron(h.env);
  assert.deepEqual(await recordingState(s), before);
  assert.equal((await audits(h.env, 'recordings_deleted')).length, 0);
  assert.ok(h.env.__logs.some((l) => JSON.parse(l).evt === 'retention_misconfigured'));
  assert.equal(h.env.__logs.some((l) => l.includes('thirty')), false, 'the configured value is not echoed');
});
