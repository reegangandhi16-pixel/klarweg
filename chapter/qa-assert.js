/* Klarweg QA Assertion Harness
 * =============================
 * Validates RESOLVED BEHAVIOUR by explicit value, not by finding counts.
 *
 * Why this exists: §12cc proved a regression can flip 92 occurrences to the
 * wrong badge AND the wrong colour simultaneously while the QA finding total
 * stays at 1 — because the two agree with each other. Counts are structurally
 * blind to that. Every assertion here therefore names an expected badge and/or
 * role VALUE for a named surface, and fails on the value, never on a total.
 *
 * Load on a chapter page, then:  KWASSERT.run()
 * Returns { chapter, pass, failed, rows }.
 *
 * Expectations are declared per chapter file, so the same harness runs across
 * the regression corpus without editing test logic.
 */
(function () {

  // Expected state per chapter. `badge` is matched by word-class substring
  // (badges carry qualifiers like "Noun · masc."); `role` is exact.
  // occ: 'authored' → occurrence rendered from a token array (.rw)
  //      'auto'     → auto-linkified (.de-link)
  //      'any'      → whichever exists
  var EXPECT = {
    'chapter-a2-9-vergleiche-als-wie.html': {
      words: [
        // C — a2-9 `wie` precedence: chapter vocab says conjunction, global says
        // Question word. Chapter vocab must win on every occurrence.
        { w: 'wie', occ: 'any', badge: 'Conjunction', role: 'r-conjunction', note: 'chapter vocab outranks global Question word' }
      ],
      forbidRole: [{ w: 'wie', role: 'r-question', max: 0 }],
      findings: 1
    },
    'chapter-a1-9-verben.html': {
      words: [
        // D — authored `morgen` must stay Adverb/r-time. The auto-linked cases
        // are RECORDED as current behaviour, not asserted as fixed (see below).
        { w: 'morgen', occ: 'authored', badge: 'Adverb', role: 'r-time', note: 'authored token is authoritative' },
        { w: 'morgen', occ: 'auto', badge: 'Adverb', role: 'r-time', note: 'auto-linked must NOT take the global noun Morgen' },
        // A — C-A token-index leak corpus
        { w: 'und', occ: 'any', badge: 'Conjunction', role: null, note: 'C-A: colour is a known open defect, badge must be right' }
      ],
      forbidRole: [{ w: 'morgen', role: 'r-object', max: 0 }, { w: 'morgen', role: 'r-verb', max: 0 }],
      record: [{ w: 'morgen', occ: 'auto', note: 'auto-linked morgen — recorded alongside the assertion above' }],
      findings: 2
    },
    'chapter-a1-1-alphabet.html': {
      // E — clickability must not regress.
      //
      // REBASELINED 254 → 242 after individually tracing all 12 removed spans.
      // Every one was a multiword vocabulary headword's ARTICLE inside .vword-de
      // (der Apfel, das Buch, das Eis, der Hund, das Jahr, der Käse, die Schule,
      // der Vater, das Wasser, die Zeit, das Mädchen, die Straße) — a FUNC_WORDS
      // member, grammatical scaffolding rather than a lexeme, whose popup showed
      // the CARD's noun with no independent meaning. In all 12 the lexical
      // component remains clickable, and none was a prose or standalone
      // occurrence. Structurally identical to the accepted c2-22 (76) and c1-30
      // (5) cases, so the old 254 baseline was itself counting 12 known-invalid
      // headword scaffold links.
      clickable: 242,
      mustBeClickable: ['Äpfel', 'Bücher', 'Hunde', 'Schulen', 'Väter', 'Wässer',
        'Zeiten', 'Straßen', 'Namen', 'Laute', 'Liebe'],
      findings: 0
    },
    'chapter-a1-2-vokale.html': { findings: 2 },
    // MULTIWORD VOCAB HEADWORD FRAGMENTS (Priority 1).
    // The article of a multiword vocabulary headword ("die Entwicklung") was
    // linkified as an independent word and then resolved to the CARD's noun
    // entry — badge Noun, empty EN, span r-article. The slash variant
    // ("das Wort / die Wörter") was already covered by isCompositeFragment;
    // space-separated headwords were not. Assert the fragment is NOT clickable
    // while the component noun still is.
    'chapter-c2-22-wortbildung-der-nomen.html': {
      notClickableIn: [{ container: '.vword-de, .vword-tag', w: 'die', note: 'headword article must not be an independent link' }],
      words: [
        { w: 'Entwicklung', occ: 'any', badge: 'Noun', role: null, note: 'component noun stays clickable' }
      ]
      // NOTE: a `forbid die→r-article` assertion was removed here. It forbade the
      // role across the WHOLE chapter, so it also forbade genuine prose articles
      // ("übernimmt die Verantwortung") — it could only be satisfied by breaking
      // correct German. notClickableIn already asserts the real invariant with the
      // right scope: no FUNC_WORD link inside a MULTIWORD headword host.
    },
    'chapter-c1-30-nomen-mit-numerusbesonderheiten.html': {
      notClickableIn: [{ container: '.vword-de, .vword-tag', w: 'die', note: 'slash+space composite headword' }]
      // Same over-broad forbidRole removed here — see the c2-22 note above.
    },
    // STANDALONE ARTICLES must remain clickable in ordinary German prose.
    // a1-3-nominativ teaches der/die/das as articles — the exact case that a
    // too-broad fragment rule would break.
    'chapter-a1-3-nominativ.html': {
      words: [
        { w: 'der', occ: 'any', badge: 'Article', role: null, note: 'standalone article must stay clickable' },
        { w: 'die', occ: 'any', badge: 'Article', role: null, note: 'standalone article must stay clickable' },
        { w: 'das', occ: 'any', badge: null, role: null, note: 'standalone das must stay clickable' }
      ]
    },
    // Existing Autor/in slash-composite regression.
    'chapter-b2-10-haeufige-b2-verben.html': {
      words: [
        { w: 'viel', occ: 'any', badge: null, role: 'r-adverb', note: 'C-A: conflicting tokens must stay occurrence-local' }
      ],
      notClickableIn: [{ container: '.vword-de', w: 'in', note: 'Autor/in suffix fragment must stay unlinked' }]
    },
    'chapter-a2-8-komparativ-superlativ.html': { findings: 4 },
    'chapter-b1-7-praeteritum.html': {
      // OCCURRENCE-IDENTITY SEPARATION — the invariant a single-occurrence
      // assertion cannot see. Each surface below is asserted TWICE: once on its
      // authored occurrence and once on an auto-linkified one. Passing both at
      // the same time is the only proof that neither identity leaked into the
      // other through WORDIDX. §12x's regression (92 `wie` + 4 `morgen`) moved
      // the finding total by zero, so counts cannot substitute for this.
      words: [
        // 1. an — authored separable prefix vs canonical preposition
        { w: 'an', occ: 'authored', badge: 'Verb', role: 'r-verb', note: 'authored separable prefix keeps its own class' },
        { w: 'an', occ: 'auto', badge: 'Preposition', role: 'r-preposition', note: 'unrelated occurrence must NOT inherit the prefix class' },
        // 2. früh — authored adjective vs canonical adverb
        { w: 'früh', occ: 'authored', badge: 'Adjective', role: 'r-adjective', note: 'authored occurrence keeps Adjective' },
        { w: 'früh', occ: 'auto', badge: 'Adverb', role: 'r-adverb', note: 'unrelated occurrence must NOT inherit Adjective' },
        // 3. viel — same lexical class both ways, DIFFERENT semantic role.
        //    This is the WORD CLASS ≠ SEMANTIC ROLE separation stated explicitly.
        { w: 'viel', occ: 'authored', badge: 'Adverb', role: 'r-akkusativ', note: 'authored semantic role survives; class still Adverb' },
        { w: 'viel', occ: 'auto', badge: 'Adverb', role: 'r-adverb', note: 'unrelated occurrence takes the coarse class role, not r-akkusativ' },
        // 4. mit — no authored token anywhere; canonical only
        { w: 'mit', occ: 'auto', badge: 'Preposition', role: 'r-preposition', note: 'canonical resolution' }
      ],
      // No cross-contamination: the roles each surface must never take here.
      forbidRole: [
        { w: 'an', role: 'r-question', max: 0 },
        { w: 'früh', role: 'r-verb', max: 0 },
        { w: 'früh', role: 'r-question', max: 0 },
        { w: 'mit', role: 'r-verb', max: 0 },
        { w: 'viel', role: 'r-verb', max: 0 },
        { w: 'viel', role: 'r-question', max: 0 }
      ],
      // Invariants that must remain live for the above to mean anything.
      invariants: ['classConflictActive', 'occurrenceOutranksIndex']
    },
    'chapter-b2-66-argumentieren-standpunkte.html': {
      words: [
        // B — C-E capitalisation collision
        { w: 'Regeln', occ: 'any', badge: 'Noun', role: 'r-object', note: 'C-E: capitalised noun must not take verb class' },
        { w: 'Unternehmen', occ: 'any', badge: 'Noun', role: 'r-object', note: 'C-E: same' }
      ]
    },
    'chapter-__dupe-removed__.html': { }
  };

  function leaves(root) {
    return [].slice.call((root || document).querySelectorAll('.rw, .de-link'))
      .filter(function (n) { return !n.querySelector('.rw, .de-link'); })
      .filter(function (n) { return !n.closest('.word-pop'); })
      .filter(function (n) { return n.offsetParent || n.getClientRects().length; });
  }
  function roleOf(el) { var m = String(el.className).match(/\br-[a-z-]+/); return m ? m[0] : ''; }
  function isAuthored(el) { return /\brw\b/.test(el.className); }

  // Click and read the RESOLVED popup for this exact node. Detection is by
  // content, never by .is-open (added in rAF, never fires in a sync loop).
  var _prevHead = null;
  function resolve(el) {
    var c = document.querySelector('.wp-close'); if (c) c.click();
    el.click();
    var p = document.querySelector('.word-pop');
    if (!p) return null;
    var h = p.querySelector('.word-pop-de');
    var head = h ? h.textContent.trim() : '';
    var surface = el.textContent.trim();
    var opened = head.toLowerCase() === surface.toLowerCase() || head !== _prevHead;
    _prevHead = head;
    if (!opened) return null;
    return {
      badge: [].slice.call(p.querySelectorAll('.wp-badge')).map(function (b) { return b.textContent.trim(); }).join('|'),
      head: head,
      headColour: h ? getComputedStyle(h).color : null
    };
  }

  function run() {
    var file = location.pathname.split('/').pop();
    var spec = EXPECT[file];
    var rows = [], failed = [], recorded = [];
    if (!spec) return { chapter: file, error: 'no expectations declared for this chapter' };

    var all = leaves(document);
    var c0 = document.querySelector('.wp-close'); if (c0) c0.click();
    _prevHead = null;

    // --- clickability assertions (E) ---
    if (spec.clickable != null) {
      var ok = all.length === spec.clickable;
      rows.push({ test: 'clickable count', expected: spec.clickable, actual: all.length, pass: ok });
      if (!ok) failed.push('clickable ' + all.length + ' != ' + spec.clickable);
    }
    if (spec.mustBeClickable) {
      var surfaces = all.map(function (e) { return e.textContent.trim(); });
      spec.mustBeClickable.forEach(function (w) {
        var present = surfaces.indexOf(w) !== -1;
        rows.push({ test: 'clickable: ' + w, expected: 'present', actual: present ? 'present' : 'MISSING', pass: present });
        if (!present) failed.push('not clickable: ' + w);
      });
    }

    // --- fragment suppression assertions (multiword/composite headwords) ---
    (spec.notClickableIn || []).forEach(function (t) {
      var hosts = [].slice.call(document.querySelectorAll(t.container));
      var linked = 0, hostsSeen = 0;
      hosts.forEach(function (h) {
        if (String(h.textContent || '').split(/\s+/).length < 2) return; // multiword hosts only
        hostsSeen++;
        [].slice.call(h.querySelectorAll('.rw, .de-link')).forEach(function (e) {
          if (e.textContent.trim() === t.w) linked++;
        });
      });
      var ok = linked === 0;
      rows.push({ test: 'fragment not linked: ' + t.w + ' in ' + t.container,
        expected: 0, actual: linked, hosts: hostsSeen, pass: ok, note: t.note });
      if (!ok) failed.push(t.w + ' linked as fragment ' + linked + '× in ' + t.container);
    });

    // --- per-word badge/role assertions ---
    (spec.words || []).forEach(function (t) {
      var cands = all.filter(function (e) { return e.textContent.trim() === t.w; });
      if (t.occ === 'authored') cands = cands.filter(isAuthored);
      if (t.occ === 'auto') cands = cands.filter(function (e) { return !isAuthored(e); });
      if (!cands.length) {
        rows.push({ test: t.w + ' [' + t.occ + ']', expected: t.badge || t.role, actual: 'NOT AVAILABLE', pass: null, note: t.note });
        return;
      }
      var el = cands[0];
      var r = resolve(el);
      var actualRole = roleOf(el);
      var actualBadge = r ? r.badge : '(no popup)';
      var badgeOk = t.badge == null || (actualBadge.toLowerCase().indexOf(t.badge.toLowerCase()) !== -1);
      var roleOk = t.role == null || actualRole === t.role;
      var pass = badgeOk && roleOk;
      rows.push({ test: t.w + ' [' + t.occ + '] ×' + cands.length, expectedBadge: t.badge, actualBadge: actualBadge,
        expectedRole: t.role, actualRole: actualRole, pass: pass, note: t.note });
      if (!pass) failed.push(t.w + ': badge=' + actualBadge + ' role=' + actualRole +
        ' (want badge~' + t.badge + ' role=' + t.role + ')');
    });

    // --- structural invariant assertions ---
    // These verify the MECHANISM, not an output: if either fails, every
    // occurrence-identity assertion above becomes meaningless.
    (spec.invariants || []).forEach(function (inv) {
      var ok = null, actual = '';
      if (inv === 'classConflictActive') {
        // classConflict withholds a conflicted token from the cross-occurrence
        // index. Observable proof: a surface WITH a conflicting authored token
        // still resolves to its canonical class on an auto-linked occurrence.
        var probe = all.filter(function (e) { return e.textContent.trim() === 'früh' && !isAuthored(e); })[0];
        if (probe) { var pr = resolve(probe); actual = pr ? pr.badge : '(none)'; ok = /adverb/i.test(actual); }
        else { actual = 'no auto-linked früh'; ok = null; }
      }
      if (inv === 'occurrenceOutranksIndex') {
        // An authored token must win over any index entry for the same surface.
        var pa = all.filter(function (e) { return e.textContent.trim() === 'an' && isAuthored(e); })[0];
        if (pa) { var ra = resolve(pa); actual = ra ? ra.badge : '(none)'; ok = /verb/i.test(actual); }
        else { actual = 'no authored an'; ok = null; }
      }
      rows.push({ test: 'invariant: ' + inv, expected: 'active', actual: actual, pass: ok });
      if (ok === false) failed.push('invariant broken: ' + inv);
    });

    // --- forbidden-role population assertions (C) ---
    (spec.forbidRole || []).forEach(function (f) {
      var n = all.filter(function (e) { return e.textContent.trim() === f.w && roleOf(e) === f.role; }).length;
      var ok = n <= (f.max || 0);
      rows.push({ test: 'forbid ' + f.w + '→' + f.role, expected: '<=' + (f.max || 0), actual: n, pass: ok });
      if (!ok) failed.push(f.w + ' has ' + n + ' ' + f.role + ' occurrences');
    });

    // --- recorded-only observations (D): current behaviour, NOT asserted ---
    (spec.record || []).forEach(function (t) {
      var cands = all.filter(function (e) { return e.textContent.trim() === t.w; });
      if (t.occ === 'authored') cands = cands.filter(isAuthored);
      if (t.occ === 'auto') cands = cands.filter(function (e) { return !isAuthored(e); });
      if (!cands.length) { recorded.push({ w: t.w, occ: t.occ, actual: 'not available', note: t.note }); return; }
      var r = resolve(cands[0]);
      recorded.push({ w: t.w, occ: t.occ, count: cands.length,
        badge: r ? r.badge : '(no popup)', role: roleOf(cands[0]), note: t.note });
    });

    var cf = document.querySelector('.wp-close'); if (cf) cf.click();

    // --- golden finding count (F) — supporting evidence only ---
    var findings = null;
    if (window.KWQA) { try { findings = window.KWQA.run().findings.length; } catch (e) {} }
    if (spec.findings != null && findings != null) {
      var fok = findings === spec.findings;
      rows.push({ test: 'golden findings', expected: spec.findings, actual: findings, pass: fok });
      if (!fok) failed.push('findings ' + findings + ' != ' + spec.findings);
    }

    return { chapter: file, occurrences: all.length, pass: failed.length === 0, failed: failed, rows: rows, recorded: recorded };
  }

  /* FIELD-OWNERSHIP + INSERTION-ORDER tests (§4, §5).
   * Pure functions over synthetic entries — no production code touched, no DOM.
   * Models the PROPOSED merge so its properties can be checked before any
   * production change. Occurrence fields are never overwritten; only `type`
   * (word class) is owned by the chapter-vocab tier. */
  var OCC_ONLY = ['pron', 'why', 'case', 'number', 'person', 'ex', 'exEn', 'exHi'];
  var VOCAB_OWNS = ['type'];
  function mergeProposed(entries) {
    // entries: [{ tier:'occurrence'|'vocab'|'global', data:{...} }] in ANY order
    var out = {};
    var byTier = { occurrence: null, vocab: null, global: null };
    entries.forEach(function (e) { if (!byTier[e.tier]) byTier[e.tier] = e.data; });
    // additive fill, most-specific first, never overwriting an existing value
    ['occurrence', 'vocab', 'global'].forEach(function (tier) {
      var d = byTier[tier]; if (!d) return;
      Object.keys(d).forEach(function (k) { if (out[k] === undefined) out[k] = d[k]; });
    });
    // class ownership: vocab tier owns `type` over global, but never over an
    // occurrence that declares its own.
    VOCAB_OWNS.forEach(function (k) {
      if (byTier.occurrence && byTier.occurrence[k] !== undefined) return; // occurrence wins
      if (byTier.vocab && byTier.vocab[k] !== undefined) out[k] = byTier.vocab[k];
    });
    return out;
  }
  function selfTest() {
    var occ = { tier: 'occurrence', data: { pron: 'vee', why: 'equality', ex: 'so groß wie' } };
    var voc = { tier: 'vocab', data: { type: 'Conjunction', en: 'as, like', hi: 'जैसे' } };
    var glo = { tier: 'global', data: { type: 'Question word', en: 'how' } };

    var a = mergeProposed([occ, voc, glo]);          // token first (current order)
    var b = mergeProposed([voc, occ, glo]);          // vocab first
    var c = mergeProposed([glo, voc, occ]);          // global first

    var occTyped = { tier: 'occurrence', data: { type: 'Adverb · time', pron: 'MOR-gen' } };
    var d = mergeProposed([occTyped, voc, glo]);

    var typeless = { tier: 'occurrence', data: { pron: 'x' } };   // typeless token
    var e = mergeProposed([typeless, voc, glo]);

    var noVocab = mergeProposed([occ, glo]);          // no chapter vocab tier
    var checks = {
      // §4 field ownership
      vocabSuppliesClass: a.type === 'Conjunction',
      globalNeverOverridesVocabClass: a.type !== 'Question word',
      occurrenceFieldsPreserved: OCC_ONLY.every(function (k) {
        return occ.data[k] === undefined || a[k] === occ.data[k];
      }),
      vocabDoesNotOverwriteOccurrence: a.pron === 'vee' && a.ex === 'so groß wie',
      occurrenceTypeWins: d.type === 'Adverb · time',
      typelessTokenDoesNotBlockVocab: e.type === 'Conjunction',
      noFakeClassWhenVocabAbsent: noVocab.type === 'Question word', // falls back, does not invent
      // §5 insertion-order independence
      orderIndependent_tokenFirst_vs_vocabFirst: JSON.stringify(a) === JSON.stringify(b),
      orderIndependent_vs_globalFirst: JSON.stringify(a) === JSON.stringify(c)
    };
    var bad = Object.keys(checks).filter(function (k) { return !checks[k]; });
    return { pass: bad.length === 0, failed: bad, checks: checks,
      currentBugReproduced: 'first-writer-wins would give type=' +
        (function () { var o = {}; [occ.data, voc.data, glo.data].forEach(function (d) { Object.keys(d).forEach(function (k) { if (o[k] === undefined) o[k] = d[k]; }); }); return o.type; })() };
  }

  window.KWASSERT = { run: run, selfTest: selfTest, mergeProposed: mergeProposed, EXPECT: EXPECT };
})();
