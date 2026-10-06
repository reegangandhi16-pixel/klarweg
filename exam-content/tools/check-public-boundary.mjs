#!/usr/bin/env node
/* PUBLIC-REPOSITORY BOUNDARY CHECK.
   The Klarweg product repository is PUBLIC. Real exam forms, answer keys and
   exam media belong only in the private exam content repository. This check
   fails deterministically if the working tree contains anything else.

   Rules (independent; the first one is the decisive provenance check):
     1. Every exam form in this repo must be BYTE-IDENTICAL to the output of
        the registered synthetic generator (tools/make-synthetic-form.mjs).
        A real form relabelled "synthetic" cannot match it.
     2. Registered forms must also carry synthetic provenance: kind synthetic,
        synthetic form id, synthetic_test licences, generator-only audio,
        synthetic_fixture originality checks.
     3. exam-content/ may only contain the known layout (levels, schemas,
        tools, test, forms/synthetic/<registered form>).
     4. No symbolic links anywhere in the exam trees (no pointing out to
        external content).
     5. No media files (audio/image/video/PDF) in the exam trees: TEST AUDIO
        is generated at build time and never committed.
     6. Anywhere in the repo, no data file (JSON/YAML/CSV/…) may contain
        answer-key-shaped data for exam items, except the registered synthetic
        keys file.

   Usage: node exam-content/tools/check-public-boundary.mjs [repoRoot]
   Exit 0 = PASS, 1 = FAIL (every violation listed). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SYNTHETIC_FORMS } from './make-synthetic-form.mjs';

const DEFAULT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const EXAM_TREES = ['exam-content', 'exam', 'exam-worker', 'docs/exam'];
const SKIP_DIRS = new Set(['.git', 'node_modules']);
const IGNORE_NAMES = new Set(['.DS_Store']);
const MEDIA_EXT = /\.(mp3|wav|ogg|oga|opus|m4a|aac|flac|webm|mp4|m4v|mov|avi|png|jpe?g|gif|webp|svg|tiff?|bmp|pdf)$/i;
const DATA_EXT = /\.(json|jsonl|ndjson|ya?ml|csv|tsv|txt|xml)$/i;
const MAX_SCAN_BYTES = 8 * 1024 * 1024;
const ITEM_ID = /itm:(?:a1|a2|b1|b2|c1|c2):[a-z0-9-]+/;
const KEY_MARKERS = /\b(correct|correct_option|correct_answer|solution|answer_key|answerkey|key)\b/i;   // any data format: JSON field, CSV/TSV header, YAML key
const FORM_FILES = ['form.json', 'tasks.json', 'items.json', 'keys.json', 'assets.json'];
const ALLOWED_LAYOUT = [
  /^exam-content\/levels\/[a-z0-9]+\/level-config\.json$/,
  /^exam-content\/schemas\/[a-z0-9-]+\.mjs$/,
  /^exam-content\/tools\/[a-z0-9-]+\.mjs$/,
  /^exam-content\/test\/[a-z0-9-]+\.test\.mjs$/,
  /^exam-content\/forms\/synthetic\/[a-z0-9-]+\/(form|tasks|items|keys|assets)\.json$/
];

function walk(root, rel, out) {
  const abs = path.join(root, rel);
  let st;
  try { st = fs.lstatSync(abs); } catch { return; }
  if (st.isSymbolicLink()) { out.push({ rel, symlink: true }); return; }
  if (st.isDirectory()) {
    for (const name of fs.readdirSync(abs).sort()) {
      if (SKIP_DIRS.has(name)) continue;
      walk(root, rel ? `${rel}/${name}` : name, out);
    }
    return;
  }
  if (st.isFile() && !IGNORE_NAMES.has(path.basename(rel))) out.push({ rel, size: st.size });
}

export function checkPublicBoundary({ repoRoot = DEFAULT_ROOT, registered = SYNTHETIC_FORMS } = {}) {
  const errors = [];
  const E = (code, p, msg) => errors.push({ code, path: p, msg });
  const registeredFiles = new Map();
  for (const f of registered) for (const [name, content] of Object.entries(f.files)) registeredFiles.set(`exam-content/${f.rel}/${name}`, content);

  /* rules 3–5: exam trees */
  for (const tree of EXAM_TREES) {
    const files = [];
    walk(repoRoot, tree, files);
    for (const f of files) {
      if (f.symlink) { E('symlink', f.rel, 'symbolic links are not allowed in exam trees (could point at private/external content)'); continue; }
      if (MEDIA_EXT.test(f.rel)) E('media_file', f.rel, 'exam media must not be committed (TEST AUDIO is generated at build time; real media lives in the private content repo)');
      if (tree === 'exam-content' && !ALLOWED_LAYOUT.some((re) => re.test(f.rel))) E('unexpected_file', f.rel, 'not part of the allowed public exam-content layout');
    }
  }

  /* rules 1–2: every form directory, anywhere in the repo */
  const all = [];
  walk(repoRoot, '', all);
  const formDirs = new Set(all.filter((f) => !f.symlink && FORM_FILES.includes(path.basename(f.rel)) && path.basename(f.rel) === 'form.json').map((f) => path.dirname(f.rel)));
  for (const f of all) if (!f.symlink && path.basename(f.rel) === 'keys.json') formDirs.add(path.dirname(f.rel));
  for (const dir of formDirs) {
    const reg = registered.find((r) => `exam-content/${r.rel}` === dir);
    if (!reg) {
      // only directories that really look like exam forms (not unrelated form.json files elsewhere)
      const looksLikeExam = FORM_FILES.some((n) => { try { return ITEM_ID.test(fs.readFileSync(path.join(repoRoot, dir, n), 'utf8')) || /"frm:[a-z0-9]+:/.test(fs.readFileSync(path.join(repoRoot, dir, n), 'utf8')); } catch { return false; } });
      if (looksLikeExam || dir.startsWith('exam-content/')) E('unregistered_form', dir, 'exam form is not a registered synthetic generator output — real forms belong in the private content repo');
      continue;
    }
    for (const name of FORM_FILES) {
      const rel = `${dir}/${name}`;
      let actual = null;
      try { actual = fs.readFileSync(path.join(repoRoot, rel), 'utf8'); } catch { /* missing */ }
      if (actual !== reg.files[name]) E('not_generator_output', rel, 'differs from the registered synthetic generator output (edited or relabelled content)');
    }
    const extra = all.filter((f) => path.dirname(f.rel) === dir && !FORM_FILES.includes(path.basename(f.rel)));
    for (const x of extra) E('unexpected_file', x.rel, 'extra file inside a synthetic form directory');
    provenance(reg, dir, E);
  }

  /* rule 6: answer-key-shaped data anywhere */
  for (const f of all) {
    if (f.symlink || !DATA_EXT.test(f.rel) || f.size > MAX_SCAN_BYTES) continue;
    if (registeredFiles.has(f.rel)) continue;   // registered synthetic files are already byte-checked
    let text;
    try { text = fs.readFileSync(path.join(repoRoot, f.rel), 'utf8'); } catch { continue; }
    if (ITEM_ID.test(text) && KEY_MARKERS.test(text)) E('answer_keys_in_public_repo', f.rel, 'contains exam item ids together with answer-key fields');
  }

  return { ok: errors.length === 0, errors };
}

/* rule 2: synthetic provenance of a registered form (defence in depth) */
function provenance(reg, dir, E) {
  const j = (n) => JSON.parse(reg.files[n]);
  const form = j('form.json'), items = j('items.json'), assets = j('assets.json'), keys = j('keys.json');
  if (form.kind !== 'synthetic') E('not_synthetic', `${dir}/form.json`, `form.kind is ${form.kind}`);
  if (!/^frm:[a-z0-9]+:synthetic-[a-z0-9-]+@\d+$/.test(form.id || '')) E('not_synthetic', `${dir}/form.json`, `form id ${form.id} is not a synthetic id`);
  if (keys.form_id !== form.id) E('not_synthetic', `${dir}/keys.json`, 'keys belong to another form');
  for (const a of assets) {
    if (a.licence?.kind !== 'synthetic_test') E('not_synthetic', `${dir}/assets.json`, `asset ${a.id} licence ${a.licence?.kind}`);
    if (a.kind === 'audio') {
      const src = Object.keys(a.audio || {}).filter((k) => !['generator', 'plays'].includes(k));
      if (!a.audio?.generator || src.length) E('non_test_audio', `${dir}/assets.json`, `audio ${a.id} is not generator-only TEST AUDIO`);
      if (!/^TEST AUDIO/.test(a.label || '')) E('non_test_audio', `${dir}/assets.json`, `audio ${a.id} is not labelled TEST AUDIO`);
    }
    if (a.kind !== 'audio' && a.kind !== 'text') E('not_synthetic', `${dir}/assets.json`, `asset ${a.id} kind ${a.kind} is not allowed in a synthetic form`);
  }
  for (const it of items) {
    const oc = it.provenance?.originality_check;
    if (oc?.method !== 'synthetic_fixture' || it.provenance?.reference_material_used !== 'none') E('not_synthetic', `${dir}/items.json`, `item ${it.id} lacks synthetic provenance`);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const root = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_ROOT;
  const r = checkPublicBoundary({ repoRoot: root });
  if (r.ok) console.log('PASS public-repo boundary: only registered synthetic exam content');
  else {
    for (const e of r.errors) console.error(`FAIL ${e.code} ${e.path} — ${e.msg}`);
    process.exit(1);
  }
}
