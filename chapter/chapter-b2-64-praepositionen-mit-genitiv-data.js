/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 7 · Chapter 64
   "Präpositionen mit Genitiv" — formal-register prepositions
   requiring Genitiv: wegen, trotz, während, aufgrund, infolge,
   hinsichtlich, innerhalb, außerhalb, oberhalb, unterhalb,
   diesseits, jenseits, beiderseits, mittels, anhand, kraft,
   zugunsten, anlässlich. Recycling chapter — no new vocabulary.
   Does NOT teach Genitiv noun declension in depth,
   Wechselpräpositionen, Dativ prepositions, or C1 legal language.
   IMPORTANT: dialogue uses ONLY Wenke and Timo.
============================================================ */
const CHAPTER = {
  id: 'b2-64-praepositionen-mit-genitiv',
  phase: 'B2 · Phase 7',
  number: 64,
  title: 'Präpositionen mit Genitiv',
  titleEn: 'Prepositions with Genitiv',
  description: 'Formal German loves the Genitive. wegen, aufgrund, hinsichtlich, zugunsten — always ask: where is the Genitiv?',
  xp: 860,
  time: 80,
  difficulty: 'Advanced',
  nextChapter: { number: 65, title: 'Wissenschaftssprache', titleEn: 'Academic German' , href: 'chapter-b2-65-wissenschaftssprache.html' },

  prevChapter: { number: 63, title: 'Goethe Mini 5', titleEn: 'Phase 6 checkpoint exam', href: 'chapter-b2-63-goethe-mini-5.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Formal German loves the <em>Genitiv</em>.',
    intro: 'Preparing a formal university report, Wenke and Timo read official documents dense with Genitiv prepositions — due to the occasion, regarding the agenda, in favor of the project — the register of newspapers, contracts, and academic writing.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Recognize the most common Genitiv prepositions and their meaning groups'
    ],
    scene: 'Vorbereitung eines formellen Berichts',
    femaleSpeakers: ['Wenke'],
    dialogue: [
      { speaker: 'Wenke', tokens: [
        { w: 'Aufgrund', role: 'r-preposition', en: 'due to', hi: 'के कारण', pron: 'OWF-grunt', type: 'Preposition + genitive', why: 'aufgrund + genitive = due to (this chapter).', ex: 'aufgrund des Anlasses' },
        { w: 'des', role: 'r-dativ', en: 'the (masc. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Anlasses', role: 'r-dativ', en: 'occasion (gen.)', hi: 'अवसर के', pron: 'AN-la-ses', type: 'Noun · masc. genitive', why: 'der Anlass (this chapter).', ex: 'der Anlass' },
        { w: 'beginnt', role: 'r-verb', en: 'begins', hi: 'शुरू होता है', pron: 'be-GINT', type: 'Verb · beginnen' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Sitzung', role: 'r-subject', en: 'meeting', hi: 'बैठक', pron: 'ZIT-sung', type: 'Noun · fem.', why: 'die Sitzung (this chapter).', ex: 'die Sitzung' },
        { w: 'pünktlich', role: 'r-akkusativ', en: 'punctually', hi: 'समय पर', pron: 'PÜNKT-likh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Due to the occasion, the meeting begins punctually.', hi: 'Avsar ke kaaran, baithak samay par shuru hoti hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Hinsichtlich', role: 'r-preposition', en: 'regarding', hi: 'के संबंध में', pron: 'HIN-zikht-likh', type: 'Preposition + genitive', why: 'hinsichtlich + genitive = regarding (this chapter).', ex: 'hinsichtlich der Tagesordnung' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Tagesordnung', role: 'r-dativ', en: 'agenda (gen.)', hi: 'कार्यसूची के', pron: 'TAH-ges-or-nung', type: 'Noun · fem. genitive', why: 'die Tagesordnung (this chapter).', ex: 'die Tagesordnung' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'alles', role: 'r-akkusativ', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun · indefinite' },
        { w: 'vorbereitet', role: 'r-verb', en: 'prepared', hi: 'तैयार', pron: 'FOR-be-ry-tet', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Regarding the agenda I have prepared everything.', hi: 'Kaarya soochi ke sambandh mein maine sab kuch taiyaar kiya hai.' },
      { speaker: 'Wenke', tokens: [
        { w: 'Zugunsten', role: 'r-preposition', en: 'in favor of', hi: 'के पक्ष में', pron: 'tsu-GUNS-ten', type: 'Preposition + genitive', why: 'zugunsten + genitive = in favor of (this chapter).', ex: 'zugunsten des Projekts' },
        { w: 'des', role: 'r-dativ', en: 'the (neut. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Projekts', role: 'r-dativ', en: 'project (gen.)', hi: 'परियोजना के', pron: 'pro-YEKTS', type: 'Noun · neut. genitive', why: 'das Projekt (this chapter).', ex: 'das Projekt' },
        { w: 'entscheiden', role: 'r-verb', en: 'decide', hi: 'फ़ैसला करते हैं', pron: 'ent-SHY-den', type: 'Verb · entscheiden (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'uns', role: 'r-akkusativ', en: 'ourselves', hi: 'ख़ुद को', pron: 'uns', type: 'Reflexive pronoun' },
        { w: '.', plain: true }
      ], en: 'We decide in favor of the project.', hi: 'Hum pariyojana ke paksh mein faisla karte hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'freut', role: 'r-verb', en: 'pleases', hi: 'ख़ुशी देता है', pron: 'FROYT', type: 'Verb · freuen' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Good, that pleases me very much.', hi: 'Achha, mujhe iski bahut khushi hai.' },
      { speaker: 'Wenke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'freue', role: 'r-verb', en: 'look forward', hi: 'उत्साहित हूँ', pron: 'FROY-uh', type: 'Verb · sich freuen (ich)' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'auf', role: 'r-preposition', en: 'to', hi: 'के लिए', pron: 'owf', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Sitzung', role: 'r-akkusativ', en: 'meeting', hi: 'बैठक', pron: 'ZIT-sung', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'I look forward to the meeting.', hi: 'Mujhe baithak ka intezaar hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Formal German loves the Genitive. Whenever you read <span class="de r-cause">wegen</span>, <span class="de r-cause">aufgrund</span>, <span class="de r-topic">hinsichtlich</span>, or <span class="de r-benefit">zugunsten</span>, ask yourself: "Where is the Genitiv?"'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is PRÄPOSITIONEN MIT GENITIV at B2 level: formal-register prepositions that always take Genitiv, grouped by meaning — Cause (wegen, aufgrund, infolge), Time (während, anlässlich), Place (innerhalb, außerhalb, oberhalb, unterhalb, diesseits, jenseits, beiderseits), Topic (hinsichtlich), Means (mittels, anhand), Authority (kraft), Benefit (zugunsten). These signal a formal written register (newspapers, contracts, reports, academic writing) and contrast with the more casual spoken alternative of using Dativ after some of them (e.g. "wegen dem Wetter" is common in speech but "wegen des Wetters" is the formal/Goethe B2-expected form). ' +
    'Do NOT expect or require Genitiv noun declension theory beyond what\'s needed here, Wechselpräpositionen, Dativ prepositions, or C1 legal language — those are separate topics; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that each Genitiv preposition is followed by a correctly declined Genitiv noun phrase (des/der + correct noun ending where applicable, e.g. "des Wetters", "der Ergebnisse").\n' +
    '- Do NOT flag "wegen dem Regen" (Dativ) as simply "wrong" without noting it is common in SPOKEN German — but do note that formal/Goethe B2 writing expects the Genitiv form "wegen des Regens".\n' +
    '- Check the postposition "zufolge"-style prepositions are unaffected here — this chapter is only about prepositions that PRECEDE their noun and require Genitiv.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Register check:</b> one sentence on whether the learner used the formal Genitiv forms appropriately for the apparent register of the text.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly use Genitiv after formal prepositions and recognize the meaning groups. Ready for Nominalstil in Verwaltung & Recht next.',
    mid: 'Good. Re-read the Master Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: formal German loves the Genitive, always ask "where is it?"'
  },

  parserSentence: [
    { w: 'Wegen', role: 'r-cause' }, { w: 'des', role: 'r-cause' }, { w: 'schlechten', role: 'r-cause' },
    { w: 'Wetters', role: 'r-cause' }, { w: 'verschieben', role: 'plain' }, { w: 'wir', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: formal German prefers Genitiv prepositions over Dativ alternatives.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Wenke and Timo prepare a formal report, using Genitiv prepositions across all meaning groups.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the most common Genitiv prepositions, their meaning groups, and formal vs spoken register.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a newspaper article on environmental policy and a university report full of Genitiv prepositions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify Genitiv prepositions, their meaning category, and associated noun phrase.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Present reports, explain causes, and describe locations using appropriate Genitiv prepositions.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite informal sentences formally and write a 220-250 word report using 12+ Genitiv prepositions.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill preposition choice, Genitiv article insertion, meaning matching, and register selection.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 860 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 5 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Preposition-choice drills, Genitiv article practice, and a 220-250 word formal report task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Table, meaning groups, formal vs spoken comparison, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'wegen des Wetters, aufgrund der Ergebnisse, infolge des Problems', text: 'Use Genitiv prepositions of cause correctly' },
    { de: 'während der Sitzung, anlässlich des Jubiläums', text: 'Use Genitiv prepositions of time correctly' },
    { de: 'innerhalb/außerhalb, oberhalb/unterhalb, diesseits/jenseits, beiderseits', text: 'Use Genitiv prepositions of place correctly' },
    { de: 'hinsichtlich, mittels, anhand, kraft, zugunsten', text: 'Use Genitiv prepositions for topic, means, authority, and benefit' },
    { de: 'wegen dem Regen (spoken) vs wegen des Regens (formal)', text: 'Distinguish formal written register from casual spoken alternatives' }
  ],

  vocab: [
    { de: 'aufgrund', pos: 'preposition', level: 'B2', register: 'written', en: 'because of, due to', hi: 'के कारण', ex: 'Aufgrund des schlechten Wetters fiel die Veranstaltung aus.', exEn: 'Due to the bad weather, the event was cancelled.', exHi: 'Kharaab mausam ke kaaran, samaaroh radd ho gaya.', ex2: 'Sie haben aufgrund der Ergebnisse neu geplant.', ex2En: 'They\'ve replanned based on the results.', ex2Hi: 'Unhone parinaamon ke kaaran naye sire se plan kiya hai.' },
    { de: 'hinsichtlich', pos: 'preposition', level: 'B2', register: 'written', en: 'regarding, with respect to', hi: 'के संबंध में', ex: 'Hinsichtlich der Kosten gibt es noch Fragen.', exEn: 'Regarding the costs, there are still questions.', exHi: 'Lagat ke sambandh mein abhi bhi sawaal hain.', ex2: 'Sie haben hinsichtlich des Projekts Bedenken geäußert.', ex2En: 'They\'ve raised concerns regarding the project.', ex2Hi: 'Unhone project ke sambandh mein chintaayein vyakt ki hain.' },
    { de: 'zugunsten', pos: 'preposition', level: 'B2', register: 'written', en: 'in favour of', hi: 'के पक्ष में', ex: 'Die Entscheidung fiel zugunsten der Mitarbeiter aus.', exEn: 'The decision was made in favour of the employees.', exHi: 'Faisla employees ke paksha mein aaya.', ex2: 'Sie haben zugunsten der Umwelt entschieden.', ex2En: 'They\'ve decided in favour of the environment.', ex2Hi: 'Unhone paryaavaran ke paksha mein faisla kiya hai.' },
    { de: 'die Sitzung', art: 'die', gender: 'f', plural: 'Sitzungen', pos: 'noun', level: 'B2', register: 'written', en: 'meeting, session', hi: 'बैठक', ex: 'Während der Sitzung wurde viel diskutiert.', exEn: 'During the meeting, a lot was discussed.', exHi: 'Baithak ke dauraan, bahut charcha hui.', ex2: 'Sie haben die Sitzung verschoben.', ex2En: 'They\'ve postponed the meeting.', ex2Hi: 'Unhone baithak sthagit kar di hai.' },
    { de: 'der Anlass', art: 'der', gender: 'm', plural: 'Anlässe', pos: 'noun', level: 'B2', register: 'written', en: 'occasion, cause', hi: 'अवसर', ex: 'Anlässlich des Jubiläums fand eine Feier statt.', exEn: 'On the occasion of the anniversary, a celebration took place.', exHi: 'Varshgaanth ke avsar par, ek samaaroh hua.', ex2: 'Sie haben einen guten Anlass gefunden.', ex2En: 'They\'ve found a good occasion.', ex2Hi: 'Unhein ek achha avsar mila hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was sind Genitiv-Präpositionen?',
      body: [ 'Some German prepositions ALWAYS require the Genitive: Präposition + Genitiv.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['<span class="de r-time">Während des Unterrichts</span>', 'During class'],
          ['<span class="de r-cause">Wegen des Wetters</span>', 'Because of the weather'],
          ['<span class="de r-place">Trotz der Probleme</span>', 'Despite the problems']
        ]
      },
      hinglish: 'Kuch prepositions apne baad hamesha Genitiv lete hain. Yeh zyada-tar formal German mein aate hain \u2014 newspapers, contracts aur reports mein \u2014 isliye reading mein inhe pehchaanna zaroori hai.'
    },
    {
      title: 'Die wichtigsten Genitiv-Präpositionen',
      body: [ 'These 19 prepositions are the highest-frequency Genitiv prepositions in formal German.' ],
      table: {
        head: ['Preposition', 'Meaning'],
        rows: [
          ['trotz', 'despite'], ['während', 'during'], ['wegen', 'because of'],
          ['außerhalb', 'outside'], ['innerhalb', 'within'], ['oberhalb', 'above'],
          ['unterhalb', 'below'], ['diesseits', 'on this side of'], ['jenseits', 'on the other side of'],
          ['beiderseits', 'on both sides of'], ['kraft', 'by virtue of'], ['mittels', 'by means of'],
          ['anhand', 'using/based on'], ['infolge', 'as a result of'], ['aufgrund', 'based on'],
          ['ungeachtet', 'regardless of'], ['zugunsten', 'in favour of'], ['anlässlich', 'on the occasion of'],
          ['hinsichtlich', 'regarding']
        ]
      },
      hinglish: 'Yeh unnees prepositions formal German mein sabse zyada aate hain. Poori list ratne ki zaroorat nahi \u2014 pehle chaar (<b>trotz, w\u00e4hrend, wegen, aufgrund</b>) sabse zyada kaam aate hain, baaki ko pehchaan lena hi kaafi hai.'
    },
    {
      title: 'Register: Formal vs Alltagssprache',
      body: [ 'Formal writing uses Genitiv prepositions; everyday speech often uses Dativ alternatives. Goethe B2 expects the formal Genitive forms.' ],
      table: {
        head: ['Formal Writing', 'Everyday Speech'],
        rows: [
          ['aufgrund des Problems', 'wegen dem Problem'],
          ['während der Sitzung', '(same, but casual tone)'],
          ['hinsichtlich des Vertrags', 'wegen dem Vertrag']
        ]
      },
      hinglish: 'Yahan register ka farak samajhna zaroori hai. Bolchaal mein log aksar Dativ laga dete hain \u2014 <span class="de">wegen dem Problem</span> \u2014 aur woh galat nahi hai, bas casual hai. Par exam ki writing mein Genitiv hi chahiye: <span class="de">aufgrund des Problems</span>.'
    },
    {
      title: 'Genitiv-Artikel',
      body: [ 'The article changes because of the Genitive: des (masc./neut.), der (fem./plural).' ],
      table: {
        head: ['Gender', 'Example'],
        rows: [
          ['des (masc.)', 'wegen des Wetters'],
          ['der (fem.)', 'trotz der Krise'],
          ['des (neut.)', 'innerhalb des Gebäudes'],
          ['der (Plural)', 'aufgrund der Ergebnisse']
        ]
      },
      hinglish: 'Genitiv mein article badal jaata hai \u2014 masculine aur neuter dono <b>des</b> lete hain, aur feminine aur plural dono <b>der</b>. Matlab chaar mein se sirf do forms yaad karni hain.'
    },
    {
      title: 'Das Nomen bekommt auch eine Endung',
      body: [
        'The article is only half the job. In the Genitiv, masculine and neuter nouns also add <b>-s</b> or <b>-es</b> to the noun itself \u2014 this is the part learners most often forget.'
      ],
      table: {
        head: ['Gender', 'Article', 'Noun ending', 'Example'],
        rows: [
          ['masculine', 'des', '+ -s / -es', '<span class="de">wegen des Vertrag<b>s</b></span>'],
          ['neuter', 'des', '+ -s / -es', '<span class="de">innerhalb des Gebäude<b>s</b></span>'],
          ['feminine', 'der', 'no change', '<span class="de">trotz der Krise</span>'],
          ['plural', 'der', 'no change', '<span class="de">aufgrund der Ergebnisse</span>']
        ]
      },
      note: 'Use <b>-es</b> when the noun is one syllable or ends in -s, -\u00df, -z, -tz: <i>des Kind<b>es</b></i>, <i>des Gesetz<b>es</b></i>. Otherwise <b>-s</b> is normal: <i>des Vertrag<b>s</b></i>, <i>des Wetter<b>s</b></i>.',
      hinglish: 'Sirf article badalna kaafi nahi hai. Genitiv mein masculine aur neuter nouns par bhi ek <b>-s</b> ya <b>-es</b> lagta hai \u2014 aur yahi sabse zyada bhoola jaata hai. Feminine aur plural mein noun waisa hi rehta hai, sirf article <b>der</b> ho jaata hai. <b>-es</b> tab lagta hai jab noun ek syllable ka ho ya <b>-s, -\u00df, -z, -tz</b> par khatam ho (<i>des Kindes</i>, <i>des Gesetzes</i>), warna seedha <b>-s</b> (<i>des Vertrags</i>).'
    },
    {
      title: 'Bedeutungsgruppen (meaning groups)',
      body: [ 'Group the prepositions by meaning rather than memorizing them as a random list.' ],
      table: {
        head: ['Category', 'Prepositions'],
        rows: [
          ['Cause', 'wegen, aufgrund, infolge'],
          ['Time', 'während, anlässlich'],
          ['Place', 'innerhalb, außerhalb, oberhalb, unterhalb, diesseits, jenseits, beiderseits'],
          ['Topic', 'hinsichtlich'],
          ['Means', 'mittels, anhand'],
          ['Authority', 'kraft'],
          ['Benefit', 'zugunsten']
        ]
      },
      hinglish: 'Inhe random list ki tarah yaad karne ki jagah meaning ke hisaab se group karo \u2014 cause wale alag, time wale alag, jagah wale alag. Isse yaad rakhna kaafi aasaan ho jaata hai.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'Genitiv prepositions appear constantly in newspaper articles, scientific texts, contracts, formal letters, company reports, government announcements, and university texts.' ],
      hinglish: 'Yeh prepositions newspapers, scientific texts, contracts aur official announcements mein bahut aate hain. Bolne mein inme se kuch hi natural lagte hain, isliye inhe zyada-tar padhne aur likhne ke liye seekho.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These come from forgetting the <b>-s</b> on the noun, or using a Dativ / Nominativ article where the Genitiv is required.' ],
      mistakes: [
        { wrong: 'wegen des Wetter', right: 'wegen des Wetters', why: 'A masculine or neuter noun adds <b>-s</b> (or <b>-es</b>) in the Genitiv, not just the article: <i>des Wetter<b>s</b></i>. (Note: <span class="de">wegen dem Wetter</span> is not wrong either \u2014 it is the normal spoken form, just too casual for exam writing.)' },
        { wrong: 'trotz den Problemen', right: 'trotz der Probleme', why: '"trotz" requires Genitiv ("der Probleme"), not Dativ ("den Problemen").' },
        { wrong: 'während die Sitzung', right: 'während der Sitzung', why: '"während" requires Genitiv ("der Sitzung"), not the Nominativ/Akkusativ form.' },
        { wrong: 'aufgrund das Problems', right: 'aufgrund des Problems', why: 'The Genitiv article for a neuter noun is "des", not "das".' },
        { wrong: 'innerhalb dem Gebäude', right: 'innerhalb des Gebäudes', why: '<b>innerhalb</b> takes the Genitiv, so both parts change \u2014 the article becomes <b>des</b> and the noun adds <b>-s</b>.' }
      ],
      hinglish: 'Yeh galtiyan do wajah se hoti hain \u2014 noun par <b>-s</b> lagana bhool jaana, ya article ko Dativ ya Nominativ mein chhod dena. Dhyaan rakho ki Genitiv mein dono badalte hain, sirf article nahi.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need a formal preposition? Choose the meaning first (cause, time, place, topic, means), then always use the Genitive.' ],
      note: 'Memory trick: formal German loves the Genitive. Whenever you read wegen, aufgrund, hinsichtlich, or zugunsten in a newspaper, report, or contract, ask yourself: "Where is the Genitiv?"',
      hinglish: 'Formal preposition chahiye? Pehle meaning ke hisaab se preposition chuno (cause, time, place, topic, means), phir uske baad Genitiv lagao \u2014 aur noun par <b>-s</b> lagana mat bhoolo.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Zeitungsartikel über Umweltpolitik',
    titleEn: 'Reading A — A newspaper article about environmental policy',
    tokens: [
      { w: 'Aufgrund', role: 'r-cause', en: 'based on (Genitiv preposition — cause)', hi: 'ke aadhaar par (Genitiv preposition — cause)', type: 'Präposition · Gen.' },
      { w: 'der', role: 'r-cause', en: 'the (fem. gen.)', hi: '(Genitiv phrase ka hissa)', type: 'Article · Gen.' },
      { w: 'Klimakrise', role: 'r-cause', en: 'climate crisis (Satzende, Genitiv noun)', hi: 'jalvaayu sankat (Satzende, Genitiv noun)', type: 'Noun · fem. (Satzende)' },
      { w: 'plant', role: 'plain', en: 'plans', hi: 'planning karta hai', type: 'Verb (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Regierung', role: 'plain', en: 'government', hi: 'sarkaar', type: 'Noun · fem.' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'naye', type: 'Adjective' },
      { w: 'Maßnahmen', role: 'plain', en: 'measures (Satzende)', hi: 'upaay (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true },
      { w: 'Hinsichtlich', role: 'r-topic', en: 'regarding (Genitiv preposition — topic)', hi: 'ke sambandh mein (Genitiv preposition — topic)', type: 'Präposition · Gen.' },
      { w: 'der', role: 'r-topic', en: 'the (plural gen.)', hi: '(Genitiv phrase ka hissa)', type: 'Article · Gen.' },
      { w: 'Kosten', role: 'r-topic', en: 'costs (Satzende, Genitiv noun)', hi: 'kharche (Satzende, Genitiv noun)', type: 'Noun · plural (Satzende)' },
      { w: 'gibt', role: 'plain', en: 'gives', hi: 'hai', type: 'Verb (Präsens)' },
      { w: 'es', role: 'plain', en: 'it', hi: 'yeh', type: 'Pronomen · Nom.' },
      { w: 'noch', role: 'plain', en: 'still', hi: 'abhi bhi', type: 'Adverb' },
      { w: 'Diskussionen', role: 'plain', en: 'discussions (Satzende)', hi: 'charchaayein (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true },
      { w: 'Trotz', role: 'r-cause', en: 'despite (Genitiv preposition — concession)', hi: 'के बावजूद', type: 'Präposition · Gen.' },
      { w: 'des', role: 'r-cause', en: 'the (masc. gen.)', hi: '(जेनिटिव का हिस्सा)', type: 'Article · Gen.' },
      { w: 'Widerstands', role: 'r-cause', en: 'resistance (Satzende, Genitiv noun)', hi: 'विरोध (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'einiger', role: 'plain', en: 'of some', hi: 'कुछ', type: 'Determiner · Genitiv' },
      { w: 'Verbände', role: 'plain', en: 'associations (Satzende)', hi: 'संघों (Satzende)', type: 'Noun · plural' },
      { w: 'hält', role: 'plain', en: 'holds', hi: 'बनाए रखती है', type: 'Verb · festhalten' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Koalition', role: 'plain', en: 'coalition', hi: 'गठबंधन', type: 'Noun · fem.' },
      { w: 'an', role: 'plain', en: 'to', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'ihrem', role: 'plain', en: 'its', hi: 'अपनी', type: 'Possessivartikel' },
      { w: 'Plan', role: 'plain', en: 'plan (Satzende)', hi: 'योजना (Satzende)', type: 'Noun · masc.' },
      { w: 'fest', role: 'plain', en: '(Satzende, prefix)', hi: '', type: 'Separable prefix · festhalten' },
      { w: '.', plain: true },
      { w: 'Innerhalb', role: 'r-cause', en: 'within (Genitiv preposition — time)', hi: 'के भीतर', type: 'Präposition · Gen.' },
      { w: 'der', role: 'r-cause', en: 'the (plural gen.)', hi: '(जेनिटिव का हिस्सा)', type: 'Article · Gen.' },
      { w: 'nächsten', role: 'r-cause', en: 'next', hi: 'अगले', type: 'Adjective · Gen.' },
      { w: 'fünf', role: 'r-cause', en: 'five', hi: 'पाँच', type: 'Number' },
      { w: 'Jahre', role: 'r-cause', en: 'years (Satzende, Genitiv noun)', hi: 'सालों (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'soll', role: 'plain', en: 'is supposed to', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Ausstoß', role: 'plain', en: 'emissions', hi: 'उत्सर्जन', type: 'Noun · masc.' },
      { w: 'deutlich', role: 'plain', en: 'noticeably', hi: 'काफ़ी', type: 'Adverb' },
      { w: 'sinken', role: 'plain', en: 'fall (Satzende)', hi: 'गिरना (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true },
      { w: 'Angesichts', role: 'r-cause', en: 'in view of (Genitiv preposition — cause)', hi: 'को देखते हुए', type: 'Präposition · Gen.' },
      { w: 'des', role: 'r-cause', en: 'the (masc. gen.)', hi: '(जेनिटिव का हिस्सा)', type: 'Article · Gen.' },
      { w: 'internationalen', role: 'r-cause', en: 'international', hi: 'अंतरराष्ट्रीय', type: 'Adjective · Gen.' },
      { w: 'Drucks', role: 'r-cause', en: 'pressure (Satzende, Genitiv noun)', hi: 'दबाव (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'gilt', role: 'plain', en: 'is considered', hi: 'माना जाता है', type: 'Verb · gelten' },
      { w: 'ein', role: 'plain', en: 'an (neut.)', hi: 'एक', type: 'Article' },
      { w: 'Scheitern', role: 'plain', en: 'failure (Satzende)', hi: 'विफलता (Satzende)', type: 'Noun · neut.' },
      { w: 'als', role: 'plain', en: 'as', hi: 'के रूप में', type: 'Preposition' },
      { w: 'ausgeschlossen', role: 'plain', en: 'excluded (Satzende)', hi: 'असंभावित (Satzende)', type: 'Adjective' },
      { w: '.', plain: true }
    ],
    translation: 'Based on the climate crisis, the government plans new measures. Regarding the costs, there are still discussions. Despite the resistance of some associations, the coalition is sticking to its plan. Within the next five years, emissions are supposed to fall noticeably. In view of the international pressure, failure is considered out of the question.',
    comprehension: [
      { q: 'Welche Bedeutungsgruppe hat "aufgrund" hier?', options: ['Cause (Ursache)', 'Time (Zeit)', 'Place (Ort)'], answer: 0 },
      { q: 'Welche Bedeutungsgruppe hat "hinsichtlich" hier?', options: ['Topic (Thema)', 'Means (Mittel)', 'Benefit (Nutzen)'], answer: 0 },
      { q: 'Welcher Kasus folgt auf beide Präpositionen?', options: ['Genitiv', 'Dativ', 'Akkusativ'], answer: 0 }
    ]
  },
  readingBArchive: {
    title: 'Universitätsbericht',
    titleEn: 'Reading B — A university report containing numerous Genitiv prepositions',
    tokens: [
      { w: 'Innerhalb', role: 'r-place', en: 'within (Genitiv preposition — place)', hi: 'ke bhitar (Genitiv preposition — place)', type: 'Präposition · Gen.' },
      { w: 'des', role: 'r-place', en: 'the (neut. gen.)', hi: '(Genitiv phrase ka hissa)', type: 'Article · Gen.' },
      { w: 'Semesters', role: 'r-place', en: 'semester (Satzende, Genitiv noun)', hi: 'semester ke (Satzende, Genitiv noun)', type: 'Noun · neut. (Satzende)' },
      { w: 'werden', role: 'plain', en: 'will be', hi: 'jaayenge', type: 'Verb · werden (Präsens)' },
      { w: 'zwei', role: 'plain', en: 'two', hi: 'do', type: 'Zahl' },
      { w: 'Prüfungen', role: 'plain', en: 'exams (Satzende)', hi: 'pareekshaayen (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'stattfinden', role: 'plain', en: 'take place (Satzende)', hi: 'aayojit ki (Satzende)', type: 'Verb · Satzende' },
      { w: '.', plain: true },
      { w: 'Zugunsten', role: 'r-benefit', en: 'in favour of (Genitiv preposition — benefit)', hi: 'ke pakshsh mein (Genitiv preposition — benefit)', type: 'Präposition · Gen.' },
      { w: 'der', role: 'r-benefit', en: 'the (plural gen.)', hi: '(Genitiv phrase ka hissa)', type: 'Article · Gen.' },
      { w: 'Studierenden', role: 'r-benefit', en: 'students (Satzende, Genitiv noun)', hi: 'chhaatron (Satzende, Genitiv noun)', type: 'Noun · plural (Satzende)' },
      { w: 'wird', role: 'plain', en: 'will be', hi: 'jaayega', type: 'Verb · werden (Präsens)' },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Zeitplan', role: 'plain', en: 'schedule (Satzende)', hi: 'samay-saarni (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'angepasst', role: 'plain', en: 'adjusted (Satzende)', hi: 'sanshodhit (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Within the semester, two exams will take place. In favour of the students, the schedule will be adjusted.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_064_L001', speaker: 'Wenke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, im Bericht steht: "Aufgrund des Anlasses wurde die Veranstaltung verschoben." Klingt das nicht zu förmlich?', en: 'Timo, the report says: "Due to the occasion, the event was postponed." Doesn\'t that sound too formal?' },
      { id: 'B2_064_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Für einen offiziellen Bericht passt das genau. Bezüglich der Tagesordnung — hast du die schon ergänzt?', en: 'For an official report, that fits exactly. Regarding the agenda — have you already added to it?' },
      { id: 'B2_064_L003', speaker: 'Wenke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Noch nicht ganz. Aber zugunsten der Übersichtlichkeit sollten wir sie kürzen.', en: 'Not quite yet. But for the sake of clarity, we should shorten it.' },
      { id: 'B2_064_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Einverstanden, das macht den Bericht viel lesbarer.', en: 'Agreed, that makes the report much more readable.' }
    ],
    transcript: 'Timo, im Bericht steht: "Aufgrund des Anlasses wurde die Veranstaltung verschoben." Klingt das nicht zu förmlich? Für einen offiziellen Bericht passt das genau. Bezüglich der Tagesordnung — hast du die schon ergänzt? Noch nicht ganz. Aber zugunsten der Übersichtlichkeit sollten wir sie kürzen. Einverstanden, das macht den Bericht viel lesbarer.',
    translation: 'Timo, the report says: "Due to the occasion, the event was postponed." Doesn\'t that sound too formal? For an official report, that fits exactly. Regarding the agenda — have you already added to it? Not quite yet. But for the sake of clarity, we should shorten it. Agreed, that makes the report much more readable.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'im' },
      { w: 'Bericht' },
      { w: 'steht' },
      { w: ':', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'Aufgrund' },
      { w: 'des' },
      { w: 'Anlasses' },
      { w: 'wurde' },
      { w: 'die' },
      { w: 'Veranstaltung' },
      { w: 'verschoben' },
      { w: '."', plain: true },
      { w: 'Klingt' },
      { w: 'das' },
      { w: 'nicht' },
      { w: 'zu' },
      { w: 'förmlich' },
      { w: '?', plain: true },
      { w: 'Für' },
      { w: 'einen' },
      { w: 'offiziellen' },
      { w: 'Bericht' },
      { w: 'passt' },
      { w: 'das' },
      { w: 'genau' },
      { w: '.', plain: true },
      { w: 'Bezüglich' },
      { w: 'der' },
      { w: 'Tagesordnung' },
      { w: '—', plain: true },
      { w: 'hast' },
      { w: 'du' },
      { w: 'die' },
      { w: 'schon' },
      { w: 'ergänzt' },
      { w: '?', plain: true },
      { w: 'Noch' },
      { w: 'nicht' },
      { w: 'ganz' },
      { w: '.', plain: true },
      { w: 'Aber' },
      { w: 'zugunsten' },
      { w: 'der' },
      { w: 'Übersichtlichkeit' },
      { w: 'sollten' },
      { w: 'wir' },
      { w: 'sie' },
      { w: 'kürzen' },
      { w: '.', plain: true },
      { w: 'Einverstanden' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'macht' },
      { w: 'den' },
      { w: 'Bericht' },
      { w: 'viel' },
      { w: 'lesbarer' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum wurde die Veranstaltung laut Bericht verschoben?', qEn: 'Why was the event postponed, according to the report?', options: ['wegen des Wetters', 'aufgrund des Anlasses', 'wegen Timo', 'trotz der Tagesordnung'], optionsEn: ['because of the weather', 'owing to the occasion', 'because of Timo', 'despite the agenda'], answer: 1,
        explain: '"Aufgrund des Anlasses wurde die Veranstaltung verschoben."' },
      { q: 'Warum will Wenke die Tagesordnung kürzen?', qEn: 'Why does Wenke want to shorten the agenda?', options: ['zugunsten der Übersichtlichkeit', 'wegen der Zeit', 'aufgrund des Chefs', 'trotz der Länge'], optionsEn: ['in favour of clarity', 'because of the time', 'because of the boss', 'despite the length'], answer: 0,
        explain: '"… zugunsten der Übersichtlichkeit sollten wir sie kürzen."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Dein Kollege fragt, ob „aufgrund des Anlasses“ zu förmlich klingt.", taskEn: "Your colleague asks whether “aufgrund des Anlasses” sounds too formal.", de: "Für einen offiziellen Bericht ist das genau richtig.", en: "For an official report that's exactly right." },
    { task: "Deine Chefin fragt in der Sitzung, warum verschoben wurde.", taskEn: "In the meeting your boss asks why it was postponed.", de: "Aufgrund des Anlasses wurde die Veranstaltung verschoben.", en: "Owing to the occasion the event was postponed." },
    { task: "Ein Kollege fragt, was zu den Kosten entschieden wurde.", taskEn: "A colleague asks what was decided about costs.", de: "Hinsichtlich der Kosten ist noch nichts entschieden.", en: "With regard to the costs nothing has been decided yet." },
    { task: "Die Sitzung verteilt die Mittel neu. Sag, wer profitiert.", taskEn: "The meeting reallocates the funds. Say who benefits.", de: "Die Mittel werden zugunsten der kleinen Abteilung verteilt.", en: "The funds are allocated in favour of the small department." },
    { task: "Eine Kollegin schreibt „wegen dem Regen“ ins Protokoll. Berate sie.", taskEn: "A colleague writes “wegen dem Regen” in the minutes. Advise her.", de: "Im Protokoll schreibst du besser wegen des Regens.", en: "In the minutes you'd better write 'wegen des Regens'." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (6-8 sentences): Rewrite informal sentences using formal Genitiv prepositions instead of casual Dativ alternatives.\n\nTASK 2 — Formal report (220-250 words): Write a report using at least 12 Genitiv prepositions across multiple semantic categories (cause, time, place, topic, means, benefit), in a formal register with logical paragraph structure.',
    starters: ['Aufgrund der Ergebnisse ...', 'Hinsichtlich des Vertrags ...'],
    placeholder: 'Wegen des schlechten Wetters wurde die Veranstaltung verschoben. Trotz der Probleme lief alles gut.',
    minWords: 220
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence uses the correct formal Genitiv?',
      options: ['Wegen des schlechten Wetters verschieben wir die Präsentation.', 'Wegen dem schlechten Wetter verschieben wir die Präsentation.', 'Wegen das schlechte Wetter verschieben wir die Präsentation.'],
      answer: 0,
      explain: '"wegen" requires the Genitiv article "des" and the Genitiv noun ending "-s": "des Wetters".'
    },
    gap: {
      sentence: ['Trotz ', ' Probleme sollten wir weitermachen.'],
      gaps: [ { answer: 'der', accepts: ['der'] } ],
      explain: '"trotz" requires Genitiv — "der Probleme" for the plural noun.'
    },
    match: {
      q: 'Match each preposition to its meaning category.',
      pairs: [
        { noun: 'wegen', art: 'Cause' },
        { noun: 'während', art: 'Time' },
        { noun: 'innerhalb', art: 'Place' },
        { noun: 'hinsichtlich', art: 'Topic' }
      ]
    },
    builder: {
      target: 'Build: "During the meeting, we should take notes." (Genitiv preposition — time)',
      bank: ['Während', 'der', 'Sitzung', 'sollten', 'wir', 'Notizen', 'machen', '.'],
      answer: ['Während', 'der', 'Sitzung', 'sollten', 'wir', 'Notizen', 'machen', '.'],
      roles: { 'Während': 'r-time', 'der': 'r-time', 'Sitzung': 'r-time' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Innerhalb dem Gebäudes ist das Rauchen verboten.',
      right: 'Innerhalb des Gebäudes ist das Rauchen verboten.',
      explain: '"innerhalb" requires the Genitiv article "des", not the Dativ "dem".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which case do Genitiv prepositions always require?', options: ['Genitiv', 'Dativ', 'Akkusativ'], answer: 0,
      explain: 'By definition, Genitiv prepositions always take the Genitive case.' },
    { q: 'Which meaning group does "wegen" belong to?', options: ['Cause', 'Time', 'Place'], answer: 0,
      explain: '"wegen" expresses cause, along with "aufgrund" and "infolge".' },
    { q: 'Which meaning group does "während" belong to?', options: ['Time', 'Cause', 'Benefit'], answer: 0,
      explain: '"während" expresses simultaneous time, along with "anlässlich".' },
    { q: 'Is "wegen dem Regen" appropriate for formal Goethe B2 writing?', options: ['No — formal writing expects "wegen des Regens"', 'Yes, always correct', 'Only in academic writing'], answer: 0,
      explain: '"wegen dem Regen" is common in spoken German, but formal writing expects the Genitiv form.' },
    { q: 'Which preposition expresses benefit/favour?', options: ['zugunsten', 'mittels', 'kraft'], answer: 0,
      explain: '"zugunsten" means "in favour of", requiring Genitiv.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-cause', html: 'Genitiv prepositions signal a formal register: wegen, aufgrund, infolge (cause), während, anlässlich (time), innerhalb/außerhalb (place), hinsichtlich (topic), mittels/anhand (means), zugunsten (benefit).' },
    { c: 'r-place', html: 'The article changes to Genitiv: des (masc./neut.), der (fem./plural) — always ask "where is the Genitiv?"' },
    { c: 'r-cause', html: 'Formal writing (newspapers, contracts, reports) expects the Genitiv form; casual spoken German often uses Dativ alternatives instead.' }
  ],
  revisionTips: [
    'Group the 19 Genitiv prepositions by meaning (cause, time, place, topic, means, authority, benefit) rather than memorizing them as one long list.',
    'Scan a German newspaper article or contract for Genitiv prepositions and identify the article change (des/der) for each noun.',
    'Practise rewriting five casual Dativ sentences (wegen dem...) into their formal Genitiv equivalents (wegen des...).'
  ]
};

window.CHAPTER = CHAPTER;
