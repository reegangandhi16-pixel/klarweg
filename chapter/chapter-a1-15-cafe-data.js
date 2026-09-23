/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 2 · Chapter 15
   "Im Café"  (Ordering, paying & café conversations)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-15 word list (67 words).
   Recycles Chapters 1–14 throughout.
============================================================ */
const CHAPTER = {
  id: 'a1-15-cafe',
  phase: 'A1 · Phase 2',
  number: 15,
  title: 'Im Café',
  titleEn: 'At the Café',
  description: 'Sit down, order, and pay — the whole café from start to finish. Learn the polite ordering phrases ich möchte and ich hätte gern, ask können Sie …? for service, handle prices in Euro and Cent, and ask for die Rechnung like a local.',
  xp: 160,
  time: 30,
  difficulty: 'Beginner',
  nextChapter: { number: 16, title: 'Hobbies & Freizeit', titleEn: 'Hobbies & Free Time' , href: 'chapter-a1-16-hobbies.html' },

  prevChapter: { number: 14, title: 'Essen & Trinken', titleEn: 'Food & Drink', href: 'chapter-a1-14-essen.html' },
  heroAnimationPath: null,

  // ---------- Story Dialogue (signature section — before vocab/grammar) ----------
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'After class, Ida drops into a café in Kreuzberg. Der Kellner takes her order, the prices come up, and she settles the bill — every café phrase you need, in one real scene.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'A real two-person café order, start to finish'
    ],
    scene: 'Im Café — Kreuzberg, Berlin',
    femaleSpeakers: ['Ida'],
    dialogue: [
      { speaker: 'Kellner', tokens: [
        { w: 'Guten', role: 'r-adverb', en: 'good', hi: 'अच्छा', pron: 'GOO-ten', type: 'Greeting' },
        { w: 'Tag', role: 'r-object', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Greeting', why: 'Guten Tag — hello (Chapter 4).', ex: 'Guten Tag!', exEn: 'Hello!' },
        { w: '!', plain: true },
        { w: 'Hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'die', role: 'r-article', en: 'the (fem.)', hi: 'वह', pron: 'dee', type: 'Article' },
        { w: 'Speisekarte', role: 'r-object', en: 'menu', hi: 'मेन्यू', pron: 'SHPY-zuh-kar-tuh', type: 'Noun · fem.', why: 'die Speisekarte (this chapter).', ex: 'Die Speisekarte, bitte.', exEn: 'The menu, please.' },
        { w: '.', plain: true }
      ], en: 'Hello! Here is the menu.', hi: 'Namaste! Yeh rahi menu.' },
      { speaker: 'Ida', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'kostet', role: 'r-verb', en: 'costs', hi: 'कीमत है', pron: 'KOS-tet', type: 'Verb · kosten', why: '"Was kostet …?" = how much is …? (this chapter).', ex: 'Was kostet das?', exEn: 'What does that cost?' },
        { w: 'das', role: 'r-subject', en: 'the', hi: 'वह', pron: 'das', type: 'Article' },
        { w: 'Schnitzel', role: 'r-object', en: 'schnitzel', hi: 'श्निट्ज़ल', pron: 'SHNIT-sel', type: 'Noun · neut.', why: 'das Schnitzel (this chapter).', ex: 'Das Schnitzel ist lecker.', exEn: 'The schnitzel is tasty.' },
        { w: '?', plain: true }
      ], en: 'Thanks! What does the schnitzel cost?', hi: 'Dhanyavaad! Schnitzel kitne ka hai?' },
      { speaker: 'Kellner', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'वह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'kostet', role: 'r-verb', en: 'costs', hi: 'कीमत है', pron: 'KOS-tet', type: 'Verb · kosten' },
        { w: 'neun', role: 'r-object', en: 'nine', hi: 'नौ', pron: 'noyn', type: 'Number' },
        { w: 'Euro', role: 'r-object', en: 'euros', hi: 'यूरो', pron: 'OY-ro', type: 'Noun · currency', why: 'der Euro — money stays singular after numbers (this chapter).', ex: 'neun Euro', exEn: 'nine euros' },
        { w: '.', plain: true }
      ], en: 'That costs nine euros.', hi: 'Iski keemat nau Euro hai.' },
      { speaker: 'Ida', side: 'right', tokens: [
        { w: 'Hmm', role: 'r-adverb', en: 'hmm', hi: 'हम्म', pron: 'hm', type: 'Filler' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
        { w: 'nehme', role: 'r-verb', en: 'will have', hi: 'लूँगी', pron: 'NAY-muh', type: 'Verb · nehmen (ich)', why: 'nehmen — "I\u2019ll have" when ordering (this chapter).', ex: 'Ich nehme eine Suppe.', exEn: 'I\u2019ll have a soup.' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Tomatensuppe', role: 'r-object', en: 'tomato soup', hi: 'टमाटर सूप', pron: 'to-MAH-ten-zu-puh', type: 'Noun · fem.', why: 'die Tomatensuppe (this chapter).', ex: 'Die Tomatensuppe ist heiß.', exEn: 'The tomato soup is hot.' },
        { w: '.', plain: true },
        { w: 'Die', role: 'r-subject', en: 'that', hi: 'वह', pron: 'dee', type: 'Pronoun · fem.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतनी', pron: 'zo', type: 'Adverb' },
        { w: 'teuer', role: 'r-adjective', en: 'expensive', hi: 'महँगी', pron: 'TOY-er', type: 'Adjective', why: 'sein + adjective (Chapter 13).', ex: 'Das ist teuer.', exEn: 'That is expensive.' },
        { w: '.', plain: true }
      ], en: 'Hmm. I\u2019ll have a tomato soup. That is not so expensive.', hi: 'Hmm. Main ek Tomatensuppe lungi. Yeh itni mehngi nahi hai.' },
      { speaker: 'Kellner', tokens: [
        { w: 'Gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Glas', role: 'r-object', en: 'glass', hi: 'गिलास', pron: 'glahs', type: 'Noun · neut.', why: 'das Glas (this chapter).', ex: 'ein Glas Wasser', exEn: 'a glass of water' },
        { w: 'Wasser', role: 'r-object', en: 'water', hi: 'पानी', pron: 'VA-ser', type: 'Noun · neut.' },
        { w: '?', plain: true }
      ], en: 'Gladly! And a glass of water?', hi: 'Khushi se! Aur ek glass paani?' },
      { speaker: 'Ida', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Politeness' },
        { w: '.', plain: true }
      ], en: 'Yes, please.', hi: 'Haan, kripya.' },
      { speaker: 'Kellner', tokens: [
        { w: 'Natürlich', role: 'r-adverb', en: 'of course', hi: 'बिल्कुल', pron: 'na-TÜR-likh', type: 'Reaction', why: 'natürlich = of course (this chapter).', ex: 'Natürlich!', exEn: 'Of course!' },
        { w: '.', plain: true },
        { w: 'Guten', role: 'r-adverb', en: 'good', hi: 'अच्छा', pron: 'GOO-ten', type: 'Phrase' },
        { w: 'Appetit', role: 'r-object', en: 'appetite (enjoy!)', hi: 'भोजन का आनंद लें', pron: 'a-pe-TEET', type: 'Phrase', why: '"Guten Appetit!" = enjoy your meal (this chapter).', ex: 'Guten Appetit!', exEn: 'Enjoy your meal!' },
        { w: '!', plain: true }
      ], en: 'Of course. Enjoy your meal!', hi: 'Bilkul. Bhojan ka aanand lein!' },
      { speaker: 'Ida', side: 'right', tokens: [
        { w: 'Oh', role: 'r-subject', en: 'oh', hi: 'ओह', pron: 'oh', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Die', role: 'r-article', en: 'the (fem.)', hi: 'वह', pron: 'dee', type: 'Article' },
        { w: 'Suppe', role: 'r-subject', en: 'soup', hi: 'सूप', pron: 'ZU-puh', type: 'Noun · fem.', why: 'die Suppe (this chapter).', ex: 'Die Suppe ist heiß.', exEn: 'The soup is hot.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'warm', role: 'r-adjective', en: 'warm', hi: 'गरम', pron: 'varm', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Oh! The soup is very warm.', hi: 'Oh! Soup bahut garam hai.' },
      { speaker: 'Kellner', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'sie', role: 'r-subject', en: 'it', hi: 'यह', pron: 'zee', type: 'Pronoun · fem.' },
        { w: 'kommt', role: 'r-verb', en: 'comes', hi: 'आता है', pron: 'komt', type: 'Verb · kommen' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'owss', type: 'Preposition' },
        { w: 'Café', role: 'r-place', en: 'café (kitchen side)', hi: 'कैफ़े', pron: 'ka-FAY', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Yes, it just came from the caf\u00e9 kitchen.', hi: 'Haan, yeh abhi cafe se aaya hai.' },
      { speaker: 'Ida', side: 'right', tokens: [
        { w: 'Danke', role: 'r-adverb', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Politeness' },
        { w: '!', plain: true },
        { w: 'Die', role: 'r-article', en: 'the (fem.)', hi: 'वह', pron: 'dee', type: 'Article' },
        { w: 'Suppe', role: 'r-subject', en: 'soup', hi: 'सूप', pron: 'ZU-puh', type: 'Noun · fem.', why: 'die Suppe (this chapter).', ex: 'Die Suppe ist heiß.', exEn: 'The soup is hot.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'lecker', role: 'r-adjective', en: 'tasty', hi: 'स्वादिष्ट', pron: 'LE-ker', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Die', role: 'r-article', en: 'the (fem.)', hi: 'वह', pron: 'dee', type: 'Article' },
        { w: 'Rechnung', role: 'r-object', en: 'bill', hi: 'बिल', pron: 'REKH-nung', type: 'Noun · fem.', why: '"Die Rechnung, bitte!" = the bill, please (this chapter).', ex: 'Die Rechnung, bitte!', exEn: 'The bill, please!' },
        { w: ',', plain: true },
        { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Politeness' },
        { w: '!', plain: true }
      ], en: 'Thanks! The soup is very tasty! The bill, please!', hi: 'Dhanyavaad! Soup bahut swaadisht hai! Bill, kripya!' },
      { speaker: 'Kellner', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun' },
        { w: 'macht', role: 'r-verb', en: 'comes to', hi: 'होता है', pron: 'makht', type: 'Verb · machen', why: '"Das macht …" = that comes to … (this chapter).', ex: 'Das macht acht Euro.', exEn: 'That comes to eight euros.' },
        { w: 'acht', role: 'r-object', en: 'eight', hi: 'आठ', pron: 'akht', type: 'Number' },
        { w: 'Euro', role: 'r-object', en: 'euros', hi: 'यूरो', pron: 'OY-ro', type: 'Noun · currency' },
        { w: '.', plain: true }
      ], en: 'That comes to eight euros.', hi: 'Aath Euro hue.' },
      { speaker: 'Ida', side: 'right', tokens: [
        { w: 'Hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'zehn', role: 'r-object', en: 'ten', hi: 'दस', pron: 'tsayn', type: 'Number' },
        { w: 'Euro', role: 'r-object', en: 'euros', hi: 'यूरो', pron: 'OY-ro', type: 'Noun · currency' },
        { w: '.', plain: true },
        { w: 'Stimmt', role: 'r-verb', en: 'is right (keep)', hi: 'ठीक है', pron: 'shtimt', type: 'Verb · stimmen', why: '"Stimmt so!" = keep the change (this chapter).', ex: 'Stimmt so!', exEn: 'Keep the change!' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'ऐसे ही', pron: 'zoh', type: 'Adverb' },
        { w: '!', plain: true }
      ], en: 'Here is ten euros. Keep the change!', hi: 'Yeh rahe das Euro. Baaki rakh lijiye!' },
      { speaker: 'Kellner', tokens: [
        { w: 'Danke', role: 'r-adjective', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Phrase' },
        { w: 'schön', role: 'r-adjective', en: 'kindly', hi: 'बहुत', pron: 'shern', type: 'Adjective', why: '"Danke schön!" = thank you kindly (Chapter 4).', ex: 'Danke schön!', exEn: 'Thank you!' },
        { w: '!', plain: true },
        { w: 'Auf', role: 'r-subject', en: 'goodbye (part)', hi: 'अलविदा', pron: 'owf', type: 'Greeting (part)' },
        { w: 'Wiedersehen', role: 'r-subject', en: 'goodbye', hi: 'फिर मिलेंगे', pron: 'VEE-der-zay-en', type: 'Greeting' },
        { w: '!', plain: true }
      ], en: 'Thank you! Goodbye!', hi: 'Bahut dhanyavaad! Alvida!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A café runs on three moves: <b>order</b> with <span class="de r-verb">Ich möchte …</span> or <span class="de">Ich hätte gern …</span>, <b>ask</b> with <span class="de r-modalverb">Können Sie …?</span>, and <b>pay</b> with <span class="de">Die Rechnung, bitte.</span> The food is always the <span class="de r-akkusativ">object</span> (Chapter 12).'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is THE CAFÉ: ordering food/drink, polite requests, prices, and paying. ' +
    'The learner wrote café sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Polite ordering uses "ich möchte" or "ich hätte gern" + a noun object: "Ich möchte einen Kaffee." / "Ich hätte gern eine Cola."\n' +
    '- "Können Sie mir bitte … bringen/geben?" is the polite request form (Sie + infinitive at the end).\n' +
    '- nehmen is irregular: ich nehme, du nimmst, er/sie nimmt. "Ich nehme einen Salat."\n' +
    '- The ordered item is a direct object → accusative: masculine der→einen (einen Kaffee), feminine eine (eine Suppe), neuter ein (ein Wasser).\n' +
    '- Prices: "Was kostet das?" / "Das macht 9 Euro 50." Money word Euro/Cent stays singular after numbers: "zwei Euro", not "zwei Euros".\n' +
    '- Paying: "Die Rechnung, bitte." · "Zusammen oder getrennt?" · "Stimmt so" = keep the change.\n' +
    '- All nouns are capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Order check:</b> one sentence on möchte/hätte gern and the accusative article on the item.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you can order, ask, and pay in a real café. Move on to <span class="de">Hobbies & Freizeit</span>.',
    mid: 'Good. Re-read the ordering and paying cards once, then continue.',
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
      objective: 'Sit in the café with Ida and Ida — order, ask, and pay in one real conversation first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn café words: drinks and dishes, service words, polite request words, and everything about paying.' },
    { id: 'grammar',    label: 'Ordering & Paying', tag: 'core',
      objective: 'Master ich möchte / ich hätte gern, Können Sie …?, prices, and asking for the bill.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a full café order and tap any word to hear it and see what it means.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch the order, the price, and how they pay, then answer what happened.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Order politely, ask for the menu and the bill, and run a short café roleplay.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five polite café sentences and a short café order or message.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill café vocabulary, ordering phrases, and the accusative with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All café words with articles, translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Ordering drills, price practice, café roleplays, and self-study activities.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'ich möchte / hätte gern, Können Sie …?, prices, paying, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich möchte …', text: 'Order food and drink politely' },
    { de: 'Ich hätte gern …', text: 'Use the extra-polite ordering phrase' },
    { de: 'Können Sie …?', text: 'Ask for the menu, water, or the bill' },
    { de: 'Was kostet das?', text: 'Ask for prices and understand Euro / Cent' },
    { de: 'Die Rechnung, bitte', text: 'Ask for and settle the bill' }
  ],

  // ---------- Vocabulary (67 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'bestellen', pos: 'verb', en: 'to order', hi: 'ऑर्डर करना', ex: 'Ich bestelle einen Kaffee.', exEn: 'I order a coffee.', conj: { praesens: 'bestellt', praeteritum: 'bestellte', perfekt: 'hat bestellt' } },
    { de: 'bezahlen', pos: 'verb', en: 'to pay', hi: 'भुगतान करना', ex: 'Ich bezahle die Rechnung.', exEn: 'I pay the bill.', conj: { praesens: 'bezahlt', praeteritum: 'bezahlte', perfekt: 'hat bezahlt' } },
    { de: 'Café', art: 'das', gender: 'n', plural: 'Cafés', pos: 'noun', en: 'café', hi: 'कैफ़े', ex: 'Wir gehen ins Café.', exEn: 'We go to the café.' },
    { de: 'Essen', art: 'das', gender: 'n', plural: 'Essen', pos: 'noun', en: 'meal, food', hi: 'खाना', ex: 'Das Essen ist lecker.', exEn: 'The food is tasty.' },
    { de: 'Restaurant', art: 'das', gender: 'n', plural: 'Restaurants', pos: 'noun', en: 'restaurant', hi: 'रेस्टोरेंट', ex: 'Das Restaurant ist neu.', exEn: 'The restaurant is new.' },
    { de: 'Euro', art: 'der', gender: 'm', plural: 'Euro', pos: 'noun', en: 'euro', hi: 'यूरो', ex: 'Das kostet drei Euro.', exEn: 'That costs three euros.' },
    { de: 'Preis', art: 'der', gender: 'm', plural: 'Preise', pos: 'noun', en: 'price', hi: 'कीमत', ex: 'Der Preis ist gut.', exEn: 'The price is good.' },
    { de: 'Rechnung', art: 'die', gender: 'f', plural: 'Rechnungen', pos: 'noun', en: 'bill, check', hi: 'बिल', ex: 'Die Rechnung, bitte!', exEn: 'The bill, please!' },
    { de: 'Speisekarte', art: 'die', gender: 'f', plural: 'Speisekarten', pos: 'noun', en: 'menu', hi: 'मेन्यू', ex: 'Die Speisekarte, bitte.', exEn: 'The menu, please.' },
    { de: 'kaufen', pos: 'verb', en: 'to buy', hi: 'खरीदना', ex: 'Ich kaufe einen Kaffee.', exEn: 'I buy a coffee.', conj: { praesens: 'kauft', praeteritum: 'kaufte', perfekt: 'hat gekauft' } },
    { de: 'kosten', pos: 'verb', en: 'to cost', hi: 'कीमत होना', ex: 'Was kostet das?', exEn: 'What does that cost?', conj: { praesens: 'kostet', praeteritum: 'kostete', perfekt: 'hat gekostet' } },
    { de: 'nehmen', pos: 'verb', en: 'to take, to have', hi: 'लेना', ex: 'Ich nehme einen Salat.', exEn: 'I\'ll have a salad.', conj: { praesens: 'nimmt', praeteritum: 'nahm', perfekt: 'hat genommen' } },
    { de: 'zahlen', pos: 'verb', en: 'to pay', hi: 'पैसे देना', ex: 'Zahlen, bitte!', exEn: 'The bill, please!', conj: { praesens: 'zahlt', praeteritum: 'zahlte', perfekt: 'hat gezahlt' } },
    // ===== Active Support =====
    { de: 'bringen', pos: 'verb', en: 'to bring', hi: 'लाना', ex: 'Bringen Sie mir Wasser.', exEn: 'Bring me water.', conj: { praesens: 'bringt', praeteritum: 'brachte', perfekt: 'hat gebracht' } },
    { de: 'Gericht', art: 'das', gender: 'n', plural: 'Gerichte', pos: 'noun', en: 'dish, meal', hi: 'व्यंजन', ex: 'Das Gericht ist warm.', exEn: 'The dish is warm.' },
    { de: 'Glas', art: 'das', gender: 'n', plural: 'Gläser', pos: 'noun', en: 'glass', hi: 'गिलास', ex: 'Ein Glas Wasser, bitte.', exEn: 'A glass of water, please.' },
    { de: 'Messer', art: 'das', gender: 'n', plural: 'Messer', pos: 'noun', en: 'knife', hi: 'चाकू', ex: 'Das Messer ist scharf.', exEn: 'The knife is sharp.' },
    { de: 'Stück', art: 'das', gender: 'n', plural: 'Stücke', pos: 'noun', en: 'piece', hi: 'टुकड़ा', ex: 'Ein Stück Kuchen, bitte.', exEn: 'A piece of cake, please.' },
    { de: 'Trinkgeld', art: 'das', gender: 'n', plural: 'Trinkgelder', pos: 'noun', en: 'tip', hi: 'टिप', ex: 'Das Trinkgeld ist für den Kellner.', exEn: 'The tip is for the waiter.' },
    { de: 'Cent', art: 'der', gender: 'm', plural: 'Cent', pos: 'noun', en: 'cent', hi: 'सेंट', ex: 'Das kostet fünfzig Cent.', exEn: 'That costs fifty cents.' },
    { de: 'Kellner', art: 'der', gender: 'm', plural: 'Kellner', pos: 'noun', en: 'waiter', hi: 'वेटर', ex: 'Der Kellner bringt den Kaffee.', exEn: 'The waiter brings the coffee.' },
    { de: 'Löffel', art: 'der', gender: 'm', plural: 'Löffel', pos: 'noun', en: 'spoon', hi: 'चम्मच', ex: 'Der Löffel ist klein.', exEn: 'The spoon is small.' },
    { de: 'Teller', art: 'der', gender: 'm', plural: 'Teller', pos: 'noun', en: 'plate', hi: 'प्लेट', ex: 'Der Teller ist leer.', exEn: 'The plate is empty.' },
    { de: 'Bestellung', art: 'die', gender: 'f', plural: 'Bestellungen', pos: 'noun', en: 'order', hi: 'ऑर्डर', ex: 'Die Bestellung kommt gleich.', exEn: 'The order is coming soon.' },
    { de: 'Gabel', art: 'die', gender: 'f', plural: 'Gabeln', pos: 'noun', en: 'fork', hi: 'काँटा', ex: 'Die Gabel ist auf dem Teller.', exEn: 'The fork is on the plate.' },
    { de: 'Kellnerin', art: 'die', gender: 'f', plural: 'Kellnerinnen', pos: 'noun', en: 'waitress', hi: 'वेट्रेस', ex: 'Die Kellnerin ist nett.', exEn: 'The waitress is nice.' },
    { de: 'Serviette', art: 'die', gender: 'f', plural: 'Servietten', pos: 'noun', en: 'napkin', hi: 'नैपकिन', ex: 'Eine Serviette, bitte.', exEn: 'A napkin, please.' },
    { de: 'Tasse', art: 'die', gender: 'f', plural: 'Tassen', pos: 'noun', en: 'cup', hi: 'कप', ex: 'Eine Tasse Kaffee, bitte.', exEn: 'A cup of coffee, please.' },
    { de: 'etwas', pos: 'pronoun', en: 'something, anything', hi: 'कुछ', ex: 'Möchten Sie etwas trinken?', exEn: 'Would you like something to drink?' },
    { de: 'getrennt', pos: 'adjective', en: 'separate(ly)', hi: 'अलग-अलग', ex: 'Zusammen oder getrennt?', exEn: 'Together or separately?' },
    { de: 'gleichfalls', pos: 'adverb', en: 'likewise, you too', hi: 'आपको भी', ex: 'Danke, gleichfalls!', exEn: 'Thanks, likewise!' },
    { de: 'guten Appetit', pos: 'phrase', en: 'enjoy your meal!', hi: 'भोजन का आनंद लें', ex: 'Guten Appetit!', exEn: 'Enjoy your meal!' },
    { de: 'natürlich', pos: 'adverb', en: 'of course, naturally', hi: 'बिल्कुल', ex: 'Natürlich, gern!', exEn: 'Of course, gladly!' },
    { de: 'sonst', pos: 'adverb', en: 'otherwise, anything else', hi: 'और कुछ', ex: 'Sonst noch etwas?', exEn: 'Anything else?' },
    { de: 'stimmen', pos: 'verb', en: 'to be right; (Stimmt so) keep the change', hi: 'सही होना; बाकी रखो', ex: 'Stimmt so!', exEn: 'Keep the change!', conj: { praesens: 'stimmt', praeteritum: 'stimmte', perfekt: 'hat gestimmt' } },
    { de: 'wechseln', pos: 'verb', en: 'to change (money)', hi: 'बदलना', ex: 'Können Sie wechseln?', exEn: 'Can you give change?', conj: { praesens: 'wechselt', praeteritum: 'wechselte', perfekt: 'hat gewechselt' } },
    { de: 'zusammen', pos: 'adverb', en: 'together', hi: 'साथ में', ex: 'Zusammen, bitte.', exEn: 'Together, please.' },
    // ===== Passive =====
    { de: '& Co', pos: 'phrase', en: 'and company', hi: 'और कंपनी', ex: 'Café Schmidt & Co', exEn: 'Café Schmidt & Co.' },
    { de: 'Beisl', art: 'das', gender: 'n', plural: 'Beisln', pos: 'noun', en: 'pub (Austrian)', hi: 'पब (ऑस्ट्रिया)', ex: 'Das Beisl ist in Wien.', exEn: 'The pub is in Vienna.' },
    { de: 'Eis', art: 'das', gender: 'n', plural: 'Eis', pos: 'noun', en: 'ice cream', hi: 'आइसक्रीम', ex: 'Ein Eis im Sommer.', exEn: 'An ice cream in summer.' },
    { de: 'Kaffeehaus', art: 'das', gender: 'n', plural: 'Kaffeehäuser', pos: 'noun', en: 'coffee house', hi: 'कॉफ़ी हाउस', ex: 'Das Kaffeehaus ist alt.', exEn: 'The coffee house is old.' },
    { de: 'Lokal', art: 'das', gender: 'n', plural: 'Lokale', pos: 'noun', en: 'restaurant, bar', hi: 'रेस्टोरेंट', ex: 'Das Lokal ist voll.', exEn: 'The restaurant is full.' },
    { de: 'Schnitzel', art: 'das', gender: 'n', plural: 'Schnitzel', pos: 'noun', en: 'schnitzel', hi: 'श्निट्ज़ल', ex: 'Das Schnitzel ist groß.', exEn: 'The schnitzel is big.' },
    { de: 'Biergarten', art: 'der', gender: 'm', plural: 'Biergärten', pos: 'noun', en: 'beer garden', hi: 'बियर गार्डन', ex: 'Der Biergarten ist schön.', exEn: 'The beer garden is lovely.' },
    { de: 'Einkaufswagen', art: 'der', gender: 'm', plural: 'Einkaufswagen', pos: 'noun', en: 'shopping cart', hi: 'शॉपिंग ट्रॉली', ex: 'Der Einkaufswagen ist voll.', exEn: 'The shopping cart is full.' },
    { de: 'Einkaufszettel', art: 'der', gender: 'm', plural: 'Einkaufszettel', pos: 'noun', en: 'shopping list', hi: 'खरीदारी सूची', ex: 'Der Einkaufszettel ist lang.', exEn: 'The shopping list is long.' },
    { de: 'Franken', art: 'der', gender: 'm', plural: 'Franken', pos: 'noun', en: 'Swiss franc', hi: 'स्विस फ़्रैंक', ex: 'In der Schweiz zahlt man in Franken.', exEn: 'In Switzerland you pay in francs.' },
    { de: 'Kassenzettel', art: 'der', gender: 'm', plural: 'Kassenzettel', pos: 'noun', en: 'receipt', hi: 'रसीद', ex: 'Der Kassenzettel ist im Glas.', exEn: 'The receipt is in the glass.' },
    { de: 'Sandwich', art: 'der/das', gender: 'm/n', plural: 'Sandwiches', pos: 'noun', en: 'sandwich', hi: 'सैंडविच', ex: 'Ein Sandwich mit Käse.', exEn: 'A sandwich with cheese.' },
    { de: 'Apfelsaftschorle', art: 'die', gender: 'f', plural: 'Apfelsaftschorlen', pos: 'noun', en: 'apple spritzer', hi: 'सेब का सोडा', ex: 'Eine Apfelsaftschorle, bitte.', exEn: 'An apple spritzer, please.' },
    { de: 'Apfelschorle', art: 'die', gender: 'f', plural: 'Apfelschorlen', pos: 'noun', en: 'apple spritzer', hi: 'सेब का सोडा', ex: 'Die Apfelschorle ist kalt.', exEn: 'The apple spritzer is cold.' },
    { de: 'Bar', art: 'die', gender: 'f', plural: 'Bars', pos: 'noun', en: 'bar', hi: 'बार', ex: 'Die Bar ist offen.', exEn: 'The bar is open.' },
    { de: 'Beiz', art: 'die', gender: 'f', plural: 'Beizen', pos: 'noun', en: 'pub (Swiss)', hi: 'पब (स्विस)', ex: 'Die Beiz ist klein.', exEn: 'The pub is small.' },
    { de: 'Kneipe', art: 'die', gender: 'f', plural: 'Kneipen', pos: 'noun', en: 'pub', hi: 'पब', ex: 'Die Kneipe ist um die Ecke.', exEn: 'The pub is around the corner.' },
    { de: 'Kosten', art: 'die', gender: 'f', plural: 'Kosten', pos: 'noun', en: 'costs (pl.)', hi: 'खर्च', ex: 'Die Kosten sind hoch.', exEn: 'The costs are high.' },
    { de: 'Mahlzeit', art: 'die', gender: 'f', plural: 'Mahlzeiten', pos: 'noun', en: 'meal; "enjoy!"', hi: 'भोजन', ex: 'Mahlzeit!', exEn: 'Enjoy (your meal)!' },
    { de: 'Pommes', art: 'die', gender: 'f', plural: 'Pommes', pos: 'noun', en: 'chips, fries', hi: 'फ्रेंच फ्राइज़', ex: 'Pommes mit Ketchup.', exEn: 'Fries with ketchup.' },
    { de: 'Salami', art: 'die', gender: 'f', plural: 'Salamis', pos: 'noun', en: 'salami', hi: 'सलामी', ex: 'Pizza mit Salami.', exEn: 'Pizza with salami.' },
    { de: 'Selbstbedienung', art: 'die', gender: 'f', plural: 'Selbstbedienungen', pos: 'noun', en: 'self-service', hi: 'स्वयं सेवा', ex: 'Hier ist Selbstbedienung.', exEn: 'Here it is self-service.' },
    { de: 'Strandbar', art: 'die', gender: 'f', plural: 'Strandbars', pos: 'noun', en: 'beach bar', hi: 'बीच बार', ex: 'Die Strandbar ist am Fluss.', exEn: 'The beach bar is by the river.' },
    { de: 'Tomatensuppe', art: 'die', gender: 'f', plural: 'Tomatensuppen', pos: 'noun', en: 'tomato soup', hi: 'टमाटर सूप', ex: 'Die Tomatensuppe ist heiß.', exEn: 'The tomato soup is hot.' },
    { de: 'drankommen', pos: 'verb', en: 'to have one\'s turn', hi: 'बारी आना', ex: 'Jetzt komme ich dran.', exEn: 'Now it\'s my turn.', conj: { praesens: 'kommt dran', praeteritum: 'kam dran', perfekt: 'ist drangekommen' } },
    { de: 'prost', pos: 'phrase', en: 'cheers!', hi: 'चियर्स', ex: 'Prost!', exEn: 'Cheers!' },
    { de: 'zum Wohl', pos: 'phrase', en: 'cheers! to your health', hi: 'आपकी सेहत के लिए', ex: 'Zum Wohl!', exEn: 'To your health!' },
    // ===== Reference / System =====
    { de: 'Imperativ', art: 'der', gender: 'm', plural: 'Imperative', pos: 'noun', en: 'imperative (command form)', hi: 'आज्ञार्थक', ex: 'Bringen Sie …! ist ein Imperativ.', exEn: '"Bringen Sie …!" is an imperative.' }
  ],

  // ---------- Ordering & Paying (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Ordering politely: ich möchte & ich hätte gern',
      goldenRule: 'Three phrases, one grammar: <b>möchte / hätte gern / nehme</b> + item in the accusative.',
      memoryTrick: 'Teeno ek jaise chalte hain, bas politeness badalti hai: <b>nehme</b> (normal) → <b>möchte</b> (polite) → <b>hätte gern</b> (sabse polite).',
      body: [
        'Two phrases open every café. <span class="de r-verb">Ich möchte …</span> (I would like) and the even softer <span class="de">Ich hätte gern …</span> (I\u2019d like). Both are followed by the item as an <span class="de r-akkusativ">object</span>.'
      ],
      table: {
        head: ['Order', 'Meaning'],
        rows: [
          ['<span class="de">Ich möchte einen Kaffee.</span>', 'I\u2019d like a coffee. (der→einen)'],
          ['<span class="de">Ich hätte gern eine Cola.</span>', 'I\u2019d like a cola. (eine, unchanged)'],
          ['<span class="de">Ich nehme ein Wasser.</span>', 'I\u2019ll have a water. (ein, unchanged)'],
          ['<span class="de">Einen Tee, bitte.</span>', 'A tea, please. (short form)']
        ]
      },
      note: 'All three — <b>möchte</b>, <b>hätte gern</b>, <b>nehme</b> — work the same way. Add <b>bitte</b> to be polite. Masculine items take <b>einen</b> (einen Kaffee, einen Saft).',
      hinglish: 'Café ke do jaadui phrases: <b>Ich möchte …</b> (mujhe chahiye) aur aur bhi polite <b>Ich hätte gern …</b> (mujhe pasand aayega). Dono ke baad cheez object ke roop mein: einen Kaffee (masculine → einen), eine Cola, ein Wasser. <b>nehme</b> bhi same kaam karta hai. <b>bitte</b> lagao.'
    },
    {
      title: 'Polite requests: Können Sie …?',
      goldenRule: 'Modal <b>Können Sie</b> at the front, main verb as an <b>infinitive at the very end</b>.',
      formula: [
        '<b>Können Sie</b> mir die Speisekarte <b>bringen</b>?',
        '   ↑ slot 1-2                          ↑ end'
      ],
      memoryTrick: 'Shuru mein <b>Können Sie</b> aur sentence ke end mein asli verb — beech mein <b>mir</b> aur cheez. Yeh bracket aage Chapter 20 mein modal verbs ke saath detail mein aayega.',
      body: [
        'To ask the waiter for something, use the modal <span class="de r-modalverb">können</span> with the polite <span class="de r-subject">Sie</span>. The main verb goes to the very end of the sentence.'
      ],
      table: {
        head: ['Request', 'Meaning'],
        rows: [
          ['<span class="de">Können Sie mir die Speisekarte bringen?</span>', 'Can you bring me the menu?'],
          ['<span class="de">Können Sie mir bitte Wasser geben?</span>', 'Can you give me water, please?'],
          ['<span class="de">Können Sie wechseln?</span>', 'Can you give change?'],
          ['<span class="de">Entschuldigung, die Rechnung, bitte.</span>', 'Excuse me, the bill, please.']
        ]
      },
      note: 'Pattern: <b>Können Sie</b> + (mir + thing) + <b>infinitive</b> at the end. <b>mir</b> = "to me" (dative). This is the polite "Bringen Sie …!" imperative\u2019s gentler cousin.',
      hinglish: 'Kuch maangna ho to modal <b>können</b> + polite <b>Sie</b>: <b>Können Sie mir … bringen?</b> Main verb (bringen/geben) sentence ke <b>end</b> mein jaata hai. <b>mir</b> = mujhe (dative). Yeh "Bringen Sie …!" (Imperativ) ka polite roop hai.'
    },
    {
      title: 'Prices: Was kostet das?',
      goldenRule: 'Money never takes a plural: <b>zwei Euro</b>, <b>fünfzig Cent</b>.',
      memoryTrick: 'German mein comma, English mein point: <b>3,50 €</b> = "drei Euro fünfzig". Aur Euro/Cent kabhi plural nahi hote.',
      body: [
        'Ask the price with <span class="de r-verb">kosten</span>. Prices use <span class="de r-object">Euro</span> and <span class="de r-object">Cent</span> — and the money word stays singular after a number.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Was kostet das?</span>', 'What does that cost?'],
          ['<span class="de">Das kostet 3 Euro 50.</span>', 'That costs 3 euros 50.'],
          ['<span class="de">Das macht zusammen 12 Euro.</span>', 'That comes to 12 euros in total.'],
          ['<span class="de">50 Cent, bitte.</span>', '50 cents, please.']
        ]
      },
      note: 'Money stays singular: <b>zwei Euro</b>, <b>fünfzig Cent</b> — never "Euros/Cents". 3,50 € is read <b>drei Euro fünfzig</b>. Use a comma in German, not a point.',
      hinglish: 'Keemat poochho <b>kosten</b> se: <b>Was kostet das?</b> Paisa <b>Euro</b> aur <b>Cent</b> mein. Number ke baad money singular rehta hai: <b>zwei Euro</b>, <b>fünfzig Cent</b> (Euros/Cents nahi). 3,50 € ko bolte hain <b>drei Euro fünfzig</b>. German mein comma lagta hai, point nahi.'
    },
    {
      title: 'Paying: die Rechnung, bitte',
      body: [
        'When you\u2019re done, ask for the bill and say how you\u2019ll split it. Leave a tip by rounding up and saying <span class="de">Stimmt so</span>.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Die Rechnung, bitte!</span>', 'The bill, please!'],
          ['<span class="de">Zahlen, bitte.</span>', 'I\u2019d like to pay.'],
          ['<span class="de">Zusammen oder getrennt?</span>', 'Together or separately?'],
          ['<span class="de">Stimmt so.</span>', 'Keep the change.']
        ]
      },
      note: '<b>zusammen</b> = one bill for the table, <b>getrennt</b> = pay separately. To tip, hand over more and say <b>Stimmt so</b> — the extra becomes the <b>Trinkgeld</b>.',
      hinglish: 'Khaane ke baad bill maango: <b>Die Rechnung, bitte!</b> ya <b>Zahlen, bitte.</b> Waiter poochhega <b>Zusammen oder getrennt?</b> (saath ya alag). Tip dena ho to zyada paisa do aur bolo <b>Stimmt so</b> — bacha hua paisa <b>Trinkgeld</b> ban jaata hai.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four café habits to fix early.' ],
      mistakes: [
        { wrong: 'Ich will einen Kaffee!', right: 'Ich möchte einen Kaffee, bitte.', why: '"Ich will" sounds blunt/demanding. Order with möchte / hätte gern + bitte.' },
        { wrong: 'Das kostet zwei Euros.', right: 'Das kostet zwei Euro.', why: 'Euro and Cent stay singular after a number — no plural -s.' },
        { wrong: 'Ich nehme ein Kaffee.', right: 'Ich nehme einen Kaffee.', why: 'Kaffee is masculine and the object → einen (Akkusativ, Chapter 12).' },
        { wrong: 'Bringen die Rechnung.', right: 'Können Sie die Rechnung bringen?', why: 'Add Sie and put the infinitive last — or use the polite imperative "Bringen Sie …!".' }
      ],
      hinglish: 'Char galtiyan common hain. <b>Ich will</b> thoda blunt lagta hai, isliye order karte waqt <b>m\u00f6chte</b> ya <b>h\u00e4tte gern</b> ke saath <b>bitte</b> lagao. Number ke baad <b>Euro</b> singular rehta hai: <b>zwei Euro</b>, na ki \u201cEuros\u201d. Masculine cheez ke saath <b>einen</b> aayega: <b>einen Kaffee</b>. Aur polite request mein main verb end mein jaata hai: <b>K\u00f6nnen Sie \u2026 bringen?</b>'
    }
  ],

  // ---------- Reading passage (a full café order, clickable) ----------
  reading: {
    title: 'Im Café',
    titleEn: 'At the café',
    tokens: [
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name', why: 'Our learner from Delhi.', ex: 'Rohan ist im Café.', exEn: 'Rohan is in the café.' },
      { w: 'geht', role: 'r-verb', en: 'goes', hi: 'जाता है', pron: 'gayt', type: 'Verb · gehen', why: 'gehen, er-form (Chapter 9).', ex: 'Er geht ins Café.', exEn: 'He goes to the café.' },
      { w: 'ins', role: 'r-preposition', en: 'into the', hi: 'के अंदर', pron: 'ins', type: 'Preposition + place', why: 'in + das → ins Café.', ex: 'ins Café', exEn: 'into the café' },
      { w: 'Café', role: 'r-place', en: 'café', hi: 'कैफ़े', pron: 'ka-FAY', type: 'Noun · place', why: 'das Café (this chapter).', ex: 'Wir gehen ins Café.', exEn: 'We go to the café.' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-article', en: 'the (masc.)', hi: 'वह', pron: 'dair', type: 'Article' },
      { w: 'Kellner', role: 'r-object', en: 'waiter', hi: 'वेटर', pron: 'KEL-ner', type: 'Noun · masc.', why: 'der Kellner (this chapter).', ex: 'Der Kellner kommt.', exEn: 'The waiter comes.' },
      { w: 'bringt', role: 'r-verb', en: 'brings', hi: 'लाता है', pron: 'bringt', type: 'Verb · bringen', why: 'bringen, er-form (this chapter).', ex: 'Er bringt die Karte.', exEn: 'He brings the menu.' },
      { w: 'die', role: 'r-article', en: 'the (fem.)', hi: 'वह', pron: 'dee', type: 'Article' },
      { w: 'Speisekarte', role: 'r-object', en: 'menu', hi: 'मेन्यू', pron: 'SHPY-zuh-kar-tuh', type: 'Noun · fem.', why: 'die Speisekarte (this chapter).', ex: 'Die Speisekarte, bitte.', exEn: 'The menu, please.' },
      { w: '.', plain: true },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name' },
      { w: 'möchte', role: 'r-verb', en: 'would like', hi: 'चाहता है', pron: 'MÖKH-tuh', type: 'Verb · polite', why: 'ich/er möchte — polite order form (this chapter).', ex: 'Er möchte einen Kaffee.', exEn: 'He would like a coffee.' },
      { w: 'einen', role: 'r-akkusativ', case: 'Akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.', why: 'Kaffee is masculine object → einen (Chapter 12).', ex: 'einen Kaffee', exEn: 'a coffee' },
      { w: 'Kaffee', role: 'r-object', case: 'Akkusativ', en: 'coffee', hi: 'कॉफ़ी', pron: 'KA-fay', type: 'Noun · masc.', why: 'der Kaffee → einen Kaffee.', ex: 'Ich möchte einen Kaffee.', exEn: 'I would like a coffee.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'ein', role: 'r-akkusativ', case: 'Akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
      { w: 'Stück', role: 'r-object', case: 'Akkusativ', en: 'piece', hi: 'टुकड़ा', pron: 'shtük', type: 'Noun · neut.', why: 'das Stück (this chapter).', ex: 'ein Stück Kuchen', exEn: 'a piece of cake' },
      { w: 'Kuchen', role: 'r-object', en: 'cake', hi: 'केक', pron: 'KOO-khen', type: 'Noun · masc.', why: 'der Kuchen (Chapter 14).', ex: 'ein Stück Kuchen', exEn: 'a piece of cake' },
      { w: '.', plain: true },
      { w: 'Was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word', why: 'Was kostet …? (this chapter).', ex: 'Was kostet das?', exEn: 'What does that cost?' },
      { w: 'kostet', role: 'r-verb', en: 'costs', hi: 'कीमत है', pron: 'KOS-tet', type: 'Verb · kosten', why: 'kosten — to cost (this chapter).', ex: 'Was kostet das?', exEn: 'What does that cost?' },
      { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun' },
      { w: '?', plain: true },
      { w: 'Der', role: 'r-article', en: 'the (masc.)', hi: 'वह', pron: 'dair', type: 'Article' },
      { w: 'Preis', role: 'r-object', en: 'price', hi: 'कीमत', pron: 'price', type: 'Noun · masc.', why: 'der Preis (this chapter).', ex: 'Der Preis ist gut.', exEn: 'The price is good.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'vier', role: 'r-object', en: 'four', hi: 'चार', pron: 'feer', type: 'Number', why: 'vier = 4 (Chapter 3).', ex: 'vier Euro', exEn: 'four euros' },
      { w: 'Euro', role: 'r-object', en: 'euros', hi: 'यूरो', pron: 'OY-ro', type: 'Noun · currency', why: 'der Euro — singular after a number (this chapter).', ex: 'vier Euro', exEn: 'four euros' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'at the', hi: 'पर', pron: 'am', type: 'Preposition + time', why: 'am Ende = at the end.', ex: 'am Ende', exEn: 'at the end' },
      { w: 'Ende', role: 'r-object', en: 'end', hi: 'अंत', pron: 'EN-duh', type: 'Noun', why: 'das Ende — the end.', ex: 'am Ende', exEn: 'at the end' },
      { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहता है', pron: 'zahkt', type: 'Verb · sagen', why: 'sagen, er-form (Chapter 9).', ex: 'Er sagt danke.', exEn: 'He says thanks.' },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Die', role: 'r-article', en: 'the (fem.)', hi: 'वह', pron: 'dee', type: 'Article' },
      { w: 'Rechnung', role: 'r-object', en: 'bill', hi: 'बिल', pron: 'REKH-nung', type: 'Noun · fem.', why: 'die Rechnung (this chapter).', ex: 'Die Rechnung, bitte!', exEn: 'The bill, please!' },
      { w: ',', plain: true },
      { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Politeness' },
      { w: '!', plain: true },
      { w: 'Stimmt', role: 'r-verb', en: 'is right (keep)', hi: 'ठीक है', pron: 'shtimt', type: 'Verb · stimmen', why: '"Stimmt so!" = keep the change (this chapter).', ex: 'Stimmt so!', exEn: 'Keep the change!' },
      { w: 'so', role: 'r-adverb', en: 'so', hi: 'ऐसे ही', pron: 'zoh', type: 'Adverb' },
      { w: '!', plain: true }
    ],
    translation: 'Rohan goes into the café. The waiter brings the menu. Rohan would like a coffee and a piece of cake. What does that cost? The price is four euros. At the end Rohan says: The bill, please! Keep the change!'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_015_L001', speaker: 'Kellner', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Guten Tag! Hier ist Ihr Tee.', en: 'Good day! Here is your tea.' },
      { id: 'A1_015_L002', speaker: 'Ida', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Entschuldigung, ich habe Kaffee bestellt, nicht Tee.', en: 'Excuse me, I ordered coffee, not tea.' },
      { id: 'A1_015_L003', speaker: 'Kellner', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Oh, das tut mir leid! Ich bringe sofort einen Kaffee.', en: 'Oh, I\'m sorry! I\'ll bring a coffee right away.' },
      { id: 'A1_015_L004', speaker: 'Ida', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Danke, kein Problem.', en: 'Thanks, no problem.' },
      { id: 'A1_015_L005', speaker: 'Kellner', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Hier ist Ihr Kaffee. Guten Appetit!', en: 'Here is your coffee. Enjoy!' },
      { id: 'A1_015_L006', speaker: 'Ida', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Vielen Dank!', en: 'Many thanks!' }
    ],
    transcript: 'Guten Tag! Hier ist Ihr Tee. Entschuldigung, ich habe Kaffee bestellt, nicht Tee. Oh, das tut mir leid! Ich bringe sofort einen Kaffee. Danke, kein Problem. Hier ist Ihr Kaffee. Guten Appetit! Vielen Dank!',
    translation: 'Good day! Here is your tea. Excuse me, I ordered coffee, not tea. Oh, I\'m sorry! I\'ll bring a coffee right away. Thanks, no problem. Here is your coffee. Enjoy! Many thanks!',
    tokens: [
      { w: 'Guten' },
      { w: 'Tag' },
      { w: '!', plain: true },
      { w: 'Hier' },
      { w: 'ist' },
      { w: 'Ihr' },
      { w: 'Tee' },
      { w: '.', plain: true },
      { w: 'Entschuldigung' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'Kaffee' },
      { w: 'bestellt' },
      { w: ',', plain: true },
      { w: 'nicht' },
      { w: 'Tee' },
      { w: '.', plain: true },
      { w: 'Oh' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'tut' },
      { w: 'mir' },
      { w: 'leid' },
      { w: '!', plain: true },
      { w: 'Ich' },
      { w: 'bringe' },
      { w: 'sofort' },
      { w: 'einen' },
      { w: 'Kaffee' },
      { w: '.', plain: true },
      { w: 'Danke' },
      { w: ',', plain: true },
      { w: 'kein' },
      { w: 'Problem' },
      { w: '.', plain: true },
      { w: 'Hier' },
      { w: 'ist' },
      { w: 'Ihr' },
      { w: 'Kaffee' },
      { w: '.', plain: true },
      { w: 'Guten' },
      { w: 'Appetit' },
      { w: '!', plain: true },
      { w: 'Vielen' },
      { w: 'Dank' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Welchen Fehler macht der Kellner?', qEn: 'What mistake does the waiter make?', options: ['Falscher Preis', 'Falsches Getränk', 'Falscher Tisch', 'Falsche Rechnung'], optionsEn: ['wrong price', 'wrong drink', 'wrong table', 'wrong bill'], answer: 1,
        explain: 'He brings tea instead of the coffee Ida ordered.' },
      { q: 'Was hat Ida wirklich bestellt?', qEn: 'What did Ida actually order?', options: ['Tee', 'Kaffee', 'Wasser', 'Saft'], optionsEn: ['tea', 'coffee', 'water', 'juice'], answer: 1,
        explain: '"Ich habe Kaffee bestellt, nicht Tee."' }
    ]
  },

  speaking: [
    { task: "Der Kellner kommt an den Tisch. Bestelle etwas.", taskEn: "The waiter comes to the table. Order something.", de: "Ich nehme einen Kaffee und ein Stück Kuchen, bitte.", en: "I'll have a coffee and a piece of cake, please." },
    { task: "Du hast Kaffee bestellt, aber der Kellner bringt Tee.", taskEn: "You ordered coffee, but the waiter brings tea.", de: "Entschuldigung, ich habe Kaffee bestellt, nicht Tee.", en: "Sorry, I ordered coffee, not tea." },
    { task: "Du möchtest zahlen. Was sagst du dem Kellner?", taskEn: "You want to pay. What do you say to the waiter?", de: "Die Rechnung, bitte. Was kostet das?", en: "The bill, please. How much is it?" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five polite café sentences: greet and order with "Ich möchte …" or "Ich hätte gern …", ask for the menu with "Können Sie …?", ask the price with "Was kostet …?", and ask for the bill. Use the right accusative article on each item.',
    starters: ['Guten Tag! Ich möchte …', 'Können Sie mir bitte …?', 'Was kostet …? — Die Rechnung, bitte.'],
    placeholder: 'Guten Tag! Ich hätte gern einen Kaffee …',
    minWords: 18
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which is the polite way to order?',
      options: ['Ich will einen Kaffee!', 'Gib Kaffee.', 'Ich hätte gern einen Kaffee, bitte.', 'Kaffee jetzt!'],
      answer: 2,
      explain: '"Ich hätte gern … , bitte" is polite and natural.'
    },
    gap: {
      // Ordering with accusative + price word.
      sentence: ['Ich möchte ', ' Kaffee. Das kostet zwei ', '.'],
      gaps: [ { answer: 'einen', accepts: ['einen'] }, { answer: 'Euro', accepts: ['Euro'] } ],
      explain: 'Kaffee (m) → einen; money stays singular → Euro (not Euros).'
    },
    match: {
      q: 'Match each café word to its English.',
      pairs: [
        { noun: 'Rechnung', art: 'bill' },
        { noun: 'Speisekarte', art: 'menu' },
        { noun: 'Kellner', art: 'waiter' },
        { noun: 'Trinkgeld', art: 'tip' }
      ]
    },
    builder: {
      target: 'Build: "Can you bring me the bill?"',
      bank: ['Können', 'Sie', 'mir', 'die Rechnung', 'bringen'],
      answer: ['Können', 'Sie', 'mir', 'die Rechnung', 'bringen'],
      roles: { 'Können': 'r-modalverb', 'Sie': 'r-subject', 'mir': 'r-dativ', 'die Rechnung': 'r-object', 'bringen': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which is the most polite way to order?', options: ['Ich will einen Tee.', 'Ich hätte gern einen Tee, bitte.', 'Tee!', 'Gib mir Tee.'], answer: 1,
      explain: '"Ich hätte gern … , bitte" is the softest, most polite order.' },
    { q: 'How do you ask the price?', options: ['Wo ist das?', 'Was kostet das?', 'Wer ist das?', 'Wie geht das?'], answer: 1,
      explain: '"Was kostet das?" = what does that cost?' },
    { q: 'Complete: "Das kostet zwei ___."', options: ['Euros', 'Euro', 'Euron', 'Euroen'], answer: 1,
      explain: 'Euro stays singular after a number.' },
    { q: 'The waiter asks "Zusammen oder getrennt?" — what is it about?', options: ['Food or drink', 'Hot or cold', 'One bill or separate bills', 'Stay or go'], answer: 2,
      explain: 'zusammen = one bill, getrennt = pay separately.' },
    { q: '"Stimmt so!" means…', options: ['That\'s wrong', 'Keep the change', 'The bill, please', 'I am full'], answer: 1,
      explain: 'You round up and let the waiter keep the rest as a tip.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'Order with <span class="de">Ich möchte …</span> / <span class="de">Ich hätte gern …</span> / <span class="de">Ich nehme …</span> — always + <span class="de">bitte</span>.' },
    { c: 'r-modalverb', html: 'Ask for service: <span class="de">Können Sie mir … bringen?</span> — verb goes to the end.' },
    { c: 'r-akkusativ', html: 'Item = object → accusative: <span class="de">einen Kaffee</span> (m), <span class="de">eine Cola</span> (f), <span class="de">ein Wasser</span> (n). Money stays singular: <span class="de">zwei Euro</span>.' }
  ],
  revisionTips: [
    'Run the whole café out loud once a day: greet → order with "Ich hätte gern …" → "Was kostet das?" → "Die Rechnung, bitte. Stimmt so."',
    'Learn each food/drink with its article so the accusative order comes out right (einen Kaffee, eine Cola, ein Wasser).',
    'Remember money is singular: "zwei Euro", "fünfzig Cent" — never with an -s.'
  ]
};

window.CHAPTER = CHAPTER;
