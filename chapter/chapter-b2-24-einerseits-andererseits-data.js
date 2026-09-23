/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 24
   "einerseits ... andererseits" — presents TWO different, often
   contrasting viewpoints as two independent main clauses (V2 in
   each). Used for balanced argumentation (pros/cons). Distinct
   from sowohl...als auch (both positive), weder...noch (both
   negative), nicht nur...sondern auch (2nd emphasized). Does NOT
   introduce entweder...oder, je...desto, or zwar...aber (later).
   IMPORTANT: dialogue uses ONLY Britta and Timo.
   Vocabulary source: uploaded chapter-24 list (54 items, user-edited
   general B2 vocabulary bank — youth/social-issues/donation themes).
============================================================ */
const CHAPTER = {
  id: 'b2-24-einerseits-andererseits',
  phase: 'B2 · Phase 1',
  number: 24,
  title: 'einerseits ... andererseits',
  titleEn: 'on the one hand ... on the other hand ...',
  description: 'Two independent main clauses, two honest sides of the same issue — the connector of balanced argument.',
  xp: 430,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 25, title: 'Verbindungsadverbien', titleEn: 'Conjunctive adverbs' , href: 'chapter-b2-25-verbindungsadverbien.html' },

  prevChapter: { number: 23, title: 'nicht nur ... sondern auch', titleEn: 'not only ... but also ...', href: 'chapter-b2-23-nicht-nur-sondern-auch.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two <em>honest</em> sides.',
    intro: 'Britta weighs her daughter\'s phone use with Timo — she understands the worry about online addiction, but also wants to respect her daughter\'s opinion — every argument split honestly in two: einerseits … andererseits.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear einerseits...andererseits present two independent, contrasting viewpoints'
    ],
    scene: 'Die Kleiderspende',
    femaleSpeakers: ['Britta'],
    dialogue: [
      { speaker: 'Britta', tokens: [
        { w: 'Einerseits', role: 'r-conjunction', en: 'on the one hand', hi: 'एक ओर', pron: 'EYE-ner-zyts', type: 'Conjunction · einerseits … andererseits', why: 'einerseits ... andererseits = on the one hand ... on the other hand, this chapter.', ex: 'Einerseits versteht sie viel, andererseits vergisst sie oft.', exEn: 'On the one hand she understands a lot, on the other hand she often forgets.' },
        { w: 'versteht', role: 'r-verb', en: 'understands', hi: 'समझती है', pron: 'fer-SHTAYT', type: 'Verb · verstehen' },
        { w: 'meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Tochter', role: 'r-subject', en: 'daughter', hi: 'बेटी', pron: 'TOKH-ter', type: 'Noun · fem.' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Onlinesucht', role: 'r-akkusativ', en: 'online addiction', hi: 'ऑनलाइन लत', pron: 'ON-line-zukht', type: 'Noun · fem.', why: 'die Onlinesucht (this chapter).', ex: 'die Onlinesucht verstehen' },
        { w: ',', plain: true },
        { w: 'andererseits', role: 'r-conjunction', en: 'on the other hand', hi: 'दूसरी ओर', pron: 'AN-de-rer-zyts', type: 'Conjunction · part 2' },
        { w: 'nutzt', role: 'r-verb', en: 'uses', hi: 'इस्तेमाल करती है', pron: 'NUTST', type: 'Verb · nutzen' },
        { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'ihr', role: 'r-akkusativ', en: 'her (neut.)', hi: 'अपना', pron: 'eer', type: 'Possessive · acc.' },
        { w: 'Handy', role: 'r-akkusativ', en: 'phone', hi: 'फ़ोन', pron: 'HEN-dee', type: 'Noun · neut.' },
        { w: 'trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: 'zu', role: 'r-adverb', en: 'too', hi: 'ज़्यादा', pron: 'tsoo', type: 'Adverb' },
        { w: 'viel', role: 'r-akkusativ', en: 'much', hi: 'ज़्यादा', pron: 'feel', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'On the one hand my daughter understands the online addiction, on the other hand she uses her phone too much nevertheless.', hi: 'Ek or meri beti online lat ko samajhti hai, doosri or woh phir bhi apna phone bahut zyada istemaal karti hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Einerseits', role: 'r-conjunction', en: 'on the one hand', hi: 'एक ओर', pron: 'EYE-ner-zyts', type: 'Conjunction · einerseits … andererseits' },
        { w: 'willst', role: 'r-modalverb', en: 'do you want', hi: 'चाहती हो', pron: 'VILST', type: 'Modal · wollen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'ihr', role: 'r-dativ', en: 'her', hi: 'उसे', pron: 'eer', type: 'Pronoun · dative' },
        { w: 'vertrauen', role: 'r-verb', en: 'trust', hi: 'भरोसा करना', pron: 'fer-TROW-en', type: 'Verb · infinitive' },
        { w: ',', plain: true },
        { w: 'andererseits', role: 'r-conjunction', en: 'on the other hand', hi: 'दूसरी ओर', pron: 'AN-de-rer-zyts', type: 'Conjunction · part 2' },
        { w: 'sorgst', role: 'r-verb', en: 'do you worry', hi: 'चिंता करती हो', pron: 'ZORKST', type: 'Verb · sich sorgen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dich', role: 'r-akkusativ', en: 'yourself', hi: 'ख़ुद को', pron: 'dikh', type: 'Reflexive pronoun' },
        { w: '.', plain: true }
      ], en: 'On the one hand you want to trust her, on the other hand you worry.', hi: 'Ek or tum uspar bharosa karna chahti ho, doosri or tum chinta karti ho.' },
      { speaker: 'Britta', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'respektiere', role: 'r-verb', en: 'respect', hi: 'सम्मान करती हूँ', pron: 'res-pek-TEE-ruh', type: 'Verb · respektieren', why: 'respektieren = to respect (this chapter).', ex: 'Ich respektiere ihre Meinung.', exEn: 'I respect her opinion.' },
        { w: 'ihre', role: 'r-akkusativ', en: 'her (fem.)', hi: 'उसकी', pron: 'EE-ruh', type: 'Possessive · acc.' },
        { w: 'Meinung', role: 'r-akkusativ', en: 'opinion', hi: 'राय', pron: 'MY-nung', type: 'Noun · fem.' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'möchte', role: 'r-modalverb', en: 'would like', hi: 'चाहती हूँ', pron: 'MÖKH-tuh', type: 'Modal · möchten (ich)' },
        { w: 'Regeln', role: 'r-akkusativ', en: 'rules', hi: 'नियम', pron: 'RAY-geln', type: 'Noun · plural' },
        { w: 'einführen', role: 'r-verb', en: 'introduce', hi: 'लागू करना', pron: 'INE-fü-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Exactly. I respect her opinion, but I would like to introduce rules.', hi: 'Bilkul. Main uski raay ka samman karti hoon, par main niyam laagu karna chahti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'könnten', role: 'r-modalverb', en: 'could', hi: 'सकते हैं', pron: 'KÖN-ten', type: 'Modal · können (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'einerseits', role: 'r-conjunction', en: 'on the one hand', hi: 'एक ओर', pron: 'EYE-ner-zyts', type: 'Conjunction · einerseits … andererseits' },
        { w: 'feste', role: 'r-akkusativ', en: 'fixed', hi: 'निश्चित', pron: 'FES-tuh', type: 'Adjective' },
        { w: 'Zeiten', role: 'r-akkusativ', en: 'times', hi: 'समय', pron: 'TSY-ten', type: 'Noun · plural' },
        { w: 'festlegen', role: 'r-verb', en: 'set', hi: 'तय करना', pron: 'FEST-lay-gen', type: 'Verb · infinitive' },
        { w: ',', plain: true },
        { w: 'andererseits', role: 'r-conjunction', en: 'on the other hand', hi: 'दूसरी ओर', pron: 'AN-de-rer-zyts', type: 'Conjunction · part 2' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'ihr', role: 'r-dativ', en: 'her', hi: 'उससे', pron: 'eer', type: 'Pronoun · dative' },
        { w: 'darüber', role: 'r-akkusativ', en: 'about it', hi: 'उस पर', pron: 'da-RÜ-ber', type: 'Pronoun · adverbial' },
        { w: 'reden', role: 'r-verb', en: 'talk', hi: 'बात करना', pron: 'RAY-den', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Maybe we could on the one hand set fixed times, on the other hand talk with her about it.', hi: 'Shayad hum ek or nishchit samay tay kar sakte hain, doosri or usse baat kar sakte hain.' },
      { speaker: 'Britta', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article · masc.' },
        { w: 'guter', role: 'r-subject', en: 'good', hi: 'अच्छा', pron: 'GOO-ter', type: 'Adjective' },
        { w: 'Vorschlag', role: 'r-subject', en: 'suggestion', hi: 'सुझाव', pron: 'FOR-shlahk', type: 'Noun · masc.' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'rede', role: 'r-verb', en: 'talk', hi: 'बात करती हूँ', pron: 'RAY-duh', type: 'Verb · reden (ich)' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'ihr', role: 'r-dativ', en: 'her', hi: 'उससे', pron: 'eer', type: 'Pronoun · dative' },
        { w: '.', plain: true }
      ], en: 'That is a good suggestion. I will talk with her today.', hi: 'Yeh ek achha sujhaav hai. Main aaj usse baat karungi.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de r-einerseits">einerseits ... andererseits</span> means "on the one hand ... on the other hand ..." — it presents TWO independent, contrasting viewpoints as two separate main clauses, each with normal V2 word order. <span class="de">Einerseits ist das Studium interessant, andererseits kostet es viel Zeit.</span> Neither side is favoured; both are simply true.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is EINERSEITS ... ANDERERSEITS (B2 level): a two-part connector meaning "on the one hand ... on the other hand ..." that presents two contrasting viewpoints or aspects without necessarily choosing one (Einerseits ist das Studium interessant, andererseits kostet es viel Zeit.). CRITICAL RULE: unlike other two-part connectors, "einerseits" and "andererseits" each introduce a FULL, INDEPENDENT main clause with normal V2 word order (finite verb in Position 2) — they are NOT bound together grammatically like "sowohl...als auch". Used for balanced argumentation, pros/cons, comparing perspectives — common in discussion essays, presentations, and academic writing. Distinguished from: sowohl...als auch (both positive/equal), weder...noch (both negative), nicht nur...sondern auch (2nd emphasized). ' +
    'Do NOT expect entweder...oder, je...desto, or zwar...aber — those are out of scope for this chapter; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Each clause after "einerseits"/"andererseits" must have the finite verb in Position 2 (normal V2), since these are independent main clauses, not subordinate clauses.\n' +
    '- Avoid adding unnecessary extra connectors like "aber" alongside "einerseits...andererseits" — the contrast is already built in.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Balance check:</b> one sentence on whether the two viewpoints presented are genuinely balanced and contrasting.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly present two balanced, contrasting viewpoints with proper V2 word order in each clause. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the four-connector comparison table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: einerseits and andererseits each introduce a FULL independent main clause with V2 word order.'
  },

  parserSentence: [
    { w: 'Einerseits', role: 'r-einerseits' }, { w: 'ist', role: 'plain' },
    { w: 'das', role: 'plain' }, { w: 'Studium', role: 'plain' }, { w: 'interessant', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: einerseits...andererseits presents two independent, contrasting viewpoints.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Britta and Timo weigh a clothing-donation drive from every angle.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 54 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master einerseits...andererseits structure and the four-connector comparison.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of einerseits...andererseits constructions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the first viewpoint, second viewpoint, and speaker opinion.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Present balanced arguments and compare viewpoints using einerseits...andererseits.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write discussion essays using einerseits...andererseits appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill balanced-argument building, advantage-vs-disadvantage, and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 430 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 54 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Balanced-argument drills, advantage-vs-disadvantage classification, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete einerseits...andererseits reference — four-connector comparison, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Einerseits ist das Studium interessant, andererseits kostet es viel Zeit.', text: 'Present two contrasting viewpoints with V2 word order' },
    { de: 'Einerseits ..., andererseits ... (no extra "aber")', text: 'Avoid redundant connectors — the contrast is already built in' },
    { de: 'sowohl...als auch / weder...noch / nicht nur...sondern auch / einerseits...andererseits', text: 'Distinguish all four two-part connectors' },
    { de: 'Homeoffice, KI, Klimawandel, Auslandsstudium', text: 'Discuss balanced arguments on common B2 topics' },
    { de: 'Discussion essays, presentations, academic writing', text: 'Use einerseits...andererseits naturally in formal writing' }
  ],

  // ---------- Vocabulary (54 items — uploaded chapter-24 list) ----------
  vocab: [
    { de: 'Kleiderklappe', art: 'die', gender: 'f', plural: 'Kleiderklappen', pos: 'noun', level: 'B2', en: 'clothing drop, hatch', hi: 'कपड़ा संग्रह पेटी', ex: 'Einerseits sammeln wir viele Kleidungsstücke für die Kleiderklappe.', exEn: 'On the one hand, we collect many items of clothing for the clothing drop.', exHi: 'Ek taraf, hum kapada sangrah peti ke liye kai kapdon ki vastuein ikattha karte hain.', ex2: 'Die Kleiderklappe wird regelmäßig geleert.', ex2En: 'The clothing drop is emptied regularly.', ex2Hi: 'Kapada sangrah peti niyamit roop se khaali ki jaati hai.' },
    { de: 'Kleiderladen', art: 'der', gender: 'm', plural: 'Kleiderläden', pos: 'noun', level: 'B2', en: 'clothing shop', hi: 'कपड़ा दुकान', ex: 'Andererseits bleibt der Kleiderladen oft leer.', exEn: 'On the other hand, the clothing shop often remains empty.', exHi: 'Doosri taraf, kapada dukaan aksar khaali reh jaati hai.', ex2: 'Der Kleiderladen verkauft gebrauchte Kleidung.', ex2En: 'The clothing shop sells used clothing.', ex2Hi: 'Kapada dukaan istemaal kiye hue kapde bechti hai.' },
    { de: 'Kleidungsstück', art: 'das', gender: 'n', plural: 'Kleidungsstücke', pos: 'noun', level: 'B2', en: 'item of clothing', hi: 'कपड़े की वस्तु', ex: 'Einerseits sammeln wir viele Kleidungsstücke für die Kleiderklappe.', exEn: 'On the one hand, we collect many items of clothing for the clothing drop.', exHi: 'Ek taraf, hum kapada sangrah peti ke liye kai kapdon ki vastuein ikattha karte hain.', ex2: 'Jedes Kleidungsstück wird sorgfältig geprüft.', ex2En: 'Every item of clothing is carefully checked.', ex2Hi: 'Har kapde ki vastu ki savdhaani se jaanch ki jaati hai.' },
    { de: 'Klischee', art: 'das', gender: 'n', plural: 'Klischees', pos: 'noun', level: 'B2', en: 'cliché', hi: 'रूढ़िवाद', ex: 'Das ist nur ein Klischee.', exEn: 'That is just a cliché.', exHi: 'Yeh sirf ek roodhivaad hai.', ex2: 'Man sollte Klischees vermeiden.', ex2En: 'One should avoid clichés.', ex2Hi: 'Roodhivaadon se bachna chaahiye.' },
    { de: 'Know-how', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'know-how', hi: 'जानकारी', ex: 'Sie hat viel Know-how in diesem Bereich.', exEn: 'She has a lot of know-how in this area.', exHi: 'Is kshetra mein uske paas bahut jaankaari hai.', ex2: 'Das Know-how wurde weitergegeben.', ex2En: 'The know-how was passed on.', ex2Hi: 'Jaankaari aage badhaayi gayi.' },
    { de: 'Kongress', art: 'der', gender: 'm', plural: 'Kongresse', pos: 'noun', level: 'B2', en: 'congress, conference', hi: 'सम्मेलन', ex: 'Der Kongress findet nächste Woche statt.', exEn: 'The congress takes place next week.', exHi: 'Sammelan agle hafte hoga.', ex2: 'Viele Experten besuchten den Kongress.', ex2En: 'Many experts attended the congress.', ex2Hi: 'Kai visheshagyon ne sammelan mein bhaag liya.' },
    { de: 'Kongresskarte', art: 'die', gender: 'f', plural: 'Kongresskarten', pos: 'noun', level: 'B2', en: 'congress ticket', hi: 'सम्मेलन टिकट', ex: 'Sie kaufte eine Kongresskarte.', exEn: 'She bought a congress ticket.', exHi: 'Usne ek sammelan ticket khareeda.', ex2: 'Die Kongresskarte war teuer.', ex2En: 'The congress ticket was expensive.', ex2Hi: 'Sammelan ticket mehnga tha.' },
    { de: 'Kraftstoff', art: 'der', gender: 'm', plural: 'Kraftstoffe', pos: 'noun', level: 'B2', en: 'fuel', hi: 'ईंधन', ex: 'Der Kraftstoff wird immer teurer.', exEn: 'Fuel is becoming ever more expensive.', exHi: 'Eendhan mehnga hota ja raha hai.', ex2: 'Autos brauchen viel Kraftstoff.', ex2En: 'Cars need a lot of fuel.', ex2Hi: 'Gaadiyon ko bahut eendhan chaahiye.' },
    { de: 'kriminell', pos: 'adjective', level: 'B2', en: 'criminal', hi: 'आपराधिक', ex: 'Einerseits ist diese Straftat kriminell.', exEn: 'On the one hand, this criminal offence is criminal.', exHi: 'Ek taraf, yeh aparaadhik kritya aparaadhik hai.', ex2: 'Kriminelle Handlungen werden bestraft.', ex2En: 'Criminal acts are punished.', ex2Hi: 'Aparaadhik kaarya dandit kiye jaate hain.' },
    { de: 'Kriterium', art: 'das', gender: 'n', plural: 'Kriterien', pos: 'noun', level: 'B2', en: 'criterion', hi: 'मापदंड', ex: 'Das wichtigste Kriterium ist die Qualität.', exEn: 'The most important criterion is quality.', exHi: 'Sabse mahatvapurn mapdand gunavatta hai.', ex2: 'Sie erfüllten alle Kriterien.', ex2En: 'They fulfilled all criteria.', ex2Hi: 'Unhone saare mapdand poore kiye.' },
    { de: 'Kühlfahrzeug', art: 'das', gender: 'n', plural: 'Kühlfahrzeuge', pos: 'noun', level: 'B2', en: 'refrigerated vehicle', hi: 'रेफ्रिजरेटेड वाहन', ex: 'Das Kühlfahrzeug transportiert frische Lebensmittel.', exEn: 'The refrigerated vehicle transports fresh food.', exHi: 'Refrigerated vaahan taaza khaana le jaata hai.', ex2: 'Kühlfahrzeuge sind teuer im Unterhalt.', ex2En: 'Refrigerated vehicles are expensive to maintain.', ex2Hi: 'Refrigerated vaahan bharan-poshan mein mehnge hote hain.' },
    { de: 'Kühlraum', art: 'der', gender: 'm', plural: 'Kühlräume', pos: 'noun', level: 'B2', en: 'cold store', hi: 'शीत भंडार', ex: 'Die Lebensmittel liegen im Kühlraum.', exEn: 'The food is in the cold store.', exHi: 'Khaana sheet bhandaar mein rakha hai.', ex2: 'Der Kühlraum hält konstante Temperaturen.', ex2En: 'The cold store maintains constant temperatures.', ex2Hi: 'Sheet bhandaar sthir taapmaan banaaye rakhta hai.' },
    { de: 'Langeweile', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'boredom', hi: 'ऊब', ex: 'Andererseits sind viele Jugendliche nur gelangweilt, wenn sie randalieren.', exEn: 'On the other hand, many youths are just bored when they riot.', exHi: 'Doosri taraf, kai yuva sirf oobe hue hote hain jab woh danga karte hain.', ex2: 'Langeweile führt manchmal zu schlechten Entscheidungen.', ex2En: 'Boredom sometimes leads to bad decisions.', ex2Hi: 'Oob kabhi-kabhi buri faislon ki taraf le jaati hai.' },
    { de: 'langfristig', pos: 'adjective', level: 'B2', en: 'long-term', hi: 'दीर्घकालिक', ex: 'Langfristig lohnt sich die Investition.', exEn: 'Long-term, the investment is worth it.', exHi: 'Deerghkaal mein nivesh laabhdaayak hai.', ex2: 'Wir planen langfristig.', ex2En: 'We plan long-term.', ex2Hi: 'Hum deerghkaalik yojana banaate hain.' },
    { de: 'Lauf', art: 'der', gender: 'm', plural: 'Läufe', pos: 'noun', level: 'B2', en: 'course, run', hi: 'दौड़', ex: 'Im Lauf der Zeit änderte sich vieles.', exEn: 'In the course of time, much changed.', exHi: 'Samay ke saath bahut kuch badla.', ex2: 'Der Lauf war anstrengend.', ex2En: 'The run was exhausting.', ex2Hi: 'Daud thakaane waali thi.' },
    { de: 'Lebensentwurf', art: 'der', gender: 'm', plural: 'Lebensentwürfe', pos: 'noun', level: 'B2', en: 'life plan', hi: 'जीवन योजना', ex: 'Einerseits ist der Lebensentwurf orientiert an Erfolg.', exEn: 'On the one hand, the life plan is oriented towards success.', exHi: 'Ek taraf, jeevan yojana safalta ki or kendrit hai.', ex2: 'Ihr Lebensentwurf hat sich verändert.', ex2En: 'Her life plan has changed.', ex2Hi: 'Uski jeevan yojana badal gayi hai.' },
    { de: 'Lebensverlauf', art: 'der', gender: 'm', plural: 'Lebensverläufe', pos: 'noun', level: 'B2', en: 'course of life', hi: 'जीवन क्रम', ex: 'Andererseits fühlt sich der Lebensverlauf oft unvorhersehbar an.', exEn: 'On the other hand, the course of life often feels unpredictable.', exHi: 'Doosri taraf, jeevan kram aksar apratyaashit mehsoos hota hai.', ex2: 'Ihr Lebensverlauf war ungewöhnlich.', ex2En: 'Her course of life was unusual.', ex2Hi: 'Uska jeevan kram asaadhaaran tha.' },
    { de: 'Lernerfolg', art: 'der', gender: 'm', plural: 'Lernerfolge', pos: 'noun', level: 'B2', en: 'learning success', hi: 'सीखने की सफलता', ex: 'Der Lernerfolg hängt von der Motivation ab.', exEn: 'Learning success depends on motivation.', exHi: 'Seekhne ki safalta prerna par nirbhar karti hai.', ex2: 'Sie freute sich über ihren Lernerfolg.', ex2En: 'She was happy about her learning success.', ex2Hi: 'Woh apni seekhne ki safalta se khush thi.' },
    { de: 'Lernmaterial', art: 'das', gender: 'n', plural: 'Lernmaterialien', pos: 'noun', level: 'B2', en: 'learning material', hi: 'शिक्षण सामग्री', ex: 'Das Lernmaterial ist online verfügbar.', exEn: 'The learning material is available online.', exHi: 'Shikshan saamagri online uplabdh hai.', ex2: 'Sie erstellte neues Lernmaterial.', ex2En: 'She created new learning material.', ex2Hi: 'Usne nayi shikshan saamagri banaayi.' },
    { de: 'Liegestütz', art: 'der', gender: 'm', plural: 'Liegestütze', pos: 'noun', level: 'B2', en: 'push-up', hi: 'पुश-अप', ex: 'Er macht jeden Tag zwanzig Liegestütze.', exEn: 'He does twenty push-ups every day.', exHi: 'Woh har din bees push-ups karta hai.', ex2: 'Liegestütze stärken die Arme.', ex2En: 'Push-ups strengthen the arms.', ex2Hi: 'Push-ups baazuon ko majboot karte hain.' },
    { de: 'machtlos', pos: 'adjective', level: 'B2', en: 'powerless', hi: 'शक्तिहीन', ex: 'Andererseits ist die Organisation oft machtlos gegen die Onlinesucht der Jugendlichen.', exEn: 'On the other hand, the organization is often powerless against the online addiction of youths.', exHi: 'Doosri taraf, sangathan aksar yuvaon ki online lat ke khilaaf shaktiheen hota hai.', ex2: 'Er fühlte sich völlig machtlos.', ex2En: 'He felt completely powerless.', ex2Hi: 'Use bilkul shaktiheen mehsoos hua.' },
    { de: 'Macke', art: 'die', gender: 'f', plural: 'Macken', pos: 'noun', level: 'B2', en: 'quirk, flaw', hi: 'खामी', ex: 'Jeder hat seine kleinen Macken.', exEn: 'Everyone has their little quirks.', exHi: 'Har kisi ki apni chhoti khaamiyaan hoti hain.', ex2: 'Das Gerät hat eine Macke.', ex2En: 'The device has a flaw.', ex2Hi: 'Device mein ek khaami hai.' },
    { de: 'mehrheitlich', pos: 'adjective', level: 'B2', en: 'by a majority', hi: 'बहुमत से', ex: 'Die Entscheidung wurde mehrheitlich getroffen.', exEn: 'The decision was made by a majority.', exHi: 'Faisla bahumat se liya gaya.', ex2: 'Mehrheitlich stimmten alle zu.', ex2En: 'By a majority, everyone agreed.', ex2Hi: 'Bahumat se sabne sehmati di.' },
    { de: 'Merkmal', art: 'das', gender: 'n', plural: 'Merkmale', pos: 'noun', level: 'B2', en: 'feature, characteristic', hi: 'विशेषता', ex: 'Das wichtigste Merkmal ist die Zuverlässigkeit.', exEn: 'The most important feature is reliability.', exHi: 'Sabse mahatvapurn visheshta bharosemandi hai.', ex2: 'Diese Merkmale sind einzigartig.', ex2En: 'These characteristics are unique.', ex2Hi: 'Yeh visheshtaayein anokhi hain.' },
    { de: 'Milchprodukt', art: 'das', gender: 'n', plural: 'Milchprodukte', pos: 'noun', level: 'B2', en: 'dairy product', hi: 'डेयरी उत्पाद', ex: 'Sie kauft viele Milchprodukte.', exEn: 'She buys many dairy products.', exHi: 'Woh kai dairy products khareedti hai.', ex2: 'Milchprodukte sind reich an Kalzium.', ex2En: 'Dairy products are rich in calcium.', ex2Hi: 'Dairy products calcium se bharpoor hote hain.' },
    { de: 'Mist', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'rubbish, nonsense (slang)', hi: 'बकवास (बोलचाल)', ex: 'Das ist alles Mist.', exEn: 'That is all rubbish.', exHi: 'Yeh sab bakwaas hai.', ex2: 'Er redet nur Mist.', ex2En: 'He only talks nonsense.', ex2Hi: 'Woh sirf bakwaas karta hai.' },
    { de: 'motiviert', pos: 'adjective', level: 'B2', en: 'motivated', hi: 'प्रेरित', ex: 'Sie ist sehr motiviert.', exEn: 'She is very motivated.', exHi: 'Woh bahut prerit hai.', ex2: 'Motivierte Mitarbeiter arbeiten besser.', ex2En: 'Motivated employees work better.', ex2Hi: 'Prerit karmachaari behtar kaam karte hain.' },
    { de: 'Motto', art: 'das', gender: 'n', plural: 'Mottos', pos: 'noun', level: 'B2', en: 'motto', hi: 'आदर्श वाक्य', ex: 'Ihr Motto lautet "Nie aufgeben".', exEn: 'Her motto is "Never give up".', exHi: 'Uska aadarsh vaakya hai "kabhi haar mat maano".', ex2: 'Das Motto der Firma ist bekannt.', ex2En: 'The company\'s motto is well-known.', ex2Hi: 'Company ka aadarsh vaakya prasiddh hai.' },
    { de: 'Nachwuchs', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'offspring, new talent', hi: 'नई प्रतिभा', ex: 'Das Unternehmen fördert den Nachwuchs.', exEn: 'The company promotes new talent.', exHi: 'Company nayi pratibha ko protsaahit karti hai.', ex2: 'Der Nachwuchs braucht Unterstützung.', ex2En: 'The new talent needs support.', ex2Hi: 'Nayi pratibha ko sahaayata chaahiye.' },
    { de: 'Onlinesucht', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'online addiction', hi: 'ऑनलाइन लत', ex: 'Andererseits ist die Organisation oft machtlos gegen die Onlinesucht der Jugendlichen.', exEn: 'On the other hand, the organization is often powerless against the online addiction of youths.', exHi: 'Doosri taraf, sangathan aksar yuvaon ki online lat ke khilaaf shaktiheen hota hai.', ex2: 'Onlinesucht betrifft immer mehr Jugendliche.', ex2En: 'Online addiction affects more and more youths.', ex2Hi: 'Online lat zyada se zyada yuvaon ko prabhaavit karti hai.' },
    { de: 'orientiert', pos: 'adjective', level: 'B2', en: 'oriented, geared towards', hi: 'केंद्रित', ex: 'Einerseits ist der Lebensentwurf orientiert an Erfolg.', exEn: 'On the one hand, the life plan is oriented towards success.', exHi: 'Ek taraf, jeevan yojana safalta ki or kendrit hai.', ex2: 'Das Programm ist praxisorientiert.', ex2En: 'The programme is practice-oriented.', ex2Hi: 'Kaaryakram vyavahaar-kendrit hai.' },
    { de: 'Parallelwelt', art: 'die', gender: 'f', plural: 'Parallelwelten', pos: 'noun', level: 'B2', en: 'parallel world', hi: 'समानांतर दुनिया', ex: 'Das Internet fühlt sich manchmal wie eine Parallelwelt an.', exEn: 'The internet sometimes feels like a parallel world.', exHi: 'Internet kabhi-kabhi ek samaanaantar duniya jaisa lagta hai.', ex2: 'Sie lebt in ihrer eigenen Parallelwelt.', ex2En: 'She lives in her own parallel world.', ex2Hi: 'Woh apni khud ki samaanaantar duniya mein jeeti hai.' },
    { de: 'pauschalisieren', pos: 'verb', level: 'B2', en: 'to generalise, lump together', hi: 'सामान्यीकरण करना', ex: 'Wir sollten nicht pauschalisieren.', exEn: 'We shouldn\'t generalise.', exHi: 'Humein saamaanyikaran nahi karna chaahiye.', ex2: 'Man kann diese Fälle nicht pauschalisieren.', ex2En: 'One cannot lump these cases together.', ex2Hi: 'In maamlon ko ek saath nahi rakha ja sakta.', conj: { praesens: 'pauschalisiert', praeteritum: 'pauschalisierte', perfekt: 'hat pauschalisiert' } },
    { de: 'Pflege', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'care, nursing', hi: 'देखभाल', ex: 'Einerseits ist die Pflege wichtig.', exEn: 'On the one hand, care is important.', exHi: 'Ek taraf, dekhbhaal mahatvapurn hai.', ex2: 'Die Pflege alter Menschen erfordert Geduld.', ex2En: 'Caring for elderly people requires patience.', ex2Hi: 'Budhe logon ki dekhbhaal mein sahansheelta chaahiye.' },
    { de: 'Portemonnaie', art: 'das', gender: 'n', plural: 'Portemonnaies', pos: 'noun', level: 'B2', en: 'wallet, purse', hi: 'बटुआ', ex: 'Sie verlor ihr Portemonnaie.', exEn: 'She lost her wallet.', exHi: 'Usne apna batua kho diya.', ex2: 'Das Portemonnaie war voller Geld.', ex2En: 'The wallet was full of money.', ex2Hi: 'Batua paise se bhara tha.' },
    { de: 'prinzipiell', pos: 'adjective', level: 'B2', en: 'in principle', hi: 'सिद्धांततः', ex: 'Prinzipiell stimme ich zu.', exEn: 'In principle, I agree.', exHi: 'Sidhaantatah, main sehmat hoon.', ex2: 'Das ist prinzipiell möglich.', ex2En: 'That is possible in principle.', ex2Hi: 'Yeh sidhaantatah sambhav hai.' },
    { de: 'problemlos', pos: 'adjective', level: 'B2', en: 'problem-free, smooth', hi: 'समस्या रहित', ex: 'Der Prozess verlief problemlos.', exEn: 'The process went smoothly.', exHi: 'Prakriya samasya rahit rahi.', ex2: 'Die Installation war problemlos.', ex2En: 'The installation was problem-free.', ex2Hi: 'Installation samasya rahit thi.' },
    { de: 'qualitativ', pos: 'adjective', level: 'B2', en: 'qualitative', hi: 'गुणात्मक', ex: 'Die qualitative Analyse zeigte interessante Ergebnisse.', exEn: 'The qualitative analysis showed interesting results.', exHi: 'Gunaatmak vishleshan ne dilchasp parinaam dikhaaye.', ex2: 'Qualitative Forschung braucht Zeit.', ex2En: 'Qualitative research takes time.', ex2Hi: 'Gunaatmak shodh mein samay lagta hai.' },
    { de: 'randalieren', pos: 'verb', level: 'B2', en: 'to riot, rampage', hi: 'दंगा करना', ex: 'Andererseits sind viele Jugendliche nur gelangweilt, wenn sie randalieren.', exEn: 'On the other hand, many youths are just bored when they riot.', exHi: 'Doosri taraf, kai yuva sirf oobe hue hote hain jab woh danga karte hain.', ex2: 'Die Fans randalierten nach dem Spiel.', ex2En: 'The fans rioted after the game.', ex2Hi: 'Match ke baad fans ne danga kiya.', conj: { praesens: 'randaliert', praeteritum: 'randalierte', perfekt: 'hat randaliert' } },
    { de: 'Rat', art: 'der', gender: 'm', plural: 'Ratschläge', pos: 'noun', level: 'B2', en: 'advice, council', hi: 'सलाह', ex: 'Regelmäßig sollte man den Rat der Experten respektieren.', exEn: 'One should regularly respect the advice of the experts.', exHi: 'Niyamit roop se visheshagyon ki salaah ka samman karna chaahiye.', ex2: 'Sie gab mir einen guten Rat.', ex2En: 'She gave me good advice.', ex2Hi: 'Usne mujhe achhi salaah di.' },
    { de: 'Rätsel', art: 'das', gender: 'n', plural: 'Rätsel', pos: 'noun', level: 'B2', en: 'riddle, puzzle', hi: 'पहेली', ex: 'Das bleibt ein Rätsel.', exEn: 'That remains a riddle.', exHi: 'Yeh ek paheli bani rehti hai.', ex2: 'Sie löste das Rätsel schnell.', ex2En: 'She solved the puzzle quickly.', ex2Hi: 'Usne paheli jaldi hal ki.' },
    { de: 'regelmäßig', pos: 'adjective', level: 'B2', en: 'regular, regularly', hi: 'नियमित रूप से', ex: 'Regelmäßig sollte man den Rat der Experten respektieren.', exEn: 'One should regularly respect the advice of the experts.', exHi: 'Niyamit roop se visheshagyon ki salaah ka samman karna chaahiye.', ex2: 'Sie trainiert regelmäßig.', ex2En: 'She trains regularly.', ex2Hi: 'Woh niyamit roop se practice karti hai.' },
    { de: 'respektieren', pos: 'verb', level: 'B2', en: 'to respect', hi: 'सम्मान देना', ex: 'Regelmäßig sollte man den Rat der Experten respektieren.', exEn: 'One should regularly respect the advice of the experts.', exHi: 'Niyamit roop se visheshagyon ki salaah ka samman karna chaahiye.', ex2: 'Man muss die Meinung anderer respektieren.', ex2En: 'One must respect the opinion of others.', ex2Hi: 'Doosron ki raay ka samman karna chaahiye.', conj: { praesens: 'respektiert', praeteritum: 'respektierte', perfekt: 'hat respektiert' } },
    { de: 'Rückzug', art: 'der', gender: 'm', plural: 'Rückzüge', pos: 'noun', level: 'B2', en: 'retreat, withdrawal', hi: 'वापसी', ex: 'Der Rückzug der Truppen begann.', exEn: 'The retreat of the troops began.', exHi: 'Faujon ki vaapasi shuru hui.', ex2: 'Sie zog sich in den Rückzug zurück.', ex2En: 'She withdrew into retreat.', ex2Hi: 'Woh vaapasi mein chali gayi.' },
    { de: 'samt', pos: 'adjective', level: 'B2', en: 'including, together with', hi: 'सहित', ex: 'Sie kam samt Familie.', exEn: 'She came together with her family.', exHi: 'Woh parivaar sahit aayi.', ex2: 'Das Haus wurde samt Möbeln verkauft.', ex2En: 'The house was sold including furniture.', ex2Hi: 'Ghar furniture sahit becha gaya.' },
    { de: 'Schulzeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'school years', hi: 'स्कूल के दिन', ex: 'Ihre Schulzeit war unbeschwert.', exEn: 'Her school years were carefree.', exHi: 'Uske school ke din nishchint the.', ex2: 'Er vermisst seine Schulzeit.', ex2En: 'He misses his school years.', ex2Hi: 'Use apne school ke din yaad aate hain.' },
    { de: 'schutzlos', pos: 'adjective', level: 'B2', en: 'defenceless, unprotected', hi: 'निराश्रित', ex: 'Andererseits bleiben viele gefährdete Kids schutzlos.', exEn: 'On the other hand, many endangered kids remain defenceless.', exHi: 'Doosri taraf, kai jokhim mein bacche niraashrit reh jaate hain.', ex2: 'Sie fühlte sich völlig schutzlos.', ex2En: 'She felt completely defenceless.', ex2Hi: 'Use bilkul niraashrit mehsoos hua.' },
    { de: 'schwach', pos: 'adjective', level: 'B2', en: 'weak', hi: 'कमज़ोर', ex: 'Er fühlte sich schwach.', exEn: 'He felt weak.', exHi: 'Usse kamzor mehsoos hua.', ex2: 'Das Argument war schwach.', ex2En: 'The argument was weak.', ex2Hi: 'Tark kamzor tha.' },
    { de: 'sicherstellen', pos: 'verb', level: 'B2', en: 'to ensure, guarantee', hi: 'सुनिश्चित करना', ex: 'Wir müssen sicherstellen, dass alles funktioniert.', exEn: 'We must ensure that everything works.', exHi: 'Humein sunishchit karna hoga ki sab kuch theek se chale.', ex2: 'Die Qualität wird sichergestellt.', ex2En: 'The quality is being ensured.', ex2Hi: 'Gunavatta sunishchit ki jaati hai.', conj: { praesens: 'stellt sicher', praeteritum: 'stellte sicher', perfekt: 'hat sichergestellt' } },
    { de: 'Spende', art: 'die', gender: 'f', plural: 'Spenden', pos: 'noun', level: 'B2', en: 'donation', hi: 'दान', ex: 'Einerseits motiviert jede Spende weitere Sponsoren.', exEn: 'On the one hand, every donation motivates more sponsors.', exHi: 'Ek taraf, har daan aur zyada sponsors ko protsaahit karta hai.', ex2: 'Die Spende half vielen Familien.', ex2En: 'The donation helped many families.', ex2Hi: 'Daan ne kai parivaaron ki madad ki.' },
    { de: 'Sponsor/in', art: 'der/die', gender: 'm/f', plural: 'Sponsoren/Sponsorinnen', pos: 'noun', level: 'B2', en: 'sponsor', hi: 'प्रायोजक', ex: 'Einerseits motiviert jede Spende weitere Sponsoren.', exEn: 'On the one hand, every donation motivates more sponsors.', exHi: 'Ek taraf, har daan aur zyada sponsors ko protsaahit karta hai.', ex2: 'Der Sponsor unterstützt das Projekt finanziell.', ex2En: 'The sponsor supports the project financially.', ex2Hi: 'Sponsor project ko aarthik roop se sahaayata deta hai.' },
    { de: 'Stand', art: 'der', gender: 'm', plural: 'Stände', pos: 'noun', level: 'B2', en: 'stand, status', hi: 'स्थिति', ex: 'Der aktuelle Stand ist zufriedenstellend.', exEn: 'The current status is satisfactory.', exHi: 'Vartamaan sthiti santoshjanak hai.', ex2: 'Sie besuchten den Stand auf der Messe.', ex2En: 'They visited the stand at the trade fair.', ex2Hi: 'Unhone mele mein stall par visit kiya.' },
    { de: 'Straftat', art: 'die', gender: 'f', plural: 'Straftaten', pos: 'noun', level: 'B2', en: 'criminal offence', hi: 'आपराधिक कृत्य', ex: 'Einerseits ist diese Straftat kriminell.', exEn: 'On the one hand, this criminal offence is criminal.', exHi: 'Ek taraf, yeh aparaadhik kritya aparaadhik hai.', ex2: 'Die Straftat wurde angezeigt.', ex2En: 'The criminal offence was reported.', ex2Hi: 'Aparaadhik kritya ki soochna di gayi.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was bedeutet "einerseits ... andererseits"?',
      body: [ '"einerseits ... andererseits" means "on the one hand ... on the other hand ...". It introduces two different viewpoints, arguments, or aspects.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Einerseits ist das Studium interessant, andererseits kostet es viel Zeit.</span>'],
          ['<span class="de">Einerseits möchte Anna in Deutschland arbeiten, andererseits vermisst sie ihre Familie.</span>']
        ]
      },
      hinglish: '"einerseits ... andererseits" ka matlab hai "ek taraf yeh, doosri taraf woh". Isse tum kisi baat ke do pehlu ya do alag views saath mein rakh sakte ho.'
    },
    {
      title: 'Satzstruktur',
      body: [ '"Einerseits" + full main clause. "Andererseits" + full main clause. Both parts are INDEPENDENT main clauses, so the finite verb stays in Position 2.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Einerseits spart Homeoffice Zeit, andererseits fehlt der persönliche Kontakt.</span>'],
          ['<span class="de">Einerseits ist das Auto bequem, andererseits ist der Zug umweltfreundlicher.</span>']
        ]
      },
      hinglish: 'Dono taraf poora main clause aata hai. Yeh koi subordinate clause nahi banate, isliye verb dono hisson mein apni normal doosri position par hi rehta hai \u2014 matlab connector ke turant baad verb, phir subject.'
    },
    {
      title: 'Typische Bedeutungen',
      body: [ 'Use this connector for advantages vs disadvantages, pros vs cons, wishes vs concerns, different opinions, objective discussion, and balanced argumentation.' ]
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These realistic examples show einerseits...andererseits in discussion-essay contexts.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Einerseits verbessert künstliche Intelligenz viele Arbeitsprozesse, andererseits entstehen neue Datenschutzprobleme.</span>'],
          ['<span class="de">Einerseits bietet Online-Unterricht Flexibilität, andererseits fehlt oft der direkte Kontakt.</span>']
        ]
      },
      hinglish: 'Yeh examples dikhate hain ki yeh structure asli mein kahan kaam aata hai \u2014 discussion wale essays mein, jahan dono taraf ki baat karni hoti hai.'
    },
    {
      title: 'Formelles Schreiben',
      body: [ '"einerseits ... andererseits" is extremely common in discussion essays, newspaper articles, presentations, academic writing, and reports. It structures arguments logically and objectively.' ]
    },
    {
      title: 'Vier-Konnektoren-Vergleich',
      body: [ 'Compare all four two-part connectors covered so far.' ],
      table: {
        head: ['Connector', 'Meaning'],
        rows: [
          ['sowohl ... als auch', 'Both are true (equal)'],
          ['weder ... noch', 'Neither is true'],
          ['nicht nur ... sondern auch', 'Second idea emphasized'],
          ['einerseits ... andererseits', 'Two different, often contrasting viewpoints']
        ]
      },
      hinglish: 'Ab tak jo chaar two-part connectors padhe hain, unhe ek saath dekh lo \u2014 isse yaad rakhna aasaan ho jaata hai ki kaunsa kab lagta hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from breaking the V2 word order inside one of the halves, merging the two halves, or leaving one of them incomplete. Note that <span class="de">aber andererseits</span> is NOT an error \u2014 it is a common and perfectly acceptable combination.' ],
      mistakes: [
        { wrong: 'Einerseits ist das Studium interessant, andererseits es kostet viel Zeit.', right: 'Einerseits ist das Studium interessant, andererseits kostet es viel Zeit.', why: 'The second half is a full main clause too, so its verb must sit in Position 2 \u2014 right after "andererseits", before the subject.' },
        { wrong: 'Einerseits ist das Auto schnell und andererseits billig.', right: 'Einerseits ist das Auto schnell, andererseits ist es billig.', why: 'Each side needs its OWN full main clause — do not merge them with "und".' },
        { wrong: 'Einerseits ich lerne Deutsch...', right: 'Einerseits lerne ich Deutsch...', why: 'The finite verb must be in Position 2, immediately after "einerseits" — "einerseits" itself occupies Position 1.' },
        { wrong: 'Einerseits mag ich die Stadt, andererseits.', right: 'Einerseits mag ich die Stadt, andererseits ist sie sehr teuer.', why: 'Both halves need real content \u2014 "andererseits" cannot stand alone; it must introduce a complete second clause.' },
        { wrong: 'Andererseits ist der Zug umweltfreundlicher, einerseits ist das Auto bequem.', right: 'Einerseits ist das Auto bequem, andererseits ist der Zug umweltfreundlicher.', why: 'The order is fixed: "einerseits" introduces the first side and "andererseits" the second \u2014 they cannot be swapped.' }
      ],
      hinglish: 'Yeh galtiyan aksar isliye hoti hain ki dono hisson mein se kisi ek ka word order galat ho jaata hai, ya dono ko <b>und</b> se jod diya jaata hai. Ek baat clear rakho \u2014 <span class="de">aber andererseits</span> galat nahi hai, woh German mein bahut common hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ '"einerseits ... andererseits" is essential for Goethe B2 discussion essays and balanced-opinion speaking tasks.' ],
      note: 'Memory trick: einerseits = first side, andererseits = second side — think of a balanced discussion with two perspectives. Need to present TWO equally valid viewpoints? Use einerseits...andererseits.',
      hinglish: 'Goethe B2 ke discussion essays aur opinion wale speaking tasks mein yeh structure bahut kaam aata hai, kyunki isse tum dono side ki baat saaf-saaf rakh sakte ho.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Meinungsartikel: Kinder, Bildschirme und Klischees',
    titleEn: 'Opinion piece: children, screens, and clichés',
    tokens: [
      { w: 'Über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'Onlinesucht', role: 'plain', en: 'online addiction', hi: 'ऑनलाइन लत', type: 'Noun · fem.', why: 'die Onlinesucht (this chapter).' },
      { w: 'bei', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'Kindern', role: 'plain', en: 'children', hi: 'बच्चों', type: 'Noun · plural' },
      { w: 'wird', role: 'plain', en: 'is (Passiv)', hi: 'की जाती है', type: 'Verb · werden (Passiv)' },
      { w: 'viel', role: 'plain', en: 'much', hi: 'बहुत', type: 'Adjective' },
      { w: 'diskutiert', role: 'plain', en: 'discussed (Satzende)', hi: 'चर्चा (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Einerseits', role: 'r-connector', en: 'on the one hand', hi: 'एक ओर', type: 'Konjunktionaladverb · einerseits … andererseits', why: 'einerseits … andererseits = on the one hand … on the other hand: presents two sides of an argument (this chapter).' },
      { w: 'verbringen', role: 'plain', en: 'spend (Position 2)', hi: 'बिताते हैं (Position 2)', type: 'Verb · verbringen (Position 2, invertiert)' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective' },
      { w: 'Jugendliche', role: 'plain', en: 'teenagers', hi: 'किशोर', type: 'Noun · plural' },
      { w: 'tatsächlich', role: 'plain', en: 'indeed', hi: 'वाक़ई', type: 'Adverb' },
      { w: 'zu', role: 'plain', en: 'too', hi: 'बहुत', type: 'Adverb' },
      { w: 'viel', role: 'plain', en: 'much', hi: 'ज़्यादा', type: 'Adjective' },
      { w: 'Zeit', role: 'plain', en: 'time', hi: 'समय' , type: 'Noun · fem.' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'plain', en: 'a (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'digitalen', role: 'plain', en: 'digital', hi: 'डिजिटल', type: 'Adjective' },
      { w: 'Parallelwelt', role: 'plain', en: 'parallel world (Satzende)', hi: 'समानांतर दुनिया (Satzende)', type: 'Noun · fem.', why: 'die Parallelwelt (this chapter).' },
      { w: '.', plain: true },
      { w: 'Andererseits', role: 'r-connector', en: 'on the other hand', hi: 'दूसरी ओर', type: 'Konjunktionaladverb · einerseits … andererseits' },
      { w: 'sollte', role: 'plain', en: 'should (Position 2)', hi: 'चाहिए (Position 2)', type: 'Verb · Modalverb (Position 2, invertiert)' },
      { w: 'man', role: 'plain', en: 'one', hi: 'कोई', type: 'Pronoun' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'pauschalisieren', role: 'plain', en: 'generalise (Satzende)', hi: 'सामान्यीकरण करना (Satzende)', type: 'Verb · Infinitiv (Satzende)', why: 'pauschalisieren (this chapter).' },
      { w: '.', plain: true },
      { w: 'Das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Klischee', role: 'plain', en: 'cliché', hi: 'रूढ़ि', type: 'Noun · neut.', why: 'das Klischee (this chapter).' },
      { w: 'vom', role: 'plain', en: 'of the', hi: 'का', type: 'Contraction · von dem' },
      { w: 'einsamen', role: 'plain', en: 'lonely', hi: 'अकेला', type: 'Adjective' },
      { w: 'Bildschirmkind', role: 'plain', en: 'screen-addicted child (Satzende)', hi: 'स्क्रीन-आदी बच्चा (Satzende)', type: 'Noun · neut.' },
      { w: 'trifft', role: 'plain', en: 'applies', hi: 'लागू होता है', type: 'Verb · zutreffen' },
      { w: 'mehrheitlich', role: 'plain', en: 'mostly', hi: 'ज़्यादातर', type: 'Adverb', why: 'mehrheitlich (this chapter).' },
      { w: 'nicht', role: 'plain', en: 'not (Satzende)', hi: 'नहीं (Satzende)', type: 'Negation' },
      { w: 'zu', role: 'plain', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix · zutreffen' },
      { w: '.', plain: true },
      { w: 'Viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective' },
      { w: 'nutzen', role: 'plain', en: 'use', hi: 'उपयोग करते हैं', type: 'Verb · nutzen' },
      { w: 'ihre', role: 'plain', en: 'their', hi: 'अपने', type: 'Possessivartikel' },
      { w: 'Zeit', role: 'plain', en: 'time (Satzende)', hi: 'समय (Satzende)', type: 'Noun · fem.' },
      { w: 'am', role: 'plain', en: 'on the', hi: 'पर', type: 'Contraction · an dem' },
      { w: 'Bildschirm', role: 'plain', en: 'screen', hi: 'स्क्रीन', type: 'Noun · masc.' },
      { w: 'nämlich', role: 'plain', en: 'namely', hi: 'यानी', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'um', role: 'plain', en: 'in order', hi: 'ताकि', type: 'Konjunktion · um … zu' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'Freunden', role: 'plain', en: 'friends', hi: 'दोस्तों', type: 'Noun · plural' },
      { w: 'auszutauschen', role: 'plain', en: 'to communicate (Satzende)', hi: 'बातचीत करना (Satzende)', type: 'Verb · sich austauschen (Infinitiv mit zu, Satzende)' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'weit', role: 'plain', en: 'far', hi: 'बहुत', type: 'Adverb' },
      { w: 'verbreitetes', role: 'plain', en: 'widespread', hi: 'व्यापक', type: 'Adjective' },
      { w: 'Vorurteil', role: 'plain', en: 'prejudice', hi: 'पूर्वाग्रह', type: 'Noun · neut.', why: 'das Vorurteil (this chapter).' },
      { w: 'trifft', role: 'plain', en: 'applies', hi: 'लागू होता है', type: 'Verb · zutreffen' },
      { w: 'daher', role: 'plain', en: 'therefore', hi: 'इसलिए', type: 'Adverb' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'केवल', type: 'Adverb' },
      { w: 'auf', role: 'plain', en: 'to', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'wenige', role: 'plain', en: 'few (Satzende)', hi: 'कुछ ही (Satzende)', type: 'Adjective' },
      { w: 'zu', role: 'plain', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix · zutreffen' },
      { w: '.', plain: true },
      { w: 'Einerseits', role: 'r-connector', en: 'on the one hand', hi: 'एक तरफ़', type: 'Adverb · einerseits', why: 'einerseits … andererseits: two sides of one issue (this chapter).' },
      { w: 'sollten', role: 'plain', en: 'should', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'Eltern', role: 'plain', en: 'parents', hi: 'माता-पिता', type: 'Noun · plural' },
      { w: 'also', role: 'plain', en: 'therefore', hi: 'इसलिए', type: 'Adverb' },
      { w: 'aufmerksam', role: 'plain', en: 'attentive (Satzende)', hi: 'सतर्क (Satzende)', type: 'Adjective' },
      { w: 'bleiben', role: 'plain', en: 'stay (Satzende)', hi: 'रहना (Satzende)', type: 'Verb · Infinitiv' },
      { w: ',', plain: true },
      { w: 'andererseits', role: 'r-connector', en: 'on the other hand', hi: 'दूसरी तरफ़', type: 'Adverb · andererseits' },
      { w: 'sollten', role: 'plain', en: 'should', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'sie', role: 'plain', en: 'they', hi: 'वे', type: 'Pronoun' },
      { w: 'ihren', role: 'plain', en: 'their', hi: 'अपने', type: 'Possessivartikel' },
      { w: 'Kindern', role: 'plain', en: 'children', hi: 'बच्चों', type: 'Noun · plural' },
      { w: 'auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'digitale', role: 'plain', en: 'digital', hi: 'डिजिटल', type: 'Adjective' },
      { w: 'Freiräume', role: 'plain', en: 'free space (Satzende)', hi: 'स्वतंत्रता (Satzende)', type: 'Noun · plural' },
      { w: 'zugestehen', role: 'plain', en: 'grant (Satzende)', hi: 'देनी चाहिए (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true }
    ],
    translation: 'Online addiction in children is much discussed. On the one hand, many teenagers indeed spend too much time in a digital parallel world. On the other hand, one should not generalise. The cliché of the lonely screen-addicted child mostly does not apply. Many use their screen time namely to communicate with friends. A widespread prejudice therefore only applies to a few. On the one hand, parents should therefore stay attentive; on the other hand, they should also grant their children digital free space.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_024_L001', speaker: 'Britta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, meine Tochter will ein eigenes Handy, aber ich bin hin und her.', en: 'Timo, my daughter wants her own phone, but I\'m torn.' },
      { id: 'B2_024_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Was genau macht dir Sorgen?', en: 'What exactly worries you?' },
      { id: 'B2_024_L003', speaker: 'Britta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Einerseits verstehe ich die Angst vor Online-Sucht, andererseits will ich ihre Meinung respektieren.', en: 'On one hand I understand the fear of online addiction, on the other hand I want to respect her opinion.' },
      { id: 'B2_024_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Vielleicht reicht ja erst mal ein einfaches Modell mit klaren Regeln.', en: 'Maybe a simple model with clear rules would be enough for now.' }
    ],
    transcript: 'Timo, meine Tochter will ein eigenes Handy, aber ich bin hin und her. Was genau macht dir Sorgen? Einerseits verstehe ich die Angst vor Online-Sucht, andererseits will ich ihre Meinung respektieren. Vielleicht reicht ja erst mal ein einfaches Modell mit klaren Regeln.',
    translation: 'Timo, my daughter wants her own phone, but I\'m torn. What exactly worries you? On one hand I understand the fear of online addiction, on the other hand I want to respect her opinion. Maybe a simple model with clear rules would be enough for now.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'meine' },
      { w: 'Tochter' },
      { w: 'will' },
      { w: 'ein' },
      { w: 'eigenes' },
      { w: 'Handy' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'bin' },
      { w: 'hin' },
      { w: 'und' },
      { w: 'her' },
      { w: '.', plain: true },
      { w: 'Was' },
      { w: 'genau' },
      { w: 'macht' },
      { w: 'dir' },
      { w: 'Sorgen' },
      { w: '?', plain: true },
      { w: 'Einerseits' },
      { w: 'verstehe' },
      { w: 'ich' },
      { w: 'die' },
      { w: 'Angst' },
      { w: 'vor' },
      { w: 'Online', noSpaceAfter: true },
      { w: '-', plain: true, noSpaceAfter: true },
      { w: 'Sucht' },
      { w: ',', plain: true },
      { w: 'andererseits' },
      { w: 'will' },
      { w: 'ich' },
      { w: 'ihre' },
      { w: 'Meinung' },
      { w: 'respektieren' },
      { w: '.', plain: true },
      { w: 'Vielleicht' },
      { w: 'reicht' },
      { w: 'ja' },
      { w: 'erst' },
      { w: 'mal' },
      { w: 'ein' },
      { w: 'einfaches' },
      { w: 'Modell' },
      { w: 'mit' },
      { w: 'klaren' },
      { w: 'Regeln' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was macht Britta einerseits Sorgen?', qEn: 'What worries Britta on one hand?', options: ['die Kosten', 'die Angst vor Online-Sucht', 'die Schule', 'die Zeit'], optionsEn: ['the costs', 'the fear of online addiction', 'the school', 'the time'], answer: 1,
        explain: '"Einerseits verstehe ich die Angst vor Online-Sucht."' },
      { q: 'Was schlägt Timo vor?', qEn: 'What does Timo suggest?', options: ['gar kein Handy', 'ein einfaches Modell mit Regeln', 'ein teures Handy', 'warten bis 18'], optionsEn: ['no phone at all', 'a simple model with rules', 'an expensive phone', 'wait until 18'], answer: 1,
        explain: '"Vielleicht reicht ja erst mal ein einfaches Modell mit klaren Regeln."' }
    ]
  },

  speaking: [
    { task: "Deine Tochter will ein Handy. Sag, warum du hin und her bist.", taskEn: "Your daughter wants a phone. Say why you're torn.", de: "Einerseits verstehe ich die Angst vor Sucht, andererseits will ich sie erreichen können.", en: "On the one hand I understand the fear of addiction, on the other I want to be able to reach her." },
    { task: "Ein Freund fragt, wie du den Kleiderladen findest.", taskEn: "A friend asks what you think of the clothing shop.", de: "Einerseits ist er günstig, andererseits ist die Auswahl klein.", en: "On the one hand it's cheap, on the other the range is small." },
    { task: "Deine Chefin fragt, was du vom Kongress hältst.", taskEn: "Your boss asks what you think of the conference.", de: "Einerseits lernt man viel, andererseits ist die Kongresskarte teuer.", en: "On the one hand you learn a lot, on the other the conference pass is expensive." },
    { task: "Eine Kollegin fragt nach dem langfristigen Plan.", taskEn: "A colleague asks about the long-term plan.", de: "Einerseits brauchen wir Know-how, andererseits fehlt uns die Zeit.", en: "On the one hand we need expertise, on the other we lack time." },
    { task: "Ein Bekannter fragt, wie du den Lebensentwurf deiner Tochter siehst.", taskEn: "An acquaintance asks how you see your daughter's life plan.", de: "Einerseits ist sie jung, andererseits weiß sie genau, was sie will.", en: "On the one hand she's young, on the other she knows exactly what she wants." },
    { task: "Rollenspiel: Ihr diskutiert Handys für Kinder.", taskEn: "Role-play: you discuss phones for children.", de: "Einerseits ist es praktisch, andererseits gibt es Klischees über Sucht. — Andererseits lernen sie den Umgang.", en: "On the one hand it's practical, on the other there are clichés about addiction. — Then again they learn how to handle it." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short discussion essay (six to eight sentences) about a topic of your choice (homeoffice, social media, AI, studying abroad, etc.) — using "einerseits ... andererseits" at least three times, presenting genuinely balanced viewpoints without adding extra connectors like "aber".',
    starters: ['Einerseits …, andererseits …', 'Einerseits ist …, andererseits ist …'],
    placeholder: 'Einerseits bietet Homeoffice viel Flexibilität, andererseits fehlt der persönliche Kontakt …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which sentence uses "einerseits ... andererseits" correctly?',
      options: ['Einerseits ist das Studium interessant, andererseits kostet es viel Zeit.', 'Einerseits ist das Studium interessant, aber andererseits kostet es viel Zeit.', 'Einerseits das Studium ist interessant, andererseits kostet es viel Zeit.'],
      answer: 0,
      explain: 'No extra "aber" is needed, and the finite verb must be in Position 2 in each clause.'
    },
    gap: {
      sentence: ['', ' spart Homeoffice Zeit, andererseits fehlt der persönliche Kontakt.'],
      gaps: [ { answer: 'Einerseits', accepts: ['Einerseits'] } ],
      explain: '"Einerseits" introduces the first independent main clause.'
    },
    match: {
      q: 'Match each connector to its meaning.',
      pairs: [
        { noun: 'sowohl ... als auch', art: 'both true, equal' },
        { noun: 'weder ... noch', art: 'neither true' },
        { noun: 'nicht nur ... sondern auch', art: 'second emphasized' },
        { noun: 'einerseits ... andererseits', art: 'two contrasting viewpoints' }
      ]
    },
    builder: {
      target: 'Build: "On the one hand the car is comfortable, on the other hand the train is more environmentally friendly."',
      bank: ['Einerseits', 'ist', 'das', 'Auto', 'bequem', ',', 'andererseits', 'ist', 'der', 'Zug', 'umweltfreundlicher', '.'],
      answer: ['Einerseits', 'ist', 'das', 'Auto', 'bequem', ',', 'andererseits', 'ist', 'der', 'Zug', 'umweltfreundlicher', '.'],
      roles: { 'Einerseits': 'r-einerseits', 'andererseits': 'r-einerseits' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Einerseits ist das Auto schnell und andererseits billig.',
      right: 'Einerseits ist das Auto schnell, andererseits ist es billig.',
      explain: 'Each side needs its own full, independent main clause — do not merge them with "und".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does "einerseits ... andererseits" mean?', options: ['on the one hand ... on the other hand ...', 'not only ... but also ...', 'neither ... nor ...'], answer: 0,
      explain: '"einerseits ... andererseits" presents two contrasting viewpoints.' },
    { q: 'What word order does each clause use?', options: ['Normal V2 (independent main clause)', 'Verb-final (subordinate clause)', 'No verb at all'], answer: 0,
      explain: 'Both "einerseits" and "andererseits" introduce full, independent main clauses with V2 word order.' },
    { q: 'Which sentence is correct?', options: ['Einerseits ist das Auto schnell, andererseits ist es billig.', 'Einerseits ist das Auto schnell und andererseits billig.', 'Einerseits das Auto ist schnell, andererseits ist es billig.'], answer: 0,
      explain: 'Each side needs its own complete main clause with correct V2 word order.' },
    { q: 'Which connector presents both sides equally, without favouring either?', options: ['einerseits ... andererseits', 'nicht nur ... sondern auch', 'weder ... noch'], answer: 0,
      explain: '"einerseits ... andererseits" presents two different viewpoints without necessarily choosing one.' },
    { q: 'Which sentence contains an error?', options: ['Einerseits ist das Studium interessant, andererseits kostet es viel Zeit.', 'Einerseits ist das Studium interessant, aber andererseits kostet es viel Zeit.', 'Einerseits spart Homeoffice Zeit, andererseits fehlt der Kontakt.'], answer: 1,
      explain: 'Adding "aber" is redundant — "einerseits ... andererseits" already creates the contrast.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-einerseits', html: '"einerseits ... andererseits" presents two independent, often contrasting viewpoints — each as its own full main clause with normal V2 word order.' },
    { c: 'r-einerseits', html: 'Never add an extra connector like "aber" — the contrast is already fully expressed by "einerseits ... andererseits" alone.' },
    { c: 'r-einerseits', html: 'This is the connector of balanced, objective discussion — essential for Goethe B2 discussion essays and speaking tasks.' }
  ],
  revisionTips: [
    'Practise building balanced arguments on common B2 topics: homeoffice, AI, social media, studying abroad.',
    'Always check that each clause after "einerseits"/"andererseits" has the finite verb in Position 2.',
    'Compare all four two-part connectors (sowohl...als auch, weder...noch, nicht nur...sondern auch, einerseits...andererseits) until choosing the right one feels automatic.'
  ]
};

window.CHAPTER = CHAPTER;
