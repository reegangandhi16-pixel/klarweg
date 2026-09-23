/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 2 · Chapter 9
   "Verben im Alltag"  (Everyday verbs in the present tense)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-9 word list (22 words).
   Recycles Chapters 1–8 throughout.
============================================================ */
const CHAPTER = {
  id: 'a1-9-verben',
  phase: 'A1 · Phase 2',
  number: 9,
  title: 'Verben im Alltag',
  titleEn: 'Everyday Verbs',
  description: 'Verbs are the engine of every German sentence. Learn the everyday ones — arbeiten, lernen, machen, spielen, kochen — and the one regular pattern of present-tense endings that conjugates almost all of them across ich, du, er, wir, ihr, sie.',
  xp: 160,
  time: 45,
  difficulty: 'Beginner',
  nextChapter: { number: 10, title: 'Der / Die / Das', titleEn: 'Articles & Gender' , href: 'chapter-a1-10-artikel.html' },

  prevChapter: { number: 8, title: 'Goethe Mini 1', titleEn: 'Phase 1 Checkpoint', href: 'chapter-a1-8-goethemini1.html' },
  heroAnimationPath: null,

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A German verb has two parts: a <span class="de r-subject">stem</span> and an <span class="de r-verb">ending</span> that changes with the subject. Take <span class="de">lernen</span> → stem <span class="de r-subject">lern-</span>, then add <span class="de r-verb">-e, -st, -t, -en</span>. Learn that one pattern and you can use almost every everyday verb.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is EVERYDAY VERBS in the present tense (regular conjugation: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en), plus a few high-frequency verbs. ' +
    'The learner wrote sentences about daily routine below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Regular present endings on the stem: ich -e (ich lerne), du -st (du lernst), er/sie/es -t (er lernt), wir -en (wir lernen), ihr -t (ihr lernt), sie/Sie -en (sie lernen).\n' +
    '- Stems ending in -t or -d add an extra e before -st/-t: du arbeitest, er arbeitet (not arbeitst/arbeitt).\n' +
    '- The infinitive (the dictionary form) usually ends in -en (lernen, machen, spielen) or -n (sammeln).\n' +
    '- In a statement the conjugated verb is in second position: "Ich lerne Deutsch.", "Am Wochenende koche ich."\n' +
    '- Subject and verb must agree: "ich lerne", never "ich lernst".\n' +
    '- Nouns and the polite Sie are capitalised.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why (ending, agreement, or verb position). If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Conjugation check:</b> one sentence on whether the verb endings match their subjects.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you can conjugate everyday verbs. Move on to <span class="de">Der / Die / Das</span>.',
    mid: 'Good. Re-read the present-tense endings table once, then continue.',
    low: 'Worth another pass — revisit the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'lerne', role: 'r-verb' },
    { w: 'am', role: 'r-preposition' }, { w: 'Wochenende', role: 'r-time' },
    { w: 'Deutsch', role: 'r-object' }, { w: '.', role: '' }
  ],

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Every <em>day.</em>',
    intro: 'Phase 2 begins. Noah asks Clara what she does every day, and the two swap everyday routines — working, learning, cooking, playing — putting the new verb endings straight to work.',
    outcomes: ['Every word is clickable for meaning + audio', 'Hear regular verb endings in context', 'Two classmates compare their daily routines'],
    scene: 'Mein Tag — Deutschkurs',
    femaleSpeakers: ['Clara'],
    dialogue: [
      { speaker: 'Noah', tokens: [
        { w: 'Was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'machst', role: 'r-verb', en: 'do', hi: 'करती हो', pron: 'makhst', type: 'Verb · machen (du)', why: 'machen for du: du machst.', ex: 'Was machst du?', exEn: 'What are you doing?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: ',', plain: true },
        { w: 'Clara', role: 'r-name', en: 'Clara', hi: 'क्लारा', pron: 'KLAH-ra', type: 'Name · person' },
        { w: '?', plain: true }
      ], en: 'What do you do tomorrow, Clara?', hi: 'Clara, tum kal kya karti ho?' },
      { speaker: 'Clara', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'arbeite', role: 'r-verb', en: 'work', hi: 'काम करती हूँ', pron: 'AR-by-tuh', type: 'Verb · arbeiten (ich)', why: 'stem arbeit- + -e.', ex: 'Ich arbeite morgen.', exEn: 'I work tomorrow.' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'lerne', role: 'r-verb', en: 'learn', hi: 'सीखती हूँ', pron: 'LAIR-nuh', type: 'Verb · lernen (ich)', why: 'stem lern- + -e.', ex: 'Ich lerne Deutsch.', exEn: 'I learn German.' },
        { w: 'Deutsch', role: 'r-object', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun · language' },
        { w: '.', plain: true }
      ], en: 'I work tomorrow and I learn German.', hi: 'Main kal kaam karti hoon aur German seekhti hoon.' },
      { speaker: 'Noah', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'machst', role: 'r-verb', en: 'do', hi: 'करती हो', pron: 'makhst', type: 'Verb · machen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'gern', role: 'r-adverb', en: 'to like to', hi: 'खुशी से', pron: 'gairn', type: 'Adverb', why: 'gern + verb = to like doing something.', ex: 'Was machst du gern?', exEn: 'What do you like to do?' },
        { w: '?', plain: true }
      ], en: 'And what do you like to do?', hi: 'Aur tumhe kya karna pasand hai?' },
      { speaker: 'Clara', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'koche', role: 'r-verb', en: 'cook', hi: 'पकाती हूँ', pron: 'KO-khuh', type: 'Verb · kochen (ich)', why: 'stem koch- + -e.', ex: 'Ich koche gern.', exEn: 'I like to cook.' },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'spiele', role: 'r-verb', en: 'play', hi: 'खेलती हूँ', pron: 'SHPEE-luh', type: 'Verb · spielen (ich)', why: 'stem spiel- + -e.', ex: 'Ich spiele gern.', exEn: 'I like to play.' },
        { w: 'Gitarre', role: 'r-object', en: 'guitar', hi: 'गिटार', pron: 'gi-TA-ruh', type: 'Noun · fem.', why: 'die Gitarre.', ex: 'Ich spiele Gitarre.', exEn: 'I play guitar.' },
        { w: '.', plain: true }
      ], en: 'I like to cook and play guitar.', hi: 'Mujhe khaana banaana aur guitar bajaana pasand hai.' },
      { speaker: 'Noah', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'spiele', role: 'r-verb', en: 'play', hi: 'खेलता हूँ', pron: 'SHPEE-luh', type: 'Verb · spielen (ich)' },
        { w: 'nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb', why: 'nur = only.', ex: 'nur Computerspiele', exEn: 'only computer games' },
        { w: 'Computerspiele', role: 'r-object', en: 'computer games', hi: 'कंप्यूटर गेम', pron: 'kom-PYOO-ter-shpee-luh', type: 'Noun · plural', why: 'compound: Computer + Spiele.', ex: 'Ich spiele Computerspiele.', exEn: 'I play computer games.' },
        { w: '!', plain: true }
      ], en: 'And I only play computer games!', hi: 'Aur main sirf computer games khelta hoon!' },
      { speaker: 'Clara', side: 'right', tokens: [
        { w: 'Lernst', role: 'r-verb', en: 'do you learn', hi: 'सीखते हो', pron: 'LAIRNST', type: 'Verb · lernen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'Deutsch', role: 'r-object', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun · language' },
        { w: '?', plain: true }
      ], en: 'Do you learn German too?', hi: 'Kya tum German bhi seekhte ho?' },
      { speaker: 'Noah', tokens: [
        { w: 'Klar', role: 'r-adverb', en: 'of course', hi: 'बिल्कुल', pron: 'klahr', type: 'Adverb', why: 'klar = of course / sure.', ex: 'Klar!', exEn: 'Of course!' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'lerne', role: 'r-verb', en: 'learn', hi: 'सीखता हूँ', pron: 'LAIR-nuh', type: 'Verb · lernen (ich)' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: '.', plain: true }
      ], en: 'Of course. I always learn here.', hi: 'Bilkul. Main hamesha yahaan seekhta hoon.' }
    ]
  },

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole chapter at a glance before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meet the characters and hear this chapter’s words in a real conversation first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the everyday verbs and the words you need to talk about your daily routine.' },
    { id: 'grammar',    label: 'Present Tense', tag: 'core',
      objective: 'Master the infinitive, the regular present-tense endings, and subject–verb word order.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a daily-routine text and tap any word to hear it and see what it means.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Follow someone describe their day, then answer what they do and when.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say what you do each day and ask a partner about their routine.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five sentences about your daily routine using everyday verbs.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill verb meanings, present-tense endings, and word order with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The everyday verbs and daily-routine words with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Conjugation drills, daily-routine writing, gap-fill, and self-study activities.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The infinitive, regular present-tense endings, the -t/-d spelling rule, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'der Infinitiv', text: 'Recognise the dictionary form of a verb (-en)' },
    { de: '-e, -st, -t, -en', text: 'Add the right present-tense ending for each subject' },
    { de: 'Alltagsverben', text: 'Use everyday verbs: arbeiten, lernen, machen, spielen, kochen' },
    { de: 'Subjekt + Verb', text: 'Build simple sentences with the verb in second position' },
    { de: 'Mein Tag', text: 'Describe your daily routine in short sentences' }
  ],

  // ---------- Vocabulary (22 words) ----------
  vocab: [
    // — Core active verbs —
    { de: 'arbeiten', pos: 'verb', en: 'to work', hi: 'काम करना',
      ex: 'Ich arbeite am Wochenende.', exEn: 'I work on the weekend.',
      conj: { praesens: 'arbeitet', praeteritum: 'arbeitete', perfekt: 'hat gearbeitet' } },
    { de: 'brauchen', pos: 'verb', en: 'to need', hi: 'ज़रूरत होना',
      ex: 'Ich brauche das Deutschbuch.', exEn: 'I need the German book.',
      conj: { praesens: 'braucht', praeteritum: 'brauchte', perfekt: 'hat gebraucht' } },
    { de: 'kochen', pos: 'verb', en: 'to cook', hi: 'पकाना',
      ex: 'Am Wochenende koche ich.', exEn: 'On the weekend I cook.',
      conj: { praesens: 'kocht', praeteritum: 'kochte', perfekt: 'hat gekocht' } },
    { de: 'lernen', pos: 'verb', en: 'to learn', hi: 'सीखना',
      ex: 'Ich lerne Deutsch.', exEn: 'I learn German.',
      conj: { praesens: 'lernt', praeteritum: 'lernte', perfekt: 'hat gelernt' } },
    { de: 'machen', pos: 'verb', en: 'to do, to make', hi: 'करना / बनाना',
      ex: 'Was machst du morgen?', exEn: 'What are you doing tomorrow?',
      conj: { praesens: 'macht', praeteritum: 'machte', perfekt: 'hat gemacht' } },
    { de: 'spielen', pos: 'verb', en: 'to play', hi: 'खेलना',
      ex: 'Wir spielen am Wochenende.', exEn: 'We play on the weekend.',
      conj: { praesens: 'spielt', praeteritum: 'spielte', perfekt: 'hat gespielt' } },
    { de: 'und', pos: 'conjunction', en: 'and', hi: 'और',
      ex: 'Ich lerne und ich arbeite.', exEn: 'I learn and I work.' },
    // — Active support —
    { de: 'Wochenende', art: 'das', gender: 'n', plural: 'Wochenenden', pos: 'noun', en: 'weekend', hi: 'सप्ताहांत',
      ex: 'Am Wochenende spiele ich.', exEn: 'On the weekend I play.' },
    { de: 'morgen', pos: 'adverb', en: 'tomorrow', hi: 'कल',
      ex: 'Morgen lerne ich Deutsch.', exEn: 'Tomorrow I learn German.' },
    { de: 'sammeln', pos: 'verb', en: 'to collect', hi: 'इकट्ठा करना',
      ex: 'Ich sammle Lernkarten.', exEn: 'I collect flashcards.',
      conj: { praesens: 'sammelt', praeteritum: 'sammelte', perfekt: 'hat gesammelt' } },
    { de: 'wirklich', pos: 'adverb', en: 'really', hi: 'सचमुच',
      ex: 'Deutsch ist wirklich schön.', exEn: 'German is really beautiful.' },
    // — Passive —
    { de: 'Deutschbuch', art: 'das', gender: 'n', plural: 'Deutschbücher', pos: 'noun', en: 'German book', hi: 'जर्मन किताब',
      ex: 'Das Deutschbuch ist neu.', exEn: 'The German book is new.' },
    { de: 'Kapitel', art: 'das', gender: 'n', plural: 'Kapitel', pos: 'noun', en: 'chapter', hi: 'अध्याय',
      ex: 'Wir lernen Kapitel neun.', exEn: 'We are learning chapter nine.' },
    { de: 'Übungsbuch', art: 'das', gender: 'n', plural: 'Übungsbücher', pos: 'noun', en: 'exercise book', hi: 'अभ्यास पुस्तिका',
      ex: 'Das Übungsbuch hat viele Seiten.', exEn: 'The exercise book has many pages.' },
    { de: 'Form', art: 'die', gender: 'f', plural: 'Formen', pos: 'noun', en: 'form, shape', hi: 'रूप',
      ex: 'Welche Form hat das Verb?', exEn: 'Which form does the verb have?' },
    { de: 'Lernkarte', art: 'die', gender: 'f', plural: 'Lernkarten', pos: 'noun', en: 'flashcard', hi: 'फ्लैशकार्ड',
      ex: 'Ich mache eine Lernkarte.', exEn: 'I make a flashcard.' },
    { de: 'Seite', art: 'die', gender: 'f', plural: 'Seiten', pos: 'noun', en: 'page', hi: 'पृष्ठ',
      ex: 'Öffne Seite zwölf.', exEn: 'Open page twelve.' },
    { de: 'nennen', pos: 'verb', en: 'to name, to call', hi: 'नाम बताना',
      ex: 'Nenne drei Verben.', exEn: 'Name three verbs.',
      conj: { praesens: 'nennt', praeteritum: 'nannte', perfekt: 'hat genannt' } },
    // — Reference / System —
    { de: 'Infinitiv', art: 'der', gender: 'm', plural: 'Infinitive', pos: 'noun', en: 'infinitive', hi: 'क्रिया का मूल रूप',
      ex: '"lernen" ist der Infinitiv.', exEn: '"lernen" is the infinitive.' },
    { de: 'Lernwortschatz', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'vocabulary list', hi: 'शब्द-सूची',
      ex: 'Der Lernwortschatz hat 22 Wörter.', exEn: 'The vocabulary list has 22 words.' },
    { de: 'Endung', art: 'die', gender: 'f', plural: 'Endungen', pos: 'noun', en: 'ending', hi: 'अंत-प्रत्यय',
      ex: 'Die Endung für "ich" ist -e.', exEn: 'The ending for "ich" is -e.' },
    { de: 'Regel', art: 'die', gender: 'f', plural: 'Regeln', pos: 'noun', en: 'rule', hi: 'नियम',
      ex: 'Die Regel ist einfach.', exEn: 'The rule is simple.' }
  ],

  // ---------- Present Tense (rule cards → accordion) ----------
  grammar: [
    {
      title: 'What is a verb? The infinitive',
      goldenRule: 'Cut <b>-en</b> off the infinitive and you have the <b>stem</b>. Everything you ever do to a German verb happens after that stem.',
      memoryTrick: 'Infinitiv = stem + <b>-en</b>. Ulta karo: <b>-en</b> hatao, stem mil gaya.',
      body: [
        'A <b>verb</b> (Verb) is the action word — the <i>engine</i> of the sentence. Its base form, the one you find in a dictionary, is the <span class="de r-verb">Infinitiv</span>.',
        'Almost every German infinitive ends in <b>-en</b> (a few in just <b>-n</b>). Cut that off and what is left is the <span class="de r-subject">stem</span> — the part you build on.'
      ],
      table: {
        head: ['Infinitiv', 'Meaning', 'Stem'],
        rows: [
          ['<span class="de r-verb">lernen</span>', 'to learn', '<span class="de r-subject">lern-</span>'],
          ['<span class="de r-verb">machen</span>', 'to do/make', '<span class="de r-subject">mach-</span>'],
          ['<span class="de r-verb">spielen</span>', 'to play', '<span class="de r-subject">spiel-</span>'],
          ['<span class="de r-verb">sammeln</span>', 'to collect', '<span class="de r-subject">sammel-</span>']
        ]
      },
      note: 'Infinitive = stem + <b>-en</b> — with a small group ending in just <b>-n</b> (<span class="de">sammeln</span> → stem <i>sammel-</i>). For regular verbs the stem never changes; only the ending does.',
      hinglish: '<b>Verb</b> action word hai — sentence ka engine. Dictionary wala base form = <b>Infinitiv</b>, jo aksar <b>-en</b> par khatam hota hai (lernen, machen). <b>-en</b> hatao to bachta hai <b>stem</b> (lern-, mach-). Regular verbs mein stem nahi badalta, sirf ending badalti hai.'
    },
    {
      title: 'The present-tense endings',
      goldenRule: 'ich <b>-e</b> · du <b>-st</b> · er/sie/es <b>-t</b> · wir <b>-en</b> · ihr <b>-t</b> · sie/Sie <b>-en</b>.',
      why: 'English has almost given up on endings — only "he walk<b>s</b>" survives. German kept the full set, and that is why German can move words around so freely: the ending already tells you who is doing it, so the word order is free to do other work.',
      formula: [
        'stem + ending  →  lern- + e   =  ich lerne',
        '                  lern- + st  =  du lernst',
        '                  lern- + t   =  er lernt'
      ],
      memoryTrick: 'Do endings do baar aate hain: <b>-en</b> (wir, sie/Sie) aur <b>-t</b> (er, ihr). Matlab chhe forms mein sirf <b>chaar</b> shabd yaad karne hain.',
      recap: [
        'One ending set covers almost every regular verb.',
        'wir and sie/Sie look exactly like the infinitive.',
        'er/sie/es and ihr share <b>-t</b>.'
      ],
      body: [
        'To use a verb, add the ending that matches the subject to the stem. This single set of endings works for almost every regular verb — learn it once.'
      ],
      table: {
        head: ['Subject', 'Ending', 'lernen', 'machen'],
        rows: [
          ['ich', '<span class="de r-verb">-e</span>', 'ich lerne', 'ich mache'],
          ['du', '<span class="de r-verb">-st</span>', 'du lernst', 'du machst'],
          ['er/sie/es', '<span class="de r-verb">-t</span>', 'er lernt', 'sie macht'],
          ['wir', '<span class="de r-verb">-en</span>', 'wir lernen', 'wir machen'],
          ['ihr', '<span class="de r-verb">-t</span>', 'ihr lernt', 'ihr macht'],
          ['sie/Sie', '<span class="de r-verb">-en</span>', 'sie lernen', 'Sie machen']
        ]
      },
      note: 'Notice wir and sie/Sie are identical to the infinitive (-en). du = -st, er/sie/es and ihr = -t.',
      hinglish: 'Verb use karne ke liye subject ke hisaab se ending lagao: ich <b>-e</b>, du <b>-st</b>, er/sie/es <b>-t</b>, wir <b>-en</b>, ihr <b>-t</b>, sie/Sie <b>-en</b>. Ek hi set lagbhag har regular verb par chalta hai. Dhyaan: wir aur sie/Sie infinitive jaise hi (-en) hain.'
    },
    {
      title: 'Spelling helper: stems ending in -t or -d',
      goldenRule: 'Stem ends in <b>-t</b> or <b>-d</b>? Slip an <b>-e-</b> in before the du, er and ihr endings.',
      why: 'This is not grammar, it is your mouth. Say "arbeitst" or "findst" out loud and you will hear why German refuses — the extra <b>-e-</b> exists purely so the word remains sayable.',
      memoryTrick: 'Do consonant takra rahe hain? Beech mein ek <b>-e-</b> daal do.',
      body: [
        'If the stem already ends in <b>-t</b> or <b>-d</b>, the <b>du</b>, <b>er/sie/es</b> and <b>ihr</b> forms add an extra <b>-e-</b> so you can actually pronounce them.'
      ],
      table: {
        head: ['Verb', 'du', 'er/sie/es', 'ihr'],
        rows: [
          ['<span class="de r-verb">arbeiten</span>', 'du arbeit<b>e</b>st', 'er arbeit<b>e</b>t', 'ihr arbeit<b>e</b>t'],
          ['<span class="de r-verb">finden</span>', 'du find<b>e</b>st', 'er find<b>e</b>t', 'ihr find<b>e</b>t'],
          ['<span class="de r-verb">spielen</span> (no -t/-d)', 'du spielst', 'er spielt', 'ihr spielt']
        ]
      },
      note: 'Without the helper <b>-e</b>, "arbeitst" and "findst" would be unsayable — try them out loud. The rule applies <b>only</b> to stems ending in <b>-t</b> or <b>-d</b>; a normal stem like <i>spiel-</i> takes the plain endings.',
      hinglish: 'Agar stem <b>-t</b> ya <b>-d</b> par khatam ho (jaise <b>arbeit-</b>), to du/er/ihr mein ek extra <b>-e-</b> aata hai: du arbeit<b>e</b>st, er arbeit<b>e</b>t. Warna "arbeitst" bola hi nahi jaata. Yeh rule sirf -t/-d wale stems par.'
    },
    {
      title: 'Word order: verb in second position',
      goldenRule: 'Whatever fills slot 1, the verb is slot 2 — and the subject moves out of the way if it has to.',
      memoryTrick: 'Verb ki seat <b>number 2</b> reserved hai. Time word aage aaya to subject peeche khisak jaata hai.',
      recap: [
        'Statement = the verb sits second, always.',
        'Front a time word and you get verb–subject: <span class="de">Morgen arbeite ich</span>.',
        'Slot 1 is one idea, not one word.'
      ],
      body: [
        'In a statement the conjugated <span class="de r-verb">verb</span> stays in <b>second position</b> — the same rule from Chapter 5. If a time word like <span class="de r-time">morgen</span> or <span class="de r-time">am Wochenende</span> comes first, the verb still sits second and the subject jumps behind it.'
      ],
      table: {
        head: ['Position 1', 'Verb (2)', 'Rest'],
        rows: [
          ['<span class="de r-subject">Ich</span>', '<span class="de r-verb">lerne</span>', 'Deutsch.'],
          ['<span class="de r-time">Morgen</span>', '<span class="de r-verb">arbeite</span>', 'ich.'],
          ['<span class="de r-time">Am Wochenende</span>', '<span class="de r-verb">koche</span>', 'ich.'],
          ['<span class="de r-subject">Wir</span>', '<span class="de r-verb">spielen</span>', 'und lernen.']
        ]
      },
      note: 'When a time word opens the sentence, you get verb–subject: <i>Morgen arbeite ich</i> (not "Morgen ich arbeite").',
      hinglish: 'Normal statement (Hauptsatz) mein verb <b>doosri position</b> par hota hai (Chapter 5 wala rule). Agar time word pehle aaye (morgen, am Wochenende), to verb phir bhi doosre, aur subject uske peeche: <b>Morgen arbeite ich</b> — "Morgen ich arbeite" nahi.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      whatIsIt: 'Four habits, and every one of them is about the ending rather than the word. Get the ending right and the rest of the verb takes care of itself.',
      body: [ 'Each row is a rule from this chapter, seen from the wrong side.' ],
      mistakes: [
        { wrong: 'ich lernst / du lerne', right: 'ich lerne / du lernst', why: 'The ending must match the subject: ich -e, du -st.' },
        { wrong: 'du arbeitst', right: 'du arbeitest', why: 'Stems in -t/-d add -e- before -st and -t.' },
        { wrong: 'Morgen ich arbeite.', right: 'Morgen arbeite ich.', why: 'The verb stays second; the subject moves after it.' },
        { wrong: 'Ich lernen Deutsch.', right: 'Ich lerne Deutsch.', why: 'The -en form is the infinitive (the dictionary form). It belongs to wir and sie/Sie, never to ich.' }
      ],
      hinglish: 'Char galtiyan common hain. Pehli, ending subject se match nahi karna \u2014 sahi hai <b>ich lerne</b> aur <b>du lernst</b>. Doosri, jin stems ke end mein <b>-t</b> ya <b>-d</b> hai, unme extra <b>-e-</b> bhool jaana: <b>du arbeitest</b>. Teesri, time word aage hone par verb ko doosri jagah par na rakhna: <b>Morgen arbeite ich</b>. Aur chauthi, infinitive aur conjugated form ko mix kar dena.'
    }
  ],

  // ---------- Reading passage (daily routine, clickable words) ----------
  reading: {
    title: 'Mein Tag',
    titleEn: 'My day',
    tokens: [
      { w: 'Ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Subject of the sentence.', ex: 'Ich lerne Deutsch.', exEn: 'I learn German.' },
      { w: 'lerne', role: 'r-verb', en: 'learn', hi: 'सीखता हूँ', pron: 'LAIR-nuh', type: 'Verb · ich-form', why: 'lernen, ich-form: stem lern- + -e.', ex: 'Ich lerne Deutsch.', exEn: 'I learn German.', conj: { praesens: 'lernt', praeteritum: 'lernte', perfekt: 'hat gelernt' }, advanced: { synonyms: ['studieren'], opposites: [] } },
      { w: 'jeden', role: 'r-article', en: 'every', hi: 'हर', pron: 'YAY-den', type: 'Determiner', why: 'jeden Tag = every day.', ex: 'jeden Tag', exEn: 'every day' },
      { w: 'Tag', role: 'r-time', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · time', why: 'final g → "k". "jeden Tag" = every day.', ex: 'jeden Tag', exEn: 'every day' },
      { w: 'Deutsch', role: 'r-object', case: 'Akkusativ', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Language', why: 'The thing learned — capitalised language.', ex: 'Ich lerne Deutsch.', exEn: 'I learn German.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Subject again.', ex: 'Ich brauche ein Buch.', exEn: 'I need a book.' },
      { w: 'brauche', role: 'r-verb', en: 'need', hi: 'चाहिए', pron: 'BROW-khuh', type: 'Verb · ich-form', why: 'brauchen, ich: brauch- + -e.', ex: 'Ich brauche das Deutschbuch.', exEn: 'I need the German book.', conj: { praesens: 'braucht', praeteritum: 'brauchte', perfekt: 'hat gebraucht' }, advanced: { synonyms: ['benötigen'], opposites: [] } },
      { w: 'das', role: 'r-article', en: 'the', hi: 'वह', pron: 'das', type: 'Article · neuter', why: 'Neuter article for Deutschbuch.', ex: 'das Deutschbuch', exEn: 'the German book' },
      { w: 'Deutschbuch', role: 'r-object', case: 'Akkusativ', en: 'German book', hi: 'जर्मन किताब', pron: 'DOYTCH-bookh', type: 'Noun · object', why: 'Compound: Deutsch + Buch (from Ch 1).', ex: 'Das Deutschbuch ist neu.', exEn: 'The German book is new.' },
      { w: 'und', role: 'r-preposition', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'Joins two ideas; final d → "t".', ex: 'lernen und spielen', exEn: 'learn and play' },
      { w: 'eine', role: 'r-article', en: 'a', hi: 'एक', pron: 'EYE-nuh', type: 'Article · feminine', why: 'Feminine indefinite article for Lernkarte.', ex: 'eine Lernkarte', exEn: 'a flashcard' },
      { w: 'Lernkarte', role: 'r-object', case: 'Akkusativ', en: 'flashcard', hi: 'फ्लैशकार्ड', pron: 'LAIRN-kar-tuh', type: 'Noun · object', why: 'Compound: lern- + Karte.', ex: 'Ich mache eine Lernkarte.', exEn: 'I make a flashcard.' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition + time', why: '"am Wochenende" = on the weekend.', ex: 'am Wochenende', exEn: 'on the weekend' },
      { w: 'Wochenende', role: 'r-time', en: 'weekend', hi: 'सप्ताहांत', pron: 'VO-khen-en-duh', type: 'Noun · time', why: 'Time phrase — opens the sentence, so verb comes next.', ex: 'Am Wochenende koche ich.', exEn: 'On the weekend I cook.' },
      { w: 'koche', role: 'r-verb', en: 'cook', hi: 'पकाता हूँ', pron: 'KO-khuh', type: 'Verb · 2nd position', why: 'Time word first → verb second, then subject.', ex: 'Am Wochenende koche ich.', exEn: 'On the weekend I cook.', conj: { praesens: 'kocht', praeteritum: 'kochte', perfekt: 'hat gekocht' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · after verb', why: 'Subject jumps behind the verb because the time word is first.', ex: 'Am Wochenende koche ich.', exEn: 'On the weekend I cook.' },
      { w: 'und', role: 'r-preposition', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'Joins the two weekend actions.', ex: 'koche und spiele', exEn: 'cook and play' },
      { w: 'spiele', role: 'r-verb', en: 'play', hi: 'खेलता हूँ', pron: 'SHPEE-luh', type: 'Verb · ich-form', why: 'spielen, ich: spiel- + -e.', ex: 'Ich spiele am Wochenende.', exEn: 'I play on the weekend.', conj: { praesens: 'spielt', praeteritum: 'spielte', perfekt: 'hat gespielt' }, advanced: { synonyms: [], opposites: [] } },
      { w: '.', plain: true }
    ],
    translation: 'I learn German every day. I need the German book and a flashcard. On the weekend I cook and play.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_009_L001', speaker: 'Noah', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Was machst du heute, Clara?', en: 'What are you doing today, Clara?' },
      { id: 'A1_009_L002', speaker: 'Clara', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Heute schwimme ich und ich lese ein Buch.', en: 'Today I swim and I read a book.' },
      { id: 'A1_009_L003', speaker: 'Noah', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und morgen?', en: 'And tomorrow?' },
      { id: 'A1_009_L004', speaker: 'Clara', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Morgen putze ich und ich koche für Freunde.', en: 'Tomorrow I clean and I cook for friends.' }
    ],
    transcript: 'Was machst du heute, Clara? Heute schwimme ich und ich lese ein Buch. Und morgen? Morgen putze ich und ich koche für Freunde.',
    translation: 'What are you doing today, Clara? Today I swim and I read a book. And tomorrow? Tomorrow I clean and I cook for friends.',
    tokens: [
      { w: 'Was' },
      { w: 'machst' },
      { w: 'du' },
      { w: 'heute' },
      { w: ',', plain: true },
      { w: 'Clara' },
      { w: '?', plain: true },
      { w: 'Heute' },
      { w: 'schwimme' },
      { w: 'ich' },
      { w: 'und' },
      { w: 'ich' },
      { w: 'lese' },
      { w: 'ein' },
      { w: 'Buch' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'morgen' },
      { w: '?', plain: true },
      { w: 'Morgen' },
      { w: 'putze' },
      { w: 'ich' },
      { w: 'und' },
      { w: 'ich' },
      { w: 'koche' },
      { w: 'für' },
      { w: 'Freunde' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was macht Clara heute?', qEn: 'What does Clara do today?', options: ['arbeiten und kochen', 'schwimmen und lesen', 'putzen und lernen', 'spielen und schreiben'], optionsEn: ['work and cook', 'swim and read', 'clean and study', 'play and write'], answer: 1,
        explain: '"Heute schwimme ich und ich lese ein Buch."' },
      { q: 'Was macht Clara morgen?', qEn: 'What does Clara do tomorrow?', options: ['schwimmen und lesen', 'putzen und kochen', 'arbeiten und lernen', 'nichts'], optionsEn: ['swim and read', 'clean and cook', 'work and study', 'nothing'], answer: 1,
        explain: '"Morgen putze ich und ich koche für Freunde."' }
    ]
  },

  speaking: [
    { task: "Dein Partner fragt: Was machst du heute?", taskEn: "Your partner asks: what are you doing today?", de: "Heute lerne ich Deutsch und ich koche.", en: "Today I'm studying German and cooking." },
    { task: "Deine Lehrerin fragt: Was machst du morgen?", taskEn: "Your teacher asks: what are you doing tomorrow?", de: "Morgen arbeite ich und ich spiele Fußball.", en: "Tomorrow I'm working and playing football." },
    { task: "Frag deinen Partner nach dem Wochenende.", taskEn: "Ask your partner about the weekend.", de: "Was machst du am Wochenende?", en: "What are you doing at the weekend?" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about your daily routine. Use a different everyday verb in each (lernen, arbeiten, kochen, spielen, brauchen) and a time word (jeden Tag, morgen, am Wochenende) in at least two. Keep the verb in second position.',
    starters: ['Ich lerne …', 'Am Wochenende …', 'Morgen …'],
    placeholder: 'Ich lerne jeden Tag Deutsch …',
    minWords: 16
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct form: "Du ___ Deutsch."',
      options: ['lerne', 'lernst', 'lernt', 'lernen'],
      answer: 1,
      explain: 'du takes -st: "Du lernst Deutsch."'
    },
    gap: {
      // Conjugation in context.
      sentence: ['Ich ', ' am Wochenende und ', ' jeden Tag.'],
      gaps: [ { answer: 'koche', accepts: ['koche'] }, { answer: 'lerne', accepts: ['lerne'] } ],
      explain: 'ich-form adds -e: ich koche, ich lerne.'
    },
    match: {
      q: 'Match each verb to its English meaning.',
      pairs: [
        { noun: 'arbeiten', art: 'to work' },
        { noun: 'kochen', art: 'to cook' },
        { noun: 'spielen', art: 'to play' },
        { noun: 'brauchen', art: 'to need' }
      ]
    },
    builder: {
      target: 'Build: "On the weekend I cook."',
      bank: ['koche', 'Am Wochenende', 'ich'],
      answer: ['Am Wochenende', 'koche', 'ich'],
      roles: { 'Am Wochenende': 'r-time', 'koche': 'r-verb', 'ich': 'r-subject' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the infinitive of "ich lerne"?', options: ['lernst', 'lernen', 'lernt', 'gelernt'], answer: 1,
      explain: 'The dictionary form is "lernen" (stem lern- + -en).' },
    { q: 'Complete: "Wir ___ am Wochenende."', options: ['spielt', 'spielst', 'spielen', 'spiele'], answer: 2,
      explain: 'wir takes -en: "Wir spielen."' },
    { q: 'Which is correct for a stem ending in -t?', options: ['du arbeitst', 'du arbeitest', 'du arbeit', 'du arbeiten'], answer: 1,
      explain: 'Stems in -t/-d add -e-: "du arbeitest".' },
    { q: 'Put in order: "Morgen ___ ich." (arbeiten)', options: ['arbeite', 'arbeitest', 'arbeiten', 'arbeitet'], answer: 0,
      explain: 'ich-form: "Morgen arbeite ich." (verb second, subject after).' },
    { q: 'Which sentence has correct word order?', options: ['Am Wochenende ich koche.', 'Am Wochenende koche ich.', 'Ich am Wochenende koche.', 'Koche am Wochenende ich.'], answer: 1,
      explain: 'Time word first → verb second → subject: "Am Wochenende koche ich."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'A verb = <b>stem + ending</b>. The infinitive (dictionary form) ends in <span class="de">-en</span>: lernen, machen, spielen.' },
    { c: 'r-subject', html: 'Present endings: ich <span class="de">-e</span>, du <span class="de">-st</span>, er/sie/es <span class="de">-t</span>, wir/sie/Sie <span class="de">-en</span>, ihr <span class="de">-t</span>.' },
    { c: 'r-time', html: 'The verb stays <b>second</b>: <span class="de">Am Wochenende koche ich.</span> (time first → subject after the verb).' }
  ],
  revisionTips: [
    'Conjugate one new verb fully (all six persons) out loud each day.',
    'Describe your real routine: pick a time word, then say what you do — keep the verb second.',
    'Watch -t/-d stems: arbeiten → du arbeitest, er arbeitet.'
  ]
};

window.CHAPTER = CHAPTER;
