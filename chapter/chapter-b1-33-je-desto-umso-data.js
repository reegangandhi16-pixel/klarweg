/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 33
   "je ... desto / umso" — proportional comparisons. Does NOT
   introduce literary inversions, advanced comparative clauses,
   or B2 stylistic structures.
   IMPORTANT: dialogue uses ONLY Britta and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-33 list (45 items) — a
   globalization/consumer-economics theme (Globalisierung,
   Weltmarkt, Konsument, Wohlstand, Standpunkt, Argument…) — a
   natural fit for proportional debate: "Je mehr wir konsumieren,
   desto größer wird der Wohlstand — aber auch das Umweltproblem."
============================================================ */
const CHAPTER = {
  id: 'b1-33-je-desto-umso',
  phase: 'B1 · Phase 1',
  number: 33,
  title: 'je … desto / umso',
  titleEn: 'Proportional comparisons: je … desto/umso',
  description: 'Link two rising or falling quantities: je mehr ich übe, desto besser werde ich — with desto and umso interchangeable, and the exact word order that makes it work.',
  xp: 290,
  time: 55,
  difficulty: 'Intermediate',
  nextChapter: { number: 34, title: 'Partizipien als Adjektive', titleEn: 'Participles as adjectives' , href: 'chapter-b1-34-partizipien-als-adjektive.html' },

  prevChapter: { number: 32, title: 'Relativsätze mit was & wo', titleEn: 'Relative clauses with was & wo', href: 'chapter-b1-32-relativsaetze-was-wo.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'As one thing rises, <em>so does the other.</em>',
    intro: 'Over lunch, Britta and Timo debate globalization — the more we buy, the more trash accumulates; the cheaper a product, the more people buy it — every argument a proportional comparison with je…desto or umso.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear je … desto and je … umso used naturally in one conversation'
    ],
    scene: 'Eine Diskussion in der Uni-Mensa',
    femaleSpeakers: ['Britta'],
    dialogue: [
      { speaker: 'Britta', tokens: [
        { w: 'Je', role: 'r-conjunction', en: 'the', hi: 'जितना', pron: 'yay', type: 'Conjunction · je … desto', why: 'je + Komparativ ... desto + Komparativ = the more ... the more, this chapter.', ex: 'Je mehr wir kaufen, desto mehr Müll entsteht.', exEn: 'The more we buy, the more trash arises.' },
        { w: 'mehr', role: 'r-akkusativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner · Komparativ' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'kaufen', role: 'r-verb', en: 'buy', hi: 'ख़रीदते हैं', pron: 'KOW-fen', type: 'Verb · kaufen (Satzende)' },
        { w: ',', plain: true },
        { w: 'desto', role: 'r-conjunction', en: 'the more', hi: 'उतना ही ज़्यादा', pron: 'DES-to', type: 'Conjunction · part 2' },
        { w: 'mehr', role: 'r-subject', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner · Komparativ' },
        { w: 'Müll', role: 'r-subject', en: 'trash', hi: 'कचरा', pron: 'mül', type: 'Noun · masc.' },
        { w: 'entsteht', role: 'r-verb', en: 'arises', hi: 'बनता है', pron: 'ent-SHTAYT', type: 'Verb · entstehen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The more we buy, the more trash arises.', hi: 'Jitna zyada hum khareedte hain, utna hi zyada kachra banta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Stimmt', role: 'r-verb', en: 'true', hi: 'सही है', pron: 'SHTIMT', type: 'Verb · stimmen' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'je', role: 'r-conjunction', en: 'the', hi: 'जितना', pron: 'yay', type: 'Conjunction · je … desto' },
        { w: 'billiger', role: 'r-subject', en: 'cheaper', hi: 'सस्ता', pron: 'BI-li-ger', type: 'Adjective · Komparativ' },
        { w: 'ein', role: 'r-subject', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut.' },
        { w: 'Produkt', role: 'r-subject', en: 'product', hi: 'उत्पाद', pron: 'pro-DUKT', type: 'Noun · neut.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: ',', plain: true },
        { w: 'desto', role: 'r-conjunction', en: 'the more', hi: 'उतना ही', pron: 'DES-to', type: 'Conjunction · part 2' },
        { w: 'mehr', role: 'r-akkusativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner · Komparativ' },
        { w: 'kaufen', role: 'r-verb', en: 'buy', hi: 'ख़रीदते हैं', pron: 'KOW-fen', type: 'Verb · kaufen (Satzende)' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Konsumenten', role: 'r-subject', en: 'consumers', hi: 'उपभोक्ता', pron: 'kon-zu-MEN-ten', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'True. And the cheaper a product is, the more the consumers buy.', hi: 'Sahi hai. Aur jitna sasta utpaad hota hai, utna hi zyada upbhokta khareedte hain.' },
      { speaker: 'Britta', tokens: [
        { w: 'Umso', role: 'r-conjunction', en: 'the more', hi: 'उतना ही', pron: 'UM-zo', type: 'Conjunction · umso', why: 'umso works like desto in the second clause (this chapter).', ex: 'Je mehr wir sparen, umso besser für die Umwelt.', exEn: 'The more we save, the better for the environment.' },
        { w: 'besser', role: 'r-subject', en: 'better', hi: 'बेहतर', pron: 'BE-ser', type: 'Adjective · Komparativ' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Umwelt', role: 'r-akkusativ', en: 'environment', hi: 'पर्यावरण', pron: 'UM-velt', type: 'Noun · fem.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: ',', plain: true },
        { w: 'je', role: 'r-conjunction', en: 'the', hi: 'जितना', pron: 'yay', type: 'Conjunction · je … desto/umso' },
        { w: 'weniger', role: 'r-akkusativ', en: 'less', hi: 'कम', pron: 'VAY-ni-ger', type: 'Adverb' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'konsumieren', role: 'r-verb', en: 'consume', hi: 'उपभोग करते हैं', pron: 'kon-zu-MEE-ren', type: 'Verb · konsumieren (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The less we consume, the better for the environment.', hi: 'Jitna kam hum upbhog karte hain, utna hi behtar paryavaran ke liye hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Je', role: 'r-conjunction', en: 'the', hi: 'जितना', pron: 'yay', type: 'Conjunction · je … desto' },
        { w: 'bewusster', role: 'r-subject', en: 'more consciously', hi: 'ज़्यादा सोच-समझ कर', pron: 'be-VUS-ter', type: 'Adjective · Komparativ' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'einkaufen', role: 'r-verb', en: 'shop', hi: 'ख़रीदारी करते हैं', pron: 'INE-kow-fen', type: 'Verb · einkaufen (Satzende)' },
        { w: ',', plain: true },
        { w: 'desto', role: 'r-conjunction', en: 'the more', hi: 'उतना ही', pron: 'DES-to', type: 'Conjunction · part 2' },
        { w: 'wünschenswerter', role: 'r-subject', en: 'more desirable', hi: 'ज़्यादा वांछनीय', pron: 'VÜN-shens-vair-ter', type: 'Adjective · Komparativ', why: 'wünschenswert = desirable (this chapter).', ex: 'Das ist wünschenswert.', exEn: 'That is desirable.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'unsere', role: 'r-subject', en: 'our (fem.)', hi: 'हमारा', pron: 'UN-ze-ruh', type: 'Possessive' },
        { w: 'Zukunft', role: 'r-subject', en: 'future', hi: 'भविष्य', pron: 'TSOO-kunft', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Exactly! The more consciously we shop, the more desirable our future is.', hi: 'Bilkul! Jitna zyada soch-samajh kar hum khareedaari karte hain, utna hi hamaara bhavishya vaanchhaniya hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Link two rising or falling quantities in one sentence: <span class="de r-connector">je</span> + comparative starts it, <span class="de r-connector">desto</span> (or <span class="de r-connector">umso</span> — identical meaning) + comparative shows the result: <span class="de">Je mehr ich übe, desto besser werde ich.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is JE ... DESTO/UMSO (B1 level only, proportional comparisons): je + comparative (verb-final subordinate clause) + comma + desto/umso + comparative + verb (position 2, inverted). desto and umso are fully interchangeable in meaning; desto is somewhat more common in writing. ' +
    'Do NOT expect literary inversions, advanced comparative clauses, or B2 stylistic structures — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- The je-clause is a subordinate clause: verb goes to the very end (je mehr ich lerne, ...).\n' +
    '- The desto/umso-clause has normal main-clause word order with desto/umso + comparative first, then the verb in position 2 (desto besser spreche ich).\n' +
    '- Both halves need a real comparative adjective/adverb — never a bare positive form (never "desto gut", always "desto besser").\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Word-order check:</b> one sentence on whether the je-clause is verb-final and the desto/umso-clause has verb in position 2.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly form je … desto/umso comparisons with the right word order every time. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the formation table once — especially the word order in the desto/umso clause — then continue.',
    low: 'Worth another pass through the Grammar section — practise the quick decision guide: je + comparative (verb-final), desto/umso + comparative (verb second).'
  },

  parserSentence: [
    { w: 'Je', role: 'r-connector' }, { w: 'mehr', role: 'plain' },
    { w: 'ich', role: 'r-subject' }, { w: 'lerne', role: 'plain' },
    { w: ',', plain: true }, { w: 'desto', role: 'r-connector' },
    { w: 'besser', role: 'plain' }, { w: 'spreche', role: 'plain' },
    { w: 'ich', role: 'r-subject' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: je + comparative starts it, desto/umso + comparative shows the result.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Britta and Timo debate globalization using proportional comparisons.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 45 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master je … desto and je … umso, including word order in both halves.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage on globalization, full of je … desto/umso clauses.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch proportional comparisons in natural spoken German.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give advice and compare habits using je … desto/umso naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write opinion or advice texts using proportional comparisons.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill je … desto/umso word order and sentence building.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 290 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 45 chapter words — globalization and consumer-economics vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '9 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'je … desto/umso sentence-building drills, error correction, and an opinion-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete je … desto/umso reference — formation, word order, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '6 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'je mehr …, desto besser', text: 'Form proportional comparisons with desto' },
    { de: 'je mehr …, umso besser', text: 'Form proportional comparisons with umso' },
    { de: 'desto = umso', text: 'Know that desto and umso are fully interchangeable' },
    { de: 'Wortstellung', text: 'Place the verb correctly in both halves of the sentence' },
    { de: 'Argumentation', text: 'Use proportional comparisons to argue a point of view' }
  ],

  // ---------- Vocabulary (45 items — full chapter-33 upload list) ----------
  vocab: [
    { de: 'contra', pos: 'noun', level: 'B1', en: 'con (against)', hi: 'विरुद्ध', ex: 'Contra steht der Standpunkt, dass kleine Firmen nicht profitieren.', exEn: 'Against that stands the point of view that small companies don\'t profit.', exHi: 'Iske virudh yeh drishtikon hai ki chhoti kampaniyaan laabh nahi uthaatin.' },
    { de: 'Argument', art: 'das', gender: 'n', plural: 'Argumente', pos: 'noun', level: 'B1', en: 'argument', hi: 'तर्क', ex: 'Das ist ein überzeugendes Argument.', exEn: 'That\'s a convincing argument.', exHi: 'Yeh ek thos tark hai.' },
    { de: 'Umweltproblem', art: 'das', gender: 'n', plural: 'Umweltprobleme', pos: 'noun', level: 'B1', en: 'environmental problem', hi: 'पर्यावरण समस्या', ex: 'Wohlstand ist problematisch, wenn er Umweltprobleme verursacht.', exEn: 'Prosperity is problematic when it causes environmental problems.', exHi: 'Samriddhi samasyaajanak hai jab yeh paryavaran samasyaayein paida karti hai.' },
    { de: 'Pluspunkt', art: 'der', gender: 'm', plural: 'Pluspunkte', pos: 'noun', level: 'B1', en: 'advantage', hi: 'फ़ायदा', ex: 'Ein Pluspunkt der Globalisierung ist der Wohlstand.', exEn: 'An advantage of globalization is prosperity.', exHi: 'Vaishveekaran ka ek phaayda samriddhi hai.' },
    { de: 'Standpunkt', art: 'der', gender: 'm', plural: 'Standpunkte', pos: 'noun', level: 'B1', en: 'point of view', hi: 'दृष्टिकोण', ex: 'Contra steht der Standpunkt, dass kleine Firmen nicht profitieren.', exEn: 'Against that stands the point of view that small companies don\'t profit.', exHi: 'Iske virudh yeh drishtikon hai ki chhoti kampaniyaan laabh nahi uthaatin.' },
    { de: 'Wohlstand', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'prosperity', hi: 'समृद्धि', ex: 'Je höher der Wohlstand wird, desto größer wird die Bekämpfung von Armut.', exEn: 'The higher prosperity becomes, the greater the combat against poverty becomes.', exHi: 'Samriddhi jitni badhti hai, gareebi ke khilaaf mukaabla utna hi badhta hai.' },
    { de: 'Ansicht', art: 'die', gender: 'f', plural: 'Ansichten', pos: 'noun', level: 'B1', en: 'opinion', hi: 'राय', ex: 'Meiner Ansicht nach ist Globalisierung wichtig.', exEn: 'In my opinion, globalization is important.', exHi: 'Meri raay mein, vaishveekaran mahatvapurn hai.' },
    { de: 'Forschung', art: 'die', gender: 'f', plural: 'Forschungen', pos: 'noun', level: 'B1', en: 'research', hi: 'अनुसंधान', ex: 'Die Forschung zeigt nur teilweise Erfolg.', exEn: 'Research shows only partial success.', exHi: 'Anusandhaan sirf aanshik saflta dikhaata hai.' },
    { de: 'Globalisierung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'globalization', hi: 'वैश्वीकरण', ex: 'Je mehr ich über Globalisierung lese, desto kritischer werde ich.', exEn: 'The more I read about globalization, the more critical I become.', exHi: 'Jitna zyaada main vaishveekaran ke baare mein padhti hoon, utni hi aalochanaatmak ban jaati hoon.' },
    { de: 'Sicht', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'view (aus meiner Sicht: from my view)', hi: 'दृष्टिकोण', ex: 'Aus meiner Sicht ist der Wohlstand problematisch.', exEn: 'From my view, prosperity is problematic.', exHi: 'Mere drishtikon se, samriddhi samasyaajanak hai.' },
    { de: 'Wissenschaft', art: 'die', gender: 'f', plural: 'Wissenschaften', pos: 'noun', level: 'B1', en: 'science', hi: 'विज्ञान', ex: 'Je globaler der Markt wird, desto wichtiger wird die Wissenschaft.', exEn: 'The more global the market becomes, the more important science becomes.', exHi: 'Baazaar jitna vaishvik hota hai, vigyaan utna hi mahatvapurn ho jaata hai.' },
    { de: 'pauschal', pos: 'adjective', level: 'B1', en: 'across-the-board', hi: 'सामान्यीकृत', ex: 'Pauschal kann man das nicht sagen.', exEn: 'You can\'t say that across the board.', exHi: 'Isko saamaanyeekrit roop se nahi kaha jaa sakta.' },
    { de: 'pro', pos: 'noun', level: 'B1', en: 'pro (for)', hi: 'पक्ष में', ex: 'Pro spricht der Wohlstand.', exEn: 'Prosperity speaks for it.', exHi: 'Samriddhi iske pakshh mein hai.' },
    { de: 'problematisch', pos: 'adjective', level: 'B1', en: 'problematic', hi: 'समस्याजनक', ex: 'Der Wohlstand ist problematisch, wenn er Umweltprobleme verursacht.', exEn: 'Prosperity is problematic when it causes environmental problems.', exHi: 'Samriddhi samasyaajanak hai jab yeh paryavaran samasyaayein paida karti hai.' },
    { de: 'teilweise', pos: 'adverb', level: 'B1', en: 'partly', hi: 'आंशिक रूप से', ex: 'Die Forschung zeigt nur teilweise Erfolg.', exEn: 'Research shows only partial success.', exHi: 'Anusandhaan sirf aanshik saflta dikhaata hai.' },
    { de: 'widersprechen', pos: 'verb', level: 'B1', en: 'to contradict', hi: 'विरोध करना', ex: 'Je mehr Verbraucher wissen, desto kritischer widersprechen sie.', exEn: 'The more consumers know, the more critically they contradict.', exHi: 'Jitna zyaada upbhokta jaante hain, utni hi aalochanaatmak taur par woh virodh karte hain.', conj: { praesens: 'widerspricht', praeteritum: 'widersprach', perfekt: 'hat widersprochen' } },
    { de: 'überzeugend', pos: 'adjective', level: 'B1', en: 'convincing', hi: 'ठोस', ex: 'Das ist ein überzeugendes Argument.', exEn: 'That\'s a convincing argument.', exHi: 'Yeh ek thos tark hai.' },
    { de: 'überzeugt sein', pos: 'idiom', level: 'B1', en: 'to be convinced (von + D.)', hi: 'आश्वस्त होना', ex: 'Ich bin völlig überzeugt davon.', exEn: 'I\'m completely convinced of that.', exHi: 'Main iska poori tarah aashvasth hoon.' },
    { de: 'bedenken', pos: 'verb', level: 'B1', en: 'to consider', hi: 'सोचना', ex: 'Je mehr ein Konsument bedenkt, umso bewusster kauft er.', exEn: 'The more a consumer considers, the more consciously he buys.', exHi: 'Jitna zyaada upbhokta sochta hai, utna hi sajagta se khareedta hai.', conj: { praesens: 'bedenkt', praeteritum: 'bedachte', perfekt: 'hat bedacht' } },
    { de: 'Konsument', art: 'der', gender: 'm', plural: 'Konsumenten', pos: 'noun', level: 'B1', en: 'consumer (male)', hi: 'उपभोक्ता', ex: 'Je mehr ein Konsument bedenkt, umso bewusster kauft er.', exEn: 'The more a consumer considers, the more consciously he buys.', exHi: 'Jitna zyaada upbhokta sochta hai, utna hi sajagta se khareedta hai.' },
    { de: 'Bekämpfung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'combat, fight against', hi: 'मुकाबला', ex: 'Je höher der Wohlstand, desto größer die Bekämpfung von Armut.', exEn: 'The higher the prosperity, the greater the combat against poverty.', exHi: 'Samriddhi jitni zyaada, gareebi ke khilaaf mukaabla utna hi zyaada.' },
    { de: 'global', pos: 'adjective', level: 'B1', en: 'global', hi: 'वैश्विक', ex: 'Je globaler der Markt wird, desto wichtiger wird die Wissenschaft.', exEn: 'The more global the market becomes, the more important science becomes.', exHi: 'Baazaar jitna vaishvik hota hai, vigyaan utna hi mahatvapurn ho jaata hai.' },
    { de: 'irgendwo', pos: 'adverb', level: 'B1', en: 'somewhere', hi: 'कहीं', ex: 'Irgendwo muss die Forschung ja nützen.', exEn: 'Somewhere, research must be of use.', exHi: 'Kahin na kahin, anusandhaan kaam aana chahiye.' },
    { de: 'nützen', pos: 'verb', level: 'B1', en: 'to be of use', hi: 'काम आना', ex: 'Irgendwo muss die Forschung ja nützen.', exEn: 'Somewhere, research must be of use.', exHi: 'Kahin na kahin, anusandhaan kaam aana chahiye.', conj: { praesens: 'nützt', praeteritum: 'nützte', perfekt: 'hat genützt' } },
    { de: 'profitieren', pos: 'verb', level: 'B1', en: 'to profit (von + D.)', hi: 'लाभ उठाना', ex: 'Kleine Firmen profitieren nicht vom Weltmarkt.', exEn: 'Small companies don\'t profit from the world market.', exHi: 'Chhoti kampaniyaan vishwa baazaar se laabh nahi uthaatin.', conj: { praesens: 'profitiert', praeteritum: 'profitierte', perfekt: 'hat profitiert' } },
    { de: 'stehen', pos: 'verb', level: 'B1', en: 'to be, to take a stance (auf dem Standpunkt stehen)', hi: 'दृष्टिकोण रखना', ex: 'Contra steht der Standpunkt, dass kleine Firmen nicht profitieren.', exEn: 'Against that stands the point of view that small companies don\'t profit.', exHi: 'Iske virudh yeh drishtikon hai ki chhoti kampaniyaan laabh nahi uthaatin.', conj: { praesens: 'steht', praeteritum: 'stand', perfekt: 'hat gestanden' } },
    { de: 'umsonst', pos: 'adverb', level: 'B1', en: 'for free / in vain', hi: 'मुफ़्त / व्यर्थ', ex: 'Sonst ist alles umsonst.', exEn: 'Otherwise everything is in vain.', exHi: 'Varna sab kuchh vyarth hai.' },
    { de: 'völlig', pos: 'adverb', level: 'B1', en: 'completely', hi: 'पूरी तरह', ex: 'Ich bin völlig überzeugt davon.', exEn: 'I\'m completely convinced of that.', exHi: 'Main iska poori tarah aashvasth hoon.' },
    { de: 'wünschenswert', pos: 'adjective', level: 'B1', en: 'preferable, desirable', hi: 'वांछनीय', ex: 'Globalisierung ist nicht nur schlecht, sondern auch wünschenswert.', exEn: 'Globalization is not only bad, but also preferable.', exHi: 'Vaishveekaran sirf bura nahi, balki vaanchhaneey bhi hai.' },
    { de: 'überleben', pos: 'verb', level: 'B1', en: 'to survive', hi: 'जीवित रहना', ex: 'Kleine Firmen müssen überleben.', exEn: 'Small companies have to survive.', exHi: 'Chhoti kampaniyon ko jeevit rehna hota hai.', conj: { praesens: 'überlebt', praeteritum: 'überlebte', perfekt: 'hat überlebt' } },
    { de: 'Produktangebot', art: 'das', gender: 'n', plural: 'Produktangebote', pos: 'noun', level: 'B1', en: 'range of offered products', hi: 'उत्पाद श्रेणी', ex: 'Das Produktangebot wächst mit dem Weltmarkt.', exEn: 'The range of products grows with the world market.', exHi: 'Vishwa baazaar ke saath utpaad shrenee badhti hai.' },
    { de: 'Versprechen', art: 'das', gender: 'n', plural: 'Versprechen', pos: 'noun', level: 'B1', en: 'promise', hi: 'वादा', ex: 'Das Versprechen von Wohlstand überzeugt viele.', exEn: 'The promise of prosperity convinces many.', exHi: 'Samriddhi ka vaada kai logon ko aashvasth karta hai.' },
    { de: 'Geldbetrag', art: 'der', gender: 'm', plural: 'Geldbeträge', pos: 'noun', level: 'B1', en: 'sum of money', hi: 'धनराशि', ex: 'Der Geldbetrag ist hoch.', exEn: 'The sum of money is high.', exHi: 'Dhanraashi zyaada hai.' },
    { de: 'Handyhersteller', art: 'der', gender: 'm', plural: 'Handyhersteller', pos: 'noun', level: 'B1', en: 'mobile phone manufacturer', hi: 'मोबाइल निर्माता', ex: 'Je mehr ein Handyhersteller seine Produktion nach Asien verlegt, umso höher wird sein Gewinn.', exEn: 'The more a mobile phone manufacturer moves his production to Asia, the higher his profit becomes.', exHi: 'Mobile nirmaata jitna apna utpaadan Asia mein sthaanaantarit karta hai, uska laabh utna hi zyaada hota hai.' },
    { de: 'Irrsinn', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'insanity', hi: 'पागलपन', ex: 'Das ist reiner Irrsinn.', exEn: 'That\'s pure insanity.', exHi: 'Yeh bilkul paagalpan hai.' },
    { de: 'Verbraucher', art: 'der', gender: 'm', plural: 'Verbraucher', pos: 'noun', level: 'B1', en: 'user, consumer (male)', hi: 'उपभोक्ता', ex: 'Je mehr Verbraucher davon wissen, desto kritischer widersprechen sie.', exEn: 'The more consumers know about that, the more critically they contradict it.', exHi: 'Jitna zyaada upbhokta iske baare mein jaante hain, utni hi aalochanaatmak taur par woh virodh karte hain.' },
    { de: 'Weltmarkt', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'world market', hi: 'विश्व बाज़ार', ex: 'Kleine Firmen profitieren nicht vom Weltmarkt.', exEn: 'Small companies don\'t profit from the world market.', exHi: 'Chhoti kampaniyaan vishwa baazaar se laabh nahi uthaatin.' },
    { de: 'Konsumentin', art: 'die', gender: 'f', plural: 'Konsumentinnen', pos: 'noun', level: 'B1', en: 'consumer (female)', hi: 'उपभोक्ता (महिला)', ex: 'Die Konsumentin bedenkt viel, bevor sie kauft.', exEn: 'The consumer considers a lot before buying.', exHi: 'Upbhokta khareedne se pehle bahut sochti hai.' },
    { de: 'Uni-Mensa', art: 'die', gender: 'f', plural: 'Uni-Mensen', pos: 'noun', level: 'B1', en: 'university cafeteria', hi: 'विश्वविद्यालय कैंटीन', ex: 'Sie diskutieren in der Uni-Mensa.', exEn: 'They discuss it in the university cafeteria.', exHi: 'Woh university canteen mein charcha karte hain.' },
    { de: 'Verbraucherin', art: 'die', gender: 'f', plural: 'Verbraucherinnen', pos: 'noun', level: 'B1', en: 'user, consumer (female)', hi: 'उपभोक्ता (महिला)', ex: 'Die Verbraucherin liest die Etiketten genau.', exEn: 'The consumer reads the labels carefully.', exHi: 'Upbhokta labels ko dhyaan se padhti hai.' },
    { de: 'verlegen', pos: 'verb', level: 'B1', en: 'to move (die Produktion verlegen)', hi: 'स्थानांतरित करना', ex: 'Der Handyhersteller verlegt seine Produktion nach Asien.', exEn: 'The mobile phone manufacturer moves his production to Asia.', exHi: 'Mobile nirmaata apna utpaadan Asia mein sthaanaantarit karta hai.', conj: { praesens: 'verlegt', praeteritum: 'verlegte', perfekt: 'hat verlegt' } },
    { de: 'Asien', pos: 'noun', level: 'B1', en: 'Asia', hi: 'एशिया', ex: 'Viele Firmen verlegen ihre Produktion nach Asien.', exEn: 'Many companies move their production to Asia.', exHi: 'Kai kampaniyaan apna utpaadan Asia mein sthaanaantarit karti hain.' },
    { de: 'Wortakzent', art: 'der', gender: 'm', plural: 'Wortakzente', pos: 'noun', level: 'B1', en: 'lexical stress', hi: 'शब्द बल', ex: 'Der Wortakzent liegt auf der ersten Silbe.', exEn: 'The lexical stress falls on the first syllable.', exHi: 'Shabd bal pehle syllable par hota hai.' },
    { de: 'Wortstamm', art: 'der', gender: 'm', plural: 'Wortstämme', pos: 'noun', level: 'B1', en: 'root word', hi: 'मूल शब्द', ex: 'Der Wortstamm bleibt bei der Deklination gleich.', exEn: 'The root word stays the same during declension.', exHi: 'Declension ke dauran mool shabd wahi rehta hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was bedeutet je … desto/umso?',
      body: [ 'As one thing changes, another thing changes proportionally — "the more…, the more…" or "the less…, the less…".' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['<span class="de">Je mehr ich lerne, desto besser spreche ich Deutsch.</span>', 'The more I study, the better I speak German.']
        ]
      },
      hinglish: 'Jab ek cheez badalti hai to doosri bhi usi hisaab se badalti hai — "jitna…, utna…".'
    },
    {
      title: 'Formation',
      body: [ 'je + comparative (verb-final subordinate clause), comma, desto/umso + comparative + verb (position 2).' ],
      table: {
        head: ['Part 1 (je-clause)', 'Part 2 (desto/umso-clause)'],
        rows: [
          ['<span class="de">Je früher wir losfahren</span>', '<span class="de">desto schneller kommen wir an.</span>']
        ]
      },
      note: 'The je-clause is a subordinate clause — verb at the very end. The desto/umso-clause has main-clause word order — verb in position 2.',
      hinglish: 'je + comparative (verb aakhir mein), comma, desto/umso + comparative + verb (position 2).'
    },
    {
      title: 'je … desto',
      body: [ 'The most common form.' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Je mehr ich übe, desto sicherer werde ich.</span>'],
          ['<span class="de">Je älter man wird, desto wichtiger wird die Gesundheit.</span>']
        ]
      },
      hinglish: 'Sabse common form.'
    },
    {
      title: 'je … umso',
      body: [ 'Exactly the same meaning as je … desto — umso is simply an alternative.' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Je länger wir warten, umso unruhiger werden wir.</span>'],
          ['<span class="de">Je öfter Anna Deutsch spricht, umso flüssiger wird sie.</span>']
        ]
      },
      note: 'desto is slightly more common in written German; umso is fully correct and used often too.',
      hinglish: 'je … desto ke bilkul same matlab — umso sirf ek alternative hai.'
    },
    {
      title: 'Positiv und Negativ',
      body: [ 'Both rising and falling comparisons work the same way.' ],
      table: {
        head: ['Type', 'Example'],
        rows: [
          ['Positiv (steigend)', '<span class="de">Je mehr ich lese, desto klüger werde ich.</span>'],
          ['Negativ (fallend)', '<span class="de">Je weniger ich schlafe, desto müder bin ich.</span>']
        ]
      },
      hinglish: 'Badhti aur ghatti dono tarah ki comparisons isi tarah kaam karti hain.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from missing "desto/umso", using the positive form instead of the comparative, or wrong word order.' ],
      mistakes: [
        { wrong: 'Je mehr ich lerne, mehr spreche ich Deutsch.', right: 'Je mehr ich lerne, desto mehr spreche ich Deutsch.', why: 'The second half needs desto or umso — it can never be dropped.' },
        { wrong: 'Je mehr ich lerne, desto gut spreche ich Deutsch.', right: 'Je mehr ich lerne, desto besser spreche ich Deutsch.', why: 'Both halves need a real comparative — "gut" must become "besser".' },
        { wrong: 'Je ich mehr lerne...', right: 'Je mehr ich lerne...', why: 'The comparative (mehr) comes directly after je, before the subject.' },
        { wrong: 'Umso mehr ich lerne...', right: 'Je mehr ich lerne...', why: 'Only je can start the first half — umso never starts the sentence.' },
        { wrong: 'Je schneller, desto ich komme.', right: 'Je schneller ich fahre, desto früher komme ich an.', why: 'The desto-clause needs normal main-clause word order — verb in position 2, not at the end.' }
      ],
      hinglish: 'Yeh galtiyaan desto/umso chhod dene, positive form use karne, ya galat word order se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'je … desto/umso appears constantly in Goethe B1 opinion texts, advice columns, and discussions.' ],
      note: 'Quick check: does one change cause a proportional change in another? Start with je + comparative (verb-final), then desto/umso + comparative + verb (position 2).',
      hinglish: 'Goethe B1 opinion texts, advice columns aur discussions mein je … desto/umso lagataar aata hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Globalisierung: Pro und Contra',
    titleEn: 'Globalization: pro and con',
    tokens: [
      { w: 'Je', role: 'r-connector', en: 'the more', hi: 'जितना', type: 'Konjunktion · je … desto (1/2)' },
      { w: 'mehr', role: 'plain', en: 'more', hi: 'ज़्यादा', type: 'Komparativ' },
      { w: 'Firmen', role: 'plain', en: 'companies', hi: 'कंपनियाँ', type: 'Noun · plural' },
      { w: 'ihre', role: 'plain', en: 'their (fem. acc.)', hi: 'अपना', type: 'Possessivartikel · Akk.' },
      { w: 'Produktion', role: 'plain', en: 'production', hi: 'उत्पादन', type: 'Noun · fem.' },
      { w: 'nach', role: 'plain', en: 'to', hi: 'की तरफ़', type: 'Preposition · Dat.' },
      { w: 'Asien', role: 'plain', en: 'Asia (Satzende)', hi: 'एशिया (Satzende)', type: 'Name (Satzende)', why: 'Asien (this chapter).' },
      { w: 'verlegen', role: 'plain', en: 'move (Satzende)', hi: 'स्थानांतरित करते हैं (Satzende)', type: 'Verb · verlegen (Satzende)' },
      { w: ',', plain: true },
      { w: 'desto', role: 'r-connector', en: 'the higher', hi: 'उतना', type: 'Konjunktion · je … desto (2/2)' },
      { w: 'höher', role: 'plain', en: 'higher', hi: 'ज़्यादा', type: 'Komparativ' },
      { w: 'wird', role: 'plain', en: 'becomes (Satzende)', hi: 'होता है (Satzende)', type: 'Verb · werden (Satzende)' },
      { w: 'ihr', role: 'plain', en: 'their (masc. nom.)', hi: 'उनका', type: 'Possessivartikel' },
      { w: 'Gewinn', role: 'plain', en: 'profit (Satzende)', hi: 'लाभ (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Pro', role: 'plain', en: 'pro (for)', hi: 'पक्ष में', type: 'Noun (idiom)', why: 'pro (this chapter).' },
      { w: 'spricht', role: 'plain', en: 'speaks (Satzende)', hi: 'बोलता है (Satzende)', type: 'Verb · sprechen (Satzende)' },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'wachsende', role: 'plain', en: 'growing', hi: 'बढ़ता', type: 'Adjective · schwach · Nom.' },
      { w: 'Wohlstand', role: 'plain', en: 'prosperity (Satzende)', hi: 'समृद्धि (Satzende)', type: 'Noun · masc. (Satzende)', why: 'der Wohlstand (Sg.) (this chapter).' },
      { w: '.', plain: true },
      { w: 'Contra', role: 'plain', en: 'con (against)', hi: 'विरुद्ध', type: 'Noun (idiom)', why: 'contra (this chapter).' },
      { w: 'steht', role: 'plain', en: 'stands (Satzende)', hi: 'खड़ा है (Satzende)', type: 'Verb · stehen (Satzende)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Ansicht', role: 'plain', en: 'opinion (Satzende)', hi: 'राय (Satzende)', type: 'Noun · fem. (Satzende)', why: 'die Ansicht (this chapter).' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'kleine', role: 'plain', en: 'small', hi: 'छोटी', type: 'Adjective · stark · Nom. Pl.' },
      { w: 'Firmen', role: 'plain', en: 'companies', hi: 'कंपनियाँ', type: 'Noun · plural' },
      { w: 'ums', role: 'plain', en: 'for the', hi: 'के लिए', type: 'Contraction · um das' },
      { w: 'Überleben', role: 'plain', en: 'survival (Satzende)', hi: 'जीवित रहना (Satzende)', type: 'Noun · neut. (substantiviert, Satzende)', why: 'überleben (this chapter): to survive.' },
      { w: 'kämpfen', role: 'plain', en: 'fight (Satzende)', hi: 'संघर्ष करती हैं (Satzende)', type: 'Verb · kämpfen (Satzende)' },
      { w: 'müssen', role: 'plain', en: 'must (Satzende)', hi: 'चाहिए (Satzende)', type: 'Verb · Modalverb (Satzende)' },
      { w: '.', plain: true },
      { w: 'Je', role: 'r-connector', en: 'the smaller', hi: 'जितनी', type: 'Konjunktion · je … umso (1/2)' },
      { w: 'kleiner', role: 'plain', en: 'smaller', hi: 'छोटी', type: 'Komparativ' },
      { w: 'eine', role: 'plain', en: 'a (fem. nom.)', hi: 'एक', type: 'Article' },
      { w: 'Firma', role: 'plain', en: 'company (Satzende)', hi: 'कंपनी (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'ist', role: 'plain', en: 'is (Satzende)', hi: 'है (Satzende)', type: 'Verb · sein (Satzende)' },
      { w: ',', plain: true },
      { w: 'umso', role: 'r-connector', en: 'the more difficult', hi: 'उतनी', type: 'Konjunktion · je … umso (2/2)' },
      { w: 'schwieriger', role: 'plain', en: 'more difficult', hi: 'अधिक कठिन', type: 'Komparativ' },
      { w: 'wird', role: 'plain', en: 'becomes (Satzende)', hi: 'हो जाता है (Satzende)', type: 'Verb · werden (Satzende)' },
      { w: 'das', role: 'r-subject', en: 'it (Satzende)', hi: 'यह (Satzende)', type: 'Pronoun (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The more companies move their production to Asia, the higher their profit becomes. Prosperity speaks for globalization. Against it stands the opinion that small companies must fight for survival. The smaller a company is, the more difficult it becomes.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_033_L001', speaker: 'Britta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, je öfter ich online bestelle, desto schuldiger fühle ich mich.', en: 'Timo, the more often I order online, the more guilty I feel.' },
      { id: 'B1_033_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Verstehe ich. Je kleiner der lokale Laden, desto mehr freut sich der Besitzer über Kunden.', en: 'I understand. The smaller the local shop, the more the owner appreciates customers.' },
      { id: 'B1_033_L003', speaker: 'Britta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau, und umso besser fühle ich mich danach.', en: 'Exactly, and I feel that much better afterward.' },
      { id: 'B1_033_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Dann lass uns morgen zusammen beim Laden an der Ecke einkaufen.', en: 'Then let\'s shop together at the corner store tomorrow.' }
    ],
    transcript: 'Timo, je öfter ich online bestelle, desto schuldiger fühle ich mich. Verstehe ich. Je kleiner der lokale Laden, desto mehr freut sich der Besitzer über Kunden. Genau, und umso besser fühle ich mich danach. Dann lass uns morgen zusammen beim Laden an der Ecke einkaufen.',
    translation: 'Timo, the more often I order online, the more guilty I feel. I understand. The smaller the local shop, the more the owner appreciates customers. Exactly, and I feel that much better afterward. Then let\'s shop together at the corner store tomorrow.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'je' },
      { w: 'öfter' },
      { w: 'ich' },
      { w: 'online' },
      { w: 'bestelle' },
      { w: ',', plain: true },
      { w: 'desto' },
      { w: 'schuldiger' },
      { w: 'fühle' },
      { w: 'ich' },
      { w: 'mich' },
      { w: '.', plain: true },
      { w: 'Verstehe' },
      { w: 'ich' },
      { w: '.', plain: true },
      { w: 'Je' },
      { w: 'kleiner' },
      { w: 'der' },
      { w: 'lokale' },
      { w: 'Laden' },
      { w: ',', plain: true },
      { w: 'desto' },
      { w: 'mehr' },
      { w: 'freut' },
      { w: 'sich' },
      { w: 'der' },
      { w: 'Besitzer' },
      { w: 'über' },
      { w: 'Kunden' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'umso' },
      { w: 'besser' },
      { w: 'fühle' },
      { w: 'ich' },
      { w: 'mich' },
      { w: 'danach' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'lass' },
      { w: 'uns' },
      { w: 'morgen' },
      { w: 'zusammen' },
      { w: 'beim' },
      { w: 'Laden' },
      { w: 'an' },
      { w: 'der' },
      { w: 'Ecke' },
      { w: 'einkaufen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wegen was hat Britta ein schlechtes Gewissen?', qEn: 'What does Britta feel guilty about?', options: ['zu viel Sport', 'online bestellen', 'zu spät kommen', 'zu viel Kaffee trinken'], optionsEn: ['too much sport', 'order online', 'arrive late', 'drink too much coffee'], answer: 1,
        explain: '"… je öfter ich online bestelle, desto schuldiger fühle ich mich."' },
      { q: 'Was planen sie für morgen?', qEn: 'What do they plan for tomorrow?', options: ['online einkaufen', 'beim Laden an der Ecke einkaufen', 'zu Hause bleiben', 'verreisen'], optionsEn: ['shop online', 'shop at the corner store', 'stay at home', 'go away'], answer: 1,
        explain: '"… lass uns morgen zusammen beim Laden an der Ecke einkaufen."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin fühlt sich schuldig beim Onlineshopping. Reagiere.", taskEn: "Your friend feels guilty about online shopping. React.", de: "Je kleiner der lokale Laden, desto mehr freut sich der Besitzer über Kunden.", en: "The smaller the local shop, the happier the owner is about customers." },
    { task: "Ein Kollege fragt, wie du das Umweltproblem siehst.", taskEn: "A colleague asks how you see the environmental problem.", de: "Je mehr wir konsumieren, desto größer wird das Umweltproblem.", en: "The more we consume, the bigger the environmental problem gets." },
    { task: "Ein Freund fragt, wie man überzeugend argumentiert.", taskEn: "A friend asks how to argue convincingly.", de: "Je klarer das Argument, umso überzeugender der Standpunkt.", en: "The clearer the argument, the more convincing the position." },
    { task: "Deine Kollegin fragt, was Globalisierung bringt.", taskEn: "Your colleague asks what globalisation brings.", de: "Je globaler der Handel, desto größer der Wohlstand, aber auch die Probleme.", en: "The more global the trade, the greater the prosperity, but also the problems." },
    { task: "Ein Bekannter fragt, wie man beim Lernen vorankommt.", taskEn: "An acquaintance asks how to make progress when studying.", de: "Je öfter du sprichst, desto schneller lernst du.", en: "The more often you speak, the faster you learn." },
    { task: "Rollenspiel: Ihr diskutiert pro und contra Onlinehandel.", taskEn: "Role-play: you discuss the pros and cons of online retail.", de: "Je billiger die Ware, desto schlechter die Bedingungen. — Aber je größer die Auswahl, umso besser für den Konsumenten.", en: "The cheaper the goods, the worse the conditions. — But the bigger the choice, the better for the consumer." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short opinion or advice text (six to eight sentences) about globalization, consumption, or self-improvement — using je … desto at least three times and je … umso at least twice, with correct word order in both halves.',
    starters: ['Je mehr …, desto …', 'Je länger …, umso …', 'Je älter …, desto …'],
    placeholder: 'Je mehr ich über Globalisierung lese, desto kritischer werde ich. Je mehr Firmen ihre Produktion verlegen …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Je mehr ich übe, ___ sicherer werde ich."',
      options: ['desto', 'dass', 'wo'],
      answer: 0,
      explain: 'desto (or umso) is required in the second half of the comparison.'
    },
    gap: {
      sentence: ['Je mehr ich lerne, desto ', ' spreche ich Deutsch.'],
      gaps: [ { answer: 'besser', accepts: ['besser'] } ],
      explain: 'Both halves need a real comparative — "gut" becomes "besser".'
    },
    match: {
      q: 'Match each half of the proportional comparison.',
      pairs: [
        { noun: 'Je mehr ich lerne,', art: 'desto besser spreche ich.' },
        { noun: 'Je länger wir warten,', art: 'umso unruhiger werden wir.' },
        { noun: 'Je älter man wird,', art: 'desto wichtiger wird die Gesundheit.' }
      ]
    },
    builder: {
      target: 'Build: "The more I read, the smarter I become."',
      bank: ['Je', 'mehr', 'ich', 'lese', ',', 'desto', 'klüger', 'werde', 'ich', '.'],
      answer: ['Je', 'mehr', 'ich', 'lese', ',', 'desto', 'klüger', 'werde', 'ich', '.'],
      roles: { 'Je': 'r-connector', 'desto': 'r-connector' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Je mehr ich lerne, desto gut spreche ich Deutsch.',
      right: 'Je mehr ich lerne, desto besser spreche ich Deutsch.',
      explain: 'Both halves need a real comparative — "gut" must become "besser".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "___ mehr ich lerne, desto besser spreche ich."', options: ['Je', 'Wenn', 'Als'], answer: 0,
      explain: 'je starts the proportional comparison.' },
    { q: 'Complete: "Je länger wir warten, ___ ungeduldiger werden wir."', options: ['umso', 'wo', 'dass'], answer: 0,
      explain: 'umso (or desto) is required in the second half.' },
    { q: 'Which sentence has correct word order?', options: ['Je mehr ich übe, desto sicherer werde ich.', 'Je ich mehr übe, desto werde ich sicherer.', 'Je mehr übe ich, desto sicherer ich werde.'], answer: 0,
      explain: 'je-clause is verb-final; desto-clause has verb in position 2.' },
    { q: 'Complete: "Je älter man wird, desto ___ wird die Gesundheit."', options: ['wichtiger', 'wichtig', 'am wichtigsten'], answer: 0,
      explain: 'Both halves need the comparative form, never the positive.' },
    { q: 'Which sentence contains an error?', options: ['Je mehr ich lese, desto klüger werde ich.', 'Je mehr ich lerne, mehr spreche ich Deutsch.', 'Je länger wir warten, umso unruhiger werden wir.'], answer: 1,
      explain: 'The second half is missing desto/umso — it should be "desto mehr spreche ich Deutsch."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-connector', html: 'je + comparative (verb-final) starts a proportional comparison; desto or umso + comparative (verb second) shows the proportional result.' },
    { c: 'r-connector', html: 'desto and umso are fully interchangeable in meaning — desto is slightly more common in writing.' },
    { c: 'r-connector', html: 'Both halves always need a real comparative form — never the plain positive adjective/adverb.' }
  ],
  revisionTips: [
    'Practise the word-order split out loud: je-clause verb-final, desto/umso-clause verb second.',
    'Swap desto for umso in a few sentences to prove to yourself they mean exactly the same thing.',
    'Watch for the comparative form in BOTH halves — "je mehr…, desto besser" never "je mehr…, desto gut."'
  ]
};

window.CHAPTER = CHAPTER;
