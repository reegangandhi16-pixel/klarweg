#!/usr/bin/env node
/* Live Classes — turn ONE filled, private teacher intake sheet into a
   publishable profile entry, or say exactly what is missing.

     node scripts/live-classes-intake.mjs <path/to/filled-intake.csv>

   The sheet is a copy of docs/templates/live-classes-teacher-intake.csv,
   kept OUTSIDE every Git folder (this repository is public). The script
   refuses a sheet inside this repository.

   A field counts only when its row has all three of:
     · "Value approved for publication"
     · "Evidence seen" (type and date; the documents stay private)
     · "Confirmed by owner" (a YYYY-MM-DD date)
   consent needs a value (how and when the teacher approved publication)
   and evidence; photo needs photoConsent the same way. Nothing is guessed:
   a missing field stays missing.

   Output: the problems, or the entry to paste into live-classes-data.js
   teachers[]. The entry is checked with the same validator the site uses
   (checkData). Evidence and notes never appear in the output.
   Exit code: 0 ready, 1 not ready, 2 usage error. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROOT, loadData, checkData } from './live-classes-readiness.mjs';

/* Fields a published teacher must have (checkData enforces the same). */
export const REQUIRED = ['id', 'name', 'headline', 'experience', 'proficiency', 'qualifications', 'levels', 'teachesIn', 'formats', 'consent'];
export const OPTIONAL = ['goethe', 'specialisms', 'examPrep', 'approach', 'availability', 'photo / photoAlt', 'photoConsent'];
const LIST_FIELDS = ['qualifications', 'goethe', 'levels', 'teachesIn', 'specialisms', 'formats'];
const NOT_PAGE_FIELDS = ['teaching agreement', 'data-sharing arrangement'];

/* Minimal RFC 4180 CSV parser (quoted fields, doubled quotes, CRLF). */
export function parseCsv(text) {
  const rows = []; let row = []; let cell = ''; let q = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (q) {
      if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') q = false;
      else cell += ch;
    } else if (ch === '"') q = true;
    else if (ch === ',') { row.push(cell); cell = ''; }
    else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); rows.push(row); row = []; cell = '';
    } else cell += ch;
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  return rows.filter((r) => r.some((c) => c.trim() !== ''));
}

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const splitList = (v) => v.split(/\s*[;|]\s*/).map((x) => x.trim()).filter(Boolean);

/* sheet text → { teacher, missing[], errors[], private[] } */
export function intakeToTeacher(text, D = loadData()) {
  const rows = parseCsv(text);
  const head = rows.shift() || [];
  if (!/^Data field$/i.test((head[0] || '').trim()) || head.length < 5) {
    return { teacher: null, missing: [], errors: ['not an intake sheet: the first row must be the headings of docs/templates/live-classes-teacher-intake.csv'], private: [] };
  }
  const byField = {};
  for (const r of rows) byField[(r[0] || '').trim()] = { value: (r[1] || '').trim(), evidence: (r[3] || '').trim(), confirmed: (r[4] || '').trim() };

  const missing = [], errors = [], privateOk = [];
  const verified = (f) => {
    const r = byField[f];
    if (!r || !r.value) return false;
    if (!r.evidence) { missing.push(`${f}: no evidence recorded`); return false; }
    if (f !== 'consent' && f !== 'photoConsent' && !DATE_RE.test(r.confirmed)) { missing.push(`${f}: owner confirmation date (YYYY-MM-DD) missing`); return false; }
    return true;
  };

  const t = { photo: null, photoAlt: '', goethe: [], specialisms: [], examPrep: null, approach: null, availability: null, photoConsent: null, unconfirmed: [] };
  for (const f of REQUIRED) {
    if (!byField[f] || !byField[f].value) { missing.push(`${f}: not provided`); continue; }
    if (!verified(f)) continue;
    t[f] = LIST_FIELDS.includes(f) ? splitList(byField[f].value) : byField[f].value;
  }
  for (const f of OPTIONAL) {
    if (!byField[f] || !byField[f].value) continue;
    if (!verified(f)) continue;
    if (f === 'photo / photoAlt') {
      const [photo, ...alt] = byField[f].value.split('|');
      t.photo = photo.trim(); t.photoAlt = alt.join('|').trim();
    } else t[f] = LIST_FIELDS.includes(f) ? splitList(byField[f].value) : byField[f].value;
  }
  if (t.photo && !t.photoConsent) missing.push('photoConsent: required because a photo is given (or remove the photo)');
  for (const f of NOT_PAGE_FIELDS) {
    const r = byField[f];
    if (r && r.value && DATE_RE.test(r.confirmed)) privateOk.push(f); else missing.push(`${f}: not recorded (agreed before publishing; never shown on the page)`);
  }
  if (t.id && !/^[a-z0-9-]+$/.test(t.id)) errors.push(`id "${t.id}" must be lower-case letters, digits and hyphens`);
  if (t.id && /^candidate-\d{2}$/.test(t.id)) errors.push('id: use the teacher\'s own id (e.g. their name), not the opaque candidate id');
  if (t.id && D.teachers.some((x) => x.id === t.id && !x.draft)) errors.push(`id "${t.id}" is already a published teacher`);

  const complete = missing.length === 0 && errors.length === 0;
  let teacher = null;
  if (complete) {
    teacher = {
      id: t.id, name: t.name, photo: t.photo, photoAlt: t.photoAlt, headline: t.headline, experience: t.experience,
      proficiency: t.proficiency, qualifications: t.qualifications, goethe: t.goethe, levels: t.levels, teachesIn: t.teachesIn,
      specialisms: t.specialisms, examPrep: t.examPrep, approach: t.approach, formats: t.formats, availability: t.availability,
      consent: t.consent, photoConsent: t.photoConsent, unconfirmed: []
    };
    // the site's own validator, on the data as it would be published
    const trial = { ...D, teachers: D.teachers.filter((x) => x.id !== t.id).concat(teacher) };
    for (const e of checkData(trial)) if (e.startsWith(`teacher ${t.id}:`) || e.includes(`"${t.id}"`)) errors.push(e.replace(/^teacher [^:]+: /, ''));
    if (errors.length) teacher = null;
  }
  return { teacher, missing, errors, private: privateOk };
}

export function entrySource(t) {
  // JSON string syntax is valid JavaScript, so values with quotes or apostrophes stay exact
  const lines = Object.entries(t).map(([k, v]) => `        ${k}: ${JSON.stringify(v)},`);
  lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, '');
  return `      {\n        /* Published from the private intake sheet; every field verified\n           and owner-confirmed; consent recorded. */\n${lines.join('\n')}\n      }`;
}

export function insideRepo(file) {
  const rel = path.relative(ROOT, path.resolve(file));
  return !rel.startsWith('..') && !path.isAbsolute(rel);
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const file = process.argv[2];
  if (!file) { console.error('usage: node scripts/live-classes-intake.mjs <filled-intake.csv>  (kept outside the repository)'); process.exit(2); }
  if (insideRepo(file)) { console.error('✖ refused: the filled intake sheet is inside this public repository. Move it to a private folder outside every Git folder.'); process.exit(2); }
  const r = intakeToTeacher(fs.readFileSync(file, 'utf8'));
  if (!r.teacher) {
    console.log('NOT READY to publish. Nothing was changed.');
    for (const m of r.missing) console.log('  • missing  ' + m);
    for (const e of r.errors) console.log('  ✖ invalid  ' + e);
    process.exit(1);
  }
  console.log('READY. Every field is verified, owner-confirmed and consented. Paste into live-classes-data.js teachers[]:\n');
  console.log(entrySource(r.teacher));
  console.log('\nThen: update docs/live-classes-candidates.json (status "published", the new id), the LIVE D8 static test, Privacy §4A / Terms §4A (owner-approved legal wording), and run npm run live:readiness && npm run test:live.');
}
