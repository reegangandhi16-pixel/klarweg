/* EX-03 review sheets (tools/review-sheet.mjs): every scored item and productive task of a form is on its sheet with key,
   explanation and evidence; the JSON record template has a slot for each; content is escaped; and the tool refuses to
   write inside the repository, because the sheets contain keys. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRACTICE_FORMS } from '../tools/practice-forms.mjs';
import { reviewSheetHtml, reviewRecord, writeReviewSheets } from '../tools/review-sheet.mjs';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

test('REVIEW SHEET: every scored item with key, explanation and evidence; 60 item and 6 task slots per form', () => {
  for (const f of PRACTICE_FORMS) {
    const html = reviewSheetHtml(f), rec = reviewRecord(f);
    assert.equal(rec.items.length, 60); assert.equal(rec.tasks.length, 6); assert.equal(rec.form_id, f.form_id);
    const items = JSON.parse(f.files['items.json']).filter((it) => it.feedback);
    assert.equal((html.match(/verdict ☐ approve ☐ revise ☐ reject<\/td>/g) || []).length, 60, `${f.name}: 60 rating rows`);
    for (const it of items) assert.ok(html.includes(it.feedback.explanation_de.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')), `${it.id} explanation on the sheet`);
    assert.equal((html.match(/ ✔<\/span>/g) || []).length, 60, `${f.name}: one marked key per item`);
    assert.match(html, /not an official exam/);
  }
});

test('REVIEW SHEET: content is HTML-escaped', () => {
  const f = PRACTICE_FORMS[0];
  const items = JSON.parse(f.files['items.json']);
  items.find((it) => it.feedback).feedback.explanation_de = '<script>alert(1)</script> & "x"';
  const html = reviewSheetHtml({ ...f, files: { ...f.files, 'items.json': JSON.stringify(items) } });
  assert.equal(html.includes('<script>alert(1)'), false);
  assert.ok(html.includes('&lt;script&gt;alert(1)&lt;/script&gt; &amp; &quot;x&quot;'));
});

test('REVIEW SHEET: refuses to write inside the repository; writes HTML + JSON outside it', () => {
  assert.throws(() => writeReviewSheets(path.join(REPO, 'review-out'), ['p3']), /inside the repository/);
  assert.throws(() => writeReviewSheets(REPO, ['p3']), /inside the repository/);
  assert.equal(fs.existsSync(path.join(REPO, 'review-out')), false);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-review-'));
  assert.deepEqual(writeReviewSheets(dir, ['p3']), ['P3']);
  assert.deepEqual(fs.readdirSync(dir).sort(), ['P3-review.html', 'P3-review.json']);
});

test('REVIEW SHEET: the Teil 3 partner talks and examiner questions say which topic choice they belong to (OD-32)', () => {
  for (const f of PRACTICE_FORMS) {
    const html = reviewSheetHtml(f);
    for (const role of ['partner_audio', 'examiner_audio']) for (const n of ['1', '2']) assert.ok(html.includes(`<b>${role} — für Lernende mit Thema ${n}</b>`), `${f.name}: ${role} for Thema ${n}`);
  }
});
