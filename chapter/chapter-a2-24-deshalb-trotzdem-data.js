/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 24
   "deshalb & trotzdem" — linking two main clauses to show
   result (deshalb) or unexpected contrast (trotzdem). Both are
   adverbs that trigger inversion: clause 1. Deshalb/Trotzdem +
   VERB + subject … No dennoch, hingegen, jedoch, obwohl, no B1
   connectors. This chapter teaches ONLY deshalb and trotzdem.
   Vocabulary source: uploaded chapter-24 list (~27 items; sports/
   outdoor theme — kitesurfen, die Mannschaft, der Wanderweg,
   der Wettbewerb). Recycles Ch.4 (weil) and A1 throughout.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-23-konjunktiv2-sollte-data.js exactly
   (flat vocab[], grammar[] rule cards, tokenized reading, etc.)
   so it runs on the shared chapter-app.js / chapter-tutor.js engine.

   SOURCE ISSUES corrected (flagged, not silently overridden):
   • "usw. - ASO" — garbled gloss → corrected to usw. = und so
     weiter (etc.), its standard meaning.
============================================================ */
const CHAPTER = {
  id: 'a2-24-deshalb-trotzdem',
  phase: 'A2 · Phase 2',
  number: 24,
  title: 'deshalb & trotzdem',
  titleEn: 'deshalb & trotzdem',
  description: 'Es regnet. Deshalb bleiben wir zu Hause. — a cause and its expected result. Es regnet. Trotzdem gehen wir spazieren. — a cause and an unexpected contrast. This chapter drills deshalb (therefore) and trotzdem (nevertheless), both of which trigger inversion: the connector takes position one, the verb slides into position two.',
  xp: 180,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 25, title: 'Goethe Mini 3', titleEn: 'Goethe Checkpoint 3' , href: 'chapter-a2-25-goethe-mini-3.html' },

  prevChapter: { number: 23, title: 'Konjunktiv II: sollte (Ratschläge)', titleEn: 'Konjunktiv II: sollte (advice)', href: 'chapter-a2-23-konjunktiv2-sollte.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'A grim forecast splits the class in two: some give in to the rain and stay home, Timo rides anyway. Merle uses the moment to drill the difference — deshalb for the outcome you\'d expect, trotzdem for the one that defies it — both triggering inversion.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear deshalb and trotzdem side by side'
    ],
    scene: 'Ein nebliger Samstagmorgen — Sprachschule Berlin',
    femaleSpeakers: ['Merle'],
    dialogue: [
      { speaker: 'Merle', tokens: [
        { w: 'Morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'soll', role: 'r-modalverb', en: 'is supposed to', hi: 'होना चाहिए', pron: 'zol', type: 'Modal · sollen' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'regnen', role: 'r-verb', en: 'rain', hi: 'बारिश होना', pron: 'RAYK-nen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true },
        { w: 'Deshalb', role: 'r-adverb', en: 'therefore', hi: 'इसलिए', pron: 'des-HALP', type: 'Adverb · connector', why: 'deshalb = therefore, causal link (this chapter).', ex: 'Es regnet, deshalb bleiben wir zu Hause.', exEn: 'It rains, therefore we stay home.' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Radtour', role: 'r-akkusativ', en: 'bike tour', hi: 'साइकिल यात्रा', pron: 'RAHT-toor', type: 'Noun · fem.', why: 'die Radtour (this chapter).', ex: 'Wir machen eine Radtour.', exEn: 'We do a bike tour.' },
        { w: 'verschieben', role: 'r-verb', en: 'postpone', hi: 'टाल देना', pron: 'fer-SHEE-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Tomorrow it is supposed to rain. Therefore we should postpone the bike tour.', hi: 'Kal baarish honi hai. Isliye humein cycle yatra taal deni chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector', why: 'trotzdem = nevertheless, concessive link (this chapter).', ex: 'Es regnet, trotzdem fahren wir.', exEn: 'It rains, nevertheless we go.' },
        { w: 'will', role: 'r-modalverb', en: 'want', hi: 'चाहता हूँ', pron: 'vil', type: 'Modal · wollen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'fahren', role: 'r-verb', en: 'ride', hi: 'जाना', pron: 'FAH-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'ली है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'Urlaub', role: 'r-akkusativ', en: 'vacation', hi: 'छुट्टी', pron: 'OOR-lowp', type: 'Noun · masc.' },
        { w: 'genommen', role: 'r-verb', en: 'taken', hi: 'ली', pron: 'ge-NO-men', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Nevertheless I want to ride. I have already taken vacation.', hi: 'Phir bhi main jaana chahta hoon. Maine pehle hi chhutti li hai.' },
      { speaker: 'Merle', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Bei', role: 'r-preposition', en: 'in', hi: 'में', pron: 'by', type: 'Preposition + dative' },
        { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Regen', role: 'r-dativ', en: 'rain (dat.)', hi: 'बारिश में', pron: 'RAY-gen', type: 'Noun · masc. dat.' },
        { w: 'wird', role: 'r-verb', en: 'will get', hi: 'हो जाएगा', pron: 'virt', type: 'Verb · werden' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Strecke', role: 'r-subject', en: 'route', hi: 'रास्ता', pron: 'SHTRE-kuh', type: 'Noun · fem.', why: 'die Strecke (this chapter).', ex: 'Die Strecke ist lang.', exEn: 'The route is long.' },
        { w: 'gefährlich', role: 'r-subject', en: 'dangerous', hi: 'ख़तरनाक', pron: 'ge-FAIR-likh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Really? In the rain the route will become dangerous.', hi: 'Sach mein? Baarish mein raasta khatarnaak ho jayega.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Deshalb', role: 'r-adverb', en: 'therefore', hi: 'इसलिए', pron: 'des-HALP', type: 'Adverb · connector' },
        { w: 'fahre', role: 'r-verb', en: 'ride', hi: 'जाता हूँ', pron: 'FAH-ruh', type: 'Verb · fahren (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'langsamer', role: 'r-adverb', en: 'more slowly', hi: 'धीरे', pron: 'LANG-za-mer', type: 'Adverb · Komparativ', why: 'langsam → langsamer (recycled Ch8).' },
        { w: '.', plain: true },
        { w: 'Trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: 'bleibe', role: 'r-verb', en: 'remain', hi: 'रहता हूँ', pron: 'BLY-buh', type: 'Verb · bleiben (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'vorsichtig', role: 'r-adjective', en: 'careful', hi: 'सावधान', pron: 'FOR-zikh-tikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Therefore I ride more slowly. Nevertheless I remain careful.', hi: 'Isliye main dheere jaata hoon. Phir bhi main saavdhaan rehta hoon.' },
      { speaker: 'Merle', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: 'mache', role: 'r-verb', en: 'make', hi: 'करती हूँ', pron: 'MA-khuh', type: 'Verb · machen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mir', role: 'r-dativ', en: 'myself', hi: 'ख़ुद को', pron: 'meer', type: 'Reflexive pronoun' },
        { w: 'Sorgen', role: 'r-akkusativ', en: 'worries', hi: 'चिंता', pron: 'ZOR-gen', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'Good. Nevertheless I worry.', hi: 'Achha. Phir bhi mujhe chinta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Deshalb', role: 'r-adverb', en: 'therefore', hi: 'इसलिए', pron: 'des-HALP', type: 'Adverb · connector' },
        { w: 'rufe', role: 'r-verb', en: 'will call', hi: 'कॉल करूंगा', pron: 'ROO-fuh', type: 'Verb · anrufen (ich)', lexicalUnit: 'anrufen' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'dich', role: 'r-akkusativ', en: 'you', hi: 'तुम्हें', pron: 'dikh', type: 'Pronoun · acc.' },
        { w: 'unterwegs', role: 'r-adverb', en: 'on the way', hi: 'रास्ते में', pron: 'un-ter-VAYKS', type: 'Adverb' },
        { w: 'an', role: 'r-verb', en: '(prefix of anrufen)', hi: 'कॉल', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anrufen' },
        { w: '.', plain: true }
      ], en: 'Therefore I will call you on the way.', hi: 'Isliye main tumhe raaste mein call karunga.' },
      { speaker: 'Merle', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'mache', role: 'r-verb', en: 'make', hi: 'कम करती हूँ', pron: 'MA-khuh', type: 'Verb · machen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mir', role: 'r-dativ', en: 'myself', hi: 'ख़ुद को', pron: 'meer', type: 'Reflexive pronoun' },
        { w: 'weniger', role: 'r-akkusativ', en: 'less', hi: 'कम', pron: 'VAY-ni-ger', type: 'Adverb' },
        { w: 'Sorgen', role: 'r-akkusativ', en: 'worries', hi: 'चिंता', pron: 'ZOR-gen', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'Thanks! Then I will worry less.', hi: 'Dhanyavaad! Phir mujhe kam chinta hogi.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de">Es regnet. <span class="r-conjunction">Deshalb</span> bleiben wir zu Hause.</span> — the fog outside causes an expected result. <span class="de">Es regnet. <span class="r-conjunction">Trotzdem</span> gehen wir spazieren.</span> — the same fact, but an unexpected contrast. Both <strong>deshalb</strong> (therefore, result) and <strong>trotzdem</strong> (nevertheless, contrast) are adverbs that occupy position one of their own clause — and because a German clause always keeps its verb in position two, the <strong>verb comes right after</strong>: Clause 1. <span class="de">Deshalb/Trotzdem</span> <b>VERB</b> subject …'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is DESHALB (therefore, result) & TROTZDEM (nevertheless, contrast) linking two main clauses. ' +
    'No dennoch, hingegen, jedoch, obwohl, no B1 connectors. The learner wrote sentence pairs below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- deshalb/trotzdem occupy position one of their clause, and the conjugated verb must come immediately after in position two: "Es regnet. Deshalb bleiben wir zu Hause." Flag "Deshalb ich gehe" or "Trotzdem ich bleibe" (subject before verb) as wrong — should be "Deshalb gehe ich" / "Trotzdem bleibe ich".\n' +
    '- deshalb marks a logical result of the first clause; trotzdem marks an unexpected contrast. Flag deshalb used where the second clause plainly contradicts the first (should be trotzdem), and vice versa.\n' +
    '- weil and deshalb express the same logical relationship from different sentence positions — weil opens a subordinate clause with the verb at the end (Ich bleibe zu Hause, weil es regnet.), deshalb opens a second main clause with inverted verb (Es regnet. Deshalb bleibe ich zu Hause.). Flag "weil" and "deshalb" combined in one sentence (redundant).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>deshalb vs. trotzdem check:</b> one sentence on whether the learner picked result vs. contrast correctly.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You link cause and contrast confidently with deshalb and trotzdem, and the verb always lands in position two. Next: a Goethe-style checkpoint across this whole phase.',
    mid: 'Good. Re-read the word-order card once (connector, then verb, then subject), then continue.',
    low: 'Worth another pass — remember: deshalb marks an expected result, trotzdem marks an unexpected contrast, and both push the verb into position two. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Es', role: 'r-subject' }, { w: 'regnet', role: 'r-verb' },
    { w: '.', role: 'plain' }, { w: 'Trotzdem', role: 'r-conjunction' },
    { w: 'gehen', role: 'r-verb' }, { w: 'wir', role: 'r-subject' },
    { w: 'spazieren', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how deshalb marks a result and trotzdem marks a contrast.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A foggy Saturday full of deshalb results and trotzdem twists.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: der Wettbewerb, die Mannschaft, faszinierend, unglaublich.' },
    { id: 'grammar',    label: 'deshalb & trotzdem', tag: 'core',
      objective: 'Master the word order, deshalb vs. trotzdem, the weil comparison, and the classic mistakes.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read an outdoor-sports story full of deshalb and trotzdem.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each deshalb/trotzdem use in a weekend-planning call.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Explain consequences and describe unexpected situations.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a short story or email using deshalb and trotzdem.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill word order, deshalb vs. trotzdem, and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 180 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The chapter\'s outdoor-sports words — der Wettbewerb, die Mannschaft, der Wanderweg, kitesurfen — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'deshalb/trotzdem word-order drills, deshalb vs. trotzdem sorting, and a short-story writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '7 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full word-order table, the weil vs. deshalb comparison, common mistakes, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '6 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Es regnet. Deshalb bleiben wir zu Hause.', text: 'Show a logical result' },
    { de: 'Es regnet. Trotzdem gehen wir spazieren.', text: 'Show an unexpected contrast' },
    { de: 'Deshalb/Trotzdem + VERB + Subjekt', text: 'Keep the verb in position two' },
    { de: 'weil (reason) vs. deshalb (result)', text: 'Tell the two connectors apart' },
    { de: 'Reason? weil. Result? deshalb. Contrast? trotzdem.', text: 'Choose the right connector every time' }
  ],

  // ---------- Vocabulary (~27 items) ----------
  vocab: [
    { de: 'bewachen', pos: 'verb', en: 'to guard', hi: 'रक्षा करना', ex: 'Deshalb sollten wir die Autos bewachen.', exEn: 'Therefore we should guard the cars.', conj: { praesens: 'bewacht', praeteritum: 'bewachte', perfekt: 'hat bewacht' } },
    { de: 'Cousine', art: 'die', gender: 'f', plural: 'Cousinen', pos: 'noun', en: 'cousin (f.)', hi: 'कज़िन (महिला)', ex: 'Meine Cousine macht Kitesurfen im Winter.', exEn: 'My cousin goes kitesurfing in winter.' },
    { de: 'Fanseite', art: 'die', gender: 'f', plural: 'Fanseiten', pos: 'noun', en: 'fan page', hi: 'फैन पेज', ex: 'Ich habe die Fanseite der Mannschaft abonniert.', exEn: 'I subscribed to the team\'s fan page.' },
    { de: 'faszinierend', pos: 'adjective', en: 'fascinating', hi: 'आकर्षक', ex: 'Das ist faszinierend.', exEn: 'That is fascinating.' },
    { de: 'Gebiet', art: 'das', gender: 'n', plural: 'Gebiete', pos: 'noun', en: 'area', hi: 'क्षेत्र', ex: 'Der Wettbewerb findet in diesem Gebiet statt.', exEn: 'The competition takes place in this area.' },
    { de: 'genial', pos: 'adjective', en: 'impressive', hi: 'शानदार', ex: 'Genial gemacht!', exEn: 'Impressively done!' },
    { de: 'Höhle', art: 'die', gender: 'f', plural: 'Höhlen', pos: 'noun', en: 'cave', hi: 'गुफ़ा', ex: 'Eine Mannschaft hat eine Höhle erkundet.', exEn: 'A team explored a cave.' },
    { de: 'langlaufen', pos: 'verb', en: 'to cross-country ski', hi: 'क्रॉस-कंट्री स्कीइंग करना', ex: 'Es ist kalt, trotzdem geht sie langlaufen.', exEn: 'It is cold, nevertheless she goes cross-country skiing.', conj: { praesens: 'läuft lang', praeteritum: 'lief lang', perfekt: 'ist langgelaufen' } },
    { de: 'Nebel', art: 'der', gender: 'm', plural: 'Nebel', pos: 'noun', en: 'fog', hi: 'कोहरा', ex: 'Draußen ist dichter Nebel.', exEn: 'Outside is thick fog.' },
    { de: 'neulich', pos: 'adverb', en: 'recently', hi: 'हाल ही में', ex: 'Neulich habe ich eine Sendung über den Wettbewerb gesehen.', exEn: 'Recently I saw a programme about the competition.' },
    { de: 'Radtour', art: 'die', gender: 'f', plural: 'Radtouren', pos: 'noun', en: 'bike ride', hi: 'साइकिल यात्रा', ex: 'Trotzdem könnten wir eine Radtour machen.', exEn: 'Nevertheless, we could go on a bike ride.' },
    { de: 'Schläger', art: 'der', gender: 'm', plural: 'Schläger', pos: 'noun', en: 'bat, racket', hi: 'बैट/रैकेट', ex: 'Deshalb brauche ich einen neuen Schläger.', exEn: 'Therefore I need a new bat.' },
    { de: 'Sendung', art: 'die', gender: 'f', plural: 'Sendungen', pos: 'noun', en: 'programme', hi: 'कार्यक्रम', ex: 'Ich habe eine Sendung über einen Wettbewerb gesehen.', exEn: 'I saw a programme about a competition.' },
    { de: 'Strecke', art: 'die', gender: 'f', plural: 'Strecken', pos: 'noun', en: 'route', hi: 'मार्ग', ex: 'Wir könnten eine Radtour auf einer trockenen Strecke machen.', exEn: 'We could go on a bike ride on a dry route.' },
    { de: 'surfen', pos: 'verb', en: 'to surf', hi: 'सर्फ़ करना', ex: 'Trotzdem surft sie jeden Tag.', exEn: 'Nevertheless, she surfs every day.', conj: { praesens: 'surft', praeteritum: 'surfte', perfekt: 'hat gesurft' } },
    { de: 'trocken', pos: 'adjective', en: 'dry', hi: 'सूखा', ex: 'Wir suchen eine trockene Strecke.', exEn: 'We are looking for a dry route.' },
    { de: 'unglaublich', pos: 'adjective', en: 'unbelievable', hi: 'अविश्वसनीय', ex: 'Unglaublich! Sie surft im Winter.', exEn: 'Unbelievable! She surfs in winter.' },
    { de: 'usw.', pos: 'phrase', en: 'und so weiter (etc.)', hi: 'वग़ैरह', ex: 'Wir brauchen Schläger, Klettergurte usw.', exEn: 'We need bats, harnesses, etc.' },
    { de: 'verstärken', pos: 'verb', en: 'to reinforce, to intensify', hi: 'तेज़ करना', ex: 'Der Nebel verstärkt sich. Deshalb sollten wir vorsichtig sein.', exEn: 'The fog is intensifying. Therefore we should be careful.', conj: { praesens: 'verstärkt', praeteritum: 'verstärkte', perfekt: 'hat verstärkt' } },
    { de: 'Vorbild', art: 'das', gender: 'n', plural: 'Vorbilder', pos: 'noun', en: 'role model', hi: 'आदर्श', ex: 'Das klingt nach einem Vorbild.', exEn: 'That sounds like a role model.' },
    { de: 'Wanderweg', art: 'der', gender: 'm', plural: 'Wanderwege', pos: 'noun', en: 'hiking trail', hi: 'पैदल यात्रा मार्ग', ex: 'Deshalb fahren wir nicht zum Wanderweg.', exEn: 'Therefore we\'re not driving to the hiking trail.' },
    { de: 'Wettbewerb', art: 'der', gender: 'm', plural: 'Wettbewerbe', pos: 'noun', en: 'competition', hi: 'प्रतियोगिता', ex: 'Ich habe eine Sendung über einen Wettbewerb gesehen.', exEn: 'I saw a programme about a competition.' },
    { de: 'Fanartikel', art: 'der', gender: 'm', plural: 'Fanartikel', pos: 'noun', en: 'team merchandise', hi: 'टीम की वस्तुएं', ex: 'Ich sammle Fanartikel, obwohl ich nie klettere.', exEn: 'I collect team merchandise, even though I never climb.' },
    { de: 'Kitesurfen', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'kitesurfing', hi: 'काइटसर्फिंग', ex: 'Meine Cousine macht Kitesurfen im Winter.', exEn: 'My cousin goes kitesurfing in winter.' },
    { de: 'Klettergurt', art: 'der', gender: 'm', plural: 'Klettergurte', pos: 'noun', en: 'harness', hi: 'सुरक्षा बेल्ट', ex: 'Sie braucht einen Klettergurt für Sicherheit.', exEn: 'She needs a harness for safety.' },
    { de: 'Mannschaft', art: 'die', gender: 'f', plural: 'Mannschaften', pos: 'noun', en: 'team', hi: 'टीम', ex: 'Eine Mannschaft hat eine Höhle erkundet.', exEn: 'A team explored a cave.' },
    { de: 'Widerspruch', art: 'der', gender: 'm', plural: 'Widersprüche', pos: 'noun', en: 'contradiction', hi: 'विरोधाभास', ex: 'Das wäre ein Widerspruch.', exEn: 'That would be a contradiction.' }
  ],

  // ---------- deshalb & trotzdem (rule cards) ----------
  grammar: [
    {
      title: 'deshalb and trotzdem — result vs. contrast',
      body: [
        'Both connect two main clauses. <span class="de r-conjunction">deshalb</span> (therefore) marks the expected result of the first clause. <span class="de r-conjunction">trotzdem</span> (nevertheless) marks an unexpected contrast.'
      ],
      table: {
        head: ['Connector', 'Meaning', 'Example'],
        rows: [
          ['<span class="de r-conjunction">deshalb</span>', 'therefore, that\'s why (result)', '<span class="de">Ich bin krank. Deshalb bleibe ich zu Hause.</span>'],
          ['<span class="de r-conjunction">trotzdem</span>', 'nevertheless, however (contrast)', '<span class="de">Es regnet. Trotzdem gehen wir spazieren.</span>']
        ]
      },
      note: 'Both are adverbs, not subordinating conjunctions — they connect two separate main clauses, each with its own full sentence structure.',
      hinglish: 'deshalb = isliye (expected result). trotzdem = phir bhi (unexpected contrast). Dono do alag main clauses ko jodte hain.'
    },
    {
      title: 'Word order — connector, then verb',
      body: [
        'deshalb and trotzdem occupy position one of their clause. Because the verb always stays in position two, it comes immediately after the connector — before the subject.'
      ],
      table: {
        head: ['Position 1', 'Position 2 (verb)', 'Subject + rest'],
        rows: [
          ['<span class="de r-conjunction">Deshalb</span>', '<span class="de">bleibe</span>', '<span class="de">ich zu Hause.</span>'],
          ['<span class="de r-conjunction">Trotzdem</span>', '<span class="de">gehen</span>', '<span class="de">wir spazieren.</span>'],
          ['<span class="de r-conjunction">Deshalb</span>', '<span class="de">nehmen</span>', '<span class="de">wir einen Regenschirm.</span>']
        ]
      },
      note: 'This is the same inversion pattern as any position-one adverb: connector → verb → subject → rest.',
      hinglish: '<b>deshalb</b> aur <b>trotzdem</b> clause ke position 1 par aate hain, isliye verb position 2 par aa jaata hai \u2014 matlab connector ke seedhe baad, subject se pehle.'
    },
    {
      title: 'weil vs. deshalb',
      body: [
        'weil and deshalb express the same cause-and-result idea, but from opposite directions and with different word order. weil opens a subordinate clause (verb at the end); deshalb opens a second main clause (verb in position two).'
      ],
      table: {
        head: ['weil (reason, subordinate)', 'deshalb (result, main clause)'],
        rows: [
          ['<span class="de">Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.</span>', '<span class="de">Ich möchte in Deutschland arbeiten. Deshalb lerne ich Deutsch.</span>'],
          ['<span class="de">Ich bin krank, weil ich Fieber habe.</span>', '<span class="de">Ich habe Fieber. Deshalb bleibe ich zu Hause.</span>']
        ]
      },
      note: 'Never combine weil and deshalb in the same sentence — pick one direction and stick with it.',
      hinglish: '<b>weil</b> aur <b>deshalb</b> ek hi cause-result idea batate hain, par ulti direction se. <b>weil</b> ek subordinate clause banata hai jisme verb end mein jaata hai, aur <b>deshalb</b> ek naya main clause shuru karta hai jisme verb position 2 par rehta hai. Dono ko ek hi sentence mein saath nahi jodna.'
    },
    {
      title: 'Common learner mistakes',
      body: [
        '<span class="de strike">Deshalb ich gehe.</span> → <span class="de">Deshalb gehe ich.</span> — the verb must come right after deshalb, before the subject.',
        '<span class="de strike">Trotzdem ich bleibe.</span> → <span class="de">Trotzdem bleibe ich.</span> — same rule for trotzdem.',
        '<span class="de strike">Ich bin müde, weil deshalb ich schlafe.</span> → <span class="de">Ich bin müde. Deshalb schlafe ich.</span> — never stack weil and deshalb together.',
        '<span class="de strike">Trotzdem weil es regnet, gehen wir.</span> → <span class="de">Es regnet. Trotzdem gehen wir.</span> — trotzdem and weil don\'t combine into one connector.'
      ],
      hinglish: 'Do galtiyan common hain. <b>deshalb</b> aur <b>trotzdem</b> ke baad seedha verb aata hai aur subject uske baad. Aur <b>weil</b> aur <b>deshalb</b> ko ek saath nahi jodna hai \u2014 ek hi kaafi hai.'
    },
    {
      title: 'Quick decision guide',
      body: [ 'One question decides the connector every time.' ],
      table: {
        head: ['Need to…', 'Use'],
        rows: [
          ['give a reason (subordinate clause)?', '→ <span class="de">weil</span>'],
          ['show the expected result (new main clause)?', '→ <span class="de r-conjunction">deshalb</span>'],
          ['show an unexpected contrast (new main clause)?', '→ <span class="de r-conjunction">trotzdem</span>']
        ]
      },
      hinglish: 'Reason (subordinate clause) chahiye? weil. Result dikhana hai? deshalb. Unexpected contrast dikhana hai? trotzdem.'
    }
  ],

  // ---------- Reading passage (Ein Wochenende trotz Nebel, clickable) ----------
  reading: {
    title: 'Ein Wochenende trotz Nebel',
    titleEn: 'A weekend despite the fog',
    tokens: [
      { w: 'Am', role: 'r-time', en: 'on', hi: 'को', pron: 'am', type: 'Preposition · contraction' },
      { w: 'Samstagmorgen', role: 'r-time', en: 'Saturday morning', hi: 'शनिवार सुबह', pron: 'ZAMS-tahk-mor-gen', type: 'Noun · masc.' },
      { w: 'liegt', role: 'r-verb', en: 'lies', hi: 'रहता है', pron: 'leegt', type: 'Verb · liegen' },
      { w: 'dichter', role: 'r-adjective', en: 'thick', hi: 'घना', pron: 'DIKH-ter', type: 'Adjective' },
      { w: 'Nebel', role: 'r-subject', en: 'fog', hi: 'कोहरा', pron: 'NAY-bel', type: 'Noun · masc.', why: 'der Nebel (this chapter).', ex: 'dichter Nebel liegt über der Stadt', exEn: 'thick fog lies over the city' },
      { w: 'über', role: 'r-wechsel', en: 'over', hi: 'ऊपर', pron: 'UE-ber', type: 'Wechselpräposition' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'यह', pron: 'dair', type: 'Article · dative' },
      { w: 'Stadt', role: 'r-dativ', en: 'city', hi: 'शहर', pron: 'shtat', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Deshalb', role: 'r-conjunction', en: 'therefore', hi: 'इसलिए', pron: 'des-HALP', type: 'Konnektor · deshalb', why: 'deshalb — expected result: fog, so cancel the trail plan (this chapter).', ex: 'Deshalb fahren die Freunde nicht zum Wanderweg.', exEn: 'Therefore the friends don\'t drive to the hiking trail.' },
      { w: 'fahren', role: 'r-verb', en: 'drive', hi: 'चलाते हैं', pron: 'FAH-ren', type: 'Verb · fahren' },
      { w: 'die', role: 'r-subject', en: 'the (plural)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Freunde', role: 'r-subject', en: 'friends', hi: 'दोस्त', pron: 'FROYN-duh', type: 'Noun · plural' },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
      { w: 'zum', role: 'r-preposition', en: 'to the', hi: 'तक', pron: 'tsoom', type: 'Kontraktion · zu + dem' },
      { w: 'Wanderweg', role: 'r-dativ', en: 'hiking trail', hi: 'पैदल यात्रा मार्ग', pron: 'VAN-der-vayk', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Stattdessen', role: 'r-adverb', en: 'instead', hi: 'इसके बजाय', pron: 'shtat-DE-sen', type: 'Adverb' },
      { w: 'sehen', role: 'r-verb', en: 'watch', hi: 'देखते हैं', pron: 'ZAY-en', type: 'Verb · sehen' },
      { w: 'sie', role: 'r-subject', en: 'they', hi: 'वे', pron: 'zee', type: 'Pronoun' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'AY-nuh', type: 'Article · acc.' },
      { w: 'Sendung', role: 'r-akkusativ', en: 'programme', hi: 'कार्यक्रम', pron: 'ZEN-doong', type: 'Noun · fem.', why: 'die Sendung (this chapter).', ex: 'eine Sendung sehen', exEn: 'to watch a programme' },
      { w: 'über', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'UE-ber', type: 'Preposition · Akk.' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'AY-nen', type: 'Article · acc.' },
      { w: 'Wettbewerb', role: 'r-akkusativ', en: 'competition', hi: 'प्रतियोगिता', pron: 'VET-buh-vairp', type: 'Noun · masc.', why: 'der Wettbewerb (this chapter).', ex: 'eine Sendung über einen Wettbewerb', exEn: 'a programme about a competition' },
      { w: 'im', role: 'r-place', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition · contraction' },
      { w: 'Gebiet', role: 'r-place', en: 'area', hi: 'क्षेत्र', pron: 'guh-BEET', type: 'Noun · neut.', why: 'das Gebiet (this chapter).', ex: 'im Gebiet der Alpen', exEn: 'in the area of the Alps' },
      { w: 'der', role: 'r-place', en: 'of the', hi: 'का', pron: 'dair', type: 'Article · Gen.' },
      { w: 'Alpen', role: 'r-place', en: 'Alps', hi: 'आल्प्स', pron: 'AL-pen', type: 'Ort' },
      { w: '.', plain: true },
      { w: 'Eine', role: 'r-subject', en: 'a (fem.)', hi: 'एक', pron: 'AY-nuh', type: 'Article' },
      { w: 'Mannschaft', role: 'r-subject', en: 'team', hi: 'टीम', pron: 'MAN-shaft', type: 'Noun · fem.', why: 'die Mannschaft (this chapter).', ex: 'eine Mannschaft', exEn: 'a team' },
      { w: 'erkundet', role: 'r-verb', en: 'explores', hi: 'खोजती है', pron: 'air-KOON-det', type: 'Verb · erkunden' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'AY-nuh', type: 'Article · acc.' },
      { w: 'Höhle', role: 'r-akkusativ', en: 'cave', hi: 'गुफ़ा', pron: 'HÖ-luh', type: 'Noun · fem.', why: 'die Höhle (this chapter).', ex: 'eine Höhle erkunden', exEn: 'to explore a cave' },
      { w: '.', plain: true },
      { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'faszinierend', role: 'r-adjective', en: 'fascinating', hi: 'आकर्षक', pron: 'fas-tsi-NEE-rent', type: 'Adjective', why: 'faszinierend (this chapter).', ex: 'Das ist faszinierend.', exEn: 'That is fascinating.' },
      { w: '.', plain: true },
      { w: 'Draußen', role: 'r-place', en: 'outside', hi: 'बाहर', pron: 'DROW-sen', type: 'Adverb' },
      { w: 'bleibt', role: 'r-verb', en: 'stays', hi: 'रहता है', pron: 'BLYPT', type: 'Verb · bleiben' },
      { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Nebel', role: 'r-subject', en: 'fog', hi: 'कोहरा', pron: 'NAY-bel', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Trotzdem', role: 'r-conjunction', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DEM', type: 'Konnektor · trotzdem', why: 'trotzdem — unexpected contrast: fog, but they still go out (this chapter).', ex: 'Trotzdem gehen einige joggen.', exEn: 'Nevertheless, some go jogging.' },
      { w: 'gehen', role: 'r-verb', en: 'go', hi: 'जाते हैं', pron: 'GAY-en', type: 'Verb · gehen' },
      { w: 'einige', role: 'r-subject', en: 'some', hi: 'कुछ', pron: 'INE-i-guh', type: 'Pronoun' },
      { w: 'Freunde', role: 'r-subject', en: 'friends', hi: 'दोस्त', pron: 'FROYN-duh', type: 'Noun · plural' },
      { w: 'joggen', role: 'r-verb', en: 'jogging', hi: 'जॉगिंग', pron: 'DSHO-gen', type: 'Infinitive' },
      { w: '.', plain: true }
    ],
    translation: 'On Saturday morning, thick fog lies over the city. Therefore the friends don\'t drive to the hiking trail. Instead, they watch a programme about a competition in the Alps area. A team explores a cave. That is fascinating. Outside, the fog stays. Nevertheless, some friends go jogging. — Watch the two connectors: deshalb (fog → they cancel the plan, expected) and trotzdem (fog is still there → some go out anyway, unexpected).'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_024_L001', speaker: 'Merle', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, es regnet stark. Fährst du trotzdem mit dem Rad?', en: 'Timo, it\'s raining hard. Are you cycling anyway?' },
      { id: 'A2_024_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ja, ich fahre trotzdem, ich mag Regen nicht so sehr, aber ich muss zur Arbeit.', en: 'Yes, I\'m going anyway. I don\'t like rain that much, but I have to get to work.' },
      { id: 'A2_024_L003', speaker: 'Merle', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und ich bleibe deshalb heute lieber zu Hause.', en: 'And I\'d therefore rather stay home today.' },
      { id: 'A2_024_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Verständlich! Bis morgen dann.', en: 'Understandable! See you tomorrow then.' }
    ],
    transcript: 'Timo, es regnet stark. Fährst du trotzdem mit dem Rad? Ja, ich fahre trotzdem, ich mag Regen nicht so sehr, aber ich muss zur Arbeit. Und ich bleibe deshalb heute lieber zu Hause. Verständlich! Bis morgen dann.',
    translation: 'Timo, it\'s raining hard. Are you cycling anyway? Yes, I\'m going anyway. I don\'t like rain that much, but I have to get to work. And I\'d therefore rather stay home today. Understandable! See you tomorrow then.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'es' },
      { w: 'regnet' },
      { w: 'stark' },
      { w: '.', plain: true },
      { w: 'Fährst' },
      { w: 'du' },
      { w: 'trotzdem' },
      { w: 'mit' },
      { w: 'dem' },
      { w: 'Rad' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'fahre' },
      { w: 'trotzdem' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'mag' },
      { w: 'Regen' },
      { w: 'nicht' },
      { w: 'so' },
      { w: 'sehr' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'muss' },
      { w: 'zur' },
      { w: 'Arbeit' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'ich' },
      { w: 'bleibe' },
      { w: 'deshalb' },
      { w: 'heute' },
      { w: 'lieber' },
      { w: 'zu' },
      { w: 'Hause' },
      { w: '.', plain: true },
      { w: 'Verständlich' },
      { w: '!', plain: true },
      { w: 'Bis' },
      { w: 'morgen' },
      { w: 'dann' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum bleibt Merle zu Hause?', qEn: 'Why does Merle stay home?', options: ['Sie ist krank.', 'Es regnet stark.', 'Sie hat keine Zeit.', 'Sie mag Timo nicht.'], optionsEn: ['She is ill.', 'It is raining hard.', 'She has no time.', 'She doesn\'t like Timo.'], answer: 1,
        explain: '"Es regnet stark" → "ich bleibe deshalb … zu Hause."' },
      { q: 'Fährt Timo trotz des Regens Rad?', qEn: 'Does Timo cycle despite the rain?', options: ['Nein, er bleibt zu Hause', 'Ja, trotzdem', 'Er nimmt den Bus', 'Er weiß es nicht'], optionsEn: ['No, he stays at home', 'Yes, even so', 'He takes the bus', 'He doesn\'t know'], answer: 1,
        explain: '"Ja, ich fahre trotzdem."' }
    ]
  },

  speaking: [
    { task: "Dein Freund fragt: Warum bist du nicht surfen gegangen?", taskEn: "Your friend asks: why didn't you go surfing?", de: "Es war Nebel, deshalb bin ich zu Hause geblieben.", en: "It was foggy, so I stayed at home." },
    { task: "Deine Cousine fragt: Wie war die Radtour bei dem Wetter?", taskEn: "Your cousin asks: how was the bike ride in that weather?", de: "Es hat geregnet, trotzdem war die Strecke genial.", en: "It rained, but the route was brilliant anyway." },
    { task: "Dein Freund fragt: Warum kennst du den Wanderweg so gut?", taskEn: "Your friend asks: why do you know the trail so well?", de: "Ich wohne hier, deshalb kenne ich das Gebiet gut.", en: "I live here, so I know the area well." },
    { task: "Deine Freundin fragt: Warst du bei dem Wettbewerb dabei?", taskEn: "Your friend asks: were you at the competition?", de: "Ich war krank, trotzdem bin ich hingegangen.", en: "I was ill, but I went anyway." },
    { task: "Dein Kollege fragt: Warum hast du die Sendung nicht gesehen?", taskEn: "Your colleague asks: why didn't you watch the programme?", de: "Ich hatte keine Zeit, deshalb habe ich sie nicht gesehen.", en: "I had no time, so I didn't watch it." },
    { task: "Dein Freund fragt: War die Höhle nicht gefährlich?", taskEn: "Your friend asks: wasn't the cave dangerous?", de: "Es war dunkel, trotzdem war es unglaublich.", en: "It was dark, but it was incredible anyway." },
    { task: "Deine Schwester fragt: Warum ist er dein Vorbild?", taskEn: "Your sister asks: why is he your role model?", de: "Er trainiert jeden Tag, deshalb ist er mein Vorbild.", en: "He trains every day, that's why he's my role model." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short story or email (six sentences) about a weekend or trip, using at least two deshalb sentences and two trotzdem sentences. Try this chapter\'s words: der Wettbewerb, die Mannschaft, faszinierend, unglaublich.',
    starters: ['Es regnet. Deshalb …', 'Ich bin müde. Trotzdem …', 'Der Wettbewerb war …', 'Trotzdem …'],
    placeholder: 'Am Wochenende war das Wetter schlecht. Deshalb …',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct sentence order: "Es ist kalt." + result',
      options: ['Deshalb ich bleibe zu Hause.', 'Deshalb bleibe ich zu Hause.', 'Ich deshalb bleibe zu Hause.'],
      answer: 1,
      explain: 'deshalb takes position one, the verb (bleibe) comes right after in position two.'
    },
    gap: {
      sentence: ['Es regnet. ', ' gehen wir spazieren.'],
      gaps: [ { answer: 'Trotzdem', accepts: ['Trotzdem'] } ],
      explain: 'Rain followed by going for a walk is an unexpected contrast — trotzdem.'
    },
    match: {
      q: 'Match each first clause to its correct continuation.',
      pairs: [
        { noun: 'Ich bin krank.', art: 'Deshalb bleibe ich zu Hause.' },
        { noun: 'Es regnet.', art: 'Trotzdem gehen wir spazieren.' },
        { noun: 'Ich bin müde.', art: 'Trotzdem arbeite ich weiter.' },
        { noun: 'Es ist Nebel.', art: 'Deshalb fahren wir langsam.' },
        { noun: 'Der Nebel verstärkt sich.', art: 'Deshalb sollten wir vorsichtig sein.' }
      ]
    },
    builder: {
      target: 'Build: "Therefore we take an umbrella."',
      bank: ['Deshalb', 'nehmen', 'wir', 'einen', 'Regenschirm', '.'],
      answer: ['Deshalb', 'nehmen', 'wir', 'einen', 'Regenschirm', '.'],
      roles: { 'Deshalb': 'r-conjunction', 'nehmen': 'r-verb', 'wir': 'r-subject', 'einen': 'r-akkusativ', 'Regenschirm': 'r-akkusativ' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which connector marks an expected result?', options: ['trotzdem', 'deshalb', 'weil'], answer: 1,
      explain: 'deshalb marks the expected result of the first clause.' },
    { q: 'Which connector marks an unexpected contrast?', options: ['trotzdem', 'deshalb', 'weil'], answer: 0,
      explain: 'trotzdem marks a contrast that goes against expectation.' },
    { q: 'Complete: "Es regnet. ___ nehmen wir einen Regenschirm."', options: ['Deshalb', 'Weil', 'Trotzdem'], answer: 0,
      explain: 'Rain leading to taking an umbrella is the expected result — deshalb.' },
    { q: 'What comes right after deshalb/trotzdem?', options: ['The subject', 'The verb', 'Nothing, a comma'], answer: 1,
      explain: 'The verb stays in position two, so it comes immediately after deshalb/trotzdem.' },
    { q: 'Which is correct?', options: ['Trotzdem ich bleibe.', 'Trotzdem bleibe ich.', 'Ich trotzdem bleibe.'], answer: 1,
      explain: 'The verb (bleibe) must come right after trotzdem, before the subject (ich).' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-conjunction', html: '<span class="de r-conjunction">deshalb</span> (therefore) marks an <b>expected result</b>; <span class="de r-conjunction">trotzdem</span> (nevertheless) marks an <b>unexpected contrast</b>.' },
    { c: 'r-conjunction', html: 'Both take position one of their clause, so the <b>verb comes right after</b> in position two: <span class="de">Deshalb bleibe ich.</span> / <span class="de">Trotzdem gehen wir.</span>' },
    { c: 'r-conjunction', html: 'weil (reason, subordinate clause, verb-final) and deshalb (result, new main clause, verb second) express the same idea from opposite directions — never combine them.' }
  ],
  revisionTips: [
    'Expected result? → deshalb. Unexpected contrast? → trotzdem. Reason in a subordinate clause? → weil.',
    'deshalb/trotzdem + VERB + subject — never subject before the verb.',
    'Never stack weil and deshalb (or trotzdem and weil) together in one sentence.'
  ]
};

window.CHAPTER = CHAPTER;
