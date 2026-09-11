// ============================================================================
// STEP 1 — Author Extraction (build-time only, persisted script).
// Scans every chapter data file for authored `compare` objects and builds
// the canonical authored-compare index (Layer 0, highest precedence).
//
// FAIL-FAST INVARIANT: if two chapters author different compare forms for
// the same lemma, the build ABORTS immediately. No file is written — not
// the authored index, not the Global Lexicon, not any generated compare
// object. A conflict report is printed and the process exits non-zero.
// ============================================================================
async function extractAuthoredCompare(ls, readFile) {
  const files = (await ls('chapter')).filter(f => /^chapter-.*-data\.js$/.test(f)).sort();
  const contents = await Promise.all(files.map(f => readFile('chapter/' + f)));
  const index = {};
  const conflicts = [];

  for (let i = 0; i < files.length; i++) {
    const f = files[i], src = contents[i];
    const re = /\{\s*de:\s*'([^']+)'[^}]{0,400}?compare\s*:\s*\{\s*comparative\s*:\s*'([^']+)'\s*,\s*superlative\s*:\s*'([^']+)'\s*\}[^}]{0,200}?\}/g;
    let m;
    while ((m = re.exec(src))) {
      const word = m[1], comparative = m[2], superlative = m[3];
      const key = word.toLowerCase();
      if (!index[key]) {
        index[key] = { positive: word, comparative, superlative, source: 'authored', file: f };
      } else if (index[key].comparative !== comparative || index[key].superlative !== superlative) {
        conflicts.push({
          lemma: word,
          chapterA: index[key].file, compareA: { comparative: index[key].comparative, superlative: index[key].superlative },
          chapterB: f, compareB: { comparative, superlative },
        });
      }
      // identical duplicate across chapters: not a conflict, no-op.
    }
  }

  if (conflicts.length) {
    console.error('=== AUTHORED COMPARE CONFLICT — BUILD ABORTED ===');
    conflicts.forEach(c => {
      console.error(`Lemma: ${c.lemma}`);
      console.error(`  Chapter A: ${c.chapterA} -> ${JSON.stringify(c.compareA)}`);
      console.error(`  Chapter B: ${c.chapterB} -> ${JSON.stringify(c.compareB)}`);
    });
    console.error('Build status: FAILED');
    const err = new Error('Authored compare conflict(s) detected — build aborted, no files written.');
    err.conflicts = conflicts;
    err.exitCode = 1;
    throw err; // caller must not write ANY output (authored index, Global Lexicon, generated compare) when this throws.
  }

  return index; // only reached when zero conflicts exist.
}

if (typeof module !== 'undefined') module.exports = { extractAuthoredCompare };
