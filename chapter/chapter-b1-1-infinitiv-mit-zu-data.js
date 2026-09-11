/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 1
   "Infinitiv mit zu" — linking two verbs with zu + Infinitiv.
   Covers ONLY: verb + zu + Infinitiv, adjective + zu-Infinitiv
   (Es ist wichtig/schwer/leicht/sinnvoll/möglich, ...), noun +
   zu-Infinitiv (Lust/Zeit/Angst/die Möglichkeit, ...), and
   separable verbs with zu (an-zu-rufen). Deliberately does NOT
   introduce um...zu / ohne...zu / statt...zu / lassen /
   brauchen + zu — those are later B1/B2 topics.
   Vocabulary source: uploaded chapter-01 list (32 items —
   Urlaub/Ferien theme: Erlebnis, Urlaubsplanung, zelten,
   sich erholen, Küste, Insekt, Pilz, Traube, giftig, reif, …).
   Schema mirrors chapter-a2-34-relativsatz-akkusativ-data.js so
   it runs on the shared chapter-app.js / chapter-tutor.js engine.
   NOTE: content only — existing audio engine, no new assets.
============================================================ */
const CHAPTER = {
  id: 'b1-1-infinitiv-mit-zu',
  phase: 'B1 · Phase 1',
  number: 1,
  title: 'Infinitiv mit zu',
  titleEn: 'Infinitive with zu',
  description: 'Ich hoffe, Deutsch zu lernen. Es ist wichtig, genug zu schlafen. Ich habe Lust, ins Kino zu gehen. This chapter links two verbs cleanly with zu + Infinitiv — after verbs like hoffen and versuchen, after adjectives like wichtig, and after nouns like Lust — including separable verbs, where zu slips between the prefix and the verb: anzurufen.',
  xp: 220,
  time: 40,
  difficulty: 'Intermediate',
  nextChapter: { number: 2, title: 'Nebensätze: weil / da & obwohl', titleEn: 'Subordinate clauses: weil / da & obwohl' , href: 'chapter-b1-2-nebensaetze-weil-da-obwohl.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Renke is planning to spend the summer camping and lazing around outdoors, and Timo wants to know why — every plan expressed with zu + Infinitiv: Ich plane, zu campen. Ich habe vor, mich zu entspannen.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear zu + Infinitiv after verbs, adjectives, and nouns — and inside separable verbs'
    ],
    scene: 'Vor den Sommerferien — Pläne machen',
    femaleSpeakers: ['Renke'],
    dialogue: [
      { speaker: 'Renke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-buh', type: 'Verb · haben', lexicalUnit: 'vorhaben' },
        { w: 'vor', role: 'r-verb', en: 'plan', hi: 'योजना', pron: 'for', type: 'Separable prefix', lexicalUnit: 'vorhaben' },
        { w: ',', plain: true },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Urlaub', role: 'r-dativ', en: 'vacation (dat.)', hi: 'छुट्टी में', pron: 'OOR-lowp', type: 'Noun · masc. dat.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu', why: 'zu + infinitive = to do something (this chapter).', ex: 'Ich habe vor, zu zelten.', exEn: 'I plan to camp.' },
        { w: 'zelten', role: 'r-verb', en: 'camp', hi: 'कैंपिंग करना', pron: 'TSEL-ten', type: 'Verb · infinitive (Satzende)', why: 'zelten = to camp (this chapter).', ex: 'Wir zelten im Wald.', exEn: 'We camp in the forest.' },
        { w: '.', plain: true }
      ], en: 'I plan to camp on vacation.', hi: 'Main chhutti mein camping karne ki soch raha hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'entspannend', role: 'r-adjective', en: 'relaxing', hi: 'आरामदायक', pron: 'ent-SHPAN-nent', type: 'Adjective', why: 'entspannend = relaxing (this chapter).', ex: 'Zelten ist entspannend.', exEn: 'Camping is relaxing.' },
        { w: '.', plain: true },
        { w: 'Hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'vor', role: 'r-verb', en: 'plan', hi: 'योजना', pron: 'for', type: 'Separable prefix', lexicalUnit: 'vorhaben' },
        { w: ',', plain: true },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'faulenzen', role: 'r-verb', en: 'laze around', hi: 'आराम करना', pron: 'FOW-len-tsen', type: 'Verb · infinitive (Satzende)', why: 'faulenzen = to laze around (this chapter).', ex: 'Ich möchte faulenzen.', exEn: 'I want to laze around.' },
        { w: '?', plain: true }
      ], en: 'That sounds relaxing. Do you also plan to laze around?', hi: 'Yeh aramdayak lagta hai. Kya tum aaram karne ki bhi soch rahe ho?' },
      { speaker: 'Renke', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-buh', type: 'Verb · haben', lexicalUnit: 'vorhaben' },
        { w: 'vor', role: 'r-verb', en: 'plan', hi: 'योजना', pron: 'for', type: 'Separable prefix', lexicalUnit: 'vorhaben' },
        { w: ',', plain: true },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'होना', pron: 'HAH-ben', type: 'Verb · infinitive (Satzende)' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Freien', role: 'r-dativ', en: 'outdoors (dat.)', hi: 'खुले में', pron: 'FRY-en', type: 'Noun · dative', why: 'im Freien = outdoors (this chapter).', ex: 'Wir sitzen im Freien.', exEn: 'We sit outdoors.' },
        { w: '.', plain: true }
      ], en: 'Yes! I plan to have a lot of time outdoors.', hi: 'Haan! Main khule mein bahut samay bitaane ki soch raha hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)', lexicalUnit: 'vorhaben' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'vor', role: 'r-verb', en: 'plan', hi: 'योजना', pron: 'for', type: 'Separable prefix', lexicalUnit: 'vorhaben' },
        { w: ',', plain: true },
        { w: 'dich', role: 'r-akkusativ', en: 'yourself', hi: 'ख़ुद को', pron: 'dikh', type: 'Reflexive pronoun' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'erholen', role: 'r-verb', en: 'recover', hi: 'ठीक होना', pron: 'er-HO-len', type: 'Verb · infinitive (Satzende)', why: 'sich erholen = to recover/relax (this chapter).', ex: 'Ich möchte mich erholen.', exEn: 'I want to relax.' },
        { w: '?', plain: true }
      ], en: 'And do you plan to relax?', hi: 'Aur kya tum aaram karne ki soch rahe ho?' },
      { speaker: 'Renke', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'होगा', pron: 'ist', type: 'Verb · sein' },
        { w: 'ein', role: 'r-subject', en: 'an', hi: 'एक', pron: 'ine', type: 'Article · neut.' },
        { w: 'herrliches', role: 'r-subject', en: 'wonderful', hi: 'शानदार', pron: 'HAIR-li-khes', type: 'Adjective', why: 'herrlich = wonderful (this chapter).', ex: 'Das ist ein herrliches Erlebnis.', exEn: 'That is a wonderful experience.' },
        { w: 'Erlebnis', role: 'r-subject', en: 'experience', hi: 'अनुभव', pron: 'er-LAYP-nis', type: 'Noun · neut.', why: 'das Erlebnis (this chapter).', ex: 'Es war ein tolles Erlebnis.', exEn: 'It was a great experience.' },
        { w: '.', plain: true }
      ], en: 'Yes, exactly. It is a wonderful experience.', hi: 'Haan, bilkul. Yeh ek shaandaar anubhav hoga.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wieso', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'VEE-zo', type: 'Question word', why: 'wieso = why (this chapter).', ex: 'Wieso fährst du dorthin?', exEn: 'Why are you going there?' },
        { w: 'fährst', role: 'r-verb', en: 'are you going', hi: 'जा रहे हो', pron: 'FAIRST', type: 'Verb · fahren (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'genau', role: 'r-adverb', en: 'exactly', hi: 'ठीक', pron: 'ge-NOW', type: 'Adverb' },
        { w: 'dorthin', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort-HIN', type: 'Adverb · direction' },
        { w: '?', plain: true }
      ], en: 'Why exactly are you going there?', hi: 'Tum theek wahaan kyun ja rahe ho?' },
      { speaker: 'Renke', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the', hi: 'वह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Aussicht', role: 'r-subject', en: 'view', hi: 'नज़ारा', pron: 'OWS-zikht', type: 'Noun · fem.', why: 'die Aussicht (this chapter).', ex: 'Die Aussicht ist herrlich.', exEn: 'The view is wonderful.' },
        { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'einfach', role: 'r-adverb', en: 'simply', hi: 'बस', pron: 'INE-fakh', type: 'Adverb' },
        { w: 'herrlich', role: 'r-subject', en: 'wonderful', hi: 'शानदार', pron: 'HAIR-likh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The view there is simply wonderful.', hi: 'Wahaan ka nazaara bas shaandaar hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben', lexicalUnit: 'vorhaben' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'vor', role: 'r-verb', en: 'plan', hi: 'योजना', pron: 'for', type: 'Separable prefix', lexicalUnit: 'vorhaben' },
        { w: ',', plain: true },
        { w: 'mitzukommen', role: 'r-verb', en: 'to come along', hi: 'साथ आना', pron: 'MIT-tsu-ko-men', type: 'Verb · infinitive (Satzende)', why: 'zu goes inside separable verbs: mit-zu-kommen (this chapter).', ex: 'Ich habe vor, mitzukommen.', exEn: 'I plan to come along.' },
        { w: '!', plain: true }
      ], en: 'Then I plan to come along!', hi: 'Toh main saath aane ki soch raha hoon!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'When a first verb needs a second one to complete its meaning, link them with <span class="de r-preposition">zu</span> + Infinitiv: <span class="de">Ich hoffe, Deutsch <span class="r-preposition">zu</span> lernen.</span> The pattern also follows certain adjectives (<span class="de">Es ist wichtig, …</span>) and nouns (<span class="de">Ich habe Lust, …</span>). Separable verbs tuck <span class="de r-preposition">zu</span> between the prefix and the stem: an<span class="de r-preposition">zu</span>rufen.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is INFINITIV MIT ZU (B1 level only): linking a first verb (or certain adjectives/nouns) to a second verb using zu + Infinitiv — e.g. hoffen/versuchen/vergessen/beginnen/vorhaben/planen/sich entscheiden/versprechen/bitten/empfehlen/lernen/aufhören/anfangen + zu + Infinitiv; Es ist wichtig/schwer/leicht/sinnvoll/möglich, … zu + Infinitiv; Ich habe Lust/Zeit/Angst/die Möglichkeit, … zu + Infinitiv; and separable verbs where zu goes between the prefix and the stem (anzurufen, mitzubringen, fernzusehen, aufzustehen). ' +
    'Do NOT expect or require um…zu, ohne…zu, statt…zu, lassen, or brauchen + zu — those are out of scope for this chapter; do not flag their absence and do not correct toward them. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Modal verbs (können, müssen, wollen, dürfen, sollen, möchten) and werden do NOT take zu before the following infinitive — never suggest adding zu after a modal verb.\n' +
    '- Ordinary verb + verb combination (hoffen, versuchen, vergessen, beginnen, vorhaben, planen, sich entscheiden, versprechen, bitten, empfehlen, lernen, aufhören, anfangen, and similar) DOES need zu before the second (infinitive) verb, at the very end of its clause.\n' +
    '- For separable verbs, zu is inserted between the prefix and the verb stem as ONE word: an + zu + rufen → anzurufen; mit + zu + bringen → mitzubringen; fern + zu + sehen → fernzusehen; auf + zu + stehen → aufzustehen. Never write "zu anrufen" or "an zu rufen" as separate words.\n' +
    '- Flag missing zu after a qualifying verb/adjective/noun trigger (e.g. "Ich hoffe, Deutsch lernen." should be "Ich hoffe, Deutsch zu lernen.").\n' +
    '- Flag zu incorrectly inserted after a modal verb.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>zu-placement check:</b> one sentence on whether zu was placed correctly, including inside any separable verbs.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you link verbs, adjectives, and nouns with zu + Infinitiv confidently, separable verbs included. Move on to <span class="de">Nebensätze: weil / da & obwohl</span>.',
    mid: 'Good. Re-read the separable-verb table once — that\'s where zu hides inside the word — then continue.',
    low: 'Worth another pass — revisit the Grammar section (especially the decision guide), then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'hoffe', role: 'r-verb' },
    { w: ',', role: 'plain' }, { w: 'Deutsch', role: 'r-akkusativ' },
    { w: 'zu', role: 'r-preposition' }, { w: 'lernen', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: link two verbs with zu + Infinitiv.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Friends plan a summer trip using zu + Infinitiv after verbs, adjectives, and nouns.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 31 words — an Urlaub/holiday theme, recycled through every section.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master zu + Infinitiv after verbs, adjectives, and nouns — and inside separable verbs.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a holiday-planning story full of zu + Infinitiv constructions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each zu + Infinitiv construction in natural speech.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Talk about your own plans, goals, and routines using zu + Infinitiv.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write an email or plan using several zu + Infinitiv constructions.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill verb/adjective/noun triggers and separable-verb zu-placement.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 220 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 31 chapter words — Urlaubsplanung, zelten, sich erholen, Küste, Insekt, Pilz, Traube, giftig, reif — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Verb/adjective/noun-trigger drills, separable-verb zu-placement practice, and an email-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full zu + Infinitiv reference — verb list, adjective/noun constructions, separable verbs, common mistakes, decision guide.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich hoffe, Deutsch zu lernen.', text: 'Link a verb to a second verb with zu + Infinitiv' },
    { de: 'Es ist wichtig, genug zu schlafen.', text: 'Use zu + Infinitiv after an adjective' },
    { de: 'Ich habe Lust, ins Kino zu gehen.', text: 'Use zu + Infinitiv after a noun like Lust or Zeit' },
    { de: 'anzurufen · mitzubringen', text: 'Insert zu correctly inside a separable verb' },
    { de: '13 Verben', text: 'Recognise the most common verbs that trigger zu + Infinitiv' }
  ],

  // ---------- Vocabulary (31 items — full chapter-01 upload list, plus the grammar marker) ----------
  vocab: [
    { de: 'Erlebnis', art: 'das', gender: 'n', plural: 'Erlebnisse', pos: 'noun', en: 'experience', hi: 'अनुभव',
      ex: 'Es war ein tolles Erlebnis, in Deutschland zu leben.', exEn: 'It was a great experience to live in Germany.' },
    { de: 'erfahren', pos: 'verb', en: 'to learn, find out', hi: 'पता चलना',
      ex: 'Ich hoffe, mehr über die Kultur zu erfahren.', exEn: 'I hope to learn more about the culture.',
      conj: { praesens: 'erfährt', praeteritum: 'erfuhr', perfekt: 'hat erfahren' } },
    { de: 'angenehm', pos: 'adjective', en: 'pleasant', hi: 'सुखद',
      ex: 'Es ist angenehm, im Freien zu sitzen.', exEn: 'It\'s pleasant to sit outdoors.' },
    { de: 'dabei sein', pos: 'verb', en: 'to be there, to take part', hi: 'साथ होना',
      ex: 'Ich habe vor, beim Fest dabei zu sein.', exEn: 'I\'m planning to be there for the festival.' },
    { de: 'Urlaubsplanung', art: 'die', gender: 'f', plural: 'Urlaubsplanungen', pos: 'noun', en: 'holiday planning', hi: 'छुट्टी की योजना',
      ex: 'Wir beginnen, mit der Urlaubsplanung anzufangen.', exEn: 'We\'re starting to begin the holiday planning.' },
    { de: 'drüben', pos: 'adverb', en: 'over there', hi: 'उस पार',
      ex: 'Es ist schön, drüben am Meer zu wohnen.', exEn: 'It\'s nice to live over there by the sea.' },
    { de: 'entspannend', pos: 'adjective', en: 'relaxing', hi: 'आरामदायक',
      ex: 'Es ist entspannend, am Strand zu liegen.', exEn: 'It\'s relaxing to lie on the beach.' },
    { de: 'faulenzen', pos: 'verb', en: 'to lounge around', hi: 'आलस करना',
      ex: 'Ich habe Lust, den ganzen Tag zu faulenzen.', exEn: 'I feel like lounging around all day.',
      conj: { praesens: 'faulenzt', praeteritum: 'faulenzte', perfekt: 'hat gefaulenzt' } },
    { de: 'herrlich', pos: 'adjective', en: 'glorious, wonderful', hi: 'शानदार',
      ex: 'Es muss herrlich sein, dort zu zelten.', exEn: 'It must be glorious to camp there.' },
    { de: 'im Freien', pos: 'adverb', en: 'outdoors, in the open air', hi: 'खुले में',
      ex: 'Wir planen, im Freien zu übernachten.', exEn: 'We\'re planning to sleep outdoors.' },
    { de: 'meinetwegen', pos: 'adverb', en: 'fine with me, for my sake', hi: 'मेरी वजह से / ठीक है',
      ex: 'Meinetwegen brauchst du nicht früh aufzustehen.', exEn: 'As far as I\'m concerned, you don\'t need to get up early.' },
    { de: 'sich erholen', pos: 'verb', en: 'to relax, recover', hi: 'आराम करना',
      ex: 'Es ist wichtig, sich im Urlaub zu erholen.', exEn: 'It\'s important to relax on holiday.',
      conj: { praesens: 'erholt sich', praeteritum: 'erholte sich', perfekt: 'hat sich erholt' } },
    { de: 'sorry', pos: 'interjection', en: 'sorry', hi: 'माफ़ करना',
      ex: 'Sorry, ich vergesse immer, rechtzeitig anzurufen.', exEn: 'Sorry, I always forget to call in time.' },
    { de: 'wieso', pos: 'adverb', en: 'why', hi: 'क्यों',
      ex: 'Wieso hast du aufgehört, Deutsch zu lernen?', exEn: 'Why did you stop learning German?' },
    { de: 'zelten', pos: 'verb', en: 'to camp', hi: 'कैंपिंग करना',
      ex: 'Wir haben vor, an der Küste zu zelten.', exEn: 'We\'re planning to camp on the coast.',
      conj: { praesens: 'zeltet', praeteritum: 'zeltete', perfekt: 'hat gezeltet' } },
    { de: 'zu (+ Infinitiv)', pos: 'grammar', en: 'to (infinitive marker)', hi: 'को (इनफिनिटिव चिह्न)',
      ex: 'Ich versuche, pünktlich zu kommen.', exEn: 'I try to arrive on time.' },
    { de: 'Insekt', art: 'das', gender: 'n', plural: 'Insekten', pos: 'noun', en: 'insect', hi: 'कीड़ा',
      ex: 'Vergiss nicht, Insektenschutz mitzubringen.', exEn: 'Don\'t forget to bring insect repellent.' },
    { de: 'Netz', art: 'das', gender: 'n', plural: 'Netze', pos: 'noun', en: 'net', hi: 'जाल',
      ex: 'Es ist sinnvoll, ein Netz gegen Insekten mitzunehmen.', exEn: 'It\'s sensible to bring a net against insects.' },
    { de: 'Chat', art: 'der', gender: 'm', plural: 'Chats', pos: 'noun', en: 'chat', hi: 'चैट',
      ex: 'Ich verspreche, dir im Chat zu schreiben.', exEn: 'I promise to write to you in the chat.' },
    { de: 'Genuss', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'treat, enjoyment', hi: 'आनंद',
      ex: 'Es ist ein Genuss, am Meer zu sitzen.', exEn: 'It\'s a treat to sit by the sea.' },
    { de: 'Himmel', art: 'der', gender: 'm', plural: 'Himmel', pos: 'noun', en: 'sky', hi: 'आकाश',
      ex: 'Es ist schön, abends den Himmel zu beobachten.', exEn: 'It\'s nice to watch the sky in the evenings.' },
    { de: 'Kompromiss', art: 'der', gender: 'm', plural: 'Kompromisse', pos: 'noun', en: 'compromise', hi: 'समझौता',
      ex: 'Wir versuchen, einen Kompromiss zu finden.', exEn: 'We\'re trying to find a compromise.' },
    { de: 'Pilz', art: 'der', gender: 'm', plural: 'Pilze', pos: 'noun', en: 'mushroom', hi: 'मशरूम',
      ex: 'Pass auf, keine giftigen Pilze zu sammeln.', exEn: 'Be careful not to collect poisonous mushrooms.' },
    { de: 'Sand', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'sand', hi: 'रेत',
      ex: 'Es ist angenehm, im Sand zu liegen.', exEn: 'It\'s pleasant to lie in the sand.' },
    { de: 'Schutz', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'protection', hi: 'सुरक्षा',
      ex: 'Es ist wichtig, Schutz vor der Sonne zu haben.', exEn: 'It\'s important to have protection from the sun.' },
    { de: 'Urlaubsgruß', art: 'der', gender: 'm', plural: 'Urlaubsgrüße', pos: 'noun', en: 'greetings from abroad', hi: 'छुट्टी की शुभकामना',
      ex: 'Ich habe vor, dir einen Urlaubsgruß zu schicken.', exEn: 'I\'m planning to send you greetings from my holiday.' },
    { de: 'Aussicht', art: 'die', gender: 'f', plural: 'Aussichten', pos: 'noun', en: 'view', hi: 'नज़ारा',
      ex: 'Es lohnt sich, die Aussicht zu genießen.', exEn: 'It\'s worth enjoying the view.' },
    { de: 'Küste', art: 'die', gender: 'f', plural: 'Küsten', pos: 'noun', en: 'coast', hi: 'तट',
      ex: 'Wir haben entschieden, an der Küste zu bleiben.', exEn: 'We\'ve decided to stay on the coast.' },
    { de: 'Traube', art: 'die', gender: 'f', plural: 'Trauben', pos: 'noun', en: 'grape', hi: 'अंगूर',
      ex: 'Ich habe gelernt, nur reife Trauben zu probieren.', exEn: 'I\'ve learned to only try ripe grapes.' },
    { de: 'giftig', pos: 'adjective', en: 'poisonous', hi: 'ज़हरीला',
      ex: 'Es ist wichtig, giftige Pilze zu erkennen.', exEn: 'It\'s important to recognise poisonous mushrooms.' },
    { de: 'reif', pos: 'adjective', en: 'ripe', hi: 'पका हुआ',
      ex: 'Es ist leicht, reife von unreifen Trauben zu unterscheiden.', exEn: 'It\'s easy to tell ripe grapes from unripe ones.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Grundstruktur: Verb + zu + Infinitiv',
      body: [
        'When a first (conjugated) verb needs a second verb to complete its meaning, the second verb goes to the end as an <b>Infinitiv</b>, introduced by <span class="de r-preposition">zu</span>.',
        'Structure: <b>Verb 1 (conjugated)</b> … <span class="de r-preposition">zu</span> + <b>Infinitiv</b> (at the end of the clause). A comma usually separates the two parts when the zu-phrase has its own elements.'
      ],
      example: [
        { html: '<span class="de">Ich hoffe, Deutsch <span class="r-preposition">zu</span> lernen.</span>' },
        { html: '<span class="de">Ich habe vergessen, den Lehrer an<span class="r-preposition">zu</span>rufen.</span>' },
        { html: '<span class="de">Er versucht, pünktlich <span class="r-preposition">zu</span> kommen.</span>' },
        { html: '<span class="de">Wir planen, nach Deutschland <span class="r-preposition">zu</span> fahren.</span>' }
      ],
      hinglish: 'Jab pehla verb apne aap mein poora nahi hota aur usko doosre verb ki zaroorat hoti hai, to doosra verb Infinitiv (dictionary form) mein end mein jaata hai, aur uske pehle <span class="de r-preposition">zu</span> lagta hai. Aksar comma dono hisson ko alag karta hai — khaas kar jab zu-phrase ke saath aur bhi words hon.'
    },
    {
      title: 'Die wichtigsten Verben mit zu',
      body: [
        'These thirteen verbs are the most common triggers for zu + Infinitiv at B1. Learn them as a set — whenever one appears, expect zu + Infinitiv to follow.'
      ],
      table: {
        head: ['Verb', 'Meaning', 'Example'],
        rows: [
          ['hoffen', 'to hope', '<span class="de">Ich hoffe, Deutsch zu lernen.</span>'],
          ['versuchen', 'to try', '<span class="de">Er versucht, pünktlich zu kommen.</span>'],
          ['vergessen', 'to forget', '<span class="de">Ich habe vergessen, den Lehrer anzurufen.</span>'],
          ['beginnen', 'to begin', '<span class="de">Sie beginnt, Deutsch zu sprechen.</span>'],
          ['vorhaben', 'to plan, intend', '<span class="de">Wir haben vor, zu reisen.</span>'],
          ['planen', 'to plan', '<span class="de">Wir planen, nach Deutschland zu fahren.</span>'],
          ['(sich) entscheiden', 'to decide', '<span class="de">Ich entscheide mich, hierzubleiben.</span>'],
          ['versprechen', 'to promise', '<span class="de">Ich verspreche, dir zu schreiben.</span>'],
          ['bitten', 'to ask (someone)', '<span class="de">Ich bitte dich, leiser zu sprechen.</span>'],
          ['empfehlen', 'to recommend', '<span class="de">Ich empfehle dir, früh zu buchen.</span>'],
          ['lernen', 'to learn', '<span class="de">Ich lerne, geduldig zu sein.</span>'],
          ['aufhören', 'to stop', '<span class="de">Wir hören auf, zu streiten.</span>'],
          ['anfangen', 'to start', '<span class="de">Er fängt an, Deutsch zu üben.</span>']
        ]
      },
      hinglish: 'Yeh 13 verbs B1 mein sabse zyada zu + Infinitiv ke saath aate hain. Inhe ek group ki tarah yaad rakho — jab bhi in mein se koi verb aaye, samajh jao ki uske baad zu + Infinitiv aayega.'
    },
    {
      title: 'Adjektiv-Konstruktionen: Es ist … , zu + Infinitiv',
      body: [
        'A group of adjectives after <span class="de">Es ist …</span> also trigger zu + Infinitiv: <span class="de">wichtig</span> (important), <span class="de">schwer</span> (hard), <span class="de">leicht</span> (easy), <span class="de">sinnvoll</span> (sensible), <span class="de">möglich</span> (possible).'
      ],
      example: [
        { html: '<span class="de">Es ist wichtig, genug <span class="r-preposition">zu</span> schlafen.</span>' },
        { html: '<span class="de">Es ist schwer, Deutsch perfekt <span class="r-preposition">zu</span> sprechen.</span>' },
        { html: '<span class="de">Es ist leicht, diese Regel <span class="r-preposition">zu</span> verstehen.</span>' },
        { html: '<span class="de">Es ist sinnvoll, früh <span class="r-preposition">zu</span> buchen.</span>' },
        { html: '<span class="de">Es ist möglich, das bis Freitag <span class="r-preposition">zu</span> schaffen.</span>' }
      ],
      hinglish: '"Es ist + adjective" ke baad bhi zu + Infinitiv aata hai — jaise <b>wichtig</b> (zaroori), <b>schwer</b> (mushkil), <b>leicht</b> (aasan), <b>sinnvoll</b> (samajhdaari ki baat) aur <b>möglich</b> (possible).'
    },
    {
      title: 'Nomen-Konstruktionen: Ich habe … , zu + Infinitiv',
      body: [
        'Certain nouns after <span class="de">Ich habe …</span> behave the same way: <span class="de">Lust</span> (desire/mood), <span class="de">Zeit</span> (time), <span class="de">Angst</span> (fear), <span class="de">die Möglichkeit</span> (the possibility).'
      ],
      example: [
        { html: '<span class="de">Ich habe Lust, ins Kino <span class="r-preposition">zu</span> gehen.</span>' },
        { html: '<span class="de">Ich habe keine Zeit, jetzt <span class="r-preposition">zu</span> telefonieren.</span>' },
        { html: '<span class="de">Sie hat Angst, den Fehler <span class="r-preposition">zu</span> wiederholen.</span>' },
        { html: '<span class="de">Wir haben die Möglichkeit, früher <span class="r-preposition">zu</span> fliegen.</span>' }
      ],
      hinglish: '"Ich habe + noun" ke baad bhi zu + Infinitiv aata hai — jaise <b>Lust</b> (man karna), <b>Zeit</b> (time), <b>Angst</b> (dar) aur <b>die Möglichkeit</b> (chance).'
    },
    {
      title: 'Trennbare Verben: zu geht zwischen Präfix und Verb',
      body: [
        'With separable verbs, <span class="de r-preposition">zu</span> is inserted <b>between the separable prefix and the verb stem</b>, and the whole thing is written as ONE word.',
        'Normal verb: <span class="de">lernen → zu lernen</span> (zu stays separate, before the verb). Separable verb: <span class="de">aufstehen → aufzustehen</span> (zu slots inside, between auf and stehen).'
      ],
      table: {
        head: ['Trennbares Verb', 'mit zu'],
        rows: [
          ['fernsehen', '<b>fernzusehen</b>'],
          ['einladen', '<b>einzuladen</b>'],
          ['mitbringen', '<b>mitzubringen</b>'],
          ['aufstehen', '<b>aufzustehen</b>'],
          ['anrufen', '<b>anzurufen</b>'],
          ['mitkommen', '<b>mitzukommen</b>']
        ]
      },
      note: 'The separable prefix always stays attached to the verb — <span class="de">zu</span> never comes before it as a separate word. <span class="de strike">zu fernsehen</span> is wrong; <span class="de">fernzusehen</span> is correct.',
      hinglish: 'Trennbare verbs mein zu prefix aur verb ke BEECH mein aata hai, aur poora ek hi word banta hai: auf + zu + stehen = aufzustehen. Prefix hamesha verb ke saath hi rehta hai — usse pehle zu alag word ki tarah kabhi nahi aata.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [
        'These four mistakes appear constantly at B1 — because in English "to" often comes before the FIRST verb, not the second, learners forget zu entirely or place it in the wrong spot.'
      ],
      mistakes: [
        { wrong: 'Ich hoffe Deutsch lernen.', right: 'Ich hoffe, Deutsch zu lernen.', why: 'zu is required before the second verb — it never disappears.' },
        { wrong: 'Ich versuche komme.', right: 'Ich versuche, pünktlich zu kommen.', why: 'The second verb must be an Infinitiv with zu, not a conjugated form.' },
        { wrong: 'Ich habe Lust ins Kino gehen.', right: 'Ich habe Lust, ins Kino zu gehen.', why: 'Noun triggers like Lust also need zu before the Infinitiv.' },
        { wrong: 'Ich plane früher gehen.', right: 'Ich plane, früher zu gehen.', why: 'planen needs zu before the Infinitiv. (The comma is optional when the zu-phrase is bare, but required once it carries its own elements, as here.)' }
      ],
      hinglish: 'Yeh galtiyaan isliye hoti hain kyunki English mein "to" pehle verb ke pehle aata hai, German mein zu doosre verb ke pehle aata hai. Isliye zu bhoolna ya galat jagah lagana sabse aam galti hai.'
    },
    {
      title: 'Wortstellung & Entscheidungshilfe',
      body: [
        '<b>Word order:</b> Verb 1 (conjugated, position 2) … [comma] … rest of the zu-phrase … zu + Infinitiv (always last).',
        '<b>Quick decision guide</b> — ask yourself two questions:'
      ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['Does the first verb need another verb to complete its meaning?', 'Yes → use zu + Infinitiv.'],
          ['Is that second verb separable (has a prefix like an-, auf-, mit-, fern-)?', 'Yes → put zu between the prefix and the verb: anzurufen, aufzustehen.']
        ]
      },
      note: 'Modal verbs (können, müssen, wollen, dürfen, sollen, möchten) are the one big exception — they take a plain Infinitiv with NO zu: <span class="de">Ich kann kommen.</span> not <span class="de strike">Ich kann zu kommen.</span>',
      hinglish: 'Word order: Verb 1 (position 2) … comma … baaki phrase … zu + Infinitiv (hamesha end mein). Decision guide: (1) Kya pehle verb ko doosre verb ki zaroorat hai? Haan to zu + Infinitiv. (2) Kya woh verb trennbar hai? Haan to zu prefix aur verb ke beech mein jaata hai. Modal verbs (können, müssen, wollen, dürfen, sollen, möchten) is rule se bahar hain — unke baad plain Infinitiv aata hai, zu nahi.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Ferienpläne',
    titleEn: 'Holiday plans',
    tokens: [
      { w: 'Lena', role: 'r-name', en: 'Lena', hi: 'लेना', type: 'Name' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'vor', role: 'r-verb', en: '… planned', hi: 'योजना', type: 'Verb · vorhaben (trennbar)', why: 'vorhaben + zu + Infinitiv: to plan/intend.' },
      { w: ',', plain: true },
      { w: 'diesen', role: 'r-akkusativ', en: 'this', hi: 'यह', type: 'Artikel · Akk.' },
      { w: 'Sommer', role: 'r-akkusativ', en: 'summer', hi: 'गर्मी', type: 'Noun · masc.' },
      { w: 'an', role: 'r-place', en: 'to/at', hi: 'पर', type: 'Preposition' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Küste', role: 'r-akkusativ', en: 'coast', hi: 'तट', type: 'Noun · fem.', why: 'die Küste (this chapter).' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'fahren', role: 'r-verb', en: 'to go', hi: 'जाना', type: 'Infinitiv', ex: 'Lena hat vor, an die Küste zu fahren.', exEn: 'Lena is planning to go to the coast.' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'plant', role: 'r-verb', en: 'plans', hi: 'योजना बनाती है', type: 'Verb · planen', why: 'planen + zu + Infinitiv (this chapter).' },
      { w: ',', plain: true },
      { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', type: 'Adverb · place' },
      { w: 'drei', role: 'r-time', en: 'three', hi: 'तीन', type: 'Number' },
      { w: 'Wochen', role: 'r-time', en: 'weeks', hi: 'सप्ताह', type: 'Noun · fem. plural' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'zelten', role: 'r-verb', en: 'to camp', hi: 'कैंपिंग करना', type: 'Infinitiv', why: 'zelten (this chapter).' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'sich', role: 'r-akkusativ', en: 'herself', hi: 'खुद को', type: 'Reflexivpronomen' },
      { w: 'richtig', role: 'r-adverb', en: 'properly', hi: 'ठीक से', type: 'Adverb' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'erholen', role: 'r-verb', en: 'to relax/recover', hi: 'आराम करना', type: 'Infinitiv · sich erholen', why: 'sich erholen (this chapter).' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', type: 'Pronoun · impersonal' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'ihr', role: 'r-dativ', en: '(to) her', hi: 'उसके लिए', type: 'Pronoun · Dativ' },
      { w: 'wichtig', role: 'r-adjective', en: 'important', hi: 'ज़रूरी', type: 'Adjective', why: 'Es ist wichtig, … zu + Infinitiv (adjective construction).' },
      { w: ',', plain: true },
      { w: 'jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', type: 'Artikel · Akk.' },
      { w: 'Tag', role: 'r-akkusativ', en: 'day', hi: 'दिन', type: 'Noun · masc.' },
      { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Freien', role: 'r-place', en: 'outdoors', hi: 'खुले में', type: 'Adjective as noun', why: 'im Freien (this chapter): outdoors.' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'sein', role: 'r-verb', en: 'to be', hi: 'होना', type: 'Infinitiv' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'frische', role: 'r-akkusativ', en: 'fresh', hi: 'ताज़ा', type: 'Adjective · Akk.' },
      { w: 'Luft', role: 'r-akkusativ', en: 'air', hi: 'हवा', type: 'Noun · fem.' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'genießen', role: 'r-verb', en: 'to enjoy', hi: 'आनंद लेना', type: 'Infinitiv' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'Lust', role: 'r-akkusativ', en: 'desire, mood', hi: 'इच्छा', type: 'Noun · fem.', why: 'Ich habe Lust, … zu + Infinitiv (noun construction).' },
      { w: ',', plain: true },
      { w: 'im', role: 'r-place', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Meer', role: 'r-place', en: 'sea', hi: 'समुद्र', type: 'Noun · neut.' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'schwimmen', role: 'r-verb', en: 'to swim', hi: 'तैरना', type: 'Infinitiv' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Aussicht', role: 'r-akkusativ', en: 'view', hi: 'नज़ारा', type: 'Noun · fem.', why: 'die Aussicht (this chapter).' },
      { w: 'auf', role: 'r-preposition', en: 'of/onto', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Himmel', role: 'r-akkusativ', en: 'sky', hi: 'आकाश', type: 'Noun · masc.', why: 'der Himmel (this chapter).' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'genießen', role: 'r-verb', en: 'to enjoy', hi: 'आनंद लेना', type: 'Infinitiv' },
      { w: '.', plain: true },
      { w: 'Natürlich', role: 'r-adverb', en: 'of course', hi: 'ज़ाहिर है', type: 'Adverb' },
      { w: 'vergisst', role: 'r-verb', en: 'forgets', hi: 'भूलती है', type: 'Verb · vergessen', why: 'vergessen + zu + Infinitiv (this chapter).' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: ',', plain: true },
      { w: 'Insektenschutz', role: 'r-akkusativ', en: 'insect repellent', hi: 'कीट रक्षक', type: 'Noun · masc.', why: 'built from das Insekt + der Schutz (both this chapter).' },
      { w: 'mitzubringen', role: 'r-verb', en: 'to bring along', hi: 'साथ लाना', type: 'Trennbares Verb · mitbringen', why: 'mit + zu + bringen → mitzubringen.' },
      { w: ',', plain: true },
      { w: 'denn', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', type: 'Konjunktion' },
      { w: 'manche', role: 'r-subject', en: 'some', hi: 'कुछ', type: 'Indefinitpronomen' },
      { w: 'Insekten', role: 'r-subject', en: 'insects', hi: 'कीड़े', type: 'Noun · neut. plural', why: 'das Insekt (this chapter).' },
      { w: 'am', role: 'r-place', en: 'on the', hi: 'पर', type: 'Contraction · an dem' },
      { w: 'Strand', role: 'r-place', en: 'beach', hi: 'समुद्र तट', type: 'Noun · masc.' },
      { w: 'lästig', role: 'r-adjective', en: 'annoying', hi: 'परेशान करने वाला', type: 'Adjective' },
      { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', type: 'Verb · sein' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'hofft', role: 'r-verb', en: 'hopes', hi: 'उम्मीद करती है', type: 'Verb · hoffen', why: 'hoffen + zu + Infinitiv (this chapter\'s classic example).' },
      { w: ',', plain: true },
      { w: 'jeden', role: 'r-time', en: 'every', hi: 'हर', type: 'Artikel · Akk.' },
      { w: 'Abend', role: 'r-time', en: 'evening', hi: 'शाम', type: 'Noun · masc.' },
      { w: 'am', role: 'r-place', en: 'at the', hi: 'पर', type: 'Contraction · an dem' },
      { w: 'Lagerfeuer', role: 'r-place', en: 'campfire', hi: 'कैंपफ़ायर', type: 'Noun · neut.' },
      { w: 'reife', role: 'r-akkusativ', en: 'ripe', hi: 'पका हुआ', type: 'Adjective · Akk.', why: 'reif (this chapter).' },
      { w: 'Trauben', role: 'r-akkusativ', en: 'grapes', hi: 'अंगूर', type: 'Noun · fem. plural', why: 'die Traube (this chapter).' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'essen', role: 'r-verb', en: 'to eat', hi: 'खाना', type: 'Infinitiv' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', type: 'Konjunktion' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'Angst', role: 'r-akkusativ', en: 'fear', hi: 'डर', type: 'Noun · fem.', why: 'Ich habe Angst, … zu + Infinitiv (noun construction).' },
      { w: ',', plain: true },
      { w: 'giftige', role: 'r-akkusativ', en: 'poisonous', hi: 'ज़हरीला', type: 'Adjective · Akk.', why: 'giftig (this chapter).' },
      { w: 'Pilze', role: 'r-akkusativ', en: 'mushrooms', hi: 'मशरूम', type: 'Noun · masc. plural', why: 'der Pilz (this chapter).' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'finden', role: 'r-verb', en: 'to find', hi: 'ढूंढना', type: 'Infinitiv' },
      { w: '.', plain: true },
      { w: 'Ihre', role: 'r-akkusativ', en: 'her', hi: 'उसके', type: 'Possessivartikel' },
      { w: 'Freunde', role: 'r-subject', en: 'friends', hi: 'दोस्त', type: 'Noun · plural' },
      { w: 'versprechen', role: 'r-verb', en: 'promise', hi: 'वादा करते हैं', type: 'Verb · versprechen', why: 'versprechen + zu + Infinitiv (this chapter).' },
      { w: ',', plain: true },
      { w: 'sie', role: 'r-akkusativ', en: 'her', hi: 'उसे', type: 'Pronoun · Akk.' },
      { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Chat', role: 'r-akkusativ', en: 'chat', hi: 'चैट', type: 'Noun · masc.', why: 'der Chat (this chapter).' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'grüßen', role: 'r-verb', en: 'to greet', hi: 'नमस्कार करना', type: 'Infinitiv' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'ihr', role: 'r-dativ', en: '(to) her', hi: 'उसे', type: 'Pronoun · Dativ' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · acc.' },
      { w: 'Urlaubsgruß', role: 'r-akkusativ', en: 'greetings from abroad', hi: 'छुट्टी की शुभकामना', type: 'Noun · masc.', why: 'der Urlaubsgruß (this chapter).' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'schicken', role: 'r-verb', en: 'to send', hi: 'भेजना', type: 'Infinitiv' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-time', en: 'at the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Ende', role: 'r-time', en: 'end', hi: 'अंत', type: 'Noun · neut.' },
      { w: 'beginnt', role: 'r-verb', en: 'begins', hi: 'शुरू करती है', type: 'Verb · beginnen', why: 'beginnen + zu + Infinitiv (this chapter).' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: ',', plain: true },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Alltag', role: 'r-akkusativ', en: 'everyday life', hi: 'रोज़मर्रा की ज़िंदगी', type: 'Noun · masc.' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'vergessen', role: 'r-verb', en: 'to forget', hi: 'भूलना', type: 'Infinitiv' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Moment', role: 'r-akkusativ', en: 'moment', hi: 'पल', type: 'Noun · masc.' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'genießen', role: 'r-verb', en: 'to enjoy', hi: 'आनंद लेना', type: 'Infinitiv' },
      { w: '.', plain: true }
    ],
    translation: 'Lena is planning to go to the coast this summer. She plans to camp there for three weeks and properly relax. It\'s important to her to be outdoors every day and enjoy the fresh air. She also feels like swimming in the sea and enjoying the view of the sky. Of course she doesn\'t forget to bring insect repellent, because some insects on the beach are annoying. She hopes to eat ripe grapes by the campfire every evening, but she\'s also afraid of finding poisonous mushrooms. Her friends promise to greet her often in the chat and send her holiday greetings. In the end, she begins to forget everyday life and enjoy the moment.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — professionally scripted, not a copy of the Story Dialogue.
    dialogue: [
      { id: 'B1_001_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Renke, ehrlich — drei Wochen zelten? Ich glaube, ich würde das keinen Tag aushalten.', en: 'Renke, honestly — three weeks camping? I don\'t think I\'d last a single day.' },
      { id: 'B1_001_L002', speaker: 'Renke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau deshalb mache ich es! Ich habe einfach vergessen, wie schön es ist, nichts vorzuhaben.', en: 'That\'s exactly why I\'m doing it! I just forgot how nice it is to have nothing planned.' },
      { id: 'B1_001_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und wenn es regnet?', en: 'And if it rains?' },
      { id: 'B1_001_L004', speaker: 'Renke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Dann höre ich auf zu jammern und lese ein Buch im Zelt. Klingt das nicht wunderbar?', en: 'Then I stop complaining and read a book in the tent. Doesn\'t that sound wonderful?' },
      { id: 'B1_001_L005', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ehrlich gesagt — ein bisschen schon.', en: 'Honestly — a little bit, yes.' }
    ],
    transcript: 'Renke, ehrlich — drei Wochen zelten? Ich glaube, ich würde das keinen Tag aushalten. Genau deshalb mache ich es! Ich habe einfach vergessen, wie schön es ist, nichts vorzuhaben. Und wenn es regnet? Dann höre ich auf zu jammern und lese ein Buch im Zelt. Klingt das nicht wunderbar? Ehrlich gesagt — ein bisschen schon.',
    translation: 'Renke, honestly — three weeks camping? I don\'t think I\'d last a single day. That\'s exactly why I\'m doing it! I just forgot how nice it is to have nothing planned. And if it rains? Then I stop complaining and read a book in the tent. Doesn\'t that sound wonderful? Honestly — a little bit, yes.',
    tokens: [
      { w: 'Renke', role: 'r-name', en: 'Renke', type: 'Name' },
      { w: ',', plain: true },
      { w: 'ehrlich' },
      { w: '—', plain: true },
      { w: 'drei' },
      { w: 'Wochen' },
      { w: 'zelten' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'glaube' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'würde' },
      { w: 'das' },
      { w: 'keinen' },
      { w: 'Tag' },
      { w: 'aushalten' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: 'deshalb' },
      { w: 'mache' },
      { w: 'ich' },
      { w: 'es' },
      { w: '!', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'einfach' },
      { w: 'vergessen' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'schön' },
      { w: 'es' },
      { w: 'ist' },
      { w: ',', plain: true },
      { w: 'nichts' },
      { w: 'vorzuhaben', role: 'r-verb', en: 'to have planned', type: 'Verb · vorhaben (zu + Infinitiv)' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wenn' },
      { w: 'es' },
      { w: 'regnet' },
      { w: '?', plain: true },
      { w: 'Dann' },
      { w: 'höre' },
      { w: 'ich' },
      { w: 'auf' },
      { w: 'zu' },
      { w: 'jammern', role: 'r-verb', en: 'to complain', type: 'Verb' },
      { w: 'und' },
      { w: 'lese' },
      { w: 'ein' },
      { w: 'Buch' },
      { w: 'im' },
      { w: 'Zelt' },
      { w: '.', plain: true },
      { w: 'Klingt' },
      { w: 'das' },
      { w: 'nicht' },
      { w: 'wunderbar' },
      { w: '?', plain: true },
      { w: 'Ehrlich' },
      { w: 'gesagt' },
      { w: '—', plain: true },
      { w: 'ein' },
      { w: 'bisschen', role: 'plain', en: 'a little bit' },
      { w: 'schon' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hält Timo von drei Wochen Camping?', qEn: 'How does Timo feel about three weeks of camping?', options: ['Er wäre begeistert', 'Er zweifelt, dass er das durchhält', 'Er plant schon mitzukommen', 'Er hasst die Natur'], optionsEn: ['He\'d love it', 'He doubts he could handle it', 'He\'s already planning to join', 'He hates nature'], answer: 1,
        explain: '"Ich glaube, ich würde das keinen Tag aushalten" — he doubts he could last even a day.' },
      { q: 'Was macht Renke, wenn es regnet?', qEn: 'What does Renke do if it rains?', options: ['Sie fährt nach Hause', 'Sie beschwert sich den ganzen Tag', 'Sie liest ein Buch im Zelt', 'Sie sagt die Reise ab'], optionsEn: ['She goes home', 'She complains all day', 'She reads a book in the tent', 'She cancels the trip'], answer: 2,
        explain: '"Dann höre ich auf zu jammern und lese ein Buch im Zelt."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin fragt, was du im Urlaub vorhast.", taskEn: "Your friend asks what you're planning for your holiday.", de: "Ich habe vor, drei Wochen zu zelten und einfach zu faulenzen.", en: "I'm planning to camp for three weeks and just laze around." },
    { task: "Ein Freund findet Zelten schrecklich. Sag, was daran schön ist.", taskEn: "A friend finds camping awful. Say what's nice about it.", de: "Es ist herrlich, im Freien zu schlafen und nichts vorzuhaben.", en: "It's wonderful to sleep outdoors and have nothing planned." },
    { task: "Deine Kollegin fragt, warum du selten in den Urlaub fährst.", taskEn: "Your colleague asks why you rarely go on holiday.", de: "Ich vergesse oft, mich zu erholen, weil die Arbeit nie aufhört.", en: "I often forget to relax, because work never stops." },
    { task: "Renke fragt, ob du bei der Urlaubsplanung dabei bist.", taskEn: "Renke asks whether you're in on the holiday planning.", de: "Ich versuche dabei zu sein, aber ich hoffe, einen Kompromiss zu finden.", en: "I'll try to be there, but I hope we can find a compromise." },
    { task: "Deine Freundin hat Angst vor Insekten. Beruhige sie.", taskEn: "Your friend is afraid of insects. Reassure her.", de: "Es ist nicht nötig, Angst zu haben. Wir vergessen nur nicht, das Netz mitzunehmen.", en: "There's no need to be afraid. We just won't forget to bring the net." },
    { task: "Ein Freund fragt, was dein schönstes Erlebnis war.", taskEn: "A friend asks what your nicest experience was.", de: "Es war entspannend, im Sand zu liegen und den Himmel zu sehen.", en: "It was relaxing to lie in the sand and look at the sky." },
    { task: "Rollenspiel: Ihr plant den Urlaub und seid nicht einig.", taskEn: "Role-play: you plan the holiday and don't agree.", de: "Ich habe Lust zu zelten, aber du hast vor, im Hotel zu bleiben — finden wir einen Kompromiss.", en: "I fancy camping, but you're planning to stay in a hotel — let's find a compromise." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short email to a friend (six to eight sentences) about your future plans — mention a study plan, a travel plan, and one goal for your career or a job application. Use at least five different zu + Infinitiv constructions (after a verb, after an adjective, after a noun, and inside a separable verb).',
    starters: ['Ich habe vor, …', 'Ich hoffe, …', 'Es ist mir wichtig, …', 'Ich habe Lust, …', 'Vergiss nicht, … mitzubringen.'],
    placeholder: 'Liebe Priya, ich habe vor, diesen Sommer nach Deutschland zu fahren …',
    minWords: 40
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Ich habe vor, nach Deutschland ___."',
      options: ['fahren', 'zu fahren', 'fährt', 'gefahren'],
      answer: 1,
      explain: 'vorhaben + zu + Infinitiv: "Ich habe vor, nach Deutschland zu fahren."'
    },
    gap: {
      sentence: ['Ich vergesse immer, den Lehrer an', '.'],
      gaps: [ { answer: 'zurufen', accepts: ['zurufen', 'zu rufen'] } ],
      explain: 'anrufen is separable — zu goes between an and rufen: anzurufen. (You already typed "an", so complete it with "zurufen".)'
    },
    match: {
      q: 'Match each separable verb to its zu-Infinitiv form.',
      pairs: [
        { noun: 'fernsehen', art: 'fernzusehen' },
        { noun: 'einladen', art: 'einzuladen' },
        { noun: 'mitbringen', art: 'mitzubringen' },
        { noun: 'aufstehen', art: 'aufzustehen' }
      ]
    },
    builder: {
      target: 'Build: "He tries to arrive on time."',
      bank: ['Er', 'versucht', ',', 'pünktlich', 'zu', 'kommen', '.'],
      answer: ['Er', 'versucht', ',', 'pünktlich', 'zu', 'kommen', '.'],
      roles: { 'Er': 'r-subject', 'versucht': 'r-verb', 'zu': 'r-preposition', 'kommen': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Es ist wichtig, genug ___."', options: ['schlafen', 'zu schlafen', 'geschlafen'], answer: 1,
      explain: 'Adjective construction: Es ist wichtig, … zu + Infinitiv.' },
    { q: 'Complete: "Ich habe Lust, ins Kino ___."', options: ['gehen', 'zu gehen', 'gegangen'], answer: 1,
      explain: 'Noun construction: Ich habe Lust, … zu + Infinitiv.' },
    { q: 'What is the correct zu-Infinitiv of the separable verb "mitbringen"?', options: ['zu mitbringen', 'mitzubringen', 'mit zu bringen'], answer: 1,
      explain: 'Separable verbs insert zu between the prefix and the stem, as one word: mitzubringen.' },
    { q: 'Which sentence is correct?', options: ['Ich versuche komme.', 'Ich versuche, zu kommen.', 'Ich versuche kommen zu.'], answer: 1,
      explain: 'versuchen + zu + Infinitiv, with zu directly before the infinitive at the end.' },
    { q: 'Which verb does NOT take zu before the following infinitive?', options: ['hoffen', 'können', 'versuchen'], answer: 1,
      explain: 'Modal verbs like können never take zu — they go straight to a plain Infinitiv: Ich kann kommen.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-preposition', html: 'Link two verbs with <span class="de r-preposition">zu</span> + Infinitiv: <span class="de">Ich hoffe, Deutsch zu lernen.</span>' },
    { c: 'r-adjective', html: 'The same pattern follows certain adjectives (<span class="de">Es ist wichtig, …</span>) and nouns (<span class="de">Ich habe Lust, …</span>).' },
    { c: 'r-verb', html: 'Separable verbs tuck <span class="de r-preposition">zu</span> between the prefix and the stem: <span class="de">anzurufen</span>, <span class="de">mitzubringen</span>.' }
  ],
  revisionTips: [
    'Whenever you see hoffen, versuchen, vergessen, planen, or vorhaben, expect zu + Infinitiv right after — say the pair out loud.',
    'For separable verbs, practise saying the whole zu-form as one word: an-zu-rufen, mit-zu-bringen, auf-zu-stehen.',
    'Remember the one big exception: modal verbs (können, müssen, wollen, dürfen, sollen, möchten) never take zu.'
  ]
};

window.CHAPTER = CHAPTER;
