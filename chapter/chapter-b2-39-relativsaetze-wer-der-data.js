/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 4 · Chapter 39
   "Relativsätze mit wer... der..." — indefinite relative clauses.
   "wer" (whoever) starts a clause with NO specific antecedent;
   "der/die/das" (or a demonstrative) picks up the main clause,
   often matching the case required by the main clause verb even
   when it differs from "wer"'s case. Common in proverbs, general
   statements, and formal writing ("Wer wagt, gewinnt").
   Does NOT teach was...das (indefinite relative with was) or
   wo-compounds — those are separate/later topics.
   IMPORTANT: dialogue uses ONLY Katrin and Timo.
   Vocabulary source: uploaded chapter-39 list (51 items).
============================================================ */
const CHAPTER = {
  id: 'b2-39-relativsaetze-wer-der',
  phase: 'B2 · Phase 4',
  number: 39,
  title: 'Relativsätze mit wer... der...',
  titleEn: 'Indefinite relative clauses: whoever... that person...',
  description: '"wer" opens a clause about anyone at all; "der/die/das" picks the story back up — the grammar behind every good proverb.',
  xp: 520,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 40, title: 'Verben mit Präpositionen (B2)', titleEn: 'Verbs with fixed prepositions (B2)' , href: 'chapter-b2-40-verben-mit-praepositionen.html' },

  prevChapter: { number: 38, title: 'Verschachtelte Relativsätze', titleEn: 'Nested relative clauses', href: 'chapter-b2-38-verschachtelte-relativsaetze.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Whoever <em>does this</em>...',
    intro: 'Katrin and Timo theorize about a stolen painting — whoever took it knows the gallery well, whoever works there has vault access — trading proverbs and detective logic built on wer opening a clause, der picking it back up.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how "wer" and "der" work together even when their cases differ'
    ],
    scene: 'Allgemeine Wahrheiten',
    femaleSpeakers: ['Katrin'],
    dialogue: [
      { speaker: 'Katrin', tokens: [
        { w: 'Wer', role: 'r-subject', en: 'whoever', hi: 'जो कोई भी', pron: 'vair', type: 'Relativpronomen · wer … der', why: 'wer + Konjunktiv/Indikativ ... der = generalizing relative clause (this chapter).', ex: 'Wer das Gemälde gestohlen hat, der kennt die Galerie gut.', exEn: 'Whoever stole the painting knows the gallery well.' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Gemälde', role: 'r-akkusativ', en: 'painting', hi: 'चित्रकारी', pron: 'ge-MEL-duh', type: 'Noun · neut.' },
        { w: 'gestohlen', role: 'r-verb', en: 'stolen', hi: 'चुराया', pron: 'ge-SHTOH-len', type: 'Partizip II' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben (Satzende)' },
        { w: ',', plain: true },
        { w: 'der', role: 'r-subject', en: 'that person', hi: 'वह', pron: 'dair', type: 'Relativpronomen · wer … der' },
        { w: 'kennt', role: 'r-verb', en: 'knows', hi: 'जानता है', pron: 'kent', type: 'Verb · kennen' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Galerie', role: 'r-akkusativ', en: 'gallery', hi: 'कला दीर्घा', pron: 'ga-le-REE', type: 'Noun · fem.' },
        { w: 'gut', role: 'r-akkusativ', en: 'well', hi: 'अच्छी तरह', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Whoever stole the painting knows the gallery well.', hi: 'Jisne bhi chitrakaari churayi, woh gallery ko achhi tarah jaanta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wer', role: 'r-subject', en: 'whoever', hi: 'जो कोई भी', pron: 'vair', type: 'Relativpronomen · wer … der' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'arbeitet', role: 'r-verb', en: 'works', hi: 'काम करता है', pron: 'AR-by-tet', type: 'Verb · arbeiten (Satzende)' },
        { w: ',', plain: true },
        { w: 'der', role: 'r-subject', en: 'that person', hi: 'वह', pron: 'dair', type: 'Relativpronomen · wer … der' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben' },
        { w: 'Zugang', role: 'r-akkusativ', en: 'access', hi: 'पहुंच', pron: 'TSOO-gang', type: 'Noun · masc.', why: 'der Zugang (this chapter).', ex: 'Zugang zum Tresor' },
        { w: 'zum', role: 'r-preposition', en: 'to the', hi: 'के लिए', pron: 'tsum', type: 'Preposition + place' },
        { w: 'Tresor', role: 'r-dativ', en: 'vault (dat.)', hi: 'तिजोरी में', pron: 'tre-ZOR', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'Whoever works here has access to the vault.', hi: 'Jo koi bhi yahaan kaam karta hai, uski tijori tak pahunch hoti hai.' },
      { speaker: 'Katrin', tokens: [
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'wer', role: 'r-subject', en: 'whoever', hi: 'जो कोई भी', pron: 'vair', type: 'Relativpronomen · wer … der' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', pron: 'zo', type: 'Adverb' },
        { w: 'viel', role: 'r-akkusativ', en: 'much', hi: 'ज़्यादा', pron: 'feel', type: 'Adverb' },
        { w: 'riskiert', role: 'r-verb', en: 'risks', hi: 'जोखिम लेता है', pron: 'ri-SKEERT', type: 'Verb · riskieren (Satzende)' },
        { w: ',', plain: true },
        { w: 'der', role: 'r-subject', en: 'that person', hi: 'वह', pron: 'dair', type: 'Relativpronomen · wer … der' },
        { w: 'braucht', role: 'r-verb', en: 'needs', hi: 'ज़रूरत है', pron: 'BROWKHT', type: 'Verb · brauchen' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'starken', role: 'r-akkusativ', en: 'strong', hi: 'मज़बूत', pron: 'SHTAR-ken', type: 'Adjective' },
        { w: 'Grund', role: 'r-akkusativ', en: 'reason', hi: 'कारण', pron: 'grunt', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'But whoever risks so much needs a strong reason.', hi: 'Lekin jo koi bhi itna zyada jokhim leta hai, use ek mazboot kaaran chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'Geld', role: 'r-subject', en: 'money', hi: 'पैसा', pron: 'gelt', type: 'Noun · neut.' },
        { w: '.', plain: true },
        { w: 'Wer', role: 'r-subject', en: 'whoever', hi: 'जो कोई भी', pron: 'vair', type: 'Relativpronomen · wer … der' },
        { w: 'kein', role: 'r-akkusativ', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Determiner' },
        { w: 'Geld', role: 'r-akkusativ', en: 'money', hi: 'पैसा', pron: 'gelt', type: 'Noun · neut.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben (Satzende)' },
        { w: ',', plain: true },
        { w: 'der', role: 'r-subject', en: 'that person', hi: 'वह', pron: 'dair', type: 'Relativpronomen · wer … der' },
        { w: 'handelt', role: 'r-verb', en: 'acts', hi: 'कार्य करता है', pron: 'HAN-delt', type: 'Verb · handeln' },
        { w: 'manchmal', role: 'r-adverb', en: 'sometimes', hi: 'कभी-कभी', pron: 'MANKH-mahl', type: 'Adverb' },
        { w: 'verzweifelt', role: 'r-akkusativ', en: 'desperately', hi: 'निराशा में', pron: 'fer-TSVY-felt', type: 'Adjective', why: 'verzweifelt = desperate (this chapter).', ex: 'Er handelt verzweifelt.', exEn: 'He acts desperately.' },
        { w: '.', plain: true }
      ], en: 'Maybe it was money. Whoever has no money sometimes acts desperately.', hi: 'Shayad yeh paisa tha. Jiske paas paisa nahi hota, woh kabhi-kabhi niraasha mein kaarya karta hai.' },
      { speaker: 'Katrin', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'gute', role: 'r-akkusativ', en: 'good', hi: 'अच्छी', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Theorie', role: 'r-akkusativ', en: 'theory', hi: 'सिद्धांत', pron: 'tay-o-REE', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'sie', role: 'r-akkusativ', en: 'it (fem.)', hi: 'यह', pron: 'zee', type: 'Pronoun · acc.' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Polizei', role: 'r-dativ', en: 'police (dat.)', hi: 'पुलिस को', pron: 'po-li-TSY', type: 'Noun · fem. dat.' },
        { w: 'mitteilen', role: 'r-verb', en: 'tell', hi: 'बताना', pron: 'MIT-ty-len', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'That is a good theory. We should tell it to the police.', hi: 'Yeh ek achha siddhaant hai. Humein yeh police ko bataana chahiye.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de r-wer-der">wer</span> opens a clause about ANYONE — no specific antecedent. <span class="de r-wer-der">der/die/das/dessen/deren</span> picks the story back up in the main clause, taking whatever CASE the main clause verb requires — even if it differs from "wer"\'s own case.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is RELATIVSÄTZE MIT WER... DER... (B2 level): indefinite relative clauses. "wer" opens a clause meaning "whoever" with NO specific antecedent (e.g. "Wer wagt, gewinnt" = "Whoever dares, wins"). The main clause is then picked up by "der/die/das" (or dessen/deren), which takes whatever CASE the main-clause verb requires — this can differ from wer\'s own case (e.g. "Wer zu spät kommt, den bestraft das Leben" — wer is Nom., den is Akk. because "bestrafen" takes an accusative object). ' +
    'Do NOT expect or require "was...das" indefinite relative clauses or wo-compounds — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that "wer" clauses send the verb to the end, like any Nebensatz.\n' +
    '- Check that the resuming pronoun (der/die/das/den/dem/dessen/deren) matches the CASE required by the main-clause verb — not necessarily the same case as "wer".\n' +
    '- It is correct and common to omit the resuming pronoun entirely when the main clause needs the Nominativ (e.g. "Wer wagt, gewinnt") — do not flag this as an error.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Case check:</b> one sentence on whether the learner correctly matched the resuming pronoun\'s case to the main-clause verb\'s requirement.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly match the resuming pronoun\'s case to what the main clause verb needs. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the case-matching examples once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: "wer" opens the clause; "der/die/das" resumes it in whatever case the MAIN clause verb requires.'
  },

  parserSentence: [
    { w: 'Wer', role: 'r-wer-der' }, { w: 'wagt', role: 'r-wer-der' }, { w: ',', plain: true },
    { w: 'gewinnt', role: 'r-wer-der' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: wer opens a clause about anyone; der/die/das resumes it in the main clause\'s required case.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Katrin and Timo trade proverbs and detective-story truths built on wer... der...' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 51 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the wer...der... structure and how the resuming pronoun\'s case can differ from wer\'s.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read proverbs and a detective story passage full of wer...der... constructions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the wer-clause, the resuming pronoun, and its case.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'State general truths and proverbs using wer...der... naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write opinion texts and general statements using indefinite relative clauses.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill case-matching, completing proverbs, and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 520 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 51 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'wer/der case-matching drills, proverb completion, and a general-statement writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete case-matching table, common proverbs, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Wer wagt, gewinnt.', text: 'Use wer to state a general truth about anyone' },
    { de: 'Wer zu spät kommt, den bestraft das Leben.', text: 'Resume with the correct case even when it differs from wer' },
    { de: 'Wer verdächtigt wird, dessen Alibi wird geprüft.', text: 'Use dessen/deren to resume in the Genitiv' },
    { de: 'wer (Nom., no antecedent) + der/die/das (any case)', text: 'Distinguish this from definite relative clauses' },
    { de: 'Common in proverbs and formal writing', text: 'Recognize the register where this structure thrives' }
  ],

  // ---------- Vocabulary (51 items — uploaded chapter-39 list) ----------
  vocab: [
    { de: 'unglaubwürdig', pos: 'adjective', level: 'B2', register: 'both', en: 'implausible, not credible', hi: 'अविश्वसनीय', ex: 'Seine Geschichte war unglaubwürdig.', exEn: 'His story was implausible.', exHi: 'Uski kahaani avishvasaneey thi.', ex2: 'Sie haben die unglaubwürdige Aussage angezweifelt.', ex2En: 'They\'ve doubted the not-credible statement.', ex2Hi: 'Unhone avishvasaneey bayaan par sandeh kiya hai.' },
    { de: 'Verbreitung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'spread, dissemination', hi: 'प्रसार', ex: 'Die Verbreitung der Nachricht war schnell.', exEn: 'The spread of the news was quick.', exHi: 'Khabar ka prasaar tez tha.', ex2: 'Sie haben die Verbreitung gestoppt.', ex2En: 'They\'ve stopped the dissemination.', ex2Hi: 'Unhone prasaar roka hai.' },
    { de: 'verdächtigen', pos: 'verb', level: 'B2', register: 'both', en: 'to suspect', hi: 'शक करना', ex: 'Sie verdächtigte ihren Nachbarn.', exEn: 'She suspected her neighbour.', exHi: 'Usne apne padosi par shak kiya.', ex2: 'Er hat sie zu Unrecht verdächtigt.', ex2En: 'He\'s wrongly suspected her.', ex2Hi: 'Usne galat tarike se uspar shak kiya hai.', conj: { praesens: 'verdächtigt', praeteritum: 'verdächtigte', perfekt: 'hat verdächtigt' } },
    { de: 'vererben', pos: 'verb', level: 'B2', register: 'both', en: 'to bequeath, pass on', hi: 'विरासत में देना', ex: 'Sie vererbte ihm das Haus.', exEn: 'She bequeathed him the house.', exHi: 'Usne use ghar viraasat mein diya.', ex2: 'Er hat sein Vermögen vererbt.', ex2En: 'He\'s bequeathed his fortune.', ex2Hi: 'Usne apni sampatti viraasat mein di hai.', conj: { praesens: 'vererbt', praeteritum: 'vererbte', perfekt: 'hat vererbt' } },
    { de: 'Verkaufsausstellung', art: 'die', gender: 'f', plural: 'Verkaufsausstellungen', pos: 'noun', level: 'B2', register: 'written', en: 'sales exhibition', hi: 'बिक्री प्रदर्शनी', ex: 'Die Verkaufsausstellung zog viele Käufer an.', exEn: 'The sales exhibition attracted many buyers.', exHi: 'Bikri pradarshani ne kai khareedaaron ko aakarshit kiya.', ex2: 'Sie haben eine Verkaufsausstellung organisiert.', ex2En: 'They\'ve organised a sales exhibition.', ex2Hi: 'Unhone ek bikri pradarshani aayojit ki hai.' },
    { de: 'verwechseln', pos: 'verb', level: 'B2', register: 'both', en: 'to confuse, mix up', hi: 'गड़बड़ करना', ex: 'Sie verwechselte die Namen.', exEn: 'She mixed up the names.', exHi: 'Usne naam gadbad kar diye.', ex2: 'Er hat die Zwillinge verwechselt.', ex2En: 'He\'s confused the twins.', ex2Hi: 'Usne judwaon ko gadbad kar diya hai.', conj: { praesens: 'verwechselt', praeteritum: 'verwechselte', perfekt: 'hat verwechselt' } },
    { de: 'verweisen', pos: 'verb', level: 'B2', register: 'written', en: 'to refer, point', hi: 'संदर्भित करना', ex: 'Sie verwies auf den Bericht.', exEn: 'She referred to the report.', exHi: 'Usne report ka sandarbh diya.', ex2: 'Er hat auf die Regeln verwiesen.', ex2En: 'He\'s pointed to the rules.', ex2Hi: 'Usne niyamon ka sandarbh diya hai.', conj: { praesens: 'verweist', praeteritum: 'verwies', perfekt: 'hat verwiesen' } },
    { de: 'vielseitig', pos: 'adjective', level: 'B2', register: 'both', en: 'versatile, many-sided', hi: 'बहुमुखी', ex: 'Sie war eine vielseitige Künstlerin.', exEn: 'She was a versatile artist.', exHi: 'Woh ek bahumukhi kalaakaar thi.', ex2: 'Er hat vielseitige Fähigkeiten.', ex2En: 'He\'s got versatile skills.', ex2Hi: 'Uske paas bahumukhi kaushal hain.' },
    { de: 'Vorwarnung', art: 'die', gender: 'f', plural: 'Vorwarnungen', pos: 'noun', level: 'B2', register: 'both', en: 'advance warning', hi: 'पूर्व चेतावनी', ex: 'Die Bande hatte keine Vorwarnung.', exEn: 'The gang had no advance warning.', exHi: 'Gang ko koi poorv chetaavani nahi mili.', ex2: 'Sie haben eine Vorwarnung gegeben.', ex2En: 'They\'ve given an advance warning.', ex2Hi: 'Unhone ek poorv chetaavani di hai.' },
    { de: 'wechseln', pos: 'verb', level: 'B2', register: 'both', en: 'to change, switch', hi: 'बदलना', ex: 'Sie wechselte den Job.', exEn: 'She changed jobs.', exHi: 'Usne naukri badli.', ex2: 'Er hat die Meinung gewechselt.', ex2En: 'He\'s changed his mind.', ex2Hi: 'Usne apni raay badli hai.', conj: { praesens: 'wechselt', praeteritum: 'wechselte', perfekt: 'hat gewechselt' } },
    { de: 'wegkommen', pos: 'verb', level: 'B2', register: 'spoken', en: 'to get lost, come off', hi: 'खो जाना, बच निकलना', ex: 'Er kam gut weg.', exEn: 'He came off well.', exHi: 'Woh achhi tarah bach nikla.', ex2: 'Ihr Schmuck ist weggekommen.', ex2En: 'Her jewelry has gone missing.', ex2Hi: 'Uska gehna kho gaya hai.', conj: { praesens: 'kommt weg', praeteritum: 'kam weg', perfekt: 'ist weggekommen' } },
    { de: 'zittern', pos: 'verb', level: 'B2', register: 'both', en: 'to tremble, shiver', hi: 'कांपना', ex: 'Wer zittert, hat etwas zu verbergen.', exEn: 'Whoever trembles has something to hide.', exHi: 'Jo koi kaanpta hai, uske paas chhupaane ke liye kuch hota hai.', ex2: 'Sie hat vor Kälte gezittert.', ex2En: 'She\'s shivered from the cold.', ex2Hi: 'Woh thand se kaanpi hai.', conj: { praesens: 'zittert', praeteritum: 'zitterte', perfekt: 'hat gezittert' } },
    { de: 'Zuordnung', art: 'die', gender: 'f', plural: 'Zuordnungen', pos: 'noun', level: 'B2', register: 'written', en: 'assignment, classification', hi: 'वर्गीकरण', ex: 'Die Zuordnung der Beweise war schwierig.', exEn: 'The classification of the evidence was difficult.', exHi: 'Saboot ka vargeekaran mushkil tha.', ex2: 'Sie haben die Zuordnung überprüft.', ex2En: 'They\'ve checked the assignment.', ex2Hi: 'Unhone vargeekaran ki jaanch ki hai.' },
    { de: 'zurückgehen', pos: 'verb', level: 'B2', register: 'both', en: 'to go back, decline', hi: 'वापस जाना, कम होना', ex: 'Die Zahlen gingen zurück.', exEn: 'The numbers declined.', exHi: 'Aankde kam ho gaye.', ex2: 'Sie ist auf ihre Wurzeln zurückgegangen.', ex2En: 'She\'s gone back to her roots.', ex2Hi: 'Woh apni jadon ki taraf laut gayi hai.', conj: { praesens: 'geht zurück', praeteritum: 'ging zurück', perfekt: 'ist zurückgegangen' } },
    { de: 'Abenteuerlust', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'thirst for adventure', hi: 'साहसिक भावना', ex: 'Seine Abenteuerlust war grenzenlos.', exEn: 'His thirst for adventure was boundless.', exHi: 'Uski saahasik bhaavna asimit thi.', ex2: 'Sie haben ihre Abenteuerlust ausgelebt.', ex2En: 'They\'ve lived out their thirst for adventure.', ex2Hi: 'Unhone apni saahasik bhaavna jee li hai.' },
    { de: 'Angel', art: 'die', gender: 'f', plural: 'Angeln', pos: 'noun', level: 'B2', register: 'both', en: 'fishing rod', hi: 'मछली पकड़ने की छड़ी', ex: 'Er nahm seine Angel mit.', exEn: 'He took his fishing rod along.', exHi: 'Woh apni machhli pakadne ki chhadi le gaya.', ex2: 'Sie haben mit der Angel gefischt.', ex2En: 'They\'ve fished with the rod.', ex2Hi: 'Unhone chhadi se machhli pakdi hai.' },
    { de: 'Audioguide', art: 'der', gender: 'm', plural: 'Audioguides', pos: 'noun', level: 'B2', register: 'both', en: 'audio guide', hi: 'ऑडियो गाइड', ex: 'Der Audioguide erklärte jedes Bild.', exEn: 'The audio guide explained every picture.', exHi: 'Audio guide ne har tasveer samjhaayi.', ex2: 'Sie haben einen Audioguide gemietet.', ex2En: 'They\'ve rented an audio guide.', ex2Hi: 'Unhone ek audio guide kiraaye par liya hai.' },
    { de: 'aufdrücken', pos: 'verb', level: 'B2', register: 'both', en: 'to press onto', hi: 'दबाना', ex: 'Sie drückte den Stempel auf.', exEn: 'She pressed the stamp onto it.', exHi: 'Usne muhar dabaayi.', ex2: 'Er hat den Knopf aufgedrückt.', ex2En: 'He\'s pressed the button.', ex2Hi: 'Usne button dabaaya hai.', conj: { praesens: 'drückt auf', praeteritum: 'drückte auf', perfekt: 'hat aufgedrückt' } },
    { de: 'aufeinander', pos: 'adverb', level: 'B2', register: 'both', en: 'onto one another', hi: 'एक दूसरे पर', ex: 'Die Bücher lagen aufeinander.', exEn: 'The books lay on top of one another.', exHi: 'Kitaabein ek doosre par padi thin.', ex2: 'Sie haben aufeinander vertraut.', ex2En: 'They\'ve trusted one another.', ex2Hi: 'Unhone ek doosre par bharosa kiya hai.' },
    { de: 'aufschwingen', pos: 'verb', level: 'B2', register: 'written', en: 'to swing up, rise to', hi: 'ऊपर उठना', ex: 'Der Vogel schwang sich in die Luft auf.', exEn: 'The bird swung up into the air.', exHi: 'Chidiya hawa mein ooper uth gayi.', ex2: 'Sie hat sich zur Chefin aufgeschwungen.', ex2En: 'She\'s risen to become the boss.', ex2Hi: 'Woh boss ban gayi hai.', conj: { praesens: 'schwingt auf', praeteritum: 'schwang auf', perfekt: 'hat aufgeschwungen' } },
    { de: 'aufsehenerregend', pos: 'adjective', level: 'B2', register: 'written', en: 'sensational', hi: 'सनसनीखेज़', ex: 'Das war eine aufsehenerregende Entdeckung.', exEn: 'That was a sensational discovery.', exHi: 'Yeh ek sansanikhez khoj thi.', ex2: 'Sie haben aufsehenerregende Ergebnisse veröffentlicht.', ex2En: 'They\'ve published sensational results.', ex2Hi: 'Unhone sansanikhez parinaam prakaashit kiye hain.' },
    { de: 'Auftreten', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'demeanour, appearance', hi: 'व्यवहार, प्रस्तुति', ex: 'Ihr Auftreten war professionell.', exEn: 'Her demeanour was professional.', exHi: 'Uska vyavahaar peshevar tha.', ex2: 'Sie haben sein selbstbewusstes Auftreten bemerkt.', ex2En: 'They\'ve noticed his confident demeanour.', ex2Hi: 'Unhone uska aatmvishvaasi vyavahaar dekha hai.' },
    { de: 'ausgewogen', pos: 'adjective', level: 'B2', register: 'both', en: 'balanced', hi: 'संतुलित', ex: 'Die Ernährung war ausgewogen.', exEn: 'The diet was balanced.', exHi: 'Aahaar santulit tha.', ex2: 'Sie haben eine ausgewogene Entscheidung getroffen.', ex2En: 'They\'ve made a balanced decision.', ex2Hi: 'Unhone ek santulit faisla liya hai.' },
    { de: 'äußere', pos: 'adjective', level: 'B2', register: 'written', en: 'outer, external', hi: 'बाहरी', ex: 'Die äußere Erscheinung täuschte.', exEn: 'The outer appearance was deceptive.', exHi: 'Baahri roop dhokha de raha tha.', ex2: 'Sie haben äußere Einflüsse untersucht.', ex2En: 'They\'ve examined external influences.', ex2Hi: 'Unhone baahri prabhaavon ki jaanch ki hai.' },
    { de: 'aussterben', pos: 'verb', level: 'B2', register: 'both', en: 'to die out, go extinct', hi: 'विलुप्त होना', ex: 'Die Art starb aus.', exEn: 'The species went extinct.', exHi: 'Prajaati vilupt ho gayi.', ex2: 'Viele Tiere sind ausgestorben.', ex2En: 'Many animals have gone extinct.', ex2Hi: 'Kai jaanwar vilupt ho gaye hain.', conj: { praesens: 'stirbt aus', praeteritum: 'starb aus', perfekt: 'ist ausgestorben' } },
    { de: 'Bande', art: 'die', gender: 'f', plural: 'Banden', pos: 'noun', level: 'B2', register: 'both', en: 'gang', hi: 'गिरोह', ex: 'Die Bande hatte keine Vorwarnung.', exEn: 'The gang had no advance warning.', exHi: 'Gang ko koi poorv chetaavani nahi mili.', ex2: 'Sie haben die Bande verhaftet.', ex2En: 'They\'ve arrested the gang.', ex2Hi: 'Unhone gang ko giraftaar kiya hai.' },
    { de: 'Banktresor', art: 'der', gender: 'm', plural: 'Banktresore', pos: 'noun', level: 'B2', register: 'both', en: 'bank vault', hi: 'बैंक तिजोरी', ex: 'Der Banktresor war gut gesichert.', exEn: 'The bank vault was well secured.', exHi: 'Bank tijori achhi tarah surakshit thi.', ex2: 'Sie haben den Banktresor geöffnet.', ex2En: 'They\'ve opened the bank vault.', ex2Hi: 'Unhone bank tijori kholi hai.' },
    { de: 'baumbeschattet', pos: 'adjective', level: 'B2', register: 'written', en: 'tree-shaded', hi: 'पेड़ों की छांव वाला', ex: 'Der baumbeschattete Weg war kühl.', exEn: 'The tree-shaded path was cool.', exHi: 'Pedon ki chhaanv waala raasta thanda tha.', ex2: 'Sie haben im baumbeschatteten Garten gesessen.', ex2En: 'They\'ve sat in the tree-shaded garden.', ex2Hi: 'Woh pedon ki chhaanv waale bagiche mein baithe hain.' },
    { de: 'Bauwagen', art: 'der', gender: 'm', plural: 'Bauwagen', pos: 'noun', level: 'B2', register: 'both', en: 'construction trailer', hi: 'निर्माण ट्रेलर', ex: 'Der Bauwagen stand am Rand des Feldes.', exEn: 'The construction trailer stood at the edge of the field.', exHi: 'Nirmaan trailer khet ke kinare khada tha.', ex2: 'Sie haben im Bauwagen übernachtet.', ex2En: 'They\'ve stayed overnight in the construction trailer.', ex2Hi: 'Woh nirmaan trailer mein raat rukay hain.' },
    { de: 'Besucherzelle', art: 'die', gender: 'f', plural: 'Besucherzellen', pos: 'noun', level: 'B2', register: 'written', en: 'visitor cell', hi: 'आगंतुक कक्ष', ex: 'Die Besucherzelle war klein.', exEn: 'The visitor cell was small.', exHi: 'Aagantuk kaksh chhota tha.', ex2: 'Sie haben in der Besucherzelle gewartet.', ex2En: 'They\'ve waited in the visitor cell.', ex2Hi: 'Woh aagantuk kaksh mein intezaar kar rahe hain.' },
    { de: 'Bombe', art: 'die', gender: 'f', plural: 'Bomben', pos: 'noun', level: 'B2', register: 'both', en: 'bomb', hi: 'बम', ex: 'Die Bombe wurde rechtzeitig entschärft.', exEn: 'The bomb was defused in time.', exHi: 'Bam samay par nishkriya kar diya gaya.', ex2: 'Sie haben eine Bombe gefunden.', ex2En: 'They\'ve found a bomb.', ex2Hi: 'Unhein ek bam mila hai.' },
    { de: 'Detektiv/in', art: 'der/die', gender: 'm/f', plural: 'Detektive/innen', pos: 'noun', level: 'B2', register: 'both', en: 'detective', hi: 'जासूस', ex: 'Der Detektiv löste den Fall schnell.', exEn: 'The detective solved the case quickly.', exHi: 'Jaasoos ne mamla jaldi suljhaaya.', ex2: 'Sie ist eine erfahrene Detektivin.', ex2En: 'She\'s an experienced detective.', ex2Hi: 'Woh ek anubhavi jaasoos hai.' },
    { de: 'Dialekt', art: 'der', gender: 'm', plural: 'Dialekte', pos: 'noun', level: 'B2', register: 'both', en: 'dialect', hi: 'बोली', ex: 'Sie sprach einen bayerischen Dialekt.', exEn: 'She spoke a Bavarian dialect.', exHi: 'Woh Bavaria ki boli bolti thi.', ex2: 'Er hat den Dialekt seiner Heimatstadt beibehalten.', ex2En: 'He\'s kept the dialect of his hometown.', ex2Hi: 'Usne apne shahar ki boli banaaye rakhi hai.' },
    { de: 'durchsichtig', pos: 'adjective', level: 'B2', register: 'both', en: 'transparent, see-through', hi: 'पारदर्शी', ex: 'Das Fenster war durchsichtig.', exEn: 'The window was transparent.', exHi: 'Khidki paardarshi thi.', ex2: 'Sie haben eine durchsichtige Tasche gekauft.', ex2En: 'They\'ve bought a see-through bag.', ex2Hi: 'Unhone ek paardarshi bag khareeda hai.' },
    { de: 'Eidechse', art: 'die', gender: 'f', plural: 'Eidechsen', pos: 'noun', level: 'B2', register: 'both', en: 'lizard', hi: 'छिपकली', ex: 'Die Eidechse saß auf dem Stein.', exEn: 'The lizard sat on the stone.', exHi: 'Chhipkali patthar par baithi thi.', ex2: 'Sie haben eine Eidechse gefangen.', ex2En: 'They\'ve caught a lizard.', ex2Hi: 'Unhone ek chhipkali pakdi hai.' },
    { de: 'Einbruch', art: 'der', gender: 'm', plural: 'Einbrüche', pos: 'noun', level: 'B2', register: 'both', en: 'break-in, burglary', hi: 'सेंधमारी', ex: 'Wer den Einbruch verübt hat, dem entkommt nichts.', exEn: 'Nothing escapes whoever committed the break-in.', exHi: 'Jisne sendhmaari ki, uski koi bhi cheez nahi bachegi.', ex2: 'Die Polizei ermittelte den Einbruch.', ex2En: 'The police investigated the burglary.', ex2Hi: 'Police ne sendhmaari ki jaanch ki hai.' },
    { de: 'Eingangstür', art: 'die', gender: 'f', plural: 'Eingangstüren', pos: 'noun', level: 'B2', register: 'both', en: 'entrance door', hi: 'प्रवेश द्वार', ex: 'Die Eingangstür war verschlossen.', exEn: 'The entrance door was locked.', exHi: 'Pravesh dwaar band tha.', ex2: 'Sie haben die Eingangstür repariert.', ex2En: 'They\'ve repaired the entrance door.', ex2Hi: 'Unhone pravesh dwaar theek kiya hai.' },
    { de: 'Einzelfall', art: 'der', gender: 'm', plural: 'Einzelfälle', pos: 'noun', level: 'B2', register: 'written', en: 'individual case', hi: 'व्यक्तिगत मामला', ex: 'Das war ein Einzelfall.', exEn: 'That was an individual case.', exHi: 'Yeh ek vyaktigat mamla tha.', ex2: 'Sie haben den Einzelfall untersucht.', ex2En: 'They\'ve investigated the individual case.', ex2Hi: 'Unhone vyaktigat mamle ki jaanch ki hai.' },
    { de: 'expressionistisch', pos: 'adjective', level: 'B2', register: 'written', en: 'expressionist', hi: 'अभिव्यक्तिवादी', ex: 'Das Gemälde war expressionistisch gemalt.', exEn: 'The painting was painted in an expressionist style.', exHi: 'Chitrakaari abhivyaktivaadi shaili mein banaayi gayi thi.', ex2: 'Sie haben expressionistische Kunst studiert.', ex2En: 'They\'ve studied expressionist art.', ex2Hi: 'Unhone abhivyaktivaadi kala ka adhyayan kiya hai.' },
    { de: 'Fakt', art: 'der', gender: 'm', plural: 'Fakten', pos: 'noun', level: 'B2', register: 'both', en: 'fact', hi: 'तथ्य', ex: 'Das ist ein wichtiger Fakt.', exEn: 'That is an important fact.', exHi: 'Yeh ek mahatvapurn tathya hai.', ex2: 'Sie haben alle Fakten geprüft.', ex2En: 'They\'ve checked all the facts.', ex2Hi: 'Unhone saare tathya jaanche hain.' },
    { de: 'Fantasiewelt', art: 'die', gender: 'f', plural: 'Fantasiewelten', pos: 'noun', level: 'B2', register: 'both', en: 'fantasy world', hi: 'कल्पना जगत', ex: 'Das Kind lebte in seiner Fantasiewelt.', exEn: 'The child lived in its fantasy world.', exHi: 'Bachcha apni kalpana jagat mein rehta tha.', ex2: 'Sie haben eine Fantasiewelt erschaffen.', ex2En: 'They\'ve created a fantasy world.', ex2Hi: 'Unhone ek kalpana jagat banaaya hai.' },
    { de: 'fein', pos: 'adjective', level: 'B2', register: 'both', en: 'fine, delicate', hi: 'सूक्ष्म, नाज़ुक', ex: 'Der Stoff war sehr fein.', exEn: 'The fabric was very fine.', exHi: 'Kapda bahut naazuk tha.', ex2: 'Sie haben feine Unterschiede bemerkt.', ex2En: 'They\'ve noticed fine differences.', ex2Hi: 'Unhone sookshm antar dekhe hain.' },
    { de: 'filmreif', pos: 'adjective', level: 'B2', register: 'both', en: 'film-worthy, cinematic', hi: 'फिल्मी', ex: 'Das klingt filmreif.', exEn: 'That sounds cinematic.', exHi: 'Yeh filmi lagta hai.', ex2: 'Sie haben eine filmreife Geschichte erlebt.', ex2En: 'They\'ve experienced a cinematic story.', ex2Hi: 'Unhone ek filmi kahaani jee li hai.' },
    { de: 'fraglich', pos: 'adjective', level: 'B2', register: 'written', en: 'questionable, doubtful', hi: 'संदेहास्पद', ex: 'Der Erfolg war fraglich.', exEn: 'The success was doubtful.', exHi: 'Safalta sandehaaspad thi.', ex2: 'Sie haben fragliche Ergebnisse erhalten.', ex2En: 'They\'ve received questionable results.', ex2Hi: 'Unhein sandehaaspad parinaam mile hain.' },
    { de: 'füllig', pos: 'adjective', level: 'B2', register: 'both', en: 'plump, full-figured', hi: 'भरा हुआ', ex: 'Der Mann war füllig.', exEn: 'The man was full-figured.', exHi: 'Aadmi bhara hua tha.', ex2: 'Sie haben eine füllige Figur beschrieben.', ex2En: 'They\'ve described a full-figured build.', ex2Hi: 'Unhone ek bhare hue kad ka varnan kiya hai.' },
    { de: 'fürsorglich', pos: 'adjective', level: 'B2', register: 'both', en: 'caring, solicitous', hi: 'देखभाल करने वाला', ex: 'Sie war eine fürsorgliche Mutter.', exEn: 'She was a caring mother.', exHi: 'Woh ek dekhbhaal karne wali maa thi.', ex2: 'Er hat sich fürsorglich um sie gekümmert.', ex2En: 'He\'s taken caring care of her.', ex2Hi: 'Usne uski dekhbhaal se khyaal rakha hai.' },
    { de: 'Gänsehaut', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'goosebumps', hi: 'रोंगटे खड़े होना', ex: 'Die Geschichte gab ihr Gänsehaut.', exEn: 'The story gave her goosebumps.', exHi: 'Kahaani ne uske rongte khade kar diye.', ex2: 'Sie haben Gänsehaut bekommen.', ex2En: 'They\'ve gotten goosebumps.', ex2Hi: 'Unke rongte khade ho gaye hain.' },
    { de: 'Geist', art: 'der', gender: 'm', plural: 'Geister', pos: 'noun', level: 'B2', register: 'both', en: 'mind, spirit, ghost', hi: 'मन, आत्मा, भूत', ex: 'Ihr Geist war wach und klar.', exEn: 'Her mind was alert and clear.', exHi: 'Uska man saavdhaan aur spasht tha.', ex2: 'Sie haben an einen Geist geglaubt.', ex2En: 'They\'ve believed in a ghost.', ex2Hi: 'Unhone bhoot mein vishvaas kiya hai.' },
    { de: 'Gemälde', art: 'das', gender: 'n', plural: 'Gemälde', pos: 'noun', level: 'B2', register: 'both', en: 'painting', hi: 'चित्रकारी', ex: 'Wer ein Gemälde stiehlt, der braucht einen Käufer.', exEn: 'Whoever steals a painting needs a buyer.', exHi: 'Jo koi chitrakaari churaata hai, use khareedaar ki zaroorat hoti hai.', ex2: 'Das Gemälde hing im Museum.', ex2En: 'The painting hung in the museum.', ex2Hi: 'Chitrakaari sangraahaalay mein taangi thi.' },
    { de: 'Gemälderaub', art: 'der', gender: 'm', plural: 'Gemälderaube', pos: 'noun', level: 'B2', register: 'written', en: 'painting theft', hi: 'चित्रकारी की चोरी', ex: 'Der Gemälderaub schockierte die Stadt.', exEn: 'The painting theft shocked the city.', exHi: 'Chitrakaari ki chori ne shahar ko chaunkaaya.', ex2: 'Sie haben den Gemälderaub aufgeklärt.', ex2En: 'They\'ve solved the painting theft.', ex2Hi: 'Unhone chitrakaari ki chori suljhaayi hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was sind Relativsätze mit wer... der...?',
      body: [ '"wer" opens a clause about anyone at all — there is no specific antecedent noun.' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Wer wagt, gewinnt.</span> — Whoever dares, wins.']
        ]
      },
      hinglish: '"wer" ka matlab hai "jo koi bhi". Yahan koi khaas noun nahi hota jiski baat ho \u2014 baat kisi bhi aise insaan ki hoti hai jo woh kaam kare. Isliye yeh proverbs mein bahut aata hai.'
    },
    {
      title: 'Struktur: wer + Nebensatz, der/die/das + Hauptsatz',
      body: [ 'The "wer" clause sends the verb to the end, like any Nebensatz. Then der/die/das resumes the main clause.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Wer zu spät kommt, den bestraft das Leben.</span>'],
          ['<span class="de">Wer ein Gemälde stiehlt, der braucht einen Käufer.</span>']
        ]
      },
      hinglish: '"wer" wala clause bhi Nebensatz hai, isliye uska verb end mein jaata hai. Uske baad comma, aur phir <b>der/die/das</b> se main clause shuru hota hai \u2014 yeh pronoun baat ko aage uthata hai.'
    },
    {
      title: 'Der Fall kann sich ändern (The Case Can Change)',
      body: [ 'The resuming pronoun (der/die/das/den/dem/dessen/deren) takes whatever case the MAIN clause verb requires — this can differ from "wer"\'s own case.' ],
      table: {
        head: ['wer-clause case', 'Resuming pronoun', 'Why'],
        rows: [
          ['Wer (Nom.) zu spät kommt,', 'den (Akk.)', '"bestrafen" needs an Akkusativ object'],
          ['Wer (Nom.) den Einbruch verübt hat,', 'dem (Dat.)', '"entkommen" needs a Dativ object'],
          ['Wer (Nom.) verdächtigt wird,', 'dessen (Gen.)', 'possessive "Alibi" needs a Genitiv']
        ]
      },
      hinglish: 'Yahan sabse important baat hai. Resuming pronoun apna case <b>main clause ke verb</b> se leta hai, "wer" se nahi. Isliye "wer" Nominativ mein hote hue bhi aage <b>den</b> ya <b>dem</b> aa sakta hai \u2014 yeh main clause ka verb tay karta hai.'
    },
    {
      title: 'Wenn der Nominativ passt (When Nominativ Fits)',
      body: [ 'If the main clause also needs Nominativ, the resuming pronoun can sometimes be omitted or matches directly.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Wer wagt, gewinnt.</span> (no separate pronoun needed)'],
          ['<span class="de">Wer ein Gemälde stiehlt, der braucht einen Käufer.</span> (der = Nom., matches)']
        ]
      },
      hinglish: 'Agar main clause ko bhi Nominativ hi chahiye, to pronoun aur "wer" ka case ek jaisa ho jaata hai. Aise case mein pronoun chhoda bhi jaa sakta hai \u2014 <span class="de">Wer wagt, gewinnt</span> \u2014 ya rakha bhi jaa sakta hai.'
    },
    {
      title: 'Register',
      body: [ 'This structure is extremely common in proverbs, general truths, and formal/written German.' ],
      note: 'Think of famous German proverbs — most use exactly this wer...der... pattern.',
      hinglish: 'Yeh structure proverbs aur general baaton mein bahut aata hai, aur formal writing mein bhi. German ke mashhoor proverbs zyada-tar isi pattern par bane hain.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These come from giving the resuming pronoun the wrong case, dropping the comma, or putting the pronoun in the wrong slot in the main clause.' ],
      mistakes: [
        { wrong: 'Wer zu spät kommt, der bestraft das Leben.', right: 'Wer zu spät kommt, den bestraft das Leben.', why: 'Here <i>das Leben</i> is the subject and it does the punishing \u2014 the person arriving late is the OBJECT. Since bestrafen takes the Akkusativ, the resuming pronoun is <b>den</b>, not der.' },
        { wrong: 'Wer wagt gewinnt.', right: 'Wer wagt, gewinnt.', why: 'A comma always separates the wer-clause from the main clause \u2014 even in a short proverb like this one.' },
        { wrong: 'Wer ein Gemälde stiehlt, braucht der einen Käufer.', right: 'Wer ein Gemälde stiehlt, der braucht einen Käufer.', why: 'The resuming pronoun opens the main clause, so it comes straight after the comma \u2014 before the verb, not after it.' },
        { wrong: 'Wer zittert hat etwas zu verbergen.', right: 'Wer zittert, hat etwas zu verbergen.', why: 'The only thing missing is the comma. The verb is already at the end of the wer-clause, and because the main clause also needs a Nominativ subject, no resuming <i>der</i> is required \u2014 though <span class="de">\u2026, der hat etwas zu verbergen</span> is equally correct.' }
      ],
      hinglish: 'Yeh galtiyan teen wajah se hoti hain \u2014 resuming pronoun ko galat case dena, comma chhod dena, ya us pronoun ko main clause mein galat jagah rakhna.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Recognizing this structure in proverbs and formal writing is a hallmark of sophisticated B2/C1 reading comprehension.' ],
      note: 'Memory trick: wer = whoever (no antecedent). der/die/das = picks up the story, in whatever case the main clause needs.',
      hinglish: 'Is structure ko pehchaan lo to proverbs aur formal texts padhna kaafi aasaan ho jaata hai \u2014 aur likhne mein use karo to German mature lagta hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Kriminalbericht: Der Gemälderaub im Schlossmuseum',
    titleEn: 'Crime report: the painting theft at the palace museum',
    tokens: [
      { w: 'Wer', role: 'r-connector', en: 'whoever', hi: 'जो कोई', type: 'Relativpronomen (indefinit, freier Relativsatz)', why: 'wer … der: an indefinite relative pronoun meaning "whoever", followed by a der-resumption in the main clause (this chapter).' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Nacht', role: 'plain', en: 'night', hi: 'रात', type: 'Noun · fem.' },
      { w: 'am', role: 'plain', en: 'on the', hi: 'को', type: 'Contraction · an dem' },
      { w: 'Museum', role: 'plain', en: 'museum (Satzende)', hi: 'संग्रहालय (Satzende)', type: 'Noun · neut.' },
      { w: 'vorbeikam', role: 'plain', en: 'passed by (Satzende)', hi: 'गुज़रा (Satzende)', type: 'Verb · vorbeikommen (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'der', role: 'r-connector', en: 'that person (Resumptivpronomen)', hi: 'वह व्यक्ति (Resumptivpronomen)', type: 'Demonstrativpronomen · der (Wiederaufnahme)', why: 'der resumes "wer" in the main clause — the classic wer … der pattern (this chapter).' },
      { w: 'bemerkte', role: 'plain', en: 'noticed (linke Klammer)', hi: 'देखा (बायाँ कोष्ठक)', type: 'Verb · bemerken (Präteritum, Linke Klammer)' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'zerbrochene', role: 'plain', en: 'broken', hi: 'टूटी हुई', type: 'Adjective' },
      { w: 'Eingangstür', role: 'plain', en: 'entrance door (Satzende)', hi: 'प्रवेश द्वार (Satzende)', type: 'Noun · fem.', why: 'die Eingangstür (this chapter).' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'wertvolles', role: 'plain', en: 'valuable', hi: 'मूल्यवान', type: 'Adjective' },
      { w: 'Gemälde', role: 'plain', en: 'painting', hi: 'चित्र', type: 'Noun · neut.' },
      { w: 'fehlte', role: 'plain', en: 'was missing (Satzende)', hi: 'ग़ायब था (Satzende)', type: 'Verb · fehlen (Präteritum)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Gemälderaub', role: 'plain', en: 'painting theft', hi: 'चित्र चोरी', type: 'Noun · masc.', why: 'der Gemälderaub (this chapter).' },
      { w: 'erinnert', role: 'plain', en: 'reminds', hi: 'याद दिलाता है', type: 'Verb · erinnern' },
      { w: 'Ermittler', role: 'plain', en: 'investigators', hi: 'जाँचकर्ताओं', type: 'Noun · plural' },
      { w: 'an', role: 'plain', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix · erinnern an' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'bekannte', role: 'plain', en: 'well-known', hi: 'प्रसिद्ध', type: 'Adjective' },
      { w: 'Bande', role: 'plain', en: 'gang (Satzende)', hi: 'गिरोह (Satzende)', type: 'Noun · fem.', why: 'die Bande (this chapter).' },
      { w: '.', plain: true },
      { w: 'Wer', role: 'r-connector', en: 'whoever', hi: 'जो कोई', type: 'Relativpronomen (indefinit, freier Relativsatz)' },
      { w: 'Hinweise', role: 'plain', en: 'tips', hi: 'सुराग़', type: 'Noun · plural' },
      { w: 'liefern', role: 'plain', en: 'provide (Satzende)', hi: 'देना (Satzende)', type: 'Verb · liefern (Nebensatz, Satzende)' },
      { w: 'kann', role: 'plain', en: 'can (Satzende)', hi: 'सकता है (Satzende)', type: 'Verb · Modalverb (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'dem', role: 'r-connector', en: 'to that person (Resumptivpronomen, Dativ)', hi: 'उसे (Resumptivpronomen)', type: 'Demonstrativpronomen · dem (Wiederaufnahme, Dativ)', why: 'When the main clause needs a Dativ, the resumption pronoun changes to dem (this chapter).' },
      { w: 'winkt', role: 'plain', en: 'awaits (linke Klammer)', hi: 'मिलता है (बायाँ कोष्ठक)', type: 'Verb · winken (Linke Klammer)' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Nom.' },
      { w: 'Belohnung', role: 'plain', en: 'reward (Satzende)', hi: 'इनाम (Satzende)', type: 'Noun · fem.' },
      { w: 'von', role: 'plain', en: 'of', hi: 'का', type: 'Preposition · Dat.' },
      { w: 'zehntausend', role: 'plain', en: 'ten thousand', hi: 'दस हज़ार', type: 'Number' },
      { w: 'Euro', role: 'plain', en: 'euros (Satzende)', hi: 'यूरो (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Pronoun · indefinite' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Dieb', role: 'plain', en: 'thief', hi: 'चोर', type: 'Noun · masc.' },
      { w: 'kennt', role: 'plain', en: 'knows (Satzende)', hi: 'जानता है (Satzende)', type: 'Verb · kennen (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'sollte', role: 'plain', en: 'should', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'umgehend', role: 'plain', en: 'immediately', hi: 'तुरंत', type: 'Adverb' },
      { w: 'bei', role: 'plain', en: 'at', hi: 'पर', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Polizei', role: 'plain', en: 'police', hi: 'पुलिस', type: 'Noun · fem.' },
      { w: 'melden', role: 'plain', en: 'report (Satzende)', hi: 'रिपोर्ट करना (Satzende)', type: 'Verb · Infinitiv' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-connector', en: 'which', hi: 'जो', type: 'Relativpronomen · Nom.' },
      { w: 'Hinweise', role: 'plain', en: 'tips', hi: 'सुराग़', type: 'Noun · plural' },
      { w: 'auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'anonym', role: 'plain', en: 'anonymously (Satzende)', hi: 'गुमनाम रूप से (Satzende)', type: 'Adjective' },
      { w: 'entgegennimmt', role: 'plain', en: 'accepts (Satzende)', hi: 'स्वीकार करती है (Satzende)', type: 'Verb · entgegennehmen (trennbar, Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Museumsdirektor', role: 'plain', en: 'museum director', hi: 'संग्रहालय निदेशक', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'der', role: 'r-connector', en: 'who', hi: 'जो', type: 'Relativpronomen · Nom.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Sammlung', role: 'plain', en: 'collection (Satzende)', hi: 'संग्रह (Satzende)', type: 'Noun · fem.' },
      { w: 'seit', role: 'plain', en: 'for', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'zwanzig', role: 'plain', en: 'twenty', hi: 'बीस', type: 'Number' },
      { w: 'Jahren', role: 'plain', en: 'years (Satzende)', hi: 'सालों (Satzende)', type: 'Noun · plural' },
      { w: 'leitet', role: 'plain', en: 'leads (Satzende)', hi: 'चलाता है (Satzende)', type: 'Verb · leiten (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'hofft', role: 'plain', en: 'hopes', hi: 'आशा करता है', type: 'Verb · hoffen' },
      { w: 'auf', role: 'plain', en: 'for', hi: 'की', type: 'Preposition · Akk.' },
      { w: 'eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article' },
      { w: 'rasche', role: 'plain', en: 'quick', hi: 'शीघ्र' , type: 'Adjective' },
      { w: 'Aufklärung', role: 'plain', en: 'resolution (Satzende)', hi: 'समाधान (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true }
    ],
    translation: 'Whoever passed by the museum that night noticed a broken entrance door. A valuable painting was missing. The painting theft reminds investigators of a well-known gang. Whoever can provide tips can expect a reward of ten thousand euros. Whoever knows the thief should report to the police immediately, who also accept tips anonymously. The museum director, who has led the collection for twenty years, hopes for a quick resolution.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_039_L001', speaker: 'Katrin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, wer das Bild gestohlen hat, kennt die Galerie ziemlich genau.', en: 'Timo, whoever stole the painting knows the gallery quite well.' },
      { id: 'B2_039_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt, und wer dort arbeitet, der hat auch Zugang zum Tresor.', en: 'True, and whoever works there also has access to the vault.' },
      { id: 'B2_039_L003', speaker: 'Katrin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Wer also beides kann — die Galerie kennen und den Tresor öffnen — der steht ganz oben auf der Liste.', en: 'So whoever can do both — know the gallery and open the vault — is right at the top of the list.' },
      { id: 'B2_039_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wer zuletzt gesehen wurde, der sollte als Erster befragt werden.', en: 'Whoever was last seen should be questioned first.' }
    ],
    transcript: 'Timo, wer das Bild gestohlen hat, kennt die Galerie ziemlich genau. Stimmt, und wer dort arbeitet, der hat auch Zugang zum Tresor. Wer also beides kann — die Galerie kennen und den Tresor öffnen — der steht ganz oben auf der Liste. Wer zuletzt gesehen wurde, der sollte als Erster befragt werden.',
    translation: 'Timo, whoever stole the painting knows the gallery quite well. True, and whoever works there also has access to the vault. So whoever can do both — know the gallery and open the vault — is right at the top of the list. Whoever was last seen should be questioned first.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'wer' },
      { w: 'das' },
      { w: 'Bild' },
      { w: 'gestohlen' },
      { w: 'hat' },
      { w: ',', plain: true },
      { w: 'kennt' },
      { w: 'die' },
      { w: 'Galerie' },
      { w: 'ziemlich' },
      { w: 'genau' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'wer' },
      { w: 'dort' },
      { w: 'arbeitet' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'hat' },
      { w: 'auch' },
      { w: 'Zugang' },
      { w: 'zum' },
      { w: 'Tresor' },
      { w: '.', plain: true },
      { w: 'Wer' },
      { w: 'also' },
      { w: 'beides' },
      { w: 'kann' },
      { w: '—', plain: true },
      { w: 'die' },
      { w: 'Galerie' },
      { w: 'kennen' },
      { w: 'und' },
      { w: 'den' },
      { w: 'Tresor' },
      { w: 'öffnen' },
      { w: '—', plain: true },
      { w: 'der' },
      { w: 'steht' },
      { w: 'ganz' },
      { w: 'oben' },
      { w: 'auf' },
      { w: 'der' },
      { w: 'Liste' },
      { w: '.', plain: true },
      { w: 'Wer' },
      { w: 'zuletzt' },
      { w: 'gesehen' },
      { w: 'wurde' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'sollte' },
      { w: 'als' },
      { w: 'Erster' },
      { w: 'befragt' },
      { w: 'werden' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was kennt der Täter gut?', qEn: 'What does the thief know well?', options: ['die Polizei', 'die Galerie', 'das Museum', 'den Künstler'], optionsEn: ['the police', 'the gallery', 'the museum', 'the artist'], answer: 1,
        explain: '"Wer das Bild gestohlen hat, kennt die Galerie ziemlich genau."' },
      { q: 'Wer steht oben auf der Verdächtigenliste?', qEn: 'Who is at the top of the suspect list?', options: ['wer am ältesten ist', 'wer beides kann: Galerie kennen und Tresor öffnen', 'wer am lautesten ist', 'niemand'], optionsEn: ['who is oldest', 'whoever can do both: know the gallery and open the safe', 'who is loudest', 'nobody'], answer: 1,
        explain: '"Wer also beides kann … der steht ganz oben auf der Liste."' }
    ]
  },

  speaking: [
    { task: "Ein Kollege sagt, der Täter kenne die Galerie. Stimme zu.", taskEn: "A colleague says the thief knows the gallery. Agree.", de: "Wer das Bild gestohlen hat, kennt die Galerie ziemlich genau.", en: "Whoever stole the picture knows the gallery pretty well." },
    { task: "Ergänze seinen Gedanken über den Tresor.", taskEn: "Add to his thought about the safe.", de: "Wer dort arbeitet, der hat auch Zugang zum Tresor.", en: "Whoever works there also has access to the safe." },
    { task: "Zieh den Schluss aus beiden Punkten.", taskEn: "Draw the conclusion from both points.", de: "Wer also beides kann, der ist verdächtig.", en: "So whoever can do both is a suspect." },
    { task: "Ein Freund traut sich nicht, sich zu bewerben. Motiviere ihn.", taskEn: "A friend doesn't dare apply. Motivate him.", de: "Wer nicht wagt, der nicht gewinnt.", en: "Nothing ventured, nothing gained." },
    { task: "Rollenspiel: Ihr diskutiert den Fall im Podcast.", taskEn: "Role-play: you discuss the case on a podcast.", de: "Wer lügt, der verrät sich später. — Und wer schweigt, dem glaubt am Ende niemand.", en: "Whoever lies gives themselves away later. — And whoever stays silent is believed by nobody in the end." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Opinion text (6-8 sentences): Write general truths about success, honesty, or hard work using wer...der... constructions with varying cases.\n\nTASK 2 — Short detective story (6-8 sentences): Write about a case using wer...der... to state general truths about suspects and evidence.',
    starters: ['Wer …, der …', 'Wer …, den …'],
    placeholder: 'Wer wagt, gewinnt. Wer zu spät kommt, den bestraft das Leben …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Complete: "Wer zu spät kommt, ___ bestraft das Leben."',
      options: ['den', 'der', 'dem'],
      answer: 0,
      explain: '"bestrafen" requires an Akkusativ object, so "den" is correct, even though "wer" itself is Nominativ.'
    },
    gap: {
      sentence: ['Wer ein Gemälde stiehlt, ', ' braucht einen Käufer.'],
      gaps: [ { answer: 'der', accepts: ['der'] } ],
      explain: '"brauchen" requires a Nominativ subject, so "der" matches here — same case as "wer".'
    },
    match: {
      q: 'Match each main-clause verb requirement to the correct resuming pronoun.',
      pairs: [
        { noun: 'bestrafen (Akk. object)', art: 'den' },
        { noun: 'entkommen (Dat. object)', art: 'dem' },
        { noun: 'gewinnen (Nom. subject)', art: 'der' },
        { noun: 'Alibi (Gen. possessive)', art: 'dessen' }
      ]
    },
    builder: {
      target: 'Build: "Whoever dares, wins."',
      bank: ['Wer', 'wagt', ',', 'gewinnt', '.'],
      answer: ['Wer', 'wagt', ',', 'gewinnt', '.'],
      roles: { 'Wer': 'r-wer-der', 'wagt': 'r-wer-der', 'gewinnt': 'r-wer-der' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Wer zu spät kommt, der bestraft das Leben.',
      right: 'Wer zu spät kommt, den bestraft das Leben.',
      explain: '"bestrafen" requires an Akkusativ object — the resuming pronoun must be "den", not "der".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does "wer" refer to in this construction?', options: ['Anyone at all — no specific antecedent', 'One specific person', 'A group of people'], answer: 0,
      explain: '"wer" opens a clause about anyone, unlike normal relative clauses which have a specific antecedent noun.' },
    { q: 'What determines the case of the resuming pronoun (der/den/dem/dessen)?', options: ['The main clause verb\'s requirement', 'The case of "wer"', 'Random choice'], answer: 0,
      explain: 'The resuming pronoun takes whatever case the MAIN clause verb needs, independent of "wer"\'s own case.' },
    { q: 'Where does the verb go in the "wer" clause?', options: ['At the end, like any Nebensatz', 'Right after "wer"', 'It disappears'], answer: 0,
      explain: 'The "wer" clause is a subordinate clause and sends its verb to the end.' },
    { q: 'Is it ever correct to omit the resuming pronoun?', options: ['Yes, when the main clause also needs Nominativ', 'Never', 'Only in spoken German'], answer: 0,
      explain: 'When the main clause needs Nominativ, the resuming pronoun can sometimes be integrated naturally (e.g. "Wer wagt, gewinnt").' },
    { q: 'Where is this structure most commonly found?', options: ['Proverbs and general truths', 'Only in casual texting', 'Only in Konjunktiv I'], answer: 0,
      explain: 'wer...der... is the classic structure behind German proverbs and general statements.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-wer-der', html: '"wer" opens a clause about anyone at all — there is no specific antecedent noun.' },
    { c: 'r-wer-der', html: 'The resuming pronoun (der/die/das/den/dem/dessen/deren) takes whatever case the MAIN clause verb requires, which can differ from "wer"\'s own case.' },
    { c: 'r-wer-der', html: 'This structure is the grammar behind classic German proverbs — "Wer wagt, gewinnt" and countless others.' }
  ],
  revisionTips: [
    'Collect five German proverbs using wer...der... and identify the case of each resuming pronoun.',
    'Practise building your own general-truth sentences, checking the main clause verb\'s case requirement each time.',
    'Compare this structure with the definite relative clauses from earlier chapters — the key difference is the missing antecedent.'
  ]
};

window.CHAPTER = CHAPTER;
