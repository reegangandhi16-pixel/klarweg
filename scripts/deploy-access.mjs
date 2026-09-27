#!/usr/bin/env node
/* npm run deploy:access [-- --allow-cashfree-env-change=<env>] [-- --allow-ai-enabled]
   Runs the pre-deploy guard with the given allow-flags, then `wrangler deploy`
   for klarweg-access only if the guard passes. Allow-flags are never passed
   to wrangler. */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const guardArgs = args.filter((a) => a.startsWith('--allow-'));
const unknown = args.filter((a) => !a.startsWith('--allow-'));
if (unknown.length) { console.error('Unknown arguments: ' + unknown.join(' ')); process.exit(1); }

const guard = spawnSync(process.execPath, [path.join(ROOT, 'scripts/predeploy-access-check.mjs'), ...guardArgs], { stdio: 'inherit' });
if (guard.status !== 0) process.exit(guard.status || 1);
const deploy = spawnSync('npx', ['wrangler', 'deploy'], { cwd: path.join(ROOT, 'access/worker'), stdio: 'inherit' });
process.exit(deploy.status || 0);
