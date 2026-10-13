#!/usr/bin/env node
/* LOCAL-ONLY driver for the probe's fail-closed qualification (runbook T7 and the /verify gate). It only sends HTTP
   requests to the track's own workers.dev URL; with the expected refusals nothing is written by the probe.
     node qualify-check.mjs --track idem|v10 --secrets <dir>/secrets.json --base <url> --expect disabled|no-marker|verified
   Stages and what must be observed (exact status AND error code):
     disabled   probe switched off  → GET /verify without a token: 403 probe_disabled; with the real token: 403 probe_disabled
     no-marker  probe on, schema applied, marker NOT inserted
                → wrong token (same length): 401 unauthorised
                → real token: GET /verify 412 marker_missing_or_ambiguous, and a WRITE route 412 marker_missing_or_ambiguous
     verified   marker inserted → GET /verify 200 { verified: true, label: <track label> }
     fault-off  (V10 only) after the forced-ambiguity window → POST /v10/claim with post_commit_delay_ms=1 is refused
                400 fault_injection_disabled. The probe validates that parameter BEFORE the claim runs, so nothing is written
   Prints a JSON evidence record (never the token). Exit 0 = every expectation met, 1 = any mismatch, 2 = refused to run.
   Row counts before/after the refused requests are taken separately with read-only SQL (runbook step R-8). */
import crypto from 'node:crypto';
import { trackOf } from './tracks.mjs';
import { runnerEnv } from './with-probe-env.mjs';

export async function qualify({ track, base, token, expect, fetchImpl = fetch }) {
  const t = trackOf(track);
  const call = async (method, path, tok) => {
    const r = await fetchImpl(base + path, { method, headers: tok ? { [t.tokenHeader]: tok } : {} });
    let body = null; try { body = await r.json(); } catch { /* not the probe's JSON */ }
    return { method, path, status: r.status, error: body && body.error, verified: body && body.verified, label: body && body.label };
  };
  const checks = [];
  const want = (name, got, status, extra = {}) => checks.push({ name, ...got, pass: got.status === status && Object.entries(extra).every(([k, v]) => got[k] === v), want: { status, ...extra } });
  const run = `qualify-${Date.now().toString(36)}-${crypto.randomBytes(3).toString('hex')}`;
  if (expect === 'disabled') {
    want('no token → probe_disabled', await call('GET', t.verifyPath, null), 403, { error: 'probe_disabled' });
    want('real token → probe_disabled', await call('GET', t.verifyPath, token), 403, { error: 'probe_disabled' });
  } else if (expect === 'no-marker') {
    const wrong = crypto.randomBytes(token.length).toString('hex').slice(0, token.length);
    want('wrong token → unauthorised', await call('GET', t.verifyPath, wrong), 401, { error: 'unauthorised' });
    want('verify without marker → 412', await call('GET', t.verifyPath, token), 412, { error: 'marker_missing_or_ambiguous' });
    want('write route without marker → 412', await call('POST', t.writeProbePath(run), token), 412, { error: 'marker_missing_or_ambiguous' });
  } else if (expect === 'verified') {
    want('verify → verified', await call('GET', t.verifyPath, token), 200, { verified: true, label: t.label });
  } else if (expect === 'fault-off') {
    if (track !== 'v10') throw new Error('--expect fault-off applies to the v10 track only');
    want('verify → verified', await call('GET', t.verifyPath, token), 200, { verified: true, label: t.label });
    want('fault injection refused', await call('POST', `/v10/claim?run=${run}&op=fault-check&post_commit_delay_ms=1`, token), 400, { error: 'fault_injection_disabled' });
  } else throw new Error('--expect must be disabled | no-marker | verified | fault-off');
  return { track, expect, at: new Date().toISOString(), pass: checks.every((c) => c.pass), checks };
}
if (import.meta.url === `file://${process.argv[1]}`) {
  const arg = (k) => { const i = process.argv.indexOf(`--${k}`); return i > 0 ? process.argv[i + 1] : undefined; };
  try {
    const track = arg('track'); const env = runnerEnv({ track, secretsFile: arg('secrets'), base: arg('base') }); const t = trackOf(track);
    const r = await qualify({ track, base: env[t.runnerEnv.base], token: env[t.runnerEnv.token], expect: arg('expect') });
    console.log(JSON.stringify(r, null, 2)); process.exit(r.pass ? 0 : 1);
  } catch (e) { console.error(`REFUSED: ${e.message}`); process.exit(2); }
}
