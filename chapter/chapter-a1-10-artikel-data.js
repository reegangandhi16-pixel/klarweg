/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 2 · Chapter 10
   "Der / Die / Das"  (Definite articles, gender & plural basics)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-10 word list (71 words).
   Recycles Chapters 1–9 throughout.
============================================================ */
const CHAPTER = {
  id: 'a1-10-artikel',
  phase: 'A1 · Phase 2',
  number: 10,
  title: 'Der / Die / Das',
  titleEn: 'Articles & Gender',
  description: 'Every German noun has a gender — der (m), die (f) or das (n) — and the article is part of the word. Learn the patterns that hint at gender, the one habit that saves you years of mistakes, and how plural turns almost everything into die.',
  xp: 170,
  time: 50,
  difficulty: 'Beginner',
  nextChapter: { number: 11, title: 'Kein & Nicht', titleEn: 'Negation' , href: 'chapter-a1-11-negation.html' },

  heroAnimationPath: null,

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Never learn a German noun alone — learn it <b>with its article</b>. Not <i class="de">Tisch</i> but <span class="de r-subject">der Tisch</span>; not <i class="de">Straße</i> but <span class="de r-article">die Straße</span>. The colour of the article (<span class="de r-subject">der</span>/<span class="de r-article">die</span>/<span class="de r-object">das</span>) is the gender, and you carry it for life.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is DEFINITE ARTICLES & GENDER: der (masculine), die (feminine), das (neuter), the plural die, and the indefinite ein/eine. ' +
    'The learner wrote nouns with articles and/or short sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Definite articles (nominative): masculine der, feminine die, neuter das, plural die.\n' +
    '- Indefinite articles (nominative): masculine ein, feminine eine, neuter ein. There is no plural indefinite article.\n' +
    '- Gender is a property of the noun and must be memorised with it (der Tisch, die Straße, das Buch). Do not "logic" gender from meaning.\n' +
    '- Helpful tendencies (not absolute rules): nouns ending in -e are often feminine (die Karte, die Flasche); -chen and -lein are always neuter (das Würstchen, das Mädchen); -ung, -heit, -keit, -tion are feminine.\n' +
    '- All German nouns are capitalised.\n' +
    '- In the nominative, the article before a subject keeps these forms; do not change them for number/price.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why (gender/article). If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Article check:</b> one sentence on whether each noun has the correct der/die/das.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you are learning nouns with their articles. Move on to <span class="de">Kein & Nicht</span>.',
    mid: 'Good. Re-read the gender-pattern card once, then continue.',
    low: 'Worth another pass — revisit the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Der', role: 'r-article' }, { w: 'Tisch', role: 'r-subject' },
    { w: 'ist', role: 'r-verb' }, { w: 'leer', role: 'r-adjective' },
    { w: '.', role: '' }
  ],

  story: {
    eyebrow: 'Story-based learning',
    headline: 'der, die, <em>das.</em>',
    intro: 'Kai points around the classroom and Julia names each object — but every noun comes with a colour: der, die or das. A quick trick turns the hardest habit in German into a game.',
    outcomes: ['Every word is clickable for meaning + audio', 'Hear each noun with its article', 'The der/die/das colours in action'],
    scene: 'Im Klassenzimmer — Deutschkurs',
    femaleSpeakers: ['Julia'],
    dialogue: [
      { speaker: 'Kai', tokens: [
        { w: 'Hallo', role: 'r-subject', en: 'hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting' },
        { w: 'Julia', role: 'r-name', en: 'Julia', hi: 'यूलिया', pron: 'YOO-lya', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'kurz', role: 'r-adjective', en: 'briefly', hi: 'थोड़ी देर', pron: 'kurts', type: 'Adjective' },
        { w: 'Zeit', role: 'r-object', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'Hello Julia! Do you have a bit of time?', hi: 'Namaste Julia! Thodi der time hai?' },
      { speaker: 'Julia', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer word' },
        { w: ',', plain: true },
        { w: 'klar', role: 'r-adverb', en: 'sure', hi: 'बिल्कुल', pron: 'klahr', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'brauchst', role: 'r-verb', en: 'do you need', hi: 'चाहिए', pron: 'BROWKHST', type: 'Verb · brauchen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Yes, sure! What do you need?', hi: 'Haan, bilkul! Tumhe kya chahiye?' },
      { speaker: 'Kai', tokens: [
        { w: 'Was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: ',', plain: true },
        { w: 'Julia', role: 'r-name', en: 'Julia', hi: 'यूलिया', pron: 'YOO-lya', type: 'Name · person' },
        { w: '?', plain: true }
      ], en: 'What is that, Julia?', hi: 'Ye kya hai, Julia?' },
      { speaker: 'Julia', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'this', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-article', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.', why: 'der Tisch — masculine.', ex: 'Der Tisch ist groß.', exEn: 'The table is big.' },
        { w: 'Tisch', role: 'r-object', en: 'table', hi: 'मेज़', pron: 'tish', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'That is the table.', hi: 'Ye mez hai.' },
      { speaker: 'Kai', tokens: [
        { w: 'Sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Welchen', role: 'r-question', en: 'which', hi: 'कौनसा', pron: 'VEL-khen', type: 'Question word', why: 'welchen Artikel = which article.', ex: 'Welchen Artikel hat das?', exEn: 'Which article does it have?' },
        { w: 'Artikel', role: 'r-object', en: 'article', hi: 'आर्टिकल', pron: 'ar-TEE-kel', type: 'Noun · masc.', why: 'der Artikel (Ch10).', ex: 'Welchen Artikel hat Karte?', exEn: 'Which article does "Karte" have?' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben (er/sie/es)' },
        { w: 'Karte', role: 'r-object', en: 'card', hi: 'कार्ड', pron: 'KAR-tuh', type: 'Noun · fem.', why: 'die Karte (Ch10) — the -e ending hints feminine.', ex: 'Die Karte ist neu.', exEn: 'The card is new.' },
        { w: '?', plain: true }
      ], en: 'Very good! Which article does "Karte" have?', hi: 'Bahut achha! "Karte" ka kaunsa article hai?' },
      { speaker: 'Julia', side: 'right', tokens: [
        { w: 'Die', role: 'r-article', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'feminin', role: 'r-adjective', en: 'feminine', hi: 'स्त्रीलिंग', pron: 'fe-mi-NEEN', type: 'Adjective', why: 'feminin (Ch10).', ex: 'Die Karte ist feminin.', exEn: 'Die Karte is feminine.' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'das', role: 'r-article', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neuter' },
        { w: 'Buch', role: 'r-subject', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neuter', why: 'das Buch (Ch10).', ex: 'Das Buch ist neutrum.', exEn: 'Das Buch is neuter.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'neutrum', role: 'r-adjective', en: 'neuter', hi: 'नपुंसकलिंग', pron: 'NOY-trum', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Die is feminine. And das Buch is neuter.', hi: 'Die feminine hai. Aur das Buch neuter hai.' },
      { speaker: 'Kai', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neuter' },
        { w: '…', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'schwer', role: 'r-adjective', en: 'hard', hi: 'मुश्किल', pron: 'shvair', type: 'Adjective' },
        { w: '!', plain: true }
      ], en: 'der, die, das … that is hard!', hi: 'der, die, das … ye mushkil hai!' },
      { speaker: 'Julia', side: 'right', tokens: [
        { w: 'Lern', role: 'r-verb', en: 'learn', hi: 'सीखो', pron: 'lairn', type: 'Verb · imperative' },
        { w: 'das', role: 'r-article', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neuter' },
        { w: 'Nomen', role: 'r-object', en: 'noun', hi: 'संज्ञा', pron: 'NOH-men', type: 'Noun · neuter', why: 'das Nomen (Ch10).', ex: 'Lerne das Nomen mit dem Artikel.', exEn: 'Learn the noun with its article.' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'Artikel', role: 'r-object', en: 'article', hi: 'आर्टिकल', pron: 'ar-TEE-kel', type: 'Noun · masc.' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: ',', plain: true },
        { w: 'Kai', role: 'r-name', en: 'Kai', hi: 'काई', pron: 'kye', type: 'Name · person' },
        { w: '.', plain: true }
      ], en: 'Learn the noun and the article together, Kai.', hi: 'Noun aur article saath mein seekho, Kai.' },
      { speaker: 'Kai', tokens: [
        { w: 'Trick', role: 'r-subject', en: 'trick', hi: 'तरकीब', pron: 'trik', type: 'Noun · masc.' },
        { w: ':', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mache', role: 'r-verb', en: 'make', hi: 'बनाता हूँ', pron: 'MA-khuh', type: 'Verb · machen (ich)' },
        { w: 'eine', role: 'r-article', en: 'an', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem.' },
        { w: 'Assoziation', role: 'r-object', en: 'association', hi: 'संबंध', pron: 'a-so-tsya-TSYOHN', type: 'Noun · fem.', why: 'die Assoziation (Ch10).', ex: 'Ich mache eine Assoziation.', exEn: 'I make an association.' },
        { w: '!', plain: true }
      ], en: 'Trick: I make an association!', hi: 'Trick: main ek association banaata hoon!' },
      { speaker: 'Julia', side: 'right', tokens: [
        { w: 'Super', role: 'r-subject', en: 'great', hi: 'बहुत बढ़िया', pron: 'ZOO-per', type: 'Interjection' },
        { w: ',', plain: true },
        { w: 'Kai', role: 'r-name', en: 'Kai', hi: 'काई', pron: 'kye', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'eine', role: 'r-article', en: 'a', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem.' },
        { w: 'gute', role: 'r-adjective', en: 'good', hi: 'अच्छी', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Methode', role: 'r-object', en: 'method', hi: 'तरीका', pron: 'may-TOH-duh', type: 'Noun · fem.', why: 'die Methode (Ch10).', ex: 'Das ist eine gute Methode.', exEn: 'That is a good method.' },
        { w: '.', plain: true }
      ], en: 'Perfect, Kai! That is a good method.', hi: 'Perfect, Kai! Yeh ek achhi method hai.' },
      { speaker: 'Kai', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: ',', plain: true },
        { w: 'Julia', role: 'r-name', en: 'Julia', hi: 'यूलिया', pron: 'YOO-lya', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'verstehe', role: 'r-verb', en: 'understand', hi: 'समझता हूँ', pron: 'fair-SHTAY-uh', type: 'Verb · verstehen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: '!', plain: true }
      ], en: 'Thanks, Julia! Now I understand that!', hi: 'Dhanyavaad, Julia! Ab main yeh samajhta hoon!' }
    ]
  },

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole chapter at a glance before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meet the characters and hear this chapter’s words in a real conversation first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn everyday nouns together with their articles — der, die or das — plus the words to talk about gender.' },
    { id: 'grammar',    label: 'Gender System', tag: 'core',
      objective: 'Master der/die/das, the gender patterns, ein/eine, and how plural becomes die.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a classroom-objects text and tap any word to hear it and see its article.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Hear objects named with their articles, then answer der, die or das.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Name objects aloud with the correct article and quiz a partner.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five nouns with their articles and a short sentence for each.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill article choice, gender sorting, and noun+article matching with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 170 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 71 nouns and helper words with articles, genders, translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '13 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Article sorting, gender drills, noun+article matching, and self-study activities.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Gender Rules PDF',
      desc: 'der/die/das, the gender-ending patterns, ein/eine, plural die, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '11 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'der · die · das', text: 'Recognise the three definite articles and their genders' },
    { de: 'das Nomen + Artikel', text: 'Learn every noun together with its article' },
    { de: 'Endungen', text: 'Use word-ending patterns to guess gender' },
    { de: 'ein / eine', text: 'Use the indefinite articles a/an correctly' },
    { de: 'der Plural', text: 'Know that plural nouns all take die' }
  ],

  // ---------- Vocabulary (71 words) ----------
  vocab: [
    // — Core active —
    { de: 'Auto', art: 'das', gender: 'n', plural: 'Autos', pos: 'noun', en: 'car', hi: 'कार',
      ex: 'Das Auto ist neu.', exEn: 'The car is new.' },
    { de: 'Buch', art: 'das', gender: 'n', plural: 'Bücher', pos: 'noun', en: 'book', hi: 'किताब',
      ex: 'Das Buch liegt auf dem Tisch.', exEn: 'The book is on the table.' },
    { de: 'Computer', art: 'der', gender: 'm', plural: 'Computer', pos: 'noun', en: 'computer', hi: 'कंप्यूटर',
      ex: 'Der Computer ist schnell.', exEn: 'The computer is fast.' },
    { de: 'Stift', art: 'der', gender: 'm', plural: 'Stifte', pos: 'noun', en: 'pen, pencil', hi: 'कलम',
      ex: 'Der Stift schreibt gut.', exEn: 'The pen writes well.' },
    { de: 'Tisch', art: 'der', gender: 'm', plural: 'Tische', pos: 'noun', en: 'table', hi: 'मेज़',
      ex: 'Der Tisch ist groß.', exEn: 'The table is big.' },
    { de: 'Straße', art: 'die', gender: 'f', plural: 'Straßen', pos: 'noun', en: 'street', hi: 'सड़क',
      ex: 'Die Straße ist lang.', exEn: 'The street is long.' },
    { de: 'der/die/das', pos: 'article (definite)', en: 'the', hi: 'निश्चित आर्टिकल',
      ex: 'der Tisch, die Straße, das Buch', exEn: 'the table, the street, the book' },
    { de: 'die', pos: 'article (plural)', en: 'the (plural)', hi: 'the (बहुवचन)',
      ex: 'die Bücher, die Tische', exEn: 'the books, the tables' },
    { de: 'ein/eine', pos: 'article (indefinite)', en: 'a, an', hi: 'अनिश्चित आर्टिकल',
      ex: 'ein Tisch, eine Straße', exEn: 'a table, a street' },
    // — Active support —
    { de: 'Beispiel', art: 'das', gender: 'n', plural: 'Beispiele', pos: 'noun', en: 'example', hi: 'उदाहरण',
      ex: 'Das ist ein gutes Beispiel.', exEn: 'That is a good example.' },
    { de: 'Foto', art: 'das', gender: 'n', plural: 'Fotos', pos: 'noun', en: 'photo', hi: 'फ़ोटो',
      ex: 'Das Foto ist schön.', exEn: 'The photo is beautiful.' },
    { de: 'Wörterbuch', art: 'das', gender: 'n', plural: 'Wörterbücher', pos: 'noun', en: 'dictionary', hi: 'शब्दकोश',
      ex: 'Das Wörterbuch hat viele Wörter.', exEn: 'The dictionary has many words.' },
    { de: 'Schlüssel', art: 'der', gender: 'm', plural: 'Schlüssel', pos: 'noun', en: 'key', hi: 'चाबी',
      ex: 'Der Schlüssel ist klein.', exEn: 'The key is small.' },
    { de: 'Karte', art: 'die', gender: 'f', plural: 'Karten', pos: 'noun', en: 'card', hi: 'कार्ड',
      ex: 'Die Karte ist neu.', exEn: 'The card is new.' },
    { de: 'leer', pos: 'adjective', en: 'empty', hi: 'खाली',
      ex: 'Der Tisch ist leer.', exEn: 'The table is empty.',
      compare: { comparative: 'leerer', superlative: 'am leersten' } },
    { de: 'merken', pos: 'verb', en: 'to remember, note', hi: 'याद रखना',
      ex: 'Merke dir den Artikel!', exEn: 'Remember the article!',
      conj: { praesens: 'merkt', praeteritum: 'merkte', perfekt: 'hat gemerkt' } },
    { de: 'noch', pos: 'adverb', en: 'yet, still, any', hi: 'अभी / और',
      ex: 'Hast du noch eine Karte?', exEn: 'Do you have another card?' },
    // — Passive (mostly neuter & masculine compound nouns) —
    { de: 'Artikelbild', art: 'das', gender: 'n', plural: 'Artikelbilder', pos: 'noun', en: 'article picture', hi: 'लेख-चित्र',
      ex: 'Das Artikelbild zeigt ein Auto.', exEn: 'The article picture shows a car.' },
    { de: 'Butterbrot', art: 'das', gender: 'n', plural: 'Butterbrote', pos: 'noun', en: 'sandwich', hi: 'सैंडविच',
      ex: 'Das Butterbrot schmeckt gut.', exEn: 'The sandwich tastes good.' },
    { de: 'Experiment', art: 'das', gender: 'n', plural: 'Experimente', pos: 'noun', en: 'experiment', hi: 'प्रयोग',
      ex: 'Das Experiment ist interessant.', exEn: 'The experiment is interesting.' },
    { de: 'Gästebuch', art: 'das', gender: 'n', plural: 'Gästebücher', pos: 'noun', en: 'guestbook', hi: 'अतिथि-पुस्तिका',
      ex: 'Schreib bitte ins Gästebuch.', exEn: 'Please write in the guestbook.' },
    { de: 'Handtuch', art: 'das', gender: 'n', plural: 'Handtücher', pos: 'noun', en: 'towel', hi: 'तौलिया',
      ex: 'Das Handtuch ist nass.', exEn: 'The towel is wet.' },
    { de: 'Heft', art: 'das', gender: 'n', plural: 'Hefte', pos: 'noun', en: 'exercise book', hi: 'कॉपी',
      ex: 'Das Heft hat zwanzig Seiten.', exEn: 'The exercise book has twenty pages.' },
    { de: 'Kursplakat', art: 'das', gender: 'n', plural: 'Kursplakate', pos: 'noun', en: 'course poster', hi: 'कोर्स पोस्टर',
      ex: 'Das Kursplakat hängt an der Wand.', exEn: 'The course poster hangs on the wall.' },
    { de: 'Paar', art: 'das', gender: 'n', plural: 'Paare', pos: 'noun', en: 'pair', hi: 'जोड़ा',
      ex: 'Arbeitet in Paaren!', exEn: 'Work in pairs!' },
    { de: 'Plakat', art: 'das', gender: 'n', plural: 'Plakate', pos: 'noun', en: 'poster', hi: 'पोस्टर',
      ex: 'Das Plakat ist bunt.', exEn: 'The poster is colourful.' },
    { de: 'Würstchen', art: 'das', gender: 'n', plural: 'Würstchen', pos: 'noun', en: 'small sausage', hi: 'सॉसेज',
      ex: 'Das Würstchen ist heiß.', exEn: 'The sausage is hot.' },
    { de: 'Würstel', art: 'das', gender: 'n', plural: 'Würstel', pos: 'noun', en: 'sausage (Austrian)', hi: 'सॉसेज (ऑस्ट्रियन)',
      ex: 'In Wien sagt man "das Würstel".', exEn: 'In Vienna you say "das Würstel".' },
    { de: 'Bericht', art: 'der', gender: 'm', plural: 'Berichte', pos: 'noun', en: 'report', hi: 'रिपोर्ट',
      ex: 'Der Bericht ist fertig.', exEn: 'The report is finished.' },
    { de: 'Blog', art: 'der', gender: 'm', plural: 'Blogs', pos: 'noun', en: 'blog', hi: 'ब्लॉग',
      ex: 'Der Blog ist auf Deutsch.', exEn: 'The blog is in German.' },
    { de: 'Eintrag', art: 'der', gender: 'm', plural: 'Einträge', pos: 'noun', en: 'entry', hi: 'प्रविष्टि',
      ex: 'Der Eintrag ist kurz.', exEn: 'The entry is short.' },
    { de: 'Kindergarten', art: 'der', gender: 'm', plural: 'Kindergärten', pos: 'noun', en: 'kindergarten', hi: 'किंडरगार्टन',
      ex: 'Der Kindergarten ist groß.', exEn: 'The kindergarten is big.' },
    { de: 'Koffer', art: 'der', gender: 'm', plural: 'Koffer', pos: 'noun', en: 'suitcase', hi: 'सूटकेस',
      ex: 'Der Koffer ist schwer.', exEn: 'The suitcase is heavy.' },
    { de: 'Stapel', art: 'der', gender: 'm', plural: 'Stapel', pos: 'noun', en: 'pile, deck', hi: 'ढेर',
      ex: 'Der Stapel Karten ist hoch.', exEn: 'The pile of cards is high.' },
    { de: 'Kranke', art: 'der/die', gender: 'm', plural: 'Kranken', pos: 'noun', en: 'sick person', hi: 'बीमार व्यक्ति',
      ex: 'Der Kranke braucht Ruhe.', exEn: 'The sick person needs rest.' },
    { de: 'Anzeige', art: 'die', gender: 'f', plural: 'Anzeigen', pos: 'noun', en: 'advert', hi: 'विज्ञापन',
      ex: 'Die Anzeige ist im Blog.', exEn: 'The advert is in the blog.' },
    { de: 'Assoziation', art: 'die', gender: 'f', plural: 'Assoziationen', pos: 'noun', en: 'association', hi: 'संबंध',
      ex: 'Die Assoziation hilft beim Merken.', exEn: 'The association helps you remember.' },
    { de: 'Autobahn', art: 'die', gender: 'f', plural: 'Autobahnen', pos: 'noun', en: 'highway', hi: 'राजमार्ग',
      ex: 'Die Autobahn ist frei.', exEn: 'The highway is clear.' },
    { de: 'Flasche', art: 'die', gender: 'f', plural: 'Flaschen', pos: 'noun', en: 'bottle', hi: 'बोतल',
      ex: 'Die Flasche ist leer.', exEn: 'The bottle is empty.' },
    { de: 'Homepage', art: 'die', gender: 'f', plural: 'Homepages', pos: 'noun', en: 'homepage', hi: 'होमपेज',
      ex: 'Die Homepage ist neu.', exEn: 'The homepage is new.' },
    { de: 'Methode', art: 'die', gender: 'f', plural: 'Methoden', pos: 'noun', en: 'method', hi: 'तरीका',
      ex: 'Die Methode ist einfach.', exEn: 'The method is simple.' },
    { de: 'Mindmap', art: 'die', gender: 'f', plural: 'Mindmaps', pos: 'noun', en: 'mind map', hi: 'माइंड मैप',
      ex: 'Die Mindmap zeigt die Artikel.', exEn: 'The mind map shows the articles.' },
    { de: 'Nudel', art: 'die', gender: 'f', plural: 'Nudeln', pos: 'noun', en: 'noodle', hi: 'नूडल',
      ex: 'Die Nudel ist lang.', exEn: 'The noodle is long.' },
    { de: 'Zeichnung', art: 'die', gender: 'f', plural: 'Zeichnungen', pos: 'noun', en: 'drawing', hi: 'चित्र',
      ex: 'Die Zeichnung ist schön.', exEn: 'The drawing is beautiful.' },
    { de: 'eigene/eigener', pos: 'adjective', en: 'own', hi: 'अपना',
      ex: 'Mach deine eigene Mindmap.', exEn: 'Make your own mind map.' },
    { de: 'einfallen', pos: 'verb', en: 'to think of, occur to', hi: 'याद आना / सूझना',
      ex: 'Mir fällt das Wort ein.', exEn: 'The word comes to me.',
      conj: { praesens: 'fällt ein', praeteritum: 'fiel ein', perfekt: 'ist eingefallen' } },
    { de: 'recherchieren', pos: 'verb', en: 'to research', hi: 'खोज करना',
      ex: 'Ich recherchiere im Blog.', exEn: 'I research in the blog.',
      conj: { praesens: 'recherchiert', praeteritum: 'recherchierte', perfekt: 'hat recherchiert' } },
    { de: 'thematisch', pos: 'adjective', en: 'thematic', hi: 'विषय-आधारित',
      ex: 'Ordne die Wörter thematisch.', exEn: 'Sort the words thematically.' },
    { de: 'verwenden', pos: 'verb', en: 'to use', hi: 'इस्तेमाल करना',
      ex: 'Verwende den richtigen Artikel.', exEn: 'Use the correct article.',
      conj: { praesens: 'verwendet', praeteritum: 'verwendete', perfekt: 'hat verwendet' } },
    { de: 'weitere', pos: 'adjective', en: 'further, more', hi: 'और / अतिरिक्त',
      ex: 'Nenne weitere Beispiele.', exEn: 'Name further examples.' },
    { de: 'ziehen', pos: 'verb', en: 'to draw (a card)', hi: 'खींचना / कार्ड निकालना',
      ex: 'Zieh eine Karte vom Stapel.', exEn: 'Draw a card from the pile.',
      conj: { praesens: 'zieht', praeteritum: 'zog', perfekt: 'hat gezogen' } },
    // — Reference / System —
    { de: 'berichten', pos: 'verb', en: 'to report', hi: 'रिपोर्ट करना',
      ex: 'Berichte über deinen Tag.', exEn: 'Report about your day.',
      conj: { praesens: 'berichtet', praeteritum: 'berichtete', perfekt: 'hat berichtet' } },
    { de: 'bestimmt', pos: 'adjective', en: 'definite', hi: 'निश्चित',
      ex: 'der, die, das sind bestimmte Artikel.', exEn: 'der, die, das are definite articles.' },
    { de: 'Nomen', art: 'das', gender: 'n', plural: 'Nomen', pos: 'noun', en: 'noun', hi: 'संज्ञा',
      ex: 'Jedes Nomen hat einen Artikel.', exEn: 'Every noun has an article.' },
    { de: 'Wortende', art: 'das', gender: 'n', plural: 'Wortenden', pos: 'noun', en: 'word ending', hi: 'शब्द का अंत',
      ex: 'Das Wortende -ung ist feminin.', exEn: 'The word ending -ung is feminine.' },
    { de: 'Artikel', art: 'der', gender: 'm', plural: 'Artikel', pos: 'noun', en: 'article (gram.)', hi: 'आर्टिकल',
      ex: 'Lerne den Artikel mit dem Nomen.', exEn: 'Learn the article with the noun.' },
    { de: 'Plural', art: 'der', gender: 'm', plural: 'Plurale', pos: 'noun', en: 'plural', hi: 'बहुवचन',
      ex: 'Im Plural heißt es immer "die".', exEn: 'In the plural it is always "die".' },
    { de: 'Singular', art: 'der', gender: 'm', plural: 'Singulare', pos: 'noun', en: 'singular', hi: 'एकवचन',
      ex: 'Der Singular von "Bücher" ist "Buch".', exEn: 'The singular of "Bücher" is "Buch".' },
    { de: 'Wortteil', art: 'der', gender: 'm', plural: 'Wortteile', pos: 'noun', en: 'word part', hi: 'शब्दांश',
      ex: 'Der Wortteil "-chen" ist neutrum.', exEn: 'The word part "-chen" is neuter.' },
    { de: 'Pluralendung', art: 'die', gender: 'f', plural: 'Pluralendungen', pos: 'noun', en: 'plural ending', hi: 'बहुवचन-प्रत्यय',
      ex: 'Die Pluralendung ist oft -e oder -en.', exEn: 'The plural ending is often -e or -en.' },
    { de: 'Pluralform', art: 'die', gender: 'f', plural: 'Pluralformen', pos: 'noun', en: 'plural form', hi: 'बहुवचन रूप',
      ex: 'Die Pluralform von "Auto" ist "Autos".', exEn: 'The plural form of "Auto" is "Autos".' },
    { de: 'Wortgruppe', art: 'die', gender: 'f', plural: 'Wortgruppen', pos: 'noun', en: 'word group', hi: 'शब्द-समूह',
      ex: 'Ordne die Wortgruppe nach Artikel.', exEn: 'Sort the word group by article.' },
    { de: 'feminin', pos: 'adjective', en: 'feminine', hi: 'स्त्रीलिंग',
      ex: '"die Straße" ist feminin.', exEn: '"die Straße" is feminine.' },
    { de: 'maskulin', pos: 'adjective', en: 'masculine', hi: 'पुल्लिंग',
      ex: '"der Tisch" ist maskulin.', exEn: '"der Tisch" is masculine.' },
    { de: 'neutrum', pos: 'noun/adjective', en: 'neuter', hi: 'नपुंसकलिंग',
      ex: '"das Buch" ist neutrum.', exEn: '"das Buch" is neuter.' },
    { de: 'unbestimmt', pos: 'adjective', en: 'indefinite', hi: 'अनिश्चित',
      ex: 'ein und eine sind unbestimmte Artikel.', exEn: 'ein and eine are indefinite articles.' },
    { de: 'markieren', pos: 'verb', en: 'to highlight, mark', hi: 'चिह्नित करना',
      ex: 'Markiere das Nomen.', exEn: 'Highlight the noun.',
      conj: { praesens: 'markiert', praeteritum: 'markierte', perfekt: 'hat markiert' } },
    { de: 'unterstreichen', pos: 'verb', en: 'to underline', hi: 'रेखांकित करना',
      ex: 'Unterstreiche den Artikel.', exEn: 'Underline the article.',
      conj: { praesens: 'unterstreicht', praeteritum: 'unterstrich', perfekt: 'hat unterstrichen' } },
    { de: 'vergleichen', pos: 'verb', en: 'to compare', hi: 'तुलना करना',
      ex: 'Vergleiche die Artikel.', exEn: 'Compare the articles.',
      conj: { praesens: 'vergleicht', praeteritum: 'verglich', perfekt: 'hat verglichen' } },
    { de: 'zuordnen', pos: 'verb', en: 'to match, assign', hi: 'मिलाना',
      ex: 'Ordne jedem Nomen den Artikel zu.', exEn: 'Match each noun to its article.',
      conj: { praesens: 'ordnet zu', praeteritum: 'ordnete zu', perfekt: 'hat zugeordnet' } },
    { de: 'zusammengehören', pos: 'verb', en: 'to belong together', hi: 'साथ होना',
      ex: 'Nomen und Artikel gehören zusammen.', exEn: 'Noun and article belong together.',
      conj: { praesens: 'gehört zusammen', praeteritum: 'gehörte zusammen', perfekt: 'hat zusammengehört' } }
  ],

  // ---------- Gender System (rule cards → accordion) ----------
  grammar: [
    {
      title: 'der · die · das — the three genders',
      goldenRule: 'Gender is a property of the <b>word</b>, not of the thing. So you learn it with the word, not by thinking about the thing.',
      why: 'Hindi has grammatical gender too, and it does not always match reality either. German simply has three boxes instead of two — and like Hindi, the box was decided centuries before anyone asked whether it made sense.',
      memoryTrick: 'Gender cheez ka nahi, <b>shabd</b> ka hai. Isliye sochna nahi, saath yaad karna hai.',
      body: [
        'Every German <span class="de r-subject">Nomen</span> (noun) has a gender, shown by its <span class="de r-article">Artikel</span> (article). There are three, and English has none of them — so this is new territory.',
        'The article is not optional decoration: it is <i>part of the word</i>. <span class="de r-subject">der</span> = masculine, <span class="de r-article">die</span> = feminine, <span class="de r-object">das</span> = neuter.'
      ],
      table: {
        head: ['Article', 'Gender', 'Example', 'Meaning'],
        rows: [
          ['<span class="de r-subject">der</span>', 'maskulin (m)', '<span class="de r-subject">der Tisch</span>', 'the table'],
          ['<span class="de r-article">die</span>', 'feminin (f)', '<span class="de r-article">die Straße</span>', 'the street'],
          ['<span class="de r-object">das</span>', 'neutrum (n)', '<span class="de r-object">das Buch</span>', 'the book']
        ]
      },
      note: 'Gender is rarely logical — <i>das Mädchen</i> (girl) is neuter! That is why you memorise the article <b>with</b> the noun, not the noun alone.',
      hinglish: 'Har German <b>Nomen</b> (noun) ka ek gender hota hai, jo <b>Artikel</b> dikhata hai: <b>der</b> (maskulin), <b>die</b> (feminin), <b>das</b> (neutrum). Hindi/English jaisa logic mat lagao — <i>das Mädchen</i> (ladki) neutrum hai! Isliye article ko noun ka hissa samjho. Sirf noun yaad karoge to aadha kaam hi hoga, aur baad mein wahi galti banta hai.'
    },
    {
      title: 'The golden rule: learn the article WITH the noun',
      goldenRule: 'Never store a noun alone. <b>der Tisch</b> is the word; <i>Tisch</i> is half a word.',
      memoryTrick: 'Article noun ka <b>surname</b> hai — akela naam adhoora hai.',
      recap: [
        'Learn <b>der Tisch</b>, never <i>Tisch</i>.',
        'Colour or group your words by article, not alphabetically.',
        'A flashcard without an article will teach you wrong German.'
      ],
      body: [
        'The single best habit in all of A1: never write a noun without its colour. Build the article into the word from day one.',
        'Use an <span class="de r-article">Assoziation</span> (association): picture <span class="de r-subject">der Tisch</span> in blue, <span class="de r-article">die Straße</span> in green, <span class="de r-object">das Buch</span> in orange. A <span class="de">Mindmap</span> by colour beats a plain list.'
      ],
      table: {
        head: ['Don\'t learn', 'Learn instead', 'Why'],
        rows: [
          ['Tisch', '<span class="de r-subject">der Tisch</span>', 'gender baked in'],
          ['Straße', '<span class="de r-article">die Straße</span>', 'feminine carried'],
          ['Buch', '<span class="de r-object">das Buch</span>', 'neuter remembered']
        ]
      },
      note: 'On your flashcards (<span class="de">Lernkarten</span> from Chapter 9), always write the article. A card that says just "Tisch" is a card that will teach you the wrong German.',
      hinglish: 'A1 ki sabse achhi aadat: noun kabhi article ke bina mat likho. Pehle din se article andar build karo. <b>Assoziation</b> use karo — der Tisch ko neela, die Straße ko hara, das Buch ko orange socho. Plain list se <b>Mindmap</b> behtar hai. Lernkarte par hamesha article likho — bina article wala card tumhe galat German sikha dega.'
    },
    {
      title: 'Gender hints from word endings',
      goldenRule: 'Endings give you good <b>guesses</b>, not guarantees — except <b>-chen</b> and <b>-lein</b>, which are always neuter.',
      memoryTrick: 'Sirf ek pakka rule: <b>-chen / -lein = das</b>. Baaki sab andaaza hai, aur andaaza bhi kaafi kaam ka hai.',
      body: [
        'Gender is mostly unpredictable, but some <span class="de r-subject">Wortenden</span> (word endings) give strong hints. These are tendencies, not laws — but they help you guess well.'
      ],
      table: {
        head: ['Ending', 'Usually', 'Example'],
        rows: [
          ['-e', 'feminine', '<span class="de r-article">die Karte</span>, <span class="de r-article">die Flasche</span>'],
          ['-ung, -heit, -tion', 'feminine', '<span class="de r-article">die Zeichnung</span>, <span class="de r-article">die Assoziation</span>'],
          ['-chen, -lein', 'neuter (always)', '<span class="de r-object">das Würstchen</span>'],
          ['-er (doer/tool)', 'often masculine', '<span class="de r-subject">der Computer</span>, <span class="de r-subject">der Schlüssel</span>']
        ]
      },
      note: 'The <b>-chen</b>/<b>-lein</b> rule is the one that never breaks: those words are <i>always</i> neuter, whatever they mean.',
      hinglish: 'Gender zyadatar unpredictable hai, par kuch <b>Wortenden</b> (word endings) hint dete hain: <b>-e</b> aksar feminin (die Karte), <b>-ung/-heit/-tion</b> feminin, <b>-chen/-lein</b> hamesha neutrum (das Würstchen), <b>-er</b> (karne wala/tool) aksar maskulin. Yeh tendencies hain, pakke rule sirf -chen/-lein.'
    },
    {
      title: 'ein / eine, and the plural die',
      goldenRule: 'Masculine and neuter share <b>ein</b>; only feminine adds <b>-e</b>. And every plural is <b>die</b>.',
      formula: [
        'm:  der Tisch   →  ein Tisch',
        'f:  die Straße  →  ein<b>e</b> Straße',
        'n:  das Buch    →  ein Buch',
        'pl: die …       →  always <b>die</b>'
      ],
      memoryTrick: 'Plural mein gender ki tension khatam — sab <b>die</b> lete hain. Yeh A1 ka sabse easy rule hai.',
      recap: [
        '<b>ein</b> for masculine and neuter, <b>eine</b> for feminine.',
        'Plural is <b>die</b> for every gender.',
        'No indefinite article exists in the plural.'
      ],
      body: [
        'Besides the <span class="de">bestimmt</span> (definite) der/die/das, there is the <span class="de">unbestimmt</span> (indefinite) ein/eine — English a/an. It follows gender too.',
        'And the good news about the <span class="de r-article">Plural</span>: in the plural, <b>every</b> noun takes <span class="de r-article">die</span>, no matter its singular gender.'
      ],
      table: {
        head: ['Gender', 'definite', 'indefinite', 'plural'],
        rows: [
          ['masculine', '<span class="de r-subject">der</span> Tisch', '<span class="de r-subject">ein</span> Tisch', '<span class="de r-article">die</span> Tische'],
          ['feminine', '<span class="de r-article">die</span> Straße', '<span class="de r-article">eine</span> Straße', '<span class="de r-article">die</span> Straßen'],
          ['neuter', '<span class="de r-object">das</span> Buch', '<span class="de r-object">ein</span> Buch', '<span class="de r-article">die</span> Bücher']
        ]
      },
      note: 'Note masculine and neuter share <b>ein</b>; only feminine adds the -e → <b>eine</b>. And plural is always <b>die</b> — one easy win.',
      hinglish: 'Definite (<b>bestimmt</b>) der/die/das ke alawa indefinite (<b>unbestimmt</b>) <b>ein/eine</b> bhi hai (a/an). Maskulin aur neutrum dono <b>ein</b>; feminin mein <b>eine</b>. Achhi khabar: <b>Plural</b> mein har noun <b>die</b> leta hai — chahe singular ka gender kuch bhi ho. Yeh ek easy win hai.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      whatIsIt: 'Four habits, and the first one is the most expensive: every noun you learn without its article is a word you will get wrong later.',
      body: [ 'Each row is a rule from this chapter, seen from the wrong side.' ],
      mistakes: [
        { wrong: 'learning "Tisch"', right: 'learning "der Tisch"', why: 'Without the article you have only half the word — and will guess the gender wrong later.' },
        { wrong: 'guessing gender by meaning', right: 'memorising the article', why: 'das Mädchen (girl) is neuter; gender is grammatical, not logical.' },
        { wrong: 'die for one feminine thing only', right: 'die also = all plurals', why: 'die marks feminine singular AND every plural: die Bücher, die Tische.' },
        { wrong: 'die Mädchen (thinking: a girl is feminine)', right: 'das Mädchen', why: 'Any noun ending in -chen or -lein is neuter, whatever it means. This is the one gender rule that never breaks.' }
      ],
      hinglish: 'Char galtiyan common hain. Pehli, noun ko akela yaad karna \u2014 <b>der Tisch</b> seekho, kyunki article noun ka hissa hai. Doosri, gender ko meaning se guess karna \u2014 <b>das M\u00e4dchen</b> neuter hai. Teesri, yeh samajhna ki <b>die</b> sirf feminine ke liye hai \u2014 har plural bhi <b>die</b> leta hai, jaise <b>die B\u00fccher</b>. Aur chauthi, yeh bhool jaana ki <b>-chen</b> aur <b>-lein</b> wale nouns hamesha neuter hote hain.'
    }
  ],

  // ---------- Reading passage (classroom objects, clickable) ----------
  reading: {
    title: 'Auf dem Tisch',
    titleEn: 'On the table',
    tokens: [
      { w: 'Der', role: 'r-subject', case: 'Nominativ', en: 'the', hi: 'वह (पु.)', pron: 'dair', type: 'Article · masc.', why: 'Masculine nouns take der in the nominative.', ex: 'Der Tisch ist groß.', exEn: 'The table is big.' },
      { w: 'Tisch', role: 'r-subject', case: 'Nominativ', en: 'table', hi: 'मेज़', pron: 'tish', type: 'Noun · masc.', why: 'der Tisch — masculine (from Chapter 1).', ex: 'Der Tisch ist groß.', exEn: 'The table is big.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein', why: 'From sein (to be).', ex: 'Der Tisch ist leer.', exEn: 'The table is empty.', advanced: { synonyms: [], opposites: [] } },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation', why: 'nicht negates the adjective (from Chapter 7).', ex: 'Der Tisch ist nicht leer.', exEn: 'The table is not empty.' },
      { w: 'leer', role: 'r-adjective', en: 'empty', hi: 'खाली', pron: 'lair', type: 'Adjective', why: 'long "ee" sound (Chapter 2).', ex: 'Der Tisch ist leer.', exEn: 'The table is empty.', compare: { comparative: 'leerer', superlative: 'am leersten' }, advanced: { synonyms: [], opposites: ['voll'] } },
      { w: '.', plain: true },
      { w: 'Da', role: 'r-adverb', en: 'there', hi: 'वहाँ', pron: 'dah', type: 'Adverb', why: 'da = there (from Chapter 4).', ex: 'Da ist ein Buch.', exEn: 'There is a book.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein', why: 'sein again.', ex: 'Da ist das Buch.', exEn: 'There is the book.', advanced: { synonyms: [], opposites: [] } },
      { w: 'ein', role: 'r-article', en: 'a', hi: 'एक', pron: 'ine', type: 'Article · indef. neuter', why: 'ein for masculine & neuter; Buch is neuter.', ex: 'ein Buch', exEn: 'a book' },
      { w: 'Buch', role: 'r-object', case: 'Nominativ', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neuter', why: 'das Buch — neuter (from Chapter 1).', ex: 'Das Buch ist neu.', exEn: 'The book is new.' },
      { w: ',', plain: true },
      { w: 'ein', role: 'r-article', en: 'a', hi: 'एक', pron: 'ine', type: 'Article · indef. masc.', why: 'ein again — Stift is masculine.', ex: 'ein Stift', exEn: 'a pen' },
      { w: 'Stift', role: 'r-object', case: 'Nominativ', en: 'pen', hi: 'कलम', pron: 'shtift', type: 'Noun · masc.', why: 'der Stift — masculine.', ex: 'Der Stift schreibt gut.', exEn: 'The pen writes well.' },
      { w: 'und', role: 'r-preposition', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'final d → "t".', ex: 'Buch und Stift', exEn: 'book and pen' },
      { w: 'eine', role: 'r-article', en: 'a', hi: 'एक', pron: 'EYE-nuh', type: 'Article · indef. fem.', why: 'eine for feminine — Karte is feminine.', ex: 'eine Karte', exEn: 'a card' },
      { w: 'Karte', role: 'r-object', case: 'Nominativ', en: 'card', hi: 'कार्ड', pron: 'KAR-tuh', type: 'Noun · fem.', why: 'die Karte — feminine (the -e ending hints feminine).', ex: 'Die Karte ist neu.', exEn: 'The card is new.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-article', en: 'the (plural)', hi: 'वे', pron: 'dee', type: 'Article · plural', why: 'In the plural every noun takes die.', ex: 'Die Bücher sind hier.', exEn: 'The books are here.' },
      { w: 'Sachen', role: 'r-subject', case: 'Nominativ', en: 'things', hi: 'चीज़ें', pron: 'ZA-khen', type: 'Noun · plural', why: 'plural — so die, regardless of singular gender.', ex: 'Die Sachen sind auf dem Tisch.', exEn: 'The things are on the table.' },
      { w: 'gehören', role: 'r-verb', en: 'belong', hi: 'से संबंधित हैं', pron: 'guh-HÖ-ren', type: 'Verb · plural', why: 'ö = round lips, say "e" (Chapter 2).', ex: 'Die Sachen gehören zusammen.', exEn: 'The things belong together.', conj: { praesens: 'gehört', praeteritum: 'gehörte', perfekt: 'hat gehört' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'एक साथ', pron: 'tsu-ZA-men', type: 'Adverb', why: 'z = "ts" (Chapter 1).', ex: 'Sie gehören zusammen.', exEn: 'They belong together.' },
      { w: '.', plain: true }
    ],
    translation: 'The table is not empty. There is a book, a pen and a card. The things belong together.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_010_L001', speaker: 'Kai', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Julia, wo ist mein Stift?', en: 'Julia, where is my pen?' },
      { id: 'A1_010_L002', speaker: 'Julia', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Der Stift ist in der Tasche.', en: 'The pen is in the bag.' },
      { id: 'A1_010_L003', speaker: 'Kai', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und wo ist das Buch?', en: 'And where is the book?' },
      { id: 'A1_010_L004', speaker: 'Julia', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Das Buch ist auf dem Tisch.', en: 'The book is on the table.' },
      { id: 'A1_010_L005', speaker: 'Kai', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Danke! Und die Karte?', en: 'Thanks! And the card?' },
      { id: 'A1_010_L006', speaker: 'Julia', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Die Karte ist hier, bei mir.', en: 'The card is here, with me.' }
    ],
    transcript: 'Julia, wo ist mein Stift? Der Stift ist in der Tasche. Und wo ist das Buch? Das Buch ist auf dem Tisch. Danke! Und die Karte? Die Karte ist hier, bei mir.',
    translation: 'Julia, where is my pen? The pen is in the bag. And where is the book? The book is on the table. Thanks! And the card? The card is here, with me.',
    tokens: [
      { w: 'Julia' },
      { w: ',', plain: true },
      { w: 'wo' },
      { w: 'ist' },
      { w: 'mein' },
      { w: 'Stift' },
      { w: '?', plain: true },
      { w: 'Der' },
      { w: 'Stift' },
      { w: 'ist' },
      { w: 'in' },
      { w: 'der' },
      { w: 'Tasche' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wo' },
      { w: 'ist' },
      { w: 'das' },
      { w: 'Buch' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'Buch' },
      { w: 'ist' },
      { w: 'auf' },
      { w: 'dem' },
      { w: 'Tisch' },
      { w: '.', plain: true },
      { w: 'Danke' },
      { w: '!', plain: true },
      { w: 'Und' },
      { w: 'die' },
      { w: 'Karte' },
      { w: '?', plain: true },
      { w: 'Die' },
      { w: 'Karte' },
      { w: 'ist' },
      { w: 'hier' },
      { w: ',', plain: true },
      { w: 'bei' },
      { w: 'mir' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wo ist der Stift?', qEn: 'Where is the pen?', options: ['auf dem Tisch', 'in der Tasche', 'bei Julia', 'im Buch'], optionsEn: ['on the table', 'in the bag', 'at Julia\'s', 'in the book'], answer: 1,
        explain: '"Der Stift ist in der Tasche."' },
      { q: 'Mit wem sucht Kai seine Sachen?', qEn: 'Who is Kai looking for his things with?', options: ['Frau Weber', 'Julia', 'Emma', 'Anna'], optionsEn: ['Ms Weber', 'Julia', 'Emma', 'Anna'], answer: 1,
        explain: 'Kai asks Julia to help him find his pen, book and card.' }
    ]
  },

  speaking: [
    { task: "Dein Freund fragt: Wo ist mein Stift?", taskEn: "Your friend asks: where's my pen?", de: "Der Stift ist in der Tasche.", en: "The pen is in the bag." },
    { task: "Die Lehrerin zeigt drei Dinge. Sag sie mit Artikel.", taskEn: "The teacher shows three things. Name them with their article.", de: "Das ist der Tisch, das ist die Karte und das ist das Buch.", en: "That's the table, that's the card and that's the book." },
    { task: "Dein Partner fragt: Wo ist dein Auto?", taskEn: "Your partner asks: where's your car?", de: "Das Auto ist vor dem Haus.", en: "The car is in front of the house." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five nouns from this chapter, each WITH its article (der/die/das), and a short sentence for each (e.g. "der Tisch — Der Tisch ist groß."). Try to include one masculine, one feminine and one neuter.',
    starters: ['der …', 'die …', 'das …'],
    placeholder: 'der Tisch — Der Tisch ist groß.',
    minWords: 15
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which article does "Buch" take?',
      options: ['der', 'die', 'das', 'eine'],
      answer: 2,
      explain: 'das Buch — neuter.'
    },
    gap: {
      // Article choice in context.
      sentence: ['', ' Tisch ist groß und ', ' Karte ist neu.'],
      gaps: [ { answer: 'Der', accepts: ['der'] }, { answer: 'die', accepts: ['die'] } ],
      explain: 'der Tisch (masculine) … die Karte (feminine).'
    },
    match: {
      q: 'Match each noun to its article.',
      pairs: [
        { noun: 'Tisch', art: 'der' },
        { noun: 'Straße', art: 'die' },
        { noun: 'Buch', art: 'das' },
        { noun: 'Computer', art: 'der' }
      ]
    },
    builder: {
      target: 'Build: "The card is empty."',
      bank: ['ist', 'Die', 'leer', 'Karte'],
      answer: ['Die', 'Karte', 'ist', 'leer'],
      roles: { 'Die': 'r-article', 'Karte': 'r-subject', 'ist': 'r-verb', 'leer': 'r-adjective' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which is the feminine article?', options: ['der', 'die', 'das', 'ein'], answer: 1,
      explain: 'die is feminine (and also the plural article).' },
    { q: 'Choose the correct article: "___ Computer".', options: ['der', 'die', 'das', 'eine'], answer: 0,
      explain: 'der Computer — masculine (and -er often signals masculine).' },
    { q: 'Words ending in -chen are always…', options: ['masculine', 'feminine', 'neuter', 'plural'], answer: 2,
      explain: '-chen (and -lein) words are always neuter: das Würstchen.' },
    { q: 'In the plural, every noun takes…', options: ['der', 'die', 'das', 'ein'], answer: 1,
      explain: 'All plural nouns take die: die Bücher, die Tische.' },
    { q: 'The best way to learn a noun is…', options: ['the noun alone', 'with its article', 'with its plural only', 'with its English meaning only'], answer: 1,
      explain: 'Always learn the noun together with der/die/das.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-subject', html: 'Three genders, three articles: <span class="de">der</span> (m), <span class="de">die</span> (f), <span class="de">das</span> (n) — and gender is grammatical, not logical.' },
    { c: 'r-article', html: 'Endings hint: <span class="de">-e</span> often feminine, <span class="de">-chen/-lein</span> always neuter, <span class="de">-ung/-tion</span> feminine.' },
    { c: 'r-object', html: 'Always learn the noun <b>with</b> its article — and remember the plural is always <span class="de">die</span>.' }
  ],
  revisionTips: [
    'On every flashcard, write der/die/das — never the bare noun.',
    'Colour-code: der = blue, die = green, das = orange. Picture the object in its colour.',
    'When you meet a new noun ending in -chen or -lein, you already know it is das.'
  ]
};

window.CHAPTER = CHAPTER;
