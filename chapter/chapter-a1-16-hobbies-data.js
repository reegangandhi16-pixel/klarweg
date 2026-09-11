/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 2 · Chapter 16
   "Hobbies & Freizeit"  (Hobbies, free time & preferences)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-16 word list (115 words).
   Recycles Chapters 1–15 throughout.
============================================================ */
const CHAPTER = {
  id: 'a1-16-hobbies',
  phase: 'A1 · Phase 2',
  number: 16,
  title: 'Hobbies & Freizeit',
  titleEn: 'Hobbies & Free Time',
  description: 'Talk about what you do for fun. Learn the hobby and free-time words, the verbs spielen, hören, lesen and gehen, and the three little words that rank everything you like — gern, lieber, am liebsten.',
  xp: 160,
  time: 30,
  difficulty: 'Beginner',
  nextChapter: { number: 17, title: 'Goethe Mini 2', titleEn: 'Goethe Checkpoint 2' , href: 'chapter-a1-17-goethe2.html' },

  heroAnimationPath: null,

  // ---------- Story Dialogue (signature section — before vocab/grammar) ----------
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'It is Friday after class. Elias asks Sara about the weekend, and their hobbies come out — Sara\u2019s tennis, Elias\u2019s photography, and one firm preference for the sofa.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'A real two-person hobby conversation'
    ],
    scene: 'Nach dem Unterricht — Sprachschule, Berlin',
    femaleSpeakers: ['Sara'],
    dialogue: [
      { speaker: 'Elias', tokens: [
        { w: 'Sara', role: 'r-name', en: 'Sara', hi: 'सारा', pron: 'ZA-ra', type: 'Name · person' },
        { w: ',', plain: true },
        { w: 'was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'machst', role: 'r-verb', en: 'are doing', hi: 'करती हो', pron: 'makhst', type: 'Verb · machen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '?', plain: true }
      ], en: 'Sara, what are you doing tomorrow?', hi: 'Sara, kal tum kya kar rahi ho?' },
      { speaker: 'Sara', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'schwimme', role: 'r-verb', en: 'swim', hi: 'तैरती हूँ', pron: 'SHVI-muh', type: 'Verb · schwimmen (ich)', why: 'schwimmen — to swim (this chapter).', ex: 'Ich schwimme gern.', exEn: 'I like swimming.' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'schwimme', role: 'r-verb', en: 'swim', hi: 'तैरती हूँ', pron: 'SHVI-muh', type: 'Verb · schwimmen (ich)' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'पसंद से', pron: 'gairn', type: 'Adverb', why: 'verb + gern = like doing it (Chapter 14).', ex: 'Ich schwimme gern.', exEn: 'I like swimming.' },
        { w: '.', plain: true }
      ], en: 'I\u2019m swimming tomorrow. I always love swimming.', hi: 'Kal main swimming karungi. Mujhe hamesha tairna pasand hai.' },
      { speaker: 'Elias', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction', why: 'Wirklich? = Really? — a natural spoken reaction.', ex: 'Wirklich?', exEn: 'Really?' },
        { w: '?', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'wo', role: 'r-question', en: 'where', hi: 'कहाँ', pron: 'vo', type: 'Question word' },
        { w: 'schwimmst', role: 'r-verb', en: 'do you swim', hi: 'तैरती हो', pron: 'SHVIMST', type: 'Verb · schwimmen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Really? And where do you swim?', hi: 'Sach mein? Aur tum kahaan tairti ho?' },
      { speaker: 'Sara', side: 'right', tokens: [
        { w: 'Im', role: 'r-preposition', en: 'at the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Schwimmbad', role: 'r-place', en: 'swimming pool', hi: 'स्विमिंग पूल', pron: 'SHVIM-baht', type: 'Noun · neut.', why: 'das Schwimmbad (this chapter).', ex: 'im Schwimmbad', exEn: 'at the pool' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: '.', plain: true },
        { w: 'Komm', role: 'r-verb', en: 'come', hi: 'आओ', pron: 'kom', type: 'Verb · imperative', why: 'Komm mit! = Come along! (invitation).', ex: 'Komm mit!', exEn: 'Come along!', lexicalUnit: 'mitkommen' },
        { w: 'doch', role: 'r-adverb', en: 'why not', hi: 'तो', pron: 'dokh', type: 'Particle', why: 'doch softens an invitation — "do come along".', ex: 'Komm doch mit!', exEn: 'Do come along!' },
        { w: 'mit', role: 'r-adverb', en: 'along', hi: 'साथ', pron: 'mit', type: 'Separable prefix', lexicalUnit: 'mitkommen' },
        { w: '!', plain: true }
      ], en: 'At the pool here. Come along!', hi: 'Yahaan pool mein. Tum bhi aa jao!' },
      { speaker: 'Elias', tokens: [
        { w: 'Hmm', role: 'r-adverb', en: 'hmm', hi: 'हम्म', pron: 'hm', type: 'Filler' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'spiele', role: 'r-verb', en: 'play', hi: 'खेलता हूँ', pron: 'SHPEE-luh', type: 'Verb · spielen (ich)' },
        { w: 'lieber', role: 'r-adverb', en: 'rather', hi: 'ज़्यादा पसंद', pron: 'LEE-ber', type: 'Comparative', why: 'gern → lieber = prefer (this chapter).', ex: 'Ich spiele lieber Tennis.', exEn: 'I\u2019d rather play tennis.' },
        { w: 'Tennis', role: 'r-object', en: 'tennis', hi: 'टेनिस', pron: 'TE-nis', type: 'Noun · sport', why: 'Tennis spielen — no article (this chapter).', ex: 'Ich spiele Tennis.', exEn: 'I play tennis.' },
        { w: '.', plain: true },
        { w: 'Was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'kostet', role: 'r-verb', en: 'costs', hi: 'कीमत है', pron: 'KOS-tet', type: 'Verb · kosten' },
        { w: 'der', role: 'r-article', en: 'the (masc.)', hi: 'वह', pron: 'dair', type: 'Article' },
        { w: 'Eintritt', role: 'r-object', en: 'admission', hi: 'प्रवेश शुल्क', pron: 'INE-trit', type: 'Noun · masc.', why: 'der Eintritt — entrance fee (this chapter).', ex: 'Der Eintritt ist frei.', exEn: 'Entry is free.' },
        { w: '?', plain: true }
      ], en: 'Hmm. I\u2019d rather play tennis. What does admission cost?', hi: 'Hmm. Mujhe Tennis khelna zyada pasand hai. Entry kitne ki hai?' },
      { speaker: 'Sara', side: 'right', tokens: [
        { w: 'Nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'drei', role: 'r-object', en: 'three', hi: 'तीन', pron: 'dry', type: 'Number' },
        { w: 'Euro', role: 'r-object', en: 'euros', hi: 'यूरो', pron: 'OY-ro', type: 'Noun · currency' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'macht', role: 'r-verb', en: 'makes', hi: 'देता है', pron: 'makht', type: 'Verb · machen', why: '"Spaß machen" = to be fun (this chapter).', ex: 'Das macht Spaß!', exEn: 'That\u2019s fun!' },
        { w: 'Spaß', role: 'r-object', en: 'fun', hi: 'मज़ा', pron: 'shpahs', type: 'Noun · masc.', why: 'der Spaß (this chapter).', ex: 'Schwimmen macht Spaß.', exEn: 'Swimming is fun.' },
        { w: '.', plain: true }
      ], en: 'Only three euros. And it\u2019s fun.', hi: 'Sirf teen Euro. Aur usmein maza aata hai.' },
      { speaker: 'Elias', tokens: [
        { w: 'Nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'drei', role: 'r-object', en: 'three', hi: 'तीन', pron: 'dry', type: 'Number' },
        { w: 'Euro', role: 'r-object', en: 'euros', hi: 'यूरो', pron: 'OY-ro', type: 'Noun · currency' },
        { w: '?', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klingt', type: 'Verb · klingen', why: 'Das klingt gut = that sounds good — a natural reaction.', ex: 'Das klingt gut.', exEn: 'That sounds good.' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'komme', role: 'r-verb', en: 'come', hi: 'आता हूँ', pron: 'KO-muh', type: 'Verb · kommen (ich)', lexicalUnit: 'mitkommen' },
        { w: 'mit', role: 'r-adverb', en: 'along', hi: 'साथ', pron: 'mit', type: 'Separable prefix', lexicalUnit: 'mitkommen' },
        { w: '.', plain: true }
      ], en: 'Only three euros? That sounds good. I\u2019ll come along.', hi: 'Sirf teen Euro? Yeh achha lagta hai. Main saath aaunga.' },
      { speaker: 'Sara', side: 'right', tokens: [
        { w: 'Cool', role: 'r-adjective', en: 'cool', hi: 'बढ़िया', pron: 'kool', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Bringst', role: 'r-verb', en: 'do you bring', hi: 'लाते हो', pron: 'BRINGST', type: 'Verb · bringen (du)', lexicalUnit: 'mitbringen' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Ball', role: 'r-object', en: 'ball', hi: 'गेंद', pron: 'bal', type: 'Noun · masc.', why: 'der Ball (this chapter).', ex: 'einen Ball bringen', exEn: 'to bring a ball' },
        { w: 'mit', role: 'r-adverb', en: 'along', hi: 'साथ', pron: 'mit', type: 'Separable prefix', lexicalUnit: 'mitbringen' },
        { w: '?', plain: true }
      ], en: 'Cool! Are you bringing a ball along too?', hi: 'Cool! Kya tum ek ball bhi laaoge?' },
      { speaker: 'Elias', tokens: [
        { w: 'Klar', role: 'r-adverb', en: 'sure', hi: 'बिल्कुल', pron: 'klahr', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'spielen', role: 'r-verb', en: 'play', hi: 'खेलते हैं', pron: 'SHPEE-len', type: 'Verb · spielen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Wasser', role: 'r-place', en: 'water', hi: 'पानी', pron: 'VA-ser', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Sure! Then we\u2019ll play in the water.', hi: 'Bilkul! Phir hum paani mein khelenge.' },
      { speaker: 'Sara', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-adjective', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Bis', role: 'r-subject', en: 'until', hi: 'तक', pron: 'bis', type: 'Phrase (part)' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: ',', plain: true },
        { w: 'Elias', role: 'r-name', en: 'Elias', hi: 'एलियास', pron: 'AY-lee-as', type: 'Name · person' },
        { w: '!', plain: true }
      ], en: 'Perfect. See you tomorrow, Elias!', hi: 'Badhiya. Kal milte hain, Elias!' },
      { speaker: 'Elias', tokens: [
        { w: 'Bis', role: 'r-subject', en: 'until', hi: 'तक', pron: 'bis', type: 'Phrase (part)' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '!', plain: true }
      ], en: 'See you tomorrow!', hi: 'Kal milte hain!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Hobbies run on a normal verb plus three ranking words. Say what you do — <span class="de r-verb">Ich spiele Fußball</span>, <span class="de r-verb">Ich höre Musik</span> — then rank it: <span class="de r-adverb">gern</span> (like), <span class="de r-adverb">lieber</span> (prefer), <span class="de r-adverb">am liebsten</span> (favourite).'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is HOBBIES & FREE TIME: naming hobbies, free-time verbs, weekends, and ranking preferences with gern / lieber / am liebsten. ' +
    'The learner wrote sentences about their hobbies below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Preference adverbs rank an activity: gern (like) < lieber (prefer) < am liebsten (like most). They follow the verb: "Ich spiele gern Fußball." / "Ich lese lieber." / "Am liebsten höre ich Musik."\n' +
    '- "am liebsten" at the front pushes the verb to position 2: "Am liebsten tanze ich." (verb before the subject).\n' +
    '- Hobby verbs are mostly regular present tense: ich spiele, du spielst, er spielt; ich höre, ich male, ich tanze. lesen is irregular: ich lese, du liest, er liest. laufen: ich laufe, du läufst, er läuft.\n' +
    '- Sports take no article with spielen: "Ich spiele Fußball / Tennis / Basketball." But "Ich spiele Gitarre" too.\n' +
    '- "spazieren gehen" and "schwimmen gehen": the second verb is the infinitive at the end: "Ich gehe schwimmen."\n' +
    '- "Das macht Spaß" = that is fun. "Was machst du in der Freizeit / am Wochenende?" asks about hobbies.\n' +
    '- All nouns are capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Preference check:</b> one sentence on gern / lieber / am liebsten and word order.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you can talk about hobbies and rank what you like. Move on to Goethe Mini 2.',
    mid: 'Good. Re-read the gern / lieber / am liebsten card once, then continue.',
    low: 'Worth another pass — revisit the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'spiele', role: 'r-verb' },
    { w: 'gern', role: 'r-adverb' }, { w: 'Fußball', role: 'r-object' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole chapter at a glance before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Talk hobbies with Sara and Sara — hear the words and grammar in a real chat first.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn hobbies, sports, indoor and outdoor activities, weekend words, and the preference words.' },
    { id: 'grammar',    label: 'gern · lieber · am liebsten', tag: 'core',
      objective: 'Rank what you like with gern / lieber / am liebsten and use hobby verbs in the present.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a free-time text and tap any word to hear it and see what it means.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch who likes what and what they do at the weekend, then answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say what you like to do, ask about hobbies, and run a short weekend roleplay.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five sentences about your hobbies and a short paragraph about your free time.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill hobby vocabulary, preference words, and verb forms with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All hobby and free-time words with articles, translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '16 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Hobby matching, gern/lieber/am liebsten drills, weekend writing, and self-study activities.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'gern / lieber / am liebsten, hobby verbs in the present, word order, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Hobbies & Sport', text: 'Name common hobbies and sports' },
    { de: 'Ich spiele gern …', text: 'Say what you like to do' },
    { de: 'lieber / am liebsten', text: 'Rank your preferences' },
    { de: 'am Wochenende', text: 'Talk about your weekend' },
    { de: 'Was machst du …?', text: 'Ask about someone\'s hobbies' }
  ],

  // ---------- Vocabulary (115 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'Hobby', art: 'das', gender: 'n', plural: 'Hobbys', pos: 'noun', en: 'hobby', hi: 'शौक', ex: 'Lesen ist mein Hobby.', exEn: 'Reading is my hobby.' },
    { de: 'Sport', art: 'der', gender: 'm', plural: 'Sportarten', pos: 'noun', en: 'sport', hi: 'खेल', ex: 'Sport ist gesund.', exEn: 'Sport is healthy.' },
    { de: 'Freizeit', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'free time', hi: 'खाली समय', ex: 'In der Freizeit lese ich.', exEn: 'In my free time I read.' },
    { de: 'fotografieren', pos: 'verb', en: 'to photograph', hi: 'फोटो खींचना', ex: 'Ich fotografiere gern.', exEn: 'I like taking photos.', conj: { praesens: 'fotografiert', praeteritum: 'fotografierte', perfekt: 'hat fotografiert' } },
    { de: 'Fußball', art: 'der', gender: 'm', plural: 'Fußbälle', pos: 'noun', en: 'football', hi: 'फ़ुटबॉल', ex: 'Ich spiele Fußball.', exEn: 'I play football.' },
    { de: 'joggen', pos: 'verb', en: 'to jog', hi: 'जॉगिंग करना', ex: 'Ich jogge im Park.', exEn: 'I jog in the park.', conj: { praesens: 'joggt', praeteritum: 'joggte', perfekt: 'ist gejoggt' } },
    { de: 'klettern', pos: 'verb', en: 'to climb', hi: 'चढ़ना', ex: 'Wir klettern am Berg.', exEn: 'We climb on the mountain.', conj: { praesens: 'klettert', praeteritum: 'kletterte', perfekt: 'ist geklettert' } },
    { de: 'lieben', pos: 'verb', en: 'to love', hi: 'बहुत पसंद करना', ex: 'Ich liebe Musik.', exEn: 'I love music.', conj: { praesens: 'liebt', praeteritum: 'liebte', perfekt: 'hat geliebt' } },
    { de: 'schwimmen', pos: 'verb', en: 'to swim', hi: 'तैरना', ex: 'Ich gehe schwimmen.', exEn: 'I go swimming.', conj: { praesens: 'schwimmt', praeteritum: 'schwamm', perfekt: 'ist geschwommen' } },
    { de: 'singen', pos: 'verb', en: 'to sing', hi: 'गाना', ex: 'Wir singen ein Lied.', exEn: 'We sing a song.', conj: { praesens: 'singt', praeteritum: 'sang', perfekt: 'hat gesungen' } },
    { de: 'tanzen', pos: 'verb', en: 'to dance', hi: 'नाचना', ex: 'Ich tanze gern.', exEn: 'I like dancing.', conj: { praesens: 'tanzt', praeteritum: 'tanzte', perfekt: 'hat getanzt' } },
    { de: 'Tennis', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'tennis', hi: 'टेनिस', ex: 'Ich spiele Tennis.', exEn: 'I play tennis.' },
    { de: 'wandern', pos: 'verb', en: 'to hike', hi: 'पैदल यात्रा करना', ex: 'Am Sonntag wandere ich.', exEn: 'On Sunday I hike.', conj: { praesens: 'wandert', praeteritum: 'wanderte', perfekt: 'ist gewandert' } },
    // ===== Active Support =====
    { de: 'Basketball', art: 'der', gender: 'm', plural: 'Basketbälle', pos: 'noun', en: 'basketball', hi: 'बास्केटबॉल', ex: 'Wir spielen Basketball.', exEn: 'We play basketball.' },
    { de: 'Angebot', art: 'das', gender: 'n', plural: 'Angebote', pos: 'noun', en: 'offer (cultural)', hi: 'पेशकश', ex: 'Das Kultur-Angebot ist groß.', exEn: 'The cultural offering is big.' },
    { de: 'Event', art: 'das', gender: 'n', plural: 'Events', pos: 'noun', en: 'event', hi: 'आयोजन', ex: 'Das Event ist am Samstag.', exEn: 'The event is on Saturday.' },
    { de: 'Fest', art: 'das', gender: 'n', plural: 'Feste', pos: 'noun', en: 'festival, party', hi: 'उत्सव', ex: 'Das Fest ist im Park.', exEn: 'The party is in the park.' },
    { de: 'Festival', art: 'das', gender: 'n', plural: 'Festivals', pos: 'noun', en: 'festival', hi: 'महोत्सव', ex: 'Es gibt ein Film-Festival.', exEn: 'There is a film festival.' },
    { de: 'Fitness-Studio', art: 'das', gender: 'n', plural: 'Fitness-Studios', pos: 'noun', en: 'gym', hi: 'जिम', ex: 'Ich gehe ins Fitness-Studio.', exEn: 'I go to the gym.' },
    { de: 'Fußballspiel', art: 'das', gender: 'n', plural: 'Fußballspiele', pos: 'noun', en: 'football match', hi: 'फ़ुटबॉल मैच', ex: 'Das Fußballspiel ist heute.', exEn: 'The football match is today.' },
    { de: 'Kino', art: 'das', gender: 'n', plural: 'Kinos', pos: 'noun', en: 'cinema', hi: 'सिनेमा', ex: 'Wir gehen ins Kino.', exEn: 'We go to the cinema.' },
    { de: 'Konzert', art: 'das', gender: 'n', plural: 'Konzerte', pos: 'noun', en: 'concert', hi: 'कॉन्सर्ट', ex: 'Das Konzert ist toll.', exEn: 'The concert is great.' },
    { de: 'Mal', art: 'das', gender: 'n', plural: 'Male', pos: 'noun', en: 'time (occurrence)', hi: 'बार', ex: 'Noch ein Mal, bitte!', exEn: 'One more time, please!' },
    { de: 'Museum', art: 'das', gender: 'n', plural: 'Museen', pos: 'noun', en: 'museum', hi: 'संग्रहालय', ex: 'Das Museum ist offen.', exEn: 'The museum is open.' },
    { de: 'Programm', art: 'das', gender: 'n', plural: 'Programme', pos: 'noun', en: 'programme', hi: 'कार्यक्रम', ex: 'Das Programm ist lang.', exEn: 'The programme is long.' },
    { de: 'Schwimmbad', art: 'das', gender: 'n', plural: 'Schwimmbäder', pos: 'noun', en: 'swimming pool', hi: 'स्विमिंग पूल', ex: 'Wir gehen ins Schwimmbad.', exEn: 'We go to the pool.' },
    { de: 'Skifahren', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'skiing', hi: 'स्कीइंग', ex: 'Skifahren macht Spaß.', exEn: 'Skiing is fun.' },
    { de: 'Spiel', art: 'das', gender: 'n', plural: 'Spiele', pos: 'noun', en: 'game', hi: 'खेल', ex: 'Das Spiel ist spannend.', exEn: 'The game is exciting.' },
    { de: 'Stadion', art: 'das', gender: 'n', plural: 'Stadien', pos: 'noun', en: 'stadium', hi: 'स्टेडियम', ex: 'Das Stadion ist groß.', exEn: 'The stadium is big.' },
    { de: 'Theater', art: 'das', gender: 'n', plural: 'Theater', pos: 'noun', en: 'theatre', hi: 'थिएटर', ex: 'Wir gehen ins Theater.', exEn: 'We go to the theatre.' },
    { de: 'Ticket', art: 'das', gender: 'n', plural: 'Tickets', pos: 'noun', en: 'ticket', hi: 'टिकट', ex: 'Das Ticket kostet zehn Euro.', exEn: 'The ticket costs ten euros.' },
    { de: 'Training', art: 'das', gender: 'n', plural: 'Trainings', pos: 'noun', en: 'practice, training', hi: 'अभ्यास', ex: 'Das Training ist am Montag.', exEn: 'Practice is on Monday.' },
    { de: 'Video', art: 'das', gender: 'n', plural: 'Videos', pos: 'noun', en: 'video', hi: 'वीडियो', ex: 'Ich sehe ein Video.', exEn: 'I watch a video.' },
    { de: 'Ausflug', art: 'der', gender: 'm', plural: 'Ausflüge', pos: 'noun', en: 'excursion, trip', hi: 'सैर', ex: 'Wir machen einen Ausflug.', exEn: 'We go on a trip.' },
    { de: 'Ball', art: 'der', gender: 'm', plural: 'Bälle', pos: 'noun', en: 'ball', hi: 'गेंद', ex: 'Der Ball ist rund.', exEn: 'The ball is round.' },
    { de: 'Eintritt', art: 'der', gender: 'm', plural: 'Eintritte', pos: 'noun', en: 'admission, entry', hi: 'प्रवेश शुल्क', ex: 'Der Eintritt ist frei.', exEn: 'Entry is free.' },
    { de: 'Film', art: 'der', gender: 'm', plural: 'Filme', pos: 'noun', en: 'film', hi: 'फ़िल्म', ex: 'Der Film ist gut.', exEn: 'The film is good.' },
    { de: 'Freund', art: 'der', gender: 'm', plural: 'Freunde', pos: 'noun', en: 'friend (m)', hi: 'दोस्त', ex: 'Mein Freund spielt Fußball.', exEn: 'My friend plays football.' },
    { de: 'Ski', art: 'der', gender: 'm', plural: 'Ski', pos: 'noun', en: 'ski', hi: 'स्की', ex: 'Im Winter fahre ich Ski.', exEn: 'In winter I ski.' },
    { de: 'Spaziergang', art: 'der', gender: 'm', plural: 'Spaziergänge', pos: 'noun', en: 'walk, stroll', hi: 'सैर', ex: 'Ein Spaziergang im Park.', exEn: 'A walk in the park.' },
    { de: 'Spaß', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'fun', hi: 'मज़ा', ex: 'Tanzen macht Spaß.', exEn: 'Dancing is fun.' },
    { de: 'Aktivität', art: 'die', gender: 'f', plural: 'Aktivitäten', pos: 'noun', en: 'activity', hi: 'गतिविधि', ex: 'Welche Aktivität magst du?', exEn: 'Which activity do you like?' },
    { de: 'Freizeitaktivität', art: 'die', gender: 'f', plural: 'Freizeitaktivitäten', pos: 'noun', en: 'leisure activity', hi: 'अवकाश गतिविधि', ex: 'Schwimmen ist eine Freizeitaktivität.', exEn: 'Swimming is a leisure activity.' },
    { de: 'Freundin', art: 'die', gender: 'f', plural: 'Freundinnen', pos: 'noun', en: 'friend (f)', hi: 'सहेली', ex: 'Meine Freundin tanzt gern.', exEn: 'My friend likes dancing.' },
    { de: 'Karte', art: 'die', gender: 'f', plural: 'Karten', pos: 'noun', en: 'ticket, card', hi: 'टिकट', ex: 'Die Karte fürs Konzert ist teuer.', exEn: 'The concert ticket is expensive.' },
    { de: 'Kunst', art: 'die', gender: 'f', plural: 'Künste', pos: 'noun', en: 'art', hi: 'कला', ex: 'Ich liebe Kunst.', exEn: 'I love art.' },
    { de: 'Leute', art: 'die', gender: 'pl', plural: 'Leute', pos: 'noun', en: 'people', hi: 'लोग', ex: 'Viele Leute sind im Park.', exEn: 'Many people are in the park.' },
    { de: 'Musik', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'music', hi: 'संगीत', ex: 'Ich höre gern Musik.', exEn: 'I like listening to music.' },
    { de: 'Veranstaltung', art: 'die', gender: 'f', plural: 'Veranstaltungen', pos: 'noun', en: 'event', hi: 'आयोजन', ex: 'Die Veranstaltung ist heute.', exEn: 'The event is today.' },
    { de: 'feiern', pos: 'verb', en: 'to celebrate', hi: 'जश्न मनाना', ex: 'Wir feiern ein Fest.', exEn: 'We celebrate a party.', conj: { praesens: 'feiert', praeteritum: 'feierte', perfekt: 'hat gefeiert' } },
    { de: 'Karate', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'karate', hi: 'कराटे', ex: 'Ich mache Karate.', exEn: 'I do karate.' },
    { de: 'laufen', pos: 'verb', en: 'to run', hi: 'दौड़ना', ex: 'Ich laufe jeden Tag.', exEn: 'I run every day.', conj: { praesens: 'läuft', praeteritum: 'lief', perfekt: 'ist gelaufen' } },
    { de: 'malen', pos: 'verb', en: 'to paint', hi: 'चित्र बनाना', ex: 'Das Kind malt ein Bild.', exEn: 'The child paints a picture.', conj: { praesens: 'malt', praeteritum: 'malte', perfekt: 'hat gemalt' } },
    { de: 'reisen', pos: 'verb', en: 'to travel', hi: 'यात्रा करना', ex: 'Ich reise gern.', exEn: 'I like travelling.', conj: { praesens: 'reist', praeteritum: 'reiste', perfekt: 'ist gereist' } },
    { de: 'spazieren gehen', pos: 'verb', en: 'to go for a walk', hi: 'टहलने जाना', ex: 'Wir gehen spazieren.', exEn: 'We go for a walk.', conj: { praesens: 'geht spazieren', praeteritum: 'ging spazieren', perfekt: 'ist spazieren gegangen' } },
    { de: 'trainieren', pos: 'verb', en: 'to train', hi: 'प्रशिक्षण करना', ex: 'Ich trainiere im Studio.', exEn: 'I train at the gym.', conj: { praesens: 'trainiert', praeteritum: 'trainierte', perfekt: 'hat trainiert' } },
    { de: 'Yoga', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'yoga', hi: 'योग', ex: 'Ich mache Yoga.', exEn: 'I do yoga.' },
    { de: 'zeigen', pos: 'verb', en: 'to show', hi: 'दिखाना', ex: 'Das Kino zeigt einen Film.', exEn: 'The cinema shows a film.', conj: { praesens: 'zeigt', praeteritum: 'zeigte', perfekt: 'hat gezeigt' } },
    // ===== Passive =====
    { de: 'chillen', pos: 'verb', en: 'to chill, relax', hi: 'आराम करना', ex: 'Ich chille zu Hause.', exEn: 'I chill at home.', conj: { praesens: 'chillt', praeteritum: 'chillte', perfekt: 'hat gechillt' } },
    { de: 'Double Feature', art: 'das', gender: 'n', plural: 'Double Features', pos: 'noun', en: 'double feature', hi: 'डबल फ़ीचर', ex: 'Heute gibt es ein Double Feature.', exEn: 'Today there\'s a double feature.' },
    { de: 'Festspiel', art: 'das', gender: 'n', plural: 'Festspiele', pos: 'noun', en: 'festival production', hi: 'महोत्सव नाटक', ex: 'Die Festspiele sind im Sommer.', exEn: 'The festival is in summer.' },
    { de: 'Jahrestreffen', art: 'das', gender: 'n', plural: 'Jahrestreffen', pos: 'noun', en: 'yearly meeting', hi: 'वार्षिक बैठक', ex: 'Das Jahrestreffen ist im Mai.', exEn: 'The yearly meeting is in May.' },
    { de: 'Karussell', art: 'das', gender: 'n', plural: 'Karussells', pos: 'noun', en: 'carousel', hi: 'झूला', ex: 'Das Karussell dreht sich.', exEn: 'The carousel turns.' },
    { de: 'Kulturfestival', art: 'das', gender: 'n', plural: 'Kulturfestivals', pos: 'noun', en: 'culture festival', hi: 'सांस्कृतिक महोत्सव', ex: 'Das Kulturfestival ist groß.', exEn: 'The culture festival is big.' },
    { de: 'Lied', art: 'das', gender: 'n', plural: 'Lieder', pos: 'noun', en: 'song', hi: 'गीत', ex: 'Das Lied ist schön.', exEn: 'The song is lovely.' },
    { de: 'Open-Air-Kino', art: 'das', gender: 'n', plural: 'Open-Air-Kinos', pos: 'noun', en: 'open-air cinema', hi: 'खुला सिनेमा', ex: 'Im Sommer gibt es Open-Air-Kino.', exEn: 'In summer there\'s open-air cinema.' },
    { de: 'Orchester', art: 'das', gender: 'n', plural: 'Orchester', pos: 'noun', en: 'orchestra', hi: 'वाद्यवृंद', ex: 'Das Orchester spielt.', exEn: 'The orchestra plays.' },
    { de: 'Picknick', art: 'das', gender: 'n', plural: 'Picknicks', pos: 'noun', en: 'picnic', hi: 'पिकनिक', ex: 'Wir machen ein Picknick.', exEn: 'We have a picnic.' },
    { de: 'Publikum', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'audience', hi: 'दर्शक', ex: 'Das Publikum klatscht.', exEn: 'The audience claps.' },
    { de: 'Ratebild', art: 'das', gender: 'n', plural: 'Ratebilder', pos: 'noun', en: 'picture puzzle', hi: 'पहेली चित्र', ex: 'Das Ratebild ist schwer.', exEn: 'The picture puzzle is hard.' },
    { de: 'Requiem', art: 'das', gender: 'n', plural: 'Requiems', pos: 'noun', en: 'requiem', hi: 'श्रद्धांजलि संगीत', ex: 'Das Requiem ist traurig.', exEn: 'The requiem is sad.' },
    { de: 'Saxofon', art: 'das', gender: 'n', plural: 'Saxofone', pos: 'noun', en: 'saxophone', hi: 'सैक्सोफ़ोन', ex: 'Er spielt Saxofon.', exEn: 'He plays the saxophone.' },
    { de: 'Sommerfest', art: 'das', gender: 'n', plural: 'Sommerfeste', pos: 'noun', en: 'summer party', hi: 'गर्मी का उत्सव', ex: 'Das Sommerfest ist im Juli.', exEn: 'The summer party is in July.' },
    { de: 'Theater-Festival', art: 'das', gender: 'n', plural: 'Theater-Festivals', pos: 'noun', en: 'theatre festival', hi: 'रंगमंच महोत्सव', ex: 'Das Theater-Festival beginnt heute.', exEn: 'The theatre festival starts today.' },
    { de: 'Beginn', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'beginning, start', hi: 'शुरुआत', ex: 'Der Beginn ist um acht.', exEn: 'The start is at eight.' },
    { de: 'Chor', art: 'der', gender: 'm', plural: 'Chöre', pos: 'noun', en: 'choir', hi: 'गायक मंडली', ex: 'Ich singe im Chor.', exEn: 'I sing in the choir.' },
    { de: 'Club', art: 'der', gender: 'm', plural: 'Clubs', pos: 'noun', en: 'club', hi: 'क्लब', ex: 'Der Club ist neu.', exEn: 'The club is new.' },
    { de: 'Comic', art: 'der', gender: 'm', plural: 'Comics', pos: 'noun', en: 'comic', hi: 'कॉमिक', ex: 'Ich lese gern Comics.', exEn: 'I like reading comics.' },
    { de: 'Filmfan', art: 'der', gender: 'm', plural: 'Filmfans', pos: 'noun', en: 'film fan', hi: 'फ़िल्म प्रेमी', ex: 'Max ist ein Filmfan.', exEn: 'Max is a film fan.' },
    { de: 'Geigenunterricht', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'violin lessons', hi: 'वायलिन की कक्षा', ex: 'Sie hat Geigenunterricht.', exEn: 'She has violin lessons.' },
    { de: 'Halbmarathon', art: 'der', gender: 'm', plural: 'Halbmarathons', pos: 'noun', en: 'half marathon', hi: 'हाफ़ मैराथन', ex: 'Er läuft einen Halbmarathon.', exEn: 'He runs a half marathon.' },
    { de: 'Kommentar', art: 'der', gender: 'm', plural: 'Kommentare', pos: 'noun', en: 'comment', hi: 'टिप्पणी', ex: 'Der Kommentar ist nett.', exEn: 'The comment is nice.' },
    { de: 'Konzertbeginn', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'concert start', hi: 'कॉन्सर्ट की शुरुआत', ex: 'Der Konzertbeginn ist um neun.', exEn: 'The concert starts at nine.' },
    { de: 'Marathon', art: 'der', gender: 'm', plural: 'Marathons', pos: 'noun', en: 'marathon', hi: 'मैराथन', ex: 'Sie läuft einen Marathon.', exEn: 'She runs a marathon.' },
    { de: 'Moment', art: 'der', gender: 'm', plural: 'Momente', pos: 'noun', en: 'moment', hi: 'पल', ex: 'Einen Moment, bitte!', exEn: 'One moment, please!' },
    { de: 'Solist', art: 'der', gender: 'm', plural: 'Solisten', pos: 'noun', en: 'soloist (m)', hi: 'एकल कलाकार', ex: 'Der Solist singt schön.', exEn: 'The soloist sings beautifully.' },
    { de: 'Sportclub', art: 'der', gender: 'm', plural: 'Sportclubs', pos: 'noun', en: 'sports club', hi: 'खेल क्लब', ex: 'Ich bin im Sportclub.', exEn: 'I\'m in the sports club.' },
    { de: 'Star', art: 'der', gender: 'm', plural: 'Stars', pos: 'noun', en: 'star', hi: 'सितारा', ex: 'Der Star kommt heute.', exEn: 'The star is coming today.' },
    { de: 'Tennisplatz', art: 'der', gender: 'm', plural: 'Tennisplätze', pos: 'noun', en: 'tennis court', hi: 'टेनिस कोर्ट', ex: 'Der Tennisplatz ist frei.', exEn: 'The tennis court is free.' },
    { de: 'Trompetenunterricht', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'trumpet lessons', hi: 'तुरही की कक्षा', ex: 'Er hat Trompetenunterricht.', exEn: 'He has trumpet lessons.' },
    { de: 'Zuschauer', art: 'der', gender: 'm', plural: 'Zuschauer', pos: 'noun', en: 'spectator (m)', hi: 'दर्शक', ex: 'Der Zuschauer klatscht.', exEn: 'The spectator claps.' },
    { de: 'Bühne', art: 'die', gender: 'f', plural: 'Bühnen', pos: 'noun', en: 'stage', hi: 'मंच', ex: 'Die Band ist auf der Bühne.', exEn: 'The band is on the stage.' },
    { de: 'Fahrradtour', art: 'die', gender: 'f', plural: 'Fahrradtouren', pos: 'noun', en: 'bike ride', hi: 'साइकिल यात्रा', ex: 'Wir machen eine Fahrradtour.', exEn: 'We go on a bike ride.' },
    { de: 'Geige', art: 'die', gender: 'f', plural: 'Geigen', pos: 'noun', en: 'violin', hi: 'वायलिन', ex: 'Sie spielt Geige.', exEn: 'She plays the violin.' },
    { de: 'Grillparty', art: 'die', gender: 'f', plural: 'Grillpartys', pos: 'noun', en: 'barbecue', hi: 'बारबेक्यू पार्टी', ex: 'Die Grillparty ist im Garten.', exEn: 'The barbecue is in the garden.' },
    { de: 'Konzertkarte', art: 'die', gender: 'f', plural: 'Konzertkarten', pos: 'noun', en: 'concert ticket', hi: 'कॉन्सर्ट टिकट', ex: 'Die Konzertkarte ist teuer.', exEn: 'The concert ticket is expensive.' },
    { de: 'Kultur-Nacht', art: 'die', gender: 'f', plural: 'Kultur-Nächte', pos: 'noun', en: 'cultural night', hi: 'सांस्कृतिक रात', ex: 'Die Kultur-Nacht ist am Freitag.', exEn: 'The cultural night is on Friday.' },
    { de: 'Museumsnacht', art: 'die', gender: 'f', plural: 'Museumsnächte', pos: 'noun', en: 'museum night', hi: 'संग्रहालय रात', ex: 'Die Museumsnacht ist beliebt.', exEn: 'The museum night is popular.' },
    { de: 'Musikgruppe', art: 'die', gender: 'f', plural: 'Musikgruppen', pos: 'noun', en: 'music group', hi: 'संगीत समूह', ex: 'Die Musikgruppe ist neu.', exEn: 'The music group is new.' },
    { de: 'Musikschule', art: 'die', gender: 'f', plural: 'Musikschulen', pos: 'noun', en: 'music school', hi: 'संगीत विद्यालय', ex: 'Ich gehe zur Musikschule.', exEn: 'I go to music school.' },
    { de: 'Oper', art: 'die', gender: 'f', plural: 'Opern', pos: 'noun', en: 'opera', hi: 'ओपेरा', ex: 'Die Oper ist lang.', exEn: 'The opera is long.' },
    { de: 'Pantomime', art: 'die', gender: 'f', plural: 'Pantomimen', pos: 'noun', en: 'pantomime, mime', hi: 'मूकाभिनय', ex: 'Die Pantomime ist lustig.', exEn: 'The mime is funny.' },
    { de: 'Produktion', art: 'die', gender: 'f', plural: 'Produktionen', pos: 'noun', en: 'production', hi: 'प्रस्तुति', ex: 'Die Produktion ist gut.', exEn: 'The production is good.' },
    { de: 'Sensation', art: 'die', gender: 'f', plural: 'Sensationen', pos: 'noun', en: 'sensation', hi: 'सनसनी', ex: 'Das Konzert ist eine Sensation.', exEn: 'The concert is a sensation.' },
    { de: 'Solistin', art: 'die', gender: 'f', plural: 'Solistinnen', pos: 'noun', en: 'soloist (f)', hi: 'एकल कलाकार', ex: 'Die Solistin spielt Geige.', exEn: 'The soloist plays the violin.' },
    { de: 'Trompete', art: 'die', gender: 'f', plural: 'Trompeten', pos: 'noun', en: 'trumpet', hi: 'तुरही', ex: 'Er spielt Trompete.', exEn: 'He plays the trumpet.' },
    { de: 'Zuschauerin', art: 'die', gender: 'f', plural: 'Zuschauerinnen', pos: 'noun', en: 'spectator (f)', hi: 'दर्शक', ex: 'Die Zuschauerin lacht.', exEn: 'The spectator laughs.' },
    { de: 'dirigieren', pos: 'verb', en: 'to conduct', hi: 'संचालन करना', ex: 'Sie dirigiert das Orchester.', exEn: 'She conducts the orchestra.', conj: { praesens: 'dirigiert', praeteritum: 'dirigierte', perfekt: 'hat dirigiert' } },
    { de: 'Extra-', pos: 'prefix', en: 'extra-', hi: 'अतिरिक्त', ex: 'Es gibt ein Extra-Programm.', exEn: 'There\'s an extra programme.' },
    { de: 'genießen', pos: 'verb', en: 'to enjoy, savour', hi: 'आनंद लेना', ex: 'Ich genieße die Musik.', exEn: 'I enjoy the music.', conj: { praesens: 'genießt', praeteritum: 'genoss', perfekt: 'hat genossen' } },
    { de: 'glauben', pos: 'verb', en: 'to believe, think', hi: 'मानना', ex: 'Ich glaube, das ist toll.', exEn: 'I think that\'s great.', conj: { praesens: 'glaubt', praeteritum: 'glaubte', perfekt: 'hat geglaubt' } },
    { de: 'grillen', pos: 'verb', en: 'to barbecue', hi: 'बारबेक्यू करना', ex: 'Wir grillen im Garten.', exEn: 'We barbecue in the garden.', conj: { praesens: 'grillt', praeteritum: 'grillte', perfekt: 'hat gegrillt' } },
    { de: 'rund um', pos: 'phrase', en: 'all about, around', hi: 'के बारे में', ex: 'Ein Programm rund um Musik.', exEn: 'A programme all about music.' },
    { de: 'segeln', pos: 'verb', en: 'to sail', hi: 'नौकायन करना', ex: 'Im Sommer segeln wir.', exEn: 'In summer we sail.', conj: { praesens: 'segelt', praeteritum: 'segelte', perfekt: 'ist gesegelt' } },
    { de: 'Zumba', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'zumba', hi: 'ज़ुम्बा', ex: 'Ich mache Zumba.', exEn: 'I do zumba.' }
  ],

  // ---------- gern · lieber · am liebsten (rule cards → accordion) ----------
  grammar: [
    {
      title: 'gern — saying what you like',
      goldenRule: 'No new verb needed — normal present tense + <b>gern</b> right after the verb.',
      memoryTrick: 'Pasand batane ke liye sirf ek shabd: verb ke baad <b>gern</b>. Napasand? <b>nicht gern</b>.',
      body: [
        'To say you like an activity, just add <span class="de r-adverb">gern</span> after the verb. No new verb needed — the normal present tense plus gern does it all.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Ich spiele gern Fußball.</span>', 'I like playing football.'],
          ['<span class="de">Ich höre gern Musik.</span>', 'I like listening to music.'],
          ['<span class="de">Ich tanze gern.</span>', 'I like dancing.'],
          ['<span class="de">Ich lese nicht gern.</span>', 'I don\u2019t like reading.']
        ]
      },
      note: '<b>gern</b> comes right after the verb. To say you dislike something, use <b>nicht gern</b>: "Ich koche nicht gern." Sports take no article: "Ich spiele Tennis."',
      hinglish: 'Pasand batane ke liye verb ke baad <b>gern</b> lagao — naya verb nahi chahiye: <b>Ich spiele gern Fußball</b> (mujhe football khelna pasand hai). Napasand? <b>nicht gern</b>: Ich lese nicht gern. Sports ke saath article nahi: Ich spiele Tennis.'
    },
    {
      title: 'lieber & am liebsten — ranking what you like',
      goldenRule: 'One ladder: <b>gern → lieber → am liebsten</b>.',
      formula: [
        'gern          =  I like it',
        'lieber        =  I prefer it',
        'am liebsten   =  I like it most'
      ],
      memoryTrick: 'Teen step: <b>gern</b> (pasand) → <b>lieber</b> (zyada) → <b>am liebsten</b> (sabse zyada). Aur <b>am liebsten</b> sentence ke shuru mein aaye to verb subject se pehle.',
      recap: [
        '<b>gern</b> after the verb = you like doing it.',
        '<b>lieber</b> = prefer; <b>am liebsten</b> = like most.',
        'Front <b>am liebsten</b> and the verb comes before the subject.'
      ],
      body: [
        'Three words form a ladder: <span class="de r-adverb">gern</span> (like) → <span class="de r-adverb">lieber</span> (prefer) → <span class="de r-adverb">am liebsten</span> (like most). They let you compare and pick a favourite.'
      ],
      table: {
        head: ['Level', 'Example', 'Meaning'],
        rows: [
          ['gern', '<span class="de">Ich spiele gern Tennis.</span>', 'I like tennis.'],
          ['lieber', '<span class="de">Ich spiele lieber Fußball.</span>', 'I prefer football.'],
          ['am liebsten', '<span class="de">Am liebsten schwimme ich.</span>', 'Most of all, I swim.'],
          ['question', '<span class="de">Was machst du am liebsten?</span>', 'What do you like most?']
        ]
      },
      note: 'It\u2019s the comparison ladder: <b>gern → lieber → am liebsten</b>. Start a sentence with <b>am liebsten</b> and the verb jumps in front of the subject: "Am liebsten <u>höre</u> ich Musik."',
      hinglish: 'Teen shabdon ki seedhi: <b>gern</b> (pasand) → <b>lieber</b> (zyada pasand) → <b>am liebsten</b> (sabse pasand). <b>Am liebsten</b> se sentence shuru karo to verb subject se pehle aata hai: "Am liebsten <u>höre</u> ich Musik."'
    },
    {
      title: 'Hobby verbs in the present',
      goldenRule: 'Most hobby verbs are regular. Only <b>lesen</b> and <b>laufen</b> change their vowel in du/er.',
      memoryTrick: 'Do hi badalte hain: <b>lesen</b> → du liest, <b>laufen</b> → du läufst. Baaki sab seedhe stem + ending.',
      body: [
        'Most hobby verbs are regular: take the stem and add the ending. A few — <span class="de r-verb">lesen</span> and <span class="de r-verb">laufen</span> — change their vowel in du/er.'
      ],
      table: {
        head: ['', 'spielen (reg.)', 'lesen (irreg.)', 'laufen (irreg.)'],
        rows: [
          ['ich', '<span class="de r-verb">spiele</span>', '<span class="de r-verb">lese</span>', '<span class="de r-verb">laufe</span>'],
          ['du', '<span class="de r-verb">spielst</span>', '<span class="de r-verb">liest</span>', '<span class="de r-verb">läufst</span>'],
          ['er/sie/es', '<span class="de r-verb">spielt</span>', '<span class="de r-verb">liest</span>', '<span class="de r-verb">läuft</span>'],
          ['wir / sie / Sie', '<span class="de r-verb">spielen</span>', '<span class="de r-verb">lesen</span>', '<span class="de r-verb">laufen</span>']
        ]
      },
      note: 'Regular: spielen, hören, tanzen, malen, joggen. Vowel-changers: <b>lesen</b> (du liest) and <b>laufen</b> (du läufst, er läuft). "spazieren gehen" splits: "Ich gehe spazieren."',
      hinglish: 'Zyadatar hobby verbs regular hain: stem + ending (spielen, hören, tanzen, malen). Do badalte hain: <b>lesen</b> (du liest) aur <b>laufen</b> (du läufst, er läuft). "spazieren gehen" alag hota hai: "Ich gehe spazieren."'
    },
    {
      title: 'Asking about hobbies',
      body: [
        'Two questions open any hobby conversation — one about free time in general, one about the weekend. Both use <span class="de r-question">Was</span> + <span class="de r-verb">machen</span>.'
      ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['<span class="de">Was machst du in der Freizeit?</span>', 'Ich spiele gern Gitarre.'],
          ['<span class="de">Was machst du am Wochenende?</span>', 'Am Samstag gehe ich schwimmen.'],
          ['<span class="de">Was ist dein Hobby?</span>', 'Mein Hobby ist Fotografie.'],
          ['<span class="de">Spielst du gern Fußball?</span>', 'Ja, sehr gern! / Nein, nicht so gern.']
        ]
      },
      note: 'Use <b>in der Freizeit</b> (in your free time) and <b>am Wochenende</b> (at the weekend). Answer with <b>gern</b> and your activity. "Macht das Spaß?" — "Ja, das macht Spaß!"',
      hinglish: 'Do sawaal: <b>Was machst du in der Freizeit?</b> (khaali time mein kya karte ho?) aur <b>Was machst du am Wochenende?</b> (weekend pe?). Jawab <b>gern</b> + activity se do. "Macht das Spaß?" → "Ja, das macht Spaß!"'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four hobby habits to fix early.' ],
      mistakes: [
        { wrong: 'Ich mag spielen Fußball.', right: 'Ich spiele gern Fußball.', why: 'Don\u2019t translate "I like to play". Use the verb + gern: spiele gern.' },
        { wrong: 'Ich spiele den Fußball.', right: 'Ich spiele Fußball.', why: 'Sports take no article with spielen.' },
        { wrong: 'Am liebsten ich höre Musik.', right: 'Am liebsten höre ich Musik.', why: 'After a front phrase the verb is position 2 — before the subject.' },
        { wrong: 'Ich gehe schwimmen am Samstag nicht gern.', right: 'Ich gehe nicht gern schwimmen.', why: 'nicht gern stays together, right after the verb.' }
      ],
      hinglish: 'Char galtiyan common hain. \u201cI like to play\u201d ka seedha translation kaam nahi karta \u2014 German mein verb ke baad <b>gern</b> lagta hai: <b>spiele gern</b>. Sports ke saath article nahi aata: <b>Ich spiele Fu\u00dfball</b>. Agar koi phrase aage aata hai to verb position 2 par hi rehta hai: <b>Am liebsten h\u00f6re ich Musik</b>. Aur <b>nicht gern</b> saath-saath rehta hai, verb ke turant baad.'
    }
  ],

  // ---------- Reading passage (free time, clickable) ----------
  reading: {
    title: 'Meine Freizeit',
    titleEn: 'My free time',
    tokens: [
      { w: 'In', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
      { w: 'der', role: 'r-article', en: 'the (fem. dat.)', hi: 'अपने', pron: 'dair', type: 'Article' },
      { w: 'Freizeit', role: 'r-object', en: 'free time', hi: 'खाली समय', pron: 'FRY-tsyt', type: 'Noun · fem.', why: 'die Freizeit (this chapter).', ex: 'In der Freizeit lese ich.', exEn: 'In my free time I read.' },
      { w: 'spiele', role: 'r-verb', en: 'play', hi: 'खेलता हूँ', pron: 'SHPEE-luh', type: 'Verb · spielen (ich)', why: 'After a front phrase, verb is position 2.', ex: 'Ich spiele Tennis.', exEn: 'I play tennis.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Subject after the verb.', ex: 'spiele ich', exEn: 'I play' },
      { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'पसंद से', pron: 'gairn', type: 'Adverb', why: 'verb + gern = like doing it (this chapter).', ex: 'Ich spiele gern.', exEn: 'I like playing.' },
      { w: 'Fußball', role: 'r-object', en: 'football', hi: 'फ़ुटबॉल', pron: 'FOOS-bal', type: 'Noun · sport', why: 'no article with spielen (this chapter).', ex: 'Ich spiele Fußball.', exEn: 'I play football.' },
      { w: '.', plain: true },
      { w: 'Meine', role: 'r-article', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
      { w: 'Freundin', role: 'r-subject', en: 'friend (f)', hi: 'सहेली', pron: 'FROYN-din', type: 'Noun · fem.', why: 'die Freundin (this chapter).', ex: 'Meine Freundin tanzt.', exEn: 'My friend dances.' },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'tanzt', role: 'r-verb', en: 'dances', hi: 'नाचती है', pron: 'tantst', type: 'Verb · tanzen (sie)', why: 'tanzen, er/sie-form (this chapter).', ex: 'Sie tanzt gern.', exEn: 'She likes dancing.' },
      { w: 'lieber', role: 'r-adverb', en: 'prefers', hi: 'ज़्यादा पसंद', pron: 'LEE-ber', type: 'Comparative', why: 'lieber = prefer (this chapter).', ex: 'Sie tanzt lieber.', exEn: 'She prefers dancing.' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'on', hi: 'को', pron: 'am', type: 'Preposition + time', why: 'am Wochenende = at the weekend.', ex: 'am Wochenende', exEn: 'at the weekend' },
      { w: 'Wochenende', role: 'r-time', en: 'weekend', hi: 'सप्ताहांत', pron: 'VO-khen-en-duh', type: 'Noun · time', why: 'das Wochenende.', ex: 'Am Wochenende schwimme ich.', exEn: 'At the weekend I swim.' },
      { w: 'gehen', role: 'r-verb', en: 'go', hi: 'जाते हैं', pron: 'GAY-en', type: 'Verb · gehen (wir)', why: 'gehen, wir-form (Chapter 9).', ex: 'Wir gehen ins Kino.', exEn: 'We go to the cinema.' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'ins', role: 'r-preposition', en: 'to the', hi: 'के अंदर', pron: 'ins', type: 'Preposition + place', why: 'in + das → ins Kino.', ex: 'ins Kino', exEn: 'to the cinema' },
      { w: 'Kino', role: 'r-place', en: 'cinema', hi: 'सिनेमा', pron: 'KEE-no', type: 'Noun · place', why: 'das Kino (this chapter).', ex: 'Wir gehen ins Kino.', exEn: 'We go to the cinema.' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-article', en: 'the (masc.)', hi: 'वह', pron: 'dair', type: 'Article' },
      { w: 'Film', role: 'r-subject', en: 'film', hi: 'फ़िल्म', pron: 'film', type: 'Noun · masc.', why: 'der Film (this chapter).', ex: 'Der Film ist gut.', exEn: 'The film is good.' },
      { w: 'macht', role: 'r-verb', en: 'makes', hi: 'देता है', pron: 'makht', type: 'Verb · machen', why: '"macht Spaß" = is fun (this chapter).', ex: 'Das macht Spaß.', exEn: 'That is fun.' },
      { w: 'Spaß', role: 'r-object', en: 'fun', hi: 'मज़ा', pron: 'shpahs', type: 'Noun · masc.', why: 'der Spaß (this chapter).', ex: 'Kino macht Spaß.', exEn: 'Cinema is fun.' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-adverb', en: 'most (of all)', hi: 'सबसे ज़्यादा', pron: 'am', type: 'Superlative', why: 'am liebsten = favourite (this chapter).', ex: 'Am liebsten fotografiere ich.', exEn: 'Most of all I take photos.' },
      { w: 'liebsten', role: 'r-adverb', en: 'favourite (to)', hi: 'सबसे पसंद', pron: 'LEEP-sten', type: 'Superlative', why: 'gern → lieber → am liebsten.', ex: 'Am liebsten lese ich.', exEn: 'Most of all I read.' },
      { w: 'fotografiere', role: 'r-verb', en: 'photograph', hi: 'फोटो खींचता हूँ', pron: 'fo-to-gra-FEE-ruh', type: 'Verb · fotografieren (ich)', why: 'fotografieren (this chapter).', ex: 'Ich fotografiere gern.', exEn: 'I like taking photos.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Verb before ich (position-2 rule).', ex: 'fotografiere ich', exEn: 'I photograph' },
      { w: '.', plain: true },
      { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'mein', role: 'r-article', en: 'my (neut.)', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
      { w: 'Hobby', role: 'r-object', en: 'hobby', hi: 'शौक', pron: 'HO-bee', type: 'Noun · neut.', why: 'das Hobby (this chapter).', ex: 'Das ist mein Hobby.', exEn: 'That is my hobby.' },
      { w: '!', plain: true }
    ],
    translation: 'In my free time I like playing football. My friend Anna prefers dancing. At the weekend we go to the cinema. The film is fun. Most of all I love photography. That is my hobby!'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_016_L001', speaker: 'Elias', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Sara, hast du Lust, am Samstag zu malen?', en: 'Sara, do you feel like painting on Saturday?' },
      { id: 'A1_016_L002', speaker: 'Sara', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Malen? Das mache ich nicht so gern. Ich lese lieber ein Buch.', en: 'Painting? I don\'t really like that. I\'d rather read a book.' },
      { id: 'A1_016_L003', speaker: 'Elias', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Okay, und am Sonntag?', en: 'Okay, and on Sunday?' },
      { id: 'A1_016_L004', speaker: 'Sara', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Da spiele ich Volleyball mit Freunden.', en: 'Then I play volleyball with friends.' },
      { id: 'A1_016_L005', speaker: 'Elias', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Klingt gut! Viel Spaß!', en: 'Sounds good! Have fun!' }
    ],
    transcript: 'Sara, hast du Lust, am Samstag zu malen? Malen? Das mache ich nicht so gern. Ich lese lieber ein Buch. Okay, und am Sonntag? Da spiele ich Volleyball mit Freunden. Klingt gut! Viel Spaß!',
    translation: 'Sara, do you feel like painting on Saturday? Painting? I don\'t really like that. I\'d rather read a book. Okay, and on Sunday? Then I play volleyball with friends. Sounds good! Have fun!',
    tokens: [
      { w: 'Sara' },
      { w: ',', plain: true },
      { w: 'hast' },
      { w: 'du' },
      { w: 'Lust' },
      { w: ',', plain: true },
      { w: 'am' },
      { w: 'Samstag' },
      { w: 'zu' },
      { w: 'malen' },
      { w: '?', plain: true },
      { w: 'Malen' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'mache' },
      { w: 'ich' },
      { w: 'nicht' },
      { w: 'so' },
      { w: 'gern' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'lese' },
      { w: 'lieber' },
      { w: 'ein' },
      { w: 'Buch' },
      { w: '.', plain: true },
      { w: 'Okay' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'am' },
      { w: 'Sonntag' },
      { w: '?', plain: true },
      { w: 'Da' },
      { w: 'spiele' },
      { w: 'ich' },
      { w: 'Volleyball' },
      { w: 'mit' },
      { w: 'Freunden' },
      { w: '.', plain: true },
      { w: 'Klingt' },
      { w: 'gut' },
      { w: '!', plain: true },
      { w: 'Viel' },
      { w: 'Spaß' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was macht Sara lieber als malen?', qEn: 'What does Sara prefer to do instead of painting?', options: ['schwimmen', 'ein Buch lesen', 'fotografieren', 'tanzen'], optionsEn: ['swim', 'read a book', 'take photos', 'dance'], answer: 1,
        explain: '"Ich lese lieber ein Buch."' },
      { q: 'Was macht Sara am Sonntag?', qEn: 'What does Sara do on Sunday?', options: ['malen', 'Volleyball spielen', 'lesen', 'schlafen'], optionsEn: ['paint', 'play volleyball', 'read', 'sleep'], answer: 1,
        explain: '"Da spiele ich Volleyball mit Freunden."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin fragt: Hast du Lust, am Samstag zu malen?", taskEn: "Your friend asks: do you fancy painting on Saturday?", de: "Malen mache ich nicht so gern. Ich lese lieber ein Buch.", en: "I don't really like painting. I'd rather read a book." },
    { task: "Dein Partner fragt: Was machst du in der Freizeit?", taskEn: "Your partner asks: what do you do in your free time?", de: "Ich spiele Fußball und ich schwimme gern.", en: "I play football and I like swimming." },
    { task: "Dein Freund fragt: Was machst du am Sonntag?", taskEn: "Your friend asks: what are you doing on Sunday?", de: "Am Sonntag spiele ich Tennis mit Freunden.", en: "On Sunday I'm playing tennis with friends." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about your hobbies and free time: say what you like (gern), what you prefer (lieber), and your favourite (am liebsten), and what you do at the weekend (am Wochenende). Use hobby verbs in the present.',
    starters: ['In der Freizeit spiele ich gern …', 'Ich tanze lieber …', 'Am liebsten … ich …', 'Am Wochenende …'],
    placeholder: 'In der Freizeit höre ich gern Musik …',
    minWords: 18
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which means "Most of all, I like swimming"?',
      options: ['Ich schwimme gern.', 'Ich schwimme lieber.', 'Am liebsten schwimme ich.', 'Ich schwimme nicht gern.'],
      answer: 2,
      explain: 'am liebsten = like most; the verb comes before ich.'
    },
    gap: {
      // gern → lieber → am liebsten ladder.
      sentence: ['Ich spiele ', ' Tennis, aber ', ' spiele ich Fußball.'],
      gaps: [ { answer: 'gern', accepts: ['gern','gerne'] }, { answer: 'lieber', accepts: ['lieber'] } ],
      explain: 'gern (like) → lieber (prefer).'
    },
    match: {
      q: 'Match each hobby word to its English.',
      pairs: [
        { noun: 'schwimmen', art: 'to swim' },
        { noun: 'Musik', art: 'music' },
        { noun: 'Freizeit', art: 'free time' },
        { noun: 'Spaß', art: 'fun' }
      ]
    },
    builder: {
      target: 'Build: "I like playing football."',
      bank: ['Ich', 'spiele', 'gern', 'Fußball'],
      answer: ['Ich', 'spiele', 'gern', 'Fußball'],
      roles: { 'Ich': 'r-subject', 'spiele': 'r-verb', 'gern': 'r-adverb', 'Fußball': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'How do you say "I like dancing"?', options: ['Ich tanze.', 'Ich tanze gern.', 'Ich mag tanzen gern.', 'Ich bin tanzen.'], answer: 1,
      explain: 'verb + gern: "Ich tanze gern."' },
    { q: 'Order the preference ladder (low → high):', options: ['lieber, gern, am liebsten', 'gern, lieber, am liebsten', 'am liebsten, gern, lieber', 'gern, am liebsten, lieber'], answer: 1,
      explain: 'gern → lieber → am liebsten.' },
    { q: 'Complete: "Am liebsten ___ ich Musik."', options: ['ich höre', 'höre', 'hören', 'gehört'], answer: 1,
      explain: 'After a front phrase the verb is position 2: "Am liebsten höre ich …"' },
    { q: 'Which is correct?', options: ['Ich spiele den Fußball.', 'Ich spiele Fußball.', 'Ich spiele ein Fußball.', 'Ich spiele die Fußball.'], answer: 1,
      explain: 'Sports take no article with spielen.' },
    { q: '"Was machst du in der Freizeit?" asks about…', options: ['your job', 'your hobbies', 'your family', 'your food'], answer: 1,
      explain: 'die Freizeit = free time → it asks about hobbies.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'Say hobbies with a normal verb: <span class="de">Ich spiele Fußball</span>, <span class="de">Ich höre Musik</span>, <span class="de">Ich gehe schwimmen</span>.' },
    { c: 'r-adverb', html: 'Rank them: <span class="de">gern</span> (like) → <span class="de">lieber</span> (prefer) → <span class="de">am liebsten</span> (favourite).' },
    { c: 'r-time', html: 'Ask & answer: <span class="de">Was machst du am Wochenende?</span> — <span class="de">Am Samstag gehe ich schwimmen.</span> Verb stays position 2.' }
  ],
  revisionTips: [
    'Name three hobbies out loud each day and rank them with gern / lieber / am liebsten.',
    'Remember sports take no article: "Ich spiele Fußball / Tennis / Basketball."',
    'Front a time phrase and flip the verb: "Am Wochenende gehe ich schwimmen."'
  ]
};

window.CHAPTER = CHAPTER;
