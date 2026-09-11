/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 2 · Chapter 26
   "Goethe Mini Test 2 (Checkpoint)" — NOT a teaching chapter.
   Second Goethe-style checkpoint covering Chapters 15-25. No new
   grammar or vocabulary is introduced; everything recycles
   obgleich / sodass-infolgedessen / indem / dadurch-dass /
   ohne...zu / (an)statt...zu / sowohl-als auch / weder-noch /
   nicht nur-sondern auch / einerseits-andererseits /
   Verbindungsadverbien already taught.
   IMPORTANT: dialogue/speaking uses ONLY Anna and Rohan.
============================================================ */
const CHAPTER = {
  id: 'b2-26-goethe-mini-test-2',
  phase: 'B2 · Phase 2',
  number: 26,
  title: 'Goethe Mini Test 2 (Checkpoint)',
  titleEn: 'Goethe Mini Test 2 (checkpoint)',
  description: 'Prove you\'ve mastered Chapters 15-25 — obgleich through Verbindungsadverbien — with a Goethe-style mock exam covering Reading, Listening, Grammar, Vocabulary, Writing, and Speaking.',
  xp: 460,
  time: 95,
  difficulty: 'Checkpoint',
  isCheckpoint: true,
  nextChapter: { number: 27, title: 'Tempus: Perfekt vs. Präteritum', titleEn: 'Tense: Perfekt vs. Präteritum (usage)' , href: 'chapter-b2-27-perfekt-vs-praeteritum.html' },

  heroAnimationPath: null,

  story: null,

  overviewIntro: {
    eyebrow: 'Checkpoint — not a teaching chapter',
    html: 'This is the second Goethe-style checkpoint of B2, covering Phase 2 (Chapters 15–25). No new grammar or vocabulary appears here — every question recycles <span class="de">obgleich</span>, <span class="de">sodass / infolgedessen</span>, <span class="de">indem</span>, <span class="de">dadurch, dass</span>, <span class="de">ohne ... zu</span>, <span class="de">(an)statt ... zu</span>, and the two-part connectors (<span class="de">sowohl...als auch</span>, <span class="de">weder...noch</span>, <span class="de">nicht nur...sondern auch</span>, <span class="de">einerseits...andererseits</span>) plus <span class="de">Verbindungsadverbien</span>. Roughly 70% Goethe B2 style, 30% Klarweg integration.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'This is a CHECKPOINT covering Chapters 15-25: Konzessivsätze (obgleich), Konsekutivsätze (sodass/infolgedessen), Modalsätze (indem, dadurch dass), Infinitivkonstruktionen (ohne...zu, (an)statt...zu), two-part connectors (sowohl...als auch, weder...noch, nicht nur...sondern auch, einerseits...andererseits), and Verbindungsadverbien (deshalb, folglich, trotzdem, etc.). Assess the learner\'s writing against ALL of these areas as relevant — do not expect anything beyond this scope (no Funktionsverbgefüge or later B2 topics). The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check verb-final word order in Nebensätze (obgleich, sodass, indem, dadurch dass), correct comma placement, same-subject rules for ohne/(an)statt...zu, correct pairing of two-part connectors, and Position-2 verb placement after Verbindungsadverbien.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why, tagging which chapter topic it relates to. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Checkpoint readiness:</b> one sentence on whether the learner is ready to move to Phase 3, or which chapter (15-25) to revisit.</p>\n' +
    'Keep it under 150 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you\'ve mastered Chapters 15-25. You\'re ready for Phase 3 of B2.',
    mid: 'Good work. Review the topics flagged below before moving to Phase 3.',
    low: 'This checkpoint shows real gaps. Revisit the recommended chapters before continuing — Phase 3 builds directly on this foundation.'
  },

  parserSentence: [
    { w: 'Obgleich', role: 'r-checkpoint' }, { w: 'es', role: 'plain' },
    { w: 'regnet', role: 'plain' }, { w: ',', plain: true }, { w: 'gehen', role: 'plain' }, { w: 'wir', role: 'plain' }, { w: 'spazieren', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'Understand the scope of this checkpoint: Chapters 15-25, no new content.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Complete two Goethe-style reading texts testing connectors, concession, and cohesion.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Complete two listening tasks — True/False, Multiple Choice, Matching, and Notes.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'Answer 20 mixed grammar questions spanning all of Chapters 15-25.' },
    { id: 'vocabulary', label: 'Vocabulary Review', tag: 'core',
      objective: 'Answer 10 vocabulary questions: connector meanings, register, synonyms, collocations.' },
    { id: 'exercises',  label: 'Error Correction', tag: 'practice',
      objective: 'Find and fix 10 errors spanning connector choice, word order, and infinitive constructions.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Complete four Goethe-style speaking tasks with examiner prompts and an evaluation checklist.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a formal email and a discussion essay using the full grammar range from Chapters 15-25.' },
    { id: 'quiz',       label: 'Scoring & Answer Key', tag: 'assess',
      objective: 'Review the complete answer key, scoring table, and your readiness for Phase 3.' },
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
      desc: 'Every question with the correct answer, a short explanation, and a grammar reference to Chapters 15-25.',
      pdfUrl: '/pdfs/answer-key.pdf', size: '16 pages', kind: 'Assessment' },
    { icon: '📖', title: 'Revision Guide PDF',
      desc: 'A one-page map of which chapters (15-25) to revisit based on common weak areas.',
      pdfUrl: '/pdfs/revision-guide.pdf', size: '2 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Chapters 15–25', text: 'Prove mastery of the entire Phase 2 grammar system' },
    { de: 'obgleich + sodass + indem + dadurch,dass + ohne...zu + Konnektoren', text: 'Combine multiple grammar topics simultaneously' },
    { de: 'Goethe B2 70% · Klarweg 30%', text: 'Experience real Goethe B2 exam-style difficulty' },
    { de: '170 points total', text: 'Score across Reading, Listening, Grammar, Vocabulary, Writing, and Speaking' },
    { de: 'Personalized recommendations', text: 'Know exactly which chapters to revisit if needed' }
  ],

  vocab: [],

  // ---------- Grammar overview (checkpoint scope reference) ----------
  grammar: [
    {
      title: 'Prüfungsumfang (Chapters 15–25)',
      body: [ 'This checkpoint tests everything from Chapters 15 through 25. No new grammar or vocabulary is introduced.' ],
      table: {
        head: ['Chapter', 'Topic'],
        rows: [
          ['15', 'Konzessivsätze: obgleich'],
          ['16', 'Konsekutivsätze: sodass / infolgedessen'],
          ['17', 'Modalsätze: indem'],
          ['18', 'Modalsätze: dadurch, dass'],
          ['19', 'ohne ... zu'],
          ['20', '(an)statt ... zu'],
          ['21', 'sowohl ... als auch'],
          ['22', 'weder ... noch'],
          ['23', 'nicht nur ... sondern auch'],
          ['24', 'einerseits ... andererseits'],
          ['25', 'Verbindungsadverbien']
        ]
      },
      hinglish: 'Yeh checkpoint Chapter 15 se 25 tak ka sab kuch test karta hai. Yahan koi naya grammar ya vocabulary nahi aata — sirf jo padha hai wahi check hota hai.'
    },
    {
      title: 'AI Tutor Empfehlungslogik',
      body: [ 'If your checkpoint results show a weak area, the AI Tutor recommends the specific chapter to revisit.' ],
      table: {
        head: ['Weak area', 'Recommended chapters'],
        rows: [
          ['Konzessivsätze (concession)', 'Chapter 15'],
          ['Konsekutivsätze (consequence)', 'Chapter 16'],
          ['Modalsätze (method)', 'Chapters 17–18'],
          ['Infinitivkonstruktionen', 'Chapters 19–20'],
          ['Zweiteilige Konnektoren', 'Chapters 21–24'],
          ['Verbindungsadverbien', 'Chapter 25']
        ]
      },
      hinglish: 'Agar checkpoint ke results mein koi weak area dikhta hai, to AI Tutor tumhe wahi chapter dobara dekhne ke liye recommend karta hai.'
    }
  ],

  // ---------- Reading: TWO Goethe-style texts ----------
  reading: {
    title: 'Lesetext A — Im Büro',
    titleEn: 'Reading A — At the office',
    tokens: [
      { w: 'Obgleich', role: 'r-checkpoint', en: 'although (formal)', hi: 'हालांकि (formal)', type: 'Konzessivkonjunktion (Ch.15)' },
      { w: 'das', role: 'plain', en: 'the (neut. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Projekt', role: 'plain', en: 'project', hi: 'परियोजना', type: 'Noun · neut.' },
      { w: 'kompliziert', role: 'plain', en: 'complicated (Satzende)', hi: 'जटिल (Satzende)', type: 'Adjective (Satzende)' },
      { w: 'war', role: 'plain', en: 'was (Satzende)', hi: 'था (Satzende)', type: 'Verb · sein (Präteritum, Satzende)' },
      { w: ',', plain: true },
      { w: 'schloss', role: 'plain', en: 'concluded', hi: 'समाप्त किया', type: 'Verb · schließen (Präteritum)' },
      { w: 'das', role: 'plain', en: 'the (neut. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Team', role: 'plain', en: 'team', hi: 'टीम', type: 'Noun · neut.' },
      { w: 'es', role: 'plain', en: 'it (Satzende)', hi: 'इसे (Satzende)', type: 'Pronoun · Akk. (Satzende)' },
      { w: 'pünktlich', role: 'plain', en: 'punctually (Satzende)', hi: 'समय पर (Satzende)', type: 'Adverb (Satzende)' },
      { w: 'ab', role: 'plain', en: '(separable prefix, Satzende)', hi: '(separable prefix, Satzende)', type: 'Trennbares Präfix (Satzende)' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'plain', en: 'they', hi: 'वे', type: 'Pronoun · Nom.' },
      { w: 'verbesserten', role: 'plain', en: 'improved', hi: 'सुधारे', type: 'Verb · verbessern (Präteritum)' },
      { w: 'die', role: 'plain', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Effizienz', role: 'plain', en: 'efficiency (Satzende)', hi: 'दक्षता (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: ',', plain: true },
      { w: 'indem', role: 'r-checkpoint', en: 'by, Wie? (Nebensatz)', hi: 'द्वारा, कैसे? (Nebensatz)', type: 'Modalkonjunktion (Ch.17)' },
      { w: 'sie', role: 'plain', en: 'they', hi: 'वे', type: 'Pronoun · Nom.' },
      { w: 'digitale', role: 'plain', en: 'digital', hi: 'डिजिटल', type: 'Adjective · stark · Akk.' },
      { w: 'Prozesse', role: 'plain', en: 'processes (Satzende)', hi: 'प्रक्रियाएं (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'nutzten', role: 'plain', en: 'used (Satzende)', hi: 'उपयोग किया (Satzende)', type: 'Verb · nutzen (Präteritum, Satzende)' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'plain', en: 'they', hi: 'वे', type: 'Pronoun · Nom.' },
      { w: 'erledigten', role: 'plain', en: 'completed', hi: 'पूरा किया', type: 'Verb · erledigen (Präteritum)' },
      { w: 'alles', role: 'plain', en: 'everything (Satzende)', hi: 'सब कुछ (Satzende)', type: 'Pronoun (Satzende)' },
      { w: ',', plain: true },
      { w: 'ohne', role: 'r-checkpoint', en: 'without (ohne...zu)', hi: 'बिना (ohne...zu)', type: 'Infinitivkonstruktion (Ch.19)' },
      { w: 'zusätzliche', role: 'plain', en: 'additional', hi: 'अतिरिक्त', type: 'Adjective · stark · Akk.' },
      { w: 'Kosten', role: 'plain', en: 'costs (Satzende)', hi: 'लागत (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'zu', role: 'plain', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'verursachen', role: 'plain', en: 'cause (Satzende)', hi: 'उत्पन्न करना (Satzende)', type: 'Verb · Infinitiv mit zu (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Although the project was complicated, the team concluded it punctually. They improved efficiency by using digital processes. They completed everything without causing additional costs.',
    comprehension: [
      { q: 'Was zeigt "Obgleich das Projekt kompliziert war"?', options: ['Eine Konzession (Ch.15)', 'Eine Konsequenz', 'Eine Methode'], answer: 0 },
      { q: 'Wie verbesserte das Team die Effizienz?', options: ['Indem sie digitale Prozesse nutzten (Ch.17)', 'Weil sie mehr Geld hatten', 'Ohne einen Plan'], answer: 0 },
      { q: 'Was zeigt "ohne zusätzliche Kosten zu verursachen"?', options: ['Eine fehlende Begleithandlung (Ch.19)', 'Eine Methode', 'Eine Konzession'], answer: 0 }
    ]
  },
  readingBArchive: {
    title: 'Lesetext B — Uni-Diskussion',
    titleEn: 'Reading B — University discussion',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Universität', role: 'plain', en: 'university', hi: 'विश्वविद्यालय', type: 'Noun · fem.' },
      { w: 'bietet', role: 'plain', en: 'offers', hi: 'प्रदान करता है', type: 'Verb · bieten' },
      { w: 'sowohl', role: 'r-checkpoint', en: 'both', hi: 'दोनों', type: 'Zweiteiliger Konnektor (Ch.21)' },
      { w: 'Online-Kurse', role: 'plain', en: 'online courses', hi: 'ऑनलाइन कोर्स', type: 'Noun · plural' },
      { w: 'als', role: 'r-checkpoint', en: 'as', hi: 'भी', type: 'Zweiteiliger Konnektor' },
      { w: 'auch', role: 'r-checkpoint', en: 'also', hi: 'भी', type: 'Zweiteiliger Konnektor' },
      { w: 'Präsenzveranstaltungen', role: 'plain', en: 'in-person events (Satzende)', hi: 'प्रत्यक्ष आयोजन (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'an', role: 'plain', en: '(Satzende)', hi: '(Satzende)', type: 'Preposition (Satzende)' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun · Nom.' },
      { w: 'verzichtet', role: 'plain', en: 'forgoes', hi: 'त्याग देता है', type: 'Verb · verzichten' },
      { w: 'weder', role: 'r-checkpoint', en: 'neither', hi: 'न तो', type: 'Zweiteiliger Konnektor (Ch.22)' },
      { w: 'auf', role: 'r-checkpoint', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'Qualität', role: 'plain', en: 'quality', hi: 'गुणवत्ता', type: 'Noun · fem.' },
      { w: 'noch', role: 'r-checkpoint', en: 'nor', hi: 'न ही', type: 'Zweiteiliger Konnektor' },
      { w: 'auf', role: 'r-checkpoint', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'Flexibilität', role: 'plain', en: 'flexibility (Satzende)', hi: 'लचीलापन (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Deshalb', role: 'r-checkpoint', en: 'that\'s why (Position 1, V2)', hi: 'इसीलिए (Position 1)', type: 'Verbindungsadverb (Ch.25)' },
      { w: 'wächst', role: 'plain', en: 'grows', hi: 'बढ़ती है', type: 'Verb · wachsen' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Studierendenzahl', role: 'plain', en: 'number of students (Satzende)', hi: 'छात्रों की संख्या (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'stetig', role: 'plain', en: 'steadily (Satzende)', hi: 'लगातार (Satzende)', type: 'Adverb (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The university offers both online courses and in-person events. It forgoes neither quality nor flexibility. That\'s why the number of students grows steadily.'
  },

  // ---------- Listening: TWO scripts ----------
  listening: {
    transcript: 'In der Teamsitzung erklärte die Leiterin, dass das Projekt trotzdem erfolgreich war, obgleich es viele Hindernisse gab. Sie verbesserten den Prozess, indem sie regelmäßig Feedback sammelten. Nicht nur die Effizienz stieg, sondern auch die Zufriedenheit der Mitarbeiter. Folglich plant das Team eine Erweiterung.',
    translation: 'In the team meeting, the manager explained that the project was successful nevertheless, although there were many obstacles. They improved the process by regularly collecting feedback. Not only did efficiency rise, but also employee satisfaction. Consequently, the team plans an expansion.',
    tokens: [
      { w: 'In' },
      { w: 'der' },
      { w: 'Teamsitzung' },
      { w: 'erklärte' },
      { w: 'die' },
      { w: 'Leiterin' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'das' },
      { w: 'Projekt' },
      { w: 'trotzdem' },
      { w: 'erfolgreich' },
      { w: 'war' },
      { w: ',', plain: true },
      { w: 'obgleich' },
      { w: 'es' },
      { w: 'viele' },
      { w: 'Hindernisse' },
      { w: 'gab' },
      { w: '.', plain: true },
      { w: 'Sie' },
      { w: 'verbesserten' },
      { w: 'den' },
      { w: 'Prozess' },
      { w: ',', plain: true },
      { w: 'indem' },
      { w: 'sie' },
      { w: 'regelmäßig' },
      { w: 'Feedback' },
      { w: 'sammelten' },
      { w: '.', plain: true },
      { w: 'Nicht' },
      { w: 'nur' },
      { w: 'die' },
      { w: 'Effizienz' },
      { w: 'stieg' },
      { w: ',', plain: true },
      { w: 'sondern' },
      { w: 'auch' },
      { w: 'die' },
      { w: 'Zufriedenheit' },
      { w: 'der' },
      { w: 'Mitarbeiter' },
      { w: '.', plain: true },
      { w: 'Folglich' },
      { w: 'plant' },
      { w: 'das' },
      { w: 'Team' },
      { w: 'eine' },
      { w: 'Erweiterung' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'War das Projekt erfolgreich?', options: ['Ja, trotzdem/obgleich es Hindernisse gab (Ch.15/25)', 'Nein, es scheiterte', 'Teilweise'], optionsEn: ['Yes, even though there were obstacles (Ch.15/25)', 'No, it failed', 'Partly'], answer: 0 },
      { q: 'Wie verbesserten sie den Prozess?', options: ['Indem sie Feedback sammelten (Ch.17)', 'Ohne einen Plan', 'Zufällig'], optionsEn: ['By collecting feedback (Ch.17)', 'without a plan', 'By chance'], answer: 0 },
      { q: 'Was stieg nicht nur, sondern auch?', options: ['Effizienz und Zufriedenheit (Ch.23)', 'Nur die Kosten', 'Nichts'], optionsEn: ['efficiency and satisfaction (Ch.23)', 'only the costs', 'nothing'], answer: 0 },
      { q: 'Was plant das Team folglich?', options: ['Eine Erweiterung (Ch.25)', 'Eine Kürzung', 'Nichts'], optionsEn: ['an extension (Ch.25)', 'a cut', 'nothing'], answer: 0 }
    ]
  },
  listeningBArchive: {
    transcript: 'Der Professor diskutierte, ob Studierende einerseits online lernen sollten, andererseits ob Präsenzunterricht wichtiger sei. Er sagte, dass man diese Frage nicht pauschalisieren dürfe. Dadurch, dass beide Formate Vorteile bieten, empfahl er eine Kombination.',
    translation: 'The professor discussed whether students should learn online on the one hand, or whether in-person teaching is more important on the other. He said one shouldn\'t generalize this question. Through the fact that both formats offer advantages, he recommended a combination.',
    questions: [
      { q: 'Was diskutierte der Professor?', options: ['Online vs. Präsenzunterricht (Ch.24)', 'Nur Online-Lernen', 'Nur Prüfungen'], answer: 0 },
      { q: 'Was empfahl er?', options: ['Eine Kombination, dadurch dass beide Vorteile bieten (Ch.18)', 'Nur Online', 'Nur Präsenz'], answer: 0 }
    ]
  },

  // ---------- Speaking (4 Goethe-style tasks, Anna/Rohan examiner prompts) ----------
  speaking: [
    { task: "Prüfung, Teil 1: Berichte, was die Leiterin über das Projekt sagte.", taskEn: "Exam, Part 1: report what the manager said about the project.", de: "Sie erklärte, das Projekt sei erfolgreich gewesen, obgleich es viele Hindernisse gab.", en: "She explained the project had been successful although there were many obstacles." },
    { task: "Prüfung, Teil 2: Sag, wie das Team den Prozess verbessert hat.", taskEn: "Exam, Part 2: say how the team improved the process.", de: "Sie verbesserten den Prozess, indem sie die Absprachen klarer machten.", en: "They improved the process by making the arrangements clearer." },
    { task: "Prüfung, Teil 3: Nenne einen Vorteil und einen Nachteil.", taskEn: "Exam, Part 3: name one advantage and one drawback.", de: "Einerseits sparen wir Zeit, andererseits fehlt der Austausch.", en: "On the one hand we save time, on the other the exchange is missing." },
    { task: "Prüfung, Teil 4: Zieh eine Konsequenz für die Zukunft.", taskEn: "Exam, Part 4: draw a conclusion for the future.", de: "Die Nachfrage steigt, folglich brauchen wir sowohl mehr Personal als auch mehr Räume.", en: "Demand is rising, consequently we need both more staff and more rooms." }
  ],
  speakingEvaluation: {
    checklist: [
      'Correct verb-final word order in obgleich/sodass/indem/dadurch-dass clauses (Ch.15–18)',
      'Correct same-subject rule for ohne...zu / (an)statt...zu (Ch.19–20)',
      'Correct pairing of two-part connectors — never combined with "und" or "oder" (Ch.21–24)',
      'Correct Position-2 verb placement after Verbindungsadverbien (Ch.25)',
      'Natural, non-forced use of at least four different connectors across the response',
      'Balanced, coherent argumentation appropriate to the topic'
    ]
  },

  // ---------- Writing (2 tasks) ----------
  writing: {
    prompt: 'TASK 1 — Formal email (90–110 words): Write to a colleague about a project update, using at least one concessive clause (obgleich), one consequence structure (sodass or a Verbindungsadverb), and one infinitive construction (ohne...zu or (an)statt...zu).\n\nTASK 2 — Discussion essay (110–130 words): Discuss a topic of your choice (Homeoffice, KI, Studium, Umweltschutz) using "einerseits...andererseits", at least one other two-part connector, and at least two different Verbindungsadverbien.',
    starters: ['Obgleich …, möchte ich …', 'Einerseits …, andererseits …'],
    placeholder: 'Obgleich das Projekt kompliziert war, konnten wir es pünktlich abschließen …',
    minWords: 90
  },

  // ---------- Grammar Review: 45 mixed questions (representative set) ----------
  grammarReview: [
    { q: 'Wo steht das Verb im obgleich-Satz? "Obgleich er krank ___, arbeitet er weiter."', options: ['ist (am Ende)', 'ist er', 'er ist'], answer: 0, ref: 'Ch.15 obgleich' },
    { q: 'Welcher Satz verwendet "sodass" korrekt?', options: ['Es regnete stark, sodass wir blieben.', 'Es regnete stark sodass wir blieben.', 'Sodass es regnete, blieben wir.'], answer: 0, ref: 'Ch.16 sodass' },
    { q: 'Wo steht das Verb nach "Infolgedessen"?', options: ['In Position 2', 'Am Ende', 'Es verschwindet'], answer: 0, ref: 'Ch.16 infolgedessen' },
    { q: 'Was drückt "indem" aus?', options: ['Methode (Wie?)', 'Grund (Warum?)', 'Zeit (Wann?)'], answer: 0, ref: 'Ch.17 indem' },
    { q: 'Wie viele Kommas braucht "dadurch, dass"?', options: ['Zwei', 'Eins', 'Keins'], answer: 0, ref: 'Ch.18 dadurch dass' },
    { q: 'Welche Regel gilt für "ohne ... zu"?', options: ['Gleiches Subjekt', 'Verschiedene Subjekte', 'Kein Subjekt nötig'], answer: 0, ref: 'Ch.19 ohne zu' },
    { q: 'Was bedeutet "(an)statt ... zu"?', options: ['Anstelle von etwas', 'Ohne etwas', 'Wegen etwas'], answer: 0, ref: 'Ch.20 anstatt zu' },
    { q: 'Welcher Satz nutzt "sowohl ... als auch" korrekt?', options: ['Sowohl Anna als auch Rohan kommen.', 'Sowohl Anna und Rohan kommen.', 'Sowohl Anna als Rohan kommt.'], answer: 0, ref: 'Ch.21 sowohl als auch' },
    { q: 'Womit muss "weder" gepaart werden?', options: ['noch', 'oder', 'und'], answer: 0, ref: 'Ch.22 weder noch' },
    { q: 'Was betont "nicht nur ... sondern auch"?', options: ['Das zweite Element', 'Das erste Element', 'Beide gleich'], answer: 0, ref: 'Ch.23 nicht nur sondern auch' },
    { q: 'Welche Wortstellung hat jeder Teil von "einerseits...andererseits"?', options: ['Normale V2-Wortstellung', 'Verb am Ende', 'Kein Verb'], answer: 0, ref: 'Ch.24 einerseits andererseits' },
    { q: 'Wo steht das Verb nach "Deshalb"?', options: ['Position 2', 'Am Ende', 'Position 1'], answer: 0, ref: 'Ch.25 Verbindungsadverbien' },
    { q: 'Welches Wort ist die formellste Variante von "deshalb"?', options: ['daher', 'deswegen', 'darum'], answer: 0, ref: 'Ch.25' },
    { q: 'Welcher Konnektor drückt starke Verneinung beider Elemente aus?', options: ['weder ... noch', 'sowohl ... als auch', 'einerseits ... andererseits'], answer: 0, ref: 'Ch.22' },
    { q: 'Welcher Satz zeigt korrekte "obgleich"-Wortstellung?', options: ['Obgleich es regnet, gehen wir spazieren.', 'Obgleich regnet es, gehen wir spazieren.', 'Obgleich es regnet gehen wir spazieren.'], answer: 0, ref: 'Ch.15' },
    { q: 'Was unterscheidet "indem" von "dadurch, dass"?', options: ['dadurch, dass ist formeller', 'Sie bedeuten das Gegenteil', 'indem ist formeller'], answer: 0, ref: 'Ch.17–18' },
    { q: 'Welcher Satz ist korrekt?', options: ['Anna lernt Deutsch, indem sie übt.', 'Anna lernt Deutsch, indem sie will üben.', 'Indem Anna lernt Deutsch.'], answer: 0, ref: 'Ch.17' },
    { q: 'Welches Beispiel zeigt "ohne...zu" korrekt?', options: ['Er ging, ohne etwas zu sagen.', 'Er ging, ohne Rohan etwas zu sagen.', 'Er ging ohne sagen etwas.'], answer: 0, ref: 'Ch.19' },
    { q: 'Was bedeutet "trotzdem"?', options: ['nevertheless', 'therefore', 'because'], answer: 0, ref: 'Ch.25' },
    { q: 'Welcher Satz zeigt "nicht nur...sondern auch" korrekt?', options: ['Nicht nur Anna, sondern auch Rohan kommt.', 'Nicht nur Anna und auch Rohan kommen.', 'Nicht nur Anna aber Rohan kommt.'], answer: 0, ref: 'Ch.23' }
  ],

  // ---------- Vocabulary Review: 30 mixed questions (representative set) ----------
  vocabularyReview: [
    { q: 'Was bedeutet "folglich"?', options: ['consequently', 'nevertheless', 'because'], answer: 0, ref: 'Ch.25' },
    { q: 'Welches Register hat "daher"?', options: ['Formell', 'Umgangssprachlich', 'Beides gleich'], answer: 0, ref: 'Ch.25' },
    { q: 'Was bedeutet "einwandfrei"?', options: ['flawless', 'broken', 'expensive'], answer: 0, ref: 'Ch.23' },
    { q: 'Welches Wort bedeutet "consequently, thus"?', options: ['somit', 'trotzdem', 'weil'], answer: 0, ref: 'Ch.25' },
    { q: 'Was bedeutet "bemerkenswert"?', options: ['remarkable', 'boring', 'small'], answer: 0, ref: 'Ch.23' },
    { q: 'Synonym für "deshalb"?', options: ['deswegen', 'trotzdem', 'obwohl'], answer: 0, ref: 'Ch.25' },
    { q: 'Was bedeutet "gefährdet"?', options: ['endangered', 'safe', 'happy'], answer: 0, ref: 'Ch.23' },
    { q: 'Was bedeutet "verzichten"?', options: ['to do without', 'to require', 'to celebrate'], answer: 0, ref: 'Ch.22' },
    { q: 'Was bedeutet "konkurrenzfähig"?', options: ['competitive', 'weak', 'expensive'], answer: 0, ref: 'Ch.18' },
    { q: 'Welches Wort bedeutet "consequently" (formal)?', options: ['folglich', 'aber', 'oder'], answer: 0, ref: 'Ch.25' }
  ],

  // ---------- Error Correction: 25 sentences (representative set of 10 shown, extendable) ----------
  errorCorrectionSet: [
    { wrong: 'Obgleich er ist krank...', right: 'Obgleich er krank ist...', ref: 'Ch.15 obgleich' },
    { wrong: 'Es regnete sodass wir blieben.', right: 'Es regnete, sodass wir blieben.', ref: 'Ch.16 sodass' },
    { wrong: 'Infolgedessen wir gingen nach Hause.', right: 'Infolgedessen gingen wir nach Hause.', ref: 'Ch.16 infolgedessen' },
    { wrong: 'Indem ich lerne Deutsch...', right: 'Indem ich Deutsch lerne...', ref: 'Ch.17 indem' },
    { wrong: 'Dadurch dass wir lernen Deutsch.', right: 'Dadurch, dass wir Deutsch lernen, ...', ref: 'Ch.18 dadurch dass' },
    { wrong: 'Anna geht, ohne Rohan etwas zu sagen.', right: 'Anna geht, ohne etwas zu sagen.', ref: 'Ch.19 ohne zu' },
    { wrong: 'Ich lerne Deutsch, statt ich fernsehe.', right: 'Ich lerne Deutsch, statt fernzusehen.', ref: 'Ch.20 anstatt zu' },
    { wrong: 'Sowohl Anna und Rohan kommen.', right: 'Sowohl Anna als auch Rohan kommen.', ref: 'Ch.21 sowohl als auch' },
    { wrong: 'Weder Anna und Rohan kommen.', right: 'Weder Anna noch Rohan kommt.', ref: 'Ch.22 weder noch' },
    { wrong: 'Deshalb wir gehen nach Hause.', right: 'Deshalb gehen wir nach Hause.', ref: 'Ch.25 Verbindungsadverbien' }
  ],

  // ---------- Exercises (checkpoint-appropriate, spans Ch.15-25) ----------
  exercises: {
    mcq: {
      q: 'Which sentence uses "obgleich" with correct word order?',
      options: ['Obgleich es regnet, gehen wir spazieren.', 'Obgleich regnet es, gehen wir spazieren.', 'Obgleich es regnet gehen wir spazieren.'],
      answer: 0,
      explain: 'The finite verb goes to the end of the obgleich-clause (Ch.15), and a comma separates the two clauses.'
    },
    gap: {
      sentence: ['Er hat viel geübt, ', ' er die Prüfung bestand.'],
      gaps: [ { answer: 'sodass', accepts: ['sodass'] } ],
      explain: '"sodass" introduces a consequence clause with the verb at the end (Ch.16).'
    },
    match: {
      q: 'Match each connector to its function (Ch.15-25).',
      pairs: [
        { noun: 'obgleich', art: 'concession' },
        { noun: 'sodass', art: 'consequence' },
        { noun: 'indem', art: 'method' },
        { noun: 'ohne ... zu', art: 'missing accompanying action' },
        { noun: 'einerseits ... andererseits', art: 'two contrasting viewpoints' },
        { noun: 'deshalb', art: 'conjunctive adverb (Position 1)' }
      ]
    },
    builder: {
      target: 'Build: "By collecting feedback regularly, the team improved efficiency."',
      bank: ['Indem', 'sie', 'regelmäßig', 'Feedback', 'sammelten', ',', 'verbesserten', 'sie', 'die', 'Effizienz', '.'],
      answer: ['Indem', 'sie', 'regelmäßig', 'Feedback', 'sammelten', ',', 'verbesserten', 'sie', 'die', 'Effizienz', '.'],
      roles: { 'Indem': 'r-checkpoint' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Obgleich er ist krank, arbeitet er weiter.',
      right: 'Obgleich er krank ist, arbeitet er weiter.',
      explain: 'The finite verb ("ist") must move to the end of the obgleich-clause (Ch.15).'
    }
  },

  // ---------- Scoring table ----------
  scoring: {
    sections: [
      { name: 'Reading', points: 20 },
      { name: 'Listening', points: 20 },
      { name: 'Grammar', points: 45 },
      { name: 'Vocabulary', points: 30 },
      { name: 'Writing', points: 30 },
      { name: 'Speaking', points: 25 }
    ],
    total: 170,
    grades: [
      { range: '90–100%', label: 'Excellent' },
      { range: '80–89%', label: 'Very Good' },
      { range: '70–79%', label: 'Good' },
      { range: '60–69%', label: 'Pass' },
      { range: 'Below 60%', label: 'Review Phase 2' }
    ]
  },

  // ---------- AI Tutor recommendation rules ----------
  tutorRecommendations: [
    { weakArea: 'Konzessivsätze (concession)', recommend: 'Chapter 15' },
    { weakArea: 'Konsekutivsätze (consequence)', recommend: 'Chapter 16' },
    { weakArea: 'Modalsätze (method)', recommend: 'Chapters 17–18' },
    { weakArea: 'Infinitivkonstruktionen', recommend: 'Chapters 19–20' },
    { weakArea: 'Zweiteilige Konnektoren', recommend: 'Chapters 21–24' },
    { weakArea: 'Verbindungsadverbien', recommend: 'Chapter 25' }
  ],

  // ---------- Quiz (checkpoint uses the grammar review as its graded quiz) ----------
  quiz: [
    { q: 'Wo steht das Verb im obgleich-Satz? "Obgleich er krank ___, arbeitet er weiter."', options: ['ist (am Ende)', 'ist er', 'er ist'], answer: 0,
      explain: 'The verb goes to the end of the obgleich-clause — Ch.15.' },
    { q: 'Welcher Satz verwendet "sodass" korrekt?', options: ['Es regnete stark, sodass wir blieben.', 'Es regnete stark sodass wir blieben.', 'Sodass es regnete, blieben wir.'], answer: 0,
      explain: 'A comma is required before "sodass" — Ch.16.' },
    { q: 'Was drückt "indem" aus?', options: ['Methode (Wie?)', 'Grund (Warum?)', 'Zeit (Wann?)'], answer: 0,
      explain: '"indem" always names the method — Ch.17.' },
    { q: 'Welche Regel gilt für "ohne ... zu"?', options: ['Gleiches Subjekt', 'Verschiedene Subjekte', 'Kein Subjekt nötig'], answer: 0,
      explain: '"ohne ... zu" requires the same subject in both clauses — Ch.19.' },
    { q: 'Wo steht das Verb nach "Deshalb"?', options: ['Position 2', 'Am Ende', 'Position 1'], answer: 0,
      explain: 'A Verbindungsadverb occupies Position 1; the verb follows immediately in Position 2 — Ch.25.' }
  ],

  takeaways: [
    { c: 'r-checkpoint', html: 'This checkpoint confirms mastery across all of Phase 2: concession, consequence, method, infinitive constructions, and the full family of two-part connectors and conjunctive adverbs.' },
    { c: 'r-checkpoint', html: 'Any weak area identified here maps directly to a specific chapter (15-25) to revisit before Phase 3.' },
    { c: 'r-checkpoint', html: 'Phase 3 builds directly on this foundation — a strong score here means a smoother path forward.' }
  ],
  revisionTips: [
    'Re-read the chapters flagged by your weakest scoring areas before moving to Phase 3.',
    'Redo the error-correction section without looking at the answer key first.',
    'Practise combining three or more connectors in a single paragraph to build natural fluency.'
  ]
};

window.CHAPTER = CHAPTER;
