/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 14
   "Konjunktiv II für Irreales & Hypothesen" — unreal present/
   past, wishes, regrets, academic hypotheses, diplomatic
   softening, literary/stylistic Konjunktiv II. NOT basic
   würde-Form or elementary conjugation.
   Dialogue: Uta and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-14-konjunktiv-ii-fuer-irreales-und-hypothesen',
  phase: 'C1 · Modalität & Nuance',
  number: 14,
  title: 'Konjunktiv II für Irreales & Hypothesen',
  titleEn: 'Konjunktiv II for the unreal and hypothetical',
  description: 'The Indicative describes reality. Konjunktiv II describes a world that is imagined, desired, impossible, or hypothetical. Every sentence asks: "What if reality were different?"',
  xp: 470,
  time: 100,
  difficulty: 'Advanced',
  nextChapter: { number: 15, title: 'Konjunktiv I & Indirekte Rede', titleEn: 'Konjunktiv I and reported speech' , href: 'chapter-c1-15-konjunktiv-i-und-indirekte-rede.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Every Konjunktiv II sentence asks: <em>"What if reality were different?"</em>',
    intro: 'Uta imagines the life she might have had if she\'d studied medicine, and Timo asks whether that would have been the better path — every wish, regret, and hypothesis asking the same question: what if reality were different?',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See unreal present, unreal past, academic hypotheses, and diplomatic softening used naturally'
    ],
    scene: 'Gespräch über alternative Lebenswege',
    femaleSpeakers: ['Uta'],
    dialogue: [
      { speaker: 'Uta', tokens: [
        { w: 'Wenn', role: 'r-conjunction', en: 'if', hi: 'अगर', pron: 'ven', type: 'Conjunction · wenn (Konjunktiv II)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'damals', role: 'r-adverb', en: 'back then', hi: 'उस समय', pron: 'DAH-mahls', type: 'Adverb' },
        { w: 'Medizin', role: 'r-akkusativ', en: 'medicine', hi: 'चिकित्सा', pron: 'me-di-TSEEN', type: 'Noun · fem.' },
        { w: 'studiert', role: 'r-verb', en: 'studied', hi: 'पढ़ा होता', pron: 'shtoo-DEERT', type: 'Partizip II' },
        { w: 'hätte', role: 'r-verb', en: 'had', hi: 'होता', pron: 'HE-tuh', type: 'Verb · haben (Konjunktiv II)' },
        { w: ',', plain: true },
        { w: 'wäre', role: 'r-verb', en: 'would be', hi: 'होता', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'mein', role: 'r-subject', en: 'my (masc.)', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Lebensweg', role: 'r-subject', en: 'life path', hi: 'जीवन पथ', pron: 'LAY-benz-vayk', type: 'Noun · masc.', why: 'der Lebensweg (this chapter).', ex: 'ein anderer Lebensweg' },
        { w: 'ganz', role: 'r-akkusativ', en: 'completely', hi: 'पूरी तरह', pron: 'gants', type: 'Adverb' },
        { w: 'anders', role: 'r-akkusativ', en: 'different', hi: 'अलग', pron: 'AN-ders', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'If I had studied medicine back then, my life path would be completely different.', hi: 'Agar main us samay chikitsa padha hota, toh mera jeevan path bilkul alag hota.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wäre', role: 'r-verb', en: 'would be', hi: 'होता', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'wünschenswert', role: 'r-akkusativ', en: 'desirable', hi: 'वांछनीय', pron: 'VÜN-shens-vairt', type: 'Adjective', why: 'wünschenswert = desirable (recycled B1).', ex: 'wünschenswert' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'dich', role: 'r-akkusativ', en: 'you', hi: 'तुम्हारे लिए', pron: 'dikh', type: 'Pronoun · acc.' },
        { w: 'gewesen', role: 'r-verb', en: 'been', hi: 'हुआ', pron: 'ge-VAY-zen', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'Would that have been desirable for you?', hi: 'Kya yeh tumhaare liye vaanchhaniya hota?' },
      { speaker: 'Uta', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'durchaus', role: 'r-akkusativ', en: 'quite', hi: 'बिल्कुल', pron: 'doorkh-OWS', type: 'Adverb', why: 'durchaus = quite/indeed (this chapter).', ex: 'Das ist durchaus denkbar.', exEn: 'That is quite conceivable.' },
        { w: 'denkbar', role: 'r-akkusativ', en: 'conceivable', hi: 'संभव', pron: 'DENK-bahr', type: 'Adjective', why: 'denkbar = conceivable (this chapter).', ex: 'Das ist denkbar.', exEn: 'That is conceivable.' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nehme', role: 'r-verb', en: 'assume', hi: 'मानती हूँ', pron: 'NAY-muh', type: 'Verb · annehmen (ich)', lexicalUnit: 'annehmen', why: 'annehmen = to assume, fixed expression (this chapter).', ex: 'Ich nehme an, dass ich glücklich wäre.', exEn: 'I assume that I would be happy.' },
        { w: 'an', role: 'r-verb', en: '(prefix of annehmen)', hi: '', pron: 'an', type: 'Separable prefix', lexicalUnit: 'annehmen' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: 'zufrieden', role: 'r-akkusativ', en: 'satisfied', hi: 'संतुष्ट', pron: 'tsu-FREE-den', type: 'Adjective' },
        { w: 'wäre', role: 'r-verb', en: 'would be', hi: 'होती', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II, Satzende)' },
        { w: '.', plain: true }
      ], en: 'That is quite conceivable, but I assume that I would nevertheless be satisfied.', hi: 'Yeh bilkul sambhav hai, par main maanti hoon ki main phir bhi santusht hoti.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Woher', role: 'r-question', en: 'from where', hi: 'कहाँ से', pron: 'vo-HAIR', type: 'Question word' },
        { w: 'käme', role: 'r-verb', en: 'would come', hi: 'आती', pron: 'KAY-muh', type: 'Verb · kommen (Konjunktiv II)' },
        { w: 'diese', role: 'r-subject', en: 'this (fem.)', hi: 'यह', pron: 'DEE-zuh', type: 'Determiner' },
        { w: 'Zufriedenheit', role: 'r-subject', en: 'satisfaction', hi: 'संतुष्टि', pron: 'tsu-FREE-den-hite', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'Where would this satisfaction come from?', hi: 'Yeh santushti kahaan se aati?' },
      { speaker: 'Uta', tokens: [
        { w: 'Sie', role: 'r-subject', en: 'it', hi: 'यह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'käme', role: 'r-verb', en: 'would come', hi: 'आती', pron: 'KAY-muh', type: 'Verb · kommen (Konjunktiv II)' },
        { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'ows', type: 'Preposition + dative' },
        { w: 'meiner', role: 'r-dativ', en: 'my (fem. dat.)', hi: 'मेरी', pron: 'MY-ner', type: 'Possessive · dative' },
        { w: 'Familie', role: 'r-dativ', en: 'family (dat.)', hi: 'परिवार से', pron: 'fa-MEE-lyuh', type: 'Noun · fem. dat.' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'meinen', role: 'r-dativ', en: 'my (pl. dat.)', hi: 'मेरी', pron: 'MY-nen', type: 'Possessive · dative' },
        { w: 'Freundschaften', role: 'r-dativ', en: 'friendships (dat.)', hi: 'दोस्तियों से', pron: 'FROYNT-shaf-ten', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'It would come from my family and my friendships.', hi: 'Yeh meri family aur dostiyon se aati.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'nach', role: 'r-preposition', en: 'like', hi: 'जैसा', pron: 'nahkh', type: 'Preposition' },
        { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · dative' },
        { w: 'weisen', role: 'r-dativ', en: 'wise', hi: 'बुद्धिमान', pron: 'VY-zen', type: 'Adjective · dative' },
        { w: 'Erkenntnis', role: 'r-dativ', en: 'insight (dat.)', hi: 'सूझबूझ', pron: 'er-KENT-nis', type: 'Noun · fem. dat.', why: 'die Erkenntnis (recycled C1).', ex: 'eine weise Erkenntnis' },
        { w: '.', plain: true }
      ], en: 'That sounds like a wise insight.', hi: 'Yeh ek buddhimaan soojhbooj jaisa lagta hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'The Indicative describes <b>reality</b>. Konjunktiv II describes <b>a world that is imagined, desired, impossible, or hypothetical</b>. Every <span class="de r-irreal-praesens">Konjunktiv II</span> sentence asks: "What if reality were different?"'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is KONJUNKTIV II FÜR IRREALES & HYPOTHESEN at C1 level — meaning, pragmatics, and stylistic choice of Konjunktiv II for expressing unreality/hypotheses, NOT basic würde-Form or elementary conjugation (already mastered). Covered: unreal present ("Wenn ich reich wäre..."); unreal past/regret ("Wenn ich mehr gelernt hätte, wäre ich..."); academic hypotheses ("Es wäre denkbar, dass...", "Man könnte annehmen, dass...", "Es ließe sich vermuten, dass..."); diplomatic/professional softening ("Ich würde vorschlagen...", "Es wäre sinnvoll...", "Man könnte überlegen..."); wishes ("Ich hätte gern...", "Es wäre wünschenswert..."); register scale from "Ich will..." (blunt) to "Es wäre wünschenswert..." (most formal); stylistic precision — synthetic forms (hätte, wäre, käme, ginge, ließe, dürfte) sounding more elegant than repeated würde-constructions. ' +
    'Do NOT expect or require basic würde-Form formation or elementary conjugation — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: overusing "würde" where a synthetic form (wäre, hätte, käme) would be more elegant; mixing indicative and Konjunktiv II inconsistently within one conditional sentence; confusing unreal past ("hätte...Partizip II") with simple Perfekt; incorrect hätte/wäre selection (haben vs sein verbs); direct English translation errors (e.g. "I would have" structures translated too literally). The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag inconsistent mixing of indicative and Konjunktiv II within a single hypothetical/conditional sentence.\n' +
    '- Check hätte vs wäre selection matches the verb\'s Perfekt auxiliary (haben-verbs → hätte, sein-verbs → wäre).\n' +
    '- Flag repetitive "würde" constructions where a more elegant synthetic form is natural and available.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Distance-from-reality check:</b> one sentence on whether the learner\'s Konjunktiv II use clearly signals the intended hypothesis, wish, or diplomatic distance from reality.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you use Konjunktiv II with real stylistic elegance for hypotheses and diplomacy. Ready for Konjunktiv I in academic language next.',
    mid: 'Good. Re-read the Reality Scale and Master Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: Konjunktiv II expresses distance from reality, not just grammar.'
  },

  parserSentence: [
    { w: 'Wenn', role: 'r-irreal-praesens' }, { w: 'ich', role: 'plain' }, { w: 'reich', role: 'plain' }, { w: 'wäre', role: 'r-irreal-praesens' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: Konjunktiv II expresses distance from reality — imagined, desired, or hypothetical worlds.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Uta and Timo imagine alternative career paths, using wishes, regrets, and academic hypotheses naturally.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key hypothetical expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master unreal present/past, academic hypotheses, diplomatic softening, and stylistic register.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read an academic article and a literary excerpt, identifying hypotheses and unreal/emotional distance.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify hypotheses, unreal situations, wishes, and diplomatic language in a seminar and panel discussion.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Discuss hypothetical situations, present alternatives, and make diplomatic suggestions using Konjunktiv II.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite factual statements as hypotheticals, and write a 350-word argumentative essay using Konjunktiv II.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill reality vs irreality, hypothesis building, and diplomatic reformulation.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 470 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 5 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Reality-vs-irreality drills, hypothesis building, and a full argumentative essay writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Table, Reality Scale, Register Scale, and Decision Flowchart.',
      pdfUrl: '/pdfs/grammar.pdf', size: '11 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Was wäre, wenn ich nicht Wissenschaftlerin geworden wäre?', text: 'Express an unreal present situation' },
    { de: 'Wenn ich mehr Mut gehabt hätte, wäre ich ins Ausland gegangen.', text: 'Express an unreal past regret' },
    { de: 'Es wäre denkbar, dass unterschiedliche Lebenswege zu ähnlicher Zufriedenheit führen.', text: 'Formulate a formal academic hypothesis' },
    { de: 'Ich würde vorschlagen, dass wir beide Möglichkeiten offenhalten.', text: 'Make a diplomatic professional suggestion' },
    { de: 'Es wäre wünschenswert, beide Wege zu verstehen.', text: 'Express a formal wish with the most polite register' }
  ],

  vocab: [
    { de: 'denkbar', pos: 'adjective', level: 'C1', register: 'written', en: 'conceivable', hi: 'सोचने योग्य', ex: 'Es wäre denkbar, dass die Studie wiederholt wird.', exEn: 'It would be conceivable that the study is repeated.', exHi: 'Yeh sochne laayak hoga ki adhyayan dohraaya jaaye.', ex2: 'Ein solches Szenario ist durchaus denkbar.', ex2En: 'Such a scenario is quite conceivable.', ex2Hi: 'Aisa scenario bilkul sochne laayak hai.' },
    { de: 'annehmen', pos: 'verb', level: 'C1', register: 'written', en: 'to assume', hi: 'मान लेना', ex: 'Man könnte annehmen, dass die Ergebnisse repräsentativ sind.', exEn: 'One could assume that the results are representative.', exHi: 'Yeh maan sakte hain ki parinaam pratinidhitva karte hain.', ex2: 'Wir nehmen an, dass das Projekt erfolgreich sein wird.', ex2En: 'We assume that the project will be successful.', ex2Hi: 'Hum maante hain ki project safal hoga.', conj: { praesens: 'nimmt an', praeteritum: 'nahm an', perfekt: 'hat angenommen' } },
    { de: 'der Lebensweg', art: 'der', gender: 'm', plural: 'Lebenswege', pos: 'noun', level: 'C1', register: 'both', en: 'life path', hi: 'जीवन पथ', ex: 'Jeder Lebensweg bringt eigene Herausforderungen mit sich.', exEn: 'Every life path brings its own challenges.', exHi: 'Har jeevan path apni chunautiyaan laata hai.', ex2: 'Sie wählte einen ungewöhnlichen Lebensweg.', ex2En: 'She chose an unusual life path.', ex2Hi: 'Usne ek asaamaanya jeevan path chuna.' },
    { de: 'wünschenswert', pos: 'adjective', level: 'C1', register: 'written', en: 'desirable', hi: 'वांछनीय', ex: 'Es wäre wünschenswert, mehr Zeit füreinander zu haben.', exEn: 'It would be desirable to have more time for each other.', exHi: 'Ek doosre ke liye zyaada samay hona vaanchaneey hoga.', ex2: 'Eine schnellere Lösung wäre wünschenswert.', ex2En: 'A faster solution would be desirable.', ex2Hi: 'Ek tez solution vaanchaneey hoga.' },
    { de: 'die Zufriedenheit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'C1', register: 'both', en: 'satisfaction', hi: 'संतुष्टि', ex: 'Zufriedenheit hängt oft von inneren Faktoren ab.', exEn: 'Satisfaction often depends on internal factors.', exHi: 'Santushti aksar aantarik karakon par nirbhar karti hai.', ex2: 'Er strahlte tiefe Zufriedenheit aus.', ex2En: 'He radiated deep satisfaction.', ex2Hi: 'Woh gehri santushti bikher raha tha.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Irrealis?',
      body: [ 'Reality → Possibility → Hypothesis → Irreality → Counterfactual thinking. Konjunktiv II creates distance from reality along this whole scale.' ],
      hinglish: 'Konjunktiv II ka ek hi kaam hai \u2014 asliyat se doori banana. Woh batata hai ki baat sach nahi hai, sirf socha ja raha hai, chaaha ja raha hai, ya mumkin hi nahi hai. Isi doori se politeness bhi aati hai, isliye request aur suggestion mein bhi yahi form aata hai.'
    },
    {
      title: 'Gegenwärtige Irrealität (Unreal Present)',
      body: [ 'Wenn ich mehr Zeit hätte, ... / Wenn sie hier wäre, ... / Wenn wir reich wären, ... — describing an unreal or impossible present situation.' ],
      hinglish: 'Yeh abhi ki us situation ke liye hai jo sach nahi hai \u2014 <span class="de">Wenn ich mehr Zeit h\u00e4tte \u2026</span> matlab abhi mere paas time nahi hai. Dhyaan do ki <b>wenn</b> wale hisse ka verb end mein jaata hai, aur agar woh clause pehle aaye to main clause apne verb se shuru hoti hai.'
    },
    {
      title: 'Vergangene Irrealität (Unreal Past)',
      body: [ 'Wenn ich mehr gelernt hätte, ... / Wenn sie gekommen wäre, ... / Wenn wir früher angefangen hätten, ... — expressing regret or a missed opportunity.' ],
      hinglish: 'Yeh past ki us baat ke liye hai jo hui hi nahi \u2014 aksar pachhtawa batane ke liye. Formula hai <b>h\u00e4tte</b> ya <b>w\u00e4re</b> + Partizip II, aur haben/sein ka faisla wahi hai jo Perfekt mein hota hai: <span class="de">gelernt h\u00e4tte</span> par <span class="de">gekommen w\u00e4re</span>.'
    },
    {
      title: 'Hypothesen (Academic Hypotheses)',
      body: [ 'Academic writing mein hypothesis in phrases se banti hai: <span class="de">Es w\u00e4re denkbar, dass \u2026</span>, <span class="de">Man k\u00f6nnte annehmen, dass \u2026</span>, <span class="de">Es lie\u00dfe sich vermuten, dass \u2026</span>. Inhe poore chunk ki tarah yaad karo \u2014 yeh seedha writing mein use ho jaate hain.' ],
      hinglish: 'Academic writing mein hypothesis in phrases se banti hai: <span class="de">Es w\u00e4re denkbar, dass \u2026</span>, <span class="de">Man k\u00f6nnte annehmen, dass \u2026</span>, <span class="de">Es lie\u00dfe sich vermuten, dass \u2026</span>. Inhe poore chunk ki tarah yaad karo \u2014 yeh seedha writing mein use ho jaate hain.'
    },
    {
      title: 'Berufliche Kommunikation (Diplomatic Softening)',
      body: [ 'Ich würde vorschlagen, ... / Es wäre sinnvoll, ... / Man könnte überlegen, ... — softened suggestions used in meetings, negotiations, and diplomatic disagreement.' ],
      hinglish: 'Office aur meetings mein seedha kehna rukha lagta hai, isliye Konjunktiv II se baat narm ki jaati hai: <span class="de">Ich w\u00fcrde vorschlagen, \u2026</span>, <span class="de">Es w\u00e4re sinnvoll, \u2026</span>, <span class="de">Man k\u00f6nnte \u00fcberlegen, \u2026</span>. Yeh disagreement ke liye bhi kaam aate hain.'
    },
    {
      title: 'w\u00fcrde oder synthetische Form?',
      body: [
        'The synthetic Konjunktiv II is built from the Pr\u00e4teritum stem plus <b>-e</b> and an umlaut where possible: <i>kam \u2192 k\u00e4me</i>, <i>ging \u2192 ginge</i>, <i>lie\u00df \u2192 lie\u00dfe</i>, <i>gab \u2192 g\u00e4be</i>.',
        'Which one to use is not free choice. Three verbs must never take w\u00fcrde, a small group is preferred synthetically, and for most other verbs w\u00fcrde is the normal modern choice.'
      ],
      table: {
        head: ['Group', 'Rule', 'Example'],
        rows: [
          ['haben, sein, modals', 'synthetic form is compulsory', '<span class="de">h\u00e4tte, w\u00e4re, k\u00f6nnte, m\u00fcsste</span>'],
          ['common strong verbs', 'synthetic preferred in writing', '<span class="de">k\u00e4me, ginge, lie\u00dfe, g\u00e4be, w\u00fcsste</span>'],
          ['weak verbs', 'w\u00fcrde \u2014 the synthetic form equals the Pr\u00e4teritum', '<span class="de">w\u00fcrde arbeiten</span> (not <i>arbeitete</i>)'],
          ['rare or archaic strong forms', 'w\u00fcrde', '<span class="de">w\u00fcrde helfen</span> rather than <i>h\u00fclfe</i>']
        ]
      },
      note: 'The reason weak verbs need w\u00fcrde is that their Konjunktiv II is identical to the Pr\u00e4teritum \u2014 <i>arbeitete</i> could be either, so German avoids the ambiguity.',
      hinglish: 'Synthetic Konjunktiv II banta hai Pr\u00e4teritum stem se \u2014 uspar <b>-e</b> lagta hai aur ho sake to umlaut: <i>kam</i> se <b>k\u00e4me</b>, <i>ging</i> se <b>ginge</b>, <i>gab</i> se <b>g\u00e4be</b>. Ab sawaal yeh ki kab synthetic aur kab <b>w\u00fcrde</b>. Yeh marzi ki baat nahi hai. <b>haben, sein</b> aur modals ke saath synthetic form <b>zaroori</b> hai \u2014 <i>w\u00fcrde haben</i> kabhi nahi. Kuch common strong verbs (<b>k\u00e4me, ginge, lie\u00dfe, w\u00fcsste</b>) likhne mein synthetic hi behtar lagte hain. Aur weak verbs ke saath <b>w\u00fcrde</b> hi chalta hai \u2014 wajah yeh hai ki unka Konjunktiv II Pr\u00e4teritum jaisa hi dikhta hai (<i>arbeitete</i>), isliye confusion se bachne ke liye German <b>w\u00fcrde arbeiten</b> kehta hai.'
    },
    {
      title: 'Registerskala (Register Scale)',
      body: [ 'Ich will... → Ich möchte... → Ich würde gern... → Es wäre wünschenswert, ... — increasing formality and politeness.' ],
      hinglish: 'Yeh politeness ki seedhi hai \u2014 <span class="de">Ich will</span> sabse seedha, phir <span class="de">Ich m\u00f6chte</span>, phir <span class="de">Ich w\u00fcrde gern</span>, aur sabse formal <span class="de">Es w\u00e4re w\u00fcnschenswert</span>. Jitna aage jaoge, utni doori banti hai aur utna polite lagta hai.'
    },
    {
      title: 'Stilistische Präzision (Synthetic vs würde)',
      body: [ 'würde → hätte → wäre → käme → ginge → ließe → dürfte. Synthetic Konjunktiv II forms often sound more elegant than repeated würde-constructions, especially in literary and academic writing.' ],
      hinglish: 'Har jagah <b>w\u00fcrde</b> lagane se text bhaari aur ek jaisa lagta hai. Likhne mein synthetic forms (<b>h\u00e4tte, w\u00e4re, k\u00e4me, ginge, lie\u00dfe</b>) zyada saaf lagti hain. Par yeh sirf style ki baat nahi hai \u2014 kuch verbs ke saath synthetic form zaroori hai aur kuch ke saath <b>w\u00fcrde</b>, jo neeche wale block mein hai.'
    },
    {
      title: 'Meister-Tabelle',
      body: [ 'Function mapped to example expression.' ],
      table: {
        head: ['Function', 'Example'],
        rows: [
          ['Wish', 'Ich hätte gern...'],
          ['Unreal Present', 'Wenn ich reich wäre...'],
          ['Unreal Past', 'Wenn ich mehr gelernt hätte...'],
          ['Suggestion', 'Ich würde empfehlen...'],
          ['Hypothesis', 'Es wäre denkbar...'],
          ['Possibility', 'Man könnte annehmen...']
        ]
      },
      hinglish: 'Function aur example ka table \u2014 pehle socho ki tum kya kar rahe ho (wish, unreal present, unreal past, suggestion, hypothesis), phir usi row se structure uthao.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'Four of these are structural: the wrong auxiliary, a missing inversion, or an Indicative slipping into one half of the conditional. The other two are about not doubling what is already marked.' ],
      mistakes: [
        { wrong: 'Wenn ich mehr Zeit w\u00fcrde haben, w\u00fcrde ich mehr lesen.', right: 'Wenn ich mehr Zeit h\u00e4tte, w\u00fcrde ich mehr lesen.', why: '<b>haben</b> and <b>sein</b> are never used with w\u00fcrde \u2014 their own Konjunktiv II forms (<b>h\u00e4tte</b>, <b>w\u00e4re</b>) are compulsory.' },
        { wrong: 'Wenn ich Zeit h\u00e4tte, komme ich mit.', right: 'Wenn ich Zeit h\u00e4tte, k\u00e4me ich mit. / \u2026, w\u00fcrde ich mitkommen.', why: 'Both halves of a conditional stay in Konjunktiv II. Slipping into the Indicative in the main clause turns an unreal condition into a real plan.' },
        { wrong: 'Wenn ich das gewusst habe, w\u00e4re ich gekommen.', right: 'Wenn ich das gewusst h\u00e4tte, w\u00e4re ich gekommen.', why: 'The unreal past needs <b>h\u00e4tte</b> + Partizip II. With <i>habe</i> the clause states a real fact, which contradicts the rest of the sentence.' },
        { wrong: 'Wenn sie fr\u00fcher h\u00e4tte gekommen, h\u00e4tten wir angefangen.', right: 'Wenn sie fr\u00fcher gekommen w\u00e4re, h\u00e4tten wir angefangen.', why: '<i>kommen</i> is a movement verb, so it takes <b>w\u00e4re</b> \u2014 the same haben/sein choice as in the Perfekt. Note the auxiliary also goes last.' },
        { wrong: 'Wenn ich reich w\u00e4re, ich w\u00fcrde ein Haus kaufen.', right: 'Wenn ich reich w\u00e4re, w\u00fcrde ich ein Haus kaufen.', why: 'The wenn-clause fills position 1, so the main clause must start with its verb \u2014 before the subject.' },
        { wrong: 'H\u00e4tte ich mehr Zeit gehabt, h\u00e4tte ich das Projekt beendet gehabt.', right: 'H\u00e4tte ich mehr Zeit gehabt, h\u00e4tte ich das Projekt beendet.', why: 'One <b>h\u00e4tte</b> per clause is enough. (Note the dropped <i>wenn</i> in the first clause \u2014 that is correct and quite elegant, as long as the verb comes first.)' }
      ],
      hinglish: 'Inme se chaar galtiyan structure ki hain \u2014 galat auxiliary, inversion bhool jaana, ya conditional ke ek hisse mein Indicative aa jaana. Aur do us aadat ki hain jisme jo cheez pehle se mark ho chuki hai use dobara mark kar diya jaata hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to express a wish? Konjunktiv II. Need an unreal present? wäre/hätte. Need an unreal past? hätte + Partizip II. Need a polite suggestion? würde. Need a scientific hypothesis? Es wäre denkbar... / Man könnte annehmen...' ],
      note: 'Memory trick: the Indicative describes reality. Konjunktiv II describes a world that is imagined, desired, impossible or hypothetical. Every Konjunktiv II sentence asks: "What if reality were different?"',
      hinglish: 'Wish? Konjunktiv II. Abhi ki unreal baat? <b>w\u00e4re/h\u00e4tte</b>. Past ki unreal baat? <b>h\u00e4tte/w\u00e4re</b> + Partizip II. Polite suggestion? <b>w\u00fcrde</b>. Academic hypothesis? <span class="de">Es w\u00e4re denkbar, dass \u2026</span>. Aur likhne se pehle ek baar check karo \u2014 dono clauses Konjunktiv II mein hain?'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Fachzeitschrift: Diskussion um ein überraschendes Studienergebnis',
    titleEn: 'Reading A — Journal discussion of a surprising study result',
    tokens: [
      { w: 'Es', role: 'r-hypothese', en: 'it (part of academic hypothesis expression)', hi: '', type: 'Pronomen · Nom.' },
      { w: 'wäre', role: 'r-hypothese', en: 'would be (academic hypothesis)', hi: 'सोचा जा सकता है', type: 'Verb · sein (Konjunktiv II)', why: '"Es wäre denkbar" opens a cautious academic hypothesis (this chapter).' },
      { w: 'denkbar', role: 'r-hypothese', en: 'conceivable (Satzende, fixed academic expression)', hi: 'कि (Satzende)', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'saisonale', role: 'plain', en: 'seasonal', hi: 'मौसमी', type: 'Adjective' },
      { w: 'Schwankungen', role: 'plain', en: 'fluctuations (Satzende)', hi: 'बदलाव (Satzende)', type: 'Noun · plural' },
      { w: 'eine', role: 'plain', en: 'a (fem. akk.)', hi: 'एक', type: 'Article' },
      { w: 'größere', role: 'plain', en: 'greater', hi: 'बड़ी', type: 'Adjective · Komparativ' },
      { w: 'Rolle', role: 'plain', en: 'role', hi: 'भूमिका', type: 'Noun · fem.' },
      { w: 'spielen', role: 'plain', en: 'play (Satzende)', hi: 'निभाते हैं (Satzende)', type: 'Verb' },
      { w: ',', plain: true },
      { w: 'als', role: 'plain', en: 'than', hi: 'जितना', type: 'Konjunktion' },
      { w: 'bislang', role: 'plain', en: 'so far', hi: 'अब तक', type: 'Adverb' },
      { w: 'angenommen', role: 'plain', en: 'assumed (Satzende)', hi: 'माना गया था (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-hypothese', en: 'it (part of academic hypothesis expression)', hi: '', type: 'Pronomen · Nom.' },
      { w: 'ließe', role: 'r-hypothese', en: 'let (part of "sich vermuten", elegant synthetic form)', hi: 'यह अनुमान लगाया जा सकता है', type: 'Verb · lassen (Konjunktiv II)', why: '"Es ließe sich vermuten" is an elegant synthetic Konjunktiv II, more sophisticated than "es würde sich vermuten lassen" (this chapter).' },
      { w: 'sich', role: 'plain', en: 'itself', hi: '', type: 'Reflexivpronomen' },
      { w: 'vermuten', role: 'r-hypothese', en: 'assume (Satzende, fixed academic expression)', hi: 'कि (Satzende)', type: 'Verb · Infinitiv' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Stichprobe', role: 'plain', en: 'sample', hi: 'नमूना', type: 'Noun · fem.' },
      { w: 'schlicht', role: 'plain', en: 'simply', hi: 'बस', type: 'Adverb' },
      { w: 'zu', role: 'plain', en: 'too', hi: 'बहुत', type: 'Adverb' },
      { w: 'klein', role: 'plain', en: 'small (Satzende)', hi: 'छोटा (Satzende)', type: 'Adjective' },
      { w: 'war', role: 'plain', en: 'was (Satzende)', hi: 'था (Satzende)', type: 'Verb · sein (Präteritum, Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Autoren', role: 'plain', en: 'authors', hi: 'लेखक', type: 'Noun · plural' },
      { w: 'räumen', role: 'plain', en: 'admit', hi: 'स्वीकार करते हैं', type: 'Verb · einräumen' },
      { w: 'diese', role: 'plain', en: 'this', hi: 'इस', type: 'Determiner' },
      { w: 'Einschränkung', role: 'plain', en: 'limitation (Satzende)', hi: 'सीमा (Satzende)', type: 'Noun · fem.' },
      { w: 'selbst', role: 'plain', en: 'themselves (Satzende)', hi: 'ख़ुद (Satzende)', type: 'Pronoun' },
      { w: 'ein', role: 'plain', en: '(Satzende, prefix)', hi: '', type: 'Separable prefix · einräumen' },
      { w: '.', plain: true }
    ],
    translation: 'It would be conceivable that seasonal fluctuations play a greater role than assumed so far. It could be surmised that the sample was simply too small. The authors themselves admit this limitation.',
    comprehension: [
      { q: 'Welche Funktion hat "es wäre denkbar"?', options: ['Akademische Hypothese', 'Sichere Tatsache', 'Befehl'], answer: 0 },
      { q: 'Was ist stilistisch besonders an "es ließe sich vermuten"?', options: ['Elegante synthetische Konjunktiv-II-Form statt würde-Konstruktion', 'Ein Grammatikfehler', 'Zukunft'], answer: 0 },
      { q: 'Räumen die Autoren die Schwäche ihrer Studie ein?', options: ['Ja, selbst', 'Nein, sie bestreiten es', 'Der Text sagt es nicht'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Literarischer Auszug',
    titleEn: 'Reading B — Literary excerpt',
    tokens: [
      { w: 'Wenn', role: 'r-irreal-praesens', en: 'if (unreal present, literary)', hi: 'agar (unreal present, literary)', type: 'Konjunktion' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'woh', type: 'Pronomen · Nom.' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'sirf', type: 'Adverb' },
      { w: 'einmal', role: 'plain', en: 'once', hi: 'ek baar', type: 'Adverb' },
      { w: 'zurückkehren', role: 'plain', en: 'return', hi: 'lautna', type: 'Verb (Infinitiv)' },
      { w: 'könnte', role: 'r-irreal-praesens', en: 'could (unreal present, literary yearning)', hi: 'saky (unreal present, literary yearning)', type: 'Modalverb (Konjunktiv II, Satzende)' },
      { w: ',', plain: true },
      { w: 'dachte', role: 'plain', en: 'thought', hi: 'socha', type: 'Verb (Präteritum)' },
      { w: 'er', role: 'plain', en: 'he', hi: 'usne', type: 'Pronomen · Nom.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Welt', role: 'plain', en: 'world (Satzende)', hi: 'duniya (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'wäre', role: 'r-irreal-praesens', en: 'would be (unreal present, literary distance)', hi: 'hoti (unreal present, literary distance)', type: 'Verb · sein (Konjunktiv II)' },
      { w: 'anders', role: 'plain', en: 'different (Satzende)', hi: 'alag (Satzende)', type: 'Adjective (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'If only she could return once, he thought. The world would be different.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_014_L001', speaker: 'Uta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, manchmal frage ich mich, wie mein Leben aussähe, wenn ich Medizin studiert hätte.', en: 'Timo, sometimes I wonder what my life would look like if I had studied medicine.' },
      { id: 'C1_014_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Interessant. Wäre das wirklich der bessere Weg gewesen, oder bereust du deine Entscheidung nur manchmal?', en: 'Interesting. Would that really have been the better path, or do you just regret your decision sometimes?' },
      { id: 'C1_014_L003', speaker: 'Uta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ehrlich gesagt, wenn ich noch einmal wählen könnte, würde ich wohl trotzdem dasselbe tun.', en: 'Honestly, if I could choose again, I\'d probably still do the same thing.' },
      { id: 'C1_014_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das beruhigt mich zu hören — Zweifel gehören wohl einfach dazu.', en: 'That\'s reassuring to hear — doubts probably just come with it.' }
    ],
    transcript: 'Timo, manchmal frage ich mich, wie mein Leben aussähe, wenn ich Medizin studiert hätte. Interessant. Wäre das wirklich der bessere Weg gewesen, oder bereust du deine Entscheidung nur manchmal? Ehrlich gesagt, wenn ich noch einmal wählen könnte, würde ich wohl trotzdem dasselbe tun. Das beruhigt mich zu hören — Zweifel gehören wohl einfach dazu.',
    translation: 'Timo, sometimes I wonder what my life would look like if I had studied medicine. Interesting. Would that really have been the better path, or do you just regret your decision sometimes? Honestly, if I could choose again, I\'d probably still do the same thing. That\'s reassuring to hear — doubts probably just come with it.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'manchmal' },
      { w: 'frage' },
      { w: 'ich' },
      { w: 'mich' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'mein' },
      { w: 'Leben' },
      { w: 'aussähe' },
      { w: ',', plain: true },
      { w: 'wenn' },
      { w: 'ich' },
      { w: 'Medizin' },
      { w: 'studiert' },
      { w: 'hätte' },
      { w: '.', plain: true },
      { w: 'Interessant' },
      { w: '.', plain: true },
      { w: 'Wäre' },
      { w: 'das' },
      { w: 'wirklich' },
      { w: 'der' },
      { w: 'bessere' },
      { w: 'Weg' },
      { w: 'gewesen' },
      { w: ',', plain: true },
      { w: 'oder' },
      { w: 'bereust' },
      { w: 'du' },
      { w: 'deine' },
      { w: 'Entscheidung' },
      { w: 'nur' },
      { w: 'manchmal' },
      { w: '?', plain: true },
      { w: 'Ehrlich' },
      { w: 'gesagt' },
      { w: ',', plain: true },
      { w: 'wenn' },
      { w: 'ich' },
      { w: 'noch' },
      { w: 'einmal' },
      { w: 'wählen' },
      { w: 'könnte' },
      { w: ',', plain: true },
      { w: 'würde' },
      { w: 'ich' },
      { w: 'wohl' },
      { w: 'trotzdem' },
      { w: 'dasselbe' },
      { w: 'tun' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'beruhigt' },
      { w: 'mich' },
      { w: 'zu' },
      { w: 'hören' },
      { w: '—', plain: true },
      { w: 'Zweifel' },
      { w: 'gehören' },
      { w: 'wohl' },
      { w: 'einfach' },
      { w: 'dazu' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Worüber denkt Uta nach?', qEn: 'What does Uta wonder about?', options: ['ob sie umziehen sollte', 'wie ihr Leben aussähe, wenn sie Medizin studiert hätte', 'ob sie heiraten sollte', 'ob sie kündigen sollte'], optionsEn: ['whether she should move', 'what her life would look like if she had studied medicine', 'whether she should get married', 'whether she should resign'], answer: 1,
        explain: '"… wie mein Leben aussähe, wenn ich Medizin studiert hätte."' },
      { q: 'Was würde Uta machen, wenn sie noch einmal wählen könnte?', qEn: 'What would Uta do if she could choose again?', options: ['etwas ganz anderes', 'wohl dasselbe', 'sofort Medizin studieren', 'gar nichts'], optionsEn: ['something completely different', 'probably the same', 'study medicine straight away', 'nothing at all'], answer: 1,
        explain: '"… würde ich wohl trotzdem dasselbe tun."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Timo fragt, wie dein Leben mit einem anderen Studium aussähe.", taskEn: "Timo asks what your life would look like with a different degree.", de: "Wenn ich Medizin studiert hätte, wäre mein Lebensweg ganz anders verlaufen.", en: "If I'd studied medicine, my path would have gone quite differently." },
    { task: "Timo fragt, ob das wirklich der bessere Weg gewesen wäre.", taskEn: "Timo asks whether that would really have been the better path.", de: "Vielleicht nicht; ich wäre wohl weniger zufrieden gewesen.", en: "Perhaps not; I'd probably have been less content." },
    { task: "Formuliere im Vortrag eine vorsichtige Hypothese.", taskEn: "Formulate a cautious hypothesis in your talk.", de: "Es wäre denkbar, dass der Effekt nur in Großstädten auftritt.", en: "It would be conceivable that the effect occurs only in large cities." },
    { task: "Widersprich im Gremium diplomatisch und mach einen Vorschlag.", taskEn: "Disagree diplomatically in the committee and propose something.", de: "Ich würde vorschlagen, die Entscheidung um zwei Wochen zu verschieben.", en: "I'd suggest postponing the decision by two weeks." },
    { task: "Deine Freundin fragt, was für dich wünschenswert wäre.", taskEn: "Your friend asks what would be desirable for you.", de: "Wünschenswert wäre mehr Zeit für die Familie.", en: "More time for the family would be desirable." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Take factual statements and rewrite them into hypothetical Konjunktiv II constructions (unreal present, unreal past, academic hypothesis).\n\nTASK 2 — Argumentative essay (350 words): Discuss a hypothetical social or scientific scenario using authentic Konjunktiv II throughout.',
    starters: ['Wenn wir mehr Zeit gehabt hätten, hätten wir das Experiment wiederholt.', 'Es wäre denkbar, dass weitere Faktoren eine Rolle spielen.'],
    placeholder: 'Wenn ich damals anders entschieden hätte, wäre mein Leben heute völlig anders. Es wäre denkbar, dass...',
    minWords: 150
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence expresses an unreal PAST regret?',
      options: ['Wenn ich mehr gelernt hätte, wäre ich erfolgreicher gewesen.', 'Wenn ich reich wäre, würde ich reisen.', 'Ich hätte gern einen Kaffee.'],
      answer: 0,
      explain: '"Hätte...Partizip II" combined with "wäre...Partizip II" expresses an unreal past — a regret about something that did not happen.'
    },
    gap: {
      sentence: ['Es ', ' denkbar, dass weitere Faktoren eine Rolle spielen.'],
      gaps: [ { answer: 'wäre', accepts: ['wäre'] } ],
      explain: '"Es wäre denkbar, dass..." is the fixed academic hypothesis structure.'
    },
    match: {
      q: 'Match each expression to its function.',
      pairs: [
        { noun: 'Ich hätte gern...', art: 'Wish' },
        { noun: 'Wenn ich reich wäre...', art: 'Unreal Present' },
        { noun: 'Wenn ich mehr gelernt hätte...', art: 'Unreal Past' },
        { noun: 'Es wäre denkbar...', art: 'Hypothesis' }
      ]
    },
    builder: {
      target: 'Build: "If I had had more courage, I would have gone abroad." (unreal past)',
      bank: ['Wenn', 'ich', 'mehr', 'Mut', 'gehabt', 'hätte', ',', 'wäre', 'ich', 'ins', 'Ausland', 'gegangen', '.'],
      answer: ['Wenn', 'ich', 'mehr', 'Mut', 'gehabt', 'hätte', ',', 'wäre', 'ich', 'ins', 'Ausland', 'gegangen', '.'],
      roles: { 'hätte': 'r-irreal-vergangenheit', 'wäre': 'r-irreal-vergangenheit' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Wenn ich mehr Zeit habe, hätte ich das Projekt beendet.',
      right: 'Wenn ich mehr Zeit gehabt hätte, hätte ich das Projekt beendet.',
      explain: 'Mixing indicative "habe" with Konjunktiv II "hätte" breaks the hypothetical sentence — both clauses need consistent unreal-past Konjunktiv II.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does the Indicative describe, in contrast to Konjunktiv II?', options: ['Reality', 'Hypothesis', 'Wishes'], answer: 0,
      explain: 'The Indicative describes reality; Konjunktiv II describes an imagined, desired, or hypothetical world.' },
    { q: 'How is unreal past formed?', options: ['hätte/wäre + Partizip II', 'würde + Infinitiv', 'Präsens + schon'], answer: 0,
      explain: '"Hätte/wäre + Partizip II" expresses an unreal past, distinct from simple Perfekt.' },
    { q: 'Which is a fixed academic hypothesis expression?', options: ['Es wäre denkbar, dass...', 'Ich will...', 'Er ist krank.'], answer: 0,
      explain: '"Es wäre denkbar, dass..." formally introduces a tentative academic hypothesis.' },
    { q: 'Which register is more formal: "Ich will..." or "Es wäre wünschenswert..."?', options: ['Es wäre wünschenswert...', 'Ich will...', 'Both are equally formal'], answer: 0,
      explain: '"Es wäre wünschenswert" is the most formal expression on the register scale.' },
    { q: 'What is the C1 memory trick for Konjunktiv II?', options: ['It expresses distance from reality — "what if reality were different?"', 'It only forms polite requests', 'It is identical to Perfekt'], answer: 0,
      explain: 'Every Konjunktiv II sentence signals a world that differs from actual reality.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-irreal-praesens', html: 'Unreal present (wäre/hätte) and unreal past (hätte/wäre + Partizip II) both mark distance from reality — present hypothetical vs. past regret.' },
    { c: 'r-hypothese', html: 'Academic hypotheses (Es wäre denkbar, Man könnte annehmen, Es ließe sich vermuten) hedge claims cautiously and elegantly.' },
    { c: 'r-diplomatisch', html: 'Diplomatic softening (Ich würde vorschlagen, Es wäre sinnvoll) makes recommendations and disagreement more polite and professional.' }
  ],
  revisionTips: [
    'Write five sentences moving through the register scale: Ich will... → Ich möchte... → Ich würde gern... → Es wäre wünschenswert...',
    'Rewrite three simple factual sentences into unreal past regrets using "hätte/wäre + Partizip II".',
    'Practise replacing repeated "würde" constructions with elegant synthetic forms (wäre, hätte, käme, ließe) in one paragraph.'
  ]
};

window.CHAPTER = CHAPTER;
