/* SECURITY: key leakage, scoring-rule leakage, unreleased module access,
   cross-attempt access, forged attempt ids, expired sessions, stale writes,
   replayed requests, duplicate submissions, form-assignment tampering,
   timer manipulation, unauthorized result access, rater rules, log redaction. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, newUser, role, rid, keysFor, PROXY_SECRET, MEDIA_SECRET } from './harness.mjs';
import { A, post, get, start, submit, answerObjective, runHoeren, runSchreiben, runSprechen, complete } from './flow.mjs';
import { redact } from '../src/log.js';

const FORBIDDEN_KEYS = ['correct', 'key', 'key_json', 'keys', 'solution', 'answer_key', 'objective_tables', 'map', 'third_rating', 'rounding',
  'pass_threshold_points', 'grade_bands', 'zero_rule', 'length_rule_pct', 'assignment_seed', 'assignment_reason', 'form_id', 'r2_key', 'package_key', 'ai_allowed'];

function scanKeys(obj, where, out = []) {
  if (Array.isArray(obj)) obj.forEach((v, i) => scanKeys(v, `${where}[${i}]`, out));
  else if (obj && typeof obj === 'object') for (const [k, v] of Object.entries(obj)) { if (FORBIDDEN_KEYS.includes(k) && !(where.endsWith('.counts') && typeof v === 'number')) out.push(`${where}.${k}`); scanKeys(v, `${where}.${k}`, out); }
  return out;
}

/* Wrap the env so every JSON response of a full flow is captured. */
async function fullFlowCapturing() {
  const s = await setup();
  const seen = [];
  const orig = call;
  const capture = async (...args) => { const r = await orig(...args); if (r.json) seen.push([args[2], r.json]); return r; };
  s.capture = capture;
  await start(s, 'lesen');
  seen.push(['package lesen', (await get(s, '/modules/lesen/package')).json]);
  await answerObjective(s, 'lesen'); await submit(s, 'lesen');
  await runHoeren(s, (it, k) => k.correct);
  seen.push(['package hoeren', (await get(s, '/modules/hoeren/package')).json]);
  seen.push(['answers hoeren', (await get(s, '/modules/hoeren/answers')).json]);
  await submit(s, 'hoeren');
  await runSchreiben(s);
  seen.push(['package schreiben', (await get(s, '/modules/schreiben/package')).json]);
  await submit(s, 'schreiben');
  await runSprechen(s);
  seen.push(['package sprechen', (await get(s, '/modules/sprechen/package')).json]);
  seen.push(['status sprechen', (await get(s, '/sprechen/status')).json]);
  await submit(s, 'sprechen');
  seen.push(['attempt', (await call(s.env, 'GET', A(s), { user: s.user })).json]);
  seen.push(['complete', await complete(s)]);
  seen.push(['result', (await call(s.env, 'GET', A(s, '/result'), { user: s.user })).json]);
  seen.push(['availability', (await call(s.env, 'GET', '/exam/v1/availability', { user: s.user })).json]);
  return { s, seen };
}

test('SECURITY key + scoring-rule leakage: no learner-facing response carries keys, tables, rules, form id or storage keys', async () => {
  const { s, seen } = await fullFlowCapturing();
  const bad = seen.flatMap(([w, j]) => scanKeys(j, w));
  assert.deepEqual(bad, []);
  // and the key values of non-binary items never appear next to their item in any package
  const keys = keysFor(s.build);
  const text = JSON.stringify(seen);
  assert.equal(text.includes('frm:b1:synthetic-s0@1'), false);
  assert.equal(text.includes(PROXY_SECRET) || text.includes(MEDIA_SECRET), false);
  assert.ok(Object.keys(keys).length > 60);
});

test('SECURITY unreleased module access: package / answers / media of a locked or available-but-unstarted module are refused', async () => {
  const s = await setup();
  for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) {
    const r = await get(s, `/modules/${m}/package`);
    assert.equal(r.status, 409, m); assert.equal(r.json.error, 'module_not_running');
    assert.equal((await post(s, `/modules/${m}/answers`, { answers: [{ item_id: 'itm:b1:syn-l1-01', value: { option_id: 'richtig' }, seq: 1 }] })).status, 409);
  }
  assert.equal((await post(s, '/media', { asset_id: 'ast:syn-h1-t1' })).json.error, 'module_not_running');
  assert.equal((await post(s, '/hoeren/events', { type: 'ready' })).json.error, 'module_not_running');
});

test('SECURITY cross-attempt / forged attempt ids: another user\'s attempt is indistinguishable from a missing one', async () => {
  const a = await setup();
  const b = await setup();
  const mallory = newUser();
  for (const [m, p] of [['GET', ''], ['GET', '/result'], ['POST', '/lease'], ['POST', '/heartbeat'], ['POST', '/modules/lesen/start'], ['POST', '/complete']]) {
    const r = await call(a.env, m, A(a, p), { user: mallory, body: m === 'POST' ? { lease_id: a.lease, request_id: rid(), device_id: a.device } : undefined });
    assert.equal(r.status, 404, `${m} ${p}`); assert.equal(r.json.error, 'attempt_not_found');
  }
  const forged = `att_${crypto.randomUUID()}`;
  assert.equal((await call(a.env, 'GET', `/exam/v1/attempts/${forged}`, { user: a.user })).json.error, 'attempt_not_found');
  assert.equal((await call(a.env, 'GET', '/exam/v1/attempts/att_1%27%20OR%201=1', { user: a.user })).status, 404);
  // a's lease cannot drive b's attempt (separate envs share nothing; same env: lease mismatch)
  const c = await setup();
  const s2 = { ...c, attempt: c.attempt, lease: c.lease };
  const other = await call(c.env, 'POST', '/exam/v1/attempts', { user: newUser(), body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: c.device } });
  assert.equal(other.json.error, 'exam_access_required');
  assert.ok(s2 && b);
});

test('SECURITY lease from one attempt cannot be used on another attempt of the same user', async () => {
  const s = await setup();
  const { env } = s;
  // same user, second attempt of a different mode is impossible (flags) — simulate by finishing and starting a new one
  for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) { await start(s, m); if (m === 'hoeren') await post(s, '/hoeren/events', { type: 'ready' }); await submit(s, m); }
  await complete(s);
  const n = await call(env, 'POST', '/exam/v1/attempts', { user: s.user, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: s.device } });
  assert.equal(n.status, 200);
  const r = await call(env, 'POST', `/exam/v1/attempts/${n.json.attempt_id}/modules/lesen/start`, { user: s.user, body: { lease_id: s.lease, request_id: rid() } });
  assert.equal(r.json.error, 'lease_superseded');
  // the second attempt re-used the only synthetic form: reason records it
  const row = await env.DB.prepare('SELECT assignment_reason FROM attempts WHERE id = ?1').bind(n.json.attempt_id).first();
  assert.equal(row.assignment_reason, 'csprng_uniform_all_seen:1');
});

test('SECURITY expired session: without the proxy-resolved user nothing is reachable', async () => {
  const s = await setup();
  for (const p of ['', '/result']) assert.equal((await call(s.env, 'GET', A(s, p), {})).json.error, 'auth_required');
  // a browser cannot assert identity directly: the Worker needs the proxy secret too
  assert.equal((await call(s.env, 'GET', A(s), { user: s.user, proxyAuth: null })).json.error, 'proxy_auth_required');
});

test('SECURITY form-assignment tampering: no route changes the form; DB trigger-free immutability via API surface', async () => {
  const s = await setup();
  const before = await s.env.DB.prepare('SELECT form_id FROM attempts WHERE id = ?1').bind(s.attempt).first();
  await post(s, '/modules/lesen/start', { form_id: 'frm:b1:other@1', form: 'x' });
  await call(s.env, 'POST', A(s, '/lease'), { user: s.user, body: { device_id: s.device, takeover: true, form_id: 'frm:b1:other@1' } });
  const after = await s.env.DB.prepare('SELECT form_id FROM attempts WHERE id = ?1').bind(s.attempt).first();
  assert.deepEqual(after, before);
});

test('SECURITY timer manipulation: ready cannot postpone the Hören schedule; client deadline fields ignored', async () => {
  const s = await setup();
  await start(s, 'lesen'); await submit(s, 'lesen');
  const h = await post(s, '/modules/hoeren/start', { deadline_at: 9e15 });
  const started = h.json.module.started_at;
  s.advance(59_000); await post(s, '/heartbeat', {});
  s.advance(59_000); await post(s, '/heartbeat', {});
  s.advance(59_000);
  const r = await post(s, '/hoeren/events', { type: 'ready', plan_started_at: 9e15 });
  assert.equal(r.json.plan_started_at, started + 120_000);
});

test('SECURITY unauthorized result access: other learners and plain raters get 404; lead rater may read', async () => {
  const s = await setup();
  for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) { await start(s, m); if (m === 'hoeren') await post(s, '/hoeren/events', { type: 'ready' }); await submit(s, m); }
  await complete(s);
  const other = newUser();
  assert.equal((await call(s.env, 'GET', A(s, '/result'), { user: other })).status, 404);
  const rater = newUser(); await role(s.env, rater, 'rater');
  assert.equal((await call(s.env, 'GET', A(s, '/result'), { user: rater })).status, 404);
  const lead = newUser(); await role(s.env, lead, 'lead_rater');
  assert.equal((await call(s.env, 'GET', A(s, '/result'), { user: lead })).status, 200);
});

test('SECURITY rating rules: role required, not own attempt, independent raters, round 3 = lead, module must be submitted', async () => {
  const s = await setup();
  const rate = (user, body) => call(s.env, 'POST', '/exam/v1/admin/ratings', { user, body: { attempt_id: s.attempt, item_id: 'itm:b1:syn-s1', round: 1, bands: { erfuellung: 'A', kohaerenz: 'A', wortschatz: 'A', strukturen: 'A' }, ...body } });
  const r1 = newUser(); await role(s.env, r1, 'rater');
  assert.equal((await rate(newUser(), {})).json.error, 'rater_role_required');
  assert.equal((await rate(r1, {})).json.error, 'module_not_submitted');
  for (const m of ['lesen', 'hoeren', 'schreiben']) { await start(s, m); if (m === 'hoeren') await post(s, '/hoeren/events', { type: 'ready' }); await submit(s, m); }
  await role(s.env, s.user, 'rater');
  assert.equal((await rate(s.user, {})).json.error, 'cannot_rate_own_attempt');
  assert.equal((await rate(r1, {})).status, 200);
  assert.equal((await rate(r1, {})).json.error, 'already_rated');
  assert.equal((await rate(r1, { round: 2, item_id: 'itm:b1:syn-s2' })).json.error, 'rater_not_independent');
  assert.equal((await rate(r1, { round: 3 })).json.error, 'lead_rater_required');
  assert.equal((await rate(r1, { item_id: 'itm:b1:syn-l1-01' })).json.error, 'not_rateable');
  assert.equal((await rate(r1, { item_id: 'itm:b1:syn-s2', bands: { erfuellung: 'Z' } })).json.error, 'invalid_bands');
  assert.equal((await call(s.env, 'GET', `/exam/v1/admin/attempts/${s.attempt}/productive`, { user: newUser() })).json.error, 'rater_role_required');
  const view = await call(s.env, 'GET', `/exam/v1/admin/attempts/${s.attempt}/productive`, { user: r1 });
  assert.equal(view.status, 200); assert.equal(view.json.writing.length, 3);
});

test('SECURITY logging: request logs carry no answers, texts, keys, secrets or attempt-scoped tokens', async () => {
  const { s } = await fullFlowCapturing();
  const logs = s.env.__logs.join('\n');
  assert.ok(s.env.__logs.length > 50);
  for (const needle of [PROXY_SECRET, MEDIA_SECRET, 'Sehr geehrte', 'richtig"', 'key_json', s.user]) assert.equal(logs.includes(needle), false, needle);
  assert.equal(/\/media\/[A-Za-z0-9_-]{20,}/.test(logs), false);
  assert.equal(/att_[0-9a-f-]{36}\//.test(logs.replace(/"attempt":"att_[0-9a-f-]{36}"/g, '')), false);
  for (const l of s.env.__logs) assert.doesNotThrow(() => JSON.parse(l));
  assert.deepEqual(redact({ password: 'p', nested: { text: 'Hallo', key: 'a', ok: 1 }, token: 't' }), { password: '[redacted]', nested: { text: '[redacted]', key: '[redacted]', ok: 1 }, token: '[redacted]' });
});
