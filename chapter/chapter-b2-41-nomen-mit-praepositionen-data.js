/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 4 · Chapter 41
   "Nomen mit Präpositionen (B2)" — high-frequency B2 nouns that
   require a FIXED preposition + case, taught as one vocabulary
   unit (noun + preposition + case), with matching question
   words. Does NOT teach Adjektive mit Präpositionen (next chapter).
   IMPORTANT: dialogue uses ONLY Merit and Timo.
   Vocabulary source: uploaded chapter-41 list (50 items,
   continuing the detective/palace theme from Ch.38-40).
============================================================ */
const CHAPTER = {
  id: 'b2-41-nomen-mit-praepositionen',
  phase: 'B2 · Phase 4',
  number: 41,
  title: 'Nomen mit Präpositionen (B2)',
  titleEn: 'Nouns with fixed prepositions (B2)',
  description: 'Interesse AN, Einfluss AUF, Verantwortung FÜR — nouns have fixed prepositions too, just like verbs.',
  xp: 520,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 42, title: 'Adjektive mit Präpositionen (B2)', titleEn: 'Adjectives with fixed prepositions (B2)' , href: 'chapter-b2-42-adjektive-mit-praepositionen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'The noun needs its <em>one</em> preposition too.',
    intro: 'Visiting an old palace, Merit\'s interest in the king\'s history runs deep, though Timo admits the throne itself would frighten him — every noun here paired with its own fixed preposition: Interesse an, Einfluss auf, Verantwortung für.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how each noun\'s fixed preposition and case never change, just like verb-preposition pairs'
    ],
    scene: 'Verantwortung und Vertrauen',
    femaleSpeakers: ['Merit'],
    dialogue: [
      { speaker: 'Merit', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'großes', role: 'r-akkusativ', en: 'great', hi: 'बड़ी', pron: 'GROH-ses', type: 'Adjective' },
        { w: 'Interesse', role: 'r-akkusativ', en: 'interest', hi: 'दिलचस्पी', pron: 'in-te-RE-suh', type: 'Noun · neut.' },
        { w: 'an', role: 'r-preposition', en: 'in', hi: 'में', pron: 'an', type: 'Preposition · fixed with Interesse', why: 'das Interesse an + Dativ = interest in (this chapter).', ex: 'großes Interesse an der Geschichte' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Geschichte', role: 'r-dativ', en: 'history (dat.)', hi: 'इतिहास में', pron: 'ge-SHIKH-tuh', type: 'Noun · fem. dat.' },
        { w: 'dieses', role: 'r-dativ', en: 'this (masc. gen.)', hi: 'इस', pron: 'DEE-zes', type: 'Determiner · genitive' },
        { w: 'Königs', role: 'r-dativ', en: 'king (gen.)', hi: 'राजा के', pron: 'KÖ-niks', type: 'Noun · masc. genitive', why: 'der König (this chapter).', ex: 'die Geschichte dieses Königs' },
        { w: '.', plain: true }
      ], en: 'I have great interest in the history of this king.', hi: 'Mujhe is raja ke itihaas mein bahut dilchaspi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'Angst', role: 'r-akkusativ', en: 'fear', hi: 'डर', pron: 'ankst', type: 'Noun · fem.' },
        { w: 'vor', role: 'r-preposition', en: 'of', hi: 'से', pron: 'for', type: 'Preposition · fixed with Angst', why: 'die Angst vor + Dativ = fear of (this chapter).', ex: 'Angst vor dem Thron' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Thron', role: 'r-dativ', en: 'throne (dat.)', hi: 'सिंहासन से', pron: 'trohn', type: 'Noun · masc. dat.', why: 'der Thron (this chapter).', ex: 'Angst vor dem Thron' },
        { w: '.', plain: true }
      ], en: 'I have fear of the throne.', hi: 'Mujhe singhaasan se dar lagta hai.' },
      { speaker: 'Merit', tokens: [
        { w: 'Warum', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'va-RUM', type: 'Question word' },
        { w: '?', plain: true },
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Einfluss', role: 'r-subject', en: 'influence', hi: 'प्रभाव', pron: 'INE-flus', type: 'Noun · masc.' },
        { w: 'auf', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition · fixed with Einfluss', why: 'der Einfluss auf + Akkusativ = influence on (this chapter).', ex: 'der Einfluss auf das Volk' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Volk', role: 'r-akkusativ', en: 'people', hi: 'जनता', pron: 'folk', type: 'Noun · neut.', why: 'das Volk (this chapter).', ex: 'das Volk' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'groß', role: 'r-akkusativ', en: 'great', hi: 'बड़ा', pron: 'grohs', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Why? The influence on the people was great.', hi: 'Kyun? Janta par prabhaav bada tha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: 'deswegen', role: 'r-akkusativ', en: 'because of that', hi: 'इसी कारण', pron: 'des-VAY-gen', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Verantwortung', role: 'r-subject', en: 'responsibility', hi: 'ज़िम्मेदारी', pron: 'fer-ANT-vor-tung', type: 'Noun · fem.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition · fixed with Verantwortung', why: 'die Verantwortung für + Akkusativ = responsibility for (this chapter).', ex: 'die Verantwortung für das Volk' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Volk', role: 'r-akkusativ', en: 'people', hi: 'जनता', pron: 'folk', type: 'Noun · neut.' },
        { w: 'wäre', role: 'r-verb', en: 'would be', hi: 'होगी', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'zu', role: 'r-adverb', en: 'too', hi: 'ज़्यादा', pron: 'tsoo', type: 'Adverb' },
        { w: 'groß', role: 'r-akkusativ', en: 'great', hi: 'बड़ी', pron: 'grohs', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Exactly because of that. The responsibility for the people would be too great for me.', hi: 'Bilkul isi kaaran. Janta ki zimmedaari mere liye zyada badi hogi.' },
      { speaker: 'Merit', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Respekt', role: 'r-subject', en: 'respect', hi: 'सम्मान', pron: 're-SPEKT', type: 'Noun · masc.' },
        { w: 'vor', role: 'r-preposition', en: 'of', hi: 'के लिए', pron: 'for', type: 'Preposition · fixed with Respekt', why: 'der Respekt vor + Dativ = respect for (this chapter).', ex: 'der Respekt vor dem König' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'König', role: 'r-dativ', en: 'king (dat.)', hi: 'राजा के', pron: 'KÖ-nikh', type: 'Noun · masc. dat.' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'groß', role: 'r-akkusativ', en: 'great', hi: 'बड़ा', pron: 'grohs', type: 'Adjective' },
        { w: 'damals', role: 'r-time', en: 'back then', hi: 'उस समय', pron: 'DAH-mahls', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'The respect for the king was very great back then.', hi: 'Us samay raja ke liye samaan bahut bada tha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'froh', role: 'r-akkusativ', en: 'happy', hi: 'ख़ुश', pron: 'froh', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'nur', role: 'r-adverb', en: 'only', hi: 'केवल', pron: 'noor', type: 'Adverb' },
        { w: 'Besucher', role: 'r-subject', en: 'visitors', hi: 'आगंतुक', pron: 'be-ZOO-kher', type: 'Noun · plural' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Nevertheless I am happy that today we are only visitors.', hi: 'Phir bhi mujhe khushi hai ki aaj hum sirf aagantuk hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Many German nouns come with a FIXED preposition, just like verbs: <span class="de r-nomen-prep">Interesse AN</span>, <span class="de r-nomen-prep">Einfluss AUF</span>, <span class="de r-nomen-prep">Verantwortung FÜR</span>. Learn the noun, its preposition, and its case together as ONE vocabulary item.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is NOMEN MIT PRÄPOSITIONEN (B2 level): high-frequency German nouns that require a fixed preposition and case, taught as one unit (noun + preposition + case). Examples: Interesse an +Dat., Einfluss auf +Akk., Teilnahme an +Dat., Verantwortung für +Akk., Erfahrung mit +Dat., Möglichkeit zu +Dat., Grund für +Akk., Angst vor +Dat., Freude über +Akk., Hoffnung auf +Akk., Bedarf an +Dat., Lösung für +Akk., Einladung zu +Dat., Beitrag zu +Dat., Voraussetzung für +Akk., Reaktion auf +Akk., Bitte um +Akk., Vertrauen in +Akk., Unterschied zwischen +Dat. This is exactly parallel to Ch.40\'s verb-preposition pairs. ' +
    'Do NOT expect or require Adjektive mit Präpositionen — that is a separate, later chapter; do not flag its absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that each noun from the taught list uses its correct fixed preposition (not a different, seemingly logical one, e.g. NOT "Interesse für" or "Einfluss an").\n' +
    '- Check that the case after the preposition matches what that specific noun requires.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Preposition check:</b> one sentence on whether the learner correctly paired each noun with its fixed preposition and case.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly pair every noun with its one fixed preposition and case. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the Master Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: never learn a noun alone. Always learn noun + preposition + case together.'
  },

  parserSentence: [
    { w: 'Ich', role: 'plain' }, { w: 'habe', role: 'plain' }, { w: 'Interesse', role: 'r-nomen-prep' },
    { w: 'an', role: 'r-nomen-prep' }, { w: 'Sprachen', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: learn noun + preposition + case together as one vocabulary unit.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Merit and Timo discuss a research project using noun-preposition pairs.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 50 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the 20 core B2 noun-preposition combinations, their cases, and matching question words.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a university research project and a company sustainability report full of noun-preposition combinations.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the noun, its preposition, required case, and meaning.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Discuss projects and workplace topics using B2 noun-preposition combinations naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write formal emails and reports using natural noun-preposition combinations.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill preposition choice, Akkusativ-or-Dativ, and matching nouns to prepositions.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 520 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 50 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Preposition-choice drills, case selection, and a report-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete Master Table (20 nouns), the question-word table, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich habe Interesse an Sprachen.', text: 'Use Interesse an + Dativ naturally' },
    { de: 'Der Einfluss auf die Umwelt ist enorm.', text: 'Use Einfluss auf + Akkusativ correctly' },
    { de: 'Woran hast du Interesse? Wofür übernimmst du Verantwortung?', text: 'Match question words to each noun-preposition pair' },
    { de: 'Dativ: Interesse an, Teilnahme an, Erfahrung mit... Akkusativ: Einfluss auf, Verantwortung für, Grund für...', text: 'Sort the 20 core nouns by required case' },
    { de: 'Interesse an + Dativ — immer als Einheit lernen', text: 'Adopt the noun+preposition+case vocabulary strategy' }
  ],

  // ---------- Vocabulary (50 items — uploaded chapter-41 list) ----------
  vocab: [
    { de: 'philosophisch', pos: 'adjective', level: 'B2', register: 'written', en: 'philosophical', hi: 'दार्शनिक', ex: 'Er stellte eine philosophische Frage.', exEn: 'He asked a philosophical question.', exHi: 'Usne ek daarshanik sawaal poochha.', ex2: 'Sie haben philosophisch diskutiert.', ex2En: 'They\'ve discussed philosophically.', ex2Hi: 'Unhone daarshanik roop se charcha ki hai.' },
    { de: 'prominent', pos: 'adjective', level: 'B2', register: 'written', en: 'prominent', hi: 'प्रमुख', ex: 'Sie war eine prominente Persönlichkeit.', exEn: 'She was a prominent figure.', exHi: 'Woh ek pramukh vyaktitva thi.', ex2: 'Er hat prominente Gäste eingeladen.', ex2En: 'He\'s invited prominent guests.', ex2Hi: 'Usne pramukh mehmaanon ko bulaaya hai.' },
    { de: 'quietschen', pos: 'verb', level: 'B2', register: 'both', en: 'to squeak', hi: 'चीं-चीं करना', ex: 'Die Tür quietschte laut.', exEn: 'The door squeaked loudly.', exHi: 'Darwaaza zor se chee-chee kar raha tha.', ex2: 'Die Räder haben gequietscht.', ex2En: 'The wheels have squeaked.', ex2Hi: 'Pahiye chee-chee kar rahe hain.', conj: { praesens: 'quietscht', praeteritum: 'quietschte', perfekt: 'hat gequietscht' } },
    { de: 'Rauschen', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'noise, hiss', hi: 'सरसराहट', ex: 'Das Rauschen der Blätter war beruhigend.', exEn: 'The rustling of the leaves was soothing.', exHi: 'Patton ki sarsaraahat shaantidaayak thi.', ex2: 'Sie haben das Rauschen des Meeres gehört.', ex2En: 'They\'ve heard the sound of the sea.', ex2Hi: 'Unhone samudra ki aawaaz suni hai.' },
    { de: 'reformieren', pos: 'verb', level: 'B2', register: 'written', en: 'to reform', hi: 'सुधार करना', ex: 'Die Regierung reformierte das System.', exEn: 'The government reformed the system.', exHi: 'Sarkaar ne pranaali mein sudhaar kiya.', ex2: 'Sie haben das Bildungssystem reformiert.', ex2En: 'They\'ve reformed the education system.', ex2Hi: 'Unhone shiksha pranaali mein sudhaar kiya hai.', conj: { praesens: 'reformiert', praeteritum: 'reformierte', perfekt: 'hat reformiert' } },
    { de: 'Regierungszeit', art: 'die', gender: 'f', plural: 'Regierungszeiten', pos: 'noun', level: 'B2', register: 'written', en: 'reign, time in government', hi: 'शासनकाल', ex: 'Die Regierungszeit dauerte zwanzig Jahre.', exEn: 'The reign lasted twenty years.', exHi: 'Shaasan kaal bees saal chala.', ex2: 'Sie haben die Regierungszeit untersucht.', ex2En: 'They\'ve studied the time in government.', ex2Hi: 'Unhone shaasan kaal ka adhyayan kiya hai.' },
    { de: 'Rennpferd', art: 'das', gender: 'n', plural: 'Rennpferde', pos: 'noun', level: 'B2', register: 'both', en: 'racehorse', hi: 'दौड़ का घोड़ा', ex: 'Das Rennpferd gewann das Rennen.', exEn: 'The racehorse won the race.', exHi: 'Daud ke ghode ne daud jeeti.', ex2: 'Sie haben ein Rennpferd trainiert.', ex2En: 'They\'ve trained a racehorse.', ex2Hi: 'Unhone ek daud ka ghoda train kiya hai.' },
    { de: 'Reporter/in', art: 'der/die', gender: 'm/f', plural: 'Reporter/innen', pos: 'noun', level: 'B2', register: 'both', en: 'reporter', hi: 'रिपोर्टर', ex: 'Der Reporter stellte kritische Fragen.', exEn: 'The reporter asked critical questions.', exHi: 'Reporter ne aalochnaatmak sawaal poochhe.', ex2: 'Sie ist eine erfahrene Reporterin.', ex2En: 'She\'s an experienced reporter.', ex2Hi: 'Woh ek anubhavi reporter hai.' },
    { de: 'Road Movie', art: 'der', gender: 'm', plural: 'Road Movies', pos: 'noun', level: 'B2', register: 'spoken', en: 'road movie', hi: 'रोड मूवी', ex: 'Der Road Movie zeigte die Landschaft.', exEn: 'The road movie showed the landscape.', exHi: 'Road movie ne parivesh dikhaaya.', ex2: 'Sie haben einen Road Movie gedreht.', ex2En: 'They\'ve made a road movie.', ex2Hi: 'Unhone ek road movie banaayi hai.' },
    { de: 'Roboter', art: 'der', gender: 'm', plural: 'Roboter', pos: 'noun', level: 'B2', register: 'both', en: 'robot', hi: 'रोबोट', ex: 'Der Roboter erledigte die Aufgabe schnell.', exEn: 'The robot completed the task quickly.', exHi: 'Robot ne kaam jaldi poora kiya.', ex2: 'Sie haben einen neuen Roboter entwickelt.', ex2En: 'They\'ve developed a new robot.', ex2Hi: 'Unhone ek naya robot vikasit kiya hai.' },
    { de: 'rücksichtsvoll', pos: 'adjective', level: 'B2', register: 'both', en: 'considerate', hi: 'विचारशील', ex: 'Sie war immer rücksichtsvoll.', exEn: 'She was always considerate.', exHi: 'Woh hamesha vichaarasheel thi.', ex2: 'Er hat rücksichtsvoll gehandelt.', ex2En: 'He\'s acted considerately.', ex2Hi: 'Usne vichaarasheelta se kaarya kiya hai.' },
    { de: 'runterfallen', pos: 'verb', level: 'B2', register: 'spoken', en: 'to fall down', hi: 'नीचे गिरना', ex: 'Das Glas fiel runter.', exEn: 'The glass fell down.', exHi: 'Glass neeche gir gaya.', ex2: 'Sie ist von der Leiter runtergefallen.', ex2En: 'She\'s fallen down from the ladder.', ex2Hi: 'Woh seedhi se neeche gir gayi hai.', conj: { praesens: 'fällt runter', praeteritum: 'fiel runter', perfekt: 'ist runtergefallen' } },
    { de: 'schlagartig', pos: 'adjective', level: 'B2', register: 'both', en: 'sudden(ly), abrupt', hi: 'अचानक', ex: 'Das Wetter änderte sich schlagartig.', exEn: 'The weather changed abruptly.', exHi: 'Mausam achaanak badal gaya.', ex2: 'Sie haben schlagartig reagiert.', ex2En: 'They\'ve reacted abruptly.', ex2Hi: 'Unhone achaanak pratikriya di hai.' },
    { de: 'schleichen', pos: 'verb', level: 'B2', register: 'both', en: 'to creep, sneak', hi: 'दबे पांव चलना', ex: 'Sie schlich sich leise ins Zimmer.', exEn: 'She crept quietly into the room.', exHi: 'Woh chupke se kamre mein ghusi.', ex2: 'Er ist die Treppe hinaufgeschlichen.', ex2En: 'He\'s crept up the stairs.', ex2Hi: 'Woh seedhiyon se dabe paanv chadha hai.', conj: { praesens: 'schleicht', praeteritum: 'schlich', perfekt: 'ist geschlichen' } },
    { de: 'Schlossgarten', art: 'der', gender: 'm', plural: 'Schlossgärten', pos: 'noun', level: 'B2', register: 'written', en: 'palace garden', hi: 'महल का बगीचा', ex: 'Der Schlossgarten war wunderschön gepflegt.', exEn: 'The palace garden was beautifully maintained.', exHi: 'Mahal ka bagicha khoobsoorati se rakha gaya tha.', ex2: 'Sie haben den Schlossgarten besichtigt.', ex2En: 'They\'ve toured the palace garden.', ex2Hi: 'Unhone mahal ke bagiche ka daura kiya hai.' },
    { de: 'Schuhabdruck', art: 'der', gender: 'm', plural: 'Schuhabdrücke', pos: 'noun', level: 'B2', register: 'written', en: 'shoe print', hi: 'जूते का निशान', ex: 'Der Detektiv fand einen Schuhabdruck.', exEn: 'The detective found a shoe print.', exHi: 'Jaasoos ko joote ka nishaan mila.', ex2: 'Sie haben den Schuhabdruck analysiert.', ex2En: 'They\'ve analysed the shoe print.', ex2Hi: 'Unhone joote ke nishaan ka vishleshan kiya hai.' },
    { de: 'Schulpflicht', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'compulsory schooling', hi: 'अनिवार्य शिक्षा', ex: 'Die Schulpflicht galt für alle Kinder.', exEn: 'Compulsory schooling applied to all children.', exHi: 'Anivaarya shiksha sabhi bachchon par laagu thi.', ex2: 'Sie haben die Schulpflicht diskutiert.', ex2En: 'They\'ve discussed compulsory schooling.', ex2Hi: 'Unhone anivaarya shiksha par charcha ki hai.' },
    { de: 'schützenswert', pos: 'adjective', level: 'B2', register: 'written', en: 'worth protecting', hi: 'सुरक्षा के योग्य', ex: 'Der Wald war schützenswert.', exEn: 'The forest was worth protecting.', exHi: 'Jangal suraksha ke yogya tha.', ex2: 'Sie haben schützenswerte Arten identifiziert.', ex2En: 'They\'ve identified species worth protecting.', ex2Hi: 'Unhone suraksha ke yogya prajaatiyon ki pehchaan ki hai.' },
    { de: 'schwerelos', pos: 'adjective', level: 'B2', register: 'both', en: 'weightless', hi: 'भारहीन', ex: 'Im Weltraum fühlte er sich schwerelos.', exEn: 'In space he felt weightless.', exHi: 'Antariksh mein use bhaarheen mahsoos hua.', ex2: 'Sie haben Schwerelosigkeit erlebt.', ex2En: 'They\'ve experienced weightlessness.', ex2Hi: 'Unhone bhaarheenta ka anubhav kiya hai.' },
    { de: 'seltsam', pos: 'adjective', level: 'B2', register: 'both', en: 'strange, odd', hi: 'अजीब', ex: 'Das Geräusch war seltsam.', exEn: 'The sound was strange.', exHi: 'Aawaaz ajeeb thi.', ex2: 'Sie haben sich seltsam verhalten.', ex2En: 'They\'ve behaved strangely.', ex2Hi: 'Unhone ajeeb tarike se vyavahaar kiya hai.' },
    { de: 'siegessicher', pos: 'adjective', level: 'B2', register: 'written', en: 'sure of victory', hi: 'जीत के प्रति आश्वस्त', ex: 'Das Team wirkte siegessicher.', exEn: 'The team seemed sure of victory.', exHi: 'Team jeet ke prati aashvasth lag raha tha.', ex2: 'Sie haben siegessicher gelächelt.', ex2En: 'They\'ve smiled confidently of victory.', ex2Hi: 'Unhone vishvaas se muskuraaya hai.' },
    { de: 'Sinn', art: 'der', gender: 'm', plural: 'Sinne', pos: 'noun', level: 'B2', register: 'both', en: 'sense, meaning', hi: 'अर्थ, इंद्रिय', ex: 'Der Sinn des Lebens beschäftigte sie.', exEn: 'The meaning of life occupied her.', exHi: 'Zindagi ka arth use pareshaan karta tha.', ex2: 'Sie haben einen guten Sinn für Humor.', ex2En: 'They\'ve got a good sense of humour.', ex2Hi: 'Unke paas achha hasy-bodh hai.' },
    { de: 'Skepsis', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'scepticism', hi: 'संदेहवाद', ex: 'Ihre Skepsis war berechtigt.', exEn: 'Her scepticism was justified.', exHi: 'Uska sandehvaad uchit tha.', ex2: 'Sie haben ihre Skepsis geäußert.', ex2En: 'They\'ve expressed their scepticism.', ex2Hi: 'Unhone apna sandeh vyakt kiya hai.' },
    { de: 'Sonnenlicht', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'sunlight', hi: 'सूरज की रोशनी', ex: 'Das Sonnenlicht fiel durch das Fenster.', exEn: 'The sunlight fell through the window.', exHi: 'Suraj ki roshni khidki se aayi.', ex2: 'Sie haben im Sonnenlicht gesessen.', ex2En: 'They\'ve sat in the sunlight.', ex2Hi: 'Woh suraj ki roshni mein baithe hain.' },
    { de: 'Stamm', art: 'der', gender: 'm', plural: 'Stämme', pos: 'noun', level: 'B2', register: 'both', en: 'trunk, tribe, stem', hi: 'तना, जनजाति', ex: 'Der Stamm des Baumes war dick.', exEn: 'The tree trunk was thick.', exHi: 'Ped ka tana mota tha.', ex2: 'Sie haben einen alten Stamm besucht.', ex2En: 'They\'ve visited an old tribe.', ex2Hi: 'Unhone ek puraani janjaati ka daura kiya hai.' },
    { de: 'Staubschicht', art: 'die', gender: 'f', plural: 'Staubschichten', pos: 'noun', level: 'B2', register: 'both', en: 'layer of dust', hi: 'धूल की परत', ex: 'Eine Staubschicht bedeckte die Möbel.', exEn: 'A layer of dust covered the furniture.', exHi: 'Dhool ki parat ne furniture dhak diya.', ex2: 'Sie haben die Staubschicht entfernt.', ex2En: 'They\'ve removed the layer of dust.', ex2Hi: 'Unhone dhool ki parat hataayi hai.' },
    { de: 'Synonym', art: 'das', gender: 'n', plural: 'Synonyme', pos: 'noun', level: 'B2', register: 'written', en: 'synonym', hi: 'पर्यायवाची', ex: 'Sie suchte ein Synonym für das Wort.', exEn: 'She looked for a synonym for the word.', exHi: 'Usne shabd ke liye ek paryaayvaachi dhoonda.', ex2: 'Sie haben viele Synonyme gelernt.', ex2En: 'They\'ve learned many synonyms.', ex2Hi: 'Unhone kai paryaayvaachi seekhe hain.' },
    { de: 'Textstelle', art: 'die', gender: 'f', plural: 'Textstellen', pos: 'noun', level: 'B2', register: 'written', en: 'passage in the text', hi: 'पाठ का अंश', ex: 'Diese Textstelle war schwer zu verstehen.', exEn: 'This passage was hard to understand.', exHi: 'Yeh paath ka ansh samajhna mushkil tha.', ex2: 'Sie haben die Textstelle zitiert.', ex2En: 'They\'ve quoted the passage.', ex2Hi: 'Unhone paath ka ansh udhrit kiya hai.' },
    { de: 'Thron', art: 'der', gender: 'm', plural: 'Throne', pos: 'noun', level: 'B2', register: 'written', en: 'throne', hi: 'सिंहासन', ex: 'Der König saß auf dem Thron.', exEn: 'The king sat on the throne.', exHi: 'Raja sinhaasan par baitha tha.', ex2: 'Sie haben den Thron bestiegen.', ex2En: 'They\'ve ascended the throne.', ex2Hi: 'Woh sinhaasan par baithe hain.' },
    { de: 'Tiergarten', art: 'der', gender: 'm', plural: 'Tiergärten', pos: 'noun', level: 'B2', register: 'both', en: 'zoo', hi: 'चिड़ियाघर', ex: 'Der Tiergarten war voller Besucher.', exEn: 'The zoo was full of visitors.', exHi: 'Chidiyaghar darshakon se bhara tha.', ex2: 'Sie haben den Tiergarten besucht.', ex2En: 'They\'ve visited the zoo.', ex2Hi: 'Unhone chidiyaghar ka daura kiya hai.' },
    { de: 'Tiergehege', art: 'das', gender: 'n', plural: 'Tiergehege', pos: 'noun', level: 'B2', register: 'both', en: 'animal enclosure', hi: 'पशु बाड़ा', ex: 'Das Tiergehege war modern gestaltet.', exEn: 'The animal enclosure was modernly designed.', exHi: 'Pashu baada aadhunik roop se banaaya gaya tha.', ex2: 'Sie haben das Tiergehege erweitert.', ex2En: 'They\'ve expanded the animal enclosure.', ex2Hi: 'Unhone pashu baada badhaaya hai.' },
    { de: 'Todesurteil', art: 'das', gender: 'n', plural: 'Todesurteile', pos: 'noun', level: 'B2', register: 'written', en: 'death sentence', hi: 'मृत्युदंड', ex: 'Das Todesurteil wurde verkündet.', exEn: 'The death sentence was announced.', exHi: 'Mrityudand ki ghoshna ki gayi.', ex2: 'Sie haben gegen das Todesurteil protestiert.', ex2En: 'They\'ve protested against the death sentence.', ex2Hi: 'Unhone mrityudand ke khilaaf pradarshan kiya hai.' },
    { de: 'Tränensack', art: 'der', gender: 'm', plural: 'Tränensäcke', pos: 'noun', level: 'B2', register: 'both', en: 'tear sac, eye bag', hi: 'आंसू की थैली', ex: 'Der Tränensack war entzündet.', exEn: 'The tear sac was inflamed.', exHi: 'Aansu ki thaili mein soojan thi.', ex2: 'Sie haben den Tränensack untersucht.', ex2En: 'They\'ve examined the tear sac.', ex2Hi: 'Unhone aansu ki thaili ki jaanch ki hai.' },
    { de: 'Türflügel', art: 'der', gender: 'm', plural: 'Türflügel', pos: 'noun', level: 'B2', register: 'both', en: 'door leaf, door panel', hi: 'दरवाज़े का पल्ला', ex: 'Ein Türflügel war unverschlossen.', exEn: 'One door panel was unlocked.', exHi: 'Darwaaze ka ek palla khula tha.', ex2: 'Sie haben den Türflügel repariert.', ex2En: 'They\'ve repaired the door panel.', ex2Hi: 'Unhone darwaaze ka palla theek kiya hai.' },
    { de: 'übersetzbar', pos: 'adjective', level: 'B2', register: 'written', en: 'translatable', hi: 'अनुवाद योग्य', ex: 'Das Wort war schwer übersetzbar.', exEn: 'The word was hard to translate.', exHi: 'Shabd ka anuvaad karna mushkil tha.', ex2: 'Sie haben übersetzbare Ausdrücke gesucht.', ex2En: 'They\'ve looked for translatable expressions.', ex2Hi: 'Unhone anuvaad-yogya abhivyaktiyaan dhoondi hain.' },
    { de: 'überwiegend', pos: 'adjective', level: 'B2', register: 'written', en: 'predominant(ly)', hi: 'मुख्य रूप से', ex: 'Das Wetter war überwiegend sonnig.', exEn: 'The weather was predominantly sunny.', exHi: 'Mausam mukhya roop se dhoop waala tha.', ex2: 'Sie haben überwiegend positiv reagiert.', ex2En: 'They\'ve reacted predominantly positively.', ex2Hi: 'Unhone mukhya roop se sakaraatmak pratikriya di hai.' },
    { de: 'unverschlossen', pos: 'adjective', level: 'B2', register: 'both', en: 'unlocked', hi: 'खुला हुआ (ताला न लगा)', ex: 'Die Tür war unverschlossen.', exEn: 'The door was unlocked.', exHi: 'Darwaaza khula hua tha (taala nahi laga).', ex2: 'Sie haben das Fenster unverschlossen gelassen.', ex2En: 'They\'ve left the window unlocked.', ex2Hi: 'Unhone khidki khuli chhod di hai.' },
    { de: 'Verdächtige', art: 'der/die', gender: 'm/f', plural: 'Verdächtige', pos: 'noun', level: 'B2', register: 'written', en: 'suspect', hi: 'संदिग्ध', ex: 'Der Verdächtige wurde verhört.', exEn: 'The suspect was interrogated.', exHi: 'Sandigdh se poochhtaachh ki gayi.', ex2: 'Sie haben den Verdächtigen freigelassen.', ex2En: 'They\'ve released the suspect.', ex2Hi: 'Unhone sandigdh ko chhod diya hai.' },
    { de: 'verdrängen', pos: 'verb', level: 'B2', register: 'both', en: 'to displace, suppress, repress', hi: 'दबाना, हटाना', ex: 'Sie verdrängte die schlechten Erinnerungen.', exEn: 'She suppressed the bad memories.', exHi: 'Usne buri yaadein dabaa dein.', ex2: 'Er hat seinen Rivalen verdrängt.', ex2En: 'He\'s displaced his rival.', ex2Hi: 'Usne apne pratidwandi ko hataaya hai.', conj: { praesens: 'verdrängt', praeteritum: 'verdrängte', perfekt: 'hat verdrängt' } },
    { de: 'vermitteln', pos: 'verb', level: 'B2', register: 'both', en: 'to convey, mediate, impart', hi: 'सिखाना, मध्यस्थता करना', ex: 'Der Lehrer vermittelte das Wissen gut.', exEn: 'The teacher conveyed the knowledge well.', exHi: 'Shikshak ne gyaan achhi tarah sikhaaya.', ex2: 'Sie haben zwischen den Parteien vermittelt.', ex2En: 'They\'ve mediated between the parties.', ex2Hi: 'Unhone pakshon ke beech madhyastha ki hai.', conj: { praesens: 'vermittelt', praeteritum: 'vermittelte', perfekt: 'hat vermittelt' } },
    { de: 'versterben', pos: 'verb', level: 'B2', register: 'written', en: 'to pass away, die', hi: 'देहांत होना', ex: 'Der Kaiser verstarb im Winter.', exEn: 'The emperor passed away in winter.', exHi: 'Samraat ka sardiyon mein dehaant hua.', ex2: 'Sie ist letztes Jahr verstorben.', ex2En: 'She\'s passed away last year.', ex2Hi: 'Uska pichhle saal dehaant hua hai.', conj: { praesens: 'verstirbt', praeteritum: 'verstarb', perfekt: 'ist verstorben' } },
    { de: 'verwahrlost', pos: 'adjective', level: 'B2', register: 'written', en: 'neglected, run-down', hi: 'उपेक्षित', ex: 'Das Haus wirkte verwahrlost.', exEn: 'The house seemed neglected.', exHi: 'Ghar upekshit lag raha tha.', ex2: 'Sie haben ein verwahrlostes Grundstück gekauft.', ex2En: 'They\'ve bought a run-down property.', ex2Hi: 'Unhone ek upekshit zameen khareedi hai.' },
    { de: 'Volk', art: 'das', gender: 'n', plural: 'Völker', pos: 'noun', level: 'B2', register: 'written', en: 'people, nation', hi: 'लोग, राष्ट्र', ex: 'Das Volk feierte den Sieg.', exEn: 'The people celebrated the victory.', exHi: 'Logon ne jeet ka jashn manaaya.', ex2: 'Sie haben für ihr Volk gekämpft.', ex2En: 'They\'ve fought for their people.', ex2Hi: 'Unhone apne logon ke liye ladaai ki hai.' },
    { de: 'vorangegangen', pos: 'adjective', level: 'B2', register: 'written', en: 'preceding, previous', hi: 'पूर्ववर्ती', ex: 'Das vorangegangene Kapitel war wichtig.', exEn: 'The preceding chapter was important.', exHi: 'Poorvavarti adhyaay mahatvapurn tha.', ex2: 'Sie haben die vorangegangenen Ereignisse zusammengefasst.', ex2En: 'They\'ve summarised the previous events.', ex2Hi: 'Unhone poorvavarti ghatnaaon ka sankshep diya hai.' },
    { de: 'vorausgehen', pos: 'verb', level: 'B2', register: 'written', en: 'to precede', hi: 'पहले होना', ex: 'Eine Diskussion ging der Entscheidung voraus.', exEn: 'A discussion preceded the decision.', exHi: 'Faisle se pehle ek charcha hui.', ex2: 'Sie ist der Gruppe vorausgegangen.', ex2En: 'She\'s gone ahead of the group.', ex2Hi: 'Woh samuh se aage nikal gayi hai.', conj: { praesens: 'geht voraus', praeteritum: 'ging voraus', perfekt: 'ist vorausgegangen' } },
    { de: 'Vormarsch', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'advance, onward march', hi: 'आगे बढ़ना', ex: 'Der Vormarsch der Technologie war unaufhaltsam.', exEn: 'The advance of technology was unstoppable.', exHi: 'Takneek ka aage badhna rukaawat rahit tha.', ex2: 'Sie haben den Vormarsch gestoppt.', ex2En: 'They\'ve stopped the advance.', ex2Hi: 'Unhone aage badhna roka hai.' },
    { de: 'Wange', art: 'die', gender: 'f', plural: 'Wangen', pos: 'noun', level: 'B2', register: 'both', en: 'cheek', hi: 'गाल', ex: 'Ihre Wange war gerötet.', exEn: 'Her cheek was reddened.', exHi: 'Uska gaal laal tha.', ex2: 'Er hat sie auf die Wange geküsst.', ex2En: 'He\'s kissed her on the cheek.', ex2Hi: 'Usne uske gaal par chumma liya hai.' },
    { de: 'wegbleiben', pos: 'verb', level: 'B2', register: 'both', en: 'to stay away', hi: 'दूर रहना', ex: 'Sie blieb vom Streit weg.', exEn: 'She stayed away from the argument.', exHi: 'Woh jhagde se door rahi.', ex2: 'Er ist der Sitzung weggeblieben.', ex2En: 'He\'s stayed away from the meeting.', ex2Hi: 'Woh baithak se door raha hai.', conj: { praesens: 'bleibt weg', praeteritum: 'blieb weg', perfekt: 'ist weggeblieben' } },
    { de: 'weltbekannt', pos: 'adjective', level: 'B2', register: 'both', en: 'world-famous', hi: 'विश्व प्रसिद्ध', ex: 'Der Künstler war weltbekannt.', exEn: 'The artist was world-famous.', exHi: 'Kalaakaar vishva prasiddh tha.', ex2: 'Sie haben ein weltbekanntes Gemälde gesehen.', ex2En: 'They\'ve seen a world-famous painting.', ex2Hi: 'Unhone ek vishva prasiddh chitrakaari dekhi hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was sind Nomen mit Präpositionen?',
      body: [ 'Some German nouns always require a fixed preposition, just like verbs.' ],
      table: {
        head: ['Wrong pairing', 'Correct pairing'],
        rows: [
          ['<span class="de">Interesse für</span>', '<span class="de">Interesse an</span>'],
          ['<span class="de">Einfluss an</span>', '<span class="de">Einfluss auf</span>']
        ]
      },
      hinglish: 'Verbs ki tarah kuch nouns bhi apna fixed preposition maangte hain. Yahan bhi English se guess karna kaam nahi karta \u2014 jodi waise hi yaad karni padti hai.'
    },
    {
      title: 'Master Table — die wichtigsten B2-Nomen',
      body: [ 'Memorize each noun together with its fixed preposition and case.' ],
      table: {
        head: ['Noun', 'Preposition', 'Case'],
        rows: [
          ['Interesse', 'an', 'Dat.'],
          ['Einfluss', 'auf', 'Akk.'],
          ['Teilnahme', 'an', 'Dat.'],
          ['Verantwortung', 'für', 'Akk.'],
          ['Erfahrung', 'mit', 'Dat.'],
          ['Möglichkeit', 'zu', 'Dat.'],
          ['Grund', 'für', 'Akk.'],
          ['Angst', 'vor', 'Dat.'],
          ['Freude', 'über', 'Akk.'],
          ['Hoffnung', 'auf', 'Akk.'],
          ['Bedarf', 'an', 'Dat.'],
          ['Lösung', 'für', 'Akk.'],
          ['Einladung', 'zu', 'Dat.'],
          ['Beitrag', 'zu', 'Dat.'],
          ['Voraussetzung', 'für', 'Akk.'],
          ['Reaktion', 'auf', 'Akk.'],
          ['Bitte', 'um', 'Akk.'],
          ['Vertrauen', 'in', 'Akk.'],
          ['Unterschied', 'zwischen', 'Dat.']
        ]
      },
      hinglish: 'Har noun ko uske preposition aur case ke saath yaad karo \u2014 sirf "Interesse" nahi, balki "Interesse an + Dativ".'
    },
    {
      title: 'Akkusativ vs Dativ',
      body: [ 'Sort each noun by the case its fixed preposition requires.' ],
      table: {
        head: ['Dativ', 'Akkusativ'],
        rows: [
          ['Interesse an, Teilnahme an, Erfahrung mit, Bedarf an, Einladung zu, Beitrag zu, Unterschied zwischen, Angst vor', 'Einfluss auf, Verantwortung für, Grund für, Freude über, Hoffnung auf, Lösung für, Voraussetzung für, Reaktion auf, Bitte um, Vertrauen in']
        ]
      },
      hinglish: 'Nouns ko case ke hisaab se do groups mein baant lo \u2014 isse yaad rakhna kaafi aasaan ho jaata hai, kyunki preposition hi case tay karta hai.'
    },
    {
      title: 'Question Word Table',
      body: [ 'The question word matches the noun\'s fixed preposition, just as with verbs.' ],
      table: {
        head: ['Noun + Preposition', 'Question'],
        rows: [
          ['Interesse an', 'Woran?'],
          ['Einfluss auf', 'Worauf?'],
          ['Verantwortung für', 'Wofür?'],
          ['Hoffnung auf', 'Worauf?'],
          ['Unterschied zwischen', 'Zwischen welchen …? / Worin besteht der Unterschied?']
        ]
      },
      hinglish: 'Sawaal ka shabd noun ki preposition se banta hai, bilkul verbs jaisa \u2014 <b>an</b> se <b>Woran?</b>, <b>auf</b> se <b>Worauf?</b>'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from guessing prepositions by analogy or English translation instead of memorizing the fixed pairing.' ],
      mistakes: [
        { wrong: 'Interesse für Deutsch.', right: 'Interesse an Deutsch.', why: '"Interesse" always pairs with "an" + Dativ, never "für".' },
        { wrong: 'Einfluss an die Umwelt.', right: 'Einfluss auf die Umwelt.', why: '"Einfluss" always pairs with "auf" + Akkusativ.' },
        { wrong: 'Verantwortung auf das Projekt.', right: 'Verantwortung für das Projekt.', why: '"Verantwortung" always pairs with "für" + Akkusativ.' },
        { wrong: 'Angst von Prüfungen.', right: 'Angst vor Prüfungen.', why: '"Angst" always pairs with "vor" + Dativ.' },
        { wrong: 'Teilnahme für den Kurs.', right: 'Teilnahme am Kurs.', why: '"Teilnahme" pairs with "an" + Dativ, matching the verb <i>teilnehmen an</i> \u2014 and in practice <b>an dem</b> contracts to <b>am</b>.' }
      ],
      hinglish: 'Yeh galtiyan aksar isliye hoti hain ki preposition English dekh kar ya kisi doosre shabd se milaa kar guess kar liya jaata hai. In jodiyon ko waise hi yaad karna padta hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Noun-preposition combinations appear constantly in academic German, business German, newspapers, and Goethe B2 texts.' ],
      note: 'Memory trick: Don\'t memorize "Interesse" — memorize "Interesse an". Don\'t memorize "Einfluss" — memorize "Einfluss auf".',
      hinglish: 'Yeh combinations academic aur business German mein, aur newspapers mein bahut aate hain \u2014 Goethe B2 ki reading aur writing dono mein kaam aate hain.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Pressemitteilung: Der Fall wird neu aufgerollt',
    titleEn: 'Press release: the case is being reopened',
    tokens: [
      { w: 'Nach', role: 'plain', en: 'after', hi: 'बाद', type: 'Preposition · Dat.' },
      { w: 'wochenlangen', role: 'plain', en: 'weeks-long', hi: 'हफ़्तों के', type: 'Adjective · Dat.' },
      { w: 'Ermittlungen', role: 'plain', en: 'investigations (Satzende)', hi: 'जाँच (Satzende)', type: 'Noun · plural' },
      { w: 'besteht', role: 'r-verb', en: 'exists (Valenz: bestehen auf + Dat.)', hi: 'ज़ोर देता है (Valenz: auf + Dat.)', type: 'Verb · bestehen auf', why: '"bestehen auf" + Dativ: the fixed preposition is part of the noun-verb combination\'s valency (this chapter).' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Hoffnung', role: 'plain', en: 'hope', hi: 'उम्मीद', type: 'Noun · fem.' },
      { w: 'auf', role: 'plain', en: 'for', hi: 'की', type: 'Preposition · Akk. (Nomenpräposition)', why: '"Hoffnung auf" + Akkusativ: a fixed noun-preposition pair (this chapter).' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'baldige', role: 'plain', en: 'imminent', hi: 'शीघ्र', type: 'Adjective' },
      { w: 'Aufklärung', role: 'plain', en: 'resolution (Satzende)', hi: 'समाधान (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Reporter', role: 'plain', en: 'reporter', hi: 'रिपोर्टर', type: 'Noun · masc.', why: 'der/die Reporter/in (this chapter).' },
      { w: 'zeigt', role: 'plain', en: 'shows', hi: 'दिखाता है', type: 'Verb · zeigen' },
      { w: 'Interesse', role: 'plain', en: 'interest', hi: 'रुचि', type: 'Noun · neut.' },
      { w: 'an', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat. (Nomenpräposition)', why: '"Interesse an" + Dativ: another fixed noun-preposition pair (this chapter).' },
      { w: 'den', role: 'plain', en: 'the (dat. pl.)', hi: 'इन', type: 'Article · Dat.' },
      { w: 'neuen', role: 'plain', en: 'new', hi: 'नए', type: 'Adjective' },
      { w: 'Details', role: 'plain', en: 'details (Satzende)', hi: 'विवरण (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'prominenter', role: 'plain', en: 'prominent', hi: 'प्रसिद्ध', type: 'Adjective', why: 'prominent (this chapter).' },
      { w: 'Kunstsammler', role: 'plain', en: 'art collector', hi: 'कला संग्रहकर्ता', type: 'Noun · masc.' },
      { w: 'äußert', role: 'plain', en: 'expresses', hi: 'व्यक्त करता है', type: 'Verb · äußern' },
      { w: 'seine', role: 'plain', en: 'his', hi: 'अपनी', type: 'Possessivartikel' },
      { w: 'Freude', role: 'plain', en: 'joy', hi: 'ख़ुशी', type: 'Noun · fem.' },
      { w: 'über', role: 'plain', en: 'about', hi: 'पर', type: 'Preposition · Akk. (Nomenpräposition)', why: '"Freude über" + Akkusativ: another fixed pairing (this chapter).' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Fortschritt', role: 'plain', en: 'progress (Satzende)', hi: 'प्रगति (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Schlossgarten', role: 'plain', en: 'palace garden', hi: 'महल का बाग़', type: 'Noun · masc.', why: 'der Schlossgarten (this chapter).' },
      { w: 'bleibt', role: 'plain', en: 'remains', hi: 'रहता है', type: 'Verb · bleiben' },
      { w: 'bis', role: 'plain', en: 'until', hi: 'तक', type: 'Preposition · Akk.' },
      { w: 'auf', role: 'plain', en: 'further', hi: 'आगे', type: 'Preposition' },
      { w: 'Weiteres', role: 'plain', en: 'notice (Satzende)', hi: 'सूचना (Satzende)', type: 'Pronoun' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'Besucher', role: 'plain', en: 'visitors (Satzende)', hi: 'आगंतुकों (Satzende)', type: 'Noun · plural' },
      { w: 'gesperrt', role: 'plain', en: 'closed (Satzende)', hi: 'बंद (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Freude', role: 'plain', en: 'joy', hi: 'ख़ुशी', type: 'Noun · fem.' },
      { w: 'über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.', why: 'die Freude über + Akk.: fixed noun + preposition (this chapter).' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Rückkehr', role: 'plain', en: 'return', hi: 'वापसी', type: 'Noun · fem.' },
      { w: 'des', role: 'plain', en: 'of the (neut. gen.)', hi: 'की', type: 'Article · Genitiv' },
      { w: 'Gemäldes', role: 'plain', en: 'painting (Satzende)', hi: 'पेंटिंग (Satzende)', type: 'Noun · neut.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'groß', role: 'plain', en: 'great (Satzende)', hi: 'बड़ी (Satzende)', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'doch', role: 'plain', en: 'but', hi: 'लेकिन', type: 'Conjunction' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'Interesse', role: 'plain', en: 'interest', hi: 'रुचि', type: 'Noun · neut.' },
      { w: 'an', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.', why: 'das Interesse an + Dat.: fixed noun + preposition (this chapter).' },
      { w: 'den', role: 'plain', en: 'the (plural dat.)', hi: 'इन', type: 'Article · Dat.' },
      { w: 'Hintergründen', role: 'plain', en: 'background details', hi: 'पृष्ठभूमियों', type: 'Noun · plural' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'Diebstahls', role: 'plain', en: 'theft (Satzende)', hi: 'चोरी का (Satzende)', type: 'Noun · masc.' },
      { w: 'wächst', role: 'plain', en: 'grows (Satzende)', hi: 'बढ़ रही है (Satzende)', type: 'Verb · wachsen' },
      { w: 'weiter', role: 'plain', en: 'further (Satzende)', hi: 'लगातार (Satzende)', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Polizei', role: 'plain', en: 'police', hi: 'पुलिस', type: 'Noun · fem.' },
      { w: 'bittet', role: 'plain', en: 'asks', hi: 'अनुरोध करती है', type: 'Verb · bitten um' },
      { w: 'daher', role: 'plain', en: 'therefore', hi: 'इसलिए', type: 'Adverb' },
      { w: 'um', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'Geduld', role: 'plain', en: 'patience (Satzende)', hi: 'धीरज (Satzende)', type: 'Noun · fem.' },
      { w: 'bis', role: 'plain', en: 'until', hi: 'तक', type: 'Preposition · Akk.' },
      { w: 'zum', role: 'plain', en: 'to the', hi: 'तक', type: 'Contraction · zu dem' },
      { w: 'Abschluss', role: 'plain', en: 'conclusion (Satzende)', hi: 'निष्कर्ष (Satzende)', type: 'Noun · masc.' },
      { w: 'der', role: 'plain', en: 'of the', hi: 'की', type: 'Article · Genitiv' },
      { w: 'Ermittlungen', role: 'plain', en: 'investigations (Satzende)', hi: 'जाँच (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true }
    ],
    translation: 'After weeks-long investigations, the hope for an imminent resolution persists. A reporter shows interest in the new details. A prominent art collector expresses his joy at the progress. The palace garden remains closed to visitors until further notice. Joy at the painting\u2019s return is great, but interest in the theft\u2019s background details keeps growing. The police therefore ask for patience until the investigations are concluded.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_041_L001', speaker: 'Merit', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, mein Interesse an der Geschichte dieses Königs ist wirklich groß.', en: 'Timo, my interest in this king\'s history is really great.' },
      { id: 'B2_041_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Verstehe ich, aber ehrlich, sein Einfluss auf das ganze Land war enorm.', en: 'I understand, but honestly, his influence on the whole country was enormous.' },
      { id: 'B2_041_L003', speaker: 'Merit', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau, und seine Verantwortung für so viele Entscheidungen macht ihn spannend.', en: 'Exactly, and his responsibility for so many decisions makes him fascinating.' },
      { id: 'B2_041_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Trotzdem, auf diesem Thron würde ich mich nicht wohlfühlen — der macht mir eher Angst.', en: 'Still, I wouldn\'t feel comfortable on that throne — it rather scares me.' }
    ],
    transcript: 'Timo, mein Interesse an der Geschichte dieses Königs ist wirklich groß. Verstehe ich, aber ehrlich, sein Einfluss auf das ganze Land war enorm. Genau, und seine Verantwortung für so viele Entscheidungen macht ihn spannend. Trotzdem, auf diesem Thron würde ich mich nicht wohlfühlen — der macht mir eher Angst.',
    translation: 'Timo, my interest in this king\'s history is really great. I understand, but honestly, his influence on the whole country was enormous. Exactly, and his responsibility for so many decisions makes him fascinating. Still, I wouldn\'t feel comfortable on that throne — it rather scares me.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'mein' },
      { w: 'Interesse' },
      { w: 'an' },
      { w: 'der' },
      { w: 'Geschichte' },
      { w: 'dieses' },
      { w: 'Königs' },
      { w: 'ist' },
      { w: 'wirklich' },
      { w: 'groß' },
      { w: '.', plain: true },
      { w: 'Verstehe' },
      { w: 'ich' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ehrlich' },
      { w: ',', plain: true },
      { w: 'sein' },
      { w: 'Einfluss' },
      { w: 'auf' },
      { w: 'das' },
      { w: 'ganze' },
      { w: 'Land' },
      { w: 'war' },
      { w: 'enorm' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'seine' },
      { w: 'Verantwortung' },
      { w: 'für' },
      { w: 'so' },
      { w: 'viele' },
      { w: 'Entscheidungen' },
      { w: 'macht' },
      { w: 'ihn' },
      { w: 'spannend' },
      { w: '.', plain: true },
      { w: 'Trotzdem' },
      { w: ',', plain: true },
      { w: 'auf' },
      { w: 'diesem' },
      { w: 'Thron' },
      { w: 'würde' },
      { w: 'ich' },
      { w: 'mich' },
      { w: 'nicht' },
      { w: 'wohlfühlen' },
      { w: '—', plain: true },
      { w: 'der' },
      { w: 'macht' },
      { w: 'mir' },
      { w: 'eher' },
      { w: 'Angst' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wofür interessiert sich Merit besonders?', qEn: 'What is Merit especially interested in?', options: ['die Architektur', 'die Geschichte des Königs', 'die Musik', 'die Kunst'], optionsEn: ['the architecture', 'the story of the king', 'the music', 'the art'], answer: 1,
        explain: '"Mein Interesse an der Geschichte dieses Königs ist wirklich groß."' },
      { q: 'Wie findet Timo den Thron?', qEn: 'How does Timo feel about the throne?', options: ['begeistert', 'neutral', 'es macht ihm Angst', 'er will es kaufen'], optionsEn: ['delighted', 'neutral', 'it frightens him', 'he wants to buy it'], answer: 2,
        explain: '"Der macht mir eher Angst."' }
    ]
  },

  speaking: [
    { task: "Ein Freund fragt, was dich an dem König interessiert.", taskEn: "A friend asks what interests you about the king.", de: "Mein Interesse an der Geschichte dieses Königs ist wirklich groß.", en: "My interest in this king's history is really great." },
    { task: "Er nennt den Einfluss des Königs. Stimme zu.", taskEn: "He mentions the king's influence. Agree.", de: "Sein Einfluss auf das ganze Land war enorm.", en: "His influence on the whole country was enormous." },
    { task: "Eine Kollegin fragt, was das Museum braucht.", taskEn: "A colleague asks what the museum needs.", de: "Der Bedarf an Führungen ist groß, aber es fehlt Personal.", en: "The need for guided tours is great, but staff are lacking." },
    { task: "Ein Reporter fragt nach dem Unterschied der beiden Epochen.", taskEn: "A reporter asks about the difference between the two eras.", de: "Der Unterschied zwischen den Epochen liegt in der Architektur.", en: "The difference between the eras lies in the architecture." },
    { task: "Rollenspiel: Ihr stellt die Ausstellung vor.", taskEn: "Role-play: you present the exhibition.", de: "Die Nachfrage nach Karten steigt. — Und die Verantwortung für den Schlossgarten liegt bei der Stadt.", en: "Demand for tickets is rising. — And responsibility for the palace garden lies with the city." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Formal email (6-8 sentences): Write about a project using Interesse an, Verantwortung für, and Erfahrung mit.\n\nTASK 2 — Report (6-8 sentences): Summarize a topic using Einfluss auf, Lösung für, Voraussetzung für, and Unterschied zwischen naturally.',
    starters: ['Ich habe Interesse an …', 'Der Einfluss auf … ist …'],
    placeholder: 'Ich habe Interesse an diesem Projekt. Ich übernehme Verantwortung für das Ergebnis …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which preposition is fixed with "Interesse"?',
      options: ['an', 'für', 'auf'],
      answer: 0,
      explain: '"Interesse" always takes "an" + Dativ, never "für".'
    },
    gap: {
      sentence: ['Der Einfluss ', ' die Umwelt ist enorm.'],
      gaps: [ { answer: 'auf', accepts: ['auf'] } ],
      explain: '"Einfluss" always requires "auf" + Akkusativ.'
    },
    match: {
      q: 'Match each noun to its fixed preposition and case.',
      pairs: [
        { noun: 'Interesse', art: 'an + Dat.' },
        { noun: 'Verantwortung', art: 'für + Akk.' },
        { noun: 'Angst', art: 'vor + Dat.' },
        { noun: 'Vertrauen', art: 'in + Akk.' }
      ]
    },
    builder: {
      target: 'Build: "I have interest in languages." (Interesse an)',
      bank: ['Ich', 'habe', 'Interesse', 'an', 'Sprachen', '.'],
      answer: ['Ich', 'habe', 'Interesse', 'an', 'Sprachen', '.'],
      roles: { 'Interesse': 'r-nomen-prep', 'an': 'r-nomen-prep' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Interesse für Deutsch.',
      right: 'Interesse an Deutsch.',
      explain: '"Interesse" always pairs with "an" + Dativ, never "für".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What must always accompany a noun like "Interesse" or "Einfluss"?', options: ['A fixed preposition', 'An adjective', 'A modal verb'], answer: 0,
      explain: 'Many German nouns require a fixed preposition that never changes, just like verbs.' },
    { q: 'What case does "Interesse an" require?', options: ['Dativ', 'Akkusativ', 'Genitiv'], answer: 0,
      explain: '"Interesse an" is one of the Dativ noun-preposition combinations.' },
    { q: 'What does "Verantwortung" pair with?', options: ['für', 'auf', 'an'], answer: 0,
      explain: '"Verantwortung" always pairs with "für" + Akkusativ.' },
    { q: 'Which question word matches "Einfluss auf"?', options: ['Worauf?', 'Woran?', 'Wofür?'], answer: 0,
      explain: 'The question word mirrors the noun\'s fixed preposition — "auf" becomes "Worauf?".' },
    { q: 'What is the best strategy for learning these nouns?', options: ['Learn noun + preposition + case together', 'Learn only the noun', 'Guess the preposition from English'], answer: 0,
      explain: 'These nouns should always be learned as one unit: noun + preposition + case, just like verbs.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-nomen-prep', html: 'Many German nouns require a FIXED preposition that never changes — learn noun + preposition + case as one unit.' },
    { c: 'r-nomen-prep', html: 'Most Akkusativ nouns: Einfluss auf, Verantwortung für, Grund für, Hoffnung auf, Lösung für. Most Dativ nouns: Interesse an, Teilnahme an, Erfahrung mit.' },
    { c: 'r-nomen-prep', html: 'These combinations are far more frequent in formal/academic German than in everyday conversation.' }
  ],
  revisionTips: [
    'Make flashcards with noun + preposition + case together — never the noun alone.',
    'Compare noun-preposition pairs with the matching verb-preposition pairs from Chapter 40 (Interesse an / sich interessieren für, Teilnahme an / teilnehmen an).',
    'Keep Adjektive mit Präpositionen for the next chapter.'
  ]
};

window.CHAPTER = CHAPTER;
