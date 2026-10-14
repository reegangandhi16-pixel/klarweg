/* Retention safety under failures, retries and repeated/overlapping runs (OD-21; retention.js). */
import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../src/index.js';
import { runRetention, RETENTION_ATTEMPTS_PER_RUN } from '../src/retention.js';
import { makeEnv, call, newUser, grant, role, rid, dev, pkgFor } from './harness.mjs';
import { start, submit, answerObjective, runHoeren, runSchreiben, runSprechen, complete } from './flow.mjs';

const DAY = 86_400_000;
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
async function setupEnv(days = '30') {
  const h = makeEnv({ flags: { EXAM_RECORDING_RETENTION_DAYS: days } });
  const raters = [newUser(), newUser()];
  for (const r of raters) await role(h.env, r, 'rater');
  return { h, raters };
}
const n = async (env, sql, ...a) => (await env.DB.prepare(sql).bind(...a).first()).n;
const state = async (s) => ({
  chunks: await n(s.env, 'SELECT COUNT(*) AS n FROM recording_chunks WHERE attempt_id = ?1', s.attempt),
  turns: await n(s.env, 'SELECT COUNT(*) AS n FROM recording_turns WHERE attempt_id = ?1', s.attempt),
  objects: [...s.env.RECORDINGS.objects.keys()].filter((k) => k.startsWith(`rec/${s.attempt}/`)).length
});
const auditCount = (env, action, attempt) => n(env, 'SELECT COUNT(*) AS n FROM audit_log WHERE action = ?1 AND attempt_id = ?2', action, attempt);
const GONE = { chunks: 0, turns: 0, objects: 0 };

test('SAFETY A: objects deleted but the D1 batch fails → rows briefly point at missing objects; failure audited; next run recovers once', async () => {
  const { h, raters } = await setupEnv();
  const s = await finalAttempt(h, raters);
  const before = await state(s);
  h.advance(31 * DAY);
  const batch = h.env.DB.batch;
  h.env.DB.batch = async () => { throw new Error('d1 unavailable'); };
  await runRetention(h.env, h.env.__clock());
  h.env.DB.batch = batch;
  assert.deepEqual(await state(s), { chunks: before.chunks, turns: before.turns, objects: 0 }, 'objects are gone, rows remain (documented window)');
  assert.equal(await auditCount(h.env, 'recordings_deleted', s.attempt), 0, 'never reported as deleted');
  assert.equal(await auditCount(h.env, 'recordings_delete_failed', s.attempt), 1, 'the object deletion is on record');
  h.advance(3_600_000);   // after the first retry backoff (1 h)
  await runRetention(h.env, h.env.__clock());
  assert.deepEqual(await state(s), GONE);
  assert.equal(await auditCount(h.env, 'recordings_deleted', s.attempt), 1);
});

test('SAFETY A2: deletion and its audit row commit together — a failing audit write deletes no rows', async () => {
  const { h, raters } = await setupEnv();
  const s = await finalAttempt(h, raters);
  const before = await state(s);
  h.advance(31 * DAY);
  const prepare = h.env.DB.prepare;
  h.env.DB.prepare = (sql) => {
    const st = prepare(sql);
    if (!/INSERT INTO audit_log/.test(sql)) return st;
    const bind = st.bind.bind(st);
    st.bind = (...a) => { const b = bind(...a); b.run = async () => { throw new Error('audit write failed'); }; b._runSync = () => { throw new Error('audit write failed'); }; return b; };
    return st;
  };
  await runRetention(h.env, h.env.__clock());
  h.env.DB.prepare = prepare;
  const mid = await state(s);
  assert.equal(mid.chunks, before.chunks, 'rows stay when the audit cannot be written, so the attempt stays eligible');
  await runRetention(h.env, h.env.__clock());
  assert.deepEqual(await state(s), GONE);
  assert.equal(await auditCount(h.env, 'recordings_deleted', s.attempt), 1, 'the deletion is audited exactly once');
});

test('SAFETY C: two overlapping runs on the same attempt → one deletion audit, consistent final state', async () => {
  const { h, raters } = await setupEnv();
  const s = await finalAttempt(h, raters);
  h.advance(31 * DAY);
  await Promise.all([runRetention(h.env, h.env.__clock()), runRetention(h.env, h.env.__clock())]);
  assert.deepEqual(await state(s), GONE);
  assert.equal(await auditCount(h.env, 'recordings_deleted', s.attempt), 1, 'no duplicate deletion record');
});

test('SAFETY D: voided attempts are never deleted; the clock is the LATER of the last Sprechen rating and the final score', async () => {
  const { h, raters } = await setupEnv();
  const voided = await finalAttempt(h, raters);
  await h.env.DB.prepare("UPDATE attempts SET status = 'voided' WHERE id = ?1").bind(voided.attempt).run();
  const late = await finalAttempt(h, raters);      // score recomputed later than its last rating
  const lateRating = await finalAttempt(h, raters); // a Sprechen rating later than the score computation
  const base = h.env.__clock();
  await h.env.DB.prepare("UPDATE module_scores SET computed_at = ?2 WHERE attempt_id = ?1 AND module = 'sprechen'").bind(late.attempt, base + 5 * DAY).run();
  await h.env.DB.prepare("UPDATE ratings SET submitted_at = ?2 WHERE attempt_id = ?1 AND module = 'sprechen' AND round = 2").bind(lateRating.attempt, base + 7 * DAY).run();
  h.clock.t = base + 35 * DAY - 1; await runRetention(h.env, h.env.__clock());
  assert.notDeepEqual(await state(late), GONE, '30 days after the recomputation, not after the rating');
  h.clock.t = base + 35 * DAY; await runRetention(h.env, h.env.__clock());
  assert.deepEqual(await state(late), GONE);
  assert.notDeepEqual(await state(lateRating), GONE);
  h.clock.t = base + 37 * DAY; await runRetention(h.env, h.env.__clock());
  assert.deepEqual(await state(lateRating), GONE, '30 days after the later rating');
  h.clock.t = base + 400 * DAY; await runRetention(h.env, h.env.__clock());
  const v = await state(voided);
  assert.ok(v.chunks > 0 && v.objects === v.chunks, 'voided: kept');
});

test('SAFETY E: one attempt failing does not stop others; batches stay bounded; storage calls are one per attempt', async () => {
  const { h, raters } = await setupEnv();
  const bad = await finalAttempt(h, raters);
  const good = await finalAttempt(h, raters);
  h.advance(31 * DAY);
  const del = h.env.RECORDINGS.delete;
  let calls = 0;
  h.env.RECORDINGS.delete = async (k) => { calls++; if ([].concat(k).some((x) => x.startsWith(`rec/${bad.attempt}/`))) throw new Error('r2 down'); return del(k); };
  const out = await runRetention(h.env, h.env.__clock());
  assert.deepEqual(await state(good), GONE, 'the unrelated attempt is fully processed');
  assert.notDeepEqual(await state(bad), GONE);
  assert.equal(out.deleted.length, 2);
  assert.ok(calls <= 2, `storage delete calls per run: ${calls}`);
  assert.equal(await auditCount(h.env, 'recordings_deleted', bad.attempt), 0);
  h.env.RECORDINGS.delete = del;
  h.advance(3_600_000);   // after the first retry backoff (1 h)
  await runRetention(h.env, h.env.__clock());
  assert.deepEqual(await state(bad), GONE);
  assert.equal(RETENTION_ATTEMPTS_PER_RUN, 20);
  const logs = h.env.__logs.join('\n');
  assert.equal(/rec\/|synthetic-itm|r2 down/.test(logs), false, 'no object keys, recording bytes or raw error messages in logs');
});

test('SAFETY kill switch: with EXAM_ENABLED off the cron deletes nothing (RUNBOOK: switching the exam off stops the sweep)', async () => {
  const { h, raters } = await setupEnv();
  const s = await finalAttempt(h, raters);
  const before = await state(s);
  h.advance(31 * DAY);
  h.env.EXAM_ENABLED = 'off';
  await worker.scheduled({ cron: '*/5 * * * *' }, h.env);
  assert.deepEqual(await state(s), before);
  h.env.EXAM_ENABLED = 'on';
  await worker.scheduled({ cron: '*/5 * * * *' }, h.env);
  assert.deepEqual(await state(s), GONE);
});

test('SAFETY E2: at most RETENTION_ATTEMPTS_PER_RUN attempts per run, oldest first; the next run takes the rest', async () => {
  const { h, raters } = await setupEnv();
  const all = [];
  for (let i = 0; i < RETENTION_ATTEMPTS_PER_RUN + 1; i++) { all.push(await finalAttempt(h, raters)); h.advance(1000); }
  h.advance(31 * DAY);
  const first = await runRetention(h.env, h.env.__clock());
  assert.equal(first.deleted.length, RETENTION_ATTEMPTS_PER_RUN);
  assert.deepEqual(first.deleted.map((d) => d.attempt_id), all.slice(0, RETENTION_ATTEMPTS_PER_RUN).map((s) => s.attempt), 'oldest final rating first');
  assert.notDeepEqual(await state(all.at(-1)), GONE);
  const second = await runRetention(h.env, h.env.__clock());
  assert.deepEqual(second.deleted.map((d) => d.attempt_id), [all.at(-1).attempt]);
  for (const s of all) assert.deepEqual(await state(s), GONE);
});
