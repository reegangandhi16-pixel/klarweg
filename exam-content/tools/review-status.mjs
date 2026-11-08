#!/usr/bin/env node
/* EX-03 REVIEW STATUS: reads the review records reviewers returned (filled copies of the tools/review-sheet.mjs JSON
   template, kept OUTSIDE this repository) and reports per form and item what the locked panel rules say. It approves
   nothing by itself, changes no content and writes no provenance: it only counts what real reviewers recorded.

   Rules applied (register §C.1, SCHEMA §8.3 and §10):
   - O1: three distinct people fill slots A, B and C; one record per slot and form. A person in two slots, or two records
     for one slot, makes the form's records unusable until the organiser resolves it.
   - O6 (no carry-forward): a record counts only if its content fingerprint matches the current form. Records of an older
     revision are reported as stale and ignored.
   - O2/O7: an item or task is approved only when A, B and C all record "approve". Any "revise" or "reject" means the
     item needs revision; there is no adjudicator, vote or override.
   - O4: C records the item-level accessibility verdict; O3: C signs off originality per form.
   - O5 + SCHEMA §8.3 + O10: A and B rate inference_demand and distractor_strength. Ratings agree when they differ by less
     than 2; the recorded value is the mean of the agreeing pair. If A and B disagree, C's rating decides only when it
     agrees with exactly one of them; otherwise (neither or both) A and B must re-rate.
   Form status: not started · in review · needs revision · approved (everything above satisfied, nothing pending).
   Module status (modules.lesen etc.): the same rules over that module's items and tasks only, plus the form's
   originality sign-off (O3) and three usable slots — what a single-module release (EXAM_MODULE_ONLY) would rely on.
   A module status is reported, never an approval of the module for release (that remains the owner's decision).

   Usage: node exam-content/tools/review-status.mjs <returned-records-dir> [--module lesen] [--out <report-dir outside the repo>]
          node exam-content/tools/review-status.mjs --check <record.json> … [--module lesen]   (plain-language check
          of filled records before they are returned: what must be fixed, what is still empty) */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRACTICE_FORMS } from './practice-forms.mjs';
import { reviewRecord, RECORD_VERSION } from './review-sheet.mjs';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const SLOTS = ['A', 'B', 'C'];
const MODULES = ['lesen', 'hoeren', 'schreiben', 'sprechen'];
const VERDICTS = new Set(['approve', 'revise', 'reject']);
const RATINGS = ['inference_demand', 'distractor_strength'];
const isInt = (v, lo, hi) => Number.isInteger(v) && v >= lo && v <= hi;

/* SCHEMA §8.3 + EX-03/O10 for one rating: { value } | { pending: 'third rating needed' | 're-rate' | 'missing' } */
export function resolveRating(a, b, c) {
  if (a == null || b == null) return { pending: 'missing' };
  if (Math.abs(a - b) < 2) return { value: (a + b) / 2 };
  if (c == null) return { pending: 'third rating needed' };
  const pairs = [[a, c], [b, c]].filter(([x, y]) => Math.abs(x - y) < 2);
  return pairs.length === 1 ? { value: (pairs[0][0] + pairs[0][1]) / 2 } : { pending: 're-rate' };
}

/* Validates one returned record against the current template of its form; returns { errors, warnings, complete }. */
export function checkRecord(rec, template) {
  const errors = [], warnings = [];
  const slot = rec.reviewer && rec.reviewer.slot;
  if (!SLOTS.includes(slot)) errors.push(`reviewer.slot must be A, B or C (got ${JSON.stringify(slot)})`);
  if (!rec.reviewer || typeof rec.reviewer.reviewer_id !== 'string' || !rec.reviewer.reviewer_id.trim()) errors.push('reviewer.reviewer_id is missing');
  if (!rec.reviewer || !/^\d{4}-\d{2}-\d{2}$/.test(rec.reviewer.date || '')) errors.push('reviewer.date must be YYYY-MM-DD');
  if (!rec.reviewer || typeof rec.reviewer.native_german !== 'boolean') errors.push('reviewer.native_german must be true or false');
  else if (slot === 'C' && rec.reviewer.native_german !== true) warnings.push('slot C is the native linguist but native_german is false');
  let complete = errors.length === 0;
  const want = (list, got, kind) => {
    const ids = list.map((x) => x.item_id), have = (got || []).map((x) => x.item_id);
    if (have.length !== ids.length || ids.some((id) => !have.includes(id))) { errors.push(`${kind}: the item list differs from the template`); return false; }
    return true;
  };
  if (want(template.items, rec.items, 'items')) for (const it of rec.items) {
    const t = template.items.find((x) => x.item_id === it.item_id);
    if (it.item_sha256 !== t.item_sha256) errors.push(`${it.item_id}: item fingerprint does not match`);
    if (it.verdict && !VERDICTS.has(it.verdict)) errors.push(`${it.item_id}: verdict "${it.verdict}" is not approve/revise/reject`);
    if (!it.verdict) complete = false;
    if (it.ambiguity_risk != null && !isInt(it.ambiguity_risk, 0, 2)) errors.push(`${it.item_id}: ambiguity_risk must be 0, 1 or 2`);
    for (const r of RATINGS) if (it[r] != null && !isInt(it[r], 1, 5)) errors.push(`${it.item_id}: ${r} must be an integer 1–5`);
    if (slot !== 'C' && RATINGS.some((r) => it[r] == null)) complete = false;   // O5: A and B rate every item
    if (slot === 'C') { if (it.accessibility && !VERDICTS.has(it.accessibility)) errors.push(`${it.item_id}: accessibility "${it.accessibility}" is not approve/revise/reject`); if (!it.accessibility) complete = false; }
    if ((it.verdict === 'revise' || it.verdict === 'reject' || it.ambiguity_risk >= 1) && !String(it.notes || '').trim()) warnings.push(`${it.item_id}: no notes for ${it.verdict === 'approve' ? `ambiguity_risk ${it.ambiguity_risk}` : it.verdict}`);
  }
  if (want(template.tasks, rec.tasks, 'tasks')) for (const tk of rec.tasks) {
    const t = template.tasks.find((x) => x.item_id === tk.item_id);
    if (tk.item_sha256 !== t.item_sha256) errors.push(`${tk.item_id}: task fingerprint does not match`);
    if (tk.verdict && !VERDICTS.has(tk.verdict)) errors.push(`${tk.item_id}: verdict "${tk.verdict}" is not approve/revise/reject`);
    if (!tk.verdict) complete = false;
    if (slot === 'C') { if (tk.accessibility && !VERDICTS.has(tk.accessibility)) errors.push(`${tk.item_id}: accessibility "${tk.accessibility}" is not approve/revise/reject`); if (!tk.accessibility) complete = false; }
  }
  const orig = rec.originality_signoff && rec.originality_signoff.verdict;
  if (slot === 'C') { if (orig && !VERDICTS.has(orig)) errors.push(`originality verdict "${orig}" is not approve/revise/reject`); if (!orig) complete = false; }
  else if (orig) warnings.push('originality sign-off is slot C only; ignored');
  return { errors, warnings, complete: complete && errors.length === 0 };
}

/* records: [{ file, record }] → report per form. forms: the practice library (overridable in tests). */
export function reviewStatus(records, forms = PRACTICE_FORMS) {
  const report = { generated_at: new Date().toISOString(), record_version: RECORD_VERSION, unassigned: [], forms: [] };
  for (const { file, record, error } of records) if (error || !record || !forms.some((f) => f.form_id === record.form_id)) report.unassigned.push({ file, reason: error || `unknown form_id ${record && JSON.stringify(record.form_id)}` });
  for (const form of forms) {
    const template = reviewRecord(form);
    const moduleOf = Object.fromEntries(JSON.parse(form.files['items.json']).map((it) => [it.id, it.module]));
    const mine = records.filter((r) => r.record && r.record.form_id === form.form_id);
    const fr = { form: form.name, form_id: form.form_id, content_sha256: template.content_sha256, status: 'not started', records: [], stale: [], problems: [], items: [], tasks: [], originality: null, summary: {},
      modules: Object.fromEntries(MODULES.map((m) => [m, 'not started'])) };
    const current = [];
    for (const { file, record } of mine) {
      if (record.record_version !== RECORD_VERSION) { fr.stale.push({ file, reason: `template version ${JSON.stringify(record.record_version)} has no content fingerprint` }); continue; }
      if (record.content_sha256 !== template.content_sha256) { fr.stale.push({ file, reason: 'reviews an older revision of this form (EX-03/O6: no carry-forward)' }); continue; }
      const chk = checkRecord(record, template);
      fr.records.push({ file, slot: record.reviewer.slot, reviewer_id: record.reviewer.reviewer_id, date: record.reviewer.date, complete: chk.complete, errors: chk.errors, warnings: chk.warnings });
      if (!chk.errors.length) current.push(record);
    }
    // EX-03/O1
    const bySlot = {};
    for (const r of current) (bySlot[r.reviewer.slot] = bySlot[r.reviewer.slot] || []).push(r);
    for (const s of SLOTS) if ((bySlot[s] || []).length > 1) fr.problems.push(`EX-03/O1: ${bySlot[s].length} records for slot ${s}; the organiser must keep exactly one`);
    const people = current.map((r) => r.reviewer.reviewer_id.trim().toLowerCase());
    const dup = [...new Set(people.filter((p, i) => people.indexOf(p) !== i))];
    if (dup.length) fr.problems.push(`EX-03/O1: the same person (${dup.join(', ')}) fills more than one slot`);
    if (!fr.records.length) { report.forms.push(fr); continue; }
    const usable = fr.problems.length ? {} : Object.fromEntries(SLOTS.map((s) => [s, (bySlot[s] || [])[0] || null]));
    const unit = (kind, id) => {
      const got = Object.fromEntries(SLOTS.map((s) => [s, usable[s] ? usable[s][kind].find((x) => x.item_id === id) : null]));
      const verdicts = SLOTS.map((s) => got[s] && got[s].verdict).filter(Boolean);
      const out = { item_id: id, verdicts: Object.fromEntries(SLOTS.map((s) => [s, (got[s] && got[s].verdict) || null])), accessibility: (got.C && got.C.accessibility) || null };
      if (verdicts.some((v) => v !== 'approve') || (out.accessibility && out.accessibility !== 'approve')) out.status = 'needs revision';
      else if (verdicts.length === 3 && out.accessibility === 'approve') out.status = 'approved';
      else out.status = 'in review';
      if (kind === 'items') {
        out.ratings = Object.fromEntries(RATINGS.map((r) => [r, resolveRating(got.A && got.A[r], got.B && got.B[r], got.C && got.C[r])]));
        out.ambiguity_risk = Math.max(-1, ...SLOTS.map((s) => (got[s] && got[s].ambiguity_risk) ?? -1));
        if (out.ambiguity_risk < 0) out.ambiguity_risk = null;
      }
      return out;
    };
    fr.items = template.items.map((t) => unit('items', t.item_id));
    fr.tasks = template.tasks.map((t) => unit('tasks', t.item_id));
    fr.originality = (usable.C && usable.C.originality_signoff && usable.C.originality_signoff.verdict) || null;
    const all = [...fr.items, ...fr.tasks];
    const ratingsPending = fr.items.filter((i) => RATINGS.some((r) => i.ratings[r].pending)).length;
    fr.summary = { approved: all.filter((u) => u.status === 'approved').length, needs_revision: all.filter((u) => u.status === 'needs revision').length, in_review: all.filter((u) => u.status === 'in review').length, total: all.length, ratings_pending: ratingsPending };
    const statusOf = (units) => {
      const pending = units.filter((i) => i.ratings && RATINGS.some((r) => i.ratings[r].pending)).length;
      if (fr.problems.length) return 'in review';
      if (units.some((u) => u.status === 'needs revision') || (fr.originality && fr.originality !== 'approve')) return 'needs revision';
      if (units.length && units.every((u) => u.status === 'approved') && fr.originality === 'approve' && !pending && SLOTS.every((s) => usable[s])) return 'approved';
      return 'in review';
    };
    fr.status = statusOf(all);
    for (const m of MODULES) fr.modules[m] = statusOf(all.filter((u) => moduleOf[u.item_id] === m));
    report.forms.push(fr);
  }
  return report;
}

export function readRecords(dir) {
  return fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort().map((f) => {
    try { return { file: f, record: JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')) }; } catch (e) { return { file: f, error: `not valid JSON: ${e.message}` }; }
  });
}

/* ---------- self-service: plain-language check of one filled record, and a plain summary ---------- */
const MODULE_DE = { lesen: 'Lesen', hoeren: 'Hören', schreiben: 'Schreiben', sprechen: 'Sprechen' };
/* "Lesen Teil 1, Nr. 1" for an item id of a practice form */
export function itemLabel(form, itemId) {
  const it = JSON.parse(form.files['items.json']).find((x) => x.id === itemId);
  if (!it) return itemId;
  const no = (/^(\d+)\./.exec(it.stem || '') || [])[1];
  return `${MODULE_DE[it.module] || it.module} Teil ${it.part}${no ? `, Nr. ${no}` : ''}`;
}

/* One returned record, judged before it is handed in: { form, ok, errors[], missing[], warnings[] } in plain words.
   module limits "missing" to that module's entries (a Lesen-only review leaves the rest blank on purpose). */
export function checkFile(record, { module = null, forms = PRACTICE_FORMS } = {}) {
  const form = forms.find((f) => f.form_id === (record && record.form_id));
  if (!form) return { form: null, ok: false, errors: [`unknown form_id ${JSON.stringify(record && record.form_id)}: use the template of this packet unchanged`], missing: [], warnings: [] };
  const template = reviewRecord(form);
  const errors = [], missing = [], warnings = [];
  if (record.record_version !== RECORD_VERSION) errors.push(`template version ${JSON.stringify(record.record_version)}: use the ${RECORD_VERSION} template of this packet`);
  if (record.content_sha256 !== template.content_sha256) errors.push('this record belongs to a different version of the form (content_sha256 changed or outdated): it would not count (EX-03/O6). Use the template of the current packet');
  const chk = checkRecord(record, template);
  errors.push(...chk.errors.map((e) => e.replace(/^(\S+?): /, (m, id) => (id.startsWith('itm:') ? `${itemLabel(form, id)} (${id}): ` : m))));
  warnings.push(...chk.warnings);
  const slot = record.reviewer && record.reviewer.slot;
  const moduleOf = Object.fromEntries(JSON.parse(form.files['items.json']).map((it) => [it.id, it.module]));
  const inScope = (id) => !module || moduleOf[id] === module;
  for (const it of record.items || []) {
    if (!inScope(it.item_id)) continue;
    const need = [];
    if (!it.verdict) need.push('verdict');
    if (slot !== 'C') for (const r of ['ambiguity_risk', ...RATINGS]) if (it[r] == null) need.push(r);
    if (slot === 'C' && !it.accessibility) need.push('accessibility');
    if (need.length) missing.push(`${itemLabel(form, it.item_id)}: ${need.join(', ')}`);
  }
  for (const t of record.tasks || []) if (inScope(t.item_id) && (!t.verdict || (slot === 'C' && !t.accessibility))) missing.push(`${itemLabel(form, t.item_id)} (task): ${!t.verdict ? 'verdict' : 'accessibility'}`);
  if (slot === 'C' && !(record.originality_signoff && record.originality_signoff.verdict)) missing.push('originality sign-off (slot C, whole form)');
  return { form: form.name, slot: slot || null, ok: errors.length === 0 && missing.length === 0, errors, missing, warnings };
}

/* What is approved and what is outstanding, per form and module, in plain words (computed, never an approval). */
export function plainSummary(report, { modules = MODULES, forms = PRACTICE_FORMS } = {}) {
  const lines = ['EX-03 review: what is approved and what is outstanding (computed from returned records; it approves nothing)', ''];
  for (const fr of report.forms) {
    const form = forms.find((f) => f.form_id === fr.form_id);
    const moduleOf = Object.fromEntries(JSON.parse(form.files['items.json']).map((it) => [it.id, it.module]));
    for (const m of modules) {
      const st = fr.modules[m];
      const have = fr.records.filter((r) => !r.errors.length).map((r) => r.slot);
      const waiting = SLOTS.filter((x) => !have.includes(x));
      let why = '';
      if (fr.problems.length) why = `fix the record folder first: ${fr.problems.join('; ')}`;
      else if (st === 'needs revision') {
        const units = [...fr.items, ...fr.tasks].filter((u) => moduleOf[u.item_id] === m && u.status === 'needs revision');
        why = `revise and review again from scratch: ${units.map((u) => `${itemLabel(form, u.item_id)} (${Object.entries(u.verdicts).filter(([, v]) => v && v !== 'approve').map(([k, v]) => `${k}: ${v}`).join(', ') || 'accessibility'})`).join('; ')}`;
        if (fr.originality && fr.originality !== 'approve') why += `${why ? '; ' : ''}originality: ${fr.originality}`;
      } else if (st !== 'approved') {
        const parts = [];
        if (waiting.length) parts.push(`waiting for slot ${waiting.join(', ')}`);
        const open = [...fr.items, ...fr.tasks].filter((u) => moduleOf[u.item_id] === m && u.status === 'in review').length;
        if (open && !waiting.length) parts.push(`${open} item(s) without three verdicts`);
        const pending = fr.items.filter((u) => moduleOf[u.item_id] === m && u.ratings && RATINGS.some((r) => u.ratings[r].pending)).length;
        if (pending && !waiting.length) parts.push(`${pending} rating(s) unresolved (third rating or re-rate)`);
        if (!fr.originality) parts.push('originality sign-off (C) missing');
        why = parts.join('; ');
      }
      lines.push(`${fr.form} ${MODULE_DE[m]}: ${st === 'approved' ? 'APPROVED (EX-03 rules met)' : st.toUpperCase()}${why ? ` — ${why}` : ''}`);
    }
    if (fr.stale.length) lines.push(`${fr.form}: ${fr.stale.length} stale record(s) ignored and blocking a release until removed: ${fr.stale.map((x) => x.file).join(', ')}`);
  }
  if (report.unassigned.length) lines.push('', 'Files that are not valid records (blocking a release until removed):', ...report.unassigned.map((u) => `- ${u.file}: ${u.reason}`));
  return lines.join('\n') + '\n';
}

/* Reviewer ids and messages are free text: keep a pipe or line break from breaking the table. */
const cell = (v) => String(v).replace(/\\/g, '\\\\').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');

export function summaryMarkdown(report) {
  const lines = ['# EX-03 review status (computed from returned records; not an approval)', '', `Generated ${report.generated_at}. Template ${report.record_version}.`, '',
    '| Form | Status | Lesen · Hören · Schreiben · Sprechen | Records (slot: reviewer) | Approved / needs revision / in review | Ratings pending | Originality (C) | Stale | Problems |', '|---|---|---|---|---|---|---|---|---|'];
  for (const f of report.forms) lines.push(`| ${f.form} | ${f.status} | ${MODULES.map((m) => f.modules[m]).join(' · ')} | ${f.records.map((r) => `${r.slot}: ${cell(r.reviewer_id)}${r.complete ? '' : ' (incomplete)'}${r.errors.length ? ` (${r.errors.length} errors)` : ''}`).join('; ') || '–'} | ${f.summary.total ? `${f.summary.approved} / ${f.summary.needs_revision} / ${f.summary.in_review}` : '–'} | ${f.summary.ratings_pending ?? '–'} | ${f.originality || '–'} | ${f.stale.length} | ${cell(f.problems.join('; ')) || '–'} |`);
  if (report.unassigned.length) lines.push('', 'Not assigned to a form:', ...report.unassigned.map((u) => `- ${u.file}: ${u.reason}`));
  return lines.join('\n') + '\n';
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const a = process.argv.slice(2), arg = (k) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : null; };
  const module = arg('--module');
  if (module && !MODULES.includes(module)) { console.error(`unknown module ${module} (${MODULES.join('|')})`); process.exit(2); }
  // --check <file.json> …: a reviewer (or the organiser) checks filled records before they count
  if (a[0] === '--check') {
    const files = a.slice(1).filter((x, i, all) => !x.startsWith('--') && all[i - 1] !== '--module');
    if (!files.length) { console.error('usage: review-status.mjs --check <record.json> … [--module lesen]'); process.exit(2); }
    let bad = 0;
    for (const f of files) {
      let rec; try { rec = JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { console.log(`${f}: NOT VALID JSON (${e.message})`); bad++; continue; }
      const r = checkFile(rec, { module });
      if (!r.ok) bad++;
      console.log(`${f}: ${r.ok ? 'READY TO RETURN' : 'NOT READY'}${r.form ? ` (${r.form}${r.slot ? `, slot ${r.slot}` : ''}${module ? `, ${module}` : ''})` : ''}`);
      for (const e of r.errors) console.log(`  must fix: ${e}`);
      for (const m of r.missing.slice(0, 40)) console.log(`  still empty: ${m}`);
      if (r.missing.length > 40) console.log(`  … and ${r.missing.length - 40} more empty entries`);
      for (const w of r.warnings) console.log(`  note: ${w}`);
    }
    process.exit(bad ? 1 : 0);
  }
  const dir = a[0];
  if (!dir || dir.startsWith('--')) { console.error('usage: review-status.mjs <returned-records-dir> [--module lesen] [--out <report-dir outside the repo>]\n       review-status.mjs --check <record.json> … [--module lesen]'); process.exit(2); }
  const report = reviewStatus(readRecords(dir));
  const plain = plainSummary(report, { modules: module ? [module] : MODULES });
  const out = arg('--out');
  if (out) {
    const d = path.resolve(out);
    if (d === REPO || d.startsWith(REPO + path.sep)) { console.error('refusing to write the report inside the repository (it names reviewers)'); process.exit(1); }
    fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(path.join(d, 'ex03-status.json'), JSON.stringify(report, null, 2) + '\n');
    fs.writeFileSync(path.join(d, 'ex03-status.md'), summaryMarkdown(report));
    fs.writeFileSync(path.join(d, 'ex03-summary.txt'), plain);
  }
  process.stdout.write(summaryMarkdown(report) + '\n' + plain);
}
