#!/usr/bin/env node
/* NEW FORM REVISION (SCHEMA §2: IDs are immutable; editing content creates a new revision).
   Revision N+1 of a form gets a new form id (…@N+1, form.supersedes = …@N) and NEW ITEM IDS: every item id carries the
   revision suffix -r<N+1> and supersedes its predecessor. items_index.item_id and item_keys.item_id are global keys
   in D1, so only distinct item ids let revision N stay imported, unchanged and readable for the attempts that used it,
   next to revision N+1. Task and asset ids stay (they are scoped to the form in D1 and in the packages).
   The revision is an exact copy until the corrections are applied to the copy; it then needs fresh EX-03 records
   (its fingerprints differ; no approval carries forward, EX-03/O6).

   Usage: node exam-content/tools/revise-form.mjs <form-dir> <out-dir>   (out-dir: a new directory) */
import fs from 'node:fs';
import path from 'node:path';

const FILES = ['form.json', 'tasks.json', 'items.json', 'keys.json', 'assets.json'];
export const REV_SUFFIX = /-r(\d+)$/;
export const baseItemId = (id) => id.replace(REV_SUFFIX, '');
export const itemIdForRev = (id, rev) => (rev === 1 ? baseItemId(id) : `${baseItemId(id)}-r${rev}`);

/* files: { 'form.json': object, … } → the same structure for the next revision (deep copies; input untouched) */
export function nextRevision(files) {
  const form = files['form.json'];
  const [base, cur] = [form.id.split('@')[0], Number(form.id.split('@')[1])];
  if (!Number.isInteger(cur) || cur !== form.rev) throw new Error(`form ${form.id}: id revision and rev disagree`);
  const rev = cur + 1;
  const rename = new Map(files['items.json'].map((it) => [it.id, itemIdForRev(it.id, rev)]));
  // rename every exact occurrence of an item id (task item lists, item_order, keys, topic links …), nothing else
  const swap = (v) => (Array.isArray(v) ? v.map(swap) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [rename.get(k) || k, swap(x)])) : typeof v === 'string' && rename.has(v) ? rename.get(v) : v);
  const out = Object.fromEntries(FILES.map((f) => [f, swap(JSON.parse(JSON.stringify(files[f])))]));
  out['form.json'].id = `${base}@${rev}`; out['form.json'].rev = rev; out['form.json'].supersedes = form.id;
  out['keys.json'].form_id = out['form.json'].id;
  out['items.json'] = out['items.json'].map((it, i) => ({ ...it, rev, meta_version: 1, supersedes: files['items.json'][i].id }));
  return out;
}

export function reviseFormDir(dir, outDir) {
  if (fs.existsSync(outDir) && fs.readdirSync(outDir).length) throw new Error(`${outDir} is not empty`);
  const files = Object.fromEntries(FILES.map((f) => [f, JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'))]));
  const next = nextRevision(files);
  fs.mkdirSync(outDir, { recursive: true });
  for (const f of FILES) fs.writeFileSync(path.join(outDir, f), JSON.stringify(next[f], null, 2) + '\n');
  return next['form.json'].id;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [dir, out] = process.argv.slice(2);
  if (!dir || !out) { console.error('usage: revise-form.mjs <form-dir> <out-dir>'); process.exit(2); }
  try { console.log(JSON.stringify({ revision: reviseFormDir(dir, out), out: path.resolve(out) })); } catch (e) { console.error(`revise-form: ${e.message}`); process.exit(1); }
}
