/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 3 · Chapter 27
   "Präteritum haben/sein"  (war & hatte — the simple past)
   Vocabulary source: uploaded chapter-27 word list (5 words).
   Theme = talking about yesterday. Recycles Ch1–26.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-27-praeteritum',
  phase: 'A1 · Phase 3',
  number: 27,
  title: 'Präteritum haben/sein',
  titleEn: 'war & hatte',
  description: 'Your first step into the past. Two verbs do almost all the work when you talk about yesterday in German — haben becomes hatte and sein becomes war. Learn both little tables and you can already say where you were and what you had.',
  xp: 160,
  time: 30,
  difficulty: 'Beginner',
  nextChapter: { number: 28, title: 'Perfekt Einführung', titleEn: 'The Perfect Tense' , href: 'chapter-a1-28-perfekt.html' },

  prevChapter: { number: 26, title: 'Goethe Mini 3', titleEn: 'Goethe Checkpoint 3', href: 'chapter-a1-26-goethe3.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Monday morning. Doris missed the weekend get-together, so Kai fills her in on what happened — where everyone was, who had cake, and why the weekend was, as usual, eventful. Every sentence lands in the past with war and hatte.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear war and hatte in real, everyday speech'
    ],
    scene: 'Montagmorgen \u2014 vor dem Kurs, Berlin',
    femaleSpeakers: ['Doris'],
    dialogue: [
      { speaker: 'Doris', tokens: [
        { w: 'Hallo', role: 'r-subject', en: 'hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting' },
        { w: 'Kai', role: 'r-name', en: 'Kai', hi: 'काई', pron: 'kye', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Wo', role: 'r-question', en: 'where', hi: 'कहाँ', pron: 'vo', type: 'Question word' },
        { w: 'warst', role: 'r-verb', en: 'were', hi: 'थे', pron: 'varst', type: 'Verb · sein (Präteritum, du)', why: 'sein in the past: du warst (this chapter).', ex: 'Wo warst du?', exEn: 'Where were you?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'gestern', role: 'r-time', en: 'yesterday', hi: 'कल', pron: 'GES-tern', type: 'Adverb · time', why: 'gestern = yesterday (this chapter).', ex: 'gestern war ich hier', exEn: 'yesterday I was here' },
        { w: '?', plain: true }
      ], en: 'Hello Kai! Where were you yesterday?', hi: 'Namaste Kai! Kal tum kahaan the?' },
      { speaker: 'Kai', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb · sein (Präteritum, ich)', why: 'sein in the past: ich war (this chapter).', ex: 'Ich war zu Hause.', exEn: 'I was at home.' },
        { w: 'zu', role: 'r-preposition', en: 'at', hi: 'में', pron: 'tsoo', type: 'Preposition' },
        { w: 'Hause', role: 'r-place', en: 'home', hi: 'घर', pron: 'HOW-zuh', type: 'Noun · place' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hatte', role: 'r-verb', en: 'had', hi: 'था', pron: 'HA-tuh', type: 'Verb · haben (Präteritum, ich)', why: 'haben in the past: ich hatte (this chapter).', ex: 'Ich hatte Besuch.', exEn: 'I had visitors.' },
        { w: 'Besuch', role: 'r-akkusativ', en: 'visitors', hi: 'मेहमान', pron: 'be-ZOOKH', type: 'Noun · masc.', why: 'der Besuch = visit / visitors (this chapter).', ex: 'Ich hatte Besuch.', exEn: 'I had visitors.' },
        { w: '.', plain: true }
      ], en: 'I was at home. I had visitors.', hi: 'Main ghar par tha. Mere paas mehmaan the.' },
      { speaker: 'Doris', tokens: [
        { w: 'Ach', role: 'r-subject', en: 'ah', hi: 'अच्छा', pron: 'akh', type: 'Reaction' },
        { w: 'so', role: 'r-adverb', en: 'I see', hi: 'समझा', pron: 'zo', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Wer', role: 'r-question', en: 'who', hi: 'कौन', pron: 'vair', type: 'Question word' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb · sein (Präteritum)' },
        { w: 'da', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dah', type: 'Adverb · place' },
        { w: '?', plain: true }
      ], en: 'Ah, I see! Who was there?', hi: 'Achha samjha! Kaun tha wahaan?' },
      { speaker: 'Kai', side: 'right', tokens: [
        { w: 'Meine', role: 'r-subject', en: 'my (pl.)', hi: 'मेरे', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Eltern', role: 'r-subject', en: 'parents', hi: 'माता-पिता', pron: 'EL-tern', type: 'Noun · plural' },
        { w: 'waren', role: 'r-verb', en: 'were', hi: 'थे', pron: 'VAH-ren', type: 'Verb · sein (Präteritum, sie)', why: 'plural past: sie waren (this chapter).', ex: 'Meine Eltern waren hier.', exEn: 'My parents were here.' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: '.', plain: true },
        { w: 'Sie', role: 'r-subject', en: 'they', hi: 'वे', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'hatten', role: 'r-verb', en: 'had', hi: 'था', pron: 'HA-ten', type: 'Verb · haben (Präteritum, sie)', why: 'plural past: sie hatten (this chapter).', ex: 'Sie hatten Zeit.', exEn: 'They had time.' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'My parents were here. They had time.', hi: 'Mere maata-pita yahaan the. Unke paas time tha.' },
      { speaker: 'Doris', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb · sein (Präteritum)' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Tag', role: 'r-subject', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.' },
        { w: '?', plain: true },
        { w: 'Schön', role: 'r-adjective', en: 'nice', hi: 'अच्छा', pron: 'shern', type: 'Adjective' },
        { w: '?', plain: true }
      ], en: 'How was the day? Nice?', hi: 'Din kaisa tha? Achha?' },
      { speaker: 'Kai', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'schön', role: 'r-adjective', en: 'nice', hi: 'अच्छा', pron: 'shern', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb · sein (Präteritum, ich)' },
        { w: 'am', role: 'r-preposition', en: 'in the', hi: 'को', pron: 'am', type: 'Preposition + time' },
        { w: 'Abend', role: 'r-time', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun · time' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'müde', role: 'r-adjective', en: 'tired', hi: 'थका हुआ', pron: 'MÜ-duh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Yes, very nice! But in the evening I was very tired.', hi: 'Haan, bahut achha! Par shaam ko main bahut thaka tha.' },
      { speaker: 'Doris', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'normal', role: 'r-adjective', en: 'normal', hi: 'सामान्य', pron: 'nor-MAHL', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Gestern', role: 'r-time', en: 'yesterday', hi: 'कल', pron: 'GES-tern', type: 'Adverb · time' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb · sein (Präteritum)' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Kurs', role: 'r-subject', en: 'course', hi: 'कोर्स', pron: 'koors', type: 'Noun · masc.' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'lang', role: 'r-adjective', en: 'long', hi: 'लंबा', pron: 'lang', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'That is normal! Yesterday the course was very long too.', hi: 'Yeh saamaanya hai! Kal course bhi bahut lamba tha.' },
      { speaker: 'Kai', side: 'right', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Hattet', role: 'r-verb', en: 'did you have', hi: 'था', pron: 'HA-tet', type: 'Verb · haben (Präteritum, ihr)', why: 'plural you in the past: ihr hattet (this chapter).', ex: 'Hattet ihr einen Test?', exEn: 'Did you have a test?' },
        { w: 'ihr', role: 'r-subject', en: 'you (pl.)', hi: 'तुम लोग', pron: 'eer', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Pause', role: 'r-akkusativ', en: 'break', hi: 'विराम', pron: 'POW-zuh', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'Really? Did you have a break too?', hi: 'Sach mein? Kya tum logon ka break bhi tha?' },
      { speaker: 'Doris', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'hatten', role: 'r-verb', en: 'had', hi: 'था', pron: 'HA-ten', type: 'Verb · haben (Präteritum, wir)' },
        { w: 'keine', role: 'r-negation', en: 'no (fem.)', hi: 'कोई नहीं', pron: 'KY-nuh', type: 'Negation · fem.' },
        { w: 'Pause', role: 'r-akkusativ', en: 'break', hi: 'विराम', pron: 'POW-zuh', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb · sein (Präteritum)' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'schwer', role: 'r-adjective', en: 'hard', hi: 'मुश्किल', pron: 'shvair', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'No, we had no break. It was very hard.', hi: 'Nahi, hamaara koi break nahi tha. Yeh bahut mushkil tha.' },
      { speaker: 'Kai', side: 'right', tokens: [
        { w: 'Oh', role: 'r-subject', en: 'oh', hi: 'ओह', pron: 'oh', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb · sein (Präteritum)' },
        { w: 'mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Tag', role: 'r-subject', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.' },
        { w: 'zu', role: 'r-adverb', en: 'too', hi: 'बहुत', pron: 'tsoo', type: 'Adverb' },
        { w: 'Hause', role: 'r-place', en: 'home', hi: 'घर', pron: 'HOW-zuh', type: 'Noun · place' },
        { w: 'besser', role: 'r-adjective', en: 'better', hi: 'बेहतर', pron: 'BE-ser', type: 'Adjective' },
        { w: '!', plain: true }
      ], en: 'Oh! Then my day at home was better!', hi: 'Oh! Toh ghar par mera din behtar tha!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'To talk about the past in spoken German, two verbs do nearly all the work: <span class="de r-verb">sein</span> becomes <span class="de r-verb">war</span> (was/were) and <span class="de r-verb">haben</span> becomes <span class="de r-verb">hatte</span> (had). Everyone else uses the Perfekt (next chapter), but these two are almost always used in the simple past: <span class="de">Ich <u>war</u> zu Hause und <u>hatte</u> keine Zeit.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is the PRÄTERITUM (simple past) of haben and sein only: war (was/were) and hatte (had), used to talk about yesterday and past situations. ' +
    'The learner wrote sentences about the past below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- sein → past: ich war, du warst, er/sie/es war, wir waren, ihr wart, sie/Sie waren.\n' +
    '- haben → past: ich hatte, du hattest, er/sie/es hatte, wir hatten, ihr hattet, sie/Sie hatten.\n' +
    '- ich and er/sie/es are identical: war / war, hatte / hatte (no extra ending).\n' +
    '- "es gibt" in the past is "es gab" (there was/were).\n' +
    '- Questions invert: "Wo warst du?", "Hattest du Zeit?". Verb-second rule still holds: "Gestern war ich müde."\n' +
    '- At A1, war and hatte ARE the normal past for these two verbs — do NOT "correct" them into the Perfekt.\n' +
    '- Time words: gestern (yesterday), vorgestern (the day before yesterday), früher (in the past/formerly), letzte Woche, am Wochenende.\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Past-tense check:</b> one sentence on whether war/hatte forms matched their subjects.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — your war and hatte forms match their subjects. On to <span class="de">Perfekt Einführung</span>.',
    mid: 'Good. Re-read the two little tables (war / hatte) once, then continue.',
    low: 'Worth another pass — memorise the war and hatte tables in the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'war', role: 'r-verb' },
    { w: 'gestern', role: 'r-time' }, { w: 'zu', role: 'r-preposition' },
    { w: 'Hause', role: 'r-place' }, { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See why war and hatte are your whole past tense for now.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Hear Doris and Doris tell Doris what he missed \u2014 the past in every line.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the past-time words: gestern, vorgestern, früher, der Besuch.' },
    { id: 'grammar',    label: 'war & hatte', tag: 'core',
      objective: 'Master the two simple-past tables: sein → war and haben → hatte.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a "yesterday" text full of war and hatte and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch where people were and what they had, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say where you were and what you had yesterday.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five past sentences and a short paragraph about yesterday.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill war and hatte forms and error correction with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The past-time words and the war/hatte forms with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Conjugation grids for war and hatte, gap-fill, error correction, and a "yesterday" writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'sein → war and haben → hatte, present vs past, es gab, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich war …', text: 'Say where you were' },
    { de: 'Ich hatte …', text: 'Say what you had' },
    { de: 'Es gab …', text: 'Say what there was' },
    { de: 'gestern / früher', text: 'Use past-time words' },
    { de: 'Wie war …?', text: 'Ask about the past' }
  ],

  // ---------- Vocabulary (5 words) ----------
  vocab: [
    { de: 'war', pos: 'verb', en: 'was, were (sein · Präteritum)', hi: 'था / थी / थे', ex: 'Ich war zu Hause.', exEn: 'I was at home.' },
    { de: 'warst', pos: 'verb', en: 'were (du · sein · Präteritum)', hi: 'तुम थे', ex: 'Wo warst du?', exEn: 'Where were you?' },
    { de: 'waren', pos: 'verb', en: 'were (wir/sie · sein · Präteritum)', hi: 'हम/वे थे', ex: 'Meine Eltern waren hier.', exEn: 'My parents were here.' },
    { de: 'Besuch', art: 'der', gender: 'm', plural: 'Besuche', pos: 'noun', en: 'visit, guest(s)', hi: 'मुलाक़ात, मेहमान', ex: 'Der Besuch war sehr nett.', exEn: 'The visit was very nice.' },
    { de: 'früher', pos: 'adverb', en: 'formerly, in the past', hi: 'पहले', ex: 'Früher hatte ich mehr Zeit.', exEn: 'In the past I had more time.' },
    { de: 'gestern', pos: 'adverb', en: 'yesterday', hi: 'कल (बीता हुआ)', ex: 'Gestern war ich zu Hause.', exEn: 'Yesterday I was at home.' },
    { de: 'vorgestern', pos: 'adverb', en: 'the day before yesterday', hi: 'परसों (बीता हुआ)', ex: 'Vorgestern hatten wir Besuch.', exEn: 'The day before yesterday we had guests.' },
    { de: 'Präteritum', art: 'das', gender: 'n', plural: 'Präterita', pos: 'noun', en: 'simple past tense', hi: 'भूतकाल', ex: '"War" ist das Präteritum von "sein".', exEn: '"War" is the simple past of "sein".' }
  ],

  // ---------- war & hatte (rule cards → accordion) ----------
  grammar: [
    {
      title: 'sein → war (was / were)',
      goldenRule: '<b>war</b> and <b>hatte</b> are the only two past forms you use in speech. Everything else uses the Perfekt.',
      formula: [
        'ich <b>war</b>   ·  du <b>warst</b>  ·  er <b>war</b>',
        'ich <b>hatte</b> ·  du <b>hattest</b> · er <b>hatte</b>'
      ],
      memoryTrick: '<b>ich war</b> aur <b>er war</b> ek jaise — koi ending nahi. Wahi <b>hatte</b> ke saath bhi.',
      recap: [
        '<b>war</b> = was/were · <b>hatte</b> = had.',
        'ich and er/sie/es forms are identical.',
        'For every other verb, speak in the Perfekt.'
      ],
      body: [
        'The past of <span class="de r-verb">sein</span> (to be) is the single most useful past form in German. You\u2019ll use it constantly to say where you and others were and how things were.'
      ],
      table: {
        head: ['Person', 'Present', 'Past (Präteritum)'],
        rows: [
          ['ich', 'bin', '<span class="de r-verb">war</span>'],
          ['du', 'bist', '<span class="de r-verb">warst</span>'],
          ['er/sie/es', 'ist', '<span class="de r-verb">war</span>'],
          ['wir / sie / Sie', 'sind', '<span class="de r-verb">waren</span>'],
          ['ihr', 'seid', '<span class="de r-verb">wart</span>']
        ]
      },
      note: 'Notice <b>ich</b> and <b>er/sie/es</b> are identical: <b>war</b> (no ending). Examples: "Ich war müde.", "Wo warst du?", "Die Party war schön."',
      hinglish: 'sein ka past: ich <b>war</b>, du warst, er war, wir waren, ihr wart, sie waren. ich aur er ek jaise (war) — koi ending nahi. "Ich war zu Hause." = main ghar par tha.'
    },
    {
      title: 'haben → hatte (had)',
      body: [
        'The past of <span class="de r-verb">haben</span> (to have) is <span class="de r-verb">hatte</span>. Note the double <strong>t</strong>.'
      ],
      table: {
        head: ['Person', 'Present', 'Past (Präteritum)'],
        rows: [
          ['ich', 'habe', '<span class="de r-verb">hatte</span>'],
          ['du', 'hast', '<span class="de r-verb">hattest</span>'],
          ['er/sie/es', 'hat', '<span class="de r-verb">hatte</span>'],
          ['wir / sie / Sie', 'haben', '<span class="de r-verb">hatten</span>'],
          ['ihr', 'habt', '<span class="de r-verb">hattet</span>']
        ]
      },
      note: 'Again <b>ich</b> and <b>er/sie/es</b> match: <b>hatte</b>. Double-t throughout. Examples: "Ich hatte keine Zeit.", "Hattest du Hunger?", "Wir hatten Besuch."',
      hinglish: 'haben ka past: ich <b>hatte</b>, du hattest, er hatte, wir hatten, ihr hattet, sie hatten. Double "t" hamesha. ich aur er ek jaise (hatte). "Ich hatte keine Zeit." = mere paas samay nahi tha.'
    },
    {
      title: 'es gab & the past-time words',
      body: [
        'Two bonus tools: <span class="de">es gab</span> (there was/were) is the past of <span class="de">es gibt</span>, and a set of words pin a sentence to the past.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">es gab</span>', 'there was / there were'],
          ['<span class="de">gestern</span>', 'yesterday'],
          ['<span class="de">vorgestern</span>', 'the day before yesterday'],
          ['<span class="de">früher</span>', 'in the past / formerly']
        ]
      },
      note: 'Start a sentence with a time word and the verb still comes second: "<b>Gestern</b> war ich müde.", "<b>Früher</b> hatte ich mehr Zeit." Use <b>es gab</b> + accusative: "Es gab einen Kuchen."',
      hinglish: '<b>es gab</b> = tha/the (es gibt ka past). Past-time shabd: <b>gestern</b> (kal), <b>vorgestern</b> (parson), <b>früher</b> (pehle). Time word se shuru karo to verb phir bhi doosri jagah: "Gestern <b>war</b> ich müde."'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four simple-past traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich warte zu Hause. (for "I was")', right: 'Ich war zu Hause.', why: 'warten = to wait; the past of sein is war.' },
        { wrong: 'Ich hatte gewesen müde.', right: 'Ich war müde.', why: 'For sein/haben use the simple past directly — no Perfekt needed at A1.' },
        { wrong: 'Er warst hier.', right: 'Er war hier.', why: 'er/sie/es uses war (no -st); warst is only for du.' },
        { wrong: 'Wir hatte Besuch.', right: 'Wir hatten Besuch.', why: 'wir needs -n: hatten.' }
      ],
      hinglish: 'Char galtiyan common hain. "Main tha" ke liye <b>Ich war</b> aata hai, na ki "warte", jiska matlab intezaar karna hai. <b>sein</b> aur <b>haben</b> ke saath seedha simple past chalta hai: <b>Ich war müde</b> — Perfekt ki zaroorat nahi. <b>er war</b> mein koi ending nahi lagti; <b>warst</b> sirf <b>du</b> ke liye hai. Aur <b>wir hatten</b> mein <b>-n</b> zaroori hai.'
    }
  ],

  // ---------- Reading passage (yesterday, clickable) ----------
  reading: {
    title: 'Gestern',
    titleEn: 'Yesterday',
    tokens: [
      { w: 'Gestern', role: 'r-time', en: 'yesterday', hi: 'कल', pron: 'GES-tern', type: 'Adverb · time', why: 'gestern (this chapter).', ex: 'Gestern war ich zu Hause.', exEn: 'Yesterday I was at home.' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb · sein past (ich)', why: 'sein past: ich war; verb position 2 (this chapter).', ex: 'Gestern war ich …', exEn: 'Yesterday I was …' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'zu', role: 'r-preposition', en: 'at', hi: 'में', pron: 'tsoo', type: 'Preposition', why: '"zu Hause" = at home.', ex: 'zu Hause', exEn: 'at home' },
      { w: 'Hause', role: 'r-place', en: 'home', hi: 'घर', pron: 'HOW-zuh', type: 'Noun · place', why: '"zu Hause" (recycled — Possessiv & Familie).', ex: 'Ich war zu Hause.', exEn: 'I was at home.' },
      { w: '.', plain: true },
      { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'hatten', role: 'r-verb', en: 'had', hi: 'के पास था', pron: 'HA-ten', type: 'Verb · haben past (wir)', why: 'haben past: wir hatten (this chapter).', ex: 'Wir hatten Besuch.', exEn: 'We had guests.' },
      { w: 'Besuch', role: 'r-object', en: 'guests', hi: 'मेहमान', pron: 'buh-ZOOKH', type: 'Noun · masc.', why: 'der Besuch (this chapter).', ex: 'Wir hatten Besuch.', exEn: 'We had guests.' },
      { w: '.', plain: true },
      { w: 'Meine', role: 'r-article', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive', why: 'meine (recycled — Possessiv & Familie).', ex: 'meine Tante', exEn: 'my aunt' },
      { w: 'Tante', role: 'r-subject', en: 'aunt', hi: 'मौसी', pron: 'TAN-tuh', type: 'Noun · fem.', why: 'die Tante (recycled — Possessiv & Familie).', ex: 'Meine Tante war da.', exEn: 'My aunt was there.' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb · sein past (sie)' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
      { w: 'da', role: 'r-place', en: 'there', hi: 'मौजूद', pron: 'dah', type: 'Adverb · place', why: 'da sein (recycled — Goethe Mini 3).', ex: 'Sie war da.', exEn: 'She was there.' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-subject', en: 'there', hi: 'वहाँ', pron: 'es', type: 'Pronoun', why: '"es gab" = there was (this chapter).', ex: 'Es gab Kuchen.', exEn: 'There was cake.' },
      { w: 'gab', role: 'r-verb', en: 'was (there)', hi: 'था', pron: 'gahp', type: 'Verb · geben past', why: '"es gab" + accusative (this chapter).', ex: 'Es gab einen Kuchen.', exEn: 'There was a cake.' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · acc.', why: 'masc. acc. ein → einen (recycled — Akkusativ).', ex: 'einen Kuchen', exEn: 'a cake' },
      { w: 'Kuchen', role: 'r-object', en: 'cake', hi: 'केक', pron: 'KOO-khen', type: 'Noun · masc.', why: 'der Kuchen (recycled — Essen & Trinken).', ex: 'Es gab einen Kuchen.', exEn: 'There was a cake.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'Tee', role: 'r-object', en: 'tea', hi: 'चाय', pron: 'tay', type: 'Noun · masc.', why: 'der Tee (recycled — Essen & Trinken).', ex: 'Es gab Tee.', exEn: 'There was tea.' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-article', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Abend', role: 'r-subject', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun · masc.', why: 'der Abend (recycled — Uhrzeit).', ex: 'Der Abend war schön.', exEn: 'The evening was lovely.' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb · sein past (er)' },
      { w: 'schön', role: 'r-adjective', en: 'lovely', hi: 'सुंदर', pron: 'shön', type: 'Adjective', why: 'sein + adjective (Chapter 13).', ex: 'Der Abend war schön.', exEn: 'The evening was lovely.' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction', why: 'aber (recycled — Kein & Nicht).', ex: 'aber ich war müde', exEn: 'but I was tired' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb · sein past (ich)' },
      { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
      { w: 'müde', role: 'r-adjective', en: 'tired', hi: 'थका हुआ', pron: 'MÜ-duh', type: 'Adjective', why: 'müde (recycled — Adjektive mit sein).', ex: 'Ich war müde.', exEn: 'I was tired.' },
      { w: '.', plain: true },
      { w: 'Früher', role: 'r-adverb', en: 'in the past', hi: 'पहले', pron: 'FRÜ-er', type: 'Adverb', why: 'früher (this chapter).', ex: 'Früher hatte ich mehr Energie.', exEn: 'I used to have more energy.' },
      { w: 'hatte', role: 'r-verb', en: 'had', hi: 'था', pron: 'HA-tuh', type: 'Verb · haben past (ich)', why: 'haben past; verb position 2 (this chapter).', ex: 'Früher hatte ich mehr Zeit.', exEn: 'I used to have more time.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'mehr', role: 'r-adverb', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Adverb' },
      { w: 'Energie', role: 'r-object', en: 'energy', hi: 'ऊर्जा', pron: 'e-nair-GEE', type: 'Noun · fem.', why: 'die Energie.', ex: 'Ich hatte mehr Energie.', exEn: 'I had more energy.' },
      { w: '!', plain: true }
    ],
    translation: 'Yesterday I was at home. We had guests. My aunt was there too. There was a cake and tea. The evening was lovely, but I was very tired. In the past I had more energy!'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_027_L001', speaker: 'Kai', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Doris, wo warst du letzte Woche?', en: 'Doris, where were you last week?' },
      { id: 'A1_027_L002', speaker: 'Doris', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich war in München. Es war ein toller Ausflug!', en: 'I was in Munich. It was a great trip!' },
      { id: 'A1_027_L003', speaker: 'Kai', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Was habt ihr gesehen?', en: 'What did you see?' },
      { id: 'A1_027_L004', speaker: 'Doris', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Wir waren im Museum. Es gab auch ein tolles Konzert.', en: 'We were at the museum. There was also a great concert.' },
      { id: 'A1_027_L005', speaker: 'Kai', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wart ihr lange da?', en: 'Were you there long?' },
      { id: 'A1_027_L006', speaker: 'Doris', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Drei Tage. Aber das Wetter war leider schlecht.', en: 'Three days. But the weather was unfortunately bad.' }
    ],
    transcript: 'Doris, wo warst du letzte Woche? Ich war in München. Es war ein toller Ausflug! Was habt ihr gesehen? Wir waren im Museum. Es gab auch ein tolles Konzert. Wart ihr lange da? Drei Tage. Aber das Wetter war leider schlecht.',
    translation: 'Doris, where were you last week? I was in Munich. It was a great trip! What did you see? We were at the museum. There was also a great concert. Were you there long? Three days. But the weather was unfortunately bad.',
    tokens: [
      { w: 'Doris' },
      { w: ',', plain: true },
      { w: 'wo' },
      { w: 'warst' },
      { w: 'du' },
      { w: 'letzte' },
      { w: 'Woche' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'war' },
      { w: 'in' },
      { w: 'München' },
      { w: '.', plain: true },
      { w: 'Es' },
      { w: 'war' },
      { w: 'ein' },
      { w: 'toller' },
      { w: 'Ausflug' },
      { w: '!', plain: true },
      { w: 'Was' },
      { w: 'habt' },
      { w: 'ihr' },
      { w: 'gesehen' },
      { w: '?', plain: true },
      { w: 'Wir' },
      { w: 'waren' },
      { w: 'im' },
      { w: 'Museum' },
      { w: '.', plain: true },
      { w: 'Es' },
      { w: 'gab' },
      { w: 'auch' },
      { w: 'ein' },
      { w: 'tolles' },
      { w: 'Konzert' },
      { w: '.', plain: true },
      { w: 'Wart' },
      { w: 'ihr' },
      { w: 'lange' },
      { w: 'da' },
      { w: '?', plain: true },
      { w: 'Drei' },
      { w: 'Tage' },
      { w: '.', plain: true },
      { w: 'Aber' },
      { w: 'das' },
      { w: 'Wetter' },
      { w: 'war' },
      { w: 'leider' },
      { w: 'schlecht' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wo war Doris letzte Woche?', qEn: 'Where was Doris last week?', options: ['zu Hause', 'in München', 'bei Max', 'im Kurs'], optionsEn: ['at home', 'in Munich', 'at Max\'s', 'in class'], answer: 1,
        explain: '"Ich war in München."' },
      { q: 'Wie lange waren sie dort?', qEn: 'How long were they there?', options: ['ein Tag', 'zwei Tage', 'drei Tage', 'eine Woche'], optionsEn: ['a day', 'two days', 'three days', 'a week'], answer: 2,
        explain: '"Drei Tage."' }
    ]
  },

  speaking: [
    { task: "Dein Partner fragt: Wo warst du letzte Woche?", taskEn: "Your partner asks: where were you last week?", de: "Ich war in München. Es war ein toller Ausflug!", en: "I was in Munich. It was a great trip!" },
    { task: "Dein Freund fragt: Was habt ihr gesehen?", taskEn: "Your friend asks: what did you see?", de: "Wir waren im Museum. Es gab auch ein tolles Konzert.", en: "We were at the museum. There was a great concert too." },
    { task: "Deine Lehrerin fragt: Wie war es gestern?", taskEn: "Your teacher asks: how was it yesterday?", de: "Gestern war ich müde und ich hatte viel Besuch.", en: "Yesterday I was tired and I had a lot of visitors." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about yesterday or last weekend using war and hatte. Say where you were (Ich war …), what you had (Ich hatte …), and what there was (Es gab …). Use at least one past-time word (gestern, vorgestern, früher).',
    starters: ['Gestern war ich …', 'Ich hatte …', 'Es gab …', 'Der Abend war …'],
    placeholder: 'Gestern war ich zu Hause. Ich hatte Besuch …',
    minWords: 18
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct past form: "Wo ___ du gestern?"',
      options: ['war', 'warst', 'waren', 'wart'],
      answer: 1,
      explain: 'du → warst.'
    },
    gap: {
      // sein past (ich) + haben past (ich)
      sentence: ['Gestern ', ' ich zu Hause und ', ' keine Zeit.'],
      gaps: [ { answer: 'war', accepts: ['war'] }, { answer: 'hatte', accepts: ['hatte'] } ],
      explain: 'ich war (sein); ich hatte (haben).'
    },
    match: {
      q: 'Match each subject to its past form of sein.',
      pairs: [
        { noun: 'ich', art: 'war' },
        { noun: 'du', art: 'warst' },
        { noun: 'wir', art: 'waren' },
        { noun: 'ihr', art: 'wart' }
      ]
    },
    builder: {
      target: 'Build: "I was at home."',
      bank: ['Ich', 'war', 'zu', 'Hause'],
      answer: ['Ich', 'war', 'zu', 'Hause'],
      roles: { 'Ich': 'r-subject', 'war': 'r-verb', 'zu': 'r-preposition', 'Hause': 'r-place' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the past of "ich bin"?', options: ['ich war', 'ich hatte', 'ich bin gewesen', 'ich warst'], answer: 0,
      explain: 'sein → ich war.' },
    { q: 'Complete: "Wir ___ gestern Besuch." (haben, past)', options: ['hatte', 'hatten', 'hattet', 'hattest'], answer: 1,
      explain: 'wir → hatten.' },
    { q: 'Which is correct?', options: ['Er warst hier.', 'Er war hier.', 'Er waren hier.', 'Er wart hier.'], answer: 1,
      explain: 'er/sie/es → war (no -st).' },
    { q: 'How do you say "there was a cake"?', options: ['Es gibt einen Kuchen.', 'Es gab einen Kuchen.', 'Es hatte einen Kuchen.', 'Es war einen Kuchen.'], answer: 1,
      explain: '"es gab" is the past of "es gibt".' },
    { q: 'Which word means "the day before yesterday"?', options: ['gestern', 'vorgestern', 'früher', 'morgen'], answer: 1,
      explain: 'vorgestern = the day before yesterday.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'sein → past: <span class="de">ich war, du warst, er war, wir waren, ihr wart, sie waren</span>.' },
    { c: 'r-verb', html: 'haben → past: <span class="de">ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten</span> (double-t).' },
    { c: 'r-time', html: 'Bonus: <span class="de">es gab</span> = there was/were · time words <span class="de">gestern, vorgestern, früher</span>.' }
  ],
  revisionTips: [
    'Memorise war and hatte as a pair — they cover almost all your A1 past tense.',
    'Remember ich = er/sie/es: war/war and hatte/hatte (no extra ending).',
    'Use "es gab" for "there was", and front a time word: "Gestern war ich …".'
  ]
};

window.CHAPTER = CHAPTER;
