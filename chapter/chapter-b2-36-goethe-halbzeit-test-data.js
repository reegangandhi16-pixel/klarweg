/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 3 → 4 · Chapter 36
   "Goethe Halbzeit-Test (Checkpoint)" — NOT a teaching chapter.
   B2 mid-course checkpoint covering Chapters 27-35. No new
   grammar/vocabulary; recycles Perfekt vs Präteritum,
   Tempuswechsel, Futur I für Vermutungen, Alternativen zum
   Futur, Konjunktiv II der Vergangenheit, Konjunktiv II für
   Vermutungen, Irreale Vergleiche, and Temporalsätze
   (während/seitdem, bevor/nachdem).
   IMPORTANT: speaking/role-play uses ONLY Anna and Rohan.
============================================================ */
const CHAPTER = {
  id: 'b2-36-goethe-halbzeit-test',
  phase: 'B2 · Phase 3 → 4',
  number: 36,
  title: 'Goethe Halbzeit-Test (Checkpoint)',
  titleEn: 'Goethe mid-course test (checkpoint)',
  description: 'Prove you\'ve mastered Chapters 27-35 — Perfekt vs Präteritum through Temporalsätze — with a Goethe-style mock exam before moving into Phase 4.',
  xp: 500,
  time: 100,
  difficulty: 'Checkpoint',
  isCheckpoint: true,
  nextChapter: { number: 37, title: 'Relativsätze im Genitiv (dessen / deren)', titleEn: 'Genitive relative clauses (dessen / deren)' , href: 'chapter-b2-37-relativsaetze-genitiv.html' },

  heroAnimationPath: null,

  story: null,

  overviewIntro: {
    eyebrow: 'Checkpoint — not a teaching chapter',
    html: 'This is the B2 mid-course checkpoint, covering Chapters 27–35 (Phase 3). No new grammar or vocabulary appears here — every question recycles <span class="de">Perfekt vs. Präteritum</span>, <span class="de">Tempuswechsel im Text</span>, <span class="de">Futur I für Vermutungen</span>, <span class="de">Alternativen zum Futur</span>, <span class="de">Konjunktiv II der Vergangenheit</span>, <span class="de">Konjunktiv II für Vermutungen</span>, <span class="de">Irreale Vergleiche (als ob)</span>, and <span class="de">Temporalsätze (während/seitdem, bevor/nachdem)</span>. Roughly 75% Goethe B2 style, 25% Klarweg integration.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'This is a CHECKPOINT covering Chapters 27-35: Perfekt vs Präteritum, Tempuswechsel im Text, Futur I für Vermutungen, Alternativen zum Futur (Präsens/wahrscheinlich/vermutlich/wohl), Konjunktiv II der Vergangenheit (hätte/wäre), Konjunktiv II für Vermutungen (dürfte/könnte), Irreale Vergleiche (als ob/als wenn/als+KII), and Temporalsätze (während/seitdem, bevor/nachdem). Assess the learner\'s writing against ALL of these areas as relevant — do not expect anything beyond this scope. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check tense choice (spoken Perfekt vs written Präteritum), correct hätte/wäre selection, correct dürfte/könnte certainty level, als ob/als wenn word order (verb at end) vs the shortened als+KII (verb right after als), and bevor/nachdem sequencing with correct tense pairing.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why, tagging which chapter topic it relates to. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Checkpoint readiness:</b> one sentence on whether the learner is ready to move to Phase 4, or which chapter (27-35) to revisit.</p>\n' +
    'Keep it under 150 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you\'ve mastered Chapters 27-35. You\'re ready for Phase 4 of B2.',
    mid: 'Good work. Review the topics flagged below before moving to Phase 4.',
    low: 'This checkpoint shows real gaps. Revisit the recommended chapters before continuing — Phase 4 builds directly on this foundation.'
  },

  parserSentence: [
    { w: 'Nachdem', role: 'r-checkpoint' }, { w: 'ich', role: 'plain' },
    { w: 'gearbeitet', role: 'plain' }, { w: 'hatte', role: 'plain' }, { w: ',', plain: true }, { w: 'wäre', role: 'r-checkpoint' }, { w: 'ich', role: 'plain' }, { w: 'gern', role: 'plain' }, { w: 'gegangen', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'Understand the scope of this checkpoint: Chapters 27-35, no new content.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Complete two Goethe-style reading texts testing tense choice, assumptions, and connectors.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Complete two listening tasks — Multiple Choice, True/False, Note Completion, and Timeline ordering.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'Answer 20 mixed grammar questions spanning all of Chapters 27-35.' },
    { id: 'vocabulary', label: 'Vocabulary Review', tag: 'core',
      objective: 'Answer 10 vocabulary questions: register, formal vs spoken, synonyms, collocations.' },
    { id: 'exercises',  label: 'Error Correction', tag: 'practice',
      objective: 'Find and fix 10 errors spanning tense, word order, connectors, and Konjunktiv II.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Complete four Goethe-style speaking tasks with examiner prompts and an evaluation rubric.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a formal complaint email and a discussion essay using the full Phase 3 grammar range.' },
    { id: 'quiz',       label: 'Scoring & Answer Key', tag: 'assess',
      objective: 'Review the complete answer key, scoring table, and your readiness for Phase 4.' },
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
      desc: 'Every question with the correct answer, a short explanation, and a grammar reference to Chapters 27-35.',
      pdfUrl: '/pdfs/answer-key.pdf', size: '18 pages', kind: 'Assessment' },
    { icon: '📖', title: 'Revision Guide PDF',
      desc: 'A one-page map of which chapters (27-35) to revisit based on common weak areas.',
      pdfUrl: '/pdfs/revision-guide.pdf', size: '2 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Chapters 27–35', text: 'Prove mastery of the entire Phase 3 grammar system' },
    { de: 'Tempuswechsel + Futur-Vermutungen + Konjunktiv II + Temporalsätze', text: 'Combine multiple grammar topics simultaneously' },
    { de: 'Goethe B2 75% · Klarweg 25%', text: 'Experience real Goethe B2 exam-style difficulty' },
    { de: '180 points total', text: 'Score across Reading, Listening, Grammar, Vocabulary, Writing, and Speaking' },
    { de: 'Personalized recommendations', text: 'Know exactly which chapters to revisit if needed' }
  ],

  vocab: [],

  // ---------- Grammar overview (checkpoint scope reference) ----------
  grammar: [
    {
      title: 'Prüfungsumfang (Chapters 27–35)',
      body: [ 'This checkpoint tests everything from Chapters 27 through 35. No new grammar or vocabulary is introduced.' ],
      table: {
        head: ['Chapter', 'Topic'],
        rows: [
          ['27', 'Perfekt vs. Präteritum'],
          ['28', 'Tempuswechsel im Text'],
          ['29', 'Futur I für Vermutungen'],
          ['30', 'Alternativen zum Futur'],
          ['31', 'Konjunktiv II der Vergangenheit'],
          ['32', 'Konjunktiv II für Vermutungen'],
          ['33', 'Irreale Vergleiche: als ob'],
          ['34', 'Temporalsätze: während / seitdem'],
          ['35', 'Temporalsätze: bevor / nachdem']
        ]
      },
      hinglish: 'Yeh checkpoint Chapter 27 se 35 tak ka sab kuch test karta hai. Yahan koi naya grammar ya vocabulary nahi aata — sirf jo padha hai wahi check hota hai.'
    },
    {
      title: 'AI Tutor Empfehlungslogik',
      body: [ 'If your checkpoint results show a weak area, the AI Tutor recommends the specific chapter to revisit.' ],
      table: {
        head: ['Weak area', 'Recommended chapters'],
        rows: [
          ['Tense choice (Perfekt/Präteritum, Tempuswechsel)', 'Chapters 27–28'],
          ['Assumptions (Futur/dürfte/könnte)', 'Chapters 29–32'],
          ['Unreal comparisons (als ob)', 'Chapter 33'],
          ['Temporal clauses (während/seitdem, bevor/nachdem)', 'Chapters 34–35'],
          ['Narration and tense-switching', 'Chapter 28']
        ]
      },
      hinglish: 'Agar checkpoint ke results mein koi weak area dikhta hai, to AI Tutor tumhe wahi chapter dobara dekhne ke liye recommend karta hai.'
    }
  ],

  // ---------- Reading: TWO Goethe-style texts ----------
  reading: {
    title: 'Lesetext A — Veränderte Arbeitsgewohnheiten',
    titleEn: 'Reading A — Changing working habits',
    tokens: [
      { w: 'In', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (plural dat.)', hi: 'ये', type: 'Article · Dat.' },
      { w: 'letzten', role: 'plain', en: 'last', hi: 'पिछले', type: 'Adjective · Dat.' },
      { w: 'Jahren', role: 'plain', en: 'years', hi: 'साल', type: 'Noun · plural' },
      { w: 'veränderte', role: 'plain', en: 'changed (written narration, Präteritum)', hi: 'बदल गया (written narration, Präteritum)', type: 'Verb · verändern (Präteritum)', why: 'veränderte: written journalism defaults to Präteritum as its base narration tense (Ch.27).' },
      { w: 'sich', role: 'plain', en: 'itself', hi: '(reflexive)', type: 'Reflexivpronomen' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Arbeitswelt', role: 'plain', en: 'working world (Satzende)', hi: 'कार्यजगत (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'stark', role: 'plain', en: 'strongly (Satzende)', hi: 'दृढ़ता से (Satzende)', type: 'Adverb (Satzende)' },
      { w: '.', plain: true },
      { w: 'Während', role: 'r-checkpoint', en: 'while (simultaneous actions)', hi: 'जबकि (एक साथ की क्रियाएं)', type: 'Konjunktion · während (Ch.34)' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Pronoun · Nom.' },
      { w: 'Angestellte', role: 'plain', en: 'employees', hi: 'कर्मचारी', type: 'Noun · plural' },
      { w: 'von', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'zu', role: 'plain', en: 'at', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'Hause', role: 'plain', en: 'home', hi: 'घर', type: 'Noun · neut.' },
      { w: 'arbeiteten', role: 'plain', en: 'worked (Satzende)', hi: 'काम करते थे (Satzende)', type: 'Verb · arbeiten (Präteritum, Satzende)' },
      { w: ',', plain: true },
      { w: 'kehrten', role: 'plain', en: 'returned', hi: 'लौटे', type: 'Verb · zurückkehren (Präteritum)' },
      { w: 'andere', role: 'plain', en: 'others', hi: 'अन्य', type: 'Pronoun · Nom.' },
      { w: 'ins', role: 'plain', en: 'to the (Kontraktion)', hi: '', type: 'Präposition (Kontraktion)' },
      { w: 'Büro', role: 'plain', en: 'office (Satzende)', hi: 'ऑफिस (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'zurück', role: 'plain', en: 'back (Satzende)', hi: 'वापस (Satzende)', type: 'Trennbares Präfix (Satzende)' },
      { w: '.', plain: true },
      { w: 'Nachdem', role: 'r-checkpoint', en: 'after (earlier action stated first)', hi: 'के बाद (पहले की क्रिया)', type: 'Konjunktion · nachdem (Ch.35)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Pandemie', role: 'plain', en: 'pandemic', hi: 'महामारी', type: 'Noun · fem.' },
      { w: 'abgeklungen', role: 'plain', en: 'subsided', hi: 'कम हुई', type: 'Verb · abklingen (Partizip II)' },
      { w: 'war', role: 'plain', en: 'was (Satzende, Plusquamperfekt)', hi: 'थी (Satzende, Plusquamperfekt)', type: 'Verb · sein (Präteritum, Satzende)' },
      { w: ',', plain: true },
      { w: 'dürfte', role: 'r-checkpoint', en: 'is very likely to (high probability)', hi: 'शायद निश्चित रूप से', type: 'Modalverb · dürfen (Konjunktiv II, Ch.32)' },
      { w: 'sich', role: 'plain', en: 'itself', hi: '(reflexive)', type: 'Reflexivpronomen' },
      { w: 'ein', role: 'plain', en: 'a (neut. nom.)', hi: 'एक', type: 'Article' },
      { w: 'hybrides', role: 'plain', en: 'hybrid', hi: 'मिश्रित', type: 'Adjective · stark · Nom.' },
      { w: 'Modell', role: 'plain', en: 'model (Satzende)', hi: 'मॉडल (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'durchgesetzt', role: 'plain', en: 'established itself', hi: 'स्थापित हुआ', type: 'Verb · durchsetzen (Partizip II)' },
      { w: 'haben', role: 'plain', en: 'have (Satzende)', hi: 'है (Satzende)', type: 'Verb · haben (Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'In recent years, the working world changed strongly. While many employees worked from home, others returned to the office. After the pandemic had subsided, a hybrid model is very likely to have established itself.',
    comprehension: [
      { q: 'Welche Zeitform dominiert die Erzählung?', options: ['Präteritum (Ch.27)', 'Perfekt', 'Präsens'], answer: 0 },
      { q: 'Was zeigt "Während viele... arbeiteten, kehrten andere zurück"?', options: ['Gleichzeitige Handlungen (Ch.34)', 'Eine Vermutung', 'Eine Bedingung'], answer: 0 },
      { q: 'Was zeigt "dürfte...durchgesetzt haben"?', options: ['Eine sehr wahrscheinliche Vermutung (Ch.32)', 'Eine Tatsache', 'Eine Frage'], answer: 0 }
    ]
  },
  readingBArchive: {
    title: 'Lesetext B — Ein Auslandssemester',
    titleEn: 'Reading B — A semester abroad',
    tokens: [
      { w: 'Anna', role: 'plain', en: 'Anna', hi: 'आना', type: 'Eigenname · Nom.' },
      { w: 'lebt', role: 'r-checkpoint', en: 'lives (Präsens, now)', hi: 'रहती है (Präsens, अभी)', type: 'Verb · leben (Präsens)', why: 'lebt: Präsens for the current situation, part of natural Tempuswechsel (Ch.28).' },
      { w: 'seitdem', role: 'r-checkpoint', en: 'since (past → present continuation)', hi: 'तब से (भूतकाल → वर्तमान)', type: 'Konjunktion · seitdem (Ch.34)' },
      { w: 'einem', role: 'plain', en: 'a (neut. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'Jahr', role: 'plain', en: 'year', hi: 'साल', type: 'Noun · neut.' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'Berlin', role: 'plain', en: 'Berlin (Satzende)', hi: 'बर्लिन (Satzende)', type: 'Noun · Eigenname (Satzende)' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun · Nom.' },
      { w: 'spricht', role: 'plain', en: 'speaks', hi: 'बोलती है', type: 'Verb · sprechen (Präsens)' },
      { w: 'Deutsch', role: 'plain', en: 'German', hi: 'जर्मन', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'als', role: 'r-checkpoint', en: 'as if (unreal comparison)', hi: 'मानो (अवास्तविक तुलना)', type: 'Konjunktion · als ob (Ch.33)' },
      { w: 'ob', role: 'r-checkpoint', en: '(part of als ob)', hi: '(als ob का हिस्सा)', type: 'Konjunktion' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun · Nom.' },
      { w: 'Muttersprachlerin', role: 'plain', en: 'native speaker (Satzende)', hi: 'मातृभाषी (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'wäre', role: 'r-checkpoint', en: 'were (Konjunktiv II, Satzende)', hi: 'हो (Konjunktiv II, Satzende)', type: 'Verb · sein (Konjunktiv II, Satzende)' },
      { w: '.', plain: true },
      { w: 'Rückblickend', role: 'plain', en: 'in retrospect', hi: 'पीछे मुड़कर देखने पर', type: 'Adverb' },
      { w: 'hätte', role: 'r-checkpoint', en: 'should have (Konjunktiv II Vergangenheit)', hi: 'चाहिए था (Konjunktiv II Vergangenheit, Ch.31)', type: 'Verb · haben (Konjunktiv II)' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun · Nom.' },
      { w: 'früher', role: 'plain', en: 'earlier', hi: 'पहले', type: 'Adverb' },
      { w: 'gehen', role: 'plain', en: 'go (Infinitiv)', hi: 'जाना (Infinitiv)', type: 'Verb · gehen (Infinitiv)' },
      { w: 'sollen', role: 'r-checkpoint', en: 'should have (Satzende)', hi: 'चाहिए था (Satzende)', type: 'Modalverb (Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Anna has been living in Berlin for a year. She speaks German as if she were a native speaker. In retrospect, she should have gone earlier.'
  },

  // ---------- Listening: TWO scripts ----------
  listening: {
    transcript: 'In der Firmensitzung erklärte die Managerin, dass sich die Arbeitszeiten wahrscheinlich ändern würden. Seitdem das neue System eingeführt wurde, arbeiten viele Mitarbeiter flexibler. Bevor die Entscheidung getroffen wurde, hatte das Team monatelang diskutiert. Es klingt, als wäre die Umstellung erfolgreich gewesen.',
    translation: 'In the company meeting, the manager explained that working hours would probably change. Since the new system was introduced, many employees work more flexibly. Before the decision was made, the team had discussed it for months. It sounds as if the transition had been successful.',
    tokens: [
      { w: 'In' },
      { w: 'der' },
      { w: 'Firmensitzung' },
      { w: 'erklärte' },
      { w: 'die' },
      { w: 'Managerin' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'sich' },
      { w: 'die' },
      { w: 'Arbeitszeiten' },
      { w: 'wahrscheinlich' },
      { w: 'ändern' },
      { w: 'würden' },
      { w: '.', plain: true },
      { w: 'Seitdem' },
      { w: 'das' },
      { w: 'neue' },
      { w: 'System' },
      { w: 'eingeführt' },
      { w: 'wurde' },
      { w: ',', plain: true },
      { w: 'arbeiten' },
      { w: 'viele' },
      { w: 'Mitarbeiter' },
      { w: 'flexibler' },
      { w: '.', plain: true },
      { w: 'Bevor' },
      { w: 'die' },
      { w: 'Entscheidung' },
      { w: 'getroffen' },
      { w: 'wurde' },
      { w: ',', plain: true },
      { w: 'hatte' },
      { w: 'das' },
      { w: 'Team' },
      { w: 'monatelang' },
      { w: 'diskutiert' },
      { w: '.', plain: true },
      { w: 'Es' },
      { w: 'klingt' },
      { w: ',', plain: true },
      { w: 'als' },
      { w: 'wäre' },
      { w: 'die' },
      { w: 'Umstellung' },
      { w: 'erfolgreich' },
      { w: 'gewesen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was erklärte die Managerin?', options: ['Dass sich die Arbeitszeiten wahrscheinlich ändern (Ch.30)', 'Dass nichts sich ändert', 'Dass alle kündigen'], optionsEn: ['That the working hours will probably change (Ch.30)', 'That nothing changes', 'That everyone resigns'], answer: 0 },
      { q: 'Was geschah, bevor die Entscheidung getroffen wurde?', options: ['Monatelange Diskussion (Ch.35)', 'Nichts', 'Eine Abstimmung sofort'], optionsEn: ['Months of discussion (Ch.35)', 'nothing', 'a vote right away'], answer: 0 },
      { q: 'Was zeigt "Es klingt, als wäre..."?', options: ['Einen unrealen Vergleich (Ch.33)', 'Eine Tatsache', 'Eine Frage'], optionsEn: ['an unreal comparison (Ch.33)', 'a fact', 'a question'], answer: 0 }
    ]
  },
  listeningBArchive: {
    transcript: 'Der Professor präsentierte, während die Studenten Notizen machten. Nachdem die Präsentation beendet war, stellten viele Fragen. Er dürfte die Antworten schon vorbereitet haben, weil er so schnell reagierte.',
    translation: 'The professor presented while the students took notes. After the presentation had ended, many asked questions. He\'s very likely to have already prepared the answers, because he reacted so quickly.',
    questions: [
      { q: 'Was passierte während der Präsentation?', options: ['Studenten machten Notizen (Ch.34)', 'Alle schliefen', 'Niemand war da'], answer: 0 },
      { q: 'Was zeigt "dürfte...vorbereitet haben"?', options: ['Eine sehr wahrscheinliche Vermutung (Ch.32)', 'Eine Erlaubnis', 'Eine Fähigkeit'], answer: 0 }
    ]
  },

  // ---------- Speaking (4 Goethe-style tasks, Anna/Rohan examiner prompts) ----------
  speaking: [
    { task: "Prüfung, Teil 1: Berichte, was die Managerin über die Arbeitszeiten sagte.", taskEn: "Exam, Part 1: report what the manager said about working hours.", de: "Sie erklärte, die Arbeitszeiten würden sich wahrscheinlich ändern.", en: "She explained that working hours would probably change." },
    { task: "Prüfung, Teil 2: Sag, was sich seit dem neuen System geändert hat.", taskEn: "Exam, Part 2: say what has changed since the new system.", de: "Seitdem das System eingeführt wurde, arbeiten wir flexibler.", en: "Since the system was introduced, we work more flexibly." },
    { task: "Prüfung, Teil 3: Sprich über eine Entscheidung, die du bedauerst.", taskEn: "Exam, Part 3: talk about a decision you regret.", de: "Ich hätte früher nachfragen sollen, dann wäre der Fehler nicht passiert.", en: "I should have asked earlier, then the error wouldn't have happened." },
    { task: "Prüfung, Teil 4: Äußere eine vorsichtige Vermutung über die Zukunft.", taskEn: "Exam, Part 4: make a cautious guess about the future.", de: "Die Umstellung dürfte gelingen, sie könnte aber länger dauern.", en: "The changeover is likely to succeed, but it could take longer." }
  ],
  speakingEvaluation: {
    checklist: [
      'Correct tense choice — spoken Perfekt vs. written Präteritum, with natural Tempuswechsel (Ch.27–28)',
      'Correct dürfte/könnte selection by certainty level (Ch.29–32)',
      'Correct hätte/wäre selection for regrets and missed opportunities (Ch.31)',
      'Correct als ob/als wenn word order (verb at end) vs. shortened als+KII (verb after als) (Ch.33)',
      'Correct während/seitdem/bevor/nachdem sequencing with appropriate tense pairing (Ch.34–35)',
      'Natural, non-forced use of at least four different Phase 3 structures across the response'
    ]
  },

  // ---------- Writing (2 tasks) ----------
  writing: {
    prompt: 'TASK 1 — Formal complaint email (90–110 words): Write about a delayed delivery or service issue, using Perfekt/Präteritum appropriately, at least one Konjunktiv II der Vergangenheit structure (hätte...sollen/können), and one temporal clause (nachdem or bevor).\n\nTASK 2 — Discussion essay (110–130 words): Should companies continue Homeoffice? Use tense variation, at least one assumption (dürfte/könnte or wahrscheinlich/vermutlich), one unreal comparison (als ob), and one temporal clause (während or seitdem).',
    starters: ['Nachdem ich …, hätte ich …', 'Während viele Firmen …, entscheiden sich andere …'],
    placeholder: 'Sehr geehrte Damen und Herren, nachdem ich das Produkt bestellt hatte, …',
    minWords: 90
  },

  // ---------- Grammar Review: 50 mixed questions (representative set) ----------
  grammarReview: [
    { q: 'Welche Zeitform ist typisch für Zeitungsberichte?', options: ['Präteritum', 'Perfekt', 'Präsens'], answer: 0, ref: 'Ch.27 Perfekt vs Präteritum' },
    { q: 'Welche Verben bleiben oft im Präteritum, auch beim Sprechen?', options: ['sein, haben, Modalverben', 'trennbare Verben', 'Reflexivverben'], answer: 0, ref: 'Ch.27' },
    { q: 'Wann wechselt ein Text natürlich die Zeitform?', options: ['Wenn sich der Kontext ändert', 'Nie', 'Nur am Satzanfang'], answer: 0, ref: 'Ch.28 Tempuswechsel' },
    { q: 'Was bedeutet "Er wird jetzt zu Hause sein"?', options: ['Eine Vermutung über die Gegenwart', 'Ein echter Zukunftsplan', 'Ein Befehl'], answer: 0, ref: 'Ch.29 Futur I Vermutungen' },
    { q: 'Welches Zeitwort zeigt, dass "wird" eine echte Zukunft ist?', options: ['morgen', 'jetzt', 'gerade'], answer: 0, ref: 'Ch.29' },
    { q: 'Was bevorzugen Muttersprachler statt Futur I?', options: ['Präsens + Zeitwort', 'Konjunktiv I', 'Passiv'], answer: 0, ref: 'Ch.30 Alternativen zum Futur' },
    { q: 'Welches Wort ist formeller: wahrscheinlich oder vermutlich?', options: ['vermutlich', 'wahrscheinlich', 'gleich formell'], answer: 0, ref: 'Ch.30' },
    { q: 'Welche Struktur zeigt Bedauern über die Vergangenheit?', options: ['hätte + Partizip II', 'wird + Infinitiv', 'würde + Infinitiv'], answer: 0, ref: 'Ch.31 Konjunktiv II Vergangenheit' },
    { q: 'Welches Hilfsverb nutzen Bewegungsverben im Konjunktiv II Vergangenheit?', options: ['wäre', 'hätte', 'würde'], answer: 0, ref: 'Ch.31' },
    { q: 'Was drückt "dürfte" aus?', options: ['Sehr hohe Wahrscheinlichkeit', 'Erlaubnis', 'Fähigkeit'], answer: 0, ref: 'Ch.32 Konjunktiv II Vermutungen' },
    { q: 'Was drückt "könnte" aus?', options: ['Eine mögliche, aber unsichere Vermutung', 'Eine Tatsache', 'Eine Erlaubnis'], answer: 0, ref: 'Ch.32' },
    { q: 'Wo steht das Verb bei "als ob"?', options: ['Am Ende', 'Direkt nach "als"', 'Am Satzanfang'], answer: 0, ref: 'Ch.33 als ob' },
    { q: 'Wo steht das Verb bei der verkürzten Form "als + Konjunktiv II"?', options: ['Direkt nach "als"', 'Am Ende', 'Es verschwindet'], answer: 0, ref: 'Ch.33' },
    { q: 'Was bedeutet "während"?', options: ['Gleichzeitige Handlungen', 'Vorher', 'Nachher'], answer: 0, ref: 'Ch.34 Temporalsätze' },
    { q: 'Was bedeutet "seitdem"?', options: ['Von der Vergangenheit bis jetzt', 'Gleichzeitig', 'Danach'], answer: 0, ref: 'Ch.34' },
    { q: 'Welche Handlung nennt "bevor"?', options: ['Die spätere Handlung', 'Die frühere Handlung', 'Beide gleichzeitig'], answer: 0, ref: 'Ch.35 bevor nachdem' },
    { q: 'Welche Handlung nennt "nachdem"?', options: ['Die frühere, abgeschlossene Handlung', 'Die spätere Handlung', 'Keine'], answer: 0, ref: 'Ch.35' },
    { q: 'Welche Zeitform steht typischerweise nach "nachdem"?', options: ['Plusquamperfekt', 'Präsens', 'Futur II'], answer: 0, ref: 'Ch.35' },
    { q: 'Welcher Satz zeigt korrekten Tempuswechsel?', options: ['Ich schaue gerade... Gestern habe ich...', 'Ich schaue gerade... Gestern schaue ich...', 'Ich habe gerade... Gestern schaue ich...'], answer: 0, ref: 'Ch.28' },
    { q: 'Welcher Satz ist grammatisch korrekt?', options: ['Nachdem ich gegessen hatte, ging ich schlafen.', 'Nachdem ich esse, ging ich schlafen.', 'Nachdem ich gegessen habe, ging ich schlief.'], answer: 0, ref: 'Ch.35' }
  ],

  // ---------- Vocabulary Review: 35 mixed questions (representative set) ----------
  vocabularyReview: [
    { q: 'Was bedeutet "stressig"?', options: ['stressful', 'calm', 'expensive'], answer: 0, ref: 'Ch.33' },
    { q: 'Welches Register hat "vermutlich"?', options: ['Etwas formeller als wahrscheinlich', 'Nur umgangssprachlich', 'Nur Dialekt'], answer: 0, ref: 'Ch.30' },
    { q: 'Was bedeutet "die Verspätung"?', options: ['delay', 'arrival', 'departure'], answer: 0, ref: 'Ch.30' },
    { q: 'Was bedeutet "dankbar"?', options: ['grateful', 'angry', 'tired'], answer: 0, ref: 'Ch.31' },
    { q: 'Was bedeutet "ehrgeizig"?', options: ['ambitious', 'lazy', 'shy'], answer: 0, ref: 'Ch.31' },
    { q: 'Was bedeutet "die Erkenntnis"?', options: ['insight', 'mistake', 'question'], answer: 0, ref: 'Ch.31' },
    { q: 'Was bedeutet "beruhigend"?', options: ['reassuring', 'annoying', 'expensive'], answer: 0, ref: 'Ch.33' },
    { q: 'Was bedeutet "die Wahrnehmung"?', options: ['perception', 'decision', 'question'], answer: 0, ref: 'Ch.33' },
    { q: 'Was bedeutet "die Verzweiflung"?', options: ['despair', 'joy', 'calm'], answer: 0, ref: 'Ch.33' },
    { q: 'Was bedeutet "der Schriftsteller"?', options: ['writer', 'reader', 'listener'], answer: 0, ref: 'Ch.35' }
  ],

  // ---------- Error Correction: 30 sentences (representative set of 10 shown, extendable) ----------
  errorCorrectionSet: [
    { wrong: 'Ich arbeitete gestern mit meinem Freund. (in spoken conversation)', right: 'Ich habe gestern mit meinem Freund gearbeitet.', ref: 'Ch.27 Perfekt vs Präteritum' },
    { wrong: 'Ich schaue gerade... Gestern schaue ich...', right: 'Ich schaue gerade... Gestern habe ich geschaut...', ref: 'Ch.28 Tempuswechsel' },
    { wrong: 'Er dürfte morgen fahren. (intending real future)', right: 'Er fährt morgen. (or) Er wird morgen fahren.', ref: 'Ch.29/32' },
    { wrong: 'Morgen werde ich einkaufen gehen. (unnatural spoken register)', right: 'Morgen gehe ich einkaufen.', ref: 'Ch.30 Alternativen zum Futur' },
    { wrong: 'Ich hätte gegangen.', right: 'Ich wäre gegangen.', ref: 'Ch.31 hätte vs wäre' },
    { wrong: 'Er dürfte kommen vielleicht.', right: 'Er dürfte kommen.', ref: 'Ch.32 Konjunktiv II Vermutungen' },
    { wrong: 'Er spricht als ob er weiß alles.', right: 'Er spricht, als ob er alles wüsste.', ref: 'Ch.33 als ob' },
    { wrong: 'Während ich war krank, arbeitete ich.', right: 'Während ich krank war, arbeitete ich.', ref: 'Ch.34 während' },
    { wrong: 'Seitdem ich komme nach Deutschland...', right: 'Seitdem ich nach Deutschland gekommen bin...', ref: 'Ch.34 seitdem' },
    { wrong: 'Nachdem ich esse, gehe ich spazieren.', right: 'Nachdem ich gegessen habe, gehe ich spazieren.', ref: 'Ch.35 nachdem' }
  ],

  // ---------- Exercises (engine-required shape) ----------
  exercises: {
    mcq: {
      q: 'Welche Zeitform ist typisch für Zeitungsberichte?',
      options: ['Präteritum', 'Perfekt', 'Präsens'],
      answer: 0,
      explain: 'Written journalism defaults to Präteritum as its base narration tense — Ch.27.'
    },
    gap: {
      sentence: ['Nachdem ich gegessen ', ', ging ich schlafen.'],
      gaps: [ { answer: 'hatte', accepts: ['hatte'] } ],
      explain: 'The earlier action after "nachdem" is typically expressed with Plusquamperfekt — Ch.35.'
    },
    match: {
      q: 'Match each structure to its meaning.',
      pairs: [
        { noun: 'dürfte', art: 'Very high probability (Ch.32)' },
        { noun: 'könnte', art: 'Possible, lower certainty (Ch.32)' },
        { noun: 'als ob', art: 'Unreal comparison (Ch.33)' },
        { noun: 'seitdem', art: 'Past → present continuation (Ch.34)' }
      ]
    },
    builder: {
      target: 'Build: "After I had read the email, I answered immediately."',
      bank: ['Nachdem', 'ich', 'die', 'E-Mail', 'gelesen', 'hatte', ',', 'antwortete', 'ich', 'sofort', '.'],
      answer: ['Nachdem', 'ich', 'die', 'E-Mail', 'gelesen', 'hatte', ',', 'antwortete', 'ich', 'sofort', '.'],
      roles: { 'Nachdem': 'r-checkpoint', 'hatte': 'r-checkpoint' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Er spricht als ob er weiß alles.',
      right: 'Er spricht, als ob er alles wüsste.',
      explain: 'The verb after "als ob" must be Konjunktiv II ("wüsste") and move to the end — Ch.33.'
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
      { range: 'Below 65%', label: 'Review Phase 3' }
    ]
  },

  // ---------- AI Tutor recommendation rules ----------
  tutorRecommendations: [
    { weakArea: 'Weak tense choice', recommend: 'Chapters 27–28' },
    { weakArea: 'Weak assumptions', recommend: 'Chapters 29–32' },
    { weakArea: 'Weak unreal comparisons', recommend: 'Chapter 33' },
    { weakArea: 'Weak temporal clauses', recommend: 'Chapters 34–35' },
    { weakArea: 'Weak narration', recommend: 'Chapter 28' }
  ],

  // ---------- Quiz (checkpoint uses the grammar review as its graded quiz) ----------
  quiz: [
    { q: 'Welche Zeitform ist typisch für Zeitungsberichte?', options: ['Präteritum', 'Perfekt', 'Präsens'], answer: 0,
      explain: 'Written journalism defaults to Präteritum as its base narration tense — Ch.27.' },
    { q: 'Was bedeutet "Er wird jetzt zu Hause sein"?', options: ['Eine Vermutung über die Gegenwart', 'Ein echter Zukunftsplan', 'Ein Befehl'], answer: 0,
      explain: 'With "jetzt", werden + Infinitiv expresses an assumption about the present — Ch.29.' },
    { q: 'Welche Struktur zeigt Bedauern über die Vergangenheit?', options: ['hätte + Partizip II', 'wird + Infinitiv', 'würde + Infinitiv'], answer: 0,
      explain: 'hätte/wäre + Partizip II expresses regret about an unchangeable past — Ch.31.' },
    { q: 'Wo steht das Verb bei "als ob"?', options: ['Am Ende', 'Direkt nach "als"', 'Am Satzanfang'], answer: 0,
      explain: '"als ob" sends the verb to the end of the clause, like a normal Nebensatz — Ch.33.' },
    { q: 'Welche Handlung nennt "nachdem"?', options: ['Die frühere, abgeschlossene Handlung', 'Die spätere Handlung', 'Keine'], answer: 0,
      explain: '"nachdem" names the earlier, completed action, typically in Plusquamperfekt — Ch.35.' }
  ],

  takeaways: [
    { c: 'r-checkpoint', html: 'This checkpoint confirms mastery across all of Phase 3: tense choice and switching, future assumptions, the unreal past, unreal comparisons, and temporal sequencing.' },
    { c: 'r-checkpoint', html: 'Any weak area identified here maps directly to a specific chapter (27-35) to revisit before Phase 4.' },
    { c: 'r-checkpoint', html: 'Phase 4 builds directly on this foundation — a strong score here means a smoother path forward.' }
  ],
  revisionTips: [
    'Re-read the chapters flagged by your weakest scoring areas before moving to Phase 4.',
    'Redo the error-correction section without looking at the answer key first.',
    'Practise combining tense-switching, an assumption, and a temporal clause in a single paragraph to build natural fluency.'
  ]
};

window.CHAPTER = CHAPTER;
