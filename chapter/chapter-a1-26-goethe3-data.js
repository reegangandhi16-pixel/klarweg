/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 3 · Chapter 26
   "Goethe Mini 3"  (Integrated revision & checkpoint 3)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-26 word list (33 words).
   Theme = punctuality, apologies & appointments. Recycles Ch1–25.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-26-goethe3',
  phase: 'A1 · Phase 3',
  number: 26,
  title: 'Goethe Mini 3',
  titleEn: 'Goethe Checkpoint 3',
  description: 'A Goethe-style consolidation checkpoint built around punctuality and appointments. Apologise, arrange a meeting, and pull everything from Chapters 1\u201325 together — time, dates, work, modal verbs and separable verbs — then finish with a mixed mini-exam.',
  xp: 180,
  time: 35,
  difficulty: 'Checkpoint',
  nextChapter: { number: 27, title: 'Präteritum haben/sein', titleEn: 'war & hatte' , href: 'chapter-a1-27-praeteritum.html' },

  heroAnimationPath: null,

  // ---------- Story Dialogue (signature section — before vocab/grammar) ----------
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'The study group agreed to meet at four to prepare for the checkpoint. It\'s ten past — and Britta is missing again. When she finally arrives, Ralf turns it into a real lesson: how to apologise, accept an apology, and arrange the next appointment, German-style.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Recycles time, dates, work & modal verbs from across A1'
    ],
    scene: 'Lerngruppe \u2014 Treffpunkt Café, Berlin',
    femaleSpeakers: ['Britta'],
    dialogue: [
      { speaker: 'Britta', tokens: [
        { w: 'Entschuldigung', role: 'r-subject', en: 'sorry', hi: 'माफ़ कीजिए', pron: 'ent-SHUL-di-gung', type: 'Politeness', why: 'Entschuldigung! = the standard apology (this chapter).', ex: 'Entschuldigung!', exEn: 'Sorry!' },
        { w: ',', plain: true },
        { w: 'Ralf', role: 'r-name', en: 'Ralf', hi: 'राल्फ़', pron: 'ralf', type: 'Name · person' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)' },
        { w: 'zu', role: 'r-adverb', en: 'too', hi: 'बहुत', pron: 'tsoo', type: 'Adverb' },
        { w: 'spät', role: 'r-adjective', en: 'late', hi: 'देर', pron: 'shpayt', type: 'Adjective', why: '"zu spät sein" = to be late (this chapter).', ex: 'Ich bin zu spät.', exEn: 'I am late.' },
        { w: '.', plain: true }
      ], en: 'Sorry, Ralf! I am late.', hi: 'Maaf kijiye, Ralf! Mujhe der ho gayi.' },
      { speaker: 'Ralf', side: 'right', tokens: [
        { w: 'Schon', role: 'r-adverb', en: 'already', hi: 'कोई', pron: 'shohn', type: 'Phrase (part)', why: '"Schon gut!" = it\u2019s all right (this chapter).', ex: 'Schon gut!', exEn: 'It is all right!' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'बात नहीं', pron: 'goot', type: 'Phrase (part)' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'macht', role: 'r-verb', en: 'makes', hi: 'बात', pron: 'makht', type: 'Verb · machen', why: '"Macht nichts!" = never mind (this chapter).', ex: 'Macht nichts!', exEn: 'Never mind!' },
        { w: 'nichts', role: 'r-akkusativ', en: 'nothing', hi: 'कुछ नहीं', pron: 'nikhts', type: 'Pronoun · acc.' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'warte', role: 'r-verb', en: 'am waiting', hi: 'इंतज़ार करता हूँ', pron: 'VAR-tuh', type: 'Verb · warten (ich)', why: 'warten = to wait (this chapter).', ex: 'Ich warte hier.', exEn: 'I am waiting here.' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: '.', plain: true }
      ], en: 'It is all right! Never mind. I am waiting here.', hi: 'Koi baat nahi! Kuch nahi hua. Main yahaan intezaar kar raha hoon.' },
      { speaker: 'Britta', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Kurs', role: 'r-subject', en: 'course', hi: 'कोर्स', pron: 'koors', type: 'Noun · masc.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben (er/sie/es)' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: 'Verspätung', role: 'r-akkusativ', en: 'delay', hi: 'देरी', pron: 'fer-SHPAY-tung', type: 'Noun · fem.', why: '"Verspätung haben" = to be delayed (this chapter).', ex: 'Der Kurs hat Verspätung.', exEn: 'The course is running late.' },
        { w: '.', plain: true }
      ], en: 'Thanks! My course always runs late.', hi: 'Dhanyavaad! Mera course hamesha late hota hai.' },
      { speaker: 'Ralf', side: 'right', tokens: [
        { w: 'Ach', role: 'r-subject', en: 'ah', hi: 'अच्छा', pron: 'akh', type: 'Reaction' },
        { w: 'so', role: 'r-adverb', en: 'I see', hi: 'समझा', pron: 'zo', type: 'Reaction', why: '"Ach so!" = ah, I see.', ex: 'Ach so!', exEn: 'Ah, I see!' },
        { w: '!', plain: true },
        { w: 'Kein', role: 'r-negation', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Negation' },
        { w: 'Problem', role: 'r-object', en: 'problem', hi: 'समस्या', pron: 'pro-BLAYM', type: 'Noun · neut.' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben (wir)' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी भी', pron: 'nokh', type: 'Adverb' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Ah, I see! No problem. We still have time.', hi: 'Achha samjha! Koi baat nahi. Hamaare paas abhi bhi time hai.' },
      { speaker: 'Britta', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Lernst', role: 'r-verb', en: 'are you studying', hi: 'पढ़ते हो', pron: 'LAIRNST', type: 'Verb · lernen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Kurs', role: 'r-akkusativ', en: 'course', hi: 'कोर्स', pron: 'koors', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'Good. Are you studying for the course today?', hi: 'Achha. Kya tum aaj course ke liye padhte ho?' },
      { speaker: 'Ralf', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'lerne', role: 'r-verb', en: 'am studying', hi: 'पढ़ता हूँ', pron: 'LAIR-nuh', type: 'Verb · lernen (ich)' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Kurs', role: 'r-subject', en: 'course', hi: 'कोर्स', pron: 'koors', type: 'Noun · masc.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'schwer', role: 'r-adjective', en: 'hard', hi: 'मुश्किल', pron: 'shvair', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Yes, I am studying now. But the course is very hard.', hi: 'Haan, main abhi padh raha hoon. Par course bahut mushkil hai.' },
      { speaker: 'Britta', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'lernen', role: 'r-verb', en: 'let us study', hi: 'पढ़ते हैं', pron: 'LAIR-nen', type: 'Verb · lernen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'frei', role: 'r-adjective', en: 'free', hi: 'खाली', pron: 'fry', type: 'Adjective', why: 'frei = free / available (this chapter).', ex: 'Ich habe morgen frei.', exEn: 'I am free tomorrow.' },
        { w: '?', plain: true }
      ], en: 'Really? Then let us study together. Are you free tomorrow?', hi: 'Sach mein? Toh hum saath padhte hain. Kya tum kal khaali ho?' },
      { speaker: 'Ralf', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock time' },
        { w: 'vier', role: 'r-time', en: 'four', hi: 'चार', pron: 'feer', type: 'Number' },
        { w: 'Uhr', role: 'r-time', en: 'o\u2019clock', hi: 'बजे', pron: 'oor', type: 'Noun · time' },
        { w: '.', plain: true },
        { w: 'Kommst', role: 'r-verb', en: 'are you coming', hi: 'आती हो', pron: 'komst', type: 'Verb · kommen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'तब', pron: 'dan', type: 'Adverb' },
        { w: 'pünktlich', role: 'r-adjective', en: 'on time', hi: 'समय पर', pron: 'PÜNKT-likh', type: 'Adjective', why: 'pünktlich = punctual (this chapter).', ex: 'Sei pünktlich!', exEn: 'Be on time!' },
        { w: '?', plain: true }
      ], en: 'Yes, at four o\u2019clock. Will you be on time then?', hi: 'Haan, chaar baje. Kya tum tab samay par aaogi?' },
      { speaker: 'Britta', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (ich)' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'pünktlich', role: 'r-adjective', en: 'on time', hi: 'समय पर', pron: 'PÜNKT-likh', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'ein', role: 'r-akkusativ', en: 'a', hi: 'एक', pron: 'ine', type: 'Article' },
        { w: 'Termin', role: 'r-akkusativ', en: 'appointment', hi: 'मुलाक़ात', pron: 'ter-MEEN', type: 'Noun · masc.', why: 'der Termin = appointment (this chapter).', ex: 'Wir haben einen Termin.', exEn: 'We have an appointment.' },
        { w: '.', plain: true }
      ], en: 'Yes, tomorrow I will be on time! That is an appointment.', hi: 'Haan, kal main samay par aaungi! Yeh ek mulaqaat hai.' },
      { speaker: 'Ralf', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'bis', role: 'r-subject', en: 'until', hi: 'तक', pron: 'bis', type: 'Phrase (part)' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock time' },
        { w: 'vier', role: 'r-time', en: 'four', hi: 'चार', pron: 'feer', type: 'Number' },
        { w: '!', plain: true }
      ], en: 'Perfect! Then see you tomorrow at four!', hi: 'Badhiya! Toh kal chaar baje milte hain!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Revision works by <em>retrieval</em> \u2014 producing language, not just rereading it. This checkpoint hangs on one very German theme: <strong>punctuality</strong>. You\u2019ll apologise (<span class="de">Es tut mir leid</span>), accept an apology (<span class="de">Macht nichts</span>), and arrange an appointment (<span class="de">einen Termin vereinbaren</span>) \u2014 reusing time, dates, modal verbs and separable verbs from across A1.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'This is a GOETHE-STYLE CHECKPOINT (Chapters 1\u201325) themed around punctuality, apologies and appointments: Termin, Verspätung, pünktlich, sich entschuldigen, "Es tut mir leid", "Macht nichts", "Schon gut", plus all earlier A1 grammar. ' +
    'The learner wrote a short apology / appointment text or self-introduction below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Apologies: "Entschuldigung", "Es tut mir leid", "Verzeihung". Accepting: "Macht nichts", "Schon gut", "Kein Problem".\n' +
    '- Appointments: "Ich möchte einen Termin (vereinbaren)", "Sind Sie am Montag frei?", "Haben Sie einen Termin frei?". der Termin (masc.) → accusative einen Termin.\n' +
    '- wissen is irregular: ich weiß, du weißt, er weiß, wir wissen. Do not write "ich weiße".\n' +
    '- Time & dates recap: "um zehn Uhr", "am Montag", "am zwölften Juni", "zehn nach vier" (past) / "Viertel vor" (to).\n' +
    '- Modal + infinitive at the end ("Wir müssen warten"); separable verbs split ("Der Kurs fängt um acht an") but stay whole after a modal ("Ich muss mitkommen").\n' +
    '- "zu spät" = too late; pünktlich = on time; höflich = polite; unhöflich = impolite.\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Checkpoint check:</b> one sentence on whether the text would pass a Goethe A1 apology/appointment task.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Checkpoint cleared — you can apologise, arrange appointments and handle A1 conversation. On to <span class="de">Perfekt 1</span>.',
    mid: 'Solid. Re-read the Grammar Review once and redo the weakest exercise, then continue.',
    low: 'Take another pass through Chapters 1\u201325\u2019s grammar, then retake this checkpoint.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'möchte', role: 'r-modalverb' },
    { w: 'einen', role: 'r-akkusativ' }, { w: 'Termin', role: 'r-object' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how this checkpoint pulls Chapters 1\u201325 together.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A late-again study meeting — apologise, accept it, and arrange the next appointment.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the punctuality & appointment words: Termin, Verspätung, pünktlich, höflich and more.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'Reactivate time, dates, questions, modal verbs and separable verbs in apology/appointment contexts.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style appointment text and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Follow an apology + appointment conversation and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Apologise, arrange an appointment, and run a Goethe-style roleplay.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a short apology message and an appointment request using earlier chapters.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Mixed-skill drills: matching, gap-fill, question formation, error correction.' },
    { id: 'quiz',       label: 'Goethe Mini Test', tag: 'assess',
      objective: 'A mixed mini-exam across Chapters 1\u201325. Pass to bank the full 180 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review achievements, strongest skills, and what to revisit.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download checkpoint resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📋', title: 'Goethe Checkpoint PDF',
      desc: 'A printable Goethe A1-style mini-test covering reading, listening, writing and an appointment roleplay.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Assessment' },
    { icon: '📚', title: 'Vocabulary Review PDF',
      desc: 'The punctuality & appointment words plus a recall sheet drawing on Chapters 1\u201325.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📖', title: 'Grammar Recap PDF',
      desc: 'One-page recaps of time, dates, questions, modal verbs and separable verbs.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Es tut mir leid.', text: 'Apologise properly' },
    { de: 'Macht nichts.', text: 'Accept an apology' },
    { de: 'einen Termin vereinbaren', text: 'Arrange an appointment' },
    { de: 'pünktlich / höflich', text: 'Talk about punctuality' },
    { de: 'Goethe A1', text: 'Pass a mixed-skill checkpoint' }
  ],

  // ---------- Vocabulary (33 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'wissen', pos: 'verb', en: 'to know', hi: 'जानना', ex: 'Ich weiß es nicht.', exEn: 'I don\u2019t know.', conj: { praesens: 'weiß', praeteritum: 'wusste', perfekt: 'hat gewusst' } },
    // ===== Active Support =====
    { de: 'da sein', pos: 'verb', en: 'to be there', hi: 'मौजूद होना', ex: 'Ich bin pünktlich da.', exEn: 'I am there on time.', conj: { praesens: 'ist da', praeteritum: 'war da', perfekt: 'ist da gewesen' } },
    { de: 'Gast', art: 'der', gender: 'm', plural: 'Gäste', pos: 'noun', en: 'guest', hi: 'मेहमान', ex: 'Der Gast wartet.', exEn: 'The guest is waiting.' },
    { de: 'Kunde', art: 'der', gender: 'm', plural: 'Kunden', pos: 'noun', en: 'customer (m)', hi: 'ग्राहक', ex: 'Der Kunde möchte einen Termin.', exEn: 'The customer wants an appointment.' },
    { de: 'Besprechung', art: 'die', gender: 'f', plural: 'Besprechungen', pos: 'noun', en: 'meeting', hi: 'बैठक', ex: 'Die Besprechung ist um neun.', exEn: 'The meeting is at nine.' },
    { de: 'Kundin', art: 'die', gender: 'f', plural: 'Kundinnen', pos: 'noun', en: 'customer (f)', hi: 'ग्राहक', ex: 'Die Kundin ist höflich.', exEn: 'The customer is polite.' },
    { de: 'Praxis', art: 'die', gender: 'f', plural: 'Praxen', pos: 'noun', en: 'surgery, practice', hi: 'क्लीनिक', ex: 'Die Praxis ist am Montag zu.', exEn: 'The surgery is closed on Monday.' },
    { de: 'Verspätung', art: 'die', gender: 'f', plural: 'Verspätungen', pos: 'noun', en: 'delay', hi: 'देरी', ex: 'Der Bus hat Verspätung.', exEn: 'The bus is delayed.' },
    { de: 'entschuldigen', pos: 'verb', en: 'to excuse', hi: 'माफ़ करना', ex: 'Entschuldigen Sie, bitte!', exEn: 'Excuse me, please!', conj: { praesens: 'entschuldigt', praeteritum: 'entschuldigte', perfekt: 'hat entschuldigt' } },
    { de: 'fertig', pos: 'adjective', en: 'ready, finished', hi: 'तैयार', ex: 'Ich bin fertig.', exEn: 'I am ready.' },
    { de: 'frei', pos: 'adjective', en: 'free, available', hi: 'खाली', ex: 'Ist der Termin frei?', exEn: 'Is the slot free?' },
    { de: 'frei (Termin)', pos: 'adjective', en: 'available (slot)', hi: 'उपलब्ध', ex: 'Am Dienstag ist ein Termin frei.', exEn: 'On Tuesday a slot is free.' },
    { de: 'gleich', pos: 'adverb', en: 'soon, in a moment', hi: 'जल्द', ex: 'Ich komme gleich.', exEn: 'I\u2019m coming in a moment.' },
    { de: 'gut (Schon gut)', pos: 'phrase', en: 'it\u2019s alright', hi: 'कोई बात नहीं', ex: 'Schon gut, kein Problem.', exEn: 'It\u2019s alright, no problem.' },
    { de: 'haben (Termin)', pos: 'verb', en: 'to have/make (appt.)', hi: 'अपॉइंटमेंट लेना', ex: 'Ich habe einen Termin.', exEn: 'I have an appointment.', conj: { praesens: 'hat', praeteritum: 'hatte', perfekt: 'hat gehabt' } },
    { de: 'höflich', pos: 'adjective', en: 'polite', hi: 'विनम्र', ex: 'Sei höflich!', exEn: 'Be polite!' },
    { de: 'leidtun', pos: 'verb', en: 'to be sorry', hi: 'खेद होना', ex: 'Es tut mir leid.', exEn: 'I am sorry.', conj: { praesens: 'tut leid', praeteritum: 'tat leid', perfekt: 'hat leidgetan' } },
    { de: 'machen (Macht nichts)', pos: 'phrase', en: 'it doesn\u2019t matter', hi: 'कोई बात नहीं', ex: 'Macht nichts!', exEn: 'It doesn\u2019t matter!' },
    { de: 'pünktlich', pos: 'adjective', en: 'on time, punctual', hi: 'समय पर', ex: 'Sei bitte pünktlich.', exEn: 'Please be on time.' },
    { de: 'tun', pos: 'verb', en: 'to do', hi: 'करना', ex: 'Was kann ich für dich tun?', exEn: 'What can I do for you?', conj: { praesens: 'tut', praeteritum: 'tat', perfekt: 'hat getan' } },
    { de: 'vereinbaren', pos: 'verb', en: 'to arrange', hi: 'तय करना', ex: 'Ich möchte einen Termin vereinbaren.', exEn: 'I\u2019d like to arrange an appointment.', conj: { praesens: 'vereinbart', praeteritum: 'vereinbarte', perfekt: 'hat vereinbart' } },
    { de: 'vielleicht', pos: 'adverb', en: 'maybe, perhaps', hi: 'शायद', ex: 'Vielleicht kommt er gleich.', exEn: 'Maybe he\u2019s coming soon.' },
    { de: 'warten', pos: 'verb', en: 'to wait', hi: 'इंतज़ार करना', ex: 'Wir warten auf Max.', exEn: 'We wait for Max.', conj: { praesens: 'wartet', praeteritum: 'wartete', perfekt: 'hat gewartet' } },
    { de: 'zu (spät)', pos: 'adverb', en: 'too (late)', hi: 'बहुत (देर)', ex: 'Ich bin zu spät.', exEn: 'I am too late.' },
    { de: 'überlegen', pos: 'verb', en: 'to think about', hi: 'सोचना', ex: 'Ich überlege noch.', exEn: 'I\u2019m still thinking about it.', conj: { praesens: 'überlegt', praeteritum: 'überlegte', perfekt: 'hat überlegt' } },
    // ===== Passive =====
    { de: 'abwechseln', pos: 'verb', en: 'to take turns', hi: 'बारी-बारी करना', ex: 'Wir wechseln uns ab.', exEn: 'We take turns.', conj: { praesens: 'wechselt ab', praeteritum: 'wechselte ab', perfekt: 'hat abgewechselt' } },
    { de: 'Treffpunkt', art: 'der', gender: 'm', plural: 'Treffpunkte', pos: 'noun', en: 'meeting point', hi: 'मिलने की जगह', ex: 'Der Treffpunkt ist das Café.', exEn: 'The meeting point is the café.' },
    { de: 'Achtung', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'attention, careful', hi: 'सावधान', ex: 'Achtung, der Zug kommt!', exEn: 'Careful, the train is coming!' },
    { de: 'Pünktlichkeit', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'punctuality', hi: 'समय की पाबंदी', ex: 'Pünktlichkeit ist wichtig.', exEn: 'Punctuality is important.' },
    { de: 'Rollenkarte', art: 'die', gender: 'f', plural: 'Rollenkarten', pos: 'noun', en: 'role card', hi: 'भूमिका कार्ड', ex: 'Hier ist eine Rollenkarte.', exEn: 'Here is a role card.' },
    { de: 'um (+A)', pos: 'preposition', en: 'for (forgiveness)', hi: 'के लिए', ex: 'Ich bitte um Entschuldigung.', exEn: 'I ask for forgiveness.' },
    { de: 'unhöflich', pos: 'adjective', en: 'impolite, rude', hi: 'असभ्य', ex: 'Zu spät kommen ist unhöflich.', exEn: 'Coming late is impolite.' },
    { de: 'vorspielen', pos: 'verb', en: 'to act out, perform', hi: 'अभिनय करना', ex: 'Wir spielen den Dialog vor.', exEn: 'We act out the dialogue.', conj: { praesens: 'spielt vor', praeteritum: 'spielte vor', perfekt: 'hat vorgespielt' } }
  ],

  // ---------- Grammar Review (application, not new theory) ----------
  grammar: [
    {
      title: 'Apologising & accepting',
      body: [
        'A whole social ritual in four short phrases. This is exactly what a Goethe A1 roleplay tests.'
      ],
      table: {
        head: ['You say', 'Meaning'],
        rows: [
          ['<span class="de">Entschuldigung! / Es tut mir leid.</span>', 'Sorry! / I\u2019m sorry.'],
          ['<span class="de">Ich habe Verspätung.</span>', 'I\u2019m delayed.'],
          ['<span class="de">Macht nichts. / Schon gut.</span>', 'No matter. / It\u2019s alright.'],
          ['<span class="de">Kein Problem.</span>', 'No problem.']
        ]
      },
      note: 'Apologise with <b>Es tut mir leid</b> or <b>Entschuldigung</b>; accept with <b>Macht nichts</b> or <b>Schon gut</b>. In Germany, being <b>pünktlich</b> matters — coming <b>zu spät</b> is seen as <b>unhöflich</b>.',
      hinglish: 'Char chhote phrases ka ritual: maafi <b>Es tut mir leid</b> / <b>Entschuldigung</b>; accept <b>Macht nichts</b> / <b>Schon gut</b>. Germany mein <b>pünktlich</b> (samay par) hona zaroori hai — <b>zu spät</b> aana <b>unhöflich</b> mana jaata hai.'
    },
    {
      title: 'Arranging an appointment',
      body: [
        'The appointment script reuses modal verbs, the accusative, time and dates — all in one short exchange.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Ich möchte einen Termin.</span>', 'I\u2019d like an appointment.'],
          ['<span class="de">Sind Sie am Montag frei?</span>', 'Are you free on Monday?'],
          ['<span class="de">Am Dienstag um zehn Uhr?</span>', 'On Tuesday at ten?'],
          ['<span class="de">Das passt mir gut.</span>', 'That suits me well.']
        ]
      },
      note: '<b>der Termin</b> → accusative <b>einen Termin</b>. Combine a day (<b>am Montag</b>), a clock time (<b>um zehn Uhr</b>) and <b>frei</b> (available). <b>vereinbaren</b> = to arrange.',
      hinglish: 'Appointment script: <b>der Termin</b> → accusative <b>einen Termin</b>. Din (<b>am Montag</b>) + time (<b>um zehn Uhr</b>) + <b>frei</b> (khaali) jodo. <b>vereinbaren</b> = tay karna.'
    },
    {
      title: 'wissen — to know (irregular)',
      goldenRule: '<b>wissen</b> behaves like a modal in the singular: <b>ich weiß</b> and <b>er weiß</b> take no ending.',
      memoryTrick: 'Singular mein vowel badalta hai aur ending gayab: <b>ich weiß, du weißt, er weiß</b>. Plural normal: wir wissen.',
      body: [
        'A high-frequency irregular verb: the singular changes its vowel and drops the ending, like a modal.'
      ],
      table: {
        head: ['Person', 'Form'],
        rows: [
          ['ich', '<span class="de r-verb">weiß</span>'],
          ['du', '<span class="de r-verb">weißt</span>'],
          ['er/sie/es', '<span class="de r-verb">weiß</span>'],
          ['wir / sie / Sie', '<span class="de r-verb">wissen</span>']
        ]
      },
      note: 'ich and er/sie/es are identical: <b>weiß</b> (no ending). Don\u2019t write "ich weiße". Compare <b>kennen</b> (to know a person/place) vs <b>wissen</b> (to know a fact).',
      hinglish: '<b>wissen</b> (jaanna — fact): ich <b>weiß</b>, du weißt, er weiß, wir wissen. ich aur er ek jaise (weiß), koi ending nahi — "ich weiße" galat. <b>kennen</b> = kisi ko/jagah ko jaanna; <b>wissen</b> = fact jaanna.'
    },
    {
      title: 'Time, dates & verbs — quick recall',
      body: [
        'One combined recap of the machinery this checkpoint leans on, from Chapters 18\u201325.'
      ],
      table: {
        head: ['Area', 'Example'],
        rows: [
          ['clock (Ch21)', '<span class="de">um zehn Uhr · zehn nach vier · Viertel vor fünf</span>'],
          ['dates (Ch24)', '<span class="de">am Montag · am zwölften Juni</span>'],
          ['modal (Ch20)', '<span class="de">Wir müssen warten.</span> (infinitive at end)'],
          ['separable (Ch25)', '<span class="de">Der Kurs fängt um acht an.</span>']
        ]
      },
      note: 'Modal + infinitive at the end; separable verbs split (<b>fängt … an</b>) but stay whole after a modal (<b>muss … anfangen</b>). Dates use <b>am</b> + ordinal; clock uses <b>um</b>.',
      hinglish: 'Recap: modal + infinitive end mein; separable verbs tootte hain (<b>fängt … an</b>) par modal ke baad poore (<b>muss … anfangen</b>). Date <b>am</b> + ordinal; clock <b>um</b>.'
    },
    {
      title: 'Checkpoint mistakes to avoid',
      body: [ 'Four errors that cost easy marks on a Goethe A1 roleplay.' ],
      mistakes: [
        { wrong: 'Ich weiße es nicht.', right: 'Ich weiß es nicht.', why: 'wissen: ich weiß — no ending in the ich-form.' },
        { wrong: 'Es tut mir leid für die Verspätung sein.', right: 'Es tut mir leid.', why: 'Keep the apology simple — "Es tut mir leid" needs no extra verb.' },
        { wrong: 'Ich möchte ein Termin.', right: 'Ich möchte einen Termin.', why: 'Termin is masculine → accusative einen.' },
        { wrong: 'Sind Sie frei am Montag um?', right: 'Sind Sie am Montag um zehn frei?', why: 'um needs a clock time after it: um zehn (Uhr).' }
      ],
      hinglish: 'Char galtiyan common hain. <b>ich weiß</b> sahi hai, "weiße" nahi. Maafi maangte waqt simple rakho: <b>Es tut mir leid</b>. <b>Termin</b> masculine hai, isliye <b>einen Termin</b> aayega. Aur <b>um</b> ke baad time aata hai: <b>um zehn (Uhr)</b>.'
    }
  ],

  // ---------- Reading passage (appointment note, clickable) ----------
  reading: {
    title: 'Eine Verspätung',
    titleEn: 'A delay',
    tokens: [
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'kommt', role: 'r-verb', en: 'comes', hi: 'आता है', pron: 'komt', type: 'Verb · kommen', why: 'kommen (recycled — Hallo!).', ex: 'Max kommt zu spät.', exEn: 'Max comes too late.' },
      { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', pron: 'oft', type: 'Adverb', why: 'oft (recycled — Berufe).', ex: 'Er kommt oft zu spät.', exEn: 'He often comes late.' },
      { w: 'zu', role: 'r-adverb', en: 'too', hi: 'बहुत', pron: 'tsoo', type: 'Adverb', why: '"zu spät" = too late (this chapter).', ex: 'zu spät', exEn: 'too late' },
      { w: 'spät', role: 'r-adverb', en: 'late', hi: 'देर से', pron: 'shpayt', type: 'Adverb', why: 'spät (recycled — Uhrzeit).', ex: 'Er ist zu spät.', exEn: 'He is too late.' },
      { w: '.', plain: true },
      { w: 'Heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time', why: 'heute (recycled — Verben).', ex: 'Heute hat er Verspätung.', exEn: 'Today he is delayed.' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben', why: 'haben (recycled — Akkusativ).', ex: 'Er hat Verspätung.', exEn: 'He is delayed.' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun', why: 'Verb position 2 after front adverb (recycled — Satzposition).', ex: 'Heute hat er …', exEn: 'Today he has …' },
      { w: 'wieder', role: 'r-adverb', en: 'again', hi: 'फिर', pron: 'VEE-der', type: 'Adverb' },
      { w: 'Verspätung', role: 'r-object', en: 'a delay', hi: 'देरी', pron: 'fair-SHPAY-tung', type: 'Noun · fem.', why: 'die Verspätung (this chapter).', ex: 'Er hat Verspätung.', exEn: 'He is delayed.' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहता है', pron: 'zahkt', type: 'Verb · sagen', why: 'sagen (recycled — Verben).', ex: 'Er sagt: Entschuldigung.', exEn: 'He says: sorry.' },
      { w: ':', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun', why: '"es tut mir leid" (this chapter).', ex: 'Es tut mir leid.', exEn: 'I\u2019m sorry.' },
      { w: 'tut', role: 'r-verb', en: 'does', hi: 'है', pron: 'toot', type: 'Verb · tun', why: 'tun (this chapter).', ex: 'Es tut mir leid.', exEn: 'I\u2019m sorry.' },
      { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
      { w: 'leid', role: 'r-adverb', en: 'sorry', hi: 'खेद', pron: 'lyt', type: 'Expression', why: 'leidtun (this chapter).', ex: 'Es tut mir leid.', exEn: 'I\u2019m sorry.' },
      { w: '.', plain: true },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहती है', pron: 'zahkt', type: 'Verb · sagen' },
      { w: ':', plain: true },
      { w: 'Macht', role: 'r-verb', en: 'matters', hi: 'फ़र्क', pron: 'makht', type: 'Verb · machen', why: '"Macht nichts" (this chapter).', ex: 'Macht nichts!', exEn: 'No matter!' },
      { w: 'nichts', role: 'r-negation', en: 'nothing', hi: 'कुछ नहीं', pron: 'nikhts', type: 'Negation', why: 'nichts (recycled — Satzposition).', ex: 'Macht nichts.', exEn: 'No matter.' },
      { w: '!', plain: true },
      { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction', why: 'aber (recycled — Kein & Nicht).', ex: 'Aber sei pünktlich.', exEn: 'But be on time.' },
      { w: 'Pünktlichkeit', role: 'r-subject', en: 'punctuality', hi: 'समय की पाबंदी', pron: 'PÜNKT-likh-kyt', type: 'Noun · fem.', why: 'die Pünktlichkeit (this chapter).', ex: 'Pünktlichkeit ist wichtig.', exEn: 'Punctuality is important.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'wichtig', role: 'r-adjective', en: 'important', hi: 'ज़रूरी', pron: 'VIKH-tikh', type: 'Adjective', why: 'sein + adjective (Chapter 13).', ex: 'Das ist wichtig.', exEn: 'That is important.' },
      { w: '.', plain: true },
      { w: 'Morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time', why: 'morgen (recycled — Datum).', ex: 'Morgen ist er pünktlich.', exEn: 'Tomorrow he is on time.' },
      { w: 'will', role: 'r-modalverb', en: 'wants', hi: 'चाहता है', pron: 'vil', type: 'Modal · wollen (er)', why: 'wollen; verb position 2 (recycled — Modalverben 1).', ex: 'Morgen will er pünktlich sein.', exEn: 'Tomorrow he wants to be on time.' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'pünktlich', role: 'r-adjective', en: 'on time', hi: 'समय पर', pron: 'PÜNKT-likh', type: 'Adjective', why: 'pünktlich (this chapter).', ex: 'pünktlich sein', exEn: 'to be on time' },
      { w: 'sein', role: 'r-verb', en: 'be', hi: 'होना', pron: 'zine', type: 'Verb · infinitive', why: 'After a modal the verb is an infinitive at the end (Chapter 20).', ex: 'Er will pünktlich sein.', exEn: 'He wants to be on time.' },
      { w: '.', plain: true }
    ],
    translation: 'Max often comes too late. Today he is delayed again. He says: I\u2019m sorry. Anna says: It doesn\u2019t matter! But punctuality is important. Tomorrow Max wants to be on time.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair — never invented.
    dialogue: [
      { id: 'A1_026_L001', speaker: 'Britta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Praxis Dr. Klein, guten Tag!', en: 'Dr. Klein\'s surgery, good day!' },
      { id: 'A1_026_L002', speaker: 'Ralf', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Guten Tag, ich möchte einen Termin vereinbaren.', en: 'Good day, I\'d like to arrange an appointment.' },
      { id: 'A1_026_L003', speaker: 'Britta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Sind Sie am Montag frei?', en: 'Are you free on Monday?' },
      { id: 'A1_026_L004', speaker: 'Ralf', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Am Montag habe ich keine Zeit. Geht es am Dienstag?', en: 'On Monday I have no time. Does Tuesday work?' },
      { id: 'A1_026_L005', speaker: 'Britta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, am Dienstag um halb elf ist ein Termin frei.', en: 'Yes, on Tuesday at half past ten a slot is free.' },
      { id: 'A1_026_L006', speaker: 'Ralf', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Perfekt, ich bin pünktlich da. Vielen Dank!', en: 'Perfect, I\'ll be there on time. Many thanks!' }
    ],
    transcript: 'Praxis Dr. Klein, guten Tag! Guten Tag, ich möchte einen Termin vereinbaren. Sind Sie am Montag frei? Am Montag habe ich keine Zeit. Geht es am Dienstag? Ja, am Dienstag um halb elf ist ein Termin frei. Perfekt, ich bin pünktlich da. Vielen Dank!',
    translation: 'Dr. Klein\'s surgery, good day! Good day, I\'d like to arrange an appointment. Are you free on Monday? On Monday I have no time. Does Tuesday work? Yes, on Tuesday at half past ten a slot is free. Perfect, I\'ll be there on time. Many thanks!',
    tokens: [
      { w: 'Praxis' },
      { w: 'Dr' },
      { w: '.', plain: true },
      { w: 'Klein' },
      { w: ',', plain: true },
      { w: 'guten' },
      { w: 'Tag' },
      { w: '!', plain: true },
      { w: 'Guten' },
      { w: 'Tag' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'möchte' },
      { w: 'einen' },
      { w: 'Termin' },
      { w: 'vereinbaren' },
      { w: '.', plain: true },
      { w: 'Sind' },
      { w: 'Sie' },
      { w: 'am' },
      { w: 'Montag' },
      { w: 'frei' },
      { w: '?', plain: true },
      { w: 'Am' },
      { w: 'Montag' },
      { w: 'habe' },
      { w: 'ich' },
      { w: 'keine' },
      { w: 'Zeit' },
      { w: '.', plain: true },
      { w: 'Geht' },
      { w: 'es' },
      { w: 'am' },
      { w: 'Dienstag' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'am' },
      { w: 'Dienstag' },
      { w: 'um' },
      { w: 'halb' },
      { w: 'elf' },
      { w: 'ist' },
      { w: 'ein' },
      { w: 'Termin' },
      { w: 'frei' },
      { w: '.', plain: true },
      { w: 'Perfekt' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'bin' },
      { w: 'pünktlich' },
      { w: 'da' },
      { w: '.', plain: true },
      { w: 'Vielen' },
      { w: 'Dank' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was möchte Ralf machen?', qEn: 'What does Ralf want to do?', options: ['einen Termin vereinbaren', 'etwas kaufen', 'eine Pizza bestellen', 'einen Freund abholen'], optionsEn: ['arrange an appointment', 'buy something', 'order a pizza', 'pick up a friend'], answer: 0,
        explain: '"… ich möchte einen Termin vereinbaren."' },
      { q: 'Warum ist Montag nicht möglich?', qEn: 'Why is Monday not possible?', options: ['Die Praxis ist zu.', 'Er hat keine Zeit.', 'Es ist zu spät.', 'Er ist krank.'], optionsEn: ['The practice is closed.', 'He has no time.', 'It is too late.', 'He is ill.'], answer: 1,
        explain: '"Am Montag habe ich keine Zeit."' },
      { q: 'Wann ist der Termin?', qEn: 'When is the appointment?', options: ['Dienstag um halb elf', 'Montag um zehn', 'Dienstag um elf', 'Montag um halb elf'], optionsEn: ['Tuesday at half past ten', 'Monday at ten', 'Tuesday at eleven', 'Monday at half past ten'], answer: 0,
        explain: '"… am Dienstag um halb elf ist ein Termin frei."' }
    ]
  },

  // ---------- Speaking prompts ----------
  speaking: [
    { task: "Du rufst die Praxis an und möchtest einen Termin am Montag.", taskEn: "You call the practice and want an appointment on Monday.", de: "Guten Tag, ich möchte einen Termin vereinbaren. Sind Sie am Montag frei?", en: "Hello, I'd like to make an appointment. Are you free on Monday?" },
    { task: "Am Montag ist kein Termin frei. Frag nach Dienstag.", taskEn: "There's no slot on Monday. Ask about Tuesday.", de: "Geht es am Dienstag um halb elf?", en: "Would Tuesday at half past ten work?" },
    { task: "Du kommst zu spät zum Termin. Was sagst du?", taskEn: "You're late for your appointment. What do you say?", de: "Entschuldigung, ich habe Verspätung. Es tut mir leid!", en: "Sorry, I'm late. I do apologise!" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short message (6\u20138 sentences): you will be late to a meeting. Apologise (Es tut mir leid / Entschuldigung), say why (Verspätung, der Bus, …), and arrange a new time using a day and a clock time (am … um …). Use at least one modal verb.',
    starters: ['Es tut mir leid, …', 'Ich habe Verspätung, weil …', 'Können wir einen neuen Termin vereinbaren?', 'Geht es am … um …?'],
    placeholder: 'Hallo, es tut mir leid, ich habe heute Verspätung …',
    minWords: 25
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'A friend apologises for being late. What do you reply?',
      options: ['Bitte schön.', 'Macht nichts.', 'Guten Tag.', 'Wie bitte?'],
      answer: 1,
      explain: '"Macht nichts" (or "Schon gut") accepts an apology.'
    },
    gap: {
      // wissen (ich) + appointment accusative
      sentence: ['Ich ', ' es nicht, aber ich möchte ', ' Termin.'],
      gaps: [ { answer: 'weiß', accepts: ['weiß','weiss'] }, { answer: 'einen', accepts: ['einen'] } ],
      explain: 'ich weiß (no ending); einen Termin (masc. accusative).'
    },
    match: {
      q: 'Match each phrase to its function.',
      pairs: [
        { noun: 'Es tut mir leid', art: 'apologise' },
        { noun: 'Macht nichts', art: 'accept apology' },
        { noun: 'einen Termin', art: 'arrange a meeting' },
        { noun: 'pünktlich', art: 'on time' }
      ]
    },
    builder: {
      target: 'Build: "I\u2019d like an appointment."',
      bank: ['Ich', 'möchte', 'einen', 'Termin'],
      answer: ['Ich', 'möchte', 'einen', 'Termin'],
      roles: { 'Ich': 'r-subject', 'möchte': 'r-modalverb', 'einen': 'r-akkusativ', 'Termin': 'r-object' }
    }
  },

  // ---------- Goethe Mini Test (5 mixed questions) ----------
  quiz: [
    { q: 'How do you apologise?', options: ['Bitte schön.', 'Es tut mir leid.', 'Gern geschehen.', 'Guten Appetit.'], answer: 1,
      explain: '"Es tut mir leid" = I\u2019m sorry.' },
    { q: 'Complete: "Ich ___ es nicht." (wissen)', options: ['weiße', 'weiß', 'wisse', 'weißt'], answer: 1,
      explain: 'wissen: ich weiß — no ending.' },
    { q: 'Choose the accusative: "Ich möchte ___ Termin."', options: ['ein', 'einen', 'eine', 'der'], answer: 1,
      explain: 'Termin is masculine → einen.' },
    { q: 'Which means "on time"?', options: ['höflich', 'pünktlich', 'fertig', 'frei'], answer: 1,
      explain: 'pünktlich = on time / punctual.' },
    { q: 'A reply to "Entschuldigung!"?', options: ['Macht nichts.', 'Vielen Dank.', 'Auf Wiedersehen.', 'Wie heißt du?'], answer: 0,
      explain: '"Macht nichts" accepts the apology.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-adjective', html: 'Apologise & accept: <span class="de">Es tut mir leid</span> · <span class="de">Entschuldigung</span> → <span class="de">Macht nichts</span> · <span class="de">Schon gut</span>.' },
    { c: 'r-object', html: 'Arrange it: <span class="de">Ich möchte einen Termin.</span> <span class="de">Sind Sie am Dienstag um zehn frei?</span>' },
    { c: 'r-verb', html: 'Know it: <span class="de">ich weiß, du weißt, er weiß</span> — and <span class="de">pünktlich</span> matters in Germany.' }
  ],
  revisionTips: [
    'Memorise the apology ritual as a pair: "Es tut mir leid" ↔ "Macht nichts".',
    'Run the appointment script out loud: Termin → Tag → Uhrzeit → frei?',
    'Re-test the weakest of Chapters 1\u201325 from its own quiz before starting Perfekt.'
  ]
};

window.CHAPTER = CHAPTER;
