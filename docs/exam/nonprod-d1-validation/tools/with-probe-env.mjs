#!/usr/bin/env node
/* LOCAL-ONLY. Runs a probe runner with the probe URL and token in ITS environment only — the token is read from the
   private secrets.json and never appears on a command line, in shell history or in output.
     node with-probe-env.mjs --track idem|v10 --secrets <dir>/secrets.json --base https://<worker>.<subdomain>.workers.dev -- <command...>
   The base URL must be the track's own workers.dev host (checkBaseUrl). Exit code = the command's exit code. */
import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
import { trackOf, checkBaseUrl } from './tracks.mjs';

export function runnerEnv({ track, secretsFile, base }) {
  const t = trackOf(track);
  if ((fs.statSync(secretsFile).mode & 0o077) !== 0) throw new Error('secrets file must be mode 600');
  const s = JSON.parse(fs.readFileSync(secretsFile, 'utf8'));
  const token = s[t.tokenSecret];
  if (typeof token !== 'string' || token.length < 32) throw new Error(`${t.tokenSecret} missing or shorter than 32 characters in the secrets file`);
  return { [t.runnerEnv.base]: checkBaseUrl(track, base), [t.runnerEnv.token]: token };
}
if (import.meta.url === `file://${process.argv[1]}`) {
  const sep = process.argv.indexOf('--');
  const arg = (k) => { const i = process.argv.indexOf(`--${k}`); return i > 0 && (sep < 0 || i < sep) ? process.argv[i + 1] : undefined; };
  try {
    if (sep < 0 || sep === process.argv.length - 1) throw new Error('usage: … -- <command...>');
    const env = runnerEnv({ track: arg('track'), secretsFile: arg('secrets'), base: arg('base') });
    const [cmd, ...args] = process.argv.slice(sep + 1);
    const r = spawnSync(cmd, args, { stdio: 'inherit', env: { ...process.env, ...env } });
    process.exit(r.status === null ? 1 : r.status);
  } catch (e) { console.error(`REFUSED: ${e.message}`); process.exit(2); }
}
