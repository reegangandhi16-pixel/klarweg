/* Klarweg Data Lint — English leakage into German-typed authored fields
 * =====================================================================
 * DATA-level only. Runs over chapter data source; never renders a chapter,
 * never touches the sweep measurement path.
 *
 * WHY THIS EXISTS
 * ---------------
 * AUTHORED_GERMAN() harvests surfaces from German-typed fields and admits them
 * through the prose language gate. An English string in a German-typed field
 * injects ALL its words into that chapter's German set, making each linkifiable
 * in English prose.
 *
 * Measured on b2-61: `de: 'Original event time ≠ reporting time'` injected 4
 * sole-source surfaces producing 13 rendered consequences — but only 4 QA
 * findings. The other 9 (lowercase `original` ×8, `Event` ×1) are clickable
 * English words opening German popups that emit NO detector code, because badge
 * and role agree — they simply agree about an English word. The defect class is
 * invisible to the rendering QA engine by construction, which is why the check
 * lives here at the data layer.
 *
 * SIGNAL DESIGN (each rejected alternative was measured, not assumed)
 * ------------------------------------------------------------------
 * A  English function words → VIOLATION. High confidence.
 *    `was` is EXCLUDED: German `was` (= what) is legitimate and common
 *    ("Und was hast du ihm versprochen?"). Including it produced 2 false
 *    positives in b2-61 on correct German.
 *
 * B  wordCount ≥ 4 AND germanFunctionWords = 0 AND englishLexical ≥ 2
 *    → REVIEW. Catches English CONTENT-word fragments with no function word —
 *    b2-61 is exactly this shape and Signal A cannot see it. Requires POSITIVE
 *    English evidence (≥2 lexical words), so it is not merely "absence of German".
 *
 * C  Absence of German evidence — REJECTED as a standalone classifier. Measured
 *    false negative: 'Rohan nimmt an einem Seminar teil.' is correct German but
 *    scores 0 on any finite function-word list. Used only as one input to B.
 *
 * D  {de, text} sibling structure — INFORMATIONAL ONLY. Measured precision 35%:
 *    40 such pairs across the 8 leak chapters hold 19 genuine German `de:`
 *    values and 14 English ones. The structure is the NORM, not a defect marker.
 *    Gating on it would have flagged 26 correct entries.
 *
 * Content words (`time`, `event`, `original`, `reporting`) are deliberately NOT
 * added: they would flag the legitimate German nouns das Event / die Zeit-*.
 *
 * USAGE:  KWLINT.scanAll(readFile, listFiles) | KWLINT.scan(chapter, source) | KWLINT.selfTest()
 */
(function (root) {

  // Kept in sync with GERMAN_FIELDS in chapter-app.js. Explanation fields
  // (en, hi, why, body, html, hinglish, text…) are NOT scanned: English is
  // correct there and is never harvested into AUTHORED_GERMAN().
  var GERMAN_FIELDS = ['w', 'de', 'ex', 'ex2', 'sentence', 'front', 'answer', 'solution'];

  // Signal A. `was` excluded — see header.
  var FUNCTION_WORDS = ['the', 'and', 'is', 'are', 'were', 'of', 'to', 'for',
    'with', 'that', 'does', 'it', 'from', 'when', 'which'];

  // Signal B inputs. English lexical items observed in the corpus's own study
  // tips; deliberately NOT a general English dictionary.
  var ENGLISH_LEXICAL = ['clause', 'clauses', 'noun', 'nouns', 'verb', 'verbs',
    'sentence', 'sentences', 'time', 'event', 'object', 'action', 'reports',
    'reporting', 'signs', 'notices', 'announcements', 'pronoun', 'connectors',
    'construction', 'end', 'writing', 'theses', 'original', 'main', 'nested',
    'relative', 'find', 'learn', 'remove', 'belongs', 'talking', 'work',
    'apply', 'use', 'recognize', 'distinguish', 'report', 'know', 'give',
    'trace', 'follow', 'write', 'adopt', 'attach', 'rewrite', 'transform',
    'match', 'sort', 'never', 'every', 'both', 'common', 'alone', 'first'];

  // German evidence for Signal B's negative condition.
  var GERMAN_FUNCTION = ['der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine',
    'einen', 'einem', 'einer', 'und', 'ist', 'sind', 'war', 'nicht', 'mit',
    'für', 'auf', 'von', 'zu', 'im', 'am', 'du', 'ich', 'wir', 'sie', 'er',
    'hast', 'hat', 'haben', 'wird', 'werden', 'kann', 'man', 'als', 'wenn',
    'während', 'hier', 'heute', 'was', 'es', 'sich', 'dass', 'oder', 'aber',
    'vor', 'nach', 'bei', 'um', 'wie', 'an', 'in', 'auch', 'nur', 'noch'];

  // \b is Unicode-naive in JS, so a German word ending in ä/ö/ü/ß next to a
  // candidate could mis-boundary. Match on explicit letter-class edges.
  var L = 'A-Za-z\\u00c4\\u00d6\\u00dc\\u00e4\\u00f6\\u00fc\\u00df';
  function wordRe(list) {
    return new RegExp('(^|[^' + L + '])(' + list.join('|') + ')(?=[^' + L + ']|$)', 'gi');
  }
  var FN_RE = wordRe(FUNCTION_WORDS);

  function offendingWords(value) {
    var out = [], m;
    FN_RE.lastIndex = 0;
    while ((m = FN_RE.exec(value))) {
      var w = m[2].toLowerCase();
      if (out.indexOf(w) === -1) out.push(w);
    }
    return out;
  }
  function tokens(s) { return (String(s).toLowerCase().match(/[a-z\u00e4\u00f6\u00fc\u00df]+/g) || []); }
  function germanEvidence(s) {
    var t = tokens(s);
    return t.filter(function (w) { return GERMAN_FUNCTION.indexOf(w) !== -1; }).length
      + (/[\u00e4\u00f6\u00fc\u00df\u00c4\u00d6\u00dc]/.test(s) ? 1 : 0);
  }
  function englishLexical(s) {
    var t = tokens(s);
    return t.filter(function (w) { return ENGLISH_LEXICAL.indexOf(w) !== -1; }).length;
  }

  // Signal B: positive English evidence AND no German evidence AND long enough
  // to be a phrase rather than a borrowed noun.
  function reviewSignal(value) {
    var t = tokens(value);
    if (t.length < 4) return false;                 // 1–3 words = loanword territory
    if (germanEvidence(value) !== 0) return false;  // any German evidence exonerates
    return englishLexical(value) >= 2;              // require POSITIVE English evidence
  }

  function fieldMatcher() {
    return new RegExp('\\b(' + GERMAN_FIELDS.join('|') + ')\\s*:\\s*([\'"])((?:[^\'"\\\\]|\\\\.)*)\\2', 'g');
  }
  // Signal D — informational context only, never gating.
  var PAIR_RE = /\{\s*de:\s*'((?:[^'\\]|\\.)*)'\s*,\s*text:\s*'((?:[^'\\]|\\.)*)'\s*\}/g;

  function scan(chapter, source) {
    var out = [], re = fieldMatcher(), m;
    var pairDe = {};
    PAIR_RE.lastIndex = 0;
    var p;
    while ((p = PAIR_RE.exec(source))) pairDe[p[1]] = p[2];

    while ((m = re.exec(source))) {
      var field = m[1], value = m[3];
      if (!value || value.length < 4) continue;
      var offenders = offendingWords(value);
      var severity = null, signal = null;
      if (offenders.length) { severity = 'violation'; signal = 'A:function-word'; }
      else if (reviewSignal(value)) { severity = 'review'; signal = 'B:english-fragment'; }
      if (!severity) continue;
      out.push({
        severity: severity, signal: signal, chapter: chapter, field: field,
        value: value, offenders: offenders,
        line: source.slice(0, m.index).split('\n').length,
        germanEvidence: germanEvidence(value),
        englishLexical: englishLexical(value),
        siblingText: pairDe[value] || null            // Signal D, informational
      });
    }
    return out;
  }

  async function scanAll(readFile, files) {
    var all = [];
    for (var i = 0; i < files.length; i++) {
      var f = files[i], src;
      try { src = await readFile('chapter/' + f); } catch (e) { continue; }
      all = all.concat(scan(f.replace('chapter-', '').replace('-data.js', ''), src));
    }
    return all;
  }

  function selfTest() {
    var c = {};
    // Word-boundary safety — the failure mode that would make this useless.
    c.the_matches_standalone   = offendingWords('Find the main clause').indexOf('the') !== -1;
    c.the_not_in_Theater       = offendingWords('Theater und Themen').length === 0;
    c.it_not_in_mit            = offendingWords('Ich fahre mit dem Bus').indexOf('it') === -1;
    c.of_not_in_hoffen         = offendingWords('Wir hoffen sehr').indexOf('of') === -1;
    c.case_insensitive_upper   = offendingWords('THE ACTION').indexOf('the') !== -1;
    c.case_insensitive_mixed   = offendingWords('Does it work?').indexOf('does') !== -1;

    // `was` protection — German `was` must never be a violation.
    c.was_not_a_function_word  = FUNCTION_WORDS.indexOf('was') === -1;
    c.german_was_clean         = offendingWords('Und was hast du ihm versprochen?').length === 0;
    c.german_was_not_review    = reviewSignal('Und was hast du ihm versprochen?') === false;

    // b2-61 — the case Signal A structurally cannot see.
    c.b261_no_function_word    = offendingWords('Original event time \u2260 reporting time').length === 0;
    c.b261_caught_by_review    = reviewSignal('Original event time \u2260 reporting time') === true;

    // Known function-word leaks → violation.
    c.leak_b238_find           = offendingWords('Find the main clause first').length > 0;
    c.leak_b238_every          = offendingWords('Every relative pronoun belongs to ONE noun').length > 0;
    c.leak_b240                = offendingWords('Never learn the verb alone').length > 0;
    c.leak_b241                = offendingWords('Never learn the noun alone').length > 0;
    c.leak_b207                = offendingWords('Remove it \u2014 does the sentence still work?').length >= 3;
    c.leak_b246                = offendingWords('Talking about WHO? vs THE ACTION?').length > 0;
    c.leak_b250                = offendingWords('Genitiv/von-construction for the acted-upon object').length > 0;
    c.leak_b234                = offendingWords('Both connectors: verb at the end').length > 0;

    // Legitimate German / loanwords must stay clean on BOTH signals.
    ['Event', 'Highlight', 'Festival', 'Basketball', 'Veranstalter/in', 'Reporting-Verb',
     'w\u00e4hrend + Genitiv', 'Das Event ist am Samstag.', 'Wir spielen Basketball.',
     'Rohan nimmt an einem Seminar teil.', 'Heute wird gearbeitet.',
     'Ich lerne, w\u00e4hrend Rohan arbeitet.'].forEach(function (s, i) {
      c['clean_' + i + '_' + s.slice(0, 12).replace(/\W/g, '')] =
        offendingWords(s).length === 0 && reviewSignal(s) === false;
    });

    var failed = Object.keys(c).filter(function (k) { return !c[k]; });
    return { pass: failed.length === 0, failed: failed, total: Object.keys(c).length, checks: c };
  }

  root.KWLINT = {
    scan: scan, scanAll: scanAll, selfTest: selfTest,
    offendingWords: offendingWords, reviewSignal: reviewSignal,
    germanEvidence: germanEvidence, englishLexical: englishLexical,
    GERMAN_FIELDS: GERMAN_FIELDS, FUNCTION_WORDS: FUNCTION_WORDS
  };
})(typeof window !== 'undefined' ? window : globalThis);
