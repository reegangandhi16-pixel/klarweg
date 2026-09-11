/* Klarweg production-audit standing scan.
 *
 * Supporting evidence ONLY. Never a substitute for clicking and inspecting each
 * occurrence (handoff §12) — but it must be capable of seeing every defect
 * class the audit has already hit, and it must NOT flag behaviour the frozen
 * architecture declares intentional. A scan that cries wolf gets ignored, which
 * is worse than no scan.
 *
 * History of what this file exists to prevent:
 *   §8  Early scans checked cursor + colour but never badge-vs-role agreement,
 *       and reported 0 anomalies across 156 occurrences while 6 defects were live.
 *   §10 The replacement scan checked badge-vs-paradigm but never colour, so a
 *       word painted with a contradicting role colour passed silently
 *       (`Willkommen`: cyan r-adverb span under an "Adjective" badge).
 *
 * Deliberate NON-checks (each is frozen intentional behaviour — do not "fix"):
 *   · The same surface carrying different roles at different occurrences is
 *     CORRECT. Role/case/number are occurrence-bound (§2). `das` article vs
 *     subject, `Apfel` subject vs object — all intended.
 *   · `.vword-tag` metadata chips deliberately override the nested word's role
 *     colour; chip-vs-popup colour difference is intentional contextual
 *     styling (§4), not a defect.
 *   · Word class does not imply one role: an article heading a subject noun
 *     phrase legitimately carries r-subject. The OK sets below flag only
 *     genuine contradictions (adjective painted adverb, noun painted verb).
 *
 * Usage (console, on any chapter page):
 *   KWAudit.run()              → scan the whole page
 *   KWAudit.run('sec-reading') → scan one section
 */
(function () {
  // Word class parsed from the popup badge, or '' when the badge is not a word
  // class at all (check A then skips the occurrence).
  //
  // Every pattern is \b-anchored because German grammar labels nest inside one
  // another and unanchored substrings silently mis-parse:
  //   "Pronoun"  contains "noun"
  //   "Adverb"   contains "verb"
  //   "Particle" contains "article"   ← flagged every Particle badge as an article
  // Anchoring removes the ordering dependency entirely rather than relying on
  // test order to paper over the collisions.
  //
  // PRAGMATIC labels (Greeting, Politeness, Answer, Interjection, Particle,
  // Title, Name) are deliberately NOT word classes and return ''. They describe
  // what an expression DOES socially, not what part of speech it is — often
  // across a whole phrase whose component words keep their own ordinary roles:
  // "Auf Wiedersehen" badges as Greeting while `Auf` is a preposition and
  // `Wiedersehen` a noun; "Guten Morgen" likewise. Treating them as classes
  // produced 65 findings on A1-4, none of them defects.
  function badgeClass(t) {
    t = String(t || '').toLowerCase();
    if (!t.trim()) return '';
    if (/\b(greeting|politeness|answer|interjection|particle|title|name)\b/.test(t)) return '';
    if (/\b(letter|sound)\b/.test(t)) return 'letter';
    if (/\bpronoun\b/.test(t)) return 'pronoun';
    if (/\badverb\b/.test(t)) return 'adverb';
    if (/\badjective\b/.test(t)) return 'adjective';
    if (/\bnoun\b/.test(t)) return 'noun';
    if (/\bverb\b/.test(t)) return 'verb';
    if (/\barticle\b/.test(t)) return 'article';
    if (/\bpreposition\b/.test(t)) return 'preposition';
    if (/\bconjunction\b/.test(t)) return 'conjunction';
    if (/\bquestion\b/.test(t)) return 'question';
    return '';
  }

  // Roles each word class may legitimately carry. Generous on purpose: a noun
  // phrase's function (subject/object/case/time/place) attaches to EVERY word
  // in that phrase — its noun, its article, its attributive adjective and its
  // interrogative determiner alike. "Das Gymnasium hat die größte Turnhalle":
  // `die` and `größte` both carry r-akkusativ and both are correct, so both
  // classes must accept NP_FUNCTION or the map contradicts itself.
  //
  // NOT tolerated: adjective ↔ adverb. It looks defensible (German
  // adjective/adverb identity is real — `schnell` is one word in both uses) but
  // it was trialled and REVERTED: every case it suppressed was a genuine defect,
  // and it silently swallowed the one finding this check exists for.
  //   · `Willkommen` — badge "Adjective", painted cyan r-adverb.
  //   · `super` ×3 (A2-8) — badge "Adverb", painted amber r-adjective, in
  //     "Der Vergleich ist super nützlich" / "Das Talent ist super groß", where
  //     it is unambiguously an intensifier adverb.
  // Adding the tolerance produced ZERO true suppressions on A1-1 and A2-8.
  // Word-class identity is a fact about the lexicon, not a licence for the
  // rendered colour to contradict the badge shown beside it.
  //
  // What remains catchable is the real contradiction: a word painted as a
  // fundamentally different PART OF SPEECH than its own badge reports. 'plain'
  // is always acceptable (authored opt-out).
  var NP_FUNCTION = ['subject', 'object', 'akkusativ', 'dativ', 'genitiv', 'time', 'place', 'rhema'];
  var OK = {
    noun:        NP_FUNCTION.concat(['nnoun', 'name', 'letter', 'plain']),
    pronoun:     NP_FUNCTION.concat(['pronoun', 'possessive', 'article', 'reflexiv-akk', 'reflexiv-dat', 'plain']),
    article:     NP_FUNCTION.concat(['article', 'possessive', 'comparative', 'superlative', 'plain']),
    adjective:   NP_FUNCTION.concat(['adjective', 'comparative', 'superlative', 'plain']),
    question:    NP_FUNCTION.concat(['question', 'article', 'conjunction', 'plain']),
    verb:        ['verb', 'modalverb', 'auxiliary', 'futur', 'brauchen', 'plusq', 'plain'],
    adverb:      ['adverb', 'negation', 'time', 'place', 'connector', 'temporal', 'contrast', 'addition', 'plain'],
    preposition: ['preposition', 'prep-rel', 'plain'],
    conjunction: ['conjunction', 'connector', 'contrast', 'addition', 'purpose', 'temporal', 'plain'],
    letter:      ['letter']
  };

  // Known scan limits (documented, not bugs — they need sentence-level parsing,
  // which is the human occurrence audit's job per handoff §12):
  //   · Case correctness INSIDE a noun phrase. Because every NP word accepts
  //     NP_FUNCTION, an akkusativ role on a determiner sitting in nominative
  //     position ("Welche Schule ist besser…") passes this scan. Only reading
  //     the sentence catches it.
  //   · Whether a legitimate role is the RIGHT one for that occurrence — the
  //     scan tests class compatibility, never occurrence correctness.
  // Paradigm section → the word class it can belong to.
  // Comparison accepts adverbs as well as adjectives: German deadjectival
  // adverbs compare normally (langsam / langsamer / am langsamsten), and the
  // chapter badges them "Adverb" when they are used adverbially. Flagging those
  // manufactured findings out of a labelling convention.
  var SEC_WANT = { Conjugation: ['verb'], Number: ['noun'], Comparison: ['adjective', 'adverb'] };

  var BAD_COLORS = {
    'rgb(0, 0, 0)': 'ink-black fallback',
    'rgb(0, 0, 238)': 'browser link-blue',
    'rgb(0, 0, 255)': 'browser link-blue'
  };

  // Mirrors POS_ROLE / wordClassOf in chapter-app.js (both are module-private).
  var POS_ROLE = {
    noun: 'object', verb: 'verb', adjective: 'adjective', adverb: 'adverb',
    preposition: 'preposition', pronoun: 'subject', article: 'article', number: 'object'
  };
  function wordClassOf(type) {
    return String(type || '').split(' · ')[0].split(' (')[0].trim().toLowerCase();
  }

  // REJECTED CHECK — kept as an opt-in diagnostic, deliberately NOT part of
  // run()'s `clean` verdict. Compares KW_STORY_LEX's authored role against the
  // word class KW_GLOBAL_LEXICON records for the same surface.
  //
  // Trialled as a way to catch `Willkommen` at the data layer, then rejected:
  // it returned 31 results on A1-1 of which ~28 are CORRECT by design, because
  // POS_ROLE maps a coarse word class to a DEFAULT role while the story lexicon
  // legitimately assigns finer semantic roles — `mich` Pronoun→r-akkusativ,
  // `abend` Noun→r-time, `hier` Adverb→r-place, `nicht` Adverb→r-negation,
  // `wann` Adverb→r-question are all right. The remainder are genuine
  // dual-class homographs (`das` article+pronoun, `bis` conj+prep, `arm`
  // adj+noun, `zahlen` verb+noun) which are also not defects.
  //
  // Signal-to-noise made it unusable as a standing check, and check A catches
  // the learner-visible defect directly. Documented so it is not rebuilt.
  function lexiconRoleVsClass() {
    var SL = window.KW_STORY_LEX || {}, GL = window.KW_GLOBAL_LEXICON || {};
    var out = [];
    Object.keys(SL).forEach(function (k) {
      var s = SL[k], g = GL[k];
      if (!s || !g || !s.role || !g.type) return;
      var expected = POS_ROLE[wordClassOf(g.type)];
      if (!expected) return;
      if (String(s.role).replace('r-', '') !== expected) {
        out.push({ w: k, storyLexRole: s.role, storyLexType: s.type || null, glexType: g.type, expectedFromGlex: 'r-' + expected });
      }
    });
    return out;
  }

  function roleOf(el) {
    var m = String(el.className).match(/\br-([a-z-]+)/);
    if (m) return m[1];
    return /\bplain\b/.test(el.className) ? 'plain' : '';
  }

  // Hidden nodes (collapsed accordions, unrevealed solutions, inactive quiz
  // steps) have no computed colour or cursor and are not learner-facing in
  // that state — scanning them yields empty-string false positives.
  function isRendered(el) {
    return !!(el.offsetParent || el.getClientRects().length);
  }

  function sectionOf(el) {
    var s = el.closest('[id^="sec-"]');
    return s ? s.id : '(none)';
  }

  function run(sectionId) {
    var root = sectionId ? document.getElementById(sectionId) : document;
    if (!root) return { error: 'no such section: ' + sectionId };
    var nodes = [].slice.call(root.querySelectorAll('.rw, .de-link'))
      .filter(function (n) { return !n.querySelector('.rw, .de-link'); })
      // Never scan the popup's own recursive links: they belong to whatever
      // entry is currently open, and the popup is re-rendered (and its old
      // nodes detached) on every click in this loop — detached nodes report
      // empty computed styles and produce phantom findings.
      .filter(function (n) { return !n.closest('.word-pop'); });
    var hidden = nodes.filter(function (n) { return !isRendered(n); }).length;
    nodes = nodes.filter(isRendered);

    var roleMismatch = [], paradigmMismatch = [], colourDefect = [], missingBadge = [], noPopup = [];
    // Start from a known-clean state. A popup left open by an earlier run (or by
    // the user) would otherwise seed the stale-popup comparison below with a
    // foreign headword, letting the FIRST occurrence scanned be mistaken for a
    // successful open — which reported "Heft" as an amber-headword colour defect
    // when the amber belonged to a word clicked in the previous scan.
    var opener = document.querySelector('.wp-close');
    if (opener) opener.click();
    var prevHead = (function () {
      var p = document.querySelector('.word-pop');
      var h = p && p.querySelector('.word-pop-de');
      return h ? h.textContent.trim() : null;
    })();
    var letterRoles = {};
    var checked = 0;

    nodes.forEach(function (n, i) {
      var word = n.textContent.trim();
      var role = roleOf(n);
      var sec = sectionOf(n);
      var colour = getComputedStyle(n).color;
      var cursor = getComputedStyle(n).cursor;
      var inChip = !!n.closest('.vword-tag');

      if (BAD_COLORS[colour]) colourDefect.push({ i: i, sec: sec, w: word, colour: colour, why: BAD_COLORS[colour] });
      if (cursor !== 'pointer') colourDefect.push({ i: i, sec: sec, w: word, why: 'clickable word without pointer cursor', cursor: cursor });

      n.click();
      // The popup is a single reused node: if this click did not open one, the
      // PREVIOUS word's popup is still in the DOM and every check below would
      // silently compare against it. That is how four nouns inside MCQ answer
      // buttons were reported as "badged Adjective" — they never opened a popup
      // at all; the badge belonged to the previously clicked word.
      //
      // Detect a real open by content, NOT by the .is-open class: that class is
      // added inside requestAnimationFrame, which never runs during this
      // synchronous loop. A click counts as opened when the headword now names
      // the clicked surface, or when the headword changed from the previous
      // iteration (covers entries whose headword is the lemma of an inflected
      // surface, e.g. clicking "Äpfel" showing "Apfel").
      var pop = document.querySelector('.word-pop');
      var headEl = pop && pop.querySelector('.word-pop-de');
      var headText = headEl ? headEl.textContent.trim() : '';
      var opened = !!pop && (headText.toLowerCase() === word.toLowerCase() || headText !== prevHead);
      prevHead = headText;
      if (!opened) {
        // Inside an interactive control (MCQ option, drag token) the popup is
        // suppressed on purpose so a word cannot leak an exercise answer.
        // Only report the cases NOT explained by that.
        if (!n.closest('button, [role="button"], input, label, textarea')) {
          noPopup.push({ i: i, sec: sec, w: word });
        }
        return;
      }
      checked++;
      var badge = (pop.querySelector('.wp-badge') || {}).textContent || '';
      var secs = [].slice.call(pop.querySelectorAll('.wp-section-title')).map(function (e) { return e.textContent.trim(); });
      var bc = badgeClass(badge);

      if (!badge.trim()) missingBadge.push({ i: i, w: word });

      // CHECK A — badge word class vs rendered role colour (the §10 blind spot).
      if (bc && role && OK[bc] && OK[bc].indexOf(role) === -1) {
        roleMismatch.push({ i: i, sec: sec, w: word, badge: badge.trim(), badgeClass: bc, role: 'r-' + role, colour: colour });
      }

      // CHECK B — badge word class vs paradigm section (the §8 blind spot).
      secs.forEach(function (s) {
        var want = SEC_WANT[s];
        if (want && bc && want.indexOf(bc) === -1) paradigmMismatch.push({ i: i, sec: sec, w: word, badge: badge.trim(), section: s });
      });

      // CHECK C — popup headword colour must equal the occurrence colour,
      // EXCEPT inside a .vword-tag chip, where chip styling intentionally wins.
      var head = headEl;
      if (head && !inChip && getComputedStyle(head).color !== colour) {
        colourDefect.push({ i: i, sec: sec, w: word, why: 'popup headword colour ≠ occurrence colour', span: colour, head: getComputedStyle(head).color });
      }

      // CHECK D — surface-stable roles only: a letter/sound must resolve to the
      // SAME role at every occurrence. (Occurrence-bound roles legitimately
      // vary, so they are deliberately not compared across occurrences.)
      if (bc === 'letter' || role === 'letter') {
        (letterRoles[word.toLowerCase()] = letterRoles[word.toLowerCase()] || {})[role || '(none)'] = true;
      }
    });

    var close = document.querySelector('.wp-close');
    if (close) close.click();

    var splitLetterRole = Object.keys(letterRoles)
      .filter(function (k) { return Object.keys(letterRoles[k]).length > 1; })
      .map(function (k) { return { w: k, roles: Object.keys(letterRoles[k]) }; });

    var lexConflict = lexiconRoleVsClass();

    return {
      chapter: document.title,
      scope: sectionId || '(whole page)',
      occurrences: nodes.length,
      hiddenSkipped: hidden,
      checked: checked,
      roleMismatch: roleMismatch,
      paradigmMismatch: paradigmMismatch,
      splitLetterRole: splitLetterRole,
      colourDefect: colourDefect,
      missingBadge: missingBadge,
      noPopup: noPopup,
      // Diagnostic only — excluded from `clean` (see lexiconRoleVsClass).
      _lexiconRoleVsClass: lexConflict,
      clean: !roleMismatch.length && !paradigmMismatch.length && !splitLetterRole.length &&
             !colourDefect.length && !missingBadge.length && !noPopup.length
    };
  }

  window.KWAudit = { run: run, lexiconRoleVsClass: lexiconRoleVsClass, badgeClass: badgeClass, OK: OK };
})();
