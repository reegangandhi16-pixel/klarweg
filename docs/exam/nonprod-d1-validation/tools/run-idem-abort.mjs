#!/usr/bin/env node
/* PROPOSED (not part of any PR; review before any real run). Client-abort / ambiguous-outcome check for TRACK 1 —
   exercises PR #71's real idempotentAtomic() through PR #73's EXISTING Free-probe endpoints; no probe change and no
   fault injection. Per trial (fresh run, one request id):
     1. POST /idem/race/prepare?kind=fresh
     2. POST /idem/race/one, aborted by the CLIENT after `interval` ms (AbortController)
     3. retry POST /idem/race/one (same run ⇒ same request id) until it answers 200; a 503 request_in_progress means the
        original still holds (or died holding) its claim: wait and retry, bounded by --settle-ms (> CLAIM_TTL 60 s, so a
        claim left by a cancelled invocation can be taken over)
     4. GET /idem/race/state
   Invariant (every trial): effects = 1 and the record is `completed`.
   Branch of a trial:
     aborted_original_applied        client aborted before any header; FIRST retry answered 200 replayed — the original
                                     had committed but the client never saw it (THE branch this check exists for)
     aborted_original_not_applied    client aborted; first retry executed at once — the original never claimed
     aborted_original_in_flight      client aborted; first retry got 503 request_in_progress (a claim was pending)
     aborted_unresolved              client aborted, but the first retry gave no usable answer (transport / platform)
     responded                       the first answer's headers arrived before the abort (not ambiguous)
     first_request_failed            the first request failed in transport, not by the client's own abort
   What an aborted trial does and does not show: the CLIENT gave up before any response header. Whether the Worker
   invocation was then cancelled is not observable directly; the retry shows only the database outcome — a replay
   proves the original's batch COMMITTED (its completed record exists); an execution proves no claim existed; a 503
   proves a claim was pending (the original was still running, or its invocation died holding it).
   Answers are classified as:
     - violation (FAIL): effects > 1; after settling, effects ≠ 1 or the record is not completed; a probe answer with an
       application status other than 200 / 200 replayed / 503 request_in_progress below 500 (e.g. 409); a fresh run's
       first answer that is a replay or request_in_progress;
     - not established (INCONCLUSIVE): any transport error (network, TLS, DNS, reset) at any request; a non-JSON or
       non-200 HTTP answer; a probe answer flagged `inconclusive` (budget trip) or with status ≥ 500 (D1 / platform
       error inside the probe); a trial that did not settle within --settle-ms; verification not passing.
   Verdict: fail if any trial has a violation; else inconclusive if any trial is inconclusive, verification did not pass,
   or no aborted_original_applied trial occurred; else pass. An error path can never produce pass. The report is always
   produced (completed trials are kept). Exit codes: 0 pass, 1 fail (violation only), 3 inconclusive, 2 refused.
   Env: IDEM_BASE_URL (must be https://klarweg-exam-idem-probe-free.<subdomain>.workers.dev), IDEM_TOKEN (use
   with-probe-env.mjs). Args: --intervals 5,10,25,50,100,200 --trials 3 --settle-ms 75000 */
import { checkBaseUrl } from './tracks.mjs';

export async function runIdemAbort({ base, token, fetchImpl = (...a) => fetch(...a), intervals = [5, 10, 25, 50, 100, 200], trials = 3,
  settleMs = 75_000, retryEveryMs = 2_000, sleep = (ms) => new Promise((r) => setTimeout(r, ms)), setTimer = (fn, ms) => setTimeout(fn, ms), clock = () => Date.now() }) {
  const headers = { 'x-idem-token': token };
  /* Never throws: a transport error becomes { transport_error }. */
  const call = async (method, path, signal) => {
    let r;
    try { r = await fetchImpl(base + path, { method, headers, signal }); } catch (e) { return { status: 0, body: null, transport_error: (e && e.name) || 'error' }; }
    let body = null; try { body = await r.json(); } catch { /* non-JSON */ }
    return { status: r.status, body };
  };
  const report = { mode: 'client_abort_natural_timing', intervals, trials, settle_ms: settleMs,
    branches: { aborted_original_applied: 0, aborted_original_not_applied: 0, aborted_original_in_flight: 0, aborted_unresolved: 0, responded: 0, first_request_failed: 0 },
    failures: [], inconclusive: [], results: [] };
  const finish = () => {
    report.verdict = report.failures.length ? 'fail' : report.inconclusive.length || report.branches.aborted_original_applied === 0 ? 'inconclusive' : 'pass';
    return report;
  };
  const v = await call('GET', '/idem/verify');
  if (!(v.status === 200 && v.body && v.body.verified === true)) {   // setup / infrastructure: nothing was tested
    report.inconclusive.push({ step: 'verify', reason: v.transport_error ? 'verify_unreachable' : 'probe_not_verified', http: v.status, error: v.transport_error || (v.body && v.body.error) });
    return finish();
  }
  /* A probe answer (HTTP 200 + ok:true): 'ok' | 'in_progress' | 'hidden' (platform / budget inside the probe) | 'violation'. */
  const classify = (b) => {
    if (b.inconclusive === true) return 'hidden';
    if (b.status === 200) return 'ok';
    if (b.status === 503 && b.error === 'request_in_progress') return 'in_progress';   // before the ≥ 500 rule: a legitimate answer
    if (typeof b.status === 'number' && b.status >= 500) return 'hidden';
    return 'violation';
  };
  const probeAnswer = (r) => r.status === 200 && r.body && r.body.ok === true;
  for (const interval of intervals) for (let i = 0; i < trials; i++) {
    const run = `abort-${interval}-${i}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`; const t = { interval, run };
    report.results.push(t);
    try {
      const prep = await call('POST', `/idem/race/prepare?kind=fresh&run=${run}`);
      if (!probeAnswer(prep)) { t.branch = null; report.inconclusive.push({ interval, run, reason: 'prepare_failed', http: prep.status, error: prep.transport_error || (prep.body && prep.body.error) }); continue; }
      // First request. Only the CLIENT's own abort BEFORE response headers is ambiguous. A transport error that is not
      // our abort is not an abort; an abort while reading the body after a header is "responded".
      const ctl = new AbortController(); const timer = setTimer(() => ctl.abort(), interval);
      let res = null;
      try { res = await fetchImpl(base + `/idem/race/one?run=${run}`, { method: 'POST', headers, signal: ctl.signal }); }
      catch (e) {
        const ours = ctl.signal.aborted && e && e.name === 'AbortError';
        t.first = ours ? { aborted: true, stage: 'before_headers' } : { aborted: false, transport_error: (e && e.name) || 'error' };
      }
      if (res) {
        t.first = { aborted: false, http: res.status };
        try { const b = await res.json(); t.first.ok = !!(b && b.ok === true); t.first.status = b && b.status; t.first.replayed = !!(b && b.replayed); if (b && b.error) t.first.error = b.error; if (b && b.inconclusive) t.first.probe_inconclusive = true; }
        catch { if (ctl.signal.aborted) t.first.aborted_after_headers = true; else t.first.non_json = true; }
      }
      clearTimeout(timer);
      const f = t.first;
      // retries until settled
      const t0 = clock(); const answers = []; let retryHidden = null;
      for (;;) {
        const r = await call('POST', `/idem/race/one?run=${run}`);
        if (!probeAnswer(r)) { retryHidden = { http: r.status, error: r.transport_error || (r.body && r.body.error) }; break; }
        const c = classify(r.body);
        answers.push({ c, s: `${r.body.status}${r.body.replayed ? ':replayed' : ''}${r.body.error ? ':' + r.body.error : ''}`, replayed: !!r.body.replayed });
        if (c === 'hidden') { retryHidden = { probe: answers[answers.length - 1].s }; break; }
        if (c !== 'in_progress') break;
        if (clock() - t0 >= settleMs) { t.unsettled = true; break; }
        await sleep(retryEveryMs);
      }
      t.retry = answers.map((a) => a.s); if (retryHidden) t.retry_hidden = retryHidden;
      const st = await call('GET', `/idem/race/state?run=${run}`);
      const stateOk = probeAnswer(st);
      t.state = stateOk ? { effects: st.body.effects, record: st.body.record && st.body.record.state } : { http: st.status, error: st.transport_error || (st.body && st.body.error) };
      // branch
      if (f.aborted) {
        const a0 = answers[0];
        t.branch = !a0 || a0.c === 'hidden' ? 'aborted_unresolved' : a0.c === 'ok' ? (a0.replayed ? 'aborted_original_applied' : 'aborted_original_not_applied') : a0.c === 'in_progress' ? 'aborted_original_in_flight' : 'aborted_unresolved';
      } else t.branch = f.transport_error ? 'first_request_failed' : 'responded';
      report.branches[t.branch]++;
      // violations first (they stand regardless of anything hidden), then what could not be established
      const firstProbe = !f.aborted && f.http === 200 && f.ok;
      const firstClass = firstProbe ? classify({ status: f.status, error: f.error, inconclusive: f.probe_inconclusive }) : null;
      // a fresh run's first answer must be its own execution: a replay or a request_in_progress is impossible legitimately
      const violation = ((firstClass === 'violation' || firstClass === 'in_progress' || (firstClass === 'ok' && f.replayed)) && 'unexpected_first_answer')
        || (answers.some((a) => a.c === 'violation') && 'unexpected_status')
        || (stateOk && st.body.effects > 1 && 'duplicate_effects')
        || (stateOk && !retryHidden && !t.unsettled && (st.body.effects !== 1 || !st.body.record || st.body.record.state !== 'completed') && 'invariant');
      if (violation) { report.failures.push({ interval, run, reason: violation }); continue; }
      const hidden = (f.transport_error && 'first_request_failed') || (!f.aborted && !f.aborted_after_headers && (f.non_json || f.http !== 200 || !f.ok || firstClass === 'hidden') && 'first_answer_hidden')
        || (retryHidden && 'retry_answer_hidden') || (!stateOk && 'state_unreadable') || (t.unsettled && 'not_settled_within_settle_ms');
      if (hidden) report.inconclusive.push({ interval, run, reason: hidden });
    } catch (e) {   // defensive: an unexpected error in this trial never discards the report
      report.inconclusive.push({ interval, run, reason: 'runner_error', error: String((e && e.message) || e).slice(0, 120) });
    }
  }
  return finish();
}
if (import.meta.url === `file://${process.argv[1]}`) {
  const token = process.env.IDEM_TOKEN || '';
  let base;
  try { base = checkBaseUrl('idem', (process.env.IDEM_BASE_URL || '').replace(/\/+$/, '')); } catch (e) { console.error(`REFUSED: ${e.message} — use with-probe-env.mjs`); process.exit(2); }
  if (token.length < 32) { console.error('REFUSED: IDEM_TOKEN (≥ 32 chars) is not set — use with-probe-env.mjs'); process.exit(2); }
  const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i > 0 ? process.argv[i + 1] : d; };
  const settleMs = Number(arg('settle-ms', 75_000)), intervals = String(arg('intervals', '5,10,25,50,100,200')).split(',').map(Number), trials = Number(arg('trials', 3));
  // the in-flight branch (a claim left by a cancelled invocation) only resolves after CLAIM_TTL_MS = 60 s (src/core.js)
  if (!(Number.isInteger(settleMs) && settleMs > 60_000) || !intervals.every((n) => Number.isInteger(n) && n >= 0) || !(Number.isInteger(trials) && trials >= 1)) {
    console.error('REFUSED: --settle-ms must exceed the 60 s claim TTL; --intervals non-negative integers; --trials ≥ 1'); process.exit(2);
  }
  let report;
  try { report = await runIdemAbort({ base, token, intervals, trials, settleMs }); }
  catch (e) { report = { verdict: 'inconclusive', inconclusive: [{ reason: 'runner_error', error: String((e && e.message) || e).slice(0, 120) }] }; }
  console.log(JSON.stringify({ base, ...report }, null, 2)); process.exit(report.verdict === 'pass' ? 0 : report.verdict === 'fail' ? 1 : 3);
}
