/* Runtime clickability + popup scanner. Injected into a chapter page by
   qa-clickability-runner.html.

   Unlike the earlier version, this asks the APP'S OWN resolver (window.KW_resolve,
   the real closure functions) what it would do with every surface — chapter-local
   vocab, article/pronoun declension tables, the inflection index, compound
   splitting and the story lexicon all included. It also OPENS THE POPUP for a
   sample of clickable words and reads what the learner actually sees, so a word
   that is clickable but shows the no-data fallback is reported as a defect
   rather than counted as a success.

   Categories, per the brief:
     1 resolvesAtRuntime  — not linkified here, but the resolver does find usable data
     2 excluded           — correctly non-lexical: UI, English metalanguage, numbers, symbols
     3 resolverGap        — an entry exists (or a lemma resolves) but it is not usable/reachable
     4 missingMetadata    — genuine German lexical item, resolver finds nothing
     5 ambiguous          — resolver reaches a lemma with low confidence / homograph guard
*/
window.KWCLICK2 = function (opts) {
  opts = opts || {};
  var R = window.KW_resolve;
  if (!R) return { error: 'KW_resolve seam missing — chapter-app.js too old' };

  // SELF-CALIBRATING SCOPE. A hand-written selector list is guesswork and was
  // wrong: an earlier version matched nothing on real pages. Instead, treat as a
  // German container any element that ALREADY contains a linked German word
  // (.rw / .de-link). The app itself proved that element holds German, so any
  // unlinked word sitting beside a linked one in the same container is a real
  // candidate — and English UI chrome, which never contains a linked German
  // word, is excluded automatically without a denylist.
  // NB: no [lang=...] selector here. Chapter pages declare <html lang="en">, so a
  // closest('[lang="en"]') test matches EVERY element through the root and
  // silently rejects the whole document — which is exactly what made the first
  // run report zero surfaces. Language scoping is unnecessary anyway: the
  // germanHosts() rule below only accepts containers the app itself linked.
  var SKIP_CLOSEST = 'script,style,.word-pop,select,option,[data-no-link]';
  function germanHosts() {
    var set = [], seen = [];
    Array.prototype.forEach.call(document.querySelectorAll('.rw,.de-link'), function (el) {
      var host = el.parentElement;
      if (!host || host.closest(SKIP_CLOSEST)) return;
      if (seen.indexOf(host) >= 0) return;
      seen.push(host); set.push(host);
    });
    return set;
  }
  // HOST LANGUAGE. Two very different kinds of element contain linked German:
  //   (a) German content  - .story-line, .reading-passage, .vword-ex: every word
  //       is German and nearly all are already linked;
  //   (b) English explanation - .grammar-text, .mistake-why, .lede, table cells:
  //       an English sentence with a few German terms linked inside it
  //       ("Both clauses have the same subject, so *damit* is wrong").
  // In (b) the UNLINKED words are English prose, not German gaps. Treating both
  // alike is what filled the first pilot's "missing metadata" bucket with
  // "different", "clauses", "subjects" and "performs".
  // The discriminator is composition, not a wordlist: in (a) the linked spans
  // dominate the host's word count; in (b) they are a small minority.
  function hostIsGerman(host, unlinkedWords) {
    var linked = host.querySelectorAll('.rw,.de-link').length;
    if (!linked) return false;
    return linked >= Math.max(2, unlinkedWords) * 0.6;
  }

  var WORD = window.KW_germanWordRegex ? window.KW_germanWordRegex()
    : /[A-Za-zÄÖÜäöüßẞ][A-Za-zÄÖÜäöüßẞ\u2011-]*/g;

  // Category 2 vocabulary. English metalanguage the chapters use in German
  // containers, plus grapheme/abbreviation fragments. Not a per-word denylist for
  // clickability — only for CLASSIFYING something the resolver already rejected.
  var EN = ('the a an and or but of to in on at for with from by as is are was were be this that these those it its ' +
    'he she they we you your my his her their our not no yes if then than when which who what where why how all any ' +
    'both each few more most other some such only own same so too very can will just do does did have has had would ' +
    'could may might must about after again against because before between during into through under over up down ' +
    'out off once here there subject object verb noun adjective adverb article pronoun preposition conjunction case ' +
    'dative genitive nominative accusative plural singular formal informal example examples answer answers correct ' +
    'incorrect wrong right true false choose select click listen read write speak grammar chapter lesson unit level ' +
    'goal tip note hint rule form forms word words sentence sentences meaning translation practice exercise task ' +
    'prompt model dialogue reading listening speaking writing vocabulary review test quiz score points time ' +
    'separable reflexive regular irregular strong weak mixed modal auxiliary passive active present past future ' +
    'perfect conditional subjunctive imperative infinitive participle stem ending endings prefix suffix root gender ' +
    'masculine feminine neuter number person main sub clause phrase order position place manner reason result ' +
    'purpose condition contrast comparison connector linking beginner intermediate advanced').split(' ');
  var ENSET = {}; EN.forEach(function (w) { ENSET[w] = 1; });

  function isExcluded(s) {
    if (!s) return 'empty';
    if (/^\d+$/.test(s)) return 'number';
    if (!/[A-Za-zÄÖÜäöüß]/.test(s)) return 'symbol';
    if (s.length < 3) return 'fragment';
    if (/^[A-Z]{1,3}\d?$/.test(s)) return 'label';          // A1, B2, KI, II
    if (ENSET[s.toLowerCase()]) return 'english';
    if (/[\u0900-\u097F]/.test(s)) return 'hindi';
    if (/^https?:|^www\.|\.(com|de|org)$/i.test(s)) return 'url';
    if (/[_{}<>$#@\\/]|::|--/.test(s)) return 'technical';
    return null;
  }

  var clickableCount = 0, surfaces = {};
  var linked = {};
  Array.prototype.forEach.call(document.querySelectorAll('.rw,.de-link'), function (el) {
    if (el.closest('button:disabled,[disabled]')) return;
    clickableCount++;
    linked[R.normWord(el.textContent.trim())] = 1;
  });

  var englishProse = {};
  germanHosts().forEach(function (host) {
    var walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !/[A-Za-zÄÖÜäöüß]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        if (p.closest(SKIP_CLOSEST)) return NodeFilter.FILTER_REJECT;
        if (p.closest('.rw,.de-link')) return NodeFilter.FILTER_REJECT;   // already clickable
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    // SENTENCE-INITIAL POSITION MATTERS. resolveClickableWord() takes it as an
    // argument: a capitalised surface mid-sentence is a noun in German, but the
    // SAME surface at sentence start is just orthography and must keep resolving
    // to its lowercase headword. The renderer passes this; an audit that always
    // passes false manufactures gaps for ordinary sentence-initial adverbs and
    // adjectives ("Abends", "Nachts", "Boese", "Bitten") that the real page
    // links without complaint.
    var n, found = [];
    while ((n = walker.nextNode())) {
      var m, re = new RegExp(WORD.source, 'g'), txt = n.nodeValue;
      while ((m = re.exec(txt))) {
        var before = txt.slice(0, m.index);
        // sentence-initial: nothing but whitespace before it in this node, or the
        // previous non-space character closes a sentence / opens a quote.
        var si = !/\S/.test(before) || /[.!?:;…„“»–—(]\s*$/.test(before);
        found.push({ raw: m[0], si: si });
      }
    }
    if (!found.length) return;
    var isDe = hostIsGerman(host, found.length);
    found.forEach(function (f) {
      var key = R.normWord(f.raw);
      if (!key) return;
      var tgt = isDe ? surfaces : englishProse;
      if (!tgt[key]) tgt[key] = { surface: f.raw, n: 0, si: false };
      tgt[key].n++;
      if (f.si) tgt[key].si = true;   // seen at least once at sentence start
    });
  });

  // CROSS-CHECK. A word that also occurs in this page's English-explanation
  // prose is English, even when it slipped into a German-classified host (a
  // vocab card whose example line carries a short English gloss). Without this,
  // "different", "adjectives" and "Use" land in the missing-German bucket and
  // inflate the authoring backlog.
  Object.keys(surfaces).forEach(function (key) {
    if (englishProse[key]) { englishProse[key].n += surfaces[key].n; delete surfaces[key]; }
  });

  // Classify every non-clickable surface through the REAL resolver.
  var out = { resolvesAtRuntime: {}, excluded: {}, resolverGap: {}, missingMetadata: {}, ambiguous: {} };
  Object.keys(surfaces).forEach(function (key) {
    var rec = surfaces[key], s = rec.surface;
    var p;
    try { p = R.probe(s, false, !!rec.si); } catch (e) { p = { error: String(e) }; }
    var ex = isExcluded(s);
    var bucket, why = '';
    if (p.error) { bucket = 'resolverGap'; why = 'probe threw: ' + p.error; }
    else if (p.meaningful && p.clickable) { bucket = 'resolvesAtRuntime'; why = 'resolver returns usable data'; }
    else if (p.meaningful && !p.clickable) {
      // A lowercase English word can collide with a capitalised German noun
      // ("not"/Not, "person"/Person, "kind"/Kind, "plan"/Plan). The resolver
      // refusing to link it is the orthography guard working CORRECTLY, not a
      // gap - linking it would show a learner "need, distress" for English
      // "not". Only a genuinely German-looking surface counts as a gap.
      var germanHeadwordIsCapitalised = /^noun/i.test(p.type || '') && /^[a-zäöüß]/.test(s);
      if (germanHeadwordIsCapitalised) { bucket = 'excluded'; why = 'lowercase surface vs capitalised German noun headword - orthography guard correct'; }
      else { bucket = 'resolverGap'; why = 'usable data but resolveClickableWord() refuses' + (rec.si ? ' even as sentence-initial' : ' (mid-sentence capitalisation)'); }
    }
    else if (p.found && !p.meaningful) { bucket = 'resolverGap'; why = 'entry found but no usable field (placeholder-only entry)'; }
    else if (ex) { bucket = 'excluded'; why = ex; }
    else if (p.lemma && p.key !== R.normWord(p.lemma) && p.lemmaConfidence && p.lemmaConfidence !== 'none' && p.lemmaConfidence !== 'exact') {
      bucket = 'ambiguous'; why = 'lemma "' + p.lemma + '" at confidence ' + p.lemmaConfidence + ' (' + (p.lemmaMethod || '?') + ') but no entry behind it';
    }
    else { bucket = 'missingMetadata'; why = 'resolver finds nothing'; }
    out[bucket][key] = { surface: s, n: rec.n, why: why, lemma: p.lemma || null, en: p.en || null, type: p.type || null };
  });

  // POPUP VERIFICATION. Open a sample of clickable words and read what renders.
  var popupDefects = [], popupsChecked = 0;
  var sample = Array.prototype.slice.call(document.querySelectorAll('.rw,.de-link'))
    .filter(function (el) { return !el.closest('button:disabled,[disabled]'); });
  var want = (opts.popupSample === 0) ? 0 : (opts.popupSample || 60);
  var step = want ? Math.max(1, Math.floor(sample.length / want)) : Infinity;
  for (var i = 0; want && i < sample.length; i += step) {
    var el = sample[i], w = el.textContent.trim();
    try { el.click(); } catch (e) { continue; }
    var pop = document.querySelector('.word-pop');
    if (!pop) continue;
    var head = pop.querySelector('.word-pop-de');
    if (!head || R.normWord(head.textContent) !== R.normWord(w)) continue;
    popupsChecked++;
    var en = (pop.querySelector('.wp-meaning') || {}).textContent || '';
    var hi = (pop.querySelector('.wp-hi') || {}).textContent || '';
    var nodata = !!pop.querySelector('.wp-nodata');
    var pr = null;
    try { pr = R.probe(w, false, false); } catch (e) {}
    if (nodata && pr && pr.meaningful) {
      popupDefects.push({ word: w, defect: 'no-data fallback shown although resolver has usable data', en: pr.en });
    } else if (!nodata && !en.trim() && !hi.trim()) {
      popupDefects.push({ word: w, defect: 'popup rendered with neither meaning nor fallback' });
    }
    var c = pop.querySelector('.wp-close'); if (c) c.click();
  }

  Object.keys(englishProse).forEach(function (key) {
    var rec = englishProse[key];
    if (out.resolvesAtRuntime[key] || out.resolverGap[key] || out.missingMetadata[key] || out.ambiguous[key]) return;
    out.excluded[key] = { surface: rec.surface, n: rec.n, why: 'english-explanation prose (host is an English sentence with German terms linked inside it)', lemma: null, en: null, type: null };
  });

  function tally(o) { var d = 0, occ = 0; Object.keys(o).forEach(function (k) { d++; occ += o[k].n; }); return { distinct: d, occurrences: occ }; }
  return {
    file: location.pathname.split('/').pop(),
    clickable: clickableCount,
    scannedSurfaces: Object.keys(surfaces).length,
    scannedOccurrences: Object.keys(surfaces).reduce(function (a, k) { return a + surfaces[k].n; }, 0),
    counts: {
      resolvesAtRuntime: tally(out.resolvesAtRuntime),
      excluded: tally(out.excluded),
      resolverGap: tally(out.resolverGap),
      missingMetadata: tally(out.missingMetadata),
      ambiguous: tally(out.ambiguous)
    },
    buckets: out,
    popupsChecked: popupsChecked,
    popupDefects: popupDefects
  };
};
