/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 26
   "Adjektivdeklination ohne Artikel" (Strong Declension) — noun
   phrases with NO article, so the adjective alone must carry
   gender + case + number. Does NOT introduce nominalisation,
   participle adjectives, comparative declension, or B2 structures.
   IMPORTANT: dialogue uses ONLY Yara and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-26 list (70 items) — an
   arts/theatre/school-festival theme (Theatermacher, Aquarell,
   Kostüm, Schulchor, Volkslied, künstlerisch, musizieren…) — an
   excellent natural fit for strong-declension noun phrases like
   "talentierte Teilnehmende" and "traditionelle Kostüme".
============================================================ */
const CHAPTER = {
  id: 'b1-26-adjektiv-ohne-artikel',
  phase: 'B1 · Phase 1',
  number: 26,
  title: 'Adjektivdeklination ohne Artikel',
  titleEn: 'Adjective declension without an article',
  description: 'Strong declension: when no article precedes a noun, the adjective alone must show gender, case, and number — großer Hund, kaltes Wasser, frische Luft.',
  xp: 270,
  time: 50,
  difficulty: 'Intermediate',
  nextChapter: { number: 27, title: 'Goethe Mini 4', titleEn: 'Goethe Checkpoint 4 — Plusquamperfekt, Nebensätze & Konnektoren' , href: 'chapter-b1-27-goethe-mini-3.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'No article? <em>The adjective carries everything.</em>',
    intro: 'Yara needs talented actors and colourful costumes for the school play, and Timo offers musical friends from choir and old costumes from home — every noun phrase here has no article at all, so the adjective alone must carry gender, case and number.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear strong adjective endings used naturally in one conversation'
    ],
    scene: 'Das Theaterabenteuer',
    femaleSpeakers: ['Yara'],
    dialogue: [
      { speaker: 'Yara', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'brauche', role: 'r-verb', en: 'need', hi: 'चाहिए', pron: 'BROW-khuh', type: 'Verb · brauchen (ich)' },
        { w: 'talentierte', role: 'r-akkusativ', en: 'talented', hi: 'प्रतिभाशाली', pron: 'ta-len-TEER-tuh', type: 'Adjective · no article (plural)', why: 'without an article, adjective takes strong endings like der/die/das (this chapter).', ex: 'talentierte Schauspieler', exEn: 'talented actors' },
        { w: 'Schauspieler', role: 'r-akkusativ', en: 'actors', hi: 'अभिनेता', pron: 'SHOW-shpee-ler', type: 'Noun · plural' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Theaterstück', role: 'r-akkusativ', en: 'play', hi: 'नाटक', pron: 'tay-AH-ter-shtük', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'I need talented actors for the play.', hi: 'Mujhe natak ke liye pratibhaashaali abhineta chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'kenne', role: 'r-verb', en: 'know', hi: 'जानता हूँ', pron: 'KE-nuh', type: 'Verb · kennen (ich)' },
        { w: 'musikalische', role: 'r-akkusativ', en: 'musical', hi: 'संगीतमय', pron: 'moo-zi-KAH-li-shuh', type: 'Adjective · no article (plural)', why: 'musikalisch = musical (this chapter).', ex: 'musikalische Menschen', exEn: 'musical people' },
        { w: 'Menschen', role: 'r-akkusativ', en: 'people', hi: 'लोग', pron: 'MEN-shen', type: 'Noun · plural' },
        { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'ows', type: 'Preposition + dative' },
        { w: 'unserem', role: 'r-dativ', en: 'our (masc. dat.)', hi: 'हमारे', pron: 'UN-ze-raym', type: 'Possessive · dative' },
        { w: 'Chor', role: 'r-dativ', en: 'choir (dat.)', hi: 'गायक मंडल से', pron: 'kohr', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'I know musical people from our choir.', hi: 'Main hamare gaayak mandal se sangeetmay log jaanta hoon.' },
      { speaker: 'Yara', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'brauchen', role: 'r-verb', en: 'need', hi: 'चाहिए', pron: 'BROW-khen', type: 'Verb · brauchen' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'bunte', role: 'r-akkusativ', en: 'colorful', hi: 'रंगीन', pron: 'BUN-tuh', type: 'Adjective · no article (plural)', why: 'bunt = colorful (recycled A2).', ex: 'bunte Kostüme', exEn: 'colorful costumes' },
        { w: 'Kostüme', role: 'r-akkusativ', en: 'costumes', hi: 'पोशाकें', pron: 'kos-TÜ-muh', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'We also need colorful costumes.', hi: 'Humein rangeen poshaakein bhi chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'alte', role: 'r-akkusativ', en: 'old', hi: 'पुराने', pron: 'AL-tuh', type: 'Adjective · no article (plural)', why: 'without article, adjective takes strong endings (this chapter).', ex: 'alte Kostüme', exEn: 'old costumes' },
        { w: 'Kostüme', role: 'r-akkusativ', en: 'costumes', hi: 'पोशाकें', pron: 'kos-TÜ-muh', type: 'Noun · plural' },
        { w: 'zu', role: 'r-preposition', en: 'at', hi: 'घर पर', pron: 'tsoo', type: 'Preposition + place' },
        { w: 'Hause', role: 'r-place', en: 'home', hi: 'घर', pron: 'HOW-zuh', type: 'Noun · place' },
        { w: '.', plain: true }
      ], en: 'I have old costumes at home.', hi: 'Mere paas ghar par purani poshaakein hain.' },
      { speaker: 'Yara', tokens: [
        { w: 'Super', role: 'r-adjective', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Bringst', role: 'r-verb', en: 'will you bring', hi: 'लाओगे', pron: 'BRINKST', type: 'Verb · bringen (du)', lexicalUnit: 'mitbringen' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'frische', role: 'r-akkusativ', en: 'fresh', hi: 'ताज़ी', pron: 'FRI-shuh', type: 'Adjective · no article (plural)', why: 'frisch = fresh (recycled A2).', ex: 'frische Ideen', exEn: 'fresh ideas' },
        { w: 'Ideen', role: 'r-akkusativ', en: 'ideas', hi: 'विचार', pron: 'i-DAY-en', type: 'Noun · plural' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'mit', role: 'r-verb', en: '(prefix of mitbringen)', hi: 'साथ', pron: 'mit', type: 'Separable prefix · Satzende', lexicalUnit: 'mitbringen' },
        { w: '?', plain: true }
      ], en: 'Great! Will you also bring fresh ideas?', hi: 'Badhiya! Kya tum taazi vichaar bhi laoge?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'großartige', role: 'r-akkusativ', en: 'great', hi: 'शानदार', pron: 'GROHS-ar-ti-guh', type: 'Adjective · no article (plural)', why: 'großartig = great (this chapter).', ex: 'großartige Ideen', exEn: 'great ideas' },
        { w: 'Ideen', role: 'r-akkusativ', en: 'ideas', hi: 'विचार', pron: 'i-DAY-en', type: 'Noun · plural' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Eröffnung', role: 'r-akkusativ', en: 'opening', hi: 'उद्घाटन', pron: 'er-ÖF-nung', type: 'Noun · fem.', why: 'die Eröffnung (this chapter).', ex: 'Ich habe Ideen für die Eröffnung.', exEn: 'I have ideas for the opening.' },
        { w: '.', plain: true }
      ], en: 'I have great ideas for the opening.', hi: 'Mere paas udghaatan ke liye shaandaar vichaar hain.' },
      { speaker: 'Yara', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'wird', role: 'r-verb', en: 'will', hi: 'होगा', pron: 'virt', type: 'Verb · werden' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ein', role: 'r-subject', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut.' },
        { w: 'zeitloses', role: 'r-subject', en: 'timeless', hi: 'कालातीत', pron: 'TSYT-lo-zes', type: 'Adjective', why: 'zeitlos = timeless (this chapter).', ex: 'ein zeitloses Stück', exEn: 'a timeless piece' },
        { w: 'Stück', role: 'r-subject', en: 'piece', hi: 'नाटक', pron: 'shtük', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Then that will be a timeless piece.', hi: 'Toh yeh ek kaalateet natak hoga.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'When a noun phrase has <b>no article</b> at all, there\'s nothing else to show gender, case, and number — so the adjective itself must carry that information, taking the same strong endings a definite article would have had: <span class="de r-adjective">frisches</span> Brot, <span class="de r-adjective">kaltes</span> Wasser, <span class="de r-adjective">gute</span> Freunde.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ADJEKTIVDEKLINATION OHNE ARTIKEL (B1 level only, Strong Declension): when a noun phrase has no article, the adjective takes strong endings that mirror what a definite article would show — Nom. masc. -er, fem. -e, neut. -es, plural -e; Akk. masc. -en, fem. -e, neut. -es, plural -e; Dat. all genders -em/-er/-em, plural -en; Gen. masc./neut. -en (+ noun -s/-es), fem./plural -er. ' +
    'Do NOT expect adjective nominalisation, participle adjectives, comparative declension, or B2 adjective structures — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Only flag strong-declension endings on noun phrases that truly have NO article (not "der/die/das", not "ein/eine/kein/mein" etc.) — those take weak or mixed endings instead and are out of scope here.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Ending check:</b> one sentence on whether strong endings were used correctly wherever no article appeared.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you consistently apply the correct strong ending when no article is present. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the Strong Declension table once — especially Genitiv masculine/neuter — then continue.',
    low: 'Worth another pass through the Grammar section — practise the decision flowchart: is there an article? If not, the adjective goes strong.'
  },

  parserSentence: [
    { w: 'Kaltes', role: 'r-adjective' }, { w: 'Wasser', role: 'plain' },
    { w: 'ist', role: 'plain' }, { w: 'gesund', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: no article means the adjective alone carries gender, case, and number.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Yara and Timo wander a school arts festival full of article-free noun phrases.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 70 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the complete strong declension table across all four cases.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage about an arts festival, full of strong adjective endings.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch the strong ending on every article-free noun phrase.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe cities, food, and products using strong adjective endings.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reviews and descriptions using strong declension naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill strong endings and the strong vs weak vs mixed decision.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 270 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 70 chapter words — arts, theatre, and school-festival vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '15 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Strong-ending drills, strong vs weak vs mixed classification, error correction, and a review-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete strong declension reference — all four cases, decision flowchart, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'großer Hund', text: 'Use strong masculine endings' },
    { de: 'große Stadt', text: 'Use strong feminine endings' },
    { de: 'kleines Kind', text: 'Use strong neuter endings' },
    { de: 'große Häuser', text: 'Use strong plural endings' },
    { de: 'nach Fall', text: 'Vary the ending correctly across all four cases' }
  ],

  // ---------- Vocabulary (70 items — full chapter-26 upload list) ----------
  vocab: [
    { de: 'Qualifikation', art: 'die', gender: 'f', plural: 'Qualifikationen', pos: 'noun', level: 'B1', en: 'qualification', hi: 'योग्यता', ex: 'Er hat eine gute Qualifikation.', exEn: 'He has a good qualification.', exHi: 'Uske paas achhi yogyata hai.' },
    { de: 'anwenden', pos: 'verb', level: 'B1', en: 'to use, apply', hi: 'लागू करना', ex: 'Sie wendet neue Techniken an.', exEn: 'She applies new techniques.', exHi: 'Woh nayi takneek lagoo karti hai.', conj: { praesens: 'wendet an', praeteritum: 'wendete an', perfekt: 'hat angewendet' } },
    { de: 'aufführen', pos: 'verb', level: 'B1', en: 'to perform', hi: 'प्रस्तुत करना', ex: 'Sie führen ein neues Stück auf.', exEn: 'They\'re performing a new piece.', exHi: 'Woh ek nayi rachna prastut kar rahe hain.', conj: { praesens: 'führt auf', praeteritum: 'führte auf', perfekt: 'hat aufgeführt' } },
    { de: 'auftreten', pos: 'verb', level: 'B1', en: 'to perform, appear', hi: 'प्रदर्शन करना', ex: 'Der Schulchor tritt heute auf.', exEn: 'The school choir performs today.', exHi: 'School gaayak mandal aaj pradarshan karega.', conj: { praesens: 'tritt auf', praeteritum: 'trat auf', perfekt: 'ist aufgetreten' } },
    { de: 'behandeln', pos: 'verb', level: 'B1', en: 'to treat', hi: 'व्यवहार करना', ex: 'Der Arzt behandelt den Patienten gut.', exEn: 'The doctor treats the patient well.', exHi: 'Doctor mareez ke saath achha vyavahaar karta hai.', conj: { praesens: 'behandelt', praeteritum: 'behandelte', perfekt: 'hat behandelt' } },
    { de: 'besprechen', pos: 'verb', level: 'B1', en: 'to discuss', hi: 'चर्चा करना', ex: 'Wir besprechen das Programm.', exEn: 'We\'re discussing the program.', exHi: 'Hum karyakram par charcha kar rahe hain.', conj: { praesens: 'bespricht', praeteritum: 'besprach', perfekt: 'hat besprochen' } },
    { de: 'bestehen', pos: 'verb', level: 'B1', en: 'to consist of (aus + D.)', hi: 'मिलकर बनना', ex: 'Das Programm besteht aus vielen Teilen.', exEn: 'The program consists of many parts.', exHi: 'Karyakram kai hisson se milkar bana hai.', conj: { praesens: 'besteht', praeteritum: 'bestand', perfekt: 'hat bestanden' } },
    { de: 'bewegen', pos: 'verb', level: 'B1', en: 'to move (emotionally)', hi: 'भावुक करना', ex: 'Die Musik bewegt mich.', exEn: 'The music moves me.', exHi: 'Sangeet mujhe bhavuk karta hai.', conj: { praesens: 'bewegt', praeteritum: 'bewegte', perfekt: 'hat bewegt' } },
    { de: 'Darstellung', art: 'die', gender: 'f', plural: 'Darstellungen', pos: 'noun', level: 'B1', en: 'depiction', hi: 'चित्रण', ex: 'Die Darstellung war sehr künstlerisch.', exEn: 'The depiction was very artistic.', exHi: 'Chitran bahut kalatmak tha.' },
    { de: 'Eigenschaft', art: 'die', gender: 'f', plural: 'Eigenschaften', pos: 'noun', level: 'B1', en: 'characteristic', hi: 'विशेषता', ex: 'Geduld ist eine wichtige Eigenschaft.', exEn: 'Patience is an important characteristic.', exHi: 'Dhairya ek mahatvapurn visheshta hai.' },
    { de: 'Eröffnung', art: 'die', gender: 'f', plural: 'Eröffnungen', pos: 'noun', level: 'B1', en: 'opening', hi: 'उद्घाटन', ex: 'Die Eröffnung war feierlich.', exEn: 'The opening was festive.', exHi: 'Udghatan utsavapoorn tha.' },
    { de: 'Nachbarschaft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'neighbourhood', hi: 'पड़ोस', ex: 'Gute Nachbarschaft entsteht bei solchen Treffen.', exEn: 'Good neighbourhood relations arise at such meetings.', exHi: 'Aisi mulaakaton mein achha padosi rishta banta hai.' },
    { de: 'Tradition', art: 'die', gender: 'f', plural: 'Traditionen', pos: 'noun', level: 'B1', en: 'tradition', hi: 'परंपरा', ex: 'Diese Tradition ist sehr alt.', exEn: 'This tradition is very old.', exHi: 'Yeh parampara bahut purani hai.' },
    { de: 'einsperren', pos: 'verb', level: 'B1', en: 'to lock somebody in', hi: 'बंद कर देना', ex: 'Im Stück wird der Held eingesperrt.', exEn: 'In the play, the hero is locked in.', exHi: 'Natak mein, nayak ko band kar diya jaata hai.', conj: { praesens: 'sperrt ein', praeteritum: 'sperrte ein', perfekt: 'hat eingesperrt' } },
    { de: 'entzwei', pos: 'adverb', level: 'B1', en: 'in two, apart', hi: 'दो टुकड़ों में', ex: 'Die Vase brach entzwei.', exEn: 'The vase broke in two.', exHi: 'Vase do tukdon mein toot gayi.' },
    { de: 'erarbeiten', pos: 'verb', level: 'B1', en: 'to develop', hi: 'विकसित करना', ex: 'Der Theatermacher erarbeitet ein neues Stück.', exEn: 'The theatre maker is developing a new piece.', exHi: 'Rangmanch nirmaata ek nayi rachna vikasit kar raha hai.', conj: { praesens: 'erarbeitet', praeteritum: 'erarbeitete', perfekt: 'hat erarbeitet' } },
    { de: 'erschießen', pos: 'verb', level: 'B1', en: 'to shoot dead', hi: 'गोली मारना', ex: 'Im Kostüm spielt er einen Jäger, der ein Tier erschießt.', exEn: 'In costume, he plays a hunter who shoots an animal.', exHi: 'Veshbhoosha mein, woh ek shikaari ka kirdaar nibhaata hai jo jaanwar ko goli maarta hai.', conj: { praesens: 'erschießt', praeteritum: 'erschoss', perfekt: 'hat erschossen' } },
    { de: 'künstlerisch', pos: 'adjective', level: 'B1', en: 'artistic', hi: 'कलात्मक', ex: 'Der Schulchor übt künstlerischen Ausdruck.', exEn: 'The school choir practises artistic expression.', exHi: 'School gaayak mandal kalatmak abhivyakti ka abhyaas karta hai.' },
    { de: 'musizieren', pos: 'verb', level: 'B1', en: 'to make music', hi: 'संगीत बजाना', ex: 'Mein Neffe musiziert gern.', exEn: 'My nephew gladly makes music.', exHi: 'Mera bhatija khushi se sangeet bajaata hai.', conj: { praesens: 'musiziert', praeteritum: 'musizierte', perfekt: 'hat musiziert' } },
    { de: 'relativieren', pos: 'verb', level: 'B1', en: 'to relativise, put into perspective', hi: 'सापेक्ष बनाना', ex: 'Er relativiert die Kritik am Stück.', exEn: 'He puts the criticism of the play into perspective.', exHi: 'Woh natak ki aalochana ko sandarbh mein rakhta hai.', conj: { praesens: 'relativiert', praeteritum: 'relativierte', perfekt: 'hat relativiert' } },
    { de: 'schließen', pos: 'verb', level: 'B1', en: 'to make (friends: Freundschaft schließen)', hi: 'दोस्ती करना', ex: 'Sie schließt schnell Freundschaft.', exEn: 'She makes friends quickly.', exHi: 'Woh jaldi dosti kar leti hai.', conj: { praesens: 'schließt', praeteritum: 'schloss', perfekt: 'hat geschlossen' } },
    { de: 'sich schminken', pos: 'verb', level: 'B1', en: 'to put makeup on', hi: 'मेकअप करना', ex: 'Die Schauspielerin schminkt sich vor der Aufführung.', exEn: 'The actress puts makeup on before the performance.', exHi: 'Abhinetri pradarshan se pehle makeup karti hai.', conj: { praesens: 'schminkt sich', praeteritum: 'schminkte sich', perfekt: 'hat sich geschminkt' } },
    { de: 'talentiert', pos: 'adjective', level: 'B1', en: 'talented', hi: 'प्रतिभाशाली', ex: 'Talentierte Teilnehmende malen schöne Aquarelle.', exEn: 'Talented participants are painting beautiful watercolours.', exHi: 'Pratibhaashaali pratibhaagi sundar jal rang bana rahe hain.' },
    { de: 'traditionell', pos: 'adjective', level: 'B1', en: 'traditional', hi: 'पारंपरिक', ex: 'Ich liebe traditionelle Kostüme.', exEn: 'I love traditional costumes.', exHi: 'Mujhe paramparik veshbhoosha bahut pasand hai.' },
    { de: 'umsetzen', pos: 'verb', level: 'B1', en: 'to realize, implement', hi: 'लागू करना', ex: 'Sie setzt ihre Idee gut um.', exEn: 'She implements her idea well.', exHi: 'Woh apne vichaar ko achhi tarah lagoo karti hai.', conj: { praesens: 'setzt um', praeteritum: 'setzte um', perfekt: 'hat umgesetzt' } },
    { de: 'uncool', pos: 'adjective', level: 'B1', en: 'uncool', hi: 'बेढंगा', ex: 'Das alte Kostüm findet er uncool.', exEn: 'He finds the old costume uncool.', exHi: 'Use purana veshbhoosha bedhanga lagta hai.' },
    { de: 'vorbeifliegen', pos: 'verb', level: 'B1', en: 'to fly past', hi: 'उड़कर गुज़रना', ex: 'Ein Vogel fliegt am Fenster vorbei.', exEn: 'A bird flies past the window.', exHi: 'Ek chidiya khidki se udkar guzarti hai.', conj: { praesens: 'fliegt vorbei', praeteritum: 'flog vorbei', perfekt: 'ist vorbeigeflogen' } },
    { de: 'zeitlos', pos: 'adjective', level: 'B1', en: 'timeless', hi: 'कालातीत', ex: 'Zeitlose Volkslieder klingen wundervoll.', exEn: 'Timeless folk songs sound wonderful.', exHi: 'Kaalaateet lok geet adbhut sunaayi dete hain.' },
    { de: 'zerreißen', pos: 'verb', level: 'B1', en: 'to tear apart', hi: 'फाड़ देना', ex: 'Er zerreißt das alte Kostüm.', exEn: 'He tears the old costume apart.', exHi: 'Woh purani veshbhoosha faad deta hai.', conj: { praesens: 'zerreißt', praeteritum: 'zerriss', perfekt: 'hat zerrissen' } },
    { de: 'zusehen', pos: 'verb', level: 'B1', en: 'to watch', hi: 'देखना', ex: 'Wir sehen der Aufführung zu.', exEn: 'We\'re watching the performance.', exHi: 'Hum pradarshan dekh rahe hain.', conj: { praesens: 'sieht zu', praeteritum: 'sah zu', perfekt: 'hat zugesehen' } },
    { de: 'Aquarell', art: 'das', gender: 'n', plural: 'Aquarelle', pos: 'noun', level: 'B1', en: 'watercolour', hi: 'जल रंग', ex: 'Talentierte Teilnehmende malen schöne Aquarelle.', exEn: 'Talented participants paint beautiful watercolours.', exHi: 'Pratibhaashaali pratibhaagi sundar jal rang banaate hain.' },
    { de: 'Büfett', art: 'das', gender: 'n', plural: 'Büfetts', pos: 'noun', level: 'B1', en: 'buffet', hi: 'बुफ़े', ex: 'Am Büfett gibt es leckeren Snack.', exEn: 'At the buffet there\'s a delicious snack.', exHi: 'Buffet mein swaadisht nashta hai.' },
    { de: 'Kostüm', art: 'das', gender: 'n', plural: 'Kostüme', pos: 'noun', level: 'B1', en: 'costume', hi: 'वेशभूषा', ex: 'Ich liebe traditionelle Kostüme.', exEn: 'I love traditional costumes.', exHi: 'Mujhe paramparik veshbhoosha bahut pasand hai.' },
    { de: 'Theaterabenteuer', art: 'das', gender: 'n', plural: 'Theaterabenteuer', pos: 'noun', level: 'B1', en: 'theatre adventure', hi: 'रंगमंच साहसिक कार्य', ex: 'Das Theaterabenteuer begann mit einer Eröffnung.', exEn: 'The theatre adventure began with an opening.', exHi: 'Rangmanch saahasik karya ek udghatan se shuru hua.' },
    { de: 'Treffen', art: 'das', gender: 'n', plural: 'Treffen', pos: 'noun', level: 'B1', en: 'meeting', hi: 'मुलाक़ात', ex: 'Frieden entsteht bei solchen Treffen.', exEn: 'Peace arises at such meetings.', exHi: 'Aisi mulaakaton mein shaanti banti hai.' },
    { de: 'Upcycling', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'upcycling', hi: 'अपसाइक्लिंग', ex: 'Die Kostüme kommen aus Upcycling.', exEn: 'The costumes come from upcycling.', exHi: 'Veshbhoosha upcycling se aati hai.' },
    { de: 'Virus', art: 'das', gender: 'n', plural: 'Viren', pos: 'noun', level: 'B1', en: 'virus', hi: 'वायरस', ex: 'Ein Virus verhinderte die Eröffnung.', exEn: 'A virus prevented the opening.', exHi: 'Ek virus ne udghatan ko rok diya.' },
    { de: 'Volkslied', art: 'das', gender: 'n', plural: 'Volkslieder', pos: 'noun', level: 'B1', en: 'folk song', hi: 'लोक गीत', ex: 'Zeitlose Volkslieder klingen wundervoll.', exEn: 'Timeless folk songs sound wonderful.', exHi: 'Kaalaateet lok geet adbhut sunaayi dete hain.' },
    { de: 'Frieden', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'peace', hi: 'शांति', ex: 'Frieden und gute Nachbarschaft entstehen bei solchen Treffen.', exEn: 'Peace and good neighbourhood relations arise at such meetings.', exHi: 'Aisi mulaakaton mein shaanti aur achha padosi rishta banta hai.' },
    { de: 'Gedanke', art: 'der', gender: 'm', plural: 'Gedanken', pos: 'noun', level: 'B1', en: 'thought', hi: 'विचार', ex: 'Guter Gedanke braucht Zeit.', exEn: 'A good thought needs time.', exHi: 'Achhe vichaar ko samay chahiye.' },
    { de: 'Geschmack', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'taste, flavour', hi: 'स्वाद', ex: 'Guten Geschmack zeigt diese Palette.', exEn: 'This palette shows good taste.', exHi: 'Yeh palette accha swaad dikhaati hai.' },
    { de: 'Jäger', art: 'der', gender: 'm', plural: 'Jäger', pos: 'noun', level: 'B1', en: 'hunter (male)', hi: 'शिकारी', ex: 'Talentierter Jäger wird zum Theatermacher.', exEn: 'A talented hunter becomes a theatre maker.', exHi: 'Ek pratibhaashaali shikaari rangmanch nirmaata ban jaata hai.' },
    { de: 'Kerker', art: 'der', gender: 'm', plural: 'Kerker', pos: 'noun', level: 'B1', en: 'dungeon', hi: 'क़ैदख़ाना', ex: 'Im Stück sitzt der Held im dunklen Kerker.', exEn: 'In the play, the hero sits in a dark dungeon.', exHi: 'Natak mein, nayak andhere qaidkhaane mein baitha hai.' },
    { de: 'Kursabschluss', art: 'der', gender: 'm', plural: 'Kursabschlüsse', pos: 'noun', level: 'B1', en: 'course completion', hi: 'पाठ्यक्रम पूर्णता', ex: 'Der Kursabschluss war feierlich.', exEn: 'The course completion was festive.', exHi: 'Course poornata utsavapoorn thi.' },
    { de: 'Neffe', art: 'der', gender: 'm', plural: 'Neffen', pos: 'noun', level: 'B1', en: 'nephew', hi: 'भतीजा', ex: 'Mein Neffe musiziert gern.', exEn: 'My nephew gladly makes music.', exHi: 'Mera bhatija khushi se sangeet bajaata hai.' },
    { de: 'Schulchor', art: 'der', gender: 'm', plural: 'Schulchöre', pos: 'noun', level: 'B1', en: 'school choir', hi: 'स्कूल गायक मंडल', ex: 'Der Schulchor übt künstlerischen Ausdruck.', exEn: 'The school choir practises artistic expression.', exHi: 'School gaayak mandal kalatmak abhivyakti ka abhyaas karta hai.' },
    { de: 'Schwerpunkt', art: 'der', gender: 'm', plural: 'Schwerpunkte', pos: 'noun', level: 'B1', en: 'focus, main emphasis', hi: 'मुख्य केंद्र बिंदु', ex: 'Der Schwerpunkt liegt auf künstlerischem Ausdruck.', exEn: 'The focus is on artistic expression.', exHi: 'Mukhya kendra bindu kalaatmak abhivyakti par hai.' },
    { de: 'Snack', art: 'der', gender: 'm', plural: 'Snacks', pos: 'noun', level: 'B1', en: 'snack', hi: 'नाश्ता', ex: 'Am Büfett gibt es leckeren Snack.', exEn: 'At the buffet there\'s a delicious snack.', exHi: 'Buffet mein swaadisht nashta hai.' },
    { de: 'Theatermacher', art: 'der', gender: 'm', plural: 'Theatermacher', pos: 'noun', level: 'B1', en: 'theatre maker (male)', hi: 'रंगमंच निर्माता', ex: 'Der Theatermacher erarbeitet ein neues Stück.', exEn: 'The theatre maker is developing a new piece.', exHi: 'Rangmanch nirmaata ek nayi rachna vikasit kar raha hai.' },
    { de: 'Teilnehmende', art: 'der/die', gender: 'm/f', plural: 'Teilnehmende', pos: 'noun', level: 'B1', en: 'participant', hi: 'प्रतिभागी', ex: 'Talentierte Teilnehmende malen schöne Aquarelle.', exEn: 'Talented participants are painting beautiful watercolours.', exHi: 'Pratibhaashaali pratibhaagi sundar jal rang bana rahe hain.' },
    { de: 'Broschüre', art: 'die', gender: 'f', plural: 'Broschüren', pos: 'noun', level: 'B1', en: 'brochure', hi: 'विवरणिका', ex: 'Interessante Broschüre zeigt brasilianische Traditionen.', exEn: 'An interesting brochure shows Brazilian traditions.', exHi: 'Ek dilchasp brochure Brazilian paramparaon ko dikhaati hai.' },
    { de: 'Jägerin', art: 'die', gender: 'f', plural: 'Jägerinnen', pos: 'noun', level: 'B1', en: 'hunter (female)', hi: 'शिकारी (महिला)', ex: 'Die Jägerin spielt eine Rolle im Stück.', exEn: 'The huntress plays a role in the play.', exHi: 'Shikaari mahila natak mein ek bhoomika nibhaati hai.' },
    { de: 'Mauer', art: 'die', gender: 'f', plural: 'Mauern', pos: 'noun', level: 'B1', en: 'wall', hi: 'दीवार', ex: 'Hohe Mauer umgibt den Kerker.', exEn: 'A high wall surrounds the dungeon.', exHi: 'Oonchi deewaar qaidkhaane ko ghere hue hai.' },
    { de: 'Mode', art: 'die', gender: 'f', plural: 'Moden', pos: 'noun', level: 'B1', en: 'fashion', hi: 'फ़ैशन', ex: 'Traditionelle Mode zeigt die Broschüre.', exEn: 'The brochure shows traditional fashion.', exHi: 'Brochure paramparik fashion dikhaata hai.' },
    { de: 'Palette', art: 'die', gender: 'f', plural: 'Paletten', pos: 'noun', level: 'B1', en: 'palette', hi: 'रंग पैलेट', ex: 'Guten Geschmack zeigt diese Palette.', exEn: 'This palette shows good taste.', exHi: 'Yeh palette accha swaad dikhaati hai.' },
    { de: 'Schranke', art: 'die', gender: 'f', plural: 'Schranken', pos: 'noun', level: 'B1', en: 'barrier', hi: 'बाधा', ex: 'Künstlerische Schranke gibt es hier nicht.', exEn: 'There\'s no artistic barrier here.', exHi: 'Yahaan koi kalaatmak baadha nahi hai.' },
    { de: 'Theatermacherin', art: 'die', gender: 'f', plural: 'Theatermacherinnen', pos: 'noun', level: 'B1', en: 'theatre maker (female)', hi: 'रंगमंच निर्माता (महिला)', ex: 'Die Theatermacherin erarbeitet ein neues Stück.', exEn: 'The theatre maker is developing a new piece.', exHi: 'Rangmanch nirmaata (mahila) ek nayi rachna vikasit kar rahi hai.' },
    { de: 'Uniform', art: 'die', gender: 'f', plural: 'Uniformen', pos: 'noun', level: 'B1', en: 'uniform', hi: 'वर्दी', ex: 'Talentierte Schauspielerin trägt schwarze Uniform.', exEn: 'A talented actress wears a black uniform.', exHi: 'Ek pratibhaashaali abhinetri kaali vardi pehnti hai.' },
    { de: 'Vase', art: 'die', gender: 'f', plural: 'Vasen', pos: 'noun', level: 'B1', en: 'vase', hi: 'फूलदान', ex: 'Die Vase brach entzwei.', exEn: 'The vase broke in two.', exHi: 'Vase do tukdon mein toot gayi.' },
    { de: 'Ölfarbe', art: 'die', gender: 'f', plural: 'Ölfarben', pos: 'noun', level: 'B1', en: 'oil colour', hi: 'तेल रंग', ex: 'Frische Ölfarbe ist überall.', exEn: 'Fresh oil colour is everywhere.', exHi: 'Har jagah tazaa tel rang hai.' },
    { de: 'finster', pos: 'adjective', level: 'B1', en: 'gloomy, dark', hi: 'अंधकारमय', ex: 'Finstere Wolken hängen über der Bühne.', exEn: 'Gloomy clouds hang over the stage.', exHi: 'Andhkaarmaya baadal stage ke upar hain.' },
    { de: 'herumspringen', pos: 'verb', level: 'B1', en: 'to jump around', hi: 'उछल-कूद करना', ex: 'Kleine Kinder springen herum und schreien vor Freude.', exEn: 'Small children jump around and scream with joy.', exHi: 'Chote bacche uchal-kood karte hain aur khushi se chillate hain.', conj: { praesens: 'springt herum', praeteritum: 'sprang herum', perfekt: 'ist herumgesprungen' } },
    { de: 'nächtlich', pos: 'adjective', level: 'B1', en: 'nightly', hi: 'रात का', ex: 'Nächtliche Proben sind anstrengend.', exEn: 'Nightly rehearsals are exhausting.', exHi: 'Raat ke rehearsal thakau hote hain.' },
    { de: 'rennen', pos: 'verb', level: 'B1', en: 'to run', hi: 'दौड़ना', ex: 'Die Kinder rennen zur Bühne.', exEn: 'The children run to the stage.', exHi: 'Bacche stage ki taraf daudte hain.', conj: { praesens: 'rennt', praeteritum: 'rannte', perfekt: 'ist gerannt' } },
    { de: 'schreien', pos: 'verb', level: 'B1', en: 'to scream', hi: 'चिल्लाना', ex: 'Kleine Kinder schreien vor Freude.', exEn: 'Small children scream with joy.', exHi: 'Chote bacche khushi se chillate hain.', conj: { praesens: 'schreit', praeteritum: 'schrie', perfekt: 'hat geschrien' } },
    { de: 'vergeblich', pos: 'adjective', level: 'B1', en: 'in vain', hi: 'व्यर्थ', ex: 'Vergeblich suchen wir freien Platz.', exEn: 'We search in vain for free space.', exHi: 'Hum khaali jagah dhoondhne mein vyarth hain.' },
    { de: 'brasilianisch', pos: 'adjective', level: 'B1', en: 'Brazilian', hi: 'ब्राज़ीलियाई', ex: 'Interessante Broschüre zeigt brasilianische Traditionen.', exEn: 'An interesting brochure shows Brazilian traditions.', exHi: 'Ek dilchasp brochure Brazilian paramparaon ko dikhaati hai.' },
    { de: 'Lernplakat', art: 'das', gender: 'n', plural: 'Lernplakate', pos: 'noun', level: 'B1', en: 'revision poster', hi: 'रिवीज़न पोस्टर', ex: 'Neues Lernplakat hängt an der Wand.', exEn: 'A new revision poster hangs on the wall.', exHi: 'Naya revision poster deewaar par tanga hai.' },
    { de: 'Adjektivendung', art: 'die', gender: 'f', plural: 'Adjektivendungen', pos: 'noun', level: 'B1', en: 'adjective ending', hi: 'विशेषण अंत', ex: 'Starke Adjektivendung steht ohne Artikel.', exEn: 'A strong adjective ending stands without an article.', exHi: 'Mazboot visheshan ant bina article ke aata hai.' },
    { de: 'nominal', pos: 'adjective', level: 'B1', en: 'nominal', hi: 'नाममात्र', ex: 'Der nominale Preis ist niedrig.', exEn: 'The nominal price is low.', exHi: 'Naam-maatra keemat kam hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Warum ändern sich die Endungen?',
      body: [ 'Without an article, no word shows gender, case, or number — so the adjective must carry ALL of that grammatical information itself.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['Adjektiv (stark) + Nomen', '<span class="de">Großer Hund läuft. Kaltes Wasser ist gesund.</span>']
        ]
      },
      hinglish: 'Article na hone par, koi shabd gender, case, ya number nahi dikhaata — isliye adjective ko yeh saari jaankari khud deni padti hai.'
    },
    {
      title: 'Starke Deklination — Maskulinum',
      body: [ 'Masculine strong endings across all four cases.' ],
      table: {
        head: ['Case', 'Example'],
        rows: [
          ['Nominativ', '<span class="de">großer Hund</span>'],
          ['Akkusativ', '<span class="de">großen Hund</span>'],
          ['Dativ', '<span class="de">großem Hund</span>'],
          ['Genitiv', '<span class="de">großen Hundes</span>']
        ]
      },
      hinglish: 'Maskulinum ke liye strong endings chaaron cases mein.'
    },
    {
      title: 'Starke Deklination — Femininum',
      body: [ 'Feminine strong endings across all four cases — note Nominativ and Akkusativ share the same ending.' ],
      table: {
        head: ['Case', 'Example'],
        rows: [
          ['Nominativ', '<span class="de">große Stadt</span>'],
          ['Akkusativ', '<span class="de">große Stadt</span>'],
          ['Dativ', '<span class="de">großer Stadt</span>'],
          ['Genitiv', '<span class="de">großer Stadt</span>']
        ]
      },
      hinglish: 'Femininum ke liye strong endings — Nominativ aur Akkusativ ek jaisi hoti hain.'
    },
    {
      title: 'Starke Deklination — Neutrum',
      body: [ 'Neuter strong endings across all four cases — note Nominativ and Akkusativ share the same ending.' ],
      table: {
        head: ['Case', 'Example'],
        rows: [
          ['Nominativ', '<span class="de">kleines Kind</span>'],
          ['Akkusativ', '<span class="de">kleines Kind</span>'],
          ['Dativ', '<span class="de">kleinem Kind</span>'],
          ['Genitiv', '<span class="de">kleinen Kindes</span>']
        ]
      },
      hinglish: 'Neutrum ke liye strong endings — Nominativ aur Akkusativ ek jaisi hoti hain.'
    },
    {
      title: 'Starke Deklination — Plural',
      body: [ 'Plural strong endings across all four cases, for all genders.' ],
      table: {
        head: ['Case', 'Example'],
        rows: [
          ['Nominativ', '<span class="de">große Häuser</span>'],
          ['Akkusativ', '<span class="de">große Häuser</span>'],
          ['Dativ', '<span class="de">großen Häusern</span>'],
          ['Genitiv', '<span class="de">großer Häuser</span>']
        ]
      },
      hinglish: 'Plural ke liye strong endings — sabhi genders ke liye same.'
    },
    {
      title: 'Stark vs Schwach vs Gemischt',
      body: [ 'One noun phrase, three possible declensions, depending on what precedes the adjective.' ],
      table: {
        head: ['Type', 'Example'],
        rows: [
          ['Stark (kein Artikel)', '<span class="de">großer Hund</span>'],
          ['Schwach (bestimmter Artikel)', '<span class="de">der große Hund</span>'],
          ['Gemischt (unbestimmter Artikel)', '<span class="de">ein großer Hund</span>']
        ]
      },
      note: 'When no article precedes the noun, use strong endings — the adjective alone must show gender, case, and number.',
      hinglish: 'Jab article nahi hota, strong endings use karo — adjective akela gender, case, aur number dikhaata hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from dropping the strong ending, or using the wrong one for the gender/case.' ],
      mistakes: [
        { wrong: 'groß Hund', right: 'großer Hund', why: 'Without an article, the adjective must always carry a strong ending — never bare.' },
        { wrong: 'große Hund', right: 'großer Hund', why: 'Masculine Nominativ needs -er, not -e.' },
        { wrong: 'kalte Wasser', right: 'kaltes Wasser', why: 'Neuter Nominativ/Akkusativ needs -es, not -e.' },
        { wrong: 'frischer Brot', right: 'frisches Brot', why: 'Brot is neuter, so it needs -es, not -er.' },
        { wrong: 'interessantes Bücher', right: 'interessante Bücher', why: 'In the plural Nominativ/Akkusativ the strong ending is -e, not -es. (Plural Dativ takes -en and Genitiv -er \u2014 see the plural table above.)' }
      ],
      hinglish: 'Yeh galtiyaan strong ending chhod dene se ya galat gender/case ki ending use karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Article-free noun phrases appear constantly in Goethe B1 product reviews, advertisements, and city descriptions.' ],
      note: 'Quick check: is there an article? No → strong ending, matching what the definite article would have shown (der→-er, die→-e, das→-es, die (Pl.)→-e).',
      hinglish: 'Goethe B1 product reviews, advertisements aur city descriptions mein article-free noun phrases lagataar aati hain.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Ein Theaterabenteuer für die ganze Nachbarschaft',
    titleEn: 'A theatre adventure for the whole neighbourhood',
    tokens: [
      { w: 'Frische', role: 'r-adjective', en: 'fresh', hi: 'ताज़ा', type: 'Adjektiv · stark · Nom.', why: 'Strong feminine Nominativ ending -e.' },
      { w: 'Ölfarbe', role: 'plain', en: 'oil colour', hi: 'तेल रंग', type: 'Noun · fem.', why: 'die Ölfarbe (this chapter).' },
      { w: 'liegt', role: 'plain', en: 'lies', hi: 'पड़ी है', type: 'Verb · liegen' },
      { w: 'überall', role: 'plain', en: 'everywhere', hi: 'हर जगह', type: 'Adverb' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Saal', role: 'plain', en: 'hall (Satzende)', hi: 'हॉल (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Talentierte', role: 'r-adjective', en: 'talented', hi: 'प्रतिभाशाली', type: 'Adjektiv · stark · Nom. Pl.', why: 'talentiert (this chapter): talented.' },
      { w: 'Teilnehmende', role: 'plain', en: 'participants', hi: 'प्रतिभागी', type: 'Noun (substantiviert)', why: 'der/die Teilnehmende (this chapter).' },
      { w: 'malen', role: 'plain', en: 'paint', hi: 'चित्र बनाते हैं', type: 'Verb · malen' },
      { w: 'schöne', role: 'r-adjective', en: 'beautiful', hi: 'सुंदर', type: 'Adjektiv · stark · Akk. Pl.' },
      { w: 'Aquarelle', role: 'plain', en: 'watercolours (Satzende)', hi: 'जल रंग (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: ',', plain: true },
      { w: 'während', role: 'r-connector', en: 'while', hi: 'जबकि', type: 'Konjunktion', why: 'während (recycled — Ch.21).' },
      { w: 'traditionelle', role: 'r-adjective', en: 'traditional', hi: 'पारंपरिक', type: 'Adjektiv · stark · Nom. Pl.', why: 'traditionell (this chapter).' },
      { w: 'Kostüme', role: 'plain', en: 'costumes (Satzende)', hi: 'वेशभूषा (Satzende)', type: 'Noun · plural (Satzende)', why: 'das Kostüm (this chapter).' },
      { w: 'aus', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'echtem', role: 'r-adjective', en: 'real', hi: 'असली', type: 'Adjektiv · stark · Dat.', why: 'Strong neuter Dativ ending -em.' },
      { w: 'Upcycling', role: 'plain', en: 'upcycling (Satzende)', hi: 'अपसाइक्लिंग (Satzende)', type: 'Noun · neut. (Satzende)', why: 'das Upcycling (Sg.) (this chapter).' },
      { w: 'entstehen', role: 'plain', en: 'are created (Satzende)', hi: 'बनते हैं (Satzende)', type: 'Verb · entstehen (Satzende)' },
      { w: '.', plain: true },
      { w: 'Guter', role: 'r-adjective', en: 'good', hi: 'अच्छा', type: 'Adjektiv · stark · Nom.', why: 'Strong masculine Nominativ ending -er.' },
      { w: 'Gesang', role: 'plain', en: 'singing (Satzende)', hi: 'गायन (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'braucht', role: 'plain', en: 'needs', hi: 'चाहिए', type: 'Verb · brauchen' },
      { w: 'künstlerischen', role: 'r-adjective', en: 'artistic', hi: 'कलात्मक', type: 'Adjektiv · stark · Akk.', why: 'künstlerisch (this chapter). Strong masculine Akkusativ ending -en.' },
      { w: 'Mut', role: 'plain', en: 'courage (Satzende)', hi: 'साहस (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Am', role: 'plain', en: 'at the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Büfett', role: 'plain', en: 'buffet', hi: 'बुफ़े', type: 'Noun · neut.', why: 'das Büfett (this chapter).' },
      { w: 'gibt', role: 'plain', en: 'gives', hi: 'है', type: 'Verb · geben (idiom)' },
      { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', type: 'Pronoun' },
      { w: 'leckeren', role: 'r-adjective', en: 'delicious', hi: 'स्वादिष्ट', type: 'Adjektiv · stark · Akk.', why: 'Strong masculine Akkusativ ending -en.' },
      { w: 'Snack', role: 'plain', en: 'snack (Satzende)', hi: 'नाश्ता (Satzende)', type: 'Noun · masc. (Satzende)', why: 'der Snack (this chapter).' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'kaltes', role: 'r-adjective', en: 'cold', hi: 'ठंडा', type: 'Adjektiv · stark · Akk.', why: 'Strong neuter Akkusativ ending -es.' },
      { w: 'Wasser', role: 'plain', en: 'water (Satzende)', hi: 'पानी (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Kleine', role: 'r-adjective', en: 'small', hi: 'छोटे', type: 'Adjektiv · stark · Nom. Pl.', why: 'Strong plural ending -e.' },
      { w: 'Kinder', role: 'plain', en: 'children (Satzende)', hi: 'बच्चे (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'rennen', role: 'plain', en: 'run (Satzende)', hi: 'दौड़ते हैं (Satzende)', type: 'Verb · rennen (Satzende)', why: 'rennen (this chapter): to run.' },
      { w: 'zwischen', role: 'plain', en: 'between', hi: 'के बीच', type: 'Preposition · Dat.' },
      { w: 'guten', role: 'r-adjective', en: 'good', hi: 'अच्छे', type: 'Adjektiv · stark · Dat. Pl.', why: 'Strong plural Dativ ending -en.' },
      { w: 'Freunden', role: 'plain', en: 'friends (Satzende)', hi: 'दोस्तों (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true },
      { w: 'Nächtliche', role: 'r-adjective', en: 'nightly', hi: 'रात का', type: 'Adjektiv · stark · Nom. Pl.', why: 'nächtlich (this chapter): nightly.' },
      { w: 'Proben', role: 'plain', en: 'rehearsals (Satzende)', hi: 'रिहर्सल (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'sind', role: 'plain', en: 'are (Satzende)', hi: 'हैं (Satzende)', type: 'Verb · sein (Satzende)' },
      { w: 'anstrengend', role: 'plain', en: 'exhausting', hi: 'थकाऊ', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-connector', en: 'but', hi: 'लेकिन', type: 'Konnektor' },
      { w: 'gute', role: 'r-adjective', en: 'good', hi: 'अच्छी', type: 'Adjektiv · stark · Nom.', why: 'Strong feminine Nominativ ending -e.' },
      { w: 'Nachbarschaft', role: 'plain', en: 'neighbourhood (Satzende)', hi: 'पड़ोस (Satzende)', type: 'Noun · fem. (Satzende)', why: 'die Nachbarschaft (Sg.) (this chapter).' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'Frieden', role: 'plain', en: 'peace (Satzende)', hi: 'शांति (Satzende)', type: 'Noun · masc. (Satzende)', why: 'der Frieden (Sg.) (this chapter).' },
      { w: 'entstehen', role: 'plain', en: 'arise (Satzende)', hi: 'बनते हैं (Satzende)', type: 'Verb · entstehen (Satzende)' },
      { w: 'bei', role: 'plain', en: 'at', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'solchen', role: 'plain', en: 'such (plural dat.)', hi: 'ऐसे', type: 'Determiner · Dativ' },
      { w: 'Treffen', role: 'plain', en: 'meetings (Satzende)', hi: 'मुलाक़ातों (Satzende)', type: 'Noun · plural (Satzende)', why: 'das Treffen (this chapter).' },
      { w: '.', plain: true }
    ],
    translation: 'Fresh oil colour lies everywhere in the hall. Talented participants paint beautiful watercolours, while traditional costumes made from real upcycling are created. Good singing needs artistic courage. At the buffet there\'s a delicious snack and cold water. Small children run between good friends. Nightly rehearsals are exhausting, but good neighbourhood relations and peace arise at such meetings.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_026_L001', speaker: 'Yara', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, hast du gesehen, dass jemand mitten in der Vorstellung aufgestanden ist und gegangen ist?', en: 'Timo, did you see that someone stood up and left in the middle of the show?' },
      { id: 'B1_026_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ja, aber mach dir nichts draus — begeistertes Publikum saß trotzdem bis zum Schluss, und am Ende gab es lauten Applaus.', en: 'Yes, but don\'t worry about it — an enthusiastic audience stayed until the end anyway, and there was loud applause at the finish.' },
      { id: 'B1_026_L003', speaker: 'Yara', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Wirklich? Ich habe die ganze Zeit nur an diese eine Person gedacht.', en: 'Really? I kept thinking about that one person the whole time.' },
      { id: 'B1_026_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Verständlich. Aber ehrlich, guter Applaus von so vielen Leuten wiegt eine Person locker auf.', en: 'Understandable. But honestly, good applause from that many people easily outweighs one person.' }
    ],
    transcript: 'Timo, hast du gesehen, dass jemand mitten in der Vorstellung aufgestanden ist und gegangen ist? Ja, aber mach dir nichts draus — begeistertes Publikum saß trotzdem bis zum Schluss, und am Ende gab es lauten Applaus. Wirklich? Ich habe die ganze Zeit nur an diese eine Person gedacht. Verständlich. Aber ehrlich, guter Applaus von so vielen Leuten wiegt eine Person locker auf.',
    translation: 'Timo, did you see that someone stood up and left in the middle of the show? Yes, but don\'t worry about it — an enthusiastic audience stayed until the end anyway, and there was loud applause at the finish. Really? I kept thinking about that one person the whole time. Understandable. But honestly, good applause from that many people easily outweighs one person.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'hast' },
      { w: 'du' },
      { w: 'gesehen' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'jemand' },
      { w: 'mitten' },
      { w: 'in' },
      { w: 'der' },
      { w: 'Vorstellung' },
      { w: 'aufgestanden' },
      { w: 'ist' },
      { w: 'und' },
      { w: 'gegangen' },
      { w: 'ist' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'mach' },
      { w: 'dir' },
      { w: 'nichts' },
      { w: 'draus' },
      { w: '—', plain: true },
      { w: 'begeistertes' },
      { w: 'Publikum' },
      { w: 'saß' },
      { w: 'trotzdem' },
      { w: 'bis' },
      { w: 'zum' },
      { w: 'Schluss' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'am' },
      { w: 'Ende' },
      { w: 'gab' },
      { w: 'es' },
      { w: 'lauten' },
      { w: 'Applaus' },
      { w: '.', plain: true },
      { w: 'Wirklich' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'die' },
      { w: 'ganze' },
      { w: 'Zeit' },
      { w: 'nur' },
      { w: 'an' },
      { w: 'diese' },
      { w: 'eine' },
      { w: 'Person' },
      { w: 'gedacht' },
      { w: '.', plain: true },
      { w: 'Verständlich' },
      { w: '.', plain: true },
      { w: 'Aber' },
      { w: 'ehrlich' },
      { w: ',', plain: true },
      { w: 'guter' },
      { w: 'Applaus' },
      { w: 'von' },
      { w: 'so' },
      { w: 'vielen' },
      { w: 'Leuten' },
      { w: 'wiegt' },
      { w: 'eine' },
      { w: 'Person' },
      { w: 'locker' },
      { w: 'auf' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was ist während der Show passiert?', qEn: 'What happened during the show?', options: ['jemand ist eingeschlafen', 'jemand ist gegangen', 'die Musik war zu laut', 'es gab keinen Applaus'], optionsEn: ['someone has fallen asleep', 'someone has left', 'the music was too loud', 'there was no applause'], answer: 1,
        explain: '"… dass jemand mitten in der Vorstellung aufgestanden ist und gegangen ist?"' },
      { q: 'Wie beruhigt Timo Yara?', qEn: 'How does Timo reassure Yara?', options: ['Er ignoriert die Frage.', 'Begeistertes Publikum blieb bis zum Schluss, mit lautem Applaus.', 'Er sagt, es war egal.', 'Er lädt sie zu einer neuen Show ein.'], optionsEn: ['He ignores the question.', 'An enthusiastic audience stayed to the end, with loud applause.', 'He says it didn\'t matter.', 'He invites her to a new show.'], answer: 1,
        explain: '"… begeistertes Publikum saß trotzdem bis zum Schluss, und am Ende gab es lauten Applaus."' }
    ]
  },

  speaking: [
    { task: "Jemand ist mitten in der Vorstellung gegangen. Beruhige deinen Freund.", taskEn: "Somebody left in the middle of the performance. Reassure your friend.", de: "Begeistertes Publikum saß trotzdem bis zum Schluss da.", en: "An enthusiastic audience still sat there until the end." },
    { task: "Deine Kollegin fragt, was gute Kunst braucht.", taskEn: "Your colleague asks what good art needs.", de: "Künstlerische Qualität braucht neue Ideen und ehrliche Kritik.", en: "Artistic quality needs new ideas and honest criticism." },
    { task: "Ein Freund fragt, wie die Eröffnung war.", taskEn: "A friend asks how the opening was.", de: "Es gab kaltes Wasser, gutes Essen und laute Musik.", en: "There was cold water, good food and loud music." },
    { task: "Eine Bekannte fragt, was in deiner Nachbarschaft besonders ist.", taskEn: "An acquaintance asks what's special in your neighbourhood.", de: "Alte Tradition und junge Kunst treffen hier zusammen.", en: "Old tradition and young art meet here." },
    { task: "Dein Freund fragt, welche Eigenschaften ein Schauspieler braucht.", taskEn: "Your friend asks what qualities an actor needs.", de: "Er braucht eine starke Stimme, ein gutes Gedächtnis und viel Geduld.", en: "He needs a strong voice, a good memory and a lot of patience." },
    { task: "Rollenspiel: Ihr besprecht die Aufführung.", taskEn: "Role-play: you discuss the performance.", de: "Die Darstellung war beeindruckend, aber die Musik war schwierig. — Ich fand, das war gute Arbeit.", en: "The acting was impressive, but the music was difficult. — I thought it was good work." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short review or description (six to eight sentences) — a product, a city, or an event — using strong adjective endings (no articles) at least four times, covering at least three different genders/cases.',
    starters: ['Frische …', 'Gute …', 'Kaltes …', 'Talentierte …', 'Traditionelle …'],
    placeholder: 'Frische Ölfarbe liegt überall. Talentierte Teilnehmende malen schöne Aquarelle …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "___ Wasser ist gesund." (kalt, neuter, no article)',
      options: ['Kalte', 'Kaltes', 'Kalter'],
      answer: 1,
      explain: 'Neuter Nominativ strong ending is -es: kaltes Wasser.'
    },
    gap: {
      sentence: ['Groß', ' Hund läuft.'],
      gaps: [ { answer: 'er', accepts: ['er'] } ],
      explain: 'Masculine Nominativ strong ending is -er: großer Hund.'
    },
    match: {
      q: 'Match each gender/number to its Nominativ strong ending.',
      pairs: [
        { noun: 'Maskulinum', art: '-er' },
        { noun: 'Femininum', art: '-e' },
        { noun: 'Neutrum', art: '-es' },
        { noun: 'Plural', art: '-e' }
      ]
    },
    builder: {
      target: 'Build: "Talented participants paint beautiful watercolours."',
      bank: ['Talentierte', 'Teilnehmende', 'malen', 'schöne', 'Aquarelle', '.'],
      answer: ['Talentierte', 'Teilnehmende', 'malen', 'schöne', 'Aquarelle', '.'],
      roles: { 'Talentierte': 'r-adjective', 'schöne': 'r-adjective' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Frischer Brot schmeckt gut.',
      right: 'Frisches Brot schmeckt gut.',
      explain: 'Brot is neuter, so the strong Nominativ ending is -es, not -er.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "___ Städte ziehen viele Touristen an." (schön, plural)', options: ['Schöner', 'Schöne', 'Schönes'], answer: 1,
      explain: 'Plural strong Nominativ ending is -e.' },
    { q: 'Complete: "Ich helfe ___ Hund." (groß, masc. Dativ)', options: ['großem', 'großen', 'großer'], answer: 0,
      explain: 'Masculine Dativ strong ending is -em.' },
    { q: 'Which is correct?', options: ['interessantes Bücher', 'interessante Bücher', 'interessanter Bücher'], answer: 1,
      explain: 'Plural strong ending is always -e.' },
    { q: 'Complete: "Die Farbe ___ Hundes." (groß, masc. Genitiv)', options: ['großen', 'großer', 'großes'], answer: 0,
      explain: 'Masculine Genitiv strong ending is -en, and the noun adds -es.' },
    { q: 'Which sentence contains an error?', options: ['Kaltes Wasser ist gesund.', 'Frischer Brot schmeckt gut.', 'Große Häuser kosten viel Geld.'], answer: 1,
      explain: 'Brot is neuter — it should be "Frisches Brot", not "Frischer Brot."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-adjective', html: 'No article means the adjective alone must show gender, case, and number — that\'s why it takes a strong ending.' },
    { c: 'r-adjective', html: 'Strong endings mirror what the definite article would have shown: der→-er, die→-e, das→-es, die (Pl.)→-e — with small shifts in Akkusativ, Dativ, and Genitiv.' },
    { c: 'r-adjective', html: 'The same noun phrase can be strong (no article), weak (definite article), or mixed (indefinite article) — the ending always follows what\'s missing.' }
  ],
  revisionTips: [
    'Before every noun phrase, ask: is there an article? If not, the adjective must carry the strong ending.',
    'Practise saying the four-case table out loud for one gender at a time until it\'s automatic.',
    'Watch for Genitiv masculine/neuter — the adjective takes -en AND the noun itself adds -s/-es.'
  ]
};

window.CHAPTER = CHAPTER;
