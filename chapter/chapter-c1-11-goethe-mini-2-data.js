/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 11 (Goethe Mini 2)
   Checkpoint chapter — NO new grammar, NO new vocabulary.
   Reviews ONLY Chapters 7-10:
   Präpositionen mit Genitiv, Anspruchsvolle Präpositionen,
   Adjektive mit Präpositionalergänzungen, Nomen mit
   Präpositionalobjekt.
   Dialogue: Frauke and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-11-goethe-mini-2',
  phase: 'C1 · Kasus & Präpositionen',
  number: 11,
  title: 'Goethe Mini 2',
  titleEn: 'Checkpoint: Chapters 7–10',
  description: 'A Goethe Mini chapter is not another lesson. Its purpose is to verify whether the learner can use previous chapters automatically in authentic situations.',
  xp: 500,
  time: 115,
  difficulty: 'Checkpoint',
  nextChapter: { number: 12, title: 'Modalverben präzise verwenden', titleEn: 'Using modal verbs precisely' , href: 'chapter-c1-12-modalverben-praezise-verwenden.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Not a new lesson — a <em>mirror</em> for Chapters 7–10.',
    intro: 'Finalizing a research proposal under time pressure, Frauke and Timo split the tasks — she\'ll handle collaboration, he\'ll revise the text — naturally recycling Genitiv and advanced prepositions, plus fixed adjective and noun complements.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See all four Chapter 7-10 skills woven together naturally in one academic conversation'
    ],
    scene: 'Letzte Überarbeitung eines Forschungsantrags',
    femaleSpeakers: ['Frauke'],
    dialogue: [
      { speaker: 'Frauke', tokens: [
        { w: 'Aufgrund', role: 'r-preposition', en: 'due to', hi: 'के कारण', pron: 'OWF-grunt', type: 'Preposition + genitive' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Zeitknappheit', role: 'r-dativ', en: 'time pressure (gen.)', hi: 'समय की कमी के', pron: 'TSYTE-knap-hite', type: 'Noun · fem. genitive', why: 'die Zeitknappheit (this chapter).', ex: 'aufgrund der Zeitknappheit' },
        { w: 'brauchen', role: 'r-verb', en: 'need', hi: 'ज़रूरत है', pron: 'BROW-khen', type: 'Verb · brauchen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'eine', role: 'r-akkusativ', en: 'an (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'klare', role: 'r-akkusativ', en: 'clear', hi: 'स्पष्ट', pron: 'KLAH-ruh', type: 'Adjective' },
        { w: 'Aufgabenteilung', role: 'r-akkusativ', en: 'division of tasks', hi: 'कार्य विभाजन', pron: 'OWF-gah-ben-ty-lung', type: 'Noun · fem.', why: 'die Aufgabenteilung (this chapter).', ex: 'eine klare Aufgabenteilung' },
        { w: '.', plain: true }
      ], en: 'Due to the time pressure we need a clear division of tasks.', hi: 'Samay ki kami ke kaaran, humein spasht kaarya vibhaajan chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Einverstanden', role: 'r-subject', en: 'agreed', hi: 'सहमत', pron: 'INE-fer-shtan-den', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'übernehme', role: 'r-verb', en: 'take on', hi: 'संभालता हूँ', pron: 'ü-ber-NAY-muh', type: 'Verb · übernehmen (ich)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Überarbeitung', role: 'r-akkusativ', en: 'revision', hi: 'संशोधन', pron: 'ü-ber-AR-by-tung', type: 'Noun · fem.', why: 'die Überarbeitung (this chapter).', ex: 'die Überarbeitung übernehmen' },
        { w: 'des', role: 'r-dativ', en: 'the (masc. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Textes', role: 'r-dativ', en: 'text (gen.)', hi: 'पाठ के', pron: 'TEKS-tes', type: 'Noun · masc. genitive' },
        { w: '.', plain: true }
      ], en: 'Agreed. I take on the revision of the text.', hi: 'Sahmat. Main paath ke sanshodhan ki zimmedaari lete hoon.' },
      { speaker: 'Frauke', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'kümmere', role: 'r-verb', en: 'take care', hi: 'ध्यान रखती हूँ', pron: 'KÜ-me-ruh', type: 'Verb · sich kümmern (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'um', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'um', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Zusammenarbeit', role: 'r-akkusativ', en: 'collaboration', hi: 'सहयोग', pron: 'tsu-ZA-men-ar-byte', type: 'Noun · fem.', why: 'die Zusammenarbeit (this chapter).', ex: 'die Zusammenarbeit koordinieren' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Team', role: 'r-dativ', en: 'team (dat.)', hi: 'टीम के साथ', pron: 'teem', type: 'Noun · neut. dat.' },
        { w: '.', plain: true }
      ], en: 'Good. Then I take care of the collaboration with the team.', hi: 'Achha. Toh main team ke saath sahyog ka dhyaan rakhti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'zuversichtlich', role: 'r-akkusativ', en: 'confident', hi: 'आश्वस्त', pron: 'TSOO-fer-zikht-likh', type: 'Adjective', why: 'zuversichtlich = confident (this chapter).', ex: 'Bist du zuversichtlich?', exEn: 'Are you confident?' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'schaffen', role: 'r-verb', en: 'manage', hi: 'कर लेंगे', pron: 'SHA-fen', type: 'Verb · schaffen (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Are you confident that we will manage it?', hi: 'Kya tumhe vishwaas hai ki hum yeh kar lenge?' },
      { speaker: 'Frauke', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Da', role: 'r-conjunction', en: 'since', hi: 'चूंकि', pron: 'dah', type: 'Conjunction · da' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'gut', role: 'r-akkusativ', en: 'well', hi: 'अच्छे से', pron: 'goot', type: 'Adverb' },
        { w: 'zusammenarbeiten', role: 'r-verb', en: 'collaborate', hi: 'साथ काम करते हैं', pron: 'tsu-ZA-men-ar-by-ten', type: 'Verb · zusammenarbeiten (Satzende)' },
        { w: ',', plain: true },
        { w: 'wird', role: 'r-verb', en: 'will', hi: 'होगा', pron: 'virt', type: 'Verb · werden' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'bestimmt', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'be-SHTIMT', type: 'Adverb' },
        { w: 'gelingen', role: 'r-verb', en: 'succeed', hi: 'सफल', pron: 'ge-LI-gen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes. Since we collaborate well, it will surely succeed.', hi: 'Haan. Chunki hum achhe se saath kaam karte hain, yeh zaroor safal hoga.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'fangen', role: 'r-verb', en: 'let us start', hi: 'शुरू करते हैं', pron: 'FAN-gen', type: 'Verb · anfangen (wir)', lexicalUnit: 'anfangen' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'gleich', role: 'r-adverb', en: 'right away', hi: 'अभी', pron: 'glykh', type: 'Adverb' },
        { w: 'an', role: 'r-verb', en: '(prefix of anfangen)', hi: '', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anfangen' },
        { w: '.', plain: true }
      ], en: 'Then let us start right away.', hi: 'Toh hum abhi shuru karte hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A Goethe Mini chapter is <b>not another lesson</b> — it measures whether Chapters 7–10 have become automatic. Zero new content: only <span class="de r-genitiv">Genitivpräpositionen</span>, <span class="de r-anspruchsvoll">anspruchsvolle Präpositionen</span>, <span class="de r-adjektiv">Adjektiv-Präposition-Kombinationen</span>, and <span class="de r-nomen">Nomen-Präposition-Kombinationen</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'This is GOETHE MINI 2 — a checkpoint chapter reviewing ONLY Chapters 7-10, with ZERO new grammar or vocabulary. Covered material: Chapter 7 Genitive prepositions (trotz, während, wegen, aufgrund, infolge, mittels, hinsichtlich, zugunsten, kraft, ungeachtet, anlässlich); Chapter 8 advanced prepositions for topic/cause/method/purpose/scope (hinsichtlich, angesichts, dank, mithilfe, im Rahmen, zugunsten); Chapter 9 fixed adjective-preposition combinations (interessiert an, überzeugt von, geeignet für, verantwortlich für, stolz auf, vertraut mit, fähig zu, bereit zu, begeistert von); Chapter 10 fixed noun-preposition combinations (Interesse an, Einfluss auf, Verantwortung für, Kenntnis von, Angst vor, Suche nach, Unterschied zwischen, Umgang mit). ' +
    'Do NOT expect, require, or introduce ANY grammar or vocabulary beyond these four chapters — flag nothing from C1 Chapter 11 onward or from C2. The most important thing to catch: whether the learner integrates MULTIPLE Chapter 7-10 skills naturally together (Genitive prepositions + advanced prepositions + adjective/noun-preposition pairs in the same piece of writing), since that is what this checkpoint measures. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check Genitive preposition case-marking, advanced preposition precision/register, and fixed adjective/noun-preposition pairings — drawing only on Chapters 7-10 concepts.\n' +
    '- Flag wrong prepositions paired with fixed adjectives/nouns (e.g. "interessiert für" instead of "interessiert an") same as in Chapters 9-10.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Readiness check:</b> one sentence on whether the learner combined multiple Chapter 7-10 skills naturally, as a real C1 exam would require.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — Chapters 7-10 are automatic for you. Ready to move on to verbs with prepositional objects.',
    mid: 'Good — but re-read whichever chapter you found hardest before continuing.',
    low: 'Worth repeating Chapters 7-10 before continuing — this checkpoint exists to catch that now, not on exam day.'
  },

  parserSentence: [
    { w: 'Aufgrund', role: 'r-genitiv' }, { w: 'der', role: 'plain' }, { w: 'neuen', role: 'plain' }, { w: 'Ergebnisse', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: this checkpoint measures whether Chapters 7-10 are automatic, not new content.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Frauke and Timo finalize a research proposal, naturally weaving all four chapters\' skills together.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Review key words recycled from Chapters 7-10 — full popups with two examples, case, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Review the Revision Map and Skills Map covering Chapters 7-10 — zero new grammar.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read an academic research article and a newspaper commentary, identifying prepositional structures.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify Genitive prepositions, advanced prepositions, and fixed combinations in a lecture and interview.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give a Goethe C1-style presentation, discussion, and collaborative task using Chapters 7-10 naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Improve a B2 text into formal C1 German and write a 350-400 word academic report.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Complete integrated grammar, vocabulary, and academic editing exercises from Chapters 7-10 only.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 500 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review your Goethe C1 readiness report and recommended revision order.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 5 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: '90 grammar questions and 60 vocabulary questions covering Chapters 7-10, plus a full academic report task.',
      pdfUrl: '/pdfs/homework.pdf', size: '15 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete Revision Map, Skills Map, and Readiness Scale for Chapters 7-10.',
      pdfUrl: '/pdfs/grammar.pdf', size: '13 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Aufgrund der neuen Ergebnisse sollten wir den Antrag überarbeiten.', text: 'Combine Genitive preposition (Ch.7) with formal register' },
    { de: 'Hinsichtlich der Methodik bin ich überzeugt von unserem Ansatz.', text: 'Combine advanced preposition (Ch.8) with adjective-preposition (Ch.9)' },
    { de: 'Unser Interesse an diesem Thema sollten wir betonen.', text: 'Use a fixed noun-preposition combination (Ch.10) in nominal style' },
    { de: 'Angesichts der Deadline sollten wir die Verantwortung für die Abschnitte aufteilen.', text: 'Combine advanced preposition (Ch.8) with noun-preposition (Ch.10)' },
    { de: 'Ich bin fähig zu schneller Arbeit und stolz auf unsere Zusammenarbeit.', text: 'Combine two different adjective-preposition pairs (Ch.9) in one utterance' }
  ],

  vocab: [
    { de: 'die Überarbeitung', art: 'die', gender: 'f', plural: 'Überarbeitungen', pos: 'noun', level: 'C1', register: 'written', en: 'revision', hi: 'सुधार', ex: 'Die Überarbeitung des Antrags war notwendig.', exEn: 'The revision of the proposal was necessary.', exHi: 'Prastaav ka sanshodhan zaroori tha.', ex2: 'Sie haben eine gründliche Überarbeitung vorgenommen.', ex2En: 'They\'ve carried out a thorough revision.', ex2Hi: 'Unhone ek gahan sanshodhan kiya hai.' },
    { de: 'die Zusammenarbeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'C1', register: 'both', en: 'cooperation', hi: 'सहयोग', ex: 'Die Zusammenarbeit zwischen den Teams verlief reibungslos.', exEn: 'The cooperation between the teams went smoothly.', exHi: 'Teamon ke beech sahyog sugam roop se hua.', ex2: 'Sie haben die Zusammenarbeit intensiviert.', ex2En: 'They\'ve intensified the cooperation.', ex2Hi: 'Unhone sahyog ko tez kiya hai.' },
    { de: 'die Aufgabenteilung', art: 'die', gender: 'f', plural: 'Aufgabenteilungen', pos: 'noun', level: 'C1', register: 'written', en: 'division of tasks', hi: 'कार्य विभाजन', ex: 'Eine klare Aufgabenteilung erleichtert die Arbeit.', exEn: 'A clear division of tasks makes the work easier.', exHi: 'Ek spasht kaary vibhaajan kaam ko aasaan banaata hai.', ex2: 'Sie haben die Aufgabenteilung festgelegt.', ex2En: 'They\'ve established the division of tasks.', ex2Hi: 'Unhone kaary vibhaajan tay kiya hai.' },
    { de: 'die Zeitknappheit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'C1', register: 'written', en: 'time pressure, shortage of time', hi: 'समय की कमी', ex: 'Trotz der Zeitknappheit blieb die Qualität hoch.', exEn: 'Despite the time pressure, the quality remained high.', exHi: 'Samay ki kami ke bawajood, gunvatta uchch rahi.', ex2: 'Sie haben die Zeitknappheit erfolgreich bewältigt.', ex2En: 'They\'ve successfully managed the time pressure.', ex2Hi: 'Unhone samay ki kami ka safaltapoorvak saamnaa kiya hai.' },
    { de: 'zuversichtlich', pos: 'adjective', level: 'C1', register: 'both', en: 'confident', hi: 'आश्वस्त', ex: 'Trotz der Herausforderungen bin ich zuversichtlich.', exEn: 'Despite the challenges, I am confident.', exHi: 'Chunautiyon ke bawajood, main aashvast hoon.', ex2: 'Sie haben sich zuversichtlich gezeigt.', ex2En: 'They\'ve shown themselves to be confident.', ex2Hi: 'Unhone khud ko aashvast dikhaaya hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Revisionskarte (Revision Map)',
      body: [ 'Chapter 7 → Chapter 8 → Chapter 9 → Chapter 10 → Goethe Mini 2. This checkpoint tests all four chapters together, not in isolation.' ],
      hinglish: 'Yeh checkpoint Chapter 7 se 10 tak ka sab kuch ek saath test karta hai. Chaaron chapters ek hi cheez ke alag-alag roop hain \u2014 preposition ke saath sahi case chunna \u2014 isliye inhe saath mein dekhna hi sahi hai.'
    },
    {
      title: 'Kompetenzkarte (Skills Map)',
      body: [ 'Grammar → Vocabulary → Reading → Listening → Speaking → Writing → Integrated Skills. Every skill must recycle Chapters 7-10 exclusively.' ],
      hinglish: 'Har skill \u2014 reading, listening, speaking, writing \u2014 wahi Chapter 7 se 10 wala material dobara laati hai. Kuch naya nahi aayega.'
    },
    {
      title: 'Kapitel 7 — Präpositionen mit Genitiv (Rückblick)',
      body: [ 'trotz, w\u00e4hrend, wegen, aufgrund, infolge, mittels, hinsichtlich, zugunsten, kraft, ungeachtet, anl\u00e4sslich. The register is only convincing if the noun phrase is right: masculine/neuter <b>des</b> + <b>-s</b>, feminine/plural <b>der</b> \u2014 and <b>von</b> + Dativ when there is no article to carry the Genitiv (aufgrund von Problemen).' ],
      hinglish: 'trotz, w\u00e4hrend, wegen, aufgrund, infolge, mittels, hinsichtlich, zugunsten, kraft, ungeachtet, anl\u00e4sslich. Sirf preposition sahi hona kaafi nahi \u2014 uske baad wala noun phrase bhi sahi chahiye: masculine aur neuter mein <b>des</b> + <b>-s</b>, feminine aur plural mein <b>der</b>. Aur jab article hai hi nahi, to <b>von</b> + Dativ (<span class="de">aufgrund von Problemen</span>).'
    },
    {
      title: 'Kapitel 8 — Anspruchsvolle Präpositionen (Rückblick)',
      body: [ 'Topic (hinsichtlich, in Bezug auf), cause (angesichts, dank), method (mithilfe, anhand), purpose (zugunsten), scope (im Rahmen, im Bereich). Remember they do not all take the Genitiv: <b>in Bezug auf</b> takes the Akkusativ, <b>im Vergleich zu</b> and <b>dank</b> the Dativ, and <b>zufolge</b> follows its noun.' ],
      hinglish: 'Topic (hinsichtlich, in Bezug auf), cause (angesichts, dank), method (mithilfe, anhand), purpose (zugunsten), scope (im Rahmen, im Bereich). Yaad rakho ki yeh sab Genitiv nahi lete \u2014 <b>in Bezug auf</b> Akkusativ leta hai, <b>im Vergleich zu</b> aur <b>dank</b> Dativ, aur <b>zufolge</b> apne noun ke baad aata hai.'
    },
    {
      title: 'Kapitel 9 — Adjektive mit Präpositionalergänzungen (Rückblick)',
      body: [ 'Fixed pairs: interessiert an, \u00fcberzeugt von, geeignet f\u00fcr, verantwortlich f\u00fcr, stolz auf, vertraut mit, f\u00e4hig zu, bereit zu, begeistert von. Learn each with its case \u2014 <b>f\u00fcr/auf/\u00fcber</b> take the Akkusativ, <b>an/von/mit/zu</b> the Dativ \u2014 and remember the adjective goes to the END of the clause.' ],
      hinglish: 'Fixed jodiyan: interessiert an, \u00fcberzeugt von, geeignet f\u00fcr, verantwortlich f\u00fcr, stolz auf, vertraut mit, f\u00e4hig zu, bereit zu, begeistert von. Har ek ko uske case ke saath yaad karo \u2014 <b>f\u00fcr/auf/\u00fcber</b> Akkusativ lete hain aur <b>an/von/mit/zu</b> Dativ. Aur adjective sentence ke <b>end</b> mein aata hai: <span class="de">Ich bin an dem Thema interessiert.</span>'
    },
    {
      title: 'Kapitel 10 — Nomen mit Präpositionalobjekt (Rückblick)',
      body: [ 'Fixed pairs: Interesse an, Einfluss auf, Verantwortung f\u00fcr, Kenntnis von, Angst vor, Suche nach, Unterschied zwischen, Umgang mit. The shortcut: a noun usually keeps its verb\u2019s preposition (teilnehmen an \u2192 die Teilnahme an) \u2014 the main exception being sich interessieren <b>f\u00fcr</b> but das Interesse <b>an</b>.' ],
      hinglish: 'Fixed jodiyan: Interesse an, Einfluss auf, Verantwortung f\u00fcr, Kenntnis von, Angst vor, Suche nach, Unterschied zwischen, Umgang mit. Shortcut yaad rakho \u2014 noun aksar apne verb ka preposition hi rakhta hai (<span class="de">teilnehmen an</span> se <span class="de">die Teilnahme an</span>). Sabse badi exception: <span class="de">sich interessieren <b>f\u00fcr</b></span> par <span class="de">das Interesse <b>an</b></span>.'
    },
    {
      title: 'Bereitschaftsskala (Readiness Scale)',
      body: [ 'Excellent → Very Good → Good → Needs Revision → Repeat Chapters. Use this scale honestly to plan your next study session.' ],
      hinglish: 'Apne score ko imaandaari se dekho \u2014 yeh scale batata hai ki aage badhna hai ya kisi chapter par wapas jaana hai.'
    },
    {
      title: 'Erinnerung (Memory Reminder)',
      body: [ 'A Goethe Mini chapter is not another lesson. Its purpose is to verify whether the learner can use previous chapters automatically in authentic situations.' ],
      note: 'If you find yourself stopping to recall a specific preposition rule, that chapter needs another revision pass before moving to Chapter 12.',
      hinglish: 'Yeh koi naya lesson nahi hai \u2014 sirf yeh dekhta hai ki pichle chapters automatic hue ya nahi. Agar kisi preposition ka case sochna pad raha hai, to us chapter par ek baar aur jaao.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Kurzmeldung: Neue Studie zur Bildschirmzeit',
    titleEn: 'Reading A — Short report: new study on screen time',
    tokens: [
      { w: 'Angesichts', role: 'r-anspruchsvoll', en: 'in view of (formal Genitiv preposition)', hi: 'को देखते हुए', type: 'Präposition · Gen.' },
      { w: 'der', role: 'plain', en: 'the (plural gen.)', hi: 'इन', type: 'Article · Gen.' },
      { w: 'vorliegenden', role: 'plain', en: 'available', hi: 'उपलब्ध', type: 'Adjective · Gen.' },
      { w: 'Daten', role: 'plain', en: 'data (Satzende)', hi: 'आँकड़ों (Satzende)', type: 'Noun · plural' },
      { w: 'zeigt', role: 'plain', en: 'shows', hi: 'दिखाता है', type: 'Verb (Präsens)' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'deutlicher', role: 'plain', en: 'clear', hi: 'स्पष्ट', type: 'Adjective' },
      { w: 'Einfluss', role: 'r-nomen', en: 'influence (fixed noun, "auf" + Akkusativ)', hi: 'प्रभाव', type: 'Noun · masc.' },
      { w: 'auf', role: 'r-nomen', en: 'on (Akkusativ, fixed with "Einfluss")', hi: 'पर', type: 'Präposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'यह', type: 'Article' },
      { w: 'Schlafqualität', role: 'plain', en: 'sleep quality (Satzende)', hi: 'नींद की गुणवत्ता (Satzende)', type: 'Noun · fem.' },
      { w: 'von', role: 'plain', en: 'of', hi: 'की', type: 'Preposition · Dat.' },
      { w: 'Jugendlichen', role: 'plain', en: 'teenagers (Satzende)', hi: 'किशोरों (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Pronoun · indefinite' },
      { w: 'mehr', role: 'plain', en: 'more', hi: 'ज़्यादा', type: 'Adjective' },
      { w: 'als', role: 'plain', en: 'than', hi: 'से', type: 'Konjunktion' },
      { w: 'drei', role: 'plain', en: 'three', hi: 'तीन', type: 'Number' },
      { w: 'Stunden', role: 'plain', en: 'hours (Satzende)', hi: 'घंटे (Satzende)', type: 'Noun · plural' },
      { w: 'täglich', role: 'plain', en: 'daily', hi: 'रोज़ाना', type: 'Adverb' },
      { w: 'am', role: 'plain', en: 'on the', hi: 'पर', type: 'Contraction · an dem' },
      { w: 'Bildschirm', role: 'plain', en: 'screen (Satzende)', hi: 'स्क्रीन (Satzende)', type: 'Noun · masc.' },
      { w: 'verbringt', role: 'plain', en: 'spends (Satzende)', hi: 'बिताता है (Satzende)', type: 'Verb · verbringen (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'schläft', role: 'plain', en: 'sleeps', hi: 'सोता है', type: 'Verb · schlafen' },
      { w: 'laut', role: 'plain', en: 'according to', hi: 'के अनुसार', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Studie', role: 'plain', en: 'study (Satzende)', hi: 'अध्ययन (Satzende)', type: 'Noun · fem.' },
      { w: 'im', role: 'plain', en: 'on', hi: 'औसतन', type: 'Contraction · in dem' },
      { w: 'Schnitt', role: 'plain', en: 'average (Satzende)', hi: '(Satzende)', type: 'Noun · masc.' },
      { w: 'vierzig', role: 'plain', en: 'forty', hi: 'चालीस', type: 'Number' },
      { w: 'Minuten', role: 'plain', en: 'minutes (Satzende)', hi: 'मिनट (Satzende)', type: 'Noun · plural' },
      { w: 'weniger', role: 'plain', en: 'less (Satzende)', hi: 'कम (Satzende)', type: 'Adjective · Komparativ' },
      { w: '.', plain: true }
    ],
    translation: 'In view of the available data, a clear influence on the sleep quality of teenagers is evident. Whoever spends more than three hours daily on screens sleeps, according to the study, on average forty minutes less.',
    comprehension: [
      { q: 'Welche Funktion hat "angesichts"?', options: ['Formaler Grund für eine Schlussfolgerung', 'Zeit', 'Ort'], answer: 0 },
      { q: 'Welche Präposition passt zu "Einfluss"?', options: ['auf', 'für', 'von'], answer: 0 },
      { q: 'Wie viel weniger schlafen Vielnutzer laut der Studie?', options: ['Etwa vierzig Minuten', 'Zwei Stunden', 'Gar nicht weniger'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungskommentar (Revision)',
    titleEn: 'Reading B — Newspaper commentary',
    tokens: [
      { w: 'Trotz', role: 'r-genitiv', en: 'despite (Genitive preposition, Ch.7)', hi: 'iske bawajood (Genitive preposition, Ch.7)', type: 'Präposition · Gen.' },
      { w: 'der', role: 'plain', en: 'the (plural gen.)', hi: 'in', type: 'Article · Gen.' },
      { w: 'Proteste', role: 'plain', en: 'protests (Satzende)', hi: 'pradarshan ke (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'hai', type: 'Verb · sein (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Regierung', role: 'plain', en: 'government (Satzende)', hi: 'sarkaar (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'überzeugt', role: 'r-adjektiv', en: 'convinced (fixed adjective, "von" + Dativ, Ch.9)', hi: 'vishvast hai (fixed adjective, "von" + Dativ, Ch.9)', type: 'Adjective' },
      { w: 'von', role: 'r-adjektiv', en: 'of (Dativ, fixed with "überzeugt")', hi: '(Dativ, "überzeugt" ke saath fixed)', type: 'Präposition · Dat.' },
      { w: 'ihrer', role: 'plain', en: 'her/its (fem. dat.)', hi: 'apni', type: 'Possessivartikel · Dat.' },
      { w: 'Strategie', role: 'plain', en: 'strategy (Satzende)', hi: 'raNaniti se (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Despite the protests, the government is convinced of its strategy.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_011_L001', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, bis wann müssen wir den Antrag fertig haben? Die Frist rückt näher.', en: 'Timo, by when do we need to have the proposal finished? The deadline is approaching.' },
      { id: 'C1_011_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Bis Freitag. Ich übernehme die Überarbeitung des Textes, wenn du dich um die Kooperation kümmerst.', en: 'By Friday. I\'ll take over revising the text if you take care of the collaboration.' },
      { id: 'C1_011_L003', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Abgemacht, ich rufe die Partneruniversität gleich an.', en: 'Deal, I\'ll call the partner university right away.' },
      { id: 'C1_011_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Perfekt, dann schaffen wir das rechtzeitig.', en: 'Perfect, then we\'ll manage it in time.' }
    ],
    transcript: 'Timo, bis wann müssen wir den Antrag fertig haben? Die Frist rückt näher. Bis Freitag. Ich übernehme die Überarbeitung des Textes, wenn du dich um die Kooperation kümmerst. Abgemacht, ich rufe die Partneruniversität gleich an. Perfekt, dann schaffen wir das rechtzeitig.',
    translation: 'Timo, by when do we need to have the proposal finished? The deadline is approaching. By Friday. I\'ll take over revising the text if you take care of the collaboration. Deal, I\'ll call the partner university right away. Perfect, then we\'ll manage it in time.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'bis' },
      { w: 'wann' },
      { w: 'müssen' },
      { w: 'wir' },
      { w: 'den' },
      { w: 'Antrag' },
      { w: 'fertig' },
      { w: 'haben' },
      { w: '?', plain: true },
      { w: 'Die' },
      { w: 'Frist' },
      { w: 'rückt' },
      { w: 'näher' },
      { w: '.', plain: true },
      { w: 'Bis' },
      { w: 'Freitag' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'übernehme' },
      { w: 'die' },
      { w: 'Überarbeitung' },
      { w: 'des' },
      { w: 'Textes' },
      { w: ',', plain: true },
      { w: 'wenn' },
      { w: 'du' },
      { w: 'dich' },
      { w: 'um' },
      { w: 'die' },
      { w: 'Kooperation' },
      { w: 'kümmerst' },
      { w: '.', plain: true },
      { w: 'Abgemacht' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'rufe' },
      { w: 'die' },
      { w: 'Partneruniversität' },
      { w: 'gleich' },
      { w: 'an' },
      { w: '.', plain: true },
      { w: 'Perfekt' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'schaffen' },
      { w: 'wir' },
      { w: 'das' },
      { w: 'rechtzeitig' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Bis wann muss der Antrag fertig sein?', qEn: 'By when must the proposal be ready?', options: ['bis Montag', 'bis Freitag', 'bis Ende des Monats', 'es gibt keine Frist'], optionsEn: ['by Monday', 'by Friday', 'by the end of the month', 'there is no deadline'], answer: 1,
        explain: '"Bis Freitag."' },
      { q: 'Worum kümmert sich Frauke?', qEn: 'What does Frauke take care of?', options: ['die Überarbeitung des Textes', 'die Kooperation mit der Partneruniversität', 'die Finanzen', 'die Präsentation'], optionsEn: ['the revision of the text', 'the cooperation with the partner university', 'the finances', 'the presentation'], answer: 1,
        explain: '"… wenn du dich um die Kooperation kümmerst" → she calls the partner university.' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Timo fragt, bis wann der Antrag fertig sein muss. Teilt die Aufgaben.", taskEn: "Timo asks when the proposal must be ready. Divide the tasks.", de: "Bis Freitag. Ich übernehme die Überarbeitung, wenn du die Daten prüfst.", en: "By Friday. I'll take the revision if you check the data." },
    { task: "Prüfung, Teil 1: Halte einen kurzen Vortrag zur Zusammenarbeit im Team.", taskEn: "Exam, Part 1: give a short talk on teamwork.", de: "Hinsichtlich der Aufgabenteilung bin ich zuversichtlich, trotz der Zeitknappheit.", en: "With regard to the division of tasks I'm confident, despite the time pressure." },
    { task: "Prüfung, Teil 2: Diskutiere ein akademisches Thema förmlich.", taskEn: "Exam, Part 2: discuss an academic topic formally.", de: "Angesichts der Datenlage bin ich skeptisch, allerdings ist Ihr Einwand berechtigt.", en: "Given the data I'm sceptical, though your objection is justified." },
    { task: "Prüfung, Teil 3: Löst gemeinsam ein Problem im Institut.", taskEn: "Exam, Part 3: solve a problem in the institute together.", de: "Aufgrund der Raumnot schlage ich Hybridseminare vor; einigen wir uns auf einen Versuch.", en: "Owing to the room shortage I propose hybrid seminars; let's agree on a trial." },
    { task: "Deine Partnerin fragt, ob ihr die Frist halten könnt.", taskEn: "Your partner asks whether you can meet the deadline.", de: "Mithilfe der Vorarbeiten reichen wir den Antrag fristgerecht ein.", en: "With the help of the preliminary work we'll submit on time." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (150-200 words): Improve a B2-level text into authentic C1 German by upgrading its prepositions, adjective structures, noun structures, and register — recycling ONLY Chapters 7-10.\n\nTASK 2 — Academic report (350-400 words): Demonstrate Genitive prepositions, advanced prepositions, adjective-preposition combinations, noun-preposition combinations, formal register, and nominal style.',
    starters: ['Aufgrund der neuen Ergebnisse sind wir überzeugt von unserem Ansatz.', 'Hinsichtlich der Methodik zeigt sich ein deutlicher Einfluss auf die Ergebnisse.'],
    placeholder: 'Aufgrund der aktuellen Datenlage ist unser Interesse an diesem Thema gewachsen. Hinsichtlich der Methodik sind wir überzeugt von unserem Ansatz...',
    minWords: 200
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which pair correctly completes "interessiert" (Chapter 9 review)?',
      options: ['interessiert an', 'interessiert für', 'interessiert von'],
      answer: 0,
      explain: '"Interessiert" always pairs with "an" — reviewed from Chapter 9.'
    },
    gap: {
      sentence: ['Wir übernehmen die Verantwortung ', ' die weitere Analyse.'],
      gaps: [ { answer: 'für', accepts: ['für'] } ],
      explain: '"Verantwortung" (Chapter 10) always pairs with "für" + Akkusativ.'
    },
    match: {
      q: 'Match each expression to the chapter it comes from.',
      pairs: [
        { noun: 'aufgrund / trotz / mittels', art: 'Kapitel 7' },
        { noun: 'hinsichtlich / angesichts / im Rahmen', art: 'Kapitel 8' },
        { noun: 'überzeugt von / stolz auf', art: 'Kapitel 9' },
        { noun: 'Interesse an / Verantwortung für', art: 'Kapitel 10' }
      ]
    },
    builder: {
      target: 'Build: "Despite the time pressure, I am confident." (Ch.7 review)',
      bank: ['Trotz', 'der', 'Zeitknappheit', 'bin', 'ich', 'zuversichtlich', '.'],
      answer: ['Trotz', 'der', 'Zeitknappheit', 'bin', 'ich', 'zuversichtlich', '.'],
      roles: { 'Trotz': 'r-genitiv' }
    },
    errorCorrection: {
      title: 'Error correction (mixed review)',
      wrong: 'Unser Interesse für dieses Thema ist groß.',
      right: 'Unser Interesse an diesem Thema ist groß.',
      explain: 'Reviewing Chapter 10: "Interesse" pairs with "an", not "für".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which chapter covers Genitive prepositions like "trotz" and "aufgrund"?', options: ['Chapter 7', 'Chapter 9', 'Chapter 10'], answer: 0,
      explain: 'Chapter 7 (Präpositionen mit Genitiv) covers these formal Genitive prepositions.' },
    { q: 'Which chapter covers "hinsichtlich" and "im Rahmen"?', options: ['Chapter 8', 'Chapter 9', 'Chapter 10'], answer: 0,
      explain: 'Chapter 8 (Anspruchsvolle Präpositionen) covers advanced prepositional expressions.' },
    { q: 'Which chapter covers "überzeugt von" and "stolz auf"?', options: ['Chapter 9', 'Chapter 7', 'Chapter 10'], answer: 0,
      explain: 'Chapter 9 (Adjektive mit Präpositionalergänzungen) covers fixed adjective-preposition pairs.' },
    { q: 'Which chapter covers "Interesse an" and "Verantwortung für"?', options: ['Chapter 10', 'Chapter 8', 'Chapter 9'], answer: 0,
      explain: 'Chapter 10 (Nomen mit Präpositionalobjekt) covers fixed noun-preposition pairs.' },
    { q: 'What does this Goethe Mini checkpoint measure?', options: ['Whether Chapters 7-10 have become automatic', 'New C1 grammar not yet taught', 'Only vocabulary memorization'], answer: 0,
      explain: 'A Goethe Mini chapter verifies automatic, natural use of prior chapters in authentic situations.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-genitiv', html: 'This checkpoint introduces zero new grammar — it recycles Chapters 7-10: Genitive prepositions, advanced prepositions, and fixed adjective/noun-preposition combinations.' },
    { c: 'r-adjektiv', html: 'Real C1 fluency means combining several of these skills naturally in one sentence, not using them one at a time.' },
    { c: 'r-nomen', html: 'Use your Readiness Scale result honestly: Excellent/Very Good → move on; Good/Needs Revision → repeat the weakest chapter before Chapter 12.' }
  ],
  revisionTips: [
    'Identify your single weakest chapter from this Mini Test and re-read only that chapter\'s Grammar section before continuing.',
    'Write one paragraph that deliberately combines a Genitive preposition (Ch.7), an advanced preposition (Ch.8), and one adjective-preposition pair (Ch.9).',
    'Create flashcards mixing noun-preposition (Ch.10) and adjective-preposition (Ch.9) pairs to test which case each requires.'
  ]
};

window.CHAPTER = CHAPTER;
