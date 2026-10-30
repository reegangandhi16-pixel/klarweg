/* Live Classes — online course enrolment and the demo-booking retry:
   page switch, validator interlocks, frontend rules and the predeploy
   guard. node --test

   The Worker's payment logic is tested in
   access/worker/test/enrolments.test.mjs (real Worker, in-memory D1,
   Cashfree mocked). This file covers what ships to the browser and the
   gates in front of it. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync, execFileSync } from 'node:child_process';
import { ROOT, loadData, checkData } from './live-classes-readiness.mjs';

const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const clone = (x) => JSON.parse(JSON.stringify(x));
const code = (js) => js.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
const errorsOf = (D) => checkData(D).join('\n');

/* ================= the switch ================= */
test('SWITCH: online course enrolment is OFF in the committed data, and the page loads no enrolment script', () => {
  const D = loadData();
  assert.equal(D.liveEnrolment.enabled, false, 'recording the legal approval does not open enrolment');
  assert.equal(D.liveEnrolment.legalTermsUpdated, true, 'the owner reviewed and merged the online-payment wording (PR #183)');
  assert.equal(D.liveEnrolment.ownerApproval, null, 'no LAUNCH approval: reviewing legal wording is not approval to take payments');
  assert.match(read('live-classes-data.js'), /liveEnrolment: \{\s*enabled: false,\s*ownerApproval: null, +\/\/ LAUNCH approval only[^\n]*\n\s*legalTermsUpdated: true +\/\/ legal copy only: [^\n]*PR #183 \(merge 237f3486\), 2026-10-21/);
  assert.deepEqual(Object.keys(D.liveEnrolment).sort(), ['enabled', 'legalTermsUpdated', 'ownerApproval']);
  const live = read('kw-live.js');
  assert.match(live, /var ENROL_ON = !!\(D\.liveEnrolment && D\.liveEnrolment\.enabled === true\);/);
  assert.match(live, /if \(ENROL_ON\) loadScript\('kw-enrol\.js'\);/, 'kw-enrol.js is loaded only behind the switch');
  assert.equal((live.match(/kw-enrol\.js/g) || []).length >= 1 && !/<script[^>]+kw-enrol/.test(read('live-classes.html')), true, 'never a static <script> tag');
  assert.match(read('kw-enrol.js'), /if \(LE\.enabled !== true \|\| global\.KWEnrol\) return;/, 'the script is inert even if loaded by hand');
  assert.match(read('.github/pages-allowlist.txt'), /^kw-enrol\.js$/m);
});

test('VALIDATOR: enabling needs owner approval, updated legal text, an open published course, and payment terms without an emailed request', () => {
  const D = clone(loadData());
  assert.equal(errorsOf(D), '', 'the committed data is clean');
  D.liveEnrolment.enabled = true;
  let e = errorsOf(D);
  assert.match(e, /liveEnrolment: enabled needs ownerApproval/, 'refused: no launch approval is recorded');
  assert.equal(/legalTermsUpdated/.test(e), false, 'the legal wording is recorded');
  assert.match(e, /at least one published course with enrolment "open"/, 'still refused: A1 is a waitlist with no start date');
  const X = clone(D); X.liveEnrolment.legalTermsUpdated = false;
  assert.match(errorsOf(X), /legalTermsUpdated/, 'without the legal update it is refused');
  // a legal-copy-only note can never stand in for the launch approval
  for (const note of ['Owner reviewed the Terms §4A and Privacy wording and merged PR #183 (merge 237f3486), 2026-10-21. Legal copy only: this does not enable the switch.', 'Legal wording only, reviewed 2026-10-21', 'Owner reviewed the Terms and Privacy', 'Merged PR #183', 'Approved, but this does not enable payments']) {
    const L = clone(D); L.liveEnrolment.ownerApproval = note;
    assert.match(errorsOf(L), /liveEnrolment: ownerApproval records a legal-copy review, not approval to launch course payments/, note);
  }
  D.liveEnrolment.ownerApproval = 'Owner approved launching A1 online payments, email 2026-11-01';
  D.liveEnrolment.legalTermsUpdated = true;
  const a1 = D.courses.find((c) => c.id === 'live-a1');
  Object.assign(a1, { enrolment: 'open', nextBatch: '2 November 2026' });
  a1.paymentTerms = '₹7,999 in full before the first class. Paid by UPI or bank transfer on a payment request we email you.';
  assert.match(errorsOf(D), /course live-a1: paymentTerms still describe an emailed payment request/, 'old manual terms are refused at enable time');
  assert.match(errorsOf(D), /course live-a1: paymentTerms describe a manual or emailed payment: live courses are paid online only/);
  a1.paymentTerms = '₹7,999 in full before the first class. Paid online through Cashfree.';
  assert.equal(errorsOf(D), '');
  a1.paymentTerms = '₹7,999 before the first class, or two instalments: ₹4,000 now and ₹3,999 later. Paid online through Cashfree.';
  assert.match(errorsOf(D), /course live-a1: paymentTerms mention instalments: live courses are paid in full only/);
  D.liveEnrolment = { enabled: 'yes' };
  assert.match(errorsOf(D), /liveEnrolment: must be an object with enabled: true or false/);
});

/* ================= the browser never sets the price or decides success ================= */
test('KW-ENROL: sends only the course and the amount it was shown; never a plan or the gateway amount', () => {
  const js = code(read('kw-enrol.js'));
  const bodies = js.match(/body: \{[^}]*\}/g);
  assert.deepEqual(bodies, [
    'body: { course_id: q.courseId, expected_amount_paise: q.dueNowPaise }',
    'body: { course_id: e.courseId }'
  ]);
  assert.equal(/plan|instal|\/pay'|parts|dueBefore/i.test(js), false, 'full payment only: no plan, instalment or second-payment code');
  assert.match(js, /expected_amount_paise: q\.dueNowPaise/, 'the expected amount comes from the Worker\'s quote');
  assert.equal(/order_amount|amount_paise\s*:|amount\s*:/.test(js.replace('expected_amount_paise: q.dueNowPaise', '')), false);
  assert.equal(/order_status|payment_status|\bPAID\b|SUCCESS/.test(js), false, 'never reads the gateway status itself');
  assert.match(js, /e\.status === 'enrolled'/, 'confirmation comes from the Worker\'s enrolment status');
  assert.equal(/KWCheckout|kw-checkout|'\/orders|grantProduct|product_id/.test(js), false, 'separate from the self-paced checkout');
  assert.equal(/mailto:|sendMail|whatsapp/i.test(js), false, 'no message is sent');
  assert.equal(/CASHFREE_SECRET|cfsk_|x-client-secret/i.test(read('kw-enrol.js')), false, 'no secret in the browser');
  assert.match(js, /new URLSearchParams\(global\.location\.search\)\.get\('enrol_ref'\)/);
  assert.match(js, /REF_RE = \/\^KWE-\[2-9A-HJ-NP-Z\]\{8\}\$\//, 'only a well-formed reference is looked up');
});

test('KW-ENROL: every outcome has a screen — enrolled, pending with Continue payment, review, not completed, cancelled', () => {
  const js = read('kw-enrol.js');
  for (const s of ['You are enrolled', 'Payment not completed yet', 'Your payment is being checked', 'This enrolment was not completed', 'This enrolment was cancelled',
    'Continue payment', 'Check again', 'Start again', 'Nothing more is due', 'If the payment failed or you cancelled it, nothing was charged']) {
    assert.ok(js.includes(s), `has "${s}"`);
  }
  assert.equal(js.includes('Pay second instalment'), false);
  assert.match(js, /'<div class="kwen-due"><dt>Due now, in full<\/dt><dd>' \+ rupees\(q\.dueNowPaise\)/, 'the full amount due is shown before payment');
  assert.match(js, /id="kwen-pay" disabled>Pay ' \+ rupees\(q\.dueNowPaise\)/, 'the pay button names the exact amount and waits for the terms box');
  assert.match(js, /TEST MODE · no real payment/);
});

test('KW-LIVE: an open course gets "Enrol and pay online" only when enrolment is on; waitlist courses never do', () => {
  const live = read('kw-live.js');
  assert.match(live, /ENROL_ON && c\.enrolment === 'open' && !c\.draft\s*\n/);
  assert.match(live, /data-enrol-course="' \+ esc\(c\.id\) \+ '">Enrol and pay online/);
});

/* ================= teacher prices: unchanged, display only ================= */
test('PRICES: every listed teacher\'s A1 price is exactly the approved one, and none of them is sold except through a configured course', async () => {
  const D = loadData();
  assert.deepEqual({ ...D.coursePricing.teachers }, {
    'reegan-gandhi': '₹7,999', 'geetika-dhawan': '₹7,999', 'priyanshi-verma': '₹15,000', 'sunidhi-jain': '₹14,000',
    'mansi-kapoor': '₹13,000', 'gaurav-singhal': '₹12,000', 'kanika-taneja': '₹14,000', 'trisha-khanna': '₹13,000',
    'rashi-gupta': '₹12,000', 'deepika-agarwal': '₹13,000', 'sahil-arora': '₹15,000'
  });
  const shown = [...D.teachers.filter((t) => !t.draft).map((t) => t.id)].sort();
  assert.deepEqual([...Object.keys(D.coursePricing.teachers)].sort(), shown, 'one price per published teacher, no more, no fewer');
  const { LIVE_COURSES } = await import('../access/worker/src/enrolments.js');
  assert.deepEqual(Object.keys(LIVE_COURSES), ['live-a1'], 'the Worker sells only the configured A1 course');
  assert.equal(LIVE_COURSES['live-a1'].feePaise, 799900);
  const a1 = D.courses.find((c) => c.id === 'live-a1');
  assert.deepEqual([...a1.teacherIds], ['reegan-gandhi']);
  assert.equal('₹' + (LIVE_COURSES['live-a1'].feePaise / 100).toLocaleString('en-IN'), D.coursePricing.teachers['reegan-gandhi'], 'the A1 fee equals its teacher\'s displayed price');
});

/* ================= demo booking: email is not the booking mechanism ================= */
test('DEMO BOOKING: there is no emailed consultation request in either state; with booking on the closed notice goes and kw-consult.js loads', () => {
  const live = read('kw-live.js'), html = read('live-classes.html');
  assert.equal(/name="rtype"|value="consult"/.test(html), false, 'the request form is the free waitlist only');
  assert.equal(/Live class consultation request|requestType|setRequestType/.test(live), false, 'no emailed consultation request is ever prepared');
  const fn = live.slice(live.indexOf('function initOnlineBooking'), live.indexOf('function init()'));
  assert.match(fn, /if \(!BOOK_ON\) return;[\s\S]*consult-closed'\)\.hidden = true;[\s\S]*loadScript\('kw-consult\.js'\)/);
});

test('DEMO BOOKING: a pending booking offers Continue payment, which re-posts the same slot (the Worker resumes the same order)', () => {
  const js = read('kw-consult.js');
  assert.match(js, /id="kwcb-resume">Continue payment</);
  assert.match(js, /e\.target\.id === 'kwcb-resume' && pendingBooking\) return create\(pendingBooking\.teacherId, pendingBooking\.slotStart\)/);
  assert.match(read('access/worker/src/consultations.js'), /pending\.teacher_id === teacherId && pending\.date === clock\.date && pending\.slot_start === slot && pending\.payment_session_id\)[\s\S]{0,40}resumed: true/);
  assert.match(js, /If the payment failed or you cancelled it, nothing was charged/);
});

/* ================= the predeploy guard ================= */
/* Runs the real guard on a temporary copy of the files it reads, with the
   production wrangler.toml plus one change. The live check is pointed at
   an unreachable port, so a run that passes every rule ends with
   "could not read the live Worker" and changes nothing. */
const PROD_TOML = read('access/worker/wrangler.toml');
const tomlVal = (k) => ((PROD_TOML.replace(/#.*$/gm, '').match(new RegExp(`^\\s*${k}\\s*=\\s*"([^"]*)"`, 'm')) || [])[1] ?? null);
function guard({ toml = PROD_TOML, data = null, flags = [] } = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-enrol-guard-'));
  try {
    fs.writeFileSync(path.join(dir, 'package.json'), '{"type":"module"}');
    fs.cpSync(path.join(ROOT, 'scripts'), path.join(dir, 'scripts'), { recursive: true });
    fs.cpSync(path.join(ROOT, 'access', 'worker', 'src'), path.join(dir, 'access', 'worker', 'src'), { recursive: true });
    fs.writeFileSync(path.join(dir, 'access', 'worker', 'wrangler.toml'), toml);
    fs.writeFileSync(path.join(dir, 'live-classes-data.js'), data || read('live-classes-data.js'));
    const speech = tomlVal('SPEECH_MODE');
    const base = ['--allow-ai-enabled', `--allow-speech=${speech}`, `--allow-speech-scope=${tomlVal('SPEECH_SCOPE') || 'list'}`];
    const r = spawnSync(process.execPath, [path.join(dir, 'scripts', 'predeploy-access-check.mjs'), ...base, ...flags],
      { encoding: 'utf8', env: { ...process.env, KW_ACCESS_LIVE_URL: 'http://127.0.0.1:9/' }, timeout: 30000 });
    return (r.stdout || '') + (r.stderr || '');
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
}
const setIn = (toml, k, v) => toml.replace(new RegExp(`^${k} = .*$`, 'm'), `${k} = ${v}`);
const set = (k, v) => setIn(PROD_TOML, k, v);
/* Production takes live payments; the sandbox-only rules are exercised on a
   copy switched back to Cashfree's sandbox (as wrangler.payments-sandbox.toml is). */
const SANDBOX_TOML = setIn(setIn(PROD_TOML, 'CASHFREE_ENV', '"sandbox"'), 'CASHFREE_APP_ID', '"TEST0000000000"');
const setSandbox = (k, v) => setIn(SANDBOX_TOML, k, v);
const OPEN_DATA = read('live-classes-data.js').replace("enrolment: 'waitlist'", "enrolment: 'open'");

test('GUARD: the committed config passes every enrolment rule (payments off)', () => {
  assert.equal(tomlVal('ENROL_PAYMENTS'), 'off');
  assert.equal(tomlVal('ENROL_COURSES'), '');
  assert.equal(tomlVal('CASHFREE_ENV'), 'production');
  assert.equal(tomlVal('ENROL_CONSULT_CREDIT'), 'course-fee', 'owner decision D11: the ₹100 consultation is credited against the course fee');
  const out = guard();
  assert.match(out, /could not read the live Worker/, out);
  assert.equal(/ENROL_/.test(out), false, out);
});

test('GUARD: payments on need the explicit flag, the matching Cashfree environment and a recorded ₹100 decision', () => {
  assert.match(guard({ toml: set('ENROL_PAYMENTS', '"maybe"') }), /must be "off", "sandbox" or "live"/);
  assert.match(guard({ toml: set('ENROL_PAYMENTS', '"sandbox"') }), /--allow-enrol-payments=sandbox/);
  assert.match(guard({ toml: set('ENROL_PAYMENTS', '"sandbox"'), flags: ['--allow-enrol-payments=sandbox'] }), /ENROL_PAYMENTS="sandbox" needs CASHFREE_ENV="sandbox"/);
  assert.match(guard({ toml: setSandbox('ENROL_PAYMENTS', '"live"'), flags: ['--allow-enrol-payments=live'] }), /ENROL_PAYMENTS="live" needs CASHFREE_ENV="production"/);
  const credit = (v) => setSandbox('ENROL_PAYMENTS', '"sandbox"').replace(/^ENROL_CONSULT_CREDIT = .*\n/m, v == null ? '' : `ENROL_CONSULT_CREDIT = ${v}\n`);
  assert.match(guard({ toml: credit(null), flags: ['--allow-enrol-payments=sandbox'] }), /ENROL_CONSULT_CREDIT is not set/);
  assert.match(guard({ toml: credit('"sometimes"'), flags: ['--allow-enrol-payments=sandbox'] }), /must be "off" or "course-fee"/);
  for (const v of ['"off"', '"course-fee"']) assert.match(guard({ toml: credit(v), flags: ['--allow-enrol-payments=sandbox'] }), /could not read the live Worker/, v);
});

test('GUARD: ENROL_COURSES must name a course the Worker sells and the page shows as open, with a batch date', () => {
  const on = (courses) => set('ENROL_COURSES', courses);
  assert.match(guard({ toml: on('{"live-a1":{"batch":"2026-11-02"}}') }), /must be a quoted TOML string/);
  assert.match(guard({ toml: on(`'{not json'`) }), /not valid JSON/);
  assert.match(guard({ toml: on(`'{"live-c2":{"batch":"2026-11-02"}}'`) }), /"live-c2", which the Worker does not sell/);
  assert.match(guard({ toml: on(`'{"live-a1":{"batch":"2026-11-02"}}'`) }), /"live-a1", which is not published with enrolment "open"/, 'the A1 course is a waitlist today');
  assert.match(guard({ toml: on(`'{"live-a1":{}}'`), data: OPEN_DATA }), /needs a batch start date/);
  for (const v of [`'{"live-a1":{"batch":"2026-11-02"}}'`, `"{\\"live-a1\\":{\\"batch\\":\\"2026-11-02\\"}}"`]) {
    assert.match(guard({ toml: on(v), data: OPEN_DATA }), /could not read the live Worker/, `accepts ${v}`);
  }
});

/* ================= scope ================= */
test('SCOPE: no Exam Portal, audio, legal, or self-paced checkout file changes on this branch', { skip: (() => { try { execFileSync('git', ['rev-parse', '--verify', 'origin/main'], { cwd: ROOT, stdio: 'ignore' }); return false; } catch { return 'origin/main not available'; } })() }, () => {
  const base = execFileSync('git', ['merge-base', 'HEAD', 'origin/main'], { cwd: ROOT, encoding: 'utf8' }).trim();
  const changed = execFileSync('git', ['diff', '--name-only', base], { cwd: ROOT, encoding: 'utf8' }).split('\n').filter(Boolean);
  const forbidden = changed.filter((f) => /^(exam|exam-content|exam-worker|audio|public\/audio)\/|audio|^refund-policy\.html$|^kw-checkout\.js$|^kw-products\.js$|^kw-auth\.js$|^access\/worker\/src\/(orders|entitlements|products|exam-proxy)\.js$/i.test(f));
  assert.deepEqual(forbidden, []);
});
