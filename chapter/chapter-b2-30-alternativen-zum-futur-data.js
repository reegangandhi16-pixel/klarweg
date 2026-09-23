/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 3 · Chapter 30
   "Alternativen zum Futur" — native speakers rarely use werden +
   Infinitiv. They prefer: (1) Präsens + a future-time word for
   plain future meaning, and (2) probability adverbs —
   wahrscheinlich, vermutlich, wohl — for assumptions, instead of
   defaulting to Futur I in every case.
   Does NOT teach dürfte, könnte, mag, muss (Vermutung), or Futur II.
   IMPORTANT: dialogue uses ONLY Wiebke and Timo.
   Vocabulary source: uploaded chapter-30 list (53 items).
============================================================ */
const CHAPTER = {
  id: 'b2-30-alternativen-zum-futur',
  phase: 'B2 · Phase 3',
  number: 30,
  title: 'Alternativen zum Futur',
  titleEn: 'Alternatives to the future tense',
  description: 'Native speakers rarely say "werden + Infinitiv" — they use Präsens for plans and wahrscheinlich / vermutlich / wohl for guesses.',
  xp: 460,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 31, title: 'Konjunktiv II der Vergangenheit', titleEn: 'Konjunktiv II of the past' , href: 'chapter-b2-31-konjunktiv2-vergangenheit.html' },

  prevChapter: { number: 29, title: 'Futur I für Vermutungen', titleEn: 'Futur I for assumptions', href: 'chapter-b2-29-futur1-vermutungen.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Skip the <em>Futur</em> — Germans usually do.',
    intro: 'Wiebke and Timo plan tomorrow\'s riverbank cleanup — gloves, trash bags, a trip to the recycling centre — using Präsens for the plan itself and wahrscheinlich for the one thing they can only guess: how much rubbish they\'ll find.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how Präsens + a time word replaces Futur I, and wahrscheinlich/vermutlich/wohl replace assumption-Futur'
    ],
    scene: 'Reisepläne',
    femaleSpeakers: ['Wiebke'],
    dialogue: [
      { speaker: 'Wiebke', tokens: [
        { w: 'Morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'räumen', role: 'r-verb', en: 'clean up', hi: 'साफ़ करते हैं', pron: 'ROY-men', type: 'Verb · aufräumen (wir)', lexicalUnit: 'aufräumen', why: 'Präsens + time adverb expresses the future, an alternative to werden (this chapter).', ex: 'Morgen räumen wir das Ufer auf.', exEn: 'Tomorrow we clean up the riverbank.' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Ufer', role: 'r-akkusativ', en: 'riverbank', hi: 'किनारा', pron: 'OO-fer', type: 'Noun · neut.', why: 'das Ufer (this chapter).', ex: 'das Ufer aufräumen' },
        { w: 'auf', role: 'r-verb', en: '(prefix of aufräumen)', hi: '', pron: 'owf', type: 'Separable prefix · Satzende', lexicalUnit: 'aufräumen' },
        { w: '.', plain: true }
      ], en: 'Tomorrow we clean up the riverbank.', hi: 'Kal hum kinaara saaf karte hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben', lexicalUnit: 'vorhaben' },
        { w: 'vor', role: 'r-verb', en: 'plan', hi: 'योजना', pron: 'for', type: 'Separable prefix', lexicalUnit: 'vorhaben', why: 'vorhaben = to plan/intend, an alternative to werden for future intention (this chapter).', ex: 'Ich habe vor, früh zu kommen.', exEn: 'I plan to come early.' },
        { w: ',', plain: true },
        { w: 'früh', role: 'r-adverb', en: 'early', hi: 'जल्दी', pron: 'frü', type: 'Adverb' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'kommen', role: 'r-verb', en: 'come', hi: 'आना', pron: 'KO-men', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I plan to come early.', hi: 'Main jaldi aane ki soch raha hoon.' },
      { speaker: 'Wiebke', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bringe', role: 'r-verb', en: 'bring', hi: 'लाती हूँ', pron: 'BRING-uh', type: 'Verb · bringen (ich)', lexicalUnit: 'mitbringen' },
        { w: 'Handschuhe', role: 'r-akkusativ', en: 'gloves', hi: 'दस्ताने', pron: 'HANT-shoo-uh', type: 'Noun · plural' },
        { w: 'mit', role: 'r-verb', en: '(prefix of mitbringen)', hi: 'साथ', pron: 'mit', type: 'Separable prefix', lexicalUnit: 'mitbringen' },
        { w: '.', plain: true }
      ], en: 'Good. I bring gloves along.', hi: 'Achha. Main dastaane saath laati hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'machen', role: 'r-verb', en: 'do', hi: 'करते हैं', pron: 'MA-khen', type: 'Verb · machen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Müll', role: 'r-dativ', en: 'trash (dat.)', hi: 'कचरे के', pron: 'mül', type: 'Noun · masc. dat.' },
        { w: '?', plain: true }
      ], en: 'And what do we do with the trash?', hi: 'Aur hum kachre ke saath kya karte hain?' },
      { speaker: 'Wiebke', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sammeln', role: 'r-verb', en: 'collect', hi: 'जमा करते हैं', pron: 'ZA-meln', type: 'Verb · sammeln (wir)' },
        { w: 'ihn', role: 'r-akkusativ', en: 'it (masc.)', hi: 'उसे', pron: 'een', type: 'Pronoun · acc.' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'bringen', role: 'r-verb', en: 'bring', hi: 'ले जाते हैं', pron: 'BRING-en', type: 'Verb · bringen (wir)' },
        { w: 'ihn', role: 'r-akkusativ', en: 'it (masc.)', hi: 'उसे', pron: 'een', type: 'Pronoun · acc.' },
        { w: 'zum', role: 'r-preposition', en: 'to the', hi: 'के लिए', pron: 'tsum', type: 'Preposition + place' },
        { w: 'Recyclinghof', role: 'r-dativ', en: 'recycling center (dat.)', hi: 'रीसाइक्लिंग केंद्र में', pron: 'ree-SY-kling-hohf', type: 'Noun · masc. dat.', why: 'der Recyclinghof (this chapter).', ex: 'zum Recyclinghof bringen' },
        { w: '.', plain: true }
      ], en: 'We collect it and bring it to the recycling center.', hi: 'Hum use jama karte hain aur recycling kendra le jaate hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'gespannt', role: 'r-akkusativ', en: 'curious', hi: 'उत्सुक', pron: 'ge-SHPANT', type: 'Adjective', why: 'gespannt sein = to be curious/eager (this chapter).', ex: 'Ich bin gespannt.', exEn: 'I am curious.' },
        { w: ',', plain: true },
        { w: 'wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
        { w: 'viel', role: 'r-akkusativ', en: 'much', hi: 'ज़्यादा', pron: 'feel', type: 'Adverb' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'finden', role: 'r-verb', en: 'find', hi: 'मिलेगा', pron: 'FIN-den', type: 'Verb · finden (wir, Satzende)' },
        { w: '.', plain: true }
      ], en: 'I am curious how much we will find.', hi: 'Main utsuk hoon ki humein kitna milega.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Native speakers rarely reach for <span class="de r-alternativen">werden + Infinitiv</span>. For plans, they use <span class="de r-alternativen">Präsens</span> plus a future-time word (<span class="de">morgen</span>, <span class="de">nächste Woche</span>). For guesses, they use <span class="de r-alternativen">wahrscheinlich</span>, <span class="de r-alternativen">vermutlich</span>, or <span class="de r-alternativen">wohl</span> — simpler, more natural than Futur I für Vermutungen.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ALTERNATIVEN ZUM FUTUR (B2 level): native speakers rarely use "werden + Infinitiv". Instead they use (1) Präsens + a future-time word (morgen, nächste Woche) to express future plans, and (2) probability adverbs — wahrscheinlich, vermutlich, wohl — to express assumptions, instead of Futur I für Vermutungen (Ch.29). This builds directly on Ch.29 — the learner already knows Futur I can mean assumption; this chapter teaches the MORE NATURAL alternatives that native speakers actually prefer. ' +
    'Do NOT expect or require dürfte, könnte, mag, muss (Vermutung), or Futur II — those are out of scope; do not flag their absence, and do not require the learner to use them. Using Futur I occasionally (for emphasis) is not wrong — only flag it as a style suggestion, never as an error, when Präsens or a probability adverb would sound more natural. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Präsens + a future-time word expressing a future plan is CORRECT and preferred — never flag it as needing Futur I.\n' +
    '- wahrscheinlich / vermutlich / wohl expressing a guess are CORRECT — never flag them as needing Futur I für Vermutungen.\n' +
    '- Do NOT flag occasional genuine Futur I use as an error; you may gently note where Präsens or a probability adverb would sound more natural, but frame this as a style tip, not a mistake.\n' +
    '- Flag actual errors only: double-marking probability (e.g. "wahrscheinlich wird er wohl kommen"), wrong word order for wohl/wahrscheinlich/vermutlich, or genuine verb-form mistakes.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Naturalness check:</b> one sentence on whether the learner chose the most natural structure (Präsens/probability adverb) instead of over-relying on Futur I.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you naturally reach for Präsens and probability adverbs instead of defaulting to Futur I. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the future-expression comparison table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: native speakers usually say "Morgen fahre ich," not "Morgen werde ich fahren," and prefer wahrscheinlich/vermutlich/wohl over Futur I für Vermutungen.'
  },

  parserSentence: [
    { w: 'Morgen', role: 'plain' }, { w: 'fahre', role: 'r-alternativen' }, { w: 'ich', role: 'plain' },
    { w: 'nach', role: 'plain' }, { w: 'Berlin', role: 'plain' }, { w: '.', plain: true }, { w: 'Sie', role: 'plain' }, { w: 'ist', role: 'plain' }, { w: 'wohl', role: 'r-alternativen' }, { w: 'krank', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: German usually skips Futur I in favour of simpler, more natural alternatives.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Wiebke and Timo plan a trip and guess about schedules, almost never using "werden + Infinitiv".' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 53 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master Präsens-for-future and the wahrscheinlich / vermutlich / wohl trio.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read travel plans and an office discussion full of natural future alternatives.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify Präsens-for-future, probability words, and register differences.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Discuss future plans and make natural assumptions without over-relying on Futur I.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write emails and opinion texts using natural future expressions.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Futur I → Präsens transformation and choosing the right probability word.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 460 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 53 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Futur I → Präsens transformations, probability-word drills, and a natural-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete future-expression comparison, decision flowchart, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Morgen fahre ich nach Berlin.', text: 'Express future plans naturally with Präsens' },
    { de: 'Anna kommt wahrscheinlich später.', text: 'Use wahrscheinlich for everyday probability' },
    { de: 'Der Zug hat vermutlich Verspätung.', text: 'Use vermutlich for slightly more formal probability' },
    { de: 'Anna ist wohl krank.', text: 'Use wohl for a personal, spoken-register assumption' },
    { de: 'Präsens > Futur I (meist)', text: 'Recognize when Futur I is the exception, not the default' }
  ],

  // ---------- Vocabulary (53 items — uploaded chapter-30 list) ----------
  vocab: [
    { de: 'Notausgang', art: 'der', gender: 'm', plural: 'Notausgänge', pos: 'noun', level: 'B2', register: 'both', en: 'emergency exit', hi: 'आपातकालीन निकास', ex: 'Der Notausgang war klar gekennzeichnet.', exEn: 'The emergency exit was clearly marked.', exHi: 'Aapaatkaaleen nikaas spasht roop se chihnit tha.', ex2: 'Sie haben den Notausgang gefunden.', ex2En: 'They\'ve found the emergency exit.', ex2Hi: 'Unhein aapaatkaaleen nikaas mil gaya hai.' },
    { de: 'Ofen', art: 'der', gender: 'm', plural: 'Öfen', pos: 'noun', level: 'B2', register: 'both', en: 'oven, stove', hi: 'ओवन', ex: 'Der Ofen war noch heiß.', exEn: 'The oven was still hot.', exHi: 'Oven abhi bhi garam tha.', ex2: 'Sie hat den Kuchen im Ofen gebacken.', ex2En: 'She\'s baked the cake in the oven.', ex2Hi: 'Usne cake oven mein bake kiya hai.' },
    { de: 'Ökosystem', art: 'das', gender: 'n', plural: 'Ökosysteme', pos: 'noun', level: 'B2', register: 'written', en: 'ecosystem', hi: 'पारिस्थितिकी तंत्र', ex: 'Das Ökosystem des Sees war gefährdet.', exEn: 'The ecosystem of the lake was endangered.', exHi: 'Jheel ka paaristhitiki tantra khatre mein tha.', ex2: 'Sie haben das Ökosystem geschützt.', ex2En: 'They\'ve protected the ecosystem.', ex2Hi: 'Unhone paaristhitiki tantra ki raksha ki hai.' },
    { de: 'Perlenkette', art: 'die', gender: 'f', plural: 'Perlenketten', pos: 'noun', level: 'B2', register: 'both', en: 'pearl necklace', hi: 'मोतियों का हार', ex: 'Sie trug eine Perlenkette.', exEn: 'She wore a pearl necklace.', exHi: 'Usne motiyon ka haar pehna.', ex2: 'Er hat ihr eine Perlenkette geschenkt.', ex2En: 'He\'s given her a pearl necklace as a gift.', ex2Hi: 'Usne use motiyon ka haar tohfe mein diya hai.' },
    { de: 'Pfingsten', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'Whitsun, Pentecost', hi: 'पंतेकुस्त', ex: 'Zu Pfingsten fahren wir aufs Land.', exEn: 'At Whitsun, we go to the countryside.', exHi: 'Pantekust par, hum gaanv jaate hain.', ex2: 'Sie haben Pfingsten zu Hause verbracht.', ex2En: 'They\'ve spent Whitsun at home.', ex2Hi: 'Unhone Pantekust ghar par bitaaya hai.' },
    { de: 'Ratte', art: 'die', gender: 'f', plural: 'Ratten', pos: 'noun', level: 'B2', register: 'both', en: 'rat', hi: 'चूहा', ex: 'Eine Ratte lief über die Straße.', exEn: 'A rat ran across the street.', exHi: 'Ek chuha sadak paar bhaagaa.', ex2: 'Sie haben Ratten im Keller gefunden.', ex2En: 'They\'ve found rats in the basement.', ex2Hi: 'Unhein basement mein chuhe mile hain.' },
    { de: 'reformieren', pos: 'verb', level: 'B2', register: 'written', en: 'to reform', hi: 'सुधार करना', ex: 'Die Regierung reformierte das System.', exEn: 'The government reformed the system.', exHi: 'Sarkaar ne pranaali mein sudhaar kiya.', ex2: 'Sie haben das Bildungssystem reformiert.', ex2En: 'They\'ve reformed the education system.', ex2Hi: 'Unhone shiksha pranaali mein sudhaar kiya hai.', conj: { praesens: 'reformiert', praeteritum: 'reformierte', perfekt: 'hat reformiert' } },
    { de: 'Regierungschef/in', art: 'der/die', gender: 'm/f', plural: 'Regierungschefs/innen', pos: 'noun', level: 'B2', register: 'written', en: 'head of government', hi: 'सरकार का प्रमुख', ex: 'Der Regierungschef hielt eine Rede.', exEn: 'The head of government gave a speech.', exHi: 'Sarkaar ke pramukh ne bhaashan diya.', ex2: 'Sie ist Regierungschefin geworden.', ex2En: 'She\'s become head of government.', ex2Hi: 'Woh sarkaar ki pramukh ban gayi hai.' },
    { de: 'Rentner/in', art: 'der/die', gender: 'm/f', plural: 'Rentner/innen', pos: 'noun', level: 'B2', register: 'both', en: 'pensioner, retiree', hi: 'पेंशनभोगी', ex: 'Der Rentner genoss seine Freizeit.', exEn: 'The pensioner enjoyed his free time.', exHi: 'Pensionbhogi ne apna khaali samay ka aanand liya.', ex2: 'Sie ist seit letztem Jahr Rentnerin.', ex2En: 'She\'s been a pensioner since last year.', ex2Hi: 'Woh pichhle saal se pensionbhogi hai.' },
    { de: 'schaufeln', pos: 'verb', level: 'B2', register: 'both', en: 'to shovel', hi: 'फावड़े से खोदना', ex: 'Er schaufelte den Schnee weg.', exEn: 'He shoveled away the snow.', exHi: 'Usne barf phaawde se hataayi.', ex2: 'Wir haben ein Loch geschaufelt.', ex2En: 'We\'ve shoveled a hole.', ex2Hi: 'Humne ek gadda khoda hai.', conj: { praesens: 'schaufelt', praeteritum: 'schaufelte', perfekt: 'hat geschaufelt' } },
    { de: 'Schiedsrichter/in', art: 'der/die', gender: 'm/f', plural: 'Schiedsrichter/innen', pos: 'noun', level: 'B2', register: 'both', en: 'referee, umpire', hi: 'रेफरी', ex: 'Der Schiedsrichter pfiff das Spiel ab.', exEn: 'The referee blew the whistle to end the game.', exHi: 'Referee ne khel khatm karne ki seetee bajaayi.', ex2: 'Sie hat als Schiedsrichterin gearbeitet.', ex2En: 'She\'s worked as a referee.', ex2Hi: 'Usne referee ke roop mein kaam kiya hai.' },
    { de: 'Schneeflocke', art: 'die', gender: 'f', plural: 'Schneeflocken', pos: 'noun', level: 'B2', register: 'both', en: 'snowflake', hi: 'बर्फ का टुकड़ा', ex: 'Die erste Schneeflocke fiel im November.', exEn: 'The first snowflake fell in November.', exHi: 'Pehla barf ka tukda November mein gira.', ex2: 'Kinder fingen die Schneeflocken auf.', ex2En: 'Children caught the snowflakes.', ex2Hi: 'Bachchon ne barf ke tukde pakde.' },
    { de: 'schöpfen', pos: 'verb', level: 'B2', register: 'written', en: 'to draw, ladle, create', hi: 'निकालना, रचना करना', ex: 'Sie schöpfte Wasser aus dem Brunnen.', exEn: 'She drew water from the well.', exHi: 'Usne kuen se paani nikaala.', ex2: 'Er hat neue Hoffnung geschöpft.', ex2En: 'He\'s drawn new hope.', ex2Hi: 'Usne nayi ummeed jagaayi hai.', conj: { praesens: 'schöpft', praeteritum: 'schöpfte', perfekt: 'hat geschöpft' } },
    { de: 'Seife', art: 'die', gender: 'f', plural: 'Seifen', pos: 'noun', level: 'B2', register: 'both', en: 'soap', hi: 'साबुन', ex: 'Die Seife roch nach Lavendel.', exEn: 'The soap smelled of lavender.', exHi: 'Saabun mein lavender ki khushbu thi.', ex2: 'Sie hat neue Seife gekauft.', ex2En: 'She\'s bought new soap.', ex2Hi: 'Usne naya saabun khareeda hai.' },
    { de: 'Sichel', art: 'die', gender: 'f', plural: 'Sicheln', pos: 'noun', level: 'B2', register: 'written', en: 'sickle', hi: 'हंसिया', ex: 'Der Bauer benutzte eine Sichel.', exEn: 'The farmer used a sickle.', exHi: 'Kisaan ne hansiya ka istemaal kiya.', ex2: 'Sie haben mit einer alten Sichel geerntet.', ex2En: 'They\'ve harvested with an old sickle.', ex2Hi: 'Unhone ek puraane hansiye se fasal kaati hai.' },
    { de: 'Sichtweise', art: 'die', gender: 'f', plural: 'Sichtweisen', pos: 'noun', level: 'B2', register: 'written', en: 'perspective, viewpoint', hi: 'दृष्टिकोण', ex: 'Ihre Sichtweise war anders.', exEn: 'Her perspective was different.', exHi: 'Uska drishtikon alag tha.', ex2: 'Wir haben unsere Sichtweisen ausgetauscht.', ex2En: 'We\'ve exchanged our perspectives.', ex2Hi: 'Humne apne drishtikon share kiye hain.' },
    { de: 'Sowjetunion', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'Soviet Union', hi: 'सोवियत संघ', ex: 'Die Sowjetunion existierte bis 1991.', exEn: 'The Soviet Union existed until 1991.', exHi: 'Soviet sangh 1991 tak astitva mein raha.', ex2: 'Historiker haben die Sowjetunion untersucht.', ex2En: 'Historians have studied the Soviet Union.', ex2Hi: 'Itihaaskaaron ne Soviet sangh ka adhyayan kiya hai.' },
    { de: 'sperren', pos: 'verb', level: 'B2', register: 'both', en: 'to block, lock', hi: 'बंद करना', ex: 'Die Polizei sperrte die Straße.', exEn: 'The police blocked the street.', exHi: 'Police ne sadak band kar di.', ex2: 'Sie haben das Konto gesperrt.', ex2En: 'They\'ve blocked the account.', ex2Hi: 'Unhone account block kar diya hai.', conj: { praesens: 'sperrt', praeteritum: 'sperrte', perfekt: 'hat gesperrt' } },
    { de: 'Sportgeschäft', art: 'das', gender: 'n', plural: 'Sportgeschäfte', pos: 'noun', level: 'B2', register: 'both', en: 'sports shop', hi: 'खेल की दुकान', ex: 'Ich kaufe die Schuhe im Sportgeschäft.', exEn: 'I buy the shoes at the sports shop.', exHi: 'Main joote khel ki dukaan se khareedta hoon.', ex2: 'Sie haben ein neues Sportgeschäft eröffnet.', ex2En: 'They\'ve opened a new sports shop.', ex2Hi: 'Unhone ek nayi khel ki dukaan kholi hai.' },
    { de: 'stapeln', pos: 'verb', level: 'B2', register: 'both', en: 'to stack, pile', hi: 'ढेर लगाना', ex: 'Er stapelte die Kisten im Lager.', exEn: 'He stacked the boxes in the warehouse.', exHi: 'Usne godaam mein dibbe rakhe.', ex2: 'Sie haben die Bücher gestapelt.', ex2En: 'They\'ve stacked the books.', ex2Hi: 'Unhone kitaabon ka dher lagaaya hai.', conj: { praesens: 'stapelt', praeteritum: 'stapelte', perfekt: 'hat gestapelt' } },
    { de: 'Stiftung', art: 'die', gender: 'f', plural: 'Stiftungen', pos: 'noun', level: 'B2', register: 'written', en: 'foundation (organisation)', hi: 'फाउंडेशन', ex: 'Die Stiftung unterstützte viele Projekte.', exEn: 'The foundation supported many projects.', exHi: 'Foundation ne kai projects ko samarthan diya.', ex2: 'Sie haben eine Stiftung gegründet.', ex2En: 'They\'ve founded a foundation.', ex2Hi: 'Unhone ek foundation sthaapit ki hai.' },
    { de: 'stinken', pos: 'verb', level: 'B2', register: 'both', en: 'to stink', hi: 'बदबू करना', ex: 'Der Müll stank fürchterlich.', exEn: 'The garbage stank terribly.', exHi: 'Kachra bahut bura badbu kar raha tha.', ex2: 'Es hat nach Rauch gestunken.', ex2En: 'It\'s smelled of smoke.', ex2Hi: 'Dhuen ki badbu aa rahi thi.', conj: { praesens: 'stinkt', praeteritum: 'stank', perfekt: 'hat gestunken' } },
    { de: 'Trog', art: 'der', gender: 'm', plural: 'Tröge', pos: 'noun', level: 'B2', register: 'written', en: 'trough', hi: 'नाद', ex: 'Die Tiere fraßen aus dem Trog.', exEn: 'The animals ate from the trough.', exHi: 'Jaanwaron ne naad se khaaya.', ex2: 'Er hat den Trog gereinigt.', ex2En: 'He\'s cleaned the trough.', ex2Hi: 'Usne naad ko saaf kiya hai.' },
    { de: 'überfluten', pos: 'verb', level: 'B2', register: 'both', en: 'to flood', hi: 'बाढ़ लाना', ex: 'Der Fluss überflutete die Felder.', exEn: 'The river flooded the fields.', exHi: 'Nadi ne kheton mein baadh laa di.', ex2: 'Das Wasser hat den Keller überflutet.', ex2En: 'The water has flooded the basement.', ex2Hi: 'Paani ne basement mein baadh laa di hai.', conj: { praesens: 'überflutet', praeteritum: 'überflutete', perfekt: 'hat überflutet' } },
    { de: 'Ufer', art: 'das', gender: 'n', plural: 'Ufer', pos: 'noun', level: 'B2', register: 'both', en: 'shore, bank', hi: 'तट', ex: 'Sie saßen am Ufer des Sees.', exEn: 'They sat on the shore of the lake.', exHi: 'Woh jheel ke tat par baithe the.', ex2: 'Wir haben das Ufer entlang gespaziert.', ex2En: 'We\'ve walked along the shore.', ex2Hi: 'Humne tat ke saath sair ki hai.' },
    { de: 'unentbehrlich', pos: 'adjective', level: 'B2', register: 'written', en: 'indispensable', hi: 'अनिवार्य', ex: 'Ihre Hilfe war unentbehrlich.', exEn: 'Her help was indispensable.', exHi: 'Uski madad anivaarya thi.', ex2: 'Er ist für das Team unentbehrlich.', ex2En: 'He\'s indispensable to the team.', ex2Hi: 'Woh team ke liye anivaarya hai.' },
    { de: 'Verspätung', art: 'die', gender: 'f', plural: 'Verspätungen', pos: 'noun', level: 'B2', register: 'both', en: 'delay', hi: 'देरी', ex: 'Der Zug hat vermutlich Verspätung.', exEn: 'The train presumably has a delay.', exHi: 'Train mein sambhavatah deri hai.', ex2: 'Wir hatten eine Stunde Verspätung.', ex2En: 'We had an hour\'s delay.', ex2Hi: 'Hamein ek ghante ki deri hui.' },
    { de: 'verwelken', pos: 'verb', level: 'B2', register: 'written', en: 'to wilt, wither', hi: 'मुरझाना', ex: 'Die Blumen verwelkten schnell.', exEn: 'The flowers wilted quickly.', exHi: 'Phool jaldi murjhaa gaye.', ex2: 'Die Pflanze ist verwelkt.', ex2En: 'The plant has wilted.', ex2Hi: 'Paudha murjha gaya hai.', conj: { praesens: 'verwelkt', praeteritum: 'verwelkte', perfekt: 'ist verwelkt' } },
    { de: 'Vorurteil', art: 'das', gender: 'n', plural: 'Vorurteile', pos: 'noun', level: 'B2', register: 'written', en: 'prejudice', hi: 'पूर्वाग्रह', ex: 'Vorurteile schaden der Gesellschaft.', exEn: 'Prejudice harms society.', exHi: 'Poorvaagrah samaaj ko nuksaan pahunchaate hain.', ex2: 'Sie haben ihre Vorurteile überwunden.', ex2En: 'They\'ve overcome their prejudices.', ex2Hi: 'Unhone apne poorvaagrahon par kaabu paa liya hai.' },
    { de: 'Waise', art: 'der/die', gender: 'm/f', plural: 'Waisen', pos: 'noun', level: 'B2', register: 'written', en: 'orphan', hi: 'अनाथ', ex: 'Die Waise wuchs bei ihrer Tante auf.', exEn: 'The orphan grew up with her aunt.', exHi: 'Anaath apni buaa ke saath badi hui.', ex2: 'Sie haben viele Waisen unterstützt.', ex2En: 'They\'ve supported many orphans.', ex2Hi: 'Unhone kai anaathon ka samarthan kiya hai.' },
    { de: 'Waldbrand', art: 'der', gender: 'm', plural: 'Waldbrände', pos: 'noun', level: 'B2', register: 'written', en: 'forest fire', hi: 'जंगल की आग', ex: 'Der Waldbrand zerstörte viele Bäume.', exEn: 'The forest fire destroyed many trees.', exHi: 'Jangal ki aag ne kai ped nasht kar diye.', ex2: 'Die Feuerwehr hat den Waldbrand gelöscht.', ex2En: 'The fire department has extinguished the forest fire.', ex2Hi: 'Fire department ne jangal ki aag bujhaa di hai.' },
    { de: 'Wanderweg', art: 'der', gender: 'm', plural: 'Wanderwege', pos: 'noun', level: 'B2', register: 'both', en: 'hiking trail', hi: 'पैदल यात्रा मार्ग', ex: 'Der Wanderweg führte durch den Wald.', exEn: 'The hiking trail led through the forest.', exHi: 'Paidal yatra maarg jangal se hokar guzarta tha.', ex2: 'Wir sind den Wanderweg entlanggelaufen.', ex2En: 'We\'ve walked along the hiking trail.', ex2Hi: 'Hum paidal yatra maarg ke saath chale hain.' },
    { de: 'Weinberg', art: 'der', gender: 'm', plural: 'Weinberge', pos: 'noun', level: 'B2', register: 'both', en: 'vineyard', hi: 'अंगूर का बाग़', ex: 'Der Weinberg lag am Hang.', exEn: 'The vineyard was on the slope.', exHi: 'Angoor ka baagh dhalaan par tha.', ex2: 'Sie haben den Weinberg besichtigt.', ex2En: 'They\'ve visited the vineyard.', ex2Hi: 'Unhone angoor ke baagh ka daura kiya hai.' },
    { de: 'weiterentwickeln', pos: 'verb', level: 'B2', register: 'written', en: 'to further develop', hi: 'आगे विकसित करना', ex: 'Sie entwickelten das Produkt weiter.', exEn: 'They further developed the product.', exHi: 'Unhone product ko aur vikasit kiya.', ex2: 'Wir haben unsere Fähigkeiten weiterentwickelt.', ex2En: 'We\'ve further developed our skills.', ex2Hi: 'Humne apni kushalta aur vikasit ki hai.', conj: { praesens: 'entwickelt weiter', praeteritum: 'entwickelte weiter', perfekt: 'hat weiterentwickelt' } },
    { de: 'Wende', art: 'die', gender: 'f', plural: 'Wenden', pos: 'noun', level: 'B2', register: 'written', en: 'turning point', hi: 'मोड़', ex: 'Die Wende veränderte das Land grundlegend.', exEn: 'The turning point fundamentally changed the country.', exHi: 'Mod ne desh ko moolik roop se badla.', ex2: 'Sie haben die Wende miterlebt.', ex2En: 'They\'ve witnessed the turning point.', ex2Hi: 'Unhone mod ka anubhav kiya hai.' },
    { de: 'wertvoll', pos: 'adjective', level: 'B2', register: 'both', en: 'valuable', hi: 'मूल्यवान', ex: 'Das war ein wertvoller Rat.', exEn: 'That was valuable advice.', exHi: 'Yeh ek mulyavaan salaah thi.', ex2: 'Sie haben wertvolle Erfahrungen gesammelt.', ex2En: 'They\'ve gathered valuable experience.', ex2Hi: 'Unhone mulyavaan anubhav ekatra kiya hai.' },
    { de: 'Widerstand', art: 'der', gender: 'm', plural: 'Widerstände', pos: 'noun', level: 'B2', register: 'written', en: 'resistance', hi: 'प्रतिरोध', ex: 'Der Widerstand gegen die Reform wuchs.', exEn: 'Resistance against the reform grew.', exHi: 'Sudhaar ke khilaaf pratirodh badha.', ex2: 'Sie haben Widerstand geleistet.', ex2En: 'They\'ve put up resistance.', ex2Hi: 'Unhone pratirodh kiya hai.' },
    { de: 'wund', pos: 'adjective', level: 'B2', register: 'both', en: 'sore, raw', hi: 'घायल, दर्दनाक', ex: 'Ihre Füße waren wund.', exEn: 'Her feet were sore.', exHi: 'Uske paanv dukh rahe the.', ex2: 'Er hat sich die Hand wund gerieben.', ex2En: 'He\'s rubbed his hand sore.', ex2Hi: 'Usne apna haath rgadkar dukhaaya hai.' },
    { de: 'Zeitzeuge/-zeugin', art: 'der/die', gender: 'm/f', plural: 'Zeitzeugen/-zeuginnen', pos: 'noun', level: 'B2', register: 'written', en: 'contemporary witness', hi: 'प्रत्यक्षदर्शी', ex: 'Der Zeitzeuge erzählte von seiner Kindheit.', exEn: 'The contemporary witness told of his childhood.', exHi: 'Pratyakshadarshi ne apne bachpan ke baare mein bataaya.', ex2: 'Sie haben viele Zeitzeugen befragt.', ex2En: 'They\'ve interviewed many contemporary witnesses.', ex2Hi: 'Unhone kai pratyakshadarshiyon se poochha hai.' },
    { de: 'Zweifel', art: 'der', gender: 'm', plural: 'Zweifel', pos: 'noun', level: 'B2', register: 'both', en: 'doubt', hi: 'संदेह', ex: 'Sie hatte Zweifel an dem Plan.', exEn: 'She had doubts about the plan.', exHi: 'Use yojana par sandeh tha.', ex2: 'Er hat seine Zweifel geäußert.', ex2En: 'He\'s expressed his doubts.', ex2Hi: 'Usne apne sandeh vyakt kiye hain.' },
    { de: 'zweisprachig', pos: 'adjective', level: 'B2', register: 'both', en: 'bilingual', hi: 'द्विभाषी', ex: 'Die Kinder wuchsen zweisprachig auf.', exEn: 'The children grew up bilingual.', exHi: 'Bachche dwibhaashi hokar bade hue.', ex2: 'Sie haben ein zweisprachiges Buch geschrieben.', ex2En: 'They\'ve written a bilingual book.', ex2Hi: 'Unhone ek dwibhaashi kitaab likhi hai.' },
    { de: 'Zwischenfall', art: 'der', gender: 'm', plural: 'Zwischenfälle', pos: 'noun', level: 'B2', register: 'written', en: 'incident', hi: 'घटना', ex: 'Es gab einen kleinen Zwischenfall.', exEn: 'There was a small incident.', exHi: 'Ek chhoti si ghatna hui.', ex2: 'Sie haben den Zwischenfall gemeldet.', ex2En: 'They\'ve reported the incident.', ex2Hi: 'Unhone ghatna ki soochna di hai.' },
    { de: 'anlegen', pos: 'verb', level: 'B2', register: 'both', en: 'to invest, dock, plant', hi: 'निवेश करना, लगाना', ex: 'Sie legte ihr Geld gut an.', exEn: 'She invested her money well.', exHi: 'Usne apna paisa achhe se nivesh kiya.', ex2: 'Wir haben ein neues Gemüsebeet angelegt.', ex2En: 'We\'ve created a new vegetable patch.', ex2Hi: 'Humne ek nayi sabzi ki kyaari banaayi hai.', conj: { praesens: 'legt an', praeteritum: 'legte an', perfekt: 'hat angelegt' } },
    { de: 'Anlegestelle', art: 'die', gender: 'f', plural: 'Anlegestellen', pos: 'noun', level: 'B2', register: 'both', en: 'landing dock', hi: 'नौका घाट', ex: 'Das Boot legte an der Anlegestelle an.', exEn: 'The boat docked at the landing dock.', exHi: 'Naav nauka ghaat par ruki.', ex2: 'Sie haben eine neue Anlegestelle gebaut.', ex2En: 'They\'ve built a new landing dock.', ex2Hi: 'Unhone ek naya nauka ghaat banaaya hai.' },
    { de: 'Anschein', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'appearance, semblance', hi: 'प्रतीत होना', ex: 'Allem Anschein nach war es ein Unfall.', exEn: 'By all appearances, it was an accident.', exHi: 'Sabhi lakshanon se lagta hai ki yeh ek durghatna thi.', ex2: 'Er erweckte den Anschein von Ruhe.', ex2En: 'He gave the appearance of calm.', ex2Hi: 'Usne shaanti ka aabhaas diya.' },
    { de: 'aufhängen', pos: 'verb', level: 'B2', register: 'both', en: 'to hang up', hi: 'लटकाना', ex: 'Sie hängte das Bild an die Wand.', exEn: 'She hung the picture on the wall.', exHi: 'Usne tasveer deewaar par lataakaayi.', ex2: 'Er hat die Wäsche aufgehängt.', ex2En: 'He\'s hung up the laundry.', ex2Hi: 'Usne kapde sukhaane ke liye lataakaaye hain.', conj: { praesens: 'hängt auf', praeteritum: 'hängte auf', perfekt: 'hat aufgehängt' } },
    { de: 'aufräumen', pos: 'verb', level: 'B2', register: 'both', en: 'to tidy up', hi: 'साफ करना', ex: 'Er räumte sein Zimmer auf.', exEn: 'He tidied up his room.', exHi: 'Usne apna kamra saaf kiya.', ex2: 'Wir haben die Küche aufgeräumt.', ex2En: 'We\'ve tidied up the kitchen.', ex2Hi: 'Humne rasoi saaf ki hai.', conj: { praesens: 'räumt auf', praeteritum: 'räumte auf', perfekt: 'hat aufgeräumt' } },
    { de: 'ausleeren', pos: 'verb', level: 'B2', register: 'both', en: 'to empty out', hi: 'खाली करना', ex: 'Sie leerte den Mülleimer aus.', exEn: 'She emptied out the trash can.', exHi: 'Usne kooda daan khaali kiya.', ex2: 'Er hat den Koffer ausgeleert.', ex2En: 'He\'s emptied out the suitcase.', ex2Hi: 'Usne suitcase khaali kiya hai.', conj: { praesens: 'leert aus', praeteritum: 'leerte aus', perfekt: 'hat ausgeleert' } },
    { de: 'Baumwolle', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'cotton', hi: 'कपास', ex: 'Das Hemd war aus Baumwolle.', exEn: 'The shirt was made of cotton.', exHi: 'Shirt kapaas se bani thi.', ex2: 'Sie haben Baumwolle angebaut.', ex2En: 'They\'ve grown cotton.', ex2Hi: 'Unhone kapaas ugaayi hai.' },
    { de: 'begießen', pos: 'verb', level: 'B2', register: 'both', en: 'to water (plants)', hi: 'पानी देना', ex: 'Sie begoss die Blumen jeden Morgen.', exEn: 'She watered the flowers every morning.', exHi: 'Woh har subah phoolon ko paani deti thi.', ex2: 'Er hat den Garten begossen.', ex2En: 'He\'s watered the garden.', ex2Hi: 'Usne bagiche ko paani diya hai.', conj: { praesens: 'begießt', praeteritum: 'begoss', perfekt: 'hat begossen' } },
    { de: 'Besitzer/in', art: 'der/die', gender: 'm/f', plural: 'Besitzer/innen', pos: 'noun', level: 'B2', register: 'both', en: 'owner', hi: 'मालिक', ex: 'Der Besitzer verkaufte das Haus.', exEn: 'The owner sold the house.', exHi: 'Maalik ne ghar becha.', ex2: 'Sie ist die Besitzerin des Ladens.', ex2En: 'She\'s the owner of the shop.', ex2Hi: 'Woh dukaan ki maalik hai.' },
    { de: 'Blitz', art: 'der', gender: 'm', plural: 'Blitze', pos: 'noun', level: 'B2', register: 'both', en: 'lightning', hi: 'बिजली', ex: 'Ein Blitz schlug in den Baum ein.', exEn: 'A bolt of lightning struck the tree.', exHi: 'Ek bijli ped par giri.', ex2: 'Sie haben den Blitz fotografiert.', ex2En: 'They\'ve photographed the lightning.', ex2Hi: 'Unhone bijli ki tasveer li hai.' },
    { de: 'Buchhandlung', art: 'die', gender: 'f', plural: 'Buchhandlungen', pos: 'noun', level: 'B2', register: 'both', en: 'bookshop', hi: 'किताबों की दुकान', ex: 'Die Buchhandlung verkaufte auch seltene Bücher.', exEn: 'The bookshop also sold rare books.', exHi: 'Kitaabon ki dukaan durlabh kitaabein bhi bechti thi.', ex2: 'Sie haben eine neue Buchhandlung eröffnet.', ex2En: 'They\'ve opened a new bookshop.', ex2Hi: 'Unhone ek nayi kitaabon ki dukaan kholi hai.' },
    { de: 'Bundeskanzler/in', art: 'der/die', gender: 'm/f', plural: 'Bundeskanzler/innen', pos: 'noun', level: 'B2', register: 'written', en: 'federal chancellor', hi: 'संघीय चांसलर', ex: 'Der Bundeskanzler traf sich mit anderen Politikern.', exEn: 'The federal chancellor met with other politicians.', exHi: 'Sangheey chancellor ne doosre neetaon se mulaakaat ki.', ex2: 'Sie hat als Bundeskanzlerin viel verändert.', ex2En: 'She\'s changed a lot as federal chancellor.', ex2Hi: 'Usne sangheey chancellor ke roop mein bahut kuch badla hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Warum Deutsche selten Futur I benutzen',
      body: [ 'Many learners believe German always uses werden + Infinitiv. Native speakers usually don\'t — they prefer Präsens or probability words.' ],
      table: {
        head: ['Natural', 'Also correct, but more formal'],
        rows: [
          ['<span class="de">Morgen fahre ich nach Berlin.</span>', '<span class="de">Morgen werde ich nach Berlin fahren.</span>']
        ]
      },
      hinglish: 'Bahut se learners sochte hain ki future ke liye hamesha <b>werden + Infinitiv</b> chahiye. Asal mein native speakers aksar seedha Pr\u00e4sens use karte hain, ya andaaze ke liye <b>wahrscheinlich</b>, <b>vermutlich</b>, <b>wohl</b> jaise words. Futur I galat nahi hai, bas kam aata hai.'
    },
    {
      title: 'Präsens für die Zukunft',
      body: [ 'A future time word + Präsens = future meaning.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Morgen arbeite ich von zu Hause.</span>'],
          ['<span class="de">Nächste Woche fliegen wir nach München.</span>'],
          ['<span class="de">Heute Abend treffe ich Anna.</span>']
        ]
      },
      hinglish: 'Tarika bahut simple hai \u2014 sentence mein koi future ka time word daal do (<span class="de">morgen</span>, <span class="de">n\u00e4chste Woche</span>) aur verb Pr\u00e4sens mein hi rakho. Matlab future ka ban jaata hai, aur yahi German mein sabse natural hai.'
    },
    {
      title: 'wahrscheinlich',
      body: [ 'Meaning: probably. Very common, natural in everyday spoken German.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Anna kommt wahrscheinlich später.</span>'],
          ['<span class="de">Wahrscheinlich regnet es morgen.</span>']
        ]
      },
      hinglish: 'Iska matlab hai "probably". Yeh rozmarra ki German mein bahut aata hai aur bolne mein bilkul natural lagta hai.'
    },
    {
      title: 'vermutlich',
      body: [ 'Meaning: probably, presumably — slightly more formal than wahrscheinlich.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Der Zug hat vermutlich Verspätung.</span>'],
          ['<span class="de">Vermutlich arbeitet Rohan noch.</span>']
        ]
      },
      hinglish: 'Iska matlab bhi "probably" hai, par yeh <b>wahrscheinlich</b> se thoda zyada formal lagta hai \u2014 reports aur written German mein zyada aata hai.'
    },
    {
      title: 'wohl',
      body: [ 'Meaning: probably, I suppose — often expresses the speaker\'s personal assumption. Extremely common in spoken German.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Anna ist wohl krank.</span>'],
          ['<span class="de">Er kommt wohl später.</span>']
        ]
      },
      hinglish: 'Iska matlab hai "mujhe lagta hai" \u2014 yeh speaker ka apna andaaza batata hai. Bolchaal mein yeh bahut common hai, aur yeh sentence ke beech mein baithta hai, shuru mein nahi.'
    },
    {
      title: 'Vergleich mit Futur I',
      body: [ 'Both structures are correct, but the natural alternatives sound more like everyday native speech.' ],
      table: {
        head: ['Futur I', 'Natural alternative'],
        rows: [
          ['<span class="de">Morgen werde ich arbeiten.</span> (formal/emphatic)', '<span class="de">Morgen arbeite ich.</span> (natural)'],
          ['<span class="de">Er wird krank sein.</span> (correct)', '<span class="de">Er ist wohl krank.</span> (more natural in conversation)']
        ]
      },
      hinglish: 'Dono hi sahi German hain \u2014 farak sirf yeh hai ki alternatives rozmarra ki baat mein zyada natural lagte hain, aur Futur I thoda formal ya emphatic lagta hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These are genuine errors \u2014 wrong verb position, a conjugated verb where an infinitive belongs, or two probability words stacked together. Choosing Futur I instead of Pr\u00e4sens is NOT an error: <span class="de">Morgen werde ich arbeiten</span> is correct, just more formal than <span class="de">Morgen arbeite ich</span>.' ],
      mistakes: [
        { wrong: 'Morgen ich fahre nach Berlin.', right: 'Morgen fahre ich nach Berlin.', why: 'When a time word opens the sentence it takes position 1, so the verb must follow immediately in position 2 \u2014 before the subject.' },
        { wrong: 'Morgen werde ich einkaufen gehe.', right: 'Morgen werde ich einkaufen gehen.', why: 'After werden the last verb must be a bare infinitive (gehen), never a conjugated form. (Both this and the simpler Pr\u00e4sens version \u2014 Morgen gehe ich einkaufen \u2014 are correct German; the Pr\u00e4sens one is just more common.)' },
        { wrong: 'Wahrscheinlich wird er wohl kommen.', right: 'Wahrscheinlich kommt er. (or) Er kommt wohl.', why: 'Combining two probability markers ("wahrscheinlich" and "wohl") in one sentence is redundant — use only one.' },
        { wrong: 'Vermutlich morgen ich arbeite.', right: 'Vermutlich arbeite ich morgen.', why: 'The verb must stay in second position — "vermutlich" occupies position 1, so the verb follows immediately.' },
        { wrong: 'Wohl ich komme später.', right: 'Ich komme wohl später.', why: '"wohl" is a modal particle that sits mid-sentence, not at the very start pushing the subject out of position 1.' }
      ],
      hinglish: 'Yeh sach mein galtiyan hain \u2014 verb galat position par, infinitive ki jagah conjugated form, ya do probability words ek saath. Ek baat clear rakho: Futur I use karna galti nahi hai. <span class="de">Morgen werde ich arbeiten</span> sahi hai, bas <span class="de">Morgen arbeite ich</span> zyada common hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Choosing the natural alternative over Futur I is a hallmark of fluent, native-like Goethe B2 speaking and writing.' ],
      note: 'Memory trick: Native Germans usually say "Morgen fahre ich," not "Morgen werde ich fahren." For guesses, reach for wahrscheinlich, vermutlich, or wohl before Futur I.',
      hinglish: 'Futur I ki jagah natural alternative chunna B2 par kaafi natural lagta hai \u2014 speaking aur writing dono mein isse farak padta hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Umweltreportage: Wie sich ein Ökosystem erholt',
    titleEn: 'Environmental report: how an ecosystem recovers',
    tokens: [
      { w: 'Das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Ökosystem', role: 'plain', en: 'ecosystem', hi: 'पारिस्थितिकी तंत्र', type: 'Noun · neut.', why: 'das Ökosystem (this chapter).' },
      { w: 'am', role: 'plain', en: 'at the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Ufer', role: 'plain', en: 'shore', hi: 'किनारे', type: 'Noun · neut.' },
      { w: 'erholt', role: 'plain', en: 'recovers', hi: 'ठीक होता है', type: 'Verb · sich erholen' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'gerade', role: 'plain', en: 'just now (Präsens statt Futur)', hi: 'अभी (Präsens Futur की जगह)', type: 'Adverb', why: 'Präsens + a time word like "gerade" is often used INSTEAD of Futur I for something already underway — a common alternative (this chapter).' },
      { w: 'von', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (masc. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'schweren', role: 'plain', en: 'severe', hi: 'गंभीर', type: 'Adjective' },
      { w: 'Waldbrand', role: 'plain', en: 'forest fire (Satzende)', hi: 'जंगल की आग (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Nächstes', role: 'plain', en: 'next', hi: 'अगले', type: 'Adjective' },
      { w: 'Jahr', role: 'plain', en: 'year', hi: 'साल', type: 'Noun · neut.', why: 'Präsens + a future time expression (nächstes Jahr) is the most common way Germans express the future — more natural than werden here (this chapter).' },
      { w: 'pflanzen', role: 'plain', en: 'plant (Präsens statt Futur, Position 2)', hi: 'लगाते हैं (Präsens Futur की जगह)', type: 'Verb · pflanzen (Präsens, Position 2)' },
      { w: 'Freiwillige', role: 'plain', en: 'volunteers', hi: 'स्वयंसेवक', type: 'Noun · plural' },
      { w: 'zehntausend', role: 'plain', en: 'ten thousand', hi: 'दस हज़ार', type: 'Number' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'नए', type: 'Adjective' },
      { w: 'Bäume', role: 'plain', en: 'trees (Satzende)', hi: 'पेड़ (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Widerstand', role: 'plain', en: 'resistance', hi: 'प्रतिरोध', type: 'Noun · masc.', why: 'der Widerstand (this chapter).' },
      { w: 'einiger', role: 'plain', en: 'of some (gen.)', hi: 'कुछ', type: 'Determiner · Genitiv' },
      { w: 'Anwohner', role: 'plain', en: 'residents (gen., Satzende)', hi: 'निवासियों (gen., Satzende)', type: 'Noun · plural' },
      { w: 'dürfte', role: 'r-verb', en: 'is likely to (Konjunktiv II als Vermutung, statt Futur)', hi: 'संभावना है (Konjunktiv II)', type: 'Verb · dürfen (Konjunktiv II, Vermutung)', why: '"dürfte" (Konjunktiv II of dürfen) softly expresses a likely assumption — another common alternative to werden for predictions (this chapter).' },
      { w: 'das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Projekt', role: 'plain', en: 'project', hi: 'परियोजना', type: 'Noun · neut.' },
      { w: 'jedoch', role: 'plain', en: 'however', hi: 'हालांकि', type: 'Adverb' },
      { w: 'kaum', role: 'plain', en: 'hardly', hi: 'मुश्किल से', type: 'Adverb' },
      { w: 'verzögern', role: 'r-verb', en: 'delay (Satzende)', hi: 'देरी करना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Zeitzeugin', role: 'plain', en: 'contemporary witness (f.)', hi: 'प्रत्यक्षदर्शी', type: 'Noun · fem.', why: 'der/die Zeitzeuge/-zeugin (this chapter).' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'zuversichtlich', role: 'plain', en: 'confident (Satzende)', hi: 'आशान्वित (Satzende)', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'dieser', role: 'plain', en: 'this', hi: 'यह', type: 'Determiner' },
      { w: 'wertvolle', role: 'plain', en: 'valuable', hi: 'मूल्यवान', type: 'Adjective', why: 'wertvoll (this chapter).' },
      { w: 'Wald', role: 'plain', en: 'forest', hi: 'जंगल', type: 'Noun · masc.' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'zwanzig', role: 'plain', en: 'twenty', hi: 'बीस', type: 'Number' },
      { w: 'Jahren', role: 'plain', en: 'years (Satzende)', hi: 'सालों (Satzende)', type: 'Noun · plural' },
      { w: 'wieder', role: 'plain', en: 'again', hi: 'फिर से', type: 'Adverb' },
      { w: 'steht', role: 'plain', en: 'stands (Satzende)', hi: 'खड़ा होगा (Satzende)', type: 'Verb · stehen (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'In', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'zehn', role: 'plain', en: 'ten', hi: 'दस', type: 'Number' },
      { w: 'Jahren', role: 'plain', en: 'years (Satzende, Präsens + Zeitangabe statt Futur)', hi: 'सालों (Satzende)', type: 'Noun · plural', why: 'A time expression + Präsens is a common alternative to Futur I for future plans (this chapter).' },
      { w: 'dürfte', role: 'r-verb', en: 'is likely to', hi: 'शायद', type: 'Verb · dürfte (Konjunktiv II, Vermutung)', why: 'dürfte + Infinitiv is another alternative to werden for a confident assumption (this chapter).' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Wald', role: 'plain', en: 'forest', hi: 'जंगल', type: 'Noun · masc.' },
      { w: 'daher', role: 'plain', en: 'therefore', hi: 'इसलिए', type: 'Adverb' },
      { w: 'wieder', role: 'plain', en: 'again', hi: 'फिर से', type: 'Adverb' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'beliebtes', role: 'plain', en: 'popular', hi: 'पसंदीदा', type: 'Adjective' },
      { w: 'Ausflugsziel', role: 'plain', en: 'excursion destination (Satzende)', hi: 'भ्रमण स्थल (Satzende)', type: 'Noun · neut.' },
      { w: 'sein', role: 'r-verb', en: 'be (Satzende)', hi: 'होना (Satzende)', type: 'Verb · Infinitiv (Rechte Klammer)' },
      { w: '.', plain: true },
      { w: 'Bis', role: 'plain', en: 'until', hi: 'तक', type: 'Preposition · Akk.' },
      { w: 'dahin', role: 'plain', en: 'then (Satzende)', hi: 'तब (Satzende)', type: 'Adverb' },
      { w: 'sammelt', role: 'plain', en: 'is collecting', hi: 'इकट्ठा कर रही है', type: 'Verb · sammeln (Präsens statt Futur)' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Initiative', role: 'plain', en: 'initiative', hi: 'पहल', type: 'Noun · fem.' },
      { w: 'weiter', role: 'plain', en: 'further', hi: 'आगे', type: 'Adverb' },
      { w: 'Spenden', role: 'plain', en: 'donations (Satzende)', hi: 'दान (Satzende)', type: 'Noun · plural' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Pflege', role: 'plain', en: 'care (Satzende)', hi: 'देखभाल (Satzende)', type: 'Noun · fem.' },
      { w: 'der', role: 'plain', en: 'of the (plural gen.)', hi: 'के', type: 'Article · Genitiv' },
      { w: 'jungen', role: 'plain', en: 'young', hi: 'नए', type: 'Adjective' },
      { w: 'Setzlinge', role: 'plain', en: 'saplings (Satzende)', hi: 'पौधे (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true }
    ],
    translation: 'The ecosystem on the shore is just now recovering from a severe forest fire. Next year, volunteers are planting ten thousand new trees. The resistance of some residents is likely to hardly delay the project, though. A contemporary witness is confident that this valuable forest will stand again in twenty years. In ten years, the forest is therefore likely to be a popular excursion destination again. Until then, the initiative continues collecting donations for the care of the young saplings.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_030_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wiebke, was brauchen wir morgen für die Flussufer-Aktion?', en: 'Wiebke, what do we need tomorrow for the riverbank action?' },
      { id: 'B2_030_L002', speaker: 'Wiebke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Handschuhe und Müllsäcke, die hole ich heute noch.', en: 'Gloves and trash bags, I\'ll get those today still.' },
      { id: 'B2_030_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und wie viel Müll finden wir wahrscheinlich?', en: 'And how much trash will we probably find?' },
      { id: 'B2_030_L004', speaker: 'Wiebke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Keine Ahnung, aber danach fahren wir direkt zum Wertstoffhof.', en: 'No idea, but afterwards we\'re driving straight to the recycling centre.' }
    ],
    transcript: 'Wiebke, was brauchen wir morgen für die Flussufer-Aktion? Handschuhe und Müllsäcke, die hole ich heute noch. Und wie viel Müll finden wir wahrscheinlich? Keine Ahnung, aber danach fahren wir direkt zum Wertstoffhof.',
    translation: 'Wiebke, what do we need tomorrow for the riverbank action? Gloves and trash bags, I\'ll get those today still. And how much trash will we probably find? No idea, but afterwards we\'re driving straight to the recycling centre.',
    tokens: [
      { w: 'Wiebke' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'brauchen' },
      { w: 'wir' },
      { w: 'morgen' },
      { w: 'für' },
      { w: 'die' },
      { w: 'Flussufer', noSpaceAfter: true },
      { w: '-', plain: true, noSpaceAfter: true },
      { w: 'Aktion' },
      { w: '?', plain: true },
      { w: 'Handschuhe' },
      { w: 'und' },
      { w: 'Müllsäcke' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'hole' },
      { w: 'ich' },
      { w: 'heute' },
      { w: 'noch' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wie' },
      { w: 'viel' },
      { w: 'Müll' },
      { w: 'finden' },
      { w: 'wir' },
      { w: 'wahrscheinlich' },
      { w: '?', plain: true },
      { w: 'Keine' },
      { w: 'Ahnung' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'danach' },
      { w: 'fahren' },
      { w: 'wir' },
      { w: 'direkt' },
      { w: 'zum' },
      { w: 'Wertstoffhof' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was bekommt Wiebke heute?', qEn: 'What does Wiebke get today?', options: ['Essen', 'Handschuhe und Müllsäcke', 'Wasser', 'ein Auto'], optionsEn: ['food', 'gloves and rubbish bags', 'water', 'a car'], answer: 1,
        explain: '"Handschuhe und Müllsäcke, die hole ich heute noch."' },
      { q: 'Wohin gehen sie danach?', qEn: 'Where will they go afterwards?', options: ['nach Hause', 'zum Wertstoffhof', 'ins Büro', 'zum Fluss zurück'], optionsEn: ['home', 'to the recycling centre', 'to the office', 'back to the river'], answer: 1,
        explain: '"… fahren wir direkt zum Wertstoffhof."' }
    ]
  },

  speaking: [
    { task: "Eine Kollegin fragt, was ihr morgen für die Aktion braucht.", taskEn: "A colleague asks what you need for tomorrow's initiative.", de: "Handschuhe und Müllsäcke, die hole ich heute noch.", en: "Gloves and rubbish bags, I'll get them today." },
    { task: "Sie fragt, wie viel Müll ihr wahrscheinlich findet.", taskEn: "She asks how much rubbish you'll probably find.", de: "Wahrscheinlich zehn Säcke, vermutlich sogar mehr.", en: "Probably ten bags, presumably even more." },
    { task: "Ein Freund fragt nach deinen Plänen zu Pfingsten.", taskEn: "A friend asks about your plans for Whitsun.", de: "Zu Pfingsten fahre ich an den Fluss und bleibe drei Tage.", en: "At Whitsun I'm going to the river and staying three days." },
    { task: "Ein Rentner fragt, ob der Weg morgen gesperrt ist.", taskEn: "A pensioner asks whether the path will be closed tomorrow.", de: "Der Gehweg wird wohl gesperrt, wir arbeiten dort.", en: "The pavement will probably be closed, we're working there." },
    { task: "Eine Bekannte fragt, wie das Wetter morgen wird.", taskEn: "An acquaintance asks what the weather will be like tomorrow.", de: "Morgen bleibt es kühl, am Abend regnet es vermutlich.", en: "Tomorrow stays cool, in the evening it'll presumably rain." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Email (6-8 sentences): Write to a friend about your plans for next week using Präsens + future-time words, avoiding Futur I where possible.\n\nTASK 2 — Opinion text (6-8 sentences): Share an assumption about a current topic, using wahrscheinlich, vermutlich, and wohl naturally (choose the right one for each context).',
    starters: ['Nächste Woche …', 'Wahrscheinlich …'],
    placeholder: 'Nächste Woche fahre ich nach Hamburg. Wahrscheinlich …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which is the more natural way for a native speaker to express "Tomorrow I\'m working from home"?',
      options: ['Morgen arbeite ich von zu Hause.', 'Morgen werde ich von zu Hause arbeiten.', 'Ich arbeitete morgen von zu Hause.'], answer: 0,
      explain: 'Präsens + "morgen" is the natural, default way to express this future plan.'
    },
    gap: {
      sentence: ['Der Zug hat ', ' Verspätung.'],
      gaps: [ { answer: 'vermutlich', accepts: ['vermutlich', 'wahrscheinlich'] } ],
      explain: '"vermutlich" (or "wahrscheinlich") naturally expresses "presumably/probably" here.'
    },
    match: {
      q: 'Match each word to its typical register/usage.',
      pairs: [
        { noun: 'wahrscheinlich', art: 'Common, everyday probability' },
        { noun: 'vermutlich', art: 'Slightly more formal probability' },
        { noun: 'wohl', art: 'Personal spoken-register assumption' },
        { noun: 'Präsens + Zeitwort', art: 'Default future expression' }
      ]
    },
    builder: {
      target: 'Build: "She is probably still busy." (natural, using wohl)',
      bank: ['Sie', 'ist', 'wohl', 'noch', 'beschäftigt', '.'],
      answer: ['Sie', 'ist', 'wohl', 'noch', 'beschäftigt', '.'],
      roles: { 'wohl': 'r-alternativen' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Wahrscheinlich wird er wohl kommen.',
      right: 'Wahrscheinlich kommt er. (or) Er kommt wohl.',
      explain: 'Combining two probability markers ("wahrscheinlich" and "wohl") in one sentence is redundant — use only one.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What do native speakers usually prefer over Futur I for future plans?', options: ['Präsens + a future-time word', 'Konjunktiv II', 'Perfekt'], answer: 0,
      explain: 'Präsens with a future-time word (morgen, nächste Woche) is the natural default.' },
    { q: 'Which word is slightly more formal: wahrscheinlich or vermutlich?', options: ['vermutlich', 'wahrscheinlich', 'They are equally formal'], answer: 0,
      explain: '"vermutlich" tends to sound slightly more formal than the very common "wahrscheinlich".' },
    { q: 'What does "wohl" typically express?', options: ['The speaker\'s personal assumption', 'A command', 'A past event'], answer: 0,
      explain: '"wohl" often expresses the speaker\'s own guess or supposition, very common in spoken German.' },
    { q: 'Is "Morgen werde ich nach Berlin fahren" wrong?', options: ['No — it\'s correct, just more formal/emphatic than the Präsens version', 'Yes, it\'s always wrong', 'Only correct in writing'], answer: 0,
      explain: 'Futur I remains grammatically correct — it\'s simply less common than Präsens for everyday future plans.' },
    { q: 'What\'s wrong with "Wahrscheinlich wird er wohl kommen"?', options: ['It doubles up on probability markers', 'It uses the wrong case', 'It has no verb'], answer: 0,
      explain: 'Using both "wahrscheinlich" and "wohl" together is redundant — choose one probability marker.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-alternativen', html: 'Native speakers usually skip Futur I — Präsens + a future-time word (morgen, nächste Woche) is the natural default for expressing plans.' },
    { c: 'r-alternativen', html: 'For assumptions, wahrscheinlich, vermutlich, and wohl are simpler and more common than Futur I für Vermutungen.' },
    { c: 'r-alternativen', html: 'Futur I still exists and is occasionally used for emphasis or formality — it\'s the exception, not the rule.' }
  ],
  revisionTips: [
    'Practise rewriting your own Futur I sentences into Präsens + a time word — notice how much more natural they sound.',
    'Listen for wahrscheinlich, vermutlich, and wohl in conversations and note which register each speaker chose.',
    'Keep dürfte, könnte, mag, muss (Vermutung), and Futur II for later — this chapter is only about the three probability adverbs and Präsens-for-future.'
  ]
};

window.CHAPTER = CHAPTER;
