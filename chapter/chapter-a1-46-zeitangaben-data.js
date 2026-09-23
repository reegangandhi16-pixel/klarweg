/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 5 · Chapter 46
   "Zeitangaben mit Dativ"  (time expressions with the dative)
   Vocabulary source: uploaded chapter-46 word list (25 words).
   Theme = planning Goethe exam week. Recycles Ch1–45.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-46-zeitangaben',
  phase: 'A1 · Phase 5',
  number: 46,
  title: 'Zeitangaben mit Dativ',
  titleEn: 'Time Expressions',
  description: 'Pin events to the calendar. German uses dative prepositions for most time phrases: am Montag, am Abend, im Mai, im Sommer, seit zwei Monaten, ab morgen, nach dem Kurs, vor der Prüfung, vom 1. bis 5. August. One small set of words schedules your whole week.',
  xp: 170,
  time: 30,
  difficulty: 'Beginner',
  nextChapter: { number: 47, title: 'Goethe A1 Final', titleEn: 'The A1 Finale' , href: 'chapter-a1-47-goethe-final.html' },

  prevChapter: { number: 45, title: 'Telefonieren & Nachfragen', titleEn: 'Phone Calls', href: 'chapter-a1-45-telefonieren.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Exam week is almost here. Wiebke lays out the schedule, and Timo plans his last days \u2014 when they study, when they meet, when the test starts and what happens afterwards. Every plan hangs on a dative time phrase: am Freitag, seit Wochen, nach der Prüfung.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear am, im, seit, ab, nach and vor with time'
    ],
    scene: 'Pr\u00fcfungswoche \u2014 der Plan, Berlin',
    femaleSpeakers: ['Wiebke'],
    dialogue: [
      { speaker: 'Wiebke', tokens: [
        { w: 'Wann', role: 'r-question', en: 'when', hi: 'कब', pron: 'van', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Anfang', role: 'r-subject', en: 'beginning', hi: 'शुरुआत', pron: 'AN-fang', type: 'Noun · masc.', why: 'der Anfang (this chapter).', ex: 'Wann ist der Anfang?', exEn: 'When is the beginning?' },
        { w: 'vom', role: 'r-preposition', en: 'of the', hi: 'का', pron: 'fom', type: 'Preposition + place' },
        { w: 'letzten', role: 'r-akkusativ', en: 'last', hi: 'आख़िरी', pron: 'LETS-ten', type: 'Determiner', why: 'letzte/letzter = last (this chapter).', ex: 'am letzten Tag', exEn: 'on the last day' },
        { w: 'Tag', role: 'r-akkusativ', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'When is the start of the last day?', hi: 'Aakhri din ki shuruaat kab hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ab', role: 'r-preposition', en: 'from', hi: 'से', pron: 'ap', type: 'Preposition · time', why: 'ab + time = starting from (this chapter).', ex: 'Ab neun Uhr.', exEn: 'From nine o’clock.' },
        { w: 'neun', role: 'r-time', en: 'nine', hi: 'नौ', pron: 'noyn', type: 'Number' },
        { w: 'Uhr', role: 'r-time', en: 'o’clock', hi: 'बजे', pron: 'oor', type: 'Noun · time' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'er', role: 'r-subject', en: 'it', hi: 'यह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'endet', role: 'r-verb', en: 'ends', hi: 'ख़त्म होता है', pron: 'EN-det', type: 'Verb · enden', why: 'enden = to end (this chapter).', ex: 'Der Tag endet um fünf.', exEn: 'The day ends at five.' },
        { w: 'um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock time' },
        { w: 'fünf', role: 'r-time', en: 'five', hi: 'पाँच', pron: 'fünf', type: 'Number' },
        { w: '.', plain: true }
      ], en: 'From nine o’clock. And it ends at five.', hi: 'Nau baje se. Aur yeh paanch baje khatam hota hai.' },
      { speaker: 'Wiebke', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'dauert', role: 'r-verb', en: 'lasts', hi: 'चलता है', pron: 'DOW-ert', type: 'Verb · dauern', why: 'dauern = to last/take (this chapter).', ex: 'Das dauert acht Stunden.', exEn: 'That lasts eight hours.' },
        { w: 'also', role: 'r-adverb', en: 'so', hi: 'यानी', pron: 'AL-zo', type: 'Adverb' },
        { w: 'acht', role: 'r-akkusativ', en: 'eight', hi: 'आठ', pron: 'akht', type: 'Number' },
        { w: 'Stunden', role: 'r-akkusativ', en: 'hours', hi: 'घंटे', pron: 'SHTUN-den', type: 'Noun · plural' },
        { w: '!', plain: true }
      ], en: 'That lasts eight hours then!', hi: 'Yeh toh aath ghante chalta hai!' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'am', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'am', type: 'Preposition + time' },
        { w: 'Anfang', role: 'r-time', en: 'beginning', hi: 'शुरुआत', pron: 'AN-fang', type: 'Noun · masc.' },
        { w: 'feiern', role: 'r-verb', en: 'we celebrate', hi: 'जश्न मनाते हैं', pron: 'FY-ern', type: 'Verb · feiern (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Yes, but at the start we only celebrate.', hi: 'Haan, par shuruaat mein hum sirf jashn manaate hain.' },
      { speaker: 'Wiebke', tokens: [
        { w: 'Wann', role: 'r-question', en: 'when', hi: 'कब', pron: 'van', type: 'Question word' },
        { w: 'beginnt', role: 'r-verb', en: 'starts', hi: 'शुरू होती है', pron: 'be-GINT', type: 'Verb · beginnen' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Prüfung', role: 'r-subject', en: 'exam', hi: 'परीक्षा', pron: 'PRÜ-fung', type: 'Noun · fem.' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'When does the exam start then?', hi: 'Toh pariksha kab shuru hoti hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Später', role: 'r-time', en: 'later', hi: 'बाद में', pron: 'SHPAY-ter', type: 'Adverb · time' },
        { w: '.', plain: true },
        { w: 'Erst', role: 'r-adverb', en: 'only then', hi: 'पहले', pron: 'airst', type: 'Adverb', why: 'erst = only then / not until (this chapter).', ex: 'Erst um elf.', exEn: 'Only at eleven.' },
        { w: 'um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock time' },
        { w: 'elf', role: 'r-time', en: 'eleven', hi: 'ग्यारह', pron: 'elf', type: 'Number' },
        { w: '.', plain: true }
      ], en: 'Later. Only at eleven.', hi: 'Baad mein. Sirf gyarah baje.' },
      { speaker: 'Wiebke', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'danach', role: 'r-adverb', en: 'afterwards', hi: 'उसके बाद', pron: 'da-NAKH', type: 'Adverb', why: 'danach = after that (this chapter).', ex: 'Danach ist alles vorbei.', exEn: 'After that everything is over.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'alles', role: 'r-subject', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun' },
        { w: 'vorbei', role: 'r-adverb', en: 'over', hi: 'ख़त्म', pron: 'for-BY', type: 'Adverb', why: 'vorbei sein = to be over (this chapter).', ex: 'Der Kurs ist vorbei.', exEn: 'The course is over.' },
        { w: '?', plain: true }
      ], en: 'Good. And afterwards is everything over?', hi: 'Achha. Aur uske baad sab khatam ho jaata hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Fast', role: 'r-adverb', en: 'almost', hi: 'लगभग', pron: 'fast', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Zum', role: 'r-preposition', en: 'as a', hi: 'में', pron: 'tsoom', type: 'Fixed phrase' },
        { w: 'Schluss', role: 'r-akkusativ', en: 'closing', hi: 'अंत', pron: 'shlus', type: 'Noun · masc.', why: 'zum Schluss = at the end (this chapter).', ex: 'Zum Schluss essen wir Kuchen.', exEn: 'At the end we eat cake.' },
        { w: 'essen', role: 'r-verb', en: 'eat', hi: 'खाते हैं', pron: 'E-sen', type: 'Verb · essen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी और', pron: 'nokh', type: 'Adverb' },
        { w: 'Kuchen', role: 'r-akkusativ', en: 'cake', hi: 'केक', pron: 'KOO-khen', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Almost. At the end we still eat cake.', hi: 'Lagbhag. Ant mein hum aur cake khaate hain.' },
      { speaker: 'Wiebke', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'bleibe', role: 'r-verb', en: 'stay', hi: 'रहती हूँ', pron: 'BLY-buh', type: 'Verb · bleiben (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bis', role: 'r-preposition', en: 'until', hi: 'तक', pron: 'bis', type: 'Preposition' },
        { w: 'zum', role: 'r-preposition', en: 'the', hi: '', pron: 'tsoom', type: 'Preposition + noun' },
        { w: 'Schluss', role: 'r-akkusativ', en: 'end', hi: 'अंत', pron: 'shlus', type: 'Noun · masc.', why: 'bis zum Schluss = until the very end (this chapter).', ex: 'Ich bleibe bis zum Schluss.', exEn: 'I stay until the end.' },
        { w: '.', plain: true }
      ], en: 'Perfect! Then I stay until the very end.', hi: 'Badhiya! Toh main bilkul ant tak rahungi.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Most German time phrases run on <strong>dative</strong> prepositions \u2014 and they\u2019re grouped by what kind of time they mark. Days &amp; parts of the day take <span class="de r-preposition">am</span> (am Montag, am Abend); months &amp; seasons take <span class="de r-preposition">im</span> (im Mai, im Sommer); duration takes <span class="de r-preposition">seit</span> (seit zwei Monaten); and events take <span class="de r-preposition">nach</span> / <span class="de r-preposition">vor</span> (nach dem Kurs, vor der Prüfung).'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is TIME EXPRESSIONS WITH THE DATIVE (Zeitangaben mit Dativ): am, im, seit, ab, nach, vor, vom … bis …. ' +
    'The learner wrote sentences about schedules and routines below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- am (= an dem) + weekday or part of day: am Montag, am Wochenende, am Morgen, am Abend (but: in der Nacht).\n' +
    '- im (= in dem) + month or season: im Januar, im Sommer, im Winter.\n' +
    '- seit + duration (dative), for something still going on: seit zwei Monaten, seit einem Jahr (NOT "für" for ongoing time).\n' +
    '- ab + starting point (dative): ab morgen, ab nächster Woche, ab Montag.\n' +
    '- nach + event (dative): nach dem Kurs, nach der Prüfung, nach dem Essen.\n' +
    '- vor + event (dative): vor der Prüfung, vor dem Essen; "vor einem Jahr" = a year ago.\n' +
    '- vom … bis … for a period: vom 1. bis 5. August, vom Montag bis Freitag.\n' +
    '- A fronted time phrase keeps the verb in position 2: "Am Montag arbeite ich." / "Im Sommer fahren wir ans Meer."\n' +
    '- duration words: dauern (to last), der Anfang/das Ende, danach, vorher, endlich, bald, später.\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Time-phrase check:</b> one sentence on whether am/im/seit/nach/vor were used correctly with the dative.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — am/im/seit/nach/vor are second nature now. On to the Goethe A1 Final!',
    mid: 'Good. Re-read the am-vs-im card once, then continue.',
    low: 'Worth another pass — group the time words (am day, im month, seit duration) in the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Am', role: 'r-preposition' }, { w: 'Montag', role: 'r-time' },
    { w: 'arbeite', role: 'r-verb' }, { w: 'ich', role: 'r-subject' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See which preposition marks which kind of time.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Plan exam week with the group \u2014 every plan uses a dative time phrase.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the time & duration words: Anfang, Ende, danach, vorher, bald, endlich, dauern.' },
    { id: 'grammar',    label: 'Time with Dativ', tag: 'core',
      objective: 'Master am/im, seit/ab, nach/vor and vom … bis …, all with the dative.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a weekly-plan text full of time phrases and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch the days, times and durations in a schedule, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Talk about your week, your routine, and your plans with time phrases.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write your weekly schedule and a short plan using am/im/seit/nach/vor.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the time prepositions and the dative with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 170 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The time & duration words and the dative time prepositions with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'am/im/seit/nach/vor selection drills, a weekly-schedule task, and error correction.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'Time with the dative grouped by type, the contractions am/im/vom, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'am Montag / am Abend', text: 'Use am for days & parts of the day' },
    { de: 'im Mai / im Sommer', text: 'Use im for months & seasons' },
    { de: 'seit zwei Monaten', text: 'Say how long with seit' },
    { de: 'nach / vor dem Kurs', text: 'Place events in time' },
    { de: 'vom 1. bis 5. Juli', text: 'Give a time period' }
  ],

  // ---------- Vocabulary (25 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'ab', pos: 'preposition', en: 'from … on (+ dative)', hi: 'से (आगे)', ex: 'Ab morgen mache ich Sport.', exEn: 'From tomorrow I\u2019ll do sport.' },
    // ===== Active Support =====
    { de: 'ab (off)', pos: 'adverb', en: 'off (we\u2019re off)', hi: 'चलें', ex: 'Auf geht\u2019s, wir sind ab!', exEn: 'Let\u2019s go, we\u2019re off!' },
    { de: 'alle (every)', pos: 'determiner', en: 'every (alle zwei Tage)', hi: 'हर', ex: 'Alle zwei Tage lerne ich.', exEn: 'Every two days I study.' },
    { de: 'an (+D)', pos: 'preposition', en: 'over (a period)', hi: 'के दौरान', ex: 'An den Wochenenden ruhe ich mich aus.', exEn: 'Over the weekends I rest.' },
    { de: 'bald', pos: 'adverb', en: 'soon', hi: 'जल्द', ex: 'Bald ist die Prüfung.', exEn: 'Soon the exam is here.' },
    { de: 'danach', pos: 'adverb', en: 'afterwards', hi: 'उसके बाद', ex: 'Danach gehen wir ins Café.', exEn: 'Afterwards we go to the café.' },
    { de: 'Ende', art: 'das', gender: 'n', plural: 'Enden', pos: 'noun', en: 'end', hi: 'अंत', ex: 'Am Ende feiern wir.', exEn: 'At the end we celebrate.' },
    { de: 'dauern', pos: 'verb', en: 'to last', hi: 'चलना', ex: 'Die Prüfung dauert drei Stunden.', exEn: 'The exam lasts three hours.', conj: { praesens: 'dauert', praeteritum: 'dauerte', perfekt: 'hat gedauert' } },
    { de: 'Anfang', art: 'der', gender: 'm', plural: 'Anfänge', pos: 'noun', en: 'beginning', hi: 'शुरुआत', ex: 'Am Anfang ist es schwer.', exEn: 'At the beginning it\u2019s hard.' },
    { de: 'Schluss', art: 'der', gender: 'm', plural: 'Schlüsse', pos: 'noun', en: 'end, conclusion', hi: 'अंत', ex: 'Zum Schluss sage ich danke.', exEn: 'At the end I say thanks.' },
    { de: 'Hitze', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'heat', hi: 'गर्मी', ex: 'Im Sommer ist die Hitze groß.', exEn: 'In summer the heat is great.' },
    { de: 'einmal', pos: 'adverb', en: 'once', hi: 'एक बार', ex: 'Einmal pro Woche treffen wir uns.', exEn: 'Once a week we meet.' },
    { de: 'enden', pos: 'verb', en: 'to end', hi: 'समाप्त होना', ex: 'Der Kurs endet im Juli.', exEn: 'The course ends in July.', conj: { praesens: 'endet', praeteritum: 'endete', perfekt: 'hat geendet' } },
    { de: 'endlich', pos: 'adverb', en: 'finally, at last', hi: 'आख़िरकार', ex: 'Endlich ist Wochenende!', exEn: 'Finally it\u2019s the weekend!' },
    { de: 'erst', pos: 'adverb', en: 'only, not until', hi: 'तभी, सिर्फ़', ex: 'Wir feiern erst nach der Prüfung.', exEn: 'We celebrate only after the exam.' },
    { de: 'her', pos: 'adverb', en: 'ago (das ist … her)', hi: 'पहले', ex: 'Das ist zwei Jahre her.', exEn: 'That was two years ago.' },
    { de: 'letzte/letzter', pos: 'adjective', en: 'last', hi: 'पिछला', ex: 'Letzte Woche hatte ich frei.', exEn: 'Last week I had time off.' },
    { de: 'nur noch', pos: 'phrase', en: 'only … left', hi: 'बस', ex: 'Nur noch drei Tage bis zur Prüfung!', exEn: 'Only three days left until the exam!' },
    { de: 'später', pos: 'adverb', en: 'later', hi: 'बाद में', ex: 'Bis später!', exEn: 'See you later!' },
    { de: 'stattfinden', pos: 'verb', en: 'to take place', hi: 'होना', ex: 'Die Prüfung findet am Freitag statt.', exEn: 'The exam takes place on Friday.', conj: { praesens: 'findet statt', praeteritum: 'fand statt', perfekt: 'hat stattgefunden' } },
    { de: 'vorbei sein', pos: 'verb', en: 'to be over', hi: 'खत्म होना', ex: 'Die Prüfung ist vorbei.', exEn: 'The exam is over.', conj: { praesens: 'ist vorbei', praeteritum: 'war vorbei', perfekt: 'ist vorbei gewesen' } },
    { de: 'vorher', pos: 'adverb', en: 'beforehand', hi: 'पहले', ex: 'Kommt bitte vorher!', exEn: 'Please come beforehand!' },
    { de: 'zum Schluss', pos: 'phrase', en: 'at the end, finally', hi: 'अंत में', ex: 'Zum Schluss üben wir noch einmal.', exEn: 'At the end we practise once more.' },
    // ===== Passive =====
    { de: 'außerhalb', pos: 'preposition', en: 'outside of', hi: 'के बाहर', ex: 'Außerhalb der Ferien ist es ruhig.', exEn: 'Outside the holidays it\u2019s quiet.' },
    { de: 'bis zu', pos: 'preposition', en: 'up to', hi: 'तक', ex: 'Bis zu drei Stunden lerne ich.', exEn: 'I study up to three hours.' }
  ],

  // ---------- Time with Dativ (rule cards → accordion) ----------
  grammar: [
    {
      title: 'am & im — days, months, seasons',
      body: [
        'Two contractions cover most of the calendar. <span class="de r-preposition">am</span> (= an dem) for <strong>days</strong> and <strong>parts of the day</strong>; <span class="de r-preposition">im</span> (= in dem) for <strong>months</strong> and <strong>seasons</strong>.'
      ],
      table: {
        head: ['Preposition', 'Used for', 'Example'],
        rows: [
          ['<span class="de r-preposition">am</span>', 'weekday', '<span class="de">am Montag, am Wochenende</span>'],
          ['<span class="de r-preposition">am</span>', 'part of day', '<span class="de">am Morgen, am Abend</span>'],
          ['<span class="de r-preposition">im</span>', 'month', '<span class="de">im Januar, im Juli</span>'],
          ['<span class="de r-preposition">im</span>', 'season', '<span class="de">im Sommer, im Winter</span>']
        ]
      },
      note: '<b>am</b> = days & day-parts (am Freitag, am Abend) \u2014 but the one exception is <b>in der Nacht</b>. <b>im</b> = months & seasons (im Mai, im Sommer). Both are dative contractions (an dem → am, in dem → im).',
      hinglish: '<b>am</b> = din aur din ke hisse (am Freitag, am Abend) \u2014 sirf <b>in der Nacht</b> alag. <b>im</b> = mahina aur mausam (im Mai, im Sommer). Dono dative contractions hain (an dem → am, in dem → im).'
    },
    {
      title: 'seit & ab — duration and starting point',
      goldenRule: '<b>seit</b> = already going on (past → now). <b>ab</b> = starts from now onward.',
      memoryTrick: '<b>seit</b> peeche dekhta hai (do mahine <b>se</b>), <b>ab</b> aage dekhta hai (kal <b>se</b>). Dono dative lete hain.',
      body: [
        '<span class="de r-preposition">seit</span> says how long something has <em>already</em> been going on; <span class="de r-preposition">ab</span> marks a <em>starting point</em> in the future. Both take the dative.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">seit zwei Monaten</span>', 'for two months (and still going)'],
          ['<span class="de">seit einem Jahr</span>', 'for a year'],
          ['<span class="de">ab morgen</span>', 'from tomorrow on'],
          ['<span class="de">ab nächster Woche</span>', 'from next week on']
        ]
      },
      note: 'Use <b>seit</b> (not "für") for time that started in the past and continues: "Ich lerne <b>seit</b> zwei Monaten Deutsch." <b>ab</b> looks forward to a start: "<b>Ab</b> morgen mache ich Sport." Dative: seit einem Jahr, ab nächster Woche.',
      hinglish: 'Jo abhi tak chal raha hai uske liye <b>seit</b> ("für" nahi): "Ich lerne <b>seit</b> zwei Monaten Deutsch." <b>ab</b> aage ki start: "<b>Ab</b> morgen mache ich Sport." Dative: seit einem Jahr.'
    },
    {
      title: 'nach, vor & vom … bis …',
      body: [
        'Place events relative to each other: <span class="de r-preposition">nach</span> (after), <span class="de r-preposition">vor</span> (before), and <span class="de r-preposition">vom … bis …</span> for a stretch of time.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">nach dem Kurs</span>', 'after the class'],
          ['<span class="de">vor der Prüfung</span>', 'before the exam'],
          ['<span class="de">vor einem Jahr</span>', 'a year ago'],
          ['<span class="de">vom 1. bis 5. Juli</span>', 'from the 1st to the 5th of July']
        ]
      },
      note: '<b>nach</b> + dative (nach dem Essen), <b>vor</b> + dative (vor der Prüfung; "vor einem Jahr" = a year ago). For a period use <b>vom … bis …</b>: "vom Montag bis Freitag", "vom 1. bis 5. August".',
      hinglish: '<b>nach</b> + dative (nach dem Essen = khaane ke baad), <b>vor</b> + dative (vor der Prüfung; "vor einem Jahr" = ek saal pehle). Period ke liye <b>vom … bis …</b>: "vom Montag bis Freitag".'
    },
    {
      title: 'Word order with a fronted time phrase',
      goldenRule: 'Put a time phrase in slot 1 and the <b>verb stays in slot 2</b> — so the subject moves behind it.',
      memoryTrick: 'Time phrase aage aaya to <b>verb apni seat nahi chhodta</b> — subject peeche jaata hai: <span class="de">Am Montag gehe ich …</span>',
      body: [
        'Start a sentence with a time phrase and the verb still comes second \u2014 the subject moves after it.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Am Montag arbeite ich.</span>', 'On Monday I work.'],
          ['<span class="de">Im Sommer fahren wir ans Meer.</span>', 'In summer we go to the sea.'],
          ['<span class="de">Seit einem Monat wohne ich hier.</span>', 'I\u2019ve lived here for a month.'],
          ['<span class="de">Nach dem Kurs trinken wir Kaffee.</span>', 'After the class we drink coffee.']
        ]
      },
      note: 'This is the verb-second rule from Chapter 19. After a front time phrase the verb is in position 2 and the subject follows: "Am Abend <u>lerne</u> ich." \u2014 not "Am Abend ich lerne."',
      hinglish: 'Yeh Chapter 19 ka verb-second rule hai. Front time phrase ke baad verb position 2 pe, subject baad mein: "Am Abend <u>lerne</u> ich." \u2014 "Am Abend ich lerne" galat.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four time-phrase traps to avoid.' ],
      mistakes: [
        { wrong: 'in Montag', right: 'am Montag', why: 'Days take am, not in.' },
        { wrong: 'am Sommer', right: 'im Sommer', why: 'Seasons (and months) take im.' },
        { wrong: 'für zwei Monaten lerne ich Deutsch', right: 'seit zwei Monaten lerne ich Deutsch', why: 'Ongoing time since the past uses seit, not für.' },
        { wrong: 'Am Abend ich lerne.', right: 'Am Abend lerne ich.', why: 'After a front time phrase the verb is position 2.' }
      ],
      hinglish: 'Char galtiyan common hain. Din ke saath <b>am</b> aata hai: <b>am Montag</b>, na ki "in Montag". Mausam aur mahine ke saath <b>im</b>: <b>im Sommer</b>. Jo samay abhi tak chal raha hai uske liye <b>seit</b> aata hai, "für" nahi. Aur agar time phrase aage aata hai to verb position 2 par rehta hai: <b>Am Abend lerne ich</b>.'
    }
  ],

  // ---------- Reading passage (a weekly plan, clickable) ----------
  reading: {
    title: 'Meine Pr\u00fcfungswoche',
    titleEn: 'My exam week',
    tokens: [
      { w: 'Seit', role: 'r-preposition', en: 'for', hi: 'से', pron: 'zyt', type: 'Preposition · time', why: 'seit + duration = dative (this chapter).', ex: 'Seit zwei Monaten lerne ich.', exEn: 'I\u2019ve been studying for two months.' },
      { w: 'zwei', role: 'r-time', en: 'two', hi: 'दो', pron: 'tsvy', type: 'Number', why: 'zwei = 2 (recycled — Zahlen).', ex: 'seit zwei Monaten', exEn: 'for two months' },
      { w: 'Monaten', role: 'r-time', en: 'months', hi: 'महीनों', pron: 'MOH-nah-ten', type: 'Noun · plural', why: 'der Monat → Monaten, dative plural (recycled — Datum).', ex: 'seit zwei Monaten', exEn: 'for two months' },
      { w: 'lerne', role: 'r-verb', en: 'have been studying', hi: 'सीख रहा हूँ', pron: 'LAIR-nuh', type: 'Verb · lernen (ich)', why: 'verb position 2 after front time phrase (recycled — Satzposition).', ex: 'Seit zwei Monaten lerne ich.', exEn: 'I\u2019ve been studying for two months.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'Deutsch', role: 'r-object', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun · neut.', why: 'Deutsch (recycled — Hallo!).', ex: 'Ich lerne Deutsch.', exEn: 'I study German.' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'on', hi: 'को', pron: 'am', type: 'Preposition · time', why: 'am + day = dative (this chapter).', ex: 'am Montag', exEn: 'on Monday' },
      { w: 'Montag', role: 'r-time', en: 'Monday', hi: 'सोमवार', pron: 'MON-tahk', type: 'Noun · day', why: 'der Montag (recycled — Uhrzeit).', ex: 'am Montag', exEn: 'on Monday' },
      { w: 'beginnt', role: 'r-verb', en: 'begins', hi: 'शुरू होती है', pron: 'buh-GINT', type: 'Verb · beginnen', why: 'verb position 2 (recycled — Satzposition).', ex: 'Am Montag beginnt die Prüfungswoche.', exEn: 'On Monday the exam week begins.' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Pr\u00fcfungswoche', role: 'r-subject', en: 'exam week', hi: 'परीक्षा सप्ताह', pron: 'PRÜ-fungs-vo-khuh', type: 'Noun · fem.', why: 'die Prüfungswoche.', ex: 'die Prüfungswoche', exEn: 'the exam week' },
      { w: '.', plain: true },
      { w: 'Ab', role: 'r-preposition', en: 'from … on', hi: 'से', pron: 'ap', type: 'Preposition · time', why: 'ab + starting point = dative (this chapter).', ex: 'ab morgen', exEn: 'from tomorrow on' },
      { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time', why: 'morgen (recycled — Datum).', ex: 'ab morgen', exEn: 'from tomorrow' },
      { w: 'lerne', role: 'r-verb', en: 'study', hi: 'पढ़ता हूँ', pron: 'LAIR-nuh', type: 'Verb · lernen (ich)' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'jeden', role: 'r-time', en: 'every', hi: 'हर', pron: 'YAY-den', type: 'Determiner', why: 'jeden Tag (recycled — Satzposition).', ex: 'jeden Abend', exEn: 'every evening' },
      { w: 'Abend', role: 'r-time', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun · time', why: 'der Abend (recycled — Uhrzeit).', ex: 'jeden Abend', exEn: 'every evening' },
      { w: 'Vokabeln', role: 'r-object', en: 'vocabulary', hi: 'शब्द', pron: 'vo-KAH-beln', type: 'Noun · plural', why: 'die Vokabeln.', ex: 'Vokabeln lernen', exEn: 'learn vocabulary' },
      { w: '.', plain: true },
      { w: 'Vor', role: 'r-preposition', en: 'before', hi: 'से पहले', pron: 'for', type: 'Preposition · time', why: 'vor + event = dative (this chapter).', ex: 'vor der Prüfung', exEn: 'before the exam' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article · dative', why: 'vor → dative der (this chapter).', ex: 'vor der Prüfung', exEn: 'before the exam' },
      { w: 'Pr\u00fcfung', role: 'r-time', en: 'exam', hi: 'परीक्षा', pron: 'PRÜ-fung', type: 'Noun · fem.', why: 'die Prüfung (recycled — Perfekt mit haben).', ex: 'vor der Prüfung', exEn: 'before the exam' },
      { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein', why: 'verb position 2 after front time phrase (recycled — Satzposition).', ex: 'Vor der Prüfung bin ich nervös.', exEn: 'Before the exam I\u2019m nervous.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'nerv\u00f6s', role: 'r-adjective', en: 'nervous', hi: 'घबराया', pron: 'nair-VÖS', type: 'Adjective', why: 'sein + adjective (Chapter 13).', ex: 'Ich bin nervös.', exEn: 'I am nervous.' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction', why: 'aber (recycled — Kein & Nicht).', ex: 'aber bereit', exEn: 'but ready' },
      { w: 'bald', role: 'r-adverb', en: 'soon', hi: 'जल्द', pron: 'balt', type: 'Adverb', why: 'bald (this chapter).', ex: 'Bald bin ich bereit.', exEn: 'Soon I\u2019ll be ready.' },
      { w: 'bereit', role: 'r-adjective', en: 'ready', hi: 'तैयार', pron: 'buh-RYT', type: 'Adjective', why: 'sein + adjective (Chapter 13).', ex: 'Ich bin bereit.', exEn: 'I am ready.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Pr\u00fcfung', role: 'r-subject', en: 'exam', hi: 'परीक्षा', pron: 'PRÜ-fung', type: 'Noun · fem.' },
      { w: 'dauert', role: 'r-verb', en: 'lasts', hi: 'चलती है', pron: 'DOW-ert', type: 'Verb · dauern', why: 'dauern (this chapter).', ex: 'Die Prüfung dauert drei Stunden.', exEn: 'The exam lasts three hours.' },
      { w: 'drei', role: 'r-object', en: 'three', hi: 'तीन', pron: 'dry', type: 'Number', why: 'drei = 3 (recycled — Zahlen).', ex: 'drei Stunden', exEn: 'three hours' },
      { w: 'Stunden', role: 'r-object', en: 'hours', hi: 'घंटे', pron: 'SHTUN-den', type: 'Noun · plural', why: 'die Stunde → Stunden (recycled — Berufe).', ex: 'drei Stunden', exEn: 'three hours' },
      { w: '.', plain: true },
      { w: 'Nach', role: 'r-preposition', en: 'after', hi: 'के बाद', pron: 'nakh', type: 'Preposition · time', why: 'nach + event = dative (this chapter).', ex: 'nach der Prüfung', exEn: 'after the exam' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article · dative' },
      { w: 'Pr\u00fcfung', role: 'r-time', en: 'exam', hi: 'परीक्षा', pron: 'PRÜ-fung', type: 'Noun · fem.' },
      { w: 'feiern', role: 'r-verb', en: 'celebrate', hi: 'जश्न मनाते हैं', pron: 'FY-ern', type: 'Verb · feiern (wir)', why: 'feiern (recycled — Hobbies).', ex: 'Wir feiern.', exEn: 'We celebrate.' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'im', role: 'r-preposition', en: 'in', hi: 'में', pron: 'im', type: 'Preposition · time', why: 'im + season = dative (this chapter).', ex: 'im Sommer', exEn: 'in summer' },
      { w: 'Sommer', role: 'r-time', en: 'summer', hi: 'गर्मी', pron: 'ZO-mer', type: 'Noun · season', why: 'der Sommer; im + season (this chapter).', ex: 'im Sommer', exEn: 'in summer' },
      { w: '.', plain: true }
    ],
    translation: 'I\u2019ve been studying German for two months. On Monday the exam week begins. From tomorrow on I study vocabulary every evening. Before the exam I\u2019m nervous, but soon I\u2019ll be ready. The exam lasts three hours. After the exam we celebrate in summer.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_046_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wiebke, wann ist der Umzug?', en: 'Wiebke, when is the move?' },
      { id: 'A1_046_L002', speaker: 'Wiebke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Am Montag, dem ersten August.', en: 'On Monday, the first of August.' },
      { id: 'A1_046_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und wann kommt der Möbelwagen?', en: 'And when does the moving van come?' },
      { id: 'A1_046_L004', speaker: 'Wiebke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Um neun Uhr. Kommt bitte vorher!', en: 'At nine o\'clock. Please come beforehand!' },
      { id: 'A1_046_L005', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wie lange dauert der Umzug?', en: 'How long does the move take?' },
      { id: 'A1_046_L006', speaker: 'Wiebke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Etwa vier Stunden. Danach ist alles fertig.', en: 'About four hours. Afterwards everything is done.' },
      { id: 'A1_046_L007', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und feiern wir dann?', en: 'And do we celebrate then?' },
      { id: 'A1_046_L008', speaker: 'Wiebke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, aber erst nach dem Umzug, am Abend!', en: 'Yes, but only after the move, in the evening!' }
    ],
    transcript: 'Wiebke, wann ist der Umzug? Am Montag, dem ersten August. Und wann kommt der Möbelwagen? Um neun Uhr. Kommt bitte vorher! Wie lange dauert der Umzug? Etwa vier Stunden. Danach ist alles fertig. Und feiern wir dann? Ja, aber erst nach dem Umzug, am Abend!',
    translation: 'Wiebke, when is the move? On Monday, the first of August. And when does the moving van come? At nine o\'clock. Please come beforehand! How long does the move take? About four hours. Afterwards everything is done. And do we celebrate then? Yes, but only after the move, in the evening!',
    tokens: [
      { w: 'Wiebke' },
      { w: ',', plain: true },
      { w: 'wann' },
      { w: 'ist' },
      { w: 'der' },
      { w: 'Umzug' },
      { w: '?', plain: true },
      { w: 'Am' },
      { w: 'Montag' },
      { w: ',', plain: true },
      { w: 'dem' },
      { w: 'ersten' },
      { w: 'August' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wann' },
      { w: 'kommt' },
      { w: 'der' },
      { w: 'Möbelwagen' },
      { w: '?', plain: true },
      { w: 'Um' },
      { w: 'neun' },
      { w: 'Uhr' },
      { w: '.', plain: true },
      { w: 'Kommt' },
      { w: 'bitte' },
      { w: 'vorher' },
      { w: '!', plain: true },
      { w: 'Wie' },
      { w: 'lange' },
      { w: 'dauert' },
      { w: 'der' },
      { w: 'Umzug' },
      { w: '?', plain: true },
      { w: 'Etwa' },
      { w: 'vier' },
      { w: 'Stunden' },
      { w: '.', plain: true },
      { w: 'Danach' },
      { w: 'ist' },
      { w: 'alles' },
      { w: 'fertig' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'feiern' },
      { w: 'wir' },
      { w: 'dann' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'erst' },
      { w: 'nach' },
      { w: 'dem' },
      { w: 'Umzug' },
      { w: ',', plain: true },
      { w: 'am' },
      { w: 'Abend' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Wann ist der Umzug?', qEn: 'When is the move?', options: ['am Sonntag', 'am Montag', 'am Dienstag', 'am Freitag'], optionsEn: ['on Sunday', 'on Monday', 'on Tuesday', 'on Friday'], answer: 1,
        explain: '"Am Montag, dem ersten August."' },
      { q: 'Wie lange dauert der Umzug?', qEn: 'How long does the move take?', options: ['zwei Stunden', 'drei Stunden', 'etwa vier Stunden', 'sechs Stunden'], optionsEn: ['two hours', 'three hours', 'about four hours', 'six hours'], answer: 2,
        explain: '"Etwa vier Stunden."' }
    ]
  },

  speaking: [
    { task: "Dein Partner fragt: Wann hast du Deutschkurs?", taskEn: "Your partner asks: when do you have your German class?", de: "Am Montag und am Mittwoch, ab acht Uhr.", en: "On Monday and Wednesday, from eight o'clock." },
    { task: "Deine Freundin fragt: Wie lange dauert der Kurs?", taskEn: "Your friend asks: how long does the class last?", de: "Der Kurs dauert zwei Stunden. Danach gehe ich nach Hause.", en: "The class lasts two hours. Afterwards I go home." },
    { task: "Dein Freund fragt: Wann hast du Zeit?", taskEn: "Your friend asks: when do you have time?", de: "Am Wochenende, aber erst am Sonntag.", en: "At the weekend, but not until Sunday." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write your week and a plan in five sentences using dative time expressions. Use am (a day or part of the day), im (a month or season), seit (how long you\u2019ve studied), and nach or vor (an event). Front at least one time phrase and keep the verb in position 2.',
    starters: ['Am Montag …', 'Im Sommer …', 'Seit … lerne ich …', 'Nach dem Kurs …'],
    placeholder: 'Am Montag arbeite ich. Im Sommer fahre ich …',
    minWords: 22
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct preposition: "___ Sommer fahren wir ans Meer."',
      options: ['Am', 'Im', 'Seit', 'Vor'],
      answer: 1,
      explain: 'Seasons take im: im Sommer.'
    },
    gap: {
      // am day + im month
      sentence: ['', ' Montag arbeite ich, und ', ' Juli habe ich Urlaub.'],
      gaps: [ { answer: 'Am', accepts: ['am'] }, { answer: 'im', accepts: ['im'] } ],
      explain: 'am + day (am Montag); im + month (im Juli).'
    },
    match: {
      q: 'Match each time preposition to its use.',
      pairs: [
        { noun: 'am', art: 'day / part of day' },
        { noun: 'im', art: 'month / season' },
        { noun: 'seit', art: 'how long (duration)' },
        { noun: 'nach', art: 'after an event' }
      ]
    },
    builder: {
      target: 'Build: "On Monday I work."',
      bank: ['Am', 'Montag', 'arbeite', 'ich'],
      answer: ['Am', 'Montag', 'arbeite', 'ich'],
      roles: { 'Am': 'r-preposition', 'Montag': 'r-time', 'arbeite': 'r-verb', 'ich': 'r-subject' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which preposition goes with a weekday?', options: ['im', 'am', 'seit', 'vor'], answer: 1,
      explain: 'am Montag — days take am.' },
    { q: 'Complete: "___ Mai ist das Wetter schön."', options: ['Am', 'Im', 'Seit', 'Ab'], answer: 1,
      explain: 'Months take im: im Mai.' },
    { q: 'How do you say "for two months" (still going)?', options: ['für zwei Monate', 'seit zwei Monaten', 'ab zwei Monaten', 'nach zwei Monaten'], answer: 1,
      explain: 'Ongoing time → seit + dative: seit zwei Monaten.' },
    { q: 'Complete: "Wir trinken Kaffee ___ dem Kurs."', options: ['nach', 'am', 'im', 'seit'], answer: 0,
      explain: 'nach + dative for "after the class": nach dem Kurs.' },
    { q: 'Which is correct?', options: ['Am Abend ich lerne.', 'Am Abend lerne ich.', 'Ich am Abend lerne.', 'Lerne am Abend ich.'], answer: 1,
      explain: 'After a front time phrase the verb is position 2: "Am Abend lerne ich."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-preposition', html: '<span class="de">am</span> = days & day-parts (am Montag, am Abend); <span class="de">im</span> = months & seasons (im Mai, im Sommer).' },
    { c: 'r-preposition', html: '<span class="de">seit</span> = how long (seit zwei Monaten); <span class="de">ab</span> = from now on (ab morgen).' },
    { c: 'r-preposition', html: '<span class="de">nach / vor</span> place events (nach dem Kurs, vor der Prüfung); <span class="de">vom … bis …</span> = a period. All dative.' }
  ],
  revisionTips: [
    'Group the prepositions by time type: am = day, im = month/season, seit = duration, nach/vor = event.',
    'Use seit (not für) for time that began in the past and still continues.',
    'Front a time phrase and flip: "Am Abend lerne ich." — verb stays in position 2.'
  ]
};

window.CHAPTER = CHAPTER;
