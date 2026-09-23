/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 6 · Chapter 61
   "Indirekte Rede: Zeitverschiebung" — how tense is preserved
   in reported speech: Present → Konjunktiv I Präsens; Perfekt/
   Präteritum → Konjunktiv I Perfekt; Future → Konjunktiv I
   Futur I. Preserve the ORIGINAL speaker's timeline, not the
   reporter's. Does NOT teach Konjunktiv II replacement,
   reported questions, passive reporting, or advanced sequence
   of tenses (later chapters).
   IMPORTANT: dialogue uses ONLY Marlen and Timo.
   Vocabulary source: uploaded Chapter 61 list (22 items).
============================================================ */
const CHAPTER = {
  id: 'b2-61-indirekte-rede-zeitverschiebung',
  phase: 'B2 · Phase 6',
  number: 61,
  title: 'Indirekte Rede: Zeitverschiebung',
  titleEn: 'Reported speech: time reference',
  description: '"Ich habe gestern gearbeitet." → Er sagt, er habe gestern gearbeitet. The original timeline stays — always.',
  xp: 800,
  time: 80,
  difficulty: 'Advanced',
  nextChapter: { number: 62, title: 'Konjunktiv I: Berichtende Sprache', titleEn: 'Konjunktiv I: reporting language' , href: 'chapter-b2-62-konjunktiv-i-berichtende-sprache.html' },

  prevChapter: { number: 60, title: 'Indirekte Rede: Grundlagen', titleEn: 'Reported speech: basics', href: 'chapter-b2-60-indirekte-rede-grundlagen.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'The <em>original</em> timeline stays.',
    intro: 'A customer told Marlen the waiting time was too long and the package never arrived, and Timo promises to sort it out with shipping — every reported statement keeping the original timeline exactly, however far back it happened.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See how Present, Past, and Future are each represented correctly in reported speech'
    ],
    scene: 'Nachrichten von gestern, heute und morgen',
    femaleSpeakers: ['Marlen'],
    dialogue: [
      { speaker: 'Marlen', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Kunde', role: 'r-subject', en: 'customer', hi: 'ग्राहक', pron: 'KUN-duh', type: 'Noun · masc.' },
        { w: 'sagte', role: 'r-verb', en: 'said', hi: 'कहा', pron: 'ZAHK-tuh', type: 'Verb · sagen (Präteritum)' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Wartezeit', role: 'r-subject', en: 'waiting time', hi: 'प्रतीक्षा समय', pron: 'VAR-tuh-tsyte', type: 'Noun · fem.', why: 'die Wartezeit (this chapter).', ex: 'die Wartezeit' },
        { w: 'sei', role: 'r-verb', en: 'was (Konjunktiv I)', hi: 'थी', pron: 'zy', type: 'Verb · sein (Konjunktiv I)', why: 'indirekte Rede: Präsens in direct speech → Konjunktiv I in indirect speech (this chapter).', ex: 'Er sagte, die Wartezeit sei zu lang.', exEn: 'He said the waiting time was too long.' },
        { w: 'zu', role: 'r-adverb', en: 'too', hi: 'ज़्यादा', pron: 'tsoo', type: 'Adverb' },
        { w: 'lang', role: 'r-akkusativ', en: 'long', hi: 'लंबी', pron: 'lank', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The customer said the waiting time was too long.', hi: 'Grahak ne kaha ki prateeksha samay zyada lamba tha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Hat', role: 'r-verb', en: 'has', hi: 'कहा', pron: 'hat', type: 'Verb · haben (helper)' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'उसने', pron: 'air', type: 'Pronoun · subject' },
        { w: 'gesagt', role: 'r-verb', en: 'said', hi: 'कहा', pron: 'ge-ZAHKT', type: 'Partizip II' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Paket', role: 'r-subject', en: 'package', hi: 'पैकेज', pron: 'pa-KAYT', type: 'Noun · neut.' },
        { w: 'sei', role: 'r-verb', en: 'had (Konjunktiv I, Perfekt)', hi: 'था', pron: 'zy', type: 'Verb · sein (Konjunktiv I, Perfekt)', why: 'indirekte Rede: Perfekt in direct speech → sei/habe + Partizip II in indirect (this chapter).', ex: 'Er sagte, das Paket sei nie angekommen.', exEn: 'He said the package had never arrived.' },
        { w: 'nie', role: 'r-akkusativ', en: 'never', hi: 'कभी नहीं', pron: 'nee', type: 'Adverb' },
        { w: 'angekommen', role: 'r-verb', en: 'arrived', hi: 'पहुंचा', pron: 'AN-ge-ko-men', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'Did he say the package had never arrived?', hi: 'Kya usne kaha ki package kabhi pahuncha hi nahi?' },
      { speaker: 'Marlen', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'उसने', pron: 'air', type: 'Pronoun · subject' },
        { w: 'meinte', role: 'r-verb', en: 'thought', hi: 'सोचा', pron: 'MYN-tuh', type: 'Verb · meinen (Präteritum)' },
        { w: ',', plain: true },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'werde', role: 'r-verb', en: 'would (Konjunktiv I, Futur)', hi: 'करेगा', pron: 'VAIR-duh', type: 'Verb · werden (Konjunktiv I, Futur)', why: 'indirekte Rede: Futur I in direct speech → werde + Infinitiv in indirect (this chapter).', ex: 'Er meinte, er werde eine Beschwerde schreiben.', exEn: 'He thought he would write a complaint.' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Beschwerde', role: 'r-akkusativ', en: 'complaint', hi: 'शिकायत', pron: 'be-SHVAIR-duh', type: 'Noun · fem.', why: 'die Beschwerde (this chapter).', ex: 'eine Beschwerde' },
        { w: 'schreiben', role: 'r-verb', en: 'write', hi: 'लिखना', pron: 'SHRY-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes, and he thought he would write a complaint.', hi: 'Haan, aur usne socha ki woh shikayat likhega.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Verstehe', role: 'r-verb', en: 'understand', hi: 'समझता हूँ', pron: 'fer-SHTAY-uh', type: 'Verb · verstehen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'kläre', role: 'r-verb', en: 'clarify', hi: 'स्पष्ट करता हूँ', pron: 'KLAI-ruh', type: 'Verb · klären (ich)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'sofort', role: 'r-akkusativ', en: 'right away', hi: 'अभी', pron: 'zo-FORT', type: 'Adverb' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Versand', role: 'r-dativ', en: 'shipping (dat.)', hi: 'शिपिंग', pron: 'fer-ZANT', type: 'Noun · masc. dat.', why: 'der Versand (this chapter).', ex: 'mit dem Versand' },
        { w: '.', plain: true }
      ], en: 'I understand. I clarify that right away with shipping.', hi: 'Main samajhta hoon. Main abhi shipping ke saath yeh spasht karta hoon.' },
      { speaker: 'Marlen', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Kunde', role: 'r-subject', en: 'customer', hi: 'ग्राहक', pron: 'KUN-duh', type: 'Noun · masc.' },
        { w: 'wird', role: 'r-verb', en: 'will', hi: 'होगा', pron: 'virt', type: 'Verb · werden' },
        { w: 'erleichtert', role: 'r-akkusativ', en: 'relieved', hi: 'राहत', pron: 'er-LYKH-tert', type: 'Adjective' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होना', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Thanks! The customer will be relieved.', hi: 'Dhanyavaad! Grahak ko raahat milegi.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German preserves the ORIGINAL speaker\'s timeline in reported speech — not the reporter\'s. <span class="de r-present">Present</span> stays Present, <span class="de r-past">Past</span> (both Perfekt and Präteritum) becomes Konjunktiv I Perfekt, and <span class="de r-future">Future</span> stays Future.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is INDIREKTE REDE: ZEITVERSCHIEBUNG (time reference in reported speech) at B2 level: German preserves the ORIGINAL speaker\'s intended time relationship rather than collapsing everything into the past. Rules: Present → Konjunktiv I Präsens (arbeite); both Perfekt AND Präteritum in the original → Konjunktiv I Perfekt (habe gearbeitet / sei gegangen); Future → Konjunktiv I Futur I (werde kommen). The key question is always: when did the ORIGINAL action happen (present/past/future for the speaker), not when the reporter is speaking. ' +
    'Do NOT expect or require Konjunktiv II replacement, reported questions, passive reporting, or advanced sequence-of-tenses rules — those are separate topics taught in later chapters; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that Present-tense original statements are reported with Konjunktiv I Präsens (not Perfekt or Futur).\n' +
    '- Check that Perfekt/Präteritum original statements are reported with Konjunktiv I Perfekt (habe/sei + Partizip II) — never left in Präsens.\n' +
    '- Check that Future original statements are reported with Konjunktiv I Futur I (werde + Infinitiv) — never collapsed into Präsens or Perfekt.\n' +
    '- Check that the correct auxiliary (haben vs sein) is used for the Perfekt form, matching normal Perfekt-formation rules.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Timeline check:</b> one sentence on whether the learner preserved the ORIGINAL speaker\'s timeline correctly (present/past/future) rather than defaulting to one tense.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly preserve present, past, and future timelines in reported speech. Ready for Konjunktiv II as substitute next.',
    mid: 'Good. Re-read the Time Reference Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: ask when the ORIGINAL action happened, not when it\'s being reported.'
  },

  parserSentence: [
    { w: 'Er', role: 'plain' }, { w: 'sagt', role: 'r-reportverb' }, { w: ',', plain: true },
    { w: 'er', role: 'plain' }, { w: 'habe', role: 'r-past' }, { w: 'gestern', role: 'plain' }, { w: 'gearbeitet', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: reported speech preserves the ORIGINAL speaker\'s timeline.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Marlen and Timo read news about yesterday, today, and tomorrow, mapping tense to timeline.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 22 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master how present, past, and future are each represented in Konjunktiv I reported speech.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a newspaper article about yesterday\'s event and a company report with past and future plans.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify present, past, and future reporting, and the original event time.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Report interviews and presentations, explaining yesterday\'s events and future plans correctly.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Transform quotations into indirect speech while preserving the correct time reference.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill timeline matching, tense choice, and identifying the original event time.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 800 XP.' },
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
      desc: 'Timeline-matching drills, tense-transformation practice, and a news-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Time Reference Table, timeline diagrams, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich arbeite heute. → Er sagt, er arbeite heute.', text: 'Report present-tense statements with Konjunktiv I Präsens' },
    { de: 'Ich habe/ging gestern gearbeitet. → Er sagt, er habe gestern gearbeitet.', text: 'Report both Perfekt AND Präteritum with Konjunktiv I Perfekt' },
    { de: 'Ich werde morgen kommen. → Er sagt, er werde morgen kommen.', text: 'Report future-tense statements with Konjunktiv I Futur I' },
    { de: 'Wann geschah die Handlung? ≠ Wann wird berichtet?', text: 'Distinguish when the action happened from when it is being reported' },
    { de: 'Zeitungen, Nachrichten, Unternehmensberichte', text: 'Recognize timeline preservation in authentic B2 texts' }
  ],

  // ---------- Vocabulary (22 items — uploaded chapter-61 list) ----------
  vocab: [
    { de: 'Traubenzucker', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'glucose, grape sugar', hi: 'ग्लूकोज़', ex: 'Der Arzt empfahl Traubenzucker.', exEn: 'The doctor recommended glucose.', exHi: 'Doctor ne glucose ki salaah di.', ex2: 'Sie haben Traubenzucker gekauft.', ex2En: 'They\'ve bought glucose.', ex2Hi: 'Unhone glucose khareeda hai.' },
    { de: 'übereinander', pos: 'adverb', level: 'B2', register: 'both', en: 'on top of one another', hi: 'एक दूसरे के ऊपर', ex: 'Die Bücher lagen übereinander.', exEn: 'The books lay on top of one another.', exHi: 'Kitaabein ek doosre ke oopar padi thin.', ex2: 'Sie haben die Kisten übereinander gestapelt.', ex2En: 'They\'ve stacked the boxes on top of one another.', ex2Hi: 'Unhone dibbe ek doosre ke oopar rakhe hain.' },
    { de: 'übrigens', pos: 'adverb', level: 'B2', register: 'both', en: 'by the way, incidentally', hi: 'वैसे', ex: 'Der Tennisprofi behauptet übrigens, er trainiere täglich.', exEn: 'The tennis pro claims, by the way, he trains daily.', exHi: 'Tennis pro waise dava karta hai ki woh roz training karta hai.', ex2: 'Sie hat übrigens gestern angerufen.', ex2En: 'She called yesterday, by the way.', ex2Hi: 'Usne waise kal call kiya tha.' },
    { de: 'umgangssprachlich', pos: 'adjective', level: 'B2', register: 'written', en: 'colloquial', hi: 'बोलचाल का', ex: 'Das ist ein umgangssprachlicher Ausdruck.', exEn: 'That\'s a colloquial expression.', exHi: 'Yeh ek bol-chaal ka shabd hai.', ex2: 'Sie haben umgangssprachliche Wörter benutzt.', ex2En: 'They\'ve used colloquial words.', ex2Hi: 'Unhone bol-chaal ke shabd use kiye hain.' },
    { de: 'Umgangston', art: 'der', gender: 'm', plural: 'Umgangstöne', pos: 'noun', level: 'B2', register: 'written', en: 'tone, manner of interaction', hi: 'व्यवहार का लहजा', ex: 'Der Umgangston im Büro war freundlich.', exEn: 'The tone in the office was friendly.', exHi: 'Daftar mein vyavahaar ka lehja mitrata poorn tha.', ex2: 'Sie haben den Umgangston verbessert.', ex2En: 'They\'ve improved the tone of interaction.', ex2Hi: 'Unhone vyavahaar ka lehja behtar banaaya hai.' },
    { de: 'unangemessen', pos: 'adjective', level: 'B2', register: 'written', en: 'inappropriate, unreasonable', hi: 'अनुचित', ex: 'Das war eine unangemessene Reaktion.', exEn: 'That was an inappropriate reaction.', exHi: 'Yeh ek anuchit pratikriya thi.', ex2: 'Sie haben unangemessene Kommentare gemacht.', ex2En: 'They\'ve made inappropriate comments.', ex2Hi: 'Unhone anuchit tippaniyaan ki hain.' },
    { de: 'undenkbar', pos: 'adjective', level: 'B2', register: 'written', en: 'unthinkable', hi: 'अकल्पनीय', ex: 'Das wäre undenkbar gewesen.', exEn: 'That would have been unthinkable.', exHi: 'Yeh akalpaniya hota.', ex2: 'Sie halten das für undenkbar.', ex2En: 'They consider that unthinkable.', ex2Hi: 'Woh ise akalpaniya maante hain.' },
    { de: 'ungeschlagen', pos: 'adjective', level: 'B2', register: 'written', en: 'unbeaten', hi: 'अपराजित', ex: 'Das Team blieb ungeschlagen.', exEn: 'The team remained unbeaten.', exHi: 'Team apraajit raha.', ex2: 'Sie haben eine ungeschlagene Saison gehabt.', ex2En: 'They\'ve had an unbeaten season.', ex2Hi: 'Unka season apraajit raha hai.' },
    { de: 'unleserlich', pos: 'adjective', level: 'B2', register: 'both', en: 'illegible', hi: 'अपठनीय', ex: 'Seine Schrift war unleserlich.', exEn: 'His handwriting was illegible.', exHi: 'Uski likhaawat apathneey thi.', ex2: 'Sie haben den unleserlichen Text entziffert.', ex2En: 'They\'ve deciphered the illegible text.', ex2Hi: 'Unhone apathneey text samjha hai.' },
    { de: 'untergehen', pos: 'verb', level: 'B2', register: 'both', en: 'to sink, perish, set (sun)', hi: 'डूबना', ex: 'Die Sonne ging langsam unter.', exEn: 'The sun set slowly.', exHi: 'Sooraj dheere se doob gaya.', ex2: 'Das Schiff ist untergegangen.', ex2En: 'The ship has sunk.', ex2Hi: 'Jahaaz doob gaya hai.', conj: { praesens: 'geht unter', praeteritum: 'ging unter', perfekt: 'ist untergegangen' } },
    { de: 'verbleiben', pos: 'verb', level: 'B2', register: 'written', en: 'to remain', hi: 'बना रहना', ex: 'Sie verblieb bei ihrer Meinung.', exEn: 'She remained with her opinion.', exHi: 'Woh apni raay par kaayam rahi.', ex2: 'Sie sind Freunde verblieben.', ex2En: 'They\'ve remained friends.', ex2Hi: 'Woh dost bane rahe hain.', conj: { praesens: 'verbleibt', praeteritum: 'verblieb', perfekt: 'ist verblieben' } },
    { de: 'verbreiten', pos: 'verb', level: 'B2', register: 'written', en: 'to spread, disseminate', hi: 'फैलाना', ex: 'Die Nachricht verbreitete sich schnell.', exEn: 'The news spread quickly.', exHi: 'Khabar jaldi faili.', ex2: 'Sie haben die Information verbreitet.', ex2En: 'They\'ve disseminated the information.', ex2Hi: 'Unhone jaankaari faalayi hai.', conj: { praesens: 'verbreitet', praeteritum: 'verbreitete', perfekt: 'hat verbreitet' } },
    { de: 'vergewissern', pos: 'verb', level: 'B2', register: 'written', en: 'to make sure, ascertain', hi: 'सुनिश्चित करना', ex: 'Ich muss mich noch vergewissern, ob ich die Zeiten richtig verstehe.', exEn: 'I still have to make sure I understand the tenses correctly.', exHi: 'Mujhe abhi bhi sunishchit karna hai ki main tenses sahi tarah samajh rahi hoon.', ex2: 'Sie hat sich vergewissert, dass alles fertig war.', ex2En: 'She\'s made sure everything was ready.', ex2Hi: 'Usne sunishchit kiya ki sab kuch taiyaar tha.', conj: { praesens: 'vergewissert sich', praeteritum: 'vergewisserte sich', perfekt: 'hat sich vergewissert' } },
    { de: 'Versandkosten', art: 'die', gender: 'plural', plural: '— (Pl.)', pos: 'noun', level: 'B2', register: 'written', en: 'shipping costs', hi: 'शिपिंग लागत', ex: 'Die Versandkosten waren hoch.', exEn: 'The shipping costs were high.', exHi: 'Shipping lagat zyaada thi.', ex2: 'Sie haben die Versandkosten gesenkt.', ex2En: 'They\'ve reduced the shipping costs.', ex2Hi: 'Unhone shipping lagat kam ki hai.' },
    { de: 'Versandrisiko', art: 'das', gender: 'n', plural: 'Versandrisiken', pos: 'noun', level: 'B2', register: 'written', en: 'shipping risk', hi: 'शिपिंग जोखिम', ex: 'Der Kunde trägt das Versandrisiko.', exEn: 'The customer bears the shipping risk.', exHi: 'Grahak shipping jokhim uthaata hai.', ex2: 'Sie haben das Versandrisiko versichert.', ex2En: 'They\'ve insured the shipping risk.', ex2Hi: 'Unhone shipping jokhim ka beema karaaya hai.' },
    { de: 'verunsichern', pos: 'verb', level: 'B2', register: 'written', en: 'to unsettle, make insecure', hi: 'असुरक्षित करना', ex: 'Die Nachricht verunsicherte alle.', exEn: 'The news unsettled everyone.', exHi: 'Khabar ne sabko asureekshit kiya.', ex2: 'Sie haben ihn verunsichert.', ex2En: 'They\'ve made him insecure.', ex2Hi: 'Unhone use asureekshit kiya hai.', conj: { praesens: 'verunsichert', praeteritum: 'verunsicherte', perfekt: 'hat verunsichert' } },
    { de: 'Virus', art: 'der', gender: 'm', plural: 'Viren', pos: 'noun', level: 'B2', register: 'written', en: 'virus', hi: 'वायरस', ex: 'Der Virus verbreitete sich schnell.', exEn: 'The virus spread quickly.', exHi: 'Virus jaldi faila.', ex2: 'Sie haben den Virus untersucht.', ex2En: 'They\'ve examined the virus.', ex2Hi: 'Unhone virus ki jaanch ki hai.' },
    { de: 'vollständig', pos: 'adjective', level: 'B2', register: 'both', en: 'complete, full', hi: 'पूर्ण', ex: 'Der Bericht war vollständig.', exEn: 'The report was complete.', exHi: 'Report poorn thi.', ex2: 'Sie haben den Antrag vollständig ausgefüllt.', ex2En: 'They\'ve completely filled in the application.', ex2Hi: 'Unhone aavedan poori tarah bhara hai.' },
    { de: 'voranstellen', pos: 'verb', level: 'B2', register: 'written', en: 'to place in front, preface', hi: 'पहले रखना', ex: 'Sie stellte eine Erklärung voran.', exEn: 'She prefaced it with an explanation.', exHi: 'Usne pehle ek spashteekaran diya.', ex2: 'Sie haben eine Warnung vorangestellt.', ex2En: 'They\'ve placed a warning in front.', ex2Hi: 'Unhone pehle ek chetaavni di hai.', conj: { praesens: 'stellt voran', praeteritum: 'stellte voran', perfekt: 'hat vorangestellt' } },
    { de: 'Vorzug', art: 'der', gender: 'm', plural: 'Vorzüge', pos: 'noun', level: 'B2', register: 'written', en: 'merit, preference', hi: 'गुण, प्राथमिकता', ex: 'Das Produkt hat viele Vorzüge.', exEn: 'The product has many merits.', exHi: 'Utpaad ke kai gun hain.', ex2: 'Sie haben dem Angebot den Vorzug gegeben.', ex2En: 'They\'ve given preference to the offer.', ex2Hi: 'Unhone prastaav ko prathamikta di hai.' },
    { de: 'Wartezeit', art: 'die', gender: 'f', plural: 'Wartezeiten', pos: 'noun', level: 'B2', register: 'both', en: 'waiting time', hi: 'प्रतीक्षा समय', ex: 'Die Wartezeit betrug eine Stunde.', exEn: 'The waiting time was one hour.', exHi: 'Prateeksha samay ek ghanta tha.', ex2: 'Sie haben die Wartezeit verkürzt.', ex2En: 'They\'ve shortened the waiting time.', ex2Hi: 'Unhone prateeksha samay kam kiya hai.' },
    { de: 'Welt', art: 'die', gender: 'f', plural: 'Welten', pos: 'noun', level: 'B2', register: 'both', en: 'world', hi: 'दुनिया', ex: 'Die Welt verändert sich schnell.', exEn: 'The world is changing quickly.', exHi: 'Duniya jaldi badal rahi hai.', ex2: 'Sie haben die Welt bereist.', ex2En: 'They\'ve traveled the world.', ex2Hi: 'Unhone duniya ghoomi hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Zeitverschiebung?',
      body: [ 'Indirect speech reports NOT when the journalist writes, but when the ORIGINAL speaker meant the event. The original time reference must remain clear — this is different from English, which often collapses everything into the past.' ],
      hinglish: 'Yahan ek baat samajhna zaroori hai. Tense is baat se tay nahi hota ki report kab likhi jaa rahi hai, balki is baat se ki asli kaam <b>kab</b> hua tha. English mein aksar sab kuch past mein daal diya jaata hai, par German mein original timeline waisi hi rehti hai.'
    },
    {
      title: 'Gegenwart (Present)',
      body: [ 'Present stays Present in reported speech.' ],
      table: {
        head: ['Direct', 'Indirect'],
        rows: [
          ['„Ich arbeite heute."', 'Er sagt, er <span class="de r-present">arbeite</span> heute.']
        ]
      },
      hinglish: 'Agar asli baat present ki thi, to reported speech mein bhi present hi rehta hai \u2014 yeh English se alag hai, jahan aksar past ban jaata hai.'
    },
    {
      title: 'Vergangenheit (Past)',
      body: [ 'Both Perfekt and Präteritum in the original almost always become Konjunktiv I Perfekt in reported speech.' ],
      table: {
        head: ['Direct', 'Indirect'],
        rows: [
          ['„Ich habe gestern gearbeitet."', 'Er sagt, er <span class="de r-past">habe gestern gearbeitet</span>.'],
          ['„Ich ging früh nach Hause."', 'Er sagt, er <span class="de r-past">sei früh nach Hause gegangen</span>.']
        ]
      },
      hinglish: 'Yeh ek badi aasaani hai \u2014 original chahe Perfekt mein ho ya Pr\u00e4teritum mein, reported speech mein dono <b>Konjunktiv I Perfekt</b> ban jaate hain. Matlab past ke liye sirf ek hi form yaad karni hai.'
    },
    {
      title: 'habe oder sei? Die Hilfsverb-Wahl',
      body: [
        'Konjunktiv I Perfekt is built from <b>habe</b> or <b>sei</b> plus the Partizip II \u2014 and you pick between them exactly as you already do in the normal Perfekt. Movement and change-of-state verbs take <b>sei</b>; everything else takes <b>habe</b>.'
      ],
      table: {
        head: ['Perfekt (Indikativ)', 'Konjunktiv I Perfekt', 'Why'],
        rows: [
          ['er hat gearbeitet', 'er <b>habe</b> gearbeitet', 'normal verb'],
          ['er ist gegangen', 'er <b>sei</b> gegangen', 'movement'],
          ['er ist angekommen', 'er <b>sei</b> angekommen', 'movement'],
          ['er hat gesprochen', 'er <b>habe</b> gesprochen', 'normal verb'],
          ['er ist geblieben', 'er <b>sei</b> geblieben', 'change of state']
        ]
      },
      note: 'So nothing new has to be learned here: if you know whether a verb takes haben or sein in the Perfekt, you already know whether it takes habe or sei in Konjunktiv I.',
      hinglish: 'Konjunktiv I Perfekt <b>habe</b> ya <b>sei</b> ke saath Partizip II se banta hai \u2014 aur in dono mein se kaunsa lagega, yeh bilkul waise hi tay hota hai jaise normal Perfekt mein. Movement aur state change wale verbs <b>sei</b> lete hain (<span class="de">er sei gegangen</span>), aur baaki sab <b>habe</b> (<span class="de">er habe gearbeitet</span>). Matlab yahan naya kuch yaad nahi karna \u2014 jo Perfekt mein <i>haben</i> leta hai woh yahan <b>habe</b> lega, aur jo <i>sein</i> leta hai woh <b>sei</b>.'
    },
    {
      title: 'Zukunft (Future)',
      body: [ 'Future stays Future in reported speech.' ],
      table: {
        head: ['Direct', 'Indirect'],
        rows: [
          ['„Ich werde morgen kommen."', 'Er sagt, er <span class="de r-future">werde morgen kommen</span>.']
        ]
      },
      hinglish: 'Future bhi waisa hi rehta hai \u2014 <b>werden</b> Konjunktiv I mein <b>werde</b> ban jaata hai aur infinitive end mein chala jaata hai: <span class="de">er werde morgen kommen</span>.'
    },
    {
      title: 'Zeitleisten-Diagramm',
      body: [ 'Always identify WHEN the action happened — not when it is being reported.' ],
      table: {
        head: ['Event Time', 'Konjunktiv I Form'],
        rows: [
          ['Present', 'arbeite'],
          ['Past', 'habe gearbeitet / sei gegangen'],
          ['Future', 'werde arbeiten']
        ]
      },
      hinglish: 'Har baar sirf yeh dekho ki kaam <b>kab</b> hua \u2014 yeh mat dekho ki report kab ho rahi hai. Present ke liye <b>arbeite</b>, past ke liye <b>habe gearbeitet</b> ya <b>sei gegangen</b>, aur future ke liye <b>werde arbeiten</b>.'
    },
    {
      title: 'Zeitungsbeispiele',
      body: [ 'Newspapers preserve the speaker\'s intended time reference.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Die Zeitung berichtet, der Minister habe gestern mit dem Kanzler gesprochen.', 'The newspaper reports the minister spoke with the chancellor yesterday.'],
          ['Die Zeitung schreibt, die Wirtschaft werde sich erholen.', 'The newspaper writes the economy will recover.']
        ]
      },
      hinglish: 'Newspapers asli bolne wale ki timeline waisi hi rakhte hain. Isliye <span class="de">habe gestern gesprochen</span> mein "gestern" us minister ka kal hai, akhbaar ka nahi.'
    },
    {
      title: 'Berufliche Kommunikation',
      body: [ 'Business reports frequently combine present, past, and future timelines.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Der Projektleiter erklärt, die Arbeiten seien abgeschlossen.', 'The project manager explains the work has been completed.'],
          ['Die Personalabteilung teilt mit, der Vertrag werde nächste Woche unterschrieben.', 'HR informs that the contract will be signed next week.']
        ]
      },
      hinglish: 'Office ke reports mein aksar teeno timelines ek saath aati hain \u2014 kya ho chuka hai, kya chal raha hai, aur kya hoga. Isliye ek hi email mein <b>seien</b>, <b>laufe</b> aur <b>werde</b> saath dikh sakte hain.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from mismatching the tense with the wrong time reference — the timeline gets confused.' ],
      mistakes: [
        { wrong: 'Er sagt, er arbeite gestern.', right: 'Er sagt, er habe gestern gearbeitet.', why: '\u201egestern\u201c signals a past event, so it needs Konjunktiv I Perfekt \u2014 not the Pr\u00e4sens form.' },
        { wrong: 'Er berichtet, er werde gestern kommen.', right: 'Er berichtet, er sei gestern gekommen.', why: 'A past event ("gestern") cannot use the Futur form "werde" — use Konjunktiv I Perfekt instead.' },
        { wrong: 'Er erklärt, er habe morgen gearbeitet.', right: 'Er erklärt, er werde morgen arbeiten.', why: '"morgen" signals a future event — it needs Konjunktiv I Futur I ("werde arbeiten"), not Perfekt.' },
        { wrong: 'Er sagt, er komme letzte Woche.', right: 'Er sagt, er sei letzte Woche gekommen.', why: '"letzte Woche" is past — the Präsens form "komme" is wrong; use Konjunktiv I Perfekt.' },
        { wrong: 'Er berichtet, er sei morgen angekommen.', right: 'Er berichtet, er werde morgen ankommen.', why: '"morgen" is future — the Perfekt form "sei angekommen" is wrong; use Konjunktiv I Futur I.' }
      ],
      hinglish: 'Yeh saari galtiyan ek hi wajah se hoti hain \u2014 time word aur verb form aapas mein match nahi karte. Isliye pehle time word dekho (<i>gestern</i>, <i>heute</i>, <i>morgen</i>), phir uske hisaab se form chuno.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Identify the original statement. When did the action happen? Present → Konjunktiv I Präsens. Past → Konjunktiv I Perfekt. Future → Konjunktiv I Futur I.' ],
      note: 'Memory trick: ask two questions — 1) When is the reporter speaking? (usually NOW) 2) When did the original action happen? (yesterday, today, tomorrow?) Always preserve the SPEAKER\'s original timeline, not the reporter\'s.',
      hinglish: 'Pehle asli statement dhoondo, phir poochho ki kaam kab hua. Present hai to Konjunktiv I Pr\u00e4sens, past hai to Konjunktiv I Perfekt, aur future hai to <b>werde</b> + infinitive. Sabse aasaan tarika yeh hai ki time word dekh kar form chuno.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Zeitungsartikel über gestern',
    titleEn: 'Reading A — Newspaper article reporting yesterday\'s political event',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Zeitung', role: 'plain', en: 'newspaper', hi: 'akhbaar', type: 'Noun · fem.' },
      { w: 'berichtet', role: 'r-reportverb', en: 'reports (reporting verb)', hi: 'report karta hai (reporting verb)', type: 'Verb (Präsens)' },
      { w: ',', plain: true },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Minister', role: 'plain', en: 'minister', hi: 'mantri', type: 'Noun · masc.' },
      { w: 'habe', role: 'r-past', en: 'has (Konjunktiv I Perfekt of "haben")', hi: 'hai (Konjunktiv I Perfekt of "haben")', type: 'Verb · Konjunktiv I' },
      { w: 'gestern', role: 'r-past', en: 'yesterday (marks the ORIGINAL past event)', hi: 'kal (ASLI past event)', type: 'Adverb' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'ke saath', type: 'Präposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'the (masc. dat.)', hi: 'यह', type: 'Article · Dat.' },
      { w: 'Kanzler', role: 'plain', en: 'chancellor (Satzende)', hi: 'chancellor (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'gesprochen', role: 'plain', en: 'spoken (Satzende)', hi: 'baat ki (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Beide', role: 'plain', en: 'both', hi: 'दोनों', type: 'Pronoun' },
      { w: 'hätten', role: 'r-past', en: 'had (Konjunktiv I Perfekt of "haben", plural)', hi: 'था (Konjunktiv I Perfekt)', type: 'Verb · Konjunktiv I' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'nach', role: 'plain', en: 'according to', hi: 'के अनुसार', type: 'Präposition · Dat.' },
      { w: 'Angaben', role: 'r-source', en: 'reports (source)', hi: 'रिपोर्टों (स्रोत)', type: 'Noun · plural' },
      { w: 'des', role: 'r-source', en: 'of the (neut. gen.)', hi: 'के (स्रोत का हिस्सा)', type: 'Article · Genitiv' },
      { w: 'Ministeriums', role: 'r-source', en: 'ministry (Satzende, source)', hi: 'मंत्रालय (स्रोत)', type: 'Noun · neut.' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'neuen', role: 'plain', en: 'new', hi: 'नई', type: 'Adjective' },
      { w: 'Zeitplan', role: 'plain', en: 'schedule (Satzende)', hi: 'समय सारिणी (Satzende)', type: 'Noun · masc.' },
      { w: 'geeinigt', role: 'plain', en: 'agreed (Satzende)', hi: 'सहमत हुए (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Vertrag', role: 'plain', en: 'contract', hi: 'अनुबंध', type: 'Noun · masc.' },
      { w: 'werde', role: 'r-future', en: 'will (Konjunktiv I Futur I)', hi: '(Konjunktiv I भविष्य)', type: 'Verb · Konjunktiv I' },
      { w: 'voraussichtlich', role: 'plain', en: 'presumably', hi: 'संभवतः', type: 'Adverb' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Frühjahr', role: 'plain', en: 'spring (Satzende)', hi: 'वसंत (Satzende)', type: 'Noun · neut.' },
      { w: 'unterzeichnet', role: 'plain', en: 'signed (Satzende)', hi: 'हस्ताक्षरित (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true }
    ],
    translation: 'The newspaper reports the minister has spoken with the chancellor yesterday. According to reports from the ministry, both had agreed on a new schedule. The contract will presumably be signed in the spring.',
    comprehension: [
      { q: 'Wann fand das Gespräch statt?', options: ['Gestern', 'Heute', 'Morgen'], answer: 0 },
      { q: 'Welche Konjunktiv-I-Zeitform wird für ein vergangenes Ereignis benutzt?', options: ['Konjunktiv I Perfekt', 'Konjunktiv I Präsens', 'Konjunktiv I Futur I'], answer: 0 },
      { q: 'Was zeigt "habe ... gesprochen"?', options: ['Ein vergangenes Ereignis, wie es der Minister berichtete', 'Ein zukünftiges Ereignis', 'Ein aktuelles Ereignis'], answer: 0 }
    ]
  },
  readingBArchive: {
    title: 'Unternehmensbericht',
    titleEn: 'Reading B — Company report describing completed work and future plans',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Projektleiter', role: 'plain', en: 'project manager', hi: 'project manager', type: 'Noun · masc.' },
      { w: 'erklärt', role: 'r-reportverb', en: 'explains (reporting verb)', hi: 'samjhaata hai (reporting verb)', type: 'Verb (Präsens)' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'the (plural nom.)', hi: 'यह', type: 'Article' },
      { w: 'Arbeiten', role: 'plain', en: 'work (Satzende)', hi: 'kaam (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'seien', role: 'r-past', en: 'are (Konjunktiv I Perfekt of "sein", plural)', hi: 'hain (Konjunktiv I Perfekt of "sein", plural)', type: 'Verb · Konjunktiv I' },
      { w: 'abgeschlossen', role: 'plain', en: 'completed (Satzende)', hi: 'poorn (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Personalabteilung', role: 'plain', en: 'HR department', hi: 'HR vibhaag', type: 'Noun · fem.' },
      { w: 'teilt', role: 'r-reportverb', en: 'informs (part of trennbar "mitteilen")', hi: '(trennbar reporting verb ka hissa)', type: 'Verb (Präsens)' },
      { w: 'mit', role: 'r-reportverb', en: '(part of trennbar "mitteilen")', hi: '(Satzende ka hissa)', type: 'Partikel · trennbar' },
      { w: ',', plain: true },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Vertrag', role: 'plain', en: 'contract', hi: 'anubandh', type: 'Noun · masc.' },
      { w: 'werde', role: 'r-future', en: 'will (Konjunktiv I Futur I)', hi: '(Konjunktiv I Futur I)', type: 'Verb · Konjunktiv I' },
      { w: 'nächste', role: 'plain', en: 'next', hi: 'agle', type: 'Adjective' },
      { w: 'Woche', role: 'plain', en: 'week', hi: 'hafte', type: 'Noun · fem.' },
      { w: 'unterschrieben', role: 'plain', en: 'signed (Satzende)', hi: 'hastaakshrit (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The project manager explains the work has been completed. HR informs that the contract will be signed next week.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_061_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Marlen, der Kunde am Telefon klang ziemlich sauer. Was wollte er?', en: 'Marlen, the customer on the phone sounded pretty angry. What did he want?' },
      { id: 'B2_061_L002', speaker: 'Marlen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Er sagte, das Paket sei nie angekommen, obwohl er schon vor zwei Wochen bezahlt habe.', en: 'He said the package had never arrived, even though he had paid two weeks ago.' },
      { id: 'B2_061_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und was hast du ihm versprochen?', en: 'And what did you promise him?' },
      { id: 'B2_061_L004', speaker: 'Marlen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich habe gesagt, wir würden das noch heute mit dem Versand klären.', en: 'I said we would sort it out with shipping today.' }
    ],
    transcript: 'Marlen, der Kunde am Telefon klang ziemlich sauer. Was wollte er? Er sagte, das Paket sei nie angekommen, obwohl er schon vor zwei Wochen bezahlt habe. Und was hast du ihm versprochen? Ich habe gesagt, wir würden das noch heute mit dem Versand klären.',
    translation: 'Marlen, the customer on the phone sounded pretty angry. What did he want? He said the package had never arrived, even though he had paid two weeks ago. And what did you promise him? I said we would sort it out with shipping today.',
    tokens: [
      { w: 'Marlen' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'Kunde' },
      { w: 'am' },
      { w: 'Telefon' },
      { w: 'klang' },
      { w: 'ziemlich' },
      { w: 'sauer' },
      { w: '.', plain: true },
      { w: 'Was' },
      { w: 'wollte' },
      { w: 'er' },
      { w: '?', plain: true },
      { w: 'Er' },
      { w: 'sagte' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'Paket' },
      { w: 'sei' },
      { w: 'nie' },
      { w: 'angekommen' },
      { w: ',', plain: true },
      { w: 'obwohl' },
      { w: 'er' },
      { w: 'schon' },
      { w: 'vor' },
      { w: 'zwei' },
      { w: 'Wochen' },
      { w: 'bezahlt' },
      { w: 'habe' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'was' },
      { w: 'hast' },
      { w: 'du' },
      { w: 'ihm' },
      { w: 'versprochen' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'gesagt' },
      { w: ',', plain: true },
      { w: 'wir' },
      { w: 'würden' },
      { w: 'das' },
      { w: 'noch' },
      { w: 'heute' },
      { w: 'mit' },
      { w: 'dem' },
      { w: 'Versand' },
      { w: 'klären' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hat der Kunde laut Marlen behauptet?', qEn: 'What did the customer claim, according to Marlen?', options: ['Das Paket sei zu teuer gewesen.', 'Das Paket sei nie angekommen.', 'Er habe nicht bezahlt.', 'Er brauche eine Rechnung.'], optionsEn: ['that the parcel was too expensive.', 'that the parcel never arrived.', 'that he hasn\'t paid.', 'that he needs an invoice.'], answer: 1,
        explain: '"Er sagte, das Paket sei nie angekommen."' },
      { q: 'Was hat Marlen versprochen?', qEn: 'What did Marlen promise?', options: ['ein neues Paket zu schicken', 'das Geld zurückzugeben', 'es noch heute mit dem Versand zu klären', 'den Kunden anzurufen'], optionsEn: ['to send a new parcel', 'to give the money back', 'to sort it out with shipping today', 'to call the customer'], answer: 2,
        explain: '"Ich habe gesagt, wir würden das noch heute mit dem Versand klären."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Berichte deiner Kollegin, was der wütende Kunde gesagt hat.", taskEn: "Report to your colleague what the angry customer said.", de: "Er sagte, das Paket sei nie angekommen.", en: "He said the parcel had never arrived." },
    { task: "Sie fragt, wann er bestellt hat.", taskEn: "She asks when he ordered.", de: "Er sagte, er habe schon vor zwei Wochen bestellt.", en: "He said he'd ordered two weeks ago." },
    { task: "Berichte, was der Kunde jetzt erwartet.", taskEn: "Report what the customer expects now.", de: "Er erklärte, er erwarte eine Antwort noch heute.", en: "He explained he expected an answer today." },
    { task: "Berichte den Plan des Versands weiter.", taskEn: "Pass on the shipping department's plan.", de: "Sie erklärten, sie würden das Paket morgen neu verschicken.", en: "They explained they'd send the parcel again tomorrow." },
    { task: "Rollenspiel: Ihr besprecht die Reklamation.", taskEn: "Role-play: you discuss the complaint.", de: "Er sagte, die Versandkosten seien zu hoch. — Und er meinte, er komme nie wieder.", en: "He said the shipping costs were too high. — And he said he'd never come back." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Transform (10 quotations): Transform 10 direct quotations (mixing present, past, and future) into indirect speech while preserving the correct time reference.\n\nTASK 2 — Newspaper report (8-10 sentences): Write a short report containing present events, past events, and future plans, using correct Konjunktiv I forms for each timeline.',
    starters: ['Der Sprecher sagt, er ... heute.', 'Die Firma berichtet, sie ... gestern.'],
    placeholder: 'Der Politiker sagt, er arbeite heute. Er sagt, er habe gestern gearbeitet. Er sagt, er werde morgen kommen.',
    minWords: 90
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which Konjunktiv I form correctly reports "Ich habe gestern gearbeitet"?',
      options: ['Er sagt, er habe gestern gearbeitet.', 'Er sagt, er arbeite gestern.', 'Er sagt, er werde gestern arbeiten.'],
      answer: 0,
      explain: 'A past event (Perfekt in the original) is reported with Konjunktiv I Perfekt: "habe ... gearbeitet".'
    },
    gap: {
      sentence: ['Er sagt, er ', ' morgen kommen.'],
      gaps: [ { answer: 'werde', accepts: ['werde'] } ],
      explain: 'A future event needs Konjunktiv I Futur I: "werde kommen".'
    },
    match: {
      q: 'Match each event time to its Konjunktiv I form.',
      pairs: [
        { noun: 'Present (heute)', art: 'Konjunktiv I Präsens (arbeite)' },
        { noun: 'Past (gestern)', art: 'Konjunktiv I Perfekt (habe gearbeitet)' },
        { noun: 'Future (morgen)', art: 'Konjunktiv I Futur I (werde arbeiten)' }
      ]
    },
    builder: {
      target: 'Build: "He says he has worked yesterday." (Konjunktiv I Perfekt)',
      bank: ['Er', 'sagt', ',', 'er', 'habe', 'gestern', 'gearbeitet', '.'],
      answer: ['Er', 'sagt', ',', 'er', 'habe', 'gestern', 'gearbeitet', '.'],
      roles: { 'habe': 'r-past' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Er sagt, er arbeite gestern.',
      right: 'Er sagt, er habe gestern gearbeitet.',
      explain: '"gestern" signals a past event — it requires Konjunktiv I Perfekt, not Präsens.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What happens to a Present-tense original statement in reported speech?', options: ['It stays Konjunktiv I Präsens', 'It always becomes Perfekt', 'It always becomes Futur'], answer: 0,
      explain: 'Present stays Present in German reported speech.' },
    { q: 'What happens to BOTH Perfekt and Präteritum in reported speech?', options: ['Both become Konjunktiv I Perfekt', 'Perfekt becomes Präsens, Präteritum stays', 'Both stay unchanged'], answer: 0,
      explain: 'German simplifies past reporting: both Perfekt and Präteritum become Konjunktiv I Perfekt.' },
    { q: 'What happens to a Future-tense original statement?', options: ['It stays Konjunktiv I Futur I', 'It becomes Perfekt', 'It becomes Präsens'], answer: 0,
      explain: 'Future stays Future: "werde + Infinitiv".' },
    { q: 'What is the key question when choosing the reported tense?', options: ['When did the ORIGINAL action happen?', 'When is the newspaper published?', 'What day is it today?'], answer: 0,
      explain: 'You must preserve the speaker\'s original timeline, not the reporter\'s.' },
    { q: 'Does English typically preserve tense the same way as German reported speech?', options: ['No — English often shifts everything into the past', 'Yes, exactly the same', 'English has no reported speech'], answer: 0,
      explain: 'German preserves the original timeline; English often backshifts tense regardless of when the action happened.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-present', html: 'Present stays Present: "Ich arbeite heute" → er arbeite heute.' },
    { c: 'r-past', html: 'Both Perfekt AND Präteritum become Konjunktiv I Perfekt: "Ich habe/ging gestern" → er habe/sei gestern gearbeitet/gegangen.' },
    { c: 'r-future', html: 'Future stays Future: "Ich werde morgen kommen" → er werde morgen kommen. Always ask: when did the ORIGINAL action happen?' }
  ],
  revisionTips: [
    'Take five original sentences (mixing present, past, future) and report each one, checking the tense matches the timeline.',
    'Scan a German newspaper article and identify the original event time for each Konjunktiv I verb you find.',
    'Before reporting any statement, ask yourself: present, past, or future for the ORIGINAL speaker? That decides the form.'
  ]
};

window.CHAPTER = CHAPTER;
