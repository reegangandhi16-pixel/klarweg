/* The benchmark scorer must discriminate: a mock that flags every learner's
   first word as an error must score a high false-correction rate, and the
   clean mock must score zero. Also: no real provider without --confirm-spend. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RUN = path.join(path.dirname(fileURLToPath(import.meta.url)), 'run-eval.mjs');
const summaryOf = (args, env = {}) => JSON.parse(execFileSync(process.execPath, [RUN, '--json', ...args], { env: { ...process.env, LLM_PROVIDER: 'mock', ...env } }).toString().trim());

test('benchmark: 150 cases, clean mock → 0% false corrections, JSON valid', () => {
  const s = summaryOf([]);
  assert.equal(s.cases, 150);
  assert.equal(s.falseCorrectionRate, '0%');
  assert.equal(s.json.invalid, 0);
  assert.ok(s.avgTokens.input > 500, 'token usage measured');
});

test('benchmark: over-flagging mock is caught by the false-correction metric', () => {
  const s = summaryOf(['--mock-profile', 'flag-first-word']);
  assert.ok(parseFloat(s.falseCorrectionRate) > 80, s.falseCorrectionRate);
  assert.equal(s.detectionRate.pass, 0);
});

test('benchmark: refuses a real provider without --confirm-spend', () => {
  const r = spawnSync(process.execPath, [RUN], { env: { ...process.env, LLM_PROVIDER: 'openai' } });
  assert.notEqual(r.status, 0);
  assert.match(r.stderr.toString(), /--confirm-spend/);
});
