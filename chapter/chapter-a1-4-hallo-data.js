/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 1 · Chapter 4
   "Hallo!"  (Greetings, introductions & first conversations)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-4 word list (38 unique;
   "so" is listed twice in the source and merged here).
   Recycles Chapters 1–3 (Alphabet, Vokale, Zahlen) throughout.
============================================================ */
const CHAPTER = {
  id: 'a1-4-hallo',
  phase: 'A1 · Phase 1',
  number: 4,
  title: 'Hallo!',
  titleEn: 'Greetings & Introductions',
  description: 'Your first real conversation. Greet by the time of day, say who you are and where you are from, and choose the right register — du or Sie — so you sound polite from the very first word.',
  xp: 140,
  time: 40,
  difficulty: 'Beginner',
  nextChapter: { number: 5, title: 'Wer bist du?', titleEn: 'Who are you?' , href: 'chapter-a1-5-werbistdu.html' },

  prevChapter: { number: 3, title: 'Zahlen 0–100', titleEn: 'Numbers 0–100', href: 'chapter-a1-3-zahlen.html' },
  heroAnimationPath: null,

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A German hello has two settings: <span class="de r-subject">informal</span> (<span class="de">Hallo</span>, <span class="de">du</span>) for friends, and <span class="de r-object">formal</span> (<span class="de">Guten Tag</span>, <span class="de">Sie</span>, <span class="de">Herr/Frau</span>) for everyone else. Pick the right one and you are already polite.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is GREETINGS & INTRODUCTIONS (Hallo, Guten Tag, Ich heiße…, Ich komme aus…, du vs Sie, formal vs informal). ' +
    'The learner wrote a short self-introduction or greeting below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Introductions: "Ich heiße …" or "Ich bin …" for the name; "Ich komme aus …" for origin; "Ich wohne in …" for residence.\n' +
    '- Origin uses aus + place: "Ich komme aus Indien." Age: "Ich bin … Jahre alt."\n' +
    '- Register must be consistent: informal uses du / "Wie heißt du?" / "Woher kommst du?"; formal uses Sie / "Wie heißen Sie?" / "Woher kommen Sie?" — never mix du and Sie in one exchange.\n' +
    '- Titles: Herr (Mr) + surname, Frau (Mrs/Ms) + surname; both pair with Sie.\n' +
    '- Greetings by time: Guten Morgen (morning), Guten Tag (day), Guten Abend (evening), Gute Nacht (only at bedtime, not a greeting to start a talk).\n' +
    '- Nouns are capitalised; the polite Sie is always capitalised.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Register check:</b> one sentence on whether du/Sie (informal/formal) is used consistently.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you can greet, introduce yourself, and stay polite. Move on to <span class="de">Wer bist du?</span>',
    mid: 'Good. Re-read the formal-vs-informal card once, then continue.',
    low: 'Worth another pass — revisit the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'komme', role: 'r-verb' },
    { w: 'aus', role: 'r-preposition' }, { w: 'Indien', role: 'r-place' },
    { w: '.', role: '' }
  ],

  story: {
    eyebrow: 'Story-based learning',
    headline: 'The right <em>hello.</em>',
    intro: 'David arrives at his Berlin language school and meets the receptionist, Frau Klein. A first, formal conversation — Sie, Herr and Frau — and he learns exactly when Germans switch to the friendly du.',
    outcomes: ['Every word is clickable for meaning + audio', 'Hear the formal Sie in a real exchange', 'Learn when to switch to du and Hallo'],
    scene: 'Anmeldung an der Sprachschule — Berlin',
    femaleSpeakers: ['Frau Klein'],
    dialogue: [
      { speaker: 'Frau Klein', tokens: [
        { w: 'Guten', role: 'r-subject', en: 'good', hi: 'शुभ', pron: 'GOO-ten', type: 'Greeting (part)', why: 'Guten Tag = the polite daytime hello.', ex: 'Guten Tag!', exEn: 'Good day!' },
        { w: 'Tag', role: 'r-subject', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · greeting', why: 'final g → "k". Guten Tag = hello.', ex: 'Guten Tag, Herr Sharma.', exEn: 'Good day, Mr Sharma.' },
        { w: '!', plain: true },
        { w: 'Herzlich', role: 'r-adjective', en: 'warm(ly)', hi: 'हार्दिक', pron: 'HERTS-likh', type: 'Adjective', why: 'Herzlich willkommen = a warm welcome (fixed greeting).', ex: 'Herzlich willkommen!', exEn: 'A warm welcome!' },
        { w: 'willkommen', role: 'r-subject', en: 'welcome', hi: 'स्वागत', pron: 'vil-KO-men', type: 'Greeting', why: 'w = "v".', ex: 'Willkommen!', exEn: 'Welcome!' },
        { w: '!', plain: true }
      ], en: 'Good day! A warm welcome!', hi: 'Namaskar! Hardik swaagat!' },
      { speaker: 'David', side: 'right', tokens: [
        { w: 'Guten', role: 'r-subject', en: 'good', hi: 'शुभ', pron: 'GOO-ten', type: 'Greeting (part)' },
        { w: 'Tag', role: 'r-subject', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · greeting' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'heiße', role: 'r-verb', en: 'am called', hi: 'नाम है', pron: 'HY-suh', type: 'Verb · heißen (ich)', why: 'heißen = to be called: ich heiße …', ex: 'Ich heiße David.', exEn: 'My name is David.' },
        { w: 'David', role: 'r-name', en: 'David', hi: 'डेविड', pron: 'DAH-vit', type: 'Name · person' },
        { w: 'Sharma', role: 'r-name', en: 'Sharma', hi: 'शर्मा', pron: 'SHAR-ma', type: 'Name · surname' },
        { w: '.', plain: true }
      ], en: 'Good day! My name is David Sharma.', hi: 'Namaskar! Mera naam David Sharma hai.' },
      { speaker: 'Frau Klein', tokens: [
        { w: 'Freut', role: 'r-verb', en: 'pleases', hi: 'खुशी होती है', pron: 'froyt', type: 'Verb · freuen', why: 'Freut mich = pleased to meet you (fixed phrase).', ex: 'Freut mich!', exEn: 'Pleased to meet you!' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: ',', plain: true },
        { w: 'Herr', role: 'r-name', en: 'Mr', hi: 'श्रीमान', pron: 'hair', type: 'Title', why: 'Herr + surname = polite address for a man; pairs with Sie.', ex: 'Herr Sharma', exEn: 'Mr Sharma' },
        { w: 'Sharma', role: 'r-name', en: 'Sharma', hi: 'शर्मा', pron: 'SHAR-ma', type: 'Name · surname' },
        { w: '.', plain: true },
        { w: 'Woher', role: 'r-question', en: 'where from', hi: 'कहाँ से', pron: 'vo-HAIR', type: 'Question word', why: 'Woher …? asks about origin.', ex: 'Woher kommen Sie?', exEn: 'Where are you from?' },
        { w: 'kommen', role: 'r-verb', en: 'come', hi: 'आते हैं', pron: 'KO-men', type: 'Verb · kommen (Sie)', why: 'formal Sie form: kommen Sie.', ex: 'Woher kommen Sie?', exEn: 'Where do you come from?' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal', why: 'Sie = formal you; always capitalised.', ex: 'Kommen Sie aus Berlin?', exEn: 'Are you from Berlin?' },
        { w: '?', plain: true }
      ], en: 'Pleased to meet you, Mr Sharma. Where are you from?', hi: 'Aap se milkar khushi hui, Herr Sharma. Aap kahaan se hain?' },
      { speaker: 'David', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'komme', role: 'r-verb', en: 'come', hi: 'आता हूँ', pron: 'KO-muh', type: 'Verb · kommen (ich)', why: 'Ich komme aus … = I come from …', ex: 'Ich komme aus Indien.', exEn: 'I come from India.' },
        { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'owss', type: 'Preposition', why: 'origin uses aus + place, never "von".', ex: 'aus Indien', exEn: 'from India' },
        { w: 'Indien', role: 'r-place', en: 'India', hi: 'भारत', pron: 'IN-dee-en', type: 'Noun · country' },
        { w: '.', plain: true },
        { w: 'Jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb', why: 'a front adverb pushes the verb to position 2.', ex: 'Jetzt wohne ich hier.', exEn: 'Now I live here.' },
        { w: 'wohne', role: 'r-verb', en: 'live', hi: 'रहता हूँ', pron: 'VOH-nuh', type: 'Verb · wohnen (ich)', why: 'wohnen in + place = to live in.', ex: 'Ich wohne in Berlin.', exEn: 'I live in Berlin.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'Berlin', role: 'r-place', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Noun · city' },
        { w: '.', plain: true }
      ], en: 'I come from India. Now I live in Berlin.', hi: 'Main Bharat se hoon. Ab main Berlin mein rehta hoon.' },
      { speaker: 'Frau Klein', tokens: [
        { w: 'Wunderbar', role: 'r-adjective', en: 'wonderful', hi: 'शानदार', pron: 'VUN-der-bar', type: 'Adjective', why: 'wunderbar = wonderful.', ex: 'Wunderbar!', exEn: 'Wonderful!' },
        { w: '!', plain: true },
        { w: 'Ihr', role: 'r-subject', en: 'your (formal)', hi: 'आपका', pron: 'eer', type: 'Possessive · formal', why: 'Ihr = your (formal), capitalised like Sie.', ex: 'Ihr Deutsch', exEn: 'your German' },
        { w: 'Deutsch', role: 'r-subject', en: 'German', hi: 'जर्मन', pron: 'doytsh', type: 'Noun · language', why: 'Ihr Deutsch = your German (the language).', ex: 'Ihr Deutsch ist gut.', exEn: 'Your German is good.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb', why: 'schon = already.', ex: 'Das ist schon gut.', exEn: 'That is already good.' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Wonderful! Your German is already good.', hi: 'Shaandaar! Aapka German pehle se achha hai.' },
      { speaker: 'David', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thank you', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection', why: 'danke schön = thank you kindly.', ex: 'Danke schön!', exEn: 'Thank you!' },
        { w: 'schön', role: 'r-adjective', en: 'kindly', hi: 'बहुत', pron: 'shern', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: '?', plain: true },
        { w: 'Sie', role: 'r-subject', en: 'Sie (formal you)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal', why: 'Sie = formal you; always capitalised.', ex: 'Sind Sie Herr Klein?', exEn: 'Are you Mr Klein?' },
        { w: 'oder', role: 'r-conjunction', en: 'or', hi: 'या', pron: 'OH-der', type: 'Conjunction' },
        { w: 'du', role: 'r-subject', en: 'du (informal you)', hi: 'तुम', pron: 'doo', type: 'Pronoun · informal', why: 'du = informal you.', ex: 'Wer bist du?', exEn: 'Who are you?' },
        { w: '?', plain: true }
      ], en: 'Thank you! And me? "Sie" or "du"?', hi: 'Dhanyavaad! Aur main? "Sie" ya "du"?' },
      { speaker: 'Frau Klein', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Lehrerin', role: 'r-subject', en: 'teacher (f)', hi: 'शिक्षिका', pron: 'LAIR-er-in', type: 'Noun · fem.', why: 'die Lehrerin = female teacher.', ex: 'Sie ist die Lehrerin.', exEn: 'She is the teacher.' },
        { w: '—', plain: true },
        { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Adverb', why: 'here: please use …', ex: 'Bitte Sie!', exEn: 'Please use "Sie"!' },
        { w: 'Sie', role: 'r-subject', en: 'Sie (formal you)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: '.', plain: true },
        { w: 'Freunde', role: 'r-subject', en: 'friends', hi: 'दोस्त', pron: 'FROYN-duh', type: 'Noun · pl.', why: 'die Freunde = friends (subject here).', ex: 'Freunde sind du.', exEn: 'Friends are "du".' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein (pl.)' },
        { w: 'du', role: 'r-subject', en: 'du (informal you)', hi: 'तुम', pron: 'doo', type: 'Pronoun · informal' },
        { w: '.', plain: true }
      ], en: 'I am the teacher — please "Sie". Friends are "du".', hi: 'Main teacher hoon — kripya "Sie". Dost "du" hain.' },
      { speaker: 'David', side: 'right', tokens: [
        { w: 'Ah', role: 'r-adverb', en: 'ah', hi: 'अच्छा', pron: 'ah', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Hallo', role: 'r-subject', en: 'hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting', why: 'Hallo = the informal, friendly hello.', ex: 'Hallo, David!', exEn: 'Hello, David!' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'du', role: 'r-subject', en: 'du (informal you)', hi: 'तुम', pron: 'doo', type: 'Pronoun · informal' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein (pl.)' },
        { w: 'informell', role: 'r-adjective', en: 'informal', hi: 'अनौपचारिक', pron: 'in-for-MEL', type: 'Adjective', why: 'informell = informal (with friends).', ex: 'Das ist informell.', exEn: 'That is informal.' },
        { w: ',', plain: true },
        { w: 'oder', role: 'r-conjunction', en: 'right?', hi: 'ना', pron: 'OH-der', type: 'Tag question', why: 'oder? at the end = right? / isn’t it?', ex: 'Das ist gut, oder?', exEn: 'That is good, right?' },
        { w: '?', plain: true }
      ], en: 'Ah! "Hallo" and "du" are informal, right?', hi: 'Achha! "Hallo" aur "du" informal hain, na?' },
      { speaker: 'Frau Klein', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Adverb', why: 'genau = exactly / right.', ex: 'Genau!', exEn: 'Exactly!' },
        { w: '!', plain: true },
        { w: 'Auf', role: 'r-subject', en: 'goodbye (part)', hi: 'अलविदा', pron: 'owf', type: 'Greeting (part)', why: 'Auf Wiedersehen = formal goodbye.', ex: 'Auf Wiedersehen!', exEn: 'Goodbye!' },
        { w: 'Wiedersehen', role: 'r-subject', en: 'goodbye (formal)', hi: 'फिर मिलेंगे', pron: 'VEE-der-zay-en', type: 'Greeting' },
        { w: ',', plain: true },
        { w: 'Herr', role: 'r-name', en: 'Mr', hi: 'श्रीमान', pron: 'hair', type: 'Title' },
        { w: 'Sharma', role: 'r-name', en: 'Sharma', hi: 'शर्मा', pron: 'SHAR-ma', type: 'Name · surname' },
        { w: '.', plain: true }
      ], en: 'Exactly! Goodbye, Mr Sharma.', hi: 'Bilkul! Alvida, Herr Sharma.' },
      { speaker: 'David', side: 'right', tokens: [
        { w: 'Auf', role: 'r-subject', en: 'goodbye (part)', hi: 'अलविदा', pron: 'owf', type: 'Greeting (part)' },
        { w: 'Wiedersehen', role: 'r-subject', en: 'goodbye (formal)', hi: 'फिर मिलेंगे', pron: 'VEE-der-zay-en', type: 'Greeting' },
        { w: ',', plain: true },
        { w: 'Frau', role: 'r-name', en: 'Mrs', hi: 'श्रीमती', pron: 'frow', type: 'Title' },
        { w: 'Klein', role: 'r-name', en: 'Klein', hi: 'क्लाइन', pron: 'kline', type: 'Name · surname' },
        { w: '!', plain: true },
        { w: 'Bis', role: 'r-subject', en: 'until', hi: 'तक', pron: 'bis', type: 'Phrase (part)', why: 'bis bald = see you soon (informal).', ex: 'Bis bald!', exEn: 'See you soon!' },
        { w: 'bald', role: 'r-time', en: 'soon', hi: 'जल्द', pron: 'balt', type: 'Adverb · time' },
        { w: '!', plain: true }
      ], en: 'Goodbye, Mrs Klein! See you soon.', hi: 'Alvida, Frau Klein! Jald milte hain.' }
    ]
  },

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole chapter at a glance before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meet the characters and hear this chapter’s words in a real conversation first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the greetings, goodbyes, and polite words you need for a first conversation.' },
    { id: 'grammar',    label: 'Conversation', tag: 'core',
      objective: 'Master greetings by time of day, the introduce-yourself patterns, and formal vs informal.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a first-day-of-class dialogue and tap any word to hear it and see what it means.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Follow two people meeting for the first time, then answer what you understood.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Greet, introduce yourself, ask someone\'s name, and say where you are from.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a short self-introduction — name, origin, and age.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill greetings, dialogue completion, and question forms with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 140 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All greetings, goodbyes, and polite words with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Dialogue completion, introduction tasks, role-plays, and self-study activities.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Conversation Rules PDF',
      desc: 'Greetings by time, the introduce-yourself patterns, du vs Sie, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Guten Tag', text: 'Greet correctly for the morning, day, and evening' },
    { de: 'Ich heiße …', text: 'Introduce yourself and ask someone else\'s name' },
    { de: 'Ich komme aus …', text: 'Say which country you come from' },
    { de: 'du / Sie', text: 'Choose informal or formal register correctly' },
    { de: 'Herr / Frau', text: 'Address people politely with titles' }
  ],

  // ---------- Vocabulary (38 words) ----------
  vocab: [
    { de: 'hallo', pos: 'interjection', en: 'hello', hi: 'नमस्ते',
      ex: 'Hallo! Wie geht es dir?', exEn: 'Hello! How are you?' },
    { de: 'guten Morgen', pos: 'greeting', en: 'good morning', hi: 'सुप्रभात',
      ex: 'Guten Morgen, Frau Klein!', exEn: 'Good morning, Mrs Klein!' },
    { de: 'guten Tag', pos: 'greeting', en: 'good day, hello', hi: 'नमस्कार',
      ex: 'Guten Tag, Herr Wolan.', exEn: 'Good day, Mr Wolan.' },
    { de: 'guten Abend', pos: 'greeting', en: 'good evening', hi: 'शुभ संध्या',
      ex: 'Guten Abend! Willkommen.', exEn: 'Good evening! Welcome.' },
    { de: 'gute Nacht', pos: 'greeting', en: 'good night', hi: 'शुभ रात्रि',
      ex: 'Gute Nacht, bis morgen!', exEn: 'Good night, see you tomorrow!' },
    { de: 'auf Wiedersehen', pos: 'greeting', en: 'goodbye (formal)', hi: 'अलविदा',
      ex: 'Auf Wiedersehen, Frau Klein.', exEn: 'Goodbye, Mrs Klein.' },
    { de: 'tschüs', pos: 'interjection', en: 'bye (informal)', hi: 'बाय',
      ex: 'Tschüs, bis bald!', exEn: 'Bye, see you soon!' },
    { de: 'ciao', pos: 'interjection', en: 'bye', hi: 'बाय',
      ex: 'Ciao, bis später!', exEn: 'Bye, see you later!' },
    { de: 'bis bald', pos: 'phrase', en: 'see you soon', hi: 'जल्द मिलेंगे',
      ex: 'Tschüs und bis bald!', exEn: 'Bye and see you soon!' },
    { de: 'bis dann', pos: 'phrase', en: 'until then', hi: 'तब तक',
      ex: 'Okay, bis dann!', exEn: 'Okay, until then!' },
    { de: 'bis später', pos: 'phrase', en: 'see you later', hi: 'बाद में मिलेंगे',
      ex: 'Ich gehe jetzt. Bis später!', exEn: 'I am going now. See you later!' },
    { de: 'willkommen', pos: 'adjective', en: 'welcome', hi: 'स्वागत है',
      ex: 'Herzlich willkommen in der Schule!', exEn: 'A warm welcome to the school!' },
    { de: 'danke', pos: 'interjection', en: 'thank you', hi: 'धन्यवाद',
      ex: 'Danke, das ist sehr nett.', exEn: 'Thank you, that is very kind.' },
    { de: 'danke schön', pos: 'phrase', en: 'thank you (kindly)', hi: 'बहुत धन्यवाद',
      ex: 'Danke schön, Herr Wolan!', exEn: 'Thank you kindly, Mr Wolan!' },
    { de: 'bitte', pos: 'interjection', en: 'please; you\'re welcome', hi: 'कृपया / स्वागत है',
      ex: 'Ein Buch, bitte. — Bitte schön!', exEn: 'One book, please. — Here you go!' },
    { de: 'ja', pos: 'particle', en: 'yes', hi: 'हाँ',
      ex: 'Bist du Anna? — Ja!', exEn: 'Are you Anna? — Yes!' },
    { de: 'nein', pos: 'particle', en: 'no', hi: 'नहीं',
      ex: 'Kommst du aus Berlin? — Nein.', exEn: 'Do you come from Berlin? — No.' },
    { de: 'auch', pos: 'adverb', en: 'also, too', hi: 'भी',
      ex: 'Ich komme auch aus Indien.', exEn: 'I come from India too.' },
    { de: 'da', pos: 'adverb', en: 'there', hi: 'वहाँ',
      ex: 'Ist der Lehrer da? — Ja, er ist da.', exEn: 'Is the teacher there? — Yes, he is there.' },
    { de: 'hier', pos: 'adverb', en: 'here', hi: 'यहाँ',
      ex: 'Anna ist hier.', exEn: 'Anna is here.' },
    { de: 'ganz', pos: 'adverb', en: 'quite, completely', hi: 'काफ़ी / पूरी तरह',
      ex: 'Das ist ganz einfach.', exEn: 'That is quite easy.' },
    { de: 'gut', pos: 'adjective', en: 'good, well', hi: 'अच्छा',
      ex: 'Mir geht es gut, danke.', exEn: 'I am well, thank you.' },
    { de: 'okay', pos: 'adverb', en: 'okay', hi: 'ठीक है',
      ex: 'Okay, bis dann!', exEn: 'Okay, until then!' },
    { de: 'sehr', pos: 'adverb', en: 'very', hi: 'बहुत',
      ex: 'Sehr gut! Danke.', exEn: 'Very good! Thank you.' },
    { de: 'so', pos: 'adverb', en: 'so; so-so', hi: 'ऐसे / ठीक-ठाक',
      ex: 'So, Herr Wolan, fangen wir an.', exEn: 'So, Mr Wolan, let us begin.' },
    { de: 'gehen', pos: 'verb', en: 'to go', hi: 'जाना',
      ex: 'Ich gehe jetzt. Tschüs!', exEn: 'I am going now. Bye!',
      conj: { praesens: 'geht', praeteritum: 'ging', perfekt: 'ist gegangen' } },
    { de: 'das', pos: 'pronoun', en: 'this, that', hi: 'यह / वह',
      ex: 'Das ist Anna.', exEn: 'This is Anna.' },
    { de: 'Frau', art: 'die', gender: 'f', plural: 'Frauen', pos: 'noun', en: 'Mrs, Ms; woman', hi: 'श्रीमती / महिला',
      ex: 'Guten Tag, Frau Klein!', exEn: 'Good day, Mrs Klein!' },
    { de: 'Herr', art: 'der', gender: 'm', plural: 'Herren', pos: 'noun', en: 'Mr; gentleman', hi: 'श्रीमान',
      ex: 'Das ist Herr Wolan.', exEn: 'This is Mr Wolan.' },
    { de: 'Höflichkeit', art: 'die', gender: 'f', plural: 'Höflichkeiten', pos: 'noun', en: 'politeness', hi: 'शिष्टाचार',
      ex: 'Höflichkeit ist wichtig.', exEn: 'Politeness is important.' },
    { de: 'formell', pos: 'adjective', en: 'formal', hi: 'औपचारिक',
      ex: 'Mit dem Lehrer spricht man formell.', exEn: 'With the teacher you speak formally.',
      compare: { comparative: 'formeller', superlative: 'am formellsten' } },
    { de: 'informell', pos: 'adjective', en: 'informal', hi: 'अनौपचारिक',
      ex: 'Mit Freunden ist es informell.', exEn: 'With friends it is informal.',
      compare: { comparative: 'informeller', superlative: 'am informellsten' } },
    { de: 'grüezi', pos: 'greeting', en: 'hello (Switzerland)', hi: 'नमस्ते (स्विस)',
      ex: 'Grüezi! — so grüßt man in der Schweiz.', exEn: 'Hello! — that is how you greet in Switzerland.' },
    { de: 'grüß Gott', pos: 'greeting', en: 'hello (Austria/S. Germany)', hi: 'नमस्ते (दक्षिणी)',
      ex: 'Grüß Gott! — im Süden sehr normal.', exEn: 'Hello! — very normal in the south.' },
    { de: 'moin', pos: 'interjection', en: 'hi (North Germany)', hi: 'नमस्ते (उत्तरी)',
      ex: 'Moin! — so sagt man im Norden.', exEn: 'Hi! — that is what they say in the north.' },
    { de: 'hey', pos: 'interjection', en: 'hey', hi: 'अरे / हे',
      ex: 'Hey, wie geht\'s?', exEn: 'Hey, how\'s it going?' },
    { de: 'hi', pos: 'interjection', en: 'hi', hi: 'हाय',
      ex: 'Hi Anna, alles gut?', exEn: 'Hi Anna, all good?' },
    { de: 'hurra', pos: 'interjection', en: 'hooray', hi: 'वाह / हुर्रे',
      ex: 'Hurra, die Schule ist aus!', exEn: 'Hooray, school is out!' }
  ],

  // ---------- Conversation (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Greetings — by the time of day',
      whatIsIt: 'German picks its greeting by the clock. There is no single all-purpose "hello" that is also polite — so you choose by the hour, and the choice is part of being polite.',
      body: [
        '<b>Hallo</b> is the exception: it works almost anytime and with almost anyone, but it stays friendly rather than formal. The "Guten …" greetings are the polite set.',
        'Regional hellos exist too, and Germans use them constantly: <i>Moin</i> in the north, <i>Grüß Gott</i> in the south and Austria, <i>Grüezi</i> in Switzerland. You do not have to say them, but you should recognise them.'
      ],
      goldenRule: 'Morning · day · evening → <b>Guten Morgen · Guten Tag · Guten Abend</b>. Unsure of the hour? <b>Guten Tag</b>.',
      table: {
        head: ['When', 'Greeting', 'Note'],
        rows: [
          ['Anytime', '<span class="de r-subject">Hallo</span>', 'neutral, friendly'],
          ['Morning', '<span class="de r-subject">Guten Morgen</span>', 'until ~11:00'],
          ['Daytime', '<span class="de r-subject">Guten Tag</span>', 'the safe, polite default'],
          ['Evening', '<span class="de r-subject">Guten Abend</span>', 'from ~18:00'],
          ['Bedtime', '<span class="de r-subject">Gute Nacht</span>', 'only when leaving to sleep']
        ]
      },
      note: 'Two things to store as-is. <b>Gute Nacht</b> is not a hello — it is only said last thing at night before sleeping. And notice it is <b>Gute</b> Nacht but <b>Guten</b> Tag: the ending changes with the noun. You do not need the reason yet — learn all four as fixed phrases and you will never write <i>Guten Nacht</i>.',
      hinglish: 'German mein greeting <b>ghadi dekh kar</b> chunte hain — koi ek "hello" nahi jo har waqt polite bhi ho. <b>Hallo</b> kabhi bhi chalega, par woh dostana hai, formal nahi. <b>Guten Morgen</b> (subah), <b>Guten Tag</b> (din — sabse safe), <b>Guten Abend</b> (shaam). <b>Gute Nacht</b> sirf sone jaate waqt — yeh hello nahi hai. Aur dhyaan do: <b>Gute</b> Nacht par <b>Guten</b> Tag — ending badal jaati hai. Wajah baad ke chapter mein aayegi; abhi chaaron ko poore phrase ki tarah yaad rakho.',
      memoryTrick: 'Subah–din–shaam = <b>Morgen–Tag–Abend</b>. Aur <b>Nacht</b> wala sirf bistar ke liye.',
      recap: [
        'Greet by the hour: Morgen / Tag / Abend.',
        '<span class="de">Hallo</span> is friendly and always safe; <span class="de">Guten Tag</span> is polite and always safe.',
        '<span class="de">Gute Nacht</span> = bedtime only, and it takes <b>Gute</b>, not Guten.'
      ]
    },
    {
      title: 'Saying goodbye',
      whatIsIt: 'Goodbyes split the same way greetings do: one formal, several casual. Getting this wrong is more noticeable than getting a greeting wrong, because the goodbye is the last thing the other person hears.',
      body: [
        '<b>Auf Wiedersehen</b> is the full, formal goodbye. Everything else on this list is friendly.'
      ],
      goldenRule: 'Formal = <b>Auf Wiedersehen</b>. Friendly = <b>Tschüs</b> and the <b>bis …</b> family.',
      table: {
        head: ['German', 'English', 'Register'],
        rows: [
          ['<span class="de r-object">Auf Wiedersehen</span>', 'goodbye', 'formal'],
          ['<span class="de r-subject">Tschüs</span>', 'bye', 'informal'],
          ['<span class="de r-subject">Ciao</span>', 'bye', 'informal'],
          ['<span class="de r-subject">Bis bald</span>', 'see you soon', 'informal'],
          ['<span class="de r-subject">Bis später</span> / <span class="de r-subject">Bis dann</span>', 'see you later / until then', 'informal']
        ]
      },
      why: '<b>bis</b> means "until", so the whole family is literally a promise about time: <i>bis bald</i> = "until soon", <i>bis später</i> = "until later", <i>bis morgen</i> = "until tomorrow". Once you see that, you can build new ones yourself.',
      hinglish: 'Goodbye bhi formal/informal hota hai, aur yeh galat hona greeting se zyada notice hota hai — kyunki yeh aakhri cheez hai jo saamne wale ne suna. <b>Auf Wiedersehen</b> = formal alvida. <b>Tschüs, Ciao</b> = casual. <b>Bis …</b> ka matlab "… tak" hai, isliye yeh poora family time ka vaada hai: <b>bis bald</b> (jald tak), <b>bis später</b> (baad tak), <b>bis morgen</b> (kal tak) — matlab tum khud naye bana sakte ho.',
      memoryTrick: '<b>bis</b> = "tak". Jo bhi time word peeche lagao, goodbye ban jaata hai.',
      recap: [
        '<span class="de">Auf Wiedersehen</span> is the one formal goodbye.',
        '<span class="de">Tschüs</span> / <span class="de">Ciao</span> for friends.',
        '<b>bis</b> + a time word = "until …" — build your own.'
      ]
    },
    {
      title: 'Introduce yourself — the four questions',
      whatIsIt: 'A first German conversation runs on four question-and-answer pairs. Learn them as pairs, not as single sentences, and you can both ask and answer from the first day.',
      body: [
        'Notice that two of the four answers use <b>Ich bin</b> and two use their own verb. That is not random — <i>bin</i> is for identity and age, <i>heiße</i> is specifically for names, and <i>komme aus</i> is specifically for origin.'
      ],
      goldenRule: 'Name → <b>Ich heiße …</b> · Origin → <b>Ich komme aus …</b> · Age → <b>Ich bin … Jahre alt.</b>',
      formula: [
        'Wie heißt du?      →  Ich heiße <b>Anna</b>.',
        'Wer bist du?       →  Ich bin <b>Anna</b>.',
        'Woher kommst du?   →  Ich komme aus <b>Indien</b>.',
        'Wie alt bist du?   →  Ich bin <b>einundzwanzig</b> Jahre alt.'
      ],
      table: {
        head: ['Ask (informal)', 'Answer'],
        rows: [
          ['<span class="de r-question">Wie heißt du?</span> (What\'s your name?)', '<span class="de r-subject">Ich heiße</span> Anna.'],
          ['<span class="de r-question">Wer bist du?</span> (Who are you?)', '<span class="de r-subject">Ich bin</span> Anna.'],
          ['<span class="de r-question">Woher kommst du?</span> (Where are you from?)', '<span class="de r-subject">Ich komme aus</span> Indien.'],
          ['<span class="de r-question">Wie alt bist du?</span> (How old are you?)', '<span class="de r-subject">Ich bin</span> einundzwanzig <span class="de r-time">Jahre alt</span>.']
        ]
      },
      note: 'Origin always uses <b>aus</b> + the place, for countries and cities alike: <span class="de">Ich komme aus Indien</span>, <span class="de">Ich komme aus Delhi</span>. If you live somewhere different from where you are from, that is <b>wohnen in</b>: <span class="de">Ich wohne in Berlin</span>.',
      hinglish: 'Pehli baat-cheet chaar sawaal-jawaab par chalti hai, aur inhe <b>jodi mein</b> seekhna chahiye — akela sentence yaad karne se tum sirf jawaab de paoge, sawaal nahi. <b>Wie heißt du?</b> → <b>Ich heiße …</b> (naam ke liye alag verb hai). <b>Woher kommst du?</b> → <b>Ich komme aus …</b> (desh ya shehar, dono ke liye <b>aus</b>). <b>Wie alt bist du?</b> → <b>Ich bin … Jahre alt</b> (Chapter 3 wala pattern). Aur agar rehte kahin aur ho: <b>Ich wohne in Berlin</b>.',
      memoryTrick: 'Naam ke liye <b>heiße</b>, desh ke liye <b>komme aus</b>, umar ke liye <b>bin … Jahre alt</b>. Teen kaam, teen fixed phrase.',
      recap: [
        'Four pairs cover a whole first meeting.',
        'Name = <b>heiße</b>; origin = <b>komme aus</b>; age = <b>bin … Jahre alt</b>.',
        '<b>aus</b> for where you are from, <b>wohnen in</b> for where you live.'
      ],
      connect: { from: 'Chapter 3', text: 'The age answer is exactly the pattern you built in Chapter 3 — <span class="de">Ich bin einundzwanzig Jahre alt</span>, with the number as one reversed word and <b>Jahre</b> taking no -s.' }
    },
    {
      title: 'Formal vs informal — du or Sie',
      whatIsIt: 'German has two words for "you", and choosing between them is the single most visible politeness decision you make. <b>du</b> is for friends, family and children. <b>Sie</b> is for everyone else.',
      body: [
        'And the choice does more than swap one word: <b>the verb ending changes with it</b>. That is why the same question looks different in the two columns below.'
      ],
      goldenRule: '<b>du</b> → verb ends in <b>-st</b>. <b>Sie</b> → verb ends in <b>-en</b>, and <b>Sie</b> is always capitalised.',
      formula: [
        'du   →  du komm<b>st</b>, du wohn<b>st</b>, du b<b>ist</b>',
        'Sie  →  Sie komm<b>en</b>, Sie wohn<b>en</b>, Sie s<b>ind</b>',
        'and: ich →  ich komm<b>e</b>, ich wohn<b>e</b>, ich b<b>in</b>'
      ],
      table: {
        head: ['', 'Informal (du)', 'Formal (Sie)'],
        rows: [
          ['Greeting', '<span class="de r-subject">Hallo</span>', '<span class="de r-object">Guten Tag</span>'],
          ['Name?', '<span class="de r-subject">Wie heißt du?</span>', '<span class="de r-object">Wie heißen Sie?</span>'],
          ['Origin?', '<span class="de r-subject">Woher kommst du?</span>', '<span class="de r-object">Woher kommen Sie?</span>'],
          ['Age?', '<span class="de r-subject">Wie alt bist du?</span>', '<span class="de r-object">Wie alt sind Sie?</span>'],
          ['Your …', '<span class="de r-subject">dein</span> Name', '<span class="de r-object">Ihr</span> Name'],
          ['Address', 'first name', '<span class="de r-object">Herr / Frau</span> + surname'],
          ['Goodbye', '<span class="de r-subject">Tschüs</span>', '<span class="de r-object">Auf Wiedersehen</span>']
        ]
      },
      note: 'One small adjustment, visible in this chapter\'s own dialogue: when a verb stem already ends in an <b>s</b>-sound (<b>-s, -ß, -z</b>), the du ending drops to just <b>-t</b>, because <i>-sst</i> is unsayable. So it is <span class="de">du heißt</span>, not <i>du heißst</i>. Same rule, one letter fewer.<br><br>Pick one register at the start of a conversation and <b>stay in it</b>. Mixing <span class="de">Sie</span> and <span class="de">du</span> with the same person in the same conversation is the mistake Germans notice most — more than a wrong ending. When in doubt, choose <b>Sie</b>: it is never rude to be too polite, and the other person will offer you <i>du</i> when they want it.',
      why: 'The polite <b>Sie</b> is really the "they" form borrowed as a courtesy — that is why its verb ending is <b>-en</b> like a plural, and why it is written with a capital S even in the middle of a sentence. So you are not learning a new verb form here; you are borrowing one you will meet again.',
      hinglish: 'German mein "you" ke do roop hain, aur yeh choice tumhari politeness ka sabse saaf signal hai. Doston, ghar walon aur bacchon ke saath <b>du</b>. Baaki sab ke saath <b>Sie</b> + <b>Herr/Frau</b> + surname. Sirf shabd nahi badalta — <b>verb ka ending bhi badalta hai</b>: <b>du</b> ke saath <b>-st</b> (du kommst), <b>Sie</b> ke saath <b>-en</b> (Sie kommen), aur <b>ich</b> ke saath <b>-e</b> (ich komme). Aur formal "aapka" = <b>Ihr</b> (Ihr Name), informal = <b>dein</b>. Ek chhoti baat: agar verb ka stem pehle se <b>s/ß/z</b> par khatam hota hai, to <b>du</b> ka ending sirf <b>-t</b> ban jaata hai — <span class="de">du heißt</span>, kyunki "heißst" bola hi nahi jaa sakta. Sabse zaruri baat: ek conversation mein ek hi register — <b>du</b> aur <b>Sie</b> mix karna sabse zyada notice hota hai. Doubt ho to <b>Sie</b>; zyada polite hona kabhi galat nahi.',
      memoryTrick: '<b>du = -st</b>, <b>Sie = -en</b>, <b>ich = -e</b>. Teen ending, teen log. Aur <b>Sie</b> hamesha capital S. (Stem mein pehle se s/ß/z ho to du ka ending sirf <b>-t</b>: du heißt.)',
      recap: [
        '<b>du</b> for friends and children; <b>Sie</b> for everyone else.',
        'The ending follows the pronoun: du <b>-st</b>, Sie <b>-en</b>, ich <b>-e</b>.',
        'After a stem ending in <b>s / ß / z</b>, du takes just <b>-t</b>: <span class="de">du heißt</span>.',
        'Formal "your" = <b>Ihr</b>; informal = <b>dein</b>.',
        'One register per conversation — never mix them.'
      ],
      connect: { from: 'the next chapter', text: 'Chapter 5 (<i>Wer bist du?</i>) takes these endings and finishes the set — ich, du, er/sie/es, wir, ihr, sie/Sie — so the -e / -st / -en pattern you just met becomes the full verb.' }
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      whatIsIt: 'Four habits, and only one of them is about vocabulary. The other three are about register — which is where politeness actually lives in German.',
      body: [ 'Each row is a rule from this chapter, seen from the wrong side.' ],
      mistakes: [
        { wrong: 'Wie heißt du, Herr Wolan?', right: 'Wie heißen Sie, Herr Wolan?', why: 'Herr / Frau + surname always goes with Sie, and Sie takes the -en ending. Using du with a teacher or a stranger sounds abrupt.' },
        { wrong: 'Guten Tag … und tschüs, du!', right: 'Guten Tag … Auf Wiedersehen.', why: 'Pick one register and finish in it. Opening formally and closing informally with the same person is the mix Germans notice most.' },
        { wrong: 'Gute Nacht! (on arriving)', right: 'Guten Abend! (on arriving)', why: 'Gute Nacht is only said when leaving to sleep. In the evening you arrive with Guten Abend.' },
        { wrong: 'Ich komme von Indien.', right: 'Ich komme aus Indien.', why: 'Origin takes aus — for countries and cities alike. von is for other jobs you will meet later.' }
      ],
      hinglish: 'Chaar galtiyan hoti hain, aur inme se sirf ek vocabulary ki hai — baaki teen <b>register</b> ki hain, jahan German ki asli politeness rehti hai. Pehli, <b>Herr</b> ya <b>Frau</b> ke saath surname aaye to <b>Sie</b> aur <b>-en</b> ending aani chahiye. Doosri, ek hi conversation mein register badalna — formal shuru karke informal khatam karna sabse zyada ajeeb lagta hai. Teesri, <b>Gute Nacht</b> aate waqt nahi bolte; shaam ko <b>Guten Abend</b> aata hai. Aur chauthi, desh ke liye <b>aus</b> lagta hai, "von" nahi.',
      memoryTrick: 'Chaar check: <b>Sie</b> chahiye tha? Register same raha? <b>Nacht</b> sirf sote waqt? Desh ke saath <b>aus</b>?'
    }
  ],
  // ---------- Reading passage (dialogue, clickable words) ----------
  reading: {
    title: 'Der erste Tag',
    titleEn: 'The first day',
    tokens: [
      { w: 'Guten', role: 'r-subject', en: 'good', hi: 'अच्छा', pron: 'GOO-ten', type: 'Greeting (part)', why: 'Part of "Guten Tag" — the polite daytime greeting.', ex: 'Guten Tag!', exEn: 'Good day!' },
      { w: 'Tag', role: 'r-subject', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · greeting', why: 'final g devoices to "k". "Guten Tag" = the safe, polite hello.', ex: 'Guten Tag, Herr Wolan.', exEn: 'Good day, Mr Wolan.' },
      { w: ',', plain: true },
      { w: 'ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject', why: 'The subject pronoun "I"; lower-case unless it starts a sentence.', ex: 'Ich bin Anna.', exEn: 'I am Anna.' },
      { w: 'heiße', role: 'r-verb', en: 'am called', hi: 'कहलाती हूँ', pron: 'HY-suh', type: 'Verb · 1st person', why: 'From <i>heißen</i> (to be called); note the ß = sharp "ss" from Chapter 1.', ex: 'Ich heiße Anna.', exEn: 'My name is Anna.', conj: { praesens: 'heißt', praeteritum: 'hieß', perfekt: 'hat geheißen' }, advanced: { synonyms: ['sich nennen'], opposites: [] } },
      { w: 'Anna', role: 'r-object', en: 'Anna', hi: 'अना', pron: 'AH-nah', type: 'Name', why: 'The name given in answer to "Wie heißt du?"', ex: 'Das ist Anna.', exEn: 'This is Anna.' },
      { w: '.', plain: true },
      { w: 'Wie', role: 'r-question', en: 'how / what', hi: 'कैसे / क्या', pron: 'vee', type: 'Question word', why: 'w = "v". "Wie heißt du?" = What is your name?', ex: 'Wie heißt du?', exEn: 'What is your name?' },
      { w: 'heißt', role: 'r-verb', en: 'are called', hi: 'कहलाते हो', pron: 'hysst', type: 'Verb · 2nd person', why: 'heißen for "du": adds -t. ß = sharp "ss".', ex: 'Wie heißt du?', exEn: 'What is your name?', advanced: { synonyms: [], opposites: [] } },
      { w: 'du', role: 'r-subject', case: 'Nominativ', en: 'you (informal)', hi: 'तुम', pron: 'doo', type: 'Pronoun · informal', why: 'Informal "you" — used with classmates and friends.', ex: 'Woher kommst du?', exEn: 'Where are you from?' },
      { w: '?', plain: true },
      { w: 'Hallo', role: 'r-subject', en: 'hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting', why: 'The neutral, friendly hello — fine almost anytime.', ex: 'Hallo, ich bin Rohan.', exEn: 'Hello, I am Rohan.' },
      { w: ',', plain: true },
      { w: 'ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject', why: 'Subject pronoun "I".', ex: 'Ich bin Rohan.', exEn: 'I am Rohan.' },
      { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein', why: 'From <i>sein</i> (to be), the "ich" form. Used to give your name or age.', ex: 'Ich bin einundzwanzig.', exEn: 'I am twenty-one.', conj: { praesens: 'ist', praeteritum: 'war', perfekt: 'ist gewesen' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'Rohan', role: 'r-object', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name', why: 'The answer to "Wer bist du?" / "Wie heißt du?"', ex: 'Das ist Rohan.', exEn: 'This is Rohan.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject', why: 'Capital I — it starts the sentence.', ex: 'Ich komme aus Indien.', exEn: 'I come from India.' },
      { w: 'komme', role: 'r-verb', en: 'come', hi: 'आता हूँ', pron: 'KO-muh', type: 'Verb · 1st person', why: 'From <i>kommen</i>; "Ich komme aus …" = I come from …', ex: 'Ich komme aus Delhi.', exEn: 'I come from Delhi.', conj: { praesens: 'kommt', praeteritum: 'kam', perfekt: 'ist gekommen' }, advanced: { synonyms: ['stammen'], opposites: ['gehen'] } },
      { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'owss', type: 'Preposition + dat.', why: 'Origin uses <b>aus</b> + place — never "von" for countries.', ex: 'aus Indien', exEn: 'from India' },
      { w: 'Indien', role: 'r-place', case: 'Dativ', en: 'India', hi: 'भारत', pron: 'IN-dee-en', type: 'Noun · place', why: 'The country of origin, after aus.', ex: 'Ich komme aus Indien.', exEn: 'I come from India.' },
      { w: '.', plain: true },
      { w: 'Sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb', why: 's = "z". Intensifier: "sehr gut" = very good.', ex: 'Sehr gut!', exEn: 'Very good!' },
      { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective', why: 'long u. "Sehr gut!" is a common, friendly reply.', ex: 'Das ist gut.', exEn: 'That is good.', compare: { comparative: 'besser', superlative: 'am besten' }, advanced: { synonyms: ['prima'], opposites: ['schlecht'] } },
      { w: '!', plain: true },
      { w: 'Willkommen', role: 'r-subject', en: 'welcome', hi: 'स्वागत है', pron: 'vil-KO-men', type: 'Greeting', why: 'w = "v". A warm welcome to the group.', ex: 'Willkommen in der Schule!', exEn: 'Welcome to the school!' },
      { w: '.', plain: true }
    ],
    translation: 'Good day, I am called Anna. What is your name? — Hello, I am Rohan. I come from India. Very good! Welcome.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_004_L001', speaker: 'Frau Klein', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Guten Tag! Für Ihren Studentenausweis brauche ich Ihren Namen.', en: 'Good day! For your student ID I need your name.' },
      { id: 'A1_004_L002', speaker: 'David', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich heiße David. Ich komme aus Indien.', en: 'My name is David. I come from India.' },
      { id: 'A1_004_L003', speaker: 'Frau Klein', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und wie alt sind Sie?', en: 'And how old are you?' },
      { id: 'A1_004_L004', speaker: 'David', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich bin einundzwanzig Jahre alt.', en: 'I am twenty-one years old.' }
    ],
    transcript: 'Guten Tag! Für Ihren Studentenausweis brauche ich Ihren Namen. Ich heiße David. Ich komme aus Indien. Und wie alt sind Sie? Ich bin einundzwanzig Jahre alt.',
    translation: 'Good day! For your student ID I need your name. My name is David. I come from India. And how old are you? I am twenty-one years old.',
    tokens: [
      { w: 'Guten' },
      { w: 'Tag' },
      { w: '!', plain: true },
      { w: 'Für' },
      { w: 'Ihren' },
      { w: 'Studentenausweis' },
      { w: 'brauche' },
      { w: 'ich' },
      { w: 'Ihren' },
      { w: 'Namen' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'heiße' },
      { w: 'David' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'komme' },
      { w: 'aus' },
      { w: 'Indien' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wie' },
      { w: 'alt' },
      { w: 'sind' },
      { w: 'Sie' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'bin' },
      { w: 'einundzwanzig' },
      { w: 'Jahre' },
      { w: 'alt' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was macht Frau Klein für David?', qEn: 'What is Frau Klein making for David?', options: ['Einen Kaffee', 'Einen Studentenausweis', 'Einen Anruf', 'Einen Brief'], optionsEn: ['A coffee', 'A student ID card', 'A phone call', 'A letter'], answer: 1,
        explain: '"Für Ihren Studentenausweis brauche ich Ihren Namen."' },
      { q: 'Wie alt ist David?', qEn: 'How old is David?', options: ['Zwanzig', 'Einundzwanzig', 'Zweiundzwanzig', 'Neunzehn'], optionsEn: ['twenty', 'twenty-one', 'twenty-two', 'nineteen'], answer: 1,
        explain: '"Ich bin einundzwanzig Jahre alt."' }
    ]
  },

  speaking: [
    { task: "Du kommst am Morgen in den Kurs. Begrüße die Gruppe.", taskEn: "You arrive at class in the morning. Greet the group.", de: "Guten Morgen! Hallo!", en: "Good morning! Hello!" },
    { task: "Im Büro fragt man: Wie ist Ihr Name und woher kommen Sie?", taskEn: "At the office you're asked: what's your name and where are you from?", de: "Ich heiße David. Ich komme aus Indien.", en: "My name is David. I'm from India." },
    { task: "Der Kurs ist zu Ende. Was sagst du?", taskEn: "Class is over. What do you say?", de: "Danke schön! Auf Wiedersehen, bis bald!", en: "Thank you! Goodbye, see you soon!" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short self-introduction of three or four lines: greet, give your name, say which country you come from, and add your age (use a number word from Chapter 3). Choose one register and keep it consistent.',
    starters: ['Hallo! Ich heiße …', 'Ich komme aus …', 'Ich bin … Jahre alt.'],
    placeholder: 'Hallo! Ich heiße …',
    minWords: 12
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'You meet your teacher at 9 a.m. What do you say?',
      options: ['Gute Nacht, Herr Wolan!', 'Tschüs, Herr Wolan!', 'Guten Morgen, Herr Wolan!', 'Hey, du!'],
      answer: 2,
      explain: 'Morning + a teacher → the polite "Guten Morgen, Herr Wolan!"'
    },
    gap: {
      // Complete the introduction dialogue.
      sentence: ['Wie ', ' du? — Ich ', ' Anna.'],
      gaps: [ { answer: 'heißt', accepts: ['heißt', 'heisst'] }, { answer: 'heiße', accepts: ['heiße', 'heisse'] } ],
      explain: 'Wie heißt du? → Ich heiße Anna. The verb is heißen (to be called).'
    },
    match: {
      q: 'Match each greeting to when or how it is used.',
      pairs: [
        { noun: 'Guten Morgen', art: 'in the morning' },
        { noun: 'Guten Abend', art: 'in the evening' },
        { noun: 'Auf Wiedersehen', art: 'formal goodbye' },
        { noun: 'Tschüs', art: 'informal bye' }
      ]
    },
    builder: {
      target: 'Build: "I come from India."',
      bank: ['aus', 'Ich', 'Indien', 'komme'],
      answer: ['Ich', 'komme', 'aus', 'Indien'],
      roles: { 'Ich': 'r-subject', 'komme': 'r-verb', 'aus': 'r-preposition', 'Indien': 'r-place' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which greeting is best for a teacher in the afternoon?', options: ['Hey!', 'Guten Tag, Herr Wolan!', 'Gute Nacht!', 'Tschüs!'], answer: 1,
      explain: 'Daytime + formal → "Guten Tag, Herr Wolan!"' },
    { q: 'How do you ask a classmate\'s name (informal)?', options: ['Wie heißen Sie?', 'Wer ist das?', 'Wie heißt du?', 'Woher kommst du?'], answer: 2,
      explain: 'Informal "you" = du → "Wie heißt du?"' },
    { q: 'Complete: "Ich komme ___ Indien."', options: ['von', 'aus', 'in', 'zu'], answer: 1,
      explain: 'Origin uses aus + place: "Ich komme aus Indien."' },
    { q: 'Which is the FORMAL goodbye?', options: ['Tschüs', 'Ciao', 'Auf Wiedersehen', 'Bis bald'], answer: 2,
      explain: 'Auf Wiedersehen is the formal goodbye; the others are informal.' },
    { q: 'When do you say "Gute Nacht"?', options: ['When you arrive', 'Any time of day', 'Only at bedtime', 'When you say thanks'], answer: 2,
      explain: 'Gute Nacht is used only at night before sleeping — not as a hello.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-subject', html: 'Greet by the clock: <span class="de">Guten Morgen / Tag / Abend</span>; <span class="de">Hallo</span> works almost anytime.' },
    { c: 'r-question', html: 'Three first-meeting moves: <span class="de">Ich heiße …</span>, <span class="de">Ich komme aus …</span>, <span class="de">Ich bin … Jahre alt</span>.' },
    { c: 'r-object', html: 'Register matters: <b>du</b> for friends, <b>Sie</b> + <span class="de">Herr/Frau</span> for everyone else. When unsure, choose Sie.' }
  ],
  revisionTips: [
    'Greet out loud at the right time of day — say "Guten Morgen" each morning until it is automatic.',
    'Practise your own introduction: name, country, age — three lines you can say without thinking.',
    'Whenever you meet someone new in your head, decide du or Sie before the first word.'
  ]
};

window.CHAPTER = CHAPTER;
