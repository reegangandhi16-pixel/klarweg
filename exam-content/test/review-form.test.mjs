/* Self-service EX-03 workflow: the fillable offline review form (tools/review-form.mjs + review-form-logic.mjs), the
   plain-language record check and the approved/outstanding summary (tools/review-status.mjs). The records filled here
   are synthetic, only to exercise the tools; no form is approved by this test. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { PRACTICE_FORMS } from '../tools/practice-forms.mjs';
import { reviewRecord } from '../tools/review-sheet.mjs';
import { fillRecord, progress } from '../tools/review-form-logic.mjs';
import { reviewFormHtml, writeReviewForms } from '../tools/review-form.mjs';
import { checkFile, plainSummary, reviewStatus } from '../tools/review-status.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STATUS = path.join(ROOT, 'tools/review-status.mjs');
const P3 = PRACTICE_FORMS.find((f) => f.name === 'P3');
const T = reviewRecord(P3);
const items = JSON.parse(P3.files['items.json']);
const moduleOf = Object.fromEntries(items.map((it) => [it.id, it.module]));
const LESEN = [...T.items, ...T.tasks].map((x) => x.item_id).filter((id) => moduleOf[id] === 'lesen');

function state(slot, { verdict = 'approve', skip = [] } = {}) {
  const st = { reviewer: { slot, reviewer_id: `rv-${slot}`, role: slot === 'C' ? 'originality' : 'content', native_german: true, date: '2026-10-20' }, items: {}, tasks: {}, originality: { verdict: slot === 'C' ? 'approve' : '' } };
  for (const id of LESEN) { if (skip.includes(id)) continue; st.items[id] = slot === 'C' ? { verdict, accessibility: 'approve' } : { verdict, ambiguity_risk: '0', inference_demand: '3', distractor_strength: '2', notes: verdict === 'approve' ? '' : 'x' }; }
  return st;
}

test('REVIEW FORM logic: a filled Lesen record keeps the template fingerprints, fills only its slot\'s fields, and passes the checker', () => {
  for (const slot of ['A', 'B', 'C']) {
    const rec = fillRecord(T, state(slot));
    assert.equal(rec.content_sha256, T.content_sha256);
    assert.deepEqual(rec.items.map((i) => i.item_sha256), T.items.map((i) => i.item_sha256));
    const p = progress(rec, LESEN);
    assert.equal(p.complete, true, slot); assert.equal(p.done, 30);
    const c = checkFile(rec, { module: 'lesen' });
    assert.equal(c.ok, true, `${slot}: ${JSON.stringify(c)}`);
    if (slot === 'C') assert.ok(rec.items.every((i) => i.inference_demand === null && i.ambiguity_risk === null));
    else assert.ok(rec.items.every((i) => i.accessibility === '') && rec.originality_signoff.verdict === '');
  }
  // three filled slots → Lesen approved for P3, the other modules still in review (the tools agree end to end)
  const recs = ['A', 'B', 'C'].map((s) => ({ file: `P3-${s}.json`, record: fillRecord(T, state(s)) }));
  const fr = reviewStatus(recs, [P3]).forms[0];
  assert.equal(fr.modules.lesen, 'approved'); assert.equal(fr.modules.hoeren, 'in review');
});

test('REVIEW FORM logic: progress names what is missing — reviewer details, entries, notes, C originality', () => {
  const empty = progress(fillRecord(T, {}), LESEN);
  assert.equal(empty.complete, false); assert.equal(empty.done, 0); assert.equal(empty.total, 30);
  assert.deepEqual(empty.reviewerMissing, ['slot', 'reviewer_id', 'date', 'native_german']);
  const partial = progress(fillRecord(T, state('A', { skip: [LESEN[0]] })), LESEN);
  assert.deepEqual(partial.missing, [{ id: LESEN[0], fields: ['verdict', 'ambiguity_risk', 'inference_demand', 'distractor_strength'] }]);
  const st = state('B'); st.items[LESEN[1]] = { verdict: 'revise', ambiguity_risk: '1', inference_demand: '3', distractor_strength: '3', notes: '' };
  assert.deepEqual(progress(fillRecord(T, st), LESEN).needNotes, [LESEN[1]]);
  const c = state('C'); c.originality = {};
  assert.equal(progress(fillRecord(T, c), LESEN).originalityMissing, true);
  // unknown fields in the state never reach the record
  const odd = state('A'); odd.items[LESEN[0]].key = 'b'; odd.extra = 1;
  const rec = fillRecord(T, odd);
  assert.equal('key' in rec.items[0], false); assert.equal('extra' in rec, false);
});

test('REVIEW FORM page: self-contained, Lesen scope only, every Lesen item fillable, no network, written outside the repo only', () => {
  const html = reviewFormHtml(P3, { modules: ['lesen'] });
  assert.equal((html.match(/<fieldset class="item[ "]/g) || []).length, 30);
  assert.equal(/Hören Teil/.test(html), false);
  assert.equal(/\b(src|href)="https?:/i.test(html) || /@import|fetch\(|XMLHttpRequest/.test(html), false, 'no network use');
  const data = JSON.parse(/<script type="application\/json" id="kx-data">([\s\S]*?)<\/script>/.exec(html)[1]);
  assert.equal(data.template.content_sha256, T.content_sha256);
  assert.deepEqual(data.scopeIds.sort(), [...LESEN].sort());
  assert.match(html, /const fillRecord = function fillRecord/); assert.match(html, /const progress = function progress/);
  assert.equal((html.match(/<\/script>/g) || []).length, 2, 'embedded data cannot close the script element');
  // the inline script must parse (a raw line break inside a string once broke the whole page)
  assert.doesNotThrow(() => new vm.Script(html.split('<script>')[1].split('</script>')[0]));
  const full = reviewFormHtml(P3);
  assert.ok((full.match(/<fieldset class="item[ "]/g) || []).length === 66, '60 items + 6 tasks in the full form');
  assert.throws(() => writeReviewForms(path.join(ROOT, 'x')), /inside the repository/);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-form-'));
  try { assert.deepEqual(writeReviewForms(dir, ['p3', 'p8'], { modules: ['lesen'] }), ['P3', 'P8']); assert.deepEqual(fs.readdirSync(dir).sort(), ['P3-review-form-lesen.html', 'P8-review-form-lesen.html']); }
  finally { fs.rmSync(dir, { recursive: true, force: true }); }
});

test('REVIEW CHECK: plain-language verdict on a returned record (must fix / still empty), exit 1 unless ready', () => {
  const bad = fillRecord(T, state('A', { skip: [LESEN[2]] }));
  bad.items[0].verdict = 'okay';
  const c = checkFile(bad, { module: 'lesen' });
  assert.equal(c.ok, false);
  assert.ok(c.errors.some((e) => /^Lesen Teil 1, Nr\. 1 \(itm:b1:p3-l1-01\): verdict "okay"/.test(e)), JSON.stringify(c.errors));
  assert.ok(c.missing.some((m) => /^Lesen Teil 1, Nr\. 3: verdict/.test(m)), JSON.stringify(c.missing));
  const stale = { ...fillRecord(T, state('B')), content_sha256: '0'.repeat(64) };
  assert.match(checkFile(stale, { module: 'lesen' }).errors.join(' '), /different version of the form/);
  assert.match(checkFile({ form_id: 'frm:b1:nope@1' }).errors[0], /unknown form_id/);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-check-'));
  try {
    fs.writeFileSync(path.join(dir, 'ok.json'), JSON.stringify(fillRecord(T, state('C'))));
    fs.writeFileSync(path.join(dir, 'bad.json'), JSON.stringify(bad));
    fs.writeFileSync(path.join(dir, 'broken.json'), '{');
    const ok = spawnSync(process.execPath, [STATUS, '--check', path.join(dir, 'ok.json'), '--module', 'lesen'], { encoding: 'utf8' });
    assert.equal(ok.status, 0, ok.stdout + ok.stderr); assert.match(ok.stdout, /READY TO RETURN \(P3, slot C, lesen\)/);
    const no = spawnSync(process.execPath, [STATUS, '--check', path.join(dir, 'bad.json'), path.join(dir, 'broken.json'), '--module', 'lesen'], { encoding: 'utf8' });
    assert.equal(no.status, 1); assert.match(no.stdout, /NOT READY/); assert.match(no.stdout, /must fix: Lesen Teil 1, Nr\. 1/); assert.match(no.stdout, /still empty: Lesen Teil 1, Nr\. 3/); assert.match(no.stdout, /NOT VALID JSON/);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});

test('REVIEW SUMMARY: says per form and module what is approved and what is outstanding, in plain words', () => {
  const A = { file: 'P3-A.json', record: fillRecord(T, state('A')) };
  let s = plainSummary(reviewStatus([A], [P3]), { modules: ['lesen'], forms: [P3] });
  assert.match(s, /P3 Lesen: IN REVIEW — waiting for slot B, C; originality sign-off \(C\) missing/);
  const Brev = fillRecord(T, state('B')); Brev.items[0].verdict = 'revise'; Brev.items[0].notes = 'zwei Lesarten';
  s = plainSummary(reviewStatus([A, { file: 'P3-B.json', record: Brev }, { file: 'P3-C.json', record: fillRecord(T, state('C')) }], [P3]), { modules: ['lesen'], forms: [P3] });
  assert.match(s, /P3 Lesen: NEEDS REVISION — revise and review again from scratch: Lesen Teil 1, Nr\. 1 \(B: revise\)/);
  s = plainSummary(reviewStatus(['A', 'B', 'C'].map((x) => ({ file: `P3-${x}.json`, record: fillRecord(T, state(x)) })), [P3]), { modules: ['lesen', 'hoeren'], forms: [P3] });
  assert.match(s, /P3 Lesen: APPROVED \(EX-03 rules met\)/); assert.match(s, /P3 Hören: IN REVIEW/);
  assert.match(s, /it approves nothing/);
});
