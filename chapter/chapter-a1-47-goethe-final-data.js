/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 5 · Chapter 47 (FINALE)
   "Goethe A1 Final"  (the capstone — full A1 exam prep)
   Vocabulary source: uploaded chapter-47 word list (33 words).
   Theme = exam day & graduation. Recycles the ENTIRE A1 course.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-47-goethe-final',
  phase: 'A1 · Phase 5',
  number: 47,
  title: 'Goethe A1 Final',
  titleEn: 'The A1 Finale',
  description: 'The last chapter. Everything from Chapters 1\u201346 comes together for the real Goethe-Zertifikat A1 \u2014 the exam structure, study strategies, a full grammar and vocabulary checklist, and a final mock. Then the story ends where it began: in Frau Weber\u2019s classroom.',
  xp: 250,
  time: 50,
  difficulty: 'Final',
  nextChapter: { number: 1, title: 'Genitiv: Name + s', titleEn: 'Possession with Names' , href: 'chapter-a2-1-genitiv.html' },

  prevChapter: { number: 46, title: 'Zeitangaben mit Dativ', titleEn: 'Time Expressions', href: 'chapter-a1-46-zeitangaben.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Exam day. Henrike and Timo wait nervously outside the Prüfungsraum, quizzing each other one last time. Then they go in — and a week later, both have news: Goethe A1 certificates. The end of the beginning.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'The whole A1 course, recycled in one final scene'
    ],
    scene: 'Pr\u00fcfungstag \u2014 vor dem Pr\u00fcfungsraum, Berlin',
    femaleSpeakers: ['Henrike'],
    dialogue: [
      { speaker: 'Henrike', tokens: [
        { w: 'Morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Test', role: 'r-subject', en: 'test', hi: 'परीक्षा', pron: 'test', type: 'Noun · masc.' },
        { w: '.', plain: true },
        { w: 'Hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Tipp', role: 'r-akkusativ', en: 'tip', hi: 'सुझाव', pron: 'tip', type: 'Noun · masc.', why: 'der Tipp (this chapter).', ex: 'Hast du einen Tipp?', exEn: 'Do you have a tip?' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मेरे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: '?', plain: true }
      ], en: 'Tomorrow is the test. Do you have a tip for me?', hi: 'Kal test hai. Kya tumhaare paas mere liye koi tip hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Mach', role: 'r-verb', en: 'make', hi: 'बनाओ', pron: 'makh', type: 'Verb · imperative' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Liste', role: 'r-akkusativ', en: 'list', hi: 'सूची', pron: 'LIS-tuh', type: 'Noun · fem.', why: 'die Liste (this chapter).', ex: 'Mach eine Liste!', exEn: 'Make a list!' },
        { w: '.', plain: true },
        { w: 'Lerne', role: 'r-verb', en: 'learn', hi: 'सीखो', pron: 'LAIR-nuh', type: 'Verb · imperative' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Wörter', role: 'r-akkusativ', en: 'words', hi: 'शब्द', pron: 'VÖR-ter', type: 'Noun · plural' },
        { w: 'auswendig', role: 'r-adverb', en: 'by heart', hi: 'ज़बानी', pron: 'ows-VEN-dikh', type: 'Adverb', why: 'auswendig lernen = to learn by heart (this chapter).', ex: 'Lerne die Wörter auswendig!', exEn: 'Learn the words by heart!' },
        { w: '.', plain: true }
      ], en: 'Yes! Make a list. Learn the words by heart.', hi: 'Haan! Ek list banao. Shabd zabani seekho.' },
      { speaker: 'Henrike', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'mache', role: 'r-verb', en: 'do', hi: 'करती हूँ', pron: 'MA-khuh', type: 'Verb · machen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mache', role: 'r-verb', en: 'make', hi: 'करती हूँ', pron: 'MA-khuh', type: 'Verb · machen (ich)' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: 'Fehler', role: 'r-akkusativ', en: 'mistakes', hi: 'ग़लतियाँ', pron: 'FAY-ler', type: 'Noun · plural', why: 'der Fehler (this chapter).', ex: 'Ich mache Fehler.', exEn: 'I make mistakes.' },
        { w: 'bei', role: 'r-preposition', en: 'with', hi: 'में', pron: 'by', type: 'Preposition' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Grammatik', role: 'r-dativ', en: 'grammar (dat.)', hi: 'व्याकरण', pron: 'gra-MA-tik', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'I already do that. But I always make mistakes with grammar.', hi: 'Main yeh pehle hi karti hoon. Par grammar mein hamesha galtiyaan karti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Kein', role: 'r-negation', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Negation' },
        { w: 'Problem', role: 'r-object', en: 'problem', hi: 'समस्या', pron: 'pro-BLAYM', type: 'Noun · neut.' },
        { w: '!', plain: true },
        { w: 'Übe', role: 'r-verb', en: 'practise', hi: 'अभ्यास करो', pron: 'Ü-buh', type: 'Verb · imperative' },
        { w: 'jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', pron: 'YAY-den', type: 'Determiner' },
        { w: 'Tag', role: 'r-akkusativ', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.' },
        { w: 'eine', role: 'r-akkusativ', en: 'one (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Übung', role: 'r-akkusativ', en: 'exercise', hi: 'अभ्यास', pron: 'Ü-bung', type: 'Noun · fem.', why: 'die Übung (this chapter).', ex: 'Übe eine Übung!', exEn: 'Practise one exercise!' },
        { w: '.', plain: true }
      ], en: 'No problem! Practise one exercise every day.', hi: 'Koi baat nahi! Har din ek exercise practice karo.' },
      { speaker: 'Henrike', tokens: [
        { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Idee', role: 'r-subject', en: 'idea', hi: 'विचार', pron: 'i-DAY', type: 'Noun · fem.' },
        { w: '!', plain: true },
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'dein', role: 'r-subject', en: 'your', hi: 'तुम्हारा', pron: 'dine', type: 'Possessive' },
        { w: 'Ziel', role: 'r-subject', en: 'goal', hi: 'लक्ष्य', pron: 'tseel', type: 'Noun · neut.', why: 'das Ziel (this chapter).', ex: 'Was ist dein Ziel?', exEn: 'What is your goal?' },
        { w: '?', plain: true }
      ], en: 'Good idea! What is your goal?', hi: 'Achha vichaar! Tumhaara lakshya kya hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Ziel', role: 'r-subject', en: 'goal', hi: 'लक्ष्य', pron: 'tseel', type: 'Noun · neut.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'ein', role: 'r-subject', en: 'a', hi: 'एक', pron: 'ine', type: 'Article · neut.' },
        { w: 'gutes', role: 'r-subject', en: 'good', hi: 'अच्छा', pron: 'GOO-tes', type: 'Adjective' },
        { w: 'Ergebnis', role: 'r-subject', en: 'result', hi: 'परिणाम', pron: 'er-GAYP-nis', type: 'Noun · neut.', why: 'das Ergebnis (this chapter).', ex: 'Mein Ziel ist ein gutes Ergebnis.', exEn: 'My goal is a good result.' },
        { w: '.', plain: true }
      ], en: 'My goal is a good result.', hi: 'Mera lakshya ek achha result hai.' },
      { speaker: 'Henrike', tokens: [
        { w: 'Meins', role: 'r-subject', en: 'mine', hi: 'मेरा', pron: 'mines', type: 'Pronoun' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'schaffen', role: 'r-verb', en: 'will manage', hi: 'कर लेंगे', pron: 'SHA-fen', type: 'Verb · schaffen (wir)', why: 'schaffen = to manage / pull off (this chapter).', ex: 'Wir schaffen das!', exEn: 'We will manage this!' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: '!', plain: true }
      ], en: 'Mine too! We will manage this!', hi: 'Mera bhi! Hum yeh kar lenge!' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Klar', role: 'r-adverb', en: 'sure', hi: 'बिल्कुल', pron: 'klahr', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-ben', type: 'Verb · haben (wir)' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत कुछ', pron: 'feel', type: 'Adverb · quantity' },
        { w: 'gelernt', role: 'r-verb', en: 'learned', hi: 'सीखा', pron: 'ge-LAIRNT', type: 'Partizip II · Satzende', why: 'lernen → gelernt (recycled).' },
        { w: '.', plain: true }
      ], en: 'Sure! We have learned a lot.', hi: 'Bilkul! Humne bahut kuch seekha hai.' },
      { speaker: 'Henrike', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition' },
        { w: 'Anfang', role: 'r-dativ', en: 'beginning (dat.)', hi: 'शुरुआत', pron: 'AN-fang', type: 'Noun · masc. dat.' },
        { w: 'bis', role: 'r-preposition', en: 'to', hi: 'तक', pron: 'bis', type: 'Preposition' },
        { w: 'Ende', role: 'r-akkusativ', en: 'end', hi: 'अंत', pron: 'EN-duh', type: 'Noun · neut.' },
        { w: '!', plain: true },
        { w: 'Viel', role: 'r-akkusativ', en: 'much', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'Glück', role: 'r-akkusativ', en: 'luck', hi: 'किस्मत', pron: 'glük', type: 'Noun · neut.', why: 'Viel Glück! = good luck!' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '!', plain: true }
      ], en: 'Yes, from beginning to end! Good luck tomorrow!', hi: 'Haan, shuru se ant tak! Kal ke liye shubhkaamnaayein!' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dir', role: 'r-dativ', en: 'you (too)', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Bis', role: 'r-subject', en: 'until', hi: 'तक', pron: 'bis', type: 'Phrase (part)' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '!', plain: true }
      ], en: 'You too! See you tomorrow!', hi: 'Tumhe bhi! Kal milte hain!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This is the finish line. The real <strong>Goethe-Zertifikat A1</strong> has four parts \u2014 <span class="de r-object">Lesen</span> (reading), <span class="de r-object">H\u00f6ren</span> (listening), <span class="de r-object">Schreiben</span> (writing) and <span class="de r-object">Sprechen</span> (speaking). You\u2019ve met every grammar point and theme it tests. This chapter is one last revision and a full mock \u2014 then you\u2019re ready.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'This is the FINAL Goethe-Zertifikat A1 preparation chapter, revising ALL of A1 (Chapters 1\u201346). The writing task mirrors the real exam (Schreiben): a short message / email (about 30 words) covering 3 given points, with the right register and the date/time/place where relevant. ' +
    'The learner wrote an exam-style message below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Message frame: informal "Liebe/Lieber …,/Liebe Grüße"; formal "Sehr geehrte/r …,/Mit freundlichen Grüßen". Keep the register consistent. After the salutation comma the body starts lowercase.\n' +
    '- Verb-second rule in main clauses; weil/dass send the verb to the end; modal + infinitive at the end; separable prefixes to the end; Perfekt = haben/sein + Partizip II at the end (movement/change → sein).\n' +
    '- Cases: accusative for direct objects and movement (Wohin?), dative for indirect objects, dative verbs (helfen, danken, gefallen, gehören, schmecken), dative prepositions (aus, bei, mit, nach, seit, von, zu) and location (Wo?). Two-way prepositions switch case by Wohin?/Wo?.\n' +
    '- Time phrases: am + day/part of day, im + month/season, um + clock, seit/vor/nach + dative.\n' +
    '- Pronouns: accusative mich/dich/ihn/sie/es/uns/euch; dative mir/dir/ihm/ihr/uns/euch/ihnen.\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Exam check:</b> one sentence on whether this would score full marks on the Goethe A1 Schreiben task (all 3 points covered, right register).</p>\n' +
    'Keep it under 140 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You\u2019re ready. That\u2019s the whole of A1 \u2014 sign up for the real Goethe-Zertifikat A1, and then begin <span class="de">Klarweg A2</span>!',
    mid: 'Almost there. Re-do the weakest revision card and one mock task, then book your exam.',
    low: 'Close the gaps first: revisit the Perfekt, the cases (Akkusativ/Dativ) and word order, then retake this final mock.'
  },

  parserSentence: [
    { w: 'Wir', role: 'r-subject' }, { w: 'haben', role: 'r-verb' },
    { w: 'die', role: 'r-akkusativ' }, { w: 'Pr\u00fcfung', role: 'r-object' },
    { w: 'bestanden', role: 'r-verb' }, { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the Goethe A1 exam structure and how to revise for it.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'The finale: exam day, the result, and the certificates \u2014 all of A1 recycled.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the exam-prep words: Aufgabe, Strategie, Tipp, Fehler, Stichpunkt and more.' },
    { id: 'grammar',    label: 'A1 Grammar Review', tag: 'core',
      objective: 'One-card-per-topic revision of the whole A1 grammar map.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'A Goethe-style reading task with comprehension questions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'A Goethe-style listening task \u2014 follow and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'The three Goethe A1 speaking parts: introduce, ask/answer, plan together.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write the Goethe A1 message task to the 3-point brief, with a model answer.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Mixed final revision across the whole course with instant feedback.' },
    { id: 'quiz',       label: 'Final Mock', tag: 'assess',
      objective: 'A comprehensive A1 mock. Pass to bank the full 250 XP and finish the course.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Your A1 checklist and last-minute exam tips.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download the full A1 revision pack and a mock exam.' }
  ],

  resources: [
    { icon: '📋', title: 'Goethe A1 Mock Exam PDF',
      desc: 'A complete printable Goethe-Zertifikat A1 mock: Lesen, Hören, Schreiben and Sprechen, with an answer key.',
      pdfUrl: '/pdfs/homework.pdf', size: '20 pages', kind: 'Assessment' },
    { icon: '📚', title: 'A1 Vocabulary Pack PDF',
      desc: 'The full A1 word list grouped by theme \u2014 family, food, work, travel, time, home and more.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '24 pages', kind: 'Vocabulary' },
    { icon: '📖', title: 'A1 Grammar Map PDF',
      desc: 'Every A1 grammar point on one sheet each: articles, cases, pronouns, Perfekt, word order, prepositions.',
      pdfUrl: '/pdfs/grammar.pdf', size: '16 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Lesen · Hören', text: 'Handle reading & listening tasks' },
    { de: 'Schreiben', text: 'Write the 3-point message' },
    { de: 'Sprechen', text: 'Pass the three speaking parts' },
    { de: 'A1 Grammatik', text: 'Use the whole A1 grammar map' },
    { de: 'Bestanden!', text: 'Be ready for the real exam' }
  ],

  // ---------- Vocabulary (33 words) ----------
  vocab: [
    // ===== Active Support =====
    { de: 'auswendig', pos: 'adverb', en: 'by heart', hi: 'याद, कंठस्थ', ex: 'Ich lerne die Wörter auswendig.', exEn: 'I learn the words by heart.' },
    { de: 'Fehler', art: 'der', gender: 'm', plural: 'Fehler', pos: 'noun', en: 'mistake', hi: 'गलती', ex: 'Ich mache weniger Fehler.', exEn: 'I make fewer mistakes.' },
    { de: 'Punkt', art: 'der', gender: 'm', plural: 'Punkte', pos: 'noun', en: 'point (mark)', hi: 'अंक', ex: 'Ich brauche mehr Punkte.', exEn: 'I need more points.' },
    { de: 'Test', art: 'der', gender: 'm', plural: 'Tests', pos: 'noun', en: 'test', hi: 'परीक्षा', ex: 'Der Test war leicht.', exEn: 'The test was easy.' },
    { de: 'Tipp', art: 'der', gender: 'm', plural: 'Tipps', pos: 'noun', en: 'tip', hi: 'सुझाव', ex: 'Das ist ein guter Tipp.', exEn: 'That is a good tip.' },
    { de: 'Aufgabe', art: 'die', gender: 'f', plural: 'Aufgaben', pos: 'noun', en: 'task', hi: 'कार्य', ex: 'Lies jede Aufgabe genau.', exEn: 'Read every task carefully.' },
    { de: 'Liste', art: 'die', gender: 'f', plural: 'Listen', pos: 'noun', en: 'list', hi: 'सूची', ex: 'Ich mache eine Liste.', exEn: 'I make a list.' },
    { de: 'Strategie', art: 'die', gender: 'f', plural: 'Strategien', pos: 'noun', en: 'strategy', hi: 'रणनीति', ex: 'Hast du eine Strategie?', exEn: 'Do you have a strategy?' },
    { de: 'Übung', art: 'die', gender: 'f', plural: 'Übungen', pos: 'noun', en: 'exercise', hi: 'अभ्यास', ex: 'Diese Übung ist wichtig.', exEn: 'This exercise is important.' },
    // ===== Passive =====
    { de: 'ausdrücken', pos: 'verb', en: 'to express', hi: 'व्यक्त करना', ex: 'Ich kann das gut ausdrücken.', exEn: 'I can express that well.', conj: { praesens: 'drückt aus', praeteritum: 'drückte aus', perfekt: 'hat ausgedrückt' } },
    { de: 'Deutsche', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'German (the language)', hi: 'जर्मन भाषा', ex: 'Das Deutsche ist nicht leicht.', exEn: 'German is not easy.' },
    { de: 'Ergebnis', art: 'das', gender: 'n', plural: 'Ergebnisse', pos: 'noun', en: 'result', hi: 'परिणाम', ex: 'Das Ergebnis ist gut.', exEn: 'The result is good.' },
    { de: 'Ziel', art: 'das', gender: 'n', plural: 'Ziele', pos: 'noun', en: 'goal', hi: 'लक्ष्य', ex: 'Mein Ziel ist Goethe A1.', exEn: 'My goal is Goethe A1.' },
    { de: 'dazugehören', pos: 'verb', en: 'to belong to', hi: 'का हिस्सा होना', ex: 'Übung gehört dazu.', exEn: 'Practice is part of it.', conj: { praesens: 'gehört dazu', praeteritum: 'gehörte dazu', perfekt: 'hat dazugehört' } },
    { de: 'Abschnitt', art: 'der', gender: 'm', plural: 'Abschnitte', pos: 'noun', en: 'section', hi: 'अनुभाग', ex: 'Lies den ersten Abschnitt.', exEn: 'Read the first section.' },
    { de: 'Anhang', art: 'der', gender: 'm', plural: 'Anhänge', pos: 'noun', en: 'appendix, attachment', hi: 'परिशिष्ट', ex: 'Der Anhang ist am Ende.', exEn: 'The appendix is at the end.' },
    { de: 'Englisch-Test', art: 'der', gender: 'm', plural: 'Englisch-Tests', pos: 'noun', en: 'English test', hi: 'अंग्रेज़ी परीक्षा', ex: 'Der Englisch-Test ist morgen.', exEn: 'The English test is tomorrow.' },
    { de: 'Mathe-Test', art: 'der', gender: 'm', plural: 'Mathe-Tests', pos: 'noun', en: 'maths test', hi: 'गणित परीक्षा', ex: 'Der Mathe-Test war schwer.', exEn: 'The maths test was hard.' },
    { de: 'Start', art: 'der', gender: 'm', plural: 'Starts', pos: 'noun', en: 'start', hi: 'शुरुआत', ex: 'Der Start ist um neun.', exEn: 'The start is at nine.' },
    { de: 'Überschrift', art: 'die', gender: 'f', plural: 'Überschriften', pos: 'noun', en: 'heading, title', hi: 'शीर्षक', ex: 'Lies zuerst die Überschrift.', exEn: 'Read the heading first.' },
    { de: 'erschließen', pos: 'verb', en: 'to deduce, work out', hi: 'अनुमान लगाना', ex: 'Ich erschließe das Wort aus dem Kontext.', exEn: 'I work the word out from context.', conj: { praesens: 'erschließt', praeteritum: 'erschloss', perfekt: 'hat erschlossen' } },
    { de: 'formulieren', pos: 'verb', en: 'to phrase, formulate', hi: 'शब्दों में ढालना', ex: 'Formuliere den Satz neu.', exEn: 'Rephrase the sentence.', conj: { praesens: 'formuliert', praeteritum: 'formulierte', perfekt: 'hat formuliert' } },
    { de: 'korrigieren', pos: 'verb', en: 'to correct', hi: 'सुधारना', ex: 'Korrigiere deine Fehler.', exEn: 'Correct your mistakes.', conj: { praesens: 'korrigiert', praeteritum: 'korrigierte', perfekt: 'hat korrigiert' } },
    { de: 'weiterhören', pos: 'verb', en: 'to keep listening', hi: 'सुनते रहना', ex: 'Hör einfach weiter!', exEn: 'Just keep listening!', conj: { praesens: 'hört weiter', praeteritum: 'hörte weiter', perfekt: 'hat weitergehört' } },
    { de: 'wiedergeben', pos: 'verb', en: 'to reproduce, retell', hi: 'दोबारा बताना', ex: 'Gib den Text mit eigenen Worten wieder.', exEn: 'Retell the text in your own words.', conj: { praesens: 'gibt wieder', praeteritum: 'gab wieder', perfekt: 'hat wiedergegeben' } },
    { de: 'zerlegen', pos: 'verb', en: 'to break down', hi: 'टुकड़ों में बाँटना', ex: 'Zerlege das lange Wort.', exEn: 'Break down the long word.', conj: { praesens: 'zerlegt', praeteritum: 'zerlegte', perfekt: 'hat zerlegt' } },
    // ===== Reference / System =====
    { de: 'Kompositum', art: 'das', gender: 'n', plural: 'Komposita', pos: 'noun', en: 'compound word', hi: 'समास शब्द', ex: '"Hausaufgabe" ist ein Kompositum.', exEn: '"Hausaufgabe" is a compound word.' },
    { de: 'Ausdruck', art: 'der', gender: 'm', plural: 'Ausdrücke', pos: 'noun', en: 'expression, phrase', hi: 'अभिव्यक्ति', ex: 'Das ist ein nützlicher Ausdruck.', exEn: 'That is a useful expression.' },
    { de: 'Kontext', art: 'der', gender: 'm', plural: 'Kontexte', pos: 'noun', en: 'context', hi: 'संदर्भ', ex: 'Verstehe das Wort im Kontext.', exEn: 'Understand the word in context.' },
    { de: 'Stichpunkt', art: 'der', gender: 'm', plural: 'Stichpunkte', pos: 'noun', en: 'bullet point', hi: 'मुख्य बिंदु', ex: 'Ich schreibe Stichpunkte.', exEn: 'I write bullet points.' },
    { de: 'Textbaustein', art: 'der', gender: 'm', plural: 'Textbausteine', pos: 'noun', en: 'text block, set phrase', hi: 'तैयार वाक्यांश', ex: 'Lerne ein paar Textbausteine.', exEn: 'Learn a few set phrases.' },
    { de: 'Wortliste', art: 'die', gender: 'f', plural: 'Wortlisten', pos: 'noun', en: 'word list', hi: 'शब्द सूची', ex: 'Die Wortliste ist im Anhang.', exEn: 'The word list is in the appendix.' }
  ],

  // ---------- A1 Grammar Review (the whole map, application-focused) ----------
  grammar: [
    {
      title: 'Cases: Nominativ · Akkusativ · Dativ',
      goldenRule: 'Three questions decide everything: <b>Wer?</b> → Nominativ · <b>Wen?/Was?</b> → Akkusativ · <b>Wem?</b> → Dativ.',
      memoryTrick: 'Masculine hi sabse zyada badalta hai: <b>der → den → dem</b>. Feminine, neuter aur plural bahut kam badalte hain.',
      body: [
        'The backbone of A1. Three cases, and the article changes show which job a noun is doing.'
      ],
      table: {
        head: ['Case', 'Job', 'Example'],
        rows: [
          ['Nominativ', 'subject (Wer?)', '<span class="de">Der Mann liest.</span>'],
          ['Akkusativ', 'direct object (Wen? Was?)', '<span class="de">Ich sehe den Mann.</span>'],
          ['Dativ', 'receiver (Wem?)', '<span class="de">Ich helfe dem Mann.</span>'],
          ['masc. shift', 'der → den → dem', '<span class="de">der/den/dem Mann</span>']
        ]
      },
      note: 'Only the <b>masculine</b> changes the most: der → den (acc.) → dem (dat.). Dative plural adds <b>-n</b>: mit den Kindern. Quick rule: <b>Wer?</b> = Nominativ, <b>Wen?/Was?</b> = Akkusativ, <b>Wem?</b> = Dativ. (<b>Wohin?</b> vs <b>Wo?</b> is a different question — it decides the case only after a two-way preposition, see the fourth card.)',
      hinglish: 'Teen case, aur teen sawaal: <b>Wer?</b> → Nominativ (subject), <b>Wen?/Was?</b> → Akkusativ (direct object), <b>Wem?</b> → Dativ (paane waala). (<b>Wohin?/Wo?</b> alag sawaal hai — woh sirf two-way preposition ke baad case tay karta hai, chauthe card mein.) Masculine sabse zyada badalta hai: der → den → dem. Dative plural mein <b>-n</b>.'
    },
    {
      title: 'The past: Perfekt & Präteritum',
      body: [
        'Tell any A1 story with the Perfekt, and use war/hatte for "was/had".'
      ],
      table: {
        head: ['Form', 'Rule', 'Example'],
        rows: [
          ['Perfekt (haben)', 'most verbs', '<span class="de">Ich habe gelernt.</span>'],
          ['Perfekt (sein)', 'movement/change', '<span class="de">Ich bin gefahren.</span>'],
          ['Partizip place', 'at the END', '<span class="de">… habe Deutsch gelernt.</span>'],
          ['Präteritum', 'sein/haben only', '<span class="de">Ich war müde. Ich hatte Zeit.</span>']
        ]
      },
      note: 'Perfekt = helper (haben/sein) in position 2 + Partizip II at the end. Movement/change → <b>sein</b>; otherwise <b>haben</b>. For "was/had" use <b>war/hatte</b>. Separable verbs: <b>ge</b> in the middle (angerufen); -ieren/inseparable: <b>no ge-</b> (studiert, bekommen).',
      hinglish: 'Past: Perfekt (haben/sein + Partizip end mein); movement → sein, baaki haben. "tha" = war, "ke paas tha" = hatte. Separable: ge beech mein; -ieren/inseparable: no ge-.'
    },
    {
      title: 'Word order & connectors',
      goldenRule: 'In the exam, check the verb before you check the connector: after <b>und/aber/oder/denn</b> it must not move, after <b>weil</b> it must sit at the very end, and after <b>deshalb</b> it must come before the subject.',
      memoryTrick: 'Likhne ke baad ek baar sirf verb dekho: <b>weil</b> ke baad end mein, <b>deshalb</b> ke baad subject se pehle, <b>und/aber/oder/denn</b> ke baad jahan tha wahin.',
      recap: [
        '<b>und, aber, oder, denn</b> → normal order.',
        '<b>weil</b> → conjugated verb at the very end.',
        '<b>deshalb</b> → verb before the subject.'
      ],
      body: [
        'German word order runs on one rule, with three connector behaviours.'
      ],
      table: {
        head: ['Pattern', 'Verb goes…', 'Example'],
        rows: [
          ['main clause', 'position 2', '<span class="de">Heute lerne ich Deutsch.</span>'],
          ['und/aber/oder/denn', 'position 2', '<span class="de">Ich lerne, aber es ist schwer.</span>'],
          ['weil/dass', 'to the END', '<span class="de">…, weil es wichtig ist.</span>'],
          ['modal / Perfekt', '2nd verb at END', '<span class="de">Ich muss heute lernen.</span>']
        ]
      },
      note: 'The conjugated verb is always <b>position 2</b> in a main clause. <b>weil/dass</b> push the verb to the end; <b>deshalb</b> puts it before the subject. A modal or Perfekt sends the second verb-part to the very end.',
      hinglish: 'Hauptsatz mein conjugated verb <b>position 2</b> par. <b>weil/dass</b> → verb end mein; <b>deshalb</b> → verb subject se pehle. Modal/Perfekt → doosra verb-part end mein.'
    },
    {
      title: 'Prepositions & pronouns',
      body: [
        'The case-drivers and the words that replace nouns.'
      ],
      table: {
        head: ['Group', 'Case', 'Example'],
        rows: [
          ['aus, bei, mit, nach, seit, von, zu', 'always Dativ', '<span class="de">mit dem Bus</span>'],
          ['durch, für, ohne, gegen, um', 'always Akkusativ', '<span class="de">für dich</span>'],
          ['in, an, auf, über…', 'Wohin?=Akk / Wo?=Dat', '<span class="de">auf den / dem Tisch</span>'],
          ['pronouns', 'acc. / dat.', '<span class="de">ihn / ihm, sie / ihr</span>']
        ]
      },
      note: 'Memorise the always-Dativ set (aus, bei, mit, nach, seit, von, zu) and the always-Akkusativ set (durch, für, ohne, gegen, um). Two-way prepositions switch by Wohin?/Wo?. Pronouns: acc. mich/dich/ihn/sie/es/uns/euch; dat. mir/dir/ihm/ihr/uns/euch/ihnen.',
      hinglish: 'Always-Dativ: aus, bei, mit, nach, seit, von, zu. Always-Akkusativ: durch, für, ohne, gegen, um. Two-way: Wohin?=Akk, Wo?=Dat. Pronoun: acc. ihn/sie/es, dat. ihm/ihr/ihnen.'
    },
    {
      title: 'Final exam tips',
      body: [ 'Four habits that save marks on the real Goethe A1.' ],
      mistakes: [
        { wrong: '(rushing) sofort antworten', right: 'zuerst die Überschrift und Aufgabe lesen', why: 'Read the heading and the task first \u2014 it tells you what to look for.' },
        { wrong: 'ein langes Wort = Panik', right: 'ein Kompositum zerlegen: Haus + Aufgabe', why: 'Break compound words into parts to guess the meaning.' },
        { wrong: 'beim Hören aufgeben', right: 'einfach weiterhören', why: 'If you miss something while listening, keep going \u2014 the next answer is coming.' },
        { wrong: 'Schreiben ohne Plan', right: 'erst Stichpunkte, dann schreiben, dann korrigieren', why: 'Bullet points → write → check covers all 3 points and catches errors.' }
      ],
      hinglish: 'Char tips exam mein kaam aate hain. Pehle <b>Überschrift</b> aur <b>Aufgabe</b> dhyaan se padho. Agar koi lamba shabd mile to use tod do — jaise <b>Haus</b> aur <b>Aufgabe</b>. <b>Hören</b> mein kuch chhoot jaaye to rukna nahi, aage sunte raho. Aur <b>Schreiben</b> mein pehle Stichpunkte banao, phir likho, aur sabse last mein ek baar check kar lo.'
    }
  ],

  // ---------- Reading passage (a study-tips info text, clickable) ----------
  reading: {
    title: 'Tipps für die Pr\u00fcfung',
    titleEn: 'Tips for the exam',
    tokens: [
      { w: 'Die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Pr\u00fcfung', role: 'r-subject', en: 'exam', hi: 'परीक्षा', pron: 'PRÜ-fung', type: 'Noun · fem.', why: 'die Prüfung (recycled — Perfekt mit haben).', ex: 'Die Prüfung hat vier Teile.', exEn: 'The exam has four parts.' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben', why: 'haben (recycled — Akkusativ).', ex: 'Die Prüfung hat vier Teile.', exEn: 'The exam has four parts.' },
      { w: 'vier', role: 'r-akkusativ', en: 'four', hi: 'चार', pron: 'feer', type: 'Number', why: 'vier = 4 (recycled — Zahlen).', ex: 'vier Teile', exEn: 'four parts' },
      { w: 'Teile', role: 'r-object', en: 'parts', hi: 'भाग', pron: 'TY-luh', type: 'Noun · plural', why: 'der Teil → die Teile (recycled — Partizip mit Präfix).', ex: 'vier Teile', exEn: 'four parts' },
      { w: '.', plain: true },
      { w: 'Beim', role: 'r-preposition', en: 'while', hi: 'के दौरान', pron: 'bime', type: 'Preposition + dat.', why: 'bei + dem → beim (recycled — Ortsangaben & Kurzformen).', ex: 'beim Lesen', exEn: 'while reading' },
      { w: 'Lesen', role: 'r-object', en: 'reading', hi: 'पढ़ने', pron: 'LAY-zen', type: 'Noun · neut.', why: 'lesen as a noun (recycled — Verben).', ex: 'beim Lesen', exEn: 'while reading' },
      { w: 'lies', role: 'r-verb', en: 'read', hi: 'पढ़ो', pron: 'lees', type: 'Imperativ · du', why: 'lesen → Lies! (du-imperative) (recycled — Imperativ & Modalverben 2).', ex: 'Lies zuerst die Überschrift!', exEn: 'Read the heading first!' },
      { w: 'zuerst', role: 'r-adverb', en: 'first', hi: 'पहले', pron: 'tsu-AIRST', type: 'Adverb', why: 'zuerst (recycled — Goethe Mini 2).', ex: 'zuerst die Überschrift', exEn: 'first the heading' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · acc.' },
      { w: '\u00dcberschrift', role: 'r-object', en: 'heading', hi: 'शीर्षक', pron: 'Ü-ber-shrift', type: 'Noun · fem.', why: 'die Überschrift (this chapter).', ex: 'die Überschrift lesen', exEn: 'read the heading' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'r-subject', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article' },
      { w: 'langes', role: 'r-adjective', en: 'long', hi: 'लंबा', pron: 'LANG-es', type: 'Adjective' },
      { w: 'Wort', role: 'r-subject', en: 'word', hi: 'शब्द', pron: 'vort', type: 'Noun · neut.', why: 'das Wort (recycled).', ex: 'ein langes Wort', exEn: 'a long word' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', pron: 'oft', type: 'Adverb', why: 'oft (recycled — Berufe).', ex: 'oft ein Kompositum', exEn: 'often a compound' },
      { w: 'ein', role: 'r-subject', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article' },
      { w: 'Kompositum', role: 'r-object', en: 'compound word', hi: 'समास शब्द', pron: 'kom-PO-zi-tum', type: 'Noun · neut.', why: 'das Kompositum (this chapter).', ex: 'ein Kompositum', exEn: 'a compound word' },
      { w: ':', plain: true },
      { w: 'zerlege', role: 'r-verb', en: 'break down', hi: 'टुकड़ों में बाँटो', pron: 'tser-LAY-guh', type: 'Imperativ · du', why: 'zerlegen (this chapter).', ex: 'Zerlege das Wort!', exEn: 'Break down the word!' },
      { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'इसे', pron: 'es', type: 'Pronoun · acc.', why: 'das Wort → es (recycled — Akkusativpronomen).', ex: 'Zerlege es!', exEn: 'Break it down!' },
      { w: 'in', role: 'r-akkusativ', en: 'into', hi: 'में', pron: 'in', type: 'Preposition' },
      { w: 'Teile', role: 'r-object', en: 'parts', hi: 'भाग', pron: 'TY-luh', type: 'Noun · plural', why: 'der Teil → die Teile.', ex: 'in Teile zerlegen', exEn: 'break into parts' },
      { w: '.', plain: true },
      { w: 'Beim', role: 'r-preposition', en: 'while', hi: 'के दौरान', pron: 'bime', type: 'Preposition + dat.', why: 'beim (recycled — Ortsangaben & Kurzformen).', ex: 'beim Hören', exEn: 'while listening' },
      { w: 'H\u00f6ren', role: 'r-object', en: 'listening', hi: 'सुनने', pron: 'HÖ-ren', type: 'Noun · neut.', why: 'hören as a noun (recycled — Verben).', ex: 'beim Hören', exEn: 'while listening' },
      { w: 'h\u00f6r', role: 'r-verb', en: 'keep', hi: 'सुनते', pron: 'hör', type: 'Imperativ · du', why: 'weiterhören → Hör … weiter! (this chapter).', ex: 'Hör einfach weiter!', exEn: 'Just keep listening!' },
      { w: 'einfach', role: 'r-adverb', en: 'simply', hi: 'बस', pron: 'INE-fakh', type: 'Adverb' },
      { w: 'weiter', role: 'r-verb', en: '(keep going)', hi: 'आगे', pron: 'VY-ter', type: 'Separable prefix', why: 'weiter from weiterhören (recycled — Trennbare Verben).', ex: 'Hör weiter!', exEn: 'Keep listening!' },
      { w: '.', plain: true },
      { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'und (recycled — Sätze verbinden).', ex: 'Und beim Schreiben …', exEn: 'And while writing …' },
      { w: 'beim', role: 'r-preposition', en: 'while', hi: 'के दौरान', pron: 'bime', type: 'Preposition + dat.' },
      { w: 'Schreiben', role: 'r-object', en: 'writing', hi: 'लिखने', pron: 'SHRY-ben', type: 'Noun · neut.', why: 'schreiben as a noun (recycled — Schreiben & Einladungen).', ex: 'beim Schreiben', exEn: 'while writing' },
      { w: 'mach', role: 'r-verb', en: 'make', hi: 'बनाओ', pron: 'makh', type: 'Imperativ · du', why: 'machen → Mach! (du-imperative) (recycled — Imperativ & Modalverben 2).', ex: 'Mach zuerst Stichpunkte!', exEn: 'Make bullet points first!' },
      { w: 'zuerst', role: 'r-adverb', en: 'first', hi: 'पहले', pron: 'tsu-AIRST', type: 'Adverb' },
      { w: 'Stichpunkte', role: 'r-object', en: 'bullet points', hi: 'मुख्य बिंदु', pron: 'SHTIKH-punk-tuh', type: 'Noun · plural', why: 'der Stichpunkt (this chapter).', ex: 'Stichpunkte machen', exEn: 'make bullet points' },
      { w: '.', plain: true },
      { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb', why: 'dann (recycled — Modalverben 1).', ex: 'Dann machst du weniger Fehler.', exEn: 'Then you make fewer mistakes.' },
      { w: 'machst', role: 'r-verb', en: 'make', hi: 'करोगे', pron: 'makhst', type: 'Verb · machen (du)', why: 'verb position 2 after dann (recycled — Satzposition).', ex: 'Dann machst du weniger Fehler.', exEn: 'Then you make fewer mistakes.' },
      { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
      { w: 'weniger', role: 'r-adverb', en: 'fewer', hi: 'कम', pron: 'VAY-ni-ger', type: 'Adverb' },
      { w: 'Fehler', role: 'r-object', en: 'mistakes', hi: 'गलतियाँ', pron: 'FAY-ler', type: 'Noun · plural', why: 'der Fehler (this chapter).', ex: 'weniger Fehler', exEn: 'fewer mistakes' },
      { w: '!', plain: true }
    ],
    translation: 'The exam has four parts. While reading, read the heading first. A long word is often a compound: break it into parts. While listening, just keep going. And while writing, make bullet points first. Then you\u2019ll make fewer mistakes!'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair — never invented.
    dialogue: [
      { id: 'A1_047_L001', speaker: 'Henrike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Herzlichen Glückwunsch! Du hast die Prüfung bestanden.', en: 'Congratulations! You passed the exam.' },
      { id: 'A1_047_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wirklich? Wie viele Punkte habe ich?', en: 'Really? How many points do I have?' },
      { id: 'A1_047_L003', speaker: 'Henrike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Du hast 85 Punkte von 100. Das ist sehr gut!', en: 'You have 85 points out of 100. That\'s very good!' },
      { id: 'A1_047_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und was war mein bestes Ergebnis?', en: 'And what was my best result?' },
      { id: 'A1_047_L005', speaker: 'Henrike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Das Hören. Beim Sprechen warst du auch sehr gut.', en: 'The listening. In speaking you were also very good.' },
      { id: 'A1_047_L006', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Vielen Dank für Ihre Hilfe, Henrike!', en: 'Many thanks for your help, Henrike!' },
      { id: 'A1_047_L007', speaker: 'Henrike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gern! Und jetzt kommt A2.', en: 'You\'re welcome! And now comes A2.' }
    ],
    transcript: 'Herzlichen Glückwunsch! Du hast die Prüfung bestanden. Wirklich? Wie viele Punkte habe ich? Du hast 85 Punkte von 100. Das ist sehr gut! Und was war mein bestes Ergebnis? Das Hören. Beim Sprechen warst du auch sehr gut. Vielen Dank für Ihre Hilfe, Henrike! Gern! Und jetzt kommt A2.',
    translation: 'Congratulations! You passed the exam. Really? How many points do I have? You have 85 points out of 100. That\'s very good! And what was my best result? The listening. In speaking you were also very good. Many thanks for your help, Henrike! You\'re welcome! And now comes A2.',
    tokens: [
      { w: 'Herzlichen' },
      { w: 'Glückwunsch' },
      { w: '!', plain: true },
      { w: 'Du' },
      { w: 'hast' },
      { w: 'die' },
      { w: 'Prüfung' },
      { w: 'bestanden' },
      { w: '.', plain: true },
      { w: 'Wirklich' },
      { w: '?', plain: true },
      { w: 'Wie' },
      { w: 'viele' },
      { w: 'Punkte' },
      { w: 'habe' },
      { w: 'ich' },
      { w: '?', plain: true },
      { w: 'Du' },
      { w: 'hast' },
      { w: '85', plain: true },
      { w: 'Punkte' },
      { w: 'von' },
      { w: '100', plain: true },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'ist' },
      { w: 'sehr' },
      { w: 'gut' },
      { w: '!', plain: true },
      { w: 'Und' },
      { w: 'was' },
      { w: 'war' },
      { w: 'mein' },
      { w: 'bestes' },
      { w: 'Ergebnis' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'Hören' },
      { w: '.', plain: true },
      { w: 'Beim' },
      { w: 'Sprechen' },
      { w: 'warst' },
      { w: 'du' },
      { w: 'auch' },
      { w: 'sehr' },
      { w: 'gut' },
      { w: '.', plain: true },
      { w: 'Vielen' },
      { w: 'Dank' },
      { w: 'für' },
      { w: 'Ihre' },
      { w: 'Hilfe' },
      { w: ',', plain: true },
      { w: 'Henrike' },
      { w: '!', plain: true },
      { w: 'Gern' },
      { w: '!', plain: true },
      { w: 'Und' },
      { w: 'jetzt' },
      { w: 'kommt' },
      { w: 'A2', plain: true },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie viele Punkte hat Timo bekommen?', qEn: 'How many points did Timo get?', options: ['58', '75', '85', '95'], optionsEn: ['58', '75', '85', '95'], answer: 2,
        explain: '"Du hast 85 Punkte von 100."' },
      { q: 'Welcher Teil war Timos bestes Ergebnis?', qEn: 'Which part was Timo\'s best result?', options: ['Lesen', 'Hören', 'Schreiben', 'Sprechen'], optionsEn: ['reading', 'listening', 'writing', 'speaking'], answer: 1,
        explain: '"Das Hören." — the listening was the best result.' },
      { q: 'Was kommt als Nächstes?', qEn: 'What comes next?', options: ['noch eine A1-Prüfung', 'A2', 'B1', 'eine Pause'], optionsEn: ['another A1 exam', 'A2', 'B1', 'a break'], answer: 1,
        explain: '"Und jetzt kommt A2."' }
    ]
  },

  // ---------- Speaking prompts (the three Goethe A1 parts) ----------
  speaking: [
    { task: "Prüfung, Teil 1: Stell dich vor — Name, Land, Wohnort, Sprachen.", taskEn: "Exam, Part 1: introduce yourself — name, country, home, languages.", de: "Ich heiße Anna. Ich komme aus Indien, wohne in Berlin und spreche Englisch und Deutsch.", en: "My name is Anna. I'm from India, I live in Berlin and I speak English and German." },
    { task: "Prüfung, Teil 2: Frag deinen Partner nach seinem Beruf und antworte auch.", taskEn: "Exam, Part 2: ask your partner about his job and answer too.", de: "Was ist dein Beruf? — Ich bin Student und ich arbeite auch im Café.", en: "What's your job? — I'm a student and I also work in a café." },
    { task: "Prüfung, Teil 3: Plant zusammen einen Ausflug am Samstag.", taskEn: "Exam, Part 3: plan a Saturday trip together.", de: "Wir treffen uns am Samstag um zehn Uhr am Bahnhof. Bringst du das Essen mit?", en: "Let's meet on Saturday at ten at the station. Will you bring the food?" }
  ],

  // ---------- Writing prompt (Goethe A1 message task) ----------
  writing: {
    prompt: 'Goethe A1 writing task (about 30\u201340 words). A friend has invited you to a birthday party. Write a reply that covers THREE points: (1) thank them for the invitation, (2) say you\u2019re coming and when you\u2019ll arrive, (3) ask what you can bring. Use an informal salutation and closing.',
    starters: ['Liebe/Lieber …,', 'vielen Dank für die Einladung!', 'Ich komme gern, ich bin um … da.', 'Was kann ich mitbringen? Liebe Grüße, …'],
    placeholder: 'Liebe Anna, vielen Dank für die Einladung! …',
    minWords: 30
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct?',
      options: ['Ich habe nach Hause gegangen.', 'Ich bin nach Hause gegangen.', 'Ich gehe gestern nach Hause.', 'Ich bin nach Hause gegehen.'],
      answer: 1,
      explain: 'gehen is movement → sein, and gegangen is the correct participle.'
    },
    gap: {
      // case after a two-way preposition (location) + a dative verb pronoun
      sentence: ['Das Buch liegt auf ', ' Tisch, und es gehört ', '.'],
      gaps: [ { answer: 'dem', accepts: ['dem'] }, { answer: 'mir', accepts: ['mir'] } ],
      explain: 'liegen = location → dative (dem Tisch); gehören takes the dative (mir).'
    },
    match: {
      q: 'Match each grammar term to an example.',
      pairs: [
        { noun: 'Perfekt', art: 'Ich habe gelernt.' },
        { noun: 'Dativ', art: 'Ich helfe dir.' },
        { noun: 'Imperativ', art: 'Komm bitte!' },
        { noun: 'weil-Satz', art: '…, weil ich müde bin.' }
      ]
    },
    builder: {
      target: 'Build: "We passed the exam." (Perfekt)',
      bank: ['Wir', 'haben', 'die', 'Prüfung', 'bestanden'],
      answer: ['Wir', 'haben', 'die', 'Prüfung', 'bestanden'],
      roles: { 'Wir': 'r-subject', 'haben': 'r-verb', 'die': 'r-akkusativ', 'Prüfung': 'r-object', 'bestanden': 'r-verb' }
    }
  },

  // ---------- Final Mock Quiz (5 mixed questions) ----------
  quiz: [
    { q: 'Which helper builds the Perfekt of "fahren"?', options: ['haben', 'sein', 'werden', 'wollen'], answer: 1,
      explain: 'Movement → sein: "ich bin gefahren".' },
    { q: 'Complete: "Ich helfe ___." (my mother)', options: ['meine Mutter', 'meiner Mutter', 'meinen Mutter', 'mein Mutter'], answer: 1,
      explain: 'helfen takes the dative: meiner Mutter.' },
    { q: 'Wohin? "Ich lege das Buch auf ___ Tisch."', options: ['dem', 'den', 'der', 'das'], answer: 1,
      explain: 'Movement (Wohin?) → accusative: den Tisch.' },
    { q: 'Which conjunction sends the verb to the end?', options: ['und', 'aber', 'weil', 'denn'], answer: 2,
      explain: 'weil → verb to the end: "…, weil ich lerne."' },
    { q: 'How do you say "We passed!"?', options: ['Wir haben bestanden!', 'Wir sind bestanden!', 'Wir haben bestehen!', 'Wir bestanden haben!'], answer: 0,
      explain: 'bestehen → Perfekt with haben: "Wir haben bestanden!"' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-object', html: 'The exam has four parts: <span class="de">Lesen, Hören, Schreiben, Sprechen</span> \u2014 you\u2019ve practised them all.' },
    { c: 'r-verb', html: 'Your A1 toolkit: three cases, the Perfekt, modal verbs, the Imperativ, prepositions and verb-second word order.' },
    { c: 'r-subject', html: 'Strategy beats panic: read the heading first, break down long words, keep listening, plan before you write.' }
  ],
  revisionTips: [
    'Do one full mock under time pressure before the real exam — it builds calm more than any single drill.',
    'Carry a few Textbausteine (set phrases) for the writing task: "Vielen Dank für …", "Ich komme gern", "Was kann ich mitbringen?".',
    'You finished A1. Book the Goethe-Zertifikat A1 — and then carry the same daily habit into Klarweg A2.'
  ]
};

window.CHAPTER = CHAPTER;
