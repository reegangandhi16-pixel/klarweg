/* LOCAL-ONLY tests of the runbook tooling against the PINNED probe code, on in-process SQLite. NOT D1 evidence.
   Run: IDEM_PIN_DIR=<checkout at PR #73 c8f2b79> V10_PIN_DIR=<checkout at PR #72 a34aca0> node --test test/*.test.mjs */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { PINS, TRACKS, checkBaseUrl, isEmptyDatabase } from '../tools/tracks.mjs';
import { prepareSecrets } from '../tools/prepare-probe-secrets.mjs';
import { runnerEnv } from '../tools/with-probe-env.mjs';
import { qualify } from '../tools/qualify-check.mjs';
import { gate } from '../tools/config-gate.mjs';
import { runIdemAbort } from '../tools/run-idem-abort.mjs';
import { lintRunbook, lintRepo } from '../tools/runbook-lint.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const TOOLS = path.join(HERE, '..', 'tools');
const RUNBOOK = fs.readFileSync(path.join(HERE, '..', 'NONPROD-D1-VALIDATION-RUNBOOK.md'), 'utf8');
const IDEM = process.env.IDEM_PIN_DIR, V10 = process.env.V10_PIN_DIR;
const headOf = (d) => execFileSync('git', ['-C', d, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();

test('pinned checkouts are present and exactly at the runbook pins (otherwise nothing below is meaningful)', () => {
  assert.ok(IDEM && V10, 'set IDEM_PIN_DIR and V10_PIN_DIR');
  assert.equal(headOf(IDEM), PINS.idemTooling); assert.equal(headOf(V10), PINS.v10);
});

const idemMod = () => import(path.join(IDEM, 'exam-worker/verification/idempotency-d1/worker-free.mjs'));
const harness = () => import(path.join(IDEM, 'exam-worker/test/harness.mjs'));
const v10Mod = () => import(path.join(V10, 'exam-worker/verification/v10-probe/worker.mjs'));
const quiet = async (fn) => { const l = console.log; console.log = () => {}; try { return await fn(); } finally { console.log = l; } };
const privateDir = () => { const d = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-d1-rb-')); fs.chmodSync(d, 0o700); return d; };
const readSecrets = (track, dir) => { const s = JSON.parse(fs.readFileSync(path.join(dir, 'secrets.json'), 'utf8')); return { token: s[TRACKS[track].tokenSecret], nonce: s[TRACKS[track].nonceSecret] }; };

/* A minimal D1-shaped wrapper over node:sqlite (same contract as the pinned harness) for the V10 track. */
async function v10Db() {
  const { DatabaseSync } = await import('node:sqlite');
  const raw = new DatabaseSync(':memory:'); raw.exec(fs.readFileSync(path.join(V10, 'exam-worker/verification/v10-probe/probe-schema.sql'), 'utf8'));
  const S = (sql, p = []) => ({ bind: (...b) => S(sql, b), _runSync: () => raw.prepare(sql).run(...p),
    first: async () => { const r = raw.prepare(sql).get(...p); return r === undefined ? null : { ...r }; },
    all: async () => ({ results: raw.prepare(sql).all(...p).map((r) => ({ ...r })) }),
    run: async () => { const i = raw.prepare(sql).run(...p); return { meta: { changes: Number(i.changes) } }; } });
  return { raw, prepare: (sql) => S(sql), batch: async (st) => { raw.exec('BEGIN'); try { st.forEach((s) => s._runSync()); raw.exec('COMMIT'); } catch (e) { raw.exec('ROLLBACK'); throw e; } return []; } };
}
async function idemDb() { const { createExamD1 } = await harness(); const DB = createExamD1(); DB.raw.exec(fs.readFileSync(path.join(IDEM, 'exam-worker/verification/idempotency-d1/probe-schema.sql'), 'utf8')); return DB; }
const counts = (DB, tables) => tables.map((t) => `${t}:${DB.raw.prepare(`SELECT COUNT(*) AS n FROM "${t}"`).get().n}`).join(',');
const fetchVia = (handle, env) => async (url, init = {}) => quiet(() => handle(new Request(url, init), env));
const BASE = { idem: 'https://klarweg-exam-idem-probe-free.example-sub.workers.dev', v10: 'https://klarweg-exam-v10-probe.example-sub.workers.dev' };

test('prepare-probe-secrets: refuses unsafe directories, never overwrites, writes 0600, prints no secret', () => {
  assert.throws(() => prepareSecrets({ track: 'idem', dir: path.join(os.tmpdir(), 'kw-nope-' + Date.now()) }), /existing directory/);
  const open = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-open-')); fs.chmodSync(open, 0o755);
  assert.throws(() => prepareSecrets({ track: 'idem', dir: open }), /private/);
  const inRepo = path.join(HERE, '..', 'tmp-secrets-test'); fs.mkdirSync(inRepo, { mode: 0o700 });
  try { assert.throws(() => prepareSecrets({ track: 'idem', dir: inRepo }), /git work tree/); } finally { fs.rmSync(inRepo, { recursive: true }); }
  const dir = privateDir();
  const out = spawnSync(process.execPath, [path.join(TOOLS, 'prepare-probe-secrets.mjs'), '--track', 'v10', '--dir', dir], { encoding: 'utf8' });
  assert.equal(out.status, 0, out.stderr);
  const { token, nonce } = readSecrets('v10', dir);
  assert.match(token, /^[0-9a-f]{64}$/); assert.match(nonce, /^[0-9a-f]{64}$/); assert.notEqual(token, nonce);
  assert.ok(!out.stdout.includes(token) && !out.stdout.includes(nonce) && !out.stderr.includes(token) && !out.stderr.includes(nonce), 'no secret printed');
  for (const f of ['secrets.json', 'marker.sql']) assert.equal(fs.statSync(path.join(dir, f)).mode & 0o777, 0o600, f);
  assert.equal(JSON.parse(out.stdout).nonce_sha256, crypto.createHash('sha256').update(nonce).digest('hex'));
  assert.throws(() => prepareSecrets({ track: 'v10', dir }), /already exists/);
});

test('generated marker + secrets qualify the REAL pinned probes; a newline-altered nonce fails closed (db_nonce_mismatch)', async () => {
  for (const track of ['idem', 'v10']) {
    const dir = privateDir(); prepareSecrets({ track, dir }); const { token, nonce } = readSecrets(track, dir);
    const DB = track === 'idem' ? await idemDb() : await v10Db();
    DB.raw.exec(fs.readFileSync(path.join(dir, 'marker.sql'), 'utf8'));
    const { handle } = track === 'idem' ? await idemMod() : await v10Mod();
    const env = (n) => (track === 'idem' ? { DB, IDEM_PROBE: 'on', IDEM_PROBE_TOKEN: token, IDEM_PROBE_LABEL: TRACKS.idem.label, IDEM_PROBE_DB_NONCE: n }
      : { DB, V10_PROBE: 'on', V10_PROBE_TOKEN: token, V10_PROBE_LABEL: TRACKS.v10.label, V10_PROBE_DB_NONCE: n, V10_FAULT_INJECTION: 'off' });
    const ok = await qualify({ track, base: BASE[track], token, expect: 'verified', fetchImpl: fetchVia(handle, env(nonce)) });
    assert.equal(ok.pass, true, `${track}: ${JSON.stringify(ok.checks)}`);
    const nl = await qualify({ track, base: BASE[track], token, expect: 'verified', fetchImpl: fetchVia(handle, env(nonce + '\n')) });
    assert.equal(nl.pass, false); assert.equal(nl.checks[0].status, 412); assert.equal(nl.checks[0].error, 'db_nonce_mismatch');
  }
});

test('qualify-check reproduces the runbook stages (T7 a–c) on the REAL pinned probes, and the refused requests write nothing', async () => {
  for (const track of ['idem', 'v10']) {
    const dir = privateDir(); prepareSecrets({ track, dir }); const { token, nonce } = readSecrets(track, dir);
    const DB = track === 'idem' ? await idemDb() : await v10Db();
    const { handle } = track === 'idem' ? await idemMod() : await v10Mod();
    const env = (on) => (track === 'idem' ? { DB, IDEM_PROBE: on, IDEM_PROBE_TOKEN: token, IDEM_PROBE_LABEL: TRACKS.idem.label, IDEM_PROBE_DB_NONCE: nonce }
      : { DB, V10_PROBE: on, V10_PROBE_TOKEN: token, V10_PROBE_LABEL: TRACKS.v10.label, V10_PROBE_DB_NONCE: nonce, V10_FAULT_INJECTION: 'off' });
    const before = counts(DB, TRACKS[track].probeTables);
    const off = await qualify({ track, base: BASE[track], token, expect: 'disabled', fetchImpl: fetchVia(handle, env('off')) });
    assert.equal(off.pass, true, JSON.stringify(off.checks));
    const nm = await qualify({ track, base: BASE[track], token, expect: 'no-marker', fetchImpl: fetchVia(handle, env('on')) });
    assert.equal(nm.pass, true, JSON.stringify(nm.checks));
    assert.equal(counts(DB, TRACKS[track].probeTables), before, `${track}: refused requests wrote nothing`);
    // a probe that wrongly ACCEPTS a write before the marker exists must fail the no-marker stage
    const leaky = async (url, init = {}) => (init.method === 'POST' ? new Response(JSON.stringify({ ok: true }), { status: 200 }) : fetchVia(handle, env('on'))(url, init));
    const lk = await qualify({ track, base: BASE[track], token, expect: 'no-marker', fetchImpl: leaky });
    assert.equal(lk.pass, false, 'an accepted write route must be detected');
    assert.ok(lk.checks.some((c) => c.method === 'POST' && !c.pass));
    const early = await qualify({ track, base: BASE[track], token, expect: 'verified', fetchImpl: fetchVia(handle, env('on')) });
    assert.equal(early.pass, false, 'verified must not pass before the marker exists');
    DB.raw.exec(fs.readFileSync(path.join(dir, 'marker.sql'), 'utf8'));
    assert.equal((await qualify({ track, base: BASE[track], token, expect: 'no-marker', fetchImpl: fetchVia(handle, env('on')) })).pass, false, 'no-marker must fail once the marker exists');
    if (track === 'v10') {
      const fo = await qualify({ track, base: BASE[track], token, expect: 'fault-off', fetchImpl: fetchVia(handle, env('on')) });
      assert.equal(fo.pass, true, JSON.stringify(fo.checks));
      const fon = await qualify({ track, base: BASE[track], token, expect: 'fault-off', fetchImpl: fetchVia(handle, { ...env('on'), V10_FAULT_INJECTION: 'on' }) });
      assert.equal(fon.pass, false, 'fault-off must fail while fault injection is on');
      assert.equal(DB.raw.prepare('SELECT COUNT(*) AS n FROM v10_ledger').get().n, 0, 'the fault-off check never claims while injection is off');
    }
  }
});

test('cross-track refusal (backstop only): V10 refuses a Track-1 database; the idempotency probe refuses a Track-2 database', async () => {
  const idemDB = await idemDb(); const v10DB = await v10Db();
  const { handle: v10 } = await v10Mod(); const { handle: idem } = await idemMod();
  const tok = 't'.repeat(64), nonce = 'n'.repeat(64);
  const r1 = await quiet(() => v10(new Request(BASE.v10 + '/v10/verify', { headers: { 'x-v10-token': tok } }), { DB: idemDB, V10_PROBE: 'on', V10_PROBE_TOKEN: tok, V10_PROBE_LABEL: TRACKS.v10.label, V10_PROBE_DB_NONCE: nonce }));
  assert.equal(r1.status, 412); assert.equal((await r1.json()).error, 'refusing_exam_database');
  const r2 = await quiet(() => idem(new Request(BASE.idem + '/idem/verify', { headers: { 'x-idem-token': tok } }), { DB: v10DB, IDEM_PROBE: 'on', IDEM_PROBE_TOKEN: tok, IDEM_PROBE_LABEL: TRACKS.idem.label, IDEM_PROBE_DB_NONCE: nonce }));
  assert.equal(r2.status, 412); assert.equal((await r2.json()).error, 'migrations_missing');
});

test('config-gate: the pinned example configs need the S-03 edits; injected unsafe configs are refused', () => {
  const ex = (track) => execFileSync('git', ['-C', track === 'idem' ? IDEM : V10, 'show', `HEAD:${TRACKS[track].dir}/${TRACKS[track].configExample}`], { encoding: 'utf8' });
  const acct = 'a'.repeat(32), id = '0f1e2d3c-4b5a-6978-8796-a5b4c3d2e1f0';
  for (const track of ['idem', 'v10']) {
    const raw = ex(track);
    assert.equal(gate({ track, configText: raw, stage: 'bootstrap' }).pass, false, 'the example lacks account_id');
    const boot = raw.replace(/^(compatibility_date\s*=.*)$/m, `$1\naccount_id = "${acct}"`);
    assert.equal(gate({ track, configText: boot, stage: 'bootstrap' }).pass, true, JSON.stringify(gate({ track, configText: boot, stage: 'bootstrap' }).reasons));
    assert.equal(gate({ track, configText: boot, stage: 'bound' }).pass, false, 'placeholder id at the bound stage');
    const bound = boot.replace('REPLACE_WITH_NON_PRODUCTION_PROBE_DATABASE_ID', id);
    assert.equal(gate({ track, configText: bound }).pass, true);
    assert.equal(gate({ track, configText: bound + '\n[observability]\nenabled = true\nhead_sampling_rate = 1\n' }).pass, true, 'the optional S-03 observability block is accepted');
    const info = JSON.stringify({ name: TRACKS[track].database, uuid: id, num_tables: 0 });
    assert.equal(gate({ track, configText: bound, d1Info: info }).pass, true);
    const bad = {
      'other database id': [bound, JSON.stringify({ name: TRACKS[track].database, uuid: id.replace('0f1e', '9f1e') })],
      'other database name': [bound, JSON.stringify({ name: 'klarweg-exam', uuid: id })],
      'ambiguous info': [bound, JSON.stringify({ name: TRACKS[track].database, uuid: id, other: id.replace('0f1e', '1f1e') })],
      'production database name': [bound.replace(`database_name = "${TRACKS[track].database}"`, 'database_name = "klarweg-exam"'), null],
      'extra R2 binding': [bound + '\n[[r2_buckets]]\nbinding = "B"\nbucket_name = "probe-scratch-bucket"\n', null],
      'production bucket name (as a var)': [bound.replace('[vars]', '[vars]\nX = "klarweg-exam-content"'), null],
      'route added': [bound.replace('workers_dev = true', 'workers_dev = true\nroute = "probe.example.com/*"'), null],
      'second D1': [bound + `\n[[d1_databases]]\nbinding = "DB2"\ndatabase_name = "${TRACKS[track].database}"\ndatabase_id = "${id}"\n`, null],
      'probe switched on in config': [bound.replace(`${TRACKS[track].switchVar} = "off"`, `${TRACKS[track].switchVar} = "on"`), null],
      'preview database id': [bound.replace(`database_id = "${id}"`, `database_id = "${id}"\npreview_database_id = "${id}"`), null],
      'env block': [bound + '\n[env.staging]\nworkers_dev = true\n', null],
      'array syntax': [bound.replace('workers_dev = true', 'workers_dev = true\ncompatibility_flags = ["nodejs_compat"]'), null]
    };
    if (track === 'v10') bad['fault injection on in config'] = [bound.replace('V10_FAULT_INJECTION = "off"', 'V10_FAULT_INJECTION = "on"'), null];
    for (const [name, [cfg, d1]] of Object.entries(bad)) {
      const g = gate({ track, configText: cfg, d1Info: d1 });
      assert.equal(g.pass, false, `${track}: ${name} must be refused`);
      if (name !== 'production database name') assert.equal(g.reasons.length, 1, `${track}: fixture "${name}" must trip exactly one rule, got ${JSON.stringify(g.reasons)}`);
    }
  }
});

test('base URL and empty-database checks', () => {
  assert.equal(checkBaseUrl('idem', BASE.idem + '/'), BASE.idem);
  for (const bad of ['http://klarweg-exam-idem-probe-free.x.workers.dev', 'https://klarweg-exam.x.workers.dev', 'https://klarweg.in', 'https://klarweg-exam-v10-probe.x.workers.dev',
    'https://klarweg-exam-idem-probe-free.x.workers.dev/idem', 'https://klarweg-exam-idem-probe-free.workers.dev.evil.example'])
    assert.throws(() => checkBaseUrl('idem', bad), /base URL/, bad);
  const dir = privateDir(); prepareSecrets({ track: 'idem', dir });
  assert.throws(() => runnerEnv({ track: 'idem', secretsFile: path.join(dir, 'secrets.json'), base: 'https://klarweg-exam.x.workers.dev' }), /base URL/);
  fs.chmodSync(path.join(dir, 'secrets.json'), 0o644);
  assert.throws(() => runnerEnv({ track: 'idem', secretsFile: path.join(dir, 'secrets.json'), base: BASE.idem }), /mode 600/);
  assert.equal(isEmptyDatabase([]), true); assert.equal(isEmptyDatabase(['_cf_KV']), true);
  assert.equal(isEmptyDatabase(['_cf_KV', 'attempts']), false); assert.equal(isEmptyDatabase(['sqlite_sequence']), false);
});

/* T9 (proposed) runner against the REAL pinned Free probe: an abort-capable in-process transport that, like a real
   server, keeps processing after the client aborts. Branches are produced on purpose; this checks the runner's logic only. */
async function abortRig({ mode, mutate = null }) {
  const { handle } = await idemMod(); const DB = await idemDb();
  const token = 'k'.repeat(64), nonce = 'z'.repeat(64);
  DB.raw.prepare(`INSERT INTO idem_probe_marker VALUES (?, ?, 0)`).run(TRACKS.idem.label, crypto.createHash('sha256').update(nonce).digest('hex'));
  let hang = null; let firstOne = true;
  const db = mutate ? mutate(DB) : DB;
  const wrapped = mode === 'in_flight' ? { ...db, prepare: db.prepare, batch: async (s) => { if (hang) await hang; return db.batch(s); } } : db;
  const env = { DB: wrapped, IDEM_PROBE: 'on', IDEM_PROBE_TOKEN: token, IDEM_PROBE_LABEL: TRACKS.idem.label, IDEM_PROBE_DB_NONCE: nonce };
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const fetchImpl = (url, init = {}) => new Promise((resolve, reject) => {
    const isOne = url.includes('/idem/race/one'); const first = isOne && firstOne; if (isOne) firstOne = false;
    const signal = init.signal; let settled = false;
    const finish = (fn) => { if (!settled) { settled = true; fn(); } };
    if (signal) signal.addEventListener('abort', () => finish(() => reject(Object.assign(new Error('aborted'), { name: 'AbortError' }))));
    (async () => {
      if (first && mode === 'not_applied') { await sleep(30); if (signal && signal.aborted) return; }          // never reached the Worker
      if (first && mode === 'in_flight') hang = new Promise(() => {});                                           // the invocation dies holding its claim
      const p = quiet(() => handle(new Request(url, { method: init.method, headers: init.headers }), env));
      if (first && mode === 'in_flight') { await sleep(5); hang = null; return; }
      const res = await p;                                                                                         // the original has COMMITTED here
      if (first && mode === 'applied') await sleep(40);                                                            // committed; the answer is slow
      if (first && mode === 'network_error') return finish(() => reject(new TypeError('fetch failed')));         // not the client's abort
      if (first && mode === 'platform_first') return finish(() => resolve(new Response('bad gateway', { status: 502 })));
      if (first && mode === 'unexpected_first') return finish(() => resolve(new Response(JSON.stringify({ ok: true, status: 200, replayed: true }), { status: 200 })));
      if (first && mode === 'after_headers') return finish(() => resolve({ status: 200, json: () => new Promise((_, rej) => signal.addEventListener('abort', () => rej(Object.assign(new Error('aborted'), { name: 'AbortError' })))) }));
      finish(() => resolve(res));
    })().catch((e) => finish(() => reject(e)));
  });
  return { token, fetchImpl, DB };
}
test('T9 runner (proposed): branches and verdicts on the REAL pinned Free probe', async () => {
  const opts = { intervals: [10], trials: 1, retryEveryMs: 5, settleMs: 60 };
  let rig = await abortRig({ mode: 'applied' });
  let r = await runIdemAbort({ base: BASE.idem, token: rig.token, fetchImpl: rig.fetchImpl, ...opts });
  assert.equal(r.verdict, 'pass', JSON.stringify(r)); assert.equal(r.branches.aborted_original_applied, 1);
  rig = await abortRig({ mode: 'not_applied' });
  r = await runIdemAbort({ base: BASE.idem, token: rig.token, fetchImpl: rig.fetchImpl, ...opts });
  assert.equal(r.verdict, 'inconclusive', 'no key branch observed'); assert.equal(r.branches.aborted_original_not_applied, 1);
  rig = await abortRig({ mode: 'in_flight' });
  r = await runIdemAbort({ base: BASE.idem, token: rig.token, fetchImpl: rig.fetchImpl, ...opts });
  assert.equal(r.verdict, 'inconclusive'); assert.equal(r.branches.aborted_original_in_flight, 1); assert.equal(r.inconclusive[0].reason, 'not_settled_within_settle_ms');
  // no idempotency at all (claim never written; assertion and precondition always true) → duplicate effects → FAIL
  const broken = (DB) => ({ ...DB, prepare: (sql) => (sql.includes("'pending', ?5, ?4) ON CONFLICT") ? { bind: () => ({ run: async () => ({ meta: { changes: 1 } }) }) }
    : DB.prepare(sql.replace(/EXISTS \(\s*SELECT 1 FROM request_log WHERE attempt_id = \?2 AND request_id = \?3 AND state = 'pending' AND claim_token = \?1\)/, '(?1 = ?1 AND ?2 = ?2 AND ?3 = ?3)')
      .replace("(EXISTS (SELECT 1 FROM idem_probe_state WHERE run_id = ?4 AND state = 'open'))", '(?4 = ?4)'))) });
  rig = await abortRig({ mode: 'applied', mutate: broken });
  r = await runIdemAbort({ base: BASE.idem, token: rig.token, fetchImpl: rig.fetchImpl, ...opts });
  assert.equal(r.verdict, 'fail', JSON.stringify(r.failures)); assert.equal(r.failures[0].reason, 'duplicate_effects');
  // the original COMMITTED in each case below, so a careless runner would count the retry's replay as the key branch
  const late = { ...opts, intervals: [150] };
  rig = await abortRig({ mode: 'network_error' });
  r = await runIdemAbort({ base: BASE.idem, token: rig.token, fetchImpl: rig.fetchImpl, ...late });
  assert.equal(r.verdict, 'inconclusive', 'a transport error is not a client abort'); assert.equal(r.branches.first_request_failed, 1); assert.equal(r.branches.aborted_original_applied, 0);
  rig = await abortRig({ mode: 'after_headers' });
  r = await runIdemAbort({ base: BASE.idem, token: rig.token, fetchImpl: rig.fetchImpl, ...late });
  assert.equal(r.verdict, 'inconclusive', 'an abort after the 200 headers is not ambiguous'); assert.equal(r.branches.responded, 1); assert.equal(r.results[0].first.aborted_after_headers, true);
  rig = await abortRig({ mode: 'platform_first' });
  r = await runIdemAbort({ base: BASE.idem, token: rig.token, fetchImpl: rig.fetchImpl, ...late });
  assert.equal(r.verdict, 'inconclusive', 'a hidden first answer'); assert.equal(r.inconclusive[0].reason, 'platform_answer_hid_result');
  rig = await abortRig({ mode: 'unexpected_first' });
  r = await runIdemAbort({ base: BASE.idem, token: rig.token, fetchImpl: rig.fetchImpl, ...late });
  assert.equal(r.verdict, 'fail', 'a replay on a fresh run is unexpected'); assert.equal(r.failures[0].reason, 'unexpected_first_answer');
  // CLI guard: --settle-ms must exceed the 60 s claim TTL; refused before any request (loopback base, never a real host)
  const cli = spawnSync(process.execPath, [path.join(TOOLS, 'run-idem-abort.mjs'), '--settle-ms', '30000'], { encoding: 'utf8', timeout: 10_000,
    env: { ...process.env, IDEM_BASE_URL: 'https://127.0.0.1:1', IDEM_TOKEN: 'k'.repeat(64) } });
  assert.equal(cli.status, 2, cli.stderr); assert.match(cli.stderr, /REFUSED: --settle-ms must exceed/);
  // verification refused → fail, nothing runs
  r = await runIdemAbort({ base: BASE.idem, token: 'x'.repeat(64), fetchImpl: (await abortRig({ mode: 'applied' })).fetchImpl, ...opts });
  assert.equal(r.verdict, 'fail'); assert.equal(r.failures[0].step, 'verify'); assert.equal(r.results.length, 0);
});

test('runbook-lint: the runbook is clean, the pinned repository facts hold, and injected defects are detected', () => {
  assert.deepEqual(lintRunbook(RUNBOOK), []);
  assert.deepEqual(lintRepo(IDEM), []);
  const c08 = RUNBOOK.split('\n').find((l) => l.startsWith('| C-08 |'));
  const defects = {
    'missing --remote': [c08, c08.replace(' --remote', '')],
    'binding instead of name': [c08, c08.replace('d1 execute klarweg-exam-idem-probe', 'd1 execute DB')],
    'production database': [c08, c08.replace('d1 execute klarweg-exam-idem-probe', 'd1 execute klarweg-exam')],
    'skip prompts': [c08, c08.replace('--remote', '--remote --yes')],
    'unlabelled': [c08, c08.replace('| STATE-CHANGING |', '| |')],
    'missing gate': ['| S-12 | **G**; **C-12** |', '| S-12 | **C-12** |'],
    'secret-shaped value': ['**[LOCAL]**', '**[LOCAL]** ' + 'ab'.repeat(32)],
    'banner removed': ['STATUS: NOT EXECUTED', 'STATUS: EXECUTED']
  };
  for (const [name, [a, b]] of Object.entries(defects)) {
    assert.ok(RUNBOOK.includes(a), `fixture for ${name}`);
    assert.ok(lintRunbook(RUNBOOK.replace(a, b)).length > 0, `${name} must be detected`);
  }
});
