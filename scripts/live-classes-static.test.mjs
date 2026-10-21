/* Live Classes (live-classes.html) — fast checks without a browser.
   Guards the things that must not regress silently:
   1. the page is public as a WAITLIST launch (owner-approved 2026-10-20,
      D8): only the teacher reegan-gandhi has a full profile (the other
      teachers are listed by name and title only, 2026-10-21) and only the
      course live-a1 is published, live-a1 has no start date and enrolment "waitlist", and
      the page is allowlisted only while the launch gate shows no blocker;
   2. Terms, Privacy and Refund Policy disclose the live service and
      agree with the page; and
   3. draft data is off by default and placeholder text only ever lives
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

test('LIVE: the page is published (indexed, canonical, allowlisted, in the sitemap, nav and footer) with no launch blocker', () => {
  const URL = 'https://reegangandhi16-pixel.github.io/klarweg/live-classes.html';
  assert.equal(/<meta name="robots"[^>]*noindex/.test(html), false, 'noindex is removed');
  assert.match(html, new RegExp(`<link rel="canonical" href="${URL}">`));
  assert.match(html, new RegExp(`<meta property="og:url" content="${URL}">`));
  const allow = read('.github/pages-allowlist.txt').split('\n').map((l) => l.trim());
  for (const f of FILES) assert.ok(allow.includes(f), `${f} is in .github/pages-allowlist.txt`);
  assert.ok(read('sitemap.xml').includes(`<loc>${URL}</loc>`), 'sitemap.xml lists the canonical URL');
  // every page with the shared site footer links the page there; pages with the shared nav also link it in the desktop nav and mobile drawer
  const pages = fs.readdirSync(ROOT).filter((f) => f.endsWith('.html') && f !== PAGE && /<a href="courses.html"[^>]*>Courses<\/a>/.test(read(f)));
  assert.ok(pages.includes('index.html') && pages.length >= 17, `found the pages with site navigation (${pages.length})`);
  for (const f of pages) {
    const s = read(f);
    const after = [...s.matchAll(/<a href="courses.html"[^>]*>Courses<\/a>(?:<\/li>)?\n\s*(?:<li>)?<a href="live-classes.html">Live Classes<\/a>/g)].length;
    const courses = [...s.matchAll(/<a href="courses.html"(?: class="active")?>Courses<\/a>(?:<\/li>)?\s*$/gm)].length;
    assert.equal(after, courses, `${f}: every nav/footer "Courses" link is followed by "Live Classes"`);
  }
  assert.ok(/class="nav-links">[\s\S]*?href="live-classes.html"[\s\S]*?<\/div>/.test(read('index.html')), 'the homepage nav links the page');
  assert.deepEqual(launchBlockers(loadData()), [], 'an allowlisted page must have no launch blocker');
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
  assert.equal(/doesn.t include the other|includes? self-paced access/i.test(body), false, 'D6 (no self-paced access) is stated in the Terms §4A, not claimed otherwise on this page');
});

test('LIVE: every amount on the page and in its data is an owner-approved amount (decision sheet, part A)', () => {
  const sheet = read('docs/live-classes-owner-decisions.md');
  const settled = sheet.slice(sheet.indexOf('## A. Settled'), sheet.indexOf('## B. Still pending'));
  assert.ok(settled.length > 0, 'the sheet separates settled decisions from pending ones');
  const approved = new Set(settled.match(/₹\d+(?:,\d{3})*/g) || []);
  for (const x of ['₹100', '₹7,999']) assert.ok(approved.has(x), `${x} is recorded as approved`);
  // D10: full payment only; the withdrawn instalment amounts appear nowhere on the page
  for (const f of FILES) for (const x of ['₹4,000', '₹3,999']) assert.equal(read(f).includes(x), false, `${f} names the withdrawn instalment amount ${x}`);
  for (const f of FILES) for (const x of new Set(read(f).match(/₹\d+(?:,\d{3})*/g) || [])) assert.ok(approved.has(x), `${f} names ${x}, which is not an approved amount in the decision sheet`);
});

/* ---------- owner-approved decisions (2026-10-20, docs/live-classes-owner-decisions.md) ---------- */
test('LIVE D8: only the owner\'s full profile and the A1 waitlist course are published', () => {
  const D = loadData();
  assert.deepEqual([...D.teachers.filter((x) => !x.draft && x.tier !== 'listed').map((x) => x.id)], ['reegan-gandhi'], 'no other teacher has a full profile');
  assert.ok(D.teachers.filter((x) => !x.draft && x.tier === 'listed').every((x) => x.title === 'German Language Teacher' && !('experience' in x)), 'other teachers are listed by name and title only');
  assert.deepEqual([...D.courses.filter((x) => !x.draft).map((x) => x.id)], ['live-a1'], 'no other course is published');
  assert.deepEqual([...D.testimonials.filter((x) => !x.draft)], [], 'no testimonial is published');
  for (const k of D.courses.filter((x) => !x.draft)) assert.notEqual(k.enrolment, 'open', `${k.id}: enrolment cannot open without a start date and payment arrangements`);
  // the card and the no-JS fallback say the start date is to be announced and the waitlist is free and not a booking
  const js = read('kw-live.js');
  assert.match(js, /c\.enrolment === 'waitlist' \? '<p class="c-note">' \+ \(has\(c\.nextBatch\) \? '' : 'The start date is still to be announced\. '\)/);
  assert.match(js, /Enrolment is not open yet\. Joining the waitlist is free and is not a booking: nothing is charged\./);
  const nojs = html.match(/<p data-nojs-course>([\s\S]*?)<\/p>/);
  assert.ok(nojs, 'the no-JS course summary exists');
  const a1 = D.courses.find((c) => c.id === 'live-a1');
  assert.ok(nojs[1].includes(`<strong>${a1.title}</strong> with Reegan Gandhi: waitlist only. The start date is still to be announced and enrolment is not open. Joining the waitlist is free and is not a booking.`));
});

test('LIVE D3: the first course is the approved A1 group batch, published as a waitlist with no invented start date', () => {
  const D = loadData();
  const a1 = D.courses.find((c) => c.id === 'live-a1');
  assert.ok(a1, 'live-a1 exists');
  assert.equal(a1.draft, undefined, 'live-a1 is published (D8 waitlist launch)');
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
  assert.match(a1.paymentTerms, /^₹7,999 in full before the first class\./, 'full payment only (owner decision, 2026-10-21)');
  assert.equal(/instal/i.test(a1.paymentTerms), false, 'no instalments are offered');
  assert.match(a1.materials, /class notes and PDF worksheets; homework with written feedback/i);
  assert.match(a1.examPrep, /Goethe-Zertifikat A1: Start Deutsch 1 \(exam fee not included\)/);
  const t = D.teachers.find((x) => x.id === 'reegan-gandhi');
  assert.ok(t && t.draft === undefined, 'the teacher profile is published');
  assert.deepEqual({ experience: t.experience, proficiency: t.proficiency, qualifications: [...t.qualifications], goethe: [...t.goethe], levels: [...t.levels], teachesIn: [...t.teachesIn], specialisms: [...t.specialisms], examPrep: t.examPrep, formats: [...t.formats], photo: t.photo, availability: t.availability }, {
    experience: '5 years of teaching German', proficiency: 'C1', qualifications: ['Goethe-Zertifikat C1'], goethe: ['Goethe-Zertifikat C1'], levels: ['A1', 'A2', 'B1', 'B2'], teachesIn: ['Hindi', 'English'],
    specialisms: ['German grammar', 'Structured learning for Hindi-speaking learners', 'Goethe exam preparation'], examPrep: 'Goethe exam preparation at A1–B1', formats: ['Group batch', 'One-to-one'], photo: null, availability: null
  }, 'only the confirmed facts: no photo, availability or other claims');
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

test('LIVE LEGAL: Terms, Privacy and Refund Policy disclose the live service as published, without review markers or claimed sign-off', () => {
  const sheet = read('docs/live-classes-owner-decisions.md');
  // the owner approved publication; nobody claims a lawyer or accountant reviewed the text
  assert.match(sheet, /Legal review status: owner-approved for publication on 2026-10-20; not reviewed by a lawyer/);
  const text = (f) => read(f).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ');
  const [terms, privacy, refund] = ['terms.html', 'privacy.html', 'refund-policy.html'].map(text);
  for (const [f, s] of [['terms.html', terms], ['privacy.html', privacy], ['refund-policy.html', refund]]) {
    assert.equal(/\[(?:OWNER|LEGAL)\b|\[[A-Z][^\]]*\]/.test(read(f)), false, `${f}: no [OWNER]/[LEGAL] or bracketed placeholder`);
    assert.equal(/lawyer|solicitor|advocate|accountant|legally reviewed|legal review|chartered/i.test(s), false, `${f}: claims no professional review`);
    assert.match(read(f), /Last updated: 20 October 2026/, `${f}: the date is updated`);
  }
  const D = loadData(), c = D.consultation;
  // Terms §4A: separate service, enrolment closed, the approved consultation and policies verbatim, manual payment
  assert.match(terms, /Live classes are a separate service from the self-paced courses: buying a self-paced level does not include live classes, and a live course does not include access to the self-paced courses\./);
  assert.match(terms, /Enrolment in live courses is not open yet, and Klarweg does not accept live-course fees until it is\./);
  assert.match(terms, /Registering interest is not a booking, does not reserve a place and commits you to nothing/);
  assert.ok(terms.includes(`A personal consultation costs ${c.feeLabel} and lasts ${c.durationMinutes} minutes on ${c.platform}.`));
  assert.ok(terms.includes(`within ${c.adjustmentDays} days of your consultation, the consultation fee is deducted from the course fee`));
  assert.ok(terms.includes(c.cancellation), 'the consultation cancellation terms');
  for (const k of POLICIES) assert.ok(terms.includes(D.policies[k]), `Terms §4A quotes policy ${k} verbatim`);
  assert.match(terms, /paid by UPI or bank transfer, on a payment request we send you by email\. A person at Klarweg checks each payment/);
  assert.match(terms, /The Klarweg website does not take live-class or consultation payments/);
  assert.match(terms, /Classes and consultations are not recorded\. In a group class, the other learners in your batch can see your name and see and hear you/);
  assert.match(terms, /No minimum age has been set for live classes or consultations\./, 'states the age position actually applied: none');
  assert.match(terms, /Live classes and consultations are not covered by the 7-day guarantee/);
  // unresolved rules (instalment refunds, a missed instalment, the deduction's target, removal) are not invented
  assert.equal(/₹7,999 ÷|per class at|if the second instalment is not paid|we may remove/i.test(terms), false, 'no undecided business rule is stated as settled');
  // Privacy: the request flow and its data, retention, Meet, group visibility, payments, third parties
  assert.match(privacy, /your own email app sends us the details you entered: your name, email address, optional WhatsApp or phone number, current level, main goal, preferred teacher and course, preferred times and your message/);
  assert.match(privacy, /Nothing reaches us unless you press Send in your email app/);
  assert.match(privacy, /kept for 12 months after our last contact with you, then deleted from our inbox by hand\. This is a manual practice, not an automatic process\./);
  assert.match(privacy, /take place on Google Meet[\s\S]*Classes and consultations are not recorded\./);
  assert.match(privacy, /other learners in your batch can see your name and see and hear you/);
  assert.match(privacy, /You pay by UPI or bank transfer on a payment request we email you\. A person at Klarweg checks each payment/);
  assert.match(privacy, /Gmail, which holds live-class requests[\s\S]*Google Meet, which hosts live classes/);
  assert.match(privacy, /No minimum age has been set for live classes or consultations\./);
  // Refund Policy: the self-paced guarantee is unchanged and excludes live classes
  assert.match(refund, /It covers self-paced purchases only\. It does not cover live classes or consultations/);
  assert.match(read('refund-policy.html'), /href="terms.html#live-classes"/);
  assert.match(refund, /7-day money-back guarantee on any paid level or the Lifetime bundle/);
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
    proficiency: 'C2', qualifications: ['MA German'], goethe: [], levels: ['A1'], teachesIn: ['Hindi'], specialisms: [], examPrep: null, approach: 'x', formats: ['Group batch'], availability: null, consent: 'Email, 2026-11-02', photoConsent: null };
  assert.deepEqual(checkData({ ...clone(base), teachers: [...clone(base.teachers), realTeacher] }), [], 'the fixture itself is a complete, publishable teacher');
  expectError((D) => { D.teachers.find((t) => t.id === D.courses[0].teacherIds[0]).draft = true; }, new RegExp(`names draft teacher "${base.courses[0].teacherIds[0]}"`), 'a published course naming a draft teacher would show no teacher on the live site');
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
  // consent and credentials (docs/live-classes-teacher-intake.md)
  expectError((D) => { D.teachers.push({ ...realTeacher, consent: null }); }, /anna-k: published teacher needs consent/, 'a published teacher without recorded consent');
  expectError((D) => { D.teachers.push({ ...realTeacher, photo: 'favicon.svg', photoAlt: 'Portrait of Anna K' }); }, /a photo needs photoConsent/, 'a photo without recorded consent');
  expectError((D) => { D.teachers.push({ ...realTeacher, proficiency: 'Fluent' }); }, /proficiency "Fluent" must be a CEFR level/, 'a vague proficiency claim');
  expectError((D) => { D.teachers.push({ ...realTeacher, goethe: ['Goethe certified trainer'] }); }, /name the certificate as issued/, 'a certificate not named as issued');
  expectError((D) => { D.teachers.push({ ...realTeacher, qualifications: ['Goethe-Zertifikat C2'] }); }, /names a Goethe certificate that is not listed in goethe/, 'a Goethe certificate claimed only under qualifications');
});

test('LIVE DATA: a teacher template cannot be published by filling its [brackets] alone', () => {
  const D = loadData();
  const templates = D.teachers.filter((t) => t.draft && /^\[/.test(t.name));
  assert.deepEqual([...templates.map((t) => t.id)], ['teacher-1', 'teacher-2', 'teacher-3'], 'the three templates are still drafts');
  const fill = (x) => (typeof x === 'string' ? x.replace(/\[[^\]]+\]/g, 'Filled') : Array.isArray(x) ? x.map(fill) : x);
  for (const t of templates) {
    assert.ok(t.unconfirmed.length > 0, `${t.id}: its template values are marked unconfirmed`);
    // brackets replaced, draft removed, consent recorded: the template guesses (levels, languages, formats …) still block it
    const filled = { ...Object.fromEntries(Object.entries(clone(t)).map(([k, v]) => [k, fill(v)])), draft: false, consent: 'Email, 2026-11-02', proficiency: 'C1', goethe: [], qualifications: ['MA German'] };
    const errs = checkData({ ...clone(D), teachers: [...clone(D.teachers.filter((x) => x.id !== t.id)), filled] }).filter((e) => e.startsWith(`teacher ${t.id}:`));
    assert.deepEqual(errs, [`teacher ${t.id}: published teacher still has unconfirmed fields: ${t.unconfirmed.join(', ')}`], `${t.id}: only the unconfirmed guard should remain`);
    assert.equal(t.consent, null, `${t.id}: no consent is recorded for a template`);
  }
  // the intake document covers every field a teacher entry has
  const intake = read('docs/live-classes-teacher-intake.md');
  for (const k of new Set(D.teachers.flatMap((t) => Object.keys(t)))) if (k !== 'draft') assert.ok(intake.includes(`\`${k}\``), `the intake document describes ${k}`);
  assert.equal(read('docs/templates/live-classes-teacher-intake.csv').trim().split(/\r?\n/).every((l) => /^[^,]+,,/.test(l) || l.startsWith('Data field,')), true, 'the intake sheet template holds headings only, no values');
});

test('LIVE GATE: the page is allowlisted, so no blocker may remain', () => {
  const blockers = launchBlockers(loadData());
  // D8: waitlist launch. The owner and live-a1 are published, and Terms/Privacy/Refund cover the live service.
  assert.equal(isAllowlisted(), true);
  if (isAllowlisted()) assert.deepEqual(blockers, [], 'live-classes is in the Pages allowlist but launch blockers remain');
  // the gate still bites: un-publishing the teacher or the course brings its blocker back
  const D = clone(loadData());
  D.teachers.forEach((t) => { t.draft = true; }); D.courses.forEach((k) => { k.draft = true; });
  for (const rx of [/No published teacher profile/, /No published live course/]) assert.ok(launchBlockers(D).some((b) => rx.test(b)), `expected a blocker matching ${rx}`);
});

test('LIVE GATE: the homepage FAQ structured data matches the visible answers', () => {
  const { visible, structured } = homepageFaq(read('index.html'));
  assert.ok(Object.keys(structured).length > 0, 'FAQPage structured data found');
  assert.deepEqual(structured, Object.fromEntries(Object.keys(structured).map((q) => [q, visible[q]])));
});

test('LIVE: the homepage FAQ names the A1 waitlist without claiming enrolment is open (D8)', () => {
  const Q = 'Are there live classes or teachers?';
  const { visible, structured } = homepageFaq(read('index.html'));
  assert.ok(visible[Q] && structured[Q], 'the question is in the visible FAQ and the FAQPage data');
  assert.equal(visible[Q], structured[Q], 'identical text in the visible FAQ and the structured data');
  const a = visible[Q];
  assert.match(a, /The first course, Beginner German \(A1\), is taking free waitlist registrations: enrolment is not open yet and the start date has not been announced\./);
  assert.equal(/No live classes|deliberate|things a teacher would/i.test(a), false, 'the pre-D1 wording is gone');
  const D = loadData();
  // no date or other number: only the level name and the approved consultation fee
  assert.equal(/\d/.test(a.replace('A1', '').replace(D.consultation.feeLabel, '')), false, 'no date, other fee or number in the answer');
  assert.ok(a.includes(`request a ${D.consultation.feeLabel} personal consultation`));
  const raw = read('index.html');
  assert.match(raw, /<div class="faq-answer">\s*Yes\. Alongside[\s\S]*?<a href="live-classes.html">Live Classes<\/a> page\.\s*<\/div>/, 'the visible answer links the page');
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
    fs.writeFileSync(path.join(dir, 'refund-policy.html'), '<p>This guarantee does not cover live classes.</p>');
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
    // legal pages: review markers, a guarantee that reads as covering live classes, a stale "not open" statement
    fs.writeFileSync(path.join(dir, 'terms.html'), '<h2>Live classes</h2><p>[OWNER: instalment rule]</p>');
    assert.ok(launchBlockers(D, dir).some((b) => /terms\.html still contains an \[OWNER/.test(b)), 'a review marker on a legal page is a blocker');
    fs.writeFileSync(path.join(dir, 'terms.html'), '<h2>Live classes</h2>');
    fs.writeFileSync(path.join(dir, 'refund-policy.html'), '<p>7-day refund on any purchase.</p>');
    assert.ok(launchBlockers(D, dir).some((b) => /refund-policy\.html does not say/.test(b)), 'the guarantee must exclude live classes');
    fs.writeFileSync(path.join(dir, 'refund-policy.html'), '<p>This guarantee does not cover live classes.</p>');
    fs.writeFileSync(path.join(dir, 'terms.html'), '<h2>Live classes</h2><p>Enrolment in live courses is <strong>not open yet</strong>.</p>');
    assert.deepEqual(launchBlockers(D, dir), [], 'fine while no published course is open');
    D.courses[0].enrolment = 'open';
    assert.ok(launchBlockers(D, dir).some((b) => /terms\.html says live-course enrolment is not open/.test(b)), 'the Terms must not contradict an open course');
    D.courses[0].enrolment = 'not-open';
    D.consultation.feeLabel = '₹150';
    assert.ok(launchBlockers(D, dir).some((b) => /meta description/.test(b)), 'a changed fee with stale meta descriptions is a blocker');
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});
