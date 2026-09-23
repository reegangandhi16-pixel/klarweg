/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 4 · Chapter 42
   "Adjektive mit Präpositionen (B2)" — high-frequency B2
   adjectives that require a FIXED preposition + case, taught as
   one vocabulary unit (adjective + preposition + case), parallel
   to Ch.40 (Verben mit Präpositionen) and Ch.41 (Nomen mit
   Präpositionen). Does NOT teach adjective declension,
   comparatives, or participles as adjectives.
   IMPORTANT: dialogue uses ONLY Kerstin and Timo.
   Vocabulary source: uploaded chapter-42 list (50 items,
   continuing an art-world/gallery theme).
============================================================ */
const CHAPTER = {
  id: 'b2-42-adjektive-mit-praepositionen',
  phase: 'B2 · Phase 4',
  number: 42,
  title: 'Adjektive mit Präpositionen (B2)',
  titleEn: 'Adjectives with fixed prepositions (B2)',
  description: 'stolz AUF, interessiert AN, zufrieden MIT — adjectives have fixed prepositions too, completing the verb/noun/adjective trio.',
  xp: 530,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 43, title: 'Goethe Mini 3 (Checkpoint)', titleEn: 'Goethe mini-test 3 (checkpoint)' , href: 'chapter-b2-43-goethe-mini-3.html' },

  prevChapter: { number: 41, title: 'Nomen mit Präpositionen (B2)', titleEn: 'Nouns with fixed prepositions (B2)', href: 'chapter-b2-41-nomen-mit-praepositionen.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Proud <em>of</em> what, exactly?',
    intro: 'At a gallery opening, Kerstin is proud of the artist and Timo is curious about the next exhibition — every judgment locked to its adjective\'s one true preposition: stolz auf, interessiert an, zufrieden mit.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how each adjective\'s fixed preposition and case never change, completing the verb/noun/adjective trio'
    ],
    scene: 'Die Galerieeröffnung',
    femaleSpeakers: ['Kerstin'],
    dialogue: [
      { speaker: 'Kerstin', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'begeistert', role: 'r-akkusativ', en: 'excited', hi: 'उत्साहित', pron: 'be-GYS-tert', type: 'Adjective' },
        { w: 'von', role: 'r-preposition', en: 'about', hi: 'से', pron: 'fon', type: 'Preposition · fixed with begeistert', why: 'begeistert von + Dativ = excited about (this chapter).', ex: 'begeistert von dem Kunstwerk' },
        { w: 'diesem', role: 'r-dativ', en: 'this (neut. dat.)', hi: 'इस', pron: 'DEE-zaym', type: 'Determiner · dative' },
        { w: 'Kunstwerk', role: 'r-dativ', en: 'artwork (dat.)', hi: 'कलाकृति से', pron: 'KUNST-vairk', type: 'Noun · neut. dat.' },
        { w: '.', plain: true }
      ], en: 'I am excited about this artwork.', hi: 'Main is kalakriti se utsaahit hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'stolz', role: 'r-akkusativ', en: 'proud', hi: 'गर्वित', pron: 'shtolts', type: 'Adjective' },
        { w: 'auf', role: 'r-preposition', en: 'of', hi: 'पर', pron: 'owf', type: 'Preposition · fixed with stolz', why: 'stolz auf + Akkusativ = proud of (recycled B1).', ex: 'stolz auf den Künstler' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Künstler', role: 'r-akkusativ', en: 'artist', hi: 'कलाकार', pron: 'KÜNST-ler', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'I am proud of the artist.', hi: 'Mujhe kalaakaar par garv hai.' },
      { speaker: 'Kerstin', tokens: [
        { w: 'Bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'से', pron: 'mit', type: 'Preposition · fixed with zufrieden', why: 'zufrieden mit + Dativ = satisfied with (recycled B1).', ex: 'zufrieden mit dem Motiv' },
        { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Motiv', role: 'r-dativ', en: 'motif (dat.)', hi: 'विषय से', pron: 'mo-TEEF', type: 'Noun · neut. dat.', why: 'das Motiv (this chapter).', ex: 'mit dem Motiv' },
        { w: 'zufrieden', role: 'r-akkusativ', en: 'satisfied', hi: 'संतुष्ट', pron: 'TSOO-free-den', type: 'Adjective' },
        { w: '?', plain: true }
      ], en: 'Are you satisfied with the motif?', hi: 'Kya tum vishay se santusht ho?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'reich', role: 'r-akkusativ', en: 'rich', hi: 'समृद्ध', pron: 'rykh', type: 'Adjective' },
        { w: 'an', role: 'r-preposition', en: 'in', hi: 'में', pron: 'an', type: 'Preposition · fixed with reich', why: 'reich an + Dativ = rich in (this chapter).', ex: 'reich an Farben' },
        { w: 'Farben', role: 'r-dativ', en: 'colors (dat.)', hi: 'रंगों में', pron: 'FAR-ben', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'Yes, it is rich in colors.', hi: 'Haan, yeh rangon mein samriddh hai.' },
      { speaker: 'Kerstin', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'gespannt', role: 'r-akkusativ', en: 'curious', hi: 'उत्सुक', pron: 'ge-SHPANT', type: 'Adjective' },
        { w: 'auf', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'owf', type: 'Preposition · fixed with gespannt', why: 'gespannt auf + Akkusativ = curious about (recycled B1).', ex: 'gespannt auf die nächste Ausstellung' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'nächste', role: 'r-akkusativ', en: 'next', hi: 'अगली', pron: 'NEKS-tuh', type: 'Adjective' },
        { w: 'Ausstellung', role: 'r-akkusativ', en: 'exhibition', hi: 'प्रदर्शनी', pron: 'OWS-shte-lung', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'I am curious about the next exhibition.', hi: 'Mujhe agli pradarshani ke baare mein utsukta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Sie', role: 'r-subject', en: 'it', hi: 'यह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'bekannt', role: 'r-akkusativ', en: 'known', hi: 'प्रसिद्ध', pron: 'be-KANT', type: 'Adjective' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition · fixed with bekannt', why: 'bekannt für + Akkusativ = known for (recycled B1).', ex: 'bekannt für ihre Kreativität' },
        { w: 'ihre', role: 'r-akkusativ', en: 'her (fem.)', hi: 'उसकी', pron: 'EE-ruh', type: 'Possessive · acc.' },
        { w: 'Kreativität', role: 'r-akkusativ', en: 'creativity', hi: 'रचनात्मकता', pron: 'kre-a-ti-vi-TAYT', type: 'Noun · fem.', why: 'die Kreativität (this chapter).', ex: 'ihre Kreativität' },
        { w: '.', plain: true }
      ], en: 'It is known for her creativity.', hi: 'Yeh uski rachnaatmakta ke liye prasiddh hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Many German adjectives come with a FIXED preposition, completing the verb/noun/adjective trio: <span class="de r-adj-prep">stolz AUF</span>, <span class="de r-adj-prep">interessiert AN</span>, <span class="de r-adj-prep">zufrieden MIT</span>. Learn the adjective, its preposition, and its case together as ONE vocabulary item.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ADJEKTIVE MIT PRÄPOSITIONEN (B2 level): high-frequency German adjectives that require a fixed preposition and case, taught as one unit (adjective + preposition + case). Examples: abhängig von +Dat., überzeugt von +Dat., zufrieden mit +Dat., fertig mit +Dat., bekannt für +Akk., geeignet für +Akk., verantwortlich für +Akk., stolz auf +Akk., neugierig auf +Akk., interessiert an +Dat., reich an +Dat., arm an +Dat., frei von +Dat., typisch für +Akk., bereit zu +Dat., fähig zu +Dat., wichtig für +Akk., notwendig für +Akk. This completes the trio with Ch.40 (Verben mit Präpositionen) and Ch.41 (Nomen mit Präpositionen) — note that the SAME base concept can take a DIFFERENT preposition as verb/noun/adjective (e.g. sich interessieren FÜR vs interessiert AN). ' +
    'Do NOT expect or require adjective declension endings, comparatives, or participles-as-adjectives grammar — those are separate topics; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that each adjective from the taught list uses its correct fixed preposition (not a different, seemingly logical one, e.g. NOT "interessiert für" or "stolz von").\n' +
    '- Check that the case after the preposition matches what that specific adjective requires.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Preposition check:</b> one sentence on whether the learner correctly paired each adjective with its fixed preposition and case.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly pair every adjective with its one fixed preposition and case. You\'ve completed the verb/noun/adjective preposition trio!',
    mid: 'Good. Re-read the Master Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: never learn an adjective alone. Always learn adjective + preposition + case together.'
  },

  parserSentence: [
    { w: 'Ich', role: 'plain' }, { w: 'bin', role: 'plain' }, { w: 'stolz', role: 'r-adj-prep' },
    { w: 'auf', role: 'r-adj-prep' }, { w: 'meine', role: 'plain' }, { w: 'Arbeit', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: learn adjective + preposition + case together as one vocabulary unit.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Kerstin and Timo discuss a gallery opening using adjective-preposition pairs.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 50 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the core B2 adjective-preposition combinations, their cases, and matching question words.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a company profile and a university interview full of adjective-preposition combinations.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the adjective, its preposition, required case, and meaning.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Discuss job interviews and projects using B2 adjective-preposition combinations naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write formal emails and applications using natural adjective-preposition combinations.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill preposition choice, Akkusativ-or-Dativ, and matching adjectives to prepositions.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 530 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 50 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Preposition-choice drills, case selection, and an application-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete Master Table, the question-word table, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Anna ist an Sprachen interessiert.', text: 'Use interessiert an + Dativ naturally' },
    { de: 'Rohan ist stolz auf seine Arbeit.', text: 'Use stolz auf + Akkusativ correctly' },
    { de: 'Woran bist du interessiert? Worauf bist du stolz?', text: 'Match question words to each adjective-preposition pair' },
    { de: 'Dativ: abhängig von, interessiert an, zufrieden mit... Akkusativ: stolz auf, bekannt für, verantwortlich für...', text: 'Sort the core adjectives by required case' },
    { de: 'sich interessieren FÜR (verb) vs interessiert AN (adjective)', text: 'Notice how the same idea can take a different preposition across word types' }
  ],

  // ---------- Vocabulary (50 items — uploaded chapter-42 list) ----------
  vocab: [
    { de: 'Welterbe', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'world heritage', hi: 'विश्व धरोहर', ex: 'Der Palast gehört zum Welterbe.', exEn: 'The palace belongs to the world heritage.', exHi: 'Mahal vishva dharohar mein shaamil hai.', ex2: 'Sie haben das Welterbe besucht.', ex2En: 'They\'ve visited the world heritage site.', ex2Hi: 'Unhone vishva dharohar sthal ka daura kiya hai.' },
    { de: 'Weltkulturerbe', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'world cultural heritage', hi: 'विश्व सांस्कृतिक धरोहर', ex: 'Die Stadt wurde zum Weltkulturerbe erklärt.', exEn: 'The city was declared a world cultural heritage site.', exHi: 'Shahar ko vishva saanskritik dharohar ghoshit kiya gaya.', ex2: 'Sie haben das Weltkulturerbe geschützt.', ex2En: 'They\'ve protected the world cultural heritage.', ex2Hi: 'Unhone vishva saanskritik dharohar ki raksha ki hai.' },
    { de: 'wiedererkennen', pos: 'verb', level: 'B2', register: 'both', en: 'to recognise (again)', hi: 'फिर से पहचानना', ex: 'Sie erkannte ihn nach Jahren wieder.', exEn: 'She recognised him again after years.', exHi: 'Usne saalon baad use phir se pehchaana.', ex2: 'Er hat die Melodie wiedererkannt.', ex2En: 'He\'s recognised the melody again.', ex2Hi: 'Usne dhun phir se pehchaani hai.', conj: { praesens: 'erkennt wieder', praeteritum: 'erkannte wieder', perfekt: 'hat wiedererkannt' } },
    { de: 'wundervoll', pos: 'adjective', level: 'B2', register: 'both', en: 'wonderful', hi: 'अद्भुत', ex: 'Der Abend war wundervoll.', exEn: 'The evening was wonderful.', exHi: 'Shaam adbhut thi.', ex2: 'Sie haben wundervolle Erinnerungen.', ex2En: 'They\'ve got wonderful memories.', ex2Hi: 'Unke paas adbhut yaadein hain.' },
    { de: 'Zeigefinger', art: 'der', gender: 'm', plural: 'Zeigefinger', pos: 'noun', level: 'B2', register: 'both', en: 'index finger', hi: 'तर्जनी', ex: 'Sie zeigte mit dem Zeigefinger auf das Bild.', exEn: 'She pointed at the picture with her index finger.', exHi: 'Usne tarjani se tasveer ki taraf ishaara kiya.', ex2: 'Er hat sich am Zeigefinger verletzt.', ex2En: 'He\'s injured his index finger.', ex2Hi: 'Usne apni tarjani ghaayal ki hai.' },
    { de: 'zusammenschreiben', pos: 'verb', level: 'B2', register: 'written', en: 'to write as one word', hi: 'एक साथ लिखना', ex: 'Man schreibt dieses Wort zusammen.', exEn: 'This word is written as one word.', exHi: 'Yeh shabd ek saath likha jaata hai.', ex2: 'Sie haben die Begriffe zusammengeschrieben.', ex2En: 'They\'ve written the terms as one word.', ex2Hi: 'Unhone shabdon ko ek saath likha hai.', conj: { praesens: 'schreibt zusammen', praeteritum: 'schrieb zusammen', perfekt: 'hat zusammengeschrieben' } },
    { de: 'zuschlagen', pos: 'verb', level: 'B2', register: 'both', en: 'to slam, strike, take effect', hi: 'ज़ोर से बंद करना, प्रभाव दिखाना', ex: 'Die Tür schlug laut zu.', exEn: 'The door slammed loudly.', exHi: 'Darwaaza zor se band ho gaya.', ex2: 'Die Krise hat schnell zugeschlagen.', ex2En: 'The crisis has struck quickly.', ex2Hi: 'Sankat ne jaldi asar dikhaaya hai.', conj: { praesens: 'schlägt zu', praeteritum: 'schlug zu', perfekt: 'hat zugeschlagen' } },
    { de: 'Alltagsszene', art: 'die', gender: 'f', plural: 'Alltagsszenen', pos: 'noun', level: 'B2', register: 'written', en: 'everyday scene', hi: 'रोज़मर्रा का दृश्य', ex: 'Das Gemälde zeigte eine Alltagsszene.', exEn: 'The painting showed an everyday scene.', exHi: 'Chitrakaari mein roz-marra ka drishya tha.', ex2: 'Sie haben eine Alltagsszene fotografiert.', ex2En: 'They\'ve photographed an everyday scene.', ex2Hi: 'Unhone roz-marra ka drishya cheeda hai.' },
    { de: 'Betrachter/in', art: 'der/die', gender: 'm/f', plural: 'Betrachter/innen', pos: 'noun', level: 'B2', register: 'written', en: 'viewer, observer', hi: 'दर्शक', ex: 'Der Betrachter war fasziniert.', exEn: 'The viewer was fascinated.', exHi: 'Darshak mugdh tha.', ex2: 'Sie haben die Betrachter beeindruckt.', ex2En: 'They\'ve impressed the viewers.', ex2Hi: 'Unhone darshakon ko prabhaavit kiya hai.' },
    { de: 'charakteristisch', pos: 'adjective', level: 'B2', register: 'written', en: 'characteristic', hi: 'विशिष्ट', ex: 'Diese Farbe war charakteristisch für seinen Stil.', exEn: 'This colour was characteristic of his style.', exHi: 'Yeh rang uski shaili ke liye vishisht tha.', ex2: 'Sie haben charakteristische Merkmale identifiziert.', ex2En: 'They\'ve identified characteristic features.', ex2Hi: 'Unhone vishisht visheshtaayein pehchaani hain.' },
    { de: 'Entdecker/in', art: 'der/die', gender: 'm/f', plural: 'Entdecker/innen', pos: 'noun', level: 'B2', register: 'written', en: 'discoverer, explorer', hi: 'खोजकर्ता', ex: 'Der Entdecker fand ein neues Gemälde.', exEn: 'The explorer found a new painting.', exHi: 'Khojkarta ko ek nayi chitrakaari mili.', ex2: 'Sie ist eine berühmte Entdeckerin.', ex2En: 'She\'s a famous explorer.', ex2Hi: 'Woh ek prasiddh khojkarta hai.' },
    { de: 'Galerist/in', art: 'der/die', gender: 'm/f', plural: 'Galeristen/innen', pos: 'noun', level: 'B2', register: 'written', en: 'gallery owner', hi: 'गैलरी की मालकिन/मालिक', ex: 'Sie ist verantwortlich für die Galeristin.', exEn: 'She is responsible for the gallery owner.', exHi: 'Woh gallery ki maalkin ke liye zimmedaar hai.', ex2: 'Der Galerist eröffnete eine neue Ausstellung.', ex2En: 'The gallery owner opened a new exhibition.', ex2Hi: 'Gallery ke maalik ne ek nayi pradarshani kholi.' },
    { de: 'gegenständlich', pos: 'adjective', level: 'B2', register: 'written', en: 'representational, concrete', hi: 'वस्तुनिष्ठ', ex: 'Das Gemälde war gegenständlich, nicht abstrakt.', exEn: 'The painting was representational, not abstract.', exHi: 'Chitrakaari vastunishth thi, abstract nahi.', ex2: 'Sie haben gegenständliche Kunst bevorzugt.', ex2En: 'They\'ve preferred representational art.', ex2Hi: 'Unhone vastunishth kala ko prathamikta di hai.' },
    { de: 'Gehilfe/Gehilfin', art: 'der/die', gender: 'm/f', plural: 'Gehilfen/Gehilfinnen', pos: 'noun', level: 'B2', register: 'written', en: 'assistant, helper', hi: 'सहायक', ex: 'Der Gehilfe half dem Meister.', exEn: 'The assistant helped the master.', exHi: 'Sahaayak ne ustaad ki madad ki.', ex2: 'Sie ist seine treue Gehilfin.', ex2En: 'She\'s his loyal assistant.', ex2Hi: 'Woh uski vafaadaar sahaayak hai.' },
    { de: 'großformatig', pos: 'adjective', level: 'B2', register: 'written', en: 'large-format', hi: 'बड़े आकार का', ex: 'Diese Galerie ist bekannt für großformatige Werke.', exEn: 'This gallery is known for large-format works.', exHi: 'Yeh gallery bade aakaar ki kritiyon ke liye prasiddh hai.', ex2: 'Sie haben ein großformatiges Gemälde gekauft.', ex2En: 'They\'ve bought a large-format painting.', ex2Hi: 'Unhone ek bade aakaar ki chitrakaari khareedi hai.' },
    { de: 'Hochtechnologie', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'high technology', hi: 'उच्च तकनीक', ex: 'Die Firma investierte in Hochtechnologie.', exEn: 'The company invested in high technology.', exHi: 'Company ne uchch takneek mein nivesh kiya.', ex2: 'Sie haben Hochtechnologie entwickelt.', ex2En: 'They\'ve developed high technology.', ex2Hi: 'Unhone uchch takneek vikasit ki hai.' },
    { de: 'Ich-Erzähler/in', art: 'der/die', gender: 'm/f', plural: 'Ich-Erzähler/innen', pos: 'noun', level: 'B2', register: 'written', en: 'first-person narrator', hi: 'प्रथम पुरुष कथावाचक', ex: 'Der Ich-Erzähler beschrieb seine Kindheit.', exEn: 'The first-person narrator described his childhood.', exHi: 'Prathampurush kathaavaachak ne apna bachpan varnan kiya.', ex2: 'Sie haben den Ich-Erzähler analysiert.', ex2En: 'They\'ve analysed the first-person narrator.', ex2Hi: 'Unhone prathampurush kathaavaachak ka vishleshan kiya hai.' },
    { de: 'Juweliergeschäft', art: 'das', gender: 'n', plural: 'Juweliergeschäfte', pos: 'noun', level: 'B2', register: 'both', en: 'jeweller\'s shop', hi: 'ज्वेलर्स की दुकान', ex: 'Das Juweliergeschäft wurde ausgeraubt.', exEn: 'The jeweller\'s shop was robbed.', exHi: 'Jeweller ki dukaan loot li gayi.', ex2: 'Sie haben ein neues Juweliergeschäft eröffnet.', ex2En: 'They\'ve opened a new jeweller\'s shop.', ex2Hi: 'Unhone ek nayi jeweller ki dukaan kholi hai.' },
    { de: 'Komplize/Komplizin', art: 'der/die', gender: 'm/f', plural: 'Komplizen/Komplizinnen', pos: 'noun', level: 'B2', register: 'written', en: 'accomplice', hi: 'साथी अपराधी', ex: 'Der Komplize half beim Diebstahl.', exEn: 'The accomplice helped with the theft.', exHi: 'Saathi apraadhi ne chori mein madad ki.', ex2: 'Sie war seine Komplizin.', ex2En: 'She was his accomplice.', ex2Hi: 'Woh uski saathi apraadhi thi.' },
    { de: 'Kunstikone', art: 'die', gender: 'f', plural: 'Kunstikonen', pos: 'noun', level: 'B2', register: 'written', en: 'art icon', hi: 'कला प्रतीक', ex: 'Das Gemälde war eine Kunstikone.', exEn: 'The painting was an art icon.', exHi: 'Chitrakaari ek kala pratik thi.', ex2: 'Sie haben viele Kunstikonen gesammelt.', ex2En: 'They\'ve collected many art icons.', ex2Hi: 'Unhone kai kala pratik ekatra kiye hain.' },
    { de: 'Kunstwerk', art: 'das', gender: 'n', plural: 'Kunstwerke', pos: 'noun', level: 'B2', register: 'both', en: 'work of art', hi: 'कलाकृति', ex: 'Das Kunstwerk war unbezahlbar.', exEn: 'The work of art was priceless.', exHi: 'Kalaakriti anmol thi.', ex2: 'Sie haben ein wertvolles Kunstwerk gefunden.', ex2En: 'They\'ve found a valuable work of art.', ex2Hi: 'Unhein ek keemti kalaakriti mili hai.' },
    { de: 'Label', art: 'das', gender: 'n', plural: 'Labels', pos: 'noun', level: 'B2', register: 'both', en: 'label', hi: 'लेबल', ex: 'Das Label war schwer zu lesen.', exEn: 'The label was hard to read.', exHi: 'Label padhna mushkil tha.', ex2: 'Sie haben ein neues Label entworfen.', ex2En: 'They\'ve designed a new label.', ex2Hi: 'Unhone ek naya label banaaya hai.' },
    { de: 'Leinwand', art: 'die', gender: 'f', plural: 'Leinwände', pos: 'noun', level: 'B2', register: 'both', en: 'screen, canvas', hi: 'कैनवास', ex: 'Der Maler bemalte die Leinwand.', exEn: 'The painter painted the canvas.', exHi: 'Chitrakaar ne canvas par chitra banaaya.', ex2: 'Sie haben den Film auf großer Leinwand gesehen.', ex2En: 'They\'ve watched the film on the big screen.', ex2Hi: 'Unhone film bade screen par dekhi hai.' },
    { de: 'Malerei', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'painting, fine art', hi: 'चित्रकला', ex: 'Die Sammlung war arm an moderner Malerei.', exEn: 'The collection was poor in modern painting.', exHi: 'Sangrah aadhunik chitrakala mein kami waala tha.', ex2: 'Sie hat Malerei studiert.', ex2En: 'She\'s studied painting.', ex2Hi: 'Usne chitrakala ka adhyayan kiya hai.' },
    { de: 'Malereiprofessor/in', art: 'der/die', gender: 'm/f', plural: 'Malereiprofessoren/innen', pos: 'noun', level: 'B2', register: 'written', en: 'painting professor', hi: 'चित्रकला प्रोफेसर', ex: 'Der Malereiprofessor lehrte seit zwanzig Jahren.', exEn: 'The painting professor had taught for twenty years.', exHi: 'Chitrakala professor bees saalon se padha raha tha.', ex2: 'Sie ist Malereiprofessorin geworden.', ex2En: 'She\'s become a painting professor.', ex2Hi: 'Woh chitrakala professor ban gayi hai.' },
    { de: 'Meisterschüler/in', art: 'der/die', gender: 'm/f', plural: 'Meisterschüler/innen', pos: 'noun', level: 'B2', register: 'written', en: 'master student', hi: 'मास्टर छात्र', ex: 'Der Meisterschüler zeigte großes Talent.', exEn: 'The master student showed great talent.', exHi: 'Master chhaatra ne badi pratibha dikhaayi.', ex2: 'Sie ist seine beste Meisterschülerin.', ex2En: 'She\'s his best master student.', ex2Hi: 'Woh uski sabse achhi master chhaatra hai.' },
    { de: 'Monotonie', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'monotony', hi: 'नीरसता', ex: 'Die Monotonie des Alltags machte sie müde.', exEn: 'The monotony of everyday life tired her.', exHi: 'Roz-marra ki neersata ne use thaka diya.', ex2: 'Sie haben die Monotonie durchbrochen.', ex2En: 'They\'ve broken the monotony.', ex2Hi: 'Unhone neersata todi hai.' },
    { de: 'Motiv', art: 'das', gender: 'n', plural: 'Motive', pos: 'noun', level: 'B2', register: 'both', en: 'motif, motive', hi: 'रूपांकन, उद्देश्य', ex: 'Das Motiv des Gemäldes war eine Alltagsszene.', exEn: 'The motif of the painting was an everyday scene.', exHi: 'Chitrakaari ka roopaankan roz-marra ka drishya tha.', ex2: 'Sie haben nach seinem Motiv gefragt.', ex2En: 'They\'ve asked about his motive.', ex2Hi: 'Unhone uske uddeshya ke baare mein poochha hai.' },
    { de: 'Muttersprachler/in', art: 'der/die', gender: 'm/f', plural: 'Muttersprachler/innen', pos: 'noun', level: 'B2', register: 'both', en: 'native speaker', hi: 'मातृभाषी', ex: 'Sie sprach wie eine Muttersprachlerin.', exEn: 'She spoke like a native speaker.', exHi: 'Woh matribhaashi jaisi bolti thi.', ex2: 'Er hat mit einem Muttersprachler geübt.', ex2En: 'He\'s practised with a native speaker.', ex2Hi: 'Usne ek matribhaashi ke saath abhyaas kiya hai.' },
    { de: 'Mythos', art: 'der', gender: 'm', plural: 'Mythen', pos: 'noun', level: 'B2', register: 'written', en: 'myth', hi: 'मिथक', ex: 'Der Mythos umgab das Gemälde.', exEn: 'The myth surrounded the painting.', exHi: 'Mithak ne chitrakaari ko ghera hua tha.', ex2: 'Sie haben den Mythos untersucht.', ex2En: 'They\'ve examined the myth.', ex2Hi: 'Unhone mithak ki jaanch ki hai.' },
    { de: 'Palast', art: 'der', gender: 'm', plural: 'Paläste', pos: 'noun', level: 'B2', register: 'written', en: 'palace', hi: 'महल', ex: 'Der Palast gehört zum Welterbe.', exEn: 'The palace belongs to the world heritage.', exHi: 'Mahal vishva dharohar mein shaamil hai.', ex2: 'Sie haben den Palast besichtigt.', ex2En: 'They\'ve toured the palace.', ex2Hi: 'Unhone mahal ka daura kiya hai.' },
    { de: 'Schicksalsschlag', art: 'der', gender: 'm', plural: 'Schicksalsschläge', pos: 'noun', level: 'B2', register: 'written', en: 'stroke of fate', hi: 'भाग्य का प्रहार', ex: 'Der Schicksalsschlag traf die Familie hart.', exEn: 'The stroke of fate hit the family hard.', exHi: 'Bhaagya ke prahaar ne parivaar ko kadi chot pahunchaayi.', ex2: 'Sie haben den Schicksalsschlag überwunden.', ex2En: 'They\'ve overcome the stroke of fate.', ex2Hi: 'Unhone bhaagya ke prahaar par kaabu paa liya hai.' },
    { de: 'Schließzylinder', art: 'der', gender: 'm', plural: 'Schließzylinder', pos: 'noun', level: 'B2', register: 'both', en: 'lock cylinder', hi: 'ताला सिलेंडर', ex: 'Der Schließzylinder war defekt.', exEn: 'The lock cylinder was defective.', exHi: 'Taala cylinder kharaab tha.', ex2: 'Sie haben den Schließzylinder ausgetauscht.', ex2En: 'They\'ve replaced the lock cylinder.', ex2Hi: 'Unhone taala cylinder badla hai.' },
    { de: 'Schlossbesucher/in', art: 'der/die', gender: 'm/f', plural: 'Schlossbesucher/innen', pos: 'noun', level: 'B2', register: 'written', en: 'palace visitor', hi: 'महल दर्शक', ex: 'Die Schlossbesucher waren beeindruckt.', exEn: 'The palace visitors were impressed.', exHi: 'Mahal darshak prabhaavit the.', ex2: 'Sie haben viele Schlossbesucher begrüßt.', ex2En: 'They\'ve welcomed many palace visitors.', ex2Hi: 'Unhone kai mahal darshakon ka swaagat kiya hai.' },
    { de: 'sozialistisch', pos: 'adjective', level: 'B2', register: 'written', en: 'socialist', hi: 'समाजवादी', ex: 'Das war eine sozialistische Regierung.', exEn: 'That was a socialist government.', exHi: 'Yeh ek samaajvaadi sarkaar thi.', ex2: 'Sie haben sozialistische Ideale vertreten.', ex2En: 'They\'ve represented socialist ideals.', ex2Hi: 'Unhone samaajvaadi aadarshon ka pratinidhitva kiya hai.' },
    { de: 'Sprachensterben', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'language death', hi: 'भाषा का लुप्त होना', ex: 'Das Sprachensterben besorgte die Forscher.', exEn: 'Language death worried the researchers.', exHi: 'Bhaasha ke lupt hone ne shodhkartaaon ko chintit kiya.', ex2: 'Sie haben über Sprachensterben geschrieben.', ex2En: 'They\'ve written about language death.', ex2Hi: 'Unhone bhaasha ke lupt hone par likha hai.' },
    { de: 'Sprachforscher/in', art: 'der/die', gender: 'm/f', plural: 'Sprachforscher/innen', pos: 'noun', level: 'B2', register: 'written', en: 'language researcher', hi: 'भाषा शोधकर्ता', ex: 'Der Sprachforscher untersuchte seltene Dialekte.', exEn: 'The language researcher studied rare dialects.', exHi: 'Bhaasha shodhkarta ne durlabh boliyon ka adhyayan kiya.', ex2: 'Sie ist eine bekannte Sprachforscherin.', ex2En: 'She\'s a well-known language researcher.', ex2Hi: 'Woh ek jaani-maani bhaasha shodhkarta hai.' },
    { de: 'Staatsgeschäfte', art: 'die', gender: 'plural', plural: '— (Pl.)', pos: 'noun', level: 'B2', register: 'written', en: 'affairs of state', hi: 'राजकीय मामले', ex: 'Der Kaiser kümmerte sich um die Staatsgeschäfte.', exEn: 'The emperor took care of the affairs of state.', exHi: 'Samraat ne raajkiya maamlon ka khyaal rakha.', ex2: 'Sie haben über die Staatsgeschäfte diskutiert.', ex2En: 'They\'ve discussed the affairs of state.', ex2Hi: 'Unhone raajkiya maamlon par charcha ki hai.' },
    { de: 'Summe', art: 'die', gender: 'f', plural: 'Summen', pos: 'noun', level: 'B2', register: 'both', en: 'sum', hi: 'योग', ex: 'Die Summe war beeindruckend hoch.', exEn: 'The sum was impressively high.', exHi: 'Yog prabhaavshaali roop se zyaada tha.', ex2: 'Sie haben die Summe berechnet.', ex2En: 'They\'ve calculated the sum.', ex2Hi: 'Unhone yog ki ganana ki hai.' },
    { de: 'surreal', pos: 'adjective', level: 'B2', register: 'written', en: 'surreal', hi: 'अतियथार्थवादी', ex: 'Das Bild wirkte surreal.', exEn: 'The picture seemed surreal.', exHi: 'Tasveer atiyathaarthavaadi lag rahi thi.', ex2: 'Sie haben surreale Elemente genutzt.', ex2En: 'They\'ve used surreal elements.', ex2Hi: 'Unhone atiyathaarthavaadi tatva use kiye hain.' },
    { de: 'Terrakottafliese', art: 'die', gender: 'f', plural: 'Terrakottafliesen', pos: 'noun', level: 'B2', register: 'written', en: 'terracotta tile', hi: 'टेराकोटा टाइल', ex: 'Der Boden war mit Terrakottafliesen bedeckt.', exEn: 'The floor was covered with terracotta tiles.', exHi: 'Farsh terracotta tiles se dhaka tha.', ex2: 'Sie haben Terrakottafliesen verlegt.', ex2En: 'They\'ve laid terracotta tiles.', ex2Hi: 'Unhone terracotta tiles lagaayi hain.' },
    { de: 'Unterhaltungswert', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'entertainment value', hi: 'मनोरंजन मूल्य', ex: 'Der Film hatte hohen Unterhaltungswert.', exEn: 'The film had high entertainment value.', exHi: 'Film ka manoranjan mulya zyaada tha.', ex2: 'Sie haben den Unterhaltungswert geschätzt.', ex2En: 'They\'ve valued the entertainment value.', ex2Hi: 'Unhone manoranjan mulya ki sarahna ki hai.' },
    { de: 'Vertreter/in', art: 'der/die', gender: 'm/f', plural: 'Vertreter/innen', pos: 'noun', level: 'B2', register: 'both', en: 'representative', hi: 'प्रतिनिधि', ex: 'Der Vertreter erklärte die Regeln.', exEn: 'The representative explained the rules.', exHi: 'Pratinidhi ne niyam samjhaaye.', ex2: 'Sie ist eine Vertreterin der Firma.', ex2En: 'She\'s a representative of the company.', ex2Hi: 'Woh company ki pratinidhi hai.' },
    { de: 'vordergründig', pos: 'adjective', level: 'B2', register: 'written', en: 'superficial, on the surface', hi: 'सतही', ex: 'Das war nur ein vordergründiges Argument.', exEn: 'That was only a superficial argument.', exHi: 'Yeh sirf ek satahi tark tha.', ex2: 'Sie haben vordergründige Probleme gelöst.', ex2En: 'They\'ve solved superficial problems.', ex2Hi: 'Unhone satahi samasyaayein suljhaayi hain.' },
    { de: 'Wende', art: 'die', gender: 'f', plural: 'Wenden', pos: 'noun', level: 'B2', register: 'written', en: 'turning point, change', hi: 'मोड़', ex: 'Die Wende veränderte das Land grundlegend.', exEn: 'The turning point fundamentally changed the country.', exHi: 'Mod ne desh ko moolik roop se badla.', ex2: 'Sie haben die Wende miterlebt.', ex2En: 'They\'ve witnessed the turning point.', ex2Hi: 'Unhone mod ka anubhav kiya hai.' },
    { de: 'Werbegrafik', art: 'die', gender: 'f', plural: 'Werbegrafiken', pos: 'noun', level: 'B2', register: 'written', en: 'advertising graphic', hi: 'विज्ञापन ग्राफिक', ex: 'Die Werbegrafik war auffällig gestaltet.', exEn: 'The advertising graphic was strikingly designed.', exHi: 'Vigyaapan graphic dhyaan-aakarshak roop se banaayi gayi thi.', ex2: 'Sie haben eine neue Werbegrafik entworfen.', ex2En: 'They\'ve designed a new advertising graphic.', ex2Hi: 'Unhone ek nayi vigyaapan graphic banaayi hai.' },
    { de: 'Zugunglück', art: 'das', gender: 'n', plural: 'Zugunglücke', pos: 'noun', level: 'B2', register: 'written', en: 'train accident', hi: 'ट्रेन दुर्घटना', ex: 'Das Zugunglück forderte viele Opfer.', exEn: 'The train accident claimed many victims.', exHi: 'Train durghatna mein kai peedit hue.', ex2: 'Sie haben über das Zugunglück berichtet.', ex2En: 'They\'ve reported on the train accident.', ex2Hi: 'Unhone train durghatna ke baare mein report ki hai.' },
    { de: 'zumeist', pos: 'adverb', level: 'B2', register: 'written', en: 'mostly', hi: 'ज़्यादातर', ex: 'Die Besucher waren zumeist Touristen.', exEn: 'The visitors were mostly tourists.', exHi: 'Darshak zyaadatar paryatak the.', ex2: 'Sie haben zumeist zugestimmt.', ex2En: 'They\'ve mostly agreed.', ex2Hi: 'Unhone zyaadatar sahmati di hai.' },
    { de: 'zumindest', pos: 'adverb', level: 'B2', register: 'both', en: 'at least', hi: 'कम से कम', ex: 'Sie ist frei von Fälschungen, zumindest.', exEn: 'It\'s free of forgeries, at least.', exHi: 'Yeh nakli kritiyon se mukt hai, kam se kam.', ex2: 'Er hat zumindest versucht zu helfen.', ex2En: 'He\'s at least tried to help.', ex2Hi: 'Usne kam se kam madad karne ki koshish ki hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was sind Adjektive mit Präpositionen?',
      body: [ 'Some German adjectives ALWAYS require a fixed preposition, completing the verb/noun/adjective trio.' ],
      table: {
        head: ['Wrong pairing', 'Correct pairing'],
        rows: [
          ['<span class="de">interessiert für</span>', '<span class="de">interessiert an</span>'],
          ['<span class="de">stolz an</span>', '<span class="de">stolz auf</span>']
        ]
      },
      hinglish: 'Verbs aur nouns ki tarah kuch adjectives bhi apna fixed preposition maangte hain. Isse yeh trio poora ho jaata hai \u2014 verb, noun aur adjective, teeno ki apni jodi hoti hai.'
    },
    {
      title: 'Master Table — die wichtigsten B2 Adjektive',
      body: [ 'Memorize each adjective together with its fixed preposition and case.' ],
      table: {
        head: ['Adjective', 'Preposition', 'Case'],
        rows: [
          ['interessiert', 'an', 'Dat.'],
          ['abhängig', 'von', 'Dat.'],
          ['überzeugt', 'von', 'Dat.'],
          ['zufrieden', 'mit', 'Dat.'],
          ['fertig', 'mit', 'Dat.'],
          ['stolz', 'auf', 'Akk.'],
          ['bekannt', 'für', 'Akk.'],
          ['geeignet', 'für', 'Akk.'],
          ['verantwortlich', 'für', 'Akk.'],
          ['neugierig', 'auf', 'Akk.'],
          ['reich', 'an', 'Dat.'],
          ['arm', 'an', 'Dat.'],
          ['frei', 'von', 'Dat.'],
          ['typisch', 'für', 'Akk.'],
          ['bereit', 'zu', 'Dat.'],
          ['fähig', 'zu', 'Dat.'],
          ['wichtig', 'für', 'Akk.'],
          ['notwendig', 'für', 'Akk.']
        ]
      },
      hinglish: 'Har adjective ko uske preposition aur case ke saath yaad karo \u2014 sirf "stolz" nahi, balki "stolz auf + Akkusativ".'
    },
    {
      title: 'Akkusativ vs Dativ',
      body: [ 'Sort each adjective by the case its fixed preposition requires.' ],
      table: {
        head: ['Dativ', 'Akkusativ'],
        rows: [
          ['abhängig von, überzeugt von, zufrieden mit, fertig mit, interessiert an, reich an, arm an, frei von, fähig zu, bereit zu', 'stolz auf, neugierig auf, bekannt für, geeignet für, verantwortlich für, typisch für, wichtig für, notwendig für']
        ]
      },
      hinglish: 'Adjectives ko case ke hisaab se do groups mein baant lo. Dhyaan do ki <b>f\u00fcr</b> aur <b>auf</b> wale Akkusativ lete hain, aur <b>von, mit, an, zu</b> wale Dativ.'
    },
    {
      title: 'Question Word Table',
      body: [ 'The question word matches the adjective\'s fixed preposition, just as with verbs and nouns.' ],
      table: {
        head: ['Adjective + Preposition', 'Question'],
        rows: [
          ['interessiert an', 'Woran?'],
          ['stolz auf', 'Worauf?'],
          ['zufrieden mit', 'Womit?'],
          ['überzeugt von', 'Wovon?'],
          ['abhängig von', 'Wovon?']
        ]
      },
      hinglish: 'Sawaal ka shabd adjective ki preposition se banta hai, bilkul verbs aur nouns jaisa \u2014 <b>an</b> se <b>Woran?</b>, <b>mit</b> se <b>Womit?</b>'
    },
    {
      title: 'Verb, Nomen und Adjektiv — derselbe Begriff, andere Präposition',
      body: [ 'Most word families keep the SAME preposition across verb, noun and adjective \u2014 so once you know one, you usually know all three. But you cannot rely on it: <i>sich interessieren</i> takes <b>f\u00fcr</b> while its noun and adjective both take <b>an</b>. Check the odd ones rather than assuming.' ],
      table: {
        head: ['Verb (Ch.40)', 'Noun (Ch.41)', 'Adjective (Ch.42)', 'Same?'],
        rows: [
          ['sich interessieren <b>für</b>', 'Interesse <b>an</b>', 'interessiert <b>an</b>', 'no — the verb differs'],
          ['abhängen <b>von</b>', 'Abhängigkeit <b>von</b>', 'abhängig <b>von</b>', 'yes'],
          ['teilnehmen <b>an</b>', 'Teilnahme <b>an</b>', 'beteiligt <b>an</b>', 'yes'],
          ['sich verantworten', 'Verantwortung <b>für</b>', 'verantwortlich <b>für</b>', 'yes']
        ]
      },
      hinglish: 'Achhi baat yeh hai ki zyada-tar word families mein verb, noun aur adjective ek hi preposition lete hain \u2014 ek pata ho to teeno pata ho jaate hain. Par ispar poora bharosa mat karo: <i>sich interessieren</i> <b>f\u00fcr</b> leta hai, jabki <b>Interesse</b> aur <b>interessiert</b> dono <b>an</b> lete hain. Aise exceptions alag se yaad rakho.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from guessing prepositions by analogy or across word types instead of memorizing the fixed pairing.' ],
      mistakes: [
        { wrong: 'Ich bin interessiert für Deutsch.', right: 'Ich bin interessiert an Deutsch.', why: 'The adjective "interessiert" pairs with "an", not "für" (unlike the verb "sich interessieren für").' },
        { wrong: 'Sie ist stolz von ihrem Sohn.', right: 'Sie ist stolz auf ihren Sohn.', why: '"stolz" always pairs with "auf" + Akkusativ.' },
        { wrong: 'Wir sind zufrieden über das Ergebnis.', right: 'Wir sind zufrieden mit dem Ergebnis.', why: '"zufrieden" always pairs with "mit" + Dativ.' },
        { wrong: 'Das Unternehmen ist abhängig auf Öl.', right: 'Das Unternehmen ist abhängig von Öl.', why: '"abhängig" always pairs with "von" + Dativ.' },
        { wrong: 'Anna ist bekannt von ihrer Forschung.', right: 'Anna ist bekannt für ihre Forschung.', why: '"bekannt" pairs with <b>f\u00fcr</b> + Akkusativ, so both the preposition and the ending change: f\u00fcr ihre, not von ihrer.' }
      ],
      hinglish: 'Yeh galtiyan aksar isliye hoti hain ki preposition ek word type se doosre par utha liya jaata hai, ya English dekh kar guess kar liya jaata hai. Har jodi ko alag se yaad karna padta hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Adjective-preposition combinations appear constantly in business German, university, formal emails, and Goethe B2 texts.' ],
      note: 'Memory trick: Don\'t memorize "interessiert" — memorize "interessiert an". Don\'t memorize "stolz" — memorize "stolz auf".',
      hinglish: 'Yeh combinations business German, university aur formal emails mein bahut aate hain \u2014 Goethe B2 ki writing mein inse kaafi farak padta hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Feuilleton: Ein Galerist über den Mythos des Meisterwerks',
    titleEn: 'Arts feature: a gallerist on the myth of the masterpiece',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Galerist', role: 'plain', en: 'gallerist', hi: 'गैलरी मालिक', type: 'Noun · masc.', why: 'der/die Galerist/in (this chapter).' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'stolz', role: 'plain', en: 'proud', hi: 'गर्वित', type: 'Adjective' },
      { w: 'auf', role: 'plain', en: 'of', hi: 'पर', type: 'Preposition · Akk. (Adjektivpräposition)', why: '"stolz auf" + Akkusativ: a fixed adjective-preposition pair (this chapter).' },
      { w: 'das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'zurückgekehrte', role: 'plain', en: 'returned', hi: 'लौटा हुआ', type: 'Adjective (Partizip)' },
      { w: 'Kunstwerk', role: 'plain', en: 'work of art (Satzende)', hi: 'कलाकृति (Satzende)', type: 'Noun · neut.', why: 'das Kunstwerk (this chapter).' },
      { w: '.', plain: true },
      { w: '„Viele', role: 'plain', en: '"Many', hi: '"कई', type: 'Adjective' },
      { w: 'Muttersprachler', role: 'plain', en: 'native speakers', hi: 'मातृभाषी', type: 'Noun · plural', why: 'der/die Muttersprachler/in (this chapter).' },
      { w: 'sind', role: 'plain', en: 'are', hi: 'हैं', type: 'Verb · sein' },
      { w: 'überrascht', role: 'plain', en: 'surprised', hi: 'हैरान', type: 'Adjective' },
      { w: 'von', role: 'plain', en: 'by', hi: 'से', type: 'Preposition · Dat. (Adjektivpräposition)', why: '"überrascht von" + Dativ: another fixed adjective-preposition pair (this chapter).' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Geschichte', role: 'plain', en: 'story (Satzende)', hi: 'कहानी (Satzende)', type: 'Noun · fem.' },
      { w: 'dahinter', role: 'plain', en: 'behind it (Satzende)', hi: 'इसके पीछे (Satzende)', type: 'Adverb' },
      { w: '“', plain: true },
      { w: ',', plain: true },
      { w: 'sagt', role: 'plain', en: 'says', hi: 'कहता है', type: 'Verb · sagen' },
      { w: 'er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Mythos', role: 'plain', en: 'myth', hi: 'मिथक', type: 'Noun · masc.', why: 'der Mythos (this chapter).' },
      { w: 'vom', role: 'plain', en: 'of the', hi: 'का', type: 'Contraction · von dem' },
      { w: 'genialen', role: 'plain', en: 'brilliant', hi: 'प्रतिभाशाली', type: 'Adjective' },
      { w: 'Künstler', role: 'plain', en: 'artist (Satzende)', hi: 'कलाकार (Satzende)', type: 'Noun · masc.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'reich', role: 'plain', en: 'rich', hi: 'समृद्ध', type: 'Adjective' },
      { w: 'an', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat. (Adjektivpräposition)', why: '"reich an" + Dativ: a further fixed adjective-preposition pair (this chapter).' },
      { w: 'Legenden', role: 'plain', en: 'legends (Satzende)', hi: 'किंवदंतियों (Satzende)', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'aber', role: 'plain', en: 'but', hi: 'लेकिन', type: 'Conjunction' },
      { w: 'arm', role: 'plain', en: 'poor', hi: 'ग़रीब', type: 'Adjective' },
      { w: 'an', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat. (Adjektivpräposition)' },
      { w: 'Fakten', role: 'plain', en: 'facts (Satzende)', hi: 'तथ्यों (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Galerist', role: 'plain', en: 'gallerist', hi: 'गैलरी मालिक', type: 'Noun · masc.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'davon', role: 'plain', en: 'of this', hi: 'इसके', type: 'Pronominaladverb' },
      { w: 'überzeugt', role: 'plain', en: 'convinced (Satzende)', hi: 'क़ायल (Satzende)', type: 'Adjective', why: '"überzeugt von" + Dativ: the pronominal form davon substitutes for the von-phrase (this chapter).' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'Kunst', role: 'plain', en: 'art', hi: 'कला', type: 'Noun · fem.' },
      { w: 'am', role: 'plain', en: 'the most', hi: 'सबसे', type: 'Superlativpartikel' },
      { w: 'wertvollsten', role: 'plain', en: 'valuable (Satzende)', hi: 'मूल्यवान (Satzende)', type: 'Adjective · Superlativ' },
      { w: 'ist', role: 'plain', en: 'is (Satzende)', hi: 'है (Satzende)', type: 'Verb · sein (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'wenn', role: 'plain', en: 'when', hi: 'जब', type: 'Konjunktion' },
      { w: 'sie', role: 'plain', en: 'it', hi: 'यह', type: 'Pronoun' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'alle', role: 'plain', en: 'everyone (Satzende)', hi: 'सभी (Satzende)', type: 'Pronoun' },
      { w: 'zugänglich', role: 'plain', en: 'accessible (Satzende)', hi: 'सुलभ (Satzende)', type: 'Adjective' },
      { w: 'ist', role: 'plain', en: 'is (Satzende)', hi: 'है (Satzende)', type: 'Verb · sein (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'selbst', role: 'plain', en: 'himself', hi: 'ख़ुद', type: 'Pronoun' },
      { w: 'bleibt', role: 'plain', en: 'remains', hi: 'रहता है', type: 'Verb · bleiben' },
      { w: 'bescheiden', role: 'plain', en: 'modest', hi: 'विनम्र', type: 'Adjective' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'überzeugt', role: 'r-verb', en: 'convinced (Adjektiv + Präposition)', hi: 'क़ायल है', type: 'Adjektiv · überzeugt von', why: 'überzeugt von + Dat.: fixed adjective + preposition (this chapter).' },
      { w: 'davon', role: 'plain', en: 'of it', hi: 'इस बात से', type: 'Pronominaladverb' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'Kunst', role: 'plain', en: 'art', hi: 'कला', type: 'Noun · fem.' },
      { w: 'nie', role: 'plain', en: 'never', hi: 'कभी नहीं', type: 'Adverb' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'केवल', type: 'Adverb' },
      { w: 'einer', role: 'plain', en: 'to a (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'einzigen', role: 'plain', en: 'single', hi: 'अकेली', type: 'Adjective' },
      { w: 'Person', role: 'plain', en: 'person (Satzende)', hi: 'व्यक्ति (Satzende)', type: 'Noun · fem.' },
      { w: 'gehören', role: 'plain', en: 'belong (Satzende)', hi: 'की होनी चाहिए (Satzende)', type: 'Verb · Infinitiv (Nebensatz, Satzende)' },
      { w: 'sollte', role: 'plain', en: 'should (Satzende)', hi: '(Satzende)', type: 'Verb · Modalverb (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Sein', role: 'plain', en: 'his', hi: 'उसका', type: 'Possessivartikel' },
      { w: 'Museum', role: 'plain', en: 'museum', hi: 'संग्रहालय', type: 'Noun · neut.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'daher', role: 'plain', en: 'therefore', hi: 'इसलिए', type: 'Adverb' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk. (Adjektivpräposition)', why: '"kostenlos für" + Akkusativ: a further fixed adjective-preposition pair (this chapter).' },
      { w: 'alle', role: 'plain', en: 'everyone', hi: 'सभी', type: 'Pronoun' },
      { w: 'unter', role: 'plain', en: 'under', hi: 'से कम', type: 'Preposition · Dat.' },
      { w: 'achtzehn', role: 'plain', en: 'eighteen (Satzende)', hi: 'अठारह (Satzende)', type: 'Number' },
      { w: 'kostenlos', role: 'plain', en: 'free of charge (Satzende)', hi: 'मुफ़्त (Satzende)', type: 'Adjective' },
      { w: '.', plain: true }
    ],
    translation: 'The gallerist is proud of the returned work of art. "Many native speakers are surprised by the story behind it," he says. The myth of the brilliant artist is rich in legends, but poor in facts. The gallerist is convinced that art is most valuable when it is accessible to everyone. He himself remains modest and is convinced that art should never belong to only one single person. His museum is therefore free of charge for everyone under eighteen.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_042_L001', speaker: 'Kerstin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich bin so stolz auf diesen Künstler, er hat wirklich alles selbst organisiert.', en: 'Timo, I\'m so proud of this artist, he really organized everything himself.' },
      { id: 'B2_042_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Verständlich. Ich bin eher neugierig auf die nächste Ausstellung.', en: 'Understandable. I\'m rather curious about the next exhibition.' },
      { id: 'B2_042_L003', speaker: 'Kerstin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Bist du zufrieden mit den Bildern hier?', en: 'Are you satisfied with the pictures here?' },
      { id: 'B2_042_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Sehr, aber ich bin auch gespannt auf das, was noch kommt.', en: 'Very much so, but I\'m also excited about what\'s still to come.' }
    ],
    transcript: 'Timo, ich bin so stolz auf diesen Künstler, er hat wirklich alles selbst organisiert. Verständlich. Ich bin eher neugierig auf die nächste Ausstellung. Bist du zufrieden mit den Bildern hier? Sehr, aber ich bin auch gespannt auf das, was noch kommt.',
    translation: 'Timo, I\'m so proud of this artist, he really organized everything himself. Understandable. I\'m rather curious about the next exhibition. Are you satisfied with the pictures here? Very much so, but I\'m also excited about what\'s still to come.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'bin' },
      { w: 'so' },
      { w: 'stolz' },
      { w: 'auf' },
      { w: 'diesen' },
      { w: 'Künstler' },
      { w: ',', plain: true },
      { w: 'er' },
      { w: 'hat' },
      { w: 'wirklich' },
      { w: 'alles' },
      { w: 'selbst' },
      { w: 'organisiert' },
      { w: '.', plain: true },
      { w: 'Verständlich' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'bin' },
      { w: 'eher' },
      { w: 'neugierig' },
      { w: 'auf' },
      { w: 'die' },
      { w: 'nächste' },
      { w: 'Ausstellung' },
      { w: '.', plain: true },
      { w: 'Bist' },
      { w: 'du' },
      { w: 'zufrieden' },
      { w: 'mit' },
      { w: 'den' },
      { w: 'Bildern' },
      { w: 'hier' },
      { w: '?', plain: true },
      { w: 'Sehr' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'bin' },
      { w: 'auch' },
      { w: 'gespannt' },
      { w: 'auf' },
      { w: 'das' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'noch' },
      { w: 'kommt' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Worauf ist Kerstin stolz?', qEn: 'What is Kerstin proud of?', options: ['dem Museum', 'dem Künstler', 'dem Wetter', 'dem Essen'], optionsEn: ['the museum', 'the artist', 'the weather', 'the food'], answer: 1,
        explain: '"Ich bin so stolz auf diesen Künstler."' },
      { q: 'Worauf ist Timo neugierig?', qEn: 'What is Timo curious about?', options: ['die Preise', 'die nächste Ausstellung', 'das Personal', 'die Öffnungszeiten'], optionsEn: ['the prices', 'the next exhibition', 'the staff', 'the opening hours'], answer: 1,
        explain: '"Ich bin eher neugierig auf die nächste Ausstellung."' }
    ]
  },

  speaking: [
    { task: "Ein Freund fragt, wie du den Künstler findest.", taskEn: "A friend asks what you think of the artist.", de: "Ich bin so stolz auf diesen Künstler, er hat alles selbst organisiert.", en: "I'm so proud of this artist, he organised everything himself." },
    { task: "Er ist neugierig auf die nächste Ausstellung. Antworte.", taskEn: "He's curious about the next exhibition. Answer.", de: "Ich bin auch neugierig auf die neuen großformatigen Bilder.", en: "I'm curious about the new large-format pictures too." },
    { task: "Die Galeristin fragt, wofür du im Team verantwortlich bist.", taskEn: "The gallery owner asks what you're responsible for in the team.", de: "Ich bin verantwortlich für die Führungen und den Aufbau.", en: "I'm responsible for the tours and the installation." },
    { task: "Eine Besucherin fragt, ob die Bilder typisch für den Maler sind.", taskEn: "A visitor asks whether the pictures are typical of the painter.", de: "Ja, die Alltagsszenen sind charakteristisch für seine Arbeit.", en: "Yes, the everyday scenes are characteristic of his work." },
    { task: "Rollenspiel: Ihr sprecht mit dem Entdecker des Künstlers.", taskEn: "Role-play: you talk to the artist's discoverer.", de: "Ich bin an seinen frühen Werken interessiert. — Und wir sind abhängig von privaten Sammlern.", en: "I'm interested in his early works. — And we're dependent on private collectors." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Formal email (6-8 sentences): Write a job application using interessiert an, geeignet für, and bereit zu.\n\nTASK 2 — Opinion text (6-8 sentences): Discuss a company or topic using bekannt für, abhängig von, zufrieden mit, and wichtig für naturally.',
    starters: ['Ich bin interessiert an …', 'Das Unternehmen ist bekannt für …'],
    placeholder: 'Ich bin sehr interessiert an dieser Stelle. Ich bin geeignet für …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which preposition is fixed with "interessiert"?',
      options: ['an', 'für', 'über'],
      answer: 0,
      explain: 'The adjective "interessiert" always takes "an" + Dativ, never "für".'
    },
    gap: {
      sentence: ['Rohan ist stolz ', ' seine Arbeit.'],
      gaps: [ { answer: 'auf', accepts: ['auf'] } ],
      explain: '"stolz" always requires "auf" + Akkusativ.'
    },
    match: {
      q: 'Match each adjective to its fixed preposition and case.',
      pairs: [
        { noun: 'interessiert', art: 'an + Dat.' },
        { noun: 'stolz', art: 'auf + Akk.' },
        { noun: 'abhängig', art: 'von + Dat.' },
        { noun: 'bekannt', art: 'für + Akk.' }
      ]
    },
    builder: {
      target: 'Build: "I am interested in modern art." (interessiert an)',
      bank: ['Ich', 'bin', 'interessiert', 'an', 'moderner', 'Kunst', '.'],
      answer: ['Ich', 'bin', 'interessiert', 'an', 'moderner', 'Kunst', '.'],
      roles: { 'interessiert': 'r-adj-prep', 'an': 'r-adj-prep' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich bin interessiert für Deutsch.',
      right: 'Ich bin interessiert an Deutsch.',
      explain: 'The adjective "interessiert" always pairs with "an" + Dativ, never "für".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What must always accompany an adjective like "stolz" or "interessiert"?', options: ['A fixed preposition', 'A modal verb', 'The Konjunktiv'], answer: 0,
      explain: 'Many German adjectives require a fixed preposition that never changes, just like verbs and nouns.' },
    { q: 'What case does "abhängig von" require?', options: ['Dativ', 'Akkusativ', 'Genitiv'], answer: 0,
      explain: '"abhängig von" is one of the Dativ adjective-preposition combinations.' },
    { q: 'What does "bekannt" pair with?', options: ['für', 'an', 'von'], answer: 0,
      explain: '"bekannt" always pairs with "für" + Akkusativ.' },
    { q: 'Does "interessiert an" use the same preposition as the verb "sich interessieren"?', options: ['No — the verb takes "für", the adjective takes "an"', 'Yes, always the same', 'Only in formal German'], answer: 0,
      explain: 'The same underlying idea can take a different preposition depending on word type.' },
    { q: 'What is the best strategy for learning these adjectives?', options: ['Learn adjective + preposition + case together', 'Learn only the adjective', 'Guess the preposition from English'], answer: 0,
      explain: 'These adjectives should always be learned as one unit: adjective + preposition + case.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-adj-prep', html: 'Many German adjectives require a FIXED preposition that never changes — learn adjective + preposition + case as one unit.' },
    { c: 'r-adj-prep', html: 'Most Akkusativ adjectives: stolz auf, bekannt für, verantwortlich für, neugierig auf. Most Dativ adjectives: interessiert an, abhängig von, zufrieden mit.' },
    { c: 'r-adj-prep', html: 'The same underlying idea can take a DIFFERENT preposition as verb, noun, or adjective — e.g. sich interessieren FÜR vs interessiert AN.' }
  ],
  revisionTips: [
    'Make flashcards with adjective + preposition + case together — never the adjective alone.',
    'Compare each adjective-preposition pair with its matching verb (Ch.40) and noun (Ch.41) forms — notice which prepositions change.',
    'You\'ve now completed the full verb/noun/adjective preposition trio — review all three chapters together for the strongest retention.'
  ]
};

window.CHAPTER = CHAPTER;
