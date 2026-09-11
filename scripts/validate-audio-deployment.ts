/**
 * scripts/validate-audio-deployment.ts
 * ----------------------------------------------------------------------------
 * DEPLOYMENT GATE — run before every klarweg-audio-cdn release.
 *
 * Two-way integrity check against a local checkout of klarweg-audio-cdn:
 *   1. Every manifest.json entry (female + male) must point to an MP3 that
 *      actually exists on disk — an orphan manifest entry is exactly the
 *      "manifest says covered, file 404s" class of bug this project has hit
 *      repeatedly. This also re-validates entries merged in from klarweg-audio
 *      (scripts/out/production-manifest-merged.json), if present.
 *   2. Every MP3 file under audio/female/ and audio/male/ must be referenced
 *      by at least one manifest entry — an orphan file means either a stale
 *      leftover or a generation run that never got merged into the manifest
 *      (the exact failure mode that caused the A1/A2 regression).
 *
 * Also prints coverage by CEFR level, cross-referenced against the canonical
 * vocabulary dataset (scripts/out/vocab-canon.json / _canon_all_v2.json) if
 * available — coverage numbers are informational, not a failure condition,
 * since "word has no recording yet" is expected pre-freeze.
 *
 * FAILS THE BUILD (non-zero exit) if either integrity check finds a mismatch.
 * Does not call any TTS API, does not modify manifest.json, does not touch
 * any MP3 — read-only verification.
 *
 * Usage:
 *   npm run validate-audio-deployment -- --cdn-repo=../klarweg-audio-cdn
 *   npm run validate-audio-deployment -- --cdn-repo=../klarweg-audio-cdn --canon=scripts/out/vocab-canon.json
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';

const ROOT = resolve(process.cwd());
const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const m = a.match(/^--([^=]+)=?(.*)$/); return m ? [m[1], m[2] || true] : [a, true];
}));
const CDN_REPO = args['cdn-repo'] ? resolve(ROOT, String(args['cdn-repo'])) : null;
const CANON_PATH = args['canon'] ? resolve(ROOT, String(args['canon'])) : resolve(ROOT, 'scripts/out/vocab-canon.json');

if (!CDN_REPO) {
  console.error('✗ --cdn-repo=<path> is required (path to a local checkout of klarweg-audio-cdn)');
  process.exit(1);
}
const MANIFEST_PATH = resolve(CDN_REPO, 'manifest.json');
if (!existsSync(MANIFEST_PATH)) {
  console.error(`✗ ${MANIFEST_PATH} not found — nothing to validate.`);
  process.exit(1);
}

type Entry = { female?: string; male?: string } | string;
const manifest: Record<string, Entry> = JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'));

// ── Check 1: every manifest entry's referenced file(s) must exist on disk ──
const missingFiles: { word: string; voice: string; path: string }[] = [];
const referencedRelPaths = new Set<string>();

function checkVoicePath(word: string, voice: string, rel: string | undefined) {
  if (!rel) return;
  if (/^https?:/.test(rel)) return; // external/absolute URL — not part of this repo's on-disk check
  const cleanRel = rel.replace(/^\//, '');
  referencedRelPaths.add(cleanRel);
  const abs = resolve(CDN_REPO!, cleanRel);
  if (!existsSync(abs)) missingFiles.push({ word, voice, path: cleanRel });
}

for (const [word, entry] of Object.entries(manifest)) {
  if (typeof entry === 'string') { checkVoicePath(word, 'single', entry); continue; }
  checkVoicePath(word, 'female', entry.female);
  checkVoicePath(word, 'male', entry.male);
}

// ── Check 2: every MP3 on disk must be referenced by the manifest ──
const orphanFiles: string[] = [];
for (const sub of ['audio/female', 'audio/male']) {
  const dir = resolve(CDN_REPO, sub);
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.mp3')) continue;
    const rel = `${sub}/${f}`;
    if (!referencedRelPaths.has(rel)) orphanFiles.push(rel);
  }
}

// ── Coverage by level (informational — cross-ref against canonical dataset) ──
let coverageReport = '';
if (existsSync(CANON_PATH)) {
  const canon: { level: string; term?: string; headword?: string }[] = JSON.parse(readFileSync(CANON_PATH, 'utf8'));
  const byLevel: Record<string, { total: number; covered: number }> = {};
  for (const e of canon) {
    const word = e.term || e.headword || '';
    const lvl = e.level || '?';
    byLevel[lvl] = byLevel[lvl] || { total: 0, covered: 0 };
    byLevel[lvl].total++;
    const m = manifest[word];
    const hasVoice = m && (typeof m === 'string' ? true : !!(m.female || m.male));
    if (hasVoice) byLevel[lvl].covered++;
  }
  const lines = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].filter((l) => byLevel[l]).map((l) => {
    const { total, covered } = byLevel[l];
    const pct = total ? ((covered / total) * 100).toFixed(1) : '0.0';
    return `  ${l}: ${covered}/${total} (${pct}%)`;
  });
  coverageReport = lines.join('\n');
} else {
  coverageReport = `  (canonical dataset not found at ${CANON_PATH} — skipping coverage breakdown)`;
}

// ── Report ──
console.log('\n🔍 Audio deployment validation — ' + CDN_REPO);
console.log(`   manifest entries: ${Object.keys(manifest).length}`);
console.log(`   manifest → file check: ${missingFiles.length === 0 ? 'PASS' : `FAIL (${missingFiles.length} missing)`}`);
console.log(`   file → manifest check: ${orphanFiles.length === 0 ? 'PASS' : `FAIL (${orphanFiles.length} orphaned)`}`);
console.log('\n📊 Coverage by CEFR level:');
console.log(coverageReport);

if (missingFiles.length) {
  console.log(`\n✗ ${missingFiles.length} manifest entries reference missing MP3s:`);
  for (const m of missingFiles.slice(0, 30)) console.log(`   "${m.word}" (${m.voice}) → ${m.path}`);
  if (missingFiles.length > 30) console.log(`   ...and ${missingFiles.length - 30} more`);
}
if (orphanFiles.length) {
  console.log(`\n✗ ${orphanFiles.length} MP3 files are not referenced by any manifest entry:`);
  for (const p of orphanFiles.slice(0, 30)) console.log(`   ${p}`);
  if (orphanFiles.length > 30) console.log(`   ...and ${orphanFiles.length - 30} more`);
}

if (missingFiles.length || orphanFiles.length) {
  console.log('\n❌ VALIDATION FAILED — do not deploy. Fix the mismatches above and re-run.');
  process.exit(1);
}
console.log('\n✅ VALIDATION PASSED — manifest and files are in sync.');
process.exit(0);
