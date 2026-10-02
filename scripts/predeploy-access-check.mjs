#!/usr/bin/env node
/* ============================================================
   KLARWEG · klarweg-access PRE-DEPLOY GUARD
   ------------------------------------------------------------
   `wrangler deploy` replaces the live Worker's [vars] with the ones
   in access/worker/wrangler.toml. If production is ever switched to
   live Cashfree in wrangler.toml on one machine and a stale sandbox
   copy is deployed from another, payments would silently move back
   to sandbox (or the reverse). This guard makes that impossible to
   do by accident:

     1. wrangler.toml's CASHFREE_ENV and CASHFREE_APP_ID must agree
        (sandbox ⇔ app id starting "TEST").
     2. The live Worker's reported environment (GET /) must equal
        wrangler.toml's CASHFREE_ENV — unless the operator passes
        --allow-cashfree-env-change=<sandbox|production> naming the
        target explicitly.
     3. AI_ENABLED in wrangler.toml must be "false" unless
        --allow-ai-enabled is passed.
     4. SPEECH_MODE (Record & Check transcription) must be "off" unless
        --allow-speech=<allowlist|entitled> names the mode explicitly,
        and SPEECH_CHAPTERS must stay "a1-1-alphabet" (A1·01 only).

   Usage (from the repo root):
     node scripts/predeploy-access-check.mjs
     npm run deploy:access            # runs this, then wrangler deploy
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TOML = path.join(ROOT, 'access', 'worker', 'wrangler.toml');
const LIVE_URL = process.env.KW_ACCESS_LIVE_URL || 'https://klarweg-access.klarweg-issue-reports-2026.workers.dev/';

const args = process.argv.slice(2);
const allowEnv = (args.find((a) => a.startsWith('--allow-cashfree-env-change=')) || '').split('=')[1] || null;
const allowAi = args.includes('--allow-ai-enabled');
const allowSpeech = (args.find((a) => a.startsWith('--allow-speech=')) || '').split('=')[1] || null;

function varOf(toml, name) {
  const m = toml.match(new RegExp('^\\s*' + name + '\\s*=\\s*"([^"]*)"', 'm'));
  return m ? m[1] : null;
}

function fail(msg) {
  console.error('\n✖ predeploy-access-check: ' + msg + '\n  Deployment stopped. Nothing was changed.\n');
  process.exit(1);
}

const toml = fs.readFileSync(TOML, 'utf8');
const env = varOf(toml, 'CASHFREE_ENV');
const appId = varOf(toml, 'CASHFREE_APP_ID') || '';
const ai = (varOf(toml, 'AI_ENABLED') || 'false').toLowerCase();
const speech = (varOf(toml, 'SPEECH_MODE') || 'off').toLowerCase();
const speechChapters = varOf(toml, 'SPEECH_CHAPTERS') || 'a1-1-alphabet';

if (env !== 'sandbox' && env !== 'production') fail(`CASHFREE_ENV in wrangler.toml is "${env}" — must be "sandbox" or "production".`);
const isTest = /^TEST/i.test(appId);
if (env === 'sandbox' && !isTest) fail('wrangler.toml pairs CASHFREE_ENV="sandbox" with a LIVE app id.');
if (env === 'production' && isTest) fail('wrangler.toml pairs CASHFREE_ENV="production" with a sandbox (TEST) app id.');
if (/CASHFREE_SECRET_KEY\s*=|_API_KEY\s*=/.test(toml)) fail('wrangler.toml appears to contain a secret. Secrets belong in `wrangler secret put`, never in the file.');
if (!['off', 'allowlist', 'entitled'].includes(speech)) fail(`SPEECH_MODE in wrangler.toml is "${speech}" — must be "off", "allowlist" or "entitled".`);
if (speech !== 'off' && allowSpeech !== speech) fail(`SPEECH_MODE="${speech}" in wrangler.toml. Enable the speech check deliberately with --allow-speech=${speech}.`);
if (speechChapters !== 'a1-1-alphabet') fail(`SPEECH_CHAPTERS="${speechChapters}" — the speech check is A1·01-only ("a1-1-alphabet") until it is validated.`);
if (ai === 'true' && !allowAi) fail('AI_ENABLED="true" in wrangler.toml. Enable Klarweg AI deliberately with --allow-ai-enabled once the provider is chosen and the tutor Worker has its key.');

let live;
try {
  const res = await fetch(LIVE_URL, { headers: { accept: 'application/json' } });
  live = (await res.json()).environment;
} catch (e) {
  fail(`could not read the live Worker's environment from ${LIVE_URL} (${e.message}). Refusing to deploy blind.`);
}

if (live !== env) {
  if (allowEnv !== env) {
    fail(`live klarweg-access runs Cashfree "${live}", wrangler.toml says "${env}". ` +
      `If this change is intended, re-run with --allow-cashfree-env-change=${env}.`);
  }
  console.warn(`! Cashfree environment will change: ${live} → ${env} (explicitly allowed).`);
}

console.log(`✔ predeploy-access-check: Cashfree ${env} (live: ${live}), app id ${isTest ? 'TEST…' : 'live…'}, AI_ENABLED=${ai}, SPEECH_MODE=${speech} (${speechChapters}).`);
