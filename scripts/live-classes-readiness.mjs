#!/usr/bin/env node
/* Live Classes — data validation and launch readiness.
   Two questions, answered from the repository alone:
   1. checkData(): is live-classes-data.js well formed, and is every
      PUBLISHED (non-draft) entry complete and consistent? Drafts only
      need to be well formed.
   2. launchBlockers(): what still stops the page from going live?
      Business facts (teachers, courses, policies, confirmed consultation
      terms) and site-wide statements that would contradict the page.
   `node scripts/live-classes-readiness.mjs` prints both and exits 1 if
   the data has errors. Blockers alone don't fail it while the page is
   unpublished; scripts/live-classes-static.test.mjs fails if the page is
   allowlisted with any blocker left. See
   docs/live-classes-launch-readiness.md. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const GROUPS = ['beginner', 'intermediate', 'advanced', 'exam', 'speaking'];
const FORMATS = ['Group batch', 'One-to-one'];
const ENROLMENT = ['open', 'waitlist', 'not-open'];
export const POLICIES = ['missedClass', 'cancellationRefund', 'scheduling', 'feeIncludes'];
export const PAGE_FILES = ['live-classes.html', 'kw-live.js', 'live-classes-data.js'];

const has = (v) => (Array.isArray(v) ? v.length > 0 : v != null && String(v).trim() !== '');
/* Meeting links that must never ship in a public file: Google Meet room
   codes (and other common meeting hosts). */
export const PRIVATE_LINK_RE = /(?:meet\.google\.com\/(?!$)[a-z0-9-]+|zoom\.us\/j\/\d+|teams\.microsoft\.com\/l\/meetup-join)/i;
export function privateLinks(x) {
  if (typeof x === 'string') return PRIVATE_LINK_RE.test(x) ? [x] : [];
  if (x && typeof x === 'object') return Object.values(x).flatMap(privateLinks);
  return [];
}
/* [Bracketed] template text inside any string value of an entry. JSON
   brackets don't count: `levels: ['A1']` is not a placeholder. */
export function placeholders(x) {
  if (typeof x === 'string') return /\[[^\]]+\]/.test(x) ? [x] : [];
  if (x && typeof x === 'object') return Object.values(x).flatMap(placeholders);
  return [];
}
const read = (root, f) => fs.readFileSync(path.join(root, f), 'utf8');

export function loadData(root = ROOT) {
  const ctx = { window: {} };
  vm.runInNewContext(read(root, 'live-classes-data.js'), ctx, { filename: 'live-classes-data.js' });
  return ctx.window.KWLive;
}

/* Errors that make the data wrong today, whether or not the page is live. */
export function checkData(D, root = ROOT) {
  const errors = [];
  const err = (where, msg) => errors.push(`${where}: ${msg}`);
  const subset = (where, field, list, allowed) => {
    if (!Array.isArray(list)) return err(where, `${field} must be a list`);
    for (const x of list) if (!allowed.includes(x)) err(where, `${field} has "${x}" (allowed: ${allowed.join(', ')})`);
  };
  const unique = (name, list) => {
    const seen = new Set();
    for (const x of list) { if (seen.has(x.id)) err(`${name} ${x.id}`, 'duplicate id'); seen.add(x.id); }
  };

  if (D.showDrafts !== false) err('showDrafts', 'must be false in the committed file');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(D.contact?.email || '')) err('contact.email', 'not an email address');
  const c = D.consultation || {};
  if (!has(c.feeLabel)) err('consultation.feeLabel', 'missing');
  if (!Number.isInteger(c.adjustmentDays) || c.adjustmentDays < 0) err('consultation.adjustmentDays', 'must be a whole number of days');
  if (typeof c.termsConfirmed !== 'boolean') err('consultation.termsConfirmed', 'must be true or false');
  // confirmed terms are complete terms: length, platform and the cancellation rule are part of them
  if (c.termsConfirmed === true) for (const f of ['durationMinutes', 'platform', 'cancellation']) if (!has(c[f])) err(`consultation.${f}`, 'missing although termsConfirmed is true');
  if (!Array.isArray(c.steps) || !c.steps.length) err('consultation.steps', 'missing');
  // booked and paid online only (owner decision D11, 2026-10-21): never by email or manual UPI
  else if (c.steps.some((x) => /\bemail|\bUPI\b|bank transfer/i.test(String(x)))) err('consultation.steps', 'describe booking or paying by email or manual UPI: consultations are booked and paid online only');
  for (const k of POLICIES) if (!(k in (D.policies || {}))) err(`policies.${k}`, 'key missing (use null while unpublished)');
  // online booking with payment is an owner decision with legal consequences: never on by default
  const ob = c.onlineBooking;
  if (!ob || typeof ob.enabled !== 'boolean') err('consultation.onlineBooking', 'must be an object with enabled: true or false');
  else if (ob.enabled) {
    if (c.termsConfirmed !== true) err('consultation.onlineBooking', 'enabled needs confirmed consultation terms');
    if (!has(ob.ownerApproval)) err('consultation.onlineBooking', 'enabled needs ownerApproval (how and when the owner approved online booking)');
    if (ob.legalTermsUpdated !== true) err('consultation.onlineBooking', 'enabled needs legalTermsUpdated: the owner must approve Terms §4A, Privacy §4A and the page copy for online booking');
    if (ob.joinLinksConfigured !== true) err('consultation.onlineBooking', 'enabled needs joinLinksConfigured: the CONSULT_JOIN_LINKS Worker secret must hold each bookable teacher\'s Google Meet link');
  }
  // online course payments: an owner decision with legal consequences, never on by default
  const le = D.liveEnrolment;
  if (!le || typeof le.enabled !== 'boolean') err('liveEnrolment', 'must be an object with enabled: true or false');
  else if (le.enabled) {
    if (!has(le.ownerApproval)) err('liveEnrolment', 'enabled needs ownerApproval (how and when the owner approved online course payments)');
    if (le.legalTermsUpdated !== true) err('liveEnrolment', 'enabled needs legalTermsUpdated: the Terms, Privacy Policy and course payment terms must describe online payment');
    const open = (D.courses || []).filter((k) => !k.draft && k.enrolment === 'open');
    if (!open.length) err('liveEnrolment', 'enabled needs at least one published course with enrolment "open"');
    for (const k of open) if (/\bemail|payment request/i.test(k.paymentTerms || '')) err(`course ${k.id}`, 'paymentTerms still describe an emailed payment request; rewrite them for online payment before enabling liveEnrolment');
  }
  // public data: a private joining link must never be in it (it belongs in a Worker secret)
  for (const p of privateLinks(D)) err('live-classes-data.js', `contains a private meeting link (${p.slice(0, 40)}…): joining links belong in the CONSULT_JOIN_LINKS Worker secret only`);

  const teachers = D.teachers || [], courses = D.courses || [], quotes = D.testimonials || [];
  unique('teacher', teachers); unique('course', courses);
  const teacherById = Object.fromEntries(teachers.map((t) => [t.id, t]));

  for (const t of teachers) {
    const w = `teacher ${t.id}`;
    if (!/^[a-z0-9-]+$/.test(t.id || '')) err(w, 'id must be lower-case letters, digits and hyphens (it is used in #teacher-<id> links)');
    // a listed teacher shows levels only where the owner stated them
    if (!(t.tier === 'listed' && t.levels === undefined)) subset(w, 'levels', t.levels, LEVELS);
    subset(w, 'formats', t.formats || [], FORMATS);
    if (t.tier !== 'listed' && !Array.isArray(t.teachesIn)) err(w, 'teachesIn must be a list');
    // a level of German is not a certificate: certificates go in `goethe`, and only once held
    if (/goethe|zertifikat|certif|diploma|passed/i.test(t.proficiency || '')) err(w, 'proficiency states a level of German only; list certificates actually held in goethe');
    if (t.unconfirmed != null && !Array.isArray(t.unconfirmed)) err(w, 'unconfirmed must be a list of field names');
    for (const f of t.unconfirmed || []) if (!(f in t)) err(w, `unconfirmed names unknown field "${f}"`);
    if (t.draft) continue;
    if (t.tier != null && t.tier !== 'listed') err(w, `tier "${t.tier}" (allowed: listed, or none for a full profile)`);
    if (t.tier === 'listed') { checkListed(t, w, err, root); continue; }
    if (has(t.unconfirmed)) err(w, `published teacher still has unconfirmed fields: ${t.unconfirmed.join(', ')}`);
    for (const p of placeholders(t)) err(w, `published teacher still has placeholder text "${p}"`);
    for (const f of ['name', 'headline', 'experience', 'proficiency', 'qualifications', 'levels', 'teachesIn', 'formats']) if (!has(t[f])) err(w, `published teacher needs ${f}`);
    // a public profile needs the teacher's own approval on record (how and when; never shown)
    if (!has(t.consent)) err(w, 'published teacher needs consent (how and when the teacher approved publishing this profile)');
    // credentials in a recognisable, checkable form only
    if (has(t.proficiency) && !/^(?:[ABC][12]|Native speaker)$/i.test(t.proficiency)) err(w, `proficiency "${t.proficiency}" must be a CEFR level (A1–C2) or "Native speaker"`);
    for (const g of t.goethe || []) if (!/^Goethe-Zertifikat (?:A1|A2|B1|B2|C1|C2)\b/.test(g)) err(w, `goethe lists "${g}": name the certificate as issued, e.g. "Goethe-Zertifikat B2"`);
    for (const q of t.qualifications || []) if (/goethe/i.test(q) && !(t.goethe || []).includes(q)) err(w, `qualification "${q}" names a Goethe certificate that is not listed in goethe`);
    if (has(t.photo)) {
      if (!fs.existsSync(path.join(root, t.photo))) err(w, `photo ${t.photo} does not exist`);
      if (!has(t.photoAlt)) err(w, 'a photo needs photoAlt');
      if (!has(t.photoConsent)) err(w, 'a photo needs photoConsent (how and when the teacher approved showing it)');
    }
  }

  for (const k of courses) {
    const w = `course ${k.id}`;
    if (!/^[a-z0-9-]+$/.test(k.id || '')) err(w, 'id must be lower-case letters, digits and hyphens');
    if (!GROUPS.includes(k.group)) err(w, `group "${k.group}" (allowed: ${GROUPS.join(', ')})`);
    if (!FORMATS.includes(k.format)) err(w, `format "${k.format}" (allowed: ${FORMATS.join(', ')})`);
    if (!ENROLMENT.includes(k.enrolment)) err(w, `enrolment "${k.enrolment}" (allowed: ${ENROLMENT.join(', ')})`);
    subset(w, 'levels', k.levels, LEVELS);
    for (const id of k.teacherIds || []) if (!teacherById[id]) err(w, `teacherIds names unknown teacher "${id}"`);
    if (k.draft) continue;
    for (const p of placeholders(k)) err(w, `published course still has placeholder text "${p}"`);
    if (!has(k.title) || !has(k.objectives) || !has(k.levels)) err(w, 'published course needs title, objectives and levels');
    // a draft teacher is never rendered on the live site, so the course would show no teacher
    for (const id of k.teacherIds || []) if (teacherById[id]?.draft) err(w, `published course names draft teacher "${id}"`);
    for (const id of k.teacherIds || []) if (teacherById[id]?.tier === 'listed') err(w, `published course names listed teacher "${id}": a course needs a teacher with a full profile`);
    // a course may only be offered at levels its teachers actually teach
    const taught = new Set((k.teacherIds || []).flatMap((id) => teacherById[id]?.levels || []));
    if (taught.size) for (const l of k.levels || []) if (!taught.has(l)) err(w, `level ${l} is not taught by its teacher(s) (${[...taught].join(', ')})`);
    if (k.enrolment !== 'not-open' && !has(k.priceLabel)) err(w, `enrolment "${k.enrolment}" needs priceLabel: students must see the fee before they enrol`);
    // full payment only (owner decision, 2026-10-21): no course offers instalments
    if (/instal+ment/i.test(String(k.paymentTerms || ''))) err(w, 'paymentTerms mention instalments: live courses are paid in full only');
    // paid online only (owner decision D11, 2026-10-21): no manual UPI, bank transfer or emailed payment request
    if (/\bUPI\b|bank transfer|payment request|\bemail/i.test(String(k.paymentTerms || ''))) err(w, 'paymentTerms describe a manual or emailed payment: live courses are paid online only');
    if (k.enrolment === 'open') for (const f of ['nextBatch', 'frequency', 'sessionLength', 'totalDuration']) if (!has(k[f])) err(w, `enrolment "open" needs ${f}`);
    if (k.enrolment === 'open' && k.format === 'Group batch' && !has(k.batchSize)) err(w, 'enrolment "open" for a group batch needs batchSize');
  }

  // A1 course fee per teacher (decision sheet D9): one place, real teachers only, the published course's own fee
  const P = D.coursePricing;
  if (P != null) {
    if (!has(P.label)) err('coursePricing', 'needs label (e.g. "A1 course")');
    for (const [id, price] of Object.entries(P.teachers || {})) {
      const w = `coursePricing ${id}`;
      if (!teacherById[id] || teacherById[id].draft) err(w, 'names no published teacher');
      if (!/^₹\d{1,3}(?:,\d{3})*$/.test(price || '')) err(w, `price "${price}" must be a rupee amount like ₹7,999 (current fee only; no ranges, discounts or crossed-out prices)`);
    }
    for (const k of courses.filter((c) => !c.draft && (c.levels || []).join() === 'A1')) {
      for (const id of k.teacherIds || []) {
        const price = (P.teachers || {})[id];
        if (price != null && price !== k.priceLabel) err(`coursePricing ${id}`, `${price} differs from the published ${k.id} fee ${k.priceLabel}`);
      }
    }
  }
  // sample ratings are a local design preview only (kw-live.js SAMPLE_PREVIEW)
  if (D.previewSampleRatings != null && typeof D.previewSampleRatings !== 'boolean') err('previewSampleRatings', 'must be true or false');

  if (!Array.isArray(D.reviews)) err('reviews', 'must be a list (empty until a genuine review exists)');
  for (const [i, r] of (D.reviews || []).entries()) {
    const w = `review ${i + 1}`;
    if (!teacherById[r.teacherId]) err(w, `teacherId names unknown teacher "${r.teacherId}"`);
    if (!Number.isInteger(r.rating) || r.rating < 1 || r.rating > 5) err(w, 'rating must be a whole number from 1 to 5');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(r.date || '')) err(w, 'date must be YYYY-MM-DD');
    if (r.draft) continue;
    if (teacherById[r.teacherId]?.draft) err(w, `published review names draft teacher "${r.teacherId}"`);
    for (const p of placeholders(r)) err(w, `published review still has placeholder text "${p}"`);
    for (const f of ['evidence', 'permission']) if (!has(r[f])) err(w, `published review needs ${f} (evidence = the booking reference or batch that shows the learner was taught; permission = how and when they agreed)`);
  }

  for (const [i, q] of quotes.entries()) {
    if (q.draft) continue;
    for (const p of placeholders(q)) err(`testimonial ${i + 1}`, `published testimonial still has placeholder text "${p}"`);
    for (const f of ['quote', 'name', 'permission']) if (!has(q[f])) err(`testimonial ${i + 1}`, `published testimonial needs ${f} (permission = how and when written consent was given)`);
  }
  return errors;
}

/* A LISTED teacher (tier: 'listed'): name and title only, on the
   owner's instruction, with the teacher's consent on record. Nothing
   else may be claimed: no experience, qualification, certificate,
   headline, language, rating or availability, and no booking (booking
   needs a full profile). Levels only where the owner has stated them. */
export const LISTED_KEYS = ['id', 'tier', 'name', 'title', 'levels', 'photo', 'photoAlt', 'consent', 'photoConsent'];
export const LISTED_TITLES = ['German Language Teacher'];
function checkListed(t, w, err, root) {
  for (const k of Object.keys(t)) if (!LISTED_KEYS.includes(k)) err(w, `listed teacher carries "${k}": a listed card shows name and title only (a full profile goes through the intake document)`);
  if (!has(t.name)) err(w, 'listed teacher needs name');
  if (!LISTED_TITLES.includes(t.title)) err(w, `listed teacher title "${t.title}" (allowed: ${LISTED_TITLES.join(', ')})`);
  if (!has(t.consent)) err(w, 'listed teacher needs consent (how and when the teacher agreed to be listed)');
  for (const p of placeholders(t)) err(w, `listed teacher still has placeholder text "${p}"`);
  if (has(t.photo)) {
    if (!fs.existsSync(path.join(root, t.photo))) err(w, `photo ${t.photo} does not exist`);
    if (!has(t.photoAlt)) err(w, 'a photo needs photoAlt');
    if (!has(t.photoConsent)) err(w, 'a photo needs photoConsent (how and when the teacher approved showing it)');
  }
}

/* The rating shown for a teacher: computed from genuine, published,
   evidenced reviews only (kw-live.js reviewSummary() is the same rule;
   a static test keeps them in step). null = "No reviews yet". */
export function reviewSummary(reviews, teacherId) {
  const ok = (reviews || []).filter((r) => !r.draft && r.teacherId === teacherId && Number.isInteger(r.rating) && r.rating >= 1 && r.rating <= 5 && has(r.evidence) && has(r.permission));
  if (!ok.length) return null;
  return { count: ok.length, average: Math.round((ok.reduce((a, r) => a + r.rating, 0) / ok.length) * 10) / 10 };
}

/* Teachers with a full, published profile: the only ones booking may name.
   A listed teacher is shown but never bookable. */
export function publishedTeacherIds(root = ROOT) {
  return (loadData(root).teachers || []).filter((t) => !t.draft && t.tier !== 'listed').map((t) => t.id);
}

/* docs/live-classes-candidates.json: the 11 people the owner named on
   2026-10-20, under opaque ids (names live in a private roster outside
   this public repository). A draft candidate carries no facts at all. */
export const CANDIDATE_DRAFT_KEYS = ['id', 'status', 'bookingEligible', 'profile', 'consent', 'photoConsent', 'availability', 'reviews'];
export const CANDIDATE_LISTED_KEYS = ['id', 'status', 'bookingEligible', 'listedAs'];
export function loadCandidates(root = ROOT) {
  return JSON.parse(read(root, 'docs/live-classes-candidates.json')).candidates;
}
export function checkCandidates(list, D, eligible) {
  const errors = [];
  const err = (where, msg) => errors.push(`${where}: ${msg}`);
  const teacherById = Object.fromEntries((D.teachers || []).map((t) => [t.id, t]));
  if (list.length !== 11) err('candidates', `expected the 11 people named on 2026-10-20, found ${list.length}`);
  const ids = list.map((c) => c.id);
  if (new Set(ids).size !== ids.length) err('candidates', 'duplicate id');
  for (const c of list) {
    const w = `candidate ${c.id}`;
    if (c.status === 'draft') {
      if (!/^candidate-\d{2}$/.test(c.id)) err(w, 'a draft candidate keeps an opaque id (candidate-NN) until published');
      for (const k of Object.keys(c)) if (!CANDIDATE_DRAFT_KEYS.includes(k)) err(w, `draft candidate carries "${k}": no facts until verified (intake document)`);
      for (const k of ['profile', 'consent', 'photoConsent', 'availability']) if (c[k] != null) err(w, `draft candidate has ${k} set`);
      if (has(c.reviews)) err(w, 'draft candidate has reviews');
      if (teacherById[c.id] && !teacherById[c.id].draft) err(w, 'is published in live-classes-data.js but still marked draft here');
    } else if (c.status === 'published') {
      const t = teacherById[c.id];
      if (!t || t.draft || t.tier === 'listed') err(w, 'status "published" but no published teacher with a full profile under this id in live-classes-data.js');
    } else if (c.status === 'listed') {
      // the opaque id stays (it is the Worker's booking id); listedAs names the card
      for (const k of Object.keys(c)) if (!CANDIDATE_LISTED_KEYS.includes(k)) err(w, `listed candidate carries "${k}": the card's facts live in live-classes-data.js`);
      const t = teacherById[c.listedAs];
      if (!t || t.draft || t.tier !== 'listed') err(w, `status "listed" but listedAs "${c.listedAs}" is not a listed teacher in live-classes-data.js`);
    } else err(w, `status "${c.status}" (allowed: draft, listed, published)`);
  }
  const elig = list.filter((c) => c.bookingEligible === true).map((c) => c.id).sort();
  if (JSON.stringify(elig) !== JSON.stringify([...eligible].sort())) err('candidates', `bookingEligible (${elig.join(', ')}) must match ELIGIBLE_TEACHERS in consultations.js (${eligible.join(', ')})`);
  return errors;
}

/* What still stands between the unlisted preview and a public launch. */
export function launchBlockers(D, root = ROOT) {
  const b = [];
  const published = (list) => (list || []).filter((x) => !x.draft);
  if (D.consultation?.termsConfirmed !== true) b.push('Consultation terms are not confirmed (fee, adjustment period, payment method): consultation.termsConfirmed is false.');
  const open = POLICIES.filter((k) => !has(D.policies?.[k]));
  if (open.length) b.push(`Live-class policies not written: ${open.join(', ')}.`);
  if (!published(D.teachers).length) b.push('No published teacher profile.');
  if (!published(D.courses).length) b.push('No published live course.');
  const page = read(root, 'live-classes.html');
  for (const m of page.matchAll(/<meta (?:name="description"|property="og:description") content="([^"]*)"/g)) {
    if (/₹\s?\d/.test(m[1]) && !m[1].includes(D.consultation?.feeLabel)) b.push(`A meta description still names a different fee than consultation.feeLabel: "${m[1].slice(0, 60)}…".`);
  }
  const index = read(root, 'index.html');
  // a level range in the meta descriptions must be covered by what is published
  const covered = new Set([...published(D.teachers), ...published(D.courses)].flatMap((x) => x.levels || []));
  for (const m of page.matchAll(/<meta (?:name="description"|property="og:description") content="([^"]*)"/g)) {
    for (const r of m[1].matchAll(/\b([ABC][12])\s*(?:to|–|-|→)\s*([ABC][12])\b/g)) {
      const span = LEVELS.slice(LEVELS.indexOf(r[1]), LEVELS.indexOf(r[2]) + 1);
      const missing = span.filter((l) => !covered.has(l));
      if (missing.length) b.push(`A meta description claims levels ${r[1]}–${r[2]}, but no published teacher or course covers ${missing.join(', ')}.`);
    }
  }
  if (/No live classes/i.test(index)) b.push('index.html says "No live classes" (visible FAQ and FAQPage structured data).');
  const faq = homepageFaq(index);
  const differ = Object.keys(faq.structured).filter((q) => faq.visible[q] !== faq.structured[q]);
  if (differ.length) b.push(`index.html FAQ: the FAQPage structured data does not match the visible answer for: ${differ.join(' | ')}.`);
  // the homepage must not promise open enrolment that the page does not show
  const openCourse = published(D.courses).some((k) => k.enrolment === 'open');
  const liveAnswers = Object.entries(faq.visible).filter(([q]) => /live class|teacher/i.test(q)).map(([, a]) => a).join(' ');
  if (!openCourse && /\benrol(?:l)?ment (?:is )?open\b|\benrol now\b|\bnow enrolling\b|\bbook (?:your|a) (?:seat|place)\b|\bjoin (?:the|our) next batch\b/i.test(liveAnswers)) b.push('index.html FAQ says enrolment is open, but no published live course has enrolment "open".');
  if (!/live class|live course/i.test(read(root, 'terms.html'))) b.push('terms.html describes only self-paced content; it does not cover live classes or consultations.');
  if (!/live class|consultation/i.test(read(root, 'privacy.html'))) b.push('privacy.html does not describe the consultation request (level, goal, optional phone, preferred times sent by email), yet the form\'s consent refers to it.');
  // customer-facing legal pages never carry review markers, and the self-paced guarantee must not read as covering live classes
  for (const f of ['terms.html', 'privacy.html', 'refund-policy.html']) if (/\[(?:OWNER|LEGAL)\b/.test(read(root, f))) b.push(`${f} still contains an [OWNER …] or [LEGAL …] review marker.`);
  if (!/live class/i.test(read(root, 'refund-policy.html'))) b.push('refund-policy.html does not say that its 7-day guarantee excludes live classes and consultations.');
  // the Terms must state the same enrolment status as the published courses
  if (openCourse && /enrolment in live courses is (?:<[^>]+>)?not open yet/i.test(read(root, 'terms.html'))) b.push('terms.html says live-course enrolment is not open, but a published course has enrolment "open".');
  return b;
}

/* The homepage FAQ, visible and structured. Google expects FAQPage
   markup to match the visible answers, so both are compared. */
const plain = (h) => h.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&mdash;/g, '—').replace(/&rsquo;/g, '’').replace(/\s+/g, ' ').trim();
export function homepageFaq(indexHtml) {
  const visible = {};
  for (const m of indexHtml.matchAll(/<span class="faq-q-text">([\s\S]*?)<\/span>[\s\S]*?<div class="faq-answer">([\s\S]*?)<\/div>/g)) visible[plain(m[1])] = plain(m[2]);
  const structured = {};
  for (const m of indexHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let j; try { j = JSON.parse(m[1]); } catch { continue; }
    if (j['@type'] !== 'FAQPage') continue;
    for (const q of j.mainEntity || []) structured[plain(q.name)] = plain(q.acceptedAnswer?.text || '');
  }
  return { visible, structured };
}

export function isAllowlisted(root = ROOT) {
  const allow = read(root, '.github/pages-allowlist.txt').split('\n').map((l) => l.trim());
  return PAGE_FILES.some((f) => allow.includes(f));
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const D = loadData();
  const { ELIGIBLE_TEACHERS } = await import('../access/worker/src/consultations.js');
  const errors = checkData(D).concat(checkCandidates(loadCandidates(), D, ELIGIBLE_TEACHERS));
  const blockers = launchBlockers(D);
  console.log(`Live Classes readiness — page ${isAllowlisted() ? 'ALLOWLISTED (public)' : 'unpublished (not in the Pages allowlist)'}`);
  console.log(`\nData errors: ${errors.length ? '' : 'none'}`);
  for (const e of errors) console.log(`  ✖ ${e}`);
  console.log(`\nLaunch blockers: ${blockers.length ? '' : 'none'}`);
  for (const x of blockers) console.log(`  • ${x}`);
  process.exit(errors.length || (isAllowlisted() && blockers.length) ? 1 : 0);
}
