/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 1 · Chapter 5
   "Wer bist du?"  (Personal introductions & identity)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-5 word list (38 words).
   Recycles Chapters 1–4 throughout.
============================================================ */
const CHAPTER = {
  id: 'a1-5-werbistdu',
  phase: 'A1 · Phase 1',
  number: 5,
  title: 'Wer bist du?',
  titleEn: 'Who are you?',
  description: 'Your first real personal conversation. Two tools carry it: the personal pronouns (ich, du, er, sie …) and the verb sein (to be). With those you can say who you are, ask who someone else is, and answer like a Goethe A1 candidate.',
  xp: 150,
  time: 45,
  difficulty: 'Beginner',
  nextChapter: { number: 6, title: 'W-Fragen', titleEn: 'Question Words' , href: 'chapter-a1-6-wfragen.html' },

  heroAnimationPath: null,

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Every German sentence needs a <span class="de r-subject">subject</span> and a <span class="de r-verb">verb</span>. Master the eight personal pronouns and the verb <span class="de r-verb">sein</span> (to be), and you can introduce yourself, ask <span class="de r-question">Wer bist du?</span>, and answer — the backbone of the Goethe A1 speaking test.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is IDENTITY: personal pronouns (ich, du, er, sie, es, wir, ihr, Sie) and the verb sein (to be), plus "Ich heiße…", "Mein Name ist…", "Ich komme aus…", "Ich wohne in…". ' +
    'The learner wrote a short self-introduction or profile below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- sein conjugation: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie sind, Sie sind. Never "ich bist" or "du bin".\n' +
    '- heißen: ich heiße, du heißt, er/sie heißt. Name patterns: "Ich heiße …", "Mein Name ist …", "Mein Vorname ist … / Mein Nachname ist …".\n' +
    '- Origin: "Ich komme aus …" (aus + country/city). Residence: "Ich wohne in …" (in + place).\n' +
    '- Subject pronoun is required: "Ich bin Anna", never just "Bin Anna".\n' +
    '- Register: informal du / "Wie heißt du?"; formal Sie / "Wie heißen Sie?" — keep it consistent. The polite Sie is always capitalised; nouns are capitalised.\n' +
    '- A declarative sentence (Aussagesatz) is Subject–Verb–…: "Ich wohne in Delhi."\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why (pronoun, sein form, or word order). If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>sein check:</b> one sentence on whether the pronoun + sein forms agree.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — pronouns and sein are yours. Move on to <span class="de">W-Fragen</span>.',
    mid: 'Good. Re-read the sein conjugation table once, then continue.',
    low: 'Worth another pass — revisit the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'bin', role: 'r-verb' },
    { w: 'Anna', role: 'r-object' }, { w: 'Klein', role: 'r-object' },
    { w: '.', role: '' }
  ],

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Who are <em>you?</em>',
    intro: 'A partner exercise. Two classmates, Lena and Paul, introduce themselves properly — names, where they are from, where they live, their age — and discover they are both new in Berlin.',
    outcomes: ['Every word is clickable for meaning + audio', 'Hear sein in action: bin, bist, ist, sind', 'Two partners share names, cities, and ages'],
    scene: 'Vorstellungsrunde — Deutschkurs',
    femaleSpeakers: ['Lena'],
    dialogue: [
      { speaker: 'Lena', tokens: [
        { w: 'Hallo', role: 'r-subject', en: 'hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting' },
        { w: '!', plain: true },
        { w: 'Wer', role: 'r-question', en: 'who', hi: 'कौन', pron: 'vair', type: 'Question word', why: 'Wer bist du? = Who are you?', ex: 'Wer bist du?', exEn: 'Who are you?' },
        { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)', why: 'sein for du: du bist.', ex: 'Du bist Paul.', exEn: 'You are Paul.' },
        { w: 'du', role: 'r-subject', en: 'you (informal)', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Hello! Who are you?', hi: 'Namaste! Tum kaun ho?' },
      { speaker: 'Paul', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)', why: 'sein for ich: ich bin.', ex: 'Ich bin Paul.', exEn: 'I am Paul.' },
        { w: 'Paul', role: 'r-name', en: 'Paul', hi: 'पॉल', pron: 'powl', type: 'Name · person' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'wer', role: 'r-question', en: 'who', hi: 'कौन', pron: 'vair', type: 'Question word' },
        { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'I am Paul. And who are you?', hi: 'Main Paul hoon. Aur tum kaun ho?' },
      { speaker: 'Lena', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'heiße', role: 'r-verb', en: 'am called', hi: 'नाम है', pron: 'HY-suh', type: 'Verb · heißen (ich)', why: 'ich heiße = my name is.', ex: 'Ich heiße Lena.', exEn: 'My name is Lena.' },
        { w: 'Lena', role: 'r-name', en: 'Lena', hi: 'लेना', pron: 'LAY-na', type: 'Name · Vorname' },
        { w: 'Berg', role: 'r-name', en: 'Berg', hi: 'बर्ग', pron: 'bairk', type: 'Name · Nachname' },
        { w: '.', plain: true },
        { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive · nom.', why: 'mein Nachname = my last name.', ex: 'Mein Nachname ist Berg.', exEn: 'My last name is Berg.' },
        { w: 'Nachname', role: 'r-subject', en: 'last name', hi: 'उपनाम', pron: 'NAHKH-nah-muh', type: 'Noun · masc.', why: 'der Nachname = last name (Ch5).', ex: 'Mein Nachname ist Berg.', exEn: 'My last name is Berg.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er/es)' },
        { w: 'Berg', role: 'r-name', en: 'Berg', hi: 'बर्ग', pron: 'bairk', type: 'Name · Nachname' },
        { w: '.', plain: true }
      ], en: 'My name is Lena Berg. My last name is Berg.', hi: 'Main Lena Berg hoon. Mera nachname Berg hai.' },
      { speaker: 'Paul', side: 'right', tokens: [
        { w: 'Freut', role: 'r-verb', en: 'pleases', hi: 'खुशी होती है', pron: 'froyt', type: 'Verb · freuen', why: 'Freut mich = pleased to meet you (fixed phrase).', ex: 'Freut mich!', exEn: 'Pleased to meet you!' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: ',', plain: true },
        { w: 'Lena', role: 'r-name', en: 'Lena', hi: 'लेना', pron: 'LAY-na', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive · nom.' },
        { w: 'Name', role: 'r-subject', en: 'name', hi: 'नाम', pron: 'NAH-muh', type: 'Noun · masc.', why: 'Mein Name ist … = My name is …', ex: 'Mein Name ist Paul.', exEn: 'My name is Paul.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er/es)' },
        { w: 'Paul', role: 'r-name', en: 'Paul', hi: 'पॉल', pron: 'powl', type: 'Name · Vorname' },
        { w: 'Vogel', role: 'r-name', en: 'Vogel', hi: 'फ़ोगल', pron: 'FOH-gel', type: 'Name · Nachname' },
        { w: '.', plain: true }
      ], en: 'Pleased to meet you, Lena! My name is Paul Vogel.', hi: 'Milkar khushi hui, Lena! Mera naam Paul Vogel hai.' },
      { speaker: 'Lena', tokens: [
        { w: 'Woher', role: 'r-question', en: 'where from', hi: 'कहाँ से', pron: 'vo-HAIR', type: 'Question word', why: 'Woher …? asks about origin.', ex: 'Woher kommst du?', exEn: 'Where are you from?' },
        { w: 'kommst', role: 'r-verb', en: 'come', hi: 'आते हो', pron: 'komst', type: 'Verb · kommen (du)', why: 'kommen for du: du kommst.', ex: 'Woher kommst du?', exEn: 'Where do you come from?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: ',', plain: true },
        { w: 'Paul', role: 'r-name', en: 'Paul', hi: 'पॉल', pron: 'powl', type: 'Name · person' },
        { w: '?', plain: true }
      ], en: 'Where are you from, Paul?', hi: 'Tum kahaan se ho, Paul?' },
      { speaker: 'Paul', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'komme', role: 'r-verb', en: 'come', hi: 'आता हूँ', pron: 'KO-muh', type: 'Verb · kommen (ich)', why: 'Ich komme aus … = I come from …', ex: 'Ich komme aus Hamburg.', exEn: 'I come from Hamburg.' },
        { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'owss', type: 'Preposition' },
        { w: 'Hamburg', role: 'r-place', en: 'Hamburg', hi: 'हैम्बर्ग', pron: 'HAM-burk', type: 'Noun · city' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'wohne', role: 'r-verb', en: 'live', hi: 'रहता हूँ', pron: 'VOH-nuh', type: 'Verb · wohnen (ich)', why: 'wohnen in + place = to live in.', ex: 'Ich wohne in Berlin.', exEn: 'I live in Berlin.' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'Berlin', role: 'r-place', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Noun · city' },
        { w: '.', plain: true }
      ], en: 'I come from Hamburg. And I now live in Berlin.', hi: 'Main Hamburg se hoon. Aur ab main Berlin mein rehta hoon.' },
      { speaker: 'Lena', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'komme', role: 'r-verb', en: 'come', hi: 'आती हूँ', pron: 'KO-muh', type: 'Verb · kommen (ich)' },
        { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'owss', type: 'Preposition' },
        { w: 'Indien', role: 'r-place', en: 'India', hi: 'भारत', pron: 'IN-dee-en', type: 'Noun · country' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'wohne', role: 'r-verb', en: 'live', hi: 'रहती हूँ', pron: 'VOH-nuh', type: 'Verb · wohnen (ich)' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb', why: 'auch = also / too.', ex: 'Ich auch!', exEn: 'Me too!' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'Berlin', role: 'r-place', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Noun · city' },
        { w: '!', plain: true }
      ], en: 'I come from India. I also live in Berlin!', hi: 'Main Bharat se hoon. Main bhi Berlin mein rehti hoon!' },
      { speaker: 'Paul', side: 'right', tokens: [
        { w: 'Super', role: 'r-adjective', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कितने', pron: 'vee', type: 'Question word' },
        { w: 'alt', role: 'r-adjective', en: 'old', hi: 'उम्र', pron: 'alt', type: 'Adjective', why: 'wie alt = how old.', ex: 'Wie alt bist du?', exEn: 'How old are you?' },
        { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Great! How old are you?', hi: 'Badhiya! Tum kitne saal ki ho?' },
      { speaker: 'Lena', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)' },
        { w: 'zweiundzwanzig', role: 'r-object', en: 'twenty-two', hi: 'बाईस', pron: 'TSVY-unt-tsvan-tsikh', type: 'Number', why: 'reversal: zwei + und + zwanzig.', ex: 'Ich bin zweiundzwanzig.', exEn: 'I am twenty-two.' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'I am twenty-two. And you?', hi: 'Main baaees ki hoon. Aur tum?' },
      { speaker: 'Paul', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)' },
        { w: 'vierundzwanzig', role: 'r-object', en: 'twenty-four', hi: 'चौबीस', pron: 'FEER-unt-tsvan-tsikh', type: 'Number', why: 'reversal: vier + und + zwanzig.', ex: 'Ich bin vierundzwanzig.', exEn: 'I am twenty-four.' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein (wir)', why: 'sein for wir: wir sind.', ex: 'Wir sind Partner.', exEn: 'We are partners.' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'Partner', role: 'r-object', en: 'partners', hi: 'साथी', pron: 'PART-ner', type: 'Noun · masc.', why: 'der Partner; here course partners (Ch5).', ex: 'Wir sind Partner.', exEn: 'We are partners.' },
        { w: '!', plain: true }
      ], en: 'I am twenty-four. And now we are partners!', hi: 'Main chaubees ka hoon. Aur ab hum partner hain!' }
    ]
  },

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole chapter at a glance before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meet the characters and hear this chapter’s words in a real conversation first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the personal pronouns, the verbs of introduction, and the words for names and people.' },
    { id: 'grammar',    label: 'Pronouns & sein', tag: 'core',
      objective: 'Master the personal pronouns, the verb sein, and the ask-and-answer patterns for identity.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a course-introduction dialogue and tap any word to hear it and see what it means.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Follow people introducing themselves with names and ages, then answer what you heard.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Introduce yourself, ask a partner who they are, and answer in full sentences.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a short profile: name, origin, where you live, and age.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill pronouns, sein conjugation, and sentence order with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 150 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'Pronouns, introduction verbs, and identity nouns with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Pronoun drills, sein conjugation, dialogue completion, and a Goethe-style intro task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The personal pronouns, the full sein conjugation, question patterns, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'ich · du · er · sie', text: 'Use all the personal pronouns correctly' },
    { de: 'sein', text: 'Conjugate "to be": ich bin, du bist, er ist …' },
    { de: 'Wer bist du?', text: 'Ask and answer who someone is' },
    { de: 'Mein Name ist …', text: 'Give your first name and last name' },
    { de: 'Ich wohne in …', text: 'Say where you live and where you come from' }
  ],

  // ---------- Vocabulary (38 words) ----------
  vocab: [
    { de: 'ich', pos: 'pronoun', en: 'I', hi: 'मैं',
      ex: 'Ich bin Anna.', exEn: 'I am Anna.' },
    { de: 'du', pos: 'pronoun', en: 'you (informal)', hi: 'तुम',
      ex: 'Wer bist du?', exEn: 'Who are you?' },
    { de: 'er', pos: 'pronoun', en: 'he', hi: 'वह (पुरुष)',
      ex: 'Er kommt aus Berlin.', exEn: 'He comes from Berlin.' },
    { de: 'sie', pos: 'pronoun', en: 'she; they', hi: 'वह (स्त्री) / वे',
      ex: 'Sie heißt Lena.', exEn: 'She is called Lena.' },
    { de: 'es', pos: 'pronoun', en: 'it', hi: 'यह',
      ex: 'Es ist gut.', exEn: 'It is good.' },
    { de: 'wir', pos: 'pronoun', en: 'we', hi: 'हम',
      ex: 'Wir sind Studenten.', exEn: 'We are students.' },
    { de: 'ihr', pos: 'pronoun', en: 'you (plural)', hi: 'तुम सब',
      ex: 'Woher kommt ihr?', exEn: 'Where do you all come from?' },
    { de: 'Sie', pos: 'pronoun', en: 'you (formal)', hi: 'आप',
      ex: 'Wer sind Sie?', exEn: 'Who are you? (formal)' },
    { de: 'sein', pos: 'verb', en: 'to be', hi: 'होना',
      ex: 'Ich bin müde.', exEn: 'I am tired.',
      conj: { praesens: 'ist', praeteritum: 'war', perfekt: 'ist gewesen' } },
    { de: 'heißen', pos: 'verb', en: 'to be called', hi: 'कहलाना',
      ex: 'Ich heiße Anna. Wie heißt du?', exEn: 'My name is Anna. What is yours?',
      conj: { praesens: 'heißt', praeteritum: 'hieß', perfekt: 'hat geheißen' } },
    { de: 'kommen', pos: 'verb', en: 'to come (from)', hi: 'आना',
      ex: 'Ich komme aus Indien.', exEn: 'I come from India.',
      conj: { praesens: 'kommt', praeteritum: 'kam', perfekt: 'ist gekommen' } },
    { de: 'wohnen', pos: 'verb', en: 'to live, reside', hi: 'रहना',
      ex: 'Ich wohne in Delhi.', exEn: 'I live in Delhi.',
      conj: { praesens: 'wohnt', praeteritum: 'wohnte', perfekt: 'hat gewohnt' } },
    { de: 'fragen', pos: 'verb', en: 'to ask', hi: 'पूछना',
      ex: 'Ich frage: Wer bist du?', exEn: 'I ask: who are you?',
      conj: { praesens: 'fragt', praeteritum: 'fragte', perfekt: 'hat gefragt' } },
    { de: 'antworten', pos: 'verb', en: 'to answer', hi: 'जवाब देना',
      ex: 'Anna antwortet schnell.', exEn: 'Anna answers quickly.',
      conj: { praesens: 'antwortet', praeteritum: 'antwortete', perfekt: 'hat geantwortet' } },
    { de: 'kennen', pos: 'verb', en: 'to know (a person)', hi: 'जानना (किसी को)',
      ex: 'Kennst du Anna?', exEn: 'Do you know Anna?',
      conj: { praesens: 'kennt', praeteritum: 'kannte', perfekt: 'hat gekannt' } },
    { de: 'vorstellen', pos: 'verb', en: 'to introduce', hi: 'परिचय देना',
      ex: 'Ich stelle mich vor: Ich bin Rohan.', exEn: 'Let me introduce myself: I am Rohan.',
      conj: { praesens: 'stellt vor', praeteritum: 'stellte vor', perfekt: 'hat vorgestellt' } },
    { de: 'raten', pos: 'verb', en: 'to guess', hi: 'अनुमान लगाना',
      ex: 'Rate mal: Wer bin ich?', exEn: 'Take a guess: who am I?',
      conj: { praesens: 'rät', praeteritum: 'riet', perfekt: 'hat geraten' } },
    { de: 'variieren', pos: 'verb', en: 'to vary', hi: 'बदलना',
      ex: 'Die Antworten variieren.', exEn: 'The answers vary.',
      conj: { praesens: 'variiert', praeteritum: 'variierte', perfekt: 'hat variiert' } },
    { de: 'mein/meine', pos: 'possessive', en: 'my', hi: 'मेरा / मेरी',
      ex: 'Mein Name ist Anna.', exEn: 'My name is Anna.' },
    { de: 'dein/deine', pos: 'possessive', en: 'your (informal)', hi: 'तुम्हारा / तुम्हारी',
      ex: 'Wie ist dein Name?', exEn: 'What is your name?' },
    { de: 'aus', pos: 'preposition', en: 'from', hi: 'से',
      ex: 'Ich komme aus Indien.', exEn: 'I come from India.' },
    { de: 'in', pos: 'preposition', en: 'in', hi: 'में',
      ex: 'Ich wohne in Delhi.', exEn: 'I live in Delhi.' },
    { de: 'auf', pos: 'preposition', en: 'in (a language); on', hi: 'पर / में (भाषा)',
      ex: 'Auf Deutsch, bitte!', exEn: 'In German, please!' },
    { de: 'für', pos: 'preposition', en: 'for', hi: 'के लिए',
      ex: 'Das ist für dich.', exEn: 'That is for you.' },
    { de: 'Name', art: 'der', gender: 'm', plural: 'Namen', pos: 'noun', en: 'name', hi: 'नाम',
      ex: 'Mein Name ist Anna.', exEn: 'My name is Anna.' },
    { de: 'Vorname', art: 'der', gender: 'm', plural: 'Vornamen', pos: 'noun', en: 'first name', hi: 'पहला नाम',
      ex: 'Mein Vorname ist Anna.', exEn: 'My first name is Anna.' },
    { de: 'Nachname', art: 'der', gender: 'm', plural: 'Nachnamen', pos: 'noun', en: 'last name', hi: 'उपनाम',
      ex: 'Mein Nachname ist Klein.', exEn: 'My last name is Klein.' },
    { de: 'Person', art: 'die', gender: 'f', plural: 'Personen', pos: 'noun', en: 'person', hi: 'व्यक्ति',
      ex: 'Wer ist diese Person?', exEn: 'Who is this person?' },
    { de: 'Partner', art: 'der', gender: 'm', plural: 'Partner', pos: 'noun', en: 'partner (m)', hi: 'साथी (पुरुष)',
      ex: 'Frag deinen Partner!', exEn: 'Ask your partner!' },
    { de: 'Partnerin', art: 'die', gender: 'f', plural: 'Partnerinnen', pos: 'noun', en: 'partner (f)', hi: 'साथी (स्त्री)',
      ex: 'Meine Partnerin heißt Lena.', exEn: 'My partner is called Lena.' },
    { de: 'Antwort', art: 'die', gender: 'f', plural: 'Antworten', pos: 'noun', en: 'answer', hi: 'जवाब',
      ex: 'Die Antwort ist richtig.', exEn: 'The answer is correct.' },
    { de: 'Telefon', art: 'das', gender: 'n', plural: 'Telefone', pos: 'noun', en: 'telephone', hi: 'टेलीफ़ोन',
      ex: 'Meine Nummer ist auf dem Telefon.', exEn: 'My number is on the phone.' },
    { de: 'Reiseführer', art: 'der', gender: 'm', plural: 'Reiseführer', pos: 'noun', en: 'travel guide (m)', hi: 'गाइड (पुरुष)',
      ex: 'Der Reiseführer kommt aus Berlin.', exEn: 'The travel guide comes from Berlin.' },
    { de: 'Reiseführerin', art: 'die', gender: 'f', plural: 'Reiseführerinnen', pos: 'noun', en: 'travel guide (f)', hi: 'गाइड (स्त्री)',
      ex: 'Die Reiseführerin heißt Lena.', exEn: 'The travel guide is called Lena.' },
    { de: 'Personalpronomen', art: 'das', gender: 'n', plural: 'Personalpronomen', pos: 'noun', en: 'personal pronoun', hi: 'पुरुषवाचक सर्वनाम',
      ex: '"Ich" ist ein Personalpronomen.', exEn: '"Ich" is a personal pronoun.' },
    { de: 'Subjekt', art: 'das', gender: 'n', plural: 'Subjekte', pos: 'noun', en: 'subject', hi: 'कर्ता',
      ex: 'Das Subjekt steht vorne.', exEn: 'The subject comes first.' },
    { de: 'Verb', art: 'das', gender: 'n', plural: 'Verben', pos: 'noun', en: 'verb', hi: 'क्रिया',
      ex: 'Das Verb "sein" ist wichtig.', exEn: 'The verb "sein" is important.' },
    { de: 'Aussagesatz', art: 'der', gender: 'm', plural: 'Aussagesätze', pos: 'noun', en: 'declarative sentence', hi: 'कथन वाक्य',
      ex: 'Ein Aussagesatz endet mit einem Punkt.', exEn: 'A declarative sentence ends with a full stop.' }
  ],

  // ---------- Pronouns & sein (rule cards → accordion) ----------
  grammar: [
    {
      title: 'The personal pronouns (Personalpronomen)',
      whatIsIt: 'A <b>Personalpronomen</b> is the small word that stands in for a person as the <span class="de r-subject">subject</span> of a sentence — I, you, he, she. German has eight of them, and they matter more than in English, because <b>the verb changes shape to match whichever one you pick</b>.',
      body: [
        'Learn them as one block, in this order. Every verb table you meet from now on — in this chapter and every chapter after it — is printed in exactly this order, so the order itself becomes a memory aid.'
      ],
      goldenRule: 'Choose the pronoun first, then the verb follows it. Never the other way round.',
      table: {
        head: ['Pronoun', 'English', 'Use'],
        rows: [
          ['<span class="de r-subject">ich</span>', 'I', 'yourself'],
          ['<span class="de r-subject">du</span>', 'you (informal)', 'one friend'],
          ['<span class="de r-subject">er / sie / es</span>', 'he / she / it', 'one other person/thing'],
          ['<span class="de r-subject">wir</span>', 'we', 'you + others'],
          ['<span class="de r-subject">ihr</span>', 'you (plural)', 'several friends'],
          ['<span class="de r-subject">sie / Sie</span>', 'they / you (formal)', 'others / polite address']
        ]
      },
      note: 'Three of them look identical: <b>sie</b> = she, <b>sie</b> = they, and capital <b>Sie</b> = formal you. You never actually have to guess — the verb settles it. <span class="de">sie ist</span> can only be "she is"; <span class="de">sie sind</span> can only be "they are" or "you are". And formal <b>Sie</b> is capitalised wherever it stands in the sentence.',
      compare: {
        intro: 'The three <i>sie</i> forms, told apart by the verb alone:',
        head: ['You see', 'Verb', 'It means'],
        rows: [
          ['<span class="de">sie</span>', '<span class="de">ist</span>', 'she is'],
          ['<span class="de">sie</span>', '<span class="de">sind</span>', 'they are'],
          ['<span class="de">Sie</span> (capital)', '<span class="de">sind</span>', 'you are (formal)']
        ]
      },
      hinglish: '<b>Personalpronomen</b> = wo chhota word jo subject ki jagah aata hai. Aath yaad karo, aur isi order mein: ich (main), du (tum), er/sie/es (vah), wir (hum), ihr (tum sab), sie (ve), Sie (aap). Aage ke saare verb tables isi order mein aayenge, isliye order khud hi yaad rakhne mein madad karta hai. Teen roop ek jaise dikhte hain — <b>sie</b>=vah (stri), <b>sie</b>=ve, <b>Sie</b>=aap — par guess karne ki zarurat nahi: <b>verb</b> bata deta hai. <span class="de">sie ist</span> = vah hai; <span class="de">sie sind</span> = ve hain / aap hain.',
      memoryTrick: 'Verb hi <b>sie</b> ka matlab kholta hai: <b>ist</b> = akeli (vah), <b>sind</b> = kai (ve/aap).',
      recap: [
        'Eight pronouns, always learned in the same order.',
        'The verb changes to match the pronoun — pronoun first, verb after.',
        '<b>sie ist</b> = she is · <b>sie sind</b> = they are · <b>Sie sind</b> = you are (formal).'
      ],
      connect: { from: 'Chapter 4', text: 'You already met three of these endings when choosing between <span class="de">du</span> and <span class="de">Sie</span>: ich <b>-e</b>, du <b>-st</b>, Sie <b>-en</b>. This chapter fills in the rest of the row.' }
    },
    {
      title: 'The verb "sein" (to be)',
      whatIsIt: 'German\'s most-used verb is <span class="de r-verb">sein</span> (to be), and like English "to be" it is completely irregular — the forms do not look like the infinitive at all. That is not bad news: it means there are only six short words, and you already use their English equivalents without thinking.',
      body: [
        'You need this verb for almost everything in this chapter: who you are, where you are, how old you are, what you are.'
      ],
      goldenRule: 'Six forms, three of them the same word: <b>bin · bist · ist · sind · seid · sind</b>.',
      table: {
        head: ['Pronoun', 'sein', 'Example'],
        rows: [
          ['ich', '<span class="de r-verb">bin</span>', 'Ich <b>bin</b> Anna.'],
          ['du', '<span class="de r-verb">bist</span>', 'Du <b>bist</b> Rohan.'],
          ['er/sie/es', '<span class="de r-verb">ist</span>', 'Sie <b>ist</b> Lehrerin.'],
          ['wir', '<span class="de r-verb">sind</span>', 'Wir <b>sind</b> hier.'],
          ['ihr', '<span class="de r-verb">seid</span>', 'Ihr <b>seid</b> Studenten.'],
          ['sie/Sie', '<span class="de r-verb">sind</span>', 'Sie <b>sind</b> Herr Wolan.']
        ]
      },
      note: 'The whole table is really two groups. The <b>b-</b> forms are singular and personal: <b>bin, bist</b>. The <b>s-</b> forms are the rest: <b>ist, sind, seid, sind</b>. And three pronouns share one word — <b>wir</b>, <b>sie</b> and <b>Sie</b> all take <b>sind</b>, so learning that one form covers half the table.',
      why: 'Irregular verbs are irregular because they are old and used constantly — the same reason English kept "am / are / is" instead of regularising it. High use protects odd shapes. So the most irregular verb is also the one you will hear most often, which is exactly what makes it stick.',
      hinglish: '<b>sein</b> (hona) German ka sabse zyada use hone wala verb hai, aur bilkul irregular hai — forms infinitive jaisi dikhti hi nahi. Par ghabrane ki baat nahi: sirf chhe chhote shabd hain, aur teen pronoun ek hi shabd share karte hain. Do group bana lo: <b>b-</b> wale singular aur personal hain (<b>bin, bist</b>), aur <b>s-</b> wale baaki sab (<b>ist, sind, seid, sind</b>). <b>wir</b>, <b>sie</b> aur <b>Sie</b> — teeno <b>sind</b>, matlab ek form se aadhi table cover ho gayi. Galti se bhi "ich bist" ya "du bin" nahi.',
      memoryTrick: '<b>bin–bist</b> sirf main aur tum ke liye. Uske baad sab <b>s</b> se: <b>ist · sind · seid · sind</b>.',
      recap: [
        'ich <b>bin</b> · du <b>bist</b> · er/sie/es <b>ist</b>.',
        'wir <b>sind</b> · ihr <b>seid</b> · sie/Sie <b>sind</b>.',
        'Three pronouns share <b>sind</b> — learn that one and half the table is done.'
      ]
    },
    {
      title: 'Other verbs: what er, sie and es do',
      whatIsIt: 'Once you can talk about yourself, the next step is talking <i>about</i> someone. For ordinary verbs — not <span class="de">sein</span> — the <b>er / sie / es</b> form simply adds <b>-t</b> to the stem.',
      body: [
        'You only need this one extra ending in this chapter, so that you can say what a third person does: <span class="de">Sie kommt aus Indien.</span>'
      ],
      goldenRule: 'ich <b>-e</b> · du <b>-st</b> · er/sie/es <b>-t</b>.',
      formula: [
        'komm- :  ich komm<b>e</b>  ·  du komm<b>st</b>  ·  sie komm<b>t</b>',
        'wohn- :  ich wohn<b>e</b>  ·  du wohn<b>st</b>  ·  er wohn<b>t</b>',
        'but sein:  ich <b>bin</b>  ·  du <b>bist</b>  ·  sie <b>ist</b>   (irregular)'
      ],
      table: {
        head: ['About yourself', 'To a friend', 'About someone else'],
        rows: [
          ['<span class="de">Ich komme aus Indien.</span>', '<span class="de">Woher kommst du?</span>', '<span class="de">Sie kommt aus Indien.</span>'],
          ['<span class="de">Ich wohne in Berlin.</span>', '<span class="de">Wo wohnst du?</span>', '<span class="de">Er wohnt in Berlin.</span>'],
          ['<span class="de">Ich heiße Anna.</span>', '<span class="de">Wie heißt du?</span>', '<span class="de">Sie heißt Lena.</span>']
        ]
      },
      note: 'Notice <span class="de">heißen</span>: <b>du heißt</b> and <b>sie heißt</b> come out identical, because a stem ending in <b>ß</b> cannot take <i>-sst</i>. Only the pronoun tells you which one is meant — one more reason German never drops the pronoun.',
      hinglish: 'Apne baare mein bol liya, ab <b>kisi aur</b> ke baare mein. Aam verbs mein — <span class="de">sein</span> ko chhod kar — <b>er/sie/es</b> ke saath sirf <b>-t</b> lagta hai: <span class="de">sie komm<b>t</b></span>, <span class="de">er wohn<b>t</b></span>, <span class="de">sie heiß<b>t</b></span>. Poora pattern: ich <b>-e</b>, du <b>-st</b>, er/sie/es <b>-t</b>. Ek dilchasp baat: <span class="de">heißen</span> mein <b>du heißt</b> aur <b>sie heißt</b> ek jaise ban jaate hain — isliye pronoun girana kabhi possible nahi.',
      memoryTrick: '<b>-e, -st, -t</b> — main, tum, vah. Teen ending, teen log.',
      recap: [
        'Regular verbs: ich <b>-e</b>, du <b>-st</b>, er/sie/es <b>-t</b>.',
        '<span class="de">sein</span> ignores this pattern entirely — it has its own six forms.'
      ],
      connect: { from: 'Chapter 9', text: 'Chapter 9 (<i>Verben</i>) completes this table with <b>wir</b>, <b>ihr</b> and <b>sie/Sie</b>, and covers the verbs whose stem changes. For now, these three endings are all you need.' }
    },
    {
      title: 'Asking & answering: who, name, where',
      whatIsIt: 'Identity runs on fixed question-and-answer pairs. Learn each pair together and the same words serve you whether you are asking or answering.',
      body: [
        'Match the register throughout: <b>du</b> forms with a classmate, <b>Sie</b> forms with anyone formal.'
      ],
      goldenRule: 'Wer → a person · Wie heißt … → a name · Woher → where from · Wo → where at.',
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['<span class="de r-question">Wer bist du?</span> / <span class="de r-question">Wer sind Sie?</span>', '<span class="de r-subject">Ich bin</span> Anna.'],
          ['<span class="de r-question">Wie heißt du?</span> / <span class="de r-question">Wie heißen Sie?</span>', '<span class="de r-subject">Ich heiße</span> Anna Klein.'],
          ['<span class="de r-question">Wie ist dein Name?</span>', '<span class="de r-subject">Mein Name ist</span> Anna.'],
          ['<span class="de r-question">Woher kommst du?</span>', '<span class="de r-subject">Ich komme aus</span> Indien.'],
          ['<span class="de r-question">Wo wohnst du?</span>', '<span class="de r-subject">Ich wohne in</span> Delhi.']
        ]
      },
      note: 'A full name splits into <b>Vorname</b> (first name) + <b>Nachname</b> (last name): <i>Anna Klein</i> = Vorname Anna, Nachname Klein. Note also the pair <b>Woher</b> (where <i>from</i> — takes <b>aus</b>) and <b>Wo</b> (where <i>at</i> — takes <b>in</b>). One letter apart, two different questions.',
      hinglish: 'Identity fixed jodi mein chalti hai — sawaal aur jawaab saath seekho, phir ek hi shabd dono kaam kar dega. <b>Wer bist du?</b> → Ich bin … <b>Wie heißt du?</b> → Ich heiße … <b>Wie ist dein Name?</b> → Mein Name ist … Do sawaal jo ek letter se alag hain: <b>Woher</b> (kahaan <b>se</b> — jawaab mein <b>aus</b>) aur <b>Wo</b> (kahaan — jawaab mein <b>in</b>). Naam ke do hisse: <b>Vorname</b> (pehla) + <b>Nachname</b> (last).',
      memoryTrick: '<b>Woher</b> mein "her" hai = <b>se</b> aana (aus). <b>Wo</b> akela = <b>mein</b> hona (in).',
      recap: [
        '<b>Wer?</b> → Ich bin … · <b>Wie heißt du?</b> → Ich heiße …',
        '<b>Woher?</b> → aus + place · <b>Wo?</b> → in + place.',
        'Full name = <b>Vorname</b> + <b>Nachname</b>.'
      ]
    },
    {
      title: 'Word order: the verb is always second',
      whatIsIt: 'German statements have one unbreakable habit: the <span class="de r-verb">Verb</span> sits in <b>second position</b>. Not the second word — the second <i>slot</i>. Whatever fills the first slot, the verb comes straight after it.',
      body: [
        'This is the rule that makes German feel different from English, and it holds for the whole language. Get it now and dozens of later chapters cost you nothing.'
      ],
      goldenRule: 'One idea, then the <b>verb</b>, then everything else. The verb never moves from slot 2.',
      formula: [
        '[ 1 ] + [ VERB ] + [ rest ]',
        'Ich          | heiße  | Anna.',
        'Mein Name    | ist    | Anna Klein.      ← three words, still slot 1',
        'Jetzt        | wohne  | ich in Berlin.   ← subject moved to slot 3'
      ],
      table: {
        head: ['Slot 1 (one idea)', 'Slot 2 (verb)', 'Rest'],
        rows: [
          ['<span class="de r-subject">Ich</span>', '<span class="de r-verb">heiße</span>', 'Anna.'],
          ['<span class="de r-subject">Mein Name</span>', '<span class="de r-verb">ist</span>', 'Anna Klein.'],
          ['<span class="de r-subject">Ich</span>', '<span class="de r-verb">wohne</span>', 'in Delhi.'],
          ['<span class="de r-subject">Wir</span>', '<span class="de r-verb">kommen</span>', 'aus Indien.'],
          ['<span class="de r-time">Jetzt</span>', '<span class="de r-verb">wohne</span>', '<span class="de r-subject">ich</span> in Berlin.']
        ]
      },
      note: 'Two things that trip people up. First, <b>slot 1 can hold several words</b> — <i>Mein Name</i> is three syllables and two words, but it is one idea, so it fills slot 1 and <b>ist</b> is still second. Second, slot 1 does not have to be the subject: put <i>Jetzt</i> first, as the Story does, and the subject slides behind the verb. The verb itself never moves.',
      why: 'German can shuffle almost everything else in the sentence, so it needs one fixed landmark for the listener. The verb is that landmark: hear the second slot and you know what is happening, no matter how the rest is arranged. Possessives are the one thing that never separate from their noun — <i>mein Name</i>, <i>dein Vorname</i> travel together as a unit.',
      hinglish: 'German statement ka ek hi pakka rule hai: verb doosri jagah par aata hai. Dhyaan do ki yeh doosra <i>shabd</i> nahi, balki doosra <b>slot</b> hai. Pehle slot mein jo bhi daalo, verb turant uske baad aayega. Do cheezein log galat samajhte hain. Pehli, ki pehla slot ek se zyada shabd le sakta hai — <i>Mein Name</i> do shabd hain par ek hi idea hai, isliye <b>ist</b> phir bhi doosre slot par rehta hai. Doosri, ki pehle slot mein subject hona zaroori nahi — agar <i>Jetzt</i> aage rakh do to subject verb ke peeche chala jaata hai: <span class="de">Jetzt wohne ich in Berlin</span>. Verb khud apni jagah nahi chhodta. Wajah simple hai: German baaki sab kuch idhar-udhar kar sakta hai, isliye sunne wale ko ek fixed point chahiye, aur wahi point verb hai.',
      memoryTrick: 'Verb ki seat <b>number 2</b> reserved hai. Pehli seat par kuch bhi baithe, verb apni seat nahi chhodta.',
      recap: [
        'The verb is always in <b>slot 2</b> of a statement.',
        'Slot 1 is one <b>idea</b>, not one word — <i>Mein Name</i> counts as one.',
        'If something else takes slot 1, the subject moves <b>after</b> the verb.'
      ],
      connect: { from: 'the next chapters', text: 'Chapter 6 (<i>W-Fragen</i>) uses this same slot rule for questions, and Chapter 19 (<i>Satzposition</i>) returns to it in full. Everything there is built on the sentence you just learned.' }
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      whatIsIt: 'Four habits, and two of them come straight from Hindi sentence structure — which makes them easy to predict and easy to catch.',
      body: [ 'Each row is a rule from this chapter, seen from the wrong side.' ],
      mistakes: [
        { wrong: 'Ich bist Anna.', right: 'Ich bin Anna.', why: 'The verb must match the pronoun: ich → bin, du → bist. Pick the pronoun first, then read its form off the table.' },
        { wrong: 'Bin Anna.', right: 'Ich bin Anna.', why: 'Hindi can drop "main"; German cannot drop "ich". The subject pronoun is compulsory in every statement.' },
        { wrong: 'Ich Anna bin.', right: 'Ich bin Anna.', why: 'Hindi puts the verb at the end. German puts it in slot 2 of a statement — that is the habit to rebuild.' },
        { wrong: 'Kommen sie aus Indien? (meaning "do you?")', right: 'Kommen Sie aus Indien?', why: 'Lower-case sie is "they"; capital Sie is the polite "you". In writing the capital is the only thing separating them.' }
      ],
      hinglish: 'Chaar galtiyan hoti hain, aur do seedhe Hindi ke structure se aati hain — isliye pehle se pata hai kahan sambhalna hai. Pehli, verb ko pronoun se match karna: <b>ich bin</b> sahi hai, "ich bist" nahi. Doosri, subject girana — Hindi mein "main" chhod sakte hain, par German mein <b>ich</b> nahi chhodte. Teesri, verb ko sentence ke end mein bhej dena — statement mein woh doosri jagah par rehta hai: <span class="de">Ich bin Anna</span>, na ki "Ich Anna bin". Aur chauthi, likhte waqt <b>Sie</b> capital rakhna, kyunki chhota "sie" ka matlab "ve" ho jaata hai.',
      memoryTrick: 'Chaar check: verb pronoun se match? subject likha? verb slot 2 mein? <b>Sie</b> capital?'
    }
  ],
  // ---------- Reading passage (dialogue, clickable words) ----------
  reading: {
    title: 'Im Sprachkurs',
    titleEn: 'In the language course',
    tokens: [
      { w: 'So', role: 'r-adverb', en: 'so, right', hi: 'तो', pron: 'zo', type: 'Discourse word', why: 'A soft opener: "So, …" = "Right, let us begin."', ex: 'So, wer bist du?', exEn: 'So, who are you?' },
      { w: ',', plain: true },
      { w: 'wer', role: 'r-question', en: 'who', hi: 'कौन', pron: 'vair', type: 'Question word', why: 'w = "v". "Wer?" asks for a person.', ex: 'Wer bist du?', exEn: 'Who are you?' },
      { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)', why: 'sein for "du": du bist. Pairs with the pronoun du.', ex: 'Du bist Rohan.', exEn: 'You are Rohan.', conj: { praesens: 'ist', praeteritum: 'war', perfekt: 'ist gewesen' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'du', role: 'r-subject', case: 'Nominativ', en: 'you (informal)', hi: 'तुम', pron: 'doo', type: 'Pronoun · informal', why: 'Informal "you" — classmates use du.', ex: 'Wer bist du?', exEn: 'Who are you?' },
      { w: '?', plain: true },
      { w: 'Ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject', why: 'The subject pronoun "I"; capital here as it starts the answer.', ex: 'Ich bin Rohan.', exEn: 'I am Rohan.' },
      { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)', why: 'sein for "ich": ich bin. Used to give your name.', ex: 'Ich bin Rohan.', exEn: 'I am Rohan.', conj: { praesens: 'ist', praeteritum: 'war', perfekt: 'ist gewesen' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'Rohan', role: 'r-object', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name (Vorname)', why: 'First name given in answer to "Wer bist du?"', ex: 'Mein Vorname ist Rohan.', exEn: 'My first name is Rohan.' },
      { w: '.', plain: true },
      { w: 'Mein', role: 'r-article', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive', why: 'mein (my) sits before the noun Name.', ex: 'Mein Name ist Rohan Sharma.', exEn: 'My name is Rohan Sharma.' },
      { w: 'Name', role: 'r-subject', case: 'Nominativ', en: 'name', hi: 'नाम', pron: 'NAH-muh', type: 'Noun · subject', why: 'The subject of "Mein Name ist …".', ex: 'Mein Name ist Rohan.', exEn: 'My name is Rohan.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er/es)', why: 'sein for er/sie/es: ist. Here the subject is "Name".', ex: 'Der Name ist schön.', exEn: 'The name is nice.', advanced: { synonyms: [], opposites: [] } },
      { w: 'Rohan', role: 'r-object', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Vorname', why: 'first name (Vorname).', ex: 'Vorname: Rohan.', exEn: 'First name: Rohan.' },
      { w: 'Sharma', role: 'r-object', en: 'Sharma', hi: 'शर्मा', pron: 'SHAR-mah', type: 'Nachname', why: 'last name (Nachname). Full name = Vorname + Nachname.', ex: 'Nachname: Sharma.', exEn: 'Last name: Sharma.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject', why: 'Subject pronoun.', ex: 'Ich wohne in Delhi.', exEn: 'I live in Delhi.' },
      { w: 'komme', role: 'r-verb', en: 'come', hi: 'आता हूँ', pron: 'KO-muh', type: 'Verb · 1st person', why: 'From kommen: "Ich komme aus …" = I come from …', ex: 'Ich komme aus Indien.', exEn: 'I come from India.', conj: { praesens: 'kommt', praeteritum: 'kam', perfekt: 'ist gekommen' }, advanced: { synonyms: [], opposites: ['gehen'] } },
      { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'owss', type: 'Preposition + dat.', why: 'Origin uses aus + place.', ex: 'aus Indien', exEn: 'from India' },
      { w: 'Indien', role: 'r-place', case: 'Dativ', en: 'India', hi: 'भारत', pron: 'IN-dee-en', type: 'Noun · place', why: 'Country of origin.', ex: 'Ich komme aus Indien.', exEn: 'I come from India.' },
      { w: 'und', role: 'r-preposition', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'final d → "t".', ex: 'und ich wohne in Delhi', exEn: 'and I live in Delhi' },
      { w: 'wohne', role: 'r-verb', en: 'live', hi: 'रहता हूँ', pron: 'VOH-nuh', type: 'Verb · 1st person', why: 'From wohnen: "Ich wohne in …" = I live in …', ex: 'Ich wohne in Delhi.', exEn: 'I live in Delhi.', conj: { praesens: 'wohnt', praeteritum: 'wohnte', perfekt: 'hat gewohnt' }, advanced: { synonyms: ['leben'], opposites: [] } },
      { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition', why: 'Residence uses in + place.', ex: 'in Delhi', exEn: 'in Delhi' },
      { w: 'Delhi', role: 'r-place', case: 'Dativ', en: 'Delhi', hi: 'दिल्ली', pron: 'DEH-li', type: 'Noun · place', why: 'The city of residence, after in.', ex: 'Ich wohne in Delhi.', exEn: 'I live in Delhi.' },
      { w: '.', plain: true }
    ],
    translation: 'So, who are you? — I am Rohan. My name is Rohan Sharma. I come from India and I live in Delhi.'
  },

  // ---------- Listening ----------
  listening: {
    tokens: [
      { w: 'Lena' },
      { w: ',', plain: true },
      { w: 'suchst' },
      { w: 'du' },
      { w: 'eine' },
      { w: 'Lerngruppe' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: '!', plain: true },
      { w: 'Ich' },
      { w: 'bin' },
      { w: 'Lena' },
      { w: ',', plain: true },
      { w: 'aus' },
      { w: 'Indien' },
      { w: ',', plain: true },
      { w: 'einundzwanzig' },
      { w: 'Jahre' },
      { w: 'alt' },
      { w: '.', plain: true },
      { w: 'Perfekt' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'bin' },
      { w: 'auch' },
      { w: 'neu' },
      { w: 'in' },
      { w: 'Berlin' },
      { w: '.', plain: true },
      { w: 'Toll' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'lernen' },
      { w: 'wir' },
      { w: 'zusammen' },
      { w: '!', plain: true }
    ],
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_005_L001', speaker: 'Paul', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Lena, suchst du eine Lerngruppe?', en: 'Lena, are you looking for a study group?' },
      { id: 'A1_005_L002', speaker: 'Lena', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja! Ich bin Lena, aus Indien, einundzwanzig Jahre alt.', en: 'Yes! I am Lena, from India, twenty-one years old.' },
      { id: 'A1_005_L003', speaker: 'Paul', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Perfekt, ich bin auch neu in Berlin.', en: 'Perfect, I am also new in Berlin.' },
      { id: 'A1_005_L004', speaker: 'Lena', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Toll, dann lernen wir zusammen!', en: 'Great, then we\'ll study together!' }
    ],
    transcript: 'Lena, suchst du eine Lerngruppe? Ja! Ich bin Lena, aus Indien, einundzwanzig Jahre alt. Perfekt, ich bin auch neu in Berlin. Toll, dann lernen wir zusammen!',
    translation: 'Lena, are you looking for a study group? Yes! I am Lena, from India, twenty-one years old. Perfect, I am also new in Berlin. Great, then we\'ll study together!',
    questions: [
      { q: 'Was sucht Paul?', qEn: 'What is Paul looking for?', options: ['Ein Café', 'Eine Lerngruppe', 'Einen Job', 'Eine Wohnung'], optionsEn: ['A café', 'A study group', 'A job', 'An apartment'], answer: 1,
        explain: '"Suchst du eine Lerngruppe?" — he asks if she is looking for a study group too.' },
      { q: 'Was beschließen Lena und Paul zu machen?', qEn: 'What do Lena and Paul decide to do?', options: ['Zusammen reisen', 'Zusammen lernen', 'Zusammen arbeiten', 'Zusammen kochen'], optionsEn: ['Travel together', 'Study together', 'Work together', 'Cook together'], answer: 1,
        explain: '"Dann lernen wir zusammen!"' }
    ]
  },

  speaking: [
    { task: "Eine Lerngruppe fragt: Wer bist du?", taskEn: "A study group asks: who are you?", de: "Ich bin Lena. Ich komme aus Indien und wohne in Berlin.", en: "I'm Lena. I'm from India and I live in Berlin." },
    { task: "Du bist auch neu im Kurs. Frag deinen Partner zwei Sachen.", taskEn: "You're new in the class too. Ask your partner two things.", de: "Wie heißt du? Und woher kommst du?", en: "What's your name? And where are you from?" },
    { task: "Die Lehrerin fragt: Wer ist das neben dir?", taskEn: "The teacher asks: who is that next to you?", de: "Das ist Anna. Sie kommt aus Indien.", en: "That's Anna. She's from India." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short profile (a Goethe A1 mini-task) of four lines: your name (Vorname + Nachname), where you come from, where you live, and your age. Use full sentences with the correct sein and pronoun forms.',
    starters: ['Ich heiße … / Mein Name ist …', 'Ich komme aus …', 'Ich wohne in … und ich bin … Jahre alt.'],
    placeholder: 'Ich heiße … Mein Nachname ist …',
    minWords: 14
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct form: "Du ___ Rohan."',
      options: ['bin', 'bist', 'ist', 'sind'],
      answer: 1,
      explain: 'du takes bist: "Du bist Rohan."'
    },
    gap: {
      // sein conjugation in a mini-dialogue.
      sentence: ['Ich ', ' Anna. Wer ', ' du?'],
      gaps: [ { answer: 'bin', accepts: ['bin'] }, { answer: 'bist', accepts: ['bist'] } ],
      explain: 'ich bin … / Wer bist du? — match each pronoun to its sein form.'
    },
    match: {
      q: 'Match each pronoun to its "sein" form.',
      pairs: [
        { noun: 'ich', art: 'bin' },
        { noun: 'du', art: 'bist' },
        { noun: 'er/sie/es', art: 'ist' },
        { noun: 'wir', art: 'sind' }
      ]
    },
    builder: {
      target: 'Build: "My name is Anna Klein."',
      bank: ['ist', 'Mein', 'Anna Klein', 'Name'],
      answer: ['Mein', 'Name', 'ist', 'Anna Klein'],
      roles: { 'Mein': 'r-article', 'Name': 'r-subject', 'ist': 'r-verb', 'Anna Klein': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which pronoun means "you" (formal)?', options: ['du', 'sie', 'Sie', 'ihr'], answer: 2,
      explain: 'Capital Sie is the formal "you"; du is informal, ihr is informal plural.' },
    { q: 'Complete: "Ich ___ Student."', options: ['bist', 'bin', 'ist', 'seid'], answer: 1,
      explain: 'ich bin — the ich-form of sein.' },
    { q: 'Which question asks for someone\'s name (informal)?', options: ['Wer sind Sie?', 'Wie heißt du?', 'Wo wohnst du?', 'Woher kommst du?'], answer: 1,
      explain: '"Wie heißt du?" asks an informal "you" for their name.' },
    { q: 'In "Mein Name ist Anna", the verb "ist" is in position…', options: ['one', 'two', 'three', 'last'], answer: 1,
      explain: 'In a declarative sentence (Aussagesatz) the verb is always second.' },
    { q: 'A full name = …', options: ['Nachname only', 'Vorname + Nachname', 'Vorname only', 'Subjekt + Verb'], answer: 1,
      explain: 'Vorname (first name) + Nachname (last name) make the full name.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-subject', html: 'Eight pronouns carry every sentence: <span class="de">ich, du, er, sie, es, wir, ihr, Sie</span> — watch sie/sie/Sie.' },
    { c: 'r-verb', html: 'sein is irregular: <span class="de">ich bin, du bist, er/sie/es ist, wir/sie/Sie sind, ihr seid</span>.' },
    { c: 'r-object', html: 'Identity patterns: <span class="de">Ich bin …</span>, <span class="de">Mein Name ist …</span>, <span class="de">Ich komme aus …</span>, <span class="de">Ich wohne in …</span>.' }
  ],
  revisionTips: [
    'Say the full sein conjugation out loud once a day until it is automatic.',
    'Introduce yourself in four lines — name, origin, home, age — every morning.',
    'Whenever you read a German sentence, find the Subjekt and the Verb (always second).'
  ]
};

window.CHAPTER = CHAPTER;
