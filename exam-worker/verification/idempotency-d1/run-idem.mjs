#!/usr/bin/env node
/* Drives a DEPLOYED, NON-PRODUCTION idempotency probe Worker and prints a JSON report (README.md).
   Env: IDEM_BASE_URL (https), IDEM_TOKEN (never printed). Args: --n <parallel requests per race, 30> --rounds <5> */
const base = (process.env.IDEM_BASE_URL || '').replace(/\/+$/, ''); const token = process.env.IDEM_TOKEN || '';
if (!/^https:\/\//.test(base) || token.length < 32) { console.error('Set IDEM_BASE_URL (https) and IDEM_TOKEN (≥ 32 chars).'); process.exit(2); }
const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i > 0 ? Number(process.argv[i + 1]) : d; };
const N = arg('n', 30), ROUNDS = arg('rounds', 5);
const call = async (m, p) => { const r = await fetch(base + p, { method: m, headers: { 'x-idem-token': token } }); return { status: r.status, body: await r.json().catch(() => ({})) }; };
const runId = (t) => `${t}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
const report = { base, n: N, rounds: ROUNDS, started_at: new Date().toISOString(), checks: [] };
const check = (id, pass, detail) => report.checks.push({ id, pass: !!pass, detail });
check('setup', (await call('POST', '/idem/setup')).status === 200);
const sc = await call('POST', `/idem/scenarios?run=${runId('scn')}`);
for (const r of sc.body.results || []) check(r.id, r.pass, r.detail);
if (!sc.body.results) check('scenarios_ran', false, sc.body);
for (let i = 0; i < ROUNDS; i++) {             // cross-request races: many HTTP requests, same request id
  const run = runId('race'); await call('POST', `/idem/race/prepare?run=${run}`);
  const rs = await Promise.all(Array.from({ length: N }, () => call('POST', `/idem/race/one?run=${run}`)));
  const executed = rs.filter((r) => r.body.status === 200 && !r.body.replayed).length;
  const st = (await call('GET', `/idem/race/state?run=${run}`)).body;
  check(`R_cross_request_race_${i}`, executed === 1 && st.effects === 1 && st.record && st.record.state === 'completed', { executed, effects: st.effects });
}
report.finished_at = new Date().toISOString(); report.pass = report.checks.every((c) => c.pass);
console.log(JSON.stringify(report, null, 2)); process.exit(report.pass ? 0 : 1);
