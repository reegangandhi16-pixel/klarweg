// Klarweg fail-closed Google Cloud billing guard (repo copy of ~/.config/klarweg/gcp-guard.mjs, 2026-11-24).
// Account/project/billing come ONLY from the private local file ~/.config/klarweg/gcp.env (never committed).
// Usage in a script:   import { gcpGuard } from "../lib/gcp-guard.mjs";
//                      const g = gcpGuard();  // throws unless everything matches
//                      fetch(url, { headers: { Authorization: 'Bearer ' + g.token(), 'x-goog-user-project': g.project } })
// CLI:  node ~/.config/klarweg/gcp-guard.mjs [project]   → prints status, exit 1 on any mismatch.
// Checks (all must pass, otherwise NO token is issued):
//   1. ~/.config/klarweg/gcp.env exists and defines account + project
//   2. requested project (if any) == configured project and is not on the denylist
//   3. active gcloud account == configured account
//   4. active gcloud project == configured project
//   5. ADC quota_project_id == configured project
//   6. the project is linked to the configured billing account, billing enabled
// Tokens are always minted with --account <configured account>, never the "active" one.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const CONF = path.join(os.homedir(), '.config/klarweg/gcp.env');
const ADC = path.join(os.homedir(), '.config/gcloud/application_default_credentials.json');

export function loadGcpConfig() {
  let txt;
  try { txt = readFileSync(CONF, 'utf8'); } catch { throw new Error(`GCP guard: missing ${CONF} — refusing (fail-closed)`); }
  const c = Object.fromEntries(txt.split('\n').filter(l => /^\s*[A-Z_]+=/.test(l)).map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
  const conf = { account: c.KLARWEG_GCP_ACCOUNT, project: c.KLARWEG_GCP_PROJECT, projectNum: c.KLARWEG_GCP_PROJECT_NUM, billing: c.KLARWEG_GCP_BILLING, deny: (c.KLARWEG_GCP_DENY || '').split(',').map(s => s.trim()).filter(Boolean) };
  if (!conf.account || !conf.project || !conf.billing) throw new Error('GCP guard: gcp.env incomplete — refusing');
  return conf;
}

const gc = (...a) => execFileSync('gcloud', a, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();

export function gcpGuard(requestedProject, { checkBilling = true } = {}) {
  const c = loadGcpConfig();
  const fail = (m) => { throw new Error(`GCP guard REFUSED: ${m}`); };
  const want = requestedProject || c.project;
  if (c.deny.includes(want)) fail(`project ${want} is on the old-account denylist`);
  if (want !== c.project && want !== c.projectNum) fail(`project ${want} != configured ${c.project}`);
  const acct = gc('config', 'get-value', 'account');
  if (acct !== c.account) fail(`active gcloud account is ${acct || '(none)'}, expected the configured account`);
  const proj = gc('config', 'get-value', 'project');
  if (proj !== c.project) fail(`active gcloud project is ${proj || '(none)'}, expected ${c.project}`);
  let quota = null; try { quota = JSON.parse(readFileSync(ADC, 'utf8')).quota_project_id || null; } catch {}
  if (quota !== c.project) fail(`ADC quota project is ${quota}, expected ${c.project}`);
  if (checkBilling) {
    const b = gc('billing', 'projects', 'describe', c.project, '--account', c.account, '--format=value(billingAccountName,billingEnabled)');
    if (!b.includes(c.billing) || !/True/.test(b)) fail(`billing for ${c.project} is "${b}", expected ${c.billing} enabled`);
  }
  let tok = null, at = 0;
  const token = (force) => { if (force || !tok || Date.now() - at > 20 * 60e3) { tok = gc('auth', 'print-access-token', '--account', c.account); at = Date.now(); } return tok; };
  return { project: c.project, projectNum: c.projectNum, account: c.account, billing: c.billing, token };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { const g = gcpGuard(process.argv[2]); g.token(); console.log(`GCP guard OK — account=${g.account} project=${g.project} quota=${g.project} billing=${g.billing}`); }
  catch (e) { console.error(e.message); process.exit(1); }
}
