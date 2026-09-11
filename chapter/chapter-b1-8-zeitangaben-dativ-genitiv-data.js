/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 8
   "Zeitangaben: Dativ & Genitiv" — advanced B1 time expressions.
   Teaches ONLY: everyday Dativ time expressions (am Montag, im
   Sommer, in der Nacht…), literary/formal Genitiv time
   expressions (eines Tages, Anfang des Monats, Mitte der
   Woche…), chronological adverbs (zuerst, danach, anschließend,
   schließlich…), and the common B1 time prepositions (während,
   vor, nach, seit, bis, ab). Deliberately does NOT introduce
   temporal Nebensätze (nachdem, sobald, ehe, seitdem) or other
   B2 time connectors.
   Vocabulary source: uploaded chapter-08 list (32 items — a
   travel/holiday-booking theme: Ferienhaus, Skigebiet, ICE,
   Reisebüro-Mitarbeiter, Halbpension, Vollpension, …).
   Every vocab entry carries: de/art/gender/plural/pos/level/en/
   hi/ex+exEn+exHi/advanced{synonyms,opposites,collocations}
   where natural — one full example per word (per this
   chapter's spec).
============================================================ */
const CHAPTER = {
  id: 'b1-8-zeitangaben-dativ-genitiv',
  phase: 'B1 · Phase 1',
  number: 8,
  title: 'Zeitangaben: Dativ & Genitiv',
  titleEn: 'Time expressions: Dativ & Genitiv',
  description: 'Am Montag arbeite ich. Eines Tages möchte ich nach Deutschland ziehen. Anfang des Monats bekomme ich mein Gehalt. This chapter sharpens how you talk about time — the everyday Dativ expressions you use constantly (am Montag, im Sommer), and the more literary Genitiv expressions found in stories, newspapers, and formal writing (eines Tages, Anfang des Jahres, Mitte der Woche).',
  xp: 240,
  time: 45,
  difficulty: 'Intermediate',
  nextChapter: { number: 9, title: 'Goethe Mini 2', titleEn: 'Goethe Checkpoint 2 — Präteritum & Zeitangaben' , href: 'chapter-b1-9-goethe-mini-2.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'At the travel agency, Timo books a winter holiday and Frau Petersen answers with deadlines and travel times — a week for confirmation, a day\'s journey by train — mixing everyday Dativ time phrases with the more literary Genitiv ones.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear everyday Dativ time expressions and literary Genitiv ones side by side'
    ],
    scene: 'Im Reisebüro',
    femaleSpeakers: ['Frau Petersen'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'möchte', role: 'r-modalverb', en: 'would like', hi: 'चाहता हूँ', pron: 'MÖKH-tuh', type: 'Modal · möchten (ich)' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Winterurlaub', role: 'r-akkusativ', en: 'winter vacation', hi: 'शीतकालीन छुट्टी', pron: 'VIN-ter-oor-lowp', type: 'Noun · masc.', why: 'der Winterurlaub (this chapter).', ex: 'Ich buche einen Winterurlaub.', exEn: 'I book a winter vacation.' },
        { w: 'buchen', role: 'r-verb', en: 'book', hi: 'बुक करना', pron: 'BOO-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I would like to book a winter vacation.', hi: 'Main shitkaalin chhutti book karna chahta hoon.' },
      { speaker: 'Frau Petersen', side: 'right', tokens: [
        { w: 'Gern', role: 'r-adverb', en: 'gladly', hi: 'ख़ुशी से', pron: 'gairn', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Innerhalb', role: 'r-preposition', en: 'within', hi: 'के भीतर', pron: 'I-ner-halp', type: 'Preposition + genitive', why: 'innerhalb + genitive = within (this chapter).', ex: 'innerhalb einer Woche', exEn: 'within a week' },
        { w: 'einer', role: 'r-dativ', en: 'a (fem. gen.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · genitive' },
        { w: 'Woche', role: 'r-dativ', en: 'week (gen.)', hi: 'हफ़्ते के', pron: 'VO-khuh', type: 'Noun · fem. genitive' },
        { w: 'bekommen', role: 'r-verb', en: 'get', hi: 'मिलता है', pron: 'be-KO-men', type: 'Verb · bekommen' },
        { w: 'Sie', role: 'r-akkusativ', en: 'you (formal)', hi: 'आपको', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Antwort', role: 'r-akkusativ', en: 'answer', hi: 'जवाब', pron: 'ANT-vort', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Gladly. Within a week you get an answer.', hi: 'Khushi se. Ek hafte ke bheetar aapko jawaab milega.' },
      { speaker: 'Timo', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
        { w: 'weit', role: 'r-akkusativ', en: 'far', hi: 'दूर', pron: 'vyte', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Skigebiet', role: 'r-subject', en: 'ski area', hi: 'स्की क्षेत्र', pron: 'SHEE-ge-beet', type: 'Noun · neut.', why: 'das Skigebiet (this chapter).', ex: 'Das Skigebiet ist weit.', exEn: 'The ski area is far.' },
        { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition + dative' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: '?', plain: true }
      ], en: 'Good. How far is the ski area from here?', hi: 'Achha. Yahaan se ski kshetra kitna door hai?' },
      { speaker: 'Frau Petersen', side: 'right', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'liegt', role: 'r-verb', en: 'lies', hi: 'है', pron: 'leekt', type: 'Verb · liegen' },
        { w: 'innerhalb', role: 'r-preposition', en: 'within', hi: 'के भीतर', pron: 'I-ner-halp', type: 'Preposition + genitive' },
        { w: 'eines', role: 'r-dativ', en: 'a (masc. gen.)', hi: 'एक', pron: 'EYE-nes', type: 'Article · genitive' },
        { w: 'Tages', role: 'r-dativ', en: 'day (gen.)', hi: 'दिन के', pron: 'TAH-ges', type: 'Noun · masc. genitive', why: 'der Tag (this chapter).', ex: 'innerhalb eines Tages', exEn: 'within a day' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'से', pron: 'mit', type: 'Preposition' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Zug', role: 'r-dativ', en: 'train (dat.)', hi: 'ट्रेन से', pron: 'tsook', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'It lies within a day with the train.', hi: 'Yeh train se ek din ke bheetar pahunch jaata hai.' },
      { speaker: 'Timo', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'वह', pron: 'das', type: 'Article · neut.' },
        { w: 'Frühstück', role: 'r-subject', en: 'breakfast', hi: 'नाश्ता', pron: 'FRÜ-shtük', type: 'Noun · neut.' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Preis', role: 'r-dativ', en: 'price (dat.)', hi: 'कीमत में', pron: 'pryse', type: 'Noun · masc. dat.' },
        { w: 'enthalten', role: 'r-verb', en: 'included', hi: 'शामिल', pron: 'ent-HAL-ten', type: 'Adjective', why: 'enthalten sein = to be included (this chapter).', ex: 'Ist das Frühstück enthalten?', exEn: 'Is breakfast included?' },
        { w: '?', plain: true }
      ], en: 'Perfect! Is breakfast included in the price?', hi: 'Badhiya! Kya keemat mein nashta shaamil hai?' },
      { speaker: 'Frau Petersen', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'sogar', role: 'r-adverb', en: 'even', hi: 'यहां तक कि', pron: 'zo-GAHR', type: 'Adverb' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'वह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Halbpension', role: 'r-subject', en: 'half board', hi: 'अर्ध-बोर्ड', pron: 'HALP-pen-zyon', type: 'Noun · fem.', why: 'die Halbpension (this chapter).', ex: 'Die Halbpension ist enthalten.', exEn: 'Half board is included.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'enthalten', role: 'r-verb', en: 'included', hi: 'शामिल', pron: 'ent-HAL-ten', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Yes, even half board is included.', hi: 'Haan, halbpension bhi shaamil hai.' },
      { speaker: 'Timo', tokens: [
        { w: 'Wunderbar', role: 'r-subject', en: 'wonderful', hi: 'अद्भुत', pron: 'vun-der-BAHR', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'buche', role: 'r-verb', en: 'book', hi: 'बुक करता हूँ', pron: 'BOO-khuh', type: 'Verb · buchen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Zimmer', role: 'r-akkusativ', en: 'room', hi: 'कमरा', pron: 'TSI-mer', type: 'Noun · neut.' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Wonderful! Then I will book the room now.', hi: 'Adbhut! Toh main abhi kamra book karta hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Two registers for time. <b>Everyday Dativ</b> — the expressions you use constantly: <span class="de">am Montag, im Sommer, in der Nacht.</span> <b>Literary Genitiv</b> — the more formal, story-like expressions found in narration and news: <span class="de">eines Tages, Anfang des Monats, Mitte der Woche.</span> Add chronological adverbs (<span class="de">zuerst, danach, anschließend, schließlich</span>) to put events in order, and the six B1 time prepositions (<span class="de">während, vor, nach, seit, bis, ab</span>) to place them precisely.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ZEITANGABEN MIT DATIV UND GENITIV (B1 level only): everyday Dativ time expressions (am Montag, am Wochenende, im Sommer, im Winter, in der Nacht), literary/formal Genitiv time expressions (eines Tages, eines Morgens, eines Abends, eines Nachts, eines Jahres, Anfang des Monats, Ende des Jahres, Mitte der Woche, Anfang der Ferien, Ende des Unterrichts), chronological adverbs (zuerst, danach, anschließend, später, früher, gleich, inzwischen, schließlich, am Ende), and the six common B1 time prepositions (während, vor, nach, seit, bis, ab) with their required cases. ' +
    'Do NOT expect or require temporal Nebensätze (nachdem, sobald, ehe, seitdem) or other B2 time connectors — those are out of scope for this chapter; do not flag their absence and do not correct toward them. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Everyday time expressions with am/im/in der take the Dativ: "am Montag" not "am Montags"; "im Sommer" not "im Sommers"; the preposition contracts with the article (an+dem→am, in+dem→im).\n' +
    '- Genitiv time expressions need the Genitiv article AND noun ending: "eines Tages" (not "eines Tag"), "Anfang des Monats" (not "Anfang dem Monats"), "Ende des Jahres" (not "Ende den Jahres"), "Mitte der Woche" (der for feminine Woche, no ending on Woche itself).\n' +
    '- Never use im/am with a Genitiv-style formal expression or vice versa: "im Montag" and "am Sommer" are both wrong — weekdays take am, seasons/months take im.\n' +
    '- The six time prepositions each require a specific case: während + Genitiv, vor + Dativ, nach + Dativ, seit + Dativ, bis + Akkusativ (or no case with a bare date), ab + Dativ. Flag a wrong case after any of these six.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Register check:</b> one sentence on whether Dativ (everyday) vs. Genitiv (literary/formal) time expressions were used appropriately for the text type.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you move fluently between everyday Dativ time expressions and literary Genitiv ones. Move on to Goethe Mini 2.',
    mid: 'Good. Re-read the Dativ vs. Genitiv comparison table once — especially the Genitiv noun endings — then continue.',
    low: 'Worth another pass — revisit the Grammar section (especially the time-preposition case table), then retake.'
  },

  parserSentence: [
    { w: 'Eines', role: 'r-genitiv' }, { w: 'Tages', role: 'r-genitiv' },
    { w: 'fuhr', role: 'r-verb' }, { w: 'ich', role: 'r-subject' },
    { w: 'nach', role: 'plain' }, { w: 'Berlin', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: everyday Dativ time expressions vs. literary Genitiv ones.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Friends plan a winter holiday at a travel agency, using Dativ and Genitiv time expressions.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 32 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master Dativ and Genitiv time expressions, chronological adverbs, and time prepositions.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style travel report using a variety of time expressions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch Dativ and Genitiv time expressions in natural speech.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe your daily routine, holidays, and schedules using time expressions.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a travel report or diary entry using time expressions naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Dativ vs. Genitiv classification and correct case endings.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 240 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 32 chapter words — Ferienhaus, Skigebiet, ICE, Reisebüro-Mitarbeiter, Halbpension, Vollpension — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Dativ vs. Genitiv classification drills, correct-case practice, timeline ordering, and a travel-report writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Zeitangaben reference — Dativ and Genitiv time-expression tables, chronological adverbs, time-preposition cases, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Am Montag arbeite ich.', text: 'Use everyday Dativ time expressions' },
    { de: 'Eines Tages möchte ich nach Deutschland ziehen.', text: 'Use literary Genitiv time expressions' },
    { de: 'Zuerst … danach … schließlich …', text: 'Put events in chronological order' },
    { de: 'während / vor / nach / seit / bis / ab', text: 'Use the six B1 time prepositions with the right case' },
    { de: 'Anfang des Monats / Mitte der Woche', text: 'Handle Genitiv noun endings correctly' }
  ],

  // ---------- Vocabulary (32 items — full chapter-08 upload list) ----------
  vocab: [
    { de: 'auf (Ohren auf!)', pos: 'idiom', level: 'B1', en: 'up (listen up!)', hi: 'ध्यान से सुनो!', ex: 'Ohren auf, jetzt kommt die Zugnummer!', exEn: 'Listen up, here comes the train number!', exHi: 'Dhyan se suno, ab train number aa raha hai!' },
    { de: 'ca.', pos: 'abbreviation', level: 'B1', en: 'approx.', hi: 'लगभग', ex: 'Die Fahrt dauert ca. drei Stunden.', exEn: 'The trip takes approx. three hours.', exHi: 'Yatra lagbhag teen ghante ki hai.' },
    { de: 'derselbe', pos: 'pronoun', level: 'B1', en: 'the same', hi: 'वही', ex: 'Wir buchten dasselbe Hotel wie letztes Jahr.', exEn: 'We booked the same hotel as last year.', exHi: 'Humne pichhle saal wala hi hotel book kiya.' },
    { de: 'Entfernung', art: 'die', gender: 'f', plural: 'Entfernungen', pos: 'noun', level: 'B1', en: 'distance', hi: 'दूरी', ex: 'Die Entfernung zum Skigebiet war gering.', exEn: 'The distance to the ski resort was small.', exHi: 'Ski resort tak ki doori kam thi.' },
    { de: 'Halbpension', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'half board', hi: 'आधा भोजन योजना', ex: 'Wir buchten das Zimmer mit Halbpension.', exEn: 'We booked the room with half board.', exHi: 'Humne aadha bhojan yojana ke saath kamra book kiya.' },
    { de: 'Vollpension', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'full board', hi: 'पूर्ण भोजन योजना', ex: 'Mit Vollpension mussten wir nie einkaufen.', exEn: 'With full board, we never had to shop.', exHi: 'Poorn bhojan yojana ke saath, humein kabhi kharidari nahi karni padi.' },
    { de: 'enthalten sein', pos: 'verb', level: 'B1', en: 'to be included (in + Dativ)', hi: 'शामिल होना', ex: 'Das Frühstück ist im Preis enthalten.', exEn: 'Breakfast is included in the price.', exHi: 'Nashta keemat mein shaamil hai.' },
    { de: 'gründlich', pos: 'adjective', level: 'B1', en: 'thorough', hi: 'गहन', ex: 'Sie plante die Reise sehr gründlich.', exEn: 'She planned the trip very thoroughly.', exHi: 'Usne yatra ki bahut gehan tareeke se yojana banayi.' },
    { de: 'höchstens', pos: 'adverb', level: 'B1', en: 'at the most', hi: 'ज़्यादा से ज़्यादा', ex: 'Die Fahrtzeit beträgt höchstens drei Stunden.', exEn: 'The travel time is at most three hours.', exHi: 'Yatra ka samay zyada se zyada teen ghante hai.' },
    { de: 'rechtzeitig', pos: 'adjective', level: 'B1', en: 'on time', hi: 'समय पर', ex: 'Kommen Sie bitte rechtzeitig zum Bahnhof.', exEn: 'Please come to the station on time.', exHi: 'Kripya station par samay par aayein.' },
    { de: 'schick', pos: 'adjective', level: 'B1', en: 'fancy', hi: 'शानदार', ex: 'Das Wellnesshotel sah sehr schick aus.', exEn: 'The spa hotel looked very fancy.', exHi: 'Spa hotel bahut shaandaar dikhta tha.' },
    { de: 'Ferienhaus', art: 'das', gender: 'n', plural: 'Ferienhäuser', pos: 'noun', level: 'B1', en: 'holiday home', hi: 'छुट्टी का घर', ex: 'Wir mieteten ein Ferienhaus am See.', exEn: 'We rented a holiday home by the lake.', exHi: 'Humne jheel ke paas chutti ka ghar kiraye par liya.' },
    { de: 'Gepäckband', art: 'das', gender: 'n', plural: 'Gepäckbänder', pos: 'noun', level: 'B1', en: 'baggage conveyor belt', hi: 'सामान की पट्टी', ex: 'Unser Koffer kam als Letzter aufs Gepäckband.', exEn: 'Our suitcase was the last on the conveyor belt.', exHi: 'Hamara suitcase saaman ki patti par sabse aakhri mein aaya.' },
    { de: 'Gästehaus', art: 'das', gender: 'n', plural: 'Gästehäuser', pos: 'noun', level: 'B1', en: 'guest house', hi: 'अतिथि गृह', ex: 'Das kleine Gästehaus war sehr gemütlich.', exEn: 'The small guest house was very cosy.', exHi: 'Chota atithi grih bahut aaramdayak tha.' },
    { de: 'Skigebiet', art: 'das', gender: 'n', plural: 'Skigebiete', pos: 'noun', level: 'B1', en: 'ski resort', hi: 'स्की रिज़ॉर्ट', ex: 'Hätten Sie auch ein Skigebiet in der Nähe?', exEn: 'Would you also have a ski resort nearby?', exHi: 'Kya aapke paas paas mein koi ski resort bhi hoga?' },
    { de: 'Urlaubsziel', art: 'das', gender: 'n', plural: 'Urlaubsziele', pos: 'noun', level: 'B1', en: 'holiday destination', hi: 'छुट्टी की मंज़िल', ex: 'Unser Urlaubsziel war noch nicht entschieden.', exEn: 'Our holiday destination wasn\'t decided yet.', exHi: 'Hamari chutti ki manzil abhi tak tay nahi thi.' },
    { de: 'Wellnesshotel', art: 'das', gender: 'n', plural: 'Wellnesshotels', pos: 'noun', level: 'B1', en: 'spa hotel', hi: 'स्पा होटल', ex: 'Im Winter ist unser Wellnesshotel sehr beliebt.', exEn: 'In winter, our spa hotel is very popular.', exHi: 'Sardiyon mein, hamara spa hotel bahut lokpriya hai.' },
    { de: 'Hauptbahnhof', art: 'der', gender: 'm', plural: 'Hauptbahnhöfe', pos: 'noun', level: 'B1', en: 'central station', hi: 'मुख्य रेलवे स्टेशन', ex: 'Der Zug fährt vom Hauptbahnhof ab.', exEn: 'The train departs from the central station.', exHi: 'Train central station se rawana hoti hai.' },
    { de: 'ICE', art: 'der', gender: 'm', plural: 'ICEs', pos: 'noun', level: 'B1', en: 'ICE (high-speed train)', hi: 'तेज़ रफ़्तार ट्रेन', ex: 'Wir nahmen den ICE nach München.', exEn: 'We took the ICE to Munich.', exHi: 'Humne Munich ke liye ICE li.' },
    { de: 'Reisebüro-Mitarbeiter', art: 'der', gender: 'm', plural: 'Reisebüro-Mitarbeiter', pos: 'noun', level: 'B1', en: 'travel agent', hi: 'यात्रा एजेंट', ex: 'Der Reisebüro-Mitarbeiter half uns sehr gründlich.', exEn: 'The travel agent helped us very thoroughly.', exHi: 'Yatra ejent ne humaari bahut gehraai se madad ki.' },
    { de: 'Skibus', art: 'der', gender: 'm', plural: 'Skibusse', pos: 'noun', level: 'B1', en: 'ski bus', hi: 'स्की बस', ex: 'Nach der Ankunft nehmen Sie einfach den Skibus.', exEn: 'After arrival, you simply take the ski bus.', exHi: 'Aane ke baad, aap bas ski bus le lein.' },
    { de: 'Skilift', art: 'der', gender: 'm', plural: 'Skilifte', pos: 'noun', level: 'B1', en: 'ski lift', hi: 'स्की लिफ़्ट', ex: 'Der Skilift öffnet um acht Uhr.', exEn: 'The ski lift opens at eight o\'clock.', exHi: 'Ski lift aath baje khulti hai.' },
    { de: 'Tiergarten', art: 'der', gender: 'm', plural: 'Tiergärten', pos: 'noun', level: 'B1', en: 'zoo', hi: 'चिड़ियाघर', ex: 'Am Wochenende besuchten wir den Tiergarten.', exEn: 'On the weekend, we visited the zoo.', exHi: 'Weekend par, humne chidiyaghar dekha.' },
    { de: 'Typ', art: 'der', gender: 'm', plural: 'Typen', pos: 'noun', level: 'B1', en: 'type', hi: 'प्रकार', ex: 'Welcher Typ Urlaub gefällt dir?', exEn: 'Which type of holiday do you like?', exHi: 'Tumhein kaunsa prakaar ki chutti pasand hai?' },
    { de: 'Urlaubstyp', art: 'der', gender: 'm', plural: 'Urlaubstypen', pos: 'noun', level: 'B1', en: 'holiday type', hi: 'छुट्टी का प्रकार', ex: 'Sie ist eher der ruhige Urlaubstyp.', exEn: 'She\'s rather the calm holiday type.', exHi: 'Woh chutti ke maamle mein zyada shaant prakaar ki hai.' },
    { de: 'Wellness-Bereich', art: 'der', gender: 'm', plural: 'Wellness-Bereiche', pos: 'noun', level: 'B1', en: 'spa area', hi: 'स्पा क्षेत्र', ex: 'Der Wellness-Bereich ist schon gegen sieben Uhr geöffnet.', exEn: 'The spa area is already open around seven o\'clock.', exHi: 'Spa kshetra lagbhag saat baje khula hota hai.' },
    { de: 'Winterurlaub', art: 'der', gender: 'm', plural: 'Winterurlaube', pos: 'noun', level: 'B1', en: 'winter holiday', hi: 'सर्दियों की छुट्टी', ex: 'Am Wochenende möchten wir einen Winterurlaub buchen.', exEn: 'On the weekend, we\'d like to book a winter holiday.', exHi: 'Weekend par, hum sardiyon ki chutti book karna chahte hain.' },
    { de: 'Bushaltestelle', art: 'die', gender: 'f', plural: 'Bushaltestellen', pos: 'noun', level: 'B1', en: 'bus stop', hi: 'बस स्टॉप', ex: 'Die Bushaltestelle war direkt vor dem Hotel.', exEn: 'The bus stop was right in front of the hotel.', exHi: 'Bus stop hotel ke seedhe saamne tha.' },
    { de: 'Fahrtzeit', art: 'die', gender: 'f', plural: 'Fahrtzeiten', pos: 'noun', level: 'B1', en: 'travel time', hi: 'यात्रा का समय', ex: 'Wie lang ist die Fahrtzeit mit dem ICE?', exEn: 'How long is the travel time with the ICE?', exHi: 'ICE ke saath yatra ka samay kitna hai?' },
    { de: 'Reisebüro-Mitarbeiterin', art: 'die', gender: 'f', plural: 'Reisebüro-Mitarbeiterinnen', pos: 'noun', level: 'B1', en: 'travel agent (female)', hi: 'महिला यात्रा एजेंट', ex: 'Die Reisebüro-Mitarbeiterin erstellte sofort die Buchung.', exEn: 'The travel agent immediately created the booking.', exHi: 'Mahila yatra ejent ne turant booking banayi.' },
    { de: 'Schifffahrt', art: 'die', gender: 'f', plural: 'Schifffahrten', pos: 'noun', level: 'B1', en: 'boat trip', hi: 'नाव यात्रा', ex: 'Mitte der Woche gäbe es auch eine Schifffahrt.', exEn: 'In the middle of the week, there would also be a boat trip.', exHi: 'Hafte ke beech mein, ek naav yatra bhi hogi.' },
    { de: 'Zugnummer', art: 'die', gender: 'f', plural: 'Zugnummern', pos: 'noun', level: 'B1', en: 'train number', hi: 'ट्रेन नंबर', ex: 'Anschließend schicke ich Ihnen die Zugnummer rechtzeitig.', exEn: 'Afterwards I\'ll send you the train number on time.', exHi: 'Uske baad main aapko train number samay par bhej doongi.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Zwei Register für Zeit',
      body: [
        'German time expressions come in two flavours: <b>everyday Dativ</b> expressions you use constantly in speech, and <b>literary/formal Genitiv</b> expressions common in stories, newspapers, and Goethe B1 reading texts.'
      ],
      example: [
        { html: '<span class="de">am Montag</span> (everyday Dativ) vs. <span class="de">eines Tages</span> (literary Genitiv)' },
        { html: '<span class="de">im Sommer</span> (everyday Dativ) vs. <span class="de">Anfang des Jahres</span> (literary Genitiv)' }
      ],
      hinglish: 'German time expressions do tarah ke hote hain: everyday Dativ jo bolchaal mein hamesha use hota hai, aur literary/formal Genitiv jo kahaniyon, akhbaaron, aur Goethe B1 reading mein aam hai.'
    },
    {
      title: 'Dativ-Zeitangaben (Alltag)',
      body: [
        'Most everyday time expressions use the Dativ, contracted with an/in: am (an dem) for weekdays and parts of the day; im (in dem) for seasons and months; in der for night.'
      ],
      table: {
        head: ['Expression', 'Meaning'],
        rows: [
          ['am Montag', 'on Monday'],
          ['am Wochenende', 'on the weekend'],
          ['am Morgen / Nachmittag / Abend', 'in the morning / afternoon / evening'],
          ['in der Nacht', 'at night'],
          ['im Sommer / Winter / Frühling / Herbst', 'in summer / winter / spring / autumn']
        ]
      },
      example: [
        { html: '<span class="de">Am Montag arbeite ich.</span>' },
        { html: '<span class="de">Im Sommer fahren wir ans Meer.</span>' },
        { html: '<span class="de">In der Nacht war es sehr kalt.</span>' }
      ],
      hinglish: 'Zyada tar everyday time expressions Dativ use karte hain, an/in ke saath contract hoke: am (weekdays, din ke hisse), im (seasons, mahine), in der (raat).'
    },
    {
      title: 'Genitiv-Zeitangaben (literarisch/formell)',
      body: [
        'These formal, story-like expressions are common in narration, newspapers, and Goethe B1 reading — masculine/neuter nouns need the -s/-es ending, feminine nouns need none.'
      ],
      table: {
        head: ['Expression', 'Meaning'],
        rows: [
          ['eines Tages / Morgens / Abends / Nachts / Jahres', 'one day / morning / evening / night / year'],
          ['Anfang des Monats', 'at the beginning of the month'],
          ['Ende des Jahres', 'at the end of the year'],
          ['Mitte der Woche', 'in the middle of the week'],
          ['Anfang der Ferien', 'at the start of the holidays'],
          ['Ende des Unterrichts', 'at the end of class']
        ]
      },
      example: [
        { html: '<span class="de">Eines Tages möchte ich nach Deutschland ziehen.</span>' },
        { html: '<span class="de">Anfang des Monats bekomme ich mein Gehalt.</span>' },
        { html: '<span class="de">Mitte der Woche habe ich viel Arbeit.</span>' }
      ],
      hinglish: 'Yeh formal, story-like expressions narration, akhbaaron, aur Goethe B1 reading mein aam hain — masculine/neuter nouns ko -s/-es ending chahiye, feminine nouns ko koi ending nahi.'
    },
    {
      title: 'Chronologische Ausdrücke',
      body: [
        'Use these adverbs to put events in order in a story or routine — none of them require a special case, they simply start or link a clause.'
      ],
      table: {
        head: ['Adverb', 'Meaning'],
        rows: [
          ['zuerst', 'first'], ['danach', 'after that'], ['anschließend', 'subsequently'],
          ['später', 'later'], ['früher', 'earlier, in the past'], ['gleich', 'right away'],
          ['inzwischen', 'meanwhile'], ['schließlich', 'finally'], ['am Ende', 'in the end']
        ]
      },
      example: [
        { html: '<span class="de">Zuerst frühstückte ich. Danach ging ich zur Arbeit. Anschließend kaufte ich ein. Schließlich kam ich nach Hause.</span>' }
      ],
      hinglish: 'Yeh adverbs kisi kahani ya routine mein events ko order mein rakhte hain — inme koi khaas case nahi chahiye, yeh bas ek clause ko shuru ya jodte hain.'
    },
    {
      title: 'Zeitpräpositionen & ihre Fälle',
      body: [
        'The six most common B1 time prepositions, each with its required case.'
      ],
      table: {
        head: ['Preposition', 'Case', 'Example'],
        rows: [
          ['während', 'Genitiv', '<span class="de">während des Unterrichts</span>'],
          ['vor', 'Dativ', '<span class="de">vor dem Essen</span>'],
          ['nach', 'Dativ', '<span class="de">nach dem Unterricht</span>'],
          ['seit', 'Dativ', '<span class="de">seit einem Jahr</span>'],
          ['bis', 'Akkusativ / bare', '<span class="de">bis nächste Woche</span>'],
          ['ab', 'Dativ', '<span class="de">ab Montag</span>']
        ]
      },
      hinglish: 'Yeh chhe B1 time prepositions har ek apna case maangte hain: während (Genitiv), vor/nach/seit/ab (Dativ), bis (Akkusativ ya bina case).'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [
        'These five mistakes are extremely common at B1 — dropping the Genitiv ending, using the wrong case with Anfang/Ende/Mitte, or mixing am/im with the wrong time category.'
      ],
      mistakes: [
        { wrong: 'eines Tag', right: 'eines Tages', why: 'der Tag is masculine — it needs the Genitiv -s ending: eines Tages.' },
        { wrong: 'Anfang dem Monats', right: 'Anfang des Monats', why: 'Anfang takes the Genitiv (des), not the Dativ (dem).' },
        { wrong: 'Ende den Jahres', right: 'Ende des Jahres', why: 'das Jahr is neuter, so its Genitiv article is des, not den.' },
        { wrong: 'im Montag', right: 'am Montag', why: 'Weekdays take am (an dem), not im (in dem).' },
        { wrong: 'am Sommer', right: 'im Sommer', why: 'Seasons take im (in dem), not am (an dem).' }
      ],
      hinglish: 'Sabse aam galtiyaan: Genitiv ending bhool jaana, Anfang/Ende/Mitte ke saath galat case use karna, ya am/im ko galat time category ke saath mix karna.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [
        'For the Goethe exam: reading texts (stories, biographies, newspaper articles) reach for Genitiv time expressions constantly — recognising eines/Anfang des/Ende des/Mitte der quickly speeds up comprehension.'
      ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['Everyday time expression?', 'Usually Dativ (am/im/in der)'],
          ['Story, newspaper, or literary style?', 'Often Genitiv (eines/Anfang des/Ende des/Mitte der)'],
          ['Need to describe sequence?', 'zuerst, danach, anschließend, schließlich']
        ]
      },
      hinglish: 'Goethe exam ke liye: reading texts (kahaniyaan, biography, akhbaar ke lekh) Genitiv time expressions ka lagataar istemal karte hain — eines/Anfang des/Ende des/Mitte der ko jaldi pehchaanna samajhne mein madad karta hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Ein Winterurlaub im Reisebüro geplant',
    titleEn: 'A winter holiday planned at the travel agency',
    tokens: [
      { w: 'Eines', role: 'r-genitiv', en: 'one (neut. gen.)', hi: 'एक', type: 'Determiner · Genitiv', why: 'eines Morgens — literary Genitiv time expression.' },
      { w: 'Morgens', role: 'r-genitiv', en: 'morning (gen.)', hi: 'सुबह का', type: 'Noun · masc. (Genitiv -s)' },
      { w: 'ging', role: 'r-verb', en: 'went (Präteritum)', hi: 'गई', type: 'Verb · gehen (Präteritum)', why: 'Präteritum for narration (recycled — Ch.7).' },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'आन्ना', type: 'Name' },
      { w: 'ins', role: 'r-place', en: 'to the', hi: 'में', type: 'Contraction · in das' },
      { w: 'Reisebüro', role: 'r-place', en: 'travel agency', hi: 'यात्रा एजेंसी', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-dativ', en: 'on the', hi: 'में', type: 'Contraction · an dem (Dativ)', why: 'am + weekday — everyday Dativ time expression.' },
      { w: 'Wochenende', role: 'r-dativ', en: 'weekend', hi: 'सप्ताहांत', type: 'Noun · neut. Dativ' },
      { w: 'wollte', role: 'r-verb', en: 'wanted (Präteritum)', hi: 'चाहती थी', type: 'Verb · Modalverb (Präteritum)' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'mit', role: 'r-preposition', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'Freunden', role: 'r-dativ', en: 'friends', hi: 'दोस्तों', type: 'Noun · plural, dat.' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · acc.' },
      { w: 'Winterurlaub', role: 'r-akkusativ', en: 'winter holiday', hi: 'सर्दियों की छुट्टी', type: 'Noun · masc.', why: 'der Winterurlaub (this chapter).' },
      { w: 'buchen', role: 'r-verb', en: 'to book (Satzende)', hi: 'बुक करना', type: 'Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Reisebüro-Mitarbeiterin', role: 'r-subject', en: 'travel agent (female)', hi: 'महिला यात्रा एजेंट', type: 'Noun · fem.', why: 'die Reisebüro-Mitarbeiterin (this chapter).' },
      { w: 'erklärte', role: 'r-verb', en: 'explained (Präteritum)', hi: 'समझाया', type: 'Verb · erklären (Präteritum)' },
      { w: 'zuerst', role: 'r-adverb', en: 'first', hi: 'सबसे पहले', type: 'Adverb', why: 'zuerst — chronological adverb (this chapter).' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Unterschiede', role: 'r-akkusativ', en: 'differences', hi: 'अंतर', type: 'Noun · plural' },
      { w: 'zwischen', role: 'r-preposition', en: 'between', hi: 'बीच', type: 'Preposition · Dat.' },
      { w: 'Halbpension', role: 'r-dativ', en: 'half board', hi: 'आधा भोजन योजना', type: 'Noun · fem.', why: 'die Halbpension (this chapter).' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'Vollpension', role: 'r-dativ', en: 'full board', hi: 'पूर्ण भोजन योजना', type: 'Noun · fem.', why: 'die Vollpension (this chapter).' },
      { w: '.', plain: true },
      { w: 'Anschließend', role: 'r-adverb', en: 'afterwards', hi: 'उसके बाद', type: 'Adverb', why: 'anschließend — chronological adverb (this chapter).' },
      { w: 'zeigte', role: 'r-verb', en: 'showed (Präteritum)', hi: 'दिखाया', type: 'Verb · zeigen (Präteritum)' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'उसने', type: 'Pronoun' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', type: 'Article · acc.' },
      { w: 'schickes', role: 'r-akkusativ', en: 'fancy', hi: 'शानदार', type: 'Adjective · Akk.', why: 'schick (this chapter): fancy.' },
      { w: 'Wellnesshotel', role: 'r-akkusativ', en: 'spa hotel', hi: 'स्पा होटल', type: 'Noun · neut.', why: 'das Wellnesshotel (this chapter).' },
      { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · dat.' },
      { w: 'Nähe', role: 'r-dativ', en: 'vicinity', hi: 'पास', type: 'Noun · fem.' },
      { w: 'eines', role: 'r-genitiv', en: 'of a (neut. gen.)', hi: 'एक का', type: 'Article · Genitiv' },
      { w: 'Skigebiets', role: 'r-genitiv', en: 'ski resort (gen.)', hi: 'स्की रिज़ॉर्ट का', type: 'Noun · neut. (Genitiv -s)', why: 'das Skigebiet (this chapter).' },
      { w: '.', plain: true },
      { w: 'Anfang', role: 'r-genitiv', en: 'beginning', hi: 'शुरुआत', type: 'Noun · masc. (idiom · Genitiv)', why: 'Anfang des Monats — literary Genitiv time expression.' },
      { w: 'des', role: 'r-genitiv', en: 'of the (masc. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'Monats', role: 'r-genitiv', en: 'month (gen.)', hi: 'महीने का', type: 'Noun · masc. (Genitiv -s)' },
      { w: 'sollte', role: 'r-verb', en: 'was to (Präteritum)', hi: 'था (Präteritum)', type: 'Verb · Modalverb (Präteritum)' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Buchung', role: 'r-subject', en: 'booking', hi: 'बुकिंग', type: 'Noun · fem.' },
      { w: 'fertig', role: 'r-adjective', en: 'ready', hi: 'तैयार', type: 'Adjective' },
      { w: 'sein', role: 'r-verb', en: 'to be (Satzende)', hi: 'होना', type: 'Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Schließlich', role: 'r-adverb', en: 'finally', hi: 'आख़िरकार', type: 'Adverb', why: 'schließlich — chronological adverb (this chapter).' },
      { w: 'verließ', role: 'r-verb', en: 'left (Präteritum)', hi: 'निकल गई', type: 'Verb · verlassen (Präteritum)' },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'आन्ना', type: 'Name' },
      { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Reisebüro', role: 'r-akkusativ', en: 'travel agency', hi: 'यात्रा एजेंसी', type: 'Noun · neut.' },
      { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', type: 'Adverb' },
      { w: 'zufrieden', role: 'r-adjective', en: 'satisfied', hi: 'संतुष्ट', type: 'Adjective' },
      { w: '.', plain: true }
    ],
    translation: 'One morning, Anna went to the travel agency. On the weekend, she wanted to book a winter holiday with friends. The travel agent first explained the differences between half board and full board. Afterwards she showed her a fancy spa hotel near a ski resort. At the beginning of the month, the booking was to be ready. Finally, Anna left the travel agency very satisfied.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — professionally scripted, not a copy of the Story Dialogue.
    dialogue: [
      { id: 'B1_008_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Guten Tag, ich brauche dringend einen Flug — am besten noch innerhalb dieser Woche.', en: 'Good day, I urgently need a flight — ideally still within this week.' },
      { id: 'B1_008_L002', speaker: 'Frau Petersen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Das wird knapp. Innerhalb der nächsten drei Tage gibt es leider keinen freien Platz mehr.', en: 'That\'ll be tight. Within the next three days, unfortunately there\'s no seat left.' },
      { id: 'B1_008_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und am Anfang der nächsten Woche?', en: 'And at the beginning of next week?' },
      { id: 'B1_008_L004', speaker: 'Frau Petersen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Da geht es, aber nur außerhalb der Stoßzeiten — also am frühen Morgen.', en: 'That works, but only outside peak times — so early in the morning.' }
    ],
    transcript: 'Guten Tag, ich brauche dringend einen Flug — am besten noch innerhalb dieser Woche. Das wird knapp. Innerhalb der nächsten drei Tage gibt es leider keinen freien Platz mehr. Und am Anfang der nächsten Woche? Da geht es, aber nur außerhalb der Stoßzeiten — also am frühen Morgen.',
    translation: 'Good day, I urgently need a flight — ideally still within this week. That\'ll be tight. Within the next three days, unfortunately there\'s no seat left. And at the beginning of next week? That works, but only outside peak times — so early in the morning.',
    tokens: [
      { w: 'Guten' },
      { w: 'Tag' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'brauche' },
      { w: 'dringend' },
      { w: 'einen' },
      { w: 'Flug' },
      { w: '—', plain: true },
      { w: 'am' },
      { w: 'besten' },
      { w: 'noch' },
      { w: 'innerhalb' },
      { w: 'dieser' },
      { w: 'Woche' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'wird' },
      { w: 'knapp' },
      { w: '.', plain: true },
      { w: 'Innerhalb' },
      { w: 'der' },
      { w: 'nächsten' },
      { w: 'drei' },
      { w: 'Tage' },
      { w: 'gibt' },
      { w: 'es' },
      { w: 'leider' },
      { w: 'keinen' },
      { w: 'freien' },
      { w: 'Platz' },
      { w: 'mehr' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'am' },
      { w: 'Anfang' },
      { w: 'der' },
      { w: 'nächsten' },
      { w: 'Woche' },
      { w: '?', plain: true },
      { w: 'Da' },
      { w: 'geht' },
      { w: 'es' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'nur' },
      { w: 'außerhalb' },
      { w: 'der' },
      { w: 'Stoßzeiten' },
      { w: '—', plain: true },
      { w: 'also' },
      { w: 'am' },
      { w: 'frühen' },
      { w: 'Morgen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum bekommt Timo diese Woche keinen Flug?', qEn: 'Why can\'t Timo get a flight this week?', options: ['Es gibt keinen Flughafen.', 'Kein freier Platz mehr.', 'Der Flug ist zu teuer.', 'Er hat keinen Pass.'], optionsEn: ['There is no airport.', 'No seats left.', 'The flight is too expensive.', 'He has no passport.'], answer: 1,
        explain: '"Innerhalb der nächsten drei Tage gibt es leider keinen freien Platz mehr."' },
      { q: 'Wann könnte Timo fliegen?', qEn: 'When could Timo fly?', options: ['am Wochenende', 'am frühen Morgen nächste Woche', 'heute Abend', 'nie'], optionsEn: ['at the weekend', 'early in the morning next week', 'this evening', 'never'], answer: 1,
        explain: '"… nur außerhalb der Stoßzeiten — also am frühen Morgen."' }
    ]
  },

  speaking: [
    { task: "Du brauchst dringend einen Flug. Sag im Reisebüro, wann.", taskEn: "You urgently need a flight. Say when at the travel agency.", de: "Am besten noch innerhalb dieser Woche.", en: "Ideally within this week." },
    { task: "Die Mitarbeiterin fragt, wann du zurückkommen willst.", taskEn: "The agent asks when you want to return.", de: "Innerhalb der nächsten drei Tage, spätestens am Sonntag.", en: "Within the next three days, at the latest on Sunday." },
    { task: "Dein Freund fragt nach deinem Tagesablauf im Urlaub.", taskEn: "Your friend asks about your daily routine on holiday.", de: "Am Morgen fahre ich mit dem Skibus, und am Abend gehe ich ins Wellnesshotel.", en: "In the morning I take the ski bus, and in the evening I go to the spa hotel." },
    { task: "Deine Kollegin fragt, wie lange du im Ferienhaus bleibst.", taskEn: "Your colleague asks how long you're staying in the holiday house.", de: "Eine Woche, vom dritten bis zum zehnten August.", en: "A week, from the third to the tenth of August." },
    { task: "Du fragst im Reisebüro, was im Preis enthalten ist.", taskEn: "You ask at the travel agency what's included in the price.", de: "Ist Halbpension enthalten, oder muss ich Vollpension nehmen?", en: "Is half board included, or do I have to take full board?" },
    { task: "Ein Freund fragt, wann der ICE am Hauptbahnhof ankommt.", taskEn: "A friend asks when the ICE arrives at the main station.", de: "In zwanzig Minuten, um Viertel nach acht.", en: "In twenty minutes, at a quarter past eight." },
    { task: "Rollenspiel: Ihr plant im Reisebüro eine Skireise.", taskEn: "Role-play: you plan a ski trip at the travel agency.", de: "Wir kommen am Samstag an. Während der Woche nehmen wir den Skilift, und am letzten Tag fahren wir zurück.", en: "We arrive on Saturday. During the week we'll use the ski lift, and on the last day we travel back." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short travel report or diary entry (six to eight sentences) about a holiday — use at least two everyday Dativ time expressions, two literary Genitiv time expressions, and two chronological adverbs.',
    starters: ['Eines Tages …', 'Am Wochenende …', 'Zuerst …', 'Anfang des Monats …', 'Schließlich …'],
    placeholder: 'Eines Morgens fuhren wir zum Hauptbahnhof. Am Wochenende erreichten wir das Skigebiet …',
    minWords: 50
  },

  // ---------- Exercises (4 types + Zeitangaben-specific, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which is correct?',
      options: ['im Montag', 'am Montag', 'am Sommer'],
      answer: 1,
      explain: 'Weekdays take am (an dem): am Montag.'
    },
    gap: {
      sentence: ['Anfang ', ' Monats bekomme ich mein Gehalt.'],
      gaps: [ { answer: 'des', accepts: ['des'] } ],
      explain: 'der Monat is masculine, so its Genitiv article is des: Anfang des Monats.'
    },
    match: {
      q: 'Classify each expression as Dativ (everyday) or Genitiv (literary).',
      pairs: [
        { noun: 'am Montag', art: 'Dativ (everyday)' },
        { noun: 'im Sommer', art: 'Dativ (everyday)' },
        { noun: 'eines Tages', art: 'Genitiv (literary)' },
        { noun: 'Mitte der Woche', art: 'Genitiv (literary)' }
      ]
    },
    builder: {
      target: 'Build: "One day I want to move to Germany."',
      bank: ['Eines', 'Tages', 'möchte', 'ich', 'nach', 'Deutschland', 'ziehen', '.'],
      answer: ['Eines', 'Tages', 'möchte', 'ich', 'nach', 'Deutschland', 'ziehen', '.'],
      roles: { 'Eines': 'r-genitiv', 'Tages': 'r-genitiv', 'möchte': 'r-verb', 'ich': 'r-subject' }
    },
    timelineOrdering: {
      title: 'Timeline ordering',
      prompt: 'Put these in chronological order: "schließlich", "zuerst", "danach", "anschließend"',
      answer: ['zuerst', 'danach', 'anschließend', 'schließlich'],
      explain: 'zuerst (first) → danach (after that) → anschließend (subsequently) → schließlich (finally).'
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Eines Tag fuhr ich im Montag nach Berlin.',
      right: 'Eines Tages fuhr ich am Montag nach Berlin.',
      explain: '"eines Tag" is missing the Genitiv -s ending (eines Tages), and weekdays take am, not im.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "___ Tages möchte ich nach Deutschland ziehen."', options: ['Ein', 'Eines', 'Einem'], answer: 1,
      explain: 'eines Tages is the fixed Genitiv time expression meaning "one day".' },
    { q: 'Which is correct?', options: ['am Sommer', 'im Sommer', 'im Montag'], answer: 1,
      explain: 'Seasons take im (in dem): im Sommer.' },
    { q: 'Complete: "___ der Woche habe ich viel Arbeit."', options: ['Mitte', 'Anfang', 'Ende'], answer: 0,
      explain: 'Mitte der Woche means "in the middle of the week".' },
    { q: 'Which preposition takes the Genitiv?', options: ['nach', 'seit', 'während'], answer: 2,
      explain: 'während (during) always takes the Genitiv.' },
    { q: 'Which sentence contains an error?', options: ['Am Montag arbeite ich.', 'Anfang des Monats bekomme ich mein Gehalt.', 'Ende den Jahres machen wir Urlaub.'], answer: 2,
      explain: 'das Jahr is neuter, so its Genitiv article is des, not den: "Ende des Jahres."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-dativ', html: 'Use everyday <span class="de r-dativ">Dativ</span> time expressions constantly: <span class="de">am Montag, im Sommer, in der Nacht.</span>' },
    { c: 'r-genitiv', html: 'Reach for literary <span class="de r-genitiv">Genitiv</span> time expressions in stories and formal writing: <span class="de">eines Tages, Anfang des Monats, Mitte der Woche.</span>' },
    { c: 'r-preposition', html: 'The six time prepositions each need their own case: <span class="de">während</span> (Genitiv), <span class="de">vor/nach/seit/ab</span> (Dativ), <span class="de">bis</span> (Akkusativ/bare).' }
  ],
  revisionTips: [
    'Drill am vs. im until automatic: am for weekdays and parts of the day, im for seasons and months.',
    'Whenever you see eines/Anfang des/Ende des/Mitte der, check BOTH the article and the noun\'s own Genitiv ending.',
    'Practise narrating a routine with zuerst, danach, anschließend, schließlich — this ordering vocabulary appears constantly in Goethe reading texts.'
  ]
};

window.CHAPTER = CHAPTER;
