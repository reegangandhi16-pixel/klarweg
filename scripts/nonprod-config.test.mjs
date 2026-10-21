/* NON-PRODUCTION CONFIG ISOLATION (docs/exam/NONPROD-SETUP.md).
   exam-worker/wrangler.nonprod.toml and access/worker/wrangler.nonprod.toml
   must never reach a production resource, never enable anything that costs
   money or touches learners, and never hold a secret. The production
   wrangler.toml files must stay free of non-prod settings, and the Access
   pre-deploy guard must refuse them if someone adds them. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parseExtraOrigins } from '../access/worker/src/cors.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const PROD_EXAM = read('exam-worker/wrangler.toml');
const PROD_ACCESS = read('access/worker/wrangler.toml');
const NP_EXAM = read('exam-worker/wrangler.nonprod.toml');
const NP_ACCESS = read('access/worker/wrangler.nonprod.toml');

const strip = (toml) => toml.replace(/#.*$/gm, '');
const val = (toml, key) => { const m = strip(toml).match(new RegExp('^\\s*' + key + '\\s*=\\s*"([^"]*)"', 'm')); return m ? m[1] : null; };
const vals = (toml, key) => [...strip(toml).matchAll(new RegExp('^\\s*' + key + '\\s*=\\s*"([^"]*)"', 'gm'))].map((m) => m[1]);
const bare = (toml, key) => { const m = strip(toml).match(new RegExp('^\\s*' + key + '\\s*=\\s*([a-z]+)\\s*$', 'm')); return m ? m[1] : null; };
const PLACEHOLDER = '00000000-0000-0000-0000-000000000000';

/* Every production identifier a non-prod file must never mention. */
function prodIdentifiers() {
  const ids = new Set();
  for (const t of [PROD_EXAM, PROD_ACCESS]) {
    for (const k of ['name', 'database_name', 'bucket_name', 'service', 'CASHFREE_APP_ID', 'GOOGLE_CLIENT_ID']) for (const v of vals(t, k)) ids.add(v);
    for (const v of vals(t, 'database_id')) if (v !== PLACEHOLDER) ids.add(v);
  }
  return [...ids];
}

test('NONPROD: every Worker, database, bucket and service name ends in -nonprod', () => {
  for (const [file, t] of [['exam', NP_EXAM], ['access', NP_ACCESS]]) {
    const names = ['name', 'database_name', 'bucket_name', 'service'].flatMap((k) => vals(t, k));
    assert.ok(names.length >= 2, `${file}: names found`);
    for (const n of names) assert.match(n, /-nonprod$/, `${file}: "${n}" must end in -nonprod`);
  }
});

test('NONPROD: no production Worker, database id, bucket, service or app id appears as a value', () => {
  const ids = prodIdentifiers();
  assert.ok(ids.includes('klarweg-access') && ids.includes('klarweg-exam'), 'production identifiers collected');
  for (const [file, t] of [['exam', NP_EXAM], ['access', NP_ACCESS]]) {
    const values = [...strip(t).matchAll(/=\s*"([^"]*)"/g)].map((m) => m[1]);
    for (const id of ids) assert.ok(!values.includes(id), `${file} non-prod config must not use production value "${id}"`);
  }
});

test('NONPROD: exam Worker — private, synthetic forms only, own D1 and private buckets', () => {
  assert.equal(val(NP_EXAM, 'name'), 'klarweg-exam-nonprod');
  assert.equal(val(NP_EXAM, 'main'), val(PROD_EXAM, 'main'), 'same code as production');
  assert.equal(bare(NP_EXAM, 'workers_dev'), 'false');
  assert.equal(bare(NP_EXAM, 'preview_urls'), 'false');
  assert.equal(val(NP_EXAM, 'EXAM_ENABLED'), 'on');
  assert.equal(val(NP_EXAM, 'EXAM_SYNTHETIC_FORMS'), 'on');
  assert.equal(val(NP_EXAM, 'EXAM_MOCK_FORMS'), 'off');
  assert.equal(val(NP_EXAM, 'EXAM_PRODUCTION_FORMS'), 'off');
  assert.equal(val(NP_EXAM, 'database_name'), 'klarweg-exam-nonprod');
  assert.deepEqual(vals(NP_EXAM, 'bucket_name').sort(), ['klarweg-exam-content-nonprod', 'klarweg-exam-recordings-nonprod']);
});

test('NONPROD: Access Worker — own D1, exam proxy to the non-prod exam Worker, no AI / speech / payments / Google', () => {
  assert.equal(val(NP_ACCESS, 'name'), 'klarweg-access-nonprod');
  assert.equal(val(NP_ACCESS, 'main'), val(PROD_ACCESS, 'main'), 'same code as production');
  assert.equal(val(NP_ACCESS, 'database_name'), 'klarweg-access-nonprod');
  assert.equal(val(NP_ACCESS, 'EXAM_ROUTES'), 'on');
  assert.deepEqual(vals(NP_ACCESS, 'service'), ['klarweg-exam-nonprod']);
  assert.deepEqual(vals(NP_ACCESS, 'binding').sort(), ['DB', 'EXAM'], 'no TUTOR (AI/speech) and no RESOURCES binding');
  assert.equal(val(NP_ACCESS, 'AI_ENABLED'), 'false');
  assert.equal(val(NP_ACCESS, 'SPEECH_MODE'), 'off');
  for (const k of ['CASHFREE_ENV', 'CASHFREE_APP_ID', 'CASHFREE_NOTIFY_URL', 'GOOGLE_CLIENT_ID', 'SITE_BASE_URL', 'ACCOUNT_RETURN_URL']) {
    assert.equal(val(NP_ACCESS, k), null, `${k} must stay unset in non-prod`);
  }
});

test('NONPROD: CORS_EXTRA_ORIGINS is valid and local-only', () => {
  const list = parseExtraOrigins(val(NP_ACCESS, 'CORS_EXTRA_ORIGINS'));
  assert.ok(list.length >= 1, 'parses to at least one origin (an invalid value would be ignored at runtime)');
  for (const o of list) assert.match(o, /^http:\/\/(localhost|127\.0\.0\.1)(:[0-9]+)?$/, `${o}: non-prod site is served locally`);
});

test('NONPROD: no secrets; database ids are UUIDs (placeholder until provisioned) and never a production id', () => {
  const prodIds = [PROD_EXAM, PROD_ACCESS].flatMap((t) => vals(t, 'database_id'));
  for (const [file, t] of [['exam', NP_EXAM], ['access', NP_ACCESS]]) {
    const body = strip(t);
    assert.ok(!/(SECRET|_KEY|TOKEN|PASSWORD|SALT)\w*\s*=/i.test(body), `${file}: secret-like key assigned`);
    const ids = vals(t, 'database_id');
    assert.equal(ids.length, 1, `${file}: one D1 database`);
    for (const id of ids) {
      assert.match(id, /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/, `${file}: database_id is a UUID`);
      assert.ok(id === PLACEHOLDER || !prodIds.includes(id), `${file}: database_id must not be a production database`);
    }
  }
});

test('PRODUCTION: wrangler.toml files carry no non-prod settings; exam flags all off', () => {
  for (const [file, t] of [['exam-worker', PROD_EXAM], ['access/worker', PROD_ACCESS]]) {
    assert.ok(!/^\s*\[\[?env\./m.test(t), `${file}/wrangler.toml: no [env.*] sections`);
    assert.ok(!/CORS_EXTRA_ORIGINS/.test(strip(t)), `${file}/wrangler.toml: no CORS_EXTRA_ORIGINS`);
  }
  for (const k of ['EXAM_ENABLED', 'EXAM_SYNTHETIC_FORMS', 'EXAM_MOCK_FORMS', 'EXAM_PRODUCTION_FORMS']) assert.equal(val(PROD_EXAM, k), 'off', `production ${k}`);
  assert.equal(val(PROD_ACCESS, 'EXAM_ROUTES'), null, 'production Access has no EXAM_ROUTES (exam proxy off)');
});

/* Runs the real guard against a temporary copy of the production wrangler.toml.
   All allow-flags that production legitimately needs are passed, so the only
   thing that can stop it before the (unreachable) live check is the new rule. */
function runGuard(extraToml) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-predeploy-'));
  try {
    fs.mkdirSync(path.join(dir, 'scripts'));
    fs.mkdirSync(path.join(dir, 'access', 'worker'), { recursive: true });
    fs.copyFileSync(path.join(ROOT, 'scripts', 'predeploy-access-check.mjs'), path.join(dir, 'scripts', 'predeploy-access-check.mjs'));
    fs.writeFileSync(path.join(dir, 'access', 'worker', 'wrangler.toml'), PROD_ACCESS + extraToml);
    const scope = val(PROD_ACCESS, 'SPEECH_SCOPE') || 'list';
    const r = spawnSync(process.execPath, [path.join(dir, 'scripts', 'predeploy-access-check.mjs'),
      '--allow-ai-enabled', `--allow-speech=${val(PROD_ACCESS, 'SPEECH_MODE')}`, `--allow-speech-scope=${scope}`],
      { encoding: 'utf8', env: { ...process.env, KW_ACCESS_LIVE_URL: 'http://127.0.0.1:9/' }, timeout: 20000 });
    return (r.stdout || '') + (r.stderr || '');
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
}

test('PREDEPLOY GUARD: refuses a production wrangler.toml with CORS_EXTRA_ORIGINS or an [env.*] section', () => {
  const control = runGuard('');
  assert.ok(!/CORS_EXTRA_ORIGINS|\[env\.\*\] section/.test(control), 'control: the unmodified production file does not trip the new rules');
  assert.match(runGuard('\nCORS_EXTRA_ORIGINS = "http://localhost:8788"\n'), /sets CORS_EXTRA_ORIGINS/);
  assert.match(runGuard('\n[env.nonprod]\nname = "klarweg-access-nonprod"\n'), /contains an \[env\.\*\] section/);
  for (const spelling of ['\n"CORS_EXTRA_ORIGINS" = "http://localhost:8788"\n', "\n  'CORS_EXTRA_ORIGINS'='http://localhost:8788'\n",
    '\nvars.CORS_EXTRA_ORIGINS = "http://localhost:8788"\n', '\n[other]\nx = { CORS_EXTRA_ORIGINS = "http://localhost:8788" }\n']) {
    assert.match(runGuard(spelling), /sets CORS_EXTRA_ORIGINS/, `refuses ${JSON.stringify(spelling)}`);
  }
  for (const spelling of ['\nCORS_PUBLIC_SITE_ORIGINS = "deny"\n', '\n"CORS_PUBLIC_SITE_ORIGINS" = "allow"\n', '\nvars.CORS_PUBLIC_SITE_ORIGINS = "deny"\n']) {
    assert.match(runGuard(spelling), /sets CORS_PUBLIC_SITE_ORIGINS/, `refuses ${JSON.stringify(spelling)}`);
  }
  assert.ok(!/CORS_PUBLIC_SITE_ORIGINS/.test(control), 'control: the unmodified production file does not set it');
  for (const header of ['\n[ env.nonprod ]\n', '\n[["env".nonprod.d1_databases]]\n', "\n['env'.nonprod.vars]\n", '\n[[env.nonprod.services]]\n']) {
    assert.match(runGuard(header), /contains an \[env\.\*\] section/, `refuses ${JSON.stringify(header)}`);
  }
  assert.ok(!/CORS_EXTRA_ORIGINS|\[env\.\*\] section/.test(runGuard('\n# CORS_EXTRA_ORIGINS = "x" and [env.nonprod] are only mentioned in this comment\n')),
    'a comment does not trip the rules');
});
