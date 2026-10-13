#!/usr/bin/env node
/* LOCAL-ONLY. Generates one track's probe secrets into a PRIVATE directory, never printing them.
     node prepare-probe-secrets.mjs --track idem|v10 --dir <private directory, mode 0700, outside any git work tree>
   Writes (mode 0600, refuses to overwrite):
     secrets.json   {"<TOKEN SECRET>": "...", "<NONCE SECRET>": "..."}  — for `wrangler deploy --secrets-file` (JSON form,
                    documented for `secret bulk` / `--secrets-file`), so no value ever passes through a shell pipe or echo
                    and no trailing newline can be added
     marker.sql     the single marker INSERT: (label, sha256 hex of the nonce exactly as stored in secrets.json, created_at)
   Prints only: track, file paths, label, nonce_sha256 (the hash is not secret; the probe only stores the hash). */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { trackOf } from './tracks.mjs';

export function insideGitWorkTree(dir) {
  for (let d = path.resolve(dir); ; d = path.dirname(d)) { if (fs.existsSync(path.join(d, '.git'))) return true; if (path.dirname(d) === d) return false; }
}
export function prepareSecrets({ track, dir, now = Date.now(), random = (n) => crypto.randomBytes(n) }) {
  const t = trackOf(track);
  if (!dir || !fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) throw new Error('--dir must be an existing directory');
  if ((fs.statSync(dir).mode & 0o077) !== 0) throw new Error('--dir must be private (chmod 700): group/other permissions found');
  if (insideGitWorkTree(dir)) throw new Error('--dir is inside a git work tree: secrets could be committed; use a directory outside every repository');
  const files = { secrets: path.join(dir, 'secrets.json'), marker: path.join(dir, 'marker.sql') };
  for (const f of Object.values(files)) if (fs.existsSync(f)) throw new Error(`${path.basename(f)} already exists: refusing to overwrite (new secrets need a fresh directory)`);
  const token = random(32).toString('hex'), nonce = random(32).toString('hex');   // 64 lowercase hex chars each (≥ 32 required)
  if (token === nonce) throw new Error('token and nonce must differ');
  const nonceSha256 = crypto.createHash('sha256').update(nonce, 'utf8').digest('hex');
  fs.writeFileSync(files.secrets, JSON.stringify({ [t.tokenSecret]: token, [t.nonceSecret]: nonce }, null, 2) + '\n', { mode: 0o600, flag: 'wx' });
  const sql = `INSERT INTO ${t.markerTable} (label, nonce_sha256, created_at) VALUES ('${t.label}', '${nonceSha256}', ${Math.trunc(now)});\n`;
  fs.writeFileSync(files.marker, sql, { mode: 0o600, flag: 'wx' });
  return { track, files, label: t.label, nonce_sha256: nonceSha256 };
}
if (import.meta.url === `file://${process.argv[1]}`) {
  const arg = (k) => { const i = process.argv.indexOf(`--${k}`); return i > 0 ? process.argv[i + 1] : undefined; };
  try { console.log(JSON.stringify(prepareSecrets({ track: arg('track'), dir: arg('dir') }), null, 2)); }
  catch (e) { console.error(`REFUSED: ${e.message}`); process.exit(2); }
}
