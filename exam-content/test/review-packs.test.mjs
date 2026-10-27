/* docs/exam/handoff-packs/ structure check (exam-content/tools/check-review-packs.mjs). */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { checkReviewPacks } from '../tools/check-review-packs.mjs';

const REPO_ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');

function makeFixtureRoot() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'review-packs-'));
  fs.mkdirSync(path.join(root, 'docs/exam/handoff-packs'), { recursive: true });
  fs.mkdirSync(path.join(root, '.github'), { recursive: true });
  return root;
}

const GOOD_PACK = `# EX-09 handoff pack: example (internal, draft)

> **Status: DRAFT, internal preparation only — 2026-10-27.** Example fixture pack.

## 1. Scope and exclusions
in scope / out of scope

## 2. Existing specifications, evidence and file references
links here

## 3. Reviewer checklist
steps here

## 4. Findings template
fields here

## 5. Acceptance criteria
criteria here

## 6. Known gaps and unresolved owner decisions
gaps here

## 7. What the reviewer must independently verify
verification here
`;

const README = (packFiles) => `# Handoff packs (fixture)

${packFiles.map((f) => `- [${f}](./${f})`).join('\n')}
`;

test('REVIEW PACKS (real repo): the five shipped packs pass the structure check', () => {
  const r = checkReviewPacks({ repoRoot: REPO_ROOT });
  assert.ok(r.ok, `unexpected violations: ${JSON.stringify(r.errors, null, 2)}`);
});

test('REVIEW PACKS (real repo): exactly the five required reviews are present, no more, no fewer', () => {
  const dir = path.join(REPO_ROOT, 'docs/exam/handoff-packs');
  const packs = fs.readdirSync(dir).filter((f) => f.endsWith('.md') && f !== 'README.md').sort();
  assert.deepEqual(packs, [
    'EX-01-PRIVACY-HANDOFF-PACK.md',
    'EX-03-CONTENT-REVIEW-HANDOFF-PACK.md',
    'EX-04-ACCESSIBILITY-HANDOFF-PACK.md',
    'EX-05-SECURITY-HANDOFF-PACK.md',
    'EX-07-TRADEMARK-HANDOFF-PACK.md',
  ]);
});

test('REVIEW PACKS (fixture): a well-formed pack passes', () => {
  const root = makeFixtureRoot();
  fs.writeFileSync(path.join(root, 'docs/exam/handoff-packs/EX-09-EXAMPLE.md'), GOOD_PACK);
  fs.writeFileSync(path.join(root, 'docs/exam/handoff-packs/README.md'), README(['EX-09-EXAMPLE.md']));
  const r = checkReviewPacks({ repoRoot: root });
  assert.ok(r.ok, JSON.stringify(r.errors));
});

test('REVIEW PACKS (fixture): a pack missing the DRAFT banner fails', () => {
  const root = makeFixtureRoot();
  fs.writeFileSync(path.join(root, 'docs/exam/handoff-packs/EX-09-EXAMPLE.md'), GOOD_PACK.replace(/> \*\*Status:.*\n/, ''));
  fs.writeFileSync(path.join(root, 'docs/exam/handoff-packs/README.md'), README(['EX-09-EXAMPLE.md']));
  const r = checkReviewPacks({ repoRoot: root });
  assert.equal(r.ok, false);
  assert.ok(r.errors.some((e) => e.code === 'missing_draft_banner'));
});

test('REVIEW PACKS (fixture): a pack missing a required section fails', () => {
  const root = makeFixtureRoot();
  const broken = GOOD_PACK.replace('## 4. Findings template\nfields here\n\n', '');
  fs.writeFileSync(path.join(root, 'docs/exam/handoff-packs/EX-09-EXAMPLE.md'), broken);
  fs.writeFileSync(path.join(root, 'docs/exam/handoff-packs/README.md'), README(['EX-09-EXAMPLE.md']));
  const r = checkReviewPacks({ repoRoot: root });
  assert.equal(r.ok, false);
  assert.ok(r.errors.some((e) => e.code === 'missing_section' && e.msg.includes('Findings template')));
});

test('REVIEW PACKS (fixture): an allowlist entry that would publish the directory fails', () => {
  const root = makeFixtureRoot();
  fs.writeFileSync(path.join(root, 'docs/exam/handoff-packs/EX-09-EXAMPLE.md'), GOOD_PACK);
  fs.writeFileSync(path.join(root, 'docs/exam/handoff-packs/README.md'), README(['EX-09-EXAMPLE.md']));
  fs.writeFileSync(path.join(root, '.github/pages-allowlist.txt'), 'index.html\ndocs/exam/handoff-packs/EX-09-EXAMPLE.md\n');
  const r = checkReviewPacks({ repoRoot: root });
  assert.equal(r.ok, false);
  assert.ok(r.errors.some((e) => e.code === 'published'));
});

test('REVIEW PACKS (fixture): a broad "GLOB:docs/" allowlist entry also fails', () => {
  const root = makeFixtureRoot();
  fs.writeFileSync(path.join(root, 'docs/exam/handoff-packs/EX-09-EXAMPLE.md'), GOOD_PACK);
  fs.writeFileSync(path.join(root, 'docs/exam/handoff-packs/README.md'), README(['EX-09-EXAMPLE.md']));
  fs.writeFileSync(path.join(root, '.github/pages-allowlist.txt'), 'index.html\nGLOB:docs/*\n');
  const r = checkReviewPacks({ repoRoot: root });
  assert.equal(r.ok, false);
  assert.ok(r.errors.some((e) => e.code === 'published'));
});

test('REVIEW PACKS (fixture): README not linking to a pack fails', () => {
  const root = makeFixtureRoot();
  fs.writeFileSync(path.join(root, 'docs/exam/handoff-packs/EX-09-EXAMPLE.md'), GOOD_PACK);
  fs.writeFileSync(path.join(root, 'docs/exam/handoff-packs/README.md'), '# Handoff packs (fixture)\nno links here\n');
  const r = checkReviewPacks({ repoRoot: root });
  assert.equal(r.ok, false);
  assert.ok(r.errors.some((e) => e.code === 'readme_missing_link'));
});

test('REVIEW PACKS (fixture): a README link to a non-existent file fails', () => {
  const root = makeFixtureRoot();
  fs.writeFileSync(path.join(root, 'docs/exam/handoff-packs/EX-09-EXAMPLE.md'), GOOD_PACK);
  fs.writeFileSync(path.join(root, 'docs/exam/handoff-packs/README.md'), README(['EX-09-EXAMPLE.md', 'EX-10-GHOST.md']));
  const r = checkReviewPacks({ repoRoot: root });
  assert.equal(r.ok, false);
  assert.ok(r.errors.some((e) => e.code === 'readme_broken_link'));
});

test('REVIEW PACKS (fixture): a missing handoff-packs directory fails cleanly', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'review-packs-empty-'));
  const r = checkReviewPacks({ repoRoot: root });
  assert.equal(r.ok, false);
  assert.ok(r.errors.some((e) => e.code === 'missing_directory'));
});
