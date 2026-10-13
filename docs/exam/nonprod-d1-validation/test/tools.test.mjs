/* LOCAL-ONLY tests of the runbook tooling against the PINNED probe code, on in-process SQLite. NOT D1 evidence.
   Run: IDEM_PIN_DIR=<checkout at PR #73 c8f2b79> V10_PIN_DIR=<checkout at PR #72 a34aca0> node --test test/*.test.mjs
   Nothing here runs Wrangler or contacts Cloudflare: every probe is the pinned handler called in process, and the only
   child processes are this directory's own tools (refused before any request) and `git` on temporary repositories. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { PINS, TRACKS, checkBaseUrl, isEmptyDatabase, checkCommand, splitWords } from '../tools/tracks.mjs';
import { prepareSecrets } from '../tools/prepare-probe-secrets.mjs';
import { runnerEnv } from '../tools/with-probe-env.mjs';
import { qualify } from '../tools/qualify-check.mjs';
import { gate, checkLocalInputs, PLACEHOLDER_ID } from '../tools/config-gate.mjs';
import { runIdemAbort } from '../tools/run-idem-abort.mjs';
import { lintRunbook, lintRepo } from '../tools/runbook-lint.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const TOOLS = path.join(HERE, '..', 'tools');
const RUNBOOK = fs.readFileSync(path.join(HERE, '..', 'NONPROD-D1-VALIDATION-RUNBOOK.md'), 'utf8');
const IDEM = process.env.IDEM_PIN_DIR, V10 = process.env.V10_PIN_DIR;
const headOf = (d) => execFileSync('git', ['-C', d, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
const WR = 'npx --yes wrangler@4.150.0';
const words = (s) => splitWords(`${WR} ${s}`);

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
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* A minimal D1-shaped wrapper over node:sqlite (same contract as the pinned harness) for the V10 track; counts statements. */
async function v10Db() {
  const { DatabaseSync } = await import('node:sqlite');
  const raw = new DatabaseSync(':memory:'); raw.exec(fs.readFileSync(path.join(V10, 'exam-worker/verification/v10-probe/probe-schema.sql'), 'utf8'));
  const c = { statements: 0 };
  const S = (sql, p = []) => ({ bind: (...b) => S(sql, b), _runSync: () => raw.prepare(sql).run(...p),
    first: async () => { c.statements++; const r = raw.prepare(sql).get(...p); return r === undefined ? null : { ...r }; },
    all: async () => { c.statements++; return { results: raw.prepare(sql).all(...p).map((r) => ({ ...r })) }; },
    run: async () => { c.statements++; const i = raw.prepare(sql).run(...p); return { meta: { changes: Number(i.changes) } }; } });
  return { raw, counter: c, prepare: (sql) => S(sql), batch: async (st) => { c.statements += st.length; raw.exec('BEGIN'); try { st.forEach((s) => s._runSync()); raw.exec('COMMIT'); } catch (e) { raw.exec('ROLLBACK'); throw e; } return []; } };
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
    assert.equal((await qualify({ track, base: BASE[track], token, expect: 'disabled', fetchImpl: fetchVia(handle, env('off')) })).pass, true);
    const nm = await qualify({ track, base: BASE[track], token, expect: 'no-marker', fetchImpl: fetchVia(handle, env('on')) });
    assert.equal(nm.pass, true, JSON.stringify(nm.checks));
    assert.equal(counts(DB, TRACKS[track].probeTables), before, `${track}: refused requests wrote nothing`);
    const leaky = async (url, init = {}) => (init.method === 'POST' ? new Response(JSON.stringify({ ok: true }), { status: 200 }) : fetchVia(handle, env('on'))(url, init));
    const lk = await qualify({ track, base: BASE[track], token, expect: 'no-marker', fetchImpl: leaky });
    assert.equal(lk.pass, false, 'an accepted write route must be detected'); assert.ok(lk.checks.some((c) => c.method === 'POST' && !c.pass));
    assert.equal((await qualify({ track, base: BASE[track], token, expect: 'verified', fetchImpl: fetchVia(handle, env('on')) })).pass, false, 'not verified before the marker');
    DB.raw.exec(fs.readFileSync(path.join(dir, 'marker.sql'), 'utf8'));
    assert.equal((await qualify({ track, base: BASE[track], token, expect: 'no-marker', fetchImpl: fetchVia(handle, env('on')) })).pass, false, 'no-marker fails once the marker exists');
    if (track === 'v10') {
      assert.equal((await qualify({ track, base: BASE[track], token, expect: 'fault-off', fetchImpl: fetchVia(handle, env('on')) })).pass, true);
      assert.equal((await qualify({ track, base: BASE[track], token, expect: 'fault-off', fetchImpl: fetchVia(handle, { ...env('on'), V10_FAULT_INJECTION: 'on' }) })).pass, false);
      assert.equal(DB.raw.prepare('SELECT COUNT(*) AS n FROM v10_ledger').get().n, 0, 'the fault-off check never claims');
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

/* ---------- config gate (config, d1 info identity, command; M-3, L-4) ---------- */
const ACCT = 'a'.repeat(32), DBID = '0f1e2d3c-4b5a-6978-8796-a5b4c3d2e1f0';
const exampleOf = (track) => execFileSync('git', ['-C', track === 'idem' ? IDEM : V10, 'show', `HEAD:${TRACKS[track].dir}/${TRACKS[track].configExample}`], { encoding: 'utf8' });
const bootOf = (track) => exampleOf(track).replace(/^(compatibility_date\s*=.*)$/m, `$1\naccount_id = "${ACCT}"`);
const boundOf = (track) => bootOf(track).replace(PLACEHOLDER_ID, DBID);
const info = (o) => JSON.stringify(o);
const FRESH = 1_000;

test('config-gate: the pinned example configs need the S-03 edits; injected unsafe configs are refused, each by exactly one rule', () => {
  for (const track of ['idem', 'v10']) {
    assert.equal(gate({ track, configText: exampleOf(track), stage: 'bootstrap' }).pass, false, 'the example lacks account_id');
    assert.equal(gate({ track, configText: bootOf(track), stage: 'bootstrap' }).pass, true, JSON.stringify(gate({ track, configText: bootOf(track), stage: 'bootstrap' }).reasons));
    assert.equal(gate({ track, configText: bootOf(track), stage: 'bound' }).pass, false, 'placeholder id at the bound stage');
    const bound = boundOf(track);
    assert.equal(gate({ track, configText: bound }).pass, true);
    assert.equal(gate({ track, configText: bound + '\n[observability]\nenabled = true\nhead_sampling_rate = 1\n' }).pass, true, 'optional S-03 observability block');
    const bad = {
      'production database name': bound.replace(`database_name = "${TRACKS[track].database}"`, 'database_name = "klarweg-exam"'),
      'extra R2 binding': bound + '\n[[r2_buckets]]\nbinding = "B"\nbucket_name = "probe-scratch-bucket"\n',
      'production bucket name (as a var)': bound.replace('[vars]', '[vars]\nX = "klarweg-exam-content"'),
      'route added': bound.replace('workers_dev = true', 'workers_dev = true\nroute = "probe.example.com/*"'),
      'second D1': bound + `\n[[d1_databases]]\nbinding = "DB2"\ndatabase_name = "${TRACKS[track].database}"\ndatabase_id = "${DBID}"\n`,
      'probe switched on in config': bound.replace(`${TRACKS[track].switchVar} = "off"`, `${TRACKS[track].switchVar} = "on"`),
      'preview database id': bound.replace(`database_id = "${DBID}"`, `database_id = "${DBID}"\npreview_database_id = "${DBID}"`),
      'env block': bound + '\n[env.staging]\nworkers_dev = true\n',
      'array syntax': bound.replace('workers_dev = true', 'workers_dev = true\ncompatibility_flags = ["nodejs_compat"]'),
      'duplicate key': bound.replace('workers_dev = true', 'workers_dev = true\nworkers_dev = true'),
      'duplicate [vars]': bound + '\n[vars]\nX = "y"\n'
    };
    if (track === 'v10') bad['fault injection on in config'] = bound.replace('V10_FAULT_INJECTION = "off"', 'V10_FAULT_INJECTION = "on"');
    for (const [name, cfg] of Object.entries(bad)) {
      const g = gate({ track, configText: cfg });
      assert.equal(g.pass, false, `${track}: ${name} must be refused`);
      if (name !== 'production database name') assert.equal(g.reasons.length, 1, `${track}: "${name}" must trip exactly one rule, got ${JSON.stringify(g.reasons)}`);
    }
    // the other track's config is refused for this track (mismatched track)
    assert.equal(gate({ track: track === 'idem' ? 'v10' : 'idem', configText: bound }).pass, false);
  }
});

test('config-gate d1 info (M-3, L-4): fresh, unambiguous id AND name required; stale, undated, missing-name, wrong id / name / track refused', () => {
  for (const track of ['idem', 'v10']) {
    const t = TRACKS[track], o = TRACKS[track === 'idem' ? 'v10' : 'idem'], bound = boundOf(track);
    const g = (d1Info, d1InfoAgeMs = FRESH, extra = {}) => gate({ track, configText: bound, d1Info, d1InfoAgeMs, ...extra });
    assert.equal(g(info({ name: t.database, uuid: DBID, num_tables: 0 })).pass, true);
    assert.equal(g(info({ result: { name: t.database, uuid: DBID } })).pass, true, 'nested fields are found');
    const refused = {
      'stale output (2 h old)': [info({ name: t.database, uuid: DBID }), 7_200_000],
      'undated output': [info({ name: t.database, uuid: DBID }), null],
      'missing name (id-only match)': [info({ uuid: DBID })],
      'missing id': [info({ name: t.database })],
      'wrong id': [info({ name: t.database, uuid: DBID.replace('0f1e', '9f1e') })],
      'other track\'s database name': [info({ name: o.database, uuid: DBID })],
      'production database name': [info({ name: 'klarweg-exam', uuid: DBID })],
      'two ids (ambiguous)': [info({ name: t.database, uuid: DBID, other: DBID.replace('0f1e', '1f1e') })],
      'two names (ambiguous)': [info({ name: t.database, uuid: DBID, x: { name: o.database } })],
      'not JSON': ['not json']
    };
    for (const [name, [d, age]] of Object.entries(refused)) assert.equal(g(d, age === undefined ? FRESH : age).pass, false, `${track}: ${name} must be refused`);
    // a state-changing command at the bound stage needs the fresh d1 info; a read does not
    const del = words(`d1 delete ${t.database} --config wrangler.toml`);
    assert.match(gate({ track, configText: bound, command: del }).reasons.join(), /requires a fresh --d1-info/);
    assert.equal(g(info({ name: t.database, uuid: DBID }), FRESH, { command: del }).pass, true);
    assert.equal(gate({ track, configText: bound, command: words(`d1 list --json --config wrangler.toml`) }).pass, true);
    // stage discipline
    assert.equal(gate({ track, configText: bootOf(track), stage: 'bootstrap', command: words(`d1 create ${t.database} --config wrangler.toml`) }).pass, true);
    assert.equal(gate({ track, configText: bootOf(track), stage: 'bootstrap', command: words('deploy --config wrangler.toml') }).pass, false, 'bootstrap allows only d1 create');
    assert.equal(g(info({ name: t.database, uuid: DBID }), FRESH, { command: words(`d1 create ${t.database} --config wrangler.toml`) }).pass, false, 'no d1 create once bound');
  }
});

/* ---------- local inputs (M-1): environment by name, files in the probe directory and ancestors ---------- */
function tempRepo() {
  const top = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-d1-repo-')); const probe = path.join(top, 'exam-worker', 'verification', 'probe');
  fs.mkdirSync(probe, { recursive: true }); fs.writeFileSync(path.join(probe, 'worker.mjs'), '// probe\n'); fs.writeFileSync(path.join(probe, 'wrangler.example.toml'), 'name = "x"\n');
  const git = (...a) => execFileSync('git', ['-C', top, '-c', 'user.email=t@example.invalid', '-c', 'user.name=t', ...a], { stdio: 'ignore' });
  git('init', '-q'); git('add', '.'); git('commit', '-qm', 'fixture');
  return { top: fs.realpathSync(top), probe: fs.realpathSync(probe) };
}
test('local inputs (M-1): ambiguous account / credential / endpoint / log selection and unexpected local files are refused; values are never echoed', () => {
  const { top, probe } = tempRepo();
  const base = { CLOUDFLARE_ACCOUNT_ID: ACCT };
  const li = (over = {}) => checkLocalInputs({ probeDir: probe, cwd: probe, env: base, auth: 'oauth', accountId: ACCT, ...over });
  assert.deepEqual(li(), []);
  fs.writeFileSync(path.join(probe, 'wrangler.toml'), 'name = "x"\n'); assert.deepEqual(li(), [], 'wrangler.toml is the one allowed local file');
  const SECRET = 'tok_' + 'q'.repeat(40);
  const envCases = {
    'CF_API_TOKEN (deprecated alias)': { env: { ...base, CF_API_TOKEN: SECRET } }, 'CF_ACCOUNT_ID': { env: { ...base, CF_ACCOUNT_ID: 'b'.repeat(32) } },
    'CLOUDFLARE_API_KEY': { env: { ...base, CLOUDFLARE_API_KEY: SECRET } }, 'CLOUDFLARE_EMAIL': { env: { ...base, CLOUDFLARE_EMAIL: 'x@example.invalid' } },
    'CLOUDFLARE_API_BASE_URL': { env: { ...base, CLOUDFLARE_API_BASE_URL: 'https://example.invalid' } }, 'CLOUDFLARE_ENV': { env: { ...base, CLOUDFLARE_ENV: 'production' } },
    'CLOUDFLARE_ACCESS_CLIENT_SECRET': { env: { ...base, CLOUDFLARE_ACCESS_CLIENT_SECRET: SECRET } }, 'WRANGLER_LOG=debug': { env: { ...base, WRANGLER_LOG: 'debug' } },
    'WRANGLER_LOG_SANITIZE=false': { env: { ...base, WRANGLER_LOG_SANITIZE: 'false' } }, 'WRANGLER_OUTPUT_FILE_PATH': { env: { ...base, WRANGLER_OUTPUT_FILE_PATH: '/tmp/x' } },
    'oauth + API token (two credential sources)': { env: { ...base, CLOUDFLARE_API_TOKEN: SECRET } },
    'api-token declared, none set': { auth: 'api-token' }, 'no auth declared': { auth: undefined },
    'CLOUDFLARE_ACCOUNT_ID unset': { env: {} }, 'CLOUDFLARE_ACCOUNT_ID ≠ account_id': { env: { CLOUDFLARE_ACCOUNT_ID: 'b'.repeat(32) } },
    'not run in the probe directory': { cwd: top }
  };
  for (const [name, over] of Object.entries(envCases)) {
    const why = li(over); assert.ok(why.length > 0, `${name} must be refused`);
    assert.ok(!why.join(' ').includes(SECRET) && !why.join(' ').includes('b'.repeat(32)), `${name}: no value echoed`);
  }
  assert.deepEqual(li({ auth: 'api-token', env: { ...base, CLOUDFLARE_API_TOKEN: SECRET } }), [], 'api-token with exactly that source');
  assert.deepEqual(li({ env: { ...base, WRANGLER_LOG: 'info' } }), []);
  const fileCases = [['probe/.env', path.join(probe, '.env')], ['probe/.env.production', path.join(probe, '.env.production')], ['probe/.dev.vars', path.join(probe, '.dev.vars')],
    ['probe/wrangler.jsonc', path.join(probe, 'wrangler.jsonc')], ['probe/.wrangler/tmp/.env', path.join(probe, '.wrangler', 'tmp', '.env')],
    ['probe/.wrangler/wrangler.json', path.join(probe, '.wrangler', 'wrangler.json')], ['probe/idem-report-x.json', path.join(probe, 'idem-report-x.json')],
    ['ancestor .dev.vars', path.join(top, 'exam-worker', '.dev.vars')], ['repository-root .env', path.join(top, '.env')]];
  for (const [name, f] of fileCases) {
    fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, 'X=1\n');
    assert.ok(li().length > 0, `${name} must be refused`);
    fs.rmSync(f); if (name.includes('.wrangler')) fs.rmSync(path.join(probe, '.wrangler'), { recursive: true });
  }
  assert.deepEqual(li(), [], 'clean again');
  fs.mkdirSync(path.join(probe, '.wrangler', 'tmp', 'bundle'), { recursive: true }); fs.writeFileSync(path.join(probe, '.wrangler', 'tmp', 'bundle', 'worker.js'), '//\n');
  assert.deepEqual(li(), [], "Wrangler's own .wrangler/ working directory is allowed"); fs.rmSync(path.join(probe, '.wrangler'), { recursive: true });
  // the gate CLI applies all of it: a stray .env in the probe dir refuses even a perfect config (child = this tool only)
  fs.writeFileSync(path.join(probe, 'wrangler.toml'), boundOf('idem'));
  const cli = (env) => spawnSync(process.execPath, [path.join(TOOLS, 'config-gate.mjs'), '--track', 'idem', '--config', 'wrangler.toml', '--stage', 'bound', '--auth', 'oauth'],
    { cwd: probe, encoding: 'utf8', env: { PATH: process.env.PATH, HOME: process.env.HOME, ...env } });
  assert.equal(cli({ CLOUDFLARE_ACCOUNT_ID: ACCT }).status, 0, cli({ CLOUDFLARE_ACCOUNT_ID: ACCT }).stdout);
  fs.writeFileSync(path.join(probe, '.env'), 'CLOUDFLARE_ACCOUNT_ID=x\n');
  const r = cli({ CLOUDFLARE_ACCOUNT_ID: ACCT }); assert.equal(r.status, 1); assert.match(r.stdout, /credential\/config file/);
  assert.ok(!r.stdout.includes(ACCT), 'the account id is shown masked only');
});

/* ---------- the exact command (M-2) ---------- */
test('checkCommand (M-2): Track 2 commands aimed at Track 1 (or production) are refused before anything runs; marker and secrets files must be the track\'s own', () => {
  const v = (s, readFile) => checkCommand('v10', words(s), { readFile });
  const v10Ok = ['d1 delete klarweg-exam-v10-probe --config wrangler.toml', 'd1 execute klarweg-exam-v10-probe --remote --config wrangler.toml --file=probe-schema.sql',
    'deploy --config wrangler.toml --var V10_PROBE:on V10_FAULT_INJECTION:on', 'delete --name klarweg-exam-v10-probe --config wrangler.toml'];
  for (const s of v10Ok) assert.equal(v(s).ok, true, s);
  const crossTrack = ['d1 delete klarweg-exam-idem-probe --config wrangler.toml', 'd1 create klarweg-exam-idem-probe --config wrangler.toml',
    'd1 info klarweg-exam-idem-probe --json --config wrangler.toml', 'd1 execute klarweg-exam-idem-probe --remote --config wrangler.toml --file=probe-schema.sql',
    'd1 execute klarweg-exam-idem-probe --remote --config wrangler.toml --file=marker.sql', 'd1 execute klarweg-exam-v10-probe --remote --config wrangler.toml --file=../../migrations/0001_exam_init.sql',
    'delete --name klarweg-exam-idem-probe-free --config wrangler.toml', 'deployments list --name klarweg-exam-idem-probe-free --json --config wrangler.toml',
    'deploy --config wrangler.toml --var IDEM_PROBE:on'];
  for (const s of crossTrack) assert.equal(v(s).ok, false, `cross-track must be refused: ${s}`);
  const unsafe = ['d1 delete klarweg-exam --config wrangler.toml', 'd1 execute DB --remote --config wrangler.toml --file=probe-schema.sql',
    'd1 execute klarweg-exam-v10-probe --config wrangler.toml --file=probe-schema.sql', 'd1 execute klarweg-exam-v10-probe --remote --command "DELETE FROM v10_rows" --config wrangler.toml',
    'd1 execute klarweg-exam-v10-probe --remote --config wrangler.toml --command "SELECT 1; DROP TABLE v10_rows"', 'd1 delete klarweg-exam-v10-probe --config wrangler.toml --skip-confirmation',
    'd1 delete klarweg-exam-v10-probe --config wrangler.toml -y', 'd1 create klarweg-exam-v10-probe --config wrangler.toml --update-config', 'd1 delete klarweg-exam-v10-probe',
    'deploy --var V10_PROBE:on --config wrangler.toml', 'deploy --config wrangler.toml --env production', 'd1 export klarweg-exam-v10-probe --remote --config wrangler.toml',
    'secret put V10_PROBE_TOKEN --config wrangler.toml', 'deploy --config ../../wrangler.toml', 'deploy --config wrangler.toml --route klarweg.in/*'];
  for (const s of unsafe) assert.equal(v(s).ok, false, `must be refused: ${s}`);
  // L-7: the config must never be auto-edited — refused by the explicit forbidden-flag rule, on every subcommand
  for (const s of ['d1 create klarweg-exam-v10-probe --config wrangler.toml --update-config', 'deploy --config wrangler.toml --update-config'])
    assert.ok(v(s).reasons.includes('forbidden flag --update-config'), s);
  assert.equal(checkCommand('v10', ['npx', 'wrangler', 'd1', 'list', '--config', 'wrangler.toml']).ok, false, 'unpinned binary');
  assert.equal(v('deploy --dry-run --outdir /x --config wrangler.toml').kind, 'STATE-CHANGING', 'dry-run gated conservatively (L-5)');
  assert.equal(v('delete --name klarweg-exam-v10-probe --config wrangler.toml --dry-run').kind, 'STATE-CHANGING');
  // marker / secrets content: the other track's files are refused even with the right database name
  const idemDir = privateDir(); prepareSecrets({ track: 'idem', dir: idemDir }); const v10Dir = privateDir(); prepareSecrets({ track: 'v10', dir: v10Dir });
  const rf = (f) => fs.readFileSync(f, 'utf8');
  assert.equal(v(`d1 execute klarweg-exam-v10-probe --remote --config wrangler.toml --file=${v10Dir}/marker.sql`, rf).ok, true);
  assert.equal(v(`d1 execute klarweg-exam-v10-probe --remote --config wrangler.toml --file=${idemDir}/marker.sql`, rf).ok, false, 'Track 1 marker into Track 2');
  assert.equal(v(`deploy --config wrangler.toml --secrets-file ${v10Dir}/secrets.json`, rf).ok, true);
  assert.equal(v(`deploy --config wrangler.toml --secrets-file ${idemDir}/secrets.json`, rf).ok, false, 'Track 1 secrets into Track 2');
  // and through the gate, before execution
  const g = gate({ track: 'v10', configText: boundOf('v10'), d1Info: info({ name: 'klarweg-exam-v10-probe', uuid: DBID }), d1InfoAgeMs: FRESH, command: words('d1 delete klarweg-exam-idem-probe --config wrangler.toml') });
  assert.equal(g.pass, false); assert.match(g.reasons.join(), /database must be "klarweg-exam-v10-probe"/);
});

test('base URL, runner environment and empty-database checks; T9 CLI refuses a foreign host or a short settle window before any request (L-3)', () => {
  assert.equal(checkBaseUrl('idem', BASE.idem + '/'), BASE.idem);
  for (const bad of ['http://klarweg-exam-idem-probe-free.x.workers.dev', 'https://klarweg-exam.x.workers.dev', 'https://klarweg.in', 'https://klarweg-exam-v10-probe.x.workers.dev',
    'https://klarweg-exam-idem-probe-free.x.workers.dev/idem', 'https://klarweg-exam-idem-probe-free.workers.dev.evil.example']) assert.throws(() => checkBaseUrl('idem', bad), /base URL/, bad);
  const dir = privateDir(); prepareSecrets({ track: 'idem', dir });
  assert.throws(() => runnerEnv({ track: 'idem', secretsFile: path.join(dir, 'secrets.json'), base: 'https://klarweg-exam.x.workers.dev' }), /base URL/);
  fs.chmodSync(path.join(dir, 'secrets.json'), 0o644);
  assert.throws(() => runnerEnv({ track: 'idem', secretsFile: path.join(dir, 'secrets.json'), base: BASE.idem }), /mode 600/);
  assert.equal(isEmptyDatabase([]), true); assert.equal(isEmptyDatabase(['_cf_KV']), true); assert.equal(isEmptyDatabase(['_cf_KV', 'attempts']), false);
  const run = (env, args = []) => spawnSync(process.execPath, [path.join(TOOLS, 'run-idem-abort.mjs'), ...args], { encoding: 'utf8', timeout: 10_000, env: { PATH: process.env.PATH, IDEM_TOKEN: 'k'.repeat(64), ...env } });
  for (const host of ['https://127.0.0.1:1', 'https://example.invalid', 'https://klarweg-exam.x.workers.dev']) {
    const r = run({ IDEM_BASE_URL: host }); assert.equal(r.status, 2, host); assert.match(r.stderr, /REFUSED: base URL/);
  }
  const s = run({ IDEM_BASE_URL: BASE.idem }, ['--settle-ms', '30000']); assert.equal(s.status, 2); assert.match(s.stderr, /REFUSED: --settle-ms must exceed/);
});

/* ---------- T9 (proposed) runner against the REAL pinned Free probe ---------- */
const abortErr = () => Object.assign(new Error('aborted'), { name: 'AbortError' });
async function probeRig({ mutate = null, blockFirstBatch = false } = {}) {
  const { handle } = await idemMod(); const DB = await idemDb();
  const token = 'k'.repeat(64), nonce = 'z'.repeat(64);
  DB.raw.prepare('INSERT INTO idem_probe_marker VALUES (?, ?, 0)').run(TRACKS.idem.label, crypto.createHash('sha256').update(nonce).digest('hex'));
  let hold = blockFirstBatch;
  const db0 = mutate ? mutate(DB) : DB;
  const db = blockFirstBatch ? { ...db0, prepare: db0.prepare, batch: async (s) => { if (hold) { hold = false; await new Promise(() => {}); } return db0.batch(s); } } : db0;
  const env = { DB: db, IDEM_PROBE: 'on', IDEM_PROBE_TOKEN: token, IDEM_PROBE_LABEL: TRACKS.idem.label, IDEM_PROBE_DB_NONCE: nonce };
  const real = (url, init = {}) => quiet(() => handle(new Request(url, { method: init.method, headers: init.headers }), env));
  return { token, DB, real };
}
/* A transport. `first(url, init, real)` answers the first race/one of each trial; `override(kind, n, url, init)` may answer
   any other call (kind = verify | prepare | one | state; n = per-kind call count) or return undefined for the real probe. */
function transport(real, { first = null, override = () => undefined } = {}) {
  const n = { verify: 0, prepare: 0, one: 0, state: 0 }; let firstPending = false;
  return (url, init = {}) => {
    const kind = url.includes('/idem/verify') ? 'verify' : url.includes('/race/prepare') ? 'prepare' : url.includes('/race/one') ? 'one' : 'state';
    n[kind]++;
    if (kind === 'prepare') firstPending = true;
    if (kind === 'one' && firstPending) { firstPending = false; if (first) return first(url, init, real); }
    const o = override(kind, n[kind], url, init);
    return o !== undefined ? o : real(url, init);
  };
}
const committedThenSlow = (ms) => (url, init, real) => new Promise((res, rej) => { let done = false; init.signal.addEventListener('abort', () => { if (!done) { done = true; rej(abortErr()); } }); (async () => { const r = await real(url, init); await sleep(ms); if (!done) { done = true; res(r); } })(); });
const neverReached = (url, init) => new Promise((_, rej) => init.signal.addEventListener('abort', () => rej(abortErr())));
const OPTS = { intervals: [10], trials: 1, retryEveryMs: 2, settleMs: 60 };
const runT9 = async (rig, tp, opts = OPTS) => runIdemAbort({ base: BASE.idem, token: rig.token, fetchImpl: tp, ...opts });
const json = (o, status = 200) => Promise.resolve(new Response(JSON.stringify(o), { status }));

test('T9 runner (proposed): branches and verdicts on the REAL pinned Free probe', async () => {
  let rig = await probeRig();
  let r = await runT9(rig, transport(rig.real, { first: committedThenSlow(40) }));
  assert.equal(r.verdict, 'pass', JSON.stringify(r)); assert.equal(r.branches.aborted_original_applied, 1);
  rig = await probeRig();
  r = await runT9(rig, transport(rig.real, { first: neverReached }));
  assert.equal(r.verdict, 'inconclusive'); assert.equal(r.branches.aborted_original_not_applied, 1);
  rig = await probeRig({ blockFirstBatch: true });
  r = await runT9(rig, transport(rig.real, { first: (u, i, real) => new Promise((_, rej) => { real(u, i); i.signal.addEventListener('abort', () => rej(abortErr())); }) }));
  assert.equal(r.verdict, 'inconclusive'); assert.equal(r.branches.aborted_original_in_flight, 1); assert.equal(r.inconclusive[0].reason, 'not_settled_within_settle_ms');
  // no idempotency at all → duplicate effects → FAIL
  const broken = (DB) => ({ ...DB, prepare: (sql) => (sql.includes("'pending', ?5, ?4) ON CONFLICT") ? { bind: () => ({ run: async () => ({ meta: { changes: 1 } }) }) }
    : DB.prepare(sql.replace(/EXISTS \(\s*SELECT 1 FROM request_log WHERE attempt_id = \?2 AND request_id = \?3 AND state = 'pending' AND claim_token = \?1\)/, '(?1 = ?1 AND ?2 = ?2 AND ?3 = ?3)')
      .replace("(EXISTS (SELECT 1 FROM idem_probe_state WHERE run_id = ?4 AND state = 'open'))", '(?4 = ?4)'))) });
  rig = await probeRig({ mutate: broken });
  r = await runT9(rig, transport(rig.real, { first: committedThenSlow(40) }));
  assert.equal(r.verdict, 'fail', JSON.stringify(r.failures)); assert.equal(r.failures[0].reason, 'duplicate_effects');
  // the original COMMITTED in each case below; none may count toward the key branch
  const late = { ...OPTS, intervals: [150] };
  const cases = {
    network_error: [(u, i, real) => real(u, i).then(() => { throw new TypeError('fetch failed'); }), 'inconclusive', 'first_request_failed', 'first_request_failed'],
    after_headers: [(u, i, real) => real(u, i).then(() => ({ status: 200, json: () => new Promise((_, j) => i.signal.addEventListener('abort', () => j(abortErr()))) })), 'inconclusive', 'responded', null],
    platform_first: [(u, i, real) => real(u, i).then(() => new Response('bad gateway', { status: 502 })), 'inconclusive', 'responded', 'first_answer_hidden'],
    first_replay: [(u, i, real) => real(u, i).then(() => new Response(JSON.stringify({ ok: true, status: 200, replayed: true }), { status: 200 })), 'fail', 'responded', null],
    first_in_progress: [(u, i, real) => real(u, i).then(() => new Response(JSON.stringify({ ok: true, status: 503, error: 'request_in_progress' }), { status: 200 })), 'fail', 'responded', null]
  };
  for (const [name, [first, verdict, branch, reason]] of Object.entries(cases)) {
    rig = await probeRig(); r = await runT9(rig, transport(rig.real, { first }), late);
    assert.equal(r.verdict, verdict, `${name}: ${JSON.stringify(r)}`); assert.equal(r.branches[branch], 1, name); assert.equal(r.branches.aborted_original_applied, 0, name);
    if (reason) assert.equal(r.inconclusive[0].reason, reason, name);
    if (verdict === 'fail') assert.equal(r.failures[0].reason, 'unexpected_first_answer', name);
  }
});

test('T9 runner (M-4, L-1, L-2): errors at every request stage are inconclusive (never fail, never pass), and completed trials are kept', async () => {
  const typeErr = () => Promise.reject(new TypeError('fetch failed'));
  const stages = {
    'verify transport error': [(k) => (k === 'verify' ? typeErr() : undefined), 'verify_unreachable'],
    'verify refused (412)': [(k) => (k === 'verify' ? json({ ok: false, error: 'marker_missing_or_ambiguous' }, 412) : undefined), 'probe_not_verified'],
    'prepare transport error': [(k) => (k === 'prepare' ? typeErr() : undefined), 'prepare_failed'],
    'retry transport error': [(k) => (k === 'one' ? typeErr() : undefined), 'retry_answer_hidden'],
    'retry 502': [(k) => (k === 'one' ? Promise.resolve(new Response('x', { status: 502 })) : undefined), 'retry_answer_hidden'],
    'retry budget trip (inconclusive flag)': [(k) => (k === 'one' ? json({ ok: true, status: 500, error: 'query_budget_exceeded', inconclusive: true }) : undefined), 'retry_answer_hidden'],
    'retry D1 error (status 500)': [(k) => (k === 'one' ? json({ ok: true, status: 500, error: 'D1_ERROR: overloaded' }) : undefined), 'retry_answer_hidden'],
    'state transport error': [(k) => (k === 'state' ? typeErr() : undefined), 'state_unreadable'],
    'state 500': [(k) => (k === 'state' ? Promise.resolve(new Response('x', { status: 500 })) : undefined), 'state_unreadable']
  };
  for (const [name, [override, reason]] of Object.entries(stages)) {
    const rig = await probeRig();
    const r = await runT9(rig, transport(rig.real, { first: committedThenSlow(40), override }));
    assert.equal(r.verdict, 'inconclusive', `${name}: ${JSON.stringify(r)}`); assert.equal(r.failures.length, 0, name);
    assert.equal((r.inconclusive[0] || {}).reason, reason, `${name}: ${JSON.stringify(r.inconclusive)}`);
    if (name.startsWith('retry')) { assert.equal(r.branches.aborted_unresolved, 1, `${name}: L-1 branch`); assert.equal(r.branches.aborted_original_in_flight, 0, name); }
  }
  // a tripped invocation that still reports "200 replayed" must not count toward the key branch (flag honoured at any status)
  let rig0 = await probeRig();
  let r0 = await runT9(rig0, transport(rig0.real, { first: committedThenSlow(40), override: (k) => (k === 'one' ? json({ ok: true, status: 200, replayed: true, inconclusive: true }) : undefined) }));
  assert.equal(r0.verdict, 'inconclusive', JSON.stringify(r0)); assert.equal(r0.branches.aborted_original_applied, 0, 'a budget-tripped replay is not the key branch');
  // an UNEXPECTED exception inside a later trial (not a transport error) is caught: earlier evidence kept, verdict inconclusive
  rig0 = await probeRig(); let firstSeen = 0;
  r0 = await runT9(rig0, transport(rig0.real, { first: (u, i, real) => (++firstSeen === 1 ? committedThenSlow(40)(u, i, real) : Promise.resolve({ get status() { throw new Error('boom'); } })) }), { ...OPTS, trials: 2 });
  assert.equal(r0.verdict, 'inconclusive', JSON.stringify(r0)); assert.equal(r0.results.length, 2);
  assert.equal(r0.branches.aborted_original_applied, 1, 'trial 1 kept'); assert.equal(r0.inconclusive[0].reason, 'runner_error');
  // a real application violation in a retry is still a FAIL (409 is not an infrastructure error)
  let rig = await probeRig();
  let r = await runT9(rig, transport(rig.real, { first: committedThenSlow(40), override: (k) => (k === 'one' ? json({ ok: true, status: 409, error: 'invalid_transition' }) : undefined) }));
  assert.equal(r.verdict, 'fail'); assert.equal(r.failures[0].reason, 'unexpected_status');
  // errors AFTER earlier trials completed: the earlier evidence is kept, the verdict is inconclusive, not fail
  for (const [k, n] of [['prepare', 2], ['one', 4], ['state', 2]]) {
    rig = await probeRig();
    r = await runT9(rig, transport(rig.real, { first: committedThenSlow(40), override: (kind, count) => (kind === k && count === n ? typeErr() : undefined) }), { ...OPTS, trials: 2 });
    assert.equal(r.verdict, 'inconclusive', `${k}#${n}: ${JSON.stringify(r)}`); assert.equal(r.results.length, 2, `${k}#${n}: both trials reported`);
    assert.equal(r.branches.aborted_original_applied >= 1, true, `${k}#${n}: the completed key-branch trial is kept`); assert.equal(r.failures.length, 0);
  }
  // negative control: a random transport error injected anywhere never yields pass, and never fail
  for (let i = 0; i < 40; i++) {
    const kinds = ['verify', 'prepare', 'one', 'state']; const k = kinds[Math.floor(Math.random() * 4)]; const n = 1 + Math.floor(Math.random() * 3);
    rig = await probeRig(); let injected = false;
    r = await runT9(rig, transport(rig.real, { first: committedThenSlow(40), override: (kind, count) => (kind === k && count === n ? (injected = true, typeErr()) : undefined) }), { ...OPTS, trials: 2 });
    if (injected) { assert.notEqual(r.verdict, 'pass', `${k}#${n}`); assert.notEqual(r.verdict, 'fail', `${k}#${n}: infrastructure alone is not a violation`); }
  }
});

/* ---------- provenance of the T8 figures (L-6) ---------- */
test('T8 figures are reproducible here: Track 1 from PR #73\'s budget models, Track 2 by counting statements around the pinned V10 handler', async () => {
  const { VERIFY_MAX, WORST, FREE_N, FREE_FAN } = await import(path.join(IDEM, 'exam-worker/verification/idempotency-d1/budget.mjs'));
  const m = { S1: VERIFY_MAX + WORST.S1(FREE_N.S1), S2: VERIFY_MAX + WORST.S2(0), S3: VERIFY_MAX + WORST.S3(), S4: VERIFY_MAX + WORST.S4(), S5: VERIFY_MAX + WORST.S5(FREE_N.S5),
    S6: VERIFY_MAX + WORST.S6(0), S7a: VERIFY_MAX + WORST.S7a(0), S7b: VERIFY_MAX + WORST.S7b(), one: VERIFY_MAX + WORST['race/one'](), fan: VERIFY_MAX + WORST['race/fan'](FREE_FAN.m) };
  const t1 = `S1 ${m.S1}, S2 ${m.S2} + polls, S3 ${m.S3}, S4 ${m.S4}, S5 ${m.S5}, S6 ${m.S6} + polls, S7a ${m.S7a} + polls, S7b ${m.S7b}, race single ${m.one}, fan ${m.fan}`;
  assert.ok(RUNBOOK.includes(t1), `runbook must state: ${t1}`);
  const { handle } = await v10Mod(); const DB = await v10Db();
  const tok = 't'.repeat(64), nonce = 'n'.repeat(64);
  DB.raw.prepare('INSERT INTO v10_probe_marker VALUES (?, ?, 0)').run(TRACKS.v10.label, crypto.createHash('sha256').update(nonce).digest('hex'));
  const env = { DB, V10_PROBE: 'on', V10_PROBE_TOKEN: tok, V10_PROBE_LABEL: TRACKS.v10.label, V10_PROBE_DB_NONCE: nonce, V10_FAULT_INJECTION: 'off' };
  const measure = async (method, p) => { const before = DB.counter.statements; const r = await quiet(() => handle(new Request(BASE.v10 + p, { method, headers: { 'x-v10-token': tok } }), env)); assert.equal(r.status, 200, p); return DB.counter.statements - before; };
  const run = 'prov-v10-0001';
  const got = { verify: await measure('GET', '/v10/verify'), scenarios: await measure('POST', '/v10/scenarios?run=prov-scn-0001'), 'prepare-claim': await measure('POST', `/v10/prepare-claim?run=${run}`),
    claim: await measure('POST', `/v10/claim?run=${run}&op=commit:${run}`), state: await measure('GET', `/v10/state?run=${run}`), ledger: await measure('GET', `/v10/ledger?run=${run}&op=commit:${run}`) };
  const t2 = `verify ${got.verify}, scenarios ${got.scenarios}, prepare-claim ${got['prepare-claim']}, claim ${got.claim}, state ${got.state}, ledger ${got.ledger}`;
  assert.ok(RUNBOOK.includes(t2), `runbook must state: ${t2}`);
  assert.ok(Math.max(...Object.values(got)) < 50 && RUNBOOK.includes(`largest invocation is ${Math.max(...Object.values(got))} statements`));
});

test('runbook-lint: the runbook is clean, the pinned repository facts hold, and injected defects in BOTH tracks are detected', () => {
  assert.deepEqual(lintRunbook(RUNBOOK), []);
  assert.deepEqual(lintRepo(IDEM), []);
  const section = (track) => { const a = RUNBOOK.indexOf(track === 'idem' ? '### 4.1 ' : '### 4.2 '); const b = RUNBOOK.indexOf(track === 'idem' ? '\n### 4.2 ' : '\n## 5.', a); return RUNBOOK.slice(a, b); };
  // a row is located inside its own track's table (some rows, e.g. C-12, are textually identical in both tables)
  const row = (id, track) => section(track).split('\n').find((l) => l.startsWith(`| ${id} |`));
  const inTrack = (track, a, b) => { const s = section(track); return RUNBOOK.replace(s, s.replace(a, b)); };
  const defects = {
    'Track 2 d1 delete names the Track 1 database': [row('C-21', 'v10'), (s) => s.replace('d1 delete klarweg-exam-v10-probe', 'd1 delete klarweg-exam-idem-probe')],
    'Track 2 marker into the Track 1 database': [row('C-15', 'v10'), (s) => s.replace('execute klarweg-exam-v10-probe', 'execute klarweg-exam-idem-probe')],
    'Track 2 schema file of Track 1': [row('C-11', 'v10'), (s) => s.replace('--file=probe-schema.sql', '--file=../../migrations/0001_exam_init.sql')],
    'Track 1 missing --remote': [row('C-09', 'idem'), (s) => s.replace(' --remote', '')],
    'Track 1 binding instead of name': [row('C-11', 'idem'), (s) => s.replace('d1 execute klarweg-exam-idem-probe', 'd1 execute DB')],
    'production database': [row('C-21', 'idem'), (s) => s.replace('d1 delete klarweg-exam-idem-probe', 'd1 delete klarweg-exam')],
    'skip prompts': [row('C-21', 'v10'), (s) => s.replace('--config wrangler.toml', '--config wrangler.toml --skip-confirmation')],
    'dry-run labelled READ-ONLY (L-5)': [row('C-12', 'v10'), (s) => s.replace('| STATE-CHANGING |', '| READ-ONLY |')],
    'L-03 without --d1-info (M-3)': [row('L-03', 'v10'), (s) => s.replace(' --d1-info <PRIVATE>/d1-info.json', '')],
    'L-02 for the wrong track': [row('L-02', 'v10'), (s) => s.replace('--track v10', '--track idem')],
    'H-02 sends the token to the other track\'s host': [row('H-02', 'v10'), (s) => s.replace('https://klarweg-exam-v10-probe.', 'https://klarweg-exam-idem-probe-free.')],
    'H-03 runs the other track\'s runner': [row('H-03', 'v10'), (s) => s.replace('node run-v10-ambiguous.mjs', 'node run-idem-free.mjs')],
    'C-17 removed from Track 2': [row('C-17', 'v10'), () => ''],
    'gate removed from a state-changing step': ['| S-17 | **G**, **C-15** |', (s) => s.replace('**G**, ', '')],
    'G definition removed': ['**G, exactly.**', () => '**G.**'],
    'secret-shaped value': ['**[LOCAL]**', (s) => s + ' ' + 'ab'.repeat(32)],
    'banner removed': ['STATUS: NOT EXECUTED', () => 'STATUS: EXECUTED']
  };
  for (const [name, [a, f]] of Object.entries(defects)) {
    assert.ok(a && RUNBOOK.includes(a), `fixture for ${name}`);
    const track = /Track 1|idem/.test(name) || ['production database'].includes(name) ? 'idem' : 'v10';
    const mutated = section(track).includes(a) ? inTrack(track, a, f(a)) : RUNBOOK.replace(a, f(a));
    assert.notEqual(mutated, RUNBOOK, `${name}: the mutation changed nothing`);
    assert.ok(lintRunbook(mutated).length > 0, `${name} must be detected`);
  }
});
