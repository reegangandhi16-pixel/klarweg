/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 5 · Chapter 36
   "Dativ Einführung"  (intro to the dative case)
   Vocabulary source: uploaded chapter-36 word list (3 words).
   Theme = giving & helping. Recycles Ch1–35.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-36-dativ',
  phase: 'A1 · Phase 5',
  number: 36,
  title: 'Dativ Einführung',
  titleEn: 'The Dative Case',
  description: 'Meet the second case. The dative marks the receiver — the person you give, help, or say something to. The articles shift: der→dem, die→der, das→dem, die(pl)→den. Ich gebe dem Mann das Buch. Ask "to whom?" with wem.',
  xp: 170,
  time: 35,
  difficulty: 'Beginner',
  nextChapter: { number: 37, title: 'Präpositionen mit Dativ', titleEn: 'Dative Prepositions' , href: 'chapter-a1-37-praep-dativ.html' },

  prevChapter: { number: 35, title: 'Goethe Mini 4', titleEn: 'Goethe Checkpoint 4', href: 'chapter-a1-35-goethe4.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'It\'s gift time before the holidays. Alina gives the teacher flowers, helps Timo, and — of course — saves herself the last piece of cake. Every "to whom?" puts the dative to work — dem, der, den — the case of the receiver.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear der→dem and die→der in real speech'
    ],
    scene: 'Geschenke vor den Ferien \u2014 im Kurs, Berlin',
    femaleSpeakers: ['Alina'],
    dialogue: [
      { speaker: 'Alina', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'gebe', role: 'r-verb', en: 'give', hi: 'देती हूँ', pron: 'GAY-buh', type: 'Verb · geben (ich)', why: 'geben + dative + accusative: to whom + what (this chapter).', ex: 'Ich gebe dem Kind das Buch.', exEn: 'I give the child the book.' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Nachbarn', role: 'r-dativ', en: 'neighbour (dat.)', hi: 'पड़ोसी को', pron: 'NAKH-barn', type: 'Noun · masc. dat.' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'ये', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Buch', role: 'r-akkusativ', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'I am giving the neighbour the book.', hi: 'Main padosi ko kitaab de rahi hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Nachbarn', role: 'r-dativ', en: 'neighbour (dat.)', hi: 'पड़ोसी को', pron: 'NAKH-barn', type: 'Noun · masc. dat.' },
        { w: '?', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'gibst', role: 'r-verb', en: 'are you giving', hi: 'देती हो', pron: 'geepst', type: 'Verb · geben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative', why: 'mir = to me (this chapter).', ex: 'Gibst du mir das?', exEn: 'Are you giving it to me?' },
        { w: '?', plain: true }
      ], en: 'The neighbour? And what are you giving me?', hi: 'Padosi ko? Aur mujhe kya de rahi ho?' },
      { speaker: 'Alina', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'gebe', role: 'r-verb', en: 'give', hi: 'देती हूँ', pron: 'GAY-buh', type: 'Verb · geben (ich)' },
        { w: 'meinem', role: 'r-dativ', en: 'my (masc. dat.)', hi: 'मेरे', pron: 'MY-nem', type: 'Possessive · dative', why: 'mein → meinem before a masc./neut. dative noun (this chapter).', ex: 'meinem Bruder', exEn: 'to my brother' },
        { w: 'Bruder', role: 'r-dativ', en: 'brother (dat.)', hi: 'भाई को', pron: 'BROO-der', type: 'Noun · masc. dat.' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Radio', role: 'r-akkusativ', en: 'radio', hi: 'रेडियो', pron: 'RAH-dyo', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'I am giving my brother the radio.', hi: 'Main apne bhai ko radio de rahi hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'meine', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Schwester', role: 'r-subject', en: 'sister', hi: 'बहन', pron: 'SHVES-ter', type: 'Noun · fem.' },
        { w: 'braucht', role: 'r-verb', en: 'needs', hi: 'चाहिए', pron: 'browkht', type: 'Verb · brauchen (sie)' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'so', role: 'r-adverb', en: 'such', hi: 'ऐसा', pron: 'zo', type: 'Adverb' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Radio', role: 'r-akkusativ', en: 'radio', hi: 'रेडियो', pron: 'RAH-dyo', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Thanks! But my sister also needs a radio like that.', hi: 'Dhanyavaad! Par meri bahan ko bhi aisa radio chahiye.' },
      { speaker: 'Alina', tokens: [
        { w: 'Hmm', role: 'r-subject', en: 'hmm', hi: 'हम्म', pron: 'hm', type: 'Filler' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'schenke', role: 'r-verb', en: 'give (as a gift)', hi: 'उपहार देती हूँ', pron: 'SHEN-kuh', type: 'Verb · schenken (ich)', why: 'schenken + dative = to give as a gift (this chapter).', ex: 'Ich schenke ihr das Buch.', exEn: 'I give her the book.' },
        { w: 'ihr', role: 'r-dativ', en: 'her', hi: 'उसे', pron: 'eer', type: 'Pronoun · dative' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Buch', role: 'r-akkusativ', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Hmm. Then I will give her the book.', hi: 'Hmm. Toh main use kitaab dungi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Super', role: 'r-adjective', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Zeigst', role: 'r-verb', en: 'will you show', hi: 'दिखाओगी', pron: 'TSYKST', type: 'Verb · zeigen (du)', why: 'zeigen + dative = to show someone something (this chapter).', ex: 'Zeigst du ihr das Buch?', exEn: 'Will you show her the book?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'ihr', role: 'r-dativ', en: 'her', hi: 'उसे', pron: 'eer', type: 'Pronoun · dative' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'उसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: '?', plain: true }
      ], en: 'Great! Will you show it to her today?', hi: 'Badhiya! Kya tum use aaj dikhaogi?' },
      { speaker: 'Alina', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bringe', role: 'r-verb', en: 'bring', hi: 'ले जाती हूँ', pron: 'BRING-uh', type: 'Verb · bringen (ich)', why: 'bringen + dative = to bring someone something (this chapter).', ex: 'Ich bringe ihr das Buch.', exEn: 'I bring her the book.' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'उसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'ihr', role: 'r-dativ', en: 'her', hi: 'उसके पास', pron: 'eer', type: 'Pronoun · dative' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'Abend', role: 'r-time', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun · time' },
        { w: '.', plain: true }
      ], en: 'Yes, I will bring it to her this evening.', hi: 'Haan, main use aaj shaam use le jaati hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'was', role: 'r-subject', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'passiert', role: 'r-verb', en: 'happens', hi: 'होता है', pron: 'pa-SEERT', type: 'Verb · passieren' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Tisch', role: 'r-dativ', en: 'table', hi: 'मेज़', pron: 'tish', type: 'Noun · masc. dat.' },
        { w: '?', plain: true }
      ], en: 'Perfect! And what happens with the table?', hi: 'Badhiya! Aur mez ka kya hoga?' },
      { speaker: 'Alina', tokens: [
        { w: 'Den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Tisch', role: 'r-akkusativ', en: 'table', hi: 'मेज़', pron: 'tish', type: 'Noun · masc.' },
        { w: 'gebe', role: 'r-verb', en: 'give', hi: 'देती हूँ', pron: 'GAY-buh', type: 'Verb · geben (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Nachbarn', role: 'r-dativ', en: 'neighbour (dat.)', hi: 'पड़ोसी को', pron: 'NAKH-barn', type: 'Noun · masc. dat.' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'I am giving the table to the neighbour too.', hi: 'Mez bhi main padosi ko de rahi hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Der', role: 'r-subject', en: 'he', hi: 'वह', pron: 'dair', type: 'Pronoun · subject' },
        { w: 'freut', role: 'r-verb', en: 'is pleased', hi: 'खुश होगा', pron: 'froyt', type: 'Verb · freuen (sich)', why: 'sich freuen = to be pleased (this chapter).', ex: 'Er freut sich.', exEn: 'He is pleased.' },
        { w: 'sich', role: 'r-akkusativ', en: 'himself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'sicher', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'ZI-kher', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Good! He will surely be pleased.', hi: 'Achha! Woh zaroor khush hoga.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German has a third case for the <strong>receiver</strong> \u2014 the person you give, help, or say something <em>to</em>. It\u2019s the <span class="de r-dativ">Dativ</span>, and the articles shift: <span class="de r-dativ">der→dem</span>, <span class="de r-dativ">die→der</span>, <span class="de r-dativ">das→dem</span>, <span class="de r-dativ">die (pl)→den</span>. <span class="de">Ich gebe <span class="r-dativ">dem Mann</span> das Buch.</span> Ask "to whom?" with <span class="de r-dativ">wem</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is an INTRODUCTION TO THE DATIVE CASE (Dativ): the case of the indirect object / receiver. ' +
    'The learner wrote sentences using the dative below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- The dative marks the RECEIVER (indirect object): the person you give/help/show/say something to. Ask "Wem?" (to whom?).\n' +
    '- Definite article in the dative: der→dem (masc.), die→der (fem.), das→dem (neut.), die→den (plural, +n on the noun: den Kindern).\n' +
    '- Indefinite/possessive in the dative: ein→einem (masc./neut.), eine→einer (fem.); mein→meinem/meiner; kein→keinem/keiner.\n' +
    '- Dative personal pronouns: ich→mir, du→dir, er→ihm, sie→ihr, es→ihm, wir→uns, ihr→euch, sie→ihnen, Sie→Ihnen.\n' +
    '- Some verbs always take the dative: helfen, danken, gehören, gefallen, antworten. "Ich helfe dem Mann." (not den Mann).\n' +
    '- With give-type verbs the pattern is: subject (nom.) + verb + receiver (dat.) + thing (acc.): "Ich gebe dem Kind einen Apfel."\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Dative check:</b> one sentence on whether the article/pronoun shifted correctly (der→dem, etc.).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — you mark the receiver with the dative and shift the articles correctly. On to <span class="de">Präpositionen mit Dativ</span>.',
    mid: 'Good. Re-read the der→dem / die→der card once, then continue.',
    low: 'Worth another pass — memorise the dative article shifts and pronouns, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'gebe', role: 'r-verb' },
    { w: 'dem', role: 'r-dativ' }, { w: 'Mann', role: 'r-dativ' },
    { w: 'das', role: 'r-akkusativ' }, { w: 'Buch', role: 'r-akkusativ' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See why German marks the receiver with a new case.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Gift time — hear der→dem and die→der as the gang gives and helps.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the dative signposts: dem, wem, der Dativ — and how they work.' },
    { id: 'grammar',    label: 'The Dative', tag: 'core',
      objective: 'Master der→dem / die→der / das→dem, the dative pronouns, and dative verbs.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a giving-and-helping text full of datives and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch who gives what to whom, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say who you give or help, using the dative.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five give/help sentences with correct dative articles and pronouns.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the article shifts and dative pronouns with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 170 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The dative articles, pronouns and signpost words with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Article-shift drills, dative-pronoun practice, dative-verb sentences, and error correction.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'der→dem / die→der / das→dem, the dative pronouns, dative verbs, Wer/Wen/Wem, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'der → dem, die → der', text: 'Shift the article to the dative' },
    { de: 'mir, dir, ihm, ihr', text: 'Use the dative pronouns' },
    { de: 'Ich helfe dem Mann.', text: 'Use dative verbs (helfen, danken)' },
    { de: 'Ich gebe dem Kind …', text: 'Mark the receiver of a gift' },
    { de: 'Wem? → Dativ', text: 'Ask "to whom?"' }
  ],

  // ---------- Vocabulary (3 words) ----------
  vocab: [
    { de: 'dem', pos: 'article', en: 'the (dative, masc./neut.)', hi: 'इस/को', ex: 'Ich gebe dem Mann das Buch.', exEn: 'I give the man the book.' },
    { de: 'wem', pos: 'pronoun', en: 'to whom', hi: 'किसको', ex: 'Wem gibst du das Buch?', exEn: 'To whom do you give the book?' },
    { de: 'Dativ', art: 'der', gender: 'm', plural: 'Dative', pos: 'noun', en: 'dative (case)', hi: 'संप्रदान कारक', ex: 'Der Empfänger steht im Dativ.', exEn: 'The receiver is in the dative.' }
  ],

  // ---------- The Dative (rule cards → accordion) ----------
  grammar: [
    {
      title: 'What the dative is for',
      goldenRule: 'Three cases, three questions: <b>Wer?</b> → Nominativ · <b>Wen?/Was?</b> → Akkusativ · <b>Wem?</b> → Dativ.',
      formula: [
        'Ich       gebe   dem Mann     das Buch.',
        '<b>Wer?</b>      verb   <b>Wem?</b> (dat.)  <b>Was?</b> (akk.)'
      ],
      memoryTrick: 'Akkusativ = jis par kaam seedha <b>hota</b> hai. Dativ = jise woh kaam <b>diya</b> jaata hai ya jise uska faayda milta hai. Do sawaal poochho: <b>Wen?</b> (kisko seedha) → Akkusativ, aur <b>Wem?</b> (kisko dena/dikhana) → Dativ.',
      body: [
        'You already know two cases: the <strong>nominative</strong> (the doer, "Wer?") and the <strong>accusative</strong> (the direct object, "Wen/Was?"). The <span class="de r-dativ">dative</span> is the third \u2014 the <strong>receiver</strong>, the one you give/help/show something <em>to</em>. Ask <span class="de r-dativ">Wem?</span> (to whom?).'
      ],
      table: {
        head: ['Case', 'Question', 'Role', 'Example'],
        rows: [
          ['Nominativ', '<span class="de">Wer?</span>', 'doer', '<span class="de"><span class="r-subject">Ich</span> gebe …</span>'],
          ['Akkusativ', '<span class="de">Wen/Was?</span>', 'the thing', '<span class="de">… <span class="r-akkusativ">das Buch</span></span>'],
          ['Dativ', '<span class="de">Wem?</span>', 'the receiver', '<span class="de">… <span class="r-dativ">dem Mann</span></span>'],
          ['together', '\u2014', 'all three', '<span class="de"><span class="r-subject">Ich</span> gebe <span class="r-dativ">dem Mann</span> <span class="r-akkusativ">das Buch</span>.</span>']
        ]
      },
      note: 'In a give-sentence: the <b>giver</b> is nominative, the <b>thing</b> is accusative, and the <b>receiver</b> is dative. Order: subject + verb + <b>dative receiver</b> + <b>accusative thing</b>.',
      hinglish: 'Tum do case already jaante ho: <b>Nominativ</b> (karne waala, Wer?) aur <b>Akkusativ</b> (cheez, Wen/Was?). <b>Dativ</b> teesra hai \u2014 <b>paane waala</b>, jise do/madad karo. Sawaal: <b>Wem?</b> (kisko?). Order: subject + verb + dative + accusative.'
    },
    {
      title: 'The article shifts',
      goldenRule: 'der→<b>dem</b> · die→<b>der</b> · das→<b>dem</b> · plural die→<b>den</b> (+ <b>-n</b> on the noun).',
      memoryTrick: 'Dativ mein har jagah <b>m</b> sunai deta hai: de<b>m</b>, eine<b>m</b>, meine<b>m</b>, ih<b>m</b>. Aur feminine <b>der</b> ban jaata hai — masculine jaisa dikhta hai, par hai feminine.',
      recap: [
        'Masculine and neuter both become <b>dem</b>.',
        'Feminine becomes <b>der</b> — the trap of this chapter.',
        'Plural becomes <b>den</b> and the noun adds <b>-n</b>.'
      ],
      body: [
        'The dative changes the definite article in a clear pattern. Two of them become <span class="de r-dativ">dem</span>.'
      ],
      table: {
        head: ['Gender', 'Nominative', 'Dative'],
        rows: [
          ['masculine', '<span class="de">der</span>', '<span class="de r-dativ">dem</span>'],
          ['feminine', '<span class="de">die</span>', '<span class="de r-dativ">der</span>'],
          ['neuter', '<span class="de">das</span>', '<span class="de r-dativ">dem</span>'],
          ['plural', '<span class="de">die</span>', '<span class="de r-dativ">den</span> (+n)']
        ]
      },
      note: 'Remember the shape: <b>der→dem, die→der, das→dem, die(pl)→den</b>. In the plural the noun also adds <b>-n</b> if it can: die Kinder → <b>den Kindern</b>. ein → einem/einer; mein → meinem/meiner.',
      hinglish: 'Article badalta hai: <b>der→dem, die→der, das→dem, plural die→den</b>. Plural mein noun pe bhi <b>-n</b>: die Kinder → <b>den Kindern</b>. ein → einem/einer; mein → meinem/meiner.'
    },
    {
      title: 'Dative pronouns',
      body: [
        'Each pronoun has a dative form too \u2014 the "to me / to you / to him" set.'
      ],
      table: {
        head: ['Nominative', 'Accusative', 'Dative'],
        rows: [
          ['<span class="de">ich / du</span>', '<span class="de">mich / dich</span>', '<span class="de r-dativ">mir / dir</span>'],
          ['<span class="de">er / sie / es</span>', '<span class="de">ihn / sie / es</span>', '<span class="de r-dativ">ihm / ihr / ihm</span>'],
          ['<span class="de">wir / ihr</span>', '<span class="de">uns / euch</span>', '<span class="de r-dativ">uns / euch</span>'],
          ['<span class="de">sie / Sie</span>', '<span class="de">sie / Sie</span>', '<span class="de r-dativ">ihnen / Ihnen</span>']
        ]
      },
      note: 'Learn the singular: <b>mir, dir, ihm</b> (him/it), <b>ihr</b> (her). uns and euch look the same as the accusative; <b>sie → ihnen</b>, formal <b>Sie → Ihnen</b>. "Ich gebe <b>dir</b> das Buch."',
      hinglish: 'Singular yaad karo: <b>mir</b> (mujhe), <b>dir</b> (tumhe), <b>ihm</b> (use/usko \u2014 masc/neut), <b>ihr</b> (use \u2014 fem). uns/euch same; <b>sie → ihnen</b>, formal <b>Sie → Ihnen</b>. "Ich gebe <b>dir</b> das Buch."'
    },
    {
      title: 'Verbs that take the dative',
      goldenRule: 'A short fixed list takes the dative even where English feels like a direct object: <b>helfen, danken, gehören, antworten, gefallen</b>.',
      memoryTrick: 'Is list ko bas yaad rakho — yeh logic se nahi milegi. <b>helfen · danken · gehören · antworten · gefallen</b>: paanch verb, hamesha Dativ.',
      body: [
        'Some common verbs always send their object into the dative \u2014 even though English feels like a direct object. Learn this short list by heart.'
      ],
      table: {
        head: ['Verb', 'Meaning', 'Example'],
        rows: [
          ['<span class="de">helfen</span>', 'to help', '<span class="de">Ich helfe <span class="r-dativ">dem Mann</span>.</span>'],
          ['<span class="de">danken</span>', 'to thank', '<span class="de">Ich danke <span class="r-dativ">dir</span>.</span>'],
          ['<span class="de">geben</span>', 'to give (receiver)', '<span class="de">Ich gebe <span class="r-dativ">ihr</span> das Buch.</span>'],
          ['<span class="de">gehören</span>', 'to belong to', '<span class="de">Das Buch gehört <span class="r-dativ">mir</span>.</span>']
        ]
      },
      note: 'Memorise: <b>helfen, danken, gehören, antworten, gefallen</b> take the dative. "Ich helfe <b>dem</b> Mann" \u2014 NOT "den Mann". With <b>geben/schenken</b>, the receiver is dative and the gift is accusative.',
      hinglish: 'Yaad karo: <b>helfen, danken, gehören, antworten, gefallen</b> dative lete hain. "Ich helfe <b>dem</b> Mann" \u2014 "den Mann" nahi. <b>geben/schenken</b> ke saath paane waala dative, gift accusative.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four dative traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich helfe den Mann.', right: 'Ich helfe dem Mann.', why: 'helfen takes the dative: der → dem.' },
        { wrong: 'Ich gebe die Frau das Buch.', right: 'Ich gebe der Frau das Buch.', why: 'The receiver goes into the dative, and feminine die becomes der. This one trips people because der looks masculine — but in the dative it is the feminine form.' },
        { wrong: 'Ich gebe dich das Buch.', right: 'Ich gebe dir das Buch.', why: 'The receiver is dative: du → dir, not dich.' },
        { wrong: 'Das Buch gehört mich.', right: 'Das Buch gehört mir.', why: 'gehören takes the dative: ich → mir.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>helfen</b> Dativ leta hai: <b>dem Mann</b>. <b>die Frau</b> Dativ mein <b>der Frau</b> ban jaata hai \u2014 yeh <b>der</b> dekh kar confuse mat ho, kyunki yeh feminine Dativ hai. Jo cheez paata hai woh Dativ mein aata hai, isliye <b>du</b> se <b>dir</b> banta hai, <b>dich</b> nahi. Aur <b>geh\u00f6ren</b> bhi Dativ leta hai: <b>ich</b> se <b>mir</b>.'
    }
  ],

  // ---------- Reading passage (giving & helping, clickable) ----------
  reading: {
    title: 'Geschenke',
    titleEn: 'Gifts',
    tokens: [
      { w: 'Vor', role: 'r-preposition', en: 'before', hi: 'से पहले', pron: 'for', type: 'Preposition' },
      { w: 'den', role: 'r-dativ', en: 'the (plural dat.)', hi: 'इन', pron: 'dayn', type: 'Article · dative', why: 'die (pl) → den in the dative (this chapter).', ex: 'vor den Ferien', exEn: 'before the holidays' },
      { w: 'Ferien', role: 'r-object', en: 'holidays', hi: 'छुट्टियाँ', pron: 'FAIR-yen', type: 'Noun · plural', why: 'die Ferien — plural only.', ex: 'vor den Ferien', exEn: 'before the holidays' },
      { w: 'geben', role: 'r-verb', en: 'give', hi: 'देते हैं', pron: 'GAY-ben', type: 'Verb · geben (wir)', why: 'geben + dative receiver + accusative thing (this chapter).', ex: 'Wir geben Geschenke.', exEn: 'We give gifts.' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun', why: 'Verb position 2 after front phrase (recycled — Satzposition).', ex: 'Vor den Ferien geben wir …', exEn: 'Before the holidays we give …' },
      { w: 'Geschenke', role: 'r-akkusativ', en: 'gifts', hi: 'उपहार', pron: 'guh-SHENK-uh', type: 'Noun · plural', why: 'das Geschenk → die Geschenke; the thing (accusative).', ex: 'Wir geben Geschenke.', exEn: 'We give gifts.' },
      { w: '.', plain: true },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'gibt', role: 'r-verb', en: 'gives', hi: 'देती है', pron: 'gipt', type: 'Verb · geben (sie)', why: 'geben, er/sie-form (recycled — Unregelmäßige Verben).', ex: 'Anna gibt der Lehrerin Blumen.', exEn: 'Anna gives the teacher flowers.' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article · dative', why: 'die → der in the dative (this chapter).', ex: 'der Lehrerin', exEn: 'to the teacher (f)' },
      { w: 'Lehrerin', role: 'r-object', en: 'teacher (f)', hi: 'अध्यापिका', pron: 'LAY-rer-in', type: 'Noun · fem.', why: 'die Lehrerin → der Lehrerin (receiver) (this chapter).', ex: 'der Lehrerin Blumen geben', exEn: 'give the teacher flowers' },
      { w: 'Blumen', role: 'r-akkusativ', en: 'flowers', hi: 'फूल', pron: 'BLOO-men', type: 'Noun · plural', why: 'die Blumen; the gift (accusative).', ex: 'Blumen geben', exEn: 'give flowers' },
      { w: '.', plain: true },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name' },
      { w: 'hilft', role: 'r-verb', en: 'helps', hi: 'मदद करता है', pron: 'hilft', type: 'Verb · helfen (er)', why: 'helfen takes the DATIVE (this chapter).', ex: 'Rohan hilft dem Studenten.', exEn: 'Rohan helps the student.' },
      { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: 'इस', pron: 'daym', type: 'Article · dative', why: 'der → dem in the dative (this chapter).', ex: 'dem Studenten', exEn: 'to the student' },
      { w: 'Studenten', role: 'r-object', en: 'student', hi: 'छात्र', pron: 'shtu-DEN-ten', type: 'Noun · masc.', why: 'der Student → dem Studenten (this chapter).', ex: 'dem Studenten helfen', exEn: 'help the student' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'und (recycled — Sätze verbinden).', ex: '…, und gibt ihm ein Buch.', exEn: '…, and gives him a book.' },
      { w: 'gibt', role: 'r-verb', en: 'gives', hi: 'देता है', pron: 'gipt', type: 'Verb · geben (er)' },
      { w: 'ihm', role: 'r-dativ', en: 'him', hi: 'उसे', pron: 'eem', type: 'Pronoun · dative', why: 'er → ihm in the dative (this chapter).', ex: 'Er gibt ihm ein Buch.', exEn: 'He gives him a book.' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article · acc.' },
      { w: 'Buch', role: 'r-akkusativ', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.', why: 'das Buch; the gift (accusative) (recycled — Akkusativ).', ex: 'ein Buch geben', exEn: 'give a book' },
      { w: '.', plain: true },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'gibt', role: 'r-verb', en: 'gives', hi: 'देता है', pron: 'gipt', type: 'Verb · geben (er)' },
      { w: 'sich', role: 'r-dativ', en: 'himself', hi: 'खुद को', pron: 'zikh', type: 'Pronoun · dative', why: 'reflexive dative: sich (this chapter).', ex: 'Max gibt sich Kuchen.', exEn: 'Max gives himself cake.' },
      { w: 'nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb', why: 'nur (recycled — Hobbies).', ex: 'nur Kuchen', exEn: 'only cake' },
      { w: 'Kuchen', role: 'r-akkusativ', en: 'cake', hi: 'केक', pron: 'KOO-khen', type: 'Noun · masc.', why: 'der Kuchen; the thing (accusative) (recycled — Essen & Trinken).', ex: 'sich Kuchen geben', exEn: 'give oneself cake' },
      { w: '!', plain: true },
      { w: 'Wem', role: 'r-question', en: 'to whom', hi: 'किसको', pron: 'vaym', type: 'Question word', why: 'wem asks for the dative (this chapter).', ex: 'Wem gibst du etwas?', exEn: 'To whom do you give something?' },
      { w: 'gibst', role: 'r-verb', en: 'give', hi: 'देते हो', pron: 'gipst', type: 'Verb · geben (du)' },
      { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
      { w: 'etwas', role: 'r-akkusativ', en: 'something', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · acc.', why: 'the thing (accusative).', ex: 'etwas geben', exEn: 'give something' },
      { w: '?', plain: true }
    ],
    translation: 'Before the holidays we give gifts. Anna gives the teacher flowers. Rohan helps the student and gives him a book. Max gives only himself cake! To whom do you give something?'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_036_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wem schickst du die Karte, Alina?', en: 'Who are you sending the card to, Alina?' },
      { id: 'A1_036_L002', speaker: 'Alina', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich schicke sie meiner Mutter. Und du?', en: 'I\'m sending it to my mother. And you?' },
      { id: 'A1_036_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich schreibe meinem Bruder und schenke ihm ein Buch.', en: 'I\'m writing to my brother and giving him a book.' },
      { id: 'A1_036_L004', speaker: 'Alina', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Schön! Und was schenkst du dir selbst?', en: 'Nice! And what are you giving yourself?' },
      { id: 'A1_036_L005', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Mir schenke ich einen freien Tag!', en: 'I\'m giving myself a day off!' }
    ],
    transcript: 'Wem schickst du die Karte, Alina? Ich schicke sie meiner Mutter. Und du? Ich schreibe meinem Bruder und schenke ihm ein Buch. Schön! Und was schenkst du dir selbst? Mir schenke ich einen freien Tag!',
    translation: 'Who are you sending the card to, Alina? I\'m sending it to my mother. And you? I\'m writing to my brother and giving him a book. Nice! And what are you giving yourself? I\'m giving myself a day off!',
    tokens: [
      { w: 'Wem' },
      { w: 'schickst' },
      { w: 'du' },
      { w: 'die' },
      { w: 'Karte' },
      { w: ',', plain: true },
      { w: 'Alina' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'schicke' },
      { w: 'sie' },
      { w: 'meiner' },
      { w: 'Mutter' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'du' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'schreibe' },
      { w: 'meinem' },
      { w: 'Bruder' },
      { w: 'und' },
      { w: 'schenke' },
      { w: 'ihm' },
      { w: 'ein' },
      { w: 'Buch' },
      { w: '.', plain: true },
      { w: 'Schön' },
      { w: '!', plain: true },
      { w: 'Und' },
      { w: 'was' },
      { w: 'schenkst' },
      { w: 'du' },
      { w: 'dir' },
      { w: 'selbst' },
      { w: '?', plain: true },
      { w: 'Mir' },
      { w: 'schenke' },
      { w: 'ich' },
      { w: 'einen' },
      { w: 'freien' },
      { w: 'Tag' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Wem schickt Alina die Karte?', qEn: 'Who does Alina send the card to?', options: ['ihrer Mutter', 'ihrem Bruder', 'Timo', 'ihrer Oma'], optionsEn: ['her mother', 'her brother', 'Timo', 'her grandmother'], answer: 0,
        explain: '"Ich schicke sie meiner Mutter."' },
      { q: 'Was schenkt Timo sich selbst?', qEn: 'What does Timo give himself?', options: ['ein Buch', 'einen freien Tag', 'eine Karte', 'Geld'], optionsEn: ['a book', 'a day off', 'a card', 'money'], answer: 1,
        explain: '"Mir schenke ich einen freien Tag!"' }
    ]
  },

  speaking: [
    { task: "Dein Freund fragt: Wem hilfst du heute?", taskEn: "Your friend asks: who are you helping today?", de: "Ich helfe dem Lehrer und der Studentin.", en: "I'm helping the teacher and the student." },
    { task: "Deine Mutter fragt: Wem gibst du das Geschenk?", taskEn: "Your mother asks: who are you giving the present to?", de: "Ich gebe das Geschenk dem Kind.", en: "I'm giving the present to the child." },
    { task: "Deine Lehrerin fragt: Wem schreibst du die Karte?", taskEn: "Your teacher asks: who are you writing the card to?", de: "Ich schreibe der Frau eine Karte.", en: "I'm writing the woman a card." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences with the dative. Use a give-verb with a receiver + thing ("Ich gebe dem Kind einen Apfel"), one dative verb (helfen/danken/gehören), and at least two dative pronouns (mir, dir, ihm, ihr, uns). Shift the articles correctly: der→dem, die→der, das→dem.',
    starters: ['Ich gebe dem … einen …', 'Ich helfe der …', 'Das … gehört mir.', 'Ich danke dir / ihm / ihr.'],
    placeholder: 'Ich gebe dem Mann das Buch …',
    minWords: 20
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Ich helfe ___ Mann." (masc.)',
      options: ['der', 'den', 'dem', 'das'],
      answer: 2,
      explain: 'helfen takes the dative: der → dem.'
    },
    gap: {
      // der→dem (masc) + die→der (fem)
      sentence: ['Ich gebe ', ' Kind einen Apfel und ', ' Frau Blumen.'],
      gaps: [ { answer: 'dem', accepts: ['dem'] }, { answer: 'der', accepts: ['der'] } ],
      explain: 'das Kind → dem Kind; die Frau → der Frau (dative).'
    },
    match: {
      q: 'Match each pronoun to its dative form.',
      pairs: [
        { noun: 'ich', art: 'mir' },
        { noun: 'du', art: 'dir' },
        { noun: 'er', art: 'ihm' },
        { noun: 'sie (she)', art: 'ihr' }
      ]
    },
    builder: {
      target: 'Build: "I give the man the book."',
      bank: ['Ich', 'gebe', 'dem', 'Mann', 'das', 'Buch'],
      answer: ['Ich', 'gebe', 'dem', 'Mann', 'das', 'Buch'],
      roles: { 'Ich': 'r-subject', 'gebe': 'r-verb', 'dem': 'r-dativ', 'Mann': 'r-dativ', 'das': 'r-akkusativ', 'Buch': 'r-akkusativ' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which question word asks for the dative?', options: ['Wer?', 'Wen?', 'Wem?', 'Was?'], answer: 2,
      explain: 'Wem? = to whom? → dative.' },
    { q: 'What does "der" become in the dative (masc.)?', options: ['den', 'dem', 'der', 'des'], answer: 1,
      explain: 'der → dem.' },
    { q: 'Complete: "Das Buch gehört ___." (to me)', options: ['mich', 'mir', 'ich', 'mein'], answer: 1,
      explain: 'gehören takes the dative: ich → mir.' },
    { q: 'What does "die" (feminine) become in the dative?', options: ['dem', 'den', 'der', 'die'], answer: 2,
      explain: 'die → der (feminine dative).' },
    { q: 'Which verb takes the dative?', options: ['sehen', 'helfen', 'kaufen', 'essen'], answer: 1,
      explain: 'helfen takes the dative: "Ich helfe dem Mann."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-dativ', html: 'The dative marks the <strong>receiver</strong> \u2014 ask <span class="de">Wem?</span> (to whom?).' },
    { c: 'r-dativ', html: 'Article shifts: <span class="de">der→dem, die→der, das→dem, die(pl)→den</span>. Pronouns: <span class="de">mir, dir, ihm, ihr, uns, euch, ihnen</span>.' },
    { c: 'r-dativ', html: 'Dative verbs: <span class="de">helfen, danken, gehören</span>. Give-verbs: receiver = dative, thing = accusative.' }
  ],
  revisionTips: [
    'Three questions, three cases: Wer? (nom.), Wen? (acc.), Wem? (dat.).',
    'Drill the article shift until it\u2019s automatic: der→dem, die→der, das→dem.',
    'Memorise the dative verbs (helfen, danken, gehören) — they don\u2019t feel dative in English.'
  ]
};

window.CHAPTER = CHAPTER;
