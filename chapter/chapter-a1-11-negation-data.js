/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 2 · Chapter 11
   "Kein & Nicht"  (Negation)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-11 word list (12 words).
   Recycles Chapters 1–10 throughout.
============================================================ */
const CHAPTER = {
  id: 'a1-11-negation',
  phase: 'A1 · Phase 2',
  number: 11,
  title: 'Kein & Nicht',
  titleEn: 'Negation',
  description: 'There are two ways to say no in German, and choosing right is simple: use kein to negate a noun (no book, not a car), and nicht for everything else — verbs, adjectives, whole statements. Master the split and you can say what is not.',
  xp: 150,
  time: 40,
  difficulty: 'Beginner',
  nextChapter: { number: 12, title: 'Akkusativ', titleEn: 'The Accusative Case' , href: 'chapter-a1-12-akkusativ.html' },

  heroAnimationPath: null,

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Two negators, one easy split: use <span class="de r-negation">kein</span> to negate a <span class="de r-subject">noun</span> (<span class="de">kein Buch</span> — no book), and <span class="de r-negation">nicht</span> for everything else — verbs, adjectives, whole sentences (<span class="de">nicht müde</span> — not tired).'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is NEGATION: kein/keine/keinen (to negate nouns) vs nicht (to negate verbs, adjectives, adverbs and whole statements). ' +
    'The learner wrote negative sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Use KEIN to negate a noun that has no article or an indefinite article: "Ich habe kein Buch.", "Das ist kein Auto."\n' +
    '- kein declines like ein: masc. kein (nom) / keinen (acc); fem. keine; neut. kein; plural keine. (e.g. "Ich habe keinen Stift." — masculine accusative.)\n' +
    '- Use NICHT for everything else: verbs ("Er kommt nicht."), adjectives ("Ich bin nicht müde."), adverbs, and definite/specific things ("Das ist nicht mein Buch.").\n' +
    '- nicht usually comes at the END of a simple sentence, or directly before the word it negates (an adjective/adverb): "Ich wohne nicht hier."\n' +
    '- "nicht mehr" = not anymore; "kein … mehr" = no more (of a noun).\n' +
    '- All nouns are capitalised.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why (kein vs nicht, or placement). If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>kein/nicht check:</b> one sentence on whether the right negator was chosen.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you can say what is not. Move on to <span class="de">Akkusativ</span>.',
    mid: 'Good. Re-read the kein-vs-nicht card once, then continue.',
    low: 'Worth another pass — revisit the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'habe', role: 'r-verb' },
    { w: 'kein', role: 'r-negation' }, { w: 'Buch', role: 'r-object' },
    { w: '.', role: '' }
  ],

  story: {
    eyebrow: 'Story-based learning',
    headline: 'No, <em>thanks.</em>',
    intro: 'Lunchtime talk. Ben has no time, Anna has no more money, and the two learn the two ways to say no in German — kein for things, nicht for everything else.',
    outcomes: ['Every word is clickable for meaning + audio', 'Hear kein vs nicht in real sentences', 'A very relatable conversation'],
    scene: 'Mittagspause — Deutschkurs',
    femaleSpeakers: ['Anna'],
    dialogue: [
      { speaker: 'Ben', tokens: [
        { w: 'Anna', role: 'r-name', en: 'Anna', hi: 'अना', pron: 'AH-na', type: 'Name · person' },
        { w: ',', plain: true },
        { w: 'hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'Zeit', role: 'r-object', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'Anna, do you have time today?', hi: 'Anna, aaj tumhaare paas time hai?' },
      { speaker: 'Anna', side: 'right', tokens: [
        { w: 'Heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: '?', plain: true },
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben (ich)' },
        { w: 'keine', role: 'r-negation', en: 'no (fem.)', hi: 'कोई नहीं', pron: 'KY-nuh', type: 'Negation · fem.', why: 'kein negates a noun; Zeit is feminine → keine.', ex: 'Ich habe keine Zeit.', exEn: 'I have no time.' },
        { w: 'Zeit', role: 'r-object', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Today? No, I have no time.', hi: 'Aaj? Nahi, mere paas time nahi hai.' },
      { speaker: 'Ben', tokens: [
        { w: 'Oh', role: 'r-subject', en: 'oh', hi: 'ओह', pron: 'oh', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Warum', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'va-RUM', type: 'Question word' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '?', plain: true }
      ], en: 'Oh! Why not?', hi: 'Oh! Kyun nahi?' },
      { speaker: 'Anna', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'lerne', role: 'r-verb', en: 'study', hi: 'पढ़ती हूँ', pron: 'LAIR-nuh', type: 'Verb · lernen (ich)' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'Deutsch', role: 'r-object', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun · language' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben (ich)' },
        { w: 'kein', role: 'r-negation', en: 'no (neut.)', hi: 'कोई नहीं', pron: 'kine', type: 'Negation · neut.', why: 'Glück is neuter → kein.', ex: 'Ich habe kein Glück.', exEn: 'I have no luck.' },
        { w: 'Glück', role: 'r-object', en: 'luck', hi: 'किस्मत', pron: 'glük', type: 'Noun · neut.' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'I\u2019m studying German today. And I have no luck today.', hi: 'Aaj main German padh rahi hoon. Aur aaj kismat bhi nahi hai.' },
      { speaker: 'Ben', tokens: [
        { w: 'Kein', role: 'r-negation', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Negation · neut.', why: 'Problem is neuter → kein. A fixed phrase.', ex: 'Kein Problem!', exEn: 'No problem!' },
        { w: 'Problem', role: 'r-object', en: 'problem', hi: 'समस्या', pron: 'pro-BLAYM', type: 'Noun · neut.' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '?', plain: true }
      ], en: 'No problem! And tomorrow?', hi: 'Koi baat nahi! Aur kal?' },
      { speaker: 'Anna', side: 'right', tokens: [
        { w: 'Morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'Zeit', role: 'r-object', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '!', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतनी', pron: 'zo', type: 'Adverb' },
        { w: 'spät', role: 'r-time', en: 'late', hi: 'देर', pron: 'shpayt', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'Tomorrow I have time! But not so late.', hi: 'Kal mere paas time hai! Par itni der se nahi.' },
      { speaker: 'Ben', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: ',', plain: true },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'Good! Tomorrow then, not today.', hi: 'Achha! Toh kal, aaj nahi.' },
      { speaker: 'Anna', side: 'right', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Bis', role: 'r-subject', en: 'until', hi: 'तक', pron: 'bis', type: 'Phrase (part)' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: ',', plain: true },
        { w: 'Ben', role: 'r-name', en: 'Ben', hi: 'बेन', pron: 'ben', type: 'Name · person' },
        { w: '!', plain: true }
      ], en: 'Exactly! See you tomorrow, Ben!', hi: 'Bilkul! Kal milte hain, Ben!' }
    ]
  },

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole chapter at a glance before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meet the characters and hear this chapter’s words in a real conversation first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the negation words and the connectors and time words you need around them.' },
    { id: 'grammar',    label: 'Negation', tag: 'core',
      objective: 'Master kein (for nouns) vs nicht (for everything else) and where nicht goes.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a café scene full of negatives and tap any word to hear it and see what it means.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch what people do NOT have or want, then answer what you understood.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say what you do not have, are not, and do not want, then quiz a partner.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Turn positive sentences negative and write five of your own with kein/nicht.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill kein-vs-nicht choice, placement, and negative answers with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 150 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The negation words and supporting connectors with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '9 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Kein-vs-nicht drills, positive→negative transformation, and self-study activities.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'kein declension, nicht placement, kein…mehr / nicht mehr, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'kein / keine', text: 'Negate a noun: no book, not a car' },
    { de: 'keinen', text: 'Use the accusative kein for masculine objects' },
    { de: 'nicht', text: 'Negate verbs, adjectives and whole statements' },
    { de: 'kein vs nicht', text: 'Choose the right negator in simple sentences' },
    { de: 'nicht mehr', text: 'Say "not anymore" and "no more"' }
  ],

  // ---------- Vocabulary (12 words) ----------
  vocab: [
    { de: 'kein/keine', pos: 'negation article', en: 'no, not a', hi: 'कोई नहीं',
      ex: 'Ich habe kein Buch.', exEn: 'I have no book.' },
    { de: 'nicht', pos: 'adverb (negation)', en: 'not', hi: 'नहीं',
      ex: 'Ich bin nicht müde.', exEn: 'I am not tired.' },
    { de: 'Zeit', art: 'die', gender: 'f', plural: 'Zeiten', pos: 'noun', en: 'time', hi: 'समय',
      ex: 'Ich habe keine Zeit.', exEn: 'I have no time.' },
    { de: 'heute', pos: 'adverb', en: 'today', hi: 'आज',
      ex: 'Heute habe ich keine Zeit.', exEn: 'Today I have no time.' },
    { de: 'jetzt', pos: 'adverb', en: 'now', hi: 'अभी',
      ex: 'Jetzt nicht, bitte.', exEn: 'Not now, please.' },
    { de: 'aber', pos: 'conjunction', en: 'but', hi: 'लेकिन',
      ex: 'Ich habe Zeit, aber kein Geld.', exEn: 'I have time, but no money.' },
    { de: 'oder', pos: 'conjunction', en: 'or', hi: 'या',
      ex: 'Tee oder Kaffee? — Kein Kaffee, danke.', exEn: 'Tea or coffee? — No coffee, thanks.' },
    { de: 'Problem', art: 'das', gender: 'n', plural: 'Probleme', pos: 'noun', en: 'problem', hi: 'समस्या',
      ex: 'Kein Problem!', exEn: 'No problem!' },
    { de: 'mehr', pos: 'adverb', en: 'more, anymore', hi: 'और / अब',
      ex: 'Ich habe keine Zeit mehr.', exEn: 'I have no more time.' },
    { de: 'nicht mehr', pos: 'phrase', en: 'not anymore', hi: 'अब नहीं',
      ex: 'Er wohnt nicht mehr hier.', exEn: 'He does not live here anymore.' },
    { de: 'schon', pos: 'adverb', en: 'already', hi: 'पहले से',
      ex: 'Ich bin schon hier, aber sie nicht.', exEn: 'I am already here, but she is not.' },
    { de: 'Glück', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'luck, happiness', hi: 'किस्मत / खुशी',
      ex: 'Kein Glück heute!', exEn: 'No luck today!' },
    { de: 'Negationsartikel', art: 'der', gender: 'm', plural: 'Negationsartikel', pos: 'noun', en: 'negation article', hi: 'निषेध-आर्टिकल',
      ex: '"kein" ist ein Negationsartikel.', exEn: '"kein" is a negation article.' }
  ],

  // ---------- Negation (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Two ways to say no: kein vs nicht',
      goldenRule: 'Crossing out a <b>noun</b>? <b>kein</b>. Crossing out anything else? <b>nicht</b>.',
      why: 'German negates the article rather than the sentence: <i>ein Buch</i> becomes <i>kein Buch</i>, one word replacing another. English cannot do this, which is why "not a book" feels like the natural translation and produces the classic mistake <i>nicht ein Buch</i>.',
      formula: [
        'noun            →  <b>kein</b>   (Ich habe kein Buch.)',
        'verb            →  <b>nicht</b>  (Er kommt nicht.)',
        'adjective       →  <b>nicht</b>  (Ich bin nicht müde.)'
      ],
      memoryTrick: 'Pehle poochho: main noun ko negate kar raha hoon ya kisi aur cheez ko? Noun ho to <b>kein</b>, baaki sab mein <b>nicht</b>.',
      recap: [
        '<b>kein</b> replaces the article in front of a noun.',
        '<b>nicht</b> handles verbs, adjectives and whole statements.',
        '<i>nicht ein</i> never exists — it is always <b>kein</b>.'
      ],
      body: [
        'German has two negators, and the choice is simple once you see it. <span class="de r-negation">kein</span> negates a <b>noun</b>; <span class="de r-negation">nicht</span> negates <b>everything else</b>.',
        'Ask yourself: am I crossing out a <i>thing</i> (a noun)? Use <span class="de r-negation">kein</span>. Crossing out an action, a quality, or a whole statement? Use <span class="de r-negation">nicht</span>.'
      ],
      table: {
        head: ['Negate…', 'Use', 'Example'],
        rows: [
          ['a noun', '<span class="de r-negation">kein</span>', '<span class="de">Ich habe <b>kein</b> Buch.</span>'],
          ['a verb', '<span class="de r-negation">nicht</span>', '<span class="de">Er kommt <b>nicht</b>.</span>'],
          ['an adjective', '<span class="de r-negation">nicht</span>', '<span class="de">Ich bin <b>nicht</b> müde.</span>'],
          ['a whole idea', '<span class="de r-negation">nicht</span>', '<span class="de">Sie ist <b>nicht</b> zu Hause.</span>']
        ]
      },
      note: '<span class="de r-negation">kein</span> is literally the "not-a" — it is called the <span class="de">Negationsartikel</span> because it replaces ein/the article in front of a noun.',
      hinglish: 'Do negator: <b>kein</b> noun ke liye, <b>nicht</b> baaki sab ke liye. Khud se poochho — kya main koi <i>cheez</i> yaani noun ko negate kar raha hoon? To <b>kein</b> aayega (kein Buch). Aur agar action, quality ya poori baat ko negate kar raha hoon, to <b>nicht</b> (nicht müde, kommt nicht). <b>kein</b> ko Negationsartikel kehte hain — yeh ein/article ki jagah aata hai.'
    },
    {
      title: 'kein changes like ein',
      goldenRule: '<b>kein</b> = <b>ein</b> + k. Whatever ending <i>ein</i> would take, <i>kein</i> takes too.',
      memoryTrick: 'ein ke aage <b>k</b> lagao, aur ending wahi rakho. Naya kuch yaad nahi karna.',
      body: [
        'Because <span class="de r-negation">kein</span> stands where the article goes, it takes the same endings as <span class="de">ein</span> (from Chapter 10). Gender and case decide the ending.'
      ],
      table: {
        head: ['Gender / case', 'ein', 'kein', 'Example'],
        rows: [
          ['masc. nominative', 'ein', '<span class="de r-negation">kein</span>', '<span class="de">Das ist kein Tisch.</span>'],
          ['masc. accusative', 'einen', '<span class="de r-negation">keinen</span>', '<span class="de">Ich habe keinen Stift.</span>'],
          ['feminine', 'eine', '<span class="de r-negation">keine</span>', '<span class="de">Ich habe keine Zeit.</span>'],
          ['neuter', 'ein', '<span class="de r-negation">kein</span>', '<span class="de">Ich habe kein Buch.</span>'],
          ['plural', '—', '<span class="de r-negation">keine</span>', '<span class="de">Ich habe keine Bücher.</span>']
        ]
      },
      note: 'For now, the two you will use most are <b>kein</b> (m/n) and <b>keine</b> (f/pl). The masculine object form <b>keinen</b> comes back in the next chapter, Akkusativ.',
      hinglish: '<b>kein</b> wahi endings leta hai jo <b>ein</b> (Chapter 10). Gender aur case se ending tay hoti hai: feminine <b>keine</b> (keine Zeit), masc./neuter <b>kein</b> (kein Tisch, kein Buch), masc. object <b>keinen</b> (keinen Stift), plural <b>keine</b>. Abhi sabse zyada <b>kein</b> aur <b>keine</b> use hoga.'
    },
    {
      title: 'Where does nicht go?',
      goldenRule: 'Negating the whole sentence → <b>nicht</b> at the end. Negating one word → <b>nicht</b> right in front of it.',
      memoryTrick: 'Poori baat ko "nahi" karna hai? To <b>nicht</b> sentence ke end mein. Sirf ek word ko? To <b>nicht</b> us word se pehle.',
      recap: [
        'Whole sentence → <b>nicht</b> last.',
        'One word → <b>nicht</b> immediately before it.',
        '<b>nicht mehr</b> = not anymore; <b>kein … mehr</b> = no more (of a noun).'
      ],
      body: [
        'A few simple placements cover most A1 sentences. <span class="de r-negation">nicht</span> sits at the <b>end</b> of a short sentence, or directly <b>before</b> the adjective/adverb/place it negates.'
      ],
      table: {
        head: ['Negate', 'Position', 'Example'],
        rows: [
          ['the verb / whole sentence', 'at the end', '<span class="de">Er kommt <b>nicht</b>.</span>'],
          ['an adjective', 'before it', '<span class="de">Ich bin <b>nicht</b> müde.</span>'],
          ['a place', 'before it', '<span class="de">Sie ist <b>nicht</b> hier.</span>'],
          ['"anymore"', 'nicht mehr', '<span class="de">Er wohnt <b>nicht mehr</b> hier.</span>']
        ]
      },
      note: 'Two handy pairs: <b>nicht mehr</b> = not anymore (for verbs/adjectives), and <b>kein … mehr</b> = no more (for nouns): <i>keine Zeit mehr</i>.',
      hinglish: 'Aasaan placement: <b>nicht</b> chhote sentence ke <b>end</b> mein (Er kommt nicht), ya jis adjective ya place ko negate karna hai uske <b>theek pehle</b> (nicht müde, nicht hier). Do useful: <b>nicht mehr</b> (ab nahi — verb/adjective) aur <b>kein … mehr</b> (aur nahi — noun): keine Zeit mehr.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      whatIsIt: 'Four habits, and all four come from the same root: reaching for one all-purpose "no" instead of first asking whether a noun is being negated.',
      body: [ 'Each row is a rule from this chapter, seen from the wrong side.' ],
      mistakes: [
        { wrong: 'Ich habe nicht Zeit.', right: 'Ich habe keine Zeit.', why: 'Zeit is a noun → negate with kein/keine, not nicht.' },
        { wrong: 'Ich bin kein müde.', right: 'Ich bin nicht müde.', why: 'müde is an adjective → use nicht, not kein.' },
        { wrong: 'Das ist nicht ein Auto.', right: 'Das ist kein Auto.', why: 'Negating "ein + noun" becomes "kein + noun" — one word, never "nicht ein".' },
        { wrong: 'Ich habe keinen Zeit.', right: 'Ich habe keine Zeit.', why: 'keinen is the masculine object form. Zeit is feminine, so it stays keine — the ending follows the noun, not the sentence.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>Zeit</b> ek noun hai, isliye <b>keine Zeit</b> sahi hai, \u201cnicht Zeit\u201d nahi. <b>m\u00fcde</b> adjective hai, isliye <b>nicht m\u00fcde</b> aayega, \u201ckein m\u00fcde\u201d nahi. \u201cnicht ein\u201d jaisa kuch nahi hota \u2014 woh <b>kein</b> ban jaata hai: <b>Das ist kein Auto</b>. Aur Hindi ke \u201cnahi\u201d ko har jagah lagane se pehle yeh socho ki saamne noun hai ya nahi.'
    }
  ],

  // ---------- Reading passage (WhatsApp chat, clickable) ----------
  reading: {
    title: 'Chat mit Ben',
    titleEn: 'A chat with Ben',
    tokens: [
      { w: 'Ben', role: 'r-name', en: 'Ben', hi: 'बेन', pron: 'ben', type: 'Name · person' },
      { w: ':', plain: true },
      { w: 'Hallo', role: 'r-subject', en: 'hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting' },
      { w: 'Anna', role: 'r-name', en: 'Anna', hi: 'अना', pron: 'AH-na', type: 'Name · person' },
      { w: '!', plain: true },
      { w: 'Bist', role: 'r-verb', en: 'are (you)', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)', why: 'Yes/no question: verb first (Chapter 7). sein, du-form.', ex: 'Bist du müde?', exEn: 'Are you tired?', conj: { praesens: 'ist', praeteritum: 'war', perfekt: 'ist gewesen' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'du', role: 'r-subject', case: 'Nominativ', en: 'you (informal)', hi: 'तुम', pron: 'doo', type: 'Pronoun', why: 'Informal you (Chapter 5).', ex: 'Bist du müde?', exEn: 'Are you tired?' },
      { w: 'müde', role: 'r-adjective', en: 'tired', hi: 'थका हुआ', pron: 'MÜ-duh', type: 'Adjective', why: 'ü = round lips, "ee" (Chapter 2).', ex: 'Ich bin nicht müde.', exEn: 'I am not tired.', compare: { comparative: 'müder', superlative: 'am müdesten' }, advanced: { synonyms: ['erschöpft'], opposites: ['wach'] } },
      { w: '?', plain: true },
      { w: '—', plain: true },
      { w: 'Anna', role: 'r-name', en: 'Anna', hi: 'अना', pron: 'AH-na', type: 'Name · person' },
      { w: ':', plain: true },
      { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle', why: 'The short no (Chapter 7).', ex: 'Nein, danke.', exEn: 'No, thanks.' },
      { w: ',', plain: true },
      { w: 'ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Subject.', ex: 'Ich bin nicht müde.', exEn: 'I am not tired.' },
      { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein', why: 'sein, ich-form (Chapter 5).', ex: 'Ich bin hier.', exEn: 'I am here.', advanced: { synonyms: [], opposites: [] } },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation', why: 'müde is an adjective → negate with nicht.', ex: 'Ich bin nicht müde.', exEn: 'I am not tired.' },
      { w: 'müde', role: 'r-adjective', en: 'tired', hi: 'थका हुआ', pron: 'MÜ-duh', type: 'Adjective', why: 'nicht + adjective, not kein.', ex: 'Ich bin nicht müde.', exEn: 'I am not tired.' },
      { w: '.', plain: true },
      { w: 'Aber', role: 'r-preposition', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction', why: 'Joins a contrast.', ex: 'nicht müde, aber keine Zeit', exEn: 'not tired, but no time' },
      { w: 'ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Subject.', ex: 'Ich habe keine Zeit.', exEn: 'I have no time.' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'है (मेरे पास)', pron: 'HAH-buh', type: 'Verb · haben (ich)', why: 'haben, ich-form.', ex: 'Ich habe keine Zeit.', exEn: 'I have no time.', conj: { praesens: 'hat', praeteritum: 'hatte', perfekt: 'hat gehabt' }, advanced: { synonyms: ['besitzen'], opposites: [] } },
      { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time', why: 'eu = "oy". Time word.', ex: 'Heute habe ich keine Zeit.', exEn: 'Today I have no time.' },
      { w: 'keine', role: 'r-negation', en: 'no (fem.)', hi: 'कोई नहीं', pron: 'KY-nuh', type: 'Negation · fem.', why: 'kein negates a noun; Zeit is feminine → keine.', ex: 'Ich habe keine Zeit.', exEn: 'I have no time.' },
      { w: 'Zeit', role: 'r-object', case: 'Akkusativ', en: 'time', hi: 'समय', pron: 'tsait', type: 'Noun · fem.', why: 'z = "ts", ei = "eye" (Chapter 1). die Zeit.', ex: 'Ich habe keine Zeit.', exEn: 'I have no time.' },
      { w: '—', plain: true },
      { w: 'ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Subject.', ex: 'Ich lerne Deutsch.', exEn: 'I learn German.' },
      { w: 'lerne', role: 'r-verb', en: 'learn', hi: 'सीखती हूँ', pron: 'LAIR-nuh', type: 'Verb · lernen (ich)', why: 'lernen, ich-form: stem lern- + -e (Chapter 9).', ex: 'Ich lerne Deutsch.', exEn: 'I learn German.', conj: { praesens: 'lernt', praeteritum: 'lernte', perfekt: 'hat gelernt' } },
      { w: 'Deutsch', role: 'r-object', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun · language', why: 'The thing learned — capitalised language.', ex: 'Ich lerne Deutsch.', exEn: 'I learn German.' },
      { w: '.', plain: true },
      { w: '—', plain: true },
      { w: 'Ben', role: 'r-name', en: 'Ben', hi: 'बेन', pron: 'ben', type: 'Name · person' },
      { w: ':', plain: true },
      { w: 'Oh', role: 'r-subject', en: 'oh', hi: 'ओह', pron: 'oh', type: 'Reaction' },
      { w: ',', plain: true },
      { w: 'kein', role: 'r-negation', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Negation · neut.', why: 'Problem is neuter → kein. A fixed phrase.', ex: 'Kein Problem!', exEn: 'No problem!' },
      { w: 'Problem', role: 'r-object', en: 'problem', hi: 'समस्या', pron: 'pro-BLAYM', type: 'Noun · neut.', why: 'das Problem. "Kein Problem!" = no problem.', ex: 'Kein Problem!', exEn: 'No problem!' },
      { w: '!', plain: true },
      { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
      { w: '?', plain: true },
      { w: '—', plain: true },
      { w: 'Anna', role: 'r-name', en: 'Anna', hi: 'अना', pron: 'AH-na', type: 'Name · person' },
      { w: ':', plain: true },
      { w: 'Morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time', why: 'Time word opens the sentence, so the verb comes second (Chapter 9).', ex: 'Morgen habe ich Zeit.', exEn: 'Tomorrow I have time.' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'है (मेरे पास)', pron: 'HAH-buh', type: 'Verb · haben (ich)', why: 'Verb second, subject after (time word first).', ex: 'Morgen habe ich Zeit.', exEn: 'Tomorrow I have time.', conj: { praesens: 'hat', praeteritum: 'hatte', perfekt: 'hat gehabt' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · after verb', why: 'Subject jumps behind the verb because the time word is first.', ex: 'Morgen habe ich Zeit.', exEn: 'Tomorrow I have time.' },
      { w: 'Zeit', role: 'r-object', case: 'Akkusativ', en: 'time', hi: 'समय', pron: 'tsait', type: 'Noun · fem.', why: 'die Zeit.', ex: 'Morgen habe ich Zeit.', exEn: 'Tomorrow I have time.' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-preposition', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction', why: 'Joins a contrast.', ex: 'Zeit, aber kein Geld', exEn: 'time, but no money' },
      { w: 'ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Subject.', ex: 'ich habe', exEn: 'I have' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'है (मेरे पास)', pron: 'HAH-buh', type: 'Verb · haben', why: 'haben again.', ex: 'Ich habe kein Geld.', exEn: 'I have no money.', conj: { praesens: 'hat', praeteritum: 'hatte', perfekt: 'hat gehabt' }, advanced: { synonyms: [], opposites: [] } },
      { w: 'kein', role: 'r-negation', en: 'no (neut.)', hi: 'कोई नहीं', pron: 'kine', type: 'Negation · neut.', why: 'Geld is neuter → kein.', ex: 'Ich habe kein Geld.', exEn: 'I have no money.' },
      { w: 'Geld', role: 'r-object', case: 'Akkusativ', en: 'money', hi: 'पैसा', pron: 'gelt', type: 'Noun · neut.', why: 'final d → "t". das Geld.', ex: 'Ich habe kein Geld.', exEn: 'I have no money.' },
      { w: 'mehr', role: 'r-adverb', en: 'anymore', hi: 'और / अब', pron: 'mair', type: 'Adverb', why: 'kein … mehr = no more.', ex: 'kein Geld mehr', exEn: 'no more money' },
      { w: '.', plain: true },
      { w: '—', plain: true },
      { w: 'Ben', role: 'r-name', en: 'Ben', hi: 'बेन', pron: 'ben', type: 'Name · person' },
      { w: ':', plain: true },
      { w: 'Kein', role: 'r-negation', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Negation · neut.', why: 'Problem is neuter → kein. A fixed phrase.', ex: 'Kein Problem!', exEn: 'No problem!' },
      { w: 'Problem', role: 'r-object', en: 'problem', hi: 'समस्या', pron: 'pro-BLAYM', type: 'Noun · neut.', why: 'das Problem.', ex: 'Kein Problem!', exEn: 'No problem!' },
      { w: ',', plain: true },
      { w: 'ich', role: 'r-subject', case: 'Nominativ', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'है (मेरे पास)', pron: 'HAH-buh', type: 'Verb · haben (ich)' },
      { w: 'Geld', role: 'r-object', case: 'Akkusativ', en: 'money', hi: 'पैसा', pron: 'gelt', type: 'Noun · neut.', why: 'No kein here — Geld is simply affirmed, not negated.', ex: 'Ich habe Geld.', exEn: 'I have money.' },
      { w: '!', plain: true },
      { w: 'Bis', role: 'r-subject', en: 'until', hi: 'तक', pron: 'bis', type: 'Phrase (part)' },
      { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
      { w: ',', plain: true },
      { w: 'Anna', role: 'r-name', en: 'Anna', hi: 'अना', pron: 'AH-na', type: 'Name · person' },
      { w: '!', plain: true }
    ],
    translation: 'Ben: Hello Anna! Are you tired? — Anna: No, I am not tired. But I have no time today — I am learning German. — Ben: Oh, no problem! And tomorrow? — Anna: Tomorrow I have time, but I have no more money. — Ben: No problem, I have money! See you tomorrow, Anna!'
  },

  // ---------- Listening ----------
  listening: {
    tokens: [
      { w: 'Möchtest' },
      { w: 'du' },
      { w: 'einen' },
      { w: 'Kaffee' },
      { w: ',', plain: true },
      { w: 'Anna' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'möchte' },
      { w: 'keinen' },
      { w: 'Kaffee' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'bin' },
      { w: 'nicht' },
      { w: 'müde' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'keinen' },
      { w: 'Durst' },
      { w: '.', plain: true },
      { w: 'Kein' },
      { w: 'Problem' },
      { w: '!', plain: true },
      { w: 'Vielleicht' },
      { w: 'später' },
      { w: '.', plain: true }
    ],
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_011_L001', speaker: 'Ben', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Möchtest du einen Kaffee, Anna?', en: 'Would you like a coffee, Anna?' },
      { id: 'A1_011_L002', speaker: 'Anna', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nein, ich möchte keinen Kaffee. Ich bin nicht müde, ich habe keinen Durst.', en: 'No, I don\'t want a coffee. I\'m not tired, I\'m not thirsty.' },
      { id: 'A1_011_L003', speaker: 'Ben', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Kein Problem! Vielleicht später.', en: 'No problem! Maybe later.' }
    ],
    transcript: 'Möchtest du einen Kaffee, Anna? Nein, ich möchte keinen Kaffee. Ich bin nicht müde, ich habe keinen Durst. Kein Problem! Vielleicht später.',
    translation: 'Would you like a coffee, Anna? No, I don\'t want a coffee. I\'m not tired, I\'m not thirsty. No problem! Maybe later.',
    questions: [
      { q: 'Warum sagt Anna Nein zum Kaffee?', qEn: 'Why does Anna say no to the coffee?', options: ['Sie hat kein Geld.', 'Sie hat keinen Durst.', 'Sie mag keinen Kaffee.', 'Sie hat keine Zeit.'], optionsEn: ['She has no money.', 'She isn\'t thirsty.', 'She doesn\'t like coffee.', 'She has no time.'], answer: 1,
        explain: '"Ich habe keinen Durst" — she is not thirsty.' },
      { q: 'Ist Anna müde?', qEn: 'Is Anna tired?', options: ['Ja, sehr', 'Nein, nicht müde', 'Ein bisschen', 'Sie weiß es nicht'], optionsEn: ['Yes, very', 'No, not tired', 'a little', 'She doesn\'t know'], answer: 1,
        explain: '"Ich bin nicht müde."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin fragt: Möchtest du einen Kaffee?", taskEn: "Your friend asks: would you like a coffee?", de: "Nein, ich möchte keinen Kaffee.", en: "No, I don't want a coffee." },
    { task: "Dein Freund fragt: Bist du müde? Hast du Durst?", taskEn: "Your friend asks: are you tired? Are you thirsty?", de: "Ich bin nicht müde und ich habe keinen Durst.", en: "I'm not tired and I'm not thirsty." },
    { task: "Dein Partner fragt: Hast du jetzt Zeit?", taskEn: "Your partner asks: do you have time now?", de: "Nein, jetzt habe ich keine Zeit. Aber später!", en: "No, I have no time now. But later!" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five negative sentences about today. Use kein/keine for nouns (no time, no money) and nicht for adjectives/verbs (not tired, not at home). Include one "nicht mehr" or "kein … mehr".',
    starters: ['Ich habe kein…', 'Ich bin nicht…', '… nicht mehr.'],
    placeholder: 'Heute habe ich keine Zeit …',
    minWords: 15
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the negator: "Ich habe ___ Zeit."',
      options: ['nicht', 'kein', 'keine', 'keinen'],
      answer: 2,
      explain: 'Zeit is a feminine noun → keine. (kein negates nouns; Zeit is feminine.)'
    },
    gap: {
      // kein vs nicht in context.
      sentence: ['Ich bin ', ' müde, aber ich habe ', ' Geld.'],
      gaps: [ { answer: 'nicht', accepts: ['nicht'] }, { answer: 'kein', accepts: ['kein'] } ],
      explain: 'müde = adjective → nicht; Geld = noun (neuter) → kein.'
    },
    match: {
      q: 'Match each phrase to its negator type.',
      pairs: [
        { noun: 'kein Buch', art: 'noun → kein' },
        { noun: 'nicht müde', art: 'adjective → nicht' },
        { noun: 'keine Zeit', art: 'fem. noun → keine' },
        { noun: 'kommt nicht', art: 'verb → nicht' }
      ]
    },
    builder: {
      target: 'Build: "I have no time."',
      bank: ['keine', 'Ich', 'Zeit', 'habe'],
      answer: ['Ich', 'habe', 'keine', 'Zeit'],
      roles: { 'Ich': 'r-subject', 'habe': 'r-verb', 'keine': 'r-negation', 'Zeit': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which negator goes with a noun?', options: ['nicht', 'kein', 'nein', 'nie'], answer: 1,
      explain: 'kein negates nouns; nicht negates everything else.' },
    { q: 'Complete: "Ich bin ___ müde."', options: ['kein', 'keine', 'nicht', 'keinen'], answer: 2,
      explain: 'müde is an adjective → nicht.' },
    { q: '"Das ist ___ Auto." (negate the noun)', options: ['nicht', 'kein', 'keine', 'nicht ein'], answer: 1,
      explain: 'Auto is a neuter noun → kein (never "nicht ein").' },
    { q: 'What does "nicht mehr" mean?', options: ['not yet', 'not anymore', 'no more (noun)', 'never'], answer: 1,
      explain: '"nicht mehr" = not anymore (for verbs/adjectives).' },
    { q: 'Complete: "Ich habe ___ Stift." (masc. object)', options: ['kein', 'keine', 'keinen', 'nicht'], answer: 2,
      explain: 'Masculine accusative object → keinen Stift.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-negation', html: 'Two negators: <span class="de">kein</span> for <b>nouns</b> (kein Buch, keine Zeit), <span class="de">nicht</span> for <b>everything else</b> (nicht müde, kommt nicht).' },
    { c: 'r-subject', html: '<span class="de">kein</span> declines like <span class="de">ein</span>: kein (m/n), keine (f/pl), keinen (masc. object).' },
    { c: 'r-object', html: '<span class="de">nicht</span> goes at the end of a short sentence, or right before the word it negates. nicht mehr / kein … mehr = (not) anymore.' }
  ],
  revisionTips: [
    'Before negating, ask: is it a noun? → kein. Anything else? → nicht.',
    'Practise turning positive sentences negative: "Ich habe Zeit" → "Ich habe keine Zeit".',
    'Memorise the two fixed phrases: "Kein Problem!" and "nicht mehr".'
  ]
};

window.CHAPTER = CHAPTER;
