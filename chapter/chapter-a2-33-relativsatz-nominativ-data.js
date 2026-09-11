/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 33
   "Relativsätze im Nominativ" — relative clauses where the
   relative pronoun (der/die/das/die-plural) is the SUBJECT of
   the relative clause. Verb goes to the end (Nebensatz).
   No Akkusativ/Dativ/Genitiv relative pronouns, no B1 clauses.
   Vocabulary source: uploaded chapter-33 list (29 items; Kultur &
   Relativsätze theme — der Nachrichtensprecher, die Rockmusik,
   der Stehplatz, der Wanderer, die Sammlerin).
   Recycles A1/A2 vocabulary throughout.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-32-konjunktiv2-wuensche-hoeflichkeit-data.js.

   SOURCE ISSUES corrected (flagged, not silently overridden):
   • "jährlich - vearly" → corrected to yearly (typo in source).
   • "der/die Angehörige" and "der/die Prominente" mislabelled
     "Adverb/Other" in the source sheet — both are nouns
     (relative; celebrity); corrected accordingly.
============================================================ */
const CHAPTER = {
  id: 'a2-33-relativsatz-nominativ',
  phase: 'A2 · Phase 2',
  number: 33,
  title: 'Relativsätze im Nominativ',
  titleEn: 'Relative clauses in the nominative',
  description: 'Das ist der Mann, der hier arbeitet. Das ist die Frau, die Deutsch spricht. This chapter teaches relative clauses where the relative pronoun — der, die, das, or die (plural) — is the subject of the clause, so the verb moves to the end.',
  xp: 210,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 34, title: 'Relativsätze im Akkusativ', titleEn: 'Relative clauses in the accusative' , href: 'chapter-a2-34-relativsatz-akkusativ.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'A radio show about music and culture gives Merit and Timo the perfect excuse to describe people in one flowing sentence: der Mann, der die Nachrichten liest; die Frau, die beim Festival singt; das Kind, das immer tanzt.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear masculine, feminine, neuter, and plural relative clauses side by side'
    ],
    scene: 'Beim Radiohören — Wohnzimmer',
    femaleSpeakers: ['Merit'],
    dialogue: [
      { speaker: 'Merit', tokens: [
        { w: 'Wer', role: 'r-question', en: 'who', hi: 'कौन', pron: 'vair', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'वह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Mann', role: 'r-subject', en: 'man', hi: 'आदमी', pron: 'man', type: 'Noun · masc.' },
        { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
        { w: '?', plain: true }
      ], en: 'Who is the man there?', hi: 'Wahaan wo aadmi kaun hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'वह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Nachrichtensprecher', role: 'r-subject', en: 'news presenter', hi: 'समाचार वाचक', pron: 'NAKH-rikh-ten-shpre-kher', type: 'Noun · masc.', why: 'der Nachrichtensprecher (this chapter).', ex: 'der Nachrichtensprecher, der spricht', exEn: 'the news presenter who speaks' },
        { w: ',', plain: true },
        { w: 'der', role: 'r-subject', en: 'who', hi: 'जो', pron: 'dair', type: 'Relativpronomen · nominative', why: 'der/die/das as relative pronoun refer back to the noun and take the noun’s gender (this chapter).', ex: 'der Mann, der dort steht', exEn: 'the man who stands there' },
        { w: 'jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', pron: 'YAY-den', type: 'Determiner' },
        { w: 'Abend', role: 'r-akkusativ', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun · masc.' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Nachrichten', role: 'r-akkusativ', en: 'news', hi: 'ख़बरें', pron: 'NAKH-rikh-ten', type: 'Noun · plural' },
        { w: 'vorliest', role: 'r-verb', en: 'reads out', hi: 'पढ़ता है', pron: 'FOR-leest', type: 'Verb · vorlesen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'That is the news presenter who reads out the news every evening.', hi: 'Yeh samachaar vaachak hai jo har shaam khabrein padhta hai.' },
      { speaker: 'Merit', tokens: [
        { w: 'Ach', role: 'r-subject', en: 'oh', hi: 'अरे', pron: 'ahkh', type: 'Interjection' },
        { w: 'so', role: 'r-adverb', en: 'I see', hi: 'अच्छा', pron: 'zo', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'वह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Frau', role: 'r-subject', en: 'woman', hi: 'महिला', pron: 'frow', type: 'Noun · fem.' },
        { w: 'neben', role: 'r-preposition', en: 'next to', hi: 'के बगल में', pron: 'NAY-ben', type: 'Preposition · Wechselpräp' },
        { w: 'ihm', role: 'r-dativ', en: 'him', hi: 'उसके', pron: 'eem', type: 'Pronoun · dative' },
        { w: '?', plain: true }
      ], en: 'Oh I see! And the woman next to him?', hi: 'Are achha! Aur uske bagal mein woh mahila?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'वह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Musikerin', role: 'r-subject', en: 'musician (f)', hi: 'संगीतकार', pron: 'mu-ZEE-ke-rin', type: 'Noun · fem.' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-subject', en: 'who', hi: 'जो', pron: 'dee', type: 'Relativpronomen · nominative', why: 'die refers back to a fem. noun (this chapter).', ex: 'die Musikerin, die singt', exEn: 'the musician who sings' },
        { w: 'bei', role: 'r-preposition', en: 'at', hi: 'में', pron: 'by', type: 'Preposition + dative' },
        { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Festival', role: 'r-dativ', en: 'festival (dat.)', hi: 'महोत्सव में', pron: 'fes-ti-VAL', type: 'Noun · neut. dat.' },
        { w: 'singt', role: 'r-verb', en: 'sings', hi: 'गाती है', pron: 'zinkt', type: 'Verb · singen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'That is the musician who sings at the festival.', hi: 'Yeh sangeetkaar hai jo mahotsav mein gaati hai.' },
      { speaker: 'Merit', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'वह', pron: 'das', type: 'Article · neut.' },
        { w: 'Kind', role: 'r-subject', en: 'child', hi: 'बच्चा', pron: 'kint', type: 'Noun · neut.' },
        { w: 'dahinter', role: 'r-place', en: 'behind there', hi: 'उसके पीछे', pron: 'da-HIN-ter', type: 'Adverb · place' },
        { w: '?', plain: true }
      ], en: 'And the child behind there?', hi: 'Aur uske peeche wo bachcha?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'वह', pron: 'das', type: 'Article · neut.' },
        { w: 'Kind', role: 'r-subject', en: 'child', hi: 'बच्चा', pron: 'kint', type: 'Noun · neut.' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'which', hi: 'जो', pron: 'das', type: 'Relativpronomen · nominative', why: 'das refers back to a neut. noun (this chapter).', ex: 'das Kind, das tanzt', exEn: 'the child who dances' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: 'tanzt', role: 'r-verb', en: 'dances', hi: 'नाचता है', pron: 'tantst', type: 'Verb · tanzen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'That is the child who always dances.', hi: 'Yeh bachcha hai jo hamesha naachta hai.' },
      { speaker: 'Merit', tokens: [
        { w: 'Wie', role: 'r-subject', en: 'how', hi: 'कितने', pron: 'vee', type: 'Question word' },
        { w: 'interessant', role: 'r-subject', en: 'interesting', hi: 'दिलचस्प', pron: 'in-te-re-SANT', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mag', role: 'r-modalverb', en: 'like', hi: 'पसंद है', pron: 'mahk', type: 'Modal · mögen (ich)' },
        { w: 'Leute', role: 'r-akkusativ', en: 'people', hi: 'लोग', pron: 'LOY-tuh', type: 'Noun · plural' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-akkusativ', en: 'who', hi: 'जो', pron: 'dee', type: 'Relativpronomen · nominative', why: 'die also serves as the plural nominative relative pronoun (this chapter).', ex: 'Leute, die kreativ sind', exEn: 'people who are creative' },
        { w: 'kreativ', role: 'r-akkusativ', en: 'creative', hi: 'रचनात्मक', pron: 'kre-a-TEEF', type: 'Adjective' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'How interesting! I like people who are creative.', hi: 'Kitna dilchasp! Mujhe woh log pasand hain jo rachnatmak hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Komm', role: 'r-verb', en: 'come', hi: 'आओ', pron: 'kom', type: 'Verb · imperative' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'stelle', role: 'r-verb', en: 'introduce', hi: 'मिलवाता हूँ', pron: 'SHTE-luh', type: 'Verb · vorstellen (ich)', lexicalUnit: 'vorstellen' },
        { w: 'dich', role: 'r-akkusativ', en: 'you', hi: 'तुम्हें', pron: 'dikh', type: 'Pronoun · acc.' },
        { w: 'vor', role: 'r-verb', en: '(prefix of vorstellen)', hi: '', pron: 'for', type: 'Separable prefix · Satzende', lexicalUnit: 'vorstellen' },
        { w: '.', plain: true }
      ], en: 'Me too. Come, I will introduce you.', hi: 'Main bhi. Aao, main tumhe milvaata hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A relative clause (Relativsatz) describes a noun with a whole extra sentence, joined by <span class="de r-modalverb">der</span>, <span class="de r-modalverb">die</span>, <span class="de r-modalverb">das</span>, or plural <span class="de r-modalverb">die</span>. In this chapter, the relative pronoun is always the SUBJECT of its clause — so it matches the gender/number of the noun it describes, and the verb moves to the end. <span class="de">Das ist der Mann, der hier arbeitet.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is RELATIVSÄTZE IM NOMINATIV (A2 level only): relative clauses where the relative pronoun (der/die/das/die-plural) is the SUBJECT of the relative clause, matching the gender/number of the antecedent noun, with the verb at the end of the clause. ' +
    'No Akkusativ, Dativ, or Genitiv relative pronouns, no B1 relative clauses. The learner wrote sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag "der Mann der arbeitet hier" (missing comma) — a Relativsatz always needs a comma before the relative pronoun: "der Mann, der hier arbeitet".\n' +
    '- Flag "Das ist die Frau, die spricht Deutsch." — the verb must go to the END of the relative clause: "die Deutsch spricht", not "die spricht Deutsch".\n' +
    '- Flag "Das ist das Auto, der neu ist." — das Auto is neuter, so the relative pronoun must be das, not der: "das Auto, das neu ist".\n' +
    '- Flag "Das sind Studenten, der Deutsch lernen." — plural nouns take die, not der: "die Studenten, die Deutsch lernen".\n' +
    '- The relative pronoun\'s gender/number always matches the noun it refers to (the antecedent), never the following verb.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Verb-final check:</b> one sentence on whether the learner sent the conjugated verb to the end of each relative clause.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You handle Nominativ relative clauses confidently — pronoun matches the noun, verb goes to the end. Next: extend relative clauses into the Akkusativ.',
    mid: 'Good. Re-read the relative pronoun table (der/die/das/die) once, then continue.',
    low: 'Worth another pass — remember: the relative pronoun matches the noun it describes (not the verb that follows), and the verb always goes to the end of the clause. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Das', role: 'r-subject' }, { w: 'ist', role: 'r-verb' },
    { w: 'der', role: 'r-subject' }, { w: 'Mann', role: 'r-subject' },
    { w: ',', role: 'plain' }, { w: 'der', role: 'r-subject' },
    { w: 'hier', role: 'r-place' }, { w: 'arbeitet', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: der/die/das/die connect two sentences into one.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A radio afternoon full of people and things described with relative clauses.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: der Nachrichtensprecher, die Rockmusik, der Stehplatz, der Wanderer, die Sammlerin.' },
    { id: 'grammar',    label: 'Relativsätze', tag: 'core',
      objective: 'Master Nominativ relative pronouns — der, die, das, die (Plural) — with the verb at the end.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a radio-culture story full of Nominativ relative clauses.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each relative clause describing a person or thing.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe people, places, and things naturally with relative clauses.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write descriptions and introductions using Nominativ relative clauses.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill der/die/das/die and the classic mistakes.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 210 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The chapter\'s culture and media words — der Nachrichtensprecher, die Rockmusik, der Stehplatz, die Sammlerin — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Sentence-combining drills, relative-pronoun sorting by gender, and a description-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Nominativ relative pronoun table, the two-sentences-into-one transformation guide, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '6 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Das ist der Mann, der hier arbeitet.', text: 'Describe a masculine noun with a relative clause' },
    { de: 'Das ist die Frau, die Deutsch spricht.', text: 'Describe a feminine noun with a relative clause' },
    { de: 'Das ist das Kind, das Fußball spielt.', text: 'Describe a neuter noun with a relative clause' },
    { de: 'Das sind die Studenten, die Deutsch lernen.', text: 'Describe a plural noun with a relative clause' },
    { de: 'Ich kenne den Lehrer, der in Berlin wohnt.', text: 'Combine two sentences into one fluent sentence' }
  ],

  // ---------- Vocabulary (29 items) ----------
  vocab: [
    { de: 'abstrakt', pos: 'adjective', en: 'abstract', hi: 'सारगर्भित', ex: 'Das Bild, das abstrakt ist, gefällt mir.', exEn: 'The picture that is abstract pleases me.' },
    { de: 'Ausblick', art: 'der', gender: 'm', plural: 'Ausblicke', pos: 'noun', en: 'view', hi: 'दृश्य', ex: 'Das ist der Ausblick, der jeden begeistert.', exEn: 'That\'s the view that thrills everyone.' },
    { de: 'dahinter', pos: 'adverb', en: 'behind it', hi: 'उसके पीछे', ex: 'Das ist der Grund, der dahinter steht.', exEn: 'That\'s the reason that stands behind it.' },
    { de: 'Angehörige', art: 'der/die', gender: 'm/f', plural: 'Angehörigen', pos: 'noun', en: 'relative', hi: 'रिश्तेदार', ex: 'Das ist der Angehörige, der uns besucht.', exEn: 'That\'s the relative who is visiting us.' },
    { de: 'Prominente', art: 'der/die', gender: 'm/f', plural: 'Prominenten', pos: 'noun', en: 'celebrity', hi: 'मशहूर हस्ती', ex: 'Das ist der Prominente, der im Radio spricht.', exEn: 'That\'s the celebrity who is speaking on the radio.' },
    { de: 'elektrisch', pos: 'adjective', en: 'electric', hi: 'बिजली का', ex: 'Das ist die Gitarre, die elektrisch ist.', exEn: 'That\'s the guitar that is electric.' },
    { de: 'Hit', art: 'der', gender: 'm', plural: 'Hits', pos: 'noun', en: 'hit', hi: 'हिट गाना', ex: 'Das ist der Hit, der jeden Sommer läuft.', exEn: 'That\'s the hit that plays every summer.' },
    { de: 'Hörer', art: 'der', gender: 'm', plural: 'Hörer', pos: 'noun', en: 'listener', hi: 'श्रोता', ex: 'Das ist der Hörer, der jeden Tag anruft.', exEn: 'That\'s the listener who calls in every day.' },
    { de: 'jährlich', pos: 'adjective', en: 'yearly', hi: 'सालाना', ex: 'Das ist das Konzert, das jährlich stattfindet.', exEn: 'That\'s the concert that takes place yearly.' },
    { de: 'Nachrichtensprecher', art: 'der', gender: 'm', plural: 'Nachrichtensprecher', pos: 'noun', en: 'newsreader', hi: 'समाचार वाचक', ex: 'Das ist der Nachrichtensprecher, der jeden Abend berichtet.', exEn: 'That\'s the newsreader who reports every evening.' },
    { de: 'Rechnungsinformation', art: 'die', gender: 'f', plural: 'Rechnungsinformationen', pos: 'noun', en: 'invoice information', hi: 'बिल जानकारी', ex: 'Das ist die Rechnungsinformation, die im Brief steht.', exEn: 'That\'s the invoice information that is in the letter.' },
    { de: 'rockig', pos: 'adjective', en: 'rocking', hi: 'दमदार', ex: 'Das ist die Band, die total rockig klingt.', exEn: 'That\'s the band that sounds totally rocking.' },
    { de: 'Rockmusik', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'rock music', hi: 'रॉक संगीत', ex: 'Das ist die Rockmusik, die im Radio läuft.', exEn: 'That\'s the rock music that\'s playing on the radio.' },
    { de: 'Sammlerin', art: 'die', gender: 'f', plural: 'Sammlerinnen', pos: 'noun', en: 'collector', hi: 'संग्राहक', ex: 'Das ist die Sammlerin, die jährlich einen Stehplatz kauft.', exEn: 'That\'s the collector who buys a standing spot yearly.' },
    { de: 'Stehplatz', art: 'der', gender: 'm', plural: 'Stehplätze', pos: 'noun', en: 'standing room', hi: 'खड़े होने की जगह', ex: 'Das ist der Stehplatz, der am billigsten ist.', exEn: 'That\'s the standing room that is the cheapest.' },
    { de: 'verschlafen', pos: 'verb', en: 'to oversleep', hi: 'सो जाना', ex: 'Das ist der Mann, der oft verschläft.', exEn: 'That\'s the man who often oversleeps.', conj: { praesens: 'verschläft', praeteritum: 'verschlief', perfekt: 'hat verschlafen' } },
    { de: 'Wanderer', art: 'der', gender: 'm', plural: 'Wanderer', pos: 'noun', en: 'wanderer', hi: 'यात्री', ex: 'Das ist der Wanderer, der letztes Jahr im Radio war.', exEn: 'That\'s the wanderer who was on the radio last year.' },
    { de: 'zuzüglich', pos: 'adjective', en: 'in addition', hi: 'अतिरिक्त', ex: 'Das ist der Preis, der zuzüglich Steuer gilt.', exEn: 'That\'s the price that applies in addition to tax.' },
    { de: 'Firmenkunde', art: 'der', gender: 'm', plural: 'Firmenkunden', pos: 'noun', en: 'business client', hi: 'कंपनी ग्राहक', ex: 'Das ist der Firmenkunde, der jährlich bestellt.', exEn: 'That\'s the business client who orders yearly.' },
    { de: 'Kontaktdaten', art: 'die', gender: 'pl', plural: '—', pos: 'noun', en: 'contact details', hi: 'संपर्क जानकारी', ex: 'Das sind die Kontaktdaten, die im Formular stehen.', exEn: 'Those are the contact details that are in the form.' },
    { de: 'Kunstgeschichte', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'art history', hi: 'कला इतिहास', ex: 'Das ist die Kunstgeschichte, die mich fasziniert.', exEn: 'That\'s the art history that fascinates me.' },
    { de: 'Märchenschloss', art: 'das', gender: 'n', plural: 'Märchenschlösser', pos: 'noun', en: 'fairytale castle', hi: 'परी कथा महल', ex: 'Das ist das Märchenschloss, das jeder besucht.', exEn: 'That\'s the fairytale castle that everyone visits.' },
    { de: 'Synchronsprecher', art: 'der', gender: 'm', plural: 'Synchronsprecher', pos: 'noun', en: 'voice actor', hi: 'डबिंग कलाकार', ex: 'Das ist der Synchronsprecher, der im Film spricht.', exEn: 'That\'s the voice actor who speaks in the film.' },
    { de: 'Unterhaltung', art: 'die', gender: 'f', plural: 'Unterhaltungen', pos: 'noun', en: 'entertainment', hi: 'मनोरंजन', ex: 'Das ist die Unterhaltung, die alle mögen.', exEn: 'That\'s the entertainment that everyone likes.' },
    { de: 'Versandart', art: 'die', gender: 'f', plural: 'Versandarten', pos: 'noun', en: 'shipping method', hi: 'शिपिंग तरीका', ex: 'Das ist die Versandart, die am schnellsten ist.', exEn: 'That\'s the shipping method that is the fastest.' },
    { de: 'Übernachtung', art: 'die', gender: 'f', plural: 'Übernachtungen', pos: 'noun', en: 'overnight stay', hi: 'रात्रि विश्राम', ex: 'Das ist die Übernachtung, die zuzüglich Frühstück kostet.', exEn: 'That\'s the overnight stay that costs extra for breakfast.' },
    { de: 'Bezugswort', art: 'das', gender: 'n', plural: 'Bezugswörter', pos: 'noun', en: 'antecedent', hi: 'संदर्भ शब्द', ex: 'Das Bezugswort ist das Nomen, auf das sich der Relativsatz bezieht.', exEn: 'The antecedent is the noun the relative clause refers to.' },
    { de: 'Relativpronomen', art: 'das', gender: 'n', plural: 'Relativpronomen', pos: 'noun', en: 'relative pronoun', hi: 'संबंधवाचक सर्वनाम', ex: 'Das Relativpronomen richtet sich nach dem Bezugswort.', exEn: 'The relative pronoun matches the antecedent.' },
    { de: 'Relativsatz', art: 'der', gender: 'm', plural: 'Relativsätze', pos: 'noun', en: 'relative clause', hi: 'संबंधवाचक उपवाक्य', ex: 'Der Relativsatz beschreibt das Bezugswort genauer.', exEn: 'The relative clause describes the antecedent more precisely.' }
  ],

  // ---------- Relativsätze im Nominativ (rule cards) ----------
  grammar: [
    {
      title: 'The Nominativ relative pronoun table',
      body: [
        'A relative clause (Relativsatz) adds information about a noun (the Bezugswort/antecedent) using a Relativpronomen. When the pronoun is the SUBJECT of its own clause, use these Nominativ forms — they match the gender/number of the antecedent noun, not the verb that follows.'
      ],
      table: {
        head: ['Gender', 'Relativpronomen', 'Example'],
        rows: [
          ['Masculine', '<b>der</b>', '<span class="de">der Mann, der hier arbeitet</span>'],
          ['Feminine', '<b>die</b>', '<span class="de">die Frau, die Deutsch spricht</span>'],
          ['Neuter', '<b>das</b>', '<span class="de">das Kind, das Fußball spielt</span>'],
          ['Plural', '<b>die</b>', '<span class="de">die Studenten, die Deutsch lernen</span>']
        ]
      },
      hinglish: 'Relativsatz kisi noun ke baare mein extra jaankari deta hai. Jab relative pronoun us clause ka subject hota hai, to uska gender aur number us noun se match karta hai jiske baare mein baat ho rahi hai: masculine ke liye <b>der</b>, feminine ke liye <b>die</b>, neuter ke liye <b>das</b>, aur plural ke liye <b>die</b>.'
    },
    {
      title: 'Two sentences become one',
      body: [
        'Combine two short sentences into one fluent sentence: the second sentence\'s subject becomes the relative pronoun, and its verb moves to the end.'
      ],
      table: {
        head: ['Two sentences', '→ One relative clause'],
        rows: [
          ['<span class="de">Das ist der Mann. Der Mann arbeitet hier.</span>', '<span class="de">Das ist der Mann, der hier arbeitet.</span>'],
          ['<span class="de">Das ist die Frau. Die Frau spricht Deutsch.</span>', '<span class="de">Das ist die Frau, die Deutsch spricht.</span>'],
          ['<span class="de">Das ist das Kind. Das Kind spielt Fußball.</span>', '<span class="de">Das ist das Kind, das Fußball spielt.</span>'],
          ['<span class="de">Das sind die Studenten. Die Studenten lernen Deutsch.</span>', '<span class="de">Das sind die Studenten, die Deutsch lernen.</span>']
        ]
      },
      hinglish: 'Do chhote sentences milkar ek fluent sentence ban jaate hain. Doosre sentence ka subject relative pronoun ban jaata hai, aur uska verb clause ke end mein chala jaata hai.'
    },
    {
      title: 'Word order: verb goes to the end',
      body: [
        'A relative clause is a Nebensatz (subordinate clause): main clause → comma → relative pronoun → rest of the clause → conjugated verb at the very end.'
      ],
      table: {
        head: ['Person', 'Thing', 'Place'],
        rows: [
          ['<span class="de">Ich kenne den Lehrer, der in Berlin wohnt.</span>', '<span class="de">Das ist die Tasche, die sehr teuer ist.</span>', '<span class="de">Wir besuchen die Freunde, die aus Indien kommen.</span>']
        ]
      },
      hinglish: 'Relativsatz bhi ek Nebensatz hai, isliye structure jaana-pehchana hai: pehle main clause, phir comma, phir relative pronoun, phir baaki clause, aur end mein conjugated verb \u2014 bilkul jaise <b>weil</b>, <b>dass</b> aur <b>wenn</b> ke saath hota hai.'
    },
    {
      title: 'Common learner mistakes',
      body: [
        '<span class="de strike">der Mann der arbeitet hier</span> → <span class="de">der Mann, der hier arbeitet</span> — always put a comma before the relative pronoun.',
        '<span class="de strike">Das ist die Frau, die spricht Deutsch.</span> → <span class="de">Das ist die Frau, die Deutsch spricht.</span> — the verb must go to the end of the clause.',
        '<span class="de strike">Das ist das Auto, der neu ist.</span> → <span class="de">Das ist das Auto, das neu ist.</span> — das Auto is neuter, so use das, not der.',
        '<span class="de strike">Das sind Studenten, der Deutsch lernen.</span> → <span class="de">Das sind Studenten, die Deutsch lernen.</span> — plural nouns always take die.'
      ],
      hinglish: 'Teen galtiyan common hain: comma bhool jaana, verb ko end mein na bhejna, aur pronoun ka gender us noun se match na karna jiske baare mein baat ho rahi hai.'
    },
    {
      title: 'Quick decision guide',
      body: [
        'Is the relative pronoun the SUBJECT of its clause? → Use Nominativ (this chapter). Then check the antecedent\'s gender: masculine → der, feminine → die, neuter → das, plural → die.'
      ],
      hinglish: 'Pehle yeh dekho ki relative pronoun us clause ka subject hai ya nahi. Agar hai, to Nominativ form aayegi. Uske baad us noun ka gender check karo jiske baare mein baat ho rahi hai: masculine <b>der</b>, feminine <b>die</b>, neuter <b>das</b>, plural <b>die</b>.'
    }
  ],

  // ---------- Reading passage ----------
  reading: {
    title: 'Radio am Sonntagabend',
    titleEn: 'Radio on Sunday evening',
    tokens: [
      { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Nachrichtensprecher', role: 'r-subject', en: 'newsreader', hi: 'समाचार वाचक', pron: 'NAKH-rikh-ten-shpre-kher', type: 'Noun · masc.', why: 'der Nachrichtensprecher (this chapter).' },
      { w: ',', plain: true },
      { w: 'der', role: 'r-subject', en: 'who', hi: 'जो', pron: 'dair', type: 'Relativpronomen · Nom.', why: 'der — Nominativ relative pronoun, masculine (this chapter).' },
      { w: 'jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', pron: 'YAY-den', type: 'Artikel · Akk.' },
      { w: 'Abend', role: 'r-akkusativ', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun · masc.' },
      { w: 'berichtet', role: 'r-verb', en: 'reports', hi: 'रिपोर्ट करता है', pron: 'be-RIKH-tet', type: 'Verb · berichten (Nebensatz-Ende)' },
      { w: '.', plain: true },
      { w: 'Danach', role: 'r-time', en: 'afterwards', hi: 'उसके बाद', pron: 'dah-NAKH', type: 'Adverb' },
      { w: 'kommt', role: 'r-verb', en: 'comes', hi: 'आता है', pron: 'komt', type: 'Verb · kommen' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Rockmusik', role: 'r-subject', en: 'rock music', hi: 'रॉक संगीत', pron: 'ROK-moo-zeek', type: 'Noun · fem.', why: 'die Rockmusik (this chapter).' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-subject', en: 'that', hi: 'जो', pron: 'dee', type: 'Relativpronomen · Nom.' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'AY-nen', type: 'Article · acc.' },
      { w: 'neuen', role: 'r-akkusativ', en: 'new', hi: 'नया', pron: 'NOY-en', type: 'Adjective · Akk.' },
      { w: 'Hit', role: 'r-akkusativ', en: 'hit', hi: 'हिट गाना', pron: 'hit', type: 'Noun · masc.' },
      { w: 'vorstellt', role: 'r-verb', en: 'presents', hi: 'पेश करता है', pron: 'FOR-shtelt', type: 'Verb · vorstellen (Nebensatz-Ende)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'वह', pron: 'dair', type: 'Article' },
      { w: 'Hörer', role: 'r-subject', en: 'listener', hi: 'श्रोता', pron: 'HOE-rer', type: 'Noun · masc.', why: 'der Hörer (this chapter).' },
      { w: ',', plain: true },
      { w: 'der', role: 'r-subject', en: 'who', hi: 'जो', pron: 'dair', type: 'Relativpronomen · Nom.' },
      { w: 'anruft', role: 'r-verb', en: 'calls in', hi: 'फोन करता है', pron: 'AN-rooft', type: 'Verb · anrufen (Nebensatz-Ende)' },
      { w: ',', plain: true },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'ein', role: 'r-subject', en: 'a', hi: 'एक', pron: 'ine', type: 'Article' },
      { w: 'Wanderer', role: 'r-subject', en: 'wanderer', hi: 'यात्री', pron: 'VAN-de-rer', type: 'Noun · masc.', why: 'der Wanderer (this chapter).' },
      { w: ',', plain: true },
      { w: 'der', role: 'r-subject', en: 'who', hi: 'जो', pron: 'dair', type: 'Relativpronomen · Nom.' },
      { w: 'jährlich', role: 'r-adverb', en: 'yearly', hi: 'सालाना', pron: 'YAIR-likh', type: 'Adjective', why: 'jährlich (this chapter).' },
      { w: 'zu', role: 'r-place', en: 'to', hi: 'की ओर', pron: 'tsoo', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'r-dativ', en: 'a (neut. dat.)', hi: 'एक', pron: 'AY-nem', type: 'Article · dat.' },
      { w: 'Märchenschloss', role: 'r-dativ', en: 'fairytale castle', hi: 'परी कथा महल', pron: 'MAIR-khen-shlos', type: 'Noun · neut.', why: 'das Märchenschloss (this chapter).' },
      { w: 'wandert', role: 'r-verb', en: 'wanders', hi: 'चलता है', pron: 'VAN-dert', type: 'Verb · wandern (Nebensatz-Ende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-subject', en: 'the (plural)', hi: 'वे', pron: 'dee', type: 'Article' },
      { w: 'Sammlerinnen', role: 'r-subject', en: 'collectors', hi: 'संग्राहक', pron: 'ZAM-le-ri-nen', type: 'Noun · plural', why: 'die Sammlerin (this chapter, plural).' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-subject', en: 'who', hi: 'जो', pron: 'dee', type: 'Relativpronomen · Nom. (Plural)' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'AY-nen', type: 'Article · acc.' },
      { w: 'Stehplatz', role: 'r-akkusativ', en: 'standing room', hi: 'खड़े होने की जगह', pron: 'SHTAY-plats', type: 'Noun · masc.', why: 'der Stehplatz (this chapter).' },
      { w: 'kaufen', role: 'r-verb', en: 'buy', hi: 'खरीदती हैं', pron: 'KOW-fen', type: 'Verb · kaufen (Nebensatz-Ende)' },
      { w: ',', plain: true },
      { w: 'kennen', role: 'r-verb', en: 'know', hi: 'जानती हैं', pron: 'KE-nen', type: 'Verb · kennen' },
      { w: 'jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', pron: 'YAY-den', type: 'Artikel · Akk.' },
      { w: 'Synchronsprecher', role: 'r-akkusativ', en: 'voice actor', hi: 'डबिंग कलाकार', pron: 'ZUEN-khron-shpre-kher', type: 'Noun · masc.', why: 'der Synchronsprecher (this chapter).' },
      { w: '.', plain: true }
    ],
    translation: 'That\'s the newsreader who reports every evening. Afterwards comes the rock music that presents a new hit. The listener who calls in is a wanderer who wanders yearly to a fairytale castle. The collectors who buy a standing-room ticket know every voice actor.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_033_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Merit, kennst du den Mann, der im Radio die Nachrichten liest?', en: 'Merit, do you know the man who reads the news on the radio?' },
      { id: 'A2_033_L002', speaker: 'Merit', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, und die Frau, die beim Festival singt, kenne ich auch.', en: 'Yes, and I also know the woman who sings at the festival.' },
      { id: 'A2_033_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und das Kind, das immer tanzt — ist das ihre Tochter?', en: 'And the child who always dances — is that her daughter?' },
      { id: 'A2_033_L004', speaker: 'Merit', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau, das ist ihre Tochter Lilli.', en: 'Exactly, that\'s her daughter Lilli.' }
    ],
    transcript: 'Merit, kennst du den Mann, der im Radio die Nachrichten liest? Ja, und die Frau, die beim Festival singt, kenne ich auch. Und das Kind, das immer tanzt — ist das ihre Tochter? Genau, das ist ihre Tochter Lilli.',
    translation: 'Merit, do you know the man who reads the news on the radio? Yes, and I also know the woman who sings at the festival. And the child who always dances — is that her daughter? Exactly, that\'s her daughter Lilli.',
    tokens: [
      { w: 'Merit' },
      { w: ',', plain: true },
      { w: 'kennst' },
      { w: 'du' },
      { w: 'den' },
      { w: 'Mann' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'im' },
      { w: 'Radio' },
      { w: 'die' },
      { w: 'Nachrichten' },
      { w: 'liest' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'die' },
      { w: 'Frau' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'beim' },
      { w: 'Festival' },
      { w: 'singt' },
      { w: ',', plain: true },
      { w: 'kenne' },
      { w: 'ich' },
      { w: 'auch' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'das' },
      { w: 'Kind' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'immer' },
      { w: 'tanzt' },
      { w: '—', plain: true },
      { w: 'ist' },
      { w: 'das' },
      { w: 'ihre' },
      { w: 'Tochter' },
      { w: '?', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'ist' },
      { w: 'ihre' },
      { w: 'Tochter' },
      { w: 'Lilli' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wer liest die Nachrichten?', qEn: 'Who reads the news?', options: ['die Frau', 'das Kind', 'der Mann', 'Merit'], optionsEn: ['the woman', 'the child', 'the man', 'Merit'], answer: 2,
        explain: '"Der Mann, der im Radio die Nachrichten liest."' },
      { q: 'Wer ist das tanzende Kind?', qEn: 'Who is the dancing child?', options: ['ihre Tochter', 'ihr Sohn', 'ihre Schwester', 'ihre Freundin'], optionsEn: ['her daughter', 'her son', 'her sister', 'her friend'], answer: 0,
        explain: '"Das ist ihre Tochter Lilli."' }
    ]
  },

  speaking: [
    { task: "Dein Freund fragt: Wer ist die Frau dort?", taskEn: "Your friend asks: who's that woman over there?", de: "Das ist die Sammlerin, die hier jährlich ausstellt.", en: "That's the collector who exhibits here every year." },
    { task: "Deine Freundin fragt: Was ist das für ein Lied?", taskEn: "Your friend asks: what kind of song is that?", de: "Das ist ein Hit, der überall im Radio läuft.", en: "That's a hit that's on the radio everywhere." },
    { task: "Ein Gast fragt nach dem Ausblick. Beschreibe die Stelle.", taskEn: "A guest asks about the view. Describe the spot.", de: "Das ist der Berg, der einen tollen Ausblick hat.", en: "That's the mountain that has a great view." },
    { task: "Dein Kollege fragt: Wer war das am Telefon?", taskEn: "Your colleague asks: who was that on the phone?", de: "Das war der Firmenkunde, der die Rechnung nicht bekommen hat.", en: "That was the corporate client who didn't get the invoice." },
    { task: "Deine Freundin fragt: Wer spricht die Nachrichten?", taskEn: "Your friend asks: who reads the news?", de: "Das ist der Nachrichtensprecher, der jeden Abend um acht im Fernsehen ist.", en: "That's the newsreader who is on television every evening at eight." },
    { task: "Ein Wanderer fragt nach dem Weg. Beschreibe den Pfad.", taskEn: "A hiker asks the way. Describe the path.", de: "Nimm den Weg, der hinter dem Haus beginnt.", en: "Take the path that starts behind the house." },
    { task: "Dein Freund fragt: Welche Karte ist deine?", taskEn: "Your friend asks: which ticket is yours?", de: "Das ist der Stehplatz, der weniger kostet.", en: "That's the standing ticket that costs less." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short introduction (six sentences) describing your family or friends, using at least four Nominativ relative clauses (der/die/das/die). Try this chapter\'s words: der Wanderer, die Sammlerin, der Hörer, der Nachrichtensprecher.',
    starters: ['Das ist mein Bruder, der …', 'Das ist meine Schwester, die …', 'Das ist mein Freund, der …', 'Das sind meine Kollegen, die …'],
    placeholder: 'Das ist mein Vater, der jeden Abend die Nachrichten hört…',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct relative pronoun: "Das ist der Mann, ___ hier arbeitet."',
      options: ['die', 'das', 'der'],
      answer: 2,
      explain: 'der Mann is masculine, so the Nominativ relative pronoun is der.'
    },
    gap: {
      sentence: ['Das ist die Frau, ', ' Deutsch spricht.'],
      gaps: [ { answer: 'die', accepts: ['die'] } ],
      explain: 'die Frau is feminine, so the Nominativ relative pronoun is die.'
    },
    match: {
      q: 'Match each antecedent gender to its Nominativ relative pronoun.',
      pairs: [
        { noun: 'der Mann', art: 'masculine antecedent → der' },
        { noun: 'die Frau', art: 'feminine antecedent → die' },
        { noun: 'das Kind', art: 'neuter antecedent → das' },
        { noun: 'die Studenten', art: 'plural antecedent → die' },
        { noun: 'der Hörer', art: 'masculine antecedent (person) → der' }
      ]
    },
    builder: {
      target: 'Build: "That is the child that plays soccer."',
      bank: ['Das', 'ist', 'das', 'Kind', ',', 'das', 'Fußball', 'spielt', '.'],
      answer: ['Das', 'ist', 'das', 'Kind', ',', 'das', 'Fußball', 'spielt', '.'],
      roles: { 'das': 'r-subject', 'Kind': 'r-subject', 'spielt': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Das ist das Auto, ___ neu ist."', options: ['der', 'die', 'das'], answer: 2,
      explain: 'das Auto is neuter, so the Nominativ relative pronoun is das.' },
    { q: 'Complete: "Das sind die Studenten, ___ Deutsch lernen."', options: ['der', 'die', 'das'], answer: 1,
      explain: 'Plural nouns always take die as the Nominativ relative pronoun.' },
    { q: 'Which sentence is correctly punctuated and ordered?', options: ['der Mann der arbeitet hier', 'der Mann, der hier arbeitet', 'der Mann, der arbeitet hier'], answer: 1,
      explain: 'A comma comes before the relative pronoun, and the verb goes to the end of the clause.' },
    { q: 'What determines the gender of the relative pronoun?', options: ['The verb that follows', 'The antecedent noun', 'The speaker\'s gender'], answer: 1,
      explain: 'The relative pronoun always matches the gender/number of the noun it describes (the antecedent).' },
    { q: 'Complete: "Ich kenne den Lehrer, ___ in Berlin wohnt."', options: ['der', 'die', 'das'], answer: 0,
      explain: 'der Lehrer is masculine, so the Nominativ relative pronoun is der.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-modalverb', html: 'The Nominativ relative pronoun matches the antecedent noun\'s gender/number: masculine <span class="de r-modalverb">der</span>, feminine <span class="de r-modalverb">die</span>, neuter <span class="de r-modalverb">das</span>, plural <span class="de r-modalverb">die</span>.' },
    { c: 'r-modalverb', html: 'A relative clause is a Nebensatz: comma, relative pronoun, rest of the clause, and the conjugated verb at the very end.' },
    { c: 'r-modalverb', html: 'Two short sentences combine into one: <span class="de">Das ist der Mann. Der Mann arbeitet hier.</span> → <span class="de">Das ist der Mann, der hier arbeitet.</span>' }
  ],
  revisionTips: [
    'Ask: what gender/number is the antecedent noun? That decides der/die/das/die — never the verb that follows.',
    'Always put a comma before the relative pronoun.',
    'The conjugated verb always goes to the very end of the relative clause.'
  ]
};

window.CHAPTER = CHAPTER;
