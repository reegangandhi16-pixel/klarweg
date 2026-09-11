/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 4 · Chapter 38
   "Verschachtelte Relativsätze" — nested relative clauses:
   one relative clause inside another, or multiple relative
   clauses chained in one sentence, using known pronouns
   (der/die/das/den/dem/dessen/deren). Every pronoun belongs to
   exactly ONE antecedent — the key reading/writing strategy.
   Does NOT teach "wer..., der..." or Präpositionalrelativsätze.
   IMPORTANT: dialogue uses ONLY Frauke and Timo.
   Vocabulary source: uploaded chapter-38 list (51 items).
============================================================ */
const CHAPTER = {
  id: 'b2-38-verschachtelte-relativsaetze',
  phase: 'B2 · Phase 4',
  number: 38,
  title: 'Verschachtelte Relativsätze',
  titleEn: 'Nested relative clauses',
  description: 'One relative clause inside another — the key to reading (and writing) genuinely complex German sentences without getting lost.',
  xp: 510,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 39, title: 'Relativsätze mit wer... der...', titleEn: 'Indefinite relative clauses: whoever... that person...' , href: 'chapter-b2-39-relativsaetze-wer-der.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'One clause <em>inside</em> another.',
    intro: 'Touring a famous castle, Frauke and Timo build increasingly layered descriptions — the guide who knows the grounds, which is famous; the wing, which the always-smiling guide recommends — nesting one relative clause inside another without losing the thread.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how each relative pronoun connects back to exactly one antecedent, even inside a nested clause'
    ],
    scene: 'Eine F\u00fchrung im Schloss',
    femaleSpeakers: ['Frauke'],
    dialogue: [
      { speaker: 'Frauke', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Führer', role: 'r-subject', en: 'guide', hi: 'गाइड', pron: 'FÜ-rer', type: 'Noun · masc.' },
        { w: ',', plain: true },
        { w: 'der', role: 'r-subject', en: 'who', hi: 'जो', pron: 'dair', type: 'Relativpronomen · nominative' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Schlossanlage', role: 'r-akkusativ', en: 'castle grounds', hi: 'महल परिसर', pron: 'SHLOS-an-lah-guh', type: 'Noun · fem.', why: 'die Schlossanlage (this chapter).', ex: 'die Schlossanlage' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-subject', en: 'which', hi: 'जो', pron: 'dee', type: 'Relativpronomen · nominative', why: 'a nested relative clause: a relative clause inside another relative clause (this chapter).', ex: 'der Führer, der die Anlage, die berühmt ist, kennt', exEn: 'the guide who knows the grounds, which is famous' },
        { w: 'berühmt', role: 'r-akkusativ', en: 'famous', hi: 'प्रसिद्ध', pron: 'be-RÜMT', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: ',', plain: true },
        { w: 'sehr', role: 'r-akkusativ', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'gut', role: 'r-akkusativ', en: 'well', hi: 'अच्छी तरह', pron: 'goot', type: 'Adjective' },
        { w: 'kennt', role: 'r-verb', en: 'knows', hi: 'जानता है', pron: 'kent', type: 'Verb · kennen (Satzende)' },
        { w: ',', plain: true },
        { w: 'arbeitet', role: 'r-verb', en: 'works', hi: 'काम करता है', pron: 'AR-by-tet', type: 'Verb · arbeiten' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'The guide who knows the castle grounds, which is famous, very well works today.', hi: 'Woh guide jo mahal parisar ko, jo prasiddh hai, bahut achhi tarah jaanta hai, aaj kaam karta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Kennst', role: 'r-verb', en: 'do you know', hi: 'जानती हो', pron: 'KENST', type: 'Verb · kennen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Flügel', role: 'r-akkusativ', en: 'wing', hi: 'शाखा', pron: 'FLÜ-gel', type: 'Noun · masc.' },
        { w: ',', plain: true },
        { w: 'den', role: 'r-akkusativ', en: 'which', hi: 'जिसे', pron: 'dayn', type: 'Relativpronomen · accusative' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Führer', role: 'r-subject', en: 'guide', hi: 'गाइड', pron: 'FÜ-rer', type: 'Noun · masc.' },
        { w: ',', plain: true },
        { w: 'der', role: 'r-subject', en: 'who', hi: 'जो', pron: 'dair', type: 'Relativpronomen · nominative' },
        { w: 'immer', role: 'r-akkusativ', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: 'lächelt', role: 'r-verb', en: 'smiles', hi: 'मुस्कुराता है', pron: 'LEKH-elt', type: 'Verb · lächeln (Satzende)' },
        { w: ',', plain: true },
        { w: 'empfiehlt', role: 'r-verb', en: 'recommends', hi: 'सुझाता है', pron: 'emp-FEELT', type: 'Verb · empfehlen (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Perfect! Do you know the wing, which the guide who always smiles recommends?', hi: 'Badhiya! Kya aap us shaakha ko jaanti hain, jise woh guide jo hamesha muskuraata hai, sujhaata hai?' },
      { speaker: 'Frauke', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Flügel', role: 'r-subject', en: 'wing', hi: 'शाखा', pron: 'FLÜ-gel', type: 'Noun · masc.' },
        { w: ',', plain: true },
        { w: 'der', role: 'r-subject', en: 'which', hi: 'जो', pron: 'dair', type: 'Relativpronomen · nominative' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Pflanzensammlung', role: 'r-akkusativ', en: 'plant collection', hi: 'पौधों का संग्रह', pron: 'PFLAN-tsen-zam-lung', type: 'Noun · fem.', why: 'die Pflanzensammlung (this chapter).', ex: 'die Pflanzensammlung' },
        { w: 'zeigt', role: 'r-verb', en: 'shows', hi: 'दिखाता है', pron: 'TSYKT', type: 'Verb · zeigen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes! That is the wing, which shows the plant collection.', hi: 'Haan! Yeh woh shaakha hai jo paudhon ka sangrah dikhaati hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'gehen', role: 'r-verb', en: 'let us go', hi: 'चलते हैं', pron: 'GAY-en', type: 'Verb · gehen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'dorthin', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort-HIN', type: 'Adverb · direction' },
        { w: '.', plain: true }
      ], en: 'Then let us go there.', hi: 'Toh chalo wahaan chalte hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German often nests one relative clause inside another. It looks intimidating, but the rule never changes: <span class="de r-verschachtelt">every relative pronoun belongs to exactly one antecedent</span>. Find the main clause first, then solve one nested clause at a time.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is VERSCHACHTELTE RELATIVSÄTZE (B2 level): nested relative clauses, where one relative clause sits inside another, or multiple relative clauses chain together in one sentence, using known relative pronouns (der/die/das/den/dem/dessen/deren). Every relative pronoun refers back to exactly ONE antecedent — sometimes the main-clause noun, sometimes a noun introduced by an earlier nested clause. ' +
    'Do NOT expect or require "wer..., der..." constructions or Präpositionalrelativsätze (worüber/woran) — those are out of scope; do not flag their absence. Writing style note: one nested clause is natural; three or four is usually too much for clear B2 writing — gently suggest simplifying (splitting into two sentences) if the learner over-nests, but this is a style tip, not an error. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that each relative pronoun\'s gender/case matches its actual antecedent (which may be a noun introduced by an earlier relative clause, not just the main-clause subject).\n' +
    '- Check that each relative clause\'s verb goes to the end of that clause.\n' +
    '- Check that the main clause resumes correctly (correct word order) after the nested clause(s) close.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Nesting check:</b> one sentence on whether the learner\'s nested clauses stay clear (1-2 levels) or risk becoming hard to follow (3+ levels).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly trace each relative pronoun back to its antecedent, even across nested clauses. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the antecedent-mapping section once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: find the main clause first, then solve one nested relative clause at a time. Every pronoun belongs to exactly one noun.'
  },

  parserSentence: [
    { w: 'Der', role: 'plain' }, { w: 'Professor', role: 'plain' }, { w: ',', plain: true },
    { w: 'dessen', role: 'r-verschachtelt' }, { w: 'Universität', role: 'plain' }, { w: ',', plain: true }, { w: 'deren', role: 'r-verschachtelt' }, { w: 'Bibliothek', role: 'plain' }, { w: 'modern', role: 'plain' }, { w: 'ist', role: 'r-verschachtelt' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: every relative pronoun belongs to exactly one antecedent, even when nested.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Frauke and Timo build increasingly nested descriptions, tracing each pronoun back to its noun.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 51 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the structure of nested relative clauses and the antecedent-mapping strategy.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a university research article and a company profile full of nested relative clauses.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the main clause, first relative clause, second relative clause, and their antecedents.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe people and companies using one or two nested relative clauses naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and descriptions using nested relative clauses without over-complicating sentences.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill antecedent identification, building nested clauses, and simplifying long sentences.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 510 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 51 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Antecedent-mapping drills, nested-clause building, and a company/university description task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete relative clause hierarchy diagram, reading strategy flowchart, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Der Professor, dessen Universität, deren Bibliothek modern ist, ...', text: 'Chain two nested relative clauses in one sentence' },
    { de: 'Every relative pronoun belongs to ONE noun', text: 'Trace each pronoun back to its correct antecedent' },
    { de: 'Main clause → clause 1 → nested clause 2 → main clause resumes', text: 'Follow the sentence hierarchy without getting lost' },
    { de: 'Find the main clause first', text: 'Apply the Goethe B2 reading strategy for long sentences' },
    { de: '1–2 nested clauses = natural; 3–4 = too much', text: 'Write elegant, not overloaded, B2 sentences' }
  ],

  // ---------- Vocabulary (51 items — uploaded chapter-38 list) ----------
  vocab: [
    { de: 'Erpressung', art: 'die', gender: 'f', plural: 'Erpressungen', pos: 'noun', level: 'B2', register: 'written', en: 'blackmail, extortion', hi: 'ब्लैकमेल', ex: 'Die Erpressung wurde der Polizei gemeldet.', exEn: 'The blackmail was reported to the police.', exHi: 'Blackmail ki soochna police ko di gayi.', ex2: 'Sie haben die Erpressung aufgeklärt.', ex2En: 'They\'ve solved the extortion case.', ex2Hi: 'Unhone blackmail ka maamla suljhaaya hai.' },
    { de: 'erstarren', pos: 'verb', level: 'B2', register: 'written', en: 'to freeze, stiffen', hi: 'जम जाना', ex: 'Sie erstarrte vor Schreck.', exEn: 'She froze in shock.', exHi: 'Woh dar ke maare jam gayi.', ex2: 'Er ist plötzlich erstarrt.', ex2En: 'He\'s suddenly frozen.', ex2Hi: 'Woh achaanak jam gaya hai.', conj: { praesens: 'erstarrt', praeteritum: 'erstarrte', perfekt: 'ist erstarrt' } },
    { de: 'erwähnen', pos: 'verb', level: 'B2', register: 'both', en: 'to mention', hi: 'उल्लेख करना', ex: 'Sie erwähnte das Problem kurz.', exEn: 'She briefly mentioned the problem.', exHi: 'Usne samasya ka sankshep mein ullekh kiya.', ex2: 'Er hat den Termin erwähnt.', ex2En: 'He\'s mentioned the appointment.', ex2Hi: 'Usne appointment ka ullekh kiya hai.', conj: { praesens: 'erwähnt', praeteritum: 'erwähnte', perfekt: 'hat erwähnt' } },
    { de: 'Evolution', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'evolution', hi: 'विकास', ex: 'Die Evolution des Menschen dauerte Jahrmillionen.', exEn: 'Human evolution took millions of years.', exHi: 'Manushya ka vikaas laakhon saal chala.', ex2: 'Sie haben über die Evolution diskutiert.', ex2En: 'They\'ve discussed evolution.', ex2Hi: 'Unhone vikaas par charcha ki hai.' },
    { de: 'fassen', pos: 'verb', level: 'B2', register: 'both', en: 'to grasp, seize, compose oneself', hi: 'पकड़ना, संभलना', ex: 'Sie fasste sich schnell.', exEn: 'She composed herself quickly.', exHi: 'Woh jaldi sambhal gayi.', ex2: 'Er hat den Dieb gefasst.', ex2En: 'He\'s caught the thief.', ex2Hi: 'Usne chor ko pakda hai.', conj: { praesens: 'fasst', praeteritum: 'fasste', perfekt: 'hat gefasst' } },
    { de: 'Fertigstellung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'completion, finishing', hi: 'समापन', ex: 'Die Fertigstellung des Projekts verzögerte sich.', exEn: 'The completion of the project was delayed.', exHi: 'Project ka samaapan der se hua.', ex2: 'Sie haben die Fertigstellung gefeiert.', ex2En: 'They\'ve celebrated the completion.', ex2Hi: 'Unhone samaapan manaaya hai.' },
    { de: 'Feststellung', art: 'die', gender: 'f', plural: 'Feststellungen', pos: 'noun', level: 'B2', register: 'both', en: 'observation, statement', hi: 'अवलोकन', ex: 'Jetzt füge eine zweite Feststellung hinzu.', exEn: 'Now add a second observation.', exHi: 'Ab ek doosra avlokan jodo.', ex2: 'Ihre Feststellung war korrekt.', ex2En: 'Her observation was correct.', ex2Hi: 'Uska avlokan sahi tha.' },
    { de: 'geheimnisvoll', pos: 'adjective', level: 'B2', register: 'both', en: 'mysterious', hi: 'रहस्यमय', ex: 'Das Haus wirkte geheimnisvoll.', exEn: 'The house seemed mysterious.', exHi: 'Ghar rahasyamay lagta tha.', ex2: 'Sie haben eine geheimnisvolle Nachricht erhalten.', ex2En: 'They\'ve received a mysterious message.', ex2Hi: 'Unhein ek rahasyamay sandesh mila hai.' },
    { de: 'gelungen', pos: 'adjective', level: 'B2', register: 'both', en: 'successful, well done', hi: 'सफल', ex: 'Das war ein gelungenes Konzert.', exEn: 'That was a successful concert.', exHi: 'Yeh ek safal concert tha.', ex2: 'Sie haben eine gelungene Präsentation gehalten.', ex2En: 'They\'ve given a successful presentation.', ex2Hi: 'Unhone ek safal prastuti di hai.' },
    { de: 'Generation', art: 'die', gender: 'f', plural: 'Generationen', pos: 'noun', level: 'B2', register: 'both', en: 'generation', hi: 'पीढ़ी', ex: 'Diese Generation denkt anders.', exEn: 'This generation thinks differently.', exHi: 'Yeh peedhi alag soch rakhti hai.', ex2: 'Sie haben Traditionen weitergegeben.', ex2En: 'They\'ve passed on traditions.', ex2Hi: 'Unhone parampara aage badhaayi hai.' },
    { de: 'generell', pos: 'adjective', level: 'B2', register: 'written', en: 'general, generally', hi: 'सामान्यतः', ex: 'Generell war die Reaktion positiv.', exEn: 'Generally, the reaction was positive.', exHi: 'Saamaanyatah, pratikriya sakaraatmak thi.', ex2: 'Sie haben generell zugestimmt.', ex2En: 'They\'ve generally agreed.', ex2Hi: 'Unhone saamaanyatah sahmati di hai.' },
    { de: 'gestehen', pos: 'verb', level: 'B2', register: 'both', en: 'to confess, admit', hi: 'स्वीकार करना', ex: 'Er gestand den Fehler.', exEn: 'He confessed the mistake.', exHi: 'Usne galti sweekaar ki.', ex2: 'Sie hat ihre Schuld gestanden.', ex2En: 'She\'s confessed her guilt.', ex2Hi: 'Usne apna dosh sweekaar kiya hai.', conj: { praesens: 'gesteht', praeteritum: 'gestand', perfekt: 'hat gestanden' } },
    { de: 'glänzen', pos: 'verb', level: 'B2', register: 'both', en: 'to shine, sparkle', hi: 'चमकना', ex: 'Der Boden glänzte nach der Reinigung.', exEn: 'The floor shone after cleaning.', exHi: 'Safaai ke baad farsh chamak raha tha.', ex2: 'Sie hat mit ihrer Präsentation geglänzt.', ex2En: 'She\'s shone with her presentation.', ex2Hi: 'Usne apni prastuti se chamak dikhaayi hai.', conj: { praesens: 'glänzt', praeteritum: 'glänzte', perfekt: 'hat geglänzt' } },
    { de: 'Haltung', art: 'die', gender: 'f', plural: 'Haltungen', pos: 'noun', level: 'B2', register: 'both', en: 'attitude, posture', hi: 'रवैया, मुद्रा', ex: 'Ihre Haltung war respektvoll.', exEn: 'Her attitude was respectful.', exHi: 'Uska rawaiya aadar bhara tha.', ex2: 'Sie haben eine klare Haltung gezeigt.', ex2En: 'They\'ve shown a clear attitude.', ex2Hi: 'Unhone ek spasht rawaiya dikhaaya hai.' },
    { de: 'Hauptattraktion', art: 'die', gender: 'f', plural: 'Hauptattraktionen', pos: 'noun', level: 'B2', register: 'both', en: 'main attraction', hi: 'मुख्य आकर्षण', ex: 'Die Hauptattraktion war der Wasserfall.', exEn: 'The main attraction was the waterfall.', exHi: 'Mukhya aakarshan jharna tha.', ex2: 'Sie haben die Hauptattraktion besucht.', ex2En: 'They\'ve visited the main attraction.', ex2Hi: 'Unhone mukhya aakarshan ka daura kiya hai.' },
    { de: 'Hauptfigur', art: 'die', gender: 'f', plural: 'Hauptfiguren', pos: 'noun', level: 'B2', register: 'written', en: 'main character', hi: 'मुख्य पात्र', ex: 'Die Hauptfigur des Romans war komplex.', exEn: 'The main character of the novel was complex.', exHi: 'Upanyaas ka mukhya paatra jatil tha.', ex2: 'Sie haben die Hauptfigur analysiert.', ex2En: 'They\'ve analysed the main character.', ex2Hi: 'Unhone mukhya paatra ka vishleshan kiya hai.' },
    { de: 'hinsehen', pos: 'verb', level: 'B2', register: 'both', en: 'to look closely', hi: 'ध्यान से देखना', ex: 'Sie sah genau hin.', exEn: 'She looked closely.', exHi: 'Usne dhyaan se dekha.', ex2: 'Er hat lange hingesehen.', ex2En: 'He\'s looked closely for a long time.', ex2Hi: 'Usne lambe samay tak dhyaan se dekha hai.', conj: { praesens: 'sieht hin', praeteritum: 'sah hin', perfekt: 'hat hingesehen' } },
    { de: 'Honorarprofessur', art: 'die', gender: 'f', plural: 'Honorarprofessuren', pos: 'noun', level: 'B2', register: 'written', en: 'honorary professorship', hi: 'मानद प्रोफेसरशिप', ex: 'Sie erhielt eine Honorarprofessur.', exEn: 'She received an honorary professorship.', exHi: 'Use maanad professorship mili.', ex2: 'Er hat eine Honorarprofessur angenommen.', ex2En: 'He\'s accepted an honorary professorship.', ex2Hi: 'Usne maanad professorship sweekaar ki hai.' },
    { de: 'Inspiration', art: 'die', gender: 'f', plural: 'Inspirationen', pos: 'noun', level: 'B2', register: 'both', en: 'inspiration', hi: 'प्रेरणा', ex: 'Die Reise war eine große Inspiration.', exEn: 'The trip was a great inspiration.', exHi: 'Yatra ek badi prerna thi.', ex2: 'Sie haben Inspiration gefunden.', ex2En: 'They\'ve found inspiration.', ex2Hi: 'Unhein prerna mili hai.' },
    { de: 'klug', pos: 'adjective', level: 'B2', register: 'both', en: 'clever, smart', hi: 'चतुर', ex: 'Sie war sehr klug.', exEn: 'She was very clever.', exHi: 'Woh bahut chatur thi.', ex2: 'Er hat klug reagiert.', ex2En: 'He\'s reacted cleverly.', ex2Hi: 'Usne chaturaai se pratikriya di hai.' },
    { de: 'knirschen', pos: 'verb', level: 'B2', register: 'both', en: 'to crunch, grind', hi: 'चरमराना', ex: 'Der Schnee knirschte unter ihren Füßen.', exEn: 'The snow crunched under her feet.', exHi: 'Barf uske paanv ke neeche charmaraayi.', ex2: 'Er hat mit den Zähnen geknirscht.', ex2En: 'He\'s ground his teeth.', ex2Hi: 'Usne apne daant peese hain.', conj: { praesens: 'knirscht', praeteritum: 'knirschte', perfekt: 'hat geknirscht' } },
    { de: 'knurren', pos: 'verb', level: 'B2', register: 'both', en: 'to growl, rumble', hi: 'गुर्राना', ex: 'Der Hund knurrte leise.', exEn: 'The dog growled quietly.', exHi: 'Kutta dheere se gurraaya.', ex2: 'Sein Magen hat geknurrt.', ex2En: 'His stomach has rumbled.', ex2Hi: 'Uska pet gudguda raha hai.', conj: { praesens: 'knurrt', praeteritum: 'knurrte', perfekt: 'hat geknurrt' } },
    { de: 'mahlen', pos: 'verb', level: 'B2', register: 'both', en: 'to grind, mill', hi: 'पीसना', ex: 'Sie mahlte den Kaffee frisch.', exEn: 'She ground the coffee fresh.', exHi: 'Usne taazi coffee pisi.', ex2: 'Die Mühle hat Getreide gemahlen.', ex2En: 'The mill has ground grain.', ex2Hi: 'Chakki ne anaaj pisa hai.', conj: { praesens: 'mahlt', praeteritum: 'mahlte', perfekt: 'hat gemahlen' } },
    { de: 'Menschheit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'humanity, mankind', hi: 'मानवता', ex: 'Die Menschheit steht vor großen Herausforderungen.', exEn: 'Humanity faces great challenges.', exHi: 'Maanavata bade chunautiyon ka saamna kar rahi hai.', ex2: 'Sie haben über die Zukunft der Menschheit gesprochen.', ex2En: 'They\'ve talked about the future of humanity.', ex2Hi: 'Unhone maanavata ke bhavishya ke baare mein baat ki hai.' },
    { de: 'Mischung', art: 'die', gender: 'f', plural: 'Mischungen', pos: 'noun', level: 'B2', register: 'both', en: 'mixture, mix', hi: 'मिश्रण', ex: 'Die Mischung aus Farben war interessant.', exEn: 'The mixture of colors was interesting.', exHi: 'Rangon ka mishran dilchasp tha.', ex2: 'Sie haben eine neue Mischung entwickelt.', ex2En: 'They\'ve developed a new mixture.', ex2Hi: 'Unhone ek naya mishran vikasit kiya hai.' },
    { de: 'Musikrichtung', art: 'die', gender: 'f', plural: 'Musikrichtungen', pos: 'noun', level: 'B2', register: 'both', en: 'music genre', hi: 'संगीत शैली', ex: 'Diese Musikrichtung war neu für sie.', exEn: 'This music genre was new to her.', exHi: 'Yeh sangeet shaili uske liye nayi thi.', ex2: 'Sie haben verschiedene Musikrichtungen entdeckt.', ex2En: 'They\'ve discovered various music genres.', ex2Hi: 'Unhone vibhinn sangeet shailiyaan khoji hain.' },
    { de: 'Musikveranstaltung', art: 'die', gender: 'f', plural: 'Musikveranstaltungen', pos: 'noun', level: 'B2', register: 'written', en: 'music event', hi: 'संगीत आयोजन', ex: 'Die Musikveranstaltung zog viele Besucher an.', exEn: 'The music event attracted many visitors.', exHi: 'Sangeet aayojan ne kai darshakon ko aakarshit kiya.', ex2: 'Sie haben eine Musikveranstaltung organisiert.', ex2En: 'They\'ve organised a music event.', ex2Hi: 'Unhone ek sangeet aayojan kiya hai.' },
    { de: 'nagen', pos: 'verb', level: 'B2', register: 'both', en: 'to gnaw', hi: 'कुतरना', ex: 'Die Maus nagte am Kabel.', exEn: 'The mouse gnawed at the cable.', exHi: 'Chuhe ne cable kutra.', ex2: 'Der Zweifel hat an ihr genagt.', ex2En: 'Doubt has gnawed at her.', ex2Hi: 'Sandeh ne use kutra hai.', conj: { praesens: 'nagt', praeteritum: 'nagte', perfekt: 'hat genagt' } },
    { de: 'Organismus', art: 'der', gender: 'm', plural: 'Organismen', pos: 'noun', level: 'B2', register: 'written', en: 'organism', hi: 'जीव', ex: 'Dieser Organismus lebt im Wasser.', exEn: 'This organism lives in water.', exHi: 'Yeh jeev paani mein rehta hai.', ex2: 'Sie haben den Organismus untersucht.', ex2En: 'They\'ve examined the organism.', ex2Hi: 'Unhone jeev ki jaanch ki hai.' },
    { de: 'originell', pos: 'adjective', level: 'B2', register: 'both', en: 'original, inventive', hi: 'मौलिक', ex: 'Die Idee war sehr originell.', exEn: 'The idea was very original.', exHi: 'Vichaar bahut maulik tha.', ex2: 'Sie haben ein originelles Design entwickelt.', ex2En: 'They\'ve developed an original design.', ex2Hi: 'Unhone ek maulik design vikasit kiya hai.' },
    { de: 'Pflanzensammlung', art: 'die', gender: 'f', plural: 'Pflanzensammlungen', pos: 'noun', level: 'B2', register: 'written', en: 'plant collection', hi: 'पौधों का संग्रह', ex: 'Die Pflanzensammlung war beeindruckend.', exEn: 'The plant collection was impressive.', exHi: 'Paudhon ka sangrah prabhaavshaali tha.', ex2: 'Sie haben die Pflanzensammlung erweitert.', ex2En: 'They\'ve expanded the plant collection.', ex2Hi: 'Unhone paudhon ka sangrah badhaaya hai.' },
    { de: 'Präsentation', art: 'die', gender: 'f', plural: 'Präsentationen', pos: 'noun', level: 'B2', register: 'both', en: 'presentation', hi: 'प्रस्तुति', ex: 'Ihre Präsentation war gut strukturiert.', exEn: 'Her presentation was well structured.', exHi: 'Uski prastuti achhi tarah se strukchur ki gayi thi.', ex2: 'Sie haben eine Präsentation vorbereitet.', ex2En: 'They\'ve prepared a presentation.', ex2Hi: 'Unhone ek prastuti taiyaar ki hai.' },
    { de: 'Rechenschaft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'accountability', hi: 'जवाबदेही', ex: 'Sie mussten Rechenschaft ablegen.', exEn: 'They had to give an account.', exHi: 'Unhein jawabdehi deni padi.', ex2: 'Er hat für seine Fehler Rechenschaft abgelegt.', ex2En: 'He\'s taken accountability for his mistakes.', ex2Hi: 'Usne apni galtiyon ki jawabdehi li hai.' },
    { de: 'rechnen', pos: 'verb', level: 'B2', register: 'both', en: 'to calculate, count on', hi: 'गणना करना, भरोसा करना', ex: 'Sie rechnete mit einem guten Ergebnis.', exEn: 'She counted on a good result.', exHi: 'Usne ek achhe parinaam ki umeed ki.', ex2: 'Er hat die Kosten gerechnet.', ex2En: 'He\'s calculated the costs.', ex2Hi: 'Usne lagat ki ganana ki hai.', conj: { praesens: 'rechnet', praeteritum: 'rechnete', perfekt: 'hat gerechnet' } },
    { de: 'reifen', pos: 'verb', level: 'B2', register: 'both', en: 'to ripen, mature', hi: 'पकना', ex: 'Die Früchte reiften im Sommer.', exEn: 'The fruits ripened in summer.', exHi: 'Phal garmiyon mein pake.', ex2: 'Seine Persönlichkeit ist gereift.', ex2En: 'His personality has matured.', ex2Hi: 'Uska vyaktitva pariplav hua hai.', conj: { praesens: 'reift', praeteritum: 'reifte', perfekt: 'ist gereift' } },
    { de: 'Resignation', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'resignation', hi: 'त्याग, हार मान लेना', ex: 'Ihre Resignation war spürbar.', exEn: 'Her resignation was palpable.', exHi: 'Uski haar mahsoos hoti thi.', ex2: 'Sie haben ihre Resignation überwunden.', ex2En: 'They\'ve overcome their resignation.', ex2Hi: 'Unhone apni haar par kaabu paa liya hai.' },
    { de: 'Schlossanlage', art: 'die', gender: 'f', plural: 'Schlossanlagen', pos: 'noun', level: 'B2', register: 'written', en: 'palace complex', hi: 'महल परिसर', ex: 'Die Schlossanlage war riesig.', exEn: 'The palace complex was huge.', exHi: 'Mahal parisar bahut bada tha.', ex2: 'Sie haben die Schlossanlage besichtigt.', ex2En: 'They\'ve toured the palace complex.', ex2Hi: 'Unhone mahal parisar ka daura kiya hai.' },
    { de: 'Schlossbesichtigung', art: 'die', gender: 'f', plural: 'Schlossbesichtigungen', pos: 'noun', level: 'B2', register: 'written', en: 'palace tour', hi: 'महल भ्रमण', ex: 'Die Schlossbesichtigung dauerte zwei Stunden.', exEn: 'The palace tour lasted two hours.', exHi: 'Mahal bhraman do ghante chala.', ex2: 'Sie haben eine Schlossbesichtigung gebucht.', ex2En: 'They\'ve booked a palace tour.', ex2Hi: 'Unhone mahal bhraman book kiya hai.' },
    { de: 'schwitzen', pos: 'verb', level: 'B2', register: 'both', en: 'to sweat', hi: 'पसीना आना', ex: 'Sie schwitzte in der Hitze.', exEn: 'She sweated in the heat.', exHi: 'Garmi mein use pasina aaya.', ex2: 'Er hat beim Sport geschwitzt.', ex2En: 'He\'s sweated during exercise.', ex2Hi: 'Vyaayaam ke dauraan use pasina aaya hai.', conj: { praesens: 'schwitzt', praeteritum: 'schwitzte', perfekt: 'hat geschwitzt' } },
    { de: 'skeptisch', pos: 'adjective', level: 'B2', register: 'both', en: 'sceptical', hi: 'संशयी', ex: 'Sie war skeptisch gegenüber dem Plan.', exEn: 'She was sceptical about the plan.', exHi: 'Woh yojana ke prati sanshayi thi.', ex2: 'Sie haben skeptisch reagiert.', ex2En: 'They\'ve reacted sceptically.', ex2Hi: 'Unhone sanshay se pratikriya di hai.' },
    { de: 'Sportereignis', art: 'das', gender: 'n', plural: 'Sportereignisse', pos: 'noun', level: 'B2', register: 'written', en: 'sporting event', hi: 'खेल आयोजन', ex: 'Das Sportereignis war ein großer Erfolg.', exEn: 'The sporting event was a great success.', exHi: 'Khel aayojan ek badi safalta thi.', ex2: 'Sie haben am Sportereignis teilgenommen.', ex2En: 'They\'ve taken part in the sporting event.', ex2Hi: 'Unhone khel aayojan mein bhaag liya hai.' },
    { de: 'Sportveranstaltung', art: 'die', gender: 'f', plural: 'Sportveranstaltungen', pos: 'noun', level: 'B2', register: 'both', en: 'sports event', hi: 'खेल आयोजन', ex: 'Die Sportveranstaltung fand im Stadion statt.', exEn: 'The sports event took place in the stadium.', exHi: 'Khel aayojan stadium mein hua.', ex2: 'Sie haben eine Sportveranstaltung organisiert.', ex2En: 'They\'ve organised a sports event.', ex2Hi: 'Unhone ek khel aayojan kiya hai.' },
    { de: 'stapfen', pos: 'verb', level: 'B2', register: 'both', en: 'to trudge, plod', hi: 'भारी कदमों से चलना', ex: 'Sie stapfte durch den Schnee.', exEn: 'She trudged through the snow.', exHi: 'Woh barf mein bhaari kadmon se chali.', ex2: 'Er ist müde nach Hause gestapft.', ex2En: 'He\'s trudged home tiredly.', ex2Hi: 'Woh thak kar ghar tak chala hai.', conj: { praesens: 'stapft', praeteritum: 'stapfte', perfekt: 'ist gestapft' } },
    { de: 'Strömung', art: 'die', gender: 'f', plural: 'Strömungen', pos: 'noun', level: 'B2', register: 'both', en: 'current, flow', hi: 'धारा', ex: 'Die Strömung war sehr stark.', exEn: 'The current was very strong.', exHi: 'Dhaara bahut tez thi.', ex2: 'Sie haben gegen die Strömung geschwommen.', ex2En: 'They\'ve swum against the current.', ex2Hi: 'Unhone dhaara ke khilaaf taira hai.' },
    { de: 'ticken', pos: 'verb', level: 'B2', register: 'both', en: 'to tick', hi: 'टिक-टिक करना', ex: 'Die Uhr tickte laut.', exEn: 'The clock ticked loudly.', exHi: 'Ghadi zor se tik-tik kar rahi thi.', ex2: 'Die Bombe hat getickt.', ex2En: 'The bomb has ticked.', ex2Hi: 'Bomb tik-tik kar raha hai.', conj: { praesens: 'tickt', praeteritum: 'tickte', perfekt: 'hat getickt' } },
    { de: 'Tierspur', art: 'die', gender: 'f', plural: 'Tierspuren', pos: 'noun', level: 'B2', register: 'both', en: 'animal track', hi: 'जानवर का निशान', ex: 'Sie entdeckten eine Tierspur im Schnee.', exEn: 'They discovered an animal track in the snow.', exHi: 'Unhone barf mein jaanwar ka nishaan khoja.', ex2: 'Er hat der Tierspur gefolgt.', ex2En: 'He\'s followed the animal track.', ex2Hi: 'Usne jaanwar ke nishaan ka peechha kiya hai.' },
    { de: 'Toilettenspülung', art: 'die', gender: 'f', plural: 'Toilettenspülungen', pos: 'noun', level: 'B2', register: 'both', en: 'toilet flush', hi: 'शौचालय फ्लश', ex: 'Die Toilettenspülung war kaputt.', exEn: 'The toilet flush was broken.', exHi: 'Toilet flush toota hua tha.', ex2: 'Sie haben die Toilettenspülung repariert.', ex2En: 'They\'ve repaired the toilet flush.', ex2Hi: 'Unhone toilet flush theek kiya hai.' },
    { de: 'Überlegung', art: 'die', gender: 'f', plural: 'Überlegungen', pos: 'noun', level: 'B2', register: 'both', en: 'consideration, reflection', hi: 'विचार', ex: 'Nach reiflicher Überlegung entschied sie sich.', exEn: 'After careful consideration, she decided.', exHi: 'Gehri soch ke baad, usne faisla kiya.', ex2: 'Sie haben ihre Überlegungen geteilt.', ex2En: 'They\'ve shared their considerations.', ex2Hi: 'Unhone apne vichaar saanjha kiye hain.' },
    { de: 'Übertragung', art: 'die', gender: 'f', plural: 'Übertragungen', pos: 'noun', level: 'B2', register: 'both', en: 'transmission, transfer', hi: 'प्रसारण, स्थानांतरण', ex: 'Die Übertragung des Spiels war live.', exEn: 'The transmission of the game was live.', exHi: 'Khel ka prasaran live tha.', ex2: 'Sie haben die Übertragung der Daten abgeschlossen.', ex2En: 'They\'ve completed the transfer of the data.', ex2Hi: 'Unhone data ka sthaanaantaran poora kiya hai.' },
    { de: 'unbekannt', pos: 'adjective', level: 'B2', register: 'both', en: 'unknown', hi: 'अज्ञात', ex: 'Der Autor blieb unbekannt.', exEn: 'The author remained unknown.', exHi: 'Lekhak agyaat raha.', ex2: 'Sie haben ein unbekanntes Gebiet erforscht.', ex2En: 'They\'ve explored an unknown territory.', ex2Hi: 'Unhone ek agyaat kshetra ka shodh kiya hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was sind Verschachtelte Relativsätze?',
      body: [ 'German often places one relative clause inside another, or chains multiple relative clauses in one sentence.' ],
      table: {
        head: ['Simple', 'Nested'],
        rows: [
          ['<span class="de">Der Mann, der dort steht, ist Lehrer.</span>', '<span class="de">Der Mann, dessen Tochter, die in Berlin studiert, Ärztin werden möchte, arbeitet hier.</span>']
        ]
      },
      hinglish: 'German mein aksar ek relative clause doosre ke andar aa jaata hai, ya ek hi sentence mein kai relative clauses jud jaate hain. Reading mein yeh dikhte hain, isliye inhe tod kar padhna aana chahiye.'
    },
    {
      title: 'Schritt für Schritt aufbauen (Building Step by Step)',
      body: [ 'Start with the main sentence, then add relative clauses one at a time.' ],
      table: {
        head: ['Step', 'Sentence'],
        rows: [
          ['Start', '<span class="de">Der Professor arbeitet an der Universität.</span>'],
          ['+1 clause', '<span class="de">Der Professor, der an der Universität arbeitet, ...</span>'],
          ['+2 clauses', '<span class="de">Der Professor, der an der Universität arbeitet, deren Bibliothek modern ist, ...</span>']
        ]
      },
      hinglish: 'Aise sentences banane ka tarika yeh hai \u2014 pehle simple main sentence likho, phir ek-ek karke relative clause jodo. Ek saath sab likhne ki koshish mein hi galti hoti hai.'
    },
    {
      title: 'Den Bezug finden (Finding the Antecedent)',
      body: [ 'Rule: every relative pronoun belongs to exactly ONE noun. Always ask: which noun does this pronoun describe?' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Die Studentin, deren Bruder, der in München lebt, Ingenieur ist...</span>']
        ]
      },
      hinglish: 'Ek rule yaad rakho \u2014 har relative pronoun sirf <b>ek</b> noun se juda hota hai. Isliye jab bhi confuse ho, ruk kar poochho: yeh pronoun kis noun ki baat kar raha hai? Wahi noun uska gender aur number tay karta hai.'
    },
    {
      title: 'Satzstruktur (Sentence Structure)',
      body: [ 'The hierarchy: main clause → relative clause → nested relative clause → main clause continues.' ],
      table: {
        head: ['Hierarchy'],
        rows: [
          ['Main Clause → Relative Clause → Nested Relative Clause → Main Clause continues']
        ]
      },
      hinglish: 'Structure ko layers ki tarah socho \u2014 main clause shuru hota hai, uske andar relative clause aata hai, uske andar ek aur, aur phir main clause wahin se aage badhta hai jahan ruka tha.'
    },
    {
      title: 'Lesestrategie (Reading Strategy)',
      body: [ 'Never read nested relative clauses word by word. Follow this strategy instead.' ],
      table: {
        head: ['Step', 'Action'],
        rows: [
          ['1', 'Find the main sentence'],
          ['2', 'Find the first relative clause'],
          ['3', 'Find the second relative clause'],
          ['4', 'Return to the main sentence']
        ]
      },
      hinglish: 'Aise sentences ko shabd-dar-shabd padhne se sirf confusion hoti hai. Iske bajaay pehle main sentence dhoondo, phir ek-ek relative clause alag karke samjho, aur end mein main sentence par wapas aao.'
    },
    {
      title: 'Schreibstrategie (Writing Strategy)',
      body: [ 'One nested clause is natural. Three or four is usually too difficult for the reader.' ],
      note: 'Elegant B2 writing uses nesting sparingly — clarity matters more than complexity.',
      hinglish: 'Padhne ke liye inhe samajhna zaroori hai, par khud likhte waqt ek nested clause hi kaafi hai. Teen-chaar levels reader ke liye bhaari ho jaate hain \u2014 tab do simple sentences behtar rehte hain.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These come from breaking verb-final order inside a nested clause, attaching a pronoun to the wrong noun, dropping the commas that mark the inner clause, leaving the main clause unfinished, or taking the case from the wrong verb.' ],
      mistakes: [
        { wrong: 'Der Mann, dessen Tochter, die studiert in Berlin, Ärztin ist, arbeitet hier.', right: 'Der Mann, dessen Tochter, die in Berlin studiert, Ärztin ist, arbeitet hier.', why: 'A nested relative clause is still a subordinate clause, so its verb goes to the very end \u2014 <i>die in Berlin studiert</i>, not <i>die studiert in Berlin</i>.' },
        { wrong: 'Der Professor, der an der Universität arbeitet, dessen Bibliothek modern ist, ist bekannt.', right: 'Der Professor, der an der Universität arbeitet, deren Bibliothek modern ist, ist bekannt.', why: 'The second pronoun points back to <i>die Universit\u00e4t</i>, which is feminine \u2014 so it must be <b>deren</b>, not dessen. In a nested sentence always check which noun each pronoun actually attaches to.' },
        { wrong: 'Die Studentin, deren Bruder der in München lebt Ingenieur ist, kommt heute.', right: 'Die Studentin, deren Bruder, der in München lebt, Ingenieur ist, kommt heute.', why: 'Every nested clause needs a comma on BOTH sides. Without them the reader cannot see where the inner clause starts and stops.' },
        { wrong: 'Der Mann, der dort steht, Lehrer.', right: 'Der Mann, der dort steht, ist Lehrer.', why: 'Once the relative clause closes, the main clause still has to finish \u2014 it needs its own verb (ist).' },
        { wrong: 'Der Kollege, den ich vertraue, arbeitet in dem Büro, das neu ist.', right: 'Der Kollege, dem ich vertraue, arbeitet in dem Büro, das neu ist.', why: '<i>vertrauen</i> takes the Dativ, so the pronoun is <b>dem</b>. Each clause picks its case from its OWN verb, not from the main clause.' }
      ],
      hinglish: 'Yeh galtiyan paanch tarah se hoti hain \u2014 nested clause mein verb ko end mein na bhejna, pronoun ko galat noun se jod dena, inner clause ke dono taraf comma chhod dena, main clause ka verb bhool jaana, ya case galat verb se le lena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Confidently navigating nested relative clauses is essential for authentic Goethe B2 reading comprehension.' ],
      note: 'Memory trick: Don\'t panic. Find the MAIN sentence first. Then solve ONE relative clause at a time. Every relative pronoun belongs to ONE noun.',
      hinglish: 'Goethe B2 ki reading mein aise lambe sentences aate hain, isliye inhe todna aana zaroori hai. Ghabrao mat \u2014 pehle main sentence, phir ek-ek clause.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Ankündigung: Musikveranstaltung im Schlosspark',
    titleEn: 'Announcement: music event in the palace park',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Musikveranstaltung', role: 'plain', en: 'music event', hi: 'संगीत आयोजन', type: 'Noun · fem.', why: 'die Musikveranstaltung (this chapter).' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-connector', en: 'that', hi: 'जो', type: 'Relativpronomen · Nom. (äußerer Relativsatz)', why: 'The outer relative clause (die … stattfindet) attaches to Musikveranstaltung.' },
      { w: 'jedes', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Jahr', role: 'plain', en: 'year', hi: 'साल', type: 'Noun · neut.' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · Dat.' },
      { w: 'Schlossanlage', role: 'plain', en: 'palace grounds (Satzende)', hi: 'महल परिसर (Satzende)', type: 'Noun · fem.', why: 'die Schlossanlage (this chapter).' },
      { w: 'stattfindet', role: 'plain', en: 'takes place (Satzende)', hi: 'होता है (Satzende)', type: 'Verb · stattfinden (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'zieht', role: 'plain', en: 'attracts (linke Klammer)', hi: 'आकर्षित करता है (बायाँ कोष्ठक)', type: 'Verb · anziehen (Linke Klammer)' },
      { w: 'Besucher', role: 'plain', en: 'visitors', hi: 'दर्शकों', type: 'Noun · plural' },
      { w: 'an', role: 'plain', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix · anziehen (Satzende)' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-connector', en: 'who', hi: 'जो', type: 'Relativpronomen · Nom. (verschachtelter Relativsatz)', why: 'A second relative clause nests directly onto Besucher, right after the first clause closes (this chapter).' },
      { w: 'sonst', role: 'plain', en: 'otherwise', hi: 'अन्यथा', type: 'Adverb' },
      { w: 'selten', role: 'plain', en: 'rarely', hi: 'शायद ही कभी', type: 'Adverb' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Konzert', role: 'plain', en: 'concert (Satzende)', hi: 'संगीत कार्यक्रम (Satzende)', type: 'Noun · neut.' },
      { w: 'besuchen', role: 'plain', en: 'attend (Satzende)', hi: 'जाते हैं (Satzende)', type: 'Verb · besuchen (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Komponist', role: 'plain', en: 'composer', hi: 'संगीतकार', type: 'Noun · masc.', why: 'der/die Komponist/in (this chapter, recycled).' },
      { w: ',', plain: true },
      { w: 'dessen', role: 'r-connector', en: 'whose', hi: 'जिसकी', type: 'Relativpronomen · Genitiv (äußerer Relativsatz)' },
      { w: 'Werk', role: 'plain', en: 'work', hi: 'रचना', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'das', role: 'r-connector', en: 'that', hi: 'जो', type: 'Relativpronomen · Akk. (verschachtelter Relativsatz)', why: 'This inner relative clause nests inside the outer one, describing Werk before the outer clause resumes.' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective' },
      { w: 'Kritiker', role: 'plain', en: 'critics', hi: 'आलोचक', type: 'Noun · plural' },
      { w: 'als', role: 'plain', en: 'as', hi: 'के रूप में', type: 'Preposition' },
      { w: 'originell', role: 'plain', en: 'original (Satzende)', hi: 'मौलिक (Satzende)', type: 'Adjective' },
      { w: 'bezeichnen', role: 'plain', en: 'describe (Satzende)', hi: 'बताते हैं (Satzende)', type: 'Verb · bezeichnen (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'eröffnet', role: 'plain', en: 'opens (linke Klammer)', hi: 'शुरू करता है (बायाँ कोष्ठक)', type: 'Verb · eröffnen (Linke Klammer)' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Abend', role: 'plain', en: 'evening (Satzende)', hi: 'शाम (Satzende)', type: 'Noun · masc.' },
      { w: 'persönlich', role: 'plain', en: 'personally (Satzende)', hi: 'व्यक्तिगत रूप से (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (plural)', hi: 'यह', type: 'Article' },
      { w: 'Karten', role: 'plain', en: 'tickets', hi: 'टिकट', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'deren', role: 'r-connector', en: 'whose', hi: 'जिसकी', type: 'Relativpronomen · Genitiv Plural', why: 'deren for feminine/plural genitive — nested inside another relative clause here (this chapter).' },
      { w: 'Preis', role: 'plain', en: 'price', hi: 'क़ीमत', type: 'Noun · masc.' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Pronoun' },
      { w: 'überrascht', role: 'plain', en: 'surprised', hi: 'हैरान किया', type: 'Verb · überraschen' },
      { w: 'hat', role: 'plain', en: 'has (Satzende)', hi: 'है (Satzende)', type: 'Verb · haben (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-connector', en: 'which', hi: 'जो', type: 'Relativpronomen · Nom. Plural' },
      { w: 'aber', role: 'plain', en: 'but', hi: 'लेकिन', type: 'Conjunction' },
      { w: 'trotzdem', role: 'plain', en: 'nevertheless', hi: 'फिर भी', type: 'Adverb' },
      { w: 'reißenden', role: 'plain', en: 'brisk', hi: 'तेज़', type: 'Adjective' },
      { w: 'Absatz', role: 'plain', en: 'sales (Satzende)', hi: 'बिक्री (Satzende)', type: 'Noun · masc.' },
      { w: 'finden', role: 'plain', en: 'find (Satzende)', hi: 'पाती हैं (Satzende)', type: 'Verb · finden (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'sind', role: 'plain', en: 'are', hi: 'हैं', type: 'Verb · sein' },
      { w: 'bereits', role: 'plain', en: 'already', hi: 'पहले से', type: 'Adverb' },
      { w: 'ausverkauft', role: 'plain', en: 'sold out (Satzende)', hi: 'बिक चुके (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Veranstalter', role: 'plain', en: 'organisers', hi: 'आयोजक', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-connector', en: 'who', hi: 'जो', type: 'Relativpronomen · Nom.' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'so', role: 'plain', en: 'so', hi: 'इतनी', type: 'Adverb' },
      { w: 'viel', role: 'plain', en: 'much', hi: 'ज़्यादा', type: 'Adjective' },
      { w: 'Andrang', role: 'plain', en: 'demand (Satzende)', hi: 'माँग (Satzende)', type: 'Noun · masc.' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'gerechnet', role: 'plain', en: 'expected (Satzende)', hi: 'उम्मीद की थी (Satzende)', type: 'Verb · Partizip II (Nebensatz, Satzende)' },
      { w: 'hatten', role: 'plain', en: 'had (Satzende)', hi: 'थी (Satzende)', type: 'Verb · haben (Plusquamperfekt, Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'prüfen', role: 'plain', en: 'are examining', hi: 'जाँच रहे हैं', type: 'Verb · prüfen' },
      { w: 'daher', role: 'plain', en: 'therefore', hi: 'इसलिए', type: 'Adverb' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'zusätzlichen', role: 'plain', en: 'additional', hi: 'अतिरिक्त', type: 'Adjective' },
      { w: 'Termin', role: 'plain', en: 'date (Satzende)', hi: 'तारीख़ (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true }
    ],
    translation: 'The music event, which takes place every year in the palace grounds, attracts visitors who otherwise rarely attend a concert. The composer, whose work — which many critics describe as original — opens the evening personally. The tickets, whose price surprised many but which are nevertheless selling briskly, are already sold out. The organisers, who had not expected such demand, are therefore examining an additional date.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_038_L001', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, die Führerin, die das Gelände kennt, das für seine Gärten berühmt ist, wartet schon.', en: 'Timo, the guide who knows the grounds, which is famous for its gardens, is already waiting.' },
      { id: 'B2_038_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und der Flügel, den die Führerin empfiehlt, die immer so freundlich lächelt — lohnt sich der?', en: 'And the wing that the guide, who always smiles so kindly, recommends — is it worth it?' },
      { id: 'B2_038_L003', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Auf jeden Fall, das ist der Teil, der die Bilder zeigt, die aus dem letzten Jahrhundert stammen.', en: 'Definitely, that\'s the part that shows the pictures which date from the last century.' },
      { id: 'B2_038_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Dann sollten wir dort anfangen, bevor die Gruppe kommt, die um elf angemeldet ist.', en: 'Then we should start there before the group that\'s booked for eleven arrives.' }
    ],
    transcript: 'Timo, die Führerin, die das Gelände kennt, das für seine Gärten berühmt ist, wartet schon. Und der Flügel, den die Führerin empfiehlt, die immer so freundlich lächelt — lohnt sich der? Auf jeden Fall, das ist der Teil, der die Bilder zeigt, die aus dem letzten Jahrhundert stammen. Dann sollten wir dort anfangen, bevor die Gruppe kommt, die um elf angemeldet ist.',
    translation: 'Timo, the guide who knows the grounds, which is famous for its gardens, is already waiting. And the wing that the guide, who always smiles so kindly, recommends — is it worth it? Definitely, that\'s the part that shows the pictures which date from the last century. Then we should start there before the group that\'s booked for eleven arrives.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Führerin' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'das' },
      { w: 'Gelände' },
      { w: 'kennt' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'für' },
      { w: 'seine' },
      { w: 'Gärten' },
      { w: 'berühmt' },
      { w: 'ist' },
      { w: ',', plain: true },
      { w: 'wartet' },
      { w: 'schon' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'der' },
      { w: 'Flügel' },
      { w: ',', plain: true },
      { w: 'den' },
      { w: 'die' },
      { w: 'Führerin' },
      { w: 'empfiehlt' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'immer' },
      { w: 'so' },
      { w: 'freundlich' },
      { w: 'lächelt' },
      { w: '—', plain: true },
      { w: 'lohnt' },
      { w: 'sich' },
      { w: 'der' },
      { w: '?', plain: true },
      { w: 'Auf' },
      { w: 'jeden' },
      { w: 'Fall' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'ist' },
      { w: 'der' },
      { w: 'Teil' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'die' },
      { w: 'Bilder' },
      { w: 'zeigt' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'aus' },
      { w: 'dem' },
      { w: 'letzten' },
      { w: 'Jahrhundert' },
      { w: 'stammen' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'sollten' },
      { w: 'wir' },
      { w: 'dort' },
      { w: 'anfangen' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'die' },
      { w: 'Gruppe' },
      { w: 'kommt' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'um' },
      { w: 'elf' },
      { w: 'angemeldet' },
      { w: 'ist' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wofür ist die Anlage berühmt?', qEn: 'What is the grounds famous for?', options: ['seine Türme', 'seine Gärten', 'seine Küche', 'seine Musik'], optionsEn: ['his towers', 'his gardens', 'his kitchen', 'his music'], answer: 1,
        explain: '"… das Gelände … das für seine Gärten berühmt ist."' },
      { q: 'Was zeigt der empfohlene Flügel?', qEn: 'What does the recommended wing show?', options: ['moderne Kunst', 'Bilder aus dem letzten Jahrhundert', 'nur Möbel', 'Fotografien'], optionsEn: ['modern art', 'pictures from the last century', 'only furniture', 'photographs'], answer: 1,
        explain: '"… die Bilder … die aus dem letzten Jahrhundert stammen."' }
    ]
  },

  speaking: [
    { task: "Deine Kollegin fragt, wer schon wartet.", taskEn: "Your colleague asks who's already waiting.", de: "Die Führerin, die das Gelände kennt, das für seine Gärten berühmt ist.", en: "The guide who knows the grounds that are famous for their gardens." },
    { task: "Sie fragt, welchen Flügel ihr anschauen sollt.", taskEn: "She asks which wing you should look at.", de: "Den Flügel, den die Führerin empfiehlt, die immer so freundlich ist.", en: "The wing recommended by the guide who's always so friendly." },
    { task: "Ein Gast fragt nach der Hauptattraktion.", taskEn: "A guest asks about the main attraction.", de: "Das ist der Saal, in dem das Bild hängt, das die Generation geprägt hat.", en: "That's the hall where the picture hangs that shaped the generation." },
    { task: "Der Satz ist zu lang geworden. Sag es einfacher.", taskEn: "The sentence has got too long. Say it more simply.", de: "Die Führerin kennt das Gelände. Es ist für die Gärten berühmt.", en: "The guide knows the grounds. They're famous for the gardens." },
    { task: "Rollenspiel: Ihr führt einen Gast durch das Haus.", taskEn: "Role-play: you guide a visitor through the house.", de: "Hier ist der Raum, den der Professor gestaltet hat, der die Führung leitet. — Und dort die Figur, die alle erwähnen.", en: "Here's the room designed by the professor who leads the tour. — And there's the figure everybody mentions." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Company description (6-8 sentences): Describe a company, its CEO, and its structure using nested relative clauses — but no more than two levels of nesting.\n\nTASK 2 — University description (6-8 sentences): Describe a university, its professors, and its students using nested relative clauses naturally, then rewrite one overly complex sentence as two simpler ones.',
    starters: ['Der Professor, dessen …, der …', 'Die Firma, deren …, die …'],
    placeholder: 'Die Universität, deren Professor, der international bekannt ist, einen Preis gewonnen hat, …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'In "Der Professor, dessen Universität, deren Bibliothek modern ist, ...", what does the second "deren" refer to?',
      options: ['Universität (the noun just introduced)', 'der Professor', 'Bibliothek'],
      answer: 0,
      explain: 'Nested relative pronouns always refer back to the noun most recently introduced within the sentence — here, "Universität".'
    },
    gap: {
      sentence: ['Der Mann, ', ' Tochter, die in Berlin studiert, Ärztin werden möchte, arbeitet hier.'],
      gaps: [ { answer: 'dessen', accepts: ['dessen'] } ],
      explain: '"der Mann" is masculine, so "dessen" is the correct relative pronoun for the first nested clause.'
    },
    match: {
      q: 'Match each pronoun in the nested sentence to its antecedent.',
      pairs: [
        { noun: 'dessen (referring to der Professor)', art: 'der Professor' },
        { noun: 'deren (referring to Universität)', art: 'die Universität' },
        { noun: 'der (referring to Bruder)', art: 'der Bruder' }
      ]
    },
    builder: {
      target: 'Build a nested sentence: "The professor whose university\'s library is modern is internationally known."',
      bank: ['Der', 'Professor', ',', 'dessen', 'Universität', ',', 'deren', 'Bibliothek', 'modern', 'ist', ',', 'ist', 'international', 'bekannt', '.'],
      answer: ['Der', 'Professor', ',', 'dessen', 'Universität', ',', 'deren', 'Bibliothek', 'modern', 'ist', ',', 'ist', 'international', 'bekannt', '.'],
      roles: { 'dessen': 'r-verschachtelt', 'deren': 'r-verschachtelt', 'ist': 'r-verschachtelt' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Simplify: "Der Mann, dessen Tochter, deren Freund, der in Berlin lebt, Arzt ist, arbeitet, wohnt hier." (over-nested)',
      right: 'Der Mann wohnt hier. Seine Tochter hat einen Freund, der in Berlin lebt und Arzt ist.',
      explain: 'Three levels of nesting is too much for clear writing — split into two simpler sentences.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does every relative pronoun belong to?', options: ['Exactly one antecedent noun', 'The main verb', 'The whole sentence'], answer: 0,
      explain: 'Every relative pronoun refers back to exactly one specific noun, even inside nested clauses.' },
    { q: 'What is the first step in reading a long nested sentence?', options: ['Find the main clause', 'Read word by word', 'Skip to the end'], answer: 0,
      explain: 'The reading strategy always starts with finding the main clause before solving nested relative clauses.' },
    { q: 'How many levels of nesting are considered natural for clear writing?', options: ['One or two', 'Three or four', 'As many as possible'], answer: 0,
      explain: 'One or two nested clauses are natural; three or four usually make a sentence too difficult to follow.' },
    { q: 'In a nested clause, can a relative pronoun refer to a noun introduced by an earlier relative clause?', options: ['Yes', 'No, only to the main-clause noun', 'Only in spoken German'], answer: 0,
      explain: 'A nested relative pronoun often refers to a noun introduced by the PREVIOUS relative clause, not just the main clause subject.' },
    { q: 'Where does the verb go in each nested relative clause?', options: ['At the end of that clause', 'Right after the pronoun', 'At the very end of the whole sentence'], answer: 0,
      explain: 'Each relative clause — nested or not — sends its own verb to the end of that specific clause.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verschachtelt', html: 'Nested relative clauses place one relative clause inside another — every pronoun still belongs to exactly one antecedent.' },
    { c: 'r-verschachtelt', html: 'Always find the main clause first, then solve nested relative clauses one at a time.' },
    { c: 'r-verschachtelt', html: 'One or two nested clauses is elegant; three or four usually makes writing too complex — simplify when needed.' }
  ],
  revisionTips: [
    'Practise reading authentic Goethe B2 texts and mapping each relative pronoun to its antecedent with arrows.',
    'Build your own nested sentences step by step, starting simple and adding one clause at a time.',
    'Rewrite any over-nested sentence you find into two simpler sentences as a writing exercise.'
  ]
};

window.CHAPTER = CHAPTER;
