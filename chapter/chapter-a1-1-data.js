/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 1 · Chapter 1
   "Das Alphabet & Aussprache"
   Same shape as chapter-data.js — the page renders from CHAPTER.
============================================================ */
const CHAPTER = {
  id: 'a1-1-alphabet',
  phase: 'A1 · Phase 1',
  number: 1,
  title: 'Das Alphabet & Aussprache',
  titleEn: 'The Alphabet & Pronunciation',
  description: 'Before words, the sounds. Learn the 26 letters, the four extra signs (ä ö ü ß), and the handful of rules that make German read exactly the way it is written.',
  xp: 120,
  time: 35,
  difficulty: 'Beginner',
  nextChapter: { number: 2, title: 'Vokale & Laute', titleEn: 'Vowels & Sounds' , href: 'chapter-a1-2-vokale.html' },

  story: {
    eyebrow: 'Story-based learning',
    headline: 'The first <em>day.</em>',
    intro: 'Frau Weber\'s very first German lesson in Berlin. She welcomes new student Rohan — and the first thing he learns is how to spell his own name, letter by letter, and where those two little dots come from.',
    outcomes: ['Every word is clickable for meaning + audio', 'Native-speed audio you can slow down', 'A real two-person conversation you can replay line by line'],
    scene: 'Deutschkurs, Tag 1 — Berlin',
    femaleSpeakers: ['Frau Weber'],
    dialogue: [
      { speaker: 'Frau Weber', tokens: [
        { w: 'Herzlich', role: 'r-adjective', en: 'warm(ly)', hi: 'हार्दिक', pron: 'HERTS-likh', type: 'Adjective', why: 'Herzlich willkommen = a warm welcome — a fixed greeting.', ex: 'Herzlich willkommen!', exEn: 'A warm welcome!' },
        { w: 'willkommen', role: 'r-adjective', en: 'welcome', hi: 'स्वागत', pron: 'vil-KO-men', type: 'Adjective', why: 'willkommen = welcome.', ex: 'Willkommen in Berlin!', exEn: 'Welcome to Berlin!' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)', why: 'sein (to be): ich bin.', ex: 'Ich bin Frau Weber.', exEn: 'I am Frau Weber.' },
        { w: 'Frau', role: 'r-subject', en: 'Mrs.', hi: 'श्रीमती', pron: 'frow', type: 'Title', why: 'Frau + surname = polite way to address a woman.', ex: 'Frau Weber ist Lehrerin.', exEn: 'Mrs Weber is a teacher.' },
        { w: 'Weber', role: 'r-subject', en: 'Weber (teacher)', hi: 'वेबर', pron: 'VAY-ber', type: 'Name · surname' },
        { w: '.', plain: true }
      ], en: 'A warm welcome! I am Frau Weber.', hi: 'Dil se swaagat! Main Frau Weber hoon.' },
      { speaker: 'Rohan', side: 'right', tokens: [
        { w: 'Guten', role: 'r-adjective', en: 'good', hi: 'शुभ', pron: 'GOO-ten', type: 'Adjective', why: 'Guten Tag = good day — the standard daytime hello.', ex: 'Guten Tag!', exEn: 'Good day!' },
        { w: 'Tag', role: 'r-time', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.', why: 'der Tag; Guten Tag literally = good day.', ex: 'Guten Tag!', exEn: 'Hello / good day!' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'heiße', role: 'r-verb', en: 'am called', hi: 'नाम है', pron: 'HY-suh', type: 'Verb · heißen (ich)', why: 'heißen = to be called: ich heiße …', ex: 'Ich heiße Rohan.', exEn: 'My name is Rohan.' },
        { w: 'Rohan', role: 'r-subject', en: 'Rohan (learner)', hi: 'रोहन', pron: 'RO-han', type: 'Name · person' },
        { w: '.', plain: true }
      ], en: 'Hello! My name is Rohan.', hi: 'Namaste! Mera naam Rohan hai.' },
      { speaker: 'Frau Weber', tokens: [
        { w: 'Schön', role: 'r-adjective', en: 'lovely', hi: 'बढ़िया', pron: 'shern', type: 'Adjective', why: 'schön = nice/lovely; a warm reaction. Note ö.', ex: 'Schön!', exEn: 'Lovely!' },
        { w: '!', plain: true },
        { w: 'Wie', role: 'r-question', en: 'how / what', hi: 'क्या', pron: 'vee', type: 'Question word', why: 'w = "v". Wie ist dein Name? = What is your name?', ex: 'Wie ist dein Name?', exEn: 'What is your name?' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein', why: 'sein: er/es/sie ist.', ex: 'Wie ist dein Name?', exEn: 'What is your name?' },
        { w: 'dein', role: 'r-subject', en: 'your', hi: 'तुम्हारा', pron: 'dine', type: 'Possessive · nom.', why: 'dein Name = your name (nominative subject).', ex: 'Dein Name ist schön.', exEn: 'Your name is nice.' },
        { w: 'Name', role: 'r-subject', en: 'name', hi: 'नाम', pron: 'NAH-muh', type: 'Noun · masc.', why: 'der Name; the subject here (nominative).', ex: 'Dein Name ist kurz.', exEn: 'Your name is short.' },
        { w: '?', plain: true },
        { w: 'Buchstabier', role: 'r-verb', en: 'spell', hi: 'वर्तनी बताओ', pron: 'BOOKH-shta-beer', type: 'Verb · imperative', why: 'buchstabieren = to spell; here a gentle command.', ex: 'Buchstabier bitte!', exEn: 'Please spell it!' },
        { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Adverb', why: 'bitte softens a request = please.', ex: 'Komm bitte!', exEn: 'Please come!' },
        { w: '.', plain: true }
      ], en: 'Lovely! What is your name? Please spell it.', hi: 'Badhiya! Tumhaara naam kya hai? Kripya spell karo.' },
      { speaker: 'Rohan', side: 'right', tokens: [
        { w: 'Gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb', why: 'gern = gladly / with pleasure.', ex: 'Gern!', exEn: 'Gladly!' },
        { w: ':', plain: true },
        { w: 'R', role: 'r-letter', en: 'the letter R', hi: 'अक्षर R', pron: 'err', type: 'Letter' },
        { w: '–', plain: true },
        { w: 'O', role: 'r-letter', en: 'the letter O', hi: 'अक्षर O', pron: 'oh', type: 'Letter', spokenDe: 'Oh' },
        { w: '–', plain: true },
        { w: 'H', role: 'r-letter', en: 'the letter H', hi: 'अक्षर H', pron: 'hah', type: 'Letter', spokenDe: 'Ha' },
        { w: '–', plain: true },
        { w: 'A', role: 'r-letter', en: 'the letter A', hi: 'अक्षर A', pron: 'ah', type: 'Letter', spokenDe: 'Ah' },
        { w: '–', plain: true },
        { w: 'N', role: 'r-letter', en: 'the letter N', hi: 'अक्षर N', pron: 'en', type: 'Letter', spokenDe: 'En' },
        { w: '.', plain: true }
      ], en: 'Gladly: R – O – H – A – N.', hi: 'Khushi se: R – O – H – A – N.' },
      { speaker: 'Frau Weber', tokens: [
        { w: 'Sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective', why: 'sehr gut = very good.', ex: 'Sehr gut!', exEn: 'Very good!' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive', why: 'mein Name = my name (nominative subject).', ex: 'Mein Name ist Weber.', exEn: 'My name is Weber.' },
        { w: 'Name', role: 'r-subject', en: 'name', hi: 'नाम', pron: 'NAH-muh', type: 'Noun · masc.', why: 'der Name; the subject here (nominative).', ex: 'Mein Name ist kurz.', exEn: 'My name is short.' },
        { w: '?', plain: true },
        { w: 'Weber', role: 'r-subject', en: 'Weber', hi: 'वेबर', pron: 'VAY-ber', type: 'Name · surname' },
        { w: ',', plain: true },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition', why: 'mit = with; "Weber mit W" = spelled with a W.', ex: 'Weber mit W', exEn: 'Weber with a W' },
        { w: 'W', role: 'r-letter', en: 'the letter W', hi: 'अक्षर W', pron: 'vay', type: 'Letter', why: 'The letter W is named "vay".', ex: 'W wie Weber.', exEn: 'W as in Weber.' },
        { w: '.', plain: true }
      ], en: 'Very good! And my name? Weber, with a W.', hi: 'Bahut achha! Aur mera naam? Weber, W ke saath.' },
      { speaker: 'Rohan', side: 'right', tokens: [
        { w: 'Mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'W', role: 'r-letter', en: 'the letter W', hi: 'अक्षर W', pron: 'vay', type: 'Letter' },
        { w: '?', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klingt', type: 'Verb · klingen (er)', why: 'klingen = to sound: das klingt = that sounds.', ex: 'Das klingt gut.', exEn: 'That sounds good.' },
        { w: 'wie', role: 'r-preposition', en: 'like', hi: 'जैसे', pron: 'vee', type: 'Word · "like"', why: 'wie = like/as in a comparison.', ex: 'wie ein V', exEn: 'like a V' },
        { w: 'ein', role: 'r-article', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · nom.', why: 'wie ein V = like a V (a simple comparison).' },
        { w: 'V', role: 'r-letter', en: 'the letter V', hi: 'अक्षर V', pron: 'fow', type: 'Letter', why: 'The letter V is named "fow" and sounds like "f".', ex: 'V wie Vater.', exEn: 'V as in father.', spokenDe: 'Vau' },
        { w: '!', plain: true }
      ], en: 'With a W? But that sounds like a V!', hi: 'W ke saath? Par yeh to V jaisa lagta hai!' },
      { speaker: 'Frau Weber', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Adverb', why: 'genau = exactly / right.', ex: 'Genau!', exEn: 'Exactly!' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut. nom.' },
        { w: 'Z', role: 'r-letter', en: 'the letter Z', hi: 'अक्षर Z', pron: 'tset', type: 'Letter', why: 'The letter Z is named "tset" and sounds like "ts".', ex: 'Z wie Zeit.', exEn: 'Z as in time.', spokenDe: 'Zett' },
        { w: '?', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klingt', type: 'Verb · klingen (er)' },
        { w: 'wie', role: 'r-preposition', en: 'like', hi: 'जैसे', pron: 'vee', type: 'Word · "like"' },
        { w: 'ts', role: 'r-letter', en: 'the "ts" sound', hi: '"ts" ध्वनि', pron: 'ts', type: 'Sound', why: 'Z is pronounced "ts": Zeit = "TSAIT".', ex: 'Zeit klingt wie TSAIT.', exEn: 'Zeit sounds like "tsait".' },
        { w: '.', plain: true }
      ], en: 'Exactly. And the Z? That sounds like "ts".', hi: 'Bilkul. Aur Z? Yeh "ts" jaisa lagta hai.' },
      { speaker: 'Rohan', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural nom.' },
        { w: 'Punkte', role: 'r-subject', en: 'dots', hi: 'बिंदु', pron: 'PUNK-tuh', type: 'Noun · plural', why: 'der Punkt → die Punkte; the two dots of an umlaut.', ex: 'die Punkte', exEn: 'the dots' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place', why: 'hier = here.', ex: 'Die Punkte hier.', exEn: 'The dots here.' },
        { w: '—', plain: true },
        { w: 'ä', role: 'r-letter', en: 'the vowel Ä', hi: 'स्वर Ä', pron: 'eh', type: 'Vowel', why: 'ä = a-umlaut, like "e" in bed.', ex: 'Käse', exEn: 'cheese', spokenDe: 'Käse' },
        { w: ',', plain: true },
        { w: 'ö', role: 'r-letter', en: 'the vowel Ö', hi: 'स्वर Ö', pron: 'er', type: 'Vowel', why: 'ö = o-umlaut; round the lips and say "e".', ex: 'schön', exEn: 'beautiful', spokenDe: 'schön' },
        { w: ',', plain: true },
        { w: 'ü', role: 'r-letter', en: 'the vowel Ü', hi: 'स्वर Ü', pron: 'ue', type: 'Vowel', why: 'ü = u-umlaut; round the lips and say "ee".', ex: 'über', exEn: 'over', spokenDe: 'über' },
        { w: '?', plain: true }
      ], en: 'And the dots here — ä, ö, ü?', hi: 'Aur ye bindu yahaan — ä, ö, ü?' },
      { speaker: 'Frau Weber', tokens: [
        { w: 'Das', role: 'r-subject', en: 'those', hi: 'ये', pron: 'das', type: 'Pronoun · subject' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein (sie/Sie)', why: 'sein: das sind = those are (plural).', ex: 'Das sind Umlaute.', exEn: 'Those are umlauts.' },
        { w: 'Umlaute', role: 'r-subject', en: 'umlauts', hi: 'उमलाउट', pron: 'UM-low-tuh', type: 'Noun · plural, predicate nominative', why: 'der Umlaut → die Umlaute: ä, ö, ü. After sein (sind), the noun is a nominative predicate complement, not an accusative object.', ex: 'ä, ö, ü sind Umlaute.', exEn: 'ä, ö, ü are umlauts.' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'üben', role: 'r-verb', en: 'practise', hi: 'अभ्यास करते हैं', pron: 'Ü-ben', type: 'Verb · üben (wir)', why: 'üben = to practise: wir üben.', ex: 'Wir üben zusammen.', exEn: 'We practise together.' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb', why: 'zusammen = together.', ex: 'Wir lernen zusammen.', exEn: 'We learn together.' },
        { w: '!', plain: true }
      ], en: 'Those are umlauts. We’ll practise together!', hi: 'Ye umlaut hain. Hum saath abhyaas karenge!' }
    ]
  },

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole chapter at a glance before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meet the characters and hear this chapter’s words in a real conversation first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn 12 first words you can already say once you know the sounds.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the alphabet, the umlauts and ß, and the key pronunciation rules.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a short text aloud and tap any word to hear it and see how it sounds.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Hear the letters and first words, then answer what you understood.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say the tricky sounds out loud and check your pronunciation.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Spell three words using the German letter names.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the sounds and spelling with instant feedback across four exercise types.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 120 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The 12 first words with pronunciation, translations, and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Letter-name drills, spelling practice, listening tasks, and self-study activities.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Pronunciation Rules PDF',
      desc: 'The alphabet, umlauts, ß, and every sound rule with examples and exceptions.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Pronunciation' }
  ],

  outcomes: [
    { de: 'A – Z', text: 'Say all 26 letters of the German alphabet by name' },
    { de: 'ä · ö · ü · ß', text: 'Recognise the three umlauts and the sharp-s (ß)' },
    { de: 'ei vs ie', text: 'Read the vowel pairs that beginners always mix up' },
    { de: 'sch · s · st', text: 'Pronounce the consonant sounds German spells its own way' },
    { de: 'Buchstabieren', text: 'Spell your name and first words out loud' }
  ],

  // First words — chosen so each shows a key sound. pron drives the popup.
  vocab: [
    { de: 'Apfel', art: 'der', gender: 'm', plural: 'Äpfel', pos: 'noun', en: 'apple', hi: 'सेब',
      ex: 'Der Apfel ist rot.', exTokens: [ { w: 'Der', role: 'r-article', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc. nom.', why: 'Masculine nominative — the subject of the sentence.' }, { w: 'Apfel', role: 'r-subject', case: 'Nominativ', number: 'Singular', en: 'apple', hi: 'सेब', pron: 'AP-fel', type: 'Noun · masc. singular' }, { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er)' }, { w: 'rot', role: 'r-adjective', en: 'red', hi: 'लाल', pron: 'roht', type: 'Adjective · predicate' }, { w: '.', plain: true } ], exEn: 'The apple is red.' },
    { de: 'Buch', art: 'das', gender: 'n', plural: 'Bücher', pos: 'noun', en: 'book', hi: 'किताब',
      ex: 'Das Buch ist neu.', exTokens: [ { w: 'Das', role: 'r-article', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut. nom.', why: 'Neuter nominative — the subject.' }, { w: 'Buch', role: 'r-subject', case: 'Nominativ', number: 'Singular', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut. singular' }, { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er)' }, { w: 'neu', role: 'r-adjective', en: 'new', hi: 'नया', pron: 'noy', type: 'Adjective · predicate' }, { w: '.', plain: true } ], exEn: 'The book is new.' },
    { de: 'Eis', art: 'das', gender: 'n', plural: 'Eis', pos: 'noun', en: 'ice cream', hi: 'आइसक्रीम',
      ex: 'Das Eis ist kalt.', exTokens: [ { w: 'Das', role: 'r-article', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut. nom.' }, { w: 'Eis', role: 'r-subject', case: 'Nominativ', number: 'Singular', en: 'ice cream', hi: 'आइसक्रीम', pron: 'ice', type: 'Noun · neut. singular' }, { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er)' }, { w: 'kalt', role: 'r-adjective', en: 'cold', hi: 'ठंडा', pron: 'kalt', type: 'Adjective · predicate' }, { w: '.', plain: true } ], exEn: 'The ice cream is cold.' },
    { de: 'Hund', art: 'der', gender: 'm', plural: 'Hunde', pos: 'noun', en: 'dog', hi: 'कुत्ता',
      ex: 'Der Hund ist groß.', exTokens: [ { w: 'Der', role: 'r-article', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc. nom.' }, { w: 'Hund', role: 'r-subject', case: 'Nominativ', number: 'Singular', en: 'dog', hi: 'कुत्ता', pron: 'hoont', type: 'Noun · masc. singular' }, { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er)' }, { w: 'groß', role: 'r-adjective', en: 'big', hi: 'बड़ा', pron: 'grohs', type: 'Adjective · predicate' }, { w: '.', plain: true } ], exEn: 'The dog is big.' },
    { de: 'Jahr', art: 'das', gender: 'n', plural: 'Jahre', pos: 'noun', en: 'year', hi: 'साल',
      ex: 'Das Jahr ist lang.', exTokens: [ { w: 'Das', role: 'r-article', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut. nom.' }, { w: 'Jahr', role: 'r-subject', case: 'Nominativ', number: 'Singular', en: 'year', hi: 'साल', pron: 'yahr', type: 'Noun · neut. singular' }, { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er)' }, { w: 'lang', role: 'r-adjective', en: 'long', hi: 'लंबा', pron: 'lang', type: 'Adjective · predicate' }, { w: '.', plain: true } ], exEn: 'The year is long.' },
    { de: 'Käse', art: 'der', gender: 'm', plural: 'Käse', pos: 'noun', en: 'cheese', hi: 'पनीर',
      ex: 'Der Käse ist gut.', exTokens: [ { w: 'Der', role: 'r-article', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc. nom.' }, { w: 'Käse', role: 'r-subject', case: 'Nominativ', number: 'Singular', en: 'cheese', hi: 'पनीर', pron: 'KAY-zuh', type: 'Noun · masc. singular' }, { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er)' }, { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective · predicate' }, { w: '.', plain: true } ], exEn: 'The cheese is good.' },
    { de: 'Schule', art: 'die', gender: 'f', plural: 'Schulen', pos: 'noun', en: 'school', hi: 'स्कूल',
      ex: 'Die Schule ist offen.', exTokens: [ { w: 'Die', role: 'r-article', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem. nom.' }, { w: 'Schule', role: 'r-subject', case: 'Nominativ', number: 'Singular', en: 'school', hi: 'स्कूल', pron: 'SHOO-luh', type: 'Noun · fem. singular' }, { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er)' }, { w: 'offen', role: 'r-adjective', en: 'open', hi: 'खुला', pron: 'O-fen', type: 'Adjective · predicate' }, { w: '.', plain: true } ], exEn: 'The school is open.' },
    { de: 'Vater', art: 'der', gender: 'm', plural: 'Väter', pos: 'noun', en: 'father', hi: 'पिता',
      ex: 'Der Vater liest.', exTokens: [ { w: 'Der', role: 'r-article', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc. nom.' }, { w: 'Vater', role: 'r-subject', case: 'Nominativ', number: 'Singular', en: 'father', hi: 'पिता', pron: 'FAH-ter', type: 'Noun · masc. singular' }, { w: 'liest', role: 'r-verb', en: 'reads', hi: 'पढ़ता है', pron: 'leest', type: 'Verb · lesen (er)' }, { w: '.', plain: true } ], exEn: 'The father reads.' },
    { de: 'Wasser', art: 'das', gender: 'n', plural: 'Wässer', pos: 'noun', en: 'water', hi: 'पानी',
      ex: 'Das Wasser ist kalt.', exTokens: [ { w: 'Das', role: 'r-article', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut. nom.' }, { w: 'Wasser', role: 'r-subject', case: 'Nominativ', number: 'Singular', en: 'water', hi: 'पानी', pron: 'VA-ser', type: 'Noun · neut. singular' }, { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er)' }, { w: 'kalt', role: 'r-adjective', en: 'cold', hi: 'ठंडा', pron: 'kalt', type: 'Adjective · predicate' }, { w: '.', plain: true } ], exEn: 'The water is cold.' },
    { de: 'Zeit', art: 'die', gender: 'f', plural: 'Zeiten', pos: 'noun', en: 'time', hi: 'समय',
      ex: 'Die Zeit ist da.', exTokens: [ { w: 'Die', role: 'r-article', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem. nom.' }, { w: 'Zeit', role: 'r-subject', case: 'Nominativ', number: 'Singular', en: 'time', hi: 'समय', pron: 'TSAIT', type: 'Noun · fem. singular' }, { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er)' }, { w: 'da', role: 'r-place', en: 'here / there', hi: 'यहाँ', pron: 'dah', type: 'Adverb · place' }, { w: '.', plain: true } ], exEn: 'The time is here.' },
    { de: 'Mädchen', art: 'das', gender: 'n', plural: 'Mädchen', pos: 'noun', en: 'girl', hi: 'लड़की',
      ex: 'Das Mädchen singt.', exTokens: [ { w: 'Das', role: 'r-article', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut. nom.' }, { w: 'Mädchen', role: 'r-subject', case: 'Nominativ', number: 'Singular', en: 'girl', hi: 'लड़की', pron: 'MAYT-khen', type: 'Noun · neut. singular' }, { w: 'singt', role: 'r-verb', en: 'sings', hi: 'गाती है', pron: 'zingt', type: 'Verb · singen (er)' }, { w: '.', plain: true } ], exEn: 'The girl sings.' },
    { de: 'Straße', art: 'die', gender: 'f', plural: 'Straßen', pos: 'noun', en: 'street', hi: 'सड़क',
      ex: 'Die Straße ist lang.', exTokens: [ { w: 'Die', role: 'r-article', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem. nom.' }, { w: 'Straße', role: 'r-subject', case: 'Nominativ', number: 'Singular', en: 'street', hi: 'सड़क', pron: 'SHTRAH-suh', type: 'Noun · fem. singular' }, { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er)' }, { w: 'lang', role: 'r-adjective', en: 'long', hi: 'लंबा', pron: 'lang', type: 'Adjective · predicate' }, { w: '.', plain: true } ], exEn: 'The street is long.' }
  ],

  grammar: [
    {
      title: 'The German alphabet — 26 letters',
      whatIsIt: 'German uses the same 26 letters as English. What is new is that each letter has its own <b>German name</b> — and you will need those names constantly, because Germans ask you to spell things out loud all the time.',
      body: [
        'Spelling out loud has its own verb: <i>buchstabieren</i>. Your name, your email, your street — you will spell all of them in your first week in Germany.',
        'And the letters are worth the effort for a second reason: <b>German spells what it says</b>. Learn the sound of each letter and you can read almost any German word correctly on the first try, without a pronunciation guide.'
      ],
      goldenRule: 'German is written the way it is spoken. Learn the letters once — then you can read almost anything; only eight spellings need learning by hand.',
      why: 'English hides sounds — you cannot tell how <i>through</i> or <i>knight</i> is said just by looking. German does not do that: what is on the page is what comes out of your mouth. So the letters are not just for spelling your name; they are the whole reading system.',
      table: {
        head: ['Letter', 'Name (say it)', 'Letter', 'Name (say it)'],
        rows: [
          ['A a', 'ah', 'N n', 'en'],
          ['B b', 'bay', 'O o', 'oh'],
          ['C c', 'tsay', 'P p', 'pay'],
          ['D d', 'day', 'Q q', 'koo'],
          ['E e', 'ay', 'R r', 'air'],
          ['F f', 'eff', 'S s', 'ess'],
          ['G g', 'gay', 'T t', 'tay'],
          ['H h', 'hah', 'U u', 'oo'],
          ['I i', 'ee', 'V v', 'fow'],
          ['J j', 'yot', 'W w', 'vay'],
          ['K k', 'kah', 'X x', 'iks'],
          ['L l', 'ell', 'Y y', 'ÜP-si-lon'],
          ['M m', 'em', 'Z z', 'tset']
        ]
      },
      note: 'Watch three letter names: <b>J</b> = "yot", <b>V</b> = "fow", <b>W</b> = "vay". They are the ones English speakers get wrong most often.',
      hinglish: 'German bilkul jaise likha hai waise hi bola jaata hai — isliye reading aasaan hai. Bas har letter ka <b>naam</b> yaad karo, kyunki apna naam aur email spell karne mein yahi kaam aayega. Teen letters dhyaan se: <b>J</b> = "yot", <b>V</b> = "fow", <b>W</b> = "vay".',
      memoryTrick: 'J-V-W = "yot–fow–vay". Teen naam, ek saans mein. Baaki alphabet English jaisa hi hai.',
      recap: [
        'Same 26 letters as English — only the <b>names</b> are new.',
        'German spells what it says: sounds → reading, no guessing.',
        'The three traps are <b>J</b> "yot", <b>V</b> "fow", <b>W</b> "vay".'
      ]
    },
    {
      title: 'Spelling out loud: "A wie Apfel"',
      whatIsIt: 'On the phone, at a bank, at a government office — just saying "B" is often not clear enough, because B and P (or D and T) sound almost the same down a phone line. So Germans anchor each letter to a word: <b>A wie Apfel</b> ("A as in Apfel").',
      body: [
        'You will hear this every single time you give your name or address over the phone, and you are expected to do it back. There is no fixed official list you must memorise — any well-known word works, so use the vocabulary you already have.'
      ],
      formula: [
        '<b>Letter</b> + wie + <b>Word beginning with that letter</b>',
        'A wie Apfel  ·  B wie Buch  ·  H wie Hund'
      ],
      example: [
        { html: '<span class="de">A wie Apfel, B wie Buch, H wie Hund.</span>' },
        { html: '<span class="de">Weber — mit W, nicht mit V.</span>' },
        { html: '<span class="de">Z wie Zeit, S wie Schule, K wie Käse.</span>' }
      ],
      hinglish: 'Phone par sirf letter ka naam bolne se confusion hoti hai (B aur P, D aur T ek jaise sunte hain). Isliye Germans letter ke saath ek word bolte hain: <b>A wie Apfel</b> = "A jaisa Apfel mein". Koi official list nahi hai — jo word aata ho, wahi bol do.',
      memoryTrick: '"wie" = "jaisa". Letter + wie + word. Bas.',
      connect: { from: 'the Story', text: 'Frau Weber does exactly this when she says <span class="de">Weber, mit W</span> — she is clearing up W vs V before Rohan writes it down wrong.' }
    },
    {
      title: 'The umlauts (ä ö ü) and the ß',
      whatIsIt: 'Beyond A–Z German has four extra signs. Three are <b>umlauts</b> — a vowel with two dots, which changes the sound — and one is the <b>ß</b> (Eszett), a sharp "ss".',
      body: [
        'These are not decoration. <i>Umlaut</i> dots change the word: <span class="de">Mutter</span> is "mother", <span class="de">Mütter</span> is "mothers". Drop the dots and you have said something else.'
      ],
      goldenRule: 'The dots are part of the letter, not an accent you may leave off. If you cannot type them, write <b>ae oe ue ss</b> — never bare <i>a o u s</i>.',
      table: {
        head: ['Sign', 'How to make the sound', 'Example', 'Meaning'],
        rows: [
          ['<b>ä</b>', 'like "e" in <i>bed</i> — long in <i>Käse</i>, short in <i>Äpfel</i>', '<span class="de r-subject" data-type="Noun · masc. singular">Käse</span>', 'cheese'],
          ['<b>ö</b>', 'lips rounded as for "o", but say "e"', '<span class="de r-subject">schön</span>', 'beautiful'],
          ['<b>ü</b>', 'lips rounded as for "u", but say "ee"', '<span class="de r-subject">über</span>', 'over'],
          ['<b>ß</b>', 'one sharp, voiceless "ss" — never a "z" sound', '<span class="de r-subject">Straße</span>', 'street']
        ]
      },
      note: 'Two facts about <b>ß</b>: it <b>never starts a word</b>, and it only appears after a <b>long vowel</b> (<span class="de">Straße</span>, <span class="de">Fuß</span>) or a <b>vowel pair</b> like ei / au (<span class="de">heißen</span>, <span class="de">weiß</span>, <span class="de">außen</span>). After a short vowel German writes <b>ss</b> instead: <span class="de">Fluss</span>, <span class="de">müssen</span>. Saying them out loud: <b>ä</b> = "A-Umlaut", <b>ö</b> = "O-Umlaut", <b>ü</b> = "U-Umlaut", <b>ß</b> = "Eszett" (or "scharfes S"). So <span class="de">Käse</span> is spelled "kah – A-Umlaut – ess – ay".',
      hinglish: 'Char extra signs hain: <b>ä ö ü</b> (do dots = umlaut) aur <b>ß</b> (sharp "ss"). <b>ö</b> aur <b>ü</b> ka trick: honth "o"/"u" ke shape mein rakho, par andar se "e"/"ee" bolo. Dots optional nahi hain — <span class="de">Mutter</span> (maa) aur <span class="de">Mütter</span> (maayein) do alag words hain. Type na kar pao to <b>ae oe ue ss</b> likho.',
      memoryTrick: 'Umlaut ka formula: <b>honth pehle wale vowel ke, aawaaz "e" family ki</b> — ö = honth O + "e", ü = honth U + "ee", ä = seedha "e". Aur ß vs ss: <b>lamba vowel → ß, chhota vowel → ss</b>.',
      recap: [
        '<b>ä ö ü</b> change the meaning — the dots are not optional.',
        '<b>ß</b> = sharp "ss"; it never begins a word.',
        'Long vowel or vowel pair → <b>ß</b>. Short vowel → <b>ss</b>.'
      ]
    },
    {
      title: 'Eight sound rules beginners always mix up',
      whatIsIt: 'Eight spellings do not sound the way an English reader expects. These eight cause almost every beginner mispronunciation — fix them now and you will read German aloud with confidence.',
      body: [
        'Seven of the eight are completely regular — the spelling always makes the same sound. Only <b>v</b> has a second setting, and it is easy to spot.'
      ],
      goldenRule: 'Two moves cover almost all of it: in <b>ei</b>/<b>ie</b> say the <b>second</b> vowel, and at the <b>start of a word</b> the s-family softens — s = "z", st = "sht", sp = "shp".',
      formula: [
        'ei → "eye"   ·   ie → "ee"',
        'z → "ts"   ·   sch → "sh"',
        'v → "f"   ·   w → "v"',
        's- → "z"   ·   st- → "sht"   ·   sp- → "shp"'
      ],
      mistakes: [
        { wrong: 'ei → "ee"', right: 'ei → "eye"', why: 'Say the second vowel: Eis = "ice", mein = "mine".',
          wrongTokens: [ { w: 'ei', role: 'r-letter', en: 'the "ei" sound', hi: '"ei" ध्वनि', pron: 'eye', type: 'Sound', why: 'ei is a spelling pair, not a word: it sounds like the English word "eye".', ex: 'Eis beginnt mit ei.', exEn: 'Eis begins with ei.' }, { w: '→ "ee"', plain: true } ],
          rightTokens: [ { w: 'ei', role: 'r-letter', en: 'the "ei" sound', hi: '"ei" ध्वनि', pron: 'eye', type: 'Sound', why: 'ei is a spelling pair, not a word: it sounds like the English word "eye".', ex: 'Eis beginnt mit ei.', exEn: 'Eis begins with ei.' }, { w: '→ "eye"', plain: true } ] },
        { wrong: 'ie → "eye"', right: 'ie → "ee"', why: 'Again the second vowel: Liebe = "LEE-buh", vier = "feer".',
          wrongTokens: [ { w: 'ie', role: 'r-letter', en: 'the "ie" sound', hi: '"ie" ध्वनि', pron: 'ee', type: 'Sound', why: 'ie is a spelling pair, not a word: read the second vowel, so it sounds like "ee".', ex: 'Liebe schreibt man mit ie.', exEn: 'Liebe is written with ie.' }, { w: '→ "eye"', plain: true } ],
          rightTokens: [ { w: 'ie', role: 'r-letter', en: 'the "ie" sound', hi: '"ie" ध्वनि', pron: 'ee', type: 'Sound', why: 'ie is a spelling pair, not a word: read the second vowel, so it sounds like "ee".', ex: 'Liebe schreibt man mit ie.', exEn: 'Liebe is written with ie.' }, { w: '→ "ee"', plain: true } ] },
        { wrong: 'z → "z"', right: 'z → "ts"', why: 'z is always "ts": Zeit = "TSAIT", zehn = "TSAYN".' },
        { wrong: 'sch → "sk"', right: 'sch → "sh"', why: 'sch is the English "sh": Schule = "SHOO-luh".',
          wrongTokens: [ { w: 'sch', role: 'r-letter', en: 'the "sch" sound', hi: '"sch" ध्वनि', pron: 'sh', type: 'Sound', why: 'sch is a spelling group, not a word: it is the English "sh".', ex: 'Schule beginnt mit sch.', exEn: 'Schule begins with sch.' }, { w: '→ "sk"', plain: true } ],
          rightTokens: [ { w: 'sch', role: 'r-letter', en: 'the "sch" sound', hi: '"sch" ध्वनि', pron: 'sh', type: 'Sound', why: 'sch is a spelling group, not a word: it is the English "sh".', ex: 'Schule beginnt mit sch.', exEn: 'Schule begins with sch.' }, { w: '→ "sh"', plain: true } ] },
        { wrong: 'v → "v"', right: 'v → "f"', why: 'In old German words v is always "f": Vater = "FAH-ter", vier = "feer", von, viel. ⚠️ One exception: in words German borrowed from other languages, v keeps its "v" sound — Video ("VEE-day-oh"), Vase, Klavier, November. If the word looks international, say "v".' },
        { wrong: 'w → "w"', right: 'w → "v"', why: 'w is the English "v": Wasser = "VA-ser", wie = "vee". German has no English "w" sound at all.' },
        { wrong: 's → "s"', right: 's → "z" (at the start of a word)', why: 'sagen = "ZAH-gen", sieben = "ZEE-ben", Sonne = "ZO-nuh". Between two vowels too: Käse = "KAY-zuh". But a double ss stays sharp: Wasser = "VA-ser".' },
        { wrong: 'St- → "st"', right: 'St- → "sht"', why: 'At the start of a word st = "sht" and sp = "shp": Straße = "SHTRAH-suh", Stift = "shtift", Sport = "shport". That is why buchstabieren sounds like "BOOKH-shta-BEE-ren".' }
      ],
      compare: {
        intro: 'The <b>v</b> / <b>w</b> swap is the one that changes words, so keep the pair side by side:',
        head: ['You see', 'You say', 'Example', 'Sounds like'],
        rows: [
          ['<b>v</b>', 'f', '<span class="de">Vater</span>', 'FAH-ter'],
          ['<b>w</b>', 'v', '<span class="de">Wasser</span>', 'VA-ser']
        ]
      },
      hinglish: 'Ye rules yaad rakhne hi padenge, par logic simple hai: German mein ek spelling aksar ek hi tarah boli jaati hai — English ki tarah har word ka guess nahi karna padta. <b>ei</b> = "eye" (Eis = ice), <b>ie</b> = "ee" (Liebe = LEE-buh), <b>z</b> = "ts" (Zeit = TSAIT), <b>sch</b> = English "sh" (Schule = SHOO-luh), <b>v</b> = "f" (Vater = FAH-ter), <b>w</b> = "v" (Wasser = VA-ser), aur shuru ka <b>s</b> = "z" (sagen = ZAH-gen), <b>st-</b> = "sht" (Straße = SHTRAH-suh). Sirf <b>v</b> ka ek exception hai: international words mein v = "v" hi rehta hai (Video, Vase).',
      memoryTrick: '<b>ei</b>/<b>ie</b> — doosra vowel bolo. <b>v</b> aur <b>w</b> ek step aage khisak jaate hain: v se f, w se v. Aur shuru mein <b>s</b> soft ho jaata hai: s se z, st se sht.',
      recap: [
        'ei = "eye", ie = "ee" — always the <b>second</b> vowel.',
        'z = "ts", sch = "sh" — these never change.',
        'v = "f", w = "v" — except in international words, where v stays "v".',
        'Word start: s- = "z", st- = "sht", sp- = "shp".'
      ],
      connect: { from: 'the next chapter', text: 'Chapter 2 (<i>Vokale &amp; Laute</i>) takes these single letters further: long vs short vowels, and the sounds <b>ch</b> and <b>-ig</b> that need their own rule.' }
    }
  ],
  reading: {
    title: 'Willkommen in der Schule',
    titleEn: 'Welcome at the school',
    tokens: [
      { w: 'Rohan', role: 'r-subject', case: 'Nominativ', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name · subject', why: 'A name acting as the subject sits in the nominative.', ex: 'Rohan ist hier.', exEn: 'Rohan is here.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein', why: 'sein (to be): er/es/sie ist.', ex: 'Er ist da.', exEn: 'He is there.' },
      { w: 'in', role: 'r-preposition', en: 'at / in', hi: 'में', pron: 'in', type: 'Preposition', why: 'in + der Schule = at the school.', ex: 'in der Schule', exEn: 'at the school' },
      { w: 'der', role: 'r-article', en: 'the', hi: 'वह', pron: 'dair', type: 'Article · fem. dat.', why: 'Feminine article in the dative, used after in.', ex: 'in der Schule', exEn: 'at the school' },
      { w: 'Schule', role: 'r-object', en: 'school', hi: 'स्कूल', pron: 'SHOO-luh', type: 'Noun · fem.', why: 'die Schule; sch sounds like English "sh".', ex: 'Die Schule ist offen.', exTokens: [ { w: 'Die', role: 'r-article', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem. nom.' }, { w: 'Schule', role: 'r-subject', case: 'Nominativ', number: 'Singular', en: 'school', hi: 'स्कूल', pron: 'SHOO-luh', type: 'Noun · fem. singular' }, { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er)' }, { w: 'offen', role: 'r-adjective', en: 'open', hi: 'खुला', pron: 'O-fen', type: 'Adjective · predicate' }, { w: '.', plain: true } ], exEn: 'The school is open.' },
      { w: '.', plain: true },
      { w: 'Frau', role: 'r-subject', en: 'Mrs.', hi: 'श्रीमती', pron: 'frow', type: 'Title', why: 'Frau + surname = polite way to address a woman.', ex: 'Frau Weber ist Lehrerin.', exEn: 'Mrs Weber is a teacher.' },
      { w: 'Weber', role: 'r-subject', en: 'Weber (teacher)', hi: 'वेबर', pron: 'VAY-ber', type: 'Name · surname' },
      { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहती है', pron: 'zahkt', type: 'Verb · 3rd person', why: 'From sagen (to say): note s at the start sounds like "z".', ex: 'Sie sagt Hallo.', exEn: 'She says hello.' },
      { w: ':', plain: true },
      { w: 'Wie', role: 'r-question', en: 'how / what', hi: 'क्या', pron: 'vee', type: 'Question word', why: 'w sounds like "v". Wie heißt du? = What is your name?', ex: 'Wie heißt du?', exEn: 'What is your name?' },
      { w: 'heißt', role: 'r-verb', en: 'are called', hi: 'नाम है', pron: 'HYST', type: 'Verb · heißen (du)', why: 'heißen = to be called: du heißt …', ex: 'Wie heißt du?', exEn: 'What is your name?' },
      { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
      { w: '?', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
      { w: 'heiße', role: 'r-verb', en: 'am called', hi: 'नाम है', pron: 'HY-suh', type: 'Verb · heißen (ich)', why: 'heißen = to be called: ich heiße …', ex: 'Ich heiße Rohan.', exEn: 'My name is Rohan.' },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name · person' },
      { w: ',', plain: true },
      { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहता है', pron: 'zahkt', type: 'Verb · 3rd person', why: 'sagen = to say.', ex: 'Er sagt Danke.', exEn: 'He says thanks.' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
      { w: '.', plain: true },
      { w: 'R', role: 'r-letter', en: 'the letter R', hi: 'अक्षर R', pron: 'err', type: 'Letter' },
      { w: '–', plain: true },
      { w: 'O', role: 'r-letter', en: 'the letter O', hi: 'अक्षर O', pron: 'oh', type: 'Letter', spokenDe: 'Oh' },
      { w: '–', plain: true },
      { w: 'H', role: 'r-letter', en: 'the letter H', hi: 'अक्षर H', pron: 'hah', type: 'Letter', spokenDe: 'Ha' },
      { w: '–', plain: true },
      { w: 'A', role: 'r-letter', en: 'the letter A', hi: 'अक्षर A', pron: 'ah', type: 'Letter', spokenDe: 'Ah' },
      { w: '–', plain: true },
      { w: 'N', role: 'r-letter', en: 'the letter N', hi: 'अक्षर N', pron: 'en', type: 'Letter', spokenDe: 'En' },
      { w: '.', plain: true },
      { w: 'Sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
      { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective', why: 'sehr gut = very good.', ex: 'Sehr gut!', exEn: 'Very good!', advanced: { opposites: ['schlecht'] } },
      { w: ',', plain: true },
      { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहती है', pron: 'zahkt', type: 'Verb · 3rd person' },
      { w: 'Frau', role: 'r-subject', en: 'Mrs.', hi: 'श्रीमती', pron: 'frow', type: 'Title' },
      { w: 'Weber', role: 'r-subject', en: 'Weber', hi: 'वेबर', pron: 'VAY-ber', type: 'Name · surname' },
      { w: '.', plain: true },
      { w: 'Willkommen', role: 'r-adjective', en: 'welcome', hi: 'स्वागत', pron: 'vil-KO-men', type: 'Adjective', why: 'Herzlich willkommen = a warm welcome — a fixed greeting.', ex: 'Willkommen in Berlin!', exEn: 'Welcome to Berlin!' },
      { w: '!', plain: true },
      { w: 'Die', role: 'r-article', en: 'the', hi: 'वह', pron: 'dee', type: 'Article · fem. nom.', why: 'Feminine nouns take die in the nominative.', ex: 'Die Schule ist schön.', exEn: 'The school is beautiful.' },
      { w: 'Schule', role: 'r-subject', case: 'Nominativ', number: 'Singular', en: 'school', hi: 'स्कूल', pron: 'SHOO-luh', type: 'Noun · subject', why: 'die Schule as the subject of the sentence.', ex: 'Die Schule ist offen.', exTokens: [ { w: 'Die', role: 'r-article', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem. nom.' }, { w: 'Schule', role: 'r-subject', case: 'Nominativ', number: 'Singular', en: 'school', hi: 'स्कूल', pron: 'SHOO-luh', type: 'Noun · fem. singular' }, { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er)' }, { w: 'offen', role: 'r-adjective', en: 'open', hi: 'खुला', pron: 'O-fen', type: 'Adjective · predicate' }, { w: '.', plain: true } ], exEn: 'The school is open.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'schön', role: 'r-adjective', en: 'beautiful', hi: 'सुंदर', pron: 'shern', type: 'Adjective', why: 'schön = beautiful/lovely. Note ö.', ex: 'Berlin ist schön.', exEn: 'Berlin is beautiful.' },
      { w: '.', plain: true }
    ],
    translation: 'Rohan is at the school. Mrs. Weber says: What is your name? My name is Rohan, he says. R–O–H–A–N. Very good, says Mrs. Weber. Welcome! The school is beautiful.'
  },

  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_001_L001', speaker: 'Frau Weber', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Rohan, wie schreibst du "Buch"? Bitte buchstabiere es.', en: 'Rohan, how do you write "Buch"? Please spell it.' },
      { id: 'A1_001_L002', speaker: 'Rohan', gender: 'male', voice: 'de-DE-Neural2-D', de: 'B-U-C-H. Buch.', en: 'B-U-C-H. Book.' },
      { id: 'A1_001_L003', speaker: 'Frau Weber', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Richtig! Und "Heft"?', en: 'Correct! And "Heft"?' },
      { id: 'A1_001_L004', speaker: 'Rohan', gender: 'male', voice: 'de-DE-Neural2-D', de: 'H-E-F-T. Das Heft ist mein Lieblingswort!', en: 'H-E-F-T. Notebook is my favorite word!' }
    ],
    transcript: 'Rohan, wie schreibst du "Buch"? Bitte buchstabiere es. B-U-C-H. Buch. Richtig! Und "Heft"? H-E-F-T. Das Heft ist mein Lieblingswort!',
    translation: 'Rohan, how do you write "Buch"? Please spell it. B-U-C-H. Book. Correct! And "Heft"? H-E-F-T. Notebook is my favorite word!',
    tokens: [      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name · addressed directly', why: 'Directly addressing someone by name at the start of a sentence.', ex: 'Rohan, komm bitte!', exEn: 'Rohan, please come!' },
      { w: ',', plain: true },
      { w: 'wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word', why: 'w sounds like "v". wie schreibst du = how do you write.', ex: 'Wie schreibst du das?', exEn: 'How do you write that?' },
      { w: 'schreibst', role: 'r-verb', en: 'do (you) write', hi: 'लिखते हो', pron: 'SHRYBST', type: 'Verb · schreiben (du)', why: 'schreiben = to write: du schreibst.', ex: 'Wie schreibst du dein Wort?', exEn: 'How do you write your word?' },
      { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
      { w: '"', spaceBefore: true, noSpaceAfter: true, plain: true },
      { w: 'Buch', role: 'r-object', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.', why: 'das Buch — recycled from Ch.1 Vocabulary.', ex: 'Das Buch ist neu.', exTokens: [ { w: 'Das', role: 'r-article', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut. nom.', why: 'Neuter nominative — the subject.' }, { w: 'Buch', role: 'r-subject', case: 'Nominativ', number: 'Singular', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut. singular' }, { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (er)' }, { w: 'neu', role: 'r-adjective', en: 'new', hi: 'नया', pron: 'noy', type: 'Adjective · predicate' }, { w: '.', plain: true } ], exEn: 'The book is new.' },
      { w: '"', plain: true },
      { w: '?', plain: true },
      { w: 'Bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Adverb', why: 'bitte softens a request = please.', ex: 'Bitte buchstabiere es.', exEn: 'Please spell it.' },
      { w: 'buchstabiere', role: 'r-verb', en: 'spell', hi: 'वर्तनी बताओ', pron: 'BOOKH-shta-bee-ruh', type: 'Verb · imperative', why: 'buchstabieren = to spell; here a gentle command.', ex: 'Buchstabiere es bitte.', exEn: 'Please spell it.', conj: { praesens: 'buchstabiert', praeteritum: 'buchstabierte', perfekt: 'hat buchstabiert' } },
      { w: 'es', role: 'r-object', en: 'it', hi: 'इसे', pron: 'es', type: 'Pronoun · object' },
      { w: '.', plain: true },
      { w: 'B', noSpaceAfter: true, role: 'r-letter', en: 'the letter B', hi: 'अक्षर B', pron: 'bay', type: 'Letter' },
      { w: '-', noSpaceAfter: true, plain: true },
      { w: 'U', noSpaceAfter: true, role: 'r-letter', en: 'the letter U', hi: 'अक्षर U', pron: 'oo', type: 'Letter', spokenDe: 'Uh' },
      { w: '-', noSpaceAfter: true, plain: true },
      { w: 'C', noSpaceAfter: true, role: 'r-letter', en: 'the letter C', hi: 'अक्षर C', pron: 'tsay', type: 'Letter' },
      { w: '-', noSpaceAfter: true, plain: true },
      { w: 'H', role: 'r-letter', en: 'the letter H', hi: 'अक्षर H', pron: 'hah', type: 'Letter', spokenDe: 'Ha' },
      { w: '.', plain: true },
      { w: 'Buch', role: 'r-subject', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.', why: 'The spelled-out word confirmed on its own.', ex: 'Buch.', exEn: 'Book.' },
      { w: '.', plain: true },
      { w: 'Richtig', role: 'r-adjective', en: 'correct', hi: 'सही', pron: 'RIKH-tikh', type: 'Adjective', why: 'richtig = correct/right — a common teacher response.', ex: 'Richtig!', exEn: 'Correct!' },
      { w: '!', plain: true },
      { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: '"', spaceBefore: true, noSpaceAfter: true, plain: true },
      { w: 'Heft', role: 'r-object', en: 'notebook', hi: 'नोटबुक', pron: 'heft', type: 'Noun · neut.', why: 'das Heft = exercise book/notebook.', ex: 'Das Heft ist neu.', exEn: 'The notebook is new.' },
      { w: '"', plain: true },
      { w: '?', plain: true },
      { w: 'H', noSpaceAfter: true, role: 'r-letter', en: 'the letter H', hi: 'अक्षर H', pron: 'hah', type: 'Letter', spokenDe: 'Ha' },
      { w: '-', noSpaceAfter: true, plain: true },
      { w: 'E', noSpaceAfter: true, role: 'r-letter', en: 'the letter E', hi: 'अक्षर E', pron: 'ay', type: 'Letter', spokenDe: 'Eh' },
      { w: '-', noSpaceAfter: true, plain: true },
      { w: 'F', noSpaceAfter: true, role: 'r-letter', en: 'the letter F', hi: 'अक्षर F', pron: 'eff', type: 'Letter', spokenDe: 'Eff' },
      { w: '-', noSpaceAfter: true, plain: true },
      { w: 'T', role: 'r-letter', en: 'the letter T', hi: 'अक्षर T', pron: 'tay', type: 'Letter' },
      { w: '.', plain: true },
      { w: 'Das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut.' },
      { w: 'Heft', role: 'r-subject', en: 'notebook', hi: 'नोटबुक', pron: 'heft', type: 'Noun · subject', why: 'das Heft as the subject of ist.', ex: 'Das Heft ist neu.', exEn: 'The notebook is new.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive · nom.', why: 'mein Lieblingswort = my favorite word (predicate nominative).' },
      { w: 'Lieblingswort', role: 'r-subject', en: 'favorite word', hi: 'पसंदीदा शब्द', pron: 'LEEB-lings-vort', type: 'Noun · compound, neut.', why: 'Liebling (favorite) + s + Wort (word) — a compound noun, predicate nominative after ist.', ex: 'Buch ist mein Lieblingswort.', exEn: 'Book is my favorite word.' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Welches Wort buchstabiert Rohan zuerst?', qEn: 'What word does Rohan spell first?', options: ['Heft', 'Buch', 'Apfel', 'Stift'], optionsEn: ['notebook', 'book', 'apple', 'pen'], answer: 1,
        explain: '"Wie schreibst du \'Buch\'?" — she asks him to spell "Buch" first.' },
      { q: 'Warum buchstabiert Rohan Wörter für Frau Weber?', qEn: 'Why is Rohan spelling words for Frau Weber?', options: ['Um seinen eigenen Namen zu lernen', 'Um sein Heft richtig zu beschriften', 'Um ein Buch zu lesen', 'Um einen Anruf anzunehmen'], optionsEn: ['To learn his own name', 'To label his notebook correctly', 'To read a book', 'To answer a phone call'], answer: 1,
        explain: 'She is checking he can write "Buch" and "Heft" correctly.' }
    ]
  },

  speaking: [
    { task: "Die Lehrerin fragt: Wie schreibt man „Buch“? Buchstabiere es.", taskEn: "The teacher asks: how do you spell “Buch”? Spell it.", de: "B-U-C-H. Buch.", en: "B-U-C-H. Buch." },
    { task: "Deine Lehrerin fragt: Welches Wort ist dein Lieblingswort? Buchstabiere es.", taskEn: "Your teacher asks: which word is your favourite? Spell it.", de: "Käse. K-Ä-S-E.", en: "Käse. K-Ä-S-E." },
    { task: "Sag drei Buchstaben mit einem Wort aus dem Kurs.", taskEn: "Say three letters with a word each from the course.", de: "A wie Apfel, B wie Buch, H wie Hund.", en: "A as in Apfel, B as in Buch, H as in Hund." }
  ],

  writing: {
    prompt: 'Spell three German words out loud, then write them: their letters, then the whole word. Use the letter names you learned (e.g. "Buch = bay, oo, tsay, hah").',
    starters: ['Apfel = …', 'Buch = …', 'Zeit = …'],
    minWords: 9
  },

  exercises: {
    mcq: {
      q: 'How is "Zeit" pronounced?',
      options: ['ZAYT', 'TSAIT', 'ZEET', 'SAIT'],
      answer: 1,
      explain: 'z = "ts" and ei = "eye", so Zeit = "TSAIT".'
    },
    gap: {
      sentence: ['A wie ', ', B wie ', '.'],
      gaps: [ { answer: 'Apfel', accepts: ['apfel'] }, { answer: 'Buch', accepts: ['buch'] } ],
      explain: 'The classic spelling examples: A wie Apfel, B wie Buch.'
    },
    match: {
      q: 'Match each letter to the sound it makes.',
      pairs: [
        { noun: 'ei', art: 'eye' },
        { noun: 'ie', art: 'ee' },
        { noun: 'z', art: 'ts' },
        { noun: 'w', art: 'v' }
      ]
    },
    builder: {
      target: 'Build: "A as in apple."',
      bank: ['Apfel', 'A', 'wie'],
      answer: ['A', 'wie', 'Apfel'],
      roles: { 'A': 'r-subject', 'wie': 'r-preposition', 'Apfel': 'r-object' }
    }
  },

  quiz: [
    { q: 'How do you say the letter "W" in German?', options: ['"double-u"', '"vay"', '"way"', '"vee"'], answer: 1,
      explain: 'W is named "vay" — and it sounds like an English "v".' },
    { q: 'The letters "ei" sound like…', options: ['"ee"', '"ay"', '"eye"', '"oy"'], answer: 2,
      explain: 'ei = "eye": Eis = "ice".' },
    { q: 'Which sign is the "sharp s"?', options: ['ä', 'ö', 'ü', 'ß'], answer: 3,
      explain: 'ß (Eszett) is the sharp s; it sounds like "ss".' },
    { q: 'How is "z" pronounced in German?', options: ['"z"', '"ts"', '"s"', '"sh"'], answer: 1,
      explain: 'z is always "ts": Zeit = "TSAIT".' },
    { q: 'Which word correctly demonstrates "V → f"?', options: ['Wasser', 'Vater', 'Zeit', 'Buch'], answer: 1,
      explain: 'Vater is pronounced "FAH-ter" — v sounds like "f".' }
  ],

  takeaways: [
    { c: 'r-subject', html: '<b>German spells what it says</b> — once you know the sounds, you can read it. Learn each letter\'s name to spell out loud.' },
    { c: 'r-article', html: 'Four extra signs: <span class="de">ä</span>, <span class="de">ö</span>, <span class="de">ü</span> (umlauts) and <span class="de">ß</span> (sharp s).' },
    { c: 'r-object', html: 'Remember the traps: <b>ei</b> = "eye", <b>ie</b> = "ee", <b>z</b> = "ts", <b>sch</b> = "sh", <b>v</b> = "f", <b>w</b> = "v", <b>s-</b> = "z", <b>st-</b> = "sht".' }
  ],
  revisionTips: [
    'Say the alphabet out loud once a day for a week — names, not just sounds.',
    'Spell every German word you meet as "X wie Word" — it cements the letter names fast.',
    'Whenever you see ei or ie, pause and read the correct vowel before saying the word.'
  ]
};

window.CHAPTER = CHAPTER;
