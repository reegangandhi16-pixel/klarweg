/* Learner releases can never contain a system-test fixture: synthetic forms declare a purpose (system_test | practice),
   and build-release --purpose learner requires an explicit form list and refuses system_test forms. The default test/dev
   build is unchanged (S0 still builds). Which forms a learner release contains is not decided here. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { validateForm } from '../tools/validate.mjs';
import { buildRelease } from '../tools/build-release.mjs';
import { PRACTICE_FORMS } from '../tools/practice-forms.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FORMS = path.join(ROOT, 'forms/synthetic');
const S0 = path.join(FORMS, 'b1-synthetic-s0'), P1 = path.join(FORMS, 'b1-synthetic-p1'), P2 = path.join(FORMS, 'b1-synthetic-p2');
const CLI = path.join(ROOT, 'tools/build-release.mjs');
const cli = (...args) => spawnSync(process.execPath, [CLI, '--release', 'r000', '--out', fs.mkdtempSync(path.join(os.tmpdir(), 'kx-rel-')), ...args], { encoding: 'utf8' });

test('PURPOSE: S0 is a system-test fixture, P1 and P2 are practice; the validator requires a valid purpose on synthetic forms', () => {
  const purpose = (d) => JSON.parse(fs.readFileSync(path.join(d, 'form.json'), 'utf8')).purpose;
  assert.deepEqual([purpose(S0), purpose(P1), purpose(P2)], ['system_test', 'practice', 'practice']);
  for (const [value, ok] of [[undefined, false], ['exam', false], ['practice', true]]) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-purpose-'));
    for (const f of fs.readdirSync(P1)) fs.copyFileSync(path.join(P1, f), path.join(dir, f));
    const form = JSON.parse(fs.readFileSync(path.join(dir, 'form.json'), 'utf8'));
    if (value === undefined) delete form.purpose; else form.purpose = value;
    fs.writeFileSync(path.join(dir, 'form.json'), JSON.stringify(form));
    const v = validateForm(dir);
    assert.equal(v.errors.some((e) => e.code === 'synthetic_purpose'), !ok, `purpose ${value}`);
  }
});

test('LEARNER RELEASE: explicit practice forms build; S0 is refused; a learner build without a form list is refused', () => {
  const b = buildRelease({ release: 'r001', purpose: 'learner', formDirs: [P1, P2], builtAt: '2026-10-14T00:00:00.000Z' });
  assert.equal(b.manifest.purpose, 'learner');
  assert.deepEqual(b.manifest.forms.map((f) => [f.id, f.purpose]), [['frm:b1:synthetic-p1@1', 'practice'], ['frm:b1:synthetic-p2@1', 'practice']]);
  assert.equal(/synthetic-s0/.test(b.sql), false, 'no S0 row in the registry SQL');
  assert.throws(() => buildRelease({ release: 'r001', purpose: 'learner', formDirs: [P1, S0] }), /refusing frm:b1:synthetic-s0@1 in a learner release: synthetic purpose system_test/);
  assert.throws(() => buildRelease({ release: 'r001', purpose: 'learner', formDirs: [] }), /explicit list of form directories/);
  assert.throws(() => buildRelease({ release: 'r001', purpose: 'production', formDirs: [P1] }), /invalid release purpose/);
  // the CLI: no silent default to "every form in the tree" for a learner build
  let r = cli('--purpose', 'learner');
  assert.notEqual(r.status, 0); assert.match(r.stderr, /explicit list of form directories/);
  r = cli('--purpose', 'learner', P1, S0);
  assert.notEqual(r.status, 0); assert.match(r.stderr, /refusing frm:b1:synthetic-s0@1/);
  r = cli('--purpose', 'learner', P1, P2);
  assert.equal(r.status, 0, r.stderr); assert.deepEqual(JSON.parse(r.stdout).forms, ['frm:b1:synthetic-p1@1', 'frm:b1:synthetic-p2@1']);
});

test('TEST RELEASE (default): unchanged — S0 still builds alone and the no-argument build includes every registered form', () => {
  const b = buildRelease({ release: 'r000', formDirs: [S0], builtAt: '2026-10-14T00:00:00.000Z' });
  assert.equal(b.manifest.purpose, 'test'); assert.equal(b.manifest.forms[0].purpose, 'system_test');
  const r = cli();
  assert.equal(r.status, 0, r.stderr);
  assert.deepEqual(JSON.parse(r.stdout).forms.sort(), [...PRACTICE_FORMS.map((f) => f.form_id), 'frm:b1:synthetic-s0@1'].sort());
});

test('LEARNER RELEASE: the whole practice library builds as an explicit learner release; adding S0 to that list is refused', () => {
  const dirs = PRACTICE_FORMS.map((f) => path.join(ROOT, f.rel));
  const b = buildRelease({ release: 'r001', purpose: 'learner', formDirs: dirs, builtAt: '2026-10-14T00:00:00.000Z' });
  assert.deepEqual(b.manifest.forms.map((f) => [f.id, f.purpose]), PRACTICE_FORMS.map((f) => [f.form_id, 'practice']));
  assert.equal(/synthetic-s0/.test(b.sql), false);
  assert.throws(() => buildRelease({ release: 'r001', purpose: 'learner', formDirs: [...dirs, S0] }), /refusing frm:b1:synthetic-s0@1 in a learner release/);
});
