/* scripts/cashfree-sandbox-verify.mjs — its safety rules, and a full
   rehearsal against the real Worker code (local Cashfree emulation).
   The rehearsal proves the script and the Worker agree; only the real run
   (docs/live-classes-payments-sandbox.md) proves Cashfree's sandbox. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SCRIPT = path.join(ROOT, 'scripts', 'cashfree-sandbox-verify.mjs');
const SRC = fs.readFileSync(SCRIPT, 'utf8');
const clean = () => { const e = { ...process.env }; for (const k of ['SANDBOX_WORKER_URL', 'CASHFREE_SANDBOX_APP_ID', 'CASHFREE_SANDBOX_SECRET_KEY']) delete e[k]; return e; };
const run = (args, extra = {}) => spawnSync(process.execPath, [SCRIPT, ...args], { cwd: ROOT, env: { ...clean(), ...extra }, encoding: 'utf8', timeout: 120000 });

test('VERIFY: without sandbox credentials the real run refuses and contacts nothing', () => {
  const r = run([]);
  assert.equal(r.status, 2, r.stderr);
  assert.match(r.stderr, /SANDBOX_WORKER_URL[\s\S]*CASHFREE_SANDBOX_APP_ID[\s\S]*CASHFREE_SANDBOX_SECRET_KEY[\s\S]*Nothing was contacted/);
});

test('VERIFY: the production Worker, a live app id or a production key are refused', () => {
  const good = { SANDBOX_WORKER_URL: 'https://klarweg-access-payments-nonprod.example.workers.dev', CASHFREE_SANDBOX_APP_ID: 'TESTabc', CASHFREE_SANDBOX_SECRET_KEY: 'cfsk_ma_test_x' };
  for (const bad of [
    { SANDBOX_WORKER_URL: 'https://klarweg-access.klarweg-issue-reports-2026.workers.dev' },
    { SANDBOX_WORKER_URL: 'https://klarweg-access-nonprod.klarweg-issue-reports-2026.workers.dev' },
    { CASHFREE_SANDBOX_APP_ID: '12345live' },
    { CASHFREE_SANDBOX_SECRET_KEY: 'cfsk_ma_prod_x' }
  ]) {
    const r = run([], { ...good, ...bad });
    assert.equal(r.status, 2, JSON.stringify(bad));
    assert.equal(/cfsk_ma_|TESTabc/.test(r.stdout + r.stderr), false, 'no credential echoed');
  }
});

test('VERIFY: only Cashfree\'s sandbox, only reads and the availability fixture in the sandbox database', () => {
  assert.match(SRC, /const CF_BASE = 'https:\/\/sandbox\.cashfree\.com\/pg';/);
  assert.equal(/api\.cashfree\.com/.test(SRC), false, 'never the production gateway');
  assert.match(SRC, /'d1', 'execute', 'klarweg-access-payments-nonprod', '--config', 'wrangler\.payments-sandbox\.toml'/);
  assert.match(SRC, /only reads and the availability fixture are allowed/);
  assert.equal(/wrangler', 'deploy'|secret', 'put'|--file/.test(SRC), false, 'it never deploys, sets secrets or runs migrations');
  assert.equal(/console\.(log|error)\([^)]*\b(secret|appId)\b/.test(SRC), false, 'never logs a credential');
});

test('VERIFY: real runs default to the hosted checkout (a person pays); the S2S Order Pay API only with --order-pay', () => {
  assert.match(SRC, /const ROUTE = process\.argv\.includes\('--order-pay'\) \|\| \(REHEARSE && !process\.argv\.includes\('--hosted'\)\) \? 'order-pay' : 'hosted';/);
  assert.match(SRC, /\$\{ORIGIN\}\/sandbox-checkout\.html#/, 'the checkout link uses the fragment');
  assert.match(SRC, /S2S flag/, 'an Order Pay refusal names the S2S requirement');
  assert.equal(/ops\.cfPay\(/.test(SRC.slice(SRC.indexOf('async function verify()'), SRC.indexOf('async function checkExpired'))), false, 'every check pays through pay(), never Order Pay directly');
});

test('VERIFY: the hosted-checkout route, rehearsed (person emulated), passes the same checks and is labelled not a proof', () => {
  const out = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'kw-verify-')), 'report.json');
  const r = run(['--rehearse', '--hosted', '--out=' + out]);
  assert.equal(r.status, 0, r.stdout.split('\n').filter((l) => /^FAIL/.test(l)).join('\n') || r.stderr);
  assert.match(r.stdout, /PERSON NEEDED \(PAY SUCCESSFULLY\)[\s\S]*http:\/\/localhost:8789\/sandbox-checkout\.html#session=session_[^&\s]+&outcome=success/);
  assert.match(r.stdout, /PERSON NEEDED \(MAKE THE PAYMENT FAIL\)[\s\S]*outcome=failure/);
  const rep = JSON.parse(fs.readFileSync(out, 'utf8'));
  assert.match(rep.mode, /NOT a real Cashfree sandbox transaction/);
  assert.equal(rep.route, 'hosted checkout (person emulated)');
  assert.equal(rep.counts.FAIL || 0, 0);
  assert.ok(rep.counts.PASS >= 35, JSON.stringify(rep.counts));
  assert.ok(rep.results.some((x) => x.status === 'PASS' && x.name.includes("hosted checkout, completed by a person")));
});

test('VERIFY: the rehearsal runs every check against the real Worker code and passes; its report says it is not a real sandbox proof', () => {
  const out = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'kw-verify-')), 'report.json');
  const r = run(['--rehearse', '--out=' + out]);
  assert.equal(r.status, 0, r.stdout.split('\n').filter((l) => /^FAIL/.test(l)).join('\n') || r.stderr);
  const rep = JSON.parse(fs.readFileSync(out, 'utf8'));
  assert.match(rep.mode, /^rehearsal \(local emulation, NOT a real Cashfree sandbox transaction\)$/);
  assert.equal(rep.counts.FAIL || 0, 0);
  assert.ok(rep.counts.PASS >= 35, JSON.stringify(rep.counts));
  for (const name of ['exactly ₹100.00 INR', 'signed success webhook confirmed the slot', 'another signed-in learner cannot get it', 'PAYMENT_FAILED_WEBHOOK', 'user-dropped',
    '₹7,899 due', 'exactly ₹7,899.00 INR', 'SAME Cashfree order', 'duplicate success webhook changes nothing', 'stale browser amount', 'no self-paced entitlement', 'expired after its hold lapsed']) {
    assert.ok(rep.results.some((x) => x.status === 'PASS' && x.name.includes(name)), name);
  }
  assert.equal(fs.readFileSync(out, 'utf8').includes('rehearsal-only-not-a-real-secret'), false, 'no key in the report');
});
