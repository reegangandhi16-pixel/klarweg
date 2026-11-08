#!/usr/bin/env node
/* RELEASE CANDIDATE for a single-module learner release (EXAM_MODULE_ONLY + EXAM_RELEASE_FORMS).
   Builds a learner release (build-release --purpose learner) from EXACTLY the named practice forms and writes, next to
   it, the Worker settings that match it and a candidate record. It refuses (fails closed):
   - an empty, malformed or duplicated form list, an unknown form, or a form that is not purpose "practice" (S0);
   - an unknown module;
   - any form whose module is not "approved" in the EX-03 review records given with --approved <dir>
     (tools/review-status.mjs rules, register §C.1), and any form while the folder holds an unreadable, unassigned,
     stale or erroneous record or an O1 conflict for it (fail closed; the folder must be clean). Without --approved it builds only with --internal-candidate, and the
     record then says NOT APPROVED in so many words. Nothing here approves anything.
   Output goes outside the repository only (the release contains keys).

   Usage: node exam-content/tools/release-candidate.mjs --forms p3,p8,p13 --module lesen --release r101 --out <dir>
            (--approved <returned EX-03 records dir> | --internal-candidate) */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { PRACTICE_FORMS } from './practice-forms.mjs';
import { buildRelease, writeRelease } from './build-release.mjs';
import { formFingerprint } from './review-sheet.mjs';
import { reviewStatus, readRecords } from './review-status.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REPO = path.resolve(ROOT, '..');
const MODULES = ['lesen', 'hoeren', 'schreiben', 'sprechen'];

export function selectForms(list) {
  const names = String(list || '').split(',').map((x) => x.trim().toLowerCase()).filter(Boolean);
  if (!names.length) throw new Error('no forms named (--forms p3,p8,…)');
  if (new Set(names).size !== names.length) throw new Error(`duplicate form in ${list}`);
  return names.map((n) => {
    const f = PRACTICE_FORMS.find((x) => x.name.toLowerCase() === n);
    if (!f) throw new Error(`unknown practice form "${n}" (system-test fixtures such as s0 are never release forms)`);
    const form = JSON.parse(f.files['form.json']);
    if (form.kind !== 'synthetic' || form.purpose !== 'practice') throw new Error(`${f.name} is not a practice form`);
    return { name: f.name, id: form.id, dir: path.join(ROOT, f.rel.replace(/^exam-content\//, '')), sha: formFingerprint(f), entry: f };
  });
}

/* records: [{file, record}] from readRecords, or null. → [{ name, status, problems }] per form for the module.
   Fail closed on the record folder itself: an unreadable file, a record for an unknown form, a stale record (older
   revision), a record with errors, or an EX-03/O1 conflict for a selected form makes that form (or, for unreadable or
   unassigned files, every form) "records invalid", whatever the computed status says. The organiser must clean the
   folder; nothing is silently ignored. */
export function approvalOf(forms, module, records) {
  if (!records) return forms.map((f) => ({ name: f.name, id: f.id, status: 'no review records', problems: [] }));
  const report = reviewStatus(records, PRACTICE_FORMS);
  const folder = report.unassigned.map((u) => `${u.file}: ${u.reason}`);
  return forms.map((f) => {
    const fr = report.forms.find((x) => x.form_id === f.id);
    const problems = [...folder, ...fr.stale.map((x) => `${x.file}: stale (${x.reason})`),
      ...fr.records.filter((r) => r.errors.length).map((r) => `${r.file}: ${r.errors.join('; ')}`), ...fr.problems];
    return { name: f.name, id: f.id, status: problems.length ? 'records invalid' : fr.modules[module], problems };
  });
}

export function releaseCandidate({ forms: list, module, release, approvedDir = null, internalCandidate = false, builtAt, gitSha = null, releasedForms = null }) {
  if (!MODULES.includes(module)) throw new Error(`unknown module ${module} (${MODULES.join('|')})`);
  const forms = selectForms(list);
  if (approvedDir && internalCandidate) throw new Error('--approved and --internal-candidate exclude each other');
  const approval = approvalOf(forms, module, approvedDir ? readRecords(approvedDir) : null);
  const unapproved = approval.filter((a) => a.status !== 'approved');
  if (unapproved.length && !internalCandidate) {
    throw new Error(`refusing a learner release: ${module} not approved for ${unapproved.map((a) => `${a.name} (${a.status}${a.problems.length ? `: ${a.problems.join(' | ')}` : ''})`).join(', ')}`);
  }
  // released content is immutable: a form already in released-forms.json must still have its released fingerprint
  const locked = releasedForms || JSON.parse(fs.readFileSync(path.join(ROOT, 'released-forms.json'), 'utf8')).forms;
  for (const f of forms) { const l = locked.find((x) => x.id === f.id); if (l && l.content_sha256 !== f.sha) throw new Error(`${f.name} (${f.id}) was released with different content; create a new revision (tools/revise-form.mjs) instead of editing it`); }
  const build = buildRelease({ release, purpose: 'learner', formDirs: forms.map((f) => f.dir), builtAt });
  const built = build.manifest.forms.map((f) => f.id);
  if (JSON.stringify(built) !== JSON.stringify(forms.map((f) => f.id))) throw new Error(`release contains ${built.join(',')}, expected exactly ${forms.map((f) => f.id).join(',')}`);
  const approved = unapproved.length === 0;
  const settings = { EXAM_MODULE_ONLY: module, EXAM_RELEASE_FORMS: forms.map((f) => f.id).join(',') };
  const record = {
    kind: 'klarweg-exam-release-candidate', release, module, built_at: build.manifest.built_at, git_sha: gitSha,
    status: approved ? 'EX-03 module approval recorded for every form (see approval); other release gates are not checked here'
      : 'INTERNAL CANDIDATE — NOT APPROVED. Not for learners. EX-03 has not approved these forms.',
    forms: forms.map((f) => ({ name: f.name, id: f.id, content_sha256: f.sha })),
    approval, settings,
    // after a real (approved) learner release, add these to exam-content/released-forms.json
    released_forms_entries: approved ? forms.map((f) => ({ id: f.id, content_sha256: f.sha, release })) : []
  };
  return { build, record, settings, approved };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const a = process.argv.slice(2), opt = (k) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : null; };
  try {
    const out = opt('--out');
    if (!out) throw new Error('--out <dir outside the repository> is required');
    const dir = path.resolve(out);
    if (dir === REPO || dir.startsWith(REPO + path.sep)) throw new Error('refusing to write a release inside the repository (it contains keys)');
    let gitSha = null; try { gitSha = execFileSync('git', ['-C', REPO, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(); } catch {}
    const r = releaseCandidate({ forms: opt('--forms'), module: opt('--module') || 'lesen', release: opt('--release') || 'r100',
      approvedDir: opt('--approved'), internalCandidate: a.includes('--internal-candidate'), gitSha });
    writeRelease(r.build, dir);
    fs.writeFileSync(path.join(dir, 'candidate.json'), JSON.stringify(r.record, null, 2) + '\n');
    fs.writeFileSync(path.join(dir, 'worker-settings.env'), `# ${r.record.status}\n` + Object.entries(r.settings).map(([k, v]) => `${k}=${v}`).join('\n') + '\n');
    console.log(JSON.stringify({ out: dir, approved: r.approved, forms: r.record.forms.map((f) => f.id), settings: r.settings }));
  } catch (e) { console.error(`release-candidate: ${e.message}`); process.exit(1); }
}
