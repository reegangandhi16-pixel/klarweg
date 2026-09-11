/**
 * scripts/generate-vocab-manifest.ts
 * ----------------------------------------------------------------------------
 * BUILD ARTIFACT GENERATOR — production manifest.json for klarweg-audio-cdn.
 *
 * manifest.json is NEVER hand-edited. It is always regenerated from:
 *   scripts/out/vocab-canon.json   (canonical dataset — run build-vocab-canon first)
 * cross-referenced against whatever audio files actually exist on disk in
 *   <cdn-repo>/audio/female/  and  <cdn-repo>/audio/male/
 *
 * Output shape matches exactly what kw-audio-engine.js's vocabUrl()/
 * resolveVocabUrl() expect — relative paths, no leading slash, KEYED BY
 * HEADWORD (the runtime looks up by text, not by ID):
 *   { "<headword>": { "female": "audio/female/<safe_name>.mp3",
 *                      "male":   "audio/male/<safe_name>.mp3" } }
 *
 * A parallel `manifest-by-id.json` is also written, keyed by the permanent
 * Global Vocabulary ID (globalId, e.g. "KW_WORD_004532") — NOT the chapter
 * occurrence id. One headword has exactly one globalId shared across every
 * chapter that teaches/reviews it, which is exactly the join key audio
 * should use: one recording, reused everywhere the word appears. The
 * runtime doesn't read this file today (kw-audio-engine.js matches on
 * text), but pronunciation tracking, search, saved vocabulary, and the AI
 * tutor should resolve audio via globalId → manifest-by-id.json → path,
 * never via headword text matching (text can be edited without changing
 * what word it is) and never via the per-chapter occurrence id (that would
 * wrongly fragment one word's audio across N chapter-specific entries).
 * Chapter progress, analytics, and review history stay keyed off the
 * occurrence id elsewhere in the dataset — this manifest is audio-only.
 * File paths are identical in both manifests for a given word — only the
 * key differs.
 *
 * This script does NOT call any TTS API and does NOT synthesize audio — it
 * only maps the canonical dataset onto filenames and checks which already
 * exist. Run generate-vocab-audio.ts (TTS synthesis) first, THEN this.
 *
 * Usage:
 *   npm run generate-vocab-manifest -- --cdn-repo=../klarweg-audio-cdn
 *   npm run generate-vocab-manifest -- --cdn-repo=../klarweg-audio-cdn --dry-run
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const DATASET = resolve(ROOT, 'scripts/out/vocab-canon.json');

const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const m = a.match(/^--([^=]+)=?(.*)$/); return m ? [m[1], m[2] || true] : [a, true];
}));
const CDN_REPO = args['cdn-repo'] ? resolve(ROOT, String(args['cdn-repo'])) : null;
const DRY = !!args['dry-run'];

function safeName(s: string): string {
  // MUST match klarweg-audio-cdn/generator.py's safe_name() exactly, or
  // manifest paths will point at files that don't exist under those names.
  let out = s;
  for (const [a, b] of Object.entries({ ä: 'ae', ö: 'oe', ü: 'ue', Ä: 'Ae', Ö: 'Oe', Ü: 'Ue', ß: 'ss' })) {
    out = out.replaceAll(a, b);
  }
  out = out.replace(/[^\w\s-]/g, '').replace(/ /g, '_');
  return out;
}

function main() {
  if (!existsSync(DATASET)) {
    console.error(`✗ ${DATASET} not found — run build-vocab-canon.ts first.`);
    process.exit(1);
  }
  const dataset = JSON.parse(readFileSync(DATASET, 'utf8')) as { globalId: string; headword: string }[];

  const manifest: Record<string, { female: string; male: string }> = {};
  const manifestById: Record<string, { headword: string; female: string; male: string }> = {};
  let haveBoth = 0, missingBoth = 0, missingOne = 0;
  const missingList: string[] = [];
  const seenGlobalIds = new Set<string>();

  for (const { globalId, headword } of dataset) {
    const fname = safeName(headword);
    const femaleRel = `audio/female/${fname}.mp3`;
    const maleRel = `audio/male/${fname}.mp3`;
    manifest[headword] = { female: femaleRel, male: maleRel }; // text-keyed — what the current runtime reads
    if (!seenGlobalIds.has(globalId)) {
      manifestById[globalId] = { headword, female: femaleRel, male: maleRel }; // globalId-keyed — one entry per word, not per occurrence
      seenGlobalIds.add(globalId);

      if (CDN_REPO) {
        const fExists = existsSync(resolve(CDN_REPO, femaleRel));
        const mExists = existsSync(resolve(CDN_REPO, maleRel));
        if (fExists && mExists) haveBoth++;
        else if (!fExists && !mExists) { missingBoth++; missingList.push(headword); }
        else missingOne++;
      }
    }
  }

  console.log('\n📄 Production manifest generation (from canonical dataset only)');
  console.log(`   dataset entries (chapter occurrences): ${dataset.length}`);
  console.log(`   unique words (Global Vocabulary IDs): ${seenGlobalIds.size}`);
  if (CDN_REPO) {
    console.log(`   checked against: ${CDN_REPO}`);
    console.log(`   both voices present: ${haveBoth}`);
    console.log(`   one voice missing:   ${missingOne}`);
    console.log(`   both voices missing:  ${missingBoth}`);
    if (missingList.length) console.log(`   (run generate-vocab-audio.ts to synthesize the ${missingList.length} missing entries)`);
  } else {
    console.log('   (no --cdn-repo passed — manifest built without existence-checking against real files)');
  }

  if (DRY) { console.log('\n--dry-run: manifest.json / manifest-by-id.json NOT written.'); return; }
  const outPath = CDN_REPO ? resolve(CDN_REPO, 'manifest.json') : resolve(ROOT, 'scripts/out/manifest.json');
  const outByIdPath = CDN_REPO ? resolve(CDN_REPO, 'manifest-by-id.json') : resolve(ROOT, 'scripts/out/manifest-by-id.json');
  writeFileSync(outPath, JSON.stringify(manifest, null, 2), 'utf8');
  writeFileSync(outByIdPath, JSON.stringify(manifestById, null, 2), 'utf8');
  console.log(`   → ${outPath}  (text-keyed — read by kw-audio-engine.js today)`);
  console.log(`   → ${outByIdPath}  (id-keyed — foundation for PDF/search/SRS/analytics/AI tutor/pronunciation tracking)`);
  console.log('\nRemember: both manifests are build artifacts — never edit by hand, always regenerate from vocab-canon.json.');
}

main();
