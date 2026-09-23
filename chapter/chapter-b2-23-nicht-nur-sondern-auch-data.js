/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 23
   "nicht nur ... sondern auch" — emphasizes both pieces of info
   are true, with special emphasis on the SECOND (usually more
   surprising) element. Contrasted with sowohl...als auch (Ch.21,
   equal emphasis). Does NOT introduce einerseits...andererseits,
   entweder...oder, or je...desto (later chapters).
   IMPORTANT: dialogue uses ONLY Miriam and Timo.
   Vocabulary source: uploaded chapter-23 list (55 items, user-edited
   general B2 vocabulary bank — social-work/youth-services themes).
============================================================ */
const CHAPTER = {
  id: 'b2-23-nicht-nur-sondern-auch',
  phase: 'B2 · Phase 1',
  number: 23,
  title: 'nicht nur ... sondern auch',
  titleEn: 'not only ... but also ...',
  description: 'Not a plain "and" — nicht nur...sondern auch flags the second piece of information as the more surprising, more important one.',
  xp: 430,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 24, title: 'einerseits ... andererseits', titleEn: 'on the one hand ... on the other hand ...' , href: 'chapter-b2-24-einerseits-andererseits.html' },

  prevChapter: { number: 22, title: 'weder ... noch', titleEn: 'neither ... nor ...', href: 'chapter-b2-22-weder-noch.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Not just A — <em>B too, and B matters more.</em>',
    intro: 'Miriam explains that her clothing bank helps not only refugees but also large families, offering not only clothing but also counselling — and Timo, hearing the more surprising half each time, offers to help sort donations tomorrow.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear nicht nur...sondern auch emphasize the second, more important piece of information'
    ],
    scene: 'Der Jugendbericht',
    femaleSpeakers: ['Miriam'],
    dialogue: [
      { speaker: 'Miriam', tokens: [
        { w: 'Diese', role: 'r-subject', en: 'this (fem.)', hi: 'यह', pron: 'DEE-zuh', type: 'Determiner' },
        { w: 'Kleiderausgabe', role: 'r-subject', en: 'clothing bank', hi: 'कपड़ा वितरण', pron: 'KLY-der-ows-gah-buh', type: 'Noun · fem.', why: 'die Kleiderausgabe (this chapter).', ex: 'Diese Kleiderausgabe hilft vielen.', exEn: 'This clothing bank helps many.' },
        { w: 'hilft', role: 'r-verb', en: 'helps', hi: 'मदद करता है', pron: 'hilft', type: 'Verb · helfen' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation', why: 'nicht nur ... sondern auch = not only ... but also (this chapter).', ex: 'Sie hilft nicht nur Flüchtlingen, sondern auch Familien.', exEn: 'It helps not only refugees, but also families.' },
        { w: 'nur', role: 'r-akkusativ', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'Flüchtlingen', role: 'r-dativ', en: 'refugees (dat.)', hi: 'शरणार्थियों को', pron: 'FLÜKHT-lin-gen', type: 'Noun · plural dat.', why: 'der Flüchtling (this chapter).', ex: 'Flüchtlingen helfen' },
        { w: ',', plain: true },
        { w: 'sondern', role: 'r-conjunction', en: 'but', hi: 'बल्कि', pron: 'ZON-dern', type: 'Conjunction' },
        { w: 'auch', role: 'r-akkusativ', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'kinderreichen', role: 'r-dativ', en: 'with many children', hi: 'कई बच्चों वाले', pron: 'KIN-der-ry-khen', type: 'Adjective · dative', why: 'kinderreich = with many children (this chapter).', ex: 'kinderreiche Familien' },
        { w: 'Familien', role: 'r-dativ', en: 'families (dat.)', hi: 'परिवारों को', pron: 'fa-MEE-lyen', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'This clothing bank helps not only refugees, but also families with many children.', hi: 'Yeh kapda vitran sirf sharanaarthiyon ki nahi, balki kai bachchon waale parivaaron ki bhi madad karta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'bemerkenswert', role: 'r-akkusativ', en: 'remarkable', hi: 'उल्लेखनीय', pron: 'be-MER-ken-vairt', type: 'Adjective', why: 'bemerkenswert = remarkable (this chapter).', ex: 'Das ist bemerkenswert.', exEn: 'That is remarkable.' },
        { w: '.', plain: true },
        { w: 'Sammelt', role: 'r-verb', en: 'does it collect', hi: 'जमा करता है', pron: 'ZA-melt', type: 'Verb · sammeln' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Organisation', role: 'r-subject', en: 'organization', hi: 'संगठन', pron: 'or-ga-ni-za-TSYON', type: 'Noun · fem.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'nur', role: 'r-akkusativ', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'Kleidung', role: 'r-akkusativ', en: 'clothing', hi: 'कपड़े', pron: 'KLY-dung', type: 'Noun · fem.' },
        { w: ',', plain: true },
        { w: 'sondern', role: 'r-conjunction', en: 'but', hi: 'बल्कि', pron: 'ZON-dern', type: 'Conjunction' },
        { w: 'auch', role: 'r-akkusativ', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'Bettzeug', role: 'r-akkusativ', en: 'bedding', hi: 'बिस्तर की चादरें', pron: 'BET-tsoyk', type: 'Noun · neut.', why: 'das Bettzeug (this chapter).', ex: 'Bettzeug sammeln' },
        { w: '?', plain: true }
      ], en: 'That is remarkable. Does the organization collect not only clothing, but also bedding?', hi: 'Yeh ullekhaneey hai. Kya sangathan sirf kapde nahi, balki bistar ki chaadarein bhi jama karta hai?' },
      { speaker: 'Miriam', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'bieten', role: 'r-verb', en: 'offer', hi: 'देते हैं', pron: 'BEE-ten', type: 'Verb · bieten', lexicalUnit: 'anbieten' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'nur', role: 'r-akkusativ', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'Sachen', role: 'r-akkusativ', en: 'things', hi: 'चीज़ें', pron: 'ZA-khen', type: 'Noun · plural' },
        { w: ',', plain: true },
        { w: 'sondern', role: 'r-conjunction', en: 'but', hi: 'बल्कि', pron: 'ZON-dern', type: 'Conjunction' },
        { w: 'auch', role: 'r-akkusativ', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'Beratung', role: 'r-akkusativ', en: 'counseling', hi: 'सलाह', pron: 'be-RAH-tung', type: 'Noun · fem.' },
        { w: 'an', role: 'r-verb', en: '(prefix of anbieten)', hi: '', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anbieten' },
        { w: '.', plain: true }
      ], en: 'Yes, we offer not only things, but also counseling.', hi: 'Haan, hum sirf cheezein nahi, balki salaah bhi dete hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'kann', role: 'r-modalverb', en: 'can', hi: 'सकता हूँ', pron: 'kan', type: 'Modal · können (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'helfen', role: 'r-verb', en: 'help', hi: 'मदद करना', pron: 'HEL-fen', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'How can I help?', hi: 'Main kaise madad kar sakta hoon?' },
      { speaker: 'Miriam', tokens: [
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'kannst', role: 'r-modalverb', en: 'can', hi: 'सकते हो', pron: 'KANST', type: 'Modal · können (du)' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'nur', role: 'r-akkusativ', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'Kleidung', role: 'r-akkusativ', en: 'clothing', hi: 'कपड़े', pron: 'KLY-dung', type: 'Noun · fem.' },
        { w: 'spenden', role: 'r-verb', en: 'donate', hi: 'दान करना', pron: 'SHPEN-den', type: 'Verb · infinitive' },
        { w: ',', plain: true },
        { w: 'sondern', role: 'r-conjunction', en: 'but', hi: 'बल्कि', pron: 'ZON-dern', type: 'Conjunction' },
        { w: 'auch', role: 'r-akkusativ', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'bei', role: 'r-preposition', en: 'at', hi: 'में', pron: 'by', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Sortierung', role: 'r-dativ', en: 'sorting (dat.)', hi: 'छँटाई में', pron: 'zor-TEE-rung', type: 'Noun · fem. dat.', why: 'die Sortierung (this chapter).', ex: 'bei der Sortierung helfen' },
        { w: 'helfen', role: 'r-verb', en: 'help', hi: 'मदद करना', pron: 'HEL-fen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'You can not only donate clothing, but also help with the sorting.', hi: 'Tum sirf kapde daan nahi kar sakte, balki chhataayi mein madad bhi kar sakte ho.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'komme', role: 'r-verb', en: 'come', hi: 'आता हूँ', pron: 'KO-muh', type: 'Verb · kommen (ich)', lexicalUnit: 'vorbeikommen' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'vorbei', role: 'r-verb', en: '(prefix of vorbeikommen)', hi: '', pron: 'for-BY', type: 'Separable prefix · Satzende', lexicalUnit: 'vorbeikommen' },
        { w: '.', plain: true }
      ], en: 'Perfect! I will come by tomorrow.', hi: 'Badhiya! Main kal aa jaunga.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de r-nichtnur">nicht nur ... sondern auch</span> means "not only ... but also ..." — both pieces of information are true, but the SECOND one carries special weight, often the more surprising or important fact. <span class="de">Anna spricht nicht nur Deutsch, sondern auch Französisch.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is NICHT NUR ... SONDERN AUCH (B2 level): a two-part connector meaning "not only ... but also ..." that introduces additional information while emphasizing the SECOND element as more important or surprising (Anna spricht nicht nur Deutsch, sondern auch Französisch.). Contrasted with "sowohl ... als auch" (Ch.21, equal emphasis on both) — here the second element gets special weight. It can connect nouns, verbs, adjectives, adverbs, or prepositional phrases. German word order remains normal (V2). Common in newspaper articles, reports, and persuasive writing. ' +
    'Do NOT expect einerseits...andererseits, entweder...oder, or je...desto — those are out of scope for this chapter; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- "nicht nur" must be paired with "sondern auch" — never "und auch", "aber auch", or a bare "sondern" without "auch".\n' +
    '- The two connected elements should be grammatically parallel.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Emphasis check:</b> one sentence on whether "nicht nur...sondern auch" was the right stylistic choice here versus "sowohl...als auch" (equal emphasis).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly use "nicht nur...sondern auch" to emphasize the second, more surprising element. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the nicht nur...sondern auch vs sowohl...als auch comparison once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: nicht nur + Element A + sondern auch + Element B, with special weight on B.'
  },

  parserSentence: [
    { w: 'Anna', role: 'plain' }, { w: 'spricht', role: 'plain' },
    { w: 'nicht', role: 'r-nichtnur' }, { w: 'nur', role: 'r-nichtnur' }, { w: 'Deutsch', role: 'plain' }, { w: ',', plain: true }, { w: 'sondern', role: 'r-nichtnur' }, { w: 'auch', role: 'r-nichtnur' }, { w: 'Französisch', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: nicht nur...sondern auch emphasizes the second, more surprising element.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Miriam and Timo review a youth-services report, each fact building toward a second, surprising fact.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 55 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master nicht-nur-sondern-auch structure, what it can connect, and comparison to sowohl...als auch.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of nicht-nur-sondern-auch constructions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the first element and the emphasized second element.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give presentations and compare achievements using nicht nur...sondern auch naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and persuasive texts using nicht nur...sondern auch appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill und-to-nicht-nur-sondern-auch transformation, sentence building, and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 430 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 55 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'und-to-nicht-nur-sondern-auch drills, sentence building, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete nicht nur...sondern auch reference — what it can connect, sowohl...als auch comparison, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Anna spricht nicht nur Deutsch, sondern auch Französisch.', text: 'Use nicht nur...sondern auch to emphasize the second element' },
    { de: 'Nicht nur Anna, sondern auch Rohan kommt heute.', text: 'Front nicht nur...sondern auch correctly with V2 word order' },
    { de: 'sowohl...als auch (equal) vs. nicht nur...sondern auch (emphasis on 2nd)', text: 'Distinguish equal emphasis from weighted emphasis' },
    { de: 'Nouns, verbs, adjectives, adverbs, prepositional phrases', text: 'Know what nicht nur...sondern auch can connect' },
    { de: 'Formal newspapers, reports, persuasive writing', text: 'Use nicht nur...sondern auch naturally in formal writing' }
  ],

  // ---------- Vocabulary (55 items — uploaded chapter-23 list) ----------
  vocab: [
    { de: 'Balance', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'balance', hi: 'संतुलन', ex: 'Sie sucht die Balance zwischen Arbeit und Freizeit.', exEn: 'She seeks the balance between work and leisure.', exHi: 'Woh kaam aur khaali samay ke beech santulan dhoondti hai.', ex2: 'Die Balance ist manchmal schwer zu finden.', ex2En: 'Balance is sometimes hard to find.', ex2Hi: 'Santulan kabhi-kabhi dhoondhna mushkil hota hai.' },
    { de: 'Bedürftige/r', art: 'der/die', gender: 'm/f', plural: 'Bedürftige', pos: 'noun', level: 'B2', en: 'needy person', hi: 'ज़रूरतमंद व्यक्ति', ex: 'Der Bundesverband hilft nicht nur Flüchtlingen, sondern auch Bedürftigen.', exEn: 'The federal association helps not only refugees, but also needy people.', exHi: 'Sanghiy sangh na sirf sharanaarthiyon ki, balki zaroorat-mand logon ki bhi madad karta hai.', ex2: 'Viele Bedürftige suchen Unterstützung.', ex2En: 'Many needy people seek support.', ex2Hi: 'Kai zaroorat-mand log sahaayata dhoondte hain.' },
    { de: 'beibringen', pos: 'verb', level: 'B2', en: 'to teach, impart', hi: 'सिखाना', ex: 'Sie bringt den Kindern Disziplin bei.', exEn: 'She teaches the children discipline.', exHi: 'Woh bacchon ko anushaasan sikhaati hai.', ex2: 'Er brachte ihr das Schwimmen bei.', ex2En: 'He taught her to swim.', ex2Hi: 'Usne use tairna sikhaaya.', conj: { praesens: 'bringt bei', praeteritum: 'brachte bei', perfekt: 'hat beigebracht' } },
    { de: 'bemerkenswert', pos: 'adjective', level: 'B2', en: 'remarkable', hi: 'उल्लेखनीय', ex: 'Das Programm ist bemerkenswert.', exEn: 'The programme is remarkable.', exHi: 'Kaaryakram ullekhaniya hai.', ex2: 'Sie zeigte eine bemerkenswerte Leistung.', ex2En: 'She showed a remarkable performance.', ex2Hi: 'Usne ek ullekhaniya pradarshan dikhaaya.' },
    { de: 'bestechend', pos: 'adjective', level: 'B2', en: 'compelling, captivating', hi: 'आकर्षक', ex: 'Es ist nicht nur bestechend, sondern auch einwandfrei organisiert.', exEn: 'It\'s not only compelling, but also flawlessly organized.', exHi: 'Yeh sirf aakarshak hi nahi, balki nirdosh roop se vyavasthit bhi hai.', ex2: 'Ihre Argumentation war bestechend.', ex2En: 'Her argument was compelling.', ex2Hi: 'Uska tark aakarshak tha.' },
    { de: 'Betracht', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'consideration', hi: 'विचार', ex: 'Diese Möglichkeit kommt nicht in Betracht.', exEn: 'This option is not under consideration.', exHi: 'Yeh vikalp vichaar mein nahi hai.', ex2: 'Man sollte alle Optionen in Betracht ziehen.', ex2En: 'One should take all options into consideration.', ex2Hi: 'Sabhi vikalpon par vichaar karna chaahiye.' },
    { de: 'Betreiber/in', art: 'der/die', gender: 'm/f', plural: 'Betreiber/innen', pos: 'noun', level: 'B2', en: 'operator', hi: 'संचालक', ex: 'Der Betreiber des Programms ist sehr engagiert.', exEn: 'The operator of the programme is very committed.', exHi: 'Kaaryakram ka sanchaalak bahut samarpit hai.', ex2: 'Die Betreiberin des Cafés kennt alle Gäste.', ex2En: 'The operator of the café knows all the guests.', ex2Hi: 'Cafe ki sanchaalak sabhi mehmaanon ko jaanti hai.' },
    { de: 'Bettzeug', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'bedding', hi: 'बिस्तर का सामान', ex: 'Das Bettzeug muss gewaschen werden.', exEn: 'The bedding needs to be washed.', exHi: 'Bistar ka saamaan dhona hoga.', ex2: 'Sie kaufte neues Bettzeug.', ex2En: 'She bought new bedding.', ex2Hi: 'Usne naya bistar ka saamaan khareeda.' },
    { de: 'Bundesverband', art: 'der', gender: 'm', plural: 'Bundesverbände', pos: 'noun', level: 'B2', en: 'federal association', hi: 'संघीय संघ', ex: 'Der Bundesverband hilft nicht nur Flüchtlingen, sondern auch Bedürftigen.', exEn: 'The federal association helps not only refugees, but also needy people.', exHi: 'Sanghiy sangh na sirf sharanaarthiyon ki, balki zaroorat-mand logon ki bhi madad karta hai.', ex2: 'Der Bundesverband vertritt viele Organisationen.', ex2En: 'The federal association represents many organizations.', ex2Hi: 'Sanghiy sangh kai sangathanon ka pratinidhitva karta hai.' },
    { de: 'bundesweit', pos: 'adjective', level: 'B2', en: 'nationwide', hi: 'देशव्यापी', ex: 'Bundesweit existieren nicht nur kinderreiche Familien, sondern auch kinderfeindliche Strukturen.', exEn: 'Nationwide, not only families with many children exist, but also child-unfriendly structures.', exHi: 'Deshvyaapi roop se, na sirf kai bacchon waale parivaar, balki bacchon ke prati udaaseen sanrachnaayein bhi maujood hain.', ex2: 'Die Kampagne wurde bundesweit ausgestrahlt.', ex2En: 'The campaign was broadcast nationwide.', ex2Hi: 'Abhiyaan deshvyaapi roop se prasaarit hua.' },
    { de: 'Cartoon', art: 'der', gender: 'm', plural: 'Cartoons', pos: 'noun', level: 'B2', en: 'cartoon', hi: 'कार्टून', ex: 'Der Cartoon war sehr witzig.', exEn: 'The cartoon was very funny.', exHi: 'Cartoon bahut mazaakiya tha.', ex2: 'Sie zeichnet gern Cartoons.', ex2En: 'She likes drawing cartoons.', ex2Hi: 'Use cartoons banaana pasand hai.' },
    { de: 'Comic', art: 'der', gender: 'm', plural: 'Comics', pos: 'noun', level: 'B2', en: 'comic', hi: 'कॉमिक', ex: 'Er liest gern Comics.', exEn: 'He likes reading comics.', exHi: 'Use comics padhna pasand hai.', ex2: 'Der Comic wurde ein Bestseller.', ex2En: 'The comic became a bestseller.', ex2Hi: 'Comic bestseller ban gaya.' },
    { de: 'definieren', pos: 'verb', level: 'B2', en: 'to define', hi: 'परिभाषित करना', ex: 'Man muss den Begriff genau definieren.', exEn: 'One must define the term precisely.', exHi: 'Shabd ko satik roop se paribhaashit karna chaahiye.', ex2: 'Die Ziele wurden klar definiert.', ex2En: 'The goals were clearly defined.', ex2Hi: 'Lakshya spasht roop se paribhaashit kiye gaye.', conj: { praesens: 'definiert', praeteritum: 'definierte', perfekt: 'hat definiert' } },
    { de: 'Diebstahl', art: 'der', gender: 'm', plural: 'Diebstähle', pos: 'noun', level: 'B2', en: 'theft', hi: 'चोरी', ex: 'Der Diebstahl wurde der Polizei gemeldet.', exEn: 'The theft was reported to the police.', exHi: 'Chori ki soochna police ko di gayi.', ex2: 'Diebstahl ist ein ernstes Verbrechen.', ex2En: 'Theft is a serious crime.', ex2Hi: 'Chori ek gambhir apraadh hai.' },
    { de: 'Disziplin', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'discipline', hi: 'अनुशासन', ex: 'Nicht nur Kickboxen wird angeboten, sondern auch Disziplin wird vermittelt.', exEn: 'Not only is kickboxing offered, but discipline is also imparted.', exHi: 'Sirf kickboxing hi pesh nahi ki jaati, balki anushaasan bhi sikhaaya jaata hai.', ex2: 'Disziplin ist im Sport wichtig.', ex2En: 'Discipline is important in sport.', ex2Hi: 'Khel mein anushaasan mahatvapurn hai.' },
    { de: 'Dürreperiode', art: 'die', gender: 'f', plural: 'Dürreperioden', pos: 'noun', level: 'B2', en: 'period of drought', hi: 'सूखे की अवधि', ex: 'Die Dürreperiode zerstörte nicht nur die Ernte, sondern auch den Hausrat.', exEn: 'The period of drought destroyed not only the harvest, but also the household goods.', exHi: 'Sookhe ki avadhi ne na sirf fasal, balki gharelu saamaan bhi nasht kar diya.', ex2: 'Die Dürreperiode dauerte mehrere Monate.', ex2En: 'The period of drought lasted several months.', ex2Hi: 'Sookhe ki avadhi kai mahinon tak chali.' },
    { de: 'einwandfrei', pos: 'adjective', level: 'B2', en: 'flawless, perfect', hi: 'निर्दोष', ex: 'Es ist nicht nur bestechend, sondern auch einwandfrei organisiert.', exEn: 'It\'s not only compelling, but also flawlessly organized.', exHi: 'Yeh sirf aakarshak hi nahi, balki nirdosh roop se vyavasthit bhi hai.', ex2: 'Die Arbeit war einwandfrei.', ex2En: 'The work was flawless.', ex2Hi: 'Kaam nirdosh tha.' },
    { de: 'enorm', pos: 'adjective', level: 'B2', en: 'enormous', hi: 'बहुत बड़ा', ex: 'Der Erfolg war enorm.', exEn: 'The success was enormous.', exHi: 'Safalta bahut badi thi.', ex2: 'Sie hat enorme Fortschritte gemacht.', ex2En: 'She made enormous progress.', ex2Hi: 'Usne bahut badi pragati ki.' },
    { de: 'Epidemie', art: 'die', gender: 'f', plural: 'Epidemien', pos: 'noun', level: 'B2', en: 'epidemic', hi: 'महामारी', ex: 'Die Epidemie betrifft nicht nur gefährdete Kids, sondern auch gesundheitlich stabile Familien.', exEn: 'The epidemic affects not only endangered kids, but also families stable in terms of health.', exHi: 'Mahamaari na sirf jokhim mein bacchon ko, balki swaasthya ki drishti se sthir parivaaron ko bhi prabhaavit karti hai.', ex2: 'Die Epidemie breitete sich schnell aus.', ex2En: 'The epidemic spread quickly.', ex2Hi: 'Mahamaari tezi se failii.' },
    { de: 'erneut', pos: 'adjective', level: 'B2', en: 'again, renewed', hi: 'फिर से', ex: 'Er versuchte es erneut.', exEn: 'He tried again.', exHi: 'Usne phir se koshish ki.', ex2: 'Erneute Verhandlungen begannen.', ex2En: 'Renewed negotiations began.', ex2Hi: 'Naye sire se baatcheet shuru hui.' },
    { de: 'Ernte', art: 'die', gender: 'f', plural: 'Ernten', pos: 'noun', level: 'B2', en: 'harvest', hi: 'फसल', ex: 'Die Dürreperiode zerstörte nicht nur die Ernte, sondern auch den Hausrat.', exEn: 'The period of drought destroyed not only the harvest, but also the household goods.', exHi: 'Sookhe ki avadhi ne na sirf fasal, balki gharelu saamaan bhi nasht kar diya.', ex2: 'Die Ernte fiel dieses Jahr gut aus.', ex2En: 'The harvest turned out well this year.', ex2Hi: 'Is saal fasal achhi rahi.' },
    { de: 'erschreckend', pos: 'adjective', level: 'B2', en: 'frightening, alarming', hi: 'डरावना', ex: 'Erschreckend viele Helfer bekommen nicht nur eine Gebühr, sondern auch echte Anerkennung.', exEn: 'Alarmingly many helpers receive not only a fee, but also real recognition.', exHi: 'Darawani baat yeh hai ki kai sahayak na sirf shulk, balki vaastavik maanyta bhi paate hain.', ex2: 'Die Zahlen waren erschreckend.', ex2En: 'The numbers were alarming.', ex2Hi: 'Aankade darawane the.' },
    { de: 'erstrebenswert', pos: 'adjective', level: 'B2', en: 'desirable, worth striving for', hi: 'वांछनीय', ex: 'Diese Idee ist erstrebenswert, weil sie nicht nur geistig entlastet, sondern auch Fairness schafft.', exEn: 'This idea is desirable, because it not only relieves mentally, but also creates fairness.', exHi: 'Yeh vichaar vaanchhaniya hai, kyunki yeh na sirf maansik roop se raahat deta hai, balki nishpakshta bhi banaata hai.', ex2: 'Ein hohes Ziel ist erstrebenswert.', ex2En: 'A high goal is worth striving for.', ex2Hi: 'Ek uncha lakshya vaanchhaniya hai.' },
    { de: 'Erwerbsarbeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'gainful employment', hi: 'रोज़गार', ex: 'Erwerbsarbeit sichert den Lebensunterhalt.', exEn: 'Gainful employment secures livelihood.', exHi: 'Rozgaar jeevan-yaapan sunishchit karta hai.', ex2: 'Sie kehrte nach der Elternzeit zur Erwerbsarbeit zurück.', ex2En: 'She returned to gainful employment after parental leave.', ex2Hi: 'Woh maata-pita chhutti ke baad rozgaar mein wapas aayi.' },
    { de: 'existieren', pos: 'verb', level: 'B2', en: 'to exist', hi: 'मौजूद होना', ex: 'Bundesweit existieren nicht nur kinderreiche Familien, sondern auch kinderfeindliche Strukturen.', exEn: 'Nationwide, not only families with many children exist, but also child-unfriendly structures.', exHi: 'Deshvyaapi roop se, na sirf kai bacchon waale parivaar, balki bacchon ke prati udaaseen sanrachnaayein bhi maujood hain.', ex2: 'Solche Probleme existieren überall.', ex2En: 'Such problems exist everywhere.', ex2Hi: 'Aisi samasyaayein har jagah maujood hain.', conj: { praesens: 'existiert', praeteritum: 'existierte', perfekt: 'hat existiert' } },
    { de: 'Fairness', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'fairness', hi: 'निष्पक्षता', ex: 'Diese Idee ist erstrebenswert, weil sie nicht nur geistig entlastet, sondern auch Fairness schafft.', exEn: 'This idea is desirable, because it not only relieves mentally, but also creates fairness.', exHi: 'Yeh vichaar vaanchhaniya hai, kyunki yeh na sirf maansik roop se raahat deta hai, balki nishpakshta bhi banaata hai.', ex2: 'Fairness ist im Sport entscheidend.', ex2En: 'Fairness is crucial in sport.', ex2Hi: 'Khel mein nishpakshta mahatvapurn hai.' },
    { de: 'Faust', art: 'die', gender: 'f', plural: 'Fäuste', pos: 'noun', level: 'B2', en: 'fist', hi: 'मुट्ठी', ex: 'Er ballte die Faust.', exEn: 'He clenched his fist.', exHi: 'Usne muthi bhinchi.', ex2: 'Sie schlug mit der Faust auf den Tisch.', ex2En: 'She hit the table with her fist.', ex2Hi: 'Usne muthi se mez par maara.' },
    { de: 'Flucht', art: 'die', gender: 'f', plural: 'Fluchten', pos: 'noun', level: 'B2', en: 'flight, escape', hi: 'पलायन', ex: 'Die Flucht war gefährlich.', exEn: 'The flight was dangerous.', exHi: 'Palaayan khatarnaak tha.', ex2: 'Sie plante ihre Flucht sorgfältig.', ex2En: 'She planned her escape carefully.', ex2Hi: 'Usne apna palaayan savdhaani se yojanaabaddh kiya.' },
    { de: 'Flüchtling', art: 'der', gender: 'm', plural: 'Flüchtlinge', pos: 'noun', level: 'B2', en: 'refugee', hi: 'शरणार्थी', ex: 'Der Bundesverband hilft nicht nur Flüchtlingen, sondern auch Bedürftigen.', exEn: 'The federal association helps not only refugees, but also needy people.', exHi: 'Sanghiy sangh na sirf sharanaarthiyon ki, balki zaroorat-mand logon ki bhi madad karta hai.', ex2: 'Viele Flüchtlinge suchen ein neues Zuhause.', ex2En: 'Many refugees seek a new home.', ex2Hi: 'Kai sharanaarthi ek naya ghar dhoondte hain.' },
    { de: 'Frauensache', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'women\'s matter', hi: 'महिलाओं का मामला', ex: 'Man sollte diesen Kinderwunsch nicht nur als Frauensache betrachten, sondern auch als gemeinsame Verantwortung.', exEn: 'One should regard this wish for children not only as a women\'s matter, but also as a shared responsibility.', exHi: 'Bacchon ki is ichha ko na sirf mahilaaon ka maamla, balki saanjhi zimmedaari bhi maanna chaahiye.', ex2: 'Kindererziehung ist keine reine Frauensache.', ex2En: 'Child-rearing is not purely a women\'s matter.', ex2Hi: 'Baal paalan-poshan sirf mahilaaon ka maamla nahi hai.' },
    { de: 'Gebildete/r', art: 'der/die', gender: 'm/f', plural: 'Gebildete', pos: 'noun', level: 'B2', en: 'educated person', hi: 'शिक्षित व्यक्ति', ex: 'Ein Gebildeter sollte kritisch denken können.', exEn: 'An educated person should be able to think critically.', exHi: 'Ek shikshit vyakti ko aalochanaatmak roop se sochne mein saksham hona chaahiye.', ex2: 'Die Gebildeten der Stadt trafen sich regelmäßig.', ex2En: 'The educated people of the city met regularly.', ex2Hi: 'Shahar ke shikshit log niyamit roop se milte the.' },
    { de: 'gebraucht', pos: 'adjective', level: 'B2', en: 'used, second-hand', hi: 'इस्तेमाल किया हुआ', ex: 'Sie kaufte ein gebrauchtes Auto.', exEn: 'She bought a used car.', exHi: 'Usne ek istemaal ki hui gaadi khareedi.', ex2: 'Gebrauchte Bücher sind günstiger.', ex2En: 'Used books are cheaper.', ex2Hi: 'Istemaal ki hui kitaabein sasti hoti hain.' },
    { de: 'Gebühr', art: 'die', gender: 'f', plural: 'Gebühren', pos: 'noun', level: 'B2', en: 'fee, charge', hi: 'शुल्क', ex: 'Erschreckend viele Helfer bekommen nicht nur eine Gebühr, sondern auch echte Anerkennung.', exEn: 'Alarmingly many helpers receive not only a fee, but also real recognition.', exHi: 'Darawani baat yeh hai ki kai sahayak na sirf shulk, balki vaastavik maanyta bhi paate hain.', ex2: 'Die Gebühr muss im Voraus bezahlt werden.', ex2En: 'The fee must be paid in advance.', ex2Hi: 'Shulk pehle se chukaana hoga.' },
    { de: 'gefährdet', pos: 'adjective', level: 'B2', en: 'endangered, at risk', hi: 'जोखिम में', ex: 'Die Epidemie betrifft nicht nur gefährdete Kids, sondern auch gesundheitlich stabile Familien.', exEn: 'The epidemic affects not only endangered kids, but also families stable in terms of health.', exHi: 'Mahamaari na sirf jokhim mein bacchon ko, balki swaasthya ki drishti se sthir parivaaron ko bhi prabhaavit karti hai.', ex2: 'Gefährdete Arten müssen geschützt werden.', ex2En: 'Endangered species must be protected.', ex2Hi: 'Jokhim mein prajaatiyon ki raksha karni chaahiye.' },
    { de: 'geistig', pos: 'adjective', level: 'B2', en: 'mental, intellectual', hi: 'मानसिक', ex: 'Diese Idee ist erstrebenswert, weil sie nicht nur geistig entlastet, sondern auch Fairness schafft.', exEn: 'This idea is desirable, because it not only relieves mentally, but also creates fairness.', exHi: 'Yeh vichaar vaanchhaniya hai, kyunki yeh na sirf maansik roop se raahat deta hai, balki nishpakshta bhi banaata hai.', ex2: 'Geistige Arbeit kann anstrengend sein.', ex2En: 'Intellectual work can be tiring.', ex2Hi: 'Maansik kaam thakaane waala ho sakta hai.' },
    { de: 'Gelände', art: 'das', gender: 'n', plural: 'Gelände', pos: 'noun', level: 'B2', en: 'terrain, grounds', hi: 'भूभाग', ex: 'Das Gelände ist sehr groß.', exEn: 'The grounds are very large.', exHi: 'Bhoobhaag bahut bada hai.', ex2: 'Sie erkundeten das unbekannte Gelände.', ex2En: 'They explored the unknown terrain.', ex2Hi: 'Unhone anjaan bhoobhaag ka pata lagaaya.' },
    { de: 'gesundheitlich', pos: 'adjective', level: 'B2', en: 'health-related', hi: 'स्वास्थ्य संबंधी', ex: 'Die Epidemie betrifft nicht nur gefährdete Kids, sondern auch gesundheitlich stabile Familien.', exEn: 'The epidemic affects not only endangered kids, but also families stable in terms of health.', exHi: 'Mahamaari na sirf jokhim mein bacchon ko, balki swaasthya ki drishti se sthir parivaaron ko bhi prabhaavit karti hai.', ex2: 'Sie hat gesundheitliche Probleme.', ex2En: 'She has health problems.', ex2Hi: 'Use swaasthya sambandhi samasyaayein hain.' },
    { de: 'Gewalt', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'violence, force', hi: 'हिंसा', ex: 'Gewalt löst keine Probleme.', exEn: 'Violence solves no problems.', exHi: 'Hinsa koi samasya hal nahi karti.', ex2: 'Die Polizei setzte Gewalt ein.', ex2En: 'The police used force.', ex2Hi: 'Police ne bal prayog kiya.' },
    { de: 'Graffiti', art: 'das', gender: 'n', plural: 'Graffiti/Graffitis', pos: 'noun', level: 'B2', en: 'graffiti', hi: 'ग्राफिटी', ex: 'Das Graffiti bedeckte die ganze Wand.', exEn: 'The graffiti covered the entire wall.', exHi: 'Graffiti ne poori deewaar ko dhak diya.', ex2: 'Sie malte bunte Graffiti.', ex2En: 'She painted colourful graffiti.', ex2Hi: 'Usne rangeen graffiti banaayi.' },
    { de: 'Hausrat', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'household goods', hi: 'घरेलू सामान', ex: 'Die Dürreperiode zerstörte nicht nur die Ernte, sondern auch den Hausrat.', exEn: 'The period of drought destroyed not only the harvest, but also the household goods.', exHi: 'Sookhe ki avadhi ne na sirf fasal, balki gharelu saamaan bhi nasht kar diya.', ex2: 'Der Hausrat wurde versichert.', ex2En: 'The household goods were insured.', ex2Hi: 'Gharelu saamaan ka bima kiya gaya.' },
    { de: 'Hausverbot', art: 'das', gender: 'n', plural: 'Hausverbote', pos: 'noun', level: 'B2', en: 'ban from the premises', hi: 'परिसर से प्रतिबंध', ex: 'Er bekam ein Hausverbot.', exEn: 'He received a ban from the premises.', exHi: 'Use parisar se pratibandhit kar diya gaya.', ex2: 'Das Hausverbot gilt für ein Jahr.', ex2En: 'The ban from the premises applies for one year.', ex2Hi: 'Pratibandh ek saal ke liye lagoo hai.' },
    { de: 'Helfer/in', art: 'der/die', gender: 'm/f', plural: 'Helfer/innen', pos: 'noun', level: 'B2', en: 'helper', hi: 'सहायक', ex: 'Erschreckend viele Helfer bekommen nicht nur eine Gebühr, sondern auch echte Anerkennung.', exEn: 'Alarmingly many helpers receive not only a fee, but also real recognition.', exHi: 'Darawani baat yeh hai ki kai sahayak na sirf shulk, balki vaastavik maanyta bhi paate hain.', ex2: 'Die Helferin arbeitet ehrenamtlich.', ex2En: 'The helper works voluntarily.', ex2Hi: 'Sahayak swayamsevi roop se kaam karti hai.' },
    { de: 'hinauszögern', pos: 'verb', level: 'B2', en: 'to delay, put off', hi: 'टालना', ex: 'Er zögerte die Entscheidung hinaus.', exEn: 'He delayed the decision.', exHi: 'Usne faisla taal diya.', ex2: 'Sie will das Gespräch nicht hinauszögern.', ex2En: 'She doesn\'t want to delay the conversation.', ex2Hi: 'Woh baatcheet ko taalna nahi chaahti.', conj: { praesens: 'zögert hinaus', praeteritum: 'zögerte hinaus', perfekt: 'hat hinausgezögert' } },
    { de: 'jeweilig', pos: 'adjective', level: 'B2', en: 'respective', hi: 'संबंधित', ex: 'Jeder erhält die jeweilige Information.', exEn: 'Everyone receives the respective information.', exHi: 'Har koi sambandhit jaankaari praapt karta hai.', ex2: 'Die jeweiligen Regeln gelten für jedes Land.', ex2En: 'The respective rules apply to each country.', ex2Hi: 'Sambandhit niyam har desh ke liye lagoo hote hain.' },
    { de: 'Kabarett', art: 'das', gender: 'n', plural: 'Kabaretts', pos: 'noun', level: 'B2', en: 'cabaret, satirical revue', hi: 'कैबरे', ex: 'Sie besuchten ein Kabarett.', exEn: 'They visited a cabaret.', exHi: 'Woh ek cabaret gaye.', ex2: 'Das Kabarett kritisierte die Politik humorvoll.', ex2En: 'The cabaret humorously criticized politics.', ex2Hi: 'Cabaret ne hasi mazaak mein raajniti ki aalochana ki.' },
    { de: 'Kamm', art: 'der', gender: 'm', plural: 'Kämme', pos: 'noun', level: 'B2', en: 'comb', hi: 'कंघी', ex: 'Sie benutzt einen Kamm.', exEn: 'She uses a comb.', exHi: 'Woh ek kanghi ka istemaal karti hai.', ex2: 'Der Kamm ist aus Holz.', ex2En: 'The comb is made of wood.', ex2Hi: 'Kanghi lakadi ki bani hai.' },
    { de: 'Kampfsport', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'martial art, combat sport', hi: 'युद्ध खेल', ex: 'Er betreibt nicht nur eine Kleiderausgabe, sondern auch einen Kampfsportkurs.', exEn: 'It operates not only a clothing handout, but also a martial-arts course.', exHi: 'Yeh na sirf kapada vitran, balki ek yuddh khel course bhi chalaata hai.', ex2: 'Kampfsport fördert Disziplin und Selbstvertrauen.', ex2En: 'Martial arts promote discipline and self-confidence.', ex2Hi: 'Yuddh khel anushaasan aur aatmavishvaas ko badhaava dete hain.' },
    { de: 'Kfz-Betrieb', art: 'der', gender: 'm', plural: 'Kfz-Betriebe', pos: 'noun', level: 'B2', en: 'car repair business', hi: 'कार मरम्मत व्यवसाय', ex: 'Er arbeitet in einem Kfz-Betrieb.', exEn: 'He works at a car repair business.', exHi: 'Woh ek car marammat vyavasaay mein kaam karta hai.', ex2: 'Der Kfz-Betrieb repariert alle Automarken.', ex2En: 'The car repair business repairs all car brands.', ex2Hi: 'Car marammat vyavasaay sabhi car brands theek karta hai.' },
    { de: 'Kickboxen', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'kickboxing', hi: 'किकबॉक्सिंग', ex: 'Nicht nur Kickboxen wird angeboten, sondern auch Disziplin wird vermittelt.', exEn: 'Not only is kickboxing offered, but discipline is also imparted.', exHi: 'Sirf kickboxing hi pesh nahi ki jaati, balki anushaasan bhi sikhaaya jaata hai.', ex2: 'Kickboxen verbessert die Kondition.', ex2En: 'Kickboxing improves fitness.', ex2Hi: 'Kickboxing fitness behtar banaata hai.' },
    { de: 'Kids', art: 'die', gender: 'plural', plural: 'Kids', pos: 'noun', level: 'B2', en: 'kids', hi: 'बच्चे', ex: 'Die Epidemie betrifft nicht nur gefährdete Kids, sondern auch gesundheitlich stabile Familien.', exEn: 'The epidemic affects not only endangered kids, but also families stable in terms of health.', exHi: 'Mahamaari na sirf jokhim mein bacchon ko, balki swaasthya ki drishti se sthir parivaaron ko bhi prabhaavit karti hai.', ex2: 'Die Kids spielen im Park.', ex2En: 'The kids play in the park.', ex2Hi: 'Bacche park mein khelte hain.' },
    { de: 'kinderfeindlich', pos: 'adjective', level: 'B2', en: 'hostile to children, child-unfriendly', hi: 'बच्चों के प्रति उदासीन', ex: 'Bundesweit existieren nicht nur kinderreiche Familien, sondern auch kinderfeindliche Strukturen.', exEn: 'Nationwide, not only families with many children exist, but also child-unfriendly structures.', exHi: 'Deshvyaapi roop se, na sirf kai bacchon waale parivaar, balki bacchon ke prati udaaseen sanrachnaayein bhi maujood hain.', ex2: 'Manche Restaurants sind kinderfeindlich.', ex2En: 'Some restaurants are child-unfriendly.', ex2Hi: 'Kuch restaurants bacchon ke prati udaaseen hain.' },
    { de: 'kinderreich', pos: 'adjective', level: 'B2', en: 'with many children', hi: 'कई बच्चों वाला', ex: 'Bundesweit existieren nicht nur kinderreiche Familien, sondern auch kinderfeindliche Strukturen.', exEn: 'Nationwide, not only families with many children exist, but also child-unfriendly structures.', exHi: 'Deshvyaapi roop se, na sirf kai bacchon waale parivaar, balki bacchon ke prati udaaseen sanrachnaayein bhi maujood hain.', ex2: 'Kinderreiche Familien brauchen mehr Unterstützung.', ex2En: 'Families with many children need more support.', ex2Hi: 'Kai bacchon waale parivaaron ko zyada sahaayata chaahiye.' },
    { de: 'Kinderwunsch', art: 'der', gender: 'm', plural: 'Kinderwünsche', pos: 'noun', level: 'B2', en: 'wish for children', hi: 'बच्चों की इच्छा', ex: 'Man sollte diesen Kinderwunsch nicht nur als Frauensache betrachten, sondern auch als gemeinsame Verantwortung.', exEn: 'One should regard this wish for children not only as a women\'s matter, but also as a shared responsibility.', exHi: 'Bacchon ki is ichha ko na sirf mahilaaon ka maamla, balki saanjhi zimmedaari bhi maanna chaahiye.', ex2: 'Ihr Kinderwunsch erfüllte sich endlich.', ex2En: 'Her wish for children was finally fulfilled.', ex2Hi: 'Uski bacchon ki ichha aakhirkaar poori hui.' },
    { de: 'Kleiderausgabe', art: 'die', gender: 'f', plural: 'Kleiderausgaben', pos: 'noun', level: 'B2', en: 'clothing handout', hi: 'कपड़ा वितरण', ex: 'Er betreibt nicht nur eine Kleiderausgabe, sondern auch einen Kampfsportkurs.', exEn: 'It operates not only a clothing handout, but also a martial-arts course.', exHi: 'Yeh na sirf kapada vitran, balki ek yuddh khel course bhi chalaata hai.', ex2: 'Die Kleiderausgabe hilft bedürftigen Familien.', ex2En: 'The clothing handout helps needy families.', ex2Hi: 'Kapada vitran zaroorat-mand parivaaron ki madad karta hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was bedeutet "nicht nur ... sondern auch"?',
      body: [ '"nicht nur ... sondern auch" means "not only ... but also ...". It introduces additional information while emphasizing the second element.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Anna spricht nicht nur Deutsch, sondern auch Französisch.</span>'],
          ['<span class="de">Rohan arbeitet nicht nur tagsüber, sondern auch am Wochenende.</span>']
        ]
      },
      hinglish: '"nicht nur ... sondern auch" ka matlab hai "sirf yeh hi nahi, balki woh bhi". Yeh ek extra baat jodta hai, aur zor <b>doosri</b> cheez par padta hai.'
    },
    {
      title: 'Satzstruktur',
      body: [ 'Pattern yeh hai: <b>nicht nur</b> ke baad pehli cheez, phir comma, phir <b>sondern auch</b>, aur uske baad doosri cheez.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Ich mag nicht nur Kaffee, sondern auch Tee.</span>'],
          ['<span class="de">Anna liest nicht nur Romane, sondern auch Zeitungen.</span>']
        ]
      },
      hinglish: 'Pattern yeh hai: <b>nicht nur</b> ke baad pehli cheez, phir comma, phir <b>sondern auch</b>, aur uske baad doosri cheez.'
    },
    {
      title: 'Was kann es verbinden?',
      body: [ '"nicht nur ... sondern auch" can connect nouns, verbs, adjectives, adverbs, or prepositional phrases.' ],
      table: {
        head: ['Type', 'Example'],
        rows: [
          ['Nouns', 'nicht nur Bücher, sondern auch Zeitschriften'],
          ['Verbs', 'nicht nur lesen, sondern auch schreiben'],
          ['Adjectives', 'nicht nur freundlich, sondern auch hilfsbereit'],
          ['Adverbs', 'nicht nur heute, sondern auch morgen'],
          ['Prepositional phrases', 'nicht nur in Berlin, sondern auch in Hamburg']
        ]
      },
      hinglish: 'Isse tum nouns, verbs, adjectives, adverbs ya poore prepositional phrases jod sakte ho. Bas dono taraf ek hi tarah ka element rakhna hai.'
    },
    {
      title: '"nicht nur ... sondern auch" vs "sowohl ... als auch"',
      body: [ 'Both connect two true elements, but the emphasis differs.' ],
      table: {
        head: ['sowohl ... als auch (equal)', 'nicht nur ... sondern auch (2nd emphasized)'],
        rows: [
          ['<span class="de">Anna spricht sowohl Deutsch als auch Englisch.</span>', '<span class="de">Anna spricht nicht nur Deutsch, sondern auch Englisch.</span>']
        ]
      },
      hinglish: 'Dono hi do sachchi baaton ko jodte hain, par zor alag jagah padta hai. <b>sowohl ... als auch</b> mein dono barabar hote hain, aur <b>nicht nur ... sondern auch</b> mein doosri cheez zyada important lagti hai.'
    },
    {
      title: 'Wortstellung',
      body: [ 'German word order remains normal (V2), even when "nicht nur" starts the sentence.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Nicht nur Anna, sondern auch Rohan kommt heute.</span>'],
          ['<span class="de">Die Firma produziert nicht nur Autos, sondern auch Motorräder.</span>']
        ]
      },
      hinglish: 'Word order par koi asar nahi padta \u2014 verb apni normal doosri position par hi rehta hai, chahe sentence <b>nicht nur</b> se shuru ho. Aur verb <b>doosre</b> element se agree karta hai: <span class="de">Nicht nur Anna, sondern auch Rohan kommt</span>.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These realistic examples show nicht nur...sondern auch in business and education contexts.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Das Unternehmen investiert nicht nur in Forschung, sondern auch in Nachhaltigkeit.</span>'],
          ['<span class="de">Deutschland exportiert nicht nur Autos, sondern auch Maschinen.</span>']
        ]
      },
      hinglish: 'Yeh examples dikhate hain ki yeh structure asli mein kahan aata hai \u2014 business reports aur news wale formal texts mein.'
    },
    {
      title: 'Formelles Schreiben',
      body: [ '"nicht nur ... sondern auch" is very common in newspaper articles, reports, academic writing, presentations, and workplace communication. It creates more dynamic and persuasive writing.' ]
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from combining "nicht nur" with "und auch"/"aber auch", or dropping half the phrase.' ],
      mistakes: [
        { wrong: 'Nicht nur Anna, und auch Rohan kommt.', right: 'Nicht nur Anna, sondern auch Rohan kommt.', why: '"nicht nur" is always completed by "sondern auch" \u2014 "und auch" cannot replace it. (Note the verb agrees with the SECOND element, so it stays singular here: Rohan kommt.)' },
        { wrong: 'Ich mag nicht nur Kaffee, auch Tee.', right: 'Ich mag nicht nur Kaffee, sondern auch Tee.', why: '"sondern" cannot be dropped \u2014 the fixed phrase is "sondern auch", not "auch" on its own.' },
        { wrong: 'Anna spricht nicht nur Deutsch aber auch Englisch.', right: 'Anna spricht nicht nur Deutsch, sondern auch Englisch.', why: '"aber" cannot replace "sondern" in this fixed phrase.' },
        { wrong: 'Nicht nur ich mag Kaffee sondern Tee.', right: 'Ich mag nicht nur Kaffee, sondern auch Tee.', why: '"nicht nur" should directly precede the first connected element, and "auch" cannot be dropped after "sondern".' },
        { wrong: 'Nicht nur Anna sondern Rohan auch kommt.', right: 'Nicht nur Anna, sondern auch Rohan kommt.', why: '"auch" belongs directly after "sondern", not at the end of the clause.' }
      ],
      hinglish: 'Yeh galtiyan do wajah se hoti hain \u2014 <b>sondern auch</b> ki jagah <b>und auch</b> ya <b>aber auch</b> laga dena, ya phir <b>sondern</b> ya <b>auch</b> mein se ek chhod dena. Poora phrase saath aata hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ '"nicht nur ... sondern auch" appears frequently in Goethe B2 writing to add persuasive emphasis.' ],
      note: 'Memory trick: nicht nur = first information, sondern auch = more important additional information. Need to connect two ideas equally? Use sowohl...als auch. Need to emphasize the SECOND idea? Use nicht nur...sondern auch.',
      hinglish: 'Goethe B2 ki writing mein yeh bahut kaam aata hai, kyunki isse tum apni baat mein zor daal sakte ho \u2014 khaas kar jab kuch extra add karna ho.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Jahresbericht: Unsere Kleiderausgabe für Bedürftige',
    titleEn: 'Annual report: our clothing distribution for those in need',
    tokens: [
      { w: 'Unsere', role: 'plain', en: 'our', hi: 'हमारी', type: 'Possessivartikel' },
      { w: 'Kleiderausgabe', role: 'plain', en: 'clothing distribution', hi: 'वस्त्र वितरण', type: 'Noun · fem.', why: 'die Kleiderausgabe (this chapter).' },
      { w: 'hilft', role: 'plain', en: 'helps', hi: 'मदद करता है', type: 'Verb · helfen' },
      { w: 'nicht', role: 'r-connector', en: 'not only', hi: 'न केवल', type: 'Konjunktion · nicht nur … sondern auch', why: 'nicht nur … sondern auch = not only … but also: adds a second, often stronger point (this chapter).' },
      { w: 'nur', role: 'r-connector', en: 'only', hi: '', type: 'Konjunktion · nicht nur … sondern auch' },
      { w: 'Flüchtlingen', role: 'plain', en: 'refugees', hi: 'शरणार्थियों को', type: 'Noun · plural', why: 'der/die Flüchtling/e (this chapter).' },
      { w: ',', plain: true },
      { w: 'sondern', role: 'r-connector', en: 'but also', hi: 'बल्कि', type: 'Konjunktion · sondern auch' },
      { w: 'auch', role: 'r-connector', en: 'also', hi: 'भी', type: 'Konjunktion · sondern auch' },
      { w: 'einheimischen', role: 'plain', en: 'local', hi: 'स्थानीय', type: 'Adjective' },
      { w: 'Bedürftigen', role: 'plain', en: 'people in need (Satzende)', hi: 'ज़रूरतमंदों (Satzende)', type: 'Noun · plural', why: 'der/die Bedürftige/r (this chapter).' },
      { w: '.', plain: true },
      { w: 'Wir', role: 'plain', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'achten', role: 'plain', en: 'pay attention', hi: 'ध्यान देते हैं', type: 'Verb · achten auf' },
      { w: 'dabei', role: 'plain', en: 'in doing so', hi: 'इस दौरान', type: 'Adverb' },
      { w: 'besonders', role: 'plain', en: 'especially', hi: 'विशेष रूप से', type: 'Adverb' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'Fairness', role: 'plain', en: 'fairness (Satzende)', hi: 'निष्पक्षता (Satzende)', type: 'Noun · fem.', why: 'die Fairness (this chapter).' },
      { w: '.', plain: true },
      { w: 'Jede', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Familie', role: 'plain', en: 'family', hi: 'परिवार' , type: 'Noun · fem.' },
      { w: 'erhält', role: 'plain', en: 'receives', hi: 'प्राप्त करता है', type: 'Verb · erhalten' },
      { w: 'nicht', role: 'r-connector', en: 'not only', hi: 'न केवल', type: 'Konjunktion · nicht nur … sondern auch' },
      { w: 'nur', role: 'r-connector', en: 'only', hi: '', type: 'Konjunktion' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Gutschein', role: 'plain', en: 'voucher (Satzende)', hi: 'वाउचर (Satzende)', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'sondern', role: 'r-connector', en: 'but also', hi: 'बल्कि', type: 'Konjunktion · sondern auch' },
      { w: 'auch', role: 'r-connector', en: 'also', hi: 'भी', type: 'Konjunktion' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'freundliche', role: 'plain', en: 'friendly', hi: 'मित्रवत', type: 'Adjective' },
      { w: 'Beratung', role: 'plain', en: 'consultation (Satzende)', hi: 'सलाह (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Erschreckend', role: 'plain', en: 'shockingly', hi: 'चौंकाने वाला', type: 'Adjective', why: 'erschreckend (this chapter).' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective' },
      { w: 'Kinder', role: 'plain', en: 'children', hi: 'बच्चे', type: 'Noun · plural' },
      { w: 'kommen', role: 'plain', en: 'come', hi: 'आते हैं', type: 'Verb · kommen' },
      { w: 'ohne', role: 'plain', en: 'without', hi: 'बिना', type: 'Preposition · Akk.' },
      { w: 'passende', role: 'plain', en: 'suitable', hi: 'उपयुक्त', type: 'Adjective' },
      { w: 'Winterkleidung', role: 'plain', en: 'winter clothing (Satzende)', hi: 'सर्दियों के कपड़े (Satzende)', type: 'Noun · fem.' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'uns', role: 'plain', en: 'to us', hi: 'हमारे पास', type: 'Pronoun' },
      { w: '.', plain: true },
      { w: 'Deshalb', role: 'plain', en: 'therefore', hi: 'इसलिए', type: 'Adverb' },
      { w: 'existiert', role: 'plain', en: 'exists', hi: 'मौजूद है', type: 'Verb · existieren', why: 'existieren (this chapter).' },
      { w: 'unser', role: 'plain', en: 'our', hi: 'हमारा', type: 'Possessivartikel' },
      { w: 'Angebot', role: 'plain', en: 'service (Satzende)', hi: 'सेवा (Satzende)', type: 'Noun · neut.' },
      { w: 'nicht', role: 'r-connector', en: 'not only', hi: 'न केवल', type: 'Konjunktion · nicht nur … sondern auch' },
      { w: 'nur', role: 'r-connector', en: 'only', hi: '', type: 'Konjunktion' },
      { w: 'im', role: 'plain', en: 'in', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Winter', role: 'plain', en: 'winter (Satzende)', hi: 'सर्दियों (Satzende)', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'sondern', role: 'r-connector', en: 'but also', hi: 'बल्कि', type: 'Konjunktion · sondern auch' },
      { w: 'auch', role: 'r-connector', en: 'also', hi: 'भी', type: 'Konjunktion' },
      { w: 'ganzjährig', role: 'plain', en: 'year-round (Satzende)', hi: 'साल भर (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'So', role: 'plain', en: 'thus', hi: 'इस तरह', type: 'Adverb' },
      { w: 'wächst', role: 'plain', en: 'grows', hi: 'बढ़ती है', type: 'Verb · wachsen' },
      { w: 'nicht', role: 'r-connector', en: 'not only', hi: 'न केवल', type: 'Konjunktion · nicht nur', why: 'nicht nur … sondern auch (this chapter).' },
      { w: 'nur', role: 'r-connector', en: 'only', hi: 'केवल', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Zahl', role: 'plain', en: 'number', hi: 'संख्या', type: 'Noun · fem.' },
      { w: 'der', role: 'plain', en: 'of the', hi: 'का', type: 'Article · Genitiv' },
      { w: 'Familien', role: 'plain', en: 'families', hi: 'परिवार', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'that', hi: 'जो', type: 'Relativpronomen' },
      { w: 'uns', role: 'plain', en: 'us', hi: 'हम पर', type: 'Pronoun · Akk.' },
      { w: 'vertrauen', role: 'plain', en: 'trust (Satzende)', hi: 'भरोसा करते हैं (Satzende)', type: 'Verb · vertrauen' },
      { w: ',', plain: true },
      { w: 'sondern', role: 'r-connector', en: 'but', hi: 'बल्कि', type: 'Konjunktion' },
      { w: 'auch', role: 'r-connector', en: 'also', hi: 'भी', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Zahl', role: 'plain', en: 'number', hi: 'संख्या', type: 'Noun · fem.' },
      { w: 'der', role: 'plain', en: 'of the', hi: 'के', type: 'Article · Genitiv' },
      { w: 'Freiwilligen', role: 'plain', en: 'volunteers', hi: 'स्वयंसेवक', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'who', hi: 'जो', type: 'Relativpronomen' },
      { w: 'mitmachen', role: 'plain', en: 'join in (Satzende)', hi: 'शामिल होना चाहते हैं (Satzende)', type: 'Verb · mitmachen (trennbar)' },
      { w: 'wollen', role: 'plain', en: 'want to (Satzende)', hi: '(Satzende)', type: 'Verb · Modalverb (Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Our clothing distribution helps not only refugees, but also local people in need. In doing so, we pay especially close attention to fairness. Every family receives not only a voucher, but also friendly consultation. Shockingly many children come to us without suitable winter clothing. That is why our service exists not only in winter, but also year-round. This way, not only the number of families who trust us grows, but also the number of volunteers who want to join in.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_023_L001', speaker: 'Miriam', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, unsere Kleiderkammer hilft nicht nur Geflüchteten, sondern auch kinderreichen Familien.', en: 'Timo, our clothing bank helps not only refugees but also large families.' },
      { id: 'B2_023_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das wusste ich gar nicht. Und was bietet ihr genau an?', en: 'I didn\'t know that at all. And what exactly do you offer?' },
      { id: 'B2_023_L003', speaker: 'Miriam', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nicht nur Kleidung, sondern auch eine kurze Beratung, wenn jemand Fragen hat.', en: 'Not just clothing, but also a short consultation if someone has questions.' },
      { id: 'B2_023_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das überrascht mich total. Kann ich morgen beim Sortieren helfen?', en: 'That really surprises me. Can I help sort things tomorrow?' },
      { id: 'B2_023_L005', speaker: 'Miriam', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Sehr gern \u2014 komm einfach um zehn, dann zeige ich dir alles.', en: 'Gladly \u2014 just come at ten and I will show you everything.' }
    ],
    transcript: 'Timo, unsere Kleiderkammer hilft nicht nur Geflüchteten, sondern auch kinderreichen Familien. Das wusste ich gar nicht. Und was bietet ihr genau an? Nicht nur Kleidung, sondern auch eine kurze Beratung, wenn jemand Fragen hat. Das überrascht mich total. Kann ich morgen beim Sortieren helfen? Sehr gern \u2014 komm einfach um zehn, dann zeige ich dir alles.',
    translation: 'Timo, our clothing bank helps not only refugees but also large families. I didn\'t know that at all. And what exactly do you offer? Not just clothing, but also a short consultation if someone has questions. That really surprises me. Can I help sort things tomorrow? Gladly \u2014 just come at ten and I will show you everything.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'unsere' },
      { w: 'Kleiderkammer' },
      { w: 'hilft' },
      { w: 'nicht' },
      { w: 'nur' },
      { w: 'Geflüchteten' },
      { w: ',', plain: true },
      { w: 'sondern' },
      { w: 'auch' },
      { w: 'kinderreichen' },
      { w: 'Familien' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'wusste' },
      { w: 'ich' },
      { w: 'gar' },
      { w: 'nicht' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'was' },
      { w: 'bietet' },
      { w: 'ihr' },
      { w: 'genau' },
      { w: 'an' },
      { w: '?', plain: true },
      { w: 'Nicht' },
      { w: 'nur' },
      { w: 'Kleidung' },
      { w: ',', plain: true },
      { w: 'sondern' },
      { w: 'auch' },
      { w: 'eine' },
      { w: 'kurze' },
      { w: 'Beratung' },
      { w: ',', plain: true },
      { w: 'wenn' },
      { w: 'jemand' },
      { w: 'Fragen' },
      { w: 'hat' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'überrascht' },
      { w: 'mich' },
      { w: 'total' },
      { w: '.', plain: true },
      { w: 'Kann' },
      { w: 'ich' },
      { w: 'morgen' },
      { w: 'beim' },
      { w: 'Sortieren' },
      { w: 'helfen' },
      { w: '?', plain: true },
      { w: 'Sehr' },
      { w: 'gern' },
      { w: '\u2014', plain: true },
      { w: 'komm' },
      { w: 'einfach' },
      { w: 'um' },
      { w: 'zehn' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'zeige' },
      { w: 'ich' },
      { w: 'dir' },
      { w: 'alles' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wem hilft die Kleiderkammer außer Geflüchteten?', qEn: 'Who does the clothing bank help besides refugees?', options: ['nur Studenten', 'kinderreiche Familien', 'nur Rentner', 'niemand sonst'], optionsEn: ['only students', 'families with many children', 'only pensioners', 'nobody else'], answer: 1,
        explain: '"… nicht nur Geflüchteten, sondern auch kinderreichen Familien."' },
      { q: 'Was bietet Timo an?', qEn: 'What does Timo offer to do?', options: ['Geld spenden', 'beim Sortieren helfen', 'einen Bericht schreiben', 'nichts'], optionsEn: ['donate money', 'help with sorting', 'write a report', 'nothing'], answer: 1,
        explain: '"Kann ich morgen beim Sortieren helfen?"' }
    ]
  },

  speaking: [
    { task: "Ein Freund fragt, wem die Kleiderkammer hilft.", taskEn: "A friend asks who the clothing bank helps.", de: "Wir helfen nicht nur Geflüchteten, sondern auch kinderreichen Familien.", en: "We help not only refugees but also large families." },
    { task: "Er fragt, was ihr genau anbietet.", taskEn: "He asks what exactly you offer.", de: "Wir bieten nicht nur Kleidung, sondern auch Bettzeug an.", en: "We offer not only clothing but also bedding." },
    { task: "Deine Chefin fragt, was das Projekt bemerkenswert macht.", taskEn: "Your boss asks what makes the project remarkable.", de: "Es läuft nicht nur regional, sondern auch bundesweit.", en: "It runs not only regionally but also nationwide." },
    { task: "Eine Kollegin fragt nach deiner Rolle.", taskEn: "A colleague asks about your role.", de: "Ich organisiere nicht nur, sondern bringe auch neuen Helfern alles bei.", en: "I don't just organise, I also teach new helpers everything." },
    { task: "Ein Bekannter fragt, warum die Disziplin wichtig ist.", taskEn: "An acquaintance asks why the discipline matters.", de: "Sie schützt nicht nur die Spenden, sondern auch das Vertrauen.", en: "It protects not only the donations but also the trust." },
    { task: "Rollenspiel: Ihr stellt die Kleiderkammer vor.", taskEn: "Role-play: you present the clothing bank.", de: "Wir sammeln nicht nur, sondern beraten auch. — Und wir brauchen nicht nur Kleidung, sondern auch Zeit.", en: "We don't just collect, we also advise. — And we need not only clothes but also time." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short report or opinion text (six to eight sentences) about a social project or topic of your choice — using "nicht nur ... sondern auch" at least three times, making sure the second element carries genuine additional weight or surprise.',
    starters: ['… hilft nicht nur …, sondern auch …', 'Nicht nur …, sondern auch … ist wichtig.'],
    placeholder: 'Der Bundesverband hilft nicht nur Flüchtlingen, sondern auch Bedürftigen …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which sentence uses "nicht nur ... sondern auch" correctly?',
      options: ['Anna spricht nicht nur Deutsch, sondern auch Englisch.', 'Anna spricht nicht nur Deutsch aber auch Englisch.', 'Anna spricht nicht nur Deutsch und auch Englisch.'],
      answer: 0,
      explain: '"nicht nur" must be paired with the full phrase "sondern auch" — never "aber auch" or "und auch".'
    },
    gap: {
      sentence: ['Die Firma verkauft nicht nur Computer, ', ' Software.'],
      gaps: [ { answer: 'sondern auch', accepts: ['sondern auch'] } ],
      explain: '"sondern auch" is the fixed second half of the connector.'
    },
    match: {
      q: 'Match each connector to its emphasis.',
      pairs: [
        { noun: 'sowohl ... als auch', art: 'equal emphasis' },
        { noun: 'nicht nur ... sondern auch', art: 'second element emphasized' }
      ]
    },
    builder: {
      target: 'Build: "The company invests not only in research, but also in sustainability."',
      bank: ['Das', 'Unternehmen', 'investiert', 'nicht', 'nur', 'in', 'Forschung', ',', 'sondern', 'auch', 'in', 'Nachhaltigkeit', '.'],
      answer: ['Das', 'Unternehmen', 'investiert', 'nicht', 'nur', 'in', 'Forschung', ',', 'sondern', 'auch', 'in', 'Nachhaltigkeit', '.'],
      roles: { 'nicht': 'r-nichtnur', 'nur': 'r-nichtnur', 'sondern': 'r-nichtnur', 'auch': 'r-nichtnur' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Nicht nur Anna und auch Rohan kommen.',
      right: 'Nicht nur Anna, sondern auch Rohan kommt.',
      explain: '"nicht nur" must be paired with "sondern auch" — never "und auch".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does "nicht nur ... sondern auch" mean?', options: ['not only ... but also ...', 'either ... or ...', 'neither ... nor ...'], answer: 0,
      explain: '"nicht nur ... sondern auch" means "not only ... but also ..." — emphasizing the second element.' },
    { q: 'Which sentence is correct?', options: ['Nicht nur Anna, sondern auch Rohan kommt.', 'Nicht nur Anna und auch Rohan kommen.', 'Nicht nur Anna aber auch Rohan kommt.'], answer: 0,
      explain: 'The full, correct phrase is "nicht nur ... sondern auch" — never combined with "und" or "aber".' },
    { q: 'Which connector emphasizes the SECOND element?', options: ['nicht nur ... sondern auch', 'sowohl ... als auch', 'weder ... noch'], answer: 0,
      explain: '"nicht nur ... sondern auch" places special weight on the second, usually more surprising element.' },
    { q: 'What can "nicht nur ... sondern auch" connect?', options: ['Nouns, verbs, adjectives, adverbs, prepositional phrases', 'Only nouns', 'Only verbs'], answer: 0,
      explain: 'It can connect many different grammatical elements, as long as they are parallel.' },
    { q: 'Which sentence contains an error?', options: ['Ich mag nicht nur Kaffee, sondern auch Tee.', 'Anna spricht nicht nur Deutsch aber auch Englisch.', 'Die Firma verkauft nicht nur Computer, sondern auch Software.'], answer: 1,
      explain: '"aber" cannot replace "sondern" in this fixed phrase — it should be "sondern auch".' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-nichtnur', html: '"nicht nur ... sondern auch" means "not only ... but also ..." — it emphasizes the SECOND element as more important or surprising.' },
    { c: 'r-nichtnur', html: 'It can connect nouns, verbs, adjectives, adverbs, or prepositional phrases — as long as the two elements are grammatically parallel.' },
    { c: 'r-nichtnur', html: '"sondern auch" is a fixed phrase — never replace "sondern" with "aber" or "und", and never drop "auch".' }
  ],
  revisionTips: [
    'Practise rewriting neutral "und" or "sowohl...als auch" sentences with "nicht nur...sondern auch" to add persuasive emphasis.',
    'Always check that both connected elements are grammatically parallel.',
    'Use "nicht nur...sondern auch" in formal writing (reports, presentations) to make your point more dynamic and persuasive.'
  ]
};

window.CHAPTER = CHAPTER;
