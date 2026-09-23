/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 19
   "Steigerung & sprachliche Abstufung" — comparison as a
   communication strategy: equality, comparative nuance,
   superlative beyond grammar, intensifiers, downtoners,
   academic/journalistic register. NOT basic größer/am größten.
   Dialogue: Solveig and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-19-steigerung-und-sprachliche-abstufung',
  phase: 'C1 · Nominalstil & Präzision',
  number: 19,
  title: 'Steigerung & sprachliche Abstufung',
  titleEn: 'Gradation and linguistic nuance',
  description: 'At A1 you compare objects. At C1 you compare ideas, arguments, evidence, probabilities, research, policies, opinions. Comparison is a tool for thinking, not just a grammar rule.',
  xp: 590,
  time: 105,
  difficulty: 'Advanced',
  nextChapter: { number: 20, title: 'Relativsätze erweitern und variieren', titleEn: 'Expanding and varying relative clauses' , href: 'chapter-c1-20-relativsaetze-erweitern-und-variieren.html' },

  prevChapter: { number: 18, title: 'Adjektivdeklination sicher anwenden', titleEn: 'Applying adjective declension with confidence', href: 'chapter-c1-18-adjektivdeklination-sicher-anwenden.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Native speakers compare <em>meanings</em> — not just adjectives.',
    intro: 'Before applying for scholarships, Solveig and Timo compare a renowned firm\'s offer against her old position — a considerably better career chance, a comparatively high salary — comparing ideas and evidence, not just adjectives.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See equality, comparative nuance, intensifiers, and downtoners used naturally in persuasive comparison'
    ],
    scene: 'Vergleich von Universitäten vor der Stipendienbewerbung',
    femaleSpeakers: ['Solveig'],
    dialogue: [
      { speaker: 'Solveig', tokens: [
        { w: 'Das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Angebot', role: 'r-subject', en: 'offer', hi: 'प्रस्ताव', pron: 'AN-ge-boht', type: 'Noun · neut.' },
        { w: 'kommt', role: 'r-verb', en: 'comes', hi: 'आता है', pron: 'komt', type: 'Verb · kommen' },
        { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition + dative' },
        { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · dative' },
        { w: 'renommierten', role: 'r-dativ', en: 'renowned', hi: 'प्रसिद्ध', pron: 're-no-MEER-ten', type: 'Adjective · dative', why: 'renommiert = renowned (this chapter).', ex: 'eine renommierte Firma' },
        { w: 'Firma', role: 'r-dativ', en: 'firm (dat.)', hi: 'कंपनी से', pron: 'FIR-ma', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'The offer comes from a renowned firm.', hi: 'Prastaav ek prasiddh company se aata hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'ausgesprochen', role: 'r-akkusativ', en: 'distinctly', hi: 'ख़ास तौर पर', pron: 'OWS-ge-shpro-khen', type: 'Adverb', why: 'ausgesprochen = distinctly/decidedly, intensifying adverb (this chapter).', ex: 'Das ist ausgesprochen gut.', exEn: 'That is distinctly good.' },
        { w: 'gut', role: 'r-akkusativ', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'That is distinctly good.', hi: 'Yeh khaas taur par achha hai.' },
      { speaker: 'Solveig', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Karrierechance', role: 'r-subject', en: 'career chance', hi: 'करियर मौका', pron: 'ka-RYAY-ruh-shan-suh', type: 'Noun · fem.', why: 'die Karrierechance (this chapter).', ex: 'eine gute Karrierechance' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'erheblich', role: 'r-akkusativ', en: 'considerably', hi: 'काफ़ी', pron: 'er-HAYP-likh', type: 'Adverb', why: 'erheblich = considerably (this chapter).', ex: 'erheblich besser' },
        { w: 'besser', role: 'r-akkusativ', en: 'better', hi: 'बेहतर', pron: 'BE-ser', type: 'Adjective · Komparativ' },
        { w: 'als', role: 'r-conjunction', en: 'than', hi: 'से', pron: 'als', type: 'Conjunction' },
        { w: 'bei', role: 'r-preposition', en: 'at', hi: 'में', pron: 'by', type: 'Preposition + dative' },
        { w: 'meiner', role: 'r-dativ', en: 'my (fem. dat.)', hi: 'मेरी', pron: 'MY-ner', type: 'Possessive · dative' },
        { w: 'alten', role: 'r-dativ', en: 'old', hi: 'पुरानी', pron: 'AL-ten', type: 'Adjective · dative' },
        { w: 'Stelle', role: 'r-dativ', en: 'position (dat.)', hi: 'जगह पर', pron: 'SHTE-luh', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'The career chance is considerably better than at my old position.', hi: 'Career mauka meri purani jagah se kaafi behtar hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Vergleichsweise', role: 'r-akkusativ', en: 'comparatively', hi: 'तुलनात्मक रूप से', pron: 'fer-GLYKHS-vy-zuh', type: 'Adverb', why: 'vergleichsweise = comparatively (this chapter).', ex: 'Vergleichsweise ist das Gehalt hoch.', exEn: 'Comparatively the salary is high.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Gehalt', role: 'r-subject', en: 'salary', hi: 'वेतन', pron: 'ge-HALT', type: 'Noun · neut.' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'hoch', role: 'r-akkusativ', en: 'high', hi: 'ज़्यादा', pron: 'hokh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Comparatively the salary is also high.', hi: 'Tulnaatmak roop se vetan bhi zyada hai.' },
      { speaker: 'Solveig', tokens: [
        { w: 'Wirst', role: 'r-verb', en: 'will you', hi: 'होगी', pron: 'VIRST', type: 'Verb · werden (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Angebot', role: 'r-akkusativ', en: 'offer', hi: 'प्रस्ताव', pron: 'AN-ge-boht', type: 'Noun · neut.' },
        { w: 'annehmen', role: 'r-verb', en: 'accept', hi: 'मानना', pron: 'AN-nay-men', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Will you accept the offer?', hi: 'Kya tum prastaav sweekaar karogi?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nehme', role: 'r-verb', en: 'take', hi: 'लेती हूँ', pron: 'NAY-muh', type: 'Verb · nehmen (ich)', lexicalUnit: 'annehmen' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'यह', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'an', role: 'r-verb', en: '(prefix of annehmen)', hi: '', pron: 'an', type: 'Separable prefix', lexicalUnit: 'annehmen' },
        { w: '.', plain: true },
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'mit', role: 'r-preposition', en: 'by far', hi: 'कहीं ज़्यादा', pron: 'mit', type: 'Preposition (part of the fixed phrase mit Abstand)' },
        { w: 'Abstand', role: 'r-akkusativ', en: 'distance', hi: 'अंतर', pron: 'AP-shtant', type: 'Noun · masc.', why: 'mit Abstand = by far, superlative-intensifying phrase (this chapter).', ex: 'die mit Abstand beste Wahl' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'beste', role: 'r-subject', en: 'best', hi: 'सबसे अच्छी', pron: 'BES-tuh', type: 'Adjective · Superlativ' },
        { w: 'Wahl', role: 'r-subject', en: 'choice', hi: 'विकल्प', pron: 'vahl', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'I will accept it. It is by far the best choice.', hi: 'Main ise sweekaar karti hoon. Yeh kaheen zyada sabse achha vikalp hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'At A1 you compare objects. At C1 you compare <b>ideas, arguments, evidence, probabilities</b>. Comparison is a <span class="de r-vergleich">tool for thinking</span>, not just a grammar rule.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is STEIGERUNG & SPRACHLICHE ABSTUFUNG at C1 level — comparison as a communication strategy for evaluation and persuasion, NOT basic comparative/superlative forms like größer/am größten (already mastered). Covered: equality expressions (ebenso...wie, genauso...wie, gleich...wie, ebenso gut, in gleicher Weise); comparative nuance intensifiers (deutlich...als, wesentlich...als, erheblich...als, kaum...als, etwas...als, leicht...als, merklich...als, zunehmend); superlative beyond grammar (mit Abstand, bei weitem, einer der wichtigsten, höchst, äußerst, besonders, außerordentlich); strong intensifiers (äußerst, ausgesprochen, besonders, außerordentlich, enorm, erheblich, außergewöhnlich, bemerkenswert, überaus); downtoners for weakening claims professionally (eher, relativ, einigermaßen, teilweise, weitgehend, kaum, nur bedingt, vergleichsweise); academic comparison structures (im Vergleich zu, verglichen mit, im Gegensatz zu, signifikant größer, wesentlich geringer). ' +
    'Do NOT expect or require basic comparative/superlative morphology (größer, am größten) — this chapter assumes that is mastered; do not flag its absence. The most important things to catch: overusing "mehr" or "sehr" instead of varied intensifiers/comparison structures; direct English comparison translations that sound unnatural in German; confusing comparative structures with genuine evaluative/persuasive language; using weak intensifiers ("sehr", "viel") in formal academic writing where "erheblich", "signifikant", or "äußerst" are expected; overusing superlatives when a nuanced comparative or "einer der..." construction would be more precise. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag repetitive or weak intensifiers ("sehr", "mehr") where the register calls for more precise C1 alternatives.\n' +
    '- Check that equality structures (ebenso...wie) and comparative structures (deutlich...als) are not confused or malformed.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Precision check:</b> one sentence on whether the learner\'s comparisons conveyed the intended strength and nuance of evaluation, not just generic "more/very".</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you compare ideas and evidence with real nuance, not just objects. Ready for Konjunktiv I in academic language next.',
    mid: 'Good. Re-read the Intensity Scale and Master Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: comparison is a tool for thinking, not just a grammar rule.'
  },

  parserSentence: [
    { w: 'Die', role: 'plain' }, { w: 'Universität', role: 'plain' }, { w: 'ist', role: 'plain' }, { w: 'deutlich', role: 'r-vergleich' }, { w: 'renommierter', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: at C1, comparison is a tool for thinking, evaluating, and persuading.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Solveig and Timo compare universities and career paths, using equality, gradation, and intensifiers naturally.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key comparison expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master equality, comparative nuance, superlative-beyond-grammar, intensifiers, and downtoners.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a scientific comparison study and a newspaper analysis, identifying comparative and evaluative language.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify comparisons, emphasis, and evaluation in a university lecture and business presentation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Compare universities, evaluate research, and defend opinions using sophisticated comparative language.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite simple comparisons into C1 language, and write a 350-word analytical comparison essay.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill comparison ranking, intensifier selection, and downtoner selection.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 590 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 5 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Comparison ranking drills, intensifier/downtoner selection, and a full analytical essay writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Table, Comparison Scale, Intensity Scale, and Decision Flowchart.',
      pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Die Universität in Heidelberg ist deutlich renommierter als die meisten anderen.', text: 'Express a noticeable comparative difference with precision' },
    { de: 'Die Betreuung dort ist nur bedingt besser.', text: 'Weaken a claim professionally with a downtoner' },
    { de: 'Die Forschungsergebnisse sind ausgesprochen innovativ und mit Abstand die zitiertesten.', text: 'Use a strong C1 intensifier and an elegant superlative-beyond-grammar structure' },
    { de: 'Im Vergleich zu München ist das Programm erheblich kostengünstiger.', text: 'Use formal academic comparison with a strong intensifier' },
    { de: 'Die Karrierechancen sind ebenso vielversprechend wie in Heidelberg.', text: 'Express equality precisely with "ebenso...wie"' }
  ],

  vocab: [
    { de: 'renommiert', pos: 'adjective', level: 'C1', register: 'written', en: 'renowned', hi: 'प्रसिद्ध', ex: 'Die Universität ist deutlich renommierter als die meisten anderen.', exEn: 'The university is noticeably more renowned than most others.', exHi: 'University zyaadatar doosron ki tulna mein spasht roop se zyaada prasiddh hai.', ex2: 'Sie arbeitet an einer renommierten Forschungseinrichtung.', ex2En: 'She works at a renowned research institution.', ex2Hi: 'Woh ek prasiddh shodh sansthaan mein kaam karti hai.' },
    { de: 'erheblich', pos: 'adverb/adjective', level: 'C1', register: 'written', en: 'considerably, significantly', hi: 'काफी अधिक', ex: 'Das Programm ist erheblich kostengünstiger.', exEn: 'The program is considerably more cost-effective.', exHi: 'Karyakram kaafi zyaada kifaayati hai.', ex2: 'Die Kosten sind erheblich gestiegen.', ex2En: 'The costs have risen considerably.', ex2Hi: 'Lagat kaafi zyaada badh gayi hai.' },
    { de: 'ausgesprochen', pos: 'adverb', level: 'C1', register: 'written', en: 'exceptionally', hi: 'निहायत', ex: 'Die Ergebnisse sind ausgesprochen innovativ.', exEn: 'The results are exceptionally innovative.', exHi: 'Parinaam nihaayat navachaari hain.', ex2: 'Er ist ein ausgesprochen begabter Wissenschaftler.', ex2En: 'He is an exceptionally talented scientist.', ex2Hi: 'Woh ek nihaayat pratibhaashaali vaigyaanik hai.' },
    { de: 'vergleichsweise', pos: 'adverb', level: 'C1', register: 'written', en: 'comparatively', hi: 'तुलनात्मक रूप से', ex: 'Die Kosten sind vergleichsweise gering.', exEn: 'The costs are comparatively low.', exHi: 'Lagat tulnaatmak roop se kam hai.', ex2: 'Das Verfahren ist vergleichsweise einfach.', ex2En: 'The procedure is comparatively simple.', ex2Hi: 'Prakriya tulnaatmak roop se saral hai.' },
    { de: 'die Karrierechance', art: 'die', gender: 'f', plural: 'Karrierechancen', pos: 'noun', level: 'C1', register: 'both', en: 'career opportunity', hi: 'करियर अवसर', ex: 'Die Karrierechancen sind ebenso vielversprechend wie in Heidelberg.', exEn: 'The career opportunities are just as promising as in Heidelberg.', exHi: 'Career avsar Heidelberg jitne hi aasha janak hain.', ex2: 'Ein Auslandsstudium verbessert die Karrierechancen erheblich.', ex2En: 'Studying abroad considerably improves career opportunities.', ex2Hi: 'Videsh mein padhaai career avsaron ko kaafi behtar banaati hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Die Sprache des Vergleichs',
      body: [ 'Difference → Comparison → Evaluation → Judgement → Persuasion. Comparison is a communication strategy, not only a grammar topic.' ],
      hinglish: 'C1 par comparison sirf grammar nahi rehta \u2014 woh ek tareeka ban jaata hai apni baat manwane ka. Jab tum <span class="de">deutlich besser</span> ki jagah <span class="de">erheblich \u00fcberlegen</span> likhte ho, to sirf farak nahi bata rahe, faisla bhi de rahe ho. Isliye degree word soch kar chuno.'
    },
    {
      title: 'Gleichheit (Equality)',
      body: [ 'ebenso...wie / genauso...wie / gleich...wie / ebenso gut / in gleicher Weise / ebenso erfolgreich — authentic expressions of equality, each with slightly different stylistic weight.' ],
      hinglish: 'Barabari batane ke liye <b>ebenso \u2026 wie</b> aur <b>genauso \u2026 wie</b> chalte hain, aur formal writing mein <b>in gleicher Weise</b>. Ek baat pakki kar lo \u2014 equality mein hamesha <b>wie</b> aata hai, <b>als</b> kabhi nahi. <i>als</i> sirf tab aata hai jab comparative ho.'
    },
    {
      title: 'Vergleichsnuancen (Comparative Nuance)',
      body: [ 'deutlich...als (clearly) / wesentlich...als (substantially) / erheblich...als (considerably) / kaum...als (barely) / etwas...als (slightly) / leicht...als (mildly) / merklich...als (noticeably) / zunehmend (increasingly) — precise degrees of comparison.' ],
      hinglish: 'Yeh shabd batate hain ki farak <b>kitna</b> bada hai. <b>etwas</b> aur <b>leicht</b> thoda sa farak, <b>merklich</b> aur <b>deutlich</b> saaf dikhne wala, aur <b>wesentlich</b> aur <b>erheblich</b> bahut bada. Yeh sab comparative ke saath lagte hain, isliye adjective par <b>-er</b> hona zaroori hai: <span class="de">deutlich effektiver als \u2026</span>'
    },
    {
      title: 'Superlativ jenseits der Grammatik (Superlative Beyond Grammar)',
      body: [ 'mit Abstand (by far) / bei weitem (by far) / einer der wichtigsten (one of the most important) / höchst (highly) / äußerst (extremely) / besonders (especially) / außerordentlich (extraordinarily) — stylistic emphasis beyond simple "am + -sten".' ],
      hinglish: 'Superlative ko aur zor dene ke liye <b>mit Abstand</b> ya <b>bei weitem</b> lagta hai \u2014 <span class="de">bei weitem der wichtigste Faktor</span>. Aur agar tum poora superlative dava nahi karna chahte, to <b>einer der wichtigsten \u2026</b> behtar hai, kyunki woh zyada credible lagta hai. Dhyaan do ki uske baad Genitiv plural aata hai.'
    },
    {
      title: 'Verstärker (Intensifiers)',
      body: [ 'äußerst, ausgesprochen, besonders, außerordentlich, enorm, erheblich, außergewöhnlich, bemerkenswert, überaus — sophisticated C1 alternatives to overused "sehr".' ],
      hinglish: '<i>sehr</i> har jagah lagana B1 jaisa lagta hai. C1 par iske badle <b>\u00e4u\u00dferst</b>, <b>ausgesprochen</b>, <b>\u00fcberaus</b> ya <b>bemerkenswert</b> aate hain. Par yaad rakho \u2014 yeh sab <b>saadharan</b> adjective ke saath lagte hain, comparative ke saath nahi.'
    },
    {
      title: 'Abschwächer (Downtoners)',
      body: [ 'eher, relativ, einigermaßen, teilweise, weitgehend, kaum, nur bedingt, vergleichsweise — professional ways to weaken a claim without sounding uncertain or unqualified.' ],
      hinglish: 'Kabhi baat ko halka karna hota hai, aur German mein iske apne shabd hain: <b>eher</b>, <b>relativ</b>, <b>weitgehend</b>, <b>nur bedingt</b>, <b>vergleichsweise</b>. Yeh kamzori nahi dikhate \u2014 balki academic writing mein inhe imaandaari maana jaata hai, kyunki tum zyada dava nahi kar rahe.'
    },
    {
      title: 'Was passt zu was?',
      body: [
        'The lists above are only usable if you know what each word can attach to. Degree words split into two groups that cannot be swapped.',
        'One group intensifies a plain adjective; the other grades a comparative. Mixing them is the commonest C1 slip in this area.'
      ],
      table: {
        head: ['Type', 'Attaches to', 'Example'],
        rows: [
          ['\u00e4u\u00dferst, ausgesprochen, \u00fcberaus, h\u00f6chst', 'plain adjective only', '<span class="de">\u00e4u\u00dferst wichtig</span> \u2014 not <i>\u00e4u\u00dferst wichtiger</i>'],
          ['deutlich, wesentlich, erheblich, etwas, kaum', 'comparative only', '<span class="de">deutlich wichtiger <b>als</b> \u2026</span>'],
          ['besonders, enorm, bemerkenswert', 'plain adjective', '<span class="de">besonders erfolgreich</span>'],
          ['mit Abstand, bei weitem', 'superlative', '<span class="de">bei weitem <b>der wichtigste</b> Faktor</span>'],
          ['eher, relativ, vergleichsweise, weitgehend', 'plain adjective (weakening)', '<span class="de">vergleichsweise gering</span>']
        ]
      },
      note: 'Two structures worth memorising: <b>ebenso \u2026 wie</b> for equality (never <i>als</i>), and <b>einer der</b> + <b>Genitiv plural</b> for \u201cone of the most \u2026\u201d \u2014 <i>einer der wichtigsten Faktoren</i>.',
      hinglish: 'Upar wali lists tabhi kaam ki hain jab tumhe pata ho ki kaunsa shabd kiske saath lagta hai. Degree words do groups mein bantte hain aur inhe aapas mein badla nahi jaa sakta. <b>\u00e4u\u00dferst</b>, <b>ausgesprochen</b>, <b>\u00fcberaus</b> saadharan adjective ke saath lagte hain \u2014 <span class="de">\u00e4u\u00dferst wichtig</span> sahi hai, par <i>\u00e4u\u00dferst wichtiger</i> galat. Aur <b>deutlich</b>, <b>wesentlich</b>, <b>erheblich</b> sirf comparative ke saath \u2014 <span class="de">deutlich wichtiger als \u2026</span>. Superlative ke saath <b>mit Abstand</b> ya <b>bei weitem</b> aata hai. Do structures alag se yaad rakho: barabari ke liye <b>ebenso \u2026 wie</b> (yahan <i>als</i> kabhi nahi), aur <b>einer der</b> ke baad Genitiv plural \u2014 <span class="de">einer der wichtigsten Faktoren</span>.'
    },
    {
      title: 'Meister-Tabelle',
      body: [ 'Function mapped to typical expressions.' ],
      table: {
        head: ['Function', 'Typical Expressions'],
        rows: [
          ['Equality', 'ebenso ... wie'],
          ['Comparison', 'deutlich ... als'],
          ['Strong Difference', 'erheblich ...'],
          ['Superlative', 'bei weitem'],
          ['Intensifier', 'äußerst'],
          ['Downtoner', 'eher']
        ]
      },
      hinglish: 'Function aur expression ka table \u2014 pehle tay karo ki tumhe barabari batani hai, farak batana hai, ya zor dena hai; phir usi row se shabd uthao aur dekho ki woh kis form ke saath lagta hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'Three of these are structural (wie vs als, comparative endings, the einer der \u2026 frame) and three are about matching the degree word to what it modifies.' ],
      mistakes: [
        { wrong: 'Diese Methode ist mehr effektiv als die alte.', right: 'Diese Methode ist deutlich effektiver als die alte.', why: 'German forms the comparative with <b>-er</b>, not with <i>mehr</i>. Add a degree word like <b>deutlich</b> to make it precise.' },
        { wrong: 'Das Ergebnis ist \u00e4u\u00dferst besser als erwartet.', right: 'Das Ergebnis ist deutlich besser als erwartet.', why: '<b>\u00e4u\u00dferst</b> intensifies a plain adjective (<i>\u00e4u\u00dferst gut</i>), never a comparative. Comparatives take <b>deutlich</b>, <b>wesentlich</b> or <b>erheblich</b>.' },
        { wrong: 'Die neue Software ist ebenso schnell als die alte.', right: 'Die neue Software ist ebenso schnell wie die alte.', why: 'Equality takes <b>wie</b>; only a comparative takes <b>als</b>. This is the single most common comparison error.' },
        { wrong: 'Dieses Verfahren ist dem alten erheblich \u00fcberlegen als fr\u00fcher.', right: 'Dieses Verfahren ist dem alten erheblich \u00fcberlegen.', why: '<b>\u00fcberlegen</b> already contains the comparison and takes a <b>Dativ</b> object \u2014 adding <i>als</i> duplicates it.' },
        { wrong: 'Die Werte sind ziemlich signifikant gestiegen.', right: 'Die Werte sind signifikant gestiegen.', why: '<b>signifikant</b> is a technical term \u2014 something either is statistically significant or is not. Softening it with <i>ziemlich</i> contradicts the term.' },
        { wrong: 'Das ist einer der wichtigste Faktor.', right: 'Das ist einer der wichtigsten Faktoren.', why: 'The <b>einer der \u2026</b> frame needs a Genitiv plural after it \u2014 so both the adjective and the noun go plural.' }
      ],
      hinglish: 'Inme se teen galtiyan structure ki hain \u2014 <b>wie</b> aur <b>als</b> ka farak, comparative ki ending, aur <b>einer der \u2026</b> wala frame. Baaki teen mein degree word us cheez se match nahi karta jispar woh laga hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need equality? ebenso...wie. Need comparison? ...als. Need emphasis? deutlich → erheblich → äußerst. Need to weaken? eher → relativ → weitgehend. Need scientific precision? signifikant → vergleichsweise → im Vergleich zu.' ],
      note: 'Memory trick: at A1 you compare objects. At C1 you compare ideas, arguments, evidence, probabilities, research, policies, opinions. Comparison is a tool for thinking, not just a grammar rule.',
      hinglish: 'Barabari? <b>ebenso \u2026 wie</b>. Farak? comparative + <b>als</b>. Zor? <b>deutlich \u2192 erheblich</b> comparative ke saath, aur <b>\u00e4u\u00dferst</b> saadharan adjective ke saath. Halka karna? <b>eher \u2192 relativ \u2192 weitgehend</b>. Aur likhne se pehle ek baar dekho \u2014 <b>wie</b> hai ya <b>als</b>, aur adjective ki form uske saath match kar rahi hai?'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Verbrauchermagazin: Der große E-Auto-Vergleich',
    titleEn: 'Reading A — Consumer magazine: the big electric-car comparison',
    tokens: [
      { w: 'Von', role: 'plain', en: 'of', hi: 'में से', type: 'Preposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (plural dat.)', hi: 'इन', type: 'Article · Dat.' },
      { w: 'zehn', role: 'plain', en: 'ten', hi: 'दस', type: 'Number' },
      { w: 'getesteten', role: 'plain', en: 'tested (Satzende)', hi: 'परखी गई (Satzende)', type: 'Verb · Partizip II (Attribut)' },
      { w: 'Modellen', role: 'plain', en: 'models (Satzende)', hi: 'मॉडलों (Satzende)', type: 'Noun · plural' },
      { w: 'überzeugt', role: 'plain', en: 'convinces', hi: 'प्रभावित करती है', type: 'Verb · überzeugen (Präsens)' },
      { w: 'ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'Kompaktwagen', role: 'plain', en: 'compact car (Satzende)', hi: 'कॉम्पैक्ट कार (Satzende)', type: 'Noun · masc.' },
      { w: 'am', role: 'r-super', en: 'the (Kontraktion, part of superlative "am meisten")', hi: '', type: 'Präposition (Kontraktion)' },
      { w: 'meisten', role: 'r-super', en: 'most (Satzende, adverbial superlative)', hi: 'सबसे ज़्यादा (Satzende)', type: 'Adverb · Superlativ (Satzende)', why: '"am meisten" is the adverbial superlative used to modify a verb, not a noun (this chapter).' },
      { w: '.', plain: true },
      { w: 'Er', role: 'plain', en: 'it', hi: 'वह', type: 'Pronoun' },
      { w: 'lädt', role: 'plain', en: 'charges', hi: 'चार्ज होती है', type: 'Verb · laden' },
      { w: 'zwar', role: 'plain', en: 'admittedly', hi: 'सच है कि', type: 'Adverb' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'so', role: 'r-equal', en: 'as (equal comparison, part of "so...wie")', hi: 'जितनी', type: 'Adverb', why: '"so...wie" expresses equal-degree comparison, unlike the graded "je...desto" below (this chapter).' },
      { w: 'schnell', role: 'r-equal', en: 'fast (Satzende, closes "so...wie")', hi: 'तेज़ (Satzende)', type: 'Adjective (Satzende)' },
      { w: 'wie', role: 'r-equal', en: 'as (closes "so...wie")', hi: 'जितनी', type: 'Konjunktion' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'teuerste', role: 'plain', en: 'most expensive (Satzende, Superlativ)', hi: 'सबसे महँगा (Satzende)', type: 'Adjective · Superlativ' },
      { w: 'Konkurrent', role: 'plain', en: 'competitor (Satzende)', hi: 'प्रतिस्पर्धी (Satzende)', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'punktet', role: 'plain', en: 'scores points', hi: 'बाज़ी मारती है', type: 'Verb · punkten' },
      { w: 'dafür', role: 'plain', en: 'in return', hi: 'इसके बदले', type: 'Adverb' },
      { w: 'aber', role: 'plain', en: 'but', hi: 'लेकिन', type: 'Conjunction' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (masc. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'deutlich', role: 'plain', en: 'noticeably', hi: 'काफ़ी', type: 'Adverb' },
      { w: 'niedrigeren', role: 'plain', en: 'lower (Komparativ, Satzende)', hi: 'कम (Satzende)', type: 'Adjective · Komparativ' },
      { w: 'Preis', role: 'plain', en: 'price (Satzende)', hi: 'क़ीमत (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Je', role: 'r-graded', en: 'the (opens correlative comparative pair)', hi: 'जितना', type: 'Konjunktion', why: '"Je...desto" links two increasing quantities proportionally (this chapter).' },
      { w: 'größer', role: 'r-graded', en: 'larger (Komparativ, closes "je" clause)', hi: 'बड़ी', type: 'Adjective · Komparativ' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Batterie', role: 'plain', en: 'battery (Satzende)', hi: 'बैटरी (Satzende)', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'desto', role: 'r-graded', en: 'the (opens result clause)', hi: 'उतनी', type: 'Adverb' },
      { w: 'höher', role: 'r-graded', en: 'higher (Komparativ, Satzende)', hi: 'ज़्यादा (Satzende)', type: 'Adjective · Komparativ' },
      { w: 'fällt', role: 'plain', en: 'turns out (Satzende)', hi: 'होती है (Satzende)', type: 'Verb · ausfallen' },
      { w: 'erwartungsgemäß', role: 'plain', en: 'as expected', hi: 'अपेक्षानुसार', type: 'Adverb' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Anschaffungspreis', role: 'plain', en: 'purchase price (Satzende)', hi: 'ख़रीद मूल्य (Satzende)', type: 'Noun · masc.' },
      { w: 'aus', role: 'plain', en: '(Satzende, prefix)', hi: '', type: 'Separable prefix · ausfallen' },
      { w: '.', plain: true }
    ],
    translation: 'Of the ten models tested, a compact car convinces the most. It admittedly does not charge as fast as the most expensive competitor, but it scores points in return with a noticeably lower price. As expected, the larger the battery, the higher the purchase price turns out.',
    comprehension: [
      { q: 'Welche Funktion hat "am meisten"?', options: ['Adverbialer Superlativ (bezieht sich auf das Verb)', 'Attributiver Superlativ', 'Ein Vergleich mit "wie"'], answer: 0 },
      { q: 'Was drückt "so...wie" aus?', options: ['Gleichheit im Vergleich', 'Steigerung', 'Gegensatz'], answer: 0 },
      { q: 'Was drückt "je...desto" aus?', options: ['Proportionale Steigerung zweier Größen', 'Einen einmaligen Vergleich', 'Eine Bedingung'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungsanalyse',
    titleEn: 'Reading B — Newspaper analysis',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Zahlen', role: 'plain', en: 'numbers (Satzende)', hi: 'sankhyaayen (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'sind', role: 'plain', en: 'are', hi: 'hain', type: 'Verb · sein (Präsens)' },
      { w: 'überraschend', role: 'r-verstaerkung', en: 'surprisingly (journalistic intensifier)', hi: 'aashcharyajanak roop se (journalistic intensifier)', type: 'Adverb' },
      { w: 'hoch', role: 'plain', en: 'high (Satzende)', hi: 'uchch (Satzende)', type: 'Adjective (Satzende)' },
      { w: '.', plain: true },
      { w: 'Das', role: 'plain', en: 'the (neut. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Unternehmen', role: 'plain', en: 'company (Satzende)', hi: 'company (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'hai', type: 'Verb · sein (Präsens)' },
      { w: 'mit', role: 'r-superlativ', en: 'with (part of fixed superlative expression)', hi: '(fixed superlative expression)', type: 'Präposition · Dat.' },
      { w: 'Abstand', role: 'r-superlativ', en: 'distance (Satzende, "by far")', hi: 'kaafi aage (Satzende, "by far")', type: 'Noun · masc. (Satzende)' },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'wirtschaftlich', role: 'plain', en: 'economically', hi: 'aarthik roop se', type: 'Adverb' },
      { w: 'erfolgreichste', role: 'plain', en: 'most successful (Satzende, Superlativ)', hi: 'sabse safal (Satzende, Superlativ)', type: 'Adjective · Superlativ (Satzende)' },
      { w: 'Akteur', role: 'plain', en: 'player (Satzende)', hi: 'khiladi hai (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The numbers are surprisingly high. The company is by far the most economically successful player.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_019_L001', speaker: 'Solveig', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, das Angebot der renommierten Firma ist doch deutlich besser als meine jetzige Stelle, oder?', en: 'Timo, the offer from the renowned firm is clearly better than my current position, right?' },
      { id: 'C1_019_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Auf jeden Fall — die Karrierechancen dort sind erheblich größer, und das Gehalt ist vergleichsweise hoch.', en: 'Definitely — the career opportunities there are considerably greater, and the salary is comparatively high.' },
      { id: 'C1_019_L003', speaker: 'Solveig', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Stimmt, allerdings ist die Arbeitszeit dort auch merklich länger als hier.', en: 'True, however the working hours there are also noticeably longer than here.' },
      { id: 'C1_019_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das musst du wirklich sorgfältig gegeneinander abwägen.', en: 'You really need to weigh that carefully against each other.' }
    ],
    transcript: 'Timo, das Angebot der renommierten Firma ist doch deutlich besser als meine jetzige Stelle, oder? Auf jeden Fall — die Karrierechancen dort sind erheblich größer, und das Gehalt ist vergleichsweise hoch. Stimmt, allerdings ist die Arbeitszeit dort auch merklich länger als hier. Das musst du wirklich sorgfältig gegeneinander abwägen.',
    translation: 'Timo, the offer from the renowned firm is clearly better than my current position, right? Definitely — the career opportunities there are considerably greater, and the salary is comparatively high. True, however the working hours there are also noticeably longer than here. You really need to weigh that carefully against each other.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'Angebot' },
      { w: 'der' },
      { w: 'renommierten' },
      { w: 'Firma' },
      { w: 'ist' },
      { w: 'doch' },
      { w: 'deutlich' },
      { w: 'besser' },
      { w: 'als' },
      { w: 'meine' },
      { w: 'jetzige' },
      { w: 'Stelle' },
      { w: ',', plain: true },
      { w: 'oder' },
      { w: '?', plain: true },
      { w: 'Auf' },
      { w: 'jeden' },
      { w: 'Fall' },
      { w: '—', plain: true },
      { w: 'die' },
      { w: 'Karrierechancen' },
      { w: 'dort' },
      { w: 'sind' },
      { w: 'erheblich' },
      { w: 'größer' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'das' },
      { w: 'Gehalt' },
      { w: 'ist' },
      { w: 'vergleichsweise' },
      { w: 'hoch' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: 'allerdings' },
      { w: 'ist' },
      { w: 'die' },
      { w: 'Arbeitszeit' },
      { w: 'dort' },
      { w: 'auch' },
      { w: 'merklich' },
      { w: 'länger' },
      { w: 'als' },
      { w: 'hier' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'musst' },
      { w: 'du' },
      { w: 'wirklich' },
      { w: 'sorgfältig' },
      { w: 'gegeneinander' },
      { w: 'abwägen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie beschreibt Timo die Karrierechancen in der neuen Firma?', qEn: 'How does Timo describe the career chances at the new firm?', options: ['etwas kleiner', 'erheblich größer', 'unverändert', 'unklar'], optionsEn: ['a little smaller', 'considerably bigger', 'unchanged', 'unclear'], answer: 1,
        explain: '"… die Karrierechancen dort sind erheblich größer."' },
      { q: 'Welchen Nachteil nennt Solveig?', qEn: 'What downside does Solveig mention?', options: ['das Gehalt', 'die Arbeitszeit', 'der Standort', 'die Kollegen'], optionsEn: ['the salary', 'the working hours', 'the location', 'the colleagues'], answer: 1,
        explain: '"… die Arbeitszeit dort auch merklich länger als hier."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Timo hält das Angebot der renommierten Firma für besser. Stimm zu.", taskEn: "Timo thinks the renowned firm's offer is better. Agree.", de: "Auf jeden Fall — die Karrierechancen dort sind erheblich besser.", en: "Definitely — the career prospects there are considerably better." },
    { task: "Eine Studentin fragt, ob die beiden Hochschulen gleichwertig sind.", taskEn: "A student asks whether the two universities are equivalent.", de: "Beide sind ebenso gut ausgestattet wie renommierte Standorte.", en: "Both are just as well equipped as renowned institutions." },
    { task: "Bewerte ein überraschend starkes Ergebnis.", taskEn: "Assess a surprisingly strong result.", de: "Der Effekt ist ausgesprochen deutlich und erheblich größer als erwartet.", en: "The effect is remarkably clear and considerably larger than expected." },
    { task: "Ein Gutachter überschätzt die Aussagekraft. Relativiere höflich.", taskEn: "A reviewer overrates the significance. Qualify politely.", de: "Die Ergebnisse sind vergleichsweise wenig belastbar.", en: "The results are comparatively less robust." },
    { task: "Deine Freundin vergleicht zwei Karrierewege. Sag deine Sicht.", taskEn: "Your friend compares two career paths. Give your view.", de: "Die Industrie zahlt erheblich besser, die Hochschule bietet vergleichsweise mehr Freiheit.", en: "Industry pays considerably better, the university offers comparatively more freedom." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Take simple comparisons and rewrite them into authentic C1 comparative language (equality, comparative nuance, intensifiers, downtoners).\n\nTASK 2 — Analytical comparison essay (350 words): Evaluate two approaches, products, policies, or research methods using varied comparison structures, intensifiers, and downtoners.',
    starters: ['Im Vergleich zu älteren Modellen ist die neue Version erheblich effizienter.', 'Die Karrierechancen sind ebenso vielversprechend wie an anderen Universitäten.'],
    placeholder: 'Die Universität in Heidelberg ist deutlich renommierter als die meisten anderen. Die Forschungsergebnisse dort sind ausgesprochen innovativ...',
    minWords: 150
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which expression is most appropriate for formal academic comparison?',
      options: ['Im Vergleich zu...', 'Mehr als...', 'Sehr viel...'],
      answer: 0,
      explain: '"Im Vergleich zu" is the standard, precise academic comparison structure.'
    },
    gap: {
      sentence: ['Die Betreuung dort ist nur ', ' besser.'],
      gaps: [ { answer: 'bedingt', accepts: ['bedingt'] } ],
      explain: '"Nur bedingt" is a professional downtoner, weakening the claim without sounding unqualified.'
    },
    match: {
      q: 'Match each expression to its function.',
      pairs: [
        { noun: 'ebenso...wie', art: 'Equality' },
        { noun: 'deutlich...als', art: 'Comparative Nuance' },
        { noun: 'mit Abstand', art: 'Superlative beyond grammar' },
        { noun: 'nur bedingt', art: 'Downtoner' }
      ]
    },
    builder: {
      target: 'Build: "The university is noticeably more renowned than most others." (comparative nuance)',
      bank: ['Die', 'Universität', 'ist', 'deutlich', 'renommierter', 'als', 'die', 'meisten', 'anderen', '.'],
      answer: ['Die', 'Universität', 'ist', 'deutlich', 'renommierter', 'als', 'die', 'meisten', 'anderen', '.'],
      roles: { 'deutlich': 'r-vergleich', 'als': 'r-vergleich' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Das Programm ist sehr besser und sehr günstiger als das andere.',
      right: 'Das Programm ist erheblich besser und wesentlich günstiger als das andere.',
      explain: '"Sehr" cannot intensify a comparative form; formal C1 register uses "erheblich" or "wesentlich" instead.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What do C1 speakers primarily compare, beyond simple objects?', options: ['Ideas, arguments, evidence, and policies', 'Only physical objects', 'Only prices'], answer: 0,
      explain: 'C1 comparison is a tool for evaluating ideas, evidence, and arguments, not just objects.' },
    { q: 'Which expression conveys equality?', options: ['ebenso...wie', 'deutlich...als', 'mit Abstand'], answer: 0,
      explain: '"Ebenso...wie" is the standard C1 equality structure.' },
    { q: 'Which is a strong, sophisticated C1 intensifier?', options: ['ausgesprochen', 'sehr', 'ziemlich'], answer: 0,
      explain: '"Ausgesprochen" is more precise and formal than the overused "sehr".' },
    { q: 'Which expression softens a claim professionally?', options: ['nur bedingt', 'äußerst', 'bei weitem'], answer: 0,
      explain: '"Nur bedingt" weakens a claim while remaining precise and professional.' },
    { q: 'What is the C1 memory trick for this chapter?', options: ['Comparison is a tool for thinking, not just a grammar rule', 'Always use "mehr" and "sehr"', 'Superlatives are always best'], answer: 0,
      explain: 'C1 speakers use comparison to evaluate and persuade, with precise, varied language.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-gleichheit', html: 'Equality (ebenso...wie, genauso...wie) and comparative nuance (deutlich...als, erheblich...als) let you express precise degrees of difference, not just "more" or "less".' },
    { c: 'r-verstaerkung', html: 'Sophisticated intensifiers (ausgesprochen, erheblich, außerordentlich) replace overused "sehr" for formal, academic, and journalistic register.' },
    { c: 'r-abschwaechung', html: 'Downtoners (nur bedingt, vergleichsweise, weitgehend) professionally weaken claims without sounding uncertain.' }
  ],
  revisionTips: [
    'Take five sentences using "sehr" or "mehr" and rewrite each with a more precise C1 intensifier or comparison structure.',
    'Write three sentences using equality (ebenso...wie), comparative nuance (deutlich...als), and a downtoner (nur bedingt) about the same topic.',
    'Find a German news article and mark every intensifier and downtoner you can identify.'
  ]
};

window.CHAPTER = CHAPTER;
