/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 1 · Chapter 6
   "W-Fragen"  (Question words & information questions)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-6 word list (34 words).
   Recycles Chapters 1–5 throughout.
============================================================ */
const CHAPTER = {
  id: 'a1-6-wfragen',
  phase: 'A1 · Phase 1',
  number: 6,
  title: 'W-Fragen',
  titleEn: 'Question Words',
  description: 'Real conversation is asking, not just answering. The W-words — wer, was, wo, woher, wann, warum — open every information question. Learn which word asks for what, and the one word-order rule that puts the verb in second place.',
  xp: 150,
  time: 45,
  difficulty: 'Beginner',
  nextChapter: { number: 7, title: 'Ja oder Nein?', titleEn: 'Yes/No Questions' , href: 'chapter-a1-7-jaodernein.html' },

  heroAnimationPath: null,

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A German information question starts with a <span class="de r-question">W-word</span>, and the <span class="de r-verb">verb</span> comes straight after it in second position: <span class="de r-question">Woher</span> <span class="de r-verb">kommst</span> du? Pick the right W-word and the rest falls into place.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is W-FRAGEN (question words: wer, was, wie, wie viel/viele, wo, woher, wohin, wann, warum, wie lange; and W-question word order). ' +
    'The learner wrote some questions and/or short answers below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- A W-question is: W-word (position 1) + conjugated verb (position 2) + subject + rest. e.g. "Woher kommst du?", "Wo wohnst du?", "Wie heißt du?".\n' +
    '- Which word asks for what: wer = who (person), was = what (thing), wie = how, wo = where (location), woher = from where (origin), wohin = where to (destination), wann = when (time), warum = why (reason), wie lange = how long.\n' +
    '- Distinguish wo (where, static) / woher (origin → answer with aus) / wohin (destination → answer with nach/in).\n' +
    '- wie viel for measured amounts (Zeit, Geld); wie viele for countable things (Bucher). Do not flag welcher/wessen: they are not taught in this chapter.\n' +
    '- The verb is ALWAYS in second position in a W-question — never "Woher du kommst?".\n' +
    '- Questions end with a question mark; nouns and the polite Sie are capitalised.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why (wrong W-word, or verb not in second position). If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Word-order check:</b> one sentence on whether the verb is in second position.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you can ask about anything now. Move on to <span class="de">Ja oder Nein?</span>',
    mid: 'Good. Re-read the "which W-word asks what" table once, then continue.',
    low: 'Worth another pass — revisit the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Woher', role: 'r-question' }, { w: 'kommst', role: 'r-verb' },
    { w: 'du', role: 'r-subject' }, { w: '?', role: '' }
  ],

  story: {
    eyebrow: 'Story-based learning',
    headline: 'So many <em>questions.</em>',
    intro: 'Break time turns into a two-person mini-interview. Sofia fires off the W-questions — where, when, why — and Felix answers, as two classmates turn small talk into real practice.',
    outcomes: ['Every word is clickable for meaning + audio', 'Hear five W-questions in real use', 'A mini-interview between two classmates'],
    scene: 'In der Pause — Deutschkurs',
    femaleSpeakers: ['Sofia'],
    dialogue: [
      { speaker: 'Sofia', tokens: [
        { w: 'Hallo', role: 'r-subject', en: 'hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting' },
        { w: ',', plain: true },
        { w: 'Felix', role: 'r-name', en: 'Felix', hi: 'फ़ेलिक्स', pron: 'FAY-liks', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Wie', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vee', type: 'Question word', why: 'Wie heißt du? = What is your name?', ex: 'Wie heißt du?', exEn: 'What is your name?' },
        { w: 'heißt', role: 'r-verb', en: 'are called', hi: 'नाम है', pron: 'hysst', type: 'Verb · heißen (du)', why: 'verb in second position, right after the W-word.', ex: 'Wie heißt du?', exEn: 'What is your name?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Hello, Felix! What is your name?', hi: 'Namaste, Felix! Tumhaara naam kya hai?' },
      { speaker: 'Felix', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'heiße', role: 'r-verb', en: 'am called', hi: 'नाम है', pron: 'HY-suh', type: 'Verb · heißen (ich)' },
        { w: 'Felix', role: 'r-name', en: 'Felix', hi: 'फ़ेलिक्स', pron: 'FAY-liks', type: 'Name · person' },
        { w: '.', plain: true },
        { w: 'Frag', role: 'r-verb', en: 'ask', hi: 'पूछो', pron: 'frahk', type: 'Verb · imperative', why: 'fragen = to ask (Ch5); command form.', ex: 'Frag mich!', exEn: 'Ask me!' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझसे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: '!', plain: true }
      ], en: 'My name is Felix. Ask me!', hi: 'Mera naam Felix hai. Mujhse poochho!' },
      { speaker: 'Sofia', tokens: [
        { w: 'Woher', role: 'r-question', en: 'where from', hi: 'कहाँ से', pron: 'vo-HAIR', type: 'Question word', why: 'woher asks for origin — answer with aus.', ex: 'Woher kommst du?', exEn: 'Where are you from?' },
        { w: 'kommst', role: 'r-verb', en: 'come', hi: 'आते हो', pron: 'komst', type: 'Verb · kommen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Where do you come from?', hi: 'Tum kahaan se aate ho?' },
      { speaker: 'Felix', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'komme', role: 'r-verb', en: 'come', hi: 'आता हूँ', pron: 'KO-muh', type: 'Verb · kommen (ich)' },
        { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'owss', type: 'Preposition' },
        { w: 'Wien', role: 'r-place', en: 'Vienna', hi: 'वियना', pron: 'veen', type: 'Noun · city' },
        { w: '.', plain: true },
        { w: 'Jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'wohne', role: 'r-verb', en: 'live', hi: 'रहता हूँ', pron: 'VOH-nuh', type: 'Verb · wohnen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'Berlin', role: 'r-place', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Noun · city' },
        { w: '.', plain: true }
      ], en: 'I come from Vienna. Now I live in Berlin.', hi: 'Main Vienna se hoon. Ab main Berlin mein rehta hoon.' },
      { speaker: 'Sofia', tokens: [
        { w: 'Wo', role: 'r-question', en: 'where', hi: 'कहाँ', pron: 'vo', type: 'Question word', why: 'wo asks a static location — answer with in.', ex: 'Wo wohnst du?', exEn: 'Where do you live?' },
        { w: 'wohnst', role: 'r-verb', en: 'live', hi: 'रहते हो', pron: 'VOHNST', type: 'Verb · wohnen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'genau', role: 'r-adverb', en: 'exactly', hi: 'ठीक-ठीक', pron: 'ge-NOW', type: 'Adverb', why: 'genau = exactly (Ch6).', ex: 'Wo genau?', exEn: 'Where exactly?' },
        { w: '?', plain: true }
      ], en: 'Where exactly do you live?', hi: 'Tum theek-theek kahaan rehte ho?' },
      { speaker: 'Felix', side: 'right', tokens: [
        { w: 'In', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'Kreuzberg', role: 'r-place', en: 'Kreuzberg', hi: 'क्रोयत्सबर्ग', pron: 'KROYTS-bairk', type: 'Noun · district' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'wann', role: 'r-question', en: 'when', hi: 'कब', pron: 'van', type: 'Question word', why: 'wann asks for a time.', ex: 'Wann ist der Kurs?', exEn: 'When is the course?' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'dein', role: 'r-subject', en: 'your', hi: 'तुम्हारा', pron: 'dine', type: 'Possessive · nom.' },
        { w: 'Kurs', role: 'r-subject', en: 'course', hi: 'कोर्स', pron: 'koors', type: 'Noun · masc.', why: 'der Kurs = course.', ex: 'Der Kurs ist gut.', exEn: 'The course is good.' },
        { w: '?', plain: true }
      ], en: 'In Kreuzberg. And when is your course?', hi: 'Kreuzberg mein. Aur tumhaara course kab hai?' },
      { speaker: 'Sofia', tokens: [
        { w: 'Morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time', why: 'morgen = tomorrow (answers wann).', ex: 'Der Kurs ist morgen.', exEn: 'The course is tomorrow.' },
        { w: '!', plain: true },
        { w: 'Warum', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'va-RUM', type: 'Question word', why: 'warum asks for a reason.', ex: 'Warum lernst du Deutsch?', exEn: 'Why are you learning German?' },
        { w: 'lernst', role: 'r-verb', en: 'learn', hi: 'सीखते हो', pron: 'lairnst', type: 'Verb · lernen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'Deutsch', role: 'r-object', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun · language' },
        { w: '?', plain: true }
      ], en: 'At eight! Why are you learning German?', hi: 'Aath baje! Tum German kyun seekhte ho?' },
      { speaker: 'Felix', side: 'right', tokens: [
        { w: 'Deutsch', role: 'r-object', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun · language' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'schön', role: 'r-adjective', en: 'beautiful', hi: 'बढ़िया', pron: 'shern', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'German is beautiful! And you?', hi: 'German bahut achhi hai! Aur tum?' },
      { speaker: 'Sofia', tokens: [
        { w: 'Berlin', role: 'r-place', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Noun · city' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'super', role: 'r-adjective', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Adjective' },
        { w: '—', plain: true },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'Deutsch', role: 'r-object', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun · language' },
        { w: 'auch', role: 'r-adverb', en: 'too', hi: 'भी', pron: 'owkh', type: 'Adverb', why: 'auch = also / too.', ex: 'Ich auch!', exEn: 'Me too!' },
        { w: '!', plain: true }
      ], en: 'Berlin is great — and German too!', hi: 'Berlin badhiya hai — aur German bhi!' },
      { speaker: 'Felix', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'lernen', role: 'r-verb', en: 'learn', hi: 'सीखते हैं', pron: 'LAIR-nen', type: 'Verb · lernen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: ',', plain: true },
        { w: 'Sofia', role: 'r-name', en: 'Sofia', hi: 'सोफ़िया', pron: 'zo-FEE-a', type: 'Name · person' },
        { w: '!', plain: true }
      ], en: 'Then let\u2019s learn together, Sofia!', hi: 'Toh hum saath seekhte hain, Sofia!' }
    ]
  },

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole chapter at a glance before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meet the characters and hear this chapter’s words in a real conversation first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the question words plus the classroom verbs and nouns you need to ask and record answers.' },
    { id: 'grammar',    label: 'Question Words', tag: 'core',
      objective: 'Master which W-word asks for what, the wo/woher/wohin trio, and W-question word order.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read an interview dialogue full of W-Fragen and tap any word to hear it and see what it means.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch the question words in a short interview, then answer what was asked.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Ask and answer W-Fragen with a partner in a mini-interview.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five W-questions and a short question-and-answer mini-dialogue.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill W-word choice, question building, and word order with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 150 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The question words plus classroom verbs and nouns, with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'W-word selection, question building, reordering tasks, mini-dialogues, and self-study activities.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'Every W-word and what it asks for, the wo/woher/wohin trio, word order, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'wer · was · wie', text: 'Choose the right question word for people, things, and manner' },
    { de: 'wo · woher · wohin', text: 'Ask about location, origin, and destination' },
    { de: 'wann · warum', text: 'Ask about time and reasons' },
    { de: 'Verb = Position 2', text: 'Build W-questions with the verb in second position' },
    { de: 'Frage & Antwort', text: 'Ask a question and give a natural answer' }
  ],

  // ---------- Vocabulary (34 words) ----------
  vocab: [
    // — Core question words —
    { de: 'wer', pos: 'question word', en: 'who', hi: 'कौन',
      ex: 'Wer bist du?', exEn: 'Who are you?' },
    { de: 'was', pos: 'question word', en: 'what', hi: 'क्या',
      ex: 'Was ist das?', exEn: 'What is that?' },
    { de: 'wie', pos: 'question word', en: 'how; what', hi: 'कैसे',
      ex: 'Wie heißt du?', exEn: 'What is your name?' },
    { de: 'wo', pos: 'question word', en: 'where', hi: 'कहाँ',
      ex: 'Wo wohnst du?', exEn: 'Where do you live?' },
    { de: 'woher', pos: 'question word', en: 'from where', hi: 'कहाँ से',
      ex: 'Woher kommst du?', exEn: 'Where do you come from?' },
    { de: 'warum', pos: 'question word', en: 'why', hi: 'क्यों',
      ex: 'Warum lernst du Deutsch?', exEn: 'Why are you learning German?' },
    { de: 'wie viel/viele', pos: 'question word', en: 'how much / how many', hi: 'कितना / कितने',
      ex: 'Wie viele Bücher hast du?', exEn: 'How many books do you have?' },
    // — Active support —
    { de: 'Frage', art: 'die', gender: 'f', plural: 'Fragen', pos: 'noun', en: 'question', hi: 'प्रश्न',
      ex: 'Die Frage ist einfach.', exEn: 'The question is easy.' },
    { de: 'Gruppe', art: 'die', gender: 'f', plural: 'Gruppen', pos: 'noun', en: 'group', hi: 'समूह',
      ex: 'Arbeitet in der Gruppe!', exEn: 'Work in the group!' },
    { de: 'dritt', pos: 'phrase (zu dritt)', en: 'in threes', hi: 'तीन-तीन के समूह में',
      ex: 'Arbeitet zu dritt.', exEn: 'Work in threes.' },
    { de: 'ergänzen', pos: 'verb', en: 'to complete, fill in', hi: 'पूरा करना',
      ex: 'Ergänze die Frage.', exEn: 'Complete the question.',
      conj: { praesens: 'ergänzt', praeteritum: 'ergänzte', perfekt: 'hat ergänzt' } },
    { de: 'genau', pos: 'adverb', en: 'exactly', hi: 'बिल्कुल',
      ex: 'Genau! Das ist richtig.', exEn: 'Exactly! That is right.' },
    { de: 'notieren', pos: 'verb', en: 'to note down', hi: 'नोट करना',
      ex: 'Notiere die Antwort.', exEn: 'Note down the answer.',
      conj: { praesens: 'notiert', praeteritum: 'notierte', perfekt: 'hat notiert' } },
    // — Passive —
    { de: 'bekannt', pos: 'adjective', en: 'well-known', hi: 'प्रसिद्ध',
      ex: 'Die Person ist bekannt.', exEn: 'The person is well-known.',
      compare: { comparative: 'bekannter', superlative: 'am bekanntesten' } },
    { de: 'Interview', art: 'das', gender: 'n', plural: 'Interviews', pos: 'noun', en: 'interview', hi: 'साक्षात्कार',
      ex: 'Macht ein Interview.', exEn: 'Do an interview.' },
    { de: 'Symbol', art: 'das', gender: 'n', plural: 'Symbole', pos: 'noun', en: 'symbol', hi: 'प्रतीक',
      ex: 'Das Symbol bedeutet "Frage".', exEn: 'The symbol means "question".' },
    { de: 'Bildgeschichte', art: 'die', gender: 'f', plural: 'Bildgeschichten', pos: 'noun', en: 'comic strip, picture story', hi: 'चित्र-कथा',
      ex: 'Lies die Bildgeschichte.', exEn: 'Read the comic strip.' },
    { de: 'Notiz', art: 'die', gender: 'f', plural: 'Notizen', pos: 'noun', en: 'note', hi: 'टिप्पणी',
      ex: 'Mach eine Notiz.', exEn: 'Make a note.' },
    { de: 'Reihenfolge', art: 'die', gender: 'f', plural: 'Reihenfolgen', pos: 'noun', en: 'sequence, order', hi: 'क्रम',
      ex: 'Die Reihenfolge ist wichtig.', exEn: 'The order is important.' },
    { de: 'Situation', art: 'die', gender: 'f', plural: 'Situationen', pos: 'noun', en: 'situation', hi: 'स्थिति',
      ex: 'In dieser Situation fragt man "Wie bitte?".', exEn: 'In this situation you ask "Pardon?".' },
    { de: 'Tabelle', art: 'die', gender: 'f', plural: 'Tabellen', pos: 'noun', en: 'table, chart', hi: 'सारणी',
      ex: 'Schreib die Wörter in die Tabelle.', exEn: 'Write the words in the table.' },
    { de: 'mischen', pos: 'verb', en: 'to mix, shuffle', hi: 'मिलाना',
      ex: 'Mische die Karten.', exEn: 'Shuffle the cards.',
      conj: { praesens: 'mischt', praeteritum: 'mischte', perfekt: 'hat gemischt' } },
    { de: 'passend', pos: 'adjective', en: 'matching, suitable', hi: 'उपयुक्त',
      ex: 'Finde das passende Fragewort.', exEn: 'Find the matching question word.',
      compare: { comparative: 'passender', superlative: 'am passendsten' } },
    { de: 'ähnlich', pos: 'adjective', en: 'similar', hi: 'समान',
      ex: '"wo" und "woher" sind ähnlich.', exEn: '"wo" and "woher" are similar.',
      compare: { comparative: 'ähnlicher', superlative: 'am ähnlichsten' } },
    // — Reference / System (classroom instruction verbs & terms) —
    { de: 'ankreuzen', pos: 'verb', en: 'to tick, mark', hi: 'निशान लगाना',
      ex: 'Kreuze die richtige Antwort an.', exEn: 'Tick the correct answer.',
      conj: { praesens: 'kreuzt an', praeteritum: 'kreuzte an', perfekt: 'hat angekreuzt' } },
    { de: 'bilden', pos: 'verb', en: 'to form', hi: 'बनाना',
      ex: 'Bilde eine Frage.', exEn: 'Form a question.',
      conj: { praesens: 'bildet', praeteritum: 'bildete', perfekt: 'hat gebildet' } },
    { de: 'Fragewort', art: 'das', gender: 'n', plural: 'Fragewörter', pos: 'noun', en: 'question word', hi: 'प्रश्नवाचक शब्द',
      ex: '"Wer" ist ein Fragewort.', exEn: '"Wer" is a question word.' },
    { de: 'W-Wort', art: 'das', gender: 'n', plural: 'W-Wörter', pos: 'noun', en: 'W-word', hi: 'W-शब्द',
      ex: 'Alle W-Wörter beginnen mit W.', exEn: 'All W-words begin with W.' },
    { de: 'W-Frage', art: 'die', gender: 'f', plural: 'W-Fragen', pos: 'noun', en: 'W-question', hi: 'W-प्रश्न',
      ex: 'Eine W-Frage beginnt mit einem W-Wort.', exEn: 'A W-question begins with a W-word.' },
    { de: 'kreisen', pos: 'verb', en: 'to circle', hi: 'घेरना',
      ex: 'Kreise das W-Wort ein.', exEn: 'Circle the W-word.',
      conj: { praesens: 'kreist', praeteritum: 'kreiste', perfekt: 'hat gekreist' } },
    { de: 'nummerieren', pos: 'verb', en: 'to number', hi: 'क्रमांक देना',
      ex: 'Nummeriere die Sätze.', exEn: 'Number the sentences.',
      conj: { praesens: 'nummeriert', praeteritum: 'nummerierte', perfekt: 'hat nummeriert' } },
    { de: 'ordnen', pos: 'verb', en: 'to arrange, order', hi: 'क्रम में लगाना',
      ex: 'Ordne die Wörter.', exEn: 'Arrange the words.',
      conj: { praesens: 'ordnet', praeteritum: 'ordnete', perfekt: 'hat geordnet' } },
    { de: 'würfeln', pos: 'verb', en: 'to roll the dice', hi: 'पासा फेंकना',
      ex: 'Würfle und bilde eine Frage.', exEn: 'Roll the dice and form a question.',
      conj: { praesens: 'würfelt', praeteritum: 'würfelte', perfekt: 'hat gewürfelt' } },
    { de: 'zeichnen', pos: 'verb', en: 'to draw', hi: 'चित्र बनाना',
      ex: 'Zeichne ein Symbol für die Frage.', exEn: 'Draw a symbol for the question.',
      conj: { praesens: 'zeichnet', praeteritum: 'zeichnete', perfekt: 'hat gezeichnet' } }
  ],

  // ---------- Question Words (rule cards → accordion) ----------
  grammar: [
    {
      title: 'What is a W-Frage?',
      whatIsIt: 'Up to now you have mostly been answering. A <b>W-Frage</b> lets you ask. It opens with a <span class="de r-question">W-word</span> and demands real information back — a name, a place, a reason. Yes or no is never an acceptable answer to one.',
      body: [
        'Every one of these words begins with the letter <b>W</b>, which is why Germans call them <i>W-Wörter</i> and the questions <i>W-Fragen</i>. That single letter is your signal: if a question starts with W, the answer must be information.'
      ],
      goldenRule: 'W-word at the front → the answer must be information, never <i>ja</i> or <i>nein</i>.',
      table: {
        head: ['W-Wort', 'Asks for', 'Example', 'Answer'],
        rows: [
          ['<span class="de r-question">Wer?</span>', 'a person', 'Wer ist das?', 'Das ist Anna.'],
          ['<span class="de r-question">Was?</span>', 'a thing', 'Was ist das?', 'Ein Buch.'],
          ['<span class="de r-question">Wie?</span>', 'manner / a name', 'Wie heißt du?', 'Ich heiße Anna.'],
          ['<span class="de r-question">Wie viele?</span>', 'a quantity', 'Wie viele Bücher?', 'Drei.']
        ]
      },
      note: 'Two shapes of <b>wie viel</b>, and the difference is countability: <b>wie viel</b> for things you measure (<span class="de">Wie viel Zeit?</span>, <span class="de">Wie viel kostet das?</span>) and <b>wie viele</b> for things you count (<span class="de">Wie viele Bücher?</span>). If you could put a number in front of it, use <b>wie viele</b>.',
      hinglish: 'Ab tak tum zyada-tar jawaab de rahe the — <b>W-Frage</b> tumhe poochhna sikhati hai. Yeh <b>W-Wort</b> se shuru hota hai aur asli jaankari maangta hai: naam, jagah, wajah. Iska jawaab kabhi sirf "ja/nein" nahi ho sakta, aur yahi iski pehchaan hai. <b>Wer?</b> (kaun), <b>Was?</b> (kya), <b>Wie?</b> (kaise / naam), <b>Wie viele?</b> (kitne). Ek chhota farak: <b>wie viel</b> jo naapa jaata hai (Zeit, Geld), <b>wie viele</b> jo gina jaata hai (Bücher) — agar aage number lag sakta hai, to <b>wie viele</b>.',
      memoryTrick: 'Sawaal <b>W</b> se shuru hua? To jawaab mein <b>jaankari</b> deni hai, sirf haan-naa nahi.',
      recap: [
        'A W-Frage asks for information, not yes/no.',
        '<b>Wer</b> = person · <b>Was</b> = thing · <b>Wie</b> = how or a name.',
        '<b>wie viel</b> for measured amounts, <b>wie viele</b> for countable things.'
      ]
    },
    {
      title: 'Place questions: wo, woher, wohin',
      whatIsIt: 'Three W-words look almost identical and all deal with place — but they ask three different things, and each one pulls a different answer word after it. This trio is where beginners lose the most marks, so learn each question together with the word its answer needs.',
      body: [
        'The good news: the endings tell you the meaning. <b>-her</b> means motion <i>from</i>, <b>-hin</b> means motion <i>to</i>, and bare <b>wo</b> means no motion at all.'
      ],
      goldenRule: '<b>wo</b> → in · <b>woher</b> → aus · <b>wohin</b> → nach. Question and answer word travel as a pair.',
      formula: [
        'Wo?     staying still   →  <b>in</b> Delhi',
        'Woher?  coming from     →  <b>aus</b> Indien',
        'Wohin?  going to        →  <b>nach</b> Berlin'
      ],
      table: {
        head: ['W-Wort', 'Asks', 'Answer pattern', 'Example'],
        rows: [
          ['<span class="de r-question">Wo?</span>', 'where (location)', 'in + place', 'Wo wohnst du? — In Delhi.'],
          ['<span class="de r-question">Woher?</span>', 'from where (origin)', 'aus + place', 'Woher kommst du? — Aus Indien.'],
          ['<span class="de r-question">Wohin?</span>', 'where to (destination)', 'nach / in + place', 'Wohin gehst du? — Nach Berlin.']
        ]
      },
      why: 'German marks direction on the question word itself, where English needs an extra word ("where <i>from</i>", "where <i>to</i>"). So German is doing you a favour: the information is packed into one short word, and you only have to hear the ending.',
      hinglish: 'Teen jagah wale W-Wort lagbhag ek jaise dikhte hain, par teen alag cheezein poochhte hain — aur har ek apne saath ek khaas answer word maangta hai. Isliye sawaal aur jawaab ko <b>jodi</b> mein yaad karo: <b>Wo?</b> = kahaan (ek hi jagah) → <b>in</b>. <b>Woher?</b> = kahaan se → <b>aus</b>. <b>Wohin?</b> = kahaan ko → <b>nach</b>. Pehchaan ending se hoti hai: <b>-her</b> matlab kahin <i>se</i> aana, <b>-hin</b> matlab kahin <i>ko</i> jaana, aur akela <b>wo</b> matlab hilna hi nahi.',
      memoryTrick: '<b>her</b> = idhar (mere paas <b>se</b> aana), <b>hin</b> = udhar (wahan <b>ko</b> jaana). Akela <b>wo</b> = wahin khade raho.',
      recap: [
        '<b>Wo?</b> location → answer with <b>in</b>.',
        '<b>Woher?</b> origin → answer with <b>aus</b>.',
        '<b>Wohin?</b> destination → answer with <b>nach</b>.'
      ]
    },
    {
      title: 'Time, reason and duration: wann, warum, wie lange',
      whatIsIt: 'Three more W-words, and between them they cover the questions you will be asked most often after your name: <b>when</b> something happens, <b>why</b> you are doing it, and <b>how long</b> you have been at it.',
      body: [
        'Both take completely ordinary answers — no special preposition to memorise, unlike the place trio.'
      ],
      goldenRule: '<b>Wann?</b> asks for a point in time. <b>Warum?</b> asks for a reason. <b>Wie lange?</b> asks for a length of time.',
      table: {
        head: ['W-Wort', 'Asks for', 'Example', 'Natural answer'],
        rows: [
          ['<span class="de r-question">Wann?</span>', 'a time', 'Wann beginnt der Kurs?', 'Um acht. / Morgen.'],
          ['<span class="de r-question">Warum?</span>', 'a reason', 'Warum lernst du Deutsch?', 'Für die Arbeit.'],
          ['<span class="de r-question">Wie lange?</span>', 'a duration', 'Wie lange lernst du Deutsch?', 'Sechs Monate.']
        ]
      },
      note: 'A <b>Warum?</b> question can be answered with a short phrase — <i>Für die Arbeit</i>, <i>Für mein Studium</i> — and that is enough at this level. A full "because …" sentence needs <span class="de">weil</span>, which changes the word order; you will meet it later. You will hear it in this chapter\'s Listening, so recognise it, but you do not have to produce it yet.',
      hinglish: 'Teen aur W-Wort, aur naam ke baad sabse zyada yahi poochhe jaate hain: <b>kab</b>, <b>kyun</b> aur <b>kitne samay se</b>. Achhi baat: inke jawaab mein koi khaas preposition yaad nahi karna padta — place wale teen ki tarah nahi. <b>Wann?</b> ka jawaab time hota hai (<span class="de">Um acht</span>, <span class="de">Morgen</span> — Chapter 3 ke numbers yahan kaam aayenge). <b>Warum?</b> ka jawaab is level par ek chhota phrase bhi kaafi hai: <span class="de">Für die Arbeit</span>. <b>Wie lange?</b> ka jawaab ek duration: <span class="de">Sechs Monate</span>. Poora "kyunki…" wala jawaab <span class="de">weil</span> se banta hai, jo word order badal deta hai — woh baad mein aayega. Listening mein sunoge, samajh lo, par abhi bolna zaruri nahi.',
      memoryTrick: '<b>Wann</b> mein "n" hai jaise "<b>n</b>umber par time". <b>Warum</b> ka jawaab hamesha ek <b>wajah</b>.',
      recap: [
        '<b>Wann?</b> → a time. <b>Warum?</b> → a reason. <b>Wie lange?</b> → a duration.',
        'A short phrase answers <b>Warum?</b> perfectly at A1.',
        'None of the three needs a special answer preposition.'
      ],
      connect: { from: 'Chapter 3', text: 'Answering <b>Wann?</b> is where your numbers earn their keep — <span class="de">Um acht</span>, <span class="de">Um neun</span>. And <span class="de">welcher / welche / welches</span> ("which one?") gets its own chapter later, once you know the articles from Chapter 10.' }
    },
    {
      title: 'Word order: verb in second position',
      whatIsIt: 'This is the rule that decides whether your question is right or wrong. The <span class="de r-question">W-word</span> takes the first slot, the <span class="de r-verb">verb</span> takes the second, and the <span class="de r-subject">subject</span> follows the verb.',
      body: [
        'You already know this rule — it is the verb-second habit from Chapter 5. Nothing new is happening; the W-word has simply moved into the slot that <i>Jetzt</i> or <i>Ich</i> used to occupy.'
      ],
      goldenRule: 'W-word, then <b>verb</b>, then subject. The verb never waits behind the subject.',
      formula: [
        '[ W-word ] + [ VERB ] + [ subject ] + [ rest ] ?',
        'Woher      | kommst | du        | ?',
        'Warum      | lernst | du        | Deutsch ?'
      ],
      table: {
        head: ['1 · W-word', '2 · Verb', '3 · Subject', 'Rest'],
        rows: [
          ['<span class="de r-question">Woher</span>', '<span class="de r-verb">kommst</span>', '<span class="de r-subject">du</span>', '?'],
          ['<span class="de r-question">Wo</span>', '<span class="de r-verb">wohnst</span>', '<span class="de r-subject">du</span>', '?'],
          ['<span class="de r-question">Wie</span>', '<span class="de r-verb">heißt</span>', '<span class="de r-subject">du</span>', '?'],
          ['<span class="de r-question">Warum</span>', '<span class="de r-verb">lernst</span>', '<span class="de r-subject">du</span>', 'Deutsch?']
        ]
      },
      note: 'One case looks like an exception and is not. When the W-word <b>is itself the subject</b>, there is no second subject to place: <span class="de">Wer kommt aus Indien?</span>, <span class="de">Was ist das?</span> The verb is still in slot 2 — slot 3 is simply empty, because <i>wer</i> and <i>was</i> are already doing that job. So never write <i>Wer kommst du?</i>',
      why: 'German lets you move almost everything else around, so the listener needs one fixed landmark to know what is happening. That landmark is the verb in slot 2 — in statements, in questions, everywhere. This is the single most valuable rule in the whole language.',
      hinglish: 'Yeh rule tay karta hai ki tumhara sawaal sahi hai ya galat: <b>W-Wort</b> pehle, <b>Verb</b> <b>doosre</b> par, phir <b>Subjekt</b>. Yeh koi naya rule nahi — Chapter 5 ka wahi "verb doosri seat par" hai; bas pehli seat par ab W-Wort baith gaya hai. Galat: <i>Woher du kommst?</i> — Sahi: <b>Woher kommst du?</b> Ek case exception lagta hai par hai nahi: jab W-Wort khud subject ho, to doosra subject hi nahi hota — <span class="de">Wer kommt aus Indien?</span>, <span class="de">Was ist das?</span> Verb phir bhi doosri seat par hai. Isliye <i>Wer kommst du?</i> kabhi nahi.',
      memoryTrick: 'Verb ki seat <b>number 2</b> hai — statement ho ya sawaal, woh seat nahi badalti.',
      recap: [
        'W-word (1) → verb (2) → subject (3).',
        'Never <i>Woher du kommst?</i> — the subject cannot jump the verb.',
        'If the W-word <b>is</b> the subject, slot 3 is simply empty.'
      ],
      connect: { from: 'Chapter 5', text: 'Exactly the rule you learned for statements: <span class="de">Jetzt wohne ich in Berlin</span>. Statement or question, the verb stays in slot 2.' }
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      whatIsIt: 'Four habits. Two are word order carried over from Hindi and English, two are picking the wrong W-word — and the wrong W-word is the one that gets you a useless answer.',
      body: [ 'Each row is a rule from this chapter, seen from the wrong side.' ],
      mistakes: [
        { wrong: 'Woher du kommst?', right: 'Woher kommst du?', why: 'The verb must come second, straight after the W-word. Hindi and English both put the subject first here; German does not.' },
        { wrong: 'Wo kommst du? (meaning "where from")', right: 'Woher kommst du?', why: 'wo asks where you are, woher asks where you started. Ask wo and you will be told a place you already know.' },
        { wrong: 'Wohin wohnst du?', right: 'Wo wohnst du?', why: 'wohnen has no movement in it, so it cannot take wohin. Movement verbs (gehen, fahren) take wohin; staying verbs take wo.' },
        { wrong: 'Wie viele Zeit hast du?', right: 'Wie viel Zeit hast du?', why: 'Zeit is measured, not counted, so it takes wie viel. Use wie viele only where a number could stand: wie viele Bücher.' }
      ],
      hinglish: 'Chaar galtiyan hoti hain. Do word order ki hain, jo Hindi aur English dono se aati hain, aur do galat W-Wort chunne ki — aur galat W-Wort ka result yeh hota hai ki jawaab bekaar mil jaata hai. Pehli, verb ko doosri seat par rakhna: <b>Woher kommst du?</b> sahi hai, "Woher du kommst?" nahi. Doosri, origin poochhne ke liye <b>woher</b> chahiye, sirf "wo" nahi. Teesri, <span class="de">wohnen</span> mein koi movement nahi hai, isliye uske saath <b>wohin</b> nahi chalega — wahan <b>wo</b> aayega; movement wale verbs jaise <b>gehen</b> aur <b>fahren</b> ke saath <b>wohin</b> aata hai. Aur chauthi, <b>wie viel</b> un cheezon ke liye hai jo naapi jaati hain (Zeit, Geld), aur <b>wie viele</b> un ke liye jo gini jaati hain (Bücher).',
      memoryTrick: 'Chaar check: verb slot 2 mein? sahi W-Wort? movement hai ya nahi? gin sakte ho ya naap sakte ho?',
      connect: { from: 'the next chapter', text: 'Chapter 7 (<i>Ja oder Nein?</i>) is the other half of asking. There the W-word disappears and the <b>verb itself</b> moves to slot 1 — which is exactly how German signals a yes/no question.' }
    }
  ],
  // ---------- Reading passage (interview dialogue, clickable words) ----------
  reading: {
    title: 'Das Interview',
    titleEn: 'The interview',
    tokens: [
      { w: 'Wie', role: 'r-question', en: 'how / what', hi: 'कैसे', pron: 'vee', type: 'Question word', why: 'w = "v". "Wie heißt du?" asks for a name.', ex: 'Wie heißt du?', exEn: 'What is your name?' },
      { w: 'heißt', role: 'r-verb', en: 'are called', hi: 'कहलाते हो', pron: 'hysst', type: 'Verb · 2nd position', why: 'The verb sits second, right after the W-word. ß = sharp "ss".', ex: 'Wie heißt du?', exEn: 'What is your name?', advanced: { synonyms: [], opposites: [] } },
      { w: 'du', role: 'r-subject', case: 'Nominativ', en: 'you (informal)', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject', why: 'Subject comes after the verb in a W-question.', ex: 'Wer bist du?', exEn: 'Who are you?' },
      { w: '?', plain: true },
      { w: 'Ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Answer begins with the subject.', ex: 'Ich heiße Anna.', exEn: 'My name is Anna.' },
      { w: 'heiße', role: 'r-verb', en: 'am called', hi: 'कहलाती हूँ', pron: 'HY-suh', type: 'Verb · 1st person', why: 'heißen for ich: heiße.', ex: 'Ich heiße Anna.', exEn: 'My name is Anna.', conj: { praesens: 'heißt', praeteritum: 'hieß', perfekt: 'hat geheißen' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'Anna', role: 'r-object', en: 'Anna', hi: 'अना', pron: 'AH-nah', type: 'Name', why: 'The information asked for by "Wie heißt du?".', ex: 'Ich heiße Anna.', exEn: 'My name is Anna.' },
      { w: '.', plain: true },
      { w: 'Woher', role: 'r-question', en: 'from where', hi: 'कहाँ से', pron: 'vo-HAIR', type: 'Question word · origin', why: 'Asks for origin — answer with aus.', ex: 'Woher kommst du?', exEn: 'Where are you from?' },
      { w: 'kommst', role: 'r-verb', en: 'come', hi: 'आते हो', pron: 'komst', type: 'Verb · 2nd position', why: 'kommen for du: kommst — second position.', ex: 'Woher kommst du?', exEn: 'Where do you come from?', conj: { praesens: 'kommt', praeteritum: 'kam', perfekt: 'ist gekommen' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'du', role: 'r-subject', case: 'Nominativ', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject', why: 'After the verb.', ex: 'Woher kommst du?', exEn: 'Where are you from?' },
      { w: '?', plain: true },
      { w: 'Aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'owss', type: 'Preposition + dat.', why: 'The answer to woher: aus + place.', ex: 'Aus Indien.', exEn: 'From India.' },
      { w: 'Indien', role: 'r-place', case: 'Dativ', en: 'India', hi: 'भारत', pron: 'IN-dee-en', type: 'Noun · place', why: 'Origin, after aus.', ex: 'Ich komme aus Indien.', exEn: 'I come from India.' },
      { w: '.', plain: true },
      { w: 'Wo', role: 'r-question', en: 'where', hi: 'कहाँ', pron: 'vo', type: 'Question word · location', why: 'Asks a static location — answer with in.', ex: 'Wo wohnst du?', exEn: 'Where do you live?' },
      { w: 'wohnst', role: 'r-verb', en: 'live', hi: 'रहते हो', pron: 'VOHNST', type: 'Verb · 2nd position', why: 'wohnen for du: wohnst.', ex: 'Wo wohnst du?', exEn: 'Where do you live?', conj: { praesens: 'wohnt', praeteritum: 'wohnte', perfekt: 'hat gewohnt' }, advanced: { synonyms: ['leben'], opposites: [] } },
      { w: 'du', role: 'r-subject', case: 'Nominativ', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject', why: 'After the verb.', ex: 'Wo wohnst du?', exEn: 'Where do you live?' },
      { w: '?', plain: true },
      { w: 'In', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition', why: 'The answer to wo: in + place.', ex: 'In Delhi.', exEn: 'In Delhi.' },
      { w: 'Delhi', role: 'r-place', case: 'Dativ', en: 'Delhi', hi: 'दिल्ली', pron: 'DEH-li', type: 'Noun · place', why: 'Location, after in.', ex: 'Ich wohne in Delhi.', exEn: 'I live in Delhi.' },
      { w: '.', plain: true },
      { w: 'Warum', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'va-RUM', type: 'Question word · reason', why: 'Asks for a reason.', ex: 'Warum lernst du Deutsch?', exEn: 'Why are you learning German?' },
      { w: 'lernst', role: 'r-verb', en: 'learn', hi: 'सीखते हो', pron: 'lairnst', type: 'Verb · 2nd position', why: 'lernen for du: lernst.', ex: 'Warum lernst du Deutsch?', exEn: 'Why are you learning German?', conj: { praesens: 'lernt', praeteritum: 'lernte', perfekt: 'hat gelernt' }, advanced: { synonyms: ['studieren'], opposites: [] } },
      { w: 'du', role: 'r-subject', case: 'Nominativ', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject', why: 'After the verb.', ex: 'Warum lernst du Deutsch?', exEn: 'Why do you learn German?' },
      { w: 'Deutsch', role: 'r-object', case: 'Akkusativ', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun · object', why: 'The thing being learned.', ex: 'Ich lerne Deutsch.', exEn: 'I learn German.' },
      { w: '?', plain: true }
    ],
    translation: 'What is your name? — I am Anna. Where are you from? — From India. Where do you live? — In Delhi. Why are you learning German?'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_006_L001', speaker: 'Sofia', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Felix, wo lernst du am liebsten Deutsch?', en: 'Felix, where do you like to learn German best?' },
      { id: 'A1_006_L002', speaker: 'Felix', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich lerne am liebsten zu Hause.', en: 'I like to learn at home best.' },
      { id: 'A1_006_L003', speaker: 'Sofia', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Wann hast du Zeit dafür?', en: 'When do you have time for that?' },
      { id: 'A1_006_L004', speaker: 'Felix', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Abends, nach der Arbeit.', en: 'In the evenings, after work.' },
      { id: 'A1_006_L005', speaker: 'Sofia', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Warum lernst du abends?', en: 'Why do you study in the evenings?' },
      { id: 'A1_006_L006', speaker: 'Felix', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Weil ich morgens keine Zeit habe.', en: 'Because I have no time in the mornings.' }
    ],
    transcript: 'Felix, wo lernst du am liebsten Deutsch? Ich lerne am liebsten zu Hause. Wann hast du Zeit dafür? Abends, nach der Arbeit. Warum lernst du abends? Weil ich morgens keine Zeit habe.',
    translation: 'Felix, where do you like to learn German best? I like to learn at home best. When do you have time for that? In the evenings, after work. Why do you study in the evenings? Because I have no time in the mornings.',
    tokens: [
      { w: 'Felix' },
      { w: ',', plain: true },
      { w: 'wo' },
      { w: 'lernst' },
      { w: 'du' },
      { w: 'am' },
      { w: 'liebsten' },
      { w: 'Deutsch' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'lerne' },
      { w: 'am' },
      { w: 'liebsten' },
      { w: 'zu' },
      { w: 'Hause' },
      { w: '.', plain: true },
      { w: 'Wann' },
      { w: 'hast' },
      { w: 'du' },
      { w: 'Zeit' },
      { w: 'dafür' },
      { w: '?', plain: true },
      { w: 'Abends' },
      { w: ',', plain: true },
      { w: 'nach' },
      { w: 'der' },
      { w: 'Arbeit' },
      { w: '.', plain: true },
      { w: 'Warum' },
      { w: 'lernst' },
      { w: 'du' },
      { w: 'abends' },
      { w: '?', plain: true },
      { w: 'Weil' },
      { w: 'ich' },
      { w: 'morgens' },
      { w: 'keine' },
      { w: 'Zeit' },
      { w: 'habe' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wo lernt Felix am liebsten?', qEn: 'Where does Felix like to study best?', options: ['Im Kurs', 'Zu Hause', 'Im Café', 'In der Bibliothek'], optionsEn: ['in class', 'at home', 'at the café', 'in the library'], answer: 1,
        explain: '"Ich lerne am liebsten zu Hause."' },
      { q: 'Warum lernt Felix abends?', qEn: 'Why does Felix study in the evenings?', options: ['Er hat morgens keine Zeit.', 'Er ist müde.', 'Er arbeitet abends.', 'Er mag den Abend.'], optionsEn: ['He has no time in the mornings.', 'He is tired.', 'He works evenings.', 'He likes the evening.'], answer: 0,
        explain: '"Weil ich morgens keine Zeit habe."' }
    ]
  },

  speaking: [
    { task: "Mini-Interview im Kurs: Frag deinen Partner drei Fragen.", taskEn: "Mini interview in class: ask your partner three questions.", de: "Wie heißt du? Woher kommst du? Wo wohnst du?", en: "What's your name? Where are you from? Where do you live?" },
    { task: "Dein Partner lernt abends Deutsch. Frag nach dem Grund.", taskEn: "Your partner studies German in the evening. Ask why.", de: "Warum lernst du abends Deutsch?", en: "Why do you study German in the evening?" },
    { task: "Dein Partner fragt: Wo lernst du am liebsten?", taskEn: "Your partner asks: where do you like studying most?", de: "Ich lerne am liebsten zu Hause.", en: "I like studying at home best." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five W-questions, each starting with a different W-word (wer, was, wo, woher, warum). Then write a short three-line mini-dialogue using two of them, with answers. Keep the verb in second position.',
    starters: ['Wie …?', 'Woher …?', 'Warum …?'],
    placeholder: 'Wie heißt du? …',
    minWords: 14
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which W-word asks for a place? "___ wohnst du?"',
      options: ['Wer', 'Was', 'Wo', 'Warum'],
      answer: 2,
      explain: 'Wo asks for a (static) location: "Wo wohnst du?"'
    },
    gap: {
      // Choose the right W-word.
      sentence: ['', ' kommst du? — Aus Indien. ', ' heißt du? — Anna.'],
      gaps: [ { answer: 'Woher', accepts: ['woher'] }, { answer: 'Wie', accepts: ['wie'] } ],
      explain: 'Woher kommst du? (origin → aus). Wie heißt du? (name).'
    },
    match: {
      q: 'Match each W-word to what it asks for.',
      pairs: [
        { noun: 'Wer?', art: 'a person' },
        { noun: 'Was?', art: 'a thing' },
        { noun: 'Wann?', art: 'a time' },
        { noun: 'Warum?', art: 'a reason' }
      ]
    },
    builder: {
      target: 'Build the question: "Where do you come from?"',
      bank: ['kommst', 'Woher', 'du'],
      answer: ['Woher', 'kommst', 'du'],
      roles: { 'Woher': 'r-question', 'kommst': 'r-verb', 'du': 'r-subject' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which W-word asks for a person?', options: ['Was', 'Wer', 'Wo', 'Wann'], answer: 1,
      explain: 'Wer = who → asks for a person.' },
    { q: 'Complete for origin: "___ kommst du?"', options: ['Wo', 'Wohin', 'Woher', 'Wie'], answer: 2,
      explain: 'Woher asks for origin and is answered with aus + place.' },
    { q: 'Where does the verb go in a W-question?', options: ['Position 1', 'Position 2', 'Last', 'After the subject'], answer: 1,
      explain: 'The verb is always in second position: "Woher kommst du?"' },
    { q: 'Which question is correctly built?', options: ['Woher du kommst?', 'Du woher kommst?', 'Woher kommst du?', 'Kommst woher du?'], answer: 2,
      explain: 'W-word + verb + subject: "Woher kommst du?"' },
    { q: '"Wann beginnt der Kurs?" asks about…', options: ['a place', 'a reason', 'a time', 'a person'], answer: 2,
      explain: 'Wann = when → asks for a time.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-question', html: 'W-Fragen start with a <b>W-word</b>: <span class="de">wer, was, wie, wo, woher, wohin, wann, warum</span> — each asks for one kind of thing.' },
    { c: 'r-verb', html: 'Word order: W-word first, <b>verb in second position</b>, then the subject — <span class="de">Woher kommst du?</span>' },
    { c: 'r-object', html: 'Watch the place trio: <span class="de">wo</span> (location, in), <span class="de">woher</span> (origin, aus), <span class="de">wohin</span> (destination, nach).' }
  ],
  revisionTips: [
    'Pick an object around you and ask all the W-questions you can about it.',
    'Drill the wo / woher / wohin trio with their answer words (in / aus / nach).',
    'Whenever you build a question, check: is the verb in second position?'
  ]
};

window.CHAPTER = CHAPTER;
