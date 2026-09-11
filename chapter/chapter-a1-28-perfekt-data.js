/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 3 · Chapter 28
   "Perfekt Einführung"  (Intro to the perfect tense)
   Vocabulary source: uploaded chapter-28 word list (4 words).
   Theme = what I did yesterday. Recycles Ch1–27.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-28-perfekt',
  phase: 'A1 · Phase 3',
  number: 28,
  title: 'Perfekt Einführung',
  titleEn: 'The Perfect Tense',
  description: 'The way Germans actually talk about the past. The Perfekt uses two pieces — a helper verb (haben or sein) in position 2, and a past participle (the Partizip II) parked at the very end: Ich habe Deutsch gelernt.',
  xp: 160,
  time: 35,
  difficulty: 'Beginner',
  nextChapter: { number: 29, title: 'Perfekt mit haben', titleEn: 'Perfect with haben' , href: 'chapter-a1-29-perfekt-haben.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Tuesday. Jens asks Vera the most natural question in the world — what did you do yesterday? He travelled and visited his brother; she worked and had only coffee. Every answer arrives in the Perfekt: a helper verb up front, a participle at the end.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the haben/sein + participle frame in real speech'
    ],
    scene: 'Im Kurs \u2014 "Was hast du gemacht?", Berlin',
    femaleSpeakers: ['Vera'],
    dialogue: [
      { speaker: 'Jens', tokens: [
        { w: 'Hallo', role: 'r-subject', en: 'hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting' },
        { w: 'Vera', role: 'r-name', en: 'Vera', hi: 'वेरा', pron: 'VAY-ra', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'किया', pron: 'hast', type: 'Verb · haben (helper)', why: 'Perfekt frame: haben in position 2, participle at the end (this chapter).', ex: 'Was hast du gemacht?', exEn: 'What did you do?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'gestern', role: 'r-time', en: 'yesterday', hi: 'कल', pron: 'GES-tern', type: 'Adverb · time' },
        { w: 'gemacht', role: 'r-verb', en: 'done', hi: 'किया', pron: 'ge-MAKHT', type: 'Partizip II · Satzende', why: 'machen → gemacht: ge- + stem + -t (this chapter).', ex: 'Ich habe das gemacht.', exEn: 'I did that.' },
        { w: '?', plain: true }
      ], en: 'Hello Vera! What did you do yesterday?', hi: 'Namaste Vera! Kal tumne kya kiya?' },
      { speaker: 'Vera', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'lange', role: 'r-time', en: 'for a long time', hi: 'देर तक', pron: 'LANG-uh', type: 'Adverb · time' },
        { w: 'gearbeitet', role: 'r-verb', en: 'worked', hi: 'काम किया', pron: 'ge-AR-by-tet', type: 'Partizip II · Satzende', why: 'arbeiten → gearbeitet (stem ends in -t, so -et).', ex: 'Ich habe gearbeitet.', exEn: 'I worked.' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'I worked for a long time. And you?', hi: 'Main der tak kaam kiya. Aur tum?' },
      { speaker: 'Jens', tokens: [
        { w: 'Oh', role: 'r-subject', en: 'oh', hi: 'ओह', pron: 'oh', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'गया', pron: 'bin', type: 'Verb · sein (helper)', why: 'Movement verbs take sein: ich bin … gefahren (this chapter).', ex: 'Ich bin gefahren.', exEn: 'I drove.' },
        { w: 'nach', role: 'r-preposition', en: 'to', hi: 'को', pron: 'nahkh', type: 'Preposition' },
        { w: 'Hamburg', role: 'r-place', en: 'Hamburg', hi: 'हैम्बर्ग', pron: 'HAM-burk', type: 'Noun · city' },
        { w: 'gefahren', role: 'r-verb', en: 'travelled', hi: 'गया', pron: 'ge-FAH-ren', type: 'Partizip II · Satzende', why: 'fahren → gefahren; movement, so sein (this chapter).', ex: 'Ich bin nach Hamburg gefahren.', exEn: 'I travelled to Hamburg.' },
        { w: '.', plain: true }
      ], en: 'Oh! I travelled to Hamburg.', hi: 'Oh! Main Hamburg gaya.' },
      { speaker: 'Vera', side: 'right', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'किया', pron: 'hast', type: 'Verb · haben (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
        { w: 'gemacht', role: 'r-verb', en: 'done', hi: 'किया', pron: 'ge-MAKHT', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'Really? What did you do there?', hi: 'Sach mein? Tumne wahaan kya kiya?' },
      { speaker: 'Jens', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'meinen', role: 'r-akkusativ', en: 'my (masc. acc.)', hi: 'मेरे', pron: 'MY-nen', type: 'Possessive · acc.' },
        { w: 'Bruder', role: 'r-akkusativ', en: 'brother', hi: 'भाई', pron: 'BROO-der', type: 'Noun · masc.' },
        { w: 'besucht', role: 'r-verb', en: 'visited', hi: 'मिला', pron: 'be-ZOOKHT', type: 'Partizip II · Satzende', why: 'besuchen → besucht: verbs with be- take no ge- (this chapter).', ex: 'Ich habe ihn besucht.', exEn: 'I visited him.' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'खेला', pron: 'HAH-ben', type: 'Verb · haben (helper)' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: 'gespielt', role: 'r-verb', en: 'played', hi: 'खेला', pron: 'ge-SHPEELT', type: 'Partizip II · Satzende', why: 'spielen → gespielt (this chapter).', ex: 'Wir haben gespielt.', exEn: 'We played.' },
        { w: '.', plain: true }
      ], en: 'I visited my brother. We played together.', hi: 'Main apne bhai se mila. Hum saath khele.' },
      { speaker: 'Vera', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klingt', type: 'Verb · klingen' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'था', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'Kaffee', role: 'r-akkusativ', en: 'coffee', hi: 'कॉफ़ी', pron: 'KA-fay', type: 'Noun · masc.' },
        { w: 'getrunken', role: 'r-verb', en: 'drunk', hi: 'पिया', pron: 'ge-TRUN-ken', type: 'Partizip II · Satzende', why: 'trinken → getrunken: irregular, ends in -en (this chapter).', ex: 'Ich habe Kaffee getrunken.', exEn: 'I drank coffee.' },
        { w: '.', plain: true }
      ], en: 'That sounds good! I only drank coffee.', hi: 'Yeh achha lagta hai! Main sirf coffee pi.' },
      { speaker: 'Jens', tokens: [
        { w: 'Hast', role: 'r-verb', en: 'have', hi: 'किया', pron: 'hast', type: 'Verb · haben (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'am', role: 'r-preposition', en: 'in the', hi: 'को', pron: 'am', type: 'Preposition + time' },
        { w: 'Abend', role: 'r-time', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun · time' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'gearbeitet', role: 'r-verb', en: 'worked', hi: 'काम किया', pron: 'ge-AR-by-tet', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'Did you work in the evening too?', hi: 'Kya tumne shaam ko bhi kaam kiya?' },
      { speaker: 'Vera', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'am', role: 'r-preposition', en: 'in the', hi: 'को', pron: 'am', type: 'Preposition + time' },
        { w: 'Abend', role: 'r-time', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun · time' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'सोई', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'geschlafen', role: 'r-verb', en: 'slept', hi: 'सोई', pron: 'ge-SHLAH-fen', type: 'Partizip II · Satzende', why: 'schlafen → geschlafen: irregular, ends in -en (this chapter).', ex: 'Ich habe geschlafen.', exEn: 'I slept.' },
        { w: '.', plain: true }
      ], en: 'No, in the evening I only slept.', hi: 'Nahi, shaam ko main sirf soi.' },
      { speaker: 'Jens', tokens: [
        { w: 'Ach', role: 'r-subject', en: 'ah', hi: 'अच्छा', pron: 'akh', type: 'Reaction' },
        { w: 'so', role: 'r-adverb', en: 'I see', hi: 'समझा', pron: 'zo', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'किया', pron: 'hast', type: 'Verb · haben (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'sicher', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'ZI-kher', type: 'Adverb' },
        { w: 'mehr', role: 'r-akkusativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Adverb · quantity' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Ah, I see! Then you surely have more time today.', hi: 'Achha samjha! Toh aaj tumhaare paas zaroor zyada time hai.' },
      { speaker: 'Vera', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'trinken', role: 'r-verb', en: 'let us drink', hi: 'पीते हैं', pron: 'TRIN-ken', type: 'Verb · trinken (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: 'Kaffee', role: 'r-akkusativ', en: 'coffee', hi: 'कॉफ़ी', pron: 'KA-fay', type: 'Noun · masc.' },
        { w: '!', plain: true }
      ], en: 'Yes! Today let us drink coffee together!', hi: 'Haan! Aaj hum saath coffee peete hain!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'The <strong>Perfekt</strong> is how Germans normally talk about the past in conversation. It has two parts: a helper verb \u2014 <span class="de r-verb">haben</span> or <span class="de r-verb">sein</span> \u2014 in position 2, and a <strong>past participle</strong> (the Partizip II) parked at the very end. <span class="de">Ich <u>habe</u> Deutsch <u>gelernt</u>.</span> Most verbs take <span class="de">haben</span>; verbs of movement (gehen, fahren, kommen) take <span class="de">sein</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is an INTRODUCTION TO THE PERFEKT (perfect tense): haben/sein + Partizip II, used to talk about past actions (yesterday, the weekend). ' +
    'The learner wrote sentences about the past below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Perfekt = helper verb (haben OR sein, conjugated, position 2) + Partizip II (at the very END): "Ich habe Deutsch gelernt." / "Ich bin nach Hause gegangen."\n' +
    '- Most verbs use haben. Verbs of MOVEMENT or change of state use sein: gehen→ist gegangen, fahren→ist gefahren, kommen→ist gekommen, bleiben→ist geblieben, sein→ist gewesen.\n' +
    '- Regular participle = ge + stem + t: machen→gemacht, lernen→gelernt, arbeiten→gearbeitet (gearbeitet keeps the -e-), hören→gehört, kaufen→gekauft.\n' +
    '- Common irregular participles (ge…en, often vowel change): essen→gegessen, trinken→getrunken, gehen→gegangen, fahren→gefahren, sehen→gesehen, schlafen→geschlafen, schreiben→geschrieben, lesen→gelesen.\n' +
    '- Verbs ending in -ieren and inseparable-prefix verbs take NO ge-: studieren→studiert, passieren→passiert, besuchen→besucht, bekommen→bekommen.\n' +
    '- Separable verbs put ge in the middle: einkaufen→eingekauft, aufstehen→aufgestanden, ankommen→angekommen.\n' +
    '- The helper is conjugated for the subject (ich habe/bin, du hast/bist, er hat/ist, wir/sie haben/sind, ihr habt/seid); the participle never changes.\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Perfekt check:</b> one sentence on whether the helper (haben/sein) and the participle-at-the-end were correct.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — helper in position 2, participle at the end. On to <span class="de">Perfekt mit haben</span>.',
    mid: 'Good. Re-read the "haben vs sein" card and the participle card once, then continue.',
    low: 'Worth another pass — focus on the Perfekt frame in the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'habe', role: 'r-verb' },
    { w: 'Deutsch', role: 'r-object' }, { w: 'gelernt', role: 'r-verb' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the two-part Perfekt frame before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: '"What did you do yesterday?" — hear the whole class answer in the Perfekt.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the building blocks: das Perfekt, das Partizip, passieren, haben as a helper.' },
    { id: 'grammar',    label: 'The Perfekt', tag: 'core',
      objective: 'Master haben/sein + Partizip II, the participle at the end, and when to use sein.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a "what I did yesterday" text in the Perfekt and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch what people did and which helper they used, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say what you did yesterday using the Perfekt.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five Perfekt sentences and a short paragraph about a past day.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill haben vs sein, participles, and word order with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The Perfekt building blocks and common participles with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'haben/sein selection, participle drills, gap-fill, error correction, and a "yesterday" writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The Perfekt frame, haben vs sein, regular & irregular participles, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich habe … gemacht.', text: 'Talk about the past with haben' },
    { de: 'Ich bin … gegangen.', text: 'Use sein for movement' },
    { de: 'Partizip II', text: 'Park the participle at the end' },
    { de: 'gelernt, gegessen', text: 'Form regular & irregular participles' },
    { de: 'Was hast du gemacht?', text: 'Ask what someone did' }
  ],

  // ---------- Vocabulary (4 words) ----------
  vocab: [
    { de: 'haben (Perfekt)', pos: 'verb', en: 'to have (helper verb)', hi: 'सहायक क्रिया', ex: 'Ich habe Deutsch gelernt.', exEn: 'I have studied German.', conj: { praesens: 'hat', praeteritum: 'hatte', perfekt: 'hat gehabt' } },
    { de: 'passieren', pos: 'verb', en: 'to happen', hi: 'होना, घटित होना', ex: 'Was ist passiert?', exEn: 'What happened?', conj: { praesens: 'passiert', praeteritum: 'passierte', perfekt: 'ist passiert' } },
    { de: 'Partizip', art: 'das', gender: 'n', plural: 'Partizipien', pos: 'noun', en: 'participle', hi: 'कृदंत', ex: 'Das Partizip steht am Ende.', exEn: 'The participle stands at the end.' },
    { de: 'Perfekt', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'perfect tense', hi: 'पूर्ण भूतकाल', ex: 'Das Perfekt ist die Sprechsprache der Vergangenheit.', exEn: 'The Perfekt is the spoken past tense.' }
  ],

  // ---------- The Perfekt (rule cards → accordion) ----------
  grammar: [
    {
      title: 'The Perfekt frame: helper + participle',
      goldenRule: 'Two parts, always: <b>helper</b> in slot 2 (it changes) + <b>Partizip II</b> at the end (it never changes).',
      formula: [
        'Ich <b>habe</b> Deutsch <b>gelernt</b>.',
        'Ich <b>bin</b> nach Hause <b>gegangen</b>.',
        '     ↑ slot 2              ↑ end'
      ],
      memoryTrick: 'Wahi bracket jo modal ke saath tha: ek hissa <b>slot 2</b> par, aur doosra sentence ke <b>end</b> mein. Structure naya nahi hai — bas content naya hai.',
      body: [
        'The Perfekt always has two parts. A helper verb (<span class="de r-verb">haben</span> or <span class="de r-verb">sein</span>) sits in position 2 and is conjugated; the <strong>Partizip II</strong> goes to the very end and never changes.'
      ],
      table: {
        head: ['Subject', 'Helper (pos. 2)', 'middle', 'Partizip II (end)'],
        rows: [
          ['<span class="de">Ich</span>', '<span class="de r-verb">habe</span>', '<span class="de">Deutsch</span>', '<span class="de r-verb">gelernt.</span>'],
          ['<span class="de">Wir</span>', '<span class="de r-verb">haben</span>', '<span class="de">Pizza</span>', '<span class="de r-verb">gegessen.</span>'],
          ['<span class="de">Ich</span>', '<span class="de r-verb">bin</span>', '<span class="de">nach Hause</span>', '<span class="de r-verb">gegangen.</span>'],
          ['<span class="de">Anna</span>', '<span class="de r-verb">ist</span>', '<span class="de">nach Berlin</span>', '<span class="de r-verb">gefahren.</span>']
        ]
      },
      note: 'Two pieces, always: <b>helper</b> (conjugated, position 2) + <b>Partizip II</b> (unchanging, at the end). Just like a modal sentence, the second verb-part waits at the very end.',
      hinglish: 'Perfekt ke do hisse hote hain. Pehla hissa helper hai (<b>haben</b> ya <b>sein</b>), jo conjugate hota hai aur position 2 par baithta hai. Doosra hissa <b>Partizip II</b> hai, jo badalta nahi aur sentence ke end mein rukta hai: <b>Ich habe Deutsch gelernt</b>. Yeh bilkul modal sentence jaisa structure hai.'
    },
    {
      title: 'haben or sein?',
      goldenRule: 'Default is <b>haben</b>. Switch to <b>sein</b> only for movement A→B, a change of state, and the two odd ones: <b>sein</b> and <b>bleiben</b>.',
      memoryTrick: 'Poochho: <b>jagah badli</b> ya <b>haalat badli</b>? Haan → sein. Warna → haben. Aur do yaad: gewesen, geblieben.',
      recap: [
        'Most verbs: <b>haben</b>.',
        'Movement or change of state: <b>sein</b>.',
        'Plus <b>sein</b> (gewesen) and <b>bleiben</b> (geblieben).'
      ],
      body: [
        'Most verbs build the Perfekt with <span class="de r-verb">haben</span>. A small but important group \u2014 verbs of <strong>movement</strong> or change of state \u2014 use <span class="de r-verb">sein</span>.'
      ],
      table: {
        head: ['Helper', 'Used for', 'Example'],
        rows: [
          ['<span class="de r-verb">haben</span>', 'most verbs', '<span class="de">Ich habe gegessen / gelernt / gekauft.</span>'],
          ['<span class="de r-verb">sein</span>', 'movement', '<span class="de">Ich bin gegangen / gefahren / gekommen.</span>'],
          ['<span class="de r-verb">sein</span>', 'change of state', '<span class="de">Ich bin aufgestanden.</span>'],
          ['<span class="de r-verb">sein</span>', 'sein & bleiben', '<span class="de">Ich bin gewesen / geblieben.</span>']
        ]
      },
      note: 'Default to <b>haben</b>. Use <b>sein</b> for going/coming/travelling (gehen, fahren, kommen, fliegen) and for <b>sein</b> (gewesen) and <b>bleiben</b> (geblieben).',
      hinglish: 'Default <b>haben</b>. <b>sein</b> sirf movement (gehen, fahren, kommen, fliegen) aur change-of-state ke liye, plus <b>sein</b> (gewesen) aur <b>bleiben</b> (geblieben). "Ich <b>bin</b> gegangen" par "Ich <b>habe</b> gegessen".'
    },
    {
      title: 'Building the Partizip II',
      goldenRule: 'Regular: <b>ge- + stem + -t</b>. Irregular: <b>ge- + stem + -en</b>, usually with a new vowel.',
      formula: [
        'machen    →  <b>ge</b>mach<b>t</b>      (regular)',
        'trinken   →  <b>ge</b>tr<b>u</b>nk<b>en</b>   (irregular, new vowel)',
        'studieren →  studiert         (no ge-)',
        'einkaufen →  ein<b>ge</b>kauft     (ge in the middle)'
      ],
      memoryTrick: 'Teen jagah <b>ge</b> ja sakta hai: aage (gemacht), beech mein (eingekauft), ya kahin nahi (studiert, besucht). Verb dekh kar tay hota hai — guess nahi.',
      body: [
        'Two main patterns. Regular verbs: <strong>ge + stem + t</strong>. Irregular verbs: often <strong>ge + stem + en</strong> with a vowel change \u2014 these you simply learn.'
      ],
      table: {
        head: ['Type', 'Verb', 'Partizip II'],
        rows: [
          ['regular', '<span class="de">machen / lernen</span>', '<span class="de r-verb">gemacht / gelernt</span>'],
          ['regular (+e)', '<span class="de">arbeiten</span>', '<span class="de r-verb">gearbeitet</span>'],
          ['irregular', '<span class="de">essen / trinken</span>', '<span class="de r-verb">gegessen / getrunken</span>'],
          ['no ge- (-ieren)', '<span class="de">studieren / passieren</span>', '<span class="de r-verb">studiert / passiert</span>']
        ]
      },
      note: 'Regular: <b>ge…t</b> (gemacht). Irregular: <b>ge…en</b>, often a new vowel (getrunken). Verbs in <b>-ieren</b> and inseparable-prefix verbs take <b>no ge-</b> (studiert, besucht). Separable verbs put ge in the middle: eingekauft.',
      hinglish: 'Do pattern: regular <b>ge…t</b> (gemacht, gelernt); irregular <b>ge…en</b> + naya vowel (getrunken, gegessen) — ye yaad karne padte hain. <b>-ieren</b> aur inseparable-prefix verbs mein <b>ge-</b> nahi (studiert, besucht). Separable: ge beech mein (eingekauft).'
    },
    {
      title: 'Perfekt vs Präteritum',
      goldenRule: 'Speak the past in the <b>Perfekt</b>. Use the <b>Präteritum</b> only for <b>war</b> and <b>hatte</b>.',
      memoryTrick: 'Bolchal ki German mein past ke liye Perfekt use hota hai. Sirf "tha" ke liye <b>war</b> aur "paas tha" ke liye <b>hatte</b> short-cut chalte hain.',
      body: [
        'You now know two pasts. For A1 the rule of thumb is simple.'
      ],
      table: {
        head: ['Tense', 'Use it for', 'Example'],
        rows: [
          ['Perfekt', 'spoken past, most verbs', '<span class="de">Ich habe gegessen.</span>'],
          ['Präteritum', 'haben & sein (Ch27)', '<span class="de">Ich war müde. Ich hatte Zeit.</span>'],
          ['both ok', 'everyday speech', '<span class="de">Ich bin gegangen.</span>'],
          ['avoid (A1)', 'Präteritum of other verbs', '<span class="de">(not: ich ging)</span>']
        ]
      },
      note: 'Speak the past in the <b>Perfekt</b> for normal verbs (habe gemacht). Use the <b>Präteritum</b> mainly for <b>war</b> and <b>hatte</b> (Chapter 27). That combination covers almost all A1 conversation.',
      hinglish: 'Normal verbs ke liye bolne mein <b>Perfekt</b> (habe gemacht). <b>war</b> aur <b>hatte</b> (Chapter 27) ke liye <b>Präteritum</b>. Yeh combo A1 ki lagbhag saari baatcheet cover kar leta hai.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four Perfekt traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich habe gegangen.', right: 'Ich bin gegangen.', why: 'gehen is movement → it takes sein, not haben.' },
        { wrong: 'Ich habe gelernt Deutsch.', right: 'Ich habe Deutsch gelernt.', why: 'The participle goes to the very end, after the object.' },
        { wrong: 'Ich habe gestudiert.', right: 'Ich habe studiert.', why: 'Verbs ending in -ieren take no ge- at all: studiert, telefoniert, passiert.' },
        { wrong: 'Ich bin Pizza gegessen.', right: 'Ich habe Pizza gegessen.', why: 'essen is not movement → use haben.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>gehen</b> movement hai, isliye <b>bin gegangen</b> sahi hai, <b>habe</b> nahi. Partizip ko sentence ke end mein rakhna hai: <b>Ich habe Deutsch gelernt</b>. <b>-ieren</b> wale verbs mein <b>ge-</b> nahi lagta, jaise <b>studiert</b>. Aur <b>essen</b> mein koi movement nahi hai, isliye <b>habe gegessen</b> sahi hai.'
    }
  ],

  // ---------- Reading passage (yesterday in Perfekt, clickable) ----------
  reading: {
    title: 'Mein Tag gestern',
    titleEn: 'My day yesterday',
    tokens: [
      { w: 'Gestern', role: 'r-time', en: 'yesterday', hi: 'कल', pron: 'GES-tern', type: 'Adverb · time', why: 'gestern (recycled — Präteritum).', ex: 'Gestern habe ich gelernt.', exEn: 'Yesterday I studied.' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Aux · haben (ich)', why: 'haben helper; verb position 2 (this chapter).', ex: 'Gestern habe ich …', exEn: 'Yesterday I …' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'viel', role: 'r-object', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
      { w: 'gemacht', role: 'r-verb', en: 'done', hi: 'किया', pron: 'guh-MAKHT', type: 'Partizip II · machen', why: 'Partizip II at the end (this chapter).', ex: 'Ich habe viel gemacht.', exEn: 'I did a lot.' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'in the', hi: 'को', pron: 'am', type: 'Preposition · time', why: 'am (recycled — Uhrzeit).', ex: 'am Morgen', exEn: 'in the morning' },
      { w: 'Morgen', role: 'r-time', en: 'morning', hi: 'सुबह', pron: 'MOR-gen', type: 'Noun · time', why: 'der Morgen (recycled — Uhrzeit).', ex: 'am Morgen', exEn: 'in the morning' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Aux · haben (ich)' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'Deutsch', role: 'r-object', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun · neut.', why: 'Deutsch (recycled — Hallo!).', ex: 'Deutsch gelernt', exEn: 'studied German' },
      { w: 'gelernt', role: 'r-verb', en: 'studied', hi: 'सीखा', pron: 'guh-LAIRNT', type: 'Partizip II · lernen', why: 'regular ge…t (this chapter).', ex: 'Ich habe Deutsch gelernt.', exEn: 'I studied German.' },
      { w: '.', plain: true },
      { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb', why: 'dann (recycled — Modalverben 1).', ex: 'Dann bin ich …', exEn: 'Then I …' },
      { w: 'bin', role: 'r-verb', en: 'am', hi: 'गया', pron: 'bin', type: 'Aux · sein (ich)', why: 'Movement → sein (this chapter).', ex: 'Ich bin gegangen.', exEn: 'I went.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'in', role: 'r-preposition', en: 'to', hi: 'में', pron: 'in', type: 'Preposition' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · acc.' },
      { w: 'Stadt', role: 'r-place', en: 'town', hi: 'शहर', pron: 'shtat', type: 'Noun · place', why: 'die Stadt (recycled).', ex: 'in die Stadt', exEn: 'into town' },
      { w: 'gefahren', role: 'r-verb', en: 'travelled', hi: 'गया', pron: 'guh-FAH-ren', type: 'Partizip II · fahren', why: 'fahren → sein (this chapter).', ex: 'Ich bin gefahren.', exEn: 'I travelled.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Aux · haben (ich)' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · acc.', why: 'masc. acc. ein → einen (recycled — Akkusativ).', ex: 'einen Kaffee', exEn: 'a coffee' },
      { w: 'Kaffee', role: 'r-object', en: 'coffee', hi: 'कॉफ़ी', pron: 'KA-fay', type: 'Noun · masc.', why: 'der Kaffee (recycled — Im Café).', ex: 'einen Kaffee getrunken', exEn: 'drank a coffee' },
      { w: 'getrunken', role: 'r-verb', en: 'drunk', hi: 'पिया', pron: 'guh-TRUNK-en', type: 'Partizip II · trinken', why: 'irregular ge…en (this chapter).', ex: 'Ich habe Kaffee getrunken.', exEn: 'I drank coffee.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'Freunde', role: 'r-object', en: 'friends', hi: 'दोस्त', pron: 'FROYN-duh', type: 'Noun · plural', why: 'der Freund → die Freunde (recycled — Hobbies).', ex: 'Freunde getroffen', exEn: 'met friends' },
      { w: 'getroffen', role: 'r-verb', en: 'met', hi: 'मिला', pron: 'guh-TRO-fen', type: 'Partizip II · treffen', why: 'irregular ge…en (this chapter).', ex: 'Ich habe Freunde getroffen.', exEn: 'I met friends.' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'in the', hi: 'को', pron: 'am', type: 'Preposition · time' },
      { w: 'Abend', role: 'r-time', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun · time', why: 'der Abend (recycled — Uhrzeit).', ex: 'am Abend', exEn: 'in the evening' },
      { w: 'bin', role: 'r-verb', en: 'am', hi: 'गया', pron: 'bin', type: 'Aux · sein (ich)', why: 'Movement → sein (this chapter).', ex: 'Ich bin nach Hause gegangen.', exEn: 'I went home.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'müde', role: 'r-adjective', en: 'tired', hi: 'थका हुआ', pron: 'MÜ-duh', type: 'Adjective', why: 'müde (recycled — Adjektive mit sein).', ex: 'müde nach Hause', exEn: 'tired, home' },
      { w: 'nach', role: 'r-preposition', en: 'to', hi: 'को', pron: 'nakh', type: 'Preposition', why: '"nach Hause" = home.', ex: 'nach Hause', exEn: 'home' },
      { w: 'Hause', role: 'r-place', en: 'home', hi: 'घर', pron: 'HOW-zuh', type: 'Noun · place', why: '"nach Hause" (recycled).', ex: 'nach Hause gegangen', exEn: 'went home' },
      { w: 'gegangen', role: 'r-verb', en: 'gone', hi: 'गया', pron: 'guh-GANG-en', type: 'Partizip II · gehen', why: 'gehen → sein (this chapter).', ex: 'Ich bin nach Hause gegangen.', exEn: 'I went home.' },
      { w: '.', plain: true }
    ],
    translation: 'Yesterday I did a lot. In the morning I studied German. Then I travelled into town. I drank a coffee and met friends. In the evening I went home tired.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_028_L001', speaker: 'Jens', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Vera, was hast du gestern gemacht?', en: 'Vera, what did you do yesterday?' },
      { id: 'A1_028_L002', speaker: 'Vera', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich habe eingekauft und meine Familie angerufen.', en: 'I went shopping and called my family.' },
      { id: 'A1_028_L003', speaker: 'Jens', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und Max?', en: 'And Max?' },
      { id: 'A1_028_L004', speaker: 'Vera', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Er hat die Wohnung geputzt und dann Fußball gesehen.', en: 'He cleaned the apartment and then watched football.' },
      { id: 'A1_028_L005', speaker: 'Jens', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und was habt ihr abends gemacht?', en: 'And what did you do in the evening?' },
      { id: 'A1_028_L006', speaker: 'Vera', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Wir haben zusammen gekocht und gegessen.', en: 'We cooked and ate together.' }
    ],
    transcript: 'Vera, was hast du gestern gemacht? Ich habe eingekauft und meine Familie angerufen. Und Max? Er hat die Wohnung geputzt und dann Fußball gesehen. Und was habt ihr abends gemacht? Wir haben zusammen gekocht und gegessen.',
    translation: 'Vera, what did you do yesterday? I went shopping and called my family. And Max? He cleaned the apartment and then watched football. And what did you do in the evening? We cooked and ate together.',
    tokens: [
      { w: 'Vera' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'hast' },
      { w: 'du' },
      { w: 'gestern' },
      { w: 'gemacht' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'eingekauft' },
      { w: 'und' },
      { w: 'meine' },
      { w: 'Familie' },
      { w: 'angerufen' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'Max' },
      { w: '?', plain: true },
      { w: 'Er' },
      { w: 'hat' },
      { w: 'die' },
      { w: 'Wohnung' },
      { w: 'geputzt' },
      { w: 'und' },
      { w: 'dann' },
      { w: 'Fußball' },
      { w: 'gesehen' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'was' },
      { w: 'habt' },
      { w: 'ihr' },
      { w: 'abends' },
      { w: 'gemacht' },
      { w: '?', plain: true },
      { w: 'Wir' },
      { w: 'haben' },
      { w: 'zusammen' },
      { w: 'gekocht' },
      { w: 'und' },
      { w: 'gegessen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hat Vera gestern gemacht?', qEn: 'What did Vera do yesterday?', options: ['gelernt und geschlafen', 'eingekauft und angerufen', 'gearbeitet', 'gereist'], optionsEn: ['studied and slept', 'did the shopping and made calls', 'worked', 'travelled'], answer: 1,
        explain: '"Ich habe eingekauft und meine Familie angerufen."' },
      { q: 'Was haben sie am Abend zusammen gemacht?', qEn: 'What did they do together in the evening?', options: ['Fußball gesehen', 'gekocht und gegessen', 'geputzt', 'eingekauft'], optionsEn: ['watched football', 'cooked and ate', 'cleaned', 'did the shopping'], answer: 1,
        explain: '"Wir haben zusammen gekocht und gegessen."' }
    ]
  },

  speaking: [
    { task: "Dein Partner fragt: Was hast du gestern gemacht?", taskEn: "Your partner asks: what did you do yesterday?", de: "Ich habe eingekauft und meine Familie angerufen.", en: "I did the shopping and called my family." },
    { task: "Deine Lehrerin fragt: Was hat Max gemacht?", taskEn: "Your teacher asks: what did Max do?", de: "Er hat die Wohnung geputzt und dann Fußball gesehen.", en: "He cleaned the flat and then watched football." },
    { task: "Dein Freund fragt: Was habt ihr abends gemacht?", taskEn: "Your friend asks: what did you do in the evening?", de: "Wir haben zusammen gekocht und Musik gehört.", en: "We cooked together and listened to music." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about what you did yesterday or last weekend, using the Perfekt. Use at least one sein verb (bin … gegangen/gefahren) and several haben verbs (habe … gemacht/gegessen/gelernt). Keep the participle at the end.',
    starters: ['Gestern habe ich …', 'Am Morgen bin ich …', 'Dann habe ich …', 'Am Abend bin ich …'],
    placeholder: 'Gestern habe ich Deutsch gelernt. Dann bin ich …',
    minWords: 20
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct?',
      options: ['Ich habe gegangen.', 'Ich bin gegangen.', 'Ich bin gegessen.', 'Ich gegangen bin.'],
      answer: 1,
      explain: 'gehen is movement → sein: "Ich bin gegangen."'
    },
    gap: {
      // haben vs sein auxiliary
      sentence: ['Ich ', ' Deutsch gelernt und dann ', ' ich ins Kino gegangen.'],
      gaps: [ { answer: 'habe', accepts: ['habe'] }, { answer: 'bin', accepts: ['bin'] } ],
      explain: 'lernen → haben; gehen (movement) → sein.'
    },
    match: {
      q: 'Match each verb to its Partizip II.',
      pairs: [
        { noun: 'machen', art: 'gemacht' },
        { noun: 'essen', art: 'gegessen' },
        { noun: 'gehen', art: 'gegangen' },
        { noun: 'trinken', art: 'getrunken' }
      ]
    },
    builder: {
      target: 'Build: "I studied German." (Perfekt)',
      bank: ['Ich', 'habe', 'Deutsch', 'gelernt'],
      answer: ['Ich', 'habe', 'Deutsch', 'gelernt'],
      roles: { 'Ich': 'r-subject', 'habe': 'r-verb', 'Deutsch': 'r-object', 'gelernt': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Where does the Partizip II go in a Perfekt sentence?', options: ['position 1', 'position 2', 'at the end', 'after the subject'], answer: 2,
      explain: 'Helper in position 2, participle at the very end.' },
    { q: 'Which helper does "gehen" use in the Perfekt?', options: ['haben', 'sein', 'werden', 'wollen'], answer: 1,
      explain: 'gehen is movement → sein: "ich bin gegangen".' },
    { q: 'What is the Partizip II of "essen"?', options: ['geesst', 'gegessen', 'geessen', 'gegest'], answer: 1,
      explain: 'essen → gegessen (irregular).' },
    { q: 'Which is correct?', options: ['Ich habe gestudiert.', 'Ich habe studiert.', 'Ich bin studiert.', 'Ich habe gestudieren.'], answer: 1,
      explain: '-ieren verbs take no ge-: studiert.' },
    { q: 'Complete: "Wir ___ Pizza gegessen."', options: ['sind', 'haben', 'bin', 'ist'], answer: 1,
      explain: 'essen → haben: "Wir haben Pizza gegessen."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'The frame: <span class="de">haben/sein</span> in position 2 + <strong>Partizip II</strong> at the end \u2014 <span class="de">Ich habe Deutsch gelernt.</span>' },
    { c: 'r-verb', html: 'Helper choice: most verbs → <span class="de">haben</span>; movement → <span class="de">sein</span> (<span class="de">ich bin gegangen</span>).' },
    { c: 'r-object', html: 'Participles: regular <span class="de">ge…t</span> (gemacht), irregular <span class="de">ge…en</span> (gegessen); <span class="de">-ieren</span> → no ge- (studiert).' }
  ],
  revisionTips: [
    'Say every past sentence as a sandwich: helper early, participle last.',
    'Default to haben; switch to sein only for movement (gehen, fahren, kommen) and sein/bleiben.',
    'Learn irregular participles in pairs: essen→gegessen, trinken→getrunken, gehen→gegangen.'
  ]
};

window.CHAPTER = CHAPTER;
