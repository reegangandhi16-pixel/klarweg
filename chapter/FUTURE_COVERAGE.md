# Future Coverage Backlog

Permanent log for words the popup engine correctly refuses to link because no
dictionary/inflection data exists yet — NOT bugs. Engine, renderer, and
architecture are working as designed (no dead popups); the curriculum simply
doesn't contain this linguistic data yet. Never resolved via guessing/heuristic
lemma synthesis — only by authoring the missing data source.

## Backlog

### Öffne → öffnen
- Reason: imperative forms are not yet indexed (inflection index only harvests praesens/praeteritum/perfekt/konjII from authored `conj` fields).
- Missing data source: authored imperative forms per verb.
- Future solution: extend the inflection index from an authored imperative dataset rather than generating forms heuristically (imperative stems are irregular for strong verbs — nehmen→nimm, not algorithmic).
- Found in: chapter-a1-9-verben (vocabulary example sentence).

### möchtest → möchten (2nd person)
- Reason: only the 3rd-person praesens form ("möchte") is authored in `conj.praesens`; other person-forms of modal verbs are not indexed.
- Missing data source: full conjugation paradigm (ich/du/er/wir/ihr/sie) per verb, not just one praesens form.
- Future solution: extend authored `conj` data to store the full praesens paradigm, or add a verified irregular-modal conjugation table (modals are a small closed class, unlike regular verbs).
- Found in: chapter-a1-14-essen (reading passage).

### schäle → schälen (1st person)
- Reason: same as above — only one praesens form per verb is authored.
- Missing data source: full conjugation paradigm.
- Future solution: same as möchtest.
- Found in: chapter-a1-14-essen (vocabulary example sentence).

### fürs → für (contraction)
- Reason: preposition-article contractions (für + das → fürs) are not indexed; only full prepositions are dictionary headwords.
- Missing data source: authored contraction forms per preposition, or a verified contraction-split method (fürs → für + das).
- Future solution: extend the inflection index with a small closed-set contraction table (fürs, ins, ans, aufs, etc. — a finite, well-known list), authored not guessed.
- Found in: chapter-a1-16-hobbies (lede/grammar prose).

### höre / genieße → hören / genießen (1st person)
- Reason: only one praesens form per verb is authored (same gap as möchtest/schäle).
- Missing data source: full conjugation paradigm.
- Future solution: same as möchtest.
- Found in: chapter-a1-16-hobbies (vocabulary example sentences).

### fülle / wähle → füllen / wählen (1st person)
- Reason: only one praesens form per verb is authored (same gap as möchtest/schäle/höre/genieße).
- Missing data source: full conjugation paradigm.
- Future solution: same as möchtest.
- Found in: chapter-a1-17-goethe2 (grammar/story content).

### persönliche → persönlich (declined adjective)
- Reason: adjective declension endings (-e, -en, -er, -es for case/gender/number agreement) are not indexed; only the base predicate form is a dictionary headword.
- Missing data source: authored declension paradigm per adjective, or a verified declension-stripping rule (strip trailing -e/-en/-er/-es and check the base form resolves) — not yet implemented since it risks false positives with words that legitimately end in those letters.
- Future solution: extend the inflection index with a verified adjective-declension stripping method once tested against real curriculum adjectives without collisions.
- Found in: chapter-a1-17-goethe2 (vocabulary example sentence).

### Unregelmäßige / unregelmäßiges → unregelmäßig (declined adjective)
- Reason: same as persönliche — adjective declension endings not indexed.
- Missing data source / Future solution: same as persönliche.
- Found in: chapter-a1-18-irregular (hero title, vocabulary).

### .section-objective — not gated (architectural limitation, not a bug)
- Reason: this field's phrases are short, sentence-initial English instructions ("See...", "Pass...", "Download..."). The capitalization-based language guard only protects lowercase English words from matching capitalized German nouns — it can't catch a sentence-initial capitalized English word that happens to match a capitalized German noun (See/lake, Pass/passport, Download/download all collided this way).
- Missing data source: explicit language metadata per field (the permanent architectural TODO already logged in chapter-app.js), not more heuristics.
- Future solution: once language-aware rendering exists, `.section-objective` can be gated safely; until then it's deliberately left ungated rather than accept a high false-positive rate.
- Found in: chapter-a1-20-modalverben1 (discovered while extending gated linkification), applies to every chapter's section headers.

### Schönen → schön (declined adjective) / präsentiere → präsentieren (1st person)
- Reason: same two established gaps — adjective declension endings and single-form-only verb conjugation.
- Missing data source / Future solution: same as persönliche / möchtest.
- Found in: chapter-a1-22-berufe (vocabulary example sentences).

### zweite / dritte / dritten → zwei / drei (ordinal declension)
- Reason: ordinal numbers (erste/zweite/dritte...) and their declined forms are not indexed as their own dictionary headwords or mapped to a base cardinal; only "Erste" happens to have its own entry.
- Missing data source: authored ordinal-number entries or a verified ordinal-to-cardinal mapping.
- Future solution: author ordinals 1st–31st (needed for dates) as their own small closed-set dictionary entries — finite and well-defined, unlike open-class adjective declension.
- Found in: chapter-a1-24-datum (hero title, lede).

### fängt / Hör / hänge → fangen / hören / hängen (conjugated forms)
- Reason: same single-praesens-form gap as möchtest/schäle/höre/genieße/fülle/wähle.
- Missing data source / Future solution: same as möchtest.
- Found in: chapter-a1-25-trennbar (vocabulary/story content).

### überlege → überlegen (1st person)
- Reason: same single-praesens-form gap.
- Missing data source / Future solution: same as möchtest.
- Found in: chapter-a1-26-goethe3 (vocabulary/story content).

### kenne / Hörst / lädst → kennen / hören / laden (conjugated forms)
- Reason: same single-praesens-form gap.
- Missing data source / Future solution: same as möchtest.
- Found in: chapter-a1-32-akkusativpronomen (hero lede, vocabulary).

### geehrte / freundlichen → geehrt / freundlich (declined adjective)
- Reason: same declension-endings gap as persönliche/Schönen/großes.
- Missing data source / Future solution: same as persönliche.
- Found in: chapter-a1-34-schreiben (hero lede — formal letter closing phrases).

### Stühlen → Stuhl (dative plural)
- Reason: German dative plurals add -n to the nominative plural (Stühle → Stühlen) unless it already ends in -n or -s; this declension step is not derived from the authored nominative `plural` field.
- Missing data source: authored dative-plural forms, or a verified suffix-stripping rule (strip trailing -n from a plural candidate and check the nominative-plural form resolves) — not yet implemented since it needs testing against real curriculum plurals for false positives.
- Future solution: extend the inflection index with a verified dative-plural derivation once tested against real curriculum nouns without collisions.
- Found in: chapter-a1-38-wechselpraep (vocabulary example sentence).

### ans / zur (contractions)
- Reason: same closed-set contraction gap as fürs.
- Missing data source / Future solution: same as fürs.
- Found in: chapter-a1-39-ortsangaben (hero lede).

### überweise → überweisen (1st person)
- Reason: same single-praesens-form gap.
- Missing data source / Future solution: same as möchtest.
- Found in: chapter-a1-39-ortsangaben (vocabulary example sentence).

### Dieser / dieser / Welches / Dieses (der-word declension)
- Reason: "dieser"/"welcher" are der-words with a closed, finite declension paradigm (like articles), but the current resolveLemma only has closed-set tables for actual articles (der/die/das) and personal pronouns — not yet extended to der-words.
- Missing data source: none — this is purely an engine/architecture gap, not missing dictionary data (the base forms "welcher"/"dieser" do have local chapter vocab entries).
- Future solution: extend the existing ARTICLE_LEMMA-style closed-set declension table to cover der-words (dieser/diese/dieses/diesen/dieser/dieses, welcher/welche/welches/welchen/welcher/welches, jeder, mancher, solcher) — same finite, verified approach as articles.
- Found in: chapter-a1-42-welcher-dieser (hero title, lede).

### Komm! (imperative)
- Reason: same imperative-forms gap as Öffne/Erzähl.
- Missing data source / Future solution: same as Öffne.
- Found in: chapter-a1-44-imperativ-modal2 (hero lede).

### Erkältung (missing dictionary headword)
- Reason: this noun simply has no dictionary entry authored yet — not an inflection issue, a content gap.
- Missing data source: authoring the vocabulary entry (word, meaning, gender, plural).
- Future solution: add "Erkältung" to the dictionary when this chapter's vocab is next revised.
- Found in: chapter-a1-44-imperativ-modal2 (vocabulary example sentence).

### Spreche / öffne → sprechen / öffnen (1st person)
- Reason: same single-praesens-form gap.
- Missing data source / Future solution: same as möchtest.
- Found in: chapter-a1-45-telefonieren (hero lede, vocabulary).

### erschließe → erschließen (1st person) / nützlicher → nützlich (comparative)
- Reason: conjugated-form gap (same as möchtest) and comparative-form gap (only base adjective indexed, not comparative/superlative derived forms beyond the authored `compare` field on some entries).
- Missing data source / Future solution: same as möchtest for the verb; extend comparative coverage to entries missing an authored `compare` field.
- Found in: chapter-a1-47-goethe-final (vocabulary example sentences).

### Annas / Rohans / Webers (genitive possessive -s)
- Reason: proper-name genitive forms (Name+s, e.g. "Annas Buch") are not indexed — names aren't dictionary headwords, and the possessive -s suffix isn't stripped for lookup.
- Missing data source: this is inherently open-class (any name can take -s) — not fixable by adding entries; would need a genitive-suffix recognition rule.
- Future solution: extend resolveLemma with a closed, verified rule: a name-like token (capitalized, no dictionary hit) ending in bare -s can be treated as "possessive of [name]" for display purposes, though the name itself still won't have a translation.
- Found in: chapter-a2-1-genitiv (hero lede — the chapter's own core topic).

### Wiederholung (missing dictionary headword)
- Reason: no dictionary entry authored yet — a content gap, not an inflection issue.
- Missing data source / Future solution: same as Erkältung.
- Found in: chapter-a2-2-perfekt-review (hero title).

### begründe → begründen (1st person)
- Reason: same single-praesens-form gap.
- Missing data source / Future solution: same as möchtest.
- Found in: chapter-a2-2-perfekt-review (vocabulary example sentence).

### einem (indefinite article dative)
- Reason: correctly resolves via the ARTICLE_LEMMA closed-set table to lemma "ein", but neither "ein" nor its inflected forms (einen/eine/einer) have a Global Lexicon entry — this chapter's own local vocab happens to cover einen/eine/einer but not einem.
- Missing data source: authoring "ein" (or its inflected forms) as a Global Lexicon entry, or completing this chapter's local vocab coverage.
- Future solution: add a base "ein" dictionary entry so all declined forms resolve consistently regardless of per-chapter vocab gaps.
- Found in: chapter-a2-3-artikel-review (hero lede).

### älteren → alt (declined comparative)
- Reason: same declension-endings gap as persönliche, but on a comparative form (älter → älteren) rather than the base adjective.
- Missing data source / Future solution: same as persönliche, extended to comparative/superlative forms too.
- Found in: chapter-a2-3-artikel-review (vocabulary example sentence).

### Deutschbücher / Übungsbücher (compound plural tags)
- Reason: these exact compound-plural surface forms have no dictionary headword entry (the compound itself isn't authored as vocab, only appears as a vocab-card plural tag).
- Missing data source: compound-noun headword entries, or a verified compound-split confidence high enough to trust blind.
- Future solution: author these compounds as dictionary entries if they recur, or extend compound-split confidence once a decomposition method is validated against real curriculum pairs.
- Found in: chapter-a1-9-verben (vocabulary plural tags).

### lösche → löschen (1st person)
- Reason: same conjugated-form gap as möchtest.
- Found in: chapter-a2-5-dass (vocabulary example sentence).

### mündliche → mündlich (declined adjective)
- Reason: same declension-endings gap as persönliche.
- Found in: chapter-a2-5-dass (vocabulary example sentence).

### weiterweiß → weiterwissen (separable verb, joined in subordinate clause)
- Reason: separable verb compound forms (weiter + weiß, joined because the subordinate-clause "wenn" pushes the verb to the end without separating the prefix) aren't indexed as a single inflected surface form.
- Missing data source: authored separable-verb inflection forms covering both split ("weiß ... weiter") and joined ("weiterweiß") surface realizations.
- Future solution: extend the inflection index to include the joined form for every separable verb's conjugated forms, alongside the already-indexed split form.
- Found in: chapter-a2-5-dass (vocabulary example sentence).

### Traum- / Traum key collision (architectural note, not a per-word gap)
- Reason: normWord() strips trailing hyphens for lookup, so the authored prefix headword "Traum-" ("dream-", as in Traumjob) and the plain noun "Traum" ("dream") both normalize to the same Global Lexicon key "traum". The build kept only one; within chapter-a2-8 itself this doesn't surface (local chapter vocab is checked before the Global Lexicon and correctly holds "Traum-"), but if "Traum-" is ever clicked recursively from a DIFFERENT chapter with no local entry, it would incorrectly resolve to the noun "Traum" instead.
- Missing data source: a Global Lexicon key scheme that keeps hyphen-suffixed prefix entries distinct from their plain-word homographs.
- Future solution: extend the Global Lexicon builder to key genuinely-authored prefix/suffix entries separately from same-spelling plain words.
- Found in: chapter-a2-8-komparativ-superlativ (vocabulary — Traum-/Süd- prefix entries).

### Missing compare field: gut, wichtig, effizient, wesentlich, differenziert
- Surface Form / Expected Lemma: gut→gut (irregular: besser/am besten), wichtig→wichtig, effizient→effizient, wesentlich→wesentlich, differenziert→differenziert.
- Missing Field: compare (comparative/superlative).
- Reason: comparison forms were never authored for these adjectives in any chapter's vocab data — the Global Lexicon is compiled purely from authored per-chapter vocab, so no source in the curriculum has this data. Confirmed not a pipeline/merge/rendering bug: adjectives that DO have authored compare data (groß, klein, interessant, schön) render both Comparative and Superlative correctly end-to-end, including through lemma-resolved recursive popups (verified größer→groß).
- Suggested Future Solution: author `compare: { comparative, superlative }` for these entries in their source vocab files (note "gut" is irregular: besser/am besten, not "guter"/"am gutsten").

### Various comparative/declined/conjugated forms (chapter-a2-9-vergleiche-als-wie)
- kürzer, kühler, näher, süßer, klüger, fröhlicher, blöder, öfter → comparative forms (same gap as größer, but for adjectives whose own base entry also lacks authored compare data).
- großer, möblierte, zehnjährige → declined adjective/participle forms (same gap as persönliche).
- kündige, bestätige, füttere → 1st-person conjugated verb forms (same gap as möchtest).
- Bestätigung → derived noun with no dictionary entry (only the verb "bestätigen" is authored); missing data source: author "Bestätigung" as its own noun headword.

### Tschüss / wegfährst (chapter-a2-11-wenn)
- Tschüss → no dictionary entry exists for this common informal farewell interjection anywhere in the curriculum. Missing data source: author "Tschüss" as its own headword (interjection).
- wegfährst → wegfahren (2nd person conjugated separable verb) — same conjugated-form gap as möchtest.

### Reflexive (chapter-a2-12-reflexive-verben, hero title) / kümmere, ärgere, fällst, höre
- Reflexive → reflexiv (declined adjective) — same declension gap as persönliche.
- kümmere, ärgere, höre → 1st-person conjugated forms; fällst → 2nd-person conjugated form — same conjugated-form gap as möchtest.

### Öffentliche (chapter-a2-14-wechselpraepositionen)
- Öffentliche → öffentlich (declined adjective) — same declension gap as persönliche.

### gefällt, günstigsten, späterer (chapter-a2-19-indirekte-fragen, vocab example sentences)
- gefällt → gefallen (3rd-person conjugated form) — same conjugated-form gap as möchtest.
- günstigsten → günstig (superlative declined form, "am günstigsten") — same declension gap as persönliche.
- späterer → später (declined comparative adjective) — same declension gap as persönliche.

### Erklär, großen (chapter-a2-21-verben-dativ-akkusativ, vocab example sentences)
- Erklär → erklären (imperative form) — same imperative gap as Öffne.
- großen → groß (declined adjective) — same declension gap as persönliche.

### Gehörlosen, Erzähl (chapter-a2-22-konjunktiv2-koennte, vocab example sentences)
- Gehörlosen → gehörlos (declined adjective/noun) — same declension gap as persönliche.
- Erzähl → erzählen (imperative form) — same imperative gap as Öffne.

### ausländischen, selbstständiger, kürzer, öfter (chapter-a2-23-konjunktiv2-sollte, vocab example sentences)
- ausländischen → ausländisch (declined adjective) — same declension gap as persönliche.
- selbstständiger → selbstständig (declined comparative adjective) — same declension gap as persönliche.
- kürzer → kurz (comparative form) — same declension gap as persönliche.
- öfter → oft (comparative form) — same declension gap as persönliche.

### könnten (chapter-a2-24-deshalb-trotzdem, vocab example sentence)
- könnten → können (Konjunktiv II, wir/sie-plural form) — modal verb Konjunktiv II paradigm not yet indexed (only 3rd-person singular "könnte" is authored).

### könntest, unnötigen (chapter-a2-25-goethe-mini-3)
- könntest → können (Konjunktiv II, 2nd-person form) — same modal Konjunktiv II gap as könnten.
- unnötigen → unnötig (declined adjective) — same declension gap as persönliche.

### träume, gehört, kümmere, Kümmerst (chapter-a2-30-verben-praepositionen, vocab example sentences)
- träume, kümmere, Kümmerst → träumen/kümmern (1st/2nd-person conjugated forms) — same conjugated-form gap as möchtest.
- gehört → ambiguous homograph, correctly excluded by the frozen collision-elimination architecture: 3rd-person praesens of "gehören" (to belong) collides with the Perfekt participle of "hören" (to hear) — same spelling, two unrelated verbs, cannot be resolved deterministically without full sentence context. Future solution: a context-aware (sentence-level) disambiguator, out of scope for a per-word lookup.

### gemütliche, Prüfungsvorbereitung (chapter-a2-35-goethe-mini-4)
- gemütliche → gemütlich (declined adjective) — same declension gap as persönliche.
- Prüfungsvorbereitung → compound noun, no dictionary entry authored.

### Würdest, Könntest, annähen (chapter-b1-3-konjunktiv2-hoefliche-bitten)
- Würdest → werden (Konjunktiv II, 2nd-person form) — modal/auxiliary Konjunktiv II paradigm gap, same category as könntest.
- Könntest → können (Konjunktiv II, 2nd-person form) — same modal Konjunktiv II gap as könnten/könntest (chapter-a2-25).
- annähen → separable verb infinitive, no dictionary entry authored.

### süße, schöne, Könntest, Könnten, Werbesprüche(n), Verkäufe, Geräts (chapter-b1-4-folgen-deshalb-so-dass)
- süße, schöne → declined adjective forms — same declension gap as persönliche.
- Könntest, Könnten → können (Konjunktiv II forms) — same modal Konjunktiv II gap as könnten.
- Werbesprüche, Werbesprüchen → plural/dative-plural of "Werbespruch" (compound noun) — no base entry authored.
- Verkäufe → plural of "Verkauf" — no base entry authored.
- Geräts → genitive of "Gerät" — noun case-declension not yet indexed (same category as Wörtern).

### höheren, Umstände, ursprünglichen, Urgroßvaters, zusätzliche, Müdigkeit, Nachtwächters, fühlten, ungewöhnlichen (chapter-b1-5-genitiv-wegen-trotz-waehrend)
- höheren, ursprünglichen, zusätzliche, ungewöhnlichen → declined adjective forms — same declension gap as persönliche.
- Umstände → plural of "Umstand" — no base entry authored.
- Urgroßvaters, Nachtwächters → genitive noun forms — same case-declension gap as Wörtern/Geräts.
- Müdigkeit → noun, no base entry authored.
- fühlten → fühlen, Präteritum plural — same conjugated-form gap as möchtest.

### große, schüchtern, beschäftigt, erkältete, überquerten, völliger, ungewöhnliche, Schülern (chapter-b1-7-praeteritum)
- große, völliger, ungewöhnliche, erkältete → declined adjective forms — same declension gap as persönliche.
- schüchtern → adjective, no base entry authored.
- beschäftigt → participle adjective, no base entry authored.
- überquerten → überqueren, Präteritum plural — same conjugated-form gap as fühlten.
- Schülern → dative plural of "Schüler" — same case-declension gap as Wörtern.

### Hätten, gäbe (chapter-b1-8-zeitangaben-dativ-genitiv)
- Hätten → haben (Konjunktiv II, plural form) — same modal/auxiliary Konjunktiv II gap as Würden/Könnten.
- gäbe → geben (Konjunktiv II, 3rd-person form) — same Konjunktiv II gap category, new verb.

### überraschend (chapter-b1-9-goethe-mini-2)
- überraschend → participle/adjective, no base entry authored.

### regelmäßige, seriöse, überzeugendes, zukünftigen/zukünftige, kümmerst, großes, großartige, verspäte, höhere, Sämtliche, erzählten, größter, schönes, schönen, Gehaltserhöhung (chapter-b1-12-adjektivdeklination-wiederholung)
- All declined-adjective forms → same declension gap as persönliche (regelmäßige, seriöse, überzeugendes, zukünftigen/zukünftige, großes, großartige, höhere, Sämtliche, größter, schönes, schönen, verspäte).
- kümmerst, erzählten → conjugated-form gap, same category as möchtest/fühlten.
- Gehaltserhöhung → compound noun, no base entry authored.

### nächstes, alltägliches, großen, Städten, Großstädten, höhere, vielfältig, Großstadtlebens, grünen (chapter-b1-14-komparativ-superlativ-vor-nomen)
- nächstes, alltägliches, großen, höhere, grünen → declined adjective forms — same declension gap as persönliche.
- Städten, Großstädten → dative plural of "Stadt"/"Großstadt" — same case-declension gap as Wörtern.
- Großstadtlebens → genitive compound noun — same case-declension gap.
- vielfältig → adjective, no base entry authored.

### großen, sorgfältig, Fahrrädern (chapter-b1-15-n-deklination)
- großen → declined adjective — same declension gap as persönliche.
- sorgfältig → adjective, no base entry authored.
- Fahrrädern → dative plural of "Fahrrad" — same case-declension gap as Wörtern.

### großes, Mülltrennung, Plastikmüll, Kürzere (chapter-b1-17-nebensatz-damit-um-zu)
- großes, Kürzere → declined adjective forms — same declension gap as persönliche.
- Mülltrennung, Plastikmüll → compound nouns, no base entries authored.

### Gebäudes, städtische, Flüchtlingen (chapter-b1-18-relativsaetze-mit-praepositionen)
- Gebäudes → genitive of "Gebäude", base exists but genitive form not indexed — same case-declension gap as Wörtern.
- städtische → declined adjective — same declension gap as persönliche.
- Flüchtlingen → dative plural of "Flüchtling", base exists but form not indexed — same case-declension gap.

### Könnten, Wärst, großer/große/großes, unterstützt (chapter-b1-19-goethe-halbzeit-test)
- Könnten, Wärst → Konjunktiv II forms — known modal/auxiliary gap category.
- großer, große, großes → declined adjective forms — same declension gap as persönliche.
- unterstützt → participle, no base entry authored.

### schätze (chapter-b1-20-plusquamperfekt)
- schätze → schätzen, 1st-person conjugated form — same conjugated-form gap as möchtest.

### zuzuhören, zurückgewinnen (chapter-b1-21-temporale-nebensaetze)
- zuzuhören → "zu"-infinitive form of separable verb "zuhören" (base entry exists, but the split zu-infinitive form "zuzuhören" is not indexed).
- zurückgewinnen → separable verb infinitive, no dictionary entry authored.

### Zähl (chapter-b1-23-reflexivpronomen-akkusativ-dativ)
- Zähl → zählen, imperative form — same imperative gap as Öffne.

### Räuspere (chapter-b1-25-stellung-von-nicht)
- Räuspere → sich räuspern, 1st-person reflexive conjugated form — no dictionary entry.

### Aufführung (chapter-b1-26-adjektiv-ohne-artikel)
- Aufführung → noun (performance), no dictionary entry authored.

### Maßstab, fürs (chapter-b1-28-passiv-praesens-praeteritum-perfekt)
- Maßstab → noun, no dictionary entry authored.
- fürs → contraction of "für das", not indexed.

### überwunden (chapter-b1-29-passiv-modalverben)
- überwunden → überwinden, Perfekt participle — base verb has no dictionary entry.

### Unterstützung, räumen, bedürftigen, Gewürzen (chapter-b1-30-artikelwoerter-als-pronomen)
- Unterstützung → noun, no dictionary entry authored.
- räumen → verb infinitive, no dictionary entry authored.
- bedürftigen → declined adjective — same declension gap as persönliche.
- Gewürzen → dative plural of "Gewürz", base has no dictionary entry.

### überbrücken (chapter-b2-03-informationsstruktur-thema-rhema)
- überbrücken → verb infinitive, no dictionary entry authored.

### Drehbücher (chapter-b2-04-formales-es)
- Drehbücher → plural of "Drehbuch", base has no dictionary entry.

### Veröffentlichung (chapter-b2-07-verbergaenzungen-erkennen)
- Veröffentlichung → noun, no dictionary entry authored.

### überdenken (chapter-b2-08-valenz-von-verben)
- überdenken → verb infinitive, no dictionary entry authored.

### abzuschließen (chapter-b2-09-trennbar-vs-untrennbar)
- abzuschließen → zu-infinitive of separable verb "abschließen" (base entry exists, but the split zu-infinitive form is not indexed) — same category as zuzuhören.

### unterschätzen (chapter-b2-12-doppelte-verneinung-litotes)
- unterschätzen → verb infinitive, no dictionary entry authored.

### gründlicher, hätten, Gepäckermittler (chapter-b2-13-nuancierte-negation)
- gründlicher → declined comparative adjective — same declension gap as persönliche.
- hätten → haben Konjunktiv II — known modal/auxiliary gap category.
- Gepäckermittler → compound noun, no dictionary entry authored.

### Rückgabe, lösten, Läufer (chapter-b2-16-konsekutivsaetze-sodass-infolgedessen)
- Rückgabe, Läufer → nouns, no dictionary entries authored.
- lösten → lösen, Präteritum plural — same conjugated-form gap as fühlten.

### Parfümeur, Büchern, Näher (chapter-b2-18-modalsaetze-dadurch-dass)
- Parfümeur → noun, no dictionary entry authored.
- Büchern → dative plural of "Buch", base has no dictionary entry.
- Näher → comparative of "nah"/"nahe", no dictionary entry (irregular umlaut category, same as groß/hoch).

### verlässlicher, vernünftiger, Geschäftsführer (chapter-b2-19-ohne-zu)
- verlässlicher, vernünftiger → declined comparative adjective forms — same declension gap as persönliche.
- Geschäftsführer → compound noun, no dictionary entry authored.

### kürzen (chapter-b2-20-anstatt-zu)
- kürzen → verb infinitive, no dictionary entry authored.

### ausführlich (chapter-b2-21-sowohl-als-auch)
- ausführlich → adjective, no dictionary entry authored.

### Nachlässigkeit (chapter-b2-22-weder-noch)
- Nachlässigkeit → noun, no dictionary entry authored.

### gefährdete, zögerte (chapter-b2-23-nicht-nur-sondern-auch)
- gefährdete → declined participle/adjective — same declension gap as persönliche.
- zögerte → zögern, Präteritum form, base has no dictionary entry.

### verfügbar, Zuverlässigkeit (chapter-b2-24-einerseits-andererseits)
- verfügbar → adjective, no dictionary entry authored.
- Zuverlässigkeit → noun, no dictionary entry authored.

### Sozialhilfeempfänger, Alleinernährer (chapter-b2-25-verbindungsadverbien)
- Sozialhilfeempfänger, Alleinernährer → compound nouns, no dictionary entries authored.

### Einschätzung (chapter-b2-27-perfekt-vs-praeteritum)
- Einschätzung → noun, no dictionary entry authored.

### Erzähler, blätterte (chapter-b2-28-tempuswechsel-im-text)
- Erzähler → noun, no dictionary entry authored.
- blätterte → blättern, Präteritum form, base has no dictionary entry.

### wünschten, köstlich, Lokführer, Maßen (chapter-b2-29-futur1-vermutungen)
- wünschten → wünschen, Präteritum plural conjugated form — same conjugated-form gap as fühlten (base entry exists).
- köstlich → adjective, no dictionary entry authored.
- Lokführer → compound noun, no dictionary entry authored.
- Maßen → dative plural of "Maß" — same case-declension gap as Wörtern (base entry exists).

### fürchterlich, fraßen, saßen, hängte, räumte (chapter-b2-30-alternativen-zum-futur)
- fürchterlich → adjective, no dictionary entry authored.
- fraßen, saßen → Präteritum plural of fressen/sitzen — same conjugated-form gap as fühlten (base entries exist).
- hängte, räumte → Präteritum forms of hängen/räumen — same conjugated-form gap (räumen already logged as having no base entry).

### Staatsführer (chapter-b2-31-konjunktiv2-vergangenheit)
- Staatsführer → compound noun, no dictionary entry authored.

### schämte (chapter-b2-32-konjunktiv2-vermutungen)
- schämte → sich schämen, Präteritum form, base has no dictionary entry.

### spürbar, führten, schwächten, überfüllt (chapter-b2-33-irreale-vergleiche-als-ob)
- spürbar → adjective, no dictionary entry authored.
- führten → führen, Präteritum plural — same conjugated-form gap as fühlten (base entry exists).
- schwächten → schwächen, Präteritum plural, base has no dictionary entry.
- überfüllt → participle/adjective, no dictionary entry authored.

### eingängig, verstärkten, Außenseiter (chapter-b2-34-temporalsaetze-waehrend-seitdem)
- eingängig → adjective, no dictionary entry authored.
- verstärkten → declined participle of "verstärkt" — same declension gap as persönliche.
- Außenseiter → noun, no dictionary entry authored.

### aßen (chapter-b2-35-temporalsaetze-bevor-nachdem)
- aßen → essen, Präteritum plural — same conjugated-form gap as fühlten (base entry exists).

### Grundstück (chapter-b2-37-relativsaetze-genitiv)
- Grundstück → noun, no dictionary entry authored.

### verzögerte, füge, Füßen (chapter-b2-38-verschachtelte-relativsaetze)
- verzögerte → verzögern, Präteritum form, base has no dictionary entry.
- füge → fügen (or hinzufügen), 1st-person conjugated form, base has no dictionary entry.
- Füßen → dative plural of "Fuß" — same case-declension gap as Wörtern (base entry exists).

### täuschte, entschärft, verübt, fürsorgliche (chapter-b2-39-relativsaetze-wer-der)
- täuschte → täuschen, Präteritum form, base has no dictionary entry.
- entschärft, verübt → participles, no dictionary entries authored.
- fürsorgliche → declined adjective — same declension gap as persönliche.

### Bäumen, gütige (chapter-b2-40-verben-mit-praepositionen)
- Bäumen → dative plural of "Baum" — same case-declension gap as Wörtern (base entry exists).
- gütige → declined adjective — same declension gap as persönliche.

### Geräusch, verkündet, entzündet, verhört, gerötet (chapter-b2-41-nomen-mit-praepositionen)
- Geräusch → noun, no dictionary entry authored.
- verkündet, entzündet, verhört, gerötet → participles, no dictionary entries authored.

### großformatige, Ich-Erzähler, Meisterschüler, Gemäldes, vordergründiges, Fälschungen (chapter-b2-42-adjektive-mit-praepositionen)
- großformatige, vordergründiges → declined adjective forms — same declension gap as persönliche.
- Ich-Erzähler, Meisterschüler → compound nouns, no dictionary entries authored.
- Gemäldes → genitive of "Gemälde" — same case-declension gap as Wörtern (base entry exists).
- Fälschungen → plural of "Fälschung", base has no dictionary entry.

### Verfügbarkeit (chapter-b2-44-zustandspassiv)
- Verfügbarkeit → noun, no dictionary entry authored.

### sträubte, Änderung, Ärztemangels, beschränkten (chapter-b2-45-passiversatz-sich-lassen)
- sträubte → sich sträuben, Präteritum conjugated form — same conjugated-form gap as fühlten (base entry exists).
- Änderung → noun, no dictionary entry authored.
- Ärztemangels → genitive of "Ärztemangel" — same case-declension gap as Wörtern (base entry exists).
- beschränkten → declined participle/adjective — same declension gap as persönliche.

### hörten, präzise, Mitschüler, Mitschülerin (chapter-b2-46-unpersoenliches-passiv)
- hörten → hören, Präteritum plural — same conjugated-form gap as fühlten (base entry exists).
- präzise → adjective, no dictionary entry authored.
- Mitschüler, Mitschülerin → compound nouns, no dictionary entries authored.

### bemühte (chapter-b2-48-modalitaetsersatz-haben-sein-zu)
- bemühte → sich bemühen, Präteritum conjugated form — same conjugated-form gap as fühlten (base entry exists). "überein" is a separable-verb particle fragment (übereinstimmen), correctly non-clickable on its own.

### Fachkräften, bestmögliche (chapter-b2-49-passiv-in-wissenschaft-und-beruf)
- Fachkräften → dative plural of "Fachkraft", base has no dictionary entry.
- bestmögliche → declined adjective of "bestmöglich" — same declension gap as persönliche.

### Kämpfer (chapter-b2-50-nominalisierung)
- Kämpfer → noun, no dictionary entry authored.

### revolutionär, beeinträchtigte, Wäsche (chapter-b2-51-erweiterte-partizipialattribute)
- revolutionär → adjective, no dictionary entry authored.
- beeinträchtigte → declined participle/adjective, base has no dictionary entry.
- Wäsche → noun, no dictionary entry authored.

### verschärften, ausgewählte, ertönte, Ministerpräsident, Ökologe/Ökologin, Ratschläge (chapter-b2-52-komplexe-nominalgruppen)
- verschärften, ausgewählte → declined participles, no dictionary entries authored.
- ertönte → ertönen, Präteritum form, no dictionary entry authored.
- Ministerpräsident, Ökologe, Ökologin → compound/derived nouns, no dictionary entries authored.
- Ratschläge → plural of "Ratschlag" — same case-declension gap as Wörtern (base entry exists).

### Präg, Gönn (chapter-b2-55-modalpartikeln-doch-ja)
- Präg, Gönn → imperative forms of prägen/gönnen — same imperative gap as Öffne.

### Grenzübergang (chapter-b2-58-textkohaerenz-absatzlogik)
- Grenzübergang → compound noun, no dictionary entry authored.

### Jubiläums (chapter-b2-64-praepositionen-mit-genitiv)
- Jubiläums → genitive of "Jubiläum", base has no dictionary entry.

### dürfte (chapter-c1-12-modalverben-praezise-verwenden)
- dürfte → dürfen, Konjunktiv II form — modal verb Konjunktiv II paradigm gap, same category as könnte/könnten.

### repräsentativ, füreinander (chapter-c1-14-konjunktiv-ii-fuer-irreales-und-hypothesen)
- repräsentativ → adjective, no dictionary entry authored.
- füreinander → reciprocal pronoun-adverb, no dictionary entry authored.

### frühzeitig (chapter-c1-16-aufforderung-empfehlung-und-handlungssteuerung)
- frühzeitig → adjective, no dictionary entry authored.

### zurückgetretene (chapter-c1-21-partizipialattribute-verstehen-und-nutzen)
- zurückgetretene → declined Perfekt participle of "zurücktreten" — same declension gap as persönliche (base entry exists).

### Funktionsverbgefüge (chapter-c1-27-funktionsverbgefuege-im-akademischen-deutsch)
- Funktionsverbgefüge → grammar-term compound noun (used repeatedly in exercise/quiz prose), no dictionary entry authored.

### Kohärenz, Übergang (chapter-c1-32-kohaerenz-und-textverknuepfung)
- Kohärenz, Übergang → nouns, no dictionary entries authored.

### universitären (chapter-c1-41-grafikbeschreibung-und-grafikauswertung)
- universitären → declined adjective "universitär", no dictionary entry authored.

### Einzelfällen, stieß, vernachlässigtes, büßt, Forschungsstränge, Untätigkeit, Fälle, außergerichtlich, Stichprobengröße, schränkt (chapter-c2-02-verben-mit-praefixen)
- Einzelfällen → dative plural of "Einzelfall" — same case-declension gap as Wörtern (base entry exists).
- stieß → stoßen, Präteritum form, base has no dictionary entry.
- vernachlässigtes → declined participle of "vernachlässigt", base has no dictionary entry.
- büßt → büßen, conjugated form, base has no dictionary entry.
- Forschungsstränge → plural of "Forschungsstrang", no dictionary entry authored.
- Untätigkeit → noun, no dictionary entry authored.
- Fälle → plural of "Fall" — same case-declension gap as Wörtern (base entry exists).
- außergerichtlich → adjective, no dictionary entry authored.
- Stichprobengröße → compound noun, no dictionary entry authored.
- schränkt → einschränken (or verwandte Verb), 3rd-person conjugated form, base has no dictionary entry.
- ausführlich, räumt, Große, Veröffentlichung, verfügbaren → all previously logged (known category repeats).

### erlässt, Beschränkung (chapter-c2-04-nomen-verb-verbindungen)
- erlässt → erlassen, 3rd-person conjugated form, base has no dictionary entry.
- Beschränkung → noun, no dictionary entry authored.

### ursächlich (chapter-c2-07-konjunktiv-i)
- ursächlich → adjective, no dictionary entry authored. "späten" is a known declension gap (spät).

### erübrigt, Prämissen, äußerten, zulässig, Berücksichtigung, übertragbar (chapter-c2-10-adverbialsaetze-und-diskursmarker)
- erübrigt → sich erübrigen, conjugated form, base has no dictionary entry.
- Prämissen → plural of "Prämisse", base has no dictionary entry.
- äußerten → äußern, Präteritum plural conjugated form — same conjugated-form gap as fühlten (base entry exists).
- zulässig → adjective, no dictionary entry authored.
- Berücksichtigung → noun, no dictionary entry authored.
- übertragbar, übertragen → adjective/verb, no dictionary entries authored.

### Datensätze (chapter-c2-13-passiversatzformen)
- Datensätze → plural of "Datensatz", no dictionary entry authored.

### widersprüchlichen, stützt (chapter-c2-15-partizipien-als-adjektive)
- widersprüchlichen → declined adjective "widersprüchlich", no dictionary entry authored.
- stützt → stützen, 3rd-person conjugated form, base has no dictionary entry.

### plädierte (chapter-c2-16-nominalisierte-adjektive-und-partizipien)
- plädierte → plädieren, Präteritum form, base has no dictionary entry.

### Glaubwürdigkeit (chapter-c2-17-adjektivdeklination-auf-c2-niveau)
- Glaubwürdigkeit → noun, no dictionary entry authored.

### gestützt, zuständige, mutmaßliche (chapter-c2-18-stilistische-nuancen-und-register-von-adjektiven)
- gestützt → Perfekt participle of "stützen", base has no dictionary entry (same verb as stützt above).
- zuständige → declined adjective "zuständig" — same declension gap as persönliche (base entry exists).
- mutmaßliche → declined form of "mutmaßlich" (policy: manual_review, semantic gradability — correctly not auto-generated); base adjective itself has no dictionary entry.

### Gesamtbevölkerung (chapter-c2-19-adjektive-mit-ergaenzungen)
- Gesamtbevölkerung → compound noun, no dictionary entry authored.

### Erzählperspektive, Präfixverben, Ergänzungen (chapter-c2-20-goethe-mini-3)
- Erzählperspektive, Präfixverben, Ergänzungen → grammar-terminology nouns (used in quiz prose), no dictionary entries authored.

### zukunftsfähige, Anpassungsfähige, überstehen, durchsetzungsfähige, Führungskraft, tragfähige, leistungsfähiger, öffentlichkeitswirksame, Computergestützte (chapter-c2-21-wortbildung-der-adjektive)
- zukunftsfähige, Anpassungsfähige, durchsetzungsfähige, tragfähige, leistungsfähiger, öffentlichkeitswirksame, Computergestützte → declined/inflected forms of adjectives that already have base dictionary entries — same declension gap as persönliche.
- überstehen → verb infinitive, no dictionary entry authored.
- Führungskraft → compound noun, no dictionary entry authored.
- ("stützt" and "höhere" are previously logged known-category gaps.)

### Bundesländern, vierteljährlich, überwacht, europäische (chapter-c2-22-wortbildung-der-nomen)
- Bundesländern → dative plural of "Bundesland" — same case-declension gap as Wörtern (base entry exists).
- vierteljährlich → adjective, no dictionary entry authored.
- überwacht → participle of "überwachen", base has no dictionary entry.
- europäische → declined adjective — same declension gap as persönliche (base entry exists).

### entkräftet, Prüfungsordnung, Wärme, Fakultät, Förderprogramm, lückenlos (chapter-c2-23-wortbildung-der-verben)
- entkräftet → conjugated/participle form of "entkräften" — same conjugated-form gap as fühlten (base entry exists).
- Prüfungsordnung, Wärme, Fakultät, Förderprogramm → nouns, no dictionary entries authored.
- lückenlos → adjective, no dictionary entry authored.
- ("Fälle" and "Ländern" are previously logged known-category gaps.)

### Brüssel, langjähriger, Eröffnungsvortrag, unzuverlässiger (chapter-c2-25-appositionen)
- Brüssel → proper noun (city name), correctly not dictionary-linked — not a gap.
- langjähriger, unzuverlässiger → adjectives, no dictionary entries authored.
- Eröffnungsvortrag → compound noun, no dictionary entry authored.
- ("zusätzliche" and "zuständige" are previously logged known-category gaps.)

### Auffälligkeiten, höchstrichterliche, Großteil, Molekülen (chapter-c2-26-nominalstil)
- Auffälligkeiten, Großteil → nouns, no dictionary entries authored.
- höchstrichterliche → adjective, no dictionary entry authored.
- Molekülen → dative plural of "Molekül", no dictionary entry authored.

### gewünschten, häufen, Klägerin, ärmsten (chapter-c2-28-praepositionen-der-schriftsprache)
- gewünschten → declined participle of "wünschen", base entry exists but participle form not indexed.
- häufen → verb infinitive, no dictionary entry authored.
- Klägerin → noun, no dictionary entry authored.
- ärmsten → superlative of "arm" — irregular umlaut adjective, base entry exists but flagged manual_review (semantic gradability policy); superlative form not authored. ("Jubiläums" is a previously logged known-category gap.)

### glücklichen, Würden, müsste (chapter-a2-32-konjunktiv2-wuensche-hoeflichkeit)
- glücklichen → glücklich (declined adjective) — same declension gap as persönliche.
- Würden → werden (Konjunktiv II, plural/formal form) — same modal Konjunktiv II gap as könnten.
- müsste → müssen (Konjunktiv II, 3rd-person form) — same modal Konjunktiv II gap as könnten.

### ei / ie / sch — pronunciation digraphs (chapter-a1-1, grammar sound-rule rows) — HIGHEST SEVERITY
- Surface Form / Expected Lemma: `ei`, `ie`, `sch` → themselves, as Letter/Sound citations (not as words).
- Missing Field: a chapter-authored Letter/Sound token, as already exists for the single letters (A–Z, ä/ö/ü) and for the sound `ts`.
- Reason: the sound-rule rows ("✕ ei → 'ee'" / "✓ ei → 'eye'") teach these digraphs as orthographic units. The chapter authors Letter/Sound entries only for single letters and `ts`, so `ei` falls through to the Global Lexicon noun `Ei` and the popup tells a learner studying the *ei* spelling rule that it means "egg" (Noun badge, Number paradigm, "Ich esse ein Ei."). `ie` and `sch` have no dictionary entry at all, so they stay unlinked — inconsistent with `ei`/`z`/`ts` in the same table, but harmless.
- Not an engine defect: the resolver correctly used the only data available and correctly refuses to invent a digraph entry. Verified after the surface-stable-role fix — `roleFor('ei')` still returns `r-object`, as it must.
- Suggested Future Solution: author `ei`, `ie`, `sch` following the existing in-chapter `ts` pattern — `{ w, role: 'r-letter', en, hi, pron, type: 'Sound', why, ex, exEn }`. No new schema, no new mechanism. The chapter's own `why` text already states each fact (ei = "eye"/Eis; ie = "ee"/Liebe; sch = English "sh"/Schule); the Hindi gloss should follow the established `"ts" ध्वनि` formula. **Needs curriculum sign-off before authoring — do not fabricate.**

### Liebe — missing plural (chapter-a1-1, grammar prose)
- Surface Form / Expected Lemma: Liebe → Liebe (noun, "love").
- Missing Field: `plural`.
- Reason: `Liebe` has no Global Lexicon entry of its own. It previously rendered the full Conjugation paradigm of the verb `lieben` under a "Noun" badge, because `KW_INFLECTIONS['liebe'] → 'lieben'` and the paradigm guard only checked the occurrence-declared class (empty for auto-linkified words). Fixed by `entryAllowsParadigm` (handoff §7 fix 13); the noun now correctly renders no paradigm rather than a wrong one.
- Suggested Future Solution: author `Liebe` as a noun headword with gender and plural (or mark it explicitly as a mass noun with no plural, which is the linguistically accurate answer).

### Eis — invariant noun, no occurrence number metadata (chapter-a1-1, grammar prose citation)
- Reason: singular == plural, and this citation occurrence carries no authored number metadata, so the Number paradigm renders 2 identical cells with 0 active. Correct engine abstention per the frozen rule (Unknown > Guess), not a defect.
- Suggested Future Solution: if a citation occurrence should show an active cell, author occurrence number metadata via the existing `data-type` mechanism (as already done for `Käse`).

### r-contrast / r-addition outside CANONICAL_ROLES (chapter-c1-05, logged out of sequence)
- Reason: these authored roles are not in `CANONICAL_ROLES` and render in the teal `--accent` `#1F4E4A` — a conversion/action colour being used as a grammar colour, which inverts the "colour carries grammatical meaning only" rule. 23 further clickable spans carry no `r-*` class (explicit `plain`).
- Note: pre-existing, unrelated to this session's fixes. Do not fix until the sequential audit reaches C1-05.


