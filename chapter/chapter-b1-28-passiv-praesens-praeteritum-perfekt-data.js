/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 28
   "Passiv: Präsens, Präteritum & Perfekt" — the three most
   important Passive tenses. Does NOT introduce Zustandspassiv,
   Passiv Futur, Passiv Plusquamperfekt, Passiv mit Modalverben,
   or B2 passive structures.
   IMPORTANT: dialogue uses ONLY Insa and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-28 list (~100 items) — an
   environment/climate-action theme (Klimawandel, Umweltschutz,
   Recycling, Plogging, Bioprodukte…) — a natural fit for Passive:
   news reports and measures on what IS being done, not who does it.
============================================================ */
const CHAPTER = {
  id: 'b1-28-passiv-praesens-praeteritum-perfekt',
  phase: 'B1 · Phase 1',
  number: 28,
  title: 'Passiv: Präsens, Präteritum & Perfekt',
  titleEn: 'Passive: present, simple past & perfect',
  description: 'Expand the passive voice across three tenses: wird repariert (Präsens), wurde repariert (Präteritum), ist repariert worden (Perfekt) — and the crucial worden vs geworden distinction.',
  xp: 290,
  time: 55,
  difficulty: 'Intermediate',
  nextChapter: { number: 29, title: 'Passiv mit Modalverben', titleEn: 'Passive with modal verbs' , href: 'chapter-b1-29-passiv-modalverben.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'One action, <em>three points in time.</em>',
    intro: 'At an environmental-action fair, Insa and Timo read reports on recycling improvements, planted trees, and monitored drinking water — the same action phrased in three tenses: wird verbessert, wurde verbessert, ist verbessert worden.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear Passiv Präsens, Präteritum and Perfekt used naturally in one conversation'
    ],
    scene: 'Die Umweltaktion',
    femaleSpeakers: ['Insa'],
    dialogue: [
      { speaker: 'Insa', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Müll', role: 'r-subject', en: 'trash', hi: 'कचरा', pron: 'mül', type: 'Noun · masc.' },
        { w: 'wird', role: 'r-verb', en: 'is', hi: 'किया जाता है', pron: 'virt', type: 'Verb · werden (Passiv Präsens)' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'gut', role: 'r-adverb', en: 'well', hi: 'अच्छे से', pron: 'goot', type: 'Adverb' },
        { w: 'getrennt', role: 'r-verb', en: 'sorted', hi: 'अलग', pron: 'ge-TRENT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'The trash is sorted well here.', hi: 'Yahaan kachra achhe se alag kiya jaata hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Letztes', role: 'r-akkusativ', en: 'last', hi: 'पिछले', pron: 'LETS-tes', type: 'Adjective' },
        { w: 'Jahr', role: 'r-akkusativ', en: 'year', hi: 'साल', pron: 'yahr', type: 'Noun · neut.' },
        { w: 'wurde', role: 'r-verb', en: 'was', hi: 'किया गया था', pron: 'VUR-duh', type: 'Verb · werden (Passiv Präteritum)' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Recycling', role: 'r-subject', en: 'recycling', hi: 'रीसाइक्लिंग', pron: 'ree-SY-kling', type: 'Noun · neut.' },
        { w: 'verbessert', role: 'r-verb', en: 'improved', hi: 'बेहतर', pron: 'fer-BE-sert', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Last year the recycling was improved.', hi: 'Pichhle saal recycling behtar kiya gaya tha.' },
      { speaker: 'Insa', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'viele', role: 'r-subject', en: 'many', hi: 'कई', pron: 'FEE-luh', type: 'Determiner' },
        { w: 'Bäume', role: 'r-subject', en: 'trees', hi: 'पेड़', pron: 'BOY-muh', type: 'Noun · plural' },
        { w: 'sind', role: 'r-verb', en: 'have', hi: 'गए हैं', pron: 'zint', type: 'Verb · sein (helper)' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'gepflanzt', role: 'r-verb', en: 'planted', hi: 'लगाए', pron: 'ge-PFLANTST', type: 'Partizip II' },
        { w: 'worden', role: 'r-verb', en: 'been', hi: '', pron: 'VOR-den', type: 'Partizip II · werden (Passiv Perfekt, Satzende)', why: 'sein + Partizip II + worden = Passiv Perfekt (this chapter).', ex: 'Bäume sind gepflanzt worden.', exEn: 'Trees have been planted.' },
        { w: '.', plain: true }
      ], en: 'And many trees have already been planted.', hi: 'Aur kayi ped pehle se lagaye ja chuke hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wird', role: 'r-verb', en: 'is', hi: 'किया जाता है', pron: 'virt', type: 'Verb · werden (Passiv Präsens)' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Trinkwasser', role: 'r-subject', en: 'drinking water', hi: 'पीने का पानी', pron: 'TRINK-va-ser', type: 'Noun · neut.' },
        { w: 'regelmäßig', role: 'r-adverb', en: 'regularly', hi: 'नियमित रूप से', pron: 'RAY-gel-mai-sikh', type: 'Adverb' },
        { w: 'geprüft', role: 'r-verb', en: 'checked', hi: 'जांचा', pron: 'ge-PRÜFT', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'Is the drinking water checked regularly?', hi: 'Kya pine ka paani niyamit roop se jaancha jaata hai?' },
      { speaker: 'Insa', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'wird', role: 'r-verb', en: 'is', hi: 'किया जाता है', pron: 'virt', type: 'Verb · werden (Passiv Präsens)' },
        { w: 'jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', pron: 'YAY-den', type: 'Determiner' },
        { w: 'Monat', role: 'r-akkusativ', en: 'month', hi: 'महीने', pron: 'MO-naht', type: 'Noun · masc.' },
        { w: 'gemessen', role: 'r-verb', en: 'measured', hi: 'मापा जाता है', pron: 'ge-ME-sen', type: 'Partizip II · Satzende', why: 'messen → gemessen (this chapter).', ex: 'Das Wasser wird gemessen.', exEn: 'The water is measured.' },
        { w: '.', plain: true }
      ], en: 'Yes, it is measured every month.', hi: 'Haan, yeh har mahine maapa jaata hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wurden', role: 'r-verb', en: 'were', hi: 'किया गया था', pron: 'VUR-den', type: 'Verb · werden (Passiv Präteritum, plural)' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Bürger', role: 'r-subject', en: 'citizens', hi: 'नागरिक', pron: 'BÜR-ger', type: 'Noun · plural' },
        { w: 'darüber', role: 'r-akkusativ', en: 'about it', hi: 'इसके बारे में', pron: 'da-RÜ-ber', type: 'Pronoun · adverbial' },
        { w: 'informiert', role: 'r-verb', en: 'informed', hi: 'सूचित', pron: 'in-for-MEERT', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'Were the citizens informed about it?', hi: 'Kya naagariko ko iske baare mein soochit kiya gaya?' },
      { speaker: 'Insa', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'sie', role: 'r-subject', en: 'they', hi: 'उन्हें', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'sind', role: 'r-verb', en: 'have', hi: 'गया है', pron: 'zint', type: 'Verb · sein (helper)' },
        { w: 'durch', role: 'r-preposition', en: 'through', hi: 'के ज़रिए', pron: 'doorkh', type: 'Preposition' },
        { w: 'Infomaterial', role: 'r-akkusativ', en: 'info material', hi: 'सूचना सामग्री', pron: 'IN-fo-ma-te-ryal', type: 'Noun · neut.' },
        { w: 'informiert', role: 'r-verb', en: 'informed', hi: 'सूचित', pron: 'in-for-MEERT', type: 'Partizip II' },
        { w: 'worden', role: 'r-verb', en: 'been', hi: '', pron: 'VOR-den', type: 'Partizip II · werden (Passiv Perfekt, Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes, they have been informed through info material.', hi: 'Haan, unhe soochana samagri ke zariye soochit kiya ja chuka hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'One action, three points in time: <span class="de r-verb">wird repariert</span> (Präsens — happening now), <span class="de r-verb">wurde repariert</span> (Präteritum — a completed past action), and <span class="de r-verb">ist repariert worden</span> (Perfekt — completed, viewed from now). The tricky part: <b>worden</b> only ever marks the Passiv Perfekt, while <b>geworden</b> is the Partizip II of the verb <i>werden</i> itself.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is PASSIV: PRÄSENS, PRÄTERITUM & PERFEKT (B1 level only): Präsens = werden (conjugated) + Partizip II; Präteritum = wurde (conjugated) + Partizip II; Perfekt = ist/sind (conjugated) + Partizip II + worden. ' +
    'Do NOT expect Zustandspassiv, Passiv Futur, Passiv Plusquamperfekt, Passiv mit Modalverben, or B2 passive structures — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Passiv Perfekt always ends in "worden", never "geworden" — "geworden" is only correct when werden itself is the main verb (e.g. "Er ist Arzt geworden").\n' +
    '- Präteritum passive uses wurde/wurden, never "ist/hat ... geworden".\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Tense check:</b> one sentence on whether the right passive tense (Präsens/Präteritum/Perfekt) was used for each timeframe.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly form Passiv across all three tenses and never confuse worden with geworden. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the werden vs worden vs geworden comparison once, then continue.',
    low: 'Worth another pass through the Grammar section — practise the Passive Formation Table until each tense feels automatic.'
  },

  parserSentence: [
    { w: 'Das', role: 'plain' }, { w: 'Auto', role: 'plain' },
    { w: 'ist', role: 'plain' }, { w: 'repariert', role: 'plain' },
    { w: 'worden', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: the same passive action can sit in three points in time.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Insa and Timo visit an environmental-action fair full of Passiv reports.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 100 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master Passiv Präsens, Präteritum, and Perfekt — plus werden vs worden vs geworden.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style news report using all three Passive tenses.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch which Passive tense is used in each spoken sentence.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Report events and describe processes using all three Passive tenses.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a news-style report using Passiv Präsens, Präteritum, and Perfekt.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Active-to-Passive transformation across all three tenses.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 290 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 100 chapter words — environment and climate-action vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '20 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Active-to-Passive drills across three tenses, worden vs geworden, error correction, and a report-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete Passive tense reference — Präsens, Präteritum, Perfekt, decision flowchart, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'wird repariert', text: 'Form Passiv Präsens' },
    { de: 'wurde repariert', text: 'Form Passiv Präteritum' },
    { de: 'ist repariert worden', text: 'Form Passiv Perfekt' },
    { de: 'worden ≠ geworden', text: 'Never confuse the Passiv Perfekt marker with the verb werden' },
    { de: 'Aktiv ↔ Passiv', text: 'Transform between active and passive across all three tenses' }
  ],

  // ---------- Vocabulary (100 items — full chapter-28 upload list) ----------
  vocab: [
    { de: 'Engagement', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'commitment, involvement', hi: 'प्रतिबद्धता', ex: 'Ihr Engagement für den Umweltschutz ist groß.', exEn: 'Her commitment to environmental protection is great.', exHi: 'Paryavaran sanrakshan ke prati uski pratibaddhata badi hai.' },
    { de: 'Klima', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'climate', hi: 'जलवायु', ex: 'Das Klima verändert sich schnell.', exEn: 'The climate is changing quickly.', exHi: 'Jalvaayu tezi se badal rahi hai.' },
    { de: 'Recycling', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'recycling', hi: 'पुनर्चक्रण', ex: 'Eine Themenwoche zum Recycling wurde organisiert.', exEn: 'A theme week on recycling was organized.', exHi: 'Recycling par ek vishayagat saptaah aayojit kiya gaya.' },
    { de: 'Begriff', art: 'der', gender: 'm', plural: 'Begriffe', pos: 'noun', level: 'B1', en: 'term', hi: 'शब्द', ex: 'Dieser Begriff ist neu für mich.', exEn: 'This term is new to me.', exHi: 'Yeh shabd mere liye naya hai.' },
    { de: 'Bürger', art: 'der', gender: 'm', plural: 'Bürger', pos: 'noun', level: 'B1', en: 'citizen (male)', hi: 'नागरिक', ex: 'Viele Bürger sind aufgeklärt worden.', exEn: 'Many citizens have been informed.', exHi: 'Kai naagrikon ko soochit kiya ja chuka hai.' },
    { de: 'Fortschritt', art: 'der', gender: 'm', plural: 'Fortschritte', pos: 'noun', level: 'B1', en: 'progress', hi: 'प्रगति', ex: 'Der Fortschritt beim Umweltschutz ist sichtbar.', exEn: 'Progress on environmental protection is visible.', exHi: 'Paryavaran sanrakshan mein pragati dikhaayi de rahi hai.' },
    { de: 'Klimawandel', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'climate change', hi: 'जलवायु परिवर्तन', ex: 'Der Klimawandel wird oft diskutiert.', exEn: 'Climate change is often discussed.', exHi: 'Jalvaayu parivartan par aksar charcha hoti hai.' },
    { de: 'Umweltschutz', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'environmental protection', hi: 'पर्यावरण संरक्षण', ex: 'Der Umweltschutz wird jedes Jahr gefördert.', exEn: 'Environmental protection is promoted every year.', exHi: 'Paryavaran sanrakshan har saal protsahit kiya jaata hai.' },
    { de: 'Bevölkerung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'population', hi: 'जनसंख्या', ex: 'Die Bevölkerung wird ermutigt, regional einzukaufen.', exEn: 'The population is encouraged to shop regionally.', exHi: 'Jansankhya ko kshetriya roop se khareedaari karne ke liye protsahit kiya jaata hai.' },
    { de: 'Klimaerwärmung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'global warming', hi: 'वैश्विक तापमान वृद्धि', ex: 'Die Klimaerwärmung wird hier erklärt.', exEn: 'Global warming is explained here.', exHi: 'Vaishvik taapmaan vriddhi yahaan samjhaayi jaati hai.' },
    { de: 'Ressource', art: 'die', gender: 'f', plural: 'Ressourcen', pos: 'noun', level: 'B1', en: 'resource', hi: 'संसाधन', ex: 'Unsere Ressourcen werden geschützt.', exEn: 'Our resources are protected.', exHi: 'Humaare sansaadhan surakshit kiye jaate hain.' },
    { de: 'Umweltaktion', art: 'die', gender: 'f', plural: 'Umweltaktionen', pos: 'noun', level: 'B1', en: 'environmental campaign', hi: 'पर्यावरण अभियान', ex: 'Eine neue Umweltaktion wurde gestartet.', exEn: 'A new environmental campaign was started.', exHi: 'Ek naya paryavaran abhiyaan shuru kiya gaya.' },
    { de: 'Umweltverschmutzung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'environmental pollution', hi: 'पर्यावरण प्रदूषण', ex: 'Die Umweltverschmutzung wurde leicht verringert.', exEn: 'Pollution was slightly reduced.', exHi: 'Pradushan thoda kam kiya gaya.' },
    { de: 'Ursache', art: 'die', gender: 'f', plural: 'Ursachen', pos: 'noun', level: 'B1', en: 'cause', hi: 'कारण', ex: 'Die Ursache wird erforscht.', exEn: 'The cause is being investigated.', exHi: 'Karan ki jaanch ki jaa rahi hai.' },
    { de: 'aufhalten', pos: 'verb', level: 'B1', en: 'to stop', hi: 'रोकना', ex: 'Die Klimaerwärmung muss aufgehalten werden.', exEn: 'Global warming must be stopped.', exHi: 'Vaishvik taapmaan vriddhi ko rokna hoga.', conj: { praesens: 'hält auf', praeteritum: 'hielt auf', perfekt: 'hat aufgehalten' } },
    { de: 'aufheben', pos: 'verb', level: 'B1', en: 'to pick up', hi: 'उठाना', ex: 'Beim Plogging wird der Müll aufgehoben.', exEn: 'During plogging, the trash is picked up.', exHi: 'Plogging ke dauran, kooda uthaaya jaata hai.', conj: { praesens: 'hebt auf', praeteritum: 'hob auf', perfekt: 'hat aufgehoben' } },
    { de: 'aufklären', pos: 'verb', level: 'B1', en: 'to inform', hi: 'सूचित करना', ex: 'Viele Bürger sind aufgeklärt worden.', exEn: 'Many citizens have been informed.', exHi: 'Kai naagrikon ko soochit kiya ja chuka hai.', conj: { praesens: 'klärt auf', praeteritum: 'klärte auf', perfekt: 'hat aufgeklärt' } },
    { de: 'aufwändig', pos: 'adjective', level: 'B1', en: 'laborious', hi: 'श्रमसाध्य', ex: 'Recycling ist manchmal aufwändig.', exEn: 'Recycling is sometimes laborious.', exHi: 'Recycling kabhi-kabhi shramsaadhya hota hai.' },
    { de: 'bekämpfen', pos: 'verb', level: 'B1', en: 'to fight, combat', hi: 'लड़ना', ex: 'Der Klimawandel wird weltweit bekämpft.', exEn: 'Climate change is being fought worldwide.', exHi: 'Jalvaayu parivartan se poore vishwa mein ladaayi ki jaa rahi hai.', conj: { praesens: 'bekämpft', praeteritum: 'bekämpfte', perfekt: 'hat bekämpft' } },
    { de: 'beobachten', pos: 'verb', level: 'B1', en: 'to observe', hi: 'निरीक्षण करना', ex: 'Die Wildkatze wird beobachtet.', exEn: 'The wild cat is being observed.', exHi: 'Jangli billi ka nirikshan kiya jaa raha hai.', conj: { praesens: 'beobachtet', praeteritum: 'beobachtete', perfekt: 'hat beobachtet' } },
    { de: 'berechnen', pos: 'verb', level: 'B1', en: 'to calculate', hi: 'गणना करना', ex: 'Der Fußabdruck wird berechnet.', exEn: 'The footprint is calculated.', exHi: 'Pairon ke nishaan ki ganana ki jaati hai.', conj: { praesens: 'berechnet', praeteritum: 'berechnete', perfekt: 'hat berechnet' } },
    { de: 'Bio', pos: 'adjective', level: 'B1', en: 'organic', hi: 'जैविक', ex: 'Sie kauft nur Bio.', exEn: 'She only buys organic.', exHi: 'Woh sirf jaivik khareedti hai.' },
    { de: 'Bio-', pos: 'adjective', level: 'B1', en: 'organic (prefix, e.g. Bio-Produkte)', hi: 'जैविक (उपसर्ग)', ex: 'Bio-Produkte werden immer beliebter.', exEn: 'Organic products are becoming more popular.', exHi: 'Jaivik utpaad zyaada lokpriya ho rahe hain.' },
    { de: 'Geschwindigkeit', art: 'die', gender: 'f', plural: 'Geschwindigkeiten', pos: 'noun', level: 'B1', en: 'speed', hi: 'गति', ex: 'Die Geschwindigkeit des Klimawandels wird gemessen.', exEn: 'The speed of climate change is measured.', exHi: 'Jalvaayu parivartan ki gati naapi jaati hai.' },
    { de: 'Schwierigkeit', art: 'die', gender: 'f', plural: 'Schwierigkeiten', pos: 'noun', level: 'B1', en: 'difficulty', hi: 'कठिनाई', ex: 'Es gibt Schwierigkeiten beim Recycling.', exEn: 'There are difficulties with recycling.', exHi: 'Recycling mein kathinaayiyaan hain.' },
    { de: 'dienen', pos: 'verb', level: 'B1', en: 'to serve (als + N.)', hi: 'काम आना', ex: 'Der Fußabdruck dient als Maßstab.', exEn: 'The footprint serves as a benchmark.', exHi: 'Pairon ka nishaan ek maapdand ke roop mein kaam aata hai.', conj: { praesens: 'dient', praeteritum: 'diente', perfekt: 'hat gedient' } },
    { de: 'digital', pos: 'adjective', level: 'B1', en: 'digital', hi: 'डिजिटल', ex: 'Das Infomaterial wird digital verteilt.', exEn: 'The information material is distributed digitally.', exHi: 'Soochana saamagri digital roop se vitarit ki jaati hai.' },
    { de: 'durchsetzen', pos: 'verb', level: 'B1', en: 'to push through, force', hi: 'लागू करवाना', ex: 'Die Maßnahme wurde durchgesetzt.', exEn: 'The measure was pushed through.', exHi: 'Upaay ko laagoo karvaaya gaya.', conj: { praesens: 'setzt durch', praeteritum: 'setzte durch', perfekt: 'hat durchgesetzt' } },
    { de: 'durchstreichen', pos: 'verb', level: 'B1', en: 'to cross out', hi: 'काट देना', ex: 'Der Fehler wurde durchgestrichen.', exEn: 'The mistake was crossed out.', exHi: 'Galti ko kaat diya gaya.', conj: { praesens: 'streicht durch', praeteritum: 'strich durch', perfekt: 'hat durchgestrichen' } },
    { de: 'entfallen', pos: 'verb', level: 'B1', en: 'to be omitted', hi: 'छूट जाना', ex: 'Der Termin ist entfallen.', exEn: 'The appointment has been cancelled.', exHi: 'Nayukti chhoot gayi hai.', conj: { praesens: 'entfällt', praeteritum: 'entfiel', perfekt: 'ist entfallen' } },
    { de: 'erforschen', pos: 'verb', level: 'B1', en: 'to investigate', hi: 'अनुसंधान करना', ex: 'Die Ursache wird erforscht.', exEn: 'The cause is being investigated.', exHi: 'Karan ki jaanch ki jaa rahi hai.', conj: { praesens: 'erforscht', praeteritum: 'erforschte', perfekt: 'hat erforscht' } },
    { de: 'ergreifen', pos: 'verb', level: 'B1', en: 'to seize, take (a measure)', hi: 'अपनाना', ex: 'Neue Maßnahmen sind ergriffen worden.', exEn: 'New measures have been taken.', exHi: 'Naye upaay apnaaye ja chuke hain.', conj: { praesens: 'ergreift', praeteritum: 'ergriff', perfekt: 'hat ergriffen' } },
    { de: 'ernten', pos: 'verb', level: 'B1', en: 'to harvest', hi: 'फ़सल काटना', ex: 'Die größte Ernte ist geerntet worden.', exEn: 'The biggest harvest has been harvested.', exHi: 'Sabse badi fasal kaati ja chuki hai.', conj: { praesens: 'erntet', praeteritum: 'erntete', perfekt: 'hat geerntet' } },
    { de: 'extra', pos: 'adverb', level: 'B1', en: 'extra, specially', hi: 'ख़ास तौर पर', ex: 'Das wurde extra für die Aktion gemacht.', exEn: 'That was made specially for the campaign.', exHi: 'Yeh khaas taur par abhiyaan ke liye banaaya gaya.' },
    { de: 'extrem', pos: 'adjective', level: 'B1', en: 'extreme', hi: 'अत्यधिक', ex: 'Die Hitze war extrem.', exEn: 'The heat was extreme.', exHi: 'Garmi atyadhik thi.' },
    { de: 'fördern', pos: 'verb', level: 'B1', en: 'to promote', hi: 'प्रोत्साहित करना', ex: 'Der Umweltschutz wird gefördert.', exEn: 'Environmental protection is promoted.', exHi: 'Paryavaran sanrakshan protsahit kiya jaata hai.', conj: { praesens: 'fördert', praeteritum: 'förderte', perfekt: 'hat gefördert' } },
    { de: 'geschützt', pos: 'adjective', level: 'B1', en: 'protected', hi: 'सुरक्षित', ex: 'Die Wildkatze ist geschützt.', exEn: 'The wild cat is protected.', exHi: 'Jangli billi surakshit hai.' },
    { de: 'hilflos', pos: 'adjective', level: 'B1', en: 'helpless', hi: 'असहाय', ex: 'Sie fühlte sich hilflos gegenüber dem Klimawandel.', exEn: 'She felt helpless in the face of climate change.', exHi: 'Woh jalvaayu parivartan ke saamne asahaay mehsoos karti thi.' },
    { de: 'immer wieder', pos: 'adverb', level: 'B1', en: 'again and again', hi: 'बार-बार', ex: 'Die Bevölkerung wird immer wieder ermutigt.', exEn: 'The population is encouraged again and again.', exHi: 'Jansankhya ko baar-baar protsahit kiya jaata hai.' },
    { de: 'liegen', pos: 'verb', level: 'B1', en: 'to be located, lie (bei + D.)', hi: 'निर्भर होना', ex: 'Die Verantwortung liegt bei uns.', exEn: 'The responsibility lies with us.', exHi: 'Zimmedaari humaare oopar hai.', conj: { praesens: 'liegt', praeteritum: 'lag', perfekt: 'hat gelegen' } },
    { de: 'ländlich', pos: 'adjective', level: 'B1', en: 'rural', hi: 'ग्रामीण', ex: 'Im ländlichen Gebiet gibt es viel Natur.', exEn: 'In the rural area there\'s a lot of nature.', exHi: 'Graameen ilaake mein bahut prakriti hai.' },
    { de: 'messen', pos: 'verb', level: 'B1', en: 'to measure', hi: 'नापना', ex: 'Der Fußabdruck wird gemessen.', exEn: 'The footprint is measured.', exHi: 'Pairon ka nishaan naapa jaata hai.', conj: { praesens: 'misst', praeteritum: 'maß', perfekt: 'hat gemessen' } },
    { de: 'mitrechnen', pos: 'verb', level: 'B1', en: 'to include (in a calculation)', hi: 'गणना में शामिल करना', ex: 'Der Fleischkonsum wird mitgerechnet.', exEn: 'Meat consumption is included.', exHi: 'Maans khapat ko shaamil kiya jaata hai.', conj: { praesens: 'rechnet mit', praeteritum: 'rechnete mit', perfekt: 'hat mitgerechnet' } },
    { de: 'pflanzen', pos: 'verb', level: 'B1', en: 'to plant', hi: 'रोपना', ex: 'Neue Bäume werden gepflanzt.', exEn: 'New trees are planted.', exHi: 'Naye ped lagaaye jaate hain.', conj: { praesens: 'pflanzt', praeteritum: 'pflanzte', perfekt: 'hat gepflanzt' } },
    { de: 'regional', pos: 'adjective', level: 'B1', en: 'regional(ly)', hi: 'क्षेत्रीय', ex: 'Die Bevölkerung wird ermutigt, regionale Bioprodukte zu kaufen.', exEn: 'The population is encouraged to buy regional organic products.', exHi: 'Jansankhya ko kshetriya jaivik utpaad khareedne ke liye protsahit kiya jaata hai.' },
    { de: 'schaden', pos: 'verb', level: 'B1', en: 'to harm', hi: 'नुक़सान पहुँचाना', ex: 'Abgase schaden der Umwelt.', exEn: 'Exhaust fumes harm the environment.', exHi: 'Dhuaan paryavaran ko nuksaan pahunchaata hai.', conj: { praesens: 'schadet', praeteritum: 'schadete', perfekt: 'hat geschadet' } },
    { de: 'schädlich', pos: 'adjective', level: 'B1', en: 'harmful', hi: 'हानिकारक', ex: 'Abgase sind schädlich.', exEn: 'Exhaust fumes are harmful.', exHi: 'Dhuaan haanikaarak hai.' },
    { de: 'schützen', pos: 'verb', level: 'B1', en: 'to protect (vor + D.)', hi: 'सुरक्षा करना', ex: 'Unsere Ressourcen werden geschützt.', exEn: 'Our resources are protected.', exHi: 'Humaare sansaadhan surakshit kiye jaate hain.', conj: { praesens: 'schützt', praeteritum: 'schützte', perfekt: 'hat geschützt' } },
    { de: 'sich anschließen', pos: 'verb', level: 'B1', en: 'to follow, join', hi: 'शामिल होना', ex: 'Lass uns uns dem Plogging anschließen.', exEn: 'Let\'s join the plogging event.', exHi: 'Chalo plogging mein shaamil hote hain.', conj: { praesens: 'schließt sich an', praeteritum: 'schloss sich an', perfekt: 'hat sich angeschlossen' } },
    { de: 'stoppen', pos: 'verb', level: 'B1', en: 'to stop', hi: 'रोकना', ex: 'Der Klimawandel muss gestoppt werden.', exEn: 'Climate change must be stopped.', exHi: 'Jalvaayu parivartan ko rokna hoga.', conj: { praesens: 'stoppt', praeteritum: 'stoppte', perfekt: 'hat gestoppt' } },
    { de: 'unterstützen', pos: 'verb', level: 'B1', en: 'to support', hi: 'समर्थन करना', ex: 'Viele Bürger unterstützen die Aktion.', exEn: 'Many citizens support the campaign.', exHi: 'Kai naagrik abhiyaan ka samarthan karte hain.', conj: { praesens: 'unterstützt', praeteritum: 'unterstützte', perfekt: 'hat unterstützt' } },
    { de: 'verbrauchen', pos: 'verb', level: 'B1', en: 'to use up', hi: 'खपत करना', ex: 'Wir verbrauchen zu viel Wasser.', exEn: 'We use up too much water.', exHi: 'Hum bahut zyaada paani ki khapat karte hain.', conj: { praesens: 'verbraucht', praeteritum: 'verbrauchte', perfekt: 'hat verbraucht' } },
    { de: 'vernichten', pos: 'verb', level: 'B1', en: 'to destroy', hi: 'नष्ट करना', ex: 'Der Wald wird nicht vernichtet.', exEn: 'The forest is not destroyed.', exHi: 'Jangal nashth nahi kiya jaata.', conj: { praesens: 'vernichtet', praeteritum: 'vernichtete', perfekt: 'hat vernichtet' } },
    { de: 'verringern', pos: 'verb', level: 'B1', en: 'to reduce', hi: 'कम करना', ex: 'Die Umweltverschmutzung wurde verringert.', exEn: 'Pollution was reduced.', exHi: 'Pradushan kam kiya gaya.', conj: { praesens: 'verringert', praeteritum: 'verringerte', perfekt: 'hat verringert' } },
    { de: 'verschwenden', pos: 'verb', level: 'B1', en: 'to waste', hi: 'बर्बाद करना', ex: 'Wir sollten keine Ressourcen verschwenden.', exEn: 'We shouldn\'t waste resources.', exHi: 'Humein sansaadhan barbaad nahi karne chahiye.', conj: { praesens: 'verschwendet', praeteritum: 'verschwendete', perfekt: 'hat verschwendet' } },
    { de: 'verteilen', pos: 'verb', level: 'B1', en: 'to distribute', hi: 'वितरित करना', ex: 'Genug Infomaterial ist verteilt worden.', exEn: 'Enough information material has been distributed.', exHi: 'Kaafi soochana saamagri vitarit ki ja chuki hai.', conj: { praesens: 'verteilt', praeteritum: 'verteilte', perfekt: 'hat verteilt' } },
    { de: 'zerstören', pos: 'verb', level: 'B1', en: 'to destroy', hi: 'नष्ट करना', ex: 'Der Wald darf nicht zerstört werden.', exEn: 'The forest must not be destroyed.', exHi: 'Jangal ko nashth nahi hone dena chahiye.', conj: { praesens: 'zerstört', praeteritum: 'zerstörte', perfekt: 'hat zerstört' } },
    { de: 'zählen', pos: 'verb', level: 'B1', en: 'to count', hi: 'गिनना', ex: 'Jeder Baum zählt.', exEn: 'Every tree counts.', exHi: 'Har ped mahatvapurn hai.', conj: { praesens: 'zählt', praeteritum: 'zählte', perfekt: 'hat gezählt' } },
    { de: 'ökologisch', pos: 'adjective', level: 'B1', en: 'ecological', hi: 'पारिस्थितिक', ex: 'Das ist eine ökologische Lösung.', exEn: 'That\'s an ecological solution.', exHi: 'Yeh ek paaristhitik samadhaan hai.' },
    { de: 'Abgas', art: 'das', gender: 'n', plural: 'Abgase', pos: 'noun', level: 'B1', en: 'exhaust', hi: 'धुआँ', ex: 'Abgase schaden der Umwelt.', exEn: 'Exhaust fumes harm the environment.', exHi: 'Dhuaan paryavaran ko nuksaan pahunchaata hai.' },
    { de: 'Bioprodukt', art: 'das', gender: 'n', plural: 'Bioprodukte', pos: 'noun', level: 'B1', en: 'organic product', hi: 'जैविक उत्पाद', ex: 'Regionale Bioprodukte werden gefördert.', exEn: 'Regional organic products are promoted.', exHi: 'Kshetriya jaivik utpaad protsahit kiye jaate hain.' },
    { de: 'Huhn', art: 'das', gender: 'n', plural: 'Hühner', pos: 'noun', level: 'B1', en: 'chicken', hi: 'मुर्गी', ex: 'Das Huhn lebt auf dem Bauernhof.', exEn: 'The chicken lives on the farm.', exHi: 'Murgi khet mein rehti hai.' },
    { de: 'Infomaterial', art: 'das', gender: 'n', plural: 'Infomaterialien', pos: 'noun', level: 'B1', en: 'information material', hi: 'सूचना सामग्री', ex: 'Genug Infomaterial ist verteilt worden.', exEn: 'Enough information material has been distributed.', exHi: 'Kaafi soochana saamagri vitarit ki ja chuki hai.' },
    { de: 'Nachbardorf', art: 'das', gender: 'n', plural: 'Nachbardörfer', pos: 'noun', level: 'B1', en: 'neighbouring village', hi: 'पड़ोसी गाँव', ex: 'Das Nachbardorf organisiert auch eine Aktion.', exEn: 'The neighbouring village is also organizing a campaign.', exHi: 'Padosi gaanv bhi ek abhiyaan aayojit kar raha hai.' },
    { de: 'Plogging', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'plogging (jogging + picking up litter)', hi: 'प्लॉगिंग', ex: 'Lass uns uns dem Plogging anschließen.', exEn: 'Let\'s join the plogging event.', exHi: 'Chalo plogging mein shaamil hote hain.' },
    { de: 'Rind', art: 'das', gender: 'n', plural: 'Rinder', pos: 'noun', level: 'B1', en: 'beef, cattle', hi: 'गाय का मांस', ex: 'Rind wird oft mit hohem Fußabdruck verbunden.', exEn: 'Beef is often associated with a high footprint.', exHi: 'Gaay ka maans aksar unche pairon ke nishaan se jud jaata hai.' },
    { de: 'Trinkwasser', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'drinking water', hi: 'पीने का पानी', ex: 'Sauberes Trinkwasser muss geschützt werden.', exEn: 'Clean drinking water must be protected.', exHi: 'Saaf peene ka paani surakshit rakhna hoga.' },
    { de: 'Zeichen', art: 'das', gender: 'n', plural: 'Zeichen', pos: 'noun', level: 'B1', en: 'symbol, sign', hi: 'चिन्ह', ex: 'Das Zeichen steht für Bio-Produkte.', exEn: 'The symbol stands for organic products.', exHi: 'Chinh jaivik utpaadon ke liye hai.' },
    { de: 'Abfall', art: 'der', gender: 'm', plural: 'Abfälle', pos: 'noun', level: 'B1', en: 'waste', hi: 'कचरा', ex: 'Der Abfall wird sortiert.', exEn: 'The waste is sorted.', exHi: 'Kachra chhaanta jaata hai.' },
    { de: 'Autofahrer', art: 'der', gender: 'm', plural: 'Autofahrer', pos: 'noun', level: 'B1', en: 'driver (male)', hi: 'ड्राइवर', ex: 'Der Autofahrer wird um Rücksicht gebeten.', exEn: 'The driver is asked to be considerate.', exHi: 'Driver se saavdhaani barteinne ki apeksha ki jaati hai.' },
    { de: 'Durchschnitt', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'average', hi: 'औसत', ex: 'Im Durchschnitt wird weniger Fleisch gegessen.', exEn: 'On average, less meat is eaten.', exHi: 'Ausatan, kam maans khaaya jaata hai.' },
    { de: 'Fleischkonsum', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'meat consumption', hi: 'मांस खपत', ex: 'Der Fleischkonsum wird mitgerechnet.', exEn: 'Meat consumption is included.', exHi: 'Maans khapat ko shaamil kiya jaata hai.' },
    { de: 'Fußabdruck', art: 'der', gender: 'm', plural: 'Fußabdrücke', pos: 'noun', level: 'B1', en: 'footprint', hi: 'पैरों का निशान', ex: 'Wie wird der Fußabdruck gemessen?', exEn: 'How is the footprint measured?', exHi: 'Pairon ka nishaan kaise naapa jaata hai?' },
    { de: 'Katzenfreund', art: 'der', gender: 'm', plural: 'Katzenfreunde', pos: 'noun', level: 'B1', en: 'cat lover (male)', hi: 'बिल्ली प्रेमी', ex: 'Er ist ein echter Katzenfreund.', exEn: 'He\'s a real cat lover.', exHi: 'Woh ek asli billi premi hai.' },
    { de: 'Marktanteil', art: 'der', gender: 'm', plural: 'Marktanteile', pos: 'noun', level: 'B1', en: 'market share', hi: 'बाज़ार हिस्सा', ex: 'Bio-Produkte gewinnen Marktanteil.', exEn: 'Organic products are gaining market share.', exHi: 'Jaivik utpaad baazaar hissa jeet rahe hain.' },
    { de: 'Naturfreund', art: 'der', gender: 'm', plural: 'Naturfreunde', pos: 'noun', level: 'B1', en: 'nature lover (male)', hi: 'प्रकृति प्रेमी', ex: 'Mein Neffe ist ein echter Naturfreund geworden.', exEn: 'My nephew has become a real nature lover.', exHi: 'Mera bhatija ek asli prakriti premi ban gaya hai.' },
    { de: 'Rekord', art: 'der', gender: 'm', plural: 'Rekorde', pos: 'noun', level: 'B1', en: 'record', hi: 'रिकॉर्ड', ex: 'Ein neuer Rekord ist aufgestellt worden.', exEn: 'A new record has been set.', exHi: 'Ek naya record banaaya ja chuka hai.' },
    { de: 'Schwerpunkt', art: 'der', gender: 'm', plural: 'Schwerpunkte', pos: 'noun', level: 'B1', en: 'focus, main emphasis', hi: 'मुख्य केंद्र बिंदु', ex: 'Der Schwerpunkt liegt auf Umweltschutz.', exEn: 'The focus is on environmental protection.', exHi: 'Mukhya kendra bindu paryavaran sanrakshan par hai.' },
    { de: 'Strauch', art: 'der', gender: 'm', plural: 'Sträucher', pos: 'noun', level: 'B1', en: 'bush, shrub', hi: 'झाड़ी', ex: 'Neue Sträucher werden gepflanzt.', exEn: 'New bushes are being planted.', exHi: 'Nayi jhaadiyaan lagaayi jaati hain.' },
    { de: 'Teilnehmer', art: 'der', gender: 'm', plural: 'Teilnehmer', pos: 'noun', level: 'B1', en: 'participant (male)', hi: 'प्रतिभागी', ex: 'Viele Teilnehmer waren begeistert.', exEn: 'Many participants were excited.', exHi: 'Kai pratibhaagi utsaahit the.' },
    { de: 'Transportweg', art: 'der', gender: 'm', plural: 'Transportwege', pos: 'noun', level: 'B1', en: 'transport corridor', hi: 'परिवहन मार्ग', ex: 'Kurze Transportwege sind besser fürs Klima.', exEn: 'Short transport corridors are better for the climate.', exHi: 'Chhote parivahan maarg jalvaayu ke liye behtar hain.' },
    { de: 'Verpackungsmüll', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'packaging waste', hi: 'पैकेजिंग कचरा', ex: 'Verpackungsmüll wird reduziert.', exEn: 'Packaging waste is being reduced.', exHi: 'Packaging kachra kam kiya jaa raha hai.' },
    { de: 'Vorort', art: 'der', gender: 'm', plural: 'Vororte', pos: 'noun', level: 'B1', en: 'suburb', hi: 'उपनगर', ex: 'Im Vorort gibt es viel Grün.', exEn: 'In the suburb, there\'s a lot of greenery.', exHi: 'Upanagar mein bahut hariyaali hai.' },
    { de: 'Autofahrerin', art: 'die', gender: 'f', plural: 'Autofahrerinnen', pos: 'noun', level: 'B1', en: 'driver (female)', hi: 'ड्राइवर (महिला)', ex: 'Die Autofahrerin unterstützt die Aktion.', exEn: 'The driver supports the campaign.', exHi: 'Driver abhiyaan ka samarthan karti hai.' },
    { de: 'Bürgerin', art: 'die', gender: 'f', plural: 'Bürgerinnen', pos: 'noun', level: 'B1', en: 'citizen (female)', hi: 'नागरिक (महिला)', ex: 'Die Bürgerin engagiert sich für den Klimaschutz.', exEn: 'The citizen is involved in climate protection.', exHi: 'Naagrik jalvaayu sanrakshan mein sakriya hai.' },
    { de: 'Erde', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'earth', hi: 'पृथ्वी', ex: 'Wir müssen die Erde schützen.', exEn: 'We must protect the earth.', exHi: 'Humein prithvi ki suraksha karni hai.' },
    { de: 'Ernte', art: 'die', gender: 'f', plural: 'Ernten', pos: 'noun', level: 'B1', en: 'harvest', hi: 'फ़सल कटाई', ex: 'Die größte Ernte ist geerntet worden.', exEn: 'The biggest harvest has been harvested.', exHi: 'Sabse badi fasal kaati ja chuki hai.' },
    { de: 'Herkunft', art: 'die', gender: 'f', plural: 'Herkünfte', pos: 'noun', level: 'B1', en: 'origin', hi: 'उत्पत्ति', ex: 'Die Herkunft des Produkts ist regional.', exEn: 'The origin of the product is regional.', exHi: 'Utpaad ki utpatti kshetriya hai.' },
    { de: 'Idee', art: 'die', gender: 'f', plural: 'Ideen', pos: 'noun', level: 'B1', en: 'idea', hi: 'विचार', ex: 'Wir haben eine gute Idee für die Aktion.', exEn: 'We have a good idea for the campaign.', exHi: 'Humaare paas abhiyaan ke liye ek achha vichaar hai.' },
    { de: 'Marke', art: 'die', gender: 'f', plural: 'Marken', pos: 'noun', level: 'B1', en: 'brand', hi: 'ब्रांड', ex: 'Diese Marke ist bekannt für Bio-Produkte.', exEn: 'This brand is known for organic products.', exHi: 'Yeh brand jaivik utpaadon ke liye jaana jaata hai.' },
    { de: 'Maßnahme', art: 'die', gender: 'f', plural: 'Maßnahmen', pos: 'noun', level: 'B1', en: 'measure', hi: 'उपाय', ex: 'Neue Maßnahmen sind ergriffen worden.', exEn: 'New measures have been taken.', exHi: 'Naye upaay apnaaye ja chuke hain.' },
    { de: 'Mitfahrbank', art: 'die', gender: 'f', plural: 'Mitfahrbänke', pos: 'noun', level: 'B1', en: 'ride-on bench (rural carpool spot)', hi: 'लिफ़्ट बेंच', ex: 'An der Mitfahrbank warten Leute auf eine Mitfahrt.', exEn: 'At the ride-on bench, people wait for a ride.', exHi: 'Lift bench par log lift ka intezaar karte hain.' },
    { de: 'Naturfreundin', art: 'die', gender: 'f', plural: 'Naturfreundinnen', pos: 'noun', level: 'B1', en: 'nature lover (female)', hi: 'प्रकृति प्रेमी (महिला)', ex: 'Anna ist eine echte Naturfreundin.', exEn: 'Anna is a real nature lover.', exHi: 'Anna ek asli prakriti premi hai.' },
    { de: 'Region', art: 'die', gender: 'f', plural: 'Regionen', pos: 'noun', level: 'B1', en: 'region', hi: 'क्षेत्र', ex: 'In unserer Region ist die Ernte groß.', exEn: 'In our region, the harvest is big.', exHi: 'Humaare kshetra mein fasal badi hai.' },
    { de: 'Teilnehmerin', art: 'die', gender: 'f', plural: 'Teilnehmerinnen', pos: 'noun', level: 'B1', en: 'participant (female)', hi: 'प्रतिभागी (महिला)', ex: 'Die Teilnehmerin war begeistert.', exEn: 'The participant was excited.', exHi: 'Pratibhaagi utsaahit thi.' },
    { de: 'Themenwoche', art: 'die', gender: 'f', plural: 'Themenwochen', pos: 'noun', level: 'B1', en: 'theme week', hi: 'विषयगत सप्ताह', ex: 'Eine Themenwoche zum Recycling wurde organisiert.', exEn: 'A theme week on recycling was organized.', exHi: 'Recycling par ek vishayagat saptaah aayojit kiya gaya.' },
    { de: 'Wildkatze', art: 'die', gender: 'f', plural: 'Wildkatzen', pos: 'noun', level: 'B1', en: 'wild cat', hi: 'जंगली बिल्ली', ex: 'Die Wildkatze wird beobachtet.', exEn: 'The wild cat is being observed.', exHi: 'Jangli billi ka nirikshan kiya jaa raha hai.' },
    { de: 'drehen', pos: 'verb', level: 'B1', en: 'to turn', hi: 'घुमाना', ex: 'Man dreht den Hahn zu, um Wasser zu sparen.', exEn: 'You turn off the tap to save water.', exHi: 'Paani bachaane ke liye tap band kiya jaata hai.', conj: { praesens: 'dreht', praeteritum: 'drehte', perfekt: 'hat gedreht' } },
    { de: 'sich beteiligen', pos: 'verb', level: 'B1', en: 'to participate (an + D.)', hi: 'भाग लेना', ex: 'Viele beteiligen sich an der Umweltaktion.', exEn: 'Many people participate in the environmental campaign.', exHi: 'Kai log paryavaran abhiyaan mein bhaag lete hain.', conj: { praesens: 'beteiligt sich', praeteritum: 'beteiligte sich', perfekt: 'hat sich beteiligt' } },
    { de: 'sich engagieren', pos: 'verb', level: 'B1', en: 'to be involved (für/gegen + A.)', hi: 'सक्रिय होना', ex: 'Sie engagiert sich für den Umweltschutz.', exEn: 'She is involved in environmental protection.', exHi: 'Woh paryavaran sanrakshan mein sakriya hai.', conj: { praesens: 'engagiert sich', praeteritum: 'engagierte sich', perfekt: 'hat sich engagiert' } },
    { de: 'deklinieren', pos: 'verb', level: 'B1', en: 'to decline (grammar)', hi: 'विभक्ति लगाना', ex: 'Man muss das Adjektiv richtig deklinieren.', exEn: 'You have to decline the adjective correctly.', exHi: 'Adjective ko sahi tarah se decline karna hoga.', conj: { praesens: 'dekliniert', praeteritum: 'deklinierte', perfekt: 'hat dekliniert' } },
    { de: 'Finalsatz', art: 'der', gender: 'm', plural: 'Finalsätze', pos: 'noun', level: 'B1', en: 'final clause (purpose clause)', hi: 'उद्देश्य वाक्य', ex: 'Ein Finalsatz erklärt den Zweck.', exEn: 'A final clause explains the purpose.', exHi: 'Uddeshya vaakya uddeshya samjhaata hai.' },
    { de: 'europäisch', pos: 'adjective', level: 'B1', en: 'European', hi: 'यूरोपीय', ex: 'Die europäische Umweltpolitik wird diskutiert.', exEn: 'European environmental policy is discussed.', exHi: 'Yuropiya paryavaran neeti par charcha hoti hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Aktiv vs Passiv — Wiederholung',
      body: [ 'Active focuses on WHO does the action. Passive focuses on WHAT happens (recycled — Ch.10).' ],
      table: {
        head: ['Active', 'Passive'],
        rows: [
          ['<span class="de">Der Lehrer erklärt die Grammatik.</span>', '<span class="de">Die Grammatik wird erklärt.</span>']
        ]
      },
      hinglish: 'Active sentence mein focus is baat par hota hai ki <b>kaun</b> kaam kar raha hai. Passive mein focus is baat par chala jaata hai ki <b>kya</b> ho raha hai \u2014 karne wala aksar gayab hi rehta hai.'
    },
    {
      title: 'Passiv Präsens',
      body: [ 'werden (conjugated) + Partizip II — an action happening now.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['werden + Partizip II', '<span class="de">Das Auto wird repariert.</span>']
        ]
      },
      hinglish: 'werden (conjugated) + Partizip II — ek action jo abhi ho rahi hai.'
    },
    {
      title: 'Passiv Präteritum',
      body: [ 'wurde (conjugated) + Partizip II — a completed past action, very common in newspapers, reports, and history.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['wurde + Partizip II', '<span class="de">Das Auto wurde repariert.</span>']
        ]
      },
      hinglish: 'wurde (conjugated) + Partizip II — ek complete past action, newspapers aur reports mein bahut common.'
    },
    {
      title: 'Passiv Perfekt',
      body: [ 'ist/sind (conjugated) + Partizip II + worden — a completed action, viewed from the present.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['ist/sind + Partizip II + worden', '<span class="de">Das Auto ist repariert worden.</span>']
        ]
      },
      note: 'Watch this one carefully: <b>worden</b> is the Passiv Perfekt marker, while <b>geworden</b> belongs to the verb werden (to become).',
      hinglish: 'ist/sind (conjugated) + Partizip II + worden — ek complete action, ab se dekhi gayi.'
    },
    {
      title: 'Aktiv → Passiv, alle drei Zeiten',
      body: [ 'Compare all three passive tenses against their active counterparts.' ],
      table: {
        head: ['Tense', 'Active → Passive'],
        rows: [
          ['Präsens', '<span class="de">Der Mechaniker repariert das Auto.</span> → <span class="de">Das Auto wird repariert.</span>'],
          ['Präteritum', '<span class="de">Der Mechaniker reparierte das Auto.</span> → <span class="de">Das Auto wurde repariert.</span>'],
          ['Perfekt', '<span class="de">Der Mechaniker hat das Auto repariert.</span> → <span class="de">Das Auto ist repariert worden.</span>']
        ]
      },
      hinglish: 'Teenon Passive tenses ko unke Active counterparts se compare karo.'
    },
    {
      title: 'werden vs worden vs geworden',
      body: [ 'werden = future/passive helper. worden = Passiv Perfekt marker (never changes). geworden = Partizip II of the VERB werden (to become).' ],
      table: {
        head: ['Word', 'Example'],
        rows: [
          ['worden (Passiv Perfekt)', '<span class="de">Das Haus ist gebaut worden.</span>'],
          ['geworden (Verb werden)', '<span class="de">Er ist Arzt geworden.</span>']
        ]
      },
      note: 'This is one of the biggest B1 mistakes — worden marks Passiv Perfekt, geworden is only for the verb "to become".',
      hinglish: 'Yeh sabse badi B1 galti hai — worden Passiv Perfekt ke liye hai, geworden sirf "werden" (bannaa) verb ke liye.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from mixing up the three tenses, or confusing worden with geworden.' ],
      mistakes: [
        { wrong: 'Das Auto ist repariert geworden.', right: 'Das Auto ist repariert worden.', why: 'Passiv Perfekt always ends in worden, never geworden.' },
        { wrong: 'Das Auto wurde reparieren.', right: 'Das Auto wurde repariert.', why: 'Passiv Präteritum needs Partizip II (repariert), not the infinitive.' },
        { wrong: 'Die Tür wird geöffnet geworden.', right: 'Die Tür wird geöffnet. / Die Tür ist geöffnet worden.', why: 'Never mix wird (Präsens) with geworden — pick one tense.' },
        { wrong: 'Das Essen hat gekocht worden.', right: 'Das Essen ist gekocht worden.', why: 'Passiv Perfekt always uses sein (ist/sind), never haben.' },
        { wrong: 'Die Grammatik wurde erklären.', right: 'Die Grammatik wurde erklärt.', why: 'Passiv Präteritum needs Partizip II (erklärt), not the infinitive.' }
      ],
      hinglish: 'Yeh galtiyaan teeno tenses ko mix karne se ya worden aur geworden ko confuse karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'All three passive tenses appear constantly in Goethe B1 news reports, museum texts, and historical summaries.' ],
      note: 'Quick check: happening now? werden + Partizip II. Completed in the past (narration)? wurde + Partizip II. Completed, from now? ist/sind + Partizip II + worden.',
      hinglish: 'Teeno Passive tenses Goethe B1 news reports, museum texts aur historical summaries mein lagataar aate hain.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Ein Bericht über die Umweltaktion',
    titleEn: 'A report on the environmental campaign',
    tokens: [
      { w: 'Letztes', role: 'plain', en: 'last (neut. acc.)', hi: 'पिछला', type: 'Determiner · Akk.' },
      { w: 'Jahr', role: 'plain', en: 'year', hi: 'साल', type: 'Noun · neut.' },
      { w: 'wurde', role: 'plain', en: 'was (Passiv-Hilfsverb)', hi: 'शुरू की गई थी', type: 'Verb · werden (Passiv Präteritum)' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'unserer', role: 'plain', en: 'our (fem. dat.)', hi: 'हमारे', type: 'Possessivartikel · Dativ' },
      { w: 'Region', role: 'plain', en: 'region (Satzende)', hi: 'क्षेत्र (Satzende)', type: 'Noun · fem. (Satzende)', why: 'die Region (this chapter).' },
      { w: 'eine', role: 'plain', en: 'an (fem. nom.)', hi: 'एक', type: 'Article' },
      { w: 'große', role: 'plain', en: 'big', hi: 'बड़ा', type: 'Adjective · gemischt · Nom.', why: 'Mixed declension: eine + Nominativ feminine → -e.' },
      { w: 'Umweltaktion', role: 'plain', en: 'environmental campaign', hi: 'पर्यावरण अभियान', type: 'Noun · fem.', why: 'die Umweltaktion (this chapter).' },
      { w: 'gestartet', role: 'plain', en: 'started (Satzende)', hi: 'शुरू (Satzende)', type: 'Verb · starten (Partizip II, Satzende)' },
      { w: '.', plain: true },
      { w: 'Seitdem', role: 'plain', en: 'since then', hi: 'तब से', type: 'Adverb' },
      { w: 'sind', role: 'plain', en: 'have (Passiv-Hilfsverb)', hi: 'लिए गए हैं', type: 'Verb · sein (Passiv Perfekt)' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective · stark · Nom. Pl.' },
      { w: 'Maßnahmen', role: 'plain', en: 'measures', hi: 'उपाय', type: 'Noun · plural', why: 'die Maßnahme (this chapter).' },
      { w: 'ergriffen', role: 'plain', en: 'taken', hi: 'अपनाए', type: 'Verb · ergreifen (Partizip II)', why: 'ergreifen (this chapter): to seize/take.' },
      { w: 'worden', role: 'plain', en: '(Passiv Perfekt marker, Satzende)', hi: '(Passiv Perfekt marker, Satzende)', type: 'Passiv Perfekt · worden (Satzende)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Umweltschutz', role: 'plain', en: 'environmental protection', hi: 'पर्यावरण संरक्षण', type: 'Noun · masc.', why: 'der Umweltschutz (Sg.) (this chapter).' },
      { w: 'wird', role: 'plain', en: 'is (Passiv-Hilfsverb)', hi: 'बढ़ाया जाता है', type: 'Verb · werden (Passiv Präsens)' },
      { w: 'jetzt', role: 'plain', en: 'now', hi: 'अब', type: 'Adverb' },
      { w: 'aktiv', role: 'plain', en: 'actively', hi: 'सक्रिय रूप से', type: 'Adjective/Adverb' },
      { w: 'gefördert', role: 'plain', en: 'promoted (Satzende)', hi: 'प्रोत्साहित (Satzende)', type: 'Verb · fördern (Satzende)', why: 'fördern (this chapter): to promote.' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Fußabdruck', role: 'plain', en: 'footprint', hi: 'पैरों का निशान', type: 'Noun · masc.', why: 'der Fußabdruck (this chapter).' },
      { w: 'jedes', role: 'plain', en: 'each (masc. gen.)', hi: 'हर', type: 'Determiner · Genitiv' },
      { w: 'Bürgers', role: 'plain', en: 'citizen (gen.)', hi: 'नागरिक का', type: 'Noun · masc.', why: 'der Bürger (this chapter).' },
      { w: 'wird', role: 'plain', en: 'is', hi: 'गिना जाता है', type: 'Verb · werden (Passiv Präsens)' },
      { w: 'genau', role: 'plain', en: 'exactly', hi: 'सटीक रूप से', type: 'Adverb' },
      { w: 'berechnet', role: 'plain', en: 'calculated (Satzende)', hi: 'गणना (Satzende)', type: 'Verb · berechnen (Satzende)', why: 'berechnen (this chapter): to calculate.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Umweltverschmutzung', role: 'plain', en: 'pollution', hi: 'प्रदूषण', type: 'Noun · fem.', why: 'die Umweltverschmutzung (this chapter).' },
      { w: 'wurde', role: 'plain', en: 'was', hi: 'कम की गई थी', type: 'Verb · werden (Passiv Präteritum)' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'letzten', role: 'plain', en: 'last (masc./neut. dat.)', hi: 'पिछले', type: 'Determiner · Dativ' },
      { w: 'Jahr', role: 'plain', en: 'year (Satzende)', hi: 'साल (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'deutlich', role: 'plain', en: 'noticeably', hi: 'काफ़ी हद तक', type: 'Adverb' },
      { w: 'verringert', role: 'plain', en: 'reduced (Satzende)', hi: 'कम (Satzende)', type: 'Verb · verringern (Satzende)', why: 'verringern (this chapter): to reduce.' },
      { w: '.', plain: true },
      { w: 'Nachdem', role: 'r-connector', en: 'after', hi: 'बाद में', type: 'Konjunktion · nachdem', why: 'nachdem — temporal clause (recycled — Ch.21).' },
      { w: 'genug', role: 'plain', en: 'enough', hi: 'काफ़ी', type: 'Adverb' },
      { w: 'Infomaterial', role: 'plain', en: 'information material', hi: 'सूचना सामग्री', type: 'Noun · neut.', why: 'das Infomaterial (this chapter).' },
      { w: 'verteilt', role: 'plain', en: 'distributed', hi: 'वितरित', type: 'Verb · verteilen (Partizip II)', why: 'verteilen (this chapter): to distribute.' },
      { w: 'worden', role: 'plain', en: '(Passiv Perfekt marker)', hi: '(Passiv Perfekt marker)', type: 'Passiv Perfekt · worden' },
      { w: 'war', role: 'plain', en: 'was (Satzende)', hi: 'था (Satzende)', type: 'Verb · sein (Präteritum, Satzende)' },
      { w: ',', plain: true },
      { w: 'haben', role: 'plain', en: 'have', hi: 'शामिल हुए हैं', type: 'Verb · haben (Perfekt)' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'खुद', type: 'Reflexivpronomen' },
      { w: 'viele', role: 'plain', en: 'many (Satzende)', hi: 'कई (Satzende)', type: 'Adjective · stark · Nom. Pl. (Satzende)' },
      { w: 'Bürger', role: 'plain', en: 'citizens (Satzende)', hi: 'नागरिक (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'an', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · Dativ' },
      { w: 'Aktion', role: 'plain', en: 'campaign (Satzende)', hi: 'अभियान (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'beteiligt', role: 'plain', en: 'participated (Satzende)', hi: 'भाग लिया (Satzende)', type: 'Verb · sich beteiligen (Partizip II, Satzende)', why: 'sich beteiligen (an + D.) (this chapter): to participate.' },
      { w: '.', plain: true }
    ],
    translation: 'Last year, a big environmental campaign was started in our region. Since then, many measures have been taken. Environmental protection is now actively promoted. Every citizen\'s footprint is calculated exactly. Pollution was noticeably reduced last year. After enough information material had been distributed, many citizens got involved in the campaign.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_028_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Insa, hast du gehört? Unser Dach wird nächsten Monat isoliert.', en: 'Insa, have you heard? Our roof is being insulated next month.' },
      { id: 'B1_028_L002', speaker: 'Insa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Endlich! Letztes Jahr wurde nur das Erdgeschoss renoviert.', en: 'Finally! Last year only the ground floor was renovated.' },
      { id: 'B1_028_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt, und die Fenster sind ja schon getauscht worden.', en: 'True, and the windows have already been replaced.' },
      { id: 'B1_028_L004', speaker: 'Insa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Dann wird es diesen Winter endlich wärmer bei uns!', en: 'Then it will finally be warmer for us this winter!' }
    ],
    transcript: 'Insa, hast du gehört? Unser Dach wird nächsten Monat isoliert. Endlich! Letztes Jahr wurde nur das Erdgeschoss renoviert. Stimmt, und die Fenster sind ja schon getauscht worden. Dann wird es diesen Winter endlich wärmer bei uns!',
    translation: 'Insa, have you heard? Our roof is being insulated next month. Finally! Last year only the ground floor was renovated. True, and the windows have already been replaced. Then it will finally be warmer for us this winter!',
    tokens: [
      { w: 'Insa' },
      { w: ',', plain: true },
      { w: 'hast' },
      { w: 'du' },
      { w: 'gehört' },
      { w: '?', plain: true },
      { w: 'Unser' },
      { w: 'Dach' },
      { w: 'wird' },
      { w: 'nächsten' },
      { w: 'Monat' },
      { w: 'isoliert' },
      { w: '.', plain: true },
      { w: 'Endlich' },
      { w: '!', plain: true },
      { w: 'Letztes' },
      { w: 'Jahr' },
      { w: 'wurde' },
      { w: 'nur' },
      { w: 'das' },
      { w: 'Erdgeschoss' },
      { w: 'renoviert' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'die' },
      { w: 'Fenster' },
      { w: 'sind' },
      { w: 'ja' },
      { w: 'schon' },
      { w: 'getauscht' },
      { w: 'worden' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'wird' },
      { w: 'es' },
      { w: 'diesen' },
      { w: 'Winter' },
      { w: 'endlich' },
      { w: 'wärmer' },
      { w: 'bei' },
      { w: 'uns' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was passiert nächsten Monat mit dem Dach?', qEn: 'What will happen to the roof next month?', options: ['Es wird abgerissen.', 'Es wird isoliert.', 'Es wird bemalt.', 'Es wird verkauft.'], optionsEn: ['It is being demolished.', 'It is being insulated.', 'It is being painted.', 'It is being sold.'], answer: 1,
        explain: '"Unser Dach wird nächsten Monat isoliert."' },
      { q: 'Was ist mit den Fenstern schon passiert?', qEn: 'What already happened to the windows?', options: ['Sie wurden getauscht.', 'Sie wurden zerbrochen.', 'Nichts.', 'Sie wurden gestrichen.'], optionsEn: ['They were swapped.', 'They were broken.', 'Nothing.', 'They were cancelled.'], answer: 0,
        explain: '"… die Fenster sind ja schon getauscht worden."' }
    ]
  },

  speaking: [
    { task: "Deine Nachbarin fragt, was am Haus gemacht wird.", taskEn: "Your neighbour asks what's being done to the building.", de: "Unser Dach wird nächsten Monat isoliert.", en: "Our roof is being insulated next month." },
    { task: "Sie fragt, was letztes Jahr gemacht wurde.", taskEn: "She asks what was done last year.", de: "Letztes Jahr wurde nur das Erdgeschoss renoviert.", en: "Last year only the ground floor was renovated." },
    { task: "Ein Freund fragt nach den Fenstern.", taskEn: "A friend asks about the windows.", de: "Die Fenster sind schon getauscht worden.", en: "The windows have already been replaced." },
    { task: "Eine Kollegin fragt, was für das Klima getan wird.", taskEn: "A colleague asks what's being done for the climate.", de: "Der Umweltschutz wird verbessert, und Ressourcen werden gespart.", en: "Environmental protection is being improved, and resources are being saved." },
    { task: "Ein Bekannter fragt, was bei der Umweltaktion gemacht wurde.", taskEn: "An acquaintance asks what was done at the environmental event.", de: "Die Bürger wurden aufgeklärt, und Müll wurde gesammelt.", en: "Citizens were informed, and rubbish was collected." },
    { task: "Rollenspiel: Ihr berichtet über das Recycling im Viertel.", taskEn: "Role-play: you report on recycling in the neighbourhood.", de: "Papier wird getrennt, Glas wurde schon immer gesammelt, und Plastik ist neu eingeführt worden.", en: "Paper is separated, glass has always been collected, and plastic has been newly introduced." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short news-style report (six to eight sentences) about an environmental or community event — using Passiv Präsens, Passiv Präteritum, and Passiv Perfekt at least once each, and being careful never to confuse worden with geworden.',
    starters: ['Letztes Jahr wurde …', 'Seitdem sind …', 'Heute wird …', '… ist … worden.', 'Er/Sie ist … geworden.'],
    placeholder: 'Letztes Jahr wurde eine neue Umweltaktion gestartet. Seitdem sind viele Maßnahmen ergriffen worden …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Das Auto ist repariert ___."',
      options: ['geworden', 'worden', 'werden'],
      answer: 1,
      explain: 'Passiv Perfekt always ends in worden, never geworden.'
    },
    gap: {
      sentence: ['Das Auto ', ' repariert.'],
      gaps: [ { answer: 'wurde', accepts: ['wurde'] } ],
      explain: 'Passiv Präteritum: wurde + Partizip II.'
    },
    match: {
      q: 'Match each passive tense to its structure.',
      pairs: [
        { noun: 'Präsens', art: 'werden + Partizip II' },
        { noun: 'Präteritum', art: 'wurde + Partizip II' },
        { noun: 'Perfekt', art: 'ist/sind + Partizip II + worden' }
      ]
    },
    builder: {
      target: 'Build: "New measures have been taken."',
      bank: ['Neue', 'Maßnahmen', 'sind', 'ergriffen', 'worden', '.'],
      answer: ['Neue', 'Maßnahmen', 'sind', 'ergriffen', 'worden', '.'],
      roles: { 'sind': 'r-verb', 'ergriffen': 'r-verb', 'worden': 'r-verb' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Das Auto ist repariert geworden.',
      right: 'Das Auto ist repariert worden.',
      explain: 'Passiv Perfekt always ends in worden — geworden is only for the verb werden (to become).'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Die Tür ___ geöffnet." (Präsens)', options: ['wird', 'wurde', 'ist'], answer: 0,
      explain: 'Passiv Präsens: werden + Partizip II.' },
    { q: 'Complete: "Der Brief ___ geschrieben." (Präteritum)', options: ['wird', 'wurde', 'ist'], answer: 1,
      explain: 'Passiv Präteritum: wurde + Partizip II.' },
    { q: 'Complete: "Das Hotel ist gebaut ___." (Perfekt)', options: ['geworden', 'worden', 'werden'], answer: 1,
      explain: 'Passiv Perfekt ends in worden, never geworden.' },
    { q: 'Which sentence uses "geworden" correctly?', options: ['Er ist Arzt geworden.', 'Das Auto ist repariert geworden.', 'Die Tür ist geöffnet geworden.'], answer: 0,
      explain: 'geworden is only correct with the verb werden itself (to become), e.g. "Er ist Arzt geworden."' },
    { q: 'Which sentence contains an error?', options: ['Die Grammatik wurde erklärt.', 'Die Grammatik wurde erklären.', 'Die Grammatik ist erklärt worden.'], answer: 1,
      explain: 'Passiv Präteritum needs Partizip II (erklärt), not the infinitive (erklären).' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'Passiv Präsens = werden + Partizip II (happening now). Passiv Präteritum = wurde + Partizip II (completed past, common in reports). Passiv Perfekt = ist/sind + Partizip II + worden (completed, from now).' },
    { c: 'r-verb', html: 'worden marks the Passiv Perfekt and never changes. geworden is only the Partizip II of the verb werden itself (to become) — never mix the two.' },
    { c: 'r-verb', html: 'Any active sentence can move to any of the three passive tenses — the object of the active sentence becomes the subject, and the tense of werden shifts accordingly.' }
  ],
  revisionTips: [
    'Before every passive sentence, ask: is this happening now, did it happen once in the past, or is it a completed action viewed from today?',
    'Whenever you write "worden", check it\'s truly Passiv Perfekt — if the sentence is really about becoming something, you need "geworden" instead.',
    'Practise transforming the same active sentence into all three passive tenses out loud until the pattern feels automatic.'
  ]
};

window.CHAPTER = CHAPTER;
