/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 2 · Chapter 19
   "Satzposition"  (German word order — the verb-second rule)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-19 word list (36 words).
   Recycles Chapters 1–18 throughout. Theme = daily routine.
============================================================ */
const CHAPTER = {
  id: 'a1-19-satzposition',
  phase: 'A1 · Phase 2',
  number: 19,
  title: 'Satzposition',
  titleEn: 'Word Order',
  description: 'German word order runs on one golden rule: the conjugated verb is always in position 2. Learn how to start a sentence with a time word and flip the subject, where nicht goes, and the time–manner–place order — using the everyday routine vocabulary that makes it all click.',
  xp: 160,
  time: 30,
  difficulty: 'Beginner',
  nextChapter: { number: 20, title: 'Modalverben 1', titleEn: 'Modal Verbs 1' , href: 'chapter-a1-20-modalverben1.html' },

  prevChapter: { number: 18, title: 'Unregelmäßige Verben', titleEn: 'Irregular Verbs', href: 'chapter-a1-18-irregular.html' },
  heroAnimationPath: null,

  // ---------- Story Dialogue (signature section — before vocab/grammar) ----------
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Pia asks Lukas about his daily routine, and Lukas chimes in with his (not very disciplined) version. As they compare mornings, noons and nights, the verb keeps landing in the same place — position 2 — no matter what word starts the sentence.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the verb stay in position 2 as sentences flip'
    ],
    scene: 'In der Mensa \u2014 Mittagspause, Berlin',
    femaleSpeakers: ['Pia'],
    dialogue: [
      { speaker: 'Pia', tokens: [
        { w: 'Lukas', role: 'r-name', en: 'Lukas', hi: 'लुकास', pron: 'LOO-kas', type: 'Name · person' },
        { w: ',', plain: true },
        { w: 'wann', role: 'r-question', en: 'when', hi: 'कब', pron: 'van', type: 'Question word' },
        { w: 'duschst', role: 'r-verb', en: 'do you shower', hi: 'नहाते हो', pron: 'DOOSHST', type: 'Verb · duschen (du)', why: 'duschen (this chapter).', ex: 'Wann duschst du?', exEn: 'When do you shower?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '?', plain: true }
      ], en: 'Lukas, when are you showering tomorrow?', hi: 'Lukas, kal tum kab nahaoge?' },
      { speaker: 'Lukas', side: 'right', tokens: [
        { w: 'Morgens', role: 'r-time', en: 'in the morning', hi: 'सुबह', pron: 'MOR-gens', type: 'Adverb · time', why: 'A time word in position 1 pushes the verb to position 2 (this chapter).', ex: 'Morgens dusche ich.', exEn: 'In the morning I shower.' },
        { w: 'dusche', role: 'r-verb', en: 'shower', hi: 'नहाता हूँ', pron: 'DOO-shuh', type: 'Verb · position 2', why: 'Verb stays second; the subject moves behind it.', ex: 'Morgens dusche ich.', exEn: 'In the morning I shower.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · after verb' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: 'früh', role: 'r-time', en: 'early', hi: 'जल्दी', pron: 'frü', type: 'Adverb · time' },
        { w: '.', plain: true },
        { w: 'Warum', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'va-RUM', type: 'Question word' },
        { w: '?', plain: true }
      ], en: 'In the morning I always shower early. Why?', hi: 'Subah main hamesha jaldi nahata hoon. Kyun?' },
      { speaker: 'Pia', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'dusche', role: 'r-verb', en: 'shower', hi: 'नहाती हूँ', pron: 'DOO-shuh', type: 'Verb · duschen (ich)' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'früh', role: 'r-time', en: 'early', hi: 'जल्दी', pron: 'frü', type: 'Adverb · time' },
        { w: '.', plain: true },
        { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Kurs', role: 'r-subject', en: 'course', hi: 'कोर्स', pron: 'koors', type: 'Noun · masc.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'morgens', role: 'r-time', en: 'in the morning', hi: 'सुबह', pron: 'MOR-gens', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'I am showering early tomorrow too. My course is in the morning.', hi: 'Kal main bhi jaldi nahaungi. Mera course subah hai.' },
      { speaker: 'Lukas', side: 'right', tokens: [
        { w: 'Oh', role: 'r-subject', en: 'oh', hi: 'ओह', pron: 'oh', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb', why: 'Front adverb → verb stays in position 2.', ex: 'Dann dusche ich später.', exEn: 'Then I shower later.' },
        { w: 'dusche', role: 'r-verb', en: 'shower', hi: 'नहाता हूँ', pron: 'DOO-shuh', type: 'Verb · position 2' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · after verb' },
        { w: 'später', role: 'r-time', en: 'later', hi: 'बाद में', pron: 'SHPAY-ter', type: 'Adverb · time' },
        { w: '.', plain: true },
        { w: 'Kein', role: 'r-negation', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Negation' },
        { w: 'Problem', role: 'r-object', en: 'problem', hi: 'समस्या', pron: 'pro-BLAYM', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Oh! Then I will shower later. No problem.', hi: 'Oh! Toh main baad mein nahaunga. Koi baat nahi.' },
      { speaker: 'Pia', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Frühstückst', role: 'r-verb', en: 'do you have breakfast', hi: 'नाश्ता करते हो', pron: 'FRÜ-shtükst', type: 'Verb · frühstücken (du)', why: 'frühstücken (this chapter).', ex: 'Frühstückst du hier?', exEn: 'Do you have breakfast here?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'Anna', role: 'r-name', en: 'Anna', hi: 'अना', pron: 'AH-na', type: 'Name · person' },
        { w: '?', plain: true }
      ], en: 'Thanks! Will you have breakfast with Anna then?', hi: 'Dhanyavaad! Toh tum Anna ke saath nashta karoge?' },
      { speaker: 'Lukas', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'frühstücke', role: 'r-verb', en: 'have breakfast', hi: 'नाश्ता करता हूँ', pron: 'FRÜ-shtü-kuh', type: 'Verb · frühstücken (ich)' },
        { w: 'morgens', role: 'r-time', en: 'in the morning', hi: 'सुबह', pron: 'MOR-gens', type: 'Adverb · time' },
        { w: 'nie', role: 'r-negation', en: 'never', hi: 'कभी नहीं', pron: 'nee', type: 'Adverb · negation', why: 'nie = never (this chapter).', ex: 'Ich frühstücke nie.', exEn: 'I never have breakfast.' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'trinke', role: 'r-verb', en: 'drink', hi: 'पीता हूँ', pron: 'TRIN-kuh', type: 'Verb · trinken (ich)' },
        { w: 'nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'Kaffee', role: 'r-akkusativ', en: 'coffee', hi: 'कॉफ़ी', pron: 'KA-fay', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'No, I never have breakfast in the morning. I only drink coffee.', hi: 'Nahi, main subah kabhi nashta nahi karta. Main sirf coffee peeta hoon.' },
      { speaker: 'Pia', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'frühstücke', role: 'r-verb', en: 'have breakfast', hi: 'नाश्ता करती हूँ', pron: 'FRÜ-shtü-kuh', type: 'Verb · frühstücken (ich)' },
        { w: 'täglich', role: 'r-time', en: 'daily', hi: 'रोज़', pron: 'TAYK-likh', type: 'Adverb · time', why: 'täglich = daily (this chapter).', ex: 'Ich frühstücke täglich.', exEn: 'I have breakfast daily.' },
        { w: '.', plain: true },
        { w: 'Morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'koche', role: 'r-verb', en: 'cook', hi: 'बनाती हूँ', pron: 'KO-khuh', type: 'Verb · position 2' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · after verb' },
        { w: 'Kaffee', role: 'r-akkusativ', en: 'coffee', hi: 'कॉफ़ी', pron: 'KA-fay', type: 'Noun · masc.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'uns', role: 'r-akkusativ', en: 'us', hi: 'हमारे', pron: 'uns', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'Really? I have breakfast daily. Tomorrow I will make coffee for us.', hi: 'Sach mein? Main roz nashta karti hoon. Kal main hamaare liye coffee banaungi.' },
      { speaker: 'Lukas', side: 'right', tokens: [
        { w: 'Super', role: 'r-adjective', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'duschst', role: 'r-verb', en: 'shower', hi: 'नहाती हो', pron: 'DOOSHST', type: 'Verb · position 2' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · after verb' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'zuerst', role: 'r-adverb', en: 'first', hi: 'पहले', pron: 'tsu-AIRST', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Great! Then you shower first tomorrow.', hi: 'Badhiya! Toh kal tum pehle nahao.' },
      { speaker: 'Pia', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'शुभ', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Nacht', role: 'r-time', en: 'night', hi: 'रात', pron: 'nakht', type: 'Noun · fem.', why: 'die Nacht (this chapter).', ex: 'Gute Nacht!', exEn: 'Good night!' },
        { w: ',', plain: true },
        { w: 'Lukas', role: 'r-name', en: 'Lukas', hi: 'लुकास', pron: 'LOO-kas', type: 'Name · person' },
        { w: '!', plain: true }
      ], en: 'Perfect! Good night, Lukas!', hi: 'Badhiya! Shubh raatri, Lukas!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German word order has one golden rule: <strong>the conjugated verb is always in position 2.</strong> Start with the subject (<span class="de">Ich lerne abends Deutsch</span>) or start with a time word (<span class="de">Abends lerne ich Deutsch</span>) — either way the verb stays second, and the subject simply hops behind it.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is WORD ORDER (Satzposition): the verb-second (V2) rule in main clauses, inversion when a time/place phrase starts the sentence, W-Fragen (verb position 2) vs Ja/Nein questions (verb first), the position of nicht, and time–manner–place order. ' +
    'The learner wrote sentences about their daily routine below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- In a main clause the conjugated verb is ALWAYS the second element: "Ich lerne abends Deutsch." / "Abends lerne ich Deutsch."\n' +
    '- If anything other than the subject is first (a time word, place, object), the subject moves directly AFTER the verb (inversion): "Morgens dusche ich." NOT "Morgens ich dusche."\n' +
    '- W-Fragen keep the verb in position 2: "Was machst du?", "Wo wohnst du?". Ja/Nein questions put the verb FIRST: "Frühstückst du?"\n' +
    '- Order of middle elements is Time–Manner–Place (TeKaMoLo simplified): "Ich fahre morgens (time) mit dem Bus (manner) zur Uni (place)."\n' +
    '- nicht goes before the word it negates, but at the end for whole-sentence negation: "Ich lerne abends nicht."\n' +
    '- nichts = nothing, nie = never, immer = always, oft = often, manchmal = sometimes, selten = rarely. All nouns capitalised.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Verb-position check:</b> one sentence on whether the verb stayed in position 2.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — your verb keeps landing in position 2. On to <span class="de">Modalverben 1</span>.',
    mid: 'Good. Re-read the inversion card (front a time word → verb next) once, then continue.',
    low: 'Worth another pass — focus on the verb-second rule in the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Abends', role: 'r-time' }, { w: 'lerne', role: 'r-verb' },
    { w: 'ich', role: 'r-subject' }, { w: 'Deutsch', role: 'r-object' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one rule that controls every German main clause.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Compare daily routines with Pia and Pia — watch the verb stay in position 2 as sentences flip.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the time and frequency words (morgens, oft, immer, nie …) that make word order visible.' },
    { id: 'grammar',    label: 'The V2 rule', tag: 'core',
      objective: 'Master verb-second, inversion, question order, nicht-placement, and time–manner–place.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a daily-routine text and tap any word to hear it and see its role.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch when and how often people do things, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe your routine and flip sentences to start with a time word.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five sentences with different word orders, keeping the verb in position 2.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Reorder words, fix word-order errors, and build sentences with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All time and frequency words with translations, examples and a routine word-bank.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Reordering drills, inversion practice, error correction, and a daily-routine writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The verb-second rule, inversion, question order, nicht-placement, time–manner–place, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Verb = Position 2', text: 'Keep the verb second, always' },
    { de: 'Abends lerne ich …', text: 'Front a time word & invert' },
    { de: 'Was machst du?', text: 'Order W- and Ja/Nein questions' },
    { de: '… nicht / nichts', text: 'Place negation correctly' },
    { de: 'Mein Alltag', text: 'Describe your daily routine' }
  ],

  // ---------- Vocabulary (36 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'abends', pos: 'adverb', en: 'in the evening(s)', hi: 'शाम को', ex: 'Abends lerne ich Deutsch.', exEn: 'In the evenings I study German.' },
    { de: 'duschen', pos: 'verb', en: 'to shower', hi: 'नहाना', ex: 'Morgens dusche ich.', exEn: 'In the mornings I shower.', conj: { praesens: 'duscht', praeteritum: 'duschte', perfekt: 'hat geduscht' } },
    { de: 'frühstücken', pos: 'verb', en: 'to have breakfast', hi: 'नाश्ता करना', ex: 'Ich frühstücke um acht.', exEn: 'I have breakfast at eight.', conj: { praesens: 'frühstückt', praeteritum: 'frühstückte', perfekt: 'hat gefrühstückt' } },
    { de: 'immer', pos: 'adverb', en: 'always', hi: 'हमेशा', ex: 'Ich frühstücke immer.', exEn: 'I always have breakfast.' },
    { de: 'manchmal', pos: 'adverb', en: 'sometimes', hi: 'कभी-कभी', ex: 'Manchmal koche ich.', exEn: 'Sometimes I cook.' },
    { de: 'morgens', pos: 'adverb', en: 'in the morning(s)', hi: 'सुबह', ex: 'Morgens dusche ich.', exEn: 'In the mornings I shower.' },
    { de: 'oft', pos: 'adverb', en: 'often', hi: 'अक्सर', ex: 'Ich spiele oft Fußball.', exEn: 'I often play football.' },
    // ===== Active Support =====
    { de: 'allein', pos: 'adverb', en: 'alone', hi: 'अकेले', ex: 'Ich wohne allein.', exEn: 'I live alone.' },
    { de: 'Alltag', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'everyday life, daily routine', hi: 'रोज़मर्रा', ex: 'Der Alltag ist die beste Praxis.', exEn: 'Everyday life is the best practice.' },
    { de: 'Mittag', art: 'der', gender: 'm', plural: 'Mittage', pos: 'noun', en: 'noon, midday', hi: 'दोपहर', ex: 'Am Mittag esse ich.', exEn: 'At noon I eat.' },
    { de: 'Morgen', art: 'der', gender: 'm', plural: 'Morgen', pos: 'noun', en: 'morning', hi: 'सुबह', ex: 'Der Morgen ist ruhig.', exEn: 'The morning is calm.' },
    { de: 'Nachmittag', art: 'der', gender: 'm', plural: 'Nachmittage', pos: 'noun', en: 'afternoon', hi: 'दोपहर बाद', ex: 'Am Nachmittag lerne ich.', exEn: 'In the afternoon I study.' },
    { de: 'Vormittag', art: 'der', gender: 'm', plural: 'Vormittage', pos: 'noun', en: 'late morning, forenoon', hi: 'दोपहर से पहले', ex: 'Am Vormittag arbeite ich.', exEn: 'In the late morning I work.' },
    { de: 'Nacht', art: 'die', gender: 'f', plural: 'Nächte', pos: 'noun', en: 'night', hi: 'रात', ex: 'Die Nacht ist lang.', exEn: 'The night is long.' },
    { de: 'früh', pos: 'adverb', en: 'early', hi: 'जल्दी', ex: 'Ich stehe früh auf.', exEn: 'I get up early.' },
    { de: 'jede/jeder', pos: 'determiner', en: 'every, each', hi: 'हर', ex: 'Jeden Tag lerne ich.', exEn: 'Every day I study.' },
    { de: 'lange', pos: 'adverb', en: 'a long time', hi: 'देर तक', ex: 'Max schläft lange.', exEn: 'Max sleeps a long time.' },
    { de: 'meistens', pos: 'adverb', en: 'mostly, usually', hi: 'अक्सर', ex: 'Meistens esse ich mit Max.', exEn: 'Mostly I eat with Max.' },
    { de: 'mittags', pos: 'adverb', en: 'at noon, at midday', hi: 'दोपहर को', ex: 'Mittags esse ich in der Mensa.', exEn: 'At noon I eat in the canteen.' },
    { de: 'nachmittags', pos: 'adverb', en: 'in the afternoon(s)', hi: 'दोपहर बाद', ex: 'Nachmittags spiele ich.', exEn: 'In the afternoons I play.' },
    { de: 'nachts', pos: 'adverb', en: 'at night', hi: 'रात को', ex: 'Nachts schlafe ich.', exEn: 'At night I sleep.' },
    { de: 'nichts', pos: 'pronoun', en: 'nothing', hi: 'कुछ नहीं', ex: 'Abends lerne ich nichts.', exEn: 'In the evenings I study nothing.' },
    { de: 'nie', pos: 'adverb', en: 'never', hi: 'कभी नहीं', ex: 'Ich frühstücke nie.', exEn: 'I never have breakfast.' },
    { de: 'normalerweise', pos: 'adverb', en: 'normally, usually', hi: 'आम तौर पर', ex: 'Normalerweise lerne ich zu Hause.', exEn: 'Normally I study at home.' },
    { de: 'nur', pos: 'adverb', en: 'only', hi: 'सिर्फ़', ex: 'Ich habe nur eine Stunde.', exEn: 'I have only one hour.' },
    { de: 'regelmäßig', pos: 'adverb', en: 'regularly', hi: 'नियमित रूप से', ex: 'Ich lerne regelmäßig.', exEn: 'I study regularly.' },
    { de: 'selten', pos: 'adverb', en: 'rarely, seldom', hi: 'कभी-कभार', ex: 'Ich koche selten.', exEn: 'I rarely cook.' },
    { de: 'täglich', pos: 'adverb', en: 'daily', hi: 'रोज़', ex: 'Ich lerne täglich Deutsch.', exEn: 'I study German daily.' },
    { de: 'vormittags', pos: 'adverb', en: 'in the late morning(s)', hi: 'दोपहर से पहले', ex: 'Vormittags habe ich Kurs.', exEn: 'In the late mornings I have class.' },
    { de: 'wenig', pos: 'adverb', en: 'a little, not much', hi: 'कम', ex: 'Max schläft wenig.', exEn: 'Max sleeps little.' },
    { de: 'zu Hause', pos: 'phrase', en: 'at home', hi: 'घर पर', ex: 'Ich lerne zu Hause.', exEn: 'I study at home.' },
    { de: 'zu Mittag essen', pos: 'phrase', en: 'to have lunch', hi: 'दोपहर का खाना खाना', ex: 'Wir essen zu Mittag.', exEn: 'We have lunch.' },
    // ===== Passive =====
    { de: 'abwechselnd', pos: 'adjective', en: 'alternating, taking turns', hi: 'बारी-बारी से', ex: 'Wir kochen abwechselnd.', exEn: 'We cook in turns.' },
    { de: 'wach', pos: 'adjective', en: 'awake', hi: 'जागा हुआ', ex: 'Nachts bin ich wach.', exEn: 'At night I am awake.' },
    // ===== Reference / System =====
    { de: 'Position', art: 'die', gender: 'f', plural: 'Positionen', pos: 'noun', en: 'position', hi: 'स्थान', ex: 'Das Verb ist auf Position zwei.', exEn: 'The verb is in position two.' },
    { de: 'Zeitangabe', art: 'die', gender: 'f', plural: 'Zeitangaben', pos: 'noun', en: 'time expression', hi: 'समय-सूचक शब्द', ex: 'Morgens ist eine Zeitangabe.', exEn: '"Morgens" is a time expression.' }
  ],

  // ---------- The V2 rule (rule cards → accordion) ----------
  grammar: [
    {
      title: 'The golden rule — verb in position 2',
      goldenRule: 'Slot 1 holds one <b>idea</b> (any length). Slot 2 holds the verb. Nothing negotiates.',
      memoryTrick: 'Slot 1 ek <b>idea</b> hai, ek shabd nahi — "Am Nachmittag" teen shabd hain par ek hi seat leta hai.',
      body: [
        'In every German <strong>statement</strong>, the conjugated verb sits in <strong>position 2</strong>. Position 1 can be the subject OR a time word OR a place — but slot 2 is reserved for the verb.',
        'One shape breaks this, and only one: the yes/no question, where the verb moves to position 1 instead. The third block below puts the two side by side.'
      ],
      table: {
        head: ['Position 1', 'Position 2 (verb)', 'rest'],
        rows: [
          ['<span class="de r-subject">Ich</span>', '<span class="de r-verb">lerne</span>', '<span class="de">abends Deutsch.</span>'],
          ['<span class="de r-time">Abends</span>', '<span class="de r-verb">lerne</span>', '<span class="de">ich Deutsch.</span>'],
          ['<span class="de r-time">Heute</span>', '<span class="de r-verb">spielt</span>', '<span class="de">Max Fußball.</span>'],
          ['<span class="de r-place">Zu Hause</span>', '<span class="de r-verb">koche</span>', '<span class="de">ich.</span>']
        ]
      },
      note: 'Count to the verb: whatever is in slot 1, the verb is slot 2. "Position 1" counts as ONE block, even if it\u2019s several words ("Am Nachmittag").',
      hinglish: 'Sabse zaroori rule yeh hai: normal statement mein conjugated verb <b>position 2</b> par hota hai. Sirf Ja/Nein sawaal alag hai, jahan verb position 1 par chala jaata hai — woh neeche teesre block mein dikhaya hai. Baaki har case mein position 1 par kuch bhi ho — subject, time word ya place — slot 2 verb ka hi rehta hai. Aur dhyaan rakho ki position 1 ek poora block hota hai, chahe usme do-teen words ho jaayein, jaise "Am Nachmittag".'
    },
    {
      title: 'Inversion — front a time word, flip the subject',
      goldenRule: 'The verb never moves. If something else takes slot 1, the <b>subject</b> is what gets displaced.',
      memoryTrick: 'Verb apni seat nahi chhodta — <b>subject</b> ko peeche jaana padta hai.',
      recap: [
        'Front a time word → verb–subject order.',
        '<span class="de">Morgens dusche ich</span>, never <i>Morgens ich dusche</i>.',
        'The verb stayed in slot 2 the whole time.'
      ],
      body: [
        'When you start with something other than the subject (usually a time word), the subject jumps to <strong>right after the verb</strong>. This is called inversion.'
      ],
      table: {
        head: ['Normal (subject first)', 'Fronted (time first)'],
        rows: [
          ['<span class="de">Ich dusche morgens.</span>', '<span class="de">Morgens dusche ich.</span>'],
          ['<span class="de">Ich spiele oft Fußball.</span>', '<span class="de">Oft spiele ich Fußball.</span>'],
          ['<span class="de">Wir essen mittags.</span>', '<span class="de">Mittags essen wir.</span>'],
          ['<span class="de">Max schläft nachts.</span>', '<span class="de">Nachts schläft Max.</span>']
        ]
      },
      note: 'The verb does NOT move — it stays in position 2. Only the subject hops behind it: <b>Morgens <u>dusche</u> ich</b>, never "Morgens ich dusche".',
      hinglish: 'Jab sentence subject ke alawa kisi cheez se shuru ho (aksar time word), to subject verb ke <b>turant baad</b> aata hai. Verb hilta nahi — position 2 pe hi rehta hai: <b>Morgens dusche ich</b>, "Morgens ich dusche" galat hai.'
    },
    {
      title: 'Question word order',
      body: [
        'Two question types, two rules — both already met in Chapters 6\u20137, now seen as word order.'
      ],
      table: {
        head: ['Type', 'Order', 'Example'],
        rows: [
          ['W-Frage', 'question word + verb + subject', '<span class="de">Was machst du morgens?</span>'],
          ['W-Frage', 'verb stays position 2', '<span class="de">Wo wohnst du?</span>'],
          ['Ja/Nein', 'verb FIRST + subject', '<span class="de">Frühstückst du immer?</span>'],
          ['Ja/Nein', 'verb FIRST', '<span class="de">Kommst du heute?</span>']
        ]
      },
      note: '<b>W-Fragen</b>: the question word is position 1, so the verb is still position 2. <b>Ja/Nein</b> questions push the verb all the way to the front.',
      hinglish: '<b>W-Fragen</b> mein question word position 1 par aata hai, isliye verb position 2 par hi rehta hai: <b>Was machst du?</b> Aur <b>Ja/Nein</b> sawaal mein verb sabse aage chala jaata hai: <b>Kommst du heute?</b>'
    },
    {
      title: 'Where nicht and time–place go',
      goldenRule: 'Middle order: <b>Time → Manner → Place</b>. <b>nicht</b> goes just before what it negates, or last for the whole sentence.',
      memoryTrick: 'Beech ka order: <b>kab → kaise → kahaan</b>. Isi order mein socho.',
      body: [
        'Middle-of-sentence order follows <strong>Time → Manner → Place</strong>, and <span class="de r-negation">nicht</span> sits before the thing it negates (or at the end for the whole sentence).'
      ],
      table: {
        head: ['Rule', 'Example'],
        rows: [
          ['Time → Manner → Place', '<span class="de">Ich fahre morgens mit dem Bus zur Uni.</span>'],
          ['nicht — whole sentence', '<span class="de">Ich lerne abends nicht.</span>'],
          ['nicht — before a word', '<span class="de">Ich gehe nicht ins Café.</span>'],
          ['frequency word', '<span class="de">Ich frühstücke nie.</span>']
        ]
      },
      note: 'Order the middle: <b>Time</b> (morgens) → <b>Manner</b> (mit dem Bus) → <b>Place</b> (zur Uni). For "not at all", <b>nicht</b> goes at the end; to negate one word, <b>nicht</b> goes right before it.',
      hinglish: 'Sentence ke beech mein order aksar yeh hota hai: pehle <b>Time</b> (morgens), phir <b>Manner</b> (mit dem Bus), aur phir <b>Place</b> (zur Uni). Poore sentence ko negate karna ho to <b>nicht</b> end mein aata hai, aur sirf ek word ko negate karna ho to <b>nicht</b> us word se theek pehle.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four word-order traps to avoid.' ],
      mistakes: [
        { wrong: 'Morgens ich dusche.', right: 'Morgens dusche ich.', why: 'After a front time word, the verb is position 2 and the subject follows it.' },
        { wrong: 'Ich abends lerne Deutsch.', right: 'Ich lerne abends Deutsch.', why: 'The verb must be position 2 — right after the subject.' },
        { wrong: 'Du frühstückst immer?', right: 'Frühstückst du immer?', why: 'A yes/no question puts the verb first.' },
        { wrong: 'Ich gehe ins Café nicht.', right: 'Ich gehe nicht ins Café.', why: 'nicht goes before the place phrase it negates.' }
      ],
      hinglish: 'Char galtiyan common hain. Agar time word aage aata hai to verb position 2 par hi rehta hai: <b>Morgens dusche ich</b>. Verb subject ke turant baad aata hai: <b>Ich lerne abends</b>, na ki \u201cIch abends lerne\u201d. Ja/Nein sawaal mein verb sabse pehle aata hai: <b>Fr\u00fchst\u00fcckst du \u2026?</b> Aur <b>nicht</b> us phrase se pehle aata hai jise tum negate karna chahte ho: <b>nicht ins Caf\u00e9</b>.'
    }
  ],

  // ---------- Reading passage (daily routine, clickable) ----------
  reading: {
    title: 'Mein Alltag',
    titleEn: 'My daily routine',
    tokens: [
      { w: 'Morgens', role: 'r-time', en: 'in the mornings', hi: 'सुबह', pron: 'MOR-gens', type: 'Adverb · time', why: 'Front time word → verb next (this chapter).', ex: 'Morgens dusche ich.', exEn: 'In the mornings I shower.' },
      { w: 'dusche', role: 'r-verb', en: 'shower', hi: 'नहाता हूँ', pron: 'DOO-shuh', type: 'Verb · duschen (ich)', why: 'Verb position 2 (this chapter).', ex: 'Ich dusche früh.', exEn: 'I shower early.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Subject after the verb (inversion).', ex: 'Morgens dusche ich.', exEn: 'In the morning I shower.' },
      { w: 'früh', role: 'r-adverb', en: 'early', hi: 'जल्दी', pron: 'frü', type: 'Adverb', why: 'früh = early (this chapter).', ex: 'Ich stehe früh auf.', exEn: 'I get up early.' },
      { w: '.', plain: true },
      { w: 'Dann', role: 'r-time', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb · time' },
      { w: 'frühstücke', role: 'r-verb', en: 'have breakfast', hi: 'नाश्ता करता हूँ', pron: 'FRÜ-shtü-kuh', type: 'Verb · frühstücken (ich)', why: 'frühstücken; verb position 2 (this chapter).', ex: 'Dann frühstücke ich.', exEn: 'Then I have breakfast.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'allein', role: 'r-adverb', en: 'alone', hi: 'अकेले', pron: 'a-LINE', type: 'Adverb', why: 'allein = alone (this chapter).', ex: 'Ich frühstücke allein.', exEn: 'I have breakfast alone.' },
      { w: '.', plain: true },
      { w: 'Vormittags', role: 'r-time', en: 'in the late morning', hi: 'दोपहर से पहले', pron: 'FOR-mit-tahks', type: 'Adverb · time', why: 'vormittags (this chapter).', ex: 'Vormittags habe ich Kurs.', exEn: 'In the late morning I have class.' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'होती है', pron: 'HAH-buh', type: 'Verb · haben (ich)', why: 'haben (recycled — Akkusativ).', ex: 'Ich habe Kurs.', exEn: 'I have class.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · acc.', why: 'masc. accusative ein → einen (Chapter 12).', ex: 'einen Kurs', exEn: 'a course' },
      { w: 'Deutschkurs', role: 'r-object', en: 'German course', hi: 'जर्मन कोर्स', pron: 'DOYTSH-kurs', type: 'Noun · masc.', why: 'der Kurs (recycled).', ex: 'Ich habe einen Deutschkurs.', exEn: 'I have a German course.' },
      { w: '.', plain: true },
      { w: 'Mittags', role: 'r-time', en: 'at noon', hi: 'दोपहर को', pron: 'MIT-tahks', type: 'Adverb · time', why: 'mittags (this chapter).', ex: 'Mittags esse ich.', exEn: 'At noon I eat.' },
      { w: 'esse', role: 'r-verb', en: 'eat', hi: 'खाता हूँ', pron: 'E-suh', type: 'Verb · essen (ich)', why: 'essen (recycled — Essen & Trinken).', ex: 'Mittags esse ich in der Mensa.', exEn: 'At noon I eat in the canteen.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition + dat.' },
      { w: 'der', role: 'r-article', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article · dative' },
      { w: 'Mensa', role: 'r-place', en: 'canteen', hi: 'कैंटीन', pron: 'MEN-za', type: 'Noun · place', why: 'die Mensa (recycled — Unregelmäßige Verben).', ex: 'in der Mensa', exEn: 'in the canteen' },
      { w: '.', plain: true },
      { w: 'Abends', role: 'r-time', en: 'in the evenings', hi: 'शाम को', pron: 'AH-bents', type: 'Adverb · time', why: 'abends (this chapter).', ex: 'Abends lerne ich.', exEn: 'In the evenings I study.' },
      { w: 'lerne', role: 'r-verb', en: 'study', hi: 'पढ़ता हूँ', pron: 'LAIR-nuh', type: 'Verb · lernen (ich)', why: 'lernen; verb position 2 (recycled — Verben).', ex: 'Abends lerne ich Deutsch.', exEn: 'In the evenings I study German.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'regelmäßig', role: 'r-adverb', en: 'regularly', hi: 'नियमित रूप से', pron: 'RAY-gel-may-sikh', type: 'Adverb', why: 'regelmäßig (this chapter).', ex: 'Ich lerne regelmäßig.', exEn: 'I study regularly.' },
      { w: 'Deutsch', role: 'r-object', en: 'German', hi: 'जर्मन', pron: 'doytsh', type: 'Noun · language', why: 'Deutsch (recycled — Hallo!).', ex: 'Ich lerne Deutsch.', exEn: 'I learn German.' },
      { w: '.', plain: true },
      { w: 'Nachts', role: 'r-time', en: 'at night', hi: 'रात को', pron: 'nakhts', type: 'Adverb · time', why: 'nachts (this chapter).', ex: 'Nachts schlafe ich.', exEn: 'At night I sleep.' },
      { w: 'schlafe', role: 'r-verb', en: 'sleep', hi: 'सोता हूँ', pron: 'SHLAH-fuh', type: 'Verb · schlafen (ich)', why: 'schlafen (recycled — Unregelmäßige Verben).', ex: 'Nachts schlafe ich gut.', exEn: 'At night I sleep well.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'gut', role: 'r-adverb', en: 'well', hi: 'अच्छे से', pron: 'goot', type: 'Adverb' },
      { w: '.', plain: true }
    ],
    translation: 'In the mornings I shower early. Then I have breakfast alone. In the late morning I have a German course. At noon I eat in the canteen. In the evenings I study German regularly. At night I sleep well.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair — never invented.
    dialogue: [
      { id: 'A1_019_L001', speaker: 'Lukas', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Was machst du normalerweise am Wochenende, Pia?', en: 'What do you normally do at the weekend, Pia?' },
      { id: 'A1_019_L002', speaker: 'Pia', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Morgens schlafe ich lange, und dann frühstücke ich in Ruhe.', en: 'In the mornings I sleep long, and then I have breakfast in peace.' },
      { id: 'A1_019_L003', speaker: 'Lukas', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und nachmittags?', en: 'And in the afternoons?' },
      { id: 'A1_019_L004', speaker: 'Pia', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nachmittags treffe ich oft Freunde. Manchmal gehen wir ins Café.', en: 'In the afternoons I often meet friends. Sometimes we go to a café.' },
      { id: 'A1_019_L005', speaker: 'Lukas', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Lernst du auch?', en: 'Do you study too?' },
      { id: 'A1_019_L006', speaker: 'Pia', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, abends lerne ich täglich Deutsch. Aber sonntags lerne ich nichts!', en: 'Yes, in the evenings I study German daily. But on Sundays I study nothing!' }
    ],
    transcript: 'Was machst du normalerweise am Wochenende, Pia? Morgens schlafe ich lange, und dann frühstücke ich in Ruhe. Und nachmittags? Nachmittags treffe ich oft Freunde. Manchmal gehen wir ins Café. Lernst du auch? Ja, abends lerne ich täglich Deutsch. Aber sonntags lerne ich nichts!',
    translation: 'What do you normally do at the weekend, Pia? In the mornings I sleep long, and then I have breakfast in peace. And in the afternoons? In the afternoons I often meet friends. Sometimes we go to a café. Do you study too? Yes, in the evenings I study German daily. But on Sundays I study nothing!',
    tokens: [
      { w: 'Was' },
      { w: 'machst' },
      { w: 'du' },
      { w: 'normalerweise' },
      { w: 'am' },
      { w: 'Wochenende' },
      { w: ',', plain: true },
      { w: 'Pia' },
      { w: '?', plain: true },
      { w: 'Morgens' },
      { w: 'schlafe' },
      { w: 'ich' },
      { w: 'lange' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'dann' },
      { w: 'frühstücke' },
      { w: 'ich' },
      { w: 'in' },
      { w: 'Ruhe' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'nachmittags' },
      { w: '?', plain: true },
      { w: 'Nachmittags' },
      { w: 'treffe' },
      { w: 'ich' },
      { w: 'oft' },
      { w: 'Freunde' },
      { w: '.', plain: true },
      { w: 'Manchmal' },
      { w: 'gehen' },
      { w: 'wir' },
      { w: 'ins' },
      { w: 'Café' },
      { w: '.', plain: true },
      { w: 'Lernst' },
      { w: 'du' },
      { w: 'auch' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'abends' },
      { w: 'lerne' },
      { w: 'ich' },
      { w: 'täglich' },
      { w: 'Deutsch' },
      { w: '.', plain: true },
      { w: 'Aber' },
      { w: 'sonntags' },
      { w: 'lerne' },
      { w: 'ich' },
      { w: 'nichts' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was macht Pia am Wochenende morgens?', qEn: 'What does Pia do on weekend mornings?', options: ['lange schlafen', 'früh aufstehen', 'lernen', 'arbeiten'], optionsEn: ['sleep in', 'get up early', 'study', 'work'], answer: 0,
        explain: '"Morgens schlafe ich lange …"' },
      { q: 'Wie oft trifft sie nachmittags Freunde?', qEn: 'How often does she meet friends in the afternoon?', options: ['nie', 'selten', 'oft', 'täglich'], optionsEn: ['never', 'rarely', 'often', 'daily'], answer: 2,
        explain: '"Nachmittags treffe ich oft Freunde."' },
      { q: 'Was lernt sie am Sonntag?', qEn: 'What does she study on Sundays?', options: ['Deutsch', 'nichts', 'Englisch', 'immer'], optionsEn: ['German', 'nothing', 'English', 'always'], answer: 1,
        explain: '"Aber sonntags lerne ich nichts!"' }
    ]
  },

  // ---------- Speaking prompts ----------
  speaking: [
    { task: "Dein Partner fragt: Was machst du normalerweise am Wochenende?", taskEn: "Your partner asks: what do you usually do at the weekend?", de: "Morgens schlafe ich lange, und dann frühstücke ich in Ruhe.", en: "In the morning I sleep late, and then I have a relaxed breakfast." },
    { task: "Deine Lehrerin fragt: Was machst du nachmittags?", taskEn: "Your teacher asks: what do you do in the afternoon?", de: "Nachmittags treffe ich oft Freunde. Manchmal gehen wir ins Café.", en: "In the afternoon I often meet friends. Sometimes we go to a café." },
    { task: "Dein Freund fragt: Wie ist dein Alltag morgens?", taskEn: "Your friend asks: what's your morning routine like?", de: "Ich dusche früh und ich frühstücke immer allein.", en: "I shower early and I always have breakfast alone." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about your daily routine. Make at least two of them START with a time word (Morgens …, Abends …) so the subject moves after the verb. Use frequency words (immer, oft, manchmal, nie) and keep the verb in position 2.',
    starters: ['Morgens …', 'Mittags …', 'Nachmittags …', 'Abends … / Nachts …'],
    placeholder: 'Morgens dusche ich und dann frühstücke ich …',
    minWords: 20
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence has correct word order?',
      options: ['Abends ich lerne Deutsch.', 'Abends lerne ich Deutsch.', 'Ich abends lerne Deutsch.', 'Lerne abends ich Deutsch.'],
      answer: 1,
      explain: 'Front a time word → verb in position 2 → subject after it: "Abends lerne ich Deutsch."'
    },
    gap: {
      // verb-second after fronted time words
      sentence: ['Morgens ', ' ich, und nachmittags ', ' ich Fußball.'],
      gaps: [ { answer: 'dusche', accepts: ['dusche'] }, { answer: 'spiele', accepts: ['spiele'] } ],
      explain: 'After a front time word the verb comes next: Morgens dusche ich … nachmittags spiele ich …'
    },
    match: {
      q: 'Match each time word to its English.',
      pairs: [
        { noun: 'morgens', art: 'in the mornings' },
        { noun: 'oft', art: 'often' },
        { noun: 'nie', art: 'never' },
        { noun: 'täglich', art: 'daily' }
      ]
    },
    builder: {
      target: 'Build: "In the evenings I study German."',
      bank: ['Abends', 'lerne', 'ich', 'Deutsch'],
      answer: ['Abends', 'lerne', 'ich', 'Deutsch'],
      roles: { 'Abends': 'r-time', 'lerne': 'r-verb', 'ich': 'r-subject', 'Deutsch': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'In a German main clause, the conjugated verb is in…', options: ['position 1', 'position 2', 'the last position', 'any position'], answer: 1,
      explain: 'The verb-second (V2) rule: the verb is always the second element.' },
    { q: 'Choose the correct sentence:', options: ['Morgens ich frühstücke.', 'Morgens frühstücke ich.', 'Ich morgens frühstücke.', 'Frühstücke morgens ich.'], answer: 1,
      explain: 'Front time word → verb position 2 → subject after it.' },
    { q: 'Which is a correct Ja/Nein question?', options: ['Du kommst heute?', 'Kommst du heute?', 'Heute du kommst?', 'Du heute kommst?'], answer: 1,
      explain: 'Ja/Nein questions put the verb first: "Kommst du heute?"' },
    { q: 'Where does nicht go in "Ich gehe ___ ins Café"?', options: ['before ins Café', 'at the very end', 'before ich', 'after Café'], answer: 0,
      explain: 'nicht goes before the phrase it negates: "Ich gehe nicht ins Café."' },
    { q: 'What does "nie" mean?', options: ['always', 'never', 'often', 'sometimes'], answer: 1,
      explain: 'nie = never (immer = always, oft = often, manchmal = sometimes).' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'The golden rule: the conjugated verb is always in <strong>position 2</strong> — <span class="de">Abends <u>lerne</u> ich.</span>' },
    { c: 'r-time', html: 'Start with a time word and the subject hops behind the verb: <span class="de">Morgens dusche ich.</span>' },
    { c: 'r-question', html: 'W-Frage keeps the verb second (<span class="de">Was machst du?</span>); Ja/Nein puts it first (<span class="de">Kommst du?</span>).' }
  ],
  revisionTips: [
    'Count to the verb: whatever starts the sentence, the verb is the second block.',
    'Practise flipping: say a sentence subject-first, then again starting with the time word.',
    'Group the frequency words on a line: nie < selten < manchmal < oft < meistens < immer.'
  ]
};

window.CHAPTER = CHAPTER;
