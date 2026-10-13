#!/usr/bin/env node
/* Drives a DEPLOYED, NON-PRODUCTION Workers-FREE idempotency probe (worker-free.mjs) and prints a JSON report.
   One HTTP request = one Worker invocation = one scenario or one race step, each within the per-invocation D1 budget.
   Env: IDEM_BASE_URL (https), IDEM_TOKEN (never printed). Args: --n <parallel requests per race, 30> --rounds <5>
   --lead <ms before the common race start, 2000> --fan-k <fan invocations per round, 4> --fan-m <claims per fan invocation, 6>
   Result per check: pass | fail | inconclusive. Overall: fail if any check fails; else inconclusive if any is
   inconclusive (platform error, budget trip, unreadable response); pass only if every check passes. */
export const FREE_SCENARIOS = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7a', 'S7b'];
const runId = (t) => `${t}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

/* A race round (single-claim requests, or fan requests carrying several claims each): exactly one execution + one
   effect + completed record (+ exactly one successful compare-and-set takeover in a stale round, none in a fresh round)
   is a pass. More than one execution, more than one effect, too many takeovers or an unexpected status is a FAIL
   regardless of anything else; executions and takeovers reported by a budget-tripped invocation still count, because
   D1 already reported them. A request the platform did not answer with the probe's JSON, a budget-tripped invocation,
   or a round in which no claim overlapped the winner (no request_in_progress) makes it inconclusive. */
export function judgeRace(rs, st, { kind = 'fresh' } = {}) {
  const json = rs.filter((r) => r.http === 200 && r.body && r.body.ok === true);
  const complete = json.filter((r) => !r.body.inconclusive);
  const resultsOf = (r) => (Array.isArray(r.body.results) ? r.body.results : [r.body]);
  const takeoversOf = (r) => (Number.isInteger(r.body.takeovers) ? r.body.takeovers : r.body.took_over === true ? 1 : 0);
  const all = json.flatMap(resultsOf), done = complete.flatMap(resultsOf);
  const executed = all.filter((x) => x.status === 200 && !x.replayed).length;
  const takeovers = json.reduce((k, r) => k + takeoversOf(r), 0);            // successful compare-and-set takeovers
  // contention evidence: a claim answered request_in_progress overlapped the winner's in-flight claim. A round in which
  // every loser arrived after the commit (all replays) never raced, so it cannot pass.
  const overlapped = done.filter((x) => x.status === 503 && x.error === 'request_in_progress').length;
  const allowed = done.every((x) => x.status === 200 || (x.status === 503 && x.error === 'request_in_progress'));
  const detail = { kind, claims: done.length, executed, takeovers, overlapped, late: json.filter((r) => r.body.late).length,
    effects: st && st.effects, record_state: st && st.record && st.record.state, unanswered: rs.length - complete.length,
    statuses: [...new Set(rs.flatMap((r) => (r.body && r.body.ok ? resultsOf(r).map((x) => `${x.status}${x.replayed ? ':replayed' : ''}${x.error ? ':' + x.error : ''}`) : [`http${r.http}`])))],
    max_budget_used: Math.max(0, ...rs.map((r) => (r.body && r.body.budget ? r.body.budget.used : 0))) };
  const wantTakeovers = kind === 'stale' ? 1 : 0;                  // a fresh claim is never stale; a stale one has ONE winner
  if (executed > 1 || (st && st.effects > 1) || !allowed || takeovers > wantTakeovers) return { status: 'fail', detail };
  if (complete.length !== rs.length || !st || st.ok !== true) return { status: 'inconclusive', detail };
  if (!(executed === 1 && takeovers === wantTakeovers && st.effects === 1 && st.record && st.record.state === 'completed')) return { status: 'fail', detail };
  if (overlapped === 0) return { status: 'inconclusive', detail: { ...detail, reason: 'no_contention_observed' } };
  return { status: 'pass', detail };
}

export async function runFree(call, { n = 30, rounds = 5, leadMs = 2000, fanK = 4, fanM = 6 } = {}) {
  const report = { n, rounds, fan: { k: fanK, m: fanM }, checks: [] };
  const add = (id, status, detail) => report.checks.push({ id, status, pass: status === 'pass', detail });
  const v = await call('GET', '/idem/verify');           // read-only qualification of the bound database; nothing runs without it
  add('verify', v.http === 200 && v.body && v.body.verified === true ? 'pass' : 'fail', v.body);
  if (report.checks[0].status !== 'pass') { report.result = 'fail'; return report; }
  for (const id of FREE_SCENARIOS) {
    const r = await call('POST', `/idem/scenario?id=${id}&run=${runId(`scn-${id.toLowerCase()}`)}`);
    if (r.http === 200 && r.body && r.body.ok === true && ['pass', 'fail', 'inconclusive'].includes(r.body.status)) add(r.body.id, r.body.status, { ...r.body.detail, budget: r.body.budget });
    else add(`scenario_${id}`, 'inconclusive', { http: r.http, body: r.body });
  }
  // cross-request races, one request id per round: R / RS = n single-claim invocations; RF / RSF = fanK invocations
  // that each issue fanM claims at once (k × m ≥ 20 competing claims, every invocation within its budget)
  const ROUNDS = [['R_cross_request_race', 'fresh', 'one'], ['RS_cross_request_stale_takeover_race', 'stale', 'one'],
    ['RF_fan_race', 'fresh', 'fan'], ['RSF_fan_stale_takeover_race', 'stale', 'fan']];
  for (const [name, kind, step] of ROUNDS) {
    for (let i = 0; i < rounds; i++) {
      const run = runId(`race-${kind}`); const t0 = Date.now(); const p = await call('POST', `/idem/race/prepare?kind=${kind}&run=${run}`);
      if (!(p.http === 200 && p.body && p.body.ok && Number.isInteger(p.body.now))) { add(`${name}_${i}`, 'inconclusive', { prepare: p }); continue; }
      const at = p.body.now + Math.round((Date.now() - t0) / 2) + leadMs;   // one start time, on the WORKER's clock
      const path = step === 'fan' ? `/idem/race/fan?run=${run}&m=${fanM}&at=${at}` : `/idem/race/one?run=${run}&at=${at}`;
      const rs = await Promise.all(Array.from({ length: step === 'fan' ? fanK : n }, () => call('POST', path)));
      const st = (await call('GET', `/idem/race/state?run=${run}`)).body;
      const j = judgeRace(rs, st, { kind });
      add(`${name}_${i}`, j.status, j.detail);
    }
  }
  report.result = report.checks.some((c) => c.status === 'fail') ? 'fail' : report.checks.some((c) => c.status === 'inconclusive') ? 'inconclusive' : 'pass';
  report.pass = report.result === 'pass';
  report.max_budget_used = Math.max(0, ...report.checks.map((c) => (c.detail && c.detail.budget ? c.detail.budget.used : c.detail && c.detail.max_budget_used) || 0));
  return report;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const base = (process.env.IDEM_BASE_URL || '').replace(/\/+$/, ''); const token = process.env.IDEM_TOKEN || '';
  if (!/^https:\/\//.test(base) || token.length < 32) { console.error('Set IDEM_BASE_URL (https) and IDEM_TOKEN (≥ 32 chars).'); process.exit(2); }
  const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i > 0 ? Number(process.argv[i + 1]) : d; };
  const call = async (m, p) => { try { const r = await fetch(base + p, { method: m, headers: { 'x-idem-token': token } }); return { http: r.status, body: await r.json().catch(() => null) }; } catch (e) { return { http: 0, body: null }; } };
  const report = { base, started_at: new Date().toISOString(), ...(await runFree(call, { n: arg('n', 30), rounds: arg('rounds', 5), leadMs: arg('lead', 2000), fanK: arg('fan-k', 4), fanM: arg('fan-m', 6) })), finished_at: new Date().toISOString() };
  console.log(JSON.stringify(report, null, 2)); process.exit(report.result === 'pass' ? 0 : 1);
}
