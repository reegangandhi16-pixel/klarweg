#!/usr/bin/env node
/* LOCAL-ONLY identity gate ("G" in the runbook). One invocation checks, fail-closed, everything Wrangler is about to act
   on; it runs nothing itself and prints no secret value.
     node config-gate.mjs --track idem|v10 --config wrangler.toml --stage bootstrap|bound --auth oauth|api-token
       [--d1-info <fresh `d1 info --json` output>] [--max-age-s 600] [--expect-probe off] [--expect-fault off]
       [-- <the exact Wrangler command about to run, as argv words>]
   Run it IN the probe directory (the directory that holds wrangler.toml).

   1. Local inputs Wrangler may read (M-1). Precedence among them is NOT documented, so ambiguity is refused:
      - the working directory must be the probe directory;
      - probe directory: only files tracked by git at the pin, plus wrangler.toml, plus Wrangler's own .wrangler/
        working directory (created by Wrangler itself; any .env*, .dev.vars* or wrangler.* file inside it is refused,
        other contents are not inspected — U-17); anything else — ignored or untracked, e.g. .env*, .dev.vars*,
        wrangler.json(c), reports — is refused;
      - every ancestor up to the repository root: no .env* or .dev.vars* file at all (Wrangler documents loading a
        `.env` "in your project directory" without defining that directory precisely);
      - environment, by NAME only (values are never printed; the account id is compared and shown masked):
        CLOUDFLARE_ACCOUNT_ID must be set and equal the config's account_id; refused when set: CF_ACCOUNT_ID,
        CF_API_TOKEN, CF_API_KEY, CF_EMAIL, CF_API_BASE_URL (deprecated aliases), CLOUDFLARE_API_KEY, CLOUDFLARE_EMAIL
        (legacy auth), CLOUDFLARE_ACCESS_CLIENT_ID / _SECRET, CLOUDFLARE_API_BASE_URL, CLOUDFLARE_ENV, WRANGLER_LOG_PATH,
        WRANGLER_OUTPUT_FILE_PATH / _DIRECTORY, WRANGLER_LOG=debug, WRANGLER_LOG_SANITIZE=false;
        --auth oauth: CLOUDFLARE_API_TOKEN must NOT be set; --auth api-token: it must be set (presence only).
   2. The config (a deliberately small TOML subset; anything else is refused): top-level keys name, main,
      compatibility_date, workers_dev, account_id; sections [vars], one [[d1_databases]], [observability]; the
      track's name / main / database_name / binding DB / label; workers_dev = true; account_id 32 hex; no forbidden
      name; no duplicate keys or sections; switch and fault injection as expected (default "off" — they are switched
      on only per deploy with --var).
   3. --stage bootstrap (before `d1 create`): database_id is still the example placeholder; no d1 info; the only
      state-changing command allowed is `d1 create`.
      --stage bound (every later step): database_id is a UUID; a state-changing command REQUIRES --d1-info, and that
      file must be fresh (modified within --max-age-s) and contain exactly one UUID-valued field equal to database_id
      AND exactly one `name` field equal to the track's database. The field names of `d1 info --json` are not
      documented: a missing name, a missing or ambiguous id, or a stale file is REFUSED — never an id-only match.
   4. The command after `--` (checkCommand in tracks.mjs): literal database / Worker names of THIS track, allowed
      flags and files, and — when the files exist locally — the marker / secrets file belong to this track.
   Exit 0 = pass, 1 = refused (reasons printed). */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { trackOf, FORBIDDEN_TARGETS, checkCommand } from './tracks.mjs';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const PLACEHOLDER_ID = 'REPLACE_WITH_NON_PRODUCTION_PROBE_DATABASE_ID';
export const REFUSED_ENV = ['CF_ACCOUNT_ID', 'CF_API_TOKEN', 'CF_API_KEY', 'CF_EMAIL', 'CF_API_BASE_URL', 'CLOUDFLARE_API_KEY', 'CLOUDFLARE_EMAIL',
  'CLOUDFLARE_ACCESS_CLIENT_ID', 'CLOUDFLARE_ACCESS_CLIENT_SECRET', 'CLOUDFLARE_API_BASE_URL', 'CLOUDFLARE_ENV', 'WRANGLER_LOG_PATH',
  'WRANGLER_OUTPUT_FILE_PATH', 'WRANGLER_OUTPUT_FILE_DIRECTORY'];
export const mask = (id) => (typeof id === 'string' && id.length > 8 ? `${id.slice(0, 4)}…${id.slice(-4)}` : '(unset)');
const isSet = (env, k) => typeof env[k] === 'string' && env[k] !== '';

export function parseProbeToml(text) {
  const out = { top: {}, sections: [] }; let cur = null; const problems = [];
  text.split('\n').forEach((raw, i) => {
    const line = raw.replace(/\s+#.*$/, '').replace(/^#.*$/, '').trim();
    if (!line) return;
    let m;
    if ((m = line.match(/^\[\[([a-z0-9_.]+)\]\]$/))) { cur = { name: m[1], array: true, kv: {} }; out.sections.push(cur); return; }
    if ((m = line.match(/^\[([a-z0-9_.]+)\]$/))) { cur = { name: m[1], array: false, kv: {} }; out.sections.push(cur); return; }
    if ((m = line.match(/^([A-Za-z0-9_]+)\s*=\s*(?:"([^"\\]*)"|(true|false|[0-9]+(?:\.[0-9]+)?))$/))) {
      const v = m[2] !== undefined ? m[2] : m[3] === 'true' ? true : m[3] === 'false' ? false : Number(m[3]);
      const target = cur ? cur.kv : out.top;
      if (m[1] in target) problems.push(`line ${i + 1}: duplicate key "${m[1]}"`);
      target[m[1]] = v; return;
    }
    problems.push(`line ${i + 1}: unsupported syntax (only key = "string" | true | false | number)`);
  });
  const names = out.sections.filter((s) => !s.array).map((s) => s.name);
  for (const n of new Set(names)) if (names.filter((x) => x === n).length > 1) problems.push(`section [${n}] appears twice`);
  return { ...out, problems };
}

/* 1. Local inputs: environment by name; files in the probe directory and its ancestors. `tracked` and `repoTop` are
   injectable for tests; by default they come from `git ls-files` / `git rev-parse --show-toplevel`. */
export function checkLocalInputs({ probeDir, cwd, env, auth, accountId, tracked = null, repoTop = null }) {
  const why = [];
  if (!['oauth', 'api-token'].includes(auth)) why.push('--auth must be oauth or api-token (declare how Wrangler authenticates)');
  if (path.resolve(cwd) !== path.resolve(probeDir)) why.push('run in the probe directory (the directory that holds wrangler.toml)');
  for (const k of REFUSED_ENV) if (isSet(env, k)) why.push(`environment variable ${k} is set: unset it (ambiguous account / credential / endpoint / log selection)`);
  if (isSet(env, 'WRANGLER_LOG') && String(env.WRANGLER_LOG).toLowerCase() === 'debug') why.push('WRANGLER_LOG=debug logs API requests: unset it');
  if (isSet(env, 'WRANGLER_LOG_SANITIZE') && String(env.WRANGLER_LOG_SANITIZE).toLowerCase() === 'false') why.push('WRANGLER_LOG_SANITIZE=false: unset it');
  if (auth === 'oauth' && isSet(env, 'CLOUDFLARE_API_TOKEN')) why.push('--auth oauth but CLOUDFLARE_API_TOKEN is set: two credential sources');
  if (auth === 'api-token' && !isSet(env, 'CLOUDFLARE_API_TOKEN')) why.push('--auth api-token but CLOUDFLARE_API_TOKEN is not set');
  if (!isSet(env, 'CLOUDFLARE_ACCOUNT_ID')) why.push('CLOUDFLARE_ACCOUNT_ID must be set (to the same value as account_id)');
  else if (typeof accountId !== 'string' || env.CLOUDFLARE_ACCOUNT_ID.toLowerCase() !== accountId.toLowerCase()) why.push(`CLOUDFLARE_ACCOUNT_ID (${mask(env.CLOUDFLARE_ACCOUNT_ID)}) ≠ config account_id (${mask(accountId)})`);
  let trackedList = tracked;
  if (!trackedList) {
    try { trackedList = execFileSync('git', ['-C', probeDir, 'ls-files', '--', '.'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).split('\n').filter(Boolean); }
    catch { why.push('probe directory is not inside a git checkout'); trackedList = []; }
  }
  const okFiles = new Set(trackedList);
  const okDirs = new Set(trackedList.flatMap((f) => { const parts = f.split('/'); return parts.slice(0, -1).map((_, i) => parts.slice(0, i + 1).join('/')); }));
  const CREDENTIAL_OR_CONFIG = /^(\.env(\..*)?|\.dev\.vars(\..*)?|wrangler\.(toml|json|jsonc))$/;
  for (const d of fs.readdirSync(probeDir, { recursive: true, withFileTypes: true })) {
    const rel = path.relative(probeDir, path.join(d.parentPath, d.name));
    if (rel === '.wrangler' || rel.startsWith(`.wrangler${path.sep}`)) {   // Wrangler's own working directory (U-17)
      if (CREDENTIAL_OR_CONFIG.test(d.name)) why.push(`credential/config file inside .wrangler/: ${rel}`);
      continue;
    }
    if (!okFiles.has(rel) && !okDirs.has(rel) && rel !== 'wrangler.toml') why.push(`unexpected local file in the probe directory: ${rel} (only tracked files, wrangler.toml and Wrangler's own .wrangler/ are allowed)`);
  }
  let top = repoTop;
  if (!top) { try { top = execFileSync('git', ['-C', probeDir, 'rev-parse', '--show-toplevel'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch { top = probeDir; } }
  for (let d = path.resolve(probeDir); ; d = path.dirname(d)) {
    for (const n of fs.readdirSync(d)) if (/^\.env(\..*)?$/.test(n) || /^\.dev\.vars(\..*)?$/.test(n)) why.push(`credential/config file ${path.relative(top, path.join(d, n)) || n} found: remove it (Wrangler may load it)`);
    if (path.resolve(d) === path.resolve(top) || path.dirname(d) === d) break;
  }
  return why;
}

/* 2–4. The config, the d1 info output and the command. */
export function gate({ track, configText, d1Info = null, d1InfoAgeMs = null, maxAgeMs = 600_000, expectProbe = 'off', expectFault = 'off', stage = 'bound',
  command = null, readFile = null, localInputs = null }) {
  if (!['bootstrap', 'bound'].includes(stage)) throw new Error('--stage must be bootstrap | bound');
  const t = trackOf(track); const p = parseProbeToml(configText); const why = [...p.problems];
  const allowedTop = ['name', 'main', 'compatibility_date', 'workers_dev', 'account_id'];
  for (const k of Object.keys(p.top)) if (!allowedTop.includes(k)) why.push(`top-level key "${k}" is not allowed in a probe config`);
  for (const s of p.sections) if (!['vars', 'd1_databases', 'observability'].includes(s.name)) why.push(`section [${s.name}] is not allowed (only [vars], [[d1_databases]], [observability])`);
  const d1 = p.sections.filter((s) => s.name === 'd1_databases');
  if (d1.length !== 1) why.push(`exactly one [[d1_databases]] required, found ${d1.length}`);
  if (p.top.name !== t.worker) why.push(`name must be "${t.worker}" (is this the other track's config?)`);
  if (p.top.main !== t.main) why.push('main is not the track\'s probe Worker');
  if (p.top.workers_dev !== true) why.push('workers_dev must be true (no routes / custom domains)');
  if (typeof p.top.account_id !== 'string' || !/^[0-9a-f]{32}$/i.test(p.top.account_id)) why.push('account_id (32 hex) must be set to pin the Cloudflare account');
  const db = d1[0] ? d1[0].kv : {};
  if (db.binding !== 'DB') why.push('the D1 binding must be "DB"');
  if (db.database_name !== t.database) why.push(`database_name must be "${t.database}"`);
  for (const k of Object.keys(db)) if (!['binding', 'database_name', 'database_id'].includes(k)) why.push(`d1 key "${k}" is not allowed (e.g. preview_database_id, migrations_dir)`);
  const vars = (p.sections.find((s) => s.name === 'vars') || { kv: {} }).kv;
  if (vars[t.switchVar] !== expectProbe) why.push(`${t.switchVar} must be "${expectProbe}" for this step`);
  if (vars[t.labelVar] !== t.label) why.push(`label var must be "${t.label}"`);
  if (track === 'v10' && vars.V10_FAULT_INJECTION !== expectFault) why.push(`V10_FAULT_INJECTION must be "${expectFault}" for this step`);
  if (track === 'idem' && 'V10_FAULT_INJECTION' in vars) why.push('V10_FAULT_INJECTION does not belong in the Track 1 config');
  const values = [...Object.values(p.top), ...p.sections.flatMap((s) => Object.values(s.kv))].map(String);
  for (const f of FORBIDDEN_TARGETS) if (values.includes(f)) why.push(`forbidden name "${f}" in the probe config`);
  if (localInputs) why.push(...localInputs);

  let cmd = null;
  if (command) { cmd = checkCommand(track, command, { readFile }); if (!cmd.ok) why.push(...cmd.reasons.map((r) => `command: ${r}`)); }
  const isCreate = command && command[3] === 'd1' && command[4] === 'create';
  if (stage === 'bootstrap') {
    if (db.database_id !== PLACEHOLDER_ID) why.push('bootstrap: database_id must still be the example placeholder (the database does not exist yet)');
    if (d1Info !== null) why.push('bootstrap: no d1 info yet');
    if (cmd && cmd.kind === 'STATE-CHANGING' && !isCreate) why.push('bootstrap: the only state-changing command allowed is d1 create');
  } else {
    if (!UUID.test(String(db.database_id || ''))) why.push('database_id must be a UUID (replace the example placeholder)');
    if (cmd && cmd.kind === 'STATE-CHANGING' && d1Info === null) why.push('a state-changing command at the bound stage requires a fresh --d1-info');
    if (isCreate) why.push('d1 create is only allowed at the bootstrap stage');
  }
  if (d1Info !== null && stage === 'bound') {
    if (typeof d1InfoAgeMs !== 'number' || d1InfoAgeMs > maxAgeMs || d1InfoAgeMs < -5_000) why.push(`d1 info output is stale or undated (older than ${Math.round(maxAgeMs / 1000)} s): run C-06 again`);
    let info; try { info = typeof d1Info === 'string' ? JSON.parse(d1Info) : d1Info; } catch { info = undefined; }
    const flat = []; const walk = (o) => { if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) { if (v && typeof v === 'object') walk(v); else flat.push([k, v]); } };
    walk(info);
    const uuids = flat.filter(([, v]) => typeof v === 'string' && UUID.test(v));
    const names = flat.filter(([k]) => k === 'name');
    if (!info) why.push('d1 info output is not JSON');
    else {
      if (uuids.length !== 1) why.push(`d1 info output has ${uuids.length} UUID fields: identity not established — STOP and resolve U-1 with the reviewer`);
      else if (uuids[0][1].toLowerCase() !== String(db.database_id).toLowerCase()) why.push('d1 info id ≠ config database_id: STOP (wrong database or stale config)');
      if (names.length !== 1) why.push(`d1 info output has ${names.length} "name" fields: identity not established — an id-only match is not accepted`);
      else if (names[0][1] !== t.database) why.push(`d1 info name "${names[0][1]}" ≠ "${t.database}": STOP (other track or other database)`);
    }
  }
  return { track, stage, command_kind: cmd ? cmd.kind : null, pass: why.length === 0, reasons: [...new Set(why)] };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const sep = process.argv.indexOf('--');
  const argv = sep < 0 ? process.argv : process.argv.slice(0, sep);
  const arg = (k, d) => { const i = argv.indexOf(`--${k}`); return i > 0 ? argv[i + 1] : d; };
  try {
    const track = arg('track'); const configPath = arg('config'); const configText = fs.readFileSync(configPath, 'utf8');
    const probeDir = path.dirname(path.resolve(configPath));
    const accountId = parseProbeToml(configText).top.account_id;
    const infoPath = arg('d1-info');
    const r = gate({
      track, configText, stage: arg('stage', 'bound'), expectProbe: arg('expect-probe', 'off'), expectFault: arg('expect-fault', 'off'),
      d1Info: infoPath ? fs.readFileSync(infoPath, 'utf8') : null, d1InfoAgeMs: infoPath ? Date.now() - fs.statSync(infoPath).mtimeMs : null,
      maxAgeMs: Number(arg('max-age-s', 600)) * 1000, command: sep < 0 ? null : process.argv.slice(sep + 1),
      readFile: (f) => fs.readFileSync(path.resolve(probeDir, f), 'utf8'),
      localInputs: checkLocalInputs({ probeDir, cwd: process.cwd(), env: process.env, auth: arg('auth'), accountId })
    });
    console.log(JSON.stringify({ ...r, account: mask(accountId) }, null, 2)); process.exit(r.pass ? 0 : 1);
  } catch (e) { console.error(`REFUSED: ${e.message}`); process.exit(1); }
}
