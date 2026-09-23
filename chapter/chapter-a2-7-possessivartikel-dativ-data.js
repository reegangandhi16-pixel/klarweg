/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 1 · Chapter 7
   "Possessivartikel im Dativ"  (mein/dein/sein/ihr/unser/euer/Ihr
   in the dative: meinem/meinem/meiner/meinen). Teaches ONLY the
   dative possessive. No Genitive, no adjective declension.
   Vocabulary source: uploaded chapter-07 list (~30 items; pets +
   neighbours + housing theme). Recycles Ch.4-6 (weil/dass, modal
   Pr\u00e4teritum), Ch.3 (Artikel), and A1 Dativ, Dativ-Verben,
   Dativ-Pr\u00e4positionen.
   NOTE: content only \u2014 existing audio engine, no new assets.

   VOCAB NOTE: "die Hallig" is a genuine word (a small, un-diked
   tidal island in the North Sea) \u2014 kept as-is.
============================================================ */
const CHAPTER = {
  id: 'a2-7-possessivartikel-dativ',
  phase: 'A2 · Phase 1',
  number: 7,
  title: 'Possessivartikel im Dativ',
  titleEn: 'Possessives in the Dative',
  description: 'You know the dative endings from A1, and you know mein, dein, sein. This chapter clicks them together: when a possessive lands in the dative \u2014 after mit, bei, von, zu, or a dative verb like helfen \u2014 it takes the dative ending. Ich helfe meinem Freund. Sie wohnt bei ihren Eltern. Wir fahren mit unserem Auto. One ending pattern (-em, -em, -er, -en) and every possessive follows it.',
  xp: 160,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 8, title: 'Komparativ & Superlativ', titleEn: 'Comparative & Superlative' , href: 'chapter-a2-8-komparativ-superlativ.html' },

  prevChapter: { number: 6, title: 'Modalverben im Pr\u00e4teritum', titleEn: 'Modal Verbs in the Past', href: 'chapter-a2-6-modalverben-praeteritum.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Silke checks in on her dog, and Nils reports back — how he\'s doing, whether he barks at the neighbour, whether he\'s playing with his ball. Every story about someone and their animal needs a dative possessive: mit meinem Hund, bei ihren Eltern.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear meinem, ihrer, unserem, ihren in natural conversation'
    ],
    scene: 'Haustiergeschichten vor dem Kursfest \u2014 Sprachschule Berlin',
    femaleSpeakers: ['Silke'],
    dialogue: [
      { speaker: 'Silke', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
        { w: 'geht', role: 'r-verb', en: 'goes', hi: 'चल रहा है', pron: 'gayt', type: 'Verb · gehen' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'meinem', role: 'r-dativ', en: 'my (masc./neut. dat.)', hi: 'मेरे', pron: 'MY-nem', type: 'Possessive · dative', why: 'Possessive agrees with the dative noun: mein Hund → meinem Hund (this chapter).', ex: 'Wie geht es meinem Hund?', exEn: 'How is my dog doing?' },
        { w: 'Hund', role: 'r-dativ', en: 'dog (dat.)', hi: 'कुत्ते को', pron: 'hunt', type: 'Noun · masc. dat.' },
        { w: '?', plain: true }
      ], en: 'How is my dog doing?', hi: 'Mera kutta kaisa hai?' },
      { speaker: 'Nils', side: 'right', tokens: [
        { w: 'Deinem', role: 'r-dativ', en: 'your (masc./neut. dat.)', hi: 'तुम्हारे', pron: 'DY-nem', type: 'Possessive · dative', why: 'dein → deinem before a dative noun (this chapter).', ex: 'Deinem Hund geht es gut.', exEn: 'Your dog is doing well.' },
        { w: 'Hund', role: 'r-dativ', en: 'dog (dat.)', hi: 'कुत्ते को', pron: 'hunt', type: 'Noun · masc. dat.' },
        { w: 'geht', role: 'r-verb', en: 'goes', hi: 'चल रहा है', pron: 'gayt', type: 'Verb · gehen' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'gut', role: 'r-adjective', en: 'well', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Your dog is doing very well.', hi: 'Tumhaara kutta bahut achha hai.' },
      { speaker: 'Silke', tokens: [
        { w: 'Bellt', role: 'r-verb', en: 'does he bark', hi: 'भौंकता है', pron: 'BELT', type: 'Verb · bellen', why: 'bellen = to bark (this chapter).', ex: 'Bellt er viel?', exEn: 'Does he bark a lot?' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'viel', role: 'r-adverb', en: 'a lot', hi: 'ज़्यादा', pron: 'feel', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'Does he bark a lot?', hi: 'Kya woh bahut bhaunkta hai?' },
      { speaker: 'Nils', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'bei', role: 'r-preposition', en: 'with', hi: 'साथ', pron: 'by', type: 'Preposition' },
        { w: 'unserem', role: 'r-dativ', en: 'our (masc./neut. dat.)', hi: 'हमारे', pron: 'UN-ze-rem', type: 'Possessive · dative', why: 'unser → unserem before a dative noun (this chapter).', ex: 'bei unserem Nachbarn', exEn: 'with our neighbour' },
        { w: 'Nachbarn', role: 'r-dativ', en: 'neighbour (dat.)', hi: 'पड़ोसी', pron: 'NAKH-barn', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'No, only with our neighbour.', hi: 'Nahi, sirf hamare padosi ke saath.' },
      { speaker: 'Silke', tokens: [
        { w: 'Ach', role: 'r-subject', en: 'ah', hi: 'अच्छा', pron: 'akh', type: 'Reaction' },
        { w: 'so', role: 'r-adverb', en: 'I see', hi: 'समझा', pron: 'zo', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'spielt', role: 'r-verb', en: 'does he play', hi: 'खेलता है', pron: 'SHPEELT', type: 'Verb · spielen' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'seinem', role: 'r-dativ', en: 'his (masc./neut. dat.)', hi: 'अपने', pron: 'ZY-nem', type: 'Possessive · dative', why: 'sein → seinem before a dative noun (this chapter).', ex: 'mit seinem Ball', exEn: 'with his ball' },
        { w: 'Ball', role: 'r-dativ', en: 'ball (dat.)', hi: 'गेंद', pron: 'bal', type: 'Noun · masc. dat.' },
        { w: '?', plain: true }
      ], en: 'Ah, I see! And does he play with his ball?', hi: 'Achha samjha! Aur kya woh apni ball ke saath khelta hai?' },
      { speaker: 'Nils', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', pron: 'YAY-den', type: 'Determiner' },
        { w: 'Tag', role: 'r-akkusativ', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.' },
        { w: '.', plain: true },
        { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'schläft', role: 'r-verb', en: 'sleeps', hi: 'सोता है', pron: 'SHLEFT', type: 'Verb · schlafen' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'gut', role: 'r-adjective', en: 'well', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: 'in', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'in', type: 'Preposition' },
        { w: 'seinem', role: 'r-dativ', en: 'his (neut. dat.)', hi: 'अपने', pron: 'ZY-nem', type: 'Possessive · dative' },
        { w: 'Kissen', role: 'r-dativ', en: 'cushion (dat.)', hi: 'तकिये', pron: 'KI-sen', type: 'Noun · neut. dat.' },
        { w: '.', plain: true }
      ], en: 'Yes, every day. He also sleeps well on his cushion.', hi: 'Haan, har din. Woh apne takiye par bhi achhe se sota hai.' },
      { speaker: 'Silke', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'freut', role: 'r-verb', en: 'pleases', hi: 'ख़ुशी हुई', pron: 'froyt', type: 'Verb · freuen', why: 'freuen + akkusativ: das freut mich = that makes me happy (recycled, Ch40).' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: '!', plain: true },
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'auf', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition' },
        { w: 'ihn', role: 'r-akkusativ', en: 'him', hi: 'उसका', pron: 'een', type: 'Pronoun · acc.' },
        { w: 'aufpasst', role: 'r-verb', en: 'watch', hi: 'ध्यान रखते हो', pron: 'OWF-past', type: 'Verb · aufpassen (Satzende)', why: 'aufpassen auf + akk = to watch over (this chapter).', ex: 'Danke, dass du auf ihn aufpasst.', exEn: 'Thanks for watching over him.' },
        { w: '.', plain: true }
      ], en: 'That makes me happy! Thanks for watching over him.', hi: 'Yeh sunkar khushi hui! Uska khyaal rakhne ke liye dhanyavaad.' },
      { speaker: 'Nils', side: 'right', tokens: [
        { w: 'Gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Genieß', role: 'r-verb', en: 'enjoy', hi: 'आनंद लो', pron: 'ge-NEES', type: 'Verb · imperative' },
        { w: 'deinen', role: 'r-akkusativ', en: 'your (masc. acc.)', hi: 'अपनी', pron: 'DY-nen', type: 'Possessive · acc.' },
        { w: 'Urlaub', role: 'r-akkusativ', en: 'vacation', hi: 'छुट्टी', pron: 'OOR-lowp', type: 'Noun · masc.' },
        { w: '!', plain: true }
      ], en: 'Gladly! Enjoy your vacation!', hi: 'Khushi se! Apni chhutti ka anand lo!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'You already own two halves of this: the <strong>dative endings</strong> from A1 and the possessives <span class="de">mein, dein, sein, ihr, unser, euer, Ihr</span>. This chapter snaps them together. When a possessive sits in the <strong>dative</strong> \u2014 after a dative preposition (<span class="de">mit, bei, von, zu, nach, aus</span>) or a dative verb (<span class="de">helfen, geh\u00f6ren, danken</span>) \u2014 it takes the dative ending: <span class="de">masc. & neut. \u2192 <span class="r-dativ">-em</span></span>, <span class="de">fem. \u2192 <span class="r-dativ">-er</span></span>, <span class="de">plural \u2192 <span class="r-dativ">-en</span></span>. So <span class="de">mein \u2192 <span class="r-dativ">meinem</span> Freund, <span class="r-dativ">meiner</span> Mutter, <span class="r-dativ">meinen</span> Eltern</span>. Every possessive follows the identical pattern \u2014 learn it once with <em>mein</em>, and dein, sein, ihr, unser all fall into line.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is POSSESSIVE ARTICLES in the DATIVE: mein/dein/sein/ihr/unser/euer/Ihr with dative endings. ' +
    'No Genitive, no adjective declension. The learner wrote about family/pets/home below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- Dative endings on the possessive: masculine & neuter = -em (meinem, deinem, seinem, ihrem, unserem, eurem, Ihrem); feminine = -er (meiner, deiner, seiner, ihrer, unserer, eurer, Ihrer); plural = -en (meinen, deinen \u2026) and the noun adds -n if it can (mit meinen Eltern, Freunden, Kindern).\n' +
    '- euer drops the second e before an ending: euer \u2192 eurem/eurer/euren (NOT euerem).\n' +
    '- Dative is triggered by mit, bei, von, zu, nach, aus, seit, gegen\u00fcber and by dative verbs helfen, geh\u00f6ren, danken, gefallen, gratulieren: "Ich helfe meinem Freund." "Das Buch geh\u00f6rt meiner Schwester."\n' +
    '- Do NOT confuse: mein (nom.) vs meinem (dat. m/n) vs meiner (dat. f); ihrer (dat. f / dat. pl on ihr) vs ihren (dat. pl / acc. m). unserem (dat. m/n) vs unsere (nom./acc. f/pl).\n' +
    '- ihr = her/their; do not treat it as "you". If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why. If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>Dative check:</b> one sentence on the ending (-em/-er/-en) accuracy.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You bend the possessives cleanly into the dative \u2014 meinem, meiner, meinen. Next: compare and rank with <span class="de">Komparativ & Superlativ</span>.',
    mid: 'Good. Re-read the three-ending card once (-em / -er / -en), then continue.',
    low: 'Worth another pass \u2014 the whole rule is three endings: m/n \u2192 -em, f \u2192 -er, plural \u2192 -en. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'helfe', role: 'r-verb' },
    { w: 'meinem', role: 'r-dativ' }, { w: 'Freund', role: 'r-dativ' },
    { w: 'bei', role: 'r-preposition' }, { w: 'der', role: 'r-dativ' },
    { w: 'Arbeit', role: 'r-place' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the three dative endings that every possessive shares.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Pet stories \u2014 mit meinem Hasen, bei meiner Nachbarin, zu unserer Familie.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the pet/home words: das Haustier, der Besitzer, das Kissen, bellen, schmutzig.' },
    { id: 'grammar',    label: 'Dativ',      tag: 'core',
      objective: 'Master -em/-er/-en, the dative triggers, and Nom/Akk/Dat side by side.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read about Rohans neighbourhood \u2014 full of dative possessives.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch whose animal is whose in a quick pet conversation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe your family, friends and things in full dative sentences.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a short dialogue and description using dative possessives.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the endings, triggers and Akk-vs-Dat with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Vocabulary PDF',
      desc: 'The chapter\u2019s pet and home words \u2014 das Haustier, der Besitzer, das Kissen, das Spielzeug, bellen \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Homework PDF',
      desc: 'Dative-ending drills, preposition + possessive practice, Akk-vs-Dat sorting, and a describe-your-family task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Grammar Rules PDF',
      desc: 'The full possessive table across Nom/Akk/Dat, the dative triggers, the euer\u2192eur- rule, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'mit meinem Hund', text: 'Use -em after mit/bei/von (m & n)' },
    { de: 'bei meiner Mutter', text: 'Use -er for the feminine dative' },
    { de: 'bei meinen Eltern', text: 'Use -en (+ noun -n) in the plural' },
    { de: 'Ich helfe seinem Bruder.', text: 'Bend possessives after dative verbs' },
    { de: 'mein \u2192 meinem \u2192 meinen', text: 'Tell Nominativ from Dativ forms' }
  ],

  // ---------- Vocabulary (30 items) ----------
  vocab: [
    // ===== Animals & pets =====
    { de: 'Haustier', art: 'das', gender: 'n', plural: 'Haustiere', pos: 'noun', en: 'pet', hi: 'पालतू जानवर', ex: 'Erz\u00e4hl mir von deinem Haustier.', exEn: 'Tell me about your pet.' },
    { de: 'Hase', art: 'der', gender: 'm', plural: 'Hasen', pos: 'noun', en: 'rabbit, hare', hi: 'खरगोश', ex: 'Ich spiele mit meinem Hasen.', exEn: 'I play with my rabbit.' },
    { de: 'Kuh', art: 'die', gender: 'f', plural: 'K\u00fche', pos: 'noun', en: 'cow', hi: 'गाय', ex: 'Wir lebten mit unserer Kuh Berta.', exEn: 'We lived with our cow Berta.' },
    { de: 'Besitzer', art: 'der', gender: 'm', plural: 'Besitzer', pos: 'noun', en: 'owner', hi: 'मालिक', ex: 'Der Besitzer gab seinen Hund nie her.', exEn: 'The owner never gave his dog away.' },
    { de: 'Kosename', art: 'der', gender: 'm', plural: 'Kosenamen', pos: 'noun', en: 'pet name, term of endearment', hi: 'प्यार का नाम', ex: 'Der Kosename von meinem Hasen ist Flitzer.', exEn: 'My rabbit\u2019s pet name is Flitzer.' },
    { de: 'Spielzeug', art: 'das', gender: 'n', plural: 'Spielzeuge', pos: 'noun', en: 'toy', hi: 'खिलौना', ex: 'Ich gebe meinem Hasen ein Spielzeug.', exEn: 'I give my rabbit a toy.' },
    { de: 'Kissen', art: 'das', gender: 'n', plural: 'Kissen', pos: 'noun', en: 'cushion, pillow', hi: 'तकिया', ex: 'Auf dem Kissen von unserem Hund liegt sein Spielzeug.', exEn: 'On our dog\u2019s cushion lies its toy.' },
    { de: 'Tiergeschichte', art: 'die', gender: 'f', plural: 'Tiergeschichten', pos: 'noun', en: 'animal story', hi: 'जानवरों की कहानी', ex: 'Frau Weber liebt jede Tiergeschichte.', exEn: 'Frau Weber loves every animal story.' },
    // ===== Home & neighbours =====
    { de: 'Mieterin', art: 'die', gender: 'f', plural: 'Mieterinnen', pos: 'noun', en: 'tenant (f.)', hi: 'किराएदार', ex: 'Die Mieterin \u00fcber uns hilft ihrer Nachbarin oft.', exEn: 'The tenant above us often helps her neighbour.' },
    { de: 'Boden', art: 'der', gender: 'm', plural: 'B\u00f6den', pos: 'noun', en: 'floor, ground', hi: 'फ़र्श', ex: 'Das Spielzeug liegt auf dem Boden.', exEn: 'The toy lies on the floor.' },
    { de: 'Dach', art: 'das', gender: 'n', plural: 'D\u00e4cher', pos: 'noun', en: 'roof', hi: 'छत', ex: 'Auf dem Dach von unserem Haus sitzt eine Katze.', exEn: 'On the roof of our house sits a cat.' },
    { de: 'Breite', art: 'die', gender: 'f', plural: 'Breiten', pos: 'noun', en: 'width', hi: 'चौड़ाई', ex: 'Die Breite von seinem Zimmer ist drei Meter.', exEn: 'The width of his room is three metres.' },
    { de: 'Stadtrand', art: 'der', gender: 'm', plural: 'Stadtr\u00e4nder', pos: 'noun', en: 'edge of town, outskirts', hi: 'शहर का किनारा', ex: 'Meine Eltern wohnen am Stadtrand.', exEn: 'My parents live on the edge of town.' },
    { de: 'Hallig', art: 'die', gender: 'f', plural: 'Halligen', pos: 'noun', en: 'hallig (small tidal island)', hi: 'हैलिग द्वीप', ex: 'Als Kind wohnte ich auf einer Hallig.', exEn: 'As a child I lived on a hallig.' },
    { de: 'L\u00e4rm', art: 'der', gender: 'm', plural: '\u2014', pos: 'noun', en: 'noise', hi: 'शोर', ex: 'Der L\u00e4rm von ihrem Hund ist furchtbar.', exEn: 'The noise from her dog is terrible.' },
    { de: 'Kursfest', art: 'das', gender: 'n', plural: 'Kursfeste', pos: 'noun', en: 'course party', hi: 'कोर्स पार्टी', ex: 'Beim Kursfest zeigen wir Fotos von unseren Haustieren.', exEn: 'At the course party we show photos of our pets.' },
    // ===== Concepts / study words =====
    { de: 'Vermutung', art: 'die', gender: 'f', plural: 'Vermutungen', pos: 'noun', en: 'guess, assumption', hi: 'अनुमान', ex: 'Meine Vermutung: Tiere machen alles schmutzig.', exEn: 'My guess: animals make everything dirty.' },
    { de: 'Checkliste', art: 'die', gender: 'f', plural: 'Checklisten', pos: 'noun', en: 'checklist', hi: 'जाँच-सूची', ex: 'Auf meiner Checkliste steht das Futter f\u00fcr den Hasen.', exEn: 'On my checklist is the food for the rabbit.' },
    { de: 'Textanfang', art: 'der', gender: 'm', plural: 'Textanf\u00e4nge', pos: 'noun', en: 'beginning of the text', hi: 'लेख का आरंभ', ex: 'Schreib den Kosenamen an den Textanfang.', exEn: 'Write the pet name at the beginning of the text.' },
    { de: 'Verbesserungsvorschlag', art: 'der', gender: 'm', plural: 'Verbesserungsvorschl\u00e4ge', pos: 'noun', en: 'suggestion for improvement', hi: 'सुधार का सुझाव', ex: 'Danke f\u00fcr deinen Verbesserungsvorschlag!', exEn: 'Thanks for your suggestion for improvement!' },
    // ===== Verbs =====
    { de: 'bellen', pos: 'verb', en: 'to bark', hi: 'भौंकना', ex: 'Der Hund von meiner Nachbarin bellt laut.', exEn: 'My neighbour\u2019s dog barks loudly.', conj: { praesens: 'bellt', praeteritum: 'bellte', perfekt: 'hat gebellt' } },
    { de: 'hergeben', pos: 'verb', en: 'to give away, to hand over (separable)', hi: 'दे देना', ex: 'Wir gaben unsere Kuh nie her.', exEn: 'We never gave our cow away.', conj: { praesens: 'gibt her', praeteritum: 'gab her', perfekt: 'hat hergegeben' } },
    { de: 'auskennen', pos: 'verb', en: 'to know one\u2019s way around (sich auskennen, separable)', hi: 'अच्छी जानकारी होना', ex: 'Ihr kennt euch jetzt gut aus.', exEn: 'You know your way around well now.', conj: { praesens: 'kennt sich aus', praeteritum: 'kannte sich aus', perfekt: 'hat sich ausgekannt' } },
    { de: 'gelten', pos: 'verb', en: 'to apply, to be valid', hi: 'लागू होना', ex: 'Die Regel gilt f\u00fcr alle Possessivartikel.', exEn: 'The rule applies to all possessives.', conj: { praesens: 'gilt', praeteritum: 'galt', perfekt: 'hat gegolten' } },
    { de: 'verirren', pos: 'verb', en: 'to get lost (sich verirren)', hi: 'रास्ता भटकना', ex: 'Auf der Hallig kann man sich leicht verirren.', exEn: 'On the hallig you can easily get lost.', conj: { praesens: 'verirrt sich', praeteritum: 'verirrte sich', perfekt: 'hat sich verirrt' } },
    // ===== Adjectives / adverbs / connectors =====
    { de: 'dick', pos: 'adjective', en: 'thick, fat', hi: 'मोटा', ex: 'Das Kissen von meinem Hasen ist sch\u00f6n dick.', exEn: 'My rabbit\u2019s cushion is nice and thick.' },
    { de: 'nass', pos: 'adjective', en: 'wet', hi: 'गीला', ex: 'Nach dem Regen war das Spielzeug nass.', exEn: 'After the rain the toy was wet.' },
    { de: 'schmutzig', pos: 'adjective', en: 'dirty', hi: 'गंदा', ex: 'Der Boden ist schmutzig.', exEn: 'The floor is dirty.' },
    { de: 'modisch', pos: 'adjective', en: 'fashionable', hi: 'फ़ैशनेबल', ex: 'Meine Nachbarin ist immer sehr modisch.', exEn: 'My neighbour is always very fashionable.' },
    { de: 'immer wenn', pos: 'conjunction', en: 'whenever', hi: 'जब भी', ex: 'Immer wenn ich komme, bellt ihr Hund.', exEn: 'Whenever I come, her dog barks.' }
  ],

  // ---------- Possessivartikel im Dativ (rule cards) ----------
  grammar: [
    {
      title: 'Three endings: -em, -er, -en',
      goldenRule: 'Dative possessive: masc/neut <b>-em</b> \u00b7 fem <b>-er</b> \u00b7 plural <b>-en</b>.',
      formula: [
        'mit <b>meinem</b> Hund    (m)',
        'mit <b>meinem</b> Kind    (n)',
        'bei <b>meiner</b> Mutter  (f)',
        'bei <b>meinen</b> Eltern  (pl, + noun -n)'
      ],
      memoryTrick: 'Yeh wahi <b>dem / der / dem / den</b> hai \u2014 possessive sirf usi ending ko utha leta hai. Naya table yaad nahi karna.',
      recap: [
        'masc. and neut. share <b>-em</b>.',
        'fem. takes <b>-er</b>, plural takes <b>-en</b>.',
        'Plural nouns usually add an <b>-n</b> too: mit meinen Freunden.'
      ],
      body: [
        'A possessive in the dative takes exactly one of three endings, decided by the gender/number of the noun that follows. Masculine and neuter share <strong>-em</strong>.'
      ],
      table: {
        head: ['Gender/number', 'Ending', 'Example'],
        rows: [
          ['masculine', '<span class="de r-dativ">-em</span>', '<span class="de">mit <span class="r-dativ">meinem</span> Hund</span>'],
          ['neuter', '<span class="de r-dativ">-em</span>', '<span class="de">mit <span class="r-dativ">meinem</span> Kind</span>'],
          ['feminine', '<span class="de r-dativ">-er</span>', '<span class="de">bei <span class="r-dativ">meiner</span> Mutter</span>'],
          ['plural', '<span class="de r-dativ">-en</span>', '<span class="de">bei <span class="r-dativ">meinen</span> Eltern</span>']
        ]
      },
      note: 'It\u2019s the same set of endings as <b>dem / dem / der / den</b> \u2014 the possessive just carries them. In the plural the noun itself usually gains an <b>-n</b>: mit meinen Freund<b>en</b>, Kinder<b>n</b>.',
      hinglish: 'Dativ mein possessive teen endings leta hai: masculine aur neuter dono <b>-em</b>, feminine <b>-er</b>, aur plural <b>-en</b>. Yeh bilkul wahi endings hain jo <b>dem/der/den</b> mein dikhti hain, isliye naya table yaad karne ki zaroorat nahi. Plural mein noun par bhi ek <b>-n</b> lagta hai: <b>mit meinen Freunden</b>.'
    },
    {
      title: 'Every possessive follows mein',
      goldenRule: 'Learn it once with <b>mein</b> \u2014 dein, sein, ihr, unser, euer, Ihr take the identical endings.',
      memoryTrick: 'Ek hi pattern, saat words. Sirf <b>euer</b> apna beech ka <b>-e-</b> gira deta hai: <b>eurem, eurer, euren</b> \u2014 "euerem" kabhi nahi.',
      body: [
        'Learn the pattern once with <span class="de">mein</span>, and <span class="de">dein, sein, ihr, unser, euer, Ihr</span> all take the identical endings.'
      ],
      table: {
        head: ['Base', 'masc./neut. (-em)', 'fem. (-er)', 'plural (-en)'],
        rows: [
          ['mein', '<span class="de r-dativ">meinem</span>', '<span class="de r-dativ">meiner</span>', '<span class="de r-dativ">meinen</span>'],
          ['dein', '<span class="de r-dativ">deinem</span>', '<span class="de r-dativ">deiner</span>', '<span class="de r-dativ">deinen</span>'],
          ['sein', '<span class="de r-dativ">seinem</span>', '<span class="de r-dativ">seiner</span>', '<span class="de r-dativ">seinen</span>'],
          ['ihr', '<span class="de r-dativ">ihrem</span>', '<span class="de r-dativ">ihrer</span>', '<span class="de r-dativ">ihren</span>'],
          ['unser', '<span class="de r-dativ">unserem</span>', '<span class="de r-dativ">unserer</span>', '<span class="de r-dativ">unseren</span>'],
          ['euer', '<span class="de r-dativ">eurem</span>', '<span class="de r-dativ">eurer</span>', '<span class="de r-dativ">euren</span>']
        ]
      },
      note: 'Watch <b>euer</b>: it drops the middle -e- before an ending \u2192 <b>eurem, eurer, euren</b> (never "euerem"). <b>ihr</b> means <em>her/their</em>, and <b>Ihr</b> (capital) is the polite <em>your</em> \u2014 both bend the same way: Ihrem, Ihrer, Ihren.',
      hinglish: 'Ek baar mein ke saath seekho, baaki sab (dein, sein, ihr, unser, euer) same endings lete hain. Dhyaan: euer \u2192 eurem/eurer/euren (beech ka -e- gir jaata hai). ihr = uski/unki, Ihr (bada I) = aapka \u2014 dono same chalte hain.'
    },
    {
      title: 'What triggers the dative?',
      goldenRule: 'The possessive only bends when something <b>demands</b> the dative: a dative preposition or a dative verb.',
      memoryTrick: 'Do trigger yaad rakho: (1) saat prepositions \u2014 <b>aus, bei, mit, nach, seit, von, zu</b>. (2) dative verbs \u2014 <b>helfen, geh\u00f6ren, danken, gefallen</b>. Inke baad hi possessive badalta hai.',
      body: [
        'The possessive only bends to the dative when something demands the dative. Two familiar triggers from A1:'
      ],
      table: {
        head: ['Trigger', 'Example', 'Meaning'],
        rows: [
          ['<span class="de">mit / bei / von / zu / nach / aus</span>', '<span class="de">Ich fahre mit <span class="r-dativ">meinem</span> Auto.</span>', 'dative prepositions'],
          ['<span class="de">helfen</span>', '<span class="de">Ich helfe <span class="r-dativ">meinem</span> Freund.</span>', 'dative verb'],
          ['<span class="de">geh\u00f6ren</span>', '<span class="de">Das Buch geh\u00f6rt <span class="r-dativ">meiner</span> Schwester.</span>', 'dative verb'],
          ['<span class="de">danken / gefallen</span>', '<span class="de">Ich danke <span class="r-dativ">meinen</span> Eltern.</span>', 'dative verb']
        ]
      },
      note: 'The dative prepositions are worth memorising as a chant: <b>mit, bei, von, zu, nach, aus, seit, gegen\u00fcber</b>. After any of them, a possessive goes into the dative.',
      hinglish: 'Possessive apne aap Dativ mein nahi jaata \u2014 koi trigger hona chahiye. Trigger do tarah ke hote hain: dative prepositions jaise <b>mit, bei, von, zu, nach, aus</b>, aur dative verbs jaise <b>helfen, geh\u00f6ren, danken</b>. Inke baad hi possessive Dativ mein badalta hai.'
    },
    {
      title: 'Nominativ vs. Akkusativ vs. Dativ',
      body: [
        'Same possessive, three cases. Only the masculine changes in the accusative; the dative changes for everyone.'
      ],
      table: {
        head: ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
        rows: [
          ['Nominativ', '<span class="de">mein</span>', '<span class="de">meine</span>', '<span class="de">mein</span>', '<span class="de">meine</span>'],
          ['Akkusativ', '<span class="de r-akkusativ">meinen</span>', '<span class="de">meine</span>', '<span class="de">mein</span>', '<span class="de">meine</span>'],
          ['Dativ', '<span class="de r-dativ">meinem</span>', '<span class="de r-dativ">meiner</span>', '<span class="de r-dativ">meinem</span>', '<span class="de r-dativ">meinen</span>']
        ]
      },
      note: 'Careful with the look-alikes: <b>meinen</b> is masc. <b>accusative</b> (Ich sehe meinen Hund) <b>and</b> the <b>dative plural</b> (mit meinen Hunden). The trigger tells you which.',
      hinglish: 'Ek hi possessive teen cases mein chalta hai. Akkusativ mein sirf masculine badalta hai (<b>meinen</b>), lekin Dativ mein sab badal jaate hain (<b>meinem/meiner/meinem/meinen</b>). Ek confusion ki jagah hai: <b>meinen</b> do jagah aata hai \u2014 masculine Akkusativ mein aur Dativ plural mein. Pehchanne ke liye trigger dekho.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four dative-possessive traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich helfe mein Freund.', right: 'Ich helfe meinem Freund.', why: 'helfen takes the dative \u2014 masc. \u2192 meinem, not bare mein.' },
        { wrong: 'Sie spricht mit ihre Mutter.', right: 'Sie spricht mit ihrer Mutter.', why: 'mit + dative, feminine \u2192 ihrer, not ihre.' },
        { wrong: 'Wir fahren mit unsere Auto.', right: 'Wir fahren mit unserem Auto.', why: 'Auto is neuter \u2192 dative -em: unserem.' },
        { wrong: 'Sie wohnt bei ihre Eltern.', right: 'Sie wohnt bei ihren Eltern.', why: 'Plural dative \u2192 -en: ihren Eltern.' }
      ],
      hinglish: 'Char galtiyan dhyaan mein rakho. <b>helfen</b> Dativ leta hai, isliye <b>meinem Freund</b> sahi hai, <b>mein Freund</b> nahi. Feminine ke saath <b>mit ihrer Mutter</b>. Neuter ke saath <b>mit unserem Auto</b>. Aur plural ke saath <b>bei ihren Eltern</b>. Har jagah Dativ ending lagani zaroori hai.'
    }
  ],

  // ---------- Reading passage (In meiner Nachbarschaft, clickable) ----------
  reading: {
    title: 'In meiner Nachbarschaft',
    titleEn: 'In my neighbourhood',
    tokens: [
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'wohne', role: 'r-verb', en: 'live', hi: 'रहता हूँ', pron: 'VO-nuh', type: 'Verb \u00b7 wohnen' },
      { w: 'mit', role: 'r-preposition', en: 'with', hi: 'साथ', pron: 'mit', type: 'Preposition \u00b7 Dativ', why: 'mit + Dativ (recycled \u2014 Pr\u00e4positionen mit Dativ).', ex: 'mit meiner Familie', exEn: 'with my family' },
      { w: 'meiner', role: 'r-dativ', en: 'my (fem. dat.)', hi: 'अपने', pron: 'MY-ner', type: 'Possessive \u00b7 dative', why: 'mein \u2192 meiner, fem. dative (this chapter).', ex: 'mit meiner Familie', exEn: 'with my family' },
      { w: 'Familie', role: 'r-dativ', en: 'family', hi: 'परिवार', pron: 'fa-MEE-lee-uh', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Familie (recycled \u2014 Familie).', ex: 'meiner Familie', exEn: 'my family' },
      { w: 'am', role: 'r-preposition', en: 'on the', hi: 'पर', pron: 'am', type: 'Preposition \u00b7 Dativ' },
      { w: 'Stadtrand', role: 'r-place', en: 'edge of town', hi: 'शहर के किनारे', pron: 'SHTAT-rant', type: 'Noun \u00b7 masc.', why: 'der Stadtrand (this chapter).', ex: 'am Stadtrand', exEn: 'on the edge of town' },
      { w: '.', plain: true },
      { w: 'Neben', role: 'r-preposition', en: 'next to', hi: 'के बगल', pron: 'NAY-ben', type: 'Preposition \u00b7 Wechsel', why: 'neben + Dativ (location) (recycled \u2014 Wechselpr\u00e4positionen).', ex: 'neben unserem Haus', exEn: 'next to our house' },
      { w: 'unserem', role: 'r-dativ', en: 'our (neut. dat.)', hi: 'हमारे', pron: 'UN-zer-em', type: 'Possessive \u00b7 dative', why: 'unser \u2192 unserem, neut. dative (this chapter).', ex: 'neben unserem Haus', exEn: 'next to our house' },
      { w: 'Haus', role: 'r-place', en: 'house', hi: 'घर', pron: 'hows', type: 'Noun \u00b7 neut. \u00b7 dat.', why: 'das Haus (recycled \u2014 Artikel).', ex: 'unserem Haus', exEn: 'our house' },
      { w: 'wohnt', role: 'r-verb', en: 'lives', hi: 'रहती है', pron: 'vohnt', type: 'Verb \u00b7 wohnen' },
      { w: 'eine', role: 'r-subject', en: 'a (fem.)', hi: 'एक', pron: 'INE-uh', type: 'Article' },
      { w: 'Mieterin', role: 'r-subject', en: 'tenant (f.)', hi: 'किराएदार', pron: 'MEE-tuh-rin', type: 'Noun \u00b7 fem.', why: 'die Mieterin (this chapter).', ex: 'eine Mieterin', exEn: 'a tenant' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
      { w: 'modisch', role: 'r-adjective', en: 'fashionable', hi: 'फ़ैशनेबल', pron: 'MO-dish', type: 'Adjective', why: 'modisch (this chapter).', ex: 'sehr modisch', exEn: 'very fashionable' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb \u00b7 haben' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article \u00b7 acc.' },
      { w: 'Haustier', role: 'r-object', en: 'pet', hi: 'पालतू जानवर', pron: 'HOWS-teer', type: 'Noun \u00b7 neut.', why: 'das Haustier (this chapter).', ex: 'ein Haustier', exEn: 'a pet' },
      { w: '.', plain: true },
      { w: 'Immer', role: 'r-adverb', en: '', hi: '', pron: 'I-mer', type: 'Adverb' },
      { w: 'wenn', role: 'r-conjunction', en: 'whenever', hi: 'जब भी', pron: 'ven', type: 'Conjunction', why: 'immer wenn = whenever (this chapter).', ex: 'immer wenn ich komme', exEn: 'whenever I come' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'komme', role: 'r-verb', en: 'come', hi: 'आता हूँ', pron: 'KO-muh', type: 'Verb \u00b7 kommen', why: 'verb last after "immer wenn" (recycled \u2014 weil/dass).', ex: 'immer wenn ich komme', exEn: 'whenever I come' },
      { w: ',', plain: true },
      { w: 'bellt', role: 'r-verb', en: 'barks', hi: 'भौंकता है', pron: 'belt', type: 'Verb \u00b7 bellen', why: 'bellen (this chapter).', ex: 'ihr Hund bellt', exEn: 'her dog barks' },
      { w: 'ihr', role: 'r-subject', en: 'her', hi: 'उसका', pron: 'eer', type: 'Possessive', why: 'ihr = her (this chapter).', ex: 'ihr Hund', exEn: 'her dog' },
      { w: 'Hund', role: 'r-subject', en: 'dog', hi: 'कुत्ता', pron: 'hunt', type: 'Noun \u00b7 masc.' },
      { w: 'laut', role: 'r-adverb', en: 'loudly', hi: 'ज़ोर से', pron: 'lowt', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'L\u00e4rm', role: 'r-subject', en: 'noise', hi: 'शोर', pron: 'lairm', type: 'Noun \u00b7 masc.', why: 'der L\u00e4rm (this chapter).', ex: 'der L\u00e4rm', exEn: 'the noise' },
      { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition \u00b7 Dativ', why: 'von + Dativ (recycled \u2014 Pr\u00e4positionen mit Dativ).', ex: 'von ihrem Hund', exEn: 'from her dog' },
      { w: 'ihrem', role: 'r-dativ', en: 'her (masc. dat.)', hi: 'उसके', pron: 'EE-rem', type: 'Possessive \u00b7 dative', why: 'ihr \u2192 ihrem, masc. dative (this chapter).', ex: 'von ihrem Hund', exEn: 'from her dog' },
      { w: 'Hund', role: 'r-dativ', en: 'dog', hi: 'कुत्ते', pron: 'hunt', type: 'Noun \u00b7 masc. \u00b7 dat.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'gro\u00df', role: 'r-adjective', en: 'great, big', hi: 'बहुत', pron: 'grohs', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'helfe', role: 'r-verb', en: 'help', hi: 'मदद करता हूँ', pron: 'HEL-fuh', type: 'Verb \u00b7 helfen', why: 'helfen + Dativ (recycled \u2014 Verben mit Dativ).', ex: 'Ich helfe der Mieterin.', exEn: 'I help the tenant.' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article \u00b7 dative', why: 'helfen + Dativ; die \u2192 der (recycled \u2014 Dativ).', ex: 'der Mieterin helfen', exEn: 'to help the tenant' },
      { w: 'Mieterin', role: 'r-dativ', en: 'tenant', hi: 'किराएदार', pron: 'MEE-tuh-rin', type: 'Noun \u00b7 fem. \u00b7 dat.' },
      { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'gebe', role: 'r-verb', en: 'give', hi: 'देता हूँ', pron: 'GAY-buh', type: 'Verb \u00b7 geben', why: 'geben + Dativ + Akkusativ (recycled \u2014 Verben mit Dativ).', ex: 'Ich gebe ihrem Hund Futter.', exEn: 'I give her dog food.' },
      { w: 'ihrem', role: 'r-dativ', en: 'her (masc. dat.)', hi: 'उसके', pron: 'EE-rem', type: 'Possessive \u00b7 dative' },
      { w: 'Hund', role: 'r-dativ', en: 'dog', hi: 'कुत्ते', pron: 'hunt', type: 'Noun \u00b7 masc. \u00b7 dat.' },
      { w: 'manchmal', role: 'r-time', en: 'sometimes', hi: 'कभी-कभी', pron: 'MANKH-mahl', type: 'Adverb \u00b7 time', why: 'manchmal (recycled \u2014 Zeitangaben).', ex: 'manchmal', exEn: 'sometimes' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article \u00b7 acc.' },
      { w: 'Spielzeug', role: 'r-object', en: 'toy', hi: 'खिलौना', pron: 'SHPEEL-tsoyk', type: 'Noun \u00b7 neut.', why: 'das Spielzeug (this chapter).', ex: 'ein Spielzeug', exEn: 'a toy' },
      { w: '.', plain: true },
      { w: 'Auf', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition \u00b7 Wechsel' },
      { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: 'इस', pron: 'daym', type: 'Article \u00b7 dative' },
      { w: 'Boden', role: 'r-place', en: 'floor', hi: 'फ़र्श', pron: 'BO-den', type: 'Noun \u00b7 masc.', why: 'der Boden (this chapter).', ex: 'auf dem Boden', exEn: 'on the floor' },
      { w: 'von', role: 'r-preposition', en: 'of', hi: 'का', pron: 'fon', type: 'Preposition \u00b7 Dativ' },
      { w: 'ihrer', role: 'r-dativ', en: 'her (fem. dat.)', hi: 'उसके', pron: 'EE-rer', type: 'Possessive \u00b7 dative', why: 'ihr \u2192 ihrer, fem. dative (this chapter).', ex: 'von ihrer Wohnung', exEn: 'of her flat' },
      { w: 'Wohnung', role: 'r-dativ', en: 'flat', hi: 'फ़्लैट', pron: 'VO-nung', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Wohnung (recycled \u2014 Wohnung).', ex: 'ihrer Wohnung', exEn: 'her flat' },
      { w: 'liegt', role: 'r-verb', en: 'lies', hi: 'पड़ा रहता है', pron: 'leekt', type: 'Verb \u00b7 liegen', why: 'liegen (recycled \u2014 Modalverben Pr\u00e4t.).', ex: 'Es liegt dort.', exEn: 'It lies there.' },
      { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', pron: 'oft', type: 'Adverb' },
      { w: 'ein', role: 'r-subject', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article' },
      { w: 'nasses', role: 'r-adjective', en: 'wet', hi: 'गीला', pron: 'NA-ses', type: 'Adjective', why: 'nass (this chapter).', ex: 'ein nasses Kissen', exEn: 'a wet cushion' },
      { w: 'Kissen', role: 'r-subject', en: 'cushion', hi: 'तकिया', pron: 'KI-sen', type: 'Noun \u00b7 neut.', why: 'das Kissen (this chapter).', ex: 'ein Kissen', exEn: 'a cushion' },
      { w: '.', plain: true },
      { w: 'Meine', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'MY-nuh', type: 'Possessive' },
      { w: 'Vermutung', role: 'r-subject', en: 'guess', hi: 'अनुमान', pron: 'fair-MOO-tung', type: 'Noun \u00b7 fem.', why: 'die Vermutung (this chapter).', ex: 'meine Vermutung', exEn: 'my guess' },
      { w: ':', plain: true },
      { w: 'Das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article' },
      { w: 'Leben', role: 'r-subject', en: 'life', hi: 'जीवन', pron: 'LAY-ben', type: 'Noun \u00b7 neut.', why: 'das Leben (recycled \u2014 Alltag).', ex: 'das Leben mit Tieren', exEn: 'life with animals' },
      { w: 'mit', role: 'r-preposition', en: 'with', hi: 'साथ', pron: 'mit', type: 'Preposition \u00b7 Dativ' },
      { w: 'ihren', role: 'r-dativ', en: 'her (pl. dat.)', hi: 'उसके', pron: 'EE-ren', type: 'Possessive \u00b7 dative', why: 'ihr \u2192 ihren, plural dative (this chapter).', ex: 'mit ihren Tieren', exEn: 'with her animals' },
      { w: 'Tieren', role: 'r-dativ', en: 'animals', hi: 'जानवरों', pron: 'TEE-ren', type: 'Noun \u00b7 plural \u00b7 dat.', why: 'die Tiere \u2192 dative Tieren (+n) (this chapter).', ex: 'mit ihren Tieren', exEn: 'with her animals' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'nie', role: 'r-negation', en: 'never', hi: 'कभी नहीं', pron: 'nee', type: 'Negation' },
      { w: 'langweilig', role: 'r-adjective', en: 'boring', hi: 'उबाऊ', pron: 'LANG-vy-likh', type: 'Adjective', why: 'langweilig (recycled \u2014 Adjektive).', ex: 'nie langweilig', exEn: 'never boring' },
      { w: '!', plain: true }
    ],
    translation: 'I live with my family on the edge of town. Next to our house lives a tenant. She is very fashionable and has a pet. Whenever I come, her dog barks loudly. The noise from her dog is great, but I gladly help the tenant. I give her dog a toy sometimes. On the floor of her flat there\u2019s often a wet cushion. My guess: life with her animals is never boring! \u2014 Watch the dative possessives: mit meiner Familie, neben unserem Haus, von ihrem Hund, von ihrer Wohnung, mit ihren Tieren \u2014 -em, -er, -en every time.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_007_L001', speaker: 'Silke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nils, wie geht es deiner Katze?', en: 'Nils, how is your cat doing?' },
      { id: 'A2_007_L002', speaker: 'Nils', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ihr geht es gut, aber sie versteckt sich vor unseren Gästen.', en: 'She\'s doing well, but she hides from our guests.' },
      { id: 'A2_007_L003', speaker: 'Silke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Meine Katze spielt gern mit ihrem Ball.', en: 'My cat likes to play with her ball.' },
      { id: 'A2_007_L004', speaker: 'Nils', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Süß! Schläft sie bei deinen Eltern, wenn du reist?', en: 'Cute! Does she sleep at your parents\' when you travel?' },
      { id: 'A2_007_L005', speaker: 'Silke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, sie bleibt immer bei meiner Mutter.', en: 'Yes, she always stays with my mother.' }
    ],
    transcript: 'Nils, wie geht es deiner Katze? Ihr geht es gut, aber sie versteckt sich vor unseren Gästen. Meine Katze spielt gern mit ihrem Ball. Süß! Schläft sie bei deinen Eltern, wenn du reist? Ja, sie bleibt immer bei meiner Mutter.',
    translation: 'Nils, how is your cat doing? She\'s doing well, but she hides from our guests. My cat likes to play with her ball. Cute! Does she sleep at your parents\' when you travel? Yes, she always stays with my mother.',
    tokens: [
      { w: 'Nils' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'geht' },
      { w: 'es' },
      { w: 'deiner' },
      { w: 'Katze' },
      { w: '?', plain: true },
      { w: 'Ihr' },
      { w: 'geht' },
      { w: 'es' },
      { w: 'gut' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'sie' },
      { w: 'versteckt' },
      { w: 'sich' },
      { w: 'vor' },
      { w: 'unseren' },
      { w: 'Gästen' },
      { w: '.', plain: true },
      { w: 'Meine' },
      { w: 'Katze' },
      { w: 'spielt' },
      { w: 'gern' },
      { w: 'mit' },
      { w: 'ihrem' },
      { w: 'Ball' },
      { w: '.', plain: true },
      { w: 'Süß' },
      { w: '!', plain: true },
      { w: 'Schläft' },
      { w: 'sie' },
      { w: 'bei' },
      { w: 'deinen' },
      { w: 'Eltern' },
      { w: ',', plain: true },
      { w: 'wenn' },
      { w: 'du' },
      { w: 'reist' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'sie' },
      { w: 'bleibt' },
      { w: 'immer' },
      { w: 'bei' },
      { w: 'meiner' },
      { w: 'Mutter' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was macht Nils\' Katze, wenn Gäste da sind?', qEn: 'What does Nils\' cat do around guests?', options: ['Sie spielt mit ihnen.', 'Sie versteckt sich.', 'Sie schläft viel.', 'Sie miaut laut.'], optionsEn: ['She plays with them.', 'She hides.', 'She sleeps a lot.', 'She miaows loudly.'], answer: 1,
        explain: '"Sie versteckt sich vor unseren Gästen."' },
      { q: 'Wo bleibt Silkes Katze, wenn sie verreist?', qEn: 'Where does Silke\'s cat stay when she travels?', options: ['bei Nils', 'bei ihrer Mutter', 'allein zu Hause', 'im Tierheim'], optionsEn: ['at Nils\'s', 'at her mother\'s', 'alone at home', 'at the animal shelter'], answer: 1,
        explain: '"Sie bleibt immer bei meiner Mutter."' }
    ]
  },

  speaking: [
    { task: "Deine Nachbarin fragt: Wem gehört das Haustier?", taskEn: "Your neighbour asks: whose pet is that?", de: "Der Hase gehört meiner Schwester.", en: "The rabbit belongs to my sister." },
    { task: "Dein Freund fragt: Wem hast du das Spielzeug gegeben?", taskEn: "Your friend asks: who did you give the toy to?", de: "Ich habe es meinem Bruder gegeben.", en: "I gave it to my brother." },
    { task: "Auf dem Kursfest fragt jemand nach deinem Tier. Erzähl kurz.", taskEn: "At the class party somebody asks about your pet. Talk briefly.", de: "Mit meinem Hund gehe ich jeden Morgen raus. Er bellt viel.", en: "I take my dog out every morning. He barks a lot." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short dialogue or description (six sentences) about your family, a friend and their pets, using possessives in the dative. Use at least one masc./neut. (-em), one feminine (-er) and one plural (-en), and one dative verb (helfen, geh\u00f6ren, danken). Try this chapter\u2019s words: das Haustier, der Besitzer, das Kissen, das Spielzeug, der L\u00e4rm.',
    starters: ['Ich wohne mit meiner \u2026', 'Ich helfe meinem \u2026', 'Das Spielzeug geh\u00f6rt \u2026', 'Bei meinen \u2026'],
    placeholder: 'Ich wohne mit meiner Familie am Stadtrand. Ich helfe meinem Bruder mit seinem Haustier \u2026',
    minWords: 30
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct form: "Ich helfe ___ Bruder." (my, masculine dative)',
      options: ['mein', 'meinen', 'meinem', 'meiner'],
      answer: 2,
      explain: 'helfen + dative; masculine \u2192 -em: meinem Bruder.'
    },
    gap: {
      // feminine dative then plural dative
      sentence: ['Sie spricht mit ', ' Mutter und wohnt bei ', ' Eltern.'],
      gaps: [ { answer: 'ihrer', accepts: ['ihrer'] }, { answer: 'ihren', accepts: ['ihren'] } ],
      explain: 'mit + fem. \u2192 ihrer Mutter; bei + plural \u2192 ihren Eltern.'
    },
    match: {
      q: 'Match each possessive to its correct dative form.',
      pairs: [
        { noun: 'mein (+ Bruder, m)', art: 'meinem' },
        { noun: 'dein (+ Mutter, f)', art: 'deiner' },
        { noun: 'sein (+ Eltern, pl)', art: 'seinen' },
        { noun: 'unser (+ Auto, n)', art: 'unserem' },
        { noun: 'euer (+ Schwester, f)', art: 'eurer' }
      ]
    },
    builder: {
      target: 'Build: "I play with my rabbit."',
      bank: ['Ich', 'spiele', 'mit', 'meinem', 'Hasen'],
      answer: ['Ich', 'spiele', 'mit', 'meinem', 'Hasen'],
      roles: { 'Ich': 'r-subject', 'spiele': 'r-verb', 'mit': 'r-preposition', 'meinem': 'r-dativ', 'Hasen': 'r-dativ' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the dative of "mein" before a feminine noun?', options: ['mein', 'meinem', 'meiner', 'meine'], answer: 2,
      explain: 'Feminine dative \u2192 -er: meiner (bei meiner Mutter).' },
    { q: 'Complete: "Wir fahren mit ___ Auto." (our, neuter)', options: ['unsere', 'unserem', 'unseren', 'unser'], answer: 1,
      explain: 'Auto is neuter; dative \u2192 -em: unserem Auto.' },
    { q: 'Which triggers the dative here? "Ich helfe ___ Freund."', options: ['nothing \u2014 it\u2019s nominative', 'helfen (a dative verb)', 'Freund is plural', 'it\u2019s accusative'], answer: 1,
      explain: 'helfen takes the dative \u2192 meinem Freund.' },
    { q: 'Complete: "Sie wohnt bei ___ Eltern." (her, plural)', options: ['ihre', 'ihrer', 'ihren', 'ihrem'], answer: 2,
      explain: 'Plural dative \u2192 -en: ihren Eltern.' },
    { q: 'Which is the correct dative of "euer" (masc.)?', options: ['euerem', 'eurem', 'euren', 'euer'], answer: 1,
      explain: 'euer drops the middle -e-: eurem (never "euerem").' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-dativ', html: 'Three dative endings, every possessive: masc./neut. <span class="de r-dativ">-em</span>, fem. <span class="de r-dativ">-er</span>, plural <span class="de r-dativ">-en</span> \u2014 <span class="de">mit meinem Hund, bei meiner Mutter, bei meinen Eltern</span>.' },
    { c: 'r-dativ', html: 'The dative is triggered by <span class="de">mit, bei, von, zu, nach, aus</span> and by dative verbs <span class="de">helfen, geh\u00f6ren, danken</span>.' },
    { c: 'r-dativ', html: '<span class="de">euer</span> drops its middle -e-: <span class="de">eurem, eurer, euren</span>. And <span class="de">meinen</span> is both masc. accusative and dative plural \u2014 the trigger tells you which.' }
  ],
  revisionTips: [
    'Chant the endings: -em (m/n), -er (f), -en (plural) \u2014 same as dem/der/den.',
    'Spot the trigger first (mit/bei/von \u2026 or helfen/geh\u00f6ren) \u2014 then bend the possessive.',
    'euer \u2192 eurem/eurer/euren; never write "euerem".'
  ]
};

window.CHAPTER = CHAPTER;
