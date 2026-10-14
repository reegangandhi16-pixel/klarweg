/* Form assignment (ENGINE §7.3, register OD-50): repeat-avoidance by THIS user's attempt counts — never-attempted forms
   first, then the least-attempted ones; ties broken uniformly by the server CSPRNG; other learners play no part; the
   one-open-attempt and idempotency rules still hold under concurrent creates. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { makeEnv, call, newUser, grant, rid, dev, FORM_DIR, PRACTICE_FORM_DIR, PRACTICE_P2_FORM_DIR } from './harness.mjs';

const S0 = 'frm:b1:synthetic-s0@1', P1 = 'frm:b1:synthetic-p1@1', P2 = 'frm:b1:synthetic-p2@1';
const create = (env, user, request_id = rid(), device_id = dev()) => call(env, 'POST', '/exam/v1/attempts', { user, body: { mode: 'synthetic_full', level: 'b1', request_id, device_id } });
const row = (env, id) => env.DB.prepare('SELECT form_id, assignment_reason, assignment_seed FROM attempts WHERE id = ?1').bind(id).first();
/* the attempt lifecycle is not under test: close an attempt directly so the next create is allowed */
const close = (env, id) => env.DB.prepare("UPDATE attempts SET status = 'completed', completed_at = ?2 WHERE id = ?1").bind(id, env.__clock()).run();
async function takeForm(env, user, want) {   // attempt forms until `want` is assigned once more (history setup)
  for (let i = 0; i < 50; i++) {
    const r = await create(env, user); assert.equal(r.status, 200, JSON.stringify(r.json));
    const a = await row(env, r.json.attempt_id); await close(env, r.json.attempt_id);
    if (a.form_id === want) return;
  }
  throw new Error(`never assigned ${want}`);
}
const counts = async (env, user) => Object.fromEntries((await env.DB.prepare('SELECT form_id, COUNT(*) AS n FROM attempts WHERE user_id = ?1 GROUP BY form_id').bind(user).all()).results.map((r) => [r.form_id, r.n]));
const threeForms = () => makeEnv({ formDirs: [FORM_DIR, PRACTICE_FORM_DIR, PRACTICE_P2_FORM_DIR] });

test('ASSIGNMENT: unseen forms first; once all are seen, always one of the least-attempted; reason and seed recorded', async () => {
  const h = threeForms();
  const u = newUser(); await grant(h.env, u);
  const assigned = [];
  for (let i = 0; i < 9; i++) {
    const before = await counts(h.env, u);
    const least = Math.min(...[S0, P1, P2].map((f) => before[f] || 0));
    const r = await create(h.env, u); assert.equal(r.status, 200);
    const a = await row(h.env, r.json.attempt_id);
    assert.equal(before[a.form_id] || 0, least, `attempt ${i + 1}: ${a.form_id} is among the least attempted`);
    const pool = [S0, P1, P2].filter((f) => (before[f] || 0) === least).length;
    assert.equal(a.assignment_reason, least === 0 ? `csprng_uniform_unseen:${pool}` : `csprng_uniform_least_seen:${least}:${pool}`);
    assert.match(a.assignment_seed, /^[0-9a-f]{16}$/);
    await close(h.env, r.json.attempt_id);
    assigned.push(a.form_id);
  }
  assert.deepEqual(Object.values(await counts(h.env, u)).sort(), [3, 3, 3], 'nine attempts over three forms: each exactly three times');
  assert.deepEqual([...new Set(assigned.slice(0, 3))].sort(), [P1, P2, S0].sort(), 'the first three are all different');
});

test('ASSIGNMENT: a single least-attempted form is chosen deterministically', async () => {
  const h = threeForms();
  const u = newUser(); await grant(h.env, u);
  for (let i = 0; i < 5; i++) { const r = await create(h.env, u); await close(h.env, r.json.attempt_id); }
  const c = await counts(h.env, u);
  assert.deepEqual(Object.values(c).sort(), [1, 2, 2], 'three unseen, then two of the three least-attempted');
  const only = [S0, P1, P2].find((f) => c[f] === 1);
  const r = await create(h.env, u); const a = await row(h.env, r.json.attempt_id);
  assert.equal(a.form_id, only, 'the only least-attempted form'); assert.equal(a.assignment_reason, 'csprng_uniform_least_seen:1:1');
});

test('ASSIGNMENT: ties are broken uniformly by the CSPRNG (both tied forms occur), never towards a more-attempted form', async () => {
  const h = makeEnv({ formDirs: [PRACTICE_FORM_DIR, PRACTICE_P2_FORM_DIR] });
  const third = new Set();
  for (let n = 0; n < 30; n++) {   // each learner: P1 once, P2 once (unseen rule), then a tie 1:1
    const u = newUser(); await grant(h.env, u);
    for (let i = 0; i < 2; i++) { const r = await create(h.env, u); await close(h.env, r.json.attempt_id); }
    assert.deepEqual(await counts(h.env, u), { [P1]: 1, [P2]: 1 });
    const r = await create(h.env, u); const a = await row(h.env, r.json.attempt_id);
    assert.equal(a.assignment_reason, 'csprng_uniform_least_seen:1:2');
    third.add(a.form_id);
  }
  assert.deepEqual([...third].sort(), [P1, P2], 'over 30 tied draws both forms occur (chance of one form only: 2^-29)');
});

test('ASSIGNMENT: other learners\u2019 attempt history does not influence an individual\u2019s assignment', async () => {
  const h = makeEnv({ formDirs: [PRACTICE_FORM_DIR, PRACTICE_P2_FORM_DIR] });
  const busy = newUser(), u = newUser(); await grant(h.env, busy); await grant(h.env, u);
  for (let i = 0; i < 10; i++) {   // another learner has taken P1 ten times
    await h.env.DB.prepare(`INSERT INTO attempts (id, user_id, mode, level, form_id, release, status, time_multiplier, client_request_id, assignment_reason, assignment_seed, created_at)
      VALUES (?1, ?2, 'synthetic_full', 'B1', ?3, 'r000', 'completed', 1.0, ?4, 'test', '0000000000000000', ?5)`).bind(`att_${crypto.randomUUID()}`, busy, P1, rid(), h.env.__clock()).run();
  }
  let r = await create(h.env, u);
  assert.equal((await row(h.env, r.json.attempt_id)).assignment_reason, 'csprng_uniform_unseen:2', 'a new learner: both forms unseen, regardless of the other learner');
  await close(h.env, r.json.attempt_id);
  r = await create(h.env, u); await close(h.env, r.json.attempt_id);
  assert.deepEqual(await counts(h.env, u), { [P1]: 1, [P2]: 1 });
  r = await create(h.env, u);
  assert.equal((await row(h.env, r.json.attempt_id)).assignment_reason, 'csprng_uniform_least_seen:1:2', 'a tie of this learner\u2019s own counts; the other learner\u2019s ten P1 attempts change nothing');
});

test('ASSIGNMENT: concurrent and repeated creates keep the one-open-attempt and idempotency rules', async () => {
  const h = threeForms();
  const u = newUser(); await grant(h.env, u);
  const dv = dev();
  // the same request id, sent twice at once: one attempt, the same form, the second is a replay
  const id1 = rid();
  const [a, b] = await Promise.all([create(h.env, u, id1, dv), create(h.env, u, id1, dv)]);
  assert.equal(a.status, 200); assert.equal(b.status, 200);
  assert.equal(a.json.attempt_id, b.json.attempt_id);
  assert.equal((await counts(h.env, u))[(await row(h.env, a.json.attempt_id)).form_id], 1);
  // different request ids while that attempt is open: refused, never a second attempt or a different form
  const [c, d] = await Promise.all([create(h.env, u, rid(), dv), create(h.env, u, rid(), dv)]);
  for (const x of [c, d]) { assert.equal(x.status, 409); assert.equal(x.json.error, 'attempt_open'); }
  assert.equal(Object.values(await counts(h.env, u)).reduce((n, v) => n + v, 0), 1, 'exactly one attempt exists');
  // a client cannot choose the form
  await close(h.env, a.json.attempt_id);
  const e = await call(h.env, 'POST', '/exam/v1/attempts', { user: u, body: { mode: 'synthetic_full', level: 'b1', request_id: rid(), device_id: dv, form_id: (await row(h.env, a.json.attempt_id)).form_id } });
  assert.equal(e.status, 200);
  assert.notEqual((await row(h.env, e.json.attempt_id)).form_id, (await row(h.env, a.json.attempt_id)).form_id, 'the requested (already seen) form is ignored');
});
