/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 5 · Chapter 44
   "Zustandspassiv (sein + Partizip II)" — describing the RESULT
   after an action, contrasted with Vorgangspassiv (werden +
   Partizip II, taught B1). Does NOT teach Passiversatz,
   bekommen-Passiv, or Modalität — those come later.
   IMPORTANT: dialogue uses ONLY Merle and Timo.
   Vocabulary source: uploaded Chapter 44 list (61 items).
============================================================ */
const CHAPTER = {
  id: 'b2-44-zustandspassiv',
  phase: 'B2 · Phase 5',
  number: 44,
  title: 'Zustandspassiv (sein + Partizip II)',
  titleEn: 'Statal passive (sein + past participle)',
  description: 'Die Tür ist geöffnet — describe a state, not an action, with sein plus the participle.',
  xp: 530,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 45, title: 'Passiversatz: sich lassen', titleEn: 'Passive alternative: sich lassen' , href: 'chapter-b2-45-passiversatz-sich-lassen.html' },

  prevChapter: { number: 43, title: 'Goethe Mini 3 (Checkpoint)', titleEn: 'Goethe mini-test 3 (checkpoint)', href: 'chapter-b2-43-goethe-mini-3.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Not happening. <em>Finished.</em>',
    intro: 'Before a conference, Merle tells Timo the study is finally finished, the data evaluated, the research team informed — every sentence describing a completed state with sein + Partizip II, not the action that led there.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how Zustandspassiv describes a RESULT, never who performed the action'
    ],
    scene: 'Vor der Konferenz',
    femaleSpeakers: ['Merle'],
    dialogue: [
      { speaker: 'Merle', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Studie', role: 'r-subject', en: 'study', hi: 'अध्ययन', pron: 'SHTOO-dyuh', type: 'Noun · fem.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein', why: 'sein + Partizip II = Zustandspassiv, describes a resulting state (this chapter).', ex: 'Die Studie ist abgeschlossen.', exEn: 'The study is finished.' },
        { w: 'endlich', role: 'r-akkusativ', en: 'finally', hi: 'अंततः', pron: 'ENT-likh', type: 'Adverb' },
        { w: 'abgeschlossen', role: 'r-verb', en: 'finished', hi: 'पूर्ण', pron: 'AP-ge-shlo-sen', type: 'Partizip II · Zustandspassiv', why: 'abschließen → abgeschlossen (recycled B1).', ex: 'Die Studie ist abgeschlossen.', exEn: 'The study is finished.' },
        { w: '.', plain: true }
      ], en: 'The study is finally finished.', hi: 'Adhyayan aakhirkar poorn hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'alle', role: 'r-subject', en: 'all', hi: 'सभी', pron: 'A-luh', type: 'Determiner' },
        { w: 'Daten', role: 'r-subject', en: 'data', hi: 'आंकड़े', pron: 'DAH-ten', type: 'Noun · plural' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'ausgewertet', role: 'r-verb', en: 'evaluated', hi: 'विश्लेषित', pron: 'OWS-ge-vair-tet', type: 'Partizip II · Zustandspassiv', why: 'auswerten = to evaluate (this chapter).', ex: 'Die Daten sind ausgewertet.', exEn: 'The data is evaluated.' },
        { w: '?', plain: true }
      ], en: 'Are all data already evaluated?', hi: 'Kya sabhi aankde pehle se vishleshit hain?' },
      { speaker: 'Merle', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Forschungsteam', role: 'r-subject', en: 'research team', hi: 'शोध टीम', pron: 'FOR-shungs-teem', type: 'Noun · neut.', why: 'das Forschungsteam (this chapter).', ex: 'Das Forschungsteam ist informiert.', exEn: 'The research team is informed.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'bereits', role: 'r-akkusativ', en: 'already', hi: 'पहले से', pron: 'be-RYTES', type: 'Adverb' },
        { w: 'informiert', role: 'r-verb', en: 'informed', hi: 'सूचित', pron: 'in-for-MEERT', type: 'Partizip II · Zustandspassiv' },
        { w: '.', plain: true }
      ], en: 'Yes, the research team is already informed.', hi: 'Haan, shodh team ko pehle se soochit kar diya gaya hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Bericht', role: 'r-subject', en: 'report', hi: 'रिपोर्ट', pron: 'be-RIKHT', type: 'Noun · masc.' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'geschrieben', role: 'r-verb', en: 'written', hi: 'लिखी', pron: 'ge-SHREE-ben', type: 'Partizip II · Zustandspassiv' },
        { w: '?', plain: true }
      ], en: 'Is the report already written?', hi: 'Kya report pehle se likhi ja chuki hai?' },
      { speaker: 'Merle', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'er', role: 'r-subject', en: 'it', hi: 'यह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी भी', pron: 'nokh', type: 'Adverb' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'vollständig', role: 'r-akkusativ', en: 'completely', hi: 'पूरी तरह', pron: 'FOL-shten-dikh', type: 'Adjective' },
        { w: 'fertig', role: 'r-verb', en: 'finished', hi: 'तैयार', pron: 'FAIR-tikh', type: 'Adjective · Zustandspassiv-like' },
        { w: '.', plain: true }
      ], en: 'No, it is not completely finished yet.', hi: 'Nahi, yeh abhi poori tarah taiyaar nahi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wann', role: 'r-question', en: 'when', hi: 'कब', pron: 'van', type: 'Question word' },
        { w: 'wird', role: 'r-verb', en: 'will be', hi: 'होगा', pron: 'virt', type: 'Verb · werden (Futur/Passiv)' },
        { w: 'er', role: 'r-subject', en: 'it', hi: 'यह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'fertig', role: 'r-akkusativ', en: 'finished', hi: 'तैयार', pron: 'FAIR-tikh', type: 'Adjective' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होना', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'When will it be finished?', hi: 'Yeh kab taiyaar hoga?' },
      { speaker: 'Merle', tokens: [
        { w: 'Bis', role: 'r-preposition', en: 'by', hi: 'तक', pron: 'bis', type: 'Preposition' },
        { w: 'Freitag', role: 'r-akkusativ', en: 'Friday', hi: 'शुक्रवार', pron: 'FRY-tahk', type: 'Noun · masc.' },
        { w: 'ist', role: 'r-verb', en: 'will be', hi: 'होगा', pron: 'ist', type: 'Verb · sein' },
        { w: 'alles', role: 'r-subject', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun · indefinite' },
        { w: 'geregelt', role: 'r-verb', en: 'settled', hi: 'व्यवस्थित', pron: 'ge-RAY-gelt', type: 'Partizip II · Zustandspassiv', why: 'regeln → geregelt = to settle/arrange (this chapter).', ex: 'Alles ist geregelt.', exEn: 'Everything is settled.' },
        { w: '.', plain: true }
      ], en: 'By Friday everything will be settled.', hi: 'Shukravaar tak sab kuch vyavasthit hoga.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de">Die Tür wird geöffnet</span> = the action is happening. <span class="de r-zustand">Die Tür ist geöffnet</span> = the action is finished — only the RESULT remains. Learn <span class="de r-zustand">sein + Partizip II</span> as the structure for describing a completed state.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ZUSTANDSPASSIV (sein + Partizip II) at B2 level: describing the RESULT or STATE after an action is finished, contrasted with Vorgangspassiv (werden + Partizip II, taught B1) which describes the action happening. Examples: Die Tür ist geöffnet (state) vs Die Tür wird geöffnet (process); Der Bericht ist fertiggestellt vs Der Bericht wird fertiggestellt; Die Dokumente sind unterschrieben. ' +
    'Do NOT expect or require Passiversatz, bekommen-Passiv, or Modalpassiv — those are separate topics taught later; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that Zustandspassiv (sein + Partizip II) is used only for a finished RESULT/current state, not for an action in progress (which would need werden + Partizip II).\n' +
    '- Check that the participle agrees where needed and that "sein" is conjugated correctly for person/number.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Process vs result check:</b> one sentence on whether the learner correctly distinguished Vorgangspassiv (process) from Zustandspassiv (result).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you clearly distinguish the finished result (Zustandspassiv) from the ongoing process (Vorgangspassiv). Ready for Passiversatz next.',
    mid: 'Good. Re-read Part 3 (Vorgangspassiv vs Zustandspassiv) once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: werden = happening, sein = already finished.'
  },

  parserSentence: [
    { w: 'Die', role: 'plain' }, { w: 'Tür', role: 'plain' }, { w: 'ist', role: 'plain' },
    { w: 'geöffnet', role: 'r-zustand' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: sein + Partizip II describes a finished result, not a process.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Merle and Timo prepare for a conference and check into a hotel using Zustandspassiv.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 61 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master Zustandspassiv, contrast it with Vorgangspassiv, and see typical Goethe B2 contexts.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read office-preparation and hotel-information passages full of Zustandspassiv.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify Zustandspassiv vs Vorgangspassiv, and result vs process.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe rooms, completed work, and presentations using Zustandspassiv naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports, formal emails, and hotel information using Zustandspassiv appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill process-vs-result, sentence transformation, and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 530 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 61 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Process-vs-result drills, sentence transformation, and a workplace-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full comparison table, timeline diagram, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Die Tür ist geöffnet.', text: 'Describe a finished state with sein + Partizip II' },
    { de: 'Der Bericht wird fertiggestellt. → Der Bericht ist fertiggestellt.', text: 'Distinguish Vorgangspassiv (process) from Zustandspassiv (result)' },
    { de: 'Die Dokumente sind unterschrieben. Das Hotel ist ausgebucht.', text: 'Use Zustandspassiv naturally in workplace and travel contexts' },
    { de: 'Zustandspassiv nennt nie den Handelnden.', text: 'Understand that Zustandspassiv focuses only on the current condition' },
    { de: 'Business-E-Mails, Berichte, Goethe B2 Schreiben', text: 'Recognize Zustandspassiv\'s heavy use in formal and professional German' }
  ],

  // ---------- Vocabulary (61 items — uploaded chapter-44 list) ----------
  vocab: [
    { de: 'Ausbildungsangebot', art: 'das', gender: 'n', plural: 'Ausbildungsangebote', pos: 'noun', level: 'B2', register: 'written', en: 'training offer', hi: 'प्रशिक्षण प्रस्ताव', ex: 'Das Ausbildungsangebot ist wirklich kostbar.', exEn: 'The training offer is really precious.', exHi: 'Prashikshan prastaav vaakai beshkeemti hai.', ex2: 'Sie haben das Ausbildungsangebot angenommen.', ex2En: 'They\'ve accepted the training offer.', ex2Hi: 'Unhone prashikshan prastaav sweekaar kiya hai.' },
    { de: 'Ausbildungsmöglichkeit', art: 'die', gender: 'f', plural: 'Ausbildungsmöglichkeiten', pos: 'noun', level: 'B2', register: 'written', en: 'training opportunity', hi: 'प्रशिक्षण अवसर', ex: 'Die neuen Ausbildungsmöglichkeiten sind schon benannt.', exEn: 'The new training opportunities are already named.', exHi: 'Naye prashikshan avsar pehle se naamit hain.', ex2: 'Sie haben viele Ausbildungsmöglichkeiten geprüft.', ex2En: 'They\'ve examined many training opportunities.', ex2Hi: 'Unhone kai prashikshan avsaron ki jaanch ki hai.' },
    { de: 'Berufsausbildung', art: 'die', gender: 'f', plural: 'Berufsausbildungen', pos: 'noun', level: 'B2', register: 'written', en: 'vocational training', hi: 'व्यावसायिक प्रशिक्षण', ex: 'Die Berufsausbildung ist abgeschlossen.', exEn: 'The vocational training is concluded.', exHi: 'Vyavsaayik prashikshan sampann hai.', ex2: 'Sie haben eine Berufsausbildung begonnen.', ex2En: 'They\'ve begun a vocational training.', ex2Hi: 'Unhone ek vyavsaayik prashikshan shuru kiya hai.' },
    { de: 'Digitalisierung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'digitalisation', hi: 'डिजिटलीकरण', ex: 'Die Digitalisierung hilft dem Unternehmen.', exEn: 'Digitalisation helps the company.', exHi: 'Digitilization company ki madad karta hai.', ex2: 'Sie haben in die Digitalisierung investiert.', ex2En: 'They\'ve invested in digitalisation.', ex2Hi: 'Unhone digitilization mein nivesh kiya hai.' },
    { de: 'Forschungsteam', art: 'das', gender: 'n', plural: 'Forschungsteams', pos: 'noun', level: 'B2', register: 'written', en: 'research team', hi: 'शोध टीम', ex: 'Das alte Forschungsteam ist umgezogen.', exEn: 'The old research team has moved.', exHi: 'Purani shodh teem sthaanaantarit ho chuki hai.', ex2: 'Sie haben ein neues Forschungsteam gebildet.', ex2En: 'They\'ve formed a new research team.', ex2Hi: 'Unhone ek nayi shodh teem banaayi hai.' },
    { de: 'Kommunikationsmöglichkeit', art: 'die', gender: 'f', plural: 'Kommunikationsmöglichkeiten', pos: 'noun', level: 'B2', register: 'written', en: 'communication opportunity', hi: 'संचार अवसर', ex: 'Neue Kommunikationsmöglichkeiten sind entstanden.', exEn: 'New communication opportunities have arisen.', exHi: 'Naye sanchaar avsar utpann hue hain.', ex2: 'Sie haben Kommunikationsmöglichkeiten genutzt.', ex2En: 'They\'ve used communication opportunities.', ex2Hi: 'Unhone sanchaar avsaron ka upyog kiya hai.' },
    { de: 'Marktforschungsfirma', art: 'die', gender: 'f', plural: 'Marktforschungsfirmen', pos: 'noun', level: 'B2', register: 'written', en: 'market research firm', hi: 'बाज़ार अनुसंधान फर्म', ex: 'Die Marktforschungsfirma hat die Daten ausgewertet.', exEn: 'The market research firm has evaluated the data.', exHi: 'Baazaar anusandhaan firm ne data ka moolyaankan kiya hai.', ex2: 'Sie arbeiten mit einer Marktforschungsfirma.', ex2En: 'They\'re working with a market research firm.', ex2Hi: 'Woh ek baazaar anusandhaan firm ke saath kaam karte hain.' },
    { de: 'Maßnahme', art: 'die', gender: 'f', plural: 'Maßnahmen', pos: 'noun', level: 'B2', register: 'both', en: 'measure, step', hi: 'उपाय', ex: 'Das ist eine gute Maßnahme.', exEn: 'That is a good measure.', exHi: 'Yeh ek achhi upaay hai.', ex2: 'Sie haben mehrere Maßnahmen ergriffen.', ex2En: 'They\'ve taken several measures.', ex2Hi: 'Unhone kai upaay kiye hain.' },
    { de: 'Nachhaltigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'sustainability', hi: 'स्थिरता', ex: 'Die Konferenz ist wichtig für unsere Nachhaltigkeit.', exEn: 'The conference is important for our sustainability.', exHi: 'Yeh sammelan hamaari sthirta ke liye mahatvapurn hai.', ex2: 'Sie haben in Nachhaltigkeit investiert.', ex2En: 'They\'ve invested in sustainability.', ex2Hi: 'Unhone sthirta mein nivesh kiya hai.' },
    { de: 'umweltverträglich', pos: 'adjective', level: 'B2', register: 'written', en: 'environmentally friendly', hi: 'पर्यावरण अनुकूल', ex: 'Das Verfahren ist umweltverträglich.', exEn: 'The process is environmentally friendly.', exHi: 'Yeh prakriya paryaavaran anukool hai.', ex2: 'Sie haben umweltverträgliche Materialien gewählt.', ex2En: 'They\'ve chosen environmentally friendly materials.', ex2Hi: 'Unhone paryaavaran anukool saamagri chuni hai.' },
    { de: 'weiterhin', pos: 'adverb', level: 'B2', register: 'both', en: 'still, furthermore', hi: 'आगे भी', ex: 'Der Vertrag bleibt weiterhin gültig.', exEn: 'The contract remains valid furthermore.', exHi: 'Anubandh aage bhi vaidh rehta hai.', ex2: 'Sie arbeiten weiterhin zusammen.', ex2En: 'They continue to work together.', ex2Hi: 'Woh aage bhi milkar kaam karte hain.' },
    { de: 'abbrechen', pos: 'verb', level: 'B2', register: 'both', en: 'to break off, abort', hi: 'तोड़ना, रोकना', ex: 'Sie mussten die Verhandlung abbrechen.', exEn: 'They had to break off the negotiation.', exHi: 'Unhein baatcheet rokni padi.', ex2: 'Er hat das Gespräch abgebrochen.', ex2En: 'He\'s broken off the conversation.', ex2Hi: 'Usne baatcheet tod di hai.', conj: { praesens: 'bricht ab', praeteritum: 'brach ab', perfekt: 'hat abgebrochen' } },
    { de: 'anmelden', pos: 'verb', level: 'B2', register: 'both', en: 'to register, sign up', hi: 'पंजीकरण करना', ex: 'Sie müssen sich für die Konferenz anmelden.', exEn: 'You need to register for the conference.', exHi: 'Aapko sammelan ke liye panjikaran karna hoga.', ex2: 'Er hat sich schon angemeldet.', ex2En: 'He\'s already registered.', ex2Hi: 'Usne pehle se panjikaran kar liya hai.', conj: { praesens: 'meldet an', praeteritum: 'meldete an', perfekt: 'hat angemeldet' } },
    { de: 'Anonymität', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'anonymity', hi: 'गुमनामी', ex: 'Die Anonymität der Teilnehmer ist garantiert.', exEn: 'The anonymity of the participants is guaranteed.', exHi: 'Prathibhaagiyon ki gumnaami sunishchit hai.', ex2: 'Sie schätzen ihre Anonymität.', ex2En: 'They value their anonymity.', ex2Hi: 'Woh apni gumnaami ki kadar karte hain.' },
    { de: 'anregen', pos: 'verb', level: 'B2', register: 'written', en: 'to stimulate, prompt', hi: 'प्रेरित करना', ex: 'Der Vortrag hat neue Ideen angeregt.', exEn: 'The talk has stimulated new ideas.', exHi: 'Bhaashan ne nayi soch ko prerit kiya hai.', ex2: 'Sie regt gern Diskussionen an.', ex2En: 'She likes to prompt discussions.', ex2Hi: 'Use charchaaon ko prerit karna pasand hai.', conj: { praesens: 'regt an', praeteritum: 'regte an', perfekt: 'hat angeregt' } },
    { de: 'aufkommen', pos: 'verb', level: 'B2', register: 'written', en: 'to arise, come up', hi: 'उठना, उभरना', ex: 'Neue Fragen sind aufgekommen.', exEn: 'New questions have arisen.', exHi: 'Naye sawaal utthe hain.', ex2: 'Ein Problem kam plötzlich auf.', ex2En: 'A problem suddenly came up.', ex2Hi: 'Ek samasya achaanak utthi.', conj: { praesens: 'kommt auf', praeteritum: 'kam auf', perfekt: 'ist aufgekommen' } },
    { de: 'aufwärmen', pos: 'verb', level: 'B2', register: 'both', en: 'to warm up', hi: 'गर्म करना', ex: 'Sie hat das Essen aufgewärmt.', exEn: 'She\'s warmed up the food.', exHi: 'Usne khaana garam kiya hai.', ex2: 'Wir wärmen den Raum vor der Konferenz auf.', ex2En: 'We warm up the room before the conference.', ex2Hi: 'Hum sammelan se pehle kamra garam karte hain.', conj: { praesens: 'wärmt auf', praeteritum: 'wärmte auf', perfekt: 'hat aufgewärmt' } },
    { de: 'ausführen', pos: 'verb', level: 'B2', register: 'written', en: 'to carry out, export', hi: 'निष्पादित करना, निर्यात करना', ex: 'Sie führten den Plan sorgfältig aus.', exEn: 'They carried out the plan carefully.', exHi: 'Unhone yojana savdhaani se nispaadit ki.', ex2: 'Die Firma führt Waren ins Ausland aus.', ex2En: 'The company exports goods abroad.', ex2Hi: 'Company videsh mein maal niryaat karti hai.', conj: { praesens: 'führt aus', praeteritum: 'führte aus', perfekt: 'hat ausgeführt' } },
    { de: 'ausräumen', pos: 'verb', level: 'B2', register: 'both', en: 'to clear out', hi: 'खाली करना', ex: 'Sie räumten das alte Büro aus.', exEn: 'They cleared out the old office.', exHi: 'Unhone puraana daftar khaali kiya.', ex2: 'Er hat alle Zweifel ausgeräumt.', ex2En: 'He\'s cleared out all doubts.', ex2Hi: 'Usne saare shak door kar diye hain.', conj: { praesens: 'räumt aus', praeteritum: 'räumte aus', perfekt: 'hat ausgeräumt' } },
    { de: 'auswerten', pos: 'verb', level: 'B2', register: 'written', en: 'to evaluate, analyse', hi: 'मूल्यांकन करना', ex: 'Die Marktforschungsfirma hat die Ergebnisse ausgewertet.', exEn: 'The market research firm has evaluated the results.', exHi: 'Baazaar anusandhaan firm ne parinaamon ka moolyaankan kiya hai.', ex2: 'Sie werten die Nachfrage gerade aus.', ex2En: 'They are just now analysing the demand.', ex2Hi: 'Woh abhi maang ka vishleshan kar rahe hain.', conj: { praesens: 'wertet aus', praeteritum: 'wertete aus', perfekt: 'hat ausgewertet' } },
    { de: 'Bedürfnis', art: 'das', gender: 'n', plural: 'Bedürfnisse', pos: 'noun', level: 'B2', register: 'written', en: 'need', hi: 'आवश्यकता', ex: 'Das Hotel erfüllt jedes Bedürfnis der Gäste.', exEn: 'The hotel meets every need of the guests.', exHi: 'Hotel mehmaano ki har zaroorat poori karta hai.', ex2: 'Sie haben ihre Bedürfnisse geäußert.', ex2En: 'They\'ve expressed their needs.', ex2Hi: 'Unhone apni zarooratein bataayi hain.' },
    { de: 'befolgen', pos: 'verb', level: 'B2', register: 'written', en: 'to follow, comply with', hi: 'पालन करना', ex: 'Alle Gäste befolgen die Hotelregeln.', exEn: 'All guests comply with the hotel rules.', exHi: 'Sabhi mehmaan hotel ke niyamon ka paalan karte hain.', ex2: 'Er hat den Rat befolgt.', ex2En: 'He\'s followed the advice.', ex2Hi: 'Usne salaah maani hai.', conj: { praesens: 'befolgt', praeteritum: 'befolgte', perfekt: 'hat befolgt' } },
    { de: 'Begabung', art: 'die', gender: 'f', plural: 'Begabungen', pos: 'noun', level: 'B2', register: 'written', en: 'talent, gift', hi: 'प्रतिभा', ex: 'Ihre Begabung für Sprachen ist bekannt.', exEn: 'Her talent for languages is known.', exHi: 'Bhaashaaon ke liye uski pratibha prasiddh hai.', ex2: 'Sie haben seine Begabung erkannt.', ex2En: 'They\'ve recognised his talent.', ex2Hi: 'Unhone uski pratibha pehchaani hai.' },
    { de: 'begeben', pos: 'verb', level: 'B2', register: 'written', en: 'to proceed, set off', hi: 'रवाना होना', ex: 'Sie begaben sich zur Rezeption.', exEn: 'They proceeded to the reception.', exHi: 'Woh reception ki taraf rawaana hue.', ex2: 'Er hat sich auf die Reise begeben.', ex2En: 'He\'s set off on the journey.', ex2Hi: 'Woh yatra par rawaana ho gaya hai.', conj: { praesens: 'begibt sich', praeteritum: 'begab sich', perfekt: 'hat sich begeben' } },
    { de: 'Belastung', art: 'die', gender: 'f', plural: 'Belastungen', pos: 'noun', level: 'B2', register: 'both', en: 'strain, burden, load', hi: 'बोझ', ex: 'Die Belastung vor der Konferenz ist heftig.', exEn: 'The strain before the conference is fierce.', exHi: 'Sammelan se pehle bojh teevr hai.', ex2: 'Sie haben die Belastung reduziert.', ex2En: 'They\'ve reduced the strain.', ex2Hi: 'Unhone bojh kam kiya hai.' },
    { de: 'beliefern', pos: 'verb', level: 'B2', register: 'written', en: 'to supply, deliver to', hi: 'आपूर्ति करना', ex: 'Die Firma beliefert das Hotel täglich.', exEn: 'The company supplies the hotel daily.', exHi: 'Company roz hotel ko aapoorti karti hai.', ex2: 'Sie haben den Kunden zuverlässig beliefert.', ex2En: 'They\'ve reliably supplied the customer.', ex2Hi: 'Unhone grahak ko bharosemand tarike se aapoorti ki hai.', conj: { praesens: 'beliefert', praeteritum: 'belieferte', perfekt: 'hat beliefert' } },
    { de: 'benennen', pos: 'verb', level: 'B2', register: 'written', en: 'to name, designate', hi: 'नामित करना', ex: 'Sie haben die neuen Ausbildungsmöglichkeiten benannt.', exEn: 'They\'ve named the new training opportunities.', exHi: 'Unhone naye prashikshan avsar naamit kiye hain.', ex2: 'Der Bericht benennt alle Probleme.', ex2En: 'The report names all the problems.', ex2Hi: 'Report saari samasyaon ko naamit karti hai.', conj: { praesens: 'benennt', praeteritum: 'benannte', perfekt: 'hat benannt' } },
    { de: 'bündeln', pos: 'verb', level: 'B2', register: 'written', en: 'to bundle, pool', hi: 'एकत्रित करना', ex: 'Die Firma bündelt ihre Ressourcen.', exEn: 'The company pools its resources.', exHi: 'Company apne sansaadhan ekatrit karti hai.', ex2: 'Sie haben die Daten gebündelt.', ex2En: 'They\'ve bundled the data.', ex2Hi: 'Unhone data ekatrit kiya hai.', conj: { praesens: 'bündelt', praeteritum: 'bündelte', perfekt: 'hat gebündelt' } },
    { de: 'checken', pos: 'verb', level: 'B2', register: 'spoken', en: 'to check', hi: 'जांचना', ex: 'Die Rezeption checkt gerade die Verfügbarkeit.', exEn: 'Reception is just now checking the availability.', exHi: 'Reception abhi uplabdhata jaanch raha hai.', ex2: 'Sie hat die E-Mail schnell gecheckt.', ex2En: 'She\'s quickly checked the email.', ex2Hi: 'Usne email jaldi jaanchi hai.', conj: { praesens: 'checkt', praeteritum: 'checkte', perfekt: 'hat gecheckt' } },
    { de: 'Dienstleistung', art: 'die', gender: 'f', plural: 'Dienstleistungen', pos: 'noun', level: 'B2', register: 'written', en: 'service', hi: 'सेवा', ex: 'Das Hotel bietet erstklassige Dienstleistungen.', exEn: 'The hotel offers first-class services.', exHi: 'Hotel prathm shreni ki sevaayen deta hai.', ex2: 'Sie haben die Dienstleistung bewertet.', ex2En: 'They\'ve rated the service.', ex2Hi: 'Unhone seva ka mulyaankan kiya hai.' },
    { de: 'einatmen', pos: 'verb', level: 'B2', register: 'both', en: 'to inhale, breathe in', hi: 'सांस लेना', ex: 'Sie atmete die frische Luft ein.', exEn: 'She inhaled the fresh air.', exHi: 'Usne taazi hawa mein saans li.', ex2: 'Er hat tief eingeatmet.', ex2En: 'He\'s taken a deep breath in.', ex2Hi: 'Usne gehri saans li hai.', conj: { praesens: 'atmet ein', praeteritum: 'atmete ein', perfekt: 'hat eingeatmet' } },
    { de: 'einhaken', pos: 'verb', level: 'B2', register: 'spoken', en: 'to chime in, hook in', hi: 'बीच में बोलना', ex: 'Rohan hakte kurz in das Gespräch ein.', exEn: 'Rohan briefly chimed into the conversation.', exHi: 'Rohan ne baatcheet mein thodi der ke liye baat rakhi.', ex2: 'Sie hat immer wieder eingehakt.', ex2En: 'She\'s chimed in again and again.', ex2Hi: 'Usne baar baar beech mein baat rakhi hai.', conj: { praesens: 'hakt ein', praeteritum: 'hakte ein', perfekt: 'hat eingehakt' } },
    { de: 'einräumen', pos: 'verb', level: 'B2', register: 'written', en: 'to concede, grant', hi: 'स्वीकार करना', ex: 'Sie räumte den Fehler ein.', exEn: 'She conceded the mistake.', exHi: 'Usne galti maani.', ex2: 'Er hat ihr mehr Zeit eingeräumt.', ex2En: 'He\'s granted her more time.', ex2Hi: 'Usne use zyaada samay diya hai.', conj: { praesens: 'räumt ein', praeteritum: 'räumte ein', perfekt: 'hat eingeräumt' } },
    { de: 'Einsatzmöglichkeit', art: 'die', gender: 'f', plural: 'Einsatzmöglichkeiten', pos: 'noun', level: 'B2', register: 'written', en: 'possible application, use', hi: 'उपयोग की संभावना', ex: 'Die Einsatzmöglichkeiten sind vielfältig.', exEn: 'The possible applications are diverse.', exHi: 'Upyog ki sambhaavnaayein vividh hain.', ex2: 'Sie haben neue Einsatzmöglichkeiten gefunden.', ex2En: 'They\'ve found new possible applications.', ex2Hi: 'Unhein naye upyog ki sambhaavnaayein mili hain.' },
    { de: 'einzig', pos: 'adjective', level: 'B2', register: 'both', en: 'only, single', hi: 'अद्वितीय', ex: 'Der Erfindungsreichtum unseres Teams ist einzig.', exEn: 'Our team\'s inventiveness is unique.', exHi: 'Humaari team ki aavishkaarsheelta advitiya hai.', ex2: 'Das war ihre einzige Chance.', ex2En: 'That was their only chance.', ex2Hi: 'Yeh unka akela mauka tha.' },
    { de: 'engagiert', pos: 'adjective', level: 'B2', register: 'both', en: 'committed, dedicated', hi: 'प्रतिबद्ध', ex: 'Wir sind engagiert, einen Platz zu finden.', exEn: 'We\'re committed to finding a spot.', exHi: 'Hum jagah dhoondhne ke liye pratibaddh hain.', ex2: 'Sie ist eine engagierte Mitarbeiterin.', ex2En: 'She\'s a committed employee.', ex2Hi: 'Woh ek pratibaddh karmchaari hai.' },
    { de: 'entsorgen', pos: 'verb', level: 'B2', register: 'written', en: 'to dispose of', hi: 'निपटान करना', ex: 'Sie entsorgten die alten Unterlagen.', exEn: 'They disposed of the old documents.', exHi: 'Unhone puraane dastaavez nipataaye.', ex2: 'Er hat den Müll fachgerecht entsorgt.', ex2En: 'He\'s disposed of the waste properly.', ex2Hi: 'Usne kachra sahi tarike se nipataaya hai.', conj: { praesens: 'entsorgt', praeteritum: 'entsorgte', perfekt: 'hat entsorgt' } },
    { de: 'Erfindungsreichtum', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'inventiveness', hi: 'आविष्कारशीलता', ex: 'Der Erfindungsreichtum des Teams beeindruckte alle.', exEn: 'The team\'s inventiveness impressed everyone.', exHi: 'Team ki aavishkaarsheelta ne sabko prabhaavit kiya.', ex2: 'Sie schätzen seinen Erfindungsreichtum.', ex2En: 'They value his inventiveness.', ex2Hi: 'Woh uski aavishkaarsheelta ki kadar karte hain.' },
    { de: 'erneuerbar', pos: 'adjective', level: 'B2', register: 'written', en: 'renewable', hi: 'नवीकरणीय', ex: 'Das Hotel nutzt erneuerbare Energie.', exEn: 'The hotel uses renewable energy.', exHi: 'Hotel navikaraniya oorja ka upyog karta hai.', ex2: 'Sie investieren in erneuerbare Ressourcen.', ex2En: 'They invest in renewable resources.', ex2Hi: 'Woh navikaraniya sansaadhanon mein nivesh karte hain.' },
    { de: 'erreichbar', pos: 'adjective', level: 'B2', register: 'both', en: 'reachable, attainable', hi: 'सुलभ, पहुंच योग्य', ex: 'Die Rezeption ist rund um die Uhr erreichbar.', exEn: 'The reception is reachable around the clock.', exHi: 'Reception din-raat sulabh hai.', ex2: 'Dieses Ziel ist erreichbar.', ex2En: 'This goal is attainable.', ex2Hi: 'Yeh lakshya prapt kiya ja sakta hai.' },
    { de: 'garantiert', pos: 'adjective', level: 'B2', register: 'both', en: 'guaranteed', hi: 'सुनिश्चित', ex: 'Alles ist garantiert.', exEn: 'Everything is guaranteed.', exHi: 'Sab kuch sunishchit hai.', ex2: 'Die Anonymität der Teilnehmer ist garantiert.', ex2En: 'The anonymity of the participants is guaranteed.', ex2Hi: 'Prathibhaagiyon ki gumnaami sunishchit hai.' },
    { de: 'geraten', pos: 'verb', level: 'B2', register: 'written', en: 'to get into, turn out', hi: 'फंस जाना, बदल जाना', ex: 'Sie gerieten in eine schwierige Lage.', exEn: 'They got into a difficult situation.', exHi: 'Woh ek mushkil sthiti mein fans gaye.', ex2: 'Das Projekt ist gut geraten.', ex2En: 'The project has turned out well.', ex2Hi: 'Project achha nikla hai.', conj: { praesens: 'gerät', praeteritum: 'geriet', perfekt: 'ist geraten' } },
    { de: 'Haupthandlung', art: 'die', gender: 'f', plural: 'Haupthandlungen', pos: 'noun', level: 'B2', register: 'written', en: 'main plot', hi: 'मुख्य कथानक', ex: 'Die Haupthandlung des Berichts ist klar.', exEn: 'The main plot of the report is clear.', exHi: 'Report ka mukhya kathaanak spasht hai.', ex2: 'Sie haben die Haupthandlung zusammengefasst.', ex2En: 'They\'ve summarised the main plot.', ex2Hi: 'Unhone mukhya kathaanak ka saaraansh diya hai.' },
    { de: 'heben', pos: 'verb', level: 'B2', register: 'both', en: 'to lift, raise', hi: 'उठाना', ex: 'Er hob die Kiste vorsichtig.', exEn: 'He lifted the box carefully.', exHi: 'Usne sandook savdhaani se uthaaya.', ex2: 'Sie haben die Preise gehoben.', ex2En: 'They\'ve raised the prices.', ex2Hi: 'Unhone daam badhaaye hain.', conj: { praesens: 'hebt', praeteritum: 'hob', perfekt: 'hat gehoben' } },
    { de: 'heftig', pos: 'adjective', level: 'B2', register: 'both', en: 'fierce, violent, heavy', hi: 'तीव्र', ex: 'Die Belastung vor der Konferenz ist heftig.', exEn: 'The strain before the conference is fierce.', exHi: 'Sammelan se pehle bojh teevr hai.', ex2: 'Es gab einen heftigen Streit.', ex2En: 'There was a fierce argument.', ex2Hi: 'Ek teevr bahas hui.' },
    { de: 'heilen', pos: 'verb', level: 'B2', register: 'both', en: 'to heal, cure', hi: 'ठीक करना', ex: 'Die Wunde ist geheilt.', exEn: 'The wound is healed.', exHi: 'Ghaav theek ho gaya hai.', ex2: 'Der Arzt hat den Patienten geheilt.', ex2En: 'The doctor has cured the patient.', ex2Hi: 'Doctor ne mareez ko theek kiya hai.', conj: { praesens: 'heilt', praeteritum: 'heilte', perfekt: 'hat/ist geheilt' } },
    { de: 'heizen', pos: 'verb', level: 'B2', register: 'both', en: 'to heat', hi: 'गर्म करना', ex: 'Die Heizung ist eingeschaltet.', exEn: 'The heating is switched on.', exHi: 'Heating chaalu hai.', ex2: 'Sie heizen das Zimmer vor der Ankunft.', ex2En: 'They heat the room before arrival.', ex2Hi: 'Woh aane se pehle kamra garam karte hain.', conj: { praesens: 'heizt', praeteritum: 'heizte', perfekt: 'hat geheizt' } },
    { de: 'herunterladen', pos: 'verb', level: 'B2', register: 'both', en: 'to download', hi: 'डाउनलोड करना', ex: 'Sie lud den Bericht herunter.', exEn: 'She downloaded the report.', exHi: 'Usne report download ki.', ex2: 'Er hat die Unterlagen heruntergeladen.', ex2En: 'He\'s downloaded the documents.', ex2Hi: 'Usne dastaavez download kiye hain.', conj: { praesens: 'lädt herunter', praeteritum: 'lud herunter', perfekt: 'hat heruntergeladen' } },
    { de: 'Informationsbeschaffung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'gathering of information', hi: 'सूचना संग्रहण', ex: 'Die Informationsbeschaffung dauerte lange.', exEn: 'The gathering of information took a long time.', exHi: 'Soochna sangrahan mein lambaa samay laga.', ex2: 'Sie haben die Informationsbeschaffung beschleunigt.', ex2En: 'They\'ve sped up the gathering of information.', ex2Hi: 'Unhone soochna sangrahan tez kiya hai.' },
    { de: 'Innovation', art: 'die', gender: 'f', plural: 'Innovationen', pos: 'noun', level: 'B2', register: 'written', en: 'innovation', hi: 'नवाचार', ex: 'Die Firma lebt von Innovation.', exEn: 'The company lives off innovation.', exHi: 'Company navaachaar par nirbhar hai.', ex2: 'Sie haben eine neue Innovation vorgestellt.', ex2En: 'They\'ve presented a new innovation.', ex2Hi: 'Unhone ek naya navaachaar prastut kiya hai.' },
    { de: 'interagieren', pos: 'verb', level: 'B2', register: 'written', en: 'to interact', hi: 'बातचीत करना', ex: 'Merle und Timo interagieren häufig mit Kunden.', exEn: 'Merle and Timo often interact with customers.', exHi: 'Anna aur Rohan aksar grahakon se baatcheet karte hain.', ex2: 'Sie haben mit dem Team interagiert.', ex2En: 'They\'ve interacted with the team.', ex2Hi: 'Unhone team ke saath baatcheet ki hai.', conj: { praesens: 'interagiert', praeteritum: 'interagierte', perfekt: 'hat interagiert' } },
    { de: 'kentern', pos: 'verb', level: 'B2', register: 'written', en: 'to capsize', hi: 'पलट जाना', ex: 'Das Boot kenterte im Sturm.', exEn: 'The boat capsized in the storm.', exHi: 'Toofaan mein naav palat gayi.', ex2: 'Sie haben verhindert, dass das Boot kentert.', ex2En: 'They\'ve prevented the boat from capsizing.', ex2Hi: 'Unhone naav ko palatne se roka hai.', conj: { praesens: 'kentert', praeteritum: 'kenterte', perfekt: 'ist gekentert' } },
    { de: 'kopieren', pos: 'verb', level: 'B2', register: 'both', en: 'to copy', hi: 'नकल करना', ex: 'Sie kopierte die Dokumente schnell.', exEn: 'She copied the documents quickly.', exHi: 'Usne dastaavez jaldi copy kiye.', ex2: 'Er hat die Datei kopiert.', ex2En: 'He\'s copied the file.', ex2Hi: 'Usne file copy ki hai.', conj: { praesens: 'kopiert', praeteritum: 'kopierte', perfekt: 'hat kopiert' } },
    { de: 'Körpertemperatur', art: 'die', gender: 'f', plural: 'Körpertemperaturen', pos: 'noun', level: 'B2', register: 'written', en: 'body temperature', hi: 'शरीर का तापमान', ex: 'Die Körpertemperatur wurde gemessen.', exEn: 'The body temperature was measured.', exHi: 'Shareer ka taapmaan maapa gaya.', ex2: 'Ihre Körpertemperatur ist normal.', ex2En: 'Her body temperature is normal.', ex2Hi: 'Uska shareer ka taapmaan saamaanya hai.' },
    { de: 'kostbar', pos: 'adjective', level: 'B2', register: 'written', en: 'precious, valuable', hi: 'बेशकीमती', ex: 'Das Ausbildungsangebot ist wirklich kostbar.', exEn: 'The training offer is really precious.', exHi: 'Prashikshan prastaav vaakai beshkeemti hai.', ex2: 'Sie besitzen kostbare Kunstwerke.', ex2En: 'They own precious works of art.', ex2Hi: 'Unke paas beshkeemti kalaakritiyaan hain.' },
    { de: 'leeren', pos: 'verb', level: 'B2', register: 'both', en: 'to empty', hi: 'खाली करना', ex: 'Das Büro ist schon geleert.', exEn: 'The office is already emptied.', exHi: 'Daftar pehle se khaali hai.', ex2: 'Sie haben den Schrank geleert.', ex2En: 'They\'ve emptied the cupboard.', ex2Hi: 'Unhone almari khaali ki hai.', conj: { praesens: 'leert', praeteritum: 'leerte', perfekt: 'hat geleert' } },
    { de: 'leidenschaftlich', pos: 'adjective', level: 'B2', register: 'written', en: 'passionate(ly)', hi: 'जोशीला', ex: 'Sie arbeitet leidenschaftlich an dem Projekt.', exEn: 'She works passionately on the project.', exHi: 'Woh project par joshile tarike se kaam karti hai.', ex2: 'Er hat leidenschaftlich präsentiert.', ex2En: 'He\'s presented passionately.', ex2Hi: 'Usne joshile andaaz mein prastuti di hai.' },
    { de: 'lindern', pos: 'verb', level: 'B2', register: 'written', en: 'to ease, relieve, soothe', hi: 'कम करना, राहत देना', ex: 'Die Maßnahme linderte die Belastung.', exEn: 'The measure eased the strain.', exHi: 'Upaay ne bojh kam kiya.', ex2: 'Sie haben den Schmerz gelindert.', ex2En: 'They\'ve relieved the pain.', ex2Hi: 'Unhone dard kam kiya hai.', conj: { praesens: 'lindert', praeteritum: 'linderte', perfekt: 'hat gelindert' } },
    { de: 'Lungenkrankheit', art: 'die', gender: 'f', plural: 'Lungenkrankheiten', pos: 'noun', level: 'B2', register: 'written', en: 'lung disease', hi: 'फेफड़ों की बीमारी', ex: 'Die Lungenkrankheit wurde früh erkannt.', exEn: 'The lung disease was recognised early.', exHi: 'Phephdon ki beemari jaldi pehchaani gayi.', ex2: 'Sie leidet an einer Lungenkrankheit.', ex2En: 'She suffers from a lung disease.', ex2Hi: 'Woh phephdon ki beemari se peedit hai.' },
    { de: 'Mobilität', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'mobility', hi: 'गतिशीलता', ex: 'Die Mobilität der Mitarbeiter ist gestiegen.', exEn: 'The mobility of the employees has increased.', exHi: 'Karmchaariyon ki gatisheelta badhi hai.', ex2: 'Sie fördern nachhaltige Mobilität.', ex2En: 'They promote sustainable mobility.', ex2Hi: 'Woh tikaau gatisheelta ko badhaava dete hain.' },
    { de: 'Nachfrage', art: 'die', gender: 'f', plural: 'Nachfragen', pos: 'noun', level: 'B2', register: 'both', en: 'demand, enquiry', hi: 'मांग', ex: 'Die Nachfrage nach Zimmern wird gerade ausgewertet.', exEn: 'The demand for rooms is just now being analysed.', exHi: 'Kamron ki maang abhi vishleshit ki ja rahi hai.', ex2: 'Sie haben eine hohe Nachfrage bemerkt.', ex2En: 'They\'ve noticed a high demand.', ex2Hi: 'Unhone zyaada maang dekhi hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Zustandspassiv?',
      body: [ 'German has TWO important passive structures. Vorgangspassiv describes the action happening; Zustandspassiv describes the finished result — the state that remains.' ],
      table: {
        head: ['Vorgangspassiv (process)', 'Zustandspassiv (result)'],
        rows: [
          ['<span class="de">Die Tür wird geöffnet.</span> (being opened)', '<span class="de r-zustand">Die Tür ist geöffnet.</span> (is open)']
        ]
      },
      hinglish: 'German mein passive ke do roop hain. <b>Vorgangspassiv</b> (werden ke saath) batata hai ki kaam ho raha hai, aur <b>Zustandspassiv</b> (sein ke saath) batata hai ki kaam ho chuka hai aur ab kya haalat hai. Ek process hai, doosra result.'
    },
    {
      title: 'Struktur: sein + Partizip II',
      body: [ 'Zustandspassiv is built with a conjugated form of "sein" plus the Partizip II — the same participle used in Vorgangspassiv and Perfekt, but now paired with sein.' ],
      table: {
        head: ['Example', 'Meaning'],
        rows: [
          ['<span class="de r-zustand">Die Fenster sind geschlossen.</span>', 'The windows are closed.'],
          ['<span class="de r-zustand">Die E-Mail ist geschrieben.</span>', 'The email is written.'],
          ['<span class="de r-zustand">Der Bericht ist fertiggestellt.</span>', 'The report is completed.'],
          ['<span class="de r-zustand">Die Dokumente sind unterschrieben.</span>', 'The documents are signed.']
        ]
      },
      hinglish: 'Yeh <b>sein</b> ke conjugated form aur Partizip II se banta hai. Participle wahi rehta hai jo Perfekt mein aata hai \u2014 sirf helper badalta hai. Isliye naya kuch yaad nahi karna, bas <b>sein</b> lagana hai.'
    },
    {
      title: 'Vorgangspassiv vs Zustandspassiv',
      body: [ 'Compare the same participle with werden (process) and sein (result) side by side.' ],
      table: {
        head: ['werden (Prozess)', 'sein (Ergebnis)'],
        rows: [
          ['Der Computer wird repariert. (repair happening)', 'Der Computer ist repariert. (repair finished)'],
          ['Die Brücke wird gebaut. (construction happening)', 'Die Brücke ist gebaut. (construction complete)']
        ]
      },
      hinglish: 'Ek hi participle ko dono helpers ke saath dekho \u2014 <b>werden</b> ke saath kaam chal raha hai, aur <b>sein</b> ke saath kaam khatam ho gaya hai. Yahi poora farak hai.'
    },
    {
      title: 'Typische Kontexte',
      body: [ 'Zustandspassiv appears constantly in realistic workplace and travel situations.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Das Büro ist geschlossen.', 'The office is closed.'],
          ['Die Aufgabe ist erledigt.', 'The task is done.'],
          ['Das Essen ist vorbereitet.', 'The food is prepared.'],
          ['Die Präsentation ist abgeschlossen.', 'The presentation is concluded.'],
          ['Alle Unterlagen sind unterschrieben.', 'All the documents are signed.']
        ]
      },
      hinglish: 'Yeh structure office aur travel wale situations mein bahut aata hai \u2014 jaise notice board par ya email mein, jahan sirf current haalat batani hoti hai.'
    },
    {
      title: 'Zeitbezug: nur der aktuelle Zustand',
      body: [ 'Zustandspassiv focuses ONLY on the current condition. It does NOT say who performed the action or when — that information is simply absent from the sentence.' ],
      hinglish: 'Zustandspassiv sirf abhi ki haalat batata hai. Isme yeh nahi hota ki kaam kisne kiya ya kab kiya \u2014 woh jaankaari sentence mein aati hi nahi. Agar karne wale ka naam batana ho, to Vorgangspassiv use karo.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These examples reflect authentic Goethe B2 workplace and university situations.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Die Bewerbung ist abgeschickt.', 'The application is sent off.'],
          ['Der Vertrag ist unterschrieben.', 'The contract is signed.'],
          ['Die Konferenzräume sind reserviert.', 'The conference rooms are reserved.'],
          ['Das Hotel ist ausgebucht.', 'The hotel is fully booked.']
        ]
      },
      hinglish: 'Yeh examples wahi hain jo Goethe B2 ke office aur university wale texts mein asli mein aate hain.'
    },
    {
      title: 'Register',
      body: [ 'Zustandspassiv is extremely common in business German, emails, reports, notices, newspapers, academic writing, and Goethe B2 writing.' ],
      hinglish: 'Yeh structure business German, emails, reports aur notices mein bahut common hai \u2014 kyunki wahan aksar sirf result batana hota hai, process nahi.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These come from using an infinitive instead of the Partizip II, forgetting subject agreement on sein, mixing up worden and geworden, or trying to name an agent in a Zustandspassiv. Note that choosing <b>werden</b> instead of <b>sein</b> is NOT an error \u2014 <span class="de">Die T\u00fcr wird ge\u00f6ffnet</span> and <span class="de">Die T\u00fcr ist ge\u00f6ffnet</span> are both correct and simply mean different things.' ],
      mistakes: [
        { wrong: 'Die Tür ist öffnen.', right: 'Die Tür ist geöffnet.', why: 'Zustandspassiv needs the Partizip II after sein, never the infinitive.' },
        { wrong: 'Die Fenster ist geschlossen.', right: 'Die Fenster sind geschlossen.', why: 'sein still agrees with its subject \u2014 <i>die Fenster</i> is plural, so it takes <b>sind</b>.' },
        { wrong: 'Die Tür ist geschlossen geworden.', right: 'Die Tür ist geschlossen worden.', why: 'The Perfekt of Vorgangspassiv uses <b>worden</b>, never geworden \u2014 geworden belongs to the verb <i>werden</i> meaning \u201cto become\u201d.' },
        { wrong: 'Die Dokumente sind unterschreiben.', right: 'Die Dokumente sind unterschrieben.', why: 'The Partizip II of "unterschreiben" is "unterschrieben", not "unterschreiben".' },
        { wrong: 'Das Büro ist von dem Chef geschlossen.', right: 'Das Büro ist geschlossen. / Das Büro wurde vom Chef geschlossen.', why: 'Zustandspassiv only reports the state, so it does not name who did it. If you need the agent, switch to Vorgangspassiv with wurde.' }
      ],
      hinglish: 'Yeh galtiyan chaar wajah se hoti hain \u2014 Partizip II ki jagah infinitive laga dena, <b>sein</b> ko subject se match na karna, <b>worden</b> aur <b>geworden</b> mila dena, ya Zustandspassiv mein kaam karne wale ka naam daal dena. Ek baat clear rakho: <b>werden</b> ki jagah <b>sein</b> chunna galti nahi hai \u2014 dono sahi hain, bas matlab alag hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Ask yourself: Am I talking about an action happening, or the result after it? That answers werden vs sein immediately.' ],
      note: 'Memory trick: werden = something is happening. sein = something is already finished. Process? → werden. Result? → sein.',
      hinglish: 'Har baar khud se ek sawaal poochho \u2014 main kaam <b>ho rahe</b> hone ki baat kar raha hoon, ya kaam <b>ho chukne</b> ke baad ki haalat ki? Isi se turant pata chal jaayega ki <b>werden</b> lagana hai ya <b>sein</b>.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Firmenporträt: Berufsausbildung im Zeitalter der Digitalisierung',
    titleEn: 'Company profile: vocational training in the age of digitalisation',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Berufsausbildung', role: 'plain', en: 'vocational training', hi: 'व्यावसायिक प्रशिक्षण', type: 'Noun · fem.', why: 'die Berufsausbildung (this chapter).' },
      { w: 'ist', role: 'r-verb', en: 'is (Zustandspassiv)', hi: 'हो चुका है (Zustandspassiv)', type: 'Verb · sein + Partizip II (Zustandspassiv)', why: 'Zustandspassiv (sein + Partizip II) describes the RESULT of a completed action, not the action itself (this chapter).' },
      { w: 'inzwischen', role: 'plain', en: 'by now', hi: 'अब तक', type: 'Adverb' },
      { w: 'komplett', role: 'plain', en: 'completely', hi: 'पूरी तरह', type: 'Adjective' },
      { w: 'digitalisiert', role: 'r-verb', en: 'digitalised (Satzende, Zustandspassiv)', hi: 'डिजिटल हो चुका है (Satzende)', type: 'Verb · Partizip II (Zustandspassiv, Satzende)', why: 'digitalisiert here describes a finished STATE — contrast with wird digitalisiert (Vorgangspassiv), which would describe the ongoing process (this chapter).' },
      { w: '.', plain: true },
      { w: 'Alle', role: 'plain', en: 'all', hi: 'सभी', type: 'Determiner' },
      { w: 'Lehrmaterialien', role: 'plain', en: 'teaching materials', hi: 'शिक्षण सामग्री', type: 'Noun · plural' },
      { w: 'sind', role: 'r-verb', en: 'are (Zustandspassiv)', hi: 'हैं (Zustandspassiv)', type: 'Verb · sein + Partizip II (Zustandspassiv)' },
      { w: 'bereits', role: 'plain', en: 'already', hi: 'पहले ही', type: 'Adverb' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'Tablets', role: 'plain', en: 'tablets (Satzende)', hi: 'टैबलेट (Satzende)', type: 'Noun · plural' },
      { w: 'gespeichert', role: 'r-verb', en: 'stored (Satzende, Zustandspassiv)', hi: 'संग्रहीत (Satzende)', type: 'Verb · Partizip II (Zustandspassiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Thema', role: 'plain', en: 'topic', hi: 'विषय', type: 'Noun · neut.' },
      { w: 'Nachhaltigkeit', role: 'plain', en: 'sustainability (Satzende)', hi: 'स्थिरता (Satzende)', type: 'Noun · fem.', why: 'die Nachhaltigkeit (this chapter).' },
      { w: 'ist', role: 'r-verb', en: 'is (Zustandspassiv)', hi: 'है (Zustandspassiv)', type: 'Verb · sein + Partizip II (Zustandspassiv)' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Akk.' },
      { w: 'jeden', role: 'plain', en: 'every (masc. acc.)', hi: 'हर', type: 'Determiner · Akk.' },
      { w: 'Ausbildungsplan', role: 'plain', en: 'training plan (Satzende)', hi: 'प्रशिक्षण योजना (Satzende)', type: 'Noun · masc.' },
      { w: 'fest', role: 'plain', en: 'firmly', hi: 'मज़बूती से', type: 'Adverb' },
      { w: 'integriert', role: 'r-verb', en: 'integrated (Satzende, Zustandspassiv)', hi: 'एकीकृत (Satzende)', type: 'Verb · Partizip II (Zustandspassiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Werkstätten', role: 'plain', en: 'workshops (Satzende)', hi: 'कार्यशालाएँ (Satzende)', type: 'Noun · plural' },
      { w: 'sind', role: 'r-verb', en: 'are (Zustandspassiv)', hi: 'हैं (Zustandspassiv)', type: 'Verb · sein + Partizip II (Zustandspassiv)' },
      { w: 'längst', role: 'plain', en: 'long since', hi: 'बहुत पहले से', type: 'Adverb' },
      { w: 'renoviert', role: 'r-verb', en: 'renovated (Satzende, Zustandspassiv)', hi: 'नवीनीकृत (Satzende)', type: 'Verb · Partizip II (Zustandspassiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'So', role: 'plain', en: 'thus', hi: 'इस तरह', type: 'Adverb' },
      { w: 'ist', role: 'r-verb', en: 'is (Zustandspassiv)', hi: 'है', type: 'Verb · sein (Zustandspassiv)', why: 'Zustandspassiv: sein + Partizip II describes the resulting state (this chapter).' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'नई', type: 'Adjective' },
      { w: 'Ausstattung', role: 'plain', en: 'equipment', hi: 'उपकरण', type: 'Noun · fem.' },
      { w: 'bereits', role: 'plain', en: 'already', hi: 'पहले से', type: 'Adverb' },
      { w: 'vollständig', role: 'plain', en: 'fully', hi: 'पूरी तरह', type: 'Adjective' },
      { w: 'installiert', role: 'r-verb', en: 'installed (Satzende, Zustandspassiv)', hi: 'स्थापित (Satzende)', type: 'Verb · Partizip II (Zustandspassiv, Satzende)' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'ersten', role: 'plain', en: 'first', hi: 'पहला', type: 'Adjective' },
      { w: 'Kurs', role: 'plain', en: 'course (Satzende)', hi: 'कोर्स (Satzende)', type: 'Noun · masc.' },
      { w: 'vorbereitet', role: 'r-verb', en: 'prepared (Satzende, Zustandspassiv)', hi: 'तैयार (Satzende)', type: 'Verb · Partizip II (Zustandspassiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Auszubildende', role: 'plain', en: 'apprentices', hi: 'प्रशिक्षु', type: 'Noun · plural' },
      { w: 'sind', role: 'r-verb', en: 'are (Zustandspassiv)', hi: 'हैं (Zustandspassiv)', type: 'Verb · sein + Partizip II (Zustandspassiv)' },
      { w: 'somit', role: 'plain', en: 'thus', hi: 'इस तरह', type: 'Adverb' },
      { w: 'ab', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'the (masc. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'ersten', role: 'plain', en: 'first', hi: 'पहले', type: 'Adjective' },
      { w: 'Tag', role: 'plain', en: 'day (Satzende)', hi: 'दिन (Satzende)', type: 'Noun · masc.' },
      { w: 'optimal', role: 'plain', en: 'optimally', hi: 'बेहतरीन ढंग से', type: 'Adjective' },
      { w: 'auf', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'ihren', role: 'plain', en: 'their', hi: 'अपने', type: 'Possessivartikel' },
      { w: 'Beruf', role: 'plain', en: 'profession (Satzende)', hi: 'पेशे (Satzende)', type: 'Noun · masc.' },
      { w: 'vorbereitet', role: 'r-verb', en: 'prepared (Satzende, Zustandspassiv)', hi: 'तैयार (Satzende)', type: 'Verb · Partizip II (Zustandspassiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Prüfungsordnung', role: 'plain', en: 'examination regulations', hi: 'परीक्षा नियम', type: 'Noun · fem.' },
      { w: 'ist', role: 'r-verb', en: 'is (Zustandspassiv)', hi: 'है', type: 'Verb · sein (Zustandspassiv)' },
      { w: 'inzwischen', role: 'plain', en: 'by now', hi: 'अब तक', type: 'Adverb' },
      { w: 'überarbeitet', role: 'r-verb', en: 'revised (Satzende, Zustandspassiv)', hi: 'संशोधित (Satzende)', type: 'Verb · Partizip II (Zustandspassiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Prüfungen', role: 'plain', en: 'exams', hi: 'परीक्षाएँ', type: 'Noun · plural' },
      { w: 'werden', role: 'plain', en: 'are', hi: 'होती हैं', type: 'Verb · werden (Vorgangspassiv)', why: 'werden + Partizip II here describes the ongoing action, unlike the resulting-state sein-passives above (this chapter).' },
      { w: 'seither', role: 'plain', en: 'since then', hi: 'तब से', type: 'Adverb' },
      { w: 'ausschließlich', role: 'plain', en: 'exclusively', hi: 'पूरी तरह से', type: 'Adverb' },
      { w: 'digital', role: 'plain', en: 'digitally (Satzende)', hi: 'डिजिटल रूप से (Satzende)', type: 'Adjective' },
      { w: 'abgenommen', role: 'r-verb', en: 'administered (Satzende, Vorgangspassiv)', hi: 'ली जाती हैं (Satzende)', type: 'Verb · Partizip II (Vorgangspassiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'Ausbilder', role: 'plain', en: 'trainer', hi: 'प्रशिक्षक', type: 'Noun · masc.' },
      { w: 'erklärt', role: 'plain', en: 'explains', hi: 'बताता है', type: 'Verb · erklären' },
      { w: ':', plain: true },
      { w: '„Früher', role: 'plain', en: '"Earlier', hi: '"पहले', type: 'Adverb' },
      { w: 'war', role: 'r-verb', en: 'was (Zustandspassiv, Präteritum)', hi: 'था', type: 'Verb · sein (Zustandspassiv, Präteritum)' },
      { w: 'unser', role: 'plain', en: 'our', hi: 'हमारा', type: 'Possessivartikel' },
      { w: 'Lehrmaterial', role: 'plain', en: 'teaching material (Satzende)', hi: 'शिक्षण सामग्री (Satzende)', type: 'Noun · neut.' },
      { w: 'noch', role: 'plain', en: 'still', hi: 'अभी भी', type: 'Adverb' },
      { w: 'gedruckt', role: 'r-verb', en: 'printed (Satzende, Zustandspassiv)', hi: 'मुद्रित (Satzende)', type: 'Verb · Partizip II (Zustandspassiv, Satzende)' },
      { w: '“', plain: true },
      { w: ',', plain: true },
      { w: 'erinnert', role: 'plain', en: 'recalls', hi: 'याद करता है', type: 'Verb · sich erinnern' },
      { w: 'er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'sich', role: 'plain', en: 'himself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'lachend', role: 'plain', en: 'laughing (Satzende)', hi: 'हँसते हुए (Satzende)', type: 'Adjective (Partizip I)' },
      { w: '.', plain: true }
    ],
    translation: 'Vocational training has by now become completely digitalised. All teaching materials are already stored on tablets. The topic of sustainability is firmly integrated into every training plan. The workshops, too, have long since been renovated. The new equipment is thus already fully installed and prepared for the first course. The examination regulations, too, have by now been revised. Exams have since then been administered exclusively digitally. A trainer explains: "Back then, our teaching material was still printed," he recalls, laughing.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_044_L001', speaker: 'Merle', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, endlich — die Studie ist fertig!', en: 'Timo, finally — the study is finished!' },
      { id: 'B2_044_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wirklich? Sind auch schon alle Daten ausgewertet?', en: 'Really? Have all the data already been evaluated too?' },
      { id: 'B2_044_L003', speaker: 'Merle', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, alles ist ausgewertet, und das Team ist informiert.', en: 'Yes, everything is evaluated, and the team is informed.' },
      { id: 'B2_044_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Perfekt, dann ist die Konferenz ja bestens vorbereitet.', en: 'Perfect, then the conference is excellently prepared.' }
    ],
    transcript: 'Timo, endlich — die Studie ist fertig! Wirklich? Sind auch schon alle Daten ausgewertet? Ja, alles ist ausgewertet, und das Team ist informiert. Perfekt, dann ist die Konferenz ja bestens vorbereitet.',
    translation: 'Timo, finally — the study is finished! Really? Have all the data already been evaluated too? Yes, everything is evaluated, and the team is informed. Perfect, then the conference is excellently prepared.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'endlich' },
      { w: '—', plain: true },
      { w: 'die' },
      { w: 'Studie' },
      { w: 'ist' },
      { w: 'fertig' },
      { w: '!', plain: true },
      { w: 'Wirklich' },
      { w: '?', plain: true },
      { w: 'Sind' },
      { w: 'auch' },
      { w: 'schon' },
      { w: 'alle' },
      { w: 'Daten' },
      { w: 'ausgewertet' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'alles' },
      { w: 'ist' },
      { w: 'ausgewertet' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'das' },
      { w: 'Team' },
      { w: 'ist' },
      { w: 'informiert' },
      { w: '.', plain: true },
      { w: 'Perfekt' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'ist' },
      { w: 'die' },
      { w: 'Konferenz' },
      { w: 'ja' },
      { w: 'bestens' },
      { w: 'vorbereitet' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was ist laut Merle fertig?', qEn: 'What is finished, according to Merle?', options: ['die Konferenz', 'die Studie', 'das Team', 'der Bericht'], optionsEn: ['the conference', 'the study', 'the team', 'the report'], answer: 1,
        explain: '"Die Studie ist fertig!"' },
      { q: 'Ist das Team informiert?', qEn: 'Is the team informed?', options: ['nein', 'ja', 'teilweise', 'unbekannt'], optionsEn: ['no', 'yes', 'partly', 'unknown'], answer: 1,
        explain: '"… das Team ist informiert."' }
    ]
  },

  speaking: [
    { task: "Deine Studie ist fertig. Sag deinem Kollegen, was erledigt ist.", taskEn: "Your study is finished. Tell your colleague what's done.", de: "Alles ist ausgewertet, und das Team ist informiert.", en: "Everything is analysed, and the team is informed." },
    { task: "Er fragt, ob die Anmeldung schon läuft.", taskEn: "He asks whether registration is already open.", de: "Die Anmeldung ist geöffnet, aber die Plätze sind noch nicht vergeben.", en: "Registration is open, but the places aren't allocated yet." },
    { task: "Deine Chefin fragt, was für die Präsentation vorbereitet ist.", taskEn: "Your boss asks what's prepared for the presentation.", de: "Die Folien sind fertig, der Raum ist reserviert.", en: "The slides are ready, the room is booked." },
    { task: "Eine Kollegin fragt, ob die Anonymität gesichert ist.", taskEn: "A colleague asks whether anonymity is guaranteed.", de: "Die Daten sind anonymisiert und die Namen sind gelöscht.", en: "The data is anonymised and the names are deleted." },
    { task: "Rollenspiel: Ihr prüft den Stand des Forschungsprojekts.", taskEn: "Role-play: you check the state of the research project.", de: "Der Bericht ist abgeschlossen. — Aber die Maßnahmen sind noch nicht umgesetzt.", en: "The report is finished. — But the measures aren't implemented yet." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Formal email (6-8 sentences): Write an office update confirming that the room is reserved, the documents are signed, and the presentation is completed, using Zustandspassiv.\n\nTASK 2 — Hotel information text (6-8 sentences): Inform guests about the state of their room and the hotel using ist vorbereitet, sind geschlossen, ist eingeschaltet, and ist ausgebucht naturally.',
    starters: ['Der Konferenzraum ist …', 'Ihr Zimmer ist …'],
    placeholder: 'Der Konferenzraum ist bereits reserviert. Die Dokumente sind …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence describes a finished RESULT, not a process?',
      options: ['Die Tür ist geöffnet.', 'Die Tür wird geöffnet.', 'Die Tür wird gerade geöffnet.'],
      answer: 0,
      explain: '"ist geöffnet" uses sein + Partizip II — the finished state. "wird geöffnet" describes the process happening.'
    },
    gap: {
      sentence: ['Der Bericht ', ' fertiggestellt.'],
      gaps: [ { answer: 'ist', accepts: ['ist'] } ],
      explain: 'Zustandspassiv needs "ist" (sein), not "wird" — the report is already finished, a result, not a process.'
    },
    match: {
      q: 'Match each sentence to Vorgangspassiv (process) or Zustandspassiv (result).',
      pairs: [
        { noun: 'Die Brücke wird gebaut.', art: 'Vorgangspassiv (process)' },
        { noun: 'Die Brücke ist gebaut.', art: 'Zustandspassiv (result)' },
        { noun: 'Der Computer wird repariert.', art: 'Vorgangspassiv (process)' },
        { noun: 'Der Computer ist repariert.', art: 'Zustandspassiv (result)' }
      ]
    },
    builder: {
      target: 'Build: "The documents are signed." (Zustandspassiv)',
      bank: ['Die', 'Dokumente', 'sind', 'unterschrieben', '.'],
      answer: ['Die', 'Dokumente', 'sind', 'unterschrieben', '.'],
      roles: { 'unterschrieben': 'r-zustand' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Die Aufgabe wird erledigt. (die Aufgabe ist bereits fertig)',
      right: 'Die Aufgabe ist erledigt.',
      explain: 'If the task is already finished, use sein (Zustandspassiv) — "werden" would imply the task is still being completed.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does Zustandspassiv describe?', options: ['The result or state after an action is finished', 'The action happening right now', 'Who performed the action'], answer: 0,
      explain: 'Zustandspassiv (sein + Partizip II) describes the finished result, not the ongoing process.' },
    { q: 'How is Zustandspassiv formed?', options: ['sein + Partizip II', 'werden + Partizip II', 'haben + Partizip II'], answer: 0,
      explain: 'Zustandspassiv always uses a conjugated form of sein plus the Partizip II.' },
    { q: '"Der Computer wird repariert" means:', options: ['Repair is happening right now', 'Repair is already finished', 'The computer was never repaired'], answer: 0,
      explain: '"wird repariert" is Vorgangspassiv — an ongoing process.' },
    { q: '"Der Computer ist repariert" means:', options: ['Repair is finished', 'Repair is happening', 'Someone is about to repair it'], answer: 0,
      explain: '"ist repariert" is Zustandspassiv — the finished result.' },
    { q: 'Does Zustandspassiv tell you WHO performed the action?', options: ['No — it focuses only on the current state', 'Yes, always', 'Only in written German'], answer: 0,
      explain: 'Zustandspassiv never names who acted — that information is simply absent from the sentence.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-zustand', html: 'Zustandspassiv (sein + Partizip II) describes the RESULT or STATE after an action is finished — never the action itself.' },
    { c: 'r-zustand', html: 'Compare the same participle with werden (process, happening now) and sein (result, already finished): Der Bericht wird fertiggestellt vs Der Bericht ist fertiggestellt.' },
    { c: 'r-zustand', html: 'Zustandspassiv is extremely common in business German, emails, reports, and Goethe B2 writing — and never names who performed the action.' }
  ],
  revisionTips: [
    'For every Vorgangspassiv sentence you know, practise building its Zustandspassiv counterpart: same participle, swap werden for sein.',
    'Scan a business email or report for sein + Partizip II — count how many Zustandspassiv sentences you find.',
    'Ask yourself before every passive sentence: process or result? That answers werden vs sein immediately.'
  ]
};

window.CHAPTER = CHAPTER;
