/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 1 · Chapter 4
   "Nebensatz mit weil"  (giving reasons — weil sends the verb
   to the end). First real A2 clause structure. Teaches ONLY weil
   (no denn / obwohl / da / dass).
   Vocabulary source: uploaded chapter-04 word list (48 items,
   school + study + careers theme). Recycles Ch.1 (Name+s),
   Ch.2 (Perfekt), Ch.3 (Artikel) and A1: Modalverben, Perfekt,
   Akkusativ, Dativ, W-Fragen.
   NOTE: content only — existing audio engine, no new assets.

   VOCAB NOTES (flagged, not silently overridden):
   • Source "der Nebensatz - subordinate clause to cancel" — the
     "to cancel" is a translation artifact; the correct gloss is
     just "subordinate clause". Used as such.
   • Source "ehrlich - really" — ehrlich literally = honest; the
     "really?" sense is the colloquial "Ehrlich?". Glossed as
     "honest(ly); really?" to keep both.
   • Source "so - that" — this is the intensifier so (so gro\u00df =
     that big). Glossed accordingly.
============================================================ */
const CHAPTER = {
  id: 'a2-4-weil',
  phase: 'A2 · Phase 1',
  number: 4,
  title: 'Nebensatz mit weil',
  titleEn: 'Subordinate Clauses with weil',
  description: 'Your first real A2 sentence structure \u2014 and the most useful one for real conversation: giving reasons. Add weil to explain why, and one thing happens: the conjugated verb jumps to the very end of that clause. Ich lerne Deutsch, weil ich in Deutschland arbeiten m\u00f6chte. Answer any warum? with a full weil-sentence and you already sound a level higher.',
  xp: 160,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 5, title: 'Nebensatz mit dass', titleEn: 'Subordinate Clauses with dass' , href: 'chapter-a2-5-dass.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'The morning after the careers fair, the classroom is full of questions — and every one of them starts with warum? Kilian explains why he studies so much chemistry (he\'s training as a medical assistant); Rieke explains why she\'d rather learn English and a little Latin. The word weil answers them all, sliding the verb to the end.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear weil push the verb to the end, again and again'
    ],
    scene: 'Der Morgen nach der Berufsmesse \u2014 Sprachschule Berlin',
    femaleSpeakers: ['Rieke'],
    dialogue: [
      { speaker: 'Rieke', tokens: [
        { w: 'Warum', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'va-RUM', type: 'Question word' },
        { w: 'lernst', role: 'r-verb', en: 'are you learning', hi: 'सीख रहे हो', pron: 'LAIRNST', type: 'Verb · lernen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', pron: 'zo', type: 'Adverb' },
        { w: 'viel', role: 'r-adverb', en: 'much', hi: 'ज़्यादा', pron: 'feel', type: 'Adverb' },
        { w: 'Chemie', role: 'r-akkusativ', en: 'chemistry', hi: 'रसायन विज्ञान', pron: 'khe-MEE', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'Why are you learning so much chemistry?', hi: 'Tum itni rasayan vigyaan kyun seekh rahe ho?' },
      { speaker: 'Kilian', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'lerne', role: 'r-verb', en: 'learn', hi: 'सीखता हूँ', pron: 'LAIR-nuh', type: 'Verb · lernen (ich)' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot of', hi: 'ज़्यादा', pron: 'feel', type: 'Adverb' },
        { w: 'Chemie', role: 'r-akkusativ', en: 'chemistry', hi: 'रसायन विज्ञान', pron: 'khe-MEE', type: 'Noun · fem.' },
        { w: ',', plain: true },
        { w: 'weil', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'vyle', type: 'Conjunction · weil', why: 'weil sends the verb to the end of the clause (this chapter).', ex: 'Ich lerne Chemie, weil ich Arzt werde.', exEn: 'I learn chemistry because I become a doctor.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'Arzthelfer', role: 'r-subject', en: 'medical assistant', hi: 'डॉक्टर सहायक', pron: 'ARTST-hel-fer', type: 'Noun · masc.' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I learn a lot of chemistry because I am a medical assistant.', hi: 'Main bahut rasayan vigyaan seekhta hoon, kyunki main doctor sahayak hoon.' },
      { speaker: 'Rieke', tokens: [
        { w: 'Ach', role: 'r-subject', en: 'ah', hi: 'अच्छा', pron: 'akh', type: 'Reaction' },
        { w: 'so', role: 'r-adverb', en: 'I see', hi: 'समझा', pron: 'zo', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'lerne', role: 'r-verb', en: 'learn', hi: 'सीखती हूँ', pron: 'LAIR-nuh', type: 'Verb · lernen (ich)' },
        { w: 'lieber', role: 'r-adverb', en: 'rather', hi: 'ज़्यादा', pron: 'LEE-ber', type: 'Comparative' },
        { w: 'Englisch', role: 'r-akkusativ', en: 'English', hi: 'अंग्रेज़ी', pron: 'ENG-lish', type: 'Noun · neut.' },
        { w: ',', plain: true },
        { w: 'weil', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'vyle', type: 'Conjunction · weil' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'reisen', role: 'r-verb', en: 'to travel', hi: 'यात्रा करना', pron: 'RY-zen', type: 'Verb · infinitive' },
        { w: 'will', role: 'r-modalverb', en: 'want', hi: 'चाहती हूँ', pron: 'vil', type: 'Modal · wollen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Ah, I see! I would rather learn English, because I want to travel.', hi: 'Achha samjha! Main angrezi seekhna zyada pasand karti hoon, kyunki main yatra karna chahti hoon.' },
      { speaker: 'Kilian', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'verstehe', role: 'r-verb', en: 'understand', hi: 'समझता हूँ', pron: 'fer-SHTAY-uh', type: 'Verb · verstehen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'welche', role: 'r-akkusativ', en: 'which', hi: 'कौनसा', pron: 'VEL-khuh', type: 'Question word' },
        { w: 'Sprache', role: 'r-akkusativ', en: 'language', hi: 'भाषा', pron: 'SHPRAH-khuh', type: 'Noun · fem.' },
        { w: 'lernst', role: 'r-verb', en: 'are you learning', hi: 'सीख रही हो', pron: 'LAIRNST', type: 'Verb · lernen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'I understand that. And which language are you learning?', hi: 'Main yeh samajhta hoon. Aur tum kaunsi bhasha seekh rahi ho?' },
      { speaker: 'Rieke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'lerne', role: 'r-verb', en: 'learn', hi: 'सीखती हूँ', pron: 'LAIR-nuh', type: 'Verb · lernen (ich)' },
        { w: 'Englisch', role: 'r-akkusativ', en: 'English', hi: 'अंग्रेज़ी', pron: 'ENG-lish', type: 'Noun · neut.' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (bit of)', hi: 'थोड़ा', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'bisschen', role: 'r-akkusativ', en: 'bit', hi: 'थोड़ा', pron: 'BIS-khen', type: 'Determiner' },
        { w: 'Latein', role: 'r-akkusativ', en: 'Latin', hi: 'लैटिन', pron: 'la-TINE', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'I am learning English and a bit of Latin.', hi: 'Main angrezi aur thodi latin seekhti hoon.' },
      { speaker: 'Kilian', side: 'right', tokens: [
        { w: 'Latein', role: 'r-subject', en: 'Latin', hi: 'लैटिन', pron: 'la-TINE', type: 'Noun · neut.' },
        { w: '?', plain: true },
        { w: 'Warum', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'va-RUM', type: 'Question word' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Latin? Why that?', hi: 'Latin? Woh kyun?' },
      { speaker: 'Rieke', tokens: [
        { w: 'Weil', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'vyle', type: 'Conjunction · weil' },
        { w: 'Latein', role: 'r-subject', en: 'Latin', hi: 'लैटिन', pron: 'la-TINE', type: 'Noun · neut.' },
        { w: 'spannend', role: 'r-adjective', en: 'exciting', hi: 'रोमांचक', pron: 'SHPAN-ent', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'hilft', role: 'r-verb', en: 'helps', hi: 'मदद करता है', pron: 'hilft', type: 'Verb · helfen' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मेरी', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'bei', role: 'r-preposition', en: 'with', hi: 'में', pron: 'by', type: 'Preposition' },
        { w: 'anderen', role: 'r-dativ', en: 'other', hi: 'अन्य', pron: 'AN-de-ren', type: 'Adjective · dative' },
        { w: 'Sprachen', role: 'r-dativ', en: 'languages', hi: 'भाषाओं', pron: 'SHPRAH-khen', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'Because Latin is exciting. And it helps me with other languages.', hi: 'Kyunki Latin romaanchak hai. Aur yeh mujhe anya bhashaon mein madad karta hai.' },
      { speaker: 'Kilian', side: 'right', tokens: [
        { w: 'Interessant', role: 'r-adjective', en: 'interesting', hi: 'दिलचस्प', pron: 'in-te-re-SANT', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'finde', role: 'r-verb', en: 'find', hi: 'सोचता हूँ', pron: 'FIN-duh', type: 'Verb · finden (ich)' },
        { w: 'Sprachen', role: 'r-akkusativ', en: 'languages', hi: 'भाषाएँ', pron: 'SHPRAH-khen', type: 'Noun · plural' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'spannend', role: 'r-adjective', en: 'exciting', hi: 'रोमांचक', pron: 'SHPAN-ent', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Interesting! I also find languages exciting.', hi: 'Dilchasp! Mujhe bhi bhashaayein romaanchak lagti hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This is your first true A2 sentence structure \u2014 and it rests on a single move. When you add <span class="de r-weil">weil</span> (<em>because</em>) to give a reason, that clause becomes a <strong>Nebensatz</strong>, and the <strong>conjugated verb slides all the way to the end</strong>. Compare: <span class="de">Ich lerne Deutsch.</span> \u2192 <span class="de">Ich lerne Deutsch, <span class="r-weil">weil</span> ich in Deutschland arbeiten <span class="r-verb">m\u00f6chte</span>.</span> The main clause keeps its verb in position 2; only the weil-part sends its verb to the back. A comma always sits before <span class="de r-weil">weil</span>. Answer any <span class="de r-question">warum?</span> with a full weil-sentence and you instantly sound more fluent \u2014 this one word does an enormous amount of work in everyday German.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is the SUBORDINATE CLAUSE WITH weil (giving reasons). ONLY weil \u2014 do not suggest denn, da, obwohl or dass. ' +
    'The learner answered warum? questions / wrote reasons below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- After weil, the CONJUGATED verb goes to the very END of that clause: "\u2026, weil ich in Deutschland arbeiten m\u00f6chte." (m\u00f6chte last), "\u2026, weil das Handwerk kreativ ist." (ist last).\n' +
    '- A comma always precedes weil.\n' +
    '- In the Perfekt/with modals, the conjugated helper is truly last, AFTER the participle/infinitive: "\u2026, weil ich den Bus verloren habe." / "\u2026, weil ich arbeiten m\u00f6chte."\n' +
    '- The main clause keeps normal word order (verb in position 2): "Ich lerne Deutsch, weil \u2026".\n' +
    '- A short spoken answer may be just the weil-clause: "Weil ich m\u00fcde bin." \u2014 verb still last. This is correct; do not flag it.\n' +
    '- Do NOT rewrite weil as denn/da; do not move the verb back to position 2 inside the weil-clause. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why. If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>weil check:</b> one sentence on whether the verb landed at the end of each weil-clause.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'The verb lands at the end every time \u2014 you\u2019ve got weil. Next: report thoughts and facts with <span class="de">Nebensatz mit dass</span>.',
    mid: 'Good. Re-read the verb-to-the-end card once, then continue \u2014 watch the Perfekt case (\u2026 verloren habe).',
    low: 'Worth another pass \u2014 the whole chapter is one rule: after weil, the conjugated verb goes LAST. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'lerne', role: 'r-verb' },
    { w: 'Deutsch', role: 'r-object' }, { w: 'weil', role: 'r-weil' },
    { w: 'ich', role: 'r-subject' }, { w: 'hier', role: 'r-place' },
    { w: 'arbeiten', role: 'r-verb' }, { w: 'm\u00f6chte', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one move: weil sends the verb to the end.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A room full of warum? \u2014 everyone learns to answer with weil.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the school/study words: das Abitur, die Vorlesung, spannend, flie\u00dfend, weil.' },
    { id: 'grammar',    label: 'weil',       tag: 'core',
      objective: 'Master the verb-final Nebensatz, the comma, warum?, Perfekt & spoken use.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read Maxs reasons for a Grafiker apprenticeship \u2014 weil after weil.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each reason in a quick warum?-and-weil exchange.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Answer warum? out loud with complete weil-sentences.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Answer five warum? questions in full weil-sentences.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill verb-final order, joining clauses and warum \u2192 weil with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Vocabulary PDF',
      desc: 'The chapter\u2019s school and study words \u2014 das Abitur, die Vorlesung, der Grafiker, flie\u00dfend, spannend \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Homework PDF',
      desc: 'warum \u2192 weil answers, verb-to-the-end drills, clause-joining, and a why-I-learn-German task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Grammar Rules PDF',
      desc: 'The weil word order, the comma, warum?, the Perfekt case (\u2026 verloren habe), and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich lerne Deutsch, weil \u2026', text: 'Give a reason with a weil-clause' },
    { de: '\u2026, weil ich arbeiten m\u00f6chte.', text: 'Send the conjugated verb to the end' },
    { de: 'Warum? \u2192 Weil \u2026', text: 'Answer any warum? with weil' },
    { de: '\u2026, weil ich den Bus verloren habe.', text: 'Use weil in the Perfekt' },
    { de: 'Weil ich m\u00fcde bin.', text: 'Answer briefly with just the weil-clause' }
  ],

  // ---------- Vocabulary (48 items) ----------
  vocab: [
    // ===== The keyword & clause terms =====
    { de: 'weil', pos: 'conjunction', en: 'because (sends verb to the end)', hi: 'क्योंकि', ex: 'Ich lerne Deutsch, weil ich hier arbeiten m\u00f6chte.', exEn: 'I learn German because I want to work here.' },
    { de: 'Hauptsatz', art: 'der', gender: 'm', plural: 'Haupts\u00e4tze', pos: 'noun', en: 'main clause', hi: 'मुख्य वाक्य', ex: 'Der Hauptsatz hat das Verb auf Position zwei.', exEn: 'The main clause has the verb in position two.' },
    { de: 'Nebensatz', art: 'der', gender: 'm', plural: 'Nebens\u00e4tze', pos: 'noun', en: 'subordinate clause', hi: 'उपवाक्य', ex: 'Im Nebensatz steht das Verb am Ende.', exEn: 'In the subordinate clause the verb stands at the end.' },
    // ===== School: types, stages, qualifications =====
    { de: 'Abitur', art: 'das', gender: 'n', plural: '\u2014', pos: 'noun', en: 'A-levels (uni-entrance exam)', hi: 'बारहवीं की परीक्षा', ex: 'Anna macht das Abitur, weil sie studieren will.', exEn: 'Anna is doing her A-levels because she wants to study.' },
    { de: 'Realschulabschluss', art: 'der', gender: 'm', plural: 'Realschulabschl\u00fcsse', pos: 'noun', en: 'secondary school leaving certificate', hi: 'माध्यमिक स्कूल की उपाधि', ex: 'Mit dem Realschulabschluss beginnt die Ausbildung.', exEn: 'With the secondary certificate the training begins.' },
    { de: 'Grundschule', art: 'die', gender: 'f', plural: 'Grundschulen', pos: 'noun', en: 'primary/elementary school', hi: 'प्राथमिक स्कूल', ex: 'Kinder gehen zuerst in die Grundschule.', exEn: 'Children first go to primary school.' },
    { de: 'Schulzeit', art: 'die', gender: 'f', plural: 'Schulzeiten', pos: 'noun', en: 'school days, schooling', hi: 'स्कूली दिन', ex: 'Meine Schulzeit war spannend.', exEn: 'My school days were exciting.' },
    { de: 'Klasse', art: 'die', gender: 'f', plural: 'Klassen', pos: 'noun', en: 'class, year group', hi: 'कक्षा', ex: 'Ich mag meine Klasse, weil alle nett sind.', exEn: 'I like my class because everyone is nice.' },
    { de: 'Klassenzimmer', art: 'das', gender: 'n', plural: 'Klassenzimmer', pos: 'noun', en: 'classroom', hi: 'कक्षा-कक्ष', ex: 'Das Klassenzimmer ist hell und gro\u00df.', exEn: 'The classroom is bright and big.' },
    { de: 'Klassenfahrt', art: 'die', gender: 'f', plural: 'Klassenfahrten', pos: 'noun', en: 'class trip, school outing', hi: 'कक्षा यात्रा', ex: 'Die Klassenfahrt war toll, weil wir viel gesehen haben.', exEn: 'The class trip was great because we saw a lot.' },
    { de: 'Bundesland', art: 'das', gender: 'n', plural: 'Bundesl\u00e4nder', pos: 'noun', en: 'federal state', hi: 'संघीय राज्य', ex: 'Jedes Bundesland hat eigene Ferien.', exEn: 'Every federal state has its own holidays.' },
    { de: 'Schulplattform', art: 'die', gender: 'f', plural: 'Schulplattformen', pos: 'noun', en: 'school (online) platform', hi: 'स्कूल मंच (ऑनलाइन)', ex: 'Die Hausaufgaben sind auf der Schulplattform.', exEn: 'The homework is on the school platform.' },
    // ===== University & lectures =====
    { de: 'Vorlesung', art: 'die', gender: 'f', plural: 'Vorlesungen', pos: 'noun', en: 'lecture', hi: 'व्याख्यान', ex: 'Ich besuche die Vorlesung, weil das Thema spannend ist.', exEn: 'I attend the lecture because the topic is exciting.' },
    { de: 'Vorbereitung', art: 'die', gender: 'f', plural: 'Vorbereitungen', pos: 'noun', en: 'preparation', hi: 'तैयारी', ex: 'Die Vorbereitung dauert lange.', exEn: 'The preparation takes a long time.' },
    { de: 'Dauer', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'duration, length', hi: 'अवधि', ex: 'Die Dauer der Vorlesung ist zwei Stunden.', exEn: 'The duration of the lecture is two hours.' },
    { de: 'Erfahrung', art: 'die', gender: 'f', plural: 'Erfahrungen', pos: 'noun', en: 'experience', hi: 'अनुभव', ex: 'Ich sammle Erfahrung, weil ich sp\u00e4ter arbeiten will.', exEn: 'I gain experience because I want to work later.' },
    { de: 'Kontakt', art: 'der', gender: 'm', plural: 'Kontakte', pos: 'noun', en: 'contact', hi: 'संपर्क', ex: 'Auf der Messe findet man neue Kontakte.', exEn: 'At the fair you find new contacts.' },
    // ===== School subjects =====
    { de: 'Mathematik', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'mathematics', hi: 'गणित', ex: 'Mathematik ist schwer, aber wichtig.', exEn: 'Maths is hard but important.' },
    { de: 'Chemie', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'chemistry', hi: 'रसायन विज्ञान', ex: 'Ich mag Chemie, weil die Experimente spannend sind.', exEn: 'I like chemistry because the experiments are exciting.' },
    { de: 'Informatik', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'computer science, IT', hi: 'कंप्यूटर विज्ञान', ex: 'Informatik ist mein Lieblingsfach.', exEn: 'Computer science is my favourite subject.' },
    { de: 'Sozialkunde', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'social studies', hi: 'सामाजिक अध्ययन', ex: 'In Sozialkunde lernen wir \u00fcber die Bundesl\u00e4nder.', exEn: 'In social studies we learn about the federal states.' },
    { de: 'Latein', art: 'das', gender: 'n', plural: '\u2014', pos: 'noun', en: 'Latin', hi: 'लातिन', ex: 'Latein ist schwer, weil die Grammatik komplex ist.', exEn: 'Latin is hard because the grammar is complex.' },
    // ===== Professions & people =====
    { de: 'Grafiker', art: 'der', gender: 'm', plural: 'Grafiker', pos: 'noun', en: 'graphic designer', hi: 'ग्राफ़िक डिज़ाइनर', ex: 'Max will Grafiker werden, weil das Handwerk kreativ ist.', exEn: 'Max wants to be a graphic designer because the trade is creative.' },
    { de: 'Englischlehrer', art: 'der', gender: 'm', plural: 'Englischlehrer', pos: 'noun', en: 'English teacher', hi: 'अंग्रेज़ी शिक्षक', ex: 'Mein Englischlehrer spricht flie\u00dfend Deutsch.', exEn: 'My English teacher speaks German fluently.' },
    { de: 'Arzthelferin', art: 'die', gender: 'f', plural: 'Arzthelferinnen', pos: 'noun', en: 'doctor\u2019s assistant (female)', hi: 'डॉक्टर की सहायक', ex: 'Die Arzthelferin ruft die Patienten.', exEn: 'The doctor\u2019s assistant calls the patients.' },
    { de: 'Altenpflegerin', art: 'die', gender: 'f', plural: 'Altenpflegerinnen', pos: 'noun', en: 'geriatric nurse (female)', hi: 'बुज़ुर्गों की देखभाल करने वाली', ex: 'Sie wird Altenpflegerin, weil sie Menschen helfen will.', exEn: 'She\u2019s becoming a geriatric nurse because she wants to help people.' },
    { de: 'Augenoptikerin', art: 'die', gender: 'f', plural: 'Augenoptikerinnen', pos: 'noun', en: 'optician (female)', hi: 'चश्मा विशेषज्ञ', ex: 'Die Augenoptikerin arbeitet gern, weil der Kontakt sch\u00f6n ist.', exEn: 'The optician enjoys her work because the contact is nice.' },
    // ===== Work / life =====
    { de: 'Handwerk', art: 'das', gender: 'n', plural: '\u2014', pos: 'noun', en: 'trade, craft, manual work', hi: 'शिल्प, हस्तकला', ex: 'Das Handwerk macht Spa\u00df, weil es kreativ ist.', exEn: 'The trade is fun because it\u2019s creative.' },
    { de: 'Messe', art: 'die', gender: 'f', plural: 'Messen', pos: 'noun', en: 'fair, exhibition', hi: 'मेला, प्रदर्शनी', ex: 'Die Messe war spannend.', exEn: 'The fair was exciting.' },
    { de: 'Ferien', art: 'die', gender: 'pl', plural: 'Ferien', pos: 'noun', en: 'holidays (plural only)', hi: 'छुट्टियाँ', ex: 'Ich freue mich auf die Ferien, weil ich reisen will.', exEn: 'I look forward to the holidays because I want to travel.' },
    { de: 'Pferd', art: 'das', gender: 'n', plural: 'Pferde', pos: 'noun', en: 'horse', hi: 'घोड़ा', ex: 'Rohan reitet gern, weil das Pferd ruhig ist.', exEn: 'Rohan likes riding because the horse is calm.' },
    { de: 'Zigarette', art: 'die', gender: 'f', plural: 'Zigaretten', pos: 'noun', en: 'cigarette', hi: 'सिगरेट', ex: 'Er raucht keine Zigarette mehr, weil er gesund leben will.', exEn: 'He doesn\u2019t smoke a cigarette anymore because he wants to live healthily.' },
    // ===== Verbs =====
    { de: 'besuchen', pos: 'verb', en: 'to attend, to visit', hi: 'जाना, हाज़िर होना', ex: 'Ich besuche den Kurs, weil ich flie\u00dfend sprechen will.', exEn: 'I attend the course because I want to speak fluently.', conj: { praesens: 'besucht', praeteritum: 'besuchte', perfekt: 'hat besucht' } },
    { de: 'sehen', pos: 'verb', en: 'to see', hi: 'देखना', ex: 'Seht ihr den Unterschied?', exEn: 'Do you see the difference?', conj: { praesens: 'sieht', praeteritum: 'sah', perfekt: 'hat gesehen' } },
    { de: 'rufen', pos: 'verb', en: 'to call', hi: 'बुलाना', ex: 'Die Arzthelferin ruft den n\u00e4chsten Patienten.', exEn: 'The assistant calls the next patient.', conj: { praesens: 'ruft', praeteritum: 'rief', perfekt: 'hat gerufen' } },
    { de: 'verlieren', pos: 'verb', en: 'to lose, to miss', hi: 'खोना, चूकना', ex: 'Ich war nicht da, weil ich den Bus verloren habe.', exEn: 'I wasn\u2019t there because I missed the bus.', conj: { praesens: 'verliert', praeteritum: 'verlor', perfekt: 'hat verloren' } },
    { de: '\u00e4ndern', pos: 'verb', en: 'to change', hi: 'बदलना', ex: 'Ich m\u00f6chte meinen Plan \u00e4ndern, weil die Dauer zu lang ist.', exEn: 'I\u2019d like to change my plan because the duration is too long.', conj: { praesens: '\u00e4ndert', praeteritum: '\u00e4nderte', perfekt: 'hat ge\u00e4ndert' } },
    { de: 'abschlie\u00dfen', pos: 'verb', en: 'to finish, to complete (separable)', hi: 'पूरा करना', ex: 'Sie schlie\u00dft die Schule ab, weil sie studieren will.', exEn: 'She finishes school because she wants to study.', conj: { praesens: 'schlie\u00dft ab', praeteritum: 'schloss ab', perfekt: 'hat abgeschlossen' } },
    // ===== Adjectives / adverbs =====
    { de: 'spannend', pos: 'adjective', en: 'exciting, gripping', hi: 'रोमांचक', ex: 'Die Messe war spannend, weil ich viel gelernt habe.', exEn: 'The fair was exciting because I learned a lot.' },
    { de: 'flie\u00dfend', pos: 'adverb', en: 'fluently', hi: 'धाराप्रवाह', ex: 'Ich will flie\u00dfend Deutsch sprechen.', exEn: 'I want to speak German fluently.' },
    { de: 'ehrlich', pos: 'adverb', en: 'honest(ly); really?', hi: 'ईमानदारी से; सच में?', ex: 'Ehrlich? Das ist fast einfach!', exEn: 'Really? That\u2019s almost easy!' },
    { de: 'fast', pos: 'adverb', en: 'almost, nearly', hi: 'लगभग', ex: 'Das ist fast einfach.', exEn: 'That is almost easy.' },
    { de: 'wenigstens', pos: 'adverb', en: 'at least', hi: 'कम से कम', ex: 'Wenigstens kann jetzt jeder einen Grund geben.', exEn: 'At least everyone can now give a reason.' },
    { de: 'sozial', pos: 'adjective', en: 'social', hi: 'सामाजिक', ex: 'Sie mag soziale Berufe, weil sie Menschen mag.', exEn: 'She likes social professions because she likes people.' },
    { de: 'scharf', pos: 'adjective', en: 'spicy, sharp', hi: 'तीखा', ex: 'Das Essen ist scharf, aber lecker.', exEn: 'The food is spicy but tasty.' },
    { de: 'schlecht', pos: 'adjective', en: 'bad', hi: 'बुरा, ख़राब', ex: 'Mein Latein ist schlecht, weil ich wenig \u00fcbe.', exEn: 'My Latin is bad because I practise little.' },
    { de: 'so', pos: 'adverb', en: 'so, that (+ adjective)', hi: 'इतना', ex: 'Die Natur ist so sch\u00f6n.', exEn: 'Nature is that beautiful.' },
    { de: 'aus sein', pos: 'phrase', en: 'to be off / over', hi: 'बंद होना, ख़त्म होना', ex: 'Der Unterricht ist aus, weil es schon sp\u00e4t ist.', exEn: 'Class is over because it\u2019s already late.' },
    { de: 'von \u2026 zu', pos: 'preposition', en: 'from \u2026 to', hi: 'से \u2026 तक', ex: 'Von der Grundschule zur Vorlesung ist ein langer Weg.', exEn: 'From primary school to lectures is a long road.' }
  ],

  // ---------- weil (rule cards → accordion) ----------
  grammar: [
    {
      title: 'The one move: weil sends the verb to the end',
      goldenRule: '<b>weil</b> \u2192 conjugated verb goes to the <b>very end</b> of its clause. Comma always before weil.',
      why: 'A weil-clause cannot stand on its own \u2014 it is a piece hanging off the main sentence. German marks that by parking the verb at the far end, so you can hear from the word order alone that this half is not a full sentence.',
      formula: [
        'Ich lerne Deutsch, weil ich hier arbeiten <b>m\u00f6chte</b>.',
        '                                          \u2191 verb LAST'
      ],
      memoryTrick: '<b>WEIL = VERB LAST.</b> Bas yeh ek line yaad rahe to poora chapter aa gaya.',
      recap: [
        'Comma, then <b>weil</b>, then the clause with its verb <b>last</b>.',
        'The main clause does not change at all.',
        'In speech you can answer with the weil-clause alone.'
      ],
      body: [
        'A main clause (<strong>Hauptsatz</strong>) keeps its verb in <strong>position 2</strong>. The moment you add <span class="de r-weil">weil</span>, that clause becomes a <strong>Nebensatz</strong> and its <strong>conjugated verb jumps to the very end</strong>. A comma always comes before weil.'
      ],
      table: {
        head: ['Main clause', '+ weil-clause (verb LAST)'],
        rows: [
          ['<span class="de">Ich lerne Deutsch.</span>', '<span class="de">Ich lerne Deutsch, <span class="r-weil">weil</span> ich hier arbeiten <span class="r-verb">m\u00f6chte</span>.</span>'],
          ['<span class="de">Max will Grafiker werden.</span>', '<span class="de">\u2026, <span class="r-weil">weil</span> das Handwerk kreativ <span class="r-verb">ist</span>.</span>'],
          ['<span class="de">Ich besuche den Kurs.</span>', '<span class="de">\u2026, <span class="r-weil">weil</span> ich flie\u00dfend sprechen <span class="r-verb">will</span>.</span>'],
          ['<span class="de">Anna macht das Abitur.</span>', '<span class="de">\u2026, <span class="r-weil">weil</span> sie studieren <span class="r-verb">will</span>.</span>']
        ]
      },
      note: 'Only the <b>weil</b>-part changes \u2014 the main clause is untouched. Picture the verb being <b>pushed to the wall</b> at the end of the weil-clause.',
      hinglish: 'Jaise hi tum <b>weil</b> lagate ho, us clause ka verb sentence ke end mein chala jaata hai. <b>weil</b> se pehle comma zaroori hai. Main clause (Hauptsatz) waisa hi rehta hai, uska verb position 2 par hi rehta hai.'
    },
    {
      title: 'Hauptsatz vs. Nebensatz \u2014 side by side',
      body: [
        'The same idea, two word orders. In the <strong>Hauptsatz</strong> the verb is second; in the <strong>Nebensatz</strong> it is last.'
      ],
      table: {
        head: ['Clause', 'Position 1', 'Verb', 'Rest'],
        rows: [
          ['Hauptsatz', '<span class="de">Ich</span>', '<span class="de r-verb">lerne</span>', '<span class="de">Deutsch.</span>'],
          ['Nebensatz', '<span class="de"><span class="r-weil">weil</span> ich Deutsch</span>', '\u2014', '<span class="de">\u2026 lernen <span class="r-verb">m\u00f6chte</span>.</span>'],
          ['Hauptsatz', '<span class="de">Das Handwerk</span>', '<span class="de r-verb">ist</span>', '<span class="de">kreativ.</span>'],
          ['Nebensatz', '<span class="de"><span class="r-weil">weil</span> das Handwerk kreativ</span>', '\u2014', '<span class="de r-verb">ist</span>']
        ]
      },
      note: 'In the Nebensatz nothing sits in \u201cposition 2\u201d \u2014 the verb waits at the <b>back</b>. That is the single visual difference to remember.',
      hinglish: 'Hauptsatz mein verb doosri seat par baithta hai, aur Nebensatz mein verb sentence ke end mein aata hai. Bas yahi ek farak yaad rakhna hai \u2014 <b>weil</b>-clause mein verb peeche intezaar karta hai.'
    },
    {
      title: 'warum? \u2192 weil \u2026',
      body: [
        'Every <span class="de r-question">warum?</span> (why?) question invites a <span class="de r-weil">weil</span> answer. You can reply with a full sentence or \u2014 in speech \u2014 just the weil-clause.'
      ],
      table: {
        head: ['Question (warum?)', 'Full answer', 'Short spoken answer'],
        rows: [
          ['<span class="de">Warum lernst du Deutsch?</span>', '<span class="de">Ich lerne Deutsch, <span class="r-weil">weil</span> ich hier arbeiten <span class="r-verb">m\u00f6chte</span>.</span>', '<span class="de"><span class="r-weil">Weil</span> ich hier arbeiten <span class="r-verb">m\u00f6chte</span>.</span>'],
          ['<span class="de">Warum reitest du gern?</span>', '<span class="de">Ich reite gern, <span class="r-weil">weil</span> das Pferd ruhig <span class="r-verb">ist</span>.</span>', '<span class="de"><span class="r-weil">Weil</span> das Pferd ruhig <span class="r-verb">ist</span>.</span>'],
          ['<span class="de">Warum warst du nicht da?</span>', '<span class="de">Ich war nicht da, <span class="r-weil">weil</span> ich krank <span class="r-verb">war</span>.</span>', '<span class="de"><span class="r-weil">Weil</span> ich krank <span class="r-verb">war</span>.</span>']
        ]
      },
      note: 'Even the short answer keeps the verb <b>at the end</b>: <span class="de">Weil ich m\u00fcde <b>bin</b>.</span> Starting a spoken reply with <b>Weil</b> is completely natural.',
      hinglish: '<b>warum?</b> ka jawaab aksar <b>weil</b> se diya jaata hai. Tum poora sentence bol sakte ho, ya bolchal mein sirf <b>weil</b>-clause: <b>Weil ich m\u00fcde bin</b>. Chhote jawaab mein bhi verb sentence ke end mein hi rehta hai.'
    },
    {
      title: 'weil in the Perfekt and with modals',
      goldenRule: 'Two verb parts? The <b>conjugated</b> one goes truly last \u2014 after the participle or infinitive.',
      formula: [
        'main:  Ich <b>habe</b> den Bus verloren.',
        'weil:  \u2026, weil ich den Bus verloren <b>habe</b>.',
        'main:  Ich <b>m\u00f6chte</b> arbeiten.',
        'weil:  \u2026, weil ich arbeiten <b>m\u00f6chte</b>.'
      ],
      memoryTrick: 'Normal sentence mein helper <b>aage</b> hota hai, weil-clause mein wahi helper <b>sabse peeche</b> chala jaata hai. Order ulta ho jaata hai.',
      body: [
        'When the clause already has two verb parts (Perfekt or a modal), the <strong>conjugated</strong> one goes truly last \u2014 <em>after</em> the participle or infinitive.'
      ],
      table: {
        head: ['Type', 'weil-clause', 'What ends the clause'],
        rows: [
          ['Perfekt', '<span class="de">\u2026, <span class="r-weil">weil</span> ich den Bus verloren <span class="r-verb">habe</span>.</span>', 'habe (after the Partizip)'],
          ['Perfekt (sein)', '<span class="de">\u2026, <span class="r-weil">weil</span> ich zu sp\u00e4t gekommen <span class="r-verb">bin</span>.</span>', 'bin (after the Partizip)'],
          ['Modal', '<span class="de">\u2026, <span class="r-weil">weil</span> ich arbeiten <span class="r-verb">m\u00f6chte</span>.</span>', 'm\u00f6chte (after the infinitive)'],
          ['Modal', '<span class="de">\u2026, <span class="r-weil">weil</span> ich flie\u00dfend sprechen <span class="r-verb">will</span>.</span>', 'will (after the infinitive)']
        ]
      },
      note: 'The order flips versus a main clause: <span class="de">Ich <b>habe</b> den Bus verloren</span> \u2192 <span class="de">\u2026, weil ich den Bus verloren <b>habe</b></span>. The little helper (habe/bin/will) slides to the very back.',
      hinglish: 'Agar clause mein Perfekt ya modal hai, to conjugated verb (<b>habe</b>, <b>bin</b>, <b>will</b>) sabse end mein aata hai \u2014 Partizip ya Infinitiv ke baad: <b>\u2026, weil ich den Bus verloren habe</b>. Dhyaan do ki main clause mein order ulta hota hai: <b>habe \u2026 verloren</b>.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four weil traps to avoid.' ],
      mistakes: [
        { wrong: 'weil ich m\u00f6chte hier arbeiten', right: 'weil ich hier arbeiten m\u00f6chte', why: 'The conjugated verb must go to the END of the weil-clause, not stay in position 2.' },
        { wrong: 'Ich lerne Deutsch weil ich \u2026', right: 'Ich lerne Deutsch, weil ich \u2026', why: 'Always put a comma before weil.' },
        { wrong: 'weil ich habe den Bus verloren', right: 'weil ich den Bus verloren habe', why: 'In the Perfekt, habe is the conjugated verb \u2014 it goes last, after the participle.' },
        { wrong: 'Warum? Denn ich bin m\u00fcde.', right: 'Warum? Weil ich m\u00fcde bin.', why: 'Answer warum? with weil (+ verb at the end), not denn.' }
      ],
      hinglish: 'Char galtiyan common hain. Pehli, verb ko position 2 par chhod dena \u2014 sahi hai <b>weil ich hier arbeiten m\u00f6chte</b>. Doosri, <b>weil</b> se pehle comma bhool jaana. Teesri, Perfekt mein <b>habe</b> ko end mein na rakhna \u2014 sahi hai <b>\u2026 verloren habe</b>. Aur chauthi, <b>warum?</b> ka jawaab dete waqt word order galat kar dena.'
    }
  ],

  // ---------- Reading passage (Maxs Weg zum Grafiker, clickable) ----------
  reading: {
    title: 'Warum Grafiker?',
    titleEn: 'Why a graphic designer?',
    tokens: [
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'hei\u00dfe', role: 'r-verb', en: 'am called', hi: 'नाम है', pron: 'HY-suh', type: 'Verb \u00b7 hei\u00dfen', why: 'hei\u00dfen (recycled \u2014 Wer bist du?).', ex: 'Ich hei\u00dfe Max.', exEn: 'My name is Max.' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'lerne', role: 'r-verb', en: 'learn', hi: 'सीखता हूँ', pron: 'LAIR-nuh', type: 'Verb \u00b7 lernen' },
      { w: 'Deutsch', role: 'r-object', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun \u00b7 neut.' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-weil', en: 'because', hi: 'क्योंकि', pron: 'vile', type: 'Conjunction \u00b7 weil', why: 'weil \u2192 verb last (this chapter).', ex: 'weil ich Grafiker werden will', exEn: 'because I want to be a graphic designer' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'Grafiker', role: 'r-object', en: 'graphic designer', hi: 'ग्राफ़िक डिज़ाइनर', pron: 'GRAH-fi-ker', type: 'Noun \u00b7 masc.', why: 'der Grafiker (this chapter).', ex: 'Grafiker werden', exEn: 'to become a graphic designer' },
      { w: 'werden', role: 'r-verb', en: 'become', hi: 'बनना', pron: 'VAIR-den', type: 'Infinitive' },
      { w: 'will', role: 'r-verb', en: 'want to', hi: 'चाहता हूँ', pron: 'vil', type: 'Modalverb \u00b7 wollen', why: 'conjugated verb last (this chapter).', ex: '\u2026, weil ich werden will.', exEn: '\u2026 because I want to become.' },
      { w: '.', plain: true },
      { w: 'In', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article \u00b7 dative' },
      { w: 'Schulzeit', role: 'r-place', en: 'school days', hi: 'स्कूली दिनों', pron: 'SHOOL-tsite', type: 'Noun \u00b7 fem.', why: 'die Schulzeit (this chapter).', ex: 'in der Schulzeit', exEn: 'during school days' },
      { w: 'mochte', role: 'r-verb', en: 'liked', hi: 'पसंद था', pron: 'MOKH-tuh', type: 'Verb \u00b7 m\u00f6gen (Pr\u00e4t.)', why: 'mochte (recycled \u2014 Modalverben).', ex: 'Ich mochte Informatik.', exEn: 'I liked computer science.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'Informatik', role: 'r-object', en: 'computer science', hi: 'कंप्यूटर विज्ञान', pron: 'in-for-MAH-tik', type: 'Noun \u00b7 fem.', why: 'die Informatik (this chapter).', ex: 'Ich mochte Informatik.', exEn: 'I liked IT.' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-weil', en: 'because', hi: 'क्योंकि', pron: 'vile', type: 'Conjunction \u00b7 weil' },
      { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Projekte', role: 'r-subject', en: 'projects', hi: 'परियोजनाएँ', pron: 'pro-YEK-tuh', type: 'Noun \u00b7 plural', why: 'das Projekt \u2192 die Projekte (recycled \u2014 Arbeit).', ex: 'die Projekte', exEn: 'the projects' },
      { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतने', pron: 'zo', type: 'Adverb', why: 'so + adjective (this chapter).', ex: 'so spannend', exEn: 'so exciting' },
      { w: 'spannend', role: 'r-adjective', en: 'exciting', hi: 'रोमांचक', pron: 'SHPA-nent', type: 'Adjective', why: 'spannend (this chapter).', ex: 'so spannend', exEn: 'so exciting' },
      { w: 'waren', role: 'r-verb', en: 'were', hi: 'थे', pron: 'VAH-ren', type: 'Verb \u00b7 sein (Pr\u00e4t.)', why: 'conjugated verb at the end of the weil-clause (this chapter).', ex: '\u2026, weil die Projekte spannend waren.', exEn: '\u2026 because the projects were exciting.' },
      { w: '.', plain: true },
      { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरे', pron: 'mine', type: 'Possessive' },
      { w: 'Englischlehrer', role: 'r-subject', en: 'English teacher', hi: 'अंग्रेज़ी शिक्षक', pron: 'ENG-lish-lay-rer', type: 'Noun \u00b7 masc.', why: 'der Englischlehrer (this chapter).', ex: 'mein Englischlehrer', exEn: 'my English teacher' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'दी', pron: 'hat', type: 'Verb \u00b7 haben' },
      { w: 'mir', role: 'r-dativ', en: 'to me', hi: 'मुझे', pron: 'meer', type: 'Pronoun \u00b7 dative' },
      { w: 'geholfen', role: 'r-verb', en: 'helped', hi: 'मदद की', pron: 'guh-HOL-fen', type: 'Partizip II \u00b7 helfen', why: 'Perfekt (recycled \u2014 Perfekt Wdh.).', ex: 'Er hat mir geholfen.', exEn: 'He helped me.' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-weil', en: 'because', hi: 'क्योंकि', pron: 'vile', type: 'Conjunction \u00b7 weil' },
      { w: 'mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
      { w: 'Deutsch', role: 'r-subject', en: 'German', hi: 'जर्मन', pron: 'doytch', type: 'Noun \u00b7 neut.' },
      { w: 'damals', role: 'r-time', en: 'back then', hi: 'उस समय', pron: 'DAH-mahls', type: 'Adverb \u00b7 time', why: 'damals (recycled \u2014 Zeitangaben).', ex: 'damals', exEn: 'back then' },
      { w: 'schlecht', role: 'r-adjective', en: 'bad', hi: 'ख़राब', pron: 'shlekht', type: 'Adjective', why: 'schlecht (this chapter).', ex: 'Mein Deutsch war schlecht.', exEn: 'My German was bad.' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb \u00b7 sein (Pr\u00e4t.)', why: 'verb at the end of the weil-clause (this chapter).', ex: '\u2026, weil mein Deutsch schlecht war.', exEn: '\u2026 because my German was bad.' },
      { w: '.', plain: true },
      { w: 'Heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb \u00b7 time' },
      { w: 'besuche', role: 'r-verb', en: 'attend', hi: 'जाता हूँ', pron: 'buh-ZOO-khuh', type: 'Verb \u00b7 besuchen', why: 'besuchen (this chapter).', ex: 'Ich besuche einen Kurs.', exEn: 'I attend a course.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'INE-en', type: 'Article \u00b7 acc.' },
      { w: 'Deutschkurs', role: 'r-object', en: 'German course', hi: 'जर्मन कोर्स', pron: 'DOYTCH-kurs', type: 'Noun \u00b7 masc.', why: 'compound: der Kurs (recycled \u2014 Artikel Wdh.).', ex: 'einen Deutschkurs', exEn: 'a German course' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'sammle', role: 'r-verb', en: 'gather', hi: 'हासिल करता हूँ', pron: 'ZAM-luh', type: 'Verb \u00b7 sammeln' },
      { w: 'Erfahrung', role: 'r-object', en: 'experience', hi: 'अनुभव', pron: 'air-FAH-rung', type: 'Noun \u00b7 fem.', why: 'die Erfahrung (this chapter).', ex: 'Erfahrung sammeln', exEn: 'to gain experience' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-weil', en: 'because', hi: 'क्योंकि', pron: 'vile', type: 'Conjunction \u00b7 weil' },
      { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article' },
      { w: 'Handwerk', role: 'r-subject', en: 'trade', hi: 'शिल्प', pron: 'HANT-vairk', type: 'Noun \u00b7 neut.', why: 'das Handwerk (this chapter).', ex: 'das Handwerk', exEn: 'the trade' },
      { w: 'viel', role: 'r-akkusativ', en: 'a lot of', hi: 'बहुत', pron: 'feel', type: 'Determiner' },
      { w: 'Vorbereitung', role: 'r-object', en: 'preparation', hi: 'तैयारी', pron: 'FOR-buh-ry-tung', type: 'Noun \u00b7 fem.', why: 'die Vorbereitung (this chapter).', ex: 'viel Vorbereitung', exEn: 'a lot of preparation' },
      { w: 'braucht', role: 'r-verb', en: 'needs', hi: 'चाहिए', pron: 'browkht', type: 'Verb \u00b7 brauchen', why: 'conjugated verb ends the weil-clause (this chapter).', ex: '\u2026, weil das Handwerk Vorbereitung braucht.', exEn: '\u2026 because the trade needs preparation.' },
      { w: '.', plain: true },
      { w: 'Ehrlich', role: 'r-adverb', en: 'honestly', hi: 'सच में', pron: 'AIR-likh', type: 'Adverb', why: 'ehrlich (this chapter).', ex: 'Ehrlich, ich freue mich!', exEn: 'Honestly, I\u2019m happy!' },
      { w: ',', plain: true },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'freue', role: 'r-verb', en: 'look forward', hi: 'उत्सुक हूँ', pron: 'FROY-uh', type: 'Verb \u00b7 sich freuen', why: 'sich freuen (recycled \u2014 Gef\u00fchle).', ex: 'Ich freue mich.', exEn: 'I\u2019m happy.' },
      { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'खुद को', pron: 'mikh', type: 'Pronoun \u00b7 acc.' },
      { w: 'auf', role: 'r-preposition', en: 'to', hi: 'का', pron: 'owf', type: 'Preposition' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article \u00b7 acc.' },
      { w: 'Zukunft', role: 'r-object', en: 'future', hi: 'भविष्य', pron: 'TSOO-kunft', type: 'Noun \u00b7 fem.', why: 'die Zukunft (recycled \u2014 Pl\u00e4ne).', ex: 'die Zukunft', exEn: 'the future' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-weil', en: 'because', hi: 'क्योंकि', pron: 'vile', type: 'Conjunction \u00b7 weil' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'jetzt', role: 'r-time', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb \u00b7 time' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article \u00b7 acc.' },
      { w: 'Ziel', role: 'r-object', en: 'goal', hi: 'लक्ष्य', pron: 'tseel', type: 'Noun \u00b7 neut.', why: 'das Ziel (recycled \u2014 Pl\u00e4ne).', ex: 'ein Ziel haben', exEn: 'to have a goal' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb \u00b7 haben', why: 'conjugated verb last in the weil-clause (this chapter).', ex: '\u2026, weil ich ein Ziel habe.', exEn: '\u2026 because I have a goal.' },
      { w: '.', plain: true }
    ],
    translation: 'My name is Max. I learn German because I want to become a graphic designer. During my school days I liked computer science, because the projects were so exciting. My English teacher helped me, because my German was bad back then. Today I attend a German course and gain experience, because the trade needs a lot of preparation. Honestly, I look forward to the future, because I now have a goal. \u2014 Count the weil-clauses: in every single one, the conjugated verb (will, waren, war, braucht, habe) sits at the very end.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_004_L001', speaker: 'Rieke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Kilian, warum läufst du jeden Morgen?', en: 'Kilian, why do you run every morning?' },
      { id: 'A2_004_L002', speaker: 'Kilian', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Weil ich fit bleiben will und der Kopf danach frei ist. Und warum malst du so oft, Rieke?', en: 'Because I want to stay fit and my head feels clear afterwards. And why do you paint so often, Rieke?' },
      { id: 'A2_004_L004', speaker: 'Rieke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Weil es mich entspannt und ich neue Farben mag.', en: 'Because it relaxes me and I like new colors.' }
    ],
    transcript: 'Kilian, warum läufst du jeden Morgen? Weil ich fit bleiben will und der Kopf danach frei ist. Und warum malst du so oft, Rieke? Weil es mich entspannt und ich neue Farben mag.',
    translation: 'Kilian, why do you run every morning? Because I want to stay fit and my head feels clear afterwards. And why do you paint so often, Rieke? Because it relaxes me and I like new colors.',
    tokens: [
      { w: 'Kilian' },
      { w: ',', plain: true },
      { w: 'warum' },
      { w: 'läufst' },
      { w: 'du' },
      { w: 'jeden' },
      { w: 'Morgen' },
      { w: '?', plain: true },
      { w: 'Weil' },
      { w: 'ich' },
      { w: 'fit' },
      { w: 'bleiben' },
      { w: 'will' },
      { w: 'und' },
      { w: 'der' },
      { w: 'Kopf' },
      { w: 'danach' },
      { w: 'frei' },
      { w: 'ist' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'warum' },
      { w: 'malst' },
      { w: 'du' },
      { w: 'so' },
      { w: 'oft' },
      { w: ',', plain: true },
      { w: 'Rieke' },
      { w: '?', plain: true },
      { w: 'Weil' },
      { w: 'es' },
      { w: 'mich' },
      { w: 'entspannt' },
      { w: 'und' },
      { w: 'ich' },
      { w: 'neue' },
      { w: 'Farben' },
      { w: 'mag' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum läuft Kilian jeden Morgen?', qEn: 'Why does Kilian run every morning?', options: ['weil er spät aufsteht', 'weil er fit bleiben will', 'weil sein Hund es mag', 'weil es Pflicht ist'], optionsEn: ['because he gets up late', 'because he wants to stay fit', 'because his dog likes it', 'because it is compulsory'], answer: 1,
        explain: '"Weil ich fit bleiben will …"' },
      { q: 'Warum malt Rieke oft?', qEn: 'Why does Rieke paint often?', options: ['weil sie Geld verdient', 'weil es sie entspannt', 'weil ihre Freunde es tun', 'weil es einfach ist'], optionsEn: ['because she earns money', 'because it relaxes her', 'because her friends do it', 'because it is easy'], answer: 1,
        explain: '"Weil es mich entspannt …"' }
    ]
  },

  speaking: [
    { task: "Deine Lehrerin fragt: Warum lernst du Deutsch?", taskEn: "Your teacher asks: why are you learning German?", de: "Ich lerne Deutsch, weil ich hier eine Ausbildung machen will.", en: "I'm learning German because I want to train here." },
    { task: "Dein Freund fragt: Warum kommst du nicht zur Klassenfahrt?", taskEn: "Your friend asks: why aren't you coming on the class trip?", de: "Ich komme nicht mit, weil ich eine Vorlesung habe.", en: "I'm not coming because I have a lecture." },
    { task: "Deine Mutter fragt: Warum magst du Informatik so sehr?", taskEn: "Your mother asks: why do you like computer science so much?", de: "Ich mag Informatik, weil ich viel Erfahrung damit habe.", en: "I like computer science because I have a lot of experience with it." },
    { task: "Dein Partner fragt: Warum war die Schulzeit für dich schwer?", taskEn: "Your partner asks: why was school hard for you?", de: "Die Schulzeit war schwer, weil Mathematik und Chemie schwierig waren.", en: "School was hard because maths and chemistry were difficult." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Answer these five warum? questions with complete weil-sentences (the conjugated verb at the end): 1) Warum lernst du Deutsch? 2) Warum besuchst du diesen Kurs? 3) Warum magst du dein Lieblingsfach? 4) Warum warst du einmal nicht da? (use the Perfekt: \u2026 weil ich \u2026 habe/bin) 5) Warum freust du dich auf die Ferien? Try this chapter\u2019s words: spannend, flie\u00dfend, die Erfahrung, das Handwerk, die Vorlesung, abschlie\u00dfen, die Ferien.',
    starters: ['Ich lerne Deutsch, weil \u2026', 'Ich besuche diesen Kurs, weil \u2026', 'Ich mag \u2026, weil \u2026', 'Ich war nicht da, weil ich \u2026 habe.'],
    placeholder: 'Ich lerne Deutsch, weil ich in Deutschland studieren m\u00f6chte. Ich besuche diesen Kurs, weil \u2026',
    minWords: 30
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct?',
      options: [
        'Ich lerne Deutsch, weil ich m\u00f6chte hier arbeiten.',
        'Ich lerne Deutsch, weil ich hier arbeiten m\u00f6chte.',
        'Ich lerne Deutsch weil ich hier arbeiten m\u00f6chte.',
        'Ich lerne, weil Deutsch ich hier arbeiten m\u00f6chte.'
      ],
      answer: 1,
      explain: 'Comma before weil, and the conjugated verb (m\u00f6chte) goes to the very end.'
    },
    gap: {
      // learner supplies "weil" then the verb that lands at the end
      sentence: ['Ich besuche den Kurs, ', ' ich flie\u00dfend sprechen ', '.'],
      gaps: [ { answer: 'weil', accepts: ['weil'] }, { answer: 'will', accepts: ['will', 'm\u00f6chte'] } ],
      explain: 'weil opens the clause; the conjugated verb (will/m\u00f6chte) stands at the end.'
    },
    match: {
      q: 'Match each warum?-question to its weil-answer.',
      pairs: [
        { noun: 'Warum lernst du Deutsch?', art: 'Weil ich hier arbeiten m\u00f6chte.' },
        { noun: 'Warum warst du nicht da?', art: 'Weil ich krank war.' },
        { noun: 'Warum reitest du gern?', art: 'Weil das Pferd ruhig ist.' },
        { noun: 'Warum magst du Informatik?', art: 'Weil die Projekte spannend sind.' },
        { noun: 'Warum bist du m\u00fcde?', art: 'Weil ich den Bus verloren habe.' }
      ]
    },
    builder: {
      target: 'Build the weil-clause: "\u2026 because I want to work in Germany."',
      bank: ['weil', 'ich', 'in', 'Deutschland', 'arbeiten', 'm\u00f6chte'],
      answer: ['weil', 'ich', 'in', 'Deutschland', 'arbeiten', 'm\u00f6chte'],
      roles: { 'weil': 'r-weil', 'ich': 'r-subject', 'in': 'r-preposition', 'Deutschland': 'r-place', 'arbeiten': 'r-verb', 'm\u00f6chte': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What happens to the verb after weil?', options: ['it stays in position 2', 'it moves to the very end', 'it disappears', 'it doubles'], answer: 1,
      explain: 'After weil, the conjugated verb goes to the end of the clause.' },
    { q: 'Which is punctuated correctly?', options: ['Ich bleibe zu Hause weil ich krank bin.', 'Ich bleibe zu Hause, weil ich krank bin.', 'Ich bleibe, zu Hause weil ich krank bin.', 'Ich bleibe zu Hause weil, ich krank bin.'], answer: 1,
      explain: 'A comma always comes before weil.' },
    { q: 'Complete (Perfekt): "\u2026, weil ich den Bus ___ ___."', options: ['habe verloren', 'verloren habe', 'verliere habe', 'habe verlieren'], answer: 1,
      explain: 'In the weil-clause the conjugated verb (habe) is last, after the participle: \u2026 verloren habe.' },
    { q: 'Answer: "Warum lernst du Deutsch?" \u2014 which is best?', options: ['Denn ich m\u00f6chte hier arbeiten.', 'Weil ich hier arbeiten m\u00f6chte.', 'Weil ich m\u00f6chte hier arbeiten.', 'Ich hier arbeiten m\u00f6chte weil.'], answer: 1,
      explain: 'Answer warum? with weil and the verb at the end: Weil ich hier arbeiten m\u00f6chte.' },
    { q: 'Where is the verb in a Hauptsatz (main clause)?', options: ['at the end', 'in position 2', 'in position 1', 'anywhere'], answer: 1,
      explain: 'The main clause keeps its verb in position 2; only the weil-clause sends it to the end.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-weil', html: 'Add <span class="de r-weil">weil</span> to give a reason, and the <span class="de r-verb">conjugated verb</span> slides to the very end: <span class="de">Ich lerne Deutsch, weil ich hier arbeiten <b>m\u00f6chte</b>.</span>' },
    { c: 'r-weil', html: 'A <b>comma</b> always sits before weil; the main clause keeps its verb in position 2 \u2014 only the weil-clause changes.' },
    { c: 'r-question', html: 'Answer any <span class="de r-question">warum?</span> with <span class="de r-weil">weil</span> \u2014 in full or, in speech, just the weil-clause: <span class="de">Weil ich m\u00fcde <b>bin</b>.</span>' }
  ],
  revisionTips: [
    'One picture: after weil, the verb is pushed to the wall at the end of the clause.',
    'In the Perfekt the helper goes last: "Ich habe \u2026 verloren" \u2192 "\u2026, weil ich \u2026 verloren habe."',
    'Every time you say a reason, start with weil and check: is my verb at the end?'
  ]
};

window.CHAPTER = CHAPTER;
