/* SCHEMA §2 (IDs are immutable) at import time: a learner registry never replaces rows (plain INSERT, the whole import
   aborts on an existing id), and tools/registry-preflight.mjs says before the import whether each form is new,
   identical or in conflict with what a database already holds. Uses the real migrations in an in-memory D1. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { buildRelease } from '../tools/build-release.mjs';
import { preflight, readExports, EXPORTS } from '../tools/registry-preflight.mjs';
import { createExamD1 } from '../../exam-worker/test/harness.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const P3 = path.join(ROOT, 'forms/synthetic/b1-synthetic-p3'), P8 = path.join(ROOT, 'forms/synthetic/b1-synthetic-p8');
const builtAt = '2026-10-20T00:00:00.000Z';
const learner = (dirs, release = 'r101') => buildRelease({ release, purpose: 'learner', formDirs: dirs, builtAt });
const exportOf = (db) => Object.fromEntries(Object.entries(EXPORTS).map(([t, q]) => [t, db.raw.prepare(q).all().map((r) => ({ ...r }))]));
const count = (db) => Object.fromEntries(['forms', 'items_index', 'item_keys', 'form_modules', 'form_assets'].map((t) => [t, db.raw.prepare(`SELECT COUNT(*) AS n FROM ${t}`).get().n]));

/* a copy of P3 outside the repository with one change applied to its files */
function variant(change) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-p3-variant-'));
  for (const f of fs.readdirSync(P3)) fs.copyFileSync(path.join(P3, f), path.join(dir, f));
  change(dir);
  return dir;
}
const editJson = (dir, file, fn) => { const p = path.join(dir, file); const j = JSON.parse(fs.readFileSync(p, 'utf8')); fn(j); fs.writeFileSync(p, JSON.stringify(j, null, 2)); };

test('PREFLIGHT: an empty database → every form new, OK; after the import → identical, refused (leave it out)', () => {
  const db = createExamD1();
  const b = learner([P3, P8]);
  let r = preflight(b, exportOf(db));
  assert.equal(r.ok, true); assert.deepEqual(r.forms.map((f) => f.verdict), ['new', 'new']);
  db.raw.exec(b.sql);
  r = preflight(learner([P3, P8], 'r102'), exportOf(db));   // same content, another release id
  assert.equal(r.ok, false); assert.deepEqual(r.forms.map((f) => f.verdict), ['identical', 'identical']);
});

test('PREFLIGHT: same form id with changed content → conflict (explanation in the keys; stem in the package)', () => {
  const db = createExamD1();
  db.raw.exec(learner([P3]).sql);
  const expl = variant((d) => editJson(d, 'items.json', (items) => { items.find((i) => i.id === 'itm:b1:p3-l1-02').feedback.explanation_de += ' (geändert)'; }));
  const stem = variant((d) => editJson(d, 'items.json', (items) => { items.find((i) => i.id === 'itm:b1:p3-l1-01').stem = '1. Tomasz fährt jeden Tag mit dem Bus zur Arbeit.'; }));
  try {
    let r = preflight(learner([expl]), exportOf(db));
    assert.equal(r.ok, false); assert.equal(r.forms[0].verdict, 'conflict');
    assert.match(r.forms[0].reasons.join(' '), /1 item key\/explanation record\(s\) differ \(e\.g\. itm:b1:p3-l1-02\)/);
    r = preflight(learner([stem]), exportOf(db));
    assert.equal(r.forms[0].verdict, 'conflict'); assert.match(r.forms[0].reasons.join(' '), /module lesen: package differs/);
  } finally { fs.rmSync(expl, { recursive: true, force: true }); fs.rmSync(stem, { recursive: true, force: true }); }
});

test('PREFLIGHT: a new form revision that reuses item ids of another form → conflict (items_index.item_id is global)', () => {
  const db = createExamD1();
  db.raw.exec(learner([P3]).sql);
  const rev2 = variant((d) => { editJson(d, 'form.json', (f) => { f.id = 'frm:b1:synthetic-p3@2'; f.rev = 2; }); editJson(d, 'keys.json', (k) => { k.form_id = 'frm:b1:synthetic-p3@2'; }); });
  try {
    const r = preflight(learner([rev2]), exportOf(db));
    assert.equal(r.forms[0].verdict, 'conflict');
    assert.match(r.forms[0].reasons[0], /item id\(s\) already belong to another form \(e\.g\. itm:b1:p3-[a-z0-9-]+ → frm:b1:synthetic-p3@1\)/);
  } finally { fs.rmSync(rev2, { recursive: true, force: true }); }
});

test('LEARNER REGISTRY: plain INSERT — importing over existing ids aborts the whole import and changes nothing', () => {
  const db = createExamD1();
  const first = learner([P3]);
  assert.match(first.sql, /-- purpose learner: no row is replaced/);
  assert.equal(/INSERT OR REPLACE INTO (forms|form_modules|items_index|item_keys|form_assets)/.test(first.sql), false);
  db.raw.exec(first.sql);
  const before = count(db);
  const changed = variant((d) => editJson(d, 'items.json', (items) => { items.find((i) => i.id === 'itm:b1:p3-l1-02').feedback.explanation_de += ' (geändert)'; }));
  try {
    assert.throws(() => db.raw.exec(learner([changed], 'r102').sql), /UNIQUE constraint failed/);
    try { db.raw.exec('ROLLBACK'); } catch { /* the failed transaction may already be closed */ }
    assert.deepEqual(count(db), before);
    const k = JSON.parse(db.raw.prepare("SELECT key_json FROM item_keys WHERE item_id = 'itm:b1:p3-l1-02'").get().key_json);
    assert.equal(/geändert/.test(JSON.stringify(k)), false, 'the original key record is untouched');
  } finally { fs.rmSync(changed, { recursive: true, force: true }); }
  // test/dev registries keep their re-import behaviour
  const t = buildRelease({ release: 'r000', purpose: 'test', formDirs: [P3], builtAt });
  assert.match(t.sql, /INSERT OR REPLACE INTO forms/);
});

test('PREFLIGHT: level config with different JSON → conflict; exports in wrangler --json format; CLI prints the export commands', () => {
  const db = createExamD1();
  const b = learner([P3]);
  db.raw.exec(b.sql);
  const ex = exportOf(db);
  ex.level_configs = ex.level_configs.map((l) => ({ ...l, json: l.json.replace('"B1"', '"B2"') }));
  ex.forms = []; ex.form_modules = []; ex.items_index = []; ex.item_keys = [];
  const r = preflight(b, ex);
  assert.equal(r.ok, false); assert.equal(r.level_configs[0].verdict, 'conflict');
  assert.throws(() => preflight(b, { forms: [] }), /missing or not a list/);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-exports-'));
  try {
    for (const [t, rows] of Object.entries(exportOf(createExamD1()))) fs.writeFileSync(path.join(dir, `${t}.json`), ` ⛅️ wrangler\n${JSON.stringify([{ results: rows, success: true }])}`);
    assert.deepEqual(Object.keys(readExports(dir)).sort(), Object.keys(EXPORTS).sort());
    const cli = spawnSync(process.execPath, [path.join(ROOT, 'tools/registry-preflight.mjs'), '--forms', 'p3,p8', '--existing', dir], { encoding: 'utf8' });
    assert.equal(cli.status, 0, cli.stderr); assert.match(cli.stdout, /PREFLIGHT OK/);
    const s0 = spawnSync(process.execPath, [path.join(ROOT, 'tools/registry-preflight.mjs'), '--forms', 's0', '--existing', dir], { encoding: 'utf8' });
    assert.equal(s0.status, 1); assert.match(s0.stderr, /unknown practice form "s0"/);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
  const cmds = spawnSync(process.execPath, [path.join(ROOT, 'tools/registry-preflight.mjs'), '--export-commands', 'klarweg-exam'], { encoding: 'utf8' });
  assert.equal(cmds.stdout.trim().split('\n').length, 5); assert.match(cmds.stdout, /--remote --json --command "SELECT item_id, key_json FROM item_keys"/);
});
