#!/usr/bin/env node
/* EXTERNAL-REVIEW HANDOFF PACK STRUCTURE CHECK (docs/exam/handoff-packs/).
   These packs prepare the five outstanding external reviews of the proposed Lesen-only release
   (see docs/exam/handoff-packs/README.md). This check is structural only: it cannot verify that a
   pack's facts are current, only that a pack has not silently dropped its draft status, its required
   sections, or its "internal only" guarantee.

   Checks:
     1. Every non-README file in the directory carries the DRAFT status banner.
     2. Every non-README file contains each of the required section headings.
     3. The directory is never published: no line of .github/pages-allowlist.txt names it, as a
        literal path or as a GLOB prefix.
     4. README.md links to every pack file present, and every link it gives resolves to a real file.

   Usage: node exam-content/tools/check-review-packs.mjs [repoRoot]
   Exit 0 = PASS, 1 = FAIL (every violation listed). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DEFAULT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const PACKS_DIR = 'docs/exam/handoff-packs';

const STATUS_BANNER = /\*\*Status: DRAFT, internal preparation only/;

const REQUIRED_SECTIONS = [
  'Scope and exclusions',
  'Existing specifications, evidence and file references',
  'Reviewer checklist',
  'Findings template',
  'Acceptance criteria',
  'Known gaps and unresolved owner decisions',
  'What the reviewer must independently verify',
];

export function checkReviewPacks({ repoRoot = DEFAULT_ROOT } = {}) {
  const errors = [];
  const E = (code, rel, msg) => errors.push({ code, path: rel, msg });

  const dirAbs = path.join(repoRoot, PACKS_DIR);
  let entries;
  try {
    entries = fs.readdirSync(dirAbs).filter((f) => f.endsWith('.md'));
  } catch {
    E('missing_directory', PACKS_DIR, 'handoff-packs directory does not exist');
    return { ok: false, errors };
  }

  const packFiles = entries.filter((f) => f !== 'README.md').sort();
  if (packFiles.length === 0) E('no_packs', PACKS_DIR, 'no pack files found (besides README.md)');

  for (const file of packFiles) {
    const rel = `${PACKS_DIR}/${file}`;
    const text = fs.readFileSync(path.join(dirAbs, file), 'utf8');

    if (!STATUS_BANNER.test(text)) {
      E('missing_draft_banner', rel, 'does not carry the "**Status: DRAFT, internal preparation only" banner');
    }
    for (const heading of REQUIRED_SECTIONS) {
      if (!text.includes(heading)) E('missing_section', rel, `missing required section "${heading}"`);
    }
  }

  /* rule 3: never published */
  const allowlistRel = '.github/pages-allowlist.txt';
  let allowlist = '';
  try { allowlist = fs.readFileSync(path.join(repoRoot, allowlistRel), 'utf8'); } catch { /* no allowlist file: nothing to check */ }
  for (const line of allowlist.split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const target = t.startsWith('GLOB:') ? t.slice('GLOB:'.length) : t;
    if (target === PACKS_DIR || target.startsWith(`${PACKS_DIR}/`) || target.startsWith('docs/') || target.startsWith('GLOB:docs/')) {
      E('published', allowlistRel, `allowlist line "${t}" would publish the internal-only handoff packs`);
    }
  }

  /* rule 4: README links to every pack, and every link it gives resolves */
  const readmeAbs = path.join(dirAbs, 'README.md');
  let readme = '';
  try { readme = fs.readFileSync(readmeAbs, 'utf8'); } catch { E('missing_readme', `${PACKS_DIR}/README.md`, 'README.md does not exist'); }
  if (readme) {
    for (const file of packFiles) {
      if (!readme.includes(`(./${file})`)) E('readme_missing_link', `${PACKS_DIR}/README.md`, `does not link to ${file}`);
    }
    const linked = [...readme.matchAll(/\]\(\.\/([A-Za-z0-9_.-]+\.md)\)/g)].map((m) => m[1]);
    for (const l of linked) {
      if (!fs.existsSync(path.join(dirAbs, l))) E('readme_broken_link', `${PACKS_DIR}/README.md`, `links to ${l}, which does not exist`);
    }
  }

  return { ok: errors.length === 0, errors };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const root = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_ROOT;
  const r = checkReviewPacks({ repoRoot: root });
  if (r.ok) console.log('PASS review-pack structure: draft banner, required sections, internal-only, README links');
  else {
    for (const e of r.errors) console.error(`FAIL ${e.code} ${e.path} — ${e.msg}`);
    process.exit(1);
  }
}
