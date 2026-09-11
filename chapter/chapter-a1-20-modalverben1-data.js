/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 2 · Chapter 20
   "Modalverben 1"  (können · müssen · wollen · möchten)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-20 word list (18 words).
   Recycles Chapters 1–19 throughout. Theme = weekend plans.
============================================================ */
const CHAPTER = {
  id: 'a1-20-modalverben1',
  phase: 'A1 · Phase 2',
  number: 20,
  title: 'Modalverben 1',
  titleEn: 'Modal Verbs 1',
  description: 'Modal verbs let you say what you can, must, want and would like to do. Meet können, müssen, wollen and möchten — and the one structural trick behind them all: the modal sits in position 2 and the main verb jumps to the very end (the Satzklammer).',
  xp: 160,
  time: 30,
  difficulty: 'Beginner',
  nextChapter: { number: 21, title: 'Uhrzeit', titleEn: 'Telling the Time' , href: 'chapter-a1-21-uhrzeit.html' },

  heroAnimationPath: null,

  // ---------- Story Dialogue (signature section — before vocab/grammar) ----------
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'A party is coming. Jule wants to plan it, Finn definitely wants to come, and Finn must finish his homework first. As they sort out who can do what, every sentence shows the same shape — modal in position 2, main verb at the very end.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the modal + infinitive "bracket" in real speech'
    ],
    scene: 'Nach dem Kurs \u2014 Sprachschule, Berlin',
    femaleSpeakers: ['Jule'],
    dialogue: [
      { speaker: 'Jule', tokens: [
        { w: 'Finn', role: 'r-name', en: 'Finn', hi: 'फ़िन', pron: 'fin', type: 'Name · person' },
        { w: ',', plain: true },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'machen', role: 'r-verb', en: 'are having', hi: 'करते हैं', pron: 'MA-khen', type: 'Verb · machen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Party', role: 'r-akkusativ', en: 'party', hi: 'पार्टी', pron: 'PAR-ti', type: 'Noun · fem.', why: 'die Party (this chapter).', ex: 'Wir machen eine Party.', exEn: 'We are having a party.' },
        { w: '.', plain: true },
        { w: 'Kommst', role: 'r-verb', en: 'are you coming', hi: 'आते हो', pron: 'komst', type: 'Verb · kommen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Finn, tomorrow we are having a party. Are you coming?', hi: 'Finn, kal hum party kar rahe hain. Tum aaoge?' },
      { speaker: 'Finn', side: 'right', tokens: [
        { w: 'Klar', role: 'r-adverb', en: 'sure', hi: 'बिल्कुल', pron: 'klahr', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'will', role: 'r-modalverb', en: 'want to', hi: 'चाहता हूँ', pron: 'vil', type: 'Modal · wollen (ich)', why: 'wollen = to want (this chapter).', ex: 'Ich will kommen.', exEn: 'I want to come.' },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: 'kommen', role: 'r-verb', en: 'come', hi: 'आना', pron: 'KO-men', type: 'Verb · infinitive (Satzende)', why: 'The modal sends the infinitive to the end (this chapter).', ex: 'Ich will kommen.', exEn: 'I want to come.' },
        { w: '.', plain: true },
        { w: 'Was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'kann', role: 'r-modalverb', en: 'can', hi: 'सकता हूँ', pron: 'kan', type: 'Modal · können (ich)', why: 'können = can (this chapter).', ex: 'Was kann ich machen?', exEn: 'What can I do?' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'machen', role: 'r-verb', en: 'do', hi: 'करना', pron: 'MA-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Sure! I would like to come. What can I do?', hi: 'Bilkul! Main khushi se aana chahta hoon. Main kya kar sakta hoon?' },
      { speaker: 'Jule', tokens: [
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'kannst', role: 'r-modalverb', en: 'can', hi: 'सकते हो', pron: 'kanst', type: 'Modal · können (du)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Musik', role: 'r-akkusativ', en: 'music', hi: 'संगीत', pron: 'mu-ZEEK', type: 'Noun · fem.' },
        { w: 'machen', role: 'r-verb', en: 'do', hi: 'करना', pron: 'MA-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'करना है', pron: 'MÜ-sen', type: 'Modal · müssen (wir)', why: 'müssen = must / have to (this chapter).', ex: 'Wir müssen planen.', exEn: 'We have to plan.' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी', pron: 'nokh', type: 'Adverb' },
        { w: 'das', role: 'r-akkusativ', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Essen', role: 'r-akkusativ', en: 'food', hi: 'खाना', pron: 'E-sen', type: 'Noun · neut.' },
        { w: 'planen', role: 'r-verb', en: 'plan', hi: 'योजना बनाना', pron: 'PLAH-nen', type: 'Verb · infinitive (Satzende)', why: 'planen (this chapter).', ex: 'Wir planen das Essen.', exEn: 'We plan the food.' },
        { w: '.', plain: true }
      ], en: 'You can do the music. We still have to plan the food.', hi: 'Tum music kar sakte ho. Hamein abhi khaane ki planning karni hai.' },
      { speaker: 'Finn', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'möchte', role: 'r-modalverb', en: 'would like', hi: 'चाहता हूँ', pron: 'MÖKH-tuh', type: 'Modal · möchten (ich)', why: 'möchten = would like — the polite wish (this chapter).', ex: 'Ich möchte Pizza essen.', exEn: 'I would like to eat pizza.' },
        { w: 'Pizza', role: 'r-akkusativ', en: 'pizza', hi: 'पिज़्ज़ा', pron: 'PIT-sa', type: 'Noun · fem.' },
        { w: 'essen', role: 'r-verb', en: 'eat', hi: 'खाना', pron: 'E-sen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true },
        { w: 'Können', role: 'r-modalverb', en: 'can', hi: 'सकते हैं', pron: 'KÖ-nen', type: 'Modal · können (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'Pizza', role: 'r-akkusativ', en: 'pizza', hi: 'पिज़्ज़ा', pron: 'PIT-sa', type: 'Noun · fem.' },
        { w: 'bestellen', role: 'r-verb', en: 'order', hi: 'ऑर्डर करना', pron: 'be-SHTE-len', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'I would like to eat pizza. Can we order pizza?', hi: 'Main pizza khaana chahta hoon. Kya hum pizza order kar sakte hain?' },
      { speaker: 'Jule', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'können', role: 'r-modalverb', en: 'can', hi: 'सकते हैं', pron: 'KÖ-nen', type: 'Modal · können (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'machen', role: 'r-verb', en: 'do', hi: 'करना', pron: 'MA-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'musst', role: 'r-modalverb', en: 'must', hi: 'करना होगा', pron: 'must', type: 'Modal · müssen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'bezahlen', role: 'r-verb', en: 'pay', hi: 'भुगतान करना', pron: 'be-TSAH-len', type: 'Verb · infinitive (Satzende)' },
        { w: '!', plain: true }
      ], en: 'Yes, we can do that. But then you have to pay!', hi: 'Haan, hum yeh kar sakte hain. Par phir tumhein paise dene honge!' },
      { speaker: 'Finn', side: 'right', tokens: [
        { w: 'Hmm', role: 'r-adverb', en: 'hmm', hi: 'हम्म', pron: 'hm', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'will', role: 'r-modalverb', en: 'want to', hi: 'चाहता हूँ', pron: 'vil', type: 'Modal · wollen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Stück', role: 'r-akkusativ', en: 'piece', hi: 'टुकड़ा', pron: 'shtük', type: 'Noun · neut.' },
        { w: 'essen', role: 'r-verb', en: 'eat', hi: 'खाना', pron: 'E-sen', type: 'Verb · infinitive (Satzende)' },
        { w: '!', plain: true }
      ], en: 'Hmm. Then I only want to eat one piece!', hi: 'Hmm. Toh main sirf ek tukda khaana chahta hoon!' },
      { speaker: 'Jule', tokens: [
        { w: 'Typisch', role: 'r-adjective', en: 'typical', hi: 'बिल्कुल तुम्हारे जैसा', pron: 'TÜ-pish', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Okay', role: 'r-adverb', en: 'okay', hi: 'ठीक है', pron: 'o-KAY', type: 'Reaction' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bestelle', role: 'r-verb', en: 'order', hi: 'ऑर्डर करती हूँ', pron: 'be-SHTE-luh', type: 'Verb · bestellen (ich)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Pizza', role: 'r-akkusativ', en: 'pizza', hi: 'पिज़्ज़ा', pron: 'PIT-sa', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'machst', role: 'r-verb', en: 'do', hi: 'करते हो', pron: 'makhst', type: 'Verb · machen (du)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Musik', role: 'r-akkusativ', en: 'music', hi: 'संगीत', pron: 'mu-ZEEK', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Typical! Okay, I will order the pizza. You do the music.', hi: 'Bilkul tumhaare jaisa! Theek hai, main pizza order karungi. Tum music karo.' },
      { speaker: 'Finn', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Bis', role: 'r-subject', en: 'until', hi: 'तक', pron: 'bis', type: 'Phrase (part)' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: ',', plain: true },
        { w: 'Jule', role: 'r-name', en: 'Jule', hi: 'यूले', pron: 'YOO-luh', type: 'Name · person' },
        { w: '!', plain: true }
      ], en: 'Perfect! See you tomorrow, Jule!', hi: 'Badhiya! Kal milte hain, Jule!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A modal verb pairs with a second verb to say what you <em>can</em>, <em>must</em>, <em>want</em> or <em>would like</em> to do. The structure never changes: the <span class="de r-modalverb">modal</span> takes position 2, and the main verb \u2014 always an <strong>infinitive</strong> \u2014 jumps to the very end. <span class="de">Ich <u>muss</u> heute Deutsch <u>lernen</u>.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is MODAL VERBS 1: können (can/ability), müssen (must/necessity), wollen (want/intention), and möchten (would like/polite wish). ' +
    'The learner wrote sentences using modal verbs below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- A modal verb takes position 2 (or first in a yes/no question); the MAIN verb is an infinitive at the very END: "Ich kann gut schwimmen." / "Kannst du heute kommen?"\n' +
    '- können: ich kann, du kannst, er/sie/es kann, wir können, ihr könnt, sie/Sie können.\n' +
    '- müssen: ich muss, du musst, er muss, wir müssen, ihr müsst, sie müssen.\n' +
    '- wollen: ich will, du willst, er will, wir wollen, ihr wollt, sie wollen.\n' +
    '- möchten: ich möchte, du möchtest, er möchte, wir möchten, ihr möchtet, sie möchten. (Polite; no stem change.)\n' +
    '- The ich and er/sie/es forms of können/müssen/wollen have NO ending and a changed stem vowel (kann, muss, will). Never add -e to them.\n' +
    '- Only ONE conjugated verb per clause — the modal. The other verb stays infinitive. Do not conjugate both.\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Bracket check:</b> one sentence on whether the modal is position 2 and the infinitive is at the end.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — your modals sit in position 2 and the infinitive lands at the end. On to <span class="de">Trennbare Verben</span>.',
    mid: 'Good. Re-read the conjugation card and the "infinitive at the end" card once, then continue.',
    low: 'Worth another pass — focus on the modal conjugations and sentence bracket in the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'muss', role: 'r-modalverb' },
    { w: 'heute', role: 'r-time' }, { w: 'lernen', role: 'r-verb' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one structure behind every modal-verb sentence.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Plan a party with Jule and Jule — hear can/must/want/would-like in a real chat.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the four modal verbs and the planning words around them.' },
    { id: 'grammar',    label: 'Modal verbs', tag: 'core',
      objective: 'Master können/müssen/wollen/möchten, their conjugations, and the modal + infinitive bracket.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a party-plan text full of modal verbs and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch who can, must, and wants to do what, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say what you can, must and would like to do, and ask polite requests.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five modal-verb sentences and a short paragraph about duties and wishes.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill conjugation, the sentence bracket, and error correction with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All four modal verbs plus the planning words, with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Conjugation grids, sentence-bracket drills, error correction, and a modal-verb writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'können / müssen / wollen / möchten, full conjugation tables, the Satzklammer, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich kann …', text: 'Say what you can do' },
    { de: 'Ich muss …', text: 'Say what you must do' },
    { de: 'Ich will …', text: 'Say what you want to do' },
    { de: 'Ich möchte …', text: 'Make a polite wish or request' },
    { de: '… + Infinitiv', text: 'Send the main verb to the end' }
  ],

  // ---------- Vocabulary (18 words) ----------
  vocab: [
    // ===== Core Active (modal verbs) =====
    { de: 'können', pos: 'verb', en: 'can, to be able to', hi: 'सकना', ex: 'Ich kann gut schwimmen.', exEn: 'I can swim well.', conj: { praesens: 'kann', praeteritum: 'konnte', perfekt: 'hat gekonnt' } },
    { de: 'müssen', pos: 'verb', en: 'must, to have to', hi: 'करना ही पड़ना', ex: 'Ich muss heute lernen.', exEn: 'I must study today.', conj: { praesens: 'muss', praeteritum: 'musste', perfekt: 'hat gemusst' } },
    { de: 'wollen', pos: 'verb', en: 'to want', hi: 'चाहना', ex: 'Ich will Kaffee trinken.', exEn: 'I want to drink coffee.', conj: { praesens: 'will', praeteritum: 'wollte', perfekt: 'hat gewollt' } },
    // ===== Active Support =====
    { de: 'Stress', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'stress', hi: 'तनाव', ex: 'Das ist zu viel Stress.', exEn: 'That is too much stress.' },
    { de: 'Hausaufgabe', art: 'die', gender: 'f', plural: 'Hausaufgaben', pos: 'noun', en: 'homework', hi: 'गृहकार्य', ex: 'Ich muss die Hausaufgabe machen.', exEn: 'I must do the homework.' },
    { de: 'Idee', art: 'die', gender: 'f', plural: 'Ideen', pos: 'noun', en: 'idea', hi: 'विचार', ex: 'Das ist eine gute Idee!', exEn: 'That is a good idea!' },
    { de: 'Party', art: 'die', gender: 'f', plural: 'Partys', pos: 'noun', en: 'party', hi: 'पार्टी', ex: 'Wir wollen eine Party machen.', exEn: 'We want to have a party.' },
    { de: 'hoffentlich', pos: 'adverb', en: 'hopefully', hi: 'उम्मीद है', ex: 'Hoffentlich können alle kommen.', exEn: 'Hopefully everyone can come.' },
    { de: 'leider', pos: 'adverb', en: 'unfortunately', hi: 'दुर्भाग्य से', ex: 'Leider muss ich lernen.', exEn: 'Unfortunately I have to study.' },
    { de: 'nächste/nächster', pos: 'adjective', en: 'next', hi: 'अगला', ex: 'Nächste Woche feiern wir.', exEn: 'Next week we celebrate.' },
    { de: 'planen', pos: 'verb', en: 'to plan', hi: 'योजना बनाना', ex: 'Wir müssen das Essen planen.', exEn: 'We must plan the food.', conj: { praesens: 'plant', praeteritum: 'plante', perfekt: 'hat geplant' } },
    { de: 'stressig', pos: 'adjective', en: 'stressful', hi: 'तनावपूर्ण', ex: 'Die Woche ist stressig.', exEn: 'The week is stressful.' },
    // ===== Passive =====
    { de: 'Sprachkurs', art: 'der', gender: 'm', plural: 'Sprachkurse', pos: 'noun', en: 'language course', hi: 'भाषा कोर्स', ex: 'Der Sprachkurs ist toll.', exEn: 'The language course is great.' },
    { de: 'schade', pos: 'adjective', en: 'a pity, a shame', hi: 'अफ़सोस', ex: 'Schade, du kannst nicht kommen.', exEn: 'A pity you can\'t come.' },
    { de: 'verschieden', pos: 'adjective', en: 'different, various', hi: 'अलग-अलग', ex: 'Wir haben verschiedene Ideen.', exEn: 'We have different ideas.' },
    // ===== Reference / System =====
    { de: 'Modalverb', art: 'das', gender: 'n', plural: 'Modalverben', pos: 'noun', en: 'modal verb', hi: 'सहायक क्रिया', ex: '"Können" ist ein Modalverb.', exEn: '"Können" is a modal verb.' },
    { de: 'Satzende', art: 'das', gender: 'n', plural: 'Satzenden', pos: 'noun', en: 'end of the sentence', hi: 'वाक्य का अंत', ex: 'Das Verb steht am Satzende.', exEn: 'The verb is at the end of the sentence.' },
    { de: 'Satzklammer', art: 'die', gender: 'f', plural: 'Satzklammern', pos: 'noun', en: 'sentence bracket', hi: 'वाक्य कोष्ठक', ex: 'Modalverb und Infinitiv bilden die Satzklammer.', exEn: 'Modal and infinitive form the sentence bracket.' }
  ],

  // ---------- Modal verbs (rule cards → accordion) ----------
  grammar: [
    {
      title: 'What modal verbs do',
      goldenRule: 'A modal never works alone — it always brings a second verb, and that second verb goes to the end.',
      memoryTrick: 'Modal batata hai ki kaam kaisa hai — zaroori hai, possible hai, ya tum chahte ho. Asli kaam wala verb sentence ke end mein intezaar karta hai.',
      body: [
        'A modal verb adds a layer of meaning to another verb — ability, necessity, desire or a polite wish. Four to learn now:'
      ],
      table: {
        head: ['Modal', 'Meaning', 'Example'],
        rows: [
          ['<span class="de r-modalverb">können</span>', 'can / be able to (ability)', '<span class="de">Ich kann schwimmen.</span>'],
          ['<span class="de r-modalverb">müssen</span>', 'must / have to (necessity)', '<span class="de">Ich muss lernen.</span>'],
          ['<span class="de r-modalverb">wollen</span>', 'want to (intention)', '<span class="de">Ich will kommen.</span>'],
          ['<span class="de r-modalverb">möchten</span>', 'would like (polite wish)', '<span class="de">Ich möchte Tee.</span>']
        ]
      },
      note: '<b>wollen</b> is a strong "want"; <b>möchten</b> is the polite "would like" — use möchten in cafés and shops. Both are everywhere in daily life.',
      hinglish: 'Modal verb doosre verb ko matlab deta hai: <b>können</b> (sakna), <b>müssen</b> (karna hi padna), <b>wollen</b> (chahna), <b>möchten</b> (polite "chahunga"). Café/shop mein aksar <b>möchten</b> behtar lagta hai — "wollen" thoda seedha aur blunt sunai deta hai.'
    },
    {
      title: 'The sentence bracket — infinitive at the end',
      goldenRule: 'Modal in slot 2, infinitive at the very end. Everything else sits <b>between</b> them.',
      why: 'German builds a frame: you hear the modal early, so you know a second verb is coming, and the sentence stays open until that verb lands. This bracket is the same shape you will meet again in the Perfekt — helper early, second verb-part last.',
      formula: [
        'Ich <b>muss</b> heute <b>lernen</b>.',
        'Ich <b>kann</b> gut Deutsch <b>sprechen</b>.',
        '     ↑ slot 2                    ↑ end'
      ],
      memoryTrick: 'Do verb hote hain aur dono alag-alag jagah baithte hain: modal position 2 par, aur infinitive sentence ke end mein. Beech mein baaki sab kuch aa jaata hai.',
      recap: [
        'Only the <b>modal</b> is conjugated.',
        'The second verb stays an infinitive and goes last.',
        'Never put <b>zu</b> between them.'
      ],
      body: [
        'This is the key structure. The <strong>modal</strong> takes position 2; the <strong>main verb</strong> becomes an infinitive and goes to the very END. Together they "bracket" the sentence (die Satzklammer).'
      ],
      table: {
        head: ['Position 1', 'Modal (2)', 'middle', 'Infinitive (end)'],
        rows: [
          ['<span class="de">Ich</span>', '<span class="de r-modalverb">muss</span>', '<span class="de">heute</span>', '<span class="de r-verb">lernen.</span>'],
          ['<span class="de">Ich</span>', '<span class="de r-modalverb">kann</span>', '<span class="de">gut Deutsch</span>', '<span class="de r-verb">sprechen.</span>'],
          ['<span class="de">Wir</span>', '<span class="de r-modalverb">wollen</span>', '<span class="de">eine Party</span>', '<span class="de r-verb">machen.</span>'],
          ['<span class="de">Ich</span>', '<span class="de r-modalverb">möchte</span>', '<span class="de">einen Tee</span>', '<span class="de r-verb">bestellen.</span>']
        ]
      },
      note: 'Only ONE verb is conjugated — the modal. The other stays in its dictionary (infinitive) form and waits at the end. Everything else sits in the middle.',
      hinglish: 'Yeh sabse zaroori structure hai: <b>modal</b> position 2 pe, aur <b>main verb</b> infinitive ban kar bilkul END mein. Sirf ek verb conjugate hota hai (modal); doosra apni dictionary form mein end pe rukta hai. Ise <b>Satzklammer</b> kehte hain.'
    },
    {
      title: 'Conjugation — können, müssen, wollen',
      goldenRule: '<b>ich</b> and <b>er/sie/es</b> are identical and take <b>no ending</b> — and the singular changes its vowel.',
      memoryTrick: 'Modal ka singular <b>bilkul plain</b> hota hai — koi ending nahi: ich kann, er kann. Aur vowel badal jaata hai: können → <b>kann</b>.',
      body: [
        'These three share a pattern: the ich and er/sie/es forms have <strong>no ending</strong> and a <strong>changed stem vowel</strong>.'
      ],
      table: {
        head: ['', 'können', 'müssen', 'wollen'],
        rows: [
          ['ich', '<span class="de r-modalverb">kann</span>', '<span class="de r-modalverb">muss</span>', '<span class="de r-modalverb">will</span>'],
          ['du', '<span class="de r-modalverb">kannst</span>', '<span class="de r-modalverb">musst</span>', '<span class="de r-modalverb">willst</span>'],
          ['er/sie/es', '<span class="de r-modalverb">kann</span>', '<span class="de r-modalverb">muss</span>', '<span class="de r-modalverb">will</span>'],
          ['wir / sie / Sie', '<span class="de r-modalverb">können</span>', '<span class="de r-modalverb">müssen</span>', '<span class="de r-modalverb">wollen</span>'],
          ['ihr', '<span class="de r-modalverb">könnt</span>', '<span class="de r-modalverb">müsst</span>', '<span class="de r-modalverb">wollt</span>']
        ]
      },
      note: 'Notice <b>ich</b> and <b>er/sie/es</b> are identical (kann/kann, muss/muss, will/will) — no -e, no -t. The stem vowel changes in the singular: können→kann, müssen→muss, wollen→will.',
      hinglish: 'Teeno ka pattern same: <b>ich</b> aur <b>er/sie/es</b> ek jaise hain (kann/kann) — koi ending nahi. Singular mein stem vowel badalta hai: können→kann, müssen→muss, wollen→will. Yaad rakho: ich kann, du kannst, er kann.'
    },
    {
      title: 'möchten & questions',
      body: [
        '<span class="de r-modalverb">möchten</span> is the polite favourite, and modals form questions just like any other verb.'
      ],
      table: {
        head: ['', 'Form / Example'],
        rows: [
          ['möchten (ich/er)', '<span class="de">ich möchte, du möchtest, er möchte</span>'],
          ['polite wish', '<span class="de">Ich möchte einen Kaffee bestellen.</span>'],
          ['Ja/Nein question', '<span class="de">Kannst du mir helfen?</span> (modal first)'],
          ['W-Frage', '<span class="de">Was möchtest du trinken?</span> (modal position 2)']
        ]
      },
      note: 'For yes/no questions the modal goes FIRST: "Kannst du …?", "Müssen wir …?". For W-Fragen the modal stays in position 2. The infinitive still waits at the end.',
      hinglish: '<b>möchten</b> polite hai: ich möchte, du möchtest. Ja/Nein sawaal mein modal sabse pehle: "Kannst du mir helfen?". W-Frage mein modal position 2 pe: "Was möchtest du trinken?". Infinitive phir bhi end mein rukta hai.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four modal-verb traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich kann sprechen Deutsch.', right: 'Ich kann Deutsch sprechen.', why: 'The infinitive goes to the very end, after the object.' },
        { wrong: 'Ich will zu lernen.', right: 'Ich will lernen.', why: 'No "zu" after a modal — just the plain infinitive.' },
        { wrong: 'Ich kanne schwimmen.', right: 'Ich kann schwimmen.', why: 'ich-form of können has no ending: kann, not kanne.' },
        { wrong: 'Ich muss lerne heute.', right: 'Ich muss heute lernen.', why: 'Only the modal is conjugated; the main verb stays infinitive at the end.' }
      ],
      hinglish: 'Char galtiyan common hain. Infinitive sentence ke end mein aata hai, object ke baad: <b>Ich kann Deutsch sprechen</b>. Modal ke baad <b>zu</b> nahi lagta: <b>Ich will lernen</b>. <b>ich</b>-form par koi ending nahi lagti: <b>kann</b>, na ki \u201ckanne\u201d. Aur sirf modal conjugate hota hai \u2014 main verb end mein infinitive ban kar rehta hai: <b>Ich muss heute lernen</b>.'
    }
  ],

  // ---------- Reading passage (party plan, clickable) ----------
  reading: {
    title: 'Die Party am Samstag',
    titleEn: 'The party on Saturday',
    tokens: [
      { w: 'Am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition + time' },
      { w: 'Samstag', role: 'r-time', en: 'Saturday', hi: 'शनिवार', pron: 'ZAMS-tahk', type: 'Noun · day', why: 'der Samstag (recycled — Hobbies).', ex: 'Am Samstag feiern wir.', exEn: 'On Saturday we celebrate.' },
      { w: 'wollen', role: 'r-modalverb', en: 'want', hi: 'चाहते हैं', pron: 'VO-len', type: 'Modal · wollen (wir)', why: 'Modal position 2 after front time word (this chapter).', ex: 'Wir wollen feiern.', exEn: 'We want to celebrate.' },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · acc.' },
      { w: 'Party', role: 'r-object', en: 'party', hi: 'पार्टी', pron: 'PAR-tee', type: 'Noun · fem.', why: 'die Party (this chapter).', ex: 'eine Party machen', exEn: 'to have a party' },
      { w: 'machen', role: 'r-verb', en: 'have', hi: 'करना', pron: 'MA-khen', type: 'Verb · infinitive', why: 'Infinitive at the end (this chapter).', ex: 'Wir wollen eine Party machen.', exEn: 'We want to have a party.' },
      { w: '.', plain: true },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'will', role: 'r-modalverb', en: 'wants', hi: 'चाहता है', pron: 'vil', type: 'Modal · wollen (er)', why: 'wollen: er will (this chapter).', ex: 'Max will Musik machen.', exEn: 'Max wants to do the music.' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · acc.' },
      { w: 'Musik', role: 'r-object', en: 'music', hi: 'संगीत', pron: 'mu-ZEEK', type: 'Noun · fem.', why: 'die Musik (recycled — Hobbies).', ex: 'die Musik machen', exEn: 'to do the music' },
      { w: 'machen', role: 'r-verb', en: 'do', hi: 'संभालना', pron: 'MA-khen', type: 'Verb · infinitive' },
      { w: '.', plain: true },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name' },
      { w: 'muss', role: 'r-modalverb', en: 'must', hi: 'करना है', pron: 'mus', type: 'Modal · müssen (er)', why: 'müssen: er muss (this chapter).', ex: 'Rohan muss lernen.', exEn: 'Rohan must study.' },
      { w: 'zuerst', role: 'r-adverb', en: 'first', hi: 'पहले', pron: 'tsu-AIRST', type: 'Adverb', why: 'zuerst (recycled — Goethe Mini 2).', ex: 'zuerst lernen', exEn: 'study first' },
      { w: 'seine', role: 'r-akkusativ', en: 'his (fem. acc.)', hi: 'अपना', pron: 'ZY-nuh', type: 'Possessive · acc.' },
      { w: 'Hausaufgabe', role: 'r-object', en: 'homework', hi: 'गृहकार्य', pron: 'HOWS-owf-gah-buh', type: 'Noun · fem.', why: 'die Hausaufgabe (this chapter).', ex: 'die Hausaufgabe machen', exEn: 'to do the homework' },
      { w: 'machen', role: 'r-verb', en: 'do', hi: 'करना', pron: 'MA-khen', type: 'Verb · infinitive' },
      { w: '.', plain: true },
      { w: 'Danach', role: 'r-adverb', en: 'afterwards', hi: 'उसके बाद', pron: 'da-NAKH', type: 'Adverb', why: 'danach (recycled — Hobbies).', ex: 'Danach kann er kommen.', exEn: 'Afterwards he can come.' },
      { w: 'kann', role: 'r-modalverb', en: 'can', hi: 'सकता है', pron: 'kan', type: 'Modal · können (er)', why: 'Modal position 2 after front adverb (this chapter).', ex: 'Danach kann er kommen.', exEn: 'Afterwards he can come.' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'kommen', role: 'r-verb', en: 'come', hi: 'आना', pron: 'KO-men', type: 'Verb · infinitive', why: 'Infinitive at the end (this chapter).', ex: 'Danach kann er kommen.', exEn: 'Afterwards he can come.' },
      { w: '.', plain: true },
      { w: 'Alle', role: 'r-subject', en: 'everyone', hi: 'सभी', pron: 'A-luh', type: 'Pronoun' },
      { w: 'möchten', role: 'r-modalverb', en: 'would like', hi: 'चाहते हैं', pron: 'MÖKH-ten', type: 'Modal · möchten (alle)', why: 'möchten = polite wish (this chapter).', ex: 'Alle möchten Pizza essen.', exEn: 'Everyone would like to eat pizza.' },
      { w: 'Pizza', role: 'r-object', en: 'pizza', hi: 'पिज़्ज़ा', pron: 'PI-tsa', type: 'Noun · fem.', why: 'die Pizza (recycled — Essen & Trinken).', ex: 'Pizza essen', exEn: 'eat pizza' },
      { w: 'essen', role: 'r-verb', en: 'eat', hi: 'खाना', pron: 'E-sen', type: 'Verb · infinitive' },
      { w: '.', plain: true },
      { w: 'Hoffentlich', role: 'r-adverb', en: 'hopefully', hi: 'उम्मीद है', pron: 'HO-fent-likh', type: 'Adverb', why: 'hoffentlich (this chapter).', ex: 'Hoffentlich kommen alle.', exEn: 'Hopefully everyone comes.' },
      { w: 'wird', role: 'r-verb', en: 'will be', hi: 'होगी', pron: 'virt', type: 'Verb · werden', why: 'werden (recycled — Unregelmäßige Verben).', ex: 'Es wird super.', exEn: 'It will be great.' },
      { w: 'die', role: 'r-article', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Party', role: 'r-subject', en: 'party', hi: 'पार्टी', pron: 'PAR-tee', type: 'Noun · fem.' },
      { w: 'super', role: 'r-adjective', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Adjective', why: 'sein/werden + adjective (Chapter 13).', ex: 'Die Party wird super.', exEn: 'The party will be great.' },
      { w: '!', plain: true }
    ],
    translation: 'On Saturday Anna and Max want to have a party. Max wants to do the music. Rohan must do his homework first. Afterwards he can come. Everyone would like to eat pizza. Hopefully the party will be great!'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_020_L001', speaker: 'Jule', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Finn, willst du morgen zusammen lernen?', en: 'Finn, do you want to study together tomorrow?' },
      { id: 'A1_020_L002', speaker: 'Finn', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich muss zuerst arbeiten, aber danach kann ich kommen.', en: 'I have to work first, but afterwards I can come.' },
      { id: 'A1_020_L003', speaker: 'Jule', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gut, wir wollen um vier anfangen.', en: 'Good, we want to start at four.' },
      { id: 'A1_020_L004', speaker: 'Finn', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Kann Max auch kommen?', en: 'Can Max come too?' },
      { id: 'A1_020_L005', speaker: 'Jule', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, aber er muss sein eigenes Buch mitbringen!', en: 'Yes, but he has to bring his own book!' }
    ],
    transcript: 'Finn, willst du morgen zusammen lernen? Ich muss zuerst arbeiten, aber danach kann ich kommen. Gut, wir wollen um vier anfangen. Kann Max auch kommen? Ja, aber er muss sein eigenes Buch mitbringen!',
    translation: 'Finn, do you want to study together tomorrow? I have to work first, but afterwards I can come. Good, we want to start at four. Can Max come too? Yes, but he has to bring his own book!',
    tokens: [
      { w: 'Finn' },
      { w: ',', plain: true },
      { w: 'willst' },
      { w: 'du' },
      { w: 'morgen' },
      { w: 'zusammen' },
      { w: 'lernen' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'muss' },
      { w: 'zuerst' },
      { w: 'arbeiten' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'danach' },
      { w: 'kann' },
      { w: 'ich' },
      { w: 'kommen' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'wir' },
      { w: 'wollen' },
      { w: 'um' },
      { w: 'vier' },
      { w: 'anfangen' },
      { w: '.', plain: true },
      { w: 'Kann' },
      { w: 'Max' },
      { w: 'auch' },
      { w: 'kommen' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'er' },
      { w: 'muss' },
      { w: 'sein' },
      { w: 'eigenes' },
      { w: 'Buch' },
      { w: 'mitbringen' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was muss Finn machen, bevor er mitkommen kann?', qEn: 'What must Finn do before he can join?', options: ['lernen', 'arbeiten', 'schlafen', 'einkaufen'], optionsEn: ['study', 'work', 'sleep', 'go shopping'], answer: 1,
        explain: '"Ich muss zuerst arbeiten."' },
      { q: 'Was muss Max mitbringen?', qEn: 'What must Max bring?', options: ['Essen', 'sein eigenes Buch', 'Musik', 'Geld'], optionsEn: ['food', 'his own book', 'music', 'money'], answer: 1,
        explain: '"Er muss sein eigenes Buch mitbringen!"' }
    ]
  },

  speaking: [
    { task: "Im Sprachkurs fragt die Lehrerin: Was kannst du gut?", taskEn: "In the language course the teacher asks: what can you do well?", de: "Ich kann gut kochen. Ich kann auch Fußball spielen.", en: "I can cook well. I can play football too." },
    { task: "Deine Freundin plant eine Party. Du musst aber die Hausaufgabe machen.", taskEn: "Your friend is planning a party. But you have to do your homework.", de: "Ich kann leider nicht kommen. Ich muss die Hausaufgabe machen.", en: "Unfortunately I can't come. I have to do my homework." },
    { task: "Der Kellner kommt an den Tisch. Was möchtest du?", taskEn: "The waiter comes to the table. What would you like?", de: "Ich möchte einen Kaffee, bitte.", en: "I'd like a coffee, please." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences using modal verbs about your week: one with können (what you can do), one with müssen (what you must do), one with wollen (what you want to do), and one with möchten (a polite wish). Keep the modal in position 2 and the main verb at the end.',
    starters: ['Ich kann …', 'Heute muss ich …', 'Am Wochenende will ich …', 'Ich möchte …'],
    placeholder: 'Ich kann gut schwimmen. Heute muss ich lernen …',
    minWords: 20
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct?',
      options: ['Ich kann sprechen Deutsch.', 'Ich kann Deutsch sprechen.', 'Ich Deutsch kann sprechen.', 'Ich kanne Deutsch sprechen.'],
      answer: 1,
      explain: 'Modal in position 2, infinitive at the end: "Ich kann Deutsch sprechen."'
    },
    gap: {
      // conjugate können (ich) + müssen (du)
      sentence: ['Ich ', ' heute nicht kommen, denn du ', ' arbeiten.'],
      gaps: [ { answer: 'kann', accepts: ['kann'] }, { answer: 'musst', accepts: ['musst'] } ],
      explain: 'ich kann (no ending), du musst.'
    },
    match: {
      q: 'Match each modal verb to its meaning.',
      pairs: [
        { noun: 'können', art: 'can' },
        { noun: 'müssen', art: 'must' },
        { noun: 'wollen', art: 'to want' },
        { noun: 'möchten', art: 'would like' }
      ]
    },
    builder: {
      target: 'Build: "I must study today."',
      bank: ['Ich', 'muss', 'heute', 'lernen'],
      answer: ['Ich', 'muss', 'heute', 'lernen'],
      roles: { 'Ich': 'r-subject', 'muss': 'r-modalverb', 'heute': 'r-time', 'lernen': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Where does the main (infinitive) verb go in a modal sentence?', options: ['position 1', 'position 2', 'at the end', 'after the subject'], answer: 2,
      explain: 'The modal is position 2; the infinitive goes to the very end (the bracket).' },
    { q: 'Complete: "Ich ___ heute lernen." (must)', options: ['muss', 'musse', 'musst', 'müssen'], answer: 0,
      explain: 'ich muss — no ending in the ich-form.' },
    { q: 'Which is the polite way to order?', options: ['Ich will einen Kaffee.', 'Ich möchte einen Kaffee.', 'Ich muss einen Kaffee.', 'Ich kann einen Kaffee.'], answer: 1,
      explain: 'möchten = "would like" — the polite wish.' },
    { q: 'Make a yes/no question: "___ du mir helfen?"', options: ['Kannst', 'Du kannst', 'Können', 'Kann'], answer: 0,
      explain: 'Yes/no question → modal first: "Kannst du mir helfen?"' },
    { q: 'Which sentence is WRONG?', options: ['Ich will kommen.', 'Ich will zu kommen.', 'Wir wollen feiern.', 'Sie will lernen.'], answer: 1,
      explain: 'No "zu" after a modal — just the plain infinitive: "Ich will kommen."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-modalverb', html: 'Four modals: <span class="de">können</span> (can), <span class="de">müssen</span> (must), <span class="de">wollen</span> (want), <span class="de">möchten</span> (would like).' },
    { c: 'r-verb', html: 'The bracket: modal in position 2, main verb as an <strong>infinitive at the end</strong> — <span class="de">Ich muss heute lernen.</span>' },
    { c: 'r-modalverb', html: 'ich = er/sie/es: <span class="de">kann, muss, will</span> — no ending. Polite orders use <span class="de">möchten</span>.' }
  ],
  revisionTips: [
    'Say every modal sentence as a "sandwich": modal early, infinitive last.',
    'Drill the singular: ich kann / du kannst / er kann — ich and er are identical.',
    'Use möchten, not wollen, whenever you order or ask politely.'
  ]
};

window.CHAPTER = CHAPTER;
