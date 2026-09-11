/* Klarweg QA — chapter-local style namespace guard (P21)
 * ============================================================================
 * WHY THIS EXISTS
 * Chapters carry a small inline <style> block that highlights the chapter's
 * teaching focus. Those pedagogical classes live in the SAME `.r-*` namespace
 * the renderer uses for canonical grammar roles. When a local list happens to
 * include a canonical name and sets `color`, it beats chapter.css — equal
 * specificity (0,1,0), later document order — and the word silently loses its
 * grammar colour in prose while its popup headword (inline style) keeps it.
 * That produced 73 learner-visible HEADWORD_COLOUR_MISMATCH findings across
 * five chapters before it was found.
 *
 * SCOPE: namespace protection. Any single-class `.r-<canonical>` selector in a
 * chapter-local stylesheet is reported, whatever it declares — a weight-only or
 * colour-restating rule is not a defect today, but it is the same latent trap,
 * so it is reported at a lower severity rather than hidden.
 *
 * SEVERITY (mirrors qa-data-lint.js: 'violation' | 'review')
 *   violation  colour override — local colour differs from the canonical token
 *   review     namespace collision with no colour change (restatement or
 *              non-colour declaration). Deliberate historical cases live here.
 * Nothing here fails a build; it reports. The existing lint has no build hook.
 *
 * The canonical vocabulary is READ FROM chapter-app.js at scan time, never
 * duplicated here — a hand-copied list would drift from the renderer and start
 * lying. If the list cannot be parsed the guard reports an error instead of
 * falling back to a guess.
 * --------------------------------------------------------------------------- */
(function (root) {
  'use strict';

  // ---- authoritative vocabulary -------------------------------------------
  // Parses `const CANONICAL_ROLES = new Set([...])` out of chapter-app.js.
  function parseCanonicalRoles(appSource) {
    var m = /CANONICAL_ROLES\s*=\s*new\s+Set\(\s*\[([\s\S]*?)\]\s*\)/.exec(appSource || '');
    if (!m) return { ok: false, error: 'CANONICAL_ROLES literal not found in chapter-app.js', roles: [] };
    var roles = m[1].split(',').map(function (s) {
      var q = /^\s*['"]([^'"]+)['"]\s*$/.exec(s); return q ? q[1] : null;
    }).filter(Boolean);
    if (!roles.length) return { ok: false, error: 'CANONICAL_ROLES parsed but empty', roles: [] };
    return { ok: true, roles: roles, source: 'chapter-app.js CANONICAL_ROLES' };
  }

  // ---- CSS extraction ------------------------------------------------------
  // Chapter-local = <style> blocks in the document itself. Linked stylesheets
  // (chapter.css) are the canonical authority and are never scanned.
  function localStyleBlocks(html) {
    var head = html.indexOf('</head>');
    var scope = head === -1 ? html : html.slice(0, head + 7);
    var out = [], re = /<style[^>]*>([\s\S]*?)<\/style>/g, m;
    while ((m = re.exec(scope))) out.push({ css: m[1], offset: m.index });
    return out;
  }
  function rules(css) {
    var clean = css.replace(/\/\*[\s\S]*?\*\//g, '');
    var out = [], re = /([^{}]+)\{([^}]*)\}/g, m;
    while ((m = re.exec(clean))) out.push({ selector: m[1].trim().replace(/\s+/g, ' '), declaration: m[2].trim() });
    return out;
  }
  function declProp(decl, prop) {
    var re = new RegExp('(?:^|;)\\s*' + prop + '\\s*:\\s*([^;]+)', 'i');
    var m = re.exec(decl); return m ? m[1].trim() : null;
  }
  // A selector PART counts only when it is exactly one canonical role class:
  // `.r-verb` yes; `.r-verbal`, `.r-verb-focus`, `.de .r-verb`, `.r-verb span`
  // no — those cannot tie the canonical rule's specificity/shape.
  function canonicalParts(selector, canonSet) {
    return selector.split(',').map(function (s) { return s.trim(); })
      .filter(function (p) { return /^\.r-[a-z0-9-]+$/i.test(p); })
      .filter(function (p) { return canonSet[p.slice(3).toLowerCase()]; });
  }
  // Does the local colour restate the canonical token, or replace it?
  function restatesToken(role, colour) {
    if (!colour) return false;
    var c = colour.toLowerCase().replace(/\s+/g, '');
    return c.indexOf('--g-' + role.toLowerCase()) !== -1;
  }

  /* scanChapter(html, fileName, canonRoles) → findings[] */
  function scanChapter(html, file, canonRoles) {
    var canonSet = {}; canonRoles.forEach(function (r) { canonSet[r.toLowerCase()] = true; });
    var found = [];
    localStyleBlocks(html).forEach(function (block, bi) {
      rules(block.css).forEach(function (rule) {
        var parts = canonicalParts(rule.selector, canonSet);
        if (!parts.length) return;
        var colour = declProp(rule.declaration, 'color');
        var important = /color\s*:[^;]*!important/i.test(rule.declaration);
        parts.forEach(function (part) {
          var role = part.slice(3);
          var kind, severity, why;
          if (!colour) {
            kind = 'namespace-collision:no-colour'; severity = 'review';
            why = 'local rule occupies the canonical selector but sets no color (' +
                  (rule.declaration.replace(/\s+/g, ' ').slice(0, 60) || 'no declarations') +
                  ') — grammar colour is intact; latent trap only';
          } else if (restatesToken(role, colour)) {
            kind = 'namespace-collision:restatement'; severity = 'review';
            why = 'local rule restates the canonical token (' + colour + ') — no visible change, but the chapter now owns a selector it does not need';
          } else {
            kind = 'canonical-colour-override'; severity = 'violation';
            why = 'local rule paints ' + colour + ' over the canonical ' + part +
                  ' colour; equal specificity (0,1,0) and later document order mean the local rule wins' +
                  (important ? ' (and is !important)' : '');
          }
          found.push({
            severity: severity, kind: kind, chapter: file, role: part,
            selector: rule.selector, declaration: rule.declaration.replace(/\s+/g, ' ').slice(0, 160),
            colour: colour, important: important, styleBlock: bi,
            line: html.slice(0, block.offset).split('\n').length + block.css.slice(0, block.css.indexOf(rule.selector)).split('\n').length,
            why: why
          });
        });
      });
    });
    return found;
  }

  /* Tests. Every case is a real string shape taken from the corpus or a
   * deliberate near-miss; none of them is weakened to let history pass. */
  function selfTest(canonRoles) {
    var roles = canonRoles && canonRoles.length ? canonRoles
      : ['verb', 'time', 'negation', 'genitiv', 'modalverb', 'temporal', 'place', 'purpose', 'adjective', 'preposition', 'nnoun'];
    var wrap = function (css) { return '<html><head><style>' + css + '</style></head><body></body></html>'; };
    var one = function (css) { return scanChapter(wrap(css), 't.html', roles); };
    var c = {};

    // the five formerly harmful collisions (pre-fix selector text)
    c.c1_01_verb = one('.r-praesens, .r-praeteritum, .r-perfekt, .r-plusquam, .r-futur1, .r-futur2, .r-verb { color: #1F4E4A; font-weight: 600; }')
      .filter(function (f) { return f.role === '.r-verb' && f.severity === 'violation'; }).length === 1;
    c.c1_02_time = one('.r-time, .r-simul, .r-duration, .r-space, .r-continuation { color: #1F4E4A; font-weight: 600; }')
      .filter(function (f) { return f.role === '.r-time' && f.severity === 'violation'; }).length === 1;
    c.c1_05_negation = one('.r-addition, .r-alternative, .r-negation, .r-contrast, .r-comparison, .r-degree { color: #1F4E4A; font-weight: 600; }')
      .filter(function (f) { return f.role === '.r-negation' && f.severity === 'violation'; }).length === 1;
    c.c1_07_genitiv = one('.r-genitiv { color: #1F4E4A; font-weight: 600; }')
      .filter(function (f) { return f.role === '.r-genitiv' && f.severity === 'violation'; }).length === 1;
    c.c1_17_modalverb = one('.r-modalverb, .r-konjunktiv2, .r-konjunktiv1, .r-empfehlung, .r-bitte { color: #1F4E4A; font-weight: 600; }')
      .filter(function (f) { return f.role === '.r-modalverb' && f.severity === 'violation'; }).length === 1;

    // the six latent collisions — must still be caught
    c.latent_b2_34 = one('.r-temporal { color: #1F4E4A; font-weight: 600; }')
      .filter(function (f) { return f.severity === 'violation'; }).length === 1;
    var b264 = one('.r-cause, .r-time, .r-place, .r-topic, .r-means, .r-benefit, .r-authority { color: #1F4E4A; font-weight: 600; }');
    c.latent_b2_64_two_roles = b264.length === 2 &&
      b264.some(function (f) { return f.role === '.r-time'; }) && b264.some(function (f) { return f.role === '.r-place'; });
    c.latent_b2_65 = one('.r-academic, .r-genitiv, .r-fvg, .r-nomgroup, .r-head { color: #1F4E4A; font-weight: 600; }')
      .filter(function (f) { return f.role === '.r-genitiv'; }).length === 1;
    c.latent_c1_08 = one('.r-topic, .r-cause, .r-method, .r-purpose, .r-scope { color: #1F4E4A; font-weight: 600; }')
      .filter(function (f) { return f.role === '.r-purpose'; }).length === 1;
    c.latent_c1_11 = one('.r-genitiv, .r-anspruchsvoll, .r-adjektiv, .r-nomen { color: #1F4E4A; font-weight: 600; }')
      .filter(function (f) { return f.role === '.r-genitiv'; }).length === 1;

    // legitimate chapter-specific classes — must stay silent
    c.chapterSpecific_silent = one('.r-sowohl, .r-indem, .r-anstatt, .r-einerseits, .r-checkpoint { color: #1F4E4A; font-weight: 600; }').length === 0;
    // German-spelled near-misses of canonical names are NOT canonical
    c.germanNearMiss_silent = one('.r-adjektiv, .r-nomen, .r-verbal { color: #1F4E4A; }').length === 0;
    // canonical name as part of a longer class name — not a single-class match
    c.longerName_silent = one('.r-verb-focus, .r-timeline, .r-placeholder { color: #1F4E4A; }').length === 0;
    // descendant/compound selectors cannot tie the canonical rule
    c.compound_silent = one('.de .r-verb { color: #1F4E4A; } .r-verb span { color: red; }').length === 0;

    // restatement → review, not violation
    var rest = one('.r-genitiv { color: var(--g-genitiv, #A06B2C); }');
    c.restatement_review = rest.length === 1 && rest[0].severity === 'review' && rest[0].kind === 'namespace-collision:restatement';
    // weight-only → review, not violation, and not called a colour defect
    var wt = one('.r-preposition { font-weight: 700; }');
    c.weightOnly_review = wt.length === 1 && wt[0].severity === 'review' && wt[0].kind === 'namespace-collision:no-colour';

    // multiple rules in one block, and multiple canonical roles across them
    var multi = one('.r-verb { color: #111; } .r-sowohl { color: #222; } .r-time, .r-place { color: #333; }');
    c.multipleRules = multi.length === 3 &&
      multi.filter(function (f) { return f.severity === 'violation'; }).length === 3;
    // whitespace / case / newline variations
    c.whitespaceCase = one('\n  .R-VERB ,\n .r-praesens\n {\n color : #1F4E4A ;\n }\n')
      .filter(function (f) { return f.severity === 'violation'; }).length === 1;
    // !important is recorded
    c.importantFlagged = one('.r-verb { color: #1F4E4A !important; }')[0].important === true;
    // linked stylesheets are out of scope (canonical rules must never be flagged)
    c.linkedSheetIgnored = scanChapter('<html><head><link rel="stylesheet" href="chapter.css"></head><body><style>.r-verb{color:red}</style></body></html>', 't.html', roles).length === 0;

    var failed = Object.keys(c).filter(function (k) { return !c[k]; });
    return { pass: failed.length === 0, failed: failed, total: Object.keys(c).length, checks: c };
  }

  root.KWSTYLELINT = {
    parseCanonicalRoles: parseCanonicalRoles,
    scanChapter: scanChapter,
    selfTest: selfTest,
    localStyleBlocks: localStyleBlocks,
    canonicalParts: canonicalParts,
    SEVERITIES: ['violation', 'review']
  };
})(typeof window !== 'undefined' ? window : globalThis);
