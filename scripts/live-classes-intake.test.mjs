/* Live Classes intake → profile (scripts/live-classes-intake.mjs). node --test
   Uses a FICTIONAL teacher in a temporary folder outside the repository. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { ROOT, loadData, checkData } from './live-classes-readiness.mjs';
import { intakeToTeacher, entrySource, insideRepo, parseCsv } from './live-classes-intake.mjs';

const TEMPLATE = fs.readFileSync(path.join(ROOT, 'docs/templates/live-classes-teacher-intake.csv'), 'utf8');
const q = (s) => '"' + String(s).replace(/"/g, '""') + '"';
/* Fill the real template: { field: [value, evidence, confirmed] } */
function sheet(fill) {
  return TEMPLATE.split('\n').map((line, i) => {
    if (i === 0 || !line.trim()) return line;
    const cells = parseCsv(line)[0];
    const f = fill[cells[0]];
    if (!f) return line;
    return [q(cells[0]), q(f[0]), q(cells[2]), q(f[1] || ''), q(f[2] || ''), q('')].join(',');
  }).join('\n');
}
const EV = 'Certificate seen on video call, 2026-11-01';
const OK = '2026-11-02';
const FULL = {
  id: ['test-teacher-two', 'n/a', OK],
  name: ['Test Teacher Two', 'ID seen, 2026-11-01', OK],
  headline: ['Speaking practice with patient correction', 'Teacher’s written text, 2026-11-01', OK],
  experience: ['3 years of teaching German', 'Employer reference, 2026-11-01', OK],
  proficiency: ['C1', EV, OK],
  qualifications: ['Goethe-Zertifikat C1', EV, OK],
  goethe: ['Goethe-Zertifikat C1', EV, OK],
  levels: ['A2; B1', 'Teacher + owner decision, 2026-11-02', OK],
  teachesIn: ['English; German', 'Teacher’s statement, 2026-11-01', OK],
  specialisms: ['Speaking; "Konjunktiv II"', 'Teacher’s statement, 2026-11-01', OK],
  formats: ['One-to-one', 'Owner decision, 2026-11-02', OK],
  consent: ['Email, 2026-11-02', 'Email from the teacher, 2026-11-02', ''],
  'teaching agreement': ['Signed', 'Agreement, 2026-11-02', OK],
  'data-sharing arrangement': ['Agreed', 'Data-sharing email thread, 2026-11-02', OK]
};
const without = (k) => { const x = { ...FULL }; delete x[k]; return x; };
const withRow = (k, row) => ({ ...FULL, [k]: row });

test('INTAKE: the blank template is not ready, and lists every required field as missing (consent included)', () => {
  const r = intakeToTeacher(TEMPLATE);
  assert.equal(r.teacher, null);
  for (const f of ['id', 'name', 'headline', 'experience', 'proficiency', 'qualifications', 'levels', 'teachesIn', 'formats', 'consent']) {
    assert.ok(r.missing.includes(`${f}: not provided`), f);
  }
});

test('INTAKE: a complete, evidenced, owner-confirmed, consented sheet becomes an entry the site validator accepts', () => {
  const r = intakeToTeacher(sheet(FULL));
  assert.deepEqual(r.missing, []);
  assert.deepEqual(r.errors, []);
  const t = r.teacher;
  assert.equal(t.name, 'Test Teacher Two');
  assert.deepEqual(t.levels, ['A2', 'B1']);
  assert.deepEqual(t.specialisms, ['Speaking', '"Konjunktiv II"']);
  assert.deepEqual(t.unconfirmed, []);
  assert.equal(t.draft, undefined);
  // the printed entry evaluates to exactly this object, and evidence never appears in it
  const src = entrySource(t);
  const back = vm.runInNewContext('(' + src + ')');
  assert.deepEqual(JSON.parse(JSON.stringify(back)), JSON.parse(JSON.stringify(t)));
  for (const row of Object.values(FULL)) if (row[1] !== 'n/a') assert.equal(src.includes(row[1]), false, `evidence "${row[1]}" leaked`);
  const D = loadData();
  assert.deepEqual(checkData({ ...D, teachers: D.teachers.concat(t) }), []);
});

test('INTAKE: missing consent, evidence or owner confirmation blocks publication', () => {
  assert.ok(intakeToTeacher(sheet(without('consent'))).missing.includes('consent: not provided'));
  assert.ok(intakeToTeacher(sheet(withRow('consent', ['Email, 2026-11-02', '', '']))).missing.includes('consent: no evidence recorded'));
  assert.ok(intakeToTeacher(sheet(withRow('experience', ['3 years of teaching German', '', OK]))).missing.includes('experience: no evidence recorded'));
  assert.ok(intakeToTeacher(sheet(withRow('proficiency', ['C1', EV, 'yes']))).missing.includes('proficiency: owner confirmation date (YYYY-MM-DD) missing'));
  assert.ok(intakeToTeacher(sheet(without('teaching agreement'))).missing.some((m) => /^teaching agreement/.test(m)));
  for (const k of ['consent', 'experience', 'teaching agreement']) assert.equal(intakeToTeacher(sheet(without(k))).teacher, null, k);
});

test('INTAKE: a photo needs photoConsent and an existing file; a credential must be in a checkable form', () => {
  const photo = withRow('photo / photoAlt', ['public/teachers/test-teacher-two.jpg|Test Teacher Two at a desk', 'Photo supplied by the teacher, 2026-11-01', OK]);
  assert.ok(intakeToTeacher(sheet(photo)).missing.some((m) => /^photoConsent/.test(m)));
  const withConsent = { ...photo, photoConsent: ['Email, 2026-11-02', 'Email from the teacher, 2026-11-02', ''] };
  assert.ok(intakeToTeacher(sheet(withConsent)).errors.some((e) => /does not exist/.test(e)), 'the photo file must exist');
  assert.ok(intakeToTeacher(sheet(withRow('proficiency', ['Goethe C1', EV, OK]))).errors.some((e) => /proficiency/.test(e)));
  assert.ok(intakeToTeacher(sheet(withRow('qualifications', ['Goethe-Zertifikat B2', EV, OK]))).errors.some((e) => /not listed in goethe/.test(e)));
});

test('INTAKE: opaque candidate ids and already-published ids are refused', () => {
  assert.ok(intakeToTeacher(sheet(withRow('id', ['candidate-01', 'n/a', OK]))).errors.some((e) => /opaque candidate id/.test(e)));
  assert.ok(intakeToTeacher(sheet(withRow('id', ['reegan-gandhi', 'n/a', OK]))).errors.some((e) => /already a published teacher/.test(e)));
});

test('INTAKE CLI: refuses a sheet inside the repository; reports a blank sheet as not ready', () => {
  const inside = path.join(ROOT, 'docs/templates/live-classes-teacher-intake.csv');
  assert.equal(insideRepo(inside), true);
  assert.throws(() => execFileSync('node', ['scripts/live-classes-intake.mjs', inside], { cwd: ROOT, stdio: 'pipe' }), (e) => e.status === 2 && /inside this public repository/.test(String(e.stderr)));
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-intake-'));
  const blank = path.join(dir, 'blank.csv');
  fs.writeFileSync(blank, TEMPLATE);
  assert.equal(insideRepo(blank), false);
  assert.throws(() => execFileSync('node', ['scripts/live-classes-intake.mjs', blank], { cwd: ROOT, stdio: 'pipe' }), (e) => e.status === 1 && /NOT READY/.test(String(e.stdout)) && /consent: not provided/.test(String(e.stdout)));
  const full = path.join(dir, 'full.csv');
  fs.writeFileSync(full, sheet(FULL));
  const out = execFileSync('node', ['scripts/live-classes-intake.mjs', full], { cwd: ROOT, encoding: 'utf8' });
  assert.match(out, /^READY\./);
  assert.match(out, /"name": "Test Teacher Two"|name: "Test Teacher Two"/);
  fs.rmSync(dir, { recursive: true, force: true });
});

test('INTAKE: the repository still publishes only the owner, and no candidate became a teacher', () => {
  const D = loadData();
  assert.deepEqual([...D.teachers.filter((t) => !t.draft).map((t) => t.id)], ['reegan-gandhi']);
});
