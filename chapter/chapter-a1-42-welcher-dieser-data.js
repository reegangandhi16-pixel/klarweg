/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 5 · Chapter 42
   "Welcher & Dieser"  (which? & this — der-words)
   Vocabulary source: uploaded chapter-42 word list (87 words).
   Theme = a trip to the department store. Recycles Ch1–41.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-42-welcher-dieser',
  phase: 'A1 · Phase 5',
  number: 42,
  title: 'Welcher & Dieser',
  titleEn: 'which & this',
  description: 'Point and pick. welcher asks "which one?" and dieser says "this one" — and both take the same endings as der/die/das. Welches Buch möchtest du? — Dieses Buch hier. Master the der-word endings across all three cases.',
  xp: 180,
  time: 35,
  difficulty: 'Beginner',
  nextChapter: { number: 43, title: 'Small Talk & man', titleEn: 'Small Talk & man' , href: 'chapter-a1-43-smalltalk-man.html' },

  prevChapter: { number: 41, title: 'Dativpronomen', titleEn: 'Dative Pronouns', href: 'chapter-a1-41-dativpronomen.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Vreni and Jonas hit a department store before the exam, debating which jacket looks best, which size fits, and which shop might actually have it in stock — every choice a "which one?" and a "this one": welche Jacke, diese Größe, dieses Geschäft.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear welcher/dieser change ending with gender and case'
    ],
    scene: 'Im Kaufhaus \u2014 vor der Pr\u00fcfung, Berlin',
    femaleSpeakers: ['Vreni'],
    dialogue: [
      { speaker: 'Vreni', tokens: [
        { w: 'Komm', role: 'r-verb', en: 'come', hi: 'आओ', pron: 'kom', type: 'Verb · imperative' },
        { w: ',', plain: true },
        { w: 'Jonas', role: 'r-name', en: 'Jonas', hi: 'योनास', pron: 'YO-nas', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Welche', role: 'r-akkusativ', en: 'which (fem.)', hi: 'कौनसी', pron: 'VEL-khuh', type: 'Question word · Determiner', why: 'welche/welcher = which (this chapter).', ex: 'Welche Jacke gefällt dir?', exEn: 'Which jacket do you like?' },
        { w: 'Jacke', role: 'r-akkusativ', en: 'jacket', hi: 'जैकेट', pron: 'YA-kuh', type: 'Noun · fem.' },
        { w: 'gefällt', role: 'r-verb', en: 'pleases', hi: 'पसंद है', pron: 'ge-FELT', type: 'Verb · gefallen (sie)' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: '?', plain: true }
      ], en: 'Come, Jonas! Which jacket do you like?', hi: 'Aao, Jonas! Tumhe kaunsi jacket pasand hai?' },
      { speaker: 'Jonas', side: 'right', tokens: [
        { w: 'Diese', role: 'r-akkusativ', en: 'this (fem.)', hi: 'यह', pron: 'DEE-zuh', type: 'Determiner', why: 'diese/dieser = this (this chapter).', ex: 'Diese Jacke gefällt mir.', exEn: 'I like this jacket.' },
        { w: 'Jacke', role: 'r-akkusativ', en: 'jacket', hi: 'जैकेट', pron: 'YA-kuh', type: 'Noun · fem.' },
        { w: 'gefällt', role: 'r-verb', en: 'pleases', hi: 'पसंद है', pron: 'ge-FELT', type: 'Verb · gefallen (sie)' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'welche', role: 'r-akkusativ', en: 'which (fem.)', hi: 'कौनसी', pron: 'VEL-khuh', type: 'Question word · Determiner' },
        { w: 'Größe', role: 'r-akkusativ', en: 'size', hi: 'साइज़', pron: 'GRÖ-suh', type: 'Noun · fem.' },
        { w: 'brauchst', role: 'r-verb', en: 'do you need', hi: 'चाहिए', pron: 'browkhst', type: 'Verb · brauchen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'I like this jacket. But which size do you need?', hi: 'Mujhe yeh jacket pasand hai. Par tumhe kaunsa size chahiye?' },
      { speaker: 'Vreni', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'brauche', role: 'r-verb', en: 'need', hi: 'चाहिए', pron: 'BROW-khuh', type: 'Verb · brauchen (ich)' },
        { w: 'Größe', role: 'r-akkusativ', en: 'size', hi: 'साइज़', pron: 'GRÖ-suh', type: 'Noun · fem.' },
        { w: 'vierzig', role: 'r-akkusativ', en: 'forty', hi: 'चालीस', pron: 'FEER-tsikh', type: 'Number' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'dieser', role: 'r-subject', en: 'this (masc.)', hi: 'यह', pron: 'DEE-zer', type: 'Determiner' },
        { w: 'Laden', role: 'r-subject', en: 'shop', hi: 'दुकान', pron: 'LAH-den', type: 'Noun · masc.', why: 'der Laden (this chapter).', ex: 'Dieser Laden hat viele Größen.', exEn: 'This shop has many sizes.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben' },
        { w: 'sie', role: 'r-akkusativ', en: 'it (fem.)', hi: 'यह', pron: 'zee', type: 'Pronoun · acc.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '.', plain: true }
      ], en: 'I need size forty. But this shop does not have it.', hi: 'Mujhe size chaalees chahiye. Par is dukan mein yeh nahi hai.' },
      { speaker: 'Jonas', side: 'right', tokens: [
        { w: 'Welcher', role: 'r-subject', en: 'which (masc.)', hi: 'कौनसा', pron: 'VEL-kher', type: 'Question word · Determiner' },
        { w: 'Laden', role: 'r-subject', en: 'shop', hi: 'दुकान', pron: 'LAH-den', type: 'Noun · masc.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben' },
        { w: 'sie', role: 'r-akkusativ', en: 'it (fem.)', hi: 'यह', pron: 'zee', type: 'Pronoun · acc.' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'Which shop has it then?', hi: 'Toh kaunsi dukan mein hai?' },
      { speaker: 'Vreni', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Laden', role: 'r-subject', en: 'shop', hi: 'दुकान', pron: 'LAH-den', type: 'Noun · masc.' },
        { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben' },
        { w: 'diese', role: 'r-akkusativ', en: 'this (fem.)', hi: 'यह', pron: 'DEE-zuh', type: 'Determiner' },
        { w: 'Größe', role: 'r-akkusativ', en: 'size', hi: 'साइज़', pron: 'GRÖ-suh', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Gehen', role: 'r-verb', en: 'shall we go', hi: 'चलें', pron: 'GAY-en', type: 'Verb · gehen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'dorthin', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort-HIN', type: 'Adverb · direction' },
        { w: '?', plain: true }
      ], en: 'The shop there has this size. Shall we go there?', hi: 'Woh dukan mein yeh size hai. Chalein wahaan?' },
      { speaker: 'Jonas', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Welcher', role: 'r-subject', en: 'which (masc.)', hi: 'कौनसा', pron: 'VEL-kher', type: 'Question word · Determiner' },
        { w: 'Weg', role: 'r-subject', en: 'way', hi: 'रास्ता', pron: 'vayk', type: 'Noun · masc.', why: 'der Weg (this chapter, recycled).', ex: 'Welcher Weg ist schneller?', exEn: 'Which way is faster?' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'schneller', role: 'r-adjective', en: 'faster', hi: 'तेज़', pron: 'SHNE-ler', type: 'Adjective' },
        { w: '?', plain: true }
      ], en: 'Yes, gladly! Which way is faster?', hi: 'Haan, khushi se! Kaunsa rasta tez hai?' },
      { speaker: 'Vreni', tokens: [
        { w: 'Dieser', role: 'r-subject', en: 'this (masc.)', hi: 'यह', pron: 'DEE-zer', type: 'Determiner' },
        { w: 'Weg', role: 'r-subject', en: 'way', hi: 'रास्ता', pron: 'vayk', type: 'Noun · masc.' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'schneller', role: 'r-adjective', en: 'faster', hi: 'तेज़', pron: 'SHNE-ler', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Komm', role: 'r-verb', en: 'come', hi: 'आओ', pron: 'kom', type: 'Verb · imperative' },
        { w: '!', plain: true }
      ], en: 'This way here is faster. Come!', hi: 'Yeh rasta tez hai. Aao!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de r-question">welcher</span> asks "which one?" and <span class="de r-article">dieser</span> answers "this one." Both are <strong>der-words</strong>: they copy the exact ending of <span class="de">der/die/das</span>. So der Film → <span class="de">welcher/dieser Film</span>, die Tasche → <span class="de">welche/diese Tasche</span>, das Buch → <span class="de">welches/dieses Buch</span>. Learn one ending pattern and you have both words across all three cases.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is the DER-WORDS welcher (which?) and dieser (this), used to choose and identify things. ' +
    'The learner wrote sentences with welcher/dieser below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- welcher and dieser take the SAME endings as the definite article der/die/das (they are "der-words").\n' +
    '- Nominative: masc welcher/dieser, fem welche/diese, neut welches/dieses, plural welche/diese.\n' +
    '- Accusative: masc welchen/diesen, fem welche/diese, neut welches/dieses, plural welche/diese (only masculine changes).\n' +
    '- Dative: masc welchem/diesem, fem welcher/dieser, neut welchem/diesem, plural welchen/diesen (+n on the noun).\n' +
    '- Choose the case from the verb/preposition: subject → nominative; direct object → accusative; after a dative verb or dative preposition (mit, zu, bei…) → dative. "Welches Buch liest du?" (acc.), "Mit welchem Bus?" (dat.).\n' +
    '- welcher asks a question (which?); dieser points (this). Do not mix them up.\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Ending check:</b> one sentence on whether the welcher/dieser ending matched the gender and case.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — your welcher/dieser endings match der/die/das. On to <span class="de">Small Talk & man</span>.',
    mid: 'Good. Re-read the ending table once (only masc. changes in the accusative), then continue.',
    low: 'Worth another pass — drill the welcher/dieser endings against der/die/das, then retake.'
  },

  parserSentence: [
    { w: 'Welches', role: 'r-question' }, { w: 'Buch', role: 'r-object' },
    { w: 'liest', role: 'r-verb' }, { w: 'du', role: 'r-subject' },
    { w: '?', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See that welcher/dieser just copy the der/die/das endings.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Shop the department store with the gang — every choice is a welcher/dieser.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn welcher & dieser plus the shop, product and stationery words.' },
    { id: 'grammar',    label: 'Welcher & Dieser', tag: 'core',
      objective: 'Master the der-word endings across nominative, accusative and dative.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a shopping text full of welcher/dieser and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch which item each person chooses, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Ask "which one?" and answer "this one" while choosing things.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write sentences asking with welcher and answering with dieser.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill welcher/dieser endings and case choice with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 180 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'welcher & dieser plus the shop and product words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '16 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'der-word ending drills, welcher-vs-dieser practice, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'Full welcher/dieser declension tables next to der/die/das, with Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Welcher? / Welche? / Welches?', text: 'Ask "which one?" for any gender' },
    { de: 'Dieser / Diese / Dieses', text: 'Answer "this one"' },
    { de: 'welchen / diesen', text: 'Use the accusative (masc.)' },
    { de: 'welchem / diesem', text: 'Use the dative' },
    { de: 'der → dieser', text: 'Copy the der/die/das endings' }
  ],

  // ---------- Vocabulary (87 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'diese/dieser', pos: 'determiner', en: 'this', hi: 'यह', ex: 'Dieser Bleistift ist gut.', exEn: 'This pencil is good.' },
    { de: 'welche/welcher', pos: 'determiner', en: 'which', hi: 'कौन-सा', ex: 'Welches Buch möchtest du?', exEn: 'Which book do you want?' },
    // ===== Active Support =====
    { de: 'auf sein', pos: 'verb', en: 'to be open', hi: 'खुला होना', ex: 'Der Laden ist auf.', exEn: 'The shop is open.', conj: { praesens: 'ist auf', praeteritum: 'war auf', perfekt: 'ist auf gewesen' } },
    { de: 'Gramm', art: 'das', gender: 'n', plural: 'Gramm', pos: 'noun', en: 'gram', hi: 'ग्राम', ex: 'Ich kaufe 200 Gramm Käse.', exEn: 'I buy 200 grams of cheese.' },
    { de: 'Kaufhaus', art: 'das', gender: 'n', plural: 'Kaufhäuser', pos: 'noun', en: 'department store', hi: 'डिपार्टमेंट स्टोर', ex: 'Das Kaufhaus ist groß.', exEn: 'The department store is big.' },
    { de: 'Kilo', art: 'das', gender: 'n', plural: 'Kilo', pos: 'noun', en: 'kilo', hi: 'किलो', ex: 'Ein Kilo Äpfel, bitte.', exEn: 'A kilo of apples, please.' },
    { de: 'Kilogramm', art: 'das', gender: 'n', plural: 'Kilogramm', pos: 'noun', en: 'kilogram', hi: 'किलोग्राम', ex: 'Das sind zwei Kilogramm.', exEn: 'That\u2019s two kilograms.' },
    { de: 'Kleidergeschäft', art: 'das', gender: 'n', plural: 'Kleidergeschäfte', pos: 'noun', en: 'clothes shop', hi: 'कपड़े की दुकान', ex: 'Das Kleidergeschäft ist neu.', exEn: 'The clothes shop is new.' },
    { de: 'Papier', art: 'das', gender: 'n', plural: 'Papiere', pos: 'noun', en: 'paper', hi: 'काग़ज़', ex: 'Ich brauche Papier.', exEn: 'I need paper.' },
    { de: 'Produkt', art: 'das', gender: 'n', plural: 'Produkte', pos: 'noun', en: 'product', hi: 'उत्पाद', ex: 'Welches Produkt ist besser?', exEn: 'Which product is better?' },
    { de: 'Becher', art: 'der', gender: 'm', plural: 'Becher', pos: 'noun', en: 'cup, tub', hi: 'कप', ex: 'Ein Becher Joghurt.', exEn: 'A tub of yoghurt.' },
    { de: 'Bleistift', art: 'der', gender: 'm', plural: 'Bleistifte', pos: 'noun', en: 'pencil', hi: 'पेंसिल', ex: 'Dieser Bleistift ist billig.', exEn: 'This pencil is cheap.' },
    { de: 'Block', art: 'der', gender: 'm', plural: 'Blöcke', pos: 'noun', en: 'notepad', hi: 'नोटपैड', ex: 'Welcher Block ist besser?', exEn: 'Which notepad is better?' },
    { de: 'Buchladen', art: 'der', gender: 'm', plural: 'Buchläden', pos: 'noun', en: 'bookshop', hi: 'किताब की दुकान', ex: 'Der Buchladen ist offen.', exEn: 'The bookshop is open.' },
    { de: 'Einkauf', art: 'der', gender: 'm', plural: 'Einkäufe', pos: 'noun', en: 'shopping, purchase', hi: 'खरीदारी', ex: 'Der Einkauf war teuer.', exEn: 'The shopping was expensive.' },
    { de: 'Haushalt', art: 'der', gender: 'm', plural: 'Haushalte', pos: 'noun', en: 'household', hi: 'गृहस्थी', ex: 'Für den Haushalt brauche ich Seife.', exEn: 'For the household I need soap.' },
    { de: 'Laden', art: 'der', gender: 'm', plural: 'Läden', pos: 'noun', en: 'shop', hi: 'दुकान', ex: 'Der Laden ist geschlossen.', exEn: 'The shop is closed.' },
    { de: 'Liter', art: 'der', gender: 'm', plural: 'Liter', pos: 'noun', en: 'litre', hi: 'लीटर', ex: 'Ein Liter Milch, bitte.', exEn: 'A litre of milk, please.' },
    { de: 'Schuhladen', art: 'der', gender: 'm', plural: 'Schuhläden', pos: 'noun', en: 'shoe shop', hi: 'जूते की दुकान', ex: 'Der Schuhladen ist im Erdgeschoss.', exEn: 'The shoe shop is on the ground floor.' },
    { de: 'Shop', art: 'der', gender: 'm', plural: 'Shops', pos: 'noun', en: 'shop', hi: 'दुकान', ex: 'Der Shop ist online.', exEn: 'The shop is online.' },
    { de: 'Dose', art: 'die', gender: 'f', plural: 'Dosen', pos: 'noun', en: 'can, jar', hi: 'डिब्बा', ex: 'Eine Dose Tomaten.', exEn: 'A can of tomatoes.' },
    { de: 'Größe', art: 'die', gender: 'f', plural: 'Größen', pos: 'noun', en: 'size', hi: 'आकार', ex: 'Welche Größe brauchst du?', exEn: 'Which size do you need?' },
    { de: 'Kamera', art: 'die', gender: 'f', plural: 'Kameras', pos: 'noun', en: 'camera', hi: 'कैमरा', ex: 'Diese Kamera ist teuer.', exEn: 'This camera is expensive.' },
    { de: 'Kasse', art: 'die', gender: 'f', plural: 'Kassen', pos: 'noun', en: 'checkout, till', hi: 'काउंटर', ex: 'Die Kasse ist dort.', exEn: 'The checkout is there.' },
    { de: 'Mode', art: 'die', gender: 'f', plural: 'Moden', pos: 'noun', en: 'fashion', hi: 'फ़ैशन', ex: 'Die Mode ist topaktuell.', exEn: 'The fashion is cutting-edge.' },
    { de: 'Packung', art: 'die', gender: 'f', plural: 'Packungen', pos: 'noun', en: 'packet, pack', hi: 'पैकेट', ex: 'Eine Packung Kekse.', exEn: 'A packet of biscuits.' },
    { de: 'Tüte', art: 'die', gender: 'f', plural: 'Tüten', pos: 'noun', en: 'bag', hi: 'थैली', ex: 'Brauchen Sie eine Tüte?', exEn: 'Do you need a bag?' },
    { de: 'Uhr', art: 'die', gender: 'f', plural: 'Uhren', pos: 'noun', en: 'clock, watch', hi: 'घड़ी', ex: 'Diese Uhr ist schön.', exEn: 'This watch is nice.' },
    { de: 'Zeitschrift', art: 'die', gender: 'f', plural: 'Zeitschriften', pos: 'noun', en: 'magazine', hi: 'पत्रिका', ex: 'Welche Zeitschrift liest du?', exEn: 'Which magazine do you read?' },
    { de: 'Öffnungszeiten', art: 'die', gender: 'pl', plural: 'Öffnungszeiten', pos: 'noun', en: 'opening hours', hi: 'खुलने का समय', ex: 'Die Öffnungszeiten sind hier.', exEn: 'The opening hours are here.' },
    { de: 'geschlossen', pos: 'adjective', en: 'closed', hi: 'बंद', ex: 'Der Laden ist geschlossen.', exEn: 'The shop is closed.' },
    { de: 'geöffnet', pos: 'adjective', en: 'open', hi: 'खुला', ex: 'Die Bäckerei ist geöffnet.', exEn: 'The bakery is open.' },
    { de: 'kriegen', pos: 'verb', en: 'to get', hi: 'पाना', ex: 'Wo kriege ich das?', exEn: 'Where do I get that?', conj: { praesens: 'kriegt', praeteritum: 'kriegte', perfekt: 'hat gekriegt' } },
    { de: 'online', pos: 'adverb', en: 'online', hi: 'ऑनलाइन', ex: 'Ich kaufe online ein.', exEn: 'I shop online.' },
    { de: 'schließen', pos: 'verb', en: 'to close', hi: 'बंद करना', ex: 'Der Laden schließt um acht.', exEn: 'The shop closes at eight.', conj: { praesens: 'schließt', praeteritum: 'schloss', perfekt: 'hat geschlossen' } },
    { de: 'shoppen', pos: 'verb', en: 'to shop', hi: 'खरीदारी करना', ex: 'Wir shoppen im Kaufhaus.', exEn: 'We shop in the department store.', conj: { praesens: 'shoppt', praeteritum: 'shoppte', perfekt: 'hat geshoppt' } },
    { de: 'shoppen gehen', pos: 'verb', en: 'to go shopping', hi: 'खरीदारी करने जाना', ex: 'Wir gehen shoppen.', exEn: 'We go shopping.', conj: { praesens: 'geht shoppen', praeteritum: 'ging shoppen', perfekt: 'ist shoppen gegangen' } },
    { de: 'umtauschen', pos: 'verb', en: 'to exchange', hi: 'बदलना', ex: 'Ich tausche die Hose um.', exEn: 'I exchange the trousers.', conj: { praesens: 'tauscht um', praeteritum: 'tauschte um', perfekt: 'hat umgetauscht' } },
    { de: 'zu sein', pos: 'verb', en: 'to be closed', hi: 'बंद होना', ex: 'Der Laden ist zu.', exEn: 'The shop is closed.', conj: { praesens: 'ist zu', praeteritum: 'war zu', perfekt: 'ist zu gewesen' } },
    { de: 'öffnen', pos: 'verb', en: 'to open', hi: 'खोलना', ex: 'Die Bäckerei öffnet um sechs.', exEn: 'The bakery opens at six.', conj: { praesens: 'öffnet', praeteritum: 'öffnete', perfekt: 'hat geöffnet' } },
    // ===== Passive =====
    { de: 'Design', art: 'das', gender: 'n', plural: 'Designs', pos: 'noun', en: 'design', hi: 'डिज़ाइन', ex: 'Das Design ist modern.', exEn: 'The design is modern.' },
    { de: 'Duschgel', art: 'das', gender: 'n', plural: 'Duschgels', pos: 'noun', en: 'shower gel', hi: 'शावर जेल', ex: 'Das Duschgel ist im Bad.', exEn: 'The shower gel is in the bathroom.' },
    { de: 'Elektrogerät', art: 'das', gender: 'n', plural: 'Elektrogeräte', pos: 'noun', en: 'electrical device', hi: 'बिजली उपकरण', ex: 'Das Elektrogerät ist neu.', exEn: 'The electrical device is new.' },
    { de: 'Fitnessgerät', art: 'das', gender: 'n', plural: 'Fitnessgeräte', pos: 'noun', en: 'fitness equipment', hi: 'फ़िटनेस उपकरण', ex: 'Das Fitnessgerät ist teuer.', exEn: 'The fitness equipment is expensive.' },
    { de: 'Fotozubehör', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'photo accessories', hi: 'फ़ोटो सामान', ex: 'Das Fotozubehör ist oben.', exEn: 'The photo accessories are upstairs.' },
    { de: 'Gadget', art: 'das', gender: 'n', plural: 'Gadgets', pos: 'noun', en: 'gadget', hi: 'गैजेट', ex: 'Dieses Gadget ist cool.', exEn: 'This gadget is cool.' },
    { de: 'Label', art: 'das', gender: 'n', plural: 'Labels', pos: 'noun', en: 'label, brand', hi: 'लेबल', ex: 'Das Label ist bekannt.', exEn: 'The brand is well known.' },
    { de: 'Maß', art: 'das', gender: 'n', plural: 'Maße', pos: 'noun', en: 'measure', hi: 'माप', ex: 'Welches Maß brauchst du?', exEn: 'Which measure do you need?' },
    { de: 'Modell', art: 'das', gender: 'n', plural: 'Modelle', pos: 'noun', en: 'model', hi: 'मॉडल', ex: 'Welches Modell kaufst du?', exEn: 'Which model do you buy?' },
    { de: 'Parfüm', art: 'das', gender: 'n', plural: 'Parfüms', pos: 'noun', en: 'perfume', hi: 'इत्र', ex: 'Das Parfüm riecht gut.', exEn: 'The perfume smells good.' },
    { de: 'Untergeschoss', art: 'das', gender: 'n', plural: 'Untergeschosse', pos: 'noun', en: 'basement', hi: 'तहख़ाना', ex: 'Die Schuhe sind im Untergeschoss.', exEn: 'The shoes are in the basement.' },
    { de: 'Deckel', art: 'der', gender: 'm', plural: 'Deckel', pos: 'noun', en: 'lid', hi: 'ढक्कन', ex: 'Der Deckel ist blau.', exEn: 'The lid is blue.' },
    { de: 'Designfan', art: 'der', gender: 'm', plural: 'Designfans', pos: 'noun', en: 'design fan', hi: 'डिज़ाइन प्रेमी', ex: 'Er ist ein Designfan.', exEn: 'He is a design fan.' },
    { de: 'Flagship-Store', art: 'der', gender: 'm', plural: 'Flagship-Stores', pos: 'noun', en: 'flagship store', hi: 'फ़्लैगशिप स्टोर', ex: 'Der Flagship-Store ist riesig.', exEn: 'The flagship store is huge.' },
    { de: 'Kugelschreiber', art: 'der', gender: 'm', plural: 'Kugelschreiber', pos: 'noun', en: 'ballpoint pen', hi: 'बॉलपेन', ex: 'Dieser Kugelschreiber schreibt gut.', exEn: 'This ballpoint pen writes well.' },
    { de: 'Modefan', art: 'der', gender: 'm', plural: 'Modefans', pos: 'noun', en: 'fashionista', hi: 'फ़ैशन प्रेमी', ex: 'Anna ist ein Modefan.', exEn: 'Anna is a fashionista.' },
    { de: 'Schmuck', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'jewellery', hi: 'गहने', ex: 'Der Schmuck ist teuer.', exEn: 'The jewellery is expensive.' },
    { de: 'Secondhand-Laden', art: 'der', gender: 'm', plural: 'Secondhand-Läden', pos: 'noun', en: 'secondhand shop', hi: 'पुरानी चीज़ों की दुकान', ex: 'Der Secondhand-Laden ist billig.', exEn: 'The secondhand shop is cheap.' },
    { de: 'USB-Stick', art: 'der', gender: 'm', plural: 'USB-Sticks', pos: 'noun', en: 'USB stick', hi: 'यूएसबी स्टिक', ex: 'Der USB-Stick ist klein.', exEn: 'The USB stick is small.' },
    { de: 'Abendkleidung', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'evening wear', hi: 'शाम के कपड़े', ex: 'Die Abendkleidung ist elegant.', exEn: 'The evening wear is elegant.' },
    { de: 'Bademode', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'swimwear', hi: 'तैराकी पोशाक', ex: 'Die Bademode ist im Sommer da.', exEn: 'The swimwear is here in summer.' },
    { de: 'CD', art: 'die', gender: 'f', plural: 'CDs', pos: 'noun', en: 'CD', hi: 'सीडी', ex: 'Diese CD ist alt.', exEn: 'This CD is old.' },
    { de: 'Damenmode', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'women\u2019s fashion', hi: 'महिला फ़ैशन', ex: 'Die Damenmode ist oben.', exEn: 'The women\u2019s fashion is upstairs.' },
    { de: 'Erfindung', art: 'die', gender: 'f', plural: 'Erfindungen', pos: 'noun', en: 'invention', hi: 'आविष्कार', ex: 'Eine tolle Erfindung!', exEn: 'A great invention!' },
    { de: 'Freizeitkleidung', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'casual wear', hi: 'आरामदायक कपड़े', ex: 'Die Freizeitkleidung ist bequem.', exEn: 'The casual wear is comfortable.' },
    { de: 'Haushaltswaren', art: 'die', gender: 'pl', plural: 'Haushaltswaren', pos: 'noun', en: 'household goods', hi: 'घरेलू सामान', ex: 'Die Haushaltswaren sind unten.', exEn: 'The household goods are downstairs.' },
    { de: 'Herrenmode', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'men\u2019s fashion', hi: 'पुरुष फ़ैशन', ex: 'Die Herrenmode ist im ersten Stock.', exEn: 'The men\u2019s fashion is on the first floor.' },
    { de: 'Kosmetik', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'cosmetics', hi: 'सौंदर्य प्रसाधन', ex: 'Die Kosmetik ist im Erdgeschoss.', exEn: 'The cosmetics are on the ground floor.' },
    { de: 'Parfümerie', art: 'die', gender: 'f', plural: 'Parfümerien', pos: 'noun', en: 'perfume shop', hi: 'इत्र की दुकान', ex: 'Die Parfümerie ist neben der Kasse.', exEn: 'The perfume shop is next to the checkout.' },
    { de: 'Saison', art: 'die', gender: 'f', plural: 'Saisons', pos: 'noun', en: 'season', hi: 'मौसम', ex: 'Die Saison beginnt im Mai.', exEn: 'The season starts in May.' },
    { de: 'Schreibwaren', art: 'die', gender: 'pl', plural: 'Schreibwaren', pos: 'noun', en: 'stationery', hi: 'लेखन सामग्री', ex: 'Die Schreibwaren sind dort.', exEn: 'The stationery is there.' },
    { de: 'Spielwaren', art: 'die', gender: 'pl', plural: 'Spielwaren', pos: 'noun', en: 'toys', hi: 'खिलौने', ex: 'Die Spielwaren sind für Kinder.', exEn: 'The toys are for children.' },
    { de: 'Sportkleidung', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'sportswear', hi: 'खेल पोशाक', ex: 'Die Sportkleidung ist bequem.', exEn: 'The sportswear is comfortable.' },
    { de: 'Tafel', art: 'die', gender: 'f', plural: 'Tafeln', pos: 'noun', en: 'bar (of chocolate); board', hi: 'पट्टी', ex: 'Eine Tafel Schokolade.', exEn: 'A bar of chocolate.' },
    { de: 'Technik', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'technology', hi: 'तकनीक', ex: 'Die Technik ist im dritten Stock.', exEn: 'The technology is on the third floor.' },
    { de: 'Variation', art: 'die', gender: 'f', plural: 'Variationen', pos: 'noun', en: 'variation', hi: 'विविधता', ex: 'Es gibt viele Variationen.', exEn: 'There are many variations.' },
    { de: 'Verpackung', art: 'die', gender: 'f', plural: 'Verpackungen', pos: 'noun', en: 'packaging', hi: 'पैकेजिंग', ex: 'Die Verpackung ist schön.', exEn: 'The packaging is nice.' },
    { de: 'Ware', art: 'die', gender: 'f', plural: 'Waren', pos: 'noun', en: 'goods, merchandise', hi: 'माल', ex: 'Die Ware ist neu.', exEn: 'The goods are new.' },
    { de: 'topaktuell', pos: 'adjective', en: 'cutting-edge, up-to-date', hi: 'अत्याधुनिक', ex: 'Das Handy ist topaktuell.', exEn: 'The phone is cutting-edge.' },
    { de: 'zuhaben', pos: 'verb', en: 'to be closed', hi: 'बंद होना', ex: 'Der Laden hat sonntags zu.', exEn: 'The shop is closed on Sundays.', conj: { praesens: 'hat zu', praeteritum: 'hatte zu', perfekt: 'hat zugehabt' } },
    { de: 'zurückschicken', pos: 'verb', en: 'to send back', hi: 'वापस भेजना', ex: 'Ich schicke die Ware zurück.', exEn: 'I send the goods back.', conj: { praesens: 'schickt zurück', praeteritum: 'schickte zurück', perfekt: 'hat zurückgeschickt' } },
    // ===== Reference / System =====
    { de: 'Demonstrativartikel', art: 'der', gender: 'm', plural: 'Demonstrativartikel', pos: 'noun', en: 'demonstrative article', hi: 'संकेतवाचक उपपद', ex: '"Dieser" ist ein Demonstrativartikel.', exEn: '"Dieser" is a demonstrative article.' },
    { de: 'Interrogativartikel', art: 'der', gender: 'm', plural: 'Interrogativartikel', pos: 'noun', en: 'interrogative article', hi: 'प्रश्नवाचक उपपद', ex: '"Welcher" ist ein Interrogativartikel.', exEn: '"Welcher" is an interrogative article.' },
    { de: 'Kleiderkauf', art: 'der', gender: 'm', plural: 'Kleiderkäufe', pos: 'noun', en: 'clothes shopping', hi: 'कपड़े की खरीदारी', ex: 'Der Kleiderkauf macht Spaß.', exEn: 'Clothes shopping is fun.' }
  ],

  // ---------- Welcher & Dieser (rule cards → accordion) ----------
  grammar: [
    {
      title: 'welcher vs dieser',
      goldenRule: 'Both are <b>der-words</b>: their ending is the last letter of <b>der / die / das</b>.',
      formula: [
        'de<b>r</b>  →  welche<b>r</b> · diese<b>r</b>',
        'di<b>e</b>  →  welch<b>e</b>  · dies<b>e</b>',
        'da<b>s</b>  →  welche<b>s</b> · diese<b>s</b>'
      ],
      memoryTrick: 'Article ka <b>aakhri akshar</b> uthao aur welch-/dies- ke peeche lagao. Naya table yaad nahi karna.',
      recap: [
        '<b>welcher</b> asks, <b>dieser</b> points.',
        'Endings copy <b>der/die/das</b> exactly.',
        'Accusative: only masculine moves (welchen / diesen).'
      ],
      body: [
        'Two words, one ending system. <span class="de r-question">welcher</span> asks the question, <span class="de r-article">dieser</span> gives the answer.'
      ],
      table: {
        head: ['Word', 'Meaning', 'Example'],
        rows: [
          ['<span class="de r-question">welcher?</span>', 'which one? (question)', '<span class="de">Welches Buch möchtest du?</span>'],
          ['<span class="de r-article">dieser</span>', 'this one (pointing)', '<span class="de">Dieses Buch hier.</span>'],
          ['question + answer', 'pair them', '<span class="de">Welche Tasche? \u2014 Diese Tasche.</span>'],
          ['der-words', 'both', 'they copy der/die/das endings']
        ]
      },
      note: 'Use <b>welcher</b> to ask "which?", <b>dieser</b> to point at "this". Both are <b>der-words</b>: their endings are identical to the definite article der/die/das.',
      hinglish: 'Do shabd, ek ending system. <b>welcher</b> sawaal poochta hai ("kaun-sa?"), <b>dieser</b> jawab deta hai ("yeh waala"). Dono <b>der-words</b> hain: ending bilkul der/die/das jaisi.'
    },
    {
      title: 'Nominative endings',
      body: [
        'In the nominative (the subject), the ending matches der/die/das exactly.'
      ],
      table: {
        head: ['Gender', 'der/die/das', 'welcher', 'dieser'],
        rows: [
          ['masculine', '<span class="de">der</span>', '<span class="de r-question">welcher</span>', '<span class="de r-article">dieser</span>'],
          ['feminine', '<span class="de">die</span>', '<span class="de r-question">welche</span>', '<span class="de r-article">diese</span>'],
          ['neuter', '<span class="de">das</span>', '<span class="de r-question">welches</span>', '<span class="de r-article">dieses</span>'],
          ['plural', '<span class="de">die</span>', '<span class="de r-question">welche</span>', '<span class="de r-article">diese</span>']
        ]
      },
      note: 'Look at the last letter: de<b>r</b> → welche<b>r</b>/diese<b>r</b>; di<b>e</b> → welch<b>e</b>/dies<b>e</b>; da<b>s</b> → welche<b>s</b>/diese<b>s</b>. The der/die/das ending is hidden in the word.',
      hinglish: 'Aakhri akshar dekho: de<b>r</b> → welche<b>r</b>/diese<b>r</b>; di<b>e</b> → welch<b>e</b>/dies<b>e</b>; da<b>s</b> → welche<b>s</b>/diese<b>s</b>. der/die/das ki ending shabd mein chhupi hai.'
    },
    {
      title: 'Accusative: only masculine changes',
      body: [
        'Just like der → den, the masculine adds <strong>-en</strong> in the accusative. Feminine, neuter and plural stay the same as the nominative.'
      ],
      table: {
        head: ['Gender', 'Nominative', 'Accusative'],
        rows: [
          ['masculine', '<span class="de">welcher/dieser</span>', '<span class="de r-akkusativ">welchen/diesen</span>'],
          ['feminine', '<span class="de">welche/diese</span>', '<span class="de r-akkusativ">welche/diese</span>'],
          ['neuter', '<span class="de">welches/dieses</span>', '<span class="de r-akkusativ">welches/dieses</span>'],
          ['plural', '<span class="de">welche/diese</span>', '<span class="de r-akkusativ">welche/diese</span>']
        ]
      },
      note: 'Only the masculine moves: "Welchen Stift nimmst du? \u2014 Diesen Stift." (der → den, so welcher → welchen). Everything else is unchanged from the nominative.',
      hinglish: 'der → den ki tarah, sirf masculine accusative mein <b>-en</b> jodta hai: "Welchen Stift? \u2014 Diesen Stift." Feminine, neuter, plural nominative jaise hi rehte hain.'
    },
    {
      title: 'Dative endings',
      body: [
        'After a dative verb or a dative preposition (mit, zu, bei, von …), use the dative endings \u2014 same as dem/der/dem.'
      ],
      table: {
        head: ['Gender', 'Article', 'welcher', 'dieser'],
        rows: [
          ['masculine', '<span class="de">dem</span>', '<span class="de r-dativ">welchem</span>', '<span class="de r-dativ">diesem</span>'],
          ['feminine', '<span class="de">der</span>', '<span class="de r-dativ">welcher</span>', '<span class="de r-dativ">dieser</span>'],
          ['neuter', '<span class="de">dem</span>', '<span class="de r-dativ">welchem</span>', '<span class="de r-dativ">diesem</span>'],
          ['plural', '<span class="de">den</span>', '<span class="de r-dativ">welchen</span>', '<span class="de r-dativ">diesen</span>']
        ]
      },
      note: 'Masc/neut → <b>-em</b> (welchem/diesem), fem → <b>-er</b> (welcher/dieser), plural → <b>-en</b> + noun adds -n. "Mit welchem Bus fährst du?" \u2014 "Mit diesem Bus."',
      hinglish: 'Dative verb ya dative preposition (mit, zu, bei …) ke baad dative ending: masc/neut → <b>-em</b>, fem → <b>-er</b>, plural → <b>-en</b>. "Mit welchem Bus?" \u2014 "Mit diesem Bus."'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four welcher/dieser traps to avoid.' ],
      mistakes: [
        { wrong: 'Welche Buch liest du?', right: 'Welches Buch liest du?', why: 'Buch is neuter (das) → welches.' },
        { wrong: 'Ich nehme dieser Stift.', right: 'Ich nehme diesen Stift.', why: 'Direct object, masculine → accusative diesen.' },
        { wrong: 'Mit welcher Bus fährst du?', right: 'Mit welchem Bus fährst du?', why: 'mit + dative; Bus is masculine → welchem.' },
        { wrong: 'Welcher Tasche gefällt dir?', right: 'Welche Tasche gefällt dir?', why: 'Tasche is feminine (die) → welche.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>Buch</b> neuter hai, isliye <b>welches</b> aayega. Masculine object ke liye accusative form aati hai: <b>diesen Stift</b>. <b>mit</b> Dativ leta hai aur <b>Bus</b> masculine hai, isliye <b>welchem</b>. Aur <b>Tasche</b> feminine hai, isliye <b>welche</b>. Har baar ending ko <b>der/die/das</b> se milao.'
    }
  ],

  // ---------- Reading passage (shopping, clickable) ----------
  reading: {
    title: 'Im Kaufhaus',
    titleEn: 'At the department store',
    tokens: [
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'und (recycled — Sätze verbinden).', ex: 'Vreni und Timo …', exEn: 'Vreni and Timo …' },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name' },
      { w: 'gehen', role: 'r-verb', en: 'go', hi: 'जाते हैं', pron: 'GAY-en', type: 'Verb · gehen (sie)', why: 'gehen (recycled — Verben).', ex: 'Sie gehen ins Kaufhaus.', exEn: 'They go to the store.' },
      { w: 'ins', role: 'r-preposition', en: 'to the', hi: 'के', pron: 'ins', type: 'Preposition + place', why: 'in + das → ins (recycled — Hobbies).', ex: 'ins Kaufhaus', exEn: 'to the department store' },
      { w: 'Kaufhaus', role: 'r-place', en: 'department store', hi: 'डिपार्टमेंट स्टोर', pron: 'KOWF-hows', type: 'Noun · place', why: 'das Kaufhaus (this chapter).', ex: 'ins Kaufhaus gehen', exEn: 'go to the store' },
      { w: '.', plain: true },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name' },
      { w: 'fragt', role: 'r-verb', en: 'asks', hi: 'पूछता है', pron: 'frahkt', type: 'Verb · fragen (er)', why: 'fragen (recycled).', ex: 'Rohan fragt: Welches Buch?', exEn: 'Rohan asks: which book?' },
      { w: ':', plain: true },
      { w: '"Welches', role: 'r-question', en: '"which (neut.)', hi: '"कौन-सी', pron: 'VEL-khes', type: 'Question article · neut.', why: 'neuter = welches (this chapter).', ex: 'Welches Buch?', exEn: 'Which book?' },
      { w: 'Buch', role: 'r-object', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.', why: 'das Buch (recycled — Akkusativ).', ex: 'Welches Buch kaufe ich?', exEn: 'Which book do I buy?' },
      { w: 'kaufe', role: 'r-verb', en: 'should (I) buy', hi: 'खरीदूँ', pron: 'KOW-fuh', type: 'Verb · kaufen (ich)', why: 'kaufen (recycled — Im Café).', ex: 'Welches Buch kaufe ich?', exEn: 'Which book do I buy?' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: '?', plain: true },
      { w: '"', plain: true },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहती है', pron: 'zahkt', type: 'Verb · sagen', why: 'sagen (recycled — Verben).', ex: 'Anna sagt: Dieses Buch.', exEn: 'Anna says: this book.' },
      { w: ':', plain: true },
      { w: '"Dieses', role: 'r-article', en: '"this (neut.)', hi: '"यह', pron: 'DEE-zes', type: 'Demonstrative · neut.', why: 'neuter = dieses (this chapter).', ex: 'Dieses Buch ist gut.', exEn: 'This book is good.' },
      { w: 'Buch', role: 'r-subject', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छी', pron: 'goot', type: 'Adjective', why: 'sein + adjective (Chapter 13).', ex: 'Dieses Buch ist gut.', exEn: 'This book is good.' },
      { w: '.', plain: true },
      { w: '"', plain: true },
      { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb', why: 'dann (recycled — Modalverben 1).', ex: 'Dann fragt Rohan …', exEn: 'Then Rohan asks …' },
      { w: 'fragt', role: 'r-verb', en: 'asks', hi: 'पूछता है', pron: 'frahkt', type: 'Verb · fragen (er)', why: 'verb position 2 after dann (recycled — Satzposition).', ex: 'Dann fragt er …', exEn: 'Then he asks …' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'nach', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'nakh', type: 'Preposition + dat.', why: 'nach + dative (recycled — Präpositionen mit Dativ).', ex: 'nach einem Bleistift fragen', exEn: 'ask about a pencil' },
      { w: 'einem', role: 'r-dativ', en: 'a (masc. dat.)', hi: 'एक', pron: 'EYE-nem', type: 'Article · dative' },
      { w: 'Bleistift', role: 'r-object', en: 'pencil', hi: 'पेंसिल', pron: 'BLY-shtift', type: 'Noun · masc.', why: 'der Bleistift (this chapter).', ex: 'nach einem Bleistift', exEn: 'about a pencil' },
      { w: '.', plain: true },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहती है', pron: 'zahkt', type: 'Verb · sagen' },
      { w: ':', plain: true },
      { w: '"Nimm', role: 'r-verb', en: '"take', hi: '"लो', pron: 'nim', type: 'Verb · nehmen (imperative)', why: 'nehmen (recycled — Unregelmäßige Verben).', ex: 'Nimm diesen Bleistift.', exEn: 'Take this pencil.' },
      { w: 'diesen', role: 'r-akkusativ', en: 'this (masc. acc.)', hi: 'यह', pron: 'DEE-zen', type: 'Demonstrative · acc.', why: 'masc. acc. = diesen (this chapter).', ex: 'Nimm diesen Bleistift.', exEn: 'Take this pencil.' },
      { w: 'Bleistift', role: 'r-object', en: 'pencil', hi: 'पेंसिल', pron: 'BLY-shtift', type: 'Noun · masc.' },
      { w: '!', plain: true },
      { w: '"', plain: true },
      { w: 'An', role: 'r-preposition', en: 'at', hi: 'पर', pron: 'an', type: 'Wechselpräp. + dat.', why: 'Location → dative (recycled — Wechselpräpositionen).', ex: 'an der Kasse', exEn: 'at the checkout' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article · dative' },
      { w: 'Kasse', role: 'r-place', en: 'checkout', hi: 'काउंटर', pron: 'KA-suh', type: 'Noun · place', why: 'die Kasse (this chapter).', ex: 'an der Kasse', exEn: 'at the checkout' },
      { w: 'fragt', role: 'r-verb', en: 'asks', hi: 'पूछती है', pron: 'frahkt', type: 'Verb · fragen', why: 'fragen (recycled).', ex: 'Die Verkäuferin fragt …', exEn: 'The salesperson asks …' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Verk\u00e4uferin', role: 'r-subject', en: 'salesperson', hi: 'विक्रेता', pron: 'fair-KOY-fuh-rin', type: 'Noun · fem.', why: 'die Verkäuferin (recycled — Berufe).', ex: 'Die Verkäuferin fragt …', exEn: 'The salesperson asks …' },
      { w: ':', plain: true },
      { w: '"Mit', role: 'r-preposition', en: '"with', hi: '"के साथ', pron: 'mit', type: 'Preposition + dat.', why: 'mit + dative (recycled — Präpositionen mit Dativ).', ex: 'Mit welcher Karte?', exEn: 'With which card?' },
      { w: 'welcher', role: 'r-dativ', en: 'which (fem. dat.)', hi: 'कौन-से', pron: 'VEL-kher', type: 'Question article · dative', why: 'fem. dative = welcher (this chapter).', ex: 'Mit welcher Karte zahlen Sie?', exEn: 'With which card do you pay?' },
      { w: 'Karte', role: 'r-object', en: 'card', hi: 'कार्ड', pron: 'KAR-tuh', type: 'Noun · fem.', why: 'die Karte (recycled — Hobbies).', ex: 'mit welcher Karte', exEn: 'with which card' },
      { w: 'zahlen', role: 'r-verb', en: 'pay', hi: 'भुगतान करते हैं', pron: 'TSAH-len', type: 'Verb · zahlen (Sie)', why: 'zahlen (recycled — Im Café).', ex: 'Mit welcher Karte zahlen Sie?', exEn: 'With which card do you pay?' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun', why: 'Sie = formal you (recycled — Wer bist du?).', ex: 'Zahlen Sie?', exEn: 'Do you pay?' },
      { w: '?', plain: true },
      { w: '"', plain: true }
    ],
    translation: 'Vreni and Timo go to the department store. Rohan asks: "Which book do I buy?" Anna says: "This book is good." Then he asks about a pencil. Anna says: "Take this pencil!" At the checkout the salesperson asks: "With which card do you pay?"'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_042_L001', speaker: 'Vreni', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Welches Geschenk kaufst du für Nina, Jonas?', en: 'Which gift are you buying for Nina, Jonas?' },
      { id: 'A1_042_L002', speaker: 'Jonas', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Dieses Buch hier gefällt mir. Aber welche Farbe mag sie?', en: 'I like this book here. But which color does she like?' },
      { id: 'A1_042_L003', speaker: 'Vreni', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Diese blaue Tasche ist schöner für sie. Und welchen Stift nimmst du dazu?', en: 'This blue bag is nicer for her. And which pen do you take with it?' },
      { id: 'A1_042_L004', speaker: 'Jonas', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich nehme diesen roten Stift.', en: 'I\'ll take this red pen.' },
      { id: 'A1_042_L005', speaker: 'Vreni', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Mit welchem Geschenkpapier packst du es ein?', en: 'Which gift wrap do you wrap it with?' },
      { id: 'A1_042_L006', speaker: 'Jonas', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Mit diesem hier, das ist glänzend.', en: 'With this one here, it\'s shiny.' }
    ],
    transcript: 'Welches Geschenk kaufst du für Nina, Jonas? Dieses Buch hier gefällt mir. Aber welche Farbe mag sie? Diese blaue Tasche ist schöner für sie. Und welchen Stift nimmst du dazu? Ich nehme diesen roten Stift. Mit welchem Geschenkpapier packst du es ein? Mit diesem hier, das ist glänzend.',
    translation: 'Which gift are you buying for Nina, Jonas? I like this book here. But which color does she like? This blue bag is nicer for her. And which pen do you take with it? I\'ll take this red pen. Which gift wrap do you wrap it with? With this one here, it\'s shiny.',
    tokens: [
      { w: 'Welches' },
      { w: 'Geschenk' },
      { w: 'kaufst' },
      { w: 'du' },
      { w: 'für' },
      { w: 'Nina' },
      { w: ',', plain: true },
      { w: 'Jonas' },
      { w: '?', plain: true },
      { w: 'Dieses' },
      { w: 'Buch' },
      { w: 'hier' },
      { w: 'gefällt' },
      { w: 'mir' },
      { w: '.', plain: true },
      { w: 'Aber' },
      { w: 'welche' },
      { w: 'Farbe' },
      { w: 'mag' },
      { w: 'sie' },
      { w: '?', plain: true },
      { w: 'Diese' },
      { w: 'blaue' },
      { w: 'Tasche' },
      { w: 'ist' },
      { w: 'schöner' },
      { w: 'für' },
      { w: 'sie' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'welchen' },
      { w: 'Stift' },
      { w: 'nimmst' },
      { w: 'du' },
      { w: 'dazu' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'nehme' },
      { w: 'diesen' },
      { w: 'roten' },
      { w: 'Stift' },
      { w: '.', plain: true },
      { w: 'Mit' },
      { w: 'welchem' },
      { w: 'Geschenkpapier' },
      { w: 'packst' },
      { w: 'du' },
      { w: 'es' },
      { w: 'ein' },
      { w: '?', plain: true },
      { w: 'Mit' },
      { w: 'diesem' },
      { w: 'hier' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'ist' },
      { w: 'glänzend' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was kauft Jonas?', qEn: 'What is Jonas buying?', options: ['ein Geschenk für Nina', 'ein Buch für sich', 'eine Tasche für Vreni', 'einen Stift für die Prüfung'], optionsEn: ['a present for Nina', 'a book to herself', 'a bag for Vreni', 'a pen for the exam'], answer: 0,
        explain: '"Welches Geschenk kaufst du für Nina?"' },
      { q: 'Welchen Stift wählt Jonas?', qEn: 'Which pen does Jonas choose?', options: ['einen blauen', 'einen roten', 'einen schwarzen', 'einen grünen'], optionsEn: ['a blue one', 'a red one', 'a black one', 'a green one'], answer: 1,
        explain: '"Ich nehme diesen roten Stift."' }
    ]
  },

  speaking: [
    { task: "Im Kaufhaus fragt dein Freund: Welchen Pullover nimmst du?", taskEn: "In the department store your friend asks: which jumper are you taking?", de: "Ich nehme diesen Pullover. Dieser ist schön.", en: "I'll take this jumper. This one is nice." },
    { task: "Du bist im Laden. Frag die Verkäuferin nach dem Preis.", taskEn: "You're in the shop. Ask the assistant about the price.", de: "Welches Produkt kostet weniger? Dieses hier?", en: "Which product is cheaper? This one here?" },
    { task: "Im Schuhladen fragt dein Freund: Welche Schuhe gefallen dir?", taskEn: "In the shoe shop your friend asks: which shoes do you like?", de: "Diese Schuhe gefallen mir. Welche Größe haben Sie?", en: "I like these shoes. What size do you have?" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five question-and-answer pairs choosing things. Ask with welcher/welche/welches (matching the noun\u2019s gender) and answer with dieser/diese/dieses. Use at least one accusative ("Welchen … nimmst du? — Diesen …") and one dative after a preposition ("Mit welchem … ? — Mit diesem …").',
    starters: ['Welches Buch …? — Dieses Buch …', 'Welche Tasche …? — Diese Tasche …', 'Welchen Stift …? — Diesen Stift …', 'Mit welchem Bus …? — Mit diesem Bus …'],
    placeholder: 'Welches Buch liest du? — Ich lese dieses Buch …',
    minWords: 22
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Complete: "___ Buch liest du?" (which)',
      options: ['Welcher', 'Welche', 'Welches', 'Welchen'],
      answer: 2,
      explain: 'Buch is neuter (das) → Welches.'
    },
    gap: {
      // accusative masculine: welchen / diesen
      sentence: ['', ' Stift brauchst du? \u2014 Ich nehme ', ' Stift.'],
      gaps: [ { answer: 'Welchen', accepts: ['welchen'] }, { answer: 'diesen', accepts: ['diesen'] } ],
      explain: 'Direct object, masculine → accusative: welchen / diesen.'
    },
    match: {
      q: 'Match each noun to the correct "welcher" form.',
      pairs: [
        { noun: 'der Film', art: 'welcher' },
        { noun: 'die Tasche', art: 'welche' },
        { noun: 'das Buch', art: 'welches' },
        { noun: 'mit dem Bus', art: 'welchem' }
      ]
    },
    builder: {
      target: 'Build the question: "Which book are you reading?"',
      bank: ['Welches', 'Buch', 'liest', 'du'],
      answer: ['Welches', 'Buch', 'liest', 'du'],
      roles: { 'Welches': 'r-question', 'Buch': 'r-object', 'liest': 'r-verb', 'du': 'r-subject' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "___ Tasche kaufst du?" (which)', options: ['Welcher', 'Welche', 'Welches', 'Welchem'], answer: 1,
      explain: 'Tasche is feminine (die) → Welche.' },
    { q: 'Complete: "Ich nehme ___ Stift." (this, masc.)', options: ['dieser', 'diesen', 'dieses', 'diesem'], answer: 1,
      explain: 'Direct object, masculine → diesen.' },
    { q: 'Complete: "Mit ___ Bus fährst du?" (which)', options: ['welcher', 'welche', 'welchem', 'welchen'], answer: 2,
      explain: 'mit + dative; Bus is masculine → welchem.' },
    { q: 'welcher and dieser take the same endings as…', options: ['ein/eine', 'kein', 'der/die/das', 'mein'], answer: 2,
      explain: 'They are der-words — endings match der/die/das.' },
    { q: 'Which is correct for "das Buch"?', options: ['welcher Buch', 'welche Buch', 'welches Buch', 'welchen Buch'], answer: 2,
      explain: 'Buch is neuter → welches Buch.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-question', html: '<span class="de">welcher</span> = which? (question); <span class="de">dieser</span> = this (pointing). Pair them: Welche Tasche? \u2014 Diese.' },
    { c: 'r-article', html: 'Both are <strong>der-words</strong>: endings copy der/die/das \u2014 <span class="de">welcher/dieser, welche/diese, welches/dieses</span>.' },
    { c: 'r-akkusativ', html: 'Only masculine changes in the accusative (<span class="de">welchen/diesen</span>); dative adds <span class="de">-em / -er</span> (welchem, welcher).' }
  ],
  revisionTips: [
    'Check the last letter of der/die/das and copy it: das → welche\u200bs/diese\u200bs.',
    'In the accusative only the masculine moves: welcher → welchen, dieser → diesen.',
    'After mit/zu/bei or a dative verb, switch to welchem/welcher and diesem/dieser.'
  ]
};

window.CHAPTER = CHAPTER;
