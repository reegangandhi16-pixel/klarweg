/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 4 → 5 · Chapter 43
   "Goethe Mini 3 (Checkpoint)" — NOT a teaching chapter.
   Phase 4 checkpoint covering Chapters 37-42. No new
   grammar/vocabulary; recycles Relativsätze im Genitiv
   (dessen/deren), Verschachtelte Relativsätze, Relativsätze mit
   wer...der..., Verben/Nomen/Adjektive mit Präpositionen.
   IMPORTANT: speaking/role-play uses ONLY Anna and Rohan.
============================================================ */
const CHAPTER = {
  id: 'b2-43-goethe-mini-3',
  phase: 'B2 · Phase 4 → 5',
  number: 43,
  title: 'Goethe Mini 3 (Checkpoint)',
  titleEn: 'Goethe mini-test 3 (checkpoint)',
  description: 'Prove you\'ve mastered Chapters 37-42 — Genitiv relative clauses through Adjektive mit Präpositionen — with a Goethe-style mock exam before moving into Phase 5.',
  xp: 540,
  time: 100,
  difficulty: 'Checkpoint',
  isCheckpoint: true,
  nextChapter: { number: 44, title: 'Zustandspassiv (sein + Partizip II)', titleEn: 'Statal passive (sein + past participle)' , href: 'chapter-b2-44-zustandspassiv.html' },

  heroAnimationPath: null,

  story: null,

  overviewIntro: {
    eyebrow: 'Checkpoint — not a teaching chapter',
    html: 'This is the Phase 4 checkpoint, covering Chapters 37–42. No new grammar or vocabulary appears here — every question recycles <span class="de">Relativsätze im Genitiv (dessen/deren)</span>, <span class="de">Verschachtelte Relativsätze</span>, <span class="de">Relativsätze mit wer...der...</span>, and <span class="de">Verben/Nomen/Adjektive mit Präpositionen</span>. Roughly 80% Goethe B2 style, 20% Klarweg integration.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'This is a CHECKPOINT covering Chapters 37-42: Relativsätze im Genitiv (dessen/deren), Verschachtelte Relativsätze (nested relative clauses), Relativsätze mit wer...der... (indefinite relative clauses), Verben mit Präpositionen, Nomen mit Präpositionen, and Adjektive mit Präpositionen. Assess the learner\'s writing against ALL of these areas as relevant — do not expect anything beyond this scope. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check dessen vs deren by antecedent gender/number, nested-clause antecedent tracing, wer/der case-matching by main-clause requirement, and correct fixed prepositions+cases for verbs/nouns/adjectives from Ch.40-42.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why, tagging which chapter topic it relates to. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Checkpoint readiness:</b> one sentence on whether the learner is ready to move to Phase 5, or which chapter (37-42) to revisit.</p>\n' +
    'Keep it under 150 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you\'ve mastered Chapters 37-42. You\'re ready for Phase 5 of B2.',
    mid: 'Good work. Review the topics flagged below before moving to Phase 5.',
    low: 'This checkpoint shows real gaps. Revisit the recommended chapters before continuing — Phase 5 builds directly on this foundation.'
  },

  parserSentence: [
    { w: 'Der', role: 'plain' }, { w: 'Mann', role: 'plain' }, { w: ',', plain: true },
    { w: 'dessen', role: 'r-checkpoint' }, { w: 'Auto', role: 'plain' }, { w: 'gestohlen', role: 'plain' }, { w: 'wurde', role: 'plain' }, { w: ',', plain: true }, { w: 'ist', role: 'plain' }, { w: 'stolz', role: 'r-checkpoint' }, { w: 'auf', role: 'r-checkpoint' }, { w: 'seine', role: 'plain' }, { w: 'Arbeit', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'Understand the scope of this checkpoint: Chapters 37-42, no new content.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Complete two Goethe-style reading texts testing relative clauses and preposition combinations.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Complete two listening tasks — Multiple Choice, Note Completion, and Pronoun/Preposition ID.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'Answer 20 mixed grammar questions spanning all of Chapters 37-42.' },
    { id: 'vocabulary', label: 'Vocabulary Review', tag: 'core',
      objective: 'Answer 10 vocabulary questions: meanings, fixed prepositions, cases, question words.' },
    { id: 'exercises',  label: 'Error Correction', tag: 'practice',
      objective: 'Find and fix 10 errors spanning relative pronouns, prepositions, cases, and word order.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Complete four Goethe-style speaking tasks with examiner prompts and an evaluation rubric.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a formal application email and a discussion essay using the full Phase 4 grammar range.' },
    { id: 'quiz',       label: 'Scoring & Answer Key', tag: 'assess',
      objective: 'Review the complete answer key, scoring table, and your readiness for Phase 5.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'See your checkpoint results and personalized revision recommendations.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download the checkpoint answer key and scoring guide.' }
  ],

  resources: [
    { icon: '📊', title: 'Scoring Table PDF',
      desc: 'The complete scoring breakdown across Reading, Listening, Grammar, Vocabulary, Writing, and Speaking.',
      pdfUrl: '/pdfs/scoring.pdf', size: '3 pages', kind: 'Assessment' },
    { icon: '🔑', title: 'Complete Answer Key PDF',
      desc: 'Every question with the correct answer, a short explanation, and a grammar reference to Chapters 37-42.',
      pdfUrl: '/pdfs/answer-key.pdf', size: '18 pages', kind: 'Assessment' },
    { icon: '📖', title: 'Revision Guide PDF',
      desc: 'A one-page map of which chapters (37-42) to revisit based on common weak areas.',
      pdfUrl: '/pdfs/revision-guide.pdf', size: '2 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Chapters 37–42', text: 'Prove mastery of the entire Phase 4 grammar system' },
    { de: 'dessen/deren + verschachtelte Relativsätze + wer...der... + Präpositionen', text: 'Combine complex relative clauses with fixed prepositions' },
    { de: 'Goethe B2 80% · Klarweg 20%', text: 'Experience real Goethe B2 exam-style difficulty' },
    { de: '180 points total', text: 'Score across Reading, Listening, Grammar, Vocabulary, Writing, and Speaking' },
    { de: 'Personalized recommendations', text: 'Know exactly which chapters to revisit if needed' }
  ],

  vocab: [],

  grammar: [
    {
      title: 'Prüfungsumfang (Chapters 37–42)',
      body: [ 'This checkpoint tests everything from Chapters 37 through 42. No new grammar or vocabulary is introduced.' ],
      table: {
        head: ['Chapter', 'Topic'],
        rows: [
          ['37', 'Relativsätze im Genitiv (dessen/deren)'],
          ['38', 'Verschachtelte Relativsätze'],
          ['39', 'Relativsätze mit wer... der...'],
          ['40', 'Verben mit Präpositionen'],
          ['41', 'Nomen mit Präpositionen'],
          ['42', 'Adjektive mit Präpositionen']
        ]
      },
      hinglish: 'Yeh checkpoint Chapter 37 se 42 tak ka sab kuch test karta hai. Yahan koi naya grammar ya vocabulary nahi aata — sirf jo padha hai wahi check hota hai.'
    },
    {
      title: 'AI Tutor Empfehlungslogik',
      body: [ 'If your checkpoint results show a weak area, the AI Tutor recommends the specific chapter to revisit.' ],
      table: {
        head: ['Weak area', 'Recommended chapters'],
        rows: [
          ['Relative clauses (dessen/deren, nested, wer...der...)', 'Chapters 37–39'],
          ['Verb-preposition combinations', 'Chapter 40'],
          ['Noun-preposition combinations', 'Chapter 41'],
          ['Adjective-preposition combinations', 'Chapter 42'],
          ['Reading long/nested sentences', 'Chapter 38']
        ]
      },
      hinglish: 'Agar checkpoint ke results mein koi weak area dikhta hai, to AI Tutor tumhe wahi chapter dobara dekhne ke liye recommend karta hai.'
    }
  ],

  // ---------- Reading: TWO Goethe-style texts ----------
  reading: {
    title: 'Lesetext A — Universitäres Forschungsprojekt',
    titleEn: 'Reading A — University research project',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Professorin', role: 'plain', en: 'professor', hi: 'प्रोफेसर', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'deren', role: 'r-checkpoint', en: 'whose (antecedent: die Professorin)', hi: 'जिसकी (antecedent: die Professorin)', type: 'Relativpronomen · Genitiv (Ch.37)' },
      { w: 'Forschung', role: 'plain', en: 'research', hi: 'शोध', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-checkpoint', en: 'which (antecedent: Forschung — nested)', hi: 'जो (antecedent: Forschung — nested)', type: 'Relativpronomen · Nom. (Ch.38)' },
      { w: 'international', role: 'plain', en: 'internationally', hi: 'अंतरराष्ट्रीय स्तर पर', type: 'Adjective' },
      { w: 'bekannt', role: 'r-checkpoint', en: 'known (fixed adjective, Ch.42)', hi: 'प्रसिद्ध (fixed adjective, Ch.42)', type: 'Adjective (Partizip II)' },
      { w: 'ist', role: 'r-checkpoint', en: 'is (Satzende, nested clause)', hi: 'है (Satzende, nested clause)', type: 'Verb · sein (Präsens, Satzende)' },
      { w: ',', plain: true },
      { w: 'ist', role: 'plain', en: 'is (main clause continues)', hi: 'है (main clause)', type: 'Verb · sein (Präsens)' },
      { w: 'interessiert', role: 'r-checkpoint', en: 'interested (fixed adjective, Ch.42)', hi: 'दिलचस्पी रखती है (fixed adjective, Ch.42)', type: 'Adjective (Partizip II)' },
      { w: 'an', role: 'r-checkpoint', en: 'in (fixed preposition + Dativ, Ch.42)', hi: 'में (fixed preposition + Dativ, Ch.42)', type: 'Präposition · Dat.' },
      { w: 'neuen', role: 'plain', en: 'new', hi: 'नए', type: 'Adjective · Dat.' },
      { w: 'Methoden', role: 'plain', en: 'methods (Satzende)', hi: 'तरीकों (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The professor whose research, which is internationally known, is interested in new methods.',
    comprehension: [
      { q: 'Worauf bezieht sich "deren"?', options: ['die Professorin (Ch.37)', 'die Forschung', 'die Methoden'], answer: 0 },
      { q: 'Worauf bezieht sich das zweite "die" (nested)?', options: ['Forschung (Ch.38)', 'die Professorin', 'Methoden'], answer: 0 },
      { q: 'Welche Präposition gehört zu "interessiert"?', options: ['an (Ch.42)', 'für', 'auf'], answer: 0 }
    ]
  },
  readingBArchive: {
    title: 'Lesetext B — Nachhaltigkeitsbericht',
    titleEn: 'Reading B — Sustainability report',
    tokens: [
      { w: 'Wer', role: 'r-checkpoint', en: 'whoever (Nom., Ch.39)', hi: 'जो कोई भी (Nom., Ch.39)', type: 'Relativpronomen · wer' },
      { w: 'sich', role: 'plain', en: 'oneself', hi: 'खुद को', type: 'Reflexivpronomen' },
      { w: 'für', role: 'r-checkpoint', en: 'in (fixed preposition + Akkusativ, Ch.40)', hi: 'में (fixed preposition + Akkusativ, Ch.40)', type: 'Präposition · Akk.' },
      { w: 'Nachhaltigkeit', role: 'plain', en: 'sustainability', hi: 'स्थिरता', type: 'Noun · fem.' },
      { w: 'interessiert', role: 'r-checkpoint', en: 'is interested (fixed reflexive verb, Ch.40, Satzende)', hi: 'दिलचस्पी रखता है (fixed reflexive verb, Satzende)', type: 'Verb · sich interessieren (Präsens, Satzende)' },
      { w: ',', plain: true },
      { w: 'dem', role: 'r-checkpoint', en: 'that person (Dat., resumes wer in a different case)', hi: 'उस व्यक्ति को (Dat.)', type: 'Demonstrativpronomen · Dat.' },
      { w: 'gefällt', role: 'r-checkpoint', en: 'pleases (main clause, Dativverb)', hi: 'पसंद आता है (main clause)', type: 'Verb · gefallen (Präsens)' },
      { w: 'unser', role: 'plain', en: 'our (masc. nom.)', hi: 'हमारा', type: 'Possessivartikel' },
      { w: 'Beitrag', role: 'plain', en: 'contribution', hi: 'योगदान', type: 'Noun · masc.' },
      { w: 'zu', role: 'r-checkpoint', en: 'to (fixed preposition + Dativ, Ch.41)', hi: 'में (fixed preposition + Dativ, Ch.41)', type: 'Präposition · Dat.' },
      { w: 'dieser', role: 'plain', en: 'this (fem. dat.)', hi: 'इस', type: 'Pronoun · Dat.' },
      { w: 'Bewegung', role: 'plain', en: 'movement (Satzende)', hi: 'आंदोलन (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Whoever is interested in sustainability, that person will like our contribution to this movement.'
  },

  // ---------- Listening: TWO scripts ----------
  listening: {
    transcript: 'Der Geschäftsführer, dessen Firma für Innovationen bekannt ist, ist verantwortlich für das neue Projekt. Wer an diesem Projekt teilnimmt, der arbeitet direkt mit dem Team, dessen Erfahrung mit internationalen Kunden groß ist.',
    translation: 'The CEO, whose company is known for innovations, is responsible for the new project. Whoever takes part in this project works directly with the team, whose experience with international clients is great.',
    tokens: [
      { w: 'Der' },
      { w: 'Geschäftsführer' },
      { w: ',', plain: true },
      { w: 'dessen' },
      { w: 'Firma' },
      { w: 'für' },
      { w: 'Innovationen' },
      { w: 'bekannt' },
      { w: 'ist' },
      { w: ',', plain: true },
      { w: 'ist' },
      { w: 'verantwortlich' },
      { w: 'für' },
      { w: 'das' },
      { w: 'neue' },
      { w: 'Projekt' },
      { w: '.', plain: true },
      { w: 'Wer' },
      { w: 'an' },
      { w: 'diesem' },
      { w: 'Projekt' },
      { w: 'teilnimmt' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'arbeitet' },
      { w: 'direkt' },
      { w: 'mit' },
      { w: 'dem' },
      { w: 'Team' },
      { w: ',', plain: true },
      { w: 'dessen' },
      { w: 'Erfahrung' },
      { w: 'mit' },
      { w: 'internationalen' },
      { w: 'Kunden' },
      { w: 'groß' },
      { w: 'ist' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Worauf bezieht sich das erste "dessen"?', options: ['der Geschäftsführer (Ch.37)', 'die Firma', 'das Projekt'], optionsEn: ['the managing director (Ch.37)', 'the company', 'the project'], answer: 0 },
      { q: 'Welche Präposition gehört zu "verantwortlich"?', options: ['für (Ch.42)', 'auf', 'an'], optionsEn: ['for (Ch.42)', 'on', 'on'], answer: 0 },
      { q: 'Was zeigt "Wer an diesem Projekt teilnimmt, der..."?', options: ['Eine indefinite Relativsatzstruktur (Ch.39)', 'Eine Vermutung', 'Eine Bedingung'], optionsEn: ['an indefinite relative clause structure (Ch.39)', 'an assumption', 'a condition'], answer: 0 },
      { q: 'Worauf bezieht sich das zweite "dessen"?', options: ['das Team (Ch.37/38, nested)', 'der Geschäftsführer', 'das Projekt'], optionsEn: ['the team (Ch.37/38, nested)', 'the managing director', 'the project'], answer: 0 }
    ]
  },
  listeningBArchive: {
    transcript: 'Die Studentin, deren Bruder Ingenieur ist, ist stolz auf ihre Arbeit. Sie nimmt an einem Seminar teil, dessen Thema für ihre Forschung wichtig ist.',
    translation: 'The student whose brother is an engineer is proud of her work. She takes part in a seminar whose topic is important for her research.',
    questions: [
      { q: 'Welche Präposition gehört zu "stolz"?', options: ['auf (Ch.42)', 'an', 'für'], answer: 0 },
      { q: 'Welche Präposition gehört zu "teilnehmen"?', options: ['an (Ch.40)', 'auf', 'für'], answer: 0 }
    ]
  },

  // ---------- Speaking (4 Goethe-style tasks, Anna/Rohan examiner prompts) ----------
  speaking: [
    { task: "Prüfung, Teil 1: Stell den Geschäftsführer und sein Projekt vor.", taskEn: "Exam, Part 1: introduce the managing director and his project.", de: "Der Geschäftsführer, dessen Firma für Innovationen bekannt ist, leitet das neue Projekt.", en: "The managing director, whose company is known for innovation, runs the new project." },
    { task: "Prüfung, Teil 2: Formuliere eine allgemeine Aussage über die Teilnehmer.", taskEn: "Exam, Part 2: formulate a general statement about the participants.", de: "Wer an diesem Projekt teilnimmt, der arbeitet international.", en: "Whoever takes part in this project works internationally." },
    { task: "Prüfung, Teil 3: Beschreibe deine Rolle im Betrieb.", taskEn: "Exam, Part 3: describe your role in the company.", de: "Ich bin verantwortlich für die Schulungen und interessiert an neuen Methoden.", en: "I'm responsible for training and interested in new methods." },
    { task: "Prüfung, Teil 4: Nenne die Voraussetzung für den Erfolg.", taskEn: "Exam, Part 4: name the precondition for success.", de: "Der Bedarf an Fachkräften ist hoch, deshalb hängt alles von der Ausbildung ab.", en: "The need for skilled staff is high, so everything depends on training." }
  ],
  speakingEvaluation: {
    checklist: [
      'Correct dessen/deren selection based on antecedent gender/number (Ch.37)',
      'Correct antecedent tracing in nested relative clauses (Ch.38)',
      'Correct case-matching for wer...der... constructions (Ch.39)',
      'Correct fixed prepositions and cases for verbs, nouns, and adjectives (Ch.40–42)',
      'Natural, non-forced use of at least four different Phase 4 structures across the response',
      'Clear, well-organized argumentation appropriate to the topic'
    ]
  },

  // ---------- Writing (2 tasks) ----------
  writing: {
    prompt: 'TASK 1 — Formal email (90–110 words): Write a university application email using at least one Genitiv relative clause (dessen/deren), one verb-preposition combination, and one noun-preposition combination.\n\nTASK 2 — Discussion essay (110–130 words): Should companies require employees to work in the office? Use relative clauses, verb/noun/adjective-preposition combinations naturally.',
    starters: ['Die Universität, deren …', 'Wer im Büro arbeitet, der …'],
    placeholder: 'Sehr geehrte Damen und Herren, ich interessiere mich für das Studium an Ihrer Universität, deren …',
    minWords: 90
  },

  // ---------- Grammar Review: 50 mixed questions (representative set) ----------
  grammarReview: [
    { q: 'Welches Relativpronomen passt: "Der Mann, ___ Auto gestohlen wurde"?', options: ['dessen', 'deren', 'der'], answer: 0, ref: 'Ch.37 dessen/deren' },
    { q: 'Welches Relativpronomen passt: "Die Frau, ___ Sohn Arzt ist"?', options: ['deren', 'dessen', 'die'], answer: 0, ref: 'Ch.37' },
    { q: 'Was entscheidet dessen vs deren?', options: ['Das Geschlecht des Antezedens', 'Das Geschlecht des Besitzes', 'Zufall'], answer: 0, ref: 'Ch.37' },
    { q: 'Was bedeutet "verschachtelt"?', options: ['Ein Relativsatz im anderen', 'Zwei getrennte Sätze', 'Ein Nebensatz ohne Verb'], answer: 0, ref: 'Ch.38 Verschachtelte Relativsätze' },
    { q: 'Wie sollte man einen langen verschachtelten Satz lesen?', options: ['Zuerst den Hauptsatz finden', 'Wort für Wort', 'Von hinten nach vorne'], answer: 0, ref: 'Ch.38' },
    { q: 'Was bedeutet "wer" in "Wer wagt, gewinnt"?', options: ['Jeder, der etwas tut (kein spezifisches Antezedens)', 'Eine bestimmte Person', 'Eine Gruppe'], answer: 0, ref: 'Ch.39 wer der' },
    { q: 'Warum steht "den" in "Wer zu spät kommt, den bestraft das Leben"?', options: ['"bestrafen" braucht Akkusativ', 'Es ist ein Fehler', 'Weil "wer" auch Akkusativ ist'], answer: 0, ref: 'Ch.39' },
    { q: 'Welche Präposition gehört zu "warten"?', options: ['auf (Ch.40)', 'für', 'an'], answer: 0, ref: 'Ch.40 Verben mit Präpositionen' },
    { q: 'Welchen Fall braucht "teilnehmen an"?', options: ['Dativ', 'Akkusativ', 'Genitiv'], answer: 0, ref: 'Ch.40' },
    { q: 'Welche Präposition gehört zu "Interesse"?', options: ['an (Ch.41)', 'für', 'auf'], answer: 0, ref: 'Ch.41 Nomen mit Präpositionen' },
    { q: 'Welche Präposition gehört zu "Verantwortung"?', options: ['für (Ch.41)', 'auf', 'an'], answer: 0, ref: 'Ch.41' },
    { q: 'Welche Präposition gehört zu "stolz"?', options: ['auf (Ch.42)', 'an', 'für'], answer: 0, ref: 'Ch.42 Adjektive mit Präpositionen' },
    { q: 'Welche Präposition gehört zu "interessiert" (Adjektiv)?', options: ['an (Ch.42)', 'für', 'über'], answer: 0, ref: 'Ch.42' },
    { q: 'Was ist der Unterschied zwischen dem Verb "sich interessieren für" und dem Adjektiv "interessiert an"?', options: ['Unterschiedliche Präposition, gleiche Bedeutung', 'Kein Unterschied', 'Unterschiedliche Bedeutung'], answer: 0, ref: 'Ch.40/42' },
    { q: 'Welches Fragewort passt zu "denken an"?', options: ['Woran? (Ch.40)', 'Worauf?', 'Wofür?'], answer: 0, ref: 'Ch.40' },
    { q: 'Welches Fragewort passt zu "Einfluss auf"?', options: ['Worauf? (Ch.41)', 'Woran?', 'Womit?'], answer: 0, ref: 'Ch.41' },
    { q: 'Wo steht das Verb im "wer"-Satzteil?', options: ['Am Ende (Ch.39)', 'Direkt nach "wer"', 'Am Satzanfang'], answer: 0, ref: 'Ch.39' },
    { q: 'Welcher Satz ist korrekt?', options: ['Der Professor, dessen Universität modern ist, ...', 'Der Professor, der Universität modern ist, ...', 'Der Professor, deren Universität modern ist, ...'], answer: 0, ref: 'Ch.37' },
    { q: 'Welche Präposition gehört zu "abhängig"?', options: ['von (Ch.42)', 'auf', 'an'], answer: 0, ref: 'Ch.42' },
    { q: 'Was bedeutet "Teilnahme an" grammatisch?', options: ['Ein festes Nomen-Präposition-Paar (Ch.41)', 'Eine freie Kombination', 'Ein Adjektiv'], answer: 0, ref: 'Ch.41' }
  ],

  // ---------- Vocabulary Review: 35 mixed questions (representative set) ----------
  vocabularyReview: [
    { q: 'Was bedeutet "die Verantwortung"?', options: ['responsibility', 'question', 'mistake'], answer: 0, ref: 'Ch.41' },
    { q: 'Was bedeutet "abhängig"?', options: ['dependent', 'independent', 'proud'], answer: 0, ref: 'Ch.42' },
    { q: 'Was bedeutet "der Kunstraub"?', options: ['art theft', 'art gallery', 'artist'], answer: 0, ref: 'Ch.39/40' },
    { q: 'Was bedeutet "verdächtigen"?', options: ['to suspect', 'to celebrate', 'to forget'], answer: 0, ref: 'Ch.39' },
    { q: 'Was bedeutet "die Voraussetzung"?', options: ['prerequisite', 'result', 'question'], answer: 0, ref: 'Ch.41' },
    { q: 'Was bedeutet "das Kunstwerk"?', options: ['work of art', 'artist', 'gallery'], answer: 0, ref: 'Ch.42' },
    { q: 'Was bedeutet "der Kommissar"?', options: ['inspector', 'suspect', 'lawyer'], answer: 0, ref: 'Ch.40' },
    { q: 'Was bedeutet "die Erfahrung"?', options: ['experience', 'question', 'result'], answer: 0, ref: 'Ch.40' },
    { q: 'Was bedeutet "geeignet"?', options: ['suitable', 'guilty', 'famous'], answer: 0, ref: 'Ch.42' },
    { q: 'Was bedeutet "der Beitrag"?', options: ['contribution', 'question', 'mistake'], answer: 0, ref: 'Ch.41' }
  ],

  // ---------- Error Correction: 30 sentences (representative set of 10 shown, extendable) ----------
  errorCorrectionSet: [
    { wrong: 'Der Mann, sein Auto neu ist...', right: 'Der Mann, dessen Auto neu ist...', ref: 'Ch.37 dessen/deren' },
    { wrong: 'Die Frau, dessen Sohn Arzt ist...', right: 'Die Frau, deren Sohn Arzt ist...', ref: 'Ch.37' },
    { wrong: 'Der Professor, der sein Vortrag interessant war...', right: 'Der Professor, dessen Vortrag interessant war...', ref: 'Ch.37' },
    { wrong: 'Wer zu spät kommt, der bestraft das Leben.', right: 'Wer zu spät kommt, den bestraft das Leben.', ref: 'Ch.39 wer der' },
    { wrong: 'Ich interessiere Deutsch.', right: 'Ich interessiere mich für Deutsch.', ref: 'Ch.40 Verben mit Präpositionen' },
    { wrong: 'Ich warte den Bus.', right: 'Ich warte auf den Bus.', ref: 'Ch.40' },
    { wrong: 'Interesse für Deutsch.', right: 'Interesse an Deutsch.', ref: 'Ch.41 Nomen mit Präpositionen' },
    { wrong: 'Einfluss an die Umwelt.', right: 'Einfluss auf die Umwelt.', ref: 'Ch.41' },
    { wrong: 'Ich bin interessiert für Deutsch.', right: 'Ich bin interessiert an Deutsch.', ref: 'Ch.42 Adjektive mit Präpositionen' },
    { wrong: 'Sie ist stolz von ihrem Sohn.', right: 'Sie ist stolz auf ihren Sohn.', ref: 'Ch.42' }
  ],

  // ---------- Exercises (engine-required shape) ----------
  exercises: {
    mcq: {
      q: 'Welches Relativpronomen passt: "Der Mann, ___ Auto gestohlen wurde"?',
      options: ['dessen', 'deren', 'der'],
      answer: 0,
      explain: '"der Mann" is masculine, so "dessen" is correct — Ch.37.'
    },
    gap: {
      sentence: ['Rohan ist stolz ', ' seine Arbeit.'],
      gaps: [ { answer: 'auf', accepts: ['auf'] } ],
      explain: '"stolz" always requires "auf" + Akkusativ — Ch.42.'
    },
    match: {
      q: 'Match each structure to its chapter topic.',
      pairs: [
        { noun: 'dessen/deren', art: 'Genitiv relative pronoun (Ch.37)' },
        { noun: 'verschachtelt', art: 'Nested relative clauses (Ch.38)' },
        { noun: 'wer...der...', art: 'Indefinite relative clause (Ch.39)' },
        { noun: 'interessiert an', art: 'Adjective + fixed preposition (Ch.42)' }
      ]
    },
    builder: {
      target: 'Build: "The professor whose lecture was interesting works here."',
      bank: ['Der', 'Professor', ',', 'dessen', 'Vortrag', 'interessant', 'war', ',', 'arbeitet', 'hier', '.'],
      answer: ['Der', 'Professor', ',', 'dessen', 'Vortrag', 'interessant', 'war', ',', 'arbeitet', 'hier', '.'],
      roles: { 'dessen': 'r-checkpoint' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich bin interessiert für Deutsch.',
      right: 'Ich bin interessiert an Deutsch.',
      explain: 'The adjective "interessiert" always pairs with "an" + Dativ — Ch.42.'
    }
  },

  // ---------- Scoring table ----------
  scoring: {
    sections: [
      { name: 'Reading', points: 20 },
      { name: 'Listening', points: 20 },
      { name: 'Grammar', points: 50 },
      { name: 'Vocabulary', points: 35 },
      { name: 'Writing', points: 30 },
      { name: 'Speaking', points: 25 }
    ],
    total: 180,
    grades: [
      { range: '95–100%', label: 'Excellent' },
      { range: '85–94%', label: 'Very Good' },
      { range: '75–84%', label: 'Good' },
      { range: '65–74%', label: 'Pass' },
      { range: 'Below 65%', label: 'Review Phase 4' }
    ]
  },

  // ---------- AI Tutor recommendation rules ----------
  tutorRecommendations: [
    { weakArea: 'Weak Relative Clauses', recommend: 'Chapters 37–39' },
    { weakArea: 'Weak Verb-Preposition combinations', recommend: 'Chapter 40' },
    { weakArea: 'Weak Noun-Preposition combinations', recommend: 'Chapter 41' },
    { weakArea: 'Weak Adjective-Preposition combinations', recommend: 'Chapter 42' },
    { weakArea: 'Weak Reading of Long Sentences', recommend: 'Chapter 38' }
  ],

  // ---------- Quiz (checkpoint uses the grammar review as its graded quiz) ----------
  quiz: [
    { q: 'Welches Relativpronomen passt: "Der Mann, ___ Auto gestohlen wurde"?', options: ['dessen', 'deren', 'der'], answer: 0,
      explain: '"der Mann" is masculine, so "dessen" is the correct Genitiv relative pronoun — Ch.37.' },
    { q: 'Was bedeutet "verschachtelt"?', options: ['Ein Relativsatz im anderen', 'Zwei getrennte Sätze', 'Ein Nebensatz ohne Verb'], answer: 0,
      explain: 'Verschachtelte Relativsätze nest one relative clause inside another — Ch.38.' },
    { q: 'Warum steht "den" in "Wer zu spät kommt, den bestraft das Leben"?', options: ['"bestrafen" braucht Akkusativ', 'Es ist ein Fehler', 'Weil "wer" auch Akkusativ ist'], answer: 0,
      explain: 'The resuming pronoun takes whatever case the main clause verb requires — Ch.39.' },
    { q: 'Welche Präposition gehört zu "Verantwortung"?', options: ['für', 'auf', 'an'], answer: 0,
      explain: '"Verantwortung" always pairs with "für" + Akkusativ — Ch.41.' },
    { q: 'Welche Präposition gehört zu "stolz"?', options: ['auf', 'an', 'für'], answer: 0,
      explain: '"stolz" always pairs with "auf" + Akkusativ — Ch.42.' }
  ],

  takeaways: [
    { c: 'r-checkpoint', html: 'This checkpoint confirms mastery across all of Phase 4: complex relative clauses (Genitiv, nested, indefinite) and fixed verb/noun/adjective-preposition combinations.' },
    { c: 'r-checkpoint', html: 'Any weak area identified here maps directly to a specific chapter (37-42) to revisit before Phase 5.' },
    { c: 'r-checkpoint', html: 'Phase 5 builds directly on this foundation — a strong score here means a smoother path forward.' }
  ],
  revisionTips: [
    'Re-read the chapters flagged by your weakest scoring areas before moving to Phase 5.',
    'Redo the error-correction section without looking at the answer key first.',
    'Practise combining a Genitiv relative clause with at least two preposition combinations in a single paragraph.'
  ]
};

window.CHAPTER = CHAPTER;
