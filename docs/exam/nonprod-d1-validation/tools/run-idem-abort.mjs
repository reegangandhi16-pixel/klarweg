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
   Branch of an aborted trial (from the FIRST retry answer):
     aborted_original_applied        retry answered 200 replayed — the original had committed but the client never saw it
                                     (THE branch this check exists for)
     aborted_original_not_applied    retry executed at once — the original never claimed
     aborted_original_in_flight      retry got 503 first; final answer recorded (replay = original finished later;
                                     execution = takeover after the TTL, i.e. the original's invocation died holding its claim)
     responded                       the first answer's headers arrived before the abort (not ambiguous)
   What an aborted trial does and does not show: the CLIENT gave up before any response header. Whether the Worker
   invocation was then cancelled is not observable directly; the retry shows only the database outcome — a replay
   proves the original's batch COMMITTED (its completed record exists); an execution proves no claim existed; a 503
   proves a claim was pending (the original was still running, or its invocation died holding it).
   A transport error that is not the client's own abort, a non-JSON / non-200 first answer, or an abort after the 200
   headers never counts as aborted_original_applied.
   Verdict: FAIL on any invariant violation (effects > 1; or, once settled, effects ≠ 1, record not completed) or any
   unexpected probe status; INCONCLUSIVE if a platform answer (non-JSON / non-200) hid a result, a trial did not settle
   within --settle-ms, or no aborted_original_applied trial occurred; PASS otherwise. Exit codes: 0 pass, 1 fail, 3 inconclusive, 2 refused.
   Env: IDEM_BASE_URL, IDEM_TOKEN (use with-probe-env.mjs). Args: --intervals 5,10,25,50,100,200 --trials 3 --settle-ms 75000 */
export async function runIdemAbort({ base, token, fetchImpl = (...a) => fetch(...a), intervals = [5, 10, 25, 50, 100, 200], trials = 3,
  settleMs = 75_000, retryEveryMs = 2_000, sleep = (ms) => new Promise((r) => setTimeout(r, ms)), setTimer = (fn, ms) => setTimeout(fn, ms), clock = () => Date.now() }) {
  const headers = { 'x-idem-token': token };
  const call = async (method, path, signal) => { const r = await fetchImpl(base + path, { method, headers, signal }); let body = null; try { body = await r.json(); } catch { /* non-JSON */ } return { status: r.status, body }; };
  const report = { mode: 'client_abort_natural_timing', intervals, trials, settle_ms: settleMs, branches: { aborted_original_applied: 0, aborted_original_not_applied: 0, aborted_original_in_flight: 0, responded: 0, first_request_failed: 0 }, failures: [], inconclusive: [], results: [] };
  const v = await call('GET', '/idem/verify');
  if (!(v.status === 200 && v.body && v.body.verified === true)) { report.verdict = 'fail'; report.failures.push({ step: 'verify', status: v.status, error: v.body && v.body.error }); return report; }
  const okAnswer = (r) => r.status === 200 && r.body && r.body.ok === true;
  for (const interval of intervals) for (let i = 0; i < trials; i++) {
    const run = `abort-${interval}-${i}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`; const t = { interval, run };
    const prep = await call('POST', `/idem/race/prepare?kind=fresh&run=${run}`);
    if (!okAnswer(prep)) { report.inconclusive.push({ ...t, reason: 'prepare_failed', status: prep.status, error: prep.body && prep.body.error }); continue; }
    // First request. Only a CLIENT abort that happened BEFORE response headers arrived is ambiguous: the client then
    // cannot know whether the Worker received, committed or was cancelled. A transport error that is not our abort is
    // NOT an abort (never counted toward the key branch); an abort while reading the body after a 200 header is not
    // ambiguous at the status level and is counted as "responded".
    const ctl = new AbortController(); const timer = setTimer(() => ctl.abort(), interval);
    let res = null;
    try { res = await fetchImpl(base + `/idem/race/one?run=${run}`, { method: 'POST', headers, signal: ctl.signal }); }
    catch (e) {
      const ours = ctl.signal.aborted && e && e.name === 'AbortError';
      t.first = ours ? { aborted: true, stage: 'before_headers' } : { aborted: false, transport_error: (e && e.name) || 'error' };
    }
    if (res) {
      t.first = { aborted: false, http: res.status };
      try { const b = await res.json(); t.first.ok = !!(b && b.ok === true); t.first.status = b && b.status; t.first.replayed = !!(b && b.replayed); if (b && b.error) t.first.error = b.error; }
      catch { if (ctl.signal.aborted) t.first.aborted_after_headers = true; else t.first.non_json = true; }
    }
    clearTimeout(timer);
    const t0 = clock(); const answers = [];
    for (;;) {
      const r = await call('POST', `/idem/race/one?run=${run}`);
      if (!okAnswer(r)) { t.platform = { http: r.status, error: r.body && r.body.error }; break; }
      answers.push(`${r.body.status}${r.body.replayed ? ':replayed' : ''}${r.body.error ? ':' + r.body.error : ''}`);
      if (r.body.status === 200) break;
      if (!(r.body.status === 503 && r.body.error === 'request_in_progress')) break;           // anything else is unexpected
      if (clock() - t0 >= settleMs) { t.unsettled = true; break; }
      await sleep(retryEveryMs);
    }
    t.retry = answers;
    const st = await call('GET', `/idem/race/state?run=${run}`);
    t.state = okAnswer(st) ? { effects: st.body.effects, record: st.body.record && st.body.record.state } : { http: st.status };
    const last = answers[answers.length - 1] || '';
    const unexpected = answers.some((a) => !(a === '200' || a === '200:replayed' || a === '503:request_in_progress'));
    // a non-aborted first answer must be the probe's own 200 execution (fresh run, one request id)
    const f = t.first;
    const firstUnexpected = !f.aborted && f.http === 200 && f.ok && !(f.status === 200 && !f.replayed);
    const firstHidden = !f.aborted && (f.transport_error || f.non_json || (f.http !== undefined && f.http !== 200) || (f.http === 200 && !f.ok && !f.aborted_after_headers));
    if (firstUnexpected) report.failures.push({ ...t, reason: 'unexpected_first_answer' });
    else if (t.platform || !okAnswer(st)) report.inconclusive.push({ ...t, reason: 'platform_answer_hid_result' });
    else if (firstHidden) report.inconclusive.push({ ...t, reason: f.transport_error ? 'first_request_failed' : 'platform_answer_hid_result' });
    if (!firstUnexpected && !t.platform && okAnswer(st)) {
      const effects = st.body.effects, rec = st.body.record && st.body.record.state;
      if (effects > 1 || unexpected) report.failures.push({ ...t, reason: effects > 1 ? 'duplicate_effects' : 'unexpected_status' });
      else if (t.unsettled) report.inconclusive.push({ ...t, reason: 'not_settled_within_settle_ms' });
      else if (effects !== 1 || rec !== 'completed' || !last.startsWith('200')) report.failures.push({ ...t, reason: 'invariant' });
    }
    if (t.first.aborted) {
      t.branch = answers[0] === '200:replayed' ? 'aborted_original_applied' : answers[0] === '200' ? 'aborted_original_not_applied' : 'aborted_original_in_flight';
    } else t.branch = t.first.transport_error ? 'first_request_failed' : 'responded';
    report.branches[t.branch]++; report.results.push(t);
  }
  report.verdict = report.failures.length ? 'fail' : report.inconclusive.length || report.branches.aborted_original_applied === 0 ? 'inconclusive' : 'pass';
  return report;
}
if (import.meta.url === `file://${process.argv[1]}`) {
  const base = (process.env.IDEM_BASE_URL || '').replace(/\/+$/, ''); const token = process.env.IDEM_TOKEN || '';
  if (!/^https:\/\//.test(base) || token.length < 32) { console.error('Set IDEM_BASE_URL (https) and IDEM_TOKEN (≥ 32 chars) — use with-probe-env.mjs.'); process.exit(2); }
  const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i > 0 ? process.argv[i + 1] : d; };
  const settleMs = Number(arg('settle-ms', 75_000)), intervals = String(arg('intervals', '5,10,25,50,100,200')).split(',').map(Number), trials = Number(arg('trials', 3));
  // the in-flight branch (a claim left by a cancelled invocation) only resolves after CLAIM_TTL_MS = 60 s (src/core.js)
  if (!(Number.isInteger(settleMs) && settleMs > 60_000) || !intervals.every((n) => Number.isInteger(n) && n >= 0) || !(Number.isInteger(trials) && trials >= 1)) {
    console.error('REFUSED: --settle-ms must exceed the 60 s claim TTL; --intervals non-negative integers; --trials ≥ 1'); process.exit(2);
  }
  const report = await runIdemAbort({ base, token, intervals, trials, settleMs });
  console.log(JSON.stringify({ base, ...report }, null, 2)); process.exit(report.verdict === 'pass' ? 0 : report.verdict === 'fail' ? 1 : 3);
}
