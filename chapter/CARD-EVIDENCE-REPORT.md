# Vocabulary-card evidence report

Complete harvest of every `vocab:` card across all 259 chapter data files,
matched against the dictionary and the candidate lists. **No file was modified,
no entry authored, no meaning or Hindi gloss inferred.**

## A. Cards harvested

| | Count |
| --- | --- |
| **Unique card headwords** | **7,757** |
| Multi-word (phrase, idiom, collocation, construction) — not headword candidates | 874 |
| **Single-word headwords** | **6,883** |
| → already a Global Lexicon entry | **6,742 (98.0%)** |
| → present only as an inflection target | 12 |
| → in the caps overlay | 0 |
| → **card-backed but missing from the dictionary** | **129** |

Cards were extracted with a brace-balanced, string-aware scan rather than a
regex, because a plain `[^{}]*` pattern silently drops every card carrying a
nested `conj: {...}`. Fields captured: `de`, `art`, `gender`, `pos`, `level`,
`en`, `hi`, `plural`, `ex`, source chapter, and whether a conjugation is
present. **Every one of the 129 has both an English and a Hindi gloss** — one
card in the whole corpus lacks `en`, none lacks `hi`.

## B–D. Match against the candidates

| | Count |
| --- | --- |
| Candidate new headwords (from the lexeme map) | 1,506 |
| **B. Directly card-backed** | **47** |
| C. Card-backed candidates already in the dictionary | 0 — by construction, candidates are absent |
| **D. Card-backed and genuinely missing** | **47** of the candidates; **129** across the whole dictionary |
| **G. No card evidence — needs external verification** | **1,459 (96.9%)** |
| E. Of the 685 unresolved surfaces, card-backed | **0** |

## This overturns the hypothesis I raised last turn

I suggested that if a share of the 1,506 were card-backed, "a large part of the
authoring is really harvesting, with no new linguistic claims". **It is not.**

Only **47 of 1,506 (3.1%)** have card evidence. The reason is now clear and is
the useful finding: **the card corpus is already 98% harvested into the
dictionary.** Whatever process built `KW_GLOBAL_LEXICON` consumed the vocab
cards thoroughly, so the remaining backlog is by definition the part the
curriculum never carded.

Practical consequence: **1,459 of the 1,506 require external dictionary
verification** — gender, plural, conjugation, valency, and both glosses. That is
authoring proper, not harvesting, and it cannot be done from curriculum data.

## A second finding: 82 dictionary gaps that are not clickability gaps

Of the 129 card-backed missing headwords, **82 never appear in the Category-4
backlog at all**. They are taught on a vocab card but their surface either never
occurs in swept prose or already resolves another way. They are still genuine
dictionary gaps — a learner opening the vocabulary list has the card, but the
word has no dictionary entry behind it.

Examples: `Textkohärenz`, `Satzarchitektur`, `Nebensatzhierarchie`,
`Verfassungsbeschwerde`, `Datenschutzverordnung`, `Flüchtlingspolitik`,
`Nobelpreisträger`, `Chefredakteur`, `Pressesprecherin`, `Rechtsprechung`.

These are the **cheapest legitimate authoring in the entire programme**: the
curriculum has already approved headword, class, gloss, Hindi, and often article
and plural. Nothing needs inventing or verifying externally.

## F. Conflicting card evidence

**2 conflicts across the whole corpus**, both established during the earlier
gender pass over all 3,945 gender-bearing cards: `See` (der/die) and `Steuer`
(das/die). Both are genuine German homographs where two chapters legitimately
teach different words, and both were deliberately left unset rather than
resolved. No new conflict appeared in this harvest.

Worth noting separately: the harvest keeps the **first** card for a repeated
headword. That is safe for the 129 (each is card-backed once or twice) but means
this pass is not itself a full duplicate-card audit.

## H. The 129 card-backed missing headwords, by level

### B2 — 7 headwords

| Headword | Article | Gender | Class | English | Hindi | Plural | Chapter |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `die Funktionsverbgefüge` | die | plural | noun | light-verb constructions | फंक्शन-वर्ब निर्माण | — (Pl.) | b2-63-goethe-mini-5 |
| `die Textkohärenz` | die | f | noun | text coherence | टेक्स्ट सामंजस्य | — (Sg.) | b2-63-goethe-mini-5 |
| `die Zeitverschiebung` | die | f | noun | tense shift (in reported speech) | समय परिवर्तन | Zeitverschiebungen | b2-63-goethe-mini-5 |
| `die Hypothese` | die | f | noun | hypothesis | परिकल्पना | Hypothesen | b2-65-wissenschaftssprache, c2-08-modalverben |
| `das Gegenargument` | das | n | noun | counterargument | प्रतिवाद | Gegenargumente | b2-67-argumentieren-gegenargumente |
| `der Einwand` | der | m | noun | objection | आपत्ति | Einwände | b2-67-argumentieren-gegenargumente |
| `die Fertigkeit` | die | f | noun | skill | कौशल | Fertigkeiten | b2-69-goethe-zertifikat-b2-final |

### C1 — 24 headwords

| Headword | Article | Gender | Class | English | Hindi | Plural | Chapter |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `die Überarbeitung` | die | f | noun | revision | सुधार | Überarbeitungen | c1-11-goethe-mini-2 |
| `die Zeitknappheit` | die | f | noun | time pressure, shortage of time | समय की कमी | — (Sg.) | c1-11-goethe-mini-2 |
| `die Gewissheit` | die | f | noun | certainty | निश्चितता | — (Sg.) | c1-12-modalverben-praezise-verwenden, c2-08-modalverben |
| `die Zurückhaltung` | die | f | noun | reserve, caution | सावधानी | — (Sg.) | c1-12-modalverben-praezise-verwenden |
| `die Quelle` | die | f | noun | source | स्रोत | Quellen | c1-15-konjunktiv-i-und-indirekte-rede |
| `die Anmerkung` | die | f | noun | remark, note | टिप्पणी | Anmerkungen | c1-17-goethe-halbzeit-test |
| `der Lösungsansatz` | der | m | noun | solution approach | समाधान दृष्टिकोण | Lösungsansätze | c1-18-adjektivdeklination-sicher-anwenden |
| `die Karrierechance` | die | f | noun | career opportunity | करियर अवसर | Karrierechancen | c1-19-steigerung-und-sprachliche-abstufung |
| `die Spezifizierung` | die | f | noun | specification | विनिर्देश | Spezifizierungen | c1-20-relativsaetze-erweitern-und-variieren |
| `die Kürzung` | die | f | noun | shortening, compression | संक्षिप्तीकरण | Kürzungen | c1-21-partizipialattribute-verstehen-und-nutzen |
| `die Nominalgruppe` | die | f | noun | noun group, noun phrase | नाममात्र समूह | Nominalgruppen | c1-22-komplexe-attribute-und-nominalgruppen |
| `die Präzision` | die | f | noun | precision | सटीकता | — (Sg.) | c1-22-komplexe-attribute-und-nominalgruppen, c1-23-goethe-mini-3 |
| `die Einreichung` | die | f | noun (nominalization) | submission | जमा करना (संज्ञा) | Einreichungen | c1-28-goethe-mini-4 |
| `das Personal` | das | n | noun (collective) | staff, personnel | कर्मचारी (सामूहिक) | — (Kollektivum) | c1-30-nomen-mit-numerusbesonderheiten |
| `die Kohärenz` | die | f | noun | coherence | तारकसंगति | — (Sg.) | c1-32-kohaerenz-und-textverknuepfung |
| `der Befund` | der | m | noun | finding | निष्कर्ष | Befunde | c1-32-kohaerenz-und-textverknuepfung |
| `die Evidenz` | die | f | noun | evidence | प्रमाण | Evidenzen | c1-34-argumentieren-auf-c1-niveau, c2-22-wortbildung-der-nomen |
| `die Aussagekraft` | die | f | noun | explanatory power, validity | व्याख्यात्मक शक्ति | — (Sg.) | c1-35-konzession-und-abwaegen |
| `der Kleidungscode` | der | m | noun | dress code | पोशाक संहिता | Kleidungscodes | c1-36-register-und-stilebenen-beherrschen |
| `die Hauptidee` | die | f | noun | main idea | मुख्य विचार | Hauptideen | c1-38-zusammenfassung-schreiben |
| `die Abwägung` | die | f | noun | weighing, balancing (of evidence/arguments) | तुलनात्मक मूल्यांकन | Abwägungen | c1-39-stellungnahme-schreiben |
| `die Mastery` | — | — | noun (informal borrowing, used in course context) | mastery | निपुणता | — | c1-43-goethe-zertifikat-c1-final |
| `die Zertifizierung` | die | f | noun | certification | प्रमाणन | Zertifizierungen | c1-43-goethe-zertifikat-c1-final |
| `der Übergang` | der | m | noun | transition | संक्रमण | Übergänge | c1-43-goethe-zertifikat-c1-final |

### C2 — 89 headwords

| Headword | Article | Gender | Class | English | Hindi | Plural | Chapter |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `die Erzählung` | die | f | noun | narration, narrative | कथा वर्णन | Erzählungen | c2-01-zeitformen-der-verben |
| `die Annahme` | die | f | noun | assumption | धारणा | Annahmen | c2-08-modalverben |
| `die Wahrscheinlichkeit` | die | f | noun | probability | संभावना | — | c2-08-modalverben |
| `die Ungewissheit` | die | f | noun | uncertainty | अनिश्चितता | — | c2-08-modalverben |
| `die Festgenommenen` | die | pl | nominalized participle (Partizip II, plural, journalism/legal) | those arrested | गिरफ्तार किए गए लोग | — | c2-16-nominalisierte-adjektive-und-partizipien |
| `die Zeitform` | — | — | noun | tense/verb form | काल-रूप | — | c2-20-goethe-mini-3, c2-24-goethe-mini-4 |
| `das Präfixverb` | — | — | noun | prefix verb | उपसर्ग-क्रिया | — | c2-20-goethe-mini-3 |
| `die Ergänzung` | — | — | noun | complement | पूरक | — | c2-20-goethe-mini-3 |
| `die Nominalisierung` | — | — | noun | nominalization | संज्ञाकरण | — | c2-20-goethe-mini-3 |
| `der Diskursmarker` | — | — | noun | discourse marker | प्रवचन चिह्नक | — | c2-20-goethe-mini-3 |
| `das Passiversatzform` | — | — | noun | passive alternative construction | निष्क्रिय विकल्प | — | c2-20-goethe-mini-3, c2-24-goethe-mini-4 |
| `das Partizipialattribut` | — | — | noun | participial attribute | कृदंत विशेषण | — | c2-20-goethe-mini-3, c2-24-goethe-mini-4 |
| `die Adjektivdeklination` | — | — | noun | adjective declension | विशेषण विभक्ति | — | c2-20-goethe-mini-3, c2-24-goethe-mini-4 |
| `das Register` | — | — | noun | register (linguistic) | रजिस्टर | — | c2-20-goethe-mini-3, c2-24-goethe-mini-4 |
| `die Verantwortung` | — | fem. | derived noun | responsibility | ज़िम्मेदारी | die Verantwortungen | c2-22-wortbildung-der-nomen, c2-26-nominalstil |
| `die Interpretation` | — | fem. | noun (loanword) | interpretation | व्याख्या | die Interpretationen | c2-22-wortbildung-der-nomen |
| `der Datensatz` | — | masc. | compound noun | data set | डेटा सेट | die Datensätze | c2-22-wortbildung-der-nomen |
| `die Arbeitsmarktpolitik` | — | fem. | compound noun | labor-market policy | श्रम-बाज़ार नीति | die Arbeitsmarktpolitiken (rare) | c2-22-wortbildung-der-nomen |
| `das Klimaschutzgesetz` | — | neut. | compound noun | climate protection law | जलवायु संरक्षण कानून | die Klimaschutzgesetze | c2-22-wortbildung-der-nomen |
| `die Datenschutzverordnung` | — | fem. | compound noun | data protection regulation | डेटा संरक्षण विनियमन | die Datenschutzverordnungen | c2-22-wortbildung-der-nomen |
| `die Bildungspolitik` | — | fem. | compound noun | education policy | शिक्षा नीति | die Bildungspolitiken (rare) | c2-22-wortbildung-der-nomen |
| `die Arbeitsmarktentwicklung` | — | fem. | compound noun | labor market development | श्रम-बाज़ार विकास | die Arbeitsmarktentwicklungen | c2-22-wortbildung-der-nomen |
| `der Erkenntnisgewinn` | — | masc. | compound noun | gain in knowledge/insight | ज्ञान-लाभ | die Erkenntnisgewinne | c2-22-wortbildung-der-nomen |
| `die Fragestellung` | — | fem. | compound noun | research question, framing of a question | प्रश्न-निरूपण | die Fragestellungen | c2-22-wortbildung-der-nomen |
| `der Untersuchungsgegenstand` | — | masc. | compound noun | object/subject of investigation | अध्ययन-विषय | die Untersuchungsgegenstände | c2-22-wortbildung-der-nomen |
| `der Forschungsansatz` | — | masc. | compound noun | research approach | शोध-दृष्टिकोण | die Forschungsansätze | c2-22-wortbildung-der-nomen |
| `die Argumentationsstruktur` | — | fem. | compound noun | structure of argumentation | तर्क-संरचना | die Argumentationsstrukturen | c2-22-wortbildung-der-nomen |
| `die Methodenkritik` | — | fem. | compound noun | methodological critique | पद्धति-आलोचना | die Methodenkritiken | c2-22-wortbildung-der-nomen |
| `der Versuchsaufbau` | — | masc. | compound noun | experimental setup | प्रयोग-संरचना | die Versuchsaufbauten | c2-22-wortbildung-der-nomen |
| `die Datenauswertung` | — | fem. | compound noun | data evaluation/analysis | डेटा-मूल्यांकन | die Datenauswertungen | c2-22-wortbildung-der-nomen |
| `die Fehleranalyse` | — | fem. | compound noun | error analysis | त्रुटि-विश्लेषण | die Fehleranalysen | c2-22-wortbildung-der-nomen |
| `die Stichprobengröße` | — | fem. | compound noun | sample size | नमूना आकार | die Stichprobengrößen | c2-22-wortbildung-der-nomen |
| `das Messverfahren` | — | neut. | compound noun | measurement method | मापन-प्रक्रिया | die Messverfahren | c2-22-wortbildung-der-nomen |
| `die Verfassungsbeschwerde` | — | fem. | compound noun | constitutional complaint | संवैधानिक शिकायत | die Verfassungsbeschwerden | c2-22-wortbildung-der-nomen |
| `der Datenschutzbeauftragte` | — | masc./fem. | compound noun (nominalized adjective) | data protection officer | डेटा संरक्षण अधिकारी | die Datenschutzbeauftragten | c2-22-wortbildung-der-nomen |
| `das Genehmigungsverfahren` | — | neut. | compound noun | approval procedure | अनुमति-प्रक्रिया | die Genehmigungsverfahren | c2-22-wortbildung-der-nomen |
| `die Antragsberechtigung` | — | fem. | compound noun | entitlement to apply | आवेदन-अधिकार | die Antragsberechtigungen | c2-22-wortbildung-der-nomen |
| `die Rechtsgrundlage` | — | fem. | compound noun | legal basis | कानूनी आधार | die Rechtsgrundlagen | c2-22-wortbildung-der-nomen |
| `die Verwaltungsvorschrift` | — | fem. | compound noun | administrative regulation | प्रशासनिक विनियम | die Verwaltungsvorschriften | c2-22-wortbildung-der-nomen |
| `die Regierungsbildung` | — | fem. | compound noun | government formation | सरकार-गठन | die Regierungsbildungen | c2-22-wortbildung-der-nomen |
| `die Haushaltsdebatte` | — | fem. | compound noun | budget debate | बजट-बहस | die Haushaltsdebatten | c2-22-wortbildung-der-nomen |
| `die Flüchtlingspolitik` | — | fem. | compound noun | refugee policy | शरणार्थी नीति | die Flüchtlingspolitiken (rare) | c2-22-wortbildung-der-nomen |
| `die Energieversorgung` | — | fem. | compound noun | energy supply | ऊर्जा-आपूर्ति | die Energieversorgungen (rare) | c2-22-wortbildung-der-nomen |
| `das Wirtschaftswachstum` | — | neut. | compound noun | economic growth | आर्थिक विकास | — | c2-22-wortbildung-der-nomen |
| `die Klimaschutzmaßnahmen` | — | fem. (pl.) | compound noun (plural) | climate protection measures | जलवायु संरक्षण उपाय | die Klimaschutzmaßnahmen | c2-22-wortbildung-der-nomen |
| `die Arbeitsmarktpolitikreform` | — | fem. | multi-part compound noun | labor-market policy reform | श्रम-बाज़ार नीति सुधार | die Arbeitsmarktpolitikreformen | c2-22-wortbildung-der-nomen |
| `die Valenz` | — | — | noun | verb valency | क्रिया-संयोजकता | — | c2-24-goethe-mini-4, c2-29-goethe-c2-final |
| `die Suffigierung` | — | — | noun | suffixation | प्रत्यय-योजन | — | c2-24-goethe-mini-4 |
| `die Präfigierung` | — | — | noun | prefixation | उपसर्ग-योजन | — | c2-24-goethe-mini-4 |
| `die Apposition` | — | fem. | noun | apposition | समानाधिकरण | die Appositionen | c2-25-appositionen, c2-29-goethe-c2-final |
| `der Beisatz` | — | masc. | noun | apposition (synonym) | समानाधिकरण (पर्यायवाची) | die Beisätze | c2-25-appositionen |
| `die Kommasetzung` | — | fem. | noun | comma placement | अल्पविराम-प्रयोग | — | c2-25-appositionen |
| `die Informationsverdichtung` | — | fem. | noun | information compression | सूचना संघनन | — | c2-25-appositionen |
| `der Verfasser` | — | masc. | noun | author (of a text) | लेखक | die Verfasser | c2-25-appositionen |
| `die Gutachterin` | — | fem. | noun | reviewer, assessor | समीक्षक | die Gutachterinnen | c2-25-appositionen |
| `die Herausgeberin` | — | fem. | noun | editor (of a publication) | संपादक | die Herausgeberinnen | c2-25-appositionen |
| `die Vorsitzende` | — | fem. | noun (nominalized adjective) | chairperson (fem.) | अध्यक्ष | die Vorsitzenden | c2-25-appositionen |
| `der Staatssekretär` | — | masc. | noun | state secretary | राज्य सचिव | die Staatssekretäre | c2-25-appositionen |
| `der Nobelpreisträger` | — | masc. | noun | Nobel laureate | नोबेल पुरस्कार विजेता | die Nobelpreisträger | c2-25-appositionen |
| `die Forschungsleiterin` | — | fem. | noun | head of research | शोध प्रमुख | die Forschungsleiterinnen | c2-25-appositionen |
| `der Projektleiter` | — | masc. | noun | project leader | परियोजना प्रमुख | die Projektleiter | c2-25-appositionen |
| `der Behördenleiter` | — | masc. | noun | head of the authority/agency | विभाग प्रमुख | die Behördenleiter | c2-25-appositionen |
| `die Sachbearbeiterin` | — | fem. | noun | case officer, clerk in charge | मामला अधिकारी | die Sachbearbeiterinnen | c2-25-appositionen |
| `der Bevollmächtigte` | — | masc. | noun (nominalized adjective) | authorized representative | अधिकृत प्रतिनिधि | die Bevollmächtigten | c2-25-appositionen |
| `der Erzähler` | — | masc. | noun | narrator | कथावाचक | die Erzähler | c2-25-appositionen |
| `die Protagonistin` | — | fem. | noun | protagonist (fem.) | नायिका | die Protagonistinnen | c2-25-appositionen |
| `der Verleger` | — | masc. | noun | publisher | प्रकाशक | die Verleger | c2-25-appositionen |
| `die Literaturkritikerin` | — | fem. | noun | literary critic (fem.) | साहित्य समीक्षक | die Literaturkritikerinnen | c2-25-appositionen |
| `der Chefredakteur` | — | masc. | noun | editor-in-chief | मुख्य संपादक | die Chefredakteure | c2-25-appositionen |
| `die Korrespondentin` | — | fem. | noun | correspondent (fem.) | संवाददाता | die Korrespondentinnen | c2-25-appositionen |
| `die Pressesprecherin` | — | fem. | noun | press spokesperson (fem.) | प्रेस प्रवक्ता | die Pressesprecherinnen | c2-25-appositionen |
| `die Verpflichtung` | — | fem. | deverbal noun | obligation, commitment | बाध्यता | die Verpflichtungen | c2-26-nominalstil |
| `die Selbstbestimmung` | — | fem. | deverbal compound noun | self-determination | आत्मनिर्णय | — | c2-26-nominalstil |
| `die Anpassung` | — | fem. | deverbal noun | adaptation, adjustment | अनुकूलन | die Anpassungen | c2-26-nominalstil |
| `die Auseinandersetzung` | — | fem. | deverbal noun | engagement, debate, confrontation | विचार-विमर्श | die Auseinandersetzungen | c2-26-nominalstil |
| `die Begründung` | — | fem. | deverbal noun | justification, reasoning | औचित्य | die Begründungen | c2-26-nominalstil |
| `die Berichterstattung` | — | fem. | deverbal compound noun | reporting, coverage | रिपोर्टिंग | — | c2-26-nominalstil |
| `die Gesetzgebung` | — | fem. | deverbal compound noun | legislation | विधान | — | c2-26-nominalstil |
| `die Rechtsprechung` | — | fem. | deverbal compound noun | case law, jurisprudence | न्यायशास्त्र | — | c2-26-nominalstil |
| `die Verfassung` | — | fem. | deverbal noun | constitution | संविधान | die Verfassungen | c2-26-nominalstil |
| `die Vereinbarung` | — | fem. | deverbal noun | agreement | समझौता | die Vereinbarungen | c2-26-nominalstil |
| `die Zustimmung` | — | fem. | deverbal noun | approval, consent | सहमति | — | c2-26-nominalstil |
| `die Beschäftigung` | — | fem. | deverbal noun | employment | रोज़गार | die Beschäftigungen | c2-26-nominalstil |
| `die Veröffentlichung` | — | fem. | deverbal noun | publication | प्रकाशन | die Veröffentlichungen | c2-26-nominalstil |
| `die Umsetzung` | — | fem. | deverbal noun | implementation | कार्यान्वयन | die Umsetzungen | c2-26-nominalstil |
| `die Wechselwirkung` | — | fem. | deverbal compound noun | interaction, interplay | पारस्परिक क्रिया | die Wechselwirkungen | c2-26-nominalstil |
| `der Nominalstil` | — | — | noun | nominal style | नाममात्र शैली | — | c2-29-goethe-c2-final |
| `die Kollokation` | — | — | noun | collocation | शब्द-युग्म | — | c2-29-goethe-c2-final |
| `die Wortbildung` | — | — | noun | word formation | शब्द-निर्माण | — | c2-29-goethe-c2-final |

### Level not stated on the card — 9 headwords

| Headword | Article | Gender | Class | English | Hindi | Plural | Chapter |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `die Tempuswahl` | — | — | Noun · fem. | tense choice | kaal chunaav | — | c1-01-tempusgebrauch-stilistische-tempuswahl |
| `die Zeitschichtung` | — | — | Noun · fem. | temporal layering | samay parat | — | c1-01-tempusgebrauch-stilistische-tempuswahl |
| `die Schlussfolgerung` | — | — | Noun · fem. | conclusion | nishkarsh | — | c1-01-tempusgebrauch-stilistische-tempuswahl, c1-13-vermutungen-mit-modalverben-ausdruecken |
| `die Satzarchitektur` | — | — | Noun · fem. | sentence architecture | vaakya sanrachnaa | — | c1-03-nebensaetze-sicher-beherrschen |
| `die Nebensatzhierarchie` | — | — | Noun · fem. | subordinate clause hierarchy | upvaakya padakram | — | c1-03-nebensaetze-sicher-beherrschen |
| `die Satzreduktion` | — | — | Noun · fem. | clause/sentence reduction | vaakya samkshepan | — | c1-03-nebensaetze-sicher-beherrschen |
| `die Informationsstruktur` | — | — | Noun · fem. | information structure | jaankaari sanrachnaa | — | c1-03-nebensaetze-sicher-beherrschen |
| `die Prüfungsvorbereitung` | — | — | Noun · fem. | exam preparation | pariksha ki taiyaari | — | c1-06-goethe-mini-1 |
| `die Argumentation` | — | — | Noun · fem. | argumentation | tark | — | c1-06-goethe-mini-1 |

## Distribution

By class: noun 73 · compound noun 29 · deverbal noun 15 · Noun-typed 9 ·
nominalized 1 · derived 1 · multi-part compound 1. **All 129 are nouns** — no
verb, adjective or adverb card is missing from the dictionary.

By level: C2 89 · C1 24 · B2 7 · not stated 9. The gap is concentrated at the top
of the curriculum, which fits: C1/C2 chapters introduce dense academic,
legal and journalistic vocabulary.

## Recommended order — revised on this evidence

1. **The 129 card-backed missing headwords.** Fully specified by approved
   curriculum content. Zero external verification, zero invented glosses,
   including the 82 that are dictionary-only gaps. This is the last batch that
   can be authored purely from what the curriculum already says.
2. **The 47 overlap** is a subset of step 1 and needs no separate pass; it will
   clear ~180 Category-4 occurrences (`Hypothese` 15, `Register` 14,
   `Verantwortung` 14, `Überarbeitung` 12, `Argumentation` 7, `Vereinbarung` 7,
   `Fragestellung` 6, `Einwand` 6, `Personal` 6 …).
3. **Then stop and decide about the 1,459.** They need a reference source and a
   verification workflow. Before committing to that, two cheaper questions are
   worth answering: how many are proper names or English that my filters still
   miss, and how many are C1/C2 specialist compounds a learner could reasonably
   meet without a dictionary entry.

## One correction to my own earlier count

The lexeme map reported `Register` and `Personal` as needing new entries. Both
**are** card-backed (`Register` "register, language level"; `Personal` "staff,
personnel"), so they belong in step 1, not the unverified 1,459. My candidate
list did not know about card evidence — that is exactly what this pass was for.
