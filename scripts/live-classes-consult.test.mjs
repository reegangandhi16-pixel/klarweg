/* Live Classes — teacher candidates, honest reviews, availability
   labels and the online-booking switch. node --test

   The 11 people the owner named on 2026-10-20 are kept in
   docs/live-classes-candidates.json under opaque ids. On 2026-10-21 the
   owner listed the other 10 by name and title, with their consent
   (status "listed", listedAs = the card in live-classes-data.js). The
   private roster stays outside this public repository; set
   KW_CANDIDATE_ROSTER=<path to candidate-roster.csv> to check it too. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import {
  ROOT, loadData, checkData, reviewSummary, loadCandidates, checkCandidates, CANDIDATE_DRAFT_KEYS, CANDIDATE_LISTED_KEYS,
  LISTED_KEYS, publishedTeacherIds, PRIVATE_LINK_RE
} from './live-classes-readiness.mjs';
import { ELIGIBLE_TEACHERS } from '../access/worker/src/consultations.js';

const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const clone = (x) => JSON.parse(JSON.stringify(x));

/* kw-live.js's own reviewSummary, run without a page (it is exposed
   before the script needs any data or DOM). */
function kwLiveSummary() {
  const ctx = { window: {} };
  vm.runInNewContext(read('kw-live.js'), ctx);
  return ctx.window.KWLiveReviews.summary;
}

/* ================= candidates ================= */
const OPAQUE = Array.from({ length: 10 }, (_, i) => `candidate-${String(i + 1).padStart(2, '0')}`);
const asDraft = (c) => ({ id: c.id, status: 'draft', bookingEligible: c.bookingEligible, profile: null, consent: null, photoConsent: null, availability: null, reviews: [] });

test('CANDIDATES: all 11 named people are represented — the owner published, the other 10 listed by name and title only', () => {
  const list = loadCandidates();
  assert.equal(list.length, 11);
  assert.deepEqual(list.filter((c) => c.status === 'published').map((c) => c.id), ['reegan-gandhi']);
  const listed = list.filter((c) => c.status === 'listed');
  assert.deepEqual(listed.map((c) => c.id), OPAQUE, 'the opaque ids stay: they are the booking ids in the Worker');
  for (const c of listed) for (const k of Object.keys(c)) assert.ok(CANDIDATE_LISTED_KEYS.includes(k), `${c.id} carries ${k}`);
  for (const c of list.filter((x) => x.status === 'draft')) for (const k of ['profile', 'consent', 'photoConsent', 'availability']) assert.equal(c[k], null, `${c.id}.${k}`);
  assert.deepEqual(checkCandidates(list, loadData(), ELIGIBLE_TEACHERS), []);
});

test('CANDIDATES: no invented fact can be added, and nobody is shown as published without a full profile', () => {
  const D = loadData();
  const base = loadCandidates();
  const bad = (edit, re) => {
    const list = clone(base); edit(list);
    assert.ok(checkCandidates(list, D, ELIGIBLE_TEACHERS).some((e) => re.test(e)), re.source);
  };
  for (const k of ['name', 'qualifications', 'experience', 'goethe', 'teachesIn', 'specialisms', 'photo', 'bio', 'rating']) {
    bad((l) => { l[1][k] = 'x'; }, new RegExp(`listed candidate carries "${k}"`));
    bad((l) => { l[1] = { ...asDraft(l[1]), [k]: 'x' }; }, new RegExp(`draft candidate carries "${k}"`));
  }
  bad((l) => { l[2] = { ...asDraft(l[2]), consent: 'Email, 2026-11-01' }; }, /consent set/);
  bad((l) => { l[3] = { ...asDraft(l[3]), availability: 'Weekdays' }; }, /availability set/);
  bad((l) => { l[4] = { ...asDraft(l[4]), reviews: [{ rating: 5 }] }; }, /has reviews/);
  bad((l) => { l[5].status = 'published'; }, /no published teacher with a full profile/);
  bad((l) => { l[5].listedAs = 'nobody'; }, /is not a listed teacher/);
  bad((l) => { l[5].listedAs = 'reegan-gandhi'; }, /is not a listed teacher/);
  bad((l) => { l[6].bookingEligible = true; }, /must match ELIGIBLE_TEACHERS/);
  bad((l) => { l.pop(); }, /expected the 11 people/);
  bad((l) => { l[7].status = 'bookable'; }, /allowed: draft, listed, published/);
});

test('CANDIDATES: the page shows the owner first, then the 10 listed teachers in the owner\'s order — name and title only', () => {
  const D = loadData();
  const shown = D.teachers.filter((t) => !t.draft);
  const listedAs = loadCandidates().filter((c) => c.status === 'listed').map((c) => c.listedAs);
  assert.deepEqual([...shown.map((t) => t.id)], ['reegan-gandhi', ...listedAs], 'Reegan first, then candidate-01 … candidate-10 in order');
  assert.equal(D.teachers.some((t) => /^candidate-/.test(t.id)), false);
  for (const t of shown.slice(1)) {
    assert.equal(t.tier, 'listed', t.id);
    for (const k of Object.keys(t)) assert.ok(LISTED_KEYS.includes(k), `${t.id} carries ${k}`);
    assert.equal(t.title, 'German Language Teacher');
    assert.equal(t.photo, null, `${t.id}: no photo without photo consent`);
    assert.match(t.consent, /^Owner confirmed on 2026-10-21 that the teacher agreed to be listed by name and title$/);
  }
  // levels only where the owner stated them: candidate-01, A1–B1
  assert.deepEqual([...shown[1].levels], ['A1', 'A2', 'B1']);
  for (const t of shown.slice(2)) assert.equal(t.levels, undefined, `${t.id} has no stated levels`);
  // booking may only ever name full profiles
  assert.deepEqual([...publishedTeacherIds()], ['reegan-gandhi']);
});

test('CANDIDATES: only the owner and candidate-01 are booking-eligible, in the data and in the Worker', () => {
  assert.deepEqual(loadCandidates().filter((c) => c.bookingEligible).map((c) => c.id), [...ELIGIBLE_TEACHERS]);
});

test('LISTED tier: the validator refuses anything beyond name, title, stated levels and consent', () => {
  const D = loadData();
  const one = { id: 'test-listed', tier: 'listed', name: 'Test Listed', title: 'German Language Teacher', photo: null, consent: 'Owner confirmed, 2026-11-01' };
  const errs = (t, extra = (x) => x) => checkData(extra({ ...clone(D), teachers: clone(D.teachers).concat(t) }));
  assert.deepEqual(errs(one), []);
  assert.deepEqual(errs({ ...one, levels: ['A1'] }), []);
  for (const k of ['experience', 'headline', 'qualifications', 'goethe', 'proficiency', 'teachesIn', 'formats', 'specialisms', 'availability', 'rating']) {
    assert.ok(errs({ ...one, [k]: 'x' }).some((e) => e.includes(`carries "${k}"`)), k);
  }
  assert.ok(errs({ ...one, title: 'Senior German Trainer' }).some((e) => /title/.test(e)));
  assert.ok(errs({ ...one, consent: null }).some((e) => /needs consent/.test(e)));
  assert.ok(errs({ ...one, name: '' }).some((e) => /needs name/.test(e)));
  assert.ok(errs({ ...one, levels: ['A9'] }).some((e) => /levels/.test(e)));
  assert.ok(errs({ ...one, photo: 'public/teachers/none.jpg', photoAlt: 'x' }).some((e) => /does not exist|photoConsent/.test(e)));
  assert.ok(errs({ ...one, tier: 'featured' }).some((e) => /tier "featured"/.test(e)));
  assert.ok(errs(one, (d) => { d.courses.find((c) => !c.draft).teacherIds.push('test-listed'); return d; }).some((e) => /names listed teacher/.test(e)));
});

const ROSTER = process.env.KW_CANDIDATE_ROSTER;
test('PRIVATE ROSTER: the 11 names map to the repository ids; a listed name appears only on its card', { skip: !ROSTER && 'KW_CANDIDATE_ROSTER not set (the roster is private and never in CI)' }, () => {
  const rows = fs.readFileSync(ROSTER, 'utf8').trim().split('\n').slice(1).map((l) => l.match(/^([^,]+),([^,]+),/)).map((m) => ({ id: m[1], name: m[2] }));
  assert.equal(rows.length, 11);
  assert.deepEqual(rows.map((r) => r.id).sort(), loadCandidates().map((c) => c.id).sort());
  const D = loadData();
  assert.equal(rows.find((r) => r.id === 'reegan-gandhi').name, D.teachers.find((t) => t.id === 'reegan-gandhi').name);
  const byId = Object.fromEntries(loadCandidates().map((c) => [c.id, c]));
  const files = execFileSync('git', ['ls-files'], { cwd: ROOT, encoding: 'utf8' }).split('\n').filter((f) => f && !/\.(png|jpe?g|webp|gif|ico|mp3|ogg|wav|pdf|woff2?)$/i.test(f));
  for (const r of rows.filter((x) => x.id !== 'reegan-gandhi')) {
    const c = byId[r.id];
    // the owner listed this person: the name is on their card and nowhere else in the repository
    const allowed = c.status === 'listed' ? ['live-classes-data.js'] : [];
    if (c.status === 'listed') assert.equal(D.teachers.find((t) => t.id === c.listedAs)?.name, r.name, `${r.id} is listed under the roster name`);
    const first = r.name.split(' ')[0];
    for (const f of files) {
      if (allowed.includes(f)) continue;
      let txt; try { txt = fs.readFileSync(path.join(ROOT, f), 'utf8'); } catch { continue; }
      assert.equal(txt.includes(r.name), false, `${r.id}'s name appears in ${f}`);
      if (c.status !== 'listed') assert.equal(new RegExp(`\\b${first}\\b`).test(txt) && /live|teacher|consult/i.test(f), false, `${r.id}'s first name appears in ${f}`);
    }
  }
});

/* ================= reviews ================= */
test('REVIEWS: none exist, so every published teacher shows "No reviews yet" — no rating, count or badge is typed in', () => {
  const D = loadData();
  assert.deepEqual([...D.reviews], []);
  const kw = kwLiveSummary();
  for (const t of D.teachers.filter((x) => !x.draft)) {
    assert.equal(reviewSummary(D.reviews, t.id), null);
    assert.equal(kw(D.reviews, t.id), null);
  }
  const js = read('kw-live.js');
  assert.match(js, /'No reviews yet'/);
  const page = read('live-classes.html') + js + read('live-classes-data.js');
  assert.equal(/top[- ]rated|best[- ]rated|most popular|bestseller|only \d+ (?:slots?|seats?) left|\b\d(?:\.\d)? ?(?:★|stars?)\b|ratingValue|aggregateRating|reviewCount/i.test(page), false, 'no hard-coded rating, popularity or scarcity claim');
});

test('REVIEWS: the aggregate counts only genuine, published, evidenced reviews — the page and the validator agree', () => {
  const R = [
    { teacherId: 'reegan-gandhi', rating: 5, date: '2026-11-02', evidence: 'KWC-ABCDEFGH', permission: 'Email, 2026-11-03' },
    { teacherId: 'reegan-gandhi', rating: 4, date: '2026-11-04', evidence: 'KWC-HGFEDCBA', permission: 'Email, 2026-11-05' },
    { teacherId: 'reegan-gandhi', rating: 1, date: '2026-11-04', evidence: 'KWC-JJJJJJJJ', permission: 'Email', draft: true },
    { teacherId: 'reegan-gandhi', rating: 1, date: '2026-11-04', evidence: '', permission: 'Email' },
    { teacherId: 'reegan-gandhi', rating: 1, date: '2026-11-04', evidence: 'KWC-KKKKKKKK', permission: null },
    { teacherId: 'reegan-gandhi', rating: 4.5, date: '2026-11-04', evidence: 'KWC-MMMMMMMM', permission: 'Email' },
    { teacherId: 'someone-else', rating: 1, date: '2026-11-04', evidence: 'KWC-NNNNNNNN', permission: 'Email' }
  ];
  const expected = { count: 2, average: 4.5 };
  assert.deepEqual(reviewSummary(R, 'reegan-gandhi'), expected);
  assert.deepEqual({ ...kwLiveSummary()(R, 'reegan-gandhi') }, expected);
  assert.deepEqual({ ...kwLiveSummary()(R.slice(0, 1).concat({ ...R[1], rating: 3 }, { ...R[1], rating: 3 }), 'reegan-gandhi') }, { count: 3, average: 3.7 });
});

test('REVIEWS: the validator refuses an unsubstantiated or malformed published review', () => {
  const base = loadData();
  const bad = (rev, re) => {
    const D = clone(base); D.reviews = [rev];
    assert.ok(checkData(D).some((e) => re.test(e)), `${re.source}: ${checkData(D).join(' | ')}`);
  };
  const ok = { teacherId: 'reegan-gandhi', rating: 5, date: '2026-11-02', evidence: 'KWC-ABCDEFGH', permission: 'Email, 2026-11-03' };
  { const D = clone(base); D.reviews = [ok]; assert.deepEqual(checkData(D), []); }
  bad({ ...ok, evidence: null }, /needs evidence/);
  bad({ ...ok, permission: '' }, /needs permission/);
  bad({ ...ok, rating: 6 }, /whole number from 1 to 5/);
  bad({ ...ok, rating: 4.5 }, /whole number from 1 to 5/);
  bad({ ...ok, teacherId: 'teacher-1' }, /draft teacher/);
  bad({ ...ok, teacherId: 'candidate-01' }, /unknown teacher/);
  bad({ ...ok, date: 'yesterday' }, /YYYY-MM-DD/);
  bad({ ...ok, quote: '[Quote from a student]' }, /placeholder/);
});

/* ================= online booking switch ================= */
test('BOOKING: online booking is off — the page loads no booking script, says booking is not open yet, and never books by email', () => {
  const D = loadData();
  const ob = D.consultation.onlineBooking;
  assert.equal(ob.enabled, false);
  assert.equal(ob.legalTermsUpdated, true, 'the owner reviewed and merged the online-booking wording (PR #183)');
  assert.equal(ob.ownerApproval, null, 'no LAUNCH approval: reviewing legal wording is not approval to take bookings');
  assert.match(read('live-classes-data.js'), /onlineBooking: \{\s*enabled: false,\s*ownerApproval: null, +\/\/ LAUNCH approval only[^\n]*\n\s*legalTermsUpdated: true, +\/\/ legal copy only: [^\n]*PR #183 \(merge 237f3486\), 2026-10-21/);
  assert.equal(ob.joinLinksConfigured, false, 'no joining link is configured');
  const html = read('live-classes.html');
  assert.equal(/kw-consult\.js|kw-checkout\.js|cashfree/i.test(html), false, 'not referenced by the page itself');
  assert.match(read('kw-live.js'), /if \(!BOOK_ON\) return;/);
  assert.match(html, /<div class="book-closed" id="consult-closed" role="note">\s*<h3>Online demo booking is not open yet<\/h3>/, 'an honest closed state, not a booking button');
  assert.match(html, /consultations are not booked by email/);
  assert.deepEqual([...D.consultation.steps], [
    'You sign in, then choose a teacher and a time on this page.',
    'You pay the {fee} fee online through Cashfree. The booking is confirmed only once the payment is verified.',
    'Your joining link appears on this page once your booking is confirmed.',
    'You meet the teacher, who assesses your level and recommends a course.'
  ]);
  assert.equal(D.consultation.steps.some((x) => /\bemail|\bUPI\b|bank transfer/i.test(x)), false, 'no email or manual UPI step');
  // the validator keeps it that way
  const old = clone(D); old.consultation.steps[1] = 'We reply by email with a confirmed time slot and UPI details to pay the {fee} fee.';
  assert.ok(checkData(old).some((e) => /consultation\.steps: describe booking or paying by email or manual UPI/.test(e)));
});

test('BOOKING: enabling online booking is refused until the owner decisions and legal updates are recorded', () => {
  const base = loadData();
  const on = (extra) => { const D = clone(base); Object.assign(D.consultation.onlineBooking, { enabled: true }, extra); return checkData(D); };
  assert.ok(on({}).some((e) => /enabled needs ownerApproval/.test(e)), 'refused: no launch approval is recorded');
  assert.equal(on({}).some((e) => /legalTermsUpdated/.test(e)), false, 'the legal wording is recorded');
  assert.ok(on({}).some((e) => /joinLinksConfigured/.test(e)), 'still refused: no joining links configured');
  // a legal-copy-only note can never stand in for the launch approval
  for (const note of ['Owner reviewed the Terms §4A and Privacy wording and merged PR #183 (merge 237f3486), 2026-10-21. Legal copy only: this does not enable the switch.', 'Legal copy only (PR #183)', 'Owner reviewed the legal wording', 'Merged PR #183, 2026-10-21', 'Noted; this does not enable booking']) {
    assert.ok(on({ ownerApproval: note, joinLinksConfigured: true }).some((e) => /ownerApproval records a legal-copy review, not approval to launch paid booking/.test(e)), note);
  }
  assert.ok(on({ ownerApproval: null }).some((e) => /ownerApproval/.test(e)));
  assert.ok(on({ legalTermsUpdated: false }).some((e) => /legalTermsUpdated/.test(e)));
  assert.deepEqual(on({ ownerApproval: 'Owner approved launching paid consultation booking, email 2026-11-01', legalTermsUpdated: true, joinLinksConfigured: true }), [], 'satisfiable once the launch is explicitly approved');
  const D = clone(base); delete D.consultation.onlineBooking;
  assert.ok(checkData(D).some((e) => /onlineBooking/.test(e)));
});

test('BOOKING: kw-consult.js sends only a teacher and a slot, trusts only the Worker\'s status, and never touches the self-paced checkout', () => {
  const src = read('kw-consult.js');
  new vm.Script(src);
  const js = src.replace(/\/\*[\s\S]*?\*\//g, '');
  assert.match(js, /body: \{ teacher_id: teacherId, slot: slot \}/);
  assert.equal(/amount\w*\s*:/i.test(js.replace(/\/\*[\s\S]*?\*\//g, '')), false, 'no amount is sent');
  assert.equal(/KWCheckout|kw-checkout|'\/orders|grantProduct|product_id/.test(js), false);
  assert.equal(/mailto:|sendMail|whatsapp/i.test(js), false, 'no message is sent');
  assert.match(js, /b\.status === 'confirmed'/, 'confirmation comes from the Worker\'s booking status');
  assert.equal(/order_status|PAID/.test(js), false, 'never reads the gateway status itself');
  assert.match(read('.github/pages-allowlist.txt'), /^kw-consult\.js$/m);
});

test('AVAILABILITY: labels are factual ("Available today" / "Currently unavailable"), shown only from the Worker\'s report; sorting only puts bookable teachers first', () => {
  const js = read('kw-live.js');
  assert.match(js, /'Available today' : 'Currently unavailable'/);
  assert.match(js, /if \(!availability \|\| t\.draft \|\| listed\(t\)\) return '';/, 'no label until availability is known, and never on a listed (non-bookable) teacher');
  assert.match(js, /\(b\.on - a\.on\) \|\| \(a\.i - b\.i\)/, 'stable: availability first, then the data order');
  assert.equal(/\bfetch\(|XMLHttpRequest|cashfree|checkout/i.test(js), false, 'kw-live.js itself still has no network or payment code');
});

/* ================= joining links stay server-side ================= */
/* Every file GitHub Pages publishes (exact names and GLOB: entries in the
   allowlist), plus the public JSON under docs/. */
function publishedFiles() {
  const out = [];
  for (const raw of read('.github/pages-allowlist.txt').split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    if (line.startsWith('GLOB:')) {
      const [dir, pat] = [path.dirname(line.slice(5)), path.basename(line.slice(5))];
      const re = new RegExp('^' + pat.replace(/[.+^${}()|]/g, '\\$&').replace(/\*/g, '.*') + '$');
      if (fs.existsSync(path.join(ROOT, dir))) for (const f of fs.readdirSync(path.join(ROOT, dir))) if (re.test(f)) out.push(path.join(dir, f));
    } else if (fs.existsSync(path.join(ROOT, line)) && fs.statSync(path.join(ROOT, line)).isFile()) out.push(line);
  }
  return out.concat(fs.readdirSync(path.join(ROOT, 'docs')).filter((f) => f.endsWith('.json')).map((f) => 'docs/' + f));
}

test('JOIN LINKS: no meeting link in any published file, the page data or public JSON', () => {
  const files = publishedFiles();
  assert.ok(files.includes('live-classes-data.js') && files.includes('kw-consult.js') && files.includes('live-classes.html'), 'the scan covers the Live Classes files');
  for (const f of files) {
    if (/\.(png|jpe?g|webp|gif|ico|mp3|ogg|wav|pdf|woff2?)$/i.test(f)) continue;
    const m = read(f).match(PRIVATE_LINK_RE);
    assert.equal(m, null, `${f} contains a meeting link: ${m && m[0]}`);
  }
});

test('JOIN LINKS: the validator refuses a meeting link anywhere in the page data', () => {
  const base = loadData();
  for (const put of [
    (D) => { D.consultation.onlineBooking.joinLinksConfigured = 'https://meet.google.com/abc-defg-hij'; },
    (D) => { D.consultation.steps.push('Join at meet.google.com/abc-defg-hij'); },
    (D) => { D.teachers[0].availability = 'https://zoom.us/j/1234567890'; }
  ]) {
    const D = clone(base); put(D);
    assert.ok(checkData(D).some((e) => /private meeting link/.test(e)), checkData(D).join(' | '));
  }
});

test('JOIN LINKS: the page asks the Worker for the link of a confirmed booking only, and never claims one it did not get', () => {
  const js = read('kw-consult.js');
  assert.equal(/joiningDetails/.test(js), false);
  assert.match(js, /'\/consult\/bookings\/' \+ encodeURIComponent\(ref\) \+ '\/join'/);
  assert.match(js, /The joining link for this consultation has not been set up yet\./);
  const confirmed = js.slice(js.indexOf("if (b.status === 'confirmed')"), js.indexOf("if (b.status === 'pending')"));
  assert.match(confirmed, /loadJoin\(b\.ref\)/, 'loaded only in the confirmed branch');
  assert.equal((js.match(/loadJoin\(/g) || []).length, 2, 'defined once, called once');
  const D = loadData();
  assert.equal(D.consultation.onlineBooking.joinLinksConfigured, false);
  assert.equal('joiningDetails' in D.consultation.onlineBooking, false);
});

test('JOIN LINKS: wrangler.toml never carries them (a Worker secret only), and the predeploy check refuses it', () => {
  const toml = read('access/worker/wrangler.toml').replace(/#.*$/gm, '');
  assert.equal(/CONSULT_JOIN_LINKS\s*=/.test(toml), false);
  assert.equal(PRIVATE_LINK_RE.test(toml), false);
  const guard = read('scripts/predeploy-access-check.mjs');
  assert.match(guard, /CONSULT_JOIN_LINKS/);
});

/* ================= unrelated features untouched ================= */
test('SCOPE: this branch changes no Exam Portal, audio, legal or self-paced checkout file', { skip: (() => { try { execFileSync('git', ['rev-parse', '--verify', 'origin/main'], { cwd: ROOT, stdio: 'ignore' }); return false; } catch { return 'origin/main not available'; } })() }, () => {
  const base = execFileSync('git', ['merge-base', 'HEAD', 'origin/main'], { cwd: ROOT, encoding: 'utf8' }).trim();
  const changed = execFileSync('git', ['diff', '--name-only', base], { cwd: ROOT, encoding: 'utf8' }).split('\n').filter(Boolean);
  /* Guards live-classes work only: a branch that touches no live-classes
     file (e.g. a reviewed self-paced checkout change) is out of scope. */
  if (!changed.some((f) => !/\.test\.mjs$/.test(f) && /live-classes|^kw-(live|consult|enrol)\.js$|^access\/worker\/src\/(consultations|enrolments)\.js$/.test(f))) return;
  const forbidden = changed.filter((f) => /^(exam|exam-content|exam-worker|audio|public\/audio)\/|audio|^refund-policy\.html$|^kw-checkout\.js$|^kw-products\.js$|^access\/worker\/src\/(orders|entitlements|products|exam-proxy)\.js$/i.test(f));
  assert.deepEqual(forbidden, []);
});

/* ================= A1 course fees (decision sheet D9) ================= */
test('PRICING: every shown teacher has the A1 fee the owner set in D9, from one central config', () => {
  const D = loadData();
  const sheet = read('docs/live-classes-owner-decisions.md');
  const d9 = sheet.slice(sheet.indexOf('### D9'), sheet.indexOf('\n---\n', sheet.indexOf('### D9')));
  const table = Object.fromEntries([...d9.matchAll(/^\| `([a-z-]+)` \| (₹[\d,]+) \|$/gm)].map((m) => [m[1], m[2]]));
  const shown = D.teachers.filter((t) => !t.draft);
  assert.equal(Object.keys(table).length, shown.length, 'D9 lists every shown teacher');
  for (const t of shown) assert.equal(D.coursePricing.teachers[t.id], table[t.id], `${t.id}: D9 fee`);
  assert.deepEqual([...Object.keys(D.coursePricing.teachers)], [...shown.map((t) => t.id)], 'priced in the page order, nobody else');
  assert.equal(D.coursePricing.teachers['reegan-gandhi'], D.courses.find((c) => c.id === 'live-a1').priceLabel);
  // only the current fee: no crossed-out "original" price is rendered or configured
  assert.equal(/original|strike|<s>|<del>|line-through|was ₹/i.test(read('kw-live.js') + JSON.stringify(D.coursePricing)), false);
});

test('PRICING: the validator refuses a fee for an unknown teacher, a non-amount, or one that contradicts the published course', () => {
  const D = loadData();
  const errs = (edit) => { const d = clone(D); edit(d.coursePricing.teachers); return checkData(d); };
  assert.ok(errs((p) => { p.nobody = '₹1,000'; }).some((e) => /coursePricing nobody: names no published teacher/.test(e)));
  assert.ok(errs((p) => { p['sahil-arora'] = '₹15,000 → ₹9,999'; }).some((e) => /must be a rupee amount/.test(e)));
  assert.ok(errs((p) => { p['sahil-arora'] = 'from ₹12,000'; }).some((e) => /must be a rupee amount/.test(e)));
  assert.ok(errs((p) => { p['reegan-gandhi'] = '₹15,000'; }).some((e) => /differs from the published live-a1 fee/.test(e)));
});

/* ================= sample ratings: a local design preview only ================= */
test('SAMPLE: the sample ratings are labelled, in range, never published, and off in the committed data', () => {
  const ctx = { window: {} };
  vm.runInNewContext(read('live-classes-sample-data.js'), ctx);
  const S = ctx.window.KWLiveSample;
  assert.equal(S.isSampleData, true);
  assert.match(read('live-classes-sample-data.js'), /SAMPLE DATA · NOT GENUINE REVIEWS/);
  const D = loadData();
  const shown = D.teachers.filter((t) => !t.draft).map((t) => t.id);
  assert.deepEqual([...Object.keys(S.ratings)], [...shown]);
  for (const id of ['reegan-gandhi', 'geetika-dhawan']) assert.deepEqual({ ...S.ratings[id] }, { stars: 4.8, countLabel: '100+' });
  for (const id of shown.slice(2)) {
    assert.equal(S.ratings[id].stars, 3.5, id);
    assert.ok(Number.isInteger(S.ratings[id].count) && S.ratings[id].count >= 20 && S.ratings[id].count <= 40, `${id}: count 20–40`);
  }
  // never deployed: not in the Pages allowlist (exact or by glob), and no page loads it statically
  const allow = read('.github/pages-allowlist.txt').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
  assert.equal(allow.includes('live-classes-sample-data.js'), false);
  for (const g of allow.filter((l) => l.startsWith('GLOB:'))) {
    const rx = new RegExp('^' + g.slice(5).trim().replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*\*/g, '§').replace(/\*/g, '[^/]*').replace(/§/g, '.*').replace(/\?/g, '.') + '$');
    assert.equal(rx.test('live-classes-sample-data.js'), false, `${g} would publish the sample file`);
  }
  assert.equal(/live-classes-sample-data/.test(read('live-classes.html')), false);
  // only kw-live.js loads it, only on localhost, only with the switch on; the committed switch is off
  const js = read('kw-live.js');
  assert.match(js, /var SAMPLE_PREVIEW = D\.previewSampleRatings === true && \/\^\(localhost\|127\\\.0\\\.0\\\.1\|\\\[::1\\\]\|\)\$\/\.test\(location\.hostname\);/);
  assert.equal((js.match(/\.src = 'live-classes-sample-data\.js'/g) || []).length, 1, 'loaded in exactly one place');
  assert.match(js, /if \(SAMPLE_PREVIEW\) \{/);
  assert.equal(D.previewSampleRatings, false);
  assert.match(js, /Sample data · preview only/);
});
