/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 5 · Chapter 48
   "Modalitätsersatz: haben + zu / sein + zu" — formal
   replacements for modal verbs. haben + zu + Infinitiv puts
   the RESPONSIBLE PERSON in focus ("Ich habe den Bericht zu
   schreiben"); sein + zu + Infinitiv puts the TASK in focus,
   impersonal/passive-flavoured ("Der Bericht ist zu schreiben").
   Does NOT teach Funktionsverbgefüge, Nominalstil.
   IMPORTANT: dialogue uses ONLY Britta and Timo.
   Vocabulary source: uploaded Chapter 48 list (62 items).
============================================================ */
const CHAPTER = {
  id: 'b2-48-modalitaetsersatz-haben-sein-zu',
  phase: 'B2 · Phase 5',
  number: 48,
  title: 'Modalitätsersatz: haben + zu / sein + zu',
  titleEn: 'Modal-verb replacements: haben + zu / sein + zu',
  description: 'Ich habe den Bericht zu schreiben — the formal, written-German alternative to müssen.',
  xp: 560,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 49, title: 'Passiv in Wissenschaft & Beruf', titleEn: 'Passive voice in science & the workplace' , href: 'chapter-b2-49-passiv-in-wissenschaft-und-beruf.html' },

  prevChapter: { number: 47, title: 'bekommen-/kriegen-Passiv', titleEn: 'The recipient passive', href: 'chapter-b2-47-bekommen-kriegen-passiv.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Who is responsible — <em>and</em> what must be done?',
    intro: 'Planning a hike, Britta has the route to plan and their travel time to keep to precisely, while Timo notes the weather can\'t quite be predicted — swapping müssen for the more formal haben + zu and sein + zu.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the difference between haben + zu (who is responsible) and sein + zu (what must be done)'
    ],
    scene: 'Im Büro',
    femaleSpeakers: ['Britta'],
    dialogue: [
      { speaker: 'Britta', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben', why: 'haben + zu + Infinitiv = müssen-Ersatz, active meaning (this chapter).', ex: 'Ich habe die Route zu planen.', exEn: 'I have to plan the route.' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Route', role: 'r-akkusativ', en: 'route', hi: 'मार्ग', pron: 'ROO-tuh', type: 'Noun · fem.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'planen', role: 'r-verb', en: 'plan', hi: 'योजना बनाना', pron: 'PLAH-nen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I have to plan the route.', hi: 'Mujhe raasta planning karni hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Gefahren', role: 'r-subject', en: 'dangers', hi: 'ख़तरे', pron: 'ge-FAH-ren', type: 'Noun · plural' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein', why: 'sein + zu + Infinitiv = können-Ersatz, passive meaning (this chapter).', ex: 'Die Gefahren sind zu erkennen.', exEn: 'The dangers can be recognized.' },
        { w: 'rechtzeitig', role: 'r-akkusativ', en: 'in time', hi: 'समय पर', pron: 'REKHT-tsy-tikh', type: 'Adverb' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'erkennen', role: 'r-verb', en: 'recognize', hi: 'पहचानना', pron: 'er-KE-nen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The dangers can be recognized in time.', hi: 'Khatre samay par pehchane ja sakte hain.' },
      { speaker: 'Britta', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'Wetter', role: 'r-subject', en: 'weather', hi: 'मौसम', pron: 'VE-ter', type: 'Noun · neut.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'leider', role: 'r-akkusativ', en: 'unfortunately', hi: 'दुर्भाग्य से', pron: 'LY-der', type: 'Adverb' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'genau', role: 'r-akkusativ', en: 'precisely', hi: 'ठीक से', pron: 'ge-NOW', type: 'Adverb' },
        { w: 'vorherzusagen', role: 'r-verb', en: 'to predict', hi: 'अनुमान लगाया जाना', pron: 'FOR-hair-tsu-zah-gen', type: 'Verb · infinitive (Satzende)', why: 'vorhersagen = to predict (this chapter, sein+zu = cannot be predicted).', ex: 'Das Wetter ist nicht vorherzusagen.', exEn: 'The weather cannot be predicted.' },
        { w: '.', plain: true }
      ], en: 'The weather unfortunately cannot be precisely predicted.', hi: 'Mausam durbhagya se theek se anumaanit nahi kiya ja sakta.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben' },
        { w: 'trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: 'genügend', role: 'r-akkusativ', en: 'enough', hi: 'पर्याप्त', pron: 'ge-NÜ-gent', type: 'Adjective' },
        { w: 'Ausrüstung', role: 'r-akkusativ', en: 'equipment', hi: 'सामान', pron: 'OWS-rüs-tung', type: 'Noun · fem.' },
        { w: 'mitzunehmen', role: 'r-verb', en: 'to bring along', hi: 'साथ लाना', pron: 'MIT-tsu-nay-men', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'We nevertheless have enough equipment to bring along.', hi: 'Hume phir bhi kaafi saaman saath laana hai.' },
      { speaker: 'Britta', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'unsere', role: 'r-subject', en: 'our (fem.)', hi: 'हमारी', pron: 'UN-ze-ruh', type: 'Possessive' },
        { w: 'Reisezeit', role: 'r-subject', en: 'travel time', hi: 'यात्रा का समय', pron: 'RY-zuh-tsyte', type: 'Noun · fem.', why: 'die Reisezeit (this chapter).', ex: 'unsere Reisezeit' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'genau', role: 'r-akkusativ', en: 'precisely', hi: 'ठीक से', pron: 'ge-NOW', type: 'Adverb' },
        { w: 'einzuhalten', role: 'r-verb', en: 'to keep to', hi: 'पालन करना', pron: 'INE-tsu-hal-ten', type: 'Verb · infinitive (Satzende)', why: 'einhalten = to keep to/adhere to (recycled, sein+zu form).', ex: 'Die Reisezeit ist einzuhalten.', exEn: 'The travel time must be kept to.' },
        { w: '.', plain: true }
      ], en: 'And our travel time must be kept to precisely.', hi: 'Aur hamaara yaatra ka samay theek se palan karna hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'organisieren', role: 'r-verb', en: 'organize', hi: 'व्यवस्थित करना', pron: 'or-ga-ni-ZEE-ren', type: 'Verb · infinitive (Satzende)' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'schaffen', role: 'r-verb', en: 'will manage', hi: 'कर लेंगे', pron: 'SHA-fen', type: 'Verb · schaffen (wir)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'Exactly! We have a lot to organize, but we will manage it.', hi: 'Bilkul! Humein bahut kuch organize karna hai, par hum kar lenge.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German often replaces modal verbs with more formal structures. <span class="de r-habenzu">haben + zu</span> puts the RESPONSIBLE PERSON in focus: <span class="de r-habenzu">Ich habe den Bericht zu schreiben.</span> <span class="de r-seinzu">sein + zu</span> puts the TASK in focus, impersonally: <span class="de r-seinzu">Der Bericht ist zu schreiben.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is MODALITÄTSERSATZ: HABEN + ZU / SEIN + ZU at B2 level — formal alternatives to modal verbs (especially müssen). "haben + zu + Infinitiv" puts the RESPONSIBLE PERSON in focus (e.g. "Ich habe den Bericht zu schreiben" = I have to write the report). "sein + zu + Infinitiv" puts the TASK in focus, impersonally/passive-flavoured (e.g. "Der Bericht ist zu schreiben" = the report is to be written). With separable verbs, "zu" is inserted between the prefix and stem (e.g. "einzureichen", "mitzubringen"). ' +
    'Do NOT expect or require Funktionsverbgefüge or Nominalstil — those are separate topics taught later; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that "haben + zu" is used when a specific person/subject is responsible, and that "sein + zu" is used when the focus is on the task/thing rather than the doer.\n' +
    '- Check that "zu" is correctly placed: before the infinitive for simple verbs (zu schreiben), and inserted between prefix and stem for separable verbs (einzureichen, not zu einreichen).\n' +
    '- Check that the infinitive sits at the end of the clause.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Person vs task check:</b> one sentence on whether the learner correctly chose haben+zu (responsible person) vs sein+zu (task).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly distinguish who is responsible (haben + zu) from what must be done (sein + zu). Ready for Funktionsverbgefüge next.',
    mid: 'Good. Re-read the Main Comparison Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: Person → haben. Task → sein.'
  },

  parserSentence: [
    { w: 'Der', role: 'plain' }, { w: 'Bericht', role: 'plain' }, { w: 'ist', role: 'r-seinzu' },
    { w: 'zu', role: 'r-seinzu' }, { w: 'schreiben', role: 'r-seinzu' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: haben+zu focuses on the responsible person, sein+zu on the task.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Britta and Timo prepare a university application and sort office duties using Modalitätsersatz.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 62 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master haben+zu and sein+zu formation, contrast them, and compare with Modalverben.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read university admission instructions and a company employee handbook full of Modalitätsersatz.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify haben+zu vs sein+zu, the responsible person, and the required task.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give formal instructions and assign responsibilities using Modalitätsersatz naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write formal emails and office memos using haben+zu and sein+zu appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Modalverb-to-Modalitätsersatz transformation and responsibility identification.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 560 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 62 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Modalverb-to-Modalitätsersatz transformation drills and a formal-memo writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full comparison table, transformation table, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich habe den Bericht zu schreiben.', text: 'Use haben + zu to put the responsible person in focus' },
    { de: 'Der Bericht ist zu schreiben.', text: 'Use sein + zu to put the task in focus, impersonally' },
    { de: 'Die Teilnehmer haben ihre Ausweise mitzubringen.', text: 'Insert "zu" correctly with separable verbs' },
    { de: 'müssen vs haben + zu vs sein + zu', text: 'Choose the right structure for the right register' },
    { de: 'Common in contracts, regulations, and official notices', text: 'Recognize the register where Modalitätsersatz thrives' }
  ],

  // ---------- Vocabulary (62 items — uploaded chapter-48 list) ----------
  vocab: [
    { de: 'auskommen', pos: 'verb', level: 'B2', register: 'both', en: 'to manage, get by', hi: 'गुज़ारा करना', ex: 'Sie kamen mit wenig Geld aus.', exEn: 'They got by with little money.', exHi: 'Woh kam paise mein guzaara kar gaye.', ex2: 'Er ist gut mit seinem Team ausgekommen.', ex2En: 'He\'s gotten along well with his team.', ex2Hi: 'Woh apni team ke saath achhi tarah rah paaya hai.', conj: { praesens: 'kommt aus', praeteritum: 'kam aus', perfekt: 'ist ausgekommen' } },
    { de: 'Bekanntschaft', art: 'die', gender: 'f', plural: 'Bekanntschaften', pos: 'noun', level: 'B2', register: 'written', en: 'acquaintance', hi: 'परिचय', ex: 'Sie machten eine interessante Bekanntschaft.', exEn: 'They made an interesting acquaintance.', exHi: 'Unhone ek dilchasp parichay banaaya.', ex2: 'Sie haben eine alte Bekanntschaft erneuert.', ex2En: 'They\'ve renewed an old acquaintance.', ex2Hi: 'Unhone ek puraana parichay taaza kiya hai.' },
    { de: 'bemühen', pos: 'verb', level: 'B2', register: 'written', en: 'to make an effort', hi: 'प्रयास करना', ex: 'Sie bemühte sich sehr.', exEn: 'She made a great effort.', exHi: 'Usne bahut prayaas kiya.', ex2: 'Sie haben sich um eine Lösung bemüht.', ex2En: 'They\'ve made an effort towards a solution.', ex2Hi: 'Unhone samaadhaan ke liye prayaas kiya hai.', conj: { praesens: 'bemüht sich', praeteritum: 'bemühte sich', perfekt: 'hat sich bemüht' } },
    { de: 'Berufsentscheidung', art: 'die', gender: 'f', plural: 'Berufsentscheidungen', pos: 'noun', level: 'B2', register: 'written', en: 'career decision', hi: 'करियर का फैसला', ex: 'Ihre Berufsentscheidung war schwierig.', exEn: 'Her career decision was difficult.', exHi: 'Uska career ka faisla mushkil tha.', ex2: 'Sie haben eine wichtige Berufsentscheidung getroffen.', ex2En: 'They\'ve made an important career decision.', ex2Hi: 'Unhone ek mahatvapurn career ka faisla liya hai.' },
    { de: 'betonen', pos: 'verb', level: 'B2', register: 'written', en: 'to emphasise, stress', hi: 'ज़ोर देना', ex: 'Sie betonte die Wichtigkeit.', exEn: 'She emphasised the importance.', exHi: 'Usne mahatva par zor diya.', ex2: 'Er hat den Punkt betont.', ex2En: 'He\'s emphasised the point.', ex2Hi: 'Usne baat par zor diya hai.', conj: { praesens: 'betont', praeteritum: 'betonte', perfekt: 'hat betont' } },
    { de: 'Bewertung', art: 'die', gender: 'f', plural: 'Bewertungen', pos: 'noun', level: 'B2', register: 'written', en: 'evaluation, rating', hi: 'मूल्यांकन', ex: 'Die Bewertung ist auch noch zu schreiben.', exEn: 'The evaluation is also still to be written.', exHi: 'Moolyaankan bhi abhi likhna hai.', ex2: 'Sie haben eine positive Bewertung erhalten.', ex2En: 'They\'ve received a positive evaluation.', ex2Hi: 'Unhein ek sakaaraatmak moolyaankan mila hai.' },
    { de: 'dermaßen', pos: 'adverb', level: 'B2', register: 'written', en: 'so much, to such a degree', hi: 'इस हद तक', ex: 'Sie war dermaßen müde.', exEn: 'She was so tired.', exHi: 'Woh itni thaki hui thi.', ex2: 'Es war dermaßen kompliziert.', ex2En: 'It was so complicated.', ex2Hi: 'Yeh itna jatil tha.' },
    { de: 'dösen', pos: 'verb', level: 'B2', register: 'both', en: 'to doze', hi: 'ऊंघना', ex: 'Er döste auf dem Sofa.', exEn: 'He dozed on the sofa.', exHi: 'Woh sofe par oongh raha tha.', ex2: 'Sie haben im Zug gedöst.', ex2En: 'They\'ve dozed on the train.', ex2Hi: 'Woh train mein oongh gaye hain.', conj: { praesens: 'döst', praeteritum: 'döste', perfekt: 'hat gedöst' } },
    { de: 'eintauchen', pos: 'verb', level: 'B2', register: 'both', en: 'to immerse, dip', hi: 'डुबाना', ex: 'Sie tauchte den Pinsel ein.', exEn: 'She dipped the brush in.', exHi: 'Usne brush doobaaya.', ex2: 'Er ist tief in die Arbeit eingetaucht.', ex2En: 'He\'s immersed himself deeply in the work.', ex2Hi: 'Woh kaam mein gehraai se doob gaya hai.', conj: { praesens: 'taucht ein', praeteritum: 'tauchte ein', perfekt: 'hat/ist eingetaucht' } },
    { de: 'einverstanden sein', pos: 'verb', level: 'B2', register: 'both', en: 'to agree, be in agreement', hi: 'सहमत होना', ex: 'Sie war einverstanden.', exEn: 'She was in agreement.', exHi: 'Woh sahmat thi.', ex2: 'Sie sind mit dem Plan einverstanden.', ex2En: 'They\'re in agreement with the plan.', ex2Hi: 'Woh yojana se sahmat hain.', conj: { praesens: 'ist einverstanden', praeteritum: 'war einverstanden', perfekt: 'ist einverstanden gewesen' } },
    { de: 'Elektrizität', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'electricity', hi: 'बिजली', ex: 'Die Elektrizität fiel aus.', exEn: 'The electricity failed.', exHi: 'Bijli chali gayi.', ex2: 'Sie haben die Elektrizität wiederhergestellt.', ex2En: 'They\'ve restored the electricity.', ex2Hi: 'Unhone bijli bahaal ki hai.' },
    { de: 'entfalten', pos: 'verb', level: 'B2', register: 'written', en: 'to unfold, develop', hi: 'विकसित करना', ex: 'Sie entfaltete ihr Talent.', exEn: 'She developed her talent.', exHi: 'Usne apni pratibha vikasit ki.', ex2: 'Sie haben ihr Potenzial entfaltet.', ex2En: 'They\'ve developed their potential.', ex2Hi: 'Unhone apni kshamata vikasit ki hai.', conj: { praesens: 'entfaltet', praeteritum: 'entfaltete', perfekt: 'hat entfaltet' } },
    { de: 'ertragen', pos: 'verb', level: 'B2', register: 'written', en: 'to endure, bear', hi: 'सहना', ex: 'Sie ertrug den Schmerz.', exEn: 'She endured the pain.', exHi: 'Usne dard sahaa.', ex2: 'Er hat die Situation ertragen.', ex2En: 'He\'s endured the situation.', ex2Hi: 'Usne sthiti sahi hai.', conj: { praesens: 'erträgt', praeteritum: 'ertrug', perfekt: 'hat ertragen' } },
    { de: 'erwecken', pos: 'verb', level: 'B2', register: 'written', en: 'to awaken, evoke', hi: 'जगाना', ex: 'Der Film erweckte Erinnerungen.', exEn: 'The film evoked memories.', exHi: 'Film ne yaadein jagaayi.', ex2: 'Sie haben Interesse erweckt.', ex2En: 'They\'ve awakened interest.', ex2Hi: 'Unhone dilchaspi jagaayi hai.', conj: { praesens: 'erweckt', praeteritum: 'erweckte', perfekt: 'hat erweckt' } },
    { de: 'Expedition', art: 'die', gender: 'f', plural: 'Expeditionen', pos: 'noun', level: 'B2', register: 'written', en: 'expedition', hi: 'अभियान', ex: 'Die Expedition dauerte Monate.', exEn: 'The expedition lasted months.', exHi: 'Abhiyaan mahino tak chala.', ex2: 'Sie haben eine Expedition geplant.', ex2En: 'They\'ve planned an expedition.', ex2Hi: 'Unhone ek abhiyaan plan kiya hai.' },
    { de: 'Faulenzertum', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'laziness, idling', hi: 'आलस्य', ex: 'Sein Faulenzertum störte alle.', exEn: 'His laziness bothered everyone.', exHi: 'Uske aalasya ne sabko pareshaan kiya.', ex2: 'Sie haben das Faulenzertum kritisiert.', ex2En: 'They\'ve criticised the laziness.', ex2Hi: 'Unhone aalasya ki aalochana ki hai.' },
    { de: 'gehoben', pos: 'adjective', level: 'B2', register: 'written', en: 'refined, upmarket, raised', hi: 'उच्च वर्ग का', ex: 'Sie sprach in gehobener Sprache.', exEn: 'She spoke in refined language.', exHi: 'Usne parishkrit bhaasha mein baat ki.', ex2: 'Das Restaurant hat gehobenes Ambiente.', ex2En: 'The restaurant has an upmarket ambience.', ex2Hi: 'Restaurant ka mahaul uchch vargeeya hai.' },
    { de: 'glaubwürdig', pos: 'adjective', level: 'B2', register: 'written', en: 'credible, trustworthy', hi: 'विश्वसनीय', ex: 'Ihre Aussage war glaubwürdig.', exEn: 'Her statement was credible.', exHi: 'Uska bayaan vishwasneeya tha.', ex2: 'Sie haben eine glaubwürdige Quelle zitiert.', ex2En: 'They\'ve cited a credible source.', ex2Hi: 'Unhone ek vishwasneeya srot ka hawaala diya hai.' },
    { de: 'Gravitation', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'gravity, gravitation', hi: 'गुरुत्वाकर्षण', ex: 'Die Gravitation zog den Ball nach unten.', exEn: 'Gravity pulled the ball down.', exHi: 'Gurutvaakarshan ne gend ko neeche kheencha.', ex2: 'Sie haben die Gravitation erforscht.', ex2En: 'They\'ve researched gravitation.', ex2Hi: 'Unhone gurutvaakarshan par shodh kiya hai.' },
    { de: 'greifen', pos: 'verb', level: 'B2', register: 'both', en: 'to grip, reach, take effect', hi: 'पकड़ना', ex: 'Sie griff nach dem Buch.', exEn: 'She reached for the book.', exHi: 'Usne kitaab ki taraf haath badhaaya.', ex2: 'Die Maßnahme hat gegriffen.', ex2En: 'The measure has taken effect.', ex2Hi: 'Upaay prabhaavi ho gaya hai.', conj: { praesens: 'greift', praeteritum: 'griff', perfekt: 'hat gegriffen' } },
    { de: 'grübeln', pos: 'verb', level: 'B2', register: 'both', en: 'to brood, ponder', hi: 'सोचते रहना', ex: 'Sie grübelte über die Entscheidung.', exEn: 'She pondered over the decision.', exHi: 'Woh faisle par sochti rahi.', ex2: 'Er hat lange gegrübelt.', ex2En: 'He\'s brooded for a long time.', ex2Hi: 'Woh lambe samay tak sochta raha hai.', conj: { praesens: 'grübelt', praeteritum: 'grübelte', perfekt: 'hat gegrübelt' } },
    { de: 'halten', pos: 'verb', level: 'B2', register: 'both', en: 'to hold, stop, keep', hi: 'पकड़ना, रुकना', ex: 'Sie hielt die Tasche fest.', exEn: 'She held the bag firmly.', exHi: 'Usne bag ko majboot se pakda.', ex2: 'Der Bus hat angehalten.', ex2En: 'The bus has stopped.', ex2Hi: 'Bus ruk gayi hai.', conj: { praesens: 'hält', praeteritum: 'hielt', perfekt: 'hat gehalten' } },
    { de: 'hemmen', pos: 'verb', level: 'B2', register: 'written', en: 'to inhibit, hamper', hi: 'बाधा डालना', ex: 'Die Regeln hemmten den Fortschritt.', exEn: 'The rules hampered progress.', exHi: 'Niyamon ne pragati mein baadha daali.', ex2: 'Sie haben das Wachstum gehemmt.', ex2En: 'They\'ve inhibited growth.', ex2Hi: 'Unhone vikaas ko baadhit kiya hai.', conj: { praesens: 'hemmt', praeteritum: 'hemmte', perfekt: 'hat gehemmt' } },
    { de: 'heranführen', pos: 'verb', level: 'B2', register: 'written', en: 'to introduce, familiarise (s.o. with)', hi: 'परिचित कराना', ex: 'Sie führte die Kinder an die Musik heran.', exEn: 'She introduced the children to music.', exHi: 'Usne bachchon ko sangeet se parichit karaaya.', ex2: 'Sie haben neue Mitarbeiter herangeführt.', ex2En: 'They\'ve introduced new employees.', ex2Hi: 'Unhone naye karmchaariyon ko parichit karaaya hai.', conj: { praesens: 'führt heran', praeteritum: 'führte heran', perfekt: 'hat herangeführt' } },
    { de: 'Internetredaktion', art: 'die', gender: 'f', plural: 'Internetredaktionen', pos: 'noun', level: 'B2', register: 'written', en: 'internet editorial team', hi: 'इंटरनेट संपादकीय टीम', ex: 'Die Internetredaktion veröffentlichte den Artikel.', exEn: 'The internet editorial team published the article.', exHi: 'Internet sampaadkiya team ne lekh prakaashit kiya.', ex2: 'Sie arbeiten in der Internetredaktion.', ex2En: 'They work in the internet editorial team.', ex2Hi: 'Woh internet sampaadkiya team mein kaam karte hain.' },
    { de: 'klagen', pos: 'verb', level: 'B2', register: 'both', en: 'to complain, lament, sue', hi: 'शिकायत करना, मुकदमा करना', ex: 'Sie klagte über Schmerzen.', exEn: 'She complained about pain.', exHi: 'Usne dard ki shikaayat ki.', ex2: 'Sie haben gegen die Firma geklagt.', ex2En: 'They\'ve sued the company.', ex2Hi: 'Unhone company ke khilaaf mukadma kiya hai.', conj: { praesens: 'klagt', praeteritum: 'klagte', perfekt: 'hat geklagt' } },
    { de: 'Konkurrenz', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'competition, rivalry', hi: 'प्रतिस्पर्धा', ex: 'Die Konkurrenz war stark.', exEn: 'The competition was strong.', exHi: 'Pratispardha kadi thi.', ex2: 'Sie haben die Konkurrenz beobachtet.', ex2En: 'They\'ve observed the competition.', ex2Hi: 'Unhone pratispardha par nazar rakhi hai.' },
    { de: 'Konzentration', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'concentration', hi: 'एकाग्रता', ex: 'Ihre Konzentration ließ nach.', exEn: 'Her concentration waned.', exHi: 'Uski ekaagrata kam ho gayi.', ex2: 'Sie haben ihre Konzentration verbessert.', ex2En: 'They\'ve improved their concentration.', ex2Hi: 'Unhone apni ekaagrata behtar banaayi hai.' },
    { de: 'konzentriert', pos: 'adjective', level: 'B2', register: 'both', en: 'concentrated, focused', hi: 'केंद्रित', ex: 'Sie arbeitete konzentriert.', exEn: 'She worked in a focused way.', exHi: 'Usne ekaagrata se kaam kiya.', ex2: 'Sie sind sehr konzentriert.', ex2En: 'They are very focused.', ex2Hi: 'Woh bahut ekaagr hain.' },
    { de: 'Längeneinheit', art: 'die', gender: 'f', plural: 'Längeneinheiten', pos: 'noun', level: 'B2', register: 'written', en: 'unit of length', hi: 'लंबाई की इकाई', ex: 'Der Meter ist eine Längeneinheit.', exEn: 'The meter is a unit of length.', exHi: 'Meter lambaai ki ek ikaai hai.', ex2: 'Sie haben verschiedene Längeneinheiten verglichen.', ex2En: 'They\'ve compared different units of length.', ex2Hi: 'Unhone alag lambaai ki ikaaiyon ki tulna ki hai.' },
    { de: 'Lebenserwartung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'life expectancy', hi: 'जीवन प्रत्याशा', ex: 'Die Lebenserwartung ist gestiegen.', exEn: 'Life expectancy has risen.', exHi: 'Jeevan pratyaasha badhi hai.', ex2: 'Sie haben die Lebenserwartung untersucht.', ex2En: 'They\'ve studied life expectancy.', ex2Hi: 'Unhone jeevan pratyaasha ka adhyayan kiya hai.' },
    { de: 'Leistungsfähigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'performance, capability', hi: 'प्रदर्शन क्षमता', ex: 'Ihre Leistungsfähigkeit war beeindruckend.', exEn: 'Her performance capability was impressive.', exHi: 'Uski pradarshan kshamata prabhaavshaali thi.', ex2: 'Sie haben die Leistungsfähigkeit gesteigert.', ex2En: 'They\'ve increased performance capability.', ex2Hi: 'Unhone pradarshan kshamata badhaayi hai.' },
    { de: 'lenken', pos: 'verb', level: 'B2', register: 'written', en: 'to steer, direct', hi: 'नियंत्रित करना', ex: 'Sie lenkte das Gespräch.', exEn: 'She steered the conversation.', exHi: 'Usne baatcheet ko nirdeshit kiya.', ex2: 'Sie haben das Projekt gelenkt.', ex2En: 'They\'ve directed the project.', ex2Hi: 'Unhone project ko nirdeshit kiya hai.', conj: { praesens: 'lenkt', praeteritum: 'lenkte', perfekt: 'hat gelenkt' } },
    { de: 'Meinungsfreiheit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'freedom of opinion', hi: 'विचार की स्वतंत्रता', ex: 'Die Meinungsfreiheit ist wichtig.', exEn: 'Freedom of opinion is important.', exHi: 'Vichaar ki swatantrata mahatvapurn hai.', ex2: 'Sie haben für Meinungsfreiheit gekämpft.', ex2En: 'They\'ve fought for freedom of opinion.', ex2Hi: 'Unhone vichaar ki swatantrata ke liye ladaai ki hai.' },
    { de: 'Militarisierung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'militarisation', hi: 'सैन्यीकरण', ex: 'Die Militarisierung nahm zu.', exEn: 'Militarisation increased.', exHi: 'Sainyeekaran badha.', ex2: 'Sie haben die Militarisierung kritisiert.', ex2En: 'They\'ve criticised the militarisation.', ex2Hi: 'Unhone sainyeekaran ki aalochana ki hai.' },
    { de: 'Nationalsozialismus', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'National Socialism, Nazism', hi: 'राष्ट्रीय समाजवाद', ex: 'Der Nationalsozialismus wird im Unterricht behandelt.', exEn: 'National Socialism is dealt with in class.', exHi: 'Rashtriya samaajwaad ko class mein padhaaya jaata hai.', ex2: 'Sie haben über den Nationalsozialismus geforscht.', ex2En: 'They\'ve researched National Socialism.', ex2Hi: 'Unhone rashtriya samaajwaad par shodh kiya hai.' },
    { de: 'nen', pos: 'article', level: 'B2', register: 'spoken', en: 'a, an (colloquial "einen")', hi: 'एक (बोलचाल)', ex: 'Gib mir mal nen Stift.', exEn: 'Give me a pen.', exHi: 'Mujhe ek pen do.', ex2: 'Sie hat nen Fehler gemacht.', ex2En: 'She\'s made a mistake.', ex2Hi: 'Usne ek galti ki hai.' },
    { de: 'Notversorgung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'emergency care', hi: 'आपातकालीन देखभाल', ex: 'Die Notversorgung war schnell.', exEn: 'The emergency care was fast.', exHi: 'Aapaatkaalin dekhbhaal tez thi.', ex2: 'Sie haben die Notversorgung organisiert.', ex2En: 'They\'ve organised the emergency care.', ex2Hi: 'Unhone aapaatkaalin dekhbhaal organize ki hai.' },
    { de: 'Orientierung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'orientation', hi: 'दिशा-निर्देश', ex: 'Die Orientierung half den neuen Studenten.', exEn: 'The orientation helped the new students.', exHi: 'Disha-nirdesh ne naye students ki madad ki.', ex2: 'Sie haben eine Orientierung angeboten.', ex2En: 'They\'ve offered an orientation.', ex2Hi: 'Unhone ek disha-nirdesh diya hai.' },
    { de: 'Pazifismus', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'pacifism', hi: 'शांतिवाद', ex: 'Sie glaubt an den Pazifismus.', exEn: 'She believes in pacifism.', exHi: 'Woh shaantivaad mein vishwaas karti hai.', ex2: 'Sie haben über Pazifismus diskutiert.', ex2En: 'They\'ve discussed pacifism.', ex2Hi: 'Unhone shaantivaad par charcha ki hai.' },
    { de: 'Pflichtveranstaltung', art: 'die', gender: 'f', plural: 'Pflichtveranstaltungen', pos: 'noun', level: 'B2', register: 'written', en: 'compulsory event', hi: 'अनिवार्य आयोजन', ex: 'Die Vorlesung ist eine Pflichtveranstaltung.', exEn: 'The lecture is a compulsory event.', exHi: 'Vyakhyaan ek anivaarya aayojan hai.', ex2: 'Sie haben an der Pflichtveranstaltung teilgenommen.', ex2En: 'They\'ve attended the compulsory event.', ex2Hi: 'Unhone anivaarya aayojan mein bhaag liya hai.' },
    { de: 'preisen', pos: 'verb', level: 'B2', register: 'written', en: 'to praise, extol', hi: 'प्रशंसा करना', ex: 'Sie priesen seine Leistung.', exEn: 'They praised his achievement.', exHi: 'Unhone uski upalabdhi ki prashansa ki.', ex2: 'Der Kritiker hat den Film gepriesen.', ex2En: 'The critic has praised the film.', ex2Hi: 'Aalochak ne film ki prashansa ki hai.', conj: { praesens: 'preist', praeteritum: 'pries', perfekt: 'hat gepriesen' } },
    { de: 'Richtigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'correctness', hi: 'शुद्धता', ex: 'Ich habe die Richtigkeit zu bestätigen.', exEn: 'I have to confirm the correctness.', exHi: 'Mujhe shuddhata ki pushti karni hai.', ex2: 'Sie haben die Richtigkeit überprüft.', ex2En: 'They\'ve checked the correctness.', ex2Hi: 'Unhone shuddhata ki jaanch ki hai.' },
    { de: 'ruhen', pos: 'verb', level: 'B2', register: 'written', en: 'to rest', hi: 'आराम करना', ex: 'Sie ruhte sich aus.', exEn: 'She rested.', exHi: 'Usne aaraam kiya.', ex2: 'Das Projekt hat lange geruht.', ex2En: 'The project has rested for a long time.', ex2Hi: 'Project lambe samay se ruka hai.', conj: { praesens: 'ruht', praeteritum: 'ruhte', perfekt: 'hat geruht' } },
    { de: 'Schätzung', art: 'die', gender: 'f', plural: 'Schätzungen', pos: 'noun', level: 'B2', register: 'written', en: 'estimate', hi: 'अनुमान', ex: 'Ihre Schätzung war präzise.', exEn: 'Her estimate was precise.', exHi: 'Uska anumaan sateek tha.', ex2: 'Sie haben eine Schätzung abgegeben.', ex2En: 'They\'ve given an estimate.', ex2Hi: 'Unhone ek anumaan diya hai.' },
    { de: 'Schlafstörung', art: 'die', gender: 'f', plural: 'Schlafstörungen', pos: 'noun', level: 'B2', register: 'written', en: 'sleep disorder', hi: 'नींद की समस्या', ex: 'Sie litt an einer Schlafstörung.', exEn: 'She suffered from a sleep disorder.', exHi: 'Woh neend ki samasya se peedit thi.', ex2: 'Sie haben die Schlafstörung behandelt.', ex2En: 'They\'ve treated the sleep disorder.', ex2Hi: 'Unhone neend ki samasya ka ilaaj kiya hai.' },
    { de: 'sichtbar', pos: 'adjective', level: 'B2', register: 'both', en: 'visible', hi: 'दृश्यमान', ex: 'Der Berg war von weitem sichtbar.', exEn: 'The mountain was visible from afar.', exHi: 'Parvat door se dikhaayi de raha tha.', ex2: 'Sie haben sichtbare Fortschritte gemacht.', ex2En: 'They\'ve made visible progress.', ex2Hi: 'Unhone dikhaayi dene waali pragati ki hai.' },
    { de: 'Sonnenfinsternis', art: 'die', gender: 'f', plural: 'Sonnenfinsternisse', pos: 'noun', level: 'B2', register: 'written', en: 'solar eclipse', hi: 'सूर्य ग्रहण', ex: 'Die Sonnenfinsternis war beeindruckend.', exEn: 'The solar eclipse was impressive.', exHi: 'Surya grahan prabhaavshaali tha.', ex2: 'Sie haben die Sonnenfinsternis beobachtet.', ex2En: 'They\'ve observed the solar eclipse.', ex2Hi: 'Unhone surya grahan dekha hai.' },
    { de: 'spritzen', pos: 'verb', level: 'B2', register: 'both', en: 'to spray, inject, splash', hi: 'छिड़कना, इंजेक्शन देना', ex: 'Die Krankenschwester spritzte das Medikament.', exEn: 'The nurse injected the medication.', exHi: 'Nurse ne dawaai ka injection diya.', ex2: 'Sie haben Wasser gespritzt.', ex2En: 'They\'ve sprayed water.', ex2Hi: 'Unhone paani chhidka hai.', conj: { praesens: 'spritzt', praeteritum: 'spritzte', perfekt: 'hat gespritzt' } },
    { de: 'Stromleitung', art: 'die', gender: 'f', plural: 'Stromleitungen', pos: 'noun', level: 'B2', register: 'written', en: 'power line', hi: 'बिजली लाइन', ex: 'Die Stromleitung war beschädigt.', exEn: 'The power line was damaged.', exHi: 'Bijli line kshatigrast thi.', ex2: 'Sie haben die Stromleitung repariert.', ex2En: 'They\'ve repaired the power line.', ex2Hi: 'Unhone bijli line theek ki hai.' },
    { de: 'Struktur', art: 'die', gender: 'f', plural: 'Strukturen', pos: 'noun', level: 'B2', register: 'written', en: 'structure', hi: 'संरचना', ex: 'Die Struktur des Berichts ist noch zu überarbeiten.', exEn: 'The structure of the report still needs to be revised.', exHi: 'Report ki sanrachna abhi sudhaarni hai.', ex2: 'Sie haben die Struktur verändert.', ex2En: 'They\'ve changed the structure.', ex2Hi: 'Unhone sanrachna badli hai.' },
    { de: 'Täuschung', art: 'die', gender: 'f', plural: 'Täuschungen', pos: 'noun', level: 'B2', register: 'written', en: 'deception, illusion', hi: 'धोखा', ex: 'Es war nur eine Täuschung.', exEn: 'It was only an illusion.', exHi: 'Yeh sirf ek dhokha tha.', ex2: 'Sie haben die Täuschung aufgedeckt.', ex2En: 'They\'ve uncovered the deception.', ex2Hi: 'Unhone dhokhe ka pardaafaash kiya hai.' },
    { de: 'Tendenz', art: 'die', gender: 'f', plural: 'Tendenzen', pos: 'noun', level: 'B2', register: 'written', en: 'tendency, trend', hi: 'प्रवृत्ति', ex: 'Es gibt eine klare Tendenz.', exEn: 'There\'s a clear tendency.', exHi: 'Ek spasht pravriti hai.', ex2: 'Sie haben die Tendenz analysiert.', ex2En: 'They\'ve analysed the trend.', ex2Hi: 'Unhone pravriti ka vishleshan kiya hai.' },
    { de: 'übereinstimmen', pos: 'verb', level: 'B2', register: 'written', en: 'to agree, match, coincide', hi: 'मेल खाना', ex: 'Die Aussagen stimmten überein.', exEn: 'The statements matched.', exHi: 'Bayaan mel khaate the.', ex2: 'Sie haben in ihrer Meinung übereingestimmt.', ex2En: 'They\'ve agreed in their opinion.', ex2Hi: 'Unki raay mein samaanta hai.', conj: { praesens: 'stimmt überein', praeteritum: 'stimmte überein', perfekt: 'hat übereingestimmt' } },
    { de: 'überleben', pos: 'verb', level: 'B2', register: 'both', en: 'to survive', hi: 'बचना', ex: 'Sie überlebte den Unfall.', exEn: 'She survived the accident.', exHi: 'Woh durghatna se bach gayi.', ex2: 'Sie haben die Krise überlebt.', ex2En: 'They\'ve survived the crisis.', ex2Hi: 'Woh sankat se bach gaye hain.', conj: { praesens: 'überlebt', praeteritum: 'überlebte', perfekt: 'hat überlebt' } },
    { de: 'überlebenswichtig', pos: 'adjective', level: 'B2', register: 'written', en: 'vital, essential for survival', hi: 'जीवन के लिए आवश्यक', ex: 'Wasser ist überlebenswichtig.', exEn: 'Water is essential for survival.', exHi: 'Paani jeevan ke liye zaroori hai.', ex2: 'Sie betrachten den Vertrag als überlebenswichtig.', ex2En: 'They consider the contract vital.', ex2Hi: 'Woh anubandh ko atyavashyak maante hain.' },
    { de: 'übersehen', pos: 'verb', level: 'B2', register: 'both', en: 'to overlook, miss', hi: 'नज़रअंदाज़ करना', ex: 'Sie übersah den Fehler.', exEn: 'She overlooked the mistake.', exHi: 'Usne galti ko nazarandaaz kiya.', ex2: 'Sie haben eine wichtige Klausel übersehen.', ex2En: 'They\'ve missed an important clause.', ex2Hi: 'Unhone ek mahatvapurn khand nazarandaaz kiya hai.', conj: { praesens: 'übersieht', praeteritum: 'übersah', perfekt: 'hat übersehen' } },
    { de: 'umfallen', pos: 'verb', level: 'B2', register: 'both', en: 'to fall over, collapse', hi: 'गिर जाना', ex: 'Der Stuhl fiel um.', exEn: 'The chair fell over.', exHi: 'Kursi gir gayi.', ex2: 'Sie ist vor Erschöpfung umgefallen.', ex2En: 'She\'s collapsed from exhaustion.', ex2Hi: 'Woh thakaan se gir gayi hai.', conj: { praesens: 'fällt um', praeteritum: 'fiel um', perfekt: 'ist umgefallen' } },
    { de: 'umsetzen', pos: 'verb', level: 'B2', register: 'written', en: 'to implement, convert', hi: 'लागू करना', ex: 'Sie setzten den Plan um.', exEn: 'They implemented the plan.', exHi: 'Unhone yojana laagu ki.', ex2: 'Sie haben die Idee erfolgreich umgesetzt.', ex2En: 'They\'ve successfully implemented the idea.', ex2Hi: 'Unhone vichaar safaltapurvak laagu kiya hai.', conj: { praesens: 'setzt um', praeteritum: 'setzte um', perfekt: 'hat umgesetzt' } },
    { de: 'Unterdrückung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'oppression, suppression', hi: 'दमन', ex: 'Die Unterdrückung dauerte Jahre.', exEn: 'The oppression lasted years.', exHi: 'Daman saalon tak chala.', ex2: 'Sie haben gegen die Unterdrückung gekämpft.', ex2En: 'They\'ve fought against the oppression.', ex2Hi: 'Unhone daman ke khilaaf ladaai ki hai.' },
    { de: 'vereinen', pos: 'verb', level: 'B2', register: 'written', en: 'to unite, unify', hi: 'एकजुट करना', ex: 'Die Krise vereinte die Länder.', exEn: 'The crisis united the countries.', exHi: 'Sankat ne deshon ko ekjut kiya.', ex2: 'Sie haben ihre Kräfte vereint.', ex2En: 'They\'ve united their forces.', ex2Hi: 'Unhone apni shaktiyaan ekjut ki hain.', conj: { praesens: 'vereint', praeteritum: 'vereinte', perfekt: 'hat vereint' } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Modalitätsersatz?',
      body: [ 'German often replaces modal verbs, especially "müssen", with more formal structures used in business, administrative, and written German.' ],
      table: {
        head: ['Everyday (Modalverb)', 'Formal (Modalitätsersatz)'],
        rows: [
          ['Ich muss den Bericht schreiben.', '<span class="de r-habenzu">Ich habe den Bericht zu schreiben.</span>'],
          ['Das Formular muss ausgefüllt werden.', '<span class="de r-seinzu">Das Formular ist auszufüllen.</span>']
        ]
      },
      hinglish: 'German aksar modal verbs ki jagah \u2014 khaas kar <b>m\u00fcssen</b> ki jagah \u2014 zyada formal structures use karta hai. Yeh business, official aur likhi hui German mein bahut aate hain.'
    },
    {
      title: 'haben + zu',
      body: [ 'Structure: Subject + haben + zu + Infinitiv. Meaning: the SUBJECT has the obligation — this emphasises WHO is responsible.' ],
      table: {
        head: ['Example', 'Meaning'],
        rows: [
          ['<span class="de r-habenzu">Ich habe den Bericht zu schreiben.</span>', 'I have to write the report.'],
          ['<span class="de r-habenzu">Wir haben das Projekt abzuschließen.</span>', 'We have to complete the project.'],
          ['<span class="de r-habenzu">Du hast das Formular auszufüllen.</span>', 'You have to fill out the form.'],
          ['<span class="de r-habenzu">Sie hat die Unterlagen einzureichen.</span>', 'She has to submit the documents.']
        ]
      },
      hinglish: 'Structure yeh hai: subject + <b>haben</b> + <b>zu</b> + Infinitiv. Iska matlab hai ki kaam karne ki zimmedaari <b>us subject</b> ki hai \u2014 isliye zor is baat par hota hai ki kaam <b>kisko</b> karna hai.'
    },
    {
      title: 'sein + zu',
      body: [ 'Structure: Subject + sein + zu + Infinitiv. Meaning: the subject is "to be done" — focus is on the TASK, impersonal and common in formal writing.' ],
      table: {
        head: ['Example', 'Meaning'],
        rows: [
          ['<span class="de r-seinzu">Der Vertrag ist zu unterschreiben.</span>', 'The contract is to be signed.'],
          ['<span class="de r-seinzu">Die Bewerbung ist einzureichen.</span>', 'The application is to be submitted.'],
          ['<span class="de r-seinzu">Die Aufgabe ist zu erledigen.</span>', 'The task is to be done.'],
          ['<span class="de r-seinzu">Die Daten sind zu überprüfen.</span>', 'The data is to be checked.']
        ]
      },
      hinglish: 'Structure yeh hai: subject + <b>sein</b> + <b>zu</b> + Infinitiv. Iska matlab hai ki kaam <b>kiya jaana hai</b> \u2014 par yeh nahi batata ki kaun karega. Isliye yeh impersonal lagta hai aur official writing mein bahut aata hai.'
    },
    {
      title: 'Trennbare Verben: zu kommt in die Mitte',
      body: [
        'When the infinitive is a separable verb, <b>zu</b> does not stand in front of it \u2014 it slots INSIDE the word, between the prefix and the stem. This is the same rule you know from <i>Infinitiv mit zu</i>, and it applies to both haben + zu and sein + zu.'
      ],
      table: {
        head: ['Verb', 'With zu', 'Example'],
        rows: [
          ['ausfüllen', 'aus<b>zu</b>füllen', '<span class="de">Das Formular ist auszufüllen.</span>'],
          ['einreichen', 'ein<b>zu</b>reichen', '<span class="de">Die Bewerbung ist einzureichen.</span>'],
          ['abschließen', 'ab<b>zu</b>schließen', '<span class="de">Wir haben das Projekt abzuschließen.</span>'],
          ['mitbringen', 'mit<b>zu</b>bringen', '<span class="de">Die Teilnehmer haben ihre Ausweise mitzubringen.</span>'],
          ['unterschreiben (untrennbar)', '<b>zu</b> unterschreiben', '<span class="de">Der Vertrag ist zu unterschreiben.</span>']
        ]
      },
      note: 'Inseparable verbs (unterschreiben, erledigen, überprüfen) keep <b>zu</b> as a separate word in front, exactly as normal.',
      hinglish: 'Agar verb separable hai, to <b>zu</b> uske aage nahi lagta \u2014 woh word ke <b>andar</b> chala jaata hai, prefix aur stem ke beech. Isliye <span class="de">auszuf\u00fcllen</span>, na ki <i>zu ausf\u00fcllen</i>. Yeh wahi rule hai jo tumne <i>Infinitiv mit zu</i> mein dekha tha. Aur inseparable verbs (unterschreiben, erledigen) mein <b>zu</b> normal tarike se alag hi rehta hai: <span class="de">zu unterschreiben</span>.'
    },
    {
      title: 'haben + zu vs sein + zu',
      body: [ 'haben + zu focuses on WHO must do it (responsibility). sein + zu focuses on WHAT has to be done (task). Students must clearly distinguish person responsible vs task to be completed.' ],
      table: {
        head: ['haben + zu (Person)', 'sein + zu (Task)'],
        rows: [
          ['Ich habe den Bericht zu schreiben.', 'Der Bericht ist zu schreiben.'],
          ['Der Mitarbeiter hat die Daten zu prüfen.', 'Die Daten sind zu prüfen.']
        ]
      },
      hinglish: 'Farak simple hai \u2014 <b>haben + zu</b> batata hai ki kaam <b>kisko</b> karna hai, aur <b>sein + zu</b> batata hai ki <b>kya</b> kiya jaana hai. Isliye person ke saath haben, aur kaam ke saath sein.'
    },
    {
      title: 'Vergleich mit Modalverben',
      body: [ 'The meaning is similar to modal verbs, but the register is significantly more formal — think contracts, regulations, official notices.' ],
      table: {
        head: ['Modalverb', 'Modalitätsersatz'],
        rows: [
          ['Ich muss den Bericht schreiben.', 'Ich habe den Bericht zu schreiben.'],
          ['Der Bericht muss geschrieben werden.', 'Der Bericht ist zu schreiben.']
        ]
      },
      hinglish: 'Matlab lagbhag <b>m\u00fcssen</b> jaisa hi hai, bas register bahut formal ho jaata hai. Contracts, rules aur official notices mein yahi structures aate hain \u2014 dosto se baat karte waqt inhe use karo to ajeeb lagega.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These examples reflect authentic Goethe B2 workplace, university, and administrative situations.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Alle Dokumente sind bis Freitag einzureichen.', 'All documents are to be submitted by Friday.'],
          ['Die Unterlagen sind vollständig auszufüllen.', 'The documents are to be filled out completely.'],
          ['Die Teilnehmer haben ihre Ausweise mitzubringen.', 'The participants have to bring their ID cards along.'],
          ['Der Bericht ist morgen vorzulegen.', 'The report is to be presented tomorrow.']
        ]
      },
      hinglish: 'Yeh examples wahi hain jo Goethe B2 ke office, university aur official notices wale texts mein asli mein aate hain.'
    },
    {
      title: 'Register',
      body: [ 'These structures appear constantly in official letters, contracts, regulations, legal texts, university notices, business communication, manuals, and academic German.' ],
      hinglish: 'Yeh structures official letters, contracts, rules, university notices aur manuals mein bahut aate hain. Reading mein inhe pehchaanna zaroori hai, aur formal writing mein use karo to German mature lagta hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from wrong word order, mixing up haben+zu with sein+zu, or misplacing "zu".' ],
      mistakes: [
        { wrong: 'Ich habe schreiben den Bericht zu.', right: 'Ich habe den Bericht zu schreiben.', why: '"zu" + Infinitiv always sits at the very end of the clause, right after the object.' },
        { wrong: 'Der Vertrag ist unterschreiben zu.', right: 'Der Vertrag ist zu unterschreiben.', why: '"zu" comes immediately before the infinitive, not after it.' },
        { wrong: 'Ich bin den Bericht zu schreiben.', right: 'Ich habe den Bericht zu schreiben.', why: 'Only "haben" (not "sein") is used when a PERSON is responsible for doing something.' },
        { wrong: 'Die Unterlagen haben auszufüllen.', right: 'Die Unterlagen sind auszufüllen.', why: 'Documents cannot "haben" a duty — use "sein + zu" when the focus is on the task, not a person.' },
        { wrong: 'Wir haben das Projekt zu abschließen.', right: 'Wir haben das Projekt abzuschließen.', why: 'With a separable verb the <b>zu</b> goes INSIDE the word, between prefix and stem \u2014 abzuschlie\u00dfen, not zu abschlie\u00dfen.' }
      ],
      hinglish: 'Yeh galtiyan teen wajah se hoti hain \u2014 <b>zu</b> + Infinitiv ko sentence ke end mein na rakhna, person aur task ke liye galat helper chunna, ya separable verb mein <b>zu</b> ko andar na daalna.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Ask yourself: WHO has the duty? → haben + zu. WHAT has to be done? → sein + zu. Person → haben. Task → sein.' ],
      note: 'Memory trick: Person → haben + zu. Task → sein + zu.',
      hinglish: 'Khud se poochho \u2014 kaam <b>kisko</b> karna hai? To <b>haben + zu</b>. Aur <b>kya</b> kiya jaana hai? To <b>sein + zu</b>. Person ke saath haben, task ke saath sein.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Kolumne: Eine schwierige Berufsentscheidung',
    titleEn: 'Column: a difficult career decision',
    tokens: [
      { w: 'Vor', role: 'plain', en: 'before', hi: 'पहले', type: 'Preposition · Dat.' },
      { w: 'jeder', role: 'plain', en: 'every (fem. dat.)', hi: 'हर', type: 'Determiner · Dat.' },
      { w: 'Berufsentscheidung', role: 'plain', en: 'career decision (Satzende)', hi: 'करियर निर्णय (Satzende)', type: 'Noun · fem.', why: 'die Berufsentscheidung (this chapter).' },
      { w: 'hat', role: 'r-verb', en: 'has (haben + zu + Infinitiv)', hi: 'है (haben + zu)', type: 'Verb · haben + zu + Infinitiv (Modalitätsersatz)', why: 'haben + zu + Infinitiv = müssen: an alternative to the modal verb, common in formal writing (this chapter).' },
      { w: 'man', role: 'plain', en: 'one', hi: 'कोई', type: 'Pronoun' },
      { w: 'gründlich', role: 'plain', en: 'thoroughly', hi: 'गहराई से', type: 'Adverb' },
      { w: 'über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'eigenen', role: 'plain', en: 'own', hi: 'अपनी', type: 'Adjective' },
      { w: 'Stärken', role: 'plain', en: 'strengths (Satzende)', hi: 'ताक़तें (Satzende)', type: 'Noun · plural' },
      { w: 'nachzudenken', role: 'r-verb', en: 'to reflect (Satzende, Modalitätsersatz)', hi: 'सोचना (Satzende)', type: 'Verb · nachdenken (Infinitiv mit zu, Modalitätsersatz)' },
      { w: '.', plain: true },
      { w: 'Diese', role: 'plain', en: 'this', hi: 'यह', type: 'Determiner' },
      { w: 'Aufgabe', role: 'plain', en: 'task (Satzende)', hi: 'कार्य (Satzende)', type: 'Noun · fem.' },
      { w: 'ist', role: 'r-verb', en: 'is (sein + zu + Infinitiv)', hi: 'है (sein + zu)', type: 'Verb · sein + zu + Infinitiv (Modalitätsersatz)', why: 'sein + zu + Infinitiv can express either müssen or können, often with a passive meaning (this chapter).' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'wenigen', role: 'plain', en: 'a few', hi: 'कुछ', type: 'Adjective' },
      { w: 'Stunden', role: 'plain', en: 'hours (Satzende)', hi: 'घंटों (Satzende)', type: 'Noun · plural' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'lösen', role: 'r-verb', en: 'solve (Satzende, Modalitätsersatz)', hi: 'हल करना (Satzende)', type: 'Verb · lösen (Infinitiv mit zu, Modalitätsersatz)', why: '"ist … zu lösen" = kann gelöst werden — the passive-like meaning of sein + zu + Infinitiv (this chapter).' },
      { w: '.', plain: true },
      { w: 'Man', role: 'plain', en: 'one', hi: 'कोई', type: 'Pronoun' },
      { w: 'braucht', role: 'plain', en: 'needs', hi: 'ज़रूरत है', type: 'Verb · brauchen' },
      { w: 'Konzentration', role: 'plain', en: 'concentration', hi: 'एकाग्रता', type: 'Noun · fem.', why: 'die Konzentration (this chapter).' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'Zeit', role: 'plain', en: 'time (Satzende)', hi: 'समय (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Zum', role: 'plain', en: 'to', hi: 'में', type: 'Contraction · zu dem' },
      { w: 'Glück', role: 'plain', en: 'luck', hi: 'भाग्य', type: 'Noun · neut.' },
      { w: 'ist', role: 'r-verb', en: 'is (sein + zu + Infinitiv)', hi: 'है (sein + zu)', type: 'Verb · sein + zu + Infinitiv (Modalitätsersatz)' },
      { w: 'diese', role: 'plain', en: 'this', hi: 'यह', type: 'Determiner' },
      { w: 'Freiheit', role: 'plain', en: 'freedom (Satzende)', hi: 'स्वतंत्रता (Satzende)', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'ähnlich', role: 'plain', en: 'similar to', hi: 'के समान', type: 'Adjective' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Meinungsfreiheit', role: 'plain', en: 'freedom of opinion (Satzende)', hi: 'विचार की स्वतंत्रता (Satzende)', type: 'Noun · fem.', why: 'die Meinungsfreiheit (this chapter).' },
      { w: ',', plain: true },
      { w: 'niemandem', role: 'plain', en: 'no one (dat.)', hi: 'किसी को नहीं', type: 'Pronoun · Dat.' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'nehmen', role: 'r-verb', en: 'take (Satzende, Modalitätsersatz)', hi: 'लेना (Satzende)', type: 'Verb · nehmen (Infinitiv mit zu, Modalitätsersatz)' },
      { w: '.', plain: true },
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Pronoun · indefinite' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Team', role: 'plain', en: 'team', hi: 'टीम', type: 'Noun · neut.' },
      { w: 'arbeitet', role: 'plain', en: 'works (Satzende)', hi: 'काम करता है (Satzende)', type: 'Verb · arbeiten (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'hat', role: 'r-verb', en: 'has (Modalitätsersatz)', hi: 'रखना है', type: 'Verb · haben (Modalitätsersatz)', why: 'haben + zu + Infinitiv = müssen: an obligation (this chapter).' },
      { w: 'außerdem', role: 'plain', en: 'moreover', hi: 'इसके अलावा', type: 'Adverb' },
      { w: 'stets', role: 'plain', en: 'always', hi: 'हमेशा', type: 'Adverb' },
      { w: 'Rücksicht', role: 'plain', en: 'consideration', hi: 'ध्यान', type: 'Noun · fem.' },
      { w: 'auf', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'यह', type: 'Article' },
      { w: 'Kollegen', role: 'plain', en: 'colleagues (Satzende)', hi: 'सहकर्मी (Satzende)', type: 'Noun · plural' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'nehmen', role: 'r-verb', en: 'take (Satzende, Modalitätsersatz)', hi: 'लेना (Satzende)', type: 'Verb · nehmen (Modalitätsersatz)' },
      { w: '.', plain: true },
      { w: 'Letztlich', role: 'plain', en: 'ultimately', hi: 'आख़िरकार', type: 'Adverb' },
      { w: 'ist', role: 'r-verb', en: 'is (sein + zu + Infinitiv)', hi: 'है (sein + zu)', type: 'Verb · sein + zu + Infinitiv (Modalitätsersatz)' },
      { w: 'jede', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Entscheidung', role: 'plain', en: 'decision (Satzende)', hi: 'फ़ैसला (Satzende)', type: 'Noun · fem.' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'केवल', type: 'Adverb' },
      { w: 'im', role: 'plain', en: 'in', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Rückblick', role: 'plain', en: 'hindsight (Satzende)', hi: 'पीछे मुड़कर देखने पर (Satzende)', type: 'Noun · masc.' },
      { w: 'wirklich', role: 'plain', en: 'truly', hi: 'सच में', type: 'Adverb' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'bewerten', role: 'r-verb', en: 'evaluate (Satzende, Modalitätsersatz)', hi: 'आंकना (Satzende)', type: 'Verb · bewerten (Infinitiv mit zu, Modalitätsersatz)' },
      { w: '.', plain: true },
      { w: 'Es', role: 'plain', en: 'it', hi: 'यह', type: 'Pronomen' },
      { w: 'ist', role: 'r-verb', en: 'is (Modalitätsersatz)', hi: 'है', type: 'Verb · sein (Modalitätsersatz)' },
      { w: 'auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'immer', role: 'plain', en: 'always', hi: 'हमेशा', type: 'Adverb' },
      { w: 'leicht', role: 'plain', en: 'easily (Satzende)', hi: 'आसानी से (Satzende)', type: 'Adjective' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'sagen', role: 'r-verb', en: 'say (Satzende, Modalitätsersatz)', hi: 'कहना (Satzende)', type: 'Verb · sagen (Modalitätsersatz)' },
      { w: ',', plain: true },
      { w: 'welcher', role: 'plain', en: 'which', hi: 'कौन सा', type: 'Determiner' },
      { w: 'Weg', role: 'plain', en: 'path', hi: 'रास्ता', type: 'Noun · masc.' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'वह', type: 'Article' },
      { w: 'richtige', role: 'plain', en: 'right one (Satzende)', hi: 'सही (Satzende)', type: 'Adjective' },
      { w: 'ist', role: 'plain', en: 'is (Satzende)', hi: 'है (Satzende)', type: 'Verb · sein (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Zum', role: 'plain', en: 'to the', hi: '', type: 'Contraction · zu dem' },
      { w: 'Glück', role: 'plain', en: 'luck (Satzende)', hi: 'ख़ुशक़िस्मती से (Satzende)', type: 'Noun · neut.' },
      { w: 'ist', role: 'r-verb', en: 'is (Modalitätsersatz)', hi: 'है', type: 'Verb · sein (Modalitätsersatz)' },
      { w: 'diese', role: 'plain', en: 'this', hi: 'इस', type: 'Determiner' },
      { w: 'Erfahrung', role: 'plain', en: 'experience (Satzende)', hi: 'अनुभव (Satzende)', type: 'Noun · fem.' },
      { w: 'auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'aus', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'Gesprächen', role: 'plain', en: 'conversations (Satzende)', hi: 'बातचीत (Satzende)', type: 'Noun · plural' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'Mentoren', role: 'plain', en: 'mentors (Satzende)', hi: 'गुरुओं (Satzende)', type: 'Noun · plural' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'gewinnen', role: 'r-verb', en: 'gain (Satzende, Modalitätsersatz)', hi: 'प्राप्त करना (Satzende)', type: 'Verb · gewinnen (Modalitätsersatz)' },
      { w: '.', plain: true }
    ],
    translation: 'Before every career decision, one has to reflect thoroughly on one\u2019s own strengths. This task cannot be solved in a few hours. One needs concentration and time. Luckily this freedom, similar to freedom of opinion, cannot be taken from anyone. Whoever works in a team also always has to show consideration for their colleagues. Ultimately, every decision can only truly be evaluated in hindsight. It also isn\u2019t always easy to say which path is the right one. Fortunately, this experience can also be gained from conversations with mentors.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_048_L001', speaker: 'Britta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, für morgen haben wir noch die Route zu planen.', en: 'Timo, for tomorrow we still have the route to plan.' },
      { id: 'B2_048_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt, und die Fahrzeit ist genau einzuhalten, sonst verpassen wir die letzte Bahn.', en: 'True, and the travel time has to be kept to precisely, or we\'ll miss the last train.' },
      { id: 'B2_048_L003', speaker: 'Britta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Das Wetter ist leider kaum vorherzusagen diese Woche.', en: 'The weather can hardly be predicted this week, unfortunately.' },
      { id: 'B2_048_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Dann ist eben eine Regenjacke einzupacken, sicher ist sicher.', en: 'Then a rain jacket just has to be packed, better safe than sorry.' }
    ],
    transcript: 'Timo, für morgen haben wir noch die Route zu planen. Stimmt, und die Fahrzeit ist genau einzuhalten, sonst verpassen wir die letzte Bahn. Das Wetter ist leider kaum vorherzusagen diese Woche. Dann ist eben eine Regenjacke einzupacken, sicher ist sicher.',
    translation: 'Timo, for tomorrow we still have the route to plan. True, and the travel time has to be kept to precisely, or we\'ll miss the last train. The weather can hardly be predicted this week, unfortunately. Then a rain jacket just has to be packed, better safe than sorry.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'für' },
      { w: 'morgen' },
      { w: 'haben' },
      { w: 'wir' },
      { w: 'noch' },
      { w: 'die' },
      { w: 'Route' },
      { w: 'zu' },
      { w: 'planen' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'die' },
      { w: 'Fahrzeit' },
      { w: 'ist' },
      { w: 'genau' },
      { w: 'einzuhalten' },
      { w: ',', plain: true },
      { w: 'sonst' },
      { w: 'verpassen' },
      { w: 'wir' },
      { w: 'die' },
      { w: 'letzte' },
      { w: 'Bahn' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'Wetter' },
      { w: 'ist' },
      { w: 'leider' },
      { w: 'kaum' },
      { w: 'vorherzusagen' },
      { w: 'diese' },
      { w: 'Woche' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'ist' },
      { w: 'eben' },
      { w: 'eine' },
      { w: 'Regenjacke' },
      { w: 'einzupacken' },
      { w: ',', plain: true },
      { w: 'sicher' },
      { w: 'ist' },
      { w: 'sicher' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was muss noch geplant werden?', qEn: 'What still needs to be planned?', options: ['das Essen', 'die Route', 'die Kleidung', 'das Auto'], optionsEn: ['the food', 'the route', 'the clothes', 'the car'], answer: 1,
        explain: '"Für morgen haben wir noch die Route zu planen."' },
      { q: 'Was ist diese Woche schwer vorherzusagen?', qEn: 'What is hard to predict this week?', options: ['der Zugfahrplan', 'das Wetter', 'die Kosten', 'die Zeit'], optionsEn: ['the train timetable', 'the weather', 'the costs', 'the time'], answer: 1,
        explain: '"Das Wetter ist leider kaum vorherzusagen diese Woche."' }
    ]
  },

  speaking: [
    { task: "Sag deinem Kollegen, was für morgen noch zu tun ist.", taskEn: "Tell your colleague what still has to be done for tomorrow.", de: "Für morgen haben wir noch die Route zu planen.", en: "For tomorrow we still have the route to plan." },
    { task: "Er nennt die Fahrzeit. Formuliere die Vorgabe.", taskEn: "He mentions the journey time. Phrase the requirement.", de: "Die Fahrzeit ist genau einzuhalten, sonst verpassen wir die letzte Bahn.", en: "The journey time is to be observed exactly, otherwise we'll miss the last train." },
    { task: "Deine Chefin fragt, was diese Woche auf dich zukommt.", taskEn: "Your boss asks what's on your plate this week.", de: "Ich habe zwei Berichte zu schreiben und drei Termine zu betreuen.", en: "I have two reports to write and three appointments to look after." },
    { task: "Ein Praktikant fragt, was bei der Expedition vorgeschrieben ist.", taskEn: "An intern asks what's compulsory on the expedition.", de: "Die Ausrüstung ist zu prüfen, und Mängel sind sofort zu melden.", en: "The equipment is to be checked, and faults are to be reported immediately." },
    { task: "Rollenspiel: Ihr verteilt die Aufgaben formell.", taskEn: "Role-play: you assign the tasks formally.", de: "Du hast die Karten zu besorgen. — Und die Listen sind zu unterschreiben.", en: "You are to get the tickets. — And the lists are to be signed." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Formal email (6-8 sentences): Write to a colleague assigning responsibilities using haben + zu (e.g. "Sie haben ... zu ...").\n\nTASK 2 — Office memo (6-8 sentences): Describe tasks that need to be done using sein + zu (e.g. "Das Formular ist ... auszufüllen").',
    starters: ['Sie haben ...', 'Das Formular ist ...'],
    placeholder: 'Sie haben den Bericht bis Freitag einzureichen. Das Formular ist vollständig auszufüllen.',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence correctly uses "sein + zu"?',
      options: ['Der Bericht ist zu schreiben.', 'Der Bericht hat zu schreiben.', 'Der Bericht ist schreiben zu.'],
      answer: 0,
      explain: '"sein + zu" puts the task in focus impersonally — "zu" comes directly before the infinitive, which sits at the end.'
    },
    gap: {
      sentence: ['Ich ', ' den Bericht zu schreiben.'],
      gaps: [ { answer: 'habe', accepts: ['habe'] } ],
      explain: '"habe" agrees with "ich" and puts the responsible person — the subject — in focus.'
    },
    match: {
      q: 'Match each sentence to whether it focuses on the person responsible or the task.',
      pairs: [
        { noun: 'Ich habe den Bericht zu schreiben.', art: 'Person responsible (haben + zu)' },
        { noun: 'Der Bericht ist zu schreiben.', art: 'Task required (sein + zu)' },
        { noun: 'Der Mitarbeiter hat die Daten zu prüfen.', art: 'Person responsible (haben + zu)' },
        { noun: 'Die Daten sind zu prüfen.', art: 'Task required (sein + zu)' }
      ]
    },
    builder: {
      target: 'Build: "The participants have to bring their ID cards along." (haben + zu, separable verb)',
      bank: ['Die', 'Teilnehmer', 'haben', 'ihre', 'Ausweise', 'mitzubringen', '.'],
      answer: ['Die', 'Teilnehmer', 'haben', 'ihre', 'Ausweise', 'mitzubringen', '.'],
      roles: { 'haben': 'r-habenzu', 'mitzubringen': 'r-habenzu' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Die Unterlagen haben auszufüllen.',
      right: 'Die Unterlagen sind auszufüllen.',
      explain: 'Documents cannot "haben" a duty — use "sein + zu" when the focus is on the task, not a responsible person.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does "haben + zu + Infinitiv" express?', options: ['The responsible person\'s obligation', 'The task, impersonally', 'A finished state'], answer: 0,
      explain: '"haben + zu" puts the SUBJECT — the person responsible — in focus.' },
    { q: 'What does "sein + zu + Infinitiv" express?', options: ['The task that must be done, impersonally', 'Who must do it', 'A strong assumption'], answer: 0,
      explain: '"sein + zu" focuses on the TASK, not on a specific responsible person.' },
    { q: 'Which sentence is correct?', options: ['Ich habe den Bericht zu schreiben.', 'Ich bin den Bericht zu schreiben.', 'Ich habe zu schreiben den Bericht.'], answer: 0,
      explain: 'Only "haben" (not "sein") is used when a person is responsible, and the infinitive with "zu" comes at the very end.' },
    { q: 'Where does "zu" go with separable verbs like "einreichen"?', options: ['Between the prefix and the stem (einzureichen)', 'Before the whole verb (zu einreichen)', 'After the verb'], answer: 0,
      explain: '"zu" is inserted between the separable prefix and the base verb: "ein-zu-reichen".' },
    { q: 'Which structure is more formal?', options: ['haben + zu / sein + zu', 'müssen', 'Both are equally informal'], answer: 0,
      explain: 'Modalitätsersatz sounds significantly more formal than plain modal verbs — common in contracts, regulations, and official notices.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-habenzu', html: 'haben + zu + Infinitiv puts the RESPONSIBLE PERSON in focus: Ich habe den Bericht zu schreiben.' },
    { c: 'r-seinzu', html: 'sein + zu + Infinitiv puts the TASK in focus, impersonally: Der Bericht ist zu schreiben.' },
    { c: 'r-habenzu', html: 'With separable verbs, "zu" is inserted between the prefix and the stem: einzureichen, mitzubringen. Both structures sound more formal than plain modal verbs.' }
  ],
  revisionTips: [
    'For every "müssen" sentence you know, practise building both its haben+zu and sein+zu counterparts.',
    'Scan a contract or official notice for "haben ... zu" or "sein ... zu" — check whether the focus is on a person or a task.',
    'Ask yourself before every obligation sentence: WHO is responsible, or WHAT must be done? That answers haben+zu vs sein+zu.'
  ]
};

window.CHAPTER = CHAPTER;
