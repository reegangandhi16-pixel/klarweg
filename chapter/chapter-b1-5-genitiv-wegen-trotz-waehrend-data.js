/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 5
   "Genitiv & Präpositionen mit Genitiv (wegen, trotz, während)"
   Teaches ONLY: the Genitiv case (Wessen? — possession,
   belonging, relationship), and the three most common B1
   Genitiv prepositions — wegen (reason), trotz (contrast),
   während (during). Deliberately does NOT introduce statt,
   außerhalb, innerhalb, diesseits, jenseits, ungeachtet, or
   other B2 Genitiv structures.
   Vocabulary source: uploaded chapter-05 list (46 items — a
   nutrition/history/social-housing theme: Diät, Ernährung,
   vegan, Sozialsiedlung, Nachtwächter, Stadtmauer, …), woven
   into Genitiv/wegen/trotz/während examples throughout.
   Every vocab entry carries: de/art/gender/plural/pos/level/en/
   hi/ex+exEn+exHi/advanced{synonyms,opposites,collocations} —
   one full example per word (per this chapter's spec).
============================================================ */
const CHAPTER = {
  id: 'b1-5-genitiv-wegen-trotz-waehrend',
  phase: 'B1 · Phase 1',
  number: 5,
  title: 'Genitiv & Präpositionen mit Genitiv',
  titleEn: 'Genitive & prepositions with the Genitive (wegen, trotz, während)',
  description: 'Das Auto des Mannes. Wegen des Regens bleiben wir zu Hause. Trotz der Probleme arbeitet er weiter. Während der Reise haben wir viele Fotos gemacht. This chapter introduces the Genitiv case — the case that answers "Wessen?" (whose?) — and its three most common B1 prepositions: wegen (reason), trotz (contrast), and während (during).',
  xp: 240,
  time: 40,
  difficulty: 'Intermediate',
  nextChapter: { number: 6, title: 'Goethe Mini 1', titleEn: 'Goethe Checkpoint 1 — First B1 Readiness' , href: 'chapter-b1-6-goethe-mini-1.html' },

  prevChapter: { number: 4, title: 'Folgen: deshalb & so … dass', titleEn: 'Consequences: deshalb & so … dass', href: 'chapter-b1-4-folgen-deshalb-so-dass.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Timo explains his diet to Kerstin — no meat because of it, cheese despite it, vegan cooking during the week for his fitness — every reason, contrast, and stretch of time carried by a Genitiv preposition: wegen, trotz, während.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the Genitiv doing three jobs: possession, reason (wegen), and contrast/time (trotz/während)'
    ],
    scene: 'Ein regnerischer Nachmittag',
    femaleSpeakers: ['Kerstin'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Wegen', role: 'r-preposition', en: 'because of', hi: 'के कारण', pron: 'VAY-gen', type: 'Preposition + genitive', why: 'wegen + genitive = because of (this chapter).', ex: 'wegen der Diät', exEn: 'because of the diet' },
        { w: 'meiner', role: 'r-dativ', en: 'my (fem. gen.)', hi: 'मेरी', pron: 'MY-ner', type: 'Possessive · genitive' },
        { w: 'Diät', role: 'r-dativ', en: 'diet (gen.)', hi: 'डाइट के', pron: 'dee-ET', type: 'Noun · fem. genitive', why: 'die Diät (this chapter).', ex: 'Ich mache eine Diät.', exEn: 'I am on a diet.' },
        { w: 'esse', role: 'r-verb', en: 'do I eat', hi: 'खाता हूँ', pron: 'E-suh', type: 'Verb · essen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'kein', role: 'r-akkusativ', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Determiner' },
        { w: 'Fleisch', role: 'r-akkusativ', en: 'meat', hi: 'मांस', pron: 'flysh', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Because of my diet, I do not eat meat.', hi: 'Meri diet ke kaaran, main maans nahi khaata.' },
      { speaker: 'Kerstin', side: 'right', tokens: [
        { w: 'Trotz', role: 'r-preposition', en: 'despite', hi: 'के बावजूद', pron: 'trots', type: 'Preposition + genitive', why: 'trotz + genitive = despite (this chapter).', ex: 'trotz der Diät', exEn: 'despite the diet' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Diät', role: 'r-dativ', en: 'diet (gen.)', hi: 'डाइट के', pron: 'dee-ET', type: 'Noun · fem. genitive' },
        { w: 'isst', role: 'r-verb', en: 'do you eat', hi: 'खाते हो', pron: 'ist', type: 'Verb · essen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'doch', role: 'r-adverb', en: 'still', hi: 'फिर भी', pron: 'dokh', type: 'Adverb' },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'ख़ुशी से', pron: 'gairn', type: 'Adverb' },
        { w: 'Käse', role: 'r-akkusativ', en: 'cheese', hi: 'पनीर', pron: 'KAY-zuh', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'Despite the diet, do you still gladly eat cheese?', hi: 'Diet ke bawajood, kya tum phir bhi khushi se paneer khaate ho?' },
      { speaker: 'Timo', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'Käse', role: 'r-akkusativ', en: 'cheese', hi: 'पनीर', pron: 'KAY-zuh', type: 'Noun · masc.' },
        { w: 'esse', role: 'r-verb', en: 'eat', hi: 'खाता हूँ', pron: 'E-suh', type: 'Verb · essen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Während', role: 'r-preposition', en: 'during', hi: 'के दौरान', pron: 'VAI-rent', type: 'Preposition + genitive', why: 'während + genitive = during (this chapter).', ex: 'während der Woche', exEn: 'during the week' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Woche', role: 'r-dativ', en: 'week (gen.)', hi: 'हफ़्ते के', pron: 'VO-khuh', type: 'Noun · fem. genitive' },
        { w: 'koche', role: 'r-verb', en: 'do I cook', hi: 'पकाता हूँ', pron: 'KO-khuh', type: 'Verb · kochen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'vegetarisch', role: 'r-adverb', en: 'vegetarian', hi: 'शाकाहारी', pron: 've-ge-ta-RISH', type: 'Adjective', why: 'vegetarisch = vegetarian (this chapter).', ex: 'Ich koche vegetarisch.', exEn: 'I cook vegetarian.' },
        { w: '.', plain: true }
      ], en: 'Yes, I always eat cheese. During the week I cook vegetarian.', hi: 'Haan, main hamesha paneer khaata hoon. Hafte ke dauraan main shakahari khaana pakaata hoon.' },
      { speaker: 'Kerstin', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition + time' },
        { w: 'Wochenende', role: 'r-time', en: 'weekend', hi: 'सप्ताहांत', pron: 'VO-khen-en-duh', type: 'Noun · neut.' },
        { w: '?', plain: true }
      ], en: 'And on the weekend?', hi: 'Aur weekend par?' },
      { speaker: 'Timo', tokens: [
        { w: 'Wegen', role: 'r-preposition', en: 'because of', hi: 'के कारण', pron: 'VAY-gen', type: 'Preposition + genitive' },
        { w: 'meiner', role: 'r-dativ', en: 'my (fem. gen.)', hi: 'मेरी', pron: 'MY-ner', type: 'Possessive · genitive' },
        { w: 'Fitness', role: 'r-dativ', en: 'fitness (gen.)', hi: 'फ़िटनेस के', pron: 'FIT-nes', type: 'Noun · fem. genitive' },
        { w: 'koche', role: 'r-verb', en: 'do I cook', hi: 'पकाता हूँ', pron: 'KO-khuh', type: 'Verb · kochen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'meistens', role: 'r-adverb', en: 'mostly', hi: 'ज़्यादातर', pron: 'MYS-tens', type: 'Adverb' },
        { w: 'vegan', role: 'r-adverb', en: 'vegan', hi: 'शाकाहारी', pron: 've-GAHN', type: 'Adjective', why: 'vegan = vegan (this chapter).', ex: 'Ich koche vegan.', exEn: 'I cook vegan.' },
        { w: '.', plain: true }
      ], en: 'Because of my fitness, I mostly cook vegan.', hi: 'Meri fitness ke kaaran, main zyadatar vegan khaana pakaata hoon.' },
      { speaker: 'Kerstin', side: 'right', tokens: [
        { w: 'Trotz', role: 'r-preposition', en: 'despite', hi: 'के बावजूद', pron: 'trots', type: 'Preposition + genitive' },
        { w: 'des', role: 'r-dativ', en: 'the (masc. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Aufwands', role: 'r-dativ', en: 'effort (gen.)', hi: 'मेहनत के', pron: 'OWF-vants', type: 'Noun · masc. genitive', why: 'der Aufwand (this chapter).', ex: 'trotz des Aufwands', exEn: 'despite the effort' },
        { w: 'gefällt', role: 'r-verb', en: 'does it please', hi: 'पसंद है', pron: 'ge-FELT', type: 'Verb · gefallen' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Despite the effort, do you like that?', hi: 'Mehnat ke bawajood, kya tumhe yeh pasand hai?' },
      { speaker: 'Timo', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'sehr', role: 'r-adverb', en: 'very much', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Möchtest', role: 'r-modalverb', en: 'would you like', hi: 'चाहती हो', pron: 'MÖKH-test', type: 'Modal · möchten (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मेरे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'kochen', role: 'r-verb', en: 'cook', hi: 'पकाना', pron: 'KO-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Yes, very much! Would you like to cook with me today?', hi: 'Haan, bahut! Kya tum aaj mere saath khaana pakaana chahogi?' },
      { speaker: 'Kerstin', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'ख़ुशी से', pron: 'gairn', type: 'Adverb' },
        { w: '!', plain: true }
      ], en: 'Yes, gladly!', hi: 'Haan, khushi se!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'The Genitiv case answers ONE question: <b>Wessen?</b> (Whose?) — it shows possession, belonging, and relationship: <span class="de">das Auto des Mannes</span> (the man\'s car). Three prepositions always take the Genitiv at B1: <span class="de r-preposition">wegen</span> (reason) — <span class="de">Wegen des Regens bleiben wir zu Hause.</span> <span class="de r-preposition">trotz</span> (contrast) — <span class="de">Trotz des Regens gehen wir spazieren.</span> <span class="de r-preposition">während</span> (during) — <span class="de">Während der Reise haben wir viele Fotos gemacht.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is GENITIV & PRÄPOSITIONEN MIT GENITIV (B1 level only): the Genitiv case (possession/belonging, answering "Wessen?") and its three most common B1 prepositions — wegen (reason), trotz (contrast), während (during). ' +
    'Do NOT expect or require statt, außerhalb, innerhalb, diesseits, jenseits, ungeachtet, or other B2 Genitiv structures — those are out of scope for this chapter; do not flag their absence and do not correct toward them. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Genitiv articles: masculine and neuter = des; feminine and plural = der.\n' +
    '- Masculine and neuter nouns typically add -s (multi-syllable, e.g. des Autos, des Lehrers) or -es (one-syllable/nouns ending in a hissing sound, e.g. des Kindes, des Mannes) in the Genitiv; feminine and plural nouns take NO ending on the noun itself (der Frau, not der Fraus).\n' +
    '- wegen, trotz, and während are all followed by the Genitiv in formal/written B1 German — "wegen dem Regen" (Dativ) is common in casual speech but should be corrected to "wegen des Regens" (Genitiv) for this chapter\'s target register; likewise "trotz den Problemen" → "trotz der Probleme", "während den Unterricht" → "während des Unterrichts".\n' +
    '- A bare noun cannot be used in the Genitiv without its ending or the correct article — "wegen der Mann" (missing Genitiv marking) should be "wegen des Mannes"; "des Auto" should be "des Autos"; "des Lehrer" should be "des Lehrers".\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Genitiv check:</b> one sentence on whether the article AND the noun ending were both correct after wegen/trotz/während.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you handle the Genitiv article, noun endings, and all three prepositions with confidence. Move on to Goethe Mini 1.',
    mid: 'Good. Re-read the Genitiv article and noun-ending tables once — especially masculine/neuter -s/-es — then continue.',
    low: 'Worth another pass — revisit the Grammar section (especially the Dativ vs. Genitiv comparison), then retake.'
  },

  parserSentence: [
    { w: 'Wegen', role: 'r-preposition' }, { w: 'des', role: 'r-genitiv' },
    { w: 'Regens', role: 'r-genitiv' }, { w: 'bleiben', role: 'r-verb' },
    { w: 'wir', role: 'r-subject' }, { w: 'zu', role: 'plain' }, { w: 'Hause', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: Wessen? → Genitiv, plus wegen, trotz, während.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Friends talk travel, weather, and family history using Genitiv, wegen, trotz, and während.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 46 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the Genitiv article/ending tables and the wegen/trotz/während comparison.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage using the Genitiv naturally.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch Genitiv constructions and wegen/trotz/während in natural speech.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Explain reasons, contrasts, and time periods with wegen, trotz, and während.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write about a trip or family history using the Genitiv.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Genitiv articles, noun endings, and Dativ→Genitiv transformation.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 240 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 46 chapter words — Diät, Ernährung, vegan, Sozialsiedlung, Nachtwächter, Stadtmauer — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Genitiv article and ending drills, Dativ→Genitiv transformation, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Genitiv reference — article table, noun-ending table, wegen/trotz/während comparison, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Das Auto des Mannes.', text: 'Express possession with the Genitiv' },
    { de: 'Wegen des Regens bleiben wir zu Hause.', text: 'State a reason with wegen + Genitiv' },
    { de: 'Trotz der Probleme arbeitet er weiter.', text: 'State a contrast with trotz + Genitiv' },
    { de: 'Während der Reise haben wir fotografiert.', text: 'State a time period with während + Genitiv' },
    { de: 'des Mannes / der Frau / des Kindes', text: 'Get the Genitiv article and noun ending right' }
  ],

  // ---------- Vocabulary (46 items — full chapter-05 upload list) ----------
  vocab: [
    { de: 'Diät', art: 'die', gender: 'f', plural: 'Diäten', pos: 'noun', level: 'B1', en: 'diet', hi: 'आहार योजना',
      ex: 'Wegen einer Diät sollte man trotzdem genug Vitamine bekommen.', exEn: 'Because of a diet, you should still get enough vitamins.', exHi: 'Diet ki wajah se bhi, kaafi vitamin milna zaroori hai.',
      advanced: { synonyms: ['Ernährungsplan'], opposites: [], collocations: ['Diät halten', 'wegen einer Diät'] } },
    { de: 'Ernährung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'nutrition', hi: 'पोषण',
      ex: 'Wegen der Ernährung meiner Familie kochen wir oft frisch.', exEn: 'Because of my family\'s nutrition, we often cook fresh.', exHi: 'Mere parivaar ke poshan ki wajah se, hum aksar taaza khaana banate hain.',
      advanced: { synonyms: ['Nahrung'], opposites: [], collocations: ['gesunde Ernährung', 'wegen der Ernährung'] } },
    { de: 'Fitness', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'fitness', hi: 'फिटनेस',
      ex: 'Trotz seiner Fitness geht er selten joggen.', exEn: 'Despite his fitness, he rarely goes jogging.', exHi: 'Apni fitness ke bawajood, woh kam hi jogging karta hai.',
      advanced: { synonyms: [], opposites: [], collocations: ['an seiner Fitness arbeiten', 'trotz der Fitness'] } },
    { de: 'ausziehen', pos: 'verb', level: 'B1', en: 'to move out of', hi: 'निकल जाना',
      ex: 'Wegen des Umzugs muss sie diese Woche ausziehen.', exEn: 'Because of the move, she has to move out this week.', exHi: 'Shift hone ki wajah se, use is hafte ghar khaali karna hai.',
      conj: { praesens: 'zieht aus', praeteritum: 'zog aus', perfekt: 'ist ausgezogen' },
      advanced: { synonyms: ['umziehen'], opposites: ['einziehen'], collocations: ['aus der Wohnung ausziehen'] } },
    { de: 'bewusst', pos: 'adjective', level: 'B1', en: 'conscious', hi: 'सचेत',
      ex: 'Wegen ihrer Gesundheit ernährt sie sich bewusst.', exEn: 'Because of her health, she eats consciously.', exHi: 'Apni sehat ki wajah se, woh sochkar khaana khaati hai.',
      advanced: { synonyms: ['achtsam'], opposites: ['unbewusst'], collocations: ['sich bewusst ernähren'] } },
    { de: 'biologisch', pos: 'adjective', level: 'B1', en: 'biological, organic', hi: 'जैविक',
      ex: 'Trotz des höheren Preises kauft sie nur biologisches Gemüse.', exEn: 'Despite the higher price, she only buys organic vegetables.', exHi: 'Zyada keemat ke bawajood, woh sirf organic sabziyaan khareedti hai.',
      advanced: { synonyms: ['organisch', 'bio'], opposites: [], collocations: ['biologisches Gemüse'] } },
    { de: 'damalig', pos: 'adjective', level: 'B1', en: 'bygone, of that time', hi: 'तत्कालीन',
      ex: 'Wegen der damaligen Umstände war das Leben schwer.', exEn: 'Because of the circumstances of that time, life was hard.', exHi: 'Us samay ke haalaton ki wajah se, zindagi mushkil thi.',
      advanced: { synonyms: [], opposites: ['heutig'], collocations: ['die damalige Zeit'] } },
    { de: 'Konzeption', art: 'die', gender: 'f', plural: 'Konzeptionen', pos: 'noun', level: 'B1', en: 'idea, conception', hi: 'अवधारणा',
      ex: 'Wegen der ursprünglichen Konzeption blieb das Gebäude unverändert.', exEn: 'Because of the original conception, the building remained unchanged.', exHi: 'Mool avdharna ki wajah se, imarat waise hi rahi.',
      advanced: { synonyms: ['Konzept', 'Idee'], opposites: [], collocations: ['eine Konzeption entwickeln'] } },
    { de: 'Siedlung', art: 'die', gender: 'f', plural: 'Siedlungen', pos: 'noun', level: 'B1', en: 'settlement, housing scheme', hi: 'बस्ती',
      ex: 'Während des Baus der Siedlung gab es viele Diskussionen.', exEn: 'During the construction of the settlement, there were many discussions.', exHi: 'Basti ke nirmaan ke dauran, kaafi charchayein hui.',
      advanced: { synonyms: [], opposites: [], collocations: ['während des Baus der Siedlung'] } },
    { de: 'Sozialsiedlung', art: 'die', gender: 'f', plural: 'Sozialsiedlungen', pos: 'noun', level: 'B1', en: 'social housing project', hi: 'सामाजिक आवास परियोजना',
      ex: 'Die Wohnung meines Urgroßvaters lag in einer Sozialsiedlung.', exEn: 'My great-grandfather\'s apartment was in a social housing project.', exHi: 'Mere pardaada ka ghar ek samajik awas mein tha.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'einleiten', pos: 'verb', level: 'B1', en: 'to introduce, initiate', hi: 'शुरू करना',
      ex: 'Wegen des Bedarfs leitete die Stadt ein neues Projekt ein.', exEn: 'Because of the need, the city initiated a new project.', exHi: 'Zaroorat ki wajah se, shahar ne ek naya project shuru kiya.',
      conj: { praesens: 'leitet ein', praeteritum: 'leitete ein', perfekt: 'hat eingeleitet' },
      advanced: { synonyms: ['beginnen', 'starten'], opposites: ['beenden'], collocations: ['ein Projekt einleiten'] } },
    { de: 'fortschrittlich', pos: 'adjective', level: 'B1', en: 'progressive', hi: 'प्रगतिशील',
      ex: 'Wegen der fortschrittlichen Idee wurde das Projekt gelobt.', exEn: 'Because of the progressive idea, the project was praised.', exHi: 'Pragatisheel vichaar ki wajah se, project ki sarahna hui.',
      advanced: { synonyms: ['modern', 'innovativ'], opposites: ['rückständig'], collocations: [] } },
    { de: 'geraten', pos: 'verb', level: 'B1', en: 'to fall into, end up in', hi: 'फंस जाना',
      ex: 'Wegen der hohen Miete geriet die Familie in Schwierigkeiten.', exEn: 'Because of the high rent, the family fell into difficulties.', exHi: 'Zyada kiraye ki wajah se, parivaar mushkil mein pad gaya.',
      conj: { praesens: 'gerät', praeteritum: 'geriet', perfekt: 'ist geraten' },
      advanced: { synonyms: ['hineingeraten'], opposites: [], collocations: ['in Schwierigkeiten geraten'] } },
    { de: 'halten', pos: 'verb', level: 'B1', en: 'to be on (a diet)', hi: 'रहना (डाइट पर)',
      ex: 'Trotz des Feiertags hält sie weiterhin Diät.', exEn: 'Despite the holiday, she is still on a diet.', exHi: 'Chutti ke bawajood, woh diet par hi hai.',
      conj: { praesens: 'hält', praeteritum: 'hielt', perfekt: 'hat gehalten' },
      advanced: { synonyms: [], opposites: [], collocations: ['Diät halten'] } },
    { de: 'katholisch', pos: 'adjective', level: 'B1', en: 'Catholic', hi: 'कैथोलिक',
      ex: 'Wegen ihres katholischen Glaubens half die Familie oft in der Kirche.', exEn: 'Because of their Catholic faith, the family often helped at the church.', exHi: 'Apne Catholic vishwas ki wajah se, parivaar aksar church mein madad karta tha.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'produziert', pos: 'adjective', level: 'B1', en: 'produced', hi: 'उत्पादित',
      ex: 'Trotz des hohen Preises kauft er nur biologisch produziertes Gemüse.', exEn: 'Despite the high price, he only buys organically produced vegetables.', exHi: 'Zyada keemat ke bawajood, woh sirf organic tareeke se banaya gaya sabzi khareedta hai.',
      advanced: { synonyms: ['hergestellt'], opposites: [], collocations: [] } },
    { de: 'sich ernähren', pos: 'verb', level: 'B1', en: 'to eat, nourish oneself', hi: 'भोजन करना',
      ex: 'Wegen ihrer Gesundheit ernährt sie sich seit Kurzem vegetarisch.', exEn: 'Because of her health, she has recently been eating vegetarian.', exHi: 'Apni sehat ki wajah se, woh haal hi mein shakahari khaana khaa rahi hai.',
      conj: { praesens: 'ernährt sich', praeteritum: 'ernährte sich', perfekt: 'hat sich ernährt' },
      advanced: { synonyms: [], opposites: [], collocations: ['sich gesund ernähren'] } },
    { de: 'stammen', pos: 'verb', level: 'B1', en: 'to originate (from + Dat.)', hi: 'से आना (मूल)',
      ex: 'Die Stadtmauer stammt aus der Entstehungszeit der Stadt.', exEn: 'The city wall dates from the city\'s time of origin.', exHi: 'Yeh shahar ki deewar shahar ke utpatti kaal se hai.',
      conj: { praesens: 'stammt', praeteritum: 'stammte', perfekt: 'hat gestammt' },
      advanced: { synonyms: ['herkommen'], opposites: [], collocations: ['stammen aus + Dat.'] } },
    { de: 'symbolisch', pos: 'adjective', level: 'B1', en: 'symbolic', hi: 'प्रतीकात्मक',
      ex: 'Wegen der Tradition hat der Nachtwächter heute nur eine symbolische Funktion.', exEn: 'Because of tradition, today the night watchman only has a symbolic function.', exHi: 'Parampara ki wajah se, aaj raat prahri ka sirf pratikatmak kaam hai.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'touristisch', pos: 'adjective', level: 'B1', en: 'touristic', hi: 'पर्यटक संबंधी',
      ex: 'Wegen ihrer Geschichte ist die Stadtmauer eine touristische Attraktion.', exEn: 'Because of its history, the city wall is a tourist attraction.', exHi: 'Apne itihaas ki wajah se, shahar ki deewar ek paryatak aakarshan hai.',
      advanced: { synonyms: [], opposites: [], collocations: ['touristische Attraktion'] } },
    { de: 'vegan', pos: 'adjective', level: 'B1', en: 'vegan', hi: 'वीगन',
      ex: 'Wegen ihrer Diät isst sie jetzt meistens vegan.', exEn: 'Because of her diet, she now mostly eats vegan.', exHi: 'Apni diet ki wajah se, woh ab zyada tar vegan khaana khaati hai.',
      advanced: { synonyms: [], opposites: [], collocations: ['sich vegan ernähren'] } },
    { de: 'vegetarisch', pos: 'adjective', level: 'B1', en: 'vegetarian', hi: 'शाकाहारी',
      ex: 'Wegen ihrer Gesundheit ernährt sie sich vegetarisch.', exEn: 'Because of her health, she eats vegetarian.', exHi: 'Apni sehat ki wajah se, woh shakahari khaana khaati hai.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'wohltätig', pos: 'adjective', level: 'B1', en: 'benevolent, charitable', hi: 'परोपकारी',
      ex: 'Trotz der Armut jener Zeit war die Kaufmannsfamilie wohltätig aktiv.', exEn: 'Despite the poverty of that time, the merchant family was active in charity work.', exHi: 'Us samay ki gareebi ke bawajood, us vyaapari parivaar ne parophakaari kaam kiya.',
      advanced: { synonyms: ['gemeinnützig'], opposites: [], collocations: ['wohltätig aktiv sein'] } },
    { de: 'zusätzlich', pos: 'adjective', level: 'B1', en: 'additional', hi: 'अतिरिक्त',
      ex: 'Wegen des Vitaminmangels nimmt sie zusätzliche Tabletten.', exEn: 'Because of the vitamin deficiency, she takes additional tablets.', exHi: 'Vitamin ki kami ki wajah se, woh atirikt goliyaan leti hai.',
      advanced: { synonyms: ['extra'], opposites: [], collocations: ['zusätzliche Kosten'] } },
    { de: 'beten', pos: 'verb', level: 'B1', en: 'to pray', hi: 'प्रार्थना करना',
      ex: 'Während des Essens betete die Familie jeden Abend.', exEn: 'During the meal, the family prayed every evening.', exHi: 'Khaane ke dauran, parivaar har shaam prarthana karta tha.',
      conj: { praesens: 'betet', praeteritum: 'betete', perfekt: 'hat gebetet' },
      advanced: { synonyms: [], opposites: [], collocations: ['während des Essens beten'] } },
    { de: 'Nahrungsmittel', art: 'das', gender: 'n', plural: 'Nahrungsmittel', pos: 'noun', level: 'B1', en: 'food', hi: 'खाद्य पदार्थ',
      ex: 'Wegen des Preises kauft sie nicht alle Nahrungsmittel biologisch.', exEn: 'Because of the price, she doesn\'t buy all her food organic.', exHi: 'Keemat ki wajah se, woh saare khaadya padarth organic nahi khareedti.',
      advanced: { synonyms: ['Lebensmittel'], opposites: [], collocations: [] } },
    { de: 'Stiftungsvermögen', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'endowment capital', hi: 'दान निधि पूंजी',
      ex: 'Wegen des niedrigen Stiftungsvermögens war die Jahresmiete sehr niedrig.', exEn: 'Because of the low endowment capital, the yearly rent was very low.', exHi: 'Kam daan nidhi ki wajah se, vaarshik kiraya bahut kam tha.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'Vitamin', art: 'das', gender: 'n', plural: 'Vitamine', pos: 'noun', level: 'B1', en: 'vitamin', hi: 'विटामिन',
      ex: 'Wegen des Vitamins in Karotten isst sie gern Gemüse.', exEn: 'Because of the vitamin in carrots, she likes eating vegetables.', exHi: 'Gaajar mein vitamin hone ki wajah se, use sabzi khana pasand hai.',
      advanced: { synonyms: [], opposites: [], collocations: ['Vitamine einnehmen'] } },
    { de: 'Workout', art: 'das', gender: 'n', plural: 'Workouts', pos: 'noun', level: 'B1', en: 'workout', hi: 'वर्कआउट',
      ex: 'Trotz der Müdigkeit machte sie noch ein kurzes Workout.', exEn: 'Despite the tiredness, she still did a short workout.', exHi: 'Thakan ke bawajood, usne ek chhota sa workout kiya.',
      advanced: { synonyms: ['Training'], opposites: [], collocations: ['ein Workout machen'] } },
    { de: 'Nachtwächter', art: 'der', gender: 'm', plural: 'Nachtwächter', pos: 'noun', level: 'B1', en: 'night watchman', hi: 'रात्रि प्रहरी',
      ex: 'Wegen des Nachtwächters fühlten sich die Bewohner sicherer.', exEn: 'Because of the night watchman, the residents felt safer.', exHi: 'Raat prahri ki wajah se, nivaasi apne aap ko surakshit mehsoos karte the.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'Originalzustand', art: 'der', gender: 'm', plural: 'Originalzustände', pos: 'noun', level: 'B1', en: 'original condition', hi: 'मूल स्थिति',
      ex: 'Trotz der Renovierung blieb das Haus im Originalzustand.', exEn: 'Despite the renovation, the house remained in its original condition.', exHi: 'Renovation ke bawajood, ghar apni mool sthiti mein raha.',
      advanced: { synonyms: [], opposites: [], collocations: ['im Originalzustand'] } },
    { de: 'Trend', art: 'der', gender: 'm', plural: 'Trends', pos: 'noun', level: 'B1', en: 'trend', hi: 'रुझान',
      ex: 'Wegen des Trends zu veganer Ernährung gibt es mehr Angebote.', exEn: 'Because of the trend toward vegan eating, there are more options.', exHi: 'Vegan khaane ke rujhaan ki wajah se, ab zyada options hain.',
      advanced: { synonyms: ['Tendenz'], opposites: [], collocations: ['ein neuer Trend'] } },
    { de: 'Urgroßvater', art: 'der', gender: 'm', plural: 'Urgroßväter', pos: 'noun', level: 'B1', en: 'great-grandfather', hi: 'परदादा',
      ex: 'Die Wohnung meines Urgroßvaters lag in einer Sozialsiedlung.', exEn: 'My great-grandfather\'s apartment was in a social housing project.', exHi: 'Mere pardaada ka ghar ek samajik awas mein tha.',
      advanced: { synonyms: [], opposites: ['Urgroßmutter'], collocations: [] } },
    { de: 'Zustand', art: 'der', gender: 'm', plural: 'Zustände', pos: 'noun', level: 'B1', en: 'state, condition', hi: 'हालत',
      ex: 'Wegen des schlechten Zustands musste das Gebäude renoviert werden.', exEn: 'Because of the poor condition, the building had to be renovated.', exHi: 'Kharaab haalat ki wajah se, imarat ko renovate karna pada.',
      advanced: { synonyms: ['Verfassung'], opposites: [], collocations: ['in gutem Zustand sein'] } },
    { de: 'Entstehungszeit', art: 'die', gender: 'f', plural: 'Entstehungszeiten', pos: 'noun', level: 'B1', en: 'time of origin', hi: 'उत्पत्ति काल',
      ex: 'Die Entstehungszeit dieser Mauer ist wirklich faszinierend.', exEn: 'The time of origin of this wall is really fascinating.', exHi: 'Is deewar ke utpatti kaal ka itihaas sach mein dilchasp hai.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'Form', art: 'die', gender: 'f', plural: 'Formen', pos: 'noun', level: 'B1', en: 'form, shape', hi: 'आकार',
      ex: 'Wegen der ungewöhnlichen Form ist die Siedlung bekannt.', exEn: 'Because of the unusual shape, the settlement is well known.', exHi: 'Asamanya aakaar ki wajah se, basti mashhoor hai.',
      advanced: { synonyms: ['Gestalt'], opposites: [], collocations: ['eine besondere Form haben'] } },
    { de: 'Frucht', art: 'die', gender: 'f', plural: 'Früchte', pos: 'noun', level: 'B1', en: 'fruit', hi: 'फल',
      ex: 'Trotz des Verzichts esse ich weiterhin viele Früchte.', exEn: 'Despite the deprivation, I still eat a lot of fruit.', exHi: 'Tyaag ke bawajood, main abhi bhi kaafi phal khaata hoon.',
      advanced: { synonyms: ['Obst'], opposites: [], collocations: ['reife Früchte'] } },
    { de: 'Immobilie', art: 'die', gender: 'f', plural: 'Immobilien', pos: 'noun', level: 'B1', en: 'real estate, property', hi: 'अचल संपत्ति',
      ex: 'Wegen der Lage ist diese Immobilie sehr gefragt.', exEn: 'Because of the location, this property is in high demand.', exHi: 'Jagah ki wajah se, yeh sampatti bahut mangi jaati hai.',
      advanced: { synonyms: ['Grundstück', 'Gebäude'], opposites: [], collocations: [] } },
    { de: 'Jahresmiete', art: 'die', gender: 'f', plural: 'Jahresmieten', pos: 'noun', level: 'B1', en: 'yearly rent', hi: 'वार्षिक किराया',
      ex: 'Wegen des niedrigen Stiftungsvermögens war die Jahresmiete niedrig.', exEn: 'Because of the low endowment capital, the yearly rent was low.', exHi: 'Kam daan nidhi ki wajah se, vaarshik kiraya kam tha.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'Karotte', art: 'die', gender: 'f', plural: 'Karotten', pos: 'noun', level: 'B1', en: 'carrot', hi: 'गाजर',
      ex: 'Trotz des Verzichts esse ich weiterhin viele Karotten.', exEn: 'Despite the deprivation, I still eat a lot of carrots.', exHi: 'Tyaag ke bawajood, main abhi bhi kaafi gaajar khaata hoon.',
      advanced: { synonyms: ['Möhre'], opposites: [], collocations: [] } },
    { de: 'Kaufmannsfamilie', art: 'die', gender: 'f', plural: 'Kaufmannsfamilien', pos: 'noun', level: 'B1', en: 'merchant family', hi: 'व्यापारी परिवार',
      ex: 'Trotz der Armut jener Zeit war die Kaufmannsfamilie wohltätig aktiv.', exEn: 'Despite the poverty of that time, the merchant family was active in charity work.', exHi: 'Us samay ki gareebi ke bawajood, us vyaapari parivaar ne parophakaari kaam kiya.',
      advanced: { synonyms: [], opposites: [], collocations: [] } },
    { de: 'Nachtwächterin', art: 'die', gender: 'f', plural: 'Nachtwächterinnen', pos: 'noun', level: 'B1', en: 'night watchwoman', hi: 'रात्रि प्रहरी (महिला)',
      ex: 'Wegen der Tradition der Stadt arbeitet heute eine Nachtwächterin dort.', exEn: 'Because of the city\'s tradition, a night watchwoman works there today.', exHi: 'Shahar ki parampara ki wajah se, aaj wahan ek mahila raat prahri kaam karti hai.',
      advanced: { synonyms: [], opposites: ['Nachtwächter'], collocations: [] } },
    { de: 'Schuld', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'fault, guilt (ohne Schuld: without fault)', hi: 'दोष',
      ex: 'Wegen eines Fehlers, ohne ihre Schuld, verpasste sie den Zug.', exEn: 'Because of a mistake, through no fault of her own, she missed the train.', exHi: 'Ek galti ki wajah se, uski koi galti na hote hue bhi, uski train chhoot gayi.',
      advanced: { synonyms: ['Verantwortung'], opposites: ['Unschuld'], collocations: ['ohne Schuld'] } },
    { de: 'Selbsthilfe', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'self-help', hi: 'स्व-सहायता',
      ex: 'Wegen der Selbsthilfe-Initiative wurde die Siedlung schnell gebaut.', exEn: 'Because of the self-help initiative, the settlement was built quickly.', exHi: 'Swayam-sahayata pahal ki wajah se, basti jaldi bani.',
      advanced: { synonyms: [], opposites: [], collocations: ['Selbsthilfe leisten'] } },
    { de: 'Speise', art: 'die', gender: 'f', plural: 'Speisen', pos: 'noun', level: 'B1', en: 'food, dish', hi: 'भोजन',
      ex: 'Während des Essens gab es viele vegetarische Speisen.', exEn: 'During the meal, there were many vegetarian dishes.', exHi: 'Khaane ke dauran, kai shakahari vyanjan the.',
      advanced: { synonyms: ['Gericht', 'Essen'], opposites: [], collocations: [] } },
    { de: 'Stadtmauer', art: 'die', gender: 'f', plural: 'Stadtmauern', pos: 'noun', level: 'B1', en: 'city wall', hi: 'शहर की दीवार',
      ex: 'Während der Reise letztes Jahr haben wir die alte Stadtmauer fotografiert.', exEn: 'During the trip last year, we photographed the old city wall.', exHi: 'Pichhle saal yatra ke dauran, humne purani shahar ki deewar ki tasveerein li.',
      advanced: { synonyms: [], opposites: [], collocations: [] } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist der Genitiv?',
      body: [
        'The Genitiv answers ONE question: <b>Wessen?</b> (Whose?) It shows possession, belonging, and relationship — usually translated with "of the…" or "…\'s" in English.'
      ],
      example: [
        { html: '<span class="de">Das Auto des Mannes.</span> — The man\'s car.' },
        { html: '<span class="de">Die Tasche der Frau.</span> — The woman\'s bag.' },
        { html: '<span class="de">Das Zimmer des Kindes.</span> — The child\'s room.' },
        { html: '<span class="de">Die Farbe des Hauses.</span> — The colour of the house.' }
      ],
      hinglish: 'Genitiv ek hi sawaal ka jawab deta hai: Wessen? (Kiska?) Yeh possession, belonging, aur relationship dikhata hai — English mein "of the…" ya "…\'s" jaisa.'
    },
    {
      title: 'Genitiv-Artikel',
      body: [
        'The Genitiv article changes by gender and number.'
      ],
      table: {
        head: ['Gender', 'Article', 'Example'],
        rows: [
          ['Masculine', 'des', '<span class="de">des Mannes, des Lehrers, des Studenten</span>'],
          ['Neuter', 'des', '<span class="de">des Kindes, des Hauses, des Autos</span>'],
          ['Feminine', 'der', '<span class="de">der Frau, der Tasche, der Stadt</span>'],
          ['Plural', 'der', '<span class="de">der Kinder, der Studenten, der Häuser</span>']
        ]
      },
      hinglish: 'Genitiv article gender aur number ke hisaab se badalta hai — masculine/neuter = des, feminine/plural = der.'
    },
    {
      title: 'Genitiv-Endungen am Nomen',
      body: [
        'Masculine and neuter nouns usually add <b>-s</b> or <b>-es</b> to the noun itself in the Genitiv. Feminine and plural nouns add NO ending at all — only the article changes.'
      ],
      table: {
        head: ['Noun', 'Genitiv form'],
        rows: [
          ['das Auto', '<span class="de">des Autos</span> (-s)'],
          ['das Kind', '<span class="de">des Kindes</span> (-es, ends in -d)'],
          ['der Lehrer', '<span class="de">des Lehrers</span> (-s)'],
          ['der Mann', '<span class="de">des Mannes</span> (-es, one syllable)'],
          ['die Frau', '<span class="de">der Frau</span> (no ending — feminine)']
        ]
      },
      note: 'Rule of thumb: one-syllable masculine/neuter nouns and those ending in -s, -ß, -z, -sch often take -es (des Mannes); longer masculine/neuter nouns usually take just -s (des Autos, des Lehrers).',
      hinglish: 'Masculine aur neuter nouns Genitiv mein -s ya -es lagate hain. Feminine aur plural nouns par koi ending nahi lagti — sirf article badalta hai.'
    },
    {
      title: 'wegen + Genitiv — der Grund',
      body: [
        '<span class="de r-preposition">wegen</span> means "because of" and always takes the Genitiv. It states a REASON.'
      ],
      example: [
        { html: '<span class="de">Wegen des Regens bleiben wir zu Hause.</span>' },
        { html: '<span class="de">Wegen der Krankheit kommt Anna nicht.</span>' },
        { html: '<span class="de">Wegen des Verkehrs bin ich zu spät.</span>' },
        { html: '<span class="de">Wegen meiner Prüfung lerne ich heute viel.</span>' }
      ],
      hinglish: 'wegen ka matlab hai "ki wajah se" aur hamesha Genitiv leta hai. Yeh reason batata hai.'
    },
    {
      title: 'trotz + Genitiv — der unerwartete Gegensatz',
      body: [
        '<span class="de r-preposition">trotz</span> means "despite, in spite of" and always takes the Genitiv. It states an unexpected CONTRAST — something happens anyway.'
      ],
      example: [
        { html: '<span class="de">Trotz des Regens gehen wir spazieren.</span>' },
        { html: '<span class="de">Trotz der Probleme arbeitet er weiter.</span>' },
        { html: '<span class="de">Trotz der Müdigkeit lernt sie Deutsch.</span>' }
      ],
      hinglish: 'trotz ka matlab hai "ke bawajood" aur hamesha Genitiv leta hai. Yeh contrast batata hai — rukawat ke bawajood kuch phir bhi ho jaata hai.'
    },
    {
      title: 'während + Genitiv — währenddessen',
      body: [
        '<span class="de r-preposition">während</span> means "during" and always takes the Genitiv. Something happens WHILE another action or period is going on.'
      ],
      example: [
        { html: '<span class="de">Während des Unterrichts darf man nicht telefonieren.</span>' },
        { html: '<span class="de">Während der Reise haben wir viele Fotos gemacht.</span>' },
        { html: '<span class="de">Während des Essens sprechen wir Deutsch.</span>' }
      ],
      hinglish: 'während ka matlab hai "ke dauran" aur hamesha Genitiv leta hai. Kuch tab hota hai jab koi doosra kaam ya samay chal raha hota hai.'
    },
    {
      title: 'wegen vs. trotz vs. während — Vergleich',
      body: [
        'All three take the Genitiv, but each does a different job.'
      ],
      table: {
        head: ['Preposition', 'Job', 'Example'],
        rows: [
          ['wegen', 'Reason', '<span class="de">Wegen des Regens…</span>'],
          ['trotz', 'Contrast', '<span class="de">Trotz des Regens…</span>'],
          ['während', 'Time (during)', '<span class="de">Während des Regens…</span>']
        ]
      },
      hinglish: 'Teeno hi Genitiv lete hain, lekin har ek ka kaam alag hai — wegen (reason), trotz (bawajood), während (ke dauran).'
    },
    {
      title: 'Dativ vs. Genitiv',
      body: [
        'Different prepositions require different cases — memorise them prepositon by preposition rather than by a general rule.'
      ],
      example: [
        { html: '<span class="de">mit dem Lehrer</span> (Dativ) vs. <span class="de">wegen des Lehrers</span> (Genitiv)' },
        { html: '<span class="de">für den Lehrer</span> (Akkusativ) vs. <span class="de">trotz des Lehrers</span> (Genitiv)' }
      ],
      note: 'In casual spoken German, wegen and trotz are sometimes heard with the Dativ ("wegen dem Regen") — but for this chapter\'s written/formal B1 register, always use the Genitiv.',
      hinglish: 'Alag-alag prepositions alag cases maangte hain — inhe ek-ek karke yaad rakho, kisi general rule se nahi. Bolchaal mein kabhi-kabhi wegen/trotz ke saath Dativ sunayi deta hai, lekin is chapter ke liye hamesha Genitiv use karo.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [
        'These mistakes are extremely common at B1 — using the Dativ instead of the Genitiv, or forgetting the noun\'s Genitiv ending.'
      ],
      mistakes: [
        { wrong: 'wegen dem Regen', right: 'wegen des Regens', why: 'wegen takes the Genitiv (des Regens), not the Dativ (dem Regen), in this chapter\'s formal register.' },
        { wrong: 'trotz den Problemen', right: 'trotz der Probleme', why: 'trotz takes the Genitiv plural (der Probleme), not the Dativ plural (den Problemen).' },
        { wrong: 'während den Unterricht', right: 'während des Unterrichts', why: 'während takes the Genitiv (des Unterrichts), not the Akkusativ (den Unterricht).' },
        { wrong: 'wegen der Mann', right: 'wegen des Mannes', why: 'Masculine nouns need both the Genitiv article (des) AND the noun ending (-es): des Mannes.' },
        { wrong: 'des Auto', right: 'des Autos', why: 'Neuter nouns still need the Genitiv -s ending on the noun itself: des Autos.' },
        { wrong: 'des Lehrer', right: 'des Lehrers', why: 'Masculine nouns need the Genitiv -s ending: des Lehrers.' }
      ],
      hinglish: 'Sabse aam galtiyaan: Dativ ka istemal Genitiv ki jagah karna, ya noun ki Genitiv ending bhool jaana. Hamesha article AUR noun ending dono check karo.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [
        'For the Goethe exam: the Genitiv shows up constantly in formal writing and reading passages — recognising it quickly (des/der + noun ending) speeds up comprehension.'
      ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['Possession?', 'Genitiv (des/der + noun)'],
          ['Reason?', 'wegen + Genitiv'],
          ['Contrast?', 'trotz + Genitiv'],
          ['During?', 'während + Genitiv']
        ]
      },
      note: 'Memory trick: Wessen? → Genitiv. wegen → Reason. trotz → Despite. während → During.',
      hinglish: 'Goethe exam ke liye: Genitiv formal likhawat aur reading passages mein baar-baar aata hai — ise jaldi pehchaanna (des/der + noun ending) samajhne mein madad karta hai. Yaad rakhne ka tarika: Wessen? → Genitiv. wegen → reason. trotz → bawajood. während → ke dauran.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Die Geschichte einer alten Siedlung',
    titleEn: 'The story of an old settlement',
    tokens: [
      { w: 'Wegen', role: 'r-preposition', en: 'because of', hi: 'की वजह से', type: 'Präposition · Genitiv', why: 'wegen + Genitiv states a reason.' },
      { w: 'der', role: 'r-genitiv', en: 'of the (fem. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'hohen', role: 'r-genitiv', en: 'high', hi: 'ज़्यादा', type: 'Adjective · Genitiv' },
      { w: 'Armut', role: 'r-genitiv', en: 'poverty (gen.)', hi: 'ग़रीबी का', type: 'Noun · fem.' },
      { w: 'entschied', role: 'r-verb', en: 'decided', hi: 'फ़ैसला किया', type: 'Verb · entscheiden' },
      { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'खुद', type: 'Reflexivpronomen' },
      { w: 'eine', role: 'r-subject', en: 'a (fem.)', hi: 'एक', type: 'Article' },
      { w: 'Kaufmannsfamilie', role: 'r-subject', en: 'merchant family', hi: 'व्यापारी परिवार', type: 'Noun · fem.', why: 'die Kaufmannsfamilie (this chapter).' },
      { w: ',', plain: true },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', type: 'Article · acc.' },
      { w: 'Sozialsiedlung', role: 'r-akkusativ', en: 'social housing project', hi: 'सामाजिक आवास', type: 'Noun · fem.', why: 'die Sozialsiedlung (this chapter).' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'bauen', role: 'r-verb', en: 'to build (Satzende)', hi: 'बनाना', type: 'Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Wegen', role: 'r-preposition', en: 'because of', hi: 'की वजह से', type: 'Präposition · Genitiv' },
      { w: 'des', role: 'r-genitiv', en: 'of the (masc. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'katholischen', role: 'r-genitiv', en: 'Catholic', hi: 'कैथोलिक', type: 'Adjective · Genitiv' },
      { w: 'Glaubens', role: 'r-genitiv', en: 'faith (gen.)', hi: 'विश्वास का', type: 'Noun · masc. (Genitiv -s)' },
      { w: 'der', role: 'r-genitiv', en: 'of the (fem. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'Familie', role: 'r-genitiv', en: 'family (gen.)', hi: 'परिवार का', type: 'Noun · fem.' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'था', type: 'Verb · sein' },
      { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'Projekt', role: 'r-subject', en: 'project', hi: 'परियोजना', type: 'Noun · neut.' },
      { w: 'wohltätig', role: 'r-adjective', en: 'charitable', hi: 'परोपकारी', type: 'Adjective', why: 'wohltätig (this chapter): benevolent.' },
      { w: 'ausgerichtet', role: 'r-verb', en: 'oriented (Satzende)', hi: 'केंद्रित था (Satzende)', type: 'Verb · Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Trotz', role: 'r-preposition', en: 'despite', hi: 'के बावजूद', type: 'Präposition · Genitiv', why: 'trotz + Genitiv states a contrast.' },
      { w: 'des', role: 'r-genitiv', en: 'of the (neut. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'niedrigen', role: 'r-genitiv', en: 'low (gen.)', hi: 'कम', type: 'Adjective · Genitiv' },
      { w: 'Stiftungsvermögens', role: 'r-genitiv', en: 'endowment capital (gen.)', hi: 'दान निधि पूंजी का', type: 'Noun · neut. (Genitiv -s)', why: 'das Stiftungsvermögen (this chapter).' },
      { w: 'konnte', role: 'r-verb', en: 'could', hi: 'सका', type: 'Verb · Modalverb' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Siedlung', role: 'r-subject', en: 'settlement', hi: 'बस्ती', type: 'Noun · fem.', why: 'die Siedlung (this chapter).' },
      { w: 'gebaut', role: 'r-verb', en: 'built (Satzende)', hi: 'बनी (Satzende)', type: 'Verb · Partizip II (Satzende)' },
      { w: 'werden', role: 'r-verb', en: 'be (Satzende)', hi: 'हो', type: 'Verb · werden (Satzende)' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'Nachtwächter', role: 'r-subject', en: 'night watchman', hi: 'रात्रि प्रहरी', type: 'Noun · masc.', why: 'der Nachtwächter (this chapter).' },
      { w: 'bewachte', role: 'r-verb', en: 'guarded', hi: 'रखवाली करता था', type: 'Verb · bewachen' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Wohnungen', role: 'r-akkusativ', en: 'apartments', hi: 'घर', type: 'Noun · plural' },
      { w: 'während', role: 'r-preposition', en: 'during', hi: 'के दौरान', type: 'Präposition · Genitiv', why: 'während + Genitiv states a time period.' },
      { w: 'der', role: 'r-genitiv', en: 'of the (fem. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'Nacht', role: 'r-genitiv', en: 'night (gen.)', hi: 'रात का', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Wegen', role: 'r-preposition', en: 'because of', hi: 'की वजह से', type: 'Präposition · Genitiv' },
      { w: 'des', role: 'r-genitiv', en: 'of the (masc. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'guten', role: 'r-genitiv', en: 'good', hi: 'अच्छा', type: 'Adjective · Genitiv' },
      { w: 'Originalzustands', role: 'r-genitiv', en: 'original condition (gen.)', hi: 'मूल स्थिति का', type: 'Noun · masc. (Genitiv -s)', why: 'der Originalzustand (this chapter).' },
      { w: 'der', role: 'r-genitiv', en: 'of the (fem. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'Gebäude', role: 'r-genitiv', en: 'buildings (gen.)', hi: 'इमारतों का', type: 'Noun · neut. plural' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Siedlung', role: 'r-subject', en: 'settlement', hi: 'बस्ती', type: 'Noun · fem.' },
      { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', type: 'Adverb' },
      { w: 'touristisch', role: 'r-adjective', en: 'touristic', hi: 'पर्यटक संबंधी', type: 'Adjective', why: 'touristisch (this chapter).' },
      { w: 'interessant', role: 'r-adjective', en: 'interesting', hi: 'दिलचस्प', type: 'Adjective' },
      { w: '.', plain: true }
    ],
    translation: 'Because of the great poverty, a merchant family decided to build a social housing project. Because of the family\'s Catholic faith, the project was oriented toward charity. Despite the low endowment capital, the settlement could be built. A night watchman guarded the apartments during the night. Because of the buildings\' good original condition, the settlement is touristically interesting today.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — professionally scripted, not a copy of the Story Dialogue.
    dialogue: [
      { id: 'B1_005_L001', speaker: 'Kerstin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Warum isst du eigentlich schon wieder keinen Käse, Timo?', en: 'Why aren\'t you eating any cheese again, Timo?' },
      { id: 'B1_005_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wegen meiner Fitness — ich koche diese Woche komplett vegan, trotz meiner großen Liebe zu Camembert.', en: 'Because of my fitness — I\'m cooking completely vegan this week, despite my great love for Camembert.' },
      { id: 'B1_005_L003', speaker: 'Kerstin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Respekt! Und das schaffst du wirklich, während der ganzen Woche?', en: 'Respect! And you\'re really managing that, for the whole week?' },
      { id: 'B1_005_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Bis jetzt schon — aber frag mich noch mal am Freitagabend.', en: 'So far, yes — but ask me again on Friday evening.' }
    ],
    transcript: 'Warum isst du eigentlich schon wieder keinen Käse, Timo? Wegen meiner Fitness — ich koche diese Woche komplett vegan, trotz meiner großen Liebe zu Camembert. Respekt! Und das schaffst du wirklich, während der ganzen Woche? Bis jetzt schon — aber frag mich noch mal am Freitagabend.',
    translation: 'Why aren\'t you eating any cheese again, Timo? Because of my fitness — I\'m cooking completely vegan this week, despite my great love for Camembert. Respect! And you\'re really managing that, for the whole week? So far, yes — but ask me again on Friday evening.',
    tokens: [
      { w: 'Warum' },
      { w: 'isst' },
      { w: 'du' },
      { w: 'eigentlich' },
      { w: 'schon' },
      { w: 'wieder' },
      { w: 'keinen' },
      { w: 'Käse' },
      { w: ',', plain: true },
      { w: 'Timo', role: 'r-name', en: 'Timo', type: 'Name' },
      { w: '?', plain: true },
      { w: 'Wegen' },
      { w: 'meiner' },
      { w: 'Fitness' },
      { w: '—', plain: true },
      { w: 'ich' },
      { w: 'koche' },
      { w: 'diese', en: 'this (fem.)', hi: 'यह', pron: 'DEE-zuh', type: 'Determiner' },
      { w: 'Woche' },
      { w: 'komplett' },
      { w: 'vegan' },
      { w: ',', plain: true },
      { w: 'trotz' },
      { w: 'meiner' },
      { w: 'großen', role: 'plain', en: 'great', type: 'Adjective' },
      { w: 'Liebe' },
      { w: 'zu' },
      { w: 'Camembert', en: 'Camembert', type: 'Noun' },
      { w: '.', plain: true },
      { w: 'Respekt' },
      { w: '!', plain: true },
      { w: 'Und' },
      { w: 'das' },
      { w: 'schaffst' },
      { w: 'du' },
      { w: 'wirklich' },
      { w: ',', plain: true },
      { w: 'während' },
      { w: 'der' },
      { w: 'ganzen', role: 'plain', en: 'whole', type: 'Adjective' },
      { w: 'Woche' },
      { w: '?', plain: true },
      { w: 'Bis' },
      { w: 'jetzt' },
      { w: 'schon' },
      { w: '—', plain: true },
      { w: 'aber' },
      { w: 'frag' },
      { w: 'mich' },
      { w: 'noch' },
      { w: 'mal', role: 'r-adverb', en: 'once', hi: 'ज़रा', pron: 'mahl', type: 'Adverb' },
      { w: 'am' },
      { w: 'Freitagabend', en: 'Friday evening', type: 'Noun' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum verzichtet Timo auf Käse?', qEn: 'Why is Timo avoiding cheese?', options: ['Er ist allergisch', 'Wegen seiner Fitness', 'Er mag ihn nicht', 'Er ist zu teuer'], optionsEn: ['He\'s allergic', 'For his fitness', 'He doesn\'t like it', 'It\'s too expensive'], answer: 1,
        explain: '"Wegen meiner Fitness."' },
      { q: 'Wie lange will Timo vegan kochen?', qEn: 'How long does Timo plan to cook vegan?', options: ['Einen Tag', 'Die ganze Woche', 'Einen Monat', 'Er hat schon aufgegeben'], optionsEn: ['One day', 'The whole week', 'A month', 'He already gave up'], answer: 1,
        explain: '"Ich koche diese Woche komplett vegan … während der ganzen Woche."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin fragt, warum du kein Fleisch mehr isst.", taskEn: "Your friend asks why you no longer eat meat.", de: "Wegen meiner Gesundheit ernähre ich mich vegetarisch.", en: "Because of my health I eat vegetarian." },
    { task: "Ein Freund sagt, biologische Nahrungsmittel sind zu teuer. Was machst du trotzdem?", taskEn: "A friend says organic food is too expensive. What do you do anyway?", de: "Trotz der hohen Preise kaufe ich biologische Nahrungsmittel.", en: "Despite the high prices I buy organic food." },
    { task: "Deine Mutter fragt, was du während der Diät gegessen hast.", taskEn: "Your mother asks what you ate during the diet.", de: "Während der Diät habe ich vor allem Gemüse gegessen.", en: "During the diet I mainly ate vegetables." },
    { task: "Eine Kollegin fragt, warum du nicht in der Kantine isst.", taskEn: "A colleague asks why you don't eat in the canteen.", de: "Wegen des vielen Fleisches esse ich dort nicht.", en: "Because of all the meat I don't eat there." },
    { task: "Du zeigst Fotos aus deiner Heimat. Erklär, wem was gehört.", taskEn: "You show photos from your home country. Explain whose things they are.", de: "Das ist das Haus meiner Großeltern und der Garten meines Onkels.", en: "That's my grandparents' house and my uncle's garden." },
    { task: "Ein Freund fragt, wie du dich während der Arbeit ernährst.", taskEn: "A friend asks how you eat during work.", de: "Während der Arbeit esse ich nur einen Salat.", en: "During work I only eat a salad." },
    { task: "Deine Freundin fragt, warum du in diese Siedlung gezogen bist.", taskEn: "Your friend asks why you moved to this estate.", de: "Wegen der günstigen Miete wohne ich jetzt in der Siedlung.", en: "Because of the cheap rent I now live on the estate." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short travel report or family story (six to eight sentences) — use the Genitiv for possession at least twice, and use wegen, trotz, and während at least once each.',
    starters: ['Wegen …', 'Trotz …', 'Während …', 'Am Ende …'],
    placeholder: 'Wegen des schönen Wetters sind wir letzte Woche verreist. Trotz des langen Wegs …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "___ des Regens bleiben wir zu Hause."',
      options: ['Wegen', 'Trotz', 'Während'],
      answer: 0,
      explain: 'wegen states the REASON we\'re staying home.'
    },
    gap: {
      sentence: ['Trotz ', ' Regens gehen wir spazieren.'],
      gaps: [ { answer: 'des', accepts: ['des'] } ],
      explain: 'der Regen is masculine, so its Genitiv article is des: "trotz des Regens".'
    },
    match: {
      q: 'Match each preposition to its job.',
      pairs: [
        { noun: 'wegen', art: 'Reason' },
        { noun: 'trotz', art: 'Contrast' },
        { noun: 'während', art: 'During (time)' }
      ]
    },
    builder: {
      target: 'Build: "During the trip, we took many photos."',
      bank: ['Während', 'der', 'Reise', 'haben', 'wir', 'viele', 'Fotos', 'gemacht', '.'],
      answer: ['Während', 'der', 'Reise', 'haben', 'wir', 'viele', 'Fotos', 'gemacht', '.'],
      roles: { 'Während': 'r-preposition', 'der': 'r-genitiv', 'Reise': 'r-genitiv', 'haben': 'r-verb' }
    },
    genitivFill: {
      title: 'Fill in the correct Genitiv article',
      prompt: 'Complete: "Das Zimmer ___ Kindes ist bunt."',
      answer: 'des',
      explain: 'das Kind is neuter, so its Genitiv article is des: des Kindes.'
    },
    dativToGenitiv: {
      title: 'Transform: Dativ → Genitiv',
      prompt: 'Rewrite using the Genitiv: "mit dem Lehrer" → "wegen ___"',
      answer: 'wegen des Lehrers',
      explain: 'wegen always takes the Genitiv, not the Dativ — der Lehrer becomes des Lehrers.'
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Wegen dem Regen und trotz den Problemen bleiben wir zu Hause.',
      right: 'Wegen des Regens und trotz der Probleme bleiben wir zu Hause.',
      explain: 'Both wegen and trotz need the Genitiv (des Regens, der Probleme), not the Dativ (dem Regen, den Problemen).'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Das Auto ___ Mannes."', options: ['der', 'des', 'dem'], answer: 1,
      explain: 'der Mann is masculine, so its Genitiv article is des: des Mannes.' },
    { q: 'Which preposition states a REASON?', options: ['trotz', 'wegen', 'während'], answer: 1,
      explain: 'wegen means "because of" — it states a reason.' },
    { q: 'Which preposition states a CONTRAST?', options: ['trotz', 'wegen', 'während'], answer: 0,
      explain: 'trotz means "despite" — it states an unexpected contrast.' },
    { q: 'Complete: "Während ___ Reise haben wir viele Fotos gemacht."', options: ['der', 'des', 'die'], answer: 0,
      explain: 'die Reise is feminine, so its Genitiv article is der: der Reise.' },
    { q: 'Which sentence contains an error?', options: ['Wegen des Regens bleiben wir zu Hause.', 'Trotz der Probleme arbeitet er weiter.', 'Wegen der Mann ist es kalt.'], answer: 2,
      explain: 'Masculine nouns need both the Genitiv article (des) and the noun ending (-es): "Wegen des Mannes."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-genitiv', html: 'The Genitiv answers <b>Wessen?</b> and shows possession: <span class="de">das Auto des Mannes.</span>' },
    { c: 'r-preposition', html: 'Use <span class="de r-preposition">wegen</span> for a reason, <span class="de r-preposition">trotz</span> for a contrast, and <span class="de r-preposition">während</span> for a time period — all three take the Genitiv.' },
    { c: 'r-genitiv', html: 'Masculine/neuter nouns add <b>-s/-es</b> in the Genitiv (des Autos, des Mannes); feminine/plural nouns take no ending (der Frau).' }
  ],
  revisionTips: [
    'Whenever you use wegen, trotz, or während, check TWO things: the article (des/der) AND the noun\'s own ending (-s/-es).',
    'Say the three jobs out loud: wegen = reason, trotz = despite, während = during.',
    'Practise turning a Dativ phrase (mit dem Lehrer) into a Genitiv one (wegen des Lehrers) until the article swap feels automatic.'
  ]
};

window.CHAPTER = CHAPTER;
