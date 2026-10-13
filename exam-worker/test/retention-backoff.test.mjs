/* Retention retry backoff and fair selection (OD-21; retention.js): a persistently failing deletion is retried on a
   growing, capped schedule (never suppressed), writes one audit row per real retry, and cannot keep newer healthy
   attempts out of the 20-attempt batch. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { runRetention, RETENTION_ATTEMPTS_PER_RUN } from '../src/retention.js';
import { makeEnv, call, newUser, grant, role, rid, dev, pkgFor } from './harness.mjs';
import { start, submit, answerObjective, runHoeren, runSchreiben, runSprechen, complete } from './flow.mjs';

const DAY = 86_400_000, HOUR = 3_600_000, CRON = 5 * 60_000;
const SP_UNITS = [['itm:b1:syn-sp1', 'p1'], ['itm:b1:syn-sp2', 'p2'], ['itm:b1:syn-sp3', 'p3'], ['sprechen:pron', 'pron']];

async function finalAttempt(h, raters) {
  const user = newUser(); await grant(h.env, user);
  const r = await call(h.env, 'POST', '/exam/v1/attempts', { user, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dev() } });
  const s = { ...h, user, attempt: r.json.attempt_id, lease: r.json.lease.lease_id };
  await start(s, 'lesen'); await answerObjective(s, 'lesen'); await submit(s, 'lesen');
  await runHoeren(s, (it, k) => k.correct); await submit(s, 'hoeren');
  await runSchreiben(s); await submit(s, 'schreiben');
  await runSprechen(s); await submit(s, 'sprechen');
  await complete(s);
  const rs = pkgFor(s.build, 'sprechen').rubric_structure;
  for (const [rater, round] of [[raters[0], 1], [raters[1], 2]]) for (const [id, rub] of SP_UNITS) {
    const x = await call(s.env, 'POST', '/exam/v1/admin/ratings', { user: rater, body: { attempt_id: s.attempt, item_id: id, round,
      bands: Object.fromEntries(rs[`rub:b1:sprechen:${rub}@1`].criteria.map((c) => [c, 'B'])) } });
    assert.equal(x.status, 200, JSON.stringify(x.json));
  }
  return s;
}
async function setupEnv() {
  const h = makeEnv({ flags: { EXAM_RECORDING_RETENTION_DAYS: '30' } });
  const raters = [newUser(), newUser()];
  for (const r of raters) await role(h.env, r, 'rater');
  return { h, raters };
}
const n = async (env, sql, ...a) => (await env.DB.prepare(sql).bind(...a).first()).n;
const rows = (s) => n(s.env, 'SELECT COUNT(*) AS n FROM recording_chunks WHERE attempt_id = ?1', s.attempt);
const failures = (env, attempt) => n(env, "SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action IN ('recordings_delete_incomplete', 'recordings_delete_failed')", attempt);
const failStorageFor = (h, attempts) => {
  const del = h.env.RECORDINGS.delete;
  const calls = new Map();
  h.env.RECORDINGS.delete = async (keys) => {
    const a = attempts.find((x) => [].concat(keys).some((k) => k.startsWith(`rec/${x}/`)));
    if (a) { calls.set(a, (calls.get(a) || 0) + 1); throw new Error('r2 down'); }
    return del(keys);
  };
  return { calls, restore: () => { h.env.RECORDINGS.delete = del; } };
};

test('BACKOFF: a persistently failing deletion over 24 h of 5-minute runs → a few audited retries, not one row per run', async () => {
  const { h, raters } = await setupEnv();
  const s = await finalAttempt(h, raters);
  h.advance(31 * DAY);
  const f = failStorageFor(h, [s.attempt]);
  for (let i = 0; i < DAY / CRON; i++) { await runRetention(h.env, h.env.__clock()); h.advance(CRON); }
  const tries = f.calls.get(s.attempt);
  assert.equal(await failures(h.env, s.attempt), tries, 'exactly one audit row per real retry');
  assert.ok(tries >= 2 && tries <= 6, `retries in 24 h: ${tries} (was one per run, 288)`);
  assert.ok(await rows(s) > 0, 'nothing reported or removed as deleted');
});

test('BACKOFF: no retry before the backoff window ends, a retry exactly when it ends, and recovery is audited once', async () => {
  const { h, raters } = await setupEnv();
  const s = await finalAttempt(h, raters);
  h.advance(31 * DAY);
  const f = failStorageFor(h, [s.attempt]);
  const t0 = h.env.__clock();
  await runRetention(h.env, t0);
  assert.equal(f.calls.get(s.attempt), 1);
  f.restore();
  h.clock.t = t0 + HOUR - 1; await runRetention(h.env, h.env.__clock());
  assert.ok(await rows(s) > 0, 'still backing off one millisecond before the window ends');
  h.clock.t = t0 + HOUR; await runRetention(h.env, h.env.__clock());
  assert.equal(await rows(s), 0, 'retried and completed when the window ends');
  const done = await h.env.DB.prepare("SELECT detail_json FROM audit_log WHERE attempt_id = ?1 AND action = 'recordings_deleted'").bind(s.attempt).all();
  assert.equal(done.results.length, 1);
  assert.equal(JSON.parse(done.results[0].detail_json).prior_failures, 1, 'the completion records that it followed a failure');
});

test('FAIRNESS: 20 older attempts failing every time do not hold back a newer healthy attempt', async () => {
  const { h, raters } = await setupEnv();
  const failing = [];
  for (let i = 0; i < RETENTION_ATTEMPTS_PER_RUN; i++) failing.push(await finalAttempt(h, raters));
  h.advance(HOUR);
  const healthy = await finalAttempt(h, raters);   // final later than all 20 → last in oldest-first order
  h.advance(31 * DAY);
  const f = failStorageFor(h, failing.map((s) => s.attempt));
  await runRetention(h.env, h.env.__clock());     // the 20 oldest fill this run and fail
  h.advance(CRON); await runRetention(h.env, h.env.__clock());
  assert.equal(await rows(healthy), 0, 'the healthy attempt is deleted on the next run');
  for (const s of failing) assert.ok(await rows(s) > 0);
  h.advance(2 * HOUR); await runRetention(h.env, h.env.__clock());
  assert.ok([...f.calls.values()].every((c) => c >= 2), 'failing attempts are retried later, not suppressed');
});
