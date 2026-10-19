/* Rater UI support on the server: GET /admin/rating-queue and the extended GET /admin/attempts/<id>/productive.
   Authorization stays on the server; no learner identity, no other rater's bands; the existing POST /admin/ratings
   rules (role, own attempt, independence, no duplicate round) are exercised through the same data the UI uses. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { setup, call, newUser, role } from './harness.mjs';
import { start, submit, answerObjective, runHoeren, runSchreiben, runSprechen, complete } from './flow.mjs';
import { ratingRound, missingCriteria, ERROR_TEXT, mfaVerifyView, mfaEnrolStartView, mfaEnrolView, mfaCodesView } from '../../exam/js/rating.js';
import { esc } from '../../exam/js/render.js';
import fs from 'node:fs';

async function finishedAttempt() {
  const s = await setup();
  await start(s, 'lesen'); await answerObjective(s, 'lesen'); await submit(s, 'lesen');
  await runHoeren(s, (it, k) => k.correct); await submit(s, 'hoeren');
  await runSchreiben(s); await submit(s, 'schreiben');
  await runSprechen(s); await submit(s, 'sprechen');
  await complete(s);
  return s;
}
const queue = (s, user) => call(s.env, 'GET', '/exam/v1/admin/rating-queue', { user });
const productive = (s, user) => call(s.env, 'GET', `/exam/v1/admin/attempts/${s.attempt}/productive`, { user });
const rate = (s, user, body) => call(s.env, 'POST', '/exam/v1/admin/ratings', { user, body: { attempt_id: s.attempt, ...body } });
const allBands = (u, band = 'B') => Object.fromEntries(Object.keys(u.criteria).map((c) => [c, band]));

test('RATER API: queue and productive data are staff-only; no learner identity; a rater never sees or rates their own attempt', async () => {
  const s = await finishedAttempt();
  const learner2 = newUser(), r1 = newUser();
  await role(s.env, r1, 'rater');
  for (const u of [s.user, learner2]) {
    for (const r of [await queue(s, u), await productive(s, u)]) { assert.equal(r.status, 403, JSON.stringify(r.json)); assert.equal(r.json.error, 'rater_role_required'); }
    const x = await rate(s, u, { item_id: 'sprechen:pron', round: 1, bands: { aussprache: 'A' } });
    assert.equal(x.status, 403, 'unauthorized rating request fails');
  }
  const r = await call(s.env, 'GET', '/exam/v1/admin/rating-queue', {});
  assert.ok(r.status === 401 || r.status === 403, `unauthenticated → ${r.status}`);
  const q = await queue(s, r1);
  assert.equal(q.status, 200);
  const entry = q.json.attempts.find((a) => a.attempt_id === s.attempt);
  assert.ok(entry, 'the submitted attempt is in the queue');
  assert.deepEqual(entry.modules.map((m) => [m.module, m.score_status]).sort(), [['schreiben', 'pending_rating'], ['sprechen', 'pending_rating']]);
  assert.equal(JSON.stringify(q.json).includes(s.user), false, 'no learner identity in the queue');
  // a rater who is also the learner of an attempt neither sees it nor can open or rate it
  await role(s.env, s.user, 'rater');
  assert.equal((await queue(s, s.user)).json.attempts.some((a) => a.attempt_id === s.attempt), false);
  assert.equal((await productive(s, s.user)).json.error, 'cannot_rate_own_attempt');
  assert.equal((await rate(s, s.user, { item_id: 'sprechen:pron', round: 1, bands: { aussprache: 'A' } })).json.error, 'cannot_rate_own_attempt');
});

test('RATER API: productive returns what the rating API validates; rounds are tracked without revealing another rater\'s bands; finals leave the queue', async () => {
  const s = await finishedAttempt();
  const r1 = newUser(), r2 = newUser();
  await role(s.env, r1, 'rater'); await role(s.env, r2, 'rater');
  let d = (await productive(s, r1)).json;
  assert.deepEqual(d.bands, ['A', 'B', 'C', 'D', 'E']);
  assert.deepEqual(d.units.map((u) => u.module).sort(), [...Array(3).fill('schreiben'), ...Array(4).fill('sprechen')].sort());
  assert.ok(d.units.some((u) => u.item_id === 'sprechen:pron'));
  assert.ok(d.units.every((u) => Object.keys(u.criteria).length && u.rounds_taken.length === 0));
  assert.ok(d.writing.length === 3 && d.recordings.length > 0);
  assert.equal(ratingRound(d, 'schreiben'), 1);
  // rater 1 rates everything in round 1 (the data the UI shows is enough to build valid requests)
  for (const u of d.units) { const x = await rate(s, r1, { item_id: u.item_id, round: 1, bands: allBands(u) }); assert.equal(x.status, 200, JSON.stringify(x.json)); }
  assert.equal((await rate(s, r1, { item_id: d.units[0].item_id, round: 1, bands: allBands(d.units[0]) })).json.error, 'already_rated', 'no duplicate round');
  assert.equal((await rate(s, r1, { item_id: d.units[0].item_id, round: 2, bands: allBands(d.units[0]) })).json.error, 'rater_not_independent');
  d = (await productive(s, r1)).json;
  assert.ok(d.units.every((u) => u.rounds_taken.some((r) => r.round === 1 && r.mine)));
  assert.equal(ratingRound(d, 'sprechen'), 1, 'a rater stays in their round');
  const d2 = (await productive(s, r2)).json;
  assert.ok(d2.units.every((u) => u.rounds_taken.length === 1 && u.rounds_taken[0].mine === false));
  assert.equal(/bands_json|"aussprache":"B"|rater_id/.test(JSON.stringify(d2)), false, 'another rater\'s bands and identity are not revealed');
  assert.equal(ratingRound(d2, 'schreiben'), 2);
  assert.deepEqual(missingCriteria(d2.units[0], {}), Object.keys(d2.units[0].criteria));
  for (const u of d2.units) { const x = await rate(s, r2, { item_id: u.item_id, round: 2, bands: allBands(u) }); assert.equal(x.status, 200, JSON.stringify(x.json)); }
  const after = (await productive(s, r2)).json;
  assert.deepEqual(after.modules.map((m) => m.score_status), ['final', 'final']);
  assert.equal((await queue(s, r1)).json.attempts.some((a) => a.attempt_id === s.attempt), false, 'final attempts leave the queue');
  const res = await call(s.env, 'GET', `/exam/v1/attempts/${s.attempt}/result`, { user: s.user });
  const by = Object.fromEntries(res.json.result.modules.map((m) => [m.module, m]));
  assert.equal(by.schreiben.status, 'final'); assert.equal(by.sprechen.status, 'final');
  assert.equal(by.schreiben.points, after.modules[0].points); assert.equal(by.sprechen.points, after.modules[1].points);
});

test('RATER UI: every refusal a rater can meet in normal use has a German message, incl. lost connection and rate limit', () => {
  for (const code of ['auth_required', 'rater_role_required', 'cannot_rate_own_attempt', 'rater_not_independent', 'already_rated', 'lead_rater_required',
    'module_not_submitted', 'recording_not_found', 'recording_unavailable', 'recording_integrity', 'attempt_not_found', 'rate_limited', 'network']) {
    assert.ok(typeof ERROR_TEXT[code] === 'string' && ERROR_TEXT[code].length > 10, code);
  }
  // a rating is never retried, so a lost response may have been saved: the message must not claim otherwise
  assert.equal(/nichts gespeichert|nicht gespeichert/.test(ERROR_TEXT.network), false);
});

test('RATER UI (OD-19): second-factor screens — labelled inputs, one-time-code autofill, escaping, codes shown once with a confirmation, every staff call routes mfa_required to them', () => {
  const v = mfaVerifyView(esc, { error: '<b>x</b>' });
  assert.match(v, /<label for="kx-mfa-code">/); assert.match(v, /id="kx-mfa-code"[^>]*autocomplete="one-time-code"/); assert.match(v, /inputmode="numeric"/);
  assert.match(v, /role="alert">&lt;b&gt;x&lt;\/b&gt;</); assert.match(v, /data-act="mfa-use-recovery"/);
  const rv = mfaVerifyView(esc, { recovery: true });
  assert.match(rv, /<label for="kx-mfa-recovery">Wiederherstellungscode<\/label>/); assert.match(rv, /data-mfa="recovery"/);
  assert.match(mfaEnrolStartView(esc), /data-act="mfa-enrol"/);
  const ev = mfaEnrolView(esc, { secret: 'ABCDEFGHIJKLMNOP', uri: 'otpauth://totp/Klarweg:a"b?secret=X' });
  assert.match(ev, /ABCD EFGH IJKL MNOP/); assert.ok(ev.includes('href="otpauth://totp/Klarweg:a&quot;b?secret=X"'), 'the link is escaped');
  const codes = Array.from({ length: 10 }, (_, i) => `aaaa${i}-bbbbb`);
  const cv = mfaCodesView(esc, codes);
  assert.equal((cv.match(/<li><code>/g) || []).length, 10); assert.match(cv, /nur jetzt/); assert.match(cv, /id="kx-mfa-saved" required/);
  for (const c of ['cookies_blocked', 'mfa_required', 'mfa_invalid_code', 'mfa_rate_limited', 'mfa_locked', 'mfa_unavailable', 'mfa_not_enrolled', 'mfa_no_pending_enrolment', 'mfa_reset_required']) assert.ok(ERROR_TEXT[c], c);
  const rater = fs.readFileSync(new URL('../../exam/js/rater.js', import.meta.url), 'utf8');
  assert.equal((rater.match(/mfaNeeded\((e|err)\)/g) || []).length, 4, 'queue, attempt, rating and recording all route mfa_required to the second-factor screens');
  assert.equal((rater.match(/mfaDown\((e|err)\)/g) || []).length, 4, 'queue, attempt, rating and recording all drop to the unavailable notice (A4 row 10)');
  assert.match(rater, /function showUnavailable\(\) {\n  current = null; unsaved = null;/, 'nothing loaded stays on screen');
  assert.match(rater, /if \(st\.available === false\) return showUnavailable\(\);/, 'during a key outage the second-factor screen offers no form, only the notice');
  const api = fs.readFileSync(new URL('../../exam/js/api.js', import.meta.url), 'utf8');
  assert.match(api, /mfaVerify: \(b\) => once\('POST', '\/auth\/mfa\/verify'/, 'a code is never sent twice by a retry');
  assert.match(api, /mfaConfirm: \(code\) => once\(/);
});
