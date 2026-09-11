/**
 * scripts/build-vocab-canon.ts
 * ----------------------------------------------------------------------------
 * BUILD ARTIFACT GENERATOR — canonical vocabulary dataset (A1–C2).
 *
 * Source of truth: the FINAL chapter content only — every `chapter-*-data.js`
 * vocab[] array under /chapter. Nothing else (content/*.json extracts,
 * deliverables/*-manifest.json, klarweg-audio-cdn word-list .txt files) is
 * trusted — those are historical/draft artifacts that can drift from what
 * learners actually see on the page.
 *
 * This dataset is the intended SINGLE PRODUCTION SOURCE for every
 * vocabulary-related feature: audio generation, manifest generation, PDF
 * generation, search, saved vocabulary, spaced repetition, analytics, the AI
 * tutor, and pronunciation tracking. All of those should eventually read
 * scripts/out/vocab-canon.json rather than re-deriving vocab from chapter
 * files themselves.
 *
 * ── TWO-TIER STABLE IDs ──────────────────────────────────────────────────
 * Every entry carries TWO permanent, independently-stable IDs:
 *
 *   globalId    KW_WORD_<SEQ:06>, e.g. KW_WORD_004532
 *               Identifies the WORD ITSELF across the whole curriculum — one
 *               headword gets exactly one globalId, no matter how many
 *               chapters teach/review it. Audio, pronunciation, search,
 *               saved vocabulary, and the AI tutor reference globalId — this
 *               is what makes one recording reusable everywhere.
 *
 *   occurrenceId KW_<LEVEL>_<CHAPTER:03>_<SEQ:03>, e.g. KW_A1_020_014
 *               Identifies WHERE a word appears in a specific chapter.
 *               Chapter progress, analytics, review history, and curriculum
 *               tracking reference occurrenceId. Each chapter appearance of
 *               a word gets its own occurrenceId even if it shares a globalId
 *               with occurrences elsewhere.
 *
 * Both IDs are assigned ONCE and persisted forever:
 *   - occurrenceId in scripts/out/vocab-id-registry.json, keyed by
 *     chapterFile + headword (unchanged from before this refinement)
 *   - globalId in scripts/out/vocab-global-id-registry.json, keyed by
 *     headword ALONE (cross-chapter) — first chapter to teach a headword
 *     mints its globalId; every later occurrence of that same headword,
 *     in any chapter, reuses the same globalId
 * Neither registry ever reassigns, renumbers, or recycles an ID — both are
 * append-only and must be committed to version control. Reordering, adding,
 * or removing words anywhere never shifts anyone else's globalId or
 * occurrenceId.
 *
 * Run this ONCE THE CURRICULUM IS FROZEN (safe to run earlier too — it only
 * assigns new IDs for new words and never touches audio), then feed its
 * output into generate-vocab-manifest.ts → TTS generation → deploy.
 *
 * Output: scripts/out/vocab-canon.json — array of:
 *   {
 *     id,                 // occurrenceId, e.g. "KW_A1_020_014" — never changes
 *     globalId,           // global word id, e.g. "KW_WORD_004532" — shared
 *                         // across every chapter that teaches/reviews this word
 *     level,              // CEFR level, e.g. "A1"
 *     chapterNumber,      // e.g. 20
 *     chapterTitle,       // e.g. "Modalverben 1"
 *     chapterFile,        // e.g. "chapter-a1-20-modalverben1-data.js"
 *     headword,           // normalized lookup key (article+noun or lemma)
 *     lookupKey,          // == headword; explicit name for audio/manifest joins
 *     displayText,        // original `de` field as authored, unnormalized
 *     article,            // 'der'|'die'|'das'|null
 *     pos,                // part of speech string as authored
 *     gender,             // 'm'|'f'|'n'|null
 *     en, hi              // English / Hindi glosses, for reference only
 *   }
 *
 * Usage: npm run build-vocab-canon
 * (does NOT call any TTS API, does NOT write manifest.json, does NOT touch
 *  public/audio or the klarweg-audio-cdn repo — dataset + ID assignment only.)
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';

const ROOT = resolve(process.cwd());
const CHAPTER_DIR = resolve(ROOT, 'chapter');
const OUT_DIR = resolve(ROOT, 'scripts/out');
const OUT_FILE = resolve(OUT_DIR, 'vocab-canon.json');
const REGISTRY_FILE = resolve(OUT_DIR, 'vocab-id-registry.json');
const GLOBAL_REGISTRY_FILE = resolve(OUT_DIR, 'vocab-global-id-registry.json');

// Must mirror chapter-app.js normWord()/resolveHeadword() exactly — if that
// runtime normalization ever changes, update both in the same commit.
function normWord(s: string): string {
  return String(s || '')
    .replace(/\s+/g, ' ')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .trim();
}
function headwordOf(entry: { de: string; art?: string; pos?: string }): string {
  const de = normWord(entry.de);
  if (entry.art && /noun/.test(entry.pos || '')) return normWord(`${entry.art} ${de}`);
  return de;
}

function levelFromFilename(f: string): string {
  const m = f.match(/^chapter-(a1|a2|b1|b2|c1|c2)-/i);
  return m ? m[1].toUpperCase() : 'UNKNOWN';
}

function getTopLevelField(src: string, key: string): string | null {
  const m = src.match(new RegExp(`${key}\\s*:\\s*'((?:[^'\\\\]|\\\\.)*)'`));
  return m ? m[1].replace(/\\'/g, "'") : null;
}

// Minimal, tolerant parser for the vocab: [ {...}, {...} ] array literal —
// avoids requiring a JS engine to eval untrusted chapter data files. Extracts
// only the fields we need via bracket-depth scanning so it survives nested
// objects (conj: {...}) and quoted braces in strings.
function extractVocabObjects(src: string): Record<string, any>[] {
  const idx = src.indexOf('vocab:');
  if (idx === -1) return [];
  const arrStart = src.indexOf('[', idx);
  if (arrStart === -1) return [];
  let depth = 0, i = arrStart, objs: string[] = [], objStart = -1;
  for (; i < src.length; i++) {
    const c = src[i];
    if (c === '[') { depth++; if (depth === 1) continue; }
    if (c === ']') { depth--; if (depth === 0) break; }
    if (depth === 1 && c === '{') { if (objStart === -1) objStart = i; }
    if (depth >= 1 && c === '{') depth++;
    if (depth >= 2 && c === '}') { depth--; if (depth === 1 && objStart !== -1) { objs.push(src.slice(objStart, i + 1)); objStart = -1; } }
  }
  const out: Record<string, any>[] = [];
  for (const raw of objs) {
    const get = (key: string) => {
      const m = raw.match(new RegExp(`${key}\\s*:\\s*'((?:[^'\\\\]|\\\\.)*)'`));
      return m ? m[1].replace(/\\'/g, "'") : undefined;
    };
    const de = get('de');
    if (!de) continue;
    out.push({ de, art: get('art'), pos: get('pos'), gender: get('gender'), en: get('en'), hi: get('hi'), spokenDe: get('spokenDe') });
  }
  return out;
}

type Registry = Record<string, { id: string; chapterFile: string; headwordAtAssignment: string }>;
// Registry key = `${chapterFile}::${headword}` — stable identity of "this word,
// in this chapter" independent of its position in the array.
function loadRegistry(): Registry {
  if (!existsSync(REGISTRY_FILE)) return {};
  try { return JSON.parse(readFileSync(REGISTRY_FILE, 'utf8')); } catch { return {}; }
}

type GlobalRegistry = Record<string, { globalId: string; firstChapterFile: string }>;
// Global registry key = headword ALONE — one word, one globalId, forever,
// regardless of how many chapters teach or review it.
function loadGlobalRegistry(): GlobalRegistry {
  if (!existsSync(GLOBAL_REGISTRY_FILE)) return {};
  try { return JSON.parse(readFileSync(GLOBAL_REGISTRY_FILE, 'utf8')); } catch { return {}; }
}

function main() {
  const files = readdirSync(CHAPTER_DIR).filter((f) => /^chapter-(a1|a2|b1|b2|c1|c2)-.*-data\.js$/.test(f));
  const registry = loadRegistry();
  const globalRegistry = loadGlobalRegistry();
  // Track the highest sequence number ever assigned per level+chapter, so new
  // words always get the next unused number and nothing is ever reused.
  const maxSeqPerChapter: Record<string, number> = {};
  for (const key of Object.values(registry)) {
    const m = key.id.match(/^KW_([A-Z0-9]+)_(\d{3})_(\d{3})$/);
    if (m) { const k = `${m[1]}_${m[2]}`; maxSeqPerChapter[k] = Math.max(maxSeqPerChapter[k] || 0, Number(m[3])); }
  }
  // Track the highest global sequence number ever assigned, across all words.
  let maxGlobalSeq = 0;
  for (const entry of Object.values(globalRegistry)) {
    const m = entry.globalId.match(/^KW_WORD_(\d{6})$/);
    if (m) maxGlobalSeq = Math.max(maxGlobalSeq, Number(m[1]));
  }
  let newlyAssignedGlobal = 0;

  const dataset: any[] = [];
  const byHeadwordFirstSeen = new Map<string, string>(); // headword -> chapterFile (global reuse note)
  const collisions: string[] = [];
  let newlyAssigned = 0;

  for (const f of files) {
    const src = readFileSync(join(CHAPTER_DIR, f), 'utf8');
    const level = levelFromFilename(f);
    const chapterNumber = Number(getTopLevelField(src, 'number')) || null;
    const chapterTitle = getTopLevelField(src, 'title');
    const chapterKey = `${level}_${String(chapterNumber ?? 0).padStart(3, '0')}`;

    const seenInThisChapter = new Set<string>();
    for (const entry of extractVocabObjects(src)) {
      const headword = headwordOf(entry);
      if (!headword) continue;
      if (seenInThisChapter.has(headword)) continue; // dup within same chapter file
      seenInThisChapter.add(headword);

      const regKey = `${f}::${headword}`;
      let id = registry[regKey]?.id;
      if (!id) {
        const nextSeq = (maxSeqPerChapter[chapterKey] || 0) + 1;
        maxSeqPerChapter[chapterKey] = nextSeq;
        id = `KW_${chapterKey}_${String(nextSeq).padStart(3, '0')}`;
        registry[regKey] = { id, chapterFile: f, headwordAtAssignment: headword };
        newlyAssigned++;
      }

      // Global ID: one per headword, shared across every chapter occurrence.
      let globalId = globalRegistry[headword]?.globalId;
      if (!globalId) {
        maxGlobalSeq += 1;
        globalId = `KW_WORD_${String(maxGlobalSeq).padStart(6, '0')}`;
        globalRegistry[headword] = { globalId, firstChapterFile: f };
        newlyAssignedGlobal++;
      }

      if (byHeadwordFirstSeen.has(headword) && byHeadwordFirstSeen.get(headword) !== f) {
        collisions.push(`"${headword}" reused: first in ${byHeadwordFirstSeen.get(headword)}, again in ${f} (kept as a SEPARATE id — each chapter occurrence tracks its own audio/SRS/analytics identity)`);
      } else {
        byHeadwordFirstSeen.set(headword, f);
      }

      dataset.push({
        id,
        globalId,
        level,
        chapterNumber,
        chapterTitle,
        chapterFile: f,
        headword,
        lookupKey: headword,
        displayText: entry.de,
        article: entry.art || null,
        pos: entry.pos || null,
        gender: entry.gender || null,
        en: entry.en || null,
        hi: entry.hi || null,
        // Optional authored TTS override. `headword`/`lookupKey`/`displayText`
        // and both IDs are untouched: spokenDe changes ONLY what gets spoken,
        // never what is displayed or how audio is looked up. Present on the
        // handful of cards whose written form is not what a learner should
        // hear (e.g. "qm (Quadratmeter)" is spoken "Quadratmeter").
        spokenDe: entry.spokenDe || null,
      });
    }
  }

  dataset.sort((a, b) => a.id.localeCompare(b.id));
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, JSON.stringify(dataset, null, 2), 'utf8');
  writeFileSync(REGISTRY_FILE, JSON.stringify(registry, null, 2), 'utf8');
  writeFileSync(GLOBAL_REGISTRY_FILE, JSON.stringify(globalRegistry, null, 2), 'utf8');

  const byLevel: Record<string, number> = {};
  for (const d of dataset) byLevel[d.level] = (byLevel[d.level] || 0) + 1;

  console.log('\n📖 Canonical vocabulary dataset built from live chapter content');
  console.log(`   chapter data files scanned: ${files.length}`);
  console.log(`   total entries (IDs are per chapter-occurrence, not deduped globally): ${dataset.length}`);
  console.log('   by level:', byLevel);
  console.log(`   newly assigned occurrence IDs this run: ${newlyAssigned}`);
  console.log(`   newly assigned global IDs this run: ${newlyAssignedGlobal}`);
  console.log(`   unique global words (headwords) so far: ${Object.keys(globalRegistry).length}`);
  console.log(`   same word reused across multiple chapters (shares one globalId): ${collisions.length}`);
  console.log(`   → ${OUT_FILE}`);
  console.log(`   → ${REGISTRY_FILE} (append-only — occurrence IDs; commit this)`);
  console.log(`   → ${GLOBAL_REGISTRY_FILE} (append-only — global word IDs; commit this)`);
  console.log('\nThis is a DATASET + ID REGISTRY ONLY. No TTS calls made, no manifest written, no audio touched.');
}

main();
