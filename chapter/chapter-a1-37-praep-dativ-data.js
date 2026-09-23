/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 5 · Chapter 37
   "Präpositionen mit Dativ"  (always-dative prepositions)
   Vocabulary source: uploaded chapter-37 word list (23 words).
   Theme = planning a weekend trip; transport. Recycles Ch1–36.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-37-praep-dativ',
  phase: 'A1 · Phase 5',
  number: 37,
  title: 'Präpositionen mit Dativ',
  titleEn: 'Dative Prepositions',
  description: 'Seven little words that always take the dative: aus, bei, mit, nach, seit, von, zu (plus gegenüber). After any of them, the article shifts — mit dem Bus, zu der → zur, von dem → vom. Lock these in and you can say where you\u2019re from, who you\u2019re with, and how you travel.',
  xp: 170,
  time: 35,
  difficulty: 'Beginner',
  nextChapter: { number: 38, title: 'Wechselpräpositionen', titleEn: 'Two-Way Prepositions' , href: 'chapter-a1-38-wechselpraep.html' },

  prevChapter: { number: 36, title: 'Dativ Einführung', titleEn: 'The Dative Case', href: 'chapter-a1-36-dativ.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Kerstin and Nico are planning a weekend trip to Munich. Who travels how, who they\u2019re staying with, how long they\u2019ve studied German \u2014 every answer rides on a dative preposition: mit dem Zug, bei der Tante, seit einem Jahr.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear mit dem / bei der / zur in real speech'
    ],
    scene: 'Wochenendplanung \u2014 eine Reise, Berlin',
    femaleSpeakers: ['Kerstin'],
    dialogue: [
      { speaker: 'Kerstin', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'fährst', role: 'r-verb', en: 'are you going', hi: 'जाते हो', pron: 'FAIRST', type: 'Verb · fahren (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'को', pron: 'tsoor', type: 'Preposition + place' },
        { w: 'Party', role: 'r-place', en: 'party', hi: 'पार्टी', pron: 'PAR-ty', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'How are you getting to the party?', hi: 'Tum party kaise jaate ho?' },
      { speaker: 'Nico', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'fahre', role: 'r-verb', en: 'go', hi: 'जाता हूँ', pron: 'FAH-ruh', type: 'Verb · fahren (ich)' },
        { w: 'mit', role: 'r-preposition', en: 'by', hi: 'से', pron: 'mit', type: 'Preposition + dative', why: 'mit + dative names the means of transport (this chapter).', ex: 'Ich fahre mit dem Bus.', exEn: 'I go by bus.' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Bus', role: 'r-dativ', en: 'bus (dat.)', hi: 'बस से', pron: 'bus', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'I go by bus.', hi: 'Main bus se jaata hoon.' },
      { speaker: 'Kerstin', tokens: [
        { w: 'Mit', role: 'r-preposition', en: 'by', hi: 'से', pron: 'mit', type: 'Preposition + dative' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Bus', role: 'r-dativ', en: 'bus (dat.)', hi: 'बस से', pron: 'bus', type: 'Noun · masc. dat.' },
        { w: '?', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'dauert', role: 'r-verb', en: 'takes', hi: 'लगता है', pron: 'DOW-ert', type: 'Verb · dauern' },
        { w: 'lange', role: 'r-time', en: 'long', hi: 'देर', pron: 'LANG-uh', type: 'Adverb · time' },
        { w: '!', plain: true }
      ], en: 'By bus? That takes long!', hi: 'Bus se? Isme der lagti hai!' },
      { speaker: 'Nico', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben (ich)' },
        { w: 'kein', role: 'r-negation', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Negation' },
        { w: 'Auto', role: 'r-akkusativ', en: 'car', hi: 'कार', pron: 'OW-to', type: 'Noun · neut.' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Yes, but I have no car. And you?', hi: 'Haan, par mere paas car nahi hai. Aur tum?' },
      { speaker: 'Kerstin', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'fahre', role: 'r-verb', en: 'go', hi: 'जाती हूँ', pron: 'FAH-ruh', type: 'Verb · fahren (ich)' },
        { w: 'mit', role: 'r-preposition', en: 'by', hi: 'से', pron: 'mit', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'U-Bahn', role: 'r-dativ', en: 'underground (dat.)', hi: 'मेट्रो से', pron: 'OO-bahn', type: 'Noun · fem. dat.' },
        { w: '.', plain: true },
        { w: 'Die', role: 'r-subject', en: 'it', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'schnell', role: 'r-adjective', en: 'fast', hi: 'तेज़', pron: 'shnel', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'I go by underground. It is fast.', hi: 'Main metro se jaati hoon. Yeh tez hai.' },
      { speaker: 'Nico', side: 'right', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Kommst', role: 'r-verb', en: 'are you coming', hi: 'आ रही हो', pron: 'komst', type: 'Verb · kommen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition + dative', why: 'von + dative names the starting point (this chapter).', ex: 'Kommst du von der Arbeit?', exEn: 'Are you coming from work?' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Arbeit', role: 'r-dativ', en: 'work (dat.)', hi: 'काम से', pron: 'AR-byte', type: 'Noun · fem. dat.' },
        { w: '?', plain: true }
      ], en: 'Really? Are you coming from work?', hi: 'Sach mein? Tum kaam se aa rahi ho?' },
      { speaker: 'Kerstin', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'komme', role: 'r-verb', en: 'come', hi: 'आती हूँ', pron: 'KO-muh', type: 'Verb · kommen (ich)' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Arbeit', role: 'r-dativ', en: 'work (dat.)', hi: 'काम से', pron: 'AR-byte', type: 'Noun · fem. dat.' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'gehe', role: 'r-verb', en: 'go', hi: 'जाती हूँ', pron: 'GAY-uh', type: 'Verb · gehen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'zu', role: 'r-preposition', en: 'to', hi: 'तक', pron: 'tsoo', type: 'Preposition + dative', why: 'zu + dative names the destination (this chapter).', ex: 'Ich gehe zu Fuß.', exEn: 'I go on foot.' },
        { w: 'Fuß', role: 'r-dativ', en: 'foot (fixed phrase)', hi: 'पैदल', pron: 'foos', type: 'Noun · fixed phrase' },
        { w: '.', plain: true }
      ], en: 'Yes, I come directly from work. And then I go on foot.', hi: 'Haan, main seedhe kaam se aati hoon. Aur phir main paidal jaati hoon.' },
      { speaker: 'Nico', side: 'right', tokens: [
        { w: 'Zu', role: 'r-preposition', en: 'on', hi: 'तक', pron: 'tsoo', type: 'Preposition + dative' },
        { w: 'Fuß', role: 'r-dativ', en: 'foot (fixed phrase)', hi: 'पैदल', pron: 'foos', type: 'Noun · fixed phrase' },
        { w: '?', plain: true },
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कितनी', pron: 'vee', type: 'Question word' },
        { w: 'lange', role: 'r-time', en: 'long', hi: 'देर', pron: 'LANG-uh', type: 'Adverb · time' },
        { w: 'dauert', role: 'r-verb', en: 'does it take', hi: 'लगता है', pron: 'DOW-ert', type: 'Verb · dauern' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'On foot? How long does that take?', hi: 'Paidal? Isme kitni der lagti hai?' },
      { speaker: 'Kerstin', tokens: [
        { w: 'Nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'zehn', role: 'r-time', en: 'ten', hi: 'दस', pron: 'tsayn', type: 'Number' },
        { w: 'Minuten', role: 'r-time', en: 'minutes', hi: 'मिनट', pron: 'mi-NOO-ten', type: 'Noun · plural' },
        { w: '.', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'lange', role: 'r-time', en: 'long', hi: 'देर', pron: 'LANG-uh', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'Only ten minutes. That is not long.', hi: 'Sirf das minute. Zyada der nahi.' },
      { speaker: 'Nico', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'fahre', role: 'r-verb', en: 'go', hi: 'जाता हूँ', pron: 'FAH-ruh', type: 'Verb · fahren (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'mit', role: 'r-preposition', en: 'by', hi: 'से', pron: 'mit', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'U-Bahn', role: 'r-dativ', en: 'underground (dat.)', hi: 'मेट्रो से', pron: 'OO-bahn', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'Then maybe I will go by underground too.', hi: 'Toh shayad main bhi metro se jaunga.' },
      { speaker: 'Kerstin', tokens: [
        { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Idee', role: 'r-subject', en: 'idea', hi: 'विचार', pron: 'i-DAY', type: 'Noun · fem.' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'fahren', role: 'r-verb', en: 'go', hi: 'जाते हैं', pron: 'FAH-ren', type: 'Verb · fahren (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Good idea! Then we go together.', hi: 'Achha vichaar! Toh hum saath jaate hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Seven prepositions <em>always</em> trigger the dative \u2014 no matter what. Memorise them as a chant: <span class="de r-preposition">aus, bei, mit, nach, seit, von, zu</span> (plus <span class="de r-preposition">gegenüber</span>). After any of them the article shifts to the dative: <span class="de">mit <span class="r-dativ">dem</span> Bus</span>, <span class="de">bei <span class="r-dativ">der</span> Tante</span>. Two contract: <span class="de">zu dem → zum, zu der → zur, von dem → vom</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is DATIVE PREPOSITIONS: aus, bei, mit, nach, seit, von, zu (and gegenüber), which ALWAYS take the dative. ' +
    'The learner wrote sentences with dative prepositions below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- These prepositions are ALWAYS followed by the dative: aus (from/out of), bei (at someone\u2019s/near), mit (with/by), nach (to a city/country, after), seit (since/for), von (from/of/by), zu (to a person/place), gegenüber (across from).\n' +
    '- After them the definite article is dative: der→dem, die→der, das→dem, plural die→den (+n on the noun). ein→einem/einer; mein→meinem/meiner.\n' +
    '- Contractions: zu dem→zum, zu der→zur, von dem→vom, bei dem→beim. These are normal and preferred.\n' +
    '- Dative pronouns after them: mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen ("mit mir", "von ihm", "bei uns").\n' +
    '- Usage notes: "mit dem Bus/Zug/Auto" = by bus/train/car; "zu Fuß" = on foot (fixed, no article). "nach" for cities/countries without article (nach Berlin, nach Deutschland) BUT "zu" for people/places (zu Anna, zur Schule). "bei" = at someone\u2019s place / at a company.\n' +
    '- seit takes the present tense in German for actions still going on: "Ich lerne seit einem Jahr Deutsch" (= I have been learning for a year).\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Dative check:</b> one sentence on whether the article/pronoun after the preposition was dative.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — after aus/bei/mit/nach/seit/von/zu you reach for the dative automatically. On to <span class="de">Wechselpräpositionen</span>.',
    mid: 'Good. Re-read the "always dative" chant and the contractions card once, then continue.',
    low: 'Worth another pass — memorise aus-bei-mit-nach-seit-von-zu and the article shifts, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'fahre', role: 'r-verb' },
    { w: 'mit', role: 'r-preposition' }, { w: 'dem', role: 'r-dativ' },
    { w: 'Bus', role: 'r-object' }, { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the seven prepositions that always take the dative.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Plan a trip to Munich — hear mit dem Zug, bei der Tante, seit einem Jahr in action.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the dative prepositions and the transport words: Bus, Zug, U-Bahn, zu Fuß and more.' },
    { id: 'grammar',    label: 'Dative prepositions', tag: 'core',
      objective: 'Master aus/bei/mit/nach/seit/von/zu, the article shifts, and the contractions zum/zur/vom.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a travel text full of dative prepositions and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch how each person travels and who they\u2019re with, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say where you\u2019re from, who you\u2019re with, and how you travel.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five sentences with dative prepositions about a trip.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill preposition choice and dative article shifts with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 170 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The dative prepositions and transport words with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Preposition-choice drills, article-shift practice, contractions, and error correction.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'aus/bei/mit/nach/seit/von/zu + gegenüber, the dative article shifts, zum/zur/vom, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'aus, bei, mit, nach…', text: 'Know the always-dative prepositions' },
    { de: 'mit dem Bus', text: 'Say how you travel' },
    { de: 'bei meiner Tante', text: 'Say whose place you\u2019re at' },
    { de: 'seit einem Jahr', text: 'Say how long with seit' },
    { de: 'zum, zur, vom', text: 'Use the common contractions' }
  ],

  // ---------- Vocabulary (23 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'bei', pos: 'preposition', en: 'at (someone\u2019s), near', hi: 'के यहाँ, पास', ex: 'Ich wohne bei meiner Tante.', exEn: 'I live at my aunt\u2019s.' },
    { de: 'Fahrrad', art: 'das', gender: 'n', plural: 'Fahrräder', pos: 'noun', en: 'bicycle', hi: 'साइकिल', ex: 'Ich fahre mit dem Fahrrad.', exEn: 'I go by bike.' },
    { de: 'Bus', art: 'der', gender: 'm', plural: 'Busse', pos: 'noun', en: 'bus', hi: 'बस', ex: 'Ich fahre mit dem Bus.', exEn: 'I go by bus.' },
    { de: 'Zug', art: 'der', gender: 'm', plural: 'Züge', pos: 'noun', en: 'train', hi: 'ट्रेन', ex: 'Der Zug ist schnell.', exEn: 'The train is fast.' },
    { de: 'mit', pos: 'preposition', en: 'with, by', hi: 'के साथ, से', ex: 'Ich fahre mit dem Zug.', exEn: 'I travel by train.' },
    { de: 'nach', pos: 'preposition', en: 'to; after', hi: 'को; के बाद', ex: 'Wir fahren nach Berlin.', exEn: 'We travel to Berlin.' },
    { de: 'seit', pos: 'preposition', en: 'since, for', hi: 'से', ex: 'Ich lerne seit einem Jahr Deutsch.', exEn: 'I\u2019ve studied German for a year.' },
    { de: 'von', pos: 'preposition', en: 'from, of, by', hi: 'से, की ओर से', ex: 'Das Geschenk ist von Max.', exEn: 'The gift is from Max.' },
    { de: 'zu', pos: 'preposition', en: 'to (a person/place)', hi: 'के यहाँ, को', ex: 'Ich gehe zu Anna.', exEn: 'I go to Anna\u2019s.' },
    // ===== Active Support =====
    { de: 'Flugzeug', art: 'das', gender: 'n', plural: 'Flugzeuge', pos: 'noun', en: 'airplane', hi: 'हवाई जहाज़', ex: 'Wir fliegen mit dem Flugzeug.', exEn: 'We fly by plane.' },
    { de: 'Schiff', art: 'das', gender: 'n', plural: 'Schiffe', pos: 'noun', en: 'ship', hi: 'जहाज़', ex: 'Das Schiff fährt langsam.', exEn: 'The ship goes slowly.' },
    { de: 'Taxi', art: 'das', gender: 'n', plural: 'Taxis', pos: 'noun', en: 'taxi', hi: 'टैक्सी', ex: 'Wir fahren mit dem Taxi.', exEn: 'We go by taxi.' },
    { de: 'S-Bahn', art: 'die', gender: 'f', plural: 'S-Bahnen', pos: 'noun', en: 'suburban train', hi: 'उपनगरीय ट्रेन', ex: 'Die S-Bahn kommt gleich.', exEn: 'The S-Bahn is coming soon.' },
    { de: 'Straßenbahn', art: 'die', gender: 'f', plural: 'Straßenbahnen', pos: 'noun', en: 'tram', hi: 'ट्राम', ex: 'Ich fahre mit der Straßenbahn.', exEn: 'I go by tram.' },
    { de: 'Tram', art: 'die', gender: 'f', plural: 'Trams', pos: 'noun', en: 'tram', hi: 'ट्राम', ex: 'Die Tram ist voll.', exEn: 'The tram is full.' },
    { de: 'U-Bahn', art: 'die', gender: 'f', plural: 'U-Bahnen', pos: 'noun', en: 'subway, underground', hi: 'मेट्रो', ex: 'Ich nehme die U-Bahn.', exEn: 'I take the subway.' },
    { de: 'gegenüber', pos: 'preposition', en: 'across from, opposite', hi: 'के सामने', ex: 'Die Bank ist gegenüber dem Café.', exEn: 'The bank is across from the café.' },
    { de: 'zu (Kunden)', pos: 'preposition', en: 'to (people)', hi: 'के पास', ex: 'Ich gehe zu meinen Freunden.', exEn: 'I go to my friends.' },
    { de: 'zu Fuß', pos: 'phrase', en: 'on foot', hi: 'पैदल', ex: 'Ich gehe zu Fuß.', exEn: 'I go on foot.' },
    { de: 'zu Fuß gehen', pos: 'verb', en: 'to go on foot, walk', hi: 'पैदल जाना', ex: 'Wir gehen zu Fuß nach Hause.', exEn: 'We walk home.', conj: { praesens: 'geht zu Fuß', praeteritum: 'ging zu Fuß', perfekt: 'ist zu Fuß gegangen' } },
    // ===== Passive =====
    { de: 'Motorrad', art: 'das', gender: 'n', plural: 'Motorräder', pos: 'noun', en: 'motorcycle', hi: 'मोटरसाइकिल', ex: 'Er fährt mit dem Motorrad.', exEn: 'He goes by motorcycle.' },
    // ===== Reference / System =====
    { de: 'Präposition', art: 'die', gender: 'f', plural: 'Präpositionen', pos: 'noun', en: 'preposition', hi: 'पूर्वसर्ग', ex: '"mit" ist eine Präposition.', exEn: '"mit" is a preposition.' }
  ],

  // ---------- Dative prepositions (rule cards → accordion) ----------
  grammar: [
    {
      title: 'The seven always-dative prepositions',
      goldenRule: 'These seven force the dative <b>every time</b>, whatever they mean: <b>aus · bei · mit · nach · seit · von · zu</b>.',
      memoryTrick: 'Saat naam ek saath bolo: <b>aus–bei–mit–nach–seit–von–zu</b>. Yeh list ek baar yaad ho jaaye to case sochna hi nahi padta.',
      recap: [
        'Seven prepositions, always dative, no exceptions.',
        'The meaning does not matter — the preposition decides.',
        'Learn them as a rhythm, not as a list.'
      ],
      body: [
        'Some prepositions always force the dative \u2014 every single time, regardless of meaning. There are seven core ones. Learn them as a rhythm: <span class="de r-preposition">aus \u2013 bei \u2013 mit \u2013 nach \u2013 seit \u2013 von \u2013 zu</span>.'
      ],
      table: {
        head: ['Preposition', 'Meaning', 'Example'],
        rows: [
          ['<span class="de r-preposition">aus</span>', 'from / out of', '<span class="de">Ich komme aus Indien.</span>'],
          ['<span class="de r-preposition">bei</span>', 'at (someone\u2019s)', '<span class="de">Ich wohne bei meiner Tante.</span>'],
          ['<span class="de r-preposition">mit</span>', 'with / by', '<span class="de">Ich fahre mit dem Bus.</span>'],
          ['<span class="de r-preposition">nach</span>', 'to (city) / after', '<span class="de">Wir fahren nach Berlin.</span>']
        ]
      },
      note: 'And three more: <b>seit</b> (since/for), <b>von</b> (from/of), <b>zu</b> (to a person/place). Plus <b>gegenüber</b> (across from). All of them \u2014 <b>always dative</b>, no exceptions.',
      hinglish: 'Kuch prepositions hamesha dative lete hain. Saat core: <b>aus \u2013 bei \u2013 mit \u2013 nach \u2013 seit \u2013 von \u2013 zu</b> (ek group ki tarah yaad karo). Plus <b>gegenüber</b>. In sab ke baad hamesha dative \u2014 koi exception nahi.'
    },
    {
      title: 'The article shift after them',
      body: [
        'Because these prepositions take the dative, the article changes exactly as in Chapter 36: der→dem, die→der, das→dem, plural die→den.'
      ],
      table: {
        head: ['Noun', 'After the preposition', 'Example'],
        rows: [
          ['der Bus', '<span class="de">mit <span class="r-dativ">dem</span> Bus</span>', 'by bus'],
          ['die Tante', '<span class="de">bei <span class="r-dativ">der</span> Tante</span>', 'at the aunt\u2019s'],
          ['das Auto', '<span class="de">mit <span class="r-dativ">dem</span> Auto</span>', 'by car'],
          ['die Freunde', '<span class="de">von <span class="r-dativ">den</span> Freunden</span>', 'from the friends'],
        ]
      },
      note: 'Same shift as the dative case: <b>der→dem, die→der, das→dem, die(pl)→den</b> (+n on the noun). Transport uses <b>mit + dem/der</b>: mit dem Zug, mit der U-Bahn.',
      hinglish: 'Wahi shift jo Chapter 36 mein tha: <b>der→dem, die→der, das→dem, plural die→den</b> (noun pe +n). Transport ke liye <b>mit + dem/der</b>: mit dem Zug, mit der U-Bahn.'
    },
    {
      title: 'Contractions: zum, zur, vom, beim',
      goldenRule: 'Use the contraction by default: <b>zum, zur, vom, beim</b>. The full forms sound stiff.',
      memoryTrick: 'zu+dem = <b>zum</b>, zu+der = <b>zur</b>, von+dem = <b>vom</b>, bei+dem = <b>beim</b>. Chaar jodi, roz kaam aati hain.',
      body: [
        'When some of these prepositions meet <span class="de">dem</span> or <span class="de">der</span>, they fuse. These contractions are normal and expected \u2014 use them.'
      ],
      table: {
        head: ['Full form', 'Contraction', 'Example'],
        rows: [
          ['zu + dem', '<span class="de r-preposition">zum</span>', '<span class="de">Ich gehe zum Arzt.</span>'],
          ['zu + der', '<span class="de r-preposition">zur</span>', '<span class="de">Ich gehe zur Schule.</span>'],
          ['von + dem', '<span class="de r-preposition">vom</span>', '<span class="de">Das ist vom Lehrer.</span>'],
          ['bei + dem', '<span class="de r-preposition">beim</span>', '<span class="de">Ich bin beim Arzt.</span>']
        ]
      },
      note: 'Use <b>zum</b> (zu+dem), <b>zur</b> (zu+der), <b>vom</b> (von+dem), <b>beim</b> (bei+dem) by default \u2014 they sound more natural than the full forms. "Ich gehe <b>zur</b> Schule", not "zu der Schule".',
      hinglish: 'Jab yeh prepositions <b>dem/der</b> se milte hain to jud jaate hain: <b>zum</b> (zu+dem), <b>zur</b> (zu+der), <b>vom</b> (von+dem), <b>beim</b> (bei+dem). Default inhe use karo \u2014 zyada natural lagte hain.'
    },
    {
      title: 'nach vs zu, mit for transport, seit for time',
      body: [
        'Three usage points learners ask about most.'
      ],
      table: {
        head: ['Pattern', 'Use', 'Example'],
        rows: [
          ['nach + city/country', 'travel destination (no article)', '<span class="de">nach Berlin, nach Indien</span>'],
          ['zu + person/place', 'going to someone/somewhere', '<span class="de">zu Anna, zur Schule</span>'],
          ['mit + transport', 'by (bus/train/car)', '<span class="de">mit dem Bus, mit der Bahn</span>'],
          ['seit + time', 'how long (still ongoing)', '<span class="de">seit einem Jahr</span>']
        ]
      },
      note: '<b>nach</b> for cities/countries (nach Berlin); <b>zu</b> for people/places (zu Max, zur Schule). On foot is the fixed phrase <b>zu Fuß</b> (no article). With <b>seit</b>, German uses the present tense: "Ich wohne seit 2020 hier."',
      hinglish: '<b>nach</b> sheher/desh ke liye (nach Berlin); <b>zu</b> person/jagah ke liye (zu Max, zur Schule). Paidal = fixed phrase <b>zu Fuß</b> (article nahi). <b>seit</b> ke saath German present tense use karta hai: "Ich wohne seit 2020 hier."'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four dative-preposition traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich fahre mit den Bus.', right: 'Ich fahre mit dem Bus.', why: 'mit takes the dative: der Bus → dem Bus (not den).' },
        { wrong: 'Ich gehe nach Anna.', right: 'Ich gehe zu Anna.', why: 'Use zu for people; nach is for cities/countries.' },
        { wrong: 'Ich gehe zu der Schule.', right: 'Ich gehe zur Schule.', why: 'zu + der contracts to zur.' },
        { wrong: 'Ich lerne seit ein Jahr Deutsch.', right: 'Ich lerne seit einem Jahr Deutsch.', why: 'seit takes the dative: ein Jahr → einem Jahr.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>mit</b> Dativ leta hai: <b>dem Bus</b>, na ki "den". Kisi person ke liye <b>zu</b> aata hai (<b>zu Anna</b>) aur city ke liye <b>nach</b>. <b>zu</b> aur <b>der</b> milkar <b>zur</b> ban jaate hain: <b>zur Schule</b>. Aur <b>seit</b> bhi Dativ leta hai: <b>einem Jahr</b>, na ki "ein".'
    }
  ],

  // ---------- Reading passage (travel, clickable) ----------
  reading: {
    title: 'Die Reise nach München',
    titleEn: 'The trip to Munich',
    tokens: [
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'kommt', role: 'r-verb', en: 'comes', hi: 'है', pron: 'komt', type: 'Verb · kommen (sie)', why: 'kommen (recycled — Hallo!).', ex: 'Anna kommt aus München.', exEn: 'Anna is from Munich.' },
      { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'ows', type: 'Preposition · dative', why: 'aus + dative = from/origin (this chapter).', ex: 'aus München', exEn: 'from Munich' },
      { w: 'M\u00fcnchen', role: 'r-place', en: 'Munich', hi: 'म्यूनिख', pron: 'MÜN-khen', type: 'Place', why: 'aus + city (this chapter).', ex: 'aus München', exEn: 'from Munich' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'on', hi: 'को', pron: 'am', type: 'Preposition · date', why: 'am + day (recycled — Datum).', ex: 'am Wochenende', exEn: 'at the weekend' },
      { w: 'Wochenende', role: 'r-time', en: 'weekend', hi: 'सप्ताहांत', pron: 'VO-khen-en-duh', type: 'Noun · time', why: 'das Wochenende (recycled — Hobbies).', ex: 'am Wochenende', exEn: 'at the weekend' },
      { w: 'f\u00e4hrt', role: 'r-verb', en: 'travels', hi: 'जाती है', pron: 'fairt', type: 'Verb · fahren (sie)', why: 'a→ä in er/sie-form (recycled — Unregelmäßige Verben).', ex: 'Sie fährt nach München.', exEn: 'She travels to Munich.' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun', why: 'Verb position 2 after front phrase (recycled — Satzposition).', ex: 'Am Wochenende fährt sie …', exEn: 'At the weekend she travels …' },
      { w: 'mit', role: 'r-preposition', en: 'by', hi: 'से', pron: 'mit', type: 'Preposition · dative', why: 'mit + dative = by transport (this chapter).', ex: 'mit dem Zug', exEn: 'by train' },
      { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: 'इस', pron: 'daym', type: 'Article · dative', why: 'der → dem after mit (recycled — Dativ Einführung).', ex: 'mit dem Zug', exEn: 'by train' },
      { w: 'Zug', role: 'r-object', en: 'train', hi: 'ट्रेन', pron: 'tsook', type: 'Noun · masc.', why: 'der Zug (this chapter).', ex: 'mit dem Zug', exEn: 'by train' },
      { w: 'nach', role: 'r-preposition', en: 'to', hi: 'को', pron: 'nakh', type: 'Preposition · dative', why: 'nach + city (this chapter).', ex: 'nach München', exEn: 'to Munich' },
      { w: 'M\u00fcnchen', role: 'r-place', en: 'Munich', hi: 'म्यूनिख', pron: 'MÜN-khen', type: 'Place' },
      { w: '.', plain: true },
      { w: 'Dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
      { w: 'wohnt', role: 'r-verb', en: 'stays', hi: 'रहती है', pron: 'vohnt', type: 'Verb · wohnen (sie)', why: 'wohnen (recycled — Wer bist du?).', ex: 'Sie wohnt bei ihrer Tante.', exEn: 'She stays at her aunt\u2019s.' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun' },
      { w: 'bei', role: 'r-preposition', en: 'at', hi: 'के यहाँ', pron: 'by', type: 'Preposition · dative', why: 'bei + dative = at someone\u2019s place (this chapter).', ex: 'bei ihrer Tante', exEn: 'at her aunt\u2019s' },
      { w: 'ihrer', role: 'r-dativ', en: 'her (fem. dat.)', hi: 'अपनी', pron: 'EE-rer', type: 'Possessive · dative', why: 'ihre → ihrer in the dative (recycled — Dativ Einführung).', ex: 'bei ihrer Tante', exEn: 'at her aunt\u2019s' },
      { w: 'Tante', role: 'r-object', en: 'aunt', hi: 'मौसी', pron: 'TAN-tuh', type: 'Noun · fem.', why: 'die Tante (recycled — Possessiv & Familie).', ex: 'bei ihrer Tante', exEn: 'at her aunt\u2019s' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-article', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Tante', role: 'r-subject', en: 'aunt', hi: 'मौसी', pron: 'TAN-tuh', type: 'Noun · fem.' },
      { w: 'wohnt', role: 'r-verb', en: 'lives', hi: 'रहती है', pron: 'vohnt', type: 'Verb · wohnen (sie)' },
      { w: 'seit', role: 'r-preposition', en: 'for', hi: 'से', pron: 'zyt', type: 'Preposition · dative', why: 'seit + dative = since/for (this chapter).', ex: 'seit zehn Jahren', exEn: 'for ten years' },
      { w: 'zehn', role: 'r-dativ', en: 'ten', hi: 'दस', pron: 'tsayn', type: 'Number', why: 'zehn = 10 (recycled — Zahlen).', ex: 'seit zehn Jahren', exEn: 'for ten years' },
      { w: 'Jahren', role: 'r-object', en: 'years', hi: 'साल', pron: 'YAH-ren', type: 'Noun · plural', why: 'dative plural +n (recycled — Dativ Einführung).', ex: 'seit zehn Jahren', exEn: 'for ten years' },
      { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
      { w: '.', plain: true },
      { w: 'Ihr', role: 'r-article', en: 'her (neut.)', hi: 'उसका', pron: 'eer', type: 'Possessive' },
      { w: 'Haus', role: 'r-subject', en: 'house', hi: 'घर', pron: 'hows', type: 'Noun · neut.', why: 'das Haus (recycled).', ex: 'Ihr Haus ist …', exEn: 'Her house is …' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'gegen\u00fcber', role: 'r-preposition', en: 'across from', hi: 'के सामने', pron: 'gay-gen-Ü-ber', type: 'Preposition · dative', why: 'gegenüber + dative = across from (this chapter).', ex: 'gegenüber dem Bahnhof', exEn: 'across from the station' },
      { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: 'इस', pron: 'daym', type: 'Article · dative', why: 'der → dem after gegenüber (recycled — Dativ Einführung).', ex: 'gegenüber dem Bahnhof', exEn: 'across from the station' },
      { w: 'Bahnhof', role: 'r-place', en: 'station', hi: 'स्टेशन', pron: 'BAHN-hohf', type: 'Noun · masc.', why: 'der Bahnhof (recycled).', ex: 'gegenüber dem Bahnhof', exEn: 'across from the station' },
      { w: '.', plain: true },
      { w: 'Vom', role: 'r-preposition', en: 'from the', hi: 'से', pron: 'fom', type: 'Preposition · dative', why: 'von + dem → vom (this chapter).', ex: 'vom Bahnhof', exEn: 'from the station' },
      { w: 'Bahnhof', role: 'r-place', en: 'station', hi: 'स्टेशन', pron: 'BAHN-hohf', type: 'Noun · masc.', why: 'der Bahnhof (recycled).', ex: 'vom Bahnhof', exEn: 'from the station' },
      { w: 'geht', role: 'r-verb', en: 'goes', hi: 'जाती है', pron: 'gayt', type: 'Verb · gehen (sie)', why: 'gehen (recycled — Verben).', ex: 'Sie geht zu Fuß.', exEn: 'She goes on foot.' },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'zu', role: 'r-preposition', en: 'on', hi: 'से', pron: 'tsoo', type: 'Preposition', why: '"zu Fuß" = on foot (this chapter).', ex: 'zu Fuß', exEn: 'on foot' },
      { w: 'Fu\u00df', role: 'r-place', en: 'foot', hi: 'पैदल', pron: 'foos', type: 'Noun · masc.', why: '"zu Fuß" (this chapter).', ex: 'zu Fuß gehen', exEn: 'go on foot' },
      { w: '.', plain: true }
    ],
    translation: 'Anna is from Munich. At the weekend she travels by train to Munich. There she stays at her aunt\u2019s. The aunt has lived there for ten years. Her house is across from the station. From the station Anna goes on foot.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_037_L001', speaker: 'Kerstin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nico, wie fährst du nach Hamburg?', en: 'Nico, how are you traveling to Hamburg?' },
      { id: 'A1_037_L002', speaker: 'Nico', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich fahre mit dem Auto. Und du?', en: 'I go by car. And you?' },
      { id: 'A1_037_L003', speaker: 'Kerstin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich fahre mit dem Flugzeug, denn es ist schneller. Bei wem übernachtest du dort?', en: 'I go by plane, because it\'s faster. Whose place are you staying at there?' },
      { id: 'A1_037_L004', speaker: 'Nico', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Bei einem Freund. Seit wann kennst du Hamburg?', en: 'At a friend\'s. Since when do you know Hamburg?' },
      { id: 'A1_037_L005', speaker: 'Kerstin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Seit zwei Jahren!', en: 'For two years!' }
    ],
    transcript: 'Nico, wie fährst du nach Hamburg? Ich fahre mit dem Auto. Und du? Ich fahre mit dem Flugzeug, denn es ist schneller. Bei wem übernachtest du dort? Bei einem Freund. Seit wann kennst du Hamburg? Seit zwei Jahren!',
    translation: 'Nico, how are you traveling to Hamburg? I go by car. And you? I go by plane, because it\'s faster. Whose place are you staying at there? At a friend\'s. Since when do you know Hamburg? For two years!',
    tokens: [
      { w: 'Nico' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'fährst' },
      { w: 'du' },
      { w: 'nach' },
      { w: 'Hamburg' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'fahre' },
      { w: 'mit' },
      { w: 'dem' },
      { w: 'Auto' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'du' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'fahre' },
      { w: 'mit' },
      { w: 'dem' },
      { w: 'Flugzeug' },
      { w: ',', plain: true },
      { w: 'denn' },
      { w: 'es' },
      { w: 'ist' },
      { w: 'schneller' },
      { w: '.', plain: true },
      { w: 'Bei' },
      { w: 'wem' },
      { w: 'übernachtest' },
      { w: 'du' },
      { w: 'dort' },
      { w: '?', plain: true },
      { w: 'Bei' },
      { w: 'einem' },
      { w: 'Freund' },
      { w: '.', plain: true },
      { w: 'Seit' },
      { w: 'wann' },
      { w: 'kennst' },
      { w: 'du' },
      { w: 'Hamburg' },
      { w: '?', plain: true },
      { w: 'Seit' },
      { w: 'zwei' },
      { w: 'Jahren' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Wie fährt Nico nach Hamburg?', qEn: 'How does Nico travel to Hamburg?', options: ['mit dem Zug', 'mit dem Auto', 'mit dem Flugzeug', 'zu Fuß'], optionsEn: ['by train', 'by car', 'by plane', 'on foot'], answer: 1,
        explain: '"Ich fahre mit dem Auto."' },
      { q: 'Wo wohnt Nico?', qEn: 'Where does Nico stay?', options: ['im Hotel', 'bei einem Freund', 'bei Kerstin', 'bei seiner Tante'], optionsEn: ['at the hotel', 'at a friend\'s', 'at Kerstin\'s', 'at his aunt\'s'], answer: 1,
        explain: '"Bei einem Freund."' }
    ]
  },

  speaking: [
    { task: "Dein Partner fragt: Wie kommst du zur Arbeit?", taskEn: "Your partner asks: how do you get to work?", de: "Ich fahre mit dem Bus und dann gehe ich zu Fuß.", en: "I take the bus and then I walk." },
    { task: "Deine Nachbarin fragt: Wo wohnst du und seit wann?", taskEn: "Your neighbour asks: where do you live and since when?", de: "Ich wohne bei meiner Schwester, seit einem Jahr.", en: "I live with my sister, for a year now." },
    { task: "Dein Freund fragt: Wohin fährst du am Wochenende?", taskEn: "Your friend asks: where are you going at the weekend?", de: "Ich fahre mit dem Zug nach Hamburg.", en: "I'm taking the train to Hamburg." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about a trip using dative prepositions. Say where you come from (aus), how you travel (mit dem …), who you stay with (bei …), where you go (zu / nach), and how long you\u2019ve done something (seit …). Use at least one contraction (zum/zur/vom).',
    starters: ['Ich komme aus …', 'Ich fahre mit dem/der …', 'Ich wohne bei …', 'Ich gehe zur/zum …'],
    placeholder: 'Ich komme aus Indien und fahre mit dem Zug nach Berlin …',
    minWords: 20
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Ich fahre ___ dem Bus."',
      options: ['für', 'mit', 'ohne', 'durch'],
      answer: 1,
      explain: 'mit + dative = by (transport): "mit dem Bus".'
    },
    gap: {
      // mit + dem, bei + der
      sentence: ['Ich fahre mit ', ' Zug und wohne bei ', ' Tante.'],
      gaps: [ { answer: 'dem', accepts: ['dem'] }, { answer: 'der', accepts: ['der'] } ],
      explain: 'der Zug → dem (masc. dat.); die Tante → der (fem. dat.).'
    },
    match: {
      q: 'Match each preposition to its meaning.',
      pairs: [
        { noun: 'aus', art: 'from' },
        { noun: 'mit', art: 'with / by' },
        { noun: 'bei', art: 'at (someone\u2019s)' },
        { noun: 'seit', art: 'since / for' }
      ]
    },
    builder: {
      target: 'Build: "I travel by bus."',
      bank: ['Ich', 'fahre', 'mit', 'dem', 'Bus'],
      answer: ['Ich', 'fahre', 'mit', 'dem', 'Bus'],
      roles: { 'Ich': 'r-subject', 'fahre': 'r-verb', 'mit': 'r-preposition', 'dem': 'r-dativ', 'Bus': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which preposition does NOT always take the dative?', options: ['mit', 'bei', 'für', 'von'], answer: 2,
      explain: 'für takes the accusative; mit/bei/von always take the dative.' },
    { q: 'Complete: "Ich fahre mit ___ Zug." (der Zug)', options: ['den', 'dem', 'der', 'das'], answer: 1,
      explain: 'mit + dative: der Zug → dem Zug.' },
    { q: 'What is "zu + der"?', options: ['zum', 'zur', 'zer', 'zu der (no contraction)'], answer: 1,
      explain: 'zu + der → zur.' },
    { q: 'Which is correct for going to a person?', options: ['nach Anna', 'zu Anna', 'bei Anna', 'aus Anna'], answer: 1,
      explain: 'Use zu for people: "zu Anna". nach is for cities/countries.' },
    { q: 'Complete: "Ich lerne ___ einem Jahr Deutsch."', options: ['für', 'seit', 'in', 'nach'], answer: 1,
      explain: 'seit + dative for duration: "seit einem Jahr".' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-preposition', html: 'Always dative: <span class="de">aus, bei, mit, nach, seit, von, zu</span> (+ gegenüber).' },
    { c: 'r-dativ', html: 'After them the article shifts: <span class="de">mit dem Bus, bei der Tante, von den Freunden</span>.' },
    { c: 'r-preposition', html: 'Contract by default: <span class="de">zu dem → zum, zu der → zur, von dem → vom, bei dem → beim</span>.' }
  ],
  revisionTips: [
    'Chant the seven: aus-bei-mit-nach-seit-von-zu. If you see one, reach for the dative.',
    'Transport = mit + dem/der: mit dem Zug, mit der U-Bahn. On foot = zu Fuß (no article).',
    'Use zu for people/places, nach for cities/countries; and always contract zum/zur/vom.'
  ]
};

window.CHAPTER = CHAPTER;
