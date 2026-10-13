#!/usr/bin/env node
/* V10 ambiguous-result runner (blueprint §6.1 rule 6) — drives a DEPLOYED, NON-PRODUCTION, VERIFIED V10 probe Worker.

   Per trial (fresh run id and op key):
     1. POST /v10/prepare-claim            state = reserved
     2. POST /v10/claim (op K)             aborted by the CLIENT after `interval` ms (AbortController)
     3. POST /v10/claim (op K) again       normal retry, same op key
     4. GET /v10/state + GET /v10/ledger   invariant: state committed, ledger_rows 1, claim_rows 1, ledger applied
   Branch of an aborted trial (from the retry's answer): retry applied:false → the aborted original HAD applied
   ("aborted_original_applied", the branch this check exists for); retry applied:true → it had not. A trial whose
   first response arrived before the abort is "responded" (not ambiguous).

   Verdict: "fail" if any trial breaks the invariant or an HTTP call fails; otherwise "pass" only if at least one
   aborted_original_applied trial was observed, else "inconclusive". Exit codes: 0 pass, 1 fail, 3 inconclusive.

   Modes:
     intervals (default)   abort after each of --intervals ms; which branch occurs depends on real timing.
     forced post-commit    --post-commit-delay D --abort-after A (A < D): the first claim asks the probe (fault
                           injection, V10_FAULT_INJECTION = "on") to hold its response D ms AFTER its batch committed;
                           the client aborts at A. This makes "committed, but the client never saw the answer" happen
                           on purpose (if the commit itself takes < A ms). It proves client-visible ambiguity after a
                           commit and that the same-key retry detects it; it does NOT prove how Cloudflare cancels a
                           request during an arbitrary in-flight database operation.
   Env: V10_BASE_URL (https), V10_TOKEN (never printed).
   Args: --intervals 1,5,10,25,50,100,200 --trials 5 | --post-commit-delay 2000 --abort-after 500 --trials 10 */

const short = () => Math.random().toString(36).slice(2, 8);

export async function runAmbiguous({ base, token, fetchImpl = (...a) => fetch(...a), intervals = [1, 5, 10, 25, 50, 100, 200], trials = 5,
  setTimer = (fn, ms) => setTimeout(fn, ms), postCommitDelayMs = null, abortAfterMs = null }) {
  const forced = postCommitDelayMs !== null;
  if (forced) {   // refuse a configuration that cannot produce "aborted after commit, before the answer"
    if (!Number.isInteger(postCommitDelayMs) || postCommitDelayMs < 1 || postCommitDelayMs > 5000) throw new Error('invalid_config: post-commit delay must be an integer 1–5000 ms');
    if (!Number.isInteger(abortAfterMs) || abortAfterMs < 0 || abortAfterMs >= postCommitDelayMs) throw new Error('invalid_config: abort-after must be an integer ≥ 0 and < the post-commit delay');
    intervals = [abortAfterMs];
  }
  const headers = { 'x-v10-token': token };
  const call = async (method, path, signal) => {
    const r = await fetchImpl(base + path, { method, headers, signal });
    let body = null; try { body = await r.json(); } catch { /* non-JSON */ }
    return { status: r.status, body };
  };
  const report = { mode: forced ? 'forced_post_commit_delay' : 'intervals', ...(forced ? { post_commit_delay_ms: postCommitDelayMs, abort_after_ms: abortAfterMs } : {}), intervals, trials, trials_run: 0, branches: { aborted_original_applied: 0, aborted_original_not_applied: 0, responded: 0 }, failures: [], results: [] };
  const v = await call('GET', '/v10/verify');
  if (!(v.status === 200 && v.body && v.body.verified === true)) {
    report.verdict = 'fail'; report.failures.push({ step: 'verify', status: v.status, error: v.body && v.body.error }); return report;
  }
  for (const interval of intervals) for (let i = 0; i < trials; i++) {
    const run = `amb-${interval}-${i}-${Date.now().toString(36)}-${short()}`, op = `commit:${run}`;
    const q = `run=${run}&op=${encodeURIComponent(op)}`;
    const t = { interval, run };
    const prep = await call('POST', `/v10/prepare-claim?run=${run}`);
    if (prep.status !== 200) { report.failures.push({ ...t, step: 'prepare', status: prep.status }); continue; }
    const ctl = new AbortController();
    const timer = setTimer(() => ctl.abort(), interval);
    let first;
    const firstPath = forced ? `/v10/claim?${q}&post_commit_delay_ms=${postCommitDelayMs}` : `/v10/claim?${q}`;
    try { first = await call('POST', firstPath, ctl.signal); t.first = { aborted: false, status: first.status, applied: first.body && first.body.applied }; }
    catch (e) { t.first = { aborted: true, error: (e && e.name) || 'error' }; }
    clearTimeout(timer);
    const retry = await call('POST', `/v10/claim?${q}`);
    const st = await call('GET', `/v10/state?run=${run}`);
    const led = await call('GET', `/v10/ledger?${q}`);
    t.retry = { status: retry.status, applied: retry.body && retry.body.applied };
    t.state = st.body; t.ledger_applied = led.body && led.body.applied;
    const http = [retry, st, led].every((r) => r.status === 200) && (t.first.aborted || t.first.status === 200);
    const invariant = http && st.body.state === 'committed' && st.body.ledger_rows === 1 && st.body.claim_rows === 1 && t.ledger_applied === true;
    // exactly one application: the non-aborted first call and the retry cannot both have applied
    const once = t.first.aborted ? true : !(t.first.applied === true && t.retry.applied === true);
    t.branch = !t.first.aborted ? 'responded' : t.retry.applied === false ? 'aborted_original_applied' : 'aborted_original_not_applied';
    report.branches[t.branch]++; report.trials_run++;
    if (!invariant || !once) report.failures.push({ ...t, step: 'invariant', ...(t.first.status === 400 ? { hint: 'first claim refused (fault injection off or invalid delay?)' } : {}) });
    report.results.push(t);
  }
  report.verdict = report.failures.length ? 'fail' : report.branches.aborted_original_applied > 0 ? 'pass' : 'inconclusive';
  return report;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const base = (process.env.V10_BASE_URL || '').replace(/\/+$/, ''); const token = process.env.V10_TOKEN || '';
  if (!/^https:\/\//.test(base) || token.length < 32) { console.error('Set V10_BASE_URL (https) and V10_TOKEN (≥ 32 chars).'); process.exit(2); }
  const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i > 0 ? process.argv[i + 1] : d; };
  const intervals = String(arg('intervals', '1,5,10,25,50,100,200')).split(',').map(Number).filter((n) => Number.isFinite(n) && n >= 0);
  const delay = arg('post-commit-delay', null);
  let report;
  try {
    report = await runAmbiguous({ base, token, intervals, trials: Number(arg('trials', 5)),
      postCommitDelayMs: delay === null ? null : Number(delay), abortAfterMs: delay === null ? null : Number(arg('abort-after', NaN)) });
  } catch (e) { console.error(String(e && e.message)); process.exit(2); }
  report.base = base; report.finished_at = new Date().toISOString();
  console.log(JSON.stringify(report, null, 2));
  process.exit(report.verdict === 'pass' ? 0 : report.verdict === 'fail' ? 1 : 3);
}
