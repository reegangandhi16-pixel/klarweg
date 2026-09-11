/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 6
   "Es in festen Ausdrücken" — fixed idiomatic expressions built
   around "es" that must be learned as whole chunks, never
   translated word-for-word (es tut mir leid, es geht, es kommt
   darauf an, es handelt sich um, es lohnt sich, es ist mir egal,
   es macht nichts, es fällt mir schwer, es freut mich, es steht
   fest, es ist erforderlich …). This is a vocabulary/usage
   chapter — it does NOT reteach Formales es, Korrelat-es, or
   Objekt-es (already covered in Chapters 4–5).
   IMPORTANT: dialogue uses ONLY Doreen and Timo.
   Vocabulary source: uploaded chapter-6 list (34 items, user-edited
   general B2 vocabulary bank — migration/media/social themes).
============================================================ */
const CHAPTER = {
  id: 'b2-06-es-in-festen-ausdruecken',
  phase: 'B2 · Phase 1',
  number: 6,
  title: 'Es in festen Ausdrücken',
  titleEn: 'Es in fixed expressions',
  description: 'Lock in the idioms that carry "es" — es geht um, es kommt darauf an, ich habe es eilig — and learn them as whole chunks, never translated word-for-word.',
  xp: 360,
  time: 50,
  difficulty: 'Advanced',
  nextChapter: { number: 7, title: 'Verbergänzungen erkennen', titleEn: 'Recognizing verb complements' , href: 'chapter-b2-07-verbergaenzungen-erkennen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Phrases you <em>learn whole.</em>',
    intro: 'At a documentary premiere about a migrant child, Doreen asks Timo what it\'s really about — it depends how you see it, he says, and it\'s fun watching it regardless — a whole set of fixed es-expressions carrying the conversation.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the most common Goethe B2 fixed expressions with es in natural conversation'
    ],
    scene: 'Die Premiere',
    femaleSpeakers: ['Doreen'],
    dialogue: [
      { speaker: 'Doreen', tokens: [
        { w: 'Worum', role: 'r-question', en: 'around what', hi: 'किस बारे में', pron: 'vo-RUM', type: 'Question word' },
        { w: 'geht', role: 'r-verb', en: 'goes', hi: 'है', pron: 'gayt', type: 'Verb · gehen', why: 'es geht um = it is about, fixed expression (this chapter).', ex: 'Es geht um Migration.', exEn: 'It is about migration.' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · festes es' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition + place' },
        { w: 'diesem', role: 'r-dativ', en: 'this (masc. dat.)', hi: 'इस', pron: 'DEE-zaym', type: 'Determiner · dative' },
        { w: 'Spielfilm', role: 'r-dativ', en: 'feature film (dat.)', hi: 'फ़ीचर फ़िल्म में', pron: 'SHPEEL-film', type: 'Noun · masc. dat.', why: 'der Spielfilm (this chapter).', ex: 'in diesem Spielfilm' },
        { w: '?', plain: true }
      ], en: 'What is this feature film about?', hi: 'Yeh feature film kis baare mein hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · festes es' },
        { w: 'handelt', role: 'r-verb', en: 'concerns', hi: 'संबंधित है', pron: 'HAN-delt', type: 'Verb · handeln', why: 'es handelt sich um = it concerns/is about, fixed expression (this chapter).', ex: 'Es handelt sich um ein Migrantenkind.', exEn: 'It is about a migrant child.' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'um', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'um', type: 'Preposition' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Migrantenkind', role: 'r-akkusativ', en: 'migrant child', hi: 'प्रवासी बच्चा', pron: 'mi-GRAN-ten-kint', type: 'Noun · neut.', why: 'das Migrantenkind (this chapter).', ex: 'ein Migrantenkind' },
        { w: '.', plain: true }
      ], en: 'It is about a migrant child.', hi: 'Yeh ek pravaasi bachche ke baare mein hai.' },
      { speaker: 'Doreen', tokens: [
        { w: 'Kommt', role: 'r-verb', en: 'depends', hi: 'निर्भर करता है', pron: 'komt', type: 'Verb · ankommen', lexicalUnit: 'ankommen', why: 'es kommt darauf an = it depends on that, fixed expression (this chapter).', ex: 'Es kommt darauf an, wie man es sieht.', exEn: 'It depends on how one sees it.' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · festes es' },
        { w: 'darauf', role: 'r-subject', en: 'on that', hi: 'उस पर', pron: 'da-ROWF', type: 'Pronoun · adverbial' },
        { w: 'an', role: 'r-verb', en: '(prefix of ankommen)', hi: '', pron: 'an', type: 'Separable prefix', lexicalUnit: 'ankommen' },
        { w: ',', plain: true },
        { w: 'wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'man', role: 'r-subject', en: 'one', hi: 'कोई', pron: 'man', type: 'Pronoun · indefinite' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'इसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'sieht', role: 'r-verb', en: 'sees', hi: 'देखता है', pron: 'zeet', type: 'Verb · sehen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'It depends on how one sees it.', hi: 'Yeh isbaat par nirbhar karta hai ki koi ise kaise dekhta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'geht', role: 'r-verb', en: 'goes', hi: 'है', pron: 'gayt', type: 'Verb · gehen', why: 'es geht mir gut/schlecht = I am doing well/badly, fixed expression (recycled A1).', ex: 'Es geht mir gut mit dem Thema.', exEn: 'I am doing well with the topic.' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · festes es' },
        { w: 'gut', role: 'r-akkusativ', en: 'well', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Thema', role: 'r-dativ', en: 'topic (dat.)', hi: 'विषय के', pron: 'TAY-ma', type: 'Noun · neut. dat.' },
        { w: '.', plain: true }
      ], en: 'I am doing well with the topic.', hi: 'Mujhe is vishay ke saath achha lag raha hai.' },
      { speaker: 'Doreen', tokens: [
        { w: 'Gibt', role: 'r-verb', en: 'is there', hi: 'है', pron: 'geept', type: 'Verb · geben', why: 'es gibt = there is/are (recycled A1).', ex: 'Es gibt viele Szenen dazu.', exEn: 'There are many scenes on it.' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · festes es' },
        { w: 'viele', role: 'r-akkusativ', en: 'many', hi: 'कई', pron: 'FEE-luh', type: 'Determiner' },
        { w: 'Szenen', role: 'r-akkusativ', en: 'scenes', hi: 'दृश्य', pron: 'STSAY-nen', type: 'Noun · plural' },
        { w: 'dazu', role: 'r-subject', en: 'on it', hi: 'उस पर', pron: 'da-TSOO', type: 'Pronoun · adverbial' },
        { w: '?', plain: true }
      ], en: 'Are there many scenes on it?', hi: 'Kya isper kai drishya hain?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · festes es' },
        { w: 'macht', role: 'r-verb', en: 'makes', hi: 'मज़ा देता है', pron: 'makht', type: 'Verb · Spaß machen', why: 'es macht Spaß = it is fun, fixed expression (recycled A2).', ex: 'Es macht Spaß, den Film zu sehen.', exEn: 'It is fun to watch the film.' },
        { w: 'Spaß', role: 'r-akkusativ', en: 'fun', hi: 'मज़ा', pron: 'shpahs', type: 'Noun · masc.' },
        { w: ',', plain: true },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Film', role: 'r-akkusativ', en: 'film', hi: 'फ़िल्म', pron: 'film', type: 'Noun · masc.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'sehen', role: 'r-verb', en: 'watch', hi: 'देखना', pron: 'ZAY-en', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes, and it is fun to watch the film.', hi: 'Haan, aur film dekhna maza deta hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German has many fixed expressions built around <span class="de r-idiom">es</span> that CANNOT be translated word-for-word — you must learn them as complete chunks: <span class="de">Es tut mir leid.</span> <span class="de">Es kommt darauf an.</span> <span class="de">Es handelt sich um...</span> This chapter is pure vocabulary and usage — it does not reteach the grammar of Formales es, Korrelat-es, or Objekt-es.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ES IN FESTEN AUSDRÜCKEN (B2 level): fixed idiomatic expressions built around "es" that must be learned as whole chunks, never translated word-for-word. Covers everyday expressions (es tut mir leid, es geht, es kommt darauf an, es handelt sich um, es lohnt sich, es ist mir egal, es macht nichts, es kommt nicht infrage, es fällt mir ein, es fällt mir schwer, es klappt, es passt, es funktioniert, es schmeckt), emotional expressions (es freut mich, es überrascht mich, es ärgert mich, es interessiert mich, es macht mir Angst, es macht mir Spaß, es gefällt mir), and formal/workplace expressions (es steht fest, es ist notwendig, es ist sinnvoll, es ist empfehlenswert, es besteht die Möglichkeit, es spielt keine Rolle, es ist erforderlich, es ist möglich, es ist verboten, es ist erlaubt). This is a vocabulary/usage lesson — it does NOT reteach Formales es, Korrelat-es, or Objekt-es grammar (already covered earlier). ' +
    'Do NOT expect grammar explanations about es-types here — focus only on whether the fixed expressions are used correctly and naturally. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Fixed expressions must be used as complete, unmodified chunks — do not accept a word-for-word calque translation as correct.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Expression check:</b> one sentence on whether the fixed expressions used were natural and idiomatic.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you use fixed es-expressions naturally and idiomatically. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the Top-40 expression table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: never translate these expressions word-for-word, learn them as whole chunks.'
  },

  parserSentence: [
    { w: 'Es', role: 'r-idiom' }, { w: 'tut', role: 'r-idiom' },
    { w: 'mir', role: 'r-idiom' }, { w: 'leid', role: 'r-idiom' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: these expressions must be learned whole, never translated word-for-word.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Doreen and Timo chat about a film premiere, packed with fixed es-expressions.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 34 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the Top 40+ Goethe B2 fixed expressions with es.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of fixed es-expressions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch fixed es-expressions in natural spoken German.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Apologize, react emotionally, and give recommendations using fixed expressions.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write emails and reports using fixed es-expressions naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill matching, completing, and choosing the right expression for each situation.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 360 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 34 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '7 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Expression matching, situation→expression drills, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The Top 40+ fixed es-expressions reference — everyday, emotional, and formal/workplace.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Es tut mir leid.', text: 'Apologize naturally using a fixed expression' },
    { de: 'Es kommt darauf an.', text: 'Express "it depends" naturally' },
    { de: 'Es handelt sich um …', text: 'Introduce a topic formally' },
    { de: 'Es freut mich, dass …', text: 'React emotionally using fixed expressions' },
    { de: 'Es ist erforderlich, … zu …', text: 'Use formal/workplace fixed expressions' }
  ],

  // ---------- Vocabulary (34 items — uploaded chapter-6 list) ----------
  vocab: [
    { de: 'Migrantenkind', art: 'das', gender: 'n', plural: 'Migrantenkinder', pos: 'noun', level: 'B2', en: 'migrant child', hi: 'प्रवासी बच्चा', ex: 'Es handelt sich um das Migrantenkind im Spielfilm.', exEn: 'It\'s about the migrant child in the feature film.', exHi: 'Yeh feature film mein pravaasi bachche ke baare mein hai.' },
    { de: 'Milieu', art: 'das', gender: 'n', plural: 'Milieus', pos: 'noun', level: 'B2', en: 'milieu, social environment', hi: 'सामाजिक परिवेश', ex: 'Es lohnt sich, das Milieu genau zu beobachten.', exEn: 'It\'s worth it to observe the social environment closely.', exHi: 'Saamaajik parivesh ka dhyaan se nireekshan karna faayde ka hai.' },
    { de: 'missverständlich', pos: 'adjective', level: 'B2', en: 'misleading, ambiguous', hi: 'भ्रामक', ex: 'Seine Aussage war missverständlich.', exEn: 'His statement was misleading.', exHi: 'Uska bayaan bhraamak tha.' },
    { de: 'missverstehen', pos: 'verb', level: 'B2', en: 'to misunderstand', hi: 'ग़लत समझना', ex: 'Manchmal ist es peinlich, wenn ein Muslim missverstanden wird.', exEn: 'Sometimes it\'s embarrassing when a Muslim is misunderstood.', exHi: 'Kabhi-kabhi sharmanaak hota hai jab ek Muslim ko galat samjha jaata hai.', conj: { praesens: 'missversteht', praeteritum: 'missverstand', perfekt: 'hat missverstanden' } },
    { de: 'multikulturell', pos: 'adjective', level: 'B2', en: 'multicultural', hi: 'बहुसांस्कृतिक', ex: 'Es steht fest, dass die Stadt multikulturell ist.', exEn: 'It\'s certain that the city is multicultural.', exHi: 'Yeh pakka hai ki shahar bahusanskritik hai.' },
    { de: 'Muslim/in', art: 'der/die', gender: 'm/f', plural: 'Muslime/Musliminnen', pos: 'noun', level: 'B2', en: 'Muslim', hi: 'मुस्लिम', ex: 'Manchmal ist es peinlich, wenn ein Muslim missverstanden wird.', exEn: 'Sometimes it\'s embarrassing when a Muslim is misunderstood.', exHi: 'Kabhi-kabhi sharmanaak hota hai jab ek Muslim ko galat samjha jaata hai.' },
    { de: 'nachdenklich', pos: 'adjective', level: 'B2', en: 'thoughtful, pensive', hi: 'चिंतनशील', ex: 'Der Film macht mich sehr nachdenklich.', exEn: 'The film makes me very pensive.', exHi: 'Film mujhe bahut chintanasheel bana deti hai.' },
    { de: 'Nachmieter/in', art: 'der/die', gender: 'm/f', plural: 'Nachmieter/innen', pos: 'noun', level: 'B2', en: 'next tenant', hi: 'अगला किरायेदार', ex: 'Es ist mir egal, ob der Nachmieter heute oder morgen einzieht.', exEn: 'I don\'t mind whether the next tenant moves in today or tomorrow.', exHi: 'Mujhe farq nahi padta ki agla kiraayedaar aaj ya kal aata hai.' },
    { de: 'netterweise', pos: 'adverb', level: 'B2', en: 'kindly', hi: 'दयालुतापूर्वक', ex: 'Netterweise sagte der Produzent, es stehe fest, der Film komme nächste Woche.', exEn: 'Kindly, the producer said it is certain that the film is coming next week.', exHi: 'Dayaalutapoorvak, nirmaata ne kaha ki yeh pakka hai ki film agle hafte aa rahi hai.' },
    { de: 'Nonsens', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'nonsense', hi: 'बकवास', ex: 'Es kommt nicht infrage, diesen Nonsens zu glauben.', exEn: 'It\'s out of the question to believe this nonsense.', exHi: 'Is bakwas par vishwaas karna sawal se baahar hai.' },
    { de: 'nonverbal', pos: 'adjective', level: 'B2', en: 'nonverbal', hi: 'अशाब्दिक', ex: 'Es fällt mir ein, dass sie oft nonverbal kommunizieren.', exEn: 'It occurs to me that they often communicate nonverbally.', exHi: 'Mujhe yaad aata hai ki woh aksar ashaabdik roop se sanchaar karte hain.' },
    { de: 'Odyssee', art: 'die', gender: 'f', plural: 'Odysseen', pos: 'noun', level: 'B2', en: 'odyssey', hi: 'लंबी यात्रा', ex: 'Diese Odyssee macht mich sehr nachdenklich.', exEn: 'This odyssey makes me very pensive.', exHi: 'Yeh lambi yatra mujhe bahut chintanasheel bana deti hai.' },
    { de: 'Parlament', art: 'das', gender: 'n', plural: 'Parlamente', pos: 'noun', level: 'B2', en: 'parliament', hi: 'संसद', ex: 'Es besteht die Möglichkeit, dass das Parlament das Gesetz ändert.', exEn: 'There is the possibility that parliament changes the law.', exHi: 'Yeh sambhaavna hai ki sansad kaanoon badal degi.' },
    { de: 'passioniert', pos: 'adjective', level: 'B2', en: 'passionate, devoted', hi: 'भावुक, समर्पित', ex: 'Es freut mich, dass sie eine passionierte Regisseurin ist.', exEn: 'It pleases me that she is a passionate director.', exHi: 'Mujhe khushi hai ki woh ek samarpit director hain.' },
    { de: 'Pate/Patin', art: 'der/die', gender: 'm/f', plural: 'Paten/Patinnen', pos: 'noun', level: 'B2', en: 'godparent', hi: 'गॉडपेरेंट', ex: 'Es ist erforderlich, einen Paten für das Projekt zu finden.', exEn: 'It is required to find a godparent for the project.', exHi: 'Project ke liye ek godparent dhoondhna zaroori hai.' },
    { de: 'peinlich', pos: 'adjective', level: 'B2', en: 'embarrassing, awkward', hi: 'शर्मनाक', ex: 'Manchmal ist es peinlich, wenn ein Muslim missverstanden wird.', exEn: 'Sometimes it\'s embarrassing when a Muslim is misunderstood.', exHi: 'Kabhi-kabhi sharmanaak hota hai jab ek Muslim ko galat samjha jaata hai.' },
    { de: 'Platzproblem', art: 'das', gender: 'n', plural: 'Platzprobleme', pos: 'noun', level: 'B2', en: 'space problem', hi: 'जगह की समस्या', ex: 'Es spielt keine Rolle, ob wir das Platzproblem heute lösen.', exEn: 'It doesn\'t matter whether we solve the space problem today.', exHi: 'Farq nahi padta ki hum aaj jagah ki samasya suljhaayein.' },
    { de: 'Preis', art: 'der', gender: 'm', plural: 'Preise', pos: 'noun', level: 'B2', en: 'prize, price', hi: 'पुरस्कार', ex: 'Es steht fest, dass sie den Preis verdient hat.', exEn: 'It\'s certain that she deserved the prize.', exHi: 'Yeh pakka hai ki woh puraskaar ki hakdaar thi.' },
    { de: 'Privatsphäre', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'privacy', hi: 'निजता', ex: 'Es ist erforderlich, die Privatsphäre der Schauspieler zu schützen.', exEn: 'It is required to protect the actors\' privacy.', exHi: 'Abhinetaaon ki nijta ki raksha karna aavashyak hai.' },
    { de: 'Produzent/in', art: 'der/die', gender: 'm/f', plural: 'Produzenten/Produzentinnen', pos: 'noun', level: 'B2', en: 'producer', hi: 'निर्माता', ex: 'Netterweise sagte der Produzent, es stehe fest, der Film komme nächste Woche.', exEn: 'Kindly, the producer said it is certain that the film is coming next week.', exHi: 'Dayaalutapoorvak, nirmaata ne kaha ki yeh pakka hai ki film agle hafte aa rahi hai.' },
    { de: 'Regisseur/in', art: 'der/die', gender: 'm/f', plural: 'Regisseure/Regisseurinnen', pos: 'noun', level: 'B2', en: 'director', hi: 'निर्देशक', ex: 'Es kommt darauf an, ob der Regisseur Zeit hat.', exEn: 'It depends on whether the director has time.', exHi: 'Yeh iss baat par nirbhar karta hai ki director ke paas samay hai ya nahi.' },
    { de: 'Sachverhalt', art: 'der', gender: 'm', plural: 'Sachverhalte', pos: 'noun', level: 'B2', en: 'facts of the matter', hi: 'मामले की स्थिति', ex: 'Es kommt darauf an, wie man den Sachverhalt versteht.', exEn: 'It depends on how one understands the facts of the matter.', exHi: 'Yeh iss baat par nirbhar karta hai ki maamle ki sthiti ko kaise samjha jaaye.' },
    { de: 'Scheinehe', art: 'die', gender: 'f', plural: 'Scheinehen', pos: 'noun', level: 'B2', en: 'sham marriage', hi: 'दिखावटी शादी', ex: 'Es steht fest, dass es sich um eine Scheinehe handelt.', exEn: 'It\'s certain that this is a sham marriage.', exHi: 'Yeh pakka hai ki yeh ek dikhaavati shaadi hai.' },
    { de: 'Schlüsselwort', art: 'das', gender: 'n', plural: 'Schlüsselwörter', pos: 'noun', level: 'B2', en: 'keyword', hi: 'मुख्य शब्द', ex: 'Das Schlüsselwort dieses Kapitels ist "es".', exEn: 'The keyword of this chapter is "es".', exHi: 'Is adhyaay ka mukhya shabd "es" hai.' },
    { de: 'schmerzlos', pos: 'adjective', level: 'B2', en: 'painless', hi: 'दर्द रहित', ex: 'Es klappt schmerzlos, wenn man vorbereitet ist.', exEn: 'It works out painlessly if one is prepared.', exHi: 'Agar taiyaar ho toh yeh bina dard ke ho jaata hai.' },
    { de: 'Schulabschluss', art: 'der', gender: 'm', plural: 'Schulabschlüsse', pos: 'noun', level: 'B2', en: 'school-leaving qualification', hi: 'स्कूल पूर्णता योग्यता', ex: 'Es ist notwendig, einen guten Schulabschluss zu haben.', exEn: 'It is necessary to have a good school-leaving qualification.', exHi: 'Achha school poornata yogyata haasil karna zaroori hai.' },
    { de: 'Schuluniform', art: 'die', gender: 'f', plural: 'Schuluniformen', pos: 'noun', level: 'B2', en: 'school uniform', hi: 'स्कूल यूनिफ़ॉर्म', ex: 'Es ist üblich, eine Schuluniform zu tragen.', exEn: 'It is customary to wear a school uniform.', exHi: 'School uniform pehnna aam baat hai.' },
    { de: 'Senior/in', art: 'der/die', gender: 'm/f', plural: 'Senioren/Seniorinnen', pos: 'noun', level: 'B2', en: 'senior citizen', hi: 'वरिष्ठ नागरिक', ex: 'Es freut mich, dass so viele Senioren zur Premiere kommen.', exEn: 'I\'m glad that so many senior citizens are coming to the premiere.', exHi: 'Mujhe khushi hai ki itne saare varishtha naagrik premiere mein aa rahe hain.' },
    { de: 'Sicht', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'view, perspective', hi: 'दृष्टिकोण', ex: 'Aus meiner Sicht ist es sinnvoll, den Film zu sehen.', exEn: 'From my perspective, it makes sense to see the film.', exHi: 'Mere drishtikon se, film dekhna saarthak hai.' },
    { de: 'sinnvoll', pos: 'adjective', level: 'B2', en: 'sensible, meaningful', hi: 'सार्थक', ex: 'Es ist sinnvoll, den Film vor der Premiere zu sehen.', exEn: 'It makes sense to see the film before the premiere.', exHi: 'Premiere se pehle film dekhna saarthak hai.' },
    { de: 'Spielfilm', art: 'der', gender: 'm', plural: 'Spielfilme', pos: 'noun', level: 'B2', en: 'feature film', hi: 'फ़ीचर फ़िल्म', ex: 'Es handelt sich um das Migrantenkind im Spielfilm.', exEn: 'It\'s about the migrant child in the feature film.', exHi: 'Yeh feature film mein pravaasi bachche ke baare mein hai.' },
    { de: 'Spielregel', art: 'die', gender: 'f', plural: 'Spielregeln', pos: 'noun', level: 'B2', en: 'rule of the game', hi: 'खेल का नियम', ex: 'Es ist wichtig, die Spielregeln zu kennen.', exEn: 'It\'s important to know the rules of the game.', exHi: 'Khel ke niyam jaanna mahatvapurn hai.' },
    { de: 'spontan', pos: 'adjective', level: 'B2', en: 'spontaneous', hi: 'सहज', ex: 'Es kam ganz spontan, dass wir zur Premiere gingen.', exEn: 'It happened quite spontaneously that we went to the premiere.', exHi: 'Yeh bilkul sahaj roop se hua ki hum premiere mein gaye.' },
    { de: 'Sprachgebiet', art: 'das', gender: 'n', plural: 'Sprachgebiete', pos: 'noun', level: 'B2', en: 'language area', hi: 'भाषा क्षेत्र', ex: 'Es kommt darauf an, in welchem Sprachgebiet man lebt.', exEn: 'It depends on which language area one lives in.', exHi: 'Yeh iss baat par nirbhar karta hai ki koi kis bhaasha kshetra mein rehta hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was sind feste Ausdrücke?',
      body: [ 'German has many expressions where "es" is simply part of the expression. Learn them as complete chunks — never break them apart.' ],
      table: {
        head: ['Wrong approach', 'Right approach'],
        rows: [
          ['<span class="de">Es + tut + mir + leid</span> (word-for-word)', '<span class="de">Es tut mir leid.</span> (learn the whole chunk)']
        ]
      },
      hinglish: 'German mein kai aise expressions hain jahan "es" bas expression ka hissa hota hai. Inhe poore chunk ki tarah yaad karo — inhe todna nahi hai.'
    },
    {
      title: 'Alltägliche Ausdrücke',
      body: [ 'These everyday fixed expressions appear constantly in Goethe B2 material.' ],
      table: {
        head: ['Expressions'],
        rows: [
          ['<span class="de">Es tut mir leid. Es geht. Es kommt darauf an. Es handelt sich um... Es lohnt sich. Es ist mir egal. Es macht nichts. Es kommt nicht infrage. Es kommt selten vor. Es gibt... Es sieht gut/schlecht aus. Es fällt mir ein. Es fällt mir schwer. Es klappt. Es passt. Es funktioniert. Es schmeckt.</span>']
        ]
      },
      hinglish: 'Yeh everyday fixed expressions Goethe B2 material mein lagataar aate hain.'
    },
    {
      title: 'Emotionale Ausdrücke',
      body: [ 'These expressions describe emotional reactions.' ],
      table: {
        head: ['Expressions'],
        rows: [
          ['<span class="de">Es freut mich. Es überrascht mich. Es ärgert mich. Es interessiert mich. Es beeindruckt mich. Es nervt mich. Es macht mir Angst. Es macht mir Spaß. Es gefällt mir.</span>']
        ]
      },
      hinglish: 'Yeh expressions emotional reactions describe karte hain.'
    },
    {
      title: 'Ausdrücke am Arbeitsplatz',
      body: [ 'Common in workplace and formal conversations.' ],
      table: {
        head: ['Expressions'],
        rows: [
          ['<span class="de">Es kommt darauf an. Es steht fest. Es ist notwendig. Es ist sinnvoll. Es ist empfehlenswert. Es besteht die Möglichkeit. Es spielt keine Rolle. Es ist kein Problem. Es ist selbstverständlich.</span>']
        ]
      },
      hinglish: 'Workplace aur formal conversations mein common.'
    },
    {
      title: 'Universität & Formelles Deutsch',
      body: [ 'Common in university, official, and formal written German.' ],
      table: {
        head: ['Expressions'],
        rows: [
          ['<span class="de">Es handelt sich um... Es geht um... Es kommt zu... Es steht zur Verfügung. Es ist erforderlich. Es ist möglich. Es ist verboten. Es ist erlaubt.</span>']
        ]
      },
      hinglish: 'University, official aur formal written German mein common.'
    },
    {
      title: 'Feste Ausdrücke vs. wörtliche Bedeutung',
      body: [ 'Never translate these expressions literally — their real meaning is idiomatic.' ],
      table: {
        head: ['Expression', 'NOT literal', 'Real meaning'],
        rows: [
          ['<span class="de">Es fällt mir schwer.</span>', '"It falls to me."', '"I find it difficult."'],
          ['<span class="de">Es tut mir leid.</span>', '"It does me sorrow."', '"I\'m sorry."']
        ]
      },
      hinglish: 'Inhe kabhi literally translate mat karo — inka asli matlab idiomatic hota hai, isliye poora phrase hi yaad rakhna behtar hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from breaking apart the fixed expression or translating it word-for-word.' ],
      mistakes: [
        { wrong: 'Es macht nicht.', right: 'Es macht nichts.', why: '"Es macht nichts" is the complete fixed expression meaning "it doesn\'t matter" — do not shorten it.' },
        { wrong: 'Es geht gut mir.', right: 'Es geht mir gut.', why: 'The word order of "es geht mir gut" is fixed — "mir" comes before "gut".' },
        { wrong: 'Es lohnt.', right: 'Es lohnt sich.', why: '"Es lohnt sich" always needs the reflexive "sich" — it is part of the fixed expression.' },
        { wrong: 'Es kommt auf.', right: 'Es kommt darauf an.', why: 'The full fixed expression is "es kommt darauf an" — do not drop "darauf" or "an".' },
        { wrong: 'Es handelt um.', right: 'Es handelt sich um...', why: '"Es handelt sich um" always needs the reflexive "sich" before "um".' }
      ],
      hinglish: 'Yeh galtiyaan fixed expression ko todne ya word-for-word translate karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'These fixed expressions appear constantly in Goethe B2 listening, reading, and speaking tasks.' ],
      note: 'Memory trick: never translate these expressions word-for-word — learn them as ONE complete phrase, exactly as native speakers use them.',
      hinglish: 'Yeh fixed expressions Goethe B2 listening, reading aur speaking tasks mein lagataar aate hain.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Forumsdiskussion: Ein Spielfilm sorgt für Gespräch',
    titleEn: 'Forum discussion: a feature film sparks debate',
    tokens: [
      { w: 'In', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (neut. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'Forum', role: 'plain', en: 'forum', hi: 'फ़ोरम', type: 'Noun · neut.' },
      { w: 'diskutieren', role: 'plain', en: 'discuss', hi: 'चर्चा करते हैं', type: 'Verb · diskutieren' },
      { w: 'mehrere', role: 'plain', en: 'several', hi: 'कई', type: 'Determiner' },
      { w: 'Nutzer', role: 'plain', en: 'users', hi: 'उपयोगकर्ता', type: 'Noun · plural' },
      { w: 'über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'neuen', role: 'plain', en: 'new', hi: 'नई', type: 'Adjective' },
      { w: 'Spielfilm', role: 'plain', en: 'feature film', hi: 'फ़ीचर फ़िल्म', type: 'Noun · masc.', why: 'der Spielfilm (this chapter).' },
      { w: 'einer', role: 'plain', en: 'of a (fem. gen.)', hi: 'की', type: 'Article · Genitiv' },
      { w: 'jungen', role: 'plain', en: 'young', hi: 'युवा', type: 'Adjective' },
      { w: 'Regisseurin', role: 'plain', en: 'director (f.)', hi: 'निर्देशिका', type: 'Noun · fem.', why: 'die Regisseurin (this chapter).' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it (fixed expression)', hi: 'यह (स्थिर अभिव्यक्ति)', type: 'Pronoun · feste Wendung', why: '"es geht um" = it is about: a fixed es-expression, es cannot be replaced (this chapter).' },
      { w: 'geht', role: 'plain', en: 'is about', hi: 'बारे में है', type: 'Verb · gehen' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'the (masc. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Film', role: 'plain', en: 'film', hi: 'फ़िल्म', type: 'Noun · masc.' },
      { w: 'um', role: 'plain', en: 'about', hi: 'बारे में', type: 'Preposition · Akk.' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Migrantenkind', role: 'plain', en: 'migrant child (Satzende)', hi: 'प्रवासी बच्चा (Satzende)', type: 'Noun · neut.', why: 'das Migrantenkind (this chapter).' },
      { w: ',', plain: true },
      { w: 'das', role: 'r-connector', en: 'that', hi: 'जो', type: 'Relativpronomen · Nom.' },
      { w: 'zwischen', role: 'plain', en: 'between', hi: 'बीच', type: 'Preposition · Dat.' },
      { w: 'zwei', role: 'plain', en: 'two', hi: 'दो', type: 'Number' },
      { w: 'Kulturen', role: 'plain', en: 'cultures', hi: 'संस्कृतियों', type: 'Noun · plural' },
      { w: 'aufwächst', role: 'plain', en: 'grows up (Satzende)', hi: 'बड़ा होता है (Satzende)', type: 'Verb · aufwachsen (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Nutzer', role: 'plain', en: 'user', hi: 'उपयोगकर्ता', type: 'Noun · masc.' },
      { w: 'schreibt', role: 'plain', en: 'writes', hi: 'लिखता है', type: 'Verb · schreiben' },
      { w: ':', plain: true },
      { w: '„Es', role: 'r-subject', en: '"It (fixed expression)', hi: '"यह (स्थिर अभिव्यक्ति)', type: 'Pronoun · feste Wendung', why: '"es handelt sich um" = it is a matter of, another idiom where es is fixed (this chapter).' },
      { w: 'handelt', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sich handeln' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'um', role: 'plain', en: 'about', hi: 'बारे में', type: 'Preposition · Akk.' },
      { w: 'eine', role: 'plain', en: 'one', hi: 'एक', type: 'Article · Akk.' },
      { w: 'der', role: 'plain', en: 'of the', hi: 'में से', type: 'Article · Genitiv' },
      { w: 'ehrlichsten', role: 'plain', en: 'most honest', hi: 'सबसे ईमानदार', type: 'Adjective · Superlativ' },
      { w: 'Milieustudien', role: 'plain', en: 'social-milieu studies', hi: 'सामाजिक अध्ययन', type: 'Noun · plural', why: 'das Milieu (this chapter).' },
      { w: 'der', role: 'plain', en: 'of the', hi: 'के', type: 'Article · Genitiv' },
      { w: 'letzten', role: 'plain', en: 'last', hi: 'पिछले', type: 'Adjective' },
      { w: 'Jahre', role: 'plain', en: 'years.\"', hi: 'सालों का।"', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'another', hi: 'एक', type: 'Article' },
      { w: 'anderer', role: 'plain', en: 'other (user)', hi: 'दूसरा', type: 'Pronoun' },
      { w: 'findet', role: 'plain', en: 'finds', hi: 'मानता है', type: 'Verb · finden' },
      { w: 'es', role: 'plain', en: 'it', hi: 'यह', type: 'Pronoun' },
      { w: 'peinlich', role: 'plain', en: 'embarrassing', hi: 'शर्मनाक', type: 'Adjective', why: 'peinlich (this chapter).' },
      { w: ',', plain: true },
      { w: 'wie', role: 'r-connector', en: 'how', hi: 'कैसे', type: 'Konjunktion · wie' },
      { w: 'oberflächlich', role: 'plain', en: 'superficially', hi: 'सतही ढंग से', type: 'Adverb' },
      { w: 'manche', role: 'plain', en: 'some', hi: 'कुछ', type: 'Determiner' },
      { w: 'Nebenfiguren', role: 'plain', en: 'side characters', hi: 'सहायक पात्र', type: 'Noun · plural' },
      { w: 'dargestellt', role: 'plain', en: 'portrayed (Satzende)', hi: 'दर्शाया जाता है (Satzende)', type: 'Verb · Partizip II' },
      { w: 'werden', role: 'plain', en: 'are (Satzende)', hi: 'हैं (Satzende)', type: 'Verb · werden (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it (fixed expression)', hi: 'यह (स्थिर अभिव्यक्ति)', type: 'Pronoun · feste Wendung', why: '"es kommt darauf an" = it depends on: es is fixed, darauf points forward to the wie-Satz (this chapter).' },
      { w: 'kommt', role: 'plain', en: 'depends', hi: 'निर्भर करता है', type: 'Verb · ankommen' },
      { w: 'seiner', role: 'plain', en: 'his', hi: 'उसकी', type: 'Possessivartikel · Genitiv' },
      { w: 'Meinung', role: 'plain', en: 'opinion', hi: 'राय', type: 'Noun · fem.' },
      { w: 'nach', role: 'plain', en: 'according to', hi: 'के अनुसार', type: 'Postposition' },
      { w: 'vor', role: 'plain', en: 'above', hi: 'सबसे', type: 'Preposition' },
      { w: 'allem', role: 'plain', en: 'all', hi: 'ऊपर', type: 'Pronoun' },
      { w: 'darauf', role: 'plain', en: 'on this', hi: 'इस पर', type: 'Pronominaladverb' },
      { w: 'an', role: 'plain', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix' },
      { w: ',', plain: true },
      { w: 'wie', role: 'r-connector', en: 'how', hi: 'कितना', type: 'Konjunktion · wie' },
      { w: 'glaubwürdig', role: 'plain', en: 'credible', hi: 'विश्वसनीय', type: 'Adjective' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Perspektive', role: 'plain', en: 'perspective', hi: 'दृष्टिकोण', type: 'Noun · fem.', why: 'Sicht/Perspektive (this chapter).' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'की', type: 'Article · Genitiv' },
      { w: 'Hauptfigur', role: 'plain', en: 'main character', hi: 'मुख्य पात्र', type: 'Noun · fem.' },
      { w: 'bleibt', role: 'plain', en: 'remains (Satzende)', hi: 'बनी रहती है (Satzende)', type: 'Verb · bleiben (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Produzentin', role: 'plain', en: 'producer (f.)', hi: 'निर्माता (महिला)', type: 'Noun · fem.', why: 'die Produzentin (this chapter).' },
      { w: 'erklärt', role: 'plain', en: 'explains', hi: 'बताती है', type: 'Verb · erklären' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'an (neut. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'Interview', role: 'plain', en: 'interview', hi: 'इंटरव्यू', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'es', role: 'r-subject', en: 'it (fixed expression)', hi: 'यह (स्थिर अभिव्यक्ति)', type: 'Pronoun · feste Wendung', why: '"es geht ihr um" = what matters to her is: fixed idiom, Konjunktiv I "gehe" for reported speech.' },
      { w: 'gehe', role: 'plain', en: 'is about (Konjunktiv I)', hi: 'बारे में है', type: 'Verb · gehen (Konjunktiv I)' },
      { w: 'ihr', role: 'plain', en: 'to her', hi: 'उसे', type: 'Pronoun · Dat.' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'um', role: 'plain', en: 'about', hi: 'बारे में', type: 'Preposition · Akk.' },
      { w: 'Nonsens', role: 'plain', en: 'nonsense', hi: 'बकवास', type: 'Noun · masc.', why: 'der Nonsens (this chapter).' },
      { w: 'oder', role: 'plain', en: 'or', hi: 'या', type: 'Conjunction' },
      { w: 'Effekthascherei', role: 'plain', en: 'cheap effects', hi: 'सस्ता प्रभाव', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'sondern', role: 'plain', en: 'but rather', hi: 'बल्कि', type: 'Konjunktion' },
      { w: 'um', role: 'plain', en: 'about', hi: 'बारे में', type: 'Preposition · Akk.' },
      { w: 'einen', role: 'plain', en: 'an (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'ehrlichen', role: 'plain', en: 'honest', hi: 'ईमानदार', type: 'Adjective' },
      { w: 'Blick', role: 'plain', en: 'view', hi: 'नज़रिया', type: 'Noun · masc.' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'multikulturelles', role: 'plain', en: 'multicultural', hi: 'बहुसांस्कृतिक', type: 'Adjective', why: 'multikulturell (this chapter).' },
      { w: 'Stadtviertel', role: 'plain', en: 'city neighbourhood (Satzende)', hi: 'शहरी मोहल्ला (Satzende)', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it (fixed expression)', hi: 'यह (स्थिर अभिव्यक्ति)', type: 'Pronoun · feste Wendung', why: '"es tut mir leid" = I am sorry: another fixed es-idiom (this chapter).' },
      { w: 'tut', role: 'plain', en: 'does', hi: 'करता है', type: 'Verb · tun' },
      { w: 'ihr', role: 'plain', en: 'to her', hi: 'उसे', type: 'Pronoun · Dat.' },
      { w: 'leid', role: 'plain', en: 'sorry', hi: 'खेद', type: 'Adjective/Ausdruck' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'manche', role: 'plain', en: 'some', hi: 'कुछ', type: 'Determiner' },
      { w: 'Kritiker', role: 'plain', en: 'critics', hi: 'आलोचक', type: 'Noun · plural' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Sachverhalt', role: 'plain', en: 'matter (Satzende)', hi: 'मामला (Satzende)', type: 'Noun · masc.', why: 'der Sachverhalt (this chapter).' },
      { w: 'vereinfachen', role: 'plain', en: 'simplify (Satzende)', hi: 'सरल बना देते हैं (Satzende)', type: 'Verb · vereinfachen (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'statt', role: 'plain', en: 'instead of', hi: 'के बजाय', type: 'Präposition/Konjunktion' },
      { w: 'genau', role: 'plain', en: 'closely', hi: 'ध्यान से', type: 'Adverb' },
      { w: 'hinzuschauen', role: 'plain', en: 'looking (Satzende)', hi: 'देखना (Satzende)', type: 'Verb · hinschauen (Infinitiv mit zu, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'In a forum, several users discuss a young director\'s new feature film. The film is about a migrant child who grows up between two cultures. One user writes: "It is one of the most honest social studies of recent years." Another finds it embarrassing how superficially some side characters are portrayed. In his opinion, it depends above all on how credible the main character\'s perspective remains. The producer explains in an interview that what matters to her is not nonsense or cheap effects, but an honest look at a multicultural city neighbourhood. She is sorry that some critics simplify the matter instead of looking closely.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_006_L001', speaker: 'Doreen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, wie fand die Jury es eigentlich, dass der Film so persönlich war?', en: 'Timo, what did the jury actually think of the film being so personal?' },
      { id: 'B2_006_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Es kommt darauf an, wen man fragt — die einen fanden es mutig, die anderen zu privat.', en: 'It depends who you ask — some found it brave, others too private.' },
      { id: 'B2_006_L003', speaker: 'Doreen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und dir? Hat es dir trotzdem Spaß gemacht, ihn anzusehen?', en: 'And you? Did you still enjoy watching it?' },
      { id: 'B2_006_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Auf jeden Fall, es lohnt sich wirklich.', en: 'Definitely, it\'s really worth it.' }
    ],
    transcript: 'Timo, wie fand die Jury es eigentlich, dass der Film so persönlich war? Es kommt darauf an, wen man fragt — die einen fanden es mutig, die anderen zu privat. Und dir? Hat es dir trotzdem Spaß gemacht, ihn anzusehen? Auf jeden Fall, es lohnt sich wirklich.',
    translation: 'Timo, what did the jury actually think of the film being so personal? It depends who you ask — some found it brave, others too private. And you? Did you still enjoy watching it? Definitely, it\'s really worth it.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'fand' },
      { w: 'die' },
      { w: 'Jury' },
      { w: 'es' },
      { w: 'eigentlich' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'der' },
      { w: 'Film' },
      { w: 'so' },
      { w: 'persönlich' },
      { w: 'war' },
      { w: '?', plain: true },
      { w: 'Es' },
      { w: 'kommt' },
      { w: 'darauf' },
      { w: 'an' },
      { w: ',', plain: true },
      { w: 'wen' },
      { w: 'man' },
      { w: 'fragt' },
      { w: '—', plain: true },
      { w: 'die' },
      { w: 'einen' },
      { w: 'fanden' },
      { w: 'es' },
      { w: 'mutig' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'anderen' },
      { w: 'zu' },
      { w: 'privat' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'dir' },
      { w: '?', plain: true },
      { w: 'Hat' },
      { w: 'es' },
      { w: 'dir' },
      { w: 'trotzdem' },
      { w: 'Spaß' },
      { w: 'gemacht' },
      { w: ',', plain: true },
      { w: 'ihn' },
      { w: 'anzusehen' },
      { w: '?', plain: true },
      { w: 'Auf' },
      { w: 'jeden' },
      { w: 'Fall' },
      { w: ',', plain: true },
      { w: 'es' },
      { w: 'lohnt' },
      { w: 'sich' },
      { w: 'wirklich' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welcher Ausdruck bedeutet hier "es hängt davon ab"?', qEn: 'What does "it depends" mean here?', options: ['Es kommt darauf an', 'Es freut mich', 'Es tut mir leid', 'Es geht'], optionsEn: ['It depends', 'Pleased to meet you', 'I\'m sorry', 'So-so'], answer: 0,
        explain: '"Es kommt darauf an, wen man fragt."' },
      { q: 'Hat Timo der Film gefallen?', qEn: 'Did Timo enjoy the film?', options: ['Nein, gar nicht', 'Ja, es lohnt sich', 'Er weiß es nicht', 'Nur teilweise'], optionsEn: ['No, not at all', 'Yes, it\'s worth it', 'He doesn\'t know', 'only partly'], answer: 1,
        explain: '"Auf jeden Fall, es lohnt sich wirklich."' }
    ]
  },

  

  // ---------- Speaking prompts (Anna/Rohan role-play only) ----------
  speaking: [
    { task: "Ein Freund fragt, wie die Jury den persönlichen Film fand.", taskEn: "A friend asks how the jury found the personal film.", de: "Es kommt darauf an, wen man fragt — die einen fanden es mutig.", en: "It depends who you ask — some found it brave." },
    { task: "Deine Kollegin fragt, wie es dir nach der Kritik geht.", taskEn: "Your colleague asks how you are after the criticism.", de: "Es geht mir gut, aber es tut mir leid, dass sie sich missverstanden fühlt.", en: "I'm fine, but I'm sorry she felt misunderstood." },
    { task: "Ein Bekannter fragt, ob die Wohnung noch frei ist.", taskEn: "An acquaintance asks whether the flat is still available.", de: "Es gibt noch eine Wohnung, aber es fehlt ein Nachmieter.", en: "There's still one flat, but a new tenant is missing." },
    { task: "Eine Freundin sagt etwas Peinliches über dich. Reagiere.", taskEn: "A friend says something embarrassing about you. React.", de: "Es war mir wirklich peinlich, aber es macht nichts.", en: "It really embarrassed me, but never mind." },
    { task: "Ein Kollege fragt nach dem Platzproblem im Büro.", taskEn: "A colleague asks about the space problem in the office.", de: "Es handelt sich um ein Platzproblem, es geht nicht um die Privatsphäre.", en: "It's a matter of space, it's not about privacy." },
    { task: "Rollenspiel: Ihr entschuldigt euch nach einem Missverständnis.", taskEn: "Role-play: you apologise after a misunderstanding.", de: "Es tut mir leid, das war missverständlich. — Es macht nichts, es kommt vor.", en: "I'm sorry, that was ambiguous. — Never mind, it happens." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short email or opinion text (six to eight sentences) about an event or a problem — using at least four different fixed es-expressions from at least two categories (everyday, emotional, or formal/workplace).',
    starters: ['Es tut mir leid, ...', 'Es kommt darauf an, ...', 'Es freut mich, dass ...', 'Es ist erforderlich, ...'],
    placeholder: 'Es tut mir leid, dass ich nicht früher geschrieben habe. Es freut mich, dass ...',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which expression means "it depends"?',
      options: ['Es kommt darauf an.', 'Es tut mir leid.', 'Es macht nichts.'],
      answer: 0,
      explain: '"Es kommt darauf an" is the fixed expression for "it depends".'
    },
    gap: {
      sentence: ['Es lohnt ', ', den Film zu sehen.'],
      gaps: [ { answer: 'sich', accepts: ['sich'] } ],
      explain: '"Es lohnt sich" always needs the reflexive "sich" — it is part of the fixed expression.'
    },
    match: {
      q: 'Match each fixed expression to its meaning.',
      pairs: [
        { noun: 'Es tut mir leid.', art: "I'm sorry." },
        { noun: 'Es kommt darauf an.', art: 'It depends.' },
        { noun: 'Es handelt sich um ...', art: 'It is about ...' },
        { noun: 'Es macht nichts.', art: "It doesn't matter." }
      ]
    },
    builder: {
      target: 'Build: "It is required to protect the privacy."',
      bank: ['Es', 'ist', 'erforderlich', ',', 'die', 'Privatsphäre', 'zu', 'schützen', '.'],
      answer: ['Es', 'ist', 'erforderlich', ',', 'die', 'Privatsphäre', 'zu', 'schützen', '.'],
      roles: { 'Es': 'r-idiom', 'ist': 'r-idiom', 'erforderlich': 'r-idiom' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Es handelt um das Migrantenkind.',
      right: 'Es handelt sich um das Migrantenkind.',
      explain: '"Es handelt sich um" always needs the reflexive "sich" before "um" — it cannot be dropped.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which expression means "I\'m sorry"?', options: ['Es tut mir leid.', 'Es ist mir egal.', 'Es kommt darauf an.'], answer: 0,
      explain: '"Es tut mir leid" is the fixed apology expression.' },
    { q: 'Complete: "Es lohnt ___, den Film zu sehen."', options: ['sich', 'es', 'ihn'], answer: 0,
      explain: '"Es lohnt sich" always needs the reflexive "sich".' },
    { q: 'Which expression means "it is about ..."?', options: ['Es handelt sich um ...', 'Es geht mir gut.', 'Es tut mir leid.'], answer: 0,
      explain: '"Es handelt sich um ..." introduces a topic formally.' },
    { q: 'What does "Es fällt mir schwer" really mean?', options: ['I find it difficult.', 'It falls on me.', 'It is heavy.'], answer: 0,
      explain: 'This is a fixed idiomatic expression — never translate it literally.' },
    { q: 'Which sentence contains an error?', options: ['Es tut mir leid.', 'Es macht nicht.', 'Es freut mich.'], answer: 1,
      explain: 'The complete fixed expression is "Es macht nichts" — not "Es macht nicht."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-idiom', html: 'Fixed expressions with "es" must be learned as complete chunks — never translate them word-for-word.' },
    { c: 'r-idiom', html: 'The Top 40+ Goethe B2 expressions span everyday life (es tut mir leid, es kommt darauf an), emotions (es freut mich, es ärgert mich), and formal/workplace contexts (es ist erforderlich, es steht fest).' },
    { c: 'r-idiom', html: 'This chapter is pure vocabulary and usage — it builds on, but does not reteach, the grammar of Formales es, Korrelat-es, and Objekt-es from earlier chapters.' }
  ],
  revisionTips: [
    'Make flashcards of the fixed expressions as WHOLE phrases, not individual words.',
    'Practise reacting to real situations (apologies, surprises, recommendations) with the correct fixed expression.',
    'Read a Goethe B2 text and underline every fixed es-expression you recognize to build speed.'
  ]
};

window.CHAPTER = CHAPTER;
