/* SCHEMA §2: content that reached learners is immutable. Every form in released-forms.json must still exist with the
   exact fingerprint that was released; a correction is a new revision (tools/revise-form.mjs), never an in-place edit. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRACTICE_FORMS } from '../tools/practice-forms.mjs';
import { formFingerprint } from '../tools/review-sheet.mjs';
import { releaseCandidate } from '../tools/release-candidate.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LOCK = JSON.parse(fs.readFileSync(path.join(ROOT, 'released-forms.json'), 'utf8'));

export function lockViolations(lock, forms) {
  const out = [];
  const seen = new Set();
  for (const e of lock.forms) {
    if (!/^frm:/.test(e.id || '') || !/^[0-9a-f]{64}$/.test(e.content_sha256 || '')) { out.push(`malformed entry ${JSON.stringify(e)}`); continue; }
    if (seen.has(e.id)) out.push(`${e.id} listed twice`); seen.add(e.id);
    const f = forms.find((x) => JSON.parse(x.files['form.json']).id === e.id);
    if (!f) out.push(`${e.id} was released but no longer exists (released forms are never removed)`);
    else if (formFingerprint(f) !== e.content_sha256) out.push(`${e.id} was released with other content: create a new revision instead of editing it`);
  }
  return out;
}

test('RELEASED FORMS: every released form is unchanged (empty today: no learner release has been built)', () => {
  assert.ok(Array.isArray(LOCK.forms));
  assert.deepEqual(lockViolations(LOCK, PRACTICE_FORMS), []);
});

test('RELEASED FORMS: an in-place edit, a removal, a duplicate or a malformed entry is caught; the release tool refuses too', () => {
  const p3 = PRACTICE_FORMS.find((f) => f.name === 'P3');
  const id = 'frm:b1:synthetic-p3@1';
  assert.deepEqual(lockViolations({ forms: [{ id, content_sha256: formFingerprint(p3) }] }, PRACTICE_FORMS), []);
  assert.match(lockViolations({ forms: [{ id, content_sha256: 'a'.repeat(64) }] }, PRACTICE_FORMS)[0], /released with other content: create a new revision/);
  assert.match(lockViolations({ forms: [{ id: 'frm:b1:synthetic-p99@1', content_sha256: 'a'.repeat(64) }] }, PRACTICE_FORMS)[0], /no longer exists/);
  assert.match(lockViolations({ forms: [{ id, content_sha256: formFingerprint(p3) }, { id, content_sha256: formFingerprint(p3) }] }, PRACTICE_FORMS)[0], /listed twice/);
  assert.match(lockViolations({ forms: [{ id: 'x' }] }, PRACTICE_FORMS)[0], /malformed/);
  // the candidate record proposes no lock entry for an unapproved build
  const r = releaseCandidate({ forms: 'p3', module: 'lesen', release: 'r101', internalCandidate: true, builtAt: '2026-10-20T00:00:00.000Z' });
  assert.deepEqual(r.record.released_forms_entries, []);
  assert.throws(() => releaseCandidate({ forms: 'p3', module: 'lesen', release: 'r101', internalCandidate: true, builtAt: '2026-10-20T00:00:00.000Z', releasedForms: [{ id, content_sha256: 'a'.repeat(64) }] }), /was released with different content; create a new revision/);
});
