/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 2
   "Mehrteilige Verben (Verbalkomplex)" — two/three/four-verb
   chains stacked at clause-end: Modalverb+Infinitiv,
   Perfekt+Modalverb (Ersatzinfinitiv), Passiv+werden, etc.
   Does NOT introduce Konjunktiv I, detailed Ersatzinfinitiv
   theory, Nominalisierung, or Passive Konjunktiv.
   IMPORTANT: dialogue uses ONLY Wibke and Timo.
   Vocabulary source: uploaded chapter-2 list (33 items) — a
   business-conference/international-workplace theme
   (Geschäftsverhandlung, Konferenz, Mehrsprachigkeit,
   Geschäftsbeziehung…) — a natural fit for long B2 sentences
   about work and negotiation.
============================================================ */
const CHAPTER = {
  id: 'b2-02-verbalkomplex',
  phase: 'B2 · Phase 1',
  number: 2,
  title: 'Mehrteilige Verben (Verbalkomplex)',
  titleEn: 'Multi-part verb clusters (Verbalkomplex)',
  description: 'Stack up to four verb forms at clause-end in the order German expects: muss arbeiten, hat lernen müssen, wird repariert werden, ist geschrieben worden.',
  xp: 330,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 3, title: 'Informationsstruktur: Thema → Rhema', titleEn: 'Information structure: theme → rheme' , href: 'chapter-b2-03-informationsstruktur-thema-rhema.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'When verbs <em>stack up</em> at the end.',
    intro: 'Wibke tells Timo about the connections she made and the café she managed to visit at a business conference — every sentence stacking two, three, even four verb forms together at the very end: hat besuchen wollen, wird geschätzt werden.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear two-, three-, and four-part verb complexes used naturally in one conversation'
    ],
    scene: 'Vorbereitung auf die Konferenz',
    femaleSpeakers: ['Wibke'],
    dialogue: [
      { speaker: 'Wibke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'auf', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Konferenz', role: 'r-dativ', en: 'conference (dat.)', hi: 'सम्मेलन में', pron: 'kon-fe-RENTS', type: 'Noun · fem. dat.', why: 'die Konferenz (this chapter).', ex: 'auf der Konferenz' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'neue', role: 'r-akkusativ', en: 'new', hi: 'नया', pron: 'NOY-uh', type: 'Adjective' },
        { w: 'Geschäftsbeziehung', role: 'r-akkusativ', en: 'business relationship', hi: 'व्यावसायिक संबंध', pron: 'ge-SHEFTS-be-tsee-hung', type: 'Noun · fem.', why: 'die Geschäftsbeziehung (this chapter).', ex: 'eine neue Geschäftsbeziehung' },
        { w: 'knüpfen', role: 'r-verb', en: 'forge', hi: 'जोड़ना', pron: 'KNÜP-fen', type: 'Verb · infinitive', why: 'Verbalkomplex: modal/helper verb clusters (haben + knüpfen können, this chapter).', ex: 'Ich habe knüpfen können.', exEn: 'I was able to forge.' },
        { w: 'können', role: 'r-modalverb', en: 'be able to', hi: 'सक्ष हूँ', pron: 'KÖ-nen', type: 'Modal · können (Satzende, Verbalkomplex)' },
        { w: '.', plain: true }
      ], en: 'I was able to forge a new business relationship at the conference.', hi: 'Main sammelan mein ek naya vyavsayik sambandh jod saka.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'großartig', role: 'r-akkusativ', en: 'great', hi: 'शानदार', pron: 'GROHS-ar-tikh', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Hast', role: 'r-verb', en: 'have', hi: 'किया', pron: 'hast', type: 'Verb · haben (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: 'gefunden', role: 'r-verb', en: 'found', hi: 'पाया', pron: 'ge-FUN-den', type: 'Partizip II' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Stadt', role: 'r-akkusativ', en: 'city', hi: 'शहर', pron: 'shtat', type: 'Noun · fem.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'erkunden', role: 'r-verb', en: 'explore', hi: 'घूमना', pron: 'er-KUN-den', type: 'Verb · infinitive (Satzende)', why: 'erkunden = to explore (this chapter).', ex: 'die Stadt erkunden' },
        { w: '?', plain: true }
      ], en: 'That is great! Did you also find time to explore the city?', hi: 'Yeh shaandaar hai! Kya tumne shahar ghoomne ka bhi samay nikaala?' },
      { speaker: 'Wibke', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Café', role: 'r-akkusativ', en: 'cafe', hi: 'कैफ़े', pron: 'ka-FAY', type: 'Noun · neut.' },
        { w: 'besuchen', role: 'r-verb', en: 'visit', hi: 'जाना', pron: 'be-ZOO-khen', type: 'Verb · infinitive' },
        { w: 'wollen', role: 'r-modalverb', en: 'wanted', hi: 'चाहती थी', pron: 'VO-len', type: 'Modal · wollen (Satzende, Verbalkomplex)', why: 'Verbalkomplex: haben + Infinitiv + Modal-Infinitiv (this chapter).', ex: 'Ich habe besuchen wollen.', exEn: 'I wanted to visit.' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'की', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'यह', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'geschafft', role: 'r-verb', en: 'managed', hi: 'सफल रही', pron: 'ge-SHAFT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Yes, I wanted to visit a cafe and I also managed it.', hi: 'Haan, main ek cafe jaana chahti thi aur main safal bhi rahi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारा', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Erfahrung', role: 'r-subject', en: 'experience', hi: 'अनुभव', pron: 'er-FAH-rung', type: 'Noun · fem.' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Mehrsprachigkeit', role: 'r-dativ', en: 'multilingualism (dat.)', hi: 'बहुभाषिकता के', pron: 'MAIR-shprah-khikh-kite', type: 'Noun · fem. dat.', why: 'die Mehrsprachigkeit (this chapter).', ex: 'mit der Mehrsprachigkeit' },
        { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
        { w: '?', plain: true }
      ], en: 'How was your experience with multilingualism there?', hi: 'Wahaan bahubhashikta ke saath tumhaara anubhav kaisa tha?' },
      { speaker: 'Wibke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'महसूस', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'das', role: 'r-akkusativ', en: 'that (neut.)', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'als', role: 'r-preposition', en: 'as', hi: 'के रूप में', pron: 'als', type: 'Preposition' },
        { w: 'hilfreich', role: 'r-akkusativ', en: 'helpful', hi: 'सहायक', pron: 'HILF-rykh', type: 'Adjective', why: 'hilfreich = helpful (this chapter).', ex: 'Das war hilfreich.', exEn: 'That was helpful.' },
        { w: 'empfunden', role: 'r-verb', en: 'experienced', hi: 'महसूस किया', pron: 'emp-FOON-den', type: 'Verb · Partizip II (Satzende, Verbalkomplex)' },
        { w: '.', plain: true }
      ], en: 'I experienced that as helpful.', hi: 'Maine ise sahayak maana.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'When German needs several verb forms in one clause, they don\'t scatter — they stack together at the very end, in a fixed order: <span class="de r-verb">habe … lernen müssen</span> (Perfekt + Modal), <span class="de r-verb">wird … fertiggestellt werden</span> (Passiv Futur), <span class="de r-verb">hoffen … erhalten zu können</span> (double Infinitiv). Find the first verb, then find the whole cluster at the end — that\'s the Verbalkomplex.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is MEHRTEILIGE VERBEN / VERBALKOMPLEX (B2 level): two-part (Modalverb + Infinitiv), three-part (Perfekt + Modalverb via Ersatzinfinitiv; Passiv Futur: wird + Partizip II + werden; Perfekt Passiv: ist + Partizip II + worden), and recognition of four-part chains (wird + Partizip II + worden + sein). Also multiple infinitives with zu (hoffen … erhalten zu können). ' +
    'Do NOT expect Konjunktiv I, detailed Ersatzinfinitiv rules beyond recognition, Nominalisierung, or Passive Konjunktiv — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- In a Perfekt + Modalverb combination, the Ersatzinfinitiv (bare infinitive form of the modal) replaces the expected Partizip II, and it comes LAST: "hat lernen müssen", never "hat müssen lernen" or "hat gelernt müssen".\n' +
    '- In Passiv Futur, order is werden (finite) ... Partizip II ... werden (infinitive), e.g. "wird repariert werden".\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Verb-order check:</b> one sentence on whether the verb cluster at the end of each clause is in the correct order.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly build two-, three-, and even four-part verb clusters in the right order every time. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the two-verb and three-verb structure charts once, then continue.',
    low: 'Worth another pass through the Grammar section — practise the reading strategy: find the first verb, then find the whole cluster at the end.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'habe', role: 'r-verb' },
    { w: 'heute', role: 'plain' }, { w: 'lernen', role: 'r-verb' },
    { w: 'müssen', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: several verb forms stack together at clause-end, in a fixed order.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Wibke and Timo prepare for a business conference full of stacked verb clusters.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 33 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master two-, three-, and four-part verb clusters, and a reading strategy for long sentences.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of complex verb chains.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch multi-part verb clusters in natural spoken German.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe work processes and plans using stacked verb structures naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and emails using Verbalkomplex structures correctly.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill identifying and building two-, three-, and four-part verb clusters.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 330 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 33 chapter words — business-conference vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '7 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Verb-cluster identification and building drills, error correction, and a long-sentence writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete Verbalkomplex reference — two/three/four-part charts, reading strategy, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'muss arbeiten', text: 'Build two-part verb clusters (Modal + Infinitiv)' },
    { de: 'hat lernen müssen', text: 'Build three-part clusters with Ersatzinfinitiv' },
    { de: 'wird repariert werden', text: 'Build Passiv Futur clusters' },
    { de: 'ist geschrieben worden', text: 'Build Perfekt Passiv clusters' },
    { de: 'erhalten zu können', text: 'Chain multiple infinitives with zu' }
  ],

  // ---------- Vocabulary (33 items — full chapter-2 upload list) ----------
  vocab: [
    { de: 'empfinden', pos: 'verb', level: 'B2', en: 'to feel, perceive', hi: 'महसूस करना', ex: 'Sie empfindet große Freude bei der Arbeit.', exEn: 'She feels great joy at work.', exHi: 'Use kaam mein bahut khushi mehsoos hoti hai.', conj: { praesens: 'empfindet', praeteritum: 'empfand', perfekt: 'hat empfunden' } },
    { de: 'Erfahrung', art: 'die', gender: 'f', plural: 'Erfahrungen', pos: 'noun', level: 'B2', en: 'experience', hi: 'अनुभव', ex: 'Unsere Erfahrung hat sich als hilfreich erwiesen.', exEn: 'Our experience has proven helpful.', exHi: 'Hamaara anubhav sahaayak saabit hua hai.' },
    { de: 'erheblich', pos: 'adjective', level: 'B2', en: 'considerable, substantial', hi: 'महत्वपूर्ण', ex: 'Das ist ein erheblicher Unterschied.', exEn: 'That\'s a considerable difference.', exHi: 'Yeh ek mahatvapurn antar hai.' },
    { de: 'erkunden', pos: 'verb', level: 'B2', en: 'to explore, scout', hi: 'खोजना', ex: 'Wir erkunden neue Märkte.', exEn: 'We\'re exploring new markets.', exHi: 'Hum naye baazaar khoj rahe hain.', conj: { praesens: 'erkundet', praeteritum: 'erkundete', perfekt: 'hat erkundet' } },
    { de: 'eröffnen', pos: 'verb', level: 'B2', en: 'to open up, inaugurate', hi: 'खोलना', ex: 'Die Konferenz wird morgen eröffnet.', exEn: 'The conference will be opened tomorrow.', exHi: 'Sammelan kal khola jaayega.', conj: { praesens: 'eröffnet', praeteritum: 'eröffnete', perfekt: 'hat eröffnet' } },
    { de: 'erweitern', pos: 'verb', level: 'B2', en: 'to expand, extend', hi: 'विस्तार करना', ex: 'Anna hat ihre Präsentation erweitern können.', exEn: 'Anna was able to expand her presentation.', exHi: 'Anna apni prastuti ka vistaar kar saki.', conj: { praesens: 'erweitert', praeteritum: 'erweiterte', perfekt: 'hat erweitert' } },
    { de: 'etablieren', pos: 'verb', level: 'B2', en: 'to establish', hi: 'स्थापित करना', ex: 'Die Firma will sich am Markt etablieren.', exEn: 'The company wants to establish itself in the market.', exHi: 'Company baazaar mein khud ko sthaapit karna chahti hai.', conj: { praesens: 'etabliert', praeteritum: 'etablierte', perfekt: 'hat etabliert' } },
    { de: 'exotisch', pos: 'adjective', level: 'B2', en: 'exotic', hi: 'विदेशी', ex: 'Das Land wirkt exotisch.', exEn: 'The country seems exotic.', exHi: 'Desh videshi lagta hai.' },
    { de: 'flechten', pos: 'verb', level: 'B2', en: 'to braid, weave', hi: 'बुनना', ex: 'Sie flicht ihre Haare jeden Morgen.', exEn: 'She braids her hair every morning.', exHi: 'Woh har subah apne baal gunthi hai.', conj: { praesens: 'flicht', praeteritum: 'flocht', perfekt: 'hat geflochten' } },
    { de: 'Freundlichkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'friendliness', hi: 'मित्रता', ex: 'Ihre Freundlichkeit hat alle beeindruckt.', exEn: 'Her friendliness impressed everyone.', exHi: 'Uski mitrata ne sabko prabhaavit kiya.' },
    { de: 'geeignet', pos: 'adjective', level: 'B2', en: 'suitable, appropriate', hi: 'उपयुक्त', ex: 'Der Raum ist gut geeignet für die Konferenz.', exEn: 'The room is well suited for the conference.', exHi: 'Kamra sammelan ke liye achha upyukt hai.' },
    { de: 'Geschäftsbeziehung', art: 'die', gender: 'f', plural: 'Geschäftsbeziehungen', pos: 'noun', level: 'B2', en: 'business relationship', hi: 'व्यापारिक संबंध', ex: 'Ich versuche jeden Tag neue Geschäftsbeziehungen zu knüpfen.', exEn: 'I try to forge new business relationships every day.', exHi: 'Main har din naye vyapaarik sambandh banaane ki koshish karti hoon.' },
    { de: 'Geschäftsverhandlung', art: 'die', gender: 'f', plural: 'Geschäftsverhandlungen', pos: 'noun', level: 'B2', en: 'business negotiation', hi: 'व्यापार वार्ता', ex: 'Kommt eine Geschäftsverhandlung noch infrage?', exEn: 'Is a business negotiation still an option?', exHi: 'Kya vyapaar vaarta ab bhi ek vikalp hai?' },
    { de: 'gestresst', pos: 'adjective', level: 'B2', en: 'stressed', hi: 'तनावग्रस्त', ex: 'Ich bin etwas gestresst wegen der Konferenz.', exEn: 'I\'m somewhat stressed because of the conference.', exHi: 'Main sammelan ki wajah se thoda tanaavgrast hoon.' },
    { de: 'geteilt', pos: 'adjective', level: 'B2', en: 'divided, shared', hi: 'साझा', ex: 'Die Meinungen sind geteilt.', exEn: 'Opinions are divided.', exHi: 'Raayein baanti hui hain.' },
    { de: 'Hausverwaltung', art: 'die', gender: 'f', plural: 'Hausverwaltungen', pos: 'noun', level: 'B2', en: 'property management', hi: 'संपत्ति प्रबंधन', ex: 'Die Hausverwaltung kümmert sich um das Gebäude.', exEn: 'The property management takes care of the building.', exHi: 'Sampatti prabandhan imaarat ki dekhbhaal karta hai.' },
    { de: 'herrlich', pos: 'adjective', level: 'B2', en: 'glorious, wonderful', hi: 'अद्भुत', ex: 'Es ist draußen herrlich heiß.', exEn: 'It\'s gloriously hot outside.', exHi: 'Bahar adbhut roop se garmi hai.' },
    { de: 'hilfreich', pos: 'adjective', level: 'B2', en: 'helpful', hi: 'सहायक', ex: 'Unsere Erfahrung hat sich als hilfreich erwiesen.', exEn: 'Our experience has proven helpful.', exHi: 'Hamaara anubhav sahaayak saabit hua hai.' },
    { de: 'Hommage', art: 'die', gender: 'f', plural: 'Hommagen', pos: 'noun', level: 'B2', en: 'homage', hi: 'श्रद्धांजलि', ex: 'Die Rede war eine Hommage an die Gründer.', exEn: 'The speech was a homage to the founders.', exHi: 'Bhaashan sansthaapakon ko shraddhaanjali thi.' },
    { de: 'Identität', art: 'die', gender: 'f', plural: 'Identitäten', pos: 'noun', level: 'B2', en: 'identity', hi: 'पहचान', ex: 'Die Öffentlichkeit beobachtet unsere Identität als Unternehmen genau.', exEn: 'The public closely observes our identity as a company.', exHi: 'Janta hamaari kampani ki pahchaan ko baareeki se dekhti hai.' },
    { de: 'infrage kommen', pos: 'idiom', level: 'B2', en: 'to be an option, be considered', hi: 'विकल्प होना', ex: 'Kommt eine Geschäftsverhandlung noch infrage?', exEn: 'Is a business negotiation still an option?', exHi: 'Kya vyapaar vaarta ab bhi ek vikalp hai?' },
    { de: 'inmitten', pos: 'preposition', level: 'B2', en: 'in the midst of, amid (+ Genitiv)', hi: 'बीच में', ex: 'Inmitten der Konferenz klingelte ihr Telefon.', exEn: 'In the midst of the conference, her phone rang.', exHi: 'Sammelan ke beech mein, uska phone baja.' },
    { de: 'klimatisiert', pos: 'adjective', level: 'B2', en: 'air-conditioned', hi: 'वातानुकूलित', ex: 'Der Konferenzraum muss klimatisiert sein.', exEn: 'The conference room must be air-conditioned.', exHi: 'Conference room vaataanukoolit hona chahiye.' },
    { de: 'knüpfen', pos: 'verb', level: 'B2', en: 'to tie, forge (links)', hi: 'बनाना, जोड़ना', ex: 'Wir wollen neue Kontakte knüpfen.', exEn: 'We want to forge new contacts.', exHi: 'Hum naye sampark banaana chahte hain.', conj: { praesens: 'knüpft', praeteritum: 'knüpfte', perfekt: 'hat geknüpft' } },
    { de: 'Konferenz', art: 'die', gender: 'f', plural: 'Konferenzen', pos: 'noun', level: 'B2', en: 'conference', hi: 'सम्मेलन', ex: 'Ich habe heute lange für die Konferenz lernen müssen.', exEn: 'I had to study for the conference for a long time today.', exHi: 'Aaj mujhe sammelan ke liye der tak padhna pada.' },
    { de: 'konfrontieren', pos: 'verb', level: 'B2', en: 'to confront', hi: 'सामना करना', ex: 'Er wurde mit den Fakten konfrontiert.', exEn: 'He was confronted with the facts.', exHi: 'Use tathyon ka saamna karna pada.', conj: { praesens: 'konfrontiert', praeteritum: 'konfrontierte', perfekt: 'hat konfrontiert' } },
    { de: 'leuchten', pos: 'verb', level: 'B2', en: 'to glow, shine', hi: 'चमकना', ex: 'Die Lichter leuchteten während der Konferenz.', exEn: 'The lights shone during the conference.', exHi: 'Sammelan ke dauran roshniyaan chamak rahi thin.', conj: { praesens: 'leuchtet', praeteritum: 'leuchtete', perfekt: 'hat geleuchtet' } },
    { de: 'Mehrsprachigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'multilingualism', hi: 'बहुभाषिता', ex: 'Die Mehrsprachigkeit in diesem Unternehmen ist nützlich.', exEn: 'Multilingualism in this company is useful.', exHi: 'Is company mein bahubhaashita upyogi hai.' },
    { de: 'nützlich', pos: 'adjective', level: 'B2', en: 'useful', hi: 'उपयोगी', ex: 'Die Mehrsprachigkeit ist wirklich nützlich.', exEn: 'Multilingualism is really useful.', exHi: 'Bahubhaashita sach mein upyogi hai.' },
    { de: 'Öffentlichkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'public, the public', hi: 'जनता', ex: 'Die Öffentlichkeit beobachtet unsere Identität genau.', exEn: 'The public closely observes our identity.', exHi: 'Janta hamaari pahchaan ko baareeki se dekhti hai.' },
    { de: 'Option', art: 'die', gender: 'f', plural: 'Optionen', pos: 'noun', level: 'B2', en: 'option', hi: 'विकल्प', ex: 'Wir sollten die Konferenz als Option nutzen können.', exEn: 'We should be able to use the conference as an option.', exHi: 'Humein sammelan ko ek vikalp ke roop mein upyog karne mein saksham hona chahiye.' },
    { de: 'Position', art: 'die', gender: 'f', plural: 'Positionen', pos: 'noun', level: 'B2', en: 'position', hi: 'पद', ex: 'Wir hoffen bald eine Position im Ausland erhalten zu können.', exEn: 'We hope to soon be able to obtain a position abroad.', exHi: 'Hum ummeed karte hain ki hum jald hi videsh mein ek pad pa sakenge.' },
    { de: 'gekommen', pos: 'adjective', level: 'B2', en: 'come, arrived (Partizip II of kommen)', hi: 'आया हुआ', ex: 'Sie ist gerade gekommen.', exEn: 'She has just arrived.', exHi: 'Woh abhi aayi hai.' },
    { de: 'geprägt', pos: 'adjective', level: 'B2', en: 'shaped, characterised', hi: 'ढला हुआ', ex: 'Ihre Karriere ist von harter Arbeit geprägt.', exEn: 'Her career is shaped by hard work.', exHi: 'Uska career mehnat se ढला hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist der Verbalkomplex?',
      body: [ 'When German needs two, three, or even four verb forms in one clause, they don\'t scatter — they stack together at the very end, in a fixed order.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['Modalverb + Infinitiv', '<span class="de">Ich muss heute lange arbeiten.</span>']
        ]
      },
      hinglish: 'Jab German ko ek clause mein do, teen, ya char verb forms chahiye hote hain, woh scatter nahi hote — aakhir mein saath mein aate hain.'
    },
    {
      title: 'Zwei-Verb-Komplex',
      body: [ 'Finite verb + infinitive. The most common pattern.' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Ich kann Deutsch sprechen.</span>'],
          ['<span class="de">Anna muss arbeiten.</span>']
        ]
      },
      hinglish: 'Finite verb + infinitive. Sabse common pattern.'
    },
    {
      title: 'Drei-Verb-Komplex',
      body: [ 'Perfekt + Modalverb uses the Ersatzinfinitiv (the modal\'s bare infinitive, not its Partizip II) — and it always comes LAST.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['haben + Infinitiv + Modalverb', '<span class="de">Anna hat arbeiten müssen.</span>'],
          ['werden + Partizip II + werden (Passiv Futur)', '<span class="de">Das Auto wird repariert werden.</span>'],
          ['ist + Partizip II + worden (Perfekt Passiv)', '<span class="de">Der Brief ist geschrieben worden.</span>']
        ]
      },
      hinglish: 'Perfekt + Modalverb Ersatzinfinitiv use karta hai — aur woh hamesha AAKHIR mein aata hai.'
    },
    {
      title: 'Vier-Verb-Komplex (Erkennung)',
      body: [ 'Four-part chains appear mainly in formal written German. Recognition matters more than production at B2.' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Das Auto wird repariert worden sein.</span>'],
          ['<span class="de">Der Bericht wird geschrieben worden sein.</span>']
        ]
      },
      hinglish: 'Four-part chains mainly formal written German mein aati hain. B2 mein recognition zyaada zaroori hai production se.'
    },
    {
      title: 'Verbalkomplex mit Modalverben',
      body: [ 'Present and Perfekt, side by side.' ],
      table: {
        head: ['Präsens', 'Perfekt'],
        rows: [
          ['<span class="de">Ich möchte Deutsch lernen.</span>', '<span class="de">Ich habe Deutsch lernen müssen.</span>']
        ]
      },
      hinglish: 'Präsens aur Perfekt, saath-saath.'
    },
    {
      title: 'Passiv-Verbalkomplex',
      body: [ 'Modal + Passiv combine: Modalverb + Partizip II + werden.' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Der Brief muss geschrieben werden.</span>'],
          ['<span class="de">Die Tür darf geöffnet werden.</span>']
        ]
      },
      hinglish: 'Modal + Passiv combine hote hain: Modalverb + Partizip II + werden.'
    },
    {
      title: 'Mehrere Infinitive mit zu',
      body: [ 'Sometimes two infinitives chain together, with zu attached to the last one.' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Wir hoffen, nach Deutschland fahren zu können.</span>']
        ]
      },
      hinglish: 'Kabhi-kabhi do infinitives ek saath chain hote hain, zu aakhri wale ke saath.'
    },
    {
      title: 'Lange Sätze lesen — Lesestrategie',
      body: [ 'Step 1: find the finite verb. Step 2: find the verb complex at the end. Step 3: read the middle.' ],
      note: 'This three-step strategy makes any long Goethe B2 sentence readable, no matter how many words sit in the Mittelfeld.',
      hinglish: 'Step 1: finite verb dhoondo. Step 2: aakhir mein verb complex dhoondo. Step 3: beech ka hissa padho.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from wrong verb order at the end, or using the wrong form (Partizip II instead of Ersatzinfinitiv).' ],
      mistakes: [
        { wrong: 'Ich habe müssen lernen.', right: 'Ich habe lernen müssen.', why: 'The Ersatzinfinitiv (müssen) always comes LAST, after the other infinitive.' },
        { wrong: 'Anna hat können kommen.', right: 'Anna hat kommen können.', why: 'Same rule — the modal\'s Ersatzinfinitiv comes last.' },
        { wrong: 'Das Auto muss werden repariert.', right: 'Das Auto muss repariert werden.', why: 'In a Passiv-Verbalkomplex, Partizip II comes before werden, not after.' },
        { wrong: 'Wir haben arbeiten gekonnt.', right: 'Wir haben arbeiten können.', why: 'The modal needs its Ersatzinfinitiv (können), not its Partizip II (gekonnt).' },
        { wrong: 'Ich möchte zu lernen.', right: 'Ich möchte lernen.', why: 'A modal verb (möchte) takes a bare infinitive, never zu + Infinitiv.' }
      ],
      hinglish: 'Yeh galtiyaan aakhir mein galat verb order se ya galat form (Partizip II instead of Ersatzinfinitiv) use karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Correctly ordered verb clusters are essential for Goethe B2 writing and speaking, especially in formal reports.' ],
      note: 'Quick check: find the first (finite) verb. Then find everything else that belongs to it — it all sits together at the very end, in the fixed order the structure requires.',
      hinglish: 'Sahi order mein verb clusters Goethe B2 writing aur speaking ke liye zaroori hain, khaaskar formal reports mein.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Erfahrungsbericht: Mein erstes internationales Meeting',
    titleEn: 'Experience report: my first international meeting',
    tokens: [
      { w: 'Letzte', role: 'plain', en: 'last', hi: 'पिछले', type: 'Adjective' },
      { w: 'Woche', role: 'plain', en: 'week', hi: 'हफ़्ते', type: 'Noun · fem.' },
      { w: 'habe', role: 'r-verb', en: 'have (linke Klammer)', hi: 'है (बायाँ कोष्ठक)', type: 'Verb · haben (Linke Klammer)' },
      { w: 'ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'zum', role: 'plain', en: 'for the', hi: 'लिए', type: 'Contraction · zu dem' },
      { w: 'ersten', role: 'plain', en: 'first', hi: 'पहली', type: 'Adjective' },
      { w: 'Mal', role: 'plain', en: 'time', hi: 'बार', type: 'Noun · neut.' },
      { w: 'an', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'plain', en: 'a (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'internationalen', role: 'plain', en: 'international', hi: 'अंतरराष्ट्रीय', type: 'Adjective' },
      { w: 'Geschäftsverhandlung', role: 'plain', en: 'business negotiation', hi: 'व्यापार वार्ता', type: 'Noun · fem.', why: 'die Geschäftsverhandlung (this chapter).' },
      { w: 'teilgenommen', role: 'r-verb', en: 'taken part (rechte Klammer, Verbalkomplex)', hi: 'भाग लिया (दायाँ कोष्ठक)', type: 'Verb · teilnehmen (Partizip II, getrenntes Präfix, Rechte Klammer)', why: 'teilnehmen an + Dat.: separable verb, prefix teil- rejoins ge-nommen: teilgenommen (Verbalkomplex — this chapter).' },
      { w: '.', plain: true },
      { w: 'Unsere', role: 'plain', en: 'our', hi: 'हमारे', type: 'Possessivartikel' },
      { w: 'Firma', role: 'plain', en: 'company', hi: 'कंपनी', type: 'Noun · fem.' },
      { w: 'möchte', role: 'r-verb', en: 'would like to (linke Klammer)', hi: 'चाहती है (बायाँ कोष्ठक)', type: 'Verb · Modalverb (Linke Klammer)' },
      { w: 'ihre', role: 'plain', en: 'her', hi: 'अपने', type: 'Possessivartikel' },
      { w: 'Geschäftsbeziehungen', role: 'plain', en: 'business relations', hi: 'व्यावसायिक संबंध', type: 'Noun · plural', why: 'die Geschäftsbeziehung (this chapter).' },
      { w: 'nach', role: 'plain', en: 'to', hi: 'की ओर', type: 'Preposition' },
      { w: 'Asien', role: 'plain', en: 'Asia', hi: 'एशिया', type: 'Name' },
      { w: 'erweitern', role: 'r-verb', en: 'to expand (rechte Klammer)', hi: 'विस्तार करना (दायाँ कोष्ठक)', type: 'Verb · Infinitiv (Rechte Klammer)', why: 'erweitern (this chapter).' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'नए', type: 'Adjective' },
      { w: 'Kontakte', role: 'plain', en: 'contacts', hi: 'संपर्क', type: 'Noun · plural' },
      { w: 'knüpfen', role: 'r-verb', en: 'to establish (rechte Klammer)', hi: 'बनाना (दायाँ कोष्ठक)', type: 'Verb · Infinitiv (Rechte Klammer)', why: 'Kontakte knüpfen = to make contacts (this chapter).' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'war', role: 'r-verb', en: 'was (linke Klammer)', hi: 'था (बायाँ कोष्ठक)', type: 'Verb · sein (Linke Klammer)' },
      { w: 'zuerst', role: 'plain', en: 'at first', hi: 'पहले तो', type: 'Adverb' },
      { w: 'ziemlich', role: 'plain', en: 'quite', hi: 'काफ़ी', type: 'Adverb' },
      { w: 'gestresst', role: 'r-verb', en: 'stressed (Satzende)', hi: 'तनावग्रस्त (Satzende)', type: 'Adjective (Partizip)', why: 'gestresst (this chapter).' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-connector', en: 'because', hi: 'क्योंकि', type: 'Konjunktion · weil' },
      { w: 'ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'mich', role: 'plain', en: 'myself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'zwischen', role: 'plain', en: 'amid', hi: 'बीच में', type: 'Preposition · Dat.' },
      { w: 'mehreren', role: 'plain', en: 'several', hi: 'कई', type: 'Determiner · Dat.' },
      { w: 'Sprachen', role: 'plain', en: 'languages', hi: 'भाषाओं', type: 'Noun · plural' },
      { w: 'zurechtfinden', role: 'r-verb', en: 'orient myself (Satzende, Verbalkomplex)', hi: 'सामंजस्य बिठाना (Satzende)', type: 'Verb · sich zurechtfinden (Infinitiv, getrenntes Präfix, Nebensatz-Satzende)', why: 'sich zurechtfinden: in a Nebensatz the whole separable-verb infinitive (zurechtfinden) stays together right before the finite verb.' },
      { w: 'musste', role: 'r-verb', en: 'had to (Satzende)', hi: 'पड़ा (Satzende)', type: 'Verb · Modalverb (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Zum', role: 'plain', en: 'as a', hi: 'रूप में', type: 'Contraction · zu dem' },
      { w: 'Glück', role: 'plain', en: 'luck', hi: 'भाग्य', type: 'Noun · neut.' },
      { w: 'war', role: 'r-verb', en: 'was (linke Klammer)', hi: 'था (बायाँ कोष्ठक)', type: 'Verb · sein (Linke Klammer)' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Konferenzraum', role: 'plain', en: 'conference room', hi: 'सम्मेलन कक्ष', type: 'Noun · masc.', why: 'die Konferenz (this chapter).' },
      { w: 'klimatisiert', role: 'r-verb', en: 'air-conditioned (Satzende)', hi: 'वातानुकूलित (Satzende)', type: 'Adjective (Partizip)', why: 'klimatisiert (this chapter).' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'die', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Atmosphäre', role: 'plain', en: 'atmosphere', hi: 'माहौल', type: 'Noun · fem.' },
      { w: 'sehr', role: 'plain', en: 'very', hi: 'बहुत', type: 'Adverb' },
      { w: 'herrlich', role: 'plain', en: 'wonderful', hi: 'शानदार', type: 'Adjective', why: 'herrlich (this chapter).' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Kollege', role: 'plain', en: 'colleague', hi: 'सहयोगी', type: 'Noun · masc.' },
      { w: 'hat', role: 'r-verb', en: 'has (linke Klammer)', hi: 'है (बायाँ कोष्ठक)', type: 'Verb · haben (Linke Klammer)' },
      { w: 'die', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Konferenz', role: 'plain', en: 'conference', hi: 'सम्मेलन', type: 'Noun · fem.' },
      { w: 'freundlich', role: 'plain', en: 'in a friendly way', hi: 'मित्रवत रूप से', type: 'Adverb', why: 'Freundlichkeit (this chapter).' },
      { w: 'eröffnet', role: 'r-verb', en: 'opened (rechte Klammer)', hi: 'शुरू की (दायाँ कोष्ठक)', type: 'Verb · eröffnen (Partizip II, Rechte Klammer)', why: 'eröffnen (this chapter).' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'jedem', role: 'plain', en: 'everyone (dat.)', hi: 'हर किसी को', type: 'Pronoun · Dat.' },
      { w: 'Teilnehmer', role: 'plain', en: 'participant', hi: 'प्रतिभागी', type: 'Noun · masc.' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'geeignete', role: 'plain', en: 'suitable', hi: 'उपयुक्त', type: 'Adjective', why: 'geeignet (this chapter).' },
      { w: 'Position', role: 'plain', en: 'position', hi: 'स्थान', type: 'Noun · fem.' },
      { w: 'am', role: 'plain', en: 'at the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Tisch', role: 'plain', en: 'table', hi: 'मेज़', type: 'Noun · masc.' },
      { w: 'zugewiesen', role: 'r-verb', en: 'assigned (rechte Klammer)', hi: 'सौंपी (दायाँ कोष्ठक)', type: 'Verb · zuweisen (Partizip II)' },
      { w: '.', plain: true },
      { w: 'Da', role: 'plain', en: 'since', hi: 'चूँकि', type: 'Konjunktion' },
      { w: 'mehrere', role: 'plain', en: 'several', hi: 'कई', type: 'Determiner' },
      { w: 'Nationalitäten', role: 'plain', en: 'nationalities', hi: 'राष्ट्रीयताएँ', type: 'Noun · plural' },
      { w: 'vertreten', role: 'r-verb', en: 'represented (Satzende)', hi: 'प्रतिनिधित्व किया (Satzende)', type: 'Adjective (Partizip)' },
      { w: 'waren', role: 'r-verb', en: 'were (Satzende)', hi: 'थे (Satzende)', type: 'Verb · sein (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'half', role: 'r-verb', en: 'helped (linke Klammer)', hi: 'मदद की (बायाँ कोष्ठक)', type: 'Verb · helfen (Linke Klammer)' },
      { w: 'uns', role: 'plain', en: 'us', hi: 'हमारी', type: 'Pronoun · Dat.' },
      { w: 'unsere', role: 'plain', en: 'our', hi: 'हमारी', type: 'Possessivartikel' },
      { w: 'Mehrsprachigkeit', role: 'plain', en: 'multilingualism', hi: 'बहुभाषिकता', type: 'Noun · fem.', why: 'die Mehrsprachigkeit (this chapter).' },
      { w: 'ungemein', role: 'plain', en: 'immensely', hi: 'बेहद', type: 'Adverb' },
      { w: 'weiter', role: 'r-verb', en: 'further (rechte Klammer, Verbalkomplex)', hi: 'आगे (दायाँ कोष्ठक)', type: 'Adverb / getrenntes Präfix (Rechte Klammer)', why: 'weiterhelfen: separable verb, prefix weiter- forms the right bracket.' },
      { w: '.', plain: true },
      { w: 'Am', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Ende', role: 'plain', en: 'end', hi: 'अंत', type: 'Noun · neut.' },
      { w: 'konnten', role: 'r-verb', en: 'could (linke Klammer)', hi: 'सके (बायाँ कोष्ठक)', type: 'Verb · Modalverb (Linke Klammer)' },
      { w: 'wir', role: 'plain', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'gemeinsame', role: 'plain', en: 'joint', hi: 'साझा', type: 'Adjective' },
      { w: 'Option', role: 'plain', en: 'option', hi: 'विकल्प', type: 'Noun · fem.', why: 'die Option (this chapter).' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Zusammenarbeit', role: 'plain', en: 'cooperation', hi: 'सहयोग', type: 'Noun · fem.' },
      { w: 'entwickeln', role: 'r-verb', en: 'develop (rechte Klammer)', hi: 'विकसित करना (दायाँ कोष्ठक)', type: 'Verb · Infinitiv (Rechte Klammer)' },
      { w: '.', plain: true }
    ],
    translation: 'Last week I took part in an international business negotiation for the first time. Our company would like to expand its business relations to Asia and establish new contacts. At first I was quite stressed, because I had to orient myself amid several languages. Luckily the conference room was air-conditioned and the atmosphere was wonderful. A colleague opened the conference in a friendly way and assigned every participant a suitable position at the table. Since several nationalities were represented, our multilingualism helped us immensely. In the end we were able to develop a joint option for cooperation.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_002_L001', speaker: 'Wibke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich hätte auf der Konferenz eigentlich noch mehr Leute kennenlernen wollen.', en: 'Timo, I would have actually wanted to meet even more people at the conference.' },
      { id: 'B2_002_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Warum, hast du nicht genug Kontakte machen können?', en: 'Why, weren\'t you able to make enough contacts?' },
      { id: 'B2_002_L003', speaker: 'Wibke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Doch, aber ich hätte auch das kleine Café besuchen sollen, von dem alle geschwärmt haben.', en: 'I did, but I should have also visited the little café everyone was raving about.' },
      { id: 'B2_002_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das kannst du doch nächstes Jahr nachholen!', en: 'You can make up for that next year!' }
    ],
    transcript: 'Timo, ich hätte auf der Konferenz eigentlich noch mehr Leute kennenlernen wollen. Warum, hast du nicht genug Kontakte machen können? Doch, aber ich hätte auch das kleine Café besuchen sollen, von dem alle geschwärmt haben. Das kannst du doch nächstes Jahr nachholen!',
    translation: 'Timo, I would have actually wanted to meet even more people at the conference. Why, weren\'t you able to make enough contacts? I did, but I should have also visited the little café everyone was raving about. You can make up for that next year!',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'hätte' },
      { w: 'auf' },
      { w: 'der' },
      { w: 'Konferenz' },
      { w: 'eigentlich' },
      { w: 'noch' },
      { w: 'mehr' },
      { w: 'Leute' },
      { w: 'kennenlernen' },
      { w: 'wollen' },
      { w: '.', plain: true },
      { w: 'Warum' },
      { w: ',', plain: true },
      { w: 'hast' },
      { w: 'du' },
      { w: 'nicht' },
      { w: 'genug' },
      { w: 'Kontakte' },
      { w: 'machen' },
      { w: 'können' },
      { w: '?', plain: true },
      { w: 'Doch' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'hätte' },
      { w: 'auch' },
      { w: 'das' },
      { w: 'kleine' },
      { w: 'Café' },
      { w: 'besuchen' },
      { w: 'sollen' },
      { w: ',', plain: true },
      { w: 'von' },
      { w: 'dem' },
      { w: 'alle' },
      { w: 'geschwärmt' },
      { w: 'haben' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'kannst' },
      { w: 'du' },
      { w: 'doch' },
      { w: 'nächstes' },
      { w: 'Jahr' },
      { w: 'nachholen' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was bedauert Wibke, nicht gemacht zu haben?', qEn: 'What does Wibke regret not doing?', options: ['zu viele Kontakte machen', 'das kleine Café besuchen', 'zu früh gehen', 'zu spät kommen'], optionsEn: ['make too many contacts', 'visit the little café', 'leave too early', 'arrive late'], answer: 1,
        explain: '"… ich hätte auch das kleine Café besuchen sollen."' },
      { q: 'Was schlägt Timo vor?', qEn: 'What does Timo suggest?', options: ['sie soll es vergessen', 'sie kann es nächstes Jahr nachholen', 'er geht stattdessen', 'sie soll sich beschweren'], optionsEn: ['she should forget it', 'she can take it next year', 'he is going instead', 'she should complain'], answer: 1,
        explain: '"Das kannst du doch nächstes Jahr nachholen!"' }
    ]
  },

  

  // ---------- Speaking prompts (Anna/Rohan role-play only) ----------
  speaking: [
    { task: "Ein Freund fragt, wie die Konferenz war.", taskEn: "A friend asks how the conference was.", de: "Ich hätte eigentlich noch mehr Leute kennenlernen wollen.", en: "I'd actually have liked to meet more people." },
    { task: "Er fragt, ob du genug Kontakte machen konntest.", taskEn: "He asks whether you were able to make enough contacts.", de: "Doch, aber ich hätte die Stadt auch noch erkunden wollen.", en: "Yes, but I'd also have liked to explore the city." },
    { task: "Deine Chefin fragt, was in der Verhandlung möglich war.", taskEn: "Your boss asks what was possible in the negotiation.", de: "Wir haben die Geschäftsbeziehung erheblich erweitern können.", en: "We were able to expand the business relationship considerably." },
    { task: "Eine Kollegin fragt, warum du gestresst warst.", taskEn: "A colleague asks why you were stressed.", de: "Ich habe zwei Termine gleichzeitig wahrnehmen müssen.", en: "I had to attend two appointments at once." },
    { task: "Ein Kollege fragt, was du im nächsten Jahr planst.", taskEn: "A colleague asks what you're planning next year.", de: "Ich werde ein neues Büro eröffnen und den Markt etablieren wollen.", en: "I'll want to open a new office and establish the market." },
    { task: "Rollenspiel: Ihr besprecht die Geschäftsverhandlung.", taskEn: "Role-play: you discuss the business negotiation.", de: "Wir hätten früher reagieren sollen. — Ja, dann hätten wir den Vertrag abschließen können.", en: "We should have reacted earlier. — Yes, then we could have closed the contract." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short business report or email (six to eight sentences) about a conference or negotiation — using at least one two-part verb cluster, one three-part cluster (Perfekt + Modalverb or Passiv Futur), and one Infinitiv-mit-zu chain.',
    starters: ['… hat … müssen.', '… wird … werden.', '… hoffen … zu können.', '… muss … sein.'],
    placeholder: 'Ich habe heute lange für die Konferenz lernen müssen. Der Bericht wird morgen fertiggestellt werden …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Anna hat arbeiten ___." (identify the correct Ersatzinfinitiv order)',
      options: ['müssen', 'gemusst', 'musste'],
      answer: 0,
      explain: 'Perfekt + Modalverb uses the Ersatzinfinitiv (müssen), which comes last.'
    },
    gap: {
      sentence: ['Das Auto muss ', ' werden.'],
      gaps: [ { answer: 'repariert', accepts: ['repariert'] } ],
      explain: 'In a Passiv-Verbalkomplex, Partizip II comes before werden.'
    },
    match: {
      q: 'Match each verb cluster type to its example.',
      pairs: [
        { noun: 'Zwei-Verb-Komplex', art: 'muss arbeiten' },
        { noun: 'Drei-Verb-Komplex (Perfekt+Modal)', art: 'hat lernen müssen' },
        { noun: 'Passiv Futur', art: 'wird repariert werden' },
        { noun: 'Perfekt Passiv', art: 'ist geschrieben worden' }
      ]
    },
    builder: {
      target: 'Build: "I had to study for a long time today."',
      bank: ['Ich', 'habe', 'heute', 'lange', 'lernen', 'müssen', '.'],
      answer: ['Ich', 'habe', 'heute', 'lange', 'lernen', 'müssen', '.'],
      roles: { 'habe': 'r-verb', 'lernen': 'r-verb', 'müssen': 'r-verb' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich habe müssen lernen.',
      right: 'Ich habe lernen müssen.',
      explain: 'The Ersatzinfinitiv (müssen) always comes last, after the other infinitive.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Wir haben bleiben ___." ', options: ['dürfen', 'gedurft', 'durften'], answer: 0,
      explain: 'Ersatzinfinitiv (dürfen) comes last in a Perfekt + Modalverb combination.' },
    { q: 'Complete: "Der Bericht wird morgen fertiggestellt ___."', options: ['werden', 'worden', 'geworden'], answer: 0,
      explain: 'Passiv Futur: wird + Partizip II + werden (infinitive).' },
    { q: 'Which sentence has correct verb order?', options: ['Anna hat kommen können.', 'Anna hat können kommen.', 'Anna hat gekonnt kommen.'], answer: 0,
      explain: 'The modal\'s Ersatzinfinitiv (können) comes last.' },
    { q: 'Complete: "Der Brief ist geschrieben ___."', options: ['worden', 'geworden', 'werden'], answer: 0,
      explain: 'Perfekt Passiv always ends in worden, never geworden.' },
    { q: 'Which sentence contains an error?', options: ['Ich möchte Deutsch lernen.', 'Ich möchte zu lernen.', 'Das Auto muss repariert werden.'], answer: 1,
      explain: 'A modal verb (möchte) takes a bare infinitive, never zu + Infinitiv.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'When several verb forms are needed in one clause, they stack together at the very end, in a fixed order — never scattered.' },
    { c: 'r-verb', html: 'In Perfekt + Modalverb, the Ersatzinfinitiv (bare infinitive, not Partizip II) replaces the modal\'s participle, and it always comes last.' },
    { c: 'r-verb', html: 'Reading strategy: find the first (finite) verb, then find the whole cluster at the very end — everything in between is the Mittelfeld.' }
  ],
  revisionTips: [
    'Before building a long sentence, decide the full verb cluster first, then place the Mittelfeld content before it.',
    'Practise Perfekt + Modalverb sentences out loud until the Ersatzinfinitiv-last rule feels automatic.',
    'When reading long B2 texts, always locate the finite verb first, then jump to the end to find its full verb complex.'
  ]
};

window.CHAPTER = CHAPTER;
