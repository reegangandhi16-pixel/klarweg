/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 20
   "Interrogativartikel: was für ein(e)" — asking about type/kind.
   Teaches ONLY was für ein(e)/einen (Nom./Akk., brief Dativ review)
   vs welcher (specific item). No relative pronouns, no B1 grammar.
   Vocabulary source: uploaded chapter-20 list (~41 items; adult
   learners / inclusive education / library / driving-school theme).
   Recycles Ch.11–19 grammar and A1 vocabulary throughout.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-19-indirekte-fragen-data.js exactly
   (flat vocab[], grammar[] rule cards, tokenized reading, etc.)
   so it runs on the shared chapter-app.js / chapter-tutor.js engine.

   SOURCE ISSUES corrected (flagged, not silently overridden):
   • "zurechtgekommen 4aUB \ die Beratung" — garbled merge of two
     entries → split into zurechtkommen (managed, coped) and
     die Beratung (consultation/advice session).
   • "zusammen]bringen" → corrected to zusammenbringen (to bring
     together).
   • "anl|hören" → corrected to anhören (to listen to).
============================================================ */
const CHAPTER = {
  id: 'a2-20-was-fuer-ein',
  phase: 'A2 · Phase 2',
  number: 20,
  title: 'Interrogativartikel: was für ein(e)',
  titleEn: 'The Interrogative was für ein(e)',
  description: 'Was ist das? only gets you the name of a thing. Was für ein Buch ist das? gets you its kind — a novel, a textbook, a comic. This chapter teaches was für ein(e)/einen for exactly that question, and draws a clean line against welcher, which asks about one specific item from a known set.',
  xp: 170,
  time: 25,
  difficulty: 'Elementary',
  nextChapter: { number: 21, title: 'Verben mit Dativ und Akkusativ', titleEn: 'Verbs with Dative and Accusative' , href: 'chapter-a2-21-verben-dativ-akkusativ.html' },

  prevChapter: { number: 19, title: 'Indirekte Frage (W-Frage & ob)', titleEn: 'Indirect Questions (W-word & ob)', href: 'chapter-a2-19-indirekte-fragen.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Solveig asks Timo what he plays, what music he likes and what kind of course leader he is looking for. Every second question starts with was f\u00fcr ein(e): what kind of instrument, what kind of music, what kind of teacher.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear was für ein(e) questions next to welcher questions'
    ],
    scene: 'In der Bücherei — Nachmittag',
    femaleSpeakers: ['Solveig'],
    dialogue: [
      { speaker: 'Solveig', tokens: [
        { w: 'Was', role: 'r-question', en: 'what', hi: 'कौनसा', pron: 'vas', type: 'Question word', why: 'was für ein(e) = what kind of (this chapter).', ex: 'Was für ein Instrument spielst du?', exEn: 'What kind of instrument do you play?' },
        { w: 'für', role: 'r-preposition', en: 'kind of', hi: 'तरह का', pron: 'für', type: 'Preposition · fixed phrase' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Instrument', role: 'r-akkusativ', en: 'instrument', hi: 'वाद्य यंत्र', pron: 'in-stru-MENT', type: 'Noun · neut.', why: 'das Instrument (this chapter).', ex: 'Ich spiele ein Instrument.', exEn: 'I play an instrument.' },
        { w: 'spielst', role: 'r-verb', en: 'do you play', hi: 'बजाते हो', pron: 'SHPEELST', type: 'Verb · spielen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'What kind of instrument do you play?', hi: 'Tum kaunsa vaadya yantra bajaate ho?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'spiele', role: 'r-verb', en: 'play', hi: 'बजाता हूँ', pron: 'SHPEE-luh', type: 'Verb · spielen (ich)' },
        { w: 'keins', role: 'r-akkusativ', en: 'none', hi: 'कोई नहीं', pron: 'KINES', type: 'Pronoun' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'will', role: 'r-modalverb', en: 'want', hi: 'चाहता हूँ', pron: 'vil', type: 'Modal · wollen (ich)' },
        { w: 'eins', role: 'r-akkusativ', en: 'one', hi: 'एक', pron: 'ines', type: 'Pronoun' },
        { w: 'lernen', role: 'r-verb', en: 'learn', hi: 'सीखना', pron: 'LAIR-nen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I play none. But I want to learn one.', hi: 'Main koi nahi bajaata. Par main ek seekhna chahta hoon.' },
      { speaker: 'Solveig', tokens: [
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'कौनसा', pron: 'vas', type: 'Question word' },
        { w: 'für', role: 'r-preposition', en: 'kind of', hi: 'तरह का', pron: 'für', type: 'Preposition · fixed phrase' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Musik', role: 'r-akkusativ', en: 'music', hi: 'संगीत', pron: 'mu-ZEEK', type: 'Noun · fem.' },
        { w: 'gefällt', role: 'r-verb', en: 'pleases', hi: 'पसंद है', pron: 'ge-FELT', type: 'Verb · gefallen' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: '?', plain: true }
      ], en: 'What kind of music do you like?', hi: 'Tumhe kaunsi tarah ka sangeet pasand hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mag', role: 'r-modalverb', en: 'like', hi: 'पसंद है', pron: 'mahk', type: 'Modal · mögen (ich)' },
        { w: 'ruhige', role: 'r-akkusativ', en: 'calm', hi: 'शांत', pron: 'ROO-i-guh', type: 'Adjective' },
        { w: 'Musik', role: 'r-akkusativ', en: 'music', hi: 'संगीत', pron: 'mu-ZEEK', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'I like calm music.', hi: 'Mujhe shaant sangeet pasand hai.' },
      { speaker: 'Solveig', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'lern', role: 'r-verb', en: 'learn', hi: 'सीखो', pron: 'lairn', type: 'Verb · imperative' },
        { w: 'Gitarre', role: 'r-akkusativ', en: 'guitar', hi: 'गिटार', pron: 'gi-TA-ruh', type: 'Noun · fem.' },
        { w: '!', plain: true },
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'कौनसे', pron: 'vas', type: 'Question word' },
        { w: 'für', role: 'r-preposition', en: 'kind of', hi: 'तरह के', pron: 'für', type: 'Preposition · fixed phrase' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Kursleiter', role: 'r-akkusativ', en: 'course instructor', hi: 'कोर्स प्रशिक्षक', pron: 'KOORS-ly-ter', type: 'Noun · masc.', why: 'der Kursleiter (this chapter).', ex: 'Was für einen Kursleiter suchst du?', exEn: 'What kind of instructor are you looking for?' },
        { w: 'suchst', role: 'r-verb', en: 'are you looking for', hi: 'ढूंढते हो', pron: 'ZOOKHST', type: 'Verb · suchen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Then learn guitar! What kind of instructor are you looking for?', hi: 'Toh guitar seekho! Tum kis tarah ka instructor dhoondh rahe ho?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'suche', role: 'r-verb', en: 'am looking for', hi: 'ढूंढ रहा हूँ', pron: 'ZOO-khuh', type: 'Verb · suchen (ich)' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'geduldigen', role: 'r-akkusativ', en: 'patient', hi: 'धैर्यवान', pron: 'ge-DUL-di-gen', type: 'Adjective' },
        { w: 'Kursleiter', role: 'r-akkusativ', en: 'course instructor', hi: 'कोर्स प्रशिक्षक', pron: 'KOORS-ly-ter', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'I am looking for a patient instructor.', hi: 'Main ek dhairyavaan instructor dhoondh raha hoon.' },
      { speaker: 'Solveig', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Meine', role: 'r-subject', en: 'my', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Kursleiterin', role: 'r-subject', en: 'course instructor (f)', hi: 'कोर्स प्रशिक्षिका', pron: 'KOORS-ly-te-rin', type: 'Noun · fem.', why: 'die Kursleiterin (this chapter).', ex: 'Meine Kursleiterin ist super.', exEn: 'My instructor is great.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'geduldig', role: 'r-adjective', en: 'patient', hi: 'धैर्यवान', pron: 'ge-DUL-dikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Yes! My instructor is very patient.', hi: 'Haan! Meri instructor bahut dhairyavaan hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Super', role: 'r-adjective', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Kann', role: 'r-modalverb', en: 'can', hi: 'सकता हूँ', pron: 'kan', type: 'Modal · können (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'bei', role: 'r-preposition', en: 'with', hi: 'के पास', pron: 'by', type: 'Preposition' },
        { w: 'ihr', role: 'r-dativ', en: 'her', hi: 'उसके', pron: 'eer', type: 'Pronoun · dative' },
        { w: 'anmelden', role: 'r-verb', en: 'sign up', hi: 'दाख़िला लेना', pron: 'AN-mel-den', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Great! Can I sign up with her?', hi: 'Badhiya! Kya main uske saath naam likhwa sakta hoon?' },
      { speaker: 'Solveig', tokens: [
        { w: 'Klar', role: 'r-adverb', en: 'sure', hi: 'बिल्कुल', pron: 'klahr', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'gebe', role: 'r-verb', en: 'give', hi: 'देती हूँ', pron: 'GAY-buh', type: 'Verb · geben (ich)' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'ihre', role: 'r-akkusativ', en: 'her (fem.)', hi: 'उसका', pron: 'EE-ruh', type: 'Possessive · acc.' },
        { w: 'Nummer', role: 'r-akkusativ', en: 'number', hi: 'नंबर', pron: 'NU-mer', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Sure! I will give you her number.', hi: 'Bilkul! Main tumhe uska number deti hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de">Was ist das?</span> only asks for a name. <span class="de">Was für ein Buch ist das?</span> asks for a <strong>kind</strong> — a novel, a dictionary, a comic. <span class="de r-frage">was für ein(e)/einen</span> agrees with gender and case exactly like <span class="de">ein/eine/einen</span> normally do, and it stays apart from <span class="de r-frage">welcher</span>, which points at <strong>one specific, already-known item</strong> rather than a category.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is THE INTERROGATIVE ARTICLE was für ein(e)/einen (asking about type/kind) versus welcher/welche/welches (asking the listener to choose one specific, known item). ' +
    'No adjective declension, no comparative clauses beyond als, no B1 grammar. The learner wrote sentences/questions below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- was für ein(e)/einen must agree with the noun\'s gender/case: was für ein Film (masc./neut. Nom.), was für eine Tasche (fem.), was für einen Kurs (masc. Akk.). Plural drops the article: was für Bücher.\n' +
    '- Never split "was für ein(e)" — flag "was Buch?" or "was ist für ein Auto?" as wrong; correct form keeps "was für ein(e)" together right before the noun.\n' +
    '- welcher/welche/welches asks about one specific, already-known item, not a type — flag confusion between the two (e.g. "welche Art Buch" as an overly wordy B1 paraphrase; A2 uses "was für ein(e)").\n' +
    '- Dativ forms (was für einem/einer) appear only after a Dativ preposition (mit, bei, von) — mention only if relevant.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>was für ein(e) vs welcher check:</b> one sentence on whether the learner picked the right question word for what they meant.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You confidently tell type from identity — was für ein(e) for a kind, welcher for one specific item. Next: verbs that take two objects at once — geben, schenken, zeigen.',
    mid: 'Good. Re-read the was für ein(e) vs. welcher card once, then continue.',
    low: 'Worth another pass — remember: was für ein(e) asks "what kind", welcher asks "which one". Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Was', role: 'r-frage' }, { w: 'für', role: 'r-frage' },
    { w: 'einen', role: 'r-frage' }, { w: 'Film', role: 'r-akkusativ' },
    { w: 'hast', role: 'r-verb' }, { w: 'du', role: 'r-subject' },
    { w: 'gesehen', role: 'r-verb' }, { w: '?', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the type-vs-identity idea behind was für ein(e).' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'An afternoon at the Bücherei full of was für ein(e) questions.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: die Bücherei, der Kursleiter, die Beratung, erforderlich, pensioniert.' },
    { id: 'grammar',    label: 'was für ein(e)', tag: 'core',
      objective: 'Master the gender/case table, the Dativ review and welcher vs. was für ein(e).' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a library scene full of was für ein(e) and one welcher.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each was für ein(e) question in a library counter conversation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Ask and answer what kind of job, home, food and course.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write questions and a short description using was für ein(e).' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill gender/case agreement and was für ein(e) vs. welcher.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 170 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The chapter\'s adult-learner, library and driving-school words — die Bücherei, der Kursleiter, die Beratung, der Gebärdendolmetscher — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Gender/case agreement drills for was für ein(e)/einen, was für ein(e) vs. welcher sorting, and a short description task.',
      pdfUrl: '/pdfs/homework.pdf', size: '7 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full was für ein(e) gender/case table, the Dativ review, welcher comparison, common mistakes, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '6 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Was für ein Buch ist das?', text: 'Ask what kind or type of something is' },
    { de: 'Was für eine Tasche suchst du?', text: 'Match the gender/case ending to the noun' },
    { de: 'Welches Buch meinst du?', text: 'Tell "what kind" apart from "which specific one"' },
    { de: 'Was für Leute sind das?', text: 'Drop the article for plural nouns' },
    { de: 'Mit was für einem Auto?', text: 'Recognize the brief Dativ form' }
  ],

  // ---------- Vocabulary (~42 items) ----------
  vocab: [
    { de: 'was für ein', pos: 'phrase', en: 'what kind of a', hi: 'किस तरह का', ex: 'Was für ein Buch ist das?', exEn: 'What kind of book is that?' },
    { de: 'abonnieren', pos: 'verb', en: 'to subscribe to sth.', hi: 'सदस्यता लेना', ex: 'Ich möchte die Zeitschrift der Bücherei abonnieren.', exEn: 'I would like to subscribe to the library\'s magazine.', conj: { praesens: 'abonniert', praeteritum: 'abonnierte', perfekt: 'hat abonniert' } },
    { de: 'anhören (sich etw.)', pos: 'verb', en: 'to listen to', hi: 'सुनना', ex: 'Wir hören uns das neue Instrument an.', exEn: 'We are listening to the new instrument.', conj: { praesens: 'hört an', praeteritum: 'hörte an', perfekt: 'hat angehört' } },
    { de: 'Arbeitgeber', art: 'der', gender: 'm', plural: 'Arbeitgeber', pos: 'noun', en: 'employer', hi: 'नियोक्ता', ex: 'Mein Arbeitgeber bietet einen Sprachkurs an.', exEn: 'My employer offers a language course.' },
    { de: 'Autorin', art: 'die', gender: 'f', plural: 'Autorinnen', pos: 'noun', en: 'author (f.)', hi: 'लेखिका', ex: 'Was für eine Autorin liest du gern?', exEn: 'What kind of author do you like to read?' },
    { de: 'beachten', pos: 'verb', en: 'to consider, to note', hi: 'ध्यान देना', ex: 'Bitte beachten Sie die neue Öffnungszeit.', exEn: 'Please note the new opening hours.', conj: { praesens: 'beachtet', praeteritum: 'beachtete', perfekt: 'hat beachtet' } },
    { de: 'Bücherei', art: 'die', gender: 'f', plural: 'Büchereien', pos: 'noun', en: 'library', hi: 'पुस्तकालय', ex: 'Was für eine Bücherei ist das — nur für Kinder?', exEn: 'What kind of library is that — only for children?' },
    { de: 'Gehörlose', art: 'der/die', gender: 'm/f', plural: 'Gehörlose', pos: 'noun', en: 'deaf person, hearing-impaired person', hi: 'बधिर व्यक्ति', ex: 'Der Kurs ist auch für Gehörlose geeignet.', exEn: 'The course is also suitable for deaf people.' },
    { de: 'Lernende', art: 'der/die', gender: 'm/f', plural: 'Lernende', pos: 'noun', en: 'learner', hi: 'सीखने वाला', ex: 'Was für eine Lernende bist du — schnell oder gründlich?', exEn: 'What kind of learner are you — fast or thorough?' },
    { de: 'Disziplin', art: 'die', gender: 'f', plural: 'Disziplinen', pos: 'noun', en: 'discipline', hi: 'अनुशासन', ex: 'Gute Disziplin hilft beim Sprachenlernen.', exEn: 'Good discipline helps with learning languages.' },
    { de: 'Energie', art: 'die', gender: 'f', plural: 'Energien', pos: 'noun', en: 'energy', hi: 'ऊर्जा', ex: 'Am Morgen habe ich mehr Energie zum Lernen.', exEn: 'In the morning I have more energy for studying.' },
    { de: 'erforderlich', pos: 'adjective', en: 'required', hi: 'आवश्यक', ex: 'Für diesen Kurs ist keine Vorkenntnis erforderlich.', exEn: 'No prior knowledge is required for this course.' },
    { de: 'faszinieren', pos: 'verb', en: 'to fascinate', hi: 'मोहित करना', ex: 'Die deutsche Grammatik fasziniert mich.', exEn: 'German grammar fascinates me.', conj: { praesens: 'fasziniert', praeteritum: 'faszinierte', perfekt: 'hat fasziniert' } },
    { de: 'Hauptteil', art: 'der', gender: 'm', plural: 'Hauptteile', pos: 'noun', en: 'main part', hi: 'मुख्य भाग', ex: 'Der Hauptteil des Kurses ist Grammatik.', exEn: 'The main part of the course is grammar.' },
    { de: 'Herz', art: 'das', gender: 'n', plural: 'Herzen', pos: 'noun', en: 'heart', hi: 'हृदय', ex: 'Sprachenlernen mit dem Herzen macht Spaß.', exEn: 'Learning a language with your heart is fun.' },
    { de: 'Kommunikation', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'communication', hi: 'संचार', ex: 'Gute Kommunikation ist für alle wichtig.', exEn: 'Good communication is important for everyone.' },
    { de: 'Kursleiter', art: 'der', gender: 'm', plural: 'Kursleiter', pos: 'noun', en: 'course director', hi: 'कोर्स निर्देशक', ex: 'Was für einen Kursleiter braucht ein Seniorenkurs?', exEn: 'What kind of course director does a senior citizens\' course need?' },
    { de: 'pensioniert', pos: 'adjective', en: 'retired', hi: 'सेवानिवृत्त', ex: 'Der neue Kursleiter ist ein pensionierter Lehrer.', exEn: 'The new course director is a retired teacher.' },
    { de: 'Portion', art: 'die', gender: 'f', plural: 'Portionen', pos: 'noun', en: 'portion', hi: 'हिस्सा', ex: 'Jeden Tag eine kleine Portion Vokabeln.', exEn: 'A small portion of vocabulary every day.' },
    { de: 'putzen', pos: 'verb', en: 'to clean', hi: 'साफ़ करना', ex: 'Nach dem Unterricht putzen wir das Klassenzimmer.', exEn: 'After class we clean the classroom.', conj: { praesens: 'putzt', praeteritum: 'putzte', perfekt: 'hat geputzt' } },
    { de: 'Ratschlag', art: 'der', gender: 'm', plural: 'Ratschläge', pos: 'noun', en: 'piece of advice', hi: 'सलाह', ex: 'Ein guter Ratschlag: kein Multitasking.', exEn: 'Good advice: no multitasking.' },
    { de: 'Senior', art: 'der', gender: 'm', plural: 'Senioren', pos: 'noun', en: 'senior citizen', hi: 'वरिष्ठ नागरिक', ex: 'Der Kurs ist auch für Senioren geeignet.', exEn: 'The course is also suitable for senior citizens.' },
    { de: 'sowieso', pos: 'adverb', en: 'anyway', hi: 'वैसे भी', ex: 'Er startet nächste Woche sowieso.', exEn: 'He starts next week anyway.' },
    { de: 'starten', pos: 'verb', en: 'to start', hi: 'शुरू करना', ex: 'Der neue Kurs startet im März.', exEn: 'The new course starts in March.', conj: { praesens: 'startet', praeteritum: 'startete', perfekt: 'hat gestartet' } },
    { de: 'Stoff', art: 'der', gender: 'm', plural: 'Stoffe', pos: 'noun', en: 'material, subject matter', hi: 'सामग्री', ex: 'Was für einen Stoff behandelt der Kurs?', exEn: 'What kind of material does the course cover?' },
    { de: 'tief', pos: 'adjective', en: 'deep', hi: 'गहरा', ex: 'Ich möchte tiefer in die Grammatik einsteigen.', exEn: 'I would like to go deeper into the grammar.' },
    { de: 'verplanen', pos: 'verb', en: 'to overschedule', hi: 'बहुत ज़्यादा योजना बनाना', ex: 'Verplane deine Woche nicht zu sehr.', exEn: 'Don\'t overschedule your week.', conj: { praesens: 'verplant', praeteritum: 'verplante', perfekt: 'hat verplant' } },
    { de: 'verschieben', pos: 'verb', en: 'to postpone', hi: 'टालना', ex: 'Ich habe meine Fahrstunde verschoben.', exEn: 'I postponed my driving lesson.', conj: { praesens: 'verschiebt', praeteritum: 'verschob', perfekt: 'hat verschoben' } },
    { de: 'Vollzeit', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'full-time', hi: 'पूर्णकालिक', ex: 'Er unterrichtet nur Vollzeit.', exEn: 'He only teaches full-time.' },
    { de: 'Zuhörer', art: 'der', gender: 'm', plural: 'Zuhörer', pos: 'noun', en: 'member of the audience, listener', hi: 'श्रोता', ex: 'Was für Zuhörer sitzen im Kurs — Anfänger oder Fortgeschrittene?', exEn: 'What kind of listeners are in the course — beginners or advanced?' },
    { de: 'zurechtkommen', pos: 'verb', en: 'to manage, to cope', hi: 'सामंजस्य बनाना', ex: 'Bist du mit dem neuen Stoff zurechtgekommen?', exEn: 'Did you manage with the new material?', conj: { praesens: 'kommt zurecht', praeteritum: 'kam zurecht', perfekt: 'ist zurechtgekommen' } },
    { de: 'Beratung', art: 'die', gender: 'f', plural: 'Beratungen', pos: 'noun', en: 'consultation', hi: 'परामर्श', ex: 'Was für eine Beratung bietet er an — kostenlos oder nicht?', exEn: 'What kind of consultation does he offer — free or not?' },
    { de: 'Fahrstunde', art: 'die', gender: 'f', plural: 'Fahrstunden', pos: 'noun', en: 'driving lesson', hi: 'ड्राइविंग सीखने का घंटा', ex: 'Was für einen Fahrlehrer hast du für die Fahrstunde?', exEn: 'What kind of driving instructor do you have for the driving lesson?' },
    { de: 'Instrument', art: 'das', gender: 'n', plural: 'Instrumente', pos: 'noun', en: 'instrument', hi: 'वाद्य यंत्र', ex: 'Was für ein Instrument spielst du?', exEn: 'What kind of instrument do you play?' },
    { de: 'Kinderfilm', art: 'der', gender: 'm', plural: 'Kinderfilme', pos: 'noun', en: 'children\'s film', hi: 'बच्चों की फ़िल्म', ex: 'Was für einen Kinderfilm zeigt die Bücherei heute?', exEn: 'What kind of children\'s film is the library showing today?' },
    { de: 'Lernhelfer', art: 'der', gender: 'm', plural: 'Lernhelfer', pos: 'noun', en: 'tutor', hi: 'ट्यूटर', ex: 'Ich habe einen geduldigen Lernhelfer.', exEn: 'I have a patient tutor.' },
    { de: 'Magenschmerzen', art: 'die', gender: 'pl', plural: 'Magenschmerzen', pos: 'noun', en: 'stomach ache', hi: 'पेट दर्द', ex: 'Ich hatte Magenschmerzen und musste die Fahrstunde verschieben.', exEn: 'I had a stomach ache and had to postpone the driving lesson.' },
    { de: 'Mitteilung', art: 'die', gender: 'f', plural: 'Mitteilungen', pos: 'noun', en: 'notification', hi: 'सूचना', ex: 'Eine wichtige Mitteilung wartet auf mich im Sekretariat.', exEn: 'An important notification is waiting for me at the secretary\'s office.' },
    { de: 'Sekretariat', art: 'das', gender: 'n', plural: 'Sekretariate', pos: 'noun', en: 'secretary\'s office', hi: 'सचिवालय', ex: 'Ich muss ins Sekretariat gehen.', exEn: 'I have to go to the secretary\'s office.' },
    { de: 'Sprachenlernen', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'learning languages', hi: 'भाषा सीखना', ex: 'Ich möchte ein Buch über das Sprachenlernen lesen.', exEn: 'I would like to read a book about learning languages.' },
    { de: 'zusammenbringen', pos: 'verb', en: 'to bring together', hi: 'एक साथ लाना', ex: 'Der Kurs bringt Anfänger und Fortgeschrittene zusammen.', exEn: 'The course brings beginners and advanced learners together.', conj: { praesens: 'bringt zusammen', praeteritum: 'brachte zusammen', perfekt: 'hat zusammengebracht' } },
    { de: 'Gebärdendolmetscher', art: 'der', gender: 'm', plural: 'Gebärdendolmetscher', pos: 'noun', en: 'sign language interpreter', hi: 'सांकेतिक भाषा दुभाषिया', ex: 'Er unterrichtet Gehörlose mit einem Gebärdendolmetscher.', exEn: 'He teaches deaf people with a sign language interpreter.' }
  ],

  // ---------- was für ein(e) (rule cards) ----------
  grammar: [
    {
      title: 'Was für ein(e)/einen — asking about type or kind',
      goldenRule: '<b>was f\u00fcr</b> + <b>ein/eine/einen</b> \u2014 the <b>ein</b> part carries the gender and case, exactly as it always does.',
      memoryTrick: 'Naya kuch nahi \u2014 <b>was f\u00fcr</b> ke baad wahi purana <b>ein/eine/einen</b> lagta hai. Aur plural mein article gayab: <b>was f\u00fcr B\u00fccher</b>.',
      body: [
        'Was für ein(e)/einen agrees with the gender and case of the noun it introduces, just like ein/eine/einen normally do. It asks for a description, not a name.'
      ],
      table: {
        head: ['Gender/Number', 'Nominativ', 'Akkusativ'],
        rows: [
          ['masculine', '<span class="de r-frage">was für ein</span> Film', '<span class="de r-frage">was für einen</span> Film'],
          ['feminine', '<span class="de r-frage">was für eine</span> Tasche', '<span class="de r-frage">was für eine</span> Tasche'],
          ['neuter', '<span class="de r-frage">was für ein</span> Auto', '<span class="de r-frage">was für ein</span> Auto'],
          ['plural', '<span class="de r-frage">was für</span> Bücher', '<span class="de r-frage">was für</span> Bücher']
        ]
      },
      note: 'Plural drops the article entirely: <span class="de">was für Leute, was für Häuser</span>.',
      hinglish: 'was für ein(e)/einen bilkul ein/eine/einen jaisa hi gender aur case follow karta hai. Yeh kism/type poochta hai, naam nahi. Plural mein article hata do: was für Bücher.'
    },
    {
      title: 'A brief look at the Dativ',
      body: [
        'After a Dativ preposition, was für ein(e) takes Dativ endings too. At A2, recognize the pattern rather than drilling every form.'
      ],
      table: {
        head: ['Preposition', 'Example'],
        rows: [
          ['mit (Dat.)', '<span class="de">Mit was für einem Auto fährst du?</span>'],
          ['bei (Dat.)', '<span class="de">Bei was für einer Firma arbeitest du?</span>']
        ]
      },
      note: 'These Dativ forms (was für einem/einer) are for recognition — no need to produce every case ending yet.',
      hinglish: 'Dativ preposition ke baad was für ein(e) bhi Dativ ending leta hai — abhi sirf pehchano, har form drill karne ki zaroorat nahi.'
    },
    {
      title: 'was für ein(e) vs. welcher',
      goldenRule: '<b>was f\u00fcr ein</b> asks <i>what kind?</i> \u00b7 <b>welcher</b> asks <i>which one?</i>',
      formula: [
        'Was f\u00fcr ein Buch?  \u2192  Ein Roman.        (kism)',
        'Welches Buch?        \u2192  Das rote dort.    (kaun sa)'
      ],
      memoryTrick: 'Jawaab dekh kar pehchano: description aa raha hai (ek novel, ek krimi) \u2192 <b>was f\u00fcr ein</b>. Ungli uthake dikhana hai (woh laal wala) \u2192 <b>welcher</b>.',
      recap: [
        '<b>was f\u00fcr ein</b> \u2192 a description of the type.',
        '<b>welcher</b> \u2192 one specific item from a known set.',
        'Plural: <b>was f\u00fcr</b> + bare noun.'
      ],
      body: [
        'was für ein(e) asks about type or category — the answer is a description. welcher asks the listener to pick one specific item from a known set — the answer is often just an article + noun or a pointing word.'
      ],
      table: {
        head: ['Question', 'Asks about', 'Typical answer'],
        rows: [
          ['<span class="de">Was für ein Buch ist das?</span>', 'kind / category', '<span class="de">Ein Roman. / Ein Wörterbuch.</span>'],
          ['<span class="de r-frage">Welches</span> Buch meinst du?', 'one specific item', '<span class="de">Das rote Buch dort.</span>']
        ]
      },
      note: '<span class="de">Was für ein Buch liest du? — Einen Krimi.</span> vs. <span class="de">Welches Buch liest du? — Das von Anna.</span>',
      hinglish: 'was für ein(e) = kism/type poochna, jawaab description hota hai. welcher = ek particular, jaana-pehchana item choose karne ke liye, jawaab usually sirf noun/pointing word.'
    },
    {
      title: 'Common learner mistakes',
      body: [
        '<span class="de strike">Was Buch?</span> → <span class="de">Was für ein Buch?</span> — never drop "für ein(e)".',
        '<span class="de strike">Was für Film?</span> → <span class="de">Was für ein Film?</span> — singular nouns still need ein/eine/einen; only plural drops it.',
        '<span class="de strike">Welche Art Buch?</span> → <span class="de">Was für ein Buch?</span> — "welche Art" is a wordier B1-style paraphrase; A2 uses "was für ein(e)".',
        '<span class="de strike">Was ist für ein Auto?</span> → <span class="de">Was für ein Auto ist das?</span> — keep "was für ein(e)" together right before the noun.'
      ],
      hinglish: 'Char galtiyan common hain. <b>für ein(e)</b> ko girana nahi hai. Singular noun ke saath <b>ein/eine/einen</b> zaroor rakho. \u201cwelche Art\u201d ki jagah A2 par <b>was für ein(e)</b> use karo. Aur <b>was für ein(e)</b> ko todna nahi hai \u2014 yeh saath-saath noun se pehle aata hai.'
    },
    {
      title: 'Quick decision guide',
      body: [ 'One question decides the opener every time.' ],
      table: {
        head: ['Question', 'Use'],
        rows: [
          ['Asking about the type or kind?', '<span class="de r-frage">was für ein(e)/einen</span>'],
          ['Asking the listener to choose one specific, known item?', '<span class="de r-frage">welcher/welche/welches</span>'],
          ['Noun is plural?', 'drop ein(e): <span class="de">was für Bücher</span>'],
          ['After a Dativ preposition (mit, bei, von)?', '<span class="de">was für einem/einer</span> (brief review)']
        ]
      },
      hinglish: 'Faisla aise karo: kism ya type poochni hai to <b>was für ein(e)</b>, aur koi ek particular jaana-pehchana item poochna hai to <b>welcher</b>. Plural noun ho to article hata do, aur Dativ preposition ke baad <b>was für einem/einer</b> aata hai.'
    }
  ],

  // ---------- Reading passage (In der Bücherei, clickable) ----------
  reading: {
    title: 'In der Bücherei',
    titleEn: 'At the library',
    tokens: [
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अन्ना', pron: 'AH-na', type: 'Name' },
      { w: 'arbeitet', role: 'r-verb', en: 'works', hi: 'काम करती है', pron: 'AR-by-tet', type: 'Verb · arbeiten' },
      { w: 'diese', role: 'r-time', en: 'this', hi: 'यह', pron: 'DEE-zuh', type: 'Determiner · time' },
      { w: 'Woche', role: 'r-time', en: 'week', hi: 'सप्ताह', pron: 'VO-khuh', type: 'Noun · fem.' },
      { w: 'in', role: 'r-wechsel', en: 'in', hi: 'में', pron: 'in', type: 'Wechselpräposition' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'यह', pron: 'dair', type: 'Article · dative' },
      { w: 'Bücherei', role: 'r-dativ', en: 'library', hi: 'पुस्तकालय', pron: 'BÜ-kher-eye', type: 'Noun · fem. · dat.', why: 'die Bücherei (this chapter).', ex: 'in der Bücherei', exEn: 'at the library' },
      { w: '.', plain: true },
      { w: 'Viele', role: 'r-subject', en: 'many', hi: 'बहुत', pron: 'FEE-luh', type: 'Determiner' },
      { w: 'Leute', role: 'r-subject', en: 'people', hi: 'लोग', pron: 'LOY-tuh', type: 'Noun · plural' },
      { w: 'kommen', role: 'r-verb', en: 'come', hi: 'आते हैं', pron: 'KO-men', type: 'Verb · kommen' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Konjunktion' },
      { w: 'fragen', role: 'r-verb', en: 'ask', hi: 'पूछते हैं', pron: 'FRAH-gen', type: 'Verb · fragen' },
      { w: ':', plain: true },
      { w: '„Was', role: 'r-frage', en: '"What', hi: '"क्या', pron: 'vas', type: 'Interrogative' },
      { w: 'für', role: 'r-frage', en: 'for', hi: 'के लिए', pron: 'fuer', type: 'Preposition · fixed' },
      { w: 'ein', role: 'r-frage', en: 'a (kind of)', hi: 'किस तरह का', pron: 'ayn', type: 'Interrogativartikel' },
      { w: 'Buch', role: 'r-akkusativ', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.' },
      { w: 'empfehlen', role: 'r-verb', en: 'do you recommend', hi: 'सुझाते हैं', pron: 'emp-FAY-len', type: 'Verb · empfehlen' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: '?"', plain: true },
      { w: 'oder', role: 'r-conjunction', en: 'or', hi: 'या', pron: 'OH-der', type: 'Konjunktion' },
      { w: '„Was', role: 'r-frage', en: '"What', hi: '"क्या', pron: 'vas', type: 'Interrogative' },
      { w: 'für', role: 'r-frage', en: 'for', hi: 'के लिए', pron: 'fuer', type: 'Preposition · fixed' },
      { w: 'eine', role: 'r-frage', en: 'a (kind of)', hi: 'किस तरह की', pron: 'AY-nuh', type: 'Interrogativartikel' },
      { w: 'Zeitschrift', role: 'r-akkusativ', en: 'magazine', hi: 'पत्रिका', pron: 'TSYTE-shrift', type: 'Noun · fem.' },
      { w: 'haben', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'über', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'UE-ber', type: 'Preposition · Akk.' },
      { w: 'das', role: 'r-akkusativ', en: 'the', hi: 'यह', pron: 'das', type: 'Article' },
      { w: 'Sprachenlernen', role: 'r-akkusativ', en: 'language learning', hi: 'भाषा सीखना', pron: 'SHPRAH-khen-ler-nen', type: 'Noun · neut.' },
      { w: '?"', plain: true },
      { w: 'Ein', role: 'r-subject', en: 'an', hi: 'एक', pron: 'ine', type: 'Article' },
      { w: 'älterer', role: 'r-adjective', en: 'older', hi: 'बड़ी उम्र का', pron: 'EL-teh-rer', type: 'Adjective · Komparativ' },
      { w: 'Herr', role: 'r-subject', en: 'gentleman', hi: 'सज्जन', pron: 'hair', type: 'Noun · masc.' },
      { w: 'fragt', role: 'r-verb', en: 'asks', hi: 'पूछता है', pron: 'frahkt', type: 'Verb · fragen' },
      { w: ':', plain: true },
      { w: '„Was', role: 'r-frage', en: '"What', hi: '"क्या', pron: 'vas', type: 'Interrogative' },
      { w: 'für', role: 'r-frage', en: 'for', hi: 'के लिए', pron: 'fuer', type: 'Preposition · fixed' },
      { w: 'einen', role: 'r-frage', en: 'a (kind of, acc.)', hi: 'किस तरह का', pron: 'AY-nen', type: 'Interrogativartikel · Akk.' },
      { w: 'Kinderfilm', role: 'r-akkusativ', en: 'children\'s film', hi: 'बच्चों की फ़िल्म', pron: 'KIN-der-film', type: 'Noun · masc.', why: 'der Kinderfilm (this chapter).', ex: 'Was für einen Kinderfilm zeigt die Bücherei?', exEn: 'What kind of children\'s film is the library showing?' },
      { w: 'zeigt', role: 'r-verb', en: 'shows', hi: 'दिखाती है', pron: 'TSYKHT', type: 'Verb · zeigen' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Bücherei', role: 'r-subject', en: 'library', hi: 'पुस्तकालय', pron: 'BÜ-kher-eye', type: 'Noun · fem.' },
      { w: 'am', role: 'r-time', en: 'on', hi: 'को', pron: 'am', type: 'Preposition · contraction' },
      { w: 'Samstag', role: 'r-time', en: 'Saturday', hi: 'शनिवार', pron: 'ZAMS-tahk', type: 'Noun · masc.' },
      { w: '?"', plain: true },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अन्ना', pron: 'AH-na', type: 'Name' },
      { w: 'erklärt', role: 'r-verb', en: 'explains', hi: 'बताती है', pron: 'air-KLAIRT', type: 'Verb · erklären' },
      { w: ':', plain: true },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'AY-nen', type: 'Article · acc.' },
      { w: 'lustigen', role: 'r-adjective', en: 'funny', hi: 'मज़ेदार', pron: 'LOOS-ti-gen', type: 'Adjective' },
      { w: 'Film', role: 'r-akkusativ', en: 'film', hi: 'फ़िल्म', pron: 'film', type: 'Noun · masc.' },
      { w: 'über', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'UE-ber', type: 'Preposition · Akk.' },
      { w: 'Tiere', role: 'r-akkusativ', en: 'animals', hi: 'जानवर', pron: 'TEE-ruh', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'geeignet', role: 'r-adjective', en: 'suitable', hi: 'उपयुक्त', pron: 'guh-EYE-guh-net', type: 'Adjective' },
      { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'fuer', type: 'Preposition · Akk.' },
      { w: 'Kinder', role: 'r-akkusativ', en: 'children', hi: 'बच्चे', pron: 'KIN-der', type: 'Noun · plural' },
      { w: 'ab', role: 'r-preposition', en: 'from', hi: 'से', pron: 'ap', type: 'Preposition · Akk.' },
      { w: 'fünf', role: 'r-akkusativ', en: 'five', hi: 'पाँच', pron: 'fünf', type: 'Zahl' },
      { w: 'Jahren', role: 'r-akkusativ', en: 'years', hi: 'साल', pron: 'YAH-ren', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Eine', role: 'r-subject', en: 'a (fem.)', hi: 'एक', pron: 'AY-nuh', type: 'Article' },
      { w: 'Frau', role: 'r-subject', en: 'woman', hi: 'महिला', pron: 'frow', type: 'Noun · fem.' },
      { w: 'fragt', role: 'r-verb', en: 'asks', hi: 'पूछती है', pron: 'frahkt', type: 'Verb · fragen' },
      { w: 'nach', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'nahkh', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'r-dativ', en: 'a (masc. dat.)', hi: 'एक', pron: 'AY-nem', type: 'Article · dative' },
      { w: 'Kurs', role: 'r-dativ', en: 'course', hi: 'कोर्स', pron: 'koors', type: 'Noun · masc.' },
      { w: ':', plain: true },
      { w: '„Was', role: 'r-frage', en: '"What', hi: '"क्या', pron: 'vas', type: 'Interrogative' },
      { w: 'für', role: 'r-frage', en: 'for', hi: 'के लिए', pron: 'fuer', type: 'Preposition · fixed' },
      { w: 'einen', role: 'r-frage', en: 'a (kind of, acc.)', hi: 'किस तरह का', pron: 'AY-nen', type: 'Interrogativartikel · Akk.' },
      { w: 'Kursleiter', role: 'r-akkusativ', en: 'course director', hi: 'कोर्स निर्देशक', pron: 'KOORS-ly-ter', type: 'Noun · masc.' },
      { w: 'hat', role: 'r-verb', en: 'does have', hi: 'है', pron: 'hat', type: 'Verb · haben' },
      { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'neue', role: 'r-adjective', en: 'new', hi: 'नया', pron: 'NOY-uh', type: 'Adjective' },
      { w: 'A2-Kurs', role: 'r-subject', en: 'A2 course', hi: 'A2 कोर्स', pron: 'AH-tsvy-koors', type: 'Noun · masc.' },
      { w: '?"', plain: true },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अन्ना', pron: 'AH-na', type: 'Name' },
      { w: 'antwortet', role: 'r-verb', en: 'answers', hi: 'जवाब देती है', pron: 'ANT-vor-tet', type: 'Verb · antworten' },
      { w: ':', plain: true },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'AY-nen', type: 'Article · acc.' },
      { w: 'pensionierten', role: 'r-adjective', en: 'retired', hi: 'सेवानिवृत्त', pron: 'pahn-zee-oh-NEER-ten', type: 'Adjective', why: 'pensioniert (this chapter).', ex: 'ein pensionierter Lehrer', exEn: 'a retired teacher' },
      { w: 'Lehrer', role: 'r-akkusativ', en: 'teacher', hi: 'शिक्षक', pron: 'LAY-rer', type: 'Noun · masc.' },
      { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'ows', type: 'Preposition · Dat.' },
      { w: 'Hamburg', role: 'r-dativ', en: 'Hamburg', hi: 'हैम्बर्ग', pron: 'HAHM-boork', type: 'Ort' },
      { w: ',', plain: true },
      { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
      { w: 'geduldig', role: 'r-adjective', en: 'patient', hi: 'सहनशील', pron: 'guh-DUL-dikh', type: 'Adjective' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Konjunktion' },
      { w: 'erfahren', role: 'r-adjective', en: 'experienced', hi: 'अनुभवी', pron: 'air-FAH-ren', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-time', en: 'in the', hi: 'में', pron: 'am', type: 'Preposition · contraction' },
      { w: 'Nachmittag', role: 'r-time', en: 'afternoon', hi: 'दोपहर बाद', pron: 'NAHKH-mi-tahk', type: 'Noun · masc.' },
      { w: 'kommt', role: 'r-verb', en: 'comes', hi: 'आता है', pron: 'komt', type: 'Verb · kommen' },
      { w: 'ein', role: 'r-subject', en: 'a', hi: 'एक', pron: 'ine', type: 'Article' },
      { w: 'Mann', role: 'r-subject', en: 'man', hi: 'आदमी', pron: 'man', type: 'Noun · masc.' },
      { w: 'mit', role: 'r-preposition', en: 'with', hi: 'साथ', pron: 'mit', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', pron: 'AY-ner', type: 'Article · dative' },
      { w: 'Frage', role: 'r-dativ', en: 'question', hi: 'सवाल', pron: 'FRAH-guh', type: 'Noun · fem.' },
      { w: 'über', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'UE-ber', type: 'Preposition · Akk.' },
      { w: 'Beratung', role: 'r-akkusativ', en: 'consultation', hi: 'परामर्श', pron: 'buh-RAH-toong', type: 'Noun · fem.', why: 'die Beratung (this chapter).', ex: 'eine kostenlose Beratung', exEn: 'a free consultation' },
      { w: ':', plain: true },
      { w: '„Was', role: 'r-frage', en: '"What', hi: '"क्या', pron: 'vas', type: 'Interrogative' },
      { w: 'für', role: 'r-frage', en: 'for', hi: 'के लिए', pron: 'fuer', type: 'Preposition · fixed' },
      { w: 'eine', role: 'r-frage', en: 'a (kind of, fem.)', hi: 'किस तरह की', pron: 'AY-nuh', type: 'Interrogativartikel' },
      { w: 'Beratung', role: 'r-akkusativ', en: 'consultation', hi: 'परामर्श', pron: 'buh-RAH-toong', type: 'Noun · fem.' },
      { w: 'bieten', role: 'r-verb', en: 'do you offer', hi: 'देते हैं', pron: 'BEE-ten', type: 'Verb · anbieten' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'fuer', type: 'Preposition · Akk.' },
      { w: 'Senioren', role: 'r-akkusativ', en: 'senior citizens', hi: 'वरिष्ठ नागरिक', pron: 'zeh-nee-OH-ren', type: 'Noun · plural' },
      { w: 'an', role: 'r-verb', en: '(offer)', hi: '(part.)', pron: 'an', type: 'Trennbares Verb · Partikel' },
      { w: '?"', plain: true },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अन्ना', pron: 'AH-na', type: 'Name' },
      { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहती है', pron: 'zahkt', type: 'Verb · sagen' },
      { w: ':', plain: true },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'AY-nuh', type: 'Article · acc.' },
      { w: 'kostenlose', role: 'r-adjective', en: 'free', hi: 'मुफ़्त', pron: 'KOS-ten-loh-zuh', type: 'Adjective' },
      { w: 'Beratung', role: 'r-akkusativ', en: 'consultation', hi: 'परामर्श', pron: 'buh-RAH-toong', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', pron: 'YAY-den', type: 'Determiner · Akk. (time)' },
      { w: 'Mittwoch', role: 'r-akkusativ', en: 'Wednesday', hi: 'बुधवार', pron: 'MIT-vokh', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
      { w: 'mit', role: 'r-preposition', en: 'with', hi: 'साथ', pron: 'mit', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'r-dativ', en: 'a (masc. dat.)', hi: 'एक', pron: 'AY-nem', type: 'Article · dative' },
      { w: 'Gebärdendolmetscher', role: 'r-dativ', en: 'sign language interpreter', hi: 'सांकेतिक भाषा दुभाषिया', pron: 'guh-BAIR-den-dol-met-sher', type: 'Noun · masc.', why: 'der Gebärdendolmetscher (this chapter).', ex: 'mit einem Gebärdendolmetscher', exEn: 'with a sign language interpreter' },
      { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'fuer', type: 'Preposition · Akk.' },
      { w: 'Gehörlose', role: 'r-akkusativ', en: 'deaf people', hi: 'बधिर लोग', pron: 'guh-HOER-loh-zuh', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-time', en: 'at the', hi: 'में', pron: 'am', type: 'Preposition · contraction' },
      { w: 'Ende', role: 'r-time', en: 'end', hi: 'अंत', pron: 'EN-duh', type: 'Noun · neut.' },
      { w: 'des', role: 'r-time', en: 'of the', hi: 'का', pron: 'des', type: 'Article · Gen.' },
      { w: 'Tages', role: 'r-time', en: 'day', hi: 'दिन', pron: 'TAH-ges', type: 'Noun · masc.' },
      { w: 'fragt', role: 'r-verb', en: 'asks', hi: 'पूछता है', pron: 'frahkt', type: 'Verb · fragen' },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'ROH-han', type: 'Name' },
      { w: ':', plain: true },
      { w: '„Welches', role: 'r-frage', en: '"Which', hi: '"कौन सा', pron: 'VEL-khes', type: 'Interrogativartikel', why: 'welches asks about one specific, known book (this chapter).', ex: 'Welches Buch hast du empfohlen?', exEn: 'Which book did you recommend?' },
      { w: 'Buch', role: 'r-akkusativ', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.' },
      { w: 'hast', role: 'r-verb', en: 'did you', hi: 'है', pron: 'hast', type: 'Verb · haben' },
      { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
      { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb' },
      { w: 'am', role: 'r-adverb', en: 'the', hi: 'सबसे', pron: 'am', type: 'Preposition · superlative' },
      { w: 'meisten', role: 'r-adverb', en: 'most', hi: 'सबसे ज़्यादा', pron: 'MY-sten', type: 'Superlativ' },
      { w: 'empfohlen', role: 'r-verb', en: 'recommended', hi: 'सुझाया', pron: 'emp-FOH-len', type: 'Partizip II · empfehlen' },
      { w: '?"', plain: true },
      { w: '—', plain: true },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
      { w: '„was', role: 'r-frage', en: '"what', hi: '"क्या', pron: 'vas', type: 'Interrogative' },
      { w: 'für', role: 'r-frage', en: 'for', hi: 'के लिए', pron: 'fuer', type: 'Preposition · fixed' },
      { w: 'ein', role: 'r-frage', en: 'a', hi: 'किस तरह का', pron: 'ayn', type: 'Interrogativartikel' },
      { w: 'Buch', role: 'r-akkusativ', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.' },
      { w: '"', plain: true },
      { w: ',', plain: true },
      { w: 'sondern', role: 'r-conjunction', en: 'but rather', hi: 'बल्कि', pron: 'ZON-dern', type: 'Konjunktion' },
      { w: '„welches', role: 'r-frage', en: '"which', hi: '"कौन सा', pron: 'VEL-khes', type: 'Interrogativartikel' },
      { w: 'Buch', role: 'r-akkusativ', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.' },
      { w: '"', plain: true },
      { w: '—', plain: true },
      { w: 'denn', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'den', type: 'Konjunktion' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'möchte', role: 'r-modalverb', en: 'wants to', hi: 'चाहता है', pron: 'MOEKH-tuh', type: 'Modalverb' },
      { w: 'genau', role: 'r-adverb', en: 'exactly', hi: 'ठीक', pron: 'guh-NOW', type: 'Adverb' },
      { w: 'wissen', role: 'r-verb', en: 'know', hi: 'जानना', pron: 'VI-sen', type: 'Verb · wissen' },
      { w: ',', plain: true },
      { w: 'welches', role: 'r-frage', en: 'which', hi: 'कौन सा', pron: 'VEL-khes', type: 'Interrogativartikel' },
      { w: 'eine', role: 'r-akkusativ', en: 'one', hi: 'एक', pron: 'AY-nuh', type: 'Determiner' },
      { w: 'Buch', role: 'r-akkusativ', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.' },
      { w: 'gemeint', role: 'r-verb', en: 'is meant', hi: 'मतलब है', pron: 'guh-MYNT', type: 'Partizip II · meinen' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: '.', plain: true }
    ],
    translation: 'Anna is working at the library this week. Many people come and ask: "What kind of book do you recommend?" or "What kind of magazine do you have about learning languages?" An older gentleman asks: "What kind of children\'s film is the library showing on Saturday?" Anna explains: a funny film about animals, suitable for children from age five. A woman asks about a course: "What kind of course director does the new A2 course have?" Anna answers: a retired, very patient and experienced teacher from Hamburg. In the afternoon a man comes with a question about consultation: "What kind of consultation do you offer for senior citizens?" Anna says: a free consultation, every Wednesday, also with a sign language interpreter for deaf people. At the end of the day, Rohan asks: "Which book did you recommend most today?" — not "what kind of book," but "which book" — because he wants to know exactly which one book is meant.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_020_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Solveig, was für ein Buch suchst du für den Kurs?', en: 'Solveig, what kind of book are you looking for the course?' },
      { id: 'A2_020_L002', speaker: 'Solveig', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich suche ein einfaches Grammatikbuch, kein dickes Wörterbuch.', en: 'I\'m looking for a simple grammar book, not a thick dictionary.' },
      { id: 'A2_020_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und was für eine Übung magst du am liebsten?', en: 'And what kind of exercise do you like best?' },
      { id: 'A2_020_L004', speaker: 'Solveig', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Am liebsten kurze Dialoge, wie im Hörverstehen.', en: 'Short dialogues, like in listening comprehension, are my favorite.' }
    ],
    transcript: 'Solveig, was für ein Buch suchst du für den Kurs? Ich suche ein einfaches Grammatikbuch, kein dickes Wörterbuch. Und was für eine Übung magst du am liebsten? Am liebsten kurze Dialoge, wie im Hörverstehen.',
    translation: 'Solveig, what kind of book are you looking for the course? I\'m looking for a simple grammar book, not a thick dictionary. And what kind of exercise do you like best? Short dialogues, like in listening comprehension, are my favorite.',
    tokens: [
      { w: 'Solveig' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'für' },
      { w: 'ein' },
      { w: 'Buch' },
      { w: 'suchst' },
      { w: 'du' },
      { w: 'für' },
      { w: 'den' },
      { w: 'Kurs' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'suche' },
      { w: 'ein' },
      { w: 'einfaches' },
      { w: 'Grammatikbuch' },
      { w: ',', plain: true },
      { w: 'kein' },
      { w: 'dickes' },
      { w: 'Wörterbuch' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'was' },
      { w: 'für' },
      { w: 'eine' },
      { w: 'Übung' },
      { w: 'magst' },
      { w: 'du' },
      { w: 'am' },
      { w: 'liebsten' },
      { w: '?', plain: true },
      { w: 'Am' },
      { w: 'liebsten' },
      { w: 'kurze' },
      { w: 'Dialoge' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'im' },
      { w: 'Hörverstehen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was für ein Buch sucht Solveig?', qEn: 'What kind of book is Solveig looking for?', options: ['ein dickes Wörterbuch', 'ein einfaches Grammatikbuch', 'eine Zeitung', 'einen Roman'], optionsEn: ['a thick dictionary', 'a simple grammar book', 'a newspaper', 'a novel'], answer: 1,
        explain: '"Ich suche ein einfaches Grammatikbuch."' },
      { q: 'Welche Übungen mag Solveig am liebsten?', qEn: 'What exercises does Solveig like best?', options: ['lange Texte', 'kurze Dialoge', 'Grammatiktabellen', 'Diktate'], optionsEn: ['long texts', 'short dialogues', 'grammar tables', 'dictations'], answer: 1,
        explain: '"Am liebsten kurze Dialoge."' }
    ]
  },

  speaking: [
    { task: "Dein Freund fragt: Was für einen Kurs machst du?", taskEn: "Your friend asks: what kind of course are you doing?", de: "Ich mache einen Kurs für Kommunikation. Der Kursleiter ist super.", en: "I'm doing a communication course. The tutor is great." },
    { task: "Deine Nachbarin fragt: Was für eine Wohnung suchst du?", taskEn: "Your neighbour asks: what kind of flat are you looking for?", de: "Ich suche eine kleine Wohnung in der Nähe der Bücherei.", en: "I'm looking for a small flat near the library." },
    { task: "Frag eine Kollegin nach ihrem Arbeitgeber.", taskEn: "Ask a colleague about her employer.", de: "Was für ein Arbeitgeber ist das? Ist er streng?", en: "What kind of employer is that? Is he strict?" },
    { task: "Im Restaurant fragt der Kellner: Was für eine Portion möchten Sie?", taskEn: "In the restaurant the waiter asks: what size portion would you like?", de: "Ich möchte eine kleine Portion, bitte.", en: "I'd like a small portion, please." },
    { task: "Deine Freundin fragt: Was für einen Ratschlag hat der Kursleiter gegeben?", taskEn: "Your friend asks: what kind of advice did the tutor give?", de: "Er hat einen guten Ratschlag gegeben: mehr Disziplin beim Lernen.", en: "He gave good advice: more discipline when studying." },
    { task: "Dein Partner erzählt begeistert vom Kurs. Frag nach dem Thema.", taskEn: "Your partner talks enthusiastically about the course. Ask about the topic.", de: "Was für ein Thema fasziniert dich am meisten?", en: "What kind of topic fascinates you most?" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write five questions using "was für ein(e)/einen" about different topics (book, car, job, course, food). Then write a short paragraph describing your ideal language course: was für einen Kursleiter, was für einen Stoff, was für eine Gruppe you would like. Try this chapter\'s words: die Bücherei, der Kursleiter, die Beratung, erforderlich, pensioniert.',
    starters: ['Was für ein(e)/einen …?', 'Ich möchte einen Kursleiter, der …', 'Welches/Welcher/Welche … meinst du?'],
    placeholder: 'Was für ein Buch liest du gerade? Ich lese einen Roman über …',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct question: "___ Film läuft heute im Kino?"',
      options: ['Was für einen', 'Was für ein', 'Welche'],
      answer: 1,
      explain: 'Film is masculine and this is Nominativ, so was für ein Film.'
    },
    gap: {
      sentence: ['Was für ', ' Kursleiter braucht der Seniorenkurs?'],
      gaps: [ { answer: 'einen', accepts: ['einen'] } ],
      explain: 'Kursleiter is masculine and the object of braucht (Akkusativ), so was für einen Kursleiter.'
    },
    match: {
      q: 'Match each question to its correct answer type.',
      pairs: [
        { noun: 'Was für ein Buch ist das?', art: 'Ein Roman.' },
        { noun: 'Welches Buch meinst du?', art: 'Das rote Buch dort.' },
        { noun: 'Was für Leute lernen hier?', art: 'Erwachsene Anfänger.' },
        { noun: 'Mit was für einem Auto fährst du?', art: 'Mit einem kleinen Auto.' },
        { noun: 'Was für eine Beratung bietet er an?', art: 'Eine kostenlose Beratung.' }
      ]
    },
    builder: {
      target: 'Build: "What kind of course director does one need?"',
      bank: ['Was', 'für', 'einen', 'Kursleiter', 'braucht', 'man', '?'],
      answer: ['Was', 'für', 'einen', 'Kursleiter', 'braucht', 'man', '?'],
      roles: { 'Was': 'r-frage', 'für': 'r-frage', 'einen': 'r-frage', 'Kursleiter': 'r-akkusativ', 'braucht': 'r-verb', 'man': 'r-subject' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Was für ___ Auto ist das? (neuter)', options: ['ein', 'eine', 'einen'], answer: 0,
      explain: 'Auto is neuter — was für ein Auto.' },
    { q: 'Was für ___ Film hast du gesehen? (masc., Akk.)', options: ['ein', 'eine', 'einen'], answer: 2,
      explain: 'Film is masculine and here it\'s Akkusativ — was für einen Film.' },
    { q: 'Which word asks about one specific, already-known book?', options: ['was für ein', 'welches', 'wie viel'], answer: 1,
      explain: 'welches asks the listener to pick one specific item.' },
    { q: 'Was für ___ Wohnung suchst du? (fem.)', options: ['ein', 'eine', 'einen'], answer: 1,
      explain: 'Wohnung is feminine — was für eine Wohnung.' },
    { q: '"Was für Bücher liest du?" — why is there no article?', options: ['Because it\'s plural', 'Because it\'s wrong', 'Because "für" requires it'], answer: 0,
      explain: 'Plural nouns drop the ein(e) article: was für Bücher.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-frage', html: '<span class="de r-frage">was für ein(e)/einen</span> asks about <b>type or kind</b> — the answer describes, it doesn\'t point.' },
    { c: 'r-frage', html: 'Endings follow normal ein-word agreement: <span class="de">ein</span> (masc./neut. Nom.), <span class="de">eine</span> (fem.), <span class="de">einen</span> (masc. Akk.). Plural drops the article: <span class="de">was für Bücher</span>.' },
    { c: 'r-frage', html: '<span class="de r-frage">welcher/welche/welches</span> asks the listener to pick <b>one specific, already-known item</b> — a different question with a different answer.' }
  ],
  revisionTips: [
    'Asking about type or kind? → was für ein(e)/einen. Asking to choose one specific item? → welcher.',
    'Never split "was für ein(e)" — keep it together right before the noun.',
    'Plural drops the article entirely: was für Bücher, was für Leute.'
  ]
};

window.CHAPTER = CHAPTER;
