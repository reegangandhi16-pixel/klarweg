/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 2 · Chapter 14
   "Essen & Trinken"  (Food, drink & preferences)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-14 word list (82 words).
   Recycles Chapters 1–13 throughout.
============================================================ */
const CHAPTER = {
  id: 'a1-14-essen',
  phase: 'A1 · Phase 2',
  number: 14,
  title: 'Essen & Trinken',
  titleEn: 'Food & Drink',
  description: 'Order, eat, and say what you like. Learn the food and drink words, the verbs essen, trinken and mögen, and the one polite phrase that opens every café in Germany — Ich möchte … bitte.',
  xp: 180,
  time: 50,
  difficulty: 'Beginner',
  nextChapter: { number: 15, title: 'Im Café', titleEn: 'At the Café' , href: 'chapter-a1-15-cafe.html' },

  heroAnimationPath: null,

  // ---------- Story Dialogue (signature section — before vocab/grammar) ----------
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Hanna is working at a café in Berlin when Simon comes in for breakfast — and the food words arrive before any rule does.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'A real two-person café order, start to finish'
    ],
    scene: 'Im Café — Berlin',
    femaleSpeakers: ['Hanna'],
    dialogue: [
      { speaker: 'Hanna', tokens: [
        { w: 'Guten', role: 'r-subject', en: 'good', hi: 'अच्छा', pron: 'GOO-ten', type: 'Greeting' },
        { w: 'Morgen', role: 'r-subject', en: 'morning', hi: 'सुबह', pron: 'MOR-gen', type: 'Greeting', why: 'Guten Morgen — good morning (Chapter 4).', ex: 'Guten Morgen!', exEn: 'Good morning!' },
        { w: '!', plain: true },
        { w: 'Was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'isst', role: 'r-verb', en: 'do you eat', hi: 'खाते हो', pron: 'ist', type: 'Verb · essen (du)', why: 'essen, du-form (irregular e→i).', ex: 'Was isst du?', exEn: 'What do you eat?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: '?', plain: true }
      ], en: 'Good morning! What are you eating today?', hi: 'Guten Morgen! Aaj tum kya khaate ho?' },
      { speaker: 'Simon', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है (मुझे)', pron: 'HA-buh', type: 'Verb · haben', why: 'Hunger uses haben (this chapter).', ex: 'Ich habe Hunger.', exEn: 'I am hungry.' },
        { w: 'Hunger', role: 'r-object', en: 'hunger', hi: 'भूख', pron: 'HUNG-er', type: 'Noun', why: '"Ich habe Hunger" = I am hungry.', ex: 'Ich habe Hunger.', exEn: 'I am hungry.' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
        { w: 'esse', role: 'r-verb', en: 'eat', hi: 'खाता हूँ', pron: 'E-suh', type: 'Verb · ich', why: 'essen, ich-form.', ex: 'Ich esse ein Brötchen.', exEn: 'I eat a roll.' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article' },
        { w: 'Brötchen', role: 'r-object', en: 'bread roll', hi: 'बन', pron: 'BRÖT-khen', type: 'Noun · neut.', why: '-chen → always neuter (Chapter 10).', ex: 'Ich esse ein Brötchen.', exEn: 'I eat a roll.' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'Käse', role: 'r-object', en: 'cheese', hi: 'पनीर', pron: 'KAY-zuh', type: 'Noun', why: 'der Käse (this chapter).', ex: 'Brot mit Käse.', exEn: 'Bread with cheese.' },
        { w: '.', plain: true }
      ], en: 'I am hungry! I\u2019ll eat a bread roll with cheese.', hi: 'Mujhe bhookh hai! Main Käse ke saath ek Brötchen khaaunga.' },
      { speaker: 'Hanna', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'Schinken', role: 'r-object', en: 'ham', hi: 'हैम', pron: 'SHIN-ken', type: 'Noun · masc.', why: 'der Schinken (this chapter).', ex: 'Brot mit Schinken.', exEn: 'Bread with ham.' },
        { w: '?', plain: true },
        { w: 'Der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'frisch', role: 'r-adjective', en: 'fresh', hi: 'ताज़ा', pron: 'frish', type: 'Adjective', why: 'sein + adjective, no ending (Chapter 13).', ex: 'Das ist frisch.', exEn: 'That is fresh.' },
        { w: '.', plain: true }
      ], en: 'And ham? It is very fresh today.', hi: 'Aur ham? Aaj yeh bahut taaza hai.' },
      { speaker: 'Simon', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer' },
        { w: ',', plain: true },
        { w: 'danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
        { w: 'esse', role: 'r-verb', en: 'eat', hi: 'खाता हूँ', pron: 'E-suh', type: 'Verb · ich' },
        { w: 'kein', role: 'r-negation', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Negation', why: 'kein negates a noun (Chapter 11).', ex: 'Ich esse kein Fleisch.', exEn: 'I don\u2019t eat meat.' },
        { w: 'Fleisch', role: 'r-object', en: 'meat', hi: 'मांस', pron: 'flysh', type: 'Noun', why: 'das Fleisch (this chapter).', ex: 'Ich esse kein Fleisch.', exEn: 'I don\u2019t eat meat.' },
        { w: '.', plain: true }
      ], en: 'No, thanks. I don\u2019t eat meat.', hi: 'Nahi, dhanyavaad. Main maans nahi khaata.' },
      { speaker: 'Hanna', tokens: [
        { w: 'Ah', role: 'r-adverb', en: 'ah', hi: 'अच्छा', pron: 'ah', type: 'Reaction' },
        { w: ',', plain: true },
        { w: 'kein', role: 'r-negation', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Negation' },
        { w: 'Problem', role: 'r-object', en: 'problem', hi: 'समस्या', pron: 'pro-BLAYM', type: 'Noun', why: '"Kein Problem!" = no problem (Chapter 11).', ex: 'Kein Problem!', exEn: 'No problem!' },
        { w: '!', plain: true },
        { w: 'Isst', role: 'r-verb', en: 'do you eat', hi: 'खाते हो', pron: 'ist', type: 'Verb · essen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
        { w: 'Obst', role: 'r-object', en: 'fruit', hi: 'फल', pron: 'ohpst', type: 'Noun', why: 'das Obst — fruit (this chapter).', ex: 'Ich esse gern Obst.', exEn: 'I like fruit.' },
        { w: '?', plain: true }
      ], en: 'Ah, no problem! Do you eat fruit?', hi: 'Achha, koi baat nahi! Kya tum phal khaate ho?' },
      { speaker: 'Simon', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer' },
        { w: ',', plain: true },
        { w: 'gerne', role: 'r-adverb', en: 'with pleasure', hi: 'खुशी से', pron: 'GAIR-nuh', type: 'Adverb', why: 'gerne = gladly (this chapter).', ex: 'Ja, gerne!', exEn: 'Yes, please!' },
        { w: '!', plain: true },
        { w: 'Sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'die', role: 'r-article', en: 'the (pl.)', hi: 'वे', pron: 'dee', type: 'Article · plural' },
        { w: 'Bananen', role: 'r-subject', en: 'bananas', hi: 'केले', pron: 'ba-NA-nen', type: 'Noun · plural', why: 'plural → die (Chapter 10).', ex: 'Die Bananen sind frisch.', exEn: 'The bananas are fresh.' },
        { w: 'frisch', role: 'r-adjective', en: 'fresh', hi: 'ताज़ा', pron: 'frish', type: 'Adjective' },
        { w: '?', plain: true }
      ], en: 'Yes, please! Are the bananas fresh?', hi: 'Haan, khushi se! Kya Bananen taaze hain?' },
      { speaker: 'Hanna', tokens: [
        { w: 'Sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'frisch', role: 'r-adjective', en: 'fresh', hi: 'ताज़ा', pron: 'frish', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Müsli', role: 'r-object', en: 'muesli', hi: 'म्यूस्ली', pron: 'MÜS-li', type: 'Noun', why: 'das Müsli (this chapter).', ex: 'Ich esse Müsli.', exEn: 'I eat muesli.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'lecker', role: 'r-adjective', en: 'tasty', hi: 'स्वादिष्ट', pron: 'LE-ker', type: 'Adjective', why: 'sein + adjective (Chapter 13).', ex: 'Das ist lecker!', exEn: 'That is tasty!' },
        { w: '.', plain: true }
      ], en: 'Very fresh! And the muesli is tasty too.', hi: 'Bahut taaze! Aur Müsli bhi swaadisht hai.' },
      { speaker: 'Simon', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'esse', role: 'r-verb', en: 'eat', hi: 'खाता हूँ', pron: 'E-suh', type: 'Verb · essen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
        { w: 'Müsli', role: 'r-object', en: 'muesli', hi: 'म्यूस्ली', pron: 'MÜS-li', type: 'Noun' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'Obst', role: 'r-object', en: 'fruit', hi: 'फल', pron: 'ohpst', type: 'Noun' },
        { w: '.', plain: true }
      ], en: 'Perfect! Then I\u2019ll eat muesli with fruit.', hi: 'Badhiya! Toh main phal ke saath Müsli khaaunga.' },
      { speaker: 'Hanna', tokens: [
        { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Wahl', role: 'r-object', en: 'choice', hi: 'चुनाव', pron: 'vahl', type: 'Noun · fem.' },
        { w: ',', plain: true },
        { w: 'Simon', role: 'r-name', en: 'Simon', hi: 'साइमन', pron: 'ZY-mon', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Trinkst', role: 'r-verb', en: 'do you drink', hi: 'पीते हो', pron: 'TRINKST', type: 'Verb · trinken (du)', why: 'trinken, du-form (this chapter).', ex: 'Trinkst du Tee?', exEn: 'Do you drink tea?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Tee', role: 'r-object', en: 'tea', hi: 'चाय', pron: 'tay', type: 'Noun · masc.', why: 'der Tee (this chapter).', ex: 'Ich trinke gern Tee.', exEn: 'I like drinking tea.' },
        { w: '?', plain: true }
      ], en: 'Good choice, Simon! Are you drinking a tea too?', hi: 'Achha chunaav, Simon! Kya tum ek chai bhi piyoge?' },
      { speaker: 'Simon', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer' },
        { w: ',', plain: true },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
        { w: 'trinke', role: 'r-verb', en: 'drink', hi: 'पीता हूँ', pron: 'TRIN-kuh', type: 'Verb · trinken (ich)' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: 'Tee', role: 'r-object', en: 'tea', hi: 'चाय', pron: 'tay', type: 'Noun · masc.' },
        { w: '.', plain: true },
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: ',', plain: true },
        { w: 'Hanna', role: 'r-name', en: 'Hanna', hi: 'हाना', pron: 'HA-na', type: 'Name · person' },
        { w: '!', plain: true }
      ], en: 'Yes, please! I always drink tea. Thanks, Hanna!', hi: 'Haan, khushi se! Main hamesha chai peeta hoon. Dhanyavaad, Hanna!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Three verbs run every meal: <span class="de r-verb">essen</span> (eat), <span class="de r-verb">trinken</span> (drink), and <span class="de r-verb">mögen</span> (like). To order politely, one phrase does it all: <span class="de">Ich möchte einen Kaffee, bitte.</span> — and the food is the <span class="de r-akkusativ">object</span> (Chapter 12).'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is FOOD & DRINK: naming foods/drinks, the verbs essen / trinken / mögen / möchten, likes/dislikes, and polite ordering. ' +
    'The learner wrote sentences about food below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- essen is irregular in du/er: ich esse, du isst, er/sie/es isst, wir essen, ihr esst, sie essen.\n' +
    '- trinken is regular: ich trinke, du trinkst, er/sie/es trinkt.\n' +
    '- "ich möchte" (would like) is the polite ordering form: ich möchte, du möchtest, er/sie möchte, wir möchten. Use it with a noun object: "Ich möchte einen Tee."\n' +
    '- mögen (to like) for general preference: ich mag, du magst, er/sie mag. "Ich mag Käse."\n' +
    '- "gern/gerne" added to a normal verb expresses liking the activity: "Ich trinke gern Tee." (I like drinking tea.)\n' +
    '- Food is a direct object → accusative: masculine der→den/einen (einen Kaffee), feminine/neuter unchanged (eine Banane, ein Brot).\n' +
    '- Negate a food noun with kein: "Ich esse kein Fleisch." (Chapter 11).\n' +
    '- All nouns are capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Order/verb check:</b> one sentence on essen/möchte and the accusative article on the food.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you can name food, say what you like, and order. Move on to <span class="de">Im Café</span>.',
    mid: 'Good. Re-read the essen / möchte card once, then continue.',
    low: 'Worth another pass — revisit the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'möchte', role: 'r-verb' },
    { w: 'einen', role: 'r-akkusativ' }, { w: 'Kaffee', role: 'r-object' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole chapter at a glance before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meet the characters at the café — experience the chapter\u2019s words and grammar in a real conversation first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the foods, drinks, meals, and the verbs and polite words you need to eat and order.' },
    { id: 'grammar',    label: 'essen & möchten', tag: 'core',
      objective: 'Master essen/trinken/mögen, the polite "ich möchte", and likes/dislikes with gern.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a breakfast-and-café scene and tap any word to hear it and see what it means.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch what people eat, drink and order, then answer what they chose.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say what you eat, like and want, and order food and drink in a café.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five sentences about your meals and a short café order.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill food vocabulary, ordering phrases, and verb forms with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 180 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All food and drink words with articles, translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '14 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Food matching, essen/möchte drills, café-order practice, and self-study activities.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'essen/trinken/mögen conjugation, ich möchte, gern, kein with food, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Essen & Trinken', text: 'Name common foods and drinks with their articles' },
    { de: 'ich esse / trinke', text: 'Say what you eat and drink' },
    { de: 'Ich mag … / gern', text: 'Express what you like and dislike' },
    { de: 'Ich möchte …', text: 'Order food and drink politely' },
    { de: 'kein Fleisch', text: 'Say what you do not eat' }
  ],

  // ---------- Vocabulary (82 words) ----------
  vocab: [
    // — Core foods (nouns) —
    { de: 'Brot', art: 'das', gender: 'n', plural: 'Brote', pos: 'noun', en: 'bread', hi: 'रोटी / ब्रेड', ex: 'Ich esse Brot zum Frühstück.', exEn: 'I eat bread for breakfast.' },
    { de: 'Brötchen', art: 'das', gender: 'n', plural: 'Brötchen', pos: 'noun', en: 'bread roll', hi: 'बन', ex: 'Das Brötchen ist frisch.', exEn: 'The bread roll is fresh.' },
    { de: 'Ei', art: 'das', gender: 'n', plural: 'Eier', pos: 'noun', en: 'egg', hi: 'अंडा', ex: 'Ich esse ein Ei.', exEn: 'I eat an egg.' },
    { de: 'Fleisch', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'meat', hi: 'मांस', ex: 'Ich esse kein Fleisch.', exEn: 'I don\'t eat meat.' },
    { de: 'Gemüse', art: 'das', gender: 'n', plural: 'Gemüse', pos: 'noun', en: 'vegetable(s)', hi: 'सब्ज़ी', ex: 'Gemüse ist gesund.', exEn: 'Vegetables are healthy.' },
    { de: 'Obst', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'fruit', hi: 'फल', ex: 'Ich esse gern Obst.', exEn: 'I like eating fruit.' },
    { de: 'Wasser', art: 'das', gender: 'n', plural: 'Wasser', pos: 'noun', en: 'water', hi: 'पानी', ex: 'Ich trinke Wasser.', exEn: 'I drink water.' },
    { de: 'Apfel', art: 'der', gender: 'm', plural: 'Äpfel', pos: 'noun', en: 'apple', hi: 'सेब', ex: 'Der Apfel ist süß.', exEn: 'The apple is sweet.' },
    { de: 'Fisch', art: 'der', gender: 'm', plural: 'Fische', pos: 'noun', en: 'fish', hi: 'मछली', ex: 'Der Fisch ist frisch.', exEn: 'The fish is fresh.' },
    { de: 'Kaffee', art: 'der', gender: 'm', plural: 'Kaffees', pos: 'noun', en: 'coffee', hi: 'कॉफ़ी', ex: 'Ich möchte einen Kaffee.', exEn: 'I would like a coffee.' },
    { de: 'Kuchen', art: 'der', gender: 'm', plural: 'Kuchen', pos: 'noun', en: 'cake', hi: 'केक', ex: 'Der Kuchen ist lecker.', exEn: 'The cake is tasty.' },
    { de: 'Käse', art: 'der', gender: 'm', plural: 'Käse', pos: 'noun', en: 'cheese', hi: 'पनीर / चीज़', ex: 'Ich mag Käse.', exEn: 'I like cheese.' },
    { de: 'Saft', art: 'der', gender: 'm', plural: 'Säfte', pos: 'noun', en: 'juice', hi: 'जूस', ex: 'Der Saft ist kalt.', exEn: 'The juice is cold.' },
    { de: 'Salat', art: 'der', gender: 'm', plural: 'Salate', pos: 'noun', en: 'salad', hi: 'सलाद', ex: 'Ich esse einen Salat.', exEn: 'I eat a salad.' },
    { de: 'Tee', art: 'der', gender: 'm', plural: 'Tees', pos: 'noun', en: 'tea', hi: 'चाय', ex: 'Ich trinke gern Tee.', exEn: 'I like drinking tea.' },
    { de: 'Zucker', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'sugar', hi: 'चीनी', ex: 'Kein Zucker, bitte.', exEn: 'No sugar, please.' },
    { de: 'Banane', art: 'die', gender: 'f', plural: 'Bananen', pos: 'noun', en: 'banana', hi: 'केला', ex: 'Die Banane ist gelb.', exEn: 'The banana is yellow.' },
    { de: 'Kartoffel', art: 'die', gender: 'f', plural: 'Kartoffeln', pos: 'noun', en: 'potato', hi: 'आलू', ex: 'Ich esse Kartoffeln.', exEn: 'I eat potatoes.' },
    { de: 'Milch', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'milk', hi: 'दूध', ex: 'Milch im Kaffee?', exEn: 'Milk in the coffee?' },
    { de: 'Schokolade', art: 'die', gender: 'f', plural: 'Schokoladen', pos: 'noun', en: 'chocolate', hi: 'चॉकलेट', ex: 'Die Schokolade ist süß.', exEn: 'The chocolate is sweet.' },
    { de: 'Tomate', art: 'die', gender: 'f', plural: 'Tomaten', pos: 'noun', en: 'tomato', hi: 'टमाटर', ex: 'Die Tomate ist rot.', exEn: 'The tomato is red.' },
    // — Core verbs / preference words —
    { de: 'essen', pos: 'verb', en: 'to eat', hi: 'खाना', ex: 'Ich esse Brot.', exEn: 'I eat bread.', conj: { praesens: 'isst', praeteritum: 'aß', perfekt: 'hat gegessen' } },
    { de: 'trinken', pos: 'verb', en: 'to drink', hi: 'पीना', ex: 'Ich trinke Wasser.', exEn: 'I drink water.' },
    { de: 'möchten', pos: 'verb (modal)', en: 'would like', hi: 'चाहना (विनम्र)', ex: 'Ich möchte einen Tee.', exEn: 'I would like a tea.', conj: { praesens: 'möchte', praeteritum: 'wollte', perfekt: '—' } },
    { de: 'mögen', pos: 'verb (modal)', en: 'to like', hi: 'पसंद करना', ex: 'Ich mag Käse.', exEn: 'I like cheese.', conj: { praesens: 'mag', praeteritum: 'mochte', perfekt: 'hat gemocht' } },
    { de: 'gern', pos: 'adverb', en: 'gladly, like to', hi: 'पसंद से', ex: 'Ich esse gern Obst.', exEn: 'I like eating fruit.' },
    { de: 'gerne', pos: 'adverb', en: 'with pleasure', hi: 'खुशी से', ex: 'Ja, gerne!', exEn: 'Yes, with pleasure!' },
    // — Meals & support nouns —
    { de: 'Frühstück', art: 'das', gender: 'n', plural: 'Frühstücke', pos: 'noun', en: 'breakfast', hi: 'नाश्ता', ex: 'Das Frühstück ist um acht.', exEn: 'Breakfast is at eight.' },
    { de: 'Mittagessen', art: 'das', gender: 'n', plural: 'Mittagessen', pos: 'noun', en: 'lunch', hi: 'दोपहर का खाना', ex: 'Das Mittagessen ist warm.', exEn: 'Lunch is warm.' },
    { de: 'Abendessen', art: 'das', gender: 'n', plural: 'Abendessen', pos: 'noun', en: 'dinner', hi: 'रात का खाना', ex: 'Das Abendessen ist um sieben.', exEn: 'Dinner is at seven.' },
    { de: 'Getränk', art: 'das', gender: 'n', plural: 'Getränke', pos: 'noun', en: 'drink, beverage', hi: 'पेय', ex: 'Welches Getränk möchtest du?', exEn: 'Which drink would you like?' },
    { de: 'Lebensmittel', art: 'das', gender: 'n', plural: 'Lebensmittel', pos: 'noun', en: 'groceries, food item', hi: 'खाद्य सामग्री', ex: 'Ich kaufe Lebensmittel.', exEn: 'I buy groceries.' },
    { de: 'Müsli', art: 'das', gender: 'n', plural: 'Müslis', pos: 'noun', en: 'muesli', hi: 'म्यूस्ली', ex: 'Zum Frühstück esse ich Müsli.', exEn: 'For breakfast I eat muesli.' },
    { de: 'Salz', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'salt', hi: 'नमक', ex: 'Das Salz ist auf dem Tisch.', exEn: 'The salt is on the table.' },
    { de: 'Öl', art: 'das', gender: 'n', plural: 'Öle', pos: 'noun', en: 'oil', hi: 'तेल', ex: 'Öl für den Salat?', exEn: 'Oil for the salad?' },
    { de: 'Apfelsaft', art: 'der', gender: 'm', plural: 'Apfelsäfte', pos: 'noun', en: 'apple juice', hi: 'सेब का जूस', ex: 'Ich trinke Apfelsaft.', exEn: 'I drink apple juice.' },
    { de: 'Durst', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'thirst', hi: 'प्यास', ex: 'Ich habe Durst.', exEn: 'I am thirsty.' },
    { de: 'Hunger', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'hunger', hi: 'भूख', ex: 'Ich habe Hunger.', exEn: 'I am hungry.' },
    { de: 'Joghurt', art: 'der', gender: 'm', plural: 'Joghurts', pos: 'noun', en: 'yogurt', hi: 'दही', ex: 'Der Joghurt ist frisch.', exEn: 'The yogurt is fresh.' },
    { de: 'Orangensaft', art: 'der', gender: 'm', plural: 'Orangensäfte', pos: 'noun', en: 'orange juice', hi: 'संतरे का जूस', ex: 'Ein Orangensaft, bitte.', exEn: 'An orange juice, please.' },
    { de: 'Pfeffer', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'pepper', hi: 'काली मिर्च', ex: 'Salz und Pfeffer, bitte.', exEn: 'Salt and pepper, please.' },
    { de: 'Reis', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'rice', hi: 'चावल', ex: 'Ich esse Reis mit Gemüse.', exEn: 'I eat rice with vegetables.' },
    { de: 'Schinken', art: 'der', gender: 'm', plural: 'Schinken', pos: 'noun', en: 'ham', hi: 'हैम', ex: 'Brot mit Schinken.', exEn: 'Bread with ham.' },
    { de: 'Butter', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'butter', hi: 'मक्खन', ex: 'Butter aufs Brot.', exEn: 'Butter on the bread.' },
    { de: 'Cola', art: 'die', gender: 'f', plural: 'Colas', pos: 'noun', en: 'cola', hi: 'कोला', ex: 'Eine Cola, bitte.', exEn: 'A cola, please.' },
    { de: 'Gurke', art: 'die', gender: 'f', plural: 'Gurken', pos: 'noun', en: 'cucumber', hi: 'खीरा', ex: 'Die Gurke ist im Salat.', exEn: 'The cucumber is in the salad.' },
    { de: 'Limonade', art: 'die', gender: 'f', plural: 'Limonaden', pos: 'noun', en: 'lemonade', hi: 'नींबू पानी', ex: 'Die Limonade ist süß.', exEn: 'The lemonade is sweet.' },
    { de: 'Marmelade', art: 'die', gender: 'f', plural: 'Marmeladen', pos: 'noun', en: 'jam', hi: 'जैम', ex: 'Brötchen mit Marmelade.', exEn: 'A roll with jam.' },
    { de: 'Sahne', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'cream', hi: 'क्रीम', ex: 'Kuchen mit Sahne.', exEn: 'Cake with cream.' },
    { de: 'Suppe', art: 'die', gender: 'f', plural: 'Suppen', pos: 'noun', en: 'soup', hi: 'सूप', ex: 'Die Suppe ist heiß.', exEn: 'The soup is hot.' },
    { de: 'Süßigkeit', art: 'die', gender: 'f', plural: 'Süßigkeiten', pos: 'noun', en: 'sweet, candy', hi: 'मिठाई', ex: 'Kinder mögen Süßigkeiten.', exEn: 'Children like sweets.' },
    { de: 'Wurst', art: 'die', gender: 'f', plural: 'Würste', pos: 'noun', en: 'sausage', hi: 'सॉसेज', ex: 'Die Wurst ist lecker.', exEn: 'The sausage is tasty.' },
    { de: 'frisch', pos: 'adjective', en: 'fresh', hi: 'ताज़ा', ex: 'Das Obst ist frisch.', exEn: 'The fruit is fresh.' },
    { de: 'lecker', pos: 'adjective', en: 'tasty, delicious', hi: 'स्वादिष्ट', ex: 'Das Essen ist lecker.', exEn: 'The food is delicious.' },
    { de: 'probieren', pos: 'verb', en: 'to try, taste', hi: 'चखना', ex: 'Probier den Kuchen!', exEn: 'Try the cake!', conj: { praesens: 'probiert', praeteritum: 'probierte', perfekt: 'hat probiert' } },
    { de: 'schmecken', pos: 'verb', en: 'to taste (good)', hi: 'स्वाद लगना', ex: 'Das schmeckt gut!', exEn: 'That tastes good!', conj: { praesens: 'schmeckt', praeteritum: 'schmeckte', perfekt: 'hat geschmeckt' } },
    { de: 'süß', pos: 'adjective', en: 'sweet', hi: 'मीठा', ex: 'Die Banane ist süß.', exEn: 'The banana is sweet.' },
    // — Passive —
    { de: 'asiatisch', pos: 'adjective', en: 'Asian', hi: 'एशियाई', ex: 'Ich mag asiatisches Essen.', exEn: 'I like Asian food.' },
    { de: 'Dessert', art: 'das', gender: 'n', plural: 'Desserts', pos: 'noun', en: 'dessert', hi: 'मिष्ठान', ex: 'Als Dessert gibt es Kuchen.', exEn: 'For dessert there is cake.' },
    { de: 'Fett', art: 'das', gender: 'n', plural: 'Fette', pos: 'noun', en: 'fat', hi: 'वसा', ex: 'Zu viel Fett ist nicht gesund.', exEn: 'Too much fat is not healthy.' },
    { de: 'Fischgericht', art: 'das', gender: 'n', plural: 'Fischgerichte', pos: 'noun', en: 'fish dish', hi: 'मछली का व्यंजन', ex: 'Das Fischgericht ist frisch.', exEn: 'The fish dish is fresh.' },
    { de: 'Hähnchen', art: 'das', gender: 'n', plural: 'Hähnchen', pos: 'noun', en: 'chicken', hi: 'चिकन', ex: 'Ich esse Hähnchen mit Reis.', exEn: 'I eat chicken with rice.' },
    { de: 'Sushi', art: 'das', gender: 'n', plural: 'Sushi', pos: 'noun', en: 'sushi', hi: 'सुशी', ex: 'Sushi ist asiatisch.', exEn: 'Sushi is Asian.' },
    { de: 'Champignon', art: 'der', gender: 'm', plural: 'Champignons', pos: 'noun', en: 'mushroom', hi: 'मशरूम', ex: 'Pizza mit Champignons.', exEn: 'Pizza with mushrooms.' },
    { de: 'Döner', art: 'der', gender: 'm', plural: 'Döner', pos: 'noun', en: 'kebab', hi: 'डोनर कबाब', ex: 'Der Döner ist lecker.', exEn: 'The kebab is tasty.' },
    { de: 'Emmentaler', art: 'der', gender: 'm', plural: 'Emmentaler', pos: 'noun', en: 'Emmental cheese', hi: 'एमेंटाल चीज़', ex: 'Emmentaler ist ein Käse.', exEn: 'Emmental is a cheese.' },
    { de: 'Essig', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'vinegar', hi: 'सिरका', ex: 'Öl und Essig im Salat.', exEn: 'Oil and vinegar in the salad.' },
    { de: 'Keks', art: 'der', gender: 'm', plural: 'Kekse', pos: 'noun', en: 'cookie, biscuit', hi: 'बिस्कुट', ex: 'Ein Keks zum Tee.', exEn: 'A cookie with the tea.' },
    { de: 'Stollen', art: 'der', gender: 'm', plural: 'Stollen', pos: 'noun', en: 'fruit loaf (Stollen)', hi: 'स्टोलन', ex: 'Stollen isst man zu Weihnachten.', exEn: 'Stollen is eaten at Christmas.' },
    { de: 'Birne', art: 'die', gender: 'f', plural: 'Birnen', pos: 'noun', en: 'pear', hi: 'नाशपाती', ex: 'Die Birne ist süß.', exEn: 'The pear is sweet.' },
    { de: 'Chips', art: 'die', gender: 'f', plural: 'Chips', pos: 'noun', en: 'crisps', hi: 'चिप्स', ex: 'Chips sind salzig.', exEn: 'Crisps are salty.' },
    { de: 'Olive', art: 'die', gender: 'f', plural: 'Oliven', pos: 'noun', en: 'olive', hi: 'जैतून', ex: 'Pizza mit Oliven.', exEn: 'Pizza with olives.' },
    { de: 'Pizza', art: 'die', gender: 'f', plural: 'Pizzen', pos: 'noun', en: 'pizza', hi: 'पिज़्ज़ा', ex: 'Ich möchte eine Pizza.', exEn: 'I would like a pizza.' },
    { de: 'Pommes frites', art: 'die', gender: 'f', plural: 'Pommes frites', pos: 'noun', en: 'chips, fries', hi: 'फ्रेंच फ्राइज़', ex: 'Pommes frites mit Ketchup.', exEn: 'Chips with ketchup.' },
    { de: 'Spaghetti', art: 'die', gender: 'f', plural: 'Spaghetti', pos: 'noun', en: 'spaghetti', hi: 'स्पैगेटी', ex: 'Ich esse gern Spaghetti.', exEn: 'I like eating spaghetti.' },
    { de: 'Spezialität', art: 'die', gender: 'f', plural: 'Spezialitäten', pos: 'noun', en: 'speciality', hi: 'विशेष व्यंजन', ex: 'Das ist eine Spezialität.', exEn: 'That is a speciality.' },
    { de: 'Zwiebel', art: 'die', gender: 'f', plural: 'Zwiebeln', pos: 'noun', en: 'onion', hi: 'प्याज़', ex: 'Die Suppe hat Zwiebeln.', exEn: 'The soup has onions.' },
    { de: 'satt', pos: 'adjective', en: 'full (not hungry)', hi: 'पेट भरा', ex: 'Ich bin satt, danke.', exEn: 'I am full, thank you.' },
    { de: 'schneiden', pos: 'verb', en: 'to cut', hi: 'काटना', ex: 'Ich schneide die Tomate.', exEn: 'I cut the tomato.', conj: { praesens: 'schneidet', praeteritum: 'schnitt', perfekt: 'hat geschnitten' } },
    { de: 'schälen', pos: 'verb', en: 'to peel', hi: 'छीलना', ex: 'Ich schäle den Apfel.', exEn: 'I peel the apple.', conj: { praesens: 'schält', praeteritum: 'schälte', perfekt: 'hat geschält' } },
    { de: 'zubereiten', pos: 'verb', en: 'to prepare (food)', hi: 'पकाना / तैयार करना', ex: 'Ich bereite das Essen zu.', exEn: 'I prepare the meal.', conj: { praesens: 'bereitet zu', praeteritum: 'bereitete zu', perfekt: 'hat zubereitet' } },
    // — System —
    { de: 'Vorliebe', art: 'die', gender: 'f', plural: 'Vorlieben', pos: 'noun', en: 'preference', hi: 'पसंद', ex: 'Meine Vorliebe ist Käse.', exEn: 'My preference is cheese.' }
  ],

  // ---------- essen & möchten (rule cards → accordion) ----------
  grammar: [
    {
      title: 'essen & trinken — the meal verbs',
      goldenRule: 'The food you eat is always an <b>object</b> — so masculine food becomes <b>einen</b>.',
      memoryTrick: '<b>essen</b> du/er mein <b>isst</b> ban jaata hai — wahi e→i change jo Chapter 18 mein aayega. Khana object hai, isliye <b>einen</b> Apfel.',
      body: [
        'Two verbs cover most of eating. <span class="de r-verb">trinken</span> (drink) is regular; <span class="de r-verb">essen</span> (eat) is irregular — it changes its stem vowel in the <b>du</b> and <b>er/sie/es</b> forms.'
      ],
      table: {
        head: ['', 'essen (irreg.)', 'trinken (reg.)'],
        rows: [
          ['ich', '<span class="de r-verb">esse</span>', '<span class="de r-verb">trinke</span>'],
          ['du', '<span class="de r-verb">isst</span>', '<span class="de r-verb">trinkst</span>'],
          ['er/sie/es', '<span class="de r-verb">isst</span>', '<span class="de r-verb">trinkt</span>'],
          ['wir / sie / Sie', '<span class="de r-verb">essen</span>', '<span class="de r-verb">trinken</span>'],
          ['ihr', '<span class="de r-verb">esst</span>', '<span class="de r-verb">trinkt</span>']
        ]
      },
      note: 'essen swaps e→i: ich esse but du/er <b>isst</b>. The food is a direct object → accusative (Chapter 12): "Ich esse <span class="r-akkusativ de">einen Apfel</span>."',
      hinglish: 'Do verb kaafi hain: <b>trinken</b> regular, <b>essen</b> irregular — du/er mein vowel e→i ho jaata hai: ich esse, par du/er <b>isst</b>. Khana direct object hai → Akkusativ (Chapter 12): Ich esse <b>einen Apfel</b>.'
    },
    {
      title: 'Ordering politely: ich möchte',
      goldenRule: '<b>Ich möchte</b> + item, and the item takes the accusative.',
      formula: [
        'Ich möchte  <b>einen</b> Kaffee.   (der → einen)',
        'Ich möchte  <b>eine</b>  Cola.     (unchanged)',
        'Ich möchte  <b>ein</b>   Wasser.   (unchanged)'
      ],
      memoryTrick: 'Café ka ek hi phrase kaafi hai: <b>Ich möchte …, bitte.</b> Sirf masculine par <b>einen</b> lagana yaad rahe.',
      body: [
        'The one phrase every café needs: <span class="de r-verb">ich möchte</span> (I would like). It is polite, easy, and always followed by the food/drink as an <span class="de r-akkusativ">object</span>.'
      ],
      table: {
        head: ['Order', 'Meaning'],
        rows: [
          ['<span class="de">Ich möchte einen Kaffee.</span>', 'I\'d like a coffee. (der→einen)'],
          ['<span class="de">Ich möchte eine Cola.</span>', 'I\'d like a cola. (eine, unchanged)'],
          ['<span class="de">Ich möchte ein Wasser.</span>', 'I\'d like a water. (ein, unchanged)'],
          ['<span class="de">Ich möchte Kuchen, bitte.</span>', 'I\'d like cake, please.']
        ]
      },
      note: 'Add <b>bitte</b> (please) to be polite, and answer an offer with <b>Ja, gerne!</b> (yes, please). Masculine food takes <b>einen</b> (einen Kaffee, einen Tee, einen Saft).',
      hinglish: 'Café mein sabse kaam aane wala phrase: <b>ich möchte</b> (mujhe chahiye — polite tarika). Aage khana object ke roop mein: Ich möchte <b>einen</b> Kaffee (masculine → einen), <b>eine</b> Cola, <b>ein</b> Wasser. <b>bitte</b> lagao polite ke liye, aur offer ka jawab <b>Ja, gerne!</b>'
    },
    {
      title: 'Likes & dislikes: mögen and gern',
      goldenRule: '<b>mögen</b> + cheez (I like the thing). <b>verb + gern</b> = I like <i>doing</i> it.',
      compare: {
        intro: 'Dono "pasand" hain, par kaam alag hai:',
        head: ['Pattern', 'What it says', 'Example'],
        rows: [
          ['<span class="de">mögen</span> + noun', 'you like the <b>thing</b>', '<span class="de">Ich mag Käse.</span>'],
          ['verb + <span class="de">gern</span>', 'you like the <b>activity</b>', '<span class="de">Ich trinke gern Tee.</span>']
        ]
      },
      memoryTrick: 'Cheez pasand → <b>mag</b>. Kaam pasand → verb + <b>gern</b>.',
      body: [
        'Two easy ways to say what you like. Use <span class="de r-verb">mögen</span> (to like) directly with a food, or add <span class="de r-adverb">gern</span> to a normal verb to mean you enjoy doing it.'
      ],
      table: {
        head: ['Pattern', 'Example', 'Meaning'],
        rows: [
          ['mögen + food', '<span class="de">Ich mag Käse.</span>', 'I like cheese.'],
          ['verb + gern', '<span class="de">Ich trinke gern Tee.</span>', 'I like drinking tea.'],
          ['negative', '<span class="de">Ich mag keinen Fisch.</span>', 'I don\'t like fish.'],
          ['don\'t eat', '<span class="de">Ich esse kein Fleisch.</span>', 'I don\'t eat meat.']
        ]
      },
      note: 'mögen is irregular: ich <b>mag</b>, du <b>magst</b>, er/sie <b>mag</b>. To say you dislike, negate the food with <b>kein</b> (Chapter 11): kein Fleisch, keinen Fisch.',
      hinglish: 'Pasand batane ke do tareeke: <b>mögen</b> seedha khane ke saath (Ich <b>mag</b> Käse — irregular: ich mag, du magst), ya normal verb + <b>gern</b> (Ich trinke <b>gern</b> Tee = chai peena pasand hai). Napasand? Khane ko <b>kein</b> se negate karo: kein Fleisch.'
    },
    {
      title: 'Hunger, Durst & schmecken',
      goldenRule: 'German <b>has</b> hunger, it is not hungry: <b>Ich habe Hunger.</b>',
      memoryTrick: 'Hindi "bhookh <b>lagi</b> hai" bhi hona nahi hai — German <b>haben</b> use karta hai. <i>Ich bin hungrig</i> galat nahi hai par natural nahi.',
      body: [
        'Germans say hunger and thirst with <span class="de r-verb">haben</span>, not sein. And to say something tastes good, use <span class="de r-verb">schmecken</span>.'
      ],
      table: {
        head: ['German', 'Literally', 'Meaning'],
        rows: [
          ['<span class="de">Ich habe Hunger.</span>', 'I have hunger', 'I am hungry.'],
          ['<span class="de">Ich habe Durst.</span>', 'I have thirst', 'I am thirsty.'],
          ['<span class="de">Das schmeckt gut.</span>', 'that tastes good', 'It\'s delicious.'],
          ['<span class="de">Ich bin satt.</span>', 'I am full', 'I\'ve had enough.']
        ]
      },
      note: 'So it is <b>Ich habe Hunger</b> (not "ich bin hungrig" — though that exists too), and <b>Ich habe Durst</b>. After eating: <b>Ich bin satt</b>.',
      hinglish: 'German mein bhookh aur pyaas <b>haben</b> se kehte hain: <b>Ich habe Hunger</b> (bhookh hai), <b>Ich habe Durst</b> (pyaas hai). Khana achha lage to <b>Das schmeckt gut</b>. Pet bhar jaaye to <b>Ich bin satt</b>.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      whatIsIt: 'Four habits. Two are the irregular verbs, and two come from translating an English or Hindi phrase word for word instead of using the German pattern.',
      body: [ 'Each row is a rule from this chapter, seen from the wrong side.' ],
      mistakes: [
        { wrong: 'Du esst Brot.', right: 'Du isst Brot.', why: 'essen is irregular: du/er isst (e→i), not "esst" (that is ihr).' },
        { wrong: 'Ich bin Hunger.', right: 'Ich habe Hunger.', why: 'Hunger and Durst use haben (to have), not sein.' },
        { wrong: 'Ich möchte ein Kaffee.', right: 'Ich möchte einen Kaffee.', why: 'Kaffee is masculine and the object → einen.' },
        { wrong: 'Ich mag kein Fisch.', right: 'Ich mag keinen Fisch.', why: 'Fisch is masculine and it is the object here, so kein takes the -en ending — exactly like ein → einen in Chapter 12.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>du isst</b> sahi hai kyunki vowel <b>e</b> se <b>i</b> ban jaata hai \u2014 <b>esst</b> to <b>ihr</b> ke liye hai. Bhookh aur pyaas <b>haben</b> se batate hain: <b>Ich habe Hunger</b>, na ki \u201cbin Hunger\u201d. Masculine khana order karte waqt <b>einen</b> aayega: <b>einen Kaffee</b>. Aur napasand batane ke liye <b>kein</b> lagta hai: <b>kein Fleisch</b>.'
    }
  ],

  // ---------- Reading passage (breakfast + café, clickable) ----------
  reading: {
    title: 'Frühstück und Café',
    titleEn: 'Breakfast and café',
    tokens: [
      { w: 'Zum', role: 'r-preposition', en: 'for the', hi: 'के लिए', pron: 'tsoom', type: 'Preposition + time', why: '"zum Frühstück" = for breakfast.', ex: 'zum Frühstück', exEn: 'for breakfast' },
      { w: 'Frühstück', role: 'r-time', en: 'breakfast', hi: 'नाश्ता', pron: 'FRÜ-shtük', type: 'Noun · meal', why: 'ü = round lips "ee"; das Frühstück.', ex: 'Das Frühstück ist um acht.', exEn: 'Breakfast is at eight.' },
      { w: 'esse', role: 'r-verb', en: 'eat', hi: 'खाता हूँ', pron: 'E-suh', type: 'Verb · essen (ich)', why: 'essen, ich-form. Takes an accusative object.', ex: 'Ich esse Brot.', exEn: 'I eat bread.', conj: { praesens: 'isst', praeteritum: 'aß', perfekt: 'hat gegessen' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Subject after the verb (time phrase opened the sentence).', ex: 'esse ich', exEn: 'I eat' },
      { w: 'ein', role: 'r-akkusativ', case: 'Akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut.', why: 'Brötchen is neuter → ein, unchanged.', ex: 'ein Brötchen', exEn: 'a bread roll' },
      { w: 'Brötchen', role: 'r-object', case: 'Akkusativ', en: 'bread roll', hi: 'बन', pron: 'BRÖT-khen', type: 'Noun · neut.', why: '-chen → always neuter (Chapter 10).', ex: 'Ich esse ein Brötchen.', exEn: 'I eat a bread roll.' },
      { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition', why: 'mit = with.', ex: 'mit Käse', exEn: 'with cheese' },
      { w: 'Käse', role: 'r-object', en: 'cheese', hi: 'पनीर', pron: 'KAY-zuh', type: 'Noun · masc.', why: 'der Käse; ä = "e" in bed, s = "z".', ex: 'Brot mit Käse.', exEn: 'Bread with cheese.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Subject.', ex: 'Ich trinke Tee.', exEn: 'I drink tea.' },
      { w: 'trinke', role: 'r-verb', en: 'drink', hi: 'पीता हूँ', pron: 'TRIN-kuh', type: 'Verb · trinken (ich)', why: 'trinken, ich-form (regular).', ex: 'Ich trinke Wasser.', exEn: 'I drink water.', advanced: { synonyms: [], opposites: [] } },
      { w: 'gern', role: 'r-adverb', en: 'gladly (like to)', hi: 'पसंद से', pron: 'gairn', type: 'Adverb', why: 'verb + gern = like doing it.', ex: 'Ich trinke gern Tee.', exEn: 'I like drinking tea.' },
      { w: 'Tee', role: 'r-object', en: 'tea', hi: 'चाय', pron: 'tay', type: 'Noun · masc.', why: 'der Tee; long "ay".', ex: 'Ich trinke gern Tee.', exEn: 'I like drinking tea.' },
      { w: '.', plain: true },
      { w: 'Im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place', why: '"im Café" = in the café.', ex: 'im Café', exEn: 'in the café' },
      { w: 'Café', role: 'r-place', en: 'café', hi: 'कैफ़े', pron: 'ka-FAY', type: 'Noun · place', why: 'das Café; stress on the second syllable.', ex: 'Im Café trinke ich Kaffee.', exEn: 'In the café I drink coffee.' },
      { w: 'möchte', role: 'r-verb', en: 'would like', hi: 'चाहूँगा', pron: 'MÖKH-tuh', type: 'Verb · polite', why: 'ich möchte — the polite order form.', ex: 'Ich möchte einen Kaffee.', exEn: 'I would like a coffee.', advanced: { synonyms: ['hätte gern'], opposites: [] } },
      { w: 'ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Subject after the verb.', ex: 'möchte ich', exEn: 'I would like' },
      { w: 'einen', role: 'r-akkusativ', case: 'Akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.', why: 'Kaffee is masculine and the object → ein becomes einen (Chapter 12).', ex: 'einen Kaffee', exEn: 'a coffee' },
      { w: 'Kaffee', role: 'r-object', case: 'Akkusativ', en: 'coffee', hi: 'कॉफ़ी', pron: 'KA-fay', type: 'Noun · masc.', why: 'der Kaffee → einen Kaffee in the accusative.', ex: 'Ich möchte einen Kaffee.', exEn: 'I would like a coffee.' },
      { w: 'und', role: 'r-preposition', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'final d → "t".', ex: 'Kaffee und Kuchen', exEn: 'coffee and cake' },
      { w: 'Kuchen', role: 'r-object', en: 'cake', hi: 'केक', pron: 'KOO-khen', type: 'Noun · masc.', why: 'der Kuchen; ch = throaty "kh".', ex: 'Der Kuchen ist lecker.', exEn: 'The cake is tasty.' },
      { w: '.', plain: true },
      { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun', why: 'das = that, as a subject here.', ex: 'Das schmeckt gut.', exEn: 'That tastes good.' },
      { w: 'schmeckt', role: 'r-verb', en: 'tastes', hi: 'स्वाद अच्छा है', pron: 'SHMEKT', type: 'Verb', why: 'schmecken = to taste good. sch = "sh".', ex: 'Das schmeckt gut!', exEn: 'That tastes good!', conj: { praesens: 'schmeckt', praeteritum: 'schmeckte', perfekt: 'hat geschmeckt' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'lecker', role: 'r-adjective', en: 'tasty', hi: 'स्वादिष्ट', pron: 'LE-ker', type: 'Adjective', why: 'After the verb; plain form.', ex: 'Das ist lecker!', exEn: 'That is tasty!', advanced: { synonyms: ['köstlich'], opposites: [] } },
      { w: '!', plain: true }
    ],
    translation: 'For breakfast I eat a bread roll with cheese. I like drinking tea. In the café I would like a coffee and cake. That tastes tasty!'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair — never invented.
    dialogue: [
      { id: 'A1_014_L001', speaker: 'Simon', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Was möchtest du, Hanna?', en: 'What would you like, Hanna?' },
      { id: 'A1_014_L002', speaker: 'Hanna', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich möchte einen Kaffee und ein Brötchen mit Käse. Ich esse kein Fleisch. Und du?', en: 'I would like a coffee and a roll with cheese. I don\'t eat meat. And you?' },
      { id: 'A1_014_L003', speaker: 'Simon', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich nehme einen Orangensaft und einen Salat. Das schmeckt super!', en: 'I\'ll have an orange juice and a salad. That tastes great!' }
    ],
    transcript: 'Was möchtest du, Hanna? Ich möchte einen Kaffee und ein Brötchen mit Käse. Ich esse kein Fleisch. Und du? Ich nehme einen Orangensaft und einen Salat. Das schmeckt super!',
    translation: 'What would you like, Hanna? I would like a coffee and a roll with cheese. I don\'t eat meat. And you? I\'ll have an orange juice and a salad. That tastes great!',
    tokens: [
      { w: 'Was' },
      { w: 'möchtest' },
      { w: 'du' },
      { w: ',', plain: true },
      { w: 'Hanna' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'möchte' },
      { w: 'einen' },
      { w: 'Kaffee' },
      { w: 'und' },
      { w: 'ein' },
      { w: 'Brötchen' },
      { w: 'mit' },
      { w: 'Käse' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'esse' },
      { w: 'kein' },
      { w: 'Fleisch' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'du' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'nehme' },
      { w: 'einen' },
      { w: 'Orangensaft' },
      { w: 'und' },
      { w: 'einen' },
      { w: 'Salat' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'schmeckt' },
      { w: 'super' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was isst Hanna NICHT?', qEn: 'What does Hanna NOT eat?', options: ['Käse', 'Fleisch', 'Brötchen', 'Kaffee'], optionsEn: ['cheese', 'meat', 'rolls', 'coffee'], answer: 1,
        explain: '"Ich esse kein Fleisch" — no meat.' },
      { q: 'Was bestellt Simon?', qEn: 'What does Simon order?', options: ['Kaffee und Kuchen', 'Tee und Brot', 'Orangensaft und Salat', 'Cola und Pizza'], optionsEn: ['coffee and cake', 'tea and bread', 'orange juice and salad', 'cola and pizza'], answer: 2,
        explain: '"… einen Orangensaft und einen Salat."' }
    ]
  },

  // ---------- Speaking prompts ----------
  speaking: [
    { task: "Im Café fragt dein Freund: Was möchtest du?", taskEn: "In the café your friend asks: what would you like?", de: "Ich möchte einen Kaffee und ein Brötchen mit Käse.", en: "I'd like a coffee and a roll with cheese." },
    { task: "Deine Gastmutter fragt: Was isst du zum Frühstück?", taskEn: "Your host mother asks: what do you eat for breakfast?", de: "Ich esse Brot mit Ei und ich trinke Tee.", en: "I eat bread with egg and I drink tea." },
    { task: "Dein Freund kocht heute. Sag, was du nicht isst.", taskEn: "Your friend is cooking today. Say what you don't eat.", de: "Ich esse kein Fleisch, aber ich mag Gemüse und Salat.", en: "I don't eat meat, but I like vegetables and salad." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about food and drink: what you eat for breakfast, what you like (mögen / gern), what you don\'t eat (kein), and a café order with "Ich möchte …". Use the right accusative article on each food.',
    starters: ['Zum Frühstück esse ich …', 'Ich mag …', 'Ich möchte … bitte.'],
    placeholder: 'Zum Frühstück esse ich ein Brötchen …',
    minWords: 16
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Du ___ Brot." (essen)',
      options: ['esse', 'esst', 'isst', 'essen'],
      answer: 2,
      explain: 'essen is irregular: du isst (e→i).'
    },
    gap: {
      // Ordering with accusative.
      sentence: ['Ich möchte ', ' Kaffee und ', ' Cola.'],
      gaps: [ { answer: 'einen', accepts: ['einen'] }, { answer: 'eine', accepts: ['eine'] } ],
      explain: 'Kaffee (m) → einen; Cola (f) → eine (unchanged).'
    },
    match: {
      q: 'Match each food to its article.',
      pairs: [
        { noun: 'Apfel', art: 'der' },
        { noun: 'Banane', art: 'die' },
        { noun: 'Brot', art: 'das' },
        { noun: 'Kaffee', art: 'der' }
      ]
    },
    builder: {
      target: 'Build: "I would like a coffee."',
      bank: ['möchte', 'Ich', 'Kaffee', 'einen'],
      answer: ['Ich', 'möchte', 'einen', 'Kaffee'],
      roles: { 'Ich': 'r-subject', 'möchte': 'r-verb', 'einen': 'r-akkusativ', 'Kaffee': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which is the polite way to order?', options: ['Ich esse Kaffee.', 'Ich will Kaffee!', 'Ich möchte einen Kaffee, bitte.', 'Gib Kaffee.'], answer: 2,
      explain: '"Ich möchte … bitte" is the polite order form.' },
    { q: 'Complete: "Ich ___ kein Fleisch."', options: ['bin', 'esse', 'isst', 'möchte'], answer: 1,
      explain: 'ich esse — and kein negates the noun Fleisch.' },
    { q: 'How do you say "I am hungry"?', options: ['Ich bin Hunger.', 'Ich habe Hunger.', 'Ich esse Hunger.', 'Ich möchte Hunger.'], answer: 1,
      explain: 'Hunger uses haben: "Ich habe Hunger."' },
    { q: 'Which article? "Ich möchte ___ Kaffee."', options: ['ein', 'eine', 'einen', 'der'], answer: 2,
      explain: 'Kaffee is masculine and the object → einen.' },
    { q: '"Das schmeckt gut" means…', options: ['I am full', 'that tastes good', 'I am hungry', 'I would like that'], answer: 1,
      explain: 'schmecken = to taste (good).' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'Meal verbs: <span class="de">ich esse / du isst</span> (irregular), <span class="de">ich trinke</span>. Order with <span class="de">Ich möchte …</span>' },
    { c: 'r-akkusativ', html: 'Food is the object → accusative: <span class="de">einen Kaffee</span> (m), <span class="de">eine Cola</span> (f), <span class="de">ein Wasser</span> (n).' },
    { c: 'r-adjective', html: 'Likes: <span class="de">Ich mag Käse</span>, <span class="de">Ich trinke gern Tee</span>. Hunger/thirst use <span class="de">haben</span>; dislikes use <span class="de">kein</span>.' }
  ],
  revisionTips: [
    'Order a drink out loud every day: "Ich möchte einen … , bitte." — swap the noun.',
    'Learn each food with its article (der/die/das) so the café order comes out right.',
    'Remember the irregular du/er form: du isst, er isst (e→i).'
  ]
};

window.CHAPTER = CHAPTER;
