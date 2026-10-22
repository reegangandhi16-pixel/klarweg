/* Support view: an exam_admin sees a user's attempts, module status and incidents — read-only, minimal, audited. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { makeEnv, newUser, role, call, rid, dev, PRACTICE_FORM_DIR } from './harness.mjs';

const T = '/exam/v1/admin/attempts';
async function setup() {
  const h = makeEnv({ formDirs: [PRACTICE_FORM_DIR] });
  const admin = newUser(), learner = newUser(), rater = newUser(), outsider = newUser();
  await role(h.env, admin, 'exam_admin'); await role(h.env, rater, 'lead_rater');
  const g = await call(h.env, 'POST', '/exam/v1/admin/access/grants', { user: admin, body: { user_id: learner, level: 'b1', scope: 'synthetic', reason: 'support view test' } });
  assert.equal(g.status, 200, JSON.stringify(g.json));
  return { ...h, admin, learner, rater, outsider };
}
const view = (h, actor, userId, opts = {}) => call(h.env, 'GET', `${T}?user_id=${userId}`, { user: actor, ...opts });

test('ADMIN ATTEMPTS: only exam_admin with a fresh second factor; invalid ids refused; nothing audited for refused calls', async () => {
  const h = await setup();
  for (const actor of [h.learner, h.rater, h.outsider]) assert.equal((await view(h, actor, h.learner)).json.error, 'exam_admin_required');
  const stale = await view(h, h.admin, h.learner, { mfa: false });
  assert.equal(stale.status, 401); assert.equal(stale.json.error, 'mfa_required');
  assert.equal((await view(h, h.admin, 'bob')).json.error, 'invalid_user_id');
  assert.equal((await h.env.DB.prepare("SELECT COUNT(*) AS n FROM audit_log WHERE action = 'attempts_viewed'").first()).n, 0);
});

test('ADMIN ATTEMPTS: newest first with module status and incidents; no answers, keys, scores, texts or recordings; every view audited', async () => {
  const h = await setup();
  const created = await call(h.env, 'POST', '/exam/v1/attempts', { user: h.learner, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dev() } });
  assert.equal(created.status, 200, JSON.stringify(created.json));
  const att = created.json.attempt_id;
  await h.env.DB.prepare("INSERT INTO incidents (id, attempt_id, kind, detail_json, created_at) VALUES ('inc_t1', ?1, 'listening_play_interrupted', '{\"phase_seq\":5}', 1)").bind(att).run();
  await h.env.DB.prepare("INSERT INTO incidents (id, attempt_id, kind, detail_json, created_at) VALUES ('inc_t2', ?1, 'lease_takeover', 'not json', 2)").bind(att).run();
  await h.env.DB.prepare("INSERT INTO responses_current (attempt_id, item_id, module, value_json, seq, client_ts, server_ts) VALUES (?1, 'itm:secret', 'lesen', '{\"option_id\":\"SECRET_ANSWER\"}', 1, 1, 1)").bind(att).run().catch(() => {});
  const r = await view(h, h.admin, h.learner);
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.equal(r.json.user_id, h.learner); assert.equal(r.json.attempts.length, 1); assert.equal(r.json.limit, 20);
  const a = r.json.attempts[0];
  assert.equal(a.attempt_id, att); assert.equal(a.mode, 'synthetic_full'); assert.equal(a.status, created.json.status || a.status);
  assert.deepEqual(a.modules.map((m) => m.module), ['lesen', 'hoeren', 'schreiben', 'sprechen']);
  assert.deepEqual(Object.keys(a.modules[0]).sort(), ['module', 'recovery_used', 'started_at', 'status', 'submit_kind', 'submitted_at']);
  assert.deepEqual(a.incidents, [{ kind: 'listening_play_interrupted', at: 1, detail: { phase_seq: 5 } }, { kind: 'lease_takeover', at: 2, detail: {} }]);
  const raw = JSON.stringify(r.json);
  for (const leak of ['SECRET_ANSWER', 'value_json', 'form_id', 'assignment_seed', 'client_request_id', 'points', 'key']) assert.equal(raw.includes(leak), false, `no ${leak}`);
  const audit = await h.env.DB.prepare("SELECT actor, detail_json FROM audit_log WHERE action = 'attempts_viewed'").all();
  assert.equal(audit.results.length, 1); assert.equal(audit.results[0].actor, h.admin); assert.deepEqual(JSON.parse(audit.results[0].detail_json), { user_id: h.learner, attempts: 1 });
  // a user without attempts: an empty list, still audited
  const empty = await view(h, h.admin, h.outsider);
  assert.deepEqual(empty.json.attempts, []);
  assert.equal((await h.env.DB.prepare("SELECT COUNT(*) AS n FROM audit_log WHERE action = 'attempts_viewed'").first()).n, 2);
});
