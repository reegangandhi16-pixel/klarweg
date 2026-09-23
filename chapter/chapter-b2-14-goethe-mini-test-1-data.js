/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 14
   "Goethe Mini Test 1 (Checkpoint)" — NOT a teaching chapter.
   First Goethe-style checkpoint covering Chapters 1-13. No new
   grammar or vocabulary is introduced; everything recycles the
   Satzklammer/Verbalkomplex/Thema-Rhema/es-system/Valenz/
   Trennbar-untrennbar/high-frequency-verbs/negation-scale content
   already taught.
   IMPORTANT: dialogue/speaking uses ONLY Anna and Rohan.
============================================================ */
const CHAPTER = {
  id: 'b2-14-goethe-mini-test-1',
  phase: 'B2 · Phase 1',
  number: 14,
  title: 'Goethe Mini Test 1 (Checkpoint)',
  titleEn: 'Goethe Mini Test 1 (checkpoint)',
  description: 'Prove you\'ve mastered Chapters 1-13 — Satzklammer through nuanced negation — with a Goethe-style mock exam covering Reading, Listening, Grammar, Vocabulary, Writing, and Speaking.',
  xp: 450,
  time: 90,
  difficulty: 'Checkpoint',
  isCheckpoint: true,
  nextChapter: { number: 15, title: 'Konzessivsätze: obgleich', titleEn: 'Concessive clauses: obgleich' , href: 'chapter-b2-15-konzessivsaetze-obgleich.html' },

  prevChapter: { number: 13, title: 'Nuancierte Negation', titleEn: 'Nuanced negation', href: 'chapter-b2-13-nuancierte-negation.html' },
  heroAnimationPath: null,

  story: null,

  overviewIntro: {
    eyebrow: 'Checkpoint — not a teaching chapter',
    html: 'This is the first Goethe-style checkpoint of B2. No new grammar or vocabulary appears here — every question recycles Chapters 1–13: <span class="de">Satzklammer</span>, <span class="de">Verbalkomplex</span>, <span class="de">Thema → Rhema</span>, the <span class="de">es</span>-system, <span class="de">Valenz</span>, <span class="de">trennbar/untrennbar</span>, high-frequency verbs, and the full negation scale. Roughly 70% Goethe B2 style, 30% Klarweg integration.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'This is a CHECKPOINT covering Chapters 1-13: Erweiterte Satzklammer, Verbalkomplex, Informationsstruktur (Thema/Rhema), Formales es, Korrelat-es, es in festen Ausdrücken, Verbergänzungen, Valenz von Verben, Trennbar vs untrennbar, häufige B2-Verben, Stellung von nicht, Doppelte Verneinung & Litotes, and Nuancierte Negation. Assess the learner\'s writing against ALL of these areas as relevant — do not expect anything beyond this scope (no Funktionsverbgefüge, no Konjunktiv I, no later B2 topics). The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check verb-bracket placement, separable/inseparable prefixes, verb valency (case/preposition), "es" usage, and negation placement/strength as relevant to what the learner wrote.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why, tagging which chapter topic it relates to. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Checkpoint readiness:</b> one sentence on whether the learner is ready to move to Phase 2, or which chapter (1-13) to revisit.</p>\n' +
    'Keep it under 150 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you\'ve mastered Chapters 1-13. You\'re ready for Phase 2 of B2.',
    mid: 'Good work. Review the topics flagged below before moving to Phase 2.',
    low: 'This checkpoint shows real gaps. Revisit the recommended chapters before continuing — Phase 2 builds directly on this foundation.'
  },

  parserSentence: [
    { w: 'Wir', role: 'plain' }, { w: 'haben', role: 'plain' },
    { w: 'die', role: 'plain' }, { w: 'Verhandlung', role: 'plain' }, { w: 'nicht', role: 'r-checkpoint' }, { w: 'abgeschlossen', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'Understand the scope of this checkpoint: Chapters 1-13, no new content.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Complete two Goethe-style reading texts testing structure, verb placement, negation, and valency.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Complete two listening tasks — True/False, Multiple Choice, Matching, and Notes.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'Answer 20 mixed grammar questions spanning all of Chapters 1-13.' },
    { id: 'vocabulary', label: 'Vocabulary Review', tag: 'core',
      objective: 'Answer 10 vocabulary questions: synonyms, prefixes, verb families, collocations, register.' },
    { id: 'exercises',  label: 'Error Correction', tag: 'practice',
      objective: 'Find and fix 10 errors spanning word order, negation, valency, separable verbs, and es.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Complete four Goethe-style speaking tasks with examiner prompts and an evaluation checklist.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a formal email and an opinion text using the full grammar range from Chapters 1-13.' },
    { id: 'quiz',       label: 'Scoring & Answer Key', tag: 'assess',
      objective: 'Review the complete answer key, scoring table, and your readiness for Phase 2.' },
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
      desc: 'Every question with the correct answer, a short explanation, and a grammar reference to Chapters 1-13.',
      pdfUrl: '/pdfs/answer-key.pdf', size: '14 pages', kind: 'Assessment' },
    { icon: '📖', title: 'Revision Guide PDF',
      desc: 'A one-page map of which chapters (1-13) to revisit based on common weak areas.',
      pdfUrl: '/pdfs/revision-guide.pdf', size: '2 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Chapters 1–13', text: 'Prove mastery of the entire Phase 1 grammar system' },
    { de: 'Satzklammer + Verbalkomplex + Valenz + Negation + es', text: 'Combine multiple grammar topics simultaneously' },
    { de: 'Goethe B2 70% · Klarweg 30%', text: 'Experience real Goethe B2 exam-style difficulty' },
    { de: '160 points total', text: 'Score across Reading, Listening, Grammar, Vocabulary, Writing, and Speaking' },
    { de: 'Personalized recommendations', text: 'Know exactly which chapters to revisit if needed' }
  ],

  vocab: [],

  // ---------- Grammar overview (checkpoint scope reference) ----------
  grammar: [
    {
      title: 'Prüfungsumfang (Chapters 1–13)',
      body: [ 'This checkpoint tests everything from Chapters 1 through 13. No new grammar or vocabulary is introduced.' ],
      table: {
        head: ['Chapter', 'Topic'],
        rows: [
          ['1', 'Erweiterte Satzklammer'],
          ['2', 'Mehrteilige Verben (Verbalkomplex)'],
          ['3', 'Informationsstruktur (Thema → Rhema)'],
          ['4', 'Formales es'],
          ['5', 'Korrelat-es'],
          ['6', 'es in festen Ausdrücken'],
          ['7', 'Verbergänzungen erkennen'],
          ['8', 'Valenz von Verben'],
          ['9', 'Trennbar vs. untrennbar'],
          ['10', 'Häufige B2-Verben'],
          ['11', 'Stellung von nicht'],
          ['12', 'Doppelte Verneinung & Litotes'],
          ['13', 'Nuancierte Negation']
        ]
      },
      hinglish: 'Yeh checkpoint Chapter 1 se 13 tak ka sab kuch test karta hai. Yahan koi naya grammar ya vocabulary nahi aata \u2014 sirf jo padha hai wahi check hota hai.'
    },
    {
      title: 'AI Tutor Empfehlungslogik',
      body: [ 'If your checkpoint results show a weak area, the AI Tutor recommends the specific chapter to revisit.' ],
      table: {
        head: ['Weak area', 'Recommended chapters'],
        rows: [
          ['Valenz', 'Chapter 8'],
          ['Negation', 'Chapters 11–13'],
          ['Prefix verbs (trennbar/untrennbar)', 'Chapters 9–10'],
          ['es-system', 'Chapters 4–6'],
          ['Satzklammer/Verbalkomplex', 'Chapters 1–2'],
          ['Informationsstruktur', 'Chapter 3'],
          ['Verbergänzungen', 'Chapter 7']
        ]
      },
      hinglish: 'Agar checkpoint ke results mein koi weak area dikhta hai, to AI Tutor tumhe wahi chapter dobara dekhne ke liye recommend karta hai.'
    }
  ],

  // ---------- Reading (engine renders this single field; Text B folded in below) ----------
  reading: {
    title: 'Lesetext A — Im Büro',
    titleEn: 'Reading A — At the office',
    tokens: [
      { w: 'Anna', role: 'plain', en: 'Anna', hi: 'अन्ना', type: 'Eigenname' },
      { w: 'hat', role: 'plain', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Bericht', role: 'plain', en: 'report', hi: 'रिपोर्ट', type: 'Noun · masc.' },
      { w: 'gestern', role: 'plain', en: 'yesterday', hi: 'कल', type: 'Adverb' },
      { w: 'nicht', role: 'r-checkpoint', en: 'not (Satznegation, Satzende)', hi: 'नहीं (Satznegation, Satzende)', type: 'Satznegation (Ch.11, Satzende)' },
      { w: 'abschließen', role: 'plain', en: 'conclude', hi: 'समाप्त करना', type: 'Verb · Infinitiv' },
      { w: 'können', role: 'plain', en: 'been able to (Satzende)', hi: 'सक्षम (Satzende)', type: 'Modalverb · Verbalkomplex (Ch.2, Satzende)' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-checkpoint', en: 'it (formales Subjekt)', hi: 'यह (formales Subjekt)', type: 'Formales es (Ch.4)' },
      { w: 'liegt', role: 'plain', en: 'lies', hi: 'निर्भर है', type: 'Verb · liegen an' },
      { w: 'daran', role: 'plain', en: 'in the fact', hi: 'इस बात में', type: 'Pronominaladverb' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun · Nom.' },
      { w: 'auf', role: 'r-checkpoint', en: 'for (Valenz)', hi: 'के लिए (Valenz)', type: 'Präposition · Akk. (Valenz, Ch.8)' },
      { w: 'eine', role: 'plain', en: 'a (fem. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Antwort', role: 'plain', en: 'answer (Satzende)', hi: 'जवाब (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'warten', role: 'r-checkpoint', en: 'wait (Valenz, Satzende)', hi: 'इंतज़ार (Valenz, Satzende)', type: 'Verb · warten auf (Valenz, Ch.8, Satzende)' },
      { w: 'musste', role: 'plain', en: 'had to (Satzende)', hi: 'पड़ा (Satzende)', type: 'Modalverb (Präteritum, Satzende)' },
      { w: '.', plain: true },
      { w: 'Trotzdem', role: 'plain', en: 'nevertheless', hi: 'फिर भी', type: 'Adverb' },
      { w: 'schließt', role: 'r-checkpoint', en: 'concludes (trennbar, verb part 1)', hi: 'समाप्त करती है (trennbar)', type: 'Verb · abschließen (trennbar, Ch.9)' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun · Nom.' },
      { w: 'die', role: 'plain', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Arbeit', role: 'plain', en: 'work', hi: 'काम', type: 'Noun · fem.' },
      { w: 'heute', role: 'plain', en: 'today', hi: 'आज', type: 'Adverb' },
      { w: 'ab', role: 'r-checkpoint', en: '(separable prefix, Satzende)', hi: '(separable prefix, Satzende)', type: 'Trennbares Präfix (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Anna wasn\'t able to conclude the report yesterday. It\'s because she had to wait for an answer. Nevertheless, she concludes the work today. — Text B (university): It pleases the students that the seminar wasn\'t unimportant. Rohan takes part in every discussion. He is by no means shy.',
    comprehension: [
      { q: 'Warum konnte Anna den Bericht gestern nicht abschließen?', options: ['Sie musste auf eine Antwort warten.', 'Sie hatte keine Zeit.', 'Der Computer war kaputt.'], answer: 0 },
      { q: 'Welches Grammatikthema zeigt "schließt ... ab"?', options: ['Trennbares Verb (Ch.9)', 'Korrelat-es (Ch.5)', 'Litotes (Ch.12)'], answer: 0 },
      { q: 'Welche Valenz hat "warten"?', options: ['warten auf + Akkusativ', 'warten + Dativ', 'warten + Genitiv'], answer: 0 },
      { q: 'Wie fühlen sich die Studenten über das Seminar? (Text B)', options: ['Es war nicht unwichtig (Litotes) — sie sind zufrieden.', 'Sie fanden es langweilig.', 'Sie wissen es nicht.'], answer: 0 },
      { q: 'Wie stark verneint "keineswegs"? (Text B)', options: ['Sehr stark (Ch.13)', 'Sehr schwach', 'Neutral'], answer: 0 }
    ]
  },
  readingBArchive: {
    title: 'Lesetext B — Uni-Diskussion',
    titleEn: 'Reading B — University discussion',
    tokens: [
      { w: 'Es', role: 'r-checkpoint', en: 'it (Korrelat-es)', hi: 'यह (Korrelat-es)', type: 'Korrelat-es (Ch.5)' },
      { w: 'freut', role: 'plain', en: 'pleases', hi: 'खुशी होती है', type: 'Verb · freuen' },
      { w: 'die', role: 'plain', en: 'the (plural acc.)', hi: 'ये', type: 'Article · Akk.' },
      { w: 'Studenten', role: 'plain', en: 'students (Satzende)', hi: 'छात्र (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'das', role: 'plain', en: 'the (neut. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Seminar', role: 'plain', en: 'seminar', hi: 'संगोष्ठी', type: 'Noun · neut.' },
      { w: 'nicht', role: 'r-checkpoint', en: 'not (Litotes)', hi: 'नहीं (Litotes)', type: 'Litotes (Ch.12)' },
      { w: 'unwichtig', role: 'r-checkpoint', en: 'unimportant (Litotes, Satzende)', hi: 'महत्वहीन (Litotes, Satzende)', type: 'Litotes (Ch.12, Satzende)' },
      { w: 'war', role: 'plain', en: 'was (Satzende)', hi: 'था (Satzende)', type: 'Verb · sein (Satzende)' },
      { w: '.', plain: true },
      { w: 'Rohan', role: 'plain', en: 'Rohan', hi: 'रोहन', type: 'Eigenname' },
      { w: 'nimmt', role: 'r-checkpoint', en: 'takes part (trennbar, verb part 1)', hi: 'भाग लेता है (trennbar)', type: 'Verb · teilnehmen (trennbar, Ch.9)' },
      { w: 'an', role: 'r-checkpoint', en: 'in (Valenz)', hi: 'में (Valenz)', type: 'Präposition · Dativ (Valenz, Ch.8)' },
      { w: 'jeder', role: 'plain', en: 'every (fem. dat.)', hi: 'हर', type: 'Pronoun · Dativ' },
      { w: 'Diskussion', role: 'plain', en: 'discussion (Satzende)', hi: 'चर्चा (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'teil', role: 'r-checkpoint', en: '(separable prefix, Satzende)', hi: '(separable prefix, Satzende)', type: 'Trennbares Präfix (Satzende)' },
      { w: '.', plain: true },
      { w: 'Er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun · Nom.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'keineswegs', role: 'r-checkpoint', en: 'by no means (starke Negation)', hi: 'किसी भी हाल में नहीं (starke Negation)', type: 'Starke Negation (Ch.13)' },
      { w: 'schüchtern', role: 'plain', en: 'shy (Satzende)', hi: 'शर्मीला (Satzende)', type: 'Adjective (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'It pleases the students that the seminar wasn\'t unimportant. Rohan takes part in every discussion. He is by no means shy.',
    comprehension: [
      { q: 'Wie fühlen sich die Studenten über das Seminar?', options: ['Es war nicht unwichtig (Litotes) — sie sind zufrieden.', 'Sie fanden es langweilig.', 'Sie wissen es nicht.'], answer: 0 },
      { q: 'Welche Valenz hat "teilnehmen"?', options: ['teilnehmen an + Dativ', 'teilnehmen + Akkusativ', 'teilnehmen + Genitiv'], answer: 0 },
      { q: 'Wie stark verneint "keineswegs"?', options: ['Sehr stark (Ch.13)', 'Sehr schwach', 'Neutral'], answer: 0 }
    ]
  },

  // ---------- Listening (engine renders this single field; Script B folded into questions below) ----------
  listening: {
    transcript: 'In der Teamsitzung heute Morgen hat der Abteilungsleiter erklärt, dass das Projekt nicht rechtzeitig fertiggestellt werden konnte. Es hängt hauptsächlich davon ab, dass zwei Kollegen krank waren. Niemand hat das vorher gewusst. Der Leiter ist keineswegs unzufrieden mit dem Team, aber er bittet alle, sich stärker auf die Deadline zu konzentrieren. Am Ende der Sitzung nahmen alle Mitarbeiter an einer kurzen Diskussion teil.',
    translation: 'In this morning\'s team meeting, the department head explained that the project could not be completed on time. It mainly depends on the fact that two colleagues were sick. Nobody knew this beforehand. The head is by no means dissatisfied with the team, but asks everyone to concentrate harder on the deadline. At the end of the meeting, all employees took part in a short discussion. — Script B (university): the discussion was about whether students should be taught bilingually — one student called it "nicht unmöglich, aber schwierig"; another disagreed, saying it depends on the school\'s resources; everyone agreed the topic deserves more attention.',
    tokens: [
      { w: 'In' },
      { w: 'der' },
      { w: 'Teamsitzung' },
      { w: 'heute' },
      { w: 'Morgen' },
      { w: 'hat' },
      { w: 'der' },
      { w: 'Abteilungsleiter' },
      { w: 'erklärt' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'das' },
      { w: 'Projekt' },
      { w: 'nicht' },
      { w: 'rechtzeitig' },
      { w: 'fertiggestellt' },
      { w: 'werden' },
      { w: 'konnte' },
      { w: '.', plain: true },
      { w: 'Es' },
      { w: 'hängt' },
      { w: 'hauptsächlich' },
      { w: 'davon' },
      { w: 'ab' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'zwei' },
      { w: 'Kollegen' },
      { w: 'krank' },
      { w: 'waren' },
      { w: '.', plain: true },
      { w: 'Niemand' },
      { w: 'hat' },
      { w: 'das' },
      { w: 'vorher' },
      { w: 'gewusst' },
      { w: '.', plain: true },
      { w: 'Der' },
      { w: 'Leiter' },
      { w: 'ist' },
      { w: 'keineswegs' },
      { w: 'unzufrieden' },
      { w: 'mit' },
      { w: 'dem' },
      { w: 'Team' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'er' },
      { w: 'bittet' },
      { w: 'alle' },
      { w: ',', plain: true },
      { w: 'sich' },
      { w: 'stärker' },
      { w: 'auf' },
      { w: 'die' },
      { w: 'Deadline' },
      { w: 'zu' },
      { w: 'konzentrieren' },
      { w: '.', plain: true },
      { w: 'Am' },
      { w: 'Ende' },
      { w: 'der' },
      { w: 'Sitzung' },
      { w: 'nahmen' },
      { w: 'alle' },
      { w: 'Mitarbeiter' },
      { w: 'an' },
      { w: 'einer' },
      { w: 'kurzen' },
      { w: 'Diskussion' },
      { w: 'teil' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum konnte das Projekt nicht rechtzeitig fertig werden?', options: ['Zwei Kollegen waren krank.', 'Es gab technische Probleme.', 'Niemand wollte arbeiten.'], optionsEn: ['Two colleagues were ill.', 'There were technical problems.', 'Nobody wanted to work.'], answer: 0 },
      { q: 'Wie zufrieden ist der Leiter mit dem Team?', options: ['Keineswegs unzufrieden (Ch.13)', 'Sehr unzufrieden', 'Neutral'], optionsEn: ['By no means dissatisfied (Ch.13)', 'Very dissatisfied', 'Neutral'], answer: 0 },
      { q: 'Was passiert am Ende der Sitzung?', options: ['Alle nehmen an einer Diskussion teil.', 'Alle gehen sofort nach Hause.', 'Der Leiter kündigt.'], optionsEn: ['Everyone takes part in a discussion.', 'Everyone goes home immediately.', 'The head of department is resigning.'], answer: 0 },
      { q: 'Was meint der erste Student zum zweisprachigen Unterricht? (Script B)', options: ['Nicht unmöglich, aber schwierig (Litotes, Ch.12)', 'Völlig unmöglich', 'Ganz einfach'], optionsEn: ['Not impossible, but difficult (litotes, Ch.12)', 'Completely impossible', 'Very simple'], answer: 0 },
      { q: 'Wovon hängt die Umsetzung ab? (Script B)', options: ['Von den Ressourcen der Schule (Valenz, Ch.8)', 'Vom Wetter', 'Von den Ferien'], optionsEn: ['on the school\'s resources (valency, Ch.8)', 'on the weather', 'on the holidays'], answer: 0 }
    ]
  },
  listeningBArchive: {
    transcript: 'In der Uni-Diskussion ging es um die Frage, ob Studierende zweisprachig unterrichtet werden sollten. Ein Student meinte, das sei nicht unmöglich, aber durchaus schwierig umzusetzen. Eine andere Studentin widersprach entschieden. Sie sagte, es komme darauf an, wie die Schule mit den Ressourcen umgeht. Am Schluss waren sich alle einig, dass das Thema wesentlich mehr Aufmerksamkeit verdient.',
    translation: 'The university discussion was about whether students should be taught bilingually. One student thought it wasn\'t impossible, but definitely difficult to implement. Another student disagreed firmly. She said it depends on how the school handles the resources. In the end, everyone agreed that the topic deserves substantially more attention.',
    questions: [
      { q: 'Was meint der erste Student zum zweisprachigen Unterricht?', options: ['Nicht unmöglich, aber schwierig (Litotes, Ch.12)', 'Völlig unmöglich', 'Ganz einfach'], answer: 0 },
      { q: 'Wovon hängt die Umsetzung ab?', options: ['Von den Ressourcen der Schule (Valenz, Ch.8)', 'Vom Wetter', 'Von den Ferien'], answer: 0 },
      { q: 'Worauf einigen sich am Ende alle?', options: ['Das Thema braucht mehr Aufmerksamkeit.', 'Das Thema ist unwichtig.', 'Niemand hat eine Meinung.'], answer: 0 }
    ]
  },

  // ---------- Speaking (4 Goethe-style tasks, Anna/Rohan examiner prompts) ----------
  speaking: [
    { task: "Prüfung, Teil 1: Berichte, was der Abteilungsleiter in der Sitzung erklärt hat.", taskEn: "Exam, Part 1: report what the department head explained in the meeting.", de: "Er hat erklärt, dass das Projekt nicht rechtzeitig fertiggestellt werden konnte.", en: "He explained that the project couldn't be completed on time." },
    { task: "Prüfung, Teil 2: Sag, wovon die Verzögerung abhängt.", taskEn: "Exam, Part 2: say what the delay depends on.", de: "Es hängt hauptsächlich davon ab, dass zwei Kollegen ausgefallen sind.", en: "It mainly depends on the fact that two colleagues were off sick." },
    { task: "Prüfung, Teil 3: Widersprich einer Kollegin höflich.", taskEn: "Exam, Part 3: disagree politely with a colleague.", de: "Das ist nicht ganz falsch, allerdings sehe ich die Ursache anders.", en: "That's not entirely wrong, however I see the cause differently." },
    { task: "Prüfung, Teil 4: Schlag im Team eine Lösung vor.", taskEn: "Exam, Part 4: propose a solution in the team.", de: "Ich schlage vor, dass wir den Termin verschieben und die Aufgaben neu verteilen.", en: "I propose that we postpone the deadline and redistribute the tasks." }
  ],
  speakingEvaluation: {
    checklist: [
      'Correct sentence-bracket placement (Ch.1–2)',
      'Natural Thema→Rhema information flow (Ch.3)',
      'Correct use of es where needed (Ch.4–6)',
      'Correct verb valency — case and preposition (Ch.7–8)',
      'Correct separable/inseparable verb handling (Ch.9–10)',
      'Precise nicht placement and negation strength (Ch.11–13)'
    ]
  },

  // ---------- Writing (2 tasks) ----------
  writing: {
    prompt: 'TASK 1 — Formal email (80–100 words): Write to a colleague explaining a delay in a project, using at least one separable verb, one valency verb with its correct preposition, and correct nicht placement.\n\nTASK 2 — Opinion text (100–120 words): Give your opinion on a topic of your choice (work, university, or travel), using at least one Litotes expression, one nuanced negation expression, and one es-structure (formal or correlative).',
    starters: ['Sehr geehrte/r …, ich schreibe Ihnen, weil …', 'Meiner Meinung nach ist es nicht unbedingt …'],
    placeholder: 'Sehr geehrter Herr/Frau …, das Projekt konnte leider nicht rechtzeitig abgeschlossen werden …',
    minWords: 80
  },

  // ---------- Grammar Review: 40 mixed questions (representative set) ----------
  grammarReview: [
    { q: 'Wo steht das Partizip II im Hauptsatz? "Anna ___ den Brief ___."', options: ['hat / geschrieben', 'schreibt / hat', 'geschrieben / hat'], answer: 0, ref: 'Ch.1 Satzklammer' },
    { q: 'Welches Verb bildet einen dreiteiligen Verbalkomplex? "Ich habe kommen ___."', options: ['müssen', 'muss', 'musste'], answer: 0, ref: 'Ch.2 Verbalkomplex' },
    { q: 'Welcher Satz betont "gestern" als neue Information (Rhema)?', options: ['Gestern hat Anna gearbeitet.', 'Anna hat gestern gearbeitet.', 'Beide gleich'], answer: 0, ref: 'Ch.3 Thema-Rhema' },
    { q: 'Welches "es" ist ein Formales es?', options: ['Es regnet.', 'Es freut mich, dass du kommst.', 'Ich weiß es.'], answer: 0, ref: 'Ch.4 Formales es' },
    { q: 'Welches "es" ist Korrelat-es?', options: ['Es freut mich, dass du kommst.', 'Es regnet.', 'Es gibt viele Bücher.'], answer: 0, ref: 'Ch.5 Korrelat-es' },
    { q: 'Vervollständige die feste Wendung: "Es tut mir ___."', options: ['leid', 'schlecht', 'gut'], answer: 0, ref: 'Ch.6 feste Ausdrücke' },
    { q: 'Ist "Hilfe" in "Ich brauche Hilfe" eine Ergänzung oder Angabe?', options: ['Ergänzung', 'Angabe', 'Weder noch'], answer: 0, ref: 'Ch.7 Verbergänzungen' },
    { q: 'Welche Valenz hat "helfen"?', options: ['+ Dativ', '+ Akkusativ', '+ Genitiv'], answer: 0, ref: 'Ch.8 Valenz' },
    { q: 'Ist "verstehen" trennbar oder untrennbar?', options: ['Untrennbar', 'Trennbar', 'Beides'], answer: 0, ref: 'Ch.9 Trennbar/untrennbar' },
    { q: 'Welche Kollokation ist korrekt?', options: ['eine Entscheidung treffen', 'eine Entscheidung machen', 'eine Entscheidung entwickeln'], answer: 0, ref: 'Ch.10 Häufige Verben' },
    { q: 'Wo steht "nicht" bei Satznegation? "Ich arbeite heute ___."', options: ['nicht (am Ende)', 'nicht ich', 'ich nicht'], answer: 0, ref: 'Ch.11 Stellung von nicht' },
    { q: 'Welcher Satz zeigt korrekte Litotes?', options: ['Das ist nicht schlecht.', 'Das ist nicht nicht schlecht.', 'Das ist kein nicht schlecht.'], answer: 0, ref: 'Ch.12 Litotes' },
    { q: 'Welches Wort ist die stärkste Negation?', options: ['keinesfalls', 'kaum', 'nicht wirklich'], answer: 0, ref: 'Ch.13 Nuancierte Negation' },
    { q: 'Welcher Satz hat die richtige Verbklammer? "Wir ___ das Problem lösen ___."', options: ['werden / können', 'können / werden', 'werden können / —'], answer: 0, ref: 'Ch.1–2' },
    { q: 'Welche Präposition gehört zu "warten"?', options: ['auf + Akkusativ', 'für + Akkusativ', 'mit + Dativ'], answer: 0, ref: 'Ch.8 Valenz' },
    { q: 'Welches Verb gehört zur "stellen"-Familie?', options: ['vorstellen', 'ankommen', 'aufstehen'], answer: 0, ref: 'Ch.10 Verbfamilien' },
    { q: 'Ist "Es gibt viele Probleme" Formales es oder Korrelat-es?', options: ['Formales es', 'Korrelat-es', 'Objekt-es'], answer: 0, ref: 'Ch.4' },
    { q: 'Welcher Satz zeigt Sondernegation korrekt?', options: ['Ich fahre nicht heute, sondern morgen.', 'Ich fahre heute nicht.', 'Nicht ich fahre.'], answer: 0, ref: 'Ch.11' },
    { q: 'Welches Präfix ist immer untrennbar?', options: ['ver-', 'auf-', 'mit-'], answer: 0, ref: 'Ch.9' },
    { q: 'Was bedeutet "nicht unbedingt"?', options: ['not necessarily', 'absolutely not', 'never'], answer: 0, ref: 'Ch.13' }
  ],

  // ---------- Vocabulary Review: 25 mixed questions (representative set) ----------
  vocabularyReview: [
    { q: 'Synonym für "beginnen"?', options: ['anfangen', 'beenden', 'verlieren'], answer: 0, ref: 'Ch.10' },
    { q: 'Was bedeutet das Präfix "ent-" typischerweise?', options: ['Wegnahme/Entfernung', 'Wiederholung', 'Verstärkung'], answer: 0, ref: 'Ch.9' },
    { q: 'Welches Verb gehört zur "kommen"-Familie?', options: ['bekommen', 'gehen', 'stellen'], answer: 0, ref: 'Ch.10' },
    { q: 'Welche Kollokation passt zu "Antrag"?', options: ['einen Antrag stellen', 'einen Antrag machen', 'einen Antrag geben'], answer: 0, ref: 'Ch.10' },
    { q: 'Ist "keineswegs" formell oder informell?', options: ['Formell', 'Informell', 'Beides gleich'], answer: 0, ref: 'Ch.13' },
    { q: 'Welche feste Wendung bedeutet "I don\'t care"?', options: ['Es ist mir egal.', 'Es tut mir leid.', 'Es kommt darauf an.'], answer: 0, ref: 'Ch.6' },
    { q: 'Synonym für "bekommen"?', options: ['erhalten', 'verlieren', 'geben'], answer: 0, ref: 'Ch.10' },
    { q: 'Was bedeutet "berücksichtigen"?', options: ['to take into account', 'to ignore', 'to celebrate'], answer: 0, ref: 'Ch.10' },
    { q: 'Welches Register passt zu "nicht wirklich"?', options: ['Gesprochen', 'Formell', 'Literarisch'], answer: 0, ref: 'Ch.13' },
    { q: 'Was heißt "es lohnt sich"?', options: ['it\'s worth it', 'it doesn\'t matter', 'it\'s forbidden'], answer: 0, ref: 'Ch.6' }
  ],

  // ---------- Error Correction: 20 sentences (representative set of 10 shown, extendable) ----------
  errorCorrectionSet: [
    { wrong: 'Ich habe gelernt heute.', right: 'Ich habe heute gelernt.', ref: 'Ch.1 Satzklammer' },
    { wrong: 'Anna hat können kommen.', right: 'Anna hat kommen können.', ref: 'Ch.2 Verbalkomplex' },
    { wrong: 'Ich helfe meinen Bruder.', right: 'Ich helfe meinem Bruder.', ref: 'Ch.8 Valenz' },
    { wrong: 'Ich warte den Bus.', right: 'Ich warte auf den Bus.', ref: 'Ch.8 Valenz' },
    { wrong: 'Ich ver stehe.', right: 'Ich verstehe.', ref: 'Ch.9 Trennbar/untrennbar' },
    { wrong: 'Der Zug ankommt.', right: 'Der Zug kommt an.', ref: 'Ch.9 Trennbar/untrennbar' },
    { wrong: 'Ich nehme teil das Seminar.', right: 'Ich nehme an dem Seminar teil.', ref: 'Ch.10' },
    { wrong: 'Ich nicht komme.', right: 'Ich komme nicht.', ref: 'Ch.11 Stellung von nicht' },
    { wrong: 'Niemand kommt nicht.', right: 'Niemand kommt.', ref: 'Ch.12 Doppelte Verneinung' },
    { wrong: 'Ich habe kaum nicht Zeit.', right: 'Ich habe kaum Zeit.', ref: 'Ch.13 Nuancierte Negation' }
  ],

  // ---------- Exercises (standard shape the shared engine renders) ----------
  exercises: {
    mcq: {
      q: 'Wo steht das Partizip II im Hauptsatz? "Anna ___ den Brief ___."',
      options: ['hat / geschrieben', 'schreibt / hat', 'geschrieben / hat'],
      answer: 0,
      explain: 'Finite verb "hat" in Position 2, Partizip II "geschrieben" at the end — Ch.1 Satzklammer.'
    },
    gap: {
      sentence: ['Ich helfe meinem ', '.'],
      gaps: [ { answer: 'Bruder', accepts: ['Bruder'] } ],
      explain: '"helfen" always requires Dativ — Ch.8 Valenz.'
    },
    match: {
      q: 'Match each verb to its correct valency or prefix behaviour.',
      pairs: [
        { noun: 'helfen', art: '+ Dativ' },
        { noun: 'warten', art: 'auf + Akkusativ' },
        { noun: 'verstehen', art: 'untrennbar' },
        { noun: 'ankommen', art: 'trennbar' }
      ]
    },
    builder: {
      target: 'Build: "It is by no means true."',
      bank: ['Das', 'stimmt', 'keineswegs', '.'],
      answer: ['Das', 'stimmt', 'keineswegs', '.'],
      roles: { 'keineswegs': 'r-checkpoint' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich nehme teil das Seminar.',
      right: 'Ich nehme an dem Seminar teil.',
      explain: '"teilnehmen" requires the fixed preposition "an" + Dativ — Ch.10.'
    }
  },

  // ---------- Scoring table ----------
  scoring: {
    sections: [
      { name: 'Reading', points: 20 },
      { name: 'Listening', points: 20 },
      { name: 'Grammar', points: 40 },
      { name: 'Vocabulary', points: 25 },
      { name: 'Writing', points: 30 },
      { name: 'Speaking', points: 25 }
    ],
    total: 160,
    grades: [
      { range: '90–100%', label: 'Excellent' },
      { range: '80–89%', label: 'Very Good' },
      { range: '70–79%', label: 'Good' },
      { range: '60–69%', label: 'Pass' },
      { range: 'Below 60%', label: 'Review Phase 1' }
    ]
  },

  // ---------- AI Tutor recommendation rules ----------
  tutorRecommendations: [
    { weakArea: 'Valenz', recommend: 'Chapter 8' },
    { weakArea: 'Negation', recommend: 'Chapters 11–13' },
    { weakArea: 'Prefix Verbs', recommend: 'Chapters 9–10' },
    { weakArea: 'es-system', recommend: 'Chapters 4–6' },
    { weakArea: 'Satzklammer/Verbalkomplex', recommend: 'Chapters 1–2' },
    { weakArea: 'Informationsstruktur', recommend: 'Chapter 3' },
    { weakArea: 'Verbergänzungen', recommend: 'Chapter 7' }
  ],

  // ---------- Quiz (checkpoint uses the grammar review as its graded quiz) ----------
  quiz: [
    { q: 'Wo steht das Partizip II? "Anna ___ den Brief ___."', options: ['hat / geschrieben', 'schreibt / hat', 'geschrieben / hat'], answer: 0,
      explain: 'Finite verb "hat" in Position 2, Partizip II "geschrieben" at the end — Ch.1 Satzklammer.' },
    { q: 'Welche Valenz hat "helfen"?', options: ['+ Dativ', '+ Akkusativ', '+ Genitiv'], answer: 0,
      explain: '"helfen" always requires Dativ — Ch.8 Valenz.' },
    { q: 'Ist "verstehen" trennbar oder untrennbar?', options: ['Untrennbar', 'Trennbar', 'Beides'], answer: 0,
      explain: '"ver-" is always inseparable — Ch.9.' },
    { q: 'Welches Wort ist die stärkste Negation?', options: ['keinesfalls', 'kaum', 'nicht wirklich'], answer: 0,
      explain: '"keinesfalls" is the strongest, most formal negation — Ch.13.' },
    { q: 'Welcher Satz zeigt korrekte Litotes?', options: ['Das ist nicht schlecht.', 'Das ist nicht nicht schlecht.', 'Das ist kein nicht schlecht.'], answer: 0,
      explain: '"nicht schlecht" is a valid Litotes expression — Ch.12.' }
  ],

  takeaways: [
    { c: 'r-checkpoint', html: 'This checkpoint confirms mastery across all of Phase 1: sentence structure, the es-system, verb valency, prefix verbs, and the full negation scale.' },
    { c: 'r-checkpoint', html: 'Any weak area identified here maps directly to a specific chapter (1-13) to revisit before Phase 2.' },
    { c: 'r-checkpoint', html: 'Phase 2 builds directly on this foundation — a strong score here means a smoother path forward.' }
  ],
  revisionTips: [
    'Re-read the chapters flagged by your weakest scoring areas before moving to Phase 2.',
    'Redo the error-correction section without looking at the answer key first.',
    'Practise combining two or more grammar topics in a single sentence (e.g. valency + separable verb + negation).'
  ]
};

window.CHAPTER = CHAPTER;
