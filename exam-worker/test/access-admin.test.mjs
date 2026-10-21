/* Exam-access management (OD-18): exam_admin grants, inspects and revokes individual access, server-side, with a fresh
   second factor (OD-19), a reason, timestamps and an audit trail. Nothing grants access automatically (OD-42). */
import test from 'node:test';
import assert from 'node:assert/strict';
import { makeEnv, newUser, role, call, rid, dev, PRACTICE_FORM_DIR } from './harness.mjs';

const T = '/exam/v1/admin/access';
async function setup() {
  const h = makeEnv({ formDirs: [PRACTICE_FORM_DIR] });
  const admin = newUser(), learner = newUser(), rater = newUser(), outsider = newUser();
  await role(h.env, admin, 'exam_admin'); await role(h.env, rater, 'lead_rater');
  return { ...h, admin, learner, rater, outsider };
}
const grant = (h, actor, body, opts = {}) => call(h.env, 'POST', `${T}/grants`, { user: actor, body, ...opts });
const revoke = (h, actor, id, body, opts = {}) => call(h.env, 'POST', `${T}/grants/${id}/revoke`, { user: actor, body, ...opts });
const inspect = (h, actor, userId, opts = {}) => call(h.env, 'GET', `${T}?user_id=${userId}`, { user: actor, ...opts });
const createAttempt = (h, user) => call(h.env, 'POST', '/exam/v1/attempts', { user, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dev() } });
const G = (h, extra = {}) => ({ user_id: h.learner, level: 'b1', scope: 'synthetic', reason: 'Pilot tester, written approval 2026-10-21', ...extra });

test('ACCESS ADMIN (authorization): learners, raters and outsiders are refused server-side; staff need a fresh second factor', async () => {
  const h = await setup();
  for (const actor of [h.learner, h.rater, h.outsider]) {
    assert.equal((await grant(h, actor, G(h))).json.error, 'exam_admin_required');
    assert.equal((await inspect(h, actor, h.learner)).json.error, 'exam_admin_required');
    assert.equal((await revoke(h, actor, 'xa_x', { reason: 'nope nope' })).json.error, 'exam_admin_required');
  }
  // an exam_admin whose second factor is not fresh is sent to verify it; a non-staff caller still only sees 403
  const stale = await grant(h, h.admin, G(h), { mfa: false });
  assert.equal(stale.status, 401); assert.equal(stale.json.error, 'mfa_required');
  assert.equal((await grant(h, h.outsider, G(h), { mfa: false })).status, 403);
  assert.equal((await h.env.DB.prepare('SELECT COUNT(*) AS n FROM exam_access').first()).n, 0, 'nothing was granted');
  // the learner cannot use the exam without a grant
  assert.equal((await createAttempt(h, h.learner)).json.error, 'exam_access_required');
});

test('ACCESS ADMIN (grant): validated input; the grant works at once; reason, administrator and time are recorded and audited; no duplicates', async () => {
  const h = await setup();
  for (const [extra, error] of [[{ user_id: 'bob' }, 'invalid_user_id'], [{ level: 'c2' }, 'invalid_level'], [{ scope: 'everything' }, 'invalid_scope'],
    [{ reason: '' }, 'reason_required'], [{ reason: 'x'.repeat(501) }, 'reason_required'], [{ valid_until: 1 }, 'invalid_valid_until'], [{ valid_until: '2030' }, 'invalid_valid_until']]) {
    const r = await grant(h, h.admin, G(h, extra));
    assert.equal(r.json.error, error, JSON.stringify(extra));
  }
  const r = await grant(h, h.admin, G(h));
  assert.equal(r.status, 200, JSON.stringify(r.json));
  const g = r.json.grant;
  assert.equal(g.status, 'active'); assert.equal(g.granted_by, h.admin); assert.equal(g.source, 'admin_grant'); assert.equal(g.level, 'B1');
  assert.equal(g.reason, 'Pilot tester, written approval 2026-10-21'); assert.equal(g.granted_at, Math.floor(h.clock.t / 1000));
  assert.equal((await createAttempt(h, h.learner)).status, 200, 'the learner can start at once');
  const dup = await grant(h, h.admin, G(h));
  assert.equal(dup.status, 409); assert.equal(dup.json.error, 'grant_exists'); assert.equal(dup.json.grant_id, g.grant_id);
  const audit = (await h.env.DB.prepare("SELECT actor, attempt_id, detail_json FROM audit_log WHERE action = 'access_granted'").all()).results;
  assert.equal(audit.length, 1); assert.equal(audit[0].actor, h.admin); assert.equal(audit[0].attempt_id, null);
  assert.deepEqual(JSON.parse(audit[0].detail_json), { grant_id: g.grant_id, user_id: h.learner, level: 'B1', scope: 'synthetic', valid_until: null, reason: g.reason });
  // another scope is a separate grant
  assert.equal((await grant(h, h.admin, G(h, { scope: 'sets' }))).status, 200);
});

test('ACCESS ADMIN (expiry): a time-limited grant stops working when it expires and shows as expired; a new grant is then possible', async () => {
  const h = await setup();
  const until = Math.floor(h.clock.t / 1000) + 3600;
  const g = (await grant(h, h.admin, G(h, { valid_until: until }))).json.grant;
  assert.equal(g.valid_until, until);
  assert.equal((await createAttempt(h, h.learner)).status, 200);
  h.advance(3601 * 1000);
  assert.equal((await createAttempt(h, h.learner)).json.error, 'exam_access_required', 'expired access is refused');
  const view = (await inspect(h, h.admin, h.learner)).json;
  assert.equal(view.grants[0].status, 'expired'); assert.equal(view.effective.B1.synthetic, false);
  assert.equal((await grant(h, h.admin, G(h))).status, 200, 'renewal after expiry');
});

test('ACCESS ADMIN (revoke): revocation takes effect at once, records who and why, is audited once; a second revoke and unknown ids are refused', async () => {
  const h = await setup();
  const g = (await grant(h, h.admin, G(h))).json.grant;
  assert.equal((await revoke(h, h.admin, g.grant_id, { reason: 'x' })).json.error, 'reason_required');
  h.advance(60_000);
  const r = await revoke(h, h.admin, g.grant_id, { reason: 'Pilot ended' });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.equal(r.json.grant.status, 'revoked'); assert.equal(r.json.grant.revoked_by, h.admin); assert.equal(r.json.grant.revoke_reason, 'Pilot ended');
  assert.equal(r.json.grant.revoked_at, Math.floor(h.clock.t / 1000));
  assert.equal((await createAttempt(h, h.learner)).json.error, 'exam_access_required', 'revoked access is refused');
  const again = await revoke(h, h.admin, g.grant_id, { reason: 'Pilot ended' });
  assert.equal(again.status, 409); assert.equal(again.json.error, 'already_revoked');
  assert.equal((await revoke(h, h.admin, 'xa_unknown', { reason: 'Pilot ended' })).status, 404);
  assert.equal((await h.env.DB.prepare("SELECT COUNT(*) AS n FROM audit_log WHERE action = 'access_revoked'").first()).n, 1, 'audited exactly once');
});

test('ACCESS ADMIN (inspect): every grant with its status, effective access per scope, the audit trail; hand-made grants included', async () => {
  const h = await setup();
  // a grant inserted by hand before this tool existed (RUNBOOK §3): visible, reason not recorded
  await h.env.DB.prepare("INSERT INTO exam_access (id, user_id, level, scope, source, granted_at) VALUES ('xa_owner', ?1, 'B1', 'mock', 'admin_grant', ?2)")
    .bind(h.learner, Math.floor(h.clock.t / 1000) - 10).run();
  const g = (await grant(h, h.admin, G(h))).json.grant;
  await revoke(h, h.admin, 'xa_owner', { reason: 'Replaced by an audited grant' });
  const v = (await inspect(h, h.admin, h.learner)).json;
  assert.deepEqual(v.grants.map((x) => [x.grant_id, x.status]), [[g.grant_id, 'active'], ['xa_owner', 'revoked']]);
  assert.equal(v.grants.find((x) => x.grant_id === 'xa_owner').reason, null);
  assert.deepEqual(v.effective, { B1: { synthetic: true, mock: false, sets: false } });
  assert.deepEqual(v.audit.map((a) => [a.action, a.actor, a.detail.grant_id]), [['access_revoked', h.admin, 'xa_owner'], ['access_granted', h.admin, g.grant_id]]);
  assert.equal(v.is_exam_admin, false);
  assert.equal((await inspect(h, h.admin, 'nope')).json.error, 'invalid_user_id');
  // another learner's view shows nothing of this one
  assert.deepEqual((await inspect(h, h.admin, h.outsider)).json.grants, []);
});

test('ACCESS ADMIN (revocation mid-attempt): an open attempt stops at once; the learner’s finished results stay readable', async () => {
  const h = await setup();
  const g = (await grant(h, h.admin, G(h))).json.grant;
  const c = await createAttempt(h, h.learner); assert.equal(c.status, 200);
  const att = c.json.attempt_id, lease = c.json.lease.lease_id;
  const st = await call(h.env, 'POST', `/exam/v1/attempts/${att}/modules/lesen/start`, { user: h.learner, body: { lease_id: lease, request_id: rid() } });
  assert.equal(st.status, 200);
  await revoke(h, h.admin, g.grant_id, { reason: 'Zugang beendet' });
  const pkg = await call(h.env, 'GET', `/exam/v1/attempts/${att}/modules/lesen/package?lease_id=${lease}`, { user: h.learner });
  assert.equal(pkg.status, 403); assert.equal(pkg.json.error, 'exam_access_required');
  const hb = await call(h.env, 'POST', `/exam/v1/attempts/${att}/heartbeat`, { user: h.learner, body: { lease_id: lease } });
  assert.equal(hb.json.error, 'exam_access_required');
  const l = await call(h.env, 'POST', `/exam/v1/attempts/${att}/lease`, { user: h.learner, body: { device_id: dev() } });
  assert.equal(l.json.error, 'exam_access_required');
  // history stays readable (own data), and a renewed grant lets the learner continue
  assert.equal((await call(h.env, 'GET', '/exam/v1/attempts', { user: h.learner })).status, 200);
  await grant(h, h.admin, G(h, { reason: 'Wieder freigeschaltet' }));
  assert.equal((await call(h.env, 'GET', `/exam/v1/attempts/${att}/modules/lesen/package?lease_id=${lease}`, { user: h.learner })).status, 200);
});
