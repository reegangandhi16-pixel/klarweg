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
  if (!Array.isArray(c.steps) || !c.steps.length) err('consultation.steps', 'missing');
  for (const k of POLICIES) if (!(k in (D.policies || {}))) err(`policies.${k}`, 'key missing (use null while unpublished)');

  const teachers = D.teachers || [], courses = D.courses || [], quotes = D.testimonials || [];
  unique('teacher', teachers); unique('course', courses);
  const teacherById = Object.fromEntries(teachers.map((t) => [t.id, t]));

  for (const t of teachers) {
    const w = `teacher ${t.id}`;
    if (!/^[a-z0-9-]+$/.test(t.id || '')) err(w, 'id must be lower-case letters, digits and hyphens (it is used in #teacher-<id> links)');
    subset(w, 'levels', t.levels, LEVELS);
    subset(w, 'formats', t.formats || [], FORMATS);
    if (!Array.isArray(t.teachesIn)) err(w, 'teachesIn must be a list');
    if (t.draft) continue;
    for (const f of ['name', 'headline', 'experience', 'proficiency', 'qualifications', 'levels', 'teachesIn', 'formats']) if (!has(t[f])) err(w, `published teacher needs ${f}`);
    if (has(t.photo)) {
      if (!fs.existsSync(path.join(root, t.photo))) err(w, `photo ${t.photo} does not exist`);
      if (!has(t.photoAlt)) err(w, 'a photo needs photoAlt');
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
    if (!has(k.title) || !has(k.objectives) || !has(k.levels)) err(w, 'published course needs title, objectives and levels');
    // a draft teacher is never rendered on the live site, so the course would show no teacher
    for (const id of k.teacherIds || []) if (teacherById[id]?.draft) err(w, `published course names draft teacher "${id}"`);
    if (k.enrolment !== 'not-open' && !has(k.priceLabel)) err(w, `enrolment "${k.enrolment}" needs priceLabel: students must see the fee before they enrol`);
    if (k.enrolment === 'open') for (const f of ['nextBatch', 'frequency', 'sessionLength', 'totalDuration']) if (!has(k[f])) err(w, `enrolment "open" needs ${f}`);
  }

  for (const [i, q] of quotes.entries()) {
    if (q.draft) continue;
    for (const f of ['quote', 'name', 'permission']) if (!has(q[f])) err(`testimonial ${i + 1}`, `published testimonial needs ${f} (permission = how and when written consent was given)`);
  }
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
  if (/No live classes/i.test(read(root, 'index.html'))) b.push('index.html says "No live classes" (visible FAQ and FAQPage structured data).');
  if (!/live class|live course/i.test(read(root, 'terms.html'))) b.push('terms.html describes only self-paced content; it does not cover live classes or consultations.');
  if (!/live class|consultation/i.test(read(root, 'privacy.html'))) b.push('privacy.html does not describe the consultation request (level, goal, optional phone, preferred times sent by email), yet the form\'s consent refers to it.');
  return b;
}

export function isAllowlisted(root = ROOT) {
  const allow = read(root, '.github/pages-allowlist.txt').split('\n').map((l) => l.trim());
  return PAGE_FILES.some((f) => allow.includes(f));
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const D = loadData();
  const errors = checkData(D);
  const blockers = launchBlockers(D);
  console.log(`Live Classes readiness — page ${isAllowlisted() ? 'ALLOWLISTED (public)' : 'unpublished (not in the Pages allowlist)'}`);
  console.log(`\nData errors: ${errors.length ? '' : 'none'}`);
  for (const e of errors) console.log(`  ✖ ${e}`);
  console.log(`\nLaunch blockers: ${blockers.length ? '' : 'none'}`);
  for (const x of blockers) console.log(`  • ${x}`);
  process.exit(errors.length || (isAllowlisted() && blockers.length) ? 1 : 0);
}
