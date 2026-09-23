/* KLARWEG CHAPTER DATA — C2 · Chapter 26
   "Nominalstil" — the defining register of academic, scientific, legal,
   administrative, and journalistic German: converting a verb-based clause
   (Verbstil) into a compressed, objective, information-dense noun phrase
   (Nominalstil). NOT basic -ung noun formation itself (Chapter 22) — the
   STYLISTIC CHOICE of when to nominalize a clause vs. keep it verbal.
   Vocabulary curated from the uploaded Chapter 26 -ung/deverbal noun list,
   each paired with its base verb, register, and two authentic C2 examples.
   Follows the Chapter 25 template exactly. Dialogue: Angelika and Timo only. */
const CHAPTER = {
  id: 'c2-26-nominalstil',
  phase: 'C2 · Kompression, Nominalstil & wissenschaftliche Präzision',
  number: 26,
  title: 'Nominalstil',
  titleEn: 'Nominal style',
  description: 'Verbstil is a video, showing every action step by step. Nominalstil is a high-resolution photograph, summarizing everything in one compact, objective image. Native German switches between both depending on the situation.',
  xp: 1850, time: 140, difficulty: 'Mastery',
  nextChapter: { number: 27, title: 'Kollokationen & Idiomatik', titleEn: 'Collocations and idiomatic usage' , href: 'chapter-c2-27-kollokationen-und-idiomatik.html' },
  prevChapter: { number: 25, title: 'Appositionen', titleEn: 'Appositions', href: 'chapter-c2-25-appositionen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Verbstil is a <em>video</em>. Nominalstil is a <em>photograph</em>.',
    intro: 'Preparing a research paper for publication, Angelika asks for more nominal style, and Timo turns "we investigate that" into "die Untersuchung des Themas" — trading the step-by-step video of Verbstil for the single compact photograph of Nominalstil.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'Decode dense academic writing instantly by recognizing a nominalized clause and its underlying verb'],
    scene: 'Überarbeitung eines Forschungspapiers vor der Veröffentlichung',
    femaleSpeakers: ['Angelika'],
    dialogue: [
      { speaker: 'Angelika', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Bericht', role: 'r-subject', en: 'report', hi: 'रिपोर्ट', pron: 'be-RIKHT', type: 'Noun · masc.' },
        { w: 'braucht', role: 'r-verb', en: 'needs', hi: 'ज़रूरत है', pron: 'BROWKHT', type: 'Verb · brauchen' },
        { w: 'mehr', role: 'r-akkusativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner' },
        { w: 'Nominalstil', role: 'r-akkusativ', en: 'nominal style', hi: 'संज्ञा शैली', pron: 'no-mi-NAHL-shteel', type: 'Noun · masc.', why: 'der Nominalstil = the nominal style, expressing actions through nouns rather than verbs, typical of formal writing (this chapter).', ex: 'Der Bericht braucht mehr Nominalstil.', exEn: 'The report needs more nominal style.' },
        { w: '.', plain: true }
      ], en: 'The report needs more nominal style.', hi: 'Report ko zyaada sangya shaili chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Statt', role: 'r-preposition', en: 'instead of', hi: 'के बजाय', pron: 'shtat', type: 'Preposition + genitive' },
        { w: '"wir', role: 'r-akkusativ', en: '"we', hi: 'हम', pron: 'veer', type: 'Pronoun (quoted phrase)' },
        { w: 'untersuchen', role: 'r-verb', en: 'investigate', hi: 'जांचते हैं', pron: 'un-ter-ZOO-khen', type: 'Verb · untersuchen (quoted)' },
        { w: 'das"', role: 'r-akkusativ', en: 'that"', hi: 'यह', pron: 'das', type: 'Pronoun (Satzende of quote)' },
        { w: 'schreibe', role: 'r-verb', en: 'shall I write', hi: 'लिखूं', pron: 'SHRY-buh', type: 'Verb · schreiben (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'besser', role: 'r-akkusativ', en: 'better', hi: 'बेहतर', pron: 'BE-ser', type: 'Adverb · Komparativ' },
        { w: '"die', role: 'r-akkusativ', en: '"the (fem.)', hi: 'यह', pron: 'dee', type: 'Article (quoted phrase)' },
        { w: 'Untersuchung', role: 'r-akkusativ', en: 'investigation', hi: 'जांच', pron: 'un-ter-ZOO-khung', type: 'Noun · fem.', why: 'die Untersuchung (this chapter, Nominalisierung von untersuchen).', ex: 'die Untersuchung des Themas' },
        { w: 'des', role: 'r-dativ', en: 'the (neut. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Themas"', role: 'r-dativ', en: 'topic (gen.)"', hi: 'विषय के', pron: 'TAY-mas', type: 'Noun · neut. genitive (Satzende of quote)' },
        { w: '?', plain: true }
      ], en: 'Instead of "we investigate that" shall I better write "the investigation of the topic"?', hi: '"Hum yeh jaanchte hain" ke bajaay, kya main behtar "vishay ki jaanch" likhoon?' },
      { speaker: 'Angelika', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Auch', role: 'r-akkusativ', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Darstellung', role: 'r-akkusativ', en: 'presentation', hi: 'प्रस्तुति', pron: 'DAHR-shte-lung', type: 'Noun · fem.', why: 'die Darstellung (this chapter, Nominalisierung von darstellen).', ex: 'die Darstellung der Ergebnisse' },
        { w: 'der', role: 'r-dativ', en: 'the (pl. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Ergebnisse', role: 'r-dativ', en: 'results (gen.)', hi: 'परिणामों के', pron: 'er-GAYP-ni-suh', type: 'Noun · plural genitive' },
        { w: 'sollte', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-tuh', type: 'Modal · sollen (Konjunktiv II)' },
        { w: 'klarer', role: 'r-akkusativ', en: 'clearer', hi: 'ज़्यादा स्पष्ट', pron: 'KLAH-rer', type: 'Adjective · Komparativ' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होनी', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Exactly. Also the presentation of the results should be clearer.', hi: 'Bilkul. Parinaamon ki prastuti bhi zyaada spasht honi chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Umsetzung', role: 'r-subject', en: 'implementation', hi: 'कार्यान्वयन', pron: 'UM-zet-sung', type: 'Noun · fem.', why: 'die Umsetzung (this chapter, Nominalisierung von umsetzen).', ex: 'die Umsetzung der Reform' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Reform', role: 'r-dativ', en: 'reform (gen.)', hi: 'सुधार के', pron: 're-FORM', type: 'Noun · fem. genitive' },
        { w: 'braucht', role: 'r-verb', en: 'needs', hi: 'ज़रूरत है', pron: 'BROWKHT', type: 'Verb · brauchen' },
        { w: 'ebenfalls', role: 'r-akkusativ', en: 'likewise', hi: 'साथ ही', pron: 'AY-ben-fals', type: 'Adverb' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'klaren', role: 'r-akkusativ', en: 'clear', hi: 'स्पष्ट', pron: 'KLAH-ren', type: 'Adjective' },
        { w: 'Abschnitt', role: 'r-akkusativ', en: 'section', hi: 'अनुभाग', pron: 'AP-shnit', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'The implementation of the reform likewise needs a clear section.', hi: 'Sudhaar ke kaaryaanvayan ko bhi ek spasht anubhaag chahiye.' },
      { speaker: 'Angelika', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'überarbeite', role: 'r-verb', en: 'revise', hi: 'दोबारा करती हूँ', pron: 'ü-ber-AR-by-tuh', type: 'Verb · überarbeiten (ich, recycled C1)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'gesamten', role: 'r-akkusativ', en: 'entire', hi: 'संपूर्ण', pron: 'ge-ZAM-ten', type: 'Adjective' },
        { w: 'Bericht', role: 'r-akkusativ', en: 'report', hi: 'रिपोर्ट', pron: 'be-RIKHT', type: 'Noun · masc.' },
        { w: 'noch', role: 'r-akkusativ', en: 'once more', hi: 'एक बार और', pron: 'nokh', type: 'Adverb' },
        { w: 'einmal', role: 'r-akkusativ', en: 'once', hi: 'एक बार', pron: 'INE-mahl', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Good, then I will revise the entire report once more.', hi: 'Achha, toh main poori report ek baar aur dobara karti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Bevölkerung', role: 'r-subject', en: 'population', hi: 'जनसंख्या', pron: 'be-FÖL-ke-rung', type: 'Noun · fem.', why: 'die Bevölkerung (this chapter, Nominalisierung von bevölkern).', ex: 'die Bevölkerung informieren' },
        { w: 'wird', role: 'r-verb', en: 'will', hi: 'होगी', pron: 'virt', type: 'Verb · werden' },
        { w: 'davon', role: 'r-akkusativ', en: 'from that', hi: 'इससे', pron: 'da-FON', type: 'Adverb' },
        { w: 'profitieren', role: 'r-verb', en: 'benefit', hi: 'लाभ उठाना', pron: 'pro-fi-TEE-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Thanks! The population will benefit from that.', hi: 'Dhanyavaad! Jansankhya ise se laabh uthaayegi.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Verbstil is a <span class="de r-fotograf-metapher">video</span> — step by step. Nominalstil is a <span class="de r-fotograf-metapher">photograph</span> — the whole concept, compressed into one compact, objective noun phrase.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is NOMINALSTIL — the stylistic CHOICE between Verbstil (a verb-based clause, e.g. "weil die Firma sich anpasst") and Nominalstil (a compressed, objective noun phrase, e.g. "aufgrund der Anpassung des Unternehmens"). NOT basic -ung/nominal noun formation itself (already mastered in Chapter 22, Wortbildung der Nomen) — specifically WHEN and WHY native speakers nominalize a clause, and when they deliberately keep it verbal. Covered: the pipeline Verb → Nominalization → Information Compression → Objective Style → Professional German; nominalization strategies (verb + -ung/-heit/-keit/-tion, deriving abstract nouns like Forschung, Untersuchung, Digitalisierung, Entwicklung, Verpflichtung, Bewertung); register usage across university/academic writing, scientific writing, legal German, administrative German, government documents, and journalism; and the risk of OVERUSING Nominalstil — excessively long noun chains ("die Durchführung der Überprüfung der Einhaltung der Vorschriften"), awkward calques from English, wrong register (Nominalstil in casual conversation sounds stiff and unnatural). The most important things to catch: unnecessary nominalization where a plain verb would read more naturally; noun chains that have become too long or ambiguous; incorrect register (mixing conversational Verbstil into a formal report, or overusing Nominalstil in spoken dialogue); genitive/preposition errors around the nominalized noun. Answer ONLY questions about this chapter\'s Nominalstil vs. Verbstil choice; if asked about something else, gently redirect to Nominalstil. Keep answers short, concrete, example-driven. Mix in Hindi/Hinglish naturally, like a bilingual tutor would.',
  quizRecommendation: { high: 'Outstanding — you switch between video and photograph exactly when each is needed. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Information Density Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: Verbstil is the video, Nominalstil is the photograph, and the choice between them is a deliberate register decision.' },
  parserSentence: [ { w: 'Die', role: 'plain' }, { w: 'Anpassung', role: 'r-fotograf-metapher' }, { w: 'des', role: 'plain' }, { w: 'Unternehmens', role: 'plain' }, { w: 'überzeugt', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: Verbstil is a video, Nominalstil is a photograph — and native German chooses deliberately between them.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Angelika and Timo replace conversational Verbstil with concise Nominalstil to prepare a paper for publication.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Master authentic deverbal nouns across university, research, administration, law, business, government, and journalism.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master when to choose Nominalstil over Verbstil, nominalization strategies, information density, and register.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze a university research article for Nominalstil, information density, and abstraction.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify Nominalstil, professional language, and formal register in a research presentation.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice explaining Nominalstil, comparing Verbstil and Nominalstil, and presenting research at C2 level.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Transform Verbstil into Nominalstil, edit an academic article, and write a 600-word essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill Verbstil↔Nominalstil transformation, information compression, and register selection.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1850 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter deverbal nouns with base verb, register, translations, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '18 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Verbstil↔Nominalstil transformation and information compression drills, plus the full 600-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '22 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Information Density Model, and Decision Flow.', pdfUrl: '/pdfs/grammar.pdf', size: '18 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'aufgrund der Anpassung des Unternehmens', text: 'Convert a conversational verb clause into compressed, objective Nominalstil' },
    { de: 'die Forschung, die Untersuchung, die Bewertung', text: 'Recognize and use authentic academic and scientific deverbal nouns' },
    { de: 'die Gesetzgebung, die Rechtsprechung, die Verwaltung', text: 'Use authentic legal and administrative Nominalstil vocabulary' },
    { de: 'die Berichterstattung, die Veröffentlichung', text: 'Use authentic journalistic Nominalstil with correct register' },
    { de: 'Ein Video, ein Foto.', text: 'Understand the chapter\'s core "photographer" metaphor: Verbstil vs. Nominalstil' }
  ],
  vocab: [
    { de: 'die Verantwortung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Verantwortungen', level: 'C2', register: 'legal/general', root: 'verantworten', en: 'responsibility', hi: 'ज़िम्मेदारी', synonyms: null, antonyms: null, ex: 'Die Verantwortung für den Fehler liegt beim Vorstand.', exEn: 'Responsibility for the error lies with the board.', exHi: 'Error ki responsibility board par hai.', ex2: 'Aufgrund ihrer Verantwortung musste sie den Bericht unterschreiben.', ex2En: 'Due to her responsibility, she had to sign the report.', ex2Hi: 'Apni responsibility ki wajah se, usse report par sign karna pada.', why: 'Nominalstil: "aufgrund ihrer Verantwortung" replaces the Verbstil clause "weil sie verantwortlich war" with one compact prepositional phrase.' },
    { de: 'die Forschung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Forschungen', level: 'C2', register: 'academic', root: 'forschen', en: 'research', hi: 'शोध', synonyms: null, antonyms: null, ex: 'Die Forschung zu diesem Thema steht noch am Anfang.', exEn: 'Research on this topic is still in its early stages.', exHi: 'Is topic par research abhi shuruaati daur mein hai.', ex2: 'Durch intensive Forschung konnten neue Zusammenhänge belegt werden.', ex2En: 'Through intensive research, new connections could be demonstrated.', ex2Hi: 'Intensive research ke through, naye connections prove kiye gaye.' },
    { de: 'die Untersuchung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Untersuchungen', level: 'C2', register: 'scientific/legal', root: 'untersuchen', en: 'investigation, examination', hi: 'जांच', synonyms: null, antonyms: null, ex: 'Die Untersuchung ergab keine Auffälligkeiten.', exEn: 'The examination revealed no abnormalities.', exHi: 'Examination mein koi abnormality nahi mili.', ex2: 'Nach Abschluss der Untersuchung wird ein Bericht veröffentlicht.', ex2En: 'After the investigation is concluded, a report will be published.', ex2Hi: 'Investigation complete hone ke baad, ek report publish ki jaayegi.' },
    { de: 'die Digitalisierung', pos: 'deverbal noun', gender: 'fem.', plural: null, level: 'C2', register: 'administrative/business', root: 'digitalisieren', en: 'digitization', hi: 'डिजिटलीकरण', synonyms: null, antonyms: null, ex: 'Die Digitalisierung der Verwaltung schreitet nur langsam voran.', exEn: 'The digitization of the administration is only progressing slowly.', exHi: 'Administration ka digitization sirf dheere aage badh raha hai.', ex2: 'Durch die Digitalisierung wurden viele Prozesse beschleunigt.', ex2En: 'Through digitization, many processes were sped up.', ex2Hi: 'Digitization ke through, kai processes tez kiye gaye.' },
    { de: 'die Entwicklung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Entwicklungen', level: 'C2', register: 'academic/business', root: 'entwickeln', en: 'development', hi: 'विकास', synonyms: null, antonyms: null, ex: 'Die Entwicklung neuer Technologien verändert den Markt.', exEn: 'The development of new technologies is changing the market.', exHi: 'Nayi technologies ka development market ko badal raha hai.', ex2: 'Trotz positiver Entwicklung bleiben Risiken bestehen.', ex2En: 'Despite positive development, risks remain.', ex2Hi: 'Positive development ke bawajood, risks bane rehte hain.' },
    { de: 'die Verpflichtung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Verpflichtungen', level: 'C2', register: 'legal/business', root: 'verpflichten', en: 'obligation, commitment', hi: 'बाध्यता', synonyms: null, antonyms: null, ex: 'Die vertragliche Verpflichtung wurde fristgerecht erfüllt.', exEn: 'The contractual obligation was fulfilled on time.', exHi: 'Contractual obligation samay par poora kiya gaya.', ex2: 'Angesichts dieser Verpflichtung musste das Unternehmen umdisponieren.', ex2En: 'Given this obligation, the company had to reorganize.', ex2Hi: 'Is obligation ko dekhte hue, company ko reorganize karna pada.' },
    { de: 'die Wahrnehmung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Wahrnehmungen', level: 'C2', register: 'academic (psychology/general)', root: 'wahrnehmen', en: 'perception', hi: 'बोध', synonyms: null, antonyms: null, ex: 'Die öffentliche Wahrnehmung des Themas hat sich verändert.', exEn: 'The public perception of the topic has changed.', exHi: 'Topic ki public perception badal chuki hai.', ex2: 'Ihre Wahrnehmung der Ereignisse unterscheidet sich stark von seiner.', ex2En: 'Her perception of the events differs strongly from his.', ex2Hi: 'Events ke baare mein uski perception uske se kaafi alag hai.' },
    { de: 'die Schlussfolgerung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Schlussfolgerungen', level: 'C2', register: 'academic', root: 'schlussfolgern', en: 'conclusion, inference', hi: 'निष्कर्ष', synonyms: 'die Folgerung', antonyms: null, ex: 'Die Schlussfolgerung der Studie überrascht viele Experten.', exEn: 'The study\'s conclusion surprises many experts.', exHi: 'Study ka conclusion kai experts ko hairaan karta hai.', ex2: 'Aus den Daten lässt sich diese Schlussfolgerung eindeutig ziehen.', ex2En: 'This conclusion can clearly be drawn from the data.', ex2Hi: 'Data se yeh conclusion saaf taur par nikala ja sakta hai.' },
    { de: 'die Selbstbestimmung', pos: 'deverbal compound noun', gender: 'fem.', plural: null, level: 'C2', register: 'political/legal', root: 'sich selbst bestimmen', en: 'self-determination', hi: 'आत्मनिर्णय', synonyms: null, antonyms: 'die Fremdbestimmung', ex: 'Das Recht auf Selbstbestimmung ist grundgesetzlich verankert.', exEn: 'The right to self-determination is enshrined in the constitution.', exHi: 'Self-determination ka adhikaar constitution mein enshrined hai.', ex2: 'Individuelle Selbstbestimmung steht im Zentrum dieser Debatte.', ex2En: 'Individual self-determination is at the center of this debate.', ex2Hi: 'Individual self-determination is debate ke center mein hai.' },
    { de: 'die Anpassung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Anpassungen', level: 'C2', register: 'scientific/business', root: 'anpassen', en: 'adaptation, adjustment', hi: 'अनुकूलन', synonyms: null, antonyms: null, ex: 'Die Anpassung des Unternehmens an neue Marktbedingungen war notwendig.', exEn: 'The company\'s adaptation to new market conditions was necessary.', exHi: 'Nayi market conditions ke liye company ka adaptation zaroori tha.', ex2: 'Aufgrund der Anpassung stieg die Effizienz deutlich.', ex2En: 'Due to the adaptation, efficiency rose significantly.', ex2Hi: 'Adaptation ki wajah se, efficiency kaafi badh gayi.' },
    { de: 'die Auseinandersetzung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Auseinandersetzungen', level: 'C2', register: 'academic/journalism', root: 'sich auseinandersetzen', en: 'engagement, debate, confrontation', hi: 'विचार-विमर्श', synonyms: null, antonyms: null, ex: 'Die kritische Auseinandersetzung mit der These bleibt notwendig.', exEn: 'Critical engagement with the thesis remains necessary.', exHi: 'Thesis se critical engagement zaroori bana hua hai.', ex2: 'Die öffentliche Auseinandersetzung um das Gesetz spitzte sich zu.', ex2En: 'The public debate over the law intensified.', ex2Hi: 'Law ko lekar public debate aur tez ho gayi.' },
    { de: 'die Begründung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Begründungen', level: 'C2', register: 'legal/academic', root: 'begründen', en: 'justification, reasoning', hi: 'औचित्य', synonyms: null, antonyms: null, ex: 'Die Begründung des Urteils umfasst mehrere Seiten.', exEn: 'The reasoning behind the verdict spans several pages.', exHi: 'Verdict ka reasoning kai pages mein phaila hua hai.', ex2: 'Ohne triftige Begründung wurde der Antrag abgelehnt.', ex2En: 'Without valid justification, the application was rejected.', ex2Hi: 'Valid justification ke bina, application reject kar di gayi.' },
    { de: 'die Berichterstattung', pos: 'deverbal compound noun', gender: 'fem.', plural: null, level: 'C2', register: 'journalism', root: 'berichten', en: 'reporting, coverage', hi: 'रिपोर्टिंग', synonyms: null, antonyms: null, ex: 'Die mediale Berichterstattung über den Vorfall war intensiv.', exEn: 'Media coverage of the incident was intense.', exHi: 'Incident ki media coverage intense thi.', ex2: 'Kritiker bemängeln die einseitige Berichterstattung.', ex2En: 'Critics criticize the one-sided reporting.', ex2Hi: 'Critics one-sided reporting ki aalochana karte hain.' },
    { de: 'die Bewertung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Bewertungen', level: 'C2', register: 'academic/business', root: 'bewerten', en: 'assessment, evaluation', hi: 'मूल्यांकन', synonyms: null, antonyms: null, ex: 'Die Bewertung der Ergebnisse erfolgt nach klaren Kriterien.', exEn: 'The evaluation of the results is carried out according to clear criteria.', exHi: 'Results ka evaluation clear criteria ke anusaar hota hai.', ex2: 'Nach eingehender Bewertung wurde das Projekt genehmigt.', ex2En: 'After thorough evaluation, the project was approved.', ex2Hi: 'Thorough evaluation ke baad, project approve kiya gaya.' },
    { de: 'die Darstellung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Darstellungen', level: 'C2', register: 'academic', root: 'darstellen', en: 'depiction, presentation, account', hi: 'प्रस्तुति', synonyms: null, antonyms: null, ex: 'Die Darstellung der Ereignisse weicht in beiden Quellen voneinander ab.', exEn: 'The account of the events differs between the two sources.', exHi: 'Events ka account dono sources ke beech alag hai.', ex2: 'Eine differenzierte Darstellung berücksichtigt mehrere Perspektiven.', ex2En: 'A nuanced presentation takes several perspectives into account.', ex2Hi: 'Ek nuanced presentation kai perspectives ko dhyaan mein rakhta hai.' },
    { de: 'die Führung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Führungen', level: 'C2', register: 'business/government', root: 'führen', en: 'leadership, management', hi: 'नेतृत्व', synonyms: null, antonyms: null, ex: 'Die Führung des Unternehmens wechselt zum Jahresende.', exEn: 'The company\'s leadership changes at the end of the year.', exHi: 'Company ki leadership saal ke ant mein badalti hai.', ex2: 'Unter neuer Führung wurden zahlreiche Reformen eingeleitet.', ex2En: 'Under new leadership, numerous reforms were initiated.', ex2Hi: 'Nayi leadership ke under, kai reforms shuru kiye gaye.' },
    { de: 'die Globalisierung', pos: 'deverbal noun', gender: 'fem.', plural: null, level: 'C2', register: 'economic/political', root: 'globalisieren', en: 'globalization', hi: 'वैश्वीकरण', synonyms: null, antonyms: null, ex: 'Die Globalisierung hat regionale Märkte grundlegend verändert.', exEn: 'Globalization has fundamentally changed regional markets.', exHi: 'Globalization ne regional markets ko fundamentally badal diya hai.', ex2: 'Kritiker sehen in der Globalisierung auch soziale Risiken.', ex2En: 'Critics also see social risks in globalization.', ex2Hi: 'Critics globalization mein social risks bhi dekhte hain.' },
    { de: 'die Gesetzgebung', pos: 'deverbal compound noun', gender: 'fem.', plural: null, level: 'C2', register: 'legal/political', root: 'Gesetze geben', en: 'legislation', hi: 'विधान', synonyms: null, antonyms: null, ex: 'Die neue Gesetzgebung tritt im kommenden Jahr in Kraft.', exEn: 'The new legislation takes effect next year.', exHi: 'Nayi legislation agle saal effect mein aayegi.', ex2: 'Die Gesetzgebung zum Datenschutz gilt als besonders streng.', ex2En: 'Legislation on data protection is considered particularly strict.', ex2Hi: 'Data protection ki legislation particularly strict maani jaati hai.' },
    { de: 'die Rechtsprechung', pos: 'deverbal compound noun', gender: 'fem.', plural: null, level: 'C2', register: 'legal', root: 'Recht sprechen', en: 'case law, jurisprudence', hi: 'न्यायशास्त्र', synonyms: null, antonyms: null, ex: 'Die höchstrichterliche Rechtsprechung hat diese Frage bereits geklärt.', exEn: 'The supreme court\'s case law has already clarified this question.', exHi: 'Supreme court ki case law is sawaal ko pehle hi clarify kar chuki hai.', ex2: 'Die aktuelle Rechtsprechung stützt die Position der Klägerin.', ex2En: 'Current case law supports the plaintiff\'s position.', ex2Hi: 'Current case law plaintiff ki position ko support karti hai.' },
    { de: 'die Regierung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Regierungen', level: 'C2', register: 'political', root: 'regieren', en: 'government', hi: 'सरकार', synonyms: null, antonyms: null, ex: 'Die Regierung kündigte weitere Reformen an.', exEn: 'The government announced further reforms.', exHi: 'Government ne aur reforms announce kiye.', ex2: 'Unter der aktuellen Regierung sank die Arbeitslosigkeit.', ex2En: 'Under the current government, unemployment fell.', ex2Hi: 'Current government ke under, unemployment kam hui.' },
    { de: 'die Verwaltung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Verwaltungen', level: 'C2', register: 'administrative', root: 'verwalten', en: 'administration', hi: 'प्रशासन', synonyms: null, antonyms: null, ex: 'Die Verwaltung bearbeitet Anträge innerhalb von vier Wochen.', exEn: 'The administration processes applications within four weeks.', exHi: 'Administration char hafton ke andar applications process karta hai.', ex2: 'Eine effiziente Verwaltung ist Grundlage guten Regierens.', ex2En: 'Efficient administration is the foundation of good governance.', ex2Hi: 'Efficient administration good governance ka foundation hai.' },
    { de: 'die Verfassung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Verfassungen', level: 'C2', register: 'legal/political', root: 'verfassen', en: 'constitution', hi: 'संविधान', synonyms: null, antonyms: null, ex: 'Die Verfassung garantiert die Freiheit der Forschung.', exEn: 'The constitution guarantees the freedom of research.', exHi: 'Constitution research ki freedom guarantee karta hai.', ex2: 'Eine Änderung der Verfassung erfordert eine Zweidrittelmehrheit.', ex2En: 'A change to the constitution requires a two-thirds majority.', ex2Hi: 'Constitution mein change ke liye two-thirds majority chahiye.' },
    { de: 'die Vereinbarung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Vereinbarungen', level: 'C2', register: 'business/legal', root: 'vereinbaren', en: 'agreement', hi: 'समझौता', synonyms: null, antonyms: null, ex: 'Die Vereinbarung wurde von beiden Parteien unterzeichnet.', exEn: 'The agreement was signed by both parties.', exHi: 'Agreement dono parties ne sign kiya.', ex2: 'Gemäß der Vereinbarung liefert der Hersteller innerhalb von zehn Tagen.', ex2En: 'According to the agreement, the manufacturer delivers within ten days.', ex2Hi: 'Agreement ke anusaar, manufacturer das din ke andar deliver karta hai.' },
    { de: 'die Zustimmung', pos: 'deverbal noun', gender: 'fem.', plural: null, level: 'C2', register: 'administrative/legal', root: 'zustimmen', en: 'approval, consent', hi: 'सहमति', synonyms: null, antonyms: 'die Ablehnung', ex: 'Ohne Zustimmung des Ausschusses kann das Projekt nicht beginnen.', exEn: 'Without the committee\'s approval, the project cannot begin.', exHi: 'Committee ki approval ke bina, project shuru nahi ho sakta.', ex2: 'Die Zustimmung erfolgte einstimmig.', ex2En: 'The approval was unanimous.', ex2Hi: 'Approval unanimous roop se hui.' },
    { de: 'die Gleichberechtigung', pos: 'deverbal compound noun', gender: 'fem.', plural: null, level: 'C2', register: 'political/legal', root: 'gleichberechtigen (rare, "to give equal rights")', en: 'equal rights, equality', hi: 'समान अधिकार', synonyms: null, antonyms: null, ex: 'Die Gleichberechtigung von Mann und Frau ist verfassungsrechtlich garantiert.', exEn: 'Equal rights for men and women are constitutionally guaranteed.', exHi: 'Man aur woman ke equal rights constitutionally guaranteed hain.', ex2: 'Trotz rechtlicher Gleichberechtigung bestehen weiterhin Lohnunterschiede.', ex2En: 'Despite legal equality, wage differences still persist.', ex2Hi: 'Legal equality ke bawajood, wage differences abhi bhi bane hue hain.' },
    { de: 'die Diskriminierung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Diskriminierungen', level: 'C2', register: 'political/legal', root: 'diskriminieren', en: 'discrimination', hi: 'भेदभाव', synonyms: null, antonyms: null, ex: 'Diskriminierung am Arbeitsplatz ist gesetzlich verboten.', exEn: 'Discrimination in the workplace is legally prohibited.', exHi: 'Workplace mein discrimination legally prohibited hai.', ex2: 'Der Bericht dokumentiert Fälle struktureller Diskriminierung.', ex2En: 'The report documents cases of structural discrimination.', ex2Hi: 'Report structural discrimination ke cases document karti hai.' },
    { de: 'die Beschäftigung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Beschäftigungen', level: 'C2', register: 'business/economic', root: 'beschäftigen', en: 'employment', hi: 'रोज़गार', synonyms: null, antonyms: null, ex: 'Die Beschäftigung im Technologiesektor wächst stetig.', exEn: 'Employment in the technology sector is growing steadily.', exHi: 'Technology sector mein employment lagataar badh rahi hai.', ex2: 'Eine sichere Beschäftigung bleibt für viele das wichtigste Ziel.', ex2En: 'Secure employment remains the most important goal for many.', ex2Hi: 'Secure employment kai logon ke liye sabse important goal bana hua hai.' },
    { de: 'die Bevölkerung', pos: 'deverbal noun', gender: 'fem.', plural: null, level: 'C2', register: 'academic/political', root: 'bevölkern', en: 'population', hi: 'जनसंख्या', synonyms: null, antonyms: null, ex: 'Ein Großteil der Bevölkerung befürwortet die Reform.', exEn: 'A large part of the population supports the reform.', exHi: 'Population ka bada hissa reform ko support karta hai.', ex2: 'Die alternde Bevölkerung stellt das Gesundheitssystem vor Herausforderungen.', ex2En: 'The aging population poses challenges for the healthcare system.', ex2Hi: 'Aging population healthcare system ke liye challenges khadi karti hai.' },
    { de: 'die Veröffentlichung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Veröffentlichungen', level: 'C2', register: 'academic/journalism', root: 'veröffentlichen', en: 'publication', hi: 'प्रकाशन', synonyms: null, antonyms: null, ex: 'Die Veröffentlichung der Studie löste eine breite Debatte aus.', exEn: 'The publication of the study triggered a broad debate.', exHi: 'Study ki publication ne ek wide debate shuru ki.', ex2: 'Vor der Veröffentlichung durchläuft jeder Artikel ein Gutachterverfahren.', ex2En: 'Before publication, every article goes through a review process.', ex2Hi: 'Publication se pehle, har article ek review process se guzarta hai.' },
    { de: 'die Voraussetzung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Voraussetzungen', level: 'C2', register: 'academic/legal', root: 'voraussetzen', en: 'prerequisite, precondition', hi: 'पूर्वापेक्षा', synonyms: null, antonyms: null, ex: 'Eine gute Ausbildung ist die Voraussetzung für diesen Beruf.', exEn: 'A good education is the prerequisite for this profession.', exHi: 'Ek acchi education is profession ke liye prerequisite hai.', ex2: 'Die rechtlichen Voraussetzungen wurden vollständig erfüllt.', ex2En: 'The legal preconditions were fully met.', ex2Hi: 'Legal preconditions poori tarah se poori ki gayi.' },
    { de: 'die Umsetzung', pos: 'deverbal noun', gender: 'fem.', plural: 'die Umsetzungen', level: 'C2', register: 'administrative/business', root: 'umsetzen', en: 'implementation', hi: 'कार्यान्वयन', synonyms: null, antonyms: null, ex: 'Die Umsetzung der neuen Richtlinie beginnt im nächsten Quartal.', exEn: 'The implementation of the new directive begins next quarter.', exHi: 'Nayi directive ka implementation agle quarter mein shuru hoga.', ex2: 'Eine zügige Umsetzung ist für den Erfolg des Projekts entscheidend.', ex2En: 'Swift implementation is crucial for the project\'s success.', ex2Hi: 'Swift implementation project ki success ke liye zaroori hai.' },
    { de: 'die Wechselwirkung', pos: 'deverbal compound noun', gender: 'fem.', plural: 'die Wechselwirkungen', level: 'C2', register: 'scientific', root: 'wechselwirken', en: 'interaction, interplay', hi: 'पारस्परिक क्रिया', synonyms: null, antonyms: null, ex: 'Die Wechselwirkung zwischen den beiden Molekülen wurde genau analysiert.', exEn: 'The interaction between the two molecules was analyzed in detail.', exHi: 'Dono molecules ke beech interaction ko detail mein analyze kiya gaya.', ex2: 'Eine unerwartete Wechselwirkung beeinflusste das Messergebnis.', ex2En: 'An unexpected interaction influenced the measurement result.', ex2Hi: 'Ek unexpected interaction ne measurement result ko prabhaavit kiya.' }
  ],
  grammar: [
    { title: 'Was ist Nominalstil? (What Is Nominalstil?)', body: [ 'Verb → Nominalization → Information Compression → Objective Style → Professional German. Nominalstil converts a verb-based clause into a compact noun phrase, usually governed by a preposition (aufgrund, durch, nach, infolge, trotz) or a genitive construction.' ], hinglish: 'Nominalstil ek poore clause ko ek compact noun phrase mein badal deta hai \u2014 aksar kisi preposition ya Genitiv ke saath. Isse text formal aur objective lagta hai, kyunki karne wala aur tense dono gayab ho jaate hain. Par ek mechanical baat saath aati hai: har preposition apna case laata hai, aur wahi sabse zyada galat hota hai.' },
    { title: 'Verbstil vs. Nominalstil', body: [ 'Verbstil: "Weil die Firma sich anpasst, steigt der Gewinn." (video — step by step, causal clause). Nominalstil: "Aufgrund der Anpassung des Unternehmens steigt der Gewinn." (photograph — one compressed noun phrase). Both are grammatically correct; the choice is entirely stylistic and register-driven.' ], hinglish: 'Farak samajhne ke liye dono ko saath dekho. <span class="de">Weil die Firma sich anpasst, steigt der Gewinn</span> \u2014 yahan kaam step by step dikh raha hai, aur karne wala saamne hai. Aur <span class="de">Aufgrund der Anpassung des Unternehmens steigt der Gewinn</span> \u2014 yahan sab kuch ek noun phrase mein sim gaya. Dono sahi hain; farak sirf register ka hai, galti-sahi ka nahi.' },
    { title: 'Nominalisierungsstrategien (Nominalization Strategies)', body: [ 'Common patterns: verb + -ung (untersuchen → Untersuchung), verb + -heit/-keit (rare for verbs, more common for adjectives), loanword + -ion/-tion (evaluieren → Evaluation), and compound deverbal nouns (Recht sprechen → Rechtsprechung; Gesetze geben → Gesetzgebung). Each strategy converts an action into a "thing" that can be modified, quantified, and embedded in a dense noun phrase.' ], hinglish: 'Teen tareeke hain. Verb par <b>-ung</b> lagao (<i>untersuchen</i> se <b>Untersuchung</b>), loanword par <b>-ion</b> (<i>evaluieren</i> se <b>Evaluation</b>), ya compound banao (<i>Gesetze geben</i> se <b>Gesetzgebung</b>). Achhi baat yeh hai ki yeh saare noun <b>die</b> lete hain, isliye gender sochna nahi padta \u2014 aur Genitiv mein unka article <b>der</b> ho jaata hai.' },
    { title: 'Informationsdichte und Objektivität (Information Density & Objectivity)', body: [ 'Nominalstil removes the subject and tense of a clause, producing an objective, agent-neutral statement well suited to academic and legal writing: "die Untersuchung ergab..." foregrounds the finding, not who investigated or when.' ], hinglish: 'Nominalstil clause ka subject aur tense hata deta hai, isliye baat objective lagti hai \u2014 focus kaam par chala jaata hai, karne wale par nahi. Academic aur legal writing mein yahi chahiye hota hai. Par isi wajah se ek khatra bhi hai: kabhi zimmedaari chhup jaati hai, aur tab <b>von</b> + Dativ se karne wale ka naam wapas laana padta hai.' },
    { title: 'Register-Verwendung (Register Usage)', body: [ 'Academic/scientific: Forschung, Untersuchung, Bewertung, Wechselwirkung. Legal: Gesetzgebung, Rechtsprechung, Verpflichtung, Zustimmung. Administrative: Verwaltung, Umsetzung, Digitalisierung. Journalism: Berichterstattung, Veröffentlichung, Auseinandersetzung. Government/political: Regierung, Gesetzgebung, Gleichberechtigung. Business: Führung, Beschäftigung, Vereinbarung.' ], hinglish: 'Har register ke apne deverbal nouns hain \u2014 academic mein <b>Untersuchung</b>, <b>Bewertung</b>; legal mein <b>Gesetzgebung</b>, <b>Rechtsprechung</b>, <b>Verpflichtung</b>; administrative mein <b>Umsetzung</b>, <b>Digitalisierung</b>; aur news mein <b>Berichterstattung</b>, <b>Ver\u00f6ffentlichung</b>. Dhyaan do ki inme se lagbhag sab <b>-ung</b> par khatam hote hain, isliye sab feminine hain.' },
    {
      title: 'Pr\u00e4position und Kasus im Nominalstil',
      body: [
        'The chapter names the Nominalstil prepositions but never their cases \u2014 and that is exactly what the exercises test. Each one brings its own case, and the ending has to follow.',
        'One further point that removes most gender doubt: every <b>-ung</b>, <b>-heit</b>, <b>-keit</b> and <b>-ion</b> noun is feminine, so its Genitiv article is <b>der</b>.'
      ],
      table: {
        head: ['Preposition', 'Case', 'Example'],
        rows: [
          ['aufgrund, infolge, trotz, w\u00e4hrend', '<b>Genitiv</b>', '<span class="de">aufgrund <b>der</b> Anpassung</span>'],
          ['durch', '<b>Akkusativ</b>', '<span class="de">durch <b>die</b> Digitalisierung</span>'],
          ['nach, bei, mit, von, zu', '<b>Dativ</b>', '<span class="de">nach <b>der</b> Umsetzung</span>'],
          ['genitive attribute', '<b>Genitiv</b>', '<span class="de">die Untersuchung <b>des</b> Verfahren<b>s</b></span>'],
          ['naming the agent', '<b>von</b> + Dativ', '<span class="de">die <b>vom</b> Ministerium durchgef\u00fchrte Untersuchung</span>'],
          ['-ung / -heit / -keit / -ion', 'always <b>die</b> \u2192 Gen. <b>der</b>', '<span class="de">infolge <b>der</b> Umsetzung</span>']
        ]
      },
      note: 'Watch the genitive ambiguity: <i>die Untersuchung des Ministeriums</i> can mean the ministry investigated OR was investigated. When responsibility matters, switch to <b>von</b> + Dativ or back to Verbstil.',
      hinglish: 'Chapter Nominalstil ke prepositions ka naam leta hai par unke case nahi batata \u2014 aur exercises wahi test karti hain. Har preposition apna case laata hai: <b>aufgrund</b>, <b>infolge</b>, <b>trotz</b> aur <b>w\u00e4hrend</b> Genitiv lete hain, <b>durch</b> Akkusativ, aur <b>nach</b>, <b>bei</b>, <b>von</b>, <b>zu</b> Dativ. Isliye <span class="de">aufgrund <b>der</b> Anpassung</span> par <span class="de">durch <b>die</b> Digitalisierung</span>. Ek baat gender ka shak khatam kar deti hai \u2014 <b>-ung</b>, <b>-heit</b>, <b>-keit</b> aur <b>-ion</b> wale saare nouns feminine hote hain, isliye unka Genitiv article <b>der</b> hota hai, <i>des</i> nahi. Aur ek aakhri baat: Genitiv se matlab dhundhla ho sakta hai \u2014 <span class="de">die Untersuchung des Ministeriums</span> ka matlab yeh bhi ho sakta hai ki ministry ne jaanch ki, aur yeh bhi ki ministry ki jaanch hui. Jahan zimmedaari batani zaroori ho, wahan <b>von</b> + Dativ lagao ya Verbstil par wapas jao.'
    },
    { title: 'Meister-Tabelle', body: [ 'Style mapped to its purpose, preferred register, and effect.' ], table: { head: ['Style', 'Purpose', 'Preferred Register'], rows: [ ['Verbstil', 'Narrate step by step, show agency and time', 'Conversation, narrative, everyday writing'], ['Nominalstil', 'Compress into an objective concept', 'Academic, scientific, legal, administrative, journalism'] ] }, hinglish: 'Dono styles ka table \u2014 par style chunne ke baad ek cheez check karo: preposition ke hisaab se case sahi laga hai ya nahi.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Four of these are the case a Nominalstil preposition demands \u2014 the mechanical rule the chapter never states. The fifth is the genitive ambiguity that makes an agent disappear.' ], mistakes: [
      { wrong: 'Aufgrund die Anpassung steigt der Gewinn.', right: 'Aufgrund der Anpassung steigt der Gewinn.', why: '<b>aufgrund</b> takes the Genitiv \u2014 <b>der</b> Anpassung. This is the single most common Nominalstil error.' },
      { wrong: 'Die Durchf\u00fchrung der \u00dcberpr\u00fcfung der Einhaltung der Vorschriften erfolgte.', right: 'Es wurde \u00fcberpr\u00fcft, ob die Vorschriften eingehalten werden.', why: 'Four stacked Genitiv nominalizations are grammatical but unreadable. Turn one noun back into a verb.' },
      { wrong: 'Durch der Digitalisierung sinken die Kosten.', right: 'Durch die Digitalisierung sinken die Kosten.', why: '<b>durch</b> takes the Akkusativ, not the Genitiv \u2014 so <b>die</b> Digitalisierung. Each Nominalstil preposition brings its own case.' },
      { wrong: 'Infolge des Umsetzung wurde das Projekt verschoben.', right: 'Infolge der Umsetzung wurde das Projekt verschoben.', why: '<b>infolge</b> takes the Genitiv, and every <b>-ung</b> noun is feminine \u2014 so the Genitiv article is <b>der</b>, not <i>des</i>.' },
      { wrong: 'Die Untersuchung des Ministeriums ergab Verst\u00f6\u00dfe \u2014 wer gepr\u00fcft hat, bleibt offen.', right: 'Die vom Ministerium durchgef\u00fchrte Untersuchung ergab Verst\u00f6\u00dfe.', why: '<i>die Untersuchung des Ministeriums</i> is ambiguous \u2014 the ministry could be investigating or being investigated. Use <b>von</b> + Dativ to name the agent unambiguously.' }
    ], hinglish: 'Chaar galtiyan us case ki hain jo Nominalstil ka preposition maangta hai \u2014 wahi mechanical rule jo chapter kabhi batata nahi. Aur paanchvi mein Genitiv se matlab dhundhla ho gaya hai aur karne wala gayab ho gaya.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need formal writing? Is it academic, scientific, or legal? If yes, would Nominalstil improve precision and objectivity? If yes, use Nominalstil. Otherwise, keep Verbstil.' ], note: 'Memory trick: imagine two photographers. The first records a video showing every action — that is Verbstil. The second captures a high-resolution photograph that summarizes everything in one image — that is Nominalstil. Verbstil tells the story step by step. Nominalstil presents the complete concept in a compact, professional form. Native German switches naturally between both depending on the situation.', hinglish: 'Formal writing hai? Academic, scientific ya legal? To Nominalstil kaam aayega. Par likhne ke baad teen cheezein check karo: preposition ke hisaab se case sahi hai (<b>aufgrund</b> Genitiv, <b>durch</b> Akkusativ), teen se zyada Genitiv ek saath nahi jud gaye, aur agar zimmedaari batana zaroori hai to karne wala saaf dikh raha hai.' }
  ],
  reading: {
    title: 'Fachjournal: Neue Analyse zur Wirkung von Meditation auf Stresshormone',
    titleEn: 'Reading A — Journal: new analysis of meditation\'s effect on stress hormones',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Untersuchung', role: 'r-fotograf-metapher', en: 'investigation (nominalized form of "untersuchen", replacing a whole clause)', hi: 'जाँच (Nominalstil)', type: 'Noun · fem. (Satzende teil)' },
      { w: 'mehrerer', role: 'plain', en: 'of several (gen. pl.)', hi: 'कई', type: 'Indefinitpronomen · Gen.' },
      { w: 'Variablen', role: 'plain', en: 'variables (Satzende)', hi: 'चरों (Satzende)', type: 'Noun · fem. pl. · Gen. (Satzende)' },
      { w: 'führte', role: 'plain', en: 'led', hi: 'ले गई', type: 'Verb (Präteritum)' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'Präposition · Dat.' },
      { w: 'einer', role: 'plain', en: 'a (fem. dat.)', hi: 'एक', type: 'Article' },
      { w: 'überraschenden', role: 'plain', en: 'surprising', hi: 'आश्चर्यजनक', type: 'Adjective · Dat.' },
      { w: 'Schlussfolgerung', role: 'r-fotograf-metapher', en: 'conclusion (nominalized form of "schlussfolgern", Satzende, the second nominalization in this sentence)', hi: 'निष्कर्ष (Nominalstil, Satzende)', type: 'Noun · fem. · Dat. (Satzende)', why: 'This sentence uses two nominalizations ("Untersuchung" and "Schlussfolgerung") instead of two verbal clauses — dense, objective Nominalstil typical of academic writing.' },
      { w: '.', plain: true }
    ],
    translation: 'The investigation of several variables led to a surprising conclusion.',
    comprehension: [
      { q: 'Welches Verb steckt hinter "Untersuchung"?', options: ['untersuchen', 'unterstützen', 'unterschreiben'], answer: 0 },
      { q: 'Warum verwendet der Satz zwei Nominalisierungen statt zweier Verbalsätze?', options: ['Um die Information dicht und objektiv zu verpacken (Nominalstil)', 'Weil Verbalsätze grammatisch falsch wären', 'Aus stilistischem Zufall ohne Bedeutung'], answer: 0 },
      { q: 'Wie würde die Verbstil-Version dieses Satzes ungefähr beginnen?', options: ['"Weil man mehrere Variablen untersuchte, ..."', '"Die Untersuchung untersucht..."', '"Schlussfolgern bedeutet..."'], answer: 0 }
    ]
  },

  
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_026_L001', speaker: 'Angelika', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, "wir untersuchen, wie sich das Thema entwickelt hat" ist mir zu umständlich für den Abstract.', en: 'Timo, "we investigate how the topic has developed" is too roundabout for the abstract.' },
      { id: 'C2_026_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wie wäre "die Untersuchung der Entwicklung des Themas"?', en: 'How about "the investigation of the development of the topic"?' },
      { id: 'C2_026_L003', speaker: 'Angelika', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Viel dichter. Und "wir analysieren, warum die Zahlen schwanken"?', en: 'Much denser. And "we analyze why the figures fluctuate"?' },
      { id: 'C2_026_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: '"Die Analyse der Ursachen für die Schwankung der Zahlen" — ein Blick genügt.', en: '"The analysis of the causes for the fluctuation of the figures" — one glance suffices.' }
    ],
    transcript: 'Timo, "wir untersuchen, wie sich das Thema entwickelt hat" ist mir zu umständlich für den Abstract. Wie wäre "die Untersuchung der Entwicklung des Themas"? Viel dichter. Und "wir analysieren, warum die Zahlen schwanken"? "Die Analyse der Ursachen für die Schwankung der Zahlen" — ein Blick genügt.',
    translation: 'Timo, "we investigate how the topic has developed" is too roundabout for the abstract. How about "the investigation of the development of the topic"? Much denser. And "we analyze why the figures fluctuate"? "The analysis of the causes for the fluctuation of the figures" — one glance suffices.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'wir' },
      { w: 'untersuchen' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'sich' },
      { w: 'das' },
      { w: 'Thema' },
      { w: 'entwickelt' },
      { w: 'hat' },
      { w: '"', plain: true },
      { w: 'ist' },
      { w: 'mir' },
      { w: 'zu' },
      { w: 'umständlich' },
      { w: 'für' },
      { w: 'den' },
      { w: 'Abstract' },
      { w: '.', plain: true },
      { w: 'Wie' },
      { w: 'wäre' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'die' },
      { w: 'Untersuchung' },
      { w: 'der' },
      { w: 'Entwicklung' },
      { w: 'des' },
      { w: 'Themas' },
      { w: '"?', plain: true },
      { w: 'Viel' },
      { w: 'dichter' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'wir' },
      { w: 'analysieren' },
      { w: ',', plain: true },
      { w: 'warum' },
      { w: 'die' },
      { w: 'Zahlen' },
      { w: 'schwanken' },
      { w: '"?', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'Die' },
      { w: 'Analyse' },
      { w: 'der' },
      { w: 'Ursachen' },
      { w: 'für' },
      { w: 'die' },
      { w: 'Schwankung' },
      { w: 'der' },
      { w: 'Zahlen' },
      { w: '"', plain: true },
      { w: '—', plain: true },
      { w: 'ein' },
      { w: 'Blick' },
      { w: 'genügt' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welche Formulierung schlägt Timo für das Abstract vor?', qEn: 'What phrase does Timo suggest for the abstract?', options: ['wir untersuchen das Thema', 'die Untersuchung der Entwicklung des Themas', 'das Thema wird entwickelt', 'wir schauen uns das Thema an'], optionsEn: ['we investigate the topic', 'the investigation of the development of the topic', 'the topic is developed', 'we look at the topic'], answer: 1,
        explain: '"Die Untersuchung der Entwicklung des Themas."' },
      { q: 'Wie verdichten sie den zweiten Satz?', qEn: 'How do they condense the second sentence?', options: ['wir analysieren die Zahlen', 'die Analyse der Ursachen für die Schwankung der Zahlen', 'die Zahlen schwanken oft', 'wir wissen warum'], optionsEn: ['we analyse the figures', 'the analysis of the causes of the fluctuation in the figures', 'the figures fluctuate often', 'we know why'], answer: 1,
        explain: '"Die Analyse der Ursachen für die Schwankung der Zahlen."' }
    ]
  },
  speaking: [
    { task: "Timo findet „wir untersuchen, wie sich das Thema entwickelt hat“ zu umständlich.", taskEn: "Timo finds 'we examine how the topic has developed' too cumbersome.", de: "Nimm die Untersuchung der Entwicklung des Themas.", en: "Take 'the examination of the topic's development'." },
    { task: "Deine Chefin fragt, was heute im Bericht festgehalten wird.", taskEn: "Your boss asks what will be recorded in today's report.", de: "Die Prüfung der Anträge, die Bewertung der Fälle und die Darstellung der Ergebnisse.", en: "The examination of applications, the assessment of cases and the presentation of results." },
    { task: "Deine Lektorin fragt, warum du hier nominal formulierst.", taskEn: "Your editor asks why you use nominal style here.", de: "Der Nominalstil bündelt drei Schritte; verbal bräuchte ich drei Sätze.", en: "Nominal style bundles three steps; verbally I'd need three sentences." },
    { task: "Der Absatz hat drei Nominalisierungen. Was schlägst du vor?", taskEn: "The paragraph has three nominalisations. What do you propose?", de: "Zwei bleiben, die dritte lösen wir auf, sonst verschwindet der Handelnde.", en: "Two stay, we'll unpack the third, otherwise the agent disappears." },
    { task: "Trag deine Schlussfolgerung im Kolloquium vor.", taskEn: "Present your conclusion in the colloquium.", de: "Die Schlussfolgerung beruht auf der Auseinandersetzung mit älteren Befunden.", en: "The conclusion rests on the engagement with earlier findings." }
  ],
  writing: {
    prompt: 'TASK 1 — Style transformation (150 words): Transform Verbstil sentences into Nominalstil. Explain every change.\n\nTASK 2 — Academic editing (150 words): Edit an academic article by improving stylistic precision through appropriate nominalization. Explain every decision.\n\nTASK 3 — Essay (600 words): Write a C2 academic essay naturally integrating authentic Nominalstil across academic, scientific, and administrative contexts.',
    starters: ['Aufgrund der Untersuchung...', 'Die Umsetzung der neuen Richtlinie...', 'Durch die Digitalisierung...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über Verbstil und Nominalstil...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which noun phrase correctly nominalizes "weil die Firma sich anpasst"?', options: ['"aufgrund der Anpassung des Unternehmens"', '"weil die Anpassung"', '"die Firma passt sich an"'], answer: 0, explain: 'Nominalstil replaces the causal clause with a preposition ("aufgrund" + Gen.) governing the nominalized noun "Anpassung".' },
    gap: { sentence: ['Nach der ', ' der Ergebnisse wurde das Projekt genehmigt.'], gaps: [ { answer: 'Bewertung', accepts: ['Bewertung'] } ], explain: '"Bewertung" (from "bewerten") is the compact Nominalstil replacement for the Verbstil clause "nachdem man die Ergebnisse bewertet hatte".' },
    match: { q: 'Match each deverbal noun to its base verb.', pairs: [ { noun: 'die Untersuchung', art: 'untersuchen' }, { noun: 'die Veröffentlichung', art: 'veröffentlichen' }, { noun: 'die Umsetzung', art: 'umsetzen' }, { noun: 'die Zustimmung', art: 'zustimmen' } ] },
    builder: { target: 'Build: "The investigation of several variables led to a surprising conclusion." (Nominalstil)', bank: ['Die', 'Untersuchung', 'mehrerer', 'Variablen', 'führte', 'zu', 'einer', 'überraschenden', 'Schlussfolgerung', '.'], answer: ['Die', 'Untersuchung', 'mehrerer', 'Variablen', 'führte', 'zu', 'einer', 'überraschenden', 'Schlussfolgerung', '.'], roles: { 'Untersuchung': 'r-fotograf-metapher', 'Schlussfolgerung': 'r-fotograf-metapher' } },
    errorCorrection: { title: 'Error correction', wrong: 'Weil man die Untersuchung durchführte und weil man die Ergebnisse bewertete, kam man zu einer Schlussfolgerung.', right: 'Nach der Durchführung der Untersuchung und der Bewertung der Ergebnisse ergab sich eine Schlussfolgerung.', explain: 'The repetitive double Verbstil clause is compressed into dense, objective Nominalstil — appropriate for an academic register.' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for Nominalstil in this chapter?', options: ['Verbstil is a video (step by step); Nominalstil is a photograph (the whole concept, compressed)', 'Nominalstil is always grammatically required', 'Verbstil and Nominalstil are exactly the same thing'], answer: 0, explain: 'The two photographers metaphor captures the stylistic choice between narrating step by step and compressing into one objective noun phrase.' },
    { q: 'Which register most strongly favors Nominalstil?', options: ['Academic, scientific, legal, and administrative writing', 'Casual spoken conversation', 'Text messages between friends'], answer: 0, explain: 'Nominalstil signals objectivity and precision — exactly what formal, professional registers need.' },
    { q: 'What is a classic C2-level mistake with Nominalstil?', options: ['Overusing it in casual conversation, where it sounds stiff and unnatural', 'Never nominalizing any verb at all', 'Using only short sentences'], answer: 0, explain: 'Nominalstil belongs in formal registers; using it constantly in speech feels bureaucratic and impersonal.' },
    { q: 'What does Nominalstil typically remove from a clause?', options: ["The clause's explicit subject and tense, producing an agent-neutral, objective statement", 'The main verb entirely, leaving no predicate', 'All adjectives'], answer: 0, explain: 'By converting the verb into a noun, Nominalstil foregrounds the concept rather than who acted or when.' },
    { q: 'Why might "die Durchführung der Überprüfung der Einhaltung der Vorschriften" be a problem?', options: ['It chains too many genitive nouns together, becoming hard to parse even for native readers', 'It uses no nominalization at all', 'It is grammatically incorrect'], answer: 0, explain: 'Excessive Nominalstil chaining is a classic overuse mistake — break long noun chains into shorter phrases.' }
  ],
  takeaways: [
    { c: 'r-fotograf-metapher', html: 'Verbstil is a video, narrating step by step; Nominalstil is a photograph, compressing the whole concept into one objective noun phrase.' },
    { c: 'r-fotograf-metapher', html: 'Nominalstil dominates academic, scientific, legal, administrative, and journalistic registers because it removes the agent and foregrounds the concept.' },
    { c: 'r-fotograf-metapher', html: 'Overusing Nominalstil in casual speech, or chaining too many genitive nouns together, are the two classic C2-level mistakes.' },
    { c: 'r-fotograf-metapher', html: 'The choice between Verbstil and Nominalstil is a deliberate register decision, not a grammatical requirement.' }
  ],
  revisionTips: [
    'Take three everyday Verbstil sentences and transform each into Nominalstil, naming the preposition (aufgrund, durch, nach, trotz) that governs the nominalized noun.',
    'Read one academic abstract and count how many nominalized nouns replace what would be verbal clauses in casual speech.',
    'Rewrite one overly long noun chain by breaking it into two shorter Nominalstil phrases or reintroducing a partial relative clause.'
  ]
};
window.CHAPTER = CHAPTER;
