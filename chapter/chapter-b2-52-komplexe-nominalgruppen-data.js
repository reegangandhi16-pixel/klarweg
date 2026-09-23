/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 5 · Chapter 52
   "Komplexe Nominalgruppen" — building/reading long noun
   phrases by finding the HEAD NOUN (Kernnomen) first, then
   layering: article, adjective(s), Partizipialattribut,
   Genitiv attribute, prepositional attribute. Reading strategy:
   find head noun → ignore modifiers → read modifiers →
   reconstruct meaning. Does NOT teach Funktionsverbgefüge or
   C1 multi-embedded genitive chains.
   IMPORTANT: dialogue uses ONLY Runa and Timo.
   Vocabulary source: uploaded Chapter 52 list (61 items).
============================================================ */
const CHAPTER = {
  id: 'b2-52-komplexe-nominalgruppen',
  phase: 'B2 · Phase 5',
  number: 52,
  title: 'Komplexe Nominalgruppen',
  titleEn: 'Complex noun phrases',
  description: 'Der gestern veröffentlichte wissenschaftliche Forschungsbericht über erneuerbare Energien — one noun, everything else describes it.',
  xp: 640,
  time: 70,
  difficulty: 'Advanced',
  nextChapter: { number: 53, title: 'Goethe Mini 4', titleEn: 'Phase 5 checkpoint exam' , href: 'chapter-b2-53-goethe-mini-4.html' },

  prevChapter: { number: 51, title: 'Erweiterte Partizipialattribute', titleEn: 'Extended participial attributes', href: 'chapter-b2-51-erweiterte-partizipialattribute.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Find the <em>one noun</em> first.',
    intro: 'A Nobel-laureate\'s visit next week has Runa and Timo excited — the theory developed by him, esteemed by so many researchers, changes how they see the world — every description layering adjectives, participles and genitives around one head noun.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear long German noun phrases decoded by finding the head noun first'
    ],
    scene: 'Im Büro',
    femaleSpeakers: ['Runa'],
    dialogue: [
      { speaker: 'Runa', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'von', role: 'r-preposition', en: 'by', hi: 'द्वारा', pron: 'fon', type: 'Preposition + dative' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Nobelpreisträger', role: 'r-dativ', en: 'Nobel laureate (dat.)', hi: 'नोबेल पुरस्कार विजेता', pron: 'no-BEL-pryse-trai-ger', type: 'Noun · masc. dat.', why: 'der Nobelpreisträger (this chapter).', ex: 'der Nobelpreisträger' },
        { w: 'entwickelte', role: 'r-subject', en: 'developed', hi: 'विकसित', pron: 'ent-VI-kel-tuh', type: 'Partizip II · Attribut' },
        { w: 'Theorie', role: 'r-subject', en: 'theory', hi: 'सिद्धांत', pron: 'tay-o-REE', type: 'Noun · fem.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'faszinierend', role: 'r-akkusativ', en: 'fascinating', hi: 'आकर्षक', pron: 'fa-tsi-NEE-rent', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The theory developed by the Nobel laureate is fascinating.', hi: 'Nobel puraskaar vijeta dwara vikasit siddhaant aakarshak hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'von', role: 'r-preposition', en: 'of', hi: 'से', pron: 'fon', type: 'Preposition + dative' },
        { w: 'vielen', role: 'r-dativ', en: 'many', hi: 'कई', pron: 'FEE-len', type: 'Determiner · dative' },
        { w: 'Forschern', role: 'r-dativ', en: 'researchers (dat.)', hi: 'शोधकर्ताओं से', pron: 'FOR-shern', type: 'Noun · plural dat.' },
        { w: 'geschätzte', role: 'r-subject', en: 'esteemed', hi: 'सराही गई', pron: 'ge-SHET-stuh', type: 'Partizip II · Attribut', why: 'schätzen → geschätzt = esteemed (this chapter).', ex: 'die geschätzte Theorie', exEn: 'the esteemed theory' },
        { w: 'Theorie', role: 'r-subject', en: 'theory', hi: 'सिद्धांत', pron: 'tay-o-REE', type: 'Noun · fem.' },
        { w: 'verändert', role: 'r-verb', en: 'changes', hi: 'बदलता है', pron: 'fer-EN-dert', type: 'Verb · verändern' },
        { w: 'unser', role: 'r-akkusativ', en: 'our (neut.)', hi: 'हमारा', pron: 'UN-zer', type: 'Possessive · acc.' },
        { w: 'Weltbild', role: 'r-akkusativ', en: 'world view', hi: 'विश्व दृष्टिकोण', pron: 'VELT-bilt', type: 'Noun · neut.', why: 'das Weltbild (this chapter).', ex: 'unser Weltbild' },
        { w: '.', plain: true }
      ], en: 'The theory, esteemed by many researchers, changes our world view.', hi: 'Kai shodhkartaon se saraahi gayi siddhaant humaara vishwa drishtikon badalta hai.' },
      { speaker: 'Runa', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'seine', role: 'r-akkusativ', en: 'his (fem.)', hi: 'अपनी', pron: 'ZY-nuh', type: 'Possessive · acc.' },
        { w: 'Forschung', role: 'r-akkusativ', en: 'research', hi: 'शोध', pron: 'FOR-shung', type: 'Noun · fem.' },
        { w: 'bekannte', role: 'r-subject', en: 'known', hi: 'प्रसिद्ध', pron: 'be-KAN-tuh', type: 'Partizip II · Attribut', why: 'bekannt → bekannte (this chapter, complex noun phrase with prepositional insertion).', ex: 'der für seine Forschung bekannte Wissenschaftler', exEn: 'the scientist known for his research' },
        { w: 'Wissenschaftler', role: 'r-subject', en: 'scientist', hi: 'वैज्ञानिक', pron: 'vi-sen-SHAF-tler', type: 'Noun · masc.' },
        { w: 'kommt', role: 'r-verb', en: 'is coming', hi: 'आ रहा है', pron: 'komt', type: 'Verb · kommen' },
        { w: 'nächste', role: 'r-akkusativ', en: 'next', hi: 'अगले', pron: 'NEKS-tuh', type: 'Adjective' },
        { w: 'Woche', role: 'r-akkusativ', en: 'week', hi: 'हफ़्ते', pron: 'VO-khuh', type: 'Noun · fem.' },
        { w: 'zu', role: 'r-preposition', en: 'to', hi: 'में', pron: 'tsoo', type: 'Preposition + place' },
        { w: 'uns', role: 'r-dativ', en: 'us (dat.)', hi: 'हमारे पास', pron: 'uns', type: 'Pronoun · dative' },
        { w: '.', plain: true }
      ], en: 'The scientist known for his research is coming to us next week.', hi: 'Apne shodh ke liye prasiddh vaigyanik agle hafte hamaare paas aa rahe hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'großartige', role: 'r-akkusativ', en: 'great', hi: 'शानदार', pron: 'GROHS-ar-ti-guh', type: 'Adjective' },
        { w: 'Gelegenheit', role: 'r-akkusativ', en: 'opportunity', hi: 'अवसर', pron: 'ge-LAY-gen-hite', type: 'Noun · fem.' },
        { w: '!', plain: true }
      ], en: 'That is a great opportunity!', hi: 'Yeh ek shaandaar avsar hai!' },
      { speaker: 'Runa', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'freue', role: 'r-verb', en: 'look forward', hi: 'उत्साहित हूँ', pron: 'FROY-uh', type: 'Verb · sich freuen (ich)' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'auf', role: 'r-preposition', en: 'to', hi: 'के लिए', pron: 'owf', type: 'Preposition' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Vortrag', role: 'r-akkusativ', en: 'lecture', hi: 'व्याख्यान', pron: 'FOR-trahk', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Yes, I look forward to the lecture.', hi: 'Haan, mujhe vyaakhyaan ka intezaar hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German packs almost an entire sentence into one noun phrase. Never read left to right — find the <span class="de r-head">HEAD NOUN</span> first, then work out what every other word is describing.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is KOMPLEXE NOMINALGRUPPEN (complex noun phrases) at B2 level: building/reading long noun phrases by identifying the head noun (Kernnomen) and layering modifiers around it — article, adjective(s), Partizipialattribut, Genitiv attribute, prepositional attribute. Example progression: der Bericht → der wissenschaftliche Bericht → der gestern veröffentlichte wissenschaftliche Forschungsbericht → der gestern veröffentlichte wissenschaftliche Forschungsbericht über erneuerbare Energien. The reading strategy is: find the head noun, ignore modifiers briefly, then read modifiers one by one to reconstruct meaning. ' +
    'Do NOT expect or require Funktionsverbgefüge or C1 multi-embedded genitive chains — those are separate/later topics; do not flag their absence, and do not penalise reasonably concise B2-level noun phrases for not being longer. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that adjective/participle endings within noun phrases agree correctly with the head noun\'s gender, case, and number.\n' +
    '- Check that Genitiv attributes are correctly formed and placed after the head noun (e.g. "die Verbesserung der Kommunikation", not "die der Kommunikation Verbesserung").\n' +
    '- Check that prepositional attributes attach naturally to the head noun\'s meaning (e.g. "der Markt für erneuerbare Energien").\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Head-noun clarity check:</b> one sentence on whether the learner\'s noun phrases keep the head noun clear despite the added modifiers.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you find the head noun instantly and build layered noun phrases naturally. Ready for the Phase 5 checkpoint next.',
    mid: 'Good. Re-read the Building Table once, then continue.',
    low: 'Worth another pass through the Grammar section — always find the MAIN NOUN first, then ask who/which/what kind/from where/about what.'
  },

  parserSentence: [
    { w: 'Der', role: 'r-nominalgruppe' }, { w: 'wissenschaftliche', role: 'r-nominalgruppe' },
    { w: 'Forschungsbericht', role: 'r-head' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: find the head noun first, everything else describes it.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Runa and Timo build a research paper and presentation layering complex noun phrases.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 61 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the components of complex noun phrases and a reliable reading strategy.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a scientific research article and a company annual report full of complex noun phrases.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the head noun, modifiers, and overall meaning across a presentation and a strategy meeting.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Explain diagrams and summarise reports using complex noun groups naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite simple sentences using complex noun groups and write a short scientific report.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill finding the head noun, expanding/reducing noun phrases, and building them layer by layer.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 640 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 61 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Head-noun identification, noun-phrase expansion/reduction, and a scientific-report writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '11 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full structure table, building table, and reading-strategy flowchart.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'der gestern veröffentlichte wissenschaftliche Forschungsbericht', text: 'Find the head noun instantly, no matter how long the phrase' },
    { de: 'der Markt für erneuerbare Energien', text: 'Recognize prepositional attributes describing the head noun' },
    { de: 'die Verbesserung der Unternehmenskommunikation', text: 'Recognize Genitiv attributes attaching to the head noun' },
    { de: 'Bericht → der Bericht → der wissenschaftliche Bericht → ...', text: 'Build a complex noun phrase layer by layer' },
    { de: 'Common in scientific articles, reports, contracts, and Goethe B2 Reading', text: 'Recognize where complex noun phrases dominate' }
  ],

  // ---------- Vocabulary (61 items — uploaded chapter-52 list) ----------
  vocab: [
    { de: 'sperren', pos: 'verb', level: 'B2', register: 'both', en: 'to block, close off, lock, bar', hi: 'बंद करना', ex: 'Die Polizei sperrte die Straße.', exEn: 'The police blocked the street.', exHi: 'Police ne sadak band ki.', ex2: 'Sie haben das Konto gesperrt.', ex2En: 'They\'ve locked the account.', ex2Hi: 'Unhone account block kiya hai.', conj: { praesens: 'sperrt', praeteritum: 'sperrte', perfekt: 'hat gesperrt' } },
    { de: 'Schulden', art: 'die', gender: 'plural', plural: '— (Pl.)', pos: 'noun', level: 'B2', register: 'both', en: 'debts', hi: 'कर्ज', ex: 'Sie hatten hohe Schulden.', exEn: 'They had high debts.', exHi: 'Unke paas bhaari karz tha.', ex2: 'Sie haben ihre Schulden bezahlt.', ex2En: 'They\'ve paid off their debts.', ex2Hi: 'Unhone apna karz chukaaya hai.' },
    { de: 'schwindeln', pos: 'verb', level: 'B2', register: 'spoken', en: 'to fib, tell white lies', hi: 'झूठ बोलना', ex: 'Sie schwindelte ein bisschen.', exEn: 'She fibbed a little.', exHi: 'Usne thoda jhooth bola.', ex2: 'Er hat wieder geschwindelt.', ex2En: 'He\'s fibbed again.', ex2Hi: 'Usne phir jhooth bola hai.', conj: { praesens: 'schwindelt', praeteritum: 'schwindelte', perfekt: 'hat geschwindelt' } },
    { de: 'Seele', art: 'die', gender: 'f', plural: 'Seelen', pos: 'noun', level: 'B2', register: 'written', en: 'soul', hi: 'आत्मा', ex: 'Die Seele braucht Ruhe.', exEn: 'The soul needs rest.', exHi: 'Aatma ko shaanti chahiye.', ex2: 'Sie haben über die Seele philosophiert.', ex2En: 'They\'ve philosophised about the soul.', ex2Hi: 'Unhone aatma par vichaar kiya hai.' },
    { de: 'solide', pos: 'adjective', level: 'B2', register: 'both', en: 'solid, sound', hi: 'ठोस', ex: 'Die Argumentation war solide.', exEn: 'The argumentation was sound.', exHi: 'Tark thos tha.', ex2: 'Sie haben eine solide Grundlage geschaffen.', ex2En: 'They\'ve created a solid foundation.', ex2Hi: 'Unhone ek thos aadhaar banaaya hai.' },
    { de: 'Speck', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'bacon, fat', hi: 'बेकन', ex: 'Sie briet Speck zum Frühstück.', exEn: 'She fried bacon for breakfast.', exHi: 'Usne nashte ke liye bacon talaa.', ex2: 'Sie haben Speck gekauft.', ex2En: 'They\'ve bought bacon.', ex2Hi: 'Unhone bacon khareeda hai.' },
    { de: 'Spezies', art: 'die', gender: 'f', plural: 'Spezies', pos: 'noun', level: 'B2', register: 'written', en: 'species', hi: 'प्रजाति', ex: 'Diese Spezies ist selten.', exEn: 'This species is rare.', exHi: 'Yeh prajaati durlabh hai.', ex2: 'Sie haben eine neue Spezies entdeckt.', ex2En: 'They\'ve discovered a new species.', ex2Hi: 'Unhone ek nayi prajaati khoji hai.' },
    { de: 'Sprichwort', art: 'das', gender: 'n', plural: 'Sprichwörter', pos: 'noun', level: 'B2', register: 'written', en: 'proverb', hi: 'कहावत', ex: 'Sie zitierte ein altes Sprichwort.', exEn: 'She quoted an old proverb.', exHi: 'Usne ek purani kahaavat kahi.', ex2: 'Sie haben viele Sprichwörter gelernt.', ex2En: 'They\'ve learned many proverbs.', ex2Hi: 'Unhone kai kahaavatein seekhi hain.' },
    { de: 'Strauß', art: 'der', gender: 'm', plural: 'Sträuße', pos: 'noun', level: 'B2', register: 'both', en: 'bouquet, ostrich', hi: 'गुलदस्ता, शुतुरमुर्ग', ex: 'Sie schenkte ihr einen Strauß Blumen.', exEn: 'She gave her a bouquet of flowers.', exHi: 'Usne use ek phoolon ka guldasta diya.', ex2: 'Sie haben einen Strauß im Zoo gesehen.', ex2En: 'They\'ve seen an ostrich at the zoo.', ex2Hi: 'Unhone chidiyaaghar mein shuturmurg dekha hai.' },
    { de: 'Sympathie', art: 'die', gender: 'f', plural: 'Sympathien', pos: 'noun', level: 'B2', register: 'both', en: 'liking, sympathy', hi: 'सहानुभूति', ex: 'Sie zeigte Sympathie für ihn.', exEn: 'She showed liking for him.', exHi: 'Usne uske liye sahaanubhooti dikhaayi.', ex2: 'Sie haben viel Sympathie gewonnen.', ex2En: 'They\'ve gained a lot of sympathy.', ex2Hi: 'Unhein bahut sahaanubhooti mili hai.' },
    { de: 'tagsüber', pos: 'adverb', level: 'B2', register: 'both', en: 'during the day', hi: 'दिन के दौरान', ex: 'Sie arbeitet tagsüber.', exEn: 'She works during the day.', exHi: 'Woh din mein kaam karti hai.', ex2: 'Sie haben tagsüber geschlafen.', ex2En: 'They\'ve slept during the day.', ex2Hi: 'Woh din mein soye hain.' },
    { de: 'Tatsache', art: 'die', gender: 'f', plural: 'Tatsachen', pos: 'noun', level: 'B2', register: 'written', en: 'fact', hi: 'तथ्य', ex: 'Die jede Versuchsperson betreffende Tatsache ist wichtig.', exEn: 'The fact concerning every test subject is important.', exHi: 'Har pareekshan vyakti se sambandhit tathya mahatvapurn hai.', ex2: 'Sie haben eine neue Tatsache entdeckt.', ex2En: 'They\'ve discovered a new fact.', ex2Hi: 'Unhone ek naya tathya khoja hai.' },
    { de: 'Techniker/in', art: 'der/die', gender: 'm/f', plural: 'Techniker/innen', pos: 'noun', level: 'B2', register: 'written', en: 'technician', hi: 'तकनीशियन', ex: 'Der Techniker reparierte die Maschine.', exEn: 'The technician repaired the machine.', exHi: 'Technician ne machine theek ki.', ex2: 'Sie haben einen Techniker gerufen.', ex2En: 'They\'ve called a technician.', ex2Hi: 'Unhone ek technician bulaaya hai.' },
    { de: 'Theorie', art: 'die', gender: 'f', plural: 'Theorien', pos: 'noun', level: 'B2', register: 'written', en: 'theory', hi: 'सिद्धांत', ex: 'Was ist die Theorie dahinter?', exEn: 'What is the theory behind it?', exHi: 'Iske peechhe siddhaant kya hai?', ex2: 'Sie haben eine neue Theorie entwickelt.', ex2En: 'They\'ve developed a new theory.', ex2Hi: 'Unhone ek naya siddhaant vikasit kiya hai.' },
    { de: 'Tunnel', art: 'der', gender: 'm', plural: 'Tunnel', pos: 'noun', level: 'B2', register: 'both', en: 'tunnel', hi: 'सुरंग', ex: 'Der Zug fuhr durch den Tunnel.', exEn: 'The train drove through the tunnel.', exHi: 'Train surang se guzri.', ex2: 'Sie haben einen neuen Tunnel gebaut.', ex2En: 'They\'ve built a new tunnel.', ex2Hi: 'Unhone ek nayi surang banaayi hai.' },
    { de: 'Überblick', art: 'der', gender: 'm', plural: 'Überblicke', pos: 'noun', level: 'B2', register: 'written', en: 'overview', hi: 'सिंहावलोकन', ex: 'Der kurze Überblick über die Versuchsreihe hilft uns.', exEn: 'The short overview of the series of experiments helps us.', exHi: 'Prayog shrinkhala ka chhota sinhaavalokan humaari madad karta hai.', ex2: 'Sie haben einen Überblick gegeben.', ex2En: 'They\'ve given an overview.', ex2Hi: 'Unhone ek sinhaavalokan diya hai.' },
    { de: 'Überrest', art: 'der', gender: 'm', plural: 'Überreste', pos: 'noun', level: 'B2', register: 'written', en: 'remains, leftover', hi: 'अवशेष', ex: 'Sie fanden Überreste einer alten Stadt.', exEn: 'They found remains of an old city.', exHi: 'Unhein ek puraane shahar ke avshesh mile.', ex2: 'Sie haben die Überreste untersucht.', ex2En: 'They\'ve examined the remains.', ex2Hi: 'Unhone avsheshon ki jaanch ki hai.' },
    { de: 'Umfeld', art: 'das', gender: 'n', plural: 'Umfelder', pos: 'noun', level: 'B2', register: 'written', en: 'surroundings, environment', hi: 'परिवेश', ex: 'Das soziale Umfeld beeinflusst die Entwicklung.', exEn: 'The social environment influences the development.', exHi: 'Saamaajik parivesh vikaas ko prabhaavit karta hai.', ex2: 'Sie haben ein positives Umfeld geschaffen.', ex2En: 'They\'ve created a positive environment.', ex2Hi: 'Unhone ek sakaaraatmak parivesh banaaya hai.' },
    { de: 'unpassend', pos: 'adjective', level: 'B2', register: 'both', en: 'unsuitable, inappropriate', hi: 'अनुपयुक्त', ex: 'Der Zeitpunkt war unpassend.', exEn: 'The timing was inappropriate.', exHi: 'Samay anupayukt tha.', ex2: 'Sie haben eine unpassende Bemerkung gemacht.', ex2En: 'They\'ve made an inappropriate remark.', ex2Hi: 'Unhone ek anupayukt tippani ki hai.' },
    { de: 'vehement', pos: 'adjective', level: 'B2', register: 'written', en: 'vehement, forceful', hi: 'प्रबल', ex: 'Sie protestierte vehement.', exEn: 'She protested vehemently.', exHi: 'Usne prabalta se virodh kiya.', ex2: 'Sie haben vehement widersprochen.', ex2En: 'They\'ve vehemently disagreed.', ex2Hi: 'Unhone prabalta se asahmati jataayi hai.' },
    { de: 'verarbeiten', pos: 'verb', level: 'B2', register: 'both', en: 'to process, digest, cope with', hi: 'संसाधित करना', ex: 'Sie verarbeitete die Informationen schnell.', exEn: 'She processed the information quickly.', exHi: 'Usne jaankaari jaldi process ki.', ex2: 'Sie haben den Verlust verarbeitet.', ex2En: 'They\'ve coped with the loss.', ex2Hi: 'Unhone nuksaan se ubhar liya hai.', conj: { praesens: 'verarbeitet', praeteritum: 'verarbeitete', perfekt: 'hat verarbeitet' } },
    { de: 'verbreitet', pos: 'adjective', level: 'B2', register: 'written', en: 'widespread, common', hi: 'व्यापक', ex: 'Der zunehmend verbreitete Schlafmangel betrifft viele.', exEn: 'The increasingly widespread lack of sleep affects many.', exHi: 'Din ba din vyaapak ho rahi neend ki kami kai logon ko prabhaavit karti hai.', ex2: 'Diese Meinung ist weit verbreitet.', ex2En: 'This opinion is widely held.', ex2Hi: 'Yeh raay vyaapak roop se prachalit hai.' },
    { de: 'Verlierer/in', art: 'der/die', gender: 'm/f', plural: 'Verlierer/innen', pos: 'noun', level: 'B2', register: 'both', en: 'loser', hi: 'हारने वाला', ex: 'Der Verlierer akzeptierte die Niederlage.', exEn: 'The loser accepted the defeat.', exHi: 'Haarne waale ne haar sweekaar ki.', ex2: 'Sie haben den Verlierer getröstet.', ex2En: 'They\'ve consoled the loser.', ex2Hi: 'Unhone haarne waale ko dhaadhas diya hai.' },
    { de: 'Vermieter/in', art: 'der/die', gender: 'm/f', plural: 'Vermieter/innen', pos: 'noun', level: 'B2', register: 'written', en: 'landlord', hi: 'मकान मालिक', ex: 'Der Vermieter erhöhte die Miete.', exEn: 'The landlord raised the rent.', exHi: 'Makaan maalik ne kiraaya badhaaya.', ex2: 'Sie haben mit dem Vermieter gesprochen.', ex2En: 'They\'ve spoken with the landlord.', ex2Hi: 'Unhone makaan maalik se baat ki hai.' },
    { de: 'Vermögen', art: 'das', gender: 'n', plural: 'Vermögen', pos: 'noun', level: 'B2', register: 'written', en: 'fortune, assets, ability', hi: 'संपत्ति', ex: 'Sie erbte ein großes Vermögen.', exEn: 'She inherited a great fortune.', exHi: 'Usne ek badi sampatti wiraasat mein paayi.', ex2: 'Sie haben ihr Vermögen investiert.', ex2En: 'They\'ve invested their assets.', ex2Hi: 'Unhone apni sampatti nivesh ki hai.' },
    { de: 'verschaffen', pos: 'verb', level: 'B2', register: 'written', en: 'to obtain, procure, provide, secure', hi: 'दिलाना', ex: 'Sie verschaffte sich Zugang.', exEn: 'She obtained access.', exHi: 'Usne pahunch praapt ki.', ex2: 'Sie haben sich einen Vorteil verschafft.', ex2En: 'They\'ve secured an advantage.', ex2Hi: 'Unhone ek laabh praapt kiya hai.', conj: { praesens: 'verschafft', praeteritum: 'verschaffte', perfekt: 'hat verschafft' } },
    { de: 'verschärfen', pos: 'verb', level: 'B2', register: 'written', en: 'to tighten, intensify', hi: 'सख्त करना', ex: 'Sie verschärften die Regeln.', exEn: 'They tightened the rules.', exHi: 'Unhone niyam sakht kiye.', ex2: 'Der Konflikt hat sich verschärft.', ex2En: 'The conflict has intensified.', ex2Hi: 'Vivaad tez ho gaya hai.', conj: { praesens: 'verschärft', praeteritum: 'verschärfte', perfekt: 'hat verschärft' } },
    { de: 'verstärkt', pos: 'adjective', level: 'B2', register: 'written', en: 'increased, intensified', hi: 'बढ़ा हुआ', ex: 'Es gab verstärkte Anstrengungen.', exEn: 'There were increased efforts.', exHi: 'Zyaada prayaas hue.', ex2: 'Sie haben verstärkt zusammengearbeitet.', ex2En: 'They\'ve collaborated more intensely.', ex2Hi: 'Unhone zyaada milkar kaam kiya hai.' },
    { de: 'Versuchsgruppe', art: 'die', gender: 'f', plural: 'Versuchsgruppen', pos: 'noun', level: 'B2', register: 'written', en: 'test group', hi: 'परीक्षण समूह', ex: 'Die sorgfältig ausgewählte Versuchsgruppe zeigte vorbildliche Ergebnisse.', exEn: 'The carefully selected test group showed exemplary results.', exHi: 'Savdhaani se chuna gaya pareekshan samooh ne aadarsh parinaam dikhaaye.', ex2: 'Sie haben zwei Versuchsgruppen verglichen.', ex2En: 'They\'ve compared two test groups.', ex2Hi: 'Unhone do pareekshan samoohon ki tulna ki hai.' },
    { de: 'Versuchsperson', art: 'die', gender: 'f', plural: 'Versuchspersonen', pos: 'noun', level: 'B2', register: 'written', en: 'test subject, experiment participant', hi: 'परीक्षण व्यक्ति', ex: 'Jede Versuchsperson wurde beobachtet.', exEn: 'Every test subject was observed.', exHi: 'Har pareekshan vyakti ko nirikshit kiya gaya.', ex2: 'Sie haben die Versuchspersonen befragt.', ex2En: 'They\'ve interviewed the test subjects.', ex2Hi: 'Unhone pareekshan vyaktiyon se saval poochhe hain.' },
    { de: 'Versuchsreihe', art: 'die', gender: 'f', plural: 'Versuchsreihen', pos: 'noun', level: 'B2', register: 'written', en: 'series of experiments', hi: 'प्रयोग श्रृंखला', ex: 'Der Überblick über die Versuchsreihe hilft uns.', exEn: 'The overview of the series of experiments helps us.', exHi: 'Prayog shrinkhala ka sinhaavalokan humaari madad karta hai.', ex2: 'Sie haben eine neue Versuchsreihe gestartet.', ex2En: 'They\'ve started a new series of experiments.', ex2Hi: 'Unhone ek nayi prayog shrinkhala shuru ki hai.' },
    { de: 'vorbildlich', pos: 'adjective', level: 'B2', register: 'written', en: 'exemplary, model', hi: 'आदर्श', ex: 'Die Versuchsgruppe zeigte vorbildliche Ergebnisse.', exEn: 'The test group showed exemplary results.', exHi: 'Pareekshan samooh ne aadarsh parinaam dikhaaye.', ex2: 'Sie haben vorbildliches Verhalten gezeigt.', ex2En: 'They\'ve shown exemplary behaviour.', ex2Hi: 'Unhone aadarsh vyavahaar dikhaaya hai.' },
    { de: 'Vorgang', art: 'der', gender: 'm', plural: 'Vorgänge', pos: 'noun', level: 'B2', register: 'written', en: 'process, event', hi: 'प्रक्रिया', ex: 'Der Vorgang dauerte mehrere Stunden.', exEn: 'The process took several hours.', exHi: 'Prakriya kai ghante chali.', ex2: 'Sie haben den Vorgang dokumentiert.', ex2En: 'They\'ve documented the process.', ex2Hi: 'Unhone prakriya dastaavezit ki hai.' },
    { de: 'Vortragsreihe', art: 'die', gender: 'f', plural: 'Vortragsreihen', pos: 'noun', level: 'B2', register: 'written', en: 'lecture series', hi: 'व्याख्यान श्रृंखला', ex: 'Die Vortragsreihe war beliebt.', exEn: 'The lecture series was popular.', exHi: 'Vyaakhyaan shrinkhala lokapriya thi.', ex2: 'Sie haben an der Vortragsreihe teilgenommen.', ex2En: 'They\'ve attended the lecture series.', ex2Hi: 'Unhone vyaakhyaan shrinkhala mein bhaag liya hai.' },
    { de: 'wacklig', pos: 'adjective', level: 'B2', register: 'both', en: 'wobbly, shaky', hi: 'डगमगाता हुआ', ex: 'Der Stuhl war wacklig.', exEn: 'The chair was wobbly.', exHi: 'Kursi dagmagaati thi.', ex2: 'Sie haben den wackligen Tisch repariert.', ex2En: 'They\'ve repaired the wobbly table.', ex2Hi: 'Unhone dagmagaate table ko theek kiya hai.' },
    { de: 'Warnsignal', art: 'das', gender: 'n', plural: 'Warnsignale', pos: 'noun', level: 'B2', register: 'written', en: 'warning signal', hi: 'चेतावनी संकेत', ex: 'Das Warnsignal ertönte plötzlich.', exEn: 'The warning signal sounded suddenly.', exHi: 'Chetaavani sanket achaanak baja.', ex2: 'Sie haben das Warnsignal ignoriert.', ex2En: 'They\'ve ignored the warning signal.', ex2Hi: 'Unhone chetaavani sanket ko nazarandaaz kiya hai.' },
    { de: 'Weiche', art: 'die', gender: 'f', plural: 'Weichen', pos: 'noun', level: 'B2', register: 'written', en: 'railway switch, points', hi: 'रेलवे स्विच', ex: 'Die Weiche wurde umgestellt.', exEn: 'The railway switch was changed.', exHi: 'Railway switch badla gaya.', ex2: 'Sie haben die Weiche repariert.', ex2En: 'They\'ve repaired the railway switch.', ex2Hi: 'Unhone railway switch theek kiya hai.' },
    { de: 'Weltbild', art: 'das', gender: 'n', plural: 'Weltbilder', pos: 'noun', level: 'B2', register: 'written', en: 'worldview', hi: 'विश्व दृष्टिकोण', ex: 'Ihr Weltbild veränderte sich.', exEn: 'Her worldview changed.', exHi: 'Uska vishwa drishtikon badal gaya.', ex2: 'Sie haben ein neues Weltbild entwickelt.', ex2En: 'They\'ve developed a new worldview.', ex2Hi: 'Unhone ek naya vishwa drishtikon vikasit kiya hai.' },
    { de: 'Weltformel', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'theory of everything', hi: 'सर्वव्यापी सिद्धांत', ex: 'Physiker suchen nach der Weltformel.', exEn: 'Physicists search for the theory of everything.', exHi: 'Physicists sarvavyaapi siddhaant dhoondhte hain.', ex2: 'Sie haben über die Weltformel diskutiert.', ex2En: 'They\'ve discussed the theory of everything.', ex2Hi: 'Unhone sarvavyaapi siddhaant par charcha ki hai.' },
    { de: 'wünschenswert', pos: 'adjective', level: 'B2', register: 'written', en: 'desirable', hi: 'वांछनीय', ex: 'Ein besseres Ergebnis wäre wünschenswert.', exEn: 'A better result would be desirable.', exHi: 'Ek behtar parinaam vaanchhaneeya hoga.', ex2: 'Sie haben eine wünschenswerte Lösung gefunden.', ex2En: 'They\'ve found a desirable solution.', ex2Hi: 'Unhein ek vaanchhaneeya samaadhaan mila hai.' },
    { de: 'Zeitalter', art: 'das', gender: 'n', plural: 'Zeitalter', pos: 'noun', level: 'B2', register: 'written', en: 'era, age', hi: 'युग', ex: 'Das digitale Zeitalter veränderte alles.', exEn: 'The digital age changed everything.', exHi: 'Digital yug ne sab kuch badal diya.', ex2: 'Sie haben ein neues Zeitalter eingeläutet.', ex2En: 'They\'ve ushered in a new era.', ex2Hi: 'Unhone ek naye yug ki shuruaat ki hai.' },
    { de: 'Zerfall', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'decay, disintegration', hi: 'विघटन', ex: 'Der Zerfall des Systems war unvermeidlich.', exEn: 'The decay of the system was inevitable.', exHi: 'System ka vighatan avashyambhaavi tha.', ex2: 'Sie haben den Zerfall verhindert.', ex2En: 'They\'ve prevented the disintegration.', ex2Hi: 'Unhone vighatan roka hai.' },
    { de: 'zufolge', pos: 'preposition', level: 'B2', register: 'written', en: 'according to', hi: 'के अनुसार', ex: 'Der Studie zufolge sinkt die Zahl.', exEn: 'According to the study, the number is falling.', exHi: 'Adhyayan ke anusaar, sankhya ghat rahi hai.', ex2: 'Ihm zufolge ist das richtig.', ex2En: 'According to him, that is correct.', ex2Hi: 'Uske anusaar, yeh sahi hai.' },
    { de: 'zurückerobern', pos: 'verb', level: 'B2', register: 'written', en: 'to reconquer, win back', hi: 'वापस जीतना', ex: 'Sie eroberten den Markt zurück.', exEn: 'They won back the market.', exHi: 'Unhone baazaar wapas jeeta.', ex2: 'Sie haben ihre Position zurückerobert.', ex2En: 'They\'ve reconquered their position.', ex2Hi: 'Unhone apni sthiti wapas paayi hai.', conj: { praesens: 'erobert zurück', praeteritum: 'eroberte zurück', perfekt: 'hat zurückerobert' } },
    { de: 'zurückfallen', pos: 'verb', level: 'B2', register: 'both', en: 'to fall back, relapse', hi: 'पीछे गिरना', ex: 'Sie fiel in alte Gewohnheiten zurück.', exEn: 'She fell back into old habits.', exHi: 'Woh purani aadaton mein wapas gir gayi.', ex2: 'Sie sind zurückgefallen.', ex2En: 'They\'ve fallen back.', ex2Hi: 'Woh peechhe gir gaye hain.', conj: { praesens: 'fällt zurück', praeteritum: 'fiel zurück', perfekt: 'ist zurückgefallen' } },
    { de: 'Allesfresser/in', art: 'der/die', gender: 'm/f', plural: 'Allesfresser/innen', pos: 'noun', level: 'B2', register: 'both', en: 'omnivore', hi: 'सर्वाहारी', ex: 'Der Mensch ist ein Allesfresser.', exEn: 'The human is an omnivore.', exHi: 'Manushya ek sarvaahaari hai.', ex2: 'Sie haben Allesfresser untersucht.', ex2En: 'They\'ve studied omnivores.', ex2Hi: 'Unhone sarvaahaariyon ka adhyayan kiya hai.' },
    { de: 'Artgenosse/Artgenossin', art: 'der/die', gender: 'm/f', plural: 'Artgenossen/Artgenossinnen', pos: 'noun', level: 'B2', register: 'written', en: 'member of the same species', hi: 'सजाति सदस्य', ex: 'Der Wolf lebt mit seinen Artgenossen.', exEn: 'The wolf lives with members of its own species.', exHi: 'Bhediya apni prajaati ke saathiyon ke saath rehta hai.', ex2: 'Sie haben ihre Artgenossen beobachtet.', ex2En: 'They\'ve observed members of their own species.', ex2Hi: 'Unhone apni prajaati ke saathiyon ko dekha hai.' },
    { de: 'Besprechungstermin', art: 'der', gender: 'm', plural: 'Besprechungstermine', pos: 'noun', level: 'B2', register: 'written', en: 'meeting appointment', hi: 'बैठक की तारीख', ex: 'Der Besprechungstermin wurde verschoben.', exEn: 'The meeting appointment was postponed.', exHi: 'Baithak ki taareekh aage badhaayi gayi.', ex2: 'Sie haben einen Besprechungstermin vereinbart.', ex2En: 'They\'ve arranged a meeting appointment.', ex2Hi: 'Unhone ek baithak ki taareekh tay ki hai.' },
    { de: 'Feuilletonist/in', art: 'der/die', gender: 'm/f', plural: 'Feuilletonisten/Feuilletonistinnen', pos: 'noun', level: 'B2', register: 'written', en: 'feature writer', hi: 'फीचर लेखक', ex: 'Der Feuilletonist schrieb einen scharfen Artikel.', exEn: 'The feature writer wrote a sharp article.', exHi: 'Feature writer ne ek tez lekh likha.', ex2: 'Sie haben mit dem Feuilletonisten gesprochen.', ex2En: 'They\'ve spoken with the feature writer.', ex2Hi: 'Unhone feature writer se baat ki hai.' },
    { de: 'Kindergartenalter', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'kindergarten age', hi: 'किंडरगार्टन आयु', ex: 'Das Kind war im Kindergartenalter.', exEn: 'The child was of kindergarten age.', exHi: 'Bachcha kindergarten aayu ka tha.', ex2: 'Sie haben Kinder im Kindergartenalter beobachtet.', ex2En: 'They\'ve observed children of kindergarten age.', ex2Hi: 'Unhone kindergarten aayu ke bachchon ko dekha hai.' },
    { de: 'Lügengeschichte', art: 'die', gender: 'f', plural: 'Lügengeschichten', pos: 'noun', level: 'B2', register: 'both', en: 'tall tale, made-up story', hi: 'गढ़ी हुई कहानी', ex: 'Er erzählte eine Lügengeschichte.', exEn: 'He told a made-up story.', exHi: 'Usne ek gadhi hui kahaani sunaayi.', ex2: 'Sie haben die Lügengeschichte entlarvt.', ex2En: 'They\'ve exposed the tall tale.', ex2Hi: 'Unhone gadhi hui kahaani ka pardaafaash kiya hai.' },
    { de: 'Ministerpräsident/in', art: 'der/die', gender: 'm/f', plural: 'Ministerpräsidenten/Ministerpräsidentinnen', pos: 'noun', level: 'B2', register: 'written', en: 'minister-president, state premier', hi: 'राज्य के प्रधानमंत्री', ex: 'Der Ministerpräsident hielt eine Rede.', exEn: 'The state premier gave a speech.', exHi: 'Rajya ke pradhaanmantri ne bhaashan diya.', ex2: 'Sie haben den Ministerpräsidenten getroffen.', ex2En: 'They\'ve met the state premier.', ex2Hi: 'Unhone rajya ke pradhaanmantri se mulaakaat ki hai.' },
    { de: 'Mittagsschläfchen', art: 'das', gender: 'n', plural: 'Mittagsschläfchen', pos: 'noun', level: 'B2', register: 'both', en: 'midday nap', hi: 'दोपहर की झपकी', ex: 'Sie hielt ein Mittagsschläfchen.', exEn: 'She took a midday nap.', exHi: 'Usne dopahar ki jhapki li.', ex2: 'Sie haben ein Mittagsschläfchen empfohlen.', ex2En: 'They\'ve recommended a midday nap.', ex2Hi: 'Unhone dopahar ki jhapki ki sifaarish ki hai.' },
    { de: 'Nationalsozialist/in', art: 'der/die', gender: 'm/f', plural: 'Nationalsozialisten/Nationalsozialistinnen', pos: 'noun', level: 'B2', register: 'written', en: 'National Socialist, Nazi', hi: 'नाज़ी', ex: 'Historiker untersuchten die Nationalsozialisten.', exEn: 'Historians examined the National Socialists.', exHi: 'Itihaaskaaron ne Nazi logon ki jaanch ki.', ex2: 'Sie haben über die Nationalsozialisten geforscht.', ex2En: 'They\'ve researched the National Socialists.', ex2Hi: 'Unhone Nazi logon par shodh kiya hai.' },
    { de: 'Nobelpreisträger/in', art: 'der/die', gender: 'm/f', plural: 'Nobelpreisträger/innen', pos: 'noun', level: 'B2', register: 'written', en: 'Nobel laureate', hi: 'नोबेल पुरस्कार विजेता', ex: 'Der Nobelpreisträger hielt eine Rede.', exEn: 'The Nobel laureate gave a speech.', exHi: 'Nobel laureate ne bhaashan diya.', ex2: 'Sie haben mit einem Nobelpreisträger gesprochen.', ex2En: 'They\'ve spoken with a Nobel laureate.', ex2Hi: 'Unhone ek Nobel laureate se baat ki hai.' },
    { de: 'Ökologe/Ökologin', art: 'der/die', gender: 'm/f', plural: 'Ökologen/Ökologinnen', pos: 'noun', level: 'B2', register: 'written', en: 'ecologist', hi: 'पारिस्थितिकीविद्', ex: 'Der Ökologe untersuchte das Ökosystem.', exEn: 'The ecologist studied the ecosystem.', exHi: 'Ecologist ne ecosystem ki jaanch ki.', ex2: 'Sie haben mit einer Ökologin zusammengearbeitet.', ex2En: 'They\'ve worked together with an ecologist.', ex2Hi: 'Unhone ek ecologist ke saath kaam kiya hai.' },
    { de: 'Pädagoge/Pädagogin', art: 'der/die', gender: 'm/f', plural: 'Pädagogen/Pädagoginnen', pos: 'noun', level: 'B2', register: 'written', en: 'educator, pedagogue', hi: 'शिक्षाशास्त्री', ex: 'Die Pädagogin entwickelte eine neue Methode.', exEn: 'The educator developed a new method.', exHi: 'Shikshaashaastri ne ek nayi vidhi vikasit ki.', ex2: 'Sie haben mit Pädagogen zusammengearbeitet.', ex2En: 'They\'ve collaborated with educators.', ex2Hi: 'Unhone shikshaashaastriyon ke saath kaam kiya hai.' },
    { de: 'Schlafexperte/Schlafexpertin', art: 'der/die', gender: 'm/f', plural: 'Schlafexperten/Schlafexpertinnen', pos: 'noun', level: 'B2', register: 'written', en: 'sleep expert', hi: 'नींद विशेषज्ञ', ex: 'Der Schlafexperte gab Ratschläge.', exEn: 'The sleep expert gave advice.', exHi: 'Neend visheshagya ne salaah di.', ex2: 'Sie haben eine Schlafexpertin konsultiert.', ex2En: 'They\'ve consulted a sleep expert.', ex2Hi: 'Unhone ek neend visheshagya se salaah li hai.' },
    { de: 'Schreibtischplatte', art: 'die', gender: 'f', plural: 'Schreibtischplatten', pos: 'noun', level: 'B2', register: 'both', en: 'desktop surface', hi: 'डेस्क की सतह', ex: 'Die Schreibtischplatte war aus Holz.', exEn: 'The desktop surface was made of wood.', exHi: 'Desk ki satah lakdi ki thi.', ex2: 'Sie haben die Schreibtischplatte ausgetauscht.', ex2En: 'They\'ve replaced the desktop surface.', ex2Hi: 'Unhone desk ki satah badli hai.' },
    { de: 'Service-Unternehmen', art: 'das', gender: 'n', plural: 'Service-Unternehmen', pos: 'noun', level: 'B2', register: 'written', en: 'service company', hi: 'सेवा कंपनी', ex: 'Das Service-Unternehmen wuchs schnell.', exEn: 'The service company grew fast.', exHi: 'Seva company tezi se badhi.', ex2: 'Sie haben ein Service-Unternehmen gegründet.', ex2En: 'They\'ve founded a service company.', ex2Hi: 'Unhone ek seva company sthaapit ki hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist eine Komplexe Nominalgruppe?',
      body: [ 'German often places almost all information around one noun — building it up layer by layer.' ],
      table: {
        head: ['Step', 'Result'],
        rows: [
          ['Start', 'der Bericht'],
          ['+ Adjective', 'der ausführliche Bericht'],
          ['+ Second noun', 'der ausführliche Forschungsbericht'],
          ['+ Prepositional attribute', 'der ausführliche Forschungsbericht über erneuerbare Energien'],
          ['+ Partizipialattribut', 'der im vergangenen Jahr veröffentlichte ausführliche Forschungsbericht über erneuerbare Energien']
        ]
      },
      hinglish: 'German aksar poori jaankaari ek hi noun ke aas-paas rakh deta hai, aur use layer by layer banata hai. Isliye reading mein ek sentence mein bahut kam verbs hote hain par noun phrases bahut lambe ho jaate hain.'
    },
    {
      title: 'Das Kernnomen finden',
      body: [ 'Students must always locate the MAIN noun first — everything else modifies it.' ],
      table: {
        head: ['Full phrase', 'Head noun'],
        rows: [ ['der gestern veröffentlichte wissenschaftliche Forschungsbericht', 'Bericht'] ]
      },
      hinglish: 'Sabse pehle main noun dhoondo \u2014 baaki sab usi ka description hota hai. Aur ise dhoondne ka aasaan tarika hai: jo shabd sabse aage aata hai adjectives ke baad, wahi head noun hota hai.'
    },
    {
      title: 'Typische Bausteine',
      body: [ 'A complex noun phrase can combine: article, quantifier, adjective(s), Partizipialattribut, Genitiv attribute, prepositional phrase.' ],
      hinglish: 'Ek complex noun phrase mein yeh cheezein ek saath aa sakti hain \u2014 article, quantifier, ek ya zyada adjectives, Partizipialattribut, Genitiv attribute aur prepositional phrase. Sab ek hi noun ko describe karte hain.'
    },
    {
      title: 'Strategie zum Lesen langer Nominalgruppen',
      body: [ 'A reliable four-step reading strategy for any long German noun phrase.' ],
      table: {
        head: ['Step', 'Action'],
        rows: [
          ['1', 'Find the head noun'],
          ['2', 'Ignore modifiers'],
          ['3', 'Read modifiers one by one'],
          ['4', 'Reconstruct meaning']
        ]
      },
      hinglish: 'Lambe noun phrase ko padhne ka ek pakka tarika hai. Pehle head noun dhoondo, phir beech ke modifiers ko chhod do, phir unhe ek-ek karke padho, aur end mein poora matlab jodo. Shuru se seedha padhne ki koshish mein hi confusion hoti hai.'
    },
    {
      title: 'Die Reihenfolge der Bausteine',
      body: [
        'The slots are not interchangeable \u2014 German fills them in a fixed order. Everything except the Genitiv and the prepositional phrase goes BEFORE the noun; those two follow it.'
      ],
      table: {
        head: ['Slot', 'Position', 'Example piece'],
        rows: [
          ['1. Article / quantifier', 'before', '<span class="de">der</span>'],
          ['2. Partizipialattribut (with its own extension)', 'before', '<span class="de">im vergangenen Jahr ver\u00f6ffentlichte</span>'],
          ['3. Adjective(s)', 'before', '<span class="de">ausf\u00fchrliche</span>'],
          ['4. HEAD NOUN', '\u2014', '<span class="de">Forschungsbericht</span>'],
          ['5. Genitiv attribute', 'after', '<span class="de">der Universit\u00e4t</span>'],
          ['6. Prepositional phrase', 'after', '<span class="de">\u00fcber erneuerbare Energien</span>']
        ]
      },
      note: 'Two details worth remembering: an adverb modifying a participle keeps its bare form (<span class="de">neu entwickelt</span>, not <i>neue entwickelt</i>), and when several adjectives stack up they all take the SAME ending.',
      hinglish: 'In slots ka order fix hai \u2014 tum inhe idhar-udhar nahi kar sakte. Article, Partizipialattribut aur adjectives noun se <b>pehle</b> aate hain, aur Genitiv aur prepositional phrase noun ke <b>baad</b>. Isliye ek hi noun ke dono taraf jaankaari hoti hai. Do chhoti baatein yaad rakho \u2014 participle se pehle wala adverb bina ending rehta hai (<span class="de">neu entwickelt</span>, na ki <i>neue entwickelt</i>), aur agar kai adjectives ek saath aayein to sabki ending ek jaisi hoti hai.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These examples reflect authentic Goethe B2 academic and workplace complex noun phrases.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['die sorgfältig vorbereitete wissenschaftliche Präsentation', 'the carefully prepared scientific presentation'],
          ['der internationale Markt für erneuerbare Energien', 'the international market for renewable energies'],
          ['die im Labor entwickelte neue Technologie', 'the new technology developed in the laboratory'],
          ['das Ergebnis der aktuellen Untersuchung', 'the result of the current investigation'],
          ['die Verbesserung der internen Unternehmenskommunikation', 'the improvement of internal company communication']
        ]
      },
      hinglish: 'Yeh examples wahi hain jo Goethe B2 ke academic aur office wale texts mein asli mein aate hain.'
    },
    {
      title: 'Register',
      body: [ 'Complex nominal groups appear constantly in scientific articles, research papers, business reports, contracts, newspapers, official documents, and university textbooks.' ],
      hinglish: 'Yeh structure scientific articles, research papers, business reports, contracts aur official documents mein bahut aata hai. Reading ke liye ise samajhna zaroori hai; khud likhte waqt itna lamba banane ki zaroorat nahi.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from wrong adjective endings, wrong word order, or scattering the modifiers after the noun instead of before it.' ],
      mistakes: [
        { wrong: 'der wissenschaftlich Bericht', right: 'der wissenschaftliche Bericht', why: 'Attributive adjectives need the full ending "-e" (with a definite article, masc. nom.), not the bare stem "wissenschaftlich".' },
        { wrong: 'die veröffentlichte gestern Präsentation', right: 'die gestern veröffentlichte Präsentation', why: 'The adverb "gestern" must sit BEFORE the participle "veröffentlichte", not after it.' },
        { wrong: 'der ausführlicher wissenschaftliche Bericht', right: 'der ausführliche wissenschaftliche Bericht', why: 'When several adjectives stack up they ALL take the same ending \u2014 after "der" every one of them ends in -e, not just the last.' },
        { wrong: 'die der Daten Analyse', right: 'die Analyse der Daten', why: 'A Genitiv attribute comes AFTER the head noun, not before it \u2014 unlike adjectives and participles, which come before.' },
        { wrong: 'das neue entwickelte Projekt', right: 'das neu entwickelte Projekt', why: 'Before a participle, use the adverb form "neu" (not the adjective "neue") — "neu entwickelt" means "newly developed".' }
      ],
      hinglish: 'Yeh galtiyan chaar wajah se hoti hain \u2014 adjective ki ending galat lagana, adverb ko participle ke baad rakh dena, Genitiv ko noun se pehle le aana, ya participle se pehle adverb par ending laga dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Never read a long noun phrase left to right only. Find the MAIN NOUN first, then ask: who? which? what kind? from where? about what? Every other word describes that one noun.' ],
      note: 'Memory trick: complex noun phrases are a puzzle with one solution — the head noun. Find it first, then everything else falls into place.',
      hinglish: 'Lambe noun phrase ko seedha shuru se aakhir tak mat padho. Pehle main noun dhoondo, aur phir poochho \u2014 kaunsa? kaisa? kahaan se? kis baare mein? Har baaki shabd usi ek noun ke baare mein kuch bata raha hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Wissenschaftsartikel: Die Suche nach der Weltformel',
    titleEn: 'Science article: the search for the theory of everything',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'seit', role: 'plain', en: 'since', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'Jahrzehnten', role: 'plain', en: 'decades', hi: 'दशकों', type: 'Noun · plural (Teil der komplexen Nominalgruppe)' },
      { w: 'andauernde', role: 'r-verb', en: 'ongoing (komplexe Nominalgruppe)', hi: 'जारी (जटिल संज्ञा समूह)', type: 'Verb · Partizip I (erweitertes Attribut)', why: 'This whole phrase — "die seit Jahrzehnten andauernde Suche" — is a complex noun group: preposition phrase + participle + noun, all packed before "Suche" (this chapter).' },
      { w: 'Suche', role: 'plain', en: 'search (Satzende der Gruppe)', hi: 'खोज (समूह का अंत)', type: 'Noun · fem. (Kopf der Nominalgruppe)' },
      { w: 'nach', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'plain', en: 'a (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'einheitlichen', role: 'plain', en: 'unified', hi: 'एकीकृत', type: 'Adjective' },
      { w: 'Weltformel', role: 'plain', en: 'theory of everything (Satzende)', hi: 'सर्वव्यापी सिद्धांत (Satzende)', type: 'Noun · fem.', why: 'die Weltformel (this chapter).' },
      { w: 'beschäftigt', role: 'plain', en: 'occupies', hi: 'व्यस्त रखता है', type: 'Verb · beschäftigen' },
      { w: 'weiterhin', role: 'plain', en: 'still', hi: 'अभी भी', type: 'Adverb' },
      { w: 'zahlreiche', role: 'plain', en: 'numerous', hi: 'अनेक', type: 'Adjective' },
      { w: 'Physiker', role: 'plain', en: 'physicists (Satzende)', hi: 'भौतिक विज्ञानी (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'für', role: 'plain', en: 'for (Teil der Nominalgruppe)', hi: '(जटिल संज्ञा समूह का हिस्सा)', type: 'Preposition (im erweiterten Attribut)' },
      { w: 'seine', role: 'plain', en: 'his', hi: 'अपनी', type: 'Possessivartikel' },
      { w: 'Theorie', role: 'plain', en: 'theory', hi: 'सिद्धांत', type: 'Noun · fem.', why: 'die Theorie (this chapter).' },
      { w: 'weltberühmt', role: 'r-verb', en: 'world-famous (komplexe Nominalgruppe)', hi: 'विश्व-प्रसिद्ध (जटिल संज्ञा समूह)', type: 'Adjective (erweitertes Attribut)', why: 'Another complex noun group: "ein für seine Theorie weltberühmt gewordener Physiker" packs a whole clause into the phrase before Physiker.' },
      { w: 'gewordener', role: 'plain', en: 'become (Satzende der Gruppe)', hi: 'बना हुआ (समूह का अंत)', type: 'Verb · Partizip II (erweitertes Attribut)' },
      { w: 'Physiker', role: 'plain', en: 'physicist (Kopf der Gruppe)', hi: 'भौतिक विज्ञानी (समूह का मुख्य शब्द)', type: 'Noun · masc. (Kopf der Nominalgruppe)' },
      { w: 'erhielt', role: 'plain', en: 'received', hi: 'प्राप्त किया', type: 'Verb · erhalten (Präteritum)' },
      { w: 'kürzlich', role: 'plain', en: 'recently', hi: 'हाल ही में', type: 'Adverb' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Nobelpreis', role: 'plain', en: 'Nobel Prize (Satzende)', hi: 'नोबेल पुरस्कार (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Als', role: 'plain', en: 'as a', hi: 'रूप में', type: 'Preposition' },
      { w: 'Nobelpreisträger', role: 'plain', en: 'Nobel laureate (Satzende)', hi: 'नोबेल पुरस्कार विजेता (Satzende)', type: 'Noun · masc.', why: 'der/die Nobelpreisträger/in (this chapter).' },
      { w: 'warnt', role: 'plain', en: 'warns', hi: 'चेतावनी देता है', type: 'Verb · warnen' },
      { w: 'er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'jedoch', role: 'plain', en: 'however', hi: 'हालांकि', type: 'Adverb' },
      { w: 'vor', role: 'plain', en: 'of', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'zu', role: 'plain', en: 'too', hi: 'बहुत', type: 'Adverb' },
      { w: 'großem', role: 'plain', en: 'great', hi: 'अत्यधिक', type: 'Adjective · Dat.' },
      { w: 'Optimismus', role: 'plain', en: 'optimism (Satzende)', hi: 'आशावाद (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'von', role: 'plain', en: 'by', hi: 'द्वारा', type: 'Preposition · Dat.' },
      { w: 'vielen', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective · Dat.' },
      { w: 'lange', role: 'plain', en: 'long', hi: 'लंबे समय से', type: 'Adverb' },
      { w: 'erwartete', role: 'r-verb', en: 'awaited (komplexe Nominalgruppe)', hi: 'प्रतीक्षित', type: 'Partizip II · erweitertes Attribut', why: 'A complex noun phrase: "die [von vielen lange erwartete] Bestätigung" packs the whole passive clause before the noun (this chapter).' },
      { w: 'Bestätigung', role: 'plain', en: 'confirmation', hi: 'पुष्टि', type: 'Noun · fem.' },
      { w: 'seiner', role: 'plain', en: 'of his', hi: 'उसके', type: 'Possessivartikel · Genitiv' },
      { w: 'Theorie', role: 'plain', en: 'theory', hi: 'सिद्धांत', type: 'Noun · fem.' },
      { w: 'gilt', role: 'plain', en: 'is considered', hi: 'मानी जाती है', type: 'Verb · gelten als' },
      { w: 'inzwischen', role: 'plain', en: 'by now', hi: 'अब तक', type: 'Adverb' },
      { w: 'als', role: 'plain', en: 'as', hi: 'के रूप में', type: 'Preposition' },
      { w: 'eine', role: 'plain', en: 'one (fem.)', hi: 'एक', type: 'Article' },
      { w: 'der', role: 'plain', en: 'of the', hi: 'की', type: 'Article · Genitiv' },
      { w: 'wichtigsten', role: 'plain', en: 'most important', hi: 'सबसे महत्वपूर्ण', type: 'Adjective · Superlativ' },
      { w: 'Entdeckungen', role: 'plain', en: 'discoveries', hi: 'खोजों', type: 'Noun · plural' },
      { w: 'des', role: 'plain', en: 'of the (neut. gen.)', hi: 'की', type: 'Article · Genitiv' },
      { w: 'Jahrhunderts', role: 'plain', en: 'century (Satzende)', hi: 'सदी (Satzende)', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'aller', role: 'plain', en: 'all (Dat.)', hi: 'सभी', type: 'Determiner · Dat.' },
      { w: 'Welt', role: 'plain', en: 'world (Teil der Nominalgruppe)', hi: 'दुनिया (जटिल संज्ञा समूह का हिस्सा)', type: 'Noun · fem. (Dat.)' },
      { w: 'gefeierte', role: 'r-verb', en: 'celebrated (komplexe Nominalgruppe)', hi: 'सराही गई', type: 'Verb · Partizip II (erweitertes Attribut)' },
      { w: 'Entdeckung', role: 'plain', en: 'discovery (Kopf der Gruppe, Satzende)', hi: 'खोज (समूह का मुख्य शब्द, Satzende)', type: 'Noun · fem. (Kopf der Nominalgruppe)' },
      { w: 'wird', role: 'plain', en: 'will be', hi: 'होगी', type: 'Verb · werden (Passiv)' },
      { w: 'schon', role: 'plain', en: 'already', hi: 'पहले ही', type: 'Adverb' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'Schulbüchern', role: 'plain', en: 'textbooks (Satzende)', hi: 'पाठ्यपुस्तकों (Satzende)', type: 'Noun · plural' },
      { w: 'erwähnt', role: 'plain', en: 'mentioned (Satzende)', hi: 'उल्लेखित (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'von', role: 'plain', en: 'by', hi: 'द्वारा', type: 'Preposition · Dat.' },
      { w: 'Fachkollegen', role: 'plain', en: 'colleagues', hi: 'सहकर्मियों', type: 'Noun · plural' },
      { w: 'noch', role: 'plain', en: 'still', hi: 'अभी भी', type: 'Adverb' },
      { w: 'überprüfte', role: 'r-verb', en: 'checked (komplexe Nominalgruppe)', hi: 'जाँची गई', type: 'Partizip II · erweitertes Attribut' },
      { w: 'Theorie', role: 'plain', en: 'theory (Satzende)', hi: 'सिद्धांत (Satzende)', type: 'Noun · fem.' },
      { w: 'gilt', role: 'plain', en: 'is considered', hi: 'मानी जाती है', type: 'Verb · gelten als' },
      { w: 'unter', role: 'plain', en: 'among', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'jungen', role: 'plain', en: 'young', hi: 'युवा', type: 'Adjective' },
      { w: 'Physikern', role: 'plain', en: 'physicists (Satzende)', hi: 'भौतिकविदों (Satzende)', type: 'Noun · plural' },
      { w: 'bereits', role: 'plain', en: 'already', hi: 'पहले से', type: 'Adverb' },
      { w: 'als', role: 'plain', en: 'as', hi: 'के रूप में', type: 'Preposition' },
      { w: 'nahezu', role: 'plain', en: 'nearly', hi: 'लगभग', type: 'Adverb' },
      { w: 'unumstritten', role: 'plain', en: 'undisputed (Satzende)', hi: 'निर्विवाद (Satzende)', type: 'Adjective' },
      { w: '.', plain: true }
    ],
    translation: 'The decades-long search for a unified theory of everything still occupies numerous physicists. A physicist who became world-famous for his theory recently received the Nobel Prize. As a Nobel laureate, however, he warns against too much optimism. The long-awaited confirmation of his theory is now considered one of the century\u2019s most important discoveries. The discovery, celebrated all over the world, is already mentioned in textbooks. The theory, still being checked by fellow specialists, is already considered nearly undisputed among young physicists.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_052_L001', speaker: 'Runa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, hast du gehört? Der von so vielen Forschern geschätzte Nobelpreisträger kommt nächste Woche!', en: 'Timo, have you heard? The Nobel laureate esteemed by so many researchers is coming next week!' },
      { id: 'B2_052_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wirklich? Die von ihm entwickelte Theorie hat mein ganzes Studium geprägt.', en: 'Really? The theory developed by him has shaped my whole studies.' },
      { id: 'B2_052_L003', speaker: 'Runa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau deshalb will ich unbedingt zu seinem Vortrag — der Blick auf die Welt, den er verändert hat, fasziniert mich.', en: 'That\'s exactly why I really want to go to his talk — the view of the world that he\'s changed fascinates me.' },
      { id: 'B2_052_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Dann lass uns früh dort sein, bei so einem Andrang.', en: 'Then let\'s be there early, given that kind of crowd.' }
    ],
    transcript: 'Timo, hast du gehört? Der von so vielen Forschern geschätzte Nobelpreisträger kommt nächste Woche! Wirklich? Die von ihm entwickelte Theorie hat mein ganzes Studium geprägt. Genau deshalb will ich unbedingt zu seinem Vortrag — der Blick auf die Welt, den er verändert hat, fasziniert mich. Dann lass uns früh dort sein, bei so einem Andrang.',
    translation: 'Timo, have you heard? The Nobel laureate esteemed by so many researchers is coming next week! Really? The theory developed by him has shaped my whole studies. That\'s exactly why I really want to go to his talk — the view of the world that he\'s changed fascinates me. Then let\'s be there early, given that kind of crowd.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'hast' },
      { w: 'du' },
      { w: 'gehört' },
      { w: '?', plain: true },
      { w: 'Der' },
      { w: 'von' },
      { w: 'so' },
      { w: 'vielen' },
      { w: 'Forschern' },
      { w: 'geschätzte' },
      { w: 'Nobelpreisträger' },
      { w: 'kommt' },
      { w: 'nächste' },
      { w: 'Woche' },
      { w: '!', plain: true },
      { w: 'Wirklich' },
      { w: '?', plain: true },
      { w: 'Die' },
      { w: 'von' },
      { w: 'ihm' },
      { w: 'entwickelte' },
      { w: 'Theorie' },
      { w: 'hat' },
      { w: 'mein' },
      { w: 'ganzes' },
      { w: 'Studium' },
      { w: 'geprägt' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: 'deshalb' },
      { w: 'will' },
      { w: 'ich' },
      { w: 'unbedingt' },
      { w: 'zu' },
      { w: 'seinem' },
      { w: 'Vortrag' },
      { w: '—', plain: true },
      { w: 'der' },
      { w: 'Blick' },
      { w: 'auf' },
      { w: 'die' },
      { w: 'Welt' },
      { w: ',', plain: true },
      { w: 'den' },
      { w: 'er' },
      { w: 'verändert' },
      { w: 'hat' },
      { w: ',', plain: true },
      { w: 'fasziniert' },
      { w: 'mich' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'lass' },
      { w: 'uns' },
      { w: 'früh' },
      { w: 'dort' },
      { w: 'sein' },
      { w: ',', plain: true },
      { w: 'bei' },
      { w: 'so' },
      { w: 'einem' },
      { w: 'Andrang' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wer kommt nächste Woche?', qEn: 'Who is coming next week?', options: ['ein Politiker', 'der Nobelpreisträger', 'ein Musiker', 'ein Journalist'], optionsEn: ['a politician', 'the Nobel laureate', 'a musician', 'a journalist'], answer: 1,
        explain: '"Der … geschätzte Nobelpreisträger kommt nächste Woche!"' },
      { q: 'Was fasziniert Runa?', qEn: 'What fascinates Runa?', options: ['sein Alter', 'der Blick auf die Welt, den er verändert hat', 'seine Kleidung', 'sein Akzent'], optionsEn: ['his age', 'the view of the world that he changed', 'his clothes', 'his accent'], answer: 1,
        explain: '"Der Blick auf die Welt, den er verändert hat, fasziniert mich."' }
    ]
  },

  speaking: [
    { task: "Du stellst im Meeting ein Diagramm vor. Was zeigt es?", taskEn: "You present a chart in the meeting. What does it show?", de: "Die im Frühjahr veröffentlichte Studie zur Arbeitszeit zeigt einen deutlichen Anstieg.", en: "The study on working hours published in spring shows a clear increase." },
    { task: "Ein Praktikant versteht die Schlagzeile nicht. Sag ihm den Kern.", taskEn: "An intern doesn't understand the headline. Give him the core.", de: "Der Kern ist die Erhöhung, alles andere beschreibt sie nur.", en: "The core is the increase, everything else only describes it." },
    { task: "Rollenspiel: Stellt euer Projekt förmlich vor.", taskEn: "Role-play: present your project formally.", de: "Die vom Land geförderte Untersuchung der Luftqualität in drei Städten beginnt im Herbst.", en: "The state-funded study of air quality in three cities begins in autumn." },
    { task: "Deine Kollegin braucht eine kurze Überschrift für den Bericht.", taskEn: "Your colleague needs a short heading for the report.", de: "Nimm den starken Anstieg der Preise im letzten Quartal.", en: "Take: the sharp rise in prices in the last quarter." },
    { task: "Ein Praktikant verliert im Bericht den Faden und fragt, wie du solche Sätze liest.", taskEn: "An intern loses the thread in the report and asks how you read such sentences.", de: "Ich suche zuerst das Kernnomen; die Erhöhung ist der Kern, alles andere beschreibt sie.", en: "I look for the head noun first; the increase is the core, everything else describes it." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite simple sentences (6-8 sentences): Take simple sentences and combine them into complex noun groups.\n\nTASK 2 — Short scientific report (8-10 sentences): Write about a research topic using multiple authentic complex nominal groups (adjective chains, participial attributes, Genitiv attributes, prepositional attributes).',
    starters: ['Der gestern veröffentlichte ...', 'Die Verbesserung der ...'],
    placeholder: 'Der gestern veröffentlichte wissenschaftliche Forschungsbericht zeigt neue Ergebnisse. Die Verbesserung der Kommunikation ist wichtig.',
    minWords: 70
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'What is the head noun in "der gestern veröffentlichte wissenschaftliche Forschungsbericht"?',
      options: ['Forschungsbericht', 'gestern', 'wissenschaftliche'],
      answer: 0,
      explain: 'Everything else — the article, adverb, participle, and adjective — describes the head noun "Forschungsbericht".'
    },
    gap: {
      sentence: ['Die Verbesserung ', ' Kommunikation ist notwendig.'],
      gaps: [ { answer: 'der', accepts: ['der'] } ],
      explain: '"der" (Genitiv, feminine) attaches "Kommunikation" to the head noun "Verbesserung": "die Verbesserung der Kommunikation".'
    },
    match: {
      q: 'Match each component to its function in a complex noun phrase.',
      pairs: [
        { noun: 'der wissenschaftliche', art: 'Adjective attribute' },
        { noun: 'gestern veröffentlichte', art: 'Partizipialattribut' },
        { noun: 'des Unternehmens', art: 'Genitiv attribute' },
        { noun: 'über Digitalisierung', art: 'Prepositional attribute' }
      ]
    },
    builder: {
      target: 'Build: "the international market for renewable energies" (complex noun phrase)',
      bank: ['der', 'internationale', 'Markt', 'für', 'erneuerbare', 'Energien'],
      answer: ['der', 'internationale', 'Markt', 'für', 'erneuerbare', 'Energien'],
      roles: { 'internationale': 'r-nominalgruppe', 'Markt': 'r-head', 'für': 'r-nominalgruppe', 'erneuerbare': 'r-nominalgruppe', 'Energien': 'r-nominalgruppe' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'die veröffentlichte gestern Präsentation',
      right: 'die gestern veröffentlichte Präsentation',
      explain: 'The adverb "gestern" must come BEFORE the participle "veröffentlichte", not after it.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the FIRST step in reading a long German noun phrase?', options: ['Find the head noun', 'Read left to right word by word', 'Translate every word individually'], answer: 0,
      explain: 'Finding the head noun first lets you understand what all the modifiers are describing.' },
    { q: 'Which components can build a complex noun phrase?', options: ['Article, adjective(s), Partizipialattribut, Genitiv attribute, prepositional phrase', 'Only adjectives', 'Only relative clauses'], answer: 0,
      explain: 'A complex noun phrase can combine all of these elements around one head noun.' },
    { q: 'In "die Verbesserung der Kommunikation", what type of attribute is "der Kommunikation"?', options: ['Genitiv attribute', 'Prepositional attribute', 'Partizipialattribut'], answer: 0,
      explain: '"der Kommunikation" is Genitiv, attaching to the head noun "die Verbesserung".' },
    { q: 'In "der Markt für erneuerbare Energien", what type of attribute is "für erneuerbare Energien"?', options: ['Prepositional attribute', 'Genitiv attribute', 'Adjective attribute'], answer: 0,
      explain: '"für erneuerbare Energien" is a prepositional phrase describing which market.' },
    { q: 'Where does the adverb go in "die gestern veröffentlichte Präsentation"?', options: ['Before the participle', 'After the participle', 'At the very end of the phrase'], answer: 0,
      explain: '"gestern" sits before "veröffentlichte" — all extending elements come before the participle.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-head', html: 'Complex noun phrases pack an entire sentence into one noun. Always find the HEAD NOUN first — everything else describes it.' },
    { c: 'r-nominalgruppe', html: 'Components layer around the head noun: article, adjective(s), Partizipialattribut, Genitiv attribute, prepositional attribute.' },
    { c: 'r-nominalgruppe', html: 'Reading strategy: find the head noun, ignore modifiers briefly, read modifiers one by one, then reconstruct the whole meaning.' }
  ],
  revisionTips: [
    'For every long noun phrase you encounter, practise identifying the head noun before reading further.',
    'Scan a scientific article or business report for complex noun phrases — count the layers (adjective, participle, Genitiv, prepositional) in each.',
    'Practise building your own complex noun phrase step by step, starting from a single noun and adding one modifier at a time.'
  ]
};

window.CHAPTER = CHAPTER;
