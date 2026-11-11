#!/usr/bin/env node
/* REGISTRY PREFLIGHT, read-only: before a learner release is imported into an exam D1, compare what its registry would
   write with what the database already holds. SCHEMA §2: IDs are immutable, so changed content needs a new revision
   and never overwrites rows that attempts and results already reference. Verdict per form:
     new        no row with this form id or any of its item ids exists → importable
     identical  already imported with the same packages, items and keys → leave it out of this release
     conflict   the id exists with different content, or one of its item ids belongs to another form → needs a new
                revision; importing would fail (learner registries use plain INSERT) or, in a test registry, rewrite
                history
   A level config already present with different JSON is a conflict too. Exit 0 only if every form is "new" and nothing
   conflicts. It changes nothing.

   Usage: node exam-content/tools/registry-preflight.mjs --forms p3,p8,p13 --existing <dir with the five exports>
          node exam-content/tools/registry-preflight.mjs --export-commands <db-name> <wrangler-config>   (prints them) */
import fs from 'node:fs';
import path from 'node:path';
import { buildRelease } from './build-release.mjs';
import { selectForms } from './release-candidate.mjs';

export const EXPORTS = {
  forms: 'SELECT id FROM forms',
  form_modules: 'SELECT form_id, module, package_sha256 FROM form_modules',
  items_index: 'SELECT item_id, form_id FROM items_index',
  item_keys: 'SELECT item_id, key_json FROM item_keys',
  level_configs: 'SELECT id, json FROM level_configs'
};

/* build.rows (from buildRelease) vs existing { table: [rows] } → { ok, forms: [{ id, verdict, reasons }], level_configs: [...] } */
export function preflight(build, existing) {
  for (const t of Object.keys(EXPORTS)) if (!Array.isArray(existing[t])) throw new Error(`existing export "${t}" is missing or not a list of rows`);
  const ex = {
    forms: new Set(existing.forms.map((r) => r.id)),
    modules: new Map(existing.form_modules.map((r) => [`${r.form_id}|${r.module}`, r.package_sha256])),
    owner: new Map(existing.items_index.map((r) => [r.item_id, r.form_id])),
    keys: new Map(existing.item_keys.map((r) => [r.item_id, r.key_json])),
    lc: new Map(existing.level_configs.map((r) => [r.id, r.json]))
  };
  const forms = build.rows.forms.map(({ id }) => {
    const mods = build.rows.form_modules.filter((m) => m.form_id === id);
    const items = build.rows.items_index.filter((i) => i.form_id === id).map((i) => i.item_id);
    const keyOf = Object.fromEntries(build.rows.item_keys.filter((k) => items.includes(k.item_id)).map((k) => [k.item_id, k.key_json]));
    const reasons = [];
    const formExists = ex.forms.has(id);
    const foreign = items.filter((it) => ex.owner.has(it) && ex.owner.get(it) !== id);
    if (foreign.length) reasons.push(`${foreign.length} item id(s) already belong to another form (e.g. ${foreign[0]} → ${ex.owner.get(foreign[0])})`);
    if (!formExists) {
      const present = items.filter((it) => ex.owner.get(it) === id || ex.keys.has(it));
      if (present.length && !foreign.length) reasons.push(`${present.length} item id(s) exist without their form row`);
      return { id, verdict: reasons.length ? 'conflict' : 'new', reasons };
    }
    for (const m of mods) {
      const have = ex.modules.get(`${id}|${m.module}`);
      if (have !== m.package_sha256) reasons.push(`module ${m.module}: package differs (${have ? 'changed content' : 'missing'})`);
    }
    const changedKeys = items.filter((it) => ex.keys.get(it) !== keyOf[it]);
    if (changedKeys.length) reasons.push(`${changedKeys.length} item key/explanation record(s) differ (e.g. ${changedKeys[0]})`);
    const missing = items.filter((it) => !ex.owner.has(it));
    if (missing.length) reasons.push(`${missing.length} item(s) missing from the registry`);
    return { id, verdict: reasons.length ? 'conflict' : 'identical', reasons };
  });
  const level_configs = build.rows.level_configs.map(({ id, json }) => ({ id, verdict: !ex.lc.has(id) ? 'new' : ex.lc.get(id) === json ? 'identical' : 'conflict' }));
  const ok = forms.every((f) => f.verdict === 'new') && level_configs.every((l) => l.verdict !== 'conflict');
  return { ok, forms, level_configs };
}

/* wrangler d1 execute --json writes [{ results: [...] }]; plain arrays of rows are accepted too */
export function readExports(dir) {
  const out = {};
  for (const t of Object.keys(EXPORTS)) {
    const f = path.join(dir, `${t}.json`);
    if (!fs.existsSync(f)) throw new Error(`missing export ${f}`);
    const raw = fs.readFileSync(f, 'utf8');
    const j = JSON.parse(raw.slice(raw.search(/[[{]/)));
    out[t] = Array.isArray(j) && j.length && j[0] && Array.isArray(j[0].results) ? j.flatMap((x) => x.results) : j;
  }
  return out;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const a = process.argv.slice(2), opt = (k) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : null; };
  if (a[0] === '--export-commands') {
    const [db, cfg] = [a[1], a[2]];
    if (!db) { console.error('usage: --export-commands <db-name> [wrangler-config]'); process.exit(2); }
    for (const [t, q] of Object.entries(EXPORTS)) console.log(`npx wrangler d1 execute ${db}${cfg ? ` --config ${cfg}` : ''} --remote --json --command "${q}" > <dir>/${t}.json`);
    process.exit(0);
  }
  try {
    const forms = selectForms(opt('--forms'));
    const existing = readExports(opt('--existing') || '');
    const build = buildRelease({ release: 'r999', purpose: 'learner', formDirs: forms.map((f) => f.dir) });
    const r = preflight(build, existing);
    for (const f of r.forms) console.log(`${f.id}: ${f.verdict}${f.reasons.length ? ' — ' + f.reasons.join('; ') : ''}`);
    for (const l of r.level_configs) if (l.verdict === 'conflict') console.log(`${l.id}: level config differs from the one in the database`);
    console.log(r.ok ? 'PREFLIGHT OK: every form is new; the learner registry can be imported' : 'PREFLIGHT REFUSED: do not import (identical forms: leave them out; conflicts: create a new revision, SCHEMA §2)');
    process.exit(r.ok ? 0 : 1);
  } catch (e) { console.error(`registry-preflight: ${e.message}`); process.exit(1); }
}
