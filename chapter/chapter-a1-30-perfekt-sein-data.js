/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 3 · Chapter 30
   "Perfekt mit sein"  (the perfect tense with sein)
   Vocabulary source: uploaded chapter-30 word list (20 words).
   Theme = travel & movement. Recycles Ch1–29.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-30-perfekt-sein',
  phase: 'A1 · Phase 3',
  number: 30,
  title: 'Perfekt mit sein',
  titleEn: 'Perfect with sein',
  description: 'The other helper. A special group of verbs builds the Perfekt with sein instead of haben — verbs of movement (gehen, fahren, fliegen, kommen) and change of state (aufstehen, einschlafen, werden). Ich bin nach Berlin gefahren.',
  xp: 160,
  time: 35,
  difficulty: 'Beginner',
  nextChapter: { number: 31, title: 'Partizip II mit Präfix', titleEn: 'Participles with Prefixes' , href: 'chapter-a1-31-partizip-praefix.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Ole is back from a short trip and Steffi wants every detail — where he flew, when he arrived, how long he stayed. His whole story runs on sein-Perfekt: bin geflogen, ist angekommen, sind geblieben.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear sein + movement participles in real speech'
    ],
    scene: 'Nach der Reise \u2014 im Kurs, Berlin',
    femaleSpeakers: ['Steffi'],
    dialogue: [
      { speaker: 'Steffi', tokens: [
        { w: 'Hallo', role: 'r-subject', en: 'hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting' },
        { w: 'Ole', role: 'r-name', en: 'Ole', hi: 'ओले', pron: 'O-luh', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Bist', role: 'r-verb', en: 'have you', hi: 'पहुँचे', pron: 'bist', type: 'Verb · sein (helper)', why: 'Movement verbs build the Perfekt with sein (this chapter).', ex: 'Bist du angekommen?', exEn: 'Have you arrived?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'gut', role: 'r-adjective', en: 'well', hi: 'ठीक से', pron: 'goot', type: 'Adjective' },
        { w: 'angekommen', role: 'r-verb', en: 'arrived', hi: 'पहुँच गए', pron: 'AN-ge-ko-men', type: 'Partizip II · Satzende', why: 'ankommen → angekommen: ge- goes after the prefix (this chapter).', ex: 'Ich bin angekommen.', exEn: 'I have arrived.' },
        { w: '?', plain: true }
      ], en: 'Hello Ole! Did you arrive safely?', hi: 'Namaste Ole! Tum theek se pahunch gaye?' },
      { speaker: 'Ole', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (helper)' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'angekommen', role: 'r-verb', en: 'arrived', hi: 'पहुँचा', pron: 'AN-ge-ko-men', type: 'Partizip II · Satzende' },
        { w: '.', plain: true },
        { w: 'Der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Flug', role: 'r-subject', en: 'flight', hi: 'उड़ान', pron: 'flook', type: 'Noun · masc.', why: 'der Flug (this chapter).', ex: 'Der Flug war lang.', exEn: 'The flight was long.' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb · sein (Präteritum)' },
        { w: 'lang', role: 'r-adjective', en: 'long', hi: 'लंबी', pron: 'lang', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Yes, I arrived today. The flight was long.', hi: 'Haan, main aaj pahuncha. Udaan lambi thi.' },
      { speaker: 'Steffi', tokens: [
        { w: 'Oh', role: 'r-subject', en: 'oh', hi: 'ओह', pron: 'oh', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Wann', role: 'r-question', en: 'when', hi: 'कब', pron: 'van', type: 'Question word' },
        { w: 'bist', role: 'r-verb', en: 'did', hi: 'निकले', pron: 'bist', type: 'Verb · sein (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'losgefahren', role: 'r-verb', en: 'set off', hi: 'निकले', pron: 'LOHS-ge-fah-ren', type: 'Partizip II · Satzende', why: 'losfahren → losgefahren (this chapter).', ex: 'Ich bin früh losgefahren.', exEn: 'I set off early.' },
        { w: '?', plain: true }
      ], en: 'Oh! When did you set off?', hi: 'Oh! Tum kab nikle?' },
      { speaker: 'Ole', side: 'right', tokens: [
        { w: 'Sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'früh', role: 'r-time', en: 'early', hi: 'जल्दी', pron: 'frü', type: 'Adverb · time' },
        { w: ',', plain: true },
        { w: 'um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock time' },
        { w: 'vier', role: 'r-time', en: 'four', hi: 'चार', pron: 'feer', type: 'Number' },
        { w: 'Uhr', role: 'r-time', en: 'o’clock', hi: 'बजे', pron: 'oor', type: 'Noun · time' },
        { w: '.', plain: true }
      ], en: 'Very early, at four o’clock.', hi: 'Bahut jaldi, chaar baje.' },
      { speaker: 'Steffi', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction', why: 'wirklich = really (this chapter).', ex: 'Wirklich?', exEn: 'Really?' },
        { w: '?', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'bist', role: 'r-verb', en: 'did', hi: 'सोए', pron: 'bist', type: 'Verb · sein (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'sicher', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'ZI-kher', type: 'Adverb' },
        { w: 'eingeschlafen', role: 'r-verb', en: 'fallen asleep', hi: 'सो गए', pron: 'INE-ge-shlah-fen', type: 'Partizip II · Satzende', why: 'einschlafen → eingeschlafen; a change of state, so sein (this chapter).', ex: 'Ich bin eingeschlafen.', exEn: 'I fell asleep.' },
        { w: '.', plain: true }
      ], en: 'Really? Then you surely fell asleep.', hi: 'Sach mein? Toh tum zaroor so gaye.' },
      { speaker: 'Ole', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'gleich', role: 'r-adverb', en: 'right away', hi: 'तुरंत', pron: 'glykh', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ein', role: 'r-subject', en: 'a', hi: 'एक', pron: 'ine', type: 'Article · neut.' },
        { w: 'Kind', role: 'r-subject', en: 'child', hi: 'बच्चा', pron: 'kint', type: 'Noun · neut.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'किया', pron: 'hat', type: 'Verb · haben (helper)', why: 'With an object the helper is haben, not sein (this chapter).', ex: 'Es hat mich geweckt.', exEn: 'It woke me.' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: 'geweckt', role: 'r-verb', en: 'woken', hi: 'जगाया', pron: 'ge-VEKT', type: 'Partizip II · Satzende', why: 'wecken → geweckt (this chapter).', ex: 'Es hat mich geweckt.', exEn: 'It woke me.' },
        { w: '.', plain: true }
      ], en: 'Yes, right away! But a child woke me.', hi: 'Haan, turant! Par ek bachche ne mujhe jagaya.' },
      { speaker: 'Steffi', tokens: [
        { w: 'Ach', role: 'r-subject', en: 'ah', hi: 'अच्छा', pron: 'akh', type: 'Reaction' },
        { w: 'so', role: 'r-adverb', en: 'I see', hi: 'समझा', pron: 'zo', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'wie', role: 'r-question', en: 'how', hi: 'कैसी', pron: 'vee', type: 'Question word' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb · sein (Präteritum)' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Reise', role: 'r-subject', en: 'journey', hi: 'यात्रा', pron: 'RY-zuh', type: 'Noun · fem.', why: 'die Reise (this chapter).', ex: 'Die Reise war gut.', exEn: 'The journey was good.' },
        { w: '?', plain: true }
      ], en: 'Ah, I see! And how was the journey?', hi: 'Achha samjha! Aur yaatra kaisi thi?' },
      { speaker: 'Ole', side: 'right', tokens: [
        { w: 'Sie', role: 'r-subject', en: 'it', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb · sein (Präteritum)' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छी', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'müde', role: 'r-adjective', en: 'tired', hi: 'थका हुआ', pron: 'MÜ-duh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'It was good. But I am very tired now.', hi: 'Yeh achhi thi. Par ab main bahut thaka hoon.' },
      { speaker: 'Steffi', tokens: [
        { w: 'Bleibst', role: 'r-verb', en: 'are you staying', hi: 'रुकते हो', pron: 'BLYPST', type: 'Verb · bleiben (du)', why: 'bleiben = to stay; it takes sein in the Perfekt (this chapter).', ex: 'Bleibst du lange?', exEn: 'Are you staying long?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'lange', role: 'r-time', en: 'long', hi: 'देर तक', pron: 'LANG-uh', type: 'Adverb · time' },
        { w: '?', plain: true }
      ], en: 'Are you staying long?', hi: 'Tum lambe samay tak rukoge?' },
      { speaker: 'Ole', side: 'right', tokens: [
        { w: 'Nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'drei', role: 'r-akkusativ', en: 'three', hi: 'तीन', pron: 'dry', type: 'Number' },
        { w: 'Tage', role: 'r-akkusativ', en: 'days', hi: 'दिन', pron: 'TAH-guh', type: 'Noun · plural' },
        { w: '.', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'fahre', role: 'r-verb', en: 'travel', hi: 'जाता हूँ', pron: 'FAH-ruh', type: 'Verb · zurückfahren (ich)', lexicalUnit: 'zurückfahren', why: 'zurückfahren splits: ich fahre … zurück (this chapter).', ex: 'Ich fahre zurück.', exEn: 'I travel back.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'zurück', role: 'r-verb', en: '(prefix of zurückfahren)', hi: 'वापस', pron: 'tsu-RÜK', type: 'Separable prefix · Satzende', lexicalUnit: 'zurückfahren' },
        { w: '.', plain: true }
      ], en: 'Only three days. Then I travel back.', hi: 'Sirf teen din. Phir main wapas jaata hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A special group of verbs builds the Perfekt with <span class="de r-verb">sein</span> instead of haben. Two families: <strong>movement</strong> from A to B (<span class="de">gehen, fahren, fliegen, kommen, reisen</span>) and <strong>change of state</strong> (<span class="de">aufstehen, einschlafen, werden</span>). Plus two to memorise: <span class="de">sein</span> and <span class="de">bleiben</span>. The frame is identical \u2014 <span class="de">Ich <u>bin</u> nach Berlin <u>gefahren</u>.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is the PERFEKT WITH SEIN: sein (conjugated) + Partizip II, for verbs of movement and change of state. ' +
    'The learner wrote sentences about past movement/travel below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Perfekt with sein = sein (conjugated: ich bin, du bist, er/sie/es ist, wir/sie/Sie sind, ihr seid) + Partizip II at the very END.\n' +
    '- sein is used for: (1) movement from A to B — gehen→gegangen, fahren→gefahren, fliegen→geflogen, kommen→gekommen, reisen→gereist, laufen→gelaufen; (2) change of state — aufstehen→aufgestanden, einschlafen→eingeschlafen, werden→geworden, aufwachen→aufgewacht; (3) the verbs sein→gewesen and bleiben→geblieben.\n' +
    '- Most OTHER verbs (with a direct object) take haben — do not switch them to sein.\n' +
    '- Separable movement verbs put ge in the middle: ankommen→angekommen, abfahren→abgefahren, losfahren→losgefahren, ausgehen→ausgegangen, zurückfahren→zurückgefahren.\n' +
    '- Word order: sein in position 2 (or first in a yes/no question), participle last. "Ich bin nach Hause gegangen." / "Bist du gekommen?"\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Helper check:</b> one sentence on whether sein was the right helper (movement/change) and the participle was last.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — you reach for sein on movement and change verbs. On to <span class="de">Partizip II mit Präfix</span>.',
    mid: 'Good. Re-read the "which verbs take sein" card once, then continue.',
    low: 'Worth another pass — focus on the sein-verb families in the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'bin', role: 'r-verb' },
    { w: 'nach', role: 'r-preposition' }, { w: 'Berlin', role: 'r-place' },
    { w: 'gefahren', role: 'r-verb' }, { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See which verbs take sein in the Perfekt.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Steffi tells her trip story — all in sein-Perfekt — while Steffi never left the sofa.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the travel & movement verbs: fliegen, ankommen, bleiben, einschlafen and more.' },
    { id: 'grammar',    label: 'Perfekt mit sein', tag: 'core',
      objective: 'Master sein + Partizip II and the movement / change-of-state verb families.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a travel text in the sein-Perfekt and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch where each person went and which helper they used, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say where you went yesterday using sein + participle.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five sein-Perfekt sentences and a short paragraph about a trip.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill haben vs sein, movement participles, and word order with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The travel & movement verbs and their sein-participles with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'haben/sein selection, movement-participle drills, error correction, and a "where I went" writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'sein + Partizip II, the movement & change-of-state families, sein/bleiben, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich bin gefahren.', text: 'Use sein for movement' },
    { de: 'Ich bin angekommen.', text: 'Talk about arriving & departing' },
    { de: 'Ich bin geblieben.', text: 'Use sein with bleiben & sein' },
    { de: 'Ich bin eingeschlafen.', text: 'Use sein for change of state' },
    { de: 'Wohin bist du gefahren?', text: 'Ask where someone went' }
  ],

  // ---------- Vocabulary (20 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'bleiben', pos: 'verb', en: 'to stay', hi: 'रुकना', ex: 'Ich bin zu Hause geblieben.', exEn: 'I stayed at home.', conj: { praesens: 'bleibt', praeteritum: 'blieb', perfekt: 'ist geblieben' } },
    { de: 'Flug', art: 'der', gender: 'm', plural: 'Flüge', pos: 'noun', en: 'flight', hi: 'उड़ान', ex: 'Der Flug war kurz.', exEn: 'The flight was short.' },
    { de: 'Reise', art: 'die', gender: 'f', plural: 'Reisen', pos: 'noun', en: 'trip, journey', hi: 'यात्रा', ex: 'Die Reise war schön.', exEn: 'The trip was lovely.' },
    { de: 'fliegen', pos: 'verb', en: 'to fly', hi: 'उड़ना', ex: 'Ich bin nach Indien geflogen.', exEn: 'I flew to India.', conj: { praesens: 'fliegt', praeteritum: 'flog', perfekt: 'ist geflogen' } },
    { de: 'passieren', pos: 'verb', en: 'to happen', hi: 'होना', ex: 'Was ist passiert?', exEn: 'What happened?', conj: { praesens: 'passiert', praeteritum: 'passierte', perfekt: 'ist passiert' } },
    // ===== Active Support =====
    { de: 'abfahren', pos: 'verb', en: 'to depart, leave', hi: 'रवाना होना', ex: 'Der Zug ist um acht abgefahren.', exEn: 'The train departed at eight.', conj: { praesens: 'fährt ab', praeteritum: 'fuhr ab', perfekt: 'ist abgefahren' } },
    { de: 'ankommen', pos: 'verb', en: 'to arrive', hi: 'पहुँचना', ex: 'Wir sind spät angekommen.', exEn: 'We arrived late.', conj: { praesens: 'kommt an', praeteritum: 'kam an', perfekt: 'ist angekommen' } },
    { de: 'ausgehen', pos: 'verb', en: 'to go out', hi: 'बाहर जाना', ex: 'Ich bin am Abend ausgegangen.', exEn: 'I went out in the evening.', conj: { praesens: 'geht aus', praeteritum: 'ging aus', perfekt: 'ist ausgegangen' } },
    { de: 'Angebot', art: 'das', gender: 'n', plural: 'Angebote', pos: 'noun', en: 'offer, deal', hi: 'पेशकश', ex: 'Das Angebot war günstig.', exEn: 'The offer was cheap.' },
    { de: 'Ausland', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'abroad', hi: 'विदेश', ex: 'Ich bin ins Ausland geflogen.', exEn: 'I flew abroad.' },
    { de: 'laufen', pos: 'verb', en: 'to run; to go (well)', hi: 'दौड़ना; चलना', ex: 'Die Reise ist gut gelaufen.', exEn: 'The trip went well.', conj: { praesens: 'läuft', praeteritum: 'lief', perfekt: 'ist gelaufen' } },
    { de: 'losfahren', pos: 'verb', en: 'to set off', hi: 'निकलना', ex: 'Wir sind früh losgefahren.', exEn: 'We set off early.', conj: { praesens: 'fährt los', praeteritum: 'fuhr los', perfekt: 'ist losgefahren' } },
    { de: 'nehmen', pos: 'verb', en: 'to take (e.g. holiday)', hi: 'लेना', ex: 'Ich habe Urlaub genommen.', exEn: 'I took holiday.', conj: { praesens: 'nimmt', praeteritum: 'nahm', perfekt: 'hat genommen' } },
    { de: 'werden', pos: 'verb', en: 'to become, turn', hi: 'बनना', ex: 'Es ist spät geworden.', exEn: 'It got late.', conj: { praesens: 'wird', praeteritum: 'wurde', perfekt: 'ist geworden' } },
    { de: 'wirklich', pos: 'adverb', en: 'really', hi: 'सचमुच', ex: 'Es war wirklich schön.', exEn: 'It was really lovely.' },
    { de: 'zurück', pos: 'adverb', en: 'back', hi: 'वापस', ex: 'Ich bin schon zurück.', exEn: 'I am back already.' },
    { de: 'zurückfahren', pos: 'verb', en: 'to drive/travel back', hi: 'वापस जाना', ex: 'Ich bin am Sonntag zurückgefahren.', exEn: 'I travelled back on Sunday.', conj: { praesens: 'fährt zurück', praeteritum: 'fuhr zurück', perfekt: 'ist zurückgefahren' } },
    // ===== Passive =====
    { de: 'einschlafen', pos: 'verb', en: 'to fall asleep', hi: 'सो जाना', ex: 'Ich bin früh eingeschlafen.', exEn: 'I fell asleep early.', conj: { praesens: 'schläft ein', praeteritum: 'schlief ein', perfekt: 'ist eingeschlafen' } },
    { de: 'wecken', pos: 'verb', en: 'to wake (someone)', hi: 'जगाना', ex: 'Der Wecker hat mich geweckt.', exEn: 'The alarm woke me.', conj: { praesens: 'weckt', praeteritum: 'weckte', perfekt: 'hat geweckt' } },
    // ===== Reference / System =====
    { de: 'Ortsveränderung', art: 'die', gender: 'f', plural: 'Ortsveränderungen', pos: 'noun', en: 'change of location', hi: 'स्थान परिवर्तन', ex: 'Bei einer Ortsveränderung nimmt man sein.', exEn: 'For a change of location you use sein.' }
  ],

  // ---------- Perfekt mit sein (rule cards → accordion) ----------
  grammar: [
    {
      title: 'sein + Partizip II',
      goldenRule: 'Same frame as before — only the helper changes. <b>sein</b> in slot 2, participle at the end.',
      memoryTrick: 'Frame badla nahi, sirf helper badla: <b>habe</b> ki jagah <b>bin</b>.',
      body: [
        'Same frame as the haben-Perfekt \u2014 just a different helper. <span class="de r-verb">sein</span> is conjugated and sits in position 2; the <strong>Partizip II</strong> goes to the very end.'
      ],
      table: {
        head: ['Subject', 'sein (pos. 2)', 'middle', 'Partizip II (end)'],
        rows: [
          ['<span class="de">Ich</span>', '<span class="de r-verb">bin</span>', '<span class="de">nach Hause</span>', '<span class="de r-verb">gegangen.</span>'],
          ['<span class="de">Du</span>', '<span class="de r-verb">bist</span>', '<span class="de">nach Berlin</span>', '<span class="de r-verb">gefahren.</span>'],
          ['<span class="de">Anna</span>', '<span class="de r-verb">ist</span>', '<span class="de">ins Ausland</span>', '<span class="de r-verb">geflogen.</span>'],
          ['<span class="de">Wir</span>', '<span class="de r-verb">sind</span>', '<span class="de">spät</span>', '<span class="de r-verb">angekommen.</span>']
        ]
      },
      note: 'Conjugate <b>sein</b>: ich bin, du bist, er/sie/es ist, wir/sie/Sie sind, ihr seid. The participle never changes \u2014 exactly like the haben-Perfekt, just the helper is different.',
      hinglish: 'Wahi frame, sirf helper alag: <b>sein</b> conjugate (ich bin, du bist, er ist, wir sind, ihr seid) position 2 pe + <b>Partizip II</b> end mein. Participle nahi badalta.'
    },
    {
      title: 'Which verbs take sein? (movement)',
      body: [
        'The biggest group: verbs that move you from one place to another (a change of location, <span class="de">Ortsveränderung</span>).'
      ],
      table: {
        head: ['Verb', 'Partizip II', 'Example'],
        rows: [
          ['<span class="de">gehen</span>', '<span class="de r-verb">gegangen</span>', '<span class="de">Ich bin gegangen.</span>'],
          ['<span class="de">fahren</span>', '<span class="de r-verb">gefahren</span>', '<span class="de">Ich bin gefahren.</span>'],
          ['<span class="de">fliegen</span>', '<span class="de r-verb">geflogen</span>', '<span class="de">Ich bin geflogen.</span>'],
          ['<span class="de">kommen / reisen</span>', '<span class="de r-verb">gekommen / gereist</span>', '<span class="de">Ich bin gekommen.</span>']
        ]
      },
      note: 'Going, driving, flying, coming, travelling, running, walking \u2014 all <b>movement A → B → sein</b>. The separable ones split: ankommen → <b>an</b>gekommen, abfahren → <b>ab</b>gefahren, losfahren → <b>los</b>gefahren.',
      hinglish: 'Jaana, gaadi, udna, aana, ghoomna, daudna — sab <b>movement A→B → sein</b>. Separable wale tootte hain: ankommen → <b>an</b>gekommen, abfahren → <b>ab</b>gefahren.'
    },
    {
      title: 'Which verbs take sein? (change & two specials)',
      body: [
        'The second group: verbs of <strong>change of state</strong>. Plus two important exceptions that have no movement at all.'
      ],
      table: {
        head: ['Type', 'Verb', 'Partizip II'],
        rows: [
          ['change of state', '<span class="de">aufstehen</span>', '<span class="de r-verb">ist aufgestanden</span>'],
          ['change of state', '<span class="de">einschlafen / werden</span>', '<span class="de r-verb">ist eingeschlafen / geworden</span>'],
          ['special', '<span class="de">sein</span>', '<span class="de r-verb">ist gewesen</span>'],
          ['special', '<span class="de">bleiben</span>', '<span class="de r-verb">ist geblieben</span>']
        ]
      },
      note: 'Change of state (becoming different): aufstehen, einschlafen, aufwachen, werden \u2192 <b>sein</b>. And memorise the two odd ones with no movement: <b>sein</b> (gewesen) and <b>bleiben</b> (geblieben).',
      hinglish: 'Change of state (badalna): aufstehen, einschlafen, aufwachen, werden → <b>sein</b>. Aur do bina-movement wale yaad karo: <b>sein</b> (gewesen) aur <b>bleiben</b> (geblieben).'
    },
    {
      title: 'haben or sein? — the decision',
      goldenRule: 'Did the subject <b>change place</b> or <b>change state</b>? → <b>sein</b>. Everything else → <b>haben</b>.',
      formula: [
        'A → B moved      →  <b>sein</b>   (bin gefahren)',
        'state changed    →  <b>sein</b>   (bin eingeschlafen)',
        'sein / bleiben   →  <b>sein</b>   (bin gewesen / geblieben)',
        'anything else    →  <b>haben</b>  (habe gegessen)'
      ],
      memoryTrick: 'Ek sawaal: <b>subject khud hila ya badla?</b> Haan → sein. Nahi → haben.',
      recap: [
        'Movement A→B → <b>sein</b>.',
        'Change of state → <b>sein</b>.',
        '<b>sein</b> and <b>bleiben</b> are the two to memorise.',
        'Everything else → <b>haben</b>.'
      ],
      body: [
        'One quick test settles almost every case.'
      ],
      table: {
        head: ['Question', 'Helper', 'Example'],
        rows: [
          ['Did you move A → B?', '<span class="de r-verb">sein</span>', '<span class="de">Ich bin gefahren.</span>'],
          ['Change of state?', '<span class="de r-verb">sein</span>', '<span class="de">Ich bin eingeschlafen.</span>'],
          ['sein / bleiben?', '<span class="de r-verb">sein</span>', '<span class="de">Ich bin geblieben.</span>'],
          ['Everything else', '<span class="de r-verb">haben</span>', '<span class="de">Ich habe gegessen.</span>']
        ]
      },
      note: 'Ask: <b>movement or change?</b> → sein. Otherwise → haben. Note: some verbs (e.g. fahren) can take haben when used WITH an object (Ich habe das Auto gefahren), but at A1 stick with the movement = sein rule.',
      hinglish: 'Poochho: <b>movement ya change?</b> → sein. Varna → haben. (fahren jaise kuch verbs object ke saath haben le sakte hain, par A1 par "movement = sein" yaad rakho.)'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four sein-Perfekt traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich habe nach Hause gegangen.', right: 'Ich bin nach Hause gegangen.', why: 'gehen is movement → sein, not haben.' },
        { wrong: 'Ich bin Pizza gegessen.', right: 'Ich habe Pizza gegessen.', why: 'essen is not movement → haben.' },
        { wrong: 'Wir haben angekommen.', right: 'Wir sind angekommen.', why: 'ankommen is movement/arrival → sein.' },
        { wrong: 'Ich bin geblieben zu Hause.', right: 'Ich bin zu Hause geblieben.', why: 'The participle goes to the very end.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>gehen</b> movement hai, isliye <b>bin gegangen</b> aata hai, "habe" nahi. <b>essen</b> mein koi movement nahi hai, isliye <b>habe gegessen</b> sahi hai. <b>ankommen</b> bhi movement hai: <b>sind angekommen</b>. Aur participle sentence ke end mein aata hai: <b>Ich bin zu Hause geblieben</b>.'
    }
  ],

  // ---------- Reading passage (travel in sein-Perfekt, clickable) ----------
  reading: {
    title: 'Annas Reise',
    titleEn: 'Anna\u2019s trip',
    tokens: [
      { w: 'Am', role: 'r-preposition', en: 'on', hi: 'को', pron: 'am', type: 'Preposition · date', why: 'am + day (recycled — Datum).', ex: 'am Freitag', exEn: 'on Friday' },
      { w: 'Freitag', role: 'r-time', en: 'Friday', hi: 'शुक्रवार', pron: 'FRY-tahk', type: 'Noun · day', why: 'der Freitag (recycled — Uhrzeit).', ex: 'am Freitag', exEn: 'on Friday' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'गई', pron: 'ist', type: 'Aux · sein (sie)', why: 'sein helper; verb position 2 (this chapter).', ex: 'Am Freitag ist Anna …', exEn: 'On Friday Anna …' },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'ins', role: 'r-preposition', en: 'to the', hi: 'के', pron: 'ins', type: 'Preposition + place', why: 'in + das → ins (recycled — Hobbies).', ex: 'ins Ausland', exEn: 'abroad' },
      { w: 'Ausland', role: 'r-place', en: 'abroad', hi: 'विदेश', pron: 'OWS-lant', type: 'Noun · place', why: 'das Ausland (this chapter).', ex: 'ins Ausland geflogen', exEn: 'flew abroad' },
      { w: 'geflogen', role: 'r-verb', en: 'flown', hi: 'उड़ी', pron: 'guh-FLOH-gen', type: 'Partizip II · fliegen', why: 'fliegen → sein (this chapter).', ex: 'Sie ist geflogen.', exEn: 'She flew.' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-article', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Flug', role: 'r-subject', en: 'flight', hi: 'उड़ान', pron: 'flook', type: 'Noun · masc.', why: 'der Flug (this chapter).', ex: 'Der Flug war kurz.', exEn: 'The flight was short.' },
      { w: 'ist', role: 'r-verb', en: 'is/went', hi: 'रही', pron: 'ist', type: 'Aux · sein (er)' },
      { w: 'gut', role: 'r-adverb', en: 'well', hi: 'अच्छा', pron: 'goot', type: 'Adverb' },
      { w: 'gelaufen', role: 'r-verb', en: 'gone', hi: 'रहा', pron: 'guh-LOW-fen', type: 'Partizip II · laufen', why: '"gut gelaufen" = went well; laufen → sein (this chapter).', ex: 'Es ist gut gelaufen.', exEn: 'It went well.' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun', why: 'sie = she (recycled — Wer bist du?).', ex: 'Sie ist angekommen.', exEn: 'She arrived.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'पहुँची', pron: 'ist', type: 'Aux · sein (sie)' },
      { w: 'am', role: 'r-preposition', en: 'in the', hi: 'को', pron: 'am', type: 'Preposition · time' },
      { w: 'Abend', role: 'r-time', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun · time', why: 'der Abend (recycled — Uhrzeit).', ex: 'am Abend', exEn: 'in the evening' },
      { w: 'angekommen', role: 'r-verb', en: 'arrived', hi: 'पहुँची', pron: 'AN-guh-ko-men', type: 'Partizip II · ankommen', why: 'ankommen → sein (this chapter).', ex: 'Sie ist angekommen.', exEn: 'She arrived.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'सो गई', pron: 'ist', type: 'Aux · sein (sie)' },
      { w: 'müde', role: 'r-adjective', en: 'tired', hi: 'थकी', pron: 'MÜ-duh', type: 'Adjective', why: 'müde (recycled — Adjektive mit sein).', ex: 'müde eingeschlafen', exEn: 'fell asleep tired' },
      { w: 'eingeschlafen', role: 'r-verb', en: 'fallen asleep', hi: 'सो गई', pron: 'INE-guh-shlah-fen', type: 'Partizip II · einschlafen', why: 'einschlafen = change of state → sein (this chapter).', ex: 'Sie ist eingeschlafen.', exEn: 'She fell asleep.' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'रही', pron: 'ist', type: 'Aux · sein (sie)' },
      { w: 'zwei', role: 'r-time', en: 'two', hi: 'दो', pron: 'tsvy', type: 'Number', why: 'zwei = 2 (recycled — Zahlen).', ex: 'zwei Tage', exEn: 'two days' },
      { w: 'Tage', role: 'r-time', en: 'days', hi: 'दिन', pron: 'TAH-guh', type: 'Noun · plural', why: 'der Tag → die Tage (recycled — Datum).', ex: 'zwei Tage geblieben', exEn: 'stayed two days' },
      { w: 'geblieben', role: 'r-verb', en: 'stayed', hi: 'रही', pron: 'guh-BLEE-ben', type: 'Partizip II · bleiben', why: 'bleiben → sein (this chapter).', ex: 'Sie ist geblieben.', exEn: 'She stayed.' },
      { w: '.', plain: true },
      { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb', why: 'dann (recycled — Modalverben 1).', ex: 'Dann ist sie …', exEn: 'Then she …' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'लौटी', pron: 'ist', type: 'Aux · sein (sie)' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun', why: 'Verb position 2 after front adverb (recycled — Satzposition).', ex: 'Dann ist sie zurückgefahren.', exEn: 'Then she drove back.' },
      { w: 'zurückgefahren', role: 'r-verb', en: 'driven back', hi: 'वापस आई', pron: 'tsu-RÜK-guh-fah-ren', type: 'Partizip II · zurückfahren', why: 'zurückfahren → sein (this chapter).', ex: 'Sie ist zurückgefahren.', exEn: 'She drove back.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-article', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Reise', role: 'r-subject', en: 'trip', hi: 'यात्रा', pron: 'RY-zuh', type: 'Noun · fem.', why: 'die Reise (this chapter).', ex: 'Die Reise war schön.', exEn: 'The trip was lovely.' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb · sein past', why: 'war (recycled — Präteritum).', ex: 'Die Reise war wirklich schön.', exEn: 'The trip was really lovely.' },
      { w: 'wirklich', role: 'r-adverb', en: 'really', hi: 'सचमुच', pron: 'VIRK-likh', type: 'Adverb', why: 'wirklich (this chapter).', ex: 'wirklich schön', exEn: 'really lovely' },
      { w: 'schön', role: 'r-adjective', en: 'lovely', hi: 'सुंदर', pron: 'shön', type: 'Adjective', why: 'sein + adjective (Chapter 13).', ex: 'Die Reise war schön.', exEn: 'The trip was lovely.' },
      { w: '!', plain: true }
    ],
    translation: 'On Friday Anna flew abroad. The flight went well. She arrived in the evening and, tired, fell asleep. She stayed two days. Then she drove back. The trip was really lovely!'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_030_L001', speaker: 'Ole', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Steffi, wo bist du am Wochenende gewesen?', en: 'Steffi, where were you at the weekend?' },
      { id: 'A1_030_L002', speaker: 'Steffi', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich bin zu meiner Familie nach Hamburg gefahren.', en: 'I traveled to my family in Hamburg.' },
      { id: 'A1_030_L003', speaker: 'Ole', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wann bist du zurückgekommen?', en: 'When did you come back?' },
      { id: 'A1_030_L004', speaker: 'Steffi', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gestern Abend. Ich bin sehr spät angekommen und sofort eingeschlafen.', en: 'Last night. I arrived very late and fell asleep right away.' },
      { id: 'A1_030_L005', speaker: 'Ole', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wie lange bist du dort geblieben?', en: 'How long did you stay there?' },
      { id: 'A1_030_L006', speaker: 'Steffi', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Vier Tage. Es ist alles super gelaufen!', en: 'Four days. Everything went great!' }
    ],
    transcript: 'Steffi, wo bist du am Wochenende gewesen? Ich bin zu meiner Familie nach Hamburg gefahren. Wann bist du zurückgekommen? Gestern Abend. Ich bin sehr spät angekommen und sofort eingeschlafen. Wie lange bist du dort geblieben? Vier Tage. Es ist alles super gelaufen!',
    translation: 'Steffi, where were you at the weekend? I traveled to my family in Hamburg. When did you come back? Last night. I arrived very late and fell asleep right away. How long did you stay there? Four days. Everything went great!',
    tokens: [
      { w: 'Steffi' },
      { w: ',', plain: true },
      { w: 'wo' },
      { w: 'bist' },
      { w: 'du' },
      { w: 'am' },
      { w: 'Wochenende' },
      { w: 'gewesen' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'bin' },
      { w: 'zu' },
      { w: 'meiner' },
      { w: 'Familie' },
      { w: 'nach' },
      { w: 'Hamburg' },
      { w: 'gefahren' },
      { w: '.', plain: true },
      { w: 'Wann' },
      { w: 'bist' },
      { w: 'du' },
      { w: 'zurückgekommen' },
      { w: '?', plain: true },
      { w: 'Gestern' },
      { w: 'Abend' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'bin' },
      { w: 'sehr' },
      { w: 'spät' },
      { w: 'angekommen' },
      { w: 'und' },
      { w: 'sofort' },
      { w: 'eingeschlafen' },
      { w: '.', plain: true },
      { w: 'Wie' },
      { w: 'lange' },
      { w: 'bist' },
      { w: 'du' },
      { w: 'dort' },
      { w: 'geblieben' },
      { w: '?', plain: true },
      { w: 'Vier' },
      { w: 'Tage' },
      { w: '.', plain: true },
      { w: 'Es' },
      { w: 'ist' },
      { w: 'alles' },
      { w: 'super' },
      { w: 'gelaufen' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Wohin ist Steffi gereist?', qEn: 'Where did Steffi travel to?', options: ['nach München', 'nach Hamburg', 'nach Berlin', 'nach Wien'], optionsEn: ['to Munich', 'to Hamburg', 'to Berlin', 'to Vienna'], answer: 1,
        explain: '"Ich bin zu meiner Familie nach Hamburg gefahren."' },
      { q: 'Wie lange ist sie geblieben?', qEn: 'How long did she stay?', options: ['zwei Tage', 'drei Tage', 'vier Tage', 'eine Woche'], optionsEn: ['two days', 'three days', 'four days', 'a week'], answer: 2,
        explain: '"Vier Tage."' }
    ]
  },

  speaking: [
    { task: "Dein Partner fragt: Wo bist du am Wochenende gewesen?", taskEn: "Your partner asks: where were you at the weekend?", de: "Ich bin nach Hamburg gefahren.", en: "I went to Hamburg." },
    { task: "Dein Freund fragt: Wann bist du zurückgekommen?", taskEn: "Your friend asks: when did you come back?", de: "Gestern Abend. Ich bin sehr spät angekommen.", en: "Yesterday evening. I arrived very late." },
    { task: "Deine Mutter fragt: Wie lange bist du geblieben?", taskEn: "Your mother asks: how long did you stay?", de: "Ich bin zwei Tage geblieben und dann zurückgefahren.", en: "I stayed two days and then travelled back." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about a real or imagined trip, using the Perfekt with sein. Use movement verbs (bin … gefahren/geflogen/gegangen), an arrival/departure verb (angekommen/losgefahren), and bleiben (bin … geblieben). Keep the participle at the end.',
    starters: ['Am Wochenende bin ich …', 'Ich bin früh …', 'Ich bin … angekommen.', 'Ich bin … Tage geblieben.'],
    placeholder: 'Am Freitag bin ich nach Berlin gefahren …',
    minWords: 20
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct?',
      options: ['Ich habe nach Berlin gefahren.', 'Ich bin nach Berlin gefahren.', 'Ich bin Pizza gegessen.', 'Ich bin gefahren nach Berlin.'],
      answer: 1,
      explain: 'fahren is movement → sein: "Ich bin nach Berlin gefahren."'
    },
    gap: {
      // sein auxiliary + movement participle
      sentence: ['Ich ', ' früh ', ' und am Abend angekommen.'],
      gaps: [ { answer: 'bin', accepts: ['bin'] }, { answer: 'losgefahren', accepts: ['losgefahren'] } ],
      explain: 'movement → sein; losfahren → losgefahren.'
    },
    match: {
      q: 'Match each verb to its Partizip II.',
      pairs: [
        { noun: 'fliegen', art: 'geflogen' },
        { noun: 'bleiben', art: 'geblieben' },
        { noun: 'ankommen', art: 'angekommen' },
        { noun: 'einschlafen', art: 'eingeschlafen' }
      ]
    },
    builder: {
      target: 'Build: "I travelled to Berlin." (Perfekt)',
      bank: ['Ich', 'bin', 'nach', 'Berlin', 'gefahren'],
      answer: ['Ich', 'bin', 'nach', 'Berlin', 'gefahren'],
      roles: { 'Ich': 'r-subject', 'bin': 'r-verb', 'nach': 'r-preposition', 'Berlin': 'r-place', 'gefahren': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which helper does "fahren" use in the Perfekt?', options: ['haben', 'sein', 'werden', 'wollen'], answer: 1,
      explain: 'fahren is movement → sein: "ich bin gefahren".' },
    { q: 'Complete: "Wir ___ spät angekommen."', options: ['haben', 'sind', 'sein', 'ist'], answer: 1,
      explain: 'ankommen → sein: "Wir sind angekommen."' },
    { q: 'What is the Partizip II of "bleiben"?', options: ['gebleibt', 'geblieben', 'gebliebt', 'bleibt'], answer: 1,
      explain: 'bleiben → geblieben (with sein).' },
    { q: 'Which is correct?', options: ['Ich habe eingeschlafen.', 'Ich bin eingeschlafen.', 'Ich bin geschlafen ein.', 'Ich habe geschlafen ein.'], answer: 1,
      explain: 'einschlafen is change of state → sein: "Ich bin eingeschlafen."' },
    { q: 'Which verb takes HABEN, not sein?', options: ['gehen', 'fliegen', 'essen', 'kommen'], answer: 2,
      explain: 'essen is not movement → haben. The others are movement → sein.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'The frame: <span class="de">sein</span> (position 2) + <strong>Partizip II</strong> (end) \u2014 <span class="de">Ich bin nach Berlin gefahren.</span>' },
    { c: 'r-verb', html: 'Use sein for <strong>movement</strong> (gehen, fahren, fliegen, kommen) and <strong>change of state</strong> (aufstehen, einschlafen, werden).' },
    { c: 'r-object', html: 'Memorise two with no movement: <span class="de">sein → gewesen</span> and <span class="de">bleiben → geblieben</span>.' }
  ],
  revisionTips: [
    'Ask one question: movement or change? If yes → sein. If no → haben.',
    'Learn the separable movement verbs whole: ankommen→angekommen, losfahren→losgefahren, zurückfahren→zurückgefahren.',
    'Don\u2019t forget the two odd ones: sein→gewesen and bleiben→geblieben take sein with no movement.'
  ]
};

window.CHAPTER = CHAPTER;
