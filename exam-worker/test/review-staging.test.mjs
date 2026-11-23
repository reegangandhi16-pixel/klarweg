/* Review staging (Issue #384): forms whose originality / academic sign-off is still open can be built and rehearsed
   internally, and can NEVER reach a learner by accident.
   Builder side: build-release --review-staging tolerates only the 'originality' error, refuses purpose 'learner' and
   writes every form with status 'review'. Worker side: a 'review' form is assignable (new attempt, release set,
   practice pool) only with EXAM_REVIEW_FORMS = "on", and no production wrangler config may set that switch. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { makeEnv, newUser, grant, call, rid, dev, ROOT, PRACTICE_FORM_DIR } from './harness.mjs';
import { buildRelease } from '../../exam-content/tools/build-release.mjs';
import { assignableStatuses } from '../src/flags.js';

const P1 = 'frm:b1:synthetic-p1@1';

/* a copy of practice form P1 OUTSIDE the repo with one task's originality check not passed (= an unreviewed form) */
function unreviewedCopy({ breakKey = false } = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-review-'));
  fs.cpSync(PRACTICE_FORM_DIR, dir, { recursive: true });
  const tp = path.join(dir, 'tasks.json');
  const tasks = JSON.parse(fs.readFileSync(tp, 'utf8'));
  tasks[0].provenance.originality_check.passed = false;
  fs.writeFileSync(tp, JSON.stringify(tasks, null, 2));
  if (breakKey) {
    const kp = path.join(dir, 'keys.json');
    const keys = JSON.parse(fs.readFileSync(kp, 'utf8'));
    delete keys.keys[Object.keys(keys.keys)[0]];   // a scored item without a key
    fs.writeFileSync(kp, JSON.stringify(keys, null, 2));
  }
  return dir;
}
const create = (env, user, body = {}) => call(env, 'POST', '/exam/v1/attempts', { user, body: { level: 'b1', mode: 'synthetic_full', request_id: rid(), device_id: dev(), ...body } });

test('REVIEW STAGING (builder): a normal build still refuses a form without a passed originality check', () => {
  assert.throws(() => buildRelease({ release: 'r000', formDirs: [unreviewedCopy()] }), /originality/);
});

test('REVIEW STAGING (builder): never a learner release', () => {
  assert.throws(() => buildRelease({ release: 'r000', formDirs: [unreviewedCopy()], purpose: 'learner', reviewStaging: true }), /never a learner release/);
});

test('REVIEW STAGING (builder): only originality is tolerated — any other validation error still aborts', () => {
  assert.throws(() => buildRelease({ release: 'r000', formDirs: [unreviewedCopy({ breakKey: true })], reviewStaging: true }), /failed validation/);
});

test('REVIEW STAGING (builder): every form is written as status review, never live, and the manifest says so', () => {
  const b = buildRelease({ release: 'r000', formDirs: [unreviewedCopy(), PRACTICE_FORM_DIR.replace('-p1', '-p2')], reviewStaging: true });
  assert.equal(b.manifest.review_staging, true);
  for (const f of b.manifest.forms) assert.equal(f.status, 'review', f.id);
  assert.equal(b.manifest.forms.find((f) => f.id === P1).originality_checks_open, 1);
  assert.ok(!/forms \([^)]*\) VALUES \([^)]*'live'/.test(b.sql), 'a staging registry must not contain a live form row');
});

test('REVIEW STAGING (worker): without EXAM_REVIEW_FORMS a review form is never assigned (fail closed)', async () => {
  const h = makeEnv({ formDirs: [unreviewedCopy()], reviewStaging: true });
  const u = newUser(); await grant(h.env, u);
  const c = await create(h.env, u);
  assert.equal(c.status, 409, JSON.stringify(c.json));
  assert.equal(c.json.error, 'no_forms_available');
  for (const v of ['ON', 'true', '1', 'yes', ' on']) {
    const h2 = makeEnv({ formDirs: [unreviewedCopy()], reviewStaging: true, flags: { EXAM_REVIEW_FORMS: v } });
    const u2 = newUser(); await grant(h2.env, u2);
    assert.equal((await create(h2.env, u2)).status, 409, `EXAM_REVIEW_FORMS=${JSON.stringify(v)} must not enable review forms`);
  }
});

test('REVIEW STAGING (worker): a release set naming a review form fails closed unless EXAM_REVIEW_FORMS is on', async () => {
  const off = makeEnv({ formDirs: [unreviewedCopy()], reviewStaging: true, flags: { EXAM_RELEASE_FORMS: P1 } });
  const u = newUser(); await grant(off.env, u);
  const c = await create(off.env, u);
  assert.equal(c.status, 503);
  assert.equal(c.json.error, 'release_misconfigured');
  const on = makeEnv({ formDirs: [unreviewedCopy()], reviewStaging: true, flags: { EXAM_RELEASE_FORMS: P1, EXAM_REVIEW_FORMS: 'on' } });
  const u2 = newUser(); await grant(on.env, u2);
  assert.equal((await create(on.env, u2)).status, 200);
});

test('REVIEW STAGING (worker): with EXAM_REVIEW_FORMS=on (internal staging) the review form is assignable', async () => {
  const h = makeEnv({ formDirs: [unreviewedCopy()], reviewStaging: true, flags: { EXAM_REVIEW_FORMS: 'on' } });
  const u = newUser(); await grant(h.env, u);
  const c = await create(h.env, u);
  assert.equal(c.status, 200, JSON.stringify(c.json));
  assert.deepEqual(assignableStatuses({}), ['live']);
  assert.deepEqual(assignableStatuses({ EXAM_REVIEW_FORMS: 'on' }), ['live', 'review']);
});

test('REVIEW STAGING (deploy config): no production or non-production wrangler config sets EXAM_REVIEW_FORMS', () => {
  const configs = ['exam-worker/wrangler.toml', 'exam-worker/wrangler.nonprod.toml', 'access/worker/wrangler.toml', 'access/worker/wrangler.nonprod.toml']
    .map((p) => path.join(ROOT, p)).filter((p) => fs.existsSync(p));
  assert.ok(configs.length >= 1);
  for (const p of configs) assert.ok(!/EXAM_REVIEW_FORMS/.test(fs.readFileSync(p, 'utf8')), `${path.relative(ROOT, p)} must not set EXAM_REVIEW_FORMS`);
});
