/* Idempotency-claim D1 probe — LOCAL SELF-CHECK of the probe's logic on the in-memory shim. NOT D1 evidence.
   Covers: fail-closed database qualification (every refusal path makes zero writes), claim waits that observe the
   pending claim instead of sleeping, and that a missing claim fails clearly and never passes. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { createExamD1, makeEnv, WORKER_DIR } from './harness.mjs';
import { verifyProbeDatabase, waitForPendingClaim, runScenarios } from '../verification/idempotency-d1/probe.mjs';
import { handle } from '../verification/idempotency-d1/worker.mjs';

const SCHEMA = fs.readFileSync(path.join(WORKER_DIR, 'verification/idempotency-d1/probe-schema.sql'), 'utf8');
const LABEL = 'nonprod-local-check', NONCE = 'n'.repeat(16) + crypto.randomBytes(16).toString('hex'), TOKEN = 't'.repeat(40);
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');
const mark = (DB, label = LABEL, nonce = NONCE) => DB.raw.prepare('INSERT INTO idem_probe_marker (label, nonce_sha256, created_at) VALUES (?, ?, 0)').run(label, sha(nonce));
function qualified() { const DB = createExamD1(); DB.raw.exec(SCHEMA); mark(DB); return DB; }
const snapshot = (DB) => DB.raw.prepare("SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name").all()
  .map(({ name }) => `${name}:${DB.raw.prepare(`SELECT COUNT(*) AS n FROM "${name}"`).get().n}`).join(',');
const envOf = (DB, over = {}) => ({ DB, IDEM_PROBE: 'on', IDEM_PROBE_TOKEN: TOKEN, IDEM_PROBE_LABEL: LABEL, IDEM_PROBE_DB_NONCE: NONCE, ...over });
const req = (p, method = 'POST', token = TOKEN) => new Request('https://probe.example' + p, { method, headers: { 'x-idem-token': token } });

test('IDEM PROBE (local, not evidence): a qualified probe database verifies and S1–S7 pass', async () => {
  const DB = qualified();
  assert.deepEqual(await verifyProbeDatabase(DB, { label: LABEL, nonce: NONCE }), { ok: true, label: LABEL });
  const r = await handle(req('/idem/verify', 'GET'), envOf(DB));
  assert.equal(r.status, 200);
  const results = await runScenarios({ DB }, 'local-check-0001', { n: 8 });
  for (const x of results) assert.equal(x.pass, true, `${x.id}: ${JSON.stringify(x.detail)}`);
  assert.equal(results.length, 7);
});

test('IDEM PROBE guard fails closed — each refusal path is refused BEFORE any write (all tables and row counts unchanged)', async () => {
  const cases = [
    ['exam database (release loaded, attempts empty), no probe schema', () => { const { env } = makeEnv(); return env.DB; }, {}, 'probe_schema_missing'],
    ['bare database (no migrations)', () => { const DB = createExamD1(); DB.raw.exec('DROP TABLE request_log'); return DB; }, {}, 'migrations_missing'],
    ['probe schema but no marker', () => { const DB = createExamD1(); DB.raw.exec(SCHEMA); return DB; }, {}, 'marker_missing_or_ambiguous'],
    ['two markers', () => { const DB = qualified(); mark(DB, 'nonprod-second-one'); return DB; }, {}, 'marker_missing_or_ambiguous'],
    ['label mismatch', () => qualified(), { IDEM_PROBE_LABEL: 'nonprod-other-label' }, 'label_mismatch'],
    ['wrong nonce secret', () => qualified(), { IDEM_PROBE_DB_NONCE: 'x'.repeat(40) }, 'db_nonce_mismatch'],
    ['nonce secret missing', () => qualified(), { IDEM_PROBE_DB_NONCE: undefined }, 'db_nonce_required'],
    ['label not nonprod-…', () => qualified(), { IDEM_PROBE_LABEL: 'prod' }, 'label_required'],
    ['exam database that was (wrongly) marked: content present', () => { const { env } = makeEnv(); env.DB.raw.exec(SCHEMA); mark(env.DB); return env.DB; }, {}, 'refusing_database_with_exam_content']
  ];
  for (const [name, make, over, code] of cases) {
    const DB = make();
    const before = snapshot(DB);
    for (const [p, m] of [['/idem/verify', 'GET'], ['/idem/scenarios?run=local-refuse-0001', 'POST'], ['/idem/race/prepare?run=local-refuse-0002', 'POST'], ['/idem/race/one?run=local-refuse-0002', 'POST']]) {
      const r = await handle(req(p, m), envOf(DB, over));
      const body = await r.json();
      assert.equal(r.status, 412, `${name} ${p}: ${JSON.stringify(body)}`);
      assert.equal(body.error, code, `${name} ${p}`);
    }
    assert.equal(snapshot(DB), before, `${name}: no table created, no row written`);
  }
});

test('IDEM PROBE: disabled or unauthorised requests are refused before the database is touched; the schema refuses a non-nonprod marker', async () => {
  const DB = qualified(); const before = snapshot(DB);
  assert.equal((await handle(req('/idem/scenarios?run=local-off-0001'), envOf(DB, { IDEM_PROBE: 'off' }))).status, 403);
  assert.equal((await handle(req('/idem/scenarios?run=local-off-0001', 'POST', 'wrong'), envOf(DB))).status, 401);
  assert.equal(snapshot(DB), before);
  assert.throws(() => mark(DB, 'production-db'), /CHECK/);
});

test('IDEM PROBE claim wait: observes the pending claim; times out with a clear error when it never appears (deterministic fake clock)', async () => {
  const DB = qualified();
  let t = 0; const opts = { pollMs: 10, timeoutMs: 100, sleep: async (ms) => { t += ms; }, clock: () => t };
  assert.deepEqual(await waitForPendingClaim(DB, 'att_probe_x', 'rq_never', opts), { error: 'original_never_claimed', waited_ms: 100 });
  DB.raw.prepare("INSERT INTO request_log (attempt_id, request_id, route, status, response_json, created_at, state, claim_token, claimed_at) VALUES ('att_probe_x', 'rq_seen', 'probe:op', 0, '{}', 0, 'pending', 'clm_abc', 0)").run();
  assert.deepEqual(await waitForPendingClaim(DB, 'att_probe_x', 'rq_seen', opts), { token: 'clm_abc' });
  DB.raw.prepare("UPDATE request_log SET state = 'completed', claim_token = NULL WHERE request_id = 'rq_seen'").run();
  assert.equal((await waitForPendingClaim(DB, 'att_probe_x', 'rq_seen', opts)).error, 'original_never_claimed', 'a completed record is not a pending claim');
});

test('IDEM PROBE: when the original never actually claims, S2, S6 and S7 FAIL with original_never_claimed — never a false pass', async () => {
  const DB = qualified();
  const real = DB.prepare;
  const broken = { ...DB, prepare: (sql) => (sql.includes("'pending', ?5, ?4) ON CONFLICT")                  // the claim insert "succeeds" but writes nothing
    ? { bind: () => ({ run: async () => ({ meta: { changes: 1 } }) }) } : real(sql)) };
  const results = await runScenarios({ DB: broken }, 'local-noclaim-01', { n: 3, wait: { pollMs: 5, timeoutMs: 150 } });
  for (const id of ['S2', 'S6', 'S7']) {
    const r = results.find((x) => x.id.startsWith(id));
    assert.equal(r.pass, false, id); assert.equal(r.detail.error, 'original_never_claimed', `${id}: ${JSON.stringify(r.detail)}`);
  }
});

test('IDEM PROBE (local, not evidence): results stay deterministic under random 0–150 ms latency per database call (3 trials)', async () => {
  for (let i = 0; i < 3; i++) {
    const DB = qualified();
    const delay = () => new Promise((r) => setTimeout(r, Math.random() * 150));
    const wrap = (st) => ({ _runSync: () => st._runSync(), bind: (...b) => wrap(st.bind(...b)),
      first: async (c) => { await delay(); return st.first(c); }, all: async () => { await delay(); return st.all(); }, run: async () => { await delay(); return st.run(); } });
    const slow = { prepare: (sql) => wrap(DB.prepare(sql)), batch: async (s) => { await delay(); return DB.batch(s); } };
    for (const x of await runScenarios({ DB: slow }, `local-jit${i}-01`, { n: 5 })) assert.equal(x.pass, true, `trial ${i} ${x.id}: ${JSON.stringify(x.detail)}`);
  }
});

test('IDEM PROBE: the marker hash comparison ignores hex letter case only (an uppercase hash of the right nonce passes; a wrong nonce never does)', async () => {
  const DB = createExamD1(); DB.raw.exec(SCHEMA);
  DB.raw.prepare('INSERT INTO idem_probe_marker (label, nonce_sha256, created_at) VALUES (?, ?, 0)').run(LABEL, sha(NONCE).toUpperCase());
  assert.deepEqual(await verifyProbeDatabase(DB, { label: LABEL, nonce: NONCE }), { ok: true, label: LABEL });
  await assert.rejects(() => verifyProbeDatabase(DB, { label: LABEL, nonce: NONCE + 'x' }), (e) => e.code === 'db_nonce_mismatch');
});
