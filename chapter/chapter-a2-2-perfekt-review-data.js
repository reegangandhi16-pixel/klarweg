/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 1 · Chapter 2
   "Perfekt (Wiederholung)"  (spoken-past review)
   Vocabulary source: uploaded chapter-02 word list (19 items).
   Theme = Monday after the weekend; the class retells it all in
   the Perfekt. PURE A1 grammar — nothing new, only reactivation:
   haben/sein + Partizip II, time expressions, questions, nicht.
   NOTE: content only — existing audio engine, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a2-2-perfekt-review',
  phase: 'A2 · Phase 1',
  number: 2,
  title: 'Perfekt (Wiederholung)',
  titleEn: 'The Spoken Past — Review',
  description: 'Nothing new today — and that\u2019s the point. You learned the Perfekt in A1; now we make it automatic. haben or sein in position 2, Partizip II at the end: Ich habe ein Fahrrad gemietet. Ich bin zum Flohmarkt gegangen. One relaxed chapter of retelling your weekend until the two-part frame runs by itself.',
  xp: 160,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 3, title: 'Artikel (Wiederholung)', titleEn: 'Articles — Review' , href: 'chapter-a2-3-artikel-review.html' },

  prevChapter: { number: 1, title: 'Genitiv: Name + s', titleEn: 'Possession with Names', href: 'chapter-a2-1-genitiv.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Monday morning, week two of the A2 course. Fynn comes in full of weekend stories \u2014 a flea market, a rented bicycle, a horse \u2014 and Insa turns it into the perfect Perfekt workout: haben or sein in position 2, Partizip II at the end. You know every rule already. Today it becomes reflex.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear haben/sein + Partizip II in natural conversation'
    ],
    scene: 'Montagmorgen im A2-Kurs \u2014 Berlin',
    femaleSpeakers: ['Insa'],
    dialogue: [
      { speaker: 'Insa', tokens: [
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'किया', pron: 'hast', type: 'Verb · haben (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition + time' },
        { w: 'Wochenende', role: 'r-time', en: 'weekend', hi: 'सप्ताहांत', pron: 'VO-khen-en-duh', type: 'Noun · time' },
        { w: 'gemacht', role: 'r-verb', en: 'done', hi: 'किया', pron: 'ge-MAKHT', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'What did you do on the weekend?', hi: 'Weekend par tumne kya kiya?' },
      { speaker: 'Fynn', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'went', hi: 'गया', pron: 'bin', type: 'Verb · sein (helper)' },
        { w: 'zum', role: 'r-preposition', en: 'to the', hi: 'में', pron: 'tsoom', type: 'Preposition + place' },
        { w: 'Flohmarkt', role: 'r-akkusativ', en: 'flea market', hi: 'कबाड़ी बाज़ार', pron: 'FLOH-markt', type: 'Noun · masc.', why: 'der Flohmarkt (this chapter).', ex: 'Ich bin zum Flohmarkt gegangen.', exEn: 'I went to the flea market.' },
        { w: 'gegangen', role: 'r-verb', en: 'gone', hi: 'गया', pron: 'ge-GANG-en', type: 'Partizip II · Satzende' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Fahrrad', role: 'r-akkusativ', en: 'bicycle', hi: 'साइकिल', pron: 'FAHR-raht', type: 'Noun · neut.' },
        { w: 'gekauft', role: 'r-verb', en: 'bought', hi: 'खरीदी', pron: 'ge-KOWFT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'I went to the flea market. And I bought a bicycle.', hi: 'Main kabaadi bazaar gaya. Aur maine ek cycle khareedi.' },
      { speaker: 'Insa', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'था', pron: 'hat', type: 'Verb · haben (helper)' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'gekostet', role: 'r-verb', en: 'cost', hi: 'था', pron: 'ge-KOS-tet', type: 'Partizip II · Satzende', why: 'kosten → gekostet (this chapter).', ex: 'Was hat es gekostet?', exEn: 'What did it cost?' },
        { w: '?', plain: true }
      ], en: 'Really? What did it cost?', hi: 'Sach mein? Woh kitne ki thi?' },
      { speaker: 'Fynn', side: 'right', tokens: [
        { w: 'Nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'dreißig', role: 'r-akkusativ', en: 'thirty', hi: 'तीस', pron: 'DRY-sikh', type: 'Number' },
        { w: 'Euro', role: 'r-akkusativ', en: 'euros', hi: 'यूरो', pron: 'OY-ro', type: 'Noun · currency' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'lange', role: 'r-time', en: 'a long time', hi: 'देर तक', pron: 'LANG-uh', type: 'Adverb · time' },
        { w: 'verhandelt', role: 'r-verb', en: 'negotiated', hi: 'मोलभाव किया', pron: 'fer-HAN-delt', type: 'Partizip II · Satzende', why: 'verhandeln → verhandelt: ver- takes no ge- (this chapter).', ex: 'Ich habe verhandelt.', exEn: 'I negotiated.' },
        { w: '.', plain: true }
      ], en: 'Only thirty euros. I negotiated for a long time.', hi: 'Sirf teen Euro. Maine der tak molbhaav kiya.' },
      { speaker: 'Insa', tokens: [
        { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Arbeit', role: 'r-subject', en: 'work', hi: 'काम', pron: 'AR-byte', type: 'Noun · fem.' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'stayed', hi: 'रही', pron: 'bin', type: 'Verb · sein (helper)' },
        { w: 'zu', role: 'r-preposition', en: 'at', hi: 'में', pron: 'tsoo', type: 'Preposition' },
        { w: 'Hause', role: 'r-place', en: 'home', hi: 'घर', pron: 'HOW-zuh', type: 'Noun · place' },
        { w: 'geblieben', role: 'r-verb', en: 'stayed', hi: 'रही', pron: 'ge-BLEE-ben', type: 'Partizip II · Satzende', why: 'bleiben → geblieben (this chapter).', ex: 'Ich bin geblieben.', exEn: 'I stayed.' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'सुनी', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'Musik', role: 'r-akkusativ', en: 'music', hi: 'संगीत', pron: 'mu-ZEEK', type: 'Noun · fem.' },
        { w: 'gehört', role: 'r-verb', en: 'listened to', hi: 'सुनी', pron: 'ge-HÖRT', type: 'Partizip II · Satzende', why: 'hören → gehört (this chapter).', ex: 'Ich habe Musik gehört.', exEn: 'I listened to music.' },
        { w: '.', plain: true }
      ], en: 'Good work! I stayed home and listened to music.', hi: 'Achha kaam! Main ghar par rahi aur sangeet suna.' },
      { speaker: 'Fynn', side: 'right', tokens: [
        { w: 'Klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klingt', type: 'Verb · klingen' },
        { w: 'ruhig', role: 'r-adjective', en: 'peaceful', hi: 'शांत', pron: 'ROO-ikh', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Bist', role: 'r-verb', en: 'have you', hi: 'गई हो', pron: 'bist', type: 'Verb · sein (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'gar', role: 'r-adverb', en: 'not at all', hi: 'बिल्कुल नहीं', pron: 'gahr', type: 'Adverb' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'rausgegangen', role: 'r-verb', en: 'gone out', hi: 'बाहर', pron: 'rows-ge-GANG-en', type: 'Partizip II · Satzende', why: 'rausgehen → rausgegangen (this chapter).', ex: 'Bist du rausgegangen?', exEn: 'Did you go out?' },
        { w: '?', plain: true }
      ], en: 'Sounds peaceful. Did you not go out at all?', hi: 'Shaant lagta hai. Kya tum bilkul bahar nahi gayi?' },
      { speaker: 'Insa', tokens: [
        { w: 'Doch', role: 'r-adverb', en: 'actually yes', hi: 'हाँ', pron: 'dokh', type: 'Reaction' },
        { w: ',', plain: true },
        { w: 'am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition + time' },
        { w: 'Abend', role: 'r-time', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun · time' },
        { w: 'bin', role: 'r-verb', en: 'went', hi: 'गई', pron: 'bin', type: 'Verb · sein (helper)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'spazieren', role: 'r-verb', en: 'walking', hi: 'टहलने', pron: 'shpa-TSEE-ren', type: 'Verb · infinitive' },
        { w: 'gegangen', role: 'r-verb', en: 'gone', hi: 'गई', pron: 'ge-GANG-en', type: 'Partizip II · Satzende', why: 'spazieren gehen → ich bin spazieren gegangen (this chapter).', ex: 'Ich bin spazieren gegangen.', exEn: 'I went for a walk.' },
        { w: '.', plain: true }
      ], en: 'Actually yes, in the evening I went for a walk.', hi: 'Haan, shaam ko main tehalne gayi.' },
      { speaker: 'Fynn', side: 'right', tokens: [
        { w: 'Schön', role: 'r-adjective', en: 'lovely', hi: 'बढ़िया', pron: 'shern', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Nächstes', role: 'r-akkusativ', en: 'next', hi: 'अगले', pron: 'NEKH-stes', type: 'Determiner' },
        { w: 'Wochenende', role: 'r-akkusativ', en: 'weekend', hi: 'सप्ताहांत', pron: 'VO-khen-en-duh', type: 'Noun · time' },
        { w: 'kommst', role: 'r-verb', en: 'are you coming', hi: 'आओगी', pron: 'komst', type: 'Verb · kommen (du)', lexicalUnit: 'mitkommen' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mit', role: 'r-adverb', en: 'along', hi: 'साथ', pron: 'mit', type: 'Separable prefix', lexicalUnit: 'mitkommen' },
        { w: 'zum', role: 'r-preposition', en: 'to the', hi: 'में', pron: 'tsoom', type: 'Preposition + place' },
        { w: 'Flohmarkt', role: 'r-akkusativ', en: 'flea market', hi: 'कबाड़ी बाज़ार', pron: 'FLOH-markt', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'Lovely! Next weekend are you coming along to the flea market?', hi: 'Badhiya! Agle weekend tum saath kabaadi bazaar aaogi?' },
      { speaker: 'Insa', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: '!', plain: true }
      ], en: 'Yes, gladly!', hi: 'Haan, khushi se!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This chapter introduces <strong>nothing new</strong> \u2014 on purpose. The Perfekt is how German talks about the past out loud, and A2 needs it to be automatic, not remembered. The frame you know from A1: <span class="de"><span class="r-verb">haben</span>/<span class="r-verb">sein</span></span> in position 2, <span class="de"><span class="r-verb">Partizip II</span></span> at the very end \u2014 <span class="de">Ich <span class="r-verb">habe</span> ein Fahrrad <span class="r-verb">gemietet</span>. Ich <span class="r-verb">bin</span> zum Flohmarkt <span class="r-verb">gegangen</span>.</span> We retell one weekend until choosing haben or sein takes zero thought \u2014 with the time words that trigger the Perfekt: <span class="de">gestern, heute Morgen, am Wochenende, letzte Woche, schon, noch nicht</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner reviewing the PERFEKT (A1 level only \u2014 no new structures). ' +
    'Frame: haben/sein conjugated in position 2, Partizip II at the end. sein for movement/change (gegangen, gefahren, geritten, gefolgt, geboren) and bleiben/sein; haben for everything else, incl. reflexive f\u00fchlen. ' +
    'Time words: gestern, heute Morgen, am Wochenende, letzte Woche, schon, noch nicht. ' +
    'The learner wrote about their weekend below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- Verb in position 2, Partizip II last: "Gestern habe ich ein Buch gekauft."\n' +
    '- sein + Partizip II for movement/change of state: bin gegangen, bin gefahren, bin geritten, bin gefolgt, bin geboren, bin geblieben. haben otherwise.\n' +
    '- Separable verbs keep ge- inside: teilgenommen, ausgew\u00e4hlt, zugeh\u00f6rt, angemeldet. Inseparable be-/ver-/er- take no ge-: beendet, besucht, verstanden, begr\u00fcndet.\n' +
    '- Stems ending in -t take -et: gemietet, beendet, geantwortet.\n' +
    '- nicht stands before the final Partizip: "Ich habe das nicht verstanden." noch nicht = not yet; schon = already.\n' +
    '- Front time phrase is fine, verb stays second: "Am Wochenende bin ich \u2026 gegangen."\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why. If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>Perfekt check:</b> one sentence on haben vs sein choices and Partizip position.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'The Perfekt frame is automatic again \u2014 exactly what A2 needs. Next: <span class="de">Artikel (Wiederholung)</span>.',
    mid: 'Good. Say the sein-list out loud once more (gegangen, gefahren, geritten, gefolgt, geboren), then continue.',
    low: 'Worth another pass \u2014 focus on one choice only: haben or sein? Movement and change take sein; everything else haben. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Gestern', role: 'r-time' }, { w: 'habe', role: 'r-verb' },
    { w: 'ich', role: 'r-subject' }, { w: 'ein', role: 'r-article' },
    { w: 'Fahrrad', role: 'r-object' }, { w: 'gemietet', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See why A2 pauses here: the Perfekt must become automatic.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Monday morning \u2014 the whole weekend retold in the Perfekt.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: mieten, ausw\u00e4hlen, teilnehmen, zuh\u00f6ren, der Flohmarkt, der Aufenthalt.' },
    { id: 'grammar',    label: 'Perfekt',    tag: 'core',
      objective: 'Re-drill haben vs sein, the Partizip-final frame, time words, questions and nicht.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read Rohans weekend in Potsdam \u2014 every past form clickable.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Follow a classroom talk about choosing and justifying a topic.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Retell your own weekend in the Perfekt, out loud.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write six sentences about last weekend \u2014 haben and sein both.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill haben vs sein, Partizip forms and word order with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Vocabulary PDF',
      desc: 'The chapter words \u2014 mieten, ausw\u00e4hlen, teilnehmen, der Flohmarkt, der Aufenthalt and more \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Homework PDF',
      desc: 'haben vs sein drills, Partizip II formation, word-order practice, and a weekend-diary task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Grammar Rules PDF',
      desc: 'The Perfekt frame, the sein-list, separable and inseparable participles, time expressions, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich habe \u2026 gemietet', text: 'Build the haben frame without thinking' },
    { de: 'Ich bin \u2026 gegangen', text: 'Pick sein for movement and change' },
    { de: 'Hast du schon \u2026 beendet?', text: 'Ask questions in the Perfekt' },
    { de: 'noch nicht \u00b7 letzte Woche', text: 'Anchor the past with time words' },
    { de: 'Ich habe das nicht verstanden', text: 'Negate with nicht before the Partizip' }
  ],

  // ---------- Vocabulary (19 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'mieten', pos: 'verb', en: 'to rent', hi: 'किराए पर लेना', ex: 'Ich habe ein Fahrrad gemietet.', exEn: 'I rented a bicycle.', conj: { praesens: 'mietet', praeteritum: 'mietete', perfekt: 'hat gemietet' } },
    { de: 'ausw\u00e4hlen', pos: 'verb', en: 'to choose, to select (separable)', hi: 'चुनना', ex: 'Ich habe einen Podcast ausgew\u00e4hlt.', exEn: 'I chose a podcast.', conj: { praesens: 'w\u00e4hlt aus', praeteritum: 'w\u00e4hlte aus', perfekt: 'hat ausgew\u00e4hlt' } },
    { de: 'teilnehmen', pos: 'verb', en: 'to take part, to participate (separable, an + Dat.)', hi: 'भाग लेना', ex: 'Ich habe an einem Workshop teilgenommen.', exEn: 'I took part in a workshop.', conj: { praesens: 'nimmt teil', praeteritum: 'nahm teil', perfekt: 'hat teilgenommen' } },
    { de: 'zuh\u00f6ren', pos: 'verb', en: 'to listen (separable, + Dat.)', hi: 'ध्यान से सुनना', ex: 'Ich habe dem Sprecher gut zugeh\u00f6rt.', exEn: 'I listened carefully to the speaker.', conj: { praesens: 'h\u00f6rt zu', praeteritum: 'h\u00f6rte zu', perfekt: 'hat zugeh\u00f6rt' } },
    { de: 'beenden', pos: 'verb', en: 'to finish, to end', hi: 'ख़त्म करना', ex: 'Hast du den Kurs schon beendet?', exEn: 'Have you already finished the course?', conj: { praesens: 'beendet', praeteritum: 'beendete', perfekt: 'hat beendet' } },
    { de: 'Flohmarkt', art: 'der', gender: 'm', plural: 'Flohm\u00e4rkte', pos: 'noun', en: 'flea market', hi: 'पुराने सामान का बाज़ार', ex: 'Ich bin am Samstag zum Flohmarkt gegangen.', exEn: 'On Saturday I went to the flea market.' },
    // ===== Active Support =====
    { de: 'fühlen', pos: 'verb', en: 'to feel (sich f\u00fchlen)', hi: 'महसूस करना', ex: 'Ich habe mich ganz frei gef\u00fchlt.', exEn: 'I felt completely free.', conj: { praesens: 'f\u00fchlt', praeteritum: 'f\u00fchlte', perfekt: 'hat gef\u00fchlt' } },
    { de: 'folgen', pos: 'verb', en: 'to follow (+ Dat., with sein)', hi: 'पीछे चलना, समझ पाना', ex: 'Ich bin der Grammatik nicht gefolgt.', exEn: 'I couldn\u2019t follow the grammar.', conj: { praesens: 'folgt', praeteritum: 'folgte', perfekt: 'ist gefolgt' } },
    { de: 'reiten', pos: 'verb', en: 'to ride a horse; horseback riding', hi: 'घुड़सवारी करना', ex: 'Max ist am Sonntag geritten.', exEn: 'Max went horse-riding on Sunday.', conj: { praesens: 'reitet', praeteritum: 'ritt', perfekt: 'ist geritten' } },
    { de: 'geboren', pos: 'adjective', en: 'born (with sein)', hi: 'पैदा हुआ', ex: 'Der Sprecher ist in Wien geboren.', exEn: 'The speaker was born in Vienna.' },
    { de: 'begr\u00fcnden', pos: 'verb', en: 'to justify, to give reasons', hi: 'कारण बताना', ex: 'Bitte begr\u00fcnde deine Wahl.', exEn: 'Please justify your choice.', conj: { praesens: 'begr\u00fcndet', praeteritum: 'begr\u00fcndete', perfekt: 'hat begr\u00fcndet' } },
    { de: 'Stadtzentrum', art: 'das', gender: 'n', plural: 'Stadtzentren', pos: 'noun', en: 'city centre', hi: 'शहर का केंद्र', ex: 'Das Stadtzentrum habe ich auch besucht.', exEn: 'I also visited the city centre.' },
    { de: 'Aufenthalt', art: 'der', gender: 'm', plural: 'Aufenthalte', pos: 'noun', en: 'stay', hi: 'प्रवास, ठहराव', ex: 'Mein Aufenthalt in Potsdam war kurz.', exEn: 'My stay in Potsdam was short.' },
    { de: 'Sinn', art: 'der', gender: 'm', plural: 'Sinne', pos: 'noun', en: 'sense, meaning', hi: 'मतलब', ex: 'Jetzt macht es Sinn!', exEn: 'Now it makes sense!' },
    { de: 'also', pos: 'adverb', en: 'so, well then', hi: 'तो, इसलिए', ex: 'Also, jetzt machen wir die \u00dcbungen!', exEn: 'So, now let\u2019s do the exercises!' },
    { de: 'von \u2026 nach', pos: 'preposition', en: 'from \u2026 to', hi: 'से \u2026 तक', ex: 'Ich bin von Mitte nach Kreuzberg gefahren.', exEn: 'I rode from Mitte to Kreuzberg.' },
    // ===== Passive =====
    { de: 'Akzent', art: 'der', gender: 'm', plural: 'Akzente', pos: 'noun', en: 'stress, accent', hi: 'बलाघात, उच्चारण', ex: 'Der Akzent liegt auf dem Partizip.', exEn: 'The stress falls on the participle.' },
    { de: 'Satzakzent', art: 'der', gender: 'm', plural: 'Satzakzente', pos: 'noun', en: 'sentence stress', hi: 'वाक्य का बलाघात', ex: 'Achtet auf den Satzakzent!', exEn: 'Pay attention to the sentence stress!' },
    { de: 'Pr\u00e4sens', art: 'das', gender: 'n', plural: '\u2014', pos: 'noun', en: 'present tense', hi: 'वर्तमान काल', ex: 'Heute wiederholen wir das Perfekt, nicht das Pr\u00e4sens.', exEn: 'Today we review the Perfekt, not the present tense.' }
  ],

  // ---------- Perfekt review (rule cards → accordion) ----------
  grammar: [
    {
      title: 'The frame: haben/sein in position 2, Partizip II at the end',
      goldenRule: 'Helper in <b>position 2</b>, Partizip II at the <b>very end</b>. Only the helper changes.',
      formula: [
        'Ich <b>habe</b> ein Fahrrad <b>gemietet</b>.',
        'Gestern <b>habe</b> ich eine Lampe <b>gekauft</b>.',
        '        \u2191 position 2            \u2191 end'
      ],
      memoryTrick: 'Do sire wala bracket: helper <b>shuru</b> mein, Partizip <b>ant</b> mein. Beech mein baaki sab. Time word aage aa jaaye to bhi helper apni seat nahi chhodta.',
      body: [
        'Every Perfekt sentence is a <strong>bracket</strong>: the helper verb (haben or sein) sits in position 2, and the Partizip II waits at the very end. Everything else lives inside the bracket.'
      ],
      table: {
        head: ['Position 1', 'Position 2', 'Middle', 'End'],
        rows: [
          ['<span class="de">Ich</span>', '<span class="de r-verb">habe</span>', '<span class="de">ein Fahrrad</span>', '<span class="de r-verb">gemietet</span>'],
          ['<span class="de r-time">Gestern</span>', '<span class="de r-verb">habe</span>', '<span class="de">ich eine Lampe</span>', '<span class="de r-verb">gekauft</span>'],
          ['<span class="de">Ich</span>', '<span class="de r-verb">bin</span>', '<span class="de">zum Flohmarkt</span>', '<span class="de r-verb">gegangen</span>'],
          ['<span class="de r-time">Am Wochenende</span>', '<span class="de r-verb">bin</span>', '<span class="de">ich nach Potsdam</span>', '<span class="de r-verb">gefahren</span>']
        ]
      },
      note: 'A time phrase in front (Gestern, Am Wochenende \u2026) does <b>not</b> move the helper \u2014 it stays in position 2, and the subject slips behind it. The Partizip never leaves the end.',
      hinglish: 'Perfekt ek bracket hai: helper verb (haben/sein) position 2 par, Partizip II sabse aakhir mein. "Gestern habe ich ein Buch gekauft" \u2014 time word aage aaye toh bhi helper position 2 par hi rehta hai.'
    },
    {
      title: 'haben or sein? Movement and change take sein',
      goldenRule: 'Default <b>haben</b>. <b>sein</b> only for movement A\u2192B, change of state, plus <b>sein</b> and <b>bleiben</b>.',
      memoryTrick: 'Ek sawaal poochho: subject <b>khud kahin gaya</b> ya <b>khud badla</b>? Haan \u2192 sein. Warna \u2192 haben. Reflexive verbs hamesha haben lete hain.',
      recap: [
        'Movement A\u2192B \u2192 <b>sein</b> (gegangen, gefahren, geritten).',
        'Change of state \u2192 <b>sein</b> (geboren).',
        'Everything else \u2192 <b>haben</b>, including all reflexive verbs.'
      ],
      body: [
        'Most verbs take <strong>haben</strong>. A small, closed group takes <strong>sein</strong>: movement from A to B, change of state, plus bleiben and sein itself. This chapter\u2019s sein-verbs:'
      ],
      table: {
        head: ['sein + Partizip II', 'Why', 'haben + Partizip II'],
        rows: [
          ['<span class="de">ich <span class="r-verb">bin gegangen</span></span>', 'movement', '<span class="de">ich <span class="r-verb">habe gekauft</span></span>'],
          ['<span class="de">ich <span class="r-verb">bin gefahren</span></span>', 'movement', '<span class="de">ich <span class="r-verb">habe gemietet</span></span>'],
          ['<span class="de">ich <span class="r-verb">bin geritten</span></span>', 'movement', '<span class="de">ich <span class="r-verb">habe zugeh\u00f6rt</span></span>'],
          ['<span class="de">ich <span class="r-verb">bin gefolgt</span></span>', 'movement (+ Dat.)', '<span class="de">ich <span class="r-verb">habe teilgenommen</span></span>'],
          ['<span class="de">ich <span class="r-verb">bin geboren</span></span>', 'change of state', '<span class="de">ich <span class="r-verb">habe mich gef\u00fchlt</span></span>']
        ]
      },
      note: 'Say the sein-five of this chapter out loud like a chant: <b>gegangen, gefahren, geritten, gefolgt, geboren</b>. Reflexive verbs (sich f\u00fchlen) always take <b>haben</b>.',
      hinglish: 'Zyada-tar verbs <b>haben</b> lete hain. <b>sein</b> sirf tab aata hai jab movement ho \u2014 kahin jaana, chalna, horse riding karna \u2014 ya jab koi state badal jaaye, jaise <b>geboren</b>. Is chapter ke paanch <b>sein</b>-verbs yaad rakho: <b>gegangen, gefahren, geritten, gefolgt, geboren</b>.'
    },
    {
      title: 'Partizip II shapes \u2014 regular, irregular, separable',
      goldenRule: 'Regular <b>ge\u2026t</b> \u00b7 irregular <b>ge\u2026en</b> \u00b7 separable puts <b>ge</b> in the middle \u00b7 inseparable takes <b>no ge</b>.',
      formula: [
        'kaufen     \u2192  <b>ge</b>kauf<b>t</b>',
        'reiten     \u2192  <b>ge</b>ritt<b>en</b>',
        'teilnehmen \u2192  teil<b>ge</b>nommen',
        'beenden    \u2192  beendet        (no ge)'
      ],
      memoryTrick: '<b>ge</b> ki teen jagah hain: aage, beech mein, ya kahin nahi. Prefix decide karta hai \u2014 guess nahi karna.',
      body: [
        'You know all three patterns from A1. This chapter\u2019s verbs cover every one:'
      ],
      table: {
        head: ['Pattern', 'Verb', 'Partizip II'],
        rows: [
          ['ge- + stem + -t', '<span class="de">kaufen</span>', '<span class="de r-verb">gekauft</span>'],
          ['stem ends in -t \u2192 -et', '<span class="de">mieten</span>', '<span class="de r-verb">gemietet</span>'],
          ['irregular: ge- \u2026 -en', '<span class="de">reiten</span>', '<span class="de r-verb">geritten</span>'],
          ['separable: prefix + ge-', '<span class="de">teilnehmen</span>', '<span class="de r-verb">teilgenommen</span>'],
          ['separable: prefix + ge-', '<span class="de">ausw\u00e4hlen / zuh\u00f6ren</span>', '<span class="de r-verb">ausgew\u00e4hlt / zugeh\u00f6rt</span>'],
          ['inseparable: no ge-', '<span class="de">beenden / begr\u00fcnden / besuchen</span>', '<span class="de r-verb">beendet / begr\u00fcndet / besucht</span>']
        ]
      },
      note: 'Separable verbs tuck <b>ge-</b> inside: teil<b>ge</b>nommen, aus<b>ge</b>w\u00e4hlt, zu<b>ge</b>h\u00f6rt. Inseparable prefixes (be-, ver-, er-) take <b>no ge- at all</b>: beendet, verstanden.',
      hinglish: 'Partizip ke teen shapes hain. Regular verbs <b>ge-\u2026-t</b> lete hain, jaise <b>gekauft</b> aur <b>gemietet</b>. Irregular verbs <b>ge-\u2026-en</b> lete hain, jaise <b>geritten</b> aur <b>gegangen</b>. Separable verbs mein <b>ge-</b> beech mein aa jaata hai: <b>teilgenommen</b>. Aur <b>be-</b> ya <b>ver-</b> wale verbs mein <b>ge-</b> bilkul nahi lagta: <b>beendet</b>, <b>verstanden</b>.'
    },
    {
      title: 'Time expressions that call the Perfekt',
      body: [
        'These words anchor a sentence in the past \u2014 hear one, expect the Perfekt frame around it:'
      ],
      table: {
        head: ['Time word', 'Meaning', 'Example'],
        rows: [
          ['<span class="de r-time">gestern</span>', 'yesterday', '<span class="de">Gestern habe ich Deutsch gelernt.</span>'],
          ['<span class="de r-time">heute Morgen</span>', 'this morning', '<span class="de">Heute Morgen habe ich zugeh\u00f6rt.</span>'],
          ['<span class="de r-time">am Wochenende</span>', 'on the weekend', '<span class="de">Am Wochenende bin ich geritten.</span>'],
          ['<span class="de r-time">letzte Woche</span>', 'last week', '<span class="de">Letzte Woche habe ich teilgenommen.</span>'],
          ['<span class="de r-time">schon</span>', 'already', '<span class="de">Ich habe schon gegessen.</span>'],
          ['<span class="de r-time">noch nicht</span>', 'not yet', '<span class="de">Ich habe noch nicht gegessen.</span>']
        ]
      },
      note: '<b>schon</b> and <b>noch nicht</b> are a pair \u2014 the question "Hast du <b>schon</b> \u2026?" invites either "Ja, ich habe schon \u2026" or "Nein, <b>noch nicht</b>."',
      hinglish: 'Yeh time words sunte hi Perfekt ka frame taiyaar rakho. schon = "ho gaya", noch nicht = "abhi nahi hua". "Hast du schon gegessen?" \u2192 "Nein, noch nicht."'
    },
    {
      title: 'Questions and nicht in the Perfekt',
      body: [
        'Questions reuse the same bracket. W-questions put the question word first, helper second; Ja/Nein questions put the helper first. nicht stands right before the final Partizip.'
      ],
      table: {
        head: ['Type', 'Example', 'Pattern'],
        rows: [
          ['W-Frage', '<span class="de"><span class="r-question">Was</span> <span class="r-verb">hast</span> du am Wochenende <span class="r-verb">gemacht</span>?</span>', 'W-word \u00b7 helper \u00b7 \u2026 \u00b7 Partizip'],
          ['W-Frage', '<span class="de"><span class="r-question">Wo</span> <span class="r-verb">bist</span> du <span class="r-verb">geboren</span>?</span>', 'W-word \u00b7 helper \u00b7 \u2026 \u00b7 Partizip'],
          ['Ja/Nein', '<span class="de"><span class="r-verb">Hast</span> du den Kurs schon <span class="r-verb">beendet</span>?</span>', 'helper \u00b7 subject \u00b7 \u2026 \u00b7 Partizip'],
          ['Negation', '<span class="de">Ich <span class="r-verb">habe</span> das <span class="r-negation">nicht</span> <span class="r-verb">verstanden</span>.</span>', 'nicht right before the Partizip']
        ]
      },
      note: 'The Partizip <b>never moves</b> \u2014 not for questions, not for negation. Only the front of the sentence changes.',
      hinglish: 'Sawaal mein bhi bracket wahi rehta hai: "Was hast du gemacht?", "Hast du beendet?". nicht aksar Partizip ke theek pehle aata hai: "Ich habe das nicht verstanden."'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four Perfekt traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich habe gegangen.', right: 'Ich bin gegangen.', why: 'Movement takes sein, not haben \u2014 gehen, fahren, reiten, folgen.' },
        { wrong: 'Ich habe gemietet ein Fahrrad.', right: 'Ich habe ein Fahrrad gemietet.', why: 'The Partizip goes to the END \u2014 not right after haben like English "have rented".' },
        { wrong: 'Ich habe geteilnehmen.', right: 'Ich habe teilgenommen.', why: 'Separable verbs put ge- INSIDE: teil-ge-nommen, aus-ge-w\u00e4hlt, zu-ge-h\u00f6rt.' },
        { wrong: 'Ich habe gebeendet.', right: 'Ich habe beendet.', why: 'Inseparable be- verbs take no ge- at all: beendet, besucht, begr\u00fcndet.' }
      ],
      hinglish: 'Char galtiyan common hain. Movement wale verbs <b>sein</b> lete hain: <b>Ich bin gegangen</b>. Partizip ko sentence ke end mein rakhna hai, English wala order nahi chalega. Separable verbs mein <b>ge-</b> andar aata hai: <b>teilgenommen</b>. Aur <b>be-</b> wale verbs mein <b>ge-</b> nahi lagta: <b>beendet</b>.'
    }
  ],

  // ---------- Reading passage (Rohans Wochenende, clickable) ----------
  reading: {
    title: 'Mein Aufenthalt in Potsdam',
    titleEn: 'My stay in Potsdam',
    tokens: [
      { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
      { w: 'Aufenthalt', role: 'r-subject', en: 'stay', hi: 'प्रवास', pron: 'OWF-ent-halt', type: 'Noun \u00b7 masc.', why: 'der Aufenthalt (this chapter).', ex: 'mein Aufenthalt in Potsdam', exEn: 'my stay in Potsdam' },
      { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
      { w: 'Potsdam', role: 'r-place', en: 'Potsdam', hi: 'पोट्सडैम', pron: 'POTS-dam', type: 'Place name' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb \u00b7 sein (Pr\u00e4t.)', why: 'war \u2014 the simple past of sein (recycled \u2014 Pr\u00e4teritum von sein/haben).', ex: 'Es war sch\u00f6n.', exEn: 'It was nice.' },
      { w: 'kurz', role: 'r-adjective', en: 'short', hi: 'छोटा', pron: 'koorts', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
      { w: 'sch\u00f6n', role: 'r-adjective', en: 'lovely', hi: 'सुंदर', pron: 'sh\u00f6n', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'on', hi: 'को', pron: 'am', type: 'Preposition \u00b7 time' },
      { w: 'Samstag', role: 'r-time', en: 'Saturday', hi: 'शनिवार', pron: 'ZAMS-tahk', type: 'Noun \u00b7 day' },
      { w: 'bin', role: 'r-verb', en: 'am (travelled)', hi: 'गया', pron: 'bin', type: 'Verb \u00b7 sein', why: 'fahren = movement \u2192 sein (recycled \u2014 Perfekt mit sein).', ex: 'Ich bin gefahren.', exEn: 'I travelled.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition', why: 'von \u2026 nach = from \u2026 to (this chapter).', ex: 'von Berlin nach Potsdam', exEn: 'from Berlin to Potsdam' },
      { w: 'Berlin', role: 'r-place', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Place name' },
      { w: 'nach', role: 'r-preposition', en: 'to', hi: 'तक', pron: 'nahkh', type: 'Preposition' },
      { w: 'Potsdam', role: 'r-place', en: 'Potsdam', hi: 'पोट्सडैम', pron: 'POTS-dam', type: 'Place name' },
      { w: 'gefahren', role: 'r-verb', en: 'travelled', hi: 'गया', pron: 'guh-FAH-ren', type: 'Partizip II \u00b7 fahren', why: 'ist gefahren \u2014 movement (recycled \u2014 Perfekt mit sein).', ex: 'Ich bin nach Potsdam gefahren.', exEn: 'I travelled to Potsdam.' },
      { w: '.', plain: true },
      { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरे', pron: 'mine', type: 'Possessive' },
      { w: 'Opa', role: 'r-subject', en: 'grandpa', hi: 'दादा', pron: 'OH-pa', type: 'Noun \u00b7 masc.', why: 'der Opa (recycled \u2014 Familie).', ex: 'mein Opa', exEn: 'my grandpa' },
      { w: 'ist', role: 'r-verb', en: 'is (was)', hi: 'हुए', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb \u00b7 place' },
      { w: 'geboren', role: 'r-verb', en: 'born', hi: 'पैदा हुए', pron: 'guh-BO-ren', type: 'Partizip \u00b7 geboren', why: 'geboren sein (this chapter).', ex: 'Er ist dort geboren.', exEn: 'He was born there.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'देखा', pron: 'HAH-buh', type: 'Verb \u00b7 haben' },
      { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'यह', pron: 'das', type: 'Article \u00b7 acc.' },
      { w: 'Stadtzentrum', role: 'r-object', en: 'city centre', hi: 'शहर का केंद्र', pron: 'SHTAT-tsen-troom', type: 'Noun \u00b7 neut.', why: 'das Stadtzentrum (this chapter).', ex: 'das Stadtzentrum besuchen', exEn: 'to visit the city centre' },
      { w: 'besucht', role: 'r-verb', en: 'visited', hi: 'देखा', pron: 'buh-ZOOKHT', type: 'Partizip II \u00b7 besuchen', why: 'be- \u2192 no ge- (recycled \u2014 Perfekt).', ex: 'Ich habe es besucht.', exEn: 'I visited it.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article \u00b7 acc.' },
      { w: 'Fahrrad', role: 'r-object', en: 'bicycle', hi: 'साइकिल', pron: 'FAR-raht', type: 'Noun \u00b7 neut.' },
      { w: 'gemietet', role: 'r-verb', en: 'rented', hi: 'किराए पर ली', pron: 'guh-MEE-tet', type: 'Partizip II \u00b7 mieten', why: 'mieten \u2192 gemietet, -t stem takes -et (this chapter).', ex: 'Ich habe ein Fahrrad gemietet.', exEn: 'I rented a bicycle.' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'in the', hi: 'को', pron: 'am', type: 'Preposition \u00b7 time' },
      { w: 'Nachmittag', role: 'r-time', en: 'afternoon', hi: 'दोपहर', pron: 'NAHKH-mi-tahk', type: 'Noun \u00b7 masc.', why: 'der Nachmittag (recycled \u2014 Zeitangaben).', ex: 'am Nachmittag', exEn: 'in the afternoon' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'लिया', pron: 'HAH-buh', type: 'Verb \u00b7 haben' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'an', role: 'r-preposition', en: 'in', hi: 'में', pron: 'an', type: 'Preposition', why: 'teilnehmen an + Dativ (this chapter).', ex: 'an einer Tour teilnehmen', exEn: 'to join a tour' },
      { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', pron: 'INE-er', type: 'Article \u00b7 dative' },
      { w: 'Stadttour', role: 'r-object', en: 'city tour', hi: 'सिटी टूर', pron: 'SHTAT-toor', type: 'Noun \u00b7 fem.' },
      { w: 'teilgenommen', role: 'r-verb', en: 'taken part', hi: 'भाग लिया', pron: 'TILE-guh-no-men', type: 'Partizip II \u00b7 teilnehmen', why: 'separable \u2192 teil-ge-nommen (this chapter).', ex: 'Ich habe teilgenommen.', exEn: 'I took part.' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Guide', role: 'r-subject', en: 'guide', hi: 'गाइड', pron: 'gide', type: 'Noun \u00b7 masc.' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'बोला', pron: 'hat', type: 'Verb \u00b7 haben' },
      { w: 'langsam', role: 'r-adverb', en: 'slowly', hi: 'धीरे', pron: 'LANG-zahm', type: 'Adverb', why: 'langsam (recycled \u2014 Adjektive).', ex: 'Er spricht langsam.', exEn: 'He speaks slowly.' },
      { w: 'gesprochen', role: 'r-verb', en: 'spoken', hi: 'बोला', pron: 'guh-SHPRO-khen', type: 'Partizip II \u00b7 sprechen', why: 'irregular: gesprochen (recycled \u2014 Perfekt).', ex: 'Er hat gesprochen.', exEn: 'He spoke.' },
      { w: ',', plain: true },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'सुना', pron: 'HAH-buh', type: 'Verb \u00b7 haben' },
      { w: 'gut', role: 'r-adverb', en: 'carefully', hi: 'ध्यान से', pron: 'goot', type: 'Adverb' },
      { w: 'zugeh\u00f6rt', role: 'r-verb', en: 'listened', hi: 'सुना', pron: 'TSOO-guh-h\u00f6rt', type: 'Partizip II \u00b7 zuh\u00f6ren', why: 'separable \u2192 zu-ge-h\u00f6rt (this chapter).', ex: 'Ich habe gut zugeh\u00f6rt.', exEn: 'I listened carefully.' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'in the', hi: 'को', pron: 'am', type: 'Preposition \u00b7 time' },
      { w: 'Abend', role: 'r-time', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun \u00b7 masc.', why: 'der Abend (recycled \u2014 Zeitangaben).', ex: 'am Abend', exEn: 'in the evening' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb \u00b7 haben' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article \u00b7 acc.' },
      { w: 'Tag', role: 'r-object', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun \u00b7 masc.' },
      { w: 'beendet', role: 'r-verb', en: 'ended', hi: 'ख़त्म किया', pron: 'buh-EN-det', type: 'Partizip II \u00b7 beenden', why: 'be- \u2192 no ge-: beendet (this chapter).', ex: 'Ich habe den Tag beendet.', exEn: 'I ended the day.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'खुद को', pron: 'mikh', type: 'Pronoun \u00b7 acc.' },
      { w: 'm\u00fcde', role: 'r-adjective', en: 'tired', hi: 'थका हुआ', pron: 'M\u00dc-duh', type: 'Adjective', why: 'm\u00fcde (recycled \u2014 Adjektive).', ex: 'Ich bin m\u00fcde.', exEn: 'I am tired.' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
      { w: 'gl\u00fccklich', role: 'r-adjective', en: 'happy', hi: 'खुश', pron: 'GL\u00dcK-likh', type: 'Adjective', why: 'gl\u00fccklich (recycled \u2014 Adjektive).', ex: 'Ich bin gl\u00fccklich.', exEn: 'I am happy.' },
      { w: 'gef\u00fchlt', role: 'r-verb', en: 'felt', hi: 'महसूस किया', pron: 'guh-F\u00dcLT', type: 'Partizip II \u00b7 f\u00fchlen', why: 'sich f\u00fchlen + haben (this chapter).', ex: 'Ich habe mich gut gef\u00fchlt.', exEn: 'I felt good.' },
      { w: '.', plain: true }
    ],
    translation: 'My stay in Potsdam was short but lovely. On Saturday I travelled from Berlin to Potsdam. My grandpa was born there. I visited the city centre and rented a bicycle. In the afternoon I took part in a city tour. The guide spoke slowly, and I listened carefully. In the evening I ended the day and felt tired but happy. \u2014 Notice every bracket: bin \u2026 gefahren, habe \u2026 gemietet, habe \u2026 teilgenommen \u2014 helper second, Partizip last, every time.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_002_L001', speaker: 'Insa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Fynn, was hast du am Wochenende gemacht?', en: 'Fynn, what did you do at the weekend?' },
      { id: 'A2_002_L002', speaker: 'Fynn', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich bin gewandert und habe ein Foto von einem Fuchs gemacht!', en: 'I went hiking and took a photo of a fox!' },
      { id: 'A2_002_L003', speaker: 'Insa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Wow! Ich habe einen Kochkurs besucht und viel gelernt.', en: 'Wow! I attended a cooking class and learned a lot.' },
      { id: 'A2_002_L004', speaker: 'Fynn', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Hast du auch etwas Neues gekocht?', en: 'Did you also cook something new?' },
      { id: 'A2_002_L005', speaker: 'Insa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, ich habe eine Suppe gemacht. Sie ist gut geworden!', en: 'Yes, I made a soup. It turned out well!' }
    ],
    transcript: 'Fynn, was hast du am Wochenende gemacht? Ich bin gewandert und habe ein Foto von einem Fuchs gemacht! Wow! Ich habe einen Kochkurs besucht und viel gelernt. Hast du auch etwas Neues gekocht? Ja, ich habe eine Suppe gemacht. Sie ist gut geworden!',
    translation: 'Fynn, what did you do at the weekend? I went hiking and took a photo of a fox! Wow! I attended a cooking class and learned a lot. Did you also cook something new? Yes, I made a soup. It turned out well!',
    tokens: [
      { w: 'Fynn' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'hast' },
      { w: 'du' },
      { w: 'am' },
      { w: 'Wochenende' },
      { w: 'gemacht' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'bin' },
      { w: 'gewandert' },
      { w: 'und' },
      { w: 'habe' },
      { w: 'ein' },
      { w: 'Foto' },
      { w: 'von' },
      { w: 'einem' },
      { w: 'Fuchs' },
      { w: 'gemacht' },
      { w: '!', plain: true },
      { w: 'Wow' },
      { w: '!', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'einen' },
      { w: 'Kochkurs' },
      { w: 'besucht' },
      { w: 'und' },
      { w: 'viel' },
      { w: 'gelernt' },
      { w: '.', plain: true },
      { w: 'Hast' },
      { w: 'du' },
      { w: 'auch' },
      { w: 'etwas' },
      { w: 'Neues' },
      { w: 'gekocht' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'eine' },
      { w: 'Suppe' },
      { w: 'gemacht' },
      { w: '.', plain: true },
      { w: 'Sie' },
      { w: 'ist' },
      { w: 'gut' },
      { w: 'geworden' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was hat Fynn fotografiert?', qEn: 'What did Fynn photograph?', options: ['einen Hund', 'einen Fuchs', 'einen Vogel', 'eine Katze'], optionsEn: ['a dog', 'a fox', 'a bird', 'a cat'], answer: 1,
        explain: '"… habe ein Foto von einem Fuchs gemacht!"' },
      { q: 'Was hat Insa im Kochkurs gemacht?', qEn: 'What did Insa make in her cooking class?', options: ['einen Kuchen', 'eine Suppe', 'Brot', 'Pizza'], optionsEn: ['a cake', 'a soup', 'bread', 'pizza'], answer: 1,
        explain: '"Ich habe eine Suppe gemacht."' }
    ]
  },

  speaking: [
    { task: "Am Montag fragt eine Kollegin: Was hast du am Wochenende gemacht?", taskEn: "On Monday a colleague asks: what did you do at the weekend?", de: "Ich bin auf den Flohmarkt gegangen und habe zwei Bücher gekauft.", en: "I went to the flea market and bought two books." },
    { task: "Dein Freund fragt: Wie war der Aufenthalt im Stadtzentrum?", taskEn: "Your friend asks: how was your stay in the city centre?", de: "Wir haben ein Zimmer gemietet und viel Musik gehört.", en: "We rented a room and listened to a lot of music." },
    { task: "Deine Lehrerin fragt: Wo bist du geboren und was hast du dort gemacht?", taskEn: "Your teacher asks: where were you born and what did you do there?", de: "Ich bin in Indien geboren. Dort habe ich an einem Kurs teilgenommen.", en: "I was born in India. There I took part in a course." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write six sentences about your last weekend in the Perfekt. Use at least two sein-verbs (gegangen, gefahren, geritten, gefolgt, geboren) and two haben-verbs, one time expression per sentence (gestern, am Wochenende, letzte Woche, heute Morgen), and one sentence with schon or noch nicht. Try this chapter\u2019s verbs: mieten, ausw\u00e4hlen, teilnehmen, zuh\u00f6ren, beenden.',
    starters: ['Am Wochenende bin ich \u2026', 'Gestern habe ich \u2026', 'Letzte Woche habe ich an \u2026 teilgenommen.', 'Ich habe noch nicht \u2026'],
    placeholder: 'Am Samstag bin ich zum Flohmarkt gegangen. Dort habe ich eine Lampe gekauft \u2026',
    minWords: 30
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct helper verb: "Ich ___ am Sonntag geritten."',
      options: ['habe', 'bin', 'hat', 'ist'],
      answer: 1,
      explain: 'reiten is movement \u2192 sein: Ich bin geritten.'
    },
    gap: {
      sentence: ['Gestern habe ich ein Fahrrad ', ' und bin ins Stadtzentrum ', '.'],
      gaps: [ { answer: 'gemietet', accepts: ['gemietet'] }, { answer: 'gefahren', accepts: ['gefahren'] } ],
      explain: 'mieten \u2192 gemietet (haben); fahren \u2192 gefahren (sein). Both Partizips stand at the end of their clause.'
    },
    match: {
      q: 'Match each infinitive to its Perfekt form.',
      pairs: [
        { noun: 'gehen', art: 'ist gegangen' },
        { noun: 'mieten', art: 'hat gemietet' },
        { noun: 'teilnehmen', art: 'hat teilgenommen' },
        { noun: 'reiten', art: 'ist geritten' },
        { noun: 'beenden', art: 'hat beendet' }
      ]
    },
    builder: {
      target: 'Build: "On the weekend I went to the flea market."',
      bank: ['Am Wochenende', 'bin', 'ich', 'zum', 'Flohmarkt', 'gegangen'],
      answer: ['Am Wochenende', 'bin', 'ich', 'zum', 'Flohmarkt', 'gegangen'],
      roles: { 'Am Wochenende': 'r-time', 'bin': 'r-verb', 'ich': 'r-subject', 'zum': 'r-preposition', 'Flohmarkt': 'r-place', 'gegangen': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which sentence is correct?', options: ['Ich habe zum Flohmarkt gegangen.', 'Ich bin zum Flohmarkt gegangen.', 'Ich bin zum Flohmarkt gekauft.', 'Ich gegangen bin zum Flohmarkt.'], answer: 1,
      explain: 'gehen = movement \u2192 sein, and the Partizip stands at the end: Ich bin zum Flohmarkt gegangen.' },
    { q: 'What is the Partizip II of "teilnehmen"?', options: ['geteilnehmt', 'teilnehmt', 'teilgenommen', 'genommenteil'], answer: 2,
      explain: 'Separable verb \u2192 ge- goes inside: teil-ge-nommen.' },
    { q: 'Complete: "Hast du den Kurs ___ beendet?" (already)', options: ['noch nicht', 'schon', 'gestern nicht', 'nie'], answer: 1,
      explain: 'schon = already: Hast du den Kurs schon beendet?' },
    { q: 'Where does "nicht" go? "Ich habe das ___ ___."', options: ['nicht verstanden', 'verstanden nicht', 'nicht habe verstanden', 'verstehen nicht'], answer: 0,
      explain: 'nicht stands right before the final Partizip: Ich habe das nicht verstanden.' },
    { q: 'Why does "Ich bin in Delhi geboren" use sein?', options: ['geboren is a movement verb', 'geboren describes a change of state', 'sein is always used with places', 'it is an exception with no rule'], answer: 1,
      explain: 'Being born is a change of state \u2014 like movement verbs, it takes sein.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'The frame never changes: <span class="de">haben/sein</span> in position 2, <span class="de">Partizip II</span> at the very end \u2014 <span class="de">Ich habe ein Fahrrad gemietet.</span>' },
    { c: 'r-verb', html: 'Movement and change take <span class="de">sein</span>: <span class="de">bin gegangen, bin gefahren, bin geritten, bin gefolgt, bin geboren</span>. Everything else: haben.' },
    { c: 'r-time', html: 'Time words trigger the Perfekt: <span class="de">gestern, heute Morgen, am Wochenende, letzte Woche</span> \u2014 and the pair <span class="de">schon / noch nicht</span>.' }
  ],
  revisionTips: [
    'Chant the sein-five of this chapter: gegangen, gefahren, geritten, gefolgt, geboren.',
    'Separable = ge- inside (teilgenommen, ausgew\u00e4hlt, zugeh\u00f6rt); be- verbs = no ge- (beendet, besucht, begr\u00fcndet).',
    'Every evening, say three sentences about your day in the Perfekt \u2014 the frame becomes reflex in a week.'
  ]
};

window.CHAPTER = CHAPTER;
