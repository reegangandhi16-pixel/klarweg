/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 2
   "Raum & Zeit präzise ausdrücken" — precise spatial/temporal
   expressions: immediate/simultaneous/duration time markers,
   position/height/direction/abstract space markers. NOT basic
   prepositions or Wechselpräpositionen basics.
   Dialogue: Grit and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-02-raum-und-zeit-praezise-ausdruecken',
  phase: 'C1 · Präzise Satzarchitektur',
  number: 2,
  title: 'Raum & Zeit präzise ausdrücken',
  titleEn: 'Expressing space & time precisely',
  description: 'B2 asks "Where?" and "When?" C1 asks "Exactly where, exactly when, in relation to what, and for how long?" Precision defines C1 German.',
  xp: 270,
  time: 95,
  difficulty: 'Advanced',
  nextChapter: { number: 3, title: 'Nebensätze sicher beherrschen', titleEn: 'Mastering complex subordinate clauses' , href: 'chapter-c1-03-nebensaetze-sicher-beherrschen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Not just <em>where</em> and <em>when</em> — <em>exactly</em> where and when.',
    intro: 'Organizing a research trip across Germany, Grit needs Timo\'s answer immediately after the meeting, and he promises the report within the week — every plan pinned down with precise spatial and temporal expressions, not just "where" and "when".',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See precise temporal sequencing, simultaneity, duration, and spatial orientation used naturally'
    ],
    scene: 'Planung einer Forschungsreise',
    femaleSpeakers: ['Grit'],
    dialogue: [
      { speaker: 'Grit', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'brauche', role: 'r-verb', en: 'need', hi: 'चाहिए', pron: 'BROW-khuh', type: 'Verb · brauchen (ich)' },
        { w: 'deine', role: 'r-akkusativ', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive · acc.' },
        { w: 'Antwort', role: 'r-akkusativ', en: 'answer', hi: 'जवाब', pron: 'ANT-vort', type: 'Noun · fem.' },
        { w: 'unmittelbar', role: 'r-akkusativ', en: 'immediately', hi: 'तुरंत', pron: 'un-MI-tel-bahr', type: 'Adverb', why: 'unmittelbar = immediately/directly (this chapter).', ex: 'Ich brauche deine Antwort unmittelbar.', exEn: 'I need your answer immediately.' },
        { w: 'nach', role: 'r-preposition', en: 'after', hi: 'के बाद', pron: 'nahkh', type: 'Preposition' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Sitzung', role: 'r-dativ', en: 'meeting (dat.)', hi: 'बैठक के', pron: 'ZIT-sung', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'I need your answer immediately after the meeting.', hi: 'Mujhe baithak ke turant baad tumhaara jawaab chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Im', role: 'r-preposition', en: 'in the', hi: 'के दौरान', pron: 'im', type: 'Preposition + place' },
        { w: 'Laufe', role: 'r-dativ', en: 'course (dat.)', hi: 'दौरान', pron: 'LOW-fuh', type: 'Noun · masc. dat.', why: 'im Laufe + Genitiv = in the course of (this chapter).', ex: 'im Laufe der Woche' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Woche', role: 'r-dativ', en: 'week (gen.)', hi: 'हफ़्ते के', pron: 'VO-khuh', type: 'Noun · fem. genitive' },
        { w: 'sende', role: 'r-verb', en: 'send', hi: 'भेजूंगा', pron: 'ZEN-duh', type: 'Verb · senden (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Bericht', role: 'r-akkusativ', en: 'report', hi: 'रिपोर्ट', pron: 'be-RIKHT', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'In the course of the week I will send you the report.', hi: 'Hafte ke dauraan main tumhe report bhejunga.' },
      { speaker: 'Grit', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Können', role: 'r-modalverb', en: 'can', hi: 'सकते हैं', pron: 'KÖ-nen', type: 'Modal · können (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'gleichzeitig', role: 'r-akkusativ', en: 'simultaneously', hi: 'एक साथ', pron: 'GLYKH-tsy-tikh', type: 'Adverb', why: 'gleichzeitig = simultaneously (this chapter).', ex: 'Wir arbeiten gleichzeitig daran.', exEn: 'We work on it simultaneously.' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Präsentation', role: 'r-dativ', en: 'presentation (dat.)', hi: 'प्रस्तुति के', pron: 'pray-zen-ta-TSYON', type: 'Noun · fem. dat.' },
        { w: 'bearbeiten', role: 'r-verb', en: 'work on', hi: 'साथ में करना', pron: 'be-AR-by-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Can we work on that simultaneously with the presentation?', hi: 'Kya hum use prastuti ke saath ek saath kar sakte hain?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'In', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition + place' },
        { w: 'unmittelbarer', role: 'r-dativ', en: 'immediate', hi: 'तत्काल', pron: 'un-MI-tel-bah-rer', type: 'Adjective · dative' },
        { w: 'Nähe', role: 'r-dativ', en: 'vicinity (dat.)', hi: 'आस-पास में', pron: 'NAY-uh', type: 'Noun · fem. dat.', why: 'in unmittelbarer Nähe = in immediate vicinity, fixed phrase (this chapter).', ex: 'in unmittelbarer Nähe des Termins' },
        { w: 'des', role: 'r-dativ', en: 'the (masc. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Termins', role: 'r-dativ', en: 'appointment (gen.)', hi: 'मुलाक़ात के', pron: 'ter-MEENS', type: 'Noun · masc. genitive' },
        { w: 'planen', role: 'r-verb', en: 'plan', hi: 'योजना बनाते हैं', pron: 'PLAH-nen', type: 'Verb · planen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'Meeting', role: 'r-akkusativ', en: 'meeting', hi: 'मीटिंग', pron: 'MEE-ting', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Yes. In immediate vicinity of the appointment, we plan the meeting.', hi: 'Haan. Mulaqaat ke bilkul aas-paas, hum meeting ki yojana banaate hain.' },
      { speaker: 'Grit', tokens: [
        { w: 'Im', role: 'r-preposition', en: 'within the', hi: 'के भीतर', pron: 'im', type: 'Preposition + place' },
        { w: 'Rahmen', role: 'r-dativ', en: 'framework (dat.)', hi: 'ढांचे के', pron: 'RAH-men', type: 'Noun · masc. dat.', why: 'im Rahmen + Genitiv = within the framework of (this chapter).', ex: 'im Rahmen des Projekts' },
        { w: 'des', role: 'r-dativ', en: 'the (neut. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Projekts', role: 'r-dativ', en: 'project (gen.)', hi: 'परियोजना के', pron: 'pro-YEKTS', type: 'Noun · neut. genitive' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Budget', role: 'r-akkusativ', en: 'budget', hi: 'बजट', pron: 'BUD-shet', type: 'Noun · neut.' },
        { w: 'besprechen', role: 'r-verb', en: 'discuss', hi: 'चर्चा करना', pron: 'be-SHPRE-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Within the framework of the project we should also discuss the budget.', hi: 'Pariyojana ke dhaanche ke bheetar, humein budget par bhi charcha karni chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Einverstanden', role: 'r-subject', en: 'agreed', hi: 'सहमत', pron: 'INE-fer-shtan-den', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'sehen', role: 'r-verb', en: 'see', hi: 'देखते हैं', pron: 'ZAY-en', type: 'Verb · sehen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'uns', role: 'r-akkusativ', en: 'ourselves', hi: 'ख़ुद को', pron: 'uns', type: 'Reflexive pronoun' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'Agreed! Then we see each other tomorrow.', hi: 'Sahmat! Toh kal milte hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'B2 asks <b>"Where?"</b> C1 asks <b>"Exactly where?"</b> B2 asks <b>"When?"</b> C1 asks <b>"Exactly when, in relation to what, and for how long?"</b> <span class="de r-space">Präzision</span> is a defining trait of C1 German.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is RAUM & ZEIT PRÄZISE AUSDRÜCKEN at C1 level — precise spatial and temporal expressions, NOT basic prepositions or elementary time expressions (already mastered at B2). Covered: precise time expressions (unmittelbar nach/vor, gleichzeitig mit, parallel zu, innerhalb von, im Verlauf von, im Laufe, währenddessen, seither, bislang, fortan, inzwischen, langfristig, kurzfristig, vorübergehend); chronological relations and nuanced sequencing; simultaneity (gleichzeitig, parallel, zeitgleich, währenddessen, zugleich); duration (über einen Zeitraum von, innerhalb eines Jahres, über mehrere Jahrzehnte hinweg, im Laufe der Zeit); precise spatial expressions (entlang, gegenüber, jenseits, diesseits, innerhalb, außerhalb, oberhalb, unterhalb, am Rande, im Zentrum, in unmittelbarer Nähe, im Umkreis); abstract spatial metaphors (im Mittelpunkt stehen, am Rand der Gesellschaft, im Bereich der Forschung, auf internationaler Ebene, im Rahmen, im Kontext, im Umfeld). ' +
    'Do NOT expect or require basic prepositions, Wechselpräpositionen basics, or elementary time expressions — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: imprecise, B2-level constructions where a more precise C1 expression is expected (e.g. "nach dem Essen" instead of "unmittelbar nach dem Essen" when precision is called for); confused or nonsensical combinations (e.g. "innerhalb von während", "gleichzeitig aber"); misuse of abstract spatial metaphors. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag imprecise time/space expressions only where the context clearly calls for more precision (do not force every sentence to use advanced vocabulary).\n' +
    '- Check that Genitiv/Dativ requirements of prepositions like "innerhalb", "entlang", "gegenüber" are correct.\n' +
    '- Check that abstract spatial metaphors (im Rahmen, im Mittelpunkt, im Kontext) are used idiomatically, not literally translated.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Precision check:</b> one sentence on whether the learner used precise C1 spatial/temporal expressions where the context called for them.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you express space and time with real C1 precision. Ready for subordinate clauses next.',
    mid: 'Good. Re-read the Time and Space Expression tables once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: C1 always asks "exactly where/when," not just "where/when."'
  },

  parserSentence: [
    { w: 'Unmittelbar', role: 'r-time' }, { w: 'nach', role: 'r-time' }, { w: 'der', role: 'plain' }, { w: 'Konferenz', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: C1 German values precision over simplicity in describing space and time.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Grit and Timo plan a research trip using precise temporal sequencing and spatial orientation.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master precise time expressions, simultaneity, duration, spatial orientation, and abstract spatial metaphors.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a historical article on chronological development and a geographical report, identifying precise markers.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify temporal progression and spatial relationships in a university lecture and a documentary.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe journeys, historical developments, and geographical relationships using advanced C1 language.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite a B2 text with more precise expressions, and write an analytical report on project development.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill timeline reconstruction, spatial mapping, and sequence ordering.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 270 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 15 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Timeline reconstruction, spatial mapping drills, and a full analytical report writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Time Expression and Space Expression tables, plus the Decision Flowchart.',
      pdfUrl: '/pdfs/grammar.pdf', size: '11 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Unmittelbar nach der Konferenz sollten wir weiterfahren.', text: 'Express precise, immediate temporal sequencing' },
    { de: 'Gleichzeitig müssen wir die Interviews organisieren.', text: 'Express simultaneity precisely' },
    { de: 'Innerhalb von drei Tagen müssten wir das schaffen.', text: 'Express bounded duration precisely' },
    { de: 'Es liegt in unmittelbarer Nähe des Hauptbahnhofs, gegenüber der Bibliothek.', text: 'Describe precise spatial position and orientation' },
    { de: 'Im Rahmen dieser Entwicklung steht unsere Forschung im Mittelpunkt.', text: 'Use abstract spatial metaphors in academic contexts' }
  ],

  vocab: [
    { de: 'unmittelbar', ipa: '[ʊnˈmɪtl̩baːɐ̯]', en: 'immediate(ly)', hi: 'turant', pos: 'Adjective/Adverb', register: 'C1 · formal/academic', category: 'Temporal · immediate',
      note: 'Precisely marks something happening right before or after another event, without delay.',
      ex1: { de: 'Unmittelbar nach dem Vortrag begann die Diskussion.', en: 'Immediately after the lecture the discussion began.', hi: 'Vyakhyaan ke turant baad charcha shuru hui.' },
      ex2: { de: 'Die Ergebnisse wurden unmittelbar veröffentlicht.', en: 'The results were published immediately.', hi: 'Parinaam turant prakashit kiye gaye.' },
      collocations: ['unmittelbar nach', 'unmittelbar vor', 'unmittelbare Nähe'] },
    { de: 'gleichzeitig', ipa: '[ˈɡlaɪçtsaɪtɪç]', en: 'simultaneous(ly)', hi: 'ek hi samay mein', pos: 'Adjective/Adverb', register: 'C1 · academic/formal', category: 'Temporal · simultaneity',
      note: 'Precisely marks two or more actions happening at the same time.',
      ex1: { de: 'Er arbeitete an zwei Projekten gleichzeitig.', en: 'He worked on two projects simultaneously.', hi: 'Woh ek hi samay mein do projects par kaam kar raha tha.' },
      ex2: { de: 'Gleichzeitig entwickelte sich die Technologie rasant.', en: 'Simultaneously, the technology developed rapidly.', hi: 'Isi samay, technology tezi se vikasit hui.' },
      collocations: ['gleichzeitig mit', 'zeitgleich'] },
    { de: 'im Laufe', ipa: '[ɪm ˈlaʊfə]', en: 'in the course of', hi: 'daur mein', pos: 'Präposition (fixed expression)', register: 'C1 · academic/formal', category: 'Temporal · duration',
      note: 'Precisely expresses an extended duration during which something develops.',
      ex1: { de: 'Im Laufe der Jahre veränderte sich die Stadt stark.', en: 'In the course of the years, the city changed a lot.', hi: 'Saalon ke daur mein, shahar bahut badla.' },
      ex2: { de: 'Im Laufe des Projekts entstanden neue Ideen.', en: 'In the course of the project, new ideas emerged.', hi: 'Project ke daur mein naye vichaar aaye.' },
      collocations: ['im Laufe der Zeit', 'im Laufe des Jahres'] },
    { de: 'in unmittelbarer Nähe', ipa: '[ɪn ʊnˈmɪtl̩baːɐ̯ɐ ˈnɛːə]', en: 'in the immediate vicinity', hi: 'nazdeek mein', pos: 'Präpositionalphrase', register: 'C1 · formal/geographic', category: 'Spatial · position',
      note: 'A more precise alternative to "in der Nähe von", emphasizing close proximity.',
      ex1: { de: 'Das Museum liegt in unmittelbarer Nähe des Bahnhofs.', en: 'The museum is in the immediate vicinity of the station.', hi: 'Museum station ke nazdeek sthit hai.' },
      ex2: { de: 'Wir wohnen in unmittelbarer Nähe der Universität.', en: 'We live in the immediate vicinity of the university.', hi: 'Hum university ke nazdeek rehte hain.' },
      collocations: ['in unmittelbarer Nähe von', 'in unmittelbarer Nähe des Bahnhofs'] },
    { de: 'im Rahmen', ipa: '[ɪm ˈʁaːmən]', en: 'within the framework of', hi: 'daayre mein', pos: 'Präposition (fixed expression, abstract)', register: 'C1 · academic/formal', category: 'Spatial · abstract',
      note: 'An abstract spatial metaphor common in academic and formal contexts, meaning "as part of" or "within the scope of".',
      ex1: { de: 'Im Rahmen der Studie wurden 500 Personen befragt.', en: 'Within the framework of the study, 500 people were surveyed.', hi: 'Adhyayan ke daayre mein, 500 logon se poocha gaya.' },
      ex2: { de: 'Im Rahmen des Projekts entstand eine neue Kooperation.', en: 'Within the framework of the project, a new cooperation emerged.', hi: 'Project ke daayre mein ek nayi saajhedaari bani.' },
      collocations: ['im Rahmen der Studie', 'im Rahmen dieser Entwicklung'] }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Warum Präzision zählt',
      body: [ 'Basic German → Correct German → Precise German → Professional German. Compare "Nach dem Essen..." with "Unmittelbar nach Abschluss der Besprechung...".' ],
      hinglish: 'Farak dekho: <span class="de">Nach dem Essen \u2026</span> aur <span class="de">Unmittelbar nach Abschluss der Besprechung \u2026</span>. Dono sahi hain, par doosra batata hai ki <b>kab exactly</b>. C1 par yahi expect kiya jaata hai \u2014 sirf sahi nahi, balki precise.'
    },
    {
      title: 'Präzise Zeitausdrücke',
      body: [ 'Includes: unmittelbar nach/vor, gleichzeitig mit, parallel zu, innerhalb von, im Verlauf von, im Laufe, währenddessen, seither, bislang, fortan, inzwischen, langfristig, kurzfristig, vorübergehend.' ],
      hinglish: 'Yeh time expressions <i>nach</i> aur <i>vor</i> se kahin zyada precise hain. Inhe function ke hisaab se yaad karo \u2014 turant ke liye <b>unmittelbar nach/vor</b>, saath-saath ke liye <b>gleichzeitig mit</b> aur <b>parallel zu</b>, aur ab tak ke liye <b>seither</b>, <b>bislang</b>, <b>inzwischen</b>.'
    },
    {
      title: 'Chronologische Beziehungen',
      body: [ 'Nuanced sequencing: Earlier → Meanwhile → Immediately afterwards → Later → Eventually.' ],
      hinglish: 'Ghatnaon ko order mein rakhne ke liye yeh chain kaam aati hai: pehle, isi beech, turant baad, phir baad mein, aur ant mein. Har step ka apna shabd hai, isliye reader ko timeline saaf dikhti hai.'
    },
    {
      title: 'Gleichzeitigkeit (Simultaneity)',
      body: [ 'Expressions: gleichzeitig, parallel, zeitgleich, währenddessen, zugleich, gleichzeitig dazu — each with subtle differences of register and emphasis.' ],
      hinglish: 'Saath-saath hone ke liye kai shabd hain, par register alag hai. <b>gleichzeitig</b> sabse aam hai, <b>zeitgleich</b> zyada formal aur technical lagta hai, <b>w\u00e4hrenddessen</b> kahani mein aata hai, aur <b>zugleich</b> aksar do pehlu jodne ke liye.'
    },
    {
      title: 'Dauer (Duration)',
      body: [ 'Kitne samay tak, yeh batane ke liye: <span class="de">\u00fcber einen Zeitraum von</span>, <span class="de">im Laufe der Zeit</span>, <span class="de">\u00fcber mehrere Jahrzehnte hinweg</span>. Dhyaan do ki <b>hinweg</b> hamesha noun ke baad aata hai.' ],
      hinglish: 'Kitne samay tak, yeh batane ke liye: <span class="de">\u00fcber einen Zeitraum von</span>, <span class="de">im Laufe der Zeit</span>, <span class="de">\u00fcber mehrere Jahrzehnte hinweg</span>. Dhyaan do ki <b>hinweg</b> hamesha noun ke baad aata hai.'
    },
    {
      title: 'Präzise Raumausdrücke',
      body: [ 'Includes: entlang, gegenüber, jenseits, diesseits, innerhalb, außerhalb, oberhalb, unterhalb, am Rande, im Zentrum, in unmittelbarer Nähe, im Umkreis, entlang der Küste, im Verlauf des Flusses.' ],
      hinglish: 'Jagah batane ke liye yeh expressions <i>in</i> aur <i>bei</i> se kahin precise hain. <b>oberhalb</b> aur <b>unterhalb</b> \u00fcber/unter se zyada exact hain, aur <b>in unmittelbarer N\u00e4he</b> ya <b>im Umkreis</b> formal writing mein bahut aate hain.'
    },
    {
      title: 'Kasus bei diesen Ausdr\u00fccken',
      body: [
        'These precise expressions are only useful if you can attach them correctly, and each one comes with a fixed case. This is where most C1 mistakes actually happen \u2014 not in choosing the expression, but in the ending after it.'
      ],
      table: {
        head: ['Expression', 'Case', 'Example'],
        rows: [
          ['innerhalb / au\u00dferhalb / oberhalb / unterhalb', 'Genitiv', '<span class="de">innerhalb <b>eines</b> Jahres</span>'],
          ['innerhalb <b>von</b>', 'Dativ', '<span class="de">innerhalb von <b>drei</b> Tagen</span>'],
          ['w\u00e4hrend', 'Genitiv', '<span class="de">w\u00e4hrend <b>der</b> Besprechung</span>'],
          ['unmittelbar nach / vor', 'Dativ', '<span class="de">unmittelbar nach <b>dem</b> Treffen</span>'],
          ['gleichzeitig mit / parallel zu', 'Dativ', '<span class="de">parallel zu <b>den</b> Verhandlungen</span>'],
          ['im Laufe / im Verlauf', 'Genitiv', '<span class="de">im Laufe <b>des</b> Tages</span>'],
          ['entlang (nachgestellt)', 'Akkusativ', '<span class="de">den Fluss entlang</span>'],
          ['gegen\u00fcber', 'Dativ', '<span class="de">gegen\u00fcber <b>dem</b> Bahnhof</span>']
        ]
      },
      note: 'Careful with <b>entlang</b>: placed AFTER the noun it takes the Akkusativ (<i>den Fluss entlang</i>), but placed before it, it takes the Dativ (<i>entlang dem Fluss</i>).',
      hinglish: 'Yeh precise expressions tabhi kaam ke hain jab tum inhe sahi case ke saath laga sako \u2014 aur asli C1 galtiyan yahin hoti hain, expression chunne mein nahi balki uske baad wali ending mein. Zyada-tar <b>-halb</b> wale (innerhalb, au\u00dferhalb, oberhalb, unterhalb) aur <b>w\u00e4hrend</b>, <b>im Laufe</b> Genitiv lete hain. Par jaise hi <b>von</b> ya <b>zu</b> aata hai, case Dativ ho jaata hai \u2014 <span class="de">innerhalb von drei Tagen</span>. Aur <b>entlang</b> ka apna niyam hai: noun ke <b>baad</b> aaye to Akkusativ (<span class="de">den Fluss entlang</span>), aur pehle aaye to Dativ.'
    },
    {
      title: 'Abstrakter Raum (metaphorisch)',
      body: [ 'Yeh jagah wale shabd abstract matlab mein bhi chalte hain \u2014 aur academic writing mein yahi use sabse zyada aata hai. <span class="de">im Mittelpunkt stehen</span> matlab kisi cheez par focus hona, <span class="de">im Rahmen</span> matlab kisi cheez ke andar, aur <span class="de">auf internationaler Ebene</span> matlab international level par.' ],
      hinglish: 'Yeh jagah wale shabd abstract matlab mein bhi chalte hain \u2014 aur academic writing mein yahi use sabse zyada aata hai. <span class="de">im Mittelpunkt stehen</span> matlab kisi cheez par focus hona, <span class="de">im Rahmen</span> matlab kisi cheez ke andar, aur <span class="de">auf internationaler Ebene</span> matlab international level par.'
    },
    {
      title: 'Zeitausdruckstabelle',
      body: [ 'Grouped by function.' ],
      table: {
        head: ['Function', 'Expressions'],
        rows: [
          ['Immediate', 'unmittelbar nach, unmittelbar vor'],
          ['Simultaneous', 'gleichzeitig, parallel, zeitgleich'],
          ['Duration', 'im Laufe, über einen Zeitraum von'],
          ['Beginning', 'zunächst, anfangs'],
          ['Ending', 'schließlich, letztlich'],
          ['Continuation', 'inzwischen, fortan, seither']
        ]
      },
      hinglish: 'Function ke hisaab se grouped \u2014 pehle yeh socho ki tum kya batana chahte ho (turant, saath-saath, ya kitni der), phir uske group se expression chuno.'
    },
    {
      title: 'Raumausdruckstabelle',
      body: [ 'Grouped by function.' ],
      table: {
        head: ['Function', 'Expressions'],
        rows: [
          ['Position', 'innerhalb, außerhalb'],
          ['Height', 'oberhalb, unterhalb'],
          ['Direction', 'entlang, gegenüber'],
          ['Abstract', 'im Rahmen, im Kontext, im Mittelpunkt']
        ]
      },
      hinglish: 'Function ke hisaab se grouped \u2014 pehle yeh socho ki tum kya batana chahte ho (turant, saath-saath, ya kitni der), phir uske group se expression chuno.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from combining precise expressions incorrectly or applying spatial expressions too literally.' ],
      mistakes: [
        { wrong: 'Nach zwei Stunden später kam er zurück.', right: 'Nach zwei Stunden kam er zurück. / Zwei Stunden später kam er zurück.', why: '<b>nach</b> and <b>sp\u00e4ter</b> both mark the same time relation, so using them together doubles it. Pick one.' },
        { wrong: 'Die Kosten sinken, gleichzeitig aber steigt die Qualität.', right: 'Die Kosten sinken, gleichzeitig steigt jedoch die Qualität.', why: 'Two connectors cannot share position 1. Put <b>gleichzeitig</b> first and let <b>jedoch</b> sit in the middle field.' },
        { wrong: 'Innerhalb von während der Bauzeit gab es Verzögerungen.', right: 'Innerhalb der Bauzeit gab es Verzögerungen. / Während der Bauzeit gab es Verzögerungen.', why: 'These are two competing structures. Note the case: <b>innerhalb</b> takes the Genitiv, but <b>innerhalb von</b> takes the Dativ.' },
        { wrong: 'Das Café liegt neben die Universität.', right: 'Das Café liegt neben der Universität.', why: '<i>liegen</i> describes a position, not a movement, so <b>neben</b> takes the Dativ here.' },
        { wrong: 'Ich wohne im Zentrum von Deutschland.', right: 'Ich wohne im Stadtzentrum.', why: '<i>im Zentrum von Deutschland</i> means the geographical middle of the country. For a city centre you need <b>im Stadtzentrum</b>.' }
      ],
      hinglish: 'Yeh galtiyan do wajah se hoti hain \u2014 do expressions ko ek saath jod dena jo ek hi kaam karte hain, ya case galat laga dena. Precise banne ke chakkar mein zyada shabd mat jodo; ek sahi expression kaafi hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to describe time? Choose immediate / simultaneous / duration. Need to describe space? Choose location / direction / abstract relation. Then pick the most precise expression.' ],
      note: 'Memory trick: B2 asks "Where?" C1 asks "Exactly where?" B2 asks "When?" C1 asks "Exactly when, in relation to what, and for how long?"',
      hinglish: 'Samay batana hai? Pehle decide karo \u2014 turant, saath-saath, ya kitni der. Jagah batani hai? Decide karo \u2014 position, direction, ya abstract. Phir us group se sabse precise expression chuno, aur uska case check kar lo.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Stadtmagazin: Vom Speicher zum Stadtviertel',
    titleEn: 'Reading A — City magazine: from warehouse to neighbourhood',
    tokens: [
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Pronoun · indefinite' },
      { w: 'heute', role: 'plain', en: 'today', hi: 'आज', type: 'Adverb' },
      { w: 'durch', role: 'plain', en: 'through', hi: 'से होकर', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Speicherstadt', role: 'plain', en: 'Speicherstadt (warehouse district)', hi: 'स्पाइषरश्टाट', type: 'Noun · fem.' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'Hamburg', role: 'plain', en: 'Hamburg', hi: 'हैम्बर्ग', type: 'Name' },
      { w: 'spaziert', role: 'plain', en: 'strolls (Satzende)', hi: 'घूमता है (Satzende)', type: 'Verb · spazieren (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'sieht', role: 'plain', en: 'sees', hi: 'देखता है', type: 'Verb · sehen' },
      { w: 'kaum', role: 'plain', en: 'hardly', hi: 'मुश्किल से', type: 'Adverb' },
      { w: 'noch', role: 'plain', en: 'anymore', hi: 'अब', type: 'Adverb' },
      { w: 'etwas', role: 'plain', en: 'anything', hi: 'कुछ', type: 'Pronoun' },
      { w: 'von', role: 'plain', en: 'of', hi: 'का', type: 'Preposition · Dat.' },
      { w: 'ihrer', role: 'plain', en: 'its', hi: 'उसके', type: 'Possessivartikel · Dat.' },
      { w: 'ursprünglichen', role: 'plain', en: 'original', hi: 'मूल', type: 'Adjective · Dat.' },
      { w: 'Bestimmung', role: 'plain', en: 'purpose', hi: 'उद्देश्य', type: 'Noun · fem.' },
      { w: 'als', role: 'plain', en: 'as', hi: 'के रूप में', type: 'Preposition' },
      { w: 'Lagerhausviertel', role: 'plain', en: 'warehouse district (Satzende)', hi: 'गोदाम इलाक़े (Satzende)', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Bis', role: 'r-time', en: 'until (precise time limit, part of "bis...hinein")', hi: 'तक (सटीक समय-सीमा)', type: 'Präposition · Akk.', why: '"Bis in die 1980er Jahre hinein" precisely marks how far into the past a state persisted (this chapter).' },
      { w: 'in', role: 'r-time', en: 'into', hi: 'में', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (plural akk.)', hi: 'ये', type: 'Article · Akk.' },
      { w: '1980er', role: 'plain', en: '1980s', hi: '1980 के दशक के', type: 'Adjective' },
      { w: 'Jahre', role: 'plain', en: 'years', hi: 'साल', type: 'Noun · plural · Akk.' },
      { w: 'hinein', role: 'r-time', en: 'into (Satzende, closes "bis...hinein")', hi: '(Satzende)', type: 'Adverb (Satzende)' },
      { w: 'lagerten', role: 'plain', en: 'were stored', hi: 'रखा जाता था', type: 'Verb · lagern (Präteritum)' },
      { w: 'hier', role: 'r-space', en: 'here (precise location)', hi: 'यहाँ', type: 'Adverb' },
      { w: 'Kaffee', role: 'plain', en: 'coffee', hi: 'कॉफ़ी', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'Tee', role: 'plain', en: 'tea', hi: 'चाय', type: 'Noun · masc.' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'Gewürze', role: 'plain', en: 'spices', hi: 'मसाले', type: 'Noun · plural' },
      { w: 'aus', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'aller', role: 'plain', en: 'all of', hi: 'सारी', type: 'Determiner · Dat.' },
      { w: 'Welt', role: 'plain', en: 'world (Satzende)', hi: 'दुनिया (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Im', role: 'r-time', en: 'in the (Kontraktion, part of "im Laufe" — gradual duration)', hi: '(क्रमिक अवधि का हिस्सा)', type: 'Präposition (Kontraktion)' },
      { w: 'Laufe', role: 'r-time', en: 'course (Satzende, closes "im Laufe")', hi: 'के दौरान (Satzende)', type: 'Noun · masc. (Satzende)', why: '"Im Laufe der neunziger Jahre" marks a gradual development over an extended period (this chapter).' },
      { w: 'der', role: 'plain', en: 'the (plural gen.)', hi: 'के', type: 'Article · Gen.' },
      { w: 'neunziger', role: 'plain', en: 'nineties', hi: '90 के दशक', type: 'Adjective · Gen.' },
      { w: 'Jahre', role: 'plain', en: 'years (Satzende)', hi: 'साल (Satzende)', type: 'Noun · plural · Gen.' },
      { w: 'jedoch', role: 'plain', en: 'however', hi: 'हालांकि', type: 'Adverb' },
      { w: 'verlor', role: 'plain', en: 'lost', hi: 'खो दिया', type: 'Verb · verlieren (Präteritum)' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Hafen', role: 'plain', en: 'port', hi: 'बंदरगाह', type: 'Noun · masc.' },
      { w: 'zunehmend', role: 'plain', en: 'increasingly', hi: 'बढ़ते हुए', type: 'Adverb' },
      { w: 'an', role: 'plain', en: '(fixed with Bedeutung verlieren)', hi: '', type: 'Präposition · Dat.' },
      { w: 'Bedeutung', role: 'plain', en: 'significance', hi: 'महत्व', type: 'Noun · fem.' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'den', role: 'plain', en: 'the (masc. akk.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'klassischen', role: 'plain', en: 'classic', hi: 'पारंपरिक', type: 'Adjective · Akk.' },
      { w: 'Warenumschlag', role: 'plain', en: 'freight handling (Satzende)', hi: 'माल ढुलाई (Satzende)', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Stadt', role: 'plain', en: 'city', hi: 'शहर', type: 'Noun · fem.' },
      { w: 'stand', role: 'plain', en: 'faced', hi: 'सामने था', type: 'Verb · stehen (Präteritum)' },
      { w: 'vor', role: 'plain', en: 'before', hi: 'के सामने', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · Dat.' },
      { w: 'Frage', role: 'plain', en: 'question', hi: 'सवाल', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'was', role: 'plain', en: 'what', hi: 'क्या', type: 'Interrogativpronomen' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (plural dat.)', hi: 'इन', type: 'Article · Dat.' },
      { w: 'backsteinroten', role: 'plain', en: 'brick-red', hi: 'ईंट-लाल', type: 'Adjective · Dat.' },
      { w: 'Speichern', role: 'plain', en: 'warehouses (Satzende)', hi: 'गोदामों (Satzende)', type: 'Noun · plural · Dat.' },
      { w: 'geschehen', role: 'plain', en: 'happen (Satzende)', hi: 'होना (Satzende)', type: 'Verb · Infinitiv' },
      { w: 'sollte', role: 'plain', en: 'should (Satzende)', hi: 'चाहिए (Satzende)', type: 'Verb · Modalverb (Präteritum, Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Zwischen', role: 'r-time', en: 'between (precise time span)', hi: 'के बीच (सटीक समय-सीमा)', type: 'Präposition · Dat.', why: '"Zwischen 2003 und 2009" precisely delimits a span between two exact points (this chapter).' },
      { w: '2003', role: 'plain', en: '2003', hi: '2003', type: 'Number · year', pron: 'tsvy-TOW-zent-dry', ex: 'zweitausenddrei' },
      { w: 'und', role: 'r-time', en: 'and (closes "zwischen...und")', hi: 'और', type: 'Conjunction' },
      { w: '2009', role: 'plain', en: '2009 (Satzende of time phrase)', hi: '2009 (Satzende)', type: 'Number · year', pron: 'tsvy-TOW-zent-noyn', ex: 'zweitausendneun' },
      { w: 'entstand', role: 'plain', en: 'emerged', hi: 'उभरा', type: 'Verb · entstehen (Präteritum)' },
      { w: 'daraufhin', role: 'plain', en: 'thereupon', hi: 'इसके बाद', type: 'Adverb' },
      { w: 'direkt', role: 'r-space', en: 'directly (precise spatial proximity)', hi: 'सीधे (सटीक स्थान)', type: 'Adverb', why: '"Direkt angrenzend" precisely locates the new district right next to the old one (this chapter).' },
      { w: 'angrenzend', role: 'r-space', en: 'adjoining (Satzende)', hi: 'सटा हुआ (Satzende)', type: 'Adjective (Partizip I, Satzende)' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'HafenCity', role: 'plain', en: 'HafenCity (Satzende)', hi: 'हाफ़नसिटी (Satzende)', type: 'Name' },
      { w: '–', plain: true },
      { w: 'eines', role: 'plain', en: 'one', hi: 'एक', type: 'Article · Genitiv' },
      { w: 'der', role: 'plain', en: 'of the', hi: 'के', type: 'Article · Genitiv' },
      { w: 'größten', role: 'plain', en: 'largest', hi: 'सबसे बड़े', type: 'Adjective · Superlativ' },
      { w: 'Stadtentwicklungsprojekte', role: 'plain', en: 'urban development projects', hi: 'शहरी विकास परियोजनाओं', type: 'Noun · plural' },
      { w: 'Europas', role: 'plain', en: 'of Europe (Satzende)', hi: 'यूरोप की (Satzende)', type: 'Noun · Genitiv' },
      { w: '.', plain: true },
      { w: 'Heute', role: 'r-time', en: 'today (contrasted with the earlier "heute")', hi: 'आज', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'gut', role: 'plain', en: 'a good', hi: 'लगभग', type: 'Adverb' },
      { w: 'zwei', role: 'plain', en: 'two', hi: 'दो', type: 'Number' },
      { w: 'Jahrzehnte', role: 'plain', en: 'decades', hi: 'दशक', type: 'Noun · plural' },
      { w: 'später', role: 'r-time', en: 'later (Satzende, precise relative time)', hi: 'बाद (Satzende)', type: 'Adverb (Satzende)' },
      { w: ',', plain: true },
      { w: 'leben', role: 'plain', en: 'live', hi: 'रहते हैं', type: 'Verb · leben' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'arbeiten', role: 'plain', en: 'work', hi: 'काम करते हैं', type: 'Verb · arbeiten' },
      { w: 'dort', role: 'r-space', en: 'there (precise reference back to the district)', hi: 'वहाँ (सटीक स्थान)', type: 'Adverb' },
      { w: 'mehrere', role: 'plain', en: 'several', hi: 'कई', type: 'Determiner' },
      { w: 'Zehntausend', role: 'plain', en: 'tens of thousands of', hi: 'दस हज़ारों', type: 'Number' },
      { w: 'Menschen', role: 'plain', en: 'people', hi: 'लोग', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'wo', role: 'r-space', en: 'where (precise spatial relative)', hi: 'जहाँ', type: 'Relativadverb' },
      { w: 'einst', role: 'plain', en: 'once', hi: 'एक समय', type: 'Adverb' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'केवल', type: 'Adverb' },
      { w: 'Kräne', role: 'plain', en: 'cranes (Satzende)', hi: 'क्रेन (Satzende)', type: 'Noun · plural' },
      { w: 'standen', role: 'plain', en: 'stood (Satzende)', hi: 'खड़े थे (Satzende)', type: 'Verb · stehen (Präteritum, Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Whoever strolls through the Speicherstadt in Hamburg today can hardly tell anymore that it was originally a warehouse district. Until well into the 1980s, coffee, tea and spices from all over the world were stored here. In the course of the nineties, however, the port increasingly lost significance for classic freight handling, and the city faced the question of what should happen to the brick-red warehouses. Between 2003 and 2009, the HafenCity then emerged directly adjoining it — one of the largest urban development projects in Europe. Today, a good two decades later, tens of thousands of people live and work there, where once only cranes stood.',
    comprehension: [
      { q: 'Welche Funktion hat "bis in die 1980er Jahre hinein"?', options: ['Präzise Zeitgrenze in die Vergangenheit', 'Ein Befehl', 'Eine Vermutung'], answer: 0 },
      { q: 'Welche Funktion hat "zwischen 2003 und 2009"?', options: ['Präziser Zeitraum zwischen zwei Punkten', 'Ein einzelner Zeitpunkt', 'Eine Wiederholung'], answer: 0 },
      { q: 'Was zeigt "direkt angrenzend"?', options: ['Präzise räumliche Nähe', 'Zeitliche Abfolge', 'Einen Kontrast'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Geografischer Bericht',
    titleEn: 'Reading B — Geographical report',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Stadt', role: 'plain', en: 'city (Satzende)', hi: 'shahar (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'liegt', role: 'plain', en: 'is located', hi: 'sthit hai', type: 'Verb (Präsens)' },
      { w: 'oberhalb', role: 'r-space', en: 'above (precise spatial expression)', hi: 'oopar (precise spatial expression)', type: 'Präposition · Gen.', why: '"Oberhalb" precisely describes elevation, not just general position.' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'iss', type: 'Article · Gen.' },
      { w: 'Flusses', role: 'plain', en: 'river (Satzende)', hi: 'nadi ke (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: ',', plain: true },
      { w: 'am', role: 'r-space', en: 'at the (Kontraktion, precise spatial expression)', hi: '(precise spatial expression)', type: 'Präposition (Kontraktion)' },
      { w: 'Rande', role: 'r-space', en: 'edge (Satzende, precise spatial expression)', hi: 'kinaare par (Satzende, precise spatial expression)', type: 'Noun · masc. (Satzende)', why: '"Am Rande" precisely locates something at the periphery of an area.' },
      { w: 'eines', role: 'plain', en: 'of a (neut. gen.)', hi: 'ek', type: 'Article · Gen.' },
      { w: 'ausgedehnten', role: 'plain', en: 'extensive', hi: 'vistrit', type: 'Adjective · Gen.' },
      { w: 'Waldgebiets', role: 'plain', en: 'forest area (Satzende)', hi: 'jangal kshetra (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The city is located above the river, at the edge of an extensive forest area.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_002_L001', speaker: 'Grit', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, wann genau triffst du am Bahnhof ein? Ich muss es meinem Kollegen mitteilen.', en: 'Timo, exactly when do you arrive at the station? I have to tell my colleague.' },
      { id: 'C1_002_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Voraussichtlich gegen halb drei, direkt gegenüber dem Haupteingang.', en: 'Probably around half past two, right across from the main entrance.' },
      { id: 'C1_002_L003', speaker: 'Grit', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Perfekt, dann sage ich ihm, er soll sich innerhalb der nächsten zwanzig Minuten dorthin begeben.', en: 'Perfect, then I\'ll tell him to head there within the next twenty minutes.' },
      { id: 'C1_002_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gut, und falls sich etwas verzögert, melde ich mich sofort.', en: 'Good, and if anything gets delayed, I\'ll let you know right away.' }
    ],
    transcript: 'Timo, wann genau triffst du am Bahnhof ein? Ich muss es meinem Kollegen mitteilen. Voraussichtlich gegen halb drei, direkt gegenüber dem Haupteingang. Perfekt, dann sage ich ihm, er soll sich innerhalb der nächsten zwanzig Minuten dorthin begeben. Gut, und falls sich etwas verzögert, melde ich mich sofort.',
    translation: 'Timo, exactly when do you arrive at the station? I have to tell my colleague. Probably around half past two, right across from the main entrance. Perfect, then I\'ll tell him to head there within the next twenty minutes. Good, and if anything gets delayed, I\'ll let you know right away.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'wann' },
      { w: 'genau' },
      { w: 'triffst' },
      { w: 'du' },
      { w: 'am' },
      { w: 'Bahnhof' },
      { w: 'ein' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'muss' },
      { w: 'es' },
      { w: 'meinem' },
      { w: 'Kollegen' },
      { w: 'mitteilen' },
      { w: '.', plain: true },
      { w: 'Voraussichtlich' },
      { w: 'gegen' },
      { w: 'halb' },
      { w: 'drei' },
      { w: ',', plain: true },
      { w: 'direkt' },
      { w: 'gegenüber' },
      { w: 'dem' },
      { w: 'Haupteingang' },
      { w: '.', plain: true },
      { w: 'Perfekt' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'sage' },
      { w: 'ich' },
      { w: 'ihm' },
      { w: ',', plain: true },
      { w: 'er' },
      { w: 'soll' },
      { w: 'sich' },
      { w: 'innerhalb' },
      { w: 'der' },
      { w: 'nächsten' },
      { w: 'zwanzig' },
      { w: 'Minuten' },
      { w: 'dorthin' },
      { w: 'begeben' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'falls' },
      { w: 'sich' },
      { w: 'etwas' },
      { w: 'verzögert' },
      { w: ',', plain: true },
      { w: 'melde' },
      { w: 'ich' },
      { w: 'mich' },
      { w: 'sofort' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wo wird Timo ankommen?', qEn: 'Where will Timo arrive?', options: ['im Zentrum', 'direkt gegenüber dem Haupteingang', 'am Flughafen', 'vor der Universität'], optionsEn: ['in the centre', 'directly opposite the main entrance', 'at the airport', 'in front of the university'], answer: 1,
        explain: '"… direkt gegenüber dem Haupteingang."' },
      { q: 'Was soll die Kollegin laut Grit machen?', qEn: 'What does Grit tell her colleague to do?', options: ['warten', 'sich innerhalb der nächsten zwanzig Minuten dorthin begeben', 'absagen', 'zu Hause bleiben'], optionsEn: ['wait', 'get there within the next twenty minutes', 'cancel', 'stay at home'], answer: 1,
        explain: '"… er soll sich innerhalb der nächsten zwanzig Minuten dorthin begeben."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Timo fragt: Wann genau triffst du am Bahnhof ein?", taskEn: "Timo asks: when exactly do you arrive at the station?", de: "Voraussichtlich gegen halb drei, direkt gegenüber dem Haupteingang.", en: "Probably around half past two, right opposite the main entrance." },
    { task: "Ein Gast fragt am Telefon, wo das Institut liegt.", taskEn: "A guest asks on the phone where the institute is.", de: "Das Gebäude liegt in unmittelbarer Nähe des Bahnhofs, gegenüber der Bibliothek.", en: "The building is in the immediate vicinity of the station, opposite the library." },
    { task: "Deine Kollegin fragt, wie lange die Erhebung gedauert hat.", taskEn: "Your colleague asks how long the survey took.", de: "Im Laufe von drei Wochen waren die Interviews abgeschlossen.", en: "Over the course of three weeks the interviews were completed." },
    { task: "Fass die Entwicklung deines Fachs in drei Etappen zusammen.", taskEn: "Summarise your field's development in three stages.", de: "Zunächst dominierte die Beobachtung, im Laufe der Zeit kamen Experimente hinzu.", en: "At first observation dominated, over time experiments were added." },
    { task: "Die Kommission fragt, wo dein Vorhaben im Programm steht.", taskEn: "The committee asks where your project sits within the programme.", de: "Im Rahmen des Programms steht die Mobilität älterer Menschen im Mittelpunkt.", en: "Within the framework of the programme, older people's mobility is central." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Take a B2-level text with simple time/space expressions and rewrite it with more precise C1 expressions (unmittelbar nach, im Laufe von, in unmittelbarer Nähe, im Rahmen).\n\nTASK 2 — Analytical report (350 words): Describe the development of a project over time and across multiple locations, using sophisticated C1 temporal and spatial expressions.',
    starters: ['Im Laufe der letzten Jahre hat sich das Projekt stark entwickelt.', 'Unmittelbar nach dem Start entstanden erste Ergebnisse.'],
    placeholder: 'Zunächst begann das Projekt in München. Im Laufe der Zeit erweiterte es sich...',
    minWords: 150
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which expression precisely marks bounded duration?',
      options: ['innerhalb von drei Tagen', 'gleichzeitig', 'gegenüber'],
      answer: 0,
      explain: '"Innerhalb von" precisely bounds a period of time within which something happens.'
    },
    gap: {
      sentence: ['Das Institut liegt in ', ' Nähe des Bahnhofs.'],
      gaps: [ { answer: 'unmittelbarer', accepts: ['unmittelbarer'] } ],
      explain: '"In unmittelbarer Nähe" is the precise C1 alternative to the basic "in der Nähe von".'
    },
    match: {
      q: 'Match each expression to its precise function.',
      pairs: [
        { noun: 'unmittelbar nach', art: 'Immediate temporal sequencing' },
        { noun: 'gleichzeitig', art: 'Simultaneity' },
        { noun: 'im Laufe von', art: 'Duration' },
        { noun: 'im Rahmen', art: 'Abstract spatial metaphor' }
      ]
    },
    builder: {
      target: 'Build: "It is located in the immediate vicinity of the station." (precise spatial expression)',
      bank: ['Es', 'liegt', 'in', 'unmittelbarer', 'Nähe', 'des', 'Bahnhofs', '.'],
      answer: ['Es', 'liegt', 'in', 'unmittelbarer', 'Nähe', 'des', 'Bahnhofs', '.'],
      roles: { 'unmittelbarer': 'r-space', 'Nähe': 'r-space' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich wohne im Zentrum von Deutschland, aber ich meine eigentlich das Stadtzentrum.',
      right: 'Ich wohne im Stadtzentrum.',
      explain: '"Im Zentrum von Deutschland" means geographically central Germany, not a city centre — use "im Stadtzentrum" for that meaning.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does "unmittelbar nach" precisely express?', options: ['Immediately after, without delay', 'A vague later time', 'Simultaneity'], answer: 0,
      explain: '"Unmittelbar" adds precision — it means immediately, not just "after" in general.' },
    { q: 'Which expression marks simultaneity?', options: ['gleichzeitig', 'bislang', 'entlang'], answer: 0,
      explain: '"Gleichzeitig" precisely marks two actions happening at the same time.' },
    { q: 'What does "im Laufe der Zeit" express?', options: ['An extended duration during which something develops', 'A single instant', 'A spatial location'], answer: 0,
      explain: '"Im Laufe" expresses a duration or course, often gradual development.' },
    { q: 'What does "im Rahmen" mean when used abstractly?', options: ['Within the framework/scope of something', 'A literal wooden frame', 'A precise time marker'], answer: 0,
      explain: '"Im Rahmen" is an abstract spatial metaphor common in academic writing, meaning "within the scope of".' },
    { q: 'B2 asks "Where?" and "When?" What does C1 ask?', options: ['"Exactly where/when, in relation to what, and for how long?"', '"Is it correct?"', '"Is it short?"'], answer: 0,
      explain: 'Precision — exact spatial and temporal relationships — is a defining characteristic of C1 German.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-time', html: 'Precise temporal expressions (unmittelbar nach/vor, gleichzeitig, im Laufe von, seither, bislang, fortan) replace vague B2 time markers.' },
    { c: 'r-space', html: 'Precise spatial expressions (in unmittelbarer Nähe, gegenüber, entlang, am Rande) and abstract spatial metaphors (im Rahmen, im Mittelpunkt, im Kontext) mark C1 writing.' },
    { c: 'r-duration', html: 'Duration markers (innerhalb von, im Laufe der Zeit, kurzfristig, langfristig, vorübergehend) let you bound and scale time precisely.' }
  ],
  revisionTips: [
    'Rewrite five simple time/space sentences from a B2 text using at least one precise C1 expression each.',
    'Read a German geography or history article and underline every precise spatial or temporal expression you recognize.',
    'Practise describing your own week using "zunächst", "gleichzeitig", "im Laufe der Woche", and "schließlich" in sequence.'
  ]
};

window.CHAPTER = CHAPTER;
