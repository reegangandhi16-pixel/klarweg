/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 1 · Chapter 3
   "Der Nominativ"
   This object is the single source the page renders from.
   Swap this file to generate any other chapter — markup,
   nav, outcomes, and summary all derive from CHAPTER.
============================================================ */
const CHAPTER = {
  id: 'a1-3-nominativ',
  phase: 'A1 · Phase 1',
  number: 3,
  title: 'Der Nominativ',
  titleEn: 'The Nominative Case',
  description: 'The nominative is the starting line of every German sentence — the case of the subject, the one doing the action. Master it and der/die/das stop feeling random.',
  xp: 150,
  time: 45,           // minutes
  difficulty: 'Beginner',
  nextChapter: { number: 4, title: 'Der Akkusativ', titleEn: 'The Accusative Case' },

  // ============================================================
  //  RENDERER CONTENT — chapter-specific copy consumed by the
  //  generic renderer (chapter-app.js). Adding a new chapter means
  //  supplying these fields; the renderer holds NO chapter content.
  // ============================================================

  // Overview "one idea" card (eyebrow + HTML body, role spans allowed).
  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'If you remember one thing: the <span class="de r-subject">subject</span> of a German sentence is in the <span class="de r-subject">nominative</span> — find it by asking <span class="de r-question">Wer?</span> (who?) or <span class="de r-question">Was?</span> (what?).'
  },

  // Grammar "Watch First" embedded animation. Omit/null to skip the block.
  heroAnimationPath: 'nominativ-hero-animation.html',

  // Writing AI-tutor prompt. "{{TEXT}}" is replaced with the learner's input.
  writingTutorPrompt:
    'You are a warm, encouraging German (A1) writing tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is the NOMINATIVE case (der/die/das + subject). The learner wrote the German text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'GRAMMAR ACCURACY RULES — follow these exactly; never state anything that contradicts them:\n' +
    '- Definite articles by case:\n' +
    '  • Masculine: NOM der / AKK den / DAT dem.  (Only the masculine article changes between nominative and accusative.)\n' +
    '  • Feminine: NOM die / AKK die / DAT der.  (Feminine die does NOT change between nominative and accusative.)\n' +
    '  • Neuter: NOM das / AKK das / DAT dem.  (Neuter das does NOT change between nominative and accusative.)\n' +
    '  • Plural: NOM die / AKK die / DAT den.\n' +
    '- Indefinite articles: Masculine NOM ein / AKK einen. Feminine NOM eine / AKK eine (unchanged). Neuter NOM ein / AKK ein (unchanged).\n' +
    '- Therefore NEVER claim a feminine or neuter article changes form because of the accusative. "die Pizza"/"eine Pizza" are identical in nominative and accusative; do not present them as an accusative change.\n' +
    '- Only cite an article CHANGE as evidence of the accusative for MASCULINE nouns (e.g. der Apfel → den Apfel, ein Apfel → einen Apfel).\n' +
    '- Verbs like essen, trinken, lesen, haben take an accusative object, but that does not alter feminine/neuter article forms.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short, grammatically correct plain-English why. If there are no errors, write a single <li>No grammar errors — well done.</li>\n' +
    '3) <p><b>Nominative check:</b> one sentence on whether the subjects/articles (der/die/das) are correct.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and grammatically precise. Do not invent text the learner did not write.',

  // Quiz result recommendations by performance tier.
  quizRecommendation: {
    high: 'Excellent — you\'ve got the nominative. Move on to <span class="de">Der Akkusativ</span>.',
    mid: 'Good. Re-read the article table once, then continue.',
    low: 'Worth another pass — revisit the Grammar section, then retake.'
  },

  // Live Sentence Parser concept sentence (tokens drive role colours).
  parserSentence: [
    { w: 'Der', role: 'r-article' }, { w: 'Mann', role: 'r-subject' },
    { w: 'liest', role: 'r-verb' }, { w: 'ein', role: 'r-article' },
    { w: 'Buch', role: 'r-object' }
  ],

  // Exact curriculum sections — never invented, never reordered.
  // Overview + Summary are auto wrappers (auto:true), not curriculum sections.
  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the whole chapter at a glance before you begin.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn 12 high-frequency nouns with their correct article — the gender is the grammar.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Understand what the nominative is, when it appears, and how der/die/das/die behave.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a short text and tap any word to see its role, case, and meaning.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Hear the nominative in natural speech, then answer what you understood.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say three subject sentences out loud and check your pronunciation.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write three sentences that each start with a clear nominative subject.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the article forms with instant feedback across four exercise types.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 150 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  // ---------- Study Resources (UI only — PDFs uploaded manually later) ----------
  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'Complete chapter vocabulary including translations, genders, plurals, and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Additional exercises, writing tasks, speaking practice, and self-study activities.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'Grammar explanations, rules, structures, examples, exceptions, and revision tables.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  // ---------- Learning outcomes (Slide 3) ----------
  outcomes: [
    { de: 'der · die · das', text: 'Know the three nominative articles and which gender each marks' },
    { de: '12 Nomen', text: 'Learn 12 everyday nouns with their gender' },
    { de: 'Wer? / Was?', text: 'Identify the subject by asking <i>who?</i> or <i>what?</i>' },
    { de: 'die (Plural)', text: 'Recognise that every plural takes <i>die</i> in the nominative' },
    { de: 'Lesen & Hören', text: 'Read and hear the nominative used in natural German' }
  ],

  // ---------- Vocabulary (12 words) ----------
  vocab: [
    { de: 'Mann', art: 'der', gender: 'm', plural: 'Männer', pos: 'noun', en: 'man', hi: 'आदमी',
      ex: 'Der Mann liest die Zeitung.', exEn: 'The man reads the newspaper.' },
    { de: 'Frau', art: 'die', gender: 'f', plural: 'Frauen', pos: 'noun', en: 'woman', hi: 'औरत',
      ex: 'Die Frau trinkt Kaffee.', exEn: 'The woman drinks coffee.' },
    { de: 'Kind', art: 'das', gender: 'n', plural: 'Kinder', pos: 'noun', en: 'child', hi: 'बच्चा',
      ex: 'Das Kind spielt im Park.', exEn: 'The child plays in the park.' },
    { de: 'Hund', art: 'der', gender: 'm', plural: 'Hunde', pos: 'noun', en: 'dog', hi: 'कुत्ता',
      ex: 'Der Hund schläft.', exEn: 'The dog is sleeping.' },
    { de: 'Katze', art: 'die', gender: 'f', plural: 'Katzen', pos: 'noun', en: 'cat', hi: 'बिल्ली',
      ex: 'Die Katze ist klein.', exEn: 'The cat is small.' },
    { de: 'Haus', art: 'das', gender: 'n', plural: 'Häuser', pos: 'noun', en: 'house', hi: 'घर',
      ex: 'Das Haus ist groß.', exEn: 'The house is big.' },
    { de: 'Tisch', art: 'der', gender: 'm', plural: 'Tische', pos: 'noun', en: 'table', hi: 'मेज़',
      ex: 'Der Tisch ist alt.', exEn: 'The table is old.' },
    { de: 'Lampe', art: 'die', gender: 'f', plural: 'Lampen', pos: 'noun', en: 'lamp', hi: 'दीपक',
      ex: 'Die Lampe leuchtet.', exEn: 'The lamp glows.' },
    { de: 'Buch', art: 'das', gender: 'n', plural: 'Bücher', pos: 'noun', en: 'book', hi: 'किताब',
      ex: 'Das Buch ist neu.', exEn: 'The book is new.' },
    { de: 'Lehrer', art: 'der', gender: 'm', plural: 'Lehrer', pos: 'noun', en: 'teacher (m)', hi: 'अध्यापक',
      ex: 'Der Lehrer erklärt die Regel.', exEn: 'The teacher explains the rule.' },
    { de: 'Schule', art: 'die', gender: 'f', plural: 'Schulen', pos: 'noun', en: 'school', hi: 'स्कूल',
      ex: 'Die Schule beginnt um acht.', exEn: 'The school begins at eight.' },
    { de: 'Auto', art: 'das', gender: 'n', plural: 'Autos', pos: 'noun', en: 'car', hi: 'गाड़ी',
      ex: 'Das Auto fährt schnell.', exEn: 'The car drives fast.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'What is the nominative?',
      body: [
        'The <b>nominative</b> (der Nominativ) is the case of the <span class="de r-subject">subject</span> — the person or thing <i>doing</i> the action of the sentence.',
        'To find it, ask <span class="de r-question">Wer?</span> (who?) for people or <span class="de r-question">Was?</span> (what?) for things. The answer is your nominative subject.',
        'Every complete German sentence has a nominative. It is the default form of every noun — the form you find in the dictionary.'
      ],
      example: [
        { html: '<span class="de r-subject">Der Hund</span> <span class="de r-verb">schläft</span>. → <i>Wer schläft? → der Hund.</i>' },
        { html: '<span class="de r-subject">Das Auto</span> <span class="de r-verb">fährt</span> <span class="de r-adverb">schnell</span>. → <i>Was fährt? → das Auto.</i>' }
      ],
      hinglish: 'Simple baat: <b>Nominativ</b> matlab sentence ka <b>karta</b> — jo kaam kar raha hai. Bas pucho <span class="de r-question">Wer?</span> (kaun?) ya <span class="de r-question">Was?</span> (kya?) — jo jawab aayega, wahi subject hai aur usi ko hum <span class="de r-subject">blue</span> colour dete hain.'
    },
    {
      title: 'The article table — der / die / das / die',
      body: [
        'In the nominative, the definite article changes with the noun\'s gender. Learn the noun and its article together — the article <i>is</i> the gender.'
      ],
      table: {
        head: ['Gender', 'Definite (the)', 'Indefinite (a)', 'Example'],
        rows: [
          ['Masculine', 'der', 'ein', '<span class="de r-article">der</span> Mann'],
          ['Feminine', 'die', 'eine', '<span class="de r-article">die</span> Frau'],
          ['Neuter', 'das', 'ein', '<span class="de r-article">das</span> Kind'],
          ['Plural', 'die', '— (keine)', '<span class="de r-article">die</span> Kinder']
        ]
      },
      note: 'Notice: plural is always <b>die</b>, regardless of the singular gender. And there is no indefinite plural — "a children" makes no sense in any language.',
      hinglish: 'Hindi mein "the" nahi hota, isliye <b>der/die/das</b> shuru mein ajeeb lagta hai. Trick yeh hai: noun ko hamesha uske article ke saath yaad karo — sirf "Mann" mat ratto, "<b>der</b> Mann" ratto. Article hi gender batata hai. Aur plural mein hamesha <b>die</b> — chahe singular kuch bhi ho.'
    },
    {
      title: 'Common mistakes (for Hindi & English speakers)',
      body: [ 'These three trip up almost every beginner. Spot them now and you save weeks.' ],
      mistakes: [
        { wrong: 'Das Mann liest.', right: 'Der Mann liest.', why: 'Mann is masculine → der, not das.' },
        { wrong: 'Die Buch ist neu.', right: 'Das Buch ist neu.', why: 'Buch is neuter → das. Gender is not guessable from meaning.' },
        { wrong: 'Der Kinder spielen.', right: 'Die Kinder spielen.', why: 'Plural is always die in the nominative.' }
      ],
      hinglish: 'Yaad rakho: gender meaning se guess nahi kar sakte. "Mädchen" (ladki) bhi neuter hai — <b>das</b> Mädchen! Isliye galti tab hoti hai jab hum Hindi/English logic lagate hain. Har naye noun ke saath uska article ratta maaro, phir yeh teen galtiyan kabhi nahi hongi.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  // tokens: {w, role?, case?, en?, hi?, type?, ex?}  role drives color.
  reading: {
    title: 'Ein Tag zu Hause',
    titleEn: 'A day at home',
    tokens: [
      { w: 'Der', role: 'r-article', en: 'the', hi: 'वह', pron: 'dair', type: 'Article · masc. nom.', why: 'Masculine nouns take <b>der</b> in the nominative.', ex: 'Der Mann ist hier.', exEn: 'The man is here.' },
      { w: 'Mann', role: 'r-subject', case: 'Nominativ', en: 'man', hi: 'आदमी', pron: 'mahn', type: 'Noun · subject', why: 'It is the one doing the action — so it sits in the nominative.', ex: 'Der Mann liest.', exEn: 'The man reads.' },
      { w: 'liest', role: 'r-verb', en: 'reads', hi: 'पढ़ता है', pron: 'leest', type: 'Verb · 3rd person', why: 'From <i>lesen</i>: for er/sie/es, e changes to ie and -t is added.', ex: 'Er liest ein Buch.', exEn: 'He reads a book.', conj: { praesens: 'liest', praeteritum: 'las', perfekt: 'hat gelesen' }, advanced: { synonyms: ['vorlesen', 'durchlesen'], opposites: ['schreiben'], collocations: ['ein Buch lesen', 'die Zeitung lesen', 'laut lesen'] } },
      { w: 'ein', role: 'r-article', en: 'a', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.', why: 'Indefinite article for a neuter object — same form as masculine here.', ex: 'ein Buch', exEn: 'a book' },
      { w: 'Buch', role: 'r-object', case: 'Akkusativ', en: 'book', hi: 'किताब', pron: 'bookh', type: 'Noun · object', why: 'It receives the action of the verb — that makes it the accusative object.', ex: 'Das Buch ist neu.', exEn: 'The book is new.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-article', en: 'the', hi: 'वह', pron: 'dee', type: 'Article · fem. nom.', why: 'Feminine (and all plural) nouns take <b>die</b> in the nominative.', ex: 'Die Frau ist da.', exEn: 'The woman is there.' },
      { w: 'Frau', role: 'r-subject', case: 'Nominativ', en: 'woman', hi: 'औरत', pron: 'frow', type: 'Noun · subject', why: 'The doer of the action — nominative case.', ex: 'Die Frau trinkt Tee.', exEn: 'The woman drinks tea.' },
      { w: 'trinkt', role: 'r-verb', en: 'drinks', hi: 'पीती है', pron: 'trinkt', type: 'Verb · 3rd person', why: 'From <i>trinken</i>: regular verb, -t ending for er/sie/es.', ex: 'Sie trinkt Kaffee.', exEn: 'She drinks coffee.', conj: { praesens: 'trinkt', praeteritum: 'trank', perfekt: 'hat getrunken' }, advanced: { synonyms: ['schlucken'], opposites: ['essen'], collocations: ['Kaffee trinken', 'Wasser trinken', 'etwas trinken gehen'] } },
      { w: 'Kaffee', role: 'r-object', case: 'Akkusativ', en: 'coffee', hi: 'कॉफ़ी', pron: 'KA-fey', type: 'Noun · object', why: 'The thing being drunk — accusative object.', ex: 'Der Kaffee ist heiß.', exEn: 'The coffee is hot.' },
      { w: '.', plain: true },
      { w: 'Das', role: 'r-article', en: 'the', hi: 'वह', pron: 'dahs', type: 'Article · neut. nom.', why: 'Neuter nouns take <b>das</b> in the nominative.', ex: 'Das Kind spielt.', exEn: 'The child plays.' },
      { w: 'Kind', role: 'r-subject', case: 'Nominativ', en: 'child', hi: 'बच्चा', pron: 'kint', type: 'Noun · subject', why: 'The doer of the action — nominative case.', ex: 'Das Kind lacht.', exEn: 'The child laughs.' },
      { w: 'spielt', role: 'r-verb', en: 'plays', hi: 'खेलता है', pron: 'shpeelt', type: 'Verb · 3rd person', why: 'From <i>spielen</i>: regular -t ending for er/sie/es.', ex: 'Es spielt im Garten.', exEn: 'It plays in the garden.', conj: { praesens: 'spielt', praeteritum: 'spielte', perfekt: 'hat gespielt' }, advanced: { synonyms: ['mitspielen'], opposites: ['arbeiten'], collocations: ['Fußball spielen', 'Klavier spielen', 'im Garten spielen'] } },
      { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + dative', why: 'Contraction of <i>in dem</i> — this preposition takes the dative.', ex: 'im Garten', exEn: 'in the garden' },
      { w: 'Garten', role: 'r-place', case: 'Dativ', en: 'garden', hi: 'बगीचा', pron: 'GAR-ten', type: 'Noun · place', why: 'A place after <i>im</i> sits in the dative case.', ex: 'Der Garten ist grün.', exEn: 'The garden is green.' },
      { w: '.', plain: true },
      { w: 'Das', role: 'r-article', en: 'the', hi: 'वह', pron: 'dahs', type: 'Article · neut. nom.', why: 'Neuter nouns take <b>das</b> in the nominative.', ex: 'Das Haus ist alt.', exEn: 'The house is old.' },
      { w: 'Haus', role: 'r-subject', case: 'Nominativ', en: 'house', hi: 'घर', pron: 'house', type: 'Noun · subject', why: 'The thing being described — subject in the nominative.', ex: 'Das Haus ist weiß.', exEn: 'The house is white.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein', why: 'From <i>sein</i> (to be) — completely irregular, must be memorised.', ex: 'Er ist hier.', exEn: 'He is here.', conj: { praesens: 'ist', praeteritum: 'war', perfekt: 'ist gewesen' }, advanced: { synonyms: ['existiert'], opposites: [], collocations: ['ist da', 'ist fertig', 'ist gut'] } },
      { w: 'groß', role: 'r-adjective', en: 'big, large', hi: 'बड़ा', pron: 'grohss', type: 'Adjective', why: 'A predicate adjective after <i>ist</i> takes no ending — it stays in its base form.', ex: 'Das Haus ist groß.', exEn: 'The house is big.', compare: { comparative: 'größer', superlative: 'am größten' }, advanced: { synonyms: ['riesig', 'gewaltig'], opposites: ['klein', 'winzig'], collocations: ['ein großes Haus', 'großer Erfolg', 'groß werden'] } },
      { w: '.', plain: true }
    ],
    translation: 'The man reads a book. The woman drinks coffee. The child plays in the garden. The house is big. — Notice how each sentence begins with a coloured subject in the nominative: der Mann, die Frau, das Kind, das Haus.'
  },

  // ---------- Listening ----------
  // Transcript built from sentences that have generated MP3s (see manifest.json)
  // so playback is fully static — each sentence plays its real audio file.
  listening: {
    transcript: 'Ich heiße Anna. Der Mann liest ein Buch. Der Mann trinkt Kaffee. Sie liest dem Kind eine Geschichte.',
    translation: 'My name is Anna. The man reads a book. The man drinks coffee. She reads the child a story.',
    questions: [
      { q: 'Was liest der Mann?', qEn: 'What does the man read?', options: ['Eine Zeitung', 'Ein Buch', 'Einen Brief', 'Nichts'], optionsEn: ['a newspaper', 'a book', 'a letter', 'nothing'], answer: 1,
        explain: '"Der Mann liest ein Buch" — the man reads a book.' },
      { q: 'Wer liest dem Kind eine Geschichte vor?', qEn: 'Who reads a story to the child?', options: ['Anna', 'Der Mann', 'Sie (die Frau)', 'Der Lehrer'], optionsEn: ['Anna', 'the man', 'she (the woman)', 'the teacher'], answer: 2,
        explain: '"Sie liest dem Kind eine Geschichte" — she reads the child a story.' }
    ]
  },

  // ---------- Speaking prompts ----------
  speaking: [
    { de: 'Der Mann liest ein Buch.', en: 'The man reads a book.' },
    { de: 'Die Frau trinkt Kaffee.', en: 'The woman drinks coffee.' },
    { de: 'Das Kind spielt im Garten.', en: 'The child plays in the garden.' }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write three sentences. Each must start with a nominative subject (der / die / das + a noun) followed by a verb. Use words from this chapter.',
    starters: ['Der …', 'Die …', 'Das …'],
    placeholder: 'Der Mann …',
    minWords: 9
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct article: ___ Buch ist neu.',
      options: ['Der', 'Die', 'Das', 'Den'],
      answer: 2,
      explain: 'Buch is neuter → das. "Das Buch ist neu."'
    },
    gap: {
      // parts: strings; gaps: {answer, accepts[]}
      sentence: ['', ' Hund schläft, und ', ' Katze spielt.'],
      gaps: [ { answer: 'Der', accepts: ['der'] }, { answer: 'die', accepts: ['die'] } ],
      explain: 'Hund is masculine → Der. Katze is feminine → die.'
    },
    match: {
      q: 'Match each noun to its nominative article.',
      pairs: [
        { noun: 'Mann', art: 'der' },
        { noun: 'Frau', art: 'die' },
        { noun: 'Kind', art: 'das' },
        { noun: 'Autos', art: 'die' }
      ]
    },
    builder: {
      target: 'Build: "The teacher explains the rule."',
      bank: ['erklärt', 'Der', 'die', 'Regel', 'Lehrer'],
      answer: ['Der', 'Lehrer', 'erklärt', 'die', 'Regel'],
      roles: { 'Der': 'r-article', 'Lehrer': 'r-subject', 'erklärt': 'r-verb', 'die': 'r-article', 'Regel': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which article is correct? ___ Frau trinkt Kaffee.', options: ['Der', 'Die', 'Das'], answer: 1,
      explain: 'Frau is feminine → Die.' },
    { q: 'What case is the subject of a sentence in?', options: ['Akkusativ', 'Dativ', 'Nominativ', 'Genitiv'], answer: 2,
      explain: 'The subject is always in the nominative.' },
    { q: 'Which question word finds the nominative subject?', options: ['Wen?', 'Wer?', 'Wem?', 'Wessen?'], answer: 1,
      explain: 'Wer? (who?) and Was? (what?) find the nominative.' },
    { q: 'Plurals in the nominative always take…', options: ['der', 'das', 'die', 'den'], answer: 2,
      explain: 'Every plural takes die in the nominative.' },
    { q: 'Which is correct?', options: ['Das Mann liest.', 'Der Mann liest.', 'Die Mann liest.'], answer: 1,
      explain: 'Mann is masculine → Der Mann liest.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-subject', html: 'The <b>nominative</b> is the case of the subject — find it with <span class="de r-question">Wer?</span> / <span class="de r-question">Was?</span>' },
    { c: 'r-article', html: 'Articles by gender: <span class="de">der</span> (m), <span class="de">die</span> (f), <span class="de">das</span> (n), <span class="de">die</span> (plural).' },
    { c: 'r-object', html: 'Learn every noun <i>with</i> its article — gender cannot be guessed from meaning.' }
  ],
  revisionTips: [
    'Re-read the colour-coded passage once a day for three days — the colours do the remembering for you.',
    'When you meet a new noun anywhere, say its article out loud before its meaning.',
    'Quiz yourself with Wer? / Was? on any German sentence you see.'
  ]
};

window.CHAPTER = CHAPTER;
