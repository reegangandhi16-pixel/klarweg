/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 34
   "Relativsätze im Akkusativ" — relative clauses where the
   relative pronoun (den/die/das/die-plural) is the DIRECT OBJECT
   of the relative clause. Verb goes to the end (Nebensatz); only
   the masculine form changes from Nominativ der → Akkusativ den.
   No Dativ/Genitiv relative pronouns, no B1 clauses.
   Vocabulary source: uploaded chapter-34 list (25 items;
   Unterhaltung & Relativsätze theme — die Nachrichtensprecherin,
   die Hörerin, die Wanderin, das Quiz, die Steuer).
   Recycles A1/A2 vocabulary throughout.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-33-relativsatz-nominativ-data.js.

   SOURCE ISSUES corrected (flagged, not silently overridden):
   • "gestanden - love.)" — garbled source entry; corrected to
     gestehen (to confess), the verb this fragment most plausibly
     abbreviated ("to confess [love]").
   • "befreundet", "dunkel-", "hübsch", "meistabonniert" mislabelled
     "Adverb/Other" in the source sheet — all four are adjectives;
     corrected accordingly.
============================================================ */
const CHAPTER = {
  id: 'a2-34-relativsatz-akkusativ',
  phase: 'A2 · Phase 2',
  number: 34,
  title: 'Relativsätze im Akkusativ',
  titleEn: 'Relative clauses in the accusative',
  description: 'Das ist der Film, den ich gesehen habe. Das ist die Sendung, die ich höre. This chapter extends relative clauses to the Akkusativ — when the relative pronoun is the direct OBJECT of its clause, only the masculine form changes: der → den.',
  xp: 210,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 35, title: 'Goethe A2 Final', titleEn: 'Goethe Checkpoint 4 — Final A2 Readiness' , href: 'chapter-a2-35-goethe-mini-4.html' },

  prevChapter: { number: 33, title: 'Relativsätze im Nominativ', titleEn: 'Relative clauses in the nominative', href: 'chapter-a2-33-relativsatz-nominativ.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Wenke is reading a new novel and Timo wants to know everything about it — the author she likes, the chapter she loves most — every description now needing the Akkusativ relative pronoun: der Autor, den ich mag; das Kapitel, das ich liebe.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear Nominativ der vs. Akkusativ den side by side'
    ],
    scene: 'Am Wochenende — Unterhaltung & Medien',
    femaleSpeakers: ['Wenke'],
    dialogue: [
      { speaker: 'Wenke', tokens: [
        { w: 'Kennst', role: 'r-verb', en: 'do you know', hi: 'जानती हो', pron: 'KENST', type: 'Verb · kennen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Buch', role: 'r-akkusativ', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-akkusativ', en: 'which', hi: 'जिसे', pron: 'das', type: 'Relativpronomen · accusative', why: 'das as accusative relative pronoun refers to the neut. object being described (this chapter).', ex: 'das Buch, das ich lese', exEn: 'the book that I am reading' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'gerade', role: 'r-adverb', en: 'right now', hi: 'अभी', pron: 'ge-RAH-duh', type: 'Adverb' },
        { w: 'lese', role: 'r-verb', en: 'am reading', hi: 'पढ़ रही हूँ', pron: 'LAY-zuh', type: 'Verb · lesen (ich, Satzende)' },
        { w: '?', plain: true }
      ], en: 'Do you know the book that I am reading right now?', hi: 'Kya tum woh kitaab jaanti ho jo main abhi padh rahi hoon?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'noch', role: 'r-adverb', en: 'not yet', hi: 'अभी नहीं', pron: 'nokh', type: 'Adverb' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '.', plain: true },
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
        { w: 'heißt', role: 'r-verb', en: 'is it called', hi: 'नाम है', pron: 'hyst', type: 'Verb · heißen' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'No, not yet. What is it called?', hi: 'Nahi, abhi tak nahi. Iska naam kya hai?' },
      { speaker: 'Wenke', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'heißt', role: 'r-verb', en: 'is called', hi: 'कहलाता है', pron: 'hyst', type: 'Verb · heißen' },
        { w: '"Der', role: 'r-subject', en: 'The', hi: 'द', pron: 'dair', type: 'Title' },
        { w: 'Weg"', role: 'r-subject', en: 'Way', hi: 'रास्ता', pron: 'vayk', type: 'Title' },
        { w: '.', plain: true },
        { w: 'Der', role: 'r-subject', en: 'the', hi: 'वह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Autor', role: 'r-subject', en: 'author', hi: 'लेखक', pron: 'ow-TOR', type: 'Noun · masc.' },
        { w: ',', plain: true },
        { w: 'den', role: 'r-akkusativ', en: 'whom', hi: 'जिसे', pron: 'dayn', type: 'Relativpronomen · accusative', why: 'den refers to a masc. accusative object (this chapter).', ex: 'der Autor, den ich mag', exEn: 'the author whom I like' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'sehr', role: 'r-adverb', en: 'very much', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'mag', role: 'r-modalverb', en: 'like', hi: 'पसंद करती हूँ', pron: 'mahk', type: 'Modal · mögen (ich, Satzende)' }, { w: ',', plain: true },
        { w: 'lebt', role: 'r-verb', en: 'lives', hi: 'रहता है', pron: 'laypt', type: 'Verb · leben' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition + place' },
        { w: 'Berlin', role: 'r-dativ', en: 'Berlin', hi: 'बर्लिन', pron: 'ber-LEEN', type: 'Place' },
        { w: '.', plain: true }
      ], en: 'It is called "Der Weg". The author, whom I like very much, lives in Berlin.', hi: 'Iska naam "Der Weg" hai. Lekhak, jise main bahut pasand karti hoon, Berlin mein rehta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'वह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Geschichte', role: 'r-subject', en: 'story', hi: 'कहानी', pron: 'ge-SHIKH-tuh', type: 'Noun · fem.' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-akkusativ', en: 'which', hi: 'जिसे', pron: 'dee', type: 'Relativpronomen · accusative', why: 'die (fem. acc.) refers back to a feminine object (this chapter).', ex: 'die Geschichte, die ich mag', exEn: 'the story that I like' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'am', role: 'r-preposition', en: 'the most', hi: 'सबसे ज़्यादा', pron: 'am', type: 'Preposition + place' },
        { w: 'meisten', role: 'r-dativ', en: 'most', hi: 'ज़्यादा', pron: 'MY-sten', type: 'Superlative' },
        { w: 'magst', role: 'r-modalverb', en: 'like', hi: 'पसंद करती हो', pron: 'MAHKST', type: 'Modal · mögen (du, Satzende)' }, { w: ',', plain: true },
        { w: 'welche', role: 'r-subject', en: 'which', hi: 'कौनसी', pron: 'VEL-khuh', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'वह', pron: 'das', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Sounds good! And the story that you like the most, which one is that?', hi: 'Achha lagta hai! Aur jo kahaani tumhe sabse zyada pasand hai, wo kaunsi hai?' },
      { speaker: 'Wenke', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'वह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'वह', pron: 'das', type: 'Article · neut.' },
        { w: 'Kapitel', role: 'r-subject', en: 'chapter', hi: 'अध्याय', pron: 'ka-PI-tel', type: 'Noun · neut.' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-akkusativ', en: 'which', hi: 'जिसे', pron: 'das', type: 'Relativpronomen · accusative', why: 'das (neut. acc.) refers to a neut. object (this chapter).', ex: 'das Kapitel, das ich mag', exEn: 'the chapter that I like' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'am', role: 'r-preposition', en: 'the most', hi: 'सबसे ज़्यादा', pron: 'am', type: 'Preposition + place' },
        { w: 'meisten', role: 'r-dativ', en: 'most', hi: 'ज़्यादा', pron: 'MY-sten', type: 'Superlative' },
        { w: 'liebe', role: 'r-verb', en: 'love', hi: 'पसंद करती हूँ', pron: 'LEE-buh', type: 'Verb · lieben (ich, Satzende)' },
        { w: '.', plain: true }
      ], en: 'That is the chapter that I love the most.', hi: 'Yeh wo adhyaay hai jo mujhe sabse zyada pasand hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Leihst', role: 'r-verb', en: 'will you lend', hi: 'उधार दोगी', pron: 'LYST', type: 'Verb · leihen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Buch', role: 'r-akkusativ', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · neut.' },
        { w: '?', plain: true }
      ], en: 'Will you lend me the book?', hi: 'Kya tum mujhe kitaab udhaar doge?' },
      { speaker: 'Wenke', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: '!', plain: true }
      ], en: 'Yes, gladly!', hi: 'Haan, khushi se!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'When the relative pronoun is the direct OBJECT of its clause, use the Akkusativ form. Only the masculine changes: <span class="de r-modalverb">der</span> → <span class="de r-modalverb">den</span>. Feminine, neuter, and plural stay the same as Nominativ: <span class="de r-modalverb">die</span>, <span class="de r-modalverb">das</span>, <span class="de r-modalverb">die</span>. <span class="de">Das ist der Film, den ich gesehen habe.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is RELATIVSÄTZE IM AKKUSATIV (A2 level only): relative clauses where the relative pronoun (den/die/das/die-plural) is the DIRECT OBJECT of the relative clause, matching the gender/number of the antecedent noun, with the verb at the end of the clause. Only the masculine form changes from Nominativ der to Akkusativ den. ' +
    'No Dativ or Genitiv relative pronouns, no B1 relative clauses. The learner wrote sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag "Das ist der Film, der ich gesehen habe." — when the pronoun is the object, masculine nouns need den, not der: "der Film, den ich gesehen habe".\n' +
    '- Flag "Das ist die Frau, die ich den Kaffee gegeben habe." only if die is used as an indirect object — this chapter is Akkusativ only, so a Dativ construction like that is out of scope; do not invent a correction, just note gently that this chapter covers only direct-object (Akkusativ) relative clauses.\n' +
    '- Feminine, neuter, and plural relative pronouns (die/das/die) stay the SAME in Akkusativ as in Nominativ — only masculine changes.\n' +
    '- Flag missing verb-final word order: the conjugated verb must go to the end of the relative clause.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Verb-final check:</b> one sentence on whether the learner sent the conjugated verb to the end of each relative clause.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You handle Akkusativ relative clauses confidently — der becomes den for masculine objects, everything else stays the same. Next: the checkpoint before the final phase.',
    mid: 'Good. Re-read the der→den comparison table once, then continue.',
    low: 'Worth another pass — remember: only the masculine relative pronoun changes (der→den) when it\'s the object; feminine, neuter, and plural stay the same. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Das', role: 'r-subject' }, { w: 'ist', role: 'r-verb' },
    { w: 'der', role: 'r-subject' }, { w: 'Film', role: 'r-subject' },
    { w: ',', role: 'plain' }, { w: 'den', role: 'r-akkusativ' },
    { w: 'ich', role: 'r-subject' }, { w: 'gesehen', role: 'r-verb' },
    { w: 'habe', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: only masculine der changes to den as an object.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A weekend of media and entertainment described with Akkusativ relative clauses.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: die Nachrichtensprecherin, die Hörerin, die Wanderin, das Quiz, die Steuer.' },
    { id: 'grammar',    label: 'Relativsätze', tag: 'core',
      objective: 'Master Akkusativ relative pronouns — den, die, das, die (Plural) — with the verb at the end.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a media-and-entertainment story full of Akkusativ relative clauses.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each relative clause describing a thing or person as an object.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe films, books, songs, and people using Akkusativ relative clauses.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write descriptions using Akkusativ relative clauses.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill den/die/das/die and the classic mistakes.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 210 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The chapter\'s media and entertainment words — die Nachrichtensprecherin, die Hörerin, die Wanderin, das Quiz — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'der→den transformation drills, relative-pronoun sorting by case, and a description-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Nominativ vs. Akkusativ relative pronoun comparison table, common mistakes, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '6 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Das ist der Film, den ich gesehen habe.', text: 'Describe a masculine object with an Akkusativ relative clause' },
    { de: 'Das ist die Sendung, die ich höre.', text: 'Describe a feminine object with a relative clause' },
    { de: 'Das ist das Buch, das ich lese.', text: 'Describe a neuter object with a relative clause' },
    { de: 'Das sind die Songs, die ich mag.', text: 'Describe plural objects with a relative clause' },
    { de: 'Ich kenne die Frau, die er liebt.', text: 'Combine two sentences into one using an Akkusativ relative clause' }
  ],

  // ---------- Vocabulary (25 items) ----------
  vocab: [
    { de: 'Abkürzung', art: 'die', gender: 'f', plural: 'Abkürzungen', pos: 'noun', en: 'abbreviation', hi: 'संक्षिप्त रूप', ex: 'Das ist die Abkürzung, die ich nicht kenne.', exEn: 'That\'s the abbreviation that I don\'t know.' },
    { de: 'befreundet', pos: 'adjective', en: 'friendly (in a relationship)', hi: 'दोस्ताना', ex: 'Das ist der Freund, mit dem ich befreundet bin.', exEn: 'That\'s the friend I am friends with.' },
    { de: 'deuten', pos: 'verb', en: 'to indicate, interpret', hi: 'समझना', ex: 'Das ist das Zeichen, das ich nicht deuten kann.', exEn: 'That\'s the sign that I can\'t interpret.', conj: { praesens: 'deutet', praeteritum: 'deutete', perfekt: 'hat gedeutet' } },
    { de: 'dunkel', pos: 'adjective', en: 'dark', hi: 'गहरा', ex: 'Das ist das dunkle Bild, das ich mag.', exEn: 'That\'s the dark picture that I like.' },
    { de: 'Gebühr', art: 'die', gender: 'f', plural: 'Gebühren', pos: 'noun', en: 'fee', hi: 'शुल्क', ex: 'Das ist die Gebühr, die ich bezahlen muss.', exEn: 'That\'s the fee that I have to pay.' },
    { de: 'gestehen', pos: 'verb', en: 'to confess', hi: 'कबूल करना', ex: 'Das ist das Geheimnis, das ich gestehen möchte.', exEn: 'That\'s the secret that I want to confess.', conj: { praesens: 'gesteht', praeteritum: 'gestand', perfekt: 'hat gestanden' } },
    { de: 'Hörerin', art: 'die', gender: 'f', plural: 'Hörerinnen', pos: 'noun', en: 'listener', hi: 'श्रोता', ex: 'Das ist die Hörerin, die der Moderator grüßt.', exEn: 'That\'s the listener whom the host greets.' },
    { de: 'hübsch', pos: 'adjective', en: 'pretty', hi: 'सुंदर', ex: 'Das ist die Wanderin, die ich sehr hübsch finde.', exEn: 'That\'s the wanderer whom I find very pretty.' },
    { de: 'meistabonniert', pos: 'adjective', en: 'most-subscribed-to', hi: 'सबसे ज़्यादा सब्सक्राइब किया गया', ex: 'Das ist das Abo, das die meisten meistabonniert nennen.', exEn: 'That\'s the subscription that most call the most-subscribed-to one.' },
    { de: 'melodisch', pos: 'adjective', en: 'melodious', hi: 'मधुर', ex: 'Das ist der Song, den ich so melodisch fand.', exEn: 'That\'s the song that I thought was so melodious.' },
    { de: 'Nachrichtensprecherin', art: 'die', gender: 'f', plural: 'Nachrichtensprecherinnen', pos: 'noun', en: 'newsreader', hi: 'समाचार वाचिका', ex: 'Das ist die Nachrichtensprecherin, die ich jeden Abend sehe.', exEn: 'That\'s the newsreader whom I see every evening.' },
    { de: 'Quiz', art: 'das', gender: 'n', plural: 'Quiz', pos: 'noun', en: 'quiz', hi: 'प्रश्नोत्तरी', ex: 'Das ist das Quiz, das ich jede Woche spiele.', exEn: 'That\'s the quiz that I play every week.' },
    { de: 'Reihe', art: 'die', gender: 'f', plural: 'Reihen', pos: 'noun', en: 'row', hi: 'पंक्ति', ex: 'Das ist die Reihe, die ich am besten sehe.', exEn: 'That\'s the row from which I see best.' },
    { de: 'Steuer', art: 'die', gender: 'f', plural: 'Steuern', pos: 'noun', en: 'tax', hi: 'कर', ex: 'Das ist die Steuer, die ich jedes Jahr zahle.', exEn: 'That\'s the tax that I pay every year.' },
    { de: 'Tierbild', art: 'das', gender: 'n', plural: 'Tierbilder', pos: 'noun', en: 'animal picture', hi: 'पशु चित्र', ex: 'Das ist das Tierbild, das ich gemalt habe.', exEn: 'That\'s the animal picture that I painted.' },
    { de: 'Wanderin', art: 'die', gender: 'f', plural: 'Wanderinnen', pos: 'noun', en: 'wanderer', hi: 'यात्री', ex: 'Das ist die Wanderin, die ich kenne.', exEn: 'That\'s the wanderer whom I know.' },
    { de: 'Wert', art: 'der', gender: 'm', plural: 'Werte', pos: 'noun', en: 'value', hi: 'मूल्य', ex: 'Das ist der Wert, den ich berechnet habe.', exEn: 'That\'s the value that I calculated.' },
    { de: 'Bestseller-Liste', art: 'die', gender: 'f', plural: 'Bestseller-Listen', pos: 'noun', en: 'bestseller list', hi: 'बेस्टसेलर सूची', ex: 'Das ist die Bestseller-Liste, die ich lese.', exEn: 'That\'s the bestseller list that I read.' },
    { de: 'Festivalbesuch', art: 'der', gender: 'm', plural: 'Festivalbesuche', pos: 'noun', en: 'festival visit', hi: 'उत्सव यात्रा', ex: 'Das ist der Festivalbesuch, den wir geplant haben.', exEn: 'That\'s the festival visit that we planned.' },
    { de: 'Kinderbuch', art: 'das', gender: 'n', plural: 'Kinderbücher', pos: 'noun', en: 'children\'s book', hi: 'बच्चों की किताब', ex: 'Das ist das Kinderbuch, das meine Enkelin liebt.', exEn: 'That\'s the children\'s book that my granddaughter loves.' },
    { de: 'Mehrwertsteuer', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'value-added tax', hi: 'मूल्य वर्धित कर', ex: 'Das ist die Mehrwertsteuer, die man im Preis sieht.', exEn: 'That\'s the value-added tax that you see in the price.' },
    { de: 'Schnäppchen', art: 'das', gender: 'n', plural: 'Schnäppchen', pos: 'noun', en: 'bargain', hi: 'सौदा', ex: 'Das ist das Schnäppchen, das ich gefunden habe.', exEn: 'That\'s the bargain that I found.' },
    { de: 'Versandkosten', art: 'die', gender: 'pl', plural: '—', pos: 'noun', en: 'shipping cost', hi: 'शिपिंग लागत', ex: 'Das sind die Versandkosten, die ich bezahlen muss.', exEn: 'Those are the shipping costs that I have to pay.' },
    { de: 'Zwischensumme', art: 'die', gender: 'f', plural: 'Zwischensummen', pos: 'noun', en: 'subtotal', hi: 'उप-योग', ex: 'Das ist die Zwischensumme, die ich addiert habe.', exEn: 'That\'s the subtotal that I added up.' },
    { de: 'Synchronsprecherin', art: 'die', gender: 'f', plural: 'Synchronsprecherinnen', pos: 'noun', en: 'voice actress', hi: 'डबिंग कलाकार', ex: 'Das ist die Synchronsprecherin, die ich im Film höre.', exEn: 'That\'s the voice actress whom I hear in the film.' }
  ],

  // ---------- Relativsätze im Akkusativ (rule cards) ----------
  grammar: [
    {
      title: 'From Nominativ to Akkusativ: only der changes',
      body: [
        'When the relative pronoun is the direct OBJECT of its clause (not the subject), use the Akkusativ form. Only the masculine changes — feminine, neuter, and plural stay identical to Nominativ.'
      ],
      table: {
        head: ['Gender', 'Nominativ (subject)', 'Akkusativ (object)'],
        rows: [
          ['Masculine', 'der', '<b>den</b>'],
          ['Feminine', 'die', 'die (same)'],
          ['Neuter', 'das', 'das (same)'],
          ['Plural', 'die', 'die (same)']
        ]
      },
      hinglish: 'Jab relative pronoun us clause ka direct object hota hai, subject nahi, to Akkusativ form aati hai. Achhi baat yeh hai ki sirf masculine badalta hai \u2014 <b>der</b> se <b>den</b>. Feminine, neuter aur plural Nominativ jaise hi rehte hain.'
    },
    {
      title: 'Subject or object? A quick test',
      body: [
        'Ask: is there already another subject inside the relative clause? If yes, the relative pronoun is the object (Akkusativ). If the relative pronoun itself is doing the action, it\'s the subject (Nominativ).'
      ],
      table: {
        head: ['Clause type', 'Example'],
        rows: [
          ['Subject (Nominativ)', '<span class="de">der Mann, <b>der</b> hier arbeitet</span> — der does the working'],
          ['Object (Akkusativ)', '<span class="de">der Film, <b>den</b> ich gesehen habe</span> — ich does the seeing, den is what\'s seen']
        ]
      },
      hinglish: 'Test simple hai: dekho ki clause mein pehle se koi aur subject hai ya nahi. Agar hai, to relative pronoun object hai aur Akkusativ aayega. Aur agar pronoun khud kaam kar raha hai, to woh subject hai aur Nominativ aayega.'
    },
    {
      title: 'Examples across genders',
      body: [
        'The Akkusativ relative pronoun always matches the antecedent noun\'s gender/number, and the verb goes to the end.'
      ],
      table: {
        head: ['Gender', 'Example'],
        rows: [
          ['Masculine', '<span class="de">Das ist der Film, den ich gesehen habe.</span>'],
          ['Feminine', '<span class="de">Das ist die Sendung, die ich höre.</span>'],
          ['Neuter', '<span class="de">Das ist das Buch, das ich lese.</span>'],
          ['Plural', '<span class="de">Das sind die Songs, die ich mag.</span>']
        ]
      },
      hinglish: 'Akkusativ relative pronoun bhi us noun ke gender aur number se match karta hai jiske baare mein baat ho rahi hai, aur verb clause ke end mein jaata hai.'
    },
    {
      title: 'Common learner mistakes',
      body: [
        '<span class="de strike">Das ist der Film, der ich gesehen habe.</span> → <span class="de">Das ist der Film, den ich gesehen habe.</span> — der Film is the object here (ich is the subject), so it needs den.',
        '<span class="de strike">Ich kenne die Frau, die er liebt sie.</span> → <span class="de">Ich kenne die Frau, die er liebt.</span> — never repeat the object with a second pronoun (sie) after the relative pronoun.',
        '<span class="de strike">Das ist das Buch, das ich es lese.</span> → <span class="de">Das ist das Buch, das ich lese.</span> — same mistake: no extra pronoun (es) is needed.'
      ],
      hinglish: 'Do galtiyan common hain: masculine object ke liye <b>den</b> bhool jaana, aur relative pronoun ke baad ek aur pronoun jaise <b>sie</b> ya <b>es</b> dobara lagana \u2014 uski zaroorat nahi hoti.'
    },
    {
      title: 'Quick decision guide',
      body: [
        'Is the relative pronoun the OBJECT of its clause (someone else is doing the action)? → Use Akkusativ. Then check gender: masculine → den, feminine → die, neuter → das, plural → die.'
      ],
      hinglish: 'Pehle dekho ki relative pronoun object hai \u2014 matlab kaam koi aur kar raha hai. Agar haan, to Akkusativ aayega. Uske baad gender check karo: masculine <b>den</b>, feminine <b>die</b>, neuter <b>das</b>, plural <b>die</b>.'
    }
  ],

  // ---------- Reading passage ----------
  reading: {
    title: 'Ein Wochenende mit Medien',
    titleEn: 'A weekend with media',
    tokens: [
      { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · acc.' },
      { w: 'Nachrichtensprecherin', role: 'r-akkusativ', en: 'newsreader', hi: 'समाचार वाचिका', pron: 'NAKH-rikh-ten-shpre-khe-rin', type: 'Noun · fem.', why: 'die Nachrichtensprecherin (this chapter).' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-akkusativ', en: 'whom', hi: 'जिसे', pron: 'dee', type: 'Relativpronomen · Akk.', why: 'die — Akkusativ relative pronoun, feminine, same as Nominativ (this chapter).' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', pron: 'YAY-den', type: 'Artikel · Akk.' },
      { w: 'Abend', role: 'r-akkusativ', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun · masc.' },
      { w: 'sehe', role: 'r-verb', en: 'see', hi: 'देखती हूं', pron: 'ZAY-uh', type: 'Verb · sehen (Nebensatz-Ende)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'वह', pron: 'dair', type: 'Article' },
      { w: 'Song', role: 'r-subject', en: 'song', hi: 'गाना', pron: 'song', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'den', role: 'r-akkusativ', en: 'which', hi: 'जिसे', pron: 'dain', type: 'Relativpronomen · Akk.', why: 'den — Akkusativ relative pronoun, masculine. This is the ONLY form that changes from Nominativ der (this chapter).' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', pron: 'zo', type: 'Adverb' },
      { w: 'melodisch', role: 'r-adjective', en: 'melodious', hi: 'मधुर', pron: 'me-lo-DISH', type: 'Adjective', why: 'melodisch (this chapter).' },
      { w: 'fand', role: 'r-verb', en: 'found (thought)', hi: 'लगा', pron: 'fant', type: 'Verb · finden (Nebensatz-Ende)' },
      { w: ',', plain: true },
      { w: 'läuft', role: 'r-verb', en: 'plays', hi: 'बज रहा है', pron: 'loyft', type: 'Verb · laufen' },
      { w: 'gerade', role: 'r-time', en: 'right now', hi: 'अभी', pron: 'ge-RAH-duh', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article' },
      { w: 'Quiz', role: 'r-subject', en: 'quiz', hi: 'प्रश्नोत्तरी', pron: 'kviz', type: 'Noun · neut.', why: 'das Quiz (this chapter).' },
      { w: ',', plain: true },
      { w: 'das', role: 'r-akkusativ', en: 'which', hi: 'जिसे', pron: 'das', type: 'Relativpronomen · Akk.' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'jede', role: 'r-akkusativ', en: 'every', hi: 'हर', pron: 'YAY-duh', type: 'Artikel · Akk.' },
      { w: 'Woche', role: 'r-akkusativ', en: 'week', hi: 'सप्ताह', pron: 'VO-khuh', type: 'Noun · fem.' },
      { w: 'spielen', role: 'r-verb', en: 'play', hi: 'खेलते हैं', pron: 'SHPEE-len', type: 'Verb · spielen (Nebensatz-Ende)' },
      { w: ',', plain: true },
      { w: 'macht', role: 'r-verb', en: 'makes', hi: 'बनाता है', pron: 'makht', type: 'Verb · machen' },
      { w: 'immer', role: 'r-time', en: 'always', hi: 'हमेशा', pron: 'I-mer', type: 'Adverb' },
      { w: 'Spaß', role: 'r-akkusativ', en: 'fun', hi: 'मज़ा', pron: 'shpahs', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-subject', en: 'the (plural)', hi: 'वे', pron: 'dee', type: 'Article' },
      { w: 'Bücher', role: 'r-subject', en: 'books', hi: 'किताबें', pron: 'BUE-kher', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-akkusativ', en: 'which', hi: 'जिन्हें', pron: 'dee', type: 'Relativpronomen · Akk. (Plural)' },
      { w: 'meine', role: 'r-akkusativ', en: 'my', hi: 'मेरा', pron: 'MY-nuh', type: 'Possessivartikel · Akk.' },
      { w: 'Enkelin', role: 'r-akkusativ', en: 'granddaughter', hi: 'पोती', pron: 'ENG-ke-lin', type: 'Noun · fem.' },
      { w: 'liebt', role: 'r-verb', en: 'loves', hi: 'पसंद करती है', pron: 'leept', type: 'Verb · lieben (Nebensatz-Ende)' },
      { w: ',', plain: true },
      { w: 'stehen', role: 'r-verb', en: 'stand', hi: 'हैं', pron: 'SHTAY-en', type: 'Verb · stehen' },
      { w: 'auf', role: 'r-place', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition · Dat.' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'यह', pron: 'dair', type: 'Article · dat.' },
      { w: 'Bestseller-Liste', role: 'r-dativ', en: 'bestseller list', hi: 'बेस्टसेलर सूची', pron: 'BEST-se-ler-lis-tuh', type: 'Noun · fem.' },
      { w: '.', plain: true }
    ],
    translation: 'That\'s the newsreader whom I see every evening. The song that I thought was so melodious is playing right now. The quiz that we play every week is always fun. The books that my granddaughter loves are on the bestseller list.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_034_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wenke, wie heißt der Autor, den du so magst?', en: 'Wenke, what\'s the name of the author you like so much?' },
      { id: 'A2_034_L002', speaker: 'Wenke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Das ist der Autor, den ich seit Jahren lese.', en: 'That\'s the author I\'ve been reading for years.' },
      { id: 'A2_034_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und welches Kapitel ist das, das du liebst?', en: 'And which chapter is it that you love?' },
      { id: 'A2_034_L004', speaker: 'Wenke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Das Kapitel, das ich liebe, ist das letzte.', en: 'The chapter I love is the last one.' }
    ],
    transcript: 'Wenke, wie heißt der Autor, den du so magst? Das ist der Autor, den ich seit Jahren lese. Und welches Kapitel ist das, das du liebst? Das Kapitel, das ich liebe, ist das letzte.',
    translation: 'Wenke, what\'s the name of the author you like so much? That\'s the author I\'ve been reading for years. And which chapter is it that you love? The chapter I love is the last one.',
    tokens: [
      { w: 'Wenke' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'heißt' },
      { w: 'der' },
      { w: 'Autor' },
      { w: ',', plain: true },
      { w: 'den' },
      { w: 'du' },
      { w: 'so' },
      { w: 'magst' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'ist' },
      { w: 'der' },
      { w: 'Autor' },
      { w: ',', plain: true },
      { w: 'den' },
      { w: 'ich' },
      { w: 'seit' },
      { w: 'Jahren' },
      { w: 'lese' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'welches' },
      { w: 'Kapitel' },
      { w: 'ist' },
      { w: 'das' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'du' },
      { w: 'liebst' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'Kapitel' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'ich' },
      { w: 'liebe' },
      { w: ',', plain: true },
      { w: 'ist' },
      { w: 'das' },
      { w: 'letzte' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was sagt Wenke über den Autor?', qEn: 'What does Wenke say about the author?', options: ['Sie kennt ihn nicht.', 'Sie liest ihn seit Jahren.', 'Er ist neu.', 'Er schreibt nicht mehr.'], optionsEn: ['She doesn\'t know him.', 'She has been reading him for years.', 'He is new.', 'He no longer writes.'], answer: 1,
        explain: '"Das ist der Autor, den ich seit Jahren lese."' },
      { q: 'Welches Kapitel liebt Wenke?', qEn: 'Which chapter does Wenke love?', options: ['das erste', 'das letzte', 'das zweite', 'keins'], optionsEn: ['the first one', 'the last one', 'the second one', 'none'], answer: 1,
        explain: '"Das Kapitel, das ich liebe, ist das letzte."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin fragt: Welchen Film soll ich sehen?", taskEn: "Your friend asks: which film should I watch?", de: "Sieh den Film, den ich letzte Woche gesehen habe.", en: "Watch the film I saw last week." },
    { task: "Dein Freund fragt nach einem Buch. Empfehle eines.", taskEn: "Your friend asks about a book. Recommend one.", de: "Nimm das Kinderbuch, das ich meiner Nichte geschenkt habe.", en: "Take the children's book I gave my niece." },
    { task: "Deine Kollegin fragt: Wer ist die Frau auf dem Foto?", taskEn: "Your colleague asks: who's the woman in the photo?", de: "Das ist die Wanderin, die ich in den Bergen getroffen habe.", en: "That's the hiker I met in the mountains." },
    { task: "Dein Partner fragt: Welches Lied meinst du?", taskEn: "Your partner asks: which song do you mean?", de: "Ich meine das Lied, das der Hörer im Radio gewünscht hat.", en: "I mean the song that the listener requested on the radio." },
    { task: "Deine Freundin fragt nach der Serie. Beschreibe sie.", taskEn: "Your friend asks about the series. Describe it.", de: "Das ist die Reihe, die ich abonniert habe.", en: "That's the series I subscribe to." },
    { task: "Dein Freund fragt: Wen hast du auf dem Festival gesehen?", taskEn: "Your friend asks: who did you see at the festival?", de: "Die Band, die ich schon lange hören wollte.", en: "The band I'd wanted to hear for ages." },
    { task: "Dein Kollege fragt: Welche Gebühr meinst du?", taskEn: "Your colleague asks: which fee do you mean?", de: "Die Gebühr, die wir letztes Jahr bezahlt haben.", en: "The fee we paid last year." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short description (six sentences) of your favorite films, books, and songs, using at least four Akkusativ relative clauses (den/die/das/die). Try this chapter\'s words: das Quiz, die Wanderin, der Wert, die Steuer.',
    starters: ['Das ist der Film, den …', 'Das ist die Sendung, die …', 'Das ist das Buch, das …', 'Das sind die Songs, die …'],
    placeholder: 'Das ist der Film, den ich letztes Wochenende gesehen habe…',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct relative pronoun: "Das ist der Film, ___ ich gesehen habe."',
      options: ['der', 'die', 'den'],
      answer: 2,
      explain: 'der Film is masculine and is the OBJECT here (ich is the subject), so the Akkusativ relative pronoun is den.'
    },
    gap: {
      sentence: ['Das ist das Buch, ', ' ich lese.'],
      gaps: [ { answer: 'das', accepts: ['das'] } ],
      explain: 'das Buch is neuter — the Akkusativ relative pronoun stays das, same as Nominativ.'
    },
    match: {
      q: 'Match each Nominativ relative pronoun to its Akkusativ form.',
      pairs: [
        { noun: 'der (masculine, Nom.)', art: 'den (masculine, Akk.)' },
        { noun: 'die (feminine, Nom.)', art: 'die (feminine, Akk. — unchanged)' },
        { noun: 'das (neuter, Nom.)', art: 'das (neuter, Akk. — unchanged)' },
        { noun: 'die (plural, Nom.)', art: 'die (plural, Akk. — unchanged)' }
      ]
    },
    builder: {
      target: 'Build: "That is the song that I found."',
      bank: ['Das', 'ist', 'der', 'Song', ',', 'den', 'ich', 'gefunden', 'habe', '.'],
      answer: ['Das', 'ist', 'der', 'Song', ',', 'den', 'ich', 'gefunden', 'habe', '.'],
      roles: { 'den': 'r-akkusativ', 'ich': 'r-subject', 'gefunden': 'r-verb', 'habe': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Ich kenne die Frau, ___ er liebt."', options: ['der', 'die', 'den'], answer: 1,
      explain: 'die Frau is feminine and an object here — the Akkusativ relative pronoun stays die, unchanged from Nominativ.' },
    { q: 'Complete: "Das sind die Songs, ___ ich mag."', options: ['der', 'die', 'den'], answer: 1,
      explain: 'Plural nouns take die in both Nominativ and Akkusativ.' },
    { q: 'Which gender changes its relative pronoun from Nominativ to Akkusativ?', options: ['Feminine', 'Neuter', 'Masculine'], answer: 2,
      explain: 'Only the masculine form changes: der (Nom.) → den (Akk.). All others stay the same.' },
    { q: 'Which sentence is correct?', options: ['Das ist der Film, der ich gesehen habe.', 'Das ist der Film, den ich gesehen habe.', 'Das ist der Film, das ich gesehen habe.'], answer: 1,
      explain: 'der Film is the object here (ich is the subject), so it needs the Akkusativ pronoun den.' },
    { q: 'Complete: "Das ist das Kinderbuch, ___ meine Enkelin liebt."', options: ['das', 'den', 'die'], answer: 0,
      explain: 'das Kinderbuch is neuter — the Akkusativ relative pronoun stays das, unchanged from Nominativ.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-modalverb', html: 'When the relative pronoun is the OBJECT of its clause, only the masculine form changes: <span class="de r-modalverb">der</span> → <span class="de r-modalverb">den</span>. Feminine, neuter, and plural stay the same as Nominativ.' },
    { c: 'r-modalverb', html: 'Quick test: is there already another subject inside the clause (like ich, du, er)? If yes, the relative pronoun is the object — check for den if masculine.' },
    { c: 'r-modalverb', html: '<span class="de">Das ist der Film, den ich gesehen habe.</span> — den is the object of gesehen habe; the verb still goes to the end.' }
  ],
  revisionTips: [
    'Ask: is there another subject already inside the clause? If yes, the relative pronoun is the object.',
    'Only masculine changes: der (subject) → den (object). Feminine die, neuter das, and plural die never change.',
    'The conjugated verb still goes to the very end of the relative clause, just like in the Nominativ.'
  ]
};

window.CHAPTER = CHAPTER;
