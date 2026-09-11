/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 2 · Chapter 12
   "Akkusativ"  (The accusative / direct-object case)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-12 word list (15 words).
   Recycles Chapters 1–11 throughout.
============================================================ */
const CHAPTER = {
  id: 'a1-12-akkusativ',
  phase: 'A1 · Phase 2',
  number: 12,
  title: 'Akkusativ',
  titleEn: 'The Accusative Case',
  description: 'The accusative is the case of the direct object — the thing a verb acts on. The good news: only one thing changes. Masculine der becomes den (and ein becomes einen); die, das and plural die stay exactly the same.',
  xp: 170,
  time: 45,
  difficulty: 'Beginner',
  nextChapter: { number: 13, title: 'Adjektive mit sein', titleEn: 'Adjectives with sein' , href: 'chapter-a1-13-adjektive.html' },

  heroAnimationPath: null,

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'The <span class="de r-akkusativ">accusative</span> marks the <b>direct object</b> — what the verb acts on. Only one article changes: masculine <span class="de r-subject">der</span> → <span class="de r-akkusativ">den</span> (and <span class="de">ein</span> → <span class="de r-akkusativ">einen</span>). <span class="de r-article">die</span>, <span class="de r-object">das</span> and plural <span class="de r-article">die</span> never change.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is the ACCUSATIVE case (direct object): masculine der→den, ein→einen; feminine die/eine, neuter das/ein, plural die all stay unchanged; the questions Wen? (whom) and Was? (what). ' +
    'The learner wrote accusative sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- The accusative is the DIRECT OBJECT — the thing the verb acts on: "Ich sehe den Mann."\n' +
    '- Definite articles in the accusative: masculine den, feminine die, neuter das, plural die. ONLY masculine changes (der→den).\n' +
    '- Indefinite articles in the accusative: masculine einen, feminine eine, neuter ein. ONLY masculine changes (ein→einen). kein follows the same pattern: keinen (m), keine (f), kein (n).\n' +
    '- Feminine and neuter nouns look IDENTICAL in nominative and accusative — do NOT invent a change ("die Karte" stays "die Karte").\n' +
    '- Common accusative verbs: haben, sehen, kaufen, brauchen, finden, suchen, essen, trinken, lesen.\n' +
    '- Wen? asks for a person object; Was? asks for a thing object.\n' +
    '- In a statement the verb stays second; the object usually follows: Subject–Verb–Object.\n' +
    '- All nouns are capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why (article in the accusative). If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Accusative check:</b> one sentence on whether masculine der→den (and ein→einen) was applied, and whether fem./neut. were correctly left unchanged.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you can spot the direct object and change der → den. Move on to <span class="de">Possessivartikel</span>.',
    mid: 'Good. Re-read the article-change table once, then continue.',
    low: 'Worth another pass — revisit the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'suche', role: 'r-verb' },
    { w: 'den', role: 'r-akkusativ' }, { w: 'Schlüssel', role: 'r-object' },
    { w: '.', role: '' }
  ],

  story: {
    eyebrow: 'Story-based learning',
    headline: 'In the <em>shop.</em>',
    intro: 'Tom and Lisa go shopping after class. Tom is looking for a few things — and every object he wants becomes a direct object in the accusative.',
    outcomes: ['Every word is clickable for meaning + audio', 'Hear der become den in real sentences', 'Lisa helps Tom find what he needs'],
    scene: 'Im Geschäft — Berlin',
    femaleSpeakers: ['Lisa'],
    dialogue: [
      { speaker: 'Tom', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'suche', role: 'r-verb', en: 'look for', hi: 'खोजता हूँ', pron: 'ZOO-khuh', type: 'Verb · suchen (ich)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.', why: 'Schlüssel is masculine and the object → der becomes den.', ex: 'Ich suche den Schlüssel.', exEn: 'I am looking for the key.' },
        { w: 'Schlüssel', role: 'r-object', en: 'key', hi: 'चाबी', pron: 'SHLÜ-sel', type: 'Noun · masc. object' },
        { w: '.', plain: true }
      ], en: 'I am looking for the key.', hi: 'Main chaabi dhoondh raha hoon.' },
      { speaker: 'Lisa', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'brauche', role: 'r-verb', en: 'need', hi: 'चाहिए', pron: 'BROW-khuh', type: 'Verb · brauchen (ich)' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.', why: 'Stift is masculine and the object → ein becomes einen.', ex: 'Ich brauche einen Stift.', exEn: 'I need a pen.' },
        { w: 'Stift', role: 'r-object', en: 'pen', hi: 'कलम', pron: 'shtift', type: 'Noun · masc. object' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article · neut.', why: 'Heft is neuter → ein stays ein.', ex: 'ein Heft', exEn: 'an exercise book' },
        { w: 'Heft', role: 'r-object', en: 'exercise book', hi: 'कॉपी', pron: 'heft', type: 'Noun · neut. object' },
        { w: '.', plain: true }
      ], en: 'And I need a pen and an exercise book.', hi: 'Aur mujhe ek pen aur ek copy chahiye.' },
      { speaker: 'Tom', tokens: [
        { w: 'Hast', role: 'r-verb', en: 'have you', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Stift', role: 'r-object', en: 'pen', hi: 'कलम', pron: 'shtift', type: 'Noun · masc. object' },
        { w: '?', plain: true }
      ], en: 'Do you have the pen?', hi: 'Kya tumhaare paas pen hai?' },
      { speaker: 'Lisa', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben (ich)' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article · neut.' },
        { w: 'Buch', role: 'r-object', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut. object' },
        { w: '.', plain: true }
      ], en: 'Yes! And I also have a book.', hi: 'Haan! Aur mere paas kitaab bhi hai.' },
      { speaker: 'Tom', tokens: [
        { w: 'Das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neuter' },
        { w: 'Geschäft', role: 'r-subject', en: 'shop', hi: 'दुकान', pron: 'guh-SHEFT', type: 'Noun · neut.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben (er/sie/es)' },
        { w: 'alles', role: 'r-akkusativ', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun · object' },
        { w: '!', plain: true }
      ], en: 'The shop has everything!', hi: 'Is dukaan mein sab kuch hai!' },
      { speaker: 'Lisa', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'finde', role: 'r-verb', en: 'find', hi: 'पाती हूँ', pron: 'FIN-duh', type: 'Verb · finden (ich)' },
        { w: 'alles', role: 'r-akkusativ', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun · object' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: '.', plain: true }
      ], en: 'Yes! And I find everything here.', hi: 'Haan! Aur mujhe yahaan sab kuch mil jaata hai.' },
      { speaker: 'Tom', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'brauche', role: 'r-verb', en: 'need', hi: 'चाहिए', pron: 'BROW-khuh', type: 'Verb · brauchen (ich)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.', why: 'Karte is feminine → die never changes in the accusative.' },
        { w: 'Karte', role: 'r-object', en: 'card', hi: 'कार्ड', pron: 'KAR-tuh', type: 'Noun · fem. object' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'Ben', role: 'r-name', en: 'Ben', hi: 'बेन', pron: 'ben', type: 'Name · person' },
        { w: '.', plain: true }
      ], en: 'I need the card for Ben.', hi: 'Mujhe Ben ke liye ye card chahiye.' },
      { speaker: 'Lisa', side: 'right', tokens: [
        { w: 'Schön', role: 'r-adjective', en: 'lovely', hi: 'बढ़िया', pron: 'shern', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben (wir)' },
        { w: 'alles', role: 'r-akkusativ', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun · object' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein (wir)' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छे', pron: 'goot', type: 'Adjective' },
        { w: '!', plain: true }
      ], en: 'Lovely! We have everything. We are good!', hi: 'Badhiya! Hamaare paas sab kuch hai. Hum theek hain!' }
    ]
  },

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole chapter at a glance before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meet the characters and hear this chapter’s words in a real conversation first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the accusative verbs and object nouns, plus the words for "thing", "enough" and "a few".' },
    { id: 'grammar',    label: 'Accusative', tag: 'core',
      objective: 'Master the direct object, the one article change der→den, and the questions Wen? / Was?.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a shopping scene full of direct objects and tap any word to hear it and see its case.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch what people buy, see and look for, then answer the Wen?/Was? questions.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say what you see, buy, need and look for, and ask a partner Wen? / Was?.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five accusative sentences with the verb in second position and the right object article.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the article change, Wen?/Was? choice, and sentence order with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 170 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The accusative verbs and object nouns with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'der→den drills, Wen?/Was? practice, sentence transformation, and self-study activities.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The accusative article table, common accusative verbs, Wen?/Was?, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'der Akkusativ', text: 'Recognise the direct-object case' },
    { de: 'der → den', text: 'Change the masculine article in the object' },
    { de: 'die · das · die', text: 'Leave feminine, neuter and plural unchanged' },
    { de: 'Wen? / Was?', text: 'Ask for a person object or a thing object' },
    { de: 'S–V–O', text: 'Build subject–verb–object sentences' }
  ],

  // ---------- Vocabulary (15 words) ----------
  vocab: [
    { de: 'den', pos: 'article (accusative)', en: 'the (masc. acc.)', hi: 'the (कर्म, पु.)',
      ex: 'Ich sehe den Mann.', exEn: 'I see the man.' },
    { de: 'haben', pos: 'verb', en: 'to have', hi: 'होना (पास)',
      ex: 'Ich habe einen Stift.', exEn: 'I have a pen.',
      conj: { praesens: 'hat', praeteritum: 'hatte', perfekt: 'hat gehabt' } },
    { de: 'finden', pos: 'verb', en: 'to find', hi: 'ढूँढ़ना (मिलना)',
      ex: 'Ich finde den Schlüssel nicht.', exEn: 'I can\'t find the key.',
      conj: { praesens: 'findet', praeteritum: 'fand', perfekt: 'hat gefunden' } },
    { de: 'suchen', pos: 'verb', en: 'to look for', hi: 'खोजना',
      ex: 'Ich suche die Karte.', exEn: 'I am looking for the card.',
      conj: { praesens: 'sucht', praeteritum: 'suchte', perfekt: 'hat gesucht' } },
    { de: 'alles', pos: 'pronoun', en: 'everything', hi: 'सब कुछ',
      ex: 'Ich habe alles.', exEn: 'I have everything.' },
    { de: 'Geschäft', art: 'das', gender: 'n', plural: 'Geschäfte', pos: 'noun', en: 'shop', hi: 'दुकान',
      ex: 'Das Geschäft ist offen.', exEn: 'The shop is open.' },
    { de: 'Lösung', art: 'die', gender: 'f', plural: 'Lösungen', pos: 'noun', en: 'solution', hi: 'हल',
      ex: 'Ich suche die Lösung.', exEn: 'I am looking for the solution.' },
    { de: 'Sache', art: 'die', gender: 'f', plural: 'Sachen', pos: 'noun', en: 'thing', hi: 'चीज़',
      ex: 'Ich brauche die Sache.', exEn: 'I need the thing.' },
    { de: 'ein paar', pos: 'phrase', en: 'a few', hi: 'कुछ',
      ex: 'Ich kaufe ein paar Sachen.', exEn: 'I buy a few things.' },
    { de: 'genug', pos: 'adverb', en: 'enough', hi: 'काफ़ी',
      ex: 'Ich habe genug Zeit.', exEn: 'I have enough time.' },
    { de: 'so', pos: 'adverb', en: 'this way, like this', hi: 'इस तरह',
      ex: 'So sagt man das auf Deutsch.', exEn: 'That is how you say it in German.' },
    { de: 'Ding', art: 'das', gender: 'n', plural: 'Dinge', pos: 'noun', en: 'thing', hi: 'वस्तु',
      ex: 'Was ist das für ein Ding?', exEn: 'What kind of thing is that?' },
    { de: 'Meer', art: 'das', gender: 'n', plural: 'Meere', pos: 'noun', en: 'sea', hi: 'समुद्र',
      ex: 'Ich sehe das Meer.', exEn: 'I see the sea.' },
    { de: 'Akkusativ', art: 'der', gender: 'm', plural: 'Akkusative', pos: 'noun', en: 'accusative', hi: 'कर्म कारक',
      ex: 'Der Akkusativ ist das Objekt.', exEn: 'The accusative is the object.' },
    { de: 'Nominativ', art: 'der', gender: 'm', plural: 'Nominative', pos: 'noun', en: 'nominative', hi: 'कर्ता कारक',
      ex: 'Der Nominativ ist das Subjekt.', exEn: 'The nominative is the subject.' }
  ],

  // ---------- Accusative (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Subject, verb, object',
      goldenRule: 'Ask <b>Wen?</b> or <b>Was?</b> after the verb. Whatever answers is your accusative object.',
      why: 'German marks the object on the <b>article</b>, not by position. That is why <span class="de">Den Mann sehe ich</span> still means "I see the man" even though the man comes first — the <b>den</b> has already told you who is being seen. English has no way to do this, so it relies on word order instead.',
      memoryTrick: 'Verb ke baad <b>Wen?</b> poochho — jo jawaab aaye, wahi Akkusativ.',
      body: [
        'Most sentences have three parts: who does it (the <span class="de r-subject">subject</span>, in the <span class="de r-subject">Nominativ</span>), the action (the <span class="de r-verb">verb</span>), and what it is done to (the <span class="de r-akkusativ">direct object</span>, in the <span class="de r-akkusativ">Akkusativ</span>).',
        'Find the object by asking <span class="de r-question">Wen?</span> (whom?) for a person or <span class="de r-question">Was?</span> (what?) for a thing, after the verb.'
      ],
      table: {
        head: ['Subject (NOM)', 'Verb', 'Object (AKK)'],
        rows: [
          ['<span class="de r-subject">Ich</span>', '<span class="de r-verb">sehe</span>', '<span class="de r-akkusativ">den Mann</span>.'],
          ['<span class="de r-subject">Ich</span>', '<span class="de r-verb">kaufe</span>', '<span class="de r-akkusativ">das Buch</span>.'],
          ['<span class="de r-subject">Wir</span>', '<span class="de r-verb">brauchen</span>', '<span class="de r-akkusativ">die Karte</span>.']
        ]
      },
      note: 'The subject does the action; the object receives it. "Ich sehe den Mann" — I (subject) see the man (object). Ask <i>Wen sehe ich?</i> → den Mann.',
      hinglish: 'Zyadatar sentence mein teen hisse: <b>subject</b> (kaun — Nominativ), <b>verb</b> (action), aur <b>object</b> (kis par — Akkusativ). Object dhoondhne ke liye verb ke baad <b>Wen?</b> (kisko) ya <b>Was?</b> (kya) poochho. Subject action karta hai, aur object us action ko receive karta hai.'
    },
    {
      title: 'The one change: der → den',
      goldenRule: 'Only the <b>masculine</b> changes: <b>der → den</b>, <b>ein → einen</b>. Feminine, neuter and plural do not move at all.',
      formula: [
        'm:  der Mann  →  <b>den</b> Mann     ·  ein → <b>einen</b>',
        'f:  die Karte →  die Karte      (no change)',
        'n:  das Buch  →  das Buch       (no change)',
        'pl: die Bücher → die Bücher     (no change)'
      ],
      memoryTrick: 'Chaar gender mein se teen bilkul same rehte hain. Bas <b>masculine</b> par dhyaan do: <b>der → den</b>.',
      recap: [
        'The whole accusative for A1 is <b>der → den</b> and <b>ein → einen</b>.',
        'Feminine, neuter and plural are identical to the nominative.',
        '<b>kein → keinen</b> follows the same masculine rule.'
      ],
      body: [
        'Here is the whole accusative in one line: <b>only the masculine article changes</b>. Feminine, neuter and plural look exactly the same as the nominative.'
      ],
      table: {
        head: ['Gender', 'Nominative', 'Accusative', 'Changed?'],
        rows: [
          ['masculine', '<span class="de r-subject">der</span> Mann', '<span class="de r-akkusativ">den</span> Mann', 'YES (der→den)'],
          ['feminine', '<span class="de r-article">die</span> Karte', '<span class="de r-article">die</span> Karte', 'no'],
          ['neuter', '<span class="de r-object">das</span> Buch', '<span class="de r-object">das</span> Buch', 'no'],
          ['plural', '<span class="de r-article">die</span> Bücher', '<span class="de r-article">die</span> Bücher', 'no']
        ]
      },
      note: 'The indefinite article matches: masculine <b>ein → einen</b> (Ich habe einen Stift); feminine <b>eine</b> and neuter <b>ein</b> stay. And kein → <b>keinen</b> (m) from Chapter 11.',
      hinglish: 'Poora Akkusativ ek line mein: <b>sirf masculine article badalta hai</b> — <b>der → den</b> (den Mann). Feminine (die), neuter (das), plural (die) bilkul same rehte hain. Indefinite bhi: <b>ein → einen</b> (einen Stift); eine/ein same. Aur <b>kein → keinen</b> (Chapter 11).'
    },
    {
      title: 'Verbs that take the accusative',
      goldenRule: 'If the verb can be followed by "…what?", it takes an accusative object.',
      memoryTrick: 'Verb aur object ko hamesha ek saath practice karo — <i>einen Stift haben</i>, <i>den Schlüssel suchen</i> — taaki case sochna na pade.',
      body: [
        'Many everyday verbs are followed by a direct object in the accusative. Learn the verb together with "… + object" so the case comes automatically.'
      ],
      table: {
        head: ['Verb', 'Meaning', 'Example'],
        rows: [
          ['<span class="de r-verb">haben</span>', 'to have', '<span class="de">Ich habe <span class="r-akkusativ">einen Stift</span>.</span>'],
          ['<span class="de r-verb">sehen</span>', 'to see', '<span class="de">Ich sehe <span class="r-akkusativ">das Meer</span>.</span>'],
          ['<span class="de r-verb">suchen</span>', 'to look for', '<span class="de">Ich suche <span class="r-akkusativ">den Schlüssel</span>.</span>'],
          ['<span class="de r-verb">finden</span>', 'to find', '<span class="de">Ich finde <span class="r-akkusativ">die Lösung</span>.</span>'],
          ['<span class="de r-verb">kaufen</span>', 'to buy', '<span class="de">Ich kaufe <span class="r-akkusativ">den Kuchen</span>.</span>'],
          ['<span class="de r-verb">brauchen</span>', 'to need', '<span class="de">Ich brauche <span class="r-akkusativ">einen Stuhl</span>.</span>']
        ]
      },
      note: 'haben, sehen, suchen, finden, kaufen, brauchen, essen, trinken, lesen — all take an object in the accusative.',
      hinglish: 'Bahut saare rozmarra verbs ke baad object Akkusativ mein aata hai: <b>haben, sehen, suchen, finden, kaufen, brauchen, essen, trinken, lesen</b>. Verb ko hamesha "… + object" ke saath practice karo, taaki case sochne ki zarurat na pade.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      whatIsIt: 'Four habits, and they all reduce to one question you have to ask before every object: is this noun masculine? If it is not, nothing changes at all.',
      body: [ 'Each row is a rule from this chapter, seen from the wrong side.' ],
      mistakes: [
        { wrong: 'Ich sehe der Mann.', right: 'Ich sehe den Mann.', why: 'Mann is the object → masculine der becomes den.' },
        { wrong: 'Ich habe ein Stift.', right: 'Ich habe einen Stift.', why: 'Masculine object → ein becomes einen.' },
        { wrong: 'Ich kaufe den Karte.', right: 'Ich kaufe die Karte.', why: 'Karte is feminine → die never changes in the accusative.' },
        { wrong: 'Den Mann sehe ich. (meaning "the man sees me")', right: 'Der Mann sieht mich.', why: 'The case, not the position, tells you who is doing what. den marks the receiver of the action wherever it stands in the sentence.' }
      ],
      hinglish: 'Char galtiyan common hain. Agar object masculine hai to <b>den</b> aayega: <b>Ich sehe den Mann</b>. <b>ein</b> bhi masculine object ke saath <b>einen</b> ban jaata hai: <b>einen Stift</b>. Feminine aur neuter ko badalna nahi hai \u2014 <b>die Karte</b> aur <b>das Buch</b> waise hi rehte hain. Yaad rakho ki Akkusativ mein sirf masculine badalta hai, aur yahi poora rule hai.'
    }
  ],

  // ---------- Reading passage (shopping scene, clickable) ----------
  reading: {
    title: 'Im Geschäft',
    titleEn: 'In the shop',
    tokens: [
      { w: 'Ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject', why: 'The subject — in the nominative.', ex: 'Ich suche etwas.', exEn: 'I am looking for something.' },
      { w: 'suche', role: 'r-verb', en: 'look for', hi: 'खोजता हूँ', pron: 'ZOO-khuh', type: 'Verb · ich-form', why: 'suchen, ich-form; takes an accusative object.', ex: 'Ich suche den Schlüssel.', exEn: 'I am looking for the key.', conj: { praesens: 'sucht', praeteritum: 'suchte', perfekt: 'hat gesucht' }, advanced: { synonyms: [], opposites: ['finden'] } },
      { w: 'den', role: 'r-akkusativ', case: 'Akkusativ', en: 'the (masc. acc.)', hi: 'the (कर्म)', pron: 'dayn', type: 'Article · masc. acc.', why: 'Schlüssel is masculine and the object → der becomes den.', ex: 'Ich suche den Schlüssel.', exEn: 'I am looking for the key.' },
      { w: 'Schlüssel', role: 'r-object', case: 'Akkusativ', en: 'key', hi: 'चाबी', pron: 'SHLÜ-sel', type: 'Noun · masc. object', why: 'der Schlüssel (Chapter 10) → den in the accusative. ü = round lips, "ee".', ex: 'Der Schlüssel ist klein.', exEn: 'The key is small.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Subject.', ex: 'Ich kaufe etwas.', exEn: 'I buy something.' },
      { w: 'kaufe', role: 'r-verb', en: 'buy', hi: 'खरीदता हूँ', pron: 'KOW-fuh', type: 'Verb · ich-form', why: 'kaufen; takes an accusative object.', ex: 'Ich kaufe das Buch.', exEn: 'I buy the book.', conj: { praesens: 'kauft', praeteritum: 'kaufte', perfekt: 'hat gekauft' }, advanced: { synonyms: [], opposites: ['verkaufen'] } },
      { w: 'ein', role: 'r-akkusativ', case: 'Akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article · neut.', why: 'Buch is neuter → ein stays ein (no change).', ex: 'ein Buch', exEn: 'a book' },
      { w: 'Buch', role: 'r-object', case: 'Akkusativ', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut. object', why: 'das Buch — neuter, so unchanged in the accusative.', ex: 'Ich kaufe ein Buch.', exEn: 'I buy a book.' },
      { w: 'und', role: 'r-preposition', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'final d → "t".', ex: 'Buch und Karte', exEn: 'book and card' },
      { w: 'eine', role: 'r-akkusativ', case: 'Akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem.', why: 'Karte is feminine → eine stays eine (no change).', ex: 'eine Karte', exEn: 'a card' },
      { w: 'Karte', role: 'r-object', case: 'Akkusativ', en: 'card', hi: 'कार्ड', pron: 'KAR-tuh', type: 'Noun · fem. object', why: 'die Karte — feminine, unchanged in the accusative.', ex: 'Ich kaufe eine Karte.', exEn: 'I buy a card.' },
      { w: '.', plain: true },
      { w: 'Hast', role: 'r-verb', en: 'do (you) have', hi: 'है (तुम्हारे पास)', pron: 'hast', type: 'Verb · haben (du)', why: 'Yes/no question, verb first (Chapter 7).', ex: 'Hast du Geld?', exEn: 'Do you have money?', conj: { praesens: 'hat', praeteritum: 'hatte', perfekt: 'hat gehabt' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'du', role: 'r-subject', case: 'Nominativ', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun', why: 'Informal you.', ex: 'Hast du Zeit?', exEn: 'Do you have time?' },
      { w: 'einen', role: 'r-akkusativ', case: 'Akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.', why: 'Stift is masculine and the object → ein becomes einen.', ex: 'Ich habe einen Stift.', exEn: 'I have a pen.' },
      { w: 'Stift', role: 'r-object', case: 'Akkusativ', en: 'pen', hi: 'कलम', pron: 'shtift', type: 'Noun · masc. object', why: 'der Stift → einen Stift in the accusative.', ex: 'Hast du einen Stift?', exEn: 'Do you have a pen?' },
      { w: '?', plain: true },
      { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle', why: 'The short yes (Chapter 7).', ex: 'Ja, hier.', exEn: 'Yes, here.' },
      { w: ',', plain: true },
      { w: 'ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Subject.', ex: 'ich habe', exEn: 'I have' },
      { w: 'finde', role: 'r-verb', en: 'find', hi: 'पाता हूँ', pron: 'FIN-duh', type: 'Verb · ich-form', why: 'finden; takes an accusative object.', ex: 'Ich finde die Lösung.', exEn: 'I find the solution.', advanced: { synonyms: [], opposites: ['suchen', 'verlieren'] } },
      { w: 'alles', role: 'r-object', case: 'Akkusativ', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun · object', why: 'alles = everything; the object of finde.', ex: 'Ich finde alles.', exEn: 'I find everything.' },
      { w: '.', plain: true }
    ],
    translation: 'I am looking for the key. I buy a book and a card. Do you have a pen? — Yes, I find everything.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair — never invented.
    dialogue: [
      { id: 'A1_012_L001', speaker: 'Tom', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Was suchst du, Lisa?', en: 'What are you looking for, Lisa?' },
      { id: 'A1_012_L002', speaker: 'Lisa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich suche den Schlüssel und einen Stift. Ich kaufe auch ein Buch und eine Karte.', en: 'I am looking for the key and a pen. I am also buying a book and a card.' },
      { id: 'A1_012_L003', speaker: 'Tom', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Hast du alles?', en: 'Do you have everything?' },
      { id: 'A1_012_L004', speaker: 'Lisa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, ich finde alles im Geschäft.', en: 'Yes, I find everything in the shop.' }
    ],
    transcript: 'Was suchst du, Lisa? Ich suche den Schlüssel und einen Stift. Ich kaufe auch ein Buch und eine Karte. Hast du alles? Ja, ich finde alles im Geschäft.',
    translation: 'What are you looking for, Lisa? I am looking for the key and a pen. I am also buying a book and a card. Do you have everything? Yes, I find everything in the shop.',
    tokens: [
      { w: 'Was' },
      { w: 'suchst' },
      { w: 'du' },
      { w: ',', plain: true },
      { w: 'Lisa' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'suche' },
      { w: 'den' },
      { w: 'Schlüssel' },
      { w: 'und' },
      { w: 'einen' },
      { w: 'Stift' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'kaufe' },
      { w: 'auch' },
      { w: 'ein' },
      { w: 'Buch' },
      { w: 'und' },
      { w: 'eine' },
      { w: 'Karte' },
      { w: '.', plain: true },
      { w: 'Hast' },
      { w: 'du' },
      { w: 'alles' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'finde' },
      { w: 'alles' },
      { w: 'im' },
      { w: 'Geschäft' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was sucht Lisa?', qEn: 'What is Lisa looking for?', options: ['das Buch und die Karte', 'den Schlüssel und einen Stift', 'das Meer', 'die Lösung'], optionsEn: ['the book and the card', 'the key and a pen', 'the sea', 'the solution'], answer: 1,
        explain: '"Ich suche den Schlüssel und einen Stift" (both masculine → den/einen).' },
      { q: 'Wo findet Lisa alles?', qEn: 'Where does Lisa find everything?', options: ['zu Hause', 'im Café', 'im Geschäft', 'in der Schule'], optionsEn: ['at home', 'at the café', 'in the shop', 'at school'], answer: 2,
        explain: '"… ich finde alles im Geschäft."' }
    ]
  },

  // ---------- Speaking prompts ----------
  speaking: [
    { task: "Du bist im Geschäft. Die Verkäuferin fragt: Was suchen Sie?", taskEn: "You're in the shop. The assistant asks: what are you looking for?", de: "Ich suche einen Stift und ein Buch.", en: "I'm looking for a pen and a book." },
    { task: "Dein Freund fragt: Was hast du in der Tasche?", taskEn: "Your friend asks: what have you got in your bag?", de: "Ich habe alles: den Schlüssel, die Karte und das Buch.", en: "I've got everything: the key, the card and the book." },
    { task: "Du findest deine Sachen nicht. Dein Freund fragt: Was findest du nicht?", taskEn: "You can't find your things. Your friend asks: what can't you find?", de: "Ich finde den Schlüssel nicht.", en: "I can't find the key." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five accusative sentences (Subject–Verb–Object). Use a different verb each time (haben, sehen, kaufen, suchen, finden) and include at least two masculine objects so you practise den / einen.',
    starters: ['Ich sehe den …', 'Ich kaufe ein …', 'Ich suche die …'],
    placeholder: 'Ich suche den Schlüssel …',
    minWords: 15
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the article: "Ich sehe ___ Mann."',
      options: ['der', 'den', 'die', 'das'],
      answer: 1,
      explain: 'Mann is the masculine object → der becomes den.'
    },
    gap: {
      // Accusative articles in context.
      sentence: ['Ich kaufe ', ' Buch und ', ' Stift.'],
      gaps: [ { answer: 'ein', accepts: ['ein'] }, { answer: 'einen', accepts: ['einen'] } ],
      explain: 'Buch is neuter → ein (unchanged); Stift is masculine object → einen.'
    },
    match: {
      q: 'Match each noun to its accusative article.',
      pairs: [
        { noun: 'Mann (m)', art: 'den' },
        { noun: 'Karte (f)', art: 'die' },
        { noun: 'Buch (n)', art: 'das' },
        { noun: 'Stift (m, ein)', art: 'einen' }
      ]
    },
    builder: {
      target: 'Build: "I am looking for the key."',
      bank: ['den', 'Ich', 'Schlüssel', 'suche'],
      answer: ['Ich', 'suche', 'den', 'Schlüssel'],
      roles: { 'Ich': 'r-subject', 'suche': 'r-verb', 'den': 'r-akkusativ', 'Schlüssel': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'The accusative is the case of the…', options: ['subject', 'direct object', 'verb', 'question'], answer: 1,
      explain: 'The accusative marks the direct object — what the verb acts on.' },
    { q: 'Complete: "Ich sehe ___ Mann."', options: ['der', 'den', 'dem', 'die'], answer: 1,
      explain: 'Masculine object → der becomes den.' },
    { q: 'Which article does NOT change in the accusative?', options: ['der (m)', 'die (f)', 'ein (m)', 'all of them change'], answer: 1,
      explain: 'die (feminine) stays die; only masculine changes (der→den, ein→einen).' },
    { q: '"Wen?" asks about…', options: ['a thing', 'a place', 'a person (object)', 'a time'], answer: 2,
      explain: 'Wen? asks for a person object; Was? asks for a thing.' },
    { q: 'Complete: "Ich habe ___ Stift."', options: ['ein', 'einen', 'eine', 'den'], answer: 1,
      explain: 'Masculine object with the indefinite article → einen Stift.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-akkusativ', html: 'The accusative marks the <b>direct object</b> — find it with <span class="de">Wen?</span> (whom) or <span class="de">Was?</span> (what).' },
    { c: 'r-subject', html: 'Only masculine changes: <span class="de">der → den</span>, <span class="de">ein → einen</span>, <span class="de">kein → keinen</span>. die / das / plural die stay.' },
    { c: 'r-verb', html: 'Accusative verbs: <span class="de">haben, sehen, kaufen, suchen, finden, brauchen</span> — all take a direct object.' }
  ],
  revisionTips: [
    'For every object, ask: is it masculine? Only then change der→den / ein→einen.',
    'Drill the safe ones too: die Karte, das Buch — say them aloud unchanged so you trust the rule.',
    'Learn each new verb with an object: "suchen + den Schlüssel", "kaufen + ein Buch".'
  ]
};

window.CHAPTER = CHAPTER;
