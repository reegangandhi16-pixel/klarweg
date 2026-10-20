/* Single-module attempts (ENGINE §2 simulation_module) and the EXAM_MODULE_ONLY switch used for a Lesen-only
   self-practice release: full attempts refused, only the listed modules startable, other modules unreachable, no
   rating work created, results per module only. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { makeEnv, newUser, grant, call, rid, dev, PRACTICE_FORM_DIR } from './harness.mjs';
import { start, submit, answerObjective, complete, post, get } from './flow.mjs';
import { moduleOnly, modeBlock, MODES } from '../src/flags.js';

const create = (env, user, body) => call(env, 'POST', '/exam/v1/attempts', { user, body: { level: 'b1', request_id: rid(), device_id: dev(), ...body } });

async function lesenOnly(flags = {}) {
  const h = makeEnv({ formDirs: [PRACTICE_FORM_DIR], flags: { EXAM_MODULE_ONLY: 'lesen', ...flags } });
  const user = newUser();
  await grant(h.env, user);
  return { ...h, user };
}

test('MODULE ONLY (flags): unset = unchanged; a list enables exactly those modules; any unknown entry fails closed', () => {
  assert.equal(moduleOnly({}), null);
  assert.equal(moduleOnly({ EXAM_MODULE_ONLY: '  ' }), null);
  assert.deepEqual(moduleOnly({ EXAM_MODULE_ONLY: 'lesen' }), { ok: true, modules: ['lesen'] });
  assert.deepEqual(moduleOnly({ EXAM_MODULE_ONLY: ' schreiben , lesen ' }), { ok: true, modules: ['lesen', 'schreiben'] });
  assert.deepEqual(moduleOnly({ EXAM_MODULE_ONLY: 'lesen,' }), { ok: true, modules: ['lesen'] });
  for (const bad of ['lessen', 'lesen,LESEN', ',', 'all']) assert.equal(moduleOnly({ EXAM_MODULE_ONLY: bad }).ok, false, bad);
  const on = { EXAM_SYNTHETIC_FORMS: 'on' };
  assert.equal(modeBlock(on, MODES.synthetic_full), null);
  assert.equal(modeBlock(on, MODES.synthetic_module, 'lesen'), 'disabled');           // default: no single-module attempts
  assert.equal(modeBlock({ ...on, EXAM_MODULE_ONLY: 'lesen' }, MODES.synthetic_full), 'module_only');
  assert.equal(modeBlock({ ...on, EXAM_MODULE_ONLY: 'lesen' }, MODES.synthetic_module, 'lesen'), null);
  assert.equal(modeBlock({ ...on, EXAM_MODULE_ONLY: 'lesen' }, MODES.synthetic_module, 'hoeren'), 'module_disabled');
  assert.equal(modeBlock({ ...on, EXAM_MODULE_ONLY: 'lessen' }, MODES.synthetic_full), 'misconfigured');
  assert.equal(modeBlock({ ...on, EXAM_MODULE_ONLY: 'lessen' }, MODES.synthetic_module, 'lesen'), 'misconfigured');
  assert.equal(modeBlock({ EXAM_SYNTHETIC_FORMS: 'off', EXAM_MODULE_ONLY: 'lesen' }, MODES.synthetic_module, 'lesen'), 'disabled');
});

test('MODULE ONLY (default off): without EXAM_MODULE_ONLY a single-module attempt is refused and full attempts work', async () => {
  const { env } = makeEnv({ formDirs: [PRACTICE_FORM_DIR] });
  const u = newUser(); await grant(env, u);
  const r = await create(env, u, { mode: 'synthetic_module', module: 'lesen' });
  assert.equal(r.status, 403); assert.equal(r.json.error, 'mode_disabled');
  const av = (await call(env, 'GET', '/exam/v1/availability', { user: u })).json;
  assert.deepEqual(av.modes.filter((m) => m.mode === 'synthetic_module').map((m) => [m.level, m.module, m.available, m.reason]), [['b1', null, false, 'disabled']]);
  assert.equal(av.modes.find((m) => m.mode === 'synthetic_full').available, true);
  // a full mode takes no module
  assert.equal((await create(env, u, { mode: 'synthetic_full', module: 'lesen' })).json.error, 'invalid_module');
  assert.equal((await create(env, u, { mode: 'synthetic_full' })).status, 200);
});

test('MODULE ONLY (lesen): full attempts and other modules refused; availability lists only Lesen', async () => {
  const { env, user } = await lesenOnly();
  const full = await create(env, user, { mode: 'synthetic_full' });
  assert.equal(full.status, 403); assert.equal(full.json.error, 'mode_disabled');
  for (const module of ['hoeren', 'schreiben', 'sprechen']) {
    const r = await create(env, user, { mode: 'synthetic_module', module });
    assert.equal(r.status, 403, module); assert.equal(r.json.error, 'module_disabled', module);
  }
  for (const module of [undefined, null, '', 'LESEN', 'all', ['lesen']]) {
    assert.equal((await create(env, user, { mode: 'synthetic_module', module })).json.error, 'invalid_module', String(module));
  }
  const av = (await call(env, 'GET', '/exam/v1/availability', { user })).json;
  const avail = av.modes.filter((m) => m.available);
  assert.deepEqual(avail, [{ mode: 'synthetic_module', level: 'b1', module: 'lesen', available: true, reason: null }]);
  assert.equal(av.modes.find((m) => m.mode === 'synthetic_full').reason, 'module_only');
  // entitlement still applies
  const stranger = newUser();
  assert.equal((await create(env, stranger, { mode: 'synthetic_module', module: 'lesen' })).json.error, 'exam_access_required');
  // the sets family stays behind its own flag
  assert.equal((await create(env, user, { mode: 'simulation_module', module: 'lesen' })).json.error, 'mode_disabled');
});

test('MODULE ONLY (misconfigured): an unknown module name disables every mode', async () => {
  const { env, user } = await lesenOnly({ EXAM_MODULE_ONLY: 'lesen,lessen' });
  assert.equal((await create(env, user, { mode: 'synthetic_full' })).json.error, 'mode_disabled');
  assert.equal((await create(env, user, { mode: 'synthetic_module', module: 'lesen' })).json.error, 'mode_disabled');
  const av = (await call(env, 'GET', '/exam/v1/availability', { user })).json;
  assert.equal(av.modes.filter((m) => m.available).length, 0);
  assert.ok(av.modes.filter((m) => m.mode.startsWith('synthetic')).every((m) => m.reason === 'misconfigured'));
});

test('MODULE ONLY (lesen): one Lesen attempt end to end; other modules unreachable; per-module result; no rating work', async () => {
  const h = await lesenOnly();
  const { env, user } = h;
  const device = dev();
  const body = { mode: 'synthetic_module', module: 'lesen', request_id: rid(), device_id: device };
  const c = await call(env, 'POST', '/exam/v1/attempts', { user, body: { level: 'b1', ...body } });
  assert.equal(c.status, 200, JSON.stringify(c.json));
  assert.equal(c.json.mode, 'synthetic_module'); assert.equal(c.json.module_scope, 'lesen');
  assert.deepEqual(c.json.modules.map((m) => [m.module, m.status]), [['lesen', 'available']]);
  // a retry with the same request id replays; a second create meets the open attempt
  const again = await call(env, 'POST', '/exam/v1/attempts', { user, body: { level: 'b1', ...body } });
  assert.equal(again.json.attempt_id, c.json.attempt_id); assert.equal(again.json.replayed, true);
  const second = await create(env, user, { mode: 'synthetic_module', module: 'lesen' });
  assert.equal(second.status, 409); assert.equal(second.json.attempt_id, c.json.attempt_id);
  const row = await env.DB.prepare('SELECT mode, module_scope FROM attempts WHERE id = ?1').bind(c.json.attempt_id).first();
  assert.deepEqual({ ...row }, { mode: 'synthetic_full', module_scope: 'lesen' });
  const av = (await call(env, 'GET', '/exam/v1/availability', { user })).json;
  assert.deepEqual(av.open_attempts, [{ attempt_id: c.json.attempt_id, mode: 'synthetic_module', module: 'lesen' }]);

  const s = { ...h, attempt: c.json.attempt_id, lease: again.json.lease.lease_id };   // the replay took the lease over
  for (const module of ['hoeren', 'schreiben', 'sprechen']) {
    const r = await post(s, `/modules/${module}/start`, {});
    assert.equal(r.status, 404, module + JSON.stringify(r.json)); assert.equal(r.json.error, "module_not_found");
    assert.equal((await get(s, `/modules/${module}/package`)).status, 404, module);
  }
  // no Hören or Sprechen media can be requested for an attempt without those modules
  const asset = await env.DB.prepare("SELECT asset_id FROM form_assets WHERE module = 'hoeren' LIMIT 1").first();
  if (asset) assert.equal((await post(s, '/media', { asset_id: asset.asset_id })).json.error, 'module_not_found');
  assert.equal((await post(s, '/sprechen/consent', { granted: true, version: 'rec-consent@1' })).status, 404);

  await start(s, 'lesen');
  await answerObjective(s, 'lesen');
  await submit(s, 'lesen');
  const done = await complete(s);
  assert.deepEqual(done.result.modules.map((m) => [m.module, m.status, m.points, m.pass]), [['lesen', 'final', 100, true]]);
  assert.match(done.result.disclaimer, /kein offizielles Ergebnis/);
  const review = await call(env, 'GET', `/exam/v1/attempts/${s.attempt}/modules/lesen/review`, { user });
  assert.equal(review.status, 200); assert.equal(review.json.summary.unanswered, 0);
  assert.equal((await env.DB.prepare('SELECT COUNT(*) AS n FROM module_scores WHERE attempt_id = ?1').bind(s.attempt).first()).n, 1);
  const hist = (await call(env, 'GET', '/exam/v1/attempts', { user })).json.attempts;
  assert.deepEqual(hist[0].modules.map((m) => m.module), ['lesen']);
  // nothing for raters: the queue sees no productive module of this attempt
  const pending = await env.DB.prepare("SELECT COUNT(*) AS n FROM module_scores WHERE attempt_id = ?1 AND status = 'pending_rating'").bind(s.attempt).first();
  assert.equal(pending.n, 0);
  // the next Lesen attempt assigns a fresh form when one is unseen, else repeats the least-seen one
  const next = await create(env, user, { mode: 'synthetic_module', module: 'lesen' });
  assert.equal(next.status, 200);
});

test('MODULE ONLY: a full attempt opened before the switch can still finish Lesen but cannot start another module', async () => {
  const h = makeEnv({ formDirs: [PRACTICE_FORM_DIR] });
  const user = newUser(); await grant(h.env, user);
  const c = await create(h.env, user, { mode: 'synthetic_full' });
  assert.equal(c.status, 200);
  const s = { ...h, user, attempt: c.json.attempt_id, lease: c.json.lease.lease_id };
  h.env.EXAM_MODULE_ONLY = 'lesen';
  await start(s, 'lesen'); await answerObjective(s, 'lesen'); await submit(s, 'lesen');
  const r = await post(s, '/modules/hoeren/start', {});
  assert.equal(r.status, 403); assert.equal(r.json.error, 'module_disabled');
  h.env.EXAM_MODULE_ONLY = 'lesen,bogus';   // misconfigured: nothing starts
  assert.equal((await post(s, '/modules/hoeren/start', {})).json.error, 'module_disabled');
  delete h.env.EXAM_MODULE_ONLY;            // unset again: the attempt continues as before
  assert.equal((await post(s, '/modules/hoeren/start', {})).status, 200);
});
