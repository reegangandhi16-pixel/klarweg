/* F6 — ATOMIC / RECOVERABLE MODULE SUBMISSION. Faults are injected the way
   they happen in production (content bucket outage, corrupt config), not via
   test hooks in the Worker. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, rid } from './harness.mjs';
import { A, post, start, submit, runSchreiben } from './flow.mjs';
import { _clearCaches } from '../src/content.js';
import { finalizeModule } from '../src/core.js';
import worker from '../src/index.js';

const one = async (env, sql, ...b) => (await env.DB.prepare(sql).bind(...b).first());
const status = async (s, m) => (await one(s.env, 'SELECT status FROM attempt_modules WHERE attempt_id = ?1 AND module = ?2', s.attempt, m)).status;
const count = async (s, sql, ...b) => (await one(s.env, sql, s.attempt, ...b)).n;
const auditCount = (s, m) => count(s, "SELECT COUNT(*) AS n FROM audit_log WHERE attempt_id = ?1 AND action = 'module_submitted' AND detail_json LIKE ?2", `%"${m}"%`);

async function toSchreiben(s) {
  await start(s, 'lesen'); await submit(s, 'lesen');
  await start(s, 'hoeren'); await post(s, '/hoeren/events', { type: 'ready' }); await submit(s, 'hoeren');
  await runSchreiben(s);
}

test('F6 finalization failure (content outage) → recoverable; same request id retry succeeds once; next module unlocks exactly once', async () => {
  const s = await setup();
  await toSchreiben(s);
  // fault: the private content bucket loses the Schreiben package (and the isolate cache is cold)
  const pk = (await one(s.env, "SELECT package_key FROM form_modules WHERE module = 'schreiben'")).package_key;
  const saved = s.env.CONTENT.objects.get(pk);
  s.env.CONTENT.objects.delete(pk); _clearCaches();

  const reqId = rid();
  const r1 = await post(s, '/modules/schreiben/submit', { request_id: reqId });
  assert.equal(r1.status, 503); assert.equal(r1.json.error, 'content_unavailable');
  // recoverable intermediate state: closed to saves, nothing finalized, next module still locked
  assert.equal(await status(s, 'schreiben'), 'submitting');
  assert.equal(await status(s, 'sprechen'), 'locked');
  assert.equal(await count(s, 'SELECT COUNT(*) AS n FROM writing_final WHERE attempt_id = ?1'), 0);
  assert.equal(await count(s, "SELECT COUNT(*) AS n FROM module_scores WHERE attempt_id = ?1 AND module = 'schreiben'"), 0);
  assert.equal(await auditCount(s, 'schreiben'), 0);
  const late = await post(s, '/modules/schreiben/answers', { answers: [{ item_id: 'itm:b1:syn-s1', value: { text: 'nach Abgabe' }, seq: 99 }] });
  assert.equal(late.json.error, 'module_submitted');
  // unrelated requests keep working while finalization is pending
  const st = await call(s.env, 'GET', A(s), { user: s.user });
  assert.equal(st.status, 200);
  assert.equal(st.json.modules.find((m) => m.module === 'schreiben').status, 'submitting');

  // recovery: content back, retry the SAME logical submission (same request id)
  s.env.CONTENT.objects.set(pk, saved); _clearCaches();
  const r2 = await post(s, '/modules/schreiben/submit', { request_id: reqId });
  assert.equal(r2.status, 200, JSON.stringify(r2.json));
  assert.equal(r2.json.module.status, 'submitted');
  assert.equal(await status(s, 'sprechen'), 'available');
  assert.equal(await count(s, 'SELECT COUNT(*) AS n FROM writing_final WHERE attempt_id = ?1'), 3);
  assert.equal(await count(s, "SELECT COUNT(*) AS n FROM module_scores WHERE attempt_id = ?1 AND module = 'schreiben'"), 1);
  assert.equal(await auditCount(s, 'schreiben'), 1);
  const wf = await one(s.env, 'SELECT text FROM writing_final WHERE attempt_id = ?1 LIMIT 1', s.attempt);
  assert.notEqual(wf.text, 'nach Abgabe');   // the refused late save never reached the frozen text

  // further retries: replayed / already — never a second finalization
  const r3 = await post(s, '/modules/schreiben/submit', { request_id: reqId });
  assert.equal(r3.json.replayed, true);
  const r4 = await post(s, '/modules/schreiben/submit', {});
  assert.equal(r4.json.already, true);
  assert.equal(await auditCount(s, 'schreiben'), 1);
  assert.equal(await count(s, 'SELECT COUNT(*) AS n FROM writing_final WHERE attempt_id = ?1'), 3);
  assert.equal(await count(s, "SELECT COUNT(*) AS n FROM module_scores WHERE attempt_id = ?1 AND module = 'schreiben'"), 1);
});

test('F6 scoring failure (corrupt config) → recoverable; the cron sweep finalizes after repair; score correct; unlock once', async () => {
  const s = await setup();
  await start(s, 'lesen');
  await post(s, '/modules/lesen/answers', { answers: [{ item_id: 'itm:b1:syn-l1-01', value: { option_id: 'falsch' }, seq: 1 }] });
  const good = (await one(s.env, 'SELECT json FROM level_configs')).json;
  await s.env.DB.prepare("UPDATE level_configs SET json = '{\"modules\":[]}'").run(); _clearCaches();
  const r = await post(s, '/modules/lesen/submit', {});
  assert.equal(r.status, 500);
  assert.equal(await status(s, 'lesen'), 'submitting');
  assert.equal(await status(s, 'hoeren'), 'locked');
  assert.equal(await count(s, 'SELECT COUNT(*) AS n FROM module_scores WHERE attempt_id = ?1'), 0);

  await s.env.DB.prepare('UPDATE level_configs SET json = ?1').bind(good).run(); _clearCaches();
  await worker.scheduled({}, s.env);
  assert.equal(await status(s, 'lesen'), 'submitted');
  assert.equal(await status(s, 'hoeren'), 'available');
  const sc = await one(s.env, "SELECT status, raw, points FROM module_scores WHERE attempt_id = ?1 AND module = 'lesen'", s.attempt);
  assert.equal(sc.status, 'final');
  assert.equal(await count(s, "SELECT COUNT(*) AS n FROM module_scores WHERE attempt_id = ?1 AND module = 'lesen'"), 1);
  assert.equal(await auditCount(s, 'lesen'), 1);
  await worker.scheduled({}, s.env);   // idempotent
  assert.equal(await auditCount(s, 'lesen'), 1);
});

test('F6 deadline auto-submit with a failing finalization is recovered by the next request', async () => {
  const s = await setup();
  const m = (await post(s, '/modules/lesen/start', {})).json.module;
  const good = (await one(s.env, 'SELECT json FROM level_configs')).json;
  await s.env.DB.prepare("UPDATE level_configs SET json = '{\"modules\":[]}'").run(); _clearCaches();
  s.clock.t = m.deadline_at + 10_001;
  const st = await call(s.env, 'GET', A(s), { user: s.user });
  assert.equal(st.status, 200);   // settle defers, it does not fail the request
  const l = st.json.modules.find((x) => x.module === 'lesen');
  assert.equal(l.status, 'submitting'); assert.equal(l.submit_kind, 'auto_deadline');
  await s.env.DB.prepare('UPDATE level_configs SET json = ?1').bind(good).run(); _clearCaches();
  const st2 = await call(s.env, 'GET', A(s), { user: s.user });
  assert.equal(st2.json.modules.find((x) => x.module === 'lesen').status, 'submitted');
  assert.equal(st2.json.modules.find((x) => x.module === 'hoeren').status, 'available');
});

test('F6 concurrent / repeated finalization is a no-op after the first success', async () => {
  const s = await setup();
  await start(s, 'lesen');
  await s.env.DB.prepare("UPDATE attempt_modules SET status = 'submitting', submitted_at = ?2, submit_kind = 'manual' WHERE attempt_id = ?1 AND module = 'lesen'").bind(s.attempt, s.clock.t).run();
  const attempt = await one(s.env, 'SELECT * FROM attempts WHERE id = ?1', s.attempt);
  const [a, b] = await Promise.all([finalizeModule(s.env, attempt, 'lesen'), finalizeModule(s.env, attempt, 'lesen')]);
  assert.equal(a || b, true);
  assert.equal(await finalizeModule(s.env, attempt, 'lesen'), false);
  assert.equal(await auditCount(s, 'lesen'), 1);
  assert.equal(await count(s, "SELECT COUNT(*) AS n FROM module_scores WHERE attempt_id = ?1 AND module = 'lesen'"), 1);
  assert.equal(await status(s, 'hoeren'), 'available');
});
