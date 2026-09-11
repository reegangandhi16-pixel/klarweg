/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 31
   "W-Fragen mit Präpositionen" — asking about a fixed
   verb-preposition object with wo(r)+Präposition (worauf, woran,
   wofür, womit, wovon, wozu, worüber, worunter, wobei, wogegen)
   and answering with da(r)+Präposition (darauf, daran, dafür,
   damit, davon, dazu, darüber, darunter, dabei, dagegen) — for
   THINGS only. For PEOPLE, the preposition stays and combines
   with wem/wen (mit wem, für wen, an wen, von wem) — never
   womit/wofür for a person. Builds directly on Chapter 30's
   verb-preposition pairs. No relative pronouns, no advanced
   da-compounds, no worüber hinaus, no B1 structures.
   Vocabulary source: uploaded chapter-31 list (~56 items;
   Kommunikation & Fragen theme — die Durchsage, der Busfahrer,
   das Gehalt, die Geschäftsreise). Recycles A1/A2 vocabulary and
   Chapter 30's verb-preposition pairs throughout.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-30-verben-praepositionen-data.js
   exactly (flat vocab[], grammar[] rule cards, tokenized reading,
   etc.) so it runs on the shared chapter-app.js / chapter-tutor.js.

   SOURCE ISSUES corrected (flagged, not silently overridden):
   • "aufl fallen" → corrected to auffallen (to stand out).
   • "ausl richten" → corrected to ausrichten (to pass on a
     message).
   • "mit|helfen" → corrected to mithelfen (to assist).
   • "zurück|rufen" → corrected to zurückrufen (to call back).
   • "gelaunt - to be in a" — garbled fragment; gelaunt only
     occurs in the fixed phrase gut/schlecht gelaunt (in a
     good/bad mood); glossed as an adjective suffix meaning
     "-tempered, moods" accordingly.
   • "die Kulisse - crime" — garbled gloss → corrected to die
     Kulisse = backdrop, scenery (its correct, well-known
     meaning; unrelated to "crime").
   • "die Hauptrolle" and "die Zugverbindung" mislabelled
     "Adverb/Other" in the source sheet — both are nouns
     (fem.); corrected accordingly.
============================================================ */
const CHAPTER = {
  id: 'a2-31-w-fragen-praepositionen',
  phase: 'A2 · Phase 2',
  number: 31,
  title: 'W-Fragen mit Präpositionen',
  titleEn: 'Question words with prepositions',
  description: 'Ich warte auf den Bus. → Worauf wartest du? → Ich warte darauf. This chapter teaches how to ask about a fixed verb-preposition object without repeating the noun — wo(r)+Präposition for things, da(r)+Präposition to answer — and how people are always asked about with the preposition plus wem/wen instead.',
  xp: 200,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 32, title: 'Konjunktiv II: Wünsche & Höflichkeit', titleEn: 'Subjunctive II: wishes and politeness' , href: 'chapter-a2-32-konjunktiv2-wuensche-hoeflichkeit.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'A radio interview with a musician gives Alina and Timo plenty to ask about — without ever repeating the noun. Worüber spricht sie? Über ihren Karrierewechsel. Womit hat sie angefangen? Mit einem kleinen Konzert.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear wo(r)-questions and da(r)-answers for things, and preposition + wem/wen for people, side by side'
    ],
    scene: 'Am Bahnsteig — Sprachschule Berlin',
    femaleSpeakers: ['Alina'],
    dialogue: [
      { speaker: 'Alina', tokens: [
        { w: 'Worüber', role: 'r-question', en: 'about what', hi: 'किस बारे में', pron: 'vo-RÜ-ber', type: 'Question word', why: 'worüber = about what, fixed-preposition W-question (this chapter).', ex: 'Worüber spricht sie?', exEn: 'What is she talking about?' },
        { w: 'spricht', role: 'r-verb', en: 'is she talking', hi: 'बात करती है', pron: 'shprikht', type: 'Verb · sprechen' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Musikerin', role: 'r-subject', en: 'musician (f)', hi: 'संगीतकार', pron: 'mu-ZEE-ke-rin', type: 'Noun · fem.' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Interview', role: 'r-dativ', en: 'interview (dat.)', hi: 'साक्षात्कार में', pron: 'in-ter-VYOO', type: 'Noun · neut. dat.' },
        { w: '?', plain: true }
      ], en: 'What is the musician talking about in the interview?', hi: 'Sangeetkaar interview mein kis baare mein baat kar rahi hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'spricht', role: 'r-verb', en: 'talks', hi: 'बात करती है', pron: 'shprikht', type: 'Verb · sprechen' },
        { w: 'über', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'Ü-ber', type: 'Preposition · fixed with sprechen' },
        { w: 'ihren', role: 'r-akkusativ', en: 'her (masc.)', hi: 'अपने', pron: 'EE-ren', type: 'Possessive · acc.' },
        { w: 'Berufswechsel', role: 'r-akkusativ', en: 'career change', hi: 'करियर बदलाव', pron: 'be-ROOFS-vek-sel', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'She talks about her career change.', hi: 'Woh apne career badlav ke baare mein baat karti hai.' },
      { speaker: 'Alina', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'womit', role: 'r-question', en: 'with what', hi: 'किससे', pron: 'vo-MIT', type: 'Question word', why: 'womit = with what, fixed-preposition W-question (this chapter).', ex: 'Womit hat sie angefangen?', exEn: 'With what did she start?' },
        { w: 'hat', role: 'r-verb', en: 'did', hi: 'किया', pron: 'hat', type: 'Verb · haben (helper)' },
        { w: 'sie', role: 'r-subject', en: 'she', hi: 'उसने', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'angefangen', role: 'r-verb', en: 'started', hi: 'शुरुआत', pron: 'AN-ge-fan-gen', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'And with what did she start?', hi: 'Aur usne kis se shuruaat ki?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sie', role: 'r-subject', en: 'she', hi: 'उसने', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'की', pron: 'hat', type: 'Verb · haben (helper)' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'से', pron: 'mit', type: 'Preposition · fixed with anfangen' },
        { w: 'einem', role: 'r-dativ', en: 'a (neut. dat.)', hi: 'एक', pron: 'EYE-naym', type: 'Article · dative' },
        { w: 'kleinen', role: 'r-dativ', en: 'small', hi: 'छोटे', pron: 'KLY-nen', type: 'Adjective · dative' },
        { w: 'Konzert', role: 'r-dativ', en: 'concert (dat.)', hi: 'कॉन्सर्ट से', pron: 'kon-TSAIRT', type: 'Noun · neut. dat.' },
        { w: 'angefangen', role: 'r-verb', en: 'started', hi: 'शुरुआत', pron: 'AN-ge-fan-gen', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'She started with a small concert.', hi: 'Usne ek chote concert se shuruaat ki.' },
      { speaker: 'Alina', tokens: [
        { w: 'Worauf', role: 'r-question', en: 'on what', hi: 'किस पर', pron: 'vo-ROWF', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sie', role: 'r-subject', en: 'she', hi: 'उसे', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'am', role: 'r-preposition', en: 'the most', hi: 'सबसे ज़्यादा', pron: 'am', type: 'Preposition + place' },
        { w: 'meisten', role: 'r-dativ', en: 'most', hi: 'ज़्यादा', pron: 'MY-sten', type: 'Superlative' },
        { w: 'stolz', role: 'r-akkusativ', en: 'proud', hi: 'गर्व', pron: 'shtolts', type: 'Adjective' },
        { w: '?', plain: true }
      ], en: 'What is she most proud of?', hi: 'Use sabse zyada kis baat par garv hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sie', role: 'r-subject', en: 'she', hi: 'उसे', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'stolz', role: 'r-akkusativ', en: 'proud', hi: 'गर्व', pron: 'shtolts', type: 'Adjective' },
        { w: 'auf', role: 'r-preposition', en: 'of', hi: 'पर', pron: 'owf', type: 'Preposition · fixed with stolz sein' },
        { w: 'ihr', role: 'r-akkusativ', en: 'her (neut.)', hi: 'अपना', pron: 'eer', type: 'Possessive · acc.' },
        { w: 'erstes', role: 'r-akkusativ', en: 'first', hi: 'पहला', pron: 'AIRS-tes', type: 'Adjective' },
        { w: 'Album', role: 'r-akkusativ', en: 'album', hi: 'एल्बम', pron: 'AL-bum', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'She is proud of her first album.', hi: 'Use apne pehle album par garv hai.' },
      { speaker: 'Alina', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'inspirierend', role: 'r-adjective', en: 'inspiring', hi: 'प्रेरणादायक', pron: 'in-spi-REE-rent', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Wovon', role: 'r-question', en: 'of what', hi: 'किससे', pron: 'vo-FON', type: 'Question word', why: 'wovon = of what, fixed-preposition W-question (this chapter).', ex: 'Wovon träumt sie jetzt?', exEn: 'What does she dream of now?' },
        { w: 'träumt', role: 'r-verb', en: 'does she dream', hi: 'सपना देखती है', pron: 'TROYMT', type: 'Verb · träumen' },
        { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'That is inspiring! What does she dream of now?', hi: 'Yeh prerandaayak hai! Woh ab kis cheez ka sapna dekhti hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'träumt', role: 'r-verb', en: 'dreams', hi: 'सपना देखती है', pron: 'TROYMT', type: 'Verb · träumen' },
        { w: 'von', role: 'r-preposition', en: 'of', hi: 'के बारे में', pron: 'fon', type: 'Preposition · fixed with träumen' },
        { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · dative' },
        { w: 'großen', role: 'r-dativ', en: 'big', hi: 'बड़े', pron: 'GRO-sen', type: 'Adjective · dative' },
        { w: 'Welttournee', role: 'r-dativ', en: 'world tour (dat.)', hi: 'विश्व दौरे का', pron: 'VELT-toor-nay', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'She dreams of a big world tour.', hi: 'Woh ek bade vishwa daure ka sapna dekhti hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'You already know verbs with fixed prepositions from Chapter 30. Now ask about the object without repeating it. Object is a <strong>thing</strong>? Question with <span class="de r-question">wo(r)+Präposition</span> (worauf, woran, wofür…), answer with <span class="de r-question">da(r)+Präposition</span> (darauf, daran, dafür…). Object is a <strong>person</strong>? Keep the preposition and add <span class="de r-question">wem/wen</span> (mit wem, an wen, für wen, von wem) — never womit or wofür for a person.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is W-FRAGEN MIT PRÄPOSITIONEN: wo(r)+Präposition questions (worauf, woran, wofür, womit, wovon, wozu, worüber, worunter, wobei, wogegen) and da(r)+Präposition answers (darauf, daran, dafür, damit, davon, dazu, darüber, darunter, dabei, dagegen) — for THINGS only. For PEOPLE, the preposition combines with wem/wen instead (mit wem, für wen, an wen, von wem) — never womit/wofür for a person. ' +
    'No relative pronouns, no advanced da-compounds, no worüber hinaus, no B1 structures. The learner wrote sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- For a thing, the question is wo(r)+Präposition written as ONE word: worauf, woran, wofür (not "wo auf", "wo an", "wo für"). Flag if written as two words.\n' +
    '- For a thing, the answer is da(r)+Präposition written as ONE word: darauf, daran, dafür (not "da auf", "da für"). Flag if written as two words.\n' +
    '- For a PERSON, never use womit/wofür/woran — the preposition stays with wem or wen: "Mit wem sprichst du?" not "Womit sprichst du?" (when the object is a person). Flag violations.\n' +
    '- Flag "Was?" used instead of a preposition-question when the fixed verb needs one (e.g. "Was wartest du?" should be "Worauf wartest du?").\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Person vs. thing check:</b> one sentence on whether the learner chose wo(r)-/da(r)- for things or preposition+wem/wen for people correctly.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You handle wo(r)-/da(r)-questions for things and preposition+wem/wen for people confidently. Next: express wishes and polite requests with würde, hätte, and wäre.',
    mid: 'Good. Re-read the person vs. thing comparison table once, then continue.',
    low: 'Worth another pass — remember: things get wo(r)+Präposition and da(r)+Präposition, written as ONE word; people always keep the plain preposition + wem/wen. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Worauf', role: 'r-question' }, { w: 'wartest', role: 'r-verb' },
    { w: 'du', role: 'r-subject' }, { w: '?', role: 'plain' },
    { w: 'Ich', role: 'r-subject' }, { w: 'warte', role: 'r-verb' },
    { w: 'darauf', role: 'r-question' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: wo(r)/da(r) for things, preposition+wem/wen for people.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A delayed train and a lot of questions to ask without repeating nouns.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: die Durchsage, der Busfahrer, das Gehalt, die Geschäftsreise.' },
    { id: 'grammar',    label: 'wo(r)- / da(r)-', tag: 'core',
      objective: 'Master the wo(r)/da(r) compound tables and the person vs. thing rule.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a story full of wo(r)-questions and da(r)-answers.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each question-and-answer pair in a station conversation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Ask and answer what you\'re waiting for, thinking about, and interested in.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write an interview using wo(r)-questions and da(r)-answers.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the correct wo(r)-/da(r)- form and person vs. thing choice.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 200 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The chapter\'s communication and questions words — die Durchsage, der Busfahrer, das Gehalt, die Geschäftsreise — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '16 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'wo(r)-/da(r)- transformation drills, person-vs-thing sorting, and an interview-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full wo(r)-/da(r)- compound reference table, the Chapter 30 cheat sheet with matching question/answer forms, common mistakes, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich warte auf den Bus. → Worauf wartest du? → Darauf.', text: 'Ask about and answer for a thing without repeating the noun' },
    { de: 'Ich spreche mit meiner Lehrerin. → Mit wem sprichst du?', text: 'Ask about a person with the preposition + wem/wen' },
    { de: 'Ich denke an meinen Urlaub. → Woran denkst du? → Daran.', text: 'Use the wo(r)-/da(r)- compounds for an, auf, für, von, mit' },
    { de: 'Wofür? Dafür. Womit? Damit. Wovon? Davon.', text: 'Write wo(r)-/da(r)- as one word, never split' },
    { de: 'Wo auf? ❌ Worauf? ✓', text: 'Avoid the classic wo(r)-/da(r)- and person/thing mistakes' }
  ],

  // ---------- Vocabulary (~56 items) ----------
  vocab: [
    { de: 'anschließend', pos: 'adjective', en: 'subsequent, afterwards', hi: 'बाद में', ex: 'Anschließend erzähle ich davon.', exEn: 'Afterwards I\'ll tell you about it.' },
    { de: 'Arztkleidung', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'doctor\'s uniform', hi: 'डॉक्टर की वर्दी', ex: 'Woran erkennst du die Arztkleidung? — Daran, dass sie weiß ist.', exEn: 'What do you recognise the doctor\'s uniform by? — By the fact that it\'s white.' },
    { de: 'auffallen', pos: 'verb', en: 'to stand out', hi: 'ध्यान आकर्षित करना', ex: 'Der Roboter fällt sofort auf.', exEn: 'The robot stands out immediately.', conj: { praesens: 'fällt auf', praeteritum: 'fiel auf', perfekt: 'ist aufgefallen' } },
    { de: 'ausrichten', pos: 'verb', en: 'to pass on (a message)', hi: 'संदेश पहुंचाना', ex: 'Kannst du das dem Trainer ausrichten?', exEn: 'Can you pass that on to the trainer?', conj: { praesens: 'richtet aus', praeteritum: 'richtete aus', perfekt: 'hat ausgerichtet' } },
    { de: 'Bedeutung', art: 'die', gender: 'f', plural: 'Bedeutungen', pos: 'noun', en: 'meaning', hi: 'अर्थ', ex: 'Worüber sprichst du? — Über die Bedeutung des Wortes.', exEn: 'What are you talking about? — About the meaning of the word.' },
    { de: 'befristet', pos: 'adjective', en: 'temporary', hi: 'अस्थायी', ex: 'Der Vertrag ist befristet.', exEn: 'The contract is temporary.' },
    { de: 'Busfahrer', art: 'der', gender: 'm', plural: 'Busfahrer', pos: 'noun', en: 'bus driver', hi: 'बस चालक', ex: 'Ich spreche mit dem Busfahrer über die Rückfahrt.', exEn: 'I talk with the bus driver about the return trip.' },
    { de: 'Hauptrolle', art: 'die', gender: 'f', plural: 'Hauptrollen', pos: 'noun', en: 'lead role', hi: 'मुख्य भूमिका', ex: 'Worüber freust du dich? — Darüber, dass ich die Hauptrolle bekomme.', exEn: 'What are you happy about? — About getting the lead role.' },
    { de: 'Zugverbindung', art: 'die', gender: 'f', plural: 'Zugverbindungen', pos: 'noun', en: 'train connection', hi: 'ट्रेन कनेक्शन', ex: 'Ich warte auf die Zugverbindung.', exEn: 'I\'m waiting for the train connection.' },
    { de: 'Durchsage', art: 'die', gender: 'f', plural: 'Durchsagen', pos: 'noun', en: 'announcement', hi: 'घोषणा', ex: 'Die Durchsage war hektisch.', exEn: 'The announcement was hectic.' },
    { de: 'erfolgreich', pos: 'adjective', en: 'successful', hi: 'सफल', ex: 'Der Roboter ist erfolgreich fertig.', exEn: 'The robot is successfully finished.' },
    { de: 'erhalten', pos: 'verb', en: 'to receive', hi: 'प्राप्त करना', ex: 'Wovon hast du das Gehalt erhalten? — Davon, dass ich fleißig gearbeitet habe.', exEn: 'What did you receive the salary for? — Because I worked hard.', conj: { praesens: 'erhält', praeteritum: 'erhielt', perfekt: 'hat erhalten' } },
    { de: 'Fabrik', art: 'die', gender: 'f', plural: 'Fabriken', pos: 'noun', en: 'factory', hi: 'फैक्ट्री', ex: 'Der Roboter arbeitet in der Fabrik.', exEn: 'The robot works in the factory.' },
    { de: 'Feiertag', art: 'der', gender: 'm', plural: 'Feiertage', pos: 'noun', en: 'holiday', hi: 'छुट्टी', ex: 'Ich freue mich auf den Feiertag.', exEn: 'I\'m looking forward to the holiday.' },
    { de: 'Führung', art: 'die', gender: 'f', plural: 'Führungen', pos: 'noun', en: 'guided tour', hi: 'निर्देशित यात्रा', ex: 'Wofür bezahlst du? — Dafür, für die Führung.', exEn: 'What are you paying for? — For that, for the guided tour.' },
    { de: 'Gehalt', art: 'das', gender: 'n', plural: 'Gehälter', pos: 'noun', en: 'salary', hi: 'वेतन', ex: 'Ich denke daran, dass mein Gehalt bald kommt.', exEn: 'I\'m thinking about the fact that my salary is coming soon.' },
    { de: 'gelaunt', pos: 'adjective', en: '-tempered (in gut/schlecht gelaunt = in a good/bad mood)', hi: 'मूड में (गुड/बैड गेलौंट)', ex: 'Woran erkennst du, dass er gut gelaunt ist?', exEn: 'How do you tell he\'s in a good mood?' },
    { de: 'Geschäftsreise', art: 'die', gender: 'f', plural: 'Geschäftsreisen', pos: 'noun', en: 'business trip', hi: 'व्यापार यात्रा', ex: 'Ich freue mich auf die Geschäftsreise.', exEn: 'I\'m looking forward to the business trip.' },
    { de: 'Hardrock', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'hard rock', hi: 'हार्ड रॉक', ex: 'Wofür interessiert er sich? — Dafür, für Hardrock.', exEn: 'What is he interested in? — For that, for hard rock.' },
    { de: 'hektisch', pos: 'adjective', en: 'hectic', hi: 'अफरातफरी भरा', ex: 'Der Bahnhof war hektisch.', exEn: 'The station was hectic.' },
    { de: 'insbesondere', pos: 'adverb', en: 'especially', hi: 'विशेष रूप से', ex: 'Ich interessiere mich insbesondere für Rock.', exEn: 'I\'m especially interested in rock.' },
    { de: 'Kauf', art: 'der', gender: 'm', plural: 'Käufe', pos: 'noun', en: 'purchase', hi: 'खरीद', ex: 'Worüber sprichst du? — Über den Kauf des Roboters.', exEn: 'What are you talking about? — About the purchase of the robot.' },
    { de: 'Kompetenz', art: 'die', gender: 'f', plural: 'Kompetenzen', pos: 'noun', en: 'expertise', hi: 'विशेषज्ञता', ex: 'Der Trainer hat viel Kompetenz.', exEn: 'The trainer has a lot of expertise.' },
    { de: 'komplett', pos: 'adjective', en: 'complete, completely', hi: 'पूरी तरह', ex: 'Er ist komplett verrückt nach Rock.', exEn: 'He\'s completely crazy about rock.' },
    { de: 'Kulisse', art: 'die', gender: 'f', plural: 'Kulissen', pos: 'noun', en: 'backdrop, scenery', hi: 'पृष्ठभूमि दृश्य', ex: 'Das Schloss ist die Kulisse für den Film.', exEn: 'The castle is the backdrop for the film.' },
    { de: 'Kurspartner', art: 'der', gender: 'm', plural: 'Kurspartner', pos: 'noun', en: 'course partner', hi: 'कोर्स साथी', ex: 'Mit wem übst du? — Mit meinem Kurspartner.', exEn: 'Who are you practising with? — With my course partner.' },
    { de: 'Königin', art: 'die', gender: 'f', plural: 'Königinnen', pos: 'noun', en: 'queen', hi: 'रानी', ex: 'Der Roman handelt von einer Königin.', exEn: 'The novel is about a queen.' },
    { de: 'Mediziner', art: 'der', gender: 'm', plural: 'Mediziner', pos: 'noun', en: 'doctor', hi: 'चिकित्सक', ex: 'Ich spreche mit einem Mediziner über meine Gesundheit.', exEn: 'I talk with a doctor about my health.' },
    { de: 'mithelfen', pos: 'verb', en: 'to assist', hi: 'सहायता करना', ex: 'Kannst du mithelfen?', exEn: 'Can you assist?', conj: { praesens: 'hilft mit', praeteritum: 'half mit', perfekt: 'hat mitgeholfen' } },
    { de: 'Musikerin', art: 'die', gender: 'f', plural: 'Musikerinnen', pos: 'noun', en: 'musician (f.)', hi: 'संगीतकार (महिला)', ex: 'Woran erinnerst du dich? — An die Stimme der Musikerin.', exEn: 'What do you remember? — The musician\'s voice.' },
    { de: 'nun', pos: 'adverb', en: 'now', hi: 'अब', ex: 'Nun weiß ich, worauf ich warte.', exEn: 'Now I know what I\'m waiting for.' },
    { de: 'Plastik', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'plastic', hi: 'प्लास्टिक', ex: 'Der Roboter ist aus Plastik.', exEn: 'The robot is made of plastic.' },
    { de: 'professionell', pos: 'adjective', en: 'professional', hi: 'पेशेवर', ex: 'Der Trainer arbeitet professionell.', exEn: 'The trainer works professionally.' },
    { de: 'Rap', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'rap (music)', hi: 'रैप संगीत', ex: 'Wofür interessiert sich Max? — Für Rap und Pop.', exEn: 'What is Max interested in? — Rap and pop.' },
    { de: 'Roboter', art: 'der', gender: 'm', plural: 'Roboter', pos: 'noun', en: 'robot', hi: 'रोबोट', ex: 'Ich interessiere mich dafür, einen Roboter zu bauen.', exEn: 'I\'m interested in building a robot.' },
    { de: 'Rock', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'rock (music)', hi: 'रॉक संगीत', ex: 'Er ist komplett verrückt nach Rock.', exEn: 'He\'s completely crazy about rock.' },
    { de: 'Rucksack', art: 'der', gender: 'm', plural: 'Rucksäcke', pos: 'noun', en: 'backpack', hi: 'बैकपैक', ex: 'Worauf achtest du beim Kauf? — Darauf, dass der Rucksack passt.', exEn: 'What do you pay attention to when buying? — That the backpack fits.' },
    { de: 'Rückfahrt', art: 'die', gender: 'f', plural: 'Rückfahrten', pos: 'noun', en: 'return trip', hi: 'वापसी यात्रा', ex: 'Ich warte auf die Rückfahrt.', exEn: 'I\'m waiting for the return trip.' },
    { de: 'Sammler', art: 'der', gender: 'm', plural: 'Sammler', pos: 'noun', en: 'collector', hi: 'संग्रहकर्ता', ex: 'Von wem erzählst du? — Von einem Sammler.', exEn: 'Who are you telling us about? — About a collector.' },
    { de: 'Schloss', art: 'das', gender: 'n', plural: 'Schlösser', pos: 'noun', en: 'castle', hi: 'महल', ex: 'Ich träume davon, ein Schloss zu besuchen.', exEn: 'I dream of visiting a castle.' },
    { de: 'Sofort-Überweisung', art: 'die', gender: 'f', plural: 'Sofort-Überweisungen', pos: 'noun', en: 'instant bank transfer', hi: 'तुरंत बैंक ट्रांसफर', ex: 'Womit bezahlst du? — Damit, mit einer Sofort-Überweisung. Der Roboter fällt allen sofort auf.', exEn: 'What are you paying with? — With that, with an instant bank transfer. The robot stands out to everyone immediately.' },
    { de: 'Stimmung', art: 'die', gender: 'f', plural: 'Stimmungen', pos: 'noun', en: 'mood', hi: 'मनोदशा', ex: 'Woran erkennst du die Stimmung? — Daran, dass alle lachen.', exEn: 'How do you tell the mood? — By the fact that everyone is laughing.' },
    { de: 'Trainer', art: 'der', gender: 'm', plural: 'Trainer', pos: 'noun', en: 'trainer', hi: 'प्रशिक्षक', ex: 'Ich spreche mit meinem Trainer.', exEn: 'I talk with my trainer.' },
    { de: 'Umwelt', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'environment', hi: 'पर्यावरण', ex: 'Wogegen kämpft ihr? — Dagegen, gegen die Umweltverschmutzung.', exEn: 'What are you fighting against? — Against that, against environmental pollution.' },
    { de: 'Versand', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'shipping', hi: 'शिपिंग', ex: 'Worauf wartest du noch? — Darauf, auf den Versand.', exEn: 'What are you still waiting for? — For that, for the shipping.' },
    { de: 'virtuell', pos: 'adjective', en: 'virtual', hi: 'आभासी', ex: 'Der Trainer arbeitet auch virtuell.', exEn: 'The trainer also works virtually.' },
    { de: 'zurückrufen', pos: 'verb', en: 'to call back', hi: 'वापस फोन करना', ex: 'Ich muss den Mediziner zurückrufen.', exEn: 'I have to call the doctor back.', conj: { praesens: 'ruft zurück', praeteritum: 'rief zurück', perfekt: 'hat zurückgerufen' } },
    { de: 'Abend-Programm', art: 'das', gender: 'n', plural: 'Abend-Programme', pos: 'noun', en: 'evening programme', hi: 'शाम का कार्यक्रम', ex: 'Worauf freust du dich am Abend-Programm? — Darauf, auf die Musik.', exEn: 'What are you looking forward to in the evening programme? — The music.' },
    { de: 'Bildbeschreibung', art: 'die', gender: 'f', plural: 'Bildbeschreibungen', pos: 'noun', en: 'picture description', hi: 'चित्र विवरण', ex: 'Wovon handelt die Bildbeschreibung? — Von einem Schloss.', exEn: 'What is the picture description about? — About a castle.' },
    { de: 'Kunstexpertin', art: 'die', gender: 'f', plural: 'Kunstexpertinnen', pos: 'noun', en: 'art expert (f.)', hi: 'कला विशेषज्ञ (महिला)', ex: 'Mit wem spreche ich über die Kulisse? — Mit der Kunstexpertin.', exEn: 'Who do I talk to about the backdrop? — With the art expert (f.).' },
    { de: 'Privatkunde', art: 'der', gender: 'm', plural: 'Privatkunden', pos: 'noun', en: 'private client', hi: 'निजी ग्राहक', ex: 'Ich spreche mit einem Privatkunden über den Kauf.', exEn: 'I talk with a private client about the purchase.' },
    { de: 'Tiertrainer', art: 'der', gender: 'm', plural: 'Tiertrainer', pos: 'noun', en: 'animal trainer', hi: 'पशु प्रशिक्षक', ex: 'Ich spreche mit dem Tiertrainer über das Wildschwein.', exEn: 'I talk with the animal trainer about the wild boar.' },
    { de: 'Verfilmung', art: 'die', gender: 'f', plural: 'Verfilmungen', pos: 'noun', en: 'film adaptation', hi: 'फिल्म रूपांतरण', ex: 'Worüber freust du dich? — Über die Verfilmung des Romans.', exEn: 'What are you happy about? — About the film adaptation of the novel.' },
    { de: 'Verwendung', art: 'die', gender: 'f', plural: 'Verwendungen', pos: 'noun', en: 'usage', hi: 'उपयोग', ex: 'Wofür ist die Verwendung des Roboters gedacht?', exEn: 'What is the robot\'s usage intended for?' },
    { de: 'Wildschwein', art: 'das', gender: 'n', plural: 'Wildschweine', pos: 'noun', en: 'wild boar', hi: 'जंगली सूअर', ex: 'Wovor hast du Angst? — Davor, vor dem Wildschwein.', exEn: 'What are you afraid of? — Of that, of the wild boar.' },
    { de: 'Zahlungsart', art: 'die', gender: 'f', plural: 'Zahlungsarten', pos: 'noun', en: 'payment method', hi: 'भुगतान का तरीका', ex: 'Womit bezahlst du? — Damit, mit dieser Zahlungsart.', exEn: 'What are you paying with? — With that, with this payment method.' }
  ],

  // ---------- wo(r)- / da(r)- Präpositionen (rule cards) ----------
  grammar: [
    {
      title: 'Things: wo(r)+Präposition asks, da(r)+Präposition answers',
      body: [
        'When the object of a fixed verb-preposition pair is a <strong>thing</strong>, you don\'t ask "was" — you fuse wo(r)- onto the preposition, written as ONE word. The answer fuses da(r)- the same way.'
      ],
      table: {
        head: ['Sentence', 'Question', 'Answer'],
        rows: [
          ['<span class="de">Ich warte auf den Bus.</span>', '<span class="de r-question">Worauf</span> wartest du?', '<span class="de">Ich warte <b>darauf</b>.</span>'],
          ['<span class="de">Ich denke an meinen Urlaub.</span>', '<span class="de r-question">Woran</span> denkst du?', '<span class="de">Ich denke <b>daran</b>.</span>'],
          ['<span class="de">Ich interessiere mich für Musik.</span>', '<span class="de r-question">Wofür</span> interessierst du dich?', '<span class="de">Ich interessiere mich <b>dafür</b>.</span>']
        ]
      },
      note: 'Before a vowel, wo/da add an -r-: wo + auf = worauf, da + an = daran (an starts with a vowel, so technically no -r- is added here — but wo + an = woran also needs the -r- for pronunciation ease). Learn each pair as a fixed chunk.',
      hinglish: 'Jab object koi cheez ho, to <b>was</b> se sawaal nahi banta. Preposition ke saath <b>wo(r)-</b> jod do, aur poora ek shabd bana do. Jawaab mein usi preposition ke saath <b>da(r)-</b> aata hai.'
    },
    {
      title: 'People: the preposition stays, wem/wen replaces them',
      body: [
        'When the object is a <strong>person</strong>, never use wo(r)-/da(r)-. Keep the plain preposition and add wem (Dativ) or wen (Akkusativ).'
      ],
      table: {
        head: ['Sentence', 'Question', 'Answer'],
        rows: [
          ['<span class="de">Ich spreche mit meiner Lehrerin.</span>', '<span class="de r-question">Mit wem</span> sprichst du?', '<span class="de">Mit meiner Lehrerin.</span>'],
          ['<span class="de">Ich warte auf meine Freundin.</span>', '<span class="de r-question">Auf wen</span> wartest du?', '<span class="de">Auf meine Freundin.</span>'],
          ['<span class="de">Ich denke an meine Familie.</span>', '<span class="de r-question">An wen</span> denkst du?', '<span class="de">An meine Familie.</span>'],
          ['<span class="de">Ich erzähle von meinem Trainer.</span>', '<span class="de r-question">Von wem</span> erzählst du?', '<span class="de">Von meinem Trainer.</span>']
        ]
      },
      note: '❌ Womit sprichst du? is wrong when the object is a person — always Mit wem?',
      hinglish: 'Jab object koi insaan ho, to <b>wo(r)-</b> aur <b>da(r)-</b> use nahi hote. Preposition wahi rehti hai, aur uske baad <b>wem</b> (Dativ) ya <b>wen</b> (Akkusativ) aata hai.'
    },
    {
      title: 'Complete wo(r)-/da(r)- reference table',
      body: [ 'Every A2 combination, side by side.' ],
      table: {
        head: ['Preposition', 'Question (thing)', 'Answer (thing)'],
        rows: [
          ['auf', 'worauf', 'darauf'],
          ['an', 'woran', 'daran'],
          ['für', 'wofür', 'dafür'],
          ['mit', 'womit', 'damit'],
          ['von', 'wovon', 'davon'],
          ['zu', 'wozu', 'dazu'],
          ['über', 'worüber', 'darüber'],
          ['unter', 'worunter', 'darunter'],
          ['bei', 'wobei', 'dabei'],
          ['gegen', 'wogegen', 'dagegen']
        ]
      },
      hinglish: 'Har preposition ka apna <b>wo(r)-</b> aur <b>da(r)-</b> form hota hai, aur woh badalta nahi. Neeche wala table ek baar dhyaan se dekh lo.'
    },
    {
      title: 'Common learner mistakes',
      body: [
        '<span class="de strike">Wo auf wartest du?</span> → <span class="de">Worauf wartest du?</span> — wo(r)+Präposition is always ONE word, never split.',
        '<span class="de strike">Ich warte da auf.</span> → <span class="de">Ich warte darauf.</span> — da(r)+Präposition is always ONE word too.',
        '<span class="de strike">Mit was sprichst du?</span> → <span class="de">Womit</span> sprichst du? (for things) / <span class="de">Mit wem</span> sprichst du? (for people).',
        '<span class="de strike">Worauf sprichst du?</span> → <span class="de">Worüber sprichst du?</span> — sprechen pairs with über (about a topic), not auf.',
        '<span class="de strike">Woran wartest du?</span> → <span class="de">Worauf wartest du?</span> — warten always pairs with auf, never an.'
      ],
      hinglish: 'Do galtiyan common hain. <b>wo(r)-</b> aur <b>da(r)-</b> ek hi shabd mein likhe jaate hain, unhe todna nahi hai. Aur kisi insaan ke liye <b>womit</b> ya <b>wofür</b> nahi aata \u2014 wahan preposition ke saath <b>wem</b> ya <b>wen</b> aata hai.'
    },
    {
      title: 'Cheat sheet — every Chapter 30 verb with its question & answer',
      body: [ 'The full set from last chapter, now with matching question and answer forms.' ],
      table: {
        head: ['Verb', 'Question', 'Answer (thing) / Person form'],
        rows: [
          ['warten auf', 'Worauf?', 'Darauf. / Auf wen?'],
          ['denken an', 'Woran?', 'Daran. / An wen?'],
          ['sich erinnern an', 'Woran?', 'Daran. / An wen?'],
          ['sich freuen auf', 'Worauf?', 'Darauf. / Auf wen?'],
          ['glauben an', 'Woran?', 'Daran. / An wen?'],
          ['sich interessieren für', 'Wofür?', 'Dafür. / Für wen?'],
          ['sich entscheiden für', 'Wofür?', 'Dafür.'],
          ['bitten um', 'Worum?', 'Darum.'],
          ['sich kümmern um', 'Worum?', 'Darum. / Um wen?'],
          ['sprechen mit', 'Womit? (nie für Personen)', 'Damit. / Mit wem?'],
          ['reden mit', 'Womit? (nie für Personen)', 'Damit. / Mit wem?'],
          ['telefonieren mit', '—', 'Mit wem?'],
          ['anfangen mit', 'Womit?', 'Damit.'],
          ['aufhören mit', 'Womit?', 'Damit.'],
          ['träumen von', 'Wovon?', 'Davon. / Von wem?'],
          ['erzählen von', 'Wovon?', 'Davon. / Von wem?'],
          ['handeln von', 'Wovon?', 'Davon.'],
          ['gehören zu', 'Wozu?', 'Dazu.'],
          ['passen zu', 'Wozu?', 'Dazu.']
        ]
      },
      hinglish: 'Yeh Chapter 30 ka wahi cheat sheet hai, par ab har verb ke saath uska question aur answer form bhi diya hai. Quiz se pehle ek baar dekh lena kaafi madad karega.'
    }
  ],

  // ---------- Reading passage ----------
  reading: {
    title: 'Am Bahnsteig',
    titleEn: 'On the platform',
    tokens: [
      { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Durchsage', role: 'r-subject', en: 'announcement', hi: 'घोषणा', pron: 'DOORKH-zah-guh', type: 'Noun · fem.', why: 'die Durchsage (this chapter).' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb · sein, Präteritum' },
      { w: 'hektisch', role: 'r-adjective', en: 'hectic', hi: 'अफरातफरी भरा', pron: 'HEK-tish', type: 'Adjective', why: 'hektisch (this chapter).' },
      { w: ',', plain: true },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'oont', type: 'Konjunktion' },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अन्ना', pron: 'AN-na', type: 'Name' },
      { w: 'wartete', role: 'r-verb', en: 'was waiting', hi: 'इंतज़ार कर रही थी', pron: 'VAR-tuh-tuh', type: 'Verb · warten auf, Präteritum' },
      { w: 'auf', role: 'r-preposition', en: 'for', hi: 'का', pron: 'owf', type: 'Preposition · Akk. (fest)', why: 'warten auf (this chapter).' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · acc.' },
      { w: 'Zugverbindung', role: 'r-akkusativ', en: 'train connection', hi: 'ट्रेन कनेक्शन', pron: 'TSOOK-fer-bin-doong', type: 'Noun · fem.', why: 'die Zugverbindung (this chapter).' },
      { w: '.', plain: true },
      { w: 'Worauf', role: 'r-question', en: 'what … for', hi: 'किस चीज़ का', pron: 'vor-OWF', type: 'Fragewort', why: 'worauf — a thing, ask with wo(r)+Präposition (this chapter).' },
      { w: 'wartest', role: 'r-verb', en: 'are waiting', hi: 'इंतज़ार करती हो', pron: 'VAR-test', type: 'Verb · warten (du)' },
      { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
      { w: 'genau', role: 'r-adverb', en: 'exactly', hi: 'ठीक', pron: 'guh-NOW', type: 'Adverb' },
      { w: '?', plain: true },
      { w: ',', plain: true },
      { w: 'fragte', role: 'r-verb', en: 'asked', hi: 'पूछा', pron: 'FRAHK-tuh', type: 'Verb · fragen, Präteritum' },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'ROH-han', type: 'Name' },
      { w: '.', plain: true },
      { w: '"Ich', role: 'r-subject', en: '"I', hi: '"मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'warte', role: 'r-verb', en: 'am waiting', hi: 'इंतज़ार कर रही हूं', pron: 'VAR-tuh', type: 'Verb · warten' },
      { w: 'darauf', role: 'r-question', en: 'for it', hi: 'उसका', pron: 'da-ROWF', type: 'Pronominaladverb', why: 'darauf — the thing-answer form (this chapter).' },
      { w: '",', plain: true },
      { w: 'sagte', role: 'r-verb', en: 'said', hi: 'कहा', pron: 'ZAHK-tuh', type: 'Verb · sagen, Präteritum' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun' },
      { w: '.', plain: true },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'interessierte', role: 'r-verb', en: 'was interested', hi: 'रुचि रखता था', pron: 'in-tair-e-SEER-tuh', type: 'Verb · sich interessieren, Präteritum' },
      { w: 'sich', role: 'r-reflexiv', en: 'himself', hi: 'खुद', pron: 'zikh', type: 'Reflexivpronomen' },
      { w: 'unterdessen', role: 'r-time', en: 'meanwhile', hi: 'इस बीच', pron: 'oon-ter-DE-sen', type: 'Adverb' },
      { w: 'für', role: 'r-preposition', en: 'in', hi: 'में', pron: 'fuer', type: 'Preposition · Akk. (fest)', why: 'sich interessieren für (this chapter).' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'AY-nen', type: 'Article · acc.' },
      { w: 'Roboter', role: 'r-akkusativ', en: 'robot', hi: 'रोबोट', pron: 'ro-BO-ter', type: 'Noun · masc.', why: 'der Roboter (this chapter).' },
      { w: '.', plain: true },
      { w: '"Wofür', role: 'r-question', en: '"what … for', hi: '"किसके लिए', pron: 'vo-FUER', type: 'Fragewort', why: 'wofür — a thing, ask with wo(r)+Präposition (this chapter).' },
      { w: 'genau', role: 'r-adverb', en: 'exactly', hi: 'ठीक', pron: 'guh-NOW', type: 'Adverb' },
      { w: '?"', plain: true },
      { w: ',', plain: true },
      { w: 'fragte', role: 'r-verb', en: 'asked', hi: 'पूछा', pron: 'FRAHK-tuh', type: 'Verb · fragen, Präteritum' },
      { w: 'Frau', role: 'r-subject', en: 'Mrs.', hi: 'श्रीमती', pron: 'frow', type: 'Titel' },
      { w: 'Weber', role: 'r-subject', en: 'Weber', hi: 'वेबर', pron: 'VAY-ber', type: 'Name' },
      { w: '.', plain: true },
      { w: '"Dafür', role: 'r-question', en: '"for it', hi: '"उसमें', pron: 'da-FUER', type: 'Pronominaladverb', why: 'dafür — the thing-answer form (this chapter).' },
      { w: ',', plain: true },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'AY-nen', type: 'Article · acc.' },
      { w: 'Roboter', role: 'r-akkusativ', en: 'robot', hi: 'रोबोट', pron: 'ro-BO-ter', type: 'Noun · masc.' },
      { w: 'zu', role: 'r-verb', en: 'to', hi: 'को', pron: 'tsoo', type: 'Infinitivpartikel' },
      { w: 'bauen', role: 'r-verb', en: 'build', hi: 'बनाना', pron: 'BOW-en', type: 'Infinitiv' },
      { w: '",', plain: true },
      { w: 'antwortete', role: 'r-verb', en: 'answered', hi: 'जवाब दिया', pron: 'ant-VOR-tuh-tuh', type: 'Verb · antworten, Präteritum' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: '.', plain: true },
      { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'oont', type: 'Konjunktion' },
      { w: 'mit', role: 'r-question', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Fragewort', why: 'mit wem — a person, keep the preposition + wem (this chapter).' },
      { w: 'wem', role: 'r-question', en: 'whom', hi: 'किससे', pron: 'vaym', type: 'Fragewort' },
      { w: 'sprach', role: 'r-verb', en: 'was talking', hi: 'बात कर रहा था', pron: 'shprakh', type: 'Verb · sprechen, Präteritum' },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'ROH-han', type: 'Name' },
      { w: '?', plain: true },
      { w: 'Mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition · Dat. (fest)' },
      { w: 'einem', role: 'r-dativ', en: 'a (masc. dat.)', hi: 'एक', pron: 'AY-nem', type: 'Article · dat.' },
      { w: 'Trainer', role: 'r-dativ', en: 'trainer', hi: 'प्रशिक्षक', pron: 'TRAY-ner', type: 'Noun · masc.', why: 'der Trainer (this chapter).' },
      { w: '.', plain: true }
    ],
    translation: 'The announcement was hectic, and Anna was waiting for the train connection. "What exactly are you waiting for?" asked Rohan. "I\'m waiting for it," she said. Meanwhile, Max was interested in a robot. "What exactly for?" asked Frau Weber. "For it, for building a robot," answered Max. And who was Rohan talking with? With a trainer.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_031_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Alina, worüber habt ihr im Radio gesprochen?', en: 'Alina, what did you talk about on the radio?' },
      { id: 'A2_031_L002', speaker: 'Alina', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Über einen Musiker und seinen Karrierewechsel.', en: 'About a musician and his career change.' },
      { id: 'A2_031_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Womit hat er angefangen?', en: 'What did he start with?' },
      { id: 'A2_031_L004', speaker: 'Alina', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Mit einem kleinen Konzert in einem Café.', en: 'With a small concert in a café.' }
    ],
    transcript: 'Alina, worüber habt ihr im Radio gesprochen? Über einen Musiker und seinen Karrierewechsel. Womit hat er angefangen? Mit einem kleinen Konzert in einem Café.',
    translation: 'Alina, what did you talk about on the radio? About a musician and his career change. What did he start with? With a small concert in a café.',
    tokens: [
      { w: 'Alina' },
      { w: ',', plain: true },
      { w: 'worüber' },
      { w: 'habt' },
      { w: 'ihr' },
      { w: 'im' },
      { w: 'Radio' },
      { w: 'gesprochen' },
      { w: '?', plain: true },
      { w: 'Über' },
      { w: 'einen' },
      { w: 'Musiker' },
      { w: 'und' },
      { w: 'seinen' },
      { w: 'Karrierewechsel' },
      { w: '.', plain: true },
      { w: 'Womit' },
      { w: 'hat' },
      { w: 'er' },
      { w: 'angefangen' },
      { w: '?', plain: true },
      { w: 'Mit' },
      { w: 'einem' },
      { w: 'kleinen' },
      { w: 'Konzert' },
      { w: 'in' },
      { w: 'einem' },
      { w: 'Café' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Worum ging es in der Radiosendung?', qEn: 'What was the radio show about?', options: ['ein Politiker', 'ein Musiker', 'ein Sportler', 'ein Schauspieler'], optionsEn: ['a politician', 'a musician', 'an athlete', 'an actor'], answer: 1,
        explain: '"Über einen Musiker und seinen Karrierewechsel."' },
      { q: 'Womit hat der Musiker angefangen?', qEn: 'What did the musician start with?', options: ['einem Buch', 'einem kleinen Konzert', 'einer Reise', 'einem Film'], optionsEn: ['a book', 'a small concert', 'a trip', 'a film'], answer: 1,
        explain: '"Mit einem kleinen Konzert in einem Café."' }
    ]
  },

  speaking: [
    { task: "Deine Kollegin ist beschäftigt. Frag, worauf sie wartet.", taskEn: "Your colleague is busy. Ask what she's waiting for.", de: "Worauf wartest du?", en: "What are you waiting for?" },
    { task: "Dein Freund erzählt von einer Durchsage. Frag genauer nach.", taskEn: "Your friend mentions an announcement. Ask for details.", de: "Worum ging es in der Durchsage?", en: "What was the announcement about?" },
    { task: "Du hast das Thema nicht verstanden. Frag im Kurs nach.", taskEn: "You didn't catch the topic. Ask in class.", de: "Über was habt ihr gesprochen?", en: "What did you talk about?" },
    { task: "Deine Freundin freut sich sehr. Frag, warum.", taskEn: "Your friend is very happy. Ask why.", de: "Worauf freust du dich so?", en: "What are you so happy about?" },
    { task: "Ein Kollege spricht von einer Geschäftsreise. Frag nach dem Ziel.", taskEn: "A colleague mentions a business trip. Ask about the destination.", de: "Wohin fährst du, und mit wem?", en: "Where are you going, and who with?" },
    { task: "Dein Partner denkt nach. Frag, an wen er denkt.", taskEn: "Your partner is thinking. Ask who he's thinking of.", de: "An wen denkst du?", en: "Who are you thinking of?" },
    { task: "Dein Freund ist schlecht gelaunt. Frag nach dem Grund.", taskEn: "Your friend is in a bad mood. Ask why.", de: "Worüber ärgerst du dich?", en: "What are you annoyed about?" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short interview (six exchanges) with a partner, asking at least three wo(r)-questions about things (and answering with da(r)-) and at least two questions about people using preposition + wem/wen. Try this chapter\'s words: die Durchsage, der Trainer, das Gehalt.',
    starters: ['Worauf freust du dich?', 'Woran denkst du oft?', 'Mit wem sprichst du gern?', 'Wovon träumst du?'],
    placeholder: 'Worauf freust du dich? — Ich freue mich darauf, mein Gehalt zu bekommen…',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct question for "Ich warte auf den Bus." (the object is a thing)',
      options: ['Wo auf wartest du?', 'Worauf wartest du?', 'Wofür wartest du?'],
      answer: 1,
      explain: 'For a thing, ask with wo(r)+Präposition written as one word: worauf.'
    },
    gap: {
      sentence: ['Ich spreche mit meiner Lehrerin. → Mit ', ' sprichst du?'],
      gaps: [ { answer: 'wem', accepts: ['wem'] } ],
      explain: 'For a person, the preposition stays and combines with wem, never womit.'
    },
    match: {
      q: 'Match each question form to its correct use.',
      pairs: [
        { noun: 'Worauf?', art: 'thing — question with wo(r)+Präposition (auf)' },
        { noun: 'Darauf.', art: 'thing — answer with da(r)+Präposition' },
        { noun: 'Mit wem?', art: 'person — preposition + wem' },
        { noun: 'An wen?', art: 'person — preposition + wen' },
        { noun: 'Wovon?', art: 'thing — question with wo(r)+Präposition (von)' }
      ]
    },
    builder: {
      target: 'Build: "What are you thinking about? — I\'m thinking about it."',
      bank: ['Woran', 'denkst', 'du', '?', 'Ich', 'denke', 'daran', '.'],
      answer: ['Woran', 'denkst', 'du', '?', 'Ich', 'denke', 'daran', '.'],
      roles: { 'Woran': 'r-question', 'denkst': 'r-verb', 'daran': 'r-question', 'denke': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "___ wartest du?" (a thing, at the bus stop)', options: ['Wo auf', 'Worauf', 'Wofür'], answer: 1,
      explain: 'For a thing, worauf is written as one word.' },
    { q: 'Complete: "Ich interessiere mich ___." (answering for a thing)', options: ['dafür', 'da für', 'darauf'], answer: 0,
      explain: 'sich interessieren für → dafür, written as one word.' },
    { q: 'Which is correct when the object is a PERSON?', options: ['Womit sprichst du?', 'Mit wem sprichst du?', 'Wofür sprichst du?'], answer: 1,
      explain: 'For a person, keep the preposition and add wem: Mit wem sprichst du?' },
    { q: 'Which verb pairs with "worüber" (not worauf)?', options: ['warten', 'sprechen (über ein Thema)', 'sich freuen (auf etwas)'], answer: 1,
      explain: 'sprechen über a topic uses worüber, not worauf.' },
    { q: 'Which is the correct da(r)-form for "von"?', options: ['davon', 'da von', 'dafon'], answer: 0,
      explain: 'von + da = davon, written as one word.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-question', html: 'Object is a <b>thing</b>? Ask with <span class="de r-question">wo(r)+Präposition</span> (worauf, woran, wofür…) and answer with <span class="de r-question">da(r)+Präposition</span> (darauf, daran, dafür…) — both always ONE word.' },
    { c: 'r-question', html: 'Object is a <b>person</b>? Keep the plain preposition and add <span class="de r-question">wem</span> (Dativ) or <span class="de r-question">wen</span> (Akkusativ) — mit wem, an wen, für wen, von wem. Never womit/wofür for a person.' },
    { c: 'r-question', html: 'Every Chapter 30 verb now has a matching question and answer form: warten auf → Worauf? Darauf. sprechen mit → Mit wem?' }
  ],
  revisionTips: [
    'Ask yourself first: is the object a thing or a person? Thing → wo(r)-/da(r)-. Person → preposition + wem/wen.',
    'wo(r)+Präposition and da(r)+Präposition are always written as ONE word: worauf (not wo auf), darauf (not da auf).',
    'Some pairs need the connecting -r-: an, auf, über, unter → woran, worauf, worüber, worunter, and daran, darauf, darüber, darunter.'
  ]
};

window.CHAPTER = CHAPTER;
