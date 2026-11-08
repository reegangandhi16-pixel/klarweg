/* Accommodations (OD-41: admin-granted only): an exam_admin sets, replaces and removes a user's extra time with a
   reason; every change is audited; the multiplier is copied into attempts created afterwards and never changes a
   running attempt. Nothing grants extra time automatically. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { makeEnv, newUser, role, grant, call, rid, dev, PRACTICE_FORM_DIR, pkgFor, syntheticBuild } from './harness.mjs';
import { start, submit, post } from './flow.mjs';

const A = '/exam/v1/admin/accommodations';
async function setup() {
  const h = makeEnv({ formDirs: [PRACTICE_FORM_DIR] });
  const admin = newUser(), learner = newUser(), rater = newUser();
  await role(h.env, admin, 'exam_admin'); await role(h.env, rater, 'lead_rater'); await grant(h.env, learner);
  return { ...h, admin, learner, rater };
}
const set = (h, actor, body, opts = {}) => call(h.env, 'POST', A, { user: actor, body, ...opts });
const remove = (h, actor, body) => call(h.env, 'POST', `${A}/remove`, { user: actor, body });
const inspect = (h, actor, userId) => call(h.env, 'GET', `${A}?user_id=${userId}`, { user: actor });
const createAttempt = async (h) => {
  const r = await call(h.env, 'POST', '/exam/v1/attempts', { user: h.learner, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dev() } });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  return { ...h, user: h.learner, attempt: r.json.attempt_id, lease: r.json.lease.lease_id, created: r.json };
};
const finish = async (s) => { await start(s, 'lesen'); for (const m of ['lesen']) await submit(s, m); };
const LESEN_S = pkgFor(syntheticBuild([PRACTICE_FORM_DIR]), 'lesen').timing.seconds;

test('ACCOMMODATIONS (authorization + validation): only exam_admin with a fresh second factor; allowed multipliers only; reason required', async () => {
  const h = await setup();
  for (const actor of [h.learner, h.rater]) assert.equal((await set(h, actor, { user_id: h.learner, time_multiplier: 1.5, reason: 'Nachweis geprüft' })).json.error, 'exam_admin_required');
  assert.equal((await set(h, h.admin, { user_id: h.learner, time_multiplier: 1.5, reason: 'Nachweis geprüft' }, { mfa: false })).json.error, 'mfa_required');
  for (const m of [1, 1.1, 2.5, '1.5', null]) assert.equal((await set(h, h.admin, { user_id: h.learner, time_multiplier: m, reason: 'Nachweis geprüft' })).json.error, 'invalid_time_multiplier', String(m));
  assert.equal((await set(h, h.admin, { user_id: h.learner, time_multiplier: 1.5, reason: '' })).json.error, 'reason_required');
  assert.equal((await set(h, h.admin, { user_id: 'x', time_multiplier: 1.5, reason: 'Nachweis geprüft' })).json.error, 'invalid_user_id');
  assert.equal((await h.env.DB.prepare('SELECT COUNT(*) AS n FROM accommodations').first()).n, 0);
});

test('ACCOMMODATIONS (effect): new attempts get the multiplier and longer time; a running attempt keeps its own; replace and remove are audited', async () => {
  const h = await setup();
  const before = await createAttempt(h);                     // opened before the accommodation
  assert.equal(before.created.time_multiplier, 1);
  const r = await set(h, h.admin, { user_id: h.learner, time_multiplier: 1.5, reason: 'Nachweis geprüft (EX-08, Ref. 12)' });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.deepEqual([r.json.accommodation.time_multiplier, r.json.accommodation.granted_by, r.json.accommodation.status], [1.5, h.admin, 'active']);
  const m0 = await start(before, 'lesen');
  assert.equal(m0.deadline_at - m0.started_at, LESEN_S * 1000, 'the running attempt keeps 1.0');
  await submit(before, 'lesen');
  for (const mod of ['hoeren', 'schreiben', 'sprechen']) { await start(before, mod); if (mod === 'hoeren') await post(before, '/hoeren/events', { type: 'ready' }); await submit(before, mod); }
  await post(before, '/complete', {});
  const after = await createAttempt(h);
  assert.equal(after.created.time_multiplier, 1.5);
  assert.equal(after.created.modules.find((x) => x.module === 'lesen').intro.minutes, Math.round(LESEN_S * 1.5 / 60), 'the intro shows the longer time');
  const m1 = await start(after, 'lesen');
  assert.equal(m1.deadline_at - m1.started_at, Math.round(LESEN_S * 1000 * 1.5));
  // replace, then remove
  assert.equal((await set(h, h.admin, { user_id: h.learner, time_multiplier: 1.25, reason: 'Neu bewertet' })).json.accommodation.time_multiplier, 1.25);
  assert.equal((await remove(h, h.admin, { user_id: h.learner, reason: 'Nicht mehr erforderlich' })).status, 200);
  assert.equal((await remove(h, h.admin, { user_id: h.learner, reason: 'Nicht mehr erforderlich' })).status, 404);
  const v = (await inspect(h, h.admin, h.learner)).json;
  assert.equal(v.accommodation, null);
  assert.deepEqual(v.audit.map((a) => [a.action, a.detail.time_multiplier, a.detail.replaced ?? null]),
    [['accommodation_removed', 1.25, null], ['accommodation_set', 1.25, 1.5], ['accommodation_set', 1.5, null]]);
  assert.deepEqual(v.allowed_multipliers, [1.25, 1.5, 1.75, 2]);
});

test('ACCOMMODATIONS (expiry): an expired accommodation no longer applies to new attempts and shows as expired', async () => {
  const h = await setup();
  await set(h, h.admin, { user_id: h.learner, time_multiplier: 2.0, reason: 'Befristet', valid_until: Math.floor(h.clock.t / 1000) + 60 });
  h.advance(120_000);
  assert.equal((await inspect(h, h.admin, h.learner)).json.accommodation.status, 'expired');
  assert.equal((await createAttempt(h)).created.time_multiplier, 1);
});
