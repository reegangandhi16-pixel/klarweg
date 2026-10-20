/* EXAM_RELEASE_FORMS: only explicitly released, live, practice-purpose forms are assigned or continued. A system-test
   fixture (S0) is never assignable from a release set, a missing or invalid set fails closed, and nothing is silently
   substituted. Without the setting (test/dev configuration) assignment is unchanged. All checks are server-side. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { makeEnv, newUser, grant, call, rid, dev, FORM_DIR, PRACTICE_FORM_DIR, PRACTICE_P2_FORM_DIR } from './harness.mjs';
import { post, get, start, submit, complete } from './flow.mjs';
import { releaseForms } from '../src/flags.js';

const S0 = 'frm:b1:synthetic-s0@1', P1 = 'frm:b1:synthetic-p1@1', P2 = 'frm:b1:synthetic-p2@1';
const ALL = [FORM_DIR, PRACTICE_FORM_DIR, PRACTICE_P2_FORM_DIR];
const create = (env, user, body) => call(env, 'POST', '/exam/v1/attempts', { user, body: { level: 'b1', request_id: rid(), device_id: dev(), ...body } });
const lesen = (env, user) => create(env, user, { mode: 'synthetic_module', module: 'lesen' });
const formOf = async (env, id) => (await env.DB.prepare('SELECT form_id FROM attempts WHERE id = ?1').bind(id).first()).form_id;
async function user(env) { const u = newUser(); await grant(env, u); return u; }
async function finishLesen(h, u, c) {   // a Lesen-only attempt: submit unanswered and complete
  const s = { ...h, user: u, attempt: c.json.attempt_id, lease: c.json.lease.lease_id };
  await start(s, 'lesen'); await submit(s, 'lesen'); await complete(s);
}
const avReason = async (env, u, mode) => (await call(env, 'GET', '/exam/v1/availability', { user: u })).json.modes.filter((m) => m.mode === mode).map((m) => m.reason);

test('RELEASE FORMS (parse): unset/blank = no set; ids must be well-formed and unique', () => {
  assert.equal(releaseForms({}), null);
  assert.equal(releaseForms({ EXAM_RELEASE_FORMS: '  ' }), null);
  assert.deepEqual(releaseForms({ EXAM_RELEASE_FORMS: ` ${P1} , ${P2} ` }), { ok: true, ids: [P1, P2] });
  for (const bad of [',', 'p1', 'frm:b1:synthetic-p1', `${P1},${P1}`, `${P1};${P2}`, 'frm:c2:x@1', 'FRM:b1:synthetic-p1@1']) assert.equal(releaseForms({ EXAM_RELEASE_FORMS: bad }).ok, false, bad);
});

test('RELEASE FORMS: registry stores each form purpose (migration 0003); S0 is system_test, P1/P2 practice', async () => {
  const { env } = makeEnv({ formDirs: ALL });
  const rows = (await env.DB.prepare('SELECT id, purpose FROM forms ORDER BY id').all()).results.map((r) => [r.id, r.purpose]);
  assert.deepEqual(rows, [[P1, 'practice'], [P2, 'practice'], [S0, 'system_test']]);
});

test('RELEASE FORMS (test config unchanged): no setting → every live form incl. S0 is assignable in the full mode', async () => {
  const h = makeEnv();   // S0 only
  const u = await user(h.env);
  const c = await create(h.env, u, { mode: 'synthetic_full' });
  assert.equal(c.status, 200);
  assert.equal(await formOf(h.env, c.json.attempt_id), S0);
  assert.equal(c.json.modules.length, 4);
});

test('RELEASE FORMS: S0 is never assigned, even when it is the only form this learner has not seen', async () => {
  const h = makeEnv({ formDirs: [FORM_DIR, PRACTICE_FORM_DIR], flags: { EXAM_MODULE_ONLY: 'lesen', EXAM_RELEASE_FORMS: P1 } });
  const u = await user(h.env);
  for (let i = 0; i < 4; i++) {
    const c = await lesen(h.env, u);
    assert.equal(c.status, 200, JSON.stringify(c.json));
    assert.equal(await formOf(h.env, c.json.attempt_id), P1, `attempt ${i + 1}`);
    assert.match((await h.env.DB.prepare('SELECT assignment_reason FROM attempts WHERE id = ?1').bind(c.json.attempt_id).first()).assignment_reason, i === 0 ? /unseen:1$/ : /least_seen:\d+:1$/);
    await finishLesen(h, u, c);
  }
  assert.equal((await h.env.DB.prepare('SELECT COUNT(*) AS n FROM attempts WHERE form_id = ?1').bind(S0).first()).n, 0);
});

test('RELEASE FORMS: Lesen-only assignment stays inside the release set (P2 only, never P1 or S0)', async () => {
  const h = makeEnv({ formDirs: ALL, flags: { EXAM_MODULE_ONLY: 'lesen', EXAM_RELEASE_FORMS: P2 } });
  for (let i = 0; i < 3; i++) {
    const u = await user(h.env);
    const c = await lesen(h.env, u);
    assert.equal(await formOf(h.env, c.json.attempt_id), P2);
  }
  // two released forms: a learner sees both before any repeat, and only those two
  const h2 = makeEnv({ formDirs: ALL, flags: { EXAM_MODULE_ONLY: 'lesen', EXAM_RELEASE_FORMS: `${P1},${P2}` } });
  const u = await user(h2.env);
  const seen = [];
  for (let i = 0; i < 4; i++) { const c = await lesen(h2.env, u); seen.push(await formOf(h2.env, c.json.attempt_id)); await finishLesen(h2, u, c); }
  assert.deepEqual([...new Set(seen.slice(0, 2))].sort(), [P1, P2]);
  assert.ok(seen.every((f) => f === P1 || f === P2));
});

test('RELEASE FORMS: Lesen-only without a release set fails closed (release_unconfigured), blank counts as missing', async () => {
  for (const value of [undefined, '', '   ']) {
    const h = makeEnv({ formDirs: ALL, flags: { EXAM_MODULE_ONLY: 'lesen', EXAM_RELEASE_FORMS: value } });
    const u = await user(h.env);
    const c = await lesen(h.env, u);
    assert.equal(c.status, 503, String(value)); assert.equal(c.json.error, 'release_unconfigured');
    assert.match(c.json.message, /EXAM_RELEASE_FORMS/);
    assert.deepEqual(await avReason(h.env, u, 'synthetic_module'), ['release_unconfigured']);
    assert.equal((await h.env.DB.prepare('SELECT COUNT(*) AS n FROM attempts').first()).n, 0);
  }
});

test('RELEASE FORMS: an invalid set fails closed for every mode and never falls back to another form', async () => {
  const cases = {
    'empty list': ',',
    'malformed id': 'p1',
    'duplicate id': `${P1},${P1}`,
    'unknown form': 'frm:b1:synthetic-p99@1',
    'system-test fixture listed': `${P1},${S0}`,
    'system-test fixture only': S0
  };
  for (const [name, value] of Object.entries(cases)) {
    for (const flags of [{ EXAM_MODULE_ONLY: 'lesen', EXAM_RELEASE_FORMS: value }, { EXAM_RELEASE_FORMS: value }]) {
      const h = makeEnv({ formDirs: ALL, flags });
      const u = await user(h.env);
      const c = flags.EXAM_MODULE_ONLY ? await lesen(h.env, u) : await create(h.env, u, { mode: 'synthetic_full' });
      assert.equal(c.status, 503, name); assert.equal(c.json.error, 'release_misconfigured', name);
      assert.equal((await h.env.DB.prepare('SELECT COUNT(*) AS n FROM attempts').first()).n, 0, name);
      assert.ok((await avReason(h.env, u, flags.EXAM_MODULE_ONLY ? 'synthetic_module' : 'synthetic_full')).every((r) => r === 'release_misconfigured'), name);
      if (name === 'unknown form' || name.startsWith('system')) assert.ok(h.env.__logs.some((l) => /release_misconfigured/.test(l) && /ineligible_forms/.test(l)), name);
    }
  }
  // a listed form that is not live, or a legacy row without a recorded purpose, is just as invalid
  for (const [name, sql] of [['retired', `UPDATE forms SET status = 'retired' WHERE id = '${P2}'`], ['purpose unknown', `UPDATE forms SET purpose = NULL WHERE id = '${P2}'`]]) {
    const h = makeEnv({ formDirs: ALL, flags: { EXAM_MODULE_ONLY: 'lesen', EXAM_RELEASE_FORMS: P2 } });
    h.env.DB.raw.exec(sql);
    const u = await user(h.env);
    const c = await lesen(h.env, u);
    assert.equal(c.json.error, 'release_misconfigured', name);   // not a silent switch to P1 or S0
  }
});

test('RELEASE FORMS: the full four-module mode respects the set and keeps its module sequence', async () => {
  const h = makeEnv({ formDirs: ALL, flags: { EXAM_RELEASE_FORMS: P1 } });
  const u = await user(h.env);
  const c = await create(h.env, u, { mode: 'synthetic_full' });
  assert.equal(c.status, 200);
  assert.equal(await formOf(h.env, c.json.attempt_id), P1);
  assert.deepEqual(c.json.modules.map((m) => `${m.module}:${m.status}`), ['lesen:available', 'hoeren:locked', 'schreiben:locked', 'sprechen:locked']);
  const s = { ...h, user: u, attempt: c.json.attempt_id, lease: c.json.lease.lease_id };
  await start(s, 'lesen'); await submit(s, 'lesen');
  assert.equal((await start(s, 'hoeren')).status, 'running');
});

test('RELEASE FORMS: an attempt on a form outside the current set cannot start a module or load content', async () => {
  const h = makeEnv({ formDirs: ALL, flags: { EXAM_MODULE_ONLY: 'lesen', EXAM_RELEASE_FORMS: P1 } });
  const u = await user(h.env);
  const c = await lesen(h.env, u);
  const s = { ...h, user: u, attempt: c.json.attempt_id, lease: c.json.lease.lease_id };
  h.env.EXAM_RELEASE_FORMS = P2;                       // the set is narrowed while the attempt is open
  let r = await post(s, '/modules/lesen/start', {});
  assert.equal(r.status, 403); assert.equal(r.json.error, 'form_not_in_release');
  h.env.EXAM_RELEASE_FORMS = P1;
  await start(s, 'lesen');
  h.env.EXAM_RELEASE_FORMS = P2;
  r = await get(s, '/modules/lesen/package');
  assert.equal(r.status, 403); assert.equal(r.json.error, 'form_not_in_release');
  assert.equal(JSON.stringify(r.json).includes('parts'), false);
  h.env.EXAM_RELEASE_FORMS = 'p1';                     // invalid set: fail closed for open attempts too
  r = await get(s, '/modules/lesen/package');
  assert.equal(r.status, 503); assert.equal(r.json.error, 'release_misconfigured');
  delete h.env.EXAM_RELEASE_FORMS;                     // module-only without a set
  r = await get(s, '/modules/lesen/package');
  assert.equal(r.json.error, 'release_unconfigured');
});

test('RELEASE FORMS: modules outside the permitted scope are refused server-side, whatever the form', async () => {
  const h = makeEnv({ formDirs: ALL, flags: { EXAM_RELEASE_FORMS: P1 } });
  const u = await user(h.env);
  const c = await create(h.env, u, { mode: 'synthetic_full' });   // full attempt on a released form, before Lesen-only
  const s = { ...h, user: u, attempt: c.json.attempt_id, lease: c.json.lease.lease_id };
  h.env.EXAM_MODULE_ONLY = 'lesen';
  for (const module of ['hoeren', 'schreiben', 'sprechen']) {
    const r = await post(s, `/modules/${module}/start`, {});
    assert.equal(r.status, 403, module); assert.equal(r.json.error, 'module_disabled', module);
  }
  for (const module of ['hoeren', 'schreiben', 'sprechen']) {
    const r = await create(h.env, await user(h.env), { mode: 'synthetic_module', module });
    assert.equal(r.status, 403, module); assert.equal(r.json.error, 'module_disabled', module);
  }
});
