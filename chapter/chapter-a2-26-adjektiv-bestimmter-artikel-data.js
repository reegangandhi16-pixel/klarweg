/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 26
   "Adjektiv nach bestimmtem Artikel" — adjective endings after
   der/die/das (and all definite article case forms). Because the
   article already marks gender and case, the adjective almost
   always just adds -e or -en. No adjective declension after ein,
   no adjective without article, no comparative endings, no B1.
   Vocabulary source: uploaded chapter-26 list (~28 items; alpine/
   mountain sports theme — die Eishöhle, das Tal, der Fußballfan,
   das Mountainbike). Recycles A1/A2 vocabulary and cases throughout.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-25-goethe-mini-3-data.js exactly
   (flat vocab[], grammar[] rule cards, tokenized reading, etc.)
   so it runs on the shared chapter-app.js / chapter-tutor.js engine.

   SOURCE ISSUES corrected (flagged, not silently overridden):
   • "auf - (no direct translation)" — blank gloss → auf is a very
     common two-way preposition; glossed here as on/onto (its
     well-known A1 sense), since the source left it blank.
============================================================ */
const CHAPTER = {
  id: 'a2-26-adjektiv-bestimmter-artikel',
  phase: 'A2 · Phase 2',
  number: 26,
  title: 'Adjektiv nach bestimmtem Artikel',
  titleEn: 'Adjective endings after the definite article',
  description: 'Der kleine Hund. Die kleine Tasche. Das kleine Kind. Den kleinen Hund. Dem kleinen Mann. — the article already shows gender and case, so the adjective barely has to do any work: it almost always ends in -e or -en. This chapter drills exactly which one, in Nominativ, Akkusativ and Dativ.',
  xp: 190,
  time: 35,
  difficulty: 'Elementary',
  nextChapter: { number: 27, title: 'Adjektiv nach unbestimmtem Artikel', titleEn: 'Adjective endings after the indefinite article' , href: 'chapter-a2-27-adjektiv-unbestimmter-artikel.html' },

  prevChapter: { number: 25, title: 'Goethe Mini 3', titleEn: 'Goethe Checkpoint 3', href: 'chapter-a2-25-goethe-mini-3.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'A shopping trip before a mountain weekend turns into an adjective drill: Ida checks off the warm jacket, the big backpack, the small tent, while Timo makes sure nothing important — the good map — gets left behind. Der/die/das already show gender and case, so almost every adjective just needs -e or -en.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the same adjective take -e in one case and -en in another'
    ],
    scene: 'Einkaufen vor dem Bergwochenende — Sprachschule Berlin',
    femaleSpeakers: ['Ida'],
    dialogue: [
      { speaker: 'Ida', tokens: [
        { w: 'Nimmst', role: 'r-verb', en: 'are you taking', hi: 'ले जा रहे हो', pron: 'NIMST', type: 'Verb · nehmen (du)', lexicalUnit: 'mitnehmen' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'warme', role: 'r-akkusativ', en: 'warm', hi: 'गर्म', pron: 'VAR-muh', type: 'Adjective · weak ending', why: 'adjective after der/die/das takes -e (this chapter).', ex: 'die warme Jacke', exEn: 'the warm jacket' },
        { w: 'Jacke', role: 'r-akkusativ', en: 'jacket', hi: 'जैकेट', pron: 'YA-kuh', type: 'Noun · fem.' },
        { w: 'mit', role: 'r-verb', en: '(prefix of mitnehmen)', hi: 'साथ', pron: 'mit', type: 'Separable prefix · Satzende', lexicalUnit: 'mitnehmen' },
        { w: '?', plain: true }
      ], en: 'Are you taking the warm jacket?', hi: 'Kya tum garam jacket saath le ja rahe ho?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nehme', role: 'r-verb', en: 'take', hi: 'ले जाता हूँ', pron: 'NAY-muh', type: 'Verb · nehmen (ich)', lexicalUnit: 'mitnehmen' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'großen', role: 'r-akkusativ', en: 'big', hi: 'बड़ा', pron: 'GRO-sen', type: 'Adjective · weak ending', why: 'adjective after der/die/das (masc. acc.) takes -en (this chapter).', ex: 'den großen Rucksack', exEn: 'the big backpack' },
        { w: 'Rucksack', role: 'r-akkusativ', en: 'backpack', hi: 'बैकपैक', pron: 'ROOK-zak', type: 'Noun · masc.' },
        { w: 'mit', role: 'r-verb', en: '(prefix of mitnehmen)', hi: 'साथ', pron: 'mit', type: 'Separable prefix · Satzende', lexicalUnit: 'mitnehmen' },
        { w: '.', plain: true }
      ], en: 'Yes. I am also taking the big backpack.', hi: 'Haan. Main bada backpack bhi le ja raha hoon.' },
      { speaker: 'Ida', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Vergiss', role: 'r-verb', en: 'do not forget', hi: 'मत भूलना', pron: 'fer-GIS', type: 'Verb · vergessen (imperative)' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'kleine', role: 'r-akkusativ', en: 'small', hi: 'छोटा', pron: 'KLY-nuh', type: 'Adjective · weak ending', why: 'adjective after der/die/das (neut. acc.) takes -e (this chapter).', ex: 'das kleine Zelt', exEn: 'the small tent' },
        { w: 'Zelt', role: 'r-akkusativ', en: 'tent', hi: 'तंबू', pron: 'tselt', type: 'Noun · neut.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '!', plain: true }
      ], en: 'Good. Do not forget the small tent!', hi: 'Achha. Chhota tambu mat bhoolna!' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Keine', role: 'r-akkusativ', en: 'no', hi: 'कोई नहीं', pron: 'KY-nuh', type: 'Determiner' },
        { w: 'Sorge', role: 'r-akkusativ', en: 'worry', hi: 'चिंता', pron: 'ZOR-guh', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'रखा है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'kleine', role: 'r-subject', en: 'small', hi: 'छोटा', pron: 'KLY-nuh', type: 'Adjective · weak ending', why: 'adjective before neut. noun as subject (nom.) also takes -e (this chapter).', ex: 'Das kleine Zelt steht dort.', exEn: 'The small tent stands there.' },
        { w: 'Zelt', role: 'r-subject', en: 'tent', hi: 'तंबू', pron: 'tselt', type: 'Noun · neut.' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'gepackt', role: 'r-verb', en: 'packed', hi: 'पैक कर', pron: 'ge-PAKT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'No worry. I have already packed the small tent.', hi: 'Chinta mat karo. Maine chhota tambu pehle hi pack kar diya hai.' },
      { speaker: 'Ida', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'gute', role: 'r-akkusativ', en: 'good', hi: 'अच्छी', pron: 'GOO-tuh', type: 'Adjective · weak ending', why: 'adjective after der/die/das (fem. acc.) takes -e (this chapter).', ex: 'die gute Karte', exEn: 'the good map' },
        { w: 'Karte', role: 'r-akkusativ', en: 'map', hi: 'नक्शा', pron: 'KAR-tuh', type: 'Noun · fem.' },
        { w: 'hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'dabei', role: 'r-adverb', en: 'with you', hi: 'साथ', pron: 'da-BY', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'Perfect! And do you also have the good map with you?', hi: 'Badhiya! Aur kya tumhare paas achha naksha bhi hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'gute', role: 'r-akkusativ', en: 'good', hi: 'अच्छी', pron: 'GOO-tuh', type: 'Adjective · weak ending' },
        { w: 'Karte', role: 'r-akkusativ', en: 'map', hi: 'नक्शा', pron: 'KAR-tuh', type: 'Noun · fem.' },
        { w: 'liegt', role: 'r-verb', en: 'lies', hi: 'है', pron: 'leekt', type: 'Verb · liegen' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'großen', role: 'r-dativ', en: 'big', hi: 'बड़े', pron: 'GRO-sen', type: 'Adjective · dative' },
        { w: 'Rucksack', role: 'r-dativ', en: 'backpack (dat.)', hi: 'बैकपैक में', pron: 'ROOK-zak', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'Yes. The good map lies in the big backpack.', hi: 'Haan. Achha naksha bade backpack mein hai.' },
      { speaker: 'Ida', tokens: [
        { w: 'Wunderbar', role: 'r-subject', en: 'wonderful', hi: 'अद्भुत', pron: 'vun-der-BAHR', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'bereit', role: 'r-adjective', en: 'ready', hi: 'तैयार', pron: 'be-RYT', type: 'Adjective' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'lange', role: 'r-akkusativ', en: 'long', hi: 'लंबी', pron: 'LANG-uh', type: 'Adjective · weak ending' },
        { w: 'Wanderung', role: 'r-akkusativ', en: 'hike', hi: 'पैदल यात्रा', pron: 'VAN-de-rung', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Wonderful! Then we are ready for the long hike.', hi: 'Adbhut! Toh hum lambi paidal yatra ke liye taiyaar hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de">der kleine Hund. die kleine Tasche. das kleine Kind.</span> — the article <span class="de r-article">der/die/das</span> already shows gender and case, so the adjective barely has to work: it just adds <b>-e</b> (Nominativ masc./fem./neut. and Akkusativ fem./neut.) or <b>-en</b> (everywhere else: Akkusativ masc., all of Dativ, and the whole plural). Memory rule: <em>the article already carries the information, so the adjective usually just says -e or -en.</em>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ADJECTIVE ENDINGS AFTER THE DEFINITE ARTICLE (der/die/das and all case forms) — only -e or -en, never any other ending. ' +
    'No adjective declension after ein, no adjective without an article, no comparative endings, no B1 structures. The learner wrote sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- After der/die/das (Nominativ) and die/das (Akkusativ fem./neut.), the adjective takes -e: der kleine Hund, die kleine Tasche, das kleine Kind.\n' +
    '- Everywhere else — Akkusativ masculine (den), all of Dativ (dem/der/den), and the whole plural (die/den) — the adjective takes -en: den kleinen Hund, dem kleinen Mann, der kleinen Frau, den kleinen Kindern.\n' +
    '- Flag a swapped ending: "der kleinen Hund" (should be "der kleine Hund"), "den kleine Hund" (should be "den kleinen Hund"), "dem kleine Mann" (should be "dem kleinen Mann"), "die schönen Tasche" for one bag (should be "die schöne Tasche").\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>-e vs. -en check:</b> one sentence on whether the learner picked the right ending for each case.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You place -e and -en correctly after definite articles almost every time. Next: the trickier endings after ein, eine, kein.',
    mid: 'Good. Re-read the ending table once (only Nom./Akk. fem./neut. get -e; everything else gets -en), then continue.',
    low: 'Worth another pass — remember: the article already shows gender and case, so the adjective just needs -e (Nom./Akk. fem./neut.) or -en (everywhere else). Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'sehe', role: 'r-verb' },
    { w: 'den', role: 'r-akkusativ' }, { w: 'kleinen', role: 'r-adjective' },
    { w: 'Hund', role: 'r-akkusativ' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See why almost every ending becomes -e or -en.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A shopping trip full of adjective+noun combinations.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: die Eishöhle, das Tal, die Umgebung, treu.' },
    { id: 'grammar',    label: 'Adjektivendungen', tag: 'core',
      objective: 'Master the full -e/-en table across Nominativ, Akkusativ and Dativ, and the classic mistakes.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a travel description full of definite-article adjective phrases.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each -e/-en ending in a shopping conversation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe people, cities, houses, food and clothes with correct endings.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write an apartment or holiday description using adjective phrases.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the -e/-en table and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 190 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The chapter\'s alpine/sports words — die Eishöhle, das Tal, die Sportart, der Fußballfan — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Full -e/-en drills across Nominativ, Akkusativ and Dativ, plus an apartment-description writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete adjective-ending table after definite articles, common mistakes, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '6 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'der kleine Hund', text: 'Use -e after Nominativ der/die/das' },
    { de: 'die kleine Tasche · das kleine Kind', text: 'Recognize the Akkusativ fem./neut. -e cases' },
    { de: 'den kleinen Hund', text: 'Switch to -en for Akkusativ masculine' },
    { de: 'dem kleinen Mann · der kleinen Frau', text: 'Use -en everywhere in Dativ' },
    { de: 'die kleinen Kinder', text: 'Use -en for the whole plural' }
  ],

  // ---------- Vocabulary (~28 items) ----------
  vocab: [
    { de: 'Anreise', art: 'die', gender: 'f', plural: 'Anreisen', pos: 'noun', en: 'journey (there)', hi: 'यात्रा', ex: 'Die lange Anreise lohnt sich.', exEn: 'The long journey is worth it.' },
    { de: 'auf', pos: 'preposition', en: 'on, onto', hi: 'पर', ex: 'Das Mountainbike steht auf dem Weg.', exEn: 'The mountain bike stands on the path.' },
    { de: 'ausfallen', pos: 'verb', en: 'to be cancelled', hi: 'रद्द होना', ex: 'Die Anreise könnte wegen Schnee ausfallen.', exEn: 'The journey could be cancelled because of snow.', conj: { praesens: 'fällt aus', praeteritum: 'fiel aus', perfekt: 'ist ausgefallen' } },
    { de: 'benehmen (sich)', pos: 'verb', en: 'to behave', hi: 'व्यवहार करना', ex: 'Die kleinen Kinder sollten sich gut benehmen.', exEn: 'The small children should behave well.', conj: { praesens: 'benimmt sich', praeteritum: 'benahm sich', perfekt: 'hat sich benommen' } },
    { de: 'bestimmt', pos: 'adverb', en: 'definitely', hi: 'निश्चित रूप से', ex: 'Der lange Sommertag wird bestimmt schön.', exEn: 'The long summer day will definitely be beautiful.' },
    { de: 'einverstanden', pos: 'adjective', en: 'agreed', hi: 'सहमत', ex: 'Einverstanden, wir kaufen die praktische Taucherbrille.', exEn: 'Agreed, we\'ll buy the practical diving mask.' },
    { de: 'Einwohner', art: 'der', gender: 'm', plural: 'Einwohner', pos: 'noun', en: 'inhabitant', hi: 'निवासी', ex: 'Der freundliche Einwohner zeigt uns den Weg.', exEn: 'The friendly inhabitant shows us the way.' },
    { de: 'Eishöhle', art: 'die', gender: 'f', plural: 'Eishöhlen', pos: 'noun', en: 'ice cave', hi: 'बर्फ़ की गुफ़ा', ex: 'Wir kaufen die praktische Taucherbrille für die Eishöhle.', exEn: 'We\'re buying the practical diving mask for the ice cave.' },
    { de: 'Erfolg', art: 'der', gender: 'm', plural: 'Erfolge', pos: 'noun', en: 'success', hi: 'सफलता', ex: 'Der große Erfolg freut uns alle.', exEn: 'The big success pleases us all.' },
    { de: 'Führerin', art: 'die', gender: 'f', plural: 'Führerinnen', pos: 'noun', en: 'guide (f.)', hi: 'गाइड (महिला)', ex: 'Die erfahrene Führerin kennt das grüne Tal gut.', exEn: 'The experienced guide (f.) knows the green valley well.' },
    { de: 'hinunter', pos: 'adverb', en: 'down', hi: 'नीचे', ex: 'Wir gehen den steilen Weg hinunter.', exEn: 'We go down the steep path.' },
    { de: 'Hoffnung', art: 'die', gender: 'f', plural: 'Hoffnungen', pos: 'noun', en: 'hope', hi: 'आशा', ex: 'Die kleine Hoffnung auf gutes Wetter bleibt.', exEn: 'The small hope for good weather remains.' },
    { de: 'Info', art: 'die', gender: 'f', plural: 'Infos', pos: 'noun', en: 'info', hi: 'जानकारी', ex: 'Die wichtige Info steht auf dem Prospekt.', exEn: 'The important info is on the brochure.' },
    { de: 'Kette', art: 'die', gender: 'f', plural: 'Ketten', pos: 'noun', en: 'necklace', hi: 'हार', ex: 'Die schöne Kette wäre ein tolles Geschenk.', exEn: 'The beautiful necklace would be a great gift.' },
    { de: 'Kontrast', art: 'der', gender: 'm', plural: 'Kontraste', pos: 'noun', en: 'contrast', hi: 'विरोधाभास', ex: 'Die ruhige Umgebung bietet einen schönen Kontrast.', exEn: 'The quiet surroundings offer a beautiful contrast.' },
    { de: 'kulturell', pos: 'adjective', en: 'cultural', hi: 'सांस्कृतिक', ex: 'Das kulturelle Programm beginnt am Abend.', exEn: 'The cultural programme begins in the evening.' },
    { de: 'schießen', pos: 'verb', en: 'to shoot', hi: 'शूट करना', ex: 'Der junge Spieler schießt ein Tor.', exEn: 'The young player shoots a goal.', conj: { praesens: 'schießt', praeteritum: 'schoss', perfekt: 'hat geschossen' } },
    { de: 'Sommertag', art: 'der', gender: 'm', plural: 'Sommertage', pos: 'noun', en: 'summer\'s day', hi: 'गर्मी का दिन', ex: 'Der lange Sommertag passt gut für jede Sportart.', exEn: 'The long summer day suits every sport well.' },
    { de: 'Sportart', art: 'die', gender: 'f', plural: 'Sportarten', pos: 'noun', en: 'sport, type of sport', hi: 'खेल का प्रकार', ex: 'Welche Sportart magst du am liebsten?', exEn: 'Which sport do you like best?' },
    { de: 'Tal', art: 'das', gender: 'n', plural: 'Täler', pos: 'noun', en: 'valley', hi: 'घाटी', ex: 'Wir fahren in das grüne Tal.', exEn: 'We drive into the green valley.' },
    { de: 'treu', pos: 'adjective', en: 'loyal', hi: 'वफ़ादार', ex: 'Ich bin ein treuer Fußballfan.', exEn: 'I am a loyal football fan.' },
    { de: 'Umgebung', art: 'die', gender: 'f', plural: 'Umgebungen', pos: 'noun', en: 'vicinity, surroundings', hi: 'आस-पास का क्षेत्र', ex: 'Die ruhige Umgebung gefällt mir.', exEn: 'I like the quiet surroundings.' },
    { de: 'übermorgen', pos: 'adverb', en: 'day after tomorrow', hi: 'परसों', ex: 'Übermorgen fahren wir in die Berge.', exEn: 'The day after tomorrow we drive into the mountains.' },
    { de: 'Fußballfan', art: 'der', gender: 'm', plural: 'Fußballfans', pos: 'noun', en: 'football fan', hi: 'फ़ुटबॉल प्रशंसक', ex: 'Der treue Fußballfan kauft den neuen Fußballschuh.', exEn: 'The loyal football fan buys the new football boot.' },
    { de: 'Fußballschuh', art: 'der', gender: 'm', plural: 'Fußballschuhe', pos: 'noun', en: 'football boot', hi: 'फ़ुटबॉल जूता', ex: 'Ich brauche den neuen Fußballschuh.', exEn: 'I need the new football boot.' },
    { de: 'Mountainbike', art: 'das', gender: 'n', plural: 'Mountainbikes', pos: 'noun', en: 'mountain bike', hi: 'माउंटेन बाइक', ex: 'Das neue Mountainbike sieht modern aus.', exEn: 'The new mountain bike looks modern.' },
    { de: 'Taucherbrille', art: 'die', gender: 'f', plural: 'Taucherbrillen', pos: 'noun', en: 'diving mask', hi: 'डाइविंग मास्क', ex: 'Wir kaufen die praktische Taucherbrille.', exEn: 'We\'re buying the practical diving mask.' }
  ],

  // ---------- Adjektiv nach bestimmtem Artikel (rule cards) ----------
  grammar: [
    {
      title: 'The memory rule',
      body: [
        'The definite article (<span class="de r-article">der/die/das</span>, and its case forms den/dem/der/die/den) already shows gender and case. Because the article does that job, the adjective almost always just adds <b>-e</b> or <b>-en</b> — never any other ending.'
      ],
      note: '<em>"The article already shows the gender and case, so the adjective usually only needs -e or -en."</em>',
      hinglish: 'Definite article (der/die/das aur uske case forms) already gender aur case bata deta hai. Isliye adjective ko bas -e ya -en lagana hota hai, aur kuch nahi.'
    },
    {
      title: 'Full ending table',
      body: [
        'Only two cells in the whole table use -e; everything else — Akkusativ masculine, all of Dativ, and the entire plural — uses -en.'
      ],
      table: {
        head: ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'],
        rows: [
          ['Nominativ', '<span class="de">der kleine Hund</span>', '<span class="de">die kleine Tasche</span>', '<span class="de">das kleine Kind</span>', '<span class="de">die kleinen Kinder</span>'],
          ['Akkusativ', '<span class="de">den kleinen Hund</span>', '<span class="de">die kleine Tasche</span>', '<span class="de">das kleine Kind</span>', '<span class="de">die kleinen Kinder</span>'],
          ['Dativ', '<span class="de">dem kleinen Hund</span>', '<span class="de">der kleinen Tasche</span>', '<span class="de">dem kleinen Kind</span>', '<span class="de">den kleinen Kindern</span>']
        ]
      },
      note: '-e appears in exactly three places: Nominativ (all three genders) and Akkusativ feminine/neuter. Everywhere else in this table is -en.',
      hinglish: '<b>-e</b> sirf kuch hi jagah aata hai: Nominativ mein teeno gender ke saath, aur Akkusativ mein feminine aur neuter ke saath. Baaki har jagah <b>-en</b> aata hai.'
    },
    {
      title: 'Where -e survives',
      body: [
        'These are the only cells where the adjective keeps -e:'
      ],
      table: {
        head: ['Case', 'Gender', 'Example'],
        rows: [
          ['Nominativ', 'masculine', '<span class="de">der kleine Mann</span>'],
          ['Nominativ', 'feminine', '<span class="de">die kleine Frau</span>'],
          ['Nominativ', 'neuter', '<span class="de">das kleine Kind</span>'],
          ['Akkusativ', 'feminine', '<span class="de">die kleine Tasche</span>'],
          ['Akkusativ', 'neuter', '<span class="de">das kleine Kind</span>']
        ]
      },
      hinglish: 'Yaad rakhne ka tarika yeh hai: <b>-e</b> Nominativ mein aur Akkusativ ke feminine/neuter mein rehta hai, aur uske baad har jagah <b>-en</b> aa jaata hai.'
    },
    {
      title: 'Common learner mistakes',
      body: [
        '<span class="de strike">der kleinen Hund</span> → <span class="de">der kleine Hund</span> — Nominativ masculine takes -e, not -en.',
        '<span class="de strike">den kleine Hund</span> → <span class="de">den kleinen Hund</span> — Akkusativ masculine takes -en, not -e.',
        '<span class="de strike">dem kleine Mann</span> → <span class="de">dem kleinen Mann</span> — Dativ always takes -en.',
        '<span class="de strike">die schönen Tasche</span> → <span class="de">die schöne Tasche</span> — a single feminine bag (Nom./Akk.) takes -e, not -en (that ending is for plural).'
      ],
      hinglish: 'Char galtiyan common hain. Nominativ masculine mein <b>-e</b> aata hai, <b>-en</b> nahi. Akkusativ masculine mein <b>-en</b> aata hai, <b>-e</b> nahi. Dativ mein har gender ke saath <b>-en</b> aata hai. Aur feminine singular mein <b>-e</b> rehta hai \u2014 <b>-en</b> sirf plural mein aata hai.'
    },
    {
      title: 'Quick decision guide',
      body: [ 'Two questions decide the ending every time.' ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['Is it Dativ, or is the noun plural?', '→ always <span class="de">-en</span>'],
          ['Is it Nominativ, or Akkusativ feminine/neuter?', '→ <span class="de">-e</span>'],
          ['Is it Akkusativ masculine?', '→ <span class="de">-en</span> (the one Akkusativ exception)']
        ]
      },
      hinglish: 'Faisla aise karo: Dativ ya plural ho to <b>-en</b>. Nominativ ho, ya Akkusativ mein feminine/neuter ho, to <b>-e</b>. Aur Akkusativ masculine mein <b>-en</b> aata hai \u2014 yahi ek jagah dhyaan maangti hai.'
    }
  ],

  // ---------- Reading passage (Der Bergausflug, clickable) ----------
  reading: {
    title: 'Der Bergausflug',
    titleEn: 'The mountain trip',
    tokens: [
      { w: 'Übermorgen', role: 'r-time', en: 'the day after tomorrow', hi: 'परसों', pron: 'ÜBER-mor-gen', type: 'Adverb', why: 'übermorgen (this chapter).', ex: 'Übermorgen fahren wir los.', exEn: 'The day after tomorrow we set off.' },
      { w: 'beginnt', role: 'r-verb', en: 'begins', hi: 'शुरू होती है', pron: 'buh-GINT', type: 'Verb · beginnen' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · Nom.' },
      { w: 'lange', role: 'r-adjective', en: 'long', hi: 'लंबी', pron: 'LANG-uh', type: 'Adjektiv · Nom. fem. -e', why: 'Nominativ feminine -e (this chapter).', ex: 'die lange Anreise', exEn: 'the long journey' },
      { w: 'Anreise', role: 'r-subject', en: 'journey', hi: 'यात्रा', pron: 'AN-ry-zuh', type: 'Noun · fem.', why: 'die Anreise (this chapter).', ex: 'die lange Anreise', exEn: 'the long journey' },
      { w: 'in', role: 'r-akkusativ', en: 'to', hi: 'में', pron: 'in', type: 'Wechselpräposition' },
      { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'यह', pron: 'das', type: 'Article · Akk.' },
      { w: 'grüne', role: 'r-adjective', en: 'green', hi: 'हरा', pron: 'GRÜ-nuh', type: 'Adjektiv · Akk. neut. -e', why: 'Akkusativ neuter -e (this chapter).', ex: 'das grüne Tal', exEn: 'the green valley' },
      { w: 'Tal', role: 'r-akkusativ', en: 'valley', hi: 'घाटी', pron: 'tahl', type: 'Noun · neut.', why: 'das Tal (this chapter).', ex: 'das grüne Tal', exEn: 'the green valley' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · Nom.' },
      { w: 'erfahrene', role: 'r-adjective', en: 'experienced', hi: 'अनुभवी', pron: 'air-FAH-ren-uh', type: 'Adjektiv · Nom. masc. -e', why: 'Nominativ masculine -e (this chapter).', ex: 'der erfahrene Einwohner', exEn: 'the experienced inhabitant' },
      { w: 'Einwohner', role: 'r-subject', en: 'inhabitant', hi: 'निवासी', pron: 'INE-voh-ner', type: 'Noun · masc.', why: 'der Einwohner (this chapter).', ex: 'der erfahrene Einwohner', exEn: 'the experienced inhabitant' },
      { w: 'zeigt', role: 'r-verb', en: 'shows', hi: 'दिखाता है', pron: 'TSYKT', type: 'Verb · zeigen' },
      { w: 'uns', role: 'r-akkusativ', en: 'us', hi: 'हमें', pron: 'oons', type: 'Pronoun · Akk.' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · Akk.' },
      { w: 'schmalen', role: 'r-adjective', en: 'narrow', hi: 'तंग', pron: 'SHMAH-len', type: 'Adjektiv · Akk. masc. -en', why: 'Akkusativ masculine -en (this chapter).', ex: 'den schmalen Wanderweg', exEn: 'the narrow hiking trail' },
      { w: 'Wanderweg', role: 'r-akkusativ', en: 'hiking trail', hi: 'पैदल यात्रा मार्ग', pron: 'VAN-der-vayk', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'gehen', role: 'r-verb', en: 'go', hi: 'जाते हैं', pron: 'GAY-en', type: 'Verb · gehen' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · Akk.' },
      { w: 'steilen', role: 'r-adjective', en: 'steep', hi: 'ढालू', pron: 'SHTY-len', type: 'Adjektiv · Akk. masc. -en', why: 'Akkusativ masculine -en (this chapter).', ex: 'den steilen Weg hinunter', exEn: 'down the steep path' },
      { w: 'Weg', role: 'r-akkusativ', en: 'path', hi: 'रास्ता', pron: 'vayk', type: 'Noun · masc.' },
      { w: 'hinunter', role: 'r-adverb', en: 'down', hi: 'नीचे', pron: 'hi-NOON-ter', type: 'Adverb', why: 'hinunter (this chapter).', ex: 'den Weg hinunter', exEn: 'down the path' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'oont', type: 'Konjunktion' },
      { w: 'erreichen', role: 'r-verb', en: 'reach', hi: 'पहुँचते हैं', pron: 'air-RYE-khen', type: 'Verb · erreichen' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · Akk.' },
      { w: 'kalte', role: 'r-adjective', en: 'cold', hi: 'ठंडी', pron: 'KAL-tuh', type: 'Adjektiv · Akk. fem. -e', why: 'Akkusativ feminine -e (this chapter).', ex: 'die kalte Eishöhle', exEn: 'the cold ice cave' },
      { w: 'Eishöhle', role: 'r-akkusativ', en: 'ice cave', hi: 'बर्फ़ की गुफ़ा', pron: 'YCE-hö-luh', type: 'Noun · fem.', why: 'die Eishöhle (this chapter).', ex: 'die kalte Eishöhle', exEn: 'the cold ice cave' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · Nom.' },
      { w: 'ruhige', role: 'r-adjective', en: 'quiet', hi: 'शांत', pron: 'ROO-i-guh', type: 'Adjektiv · Nom. fem. -e', why: 'Nominativ feminine -e (this chapter).', ex: 'die ruhige Umgebung', exEn: 'the quiet surroundings' },
      { w: 'Umgebung', role: 'r-subject', en: 'surroundings', hi: 'आस-पास का क्षेत्र', pron: 'oom-GAY-boong', type: 'Noun · fem.', why: 'die Umgebung (this chapter).', ex: 'die ruhige Umgebung', exEn: 'the quiet surroundings' },
      { w: 'bietet', role: 'r-verb', en: 'offers', hi: 'देती है', pron: 'BEE-tet', type: 'Verb · bieten' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'AY-nen', type: 'Article · Akk.' },
      { w: 'schönen', role: 'r-adjective', en: 'beautiful', hi: 'सुंदर', pron: 'SHÖ-nen', type: 'Adjektiv · Akk. masc. -en', why: 'Akkusativ masculine -en (this chapter).', ex: 'einen schönen Kontrast', exEn: 'a beautiful contrast' },
      { w: 'Kontrast', role: 'r-akkusativ', en: 'contrast', hi: 'विरोधाभास', pron: 'kon-TRAST', type: 'Noun · masc.' },
      { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'से', pron: 'tsoor', type: 'Kontraktion · zu + der' },
      { w: 'Stadt', role: 'r-dativ', en: 'city', hi: 'शहर', pron: 'shtat', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'danken', role: 'r-verb', en: 'thank', hi: 'धन्यवाद देते हैं', pron: 'DAN-ken', type: 'Verb · danken' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article · Dat.' },
      { w: 'jungen', role: 'r-adjective', en: 'young', hi: 'युवा', pron: 'YOON-gen', type: 'Adjektiv · Dat. fem. -en', why: 'Dativ takes -en in every gender (this chapter).', ex: 'der jungen Führerin danken', exEn: 'to thank the young guide' },
      { w: 'Führerin', role: 'r-dativ', en: 'guide (f.)', hi: 'गाइड (महिला)', pron: 'FÜ-rer-in', type: 'Noun · fem.', why: 'die Führerin (this chapter).', ex: 'die junge Führerin', exEn: 'the young guide' },
      { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'fuer', type: 'Preposition · Akk.' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · Akk.' },
      { w: 'großen', role: 'r-adjective', en: 'big', hi: 'बड़ा', pron: 'GROH-sen', type: 'Adjektiv · Akk. masc. -en', why: 'Akkusativ masculine -en (this chapter).', ex: 'den großen Erfolg', exEn: 'the big success' },
      { w: 'Erfolg', role: 'r-akkusativ', en: 'success', hi: 'सफलता', pron: 'air-FOLK', type: 'Noun · masc.', why: 'der Erfolg (this chapter).', ex: 'den großen Erfolg feiern', exEn: 'to celebrate the big success' },
      { w: '.', plain: true }
    ],
    translation: 'The day after tomorrow, the long journey into the green valley begins. The experienced inhabitant shows us the narrow hiking trail. We go down the steep path and reach the cold ice cave. The quiet surroundings offer a beautiful contrast to the city. We thank the young guide (f.) for the big success. — Watch the endings switch: -e for Nominativ and Akkusativ fem./neut. (die lange Anreise, das grüne Tal, die kalte Eishöhle), -en for Akkusativ masc. and Dativ (den schmalen Wanderweg, der jungen Führerin, den großen Erfolg).'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_026_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ida, brauchst du die warme Jacke für das Wochenende?', en: 'Ida, do you need the warm jacket for the weekend?' },
      { id: 'A2_026_L002', speaker: 'Ida', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, und den großen Rucksack. Hast du die gute Karte dabei?', en: 'Yes, and the big backpack. Do you have the good map with you?' },
      { id: 'A2_026_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Klar, und ich packe auch das kleine Zelt ein.', en: 'Sure, and I\'ll also pack the small tent.' },
      { id: 'A2_026_L004', speaker: 'Ida', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Perfekt, dann fehlt nur noch das warme Essen für den Abend.', en: 'Perfect, then we just need the warm food for the evening.' }
    ],
    transcript: 'Ida, brauchst du die warme Jacke für das Wochenende? Ja, und den großen Rucksack. Hast du die gute Karte dabei? Klar, und ich packe auch das kleine Zelt ein. Perfekt, dann fehlt nur noch das warme Essen für den Abend.',
    translation: 'Ida, do you need the warm jacket for the weekend? Yes, and the big backpack. Do you have the good map with you? Sure, and I\'ll also pack the small tent. Perfect, then we just need the warm food for the evening.',
    tokens: [
      { w: 'Ida' },
      { w: ',', plain: true },
      { w: 'brauchst' },
      { w: 'du' },
      { w: 'die' },
      { w: 'warme' },
      { w: 'Jacke' },
      { w: 'für' },
      { w: 'das' },
      { w: 'Wochenende' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'den' },
      { w: 'großen' },
      { w: 'Rucksack' },
      { w: '.', plain: true },
      { w: 'Hast' },
      { w: 'du' },
      { w: 'die' },
      { w: 'gute' },
      { w: 'Karte' },
      { w: 'dabei' },
      { w: '?', plain: true },
      { w: 'Klar' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'ich' },
      { w: 'packe' },
      { w: 'auch' },
      { w: 'das' },
      { w: 'kleine' },
      { w: 'Zelt' },
      { w: 'ein' },
      { w: '.', plain: true },
      { w: 'Perfekt' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'fehlt' },
      { w: 'nur' },
      { w: 'noch' },
      { w: 'das' },
      { w: 'warme' },
      { w: 'Essen' },
      { w: 'für' },
      { w: 'den' },
      { w: 'Abend' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was braucht Ida außer der Jacke?', qEn: 'What does Ida need besides the jacket?', options: ['den großen Rucksack', 'das kleine Zelt', 'die gute Karte', 'das warme Essen'], optionsEn: ['the big rucksack', 'the small tent', 'the good card', 'the hot meal'], answer: 0,
        explain: '"Ja, und den großen Rucksack."' },
      { q: 'Was fehlt am Ende noch?', qEn: 'What is still missing at the end?', options: ['die Jacke', 'der Rucksack', 'das warme Essen', 'die Karte'], optionsEn: ['the jacket', 'the rucksack', 'the hot meal', 'the card'], answer: 2,
        explain: '"… dann fehlt nur noch das warme Essen für den Abend."' }
    ]
  },

  speaking: [
    { task: "Du wartest am Bahnhof auf einen Gast und beschreibst am Telefon, wen er sucht.", taskEn: "You're meeting a guest at the station and describe on the phone who to look for.", de: "Der große Mann mit der roten Jacke wartet neben dem Eingang.", en: "The tall man with the red jacket is waiting next to the entrance." },
    { task: "Eine Touristin fragt, was man in deiner Stadt sehen soll.", taskEn: "A tourist asks what to see in your town.", de: "Das alte Gebäude am Markt und der ruhige Park sind schön.", en: "The old building on the market square and the quiet park are lovely." },
    { task: "Deine Freundin sucht eine Wohnung wie deine. Beschreibe dein Zuhause.", taskEn: "Your friend wants a flat like yours. Describe your home.", de: "Die kleine Küche ist praktisch, aber das helle Zimmer ist am besten.", en: "The small kitchen is practical, but the bright room is the best part." },
    { task: "Im Geschäft fragt die Verkäuferin, welche Sachen du gern trägst.", taskEn: "In the shop the assistant asks what clothes you like wearing.", de: "Ich trage gern die bequeme Jacke und den warmen Pullover.", en: "I like wearing the comfortable jacket and the warm jumper." },
    { task: "Ein Kollege fragt nach deinem Lieblingsessen.", taskEn: "A colleague asks about your favourite food.", de: "Am liebsten esse ich den scharfen Reis mit dem frischen Salat.", en: "I like the spicy rice with the fresh salad best." },
    { task: "Die Anreise fällt wegen Schnee aus. Was sagst du der jungen Führerin?", taskEn: "The trip is cancelled because of snow. What do you say to the young guide?", de: "Die schlechte Nachricht ist hart. Aber die neue Tour im Tal ist auch schön.", en: "The bad news is hard. But the new tour in the valley is lovely too." },
    { task: "Dein Freund fragt: Wie war das Fußballspiel gestern?", taskEn: "Your friend asks: how was yesterday's football match?", de: "Das neue Stadion war voll, und die junge Mannschaft hat gewonnen.", en: "The new stadium was full, and the young team won." },
    { task: "Rollenspiel: Beschreibt zusammen ein Foto aus dem Kursbuch.", taskEn: "Role-play: describe a photo from the coursebook together.", de: "Auf dem Foto sitzt die freundliche Frau neben dem kleinen Kind.", en: "In the photo the friendly woman is sitting next to the small child." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short apartment or holiday description (six sentences), using at least five adjective+noun combinations after definite articles, covering at least Nominativ, Akkusativ and Dativ. Try this chapter\'s words: die Umgebung, das Tal, treu, kulturell.',
    starters: ['Der/Die/Das … ist …', 'Ich sehe den/die/das …', 'Wir helfen dem/der …'],
    placeholder: 'Die kleine Wohnung liegt in einer ruhigen Umgebung. Ich mag den großen Balkon …',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct ending: "Ich sehe den klein___ Hund."',
      options: ['-e', '-en', '-er'],
      answer: 1,
      explain: 'Akkusativ masculine (den) takes -en: den kleinen Hund.'
    },
    gap: {
      sentence: ['Wir helfen dem klein', ' Mann.'],
      gaps: [ { answer: 'en', accepts: ['en'] } ],
      explain: 'Dativ always takes -en: dem kleinen Mann.'
    },
    match: {
      q: 'Match each phrase to its case and gender.',
      pairs: [
        { noun: 'der kleine Hund', art: 'Nominativ, masculine' },
        { noun: 'den kleinen Hund', art: 'Akkusativ, masculine' },
        { noun: 'die kleine Tasche', art: 'Nominativ or Akkusativ, feminine' },
        { noun: 'dem kleinen Mann', art: 'Dativ, masculine' },
        { noun: 'die kleinen Kinder', art: 'plural (any case shown)' }
      ]
    },
    builder: {
      target: 'Build: "I see the small dog." (Akkusativ)',
      bank: ['Ich', 'sehe', 'den', 'kleinen', 'Hund', '.'],
      answer: ['Ich', 'sehe', 'den', 'kleinen', 'Hund', '.'],
      roles: { 'Ich': 'r-subject', 'sehe': 'r-verb', 'den': 'r-akkusativ', 'kleinen': 'r-adjective', 'Hund': 'r-akkusativ' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: '"Der klein___ Hund spielt." (Nominativ)', options: ['-e', '-en', '-es'], answer: 0,
      explain: 'Nominativ masculine takes -e: der kleine Hund.' },
    { q: '"Sie kauft die schön___ Tasche." (Akkusativ, feminine)', options: ['-e', '-en', '-er'], answer: 0,
      explain: 'Akkusativ feminine takes -e: die schöne Tasche.' },
    { q: '"Wir helfen dem klein___ Mann." (Dativ)', options: ['-e', '-en', '-em'], answer: 1,
      explain: 'Dativ always takes -en: dem kleinen Mann.' },
    { q: 'Which case/gender combination is the ONE Akkusativ exception that takes -en?', options: ['Akkusativ feminine', 'Akkusativ neuter', 'Akkusativ masculine'], answer: 2,
      explain: 'Akkusativ masculine (den) takes -en, unlike Akkusativ feminine/neuter which keep -e.' },
    { q: '"Die klein___ Kinder spielen." (plural)', options: ['-e', '-en', '-es'], answer: 1,
      explain: 'The entire plural takes -en, in every case.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-article', html: 'The definite article already shows gender and case, so the adjective almost always just adds <b>-e</b> or <b>-en</b>.' },
    { c: 'r-article', html: '<b>-e</b> appears only in Nominativ (all genders) and Akkusativ feminine/neuter: <span class="de">der kleine Mann, die kleine Frau, das kleine Kind, die kleine Tasche.</span>' },
    { c: 'r-article', html: '<b>-en</b> appears everywhere else: Akkusativ masculine, all of Dativ, and the whole plural: <span class="de">den kleinen Hund, dem kleinen Mann, die kleinen Kinder.</span>' }
  ],
  revisionTips: [
    'Dativ or plural? Always -en. Nominativ, or Akkusativ fem./neut.? -e. Akkusativ masculine? -en (the one exception).',
    'The article already carries gender and case — don\'t double-mark it on the adjective with anything other than -e/-en.',
    'When in doubt, check the article first: der/die/das/den/dem tell you exactly which ending the adjective needs.'
  ]
};

window.CHAPTER = CHAPTER;
