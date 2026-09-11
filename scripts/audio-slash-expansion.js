/* Klarweg — slash-notation spoken-form classifier.
   Turns a DISPLAYED slash term into the text TTS should speak (renderText).
   It never touches manifestKey or assetId: identity stays on the displayed
   string, expansion changes only what is spoken.

   This module owns ONLY the two SAFE structural shapes, in which every spoken
   form is already authored in the display and nothing is derived:

     SHAPE_1_ARTICLE_PAIR   ["der", "die X", "Xfem"]  -> "der X, die Xfem"
         The two articles are separated by the first slash and the two nouns by
         the second, so the display carries both full forms; reassembly only
         re-pairs article with noun. Because the feminine is READ rather than
         built, the cases that defeat suffix rules are safe here:
         Pate/Patin (-e drop), Bewunderer/Bewunderin (-erer), Witwer/Witwe
         (feminine shorter), Stuntman/Stuntfrau (suppletive).

     SHAPE_2_PARALLEL_NOUN_PHRASES  every segment is article + noun
         -> segments joined with ", ", preserved verbatim.
         The article requirement is the safety property, not decoration: it
         proves each segment is a COMPLETE noun phrase and that the segments
         are PARALLEL. Without it, "hat/ist eingetaucht" (auxiliary pair over a
         shared participle) and "umgangen / ist umgegangen" (participle
         contrast) look identical to a real alternation and would be misspoken.

     SHAPE_3_STANDALONE_JOIN  every segment is a free-standing speakable word
         -> segments joined with ", ", preserved verbatim.
         Covers gender PLURAL pairs whose feminine is displayed rather than
         derived (Muslime/Musliminnen) and determiner or adjective ending
         contrasts (mein/meine, großer/große/großes). Distinct from SHAPE_2,
         which needs an article on every segment: here segments are bare words,
         so the guards are that each is a FREE word rather than an inflection
         fragment, plus the auxiliary and acoustic-collision gates below.

     SHAPE_4_SHARED_WEAK_HEAD  ["der", "die X"] where X ends in -e
         -> "der X, die X"
         A nominalized adjective or participle written once, with the masculine
         article split off by the slash. After a definite article these take
         WEAK declension, so both genders share one surface form and the head
         is copied verbatim — nothing derived, nothing invented.

         The -e requirement is the whole safety property, not cosmetic. Without
         it the shape also matches AGENT NOUNS (der/die Begleiter, der/die
         Konsument, der/die Schwager), whose feminine is NOT the displayed head
         but Begleiterin / Konsumentin / Schwägerin — so the rule would speak
         "die Begleiter", which is wrong German. Weak nominalized adjectives
         end in -e; -er/-ent/-eur agent nouns belong to the bound-suffix family
         and are declined here. Mirrors the frozen B 3-segment rule, which
         requires the same -e ending for the same reason.

   Everything else returns null and is left to its existing owner: the bound
   gender-suffix family (/in, /innen, /r), ordinary single-token alternations,
   and the author-decision items. Returning null is the safe default — a caller
   must never synthesize a term this module declined.

   No lexicon lookup, no morphology, no per-word exceptions. */
(function (root) {
  'use strict';

  var ARTICLE = /^(der|die|das)$/i;
  var ARTICLE_PREFIX = /^(der|die|das)\s+(.+)$/i;
  var BOUND_SUFFIX = /^(in|innen|r|e|n|s)$/i;   // owned by the suffix family
  var GLOSS = /\([^)]*\)/;                       // "(countable)" — not speakable
  var ELLIPSIS = /…|\.\.\./;                     // "geht … um" — placeholder slot

  /* ---- parenthetical constructions -------------------------------------
     A trailing parenthesis means three different things in this corpus, and a
     blanket strip mishandles all three:

       reflexive   "orientieren (sich)"   -> "sich orientieren"   REORDER
       valency     "sorgen (für)"         -> "sorgen für"         DELETE parens
       expansion   "qm (Quadratmeter)"    -> ?                    DECLINE

     Stripping blindly would yield "orientieren sich" (wrong order), "qm"
     (drops the expansion) and "sehr geehrte" (silently picks one inflection).
     Each rule below therefore matches one construction exactly.

     REFLEXIVE is self-identifying: the parenthetical is literally "sich", a
     closed-class pronoun that can mean nothing else in this position.

     VALENCY is NOT self-identifying from the string — "(für)" looks identical
     in "sorgen (für)" (a verb's valency) and "gemacht sein (für)" (an idiom
     whose citation form is "für etwas gemacht sein"). The display text alone
     cannot separate them, so the rule is gated on the caller supplying the
     authored part-of-speech, and declines when it is absent. */
  var GERMAN_PREPOSITIONS = ['für', 'auf', 'an', 'mit', 'über', 'um', 'von', 'zu', 'bei',
    'nach', 'vor', 'aus', 'in', 'gegen', 'durch', 'ohne', 'wegen', 'trotz'];
  var PAREN_TAIL = /^(.+?)\s*\(([^()]+)\)$/;

  /* Complete words that must still NOT be comma-joined: an auxiliary segment
     means the slash shares a participle across it ("hat/ist eingetaucht"),
     so joining would read out a construction rather than two alternatives. */
  var AUXILIARY = /^(hat|ist|hatte|war|haben|sind|bin|bist)$/i;

  /* Acoustic identity — what TTS actually produces. Capitalisation is inaudible,
     so segments differing only in case are the SAME spoken form. */
  function acousticKey(s) {
    return String(s == null ? '' : s).toLowerCase().replace(/\s+/g, ' ').trim();
  }

  /* ---- CROSS-TERM ACOUSTIC INDEX ---------------------------------------
     The check inside SHAPE_3 catches segments of ONE term that sound alike.
     It cannot catch the other failure mode: two DISTINCT display terms whose
     spoken forms are identical. "ihr/ihre" and "Ihr/Ihre" are separate cards
     (informal vs. formal possessive) that both speak as "ihr, ihre" — TTS
     cannot voice capitalisation, so one asset would answer two cards.

     That collision is not visible in a single row: it is a property of the
     SET. So the module keeps an index of spokenForm -> display terms, and
     classify() refuses any term whose spoken form is claimed by more than one
     display term. indexTerms() populates it; acceptBatch() does so
     automatically. With an empty index classify() behaves exactly as before,
     so no existing mapping changes.

     Generic by construction: the index stores whatever it is given and the
     rule is "more than one display term, same spoken form". No term is named. */
  var ACOUSTIC_INDEX = Object.create(null);

  function spokenFormOf(display, opts) {
    var c = classifyRaw(display, opts);
    return c && c.renderText ? acousticKey(c.renderText) : null;
  }

  /** Register display terms so cross-term collisions become detectable. */
  function indexTerms(terms, opts) {
    (terms || []).forEach(function (t) {
      var display = String(t && t.display != null ? t.display : t).trim();
      if (!display) return;
      var k = spokenFormOf(display, t && t.opts ? t.opts : opts);
      if (!k) return;
      if (!ACOUSTIC_INDEX[k]) ACOUSTIC_INDEX[k] = [];
      if (ACOUSTIC_INDEX[k].indexOf(display) === -1) ACOUSTIC_INDEX[k].push(display);
    });
    return ACOUSTIC_INDEX;
  }

  function indexedRivals(display, spoken) {
    var owners = ACOUSTIC_INDEX[spoken] || [];
    return owners.filter(function (o) { return o !== String(display).trim(); });
  }

  function resetIndex() { ACOUSTIC_INDEX = Object.create(null); return ACOUSTIC_INDEX; }

  /* AUTHORED MAPPINGS — explicit editorial data, never a morphology rule.
     Same architecture as the 13 authored A2 gender-suffix mappings: a display
     term whose spoken form cannot be recovered from its own displayed material
     is listed here verbatim, and the classifier reads it rather than deriving.
     Adding an entry must never change how any other term is treated. */
  var AUTHORED_MAPPINGS = {
    // Sibling-corroborated. The sibling plural card (Anrufer/innen -> "Anrufer,
    // Anruferinnen") authors the PLURAL feminine only; the singular feminine is
    // not present as an authored token, so it is recorded here explicitly
    // rather than obtained by stripping -nen, which would be derivation.
    'der/die Anrufer': 'der Anrufer, die Anruferin',
    'der/die Prüfer': 'der Prüfer, die Prüferin',
    'der/die Kunstturner': 'der Kunstturner, die Kunstturnerin',
    'der/die Monoskibobfahrer': 'der Monoskibobfahrer, die Monoskibobfahrerin',
    'der/die Polizeimeister': 'der Polizeimeister, die Polizeimeisterin',
    // No corroborating sibling anywhere in the corpus.
    'der/die Begleiter': 'der Begleiter, die Begleiterin',
    'der/die Konsument': 'der Konsument, die Konsumentin',
    'der/die Schwager': 'der Schwager, die Schwägerin',  // umlaut: never inferred
    // Shared-suffix elision: "-zeugin" / "-zeuginnen" elide the stem shared
    // with segment 1. Both full forms are recoverable from the displayed
    // material, but they are recorded verbatim here rather than reconstructed —
    // with only two instances in the corpus, an explicit mapping is safer than
    // a generic shape that would have to decide where a shared stem ends.
    'der/die Zeitzeuge/-zeugin': 'der Zeitzeuge, die Zeitzeugin',
    'Zeitzeugen/-zeuginnen': 'Zeitzeugen, Zeitzeuginnen'
  };

  /* EDITORIAL REVIEW REGISTER — data, not a morphology rule.
     Four display terms are structurally IDENTICAL to safe gender-plural pairs
     (two capitalised parallel plurals) yet must not be auto-joined, and no
     structural signal separates them — the difference is semantic:
       Bänke/Banken      two plurals of Bank with DIFFERENT meanings
       Kommas/Kommata    competing plurals, a register choice
       Graffiti/Graffitis  competing plurals of a borrowing
       Witwer/Witwen     masculine zero-plural against an -en feminine
     Structure cannot decide these, so they are declared as editorial data and
     the classifier consults the register before accepting. Callers may pass
     their own register via opts.reviewRegister. */
  var REVIEW_REGISTER = ['Bänke/Banken', 'Kommas/Kommata', 'Graffiti/Graffitis', 'Witwer/Witwen',
    'der/die Kiefer', 'der/das Sandwich', 'der/das Ketchup', 'der/die Coach', 'der/die Tennisprofi'];

  /* Why each register entry is withheld — kept beside the list so the editorial
     reason travels with the data rather than living in a commit message. */
  var REVIEW_REASONS = {
    'Bänke/Banken': 'semantic homograph — two plurals of Bank with different meanings',
    'Kommas/Kommata': 'competing plurals — register choice',
    'Graffiti/Graffitis': 'competing plurals of a borrowing',
    'Witwer/Witwen': 'masculine zero-plural against an -en feminine',
    'der/die Kiefer': 'semantic homograph — der Kiefer (jaw) vs die Kiefer (pine)',
    'der/das Sandwich': 'invariant borrowing with article variation',
    'der/das Ketchup': 'invariant borrowing with article variation',
    'der/die Coach': 'borrowing with competing feminine analysis (die Coach vs die Coachin)',
    'der/die Tennisprofi': 'invariant noun with article variation'
  };

  function segmentsOf(display) {
    return String(display == null ? '' : display).split('/').map(function (s) {
      return s.trim();
    });
  }

  /* A segment is "complete" when it can be spoken as it stands: non-empty,
     carries a letter, and holds no gloss, placeholder or dangling hyphen. */
  function isCompleteSegment(s) {
    if (!s) return false;
    if (!/[\p{L}]/u.test(s)) return false;
    if (GLOSS.test(s) || ELLIPSIS.test(s)) return false;
    if (/-$/.test(s) || /^-/.test(s)) return false;
    if (ARTICLE.test(s)) return false;            // a bare article is not a form
    if (BOUND_SUFFIX.test(s)) return false;       // a bound ending is not a form
    return true;
  }

  function classifyRaw(display, opts) {
    opts = opts || {};
    var register = opts.reviewRegister || REVIEW_REGISTER;
    var authored = opts.authoredMappings || AUTHORED_MAPPINGS;
    var segs = segmentsOf(display);
    var key = String(display).trim();
    if (register.indexOf(key) !== -1)
      return { shape: null, reason: 'listed in the editorial review register — ' + (REVIEW_REASONS[key] || 'editorial decision required'), review: true, segments: segs };
    if (Object.prototype.hasOwnProperty.call(authored, key))
      return { shape: 'AUTHORED_MAPPING', renderText: authored[key], derived: false, authored: true, segments: segs };
    // PARENTHETICAL constructions (no slash involved).
    if (segs.length === 1) {
      var pt = PAREN_TAIL.exec(key);
      if (pt) {
        var head = pt[1].trim(), inner = pt[2].trim();

        // Reflexive: parenthetical is exactly "sich". Reorder, never strip.
        if (/^sich$/i.test(inner) && head && !/[()]/.test(head)) {
          return { shape: 'PAREN_REFLEXIVE', renderText: 'sich ' + head, derived: false, segments: [key] };
        }

        // Valency: only with authored pos === 'verb', a single-word head, and a
        // closed-class preposition. "gemacht sein (für)" fails the head test AND
        // carries pos "idiom"; an absent pos declines outright.
        if (GERMAN_PREPOSITIONS.indexOf(inner.toLowerCase()) !== -1) {
          if (String(opts.pos || '').toLowerCase() !== 'verb')
            return { shape: null, reason: 'parenthetical preposition, but authored pos is not "verb" (got ' + (opts.pos ? '"' + opts.pos + '"' : 'none') + ') — cannot confirm valency', segments: [key] };
          if (/\s/.test(head))
            return { shape: null, reason: 'multi-word head with a parenthetical preposition — idiom citation order is not derivable', segments: [key] };
          return { shape: 'PAREN_VALENCY', renderText: head + ' ' + inner, derived: false, segments: [key] };
        }
        return { shape: null, reason: 'parenthetical is neither "sich" nor a closed-class preposition — editorial decision', segments: [key] };
      }
    }

    if (segs.length < 2) return { shape: null, reason: 'no slash alternation' };
    if (segs.some(function (s) { return GLOSS.test(s) || ELLIPSIS.test(s); }))
      return { shape: null, reason: 'segment carries a gloss or placeholder — author decision' };
    if (/-\s*$/.test(segs[0]) || segs.some(function (s) { return /-$/.test(s); }))
      return { shape: null, reason: 'hyphen-bound morpheme — not an alternation' };
    if (BOUND_SUFFIX.test(segs[segs.length - 1]))
      return { shape: null, reason: 'bound gender-suffix family — owned by the suffix policy' };

    // SHAPE 1: exactly ["der", "die X", "Xfem"] — two articles, two nouns.
    if (segs.length === 3 && ARTICLE.test(segs[0])) {
      var mid = ARTICLE_PREFIX.exec(segs[1]);
      if (mid && isCompleteSegment(segs[2]) && !/\s/.test(segs[2])) {
        var masc = segs[0] + ' ' + mid[2].trim();
        var fem = mid[1] + ' ' + segs[2];
        return { shape: 'SHAPE_1_ARTICLE_PAIR', renderText: masc + ', ' + fem, derived: false, segments: segs };
      }
    }

    // SHAPE 2: every segment is a complete, parallel article + noun phrase.
    if (segs.every(function (s) {
      var m = ARTICLE_PREFIX.exec(s);
      return !!m && isCompleteSegment(s) && !/\s/.test(m[2].trim());
    })) {
      return { shape: 'SHAPE_2_PARALLEL_NOUN_PHRASES', renderText: segs.join(', '), derived: false, segments: segs };
    }

    // SHAPE 4: ["der", "die X"] with a weak -e head shared by both genders.
    if (segs.length === 2 && ARTICLE.test(segs[0])) {
      var tail = ARTICLE_PREFIX.exec(segs[1]);
      if (tail) {
        var headText = tail[2].trim();
        // isCompleteSegment (unchanged) rejects bare articles, bound endings,
        // glosses, placeholders and hyphens. The -e test additionally rejects
        // agent nouns, whose feminine is not the displayed head.
        if (isCompleteSegment(headText) && !/\s/.test(headText) && /e$/.test(headText)) {
          return {
            shape: 'SHAPE_4_SHARED_WEAK_HEAD',
            renderText: segs[0] + ' ' + headText + ', ' + tail[1] + ' ' + headText,
            derived: false, segments: segs
          };
        }
      }
    }

    // SHAPE 3: every segment a bare, free-standing speakable word.
    if (segs.every(function (s) { return isCompleteSegment(s) && !/\s/.test(s); })) {
      if (segs.some(function (s) { return AUXILIARY.test(s); }))
        return { shape: null, reason: 'auxiliary alternation over a shared participle — author decision', segments: segs };
      var heard = segs.map(acousticKey);
      for (var i = 0; i < heard.length; i++) {
        for (var j = i + 1; j < heard.length; j++) {
          if (heard[i] === heard[j]) {
            return { shape: null, collision: true, segments: segs,
              reason: 'acoustic collision: "' + segs[i] + '" and "' + segs[j] + '" are spoken identically — editorial review' };
          }
        }
      }
      return { shape: 'SHAPE_3_STANDALONE_JOIN', renderText: segs.join(', '), derived: false, segments: segs };
    }

    return { shape: null, reason: 'not a safe shape — left to its existing owner', segments: segs };
  }

  /* renderText for a displayed term, or null when this module declines it.
     Voice never affects the result: grammatical content is identical for the
     female and male assets (voice policy §5). */
  /* PUBLIC classify(). Wraps the shape rules with the cross-term acoustic
     guard so EVERY caller inherits it — classify(), renderTextFor() and
     acceptBatch() alike. An accepted shape is withdrawn when the index shows
     another display term already claims the same spoken form. */
  function classify(display, opts) {
    var r = classifyRaw(display, opts);
    if (!r || !r.shape || !r.renderText) return r;
    var spoken = acousticKey(r.renderText);
    var rivals = indexedRivals(display, spoken);
    if (rivals.length) {
      return {
        shape: null, collision: true, crossTerm: true, segments: r.segments,
        withheldShape: r.shape, renderText: null,
        reason: 'cross-term acoustic collision: would speak "' + r.renderText +
          '", identical to ' + rivals.map(function (x) { return '"' + x + '"'; }).join(', ') +
          ' — capitalisation is inaudible, so one asset cannot serve both cards; editorial review'
      };
    }
    return r;
  }

  function renderTextFor(display, opts) {
    var r = classify(display, opts);
    return r.shape ? r.renderText : null;
  }

  /* Cross-term acoustic guard. Two DIFFERENT display terms can also collapse to
     one spoken form (the ihr/ihre vs Ihr/Ihre cards). Callers pass the terms they
     intend to accept; any sharing a spoken form is reported and must not be
     synthesized until an editor rules on it. */
  function findAcousticCollisions(displays) {
    var byKey = {}, out = [];
    (displays || []).forEach(function (d) {
      var rt = renderTextFor(d);
      if (!rt) return;
      (byKey[acousticKey(rt)] = byKey[acousticKey(rt)] || []).push({ display: d, renderText: rt });
    });
    Object.keys(byKey).forEach(function (k) {
      if (byKey[k].length > 1) out.push({ spokenForm: byKey[k][0].renderText, terms: byKey[k].map(function (x) { return x.display; }) });
    });
    return out;
  }

  /* Accept a whole batch: classifies every term, then applies the CROSS-TERM
     acoustic gate. A term whose spoken form is shared with another term is
     withheld — ihr/ihre and Ihr/Ihre both render "ihr, ihre", so neither may be
     synthesized until an editor rules. Returns accepted + declined separately;
     callers must synthesize only `accepted`. */
  function acceptBatch(displays, opts) {
    indexTerms(displays, opts);          // self-indexing: the batch defines its own peer set
    var accepted = [], declined = [], byKey = {};
    (displays || []).forEach(function (d) {
      var r = classifyRaw(d, opts);
      if (!r.shape) { declined.push({ display: d, reason: r.reason }); return; }
      (byKey[acousticKey(r.renderText)] = byKey[acousticKey(r.renderText)] || []).push({ display: d, shape: r.shape, renderText: r.renderText });
    });
    Object.keys(byKey).forEach(function (k) {
      var bucket = byKey[k];
      if (bucket.length === 1) { accepted.push(bucket[0]); return; }
      bucket.forEach(function (x) {
        declined.push({ display: x.display, reason: 'cross-term acoustic collision: renders "' + x.renderText +
          '", identical to ' + bucket.filter(function (y) { return y.display !== x.display; }).map(function (y) { return y.display; }).join(', ') + ' — editorial review' });
      });
    });
    return { accepted: accepted, declined: declined };
  }

  root.KW_SLASH_EXPANSION = {
    classify: classify,
    classifyRaw: classifyRaw,
    indexTerms: indexTerms,
    resetIndex: resetIndex,
    renderTextFor: renderTextFor,
    segmentsOf: segmentsOf,
    isCompleteSegment: isCompleteSegment,
    acousticKey: acousticKey,
    acceptBatch: acceptBatch,
    REVIEW_REGISTER: REVIEW_REGISTER,
    REVIEW_REASONS: REVIEW_REASONS,
    AUTHORED_MAPPINGS: AUTHORED_MAPPINGS,
    findAcousticCollisions: findAcousticCollisions
  };
})(typeof globalThis !== 'undefined' ? globalThis : this);
