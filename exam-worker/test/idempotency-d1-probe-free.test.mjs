/* Workers-FREE split of the idempotency D1 probe — LOCAL SELF-CHECK on the in-memory shim. NOT D1 evidence.
   Proves, locally: (1) every Free invocation stays within the conservative statement budget (measured by an
   independent counter, with and without latency); (2) the split runs the SAME scenario functions and assertions;
   (3) the split still detects broken atomicity, a missing claim check and a takeover that is not compare-and-set
   (negative controls, with the same verdicts as the combined Paid run); (4) budget trips and
   unanswered race requests are INCONCLUSIVE, never pass; (5) the fail-closed guards are unchanged. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { createExamD1, makeEnv, WORKER_DIR } from './harness.mjs';
import { handle } from '../verification/idempotency-d1/worker-free.mjs';
import { handle as handlePaid } from '../verification/idempotency-d1/worker.mjs';
import { runScenarios } from '../verification/idempotency-d1/probe.mjs';
import { runFree, judgeRace, FREE_SCENARIOS } from '../verification/idempotency-d1/run-idem-free.mjs';
import { FREE_QUERY_BUDGET, FREE_PLATFORM_LIMIT, VERIFY_MAX, WORST, AFTER_WAIT, FREE_N, FREE_FAN } from '../verification/idempotency-d1/budget.mjs';

const SCHEMA = fs.readFileSync(path.join(WORKER_DIR, 'verification/idempotency-d1/probe-schema.sql'), 'utf8');
const LABEL = 'nonprod-local-check', NONCE = 'n'.repeat(16) + crypto.randomBytes(16).toString('hex'), TOKEN = 't'.repeat(40);
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');
const mark = (DB, label = LABEL, nonce = NONCE) => DB.raw.prepare('INSERT INTO idem_probe_marker (label, nonce_sha256, created_at) VALUES (?, ?, 0)').run(label, sha(nonce));
function qualified() { const DB = createExamD1(); DB.raw.exec(SCHEMA); mark(DB); return DB; }
const snapshot = (DB) => DB.raw.prepare("SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name").all()
  .map(({ name }) => `${name}:${DB.raw.prepare(`SELECT COUNT(*) AS n FROM "${name}"`).get().n}`).join(',');
const envOf = (DB, over = {}) => ({ DB, IDEM_PROBE: 'on', IDEM_PROBE_TOKEN: TOKEN, IDEM_PROBE_LABEL: LABEL, IDEM_PROBE_DB_NONCE: NONCE, ...over });
const req = (p, method = 'POST', token = TOKEN) => new Request('https://probe.example' + p, { method, headers: { 'x-idem-token': token } });
const quiet = async (fn) => { const l = console.log; console.log = () => {}; try { return await fn(); } finally { console.log = l; } };

/* Independent statement counter (does not reuse budget.mjs) + optional per-call latency; `rewrite` mutates SQL. */
/* `latency`: random 0–latency ms per call. `lockstep`: a FIXED model (each single statement 2 ms, a batch 10 ms) so that
   concurrent requests interleave the same way on every run — deterministic contention for the race tests. */
const LOCKSTEP = { call: 2, batch: 10 };
const CLAIM_SQL = "'pending', ?5, ?4) ON CONFLICT";
function instrument(DB, { latency = 0, lockstep = null, rewrite = (s) => s, batchImpl = null, fakeClaim = false } = {}) {
  const c = { statements: 0 };
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const delay = (kind = 'call') => (lockstep ? wait(lockstep[kind]) : latency ? wait(Math.random() * latency) : null);
  const wrap = (st) => ({ _runSync: () => st._runSync(), bind: (...b) => wrap(st.bind(...b)),
    first: async (x) => { c.statements++; await delay(); return st.first(x); }, all: async () => { c.statements++; await delay(); return st.all(); },
    run: async () => { c.statements++; await delay(); return st.run(); } });
  // fakeClaim: the claim INSERT reports success but writes nothing (with `noIdempotency` below: no protection at all)
  const fake = { bind: () => ({ run: async () => { c.statements++; await delay(); return { meta: { changes: 1 } }; } }) };
  const db = { raw: DB.raw, prepare: (sql) => (fakeClaim && sql.includes(CLAIM_SQL) ? fake : wrap(DB.prepare(rewrite(sql)))),
    batch: async (s) => { c.statements += s.length; await delay('batch'); return batchImpl ? batchImpl(DB, s) : DB.batch(s); } };
  return { c, db };
}
async function invoke(DB, p, m = 'POST', opts) { const r = await quiet(() => handle(req(p, m), envOf(DB), opts)); return { http: r.status, body: await r.json() }; }
const inProcessCall = (DB, opts) => (m, p) => invoke(DB, p, m, opts);

test('FREE BUDGET (static): worst-case statements per invocation fit the conservative budget, which is below the official Free limit', () => {
  assert.ok(FREE_QUERY_BUDGET <= FREE_PLATFORM_LIMIT - 10, 'keep ≥ 10 statements of margin below the 50-query Free limit');
  const fixed = { S1: WORST.S1(FREE_N.S1), S3: WORST.S3(), S4: WORST.S4(), S5: WORST.S5(FREE_N.S5), S7b: WORST.S7b(),
    'race/prepare:stale': WORST['race/prepare:stale'](), 'race/one': WORST['race/one'](), 'race/state': WORST['race/state']() };
  for (const [k, v] of Object.entries(fixed)) assert.ok(VERIFY_MAX + v <= FREE_QUERY_BUDGET, `${k}: ${VERIFY_MAX + v} > ${FREE_QUERY_BUDGET}`);
  for (const id of ['S2', 'S6', 'S7a']) {     // the claim wait may poll only while the post-wait work still fits
    const maxPolls = FREE_QUERY_BUDGET - VERIFY_MAX - WORST[id](0);
    assert.equal(WORST[id](0) - 2, AFTER_WAIT[id], `${id}: AFTER_WAIT matches the worst-case model`);
    assert.ok(maxPolls >= 15, `${id}: only ${maxPolls} claim polls fit`);
  }
  // why S1 / S5 cannot keep the Paid n = 20 in ONE Free invocation, and how fan rounds restore ≥ 20 competing claims
  assert.ok(VERIFY_MAX + WORST.S1(20) > FREE_PLATFORM_LIMIT && VERIFY_MAX + WORST.S5(20) > FREE_PLATFORM_LIMIT, 'n = 20 in one invocation exceeds the Free limit');
  assert.ok(VERIFY_MAX + WORST.S1(FREE_N.S1 + 2) > FREE_QUERY_BUDGET || VERIFY_MAX + WORST.S5(FREE_N.S5 + 1) > FREE_QUERY_BUDGET, 'S1 / S5 use the largest n that fits');
  assert.ok(VERIFY_MAX + WORST['race/fan'](FREE_FAN.m) <= FREE_QUERY_BUDGET, `fan: ${VERIFY_MAX + WORST['race/fan'](FREE_FAN.m)}`);
  assert.ok(FREE_FAN.k * FREE_FAN.m >= 20, 'a fan round has at least as many competing claims as the Paid in-isolate n = 20');
});

test('FREE BUDGET (measured): every Free endpoint, every scenario passes and stays within budget — with and without latency (independent counter)', async () => {
  for (const latency of [0, 60]) {
    const DB = qualified();
    for (const id of FREE_SCENARIOS) {
      const { c, db } = instrument(DB, { latency });
      const r = await invoke(db, `/idem/scenario?id=${id}&run=free-${latency}-${id.toLowerCase()}-01`);
      assert.equal(r.body.status, 'pass', `${id} @${latency}ms: ${JSON.stringify(r.body)}`);
      assert.equal(r.body.budget.used, c.statements, `${id}: the guard's count equals the independent count`);
      assert.ok(c.statements <= FREE_QUERY_BUDGET, `${id}: ${c.statements} statements`);
      const model = VERIFY_MAX + (['S2', 'S6', 'S7a'].includes(id) ? WORST[id](FREE_QUERY_BUDGET) : WORST[id](FREE_N[id]));
      assert.ok(c.statements <= model, `${id}: measured ${c.statements} exceeds the worst-case model ${model}`);
    }
    for (const kind of ['fresh', 'stale']) {
      const run = `free-${latency}-race-${kind}`;
      const steps = [['POST', `/idem/race/prepare?kind=${kind}&run=${run}`], ...Array(4).fill(['POST', `/idem/race/one?run=${run}`]), ['GET', `/idem/race/state?run=${run}`]];
      for (const [m, p] of steps) { const { c, db } = instrument(DB, { latency }); const r = await invoke(db, p, m); assert.equal(r.http, 200, p); assert.ok(c.statements <= VERIFY_MAX + 8, `${p}: ${c.statements}`); }
      const fanRun = `${run}-fan`; await invoke(DB, `/idem/race/prepare?kind=${kind}&run=${fanRun}`);
      for (let i = 0; i < 2; i++) {             // first fan invocation holds the winner (stale: one takeover + m − 1 losers)
        const { c, db } = instrument(DB, { latency }); const r = await invoke(db, `/idem/race/fan?run=${fanRun}&m=${FREE_FAN.m}`);
        assert.equal(r.body.results.length, FREE_FAN.m, 'every claim of the fan was issued');
        assert.equal(r.body.budget.used, c.statements); assert.ok(!r.body.inconclusive && c.statements <= VERIFY_MAX + WORST['race/fan'](FREE_FAN.m), `fan ${kind}: ${c.statements}`);
      }
    }
  }
});

test('FREE vs PAID: the single-invocation Paid run exceeds the Free limit; the split reaches the same verdicts with the same scenario functions', async () => {
  const DB = qualified(); const { c, db } = instrument(DB);
  const paid = await (await quiet(() => handlePaid(req('/idem/scenarios?run=paid-compare-01'), envOf(db)))).json();
  assert.ok(c.statements > FREE_PLATFORM_LIMIT, `Paid /idem/scenarios used ${c.statements} statements in one invocation`);
  assert.ok(paid.results.every((x) => x.pass));
  const report = await runFree(inProcessCall(instrument(qualified(), { lockstep: LOCKSTEP }).db), { n: 30, rounds: 2, leadMs: 60 });
  assert.equal(report.result, 'pass', JSON.stringify(report.checks.filter((x) => x.status !== 'pass')));
  assert.ok(report.max_budget_used <= FREE_QUERY_BUDGET);
  const ids = report.checks.map((x) => x.id);
  for (const id of ['S1_', 'S2_', 'S3_', 'S4_', 'S5_', 'S6_', 'S7a_', 'S7b_', 'R_cross_request_race_', 'RS_cross_request_stale_takeover_race_', 'RF_fan_race_', 'RSF_fan_stale_takeover_race_']) assert.ok(ids.some((x) => x.startsWith(id)), id);
  for (const c of report.checks.filter((x) => /^R(S|F|SF)?_/.test(x.id))) { assert.ok(c.detail.overlapped > 0 && c.detail.late === 0, `${c.id} raced: ${JSON.stringify(c.detail)}`); }
  for (const c of report.checks.filter((x) => /^RS?F_/.test(x.id))) assert.equal(c.detail.claims, FREE_FAN.k * FREE_FAN.m, `${c.id}: every fan claim answered`);
});

test('FREE race rounds that never contend are INCONCLUSIVE, not pass (requests that ran one after another prove nothing)', async () => {
  const report = await runFree(inProcessCall(qualified()), { n: 10, rounds: 1, leadMs: 0 });     // the shim without latency runs each request to completion
  for (const c of report.checks.filter((x) => /^R(S|F|SF)?_/.test(x.id) && !/F_/.test(x.id))) { assert.equal(c.status, 'inconclusive', c.id); assert.equal(c.detail.reason, 'no_contention_observed'); }
  assert.equal(report.result, 'inconclusive');
  const DB = qualified(); await invoke(DB, '/idem/race/prepare?kind=fresh&run=bad-at-00001');
  for (const at of ['abc', String(Date.now() + 60_000), String(Date.now() - 120_000)]) assert.equal((await invoke(DB, `/idem/race/one?run=bad-at-00001&at=${at}`)).body.error, 'invalid_at', at);
  assert.equal((await invoke(DB, '/idem/race/state?run=bad-at-00001', 'GET')).body.record, null, 'a refused start time claims nothing');
});

test('FREE negative controls: the split still DETECTS a non-atomic batch, a missing claim check and a non-CAS takeover (never a false pass)', async () => {
  const stopNoRollback = async (D, s) => { for (const st of s) st._runSync(); return s.map(() => ({ success: true })); };        // stops at the first error, keeps earlier writes
  const continuePast = async (D, s) => { for (const st of s) { try { st._runSync(); } catch {} } return s.map(() => ({ success: true })); };
  const noClaimCheck = (sql) => sql.replace(/EXISTS \(\s*SELECT 1 FROM request_log WHERE attempt_id = \?2 AND request_id = \?3 AND state = 'pending' AND claim_token = \?1\)/, '(?1 = ?1 AND ?2 = ?2 AND ?3 = ?3)');
  const noCAS = (sql) => sql.replace("state = 'pending' AND claim_token = ?5", "state = 'pending' AND ?5 = ?5");   // takeover UPDATE without its token guard
  const cases = [['batch stops without rollback', { batchImpl: stopNoRollback }, ['S4']],
    // the assertion and the precondition still let only one batch commit, so only the takeover count exposes this
    // S5 sees several successful takeovers (a definite violation) before the extra batches overrun the budget: FAIL
    ['takeover is not compare-and-set', { rewrite: noCAS }, ['S5'], { S5: 'fail' }],
    ['batch continues past an error', { batchImpl: continuePast }, ['S2', 'S3', 'S4', 'S6']],
    // S6 is ALSO protected by the probe's transition precondition (state 'open'), so only S2 isolates the claim check
    ['assertion ignores the claim token', { rewrite: noClaimCheck }, ['S2']]];
  for (const [name, mut, mustFail, expectStatus = {}] of cases) {
    const free = {};
    for (const id of FREE_SCENARIOS) {
      const { db } = instrument(qualified(), mut);
      const r = await invoke(db, `/idem/scenario?id=${id}&run=neg-${id.toLowerCase()}-${crypto.randomBytes(3).toString('hex')}`);
      if (expectStatus[id]) assert.equal(r.body.status, expectStatus[id], `${name}: ${id} ${JSON.stringify(r.body)}`);
      else assert.notEqual(r.body.status, 'inconclusive', `${name}: ${id}`);
      if (r.body.status === 'inconclusive') assert.ok(r.body.budget.tripped && r.body.budget.used <= FREE_QUERY_BUDGET, 'inconclusive only via the enforced budget');
      free[id] = r.body.status === 'pass';
    }
    for (const id of mustFail) assert.equal(free[id], false, `${name}: ${id} must not pass on the Free split`);
    // parity: the Paid single-invocation run reaches the same verdict for every scenario under the same mutation
    const { db } = instrument(qualified(), mut);
    const paid = await quiet(() => runScenarios({ DB: db }, `neg-paid-${crypto.randomBytes(3).toString('hex')}`, { n: 20 }));
    const paidBy = Object.fromEntries(paid.map((x) => [x.id.split('_')[0], x.pass]));
    for (const id of ['S1', 'S2', 'S3', 'S4', 'S5', 'S6']) assert.equal(free[id], paidBy[id], `${name}: ${id} Free ${free[id]} vs Paid ${paidBy[id]}`);
    assert.equal(free.S7a && free.S7b, paidBy.S7, `${name}: S7`);
  }
  { // the cross-request races see it too: every STALE round fails (many successful takeovers); fresh rounds are unaffected
    const DB = qualified(); const { db } = instrument(DB, { rewrite: noCAS, lockstep: LOCKSTEP });
    const report = await runFree(inProcessCall(db), { n: 20, rounds: 2, leadMs: 60 });
    assert.equal(report.result, 'fail');
    for (const c of report.checks.filter((x) => /^RS_|^RSF_/.test(x.id))) { assert.equal(c.status, 'fail', c.id); assert.ok(c.detail.takeovers > 1, JSON.stringify(c.detail)); }
    for (const c of report.checks.filter((x) => /^R_|^RF_/.test(x.id))) assert.equal(c.status, 'pass', c.id);
  }
  { // no idempotency at all (claim never written, assertion and precondition always true): DUPLICATE EFFECTS must fail
    // S1 and every fresh round, in the Free split and in the Paid run alike
    const noIdempotency = (sql) => noClaimCheck(sql).replace("(EXISTS (SELECT 1 FROM idem_probe_state WHERE run_id = ?4 AND state = 'open'))", '(?4 = ?4)');
    const mut = { rewrite: noIdempotency, fakeClaim: true, lockstep: LOCKSTEP };
    const s1 = await invoke(instrument(qualified(), mut).db, '/idem/scenario?id=S1&run=noidem-s1-00001');
    assert.equal(s1.body.status, 'fail'); assert.equal(s1.body.detail.violation, 'multiple_executions');
    const paid = await quiet(() => runScenarios({ DB: instrument(qualified(), mut).db }, 'noidem-paid-01', { n: 20, wait: { pollMs: 1, timeoutMs: 200 } }));
    assert.equal(paid.find((x) => x.id.startsWith('S1')).pass, false);
    const DB = qualified(); const report = await runFree(inProcessCall(instrument(DB, mut).db, { wait: { pollMs: 1 } }), { n: 10, rounds: 1, leadMs: 60 });
    for (const c of report.checks.filter((x) => /^R_|^RF_/.test(x.id))) { assert.equal(c.status, 'fail', c.id); assert.ok(c.detail.effects > 1 && c.detail.executed > 1, JSON.stringify(c.detail)); }
  }
  const DB = qualified(); const real = DB.prepare;          // claim insert "succeeds" but writes nothing (as in the PR #71 check)
  const broken = { raw: DB.raw, batch: DB.batch, prepare: (sql) => (sql.includes("'pending', ?5, ?4) ON CONFLICT") ? { bind: () => ({ run: async () => ({ meta: { changes: 1 } }) }) } : real(sql)) };
  for (const id of ['S2', 'S6', 'S7a']) {
    const r = await invoke(broken, `/idem/scenario?id=${id}&run=noclaim-${id.toLowerCase()}-01`, 'POST', { wait: { pollMs: 1, timeoutMs: 5_000 } });
    assert.notEqual(r.body.status, 'pass', id); assert.equal(r.body.detail.error, 'original_never_claimed', `${id}: ${JSON.stringify(r.body)}`);
    assert.ok(r.body.budget.used <= FREE_QUERY_BUDGET);
  }
});

test('FREE inconclusive states: a tripped budget, an exhausted claim-wait budget, or an unanswered race request is never a pass', async () => {
  const DB = qualified();
  const tripped = await invoke(DB, '/idem/scenario?id=S1&run=trip-s1-0001', 'POST', { cap: 20 });
  assert.equal(tripped.body.status, 'inconclusive', JSON.stringify(tripped.body)); assert.ok(tripped.body.budget.tripped);
  const tooSmall = await invoke(DB, '/idem/verify', 'GET', { cap: 5 });
  assert.equal(tooSmall.http, 500); assert.equal(tooSmall.body.status, 'inconclusive');
  const slowClaim = { raw: DB.raw, batch: DB.batch, prepare: (sql) => { const st = DB.prepare(sql); if (!sql.includes("'pending', ?5, ?4) ON CONFLICT")) return st;
    return { bind: (...b) => { const s = st.bind(...b); return { run: async () => { await new Promise((r) => setTimeout(r, 300)); return s.run(); } }; } }; } };
  const exhausted = await invoke(slowClaim, '/idem/scenario?id=S2&run=slowclaim-s2-01', 'POST', { wait: { pollMs: 1 } });
  assert.equal(exhausted.body.status, 'inconclusive', JSON.stringify(exhausted.body)); assert.equal(exhausted.body.detail.reason, 'poll_budget_exhausted');
  assert.ok(exhausted.body.budget.used <= FREE_QUERY_BUDGET);
  const ok = (status, replayed = false, error) => ({ http: 200, body: { ok: true, status, replayed, ...(error ? { error } : {}) } });
  const done = { ok: true, effects: 1, record: { state: 'completed' } };
  assert.equal(judgeRace([ok(200), ok(200, true), ok(503, false, 'request_in_progress')], done).status, 'pass');
  const serial = judgeRace([ok(200), ok(200, true), ok(200, true)], done);
  assert.equal(serial.status, 'inconclusive', 'every loser arrived after the commit: the round never raced'); assert.equal(serial.detail.reason, 'no_contention_observed');
  assert.equal(judgeRace([ok(200), ok(200, true), { http: 503, body: null }], done).status, 'inconclusive', 'an unanswered request');
  assert.equal(judgeRace([ok(200), ok(200), { http: 0, body: null }], { ...done, effects: 2 }).status, 'fail', 'two executions fail even with an unanswered request');
  assert.equal(judgeRace([ok(200), ok(409, false, 'invalid_transition')], done).status, 'fail', 'an unexpected status');
  assert.equal(judgeRace([ok(200, true), ok(503, false, 'request_in_progress')], { ok: true, effects: 0, record: { state: 'pending' } }).status, 'fail', 'no execution');
  assert.equal(judgeRace([ok(200)], { ok: true, effects: 1, record: { state: 'pending' } }).status, 'fail', 'record not completed');
  const took = (r) => ({ ...r, body: { ...r.body, took_over: true } });
  assert.equal(judgeRace([took(ok(200)), ok(503, false, 'request_in_progress')], done, { kind: 'stale' }).status, 'pass', 'stale: one takeover');
  assert.equal(judgeRace([took(ok(200)), ok(200, true)], done, { kind: 'stale' }).status, 'inconclusive', 'stale: no overlap observed');
  assert.equal(judgeRace([ok(200), ok(503, false, 'request_in_progress')], done, { kind: 'stale' }).status, 'fail', 'stale: no takeover observed');
  assert.equal(judgeRace([took(ok(200)), took(ok(200, true))], done, { kind: 'stale' }).status, 'fail', 'stale: two successful takeovers');
  assert.equal(judgeRace([took(ok(200)), took(ok(200, true)), { http: 0, body: null }], done, { kind: 'stale' }).status, 'fail', 'two takeovers fail even with an unanswered request');
  assert.equal(judgeRace([took(ok(200))], done, { kind: 'fresh' }).status, 'fail', 'fresh: any takeover is a fail');
  // fan responses (several claims per invocation)
  const fan = (results, extra = {}) => ({ http: 200, body: { ok: true, results, takeovers: 0, ...extra } });
  const r = (status, replayed = false, error) => ({ status, replayed, ...(error ? { error } : {}) });
  const inProg = r(503, false, 'request_in_progress');
  assert.equal(judgeRace([fan([r(200), inProg]), fan([inProg, r(200, true)])], done).status, 'pass', 'fan: one execution, contention observed');
  assert.equal(judgeRace([fan([r(200), inProg]), fan([r(200), inProg])], { ...done, effects: 2 }).status, 'fail', 'fan: duplicate effects');
  assert.equal(judgeRace([fan([r(200), inProg], { takeovers: 1 }), fan([r(500, false, 'query_budget_exceeded')], { takeovers: 1, inconclusive: true })], done, { kind: 'stale' }).status, 'fail',
    'a budget-tripped invocation still reports its successful takeover: two winners fail');
  assert.equal(judgeRace([fan([r(200), inProg], { takeovers: 1 }), fan([r(500, false, 'query_budget_exceeded')], { inconclusive: true })], done, { kind: 'stale' }).status, 'inconclusive',
    'a budget-tripped invocation with no violation is inconclusive, never pass');
});

test('FREE guard fails closed — each refusal path is refused BEFORE any write on every Free endpoint (tables and row counts unchanged)', async () => {
  const cases = [
    ['exam database, no probe schema', () => { const { env } = makeEnv(); return env.DB; }, {}, 'probe_schema_missing'],
    ['bare database (no migrations)', () => { const DB = createExamD1(); DB.raw.exec('DROP TABLE request_log'); return DB; }, {}, 'migrations_missing'],
    ['probe schema but no marker', () => { const DB = createExamD1(); DB.raw.exec(SCHEMA); return DB; }, {}, 'marker_missing_or_ambiguous'],
    ['two markers', () => { const DB = qualified(); mark(DB, 'nonprod-second-one'); return DB; }, {}, 'marker_missing_or_ambiguous'],
    ['label mismatch', () => qualified(), { IDEM_PROBE_LABEL: 'nonprod-other-label' }, 'label_mismatch'],
    ['wrong nonce secret', () => qualified(), { IDEM_PROBE_DB_NONCE: 'x'.repeat(40) }, 'db_nonce_mismatch'],
    ['label not nonprod-…', () => qualified(), { IDEM_PROBE_LABEL: 'prod' }, 'label_required'],
    ['exam database (wrongly) marked: content present', () => { const { env } = makeEnv(); env.DB.raw.exec(SCHEMA); mark(env.DB); return env.DB; }, {}, 'refusing_database_with_exam_content']
  ];
  const paths = [['/idem/verify', 'GET'], ...FREE_SCENARIOS.map((id) => [`/idem/scenario?id=${id}&run=refuse-${id.toLowerCase()}-01`, 'POST']),
    ['/idem/race/prepare?kind=fresh&run=refuse-race-01', 'POST'], ['/idem/race/prepare?kind=stale&run=refuse-race-02', 'POST'], ['/idem/race/one?run=refuse-race-01', 'POST']];
  for (const [name, make, over, code] of cases) {
    const DB = make(); const before = snapshot(DB);
    for (const [p, m] of paths) {
      const r = await quiet(() => handle(req(p, m), envOf(DB, over))); const body = await r.json();
      assert.equal(r.status, 412, `${name} ${p}: ${JSON.stringify(body)}`); assert.equal(body.error, code, `${name} ${p}`);
    }
    assert.equal(snapshot(DB), before, `${name}: nothing written`);
  }
  const DB = qualified(); const before = snapshot(DB);
  assert.equal((await handle(req('/idem/scenario?id=S1&run=off-s1-0001'), envOf(DB, { IDEM_PROBE: 'off' }))).status, 403);
  assert.equal((await handle(req('/idem/scenario?id=S1&run=off-s1-0001', 'POST', 'wrong'), envOf(DB))).status, 401);
  assert.equal((await invoke(DB, '/idem/scenario?id=S9&run=bad-id-00001')).http, 400);
  assert.equal((await invoke(DB, '/idem/race/prepare?kind=other&run=bad-kind-0001')).http, 400);
  assert.equal(snapshot(DB), before, 'disabled, unauthorised and invalid requests write nothing');
});
