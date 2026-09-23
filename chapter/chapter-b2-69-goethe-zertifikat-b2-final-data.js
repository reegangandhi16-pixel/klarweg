/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 7 · Chapter 69
   "Goethe-Zertifikat B2 Final" — the complete end-of-course
   mock examination integrating Chapters 1–68. NO new grammar,
   NO new vocabulary. Full Lesen/Hören/Schreiben/Sprechen +
   mixed grammar/vocabulary review + performance analysis +
   final readiness report. Dialogue: ONLY Katrin and Timo.
============================================================ */
const CHAPTER = {
  id: 'b2-69-goethe-zertifikat-b2-final',
  phase: 'B2 · Phase 7',
  number: 69,
  title: 'Goethe-Zertifikat B2 Final',
  titleEn: 'Goethe-Zertifikat B2 — Final Examination',
  description: 'The complete B2 mock examination. No new grammar. No new vocabulary. Everything from Chapters 1–68, integrated — Lesen, Hören, Schreiben, Sprechen.',
  xp: 1000,
  time: 150,
  difficulty: 'Advanced',
  nextChapter: { number: 1, title: 'Tempusgebrauch & Stilistische Tempuswahl', titleEn: 'Advanced tense usage & stylistic choice', href: 'chapter-c1-01-tempusgebrauch-stilistische-tempuswahl.html' },

  prevChapter: { number: 68, title: 'Redemittel für Diskussionen', titleEn: 'Discussion phrases', href: 'chapter-b2-68-redemittel-fuer-diskussionen.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'One day before the exam. Everything comes together.',
    intro: 'The night before their Goethe B2 exam, Katrin and Timo run a final review session — nervous about the four skills tomorrow, but confident they\'ve prepared — recycling grammar, vocabulary, and every discussion strategy from the whole course.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'A realistic final review — nothing new, everything reinforced'
    ],
    scene: 'Goethe B2 — Prüfungsvorbereitung',
    femaleSpeakers: ['Katrin'],
    dialogue: [
      { speaker: 'Katrin', tokens: [
        { w: 'Morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'ज़रूरत है', pron: 'MÜ-sen', type: 'Modal · müssen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'vier', role: 'r-akkusativ', en: 'four', hi: 'चार', pron: 'feer', type: 'Number' },
        { w: 'Fertigkeiten', role: 'r-akkusativ', en: 'skills', hi: 'कौशल', pron: 'FAIR-tikh-ky-ten', type: 'Noun · plural', why: 'die Fertigkeit (this chapter).', ex: 'vier Fertigkeiten' },
        { w: 'bewältigen', role: 'r-verb', en: 'manage', hi: 'संभालना', pron: 'be-VEL-ti-gen', type: 'Verb · infinitive (Satzende)', why: 'bewältigen = to manage/cope with (this chapter).', ex: 'die Prüfung bewältigen' },
        { w: '.', plain: true }
      ], en: 'Tomorrow we must manage four skills.', hi: 'Kal humein chaar kaushal sambhaalne honge.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'mir', role: 'r-dativ', en: 'myself', hi: 'ख़ुद के लिए', pron: 'meer', type: 'Reflexive pronoun' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'ganz', role: 'r-akkusativ', en: 'entirely', hi: 'पूरी तरह', pron: 'gants', type: 'Adverb' },
        { w: 'sicher', role: 'r-akkusativ', en: 'sure', hi: 'निश्चित', pron: 'ZI-kher', type: 'Adjective' },
        { w: 'über', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'Ü-ber', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Bewertung', role: 'r-akkusativ', en: 'evaluation', hi: 'मूल्यांकन', pron: 'be-VAIR-tung', type: 'Noun · fem.', why: 'die Bewertung (this chapter).', ex: 'die Bewertung verstehen' },
        { w: '.', plain: true }
      ], en: 'I am not entirely sure about the evaluation.', hi: 'Main moolyaankan ke baare mein poori tarah nishchit nahi hoon.' },
      { speaker: 'Katrin', side: 'right', tokens: [
        { w: 'Da', role: 'r-conjunction', en: 'since', hi: 'चूंकि', pron: 'dah', type: 'Conjunction · da' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतनी', pron: 'zo', type: 'Adverb' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'geübt', role: 'r-verb', en: 'practised', hi: 'अभ्यास किया', pron: 'ge-ÜPT', type: 'Partizip II' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben (Satzende)' },
        { w: ',', plain: true },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'unsere', role: 'r-akkusativ', en: 'our (fem.)', hi: 'अपनी', pron: 'UN-ze-ruh', type: 'Possessive · acc.' },
        { w: 'Bereitschaft', role: 'r-akkusativ', en: 'readiness', hi: 'तैयारी', pron: 'be-RYTS-shaft', type: 'Noun · fem.', why: 'die Bereitschaft (this chapter).', ex: 'unsere Bereitschaft zeigen' },
        { w: 'zeigen', role: 'r-verb', en: 'show', hi: 'दिखाना', pron: 'TSY-gen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Since we have practised so much, we should show our readiness.', hi: 'Chunki humne itna abhyaas kiya hai, humein apni taiyaari dikhaani chahiye.' },
      { speaker: 'Timo', tokens: [
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'सही', pron: 'hast', type: 'Verb · haben' },
        { w: 'recht', role: 'r-akkusativ', en: 'right', hi: 'सही', pron: 'rekht', type: 'Fixed phrase' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'werde', role: 'r-verb', en: 'will', hi: 'दूंगा', pron: 'VAIR-duh', type: 'Verb · werden (Futur I, ich)' },
        { w: 'gründlich', role: 'r-akkusativ', en: 'thoroughly', hi: 'अच्छी तरह', pron: 'GRÜNT-likh', type: 'Adverb', why: 'gründlich = thoroughly (this chapter).', ex: 'gründlich vorbereiten' },
        { w: 'vorbereitet', role: 'r-verb', en: 'prepared', hi: 'तैयार', pron: 'FOR-be-ry-tet', type: 'Adjective' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होना', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'You are right. I will be thoroughly prepared.', hi: 'Tum sahi ho. Main achhi tarah taiyaar hoonga.' },
      { speaker: 'Katrin', side: 'right', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'schaffen', role: 'r-verb', en: 'will manage', hi: 'कर लेंगे', pron: 'SHA-fen', type: 'Verb · schaffen (wir)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: '!', plain: true }
      ], en: 'Exactly! We will manage this together!', hi: 'Bilkul! Hum yeh saath mein kar lenge!' },
      { speaker: 'Timo', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'schaffen', role: 'r-verb', en: 'will manage', hi: 'कर लेंगे', pron: 'SHA-fen', type: 'Verb · schaffen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: '!', plain: true }
      ], en: 'Yes, we will manage this!', hi: 'Haan, hum yeh kar lenge!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The final capstone',
    html: 'No new grammar. No new vocabulary. This is the <span class="de r-summary">complete Goethe-Zertifikat B2 mock examination</span> — <b>Lesen, Hören, Schreiben, Sprechen</b> — integrating everything from Chapters 1–68.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'This is the GOETHE-ZERTIFIKAT B2 FINAL EXAMINATION review — a comprehensive integration of the entire B2 course (Chapters 1–68): passive (all forms), Konjunktiv I/II, indirekte Rede, Nominalisierung, Partizipialattribute, Relativsätze, Infinitiv mit zu, Präpositionen (incl. Genitiv), Funktionsverbgefüge, Modalpartikeln, Nebensätze, Konnektoren, Wissenschaftssprache, Argumentation, Diskussion, and Redemittel. NO new grammar or vocabulary should be expected — only mastery and integration of what has already been taught. ' +
    'The learner wrote the text below as final exam practice (a formal email or discussion essay).\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check register consistency (formal Sie-form throughout, no informal slips).\n' +
    '- Check passive, Konjunktiv, and relative-clause accuracy where used.\n' +
    '- Check argument structure: clear thesis, reasons, counterarguments addressed, logical conclusion.\n' +
    '- Check connector variety and correct word order after subordinating/coordinating conjunctions.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence, framed as exam readiness.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Exam readiness:</b> one sentence estimating whether this text would pass the Goethe B2 Schreiben criteria (task fulfillment, coherence, range, accuracy).</p>\n' +
    'Keep it under 140 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Outstanding — 90%+ puts you at Exam Ready / Outstanding B2. You have integrated the full curriculum. Go take the Goethe-Zertifikat B2 with confidence.',
    mid: 'Very Good. Review the Common Final Mistakes list and re-test any weak grammar area before exam day.',
    low: 'Recommended revision — re-read the chapters covering the areas you missed. Grammar and Vocabulary Review sections below map straight back to Chapters 1–68.'
  },

  parserSentence: [
    { w: 'Lass', role: 'r-open' }, { w: 'uns', role: 'r-open' }, { w: 'noch', role: 'r-open' }, { w: 'einmal', role: 'r-open' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'Understand the scope: a full mock examination integrating everything from Chapters 1–68. No new content.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Katrin and Timo run their final review session the night before the exam.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Review key words recycled across the full B2 course — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'A complete map of every grammar area covered in B2, with the Common Final Mistakes checklist.' },
    { id: 'reading',    label: 'Lesen',      tag: 'core',
      objective: 'A Goethe-style reading paper: newspaper article and forum discussion, at authentic B2 difficulty.' },
    { id: 'listening',  label: 'Hören',      tag: 'practice',
      objective: 'A Goethe-style listening paper: conversation and discussion, with transcript and answer key.' },
    { id: 'speaking',   label: 'Sprechen',   tag: 'practice',
      objective: 'The complete Goethe Speaking exam structure: presentation, partner discussion, joint task.' },
    { id: 'writing',    label: 'Schreiben',  tag: 'practice',
      objective: 'Two full writing tasks: formal email (220–250 words) and discussion essay (250 words), with rubric.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Mixed grammar and vocabulary review drawn from across the entire B2 syllabus.' },
    { id: 'quiz',       label: 'Mock Exam',  tag: 'assess',
      objective: 'A mixed final mock test across all major B2 grammar and communication areas. Pass to earn the full 1000 XP.' },
    { id: 'summary',    label: 'Readiness Report', tag: 'assess', auto: true,
      objective: 'Your final performance analysis, CEFR estimate, and personalized revision plan.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download the full grammar and homework review PDFs for offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 5 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Full mock-exam practice set: Lesen, Hören, Schreiben tasks, and mixed grammar/vocabulary drills across Chapters 1–68.',
      pdfUrl: '/pdfs/homework.pdf', size: '24 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete B2 grammar map — every rule from Chapters 1–68 in one reference, plus the Common Final Mistakes checklist.',
      pdfUrl: '/pdfs/grammar.pdf', size: '20 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Passiv (alle Formen) · Konjunktiv I & II · Indirekte Rede', text: 'Integrate the full B2 grammar system naturally, without thinking rule-by-rule' },
    { de: 'Nominalisierung · Partizipialattribute · Relativsätze · Genitivpräpositionen', text: 'Understand and produce complex, formal written German' },
    { de: 'Wissenschaftssprache · Funktionsverbgefüge · Argumentation · Gegenargumente', text: 'Write coherent, objective, well-argued formal texts' },
    { de: 'Redemittel für Diskussion und Präsentation', text: 'Participate confidently in discussions and structured presentations' },
    { de: 'Zusammenfassend: alle B2-Kompetenzen', text: 'Walk into the Goethe-Zertifikat B2 exam fully prepared' }
  ],

  vocab: [
    { de: 'die Fertigkeit', art: 'die', gender: 'f', plural: 'Fertigkeiten', pos: 'noun', level: 'B2', register: 'written', en: 'skill', hi: 'कौशल', ex: 'Alle vier Fertigkeiten werden in der Prüfung getestet.', exEn: 'All four skills are tested in the exam.', exHi: 'Pariksha mein chaaron kaushal test kiye jaate hain.', ex2: 'Sie haben ihre sprachlichen Fertigkeiten verbessert.', ex2En: 'They\'ve improved their language skills.', ex2Hi: 'Unhone apne bhaashaayi kaushal behtar banaaye hain.' },
    { de: 'bewältigen', pos: 'verb', level: 'B2', register: 'written', en: 'to manage, cope with', hi: 'सफलतापूर्वक निपटना', ex: 'Sie hat die Prüfung erfolgreich bewältigt.', exEn: 'She has successfully managed the exam.', exHi: 'Usne pariksha ko safaltapoorvak nipataaya hai.', ex2: 'Sie haben die Herausforderung bewältigt.', ex2En: 'They\'ve coped with the challenge.', ex2Hi: 'Unhone chunauti ka saamnaa kiya hai.', conj: { praesens: 'bewältigt', praeteritum: 'bewältigte', perfekt: 'hat bewältigt' } },
    { de: 'die Bewertung', art: 'die', gender: 'f', plural: 'Bewertungen', pos: 'noun', level: 'B2', register: 'written', en: 'assessment, evaluation', hi: 'मूल्यांकन', ex: 'Die Bewertung erfolgt nach klaren Kriterien.', exEn: 'The assessment follows clear criteria.', exHi: 'Moolyaankan spasht maapdandon ke anusaar hota hai.', ex2: 'Sie haben die Bewertung erhalten.', ex2En: 'They\'ve received the assessment.', ex2Hi: 'Unhein moolyaankan mil gaya hai.' },
    { de: 'die Bereitschaft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'readiness', hi: 'तत्परता', ex: 'Ihre Bereitschaft für die Prüfung ist hoch.', exEn: 'Her readiness for the exam is high.', exHi: 'Pariksha ke liye uski tatparta uchch hai.', ex2: 'Sie haben ihre Bereitschaft bewiesen.', ex2En: 'They\'ve proven their readiness.', ex2Hi: 'Unhone apni tatparta saabit ki hai.' },
    { de: 'gründlich', pos: 'adjective', level: 'B2', register: 'both', en: 'thorough', hi: 'गहन', ex: 'Eine gründliche Vorbereitung zahlt sich aus.', exEn: 'Thorough preparation pays off.', exHi: 'Ek gahan taiyaari ka fal milta hai.', ex2: 'Sie haben das Thema gründlich analysiert.', ex2En: 'They\'ve thoroughly analysed the topic.', ex2Hi: 'Unhone vishay ka gahan vishleshan kiya hai.' }
  ],

  // ---------- Grammar Review (recycled — full syllabus map) ----------
  grammar: [
    {
      title: 'Der komplette B2-Grammatiküberblick',
      body: [ 'Every area assessed in this final examination was already taught in Chapters 1–68. Nothing here is new — this is integration and recall.' ],
      table: {
        head: ['Area', 'Chapters'],
        rows: [
          ['Passiv (Vorgangs-, Zustands-, bekommen-, unpersönlich)', 'Ch. 10, 44, 46–47, 49'],
          ['Konjunktiv II & Passiversatz (sich lassen)', 'Ch. 31–32, 45'],
          ['Konjunktiv I & indirekte Rede', 'Ch. 59–62'],
          ['Nominalisierung & komplexe Nominalgruppen', 'Ch. 50, 52–53'],
          ['Partizipialattribute', 'Ch. 51'],
          ['Relativsätze (inkl. Genitiv)', 'Ch. 37–39'],
          ['Präpositionen mit Genitiv', 'Ch. 64'],
          ['Funktionsverbgefüge', 'Ch. 54'],
          ['Modalitätsersatz (haben/sein + zu)', 'Ch. 48'],
          ['Textkohärenz (Verweiswörter, Absatzlogik)', 'Ch. 57–58'],
          ['Modalpartikeln (doch, ja, eben, halt)', 'Ch. 55–56'],
          ['Wissenschaftssprache', 'Ch. 65'],
          ['Argumentation & Gegenargumente', 'Ch. 66–67'],
          ['Redemittel für Diskussion', 'Ch. 68']
        ]
      },
      hinglish: 'Is final exam mein jo bhi aayega, woh Chapter 1 se 68 tak already padhaya jaa chuka hai \u2014 yahan kuch naya nahi hai. Yeh sirf sab kuch ek saath laane aur yaad karne ka chapter hai. Neeche wali table se seedha us chapter par jaa sakte ho jahan koi topic kamzor lag raha ho.'
    },
    {
      title: 'Häufige Prüfungsfehler (Common Final Mistakes)',
      body: [ 'Before the real exam, check whether you still confuse these classic B2 pairs.' ],
      mistakes: [
        { wrong: 'Das Auto ist repariert geworden.', right: 'Das Auto ist repariert worden. / Das Auto wurde repariert.', why: 'The Perfekt of the Vorgangspassiv takes <b>worden</b>, never geworden \u2014 geworden belongs to <i>werden</i> meaning \u201cto become\u201d.' },
        { wrong: 'Er sagte, dass er ist müde.', right: 'Er sagte, er sei müde. / Er sagte, dass er müde sei.', why: 'Two things: reported speech takes Konjunktiv I (<b>sei</b>), and after <b>dass</b> the verb must go to the END.' },
        { wrong: 'Das Auto, deren Farbe rot ist.', right: 'Das Auto, dessen Farbe rot ist.', why: 'The pronoun matches the noun BEFORE the comma. <i>das Auto</i> is neuter, so it takes <b>dessen</b> \u2014 deren is for feminine and plural.' },
        { wrong: 'Ich bin einverstanden mit dir.', right: 'Ich stimme dir zu. / Ich bin mit dir einverstanden.', why: 'A direct translation of \u201cI agree with you\u201d. German prefers <b>zustimmen</b> + Dativ \u2014 and if you do use einverstanden, the phrase comes before it: <i>mit dir einverstanden sein</i>.' },
        { wrong: 'Trotzdem das Ergebnis gut war, waren wir nicht zufrieden.', right: 'Obwohl das Ergebnis gut war, waren wir nicht zufrieden.', why: '<b>trotzdem</b> is an adverb, so it cannot open a subordinate clause \u2014 that job belongs to <b>obwohl</b>. With trotzdem you would write: <span class="de">Das Ergebnis war gut. Trotzdem waren wir nicht zufrieden.</span>' }
      ],
      hinglish: 'Exam se pehle yeh paanch classic galtiyan zaroor dekh lo \u2014 yeh B2 mein sabse zyada hoti hain. Agar inme se koi abhi bhi confuse karti hai, to us chapter par ek baar wapas jao.'
    },
    {
      title: 'Finale Checkliste',
      body: [ 'Yeh poori checklist hai. Har item par imaandaari se tick lagao \u2014 jo bhi khaali reh jaaye, wahi tumhara revision plan hai.' ],
      note: 'Final Memory Map: Grammar → Vocabulary → Reading → Listening → Speaking → Writing → Communication → Goethe Examination → Success.',
      hinglish: 'Yeh poori checklist hai. Har item par imaandaari se tick lagao \u2014 jo bhi khaali reh jaaye, wahi tumhara revision plan hai.'
    },
    {
      title: 'Zertifizierungskriterien (Certificate Criteria)',
      body: [ 'Your quiz score maps to a readiness band.' ],
      table: {
        head: ['Score', 'Band'],
        rows: [
          ['95–100%', 'Outstanding B2'],
          ['90–94%', 'Exam Ready'],
          ['80–89%', 'Very Good'],
          ['70–79%', 'Ready with Minor Revision'],
          ['Below 70%', 'Recommended Revision']
        ]
      },
      note: 'Motivation: you have completed 69 chapters of B2 German. Whatever your score today, you have already built the habit that gets you fluent — keep it on exam day: read the whole question before answering, manage your time per section, and trust the Redemittel you have drilled.',
      hinglish: 'Tumhara quiz score ek readiness band batata hai. Tumne B2 ke 69 chapters poore kar liye hain \u2014 score jo bhi ho, woh aadat ban chuki hai jo fluency laati hai. Exam wale din bas teen baatein yaad rakhna: poora sawaal padho, har section ka time baant lo, aur jo Redemittel practice kiye hain unpar bharosa rakho.'
    }
  ],

  // ---------- Reading (Lesen Teil 1 + 2, recycled content) ----------
  reading: {
    title: 'Lesen Teil 1 — Zeitungsartikel: Sprachprüfungen im Wandel',
    titleEn: 'Reading — a newspaper article on the changing nature of language exams',
    tokens: [
      { w: 'Es', role: 'plain', en: 'it', hi: 'yeh', type: 'Pronomen · Nom.' },
      { w: 'wird', role: 'plain', en: 'is (Passiv)', hi: 'jaata hai', type: 'Verb · werden (Präsens)' },
      { w: 'zunehmend', role: 'plain', en: 'increasingly', hi: 'badhte hue', type: 'Adverb' },
      { w: 'gefordert', role: 'plain', en: 'demanded (Satzende, Passiv)', hi: 'maang ki jaati hai (Satzende, Passiv)', type: 'Partizip II (Satzende)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'ki', type: 'Konjunktion' },
      { w: 'Kandidaten', role: 'plain', en: 'candidates', hi: 'ummeedvaar', type: 'Noun · plural' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'nahi', type: 'Negation' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'sirf', type: 'Adverb' },
      { w: 'Grammatik', role: 'plain', en: 'grammar', hi: 'vyakaran', type: 'Noun · fem.' },
      { w: 'beherrschen', role: 'plain', en: 'master (Satzende)', hi: 'mahaarat rakhein (Satzende)', type: 'Verb · Satzende' },
      { w: ',', plain: true },
      { w: 'sondern', role: 'plain', en: 'but rather', hi: 'balki', type: 'Konjunktion' },
      { w: 'auch', role: 'plain', en: 'also', hi: 'bhi', type: 'Adverb' },
      { w: 'angemessen', role: 'plain', en: 'appropriately', hi: 'uchit roop se', type: 'Adverb' },
      { w: 'diskutieren', role: 'plain', en: 'discuss (Satzende)', hi: 'charcha karein (Satzende)', type: 'Verb · Satzende' },
      { w: 'können', role: 'plain', en: 'can (Satzende)', hi: 'sakein (Satzende)', type: 'Modalverb (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'It is increasingly demanded that candidates not only master grammar, but can also discuss appropriately.',
    comprehension: [
      { q: 'Welche Struktur ist "wird...gefordert"?', options: ['Vorgangspassiv', 'Zustandspassiv', 'Aktiv'], answer: 0 },
      { q: 'Was wird von Kandidaten zusätzlich zur Grammatik erwartet?', options: ['Angemessenes Diskutieren', 'Schnelles Sprechen', 'Auswendiglernen'], answer: 0 },
      { q: 'Welches Sprachniveau behandelt dieser Artikel?', options: ['B2', 'A1', 'C2'], answer: 0 }
    ]
  },
  readingBArchive: {
    title: 'Lesen Teil 2 — Forumsdiskussion: Vorbereitung auf die Prüfung',
    titleEn: 'Reading — a forum discussion on exam preparation',
    tokens: [
      { w: 'Manche', role: 'plain', en: 'some', hi: 'kuch', type: 'Pronomen · Nom.' },
      { w: 'Nutzer', role: 'plain', en: 'users (Satzende)', hi: 'users (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'vertreten', role: 'r-counter', en: 'hold (part of fixed counterargument expression)', hi: '(fixed counterargument expression ka hissa)', type: 'Verb (Präsens)' },
      { w: 'die', role: 'r-counter', en: 'the (part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Article' },
      { w: 'Meinung', role: 'r-counter', en: 'opinion (Satzende, fixed counterargument expression)', hi: 'raay (Satzende, fixed counterargument expression)', type: 'Noun · fem. (Satzende)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'ki', type: 'Konjunktion' },
      { w: 'intensives', role: 'plain', en: 'intensive', hi: 'gehan', type: 'Adjective' },
      { w: 'Üben', role: 'plain', en: 'practicing (Satzende)', hi: 'abhyaas (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'wichtiger', role: 'plain', en: 'more important (Satzende)', hi: 'zyaada mahatvapurn (Satzende)', type: 'Adjective (Satzende)' },
      { w: 'sei', role: 'plain', en: 'is (Konjunktiv I, Satzende)', hi: 'hai (Konjunktiv I, Satzende)', type: 'Verb · sein (Konjunktiv I, Satzende)' },
      { w: 'als', role: 'plain', en: 'than', hi: 'se', type: 'Konjunktion' },
      { w: 'reines', role: 'plain', en: 'pure', hi: 'shudh', type: 'Adjective' },
      { w: 'Auswendiglernen', role: 'plain', en: 'memorization (Satzende)', hi: 'yaad karna (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Some users hold the opinion that intensive practicing is more important than pure memorization.'
  },

  // ---------- Listening (Hören — conversation + discussion) ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_069_L001', speaker: 'Katrin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, morgen ist es endlich so weit. Wie fühlst du dich?', en: 'Timo, tomorrow is finally the day. How are you feeling?' },
      { id: 'B2_069_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ehrlich gesagt etwas nervös, aber ich glaube, wir haben wirklich genug geübt.', en: 'Honestly a bit nervous, but I think we\'ve really practiced enough.' },
      { id: 'B2_069_L003', speaker: 'Katrin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Da stimme ich dir zu. Sollen wir noch einmal die Redemittel für den mündlichen Teil durchgehen?', en: 'I agree with you there. Should we go through the discussion phrases for the oral part once more?' },
      { id: 'B2_069_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gute Idee, danach fühle ich mich bestimmt sicherer.', en: 'Good idea, I\'ll definitely feel more confident after that.' }
    ],
    transcript: 'Timo, morgen ist es endlich so weit. Wie fühlst du dich? Ehrlich gesagt etwas nervös, aber ich glaube, wir haben wirklich genug geübt. Da stimme ich dir zu. Sollen wir noch einmal die Redemittel für den mündlichen Teil durchgehen? Gute Idee, danach fühle ich mich bestimmt sicherer.',
    translation: 'Timo, tomorrow is finally the day. How are you feeling? Honestly a bit nervous, but I think we\'ve really practiced enough. I agree with you there. Should we go through the discussion phrases for the oral part once more? Good idea, I\'ll definitely feel more confident after that.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'morgen' },
      { w: 'ist' },
      { w: 'es' },
      { w: 'endlich' },
      { w: 'so' },
      { w: 'weit' },
      { w: '.', plain: true },
      { w: 'Wie' },
      { w: 'fühlst' },
      { w: 'du' },
      { w: 'dich' },
      { w: '?', plain: true },
      { w: 'Ehrlich' },
      { w: 'gesagt' },
      { w: 'etwas' },
      { w: 'nervös' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'glaube' },
      { w: ',', plain: true },
      { w: 'wir' },
      { w: 'haben' },
      { w: 'wirklich' },
      { w: 'genug' },
      { w: 'geübt' },
      { w: '.', plain: true },
      { w: 'Da' },
      { w: 'stimme' },
      { w: 'ich' },
      { w: 'dir' },
      { w: 'zu' },
      { w: '.', plain: true },
      { w: 'Sollen' },
      { w: 'wir' },
      { w: 'noch' },
      { w: 'einmal' },
      { w: 'die' },
      { w: 'Redemittel' },
      { w: 'für' },
      { w: 'den' },
      { w: 'mündlichen' },
      { w: 'Teil' },
      { w: 'durchgehen' },
      { w: '?', plain: true },
      { w: 'Gute' },
      { w: 'Idee' },
      { w: ',', plain: true },
      { w: 'danach' },
      { w: 'fühle' },
      { w: 'ich' },
      { w: 'mich' },
      { w: 'bestimmt' },
      { w: 'sicherer' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie fühlt sich Timo am Abend vor der Prüfung?', qEn: 'How does Timo feel the night before the exam?', options: ['völlig ruhig', 'etwas nervös', 'sehr müde', 'gleichgültig'], optionsEn: ['completely calm', 'a bit nervous', 'very tired', 'indifferent'], answer: 1,
        explain: '"Ehrlich gesagt etwas nervös."' },
      { q: 'Was wollen sie noch einmal durchgehen?', qEn: 'What do they decide to review once more?', options: ['die Grammatik', 'die Redemittel für den mündlichen Teil', 'die Vokabeln', 'den Zeitplan'], optionsEn: ['the grammar', 'the phrases for the oral part', 'the vocabulary', 'the schedule'], answer: 1,
        explain: '"Sollen wir noch einmal die Redemittel für den mündlichen Teil durchgehen?"' }
    ]
  },

  // ---------- Speaking (full Sprechen structure) ----------
  speaking: [
    { task: "Dein Kollege ist nervös vor der Prüfung. Beruhige ihn.", taskEn: "Your colleague is nervous before the exam. Reassure him.", de: "Da stimme ich dir zu, aber wir haben gründlich geübt.", en: "I agree with you there, but we've practised thoroughly." },
    { task: "Prüfung, Teil 1: Halte einen strukturierten Vortrag.", taskEn: "Exam, Part 1: give a structured talk.", de: "Zuerst nenne ich die Vorteile, dann die Nachteile, und am Ende meine Meinung.", en: "First I'll name the advantages, then the drawbacks, and at the end my opinion." },
    { task: "Prüfung, Teil 2: Diskutiere mit deiner Partnerin.", taskEn: "Exam, Part 2: discuss with your partner.", de: "Ich sehe das anders, denn kürzere Arbeitszeiten kosten uns Personal.", en: "I see it differently, because shorter hours cost us staff." },
    { task: "Prüfung, Teil 3: Löst zusammen eine Aufgabe und einigt euch.", taskEn: "Exam, Part 3: solve a task together and agree.", de: "Wir könnten den Termin teilen. Einverstanden — dann übernehme ich den Vormittag.", en: "We could split the appointment. Agreed — then I'll take the morning." },
    { task: "Prüfung: Sprich mit der Prüferin in der Sie-Form.", taskEn: "Exam: speak to the examiner using the formal 'Sie'.", de: "Wenn Sie erlauben, komme ich noch auf die Bewertung zurück.", en: "If you'll allow me, I'll come back to the assessment." }
  ],

  // ---------- Writing (Task 1: formal email, Task 2: discussion essay) ----------
  writing: {
    prompt: 'TASK 1 — Formal email (220–250 words): Write a formal email of complaint, request, application, or recommendation, using appropriate register and structure (Betreff, Anrede, Einleitung, Hauptteil, Schluss, Grußformel).\n\nTASK 2 — Discussion essay (250 words): Present arguments on a topic, include at least one counterargument (using Gegenargumente phrasing), and conclude logically using summarizing Redemittel.',
    starters: ['Sehr geehrte Damen und Herren, ich schreibe Ihnen, weil ...', 'In der heutigen Gesellschaft wird oft diskutiert, ob ...'],
    placeholder: 'Sehr geehrte Damen und Herren, ich schreibe Ihnen bezüglich ...',
    minWords: 220
  },

  // ---------- Exercises (mixed grammar/vocabulary review) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Es ___ behauptet, dass die Prüfung fair sei." (Vorgangspassiv, Präsens)',
      options: ['wird', 'ist', 'hat'],
      answer: 0,
      explain: 'Vorgangspassiv Präsens: werden + Partizip II — "Es wird behauptet".'
    },
    gap: {
      sentence: ['Das Auto, ', ' Farbe rot ist, gehört Anna.'],
      gaps: [ { answer: 'dessen', accepts: ['dessen'] } ],
      explain: '"dessen" replaces a masculine/neuter possessive inside a relative clause.'
    },
    match: {
      q: 'Match each fixed expression to its function.',
      pairs: [
        { noun: 'Meiner Meinung nach ...', art: 'Expressing an opinion' },
        { noun: 'Ich stimme Ihnen zu.', art: 'Agreeing' },
        { noun: 'Andererseits ...', art: 'Introducing a counterargument' },
        { noun: 'Zusammenfassend kann man sagen, dass ...', art: 'Summarizing' }
      ]
    },
    builder: {
      target: 'Build: "It is claimed that the exam is fair." (Vorgangspassiv + indirekte Rede)',
      bank: ['Es', 'wird', 'behauptet', ',', 'die', 'Prüfung', 'sei', 'fair', '.'],
      answer: ['Es', 'wird', 'behauptet', ',', 'die', 'Prüfung', 'sei', 'fair', '.'],
      roles: { 'wird': 'plain', 'behauptet': 'plain', 'sei': 'plain' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Er sagte, dass er ist müde.',
      right: 'Er sagte, er sei müde.',
      explain: 'Reported speech at B2 uses Konjunktiv I (sei), not the plain Indikativ "ist".'
    }
  },

  // ---------- Mock Exam Quiz (mixed, final checkpoint scope) ----------
  quiz: [
    { q: 'Complete: "Die Entscheidung ___ gestern getroffen." (Passiv Präteritum)', options: ['wurde', 'wird', 'ist'], answer: 0,
      explain: 'Passiv Präteritum: wurde + Partizip II.' },
    { q: 'Complete: "Er behauptet, er ___ die Prüfung bereits bestanden." (Konjunktiv I, Perfekt)', options: ['habe', 'hat', 'hätte'], answer: 0,
      explain: 'Konjunktiv I Perfekt: habe + Partizip II, for reported speech.' },
    { q: 'Which relative pronoun fits: "die Frau, ___ Sohn Arzt ist"?', options: ['dessen', 'deren', 'die'], answer: 1,
      explain: '"deren" replaces a feminine possessive (ihr) inside a relative clause.' },
    { q: 'Which Genitiv preposition means "in view of"?', options: ['angesichts', 'trotz', 'während'], answer: 0,
      explain: '"angesichts" = in view of/given, and takes the Genitiv.' },
    { q: 'What does "sich lassen + Infinitiv" express?', options: ['A passive possibility ("can be done")', 'An obligation', 'A finished state'], answer: 0,
      explain: '"Das Problem lässt sich lösen" = the problem can be solved (Passiversatz).' },
    { q: 'Which sentence uses Nominalstil correctly?', options: ['Die Überprüfung der Ergebnisse erfolgte gestern.', 'Man überprüfte die Ergebnisse gestern.', 'Die Ergebnisse wurden gestern überprüft, weil.'], answer: 0,
      explain: 'Nominalisierung turns the verb "überprüfen" into the noun "Überprüfung" for formal/academic style.' },
    { q: 'Which is a correct Funktionsverbgefüge for "to decide"?', options: ['eine Entscheidung treffen', 'eine Entscheidung machen', 'eine Entscheidung tun'], answer: 0,
      explain: '"eine Entscheidung treffen" is the fixed Funktionsverbgefüge; "machen"/"tun" are incorrect collocations.' },
    { q: 'What does the Modalpartikel "doch" typically add to a statement?', options: ['A softening or reminding tone, not new facts', 'A question marker', 'A past tense marker'], answer: 0,
      explain: 'Modalpartikeln like "doch" shift attitude/tone without changing the factual content.' },
    { q: 'Which expression introduces a counterargument academically?', options: ['Kritiker argumentieren, dass ...', 'Ich stimme völlig zu.', 'Zum Beispiel ...'], answer: 0,
      explain: '"Kritiker argumentieren, dass..." attributes an opposing view to critics, common in formal discussion.' },
    { q: 'Which is the polite way to interrupt a discussion?', options: ['Darf ich kurz etwas sagen?', 'Ich unterbreche.', 'Sei still, ich rede.'], answer: 0,
      explain: '"Darf ich kurz etwas sagen?" is the standard polite way to interrupt.' },
    { q: 'Complete: "___ der schlechten Wetterbedingungen fand das Fest statt." (Genitivpräposition)', options: ['Trotz', 'Wegen der', 'Bei'], answer: 0,
      explain: '"Trotz" + Genitiv = despite; fits the concessive meaning here.' },
    { q: 'Which sentence uses the Partizipialattribut correctly?', options: ['der gestern veröffentlichte Bericht', 'der Bericht, der gestern veröffentlicht', 'der veröffentlichende gestern Bericht'], answer: 0,
      explain: 'Partizip II as an attributive adjective: "der [gestern veröffentlichte] Bericht" — modifier before the noun, correctly declined.' },
    { q: 'Complete: "Sie haben die Aufgabe ___, ohne Fehler zu machen." (Infinitiv mit zu)', options: ['gelöst', 'zu lösen', 'lösen'], answer: 1,
      explain: '"ohne...zu + Infinitiv" is the fixed construction for "without doing something".' },
    { q: 'Which connector expresses an unexpected contrast (adverb, verb-second)?', options: ['trotzdem', 'obwohl', 'weil'], answer: 0,
      explain: '"trotzdem" is an adverb triggering verb-second word order; "obwohl"/"weil" are subordinating conjunctions (verb-final).' },
    { q: 'What is the full discussion rhythm from Chapter 68?', options: ['Open → Ask → Listen → Respond → Clarify → Summarize → Conclude', 'Question → Answer → Fact → Opinion', 'Introduction → Body → Ending'], answer: 0,
      explain: 'This seven-part rhythm structures every successful Goethe B2 discussion.' },
    { q: 'Which is an example of Wissenschaftssprache (impersonal/objective style)?', options: ['Es lässt sich feststellen, dass ...', 'Ich glaube, dass ...', 'Ich finde das gut.'], answer: 0,
      explain: '"Es lässt sich feststellen, dass..." removes the personal subject for objective academic style.' },
    { q: 'Complete the four-step B2 argument structure: Opinion → Reason → ___ → Conclusion.', options: ['Example', 'Question', 'Greeting'], answer: 0,
      explain: 'Opinion + Reason + Example + Conclusion is the core B2 argument model from Chapter 66.' },
    { q: 'Which sentence correctly forms the bekommen-Passiv?', options: ['Ich bekomme das Geschenk geschenkt.', 'Ich werde das Geschenk geschenkt.', 'Ich bin das Geschenk geschenkt.'], answer: 0,
      explain: 'bekommen-Passiv: bekommen + Partizip II, with the recipient as subject.' },
    { q: 'What replaces the subject in the "unpersönliches Passiv"?', options: ['Nothing — "es" is a placeholder or is dropped', 'The direct object', 'The indirect object'], answer: 0,
      explain: 'Unpersönliches Passiv has no real grammatical subject; "es" is only a placeholder in first position.' },
    { q: 'Which sentence uses indirekte Rede (reported speech) correctly at B2?', options: ['Sie sagte, sie sei krank.', 'Sie sagte, sie ist krank.', 'Sie sagte, sie war krank gewesen.'], answer: 0,
      explain: 'Reported speech uses Konjunktiv I ("sei") to mark the statement as someone else\'s claim.' }
  ],

  // ---------- Summary / Final Readiness Report ----------
  takeaways: [
    { c: 'r-summary', html: 'This chapter introduced no new grammar and no new vocabulary — it integrated everything from Chapters 1–68 into one Goethe-style mock examination.' },
    { c: 'r-open', html: 'The Goethe Examination Workflow: Reading → Understanding → Listening → Speaking → Writing → Review → Reflection → Exam Ready.' },
    { c: 'r-close', html: 'Certificate bands: 95–100% Outstanding B2 · 90–94% Exam Ready · 80–89% Very Good · 70–79% Ready with Minor Revision · below 70% Recommended Revision.' }
  ],
  revisionTips: [
    'Re-read the Common Final Mistakes table and test yourself on each pair (Passiv tense forms, Konjunktiv I vs. Indikativ, dessen/deren, register consistency, trotzdem vs. obwohl).',
    'Time yourself on one full Lesen + Hören section using the fifteen-minutes-per-part rule from the story dialogue.',
    'Write one formal email and one discussion essay under real exam time limits, then self-check against the marking rubric described above.',
    'Run through the Redemittel from Chapter 68 out loud once more before your Sprechen exam — fluency comes from automatic recall, not translation.'
  ]
};

window.CHAPTER = CHAPTER;
