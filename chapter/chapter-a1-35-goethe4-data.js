/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 4 · Chapter 35
   "Goethe Mini 4"  (Integrated revision & checkpoint 4)
   Vocabulary source: uploaded chapter-35 word list (3 words).
   Theme = sharing a holiday report. AGGRESSIVELY recycles Ch1–34.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-35-goethe4',
  phase: 'A1 · Phase 4',
  number: 35,
  title: 'Goethe Mini 4',
  titleEn: 'Goethe Checkpoint 4',
  description: 'The big Phase-4 checkpoint. Anna shares a holiday report and the group pulls together everything from Chapters 1\u201334 \u2014 the past tense, pronouns, connectors, writing, time and dates \u2014 before a mixed Goethe-style mini-exam.',
  xp: 200,
  time: 40,
  difficulty: 'Checkpoint',
  nextChapter: { number: 36, title: 'Dativ Einführung', titleEn: 'The Dative Case' , href: 'chapter-a1-36-dativ.html' },

  prevChapter: { number: 34, title: 'Schreiben & Einladungen', titleEn: 'Writing & Invitations', href: 'chapter-a1-34-schreiben.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Runa is back from a trip and has written a little holiday report. As she reads it out and Nick reacts, almost every structure from Phase 4 surfaces \u2014 the Perfekt, war and hatte, pronouns, weil and deshalb \u2014 a perfect warm-up before the checkpoint.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Recycles the whole of A1 in one conversation'
    ],
    scene: 'Vor dem Checkpoint \u2014 Runas Reisebericht, Berlin',
    femaleSpeakers: ['Runa'],
    dialogue: [
      { speaker: 'Runa', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Reisebericht', role: 'r-akkusativ', en: 'travel report', hi: 'यात्रा रिपोर्ट', pron: 'RY-zuh-be-rikht', type: 'Noun · masc.', why: 'der Reisebericht (this chapter).', ex: 'Ich habe einen Reisebericht geschrieben.', exEn: 'I wrote a travel report.' },
        { w: 'geschrieben', role: 'r-verb', en: 'written', hi: 'लिखा', pron: 'ge-SHREE-ben', type: 'Partizip II · Satzende' },
        { w: '.', plain: true },
        { w: 'Willst', role: 'r-modalverb', en: 'do you want', hi: 'चाहते हो', pron: 'vilst', type: 'Modal · wollen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'ihn', role: 'r-akkusativ', en: 'it (masc.)', hi: 'उसे', pron: 'een', type: 'Pronoun · acc.' },
        { w: 'lesen', role: 'r-verb', en: 'read', hi: 'पढ़ना', pron: 'LAY-zen', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'I wrote a travel report. Do you want to read it?', hi: 'Maine ek travel report likhi hai. Kya tum use padhna chahte ho?' },
      { speaker: 'Nick', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'War', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb · sein (Präteritum)' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Reise', role: 'r-subject', en: 'trip', hi: 'यात्रा', pron: 'RY-zuh', type: 'Noun · fem.' },
        { w: 'wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Adverb' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतनी', pron: 'zo', type: 'Adverb' },
        { w: 'schön', role: 'r-adjective', en: 'nice', hi: 'अच्छी', pron: 'shern', type: 'Adjective' },
        { w: '?', plain: true }
      ], en: 'Yes, gladly! Was the trip really that nice?', hi: 'Haan, khushi se! Kya trip sach mein itni achhi thi?' },
      { speaker: 'Runa', tokens: [
        { w: 'Tatsächlich', role: 'r-adverb', en: 'actually', hi: 'दरअसल', pron: 'tat-SEKH-likh', type: 'Adverb', why: 'tatsächlich = actually / in fact (this chapter).', ex: 'Tatsächlich war sie super!', exEn: 'Actually it was great!' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb · sein (Präteritum)' },
        { w: 'sie', role: 'r-subject', en: 'it', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'super', role: 'r-adjective', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'das', role: 'r-akkusativ', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Meer', role: 'r-akkusativ', en: 'sea', hi: 'समुद्र', pron: 'mair', type: 'Noun · neut.' },
        { w: 'gesehen', role: 'r-verb', en: 'seen', hi: 'देखा', pron: 'ge-ZAY-en', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Actually it was great! I saw a lot.', hi: 'Darasal woh badhiya thi! Maine bahut kuch dekha.' },
      { speaker: 'Nick', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'किया', pron: 'hast', type: 'Verb · haben (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: 'gemocht', role: 'r-verb', en: 'liked', hi: 'पसंद किया', pron: 'ge-MOKHT', type: 'Partizip II · Satzende', why: 'mögen → gemocht (this chapter).', ex: 'Ich habe das gemocht.', exEn: 'I liked that.' },
        { w: '?', plain: true }
      ], en: 'And what did you like?', hi: 'Aur tumhe kya pasand aaya?' },
      { speaker: 'Runa', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'das', role: 'r-akkusativ', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Meer', role: 'r-akkusativ', en: 'sea', hi: 'समुद्र', pron: 'mair', type: 'Noun · neut.', why: 'das Meer (this chapter).', ex: 'Ich habe das Meer gesehen.', exEn: 'I saw the sea.' },
        { w: 'sehr', role: 'r-adverb', en: 'very much', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'gemocht', role: 'r-verb', en: 'liked', hi: 'पसंद किया', pron: 'ge-MOKHT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'I liked the sea very much.', hi: 'Mujhe samudra bahut pasand aaya.' },
      { speaker: 'Nick', side: 'right', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Bist', role: 'r-verb', en: 'did you', hi: 'गई', pron: 'bist', type: 'Verb · sein (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'geschwommen', role: 'r-verb', en: 'swum', hi: 'तैरी', pron: 'ge-SHVO-men', type: 'Partizip II · Satzende', why: 'schwimmen → geschwommen; movement, so sein (this chapter).', ex: 'Ich bin geschwommen.', exEn: 'I swam.' },
        { w: '?', plain: true }
      ], en: 'Really? Did you swim?', hi: 'Sach mein? Kya tum tairi?' },
      { speaker: 'Runa', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', pron: 'oft', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Wasser', role: 'r-subject', en: 'water', hi: 'पानी', pron: 'VA-ser', type: 'Noun · neut.' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb · sein (Präteritum)' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'kalt', role: 'r-adjective', en: 'cold', hi: 'ठंडा', pron: 'kalt', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Yes, often! But the water was very cold.', hi: 'Haan, aksar! Par paani bahut thanda tha.' },
      { speaker: 'Nick', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'glaube', role: 'r-verb', en: 'believe', hi: 'मानता हूँ', pron: 'GLOW-buh', type: 'Verb · glauben (ich)', why: 'glauben = to believe (this chapter).', ex: 'Das glaube ich.', exEn: 'I believe that.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klingt', type: 'Verb · klingen' },
        { w: 'immer', role: 'r-adverb', en: 'still', hi: 'फिर भी', pron: 'IM-mer', type: 'Adverb' },
        { w: 'noch', role: 'r-adverb', en: '(part of immer noch)', hi: '', pron: 'nokh', type: 'Adverb' },
        { w: 'toll', role: 'r-adjective', en: 'great', hi: 'शानदार', pron: 'tol', type: 'Adjective' },
        { w: '!', plain: true }
      ], en: 'I believe that. But it still sounds great!', hi: 'Main maanta hoon. Par phir bhi shaandaar lagta hai!' },
      { speaker: 'Runa', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb · sein (Präteritum)' },
        { w: 'toll', role: 'r-adjective', en: 'great', hi: 'शानदार', pron: 'tol', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Nächstes', role: 'r-time', en: 'next', hi: 'अगली', pron: 'NEKH-stes', type: 'Determiner' },
        { w: 'Jahr', role: 'r-time', en: 'year', hi: 'साल', pron: 'yahr', type: 'Noun · neut.' },
        { w: 'komme', role: 'r-verb', en: 'come', hi: 'आऊँगी', pron: 'KO-muh', type: 'Verb · kommen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'noch', role: 'r-adverb', en: 'once more', hi: 'फिर से', pron: 'nokh', type: 'Adverb' },
        { w: 'einmal', role: 'r-adverb', en: '(part of noch einmal)', hi: '', pron: 'INE-mahl', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'It was great. Next year I am coming once more.', hi: 'Yeh shaandaar tha. Agle saal main phir aaungi.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This is the Phase-4 checkpoint. Revision works by <em>retrieval</em> \u2014 producing the language, not rereading it. A holiday story is the perfect trigger because it naturally pulls in the <strong>Perfekt</strong> (ich bin gefahren), <strong>war &amp; hatte</strong>, <strong>pronouns</strong>, and the connectors <strong>weil</strong> and <strong>deshalb</strong> \u2014 everything from Chapters 1\u201334 in one breath.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'This is a GOETHE-STYLE CHECKPOINT covering all of A1 (Chapters 1\u201334), with a focus on telling a short past-tense story (a trip / a weekend) and writing a short message. ' +
    'The learner wrote a short text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Perfekt: helper (haben/sein) in position 2 + Partizip II at the end. Movement/change → sein (ich bin gefahren/gegangen/geblieben); most others → haben (ich habe gemacht/gegessen/geschrieben).\n' +
    '- Präteritum of sein/haben: war/hatte are normal at A1 (ich war, ich hatte) — do not "correct" them into the Perfekt.\n' +
    '- weil sends the conjugated verb to the END; und/aber/oder/denn keep the verb in position 2; deshalb (position 1) pushes the verb before the subject.\n' +
    '- Accusative pronouns: mich, dich, ihn, sie, es, uns, euch, Sie; a thing-pronoun matches the noun\u2019s gender (der Kuchen → ihn, die Nachricht → sie).\n' +
    '- Messages: informal "Liebe …,/Liebe Grüße"; formal "Sehr geehrte …,/Mit freundlichen Grüßen". Give date/time/place: am …, um …, bei …\n' +
    '- Verb-second rule holds in main clauses; a front time word still keeps the verb second ("Letzte Woche bin ich …").\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Checkpoint check:</b> one sentence on whether the text would pass a Goethe A1 task.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Checkpoint cleared — you have a real command of A1. On to <span class="de">Dativ Einführung</span> and the home stretch.',
    mid: 'Solid. Re-read the Grammar Review once and redo the weakest exercise, then continue.',
    low: 'Take another pass through the Phase-3/4 grammar (Perfekt, pronouns, connectors), then retake this checkpoint.'
  },

  parserSentence: [
    { w: 'Letzte', role: 'r-time' }, { w: 'Woche', role: 'r-time' },
    { w: 'bin', role: 'r-verb' }, { w: 'ich', role: 'r-subject' },
    { w: 'nach', role: 'r-preposition' }, { w: 'M\u00fcnchen', role: 'r-place' },
    { w: 'gefahren', role: 'r-verb' }, { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how this checkpoint pulls all of A1 together.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Runa\u2019s holiday report recycles the Perfekt, war/hatte, pronouns and connectors in one go.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the review words: Reisebericht, Urlaubsnachricht, tatsächlich.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'Reactivate the Perfekt, war/hatte, pronouns, connectors and message-writing.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style holiday text and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Follow a Goethe A1-style conversation and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Tell a short past-tense story and run a Goethe-style mini speaking task.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a short holiday message / past-tense paragraph using several chapters.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Mixed-skill drills across the whole of A1 with instant feedback.' },
    { id: 'quiz',       label: 'Goethe Mini Test', tag: 'assess',
      objective: 'A mixed mini-exam across Chapters 1\u201334. Pass to bank the full 200 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review achievements, strongest skills, and what to revisit.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download checkpoint resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📋', title: 'Goethe Checkpoint PDF',
      desc: 'A printable Goethe A1-style mini-test covering reading, listening, writing and a speaking task.',
      pdfUrl: '/pdfs/homework.pdf', size: '14 pages', kind: 'Assessment' },
    { icon: '📚', title: 'A1 Vocabulary Review PDF',
      desc: 'A recall sheet pulling key words from across Chapters 1\u201334.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📖', title: 'A1 Grammar Recap PDF',
      desc: 'One-page recaps of the Perfekt, war/hatte, pronouns, connectors and message-writing.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich bin … gefahren.', text: 'Tell a story in the Perfekt' },
    { de: 'Ich war / hatte …', text: 'Use the simple past of sein/haben' },
    { de: 'weil / deshalb', text: 'Connect ideas and give reasons' },
    { de: 'ihn / sie / es', text: 'Replace nouns with pronouns' },
    { de: 'Goethe A1', text: 'Pass a full mixed checkpoint' }
  ],

  // ---------- Vocabulary (3 words) ----------
  vocab: [
    { de: 'Reisebericht', art: 'der', gender: 'm', plural: 'Reiseberichte', pos: 'noun', en: 'travel report, travelogue', hi: 'यात्रा वृत्तांत', ex: 'Ich schreibe einen Reisebericht.', exEn: 'I write a travel report.' },
    { de: 'Urlaubsnachricht', art: 'die', gender: 'f', plural: 'Urlaubsnachrichten', pos: 'noun', en: 'holiday message', hi: 'छुट्टी का संदेश', ex: 'Ich habe eine Urlaubsnachricht geschickt.', exEn: 'I sent a holiday message.' },
    { de: 'tatsächlich', pos: 'adverb', en: 'actually, really', hi: 'सचमुच', ex: 'Die Reise war tatsächlich toll.', exEn: 'The trip was actually great.' }
  ],

  // ---------- Grammar Review (application, not new theory) ----------
  grammar: [
    {
      title: 'Talking about the past — Perfekt & Präteritum',
      goldenRule: 'Speak the past in the <b>Perfekt</b>. Use <b>war</b> and <b>hatte</b> for "was" and "had".',
      memoryTrick: 'Movement ya change → <b>sein</b> (bin gefahren). Baaki sab → <b>haben</b> (habe gelernt). Aur do short-cut: <b>war</b>, <b>hatte</b>.',
      body: [
        'The heart of Phase 4. Tell a story in the <strong>Perfekt</strong> for most verbs; use <strong>war</strong> and <strong>hatte</strong> for "was" and "had".'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Ich habe Deutsch gelernt.</span>', 'I studied German. (haben)'],
          ['<span class="de">Ich bin nach München gefahren.</span>', 'I travelled to Munich. (sein)'],
          ['<span class="de">Die Reise war toll.</span>', 'The trip was great. (war)'],
          ['<span class="de">Ich hatte viel Zeit.</span>', 'I had a lot of time. (hatte)']
        ]
      },
      note: 'Perfekt = helper (haben/sein) + Partizip II at the end. Movement/change → <b>sein</b>; most others → <b>haben</b>. For "was/had" use the simple past <b>war/hatte</b>.',
      hinglish: 'Past ka dil: zyadatar verbs ke liye <b>Perfekt</b> (haben/sein + Partizip end mein). Movement/change → <b>sein</b>; baaki → <b>haben</b>. "tha" ke liye <b>war</b>, "ke paas tha" ke liye <b>hatte</b>.'
    },
    {
      title: 'Connectors — weil, deshalb & friends',
      goldenRule: 'Three behaviours: <b>und/aber/oder/denn</b> change nothing · <b>weil</b> sends the verb last · <b>deshalb</b> takes slot 1 so the verb comes before the subject.',
      memoryTrick: '<b>WEIL = VERB LAST.</b> <b>denn</b> = kuch nahi badalta. <b>deshalb</b> = verb subject se pehle.',
      recap: [
        '<b>und, aber, oder, denn</b> → normal order.',
        '<b>weil</b> → conjugated verb at the very end.',
        '<b>deshalb</b> → verb before the subject.'
      ],
      body: [
        'Glue your sentences. Remember what each connector does to the verb.'
      ],
      table: {
        head: ['Connector', 'Word order', 'Example'],
        rows: [
          ['und/aber/oder/denn', 'verb position 2', '<span class="de">Ich komme, aber ich habe wenig Zeit.</span>'],
          ['weil', 'verb at the END', '<span class="de">Ich bleibe, weil ich müde bin.</span>'],
          ['deshalb', 'verb before subject', '<span class="de">Es regnet, deshalb bleibe ich.</span>'],
          ['both = because', 'denn / weil', 'same meaning, different order']
        ]
      },
      note: '<b>weil</b> sends the verb to the end; <b>und/aber/oder/denn</b> keep it in position 2; <b>deshalb</b> (result) pushes the verb before the subject. This is the most-tested point of Phase 4.',
      hinglish: '<b>weil</b> verb sabse last mein; <b>und/aber/oder/denn</b> verb position 2 pe; <b>deshalb</b> (result) verb subject se pehle. Phase 4 mein yahi sabse zyada test hota hai.'
    },
    {
      title: 'Pronouns & messages',
      goldenRule: 'Only <b>er → ihn</b> really surprises you. And a message needs a matching <b>Anrede + Grußformel</b> pair.',
      memoryTrick: 'Object pronoun mein sirf <b>ihn</b> yaad karo. Message mein Anrede aur Grußformel ek hi register ke hone chahiye.',
      body: [
        'Two more Phase-4 staples: replace nouns with pronouns, and write a tidy message.'
      ],
      table: {
        head: ['Area', 'Example'],
        rows: [
          ['accusative pronoun', '<span class="de">Kennst du Anna? — Ja, ich kenne sie.</span>'],
          ['match the gender', '<span class="de">der Kuchen → ihn, die Nachricht → sie</span>'],
          ['informal message', '<span class="de">Liebe Anna, … Liebe Grüße</span>'],
          ['formal message', '<span class="de">Sehr geehrte Frau Weber, … Mit freundlichen Grüßen</span>']
        ]
      },
      note: 'Pronoun matches the noun: <b>der → ihn, die → sie, das → es</b>. In messages, match the register: informal salutation ↔ informal closing; formal ↔ formal.',
      hinglish: 'Pronoun noun se match: <b>der → ihn, die → sie, das → es</b>. Message mein register match: informal salutation ↔ informal closing; formal ↔ formal.'
    },
    {
      title: 'Checkpoint mistakes to avoid',
      body: [ 'The four errors that most often cost marks across A1.' ],
      mistakes: [
        { wrong: 'Ich habe nach München gefahren.', right: 'Ich bin nach München gefahren.', why: 'Movement → sein, not haben.' },
        { wrong: 'Ich bleibe, weil ich bin müde.', right: 'Ich bleibe, weil ich müde bin.', why: 'weil sends the verb to the end.' },
        { wrong: 'Kennst du Max? — Ja, ich kenne er.', right: 'Ja, ich kenne ihn.', why: 'er is the subject form. As an object it becomes ihn — the one accusative pronoun that changes noticeably.' },
        { wrong: 'Sehr geehrte Frau Weber, … Liebe Grüße', right: 'Sehr geehrte Frau Weber, … Mit freundlichen Grüßen', why: 'Match formal salutation with a formal closing.' }
      ],
      hinglish: 'Char galtiyan common hain. Movement wale verbs <b>sein</b> lete hain: <b>bin gefahren</b>. <b>weil</b> ke baad verb sentence ke end mein jaata hai: <b>weil ich müde bin</b>. <b>er</b> ka accusative form <b>ihn</b> hai. Aur formal salutation ke saath formal closing hi aana chahiye.'
    }
  ],

  // ---------- Reading passage (holiday report, clickable) ----------
  reading: {
    title: 'Mein Urlaub',
    titleEn: 'My holiday',
    tokens: [
      { w: 'Letzte', role: 'r-time', en: 'last', hi: 'पिछले', pron: 'LETS-tuh', type: 'Adjective · time' },
      { w: 'Woche', role: 'r-time', en: 'week', hi: 'सप्ताह', pron: 'VO-khuh', type: 'Noun · time', why: 'die Woche (recycled — Datum).', ex: 'letzte Woche', exEn: 'last week' },
      { w: 'bin', role: 'r-verb', en: 'am', hi: 'गई', pron: 'bin', type: 'Aux · sein (ich)', why: 'movement → sein; verb position 2 (recycled — Perfekt mit sein).', ex: 'Letzte Woche bin ich …', exEn: 'Last week I …' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'nach', role: 'r-preposition', en: 'to', hi: 'को', pron: 'nakh', type: 'Preposition' },
      { w: 'M\u00fcnchen', role: 'r-place', en: 'Munich', hi: 'म्यूनिख', pron: 'MÜN-khen', type: 'Place' },
      { w: 'gefahren', role: 'r-verb', en: 'travelled', hi: 'गई', pron: 'guh-FAH-ren', type: 'Partizip II · fahren', why: 'fahren → sein (recycled — Perfekt mit sein).', ex: 'Ich bin gefahren.', exEn: 'I travelled.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-article', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Reise', role: 'r-subject', en: 'trip', hi: 'यात्रा', pron: 'RY-zuh', type: 'Noun · fem.', why: 'die Reise (recycled — Perfekt mit sein).', ex: 'Die Reise war toll.', exEn: 'The trip was great.' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb · sein past', why: 'war (recycled — Präteritum).', ex: 'Die Reise war toll.', exEn: 'The trip was great.' },
      { w: 'tats\u00e4chlich', role: 'r-adverb', en: 'actually', hi: 'सचमुच', pron: 'tat-ZEKH-likh', type: 'Adverb', why: 'tatsächlich (this chapter).', ex: 'tatsächlich toll', exEn: 'actually great' },
      { w: 'toll', role: 'r-adjective', en: 'great', hi: 'बढ़िया', pron: 'tol', type: 'Adjective', why: 'sein + adjective (Chapter 13).', ex: 'Die Reise war toll.', exEn: 'The trip was great.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'hatte', role: 'r-verb', en: 'had', hi: 'था', pron: 'HA-tuh', type: 'Verb · haben past (ich)', why: 'hatte (recycled — Präteritum).', ex: 'Ich hatte viel Zeit.', exEn: 'I had a lot of time.' },
      { w: 'viel', role: 'r-object', en: 'a lot of', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
      { w: 'Zeit', role: 'r-object', en: 'time', hi: 'समय', pron: 'tsyt', type: 'Noun · fem.', why: 'die Zeit (recycled — Uhrzeit).', ex: 'Ich hatte viel Zeit.', exEn: 'I had a lot of time.' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'vile', type: 'Conjunction', why: 'weil → verb to the end (recycled — Sätze verbinden).', ex: '…, weil ich Urlaub hatte.', exEn: '… because I had holiday.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'Urlaub', role: 'r-object', en: 'holiday', hi: 'छुट्टी', pron: 'OOR-lowp', type: 'Noun · masc.', why: 'der Urlaub (recycled — Berufe).', ex: 'Ich hatte Urlaub.', exEn: 'I had holiday.' },
      { w: 'hatte', role: 'r-verb', en: 'had', hi: 'थी', pron: 'HA-tuh', type: 'Verb · haben past (ich)', why: 'In a weil-clause the verb goes to the END (recycled — Sätze verbinden).', ex: '… weil ich Urlaub hatte.', exEn: '… because I had holiday.' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'on', hi: 'को', pron: 'am', type: 'Preposition · date', why: 'am + day (recycled — Datum).', ex: 'am Samstag', exEn: 'on Saturday' },
      { w: 'Samstag', role: 'r-time', en: 'Saturday', hi: 'शनिवार', pron: 'ZAMS-tahk', type: 'Noun · day', why: 'der Samstag (recycled — Uhrzeit).', ex: 'am Samstag', exEn: 'on Saturday' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'मिली', pron: 'HAH-buh', type: 'Aux · haben (ich)', why: 'Perfekt; verb position 2 (recycled — Perfekt mit haben).', ex: 'Am Samstag habe ich …', exEn: 'On Saturday I …' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'meine', role: 'r-akkusativ', en: 'my (fem. acc.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive · acc.', why: 'meine (recycled — Possessiv & Familie).', ex: 'meine Tante', exEn: 'my aunt' },
      { w: 'Tante', role: 'r-object', en: 'aunt', hi: 'मौसी', pron: 'TAN-tuh', type: 'Noun · fem.', why: 'die Tante (recycled — Possessiv & Familie).', ex: 'meine Tante getroffen', exEn: 'met my aunt' },
      { w: 'getroffen', role: 'r-verb', en: 'met', hi: 'मिली', pron: 'guh-TRO-fen', type: 'Partizip II · treffen', why: 'irregular ge…en (recycled — Perfekt mit haben).', ex: 'Ich habe sie getroffen.', exEn: 'I met her.' },
      { w: '.', plain: true },
      { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'sind', role: 'r-verb', en: 'are', hi: 'गए', pron: 'zint', type: 'Aux · sein (wir)', why: 'movement → sein (recycled — Perfekt mit sein).', ex: 'Wir sind gegangen.', exEn: 'We went.' },
      { w: 'ins', role: 'r-preposition', en: 'to the', hi: 'के', pron: 'ins', type: 'Preposition + place', why: 'in + das → ins (recycled — Hobbies).', ex: 'ins Café', exEn: 'to the café' },
      { w: 'Caf\u00e9', role: 'r-place', en: 'café', hi: 'कैफ़े', pron: 'ka-FAY', type: 'Noun · place', why: 'das Café (recycled — Im Café).', ex: 'ins Café gegangen', exEn: 'went to the café' },
      { w: 'gegangen', role: 'r-verb', en: 'gone', hi: 'गए', pron: 'guh-GANG-en', type: 'Partizip II · gehen', why: 'gehen → sein (recycled — Perfekt mit sein).', ex: 'Wir sind gegangen.', exEn: 'We went.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'und (recycled — Sätze verbinden).', ex: '…, und ich habe Kuchen gegessen.', exEn: '…, and I ate cake.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'खाया', pron: 'HAH-buh', type: 'Aux · haben (ich)' },
      { w: 'Kuchen', role: 'r-object', en: 'cake', hi: 'केक', pron: 'KOO-khen', type: 'Noun · masc.', why: 'der Kuchen (recycled — Essen & Trinken).', ex: 'Kuchen gegessen', exEn: 'ate cake' },
      { w: 'gegessen', role: 'r-verb', en: 'eaten', hi: 'खाया', pron: 'guh-GE-sen', type: 'Partizip II · essen', why: 'irregular ge…en (recycled — Perfekt mit haben).', ex: 'Ich habe Kuchen gegessen.', exEn: 'I ate cake.' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb · sein past', why: 'war (recycled — Präteritum).', ex: 'Es war schön.', exEn: 'It was lovely.' },
      { w: 'ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article' },
      { w: 'sch\u00f6ner', role: 'r-adjective', en: 'lovely', hi: 'सुंदर', pron: 'SHÖ-ner', type: 'Adjective', why: 'schön (recycled — Adjektive).', ex: 'ein schöner Urlaub', exEn: 'a lovely holiday' },
      { w: 'Urlaub', role: 'r-object', en: 'holiday', hi: 'छुट्टी', pron: 'OOR-lowp', type: 'Noun · masc.', why: 'der Urlaub (recycled — Berufe).', ex: 'ein schöner Urlaub', exEn: 'a lovely holiday' },
      { w: '!', plain: true }
    ],
    translation: 'Last week I travelled to Munich. The trip was actually great. I had a lot of time, because I had holiday. On Saturday I met my aunt. We went to the café, and I ate cake. It was a lovely holiday!'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_035_L001', speaker: 'Nick', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Runa, wie war dein Deutschkurs letzte Woche?', en: 'Runa, how was your German course last week?' },
      { id: 'A1_035_L002', speaker: 'Runa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Er war super, weil der Lehrer sehr geduldig war.', en: 'It was great, because the teacher was very patient.' },
      { id: 'A1_035_L003', speaker: 'Nick', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Habt ihr etwas Besonderes gemacht?', en: 'Did you do something special?' },
      { id: 'A1_035_L004', speaker: 'Runa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, wir sind ins Museum gegangen und ich habe viel gelernt. Ich habe dir auch meine Notizen geschickt!', en: 'Yes, we went to the museum and I learned a lot. I also sent you my notes!' }
    ],
    transcript: 'Runa, wie war dein Deutschkurs letzte Woche? Er war super, weil der Lehrer sehr geduldig war. Habt ihr etwas Besonderes gemacht? Ja, wir sind ins Museum gegangen und ich habe viel gelernt. Ich habe dir auch meine Notizen geschickt!',
    translation: 'Runa, how was your German course last week? It was great, because the teacher was very patient. Did you do something special? Yes, we went to the museum and I learned a lot. I also sent you my notes!',
    tokens: [
      { w: 'Runa' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'war' },
      { w: 'dein' },
      { w: 'Deutschkurs' },
      { w: 'letzte' },
      { w: 'Woche' },
      { w: '?', plain: true },
      { w: 'Er' },
      { w: 'war' },
      { w: 'super' },
      { w: ',', plain: true },
      { w: 'weil' },
      { w: 'der' },
      { w: 'Lehrer' },
      { w: 'sehr' },
      { w: 'geduldig' },
      { w: 'war' },
      { w: '.', plain: true },
      { w: 'Habt' },
      { w: 'ihr' },
      { w: 'etwas' },
      { w: 'Besonderes' },
      { w: 'gemacht' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'wir' },
      { w: 'sind' },
      { w: 'ins' },
      { w: 'Museum' },
      { w: 'gegangen' },
      { w: 'und' },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'viel' },
      { w: 'gelernt' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'dir' },
      { w: 'auch' },
      { w: 'meine' },
      { w: 'Notizen' },
      { w: 'geschickt' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Warum war der Kurs toll?', qEn: 'Why was the course great?', options: ['Der Lehrer war lustig.', 'Der Lehrer war geduldig.', 'Es gab Kuchen.', 'Es war kurz.'], optionsEn: ['The teacher was funny.', 'The teacher was patient.', 'There was cake.', 'It was short.'], answer: 1,
        explain: '"… weil der Lehrer sehr geduldig war."' },
      { q: 'Was hat Runa Nick geschickt?', qEn: 'What did Runa send Nick?', options: ['ein Foto', 'ihre Notizen', 'ein Buch', 'eine Einladung'], optionsEn: ['a photo', 'her notes', 'a book', 'an invitation'], answer: 1,
        explain: '"Ich habe dir auch meine Notizen geschickt!"' }
    ]
  },

  speaking: [
    { task: "Prüfung: Deine Partnerin fragt, wie dein Deutschkurs letzte Woche war.", taskEn: "Exam: your partner asks how your German course was last week.", de: "Er war super, weil der Lehrer sehr geduldig war.", en: "It was great, because the teacher was very patient." },
    { task: "Prüfung: Sie fragt, ob ihr etwas Besonderes gemacht habt.", taskEn: "Exam: she asks whether you did anything special.", de: "Ja, wir sind ins Museum gegangen und ich habe viel gelernt.", en: "Yes, we went to the museum and I learned a lot." },
    { task: "Prüfung: Erzähl kurz von deinem Urlaub.", taskEn: "Exam: talk briefly about your holiday.", de: "Die Reise war tatsächlich toll. Ich bin nach Berlin gefahren.", en: "The trip was really great. I went to Berlin." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short holiday report (6\u20138 sentences) in the past. Say where you went (Ich bin … gefahren), what it was like (war/hatte), what you did (Perfekt), and give a reason with weil. Add one connector (und/aber/deshalb). Finish with a one-line message: "Liebe …, … Liebe Grüße".',
    starters: ['Letzte Woche bin ich …', 'Die Reise war …', 'Ich habe … gemacht, weil …', 'Liebe …, … Liebe Grüße'],
    placeholder: 'Letzte Woche bin ich nach München gefahren …',
    minWords: 30
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct?',
      options: ['Ich habe nach Berlin gefahren.', 'Ich bin nach Berlin gefahren.', 'Ich bin Kuchen gegessen.', 'Ich habe gefahren nach Berlin.'],
      answer: 1,
      explain: 'fahren is movement → sein: "Ich bin nach Berlin gefahren."'
    },
    gap: {
      // sein-Perfekt + weil word order
      sentence: ['Ich ', ' nach München gefahren, weil ich Urlaub ', '.'],
      gaps: [ { answer: 'bin', accepts: ['bin'] }, { answer: 'hatte', accepts: ['hatte'] } ],
      explain: 'movement → bin (sein); weil sends hatte to the end.'
    },
    match: {
      q: 'Match each connector to its meaning.',
      pairs: [
        { noun: 'weil', art: 'because' },
        { noun: 'deshalb', art: 'therefore' },
        { noun: 'aber', art: 'but' },
        { noun: 'und', art: 'and' }
      ]
    },
    builder: {
      target: 'Build: "Last week I travelled to Munich." (Perfekt)',
      bank: ['Letzte Woche', 'bin', 'ich', 'nach München', 'gefahren'],
      answer: ['Letzte Woche', 'bin', 'ich', 'nach München', 'gefahren'],
      roles: { 'Letzte Woche': 'r-time', 'bin': 'r-verb', 'ich': 'r-subject', 'nach München': 'r-place', 'gefahren': 'r-verb' }
    }
  },

  // ---------- Goethe Mini Test (5 mixed questions) ----------
  quiz: [
    { q: 'Which helper does "gehen" take in the Perfekt?', options: ['haben', 'sein', 'werden', 'wollen'], answer: 1,
      explain: 'gehen is movement → sein: "ich bin gegangen".' },
    { q: 'Complete: "Ich bleibe zu Hause, weil ich müde ___."', options: ['bin', 'ist', 'bist', 'sein'], answer: 0,
      explain: 'weil → verb to the end: "… weil ich müde bin."' },
    { q: 'Replace: "Ich kenne den Mann." → "Ich kenne ___."', options: ['es', 'ihn', 'sie', 'dich'], answer: 1,
      explain: 'der Mann (masc.) → ihn.' },
    { q: 'What is the simple past of "ich habe"?', options: ['ich hatte', 'ich war', 'ich bin', 'ich gehabt'], answer: 0,
      explain: 'haben → ich hatte.' },
    { q: 'Which closing is FORMAL?', options: ['Liebe Grüße', 'Mit freundlichen Grüßen', 'Tschüss', 'Bis bald'], answer: 1,
      explain: '"Mit freundlichen Grüßen" is formal.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'Past: <span class="de">Perfekt</span> for most verbs (haben/sein + Partizip), <span class="de">war/hatte</span> for "was/had".' },
    { c: 'r-conjunction', html: 'Connect: <span class="de">weil</span> (verb to the end), <span class="de">deshalb</span> (verb before subject), <span class="de">und/aber/oder/denn</span> (position 2).' },
    { c: 'r-akkusativ', html: 'Polish: replace nouns with <span class="de">ihn/sie/es</span>, and match message register (Liebe… / Sehr geehrte…).' }
  ],
  revisionTips: [
    'Tell your weekend as a story: it forces the Perfekt, war/hatte and connectors all at once.',
    'Default to haben in the Perfekt; switch to sein for movement and change.',
    'Before the next phase, re-test any earlier chapter whose quiz you didn\u2019t ace.'
  ]
};

window.CHAPTER = CHAPTER;
