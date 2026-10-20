/* Live Classes (live-classes.html) — fast checks without a browser.
   Guards the two things that must not regress silently:
   1. the page stays an unlisted preview until real content and policies
      exist (noindex; not in the Pages allowlist, sitemap or any other
      page's links), and
   2. draft data is off by default and placeholder text only ever lives
      in entries marked draft.
   The interactive behaviour is covered by scripts/live-classes-browser.mjs. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import os from 'node:os';
import { checkData, launchBlockers, isAllowlisted, homepageFaq, placeholders, POLICIES } from './live-classes-readiness.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const PAGE = 'live-classes.html';
const FILES = [PAGE, 'kw-live.js', 'live-classes-data.js'];
const html = read(PAGE);

function loadData() {
  const ctx = { window: {} };
  vm.runInNewContext(read('live-classes-data.js'), ctx, { filename: 'live-classes-data.js' });
  return ctx.window.KWLive;
}

test('LIVE: both scripts parse', () => {
  for (const f of ['kw-live.js', 'live-classes-data.js']) assert.doesNotThrow(() => new vm.Script(read(f), { filename: f }), f);
});

test('LIVE: draft data is off by default', () => {
  assert.equal(loadData().showDrafts, false, 'showDrafts must stay false in the committed data file');
});

test('LIVE: kw-live.js renders drafts only on a local host', () => {
  const js = read('kw-live.js');
  assert.match(js, /var SHOW_DRAFTS = D\.showDrafts === true && \/\^\(localhost\|127\\\.0\\\.0\\\.1\|\\\[::1\\\]\|\)\$\/\.test\(location\.hostname\);/);
  assert.equal(/D\.showDrafts\s*(\|\||\?)/.test(js), false, 'every draft decision goes through SHOW_DRAFTS');
});

test('LIVE: placeholder text ([…]) appears only in entries marked draft', () => {
  const D = loadData();
  const groups = { teachers: D.teachers, courses: D.courses, testimonials: D.testimonials };
  for (const [name, list] of Object.entries(groups)) {
    for (const x of list) {
      if (x.draft) continue;
      assert.deepEqual(placeholders(x), [], `${name} ${x.id || x.name}: published entry still has [placeholder] text`);
    }
  }
});

test('LIVE: the page stays unpublished (noindex; not allowlisted, in the sitemap or linked from other pages)', () => {
  assert.match(html, /<meta name="robots" content="noindex">/);
  assert.equal(/<link rel="canonical"/.test(html), false, 'no canonical link until the page is published');
  const allow = read('.github/pages-allowlist.txt').split('\n').map((l) => l.trim());
  for (const f of FILES) assert.equal(allow.includes(f), false, `${f} must not be in .github/pages-allowlist.txt yet`);
  assert.equal(read('sitemap.xml').includes('live-classes'), false, 'sitemap.xml must not list the page yet');
  const linking = fs.readdirSync(ROOT).filter((f) => f.endsWith('.html') && f !== PAGE && read(f).includes('live-classes.html'));
  assert.deepEqual(linking, [], 'no other page may link to live-classes.html yet');
});

test('LIVE: every local link, script and stylesheet on the page exists', () => {
  const refs = [...html.matchAll(/(?:href|src)="([^"#:?]+)"/g)].map((m) => m[1]).filter((r) => !r.startsWith('//'));
  assert.ok(refs.length > 20, 'found the page references');
  const missing = [...new Set(refs)].filter((r) => !fs.existsSync(path.join(ROOT, r)));
  assert.deepEqual(missing, []);
});

test('LIVE: the consultation form only hands off to email (no form action, no fetch, no checkout)', () => {
  const js = read('kw-live.js');
  assert.equal(/<form[^>]*\baction=/.test(html), false);
  assert.equal(/\bfetch\(|XMLHttpRequest|sendBeacon|cashfree|checkout/i.test(js), false);
  assert.match(js, /window\.location\.href = 'mailto:' \+ D\.contact\.email/);
});

test('LIVE: consultation requests go to the site\'s documented address (the one on contact.html), never the retired klarweg.app one', () => {
  const contact = read('contact.html').match(/href="mailto:([^"?]+)"/);
  assert.ok(contact, 'contact.html publishes a mailto address');
  assert.equal(loadData().contact.email, contact[1]);
  for (const f of FILES) assert.equal(read(f).includes('klarweg.app'), false, `${f} still mentions klarweg.app`);
  for (const m of html.matchAll(/(?:data-contact-email>|mailto:)([^<"]+)/g)) assert.equal(m[1], contact[1], 'the no-JS fallback text matches too');
});

test('LIVE: the page states no level range or live-course term that is not confirmed', () => {
  const body = html.slice(html.indexOf('<body'));
  assert.equal(/A1 (?:→|to) C2/.test(html.match(/<meta name="description" content="([^"]*)"/)[1]), false, 'the meta description names no blanket level range');
  assert.match(body, /<span data-live-levels><\/span>/, 'the hero level range is computed from the data');
  assert.equal(/doesn.t include the other|includes? self-paced access/i.test(body), false, 'D6 (no self-paced access) is stated in the Terms after legal review, not on this page');
});

test('LIVE: every amount on the page and in its data is an owner-approved amount (decision sheet, part A)', () => {
  const sheet = read('docs/live-classes-owner-decisions.md');
  const settled = sheet.slice(sheet.indexOf('## A. Settled'), sheet.indexOf('## B. Still pending'));
  assert.ok(settled.length > 0, 'the sheet separates settled decisions from pending ones');
  const approved = new Set(settled.match(/₹\d+(?:,\d{3})*/g) || []);
  for (const x of ['₹100', '₹7,999', '₹4,000', '₹3,999']) assert.ok(approved.has(x), `${x} is recorded as approved`);
  for (const f of FILES) for (const x of new Set(read(f).match(/₹\d+(?:,\d{3})*/g) || [])) assert.ok(approved.has(x), `${f} names ${x}, which is not an approved amount in the decision sheet`);
});

/* ---------- owner-approved decisions (2026-10-20, docs/live-classes-owner-decisions.md) ---------- */
test('LIVE D3: the first course is the approved A1 group batch, still a draft with no invented start date', () => {
  const D = loadData();
  const a1 = D.courses.find((c) => c.id === 'live-a1');
  assert.ok(a1, 'live-a1 exists');
  assert.equal(a1.draft, true, 'launch is on hold (D8): live-a1 stays a draft');
  assert.equal(a1.nextBatch, null, 'no start date has been set; never invent one');
  assert.equal(a1.enrolment, 'waitlist', 'without a start date enrolment cannot be open');
  assert.deepEqual([...a1.teacherIds], ['reegan-gandhi']);
  assert.deepEqual([...a1.levels], ['A1']);
  assert.equal(a1.format, 'Group batch');
  assert.equal(a1.batchSize, 'Up to 8 learners; runs with at least 4');
  assert.equal(a1.frequency, '3 classes a week · Mon, Wed, Fri, 7:30–9:00 pm IST');
  assert.equal(a1.sessionLength, '90 minutes');
  assert.equal(a1.totalDuration, '12 weeks · 36 classes · 54 hours');
  assert.equal(a1.priceLabel, '₹7,999');
  assert.match(a1.paymentTerms, /₹7,999 before the first class, or two instalments: ₹4,000 before the start and ₹3,999 before week 7/);
  assert.match(a1.materials, /class notes and PDF worksheets; homework with written feedback/i);
  assert.match(a1.examPrep, /Goethe-Zertifikat A1: Start Deutsch 1 \(exam fee not included\)/);
  const t = D.teachers.find((x) => x.id === 'reegan-gandhi');
  assert.ok(t && t.draft === true, 'the teacher profile stays a draft until launch');
  assert.ok(t.levels.includes('A1') && t.formats.includes('Group batch'), 'the teacher teaches this course');
});

test('LIVE D4: the consultation terms are the approved ones', () => {
  const c = loadData().consultation;
  assert.equal(c.termsConfirmed, true);
  assert.equal(c.feeLabel, '₹100');
  assert.equal(c.durationMinutes, 20);
  assert.equal(c.platform, 'Google Meet');
  assert.equal(c.adjustmentDays, 7);
  assert.match(c.cancellation, /full refund or a new time/);
  assert.match(c.cancellation, /once, free of charge, with at least 12 hours’ notice/);
  assert.match(c.cancellation, /missed without notice is not refunded/);
  assert.ok(c.steps.some((x) => /UPI/.test(x) && /confirmed time slot/.test(x)), 'UPI is requested only after the time is confirmed by email');
  assert.match(html, /Sending this form is a request, not a booking\. Nothing is charged on this page\./, 'the page says requests go by email and it takes no payment');
});

test('LIVE D5: the four live-class policies hold the approved texts; the self-paced guarantee is not extended', () => {
  const p = loadData().policies;
  assert.deepEqual(Object.keys(p).sort(), [...POLICIES].sort());
  assert.match(p.missedClass, /^Group classes are not recorded, and a missed group class is not refunded or repeated individually\./);
  assert.match(p.missedClass, /moved free of charge with at least 24 hours’ notice\.$/);
  assert.match(p.cancellationRefund, /^If you cancel at least 48 hours before the first class, your course fee is refunded in full\./);
  assert.match(p.cancellationRefund, /The 7-day guarantee in our Refund Policy covers self-paced purchases only, not live classes\.$/);
  assert.match(p.scheduling, /at least 24 hours in advance and schedule a replacement class/);
  assert.match(p.feeIncludes, /Goethe exam fees are not included\.$/);
  for (const k of POLICIES) assert.equal(/self-paced (?:course )?access/i.test(p[k]), false, `${k}: a live course does not include self-paced access (D6)`);
});

test('LIVE D7: live fees cannot reach the self-paced Cashfree checkout (grantProduct would unlock self-paced content)', () => {
  const ids = [...read('access/worker/src/products.js').matchAll(/^\s{2}(\w+): \{/gm)].map((m) => m[1]);
  assert.deepEqual(ids, ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'LIFETIME'], 'the Worker catalogue holds only self-paced products');
  assert.equal(/live|consult/i.test(read('access/worker/src/products.js') + read('kw-products.js')), false, 'no live course or consultation product in either catalogue');
  assert.equal(/kw-checkout\.js/.test(html), false, 'the page does not load the checkout');
  assert.equal(/KWCheckout|productId|\/orders|\/api\//.test(read('kw-live.js')), false, 'kw-live.js never starts a checkout (it reads KWProducts for the self-paced display price only)');
  for (const c of loadData().courses) assert.equal('productId' in c, false, `${c.id} has no checkout product`);
});

test('LIVE LEGAL: Terms, Privacy and Refund Policy stay unchanged while the legal review is pending', () => {
  const sheet = read('docs/live-classes-owner-decisions.md');
  if (!/Legal review status: pending/.test(sheet)) return; // once approved, the launch PR applies the reviewed text
  for (const f of ['terms.html', 'privacy.html', 'refund-policy.html']) assert.equal(/live class|live course|consultation/i.test(read(f)), false, `${f} carries live-class wording before the legal review is approved`);
  assert.match(read('docs/live-classes-review-drafts.md'), /awaiting (?:final )?legal review/i, 'the review drafts say they await legal review');
});

test('LIVE: a course enquiry can be free; only a consultation names a fee', () => {
  assert.match(html, /name="rtype" value="consult" checked/, 'consultation is the default request');
  assert.match(html, /name="rtype" value="interest"/, 'a free "tell me when a course opens" request exists');
  assert.equal(/arrange my consultation/.test(html), false, 'consent covers both kinds of request');
  const js = read('kw-live.js');
  assert.match(js, /enrolment !== 'open' \? 'interest' : 'consult'/, 'a course that is not open prefills an interest request');
});

test('LIVE: the consultation fee and adjustment period are read from the data file, not typed into the page', () => {
  // the publish checklist comment and the meta descriptions are static by nature (see checklist item 6)
  const body = html.slice(html.indexOf('<body>')).replace(/<span[^>]*\bdata-consult-(?:fee|days|dayadj)\b[^>]*>[^<]*<\/span>/g, '');
  assert.equal(/₹\s?\d/.test(body), false, 'a fee is typed into the page body');
  assert.equal(/(?:within|after) \d+ days|\d+-day adjust/i.test(body), false, 'the adjustment period is typed into the page body');
  const D = loadData();
  assert.equal(D.consultation.steps.some((x) => /₹\s?\d/.test(x)), false, 'booking steps use {fee}, not a typed fee');
  for (const [attr, want] of [['fee', D.consultation.feeLabel], ['days', D.consultation.adjustmentDays + ' days'], ['dayadj', D.consultation.adjustmentDays + '-day']]) {
    for (const m of html.matchAll(new RegExp(`<span[^>]*\\bdata-consult-${attr}\\b[^>]*>([^<]*)</span>`, 'g'))) assert.equal(m[1], want, `no-JS fallback for data-consult-${attr}`);
  }
});

test('LIVE: the no-JavaScript fallbacks for the policies and consultation terms match the data file', () => {
  const D = loadData();
  const text = (s) => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&');
  for (const k of POLICIES) {
    const m = html.match(new RegExp(`data-policy="${k}">([\\s\\S]*?)</div>`));
    assert.ok(m, `the FAQ shows policy ${k}`);
    assert.equal(text(m[1]), D.policies[k], `no-JS text for policy ${k}`);
  }
  assert.equal(text(html.match(/data-consult-unit>([^<]*)</)[1]), `${D.consultation.durationMinutes}-minute session on ${D.consultation.platform}`);
  assert.equal(text(html.match(/<li data-consult-cancel>([^<]*)<\/li>/)[1]), D.consultation.cancellation);
});

/* ---------- data validation and the launch gate (scripts/live-classes-readiness.mjs) ---------- */
const clone = (x) => JSON.parse(JSON.stringify(x));

test('LIVE DATA: the committed data file is well formed (drafts included)', () => {
  assert.deepEqual(checkData(loadData()), []);
});

test('LIVE DATA: a named draft profile cannot reach the public site by deleting draft: true alone', () => {
  const D = loadData();
  const flip = (data, id, extra = {}) => ({ ...clone(data), teachers: data.teachers.map((x) => (x.id === id ? { ...clone(x), ...extra, draft: false } : x)) });
  for (const t of D.teachers.filter((x) => x.draft && !/^\[/.test(x.name))) {
    // while anything is unconfirmed or still a placeholder, the validator refuses the entry
    const blockedByData = (x) => checkData(flip(D, t.id, x)).some((e) => e.startsWith(`teacher ${t.id}:`));
    if ((t.unconfirmed || []).length || placeholders(t).length) assert.ok(blockedByData({}), `${t.id}: incomplete, yet the validator accepts it once draft: true is removed`);
    assert.ok(blockedByData({ unconfirmed: ['specialisms'] }), `${t.id}: an unconfirmed field must block publication`);
    // fully confirmed or not, the page itself stays unpublished until the launch gate is clear
    const rest = launchBlockers(flip(D, t.id));
    assert.ok(rest.length > 0 && !isAllowlisted(), `${t.id}: removing draft: true alone would make the profile public`);
  }
});

test('LIVE DATA: published entries must be complete and consistent; drafts may stay incomplete', () => {
  const base = loadData();
  const expectError = (mutate, rx, why) => {
    const D = clone(base); mutate(D);
    const errors = checkData(D);
    assert.ok(errors.some((e) => rx.test(e)), `${why}: expected ${rx}, got ${JSON.stringify(errors)}`);
  };
  const realTeacher = { id: 'anna-k', draft: false, name: 'Anna K', photo: null, photoAlt: '', headline: 'Grammar first', experience: '5 years of teaching German',
    proficiency: 'C2', qualifications: ['MA German'], goethe: [], levels: ['A1'], teachesIn: ['Hindi'], specialisms: [], examPrep: null, approach: 'x', formats: ['Group batch'], availability: null };
  expectError((D) => { D.courses[0].draft = false; D.courses[0].title = 'A1'; }, new RegExp(`names draft teacher "${base.courses[0].teacherIds[0]}"`), 'a published course naming a draft teacher would show no teacher on the live site');
  expectError((D) => { D.teachers.push(realTeacher); Object.assign(D.courses[0], { draft: false, teacherIds: ['anna-k'], enrolment: 'open', priceLabel: null }); }, /enrolment "open" needs priceLabel/, 'open enrolment without a fee');
  expectError((D) => { D.teachers.push(realTeacher); Object.assign(D.courses[0], { draft: false, teacherIds: ['anna-k'], enrolment: 'open', priceLabel: '₹9,999' }); }, /needs nextBatch/, 'open enrolment without a start date');
  expectError((D) => { D.teachers.push({ ...realTeacher, unconfirmed: ['headline'] }); }, /still has unconfirmed fields: headline/, 'a published teacher with fields awaiting confirmation');
  expectError((D) => { D.teachers.push({ ...realTeacher, experience: '[Years to confirm] of teaching German' }); }, /placeholder text "\[Years to confirm\]/, 'a published teacher with placeholder text');
  assert.deepEqual(placeholders(realTeacher), [], 'list fields such as levels: [\'A1\'] are not placeholders');
  expectError((D) => { D.teachers[0].proficiency = 'C1 (Goethe-Zertifikat)'; }, /proficiency states a level of German only/, 'a certificate claim inside proficiency');
  expectError((D) => { D.teachers[0].unconfirmed = ['nickname']; }, /unconfirmed names unknown field "nickname"/, 'unconfirmed must name real fields');
  expectError((D) => { D.teachers.push(realTeacher); Object.assign(D.courses[0], { draft: false, teacherIds: ['anna-k'], levels: ['A1', 'B2'] }); }, /level B2 is not taught by its teacher/, 'a course offered at a level its teacher does not teach');
  expectError((D) => { D.teachers.push({ ...realTeacher, qualifications: [] }); }, /published teacher needs qualifications/, 'a published teacher without qualifications');
  expectError((D) => { D.teachers.push({ ...realTeacher, photo: 'public/teachers/missing.jpg', photoAlt: 'x' }); }, /photo public\/teachers\/missing\.jpg does not exist/, 'a missing photo file');
  expectError((D) => { D.teachers.push(realTeacher); Object.assign(D.courses[0], { draft: false, teacherIds: ['anna-k'], enrolment: 'open', priceLabel: '₹9,999', nextBatch: '1 Dec', frequency: '2×/week', sessionLength: '60 min', totalDuration: '12 weeks', batchSize: null }); }, /group batch needs batchSize/, 'an open group batch without a batch size');
  expectError((D) => { D.testimonials.push({ quote: 'Great', name: 'R.', detail: '', draft: false }); }, /published testimonial needs permission/, 'a testimonial without recorded consent');
  expectError((D) => { D.courses[1].id = D.courses[0].id; }, /duplicate id/, 'duplicate course ids');
  expectError((D) => { D.courses[0].levels = ['A3']; }, /levels has "A3"/, 'an unknown level');
  expectError((D) => { D.courses[0].teacherIds = ['nobody']; }, /unknown teacher "nobody"/, 'an unknown teacher id');
  expectError((D) => { D.consultation.termsConfirmed = 'yes'; }, /termsConfirmed/, 'termsConfirmed must be a boolean');
  expectError((D) => { delete D.policies.missedClass; }, /policies\.missedClass/, 'a policy key removed');
  expectError((D) => { D.showDrafts = true; }, /showDrafts/, 'drafts switched on');
});

test('LIVE GATE: blockers are listed today, and the page cannot be allowlisted while any remain', () => {
  const blockers = launchBlockers(loadData());
  assert.ok(blockers.length > 0, 'the page is not ready today, so blockers must be reported');
  // D8: launch is on hold. Nothing is published, and Terms/Privacy await the legal review.
  for (const rx of [/No published teacher profile/, /No published live course/, /terms\.html/, /privacy\.html/]) assert.ok(blockers.some((b) => rx.test(b)), `expected a blocker matching ${rx}`);
  assert.equal(isAllowlisted(), false);
  if (isAllowlisted()) assert.deepEqual(blockers, [], 'live-classes is in the Pages allowlist but launch blockers remain');
});

test('LIVE GATE: the homepage FAQ structured data matches the visible answers', () => {
  const { visible, structured } = homepageFaq(read('index.html'));
  assert.ok(Object.keys(structured).length > 0, 'FAQPage structured data found');
  assert.deepEqual(structured, Object.fromEntries(Object.keys(structured).map((q) => [q, visible[q]])));
});

test('LIVE: the homepage FAQ announces live classes (D1) without claiming anything is bookable', () => {
  const Q = 'Are there live classes or teachers?';
  const { visible, structured } = homepageFaq(read('index.html'));
  assert.ok(visible[Q] && structured[Q], 'the question is in the visible FAQ and the FAQPage data');
  assert.equal(visible[Q], structured[Q]);
  const a = visible[Q];
  assert.match(a, /preparing teacher-led live German classes/, 'states the D1 direction');
  assert.match(a, /not open for booking yet/, 'says plainly that nothing is bookable');
  assert.equal(/No live classes|deliberate|things a teacher would/i.test(a), false, 'the pre-D1 wording is gone');
  // no link to the unlisted page, and no confirmed teacher, date or fee
  assert.equal(/live-classes|href=|₹|\d/.test(a), false, 'no link, fee, date or number in the announcement');
  const D = loadData();
  if (!D.courses.some((k) => !k.draft && k.enrolment === 'open')) {
    assert.equal(launchBlockers(D).some((b) => /index\.html/.test(b)), false, 'the homepage raises no launch blocker');
  }
});

test('LIVE GATE: the gate clears once every blocker is resolved (so it can actually be satisfied)', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-live-gate-'));
  try {
    fs.writeFileSync(path.join(dir, 'live-classes.html'), html);
    fs.writeFileSync(path.join(dir, 'index.html'), '<p>Live classes with a teacher are available.</p>');
    fs.writeFileSync(path.join(dir, 'terms.html'), '<h2>Live classes</h2>');
    fs.writeFileSync(path.join(dir, 'privacy.html'), '<h2>Consultation requests</h2>');
    const D = clone(loadData());
    D.consultation.termsConfirmed = true;
    for (const k of POLICIES) D.policies[k] = 'Confirmed policy text.';
    D.teachers[0].draft = false; D.courses[0].draft = false;
    assert.deepEqual(launchBlockers(D, dir), []);
    const faqPage = (answer) => `<script type="application/ld+json">{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Are there live classes or teachers?","acceptedAnswer":{"@type":"Answer","text":"${answer}"}}]}</script>
      <span class="faq-q-text">Are there live classes or teachers?</span><span class="faq-toggle"></span></button><div class="faq-answer">${answer}</div>`;
    fs.writeFileSync(path.join(dir, 'index.html'), faqPage('Enrolment is open for the next batch.'));
    assert.ok(launchBlockers(D, dir).some((b) => /says enrolment is open/.test(b)), 'the homepage cannot claim open enrolment while no course is open');
    D.courses[0].enrolment = 'open';
    assert.deepEqual(launchBlockers(D, dir), [], 'the claim is fine once a published course is open');
    D.courses[0].enrolment = 'not-open';
    fs.writeFileSync(path.join(dir, 'index.html'), faqPage('Teacher-led classes are coming.').replace('<div class="faq-answer">Teacher-led', '<div class="faq-answer">Live'));
    assert.ok(launchBlockers(D, dir).some((b) => /does not match the visible answer/.test(b)), 'visible and structured FAQ answers must match');
    fs.writeFileSync(path.join(dir, 'index.html'), faqPage('Fees will be announced before enrolment opens; live classes are not open for booking yet.'));
    assert.deepEqual(launchBlockers(D, dir), [], 'announcing that enrolment will open later is not a claim that it is open');
    const meta = (desc) => html.replace(/(<meta name="description" content=")[^"]*/, `$1${desc}`);
    fs.writeFileSync(path.join(dir, 'live-classes.html'), meta('Live German classes, A1 to C2.'));
    assert.ok(launchBlockers(D, dir).some((b) => /claims levels A1–C2/.test(b)), 'a level range nobody published is a blocker');
    fs.writeFileSync(path.join(dir, 'live-classes.html'), meta(`Live German classes, ${D.teachers[0].levels[0]} to ${D.teachers[0].levels.at(-1)}.`));
    assert.equal(launchBlockers(D, dir).some((b) => /claims levels/.test(b)), false, 'a range covered by the published teacher is fine');
    fs.writeFileSync(path.join(dir, 'live-classes.html'), html);
    D.consultation.feeLabel = '₹150';
    assert.ok(launchBlockers(D, dir).some((b) => /meta description/.test(b)), 'a changed fee with stale meta descriptions is a blocker');
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});
