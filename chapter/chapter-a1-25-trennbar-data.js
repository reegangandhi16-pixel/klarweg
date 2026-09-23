/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 3 · Chapter 25
   "Trennbare Verben"  (Separable verbs)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-25 word list (31 words).
   Recycles Chapters 1–24 throughout. Theme = morning + shopping.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-25-trennbar',
  phase: 'A1 · Phase 3',
  number: 25,
  title: 'Trennbare Verben',
  titleEn: 'Separable Verbs',
  description: 'Some German verbs split in two. Meet the separable verbs — aufstehen, anrufen, einkaufen, mitkommen — and the one rule that runs them all: in a normal sentence the prefix breaks off and flies to the very end.',
  xp: 160,
  time: 35,
  difficulty: 'Beginner',
  nextChapter: { number: 26, title: 'Goethe Mini 3', titleEn: 'Goethe Checkpoint 3' , href: 'chapter-a1-26-goethe3.html' },

  prevChapter: { number: 24, title: 'Datum & Ordinalzahlen', titleEn: 'Dates & Ordinals', href: 'chapter-a1-24-datum.html' },
  heroAnimationPath: null,

  // ---------- Story Dialogue (signature section — before vocab/grammar) ----------
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Saturday morning. Svenja calls Malte to plan the day — getting up, shopping, picking him up — and almost every plan is a separable verb whose prefix lands, with a little click, at the end of the sentence.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the prefix snap to the end: stehe \u2026 auf, rufe \u2026 an'
    ],
    scene: 'Samstagmorgen \u2014 ein Anruf, Berlin',
    femaleSpeakers: ['Svenja'],
    dialogue: [
      { speaker: 'Svenja', tokens: [
        { w: 'Hallo', role: 'r-subject', en: 'hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting' },
        { w: 'Malte', role: 'r-name', en: 'Malte', hi: 'माल्टे', pron: 'MAL-tuh', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place', why: '"Hier ist …" = the normal way to say who is calling.', ex: 'Hier ist Svenja.', exEn: 'This is Svenja.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'Svenja', role: 'r-name', en: 'Svenja', hi: 'स्वेन्या', pron: 'SVEN-ya', type: 'Name · person' },
        { w: '.', plain: true }
      ], en: 'Hello Malte! This is Svenja.', hi: 'Namaste Malte! Main Svenja bol rahi hoon.' },
      { speaker: 'Malte', side: 'right', tokens: [
        { w: 'Hallo', role: 'r-subject', en: 'hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting' },
        { w: 'Svenja', role: 'r-name', en: 'Svenja', hi: 'स्वेन्या', pron: 'SVEN-ya', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Alles', role: 'r-subject', en: 'everything', hi: 'सब', pron: 'A-les', type: 'Pronoun · subject' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'ठीक', pron: 'goot', type: 'Adjective', why: '"Alles gut?" = everything okay? — very common on the phone.', ex: 'Alles gut?', exEn: 'Everything okay?' },
        { w: '?', plain: true }
      ], en: 'Hello Svenja! Everything okay?', hi: 'Namaste Svenja! Sab theek?' },
      { speaker: 'Svenja', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'alles', role: 'r-subject', en: 'everything', hi: 'सब', pron: 'A-les', type: 'Pronoun · subject' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'ठीक', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'kaufen', role: 'r-verb', en: 'are shopping', hi: 'खरीदारी करते हैं', pron: 'KOW-fen', type: 'Verb · einkaufen (wir)', lexicalUnit: 'einkaufen', why: 'einkaufen splits: wir kaufen … ein (this chapter).', ex: 'Wir kaufen ein.', exEn: 'We do the shopping.' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'ein', role: 'r-verb', en: '(prefix of einkaufen)', hi: 'खरीदारी', pron: 'ine', type: 'Separable prefix · Satzende', lexicalUnit: 'einkaufen' },
        { w: '.', plain: true },
        { w: 'Kommst', role: 'r-verb', en: 'are you coming', hi: 'आते हो', pron: 'komst', type: 'Verb · mitkommen (du)', why: 'mitkommen splits: kommst du … mit? (this chapter).', ex: 'Kommst du mit?', exEn: 'Are you coming along?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mit', role: 'r-verb', en: '(prefix of mitkommen)', hi: 'साथ', pron: 'mit', type: 'Separable prefix · Satzende' },
        { w: '?', plain: true }
      ], en: 'Yes, everything is fine. We are doing the shopping today. Are you coming along?', hi: 'Haan, sab theek. Aaj hum khareedari karte hain. Tum saath aaoge?' },
      { speaker: 'Malte', side: 'right', tokens: [
        { w: 'Heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: '?', plain: true },
        { w: 'Hmm', role: 'r-subject', en: 'hmm', hi: 'हम्म', pron: 'hm', type: 'Filler' },
        { w: '.', plain: true },
        { w: 'Wann', role: 'r-question', en: 'when', hi: 'कब', pron: 'van', type: 'Question word' },
        { w: 'fangen', role: 'r-verb', en: 'do we start', hi: 'शुरू करते हैं', pron: 'FANG-en', type: 'Verb · anfangen (wir)', lexicalUnit: 'anfangen', why: 'anfangen splits: wir fangen … an (this chapter).', ex: 'Wann fangen wir an?', exEn: 'When do we start?' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'an', role: 'r-verb', en: '(prefix of anfangen)', hi: 'शुरू', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anfangen' },
        { w: '?', plain: true }
      ], en: 'Today? Hmm. When do we start?', hi: 'Aaj? Hmm. Hum kab shuru karte hain?' },
      { speaker: 'Svenja', tokens: [
        { w: 'Um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock time' },
        { w: 'halb', role: 'r-time', en: 'half (to)', hi: 'साढ़े', pron: 'halp', type: 'Time word' },
        { w: 'zwölf', role: 'r-time', en: 'twelve', hi: 'बारह', pron: 'tsvölf', type: 'Number' },
        { w: '.', plain: true },
        { w: 'Okay', role: 'r-subject', en: 'okay', hi: 'ठीक है', pron: 'o-KAY', type: 'Reaction' },
        { w: '?', plain: true }
      ], en: 'At half past eleven. Okay?', hi: 'Saade gyarah baje. Theek hai?' },
      { speaker: 'Malte', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nehme', role: 'r-verb', en: 'am taking', hi: 'ले जाता हूँ', pron: 'NAY-muh', type: 'Verb · mitnehmen (ich)', lexicalUnit: 'mitnehmen', why: 'mitnehmen splits: ich nehme … mit (this chapter).', ex: 'Ich nehme das Geld mit.', exEn: 'I take the money along.' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Geld', role: 'r-akkusativ', en: 'money', hi: 'पैसे', pron: 'gelt', type: 'Noun · neut.' },
        { w: 'mit', role: 'r-verb', en: '(prefix of mitnehmen)', hi: 'साथ', pron: 'mit', type: 'Separable prefix · Satzende', lexicalUnit: 'mitnehmen' },
        { w: '.', plain: true }
      ], en: 'Yes, that is good. I will take the money along.', hi: 'Haan, yeh achha hai. Main paise saath le jaata hoon.' },
      { speaker: 'Svenja', tokens: [
        { w: 'Super', role: 'r-adjective', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Kommt', role: 'r-verb', en: 'is coming along', hi: 'आती है', pron: 'komt', type: 'Verb · mitkommen (er/sie)', lexicalUnit: 'mitkommen', why: 'mitkommen splits: kommt … mit (this chapter).', ex: 'Kommt sie mit?', exEn: 'Is she coming along?' },
        { w: 'deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Schwester', role: 'r-subject', en: 'sister', hi: 'बहन', pron: 'SHVES-ter', type: 'Noun · fem.' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'mit', role: 'r-verb', en: '(prefix of mitkommen)', hi: 'साथ', pron: 'mit', type: 'Separable prefix · Satzende' },
        { w: '?', plain: true }
      ], en: 'Great! Is your sister coming along too?', hi: 'Badhiya! Kya tumhaari bahan bhi saath aa rahi hai?' },
      { speaker: 'Malte', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'sieht', role: 'r-verb', en: 'is watching', hi: 'देखती है', pron: 'zeet', type: 'Verb · fernsehen (sie)', lexicalUnit: 'fernsehen', why: 'fernsehen splits: sie sieht … fern (this chapter).', ex: 'Sie sieht fern.', exEn: 'She is watching TV.' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'fern', role: 'r-verb', en: '(prefix of fernsehen)', hi: 'टीवी', pron: 'fairn', type: 'Separable prefix · Satzende', lexicalUnit: 'fernsehen' },
        { w: '.', plain: true }
      ], en: 'No, today she is only watching TV.', hi: 'Nahi, aaj woh sirf TV dekh rahi hai.' },
      { speaker: 'Svenja', tokens: [
        { w: 'Ach', role: 'r-subject', en: 'ah', hi: 'अच्छा', pron: 'akh', type: 'Reaction' },
        { w: 'so', role: 'r-adverb', en: 'I see', hi: 'समझा', pron: 'zo', type: 'Reaction', why: '"Ach so!" = ah, I see (natural spoken reaction).', ex: 'Ach so!', exEn: 'Ah, I see!' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'bis', role: 'r-subject', en: 'until', hi: 'तक', pron: 'bis', type: 'Phrase (part)' },
        { w: 'halb', role: 'r-time', en: 'half (to)', hi: 'साढ़े', pron: 'halp', type: 'Time word' },
        { w: 'zwölf', role: 'r-time', en: 'twelve', hi: 'बारह', pron: 'tsvölf', type: 'Number' },
        { w: '!', plain: true }
      ], en: 'Ah, I see! Then see you at half past eleven!', hi: 'Achha samjha! Toh saade gyarah baje milte hain!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A separable verb is one word in the dictionary \u2014 <span class="de r-verb">aufstehen</span>, <span class="de r-verb">anrufen</span>, <span class="de r-verb">einkaufen</span> \u2014 but in a normal sentence it splits: the verb is conjugated in position 2 and the <strong>prefix</strong> flies to the very end. <span class="de">Ich <u>stehe</u> um sechs Uhr <u>auf</u>.</span> The prefix often carries the meaning, so it matters where it lands.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is SEPARABLE VERBS (Trennbare Verben): aufstehen, anrufen, einkaufen, mitkommen, einladen, anfangen, mitbringen, abholen, fernsehen, aufmachen, zumachen, ausmachen, anmachen, losgehen, etc. ' +
    'The learner wrote sentences with separable verbs below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- In a main clause, the verb is conjugated in position 2 and the PREFIX goes to the very END: "Ich stehe um sechs Uhr auf." / "Wir kaufen heute ein."\n' +
    '- In a yes/no question the verb is first, the prefix still at the end: "Kommst du mit?" / "Rufst du ihn an?"\n' +
    '- In the infinitive (after a modal or in the dictionary) the verb stays whole: "Ich muss früh aufstehen." / "Willst du mitkommen?"\n' +
    '- Common prefixes: auf-, an-, ein-, mit-, ab-, aus-, zu-, los-, vor-, weiter-, zurück-, fern-. The prefix usually carries the meaning (anmachen = turn on vs ausmachen = turn off).\n' +
    '- Stem changes still apply: anfangen → er fängt … an; mitnehmen → er nimmt … mit; fernsehen → er sieht … fern.\n' +
    '- Do NOT confuse with inseparable prefixes (be-, ver-, er-, ent-): beginnen and vorbereiten — beginnen never splits; vorbereiten does split (er bereitet … vor).\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Prefix check:</b> one sentence on whether the prefix landed at the end (or stayed attached in an infinitive).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — your prefixes are landing at the end where they belong. On to Goethe Mini 3.',
    mid: 'Good. Re-read the "prefix to the end" card once, then continue.',
    low: 'Worth another pass — focus on prefix placement in the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'stehe', role: 'r-verb' },
    { w: 'früh', role: 'r-adverb' }, { w: 'auf', role: 'r-verb' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how a separable verb splits before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Plan a Saturday with the group on the phone — hear separable prefixes snap to the end.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the everyday separable verbs and the prefixes that change their meaning.' },
    { id: 'grammar',    label: 'Separable verbs', tag: 'core',
      objective: 'Master the split: verb in position 2, prefix at the end — in statements, questions and after modals.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a morning-routine text full of separable verbs and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch who gets up, calls, shops and comes along, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say what you do in the morning and run a short plan-the-day roleplay.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five separable-verb sentences and a short paragraph about your morning.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill prefix placement and separable verbs with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All separable verbs with their prefixes, translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Prefix-placement drills, sentence building, error correction, and a daily-routine writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'How separable verbs split, statements vs questions vs infinitives, prefix meanings, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'aufstehen → stehe … auf', text: 'Split a separable verb' },
    { de: 'Ich rufe dich an.', text: 'Send the prefix to the end' },
    { de: 'Kommst du mit?', text: 'Ask with a separable verb' },
    { de: 'Ich muss aufstehen.', text: 'Keep it whole after a modal' },
    { de: 'anmachen / ausmachen', text: 'Let the prefix change the meaning' }
  ],

  // ---------- Vocabulary (31 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'anrufen', pos: 'verb', en: 'to call (phone)', hi: 'फ़ोन करना', ex: 'Ich rufe dich später an.', exEn: 'I\u2019ll call you later.', conj: { praesens: 'ruft an', praeteritum: 'rief an', perfekt: 'hat angerufen' } },
    { de: 'aufstehen', pos: 'verb', en: 'to get up', hi: 'उठना', ex: 'Ich stehe um sechs Uhr auf.', exEn: 'I get up at six.', conj: { praesens: 'steht auf', praeteritum: 'stand auf', perfekt: 'ist aufgestanden' } },
    { de: 'einkaufen', pos: 'verb', en: 'to shop', hi: 'खरीदारी करना', ex: 'Wir kaufen heute ein.', exEn: 'We go shopping today.', conj: { praesens: 'kauft ein', praeteritum: 'kaufte ein', perfekt: 'hat eingekauft' } },
    { de: 'einladen', pos: 'verb', en: 'to invite', hi: 'निमंत्रण देना', ex: 'Ich lade dich ein.', exEn: 'I invite you.', conj: { praesens: 'lädt ein', praeteritum: 'lud ein', perfekt: 'hat eingeladen' } },
    { de: 'fernsehen', pos: 'verb', en: 'to watch TV', hi: 'टीवी देखना', ex: 'Am Abend sehe ich fern.', exEn: 'In the evening I watch TV.', conj: { praesens: 'sieht fern', praeteritum: 'sah fern', perfekt: 'hat ferngesehen' } },
    { de: 'mitkommen', pos: 'verb', en: 'to come along', hi: 'साथ आना', ex: 'Kommst du mit?', exEn: 'Are you coming along?', conj: { praesens: 'kommt mit', praeteritum: 'kam mit', perfekt: 'ist mitgekommen' } },
    // ===== Active Support =====
    { de: 'abholen', pos: 'verb', en: 'to pick up', hi: 'लेने जाना', ex: 'Ich hole dich am Bahnhof ab.', exEn: 'I pick you up at the station.', conj: { praesens: 'holt ab', praeteritum: 'holte ab', perfekt: 'hat abgeholt' } },
    { de: 'anfangen', pos: 'verb', en: 'to start', hi: 'शुरू होना', ex: 'Der Kurs fängt um acht an.', exEn: 'The course starts at eight.', conj: { praesens: 'fängt an', praeteritum: 'fing an', perfekt: 'hat angefangen' } },
    { de: 'anmachen', pos: 'verb', en: 'to turn on', hi: 'चालू करना', ex: 'Ich mache das Licht an.', exEn: 'I turn the light on.', conj: { praesens: 'macht an', praeteritum: 'machte an', perfekt: 'hat angemacht' } },
    { de: 'aufhören', pos: 'verb', en: 'to stop', hi: 'रुकना', ex: 'Hör auf!', exEn: 'Stop it!', conj: { praesens: 'hört auf', praeteritum: 'hörte auf', perfekt: 'hat aufgehört' } },
    { de: 'aufmachen', pos: 'verb', en: 'to open', hi: 'खोलना', ex: 'Ich mache das Fenster auf.', exEn: 'I open the window.', conj: { praesens: 'macht auf', praeteritum: 'machte auf', perfekt: 'hat aufgemacht' } },
    { de: 'aufpassen', pos: 'verb', en: 'to pay attention', hi: 'ध्यान देना', ex: 'Pass auf!', exEn: 'Watch out!', conj: { praesens: 'passt auf', praeteritum: 'passte auf', perfekt: 'hat aufgepasst' } },
    { de: 'ausmachen', pos: 'verb', en: 'to turn off', hi: 'बंद करना', ex: 'Ich mache den Fernseher aus.', exEn: 'I turn the TV off.', conj: { praesens: 'macht aus', praeteritum: 'machte aus', perfekt: 'hat ausgemacht' } },
    { de: 'beginnen', pos: 'verb', en: 'to begin', hi: 'आरंभ करना', ex: 'Der Film beginnt um acht.', exEn: 'The film begins at eight.', conj: { praesens: 'beginnt', praeteritum: 'begann', perfekt: 'hat begonnen' } },
    { de: 'einkaufen gehen', pos: 'verb', en: 'to go shopping', hi: 'खरीदारी करने जाना', ex: 'Wir gehen am Samstag einkaufen.', exEn: 'We go shopping on Saturday.', conj: { praesens: 'geht einkaufen', praeteritum: 'ging einkaufen', perfekt: 'ist einkaufen gegangen' } },
    { de: 'einpacken', pos: 'verb', en: 'to pack', hi: 'पैक करना', ex: 'Ich packe die Tasche ein.', exEn: 'I pack the bag.', conj: { praesens: 'packt ein', praeteritum: 'packte ein', perfekt: 'hat eingepackt' } },
    { de: 'losgehen', pos: 'verb', en: 'to start, set off', hi: 'रवाना होना', ex: 'Wir gehen um zehn los.', exEn: 'We set off at ten.', conj: { praesens: 'geht los', praeteritum: 'ging los', perfekt: 'ist losgegangen' } },
    { de: 'mitbringen', pos: 'verb', en: 'to bring along', hi: 'साथ लाना', ex: 'Ich bringe Kuchen mit.', exEn: 'I bring cake along.', conj: { praesens: 'bringt mit', praeteritum: 'brachte mit', perfekt: 'hat mitgebracht' } },
    { de: 'mitmachen', pos: 'verb', en: 'to join in', hi: 'शामिल होना', ex: 'Machst du mit?', exEn: 'Are you joining in?', conj: { praesens: 'macht mit', praeteritum: 'machte mit', perfekt: 'hat mitgemacht' } },
    { de: 'mitnehmen', pos: 'verb', en: 'to take along', hi: 'साथ ले जाना', ex: 'Ich nehme den Schirm mit.', exEn: 'I take the umbrella along.', conj: { praesens: 'nimmt mit', praeteritum: 'nahm mit', perfekt: 'hat mitgenommen' } },
    { de: 'rausgehen', pos: 'verb', en: 'to go out', hi: 'बाहर जाना', ex: 'Wir gehen am Abend raus.', exEn: 'We go out in the evening.', conj: { praesens: 'geht raus', praeteritum: 'ging raus', perfekt: 'ist rausgegangen' } },
    { de: 'weitermachen', pos: 'verb', en: 'to continue', hi: 'जारी रखना', ex: 'Mach bitte weiter!', exEn: 'Please continue!', conj: { praesens: 'macht weiter', praeteritum: 'machte weiter', perfekt: 'hat weitergemacht' } },
    { de: 'zumachen', pos: 'verb', en: 'to close', hi: 'बंद करना', ex: 'Ich mache die Tür zu.', exEn: 'I close the door.', conj: { praesens: 'macht zu', praeteritum: 'machte zu', perfekt: 'hat zugemacht' } },
    // ===== Passive =====
    { de: 'aufhängen', pos: 'verb', en: 'to hang up', hi: 'टाँगना', ex: 'Ich hänge das Bild auf.', exEn: 'I hang the picture up.', conj: { praesens: 'hängt auf', praeteritum: 'hängte auf', perfekt: 'hat aufgehängt' } },
    { de: 'aufschreiben', pos: 'verb', en: 'to write down', hi: 'लिख लेना', ex: 'Ich schreibe das Wort auf.', exEn: 'I write the word down.', conj: { praesens: 'schreibt auf', praeteritum: 'schrieb auf', perfekt: 'hat aufgeschrieben' } },
    { de: 'aufstellen', pos: 'verb', en: 'to set up, arrange', hi: 'खड़ा करना', ex: 'Wir stellen die Stühle auf.', exEn: 'We set up the chairs.', conj: { praesens: 'stellt auf', praeteritum: 'stellte auf', perfekt: 'hat aufgestellt' } },
    { de: 'einsammeln', pos: 'verb', en: 'to collect in', hi: 'इकट्ठा करना', ex: 'Die Lehrerin sammelt die Tests ein.', exEn: 'The teacher collects the tests.', conj: { praesens: 'sammelt ein', praeteritum: 'sammelte ein', perfekt: 'hat eingesammelt' } },
    { de: 'vorbereiten', pos: 'verb', en: 'to prepare', hi: 'तैयार करना', ex: 'Ich bereite das Essen vor.', exEn: 'I prepare the food.', conj: { praesens: 'bereitet vor', praeteritum: 'bereitete vor', perfekt: 'hat vorbereitet' } },
    { de: 'vorlesen', pos: 'verb', en: 'to read aloud', hi: 'पढ़कर सुनाना', ex: 'Die Mutter liest dem Kind vor.', exEn: 'The mother reads to the child.', conj: { praesens: 'liest vor', praeteritum: 'las vor', perfekt: 'hat vorgelesen' } },
    { de: 'wegräumen', pos: 'verb', en: 'to put away, clear away', hi: 'हटाना', ex: 'Ich räume die Bücher weg.', exEn: 'I put the books away.', conj: { praesens: 'räumt weg', praeteritum: 'räumte weg', perfekt: 'hat weggeräumt' } },
    // ===== Reference / System =====
    { de: 'trennbar', pos: 'adjective', en: 'separable', hi: 'अलग होने वाला', ex: '"Aufstehen" ist ein trennbares Verb.', exEn: '"Aufstehen" is a separable verb.' }
  ],

  // ---------- Separable verbs (rule cards → accordion) ----------
  grammar: [
    {
      title: 'What a separable verb is',
      goldenRule: 'The <b>prefix</b> carries the meaning; the base verb only carries the grammar.',
      memoryTrick: 'Ek base verb, kai prefix, kai matlab: <b>an</b>machen (chaalu), <b>aus</b>machen (band), <b>auf</b>machen (kholna), <b>zu</b>machen (band karna).',
      body: [
        'A separable verb is built from a small <strong>prefix</strong> + a base verb: <span class="de r-verb">auf</span> + <span class="de r-verb">stehen</span> = <span class="de r-verb">aufstehen</span> (to get up). In the dictionary it\u2019s one word — but in a sentence it splits.'
      ],
      table: {
        head: ['Prefix + verb', 'Meaning'],
        rows: [
          ['<span class="de">auf + stehen</span>', 'aufstehen — to get up'],
          ['<span class="de">an + rufen</span>', 'anrufen — to call'],
          ['<span class="de">ein + kaufen</span>', 'einkaufen — to shop'],
          ['<span class="de">mit + kommen</span>', 'mitkommen — to come along']
        ]
      },
      note: 'The prefix usually carries the meaning. The same base verb takes many prefixes: <b>an</b>machen (turn on) vs <b>aus</b>machen (turn off) vs <b>auf</b>machen (open) vs <b>zu</b>machen (close).',
      hinglish: 'Separable verb = chhota <b>prefix</b> + base verb: auf + stehen = aufstehen (uthna). Dictionary mein ek shabd, par sentence mein alag. Prefix hi matlab badalta hai: <b>an</b>machen (chaalu) vs <b>aus</b>machen (band).'
    },
    {
      title: 'The split: prefix flies to the end',
      goldenRule: 'Conjugated part in slot 2, <b>prefix at the very end</b>. Everything else in between.',
      formula: [
        'aufstehen  →  Ich <b>stehe</b> um sechs <b>auf</b>.',
        'anrufen    →  Ich <b>rufe</b> dich <b>an</b>.',
        '               ↑ slot 2        ↑ end'
      ],
      memoryTrick: 'Prefix ko sentence ke <b>end</b> mein bhejo. Yeh wahi bracket hai jo modal mein tha — shuru mein ek hissa, sentence ke end mein doosra.',
      recap: [
        'Statement: verb slot 2, prefix last.',
        'Question: verb first, prefix still last.',
        'After a modal the verb stays <b>whole</b> at the end.'
      ],
      body: [
        'In a normal statement, the verb is conjugated in <strong>position 2</strong> and the prefix breaks off and goes to the very <strong>end</strong>. The two halves form a bracket around the sentence.'
      ],
      table: {
        head: ['Subject', 'Verb (2)', 'middle', 'Prefix (end)'],
        rows: [
          ['<span class="de">Ich</span>', '<span class="de r-verb">stehe</span>', '<span class="de">um sechs Uhr</span>', '<span class="de r-verb">auf.</span>'],
          ['<span class="de">Wir</span>', '<span class="de r-verb">kaufen</span>', '<span class="de">heute</span>', '<span class="de r-verb">ein.</span>'],
          ['<span class="de">Ich</span>', '<span class="de r-verb">rufe</span>', '<span class="de">dich später</span>', '<span class="de r-verb">an.</span>'],
          ['<span class="de">Er</span>', '<span class="de r-verb">bringt</span>', '<span class="de">Kaffee</span>', '<span class="de r-verb">mit.</span>']
        ]
      },
      note: 'The conjugated stem stays in position 2; the prefix waits at the end. Everything else (time, object) sits in between. Don\u2019t leave them stuck together: NOT "Ich aufstehe …".',
      hinglish: 'Statement mein verb position 2 par conjugate hota hai, aur prefix tootkar sentence ke end mein chala jaata hai. Beech mein time aur object aa jaate hain. Dono ko saath rakhna galat hai \u2014 <b>Ich aufstehe</b> nahi, balki <b>Ich stehe \u2026 auf</b>.'
    },
    {
      title: 'Questions & after modals',
      body: [
        'In questions the verb moves but the prefix still waits at the end. After a modal verb (or in the infinitive), the separable verb stays <strong>whole</strong>.'
      ],
      table: {
        head: ['Type', 'Example'],
        rows: [
          ['Ja/Nein question', '<span class="de">Kommst du mit?</span> (verb first, prefix end)'],
          ['W-question', '<span class="de">Wann fängt der Kurs an?</span>'],
          ['after a modal', '<span class="de">Ich muss früh aufstehen.</span> (whole!)'],
          ['after a modal', '<span class="de">Willst du mitkommen?</span> (whole!)']
        ]
      },
      note: 'Yes/no question: verb first, prefix at the end — "Rufst du an?". After a modal the main verb is an infinitive at the end and stays joined: "Ich will einkaufen." Never split it there.',
      hinglish: 'Sawaal mein bhi prefix end mein hi rehta hai: <b>Kommst du mit?</b> Lekin modal ke baad verb poora rehta hai aur infinitive ban kar end mein jaata hai: <b>Ich muss aufstehen</b>. Wahaan use todna nahi hai.'
    },
    {
      title: 'Separable vs inseparable',
      goldenRule: 'Stress the prefix → it splits. Cannot stress it → it never splits.',
      why: 'You can hear the difference before you know the rule. <b>AUF</b>stehen puts the weight on the prefix, so the prefix is a real word and can stand alone at the end. In be<b>GIN</b>nen the weight is on the stem, so <i>be-</i> is not a word and has nothing to stand on.',
      memoryTrick: 'Prefix par <b>zor</b> hai? Alag ho jaayega. Zor stem par hai? Chipka rahega.',
      body: [
        'Some prefixes never separate. The inseparable ones (be-, ver-, er-, ent-, ge-) stay glued; the separable ones (auf-, an-, ein-, mit-, ab-, aus-, zu-, los-…) break off.'
      ],
      table: {
        head: ['Type', 'Verbs', 'Behaviour'],
        rows: [
          ['separable', '<span class="de">aufstehen, anrufen, einkaufen</span>', 'prefix → end'],
          ['inseparable', '<span class="de">beginnen, verstehen, erklären</span>', 'never splits'],
          ['careful!', '<span class="de">vorbereiten</span>', 'separates: bereitet … vor'],
          ['careful!', '<span class="de">beginnen</span>', 'stays: Der Kurs beginnt']
        ]
      },
      note: 'Stressed prefix (AUFstehen) = separable. Unstressed prefix (be-, ver-, er-, ent-) = inseparable, e.g. <b>beginnen</b> never splits. When you learn a verb, learn whether the prefix splits.',
      hinglish: 'Pehchanne ka simple tarika yeh hai ki zor kahaan pad raha hai. Agar prefix par zor hai, jaise <b>AUF</b>stehen, to woh separable hai. Aur jin prefixes par zor nahi padta (be-, ver-, er-, ent-), woh inseparable hote hain — jaise <b>beginnen</b>, jo kabhi nahi tootta. Isliye naya verb seekhte waqt yeh bhi note kar lo ki uska prefix alag hota hai ya nahi.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four separable-verb traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich aufstehe um sechs.', right: 'Ich stehe um sechs auf.', why: 'Split it: verb in position 2, prefix at the end.' },
        { wrong: 'Ich rufe an dich.', right: 'Ich rufe dich an.', why: 'The prefix goes after the object, at the very end.' },
        { wrong: 'Ich muss früh aufstehe.', right: 'Ich muss früh aufstehen.', why: 'After a modal the verb stays a whole infinitive.' },
        { wrong: 'Kommst du?', right: 'Kommst du mit?', why: 'Don\u2019t drop the prefix — mitkommen needs its mit.' }
      ],
      hinglish: 'Char galtiyan dhyaan mein rakho. Verb ko todna zaroori hai: <b>Ich stehe \u2026 auf</b>, na ki <b>Ich aufstehe</b>. Prefix object ke baad, sentence ke end mein aata hai: <b>Ich rufe dich an</b>. Modal ke baad verb poora rehta hai: <b>Ich muss aufstehen</b>. Aur prefix ko girana nahi hai: <b>Kommst du mit?</b>'
    }
  ],

  // ---------- Reading passage (morning routine, clickable) ----------
  reading: {
    title: 'Mein Samstag',
    titleEn: 'My Saturday',
    tokens: [
      { w: 'Am', role: 'r-preposition', en: 'on', hi: 'को', pron: 'am', type: 'Preposition + day' },
      { w: 'Samstag', role: 'r-time', en: 'Saturday', hi: 'शनिवार', pron: 'ZAMS-tahk', type: 'Noun · day', why: 'der Samstag (recycled — Hobbies).', ex: 'Am Samstag stehe ich spät auf.', exEn: 'On Saturday I get up late.' },
      { w: 'stehe', role: 'r-verb', en: 'get up', hi: 'उठता हूँ', pron: 'SHTAY-uh', type: 'Verb · aufstehen (ich)', why: 'aufstehen: ich stehe … auf; verb position 2 (this chapter).', ex: 'Ich stehe spät auf.', exEn: 'I get up late.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'spät', role: 'r-adverb', en: 'late', hi: 'देर से', pron: 'shpayt', type: 'Adverb', why: 'spät (recycled — Uhrzeit).', ex: 'Ich stehe spät auf.', exEn: 'I get up late.' },
      { w: 'auf', role: 'r-verb', en: '(get up)', hi: 'उठ', pron: 'owf', type: 'Separable prefix', why: 'auf flies to the end (this chapter).', ex: '… auf.', exEn: '… up.' },
      { w: '.', plain: true },
      { w: 'Zuerst', role: 'r-adverb', en: 'first', hi: 'पहले', pron: 'tsu-AIRST', type: 'Adverb', why: 'zuerst (recycled — Goethe Mini 2).', ex: 'Zuerst rufe ich Anna an.', exEn: 'First I call Anna.' },
      { w: 'rufe', role: 'r-verb', en: 'call', hi: 'फ़ोन करता हूँ', pron: 'ROO-fuh', type: 'Verb · anrufen (ich)', why: 'anrufen: ich rufe … an; verb position 2 (this chapter).', ex: 'Ich rufe Anna an.', exEn: 'I call Anna.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'Anna', role: 'r-object', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'an', role: 'r-verb', en: '(call)', hi: 'फ़ोन', pron: 'an', type: 'Separable prefix', why: 'an from anrufen lands at the end (this chapter).', ex: '… an.', exEn: '… up.' },
      { w: '.', plain: true },
      { w: 'Dann', role: 'r-time', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb · time' },
      { w: 'kaufen', role: 'r-verb', en: 'shop', hi: 'खरीदारी करते हैं', pron: 'KOW-fen', type: 'Verb · einkaufen (wir)', lexicalUnit: 'einkaufen', why: 'einkaufen: wir kaufen … ein (this chapter).', ex: 'Dann kaufen wir ein.', exEn: 'Then we go shopping.' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun', why: 'Verb position 2 after front adverb (recycled — Satzposition).', ex: 'Dann kaufen wir …', exEn: 'Then we …' },
      { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'एक साथ', pron: 'tsu-ZA-men', type: 'Adverb', why: 'zusammen (recycled — Im Café).', ex: 'Wir kaufen zusammen ein.', exEn: 'We shop together.' },
      { w: 'ein', role: 'r-verb', en: '(shop)', hi: 'खरीद', pron: 'ine', type: 'Separable prefix', lexicalUnit: 'einkaufen', why: 'ein from einkaufen lands at the end (this chapter).', ex: '… ein.', exEn: '… shopping.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'bringe', role: 'r-verb', en: 'bring', hi: 'लाता हूँ', pron: 'BRING-uh', type: 'Verb · mitbringen (ich)', why: 'mitbringen: ich bringe … mit (this chapter).', ex: 'Ich bringe Kaffee mit.', exEn: 'I bring coffee.' },
      { w: 'Kaffee', role: 'r-object', en: 'coffee', hi: 'कॉफ़ी', pron: 'KA-fay', type: 'Noun · masc.', why: 'der Kaffee (recycled — Im Café).', ex: 'Ich bringe Kaffee mit.', exEn: 'I bring coffee.' },
      { w: 'mit', role: 'r-verb', en: '(bring along)', hi: 'साथ', pron: 'mit', type: 'Separable prefix', why: 'mit from mitbringen lands at the end (this chapter).', ex: '… mit.', exEn: '… along.' },
      { w: '.', plain: true },
      { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'holen', role: 'r-verb', en: 'pick up', hi: 'लेने जाते हैं', pron: 'HOH-len', type: 'Verb · abholen (wir)', why: 'abholen: wir holen … ab (this chapter).', ex: 'Wir holen Max ab.', exEn: 'We pick Max up.' },
      { w: 'Max', role: 'r-object', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'ab', role: 'r-verb', en: '(pick up)', hi: 'लेने', pron: 'ap', type: 'Separable prefix', why: 'ab from abholen lands at the end (this chapter).', ex: '… ab.', exEn: '… up.' },
      { w: ',', plain: true },
      { w: 'denn', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'den', type: 'Conjunction', why: 'denn (recycled — Unregelmäßige Verben).', ex: 'denn er steht spät auf', exEn: 'because he gets up late' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'steht', role: 'r-verb', en: 'gets up', hi: 'उठता है', pron: 'shtayt', type: 'Verb · aufstehen (er)', why: 'aufstehen: er steht … auf (this chapter).', ex: 'Er steht spät auf.', exEn: 'He gets up late.' },
      { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'I-mer', type: 'Adverb' },
      { w: 'spät', role: 'r-adverb', en: 'late', hi: 'देर से', pron: 'shpayt', type: 'Adverb' },
      { w: 'auf', role: 'r-verb', en: '(get up)', hi: 'उठ', pron: 'owf', type: 'Separable prefix', why: 'auf lands at the end (this chapter).', ex: '… auf.', exEn: '… up.' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'am', type: 'Preposition + time' },
      { w: 'Abend', role: 'r-time', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun · time', why: 'der Abend (recycled — Uhrzeit).', ex: 'Am Abend sehe ich fern.', exEn: 'In the evening I watch TV.' },
      { w: 'sehe', role: 'r-verb', en: 'watch', hi: 'देखता हूँ', pron: 'ZAY-uh', type: 'Verb · fernsehen (ich)', why: 'fernsehen: ich sehe … fern (this chapter).', ex: 'Ich sehe fern.', exEn: 'I watch TV.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'fern', role: 'r-verb', en: '(watch TV)', hi: 'टीवी', pron: 'fairn', type: 'Separable prefix', why: 'fern from fernsehen lands at the end (this chapter).', ex: '… fern.', exEn: '… TV.' },
      { w: '.', plain: true }
    ],
    translation: 'On Saturday I get up late. First I call Anna. Then we go shopping together. I bring coffee along. We pick Max up, because he always gets up late. In the evening I watch TV.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_025_L001', speaker: 'Malte', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Svenja, was machst du am Sonntag?', en: 'Svenja, what are you doing on Sunday?' },
      { id: 'A1_025_L002', speaker: 'Svenja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich räume auf und rufe meine Mutter an.', en: 'I tidy up and call my mother.' },
      { id: 'A1_025_L003', speaker: 'Malte', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und danach?', en: 'And after that?' },
      { id: 'A1_025_L004', speaker: 'Svenja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich lade Nina ein. Wir sehen zusammen einen Film. Bringst du Chips mit?', en: 'I invite Nina. We watch a film together. Are you bringing chips?' },
      { id: 'A1_025_L005', speaker: 'Malte', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Klar, ich bringe Chips mit!', en: 'Sure, I\'ll bring chips!' }
    ],
    transcript: 'Svenja, was machst du am Sonntag? Ich räume auf und rufe meine Mutter an. Und danach? Ich lade Nina ein. Wir sehen zusammen einen Film. Bringst du Chips mit? Klar, ich bringe Chips mit!',
    translation: 'Svenja, what are you doing on Sunday? I tidy up and call my mother. And after that? I invite Nina. We watch a film together. Are you bringing chips? Sure, I\'ll bring chips!',
    tokens: [
      { w: 'Svenja' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'machst' },
      { w: 'du' },
      { w: 'am' },
      { w: 'Sonntag' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'räume' },
      { w: 'auf' },
      { w: 'und' },
      { w: 'rufe' },
      { w: 'meine' },
      { w: 'Mutter' },
      { w: 'an' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'danach' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'lade' },
      { w: 'Nina' },
      { w: 'ein' },
      { w: '.', plain: true },
      { w: 'Wir' },
      { w: 'sehen' },
      { w: 'zusammen' },
      { w: 'einen' },
      { w: 'Film' },
      { w: '.', plain: true },
      { w: 'Bringst' },
      { w: 'du' },
      { w: 'Chips' },
      { w: 'mit' },
      { w: '?', plain: true },
      { w: 'Klar' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'bringe' },
      { w: 'Chips' },
      { w: 'mit' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Wen ruft Svenja an?', qEn: 'Who does Svenja call?', options: ['Nina', 'ihre Mutter', 'Malte', 'ihre Schwester'], optionsEn: ['Nina', 'her mother', 'Malte', 'her sister'], answer: 1,
        explain: '"… rufe ich meine Mutter an."' },
      { q: 'Was machen sie zusammen?', qEn: 'What will they do together?', options: ['einkaufen', 'einen Film sehen', 'kochen', 'schlafen'], optionsEn: ['go shopping', 'watch a film', 'cook', 'sleep'], answer: 1,
        explain: '"Wir sehen zusammen einen Film."' }
    ]
  },

  speaking: [
    { task: "Dein Partner fragt: Was machst du am Sonntag?", taskEn: "Your partner asks: what are you doing on Sunday?", de: "Ich räume auf und ich rufe meine Mutter an.", en: "I'm tidying up and calling my mother." },
    { task: "Deine Freundin fragt: Wann stehst du morgens auf?", taskEn: "Your friend asks: when do you get up in the morning?", de: "Ich stehe um sieben Uhr auf und gehe dann los.", en: "I get up at seven and then set off." },
    { task: "Du planst einen Filmabend. Lade Nina ein und frag nach Chips.", taskEn: "You're planning a film night. Invite Nina and ask about crisps.", de: "Ich lade Nina ein. Bringst du Chips mit?", en: "I'm inviting Nina. Will you bring crisps?" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about your morning or weekend using separable verbs. Use at least: aufstehen, anrufen, einkaufen, and mitkommen or mitbringen. Remember to split them — verb in position 2, prefix at the end.',
    starters: ['Ich stehe um … auf.', 'Dann rufe ich … an.', 'Wir kaufen … ein.', 'Am Abend sehe ich fern.'],
    placeholder: 'Ich stehe um acht Uhr auf …',
    minWords: 20
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct?',
      options: ['Ich aufstehe um sechs.', 'Ich stehe um sechs auf.', 'Ich stehe auf um sechs.', 'Ich auf um sechs stehe.'],
      answer: 1,
      explain: 'Verb in position 2, prefix at the end: "Ich stehe um sechs auf."'
    },
    gap: {
      // separable verbs: anrufen (ich) split
      sentence: ['Ich ', ' dich später ', '.'],
      gaps: [ { answer: 'rufe', accepts: ['rufe'] }, { answer: 'an', accepts: ['an'] } ],
      explain: 'anrufen splits: ich rufe dich … an.'
    },
    match: {
      q: 'Match each separable verb to its English.',
      pairs: [
        { noun: 'aufstehen', art: 'to get up' },
        { noun: 'anrufen', art: 'to call' },
        { noun: 'einkaufen', art: 'to shop' },
        { noun: 'mitkommen', art: 'to come along' }
      ]
    },
    builder: {
      target: 'Build: "I get up early." (aufstehen)',
      bank: ['Ich', 'stehe', 'früh', 'auf'],
      answer: ['Ich', 'stehe', 'früh', 'auf'],
      roles: { 'Ich': 'r-subject', 'stehe': 'r-verb', 'früh': 'r-adverb', 'auf': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'In a statement, where does the separable prefix go?', options: ['position 1', 'position 2', 'at the end', 'before the verb'], answer: 2,
      explain: 'Verb in position 2; the prefix flies to the end.' },
    { q: 'Complete: "Wir ___ heute ___." (einkaufen)', options: ['einkaufen / —', 'kaufen / ein', 'ein / kaufen', 'kaufen ein / —'], answer: 1,
      explain: 'einkaufen splits: wir kaufen … ein.' },
    { q: 'Which is correct after a modal?', options: ['Ich muss früh aufstehe.', 'Ich muss früh auf stehen.', 'Ich muss früh aufstehen.', 'Ich muss früh stehe auf.'], answer: 2,
      explain: 'After a modal the verb stays whole: "… aufstehen."' },
    { q: 'Make a question: "___ du ___?" (mitkommen)', options: ['Kommst / mit', 'Mitkommst / —', 'Kommst mit / —', 'Mit / kommst'], answer: 0,
      explain: 'Verb first, prefix at the end: "Kommst du mit?"' },
    { q: 'Which verb does NOT separate?', options: ['aufstehen', 'beginnen', 'anrufen', 'einkaufen'], answer: 1,
      explain: 'beginnen has an inseparable prefix — it never splits.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'A separable verb splits: conjugated stem in <strong>position 2</strong>, prefix at the <strong>end</strong> — <span class="de">Ich stehe um sechs auf.</span>' },
    { c: 'r-verb', html: 'In questions the prefix still waits at the end: <span class="de">Kommst du mit?</span> After a modal it stays whole: <span class="de">Ich muss aufstehen.</span>' },
    { c: 'r-verb', html: 'The prefix carries the meaning: <span class="de">anmachen</span> (on) vs <span class="de">ausmachen</span> (off). Inseparable: <span class="de">beginnen</span>.' }
  ],
  revisionTips: [
    'Say each separable verb as a "sandwich": stem early, prefix last — stehe … auf.',
    'After a modal, keep the verb whole: "Ich will mitkommen."',
    'Learn the prefix with the verb — it changes the meaning (anmachen vs ausmachen).'
  ]
};

window.CHAPTER = CHAPTER;
