/* EXAM_GRANT_POLICY (owner decision 2026-11-11): pause new grants, or allow them only for verified adults.
   Existing grants, revocation and running access must never be affected. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { makeEnv, newUser, role, call, rid, dev, PRACTICE_FORM_DIR } from './harness.mjs';

const T = '/exam/v1/admin/access';
async function setup(policy) {
  const h = makeEnv({ formDirs: [PRACTICE_FORM_DIR], flags: policy === undefined ? {} : { EXAM_GRANT_POLICY: policy } });
  const admin = newUser(), learner = newUser(), existing = newUser();
  await role(h.env, admin, 'exam_admin');
  // a grant that existed before the policy was switched on
  await h.env.DB.prepare("INSERT INTO exam_access (id, user_id, level, scope, source, granted_at) VALUES ('xa_old', ?1, 'B1', 'synthetic', 'admin_grant', ?2)")
    .bind(existing, Math.floor(h.clock.t / 1000)).run();
  return { ...h, admin, learner, existing };
}
const G = (h, extra = {}) => ({ user_id: h.learner, level: 'b1', scope: 'synthetic', reason: 'Pilot tester, written approval', ...extra });
const grant = (h, body) => call(h.env, 'POST', `${T}/grants`, { user: h.admin, body });
const start = (h, user) => call(h.env, 'POST', '/exam/v1/attempts', { user, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dev() } });
const count = async (h) => (await h.env.DB.prepare('SELECT COUNT(*) AS n FROM exam_access').first()).n;

test('GRANT POLICY unset or "open": behaviour unchanged', async () => {
  for (const p of [undefined, 'open']) {
    const h = await setup(p);
    assert.equal((await grant(h, G(h))).status, 200);
  }
});

test('GRANT POLICY "paused": no new grant; existing access keeps working and can still be revoked', async () => {
  const h = await setup('paused');
  const r = await grant(h, G(h));
  assert.equal(r.status, 423); assert.equal(r.json.error, 'grants_paused');
  assert.equal(await count(h), 1, 'nothing inserted');
  assert.equal((await h.env.DB.prepare("SELECT COUNT(*) AS n FROM audit_log WHERE action = 'access_granted'").first()).n, 0);
  assert.equal((await start(h, h.existing)).status, 200, 'existing learner still has access');
  assert.equal((await call(h.env, 'GET', `${T}?user_id=${h.existing}`, { user: h.admin })).status, 200, 'inspection still works');
  assert.equal((await call(h.env, 'POST', `${T}/grants/xa_old/revoke`, { user: h.admin, body: { reason: 'test revoke' } })).status, 200, 'revoke still works');
});

test('GRANT POLICY "adults_only": requires adult_verified + basis; recorded in reason and audit; no age stored', async () => {
  const h = await setup('adults_only');
  for (const extra of [{}, { adult_verified: true }, { adult_verified: 'yes', adult_basis: 'ID checked' }, { adult_verified: true, adult_basis: 'x' }]) {
    const r = await grant(h, G(h, extra));
    assert.equal(r.status, 422, JSON.stringify(extra)); assert.equal(r.json.error, 'adult_verification_required');
  }
  assert.equal(await count(h), 1);
  const ok = await grant(h, G(h, { adult_verified: true, adult_basis: 'Passport seen in video call' }));
  assert.equal(ok.status, 200, JSON.stringify(ok.json));
  assert.match(ok.json.grant.reason, /\[18\+ verified: Passport seen in video call\]$/);
  const a = JSON.parse((await h.env.DB.prepare("SELECT detail_json FROM audit_log WHERE action = 'access_granted'").first()).detail_json);
  assert.equal(a.policy, 'adults_only'); assert.equal(a.adult_verified, true);
  const cols = (await h.env.DB.prepare('PRAGMA table_info(exam_access)').all()).results.map((c) => c.name);
  assert.ok(!cols.some((c) => /birth|age\b|dob/i.test(c)), 'no age column');
  assert.equal((await start(h, h.existing)).status, 200, 'existing access unaffected');
});

test('GRANT POLICY unknown value fails closed for NEW grants only', async () => {
  const h = await setup('typo');
  assert.equal((await grant(h, G(h))).json.error, 'grants_paused');
  assert.equal((await start(h, h.existing)).status, 200);
});
