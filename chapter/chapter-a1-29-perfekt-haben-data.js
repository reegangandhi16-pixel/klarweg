/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 3 · Chapter 29
   "Perfekt mit haben"  (the perfect tense with haben)
   Vocabulary source: uploaded chapter-29 word list (6 words).
   Theme = study life: exam, project, lessons. Recycles Ch1–28.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-29-perfekt-haben',
  phase: 'A1 · Phase 3',
  number: 29,
  title: 'Perfekt mit haben',
  titleEn: 'Perfect with haben',
  description: 'The default past tense. The vast majority of German verbs build the Perfekt with haben — Ich habe gelernt, gegessen, gekauft, gelesen. Lock in haben + Partizip II and you can talk about almost any past action.',
  xp: 160,
  time: 35,
  difficulty: 'Beginner',
  nextChapter: { number: 30, title: 'Perfekt mit sein', titleEn: 'Perfect with sein' , href: 'chapter-a1-30-perfekt-sein.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'The exam is over. In the café, Miriam and Robert compare how they prepared — who studied for two weeks, who read every question, who drank too much coffee. Every line is a haben-Perfekt: habe gelernt, hat gelesen, haben getrunken.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear haben + participle on repeat, in context'
    ],
    scene: 'Nach der Prüfung \u2014 im Café, Berlin',
    femaleSpeakers: ['Miriam'],
    dialogue: [
      { speaker: 'Miriam', tokens: [
        { w: 'Jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'erst', role: 'r-adverb', en: 'first', hi: 'पहले', pron: 'airst', type: 'Adverb' },
        { w: 'Kaffee', role: 'r-akkusativ', en: 'coffee', hi: 'कॉफ़ी', pron: 'KA-fay', type: 'Noun · masc.' },
        { w: '!', plain: true },
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसी', pron: 'vee', type: 'Question word' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb · sein (Präteritum)' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Prüfung', role: 'r-subject', en: 'exam', hi: 'परीक्षा', pron: 'PRÜ-fung', type: 'Noun · fem.', why: 'die Prüfung (this chapter).', ex: 'Die Prüfung war schwer.', exEn: 'The exam was hard.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'dich', role: 'r-akkusativ', en: 'you', hi: 'तुम्हारे लिए', pron: 'dikh', type: 'Pronoun · acc.' },
        { w: '?', plain: true }
      ], en: 'Coffee first! How was the exam for you?', hi: 'Pehle coffee! Tumhaare liye pariksha kaisi thi?' },
      { speaker: 'Robert', side: 'right', tokens: [
        { w: 'Schwer', role: 'r-adjective', en: 'hard', hi: 'मुश्किल', pron: 'shvair', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben (helper)', why: 'Perfekt with haben: helper in position 2, participle at the end (this chapter).', ex: 'Ich habe gelernt.', exEn: 'I studied.' },
        { w: 'zwei', role: 'r-akkusativ', en: 'two', hi: 'दो', pron: 'tsvai', type: 'Number' },
        { w: 'Wochen', role: 'r-akkusativ', en: 'weeks', hi: 'हफ़्ते', pron: 'VO-khen', type: 'Noun · plural' },
        { w: 'gelernt', role: 'r-verb', en: 'studied', hi: 'पढ़ा', pron: 'ge-LAIRNT', type: 'Partizip II · Satzende', why: 'lernen → gelernt: regular ge- + stem + -t (this chapter).', ex: 'Ich habe gelernt.', exEn: 'I studied.' },
        { w: '.', plain: true }
      ], en: 'Hard! I studied for two weeks.', hi: 'Mushkil! Main do hafte padha.' },
      { speaker: 'Miriam', tokens: [
        { w: 'Zwei', role: 'r-akkusativ', en: 'two', hi: 'दो', pron: 'tsvai', type: 'Number' },
        { w: 'Wochen', role: 'r-akkusativ', en: 'weeks', hi: 'हफ़्ते', pron: 'VO-khen', type: 'Noun · plural' },
        { w: '?', plain: true },
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'gestern', role: 'r-time', en: 'yesterday', hi: 'कल', pron: 'GES-tern', type: 'Adverb · time' },
        { w: 'gelernt', role: 'r-verb', en: 'studied', hi: 'पढ़ा', pron: 'ge-LAIRNT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Two weeks? Really? I only studied yesterday.', hi: 'Do hafte? Sach mein? Main sirf kal padhi.' },
      { speaker: 'Robert', side: 'right', tokens: [
        { w: 'Oh', role: 'r-subject', en: 'oh', hi: 'ओह', pron: 'oh', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'किया', pron: 'hast', type: 'Verb · haben (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Fragen', role: 'r-akkusativ', en: 'questions', hi: 'सवाल', pron: 'FRAH-gen', type: 'Noun · plural' },
        { w: 'verstanden', role: 'r-verb', en: 'understood', hi: 'समझा', pron: 'fer-SHTAN-den', type: 'Partizip II · Satzende', why: 'verstehen → verstanden: ver- takes no ge- (this chapter).', ex: 'Ich habe das verstanden.', exEn: 'I understood that.' },
        { w: '?', plain: true }
      ], en: 'Oh! And did you understand the questions?', hi: 'Oh! Aur kya tumne sawaal samjhe?' },
      { speaker: 'Miriam', tokens: [
        { w: 'Nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'alle', role: 'r-akkusativ', en: 'all', hi: 'सब', pron: 'A-luh', type: 'Determiner' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Frage', role: 'r-akkusativ', en: 'question', hi: 'सवाल', pron: 'FRAH-guh', type: 'Noun · fem.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'gelesen', role: 'r-verb', en: 'read', hi: 'पढ़ा', pron: 'ge-LAY-zen', type: 'Partizip II · Satzende', why: 'lesen → gelesen: irregular, ends in -en (this chapter).', ex: 'Ich habe das gelesen.', exEn: 'I read that.' },
        { w: '.', plain: true }
      ], en: 'Not all of them. I did not read one question.', hi: 'Sab nahi. Main ek sawaal nahi padhi.' },
      { speaker: 'Robert', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'normal', role: 'r-adjective', en: 'normal', hi: 'सामान्य', pron: 'nor-MAHL', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Frage', role: 'r-akkusativ', en: 'question', hi: 'सवाल', pron: 'FRAH-guh', type: 'Noun · fem.' },
        { w: 'falsch', role: 'r-adjective', en: 'wrong', hi: 'गलत', pron: 'falsh', type: 'Adjective' },
        { w: 'gemacht', role: 'r-verb', en: 'done', hi: 'किया', pron: 'ge-MAKHT', type: 'Partizip II · Satzende', why: 'machen → gemacht (this chapter).', ex: 'Ich habe das falsch gemacht.', exEn: 'I did that wrong.' },
        { w: '.', plain: true }
      ], en: 'That is normal. I did one question wrong too.', hi: 'Yeh saamaanya hai. Main bhi ek sawaal galat kiya.' },
      { speaker: 'Miriam', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'किया', pron: 'hast', type: 'Verb · haben (helper)' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', pron: 'zo', type: 'Adverb' },
        { w: 'lange', role: 'r-time', en: 'long', hi: 'देर तक', pron: 'LANG-uh', type: 'Adverb · time' },
        { w: 'gearbeitet', role: 'r-verb', en: 'worked', hi: 'काम किया', pron: 'ge-AR-by-tet', type: 'Partizip II · Satzende', why: 'arbeiten → gearbeitet (stem in -t → -et).', ex: 'Ich habe gearbeitet.', exEn: 'I worked.' },
        { w: '!', plain: true }
      ], en: 'Really? But you worked so long!', hi: 'Sach mein? Par tumne itni der kaam kiya!' },
      { speaker: 'Robert', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'था', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'zu', role: 'r-adverb', en: 'too', hi: 'बहुत', pron: 'tsoo', type: 'Adverb' },
        { w: 'schnell', role: 'r-adjective', en: 'fast', hi: 'तेज़', pron: 'shnel', type: 'Adjective' },
        { w: 'geschrieben', role: 'r-verb', en: 'written', hi: 'लिखा', pron: 'ge-SHREE-ben', type: 'Partizip II · Satzende', why: 'schreiben → geschrieben: irregular, ends in -en (this chapter).', ex: 'Ich habe geschrieben.', exEn: 'I wrote.' },
        { w: '.', plain: true }
      ], en: 'Yes, but I wrote too fast.', hi: 'Haan, par main bahut tez likha.' },
      { speaker: 'Miriam', tokens: [
        { w: 'Ach', role: 'r-subject', en: 'ah', hi: 'अच्छा', pron: 'akh', type: 'Reaction' },
        { w: 'so', role: 'r-adverb', en: 'I see', hi: 'समझा', pron: 'zo', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-ben', type: 'Verb · haben (helper)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'beide', role: 'r-subject', en: 'both', hi: 'दोनों', pron: 'BY-duh', type: 'Pronoun' },
        { w: 'etwas', role: 'r-akkusativ', en: 'something', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · acc.' },
        { w: 'falsch', role: 'r-adjective', en: 'wrong', hi: 'गलत', pron: 'falsh', type: 'Adjective' },
        { w: 'gemacht', role: 'r-verb', en: 'done', hi: 'किया', pron: 'ge-MAKHT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Ah, I see! Then we both did something wrong.', hi: 'Achha samjha! Toh humne dono kuch galat kiya.' },
      { speaker: 'Robert', side: 'right', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-ben', type: 'Verb · haben (helper)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Prüfung', role: 'r-akkusativ', en: 'exam', hi: 'परीक्षा', pron: 'PRÜ-fung', type: 'Noun · fem.' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: 'gemacht', role: 'r-verb', en: 'done', hi: 'दी', pron: 'ge-MAKHT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true },
        { w: 'Jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'frei', role: 'r-adjective', en: 'free', hi: 'छुट्टी', pron: 'fry', type: 'Adjective' },
        { w: '!', plain: true }
      ], en: 'Exactly! We did the exam together. Now we are free!', hi: 'Bilkul! Humne pariksha saath di. Ab hum free hain!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Most German verbs build the Perfekt with <span class="de r-verb">haben</span>. The frame from last chapter holds: <span class="de r-verb">haben</span> (conjugated, position 2) + <strong>Partizip II</strong> (at the end). <span class="de">Ich <u>habe</u> Deutsch <u>gelernt</u>. Anna <u>hat</u> ein Buch <u>gelesen</u>.</span> If a verb has a direct object \u2014 eat something, read something, buy something \u2014 it almost always takes <span class="de r-verb">haben</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is the PERFEKT WITH HABEN: haben (conjugated) + Partizip II for past actions, the default for most verbs (especially those with a direct object). ' +
    'The learner wrote sentences about the past below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Perfekt with haben = haben (conjugated: ich habe, du hast, er/sie/es hat, wir/sie/Sie haben, ihr habt) + Partizip II at the very END.\n' +
    '- Most verbs take haben — especially transitive verbs (with a direct object): essen, trinken, lernen, machen, kaufen, lesen, sehen, hören, treffen, schreiben.\n' +
    '- Regular participle = ge + stem + t: machen→gemacht, lernen→gelernt, kaufen→gekauft, hören→gehört, arbeiten→gearbeitet (keeps -e-).\n' +
    '- Common irregular (haben) participles: essen→gegessen, trinken→getrunken, lesen→gelesen, sehen→gesehen, treffen→getroffen, schreiben→geschrieben, helfen→geholfen, nehmen→genommen.\n' +
    '- -ieren verbs and inseparable-prefix verbs take NO ge-: studieren→studiert, telefonieren→telefoniert, besuchen→besucht, wiederholen→wiederholt, bekommen→bekommen.\n' +
    '- Separable verbs put ge in the middle: einkaufen→eingekauft, anrufen→angerufen.\n' +
    '- The participle does not change for the subject; only haben is conjugated. Word order: helper position 2, participle last.\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Perfekt check:</b> one sentence on whether haben + participle-at-the-end was correct.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — haben in position 2, participle at the end. On to <span class="de">Perfekt mit sein</span>.',
    mid: 'Good. Re-read the participle-building card once, then continue.',
    low: 'Worth another pass — focus on haben + Partizip II and irregular participles, then retake.'
  },

  parserSentence: [
    { w: 'Anna', role: 'r-subject' }, { w: 'hat', role: 'r-verb' },
    { w: 'ein', role: 'r-akkusativ' }, { w: 'Buch', role: 'r-object' },
    { w: 'gelesen', role: 'r-verb' }, { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See why haben is the default Perfekt helper.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'After the exam, hear the group compare how they studied — all in haben-Perfekt.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the study-life words: Prüfung, Projekt, Unterricht, Studium, Semester.' },
    { id: 'grammar',    label: 'Perfekt mit haben', tag: 'core',
      objective: 'Master haben + Partizip II, regular and irregular participles, and word order.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a past-actions text in the haben-Perfekt and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch what each person did, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say what you did yesterday using haben + participle.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write five haben-Perfekt sentences and a short paragraph about a past day.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill participles and word order with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The study-life words and common haben-participles with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Participle drills, gap-fill, error correction, and a "what I did" writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'haben + Partizip II, regular & irregular participles, no-ge- verbs, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich habe gelernt.', text: 'Talk about past actions with haben' },
    { de: 'Anna hat gelesen.', text: 'Conjugate haben for any subject' },
    { de: 'gemacht, gegessen', text: 'Form regular & irregular participles' },
    { de: 'studiert, besucht', text: 'Know the no-ge- verbs' },
    { de: 'Was hast du gemacht?', text: 'Ask what someone did' }
  ],

  // ---------- Vocabulary (6 words) ----------
  vocab: [
    { de: 'Projekt', art: 'das', gender: 'n', plural: 'Projekte', pos: 'noun', en: 'project', hi: 'परियोजना', ex: 'Ich habe das Projekt gemacht.', exEn: 'I did the project.' },
    { de: 'Semester', art: 'das', gender: 'n', plural: 'Semester', pos: 'noun', en: 'semester', hi: 'सेमेस्टर', ex: 'Das Semester war lang.', exEn: 'The semester was long.' },
    { de: 'Studium', art: 'das', gender: 'n', plural: 'Studien', pos: 'noun', en: 'studies, degree course', hi: 'अध्ययन', ex: 'Mein Studium ist interessant.', exEn: 'My studies are interesting.' },
    { de: 'Unterricht', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'lessons, class', hi: 'कक्षा, पाठ', ex: 'Der Unterricht hat geholfen.', exEn: 'The lessons helped.' },
    { de: 'Prüfung', art: 'die', gender: 'f', plural: 'Prüfungen', pos: 'noun', en: 'exam, test', hi: 'परीक्षा', ex: 'Die Prüfung war schwer.', exEn: 'The exam was hard.' },
    { de: 'studieren', pos: 'verb', en: 'to study (at university)', hi: 'अध्ययन करना', ex: 'Ich habe in Berlin studiert.', exEn: 'I studied in Berlin.', conj: { praesens: 'studiert', praeteritum: 'studierte', perfekt: 'hat studiert' } }
  ],

  // ---------- Perfekt mit haben (rule cards → accordion) ----------
  grammar: [
    {
      title: 'haben + Partizip II',
      goldenRule: '<b>haben</b> in slot 2, <b>Partizip II</b> at the very end. Only <i>haben</i> changes; the participle never does.',
      formula: [
        'Ich <b>habe</b> Deutsch <b>gelernt</b>.',
        '     ↑ slot 2           ↑ end'
      ],
      memoryTrick: 'Wahi bracket jo modal ke saath tha (Chapter 20): ek hissa <b>slot 2</b> par, aur doosra sentence ke <b>end</b> mein. Structure naya nahi hai.',
      body: [
        'The default Perfekt. <span class="de r-verb">haben</span> is conjugated for the subject and sits in position 2; the <strong>Partizip II</strong> goes to the very end.'
      ],
      table: {
        head: ['Subject', 'haben (pos. 2)', 'middle', 'Partizip II (end)'],
        rows: [
          ['<span class="de">Ich</span>', '<span class="de r-verb">habe</span>', '<span class="de">Deutsch</span>', '<span class="de r-verb">gelernt.</span>'],
          ['<span class="de">Du</span>', '<span class="de r-verb">hast</span>', '<span class="de">ein Buch</span>', '<span class="de r-verb">gelesen.</span>'],
          ['<span class="de">Anna</span>', '<span class="de r-verb">hat</span>', '<span class="de">Kaffee</span>', '<span class="de r-verb">getrunken.</span>'],
          ['<span class="de">Wir</span>', '<span class="de r-verb">haben</span>', '<span class="de">ein Projekt</span>', '<span class="de r-verb">gemacht.</span>']
        ]
      },
      note: 'Conjugate <b>haben</b>: ich habe, du hast, er/sie/es hat, wir/sie/Sie haben, ihr habt. The participle never changes. Verbs with a direct object almost always take haben.',
      hinglish: 'Default Perfekt: <b>haben</b> conjugate (ich habe, du hast, er hat, wir haben, ihr habt) position 2 pe + <b>Partizip II</b> end mein. Participle nahi badalta. Jis verb ka object ho (kuch khaana, padhna, kharidna) vo lagbhag hamesha haben leta hai.'
    },
    {
      title: 'Building the participle: regular',
      goldenRule: 'Regular participle = <b>ge- + stem + -t</b>.',
      memoryTrick: '<b>ge</b> aage, <b>t</b> peeche, aur stem beech mein: machen → <b>ge</b>mach<b>t</b>.',
      body: [
        'Regular (weak) verbs follow one formula: <strong>ge + stem + t</strong>. No surprises.'
      ],
      table: {
        head: ['Verb', 'Stem', 'Partizip II'],
        rows: [
          ['<span class="de">machen</span>', 'mach', '<span class="de r-verb">gemacht</span>'],
          ['<span class="de">lernen</span>', 'lern', '<span class="de r-verb">gelernt</span>'],
          ['<span class="de">kaufen</span>', 'kauf', '<span class="de r-verb">gekauft</span>'],
          ['<span class="de">arbeiten</span>', 'arbeit', '<span class="de r-verb">gearbeitet</span> (+e)']
        ]
      },
      note: 'Formula: <b>ge</b> + stem + <b>t</b>. After -t/-d stems add an extra -e- for sound: arbeiten → ge<b>arbeite</b>t, regnen → geregnet. Otherwise it\u2019s clean: gemacht, gelernt, gekauft, gehört, gespielt.',
      hinglish: 'Regular verbs: <b>ge</b> + stem + <b>t</b>. -t/-d wale stems mein extra -e-: arbeiten → ge<b>arbeite</b>t. Baaki saaf: gemacht, gelernt, gekauft, gehört, gespielt.'
    },
    {
      title: 'Building the participle: irregular & no-ge-',
      goldenRule: 'Irregular = <b>ge- + stem + -en</b> (vowel often changes). <b>-ieren</b> verbs and inseparable prefixes take <b>no ge-</b> at all.',
      formula: [
        'trinken    →  <b>ge</b>tr<b>u</b>nk<b>en</b>   (irregular, new vowel)',
        'studieren  →  studiert          (no ge-)',
        'besuchen   →  besucht           (no ge-)'
      ],
      memoryTrick: 'Regular <b>-t</b> par khatam, irregular <b>-en</b> par. Aur do case mein <b>ge</b> hi nahi lagta: <b>-ieren</b> verbs aur inseparable prefix (be-, ver-, er-, ent-).',
      recap: [
        'Regular: <b>ge…t</b> · Irregular: <b>ge…en</b> + vowel change.',
        '<b>-ieren</b> verbs: no <b>ge-</b> (studiert, telefoniert).',
        'Inseparable prefixes: no <b>ge-</b> (besucht, verstanden).'
      ],
      body: [
        'Irregular (strong) verbs usually end in <strong>-en</strong> and often change the vowel. And two groups take <strong>no ge-</strong> at all.'
      ],
      table: {
        head: ['Type', 'Verb', 'Partizip II'],
        rows: [
          ['irregular', '<span class="de">essen / lesen</span>', '<span class="de r-verb">gegessen / gelesen</span>'],
          ['irregular', '<span class="de">trinken / sehen</span>', '<span class="de r-verb">getrunken / gesehen</span>'],
          ['-ieren (no ge-)', '<span class="de">studieren</span>', '<span class="de r-verb">studiert</span>'],
          ['prefix (no ge-)', '<span class="de">besuchen / wiederholen</span>', '<span class="de r-verb">besucht / wiederholt</span>']
        ]
      },
      note: 'Irregular: <b>ge…en</b>, often a new vowel (getrunken, gegessen) \u2014 learn these by heart. <b>-ieren</b> verbs and inseparable-prefix verbs (be-, ver-, wieder-) take <b>no ge-</b>: studiert, besucht, wiederholt, bekommen.',
      hinglish: 'Irregular: <b>ge…en</b> + aksar naya vowel (getrunken, gegessen) — yaad karo. <b>-ieren</b> verbs aur inseparable-prefix (be-, ver-, wieder-) mein <b>ge-</b> nahi: studiert, besucht, wiederholt, bekommen.'
    },
    {
      title: 'Questions & word order',
      body: [
        'Questions in the Perfekt move <span class="de r-verb">haben</span> to the front; the participle still waits at the end.'
      ],
      table: {
        head: ['Type', 'Example'],
        rows: [
          ['statement', '<span class="de">Du hast das Buch gelesen.</span>'],
          ['yes/no question', '<span class="de">Hast du das Buch gelesen?</span>'],
          ['W-question', '<span class="de">Was hast du gemacht?</span>'],
          ['with time word', '<span class="de">Gestern habe ich gearbeitet.</span>']
        ]
      },
      note: 'Yes/no question → <b>haben</b> first: "Hast du …?". W-question → <b>haben</b> in position 2: "Was hast du gemacht?". Front a time word and haben stays second: "Gestern <b>habe</b> ich …". Participle always last.',
      hinglish: 'Ja/Nein sawaal → <b>haben</b> pehle: "Hast du …?". W-sawaal → <b>haben</b> position 2: "Was hast du gemacht?". Time word aage ho to haben doosri jagah: "Gestern <b>habe</b> ich …". Participle hamesha end mein.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four haben-Perfekt traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich habe gelernt Deutsch.', right: 'Ich habe Deutsch gelernt.', why: 'The participle goes to the very end, after the object.' },
        { wrong: 'Ich habe gestudiert.', right: 'Ich habe studiert.', why: '-ieren verbs take no ge-: studiert.' },
        { wrong: 'Anna hat ein Buch gelest.', right: 'Anna hat ein Buch gelesen.', why: 'lesen is irregular: gelesen, not gelest.' },
        { wrong: 'Du gemacht hast das Projekt.', right: 'Du hast das Projekt gemacht.', why: 'haben is position 2; the participle is last.' }
      ],
      hinglish: 'Char galtiyan common hain. Participle sentence ke end mein aata hai: <b>Ich habe Deutsch gelernt</b>. <b>-ieren</b> wale verbs mein <b>ge-</b> nahi lagta: <b>studiert</b>. <b>lesen</b> irregular hai, isliye <b>gelesen</b> sahi hai, "gelest" nahi. Aur <b>haben</b> position 2 par rehta hai jabki participle sabse end mein: <b>Du hast das Projekt gemacht</b>.'
    }
  ],

  // ---------- Reading passage (past actions in haben-Perfekt, clickable) ----------
  reading: {
    title: 'Vor der Prüfung',
    titleEn: 'Before the exam',
    tokens: [
      { w: 'Letzte', role: 'r-time', en: 'last', hi: 'पिछले', pron: 'LETS-tuh', type: 'Adjective · time' },
      { w: 'Woche', role: 'r-time', en: 'week', hi: 'सप्ताह', pron: 'VO-khuh', type: 'Noun · time', why: 'die Woche (recycled — Datum).', ex: 'letzte Woche', exEn: 'last week' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Aux · haben (ich)', why: 'haben helper; verb position 2 (this chapter).', ex: 'Letzte Woche habe ich …', exEn: 'Last week I …' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'viel', role: 'r-object', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
      { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'foor', type: 'Preposition + acc.' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · acc.' },
      { w: 'Prüfung', role: 'r-object', en: 'exam', hi: 'परीक्षा', pron: 'PRÜ-fung', type: 'Noun · fem.', why: 'die Prüfung (this chapter).', ex: 'für die Prüfung', exEn: 'for the exam' },
      { w: 'gelernt', role: 'r-verb', en: 'studied', hi: 'पढ़ा', pron: 'guh-LAIRNT', type: 'Partizip II · lernen', why: 'regular ge…t (this chapter).', ex: 'Ich habe gelernt.', exEn: 'I studied.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Aux · haben (ich)' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · acc.', why: 'masc. acc. der → den (recycled — Akkusativ).', ex: 'den Unterricht', exEn: 'the lessons' },
      { w: 'Unterricht', role: 'r-object', en: 'lessons', hi: 'पढ़ाई', pron: 'UN-ter-rikht', type: 'Noun · masc.', why: 'der Unterricht (this chapter).', ex: 'den Unterricht besucht', exEn: 'attended the lessons' },
      { w: 'besucht', role: 'r-verb', en: 'attended', hi: 'गया', pron: 'buh-ZOOKHT', type: 'Partizip II · besuchen', why: 'prefix verb → no ge- (this chapter).', ex: 'Ich habe den Unterricht besucht.', exEn: 'I attended the lessons.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'Übungen', role: 'r-object', en: 'exercises', hi: 'अभ्यास', pron: 'Ü-bung-en', type: 'Noun · plural', why: 'die Übung → die Übungen.', ex: 'Übungen gemacht', exEn: 'did exercises' },
      { w: 'gemacht', role: 'r-verb', en: 'done', hi: 'किया', pron: 'guh-MAKHT', type: 'Partizip II · machen', why: 'regular ge…t (this chapter).', ex: 'Ich habe Übungen gemacht.', exEn: 'I did exercises.' },
      { w: '.', plain: true },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'पढ़ा', pron: 'hat', type: 'Aux · haben (sie)', why: 'haben, er/sie-form (this chapter).', ex: 'Anna hat ein Buch gelesen.', exEn: 'Anna read a book.' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article · acc.' },
      { w: 'Buch', role: 'r-object', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.', why: 'das Buch (recycled — Akkusativ).', ex: 'ein Buch gelesen', exEn: 'read a book' },
      { w: 'gelesen', role: 'r-verb', en: 'read', hi: 'पढ़ा', pron: 'guh-LAY-zen', type: 'Partizip II · lesen', why: 'irregular ge…en (this chapter).', ex: 'Anna hat gelesen.', exEn: 'Anna read.' },
      { w: '.', plain: true },
      { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'haben', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-ben', type: 'Aux · haben (wir)', why: 'haben, wir-form (this chapter).', ex: 'Wir haben zusammen gelernt.', exEn: 'We studied together.' },
      { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb', why: 'zusammen (recycled — Im Café).', ex: 'zusammen gelernt', exEn: 'studied together' },
      { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + dat.', why: 'in + dem → im (recycled — Unregelmäßige Verben).', ex: 'im Café', exEn: 'in the café' },
      { w: 'Café', role: 'r-place', en: 'café', hi: 'कैफ़े', pron: 'ka-FAY', type: 'Noun · place', why: 'das Café (recycled — Im Café).', ex: 'im Café', exEn: 'in the café' },
      { w: 'studiert', role: 'r-verb', en: 'studied', hi: 'पढ़ाई की', pron: 'shtu-DEERT', type: 'Partizip II · studieren', why: '-ieren → no ge- (this chapter).', ex: 'Wir haben studiert.', exEn: 'We studied.' },
      { w: '.', plain: true },
      { w: 'Nur', role: 'r-subject', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb', why: 'nur (recycled — Hobbies).', ex: 'Nur Max …', exEn: 'Only Max …' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'पिया', pron: 'hat', type: 'Aux · haben (er)' },
      { w: 'nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
      { w: 'Kaffee', role: 'r-object', en: 'coffee', hi: 'कॉफ़ी', pron: 'KA-fay', type: 'Noun · masc.', why: 'der Kaffee (recycled — Im Café).', ex: 'Kaffee getrunken', exEn: 'drank coffee' },
      { w: 'getrunken', role: 'r-verb', en: 'drunk', hi: 'पिया', pron: 'guh-TRUNK-en', type: 'Partizip II · trinken', why: 'irregular ge…en (this chapter).', ex: 'Max hat Kaffee getrunken.', exEn: 'Max drank coffee.' },
      { w: '!', plain: true }
    ],
    translation: 'Last week I studied a lot for the exam. I attended the lessons and did exercises. Anna read a book. We studied together in the café. Only Max just drank coffee!'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_029_L001', speaker: 'Miriam', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Robert, wie hast du dich auf das Interview vorbereitet?', en: 'Robert, how did you prepare for the interview?' },
      { id: 'A1_029_L002', speaker: 'Robert', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich habe meinen Lebenslauf geübt und Fragen vorbereitet. Und du?', en: 'I practiced my résumé and prepared questions. And you?' },
      { id: 'A1_029_L003', speaker: 'Miriam', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich habe im Internet recherchiert und Notizen gemacht.', en: 'I researched online and took notes.' },
      { id: 'A1_029_L004', speaker: 'Robert', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Max hat nur seinen Anzug gekauft!', en: 'Max only bought his suit!' },
      { id: 'A1_029_L005', speaker: 'Miriam', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Typisch!', en: 'Typical!' }
    ],
    transcript: 'Robert, wie hast du dich auf das Interview vorbereitet? Ich habe meinen Lebenslauf geübt und Fragen vorbereitet. Und du? Ich habe im Internet recherchiert und Notizen gemacht. Max hat nur seinen Anzug gekauft! Typisch!',
    translation: 'Robert, how did you prepare for the interview? I practiced my résumé and prepared questions. And you? I researched online and took notes. Max only bought his suit! Typical!',
    tokens: [
      { w: 'Robert' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'hast' },
      { w: 'du' },
      { w: 'dich' },
      { w: 'auf' },
      { w: 'das' },
      { w: 'Interview' },
      { w: 'vorbereitet' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'meinen' },
      { w: 'Lebenslauf' },
      { w: 'geübt' },
      { w: 'und' },
      { w: 'Fragen' },
      { w: 'vorbereitet' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'du' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'im' },
      { w: 'Internet' },
      { w: 'recherchiert' },
      { w: 'und' },
      { w: 'Notizen' },
      { w: 'gemacht' },
      { w: '.', plain: true },
      { w: 'Max' },
      { w: 'hat' },
      { w: 'nur' },
      { w: 'seinen' },
      { w: 'Anzug' },
      { w: 'gekauft' },
      { w: '!', plain: true },
      { w: 'Typisch' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was hat Robert vorbereitet?', qEn: 'What did Robert prepare?', options: ['nur seinen Anzug', 'seinen Lebenslauf und Fragen', 'ein Buch', 'nichts'], optionsEn: ['only his suit', 'his CV and questions', 'a book', 'nothing'], answer: 1,
        explain: '"Ich habe meinen Lebenslauf geübt und Fragen vorbereitet."' },
      { q: 'Was hat Miriam zur Vorbereitung gemacht?', qEn: 'What did Miriam do to prepare?', options: ['recherchiert und Notizen gemacht', 'einen Anzug gekauft', 'geschlafen', 'gekocht'], optionsEn: ['researched and made notes', 'bought a suit', 'slept', 'cooked'], answer: 0,
        explain: '"Ich habe im Internet recherchiert und Notizen gemacht."' }
    ]
  },

  speaking: [
    { task: "Dein Partner fragt: Wie hast du dich auf die Prüfung vorbereitet?", taskEn: "Your partner asks: how did you prepare for the exam?", de: "Ich habe viel geübt und Fragen vorbereitet.", en: "I practised a lot and prepared questions." },
    { task: "Deine Lehrerin fragt: Was hast du im Unterricht gemacht?", taskEn: "Your teacher asks: what did you do in class?", de: "Ich habe Notizen gemacht und ein Projekt geschrieben.", en: "I took notes and wrote a project." },
    { task: "Dein Freund fragt: Was hast du am Wochenende gemacht?", taskEn: "Your friend asks: what did you do at the weekend?", de: "Ich habe ein Buch gelesen und Kaffee getrunken.", en: "I read a book and drank coffee." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five sentences about what you did recently for your studies or a busy day, using the Perfekt with haben. Use a mix of regular (gelernt, gemacht, gekauft) and irregular (gelesen, gegessen, getrunken, gesehen) participles, and one no-ge- verb (studiert/besucht). Keep the participle at the end.',
    starters: ['Letzte Woche habe ich …', 'Ich habe … gelernt.', 'Dann habe ich … gemacht.', 'Am Abend habe ich …'],
    placeholder: 'Letzte Woche habe ich für die Prüfung gelernt …',
    minWords: 20
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct?',
      options: ['Ich habe gelernt Deutsch.', 'Ich habe Deutsch gelernt.', 'Ich habe gestudiert.', 'Ich Deutsch habe gelernt.'],
      answer: 1,
      explain: 'haben in position 2, participle at the end: "Ich habe Deutsch gelernt."'
    },
    gap: {
      // haben conjugation + participle
      sentence: ['Anna ', ' ein Buch ', ' .'],
      gaps: [ { answer: 'hat', accepts: ['hat'] }, { answer: 'gelesen', accepts: ['gelesen'] } ],
      explain: 'er/sie → hat; lesen → gelesen (irregular).'
    },
    match: {
      q: 'Match each verb to its Partizip II.',
      pairs: [
        { noun: 'kaufen', art: 'gekauft' },
        { noun: 'lesen', art: 'gelesen' },
        { noun: 'studieren', art: 'studiert' },
        { noun: 'trinken', art: 'getrunken' }
      ]
    },
    builder: {
      target: 'Build: "Anna read a book." (Perfekt)',
      bank: ['Anna', 'hat', 'ein', 'Buch', 'gelesen'],
      answer: ['Anna', 'hat', 'ein', 'Buch', 'gelesen'],
      roles: { 'Anna': 'r-subject', 'hat': 'r-verb', 'ein': 'r-akkusativ', 'Buch': 'r-object', 'gelesen': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Ich ___ Deutsch gelernt."', options: ['bin', 'habe', 'hat', 'ist'], answer: 1,
      explain: 'lernen → haben: "Ich habe gelernt."' },
    { q: 'What is the Partizip II of "lesen"?', options: ['gelest', 'gelesen', 'geliest', 'las'], answer: 1,
      explain: 'lesen → gelesen (irregular).' },
    { q: 'Which is correct?', options: ['Ich habe gestudiert.', 'Ich habe studiert.', 'Ich bin studiert.', 'Ich habe studieren.'], answer: 1,
      explain: '-ieren verbs take no ge-: studiert.' },
    { q: 'Where does the participle go?', options: ['position 1', 'position 2', 'at the end', 'before haben'], answer: 2,
      explain: 'haben position 2, participle at the very end.' },
    { q: 'Complete: "___ du das Projekt gemacht?"', options: ['Bist', 'Hast', 'Habt', 'Hat'], answer: 1,
      explain: 'du → Hast: "Hast du das Projekt gemacht?"' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'The default: <span class="de">haben</span> (position 2) + <strong>Partizip II</strong> (end) \u2014 <span class="de">Ich habe Deutsch gelernt.</span>' },
    { c: 'r-verb', html: 'Participles: regular <span class="de">ge…t</span> (gemacht), irregular <span class="de">ge…en</span> (gelesen), and <span class="de">-ieren</span>/prefix → no ge- (studiert, besucht).' },
    { c: 'r-object', html: 'Questions move haben to the front: <span class="de">Hast du das Buch gelesen?</span> Participle still last.' }
  ],
  revisionTips: [
    'If a verb has a direct object, reach for haben by default.',
    'Drill irregular participles in pairs: lesen→gelesen, trinken→getrunken, sehen→gesehen.',
    'Remember the no-ge- families: -ieren (studiert) and be-/ver-/wieder- (besucht, wiederholt).'
  ]
};

window.CHAPTER = CHAPTER;
