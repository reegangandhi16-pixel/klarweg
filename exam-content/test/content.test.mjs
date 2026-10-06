/* VALIDATION: the content validator rejects every class of broken form, the
   synthetic generator is deterministic, and release builds never leak keys. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { validateForm } from '../tools/validate.mjs';
import { buildRelease, assertNoLeak } from '../tools/build-release.mjs';
import { countWords } from '../schemas/content-model.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FORM = path.join(ROOT, 'forms/synthetic/b1-synthetic-s0');
const FILES = ['form.json', 'tasks.json', 'items.json', 'keys.json', 'assets.json'];

function mutated(mutate) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-exam-form-'));
  const d = Object.fromEntries(FILES.map((f) => [f.replace('.json', ''), JSON.parse(fs.readFileSync(path.join(FORM, f), 'utf8'))]));
  mutate(d);
  for (const f of FILES) { const k = f.replace('.json', ''); if (d[k] !== undefined) fs.writeFileSync(path.join(dir, f), JSON.stringify(d[k])); }
  return dir;
}
const codes = (dir) => validateForm(dir).errors.map((e) => e.code);
const expectCode = (code, mutate) => {
  const c = codes(mutated(mutate));
  assert.ok(c.includes(code), `expected ${code}, got ${JSON.stringify([...new Set(c)])}`);
};
const item = (d, id) => d.items.find((i) => i.id === id);

test('VALIDATION: the synthetic form passes with no errors or warnings', () => {
  const v = validateForm(FORM);
  assert.deepEqual(v.errors, []); assert.deepEqual(v.warnings, []);
  assert.equal(v.stats.items, 74); assert.equal(v.stats.tasks, 21); assert.equal(v.stats.assets, 51);
});

test('VALIDATION: synthetic generator output is committed and deterministic (--check)', () => {
  assert.doesNotThrow(() => execFileSync(process.execPath, [path.join(ROOT, 'tools/make-synthetic-form.mjs'), '--check'], { stdio: 'pipe' }));
});

test('VALIDATION: unique ids / duplicate items', () => {
  expectCode('duplicate_id', (d) => { d.items.push({ ...d.items[3] }); });
  expectCode('duplicate_item', (d) => { item(d, 'itm:b1:syn-l1-02').stem = item(d, 'itm:b1:syn-l1-01').stem; });
});

test('VALIDATION: required fields, bad ids, invalid enums', () => {
  expectCode('required_field', (d) => { delete d.form.label; });
  expectCode('bad_id', (d) => { d.items[2].id = 'item-without-prefix'; });
  expectCode('bad_enum', (d) => { d.form.kind = 'exam'; });
  expectCode('bad_enum', (d) => { d.items[2].interaction = 'drag_drop'; });
});

test('VALIDATION: invalid form revision', () => {
  expectCode('bad_revision', (d) => { d.form.rev = 2; });
  expectCode('bad_revision', (d) => { d.form.rev = 0; });
});

test('VALIDATION: missing module / duplicate module / missing files', () => {
  expectCode('missing_module', (d) => { d.form.modules = d.form.modules.filter((m) => m.module !== 'hoeren'); });
  expectCode('duplicate_module', (d) => { d.form.modules.push(d.form.modules[0]); });
  expectCode('missing_file', (d) => { d.keys = undefined; });
});

test('VALIDATION: part counts and item counts', () => {
  expectCode('part_count', (d) => { d.form.modules[0].parts.pop(); });
  expectCode('item_count', (d) => {
    const p = d.form.modules[0].parts[0]; const gone = p.item_order.pop().item_id;
    const t = d.tasks.find((x) => x.items.includes(gone)); t.items = t.items.filter((x) => x !== gone);
    d.items = d.items.filter((x) => x.id !== gone); delete d.keys.keys[gone];
  });
});

test('VALIDATION: key completeness, key kind, key option membership, orphan keys, keys inside items', () => {
  expectCode('missing_key', (d) => { delete d.keys.keys['itm:b1:syn-l1-03']; });
  expectCode('key_not_option', (d) => { d.keys.keys['itm:b1:syn-l1-03'] = { kind: 'single', correct: 'vielleicht' }; });
  expectCode('key_kind', (d) => { d.keys.keys['itm:b1:syn-l1-03'] = { kind: 'rubric', rubric_id: 'rub:b1:schreiben:p1@1' }; });
  expectCode('orphan_key', (d) => { d.keys.keys['itm:b1:ghost'] = { kind: 'single', correct: 'a' }; });
  expectCode('key_in_item', (d) => { item(d, 'itm:b1:syn-l1-03').correct = 'richtig'; });
  expectCode('key_form_mismatch', (d) => { d.keys.form_id = 'frm:b1:other@1'; });
});

test('VALIDATION: asset references', () => {
  expectCode('missing_asset', (d) => { d.tasks[0].stimuli[0].asset_id = 'ast:nowhere'; });
});

test('VALIDATION: scoring totals (objective items must equal the table max)', () => {
  expectCode('scoring_total', (d) => { const it = item(d, 'itm:b1:syn-l1-03'); it.is_example = true; it.example_answer = d.keys.keys[it.id].correct; });
});

test('VALIDATION: timing totals and overrides only for synthetic forms', () => {
  expectCode('timing_total', (d) => { d.form.timing_overrides.hoeren.review_seconds = 5000; });
  expectCode('override_not_allowed', (d) => { d.form.kind = 'mock'; });
});

test('VALIDATION: difficulty metadata required on real forms; synthetic audio forbidden in real forms', () => {
  const c = codes(mutated((d) => { d.form.kind = 'mock'; delete d.form.timing_overrides; d.form.id = 'frm:b1:mock-x@1'; d.keys.form_id = d.form.id; }));
  assert.ok(c.includes('difficulty_metadata'), JSON.stringify([...new Set(c)]));
  assert.ok(c.includes('synthetic_audio_in_real_form') || c.includes('synthetic_asset_in_real_form'));
});

test('VALIDATION: matching pool constraints and speaker balance', () => {
  expectCode('matching_pool', (d) => { d.keys.keys['itm:b1:syn-l3-14'] = { ...d.keys.keys['itm:b1:syn-l3-13'] }; });
  expectCode('speaker_balance', (d) => { for (const it of d.items.filter((i) => i.interaction === 'speaker_assignment' && !i.is_example)) d.keys.keys[it.id] = { kind: 'single', correct: 'a' }; });
});

test('BUILD: release packages are keyless; leak scanner trips on any server-only field', () => {
  const b = buildRelease({ release: 'r000', formDirs: [FORM], builtAt: '2026-10-04T00:00:00.000Z' });
  const pkgs = [...b.files.entries()].filter(([k]) => /\/forms\/.+\/module-/.test(k));
  assert.equal(pkgs.length, 4);
  for (const [k, buf] of pkgs) {
    const t = buf.toString('utf8');
    assert.equal(/"(correct|key|key_json|keys|provenance|indicators|calibration)"\s*:/.test(t), false, k);
  }
  assert.throws(() => assertNoLeak({ parts: [{ items: [{ correct: 'a' }] }] }, 't'), /leaks/);
  assert.throws(() => assertNoLeak({ x: { provenance: {} } }, 't'), /leaks/);
  assert.throws(() => buildRelease({ release: 'bad', formDirs: [FORM] }), /invalid release/);
  const broken = mutated((d) => { delete d.keys.keys['itm:b1:syn-l1-03']; });
  assert.throws(() => buildRelease({ release: 'r000', formDirs: [broken] }), /failed validation/);
  // determinism: same inputs → identical bytes
  const b2 = buildRelease({ release: 'r000', formDirs: [FORM], builtAt: '2026-10-04T00:00:00.000Z' });
  for (const [k, buf] of b.files) assert.ok(buf.equals(b2.files.get(k)), k);
  assert.equal(b.sql, b2.sql);
});

test('BUILD: registry SQL imports cleanly into the exam migration schema', async () => {
  const { createExamD1 } = await import('../../exam-worker/test/harness.mjs');
  const db = createExamD1();
  const b = buildRelease({ release: 'r000', formDirs: [FORM], builtAt: '2026-10-04T00:00:00.000Z' });
  db.raw.exec(b.sql);
  const n = (t) => db.raw.prepare(`SELECT COUNT(*) AS n FROM ${t}`).get().n;
  assert.equal(n('forms'), 1); assert.equal(n('form_modules'), 4); assert.equal(n('items_index'), 74); assert.equal(n('item_keys'), 74);
  assert.equal(db.raw.prepare('SELECT SUM(points) AS n FROM items_index').get().n, 60);   // 30 Lesen + 30 Hören
});

test('WRITING: word count — German characters, punctuation-only tokens, empty input', () => {
  assert.equal(countWords('Größe Straße Übung äöüß'), 4);
  assert.equal(countWords('  Hallo — Welt  '), 2);
  assert.equal(countWords('z. B. 2026'), 3);
  assert.equal(countWords(''), 0); assert.equal(countWords('   '), 0); assert.equal(countWords(null), 0);
  assert.equal(countWords('E-Mail-Adresse, bitte!'), 2);
});

test('BUILD: real (non-synthetic) forms are refused when their source is inside the public product repo (also via symlink)', () => {
  const fakeRepo = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-fake-repo-'));
  const inside = path.join(fakeRepo, 'exam-content/forms/mock-x');
  fs.mkdirSync(inside, { recursive: true });
  for (const f of FILES) fs.copyFileSync(path.join(FORM, f), path.join(inside, f));
  const form = JSON.parse(fs.readFileSync(path.join(inside, 'form.json'), 'utf8'));
  form.kind = 'mock';
  fs.writeFileSync(path.join(inside, 'form.json'), JSON.stringify(form));
  assert.throws(() => buildRelease({ release: 'r000', formDirs: [inside], repoRoot: fakeRepo }), /public product repo/);
  const outside = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-outside-'));
  const link = path.join(outside, 'link');
  fs.symlinkSync(inside, link);
  assert.throws(() => buildRelease({ release: 'r000', formDirs: [link], repoRoot: fakeRepo }), /public product repo/);
});
