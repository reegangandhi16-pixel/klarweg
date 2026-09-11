// ============================================================================
// LAYER 1 — Pure German adjective-comparison morphology engine.
// BUILD-TIME ONLY. Never imported by chapter-app.js or any runtime file.
// Contains ZERO semantics and ZERO curriculum data — it only answers:
// "if this word IS gradable, what are its correct forms?"
// Whether a word IS gradable is decided entirely by gradability-policy.json
// (Layer 2), consulted by the build step BEFORE this engine is ever called.
// ============================================================================
function isVowel(ch) { return /[aeiouäöü]/i.test(ch); }

// Returns {comparative, superlative} or null if the engine cannot derive a
// safe form (the build step must never generate on a null result).
function generateCompare(base) {
  if (!base || typeof base !== 'string') return null;
  const w = base.trim();
  if (!/^[A-Za-zÄÖÜäöüß]+$/.test(w)) return null; // single clean word only

  let comparative;
  if (/el$/i.test(w)) {
    // -el ending: the unstressed e before -l drops before comparative -er
    // (dunkel -> dunkl + er -> dunkler); superlative keeps the base as-is.
    const stem = w.slice(0, -2) + w.slice(-1); // remove the 'e', keep the 'l'
    comparative = stem + 'er';
  } else if (/er$/i.test(w) && w.length > 2 && isVowel(w[w.length - 3])) {
    // vowel/diphthong directly before the final -er: the stem-internal e
    // drops before adding the comparative -er (sauer -> saur + er -> saurer).
    const stem = w.slice(0, -2) + w.slice(-1); // remove the 'e', keep the 'r'
    comparative = stem + 'er';
  } else if (/er$/i.test(w)) {
    // consonant before final -er: e is retained (sicher -> sicherer).
    comparative = w + 'er';
  } else if (/e$/i.test(w)) {
    // already ends in unstressed e (böse, müde): add r directly.
    comparative = w + 'r';
  } else {
    comparative = w + 'er';
  }

  let superlative;
  const lastChar = w[w.length - 1];
  if (/isch$/i.test(w)) {
    superlative = 'am ' + w + 'sten'; // praktisch -> am praktischsten (no e-insertion for this suffix)
  } else if (/e$/i.test(w)) {
    superlative = 'am ' + w + 'sten'; // böse/müde already end in the unstressed e -> no double e (bösesten, not böseesten)
  } else if (/[dtsßzx]$/i.test(w) || /sch$/i.test(w) || isVowel(lastChar)) {
    superlative = 'am ' + w + 'esten'; // laut -> am lautesten, heiß -> am heißesten, hübsch -> am hübschesten, neu -> am neuesten, frei -> am freiesten
  } else {
    superlative = 'am ' + w + 'sten'; // wichtig -> am wichtigsten
  }
  return { comparative, superlative };
}

if (typeof module !== 'undefined') module.exports = { generateCompare };
