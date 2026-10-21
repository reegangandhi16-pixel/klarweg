/* Live Classes — teacher candidates, honest reviews, availability
   labels and the online-booking switch. node --test

   The 11 people the owner named on 2026-10-20 are kept in
   docs/live-classes-candidates.json under opaque ids. Their names stay in
   a private roster outside this public repository; set
   KW_CANDIDATE_ROSTER=<path to candidate-roster.csv> to check it too. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import {
  ROOT, loadData, checkData, reviewSummary, loadCandidates, checkCandidates, CANDIDATE_DRAFT_KEYS, PRIVATE_LINK_RE
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
test('CANDIDATES: all 11 named people are represented — the owner published, 10 as fact-free drafts', () => {
  const list = loadCandidates();
  assert.equal(list.length, 11);
  assert.deepEqual(list.filter((c) => c.status === 'published').map((c) => c.id), ['reegan-gandhi']);
  const drafts = list.filter((c) => c.status === 'draft');
  assert.deepEqual(drafts.map((c) => c.id), Array.from({ length: 10 }, (_, i) => `candidate-${String(i + 1).padStart(2, '0')}`));
  for (const c of drafts) {
    for (const k of Object.keys(c)) assert.ok(CANDIDATE_DRAFT_KEYS.includes(k), `${c.id} carries ${k}`);
    for (const k of ['profile', 'consent', 'photoConsent', 'availability']) assert.equal(c[k], null, `${c.id}.${k}`);
    assert.deepEqual(c.reviews, [], `${c.id} has no reviews`);
  }
  assert.deepEqual(checkCandidates(list, loadData(), ELIGIBLE_TEACHERS), []);
});

test('CANDIDATES: no invented fact can be added to a draft, and none can be shown as published without a published profile', () => {
  const D = loadData();
  const base = loadCandidates();
  const bad = (edit, re) => {
    const list = clone(base); edit(list);
    assert.ok(checkCandidates(list, D, ELIGIBLE_TEACHERS).some((e) => re.test(e)), re.source);
  };
  for (const k of ['name', 'qualifications', 'experience', 'goethe', 'teachesIn', 'specialisms', 'photo', 'bio', 'rating']) bad((l) => { l[1][k] = 'x'; }, new RegExp(`carries "${k}"`));
  bad((l) => { l[2].consent = 'Email, 2026-11-01'; }, /consent set/);
  bad((l) => { l[3].availability = 'Weekdays'; }, /availability set/);
  bad((l) => { l[4].reviews = [{ rating: 5 }]; }, /has reviews/);
  bad((l) => { l[5].status = 'published'; }, /no published teacher/);
  bad((l) => { l[6].bookingEligible = true; }, /must match ELIGIBLE_TEACHERS/);
  bad((l) => { l.pop(); }, /expected the 11 people/);
});

test('CANDIDATES: no candidate becomes a teacher on the page — the published teachers are unchanged', () => {
  const D = loadData();
  assert.deepEqual([...D.teachers.filter((t) => !t.draft).map((t) => t.id)], ['reegan-gandhi']);
  assert.equal(D.teachers.some((t) => /^candidate-/.test(t.id)), false);
});

test('CANDIDATES: only the owner and candidate-01 are booking-eligible, in the data and in the Worker', () => {
  assert.deepEqual(loadCandidates().filter((c) => c.bookingEligible).map((c) => c.id), [...ELIGIBLE_TEACHERS]);
});

const ROSTER = process.env.KW_CANDIDATE_ROSTER;
test('PRIVATE ROSTER: the 11 names map to the repository ids and appear in no tracked file', { skip: !ROSTER && 'KW_CANDIDATE_ROSTER not set (the roster is private and never in CI)' }, () => {
  const rows = fs.readFileSync(ROSTER, 'utf8').trim().split('\n').slice(1).map((l) => l.match(/^([^,]+),([^,]+),/)).map((m) => ({ id: m[1], name: m[2] }));
  assert.equal(rows.length, 11);
  assert.deepEqual(rows.map((r) => r.id).sort(), loadCandidates().map((c) => c.id).sort());
  assert.equal(rows.find((r) => r.id === 'reegan-gandhi').name, loadData().teachers.find((t) => t.id === 'reegan-gandhi').name);
  const files = execFileSync('git', ['ls-files'], { cwd: ROOT, encoding: 'utf8' }).split('\n').filter((f) => f && !/\.(png|jpe?g|webp|gif|ico|mp3|ogg|wav|pdf|woff2?)$/i.test(f));
  for (const r of rows.filter((x) => x.id !== 'reegan-gandhi')) {
    const first = r.name.split(' ')[0];
    for (const f of files) {
      let txt; try { txt = fs.readFileSync(path.join(ROOT, f), 'utf8'); } catch { continue; }
      assert.equal(txt.includes(r.name), false, `${r.id}'s name appears in ${f}`);
      assert.equal(new RegExp(`\\b${first}\\b`).test(txt) && /live|teacher|consult/i.test(f), false, `${r.id}'s first name appears in ${f}`);
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
test('BOOKING: online booking is off — the page loads no booking script and keeps the email request', () => {
  const D = loadData();
  const ob = D.consultation.onlineBooking;
  assert.equal(ob.enabled, false);
  assert.equal(ob.legalTermsUpdated, false);
  assert.equal(ob.ownerApproval, null);
  const html = read('live-classes.html');
  assert.equal(/kw-consult\.js|kw-checkout\.js|cashfree/i.test(html), false, 'not referenced by the page itself');
  assert.match(read('kw-live.js'), /ob\.enabled !== true\) return;/);
  assert.match(html, /Sending this form is a request, not a booking\. Nothing is charged on this page\./, 'the approved copy is unchanged');
  assert.deepEqual([...D.consultation.steps], [
    'You send a request with your level, goal and preferred times.',
    'We reply by email with a confirmed time slot and UPI details to pay the {fee} fee.',
    'Once your payment is confirmed, we email you the joining link.',
    'You meet the teacher, who assesses your level and recommends a course.'
  ]);
});

test('BOOKING: enabling online booking is refused until the owner decisions and legal updates are recorded', () => {
  const base = loadData();
  const on = (extra) => { const D = clone(base); Object.assign(D.consultation.onlineBooking, { enabled: true }, extra); return checkData(D); };
  assert.ok(on({}).some((e) => /ownerApproval/.test(e)));
  assert.ok(on({}).some((e) => /legalTermsUpdated/.test(e)));
  assert.ok(on({}).some((e) => /joinLinksConfigured/.test(e)));
  assert.deepEqual(on({ ownerApproval: 'Owner, email 2026-11-01', legalTermsUpdated: true, joinLinksConfigured: true }), [], 'satisfiable once decided');
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
  assert.match(js, /if \(!availability \|\| t\.draft\) return '';/, 'no label until availability is known');
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
  const forbidden = changed.filter((f) => /^(exam|exam-content|exam-worker|audio|public\/audio)\/|audio|^terms\.html$|^privacy\.html$|^refund-policy\.html$|^kw-checkout\.js$|^kw-products\.js$|^access\/worker\/src\/(orders|entitlements|products|exam-proxy)\.js$/i.test(f));
  assert.deepEqual(forbidden, []);
});
