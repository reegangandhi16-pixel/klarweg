/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 13
   "Pr\u00e4positionen mit Dativ"  (the always-dative prepositions: aus,
   au\u00dfer, bei, mit, nach, seit, von, zu, gegen\u00fcber; dative articles
   dem/der/dem/den(+n); contractions zum/zur/vom). Teaches ONLY
   dative prepositions. No Wechselpr\u00e4positionen, no Genitiv prepositions.
   Vocabulary source: uploaded chapter-13 list (~26 items; city /
   admin / tourism / police theme). Recycles Ch.12 (reflexive),
   Ch.11 (wenn), Ch.7 (Dativ possessives), Ch.6 (modal Pr\u00e4t.) and A1.
   NOTE: content only \u2014 existing audio engine, no new assets.

   SOURCE TYPOS corrected (flagged, not silently overridden):
   • "aufl r\u00e4umen" \u2192 aufr\u00e4umen (to clean/tidy up)
   • "umil sehen" \u2192 sich umsehen (to look around \u2014 reflexive, recycled)
   • "vorl stellen" \u2192 sich vorstellen (to imagine, recycled from Ch.12)
   • "neben" is a Wechselpr\u00e4position; the chapter teaches ONLY dative
     prepositions, so neben is glossed as vocabulary and used only in
     a fixed dative (location) sense, NOT taught as a rule.
============================================================ */
const CHAPTER = {
  id: 'a2-13-praepositionen-dativ',
  phase: 'A2 · Phase 2',
  number: 13,
  title: 'Pr\u00e4positionen mit Dativ',
  titleEn: 'Prepositions with the Dative',
  description: 'Nine little prepositions always \u2014 no exceptions \u2014 put the next noun in the dative: aus, au\u00dfer, bei, mit, nach, seit, von, zu, gegen\u00fcber. So der/die/das become dem/der/dem, and the plural adds an -n: mit den Freunden. Learn the nine as a set, memorise three everyday contractions (zum, zur, vom), and you can say where you\u2019re from, where you live, how you travel and how long you\u2019ve been doing something \u2014 all correctly.',
  xp: 160,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 14, title: 'Wechselpr\u00e4positionen', titleEn: 'Two-Way Prepositions' , href: 'chapter-a2-14-wechselpraepositionen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Timo\'s bicycle has vanished somewhere between the bus stop and the museum, so the morning turns into a small city adventure: a trip to the police, a report filed with Frau Nissen, a coffee across from the station. Every step is a preposition of place and motion — mit dem Bus, zur Polizei, gegenüber dem Bahnhof.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear mit dem Bus, zur Schule, seit einer Woche in real situations'
    ],
    scene: 'Ein Vormittag in der Stadt \u2014 Sprachschule Berlin',
    femaleSpeakers: ['Frau Nissen'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'möchte', role: 'r-modalverb', en: 'would like', hi: 'चाहता हूँ', pron: 'MÖKH-tuh', type: 'Modal · möchten (ich)' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Diebstahl', role: 'r-akkusativ', en: 'theft', hi: 'चोरी', pron: 'DEEP-shtahl', type: 'Noun · masc.', why: 'der Diebstahl (this chapter).', ex: 'Ich melde einen Diebstahl.', exEn: 'I report a theft.' },
        { w: 'melden', role: 'r-verb', en: 'report', hi: 'दर्ज करना', pron: 'MEL-den', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I would like to report a theft.', hi: 'Main ek chori darj karna chahta hoon.' },
      { speaker: 'Frau Nissen', side: 'right', tokens: [
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'हुआ', pron: 'ist', type: 'Verb · sein' },
        { w: 'passiert', role: 'r-verb', en: 'happened', hi: 'हुआ', pron: 'pa-SEERT', type: 'Partizip II (Satzende)' },
        { w: '?', plain: true }
      ], en: 'What happened?', hi: 'Kya hua?' },
      { speaker: 'Timo', tokens: [
        { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरी', pron: 'mine', type: 'Possessive' },
        { w: 'Fahrrad', role: 'r-subject', en: 'bicycle', hi: 'साइकिल', pron: 'FAHR-raht', type: 'Noun · neut.' },
        { w: 'stand', role: 'r-verb', en: 'stood', hi: 'खड़ी थी', pron: 'shtant', type: 'Verb · stehen (Präteritum)' },
        { w: 'neben', role: 'r-preposition', en: 'next to', hi: 'के बगल में', pron: 'NAY-ben', type: 'Preposition + dative', why: 'neben + dative for position (this chapter).', ex: 'neben dem Eingang', exEn: 'next to the entrance' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Eingang', role: 'r-dativ', en: 'entrance (dat.)', hi: 'प्रवेश द्वार के', pron: 'INE-gang', type: 'Noun · masc. dat.' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'weg', role: 'r-akkusativ', en: 'gone', hi: 'ग़ायब', pron: 'vek', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'My bicycle stood next to the entrance and now it is gone.', hi: 'Meri cycle pravesh dwar ke bagal mein khadi thi aur ab gaayab hai.' },
      { speaker: 'Frau Nissen', side: 'right', tokens: [
        { w: 'Wann', role: 'r-question', en: 'when', hi: 'कब', pron: 'van', type: 'Question word' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'देखा', pron: 'HAH-ben', type: 'Verb · haben (helper)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आपने', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'उसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'zuletzt', role: 'r-adverb', en: 'last', hi: 'आख़िरी बार', pron: 'tsu-LETST', type: 'Adverb' },
        { w: 'gesehen', role: 'r-verb', en: 'seen', hi: 'देखा', pron: 'ge-ZAY-en', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'When did you last see it?', hi: 'Aapne aakhri baar use kab dekha?' },
      { speaker: 'Timo', tokens: [
        { w: 'Vor', role: 'r-preposition', en: 'before', hi: 'पहले', pron: 'for', type: 'Preposition + dative', why: 'vor + dative for a point in time (recycled).', ex: 'vor einer Stunde', exEn: 'an hour ago' },
        { w: 'einer', role: 'r-dativ', en: 'an (fem. dat.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · dative' },
        { w: 'Stunde', role: 'r-dativ', en: 'hour', hi: 'घंटे', pron: 'SHTUN-duh', type: 'Noun · fem. dat.' },
        { w: '.', plain: true },
        { w: 'Da', role: 'r-adverb', en: 'then', hi: 'तब', pron: 'dah', type: 'Adverb' },
        { w: 'stand', role: 'r-verb', en: 'stood', hi: 'खड़ी थी', pron: 'shtant', type: 'Verb · stehen (Präteritum)' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी भी', pron: 'nokh', type: 'Adverb' },
        { w: 'gegenüber', role: 'r-preposition', en: 'opposite', hi: 'सामने', pron: 'gay-gen-Ü-ber', type: 'Preposition + dative', why: 'gegenüber + dative = opposite (this chapter).', ex: 'gegenüber der Bank', exEn: 'opposite the bank' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Bank', role: 'r-dativ', en: 'bank (dat.)', hi: 'बैंक के', pron: 'bank', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'An hour ago. Then it still stood opposite the bank.', hi: 'Ek ghante pehle. Tab woh abhi bhi bank ke saamne khadi thi.' },
      { speaker: 'Frau Nissen', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'melde', role: 'r-verb', en: 'report', hi: 'दर्ज करती हूँ', pron: 'MEL-duh', type: 'Verb · melden (ich)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Diebstahl', role: 'r-akkusativ', en: 'theft', hi: 'चोरी', pron: 'DEEP-shtahl', type: 'Noun · masc.' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Good. I will report the theft now.', hi: 'Achha. Main chori abhi darj karti hoon.' },
      { speaker: 'Timo', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'mache', role: 'r-verb', en: 'do I', hi: 'करूं', pron: 'MA-khuh', type: 'Verb · machen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'Yes, thanks! What do I do now?', hi: 'Haan, dhanyavaad! Ab main kya karoon?' },
      { speaker: 'Frau Nissen', side: 'right', tokens: [
        { w: 'Warten', role: 'r-verb', en: 'wait', hi: 'इंतज़ार करें', pron: 'VAR-ten', type: 'Verb · imperative (Sie)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Politeness' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'gebe', role: 'r-verb', en: 'give', hi: 'देती हूँ', pron: 'GAY-buh', type: 'Verb · geben (ich)' },
        { w: 'Ihnen', role: 'r-dativ', en: 'you (formal)', hi: 'आपको', pron: 'EE-nen', type: 'Pronoun · formal dative' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Nummer', role: 'r-akkusativ', en: 'number', hi: 'नंबर', pron: 'NU-mer', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Please wait. I will give you a number.', hi: 'Kripya intezaar kijiye. Main aapko ek number dungi.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Nine prepositions are <strong>always</strong> followed by the dative \u2014 no thinking, no exceptions: <span class="de">aus, au\u00dfer, bei, mit, nach, seit, von, zu, gegen\u00fcber</span>. After any of them, the articles shift to their dative shapes: <span class="de">der/das \u2192 <span class="r-dativ">dem</span>, die \u2192 <span class="r-dativ">der</span></span>, and the <strong>plural adds an -n</strong>: <span class="de">mit <span class="r-dativ">den</span> Freunden</span>. Three combinations get squeezed into everyday contractions: <span class="de">zu dem \u2192 <span class="r-preposition">zum</span>, zu der \u2192 <span class="r-preposition">zur</span>, von dem \u2192 <span class="r-preposition">vom</span></span>. Each preposition has a job \u2014 <span class="de">aus</span> = origin, <span class="de">bei</span> = at someone/somewhere, <span class="de">mit</span> = transport/company, <span class="de">nach</span> = to a city/country, <span class="de">zu</span> = to a person/building, <span class="de">seit</span> = since/for, <span class="de">von</span> = from, <span class="de">gegen\u00fcber</span> = opposite. Memorise the nine as a chant and the endings follow automatically.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is DATIVE PREPOSITIONS: aus, au\u00dfer, bei, mit, nach, seit, von, zu, gegen\u00fcber (always + dative), plus contractions zum/zur/vom. ' +
    'No Wechselpr\u00e4positionen, no genitive prepositions. The learner wrote about places/travel/routine below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- These nine prepositions ALWAYS take the dative: der/das \u2192 dem, die \u2192 der, plural \u2192 den + noun -n (mit den Freunden, Kindern).\n' +
    '- Contractions: zu dem = zum, zu der = zur, von dem = vom, bei dem = beim. These are normal and correct.\n' +
    '- Meanings: aus = origin/out of ("Ich komme aus Indien"); bei = at a person/place/employer ("bei meinen Eltern", "beim Arzt"); mit = with / by transport ("mit dem Bus"); nach = to a city/country/home ("nach Berlin", "nach Hause") and "after" (time); zu = to a person/building ("zur Schule", "zum Arzt"); seit = since/for a period ("seit einem Jahr"); von = from ("vom Arzt"); gegen\u00fcber = opposite (often after the noun).\n' +
    '- Common errors to flag: "mit den Bus" \u2192 "mit dem Bus"; "zu Bahnhof" \u2192 "zum Bahnhof"; "aus die Schule" \u2192 "aus der Schule"; "nach Hause" is correct (do NOT "change" it); using nach for a building instead of zu.\n' +
    '- Do not introduce two-way prepositions (in/an/auf...) rules here. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why. If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>Dative-preposition check:</b> one sentence on the article endings and any contraction.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You pick the right preposition and the dative follows automatically \u2014 zum, zur, vom, all clean. Next: the trickier in/an/auf split in <span class="de">Wechselpr\u00e4positionen</span>.',
    mid: 'Good. Chant the nine once more (aus, au\u00dfer, bei, mit, nach, seit, von, zu, gegen\u00fcber), then continue.',
    low: 'Worth another pass \u2014 these nine prepositions are always dative, so der/das \u2192 dem, die \u2192 der, plural \u2192 den+n. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'fahre', role: 'r-verb' },
    { w: 'mit', role: 'r-preposition' }, { w: 'dem', role: 'r-dativ' },
    { w: 'Bus', role: 'r-dativ' }, { w: 'zur', role: 'r-preposition' },
    { w: 'Schule', role: 'r-place' }
  ],

  // Sentence Insight (Architecture v1.0) — authored teaching layer that
  // consumes parserSentence as its single source of grammatical fact.
  // Never duplicates parser logic; only adds pedagogy on top of it.
  sentenceInsight: {
    meaning: 'I go to school by bus.',
    kind: 'heroInsight', // or 'keyObservation'
    insight: '"mit" always takes Dativ — no matter where the phrase sits in the sentence.',
    proofTokens: [
      { w: 'Mit', role: 'r-preposition' }, { w: 'dem', role: 'r-dativ' },
      { w: 'Bus', role: 'r-dativ' }, { w: 'fahre', role: 'r-verb' },
      { w: 'ich', role: 'r-subject' }, { w: 'zur', role: 'r-preposition' },
      { w: 'Schule', role: 'r-place' }
    ],
    why: 'German prepositions like "mit" always govern the same case, wherever the phrase moves. "dem Bus" stays Dativ whether it sits mid-sentence or at the front — the case is tied to "mit", not to position.',
    pattern: 'All nine always-dative prepositions (aus, außer, bei, mit, nach, seit, von, zu, gegenüber) behave the same way — the case travels with the preposition, never with word order.'
  },

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the nine always-dative prepositions and what each one does.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A city morning \u2014 to the police, the Amt, and a coffee across the street.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the city/admin words: das Amt, die Polizei, der Diebstahl, abheben, das Visum.' },
    { id: 'grammar',    label: 'Dativ',      tag: 'core',
      objective: 'Master the nine prepositions, the dative articles, zum/zur/vom, and each meaning.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a daily commute \u2014 aus, mit, zu, bei, seit all at work.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch which preposition fits each place and time.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say where you\u2019re from, where you live and how you travel.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a short paragraph using all the dative prepositions.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the prepositions, endings and contractions with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Vocabulary PDF',
      desc: 'The chapter\u2019s city and admin words \u2014 das Amt, die Polizei, der Diebstahl, das Visum, abheben \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '9 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Homework PDF',
      desc: 'Dative-article drills, preposition choice, zum/zur/vom contractions, and a where-I-live/travel task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Grammar Rules PDF',
      desc: 'The nine prepositions, the dative article table, the contraction table, meanings, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich komme aus Indien.', text: 'State origin with aus' },
    { de: 'Ich wohne bei meinen Eltern.', text: 'Say where/with whom with bei' },
    { de: 'Ich fahre mit dem Bus.', text: 'Give transport with mit' },
    { de: 'Ich gehe zur Schule.', text: 'Give a destination with zu (+ zum/zur)' },
    { de: 'Seit einem Jahr \u2026', text: 'Say how long with seit' }
  ],

  // ---------- Vocabulary (26 items) ----------
  vocab: [
    // ===== Admin / city / police =====
    { de: 'Amt', art: 'das', gender: 'n', plural: '\u00c4mter', pos: 'noun', en: 'office, (government) department', hi: 'सरकारी कार्यालय', ex: 'Ich muss zum Amt, weil ich ein Visum brauche.', exEn: 'I have to go to the office because I need a visa.' },
    { de: 'Polizei', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'police', hi: 'पुलिस', ex: 'Wir gehen zur Polizei und melden den Diebstahl.', exEn: 'We go to the police and report the theft.' },
    { de: 'Diebstahl', art: 'der', gender: 'm', plural: 'Diebst\u00e4hle', pos: 'noun', en: 'theft', hi: 'चोरी', ex: 'Der Diebstahl ist seit einer Stunde her.', exEn: 'The theft was an hour ago.' },
    { de: 'Visum', art: 'das', gender: 'n', plural: 'Visa', pos: 'noun', en: 'visa', hi: 'वीज़ा', ex: 'Mein Visum bekomme ich vom Amt.', exEn: 'I get my visa from the office.' },
    { de: 'Parlament', art: 'das', gender: 'n', plural: 'Parlamente', pos: 'noun', en: 'parliament', hi: 'संसद', ex: 'Das Parlament ist gegen\u00fcber dem Fluss.', exEn: 'The parliament is opposite the river.' },
    { de: 'Kaiser', art: 'der', gender: 'm', plural: 'Kaiser', pos: 'noun', en: 'emperor', hi: 'सम्राट', ex: 'Der Tourist fotografiert die Statue vom Kaiser.', exEn: 'The tourist photographs the statue of the emperor.' },
    { de: 'Tourist', art: 'der', gender: 'm', plural: 'Touristen', pos: 'noun', en: 'tourist', hi: 'पर्यटक', ex: 'Der Tourist kommt gerade aus dem Museum.', exEn: 'The tourist is just coming out of the museum.' },
    { de: 'Fahrerin', art: 'die', gender: 'f', plural: 'Fahrerinnen', pos: 'noun', en: 'driver (f.)', hi: 'चालक', ex: 'Die Fahrerin f\u00e4hrt mit dem Bus zum Bahnhof.', exEn: 'The driver goes by bus to the station.' },
    { de: 'M\u00fcll', art: 'der', gender: 'm', plural: '\u2014', pos: 'noun', en: 'rubbish, waste', hi: 'कचरा', ex: 'Nach dem Fr\u00fchst\u00fcck bringe ich den M\u00fcll raus.', exEn: 'After breakfast I take the rubbish out.' },
    { de: 'Daumen', art: 'der', gender: 'm', plural: 'Daumen', pos: 'noun', en: 'thumb', hi: 'अंगूठा', ex: 'Ich dr\u00fccke dir die Daumen bei der Pr\u00fcfung!', exEn: 'I\u2019ll keep my fingers crossed for you in the exam!' },
    { de: 'Gedanke', art: 'der', gender: 'm', plural: 'Gedanken', pos: 'noun', en: 'thought', hi: 'विचार', ex: 'Bei dem Gedanken an die Reise freue ich mich.', exEn: 'At the thought of the trip I\u2019m happy.' },
    { de: 'N\u00e4chste', art: 'der/die', gender: 'mf', plural: 'N\u00e4chsten', pos: 'noun', en: 'the next one', hi: 'अगला', ex: 'Der N\u00e4chste, bitte! Sie kommen vom Amt?', exEn: 'Next, please! You\u2019re coming from the office?' },
    { de: 'Clubdisco', art: 'die', gender: 'f', plural: 'Clubdiscos', pos: 'noun', en: 'club, disco', hi: 'क्लब डिस्को', ex: 'Nach der Arbeit gehen wir zur Clubdisco.', exEn: 'After work we go to the club.' },
    { de: 'Entspannung', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'relaxation', hi: 'विश्राम', ex: 'Seit einer Woche brauche ich Entspannung.', exEn: 'For a week I\u2019ve needed relaxation.' },
    { de: 'Fortsetzung', art: 'die', gender: 'f', plural: 'Fortsetzungen', pos: 'noun', en: 'sequel, continuation', hi: 'अगली कड़ी', ex: 'Die Fortsetzung vom Film kommt nach einem Jahr.', exEn: 'The sequel to the film comes after a year.' },
    // ===== Verbs =====
    { de: 'abheben', pos: 'verb', en: 'to withdraw (money) (separable)', hi: 'पैसे निकालना', ex: 'Ich hebe Geld vom Automaten ab.', exEn: 'I withdraw money from the machine.', conj: { praesens: 'hebt ab', praeteritum: 'hob ab', perfekt: 'hat abgehoben' } },
    { de: 'bedienen', pos: 'verb', en: 'to serve', hi: 'सेवा करना', ex: 'Die Kellnerin bedient uns bei dem Caf\u00e9.', exEn: 'The waitress serves us at the caf\u00e9.', conj: { praesens: 'bedient', praeteritum: 'bediente', perfekt: 'hat bedient' } },
    { de: 'erledigen', pos: 'verb', en: 'to take care of, to get done', hi: 'निपटाना', ex: 'Nach dem Amt erledige ich alles bei der Bank.', exEn: 'After the office I get everything done at the bank.', conj: { praesens: 'erledigt', praeteritum: 'erledigte', perfekt: 'hat erledigt' } },
    { de: 'erwarten', pos: 'verb', en: 'to expect', hi: 'उम्मीद करना', ex: 'Ich erwarte einen Brief vom Amt.', exEn: 'I expect a letter from the office.', conj: { praesens: 'erwartet', praeteritum: 'erwartete', perfekt: 'hat erwartet' } },
    { de: 'funktionieren', pos: 'verb', en: 'to work, to function', hi: 'काम करना', ex: 'Der Automat hat nicht funktioniert.', exEn: 'The machine didn\u2019t work.', conj: { praesens: 'funktioniert', praeteritum: 'funktionierte', perfekt: 'hat funktioniert' } },
    { de: 'melden', pos: 'verb', en: 'to report', hi: 'सूचित करना', ex: 'Bei der Polizei melde ich den Diebstahl.', exEn: 'At the police I report the theft.', conj: { praesens: 'meldet', praeteritum: 'meldete', perfekt: 'hat gemeldet' } },
    { de: 'pflegen', pos: 'verb', en: 'to take care of, to look after', hi: 'देखभाल करना', ex: 'Seit einem Jahr pflege ich meine Oma.', exEn: 'For a year I\u2019ve been looking after my grandma.', conj: { praesens: 'pflegt', praeteritum: 'pflegte', perfekt: 'hat gepflegt' } },
    { de: 'transportieren', pos: 'verb', en: 'to transport', hi: 'ले जाना', ex: 'Wir transportieren die Kisten mit dem Auto.', exEn: 'We transport the boxes by car.', conj: { praesens: 'transportiert', praeteritum: 'transportierte', perfekt: 'hat transportiert' } },
    { de: 'aufr\u00e4umen', pos: 'verb', en: 'to tidy up, to clean up (separable)', hi: 'साफ़ करना', ex: 'Nach der Party r\u00e4ume ich mit meinen Freunden auf.', exEn: 'After the party I tidy up with my friends.', conj: { praesens: 'r\u00e4umt auf', praeteritum: 'r\u00e4umte auf', perfekt: 'hat aufger\u00e4umt' } },
    // ===== Small words =====
    { de: 'neben', pos: 'preposition', en: 'next to, beside', hi: 'के बगल में', ex: 'Das Amt ist neben dem Bahnhof.', exEn: 'The office is next to the station.' },
    { de: 'gegen\u00fcber', pos: 'preposition', en: 'opposite (+ Dativ)', hi: 'के सामने', ex: 'Das Caf\u00e9 ist gegen\u00fcber dem Bahnhof.', exEn: 'The caf\u00e9 is opposite the station.' }
  ],

  // ---------- Pr\u00e4positionen mit Dativ (rule cards) ----------
  grammar: [
    {
      title: 'The nine always-dative prepositions',
      goldenRule: 'These nine always take the dative, whatever they mean: <b>aus, au\u00dfer, bei, mit, nach, seit, von, zu, gegen\u00fcber</b>.',
      memoryTrick: 'Nau naam ek lay mein bolo \u2014 <b>aus, au\u00dfer, bei, mit, nach, seit, von, zu, gegen\u00fcber</b>. Ek baar zubaan par chadh gaye to case sochna hi nahi padta.',
      recap: [
        'Nine prepositions, always dative, no exceptions.',
        'The meaning does not matter \u2014 the preposition decides.',
        '<b>nach</b> + city/country takes no article: nach Berlin, nach Hause.'
      ],
      body: [
        'These nine prepositions are <strong>always</strong> followed by the dative \u2014 there\u2019s no choice to make. Learn them as one chant.'
      ],
      table: {
        head: ['Preposition', 'Meaning', 'Example'],
        rows: [
          ['<span class="de r-preposition">aus</span>', 'from, out of (origin)', '<span class="de">Ich komme aus <span class="r-dativ">dem</span> Haus.</span>'],
          ['<span class="de r-preposition">au\u00dfer</span>', 'except', '<span class="de">Alle au\u00dfer <span class="r-dativ">mir</span> sind da.</span>'],
          ['<span class="de r-preposition">bei</span>', 'at, near, with', '<span class="de">Ich wohne bei <span class="r-dativ">meinen</span> Eltern.</span>'],
          ['<span class="de r-preposition">mit</span>', 'with, by (transport)', '<span class="de">Ich fahre mit <span class="r-dativ">dem</span> Bus.</span>'],
          ['<span class="de r-preposition">nach</span>', 'to (city/country); after', '<span class="de">Ich fahre nach Berlin.</span>'],
          ['<span class="de r-preposition">seit</span>', 'since, for (time)', '<span class="de">seit <span class="r-dativ">einem</span> Jahr</span>'],
          ['<span class="de r-preposition">von</span>', 'from, of', '<span class="de">Ich komme von <span class="r-dativ">der</span> Arbeit.</span>'],
          ['<span class="de r-preposition">zu</span>', 'to (person/building)', '<span class="de">Ich gehe zu <span class="r-dativ">der</span> Schule.</span>'],
          ['<span class="de r-preposition">gegen\u00fcber</span>', 'opposite', '<span class="de">gegen\u00fcber <span class="r-dativ">dem</span> Bahnhof</span>']
        ]
      },
      note: 'A classic chant to memorise them: <b>aus, au\u00dfer, bei, mit, nach, seit, von, zu, gegen\u00fcber</b>. After any of them the dative is automatic. (nach with a country/city and names takes no article: nach Berlin, nach Hause.)',
      hinglish: 'Yeh nau prepositions apne baad Dativ lete hain: <b>aus, au\u00dfer, bei, mit, nach, seit, von, zu, gegen\u00fcber</b>. Inhe ek group ki tarah yaad kar lo, kyunki phir case sochna hi nahi padta \u2014 preposition dikha to Dativ pakka hai.'
    },
    {
      title: 'The dative articles',
      goldenRule: 'Dative: masc/neut <b>dem</b> \u00b7 fem <b>der</b> \u00b7 plural <b>den</b> + <b>-n</b> on the noun.',
      memoryTrick: 'Plural sabse dhokebaaz hai \u2014 article <b>den</b> aur noun par extra <b>-n</b>: <b>mit den Freunden</b>, <b>mit den Kindern</b>.',
      body: [
        'After a dative preposition the article changes shape. Masculine and neuter share <strong>dem</strong>; feminine is <strong>der</strong>; the plural is <strong>den</strong> and the noun gains an <strong>-n</strong>.'
      ],
      table: {
        head: ['Gender/number', 'Nominativ', 'Dativ'],
        rows: [
          ['masculine', '<span class="de">der Bus</span>', '<span class="de">mit <span class="r-dativ">dem</span> Bus</span>'],
          ['feminine', '<span class="de">die Schule</span>', '<span class="de">zu <span class="r-dativ">der</span> Schule</span>'],
          ['neuter', '<span class="de">das Amt</span>', '<span class="de">zu <span class="r-dativ">dem</span> Amt</span>'],
          ['plural', '<span class="de">die Freunde</span>', '<span class="de">mit <span class="r-dativ">den</span> Freunden</span>']
        ]
      },
      note: 'The plural is the sneaky one: article <b>den</b> <em>and</em> an extra <b>-n</b> on the noun (den Freunde<b>n</b>, den Kinder<b>n</b>) \u2014 unless the plural already ends in -n or -s. Indefinite: einem (m/n), einer (f).',
      hinglish: 'Dativ mein articles aise badalte hain: masculine aur neuter dono <b>dem</b> lete hain, feminine <b>der</b>, aur plural <b>den</b> \u2014 saath hi plural noun par ek extra <b>-n</b> bhi lagta hai, jaise <b>mit den Freunden</b>. Indefinite article ki forms <b>einem</b> (m/n) aur <b>einer</b> (f) hain.'
    },
    {
      title: 'Contractions: zum, zur, vom',
      goldenRule: 'Use the contraction by default: <b>zum, zur, vom, beim</b>.',
      formula: [
        'zu + dem  \u2192  <b>zum</b> Arzt',
        'zu + der  \u2192  <b>zur</b> Schule',
        'von + dem \u2192  <b>vom</b> Amt',
        'bei + dem \u2192  <b>beim</b> Arzt'
      ],
      memoryTrick: 'Feminine <b>der</b> se <b>zur</b>, masc/neut <b>dem</b> se <b>zum</b>. Rozmarra mein yahi bolte hain \u2014 "zu dem Arzt" ajeeb lagta hai.',
      body: [
        'Three preposition + article pairs are almost always squeezed together in speech and writing.'
      ],
      table: {
        head: ['Full form', 'Contraction', 'Example'],
        rows: [
          ['<span class="de">zu dem</span>', '<span class="de r-preposition">zum</span>', '<span class="de">Ich gehe zum Arzt.</span>'],
          ['<span class="de">zu der</span>', '<span class="de r-preposition">zur</span>', '<span class="de">Ich gehe zur Schule.</span>'],
          ['<span class="de">von dem</span>', '<span class="de r-preposition">vom</span>', '<span class="de">Ich komme vom Amt.</span>'],
          ['<span class="de">bei dem</span>', '<span class="de r-preposition">beim</span>', '<span class="de">Ich bin beim Arzt.</span>']
        ]
      },
      note: 'zum, zur, vom (and beim) are the everyday forms \u2014 use them. Writing "zu dem Arzt" isn\u2019t wrong, but it sounds unnatural. Remember: <b>zu der \u2192 zur</b> (feminine), <b>zu dem \u2192 zum</b> (masc/neut).',
      hinglish: 'Rozmarra German mein chaar contractions bahut common hain: <b>zu dem</b> se <b>zum</b>, <b>zu der</b> se <b>zur</b>, <b>von dem</b> se <b>vom</b>, aur <b>bei dem</b> se <b>beim</b>. Normally inhi ko bolna behtar hai, kyunki poora form jaise <b>zu dem Arzt</b> thoda ajeeb lagta hai.'
    },
    {
      title: 'Which preposition? A meaning map',
      body: [
        'Each dative preposition owns a job. Pick by meaning, then the dative follows automatically.'
      ],
      table: {
        head: ['You want to say \u2026', 'Use', 'Example'],
        rows: [
          ['origin (out of / from)', '<span class="de r-preposition">aus</span>', '<span class="de">Ich komme aus Indien.</span>'],
          ['at a person / place', '<span class="de r-preposition">bei</span>', '<span class="de">Ich wohne bei meinen Eltern.</span>'],
          ['transport / company', '<span class="de r-preposition">mit</span>', '<span class="de">Ich fahre mit dem Zug.</span>'],
          ['to a city / country', '<span class="de r-preposition">nach</span>', '<span class="de">Ich fliege nach Indien.</span>'],
          ['to a person / building', '<span class="de r-preposition">zu</span>', '<span class="de">Ich gehe zum Arzt.</span>'],
          ['since / for (time)', '<span class="de r-preposition">seit</span>', '<span class="de">seit einem Jahr</span>'],
          ['opposite', '<span class="de r-preposition">gegen\u00fcber</span>', '<span class="de">gegen\u00fcber dem Bahnhof</span>']
        ]
      },
      note: 'The famous pair to keep apart: <b>nach</b> for cities/countries/home (nach Berlin, nach Hause) vs <b>zu</b> for people and buildings (zum Arzt, zur Schule).',
      hinglish: 'Har preposition ka apna kaam hai. <b>aus</b> origin batata hai, <b>bei</b> kisi ke paas hona, <b>mit</b> transport ya saath, <b>nach</b> sheher ya desh ki taraf jaana, <b>zu</b> kisi person ya building ki taraf, <b>seit</b> kab se, aur <b>gegen\u00fcber</b> saamne. Sabse zyada confusion <b>nach</b> aur <b>zu</b> mein hoti hai \u2014 sheher ke liye <b>nach</b>, aur person ya building ke liye <b>zu</b>.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four dative-preposition traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich fahre mit den Bus.', right: 'Ich fahre mit dem Bus.', why: 'Bus is masculine; dative singular \u2192 dem, not den.' },
        { wrong: 'Ich gehe zu Bahnhof.', right: 'Ich gehe zum Bahnhof.', why: 'zu + dem contracts to zum \u2014 don\u2019t drop the article.' },
        { wrong: 'Ich komme aus die Schule.', right: 'Ich komme aus der Schule.', why: 'aus takes the dative; feminine die \u2192 der.' },
        { wrong: 'Ich fahre nach dem Arzt.', right: 'Ich fahre zum Arzt.', why: 'For a person/building use zu(m), not nach.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>mit dem Bus</b> sahi hai, <b>mit den Bus</b> nahi. <b>zum Bahnhof</b> mein article chhodna nahi hai. Feminine noun ke saath Dativ <b>der</b> hota hai, jaise <b>aus der Schule</b>. Aur kisi person ya building ke liye <b>zu</b> ya <b>zum</b> use karo, <b>nach</b> nahi.'
    },
    {
      title: 'Quick decision guide',
      body: [
        'Two steps handle every dative-preposition sentence.'
      ],
      table: {
        head: ['Step', 'Do this'],
        rows: [
          ['1. Pick the preposition by meaning', 'origin \u2192 aus \u00b7 at \u2192 bei \u00b7 transport \u2192 mit \u00b7 city \u2192 nach \u00b7 building/person \u2192 zu \u00b7 since \u2192 seit \u00b7 from \u2192 von \u00b7 opposite \u2192 gegen\u00fcber'],
          ['2. Put the noun in the dative', 'dem (m/n) \u00b7 der (f) \u00b7 den + -n (pl) \u2014 and contract: zum, zur, vom']
        ]
      },
      note: 'The nine prepositions never change case \u2014 so once you\u2019ve chosen one, you never have to ask "which case?". It\u2019s always dative.',
      hinglish: 'Do step mein socho. Pehle matlab dekh kar preposition chuno, phir uske baad wale noun ko Dativ mein daalo \u2014 <b>dem</b>, <b>der</b> ya <b>den</b> (+<b>-n</b>) \u2014 aur ho sake to contract kar do (<b>zum</b>, <b>zur</b>, <b>vom</b>). In nau prepositions ke saath case ka sawaal hi nahi uthta, kyunki yeh sab Dativ lete hain.'
    }
  ],

  // ---------- Reading passage (Mein Weg zur Arbeit, clickable) ----------
  reading: {
    title: 'Mein Weg zur Arbeit',
    titleEn: 'My way to work',
    tokens: [
      { w: 'Seit', role: 'r-preposition', en: 'for', hi: 'से', pron: 'zite', type: 'Pr\u00e4position \u00b7 Dativ', why: 'seit + Dativ for a period up to now (this chapter).', ex: 'seit einem Jahr', exEn: 'for a year' },
      { w: 'einem', role: 'r-dativ', en: 'a (neut. dat.)', hi: 'एक', pron: 'INE-em', type: 'Article \u00b7 dative', why: 'ein Jahr \u2192 einem Jahr after seit (this chapter).', ex: 'seit einem Jahr', exEn: 'for a year' },
      { w: 'Jahr', role: 'r-dativ', en: 'year', hi: 'साल', pron: 'yar', type: 'Noun \u00b7 neut. \u00b7 dat.', why: 'das Jahr (recycled \u2014 Zeit).', ex: 'seit einem Jahr', exEn: 'for a year' },
      { w: 'wohne', role: 'r-verb', en: 'live', hi: 'रहती हूँ', pron: 'VO-nuh', type: 'Verb \u00b7 wohnen' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'bei', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'by', type: 'Pr\u00e4position \u00b7 Dativ', why: 'bei + Dativ = at someone\u2019s place (this chapter).', ex: 'bei meiner Familie', exEn: 'with my family' },
      { w: 'meiner', role: 'r-dativ', en: 'my (fem. dat.)', hi: 'अपने', pron: 'MY-ner', type: 'Possessive \u00b7 dative', why: 'bei + Dativ; mein \u2192 meiner (recycled \u2014 Possessiv Dativ).', ex: 'bei meiner Familie', exEn: 'with my family' },
      { w: 'Familie', role: 'r-dativ', en: 'family', hi: 'परिवार', pron: 'fa-MEE-lee-uh', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Familie (recycled \u2014 Familie).', ex: 'bei meiner Familie', exEn: 'with my family' },
      { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
      { w: 'Berlin', role: 'r-place', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Name' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'am', type: 'Preposition' },
      { w: 'Morgen', role: 'r-time', en: 'morning', hi: 'सुबह', pron: 'MOR-gen', type: 'Noun \u00b7 masc.' },
      { w: 'komme', role: 'r-verb', en: 'come', hi: 'निकलती हूँ', pron: 'KO-muh', type: 'Verb \u00b7 kommen' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'aus', role: 'r-preposition', en: 'out of', hi: 'से', pron: 'ows', type: 'Pr\u00e4position \u00b7 Dativ', why: 'aus + Dativ (this chapter).', ex: 'aus dem Haus', exEn: 'out of the house' },
      { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: 'इस', pron: 'daym', type: 'Article \u00b7 dative', why: 'das Haus \u2192 dem Haus (this chapter).', ex: 'aus dem Haus', exEn: 'out of the house' },
      { w: 'Haus', role: 'r-dativ', en: 'house', hi: 'घर', pron: 'hows', type: 'Noun \u00b7 neut. \u00b7 dat.', why: 'das Haus (recycled \u2014 Wohnung).', ex: 'aus dem Haus', exEn: 'out of the house' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'fahre', role: 'r-verb', en: 'travel', hi: 'जाती हूँ', pron: 'FAH-ruh', type: 'Verb \u00b7 fahren' },
      { w: 'mit', role: 'r-preposition', en: 'by', hi: 'से', pron: 'mit', type: 'Pr\u00e4position \u00b7 Dativ', why: 'mit + Dativ for transport (this chapter).', ex: 'mit dem Bus', exEn: 'by bus' },
      { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: 'इस', pron: 'daym', type: 'Article \u00b7 dative' },
      { w: 'Bus', role: 'r-dativ', en: 'bus', hi: 'बस', pron: 'boos', type: 'Noun \u00b7 masc. \u00b7 dat.', why: 'der Bus (recycled \u2014 Verkehr).', ex: 'mit dem Bus', exEn: 'by bus' },
      { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'को', pron: 'tsoor', type: 'Kontraktion \u00b7 zu + der', why: 'zu + der \u2192 zur (this chapter).', ex: 'zur Arbeit', exEn: 'to work' },
      { w: 'Arbeit', role: 'r-dativ', en: 'work', hi: 'काम', pron: 'AR-bite', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Arbeit (recycled \u2014 Arbeit).', ex: 'zur Arbeit', exEn: 'to work' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Fahrerin', role: 'r-subject', en: 'driver (f.)', hi: 'चालक', pron: 'FAH-ruh-rin', type: 'Noun \u00b7 fem.', why: 'die Fahrerin (this chapter).', ex: 'die Fahrerin', exEn: 'the driver' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'I-mer', type: 'Adverb' },
      { w: 'freundlich', role: 'r-adjective', en: 'friendly', hi: 'मिलनसार', pron: 'FROYNT-likh', type: 'Adjective', why: 'freundlich (recycled \u2014 Adjektive).', ex: 'sehr freundlich', exEn: 'very friendly' },
      { w: '.', plain: true },
      { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
      { w: 'B\u00fcro', role: 'r-subject', en: 'office', hi: 'दफ़्तर', pron: 'b\u00fc-ROH', type: 'Noun \u00b7 neut.', why: 'das B\u00fcro (recycled \u2014 Arbeit).', ex: 'mein B\u00fcro', exEn: 'my office' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'gegen\u00fcber', role: 'r-preposition', en: 'opposite', hi: 'के सामने', pron: 'gay-gen-\u00dc-ber', type: 'Pr\u00e4position \u00b7 Dativ', why: 'gegen\u00fcber + Dativ (this chapter).', ex: 'gegen\u00fcber dem Bahnhof', exEn: 'opposite the station' },
      { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: 'इस', pron: 'daym', type: 'Article \u00b7 dative' },
      { w: 'Bahnhof', role: 'r-dativ', en: 'station', hi: 'स्टेशन', pron: 'BAHN-hohf', type: 'Noun \u00b7 masc. \u00b7 dat.', why: 'der Bahnhof (recycled \u2014 Verkehr).', ex: 'gegen\u00fcber dem Bahnhof', exEn: 'opposite the station' },
      { w: ',', plain: true },
      { w: 'neben', role: 'r-preposition', en: 'next to', hi: 'के बगल', pron: 'NAY-ben', type: 'Pr\u00e4position', why: 'neben (this chapter, used with dative for location).', ex: 'neben dem Amt', exEn: 'next to the office' },
      { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: 'इस', pron: 'daym', type: 'Article \u00b7 dative' },
      { w: 'Amt', role: 'r-dativ', en: 'office', hi: 'कार्यालय', pron: 'amt', type: 'Noun \u00b7 neut. \u00b7 dat.', why: 'das Amt (this chapter).', ex: 'neben dem Amt', exEn: 'next to the office' },
      { w: '.', plain: true },
      { w: 'Nach', role: 'r-preposition', en: 'after', hi: 'के बाद', pron: 'nahkh', type: 'Pr\u00e4position \u00b7 Dativ', why: 'nach + Dativ = after (time) (this chapter).', ex: 'nach der Arbeit', exEn: 'after work' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article \u00b7 dative' },
      { w: 'Arbeit', role: 'r-dativ', en: 'work', hi: 'काम', pron: 'AR-bite', type: 'Noun \u00b7 fem. \u00b7 dat.' },
      { w: 'komme', role: 'r-verb', en: 'come', hi: 'आती हूँ', pron: 'KO-muh', type: 'Verb \u00b7 kommen' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', pron: 'oft', type: 'Adverb' },
      { w: 'sp\u00e4t', role: 'r-adjective', en: 'late', hi: 'देर', pron: 'shpayt', type: 'Adjective' },
      { w: 'vom', role: 'r-preposition', en: 'from the', hi: 'से', pron: 'fom', type: 'Kontraktion \u00b7 von + dem', why: 'von + dem \u2192 vom (this chapter).', ex: 'vom B\u00fcro', exEn: 'from the office' },
      { w: 'B\u00fcro', role: 'r-dativ', en: 'office', hi: 'दफ़्तर', pron: 'b\u00fc-ROH', type: 'Noun \u00b7 neut. \u00b7 dat.' },
      { w: 'zur\u00fcck', role: 'r-adverb', en: 'back', hi: 'वापस', pron: 'tsoo-R\u00dcK', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Manchmal', role: 'r-time', en: 'sometimes', hi: 'कभी-कभी', pron: 'MANKH-mahl', type: 'Adverb \u00b7 time' },
      { w: 'gehe', role: 'r-verb', en: 'go', hi: 'जाती हूँ', pron: 'GAY-uh', type: 'Verb \u00b7 gehen' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'mit', role: 'r-preposition', en: 'with', hi: 'साथ', pron: 'mit', type: 'Pr\u00e4position \u00b7 Dativ', why: 'mit + Dativ = company (this chapter).', ex: 'mit den Kollegen', exEn: 'with the colleagues' },
      { w: 'den', role: 'r-dativ', en: 'the (pl. dat.)', hi: 'इन', pron: 'dayn', type: 'Article \u00b7 dative', why: 'plural dative: die \u2192 den + noun -n (this chapter).', ex: 'mit den Kollegen', exEn: 'with the colleagues' },
      { w: 'Kollegen', role: 'r-dativ', en: 'colleagues', hi: 'सहकर्मी', pron: 'ko-LAY-gen', type: 'Noun \u00b7 plural \u00b7 dat.', why: 'der Kollege \u2192 den Kollegen (recycled \u2014 Arbeit).', ex: 'mit den Kollegen', exEn: 'with the colleagues' },
      { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'को', pron: 'tsoor', type: 'Kontraktion \u00b7 zu + der', why: 'zu + der \u2192 zur (this chapter).', ex: 'zur Clubdisco', exEn: 'to the club' },
      { w: 'Clubdisco', role: 'r-dativ', en: 'club', hi: 'क्लब', pron: 'KLUP-dis-ko', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Clubdisco (this chapter).', ex: 'zur Clubdisco', exEn: 'to the club' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'komme', role: 'r-verb', en: 'come', hi: 'आती हूँ', pron: 'KO-muh', type: 'Verb \u00b7 kommen', why: 'kommen aus = origin (this chapter).', ex: 'Ich komme aus Indien.', exEn: 'I come from India.' },
      { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'ows', type: 'Pr\u00e4position \u00b7 Dativ' },
      { w: 'Indien', role: 'r-place', en: 'India', hi: 'भारत', pron: 'IN-dee-en', type: 'Noun \u00b7 country', why: 'aus + country, no article (this chapter).', ex: 'aus Indien', exEn: 'from India' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
      { w: 'Berlin', role: 'r-subject', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Name' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'seit', role: 'r-preposition', en: 'since', hi: 'से', pron: 'zite', type: 'Pr\u00e4position \u00b7 Dativ', why: 'seit + Dativ (this chapter).', ex: 'seit diesem Jahr', exEn: 'since this year' },
      { w: 'diesem', role: 'r-dativ', en: 'this (neut. dat.)', hi: 'इस', pron: 'DEE-zem', type: 'Determiner \u00b7 dative', why: 'dieses Jahr \u2192 diesem Jahr after seit (this chapter).', ex: 'seit diesem Jahr', exEn: 'since this year' },
      { w: 'Jahr', role: 'r-dativ', en: 'year', hi: 'साल', pron: 'yar', type: 'Noun \u00b7 neut. \u00b7 dat.' },
      { w: 'mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
      { w: 'Zuhause', role: 'r-object', en: 'home', hi: 'घर', pron: 'tsoo-HOW-zuh', type: 'Noun \u00b7 neut.', why: 'das Zuhause (recycled \u2014 als/wie).', ex: 'mein Zuhause', exEn: 'my home' },
      { w: '.', plain: true }
    ],
    translation: 'For a year I\u2019ve been living with my family in Berlin. In the morning I come out of the house and travel by bus to work. The driver is always friendly. My office is opposite the station, next to the office (Amt). After work I often come back late from the office. Sometimes I go with my colleagues to the club. I come from India, but Berlin has been my home since this year. \u2014 Watch every dative preposition: seit einem Jahr, bei meiner Familie, aus dem Haus, mit dem Bus, zur Arbeit, gegen\u00fcber dem Bahnhof, nach der Arbeit, vom B\u00fcro, mit den Kollegen.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_013_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Frau Nissen, ich komme gerade von der Post.', en: 'Frau Nissen, I just came from the post office.' },
      { id: 'A2_013_L002', speaker: 'Frau Nissen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und fährst du jetzt zu deinem Kurs?', en: 'And are you going to your course now?' },
      { id: 'A2_013_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ja, mit dem Fahrrad. Seit einer Woche fahre ich immer so.', en: 'Yes, by bike. For a week I\'ve always gone this way.' },
      { id: 'A2_013_L004', speaker: 'Frau Nissen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gut, dann bis bald bei uns im Büro!', en: 'Good, see you soon at our office!' }
    ],
    transcript: 'Frau Nissen, ich komme gerade von der Post. Und fährst du jetzt zu deinem Kurs? Ja, mit dem Fahrrad. Seit einer Woche fahre ich immer so. Gut, dann bis bald bei uns im Büro!',
    translation: 'Frau Nissen, I just came from the post office. And are you going to your course now? Yes, by bike. For a week I\'ve always gone this way. Good, see you soon at our office!',
    tokens: [
      { w: 'Frau' },
      { w: 'Nissen' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'komme' },
      { w: 'gerade' },
      { w: 'von' },
      { w: 'der' },
      { w: 'Post' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'fährst' },
      { w: 'du' },
      { w: 'jetzt' },
      { w: 'zu' },
      { w: 'deinem' },
      { w: 'Kurs' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'mit' },
      { w: 'dem' },
      { w: 'Fahrrad' },
      { w: '.', plain: true },
      { w: 'Seit' },
      { w: 'einer' },
      { w: 'Woche' },
      { w: 'fahre' },
      { w: 'ich' },
      { w: 'immer' },
      { w: 'so' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'bis' },
      { w: 'bald' },
      { w: 'bei' },
      { w: 'uns' },
      { w: 'im' },
      { w: 'Büro' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Woher kommt Timo gerade?', qEn: 'Where did Timo just come from?', options: ['von der Schule', 'von der Post', 'vom Café', 'vom Bahnhof'], optionsEn: ['from school', 'from the post office', 'from the café', 'from the station'], answer: 1,
        explain: '"Ich komme gerade von der Post."' },
      { q: 'Wie kommt er zu seinem Kurs?', qEn: 'How does he get to his course?', options: ['zu Fuß', 'mit dem Bus', 'mit dem Fahrrad', 'mit dem Auto'], optionsEn: ['on foot', 'by bus', 'by bike', 'by car'], answer: 2,
        explain: '"Ja, mit dem Fahrrad."' }
    ]
  },

  speaking: [
    { task: "Auf dem Amt fragt die Beamtin: Seit wann sind Sie in Deutschland?", taskEn: "At the office the official asks: since when have you been in Germany?", de: "Ich bin seit einem Jahr hier, mit meiner Familie.", en: "I've been here for a year, with my family." },
    { task: "Ein Tourist fragt: Wie kommt man zur Polizei?", taskEn: "A tourist asks: how do you get to the police station?", de: "Fahren Sie mit der Straßenbahn bis zum Parlament.", en: "Take the tram to the parliament building." },
    { task: "Deine Nachbarin fragt: Wo warst du heute?", taskEn: "Your neighbour asks: where were you today?", de: "Ich war beim Amt und dann bei meiner Freundin.", en: "I was at the office and then at my friend's." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short paragraph (six sentences) about where you\u2019re from, where you live, how you travel and how long you\u2019ve done something \u2014 using dative prepositions. Include aus, bei, mit, seit and one contraction (zum/zur/vom). Try this chapter\u2019s words: das Amt, die Polizei, der Bahnhof, abheben, gegen\u00fcber.',
    starters: ['Ich komme aus \u2026', 'Ich wohne bei \u2026', 'Ich fahre mit \u2026 zur/zum \u2026', 'Seit \u2026 lerne ich \u2026'],
    placeholder: 'Ich komme aus Indien und wohne seit einem Jahr bei einer Familie. Jeden Tag fahre ich mit dem Bus zur Schule \u2026',
    minWords: 30
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct form: "Ich fahre ___ Bus."',
      options: ['mit den', 'mit dem', 'mit der', 'mit das'],
      answer: 1,
      explain: 'mit + dative; Bus is masculine \u2192 dem Bus.'
    },
    gap: {
      // contraction zu+der then aus + dative masc
      sentence: ['Ich gehe ', ' Schule und komme dann ', ' dem Haus.'],
      gaps: [ { answer: 'zur', accepts: ['zur'] }, { answer: 'aus', accepts: ['aus'] } ],
      explain: 'zu + der \u2192 zur (Schule is feminine); aus + dative for origin.'
    },
    match: {
      q: 'Match each preposition to its meaning.',
      pairs: [
        { noun: 'aus', art: 'origin (from)' },
        { noun: 'bei', art: 'at a person/place' },
        { noun: 'mit', art: 'transport / with' },
        { noun: 'nach', art: 'to a city/country' },
        { noun: 'seit', art: 'since / for (time)' },
        { noun: 'gegen\u00fcber', art: 'opposite' }
      ]
    },
    builder: {
      target: 'Build: "I travel by bus to work."',
      bank: ['Ich', 'fahre', 'mit', 'dem', 'Bus', 'zur', 'Arbeit'],
      answer: ['Ich', 'fahre', 'mit', 'dem', 'Bus', 'zur', 'Arbeit'],
      roles: { 'Ich': 'r-subject', 'fahre': 'r-verb', 'mit': 'r-preposition', 'dem': 'r-dativ', 'Bus': 'r-dativ', 'zur': 'r-preposition', 'Arbeit': 'r-place' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which case do aus, bei, mit, nach, seit, von, zu always take?', options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], answer: 2,
      explain: 'These nine prepositions always take the dative.' },
    { q: 'Complete: "Ich gehe ___ Arzt." (zu + dem)', options: ['zu Arzt', 'zum Arzt', 'zur Arzt', 'zu dem Arzt (unnatural)'], answer: 1,
      explain: 'zu + dem \u2192 zum: zum Arzt.' },
    { q: 'Complete: "Ich komme ___ Schule." (aus, feminine)', options: ['aus die', 'aus der', 'aus dem', 'aus den'], answer: 1,
      explain: 'aus + dative; feminine die \u2192 der: aus der Schule.' },
    { q: 'Which is correct for a destination that is a building?', options: ['nach dem Bahnhof', 'zum Bahnhof', 'in Bahnhof', 'auf Bahnhof'], answer: 1,
      explain: 'For a building/person use zu(m): zum Bahnhof. nach is for cities/countries.' },
    { q: 'Complete the plural: "Ich fahre mit ___." (die Freunde)', options: ['mit die Freunde', 'mit den Freunde', 'mit den Freunden', 'mit dem Freunden'], answer: 2,
      explain: 'Plural dative: den + noun -n \u2192 mit den Freunden.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-preposition', html: 'Nine prepositions are <b>always dative</b>: <span class="de">aus, au\u00dfer, bei, mit, nach, seit, von, zu, gegen\u00fcber</span> \u2014 learn them as a chant.' },
    { c: 'r-dativ', html: 'After them the article shifts: <span class="de">der/das \u2192 <span class="r-dativ">dem</span>, die \u2192 <span class="r-dativ">der</span></span>, plural \u2192 <span class="de r-dativ">den</span> + noun <b>-n</b> (mit den Freunden).' },
    { c: 'r-preposition', html: 'Contract in everyday use: <span class="de">zu dem \u2192 <span class="r-preposition">zum</span>, zu der \u2192 <span class="r-preposition">zur</span>, von dem \u2192 <span class="r-preposition">vom</span></span>. And keep <b>nach</b> (cities) vs <b>zu</b> (people/buildings) apart.' }
  ],
  revisionTips: [
    'Chant the nine: aus, au\u00dfer, bei, mit, nach, seit, von, zu, gegen\u00fcber \u2014 all dative.',
    'Dative articles: dem (m/n), der (f), den + -n (plural).',
    'Everyday contractions: zum, zur, vom. And: nach Berlin (city) but zum Arzt (person/building).'
  ]
};

window.CHAPTER = CHAPTER;
