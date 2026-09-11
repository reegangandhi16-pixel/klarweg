/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 2 · Chapter 24
   "Datum & Ordinalzahlen"  (Dates, ordinals & big numbers)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-24 word list (66 words).
   Recycles Chapters 1–23 throughout. Theme = birthday planning.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-24-datum',
  phase: 'A1 · Phase 2',
  number: 24,
  title: 'Datum & Ordinalzahlen',
  titleEn: 'Dates & Ordinals',
  description: 'Say the date, name the months and seasons, and count the big numbers. Learn the ordinal numbers (der erste, der zweite, der dritte) and the one phrase that fixes every date in the calendar — am + ordinal + month.',
  xp: 160,
  time: 30,
  difficulty: 'Beginner',
  nextChapter: { number: 25, title: 'Trennbare Verben', titleEn: 'Separable Verbs' , href: 'chapter-a1-25-trennbar.html' },

  heroAnimationPath: null,

  // ---------- Story Dialogue (signature section — before vocab/grammar) ----------
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Katja\'s birthday is coming. Katja and Tobias plan a surprise party around the calendar — fixing the date, counting the guests, and sorting out gifts — so ordinal numbers and months come up in every line.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear "am dritten Mai" and the ordinal numbers in real speech'
    ],
    scene: 'Geburtstagsplanung \u2014 Sprachschule, Berlin',
    femaleSpeakers: ['Katja'],
    dialogue: [
      { speaker: 'Katja', tokens: [
        { w: 'Tobias', role: 'r-name', en: 'Tobias', hi: 'टोबियास', pron: 'to-BEE-as', type: 'Name · person' },
        { w: ',', plain: true },
        { w: 'wann', role: 'r-question', en: 'when', hi: 'कब', pron: 'van', type: 'Question word' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben (er/sie)' },
        { w: 'Lena', role: 'r-subject', en: 'Lena', hi: 'लेना', pron: 'LAY-na', type: 'Name · person' },
        { w: 'Geburtstag', role: 'r-akkusativ', en: 'birthday', hi: 'जन्मदिन', pron: 'ge-BOORTS-tahk', type: 'Noun · masc.', why: '"Geburtstag haben" = to have a birthday (this chapter).', ex: 'Wann hast du Geburtstag?', exEn: 'When is your birthday?' },
        { w: '?', plain: true }
      ], en: 'Tobias, when is Lena\u2019s birthday?', hi: 'Tobias, Lena ka janamdin kab hai?' },
      { speaker: 'Tobias', side: 'right', tokens: [
        { w: 'Am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition + date', why: 'Dates use am + ordinal (this chapter).', ex: 'am dritten Mai', exEn: 'on the third of May' },
        { w: 'dritten', role: 'r-time', en: 'third', hi: 'तीसरे', pron: 'DRI-ten', type: 'Ordinal number', why: 'drei → dritten (this chapter).', ex: 'am dritten Mai', exEn: 'on the third of May' },
        { w: 'Mai', role: 'r-time', en: 'May', hi: 'मई', pron: 'my', type: 'Noun · month' },
        { w: '.', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'bald', role: 'r-time', en: 'soon', hi: 'जल्द', pron: 'balt', type: 'Adverb · time' },
        { w: '!', plain: true }
      ], en: 'On the third of May. That is soon!', hi: 'Teen Mai ko. Yeh jald hai!' },
      { speaker: 'Katja', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'machen', role: 'r-verb', en: 'let us have', hi: 'करते हैं', pron: 'MA-khen', type: 'Verb · machen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Feier', role: 'r-akkusativ', en: 'celebration', hi: 'जश्न', pron: 'FY-er', type: 'Noun · fem.', why: 'die Feier (this chapter).', ex: 'Wir machen eine Feier.', exEn: 'We are having a celebration.' },
        { w: '.', plain: true },
        { w: 'Kannst', role: 'r-modalverb', en: 'can', hi: 'सकते हो', pron: 'kanst', type: 'Modal · können (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition + date' },
        { w: 'zweiten', role: 'r-time', en: 'second', hi: 'दूसरे', pron: 'TSVY-ten', type: 'Ordinal number', why: 'zwei → zweiten (this chapter).', ex: 'am zweiten Mai', exEn: 'on the second of May' },
        { w: 'Mai', role: 'r-time', en: 'May', hi: 'मई', pron: 'my', type: 'Noun · month' },
        { w: '?', plain: true }
      ], en: 'Then let us have a celebration. Can you make it on the second of May?', hi: 'Toh hum ek jashn karte hain. Kya tum do Mai ko aa sakte ho?' },
      { speaker: 'Tobias', side: 'right', tokens: [
        { w: 'Am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition + date' },
        { w: 'zweiten', role: 'r-time', en: 'second', hi: 'दूसरे', pron: 'TSVY-ten', type: 'Ordinal number' },
        { w: '?', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ihr', role: 'r-subject', en: 'her', hi: 'उसका', pron: 'eer', type: 'Possessive' },
        { w: 'Geburtstag', role: 'r-subject', en: 'birthday', hi: 'जन्मदिन', pron: 'ge-BOORTS-tahk', type: 'Noun · masc.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition + date' },
        { w: 'dritten', role: 'r-time', en: 'third', hi: 'तीसरे', pron: 'DRI-ten', type: 'Ordinal number' },
        { w: '!', plain: true }
      ], en: 'On the second? But her birthday is on the third!', hi: 'Do taarikh ko? Par uska janamdin teen ko hai!' },
      { speaker: 'Katja', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition + date' },
        { w: 'zweiten', role: 'r-time', en: 'second', hi: 'दूसरे', pron: 'TSVY-ten', type: 'Ordinal number' },
        { w: ',', plain: true },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition + date' },
        { w: 'dritten', role: 'r-time', en: 'third', hi: 'तीसरे', pron: 'DRI-ten', type: 'Ordinal number' },
        { w: '.', plain: true },
        { w: 'So', role: 'r-adverb', en: 'that way', hi: 'ऐसे', pron: 'zo', type: 'Adverb' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem.' },
        { w: 'Überraschung', role: 'r-object', en: 'surprise', hi: 'आश्चर्य', pron: 'ü-ber-RA-shung', type: 'Noun · fem.', why: 'die Überraschung (this chapter).', ex: 'Das ist eine Überraschung!', exEn: 'That is a surprise!' },
        { w: '.', plain: true }
      ], en: 'Exactly! On the second, not on the third. That way it is a surprise.', hi: 'Bilkul! Do ko, teen ko nahi. Aise yeh ek surprise hoga.' },
      { speaker: 'Tobias', side: 'right', tokens: [
        { w: 'Ach', role: 'r-subject', en: 'ah', hi: 'अच्छा', pron: 'akh', type: 'Reaction' },
        { w: 'so', role: 'r-adverb', en: 'I see', hi: 'समझा', pron: 'zo', type: 'Reaction', why: '"Ach so!" = ah, I see — a very natural spoken reaction.', ex: 'Ach so!', exEn: 'Ah, I see!' },
        { w: '!', plain: true },
        { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Idee', role: 'r-object', en: 'idea', hi: 'विचार', pron: 'i-DAY', type: 'Noun · fem.' },
        { w: '!', plain: true },
        { w: 'Wer', role: 'r-question', en: 'who', hi: 'कौन', pron: 'vair', type: 'Question word' },
        { w: 'kommt', role: 'r-verb', en: 'is coming', hi: 'आ रहा है', pron: 'komt', type: 'Verb · kommen (er/sie)' },
        { w: 'denn', role: 'r-adverb', en: 'then', hi: 'तो', pron: 'den', type: 'Particle' },
        { w: '?', plain: true }
      ], en: 'Ah, I see! Good idea! Who is coming?', hi: 'Achha samjha! Achha vichaar! Kaun aa raha hai?' },
      { speaker: 'Katja', tokens: [
        { w: 'Ungefähr', role: 'r-adverb', en: 'about', hi: 'लगभग', pron: 'UN-ge-fair', type: 'Adverb' },
        { w: 'zwanzig', role: 'r-object', en: 'twenty', hi: 'बीस', pron: 'TSVAN-tsikh', type: 'Number' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'schreibe', role: 'r-verb', en: 'write', hi: 'लिखती हूँ', pron: 'SHRY-buh', type: 'Verb · schreiben (ich)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Einladungen', role: 'r-akkusativ', en: 'invitations', hi: 'निमंत्रण', pron: 'INE-lah-dung-en', type: 'Noun · plural', why: 'die Einladung → die Einladungen (this chapter).', ex: 'Ich schreibe die Einladungen.', exEn: 'I write the invitations.' },
        { w: '.', plain: true }
      ], en: 'About twenty. I will write the invitations.', hi: 'Lagbhag bees. Main nimantran likhungi.' },
      { speaker: 'Tobias', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'kaufe', role: 'r-verb', en: 'buy', hi: 'खरीदता हूँ', pron: 'KOW-fuh', type: 'Verb · kaufen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Blumen', role: 'r-akkusativ', en: 'flowers', hi: 'फूल', pron: 'BLOO-men', type: 'Noun · plural', why: 'die Blume → die Blumen (this chapter).', ex: 'Ich kaufe Blumen.', exEn: 'I buy flowers.' },
        { w: '.', plain: true }
      ], en: 'Good! Then I will buy the flowers.', hi: 'Achha! Toh main phool khareedunga.' },
      { speaker: 'Katja', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ':', plain: true },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Feier', role: 'r-subject', en: 'celebration', hi: 'जश्न', pron: 'FY-er', type: 'Noun · fem.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition + date' },
        { w: 'zweiten', role: 'r-time', en: 'second', hi: 'दूसरे', pron: 'TSVY-ten', type: 'Ordinal number' },
        { w: 'Mai', role: 'r-time', en: 'May', hi: 'मई', pron: 'my', type: 'Noun · month' },
        { w: '.', plain: true }
      ], en: 'Perfect! Good: the celebration is on the second of May.', hi: 'Badhiya! Achha: jashn do Mai ko hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Cardinal numbers count (eins, zwei, drei); <strong>ordinal</strong> numbers rank (<span class="de r-time">der erste, der zweite, der dritte</span>). To fix a date, German uses one phrase: <span class="de">am</span> + ordinal + month \u2014 <span class="de">am dritten Mai</span> (on the 3rd of May). Build ordinals with <strong>-te</strong> up to 19 and <strong>-ste</strong> from 20 \u2014 with three irregulars: erste, dritte, siebte.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is DATES & ORDINAL NUMBERS (Datum & Ordinalzahlen): months, seasons, ordinals, and saying dates with "am + ordinal + month". ' +
    'The learner wrote sentences with dates below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Ordinals 1–19 add -te to the number; 20+ add -ste: viert→vierte, zwanzig→zwanzigste. Irregulars: erste (1st), dritte (3rd), siebte (7th), achte (8th).\n' +
    '- A date uses "der" to state it and "am" (+ dative -n) to schedule it: "Heute ist der erste Mai." / "Mein Geburtstag ist am ersten Mai."\n' +
    '- After "am", the ordinal ends in -en: am ersten, am zweiten, am dritten, am zwanzigsten.\n' +
    '- The 12 months are all masculine (der Januar … der Dezember) and use "im" for "in": im Mai, im Dezember. Seasons too: der Frühling/Sommer/Herbst/Winter → im Sommer.\n' +
    '- Years are usually said as plain numbers in modern German (zweitausendsechsundzwanzig) — do not force the older "neunzehnhundert" pattern.\n' +
    '- Big numbers: hundert (100), tausend (1000), eine Million, eine Milliarde. "einhundert"/"eintausend" are fine; ein is often dropped (hundert, tausend).\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Date check:</b> one sentence on whether the ordinal + "am … -en" was formed correctly.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — your dates and ordinals are spot on. On to <span class="de">Wegbeschreibung</span>.',
    mid: 'Good. Re-read the ordinal-building card and the "am + date" card once, then continue.',
    low: 'Worth another pass — focus on ordinals and the date phrase in the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Mein', role: 'r-article' }, { w: 'Geburtstag', role: 'r-subject' },
    { w: 'ist', role: 'r-verb' }, { w: 'am', role: 'r-preposition' },
    { w: 'dritten', role: 'r-time' }, { w: 'Mai', role: 'r-time' }, { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how ordinals and the date phrase work before you begin.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Plan Katja\u2019s surprise birthday with the group — hear dates and ordinals in a real chat.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the months, seasons, big numbers, and birthday & calendar words.' },
    { id: 'grammar',    label: 'Dates & ordinals', tag: 'core',
      objective: 'Build ordinal numbers, say the date with am + ordinal + month, and use the months and big numbers.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a calendar/birthday text and tap any word to hear it and see what it means.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch the dates, birthdays and the number of guests, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say and ask dates, and run a short birthday/appointment roleplay.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five date sentences and a short calendar note or birthday plan.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill ordinals, the date phrase, and big numbers with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All months, seasons, ordinals and big numbers plus birthday & calendar words, with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '14 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Ordinal-building drills, date writing, big-number practice, and a birthday-plan writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'Ordinal formation (-te / -ste + irregulars), am + ordinal + month, the months, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'der erste, zweite, dritte', text: 'Build ordinal numbers' },
    { de: 'am dritten Mai', text: 'Say a full date' },
    { de: 'Januar … Dezember', text: 'Name all twelve months' },
    { de: 'Wann hast du Geburtstag?', text: 'Ask & answer about birthdays' },
    { de: 'hundert, tausend, Million', text: 'Count the big numbers' }
  ],

  // ---------- Vocabulary (66 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'achtzig', pos: 'number', en: 'eighty', hi: 'अस्सी', ex: 'Mein Opa ist achtzig.', exEn: 'My grandpa is eighty.' },
    { de: 'Datum', art: 'das', gender: 'n', plural: 'Daten', pos: 'noun', en: 'date', hi: 'तारीख़', ex: 'Welches Datum ist heute?', exEn: 'What is the date today?' },
    { de: 'Jahr', art: 'das', gender: 'n', plural: 'Jahre', pos: 'noun', en: 'year', hi: 'साल', ex: 'Das Jahr hat zwölf Monate.', exEn: 'The year has twelve months.' },
    { de: 'April', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'April', hi: 'अप्रैल', ex: 'Im April ist es warm.', exEn: 'In April it is warm.' },
    { de: 'August', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'August', hi: 'अगस्त', ex: 'Der Kurs ist im August.', exEn: 'The course is in August.' },
    { de: 'Dezember', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'December', hi: 'दिसंबर', ex: 'Im Dezember ist Winter.', exEn: 'In December it is winter.' },
    { de: 'Februar', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'February', hi: 'फ़रवरी', ex: 'Februar ist kurz.', exEn: 'February is short.' },
    { de: 'Geburtstag', art: 'der', gender: 'm', plural: 'Geburtstage', pos: 'noun', en: 'birthday', hi: 'जन्मदिन', ex: 'Wann hast du Geburtstag?', exEn: 'When is your birthday?' },
    { de: 'Januar', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'January', hi: 'जनवरी', ex: 'Das Jahr beginnt im Januar.', exEn: 'The year begins in January.' },
    { de: 'Juli', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'July', hi: 'जुलाई', ex: 'Im Juli haben wir Ferien.', exEn: 'In July we have holidays.' },
    { de: 'Juni', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'June', hi: 'जून', ex: 'Mein Geburtstag ist im Juni.', exEn: 'My birthday is in June.' },
    { de: 'Mai', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'May', hi: 'मई', ex: 'Am ersten Mai ist frei.', exEn: 'The first of May is a holiday.' },
    { de: 'Monat', art: 'der', gender: 'm', plural: 'Monate', pos: 'noun', en: 'month', hi: 'महीना', ex: 'Ein Jahr hat zwölf Monate.', exEn: 'A year has twelve months.' },
    { de: 'März', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'March', hi: 'मार्च', ex: 'Im März kommt der Frühling.', exEn: 'In March spring comes.' },
    { de: 'November', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'November', hi: 'नवंबर', ex: 'November ist kalt.', exEn: 'November is cold.' },
    { de: 'Oktober', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'October', hi: 'अक्टूबर', ex: 'Im Oktober ist Herbst.', exEn: 'In October it is autumn.' },
    { de: 'September', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'September', hi: 'सितंबर', ex: 'Die Schule beginnt im September.', exEn: 'School starts in September.' },
    { de: 'Einladung', art: 'die', gender: 'f', plural: 'Einladungen', pos: 'noun', en: 'invitation', hi: 'निमंत्रण', ex: 'Ich schreibe eine Einladung.', exEn: 'I write an invitation.' },
    { de: 'dreißig', pos: 'number', en: 'thirty', hi: 'तीस', ex: 'Der Monat hat dreißig Tage.', exEn: 'The month has thirty days.' },
    { de: 'einhundert', pos: 'number', en: 'one hundred', hi: 'एक सौ', ex: 'Das kostet einhundert Euro.', exEn: 'That costs one hundred euros.' },
    { de: 'eintausend', pos: 'number', en: 'one thousand', hi: 'एक हज़ार', ex: 'Eintausend Menschen kommen.', exEn: 'One thousand people are coming.' },
    { de: 'fünfzig', pos: 'number', en: 'fifty', hi: 'पचास', ex: 'Sie ist fünfzig Jahre alt.', exEn: 'She is fifty years old.' },
    { de: 'hundert', pos: 'number', en: 'hundred', hi: 'सौ', ex: 'Hundert Gäste kommen.', exEn: 'A hundred guests are coming.' },
    { de: 'neunzig', pos: 'number', en: 'ninety', hi: 'नब्बे', ex: 'Meine Oma ist neunzig.', exEn: 'My grandma is ninety.' },
    { de: 'sechzig', pos: 'number', en: 'sixty', hi: 'साठ', ex: 'Eine Stunde hat sechzig Minuten.', exEn: 'An hour has sixty minutes.' },
    { de: 'siebzig', pos: 'number', en: 'seventy', hi: 'सत्तर', ex: 'Mein Vater ist siebzig.', exEn: 'My father is seventy.' },
    { de: 'tausend', pos: 'number', en: 'thousand', hi: 'हज़ार', ex: 'Tausend Sterne am Himmel.', exEn: 'A thousand stars in the sky.' },
    { de: 'vierzig', pos: 'number', en: 'forty', hi: 'चालीस', ex: 'Vierzig Leute sind hier.', exEn: 'Forty people are here.' },
    // ===== Active Support =====
    { de: 'ab', pos: 'preposition', en: 'from (a number/time on)', hi: 'से', ex: 'Ab acht Uhr habe ich Zeit.', exEn: 'From eight o\'clock I have time.' },
    { de: 'alle', pos: 'determiner', en: 'all, everyone', hi: 'सब', ex: 'Wir laden alle ein.', exEn: 'We invite everyone.' },
    { de: 'Geschenk', art: 'das', gender: 'n', plural: 'Geschenke', pos: 'noun', en: 'present, gift', hi: 'तोहफ़ा', ex: 'Das Geschenk ist schön.', exEn: 'The present is lovely.' },
    { de: 'Frühling', art: 'der', gender: 'm', plural: 'Frühlinge', pos: 'noun', en: 'spring', hi: 'वसंत', ex: 'Im Frühling blühen die Blumen.', exEn: 'In spring the flowers bloom.' },
    { de: 'Glückwunsch', art: 'der', gender: 'm', plural: 'Glückwünsche', pos: 'noun', en: 'congratulations', hi: 'बधाई', ex: 'Herzlichen Glückwunsch!', exEn: 'Congratulations!' },
    { de: 'Herbst', art: 'der', gender: 'm', plural: 'Herbste', pos: 'noun', en: 'autumn, fall', hi: 'पतझड़', ex: 'Im Herbst fallen die Blätter.', exEn: 'In autumn the leaves fall.' },
    { de: 'Sommer', art: 'der', gender: 'm', plural: 'Sommer', pos: 'noun', en: 'summer', hi: 'गर्मी', ex: 'Im Sommer ist es heiß.', exEn: 'In summer it is hot.' },
    { de: 'Winter', art: 'der', gender: 'm', plural: 'Winter', pos: 'noun', en: 'winter', hi: 'सर्दी', ex: 'Im Winter schneit es.', exEn: 'In winter it snows.' },
    { de: 'Wunsch', art: 'der', gender: 'm', plural: 'Wünsche', pos: 'noun', en: 'wish', hi: 'इच्छा', ex: 'Hast du einen Wunsch?', exEn: 'Do you have a wish?' },
    { de: 'Erste', art: 'der/die', gender: 'mf', plural: 'Ersten', pos: 'noun', en: 'the first (one)', hi: 'पहला', ex: 'Du bist der Erste!', exEn: 'You are the first!' },
    { de: 'Blume', art: 'die', gender: 'f', plural: 'Blumen', pos: 'noun', en: 'flower', hi: 'फूल', ex: 'Die Blume ist rot.', exEn: 'The flower is red.' },
    { de: 'Feier', art: 'die', gender: 'f', plural: 'Feiern', pos: 'noun', en: 'celebration, party', hi: 'जश्न', ex: 'Die Feier ist am Samstag.', exEn: 'The party is on Saturday.' },
    { de: 'Jahreszeit', art: 'die', gender: 'f', plural: 'Jahreszeiten', pos: 'noun', en: 'season', hi: 'ऋतु', ex: 'Es gibt vier Jahreszeiten.', exEn: 'There are four seasons.' },
    { de: 'Milliarde', art: 'die', gender: 'f', plural: 'Milliarden', pos: 'noun', en: 'billion', hi: 'अरब', ex: 'Eine Milliarde ist sehr viel.', exEn: 'A billion is very much.' },
    { de: 'Million', art: 'die', gender: 'f', plural: 'Millionen', pos: 'noun', en: 'million', hi: 'दस लाख', ex: 'Berlin hat Millionen Menschen.', exEn: 'Berlin has millions of people.' },
    { de: 'Überraschung', art: 'die', gender: 'f', plural: 'Überraschungen', pos: 'noun', en: 'surprise', hi: 'सरप्राइज़', ex: 'Das ist eine Überraschung!', exEn: 'That is a surprise!' },
    { de: 'dreimal', pos: 'adverb', en: 'three times', hi: 'तीन बार', ex: 'Ich war dreimal in Berlin.', exEn: 'I was in Berlin three times.' },
    { de: 'dreitausend', pos: 'number', en: 'three thousand', hi: 'तीन हज़ार', ex: 'Dreitausend Euro ist viel.', exEn: 'Three thousand euros is a lot.' },
    { de: 'erste/erster', pos: 'ordinal', en: 'first', hi: 'पहला', ex: 'Heute ist der erste Mai.', exEn: 'Today is the first of May.' },
    { de: 'insgesamt', pos: 'adverb', en: 'in total, altogether', hi: 'कुल मिलाकर', ex: 'Insgesamt kommen zwanzig Gäste.', exEn: 'Altogether twenty guests are coming.' },
    { de: 'mindestens', pos: 'adverb', en: 'at least', hi: 'कम से कम', ex: 'Mindestens fünfzehn Leute kommen.', exEn: 'At least fifteen people are coming.' },
    { de: 'rund', pos: 'adverb', en: 'around, about', hi: 'लगभग', ex: 'Rund zwanzig Gäste kommen.', exEn: 'Around twenty guests are coming.' },
    { de: 'schenken', pos: 'verb', en: 'to give (a gift)', hi: 'तोहफ़ा देना', ex: 'Ich schenke dir Blumen.', exEn: 'I give you flowers.', conj: { praesens: 'schenkt', praeteritum: 'schenkte', perfekt: 'hat geschenkt' } },
    { de: 'ungefähr', pos: 'adverb', en: 'approximately, about', hi: 'लगभग', ex: 'Ungefähr zwanzig Leute kommen.', exEn: 'About twenty people are coming.' },
    { de: 'wünschen', pos: 'verb', en: 'to wish', hi: 'कामना करना', ex: 'Ich wünsche dir alles Gute.', exEn: 'I wish you all the best.', conj: { praesens: 'wünscht', praeteritum: 'wünschte', perfekt: 'hat gewünscht' } },
    { de: 'zweihundert', pos: 'number', en: 'two hundred', hi: 'दो सौ', ex: 'Zweihundert Gäste kommen.', exEn: 'Two hundred guests are coming.' },
    { de: 'zweimal', pos: 'adverb', en: 'twice', hi: 'दो बार', ex: 'Ich esse zweimal am Tag.', exEn: 'I eat twice a day.' },
    // ===== Passive =====
    { de: 'einhunderttausend', pos: 'number', en: 'one hundred thousand', hi: 'एक लाख', ex: 'Einhunderttausend Menschen leben hier.', exEn: 'One hundred thousand people live here.' },
    { de: 'circa', pos: 'adverb', en: 'approximately, circa', hi: 'लगभग', ex: 'Circa fünfzig Leute kommen.', exEn: 'Circa fifty people are coming.' },
    { de: 'Geburtsdatum', art: 'das', gender: 'n', plural: 'Geburtsdaten', pos: 'noun', en: 'date of birth', hi: 'जन्म तिथि', ex: 'Mein Geburtsdatum ist der dritte Mai.', exEn: 'My date of birth is the third of May.' },
    { de: 'Geburtsort', art: 'der', gender: 'm', plural: 'Geburtsorte', pos: 'noun', en: 'place of birth', hi: 'जन्म स्थान', ex: 'Mein Geburtsort ist Delhi.', exEn: 'My place of birth is Delhi.' },
    { de: 'Kilometer', art: 'der', gender: 'm', plural: 'Kilometer', pos: 'noun', en: 'kilometre', hi: 'किलोमीटर', ex: 'Es sind zehn Kilometer.', exEn: 'It is ten kilometres.' },
    { de: 'Meter', art: 'der', gender: 'm', plural: 'Meter', pos: 'noun', en: 'metre', hi: 'मीटर', ex: 'Der Raum ist fünf Meter lang.', exEn: 'The room is five metres long.' },
    { de: 'Überraschungstag', art: 'der', gender: 'm', plural: 'Überraschungstage', pos: 'noun', en: 'surprise day', hi: 'सरप्राइज़ दिन', ex: 'Heute ist ein Überraschungstag.', exEn: 'Today is a surprise day.' },
    { de: 'Einweihungsfeier', art: 'die', gender: 'f', plural: 'Einweihungsfeiern', pos: 'noun', en: 'housewarming party', hi: 'गृह प्रवेश', ex: 'Die Einweihungsfeier ist am Sonntag.', exEn: 'The housewarming is on Sunday.' },
    { de: 'zehntausend', pos: 'number', en: 'ten thousand', hi: 'दस हज़ार', ex: 'Zehntausend Menschen kamen.', exEn: 'Ten thousand people came.' },
    { de: 'zweihunderttausend', pos: 'number', en: 'two hundred thousand', hi: 'दो लाख', ex: 'Zweihunderttausend Euro ist sehr viel.', exEn: 'Two hundred thousand euros is a lot.' },
    // ===== Reference / System =====
    { de: 'Ordinalzahl', art: 'die', gender: 'f', plural: 'Ordinalzahlen', pos: 'noun', en: 'ordinal number', hi: 'क्रमसूचक संख्या', ex: '"Dritte" ist eine Ordinalzahl.', exEn: '"Third" is an ordinal number.' }
  ],

  // ---------- Dates & ordinals (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Building ordinal numbers',
      goldenRule: '1–19 add <b>-te</b>, from 20 upward add <b>-ste</b>. Only <b>erste, dritte, siebte, achte</b> are irregular.',
      formula: [
        'vier   →  vier<b>te</b>      (1–19: -te)',
        'zwanzig →  zwanzig<b>ste</b>  (20+: -ste)',
        'eins   →  <b>erste</b>       (irregular)',
        'drei   →  <b>dritte</b>      (irregular)'
      ],
      memoryTrick: 'Chhote numbers <b>-te</b>, bade numbers <b>-ste</b>. Aur chaar hi irregular hain: <b>erste, dritte, siebte, achte</b>.',
      body: [
        'Cardinal numbers count (eins, zwei, drei); <strong>ordinal</strong> numbers rank (first, second, third). The rule: add <strong>-te</strong> to numbers 1\u201319, and <strong>-ste</strong> from 20 up.'
      ],
      table: {
        head: ['Number', 'Ordinal', 'Meaning'],
        rows: [
          ['vier (4)', '<span class="de r-time">der vierte</span>', 'the fourth (+te)'],
          ['zwanzig (20)', '<span class="de r-time">der zwanzigste</span>', 'the twentieth (+ste)'],
          ['1 · 3 · 7', '<span class="de r-time">erste · dritte · siebte</span>', 'irregular!'],
          ['8 (acht)', '<span class="de r-time">der achte</span>', 'just one t (ach-te)']
        ]
      },
      note: 'Up to 19: <b>+ te</b> (viert<b>e</b>, fünft<b>e</b>). From 20: <b>+ ste</b> (zwanzig<b>ste</b>). Memorise three irregulars: <b>erste</b> (1st), <b>dritte</b> (3rd), <b>siebte</b> (7th). achte has only one t.',
      hinglish: 'Cardinal ginti karte hain (eins, zwei), <b>ordinal</b> order batate hain (pehla, doosra). Rule: 1\u201319 tak <b>-te</b> jodo (vierte), 20 se <b>-ste</b> (zwanzigste). Teen irregular yaad karo: <b>erste, dritte, siebte</b>.'
    },
    {
      title: 'Saying the date: am + ordinal + month',
      goldenRule: 'Dates use <b>am</b> + ordinal + <b>-n</b>: <span class="de">am dritte<b>n</b> Mai</span>.',
      memoryTrick: '<b>am</b> ke baad ordinal par ek <b>-n</b> lagta hai (dritten, vierten) — kyunki <b>am</b> dative hai. Likhne mein sirf point: <b>3. Mai</b>.',
      recap: [
        'Speaking a date: <b>am</b> + ordinal + <b>-n</b> + month.',
        'Writing a date: number + full stop — <b>3. Mai</b>.',
        'The <b>-n</b> comes from the dative after <b>am</b>.'
      ],
      body: [
        'To say WHEN something happens, use <span class="de">am</span> + ordinal (ending in <strong>-en</strong>) + month. To state today\u2019s date, use <span class="de">der</span> + ordinal.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Heute ist der erste Mai.</span>', 'Today is the 1st of May. (stating)'],
          ['<span class="de">Mein Geburtstag ist am dritten Mai.</span>', 'My birthday is on the 3rd of May. (when)'],
          ['<span class="de">Der Kurs ist am fünften August.</span>', 'The course is on the 5th of August.'],
          ['<span class="de">Wann hast du Geburtstag?</span>', 'When is your birthday?']
        ]
      },
      note: 'Stating a date → <b>der</b> + ordinal (der erste). Scheduling → <b>am</b> + ordinal + <b>-en</b> (am erst<b>en</b>, am dritt<b>en</b>, am zwanzigst<b>en</b>). Months are all masculine and take <b>im</b>: im Mai.',
      hinglish: 'Date batane ke liye <b>der</b> + ordinal: "der erste Mai". Kab ho raha hai, uske liye <b>am</b> + ordinal + <b>-en</b>: "am dritt<b>en</b> Mai". Sab months masculine hain aur <b>im</b> lete hain: im Mai.'
    },
    {
      title: 'The twelve months & four seasons',
      goldenRule: 'All twelve months and all four seasons are <b>der</b> — and with <b>im</b> they become <b>im Mai</b>, <b>im Sommer</b>.',
      memoryTrick: 'Mahine aur mausam sab <b>der</b> lete hain, aur sab <b>im</b> ke saath aate hain. Ek hi pattern se solah words cover ho jaate hain.',
      body: [
        'All twelve months and all four seasons are masculine (der), and all use <span class="de">im</span> for "in".'
      ],
      table: {
        head: ['Season (im …)', 'Months'],
        rows: [
          ['<span class="de">Frühling</span> (spring)', '<span class="de">März, April, Mai</span>'],
          ['<span class="de">Sommer</span> (summer)', '<span class="de">Juni, Juli, August</span>'],
          ['<span class="de">Herbst</span> (autumn)', '<span class="de">September, Oktober, November</span>'],
          ['<span class="de">Winter</span> (winter)', '<span class="de">Dezember, Januar, Februar</span>']
        ]
      },
      note: 'Use <b>im</b> + month or season: im Juni, im Sommer. All are <b>der</b>-words. Careful with spelling: <b>Februar</b> (not Febuar) and <b>März</b> with ä.',
      hinglish: 'Saare 12 months aur 4 seasons masculine (der) hain, aur "in" ke liye <b>im</b>: im Juni, im Sommer. Spelling dhyaan se: <b>Februar</b>, <b>März</b> (ä ke saath).'
    },
    {
      title: 'The big numbers',
      body: [
        'Beyond 100, German keeps building compound words. The key milestones:'
      ],
      table: {
        head: ['Number', 'German'],
        rows: [
          ['100 / 200', '<span class="de">(ein)hundert / zweihundert</span>'],
          ['1.000 / 3.000', '<span class="de">(ein)tausend / dreitausend</span>'],
          ['100.000', '<span class="de">(ein)hunderttausend</span>'],
          ['1.000.000 / 1.000.000.000', '<span class="de">eine Million / eine Milliarde</span>']
        ]
      },
      note: 'The <b>ein</b> in einhundert/eintausend is optional — Germans often just say hundert, tausend. But <b>eine Million</b> and <b>eine Milliarde</b> are nouns (capitalised, with eine). German uses a dot where English uses a comma: 1.000 = one thousand.',
      hinglish: 'hundert (100), tausend (1000) — "ein" optional hai. Par <b>eine Million</b> aur <b>eine Milliarde</b> nouns hain (capital, "eine" ke saath). Dhyaan: German mein 1.000 = ek hazaar (dot, comma nahi).'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four date traps to avoid.' ],
      mistakes: [
        { wrong: 'Mein Geburtstag ist am drei Mai.', right: 'Mein Geburtstag ist am dritten Mai.', why: 'Use the ordinal (dritten), not the cardinal (drei), for dates.' },
        { wrong: 'am zwanzigste Juni', right: 'am zwanzigsten Juni', why: 'After "am" the ordinal ends in -en: zwanzigsten.' },
        { wrong: 'Ich habe Geburtstag in Mai.', right: 'Ich habe im Mai Geburtstag.', why: 'Months take "im" (in + dem), not "in".' },
        { wrong: 'Heute ist der eins Mai.', right: 'Heute ist der erste Mai.', why: '1st is the irregular ordinal "erste", not "eins".' }
      ],
      hinglish: 'Char galtiyan common hain. Date ke liye ordinal number aata hai: <b>am dritten Mai</b>, na ki \u201cdrei\u201d. <b>am</b> ke baad ordinal par <b>-en</b> lagta hai: <b>am zwanzigsten</b>. Months <b>im</b> lete hain: <b>im Mai</b>, na ki \u201cin Mai\u201d. Aur pehla din <b>erste</b> hota hai, jo irregular hai \u2014 \u201ceins\u201d nahi.'
    }
  ],

  // ---------- Reading passage (calendar/birthday, clickable) ----------
  reading: {
    title: 'Annas Geburtstag',
    titleEn: 'Anna\u2019s birthday',
    tokens: [
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben', why: '"Geburtstag haben" (recycled — Akkusativ).', ex: 'Sie hat Geburtstag.', exEn: 'She has a birthday.' },
      { w: 'am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition + date', why: '"am" + ordinal (this chapter).', ex: 'am dritten Mai', exEn: 'on the 3rd of May' },
      { w: 'dritten', role: 'r-time', en: 'third', hi: 'तीसरे', pron: 'DRI-ten', type: 'Ordinal', why: 'der dritte → am dritten (this chapter).', ex: 'am dritten Mai', exEn: 'on the 3rd of May' },
      { w: 'Mai', role: 'r-time', en: 'May', hi: 'मई', pron: 'my', type: 'Noun · month', why: 'der Mai (this chapter).', ex: 'im Mai', exEn: 'in May' },
      { w: 'Geburtstag', role: 'r-object', en: 'birthday', hi: 'जन्मदिन', pron: 'guh-BOORTS-tahk', type: 'Noun · masc.', why: 'der Geburtstag (this chapter).', ex: 'Sie hat Geburtstag.', exEn: 'She has a birthday.' },
      { w: '.', plain: true },
      { w: 'Im', role: 'r-preposition', en: 'in', hi: 'में', pron: 'im', type: 'Preposition + month', why: 'im + season (this chapter).', ex: 'im Frühling', exEn: 'in spring' },
      { w: 'Frühling', role: 'r-time', en: 'spring', hi: 'वसंत', pron: 'FRÜ-ling', type: 'Noun · season', why: 'der Frühling (this chapter).', ex: 'im Frühling', exEn: 'in spring' },
      { w: 'blühen', role: 'r-verb', en: 'bloom', hi: 'खिलते हैं', pron: 'BLÜ-en', type: 'Verb · blühen', why: 'blühen — to bloom.', ex: 'Die Blumen blühen.', exEn: 'The flowers bloom.' },
      { w: 'die', role: 'r-article', en: 'the (plural)', hi: 'ये', pron: 'dee', type: 'Article' },
      { w: 'Blumen', role: 'r-subject', en: 'flowers', hi: 'फूल', pron: 'BLOO-men', type: 'Noun · plural', why: 'die Blume → die Blumen (this chapter).', ex: 'Die Blumen blühen.', exEn: 'The flowers bloom.' },
      { w: '.', plain: true },
      { w: 'Ihre', role: 'r-article', en: 'her (plural)', hi: 'उसके', pron: 'EE-ruh', type: 'Possessive', why: 'ihr + plural noun → ihre (recycled — Possessivartikel).', ex: 'ihre Freunde', exEn: 'her friends' },
      { w: 'Freunde', role: 'r-subject', en: 'friends', hi: 'दोस्त', pron: 'FROYN-duh', type: 'Noun · plural', why: 'der Freund → die Freunde (recycled).', ex: 'ihre Freunde', exEn: 'her friends' },
      { w: 'planen', role: 'r-verb', en: 'plan', hi: 'योजना बनाते हैं', pron: 'PLAH-nen', type: 'Verb · planen', why: 'planen (recycled — Modalverben 1).', ex: 'Sie planen eine Feier.', exEn: 'They plan a party.' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · acc.' },
      { w: 'Feier', role: 'r-object', en: 'party', hi: 'जश्न', pron: 'FY-er', type: 'Noun · fem.', why: 'die Feier (this chapter).', ex: 'eine Feier planen', exEn: 'plan a party' },
      { w: '.', plain: true },
      { w: 'Insgesamt', role: 'r-adverb', en: 'in total', hi: 'कुल मिलाकर', pron: 'INS-guh-zamt', type: 'Adverb', why: 'insgesamt (this chapter).', ex: 'insgesamt zwanzig Gäste', exEn: 'twenty guests in total' },
      { w: 'kommen', role: 'r-verb', en: 'come', hi: 'आते हैं', pron: 'KO-men', type: 'Verb · kommen', why: 'Verb position 2 after front adverb (recycled — Satzposition).', ex: 'Insgesamt kommen …', exEn: 'In total … come' },
      { w: 'ungefähr', role: 'r-adverb', en: 'approximately', hi: 'लगभग', pron: 'UN-guh-fair', type: 'Adverb', why: 'ungefähr (this chapter).', ex: 'ungefähr zwanzig', exEn: 'about twenty' },
      { w: 'zwanzig', role: 'r-object', en: 'twenty', hi: 'बीस', pron: 'TSVAN-tsikh', type: 'Number', why: 'zwanzig = 20 (recycled — Zahlen).', ex: 'ungefähr zwanzig', exEn: 'about twenty' },
      { w: 'Gäste', role: 'r-subject', en: 'guests', hi: 'मेहमान', pron: 'GES-tuh', type: 'Noun · plural', why: 'der Gast → die Gäste.', ex: 'zwanzig Gäste', exEn: 'twenty guests' },
      { w: '.', plain: true },
      { w: 'Alle', role: 'r-subject', en: 'everyone', hi: 'सब', pron: 'A-luh', type: 'Determiner', why: 'alle (this chapter).', ex: 'Alle schenken Blumen.', exEn: 'Everyone gives flowers.' },
      { w: 'schenken', role: 'r-verb', en: 'give', hi: 'देते हैं', pron: 'SHEN-ken', type: 'Verb · schenken', why: 'schenken (this chapter).', ex: 'Alle schenken Blumen.', exEn: 'Everyone gives flowers.' },
      { w: 'ihr', role: 'r-dativ', en: 'her', hi: 'उसे', pron: 'eer', type: 'Pronoun · dative' },
      { w: 'Geschenke', role: 'r-object', en: 'presents', hi: 'तोहफ़े', pron: 'guh-SHEN-kuh', type: 'Noun · plural', why: 'das Geschenk → die Geschenke (this chapter).', ex: 'Sie schenken Geschenke.', exEn: 'They give presents.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'wünschen', role: 'r-verb', en: 'wish', hi: 'कामना करते हैं', pron: 'VÜN-shen', type: 'Verb · wünschen', why: 'wünschen (this chapter).', ex: 'Sie wünschen alles Gute.', exEn: 'They wish all the best.' },
      { w: '"Herzlichen', role: 'r-adjective', en: 'heartfelt', hi: 'हार्दिक', pron: 'HAIRTS-li-khen', type: 'Adjective', why: '"Herzlichen Glückwunsch" (this chapter).', ex: 'Herzlichen Glückwunsch!', exEn: 'Congratulations!' },
      { w: 'Glückwunsch', role: 'r-object', en: 'congratulations', hi: 'बधाई', pron: 'GLÜK-vunsh', type: 'Noun · masc.', why: 'der Glückwunsch (this chapter).', ex: 'Herzlichen Glückwunsch!', exEn: 'Happy birthday!' },
      { w: '!"', plain: true },
      { w: '.', plain: true }
    ],
    translation: 'Anna has her birthday on the third of May. In spring the flowers bloom. Her friends plan a party. In total about twenty guests come. Everyone gives her presents and wishes "Happy birthday!"'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_024_L001', speaker: 'Tobias', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Katja, wann ist die nächste Prüfung?', en: 'Katja, when is the next exam?' },
      { id: 'A1_024_L002', speaker: 'Katja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Am zwölften September.', en: 'On the twelfth of September.' },
      { id: 'A1_024_L003', speaker: 'Tobias', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und der Ausflug?', en: 'And the trip?' },
      { id: 'A1_024_L004', speaker: 'Katja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Der ist am dritten Oktober, mit ungefähr fünfzehn Leuten.', en: 'That\'s on the third of October, with about fifteen people.' }
    ],
    transcript: 'Katja, wann ist die nächste Prüfung? Am zwölften September. Und der Ausflug? Der ist am dritten Oktober, mit ungefähr fünfzehn Leuten.',
    translation: 'Katja, when is the next exam? On the twelfth of September. And the trip? That\'s on the third of October, with about fifteen people.',
    tokens: [
      { w: 'Katja' },
      { w: ',', plain: true },
      { w: 'wann' },
      { w: 'ist' },
      { w: 'die' },
      { w: 'nächste' },
      { w: 'Prüfung' },
      { w: '?', plain: true },
      { w: 'Am' },
      { w: 'zwölften' },
      { w: 'September' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'der' },
      { w: 'Ausflug' },
      { w: '?', plain: true },
      { w: 'Der' },
      { w: 'ist' },
      { w: 'am' },
      { w: 'dritten' },
      { w: 'Oktober' },
      { w: ',', plain: true },
      { w: 'mit' },
      { w: 'ungefähr' },
      { w: 'fünfzehn' },
      { w: 'Leuten' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wann ist die nächste Prüfung?', qEn: 'When is the next exam?', options: ['am zweiten September', 'am zwölften September', 'am dritten Oktober', 'am ersten Oktober'], optionsEn: ['on the second of September', 'on the twelfth of September', 'on the third of October', 'on the first of October'], answer: 1,
        explain: '"Am zwölften September."' },
      { q: 'Wie viele Personen fahren mit auf die Reise?', qEn: 'How many people are going on the trip?', options: ['fünf', 'zehn', 'fünfzehn', 'zwanzig'], optionsEn: ['five', 'ten', 'fifteen', 'twenty'], answer: 2,
        explain: '"… mit ungefähr fünfzehn Leuten."' }
    ]
  },

  speaking: [
    { task: "Die Lehrerin fragt: Wann hast du Geburtstag?", taskEn: "The teacher asks: when's your birthday?", de: "Mein Geburtstag ist am zwanzigsten Juli.", en: "My birthday is on the twentieth of July." },
    { task: "Dein Partner fragt: Wann ist die nächste Prüfung?", taskEn: "Your partner asks: when's the next exam?", de: "Die Prüfung ist am zwölften September.", en: "The exam is on the twelfth of September." },
    { task: "Du schreibst eine Einladung für den Ausflug. Sag Datum und Zahl der Gäste.", taskEn: "You're writing an invitation for the trip. Say the date and number of guests.", de: "Der Ausflug ist am dritten Oktober, mit ungefähr fünfzehn Leuten.", en: "The trip is on the third of October, with about fifteen people." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about dates. Say your birthday (am + ordinal + month), name the season it falls in (im …), give one other date (an appointment or holiday), and use one big number (a year or a number of guests). Watch the ordinal endings.',
    starters: ['Mein Geburtstag ist am …', 'Das ist im …', 'Der Kurs ist am …', 'Insgesamt kommen … Gäste.'],
    placeholder: 'Mein Geburtstag ist am fünften August …',
    minWords: 20
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct?',
      options: ['Mein Geburtstag ist am drei Mai.', 'Mein Geburtstag ist am dritten Mai.', 'Mein Geburtstag ist an dritte Mai.', 'Mein Geburtstag ist im dritten Mai.'],
      answer: 1,
      explain: 'Dates use am + ordinal + -en: "am dritten Mai".'
    },
    gap: {
      // ordinal building: 1st (irregular) + 20th
      sentence: ['Heute ist der ', ' Mai, und die Feier ist am ', ' Mai.'],
      gaps: [ { answer: 'erste', accepts: ['erste'] }, { answer: 'zwanzigsten', accepts: ['zwanzigsten'] } ],
      explain: 'der erste (irregular 1st); am zwanzigsten (20 → +sten, +en after am).'
    },
    match: {
      q: 'Match each month to its season.',
      pairs: [
        { noun: 'Juli', art: 'Sommer' },
        { noun: 'Januar', art: 'Winter' },
        { noun: 'Oktober', art: 'Herbst' },
        { noun: 'April', art: 'Frühling' }
      ]
    },
    builder: {
      target: 'Build: "My birthday is on the third of May."',
      bank: ['Mein', 'Geburtstag', 'ist', 'am', 'dritten', 'Mai'],
      answer: ['Mein', 'Geburtstag', 'ist', 'am', 'dritten', 'Mai'],
      roles: { 'Mein': 'r-article', 'Geburtstag': 'r-subject', 'ist': 'r-verb', 'am': 'r-preposition', 'dritten': 'r-time', 'Mai': 'r-time' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the ordinal for "1" (1st)?', options: ['eins', 'einte', 'erste', 'einste'], answer: 2,
      explain: '1st is the irregular ordinal "erste".' },
    { q: 'Complete: "Die Prüfung ist am ___ Juni." (20th)', options: ['zwanzig', 'zwanzigste', 'zwanzigsten', 'zwanzigte'], answer: 2,
      explain: '20 → zwanzigste, + -en after am = zwanzigsten.' },
    { q: 'Which preposition goes with months? "___ Mai"', options: ['an', 'in', 'im', 'am'], answer: 2,
      explain: 'Months take im: im Mai.' },
    { q: 'Which season includes Dezember, Januar, Februar?', options: ['Frühling', 'Sommer', 'Herbst', 'Winter'], answer: 3,
      explain: 'December, January, February = Winter.' },
    { q: 'How do you write 1.000 in German numerals?', options: ['1,000 = ten', '1.000 = one thousand', '1.000 = one hundred', '1,000 = one million'], answer: 1,
      explain: 'German uses a dot for thousands: 1.000 = (ein)tausend.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-time', html: 'Ordinals: <strong>+te</strong> to 19, <strong>+ste</strong> from 20 — irregulars <span class="de">erste, dritte, siebte</span>.' },
    { c: 'r-time', html: 'Say a date: <span class="de">am</span> + ordinal + <strong>-en</strong> + month — <span class="de">am dritten Mai</span>. Months & seasons take <span class="de">im</span>.' },
    { c: 'r-object', html: 'Big numbers: <span class="de">hundert, tausend, eine Million, eine Milliarde</span> — and 1.000 uses a dot.' }
  ],
  revisionTips: [
    'Say your own birthday out loud every day: "Mein Geburtstag ist am … -ten …".',
    'Drill the three irregular ordinals: erste, dritte, siebte — the rest just add -te / -ste.',
    'Pair each month with its season and the preposition im: im Juli → Sommer.'
  ]
};

window.CHAPTER = CHAPTER;
