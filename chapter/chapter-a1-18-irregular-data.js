/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 2 · Chapter 18
   "Unregelmäßige Verben"  (High-frequency irregular verbs)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-18 word list (14 words).
   Recycles Chapters 1–17 throughout. Theme = university day.
============================================================ */
const CHAPTER = {
  id: 'a1-18-irregular',
  phase: 'A1 · Phase 2',
  number: 18,
  title: 'Unregelmäßige Verben',
  titleEn: 'Irregular Verbs',
  description: 'The verbs you use most are the ones that bend the rules. Meet the high-frequency irregulars — fahren, essen, sehen, geben, schlafen — and the two stem-change patterns (a→ä and e→i/ie) that catch every learner in the du and er/sie/es forms.',
  xp: 160,
  time: 30,
  difficulty: 'Beginner',
  nextChapter: { number: 19, title: 'Satzposition', titleEn: 'Word Order' , href: 'chapter-a1-19-satzposition.html' },

  prevChapter: { number: 17, title: 'Goethe Mini 2', titleEn: 'Goethe Checkpoint 2', href: 'chapter-a1-17-goethe2.html' },
  heroAnimationPath: null,

  // ---------- Story Dialogue (signature section — before vocab/grammar) ----------
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'A normal morning at the Uni. Nora and Timo sort out how they get there, who\'s too tired, who sees the library, and whether there\'s cake in the Mensa — and almost every verb in the scene is an irregular one changing its stem.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear stem changes (fährst, siehst, schläft, gibt) in real speech'
    ],
    scene: 'Am Morgen \u2014 Universität, Berlin',
    femaleSpeakers: ['Nora'],
    dialogue: [
      { speaker: 'Nora', tokens: [
        { w: 'Hallo', role: 'r-subject', en: 'hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting' },
        { w: 'Timo', role: 'r-name', en: 'Timo', hi: 'टीमो', pron: 'TEE-mo', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Fährst', role: 'r-verb', en: 'are you going', hi: 'जा रहे हो', pron: 'FAIRST', type: 'Verb · fahren (du)', why: 'fahren: a → ä in du/er (this chapter).', ex: 'Fährst du zur Uni?', exEn: 'Are you going to the university?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'को', pron: 'tsoor', type: 'Preposition + place' },
        { w: 'Uni', role: 'r-place', en: 'university', hi: 'यूनिवर्सिटी', pron: 'OO-ni', type: 'Noun · fem.', why: 'die Uni (this chapter).', ex: 'Ich fahre zur Uni.', exEn: 'I go to the university.' },
        { w: '?', plain: true }
      ], en: 'Hello Timo! Are you going to the university too?', hi: 'Namaste Timo! Tum bhi university jaa rahe ho?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'fahre', role: 'r-verb', en: 'am going', hi: 'जा रहा हूँ', pron: 'FAH-ruh', type: 'Verb · fahren (ich)', why: 'ich fahre — no vowel change in the ich-form.', ex: 'Ich fahre jetzt.', exEn: 'I am going now.' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Komm', role: 'r-verb', en: 'come', hi: 'आओ', pron: 'kom', type: 'Verb · imperative', lexicalUnit: 'mitkommen' },
        { w: 'mit', role: 'r-adverb', en: 'along', hi: 'साथ', pron: 'mit', type: 'Separable prefix', lexicalUnit: 'mitkommen' },
        { w: '!', plain: true }
      ], en: 'Yes, I am going now. Come along!', hi: 'Haan, main abhi jaa raha hoon. Saath chalo!' },
      { speaker: 'Nora', tokens: [
        { w: 'Gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'müde', role: 'r-adjective', en: 'tired', hi: 'थकी हुई', pron: 'MÜ-duh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Gladly! I am very tired today.', hi: 'Khushi se! Aaj main bahut thaki hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'schläfst', role: 'r-verb', en: 'sleep', hi: 'सोती हो', pron: 'SHLEFST', type: 'Verb · schlafen (du)', why: 'schlafen: a → ä in du/er (this chapter).', ex: 'Du schläfst nicht genug.', exEn: 'You do not sleep enough.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'genug', role: 'r-adverb', en: 'enough', hi: 'काफ़ी', pron: 'ge-NOOK', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'isst', role: 'r-verb', en: 'eat', hi: 'खाती हो', pron: 'ist', type: 'Verb · essen (du)', why: 'essen: e → i in du/er (Ch14).', ex: 'Du isst zu schnell.', exEn: 'You eat too fast.' },
        { w: 'zu', role: 'r-adverb', en: 'too', hi: 'बहुत', pron: 'tsoo', type: 'Adverb' },
        { w: 'schnell', role: 'r-adjective', en: 'fast', hi: 'तेज़', pron: 'shnel', type: 'Adjective' },
        { w: '!', plain: true }
      ], en: 'You do not sleep enough. And you eat too fast!', hi: 'Tum kaafi nahi soti. Aur tum bahut tez khaati ho!' },
      { speaker: 'Nora', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Isst', role: 'r-verb', en: 'are you eating', hi: 'खाते हो', pron: 'ist', type: 'Verb · essen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'der', role: 'r-article', en: 'the', hi: 'यह', pron: 'dair', type: 'Article' },
        { w: 'Mensa', role: 'r-place', en: 'canteen', hi: 'कैंटीन', pron: 'MEN-za', type: 'Noun · fem.', why: 'die Mensa (this chapter).', ex: 'Ich esse in der Mensa.', exEn: 'I eat in the canteen.' },
        { w: '?', plain: true }
      ], en: 'Yes, exactly. Are you eating in the canteen today?', hi: 'Haan, bilkul. Aaj tum canteen mein khaate ho?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'um', role: 'r-time', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + time' },
        { w: 'zwölf', role: 'r-time', en: 'twelve', hi: 'बारह', pron: 'tsvölf', type: 'Number' },
        { w: '.', plain: true },
        { w: 'Kommst', role: 'r-verb', en: 'are you coming', hi: 'आती हो', pron: 'komst', type: 'Verb · kommen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'too', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'Yes, at twelve. Are you coming too?', hi: 'Haan, baarah baje. Tum bhi aaogi?' },
      { speaker: 'Nora', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Gibt', role: 'r-verb', en: 'is there', hi: 'है', pron: 'gipt', type: 'Verb · es gibt', why: '"es gibt" = there is / there are (this chapter).', ex: 'Es gibt Kuchen.', exEn: 'There is cake.' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'Kuchen', role: 'r-akkusativ', en: 'cake', hi: 'केक', pron: 'KOO-khen', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'Yes! Is there cake there too?', hi: 'Haan! Kya wahaan cake bhi hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Klar', role: 'r-adverb', en: 'sure', hi: 'बिल्कुल', pron: 'klahr', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'gibt', role: 'r-verb', en: 'there is', hi: 'है', pron: 'gipt', type: 'Verb · es gibt' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: 'Kuchen', role: 'r-akkusativ', en: 'cake', hi: 'केक', pron: 'KOO-khen', type: 'Noun · masc.' },
        { w: '.', plain: true },
        { w: 'Bis', role: 'r-subject', en: 'until', hi: 'तक', pron: 'bis', type: 'Phrase (part)' },
        { w: 'zwölf', role: 'r-time', en: 'twelve', hi: 'बारह', pron: 'tsvölf', type: 'Number' },
        { w: ',', plain: true },
        { w: 'Nora', role: 'r-name', en: 'Nora', hi: 'नोरा', pron: 'NO-ra', type: 'Name · person' },
        { w: '!', plain: true }
      ], en: 'Sure! There is always cake. See you at twelve, Nora!', hi: 'Bilkul! Wahaan hamesha cake hota hai. Baarah baje milte hain, Nora!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'The verbs you use every day are the rule-breakers. Most irregular verbs only change in <strong>two</strong> forms — <span class="de r-subject">du</span> and <span class="de r-subject">er/sie/es</span> — by switching a stem vowel: <span class="de r-verb">fahren → du fährst</span> (a→ä) and <span class="de r-verb">sehen → du siehst</span> (e→ie). Learn those two slots and the rest falls into place.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is IRREGULAR / STEM-CHANGING VERBS in the present tense: sein, haben, werden, and stem-changers like fahren, schlafen, laufen, waschen (a→ä) and essen, geben, sehen, lesen, sprechen, treffen, nehmen (e→i/ie). ' +
    'The learner wrote sentences using irregular verbs below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Stem changes happen ONLY in du and er/sie/es. ich, wir, ihr, sie/Sie keep the normal stem.\n' +
    '- a→ä: fahren→du fährst/er fährt; schlafen→du schläfst/er schläft; laufen→du läufst/er läuft; waschen→du wäschst/er wäscht.\n' +
    '- e→i: essen→du isst/er isst; geben→du gibst/er gibt; treffen→du triffst/er trifft; sprechen→du sprichst/er spricht; nehmen→du nimmst/er nimmt (note double m).\n' +
    '- e→ie: sehen→du siehst/er sieht; lesen→du liest/er liest.\n' +
    '- sein: ich bin, du bist, er ist, wir sind, ihr seid, sie sind. haben: ich habe, du hast, er hat. werden: ich werde, du wirst, er wird.\n' +
    '- "es gibt" + accusative = there is/are: "Es gibt einen Kuchen."\n' +
    '- All nouns are capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Stem-change check:</b> one sentence on whether du / er-sie-es forms changed correctly.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — your du and er/sie/es forms are changing correctly. On to <span class="de">Satzposition</span>.',
    mid: 'Good. Re-read the two stem-change cards (a→ä and e→i/ie) once, then continue.',
    low: 'Worth another pass — focus on the du / er-sie-es forms in the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Er', role: 'r-subject' }, { w: 'fährt', role: 'r-verb' },
    { w: 'zur', role: 'r-preposition' }, { w: 'Uni', role: 'r-place' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole chapter at a glance before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A uni morning with Nora and Nora — hear stem-changing verbs in a real conversation first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the high-frequency irregular verbs and the campus words around them.' },
    { id: 'grammar',    label: 'Stem changes', tag: 'core',
      objective: 'Master sein/haben/werden and the two stem-change patterns: a→ä and e→i/ie.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a daily-routine text full of irregular verbs and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch who does what — drives, eats, sees, gives — and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say what you do and have, and drill du / er-sie-es forms out loud.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five sentences with irregular verbs and a short daily-life paragraph.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill conjugation, stem changes, and error correction with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All irregular verbs with their stem changes plus the campus words, translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Conjugation grids, stem-change drills, error correction, and a daily-life writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'sein / haben / werden, the a→ä and e→i/ie patterns, full conjugation tables, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'sein · haben · werden', text: 'Use the three key irregulars' },
    { de: 'du fährst, er fährt', text: 'Change a→ä in du / er-sie-es' },
    { de: 'du siehst, er sieht', text: 'Change e→i/ie in du / er-sie-es' },
    { de: 'es gibt …', text: 'Say "there is / there are"' },
    { de: 'Mein Uni-Tag', text: 'Describe a real daily routine' }
  ],

  // ---------- Vocabulary (14 words) ----------
  vocab: [
    // ===== Core Active (irregular verbs) =====
    { de: 'fahren', pos: 'verb', en: 'to drive, go (by vehicle)', hi: 'गाड़ी से जाना', ex: 'Ich fahre mit dem Bus zur Uni.', exEn: 'I go to uni by bus.', conj: { praesens: 'fährt', praeteritum: 'fuhr', perfekt: 'ist gefahren' } },
    { de: 'geben', pos: 'verb', en: 'to give; (es gibt) there is', hi: 'देना; (es gibt) होना', ex: 'Ich gebe dir ein Stück Kuchen. Es gibt Kaffee.', exEn: 'I give you a piece of cake. There is coffee.', conj: { praesens: 'gibt', praeteritum: 'gab', perfekt: 'hat gegeben' } },
    { de: 'schlafen', pos: 'verb', en: 'to sleep', hi: 'सोना', ex: 'Max schläft zu wenig.', exEn: 'Max sleeps too little.', conj: { praesens: 'schläft', praeteritum: 'schlief', perfekt: 'hat geschlafen' } },
    { de: 'sehen', pos: 'verb', en: 'to see', hi: 'देखना', ex: 'Siehst du die Bibliothek?', exEn: 'Do you see the library?', conj: { praesens: 'sieht', praeteritum: 'sah', perfekt: 'hat gesehen' } },
    { de: 'treffen', pos: 'verb', en: 'to meet', hi: 'मिलना', ex: 'Ich treffe Max in der Mensa.', exEn: 'I meet Max in the canteen.', conj: { praesens: 'trifft', praeteritum: 'traf', perfekt: 'hat getroffen' } },
    // ===== Active Support =====
    { de: 'besuchen', pos: 'verb', en: 'to visit', hi: 'मिलने जाना', ex: 'Ich besuche die Bibliothek.', exEn: 'I visit the library.', conj: { praesens: 'besucht', praeteritum: 'besuchte', perfekt: 'hat besucht' } },
    { de: 'Bibliothek', art: 'die', gender: 'f', plural: 'Bibliotheken', pos: 'noun', en: 'library', hi: 'पुस्तकालय', ex: 'Die Bibliothek ist groß.', exEn: 'The library is big.' },
    { de: 'Mensa', art: 'die', gender: 'f', plural: 'Mensen', pos: 'noun', en: 'canteen, refectory', hi: 'कैंटीन', ex: 'Wir essen in der Mensa.', exEn: 'We eat in the canteen.' },
    { de: 'Uni', art: 'die', gender: 'f', plural: 'Unis', pos: 'noun', en: 'uni, university', hi: 'विश्वविद्यालय', ex: 'Ich fahre zur Uni.', exEn: 'I go to uni.' },
    { de: 'waschen', pos: 'verb', en: 'to wash', hi: 'धोना', ex: 'Ich wasche die Hände.', exEn: 'I wash my hands.', conj: { praesens: 'wäscht', praeteritum: 'wusch', perfekt: 'hat gewaschen' } },
    // ===== Passive =====
    { de: 'Unicafé', art: 'das', gender: 'n', plural: 'Unicafés', pos: 'noun', en: 'uni café', hi: 'यूनि कैफ़े', ex: 'Ich lese im Unicafé.', exEn: 'I read in the uni café.' },
    { de: 'Zeitung', art: 'die', gender: 'f', plural: 'Zeitungen', pos: 'noun', en: 'newspaper', hi: 'अख़बार', ex: 'Anna liest die Zeitung.', exEn: 'Anna reads the newspaper.' },
    // ===== Reference / System =====
    { de: 'unregelmäßig', pos: 'adjective', en: 'irregular', hi: 'अनियमित', ex: 'Fahren ist ein unregelmäßiges Verb.', exEn: 'Fahren is an irregular verb.' }
  ],

  // ---------- Stem changes (rule cards → accordion) ----------
  grammar: [
    {
      title: 'sein, haben, werden — the big three',
      goldenRule: 'Three verbs, and all three misbehave only in <b>du</b> and <b>er/sie/es</b> — except sein, which misbehaves everywhere.',
      memoryTrick: '<b>haben</b> du aur er mein apna "b" gira deta hai: <b>hast</b>, <b>hat</b>. <b>werden</b> mein "e" badal kar "i" ho jaata hai: <b>wirst</b>, <b>wird</b>. Aur <b>sein</b> ka koi logic nahi hai — use bas yaad karna padta hai.',
      body: [
        'Three irregular verbs power most A1 German. <span class="de r-verb">sein</span> (to be) is fully irregular; <span class="de r-verb">haben</span> (to have) and <span class="de r-verb">werden</span> (to become) only wobble in du and er/sie/es.'
      ],
      table: {
        head: ['', 'sein (be)', 'haben (have)', 'werden (become)'],
        rows: [
          ['ich', '<span class="de r-verb">bin</span>', '<span class="de r-verb">habe</span>', '<span class="de r-verb">werde</span>'],
          ['du', '<span class="de r-verb">bist</span>', '<span class="de r-verb">hast</span>', '<span class="de r-verb">wirst</span>'],
          ['er/sie/es', '<span class="de r-verb">ist</span>', '<span class="de r-verb">hat</span>', '<span class="de r-verb">wird</span>'],
          ['wir / sie / Sie', '<span class="de r-verb">sind</span>', '<span class="de r-verb">haben</span>', '<span class="de r-verb">werden</span>'],
          ['ihr', '<span class="de r-verb">seid</span>', '<span class="de r-verb">habt</span>', '<span class="de r-verb">werdet</span>']
        ]
      },
      note: 'Learn these by heart — they appear in almost every sentence. <b>sein</b> is the most irregular German verb; <b>haben</b> drops the b in du hast / er hat; <b>werden</b> gives du wirst / er wird.',
      hinglish: 'Teen sabse zaroori irregular verbs: <b>sein</b> (hona) poora irregular hai; <b>haben</b> (paas hona) du/er mein "b" gira deta hai (du hast, er hat); <b>werden</b> (banna) → du wirst, er wird. Inhe bas yaad karna padta hai.'
    },
    {
      title: 'Pattern 1 — a → ä',
      goldenRule: 'The vowel changes in <b>du</b> and <b>er/sie/es</b> only. Every other form keeps the plain vowel.',
      formula: [
        'ich fahre   ·  <b>du fährst</b>  ·  <b>er fährt</b>',
        'wir fahren  ·  ihr fahrt   ·  sie fahren'
      ],
      memoryTrick: 'Sirf <b>do</b> forms badalte hain — <b>du</b> aur <b>er/sie/es</b>. Baaki chaar bilkul waise hi rehte hain.',
      body: [
        'Many common verbs with <strong>a</strong> in the stem change it to <strong>ä</strong> — but ONLY in du and er/sie/es. Everything else stays normal.'
      ],
      table: {
        head: ['', 'fahren (go)', 'schlafen (sleep)', 'laufen (run)', 'waschen (wash)'],
        rows: [
          ['ich', '<span class="de r-verb">fahre</span>', '<span class="de r-verb">schlafe</span>', '<span class="de r-verb">laufe</span>', '<span class="de r-verb">wasche</span>'],
          ['du', '<span class="de r-verb">fährst</span>', '<span class="de r-verb">schläfst</span>', '<span class="de r-verb">läufst</span>', '<span class="de r-verb">wäschst</span>'],
          ['er/sie/es', '<span class="de r-verb">fährt</span>', '<span class="de r-verb">schläft</span>', '<span class="de r-verb">läuft</span>', '<span class="de r-verb">wäscht</span>'],
          ['wir / sie / Sie', '<span class="de r-verb">fahren</span>', '<span class="de r-verb">schlafen</span>', '<span class="de r-verb">laufen</span>', '<span class="de r-verb">waschen</span>']
        ]
      },
      note: 'The change is only in <b>du</b> and <b>er/sie/es</b>: ich fahre, but du f<u>ä</u>hrst, er f<u>ä</u>hrt. ich, wir, ihr and sie/Sie keep the plain <b>a</b>. One word in the table is not strictly a→ä: <span class="de">laufen</span> umlauts the whole vowel pair, <b>au → äu</b> (du läufst, er läuft). Same habit, same two forms — the dots simply land on a pair.',
      hinglish: 'Stem ka <b>a</b> → <b>ä</b> ho jaata hai, sirf <b>du</b> aur <b>er/sie/es</b> mein: ich fahre, par du f<u>ä</u>hrst, er f<u>ä</u>hrt. ich/wir/ihr/sie-Sie mein normal <b>a</b> rehta hai. Ek chhoti baat: <span class="de">laufen</span> mein akela a nahi, poora <b>au → äu</b> badalta hai (du läufst) — aadat wahi hai, bas dots vowel-jodi par lagte hain.'
    },
    {
      title: 'Pattern 2 — e → i / ie',
      goldenRule: 'Same two forms, different vowel: <b>e → i</b> (essen, geben, sprechen) or <b>e → ie</b> (sehen, lesen).',
      memoryTrick: 'Wahi do forms badalte hain (<b>du</b> aur <b>er/sie/es</b>), bas yahan vowel <b>e</b> se <b>i</b> ya <b>ie</b> ho jaata hai. Aur <b>nehmen</b> sabse zyada badalta hai: <b>du nimmst</b>.',
      recap: [
        'The change hits <b>du</b> and <b>er/sie/es</b> — nothing else.',
        'e→i: essen, geben, sprechen, treffen, nehmen.',
        'e→ie: sehen, lesen.'
      ],
      body: [
        'Verbs with <strong>e</strong> in the stem change it to <strong>i</strong> or <strong>ie</strong>, again only in du and er/sie/es.'
      ],
      table: {
        head: ['', 'essen (eat)', 'geben (give)', 'sehen (see)', 'lesen (read)'],
        rows: [
          ['ich', '<span class="de r-verb">esse</span>', '<span class="de r-verb">gebe</span>', '<span class="de r-verb">sehe</span>', '<span class="de r-verb">lese</span>'],
          ['du', '<span class="de r-verb">isst</span>', '<span class="de r-verb">gibst</span>', '<span class="de r-verb">siehst</span>', '<span class="de r-verb">liest</span>'],
          ['er/sie/es', '<span class="de r-verb">isst</span>', '<span class="de r-verb">gibt</span>', '<span class="de r-verb">sieht</span>', '<span class="de r-verb">liest</span>'],
          ['wir / sie / Sie', '<span class="de r-verb">essen</span>', '<span class="de r-verb">geben</span>', '<span class="de r-verb">sehen</span>', '<span class="de r-verb">lesen</span>']
        ]
      },
      note: '<b>e→i</b>: essen, geben, sprechen, treffen, nehmen (du nimmst, er nimmt — note the double m). <b>e→ie</b>: sehen, lesen. Again, only du and er/sie/es change.',
      hinglish: 'Stem ka <b>e</b> → <b>i</b> ya <b>ie</b>, phir sirf du/er-sie-es mein. <b>e→i</b>: essen, geben, sprechen, treffen, nehmen (du nimmst!). <b>e→ie</b>: sehen, lesen. Baaki forms normal.'
    },
    {
      title: 'es gibt — "there is / there are"',
      goldenRule: '<b>es gibt</b> never changes — singular or plural — and what follows it is <b>accusative</b>.',
      memoryTrick: 'English "there is/there are" do roop leta hai; German ka <b>es gibt</b> ek hi rehta hai. Iske baad masculine <b>einen</b> ho jaata hai.',
      body: [
        'One super-useful phrase from <span class="de r-verb">geben</span>: <span class="de">es gibt</span> means "there is" or "there are", and it always takes the <strong>accusative</strong>.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Es gibt Kaffee.</span>', 'There is coffee.'],
          ['<span class="de">Es gibt einen Kuchen.</span>', 'There is a cake. (masc. acc.)'],
          ['<span class="de">Gibt es eine Mensa?</span>', 'Is there a canteen?'],
          ['<span class="de">Es gibt keine Zeitung.</span>', 'There is no newspaper.']
        ]
      },
      note: '<b>es gibt</b> never changes — it stays "gibt" no matter how many things there are. What follows is accusative, so masculine ein → <b>einen</b>.',
      hinglish: '<b>es gibt</b> = "hai / hote hain". Yeh kabhi nahi badalta — hamesha "gibt". Iske baad accusative aata hai, isliye masculine ein → <b>einen</b>: "Es gibt einen Kuchen."'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four irregular-verb traps to avoid.' ],
      mistakes: [
        { wrong: 'Du fahrst zur Uni.', right: 'Du fährst zur Uni.', why: 'a→ä in the du-form: fährst, not fahrst.' },
        { wrong: 'Er esst einen Apfel.', right: 'Er isst einen Apfel.', why: 'e→i: essen → er isst.' },
        { wrong: 'Ich gibe dir Kuchen.', right: 'Ich gebe dir Kuchen.', why: 'No stem change in the ich-form — only du and er/sie/es change.' },
        { wrong: 'Es gibt ein Kuchen.', right: 'Es gibt einen Kuchen.', why: 'es gibt takes the accusative; masculine ein → einen.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>du</b>-form mein <b>a</b> se <b>\u00e4</b> ban jaata hai: <b>du f\u00e4hrst</b>, na ki \u201cfahrst\u201d. Isi tarah <b>e</b> se <b>i</b>: <b>er isst</b>, na ki \u201cesst\u201d. <b>ich</b>-form mein koi change nahi hota \u2014 <b>ich gebe</b> \u2014 kyunki sirf <b>du</b> aur <b>er/sie/es</b> badalte hain. Aur <b>es gibt</b> ke baad accusative aata hai: <b>einen Kuchen</b>.'
    }
  ],

  // ---------- Reading passage (daily routine, clickable) ----------
  reading: {
    title: 'Rohans Uni-Tag',
    titleEn: 'Rohan\u2019s day at uni',
    tokens: [
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name' },
      { w: 'fährt', role: 'r-verb', en: 'goes', hi: 'जाता है', pron: 'fairt', type: 'Verb · fahren (er)', why: 'Stem change a→ä: er fährt (this chapter).', ex: 'Er fährt zur Uni.', exEn: 'He goes to uni.' },
      { w: 'mit', role: 'r-preposition', en: 'by', hi: 'से', pron: 'mit', type: 'Preposition + dat.' },
      { w: 'dem', role: 'r-article', en: 'the (dat.)', hi: 'इस', pron: 'daym', type: 'Article · dative' },
      { w: 'Bus', role: 'r-object', en: 'bus', hi: 'बस', pron: 'bus', type: 'Noun · masc.', why: 'der Bus (recycled — W-Fragen).', ex: 'mit dem Bus', exEn: 'by bus' },
      { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'को', pron: 'tsoor', type: 'Preposition + place', why: 'zu + der → zur Uni.', ex: 'zur Uni', exEn: 'to the university' },
      { w: 'Uni', role: 'r-place', en: 'uni', hi: 'यूनिवर्सिटी', pron: 'OO-nee', type: 'Noun · place', why: 'die Uni (this chapter).', ex: 'Ich fahre zur Uni.', exEn: 'I go to uni.' },
      { w: '.', plain: true },
      { w: 'Dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
      { w: 'trifft', role: 'r-verb', en: 'meets', hi: 'मिलता है', pron: 'trift', type: 'Verb · treffen (er)', why: 'Stem change e→i: er trifft (this chapter).', ex: 'Er trifft Max.', exEn: 'He meets Max.' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun', why: 'Verb position 2 after the front adverb Dort.', ex: 'Dort trifft er Max.', exEn: 'There he meets Max.' },
      { w: 'Max', role: 'r-object', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'they', hi: 'वे', pron: 'zee', type: 'Pronoun', why: 'sie = they (recycled — Wer bist du?).', ex: 'Sie essen.', exEn: 'They eat.' },
      { w: 'essen', role: 'r-verb', en: 'eat', hi: 'खाते हैं', pron: 'E-sen', type: 'Verb · essen (sie)', why: 'No change in sie-plural: sie essen (recycled — Essen & Trinken).', ex: 'Sie essen zusammen.', exEn: 'They eat together.' },
      { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition + dat.' },
      { w: 'der', role: 'r-article', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article · dative' },
      { w: 'Mensa', role: 'r-place', en: 'canteen', hi: 'कैंटीन', pron: 'MEN-za', type: 'Noun · place', why: 'die Mensa (this chapter).', ex: 'in der Mensa', exEn: 'in the canteen' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-subject', en: 'there', hi: 'वहाँ', pron: 'es', type: 'Pronoun', why: '"es gibt" = there is (this chapter).', ex: 'Es gibt Kuchen.', exEn: 'There is cake.' },
      { w: 'gibt', role: 'r-verb', en: 'is (there)', hi: 'है', pron: 'gipt', type: 'Verb · geben', why: 'geben e→i; "es gibt" + acc. (this chapter).', ex: 'Es gibt einen Kuchen.', exEn: 'There is a cake.' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · acc.', why: 'masc. accusative ein → einen (Chapter 12).', ex: 'einen Kuchen', exEn: 'a cake' },
      { w: 'Kuchen', role: 'r-object', en: 'cake', hi: 'केक', pron: 'KOO-khen', type: 'Noun · masc.', why: 'der Kuchen (recycled — Essen & Trinken).', ex: 'Es gibt einen Kuchen.', exEn: 'There is a cake.' },
      { w: '.', plain: true },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er)', why: 'sein, er-form (this chapter).', ex: 'Max ist müde.', exEn: 'Max is tired.' },
      { w: 'müde', role: 'r-adjective', en: 'tired', hi: 'थका हुआ', pron: 'MÜ-duh', type: 'Adjective', why: 'sein + adjective (Chapter 13).', ex: 'Er ist müde.', exEn: 'He is tired.' },
      { w: ',', plain: true },
      { w: 'denn', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'den', type: 'Conjunction' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'schläft', role: 'r-verb', en: 'sleeps', hi: 'सोता है', pron: 'shlayft', type: 'Verb · schlafen (er)', why: 'Stem change a→ä: er schläft (this chapter).', ex: 'Er schläft zu wenig.', exEn: 'He sleeps too little.' },
      { w: 'zu', role: 'r-adverb', en: 'too', hi: 'बहुत', pron: 'tsoo', type: 'Adverb' },
      { w: 'wenig', role: 'r-adverb', en: 'little', hi: 'कम', pron: 'VAY-nikh', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Danach', role: 'r-adverb', en: 'afterwards', hi: 'उसके बाद', pron: 'da-NAKH', type: 'Adverb', why: 'danach (recycled — Hobbies).', ex: 'Danach liest er.', exEn: 'Afterwards he reads.' },
      { w: 'liest', role: 'r-verb', en: 'reads', hi: 'पढ़ता है', pron: 'leest', type: 'Verb · lesen (er)', why: 'Stem change e→ie: er liest; verb position 2 (this chapter).', ex: 'Er liest die Zeitung.', exEn: 'He reads the newspaper.' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · acc.' },
      { w: 'Zeitung', role: 'r-object', en: 'newspaper', hi: 'अख़बार', pron: 'TSY-tung', type: 'Noun · fem.', why: 'die Zeitung (this chapter).', ex: 'Er liest die Zeitung.', exEn: 'He reads the newspaper.' },
      { w: '.', plain: true }
    ],
    translation: 'Rohan goes to uni by bus. There he meets Max. They eat together in the canteen. There is a cake. Max is tired, because he sleeps too little. Afterwards he reads the newspaper.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_018_L001', speaker: 'Nora', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, isst du heute Abend noch etwas?', en: 'Timo, are you eating something else tonight?' },
      { id: 'A1_018_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ja, ich esse eine Suppe. Und du?', en: 'Yes, I\'m eating a soup. And you?' },
      { id: 'A1_018_L003', speaker: 'Nora', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich lese noch ein Kapitel. Schläfst du früh?', en: 'I\'m reading another chapter. Are you sleeping early?' },
      { id: 'A1_018_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nein, ich schlafe erst spät. Ich fahre morgen früh zur Bibliothek.', en: 'No, I only sleep late. I\'m going to the library early tomorrow.' }
    ],
    transcript: 'Timo, isst du heute Abend noch etwas? Ja, ich esse eine Suppe. Und du? Ich lese noch ein Kapitel. Schläfst du früh? Nein, ich schlafe erst spät. Ich fahre morgen früh zur Bibliothek.',
    translation: 'Timo, are you eating something else tonight? Yes, I\'m eating a soup. And you? I\'m reading another chapter. Are you sleeping early? No, I only sleep late. I\'m going to the library early tomorrow.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'isst' },
      { w: 'du' },
      { w: 'heute' },
      { w: 'Abend' },
      { w: 'noch' },
      { w: 'etwas' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'esse' },
      { w: 'eine' },
      { w: 'Suppe' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'du' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'lese' },
      { w: 'noch' },
      { w: 'ein' },
      { w: 'Kapitel' },
      { w: '.', plain: true },
      { w: 'Schläfst' },
      { w: 'du' },
      { w: 'früh' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'schlafe' },
      { w: 'erst' },
      { w: 'spät' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'fahre' },
      { w: 'morgen' },
      { w: 'früh' },
      { w: 'zur' },
      { w: 'Bibliothek' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was isst Timo heute Abend?', qEn: 'What is Timo eating tonight?', options: ['Kuchen', 'eine Suppe', 'Brot', 'nichts'], optionsEn: ['cake', 'a soup', 'bread', 'nothing'], answer: 1,
        explain: '"Ich esse eine Suppe."' },
      { q: 'Wohin geht Timo morgen früh?', qEn: 'Where is Timo going tomorrow morning?', options: ['zur Uni', 'zur Bibliothek', 'zur Mensa', 'zum Café'], optionsEn: ['to the university', 'to the library', 'to the canteen', 'to the café'], answer: 1,
        explain: '"Ich fahre morgen früh zur Bibliothek."' }
    ]
  },

  speaking: [
    { task: "Dein Freund fragt: Wie fährst du zur Uni?", taskEn: "Your friend asks: how do you get to university?", de: "Ich fahre mit dem Bus zur Uni.", en: "I take the bus to university." },
    { task: "Deine Freundin fragt: Was machst du mittags?", taskEn: "Your friend asks: what do you do at lunchtime?", de: "Ich treffe Freunde und wir essen in der Mensa.", en: "I meet friends and we eat in the canteen." },
    { task: "Du bist mit einer Studentin an der Uni. Zeig ihr die Bibliothek.", taskEn: "You're at the university with a student. Show her the library.", de: "Siehst du die Bibliothek? Dort gibt es auch ein Unicafé.", en: "Do you see the library? There's a campus café there too." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about a normal day using irregular verbs. Use at least one a→ä verb (fahren, schlafen, laufen), one e→i/ie verb (essen, sehen, geben, lesen), and one "es gibt" sentence. Try a du or er/sie/es form so a stem change appears.',
    starters: ['Ich fahre …', 'Mein Freund schläft …', 'In der Mensa gibt es …', 'Danach lese ich …'],
    placeholder: 'Ich fahre mit dem Bus zur Uni …',
    minWords: 18
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct form: "Du ___ zur Uni."',
      options: ['fahrst', 'fährst', 'fahrt', 'fährt'],
      answer: 1,
      explain: 'a→ä in the du-form: du fährst.'
    },
    gap: {
      // e→i / e→ie stem changes in er-form
      sentence: ['Er ', ' einen Apfel und ', ' die Zeitung.'],
      gaps: [ { answer: 'isst', accepts: ['isst'] }, { answer: 'liest', accepts: ['liest'] } ],
      explain: 'essen → er isst (e→i); lesen → er liest (e→ie).'
    },
    match: {
      q: 'Match each verb to its er/sie/es form.',
      pairs: [
        { noun: 'fahren', art: 'fährt' },
        { noun: 'sehen', art: 'sieht' },
        { noun: 'geben', art: 'gibt' },
        { noun: 'schlafen', art: 'schläft' }
      ]
    },
    builder: {
      target: 'Build: "He goes to uni."',
      bank: ['Er', 'fährt', 'zur', 'Uni'],
      answer: ['Er', 'fährt', 'zur', 'Uni'],
      roles: { 'Er': 'r-subject', 'fährt': 'r-verb', 'zur': 'r-preposition', 'Uni': 'r-place' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which is correct?', options: ['Du fahrst', 'Du fährst', 'Du fahret', 'Du fahre'], answer: 1,
      explain: 'a→ä in the du-form: du fährst.' },
    { q: 'Complete: "Er ___ einen Apfel." (essen)', options: ['esse', 'isst', 'esst', 'essen'], answer: 1,
      explain: 'e→i: essen → er isst.' },
    { q: 'Which form has NO stem change?', options: ['du siehst', 'ich sehe', 'er sieht', 'du gibst'], answer: 1,
      explain: 'Stem changes only in du and er/sie/es. ich sehe stays plain.' },
    { q: '"Es gibt ___ Kuchen." (a cake, masc.)', options: ['ein', 'einen', 'eine', 'der'], answer: 1,
      explain: 'es gibt takes the accusative; masculine ein → einen.' },
    { q: 'Which is the er/sie/es form of "schlafen"?', options: ['schlaft', 'schläft', 'schlieft', 'schläfst'], answer: 1,
      explain: 'a→ä: er schläft.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'Three to memorise: <span class="de">ich bin / du bist / er ist</span>, <span class="de">ich habe / du hast / er hat</span>, <span class="de">ich werde / du wirst / er wird</span>.' },
    { c: 'r-verb', html: 'Stem changes hit only <span class="de">du</span> and <span class="de">er/sie/es</span>: a→ä (<span class="de">fährt, schläft</span>), e→i/ie (<span class="de">isst, gibt, sieht, liest</span>).' },
    { c: 'r-object', html: 'Say it exists: <span class="de">Es gibt einen Kuchen.</span> — es gibt + accusative.' }
  ],
  revisionTips: [
    'Drill only two slots per verb: du and er/sie/es. The rest are regular.',
    'Group them: a→ä (fahren, schlafen, laufen, waschen) vs e→i/ie (essen, geben, sehen, lesen, treffen).',
    'Use "es gibt" daily — it never changes and always takes the accusative.'
  ]
};

window.CHAPTER = CHAPTER;
