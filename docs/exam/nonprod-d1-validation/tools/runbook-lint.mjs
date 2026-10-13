#!/usr/bin/env node
/* LOCAL-ONLY static checks of NONPROD-D1-VALIDATION-RUNBOOK.md against its own rules and the pinned git objects.
     node runbook-lint.mjs [--runbook <path>] [--repo <any checkout of the repository, for git objects>]
   Command tables (section 4.1 = Track 1 / idem, section 4.2 = Track 2 / v10):
     - every C-row: its backticked command passes checkCommand(track) (tracks.mjs) — literal database / Worker names of
       THAT track, allowed flags and files, pinned binary, --config, --remote; its label equals the kind checkCommand
       derives (READ-ONLY only for documented reads);
     - the two tables carry the same C-ids, except C-09/C-10 (Track 1 only) and C-17 (Track 2 only); no other track's
       database or Worker name appears anywhere in a table;
     - L-01/L-02/L-03: the exact helper and gate invocations for that track (L-02 --stage bootstrap; L-03 --stage bound
       --d1-info <PRIVATE>/d1-info.json; both --auth <AUTH> and `-- <exact command>`);
     - H-rows: `--track <that track>`, the track's own workers.dev host, and a runner of that track.
   Procedure (sections 5 and 10): every row or step that uses a STATE-CHANGING C-id (except the C-06 bootstrap steps,
   which carry G as well) contains **G**; every id used is defined; the G definition names L-02, L-03, C-07 and
   `--stage bound --d1-info`. Status table: every C-id has VERIFIED-SYNTAX or UNVERIFIED.
   Repository: the pinned SHAs exist; referenced files exist at their pins; the PR #71 and PR #73 engines are identical;
   each probe .gitignore ignores wrangler.toml; each example config + account_id passes the bootstrap gate.
   Hygiene: no 64-hex string; the NOT EXECUTED banner. Exit 0 = clean, 1 = findings (printed). */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { PINS, TRACKS, checkCommand, splitWords } from './tracks.mjs';
import { gate } from './config-gate.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const TRACK_ONLY = { 'C-09': 'idem', 'C-10': 'idem', 'C-17': 'v10' };
const OTHER = { idem: 'v10', v10: 'idem' };
const block = (text, start, end) => { const a = text.indexOf(start); if (a < 0) return ''; const b = text.indexOf(end, a + start.length); return text.slice(a, b < 0 ? undefined : b); };
const rowsOf = (sec) => sec.split('\n').filter((l) => /^\| [CLH]-\d\d \|/.test(l)).map((l) => { const c = l.split('|').map((x) => x.trim()); return { id: c[1], cmdCol: c[2], label: c[3], raw: l }; });
const spans = (s) => [...s.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
const stripRedirect = (cmd) => cmd.replace(/\s+>\s+\S+$/, '');

export function lintRunbook(text) {
  const find = [];
  const tables = { idem: rowsOf(block(text, '### 4.1 ', '\n### 4.2 ')), v10: rowsOf(block(text, '### 4.2 ', '\n## 5.')) };
  const status = block(text, '\n## 4. ', '### 4.1 ');
  for (const track of ['idem', 'v10']) {
    const t = TRACKS[track], o = TRACKS[OTHER[track]], rows = tables[track];
    if (!rows.length) { find.push(`section 4.${track === 'idem' ? 1 : 2} has no command table`); continue; }
    for (const r of rows) {
      if (!/^(READ-ONLY|LOCAL-ONLY|STATE-CHANGING)$/.test(r.label)) find.push(`${track} ${r.id}: label must be exactly READ-ONLY, LOCAL-ONLY or STATE-CHANGING`);
      for (const n of [o.database, o.worker]) if (r.raw.includes(n)) find.push(`${track} ${r.id}: names the other track's ${n}`);
      const cmds = spans(r.cmdCol);
      if (cmds.length !== 1) { find.push(`${track} ${r.id}: exactly one backticked command expected`); continue; }
      const cmd = stripRedirect(cmds[0]);
      if (r.id.startsWith('C-')) {
        const c = checkCommand(track, splitWords(cmd));
        if (!c.ok) find.push(`${track} ${r.id}: ${c.reasons.join('; ')}`);
        if (c.kind !== r.label) find.push(`${track} ${r.id}: labelled ${r.label} but the command is ${c.kind}`);
        if (TRACK_ONLY[r.id] && TRACK_ONLY[r.id] !== track) find.push(`${track} ${r.id}: belongs to the other track only`);
        if (!new RegExp(`^\\| ${r.id}(,|\\s|\\|)|, ${r.id}(,|\\s)`, 'm').test(status) || !new RegExp(`${r.id}[^\\n]*(VERIFIED-SYNTAX|UNVERIFIED)`).test(status)) find.push(`${r.id}: no VERIFIED-SYNTAX / UNVERIFIED status`);
      } else if (r.id === 'L-01') {
        if (cmd !== `node <TOOLS>/prepare-probe-secrets.mjs --track ${track} --dir <PRIVATE>`) find.push(`${track} L-01: must be the secrets preparation for --track ${track}`);
      } else if (r.id === 'L-02') {
        if (cmd !== `node <TOOLS>/config-gate.mjs --track ${track} --config wrangler.toml --stage bootstrap --auth <AUTH> -- <exact command>`) find.push(`${track} L-02: must be the bootstrap gate for --track ${track}`);
      } else if (r.id === 'L-03') {
        if (cmd !== `node <TOOLS>/config-gate.mjs --track ${track} --config wrangler.toml --stage bound --auth <AUTH> --d1-info <PRIVATE>/d1-info.json -- <exact command>`) find.push(`${track} L-03: must be the bound gate (fresh --d1-info) for --track ${track}`);
      } else if (r.id.startsWith('H-')) {
        const w = splitWords(cmd);
        if (w[0] !== 'node' || !/^<TOOLS>\/(qualify-check|with-probe-env)\.mjs$/.test(w[1] || '')) find.push(`${track} ${r.id}: must run qualify-check.mjs or with-probe-env.mjs`);
        if (w[w.indexOf('--track') + 1] !== track || w.indexOf('--track') < 0) find.push(`${track} ${r.id}: --track must be ${track}`);
        if (w[w.indexOf('--base') + 1] !== `https://${t.worker}.<SUBDOMAIN>.workers.dev`) find.push(`${track} ${r.id}: --base must be https://${t.worker}.<SUBDOMAIN>.workers.dev`);
        const sep = w.indexOf('--');
        if (w[1].endsWith('with-probe-env.mjs') && !(sep > 0 && w[sep + 1] === 'node' && t.runners.includes(w[sep + 2]))) find.push(`${track} ${r.id}: runner must be one of ${t.runners.join(', ')}`);
        if (r.label !== (w[1].endsWith('qualify-check.mjs') ? 'READ-ONLY' : 'STATE-CHANGING')) find.push(`${track} ${r.id}: wrong label`);
      }
    }
  }
  const ids = (track) => new Set(tables[track].filter((r) => r.id.startsWith('C-')).map((r) => r.id));
  const all = new Set([...ids('idem'), ...ids('v10')]);
  for (const id of all) for (const track of ['idem', 'v10']) if (!ids(track).has(id) && TRACK_ONLY[id] !== OTHER[track]) find.push(`${id} missing from the ${track} table`);
  const stateIds = new Set(tables.idem.concat(tables.v10).filter((r) => r.id.startsWith('C-') && r.label === 'STATE-CHANGING').map((r) => r.id));
  const proc = block(text, '\n## 5. ', '\n## 6.'), teardown = block(text, '\n## 10. ', '\n## 11.');
  if (!/\*\*G, exactly\.\*\*/.test(proc) || !/\*\*L-02\*\*/.test(proc) || !/\*\*L-03\*\*/.test(proc) || !/\*\*C-07\*\*/.test(proc)) find.push('section 5 must define G exactly (L-02 bootstrap; C-07 then L-03 bound)');
  const rows = [...proc.split('\n').filter((l) => /^\| S-\d\d \|/.test(l)), ...teardown.split('\n').filter((l) => /^\d\. /.test(l))];
  const defined = new Set([...all, ...['L-01', 'L-02', 'L-03'], ...tables.idem.concat(tables.v10).filter((r) => r.id.startsWith('H-')).map((r) => r.id)]);
  for (const row of rows) {
    const used = [...row.matchAll(/\*\*([CLH]-\d\d)\*\*/g)].map((m) => m[1]);
    for (const u of used) if (!defined.has(u)) find.push(`procedure uses undefined ${u}: ${row.slice(0, 40)}`);
    const needsGate = used.filter((u) => stateIds.has(u));
    if (needsGate.length && !row.includes('**G**')) find.push(`no identity gate (**G**) with ${needsGate.join(', ')}: ${row.slice(0, 60)}`);
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
    [PINS.idemTooling]: ['exam-worker/migrations/0001_exam_init.sql', 'exam-worker/migrations/0002_idempotency_claims.sql', 'exam-worker/verification/idempotency-d1/budget.mjs',
      ...['probe-schema.sql', 'worker-free.mjs', 'run-idem-free.mjs', 'wrangler.free.example.toml', '.gitignore'].map((f) => `${TRACKS.idem.dir}/${f}`)],
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
