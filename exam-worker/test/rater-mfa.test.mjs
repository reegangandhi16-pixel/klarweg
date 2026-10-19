/* OD-19 enforcement in the exam Worker: staff routes need a FRESH second factor (X-KW-MFA-At attested by the Access
   proxy, unix seconds). The Access side (enrolment, codes, limits, header attestation) is tested in
   access/worker/test/mfa.test.mjs. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, newUser, role } from './harness.mjs';
import { A, post, start, submit, complete } from './flow.mjs';
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

test('RATER MFA: reading ANOTHER learner\'s result is staff work — it needs a fresh second factor too, and is audited', async () => {
  // /attempts/{id}/result is a learner route, outside /admin/*; lead_rater and exam_admin may read foreign results there
  const s = await setup();
  for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) { await start(s, m); if (m === 'hoeren') await post(s, '/hoeren/events', { type: 'ready' }); await submit(s, m); }
  await complete(s);
  const t = Math.floor(s.env.__clock() / 1000);
  for (const r of ['lead_rater', 'exam_admin']) {
    const staff = newUser(); await role(s.env, staff, r);
    const get = (mfa) => call(s.env, 'GET', A(s, '/result'), { user: staff, mfa });
    for (const [mfa, why] of [[false, 'never verified'], [t - MFA_FRESH_MS / 1000 - 1, 'older than 12 h'], [t + 120, 'in the future']]) {
      const res = await get(mfa);
      assert.equal(res.status, 401, `${r}: ${why}`);
      assert.equal(res.json.error, 'mfa_required', `${r}: ${why}`);
      assert.equal(res.json.result, undefined, `${r}: ${why} — no result data`);
    }
    const ok = await get(true);
    assert.equal(ok.status, 200, `${r}: fresh second factor`);
    const audited = await s.env.DB.prepare("SELECT COUNT(*) AS n FROM audit_log WHERE actor = ?1 AND attempt_id = ?2 AND action = 'result_viewed_by_staff'").bind(staff, s.attempt).first();
    assert.equal(audited.n, 1, `${r}: the staff read is audited`);
  }
  // the learner's own result needs no second factor; other learners and plain raters still see nothing (404)
  assert.equal((await call(s.env, 'GET', A(s, '/result'), { user: s.user, mfa: false })).status, 200);
  const other = newUser();
  assert.equal((await call(s.env, 'GET', A(s, '/result'), { user: other, mfa: false })).status, 404);
  const rater = newUser(); await role(s.env, rater, 'rater');
  assert.equal((await call(s.env, 'GET', A(s, '/result'), { user: rater, mfa: false })).status, 404);
});

test('RATER MFA A4 row 10: X-KW-MFA-Unavailable from the proxy closes staff routes (503) whatever X-KW-MFA-At says; non-staff keep 403; learners unaffected', async () => {
  const s = await setup();
  const t = Math.floor(s.env.__clock() / 1000);
  const down = { 'x-kw-mfa-unavailable': '1' };
  for (const r of ['rater', 'lead_rater', 'exam_admin']) {
    const u = newUser(); await role(s.env, u, r);
    assert.notEqual((await call(s.env, 'GET', '/exam/v1/admin/rating-queue', { user: u, mfa: t })).status, 401, `${r}: fresh without the marker`);
    const res = await call(s.env, 'GET', '/exam/v1/admin/rating-queue', { user: u, mfa: t, headers: down });
    assert.equal(res.status, 503, r); assert.equal(res.json.error, 'mfa_unavailable', r);
  }
  const lead = newUser(); await role(s.env, lead, 'lead_rater');
  const fr = await call(s.env, 'GET', A(s, '/result'), { user: lead, mfa: t, headers: down });
  assert.equal(fr.status, 503); assert.equal(fr.json.result, undefined);
  assert.equal((await call(s.env, 'GET', '/exam/v1/admin/rating-queue', { user: newUser(), mfa: t, headers: down })).status, 403);
  assert.equal((await call(s.env, 'GET', `/exam/v1/attempts/${s.attempt}`, { user: s.user, mfa: false, headers: down })).status, 200);
});
