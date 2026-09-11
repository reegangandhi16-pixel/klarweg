/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 6 · Chapter 62
   "Konjunktiv I: Berichtende Sprache" — journalistic/professional
   reporting language: reporting verbs (berichten, melden,
   erklären, mitteilen, behaupten, bestätigen, ankündigen,
   betonen, hinzufügen, schildern), source attribution (laut,
   nach Angaben von, dem Bericht zufolge), and objective vs
   subjective language. Does NOT teach Konjunktiv II replacement,
   reported questions, passive reporting, or C1 journalistic style.
   IMPORTANT: dialogue uses ONLY Silke and Timo.
   Vocabulary source: uploaded Chapter 62 list (22 items).
============================================================ */
const CHAPTER = {
  id: 'b2-62-konjunktiv-i-berichtende-sprache',
  phase: 'B2 · Phase 6',
  number: 62,
  title: 'Konjunktiv I: Berichtende Sprache',
  titleEn: 'Konjunktiv I: reporting language',
  description: 'Who said it? What did they say? How do I report it neutrally? Never your own opinion.',
  xp: 820,
  time: 80,
  difficulty: 'Advanced',
  nextChapter: { number: 63, title: 'Goethe Mini 5', titleEn: 'Phase 6 checkpoint exam' , href: 'chapter-b2-63-goethe-mini-5.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Report it. <em>Attribute</em> it. Stay neutral.',
    intro: 'For a university media project, Silke and Timo compare how different outlets report a schedule change — the reason said to be financial, citizens said to be dissatisfied — reporting neutrally, source by source, with never their own opinion mixed in.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See how journalists report without presenting personal opinion as fact'
    ],
    scene: 'Medienprojekt an der Universität',
    femaleSpeakers: ['Silke'],
    dialogue: [
      { speaker: 'Silke', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Nachrichten', role: 'r-subject', en: 'news', hi: 'ख़बरें', pron: 'NAKH-rikh-ten', type: 'Noun · plural' },
        { w: 'berichten', role: 'r-verb', en: 'report', hi: 'बताती हैं', pron: 'be-RIKH-ten', type: 'Verb · berichten', why: 'berichtende Sprache: Konjunktiv I is used in formal news reporting to distance the reporter from the claim (this chapter).', ex: 'Die Nachrichten berichten, der Zeitplan werde geändert.', exEn: 'The news reports the schedule will be changed.' },
        { w: ',', plain: true },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Zeitplan', role: 'r-subject', en: 'schedule', hi: 'समय सारिणी', pron: 'TSYTE-plahn', type: 'Noun · masc.', why: 'der Zeitplan (this chapter).', ex: 'der Zeitplan' },
        { w: 'werde', role: 'r-verb', en: 'will (Konjunktiv I)', hi: 'बदली जायेगी', pron: 'VAIR-duh', type: 'Verb · werden (Konjunktiv I)' },
        { w: 'bald', role: 'r-time', en: 'soon', hi: 'जल्द', pron: 'balt', type: 'Adverb · time' },
        { w: 'geändert', role: 'r-verb', en: 'changed', hi: 'बदली', pron: 'ge-EN-dert', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'The news reports that the schedule will be changed soon.', hi: 'Khabrein bataati hain ki samay saarani jald badli jaayegi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Man', role: 'r-subject', en: 'one', hi: 'कोई', pron: 'man', type: 'Pronoun · indefinite' },
        { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहता है', pron: 'zahkt', type: 'Verb · sagen' },
        { w: ',', plain: true },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Grund', role: 'r-subject', en: 'reason', hi: 'कारण', pron: 'grunt', type: 'Noun · masc.' },
        { w: 'sei', role: 'r-verb', en: 'was (Konjunktiv I)', hi: 'था', pron: 'zy', type: 'Verb · sein (Konjunktiv I)' },
        { w: 'finanzieller', role: 'r-akkusativ', en: 'financial', hi: 'आर्थिक', pron: 'fi-nan-tsyE-ler', type: 'Adjective', why: 'finanzieller Art = of financial nature (this chapter).', ex: 'finanzieller Art' },
        { w: 'Art', role: 'r-akkusativ', en: 'nature', hi: 'प्रकार', pron: 'art', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'It is said the reason was of financial nature.', hi: 'Kaha jaata hai ki kaaran aarthik prakaar ka tha.' },
      { speaker: 'Silke', tokens: [
        { w: 'Außerdem', role: 'r-adverb', en: 'moreover', hi: 'इसके अलावा', pron: 'OW-ser-daym', type: 'Adverb' },
        { w: 'heißt', role: 'r-verb', en: 'it is said', hi: 'कहा जाता है', pron: 'hyst', type: 'Verb · heißen', why: 'es heißt = it is said, formal reporting phrase (this chapter).', ex: 'Es heißt, die Bürger seien unzufrieden.', exEn: 'It is said the citizens are dissatisfied.' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Bürger', role: 'r-subject', en: 'citizens', hi: 'नागरिक', pron: 'BÜR-ger', type: 'Noun · plural' },
        { w: 'seien', role: 'r-verb', en: 'are (Konjunktiv I, plural)', hi: 'हैं', pron: 'ZY-en', type: 'Verb · sein (Konjunktiv I, plural)', why: 'Konjunktiv I plural of sein: seien (this chapter).', ex: 'die Bürger seien unzufrieden' },
        { w: 'unzufrieden', role: 'r-akkusativ', en: 'dissatisfied', hi: 'असंतुष्ट', pron: 'UN-tsu-free-den', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Moreover, it is said the citizens are dissatisfied.', hi: 'Iske alaava, kaha jaata hai ki naagarik asantusht hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Regierung', role: 'r-subject', en: 'government', hi: 'सरकार', pron: 'ray-GEE-rung', type: 'Noun · fem.' },
        { w: 'erklärt', role: 'r-verb', en: 'explains', hi: 'स्पष्ट करती है', pron: 'er-KLAIRT', type: 'Verb · erklären' },
        { w: ',', plain: true },
        { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'brauche', role: 'r-verb', en: 'needs (Konjunktiv I)', hi: 'ज़रूरत है', pron: 'BROW-khuh', type: 'Verb · brauchen (Konjunktiv I)' },
        { w: 'mehr', role: 'r-akkusativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Prüfung', role: 'r-akkusativ', en: 'review', hi: 'जाँच', pron: 'PRÜ-fung', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'The government explains it needs more time for the review.', hi: 'Sarkaar spasht karti hai ki use jaanch ke liye zyada samay chahiye.' },
      { speaker: 'Silke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'gespannt', role: 'r-akkusativ', en: 'curious', hi: 'उत्सुक', pron: 'ge-SHPANT', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'passiert', role: 'r-verb', en: 'happens', hi: 'होता है', pron: 'pa-SEERT', type: 'Verb · passieren' },
        { w: '.', plain: true }
      ], en: 'I am curious what happens.', hi: 'Mujhe utsukta hai ki kya hota hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Professional reports answer three questions: <b>Who said it?</b> (source), <b>What did they say?</b> (reporting verb + <span class="de r-konji">Konjunktiv I</span>), and <b>how do I stay neutral?</b> Never present someone\'s claim as your own opinion.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is KONJUNKTIV I: BERICHTENDE SPRACHE (journalistic reporting language) at B2 level: objective, neutral reporting using reporting verbs (berichten, melden, erklären, mitteilen, behaupten, bestätigen, ankündigen, betonen, hinzufügen, schildern) + Konjunktiv I, combined with source attribution (laut ..., nach Angaben von ..., dem Bericht zufolge, einer Studie zufolge, der Sprecher erklärte, die Universität teilte mit). The key principle: report what OTHERS say without presenting it as your own opinion or as confirmed fact — e.g. "Der Minister erklärt, die Lage sei stabil" (neutral) NOT "Der Minister hat recht" (subjective evaluation). ' +
    'Do NOT expect or require Konjunktiv II replacement, reported questions, passive reporting, or C1 journalistic style — those are separate topics; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that reporting verbs are followed by correct Konjunktiv I forms, not the Indicative.\n' +
    '- Check that source-attribution expressions use correct case: "laut + Dativ" (or laut + Genitiv in formal style), "nach Angaben + Genitiv", "X zufolge" as a postposition taking Dativ AFTER the noun (einer Studie zufolge, not zufolge einer Studie in casual style — though the fronted form does exist formally, prefer flagging only clear case errors, not word order variants).\n' +
    '- Flag any sentence presenting a claim, opinion, or unverified statement as established fact (e.g. "Der Minister hat recht", "Der Verdächtige ist schuldig") as a neutrality violation — this is the most important thing to catch in this chapter.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Neutrality check:</b> one sentence on whether the learner\'s report stayed objective (source attributed, Konjunktiv I used, no personal opinion presented as fact).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you report neutrally, attribute sources clearly, and never mix in your own opinion. Ready for the Phase 6 checkpoint next.',
    mid: 'Good. Re-read the Source Attribution Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: who said it, what did they say, and stay neutral.'
  },

  parserSentence: [
    { w: 'Laut', role: 'r-source' }, { w: 'der', role: 'r-source' }, { w: 'Polizei', role: 'r-source' },
    { w: 'sei', role: 'r-konji' }, { w: 'der', role: 'plain' }, { w: 'Verdächtige', role: 'plain' }, { w: 'festgenommen', role: 'plain' }, { w: 'worden', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: report the source, use Konjunktiv I, and stay neutral.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Silke and Timo prepare a media project, comparing news sources and reporting objectively.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 22 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master reporting verbs, source attribution, and objective vs subjective language.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a newspaper article and a business report full of attributed, neutral reporting.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify source, reporting verb, reported statement, and neutral tone.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Summarize interviews and present research findings using neutral reporting language.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite opinion-based statements as objective reports and write a short newspaper report.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill reporting verb choice, source identification, and rewriting into objective language.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 820 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 22 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '6 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Reporting-verb selection drills, source-attribution practice, and a 200-word report task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full reporting-verb table, source-attribution chart, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'berichten, melden, erklären, mitteilen, behaupten, bestätigen', text: 'Choose the right reporting verb for the right journalistic context' },
    { de: 'Laut der Polizei ... / Nach Angaben des Ministeriums ...', text: 'Attribute information to its source clearly' },
    { de: 'Der Minister erklärt, die Lage sei stabil. (NOT: Der Minister hat recht.)', text: 'Distinguish objective reporting from subjective evaluation' },
    { de: 'Einer Studie zufolge ... / Dem Bericht zufolge ...', text: 'Use "zufolge" correctly as a postposition with Dativ' },
    { de: 'Newspapers, business reports, academic articles, Goethe B2', text: 'Recognize the register where neutral reporting language dominates' }
  ],

  // ---------- Vocabulary (22 items — uploaded chapter-62 list) ----------
  vocab: [
    { de: 'widerrufen', pos: 'verb', level: 'B2', register: 'written', en: 'to revoke, retract', hi: 'रद्द करना', ex: 'Der Sprecher widerrief seine Aussage.', exEn: 'The spokesperson retracted his statement.', exHi: 'Pravakta ne apna bayaan wapas liya.', ex2: 'Sie haben den Vertrag widerrufen.', ex2En: 'They\'ve revoked the contract.', ex2Hi: 'Unhone anubandh radd kiya hai.', conj: { praesens: 'widerruft', praeteritum: 'widerrief', perfekt: 'hat widerrufen' } },
    { de: 'wohlwollend', pos: 'adjective', level: 'B2', register: 'written', en: 'benevolent, well-meaning', hi: 'सद्भावनापूर्ण', ex: 'Die Reaktion sei wohlwollend gewesen.', exEn: 'The reaction was benevolent.', exHi: 'Pratikriya sadbhaavna poorn thi.', ex2: 'Sie haben wohlwollend reagiert.', ex2En: 'They\'ve reacted benevolently.', ex2Hi: 'Unhone sadbhaavna poorn pratikriya di hai.' },
    { de: 'Zeitplan', art: 'der', gender: 'm', plural: 'Zeitpläne', pos: 'noun', level: 'B2', register: 'both', en: 'schedule, timetable', hi: 'समय-सारणी', ex: 'Nach Angaben des Ministeriums werde der Zeitplan überarbeitet.', exEn: 'According to the ministry\'s information, the schedule will be revised.', exHi: 'Mantraalay ki jaankaari ke anusaar, samay-saarni sanshodhit ki jaayegi.', ex2: 'Sie haben den Zeitplan eingehalten.', ex2En: 'They\'ve kept to the schedule.', ex2Hi: 'Unhone samay-saarni ka paalan kiya hai.' },
    { de: 'Zeitraum', art: 'der', gender: 'm', plural: 'Zeiträume', pos: 'noun', level: 'B2', register: 'written', en: 'period of time', hi: 'समय अवधि', ex: 'Der Bericht deckt einen langen Zeitraum ab.', exEn: 'The report covers a long period of time.', exHi: 'Report ek lambi samay avadhi ko cover karti hai.', ex2: 'Sie haben den Zeitraum verlängert.', ex2En: 'They\'ve extended the period.', ex2Hi: 'Unhone avadhi badhaayi hai.' },
    { de: 'Arbeitsatmosphäre', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'working atmosphere', hi: 'कार्य वातावरण', ex: 'Der Bericht lobt die Arbeitsatmosphäre.', exEn: 'The report praises the working atmosphere.', exHi: 'Report kaam ke mahaul ki tareef karti hai.', ex2: 'Sie haben die Arbeitsatmosphäre verbessert.', ex2En: 'They\'ve improved the working atmosphere.', ex2Hi: 'Unhone kaam ka mahaul behtar banaaya hai.' },
    { de: 'Bestellformular', art: 'das', gender: 'n', plural: 'Bestellformulare', pos: 'noun', level: 'B2', register: 'written', en: 'order form', hi: 'ऑर्डर फॉर्म', ex: 'Sie füllte das Bestellformular aus.', exEn: 'She filled in the order form.', exHi: 'Usne order form bhara.', ex2: 'Sie haben das Bestellformular vereinfacht.', ex2En: 'They\'ve simplified the order form.', ex2Hi: 'Unhone order form aasaan banaaya hai.' },
    { de: 'Blutzuckerspiegel', art: 'der', gender: 'm', plural: 'Blutzuckerspiegel', pos: 'noun', level: 'B2', register: 'written', en: 'blood sugar level', hi: 'रक्त शर्करा स्तर', ex: 'Der Arzt maß den Blutzuckerspiegel.', exEn: 'The doctor measured the blood sugar level.', exHi: 'Doctor ne rakt sharkara star maapa.', ex2: 'Sie haben den Blutzuckerspiegel kontrolliert.', ex2En: 'They\'ve checked the blood sugar level.', ex2Hi: 'Unhone rakt sharkara star jaancha hai.' },
    { de: 'Denksportaufgabe', art: 'die', gender: 'f', plural: 'Denksportaufgaben', pos: 'noun', level: 'B2', register: 'written', en: 'brain teaser', hi: 'पहेली', ex: 'Sie löste die Denksportaufgabe schnell.', exEn: 'She solved the brain teaser quickly.', exHi: 'Usne paheli jaldi hal ki.', ex2: 'Sie haben eine neue Denksportaufgabe gestellt.', ex2En: 'They\'ve posed a new brain teaser.', ex2Hi: 'Unhone ek nayi paheli rakhi hai.' },
    { de: 'Interneteinkauf', art: 'der', gender: 'm', plural: 'Interneteinkäufe', pos: 'noun', level: 'B2', register: 'written', en: 'online purchase', hi: 'ऑनलाइन खरीदारी', ex: 'Einer Studie zufolge wächst der Interneteinkauf.', exEn: 'According to a study, online purchasing is growing.', exHi: 'Ek shodh ke anusaar, online kharidaari badh rahi hai.', ex2: 'Sie haben ihren Interneteinkauf reduziert.', ex2En: 'They\'ve reduced their online purchasing.', ex2Hi: 'Unhone apni online kharidaari kam ki hai.' },
    { de: 'Konfliktpotential', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'potential for conflict', hi: 'संघर्ष की संभावना', ex: 'Der Sprecher erklärte, das Konfliktpotential sei gering.', exEn: 'The spokesperson stated the potential for conflict is low.', exHi: 'Pravakta ne bataaya ki sangharsh ki sambhaavna kam hai.', ex2: 'Sie haben das Konfliktpotential analysiert.', ex2En: 'They\'ve analysed the potential for conflict.', ex2Hi: 'Unhone sangharsh ki sambhaavna ka vishleshan kiya hai.' },
    { de: 'Kreditkartenbetrug', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'credit-card fraud', hi: 'क्रेडिट कार्ड धोखाधड़ी', ex: 'Die Autoren erklären, der Kreditkartenbetrug habe zugenommen.', exEn: 'The authors explain that credit-card fraud has increased.', exHi: 'Lekhak samjhaate hain ki credit card dhokha badha hai.', ex2: 'Sie haben vor Kreditkartenbetrug gewarnt.', ex2En: 'They\'ve warned about credit-card fraud.', ex2Hi: 'Unhone credit card dhokhe ke baare mein chetaavni di hai.' },
    { de: 'Mindestbestellwert', art: 'der', gender: 'm', plural: 'Mindestbestellwerte', pos: 'noun', level: 'B2', register: 'written', en: 'minimum order value', hi: 'न्यूनतम ऑर्डर राशि', ex: 'Dem Bericht zufolge steigt der Mindestbestellwert.', exEn: 'According to the report, the minimum order value is rising.', exHi: 'Report ke anusaar, kam se kam order raashi badh rahi hai.', ex2: 'Sie haben den Mindestbestellwert gesenkt.', ex2En: 'They\'ve lowered the minimum order value.', ex2Hi: 'Unhone kam se kam order raashi ghataayi hai.' },
    { de: 'Monoskibobfahrer', art: 'der/die', gender: 'm/f', plural: 'Monoskibobfahrer/innen', pos: 'noun', level: 'B2', register: 'written', en: 'mono-ski bob racer', hi: 'मोनो-स्की बॉब रेसर', ex: 'Der Trainer kündigte an, die Monoskibobfahrerin werde den Weltmeistertitel verteidigen.', exEn: 'The coach announced the mono-ski bob racer will defend the world champion title.', exHi: 'Coach ne bataaya ki mono-ski bob racer vishv champion khitaab ki raksha karegi.', ex2: 'Sie haben einen neuen Monoskibobfahrer entdeckt.', ex2En: 'They\'ve discovered a new mono-ski bob racer.', ex2Hi: 'Unhein ek naya mono-ski bob racer mila hai.' },
    { de: 'Polizeimeister', art: 'der/die', gender: 'm/f', plural: 'Polizeimeister/innen', pos: 'noun', level: 'B2', register: 'written', en: 'police sergeant', hi: 'पुलिस सार्जेंट', ex: 'Die Polizeimeisterin bestätigt, der Verdächtige sei festgenommen worden.', exEn: 'The police sergeant confirms the suspect has been arrested.', exHi: 'Police sergeant pushti karti hai ki sandigdh giraftaar kar liya gaya hai.', ex2: 'Sie haben mit dem Polizeimeister gesprochen.', ex2En: 'They\'ve spoken with the police sergeant.', ex2Hi: 'Unhone police sergeant se baat ki hai.' },
    { de: 'Rechnungsbetrag', art: 'der', gender: 'm', plural: 'Rechnungsbeträge', pos: 'noun', level: 'B2', register: 'written', en: 'invoice amount', hi: 'बिल राशि', ex: 'Der Rechnungsbetrag wurde korrigiert.', exEn: 'The invoice amount was corrected.', exHi: 'Bill raashi theek ki gayi.', ex2: 'Sie haben den Rechnungsbetrag überprüft.', ex2En: 'They\'ve checked the invoice amount.', ex2Hi: 'Unhone bill raashi jaanchi hai.' },
    { de: 'Schwager', art: 'der/die', gender: 'm/f', plural: 'Schwäger/Schwägerinnen', pos: 'noun', level: 'B2', register: 'both', en: 'brother-/sister-in-law', hi: 'साला/साली, जीजा/भाभी', ex: 'Mein Schwager arbeitet als Journalist.', exEn: 'My brother-in-law works as a journalist.', exHi: 'Mera saala patrakaar ke roop mein kaam karta hai.', ex2: 'Sie haben ihren Schwager eingeladen.', ex2En: 'They\'ve invited their brother-in-law.', ex2Hi: 'Unhone apne saale ko bulaaya hai.' },
    { de: 'Stadtbibliothek', art: 'die', gender: 'f', plural: 'Stadtbibliotheken', pos: 'noun', level: 'B2', register: 'written', en: 'city library', hi: 'शहर पुस्तकालय', ex: 'Die Stadtbibliothek teilte mit, sie werde renoviert.', exEn: 'The city library announced it will be renovated.', exHi: 'Shahar pustakaalay ne bataaya ki yeh naveenikrit ki jaayegi.', ex2: 'Sie haben die Stadtbibliothek besucht.', ex2En: 'They\'ve visited the city library.', ex2Hi: 'Unhone shahar pustakaalay ka daura kiya hai.' },
    { de: 'Studentenwohnheim', art: 'das', gender: 'n', plural: 'Studentenwohnheime', pos: 'noun', level: 'B2', register: 'written', en: 'student hall of residence', hi: 'छात्र आवास', ex: 'Die Universität teilte mit, das Studentenwohnheim werde renoviert.', exEn: 'The university announced that the student hall of residence will be renovated.', exHi: 'University ne bataaya ki chhaatra aavaas naveenikrit kiya jaayega.', ex2: 'Sie haben im Studentenwohnheim gewohnt.', ex2En: 'They\'ve lived in the student hall of residence.', ex2Hi: 'Woh chhaatra aavaas mein rahe hain.' },
    { de: 'Terminvorschlag', art: 'der', gender: 'm', plural: 'Terminvorschläge', pos: 'noun', level: 'B2', register: 'written', en: 'suggested appointment', hi: 'सुझाई गई तारीख', ex: 'Sie sandte einen Terminvorschlag.', exEn: 'She sent a suggested appointment.', exHi: 'Usne ek sujhaayi gayi taareekh bheji.', ex2: 'Sie haben den Terminvorschlag angenommen.', ex2En: 'They\'ve accepted the suggested appointment.', ex2Hi: 'Unhone sujhaayi gayi taareekh sweekaar ki hai.' },
    { de: 'Virenschutzprogramm', art: 'das', gender: 'n', plural: 'Virenschutzprogramme', pos: 'noun', level: 'B2', register: 'written', en: 'antivirus program', hi: 'एंटीवायरस प्रोग्राम', ex: 'Sie installierte ein Virenschutzprogramm.', exEn: 'She installed an antivirus program.', exHi: 'Usne ek antivirus program install kiya.', ex2: 'Sie haben das Virenschutzprogramm aktualisiert.', ex2En: 'They\'ve updated the antivirus program.', ex2Hi: 'Unhone antivirus program update kiya hai.' },
    { de: 'Visabestimmungen', art: 'die', gender: 'plural', plural: '— (Pl.)', pos: 'noun', level: 'B2', register: 'written', en: 'visa regulations', hi: 'वीज़ा नियम', ex: 'Die Visabestimmungen haben sich geändert.', exEn: 'The visa regulations have changed.', exHi: 'Visa niyam badal gaye hain.', ex2: 'Sie haben die Visabestimmungen überprüft.', ex2En: 'They\'ve checked the visa regulations.', ex2Hi: 'Unhone visa niyam jaanche hain.' },
    { de: 'Weltmeistertitel', art: 'der', gender: 'm', plural: 'Weltmeistertitel', pos: 'noun', level: 'B2', register: 'written', en: 'world champion title', hi: 'विश्व चैंपियन खिताब', ex: 'Sie werde den Weltmeistertitel verteidigen.', exEn: 'She will defend the world champion title.', exHi: 'Woh vishv champion khitaab ki raksha karegi.', ex2: 'Sie haben den Weltmeistertitel gewonnen.', ex2En: 'They\'ve won the world champion title.', ex2Hi: 'Unhone vishv champion khitaab jeeta hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Berichtende Sprache?',
      body: [ 'Reporting language communicates what OTHER people say, not what the writer believes. The newspaper reports the statement without confirming it.' ],
      table: {
        head: ['Original statement', 'Reported (neutral)'],
        rows: [
          ['Der Minister erklärt: „Die Lage verbessert sich."', 'Die Zeitung berichtet, der Minister <span class="de r-konji">erkläre</span>, die Lage <span class="de r-konji">verbessere</span> sich.']
        ]
      },
      hinglish: 'Reporting language yeh batati hai ki <b>doosre log</b> kya keh rahe hain \u2014 writer khud kya sochta hai, woh nahi. Newspaper baat aage pahunchata hai par uski sachai ki zimmedaari nahi leta, aur Konjunktiv I se yahi signal milta hai.'
    },
    {
      title: 'Neutrale Berichterstattung',
      body: [ 'Objective reporting avoids personal opinion — never state a claim as your own established fact.' ],
      table: {
        head: ['Wrong (subjective)', 'Neutral (correct)'],
        rows: [
          ['Der Minister hat recht.', 'Der Minister erklärt, die Lage <span class="de r-konji">sei</span> stabil.']
        ]
      },
      hinglish: 'Objective reporting mein apni raay nahi aati. Kisi ki baat ko seedha fact ki tarah mat likho \u2014 use us insaan ke naam se attribute karo aur Konjunktiv I use karo. Farak dekho: <span class="de">Der Minister hat recht</span> tumhari raay hai, par <span class="de">Der Minister erkl\u00e4rt, die Lage sei stabil</span> sirf report hai.'
    },
    {
      title: 'Berichtende Verben (reporting verbs)',
      body: [ 'Har reporting verb ka apna rang hota hai, isliye inhe soch kar chuno. <b>berichten</b> aur <b>melden</b> neutral news ke liye hain, <b>erkl\u00e4ren</b> aur <b>mitteilen</b> official bayaan ke liye, <b>best\u00e4tigen</b> tab jab baat confirm ho rahi ho, aur <b>behaupten</b> tab jab dava par shak ho. Isliye <b>behaupten</b> likhne se hi reader ko lagta hai ki baat sabit nahi hui.' ],
      table: {
        head: ['Verb', 'Typical context'],
        rows: [
          ['berichten', 'news'],
          ['melden', 'breaking news'],
          ['erklären', 'official statement'],
          ['mitteilen', 'formal announcement'],
          ['behaupten', 'disputed claim'],
          ['bestätigen', 'confirmation'],
          ['ankündigen', 'future plans'],
          ['betonen', 'emphasis'],
          ['hinzufügen', 'additional information'],
          ['schildern', 'describing events']
        ]
      },
      hinglish: 'Har reporting verb ka apna rang hota hai, isliye inhe soch kar chuno. <b>berichten</b> aur <b>melden</b> neutral news ke liye hain, <b>erkl\u00e4ren</b> aur <b>mitteilen</b> official bayaan ke liye, <b>best\u00e4tigen</b> tab jab baat confirm ho rahi ho, aur <b>behaupten</b> tab jab dava par shak ho. Isliye <b>behaupten</b> likhne se hi reader ko lagta hai ki baat sabit nahi hui.'
    },
    {
      title: 'Quellenangabe (source attribution)',
      body: [ 'Professional texts identify the source — this increases credibility.' ],
      table: {
        head: ['Expression', 'Meaning'],
        rows: [
          ['laut ...', 'according to ...'],
          ['nach Angaben von ...', 'according to the information from ...'],
          ['dem Bericht zufolge', 'according to the report'],
          ['einer Studie zufolge', 'according to a study'],
          ['der Sprecher erklärte', 'the spokesperson stated'],
          ['die Universität teilte mit', 'the university announced']
        ]
      },
      hinglish: 'Professional writing mein hamesha batate hain ki jaankaari kahan se aayi. Isse text par bharosa banta hai \u2014 aur Goethe B2 ki writing mein bhi yeh accha impression deta hai.'
    },
    {
      title: 'Kasus bei Quellenangaben',
      body: [
        'Each source expression comes with its own case, and this is where most mistakes happen. Learn the phrase together with the case, the way you learned verbs with their prepositions.'
      ],
      table: {
        head: ['Expression', 'Case', 'Example'],
        rows: [
          ['laut', 'Dativ', '<span class="de">laut <b>der</b> Polizei</span>'],
          ['nach Angaben von', 'Dativ (after von)', '<span class="de">nach Angaben von <b>dem</b> Sprecher</span>'],
          ['nach Angaben + Genitiv', 'Genitiv', '<span class="de">nach Angaben <b>des</b> Ministeriums</span>'],
          ['\u2026 zufolge', 'Dativ, and it comes AFTER the noun', '<span class="de"><b>dem</b> Bericht zufolge</span>'],
          ['gem\u00e4\u00df', 'Dativ', '<span class="de">gem\u00e4\u00df <b>dem</b> Gesetz</span>']
        ]
      },
      note: 'Watch <b>zufolge</b>: unlike the others it follows its noun \u2014 <i>dem Bericht zufolge</i>, never <i>zufolge dem Bericht</i>.',
      hinglish: 'Har source expression apna case leke aata hai, aur yahi sabse zyada galtiyan karwata hai. Inhe waise hi yaad karo jaise verbs ko unke prepositions ke saath yaad karte ho. <b>laut</b>, <b>gem\u00e4\u00df</b> aur <b>zufolge</b> Dativ lete hain, aur <b>nach Angaben</b> ke saath ya to Genitiv aata hai (<span class="de">des Ministeriums</span>) ya <b>von</b> + Dativ. Ek baat khaas hai \u2014 <b>zufolge</b> apne noun ke <b>baad</b> aata hai: <span class="de">dem Bericht zufolge</span>, na ki "zufolge dem Bericht".'
    },
    {
      title: 'Journalistischer Stil',
      body: [ 'Journalistic style ki pehchaan yeh hai \u2014 baat objective aur neutral rehti hai, sirf facts aate hain, sentences chhote hote hain, source hamesha diya jaata hai, aur reported baaton mein Konjunktiv I lagta hai.' ],
      hinglish: 'Journalistic style ki pehchaan yeh hai \u2014 baat objective aur neutral rehti hai, sirf facts aate hain, sentences chhote hote hain, source hamesha diya jaata hai, aur reported baaton mein Konjunktiv I lagta hai.'
    },
    {
      title: 'Berufliche Berichterstattung',
      body: [ 'Business reporting uses the same neutral, attributed style.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Die Geschäftsführung teilte mit, der Umsatz sei gestiegen.', 'Management announced that revenue has increased.'],
          ['Das Unternehmen erklärte, es werde neue Mitarbeiter einstellen.', 'The company explained it will hire new employees.']
        ]
      },
      hinglish: 'Office ke reports mein bhi yahi style chalta hai \u2014 baat kisi aur ki hoti hai, isliye use attribute karke neutral rakha jaata hai.'
    },
    {
      title: 'Akademische Berichterstattung',
      body: [ 'Academic writing frequently attributes information to sources.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Die Studie zeigt ...', 'The study shows ...'],
          ['Die Forschenden berichten ...', 'The researchers report ...'],
          ['Der Bericht kommt zu dem Ergebnis, dass ...', 'The report comes to the conclusion that ...']
        ]
      },
      hinglish: 'Academic writing mein har baat kisi source se judi hoti hai \u2014 study, report ya researchers. Isliye wahan bhi yeh structures baar-baar aate hain.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These come from doubling the verb, getting the case wrong after a source expression, dropping an article, slipping into your own judgement, or leaving the verb in the Indicative.' ],
      mistakes: [
        { wrong: 'Dem Bericht zufolge sei die Lage stabil sein.', right: 'Dem Bericht zufolge sei die Lage stabil.', why: 'Do not add a second verb: <b>sei</b> is already the full Konjunktiv I of <i>sein</i>. (On style: <i>Die Zeitung sagt</i> is not wrong, but <b>berichtet</b> or <b>meldet</b> sounds far more journalistic.)' },
        { wrong: 'Laut die Polizei ...', right: 'Laut der Polizei ...', why: '<b>laut</b> normally takes the Dativ, so it is <i>der Polizei</i>, not the nominative <i>die Polizei</i>.' },
        { wrong: 'Der Minister ist ehrlich.', right: 'Der Minister erklärt, er sei ehrlich.', why: 'Written as a plain statement this is your own judgement. In a report you attribute it to the speaker and switch to Konjunktiv I.' },
        { wrong: 'Er erklärt, die Lage ist stabil.', right: 'Er erklärt, die Lage sei stabil.', why: 'Reported speech takes Konjunktiv I \u2014 <b>sei</b>, not the Indicative <i>ist</i>.' },
        { wrong: 'Nach Angaben von Ministerium ...', right: 'Nach Angaben des Ministeriums ... / Nach Angaben von dem Ministerium ...', why: 'Either take the Genitiv (<b>des Ministeriums</b>) or keep <b>von</b> with a Dativ \u2014 but the article cannot simply be dropped.' }
      ],
      hinglish: 'Yeh galtiyan paanch tarah se hoti hain \u2014 verb do baar laga dena, source expression ke baad galat case, article gira dena, apni raay ghusa dena, ya verb ko Indicative mein chhod dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to report someone else\'s information? Identify the source, choose an appropriate reporting verb, use Konjunktiv I, avoid personal opinion, maintain a neutral tone.' ],
      note: 'Memory trick: professional reports answer three questions — Who said it? What did they say? How do I report it neutrally? Always show the source, always use an appropriate reporting verb, always keep your own opinion out of the report.',
      hinglish: 'Kisi aur ki baat report karni hai? Pehle source batao, phir sahi reporting verb chuno, verb ko Konjunktiv I mein daalo, apni raay bahar rakho, aur tone neutral rakho. Yaad rakho ki source expression apna case bhi leke aata hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Zeitungsartikel über Beamte',
    titleEn: 'Reading A — A newspaper article reporting statements from public officials',
    tokens: [
      { w: 'Laut', role: 'r-source', en: 'according to (source)', hi: 'ke anusaar (source)', type: 'Präposition · Dat.' },
      { w: 'der', role: 'r-source', en: 'the (fem. dat.)', hi: '(source ka hissa)', type: 'Article · Dat.' },
      { w: 'Polizeimeisterin', role: 'r-source', en: 'police sergeant (Satzende, source)', hi: 'police sergeant (Satzende, source)', type: 'Noun · fem. (Satzende)' },
      { w: 'sei', role: 'r-konji', en: 'is (Konjunktiv I of "sein")', hi: 'hai (Konjunktiv I of "sein")', type: 'Verb · Konjunktiv I' },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Verdächtige', role: 'plain', en: 'suspect', hi: 'sandigdh', type: 'Noun · masc.' },
      { w: 'festgenommen', role: 'plain', en: 'arrested (Satzende)', hi: 'giraftaar (Satzende)', type: 'Partizip II (Satzende)' },
      { w: 'worden', role: 'plain', en: '(Satzende)', hi: '(Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Sprecher', role: 'plain', en: 'spokesperson', hi: 'pravakta', type: 'Noun · masc.' },
      { w: 'betont', role: 'r-reportverb', en: 'emphasizes (reporting verb)', hi: 'zor deta hai (reporting verb)', type: 'Verb (Präsens)' },
      { w: ',', plain: true },
      { w: 'das', role: 'plain', en: 'the (neut. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Konfliktpotential', role: 'plain', en: 'potential for conflict (Satzende)', hi: 'sangharsh ki sambhaavna (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'sei', role: 'r-konji', en: 'is (Konjunktiv I of "sein", Satzende)', hi: 'hai (Konjunktiv I of "sein", Satzende)', type: 'Verb · Konjunktiv I (Satzende)' },
      { w: 'gering', role: 'plain', en: 'low (Satzende)', hi: 'kam (Satzende)', type: 'Adjective (Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Ermittlungen', role: 'plain', en: 'investigations', hi: 'जाँच', type: 'Noun · plural' },
      { w: 'dauerten', role: 'plain', en: 'lasted', hi: 'चलीं', type: 'Verb · dauern (Präteritum)' },
      { w: 'nach', role: 'plain', en: 'according to', hi: 'के अनुसार', type: 'Preposition · Dat.' },
      { w: 'Angaben', role: 'r-source', en: 'reports (source)', hi: 'रिपोर्टों (स्रोत)', type: 'Noun · plural' },
      { w: 'der', role: 'r-source', en: 'of the (fem. gen., source)', hi: 'के (स्रोत)', type: 'Article · Genitiv' },
      { w: 'Behörde', role: 'r-source', en: 'authority (Satzende, source)', hi: 'प्राधिकरण (Satzende)', type: 'Noun · fem.' },
      { w: 'mehrere', role: 'plain', en: 'several', hi: 'कई', type: 'Determiner' },
      { w: 'Monate', role: 'plain', en: 'months (Satzende)', hi: 'महीने (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'Gericht', role: 'plain', en: 'court', hi: 'अदालत', type: 'Noun · neut.' },
      { w: 'werde', role: 'r-future', en: 'will (Konjunktiv I Futur I)', hi: '(Konjunktiv I भविष्य)', type: 'Verb · Konjunktiv I' },
      { w: 'voraussichtlich', role: 'plain', en: 'presumably', hi: 'संभवतः', type: 'Adverb' },
      { w: 'kommende', role: 'plain', en: 'coming', hi: 'आने वाले', type: 'Adjective' },
      { w: 'Woche', role: 'plain', en: 'week (Satzende)', hi: 'सप्ताह (Satzende)', type: 'Noun · fem.' },
      { w: 'über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Fall', role: 'plain', en: 'case (Satzende)', hi: 'मामला (Satzende)', type: 'Noun · masc.' },
      { w: 'entscheiden', role: 'plain', en: 'decide (Satzende)', hi: 'फ़ैसला करेगी (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Fall', role: 'plain', en: 'case', hi: 'मामला', type: 'Noun · masc.' },
      { w: 'erregt', role: 'plain', en: 'attracts (Satzende)', hi: 'आकर्षित करता है (Satzende)', type: 'Verb · erregen' },
      { w: 'somit', role: 'plain', en: 'thus', hi: 'इस तरह', type: 'Adverb' },
      { w: 'bundesweite', role: 'plain', en: 'nationwide', hi: 'देशव्यापी', type: 'Adjective' },
      { w: 'Aufmerksamkeit', role: 'plain', en: 'attention (Satzende)', hi: 'ध्यान (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true }
    ],
    translation: 'According to the police sergeant, the suspect has been arrested. The spokesperson emphasizes that the potential for conflict is low. According to reports from the authority, the investigations lasted several months. A court will presumably decide on the case next week. The case is thus attracting nationwide attention.',
    comprehension: [
      { q: 'Wer ist die Quelle im ersten Satz?', options: ['die Polizeimeisterin', 'der Sprecher', 'die Zeitung'], answer: 0 },
      { q: 'Welches Reporting-Verb wird im zweiten Satz benutzt?', options: ['betont', 'berichtet', 'behauptet'], answer: 0 },
      { q: 'Präsentiert der Text die Aussagen als bewiesene Fakten oder als berichtete Aussagen?', options: ['Als berichtete Aussagen (neutral)', 'Als bewiesene Fakten', 'Als persönliche Meinung des Journalisten'], answer: 0 }
    ]
  },
  readingBArchive: {
    title: 'Geschäftsbericht',
    titleEn: 'Reading B — A business report summarizing a company\'s quarterly results',
    tokens: [
      { w: 'Nach', role: 'r-source', en: 'according to (source)', hi: 'ke anusaar (source)', type: 'Präposition · Dat.' },
      { w: 'Angaben', role: 'r-source', en: 'information (source)', hi: '(source ka hissa)', type: 'Noun · plural' },
      { w: 'der', role: 'r-source', en: 'of the (fem. gen.)', hi: '(source ka hissa)', type: 'Article · Gen.' },
      { w: 'Geschäftsführung', role: 'r-source', en: 'management (Satzende, source)', hi: 'management (Satzende, source)', type: 'Noun · fem. (Satzende)' },
      { w: 'sei', role: 'r-konji', en: 'has (Konjunktiv I of "sein")', hi: 'hai (Konjunktiv I of "sein")', type: 'Verb · Konjunktiv I' },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Umsatz', role: 'plain', en: 'revenue', hi: 'aay', type: 'Noun · masc.' },
      { w: 'gestiegen', role: 'plain', en: 'increased (Satzende)', hi: 'badhi (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Das', role: 'plain', en: 'the (neut. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Unternehmen', role: 'plain', en: 'company', hi: 'company', type: 'Noun · neut.' },
      { w: 'kündigte', role: 'r-reportverb', en: 'announced (part of trennbar "ankündigen")', hi: '(trennbar reporting verb ka hissa)', type: 'Verb (Präteritum)' },
      { w: 'an', role: 'r-reportverb', en: '(part of trennbar "ankündigen", Satzende)', hi: '(Satzende ka hissa)', type: 'Partikel · trennbar (Satzende)' },
      { w: ',', plain: true },
      { w: 'es', role: 'plain', en: 'it', hi: 'yeh', type: 'Pronomen · Nom.' },
      { w: 'werde', role: 'r-konji', en: 'will (Konjunktiv I of "werden", Satzende)', hi: '(Konjunktiv I of "werden", Satzende)', type: 'Verb · Konjunktiv I (Satzende)' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'naye', type: 'Adjective' },
      { w: 'Mitarbeiter', role: 'plain', en: 'employees (Satzende)', hi: 'karmchaari (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'einstellen', role: 'plain', en: 'hire (Satzende)', hi: 'rakhega (Satzende)', type: 'Verb · Satzende' },
      { w: '.', plain: true }
    ],
    translation: 'According to management, revenue has increased. The company announced it will hire new employees.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_062_L001', speaker: 'Silke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, für unser Medienprojekt — hast du schon verglichen, wie die Zeitungen den Terminwechsel darstellen?', en: 'Timo, for our media project — have you already compared how the newspapers present the schedule change?' },
      { id: 'B2_062_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ja, die eine schreibt, der Grund sei finanzieller Natur, die andere lässt das komplett weg.', en: 'Yes, one writes that the reason is financial, the other leaves that out completely.' },
      { id: 'B2_062_L003', speaker: 'Silke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Interessant. Und was sagen sie über die Bürger?', en: 'Interesting. And what do they say about the citizens?' },
      { id: 'B2_062_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Beide berichten, viele seien unzufrieden — nur die Betonung ist unterschiedlich.', en: 'Both report that many are dissatisfied — only the emphasis differs.' }
    ],
    transcript: 'Timo, für unser Medienprojekt — hast du schon verglichen, wie die Zeitungen den Terminwechsel darstellen? Ja, die eine schreibt, der Grund sei finanzieller Natur, die andere lässt das komplett weg. Interessant. Und was sagen sie über die Bürger? Beide berichten, viele seien unzufrieden — nur die Betonung ist unterschiedlich.',
    translation: 'Timo, for our media project — have you already compared how the newspapers present the schedule change? Yes, one writes that the reason is financial, the other leaves that out completely. Interesting. And what do they say about the citizens? Both report that many are dissatisfied — only the emphasis differs.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'für' },
      { w: 'unser' },
      { w: 'Medienprojekt' },
      { w: '—', plain: true },
      { w: 'hast' },
      { w: 'du' },
      { w: 'schon' },
      { w: 'verglichen' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'die' },
      { w: 'Zeitungen' },
      { w: 'den' },
      { w: 'Terminwechsel' },
      { w: 'darstellen' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'eine' },
      { w: 'schreibt' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'Grund' },
      { w: 'sei' },
      { w: 'finanzieller' },
      { w: 'Natur' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'andere' },
      { w: 'lässt' },
      { w: 'das' },
      { w: 'komplett' },
      { w: 'weg' },
      { w: '.', plain: true },
      { w: 'Interessant' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'was' },
      { w: 'sagen' },
      { w: 'sie' },
      { w: 'über' },
      { w: 'die' },
      { w: 'Bürger' },
      { w: '?', plain: true },
      { w: 'Beide' },
      { w: 'berichten' },
      { w: ',', plain: true },
      { w: 'viele' },
      { w: 'seien' },
      { w: 'unzufrieden' },
      { w: '—', plain: true },
      { w: 'nur' },
      { w: 'die' },
      { w: 'Betonung' },
      { w: 'ist' },
      { w: 'unterschiedlich' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welchen Grund nennt eine Zeitung für die Änderung?', qEn: 'What does one newspaper give as the reason for the change?', options: ['politisch', 'finanziell', 'technisch', 'persönlich'], optionsEn: ['politically', 'financially', 'technically', 'personally'], answer: 1,
        explain: '"… der Grund sei finanzieller Natur."' },
      { q: 'Worin sind sich beide Zeitungen über die Bürger einig?', qEn: 'What do both newspapers agree on regarding citizens?', options: ['Sie seien begeistert.', 'Viele seien unzufrieden.', 'Niemand interessiere sich.', 'Sie hätten keine Meinung.'], optionsEn: ['that they were delighted.', 'that many were dissatisfied.', 'that nobody was interested.', 'that they had no opinion.'], answer: 1,
        explain: '"Beide berichten, viele seien unzufrieden."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Dein Kollege fragt, wie die Zeitungen den Terminwechsel darstellen.", taskEn: "Your colleague asks how the papers present the date change.", de: "Die eine schreibt, der Grund sei organisatorisch.", en: "One writes the reason was organisational." },
    { task: "Er fragt nach der anderen Zeitung.", taskEn: "He asks about the other paper.", de: "Die andere meldet, der Termin sei aus Kostengründen verschoben worden.", en: "The other reports the date was postponed for cost reasons." },
    { task: "Trag die Meldung mit klarer Quelle vor.", taskEn: "Present the news with a clear source.", de: "Laut der Firma sei niemand entlassen worden.", en: "According to the company, nobody was dismissed." },
    { task: "Stell für das Medienprojekt Studienergebnisse neutral vor.", taskEn: "Present study results neutrally for the media project.", de: "Die Autoren berichten, der Zusammenhang sei schwach.", en: "The authors report the correlation is weak." },
    { task: "Rollenspiel: Ihr vergleicht zwei Berichte.", taskEn: "Role-play: you compare two reports.", de: "Die eine schreibt, die Zahlen seien gesunken. — Die andere meldet, sie seien gleich geblieben.", en: "One writes the figures had fallen. — The other reports they'd stayed the same." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (6-8 sentences): Rewrite opinion-based statements as objective reports using reporting verbs and Konjunktiv I.\n\nTASK 2 — Newspaper report (200 words): Summarize an interview using at least 10 reporting verbs, clear source attribution, Konjunktiv I, and a strictly neutral style.',
    starters: ['Laut ... berichtet, ...', 'Nach Angaben von ... werde ...'],
    placeholder: 'Laut der Polizei sei der Verdächtige festgenommen worden. Die Universität teilte mit, das Studentenwohnheim werde renoviert.',
    minWords: 200
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence is appropriately neutral, journalistic reporting?',
      options: ['Der Minister erklärt, die Lage sei stabil.', 'Der Minister hat recht.', 'Der Minister ist ehrlich.'],
      answer: 0,
      explain: 'Attributing the claim to the minister with Konjunktiv I keeps the report neutral — the other two present opinion as fact.'
    },
    gap: {
      sentence: [' der Polizei sei der Verdächtige festgenommen worden.'],
      gaps: [ { answer: 'Laut', accepts: ['Laut'] } ],
      explain: '"Laut" introduces source attribution, taking Dativ: "Laut der Polizei".'
    },
    match: {
      q: 'Match each reporting verb to its typical context.',
      pairs: [
        { noun: 'berichten', art: 'news' },
        { noun: 'bestätigen', art: 'confirmation' },
        { noun: 'ankündigen', art: 'future plans' },
        { noun: 'behaupten', art: 'disputed claim' }
      ]
    },
    builder: {
      target: 'Build: "According to a study, online purchasing is growing." (source attribution + Konjunktiv I)',
      bank: ['Einer', 'Studie', 'zufolge', ',', 'wachse', 'der', 'Interneteinkauf', '.'],
      answer: ['Einer', 'Studie', 'zufolge', ',', 'wachse', 'der', 'Interneteinkauf', '.'],
      roles: { 'Einer': 'r-source', 'Studie': 'r-source', 'zufolge': 'r-source', 'wachse': 'r-konji' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Der Minister ist ehrlich.',
      right: 'Der Minister erklärt, er sei ehrlich.',
      explain: 'Stating this as established fact is a subjective claim — attribute it to the speaker with a reporting verb and Konjunktiv I instead.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does berichtende Sprache communicate?', options: ['What other people say, not the writer\'s own opinion', 'Only confirmed facts', 'The journalist\'s personal beliefs'], answer: 0,
      explain: 'Reporting language communicates what sources said, staying neutral about the writer\'s own view.' },
    { q: 'Which is more appropriate for a news report: "sagen" or "berichten"?', options: ['berichten', 'sagen', 'Both are equally appropriate'], answer: 0,
      explain: '"berichten" is the standard journalistic reporting verb; "sagen" is too casual.' },
    { q: 'What does "laut der Polizei" indicate?', options: ['Source attribution', 'A reporting verb', 'A Konjunktiv I form'], answer: 0,
      explain: '"laut" introduces the source of the information.' },
    { q: 'Is "Der Minister hat recht" appropriate neutral reporting?', options: ['No — it presents an opinion as fact', 'Yes — it is perfectly neutral', 'Only in academic writing'], answer: 0,
      explain: 'This states a subjective evaluation as established fact — the reporter should attribute claims instead.' },
    { q: 'What are the three questions professional reports answer?', options: ['Who said it? What did they say? How do I report it neutrally?', 'What do I believe? What is true? What is false?', 'When? Where? Why?'], answer: 0,
      explain: 'These three questions structure objective, source-attributed reporting.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-reportverb', html: 'Reporting verbs (berichten, melden, erklären, mitteilen, behaupten, bestätigen, ankündigen, betonen, hinzufügen, schildern) each carry a different journalistic nuance.' },
    { c: 'r-source', html: 'Source attribution (laut ..., nach Angaben von ..., X zufolge) identifies who said it and increases credibility.' },
    { c: 'r-konji', html: 'Never present a claim as your own opinion or established fact — always attribute it: "Der Minister erklärt, die Lage sei stabil", not "Der Minister hat recht".' }
  ],
  revisionTips: [
    'For every reporting verb (berichten, melden, erklären...), practise writing one example sentence with correct Konjunktiv I.',
    'Scan a German newspaper article for source-attribution phrases (laut, nach Angaben von, X zufolge) and note what each introduces.',
    'Before writing any report, ask: who said this, and am I keeping my own opinion out of it?'
  ]
};

window.CHAPTER = CHAPTER;
