/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 4 · Chapter 40
   "Verben mit Präpositionen (B2)" — high-frequency B2 verbs that
   require a FIXED preposition + case, taught as one vocabulary
   unit (verb + preposition + case), with matching question
   words (Worauf?/Woran?/Wofür?/Womit?) and Pronominaladverbien
   (darauf/daran/dafür) as replacements for preposition+thing.
   Does NOT teach Nomen mit Präpositionen or Adjektive mit
   Präpositionen (later chapters).
   IMPORTANT: dialogue uses ONLY Doreen and Timo.
   Vocabulary source: uploaded chapter-40 list (51 items,
   continuing the Kunstraub/detective theme from Ch.38-39).
============================================================ */
const CHAPTER = {
  id: 'b2-40-verben-mit-praepositionen',
  phase: 'B2 · Phase 4',
  number: 40,
  title: 'Verben mit Präpositionen (B2)',
  titleEn: 'Verbs with fixed prepositions (B2)',
  description: 'warten AUF, sich interessieren FÜR, teilnehmen AN — learn every high-frequency B2 verb together with its one true preposition and case.',
  xp: 520,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 41, title: 'Nomen mit Präpositionen (B2)', titleEn: 'Nouns with fixed prepositions (B2)' , href: 'chapter-b2-41-nomen-mit-praepositionen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'The verb needs its <em>one</em> preposition.',
    intro: 'A giraffe has escaped its enclosure at the zoo, and Doreen can\'t stop thinking about it while Timo hopes for a quick return — every verb here paired permanently with one preposition: sich ärgern über, hoffen auf, sich kümmern um.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how each verb\'s fixed preposition and case never change, and how Pronominaladverbien replace them'
    ],
    scene: 'Die Bewerbung und der Kunstraub',
    femaleSpeakers: ['Doreen'],
    dialogue: [
      { speaker: 'Doreen', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'ärgere', role: 'r-verb', en: 'am annoyed', hi: 'नाराज़ हूँ', pron: 'ER-guh-ruh', type: 'Verb · sich ärgern (ich)' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद से', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'über', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'Ü-ber', type: 'Preposition · fixed with ärgern', why: 'sich ärgern über + Akkusativ = to be annoyed about (this chapter).', ex: 'Ich ärgere mich über die Nachricht.', exEn: 'I am annoyed about the news.' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Nachricht', role: 'r-akkusativ', en: 'news', hi: 'ख़बर', pron: 'NAKH-rikht', type: 'Noun · fem.' },
        { w: 'von', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'fon', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Giraffe', role: 'r-dativ', en: 'giraffe (dat.)', hi: 'जिराफ़ के', pron: 'zhi-RA-fuh', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'I am annoyed about the news about the giraffe.', hi: 'Main jiraaf ki khabar se naaraz hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wieso', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'VEE-zo', type: 'Question word' },
        { w: 'regst', role: 'r-verb', en: 'get worked up', hi: 'उत्तेजित हो जाती हो', pron: 'RAYKST', type: 'Verb · sich aufregen (du)', lexicalUnit: 'aufregen', why: 'sich aufregen über + Akkusativ = to get worked up about (this chapter).', ex: 'Du regst dich über die Giraffe auf.', exEn: 'You get worked up about the giraffe.' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dich', role: 'r-akkusativ', en: 'yourself', hi: 'ख़ुद को', pron: 'dikh', type: 'Reflexive pronoun' },
        { w: 'darüber', role: 'r-akkusativ', en: 'about it', hi: 'उसके बारे में', pron: 'da-RÜ-ber', type: 'Pronoun · adverbial' },
        { w: 'auf', role: 'r-verb', en: '(prefix of aufregen)', hi: '', pron: 'owf', type: 'Separable prefix · Satzende', lexicalUnit: 'aufregen' },
        { w: '?', plain: true }
      ], en: 'Why do you get worked up about it?', hi: 'Tum uske baare mein kyun uttejit ho jaati ho?' },
      { speaker: 'Doreen', tokens: [
        { w: 'Weil', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'vyle', type: 'Conjunction · weil' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Giraffe', role: 'r-subject', en: 'giraffe', hi: 'जिराफ़', pron: 'zhi-RA-fuh', type: 'Noun · fem.' },
        { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'ows', type: 'Preposition' },
        { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Gehege', role: 'r-dativ', en: 'enclosure (dat.)', hi: 'बाड़े से', pron: 'ge-HAY-guh', type: 'Noun · neut. dat.', why: 'das Gehege (this chapter).', ex: 'aus dem Gehege' },
        { w: 'ausgebrochen', role: 'r-verb', en: 'escaped', hi: 'भाग गया', pron: 'OWS-ge-bro-khen', type: 'Partizip II' },
        { w: 'ist', role: 'r-verb', en: 'has', hi: 'है', pron: 'ist', type: 'Verb · sein (helper, Satzende)' },
        { w: '.', plain: true }
      ], en: 'Because the giraffe has escaped from the enclosure.', hi: 'Kyunki jiraaf baade se bhaag gaya hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hoffe', role: 'r-verb', en: 'hope', hi: 'आशा करता हूँ', pron: 'HO-fuh', type: 'Verb · hoffen (ich)' },
        { w: 'auf', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'owf', type: 'Preposition · fixed with hoffen', why: 'hoffen auf + Akkusativ = to hope for (this chapter).', ex: 'Ich hoffe auf eine gute Nachricht.', exEn: 'I hope for good news.' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'schnelle', role: 'r-akkusativ', en: 'quick', hi: 'जल्दी', pron: 'SHNE-luh', type: 'Adjective' },
        { w: 'Rückkehr', role: 'r-akkusativ', en: 'return', hi: 'वापसी', pron: 'RÜK-kair', type: 'Noun · fem.', why: 'die Rückkehr (this chapter).', ex: 'eine schnelle Rückkehr' },
        { w: '.', plain: true }
      ], en: 'I hope for a quick return.', hi: 'Mujhe jaldi wapasi ki aasha hai.' },
      { speaker: 'Doreen', tokens: [
        { w: 'Kümmert', role: 'r-verb', en: 'does it worry', hi: 'चिंता करता है', pron: 'KÜ-mert', type: 'Verb · sich kümmern', why: 'sich kümmern um + Akkusativ = to care about/take care of (this chapter).', ex: 'Kümmert sich der Zoo um das Problem?', exEn: 'Does the zoo take care of the problem?' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद को', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Zoo', role: 'r-subject', en: 'zoo', hi: 'चिड़ियाघर', pron: 'tsoh', type: 'Noun · masc.' },
        { w: 'um', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'um', type: 'Preposition · fixed with kümmern' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Problem', role: 'r-akkusativ', en: 'problem', hi: 'समस्या', pron: 'pro-BLAYM', type: 'Noun · neut.' },
        { w: '?', plain: true }
      ], en: 'Does the zoo take care of the problem?', hi: 'Kya chidiyaaghar samasya ka khyaal rakhta hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'sie', role: 'r-subject', en: 'they', hi: 'वे', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'bemühen', role: 'r-verb', en: 'make an effort', hi: 'कोशिश करते हैं', pron: 'be-MÜ-en', type: 'Verb · sich bemühen', why: 'sich bemühen um + Akkusativ = to make an effort for (this chapter).', ex: 'Sie bemühen sich um die Suche.', exEn: 'They make an effort for the search.' },
        { w: 'sich', role: 'r-akkusativ', en: 'themselves', hi: 'ख़ुद को', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'um', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'um', type: 'Preposition · fixed with bemühen' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Suche', role: 'r-akkusativ', en: 'search', hi: 'खोज', pron: 'ZOO-khuh', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Yes, they make a big effort for the search.', hi: 'Haan, woh khoj ke liye bahut koshish karte hain.' },
      { speaker: 'Doreen', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'vertraue', role: 'r-verb', en: 'trust', hi: 'भरोसा करती हूँ', pron: 'fer-TROW-uh', type: 'Verb · vertrauen (ich)' },
        { w: 'auf', role: 'r-preposition', en: 'in', hi: 'पर', pron: 'owf', type: 'Preposition · fixed with vertrauen', why: 'vertrauen auf + Akkusativ = to trust in (this chapter).', ex: 'Ich vertraue auf ihre Erfahrung.', exEn: 'I trust in their experience.' },
        { w: 'ihre', role: 'r-akkusativ', en: 'their (fem.)', hi: 'उनके', pron: 'EE-ruh', type: 'Possessive · acc.' },
        { w: 'Erfahrung', role: 'r-akkusativ', en: 'experience', hi: 'अनुभव', pron: 'er-FAH-rung', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'I trust in their experience.', hi: 'Mujhe unke anubhav par bharosa hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Many German verbs come with a FIXED preposition that never changes: <span class="de r-verb-prep">warten AUF</span>, <span class="de r-verb-prep">sich interessieren FÜR</span>, <span class="de r-verb-prep">teilnehmen AN</span>. Learn the verb, its preposition, and its case together as ONE vocabulary item — never the verb alone.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is VERBEN MIT PRÄPOSITIONEN (B2 level): high-frequency German verbs that require a fixed preposition and case, taught as one unit (verb + preposition + case). Examples: warten auf +Akk., sich interessieren für +Akk., teilnehmen an +Dat., sich bewerben um +Akk. (position) / bei +Dat. (company), sich vorbereiten auf +Akk., sich konzentrieren auf +Akk., sich kümmern um +Akk., sich erinnern an +Akk., denken an +Akk., sprechen/diskutieren über +Akk., sich entscheiden für +Akk., gehören zu +Dat., abhängen von +Dat., bestehen aus +Dat., sich entschuldigen für +Akk., danken für +Akk., bitten um +Akk., träumen von +Dat. Question words match the preposition (Worauf? Woran? Wofür? Womit? Worüber? Wovon?), and Pronominaladverbien (darauf, daran, dafür, davon) replace "preposition + thing". ' +
    'Do NOT expect or require Nomen mit Präpositionen or Adjektive mit Präpositionen — those are separate, later chapters; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that each verb from the taught list uses its correct fixed preposition (not a different, seemingly logical one).\n' +
    '- Check that the case after the preposition matches what that specific verb requires (most are Akkusativ; teilnehmen an, abhängen von, gehören zu, träumen von, bestehen aus are Dativ).\n' +
    '- Check that Pronominaladverbien (darauf, daran, dafür, etc.) are used correctly to replace "preposition + inanimate thing", not "preposition + person" (which normally uses da + preposition only for things, and a normal pronoun for people).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Preposition check:</b> one sentence on whether the learner correctly paired each verb with its fixed preposition and case.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly pair every verb with its one fixed preposition and case. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the Master Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: never learn a verb alone. Always learn verb + preposition + case together.'
  },

  parserSentence: [
    { w: 'Ich', role: 'plain' }, { w: 'interessiere', role: 'r-verb-prep' }, { w: 'mich', role: 'plain' },
    { w: 'für', role: 'r-verb-prep' }, { w: 'die', role: 'plain' }, { w: 'Stelle', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: learn verb + preposition + case together as one vocabulary unit.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Doreen and Timo discuss a job application and a stolen painting using verb-preposition pairs.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 51 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the 20 core B2 verb-preposition combinations, their cases, and matching question words.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a job application process and a university project full of verb-preposition combinations.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the verb, its preposition, required case, and correct question word.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Discuss job interviews and projects using B2 verb-preposition combinations naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write formal emails and applications using natural verb-preposition combinations.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill preposition choice, Akkusativ-or-Dativ, Pronominaladverbien, and question words.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 520 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 51 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Preposition-choice drills, case selection, Pronominaladverb building, and a job-application task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete Master Table (20 verbs), the question-word table, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich interessiere mich für Sprachen.', text: 'Use sich interessieren für + Akkusativ naturally' },
    { de: 'Rohan nimmt an einem Seminar teil.', text: 'Use teilnehmen an + Dativ correctly' },
    { de: 'Worauf wartest du? Ich warte darauf.', text: 'Match question words and Pronominaladverbien to each verb' },
    { de: 'Akkusativ: warten auf, denken an, sprechen über... Dativ: teilnehmen an, gehören zu, abhängen von...', text: 'Sort the 20 core verbs by required case' },
    { de: 'warten auf + Akkusativ — immer als Einheit lernen', text: 'Adopt the verb+preposition+case vocabulary strategy' }
  ],

  // ---------- Vocabulary (51 items — uploaded chapter-40 list) ----------
  vocab: [
    { de: 'Genuss', art: 'der', gender: 'm', plural: 'Genüsse', pos: 'noun', level: 'B2', register: 'both', en: 'enjoyment, treat', hi: 'आनंद', ex: 'Der Kuchen war ein wahrer Genuss.', exEn: 'The cake was a real treat.', exHi: 'Cake ek sacha aanand tha.', ex2: 'Sie haben den Genuss geteilt.', ex2En: 'They\'ve shared the enjoyment.', ex2Hi: 'Unhone aanand baanta hai.' },
    { de: 'gepflegt', pos: 'adjective', level: 'B2', register: 'both', en: 'well-groomed, cultivated', hi: 'सुसज्जित', ex: 'Der Garten war gepflegt.', exEn: 'The garden was well-groomed.', exHi: 'Bagicha susajjit tha.', ex2: 'Sie haben ein gepflegtes Erscheinungsbild.', ex2En: 'They\'ve got a well-groomed appearance.', ex2Hi: 'Unka roop susajjit hai.' },
    { de: 'Gericht', art: 'das', gender: 'n', plural: 'Gerichte', pos: 'noun', level: 'B2', register: 'both', en: 'dish, court', hi: 'व्यंजन, अदालत', ex: 'Das Gericht schmeckte köstlich.', exEn: 'The dish tasted delicious.', exHi: 'Vyanjan bahut swaadisht tha.', ex2: 'Sie mussten vor Gericht erscheinen.', ex2En: 'They had to appear in court.', ex2Hi: 'Unhein adaalat mein pesh hona pada.' },
    { de: 'Geruch', art: 'der', gender: 'm', plural: 'Gerüche', pos: 'noun', level: 'B2', register: 'both', en: 'smell, odour', hi: 'गंध', ex: 'Der Geruch von Kaffee füllte den Raum.', exEn: 'The smell of coffee filled the room.', exHi: 'Coffee ki khushbu ne kamre ko bhar diya.', ex2: 'Sie haben einen seltsamen Geruch bemerkt.', ex2En: 'They\'ve noticed a strange smell.', ex2Hi: 'Unhone ek ajeeb gandh mehsoos ki hai.' },
    { de: 'Giraffe', art: 'die', gender: 'f', plural: 'Giraffen', pos: 'noun', level: 'B2', register: 'both', en: 'giraffe', hi: 'जिराफ़', ex: 'Die Giraffe fraß Blätter von hohen Bäumen.', exEn: 'The giraffe ate leaves from tall trees.', exHi: 'Giraffe ne ooche pedon se patte khaaye.', ex2: 'Sie haben eine Giraffe im Zoo gesehen.', ex2En: 'They\'ve seen a giraffe at the zoo.', ex2Hi: 'Unhone zoo mein ek giraffe dekha hai.' },
    { de: 'Gitter', art: 'das', gender: 'n', plural: 'Gitter', pos: 'noun', level: 'B2', register: 'both', en: 'grid, bars', hi: 'सलाखें', ex: 'Das Gitter versperrte den Weg.', exEn: 'The grid blocked the way.', exHi: 'Salaakhon ne raasta rok diya.', ex2: 'Sie haben das Gitter entfernt.', ex2En: 'They\'ve removed the bars.', ex2Hi: 'Unhone salaakhein hataayi hain.' },
    { de: 'Glaseinsatz', art: 'der', gender: 'm', plural: 'Glaseinsätze', pos: 'noun', level: 'B2', register: 'written', en: 'glass insert', hi: 'कांच का इनसर्ट', ex: 'Der Glaseinsatz war zerbrochen.', exEn: 'The glass insert was broken.', exHi: 'Kaanch ka insert toota hua tha.', ex2: 'Sie haben einen neuen Glaseinsatz bestellt.', ex2En: 'They\'ve ordered a new glass insert.', ex2Hi: 'Unhone ek naya kaanch insert order kiya hai.' },
    { de: 'Glashaus', art: 'das', gender: 'n', plural: 'Glashäuser', pos: 'noun', level: 'B2', register: 'both', en: 'glasshouse, greenhouse', hi: 'कांच का घर', ex: 'Das Glashaus schützte die Pflanzen.', exEn: 'The greenhouse protected the plants.', exHi: 'Greenhouse ne paudhon ki raksha ki.', ex2: 'Sie haben ein Glashaus gebaut.', ex2En: 'They\'ve built a greenhouse.', ex2Hi: 'Unhone ek greenhouse banaaya hai.' },
    { de: 'glaubhaft', pos: 'adjective', level: 'B2', register: 'both', en: 'credible, believable', hi: 'विश्वसनीय', ex: 'Seine Aussage war glaubhaft.', exEn: 'His statement was credible.', exHi: 'Uska bayaan vishvasaneey tha.', ex2: 'Sie haben eine glaubhafte Erklärung gegeben.', ex2En: 'They\'ve given a credible explanation.', ex2Hi: 'Unhone ek vishvasaneey spashteekaran diya hai.' },
    { de: 'Goldbarren', art: 'der', gender: 'm', plural: 'Goldbarren', pos: 'noun', level: 'B2', register: 'both', en: 'gold bar', hi: 'सोने की सिल्ली', ex: 'Wovon träumt der Dieb? Von einem Goldbarren?', exEn: 'What does the thief dream of? A gold bar?', exHi: 'Chor kis cheez ka sapna dekhta hai? Sone ki silli ka?', ex2: 'Sie haben den Goldbarren gestohlen.', ex2En: 'They\'ve stolen the gold bar.', ex2Hi: 'Unhone sone ki silli chura li hai.' },
    { de: 'Groll', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'resentment, grudge', hi: 'द्वेष', ex: 'Sie hegte Groll gegen ihn.', exEn: 'She held a grudge against him.', exHi: 'Uske prati usmein dwesh tha.', ex2: 'Er hat seinen Groll überwunden.', ex2En: 'He\'s overcome his resentment.', ex2Hi: 'Usne apna dwesh par kaabu paa liya hai.' },
    { de: 'gütig', pos: 'adjective', level: 'B2', register: 'written', en: 'kind, benevolent', hi: 'दयालु', ex: 'Sie war eine gütige Frau.', exEn: 'She was a kind woman.', exHi: 'Woh ek dayaalu mahila thi.', ex2: 'Er hat gütig reagiert.', ex2En: 'He\'s reacted with kindness.', ex2Hi: 'Usne dayaa se pratikriya di hai.' },
    { de: 'Handfläche', art: 'die', gender: 'f', plural: 'Handflächen', pos: 'noun', level: 'B2', register: 'both', en: 'palm of the hand', hi: 'हथेली', ex: 'Sie hielt die Münze in ihrer Handfläche.', exEn: 'She held the coin in her palm.', exHi: 'Usne sikka apni hatheli mein pakda.', ex2: 'Er hat sich die Handfläche verletzt.', ex2En: 'He\'s injured his palm.', ex2Hi: 'Usne apni hatheli ghaayal ki hai.' },
    { de: 'heiter', pos: 'adjective', level: 'B2', register: 'both', en: 'cheerful, serene', hi: 'प्रसन्न', ex: 'Der Himmel war heiter.', exEn: 'The sky was serene.', exHi: 'Aakaash prasann tha.', ex2: 'Sie haben heiter gelacht.', ex2En: 'They\'ve laughed cheerfully.', ex2Hi: 'Woh khushi se hanse hain.' },
    { de: 'Herz', art: 'das', gender: 'n', plural: 'Herzen', pos: 'noun', level: 'B2', register: 'both', en: 'heart', hi: 'दिल', ex: 'Ihr Herz schlug schnell.', exEn: 'Her heart beat fast.', exHi: 'Uska dil tezi se dhadak raha tha.', ex2: 'Sie haben mit ganzem Herzen gearbeitet.', ex2En: 'They\'ve worked with their whole heart.', ex2Hi: 'Unhone poore dil se kaam kiya hai.' },
    { de: 'hinaustragen', pos: 'verb', level: 'B2', register: 'both', en: 'to carry out', hi: 'बाहर ले जाना', ex: 'Sie trug den Karton hinaus.', exEn: 'She carried the box out.', exHi: 'Usne baksa baahar le jaaya.', ex2: 'Er hat die Möbel hinausgetragen.', ex2En: 'He\'s carried out the furniture.', ex2Hi: 'Usne furniture baahar le jaaya hai.', conj: { praesens: 'trägt hinaus', praeteritum: 'trug hinaus', perfekt: 'hat hinausgetragen' } },
    { de: 'Hinweis', art: 'der', gender: 'm', plural: 'Hinweise', pos: 'noun', level: 'B2', register: 'both', en: 'hint, note, clue', hi: 'संकेत', ex: 'Der Hinweis half der Polizei.', exEn: 'The clue helped the police.', exHi: 'Sanket ne police ki madad ki.', ex2: 'Sie haben einen wichtigen Hinweis gegeben.', ex2En: 'They\'ve given an important hint.', ex2Hi: 'Unhone ek mahatvapurn sanket diya hai.' },
    { de: 'Hofzeremoniell', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'court ceremony', hi: 'दरबारी समारोह', ex: 'Das Hofzeremoniell war streng geregelt.', exEn: 'The court ceremony was strictly regulated.', exHi: 'Darbaari samaaroh sakhti se niyantrit tha.', ex2: 'Sie haben das Hofzeremoniell studiert.', ex2En: 'They\'ve studied the court ceremony.', ex2Hi: 'Unhone darbaari samaaroh ka adhyayan kiya hai.' },
    { de: 'Holztür', art: 'die', gender: 'f', plural: 'Holztüren', pos: 'noun', level: 'B2', register: 'both', en: 'wooden door', hi: 'लकड़ी का दरवाज़ा', ex: 'Die Holztür knarrte laut.', exEn: 'The wooden door creaked loudly.', exHi: 'Lakdi ka darwaaza zor se charmaraaya.', ex2: 'Sie haben die Holztür repariert.', ex2En: 'They\'ve repaired the wooden door.', ex2Hi: 'Unhone lakdi ka darwaaza theek kiya hai.' },
    { de: 'Hundehütte', art: 'die', gender: 'f', plural: 'Hundehütten', pos: 'noun', level: 'B2', register: 'both', en: 'dog kennel', hi: 'कुत्ते का घर', ex: 'Der Hund schlief in seiner Hundehütte.', exEn: 'The dog slept in its kennel.', exHi: 'Kutta apne ghar mein soya.', ex2: 'Sie haben eine neue Hundehütte gebaut.', ex2En: 'They\'ve built a new dog kennel.', ex2Hi: 'Unhone ek naya kutte ka ghar banaaya hai.' },
    { de: 'Idiot/in', art: 'der/die', gender: 'm/f', plural: 'Idioten/innen', pos: 'noun', level: 'B2', register: 'spoken', en: 'idiot', hi: 'मूर्ख', ex: 'Er benahm sich wie ein Idiot.', exEn: 'He behaved like an idiot.', exHi: 'Woh moorkh jaisa vyavahaar kar raha tha.', ex2: 'Sie haben ihn keinen Idioten genannt.', ex2En: 'They haven\'t called him an idiot.', ex2Hi: 'Unhone use moorkh nahi kaha hai.' },
    { de: 'imposant', pos: 'adjective', level: 'B2', register: 'written', en: 'impressive, imposing', hi: 'प्रभावशाली', ex: 'Das Gebäude war imposant.', exEn: 'The building was imposing.', exHi: 'Imaarat prabhaavshaali thi.', ex2: 'Sie haben eine imposante Rede gehalten.', ex2En: 'They\'ve given an imposing speech.', ex2Hi: 'Unhone ek prabhaavshaali bhaashan diya hai.' },
    { de: 'Informant/in', art: 'der/die', gender: 'm/f', plural: 'Informanten/innen', pos: 'noun', level: 'B2', register: 'written', en: 'informant', hi: 'मुखबिर', ex: 'Ein Informant gehört zu der Bande.', exEn: 'An informant belongs to the gang.', exHi: 'Ek mukhbir gang se sambandhit hai.', ex2: 'Die Polizei hatte einen Informanten.', ex2En: 'The police had an informant.', ex2Hi: 'Police ke paas ek mukhbir tha.' },
    { de: 'Kaiser/in', art: 'der/die', gender: 'm/f', plural: 'Kaiser/innen', pos: 'noun', level: 'B2', register: 'written', en: 'emperor, empress', hi: 'सम्राट', ex: 'Der Kaiser regierte streng.', exEn: 'The emperor ruled strictly.', exHi: 'Samraat ne sakhti se shaasan kiya.', ex2: 'Sie war eine mächtige Kaiserin.', ex2En: 'She was a powerful empress.', ex2Hi: 'Woh ek shaktishaali samragyi thi.' },
    { de: 'kaiserlich', pos: 'adjective', level: 'B2', register: 'written', en: 'imperial', hi: 'शाही', ex: 'Der kaiserliche Palast war beeindruckend.', exEn: 'The imperial palace was impressive.', exHi: 'Shaahi mahal prabhaavshaali tha.', ex2: 'Sie haben kaiserliche Kunst bewundert.', ex2En: 'They\'ve admired imperial art.', ex2Hi: 'Unhone shaahi kala ki sarahna ki hai.' },
    { de: 'katapultieren', pos: 'verb', level: 'B2', register: 'both', en: 'to catapult', hi: 'उछाल देना', ex: 'Der Erfolg katapultierte sie an die Spitze.', exEn: 'Success catapulted her to the top.', exHi: 'Safalta ne use shikhar par pahunchaaya.', ex2: 'Sie ist ins Rampenlicht katapultiert worden.', ex2En: 'She\'s been catapulted into the spotlight.', ex2Hi: 'Use spotlight mein laaya gaya hai.', conj: { praesens: 'katapultiert', praeteritum: 'katapultierte', perfekt: 'hat katapultiert' } },
    { de: 'Kiefer', art: 'der/die', gender: 'm/f', plural: 'Kiefer', pos: 'noun', level: 'B2', register: 'both', en: 'jaw / pine tree', hi: 'जबड़ा / चीड़ का पेड़', ex: 'Sein Kiefer war angespannt.', exEn: 'His jaw was tense.', exHi: 'Uska jabda tanaav mein tha.', ex2: 'Die Kiefer wuchsen im Wald.', ex2En: 'The pine trees grew in the forest.', ex2Hi: 'Chid ke ped jangal mein ug rahe the.' },
    { de: 'Klammer', art: 'die', gender: 'f', plural: 'Klammern', pos: 'noun', level: 'B2', register: 'both', en: 'bracket, clamp', hi: 'क्लैंप', ex: 'Die Klammer hielt das Papier fest.', exEn: 'The clamp held the paper firmly.', exHi: 'Clamp ne kaagaz ko mazbooti se pakda.', ex2: 'Sie haben eine neue Klammer gekauft.', ex2En: 'They\'ve bought a new clamp.', ex2Hi: 'Unhone ek naya clamp khareeda hai.' },
    { de: 'Klang', art: 'der', gender: 'm', plural: 'Klänge', pos: 'noun', level: 'B2', register: 'both', en: 'sound, tone', hi: 'ध्वनि', ex: 'Der Klang der Glocke war schön.', exEn: 'The sound of the bell was beautiful.', exHi: 'Ghanti ki dhwani sundar thi.', ex2: 'Sie haben den Klang aufgenommen.', ex2En: 'They\'ve recorded the sound.', ex2Hi: 'Unhone dhwani record ki hai.' },
    { de: 'Klimazone', art: 'die', gender: 'f', plural: 'Klimazonen', pos: 'noun', level: 'B2', register: 'written', en: 'climate zone', hi: 'जलवायु क्षेत्र', ex: 'Diese Klimazone war sehr feucht.', exEn: 'This climate zone was very humid.', exHi: 'Yeh jalvaayu kshetra bahut namee waala tha.', ex2: 'Sie haben verschiedene Klimazonen untersucht.', ex2En: 'They\'ve studied different climate zones.', ex2Hi: 'Unhone vibhinn jalvaayu kshetron ka adhyayan kiya hai.' },
    { de: 'klischeehaft', pos: 'adjective', level: 'B2', register: 'written', en: 'cliché-ridden, stereotypical', hi: 'रूढ़िवादी', ex: 'Die Handlung war klischeehaft.', exEn: 'The plot was cliché-ridden.', exHi: 'Kathaanak roodhivaadi thi.', ex2: 'Sie haben klischeehafte Bilder vermieden.', ex2En: 'They\'ve avoided stereotypical images.', ex2Hi: 'Unhone roodhivaadi tasveeron se bacha hai.' },
    { de: 'Kommissar/in', art: 'der/die', gender: 'm/f', plural: 'Kommissare/innen', pos: 'noun', level: 'B2', register: 'both', en: 'inspector, commissioner', hi: 'निरीक्षक', ex: 'Der Kommissar spricht über ein Lösegeld.', exEn: 'The inspector is speaking about a ransom.', exHi: 'Nirikshak firauti ke baare mein baat kar raha hai.', ex2: 'Sie ist eine erfahrene Kommissarin.', ex2En: 'She\'s an experienced inspector.', ex2Hi: 'Woh ek anubhavi nirikshak hai.' },
    { de: 'Kulturdenkmal', art: 'das', gender: 'n', plural: 'Kulturdenkmäler', pos: 'noun', level: 'B2', register: 'written', en: 'cultural monument', hi: 'सांस्कृतिक स्मारक', ex: 'Sie diskutieren über das Kulturdenkmal.', exEn: 'They\'re discussing the cultural monument.', exHi: 'Woh saanskritik smaarak ke baare mein charcha kar rahe hain.', ex2: 'Das Kulturdenkmal wurde restauriert.', ex2En: 'The cultural monument was restored.', ex2Hi: 'Saanskritik smaarak ka jeernodhaar kiya gaya.' },
    { de: 'Kunstraub', art: 'der', gender: 'm', plural: 'Kunstraube', pos: 'noun', level: 'B2', register: 'written', en: 'art theft', hi: 'चित्रकारी की चोरी', ex: 'Hast du von dem Kunstraub gehört?', exEn: 'Have you heard about the art theft?', exHi: 'Kya tumne chitrakaari ki chori ke baare mein suna?', ex2: 'Der Kunstraub schockierte alle.', ex2En: 'The art theft shocked everyone.', ex2Hi: 'Chitrakaari ki chori ne sabko chaunkaaya.' },
    { de: 'lebendig', pos: 'adjective', level: 'B2', register: 'both', en: 'lively, alive', hi: 'जीवंत', ex: 'Die Diskussion war lebendig.', exEn: 'The discussion was lively.', exHi: 'Charcha jeevant thi.', ex2: 'Sie haben eine lebendige Präsentation gehalten.', ex2En: 'They\'ve given a lively presentation.', ex2Hi: 'Unhone ek jeevant prastuti di hai.' },
    { de: 'Lebensraum', art: 'der', gender: 'm', plural: 'Lebensräume', pos: 'noun', level: 'B2', register: 'both', en: 'habitat, living space', hi: 'निवास स्थान', ex: 'Der Lebensraum der Tiere schrumpfte.', exEn: 'The animals\' habitat shrank.', exHi: 'Jaanwaron ka niwaas sthaan sikad gaya.', ex2: 'Sie haben den Lebensraum geschützt.', ex2En: 'They\'ve protected the habitat.', ex2Hi: 'Unhone niwaas sthaan ki raksha ki hai.' },
    { de: 'Lektüre', art: 'die', gender: 'f', plural: 'Lektüren', pos: 'noun', level: 'B2', register: 'written', en: 'reading, reading matter', hi: 'पठन सामग्री', ex: 'Die Lektüre war anspruchsvoll.', exEn: 'The reading matter was demanding.', exHi: 'Pathan saamagri maang waali thi.', ex2: 'Sie haben eine interessante Lektüre gefunden.', ex2En: 'They\'ve found interesting reading matter.', ex2Hi: 'Unhein ek dilchasp pathan saamagri mili hai.' },
    { de: 'lesefreundlich', pos: 'adjective', level: 'B2', register: 'written', en: 'reader-friendly', hi: 'पाठक-अनुकूल', ex: 'Das Layout war lesefreundlich.', exEn: 'The layout was reader-friendly.', exHi: 'Layout pathak-anukool tha.', ex2: 'Sie haben einen lesefreundlichen Stil gewählt.', ex2En: 'They\'ve chosen a reader-friendly style.', ex2Hi: 'Unhone ek pathak-anukool shaili chuni hai.' },
    { de: 'liebevoll', pos: 'adjective', level: 'B2', register: 'both', en: 'loving, affectionate', hi: 'स्नेहमय', ex: 'Sie war eine liebevolle Mutter.', exEn: 'She was a loving mother.', exHi: 'Woh ek snehamay maa thi.', ex2: 'Er hat sie liebevoll umarmt.', ex2En: 'He\'s embraced her lovingly.', ex2Hi: 'Usne use pyaar se gale lagaaya hai.' },
    { de: 'Lösegeld', art: 'das', gender: 'n', plural: 'Lösegelder', pos: 'noun', level: 'B2', register: 'both', en: 'ransom', hi: 'फिरौती', ex: 'Der Kommissar spricht über ein Lösegeld.', exEn: 'The inspector is speaking about a ransom.', exHi: 'Nirikshak firauti ke baare mein baat kar raha hai.', ex2: 'Sie haben das Lösegeld bezahlt.', ex2En: 'They\'ve paid the ransom.', ex2Hi: 'Unhone firauti chukaayi hai.' },
    { de: 'Mandant/in', art: 'der/die', gender: 'm/f', plural: 'Mandanten/innen', pos: 'noun', level: 'B2', register: 'written', en: 'client', hi: 'मुवक्किल', ex: 'Der Mandant bittet um Diskretion.', exEn: 'The client asks for discretion.', exHi: 'Muvakkil gopaneeyata ka nivedan karta hai.', ex2: 'Der Anwalt sprach mit seiner Mandantin.', ex2En: 'The lawyer spoke with his client.', ex2Hi: 'Vakeel ne apni muvakkil se baat ki.' },
    { de: 'manikürt', pos: 'adjective', level: 'B2', register: 'written', en: 'manicured', hi: 'तराशा हुआ', ex: 'Ihre Hände waren manikürt.', exEn: 'Her hands were manicured.', exHi: 'Uske haath tarashe hue the.', ex2: 'Er hat manikürte Nägel gehabt.', ex2En: 'He\'s had manicured nails.', ex2Hi: 'Uske naakhun tarashe hue the.' },
    { de: 'Mauerritze', art: 'die', gender: 'f', plural: 'Mauerritzen', pos: 'noun', level: 'B2', register: 'written', en: 'crack in the wall', hi: 'दीवार में दरार', ex: 'Eine Mauerritze zeigte das Alter des Hauses.', exEn: 'A crack in the wall showed the house\'s age.', exHi: 'Deewaar mein daraar ne ghar ki umar dikhaayi.', ex2: 'Sie haben die Mauerritze repariert.', ex2En: 'They\'ve repaired the crack in the wall.', ex2Hi: 'Unhone deewaar ki daraar theek ki hai.' },
    { de: 'Melancholie', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'melancholy', hi: 'उदासी', ex: 'Eine leise Melancholie lag über der Stadt.', exEn: 'A quiet melancholy lay over the city.', exHi: 'Shahar par ek shaant udaasi chhaayi thi.', ex2: 'Sie haben ihre Melancholie überwunden.', ex2En: 'They\'ve overcome their melancholy.', ex2Hi: 'Unhone apni udaasi par kaabu paa liya hai.' },
    { de: 'Musikkonzert', art: 'das', gender: 'n', plural: 'Musikkonzerte', pos: 'noun', level: 'B2', register: 'both', en: 'music concert', hi: 'संगीत कार्यक्रम', ex: 'Das Musikkonzert war ausverkauft.', exEn: 'The music concert was sold out.', exHi: 'Sangeet karyakram bik chuka tha.', ex2: 'Sie haben ein Musikkonzert besucht.', ex2En: 'They\'ve attended a music concert.', ex2Hi: 'Unhone ek sangeet karyakram mein hissa liya hai.' },
    { de: 'Nerv', art: 'der', gender: 'm', plural: 'Nerven', pos: 'noun', level: 'B2', register: 'both', en: 'nerve', hi: 'तंत्रिका', ex: 'Ihre Nerven waren angespannt.', exEn: 'Her nerves were tense.', exHi: 'Uski naadiyaan tanaav mein thi.', ex2: 'Er hat starke Nerven bewiesen.', ex2En: 'He\'s shown strong nerves.', ex2Hi: 'Usne mazboot himmat dikhaayi hai.' },
    { de: 'Notizblock', art: 'der', gender: 'm', plural: 'Notizblöcke', pos: 'noun', level: 'B2', register: 'both', en: 'notepad', hi: 'नोटपैड', ex: 'Der Detektiv nahm seinen Notizblock heraus.', exEn: 'The detective took out his notepad.', exHi: 'Jaasoos ne apna notepad nikaala.', ex2: 'Sie haben Notizen auf dem Notizblock gemacht.', ex2En: 'They\'ve taken notes on the notepad.', ex2Hi: 'Unhone notepad par notes banaaye hain.' },
    { de: 'Palmenhaus', art: 'das', gender: 'n', plural: 'Palmenhäuser', pos: 'noun', level: 'B2', register: 'written', en: 'palm house', hi: 'ताड़ घर', ex: 'Das Palmenhaus beherbergte exotische Pflanzen.', exEn: 'The palm house housed exotic plants.', exHi: 'Taad ghar mein videshee paudhe the.', ex2: 'Sie haben das Palmenhaus besucht.', ex2En: 'They\'ve visited the palm house.', ex2Hi: 'Unhone taad ghar ka daura kiya hai.' },
    { de: 'Partie', art: 'die', gender: 'f', plural: 'Partien', pos: 'noun', level: 'B2', register: 'both', en: 'game, match, part', hi: 'खेल, हिस्सा', ex: 'Sie spielten eine Partie Schach.', exEn: 'They played a game of chess.', exHi: 'Unhone shatranj ka ek khel khela.', ex2: 'Er hat eine wichtige Partie gewonnen.', ex2En: 'He\'s won an important match.', ex2Hi: 'Usne ek mahatvapurn khel jeeta hai.' },
    { de: 'Pfeife', art: 'die', gender: 'f', plural: 'Pfeifen', pos: 'noun', level: 'B2', register: 'both', en: 'whistle, pipe', hi: 'सीटी, पाइप', ex: 'Der Schiedsrichter blies in die Pfeife.', exEn: 'The referee blew the whistle.', exHi: 'Referee ne seetee bajaayi.', ex2: 'Sie haben eine alte Pfeife gefunden.', ex2En: 'They\'ve found an old pipe.', ex2Hi: 'Unhein ek puraana pipe mila hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was sind Verben mit Präpositionen?',
      body: [ 'Some German verbs ALWAYS require a fixed preposition. Without it, the sentence is incomplete.' ],
      table: {
        head: ['Incomplete', 'Correct'],
        rows: [
          ['<span class="de">Ich warte.</span>', '<span class="de">Ich warte auf den Bus.</span>']
        ]
      },
      hinglish: 'Kuch German verbs apne saath ek fixed preposition maangte hain, aur uske bina sentence adhoora rehta hai. English dekh kar guess karna kaam nahi karta \u2014 German apni hi preposition leta hai.'
    },
    {
      title: 'Master Table — die wichtigsten B2-Verben',
      body: [ 'Memorize each verb together with its fixed preposition and case.' ],
      table: {
        head: ['Verb', 'Preposition', 'Case'],
        rows: [
          ['sich interessieren', 'für', 'Akk.'],
          ['teilnehmen', 'an', 'Dat.'],
          ['sich bewerben', 'um / bei', 'Akk. / Dat.'],
          ['sich vorbereiten', 'auf', 'Akk.'],
          ['sich konzentrieren', 'auf', 'Akk.'],
          ['sich kümmern', 'um', 'Akk.'],
          ['sich erinnern', 'an', 'Akk.'],
          ['warten', 'auf', 'Akk.'],
          ['denken', 'an', 'Akk.'],
          ['sprechen / diskutieren', 'über', 'Akk.'],
          ['sich entscheiden', 'für', 'Akk.'],
          ['gehören', 'zu', 'Dat.'],
          ['abhängen', 'von', 'Dat.'],
          ['bestehen', 'aus', 'Dat.'],
          ['sich entschuldigen', 'für', 'Akk.'],
          ['danken', 'für', 'Akk.'],
          ['bitten', 'um', 'Akk.'],
          ['träumen', 'von', 'Dat.']
        ]
      },
      hinglish: 'Har verb ko uske preposition aur case ke saath ek hi unit ki tarah yaad karo. Sirf "warten" yaad karne se kaam nahi chalega \u2014 "warten auf + Akkusativ" yaad karo.'
    },
    {
      title: 'Akkusativ vs Dativ',
      body: [ 'Most of these verbs take Akkusativ; a smaller group takes Dativ — memorize the Dativ group specifically.' ],
      table: {
        head: ['Akkusativ (most common)', 'Dativ (smaller group)'],
        rows: [
          ['warten auf, denken an, sprechen über, bitten um, sich vorbereiten auf, sich kümmern um', 'teilnehmen an, abhängen von, gehören zu, träumen von, bestehen aus']
        ]
      },
      hinglish: 'Zyada-tar verbs Akkusativ lete hain, isliye Akkusativ ko default maan lo. Dativ wala group chhota hai \u2014 usi ko alag se yaad kar lo, phir baaki apne aap sahi ho jaayega.'
    },
    {
      title: 'Pronominaladverbien',
      body: [ 'Pronominaladverbien (da + preposition) replace "preposition + thing" — used for inanimate objects, not people.' ],
      table: {
        head: ['Question', 'Answer with Pronominaladverb'],
        rows: [
          ['Worauf wartest du?', 'Ich warte darauf.'],
          ['Woran denkst du?', 'Ich denke daran.'],
          ['Wofür interessierst du dich?', 'Ich interessiere mich dafür.']
        ]
      },
      hinglish: '<b>da + preposition</b> wale forms (darauf, daran, daf\u00fcr) cheezon ki jagah lete hain. Logon ke liye yeh nahi chalte \u2014 wahan preposition ke saath seedha pronoun aata hai, jaise <span class="de">auf ihn</span>.'
    },
    {
      title: 'Question Word Table',
      body: [ 'The question word always matches the verb\'s fixed preposition.' ],
      table: {
        head: ['Verb + Preposition', 'Question'],
        rows: [
          ['warten auf', 'Worauf?'],
          ['denken an', 'Woran?'],
          ['sprechen über', 'Worüber?'],
          ['sich interessieren für', 'Wofür?'],
          ['teilnehmen an', 'Woran?'],
          ['träumen von', 'Wovon?']
        ]
      },
      hinglish: 'Sawaal ka shabd verb ki preposition se banta hai \u2014 <b>auf</b> se <b>Worauf?</b>, <b>an</b> se <b>Woran?</b>. Isliye preposition pata ho to sawaal khud ban jaata hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from omitting the preposition, using a translated-from-English preposition, or the wrong case.' ],
      mistakes: [
        { wrong: 'Ich interessiere Deutsch.', right: 'Ich interessiere mich für Deutsch.', why: '"sich interessieren" always requires "für" + Akkusativ, plus the reflexive pronoun.' },
        { wrong: 'Ich warte den Bus.', right: 'Ich warte auf den Bus.', why: '"warten" always requires the preposition "auf" — it cannot take a direct object alone.' },
        { wrong: 'Anna nimmt in der Konferenz teil.', right: 'Anna nimmt an der Konferenz teil.', why: '"teilnehmen" requires "an" + Dativ, not "in".' },
        { wrong: 'Wir sprechen das Problem.', right: 'Wir sprechen über das Problem.', why: '"sprechen" (about a topic) requires "über" + Akkusativ.' },
        { wrong: 'Ich freue mich für die Ferien.', right: 'Ich freue mich auf die Ferien.', why: '"sich freuen auf" + Akkusativ means looking forward to something. ("sich freuen \u00fcber" exists too, but it means being glad about something that has already happened.)' }
      ],
      hinglish: 'Yeh galtiyan teen wajah se hoti hain \u2014 preposition chhod dena, English dekh kar preposition chun lena, ya sahi preposition ke saath galat case lagana.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'These fixed combinations appear constantly in workplace communication, university, formal emails, and Goethe B2 texts.' ],
      note: 'Memory trick: A German verb is incomplete without its fixed preposition. Learn them as ONE vocabulary item \u2014 NOT "warten", but "warten AUF". Careful with the few verbs that take two prepositions with different meanings: <b>denken an</b> = have someone in mind, <b>denken \u00fcber</b> = have an opinion about; <b>sich freuen auf</b> = look forward to, <b>sich freuen \u00fcber</b> = be glad about something past.',
      hinglish: 'Yeh combinations office ke emails, university aur Goethe B2 ke texts mein baar-baar aate hain \u2014 isliye inhe pakka karna sabse zyada faayda deta hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Kriminalbericht: Der Kommissar ermittelt weiter',
    titleEn: 'Crime report: the detective continues investigating',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Kommissar', role: 'plain', en: 'detective', hi: 'जासूस', type: 'Noun · masc.', why: 'der/die Kommissar/in (this chapter).' },
      { w: 'erinnert', role: 'r-verb', en: 'reminds (Valenz: erinnern an + Akk.)', hi: 'याद दिलाता है (Valenz: an + Akk.)', type: 'Verb · erinnern an', why: 'erinnern an + Akkusativ: a fixed preposition, part of the verb\'s valency (this chapter).' },
      { w: 'sich', role: 'plain', en: 'himself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'an', role: 'plain', en: 'to', hi: 'को', type: 'Preposition · Akk. (Verbpräposition)' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'ähnlichen', role: 'plain', en: 'similar', hi: 'समान', type: 'Adjective' },
      { w: 'Kunstraub', role: 'plain', en: 'art theft (Satzende)', hi: 'कला चोरी (Satzende)', type: 'Noun · masc.', why: 'der Kunstraub (this chapter).' },
      { w: 'vor', role: 'plain', en: 'ago', hi: 'पहले', type: 'Preposition' },
      { w: 'zehn', role: 'plain', en: 'ten', hi: 'दस', type: 'Number' },
      { w: 'Jahren', role: 'plain', en: 'years (Satzende)', hi: 'साल (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Damals', role: 'plain', en: 'back then', hi: 'उस समय', type: 'Adverb' },
      { w: 'wartete', role: 'r-verb', en: 'waited (Valenz: warten auf + Akk.)', hi: 'इंतज़ार किया (Valenz: auf + Akk.)', type: 'Verb · warten auf', why: 'warten auf + Akkusativ: another fixed verb-preposition pair (this chapter).' },
      { w: 'man', role: 'plain', en: 'one', hi: 'किसी ने', type: 'Pronoun' },
      { w: 'monatelang', role: 'plain', en: 'for months', hi: 'महीनों तक', type: 'Adverb' },
      { w: 'auf', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk. (Verbpräposition)' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'entscheidenden', role: 'plain', en: 'decisive', hi: 'निर्णायक', type: 'Adjective' },
      { w: 'Hinweis', role: 'plain', en: 'tip (Satzende)', hi: 'सुराग़ (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Diesmal', role: 'plain', en: 'this time', hi: 'इस बार', type: 'Adverb' },
      { w: 'freut', role: 'r-verb', en: 'is pleased (Valenz: sich freuen über + Akk.)', hi: 'ख़ुश है (Valenz: über + Akk.)', type: 'Verb · sich freuen über', why: 'sich freuen über + Akkusativ: another fixed preposition combination (this chapter).' },
      { w: 'sich', role: 'plain', en: 'himself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Kommissar', role: 'plain', en: 'detective', hi: 'जासूस', type: 'Noun · masc.' },
      { w: 'schon', role: 'plain', en: 'already', hi: 'पहले ही', type: 'Adverb' },
      { w: 'nach', role: 'plain', en: 'after', hi: 'बाद', type: 'Preposition · Dat.' },
      { w: 'zwei', role: 'plain', en: 'two', hi: 'दो', type: 'Number' },
      { w: 'Tagen', role: 'plain', en: 'days (Satzende)', hi: 'दिनों (Satzende)', type: 'Noun · plural' },
      { w: 'über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk. (Verbpräposition)' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'anonymen', role: 'plain', en: 'anonymous', hi: 'गुमनाम', type: 'Adjective' },
      { w: 'Tipp', role: 'plain', en: 'tip (Satzende)', hi: 'सुझाव (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'kämpft', role: 'r-verb', en: 'fights (Valenz: kämpfen für/gegen + Akk.)', hi: 'लड़ता है (Valenz: für + Akk.)', type: 'Verb · kämpfen für', why: 'kämpfen für + Akkusativ (recycled from Ch.7): the same valency principle at B2 continues here with more complex verbs.' },
      { w: 'seitdem', role: 'plain', en: 'since then', hi: 'तब से', type: 'Adverb' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk. (Verbpräposition)' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Rückgabe', role: 'plain', en: 'return (Satzende)', hi: 'वापसी (Satzende)', type: 'Noun · fem.' },
      { w: 'des', role: 'plain', en: 'of the (neut. gen.)', hi: 'की', type: 'Article · Genitiv' },
      { w: 'Gemäldes', role: 'plain', en: 'painting (Satzende)', hi: 'पेंटिंग (Satzende)', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (plural)', hi: 'यह', type: 'Article' },
      { w: 'Ermittler', role: 'plain', en: 'investigators', hi: 'जाँचकर्ता', type: 'Noun · plural' },
      { w: 'freuen', role: 'r-verb', en: 'are pleased (Verb + Präposition)', hi: 'ख़ुश हैं', type: 'Verb · sich freuen über', why: 'sich freuen über + Akk.: fixed verb + preposition (this chapter).' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'außerdem', role: 'plain', en: 'moreover', hi: 'इसके अलावा', type: 'Adverb' },
      { w: 'über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Unterstützung', role: 'plain', en: 'support', hi: 'सहायता', type: 'Noun · fem.' },
      { w: 'der', role: 'plain', en: 'of the', hi: 'की', type: 'Article · Genitiv' },
      { w: 'Öffentlichkeit', role: 'plain', en: 'public (Satzende)', hi: 'जनता (Satzende)', type: 'Noun · fem.' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'bitten', role: 'r-verb', en: 'ask (Verb + Präposition)', hi: 'अनुरोध करते हैं', type: 'Verb · bitten um', why: 'bitten um + Akk.: fixed verb + preposition (this chapter).' },
      { w: 'weiterhin', role: 'plain', en: 'still', hi: 'अब भी', type: 'Adverb' },
      { w: 'um', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'jeden', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'noch', role: 'plain', en: 'still', hi: '', type: 'Adverb' },
      { w: 'so', role: 'plain', en: 'so', hi: '', type: 'Adverb' },
      { w: 'kleinen', role: 'plain', en: 'small (Satzende)', hi: 'छोटा भी (Satzende)', type: 'Adjective' },
      { w: 'Hinweis', role: 'plain', en: 'tip (Satzende)', hi: 'सुराग़ (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Sein', role: 'plain', en: 'his', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'Kollege', role: 'plain', en: 'colleague', hi: 'सहकर्मी', type: 'Noun · masc.' },
      { w: 'glaubt', role: 'r-verb', en: 'believes (Valenz: glauben an + Akk.)', hi: 'विश्वास करता है (Valenz: an + Akk.)', type: 'Verb · glauben an', why: 'glauben an + Akkusativ: another fixed verb-preposition pair (this chapter).' },
      { w: 'fest', role: 'plain', en: 'firmly', hi: 'दृढ़ता से', type: 'Adjective' },
      { w: 'an', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Akk.' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'baldigen', role: 'plain', en: 'imminent', hi: 'शीघ्र', type: 'Adjective' },
      { w: 'Durchbruch', role: 'plain', en: 'breakthrough (Satzende)', hi: 'सफलता (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true }
    ],
    translation: 'The detective reminds himself of a similar art theft ten years ago. Back then, one waited for months for a decisive tip. This time the detective is already pleased about an anonymous tip after just two days. He has been fighting for the return of the painting ever since. The investigators are moreover pleased about the public\u2019s support, and still ask for every tip, however small. His colleague firmly believes in an imminent breakthrough.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_040_L001', speaker: 'Doreen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, hast du schon gehört? Eine Giraffe ist aus ihrem Gehege ausgebrochen!', en: 'Timo, have you heard? A giraffe has escaped its enclosure!' },
      { id: 'B2_040_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Was? Ich hoffe wirklich auf eine schnelle Rückkehr.', en: 'What? I really hope for a quick return.' },
      { id: 'B2_040_L003', speaker: 'Doreen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich ärgere mich total über die schlechte Absicherung dort.', en: 'I\'m really annoyed about the poor security there.' },
      { id: 'B2_040_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Verständlich. Der Zoo muss sich jetzt dringend um bessere Zäune kümmern.', en: 'Understandable. The zoo urgently needs to take care of better fences now.' }
    ],
    transcript: 'Timo, hast du schon gehört? Eine Giraffe ist aus ihrem Gehege ausgebrochen! Was? Ich hoffe wirklich auf eine schnelle Rückkehr. Ich ärgere mich total über die schlechte Absicherung dort. Verständlich. Der Zoo muss sich jetzt dringend um bessere Zäune kümmern.',
    translation: 'Timo, have you heard? A giraffe has escaped its enclosure! What? I really hope for a quick return. I\'m really annoyed about the poor security there. Understandable. The zoo urgently needs to take care of better fences now.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'hast' },
      { w: 'du' },
      { w: 'schon' },
      { w: 'gehört' },
      { w: '?', plain: true },
      { w: 'Eine' },
      { w: 'Giraffe' },
      { w: 'ist' },
      { w: 'aus' },
      { w: 'ihrem' },
      { w: 'Gehege' },
      { w: 'ausgebrochen' },
      { w: '!', plain: true },
      { w: 'Was' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'hoffe' },
      { w: 'wirklich' },
      { w: 'auf' },
      { w: 'eine' },
      { w: 'schnelle' },
      { w: 'Rückkehr' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'ärgere' },
      { w: 'mich' },
      { w: 'total' },
      { w: 'über' },
      { w: 'die' },
      { w: 'schlechte' },
      { w: 'Absicherung' },
      { w: 'dort' },
      { w: '.', plain: true },
      { w: 'Verständlich' },
      { w: '.', plain: true },
      { w: 'Der' },
      { w: 'Zoo' },
      { w: 'muss' },
      { w: 'sich' },
      { w: 'jetzt' },
      { w: 'dringend' },
      { w: 'um' },
      { w: 'bessere' },
      { w: 'Zäune' },
      { w: 'kümmern' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was ist aus dem Gehege entkommen?', qEn: 'What escaped from its enclosure?', options: ['ein Löwe', 'eine Giraffe', 'ein Elefant', 'ein Affe'], optionsEn: ['a lion', 'a giraffe', 'an elephant', 'a monkey'], answer: 1,
        explain: '"Eine Giraffe ist aus ihrem Gehege ausgebrochen!"' },
      { q: 'Worüber ärgert sich Doreen?', qEn: 'What is Doreen annoyed about?', options: ['die Öffnungszeiten', 'die schlechte Absicherung', 'den Eintrittspreis', 'das Wetter'], optionsEn: ['the opening hours', 'the poor social protection', 'the entrance fee', 'the weather'], answer: 1,
        explain: '"Ich ärgere mich total über die schlechte Absicherung dort."' }
    ]
  },

  speaking: [
    { task: "Eine Giraffe ist ausgebrochen. Sag, was du hoffst.", taskEn: "A giraffe has escaped. Say what you hope.", de: "Ich hoffe wirklich auf eine schnelle Rückkehr.", en: "I really hope for a quick return." },
    { task: "Dein Freund fragt, worüber du dich ärgerst.", taskEn: "Your friend asks what you're annoyed about.", de: "Ich ärgere mich über das kaputte Gitter.", en: "I'm annoyed about the broken fence." },
    { task: "Eine Kollegin fragt, worauf ihr wartet.", taskEn: "A colleague asks what you're waiting for.", de: "Wir warten auf einen Hinweis von den Besuchern.", en: "We're waiting for a tip-off from the visitors." },
    { task: "Ein Bekannter fragt, worum du dich im Zoo kümmerst.", taskEn: "An acquaintance asks what you look after at the zoo.", de: "Ich kümmere mich um die Fütterung und um die Gehege.", en: "I take care of the feeding and the enclosures." },
    { task: "Rollenspiel: Ihr sprecht über den Vorfall im Zoo.", taskEn: "Role-play: you talk about the incident at the zoo.", de: "Ich rechne mit einer Untersuchung. — Und ich freue mich über jeden Hinweis.", en: "I'm expecting an investigation. — And I'm glad of every tip-off." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Formal email (6-8 sentences): Write a job application email using sich bewerben um/bei, sich interessieren für, and sich vorbereiten auf.\n\nTASK 2 — Project summary (6-8 sentences): Summarize a project using bestehen aus, abhängen von, teilnehmen an, and gehören zu naturally.',
    starters: ['Ich interessiere mich für …', 'Das Projekt besteht aus …'],
    placeholder: 'Ich interessiere mich für die Stelle. Ich bewerbe mich um die Position …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which preposition is fixed with "sich interessieren"?',
      options: ['für', 'an', 'über'],
      answer: 0,
      explain: '"sich interessieren" always takes "für" + Akkusativ.'
    },
    gap: {
      sentence: ['Rohan nimmt ', ' der Konferenz teil.'],
      gaps: [ { answer: 'an', accepts: ['an'] } ],
      explain: '"teilnehmen" always requires "an" + Dativ.'
    },
    match: {
      q: 'Match each verb to its fixed preposition and case.',
      pairs: [
        { noun: 'warten', art: 'auf + Akk.' },
        { noun: 'teilnehmen', art: 'an + Dat.' },
        { noun: 'abhängen', art: 'von + Dat.' },
        { noun: 'sich interessieren', art: 'für + Akk.' }
      ]
    },
    builder: {
      target: 'Build: "I\'m interested in the position." (sich interessieren für)',
      bank: ['Ich', 'interessiere', 'mich', 'für', 'die', 'Stelle', '.'],
      answer: ['Ich', 'interessiere', 'mich', 'für', 'die', 'Stelle', '.'],
      roles: { 'interessiere': 'r-verb-prep', 'für': 'r-verb-prep' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich interessiere Deutsch.',
      right: 'Ich interessiere mich für Deutsch.',
      explain: '"sich interessieren" always requires "für" + Akkusativ, plus the reflexive pronoun "mich".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What must always accompany a verb like "warten" or "denken"?', options: ['A fixed preposition', 'A modal verb', 'The Konjunktiv'], answer: 0,
      explain: 'Many German verbs require a fixed preposition that never changes, e.g. "warten AUF".' },
    { q: 'What case does "teilnehmen an" require?', options: ['Dativ', 'Akkusativ', 'Genitiv'], answer: 0,
      explain: '"teilnehmen an" is one of the Dativ verb-preposition combinations.' },
    { q: 'What does "darauf" replace?', options: ['"auf" + a specific thing', 'A person\'s name', 'A verb'], answer: 0,
      explain: 'Pronominaladverbien like "darauf" replace "preposition + inanimate thing".' },
    { q: 'Which question word matches "sprechen über"?', options: ['Worüber?', 'Woran?', 'Wofür?'], answer: 0,
      explain: 'The question word always mirrors the verb\'s fixed preposition — "über" becomes "Worüber?".' },
    { q: 'What is the best strategy for learning these verbs?', options: ['Learn verb + preposition + case together', 'Learn only the verb', 'Guess the preposition from English'], answer: 0,
      explain: 'These verbs should always be learned as one unit: verb + preposition + case.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb-prep', html: 'Many German verbs require a FIXED preposition that never changes — learn verb + preposition + case as one unit.' },
    { c: 'r-verb-prep', html: 'Most of these verbs take Akkusativ; a smaller group (teilnehmen an, abhängen von, gehören zu, träumen von, bestehen aus) takes Dativ.' },
    { c: 'r-verb-prep', html: 'Question words (Worauf? Woran? Wofür?) and Pronominaladverbien (darauf, daran, dafür) always mirror the verb\'s fixed preposition.' }
  ],
  revisionTips: [
    'Make flashcards with verb + preposition + case together — never the verb alone.',
    'Practise asking and answering Worauf?/Woran?/Wofür? questions using Pronominaladverbien.',
    'Keep Nomen mit Präpositionen and Adjektive mit Präpositionen for the next two chapters.'
  ]
};

window.CHAPTER = CHAPTER;
