/* OD-19 enforcement in the exam Worker: staff routes need a FRESH second factor (X-KW-MFA-At attested by the Access
   proxy, unix seconds). The Access side (enrolment, codes, limits, header attestation) is tested in
   access/worker/test/mfa.test.mjs. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, newUser, role } from './harness.mjs';
import { MFA_FRESH_MS } from '../src/auth.js';

test('RATER MFA: fresh = within 12 h and at most 60 s ahead; every staff role needs it; non-staff keep their 403; learner routes ignore it', async () => {
  const s = await setup();
  const t = Math.floor(s.env.__clock() / 1000);
  const q = (user, mfa) => call(s.env, 'GET', '/exam/v1/admin/rating-queue', { user, mfa });
  for (const r of ['rater', 'lead_rater', 'exam_admin']) {
    const u = newUser(); await role(s.env, u, r);
    assert.equal((await q(u, false)).json.error, 'mfa_required', `${r}: never verified`);
    assert.equal((await q(u, t - MFA_FRESH_MS / 1000 - 1)).json.error, 'mfa_required', `${r}: older than 12 h`);
    assert.equal((await q(u, t + 120)).json.error, 'mfa_required', `${r}: in the future`);
    assert.equal((await q(u, 'garbage')).json.error, 'mfa_required', `${r}: not a number`);
    assert.notEqual((await q(u, t - MFA_FRESH_MS / 1000 + 60)).status, 401, `${r}: 11 h 59 min ago is fresh`);
    assert.notEqual((await q(u, t)).status, 401, `${r}: just now`);
  }
  const outsider = newUser();
  const r = await q(outsider, false);
  assert.equal(r.status, 403, 'non-staff: the role refusal, not a hint about a second factor');
  assert.equal((await call(s.env, 'GET', `/exam/v1/attempts/${s.attempt}`, { user: s.user, mfa: false })).status, 200, 'learner route without any second factor');
});
