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
        --allow-speech=<allowlist|entitled> names the mode explicitly.
     5. Speech scope: SPEECH_SCOPE may only hold "all" or level codes
        (a1…c2); SPEECH_CHAPTERS / SPEECH_CHAPTERS_EXCLUDE may only hold
        ids of chapter pages that exist. Anything wider than the original
        "a1-1-alphabet" list needs --allow-speech-scope=<SPEECH_SCOPE>, or
        --allow-speech-scope=list when only the explicit list is wider.
     6. SPEECH_TASK_DAILY_CHECKS (checks per Speaking task per day) may
        only be 1, 2 or 3.
     7. No [env.*] sections and no CORS_EXTRA_ORIGINS: non-production
        settings live in access/worker/wrangler.nonprod.toml only.
     8. CONSULT_BOOKING (same-day consultation booking) must be "off"
        unless --allow-consult-booking=<sandbox|live> names the mode;
        "sandbox" needs CASHFREE_ENV="sandbox", "live" needs "production".
        CONSULT_TEACHERS may only name eligible teachers who are published
        on the Live Classes page (live-classes-data.js).

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
const allowConsult = (args.find((a) => a.startsWith('--allow-consult-booking=')) || '').split('=')[1] || null;
const allowScope = (args.find((a) => a.startsWith('--allow-speech-scope=')) || '').split('=')[1] || null;

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
const csv = (v) => String(v || '').split(',').map((x) => x.trim().toLowerCase()).filter(Boolean);
const speechScope = csv(varOf(toml, 'SPEECH_SCOPE'));
const speechChapters = varOf(toml, 'SPEECH_CHAPTERS') == null ? ['a1-1-alphabet'] : csv(varOf(toml, 'SPEECH_CHAPTERS'));
const speechExclude = csv(varOf(toml, 'SPEECH_CHAPTERS_EXCLUDE'));
const pageExists = (id) => /^(a1|a2|b1|b2|c1|c2)-[0-9]{1,2}(?:-[a-z0-9]+)*$/.test(id) && fs.existsSync(path.join(ROOT, 'chapter', 'chapter-' + id + '.html'));

if (env !== 'sandbox' && env !== 'production') fail(`CASHFREE_ENV in wrangler.toml is "${env}" — must be "sandbox" or "production".`);
const isTest = /^TEST/i.test(appId);
if (env === 'sandbox' && !isTest) fail('wrangler.toml pairs CASHFREE_ENV="sandbox" with a LIVE app id.');
if (env === 'production' && isTest) fail('wrangler.toml pairs CASHFREE_ENV="production" with a sandbox (TEST) app id.');
if (/CASHFREE_SECRET_KEY\s*=|_API_KEY\s*=/.test(toml)) fail('wrangler.toml appears to contain a secret. Secrets belong in `wrangler secret put`, never in the file.');
if (!['off', 'allowlist', 'entitled'].includes(speech)) fail(`SPEECH_MODE in wrangler.toml is "${speech}" — must be "off", "allowlist" or "entitled".`);
if (speech !== 'off' && allowSpeech !== speech) fail(`SPEECH_MODE="${speech}" in wrangler.toml. Enable the speech check deliberately with --allow-speech=${speech}.`);
const badScope = speechScope.filter((x) => !['all', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2'].includes(x));
if (badScope.length) fail(`SPEECH_SCOPE contains "${badScope.join(', ')}" — only "all" or level codes a1, a2, b1, b2, c1, c2.`);
const badIds = speechChapters.concat(speechExclude).filter((id) => !pageExists(id));
if (badIds.length) fail(`SPEECH_CHAPTERS / SPEECH_CHAPTERS_EXCLUDE name no existing chapter page: ${badIds.join(', ')}.`);
const wider = speechScope.length > 0 || speechChapters.some((id) => id !== 'a1-1-alphabet');
const scopeKey = speechScope.length ? speechScope.join(',') : 'list';
if (wider && allowScope !== scopeKey) fail(`the speech scope is wider than A1·01 (SPEECH_SCOPE="${speechScope.join(',')}", ${speechChapters.length} listed chapter(s)). Widen it deliberately with --allow-speech-scope=${scopeKey}.`);
const taskCap = varOf(toml, 'SPEECH_TASK_DAILY_CHECKS');
if (taskCap !== null && !/^[1-3]$/.test(taskCap)) fail(`SPEECH_TASK_DAILY_CHECKS="${taskCap}" — the per-task daily cap must be 1, 2 or 3.`);
if (ai === 'true' && !allowAi) fail('AI_ENABLED="true" in wrangler.toml. Enable Klarweg AI deliberately with --allow-ai-enabled once the provider is chosen and the tutor Worker has its key.');
const consult = (varOf(toml, 'CONSULT_BOOKING') || 'off').toLowerCase();
const consultTeachers = String(varOf(toml, 'CONSULT_TEACHERS') || '').split(',').map((x) => x.trim()).filter(Boolean);
if (!['off', 'sandbox', 'live'].includes(consult)) fail(`CONSULT_BOOKING in wrangler.toml is "${consult}" — must be "off", "sandbox" or "live".`);
if (consult !== 'off' && allowConsult !== consult) fail(`CONSULT_BOOKING="${consult}" in wrangler.toml. Enable consultation booking deliberately with --allow-consult-booking=${consult}.`);
if (consult === 'sandbox' && env !== 'sandbox') fail('CONSULT_BOOKING="sandbox" needs CASHFREE_ENV="sandbox".');
if (consult === 'live' && env !== 'production') fail('CONSULT_BOOKING="live" needs CASHFREE_ENV="production" — never take live bookings through sandbox.');
if (consultTeachers.length) {
  const { ELIGIBLE_TEACHERS } = await import('../access/worker/src/consultations.js');
  const published = await import('./live-classes-readiness.mjs').then((m) => m.publishedTeacherIds());
  const bad = consultTeachers.filter((id) => !ELIGIBLE_TEACHERS.includes(id) || !published.includes(id));
  if (bad.length) fail(`CONSULT_TEACHERS names ${bad.join(', ')}: only eligible teachers (${ELIGIBLE_TEACHERS.join(', ')}) whose profile is published may be bookable.`);
}
/* Non-production settings stay in wrangler.nonprod.toml (docs/exam/NONPROD-SETUP.md).
   An [env.*] section here would put a second set of vars in this file, which the
   first-match reads above could pick up; CORS_EXTRA_ORIGINS widens CORS/CSRF. */
/* Matched outside comments and in any TOML spelling: [ env.x ], ["env".x], "CORS_EXTRA_ORIGINS" = …, vars.CORS_EXTRA_ORIGINS = … */
const tomlCode = toml.replace(/#.*$/gm, '');
if (/^\s*\[\[?\s*["']?env["']?\s*\./m.test(tomlCode)) fail('wrangler.toml contains an [env.*] section. Non-production settings belong in access/worker/wrangler.nonprod.toml, never in the production file.');
if (/CORS_EXTRA_ORIGINS["']?\s*=/.test(tomlCode)) fail('wrangler.toml sets CORS_EXTRA_ORIGINS. Extra CORS origins are for the isolated non-production Worker only (wrangler.nonprod.toml).');

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

console.log(`✔ predeploy-access-check: Cashfree ${env} (live: ${live}), app id ${isTest ? 'TEST…' : 'live…'}, AI_ENABLED=${ai}, SPEECH_MODE=${speech}, CONSULT_BOOKING=${consult}, scope "${speechScope.join(',')}" + ${speechChapters.length} listed − ${speechExclude.length} excluded.`);
