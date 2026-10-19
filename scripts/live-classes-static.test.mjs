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
import { checkData, launchBlockers, isAllowlisted, homepageFaq, POLICIES } from './live-classes-readiness.mjs';

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
      assert.equal(/\[[^\]]+\]/.test(JSON.stringify(x)), false, `${name} ${x.id || x.name}: published entry still has [placeholder] text`);
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

/* ---------- data validation and the launch gate (scripts/live-classes-readiness.mjs) ---------- */
const clone = (x) => JSON.parse(JSON.stringify(x));

test('LIVE DATA: the committed data file is well formed (drafts included)', () => {
  assert.deepEqual(checkData(loadData()), []);
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
  expectError((D) => { D.courses[0].draft = false; D.courses[0].title = 'A1'; }, /names draft teacher "teacher-1"/, 'a published course naming a draft teacher would show no teacher on the live site');
  expectError((D) => { D.teachers.push(realTeacher); Object.assign(D.courses[0], { draft: false, teacherIds: ['anna-k'], enrolment: 'open' }); }, /enrolment "open" needs priceLabel/, 'open enrolment without a fee');
  expectError((D) => { D.teachers.push(realTeacher); Object.assign(D.courses[0], { draft: false, teacherIds: ['anna-k'], enrolment: 'open', priceLabel: '₹9,999' }); }, /needs nextBatch/, 'open enrolment without a start date');
  expectError((D) => { D.teachers.push({ ...realTeacher, qualifications: [] }); }, /published teacher needs qualifications/, 'a published teacher without qualifications');
  expectError((D) => { D.teachers.push({ ...realTeacher, photo: 'public/teachers/missing.jpg', photoAlt: 'x' }); }, /photo public\/teachers\/missing\.jpg does not exist/, 'a missing photo file');
  expectError((D) => { D.teachers.push(realTeacher); Object.assign(D.courses[0], { draft: false, teacherIds: ['anna-k'], enrolment: 'open', priceLabel: '₹9,999', nextBatch: '1 Dec', frequency: '2×/week', sessionLength: '60 min', totalDuration: '12 weeks' }); }, /group batch needs batchSize/, 'an open group batch without a batch size');
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
  if (isAllowlisted()) assert.deepEqual(blockers, [], 'live-classes is in the Pages allowlist but launch blockers remain');
});

test('LIVE GATE: the homepage FAQ structured data matches the visible answers', () => {
  const { visible, structured } = homepageFaq(read('index.html'));
  assert.ok(Object.keys(structured).length > 0, 'FAQPage structured data found');
  assert.deepEqual(structured, Object.fromEntries(Object.keys(structured).map((q) => [q, visible[q]])));
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
    D.consultation.feeLabel = '₹150';
    assert.ok(launchBlockers(D, dir).some((b) => /meta description/.test(b)), 'a changed fee with stale meta descriptions is a blocker');
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});
