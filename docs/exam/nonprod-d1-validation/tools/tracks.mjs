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
    probeTables: ['idem_probe_marker', 'idem_probe_state', 'idem_probe_effects', 'request_log', 'idempotency_assertions']
  },
  v10: {
    dir: 'exam-worker/verification/v10-probe', configExample: 'wrangler.example.toml', worker: 'klarweg-exam-v10-probe',
    database: 'klarweg-exam-v10-probe', label: 'nonprod-v10-probe-1', markerTable: 'v10_probe_marker',
    tokenSecret: 'V10_PROBE_TOKEN', nonceSecret: 'V10_PROBE_DB_NONCE', tokenHeader: 'x-v10-token', switchVar: 'V10_PROBE',
    runnerEnv: { base: 'V10_BASE_URL', token: 'V10_TOKEN' },
    verifyPath: '/v10/verify', writeProbePath: (run) => `/v10/prepare-claim?run=${run}`,
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
