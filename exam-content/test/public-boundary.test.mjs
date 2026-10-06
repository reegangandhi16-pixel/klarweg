/* F11 — PUBLIC-REPOSITORY BOUNDARY. Every scenario runs against a temporary
   copy of the exam trees (never the real repo), except the first test. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkPublicBoundary } from '../tools/check-public-boundary.mjs';
import { SYNTHETIC_FORMS } from '../tools/make-synthetic-form.mjs';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const FORM_REL = 'exam-content/forms/synthetic/b1-synthetic-s0';

function fakeRepo() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-boundary-'));
  for (const tree of ['exam-content', 'exam', 'exam-worker', 'docs/exam']) {
    fs.cpSync(path.join(REPO, tree), path.join(root, tree), { recursive: true, filter: (src) => path.basename(src) !== '.DS_Store' });
  }
  return root;
}
const codes = (r) => [...new Set(r.errors.map((e) => e.code))].sort();
const write = (root, rel, content) => { fs.mkdirSync(path.dirname(path.join(root, rel)), { recursive: true }); fs.writeFileSync(path.join(root, rel), content); };
const readJ = (root, rel) => JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8'));

test('F11-1 current repository (synthetic only) → PASS; an exact copy → PASS', () => {
  const real = checkPublicBoundary({ repoRoot: REPO });
  assert.deepEqual(real.errors, []);
  assert.equal(checkPublicBoundary({ repoRoot: fakeRepo() }).ok, true);
});

test('F11-1b no false positives: docs and test code that describe forbidden material, published tables, generated synthetic keys', () => {
  const root = fakeRepo();
  write(root, 'docs/exam/FORBIDDEN-EXAMPLES.md', 'Never commit e.g. {"keys": {"itm:b1:real-01": {"kind": "single", "correct": "a"}}}');
  write(root, 'exam-worker/test/extra.test.mjs', "const keys = { 'itm:b1:x-01': { kind: 'single', correct: 'a' } };");
  assert.deepEqual(checkPublicBoundary({ repoRoot: root }).errors, []);
});

test('F11-2 simulated real form (kind mock) anywhere in exam-content → FAIL', () => {
  const root = fakeRepo();
  fs.cpSync(path.join(root, FORM_REL), path.join(root, 'exam-content/forms/mock/b1-mock-m0'), { recursive: true });
  const form = readJ(root, 'exam-content/forms/mock/b1-mock-m0/form.json');
  form.kind = 'mock'; form.id = 'frm:b1:mock-m0@1';
  write(root, 'exam-content/forms/mock/b1-mock-m0/form.json', JSON.stringify(form));
  const r = checkPublicBoundary({ repoRoot: root });
  assert.equal(r.ok, false);
  assert.ok(codes(r).includes('unregistered_form'), JSON.stringify(codes(r)));
  // a real form placed OUTSIDE exam-content is caught too
  const root2 = fakeRepo();
  fs.cpSync(path.join(root2, FORM_REL), path.join(root2, 'content/real-form'), { recursive: true });
  assert.ok(codes(checkPublicBoundary({ repoRoot: root2 })).includes('unregistered_form'));
});

test('F11-3 answer keys in the public tree (inside or outside exam-content, any data format) → FAIL', () => {
  const keyJson = JSON.stringify({ form_id: 'frm:b1:set-01@1', keys: { 'itm:b1:set01-l1-01': { kind: 'single', correct: 'richtig' } } });
  const a = fakeRepo();
  write(a, 'exam-content/levels/b1/answers.json', keyJson);
  assert.ok(codes(checkPublicBoundary({ repoRoot: a })).includes('answer_keys_in_public_repo'));
  const b = fakeRepo();
  write(b, 'data/exports/set01-keys.json', keyJson);
  assert.deepEqual(codes(checkPublicBoundary({ repoRoot: b })), ['answer_keys_in_public_repo']);
  const c = fakeRepo();
  write(c, 'exam-worker/fixtures/keys.csv', 'item,correct\nitm:b1:set01-l1-01,richtig\n');
  assert.ok(codes(checkPublicBoundary({ repoRoot: c })).includes('answer_keys_in_public_repo'));
});

test('F11-4 non-test exam assets → FAIL (media file, or real audio source in a form)', () => {
  const a = fakeRepo();
  write(a, 'exam-content/forms/synthetic/b1-synthetic-s0/h1.mp3', Buffer.from('ID3fake'));
  assert.ok(codes(checkPublicBoundary({ repoRoot: a })).includes('media_file'));
  const b = fakeRepo();
  write(b, 'exam/assets/hoeren-t1.wav', Buffer.from('RIFFfake'));
  assert.ok(codes(checkPublicBoundary({ repoRoot: b })).includes('media_file'));
  // a registered form whose audio is a real recording instead of a generator tone
  const reg = structuredClone(SYNTHETIC_FORMS);
  const assets = JSON.parse(reg[0].files['assets.json']);
  const au = assets.find((x) => x.kind === 'audio');
  au.audio = { file: 'recordings/h1-t1.mp3', plays: null }; au.label = 'Hören Teil 1';
  reg[0].files['assets.json'] = JSON.stringify(assets, null, 2) + '\n';
  const c = fakeRepo();
  write(c, `${FORM_REL}/assets.json`, reg[0].files['assets.json']);
  const r = checkPublicBoundary({ repoRoot: c, registered: reg });
  assert.ok(codes(r).includes('non_test_audio'), JSON.stringify(codes(r)));
});

test('F11-5 symlink from exam-content to external content → FAIL', () => {
  const root = fakeRepo();
  const external = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-private-content-'));
  write(external, 'b1-set-01/keys.json', '{}');
  fs.symlinkSync(external, path.join(root, 'exam-content/forms/private'));
  assert.ok(codes(checkPublicBoundary({ repoRoot: root })).includes('symlink'));
  const root2 = fakeRepo();
  fs.symlinkSync(path.join(external, 'b1-set-01/keys.json'), path.join(root2, 'exam-worker/keys.json'));
  assert.ok(codes(checkPublicBoundary({ repoRoot: root2 })).includes('symlink'));
});

test('F11-6 relabelling real content as "synthetic" → FAIL (provenance is byte-checked, not label-checked)', () => {
  // (a) edit the registered synthetic form's content but keep every synthetic label
  const a = fakeRepo();
  const items = readJ(a, `${FORM_REL}/items.json`);
  items.find((i) => i.id === 'itm:b1:syn-l1-01').stem = '1. Echte Prüfungsaussage aus einem realen Modellsatz.';
  write(a, `${FORM_REL}/items.json`, JSON.stringify(items, null, 2) + '\n');
  const ra = checkPublicBoundary({ repoRoot: a });
  assert.deepEqual(codes(ra), ['not_generator_output']);
  // (b) a second form fully labelled synthetic (kind, id, licences, TEST AUDIO) but not generator output
  const b = fakeRepo();
  fs.cpSync(path.join(b, FORM_REL), path.join(b, 'exam-content/forms/synthetic/b1-synthetic-s9'), { recursive: true });
  const form = readJ(b, 'exam-content/forms/synthetic/b1-synthetic-s9/form.json');
  form.id = 'frm:b1:synthetic-s9@1';
  write(b, 'exam-content/forms/synthetic/b1-synthetic-s9/form.json', JSON.stringify(form, null, 2) + '\n');
  assert.ok(codes(checkPublicBoundary({ repoRoot: b })).includes('unregistered_form'));
  // (c) a registered entry that claims synthetic but carries non-synthetic provenance
  const reg = structuredClone(SYNTHETIC_FORMS);
  const its = JSON.parse(reg[0].files['items.json']);
  its[0].provenance.reference_material_used = 'Modellsatz B1 (2024)';
  reg[0].files['items.json'] = JSON.stringify(its, null, 2) + '\n';
  const c = fakeRepo();
  write(c, `${FORM_REL}/items.json`, reg[0].files['items.json']);
  assert.ok(codes(checkPublicBoundary({ repoRoot: c, registered: reg })).includes('not_synthetic'));
});

test('F11 CLI: exits 0 on the real repo and 1 on a violating tree', async () => {
  const { execFileSync } = await import('node:child_process');
  const cli = path.join(REPO, 'exam-content/tools/check-public-boundary.mjs');
  assert.match(execFileSync(process.execPath, [cli], { encoding: 'utf8' }), /^PASS/);
  const bad = fakeRepo();
  write(bad, 'exam-content/forms/synthetic/b1-synthetic-s0/h1.mp3', 'x');
  assert.throws(() => execFileSync(process.execPath, [cli, bad], { stdio: 'pipe' }), (e) => e.status === 1 && /media_file/.test(String(e.stderr)));
});
