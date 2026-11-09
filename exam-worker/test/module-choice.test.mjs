/* EXAM_MODULE_CHOICE (owner request 2026-11-09): the learner chooses at the start — all four modules in one attempt,
   or ONE module now (any of the four), like booking Goethe modules separately. Full attempts stay available; every
   module can be taken alone, end to end, including rated Schreiben/Sprechen; one open attempt per family at a time;
   EXAM_MODULE_ONLY (when set) still restricts. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { makeEnv, newUser, grant, role, call, rid, dev, PRACTICE_FORM_DIR } from './harness.mjs';
import { start, submit, answerObjective, runHoeren, runSchreiben, runSprechen, complete, get } from './flow.mjs';
import { modeBlock, moduleChoice, MODES, apiMode } from '../src/flags.js';

const CHOICE = { EXAM_MODULE_CHOICE: 'on', EXAM_SINGLE_EXAMINER: 'on' };
const create = (env, user, body) => call(env, 'POST', '/exam/v1/attempts', { user, body: { level: 'b1', request_id: rid(), device_id: dev(), ...body } });

async function setupChoice(flags = {}) {
  const h = makeEnv({ formDirs: [PRACTICE_FORM_DIR], flags: { ...CHOICE, ...flags } });
  const user = newUser();
  await grant(h.env, user);
  return { ...h, user };
}

test('MODULE CHOICE (flags): off by default; "on" allows full AND every single module; EXAM_MODULE_ONLY still restricts', () => {
  const syn = { EXAM_SYNTHETIC_FORMS: 'on' };
  assert.equal(moduleChoice({}), false); assert.equal(moduleChoice({ EXAM_MODULE_CHOICE: 'yes' }), false);
  assert.equal(modeBlock(syn, MODES.synthetic_module, 'hoeren'), 'disabled');
  const on = { ...syn, EXAM_MODULE_CHOICE: 'on' };
  assert.equal(modeBlock(on, MODES.synthetic_full), null);
  for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) assert.equal(modeBlock(on, MODES.synthetic_module, m), null, m);
  assert.equal(modeBlock({ ...on, EXAM_MODULE_ONLY: 'lesen' }, MODES.synthetic_full), 'module_only');
  assert.equal(modeBlock({ ...on, EXAM_MODULE_ONLY: 'lesen' }, MODES.synthetic_module, 'hoeren'), 'module_disabled');
  // the mock family: gated by EXAM_MOCK_FORMS like the full M0
  assert.equal(modeBlock({ EXAM_MOCK_FORMS: 'on', EXAM_MODULE_CHOICE: 'on' }, MODES.mock_module, 'sprechen'), null);
  assert.equal(modeBlock({ EXAM_MOCK_FORMS: 'off', EXAM_MODULE_CHOICE: 'on' }, MODES.mock_module, 'sprechen'), 'disabled');
  assert.equal(modeBlock({ EXAM_MOCK_FORMS: 'on' }, MODES.mock_module, 'lesen'), 'disabled');
  assert.equal(apiMode({ mode: 'mock_m0', module_scope: 'hoeren' }), 'mock_module');
  assert.equal(apiMode({ mode: 'mock_m0', module_scope: null }), 'mock_m0');
  // part practice keeps its own switch
  assert.equal(modeBlock(on, MODES.synthetic_part, 'lesen'), 'disabled');
});

test('MODULE CHOICE: availability lists the full test and each of the four modules', async () => {
  const { env, user } = await setupChoice();
  const av = (await call(env, 'GET', '/exam/v1/availability', { user })).json;
  assert.equal(av.modes.find((m) => m.mode === 'synthetic_full').available, true);
  assert.deepEqual(av.modes.filter((m) => m.mode === 'synthetic_module').map((m) => [m.module, m.available]),
    [['lesen', true], ['hoeren', true], ['schreiben', true], ['sprechen', true]]);
  // without access nothing is available
  const stranger = newUser();
  const av2 = (await call(env, 'GET', '/exam/v1/availability', { user: stranger })).json;
  assert.ok(av2.modes.filter((m) => m.mode.startsWith('synthetic_') && !m.mode.endsWith('_part')).every((m) => m.reason === 'no_access'));
});

test('MODULE CHOICE: every module alone, end to end — objective scored at once, Schreiben/Sprechen rated (single examiner)', async () => {
  const h = await setupChoice();
  const { env, user } = h;
  const rater = newUser(); await role(env, rater, 'rater');
  for (const module of ['lesen', 'hoeren', 'schreiben', 'sprechen']) {
    const c = await create(env, user, { mode: 'synthetic_module', module });
    assert.equal(c.status, 200, module + JSON.stringify(c.json));
    assert.equal(c.json.mode, 'synthetic_module'); assert.equal(c.json.module_scope, module);
    assert.deepEqual(c.json.modules.map((m) => [m.module, m.status]), [[module, 'available']]);
    // one open attempt per family: neither the full test nor another module can start meanwhile
    assert.equal((await create(env, user, { mode: 'synthetic_full' })).status, 409);
    assert.equal((await create(env, user, { mode: 'synthetic_module', module: module === 'lesen' ? 'hoeren' : 'lesen' })).status, 409);
    const s = { ...h, attempt: c.json.attempt_id, lease: c.json.lease.lease_id };
    if (module === 'lesen') { await start(s, 'lesen'); await answerObjective(s, 'lesen'); }
    if (module === 'hoeren') await runHoeren(s);
    if (module === 'schreiben') await runSchreiben(s);
    if (module === 'sprechen') await runSprechen(s);
    await submit(s, module);
    const done = await complete(s);
    assert.deepEqual(done.result.modules.map((m) => m.module), [module], module);
    const r0 = done.result.modules[0];
    if (module === 'lesen' || module === 'hoeren') { assert.equal(r0.status, 'final', module); assert.equal(typeof r0.points, 'number'); continue; }
    assert.equal(r0.status, 'pending_rating', module);
    // the single examiner rates both rounds; the module then becomes final
    const prod = async () => (await call(env, 'GET', `/exam/v1/admin/attempts/${s.attempt}/productive`, { user: rater })).json;
    for (const round of [1, 2]) {
      const d = await prod();
      assert.ok(d.units.length > 0, module);
      // the rater sees only this attempt's productive module
      assert.deepEqual(d.modules.map((m) => m.module), [module]); assert.ok(d.units.every((u) => u.module === module));
      for (const u of d.units) {
        const x = await call(env, 'POST', '/exam/v1/admin/ratings', { user: rater, body: { attempt_id: s.attempt, item_id: u.item_id, round, bands: Object.fromEntries(Object.keys(u.criteria).map((k) => [k, 'B'])) } });
        assert.equal(x.status, 200, module + JSON.stringify(x.json));
      }
    }
    const fin = (await call(env, 'GET', `/exam/v1/attempts/${s.attempt}/result`, { user })).json.result;
    assert.deepEqual(fin.modules.map((m) => [m.module, m.status]), [[module, 'final']], module);
    assert.equal(fin.modules[0].same_examiner, true);
  }
  // all four single-module attempts appear in the history, one module each
  const hist = (await call(env, 'GET', '/exam/v1/attempts', { user })).json.attempts;
  assert.deepEqual(hist.map((a) => a.modules.map((m) => m.module)).flat().sort(), ['hoeren', 'lesen', 'schreiben', 'sprechen']);
  // and the full four-module test still works afterwards
  const full = await create(env, user, { mode: 'synthetic_full' });
  assert.equal(full.status, 200); assert.equal(full.json.modules.length, 4);
  const s = { ...h, attempt: full.json.attempt_id, lease: full.json.lease.lease_id };
  assert.equal((await get(s, '/modules/lesen/package')).status, 409);   // not started yet: the usual rules apply
});
