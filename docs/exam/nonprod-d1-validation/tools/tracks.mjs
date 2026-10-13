/* Shared, pinned facts for the two non-production D1 validation tracks (NONPROD-D1-VALIDATION-RUNBOOK.md).
   LOCAL-ONLY tooling: nothing here talks to Cloudflare except through the HTTP endpoints of an already deployed probe. */
export const PINS = {
  idem: '882f218d0603ad7f8e703a7ea0d72aaac304eba6',        // PR #71 (engine + migrations under test)
  idemTooling: 'c8f2b79dbd10ab797b0d913fe6b86ab91760790c', // PR #73 (Free probe tooling; deploy from here)
  v10: 'a34aca0eff1207667280f19aabbc8039e544d0a0'          // PR #72 (V10 probe; deploy from here)
};
export const TRACKS = {
  idem: {
    dir: 'exam-worker/verification/idempotency-d1', configExample: 'wrangler.free.example.toml', worker: 'klarweg-exam-idem-probe-free',
    database: 'klarweg-exam-idem-probe', label: 'nonprod-idem-probe-1', markerTable: 'idem_probe_marker',
    tokenSecret: 'IDEM_PROBE_TOKEN', nonceSecret: 'IDEM_PROBE_DB_NONCE', tokenHeader: 'x-idem-token', switchVar: 'IDEM_PROBE',
    runnerEnv: { base: 'IDEM_BASE_URL', token: 'IDEM_TOKEN' },
    verifyPath: '/idem/verify', writeProbePath: (run) => `/idem/race/prepare?kind=fresh&run=${run}`,
    main: 'worker-free.mjs', labelVar: 'IDEM_PROBE_LABEL',
    schemaFiles: ['../../migrations/0001_exam_init.sql', '../../migrations/0002_idempotency_claims.sql', 'probe-schema.sql'],
    deployVars: [['IDEM_PROBE:on']], runners: ['run-idem-free.mjs', '<TOOLS>/run-idem-abort.mjs'],
    probeTables: ['idem_probe_marker', 'idem_probe_state', 'idem_probe_effects', 'request_log', 'idempotency_assertions']
  },
  v10: {
    dir: 'exam-worker/verification/v10-probe', configExample: 'wrangler.example.toml', worker: 'klarweg-exam-v10-probe',
    database: 'klarweg-exam-v10-probe', label: 'nonprod-v10-probe-1', markerTable: 'v10_probe_marker',
    tokenSecret: 'V10_PROBE_TOKEN', nonceSecret: 'V10_PROBE_DB_NONCE', tokenHeader: 'x-v10-token', switchVar: 'V10_PROBE',
    runnerEnv: { base: 'V10_BASE_URL', token: 'V10_TOKEN' },
    verifyPath: '/v10/verify', writeProbePath: (run) => `/v10/prepare-claim?run=${run}`,
    main: 'worker.mjs', labelVar: 'V10_PROBE_LABEL',
    schemaFiles: ['probe-schema.sql'],
    deployVars: [['V10_PROBE:on'], ['V10_PROBE:on', 'V10_FAULT_INJECTION:on']], runners: ['run-v10.mjs', 'run-v10-ambiguous.mjs'],
    probeTables: ['v10_probe_marker', 'v10_assertions', 'v10_ledger', 'v10_state', 'v10_rows']
  }
};
/* Names that must never appear as a target in a probe command or config (production exam stack, other Workers). */
export const FORBIDDEN_TARGETS = ['klarweg-exam', 'klarweg-exam-content', 'klarweg-exam-recordings', 'klarweg-access', 'klarweg-tutor', 'klarweg-report'];
/* D1 lists this reserved table even in an empty database (D1 import/export docs): the ONLY table allowed before setup. */
export const EMPTY_DB_ALLOWED_TABLES = ['_cf_KV'];
export function trackOf(name) { const t = TRACKS[name]; if (!t) throw new Error(`unknown track "${name}" (idem | v10)`); return t; }
/* The probe Worker's URL must be its own workers.dev host: https://<worker>.<subdomain>.workers.dev — never a custom
   domain or another Worker (that would send the probe token to a Worker that is not the probe). */
export function checkBaseUrl(track, base) {
  let u; try { u = new URL(base); } catch { throw new Error('base URL is not a URL'); }
  const t = trackOf(track);
  if (u.protocol !== 'https:' || u.pathname.replace(/\/+$/, '') !== '' || u.search || u.hash) throw new Error('base URL must be https://<host> with no path, query or fragment');
  const parts = u.hostname.split('.');
  if (!(parts.length === 4 && parts[0] === t.worker && parts[2] === 'workers' && parts[3] === 'dev')) throw new Error(`base URL host must be ${t.worker}.<subdomain>.workers.dev`);
  return u.origin;
}
export function isEmptyDatabase(tableNames) { return tableNames.every((n) => EMPTY_DB_ALLOWED_TABLES.includes(n)); }

/* ---------- the exact Wrangler command about to run (identity gate, runbook-lint) ----------
   checkCommand(track, words) validates ONE command, given as its argv words, against the track. It enforces:
   - the pinned binary `npx --yes wrangler@4.150.0`, an allow-listed subcommand, `--config wrangler.toml` (except
     --version / whoami);
   - every database argument is the track's literal database name (never the binding DB, never the other track's,
     never production); every Worker name is the track's;
   - d1 execute: --remote, and either a read-only SELECT (--command) or an allow-listed --file (the track's schema
     files, or a marker.sql — whose content, when the file exists, must target the track's marker table and label);
   - deploy --var: only the track's allowed switch combinations; --secrets-file: when the file exists, its KEY NAMES
     (values are never read into the result) must be exactly the track's two secrets;
   - forbidden flags anywhere: --yes/-y, --skip-confirmation, --update-config, --binding, --local, --preview,
     --persist-to, --route(s), --domain, --env/-e, --env-file, --name on d1 commands, --cwd, --profile.
   Returns { ok, kind, reasons }: kind is READ-ONLY only for documented reads (version, whoami, list, info, a SELECT);
   everything else — including deploy --dry-run and delete --dry-run — is STATE-CHANGING. Unknown shapes are refused. */
export const WR_WORDS = ['npx', '--yes', 'wrangler@4.150.0'];
const FORBIDDEN_FLAGS = ['--yes', '-y', '--skip-confirmation', '--update-config', '--binding', '--local', '--preview', '--persist-to', '--route', '--routes',
  '--domain', '--env', '-e', '--env-file', '--cwd', '--profile', '--use-remote', '--jurisdiction', '--location', '--triggers', '--schedule', '--schedules', '--assets'];
const READ_ONLY_SQL = /^\s*SELECT\b[^;]*;?\s*$/i;
const WRITE_SQL = /\b(INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|REPLACE|ATTACH|DETACH|PRAGMA|VACUUM|REINDEX|BEGIN|COMMIT)\b/i;
export function checkCommand(track, words, { readFile = null } = {}) {
  const t = trackOf(track); const why = []; let kind = 'STATE-CHANGING';
  if (!Array.isArray(words) || words.length < 4) return { ok: false, kind, reasons: ['not a command'] };
  for (let i = 0; i < 3; i++) if (words[i] !== WR_WORDS[i]) return { ok: false, kind, reasons: ['must start with `npx --yes wrangler@4.150.0`'] };
  const a = words.slice(3);
  const flags = new Map(); const pos = [];
  for (let i = 0; i < a.length; i++) {
    const w = a[i];
    if (w.startsWith('-')) {
      const eq = w.indexOf('=');
      const name = eq > 0 ? w.slice(0, eq) : w;
      if (FORBIDDEN_FLAGS.includes(name)) why.push(`forbidden flag ${name}`);
      let vals = [];
      if (eq > 0) vals = [w.slice(eq + 1)];
      else if (name === '--var') { while (a[i + 1] !== undefined && !a[i + 1].startsWith('-')) vals.push(a[++i]); }
      else if (!['--json', '--dry-run', '--remote', '--version'].includes(name) && a[i + 1] !== undefined && !a[i + 1].startsWith('-')) vals = [a[++i]];
      if (flags.has(name)) why.push(`flag ${name} given twice`);
      flags.set(name, vals);
    } else pos.push(w);
  }
  const has = (f) => flags.has(f); const val = (f) => (flags.get(f) || [])[0];
  const allowedFlags = (list) => { for (const f of flags.keys()) if (!list.includes(f) && !FORBIDDEN_FLAGS.includes(f)) why.push(`flag ${f} is not allowed here`); };
  const needConfig = () => { if (val('--config') !== 'wrangler.toml') why.push('missing --config wrangler.toml'); };
  const db = (name) => { if (name !== t.database) why.push(`database must be "${t.database}" (this track), got "${name}"`); };
  const sub = pos.join(' ');
  const cmd = pos[0] === 'd1' ? `d1 ${pos[1] || ''}` : pos[0] === 'deployments' ? `deployments ${pos[1] || ''}` : pos[0] || (has('--version') ? '--version' : '');
  const posCount = (n) => { if (pos.length !== n) why.push(`unexpected arguments: ${sub}`); };
  switch (cmd) {
    case '--version': kind = 'READ-ONLY'; posCount(0); allowedFlags(['--version']); break;
    case 'whoami': kind = 'READ-ONLY'; posCount(1); allowedFlags(['--json', '--account']); break;
    case 'd1 list': kind = 'READ-ONLY'; posCount(2); allowedFlags(['--json', '--config']); needConfig(); break;
    case 'deployments list': kind = 'READ-ONLY'; posCount(2); allowedFlags(['--name', '--json', '--config']); needConfig();
      if (val('--name') !== t.worker) why.push(`--name must be "${t.worker}"`); break;
    case 'd1 create': posCount(3); allowedFlags(['--config']); needConfig(); db(pos[2]); break;
    case 'd1 info': kind = 'READ-ONLY'; posCount(3); allowedFlags(['--json', '--config']); needConfig(); db(pos[2]); break;
    case 'd1 delete': posCount(3); allowedFlags(['--config']); needConfig(); db(pos[2]); break;
    case 'd1 execute': {
      posCount(3); allowedFlags(['--remote', '--json', '--config', '--command', '--file']); needConfig(); db(pos[2]);
      if (!has('--remote')) why.push('d1 execute requires --remote');
      if (has('--command') === has('--file')) why.push('d1 execute needs exactly one of --command / --file');
      if (has('--command')) {
        const sql = val('--command') || '';
        if (!READ_ONLY_SQL.test(sql) || WRITE_SQL.test(sql)) why.push('--command must be a single read-only SELECT'); else kind = 'READ-ONLY';
      }
      if (has('--file')) {
        const f = val('--file') || '';
        const isMarker = /(^|\/)marker\.sql$/.test(f);
        if (!t.schemaFiles.includes(f) && !isMarker) why.push(`--file must be one of this track's files (${t.schemaFiles.join(', ')}) or a marker.sql`);
        if (isMarker && readFile) {
          let text = null; try { text = readFile(f); } catch { /* not present locally: checked by the operator */ }
          if (text !== null) {
            const m = text.trim().match(/^INSERT INTO (\w+) \(label, nonce_sha256, created_at\) VALUES \('([^']+)', '([0-9a-f]{64})', (\d+)\);$/);
            if (!m || m[1] !== t.markerTable || m[2] !== t.label) why.push(`marker.sql must be one INSERT into ${t.markerTable} with label ${t.label} (wrong track's marker?)`);
          }
        }
      }
      break;
    }
    case 'deploy': {
      posCount(1); allowedFlags(['--config', '--dry-run', '--outdir', '--secrets-file', '--var']); needConfig();
      if (has('--dry-run') !== has('--outdir')) why.push('--dry-run and --outdir go together');
      if (has('--var')) {
        const v = flags.get('--var');
        if (!t.deployVars.some((ok) => ok.length === v.length && ok.every((x, i) => x === v[i]))) why.push(`--var must be one of: ${t.deployVars.map((x) => x.join(' ')).join(' | ')}`);
        if (a[a.length - 1] !== v[v.length - 1]) why.push('--var must come last');
      }
      if (has('--secrets-file') && readFile) {
        let keys = null; try { keys = Object.keys(JSON.parse(readFile(val('--secrets-file')))).sort(); } catch { /* not present locally */ }
        if (keys !== null && JSON.stringify(keys) !== JSON.stringify([t.nonceSecret, t.tokenSecret].sort())) why.push(`secrets file must hold exactly ${t.tokenSecret} and ${t.nonceSecret} (wrong track's secrets?)`);
      }
      break;
    }
    case 'delete': posCount(1); allowedFlags(['--name', '--config', '--dry-run']); needConfig();
      if (val('--name') !== t.worker) why.push(`--name must be "${t.worker}"`);
      break;   // --dry-run stays STATE-CHANGING: its API side effects are not documented (U-5)
    default: why.push(`subcommand not allowed: ${sub || '(none)'}`);
  }
  for (const f of FORBIDDEN_TARGETS) for (const w of a) if (w === f || w.split(/[=:/]/).includes(f)) why.push(`forbidden name ${f}`);
  return { ok: why.length === 0, kind, reasons: [...new Set(why)] };
}
/* Split a runbook command (inside backticks) into argv words: double-quoted segments stay one word. */
export function splitWords(cmd) { return [...cmd.matchAll(/"([^"]*)"|(\S+)/g)].map((m) => (m[1] !== undefined ? m[1] : m[2])); }
