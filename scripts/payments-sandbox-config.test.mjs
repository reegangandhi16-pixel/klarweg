/* PAYMENT SANDBOX ISOLATION (docs/live-classes-payments-sandbox.md).
   access/worker/wrangler.payments-sandbox.toml is the only place Cashfree's
   sandbox is switched on. It must never reach a production resource or the
   exam/QA non-prod Worker, never leave Cashfree's sandbox, never hold a
   secret, and the public site must never be routed to it. Production config
   and the existing non-prod Worker stay exactly as they were. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseExtraOrigins } from '../access/worker/src/cors.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const PAY = read('access/worker/wrangler.payments-sandbox.toml');
const PROD = read('access/worker/wrangler.toml');
const NP = read('access/worker/wrangler.nonprod.toml');
const PROD_EXAM = read('exam-worker/wrangler.toml');

const strip = (toml) => toml.replace(/#.*$/gm, '');
/* "double" or 'literal' TOML strings */
const vals = (toml, key) => [...strip(toml).matchAll(new RegExp('^\\s*' + key + '\\s*=\\s*(?:"([^"]*)"|\'([^\']*)\')', 'gm'))].map((m) => m[1] ?? m[2]);
const val = (toml, key) => vals(toml, key)[0] ?? null;
const PLACEHOLDER = '00000000-0000-0000-0000-000000000000';
const NAME = 'klarweg-access-payments-nonprod';

test('SANDBOX CONFIG: its own Worker and database, named -payments-nonprod, never production or the exam/QA non-prod ones', () => {
  assert.equal(val(PAY, 'name'), NAME);
  assert.equal(val(PAY, 'main'), val(PROD, 'main'), 'the same Worker code as production');
  assert.deepEqual(vals(PAY, 'database_name'), [NAME]);
  assert.deepEqual(vals(PAY, 'binding'), ['DB'], 'only its database: no exam service, AI, speech or PDF bindings');
  assert.equal(vals(PAY, 'service').length, 0);
  const id = val(PAY, 'database_id');
  assert.match(id, /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
  const taken = [PROD, NP, PROD_EXAM, read('exam-worker/wrangler.nonprod.toml')].flatMap((t) => vals(t, 'database_id')).filter((x) => x !== PLACEHOLDER);
  assert.notEqual(id, PLACEHOLDER, 'the real id of the dedicated database (created 2026-10-21), not the placeholder');
  assert.ok(!taken.includes(id), 'never the production or the exam/QA non-prod database');
  for (const other of [PROD, NP]) {
    for (const k of ['name', 'database_name']) for (const v of vals(other, k)) assert.ok(!vals(PAY, k).includes(v), `${k} "${v}" belongs to another Worker`);
    for (const v of vals(other, 'CASHFREE_APP_ID')) assert.ok(!strip(PAY).includes(v), 'no production app id');
  }
});

test('SANDBOX CONFIG: Cashfree sandbox only; both switches "sandbox", never "live"; credit and the A1 course as decided', () => {
  assert.equal(val(PAY, 'CASHFREE_ENV'), 'sandbox');
  assert.equal(val(PAY, 'CONSULT_BOOKING'), 'sandbox');
  assert.equal(val(PAY, 'ENROL_PAYMENTS'), 'sandbox');
  assert.equal(/\blive\b|production/i.test(strip(PAY).replace(/live-a1/g, '')), false, 'no live or production value anywhere');
  assert.equal(val(PAY, 'CONSULT_TEACHERS'), 'reegan-gandhi', 'only the owner\'s profile can be booked');
  assert.equal(val(PAY, 'ENROL_CONSULT_CREDIT'), 'course-fee', 'the ₹100 credit within 7 days (D11)');
  const courses = JSON.parse(val(PAY, 'ENROL_COURSES'));
  assert.deepEqual(Object.keys(courses), ['live-a1'], 'only the configured A1 course is sold');
  assert.ok(courses['live-a1'].batch >= '2090-01-01', 'a synthetic far-future batch, never a plausible real start date');
  assert.notEqual(val(PROD, 'ENROL_COURSES'), val(PAY, 'ENROL_COURSES'));
});

test('SANDBOX CONFIG: no secrets, no app id value, no Google or site override; webhooks come to this Worker', () => {
  const body = strip(PAY);
  assert.equal(/(SECRET|_KEY|TOKEN|PASSWORD|SALT|JOIN_LINKS)\w*\s*=/i.test(body), false, 'no secret-like key assigned');
  for (const k of ['CASHFREE_APP_ID', 'GOOGLE_CLIENT_ID', 'SITE_BASE_URL', 'ACCOUNT_RETURN_URL', 'EXAM_ROUTES']) assert.equal(val(PAY, k), null, `${k} is not set here`);
  assert.equal(/meet\.google\.com|cfsk_|TEST[A-Za-z0-9]{6,}/.test(body), false, 'no joining link, secret key or app id');
  const sub = (PROD.match(/klarweg-access\.([a-z0-9-]+)\.workers\.dev/) || read('access/worker/src/cashfree-config.js').match(/klarweg-access\.([a-z0-9-]+)\.workers\.dev/))[1];
  assert.equal(val(PAY, 'CASHFREE_NOTIFY_URL'), `https://${NAME}.${sub}.workers.dev/webhooks/cashfree`, 'its own workers.dev endpoint');
});

test('SANDBOX CONFIG: CORS and the return redirect reach only the local sandbox test page, not the exam/QA page', () => {
  const list = parseExtraOrigins(val(PAY, 'CORS_EXTRA_ORIGINS'));
  assert.deepEqual(list, ['http://localhost:8789']);
  assert.ok(!parseExtraOrigins(val(NP, 'CORS_EXTRA_ORIGINS')).includes('http://localhost:8789'), 'a different port from the exam/QA non-prod page');
});

test('ISOLATION: production and the exam/QA non-prod Worker are unchanged, and no production tool reads the sandbox file', () => {
  assert.equal(val(PROD, 'CASHFREE_ENV'), 'sandbox');
  assert.equal(val(PROD, 'CONSULT_BOOKING'), 'off');
  assert.equal(val(PROD, 'ENROL_PAYMENTS'), 'off');
  assert.equal(val(PROD, 'ENROL_COURSES'), '');
  assert.equal(val(PROD, 'ENROL_CONSULT_CREDIT'), 'course-fee');
  assert.equal(/CORS_EXTRA_ORIGINS/.test(strip(PROD)), false);
  for (const k of ['CASHFREE_ENV', 'CASHFREE_APP_ID', 'CONSULT_BOOKING', 'ENROL_PAYMENTS']) assert.equal(val(NP, k), null, `exam/QA non-prod keeps ${k} unset`);
  for (const f of ['scripts/deploy-access.mjs', 'scripts/predeploy-access-check.mjs', 'package.json', '.github/pages-allowlist.txt']) {
    assert.equal(/payments-sandbox|payments-nonprod/.test(read(f)), false, `${f} never references the sandbox`);
  }
});

test('ISOLATION: the public site is never routed to the sandbox Worker, and its switches stay off', () => {
  const allow = read('.github/pages-allowlist.txt').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#') && !l.includes('*'));
  for (const f of allow) {
    const p = path.join(ROOT, f);
    if (fs.existsSync(p) && fs.statSync(p).isFile()) assert.equal(read(f).includes('payments-nonprod'), false, `${f} must not mention the sandbox Worker`);
  }
  assert.match(read('kw-config.js'), /KW_ACCESS_API = 'https:\/\/klarweg-access\.[a-z0-9-]+\.workers\.dev'/);
  const data = read('live-classes-data.js');
  assert.match(data, /onlineBooking: \{\s*enabled: false,/);
  assert.match(data, /liveEnrolment: \{\s*enabled: false,/);
  assert.match(data, /nextBatch: null,/, 'no start date');
});

test('SANDBOX SITE: the local test page talks only to the sandbox Worker, in memory, with a banner; it refuses any other Worker', async () => {
  const { spawn, spawnSync } = await import('node:child_process');
  const script = path.join(ROOT, 'scripts', 'payments-sandbox-site.mjs');
  for (const bad of ['', 'https://klarweg-access.klarweg-issue-reports-2026.workers.dev', 'https://klarweg-access-nonprod.x.workers.dev']) {
    const r = spawnSync(process.execPath, [script], { env: { ...process.env, SANDBOX_WORKER_URL: bad }, encoding: 'utf8' });
    assert.equal(r.status, 2, `refuses "${bad}"`);
  }
  const W = 'https://klarweg-access-payments-nonprod.example.workers.dev';
  const child = spawn(process.execPath, [script], { env: { ...process.env, SANDBOX_WORKER_URL: W }, stdio: ['ignore', 'pipe', 'pipe'] });
  try {
    await new Promise((resolve, reject) => { child.stdout.on('data', (d) => /Sandbox test page/.test(String(d)) && resolve()); child.on('exit', (c) => reject(new Error('exited ' + c))); setTimeout(() => reject(new Error('timeout')), 10000); });
    const get = async (p) => (await fetch('http://localhost:8789/' + p)).text();
    assert.equal(await get('kw-config.js'), `window.KW_ACCESS_API = ${JSON.stringify(W)};\n`, 'only the sandbox Worker, no Google client id');
    const data = await get('live-classes-data.js');
    assert.match(data, /onlineBooking: \{\s*enabled: true,/);
    assert.match(data, /liveEnrolment: \{\s*enabled: true,/);
    assert.match(data, /nextBatch: 'SANDBOX TEST BATCH · not a real start date'/);
    assert.match(await get('live-classes.html'), /SANDBOX TEST PAGE · Cashfree test mode · no real payment/);
    assert.equal((await fetch('http://localhost:8789/access/worker/wrangler.payments-sandbox.toml')).status, 404, 'no Worker or config files served');
    const co = await get('sandbox-checkout.html');
    assert.match(co, /<script src="https:\/\/sdk\.cashfree\.com\/js\/v3\/cashfree\.js"><\/script>/, "Cashfree's hosted JS checkout SDK");
    assert.match(co, /Cashfree\(\{ mode: 'sandbox' \}\)/, 'always sandbox mode');
    assert.equal(/mode: 'production'|api\.cashfree\.com/.test(co), false);
    assert.match(co, /location\.hash/, 'the session id comes in the fragment, never a query string');
    assert.match(co, /SANDBOX TEST PAGE/);
    assert.equal(fs.existsSync(path.join(ROOT, 'sandbox-checkout.html')), false, 'served from memory only, not a committed public page');
    assert.match(read('live-classes-data.js'), /onlineBooking: \{\s*enabled: false,/, 'the committed file is unchanged');
  } finally { child.kill(); }
});
