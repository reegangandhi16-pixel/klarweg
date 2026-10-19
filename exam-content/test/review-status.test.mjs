/* EX-03 review status (tools/review-status.mjs): the locked panel rules (register §C.1 O1–O10, SCHEMA §8.3) applied to
   returned review records. Records here are synthetic fills of the real P3 template (verdicts and ratings only; the
   template carries no keys). Nothing is approved by this tool; it only counts recorded verdicts. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { PRACTICE_FORMS } from '../tools/practice-forms.mjs';
import { reviewRecord, formFingerprint, itemFingerprints, RECORD_VERSION } from '../tools/review-sheet.mjs';
import { reviewStatus, resolveRating, readRecords, summaryMarkdown } from '../tools/review-status.mjs';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const P3 = PRACTICE_FORMS.find((f) => f.name === 'P3');
const ONLY = [P3];

function filled(slot, id, { verdict = 'approve', rating = 3, edit } = {}) {
  const r = reviewRecord(P3);
  r.reviewer = { slot, reviewer_id: id, role: slot === 'C' ? 'originality' : 'content', native_german: true, date: '2026-10-19' };
  for (const it of r.items) { it.verdict = verdict; if (slot !== 'C') { it.inference_demand = rating; it.distractor_strength = rating; it.ambiguity_risk = 0; } else it.accessibility = 'approve'; }
  for (const t of r.tasks) { t.verdict = verdict; if (slot === 'C') t.accessibility = 'approve'; }
  if (slot === 'C') r.originality_signoff.verdict = 'approve';
  if (edit) edit(r);
  return { file: `${slot}.json`, record: r };
}
const status = (...recs) => reviewStatus(recs, ONLY).forms[0];

test('REVIEW STATUS template: fingerprints for the form and every item/task; slot C accessibility fields (EX-03/O4, O6)', () => {
  const r = reviewRecord(P3), fp = itemFingerprints(P3);
  assert.equal(r.record_version, RECORD_VERSION);
  assert.match(r.content_sha256, /^[0-9a-f]{64}$/);
  assert.equal(r.content_sha256, formFingerprint(P3), 'deterministic');
  for (const x of [...r.items, ...r.tasks]) { assert.equal(x.item_sha256, fp[x.item_id]); assert.equal(x.accessibility, ''); }
  // a one-character change in one explanation changes the form fingerprint and exactly that item's fingerprint
  const items = JSON.parse(P3.files['items.json']);
  const target = items.find((it) => it.feedback && !it.is_example);
  target.feedback.explanation_de += ' ';
  const changed = { ...P3, files: { ...P3.files, 'items.json': JSON.stringify(items) } };
  assert.notEqual(formFingerprint(changed), r.content_sha256);
  const fp2 = itemFingerprints(changed);
  assert.deepEqual(Object.keys(fp).filter((id) => fp[id] !== fp2[id]), [target.id]);
});

test('REVIEW STATUS: no records → not started; one complete slot → in review; nothing is approved early', () => {
  assert.equal(status().status, 'not started');
  const f = status(filled('A', 'rev-a'));
  assert.equal(f.status, 'in review');
  assert.equal(f.summary.approved, 0);
  assert.ok(f.items.every((i) => i.status === 'in review'));
});

test('REVIEW STATUS: approved only when A, B and C approve every item and task, C signs accessibility and originality, ratings resolved', () => {
  const f = status(filled('A', 'rev-a'), filled('B', 'rev-b'), filled('C', 'rev-c'));
  assert.equal(f.status, 'approved');
  assert.deepEqual(f.summary, { approved: 66, needs_revision: 0, in_review: 0, total: 66, ratings_pending: 0 });
  assert.equal(f.items[0].ratings.inference_demand.value, 3);
  // C withholds originality → not approved
  assert.equal(status(filled('A', 'rev-a'), filled('B', 'rev-b'), filled('C', 'rev-c', { edit: (r) => { r.originality_signoff.verdict = ''; } })).status, 'in review');
  assert.equal(status(filled('A', 'rev-a'), filled('B', 'rev-b'), filled('C', 'rev-c', { edit: (r) => { r.originality_signoff.verdict = 'revise'; } })).status, 'needs revision');
});

test('REVIEW STATUS (EX-03/O7): one revise or reject by any slot means needs revision — no vote, no override', () => {
  const id = reviewRecord(P3).items[7].item_id;
  for (const [slot, v] of [['A', 'reject'], ['B', 'revise'], ['C', 'reject']]) {
    const recs = ['A', 'B', 'C'].map((s) => filled(s, `rev-${s}`, { edit: s === slot ? (r) => { r.items[7].verdict = v; r.items[7].notes = 'x'; } : undefined }));
    const f = status(...recs);
    assert.equal(f.status, 'needs revision', `${slot} ${v}`);
    assert.equal(f.items.find((i) => i.item_id === id).status, 'needs revision');
    assert.equal(f.summary.needs_revision, 1);
  }
  // C's item-level accessibility verdict counts too (O4)
  const f = status(filled('A', 'a'), filled('B', 'b'), filled('C', 'c', { edit: (r) => { r.tasks[0].accessibility = 'revise'; } }));
  assert.equal(f.status, 'needs revision');
});

test('REVIEW STATUS (EX-03/O6): a record of an older revision is stale and ignored; an old template without fingerprint too', () => {
  const old = filled('A', 'rev-a', { edit: (r) => { r.content_sha256 = '0'.repeat(64); } });
  const f = status(old, filled('B', 'rev-b'), filled('C', 'rev-c'));
  assert.equal(f.stale.length, 1); assert.match(f.stale[0].reason, /older revision/);
  assert.equal(f.status, 'in review', 'slot A must review the current content again');
  const v1 = filled('A', 'rev-a', { edit: (r) => { delete r.record_version; delete r.content_sha256; } });
  assert.match(status(v1).stale[0].reason, /no content fingerprint/);
});

test('REVIEW STATUS (EX-03/O1): one person in two slots, or two records for one slot, blocks the form', () => {
  let f = status(filled('A', 'Rev-X'), filled('B', 'rev-x'), filled('C', 'rev-c'));
  assert.equal(f.status, 'in review'); assert.match(f.problems.join(), /same person \(rev-x\)/);
  assert.equal(f.summary.approved, 0);
  f = status(filled('A', 'rev-a'), { ...filled('A', 'rev-a2'), file: 'A2.json' }, filled('B', 'rev-b'), filled('C', 'rev-c'));
  assert.match(f.problems.join(), /2 records for slot A/);
  assert.notEqual(f.status, 'approved');
});

test('REVIEW STATUS (SCHEMA §8.3 + EX-03/O10): agreeing pair, third rating, re-rate', () => {
  assert.deepEqual(resolveRating(3, 4), { value: 3.5 });
  assert.deepEqual(resolveRating(2, 4), { pending: 'third rating needed' });
  assert.deepEqual(resolveRating(1, 4, 3), { value: 3.5 }, 'C agrees with B only');
  assert.deepEqual(resolveRating(1, 5, 3), { pending: 're-rate' }, '1/5/3: agrees with neither');
  assert.deepEqual(resolveRating(2, 4, 3), { pending: 're-rate' }, '2/4/3: agrees with both');
  assert.deepEqual(resolveRating(null, 4), { pending: 'missing' });
  // in a form: A=2, B=4 on one item, C has not rated → ratings pending, form not approved although all verdicts approve
  const f = status(filled('A', 'a', { edit: (r) => { r.items[0].inference_demand = 2; } }), filled('B', 'b', { edit: (r) => { r.items[0].inference_demand = 4; } }), filled('C', 'c'));
  assert.equal(f.summary.ratings_pending, 1);
  assert.equal(f.status, 'in review');
  const g = status(filled('A', 'a', { edit: (r) => { r.items[0].inference_demand = 2; } }), filled('B', 'b', { edit: (r) => { r.items[0].inference_demand = 4; } }), filled('C', 'c', { edit: (r) => { r.items[0].inference_demand = 4; } }));
  assert.equal(g.items[0].ratings.inference_demand.value, 4);
  assert.equal(g.status, 'approved');
});

test('REVIEW STATUS: invalid records are reported, not counted; missing notes are warnings', () => {
  const bad = filled('B', 'rev-b', { edit: (r) => { r.items[0].verdict = 'ok'; r.items[1].inference_demand = 7; r.reviewer.date = 'today'; } });
  const f = status(filled('A', 'rev-a'), bad, filled('C', 'rev-c'));
  const rec = f.records.find((r) => r.slot === 'B');
  assert.ok(rec.errors.some((e) => /not approve\/revise\/reject/.test(e)) && rec.errors.some((e) => /integer 1–5/.test(e)) && rec.errors.some((e) => /YYYY-MM-DD/.test(e)));
  assert.equal(f.status, 'in review', 'B does not count');
  const w = status(filled('A', 'a', { edit: (r) => { r.items[0].verdict = 'revise'; r.items[0].notes = ''; } })).records[0].warnings;
  assert.ok(w.some((x) => /no notes for revise/.test(x)));
  const tampered = filled('A', 'a', { edit: (r) => { r.items[0].item_sha256 = 'f'.repeat(64); } });
  assert.ok(status(tampered).records[0].errors.some((e) => /fingerprint does not match/.test(e)));
});

test('REVIEW STATUS CLI: reads a directory, reports unknown files, refuses to write the report inside the repository', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-ex03-'));
  for (const r of [filled('A', 'a'), filled('B', 'b')]) fs.writeFileSync(path.join(dir, r.file), JSON.stringify(r.record));
  fs.writeFileSync(path.join(dir, 'notes.json'), '{ not json');
  const recs = readRecords(dir);
  assert.equal(recs.length, 3);
  const rep = reviewStatus(recs);
  assert.equal(rep.forms.find((f) => f.form === 'P3').status, 'in review');
  assert.equal(rep.forms.find((f) => f.form === 'P1').status, 'not started');
  assert.match(rep.unassigned[0].reason, /not valid JSON/);
  const tool = path.join(REPO, 'exam-content/tools/review-status.mjs');
  assert.throws(() => execFileSync(process.execPath, [tool, dir, '--out', path.join(REPO, 'ex03-out')], { stdio: 'pipe' }), /inside the repository/);
  assert.equal(fs.existsSync(path.join(REPO, 'ex03-out')), false);
  const out = path.join(dir, 'report');
  const md = execFileSync(process.execPath, [tool, dir, '--out', out], { encoding: 'utf8' });
  assert.match(md, /\| P3 \| in review \|/);
  assert.deepEqual(fs.readdirSync(out).sort(), ['ex03-status.json', 'ex03-status.md']);
});

test('REVIEW STATUS summary: reviewer ids with a pipe or a line break cannot break the Markdown table', () => {
  const cells = (row) => row.replace(/\\\\/g, '').split(/(?<!\\)\|/).length - 2;   // count unescaped pipes only
  const lines = (recs) => summaryMarkdown(reviewStatus(recs, ONLY)).split('\n');
  const header = cells(lines([]).find((l) => l.startsWith('| Form')));
  // the id appears in the records column, and (same person in two slots, EX-03/O1) in the problems column
  const md = lines([filled('A', 'Dr. X | Uni'), filled('B', 'dr. x | uni'), filled('C', 'line\nbreak')]);
  const row = md.find((l) => l.startsWith('| P3 '));
  assert.equal(cells(row), header, row);
  assert.ok(row.includes('Dr. X \\| Uni') && row.includes('line break'), row);
  assert.equal(md.filter((l) => l.startsWith('|')).every((l) => cells(l) === header), true);
});
