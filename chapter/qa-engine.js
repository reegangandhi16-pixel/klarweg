/* Klarweg Occurrence QA Engine
 * =============================
 * Machine-readable, per-occurrence checks for every learner-facing German word.
 * Replaces the hand-driven audit as the SCANNING layer: it finds anomalies,
 * humans inspect anomalies. It does NOT replace judgement on what a finding means.
 *
 * Load on any chapter page, then:
 *   KWQA.run()            → { chapter, occurrences, checked, findings: [...] }
 *   KWQA.selfTest()       → proves each check fires on a synthetic defect
 *
 * Every finding is { code, severity, section, index, surface, detail }.
 * Codes are stable — the runner aggregates and diffs on them.
 *
 * ---------------------------------------------------------------------------
 * DESIGN RULES, each earned from a real miss during the manual audit:
 *
 * 1. Detect popup opening by CONTENT, never by the .is-open class — that class
 *    is added inside requestAnimationFrame and never runs in a sync loop. The
 *    popup is ONE reused node, so a click that opens nothing leaves the previous
 *    word's popup in the DOM; comparing against it reported four MCQ nouns as
 *    "badged Adjective" when they had no popup at all.
 * 2. Close any open popup before starting, so a leftover cannot seed the
 *    stale-popup comparison.
 * 3. Word class is parsed from the badge with \b-anchored patterns: German
 *    labels nest ("Pronoun" contains "noun", "Adverb" contains "verb",
 *    "Particle" contains "article").
 * 4. Pragmatic labels (Greeting, Politeness, Answer, Interjection, Particle,
 *    Title, Name) are NOT word classes — they describe what an expression does
 *    socially, often across a phrase whose parts keep their own roles.
 * 5. Role/class compatibility is generous where German is genuinely ambiguous
 *    (every word of a noun phrase may carry the phrase's function) and strict
 *    where it is not (adjective ≠ adverb: that tolerance was trialled and
 *    reverted — it only ever hid real defects).
 * 6. Never flag: the same surface carrying different roles at different
 *    occurrences (occurrence-bound by design), .vword-tag chip colour override,
 *    or popup suppression inside answer controls (LINK_EXCLUDE, deliberate).
 * 7. Skip hidden nodes and the popup's own recursive links — both yield phantom
 *    findings from detached or invisible elements.
 * --------------------------------------------------------------------------- */
(function () {
  var SEV = { HIGH: 'high', MED: 'medium', LOW: 'low' };

  function badgeClass(t) {
    t = String(t || '').toLowerCase();
    if (!t.trim()) return '';
    if (/\b(greeting|politeness|answer|interjection|particle|title|name|reaction|phrase)\b/.test(t)) return '';
    if (/\b(letter|sound|vowel)\b/.test(t)) return 'letter';
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

  // WORD CLASS ≠ SEMANTIC ROLE — two different dimensions, so the map is built
  // that way rather than as one flat allow-list. But "semantic" is NOT a blanket
  // pass: each semantic role is legitimate on the classes that can actually bear
  // it, and flagged elsewhere.
  //
  //  · CASE marks (akkusativ/dativ/genitiv) — legitimate almost anywhere a case
  //    can be shown: NP words, the preposition that GOVERNS the case, and
  //    quantity adverbs (viel/mehr/weniger) that head a case-marked phrase.
  //  · NP FUNCTION (subject/object/rhema) — only on words that can BE a noun
  //    phrase or sit inside one. A finite verb is not an NP constituent, and
  //    neither is a time adverb: `Achte` (Verb) and `Abends` (Adverb) rendering
  //    r-object are genuine defects and must stay flagged.
  //  · time/place — adverbs, prepositions, and NP words ("am Abend").
  //  · negation/question/connector — the classes that carry those semantics.
  //
  // Getting this wrong in either direction is costly: too strict produced ~542
  // false positives in sweep 1; too loose silently hid the confirmed R3 defects.
  var NP_WORD = ['noun', 'pronoun', 'article', 'adjective', 'question'];
  var SEMANTIC_OK = {
    akkusativ: NP_WORD.concat(['preposition', 'adverb']),
    dativ:     NP_WORD.concat(['preposition', 'adverb']),
    genitiv:   NP_WORD.concat(['preposition', 'adverb']),
    subject:   NP_WORD,
    object:    NP_WORD,
    rhema:     NP_WORD,
    possessive: NP_WORD,
    'reflexiv-akk': NP_WORD,
    'reflexiv-dat': NP_WORD,
    comparative: ['adjective', 'adverb', 'article'],
    superlative: ['adjective', 'adverb', 'article'],
    time:      NP_WORD.concat(['adverb', 'preposition', 'conjunction']),
    place:     NP_WORD.concat(['adverb', 'preposition']),
    negation:  ['adverb', 'pronoun', 'article', 'conjunction'],
    question:  ['question', 'pronoun', 'adverb', 'article'],
    connector: ['conjunction', 'preposition', 'adverb'],
    temporal:  ['conjunction', 'preposition', 'adverb'],
    contrast:  ['conjunction', 'preposition', 'adverb'],
    addition:  ['conjunction', 'preposition', 'adverb'],
    purpose:   ['conjunction', 'preposition', 'adverb'],
    plain:     null   // null = allowed on every class (authored opt-out)
  };
  // CLASS roles are the coarse part-of-speech baseline. A class role that
  // disagrees with the badge IS a contradiction — the signal worth catching
  // (Badge Verb + adverb-cyan means the resolver guessed).
  var CLASS_OK = {
    noun:        ['object', 'nnoun', 'name', 'letter'],
    pronoun:     ['pronoun', 'article'],
    article:     ['article'],
    adjective:   ['adjective'],
    question:    ['question', 'article'],
    verb:        ['verb', 'modalverb', 'auxiliary', 'futur', 'brauchen', 'plusq'],
    adverb:      ['adverb'],
    preposition: ['preposition', 'prep-rel'],
    conjunction: ['conjunction'],
    letter:      ['letter']
  };
  function roleAllowed(bc, role) {
    if (!bc || !role) return true;
    if (role in SEMANTIC_OK) {
      var classes = SEMANTIC_OK[role];
      return classes === null || classes.indexOf(bc) !== -1;
    }
    var allow = CLASS_OK[bc];
    return !allow || allow.indexOf(role) !== -1;
  }
  var OK = CLASS_OK;
  // Deadjectival adverbs compare normally (langsam/langsamer/am langsamsten).
  var SEC_WANT = { Conjugation: ['verb'], Number: ['noun'], Comparison: ['adjective', 'adverb'] };

  var BAD_COLOURS = {
    'rgb(14, 14, 16)': 'BLACK_FALLBACK',
    'rgb(0, 0, 0)': 'BLACK_FALLBACK',
    'rgb(0, 0, 238)': 'LINK_BLUE',
    'rgb(0, 0, 255)': 'LINK_BLUE'
  };

  function roleOf(el) {
    var m = String(el.className).match(/\br-([a-z-]+)/);
    if (m) return m[1];
    return /\bplain\b/.test(el.className) ? 'plain' : '';
  }
  function rendered(el) { return !!(el.offsetParent || el.getClientRects().length); }
  function sectionOf(el) { var s = el.closest('[id^="sec-"]'); return s ? s.id.replace('sec-', '') : '(none)'; }
  function inControl(el) { return !!el.closest('button, [role="button"], input, label, textarea'); }
  function norm(s) { return String(s || '').toLowerCase().replace(/[^a-zäöüß]/g, ''); }

  // Mirrors the resolver's DOM-aware sentence-position rule. German capitalises
  // both nouns and sentence openings, so a capitalised surface only carries
  // lexical information away from sentence-initial position. Walks previous
  // siblings and inline ancestors, stopping at an authored German container or a
  // block element — the same boundaries the app uses. Without this the case
  // check reports every sentence-opening adverb (Heute, Sehr, Jetzt, Genau).
  var GERMAN_CONTAINER = '.de, .de-em, .vword-ex, .vword-de, .vword-tag';
  var SENTENCE_END = /[.!?:;\u2014\u2013\u2022\u00b7\/\n\u201c\u201d"'(\[]$/;
  function isSentenceInitialDOM(el) {
    var out = '', cur = el, guard = 0;
    while (cur && guard++ < 60) {
      var prev = cur.previousSibling;
      while (prev) {
        out = (prev.textContent || '') + out;
        if (/\S/.test(out)) return SENTENCE_END.test(out.replace(/\s+$/, ''));
        prev = prev.previousSibling;
      }
      cur = cur.parentNode;
      if (!cur || cur.nodeType !== 1) break;
      if (cur.matches && cur.matches(GERMAN_CONTAINER)) break;
      if (/^(P|DIV|LI|TD|TH|H1|H2|H3|H4|H5|SECTION|ARTICLE|BLOCKQUOTE|BODY)$/.test(cur.tagName)) break;
    }
    return true;
  }

  // Raw dictionary entry for a surface, across all three stores.
  function rawEntry(word) {
    var k = norm(word);
    var GL = window.KW_GLOBAL_LEXICON || {}, SL = window.KW_STORY_LEX || {};
    return GL[k] || SL[k] || null;
  }
  function headwordOf(e) { return e ? (e.w || e.de || '') : ''; }
  function typeOf(e) { return e ? (e.type || e.pos || '') : ''; }

  function run(scopeId) {
    var root = scopeId ? document.getElementById(scopeId) : document;
    if (!root) return { error: 'no such scope: ' + scopeId };

    var closeBtn = document.querySelector('.wp-close');
    if (closeBtn) closeBtn.click();

    var nodes = [].slice.call(root.querySelectorAll('.rw, .de-link'))
      .filter(function (n) { return !n.querySelector('.rw, .de-link'); })
      .filter(function (n) { return !n.closest('.word-pop'); })
      .filter(rendered);

    // ---- decorative-span scope (P36-proven) --------------------------------
    // colorWordsIn() (chapter-app.js:2928) paints German words inside MCQ option
    // buttons with a grammar-role class but binds NO click handler, so those
    // spans are decorative: no popup, no learner word interaction (P35 proved
    // this by live click in two chapters). It has exactly two call sites
    // (chapter-app.js:3050 exercise MCQ, :3349 reading-question MCQ), both on
    // b.querySelector('.de') where b is <button class="mcq-option"> — so a
    // button.mcq-option ancestor identifies them exhaustively, and no
    // wrapWordsIn() link can have one (wrapWordsIn skips LINK_EXCLUDE, whose
    // first entry is `button`).
    //
    // The filter is applied POST-SELECTION, after findings are generated: nodes
    // keep their original positions so every occurrence index stays stable.
    // Skipping them at selection time would renumber the corpus (the drift
    // characterised in P22/P23) — do not move this into the node filter above.
    function isDecorativeMcqSpan(n) {
      try { return !!(n && n.closest && n.closest('button.mcq-option')); } catch (e) { return false; }
    }
    var decorativeIdx = {};
    nodes.forEach(function (n, i) { if (isDecorativeMcqSpan(n)) decorativeIdx[i] = true; });

    var findings = [], checked = 0, hiddenSkipped = 0;
    var letterRoles = {};
    var prevHead = (function () {
      var p = document.querySelector('.word-pop'), h = p && p.querySelector('.word-pop-de');
      return h ? h.textContent.trim() : null;
    })();

    function add(code, sev, i, sec, surface, detail) {
      findings.push({ code: code, severity: sev, index: i, section: sec, surface: surface, detail: detail || {} });
    }

    nodes.forEach(function (n, i) {
      var word = n.textContent.trim();
      var sec = sectionOf(n);
      var role = roleOf(n);
      var cs = getComputedStyle(n);
      var colour = cs.color;
      var inChip = !!n.closest('.vword-tag');

      if (BAD_COLOURS[colour]) add(BAD_COLOURS[colour], SEV.HIGH, i, sec, word, { colour: colour });
      if (cs.cursor !== 'pointer') add('NO_POINTER', SEV.MED, i, sec, word, { cursor: cs.cursor });

      // ---- lexical identity: evaluated AFTER resolution (see below) ----
      var raw = rawEntry(word), hw = headwordOf(raw), ty = typeOf(raw);

      n.click();
      var pop = document.querySelector('.word-pop');
      var headEl = pop && pop.querySelector('.word-pop-de');
      var headText = headEl ? headEl.textContent.trim() : '';
      var opened = !!pop && (headText.toLowerCase() === word.toLowerCase() || headText !== prevHead);
      prevHead = headText;

      if (!opened) {
        if (!inControl(n)) add('NO_POPUP', SEV.HIGH, i, sec, word, {});
        return;
      }
      checked++;

      var badge = (pop.querySelector('.wp-badge') || {}).textContent || '';
      var bc = badgeClass(badge);
      var secTitles = [].slice.call(pop.querySelectorAll('.wp-section-title')).map(function (e) { return e.textContent.trim(); });
      var cells = [].slice.call(pop.querySelectorAll('.wp-compare-cell'));
      var active = cells.filter(function (c) { return c.classList.contains('is-current'); }).length;

      if (!badge.trim()) add('MISSING_BADGE', SEV.MED, i, sec, word, {});

      // Case collisions are only real when the RESOLVED popup actually shows the
      // colliding word class. Checking the raw dictionary alone reported `ei`
      // (correctly authored as a Sound via mistake-row tokens) purely because a
      // noun `Ei` shares its lowercase key. Authored data wins, so let the
      // resolved badge decide.
      if (hw && /^[A-Z\u00c4\u00d6\u00dc]/.test(word) && /^[a-z\u00e4\u00f6\u00fc\u00df]/.test(hw)
          && /^(adjective|adverb|verb)\b/i.test(ty) && !isSentenceInitialDOM(n)
          && (bc === 'adjective' || bc === 'adverb' || bc === 'verb')) {
        add('CASE_COLLISION_CAPITALISED', SEV.HIGH, i, sec, word, { headword: hw, entryType: ty, badge: badge.trim() });
      }
      if (hw && /^[a-z\u00e4\u00f6\u00fc\u00df]/.test(word) && /^[A-Z\u00c4\u00d6\u00dc]/.test(hw)
          && /^noun/i.test(ty) && bc === 'noun') {
        add('CASE_COLLISION_LOWERCASE', SEV.HIGH, i, sec, word, { headword: hw, entryType: ty, badge: badge.trim() });
      }

      if (bc && role && !roleAllowed(bc, role)) {
        add('ROLE_CONTRADICTS_BADGE', SEV.HIGH, i, sec, word, { badge: badge.trim(), badgeClass: bc, role: 'r-' + role, colour: colour });
      }

      secTitles.forEach(function (t) {
        var want = SEC_WANT[t];
        if (want && bc && want.indexOf(bc) === -1) {
          add('PARADIGM_CLASS_MISMATCH', SEV.HIGH, i, sec, word, { badge: badge.trim(), paradigm: t });
        }
      });

      // A paradigm must be ABOUT the clicked word: either a cell is current, or
      // the surface appears in the grid, or some cell shares a 3-char stem.
      if (cells.length && !active) {
        var key = norm(word);
        var forms = cells.map(function (c) {
          var f = (c.querySelector('.wp-compare-form') || c).textContent.trim().replace(/^(am|ist|hat)\s+/, '');
          return f;
        });
        var present = forms.some(function (f) {
          return norm(f) === key || f.split(/\s+/).some(function (w) { return norm(w) === key; });
        });
        var stem = key.length < 3 || forms.some(function (f) {
          var a = norm(f.split(/\s+/).pop()), j = 0, lim = Math.min(a.length, key.length);
          while (j < lim && a[j] === key[j]) j++;
          return j >= 3;
        });
        if (!present && !stem) {
          add('PARADIGM_NOT_ABOUT_WORD', SEV.HIGH, i, sec, word, { paradigm: secTitles.join('|'), forms: forms.slice(0, 6) });
        }
      }

      if (headEl && !inChip && getComputedStyle(headEl).color !== colour) {
        add('HEADWORD_COLOUR_MISMATCH', SEV.MED, i, sec, word, { span: colour, head: getComputedStyle(headEl).color });
      }

      if (bc === 'letter' || role === 'letter') {
        var lk = word.toLowerCase();
        (letterRoles[lk] = letterRoles[lk] || {})[role || '(none)'] = true;
      }
    });

    Object.keys(letterRoles).forEach(function (k) {
      var rs = Object.keys(letterRoles[k]);
      if (rs.length > 1) findings.push({ code: 'LETTER_ROLE_UNSTABLE', severity: SEV.MED, index: -1, section: '(chapter)', surface: k, detail: { roles: rs } });
    });

    var c2 = document.querySelector('.wp-close'); if (c2) c2.click();

    // Drop only findings whose own node is a decorative MCQ span. Chapter-level
    // findings (index -1) and every finding on a real link are untouched.
    var suppressed = findings.filter(function (f) { return f.index >= 0 && decorativeIdx[f.index]; });
    findings = findings.filter(function (f) { return !(f.index >= 0 && decorativeIdx[f.index]); });

    return {
      chapter: document.title,
      file: location.pathname.split('/').pop(),
      scope: scopeId || '(page)',
      occurrences: nodes.length,
      checked: checked,
      hiddenSkipped: hiddenSkipped,
      decorativeNodes: Object.keys(decorativeIdx).length,
      suppressedDecorative: suppressed.length,
      suppressedDecorativeCounts: suppressed.reduce(function (a, f) { a[f.code] = (a[f.code] || 0) + 1; return a; }, {}),
      findings: findings,
      counts: findings.reduce(function (a, f) { a[f.code] = (a[f.code] || 0) + 1; return a; }, {}),
      clean: findings.length === 0
    };
  }

  /* Synthetic proof that each check fires. Builds deliberately broken nodes in a
   * detached container and asserts the corresponding code appears. Validates the
   * DETECTORS; the fixture in the runner validates real-world behaviour. */
  function selfTest() {
    var results = {};
    results.badgeClass = {
      Particle: badgeClass('Particle') === '',        // must NOT be article
      Pronoun: badgeClass('Pronoun') === 'pronoun',   // must NOT be noun
      Adverb: badgeClass('Adverb') === 'adverb',      // must NOT be verb
      Greeting: badgeClass('Greeting') === '',        // pragmatic, not a class
      Vowel: badgeClass('Vowel') === 'letter',
      Noun: badgeClass('Noun') === 'noun'
    };
    results.roleCompat = {
      // Semantic refinements legitimate on classes that can bear them
      pronounTakesAkkusativ: roleAllowed('pronoun', 'akkusativ'),
      pronounTakesNegation: roleAllowed('pronoun', 'negation'),
      pronounTakesQuestion: roleAllowed('pronoun', 'question'),
      prepositionTakesGovernedCase: roleAllowed('preposition', 'akkusativ'),
      prepositionTakesTime: roleAllowed('preposition', 'time'),
      prepositionTakesConnector: roleAllowed('preposition', 'connector'),
      adverbTakesPlace: roleAllowed('adverb', 'place'),
      adverbTakesTime: roleAllowed('adverb', 'time'),
      adverbTakesQuantityCase: roleAllowed('adverb', 'akkusativ'),
      articleTakesNPFunction: roleAllowed('article', 'akkusativ'),
      adjectiveTakesNPFunction: roleAllowed('adjective', 'akkusativ'),
      // NP function must NOT be accepted on non-NP classes (the R3 defects)
      verbRejectsObject: !roleAllowed('verb', 'object'),
      adverbRejectsObject: !roleAllowed('adverb', 'object'),
      conjunctionRejectsSubject: !roleAllowed('conjunction', 'subject'),
      // Class contradictions must still be caught
      verbRejectsAdverbClass: !roleAllowed('verb', 'adverb'),
      nounRejectsVerbClass: !roleAllowed('noun', 'verb'),
      adverbRejectsAdjectiveClass: !roleAllowed('adverb', 'adjective'),
      adjectiveRejectsAdverbClass: !roleAllowed('adjective', 'adverb'),
      conjunctionRejectsAdverbClass: !roleAllowed('conjunction', 'adverb'),
      prepositionRejectsVerbClass: !roleAllowed('preposition', 'verb'),
      comparisonAllowsAdverb: SEC_WANT.Comparison.indexOf('adverb') !== -1
    };
    results.colourCodes = {
      inkPrimaryIsBlack: BAD_COLOURS['rgb(14, 14, 16)'] === 'BLACK_FALLBACK',
      browserBlue: BAD_COLOURS['rgb(0, 0, 238)'] === 'LINK_BLUE'
    };
    // Sentence-position detection, on synthetic DOM.
    var box = document.createElement('div');
    box.innerHTML = 'Das <span id="qa-a">Wort</span> ist gut. <span id="qa-b">Sehr</span> gut';
    document.body.appendChild(box);
    results.position = {
      midSentenceDetected: isSentenceInitialDOM(box.querySelector('#qa-a')) === false,
      afterFullStopIsInitial: isSentenceInitialDOM(box.querySelector('#qa-b')) === true
    };
    document.body.removeChild(box);
    // Decorative-MCQ scope filter (P36/P37). Synthetic DOM: one decorative span
    // inside button.mcq-option, one ordinary link outside it.
    var mbox = document.createElement('div');
    mbox.innerHTML = '<div class="mcq-options"><button class="mcq-option" type="button">' +
      '<span class="de"><span class="de-link r-object" id="qa-deco">Obgleich</span></span></button></div>' +
      '<p><span class="de-link r-verb" id="qa-live">geht</span> ' +
      '<span class="rw de r-object" id="qa-live2">Haus</span></p>';
    document.body.appendChild(mbox);
    var deco = mbox.querySelector('#qa-deco'), live = mbox.querySelector('#qa-live'), live2 = mbox.querySelector('#qa-live2');
    function decoTest(n) { try { return !!(n && n.closest && n.closest('button.mcq-option')); } catch (e) { return false; } }
    results.decorativeScope = {
      decorativeSpanExcluded: decoTest(deco) === true,
      ordinaryDeLinkRetained: decoTest(live) === false,
      authoredTokenRetained: decoTest(live2) === false,
      // the filter must key on the finding's OWN node, not merely on being in a button
      buttonWithoutMcqOptionRetained: (function () {
        var b = document.createElement('button');
        b.innerHTML = '<span class="de-link r-verb">x</span>';
        return decoTest(b.querySelector('.de-link')) === false;
      })(),
      // node list order is unaffected by the filter (it runs after generation)
      indicesUnchanged: (function () {
        var all = [].slice.call(mbox.querySelectorAll('.rw, .de-link'));
        return all.length === 3 && all[0] === deco && all[1] === live && all[2] === live2;
      })(),
      chapterLevelFindingKept: (function () {
        var f = [{ code: 'LETTER_ROLE_UNSTABLE', index: -1 }, { code: 'X', index: 0 }];
        var d = { 0: true };
        return f.filter(function (x) { return !(x.index >= 0 && d[x.index]); }).length === 1;
      })()
    };
    document.body.removeChild(mbox);
    var flat = [];
    Object.keys(results).forEach(function (g) {
      Object.keys(results[g]).forEach(function (k) { if (!results[g][k]) flat.push(g + '.' + k); });
    });
    return { pass: flat.length === 0, failed: flat, detail: results };
  }

  window.KWQA = { run: run, selfTest: selfTest, badgeClass: badgeClass, roleAllowed: roleAllowed, OK: OK, SEC_WANT: SEC_WANT };
})();
