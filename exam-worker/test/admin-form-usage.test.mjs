/* ENGINE §7.6: exam_admin sees per-form assignment counts — aggregates only, audited. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { makeEnv, newUser, role, call, rid, dev, PRACTICE_FORM_DIR } from './harness.mjs';

async function setup(flags = {}) {
  const h = makeEnv({ formDirs: [PRACTICE_FORM_DIR], flags });
  const admin = newUser(), rater = newUser(), a = newUser(), b = newUser();
  await role(h.env, admin, 'exam_admin'); await role(h.env, rater, 'lead_rater');
  for (const u of [a, b]) assert.equal((await call(h.env, 'POST', '/exam/v1/admin/access/grants', { user: admin, body: { user_id: u, level: 'b1', scope: 'synthetic', reason: 'form usage test' } })).status, 200);
  return { ...h, admin, rater, a, b };
}
const usage = (h, user, opts = {}) => call(h.env, 'GET', '/exam/v1/admin/forms/usage', { user, ...opts });
const create = (h, user) => call(h.env, 'POST', '/exam/v1/attempts', { user, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dev() } });

test('FORM USAGE: exam_admin only (fresh second factor); refused calls are not audited', async () => {
  const h = await setup();
  for (const u of [h.a, h.rater]) assert.equal((await usage(h, u)).json.error, 'exam_admin_required');
  const stale = await usage(h, h.admin, { mfa: false });
  assert.equal(stale.status, 401); assert.equal(stale.json.error, 'mfa_required');
  assert.equal((await h.env.DB.prepare("SELECT COUNT(*) AS n FROM audit_log WHERE action = 'form_usage_viewed'").first()).n, 0);
});

test('FORM USAGE: per form attempts by status, kind and assignment; distinct learners; last assignment; no identities; audited', async () => {
  const h = await setup();
  const r1 = await create(h, h.a), r2 = await create(h, h.b);
  assert.equal(r1.status, 200, JSON.stringify(r1.json)); assert.equal(r2.status, 200);
  const r = await usage(h, h.admin);
  assert.equal(r.status, 200, JSON.stringify(r.json));
  const forms = await h.env.DB.prepare('SELECT COUNT(*) AS n FROM forms').first();
  assert.equal(r.json.forms.length, forms.n, 'every registered form is listed');
  const used = r.json.forms.filter((f) => f.attempts > 0);
  assert.equal(used.reduce((n, f) => n + f.attempts, 0), 2);
  for (const f of used) {
    assert.deepEqual(Object.keys(f.by_kind).sort(), ['full', 'module', 'part']); assert.equal(f.by_kind.full, f.attempts);
    assert.equal(f.by_assignment.unseen + f.by_assignment.least_seen + f.by_assignment.other, f.attempts);
    assert.equal(f.by_assignment.other, 0, 'assignment reasons are recognised');
    assert.ok(Number.isInteger(f.last_assigned_at) && f.last_assigned_at > 0);
    assert.ok(f.learners >= 1 && f.learners <= 2);
  }
  assert.equal(r.json.forms.find((f) => f.attempts === 0)?.last_assigned_at ?? null, null);
  const raw = JSON.stringify(r.json);
  for (const leak of [h.a, h.b, 'user_id', 'value_json', 'assignment_seed']) assert.equal(raw.includes(leak), false, `no ${leak}`);
  assert.deepEqual(r.json.release_set, { block: null }, 'no release set configured in this test environment');
  assert.equal(r.json.practice_pool.block, 'pool_unconfigured');
  const audit = await h.env.DB.prepare("SELECT actor, detail_json FROM audit_log WHERE action = 'form_usage_viewed'").all();
  assert.equal(audit.results.length, 1); assert.equal(audit.results[0].actor, h.admin); assert.deepEqual(JSON.parse(audit.results[0].detail_json), { forms: forms.n });
});

test('FORM USAGE: forms of the configured learner release set are marked; others are not', async () => {
  const h = await setup();
  const f = await h.env.DB.prepare("SELECT id FROM forms WHERE status = 'live' AND (kind != 'synthetic' OR purpose = 'practice') ORDER BY id LIMIT 1").first();
  assert.ok(f, 'a release-eligible form exists');
  h.env.EXAM_RELEASE_FORMS = f.id;
  const r = await usage(h, h.admin);
  assert.deepEqual(r.json.release_set, { ids: [f.id] });
  assert.deepEqual(r.json.forms.filter((x) => x.in_release_set).map((x) => x.form_id), [f.id]);
});
