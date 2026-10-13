#!/usr/bin/env node
/* LOCAL-ONLY static checks of NONPROD-D1-VALIDATION-RUNBOOK.md against its own rules and the pinned git objects.
     node runbook-lint.mjs [--runbook <path>] [--repo <any checkout of the repository, for git objects>]
   Command rules (section 4, every `| C-xx |` row; only the backticked command text is checked):
     - labelled READ-ONLY | LOCAL-ONLY | STATE-CHANGING, and VERIFIED-SYNTAX or UNVERIFIED in the status column
     - pinned Wrangler (WR = npx --yes wrangler@4.150.0); --config wrangler.toml on every command except --version / whoami
     - d1 execute has --remote; d1 create|info|execute|delete name the track database, never the binding DB
     - no forbidden production name; no --yes / -y / --skip-confirmation / --update-config / --local / --preview / --route / --domain
   Procedure rules (section 5 and section 10): every row that uses a STATE-CHANGING command (except C-05, gated by S-05)
   contains an identity gate (**G**); every C-/H-/L- id used is defined in section 4.
   Repository rules: the pinned SHAs exist; the referenced files exist at their pins; each probe .gitignore ignores
   wrangler.toml; each example config passes config-gate --stage bootstrap once an account_id is added (the S-03 recipe).
   Hygiene: no 64-hex (secret-shaped) string anywhere in the runbook. Exit 0 = clean, 1 = findings (printed). */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { PINS, TRACKS, FORBIDDEN_TARGETS } from './tracks.mjs';
import { gate } from './config-gate.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const WR = 'npx --yes wrangler@4.150.0';
const STATE_IDS = ['C-05', 'C-08', 'C-09', 'C-10', 'C-12', 'C-13', 'C-14', 'C-16', 'C-17', 'C-19', 'C-20'];

export function lintRunbook(text) {
  const find = [];
  const sec = (n) => { const a = text.indexOf(`\n## ${n}.`); const b = text.indexOf('\n## ', a + 5); return a < 0 ? '' : text.slice(a, b < 0 ? undefined : b); };
  if (!text.includes(`\`${WR}\``)) find.push('section 4 must define WR as the pinned binary');
  const inv = sec(4).split('\n').filter((l) => /^\| [CLH]-\d\d \|/.test(l));
  const ids = new Set(inv.map((l) => l.split('|')[1].trim()));
  const declaredState = new Set();
  for (const row of inv) {
    const cols = row.split('|').map((c) => c.trim()); const [id, cmdCol, label, status] = [cols[1], cols[2], cols[3], cols[4]];
    if (!/READ-ONLY|LOCAL-ONLY|STATE-CHANGING/.test(label)) find.push(`${id}: no READ-ONLY / LOCAL-ONLY / STATE-CHANGING label`);
    if (/STATE-CHANGING/.test(label)) declaredState.add(id);
    if (!id.startsWith('C-')) continue;
    if (!/VERIFIED-SYNTAX|UNVERIFIED/.test(status || '')) find.push(`${id}: no VERIFIED-SYNTAX / UNVERIFIED status`);
    const spans = [...cmdCol.matchAll(/`([^`]+)`/g)].map((m) => m[1]).filter((c) => c.startsWith('WR '));
    if (!spans.length) find.push(`${id}: no WR command`);
    for (const c of spans) {
      if (!/^WR (--version|whoami)/.test(c) && !/--config wrangler\.toml/.test(c)) find.push(`${id}: missing --config wrangler.toml`);
      if (/\bd1 execute\b/.test(c) && !/--remote\b/.test(c)) find.push(`${id}: d1 execute without --remote`);
      const m = c.match(/\bd1 (create|info|execute|delete) (\S+)/);
      if (m && m[2] !== TRACKS.idem.database) find.push(`${id}: d1 ${m[1]} must name ${TRACKS.idem.database} (Track 1 shown), got ${m[2]}`);
      for (const bad of ['--yes', ' -y', '--skip-confirmation', '--update-config', '--local', '--preview', '--route', '--domain', '--binding'])
        if (c.includes(bad)) find.push(`${id}: forbidden flag ${bad.trim()}`);
      for (const f of FORBIDDEN_TARGETS) if (new RegExp(`(^|[\\s=/])${f}(?![-\\w])`).test(c)) find.push(`${id}: forbidden name ${f}`);
    }
  }
  for (const s of STATE_IDS) if (!declaredState.has(s)) find.push(`${s} must be labelled STATE-CHANGING`);
  const procRows = [...sec(5).split('\n').filter((l) => /^\| S-\d\d \|/.test(l)), ...sec(10).split('\n').filter((l) => /^\d\. /.test(l))];
  for (const row of procRows) {
    const used = [...row.matchAll(/\*\*([CLH]-\d\d)\*\*/g)].map((m) => m[1]);
    for (const u of used) if (!ids.has(u)) find.push(`procedure uses undefined ${u}: ${row.slice(0, 40)}`);
    const needsGate = used.filter((u) => STATE_IDS.includes(u) && u !== 'C-05');
    if (needsGate.length && !row.includes('**G**')) find.push(`no identity gate (**G**) before ${needsGate.join(', ')}: ${row.slice(0, 60)}`);
  }
  for (const [k, sha] of Object.entries({ idem: PINS.idem, tooling: PINS.idemTooling, v10: PINS.v10 })) if (!text.includes(sha)) find.push(`pinned ${k} commit ${sha} not stated`);
  const hex64 = text.match(/\b[0-9a-f]{64}\b/gi); if (hex64) find.push(`secret-shaped 64-hex string(s) present: ${hex64.length}`);
  if (!/STATUS: NOT EXECUTED/.test(text)) find.push('the NOT EXECUTED banner is missing');
  return find;
}
export function lintRepo(repo) {
  const find = []; const git = (...a) => execFileSync('git', ['-C', repo, ...a], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  const exists = (sha, p) => { try { git('cat-file', '-e', `${sha}:${p}`); return true; } catch { return false; } };
  for (const sha of Object.values(PINS)) { try { git('cat-file', '-e', `${sha}^{commit}`); } catch { find.push(`pinned commit ${sha} not found (git fetch the PR refs)`); } }
  const files = {
    [PINS.idemTooling]: ['exam-worker/migrations/0001_exam_init.sql', 'exam-worker/migrations/0002_idempotency_claims.sql', ...['probe-schema.sql', 'worker-free.mjs', 'run-idem-free.mjs', 'wrangler.free.example.toml', '.gitignore'].map((f) => `${TRACKS.idem.dir}/${f}`)],
    [PINS.v10]: ['probe-schema.sql', 'worker.mjs', 'run-v10.mjs', 'run-v10-ambiguous.mjs', 'wrangler.example.toml', '.gitignore'].map((f) => `${TRACKS.v10.dir}/${f}`)
  };
  for (const [sha, list] of Object.entries(files)) for (const f of list) if (!exists(sha, f)) find.push(`${f} missing at ${sha.slice(0, 7)}`);
  try { if (git('diff', '--name-only', PINS.idem, PINS.idemTooling, '--', 'exam-worker/src', 'exam-worker/migrations', 'exam').trim()) find.push('engine/migrations/client differ between the PR #71 pin and the PR #73 pin'); } catch { find.push('could not diff the PR #71 and PR #73 pins'); }
  for (const [track, sha] of [['idem', PINS.idemTooling], ['v10', PINS.v10]]) {
    const t = TRACKS[track];
    try {
      if (!git('show', `${sha}:${t.dir}/.gitignore`).split('\n').includes('wrangler.toml')) find.push(`${t.dir}/.gitignore does not ignore wrangler.toml`);
      const example = git('show', `${sha}:${t.dir}/${t.configExample}`).replace(/^(compatibility_date\s*=.*)$/m, `$1\naccount_id = "${'0'.repeat(32)}"`);
      const g = gate({ track, configText: example, stage: 'bootstrap' });
      if (!g.pass) find.push(`${t.configExample} + account_id does not pass the bootstrap gate: ${g.reasons.join('; ')}`);
    } catch (e) { find.push(`${track}: ${e.message}`); }
  }
  return find;
}
if (import.meta.url === `file://${process.argv[1]}`) {
  const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i > 0 ? process.argv[i + 1] : d; };
  const text = fs.readFileSync(arg('runbook', path.join(HERE, '..', 'NONPROD-D1-VALIDATION-RUNBOOK.md')), 'utf8');
  const findings = [...lintRunbook(text), ...lintRepo(arg('repo', path.join(HERE, '..')))];
  console.log(findings.length ? findings.map((f) => `FINDING: ${f}`).join('\n') : 'runbook-lint: clean');
  process.exit(findings.length ? 1 : 0);
}
