/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 2 · Chapter 21
   "Uhrzeit"  (Telling the time, days & appointments)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-21 word list (44 words).
   Recycles Chapters 1–20 throughout. Theme = making a plan.
============================================================ */
const CHAPTER = {
  id: 'a1-21-uhrzeit',
  phase: 'A1 · Phase 2',
  number: 21,
  title: 'Uhrzeit',
  titleEn: 'Telling the Time',
  description: 'Ask and tell the time, name the days of the week, and pin events to the clock. Learn Wie spät ist es?, the halb / Viertel / nach / vor system, and the little words that schedule a life — um, am, von … bis.',
  xp: 160,
  time: 30,
  difficulty: 'Beginner',
  nextChapter: { number: 22, title: 'Berufe & Arbeit', titleEn: 'Jobs & Work' , href: 'chapter-a1-22-berufe.html' },

  heroAnimationPath: null,

  // ---------- Story Dialogue (signature section — before vocab/grammar) ----------
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'After the party plan, the group needs a time. Mara checks the calendar — her class runs until the afternoon — while Jonas, predictably, wants the latest possible start. Watch how every appointment locks onto the clock with um, am and von…bis.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear halb, Viertel, nach & vor on a real clock'
    ],
    scene: 'In der Mensa \u2014 Terminplanung, Berlin',
    femaleSpeakers: ['Mara'],
    dialogue: [
      { speaker: 'Mara', tokens: [
        { w: 'Jonas', role: 'r-name', en: 'Jonas', hi: 'योनास', pron: 'YO-nas', type: 'Name · person' },
        { w: ',', plain: true },
        { w: 'wann', role: 'r-question', en: 'when', hi: 'कब', pron: 'van', type: 'Question word', why: 'wann? asks for a time (this chapter).', ex: 'Wann beginnt der Film?', exEn: 'When does the film start?' },
        { w: 'beginnt', role: 'r-verb', en: 'starts', hi: 'शुरू होती है', pron: 'be-GINT', type: 'Verb · beginnen' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Film', role: 'r-subject', en: 'film', hi: 'फ़िल्म', pron: 'film', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'Jonas, when does the film start?', hi: 'Jonas, film kab shuru hoti hai?' },
      { speaker: 'Jonas', side: 'right', tokens: [
        { w: 'Um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock time', why: 'um + clock time (this chapter).', ex: 'um acht Uhr', exEn: 'at eight o\u2019clock' },
        { w: 'acht', role: 'r-time', en: 'eight', hi: 'आठ', pron: 'akht', type: 'Number' },
        { w: 'Uhr', role: 'r-time', en: 'o\u2019clock', hi: 'बजे', pron: 'oor', type: 'Noun · time', why: 'Uhr marks clock time (this chapter).', ex: 'acht Uhr', exEn: 'eight o\u2019clock' },
        { w: '.', plain: true },
        { w: 'Hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'At eight o\u2019clock. Do you have time?', hi: 'Aath baje. Tumhaare paas time hai?' },
      { speaker: 'Mara', tokens: [
        { w: 'Moment', role: 'r-subject', en: 'one moment', hi: 'एक पल', pron: 'mo-MENT', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Kurs', role: 'r-subject', en: 'course', hi: 'कोर्स', pron: 'koors', type: 'Noun · masc.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition · von … bis', why: 'von … bis = from … to (this chapter).', ex: 'von zwei bis fünf', exEn: 'from two to five' },
        { w: 'zwei', role: 'r-time', en: 'two', hi: 'दो', pron: 'tsvai', type: 'Number' },
        { w: 'bis', role: 'r-preposition', en: 'until', hi: 'तक', pron: 'bis', type: 'Preposition · von … bis' },
        { w: 'sieben', role: 'r-time', en: 'seven', hi: 'सात', pron: 'ZEE-ben', type: 'Number' },
        { w: '.', plain: true }
      ], en: 'One moment. My course is from two until seven.', hi: 'Ek pal. Mera course do se saat tak hai.' },
      { speaker: 'Jonas', side: 'right', tokens: [
        { w: 'Oh', role: 'r-subject', en: 'oh', hi: 'ओह', pron: 'oh', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'spät', role: 'r-adjective', en: 'late', hi: 'देर', pron: 'shpayt', type: 'Adjective', why: 'spät (this chapter).', ex: 'Das ist zu spät.', exEn: 'That is too late.' },
        { w: '.', plain: true },
        { w: 'Kannst', role: 'r-modalverb', en: 'can', hi: 'सकती हो', pron: 'kanst', type: 'Modal · können (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock time' },
        { w: 'halb', role: 'r-time', en: 'half (to)', hi: 'साढ़े', pron: 'halp', type: 'Time word', why: 'halb acht = 7:30 — half TO eight (this chapter).', ex: 'halb acht', exEn: 'half past seven' },
        { w: 'acht', role: 'r-time', en: 'eight', hi: 'आठ', pron: 'akht', type: 'Number' },
        { w: 'kommen', role: 'r-verb', en: 'come', hi: 'आना', pron: 'KO-men', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Oh! That is very late. Can you come at half past seven?', hi: 'Oh! Yeh bahut der hai. Kya tum saade saat baje aa sakti ho?' },
      { speaker: 'Mara', tokens: [
        { w: 'Halb', role: 'r-time', en: 'half (to)', hi: 'साढ़े', pron: 'halp', type: 'Time word' },
        { w: 'acht', role: 'r-time', en: 'eight', hi: 'आठ', pron: 'akht', type: 'Number' },
        { w: '?', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'nach', role: 'r-preposition', en: 'after', hi: 'के बाद', pron: 'nahkh', type: 'Preposition · time', why: 'nach = past/after in clock times (this chapter).', ex: 'nach sieben', exEn: 'after seven' },
        { w: 'sieben', role: 'r-time', en: 'seven', hi: 'सात', pron: 'ZEE-ben', type: 'Number' },
        { w: ',', plain: true },
        { w: 'oder', role: 'r-conjunction', en: 'right', hi: 'ना', pron: 'OH-der', type: 'Tag question' },
        { w: '?', plain: true }
      ], en: 'Half past seven? That is after seven, right?', hi: 'Saade saat? Yaani saat ke baad, na?' },
      { speaker: 'Jonas', side: 'right', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'genug', role: 'r-adverb', en: 'enough', hi: 'काफ़ी', pron: 'ge-NOOK', type: 'Adverb' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Exactly! Then we have enough time.', hi: 'Bilkul! Toh hamaare paas kaafi time hai.' },
      { speaker: 'Mara', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'wie', role: 'r-question', en: 'how', hi: 'कितनी', pron: 'vee', type: 'Question word' },
        { w: 'lange', role: 'r-time', en: 'long', hi: 'देर', pron: 'LANG-uh', type: 'Adverb · time', why: '"Wie lange?" asks about duration (this chapter).', ex: 'Wie lange dauert das?', exEn: 'How long does it take?' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Film', role: 'r-subject', en: 'film', hi: 'फ़िल्म', pron: 'film', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'Good! And how long is the film?', hi: 'Achha! Aur film kitni lambi hai?' },
      { speaker: 'Jonas', side: 'right', tokens: [
        { w: 'Von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition · von … bis' },
        { w: 'acht', role: 'r-time', en: 'eight', hi: 'आठ', pron: 'akht', type: 'Number' },
        { w: 'bis', role: 'r-preposition', en: 'until', hi: 'तक', pron: 'bis', type: 'Preposition · von … bis' },
        { w: 'Viertel', role: 'r-time', en: 'quarter', hi: 'पौन', pron: 'FIR-tel', type: 'Time word', why: 'Viertel vor elf = quarter to eleven (this chapter).', ex: 'Viertel vor elf', exEn: 'quarter to eleven' },
        { w: 'vor', role: 'r-preposition', en: 'to (before)', hi: 'से पहले', pron: 'for', type: 'Preposition · time' },
        { w: 'elf', role: 'r-time', en: 'eleven', hi: 'ग्यारह', pron: 'elf', type: 'Number' },
        { w: '.', plain: true }
      ], en: 'From eight until quarter to eleven.', hi: 'Aath se paune gyarah tak.' },
      { speaker: 'Mara', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'kommen', role: 'r-verb', en: 'come', hi: 'आते हैं', pron: 'KO-men', type: 'Verb · kommen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock time' },
        { w: 'halb', role: 'r-time', en: 'half (to)', hi: 'साढ़े', pron: 'halp', type: 'Time word' },
        { w: 'acht', role: 'r-time', en: 'eight', hi: 'आठ', pron: 'akht', type: 'Number' },
        { w: '.', plain: true },
        { w: 'Bis', role: 'r-subject', en: 'until', hi: 'तक', pron: 'bis', type: 'Phrase (part)' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '!', plain: true }
      ], en: 'Perfect. Then we come at half past seven. See you tomorrow!', hi: 'Badhiya. Toh hum saade saat baje aayenge. Kal milte hain!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German has two clock styles. <strong>Official</strong> (timetables): <span class="de">sieben Uhr dreißig</span> = 7:30. <strong>Spoken</strong> (daily life): <span class="de r-time">halb acht</span> — and here\u2019s the trap: <span class="de">halb acht</span> means <strong>half TO eight = 7:30</strong>, not 8:30. To pin an event to the clock, use <span class="de">um</span>: <span class="de">Der Kurs beginnt um neun.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is TELLING THE TIME (Uhrzeit): asking the time, the spoken clock (halb, Viertel nach, Viertel vor), official time, days of the week, and scheduling with um, am, von … bis. ' +
    'The learner wrote sentences about times and a schedule below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Ask the time with "Wie spät ist es?" or "Wie viel Uhr ist es?". Answer with "Es ist …".\n' +
    '- halb + NEXT hour means half TO that hour: "halb acht" = 7:30, "halb zehn" = 9:30. This is the most common beginner error.\n' +
    '- "Viertel nach drei" = 3:15; "Viertel vor fünf" = 4:45. "zehn nach drei" = 3:10; "zehn vor drei" = 2:50.\n' +
    '- Official time uses 0–24 with Uhr: "Der Zug fährt um 14 Uhr 30." Spoken time uses halb/Viertel/nach/vor with 1–12.\n' +
    '- Schedule with "um" + clock time (um acht Uhr), "am" + day/part of day (am Montag, am Abend; BUT "in der Nacht"), "von … bis" for ranges.\n' +
    '- Days: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag — all masculine (der), all capitalised. "montags" = on Mondays (habitual).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Clock check:</b> one sentence on whether halb / Viertel / nach / vor were used correctly.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — you can tell the time and schedule with um / am / von … bis. On to <span class="de">Berufe & Arbeit</span>.',
    mid: 'Good. Re-read the halb / Viertel card once (remember: halb acht = 7:30), then continue.',
    low: 'Worth another pass — focus on the spoken-clock card in the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Der', role: 'r-article' }, { w: 'Kurs', role: 'r-subject' },
    { w: 'beginnt', role: 'r-verb' }, { w: 'um', role: 'r-preposition' },
    { w: 'neun', role: 'r-time' }, { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the two clock styles and the one trap (halb acht = 7:30).' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Pin the party to the clock with Mara and Mara — hear um, am and von … bis.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the clock words, the days of the week, and the scheduling vocabulary.' },
    { id: 'grammar',    label: 'Telling time', tag: 'core',
      objective: 'Master Wie spät ist es?, halb / Viertel / nach / vor, and scheduling with um / am / von … bis.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a daily schedule full of clock times and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch the times and appointments, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Ask and tell the time, and arrange a meeting time out loud.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five time sentences and a short daily schedule.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Read clocks, schedule with um/am, and fix errors with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All clock words, days of the week and scheduling vocabulary with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Clock-reading drills, schedule-building tasks, error correction, and a daily-plan writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'Wie spät ist es?, halb / Viertel / nach / vor, official vs spoken time, um / am / von … bis, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Wie spät ist es?', text: 'Ask and tell the time' },
    { de: 'halb acht = 7:30', text: 'Read the spoken clock' },
    { de: 'Viertel nach / vor', text: 'Use quarter past & quarter to' },
    { de: 'um · am · von … bis', text: 'Schedule events on the clock' },
    { de: 'Montag … Sonntag', text: 'Name the days of the week' }
  ],

  // ---------- Vocabulary (44 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'am', pos: 'preposition', en: 'on, at (day/part of day)', hi: 'को', ex: 'Am Montag habe ich Kurs.', exEn: 'On Monday I have class.' },
    { de: 'Viertel', art: 'das', gender: 'n', plural: 'Viertel', pos: 'noun', en: 'quarter', hi: 'चौथाई', ex: 'Es ist Viertel nach drei.', exEn: 'It is quarter past three.' },
    { de: 'Dienstag', art: 'der', gender: 'm', plural: 'Dienstage', pos: 'noun', en: 'Tuesday', hi: 'मंगलवार', ex: 'Am Dienstag spiele ich Fußball.', exEn: 'On Tuesday I play football.' },
    { de: 'Donnerstag', art: 'der', gender: 'm', plural: 'Donnerstage', pos: 'noun', en: 'Thursday', hi: 'गुरुवार', ex: 'Der Kurs ist am Donnerstag.', exEn: 'The course is on Thursday.' },
    { de: 'Freitag', art: 'der', gender: 'm', plural: 'Freitage', pos: 'noun', en: 'Friday', hi: 'शुक्रवार', ex: 'Am Freitag gehe ich ins Kino.', exEn: 'On Friday I go to the cinema.' },
    { de: 'Mittwoch', art: 'der', gender: 'm', plural: 'Mittwoche', pos: 'noun', en: 'Wednesday', hi: 'बुधवार', ex: 'Am Mittwoch lerne ich.', exEn: 'On Wednesday I study.' },
    { de: 'Montag', art: 'der', gender: 'm', plural: 'Montage', pos: 'noun', en: 'Monday', hi: 'सोमवार', ex: 'Am Montag beginnt der Kurs.', exEn: 'On Monday the course begins.' },
    { de: 'Samstag', art: 'der', gender: 'm', plural: 'Samstage', pos: 'noun', en: 'Saturday', hi: 'शनिवार', ex: 'Am Samstag ist die Party.', exEn: 'On Saturday is the party.' },
    { de: 'Sonntag', art: 'der', gender: 'm', plural: 'Sonntage', pos: 'noun', en: 'Sunday', hi: 'रविवार', ex: 'Am Sonntag schlafe ich lange.', exEn: 'On Sunday I sleep late.' },
    { de: 'Tag', art: 'der', gender: 'm', plural: 'Tage', pos: 'noun', en: 'day', hi: 'दिन', ex: 'Jeden Tag lerne ich Deutsch.', exEn: 'Every day I study German.' },
    { de: 'Termin', art: 'der', gender: 'm', plural: 'Termine', pos: 'noun', en: 'appointment', hi: 'अपॉइंटमेंट', ex: 'Ich habe einen Termin um zehn.', exEn: 'I have an appointment at ten.' },
    { de: 'Uhrzeit', art: 'die', gender: 'f', plural: 'Uhrzeiten', pos: 'noun', en: 'time (of day)', hi: 'समय', ex: 'Wie ist die Uhrzeit?', exEn: 'What time is it?' },
    { de: 'Woche', art: 'die', gender: 'f', plural: 'Wochen', pos: 'noun', en: 'week', hi: 'सप्ताह', ex: 'Diese Woche ist stressig.', exEn: 'This week is stressful.' },
    { de: 'halb', pos: 'adverb', en: 'half', hi: 'साढ़े', ex: 'Es ist halb acht. (7:30)', exEn: 'It is half past seven.' },
    { de: 'Uhr', art: 'die', gender: 'f', plural: 'Uhren', pos: 'noun', en: 'o\'clock; clock', hi: 'बजे; घड़ी', ex: 'Es ist zehn Uhr.', exEn: 'It is ten o\'clock.' },
    { de: 'um', pos: 'preposition', en: 'at (clock time)', hi: 'बजे', ex: 'Der Kurs beginnt um neun Uhr.', exEn: 'The course begins at nine o\'clock.' },
    { de: 'von … bis', pos: 'phrase', en: 'from … to', hi: 'से … तक', ex: 'Der Kurs ist von zwei bis vier.', exEn: 'The course is from two to four.' },
    // ===== Active Support =====
    { de: 'bis', pos: 'preposition', en: 'until, till', hi: 'तक', ex: 'Ich arbeite bis fünf Uhr.', exEn: 'I work until five o\'clock.' },
    { de: 'Abend', art: 'der', gender: 'm', plural: 'Abende', pos: 'noun', en: 'evening', hi: 'शाम', ex: 'Am Abend sehe ich fern.', exEn: 'In the evening I watch TV.' },
    { de: 'Kalender', art: 'der', gender: 'm', plural: 'Kalender', pos: 'noun', en: 'calendar', hi: 'कैलेंडर', ex: 'Ich schaue in den Kalender.', exEn: 'I look at the calendar.' },
    { de: 'Wochentag', art: 'der', gender: 'm', plural: 'Wochentage', pos: 'noun', en: 'weekday', hi: 'सप्ताह का दिन', ex: 'Montag ist ein Wochentag.', exEn: 'Monday is a weekday.' },
    { de: 'Verabredung', art: 'die', gender: 'f', plural: 'Verabredungen', pos: 'noun', en: 'appointment, date, plan', hi: 'मुलाक़ात', ex: 'Ich habe eine Verabredung um acht.', exEn: 'I have a date at eight.' },
    { de: 'dienstags', pos: 'adverb', en: 'on Tuesdays', hi: 'हर मंगलवार', ex: 'Dienstags spiele ich Tennis.', exEn: 'On Tuesdays I play tennis.' },
    { de: 'donnerstags', pos: 'adverb', en: 'on Thursdays', hi: 'हर गुरुवार', ex: 'Donnerstags habe ich frei.', exEn: 'On Thursdays I\'m free.' },
    { de: 'freitags', pos: 'adverb', en: 'on Fridays', hi: 'हर शुक्रवार', ex: 'Freitags gehe ich aus.', exEn: 'On Fridays I go out.' },
    { de: 'kurz', pos: 'adverb', en: 'just (after/before)', hi: 'थोड़ा', ex: 'Es ist kurz nach acht.', exEn: 'It is just after eight.' },
    { de: 'mittwochs', pos: 'adverb', en: 'on Wednesdays', hi: 'हर बुधवार', ex: 'Mittwochs koche ich.', exEn: 'On Wednesdays I cook.' },
    { de: 'montags', pos: 'adverb', en: 'on Mondays', hi: 'हर सोमवार', ex: 'Montags ist der Kurs.', exEn: 'On Mondays is the course.' },
    { de: 'nach', pos: 'preposition', en: 'past (after the hour)', hi: 'बजकर', ex: 'Es ist zehn nach drei. (3:10)', exEn: 'It is ten past three.' },
    { de: 'samstags', pos: 'adverb', en: 'on Saturdays', hi: 'हर शनिवार', ex: 'Samstags feiern wir.', exEn: 'On Saturdays we celebrate.' },
    { de: 'sonntags', pos: 'adverb', en: 'on Sundays', hi: 'हर रविवार', ex: 'Sonntags ruhe ich.', exEn: 'On Sundays I rest.' },
    { de: 'spät', pos: 'adjective', en: 'late', hi: 'देर', ex: 'Wie spät ist es?', exEn: 'What time is it? (How late is it?)' },
    { de: 'verabreden', pos: 'verb', en: 'to make plans, arrange to meet', hi: 'मुलाक़ात तय करना', ex: 'Wir verabreden uns um acht.', exEn: 'We arrange to meet at eight.', conj: { praesens: 'verabredet sich', praeteritum: 'verabredete sich', perfekt: 'hat sich verabredet' } },
    { de: 'vor', pos: 'preposition', en: 'to (before the hour)', hi: 'बजने में', ex: 'Es ist Viertel vor fünf. (4:45)', exEn: 'It is quarter to five.' },
    { de: 'wann', pos: 'adverb', en: 'when', hi: 'कब', ex: 'Wann beginnt der Kurs?', exEn: 'When does the course begin?' },
    { de: 'wie lange', pos: 'phrase', en: 'how long', hi: 'कितनी देर', ex: 'Wie lange dauert der Film?', exEn: 'How long does the film last?' },
    // ===== Passive =====
    { de: 'Samstagabend', art: 'der', gender: 'm', plural: 'Samstagabende', pos: 'noun', en: 'Saturday evening', hi: 'शनिवार की शाम', ex: 'Am Samstagabend ist die Party.', exEn: 'The party is on Saturday evening.' },
    { de: 'Sonntagnachmittag', art: 'der', gender: 'm', plural: 'Sonntagnachmittage', pos: 'noun', en: 'Sunday afternoon', hi: 'रविवार दोपहर', ex: 'Am Sonntagnachmittag wandern wir.', exEn: 'On Sunday afternoon we hike.' },
    { de: 'halbe Stunde', art: 'die', gender: 'f', plural: 'halbe Stunden', pos: 'noun', en: 'half an hour', hi: 'आधा घंटा', ex: 'Der Bus kommt in einer halben Stunde.', exEn: 'The bus comes in half an hour.' },
    { de: 'Minute', art: 'die', gender: 'f', plural: 'Minuten', pos: 'noun', en: 'minute', hi: 'मिनट', ex: 'Warte fünf Minuten!', exEn: 'Wait five minutes!' },
    { de: 'Sekunde', art: 'die', gender: 'f', plural: 'Sekunden', pos: 'noun', en: 'second', hi: 'सेकंड', ex: 'Eine Sekunde, bitte!', exEn: 'One second, please!' },
    { de: 'inoffiziell', pos: 'adjective', en: 'informal (time)', hi: 'अनौपचारिक', ex: 'Halb acht ist inoffiziell.', exEn: '"Halb acht" is informal.' },
    { de: 'offiziell', pos: 'adjective', en: 'official', hi: 'औपचारिक', ex: 'Offiziell sagt man 19:30 Uhr.', exEn: 'Officially you say 19:30.' },
    // ===== Reference / System =====
    { de: 'Tageszeit', art: 'die', gender: 'f', plural: 'Tageszeiten', pos: 'noun', en: 'time of day', hi: 'दिन का समय', ex: 'Der Morgen ist eine Tageszeit.', exEn: 'The morning is a time of day.' }
  ],

  // ---------- Telling time (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Asking & telling the time',
      body: [
        'Two ways to ask, one way to answer. Both questions mean the same thing.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Wie spät ist es?</span>', 'What time is it? (lit. how late)'],
          ['<span class="de">Wie viel Uhr ist es?</span>', 'What time is it?'],
          ['<span class="de">Es ist zehn Uhr.</span>', 'It is ten o\u2019clock.'],
          ['<span class="de">Es ist drei Uhr.</span>', 'It is three o\u2019clock.']
        ]
      },
      note: 'Answer with <b>Es ist … Uhr</b> for full hours. <b>Uhr</b> = o\u2019clock; you only add it for full hours (zehn Uhr), not with halb/Viertel phrases.',
      hinglish: 'Do tarah se poochho: <b>Wie spät ist es?</b> ya <b>Wie viel Uhr ist es?</b> — dono ka matlab "kitne baje hain?". Jawab: <b>Es ist … Uhr</b>. <b>Uhr</b> sirf poore ghante ke saath (zehn Uhr), halb/Viertel ke saath nahi.'
    },
    {
      title: 'The spoken clock — halb, Viertel, nach, vor',
      goldenRule: '<b>halb</b> looks <b>forward</b>: <span class="de">halb acht</span> = 7:30, not 8:30.',
      why: 'German is not saying "half past seven" — it is saying "half<i>way to</i> eight". The hour you hear is the one you are heading toward, not the one you have left.',
      formula: [
        'halb acht      =  7:30   (half way TO eight)',
        'Viertel nach 8 =  8:15   (nach = past)',
        'Viertel vor 8  =  7:45   (vor = to)'
      ],
      memoryTrick: '<b>halb</b> ke baad jo hour sunai de, usse <b>ek ghanta kam</b> karo. <b>nach</b> = baad, <b>vor</b> = pehle.',
      recap: [
        '<b>halb acht</b> = 7:30 — always one hour less than the number you hear.',
        '<b>nach</b> = past the hour · <b>vor</b> = before the hour.',
        '<b>Viertel</b> = 15 minutes.'
      ],
      body: [
        'Everyday German uses these four words on a 1\u201312 clock. The big trap: <strong>halb</strong> counts toward the NEXT hour.'
      ],
      table: {
        head: ['Clock', 'German', 'Careful!'],
        rows: [
          ['3:15', '<span class="de">Viertel nach drei</span>', 'quarter PAST three'],
          ['4:45', '<span class="de">Viertel vor fünf</span>', 'quarter TO five'],
          ['7:30', '<span class="de">halb acht</span>', 'half to EIGHT = 7:30!'],
          ['3:10', '<span class="de">zehn nach drei</span>', 'ten past three']
        ]
      },
      note: '<b>nach</b> = past, <b>vor</b> = to. The killer rule: <b>halb acht = 7:30</b>, not 8:30 — German counts the half toward the coming hour. <b>halb zehn</b> = 9:30.',
      hinglish: '<b>nach</b> = baad (past), <b>vor</b> = pehle (to). Sabse badi trap: <b>halb acht = 7:30</b>, 8:30 nahi! German aadhe ghante ko AANE WALE ghante ki taraf ginta hai. <b>halb zehn</b> = 9:30.'
    },
    {
      title: 'Official vs spoken time',
      goldenRule: 'Official time counts to <b>24</b> and uses only <b>Uhr</b>; spoken time counts to <b>12</b> and uses <b>halb / Viertel / nach / vor</b>.',
      memoryTrick: 'Station, TV, timetable = 24-hour. Doston se baat = 12-hour. Dono seekhna zaroori hai, kyunki dono roz sunai dete hain.',
      body: [
        'Timetables, TV and trains use the 24-hour official clock; conversation uses the spoken clock.'
      ],
      table: {
        head: ['Clock', 'Official (24h)', 'Spoken'],
        rows: [
          ['7:30', '<span class="de">sieben Uhr dreißig</span>', '<span class="de">halb acht</span>'],
          ['14:15', '<span class="de">vierzehn Uhr fünfzehn</span>', '<span class="de">Viertel nach zwei</span>'],
          ['19:45', '<span class="de">neunzehn Uhr fünfundvierzig</span>', '<span class="de">Viertel vor acht</span>'],
          ['20:00', '<span class="de">zwanzig Uhr</span>', '<span class="de">acht Uhr (abends)</span>']
        ]
      },
      note: 'Official time = number + <b>Uhr</b> + minutes, on a 0\u201324 clock (great because there\u2019s no halb trap). Spoken time uses 1\u201312 with halb / Viertel / nach / vor.',
      hinglish: 'Official (train, TV): number + <b>Uhr</b> + minute, 0\u201324 clock pe (yahaan halb wali trap nahi). Spoken (baat-cheet): 1\u201312 clock pe halb / Viertel / nach / vor ke saath. Dono seekho.'
    },
    {
      title: 'Scheduling: um, am, von … bis',
      body: [
        'Three little words pin events to the calendar and clock.'
      ],
      table: {
        head: ['Word', 'Use', 'Example'],
        rows: [
          ['<span class="de r-preposition">um</span>', 'at + clock time', '<span class="de">Der Kurs beginnt um neun Uhr.</span>'],
          ['<span class="de r-preposition">am</span>', 'on + day / part of day', '<span class="de">am Montag, am Abend</span>'],
          ['<span class="de r-preposition">von … bis</span>', 'from … to (a range)', '<span class="de">von zwei bis vier</span>'],
          ['<span class="de r-preposition">in der</span>', 'exception: at night', '<span class="de">in der Nacht</span>']
        ]
      },
      note: 'Clock time → <b>um</b> (um acht Uhr). Day or part of day → <b>am</b> (am Freitag, am Abend) — EXCEPT "in der Nacht". Range → <b>von … bis</b>. Habitual days drop the article: <b>montags</b> = every Monday.',
      hinglish: 'Clock time ke saath <b>um</b> (um acht Uhr). Din ya din ka hissa → <b>am</b> (am Freitag, am Abend) — sirf "in der Nacht" alag. Range → <b>von … bis</b>. "Har somvaar" = <b>montags</b> (article nahi).'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four time traps to avoid.' ],
      mistakes: [
        { wrong: 'halb acht = 8:30', right: 'halb acht = 7:30', why: 'halb counts toward the next hour — half TO eight.' },
        { wrong: 'Der Kurs beginnt in neun Uhr.', right: 'Der Kurs beginnt um neun Uhr.', why: 'Clock times take um, not in.' },
        { wrong: 'Ich komme an Montag.', right: 'Ich komme am Montag.', why: 'Days take am (an + dem → am).' },
        { wrong: 'Es ist zehn Uhr nach drei.', right: 'Es ist zehn nach drei.', why: 'Drop "Uhr" in nach/vor phrases — just "zehn nach drei".' }
      ],
      hinglish: 'Char galtiyan common hain. <b>halb acht</b> ka matlab 7:30 hai, 8:30 nahi. Clock time ke saath <b>um</b> aata hai, \u201cin\u201d nahi: <b>um neun Uhr</b>. Din ke saath <b>am</b> aata hai: <b>am Montag</b>. Aur <b>nach</b> ya <b>vor</b> wale phrase mein \u201cUhr\u201d nahi lagta: <b>zehn nach drei</b>.'
    }
  ],

  // ---------- Reading passage (daily schedule, clickable) ----------
  reading: {
    title: 'Mein Montag',
    titleEn: 'My Monday',
    tokens: [
      { w: 'Am', role: 'r-preposition', en: 'on', hi: 'को', pron: 'am', type: 'Preposition + day', why: '"am" + day (this chapter).', ex: 'am Montag', exEn: 'on Monday' },
      { w: 'Montag', role: 'r-time', en: 'Monday', hi: 'सोमवार', pron: 'MON-tahk', type: 'Noun · day', why: 'der Montag (this chapter).', ex: 'Am Montag beginnt die Woche.', exEn: 'On Monday the week begins.' },
      { w: 'beginnt', role: 'r-verb', en: 'begins', hi: 'शुरू होता है', pron: 'buh-GINT', type: 'Verb · beginnen', why: 'Verb position 2 after front time phrase (Chapter 19).', ex: 'Der Kurs beginnt um neun.', exEn: 'The course begins at nine.' },
      { w: 'mein', role: 'r-article', en: 'my (masc.)', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
      { w: 'Tag', role: 'r-subject', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.', why: 'der Tag (this chapter).', ex: 'Mein Tag beginnt früh.', exEn: 'My day begins early.' },
      { w: 'um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock', why: '"um" + clock time (this chapter).', ex: 'um sieben Uhr', exEn: 'at seven o\u2019clock' },
      { w: 'sieben', role: 'r-time', en: 'seven', hi: 'सात', pron: 'ZEE-ben', type: 'Number', why: 'sieben = 7 (recycled — Zahlen).', ex: 'um sieben Uhr', exEn: 'at seven' },
      { w: 'Uhr', role: 'r-time', en: 'o\u2019clock', hi: 'बजे', pron: 'oor', type: 'Noun · clock', why: 'Uhr (this chapter).', ex: 'sieben Uhr', exEn: 'seven o\u2019clock' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-article', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Deutschkurs', role: 'r-subject', en: 'German course', hi: 'जर्मन कोर्स', pron: 'DOYTSH-koors', type: 'Noun · masc.', why: 'der Kurs (recycled — Modalverben 1).', ex: 'Der Deutschkurs ist lang.', exEn: 'The German course is long.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition · time', why: '"von … bis" (this chapter).', ex: 'von neun bis zwölf', exEn: 'from nine to twelve' },
      { w: 'halb', role: 'r-time', en: 'half', hi: 'साढ़े', pron: 'halp', type: 'Clock word', why: 'halb neun = 8:30 (this chapter).', ex: 'halb neun', exEn: 'half past eight' },
      { w: 'neun', role: 'r-time', en: 'nine', hi: 'नौ', pron: 'noyn', type: 'Number', why: '"halb neun" = 8:30 (this chapter).', ex: 'halb neun', exEn: '8:30' },
      { w: 'bis', role: 'r-preposition', en: 'until', hi: 'तक', pron: 'bis', type: 'Preposition · time', why: 'bis (this chapter).', ex: 'bis zwölf', exEn: 'until twelve' },
      { w: 'zwölf', role: 'r-time', en: 'twelve', hi: 'बारह', pron: 'tsvölf', type: 'Number', why: 'zwölf = 12 (recycled — Zahlen).', ex: 'bis zwölf Uhr', exEn: 'until twelve' },
      { w: 'Uhr', role: 'r-time', en: 'o\u2019clock', hi: 'बजे', pron: 'oor', type: 'Noun · clock' },
      { w: '.', plain: true },
      { w: 'Um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock' },
      { w: 'Viertel', role: 'r-time', en: 'quarter', hi: 'सवा', pron: 'FEER-tel', type: 'Clock word', why: 'Viertel nach = quarter past (this chapter).', ex: 'Viertel nach eins', exEn: 'quarter past one' },
      { w: 'nach', role: 'r-preposition', en: 'past', hi: 'बजकर', pron: 'nakh', type: 'Clock word', why: '"Viertel nach eins" = 1:15 (this chapter).', ex: 'Viertel nach eins', exEn: 'quarter past one' },
      { w: 'eins', role: 'r-time', en: 'one', hi: 'एक', pron: 'ines', type: 'Number', why: 'eins = 1 (recycled — Zahlen).', ex: 'Viertel nach eins', exEn: 'quarter past one' },
      { w: 'esse', role: 'r-verb', en: 'eat', hi: 'खाता हूँ', pron: 'E-suh', type: 'Verb · essen (ich)', why: 'essen (recycled — Essen & Trinken).', ex: 'Ich esse zu Mittag.', exEn: 'I have lunch.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition + dat.' },
      { w: 'der', role: 'r-article', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article · dative' },
      { w: 'Mensa', role: 'r-place', en: 'canteen', hi: 'कैंटीन', pron: 'MEN-za', type: 'Noun · place', why: 'die Mensa (recycled — Unregelmäßige Verben).', ex: 'in der Mensa', exEn: 'in the canteen' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-preposition', en: 'in the', hi: 'को', pron: 'am', type: 'Preposition + time' },
      { w: 'Abend', role: 'r-time', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun · masc.', why: 'der Abend (this chapter).', ex: 'am Abend', exEn: 'in the evening' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben (ich)', why: 'haben (recycled — Akkusativ).', ex: 'Ich habe einen Termin.', exEn: 'I have an appointment.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock' },
      { w: 'acht', role: 'r-time', en: 'eight', hi: 'आठ', pron: 'akht', type: 'Number', why: 'acht = 8 (recycled — Zahlen).', ex: 'um acht Uhr', exEn: 'at eight' },
      { w: 'einen', role: 'r-akkusativ', en: 'an (masc. acc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · acc.', why: 'masc. accusative ein → einen (Chapter 12).', ex: 'einen Termin', exEn: 'an appointment' },
      { w: 'Termin', role: 'r-object', en: 'appointment', hi: 'अपॉइंटमेंट', pron: 'tair-MEEN', type: 'Noun · masc.', why: 'der Termin (this chapter).', ex: 'einen Termin haben', exEn: 'to have an appointment' },
      { w: '.', plain: true }
    ],
    translation: 'On Monday my day begins at seven o\u2019clock. The German course is from half past eight until twelve. At quarter past one I eat in the canteen. In the evening I have an appointment at eight.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair — never invented.
    dialogue: [
      { id: 'A1_021_L001', speaker: 'Jonas', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wie spät ist es, Mara?', en: 'What time is it, Mara?' },
      { id: 'A1_021_L002', speaker: 'Mara', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Es ist Viertel vor neun.', en: 'It is quarter to nine.' },
      { id: 'A1_021_L003', speaker: 'Jonas', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Oh, der Kurs beginnt um neun Uhr!', en: 'Oh, the course begins at nine o\'clock!' },
      { id: 'A1_021_L004', speaker: 'Mara', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Kein Problem, wir haben noch eine Viertelstunde. Und wann triffst du Max?', en: 'No problem, we still have a quarter of an hour. And when are you meeting Max?' },
      { id: 'A1_021_L005', speaker: 'Jonas', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Am Abend, um halb acht. Wir gehen ins Kino.', en: 'In the evening, at half past seven. We\'re going to the cinema.' },
      { id: 'A1_021_L006', speaker: 'Mara', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Wie lange dauert der Film?', en: 'How long does the film last?' },
      { id: 'A1_021_L007', speaker: 'Jonas', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Von halb acht bis zehn Uhr.', en: 'From half past seven until ten o\'clock.' }
    ],
    transcript: 'Wie spät ist es, Mara? Es ist Viertel vor neun. Oh, der Kurs beginnt um neun Uhr! Kein Problem, wir haben noch eine Viertelstunde. Und wann triffst du Max? Am Abend, um halb acht. Wir gehen ins Kino. Wie lange dauert der Film? Von halb acht bis zehn Uhr.',
    translation: 'What time is it, Mara? It is quarter to nine. Oh, the course begins at nine o\'clock! No problem, we still have a quarter of an hour. And when are you meeting Max? In the evening, at half past seven. We\'re going to the cinema. How long does the film last? From half past seven until ten o\'clock.',
    tokens: [
      { w: 'Wie' },
      { w: 'spät' },
      { w: 'ist' },
      { w: 'es' },
      { w: ',', plain: true },
      { w: 'Mara' },
      { w: '?', plain: true },
      { w: 'Es' },
      { w: 'ist' },
      { w: 'Viertel' },
      { w: 'vor' },
      { w: 'neun' },
      { w: '.', plain: true },
      { w: 'Oh' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'Kurs' },
      { w: 'beginnt' },
      { w: 'um' },
      { w: 'neun' },
      { w: 'Uhr' },
      { w: '!', plain: true },
      { w: 'Kein' },
      { w: 'Problem' },
      { w: ',', plain: true },
      { w: 'wir' },
      { w: 'haben' },
      { w: 'noch' },
      { w: 'eine' },
      { w: 'Viertelstunde' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wann' },
      { w: 'triffst' },
      { w: 'du' },
      { w: 'Max' },
      { w: '?', plain: true },
      { w: 'Am' },
      { w: 'Abend' },
      { w: ',', plain: true },
      { w: 'um' },
      { w: 'halb' },
      { w: 'acht' },
      { w: '.', plain: true },
      { w: 'Wir' },
      { w: 'gehen' },
      { w: 'ins' },
      { w: 'Kino' },
      { w: '.', plain: true },
      { w: 'Wie' },
      { w: 'lange' },
      { w: 'dauert' },
      { w: 'der' },
      { w: 'Film' },
      { w: '?', plain: true },
      { w: 'Von' },
      { w: 'halb' },
      { w: 'acht' },
      { w: 'bis' },
      { w: 'zehn' },
      { w: 'Uhr' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie viel Uhr ist es am Anfang?', qEn: 'What time is it at the start?', options: ['8:45', '9:15', '8:15', '9:45'], optionsEn: ['8:45', '9:15', '8:15', '9:45'], answer: 0,
        explain: '"Viertel vor neun" = quarter to nine = 8:45.' },
      { q: 'Wann trifft Jonas Max?', qEn: 'When is Jonas meeting Max?', options: ['um acht', 'um halb acht (7:30)', 'um halb neun (8:30)', 'um neun'], optionsEn: ['at eight', 'at half past seven (7:30)', 'at half past eight (8:30)', 'at nine'], answer: 1,
        explain: '"… um halb acht" = 7:30.' },
      { q: 'Wie lange dauert der Film?', qEn: 'How long does the film last?', options: ['7:30 bis 10:00', '8:30 bis 10:00', '7:30 bis 9:00', '8:00 bis 10:00'], optionsEn: ['7:30 to 10:00', '8:30 to 10:00', '7:30 to 9:00', '8:00 to 10:00'], answer: 0,
        explain: '"Von halb acht (7:30) bis zehn Uhr (10:00)."' }
    ]
  },

  // ---------- Speaking prompts ----------
  speaking: [
    { task: "Dein Partner fragt: Wie spät ist es? Es ist 8:45.", taskEn: "Your partner asks: what time is it? It's 8:45.", de: "Es ist Viertel vor neun.", en: "It's a quarter to nine." },
    { task: "Deine Lehrerin fragt: Wann beginnt der Kurs?", taskEn: "Your teacher asks: when does the class start?", de: "Der Kurs beginnt um neun Uhr und geht von neun bis zwölf.", en: "The class starts at nine and runs from nine to twelve." },
    { task: "Du machst mit Max einen Termin am Abend. Sag die Zeit.", taskEn: "You're arranging an evening appointment with Max. Say the time.", de: "Wir treffen uns am Abend um halb acht.", en: "We'll meet in the evening at half past seven." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about your daily or weekly schedule. Use clock times with um (um acht Uhr), at least one halb or Viertel time, a day with am (am Montag), and one range with von … bis. Try to include "Wie spät ist es?" or an appointment.',
    starters: ['Am Montag beginnt … um …', 'Der Kurs ist von … bis …', 'Um halb … esse ich …', 'Am Abend …'],
    placeholder: 'Am Montag beginnt mein Tag um sieben Uhr …',
    minWords: 20
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'What time is "halb acht"?',
      options: ['8:30', '7:30', '7:15', '8:15'],
      answer: 1,
      explain: 'halb counts toward the next hour: halb acht = half TO eight = 7:30.'
    },
    gap: {
      // scheduling prepositions
      sentence: ['Der Kurs beginnt ', ' neun Uhr ', ' Montag.'],
      gaps: [ { answer: 'um', accepts: ['um'] }, { answer: 'am', accepts: ['am'] } ],
      explain: 'Clock time → um; day → am.'
    },
    match: {
      q: 'Match each clock time to its German.',
      pairs: [
        { noun: '3:15', art: 'Viertel nach drei' },
        { noun: '4:45', art: 'Viertel vor fünf' },
        { noun: '7:30', art: 'halb acht' },
        { noun: '10:00', art: 'zehn Uhr' }
      ]
    },
    builder: {
      target: 'Build: "The course begins at nine."',
      bank: ['Der', 'Kurs', 'beginnt', 'um', 'neun'],
      answer: ['Der', 'Kurs', 'beginnt', 'um', 'neun'],
      roles: { 'Der': 'r-article', 'Kurs': 'r-subject', 'beginnt': 'r-verb', 'um': 'r-preposition', 'neun': 'r-time' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'How do you ask "What time is it?"', options: ['Wo ist es?', 'Wie spät ist es?', 'Was ist es?', 'Wer ist es?'], answer: 1,
      explain: '"Wie spät ist es?" (or "Wie viel Uhr ist es?").' },
    { q: 'What does "halb zehn" mean?', options: ['10:30', '9:30', '10:15', '9:45'], answer: 1,
      explain: 'halb zehn = half to ten = 9:30.' },
    { q: 'Complete: "Der Kurs beginnt ___ acht Uhr."', options: ['am', 'in', 'um', 'von'], answer: 2,
      explain: 'Clock times take um: um acht Uhr.' },
    { q: 'Which means "quarter to five"?', options: ['Viertel nach fünf', 'Viertel vor fünf', 'halb fünf', 'fünf Uhr'], answer: 1,
      explain: 'vor = to (before): Viertel vor fünf = 4:45.' },
    { q: 'Which preposition fits "___ Montag"?', options: ['um', 'am', 'in', 'von'], answer: 1,
      explain: 'Days take am: am Montag.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-time', html: 'Ask the time: <span class="de">Wie spät ist es?</span> — answer <span class="de">Es ist … Uhr.</span>' },
    { c: 'r-time', html: 'The trap: <span class="de">halb acht = 7:30</span> (half TO eight). <span class="de">Viertel nach</span> = past, <span class="de">Viertel vor</span> = to.' },
    { c: 'r-preposition', html: 'Schedule it: <span class="de">um</span> + clock, <span class="de">am</span> + day, <span class="de">von … bis</span> for a range.' }
  ],
  revisionTips: [
    'Drill the trap daily: halb + next hour. halb acht = 7:30, halb zehn = 9:30.',
    'Match the three prepositions to their slot: um → clock, am → day, von … bis → range.',
    'Say the seven days in order out loud: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag.'
  ]
};

window.CHAPTER = CHAPTER;
