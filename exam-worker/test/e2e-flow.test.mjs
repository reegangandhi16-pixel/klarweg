/* E2E (API level): START → LESEN → HÖREN → SCHREIBEN → SPRECHEN → SUBMIT → RESULT,
   plus AUTH / SESSION / FORM ASSIGNMENT / RESULTS rows of the test matrix. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, makeEnv, call, newUser, grant, role, rid, dev, pkgFor, scoredItems } from './harness.mjs';
import { A, post, get, start, submit, answerObjective, runHoeren, runSchreiben, runSprechen, complete, SAMPLE_TEXT } from './flow.mjs';

test('E2E full synthetic flow START→LESEN→HÖREN→SCHREIBEN→SPRECHEN→SUBMIT→RESULT', async () => {
  const s = await setup();
  assert.deepEqual(s.created.modules.map((m) => [m.module, m.status]), [['lesen', 'available'], ['hoeren', 'locked'], ['schreiben', 'locked'], ['sprechen', 'locked']]);
  assert.equal(s.created.form.test_content, true);
  assert.equal('form_id' in s.created, false);

  await start(s, 'lesen');
  assert.equal(await answerObjective(s, 'lesen'), 30);
  await submit(s, 'lesen');

  await runHoeren(s, (it, k) => (Number(it.display_no) <= 18 ? k.correct : 'zzz-skip') === 'zzz-skip' ? undefined : k.correct);
  await submit(s, 'hoeren');

  const wItems = await runSchreiben(s);
  await submit(s, 'schreiben');
  await runSprechen(s);
  await submit(s, 'sprechen');

  const done = await complete(s);
  const r = done.result;
  assert.equal(r.label, 'KLARWEG B1 SIMULATION — TEST RESULT');
  assert.equal(r.test_content, true);
  const by = Object.fromEntries(r.modules.map((m) => [m.module, m]));
  assert.equal(by.lesen.points, 100); assert.equal(by.lesen.pass, true); assert.equal(by.lesen.predikat, 'sehr gut');
  assert.equal(by.hoeren.points, 60); assert.equal(by.hoeren.pass, true); assert.deepEqual(by.hoeren.counts, { correct: 18, incorrect: 0, unanswered: 12 });
  assert.equal(by.schreiben.status, 'pending_rating'); assert.equal(by.schreiben.points, null);
  assert.equal(by.sprechen.status, 'pending_rating');
  assert.equal(JSON.stringify(r).match(/Goethe[- ](score|certificate|Zertifikat)|official score/i), null);
  assert.ok(!('combined' in r) && !('total' in r));

  // writing stored server-side with German characters intact
  const wf = (await s.env.DB.prepare('SELECT item_id, text, words FROM writing_final WHERE attempt_id = ?1').bind(s.attempt).all()).results;
  assert.equal(wf.length, wItems.length);
  assert.ok(wf.every((w) => w.text === SAMPLE_TEXT.normalize('NFC') && w.words === 19));

  // GET /result (owner)
  const res = await call(s.env, 'GET', A(s, '/result'), { user: s.user });
  assert.equal(res.status, 200); assert.equal(res.json.result.label, 'KLARWEG B1 SIMULATION — TEST RESULT');

  // two independent human raters → Sprechen becomes final (half-up), Schreiben integer mean final
  const r1 = newUser(), r2 = newUser();
  await role(s.env, r1, 'rater'); await role(s.env, r2, 'rater');
  const rateAll = async (rater, round, wBand, sBand) => {
    for (const it of wItems) {
      const crits = (pkgFor(s.build, 'schreiben').rubric_structure[it.item_id.endsWith('s3') ? 'rub:b1:schreiben:p3@1' : it.item_id.endsWith('s1') ? 'rub:b1:schreiben:p1@1' : 'rub:b1:schreiben:p2@1']).criteria;
      const x = await call(s.env, 'POST', '/exam/v1/admin/ratings', { user: rater, body: { attempt_id: s.attempt, item_id: it.item_id, round, bands: Object.fromEntries(crits.map((c) => [c, wBand])) } });
      assert.equal(x.status, 200, JSON.stringify(x.json));
    }
    const sp = pkgFor(s.build, 'sprechen').rubric_structure;
    for (const [id, rub] of [['itm:b1:syn-sp1', 'p1'], ['itm:b1:syn-sp2', 'p2'], ['itm:b1:syn-sp3', 'p3'], ['sprechen:pron', 'pron']]) {
      const crits = sp[`rub:b1:sprechen:${rub}@1`].criteria;
      const x = await call(s.env, 'POST', '/exam/v1/admin/ratings', { user: rater, body: { attempt_id: s.attempt, item_id: id, round, bands: Object.fromEntries(crits.map((c) => [c, sBand])) } });
      assert.equal(x.status, 200, JSON.stringify(x.json));
    }
  };
  await rateAll(r1, 1, 'B', 'A');   // W: 75; S: 100
  await rateAll(r2, 2, 'B', 'B');   // W: 75; S: 75 → mean 87.5 → 88
  const fin = await call(s.env, 'GET', A(s, '/result'), { user: s.user });
  const fm = Object.fromEntries(fin.json.result.modules.map((m) => [m.module, m]));
  assert.equal(fm.schreiben.status, 'final'); assert.equal(fm.schreiben.points, 75);
  assert.equal(fm.sprechen.status, 'final'); assert.equal(fm.sprechen.points, 88); assert.equal(fm.sprechen.predikat, 'gut');
});

test('AUTH: missing proxy secret, wrong proxy secret, missing user, malformed user are refused', async () => {
  const { env } = makeEnv();
  assert.equal((await call(env, 'GET', '/exam/v1/availability', { user: newUser(), proxyAuth: null })).status, 401);
  assert.equal((await call(env, 'GET', '/exam/v1/availability', { user: newUser(), proxyAuth: 'x'.repeat(40) })).status, 401);
  assert.equal((await call(env, 'GET', '/exam/v1/availability', {})).json.error, 'auth_required');
  assert.equal((await call(env, 'GET', '/exam/v1/availability', { user: 'usr_admin' })).status, 401);
  const noSecret = makeEnv({ flags: { EXAM_PROXY_SECRET: '' } });
  assert.equal((await call(noSecret.env, 'GET', '/exam/v1/availability', { user: newUser() })).json.error, 'exam_misconfigured');
});

test('AUTH: exam entitlement is required (chapter entitlement is irrelevant); revoked / expired access refused', async () => {
  const { env, clock } = makeEnv();
  const u = newUser();
  const body = { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dev() };
  assert.equal((await call(env, 'POST', '/exam/v1/attempts', { user: u, body })).json.error, 'exam_access_required');
  const av = await call(env, 'GET', '/exam/v1/availability', { user: u });
  assert.equal(av.json.modes.find((m) => m.mode === 'synthetic_full').reason, 'no_access');
  await env.DB.prepare("INSERT INTO exam_access (id, user_id, level, scope, source, granted_at, valid_until) VALUES ('x1', ?1, 'B1', 'synthetic', 't', 0, ?2)").bind(u, Math.floor(clock.t / 1000) - 1).run();
  assert.equal((await call(env, 'POST', '/exam/v1/attempts', { user: u, body })).json.error, 'exam_access_required');
  await env.DB.prepare("INSERT INTO exam_access (id, user_id, level, scope, source, granted_at, revoked_at) VALUES ('x2', ?1, 'B1', 'synthetic', 't', 0, 1)").bind(u).run();
  assert.equal((await call(env, 'POST', '/exam/v1/attempts', { user: u, body })).json.error, 'exam_access_required');
  await grant(env, u, 'mock');   // wrong scope
  assert.equal((await call(env, 'POST', '/exam/v1/attempts', { user: u, body })).json.error, 'exam_access_required');
  await grant(env, u, 'synthetic');
  assert.equal((await call(env, 'POST', '/exam/v1/attempts', { user: u, body })).status, 200);
});

test('SESSION: attempt create is idempotent per request id; one open attempt per mode', async () => {
  const { env } = makeEnv();
  const u = newUser(); await grant(env, u);
  const body = { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dev() };
  const a = await call(env, 'POST', '/exam/v1/attempts', { user: u, body });
  const b = await call(env, 'POST', '/exam/v1/attempts', { user: u, body });
  assert.equal(a.json.attempt_id, b.json.attempt_id); assert.equal(b.json.replayed, true);
  const c = await call(env, 'POST', '/exam/v1/attempts', { user: u, body: { ...body, request_id: rid() } });
  assert.equal(c.status, 409); assert.equal(c.json.error, 'attempt_open'); assert.equal(c.json.attempt_id, a.json.attempt_id);
  const av = await call(env, 'GET', '/exam/v1/availability', { user: u });
  assert.deepEqual(av.json.open_attempts, [{ attempt_id: a.json.attempt_id, mode: 'synthetic_full' }]);
});

test('FORM ASSIGNMENT: server-side only; client form hints ignored and audited; flags gate modes', async () => {
  const { env } = makeEnv();
  const u = newUser(); await grant(env, u); await grant(env, u, 'mock'); await grant(env, u, 'sets');
  const r = await call(env, 'POST', '/exam/v1/attempts', { user: u, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dev(), form_id: 'frm:b1:mock-m0@1' } });
  assert.equal(r.status, 200);
  const row = await env.DB.prepare('SELECT form_id, assignment_reason, assignment_seed FROM attempts WHERE id = ?1').bind(r.json.attempt_id).first();
  assert.equal(row.form_id, 'frm:b1:synthetic-s0@1');
  assert.match(row.assignment_reason, /^csprng_uniform_unseen:1$/);
  assert.match(row.assignment_seed, /^[0-9a-f]{16}$/);
  assert.ok(await env.DB.prepare("SELECT 1 FROM audit_log WHERE action = 'form_selection_ignored'").first());
  for (const mode of ['mock_m0', 'simulation_full']) {
    const x = await call(env, 'POST', '/exam/v1/attempts', { user: u, body: { mode, level: 'b1', request_id: rid(), device_id: dev() } });
    assert.equal(x.json.error, 'mode_disabled', mode);
  }
  const on = makeEnv({ flags: { EXAM_MOCK_FORMS: 'on' } });
  const u2 = newUser(); await grant(on.env, u2, 'mock');
  const y = await call(on.env, 'POST', '/exam/v1/attempts', { user: u2, body: { mode: 'mock_m0', level: 'b1', request_id: rid(), device_id: dev() } });
  assert.equal(y.json.error, 'no_forms_available');   // a synthetic form is never served as a Mock
  assert.equal((await call(env, 'POST', '/exam/v1/attempts', { user: u, body: { mode: 'synthetic_full', level: 'c2', request_id: rid(), device_id: dev() } })).json.error, 'invalid_mode_or_level');
});

test('FLAGS: everything off by default — EXAM_ENABLED unset → 503 exam_disabled; synthetic flag off → mode_disabled', async () => {
  const { env } = makeEnv({ flags: { EXAM_ENABLED: undefined } });
  const r = await call(env, 'GET', '/exam/v1/availability', { user: newUser() });
  assert.equal(r.status, 503); assert.equal(r.json.error, 'exam_disabled');
  const t = makeEnv({ flags: { EXAM_ENABLED: 'true' } });   // only the exact string "on" enables
  assert.equal((await call(t.env, 'GET', '/exam/v1/availability', { user: newUser() })).status, 503);
  const s = makeEnv({ flags: { EXAM_SYNTHETIC_FORMS: 'off' } });
  const u = newUser(); await grant(s.env, u);
  assert.equal((await call(s.env, 'POST', '/exam/v1/attempts', { user: u, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dev() } })).json.error, 'mode_disabled');
});

test('SESSION: module order is enforced; invalid transitions rejected', async () => {
  const s = await setup();
  assert.equal((await post(s, '/modules/hoeren/start', {})).json.error, 'module_locked');
  await start(s, 'lesen');
  assert.equal((await post(s, '/modules/lesen/start', {})).json.error, 'invalid_transition');
  assert.equal((await post(s, '/complete', {})).json.error, 'modules_pending');
  await submit(s, 'lesen');
  const again = await post(s, '/modules/lesen/submit', {});
  assert.equal(again.json.already, true);
  assert.equal((await post(s, '/modules/lesen/answers', { answers: [{ item_id: 'itm:b1:syn-l1-01', value: { option_id: 'richtig' }, seq: 9 }] })).json.error, 'module_submitted');
  assert.equal((await get(s, '/modules/lesen/package')).json.error, 'module_submitted');
  assert.equal((await post(s, '/modules/sprechen/start', {})).json.error, 'module_locked');
  const st = await call(s.env, 'GET', A(s), { user: s.user });
  assert.equal(st.json.modules.find((m) => m.module === 'hoeren').status, 'available');
});

test('RESULTS: not available before completion; unknown route / method / API version', async () => {
  const s = await setup();
  assert.equal((await call(s.env, 'GET', A(s, '/result'), { user: s.user })).json.error, 'result_not_ready');
  assert.equal((await call(s.env, 'GET', '/exam/v2/availability', { user: s.user })).json.error, 'unsupported_api_version');
  assert.equal((await call(s.env, 'DELETE', A(s), { user: s.user })).status, 405);
  assert.equal((await call(s.env, 'GET', '/exam/v1/nope', { user: s.user })).status, 404);
});

test('VALIDATION (answers): unknown item, example item, bad option, bad shape, bad seq, too many', async () => {
  const s = await setup();
  await start(s, 'lesen');
  const save = (a) => post(s, '/modules/lesen/answers', { answers: Array.isArray(a) ? a : [a] });
  assert.equal((await save({ item_id: 'itm:b1:nope', value: { option_id: 'a' }, seq: 1 })).json.error, 'unknown_item');
  assert.equal((await save({ item_id: 'itm:b1:syn-l1-00', value: { option_id: 'richtig' }, seq: 1 })).json.error, 'item_is_example');
  assert.equal((await save({ item_id: 'itm:b1:syn-l1-01', value: { option_id: 'vielleicht' }, seq: 1 })).json.error, 'invalid_option');
  assert.equal((await save({ item_id: 'itm:b1:syn-l1-01', value: { option_id: 'richtig', correct: true }, seq: 1 })).json.error, 'invalid_value');
  assert.equal((await save({ item_id: 'itm:b1:syn-l1-01', value: { text: 'x' }, seq: 1 })).json.error, 'invalid_value');
  assert.equal((await save({ item_id: 'itm:b1:syn-l1-01', value: { option_id: 'richtig' }, seq: 0 })).json.error, 'invalid_seq');
  assert.equal((await save({ item_id: 'itm:b1:syn-l1-01', value: { option_id: 'richtig' }, seq: 1.5 })).json.error, 'invalid_seq');
  assert.equal((await save(Array.from({ length: 41 }, () => ({ item_id: 'itm:b1:syn-l1-01', value: { option_id: 'richtig' }, seq: 1 })))).json.error, 'invalid_answers');
  assert.equal((await save({ item_id: 'itm:b1:syn-l1-01', value: { option_id: null }, seq: 1 })).status, 200);   // clearing is allowed
  const bad = await call(s.env, 'POST', A(s, '/modules/lesen/answers'), { user: s.user, raw: Buffer.from('{}'), contentType: 'text/plain' });
  assert.equal(bad.json.error, 'unsupported_media_type');
});
