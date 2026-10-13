#!/usr/bin/env node
/* V10 runner — drives a DEPLOYED, NON-PRODUCTION V10 probe Worker (see README.md) and prints a JSON report.

   Env:  V10_BASE_URL  the probe Worker URL (https://…)
         V10_TOKEN     the probe token (never printed)
   Args: --n <parallel claims per round, default 50>  --rounds <default 5>

   Exit code 0 only if every check passes. The report is evidence for V10 only when the probe runs as a deployed Worker
   against a separate non-production D1 database. */
const base = (process.env.V10_BASE_URL || '').replace(/\/+$/, '');
const token = process.env.V10_TOKEN || '';
if (!/^https:\/\//.test(base) || token.length < 32) { console.error('Set V10_BASE_URL (https) and V10_TOKEN (≥ 32 chars).'); process.exit(2); }
const arg = (name, dflt) => { const i = process.argv.indexOf(`--${name}`); return i > 0 ? Number(process.argv[i + 1]) : dflt; };
const N = arg('n', 50), ROUNDS = arg('rounds', 5);

async function call(method, path) {
  const res = await fetch(base + path, { method, headers: { 'x-v10-token': token } });
  return { status: res.status, body: await res.json().catch(() => ({})) };
}
const runId = (tag) => `${tag}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

const report = { base, n: N, rounds: ROUNDS, started_at: new Date().toISOString(), checks: [] };
const check = (id, pass, detail) => report.checks.push({ id, pass: !!pass, detail });

const v = await call('GET', '/v10/verify');          // read-only qualification of the bound database; nothing runs without it
check('verify', v.status === 200 && v.body.verified === true, v.body);
if (!(v.status === 200 && v.body.verified === true)) { report.pass = false; console.log(JSON.stringify(report, null, 2)); process.exit(1); }

const sc = await call('POST', `/v10/scenarios?run=${runId('scn')}`);
for (const r of (sc.body.results || [])) check(r.id, r.pass, r.detail);
if (!sc.body.results) check('scenarios_ran', false, sc.body);

for (const variant of ['same_op_key', 'distinct_op_keys']) {
  for (let round = 0; round < ROUNDS; round++) {
    const run = runId(variant === 'same_op_key' ? 'cs' : 'cd');
    await call('POST', `/v10/prepare-claim?run=${run}`);
    const ops = Array.from({ length: N }, (_, i) => (variant === 'same_op_key' ? `commit:${run}` : `commit:${run}:${i}`));
    const results = await Promise.all(ops.map((op) => call('POST', `/v10/claim?run=${run}&op=${encodeURIComponent(op)}`)));
    const applied = results.filter((r) => r.body.applied === true).length;
    const st = await call('GET', `/v10/state?run=${run}`);
    const pass = applied === 1 && st.body.state === 'committed' && st.body.ledger_rows === 1 && st.body.claim_rows === 1;
    check(`E_${variant}_round_${round}`, pass, { applied, http: [...new Set(results.map((r) => r.status))], state: st.body });
  }
}

report.finished_at = new Date().toISOString();
report.pass = report.checks.every((c) => c.pass);
console.log(JSON.stringify(report, null, 2));
process.exit(report.pass ? 0 : 1);
