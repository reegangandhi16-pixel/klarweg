/* V10 probe — LOCAL SELF-CHECK of the probe's own logic on in-process SQLite (node:sqlite, BEGIN/COMMIT/ROLLBACK).
   This is NOT V10 evidence: V10 requires the probe deployed against a separate, operator-qualified, non-production D1
   database (exam-worker/verification/v10-probe/README.md). Covers the scenarios, the fail-closed database
   qualification (every refusal path writes nothing) and the ambiguous-result runner's verdict logic. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import { verifyProbeDatabase, runScenarios, prepareClaim, claim, readState, ledgerApplied } from '../verification/v10-probe/probe.mjs';
import { handle } from '../verification/v10-probe/worker.mjs';
import { runAmbiguous } from '../verification/v10-probe/run-v10-ambiguous.mjs';
import { createExamD1, WORKER_DIR } from './harness.mjs';

const SCHEMA = fs.readFileSync(path.join(WORKER_DIR, 'verification/v10-probe/probe-schema.sql'), 'utf8');
const LABEL = 'nonprod-v10-local', NONCE = 'n'.repeat(16) + crypto.randomBytes(16).toString('hex'), TOKEN = 't'.repeat(40);
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');

/* Minimal D1-shaped wrapper; batch is all-or-nothing on a failing statement, like the documented D1 semantics. */
function localD1(mode = 'atomic') {
  const db = new DatabaseSync(':memory:');
  const stmt = (sql, params = []) => ({
    bind: (...p) => stmt(sql, p),
    first: async () => { const r = db.prepare(sql).get(...params); return r === undefined ? null : { ...r }; },
    all: async () => ({ results: db.prepare(sql).all(...params).map((r) => ({ ...r })) }),
    run: async () => { const i = db.prepare(sql).run(...params); return { meta: { changes: Number(i.changes) } }; },
    _sync: () => db.prepare(sql).run(...params)
  });
  return {
    raw: db,
    prepare: (sql) => stmt(sql),
    async batch(stmts) {
      if (mode === 'stop-no-rollback') { for (const s of stmts) s._sync(); return; }
      if (mode === 'continue-past-error') { let err; for (const s of stmts) { try { s._sync(); } catch (e) { err = err || e; } } if (err) throw err; return; }
      db.exec('BEGIN'); try { for (const s of stmts) s._sync(); db.exec('COMMIT'); } catch (e) { db.exec('ROLLBACK'); throw e; }
    }
  };
}
const mark = (db, label = LABEL, nonce = NONCE) => db.raw.prepare('INSERT INTO v10_probe_marker (label, nonce_sha256, created_at) VALUES (?, ?, 0)').run(label, sha(nonce));
/* What the operator's out-of-band provisioning produces: schema + exactly one marker. */
function qualified(mode) { const db = localD1(mode); db.raw.exec(SCHEMA); mark(db); return db; }
const snapshot = (db) => db.raw.prepare("SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name").all()
  .map(({ name }) => `${name}:${db.raw.prepare(`SELECT COUNT(*) AS n FROM "${name}"`).get().n}`).join(',');
const envOf = (DB, over = {}) => ({ DB, V10_PROBE: 'on', V10_PROBE_TOKEN: TOKEN, V10_PROBE_LABEL: LABEL, V10_PROBE_DB_NONCE: NONCE, ...over });
const req = (p, method = 'POST', token = TOKEN) => new Request('https://probe.example' + p, { method, headers: { 'x-v10-token': token } });

/* ---------- scenarios (unchanged logic, now on an operator-qualified database) ---------- */
test('V10 probe (local self-check, not evidence): scenarios A–D report pass on a transactional batch', async () => {
  const db = qualified();
  const results = await runScenarios(db, 'local-run-0001');
  assert.deepEqual(results.map((r) => r.id), ['A_false_assertion_rolls_back_batch', 'B_ledger_replay_applies_once',
    'C_late_constraint_rolls_back_earlier_statements', 'D_zero_row_guard_does_not_roll_back']);
  for (const r of results) assert.equal(r.pass, true, `${r.id}: ${JSON.stringify(r.detail)}`);
});

test('V10 probe (local self-check, not evidence): a claim applies once — same op key and distinct op keys', async () => {
  const db = qualified();
  for (const distinct of [false, true]) {
    const run = distinct ? 'local-claim-dist' : 'local-claim-same';
    await prepareClaim(db, run);
    const results = await Promise.all(Array.from({ length: 10 }, (_, i) => claim(db, run, distinct ? `commit:${run}:${i}` : `commit:${run}`)));
    assert.equal(results.filter((r) => r.applied).length, 1);
    assert.deepEqual(await readState(db, run), { state: 'committed', ledger_rows: 1, claim_rows: 1 });
    assert.equal(await ledgerApplied(db, distinct ? `commit:${run}:0` : `commit:${run}`), true);
  }
});

test('V10 probe (local self-check, not evidence): negative controls — a non-atomic batch is reported as FAIL', async () => {
  const verdicts = async (mode) => Object.fromEntries((await runScenarios(qualified(mode), 'local-neg-0001')).map((r) => [r.id[0], r.pass]));
  assert.equal((await verdicts('stop-no-rollback')).C, false);
  assert.deepEqual(await verdicts('continue-past-error'), { A: false, B: false, C: false, D: true });
});

/* ---------- fail-closed qualification ---------- */
test('V10 qualification: a properly qualified database verifies; /v10/verify answers verified without writing', async () => {
  const db = qualified();
  assert.deepEqual(await verifyProbeDatabase(db, { label: LABEL, nonce: NONCE }), { ok: true, label: LABEL });
  const before = snapshot(db);
  const r = await handle(req('/v10/verify', 'GET'), envOf(db));
  assert.equal(r.status, 200); assert.deepEqual(await r.json(), { ok: true, verified: true, label: LABEL });
  assert.equal(snapshot(db), before);
});

test('V10 qualification fails closed — every protected endpoint refuses BEFORE any write, for every refusal path', async () => {
  const unrelated = () => { const db = localD1(); db.raw.exec("CREATE TABLE users (id TEXT PRIMARY KEY, email TEXT); INSERT INTO users VALUES ('u1', 'x@example.invalid')"); return db; };
  const cases = [
    ['non-production but unqualified database (unrelated tables, no probe schema)', unrelated, {}, 'probe_schema_missing'],
    ['empty database (no schema)', () => localD1(), {}, 'probe_schema_missing'],
    ['probe schema without marker (zero markers)', () => { const db = localD1(); db.raw.exec(SCHEMA); return db; }, {}, 'marker_missing_or_ambiguous'],
    ['multiple markers', () => { const db = qualified(); mark(db, 'nonprod-v10-second'); return db; }, {}, 'marker_missing_or_ambiguous'],
    ['wrong label', () => qualified(), { V10_PROBE_LABEL: 'nonprod-v10-other' }, 'label_mismatch'],
    ['wrong nonce', () => qualified(), { V10_PROBE_DB_NONCE: 'x'.repeat(40) }, 'db_nonce_mismatch'],
    ['nonce secret missing', () => qualified(), { V10_PROBE_DB_NONCE: undefined }, 'db_nonce_required'],
    ['label variable missing', () => qualified(), { V10_PROBE_LABEL: undefined }, 'label_required'],
    ['label not nonprod-…', () => qualified(), { V10_PROBE_LABEL: 'prod-v10' }, 'label_required'],
    ['exam database (migration 0001)', () => createExamD1(), {}, 'refusing_exam_database'],
    ['exam database even if the probe schema and a marker were added', () => { const db = createExamD1(); db.raw.exec(SCHEMA); mark(db); return db; }, {}, 'refusing_exam_database']
  ];
  const routes = [['/v10/verify', 'GET'], ['/v10/scenarios?run=local-refuse-01', 'POST'], ['/v10/prepare-claim?run=local-refuse-02', 'POST'],
    ['/v10/claim?run=local-refuse-02&op=commit:x', 'POST'], ['/v10/state?run=local-refuse-02', 'GET'], ['/v10/ledger?run=local-refuse-02&op=commit:x', 'GET'], ['/v10/setup', 'POST']];
  for (const [name, make, over, code] of cases) {
    const db = make();
    const before = snapshot(db);
    for (const [p, m] of routes) {
      const r = await handle(req(p, m), envOf(db, over));
      const body = await r.json();
      assert.equal(r.status, 412, `${name} ${m} ${p}: ${JSON.stringify(body)}`);
      assert.equal(body.error, code, `${name} ${m} ${p}`);
      assert.equal(JSON.stringify(body).includes(NONCE) || JSON.stringify(body).includes(TOKEN), false, 'no secret in the response');
    }
    assert.equal(snapshot(db), before, `${name}: no table created, no row written`);
  }
});

test('V10 qualification: disabled or unauthorised requests are refused before the database is touched; there is no setup route', async () => {
  const db = qualified(); const before = snapshot(db);
  assert.equal((await handle(req('/v10/prepare-claim?run=local-off-0001'), envOf(db, { V10_PROBE: 'off' }))).status, 403);
  assert.equal((await handle(req('/v10/prepare-claim?run=local-off-0001', 'POST', 'wrong'), envOf(db))).status, 401);
  assert.equal((await handle(req('/v10/setup?run=local-off-0001'), envOf(db))).status, 404, 'no setup endpoint on a qualified database either');
  assert.equal(snapshot(db), before);
  assert.throws(() => mark(db, 'production-v10'), /CHECK/, 'the marker table refuses a non-nonprod label');
});

test('V10 qualification: the marker hash comparison ignores hex letter case only', async () => {
  const db = localD1(); db.raw.exec(SCHEMA);
  db.raw.prepare('INSERT INTO v10_probe_marker (label, nonce_sha256, created_at) VALUES (?, ?, 0)').run(LABEL, sha(NONCE).toUpperCase());
  assert.deepEqual(await verifyProbeDatabase(db, { label: LABEL, nonce: NONCE }), { ok: true, label: LABEL });
  await assert.rejects(() => verifyProbeDatabase(db, { label: LABEL, nonce: NONCE + 'x' }), (e) => e.code === 'db_nonce_mismatch');
});

/* ---------- ambiguous-result runner (local transport; the server keeps working after a client abort) ---------- */
const BASE = 'https://probe.example';
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
/* delays(n, path) → server-side delay before handling the n-th claim of a run (n = 1 original, 2 retry). */
function serverFetch(env, delays, tamper = (p, b) => b) {
  const claims = new Map();
  return async (url, init) => {
    const p = url.slice(BASE.length);
    const run = new URL(url).searchParams.get('run');
    let d = 0;
    if (p.startsWith('/v10/claim')) { const n = (claims.get(run) || 0) + 1; claims.set(run, n); d = delays(n); }
    const work = (async () => { await wait(d); const r = await handle(new Request(url, { method: init.method, headers: init.headers }), env);
      const body = tamper(p, await r.json()); return new Response(JSON.stringify(body), { status: r.status }); })();
    if (!init.signal) return work;
    return new Promise((resolve, reject) => {
      const onAbort = () => reject(Object.assign(new Error('aborted'), { name: 'AbortError' }));   // the client gives up; the server does not
      if (init.signal.aborted) return onAbort();
      init.signal.addEventListener('abort', onAbort, { once: true });
      work.then(resolve, reject);
    });
  };
}

test('AMBIGUOUS runner: observes "aborted original had applied" (original finishes before the retry) → verdict pass, invariant holds', async () => {
  const env = envOf(qualified());
  const report = await runAmbiguous({ base: BASE, token: TOKEN, fetchImpl: serverFetch(env, (n) => (n === 1 ? 5 : 40)), intervals: [1], trials: 3 });
  assert.equal(report.verdict, 'pass', JSON.stringify(report.failures));
  assert.equal(report.branches.aborted_original_applied, 3);
  for (const t of report.results) assert.deepEqual(t.state, { ok: true, state: 'committed', ledger_rows: 1, claim_rows: 1 });
});

test('AMBIGUOUS runner: when the retry overtakes a slow aborted original, the retry applies and the original cannot — invariant holds, but without the key branch the verdict is INCONCLUSIVE', async () => {
  const env = envOf(qualified());
  const report = await runAmbiguous({ base: BASE, token: TOKEN, fetchImpl: serverFetch(env, (n) => (n === 1 ? 60 : 0)), intervals: [5], trials: 3 });
  await wait(100);                                                                       // let the slow originals finish (they must fail)
  assert.equal(report.branches.aborted_original_not_applied, 3);
  assert.equal(report.failures.length, 0);
  assert.equal(report.verdict, 'inconclusive');
  for (const t of report.results) assert.deepEqual(await readState(env.DB, t.run), { state: 'committed', ledger_rows: 1, claim_rows: 1 }, 'still exactly one after the late original');
});

test('AMBIGUOUS runner: intervals too long to abort anything → all "responded", verdict INCONCLUSIVE (never claimed as validated)', async () => {
  const env = envOf(qualified());
  const report = await runAmbiguous({ base: BASE, token: TOKEN, fetchImpl: serverFetch(env, () => 0), intervals: [500], trials: 2 });
  assert.deepEqual(report.branches, { aborted_original_applied: 0, aborted_original_not_applied: 0, responded: 2 });
  assert.equal(report.verdict, 'inconclusive');
});

test('AMBIGUOUS runner: an invariant violation (e.g. two applications) is a FAIL even if the key branch was observed', async () => {
  const env = envOf(qualified());
  const tamper = (p, b) => (p.startsWith('/v10/state') ? { ...b, ledger_rows: 2 } : b);
  const report = await runAmbiguous({ base: BASE, token: TOKEN, fetchImpl: serverFetch(env, (n) => (n === 1 ? 5 : 40), tamper), intervals: [1], trials: 1 });
  assert.equal(report.verdict, 'fail');
  assert.equal(report.failures[0].step, 'invariant');
});

test('AMBIGUOUS runner: an unqualified database fails at verify and the runner writes nothing', async () => {
  const db = localD1(); db.raw.exec(SCHEMA);                                             // schema but no marker
  const before = snapshot(db);
  const report = await runAmbiguous({ base: BASE, token: TOKEN, fetchImpl: serverFetch(envOf(db), () => 0), intervals: [1], trials: 2 });
  assert.equal(report.verdict, 'fail'); assert.deepEqual(report.failures, [{ step: 'verify', status: 412, error: 'marker_missing_or_ambiguous' }]);
  assert.equal(report.trials_run, 0);
  assert.equal(snapshot(db), before);
});

/* ---------- fault injection: post-commit response delay (test tooling only) ---------- */
const FI = (over = {}) => ({ V10_FAULT_INJECTION: 'on', ...over });

test('FAULT INJECTION: the delay is applied only AFTER the claim committed — the state is committed while the response is still held', async () => {
  const db = qualified(); const env = envOf(db, FI());
  await prepareClaim(db, 'fi-commit-0001');
  const t0 = Date.now();
  let settled = false;
  const pending = handle(req('/v10/claim?run=fi-commit-0001&op=commit:fi&post_commit_delay_ms=120'), env).then((r) => { settled = true; return r; });
  await wait(40);
  assert.equal(settled, false, 'response still held');
  assert.deepEqual(await readState(db, 'fi-commit-0001'), { state: 'committed', ledger_rows: 1, claim_rows: 1 }, 'already committed before the answer');
  const r = await pending;
  assert.ok(Date.now() - t0 >= 110, 'response came after the delay');
  assert.deepEqual(await r.json(), { ok: true, applied: true, error: null });
});

test('FAULT INJECTION: refused unless enabled, refused when out of bounds — validated BEFORE the claim (nothing written)', async () => {
  for (const [over, raw, code] of [[{}, '50', 'fault_injection_disabled'], [FI({ V10_FAULT_INJECTION: 'off' }), '50', 'fault_injection_disabled'],
    [FI(), '0', 'invalid_delay'], [FI(), '5001', 'invalid_delay'], [FI(), '-1', 'invalid_delay'], [FI(), '1.5', 'invalid_delay'], [FI(), 'abc', 'invalid_delay'], [FI(), '', 'invalid_delay']]) {
    const db = qualified(); await prepareClaim(db, 'fi-refuse-0001');
    const before = snapshot(db);
    const r = await handle(req(`/v10/claim?run=fi-refuse-0001&op=commit:fi&post_commit_delay_ms=${raw}`), envOf(db, over));
    assert.equal(r.status, 400, `${JSON.stringify(over)} ${raw}`); assert.equal((await r.json()).error, code);
    assert.equal(snapshot(db), before, 'nothing written');
    assert.deepEqual(await readState(db, 'fi-refuse-0001'), { state: 'reserved', ledger_rows: 0, claim_rows: 0 });
  }
});

test('FAULT INJECTION: absent → no delay and normal behaviour; a claim that did NOT apply is never delayed; an unqualified database is refused first', async () => {
  const db = qualified(); const env = envOf(db, FI());
  await prepareClaim(db, 'fi-normal-0001');
  let t0 = Date.now();
  assert.deepEqual(await (await handle(req('/v10/claim?run=fi-normal-0001&op=commit:n'), env)).json(), { ok: true, applied: true, error: null });
  assert.ok(Date.now() - t0 < 100);
  t0 = Date.now();
  const again = await (await handle(req('/v10/claim?run=fi-normal-0001&op=commit:n&post_commit_delay_ms=3000'), env)).json();
  assert.equal(again.applied, false); assert.ok(Date.now() - t0 < 1000, 'not applied → not delayed');
  const bare = localD1(); bare.raw.exec(SCHEMA);                                             // no marker
  const r = await handle(req('/v10/claim?run=fi-normal-0002&op=commit:n&post_commit_delay_ms=50'), envOf(bare, FI()));
  assert.equal(r.status, 412);
});

test('AMBIGUOUS runner (forced post-commit delay): the client aborts after the commit and before the answer → every trial is "aborted_original_applied", verdict pass', async () => {
  const env = envOf(qualified(), FI());
  const report = await runAmbiguous({ base: BASE, token: TOKEN, fetchImpl: serverFetch(env, () => 0), trials: 3, postCommitDelayMs: 200, abortAfterMs: 50 });
  assert.equal(report.mode, 'forced_post_commit_delay');
  assert.equal(report.verdict, 'pass', JSON.stringify(report.failures));
  assert.equal(report.branches.aborted_original_applied, 3);
  for (const t of report.results) {
    assert.equal(t.retry.applied, false, 'the retry detected that the original had applied');
    assert.deepEqual(t.state, { ok: true, state: 'committed', ledger_rows: 1, claim_rows: 1 });
    assert.equal(t.ledger_applied, true);
  }
});

test('AMBIGUOUS runner (forced): refuses an impossible configuration before any request; with fault injection off the run FAILS (never passes)', async () => {
  let calls = 0;
  const counting = (url, init) => { calls++; return fetch(url, init); };
  for (const [d, a] of [[200, 200], [200, 300], [0, 0], [6000, 10], [200, -1]]) {
    await assert.rejects(() => runAmbiguous({ base: BASE, token: TOKEN, fetchImpl: counting, trials: 1, postCommitDelayMs: d, abortAfterMs: a }), /invalid_config/);
  }
  assert.equal(calls, 0);
  const env = envOf(qualified());                                                            // V10_FAULT_INJECTION not set
  const report = await runAmbiguous({ base: BASE, token: TOKEN, fetchImpl: serverFetch(env, () => 0), trials: 1, postCommitDelayMs: 200, abortAfterMs: 50 });
  assert.equal(report.verdict, 'fail');
  assert.match(report.failures[0].hint, /fault injection off/);
});
