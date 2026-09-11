/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 12
   "Modalverben präzise verwenden" — objective vs subjective
   modality, certainty scale (muss/dürfte/könnte/mag), academic
   hedging, politeness/softening, journalistic reported claims
   (soll/will). NOT basic conjugation or elementary meanings.
   Dialogue: Kirsten and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-12-modalverben-praezise-verwenden',
  phase: 'C1 · Modalität & Nuance',
  number: 12,
  title: 'Modalverben präzise verwenden',
  titleEn: 'Using modal verbs precisely',
  description: 'A1 asks "what does the modal verb mean?" C1 asks "what attitude does the speaker express through it?" Certainty, doubt, politeness, criticism — same verb, different stance.',
  xp: 430,
  time: 100,
  difficulty: 'Advanced',
  nextChapter: { number: 13, title: 'Vermutungen mit Modalverben ausdrücken', titleEn: 'Expressing assumptions with modal verbs' , href: 'chapter-c1-13-vermutungen-mit-modalverben-ausdruecken.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'The same modal verb can mean <em>certainty</em>, <em>doubt</em>, or <em>politeness</em>.',
    intro: 'The printer\'s broken, and Kirsten and Timo debate why — must be broken, could be the paper — weighing exactly how much certainty, doubt, or caution each modal verb carries.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See muss, dürfte, könnte, mag, soll, and will used to express objective and subjective modality'
    ],
    scene: 'Vorbereitung einer akademischen Präsentation',
    femaleSpeakers: ['Kirsten'],
    dialogue: [
      { speaker: 'Kirsten', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Drucker', role: 'r-subject', en: 'printer', hi: 'प्रिंटर', pron: 'DRU-ker', type: 'Noun · masc.' },
        { w: 'muss', role: 'r-modalverb', en: 'must', hi: 'ज़रूर', pron: 'mus', type: 'Modal · müssen (Vermutung mit hoher Gewissheit)', why: 'müssen for a strong logical assumption expresses high certainty, not obligation (this chapter).', ex: 'Der Drucker muss kaputt sein.', exEn: 'The printer must be broken (I am nearly certain).' },
        { w: 'kaputt', role: 'r-akkusativ', en: 'broken', hi: 'ख़राब', pron: 'ka-PUT', type: 'Adjective' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होना', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The printer must be broken.', hi: 'Printer zaroor kharaab hoga.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'könnte', role: 'r-modalverb', en: 'could', hi: 'हो सकता है', pron: 'KÖN-tuh', type: 'Modal · können (Konjunktiv II, Vermutung mit geringerer Gewissheit)', why: 'könnte expresses a weaker assumption, lower certainty than müsste (this chapter).', ex: 'Es könnte auch am Papier liegen.', exEn: 'It could also be due to the paper.' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'am', role: 'r-preposition', en: 'at the', hi: 'में', pron: 'am', type: 'Preposition + place' },
        { w: 'Papier', role: 'r-dativ', en: 'paper (dat.)', hi: 'कागज़ में', pron: 'pa-PEER', type: 'Noun · neut. dat.' },
        { w: 'liegen', role: 'r-verb', en: 'lie', hi: 'होना', pron: 'LEE-gen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'It could also be due to the paper.', hi: 'Yeh kaagaz ki wajah se bhi ho sakta hai.' },
      { speaker: 'Kirsten', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, Ratschlag)' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'से', pron: 'mit', type: 'Preposition' },
        { w: 'etwas', role: 'r-dativ', en: 'some', hi: 'थोड़ी', pron: 'ET-vas', type: 'Determiner' },
        { w: 'Zurückhaltung', role: 'r-dativ', en: 'restraint (dat.)', hi: 'सावधानी से', pron: 'tsu-RÜK-hal-tung', type: 'Noun · fem. dat.', why: 'die Zurückhaltung (this chapter).', ex: 'mit Zurückhaltung urteilen' },
        { w: 'urteilen', role: 'r-verb', en: 'judge', hi: 'आंकना', pron: 'OOR-ty-len', type: 'Verb · infinitive (Satzende)' },
        { w: ',', plain: true },
        { w: 'denn', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'dayn', type: 'Conjunction' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'dürfen', role: 'r-modalverb', en: 'must not', hi: 'नहीं करना चाहिए', pron: 'DÜR-fen', type: 'Modal · dürfen (wir, Verbot)', why: 'dürfen + nicht here expresses that generalizing is not permitted (this chapter).', ex: 'Wir dürfen nicht übergeneralisieren.', exEn: 'We must not overgeneralize.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'übergeneralisieren', role: 'r-verb', en: 'overgeneralize', hi: 'अति सामान्यीकरण', pron: 'ü-ber-ge-ne-ra-li-ZEE-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'We should judge with some restraint, because we must not overgeneralize.', hi: 'Humein thodi savdhaani se aankna chahiye, kyunki humein ati saamaanyikaran nahi karna chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Vermutung', role: 'r-subject', en: 'assumption', hi: 'अनुमान', pron: 'fer-MOO-tung', type: 'Noun · fem.', why: 'die Vermutung (recycled C1).', ex: 'meine Vermutung' },
        { w: 'wäre', role: 'r-verb', en: 'would be', hi: 'होगा', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Verbindung', role: 'r-subject', en: 'connection', hi: 'कनेक्शन', pron: 'fer-BIN-dung', type: 'Noun · fem.' },
        { w: 'unterbrochen', role: 'r-akkusativ', en: 'interrupted', hi: 'टूटा हुआ', pron: 'un-ter-BRO-khen', type: 'Partizip II' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'My assumption would be that the connection is interrupted.', hi: 'Mera anumaan hoga ki connection tuta hua hai.' },
      { speaker: 'Kirsten', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'kann', role: 'r-modalverb', en: 'can', hi: 'हो सकता है', pron: 'kan', type: 'Modal · können (objektive Möglichkeit)' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: '', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true },
        { w: 'Mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'mehr', role: 'r-dativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner' },
        { w: 'Gewissheit', role: 'r-dativ', en: 'certainty (dat.)', hi: 'निश्चितता के साथ', pron: 'ge-VIS-hite', type: 'Noun · fem. dat.', why: 'die Gewissheit (this chapter).', ex: 'mit mehr Gewissheit sprechen' },
        { w: 'können', role: 'r-modalverb', en: 'can', hi: 'सकेंगे', pron: 'KÖ-nen', type: 'Modal · können (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'erst', role: 'r-adverb', en: 'only', hi: 'केवल', pron: 'airst', type: 'Adverb' },
        { w: 'nach', role: 'r-preposition', en: 'after', hi: 'के बाद', pron: 'nahkh', type: 'Preposition' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Reparatur', role: 'r-dativ', en: 'repair (dat.)', hi: 'मरम्मत के', pron: 're-pa-ra-TOOR', type: 'Noun · fem. dat.' },
        { w: 'sprechen', role: 'r-verb', en: 'speak', hi: 'बात करना', pron: 'SHPRE-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'That can be. With more certainty we can only speak after the repair.', hi: 'Ho sakta hai. Zyada nishchintata ke saath hum marammat ke baad hi baat kar sakenge.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Einverstanden', role: 'r-subject', en: 'agreed', hi: 'सहमत', pron: 'INE-fer-shtan-den', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'rufe', role: 'r-verb', en: 'call', hi: 'फ़ोन करता हूँ', pron: 'ROO-fuh', type: 'Verb · anrufen (ich)', lexicalUnit: 'anrufen' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Techniker', role: 'r-akkusativ', en: 'technician', hi: 'तकनीशियन', pron: 'TEKH-ni-ker', type: 'Noun · masc.' },
        { w: 'an', role: 'r-verb', en: '(prefix of anrufen)', hi: '', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anrufen' },
        { w: '.', plain: true }
      ], en: 'Agreed. I will call the technician.', hi: 'Sahmat. Main technician ko call karta hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A1 asks: <b>"What does the modal verb mean?"</b> C1 asks: <b>"What attitude does the speaker express through the modal verb?"</b> The same modal verb can express <span class="de r-subjektiv">certainty</span>, <span class="de r-subjektiv">doubt</span>, or <span class="de r-softening">politeness</span> depending on context.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is MODALVERBEN PRÄZISE VERWENDEN at C1 level — semantic nuances, pragmatics, and register of modal verbs, NOT basic conjugation or elementary meanings (already mastered). Covered: objective vs subjective modality (objective = obligation/permission/necessity/ability, e.g. "Er muss heute arbeiten"; subjective = assumption/probability/interpretation, e.g. "Er muss krank sein"); certainty scale for probability (muss ~100% > dürfte ~90% > könnte ~50% > mag weak concession > vielleicht); modal verbs in academic hedging (formulating hypotheses, evaluating evidence cautiously); modal verbs in journalism for reported vs confirmed information (soll = "is said to", will = "claims to" — NOT future tense); politeness/softening scale (Sie müssen → Sie sollten → Sie könnten → Es wäre sinnvoll, ...) for diplomatic recommendations and criticism. ' +
    'Do NOT expect or require basic conjugation, present tense forms, or basic Perfekt with modal verbs — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: confusing "sollen"/"müssen" (recommendation vs obligation); using "können" where "dürfen" is meant; misreading subjective "muss" as obligation instead of certainty; treating "dürfte" as future tense; interpreting reported "soll"/"will" as literal future/volition instead of reported claims; direct English "must" translation errors. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag modal verb choices that mismatch the intended objective/subjective meaning based on context.\n' +
    '- Check that certainty-scale modals (muss/dürfte/könnte/mag) are used with descending certainty appropriately, not interchangeably.\n' +
    '- Check that "soll"/"will" used for reported claims are not confused with future tense or literal volition.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Attitude check:</b> one sentence on whether the learner\'s modal verb choices conveyed the intended speaker attitude (certainty, caution, politeness) precisely.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — your modal verbs express precise speaker attitude, not just literal meaning. Ready for Konjunktiv I in academic language next.',
    mid: 'Good. Re-read the Certainty Scale once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: C1 modal verbs express attitude, not just ability or obligation.'
  },

  parserSentence: [
    { w: 'Das', role: 'r-subjektiv' }, { w: 'muss', role: 'r-subjektiv' }, { w: 'stimmen', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: C1 modal verbs communicate attitude, certainty, and interpersonal meaning.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Kirsten and Timo discuss evidence and recommendations, using objective and subjective modal verbs precisely.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key modal expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master objective vs subjective modality, the certainty scale, hedging, and politeness softening.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a scientific article and a newspaper report, identifying modal certainty and reported claims.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify modal meanings, certainty, and implied attitude in a university lecture and a radio interview.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Make recommendations, present hypotheses, and give diplomatic opinions using authentic modal structures.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Improve a B2 text\'s modal verb usage, and write a 350-word analytical article with precise modality.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill meaning selection, certainty ranking, and modal substitution.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 430 XP.' },
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
      desc: 'Certainty ranking drills, modal substitution exercises, and a full analytical article writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Table, Certainty Scale, Register Scale, and Decision Flowchart.',
      pdfUrl: '/pdfs/grammar.pdf', size: '11 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Das muss stimmen.', text: 'Use subjective "muss" for near-certain conclusion, not obligation' },
    { de: 'Es dürfte stimmen, aber wir sollten weitere Daten prüfen.', text: 'Rank probability precisely (dürfte ~90%) and soften a recommendation' },
    { de: 'Der Professor soll ähnliche Bedenken geäußert haben.', text: 'Use reported "soll" for an unconfirmed claim, not future tense' },
    { de: 'Es wäre sinnvoll, die Einschränkungen offen zu nennen.', text: 'Use the most polite academic softening structure' },
    { de: 'Wir können sagen, dass die Hypothese weitgehend bestätigt wurde.', text: 'Use objective "können" for genuine ability/possibility' }
  ],

  vocab: [
    { de: 'die Gewissheit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'C1', register: 'written', en: 'certainty', hi: 'निश्चितता', ex: 'Mit großer Gewissheit lässt sich das Ergebnis bestätigen.', exEn: 'The result can be confirmed with great certainty.', exHi: 'Parinaam ko bahut nishchitataa ke saath pushti ki jaa sakti hai.', ex2: 'Sie sprachen mit Gewissheit über die Zukunft.', ex2En: 'They spoke about the future with certainty.', ex2Hi: 'Unhone bhavishya ke baare mein nishchitataa se baat ki.' },
    { de: 'die Vermutung', art: 'die', gender: 'f', plural: 'Vermutungen', pos: 'noun', level: 'C1', register: 'written', en: 'assumption, conjecture', hi: 'अनुमान', ex: 'Meine Vermutung dürfte zutreffen.', exEn: 'My assumption is likely correct.', exHi: 'Mera anumaan shaayad sahi hai.', ex2: 'Sie äußerten mehrere Vermutungen zu den Ursachen.', ex2En: 'They expressed several assumptions about the causes.', ex2Hi: 'Unhone kaaranon ke baare mein kai anumaan vyakt kiye.' },
    { de: 'die Zurückhaltung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'C1', register: 'written', en: 'reserve, caution', hi: 'सावधानी', ex: 'Wissenschaftler formulieren ihre Thesen oft mit Zurückhaltung.', exEn: 'Scientists often formulate their theses with caution.', exHi: 'Vaigyaanik aksar apni theses saavdhaani se formulate karte hain.', ex2: 'Sie äußerten sich mit auffallender Zurückhaltung.', ex2En: 'They expressed themselves with striking reserve.', ex2Hi: 'Unhone dhyaan denay laayak saavdhaani se apni baat rakhi.' },
    { de: 'übergeneralisieren', pos: 'verb', level: 'C1', register: 'written', en: 'to overgeneralize', hi: 'अत्यधिक सामान्यीकरण करना', ex: 'Man sollte aus einer kleinen Stichprobe nicht übergeneralisieren.', exEn: 'One shouldn\'t overgeneralize from a small sample.', exHi: 'Ek chhote namoone se zyaada saamaanyeekaran nahi karna chahiye.', ex2: 'Sie haben die Ergebnisse übergeneralisiert.', ex2En: 'They\'ve overgeneralized the results.', ex2Hi: 'Unhone parinaamon ka atirikt saamaanyeekaran kiya hai.', conj: { praesens: 'übergeneralisiert', praeteritum: 'übergeneralisierte', perfekt: 'hat übergeneralisiert' } },
    { de: 'die Einschränkung', art: 'die', gender: 'f', plural: 'Einschränkungen', pos: 'noun', level: 'C1', register: 'written', en: 'limitation, caveat', hi: 'सीमा', ex: 'Es wäre sinnvoll, die Einschränkungen offen zu nennen.', exEn: 'It would be sensible to openly name the limitations.', exHi: 'Seemaayen khule taur par batana samajhdaari poorn hoga.', ex2: 'Die Studie weist mehrere Einschränkungen auf.', ex2En: 'The study has several limitations.', ex2Hi: 'Adhyayan mein kai seemaayen hain.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Warum Modalverben präzise verwenden zählt',
      body: [ 'A1: Basic meaning → B1: Functional meaning → B2: Contextual meaning → C1: Speaker attitude, certainty and style. Modal verbs often express the speaker\'s evaluation rather than literal meaning.' ],
      hinglish: 'C1 par modal verbs ka kaam badal jaata hai. Ab yeh sirf \u201ckarna padega\u201d ya \u201ckar sakte ho\u201d nahi batate \u2014 yeh batate hain ki <b>bolne wala kitna yakeen rakhta hai</b>. Isliye ek hi modal do bilkul alag matlab de sakta hai, aur context hi tay karta hai kaunsa.'
    },
    {
      title: 'Objektive vs Subjektive Modalverben',
      body: [ 'Objective: obligation, permission, necessity, ability (e.g. "Er muss heute arbeiten" = he has to work). Subjective: assumption, probability, interpretation, speculation (e.g. "Er muss krank sein" = he must be sick — a conclusion, not an obligation).' ],
      hinglish: 'Yahi is chapter ka dil hai. <b>Objective</b> use mein modal asli majboori ya ijaazat batata hai: <span class="de">Er muss heute arbeiten</span> \u2014 usse kaam karna hi padega. <b>Subjective</b> use mein wahi modal batata hai ki bolne wala kya samajh raha hai: <span class="de">Er muss krank sein</span> \u2014 matlab \u201clagta hai woh bimaar hoga\u201d, koi majboori nahi. Pehchaan ka tareeka: agar saath mein <i>sein</i> jaisa state wala verb hai, to matlab aksar andaaza hota hai.'
    },
    {
      title: 'Gewissheitsskala (Certainty Scale)',
      body: [ 'muss (~95%, near-certain) → dürfte (~80%, high probability) → könnte (~60%, moderate) → mag (~40%, weak concession) → vielleicht (lower still). The percentages are rough anchors, not fixed values — what matters is the order.' ],
      hinglish: 'Yeh certainty ki seedhi hai. <b>muss</b> matlab bolne wale ko lagbhag pakka yakeen hai, <b>d\u00fcrfte</b> matlab kaafi sambhavna, <b>k\u00f6nnte</b> matlab ho bhi sakta hai, aur <b>mag</b> matlab \u201cho to sakta hai, par\u2026\u201d \u2014 isme aksar ek chhota sa vireodh chhupa hota hai. Sabse zyada galti <b>d\u00fcrfte</b> mein hoti hai: log ise future samajh lete hain, jabki woh andaaza batata hai.'
    },
    {
      title: 'Die Form der subjektiven Modalit\u00e4t',
      body: [
        'Subjective modality has a shape you can rely on: the modal stays in the present, and the tense of the assumption is carried by the infinitive at the end.',
        'For something happening now, a plain infinitive. For something already past, the perfect infinitive \u2014 Partizip II + <b>haben</b> or <b>sein</b>.'
      ],
      table: {
        head: ['Time of the assumption', 'Form', 'Example'],
        rows: [
          ['now', 'modal + Infinitiv', '<span class="de">Er muss krank <b>sein</b>.</span>'],
          ['past', 'modal + Partizip II + haben/sein', '<span class="de">Er muss krank <b>gewesen sein</b>.</span>'],
          ['past, reported', 'soll + Partizip II + haben', '<span class="de">Er soll das <b>gesagt haben</b>.</span>'],
          ['past, claimed by the subject', 'will + Partizip II + haben', '<span class="de">Er will nichts <b>gesehen haben</b>.</span>']
        ]
      },
      note: 'Never put <b>zu</b> before the infinitive after a modal, and never push the modal itself into the past \u2014 <i>Er musste krank gewesen sein</i> changes the meaning back to obligation.',
      hinglish: 'Subjective modality ki shape fix hai, aur ise pakad lo to sab aasaan ho jaata hai: <b>modal khud present mein rehta hai</b>, aur assumption kab ki hai yeh end wala infinitive batata hai. Abhi ki baat ho to plain infinitive \u2014 <span class="de">Er muss krank sein.</span> Aur agar baat past ki hai to perfect infinitive lagta hai, matlab Partizip II + <b>haben</b> ya <b>sein</b> \u2014 <span class="de">Er muss krank gewesen sein.</span> Do galtiyan bachao: modal ke baad <b>zu</b> kabhi nahi aata, aur modal ko khud past mein mat daalo \u2014 <i>Er musste krank gewesen sein</i> ka matlab wapas obligation ban jaata hai.'
    },
    {
      title: 'Modalverben in der Wissenschaftssprache',
      body: [ 'Used to formulate hypotheses cautiously, evaluate evidence, express academic caution, and avoid overgeneralization — typically using könnte, dürfte, mag rather than definitive claims.' ],
      hinglish: 'Academic writing mein modal verbs bahut kaam aate hain, kyunki wahan koi baat 100% dave se nahi kahi jaati. <span class="de">Die Daten k\u00f6nnten darauf hinweisen</span> likhna <span class="de">Die Daten zeigen</span> se zyada safe aur zyada professional lagta hai. Isliye <b>k\u00f6nnte</b>, <b>d\u00fcrfte</b> aur <b>mag</b> academic texts mein baar-baar milte hain.'
    },
    {
      title: 'Modalverben im Journalismus',
      body: [ '"Der Minister soll..." (is said to — unconfirmed claim); "Der Zeuge will..." (claims to — reported, possibly disputed). These report information without confirming it as fact.' ],
      hinglish: 'Journalism mein do modals khaas hain, aur inka farak yaad rakhna zaroori hai. <b>sollen</b> matlab <i>doosre log</i> aisa keh rahe hain \u2014 <span class="de">Der Minister soll das gesagt haben</span>. Aur <b>wollen</b> matlab <i>khud us insaan</i> ka daava hai \u2014 <span class="de">Der Zeuge will nichts gesehen haben</span>. Dono mein akhbaar sachai ki zimmedaari nahi leta, bas daava dohra deta hai.'
    },
    {
      title: 'Höflichkeit & Abschwächung (Softening)',
      body: [ 'Sie müssen... (command) → Sie sollten... (recommendation) → Sie könnten... (suggestion) → Es wäre sinnvoll, ... (most polite/tentative). Each step softens the interpersonal force of the statement.' ],
      hinglish: 'Yeh politeness ki seedhi hai. <span class="de">Sie m\u00fcssen \u2026</span> seedha order lagta hai, <span class="de">Sie sollten \u2026</span> salaah, <span class="de">Sie k\u00f6nnten \u2026</span> ek halka sujhav, aur <span class="de">Es w\u00e4re sinnvoll, \u2026</span> sabse narm. Office ke emails mein aksar teesra ya chautha hi theek rehta hai.'
    },
    {
      title: 'Meister-Tabelle',
      body: [ 'Each modal verb\'s core C1 function.' ],
      table: {
        head: ['Modal Verb', 'Core C1 Function'],
        rows: [
          ['müssen', 'certainty / necessity'],
          ['dürfen', 'probability / permission'],
          ['können', 'possibility / ability'],
          ['sollen', 'reported information / recommendation'],
          ['wollen', 'claimed intention / reported claim'],
          ['mögen', 'concession / weak probability']
        ]
      },
      hinglish: 'Har modal ka C1 par apna khaas kaam hai \u2014 yeh table usi ka summary hai. Dhyaan do ki har row mein woh matlab hai jo B1 wale matlab se alag hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These turn on two things: choosing a modal whose certainty does not match the evidence in the sentence, and getting the infinitive right when the assumption is about the past.' ],
      mistakes: [
        { wrong: 'Er muss zu Hause sein, denn sein Chef hat es angeordnet.', right: 'Er muss zu Hause bleiben, denn sein Chef hat es angeordnet.', why: 'With <i>sein</i>, <b>muss</b> reads as a conclusion (\u201che must be home\u201d). For a real obligation you need an action verb: <b>bleiben</b>.' },
        { wrong: 'Die Firma muss angeblich Verluste gemacht haben.', right: 'Die Firma soll Verluste gemacht haben.', why: 'For an unverified report German uses <b>sollen</b>. <b>m\u00fcssen</b> states the speaker\u2019s own firm conclusion, which clashes with <i>angeblich</i>.' },
        { wrong: 'Das Ergebnis kann korrekt sein \u2014 alle Daten sprechen daf\u00fcr.', right: 'Das Ergebnis d\u00fcrfte korrekt sein \u2014 alle Daten sprechen daf\u00fcr.', why: '<b>kann</b> only opens a possibility (~50%). When the evidence points one way, <b>d\u00fcrfte</b> marks the high probability the sentence actually claims.' },
        { wrong: 'Er muss gestern krank sein.', right: 'Er muss gestern krank gewesen sein.', why: 'A conclusion about the PAST needs the perfect infinitive: <b>gewesen sein</b>. The modal itself stays in the present.' },
        { wrong: 'Morgen d\u00fcrfte ich nach Berlin fahren \u2014 der Termin steht fest.', right: 'Morgen fahre ich nach Berlin \u2014 der Termin steht fest.', why: '<b>d\u00fcrfte</b> marks a guess, so it contradicts a fixed appointment. For a settled plan use the plain Pr\u00e4sens.' },
        { wrong: 'Der Zeuge will nichts gesehen zu haben.', right: 'Der Zeuge will nichts gesehen haben.', why: 'A modal takes a bare infinitive \u2014 no <b>zu</b>. Here <b>will</b> means \u201cclaims to have seen nothing\u201d, not a wish.' }
      ],
      hinglish: 'Yeh galtiyan do wajah se hoti hain \u2014 aisa modal chunna jiski certainty sentence ke evidence se match nahi karti, aur past ke andaaze mein infinitive galat bana dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need certainty? muss. Need high probability? dürfte. Need possibility? könnte. Need recommendation? sollte. Need reported claim? soll/will. Need polite suggestion? könnte/sollte.' ],
      note: 'Memory trick: A1 asks "what does the modal verb mean?" C1 asks "what attitude does the speaker express through the modal verb?" The same modal verb can express certainty, doubt, politeness or criticism depending on context.',
      hinglish: 'Pakka yakeen? <b>muss</b>. Kaafi sambhavna? <b>d\u00fcrfte</b>. Ho sakta hai? <b>k\u00f6nnte</b>. Salaah? <b>sollte</b>. Doosron ka daava? <b>soll</b>. Khud ka daava? <b>will</b>. Aur agar baat past ki hai, to modal present mein rakho aur end mein <b>Partizip II + haben/sein</b> laga do.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Wissenschaftsticker: Neue Signale aus der Tiefsee',
    titleEn: 'Reading A — Science ticker: new signals from the deep sea',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'ungewöhnlichen', role: 'plain', en: 'unusual', hi: 'असामान्य', type: 'Adjective' },
      { w: 'Messwerte', role: 'plain', en: 'measurements (Satzende)', hi: 'माप (Satzende)', type: 'Noun · plural' },
      { w: 'könnten', role: 'r-subjektiv', en: 'could (subjective modal, moderate probability)', hi: 'हो सकते हैं', type: 'Modalverb (Konjunktiv II)', why: 'Academic and science reporting hedges with "könnten" rather than asserting certainty (this chapter).' },
      { w: 'auf', role: 'plain', en: 'to', hi: 'की ओर', type: 'Präposition · Akk.' },
      { w: 'eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article' },
      { w: 'bislang', role: 'plain', en: 'so far', hi: 'अब तक', type: 'Adverb' },
      { w: 'unbekannte', role: 'plain', en: 'unknown', hi: 'अज्ञात', type: 'Adjective' },
      { w: 'Tierart', role: 'plain', en: 'animal species (Satzende)', hi: 'जीव प्रजाति (Satzende)', type: 'Noun · fem.' },
      { w: 'hindeuten', role: 'plain', en: 'point (Satzende)', hi: 'इशारा करना (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'Forschungsteam', role: 'plain', en: 'research team', hi: 'शोध टीम', type: 'Noun · neut.' },
      { w: 'hatte', role: 'plain', en: 'had', hi: 'था', type: 'Verb · haben (Plusquamperfekt)' },
      { w: 'die', role: 'plain', en: 'the (plural akk.)', hi: 'ये', type: 'Article · Akk.' },
      { w: 'Signale', role: 'plain', en: 'signals (Satzende)', hi: 'संकेत (Satzende)', type: 'Noun · plural' },
      { w: 'bereits', role: 'plain', en: 'already', hi: 'पहले ही', type: 'Adverb' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'letzten', role: 'plain', en: 'last', hi: 'पिछले', type: 'Adjective' },
      { w: 'Sommer', role: 'plain', en: 'summer (Satzende)', hi: 'गर्मियों (Satzende)', type: 'Noun · masc.' },
      { w: 'registriert', role: 'plain', en: 'registered (Satzende)', hi: 'दर्ज किए थे (Satzende)', type: 'Verb · Partizip II (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Weitere', role: 'plain', en: 'further', hi: 'और', type: 'Adjective' },
      { w: 'Tauchgänge', role: 'plain', en: 'dives (Satzende)', hi: 'गोताखोरी (Satzende)', type: 'Noun · plural' },
      { w: 'dürften', role: 'r-subjektiv', en: 'are likely to (subjective modal, high probability)', hi: 'शायद इस अनुमान की', type: 'Modalverb (Konjunktiv II)', why: '"Dürften" expresses a strong expectation without full certainty (this chapter).' },
      { w: 'diese', role: 'plain', en: 'this', hi: 'पुष्टि करें', type: 'Demonstrativpronomen' },
      { w: 'Vermutung', role: 'plain', en: 'assumption', hi: '', type: 'Noun · fem.' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'kommenden', role: 'plain', en: 'coming', hi: 'आने वाले', type: 'Adjective' },
      { w: 'Jahr', role: 'plain', en: 'year (Satzende)', hi: 'साल (Satzende)', type: 'Noun · neut.' },
      { w: 'bestätigen', role: 'plain', en: 'confirm (Satzende)', hi: '(Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true }
    ],
    translation: 'The unusual measurements could point to a hitherto unknown animal species. A research team had already registered the signals last summer. Further dives are likely to confirm this assumption next year.',
    comprehension: [
      { q: 'Welche Funktion hat "könnten" hier?', options: ['Vorsichtige Vermutung (moderate Wahrscheinlichkeit)', 'Erlaubnis', 'Notwendigkeit'], answer: 0 },
      { q: 'Welche Funktion hat "dürften" hier?', options: ['Hohe Wahrscheinlichkeit (subjektiv)', 'Zukunft', 'Befehl'], answer: 0 },
      { q: 'Wann wurden die Signale zuerst registriert?', options: ['Im letzten Sommer', 'Vor zehn Jahren', 'Gestern'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungsbericht',
    titleEn: 'Reading B — Newspaper report',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Minister', role: 'plain', en: 'minister (Satzende)', hi: 'mantri (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'soll', role: 'r-journalistisch', en: 'is said to (reported claim, unconfirmed)', hi: 'kehte hain (reported claim, unconfirmed)', type: 'Modalverb (Präsens)', why: '"Soll" reports an unconfirmed claim — the newspaper is not vouching for its truth.' },
      { w: 'von', role: 'plain', en: 'of', hi: 'ke baare mein', type: 'Präposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (plural dat.)', hi: 'in', type: 'Article · Dat.' },
      { w: 'Plänen', role: 'plain', en: 'plans (Satzende)', hi: 'yojanaon ke (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'gewusst', role: 'plain', en: 'known (part of Perfekt)', hi: '(Perfekt ka hissa)', type: 'Partizip II' },
      { w: 'haben', role: 'plain', en: 'have (Satzende)', hi: 'jaanta tha (Satzende)', type: 'Verb · haben (Satzende)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Zeuge', role: 'plain', en: 'witness (Satzende)', hi: 'gawaah (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'will', role: 'r-journalistisch', en: 'claims to (reported claim, contested volition)', hi: 'daava karta hai (reported claim, contested volition)', type: 'Modalverb (Präsens)', why: '"Will" here reports a claim the witness makes, not a simple future intention.' },
      { w: 'alles', role: 'plain', en: 'everything', hi: 'sab kuch', type: 'Pronomen · Akk.' },
      { w: 'gesehen', role: 'plain', en: 'seen (part of Perfekt)', hi: '(Perfekt ka hissa)', type: 'Partizip II' },
      { w: 'haben', role: 'plain', en: 'have (Satzende)', hi: 'dekha hai (Satzende)', type: 'Verb · haben (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The minister is said to have known about the plans. The witness claims to have seen everything.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_012_L001', speaker: 'Kirsten', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, der Drucker streikt schon wieder. Was kann da bloß kaputt sein?', en: 'Timo, the printer is acting up again. What on earth could be broken?' },
      { id: 'C1_012_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das muss am Papierstau liegen, das passiert eigentlich immer bei diesem Modell.', en: 'It must be the paper jam, that actually always happens with this model.' },
      { id: 'C1_012_L003', speaker: 'Kirsten', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Könnte aber auch an der Tinte liegen — die haben wir schon länger nicht gewechselt.', en: 'But it could also be the ink — we haven\'t changed that in a while.' },
      { id: 'C1_012_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt, lass uns beides prüfen, bevor wir den Techniker rufen müssen.', en: 'True, let\'s check both before we have to call the technician.' }
    ],
    transcript: 'Timo, der Drucker streikt schon wieder. Was kann da bloß kaputt sein? Das muss am Papierstau liegen, das passiert eigentlich immer bei diesem Modell. Könnte aber auch an der Tinte liegen — die haben wir schon länger nicht gewechselt. Stimmt, lass uns beides prüfen, bevor wir den Techniker rufen müssen.',
    translation: 'Timo, the printer is acting up again. What on earth could be broken? It must be the paper jam, that actually always happens with this model. But it could also be the ink — we haven\'t changed that in a while. True, let\'s check both before we have to call the technician.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'Drucker' },
      { w: 'streikt' },
      { w: 'schon' },
      { w: 'wieder' },
      { w: '.', plain: true },
      { w: 'Was' },
      { w: 'kann' },
      { w: 'da' },
      { w: 'bloß' },
      { w: 'kaputt' },
      { w: 'sein' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'muss' },
      { w: 'am' },
      { w: 'Papierstau' },
      { w: 'liegen' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'passiert' },
      { w: 'eigentlich' },
      { w: 'immer' },
      { w: 'bei' },
      { w: 'diesem' },
      { w: 'Modell' },
      { w: '.', plain: true },
      { w: 'Könnte' },
      { w: 'aber' },
      { w: 'auch' },
      { w: 'an' },
      { w: 'der' },
      { w: 'Tinte' },
      { w: 'liegen' },
      { w: '—', plain: true },
      { w: 'die' },
      { w: 'haben' },
      { w: 'wir' },
      { w: 'schon' },
      { w: 'länger' },
      { w: 'nicht' },
      { w: 'gewechselt' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: 'lass' },
      { w: 'uns' },
      { w: 'beides' },
      { w: 'prüfen' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'wir' },
      { w: 'den' },
      { w: 'Techniker' },
      { w: 'rufen' },
      { w: 'müssen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was muss laut Timo das Problem sein?', qEn: 'What does Timo think must be the problem?', options: ['der Papierstau', 'die Tinte', 'der Strom', 'das Kabel'], optionsEn: ['the paper jam', 'the ink', 'the electricity', 'the cable'], answer: 0,
        explain: '"Das muss am Papierstau liegen."' },
      { q: 'Welche Alternative schlägt Kirsten vor?', qEn: 'What alternative does Kirsten suggest?', options: ['der Strom', 'die Tinte', 'das Kabel', 'der Bildschirm'], optionsEn: ['the electricity', 'the ink', 'the cable', 'the screen'], answer: 1,
        explain: '"Könnte aber auch an der Tinte liegen."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Timo fragt: Der Drucker streikt wieder — was kann kaputt sein?", taskEn: "Timo asks: the printer's playing up again — what can be broken?", de: "Das muss am Papierstau liegen, das passiert immer bei diesem Modell.", en: "It must be a paper jam, that always happens with this model." },
    { task: "Deine Chefin fragt, ob der Antrag bewilligt wird.", taskEn: "Your boss asks whether the proposal will be approved.", de: "Er dürfte bewilligt werden, die Gutachten waren positiv.", en: "It's likely to be approved, the reviews were positive." },
    { task: "Ein Kollege erzählt Gerüchte über das Werk. Gib sie mit Zurückhaltung wieder.", taskEn: "A colleague passes on rumours about the plant. Report them with reserve.", de: "Das Werk soll geschlossen werden, aber die Leitung bestätigt das nicht.", en: "The plant is said to be closing, but management doesn't confirm it." },
    { task: "Deine Kollegin will drei Themen in einen Vortrag packen. Rate ihr.", taskEn: "Your colleague wants three topics in one talk. Advise her.", de: "Es wäre ratsam, sich auf einen Aspekt zu beschränken.", en: "It would be advisable to limit yourself to one aspect." },
    { task: "Ein Praktikant übergeneralisiert das Ergebnis. Korrigiere höflich.", taskEn: "An intern overgeneralises the result. Correct politely.", de: "Der Effekt muss existieren, dürfte aber kleiner sein als erwartet.", en: "The effect must exist, but is likely smaller than expected." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Take a B2-level text with flat, uniform modal verb usage and rewrite it with precise C1 modality (subjective muss/dürfte/könnte/mag, reported soll/will, softened sollten).\n\nTASK 2 — Analytical article (350 words): Write an article naturally using modal verbs to express certainty, probability, recommendation, and academic caution.',
    starters: ['Die Ergebnisse dürften belastbar sein, aber wir sollten vorsichtig bleiben.', 'Der Autor soll ähnliche Bedenken geäußert haben.'],
    placeholder: 'Die Ergebnisse könnten auf einen neuen Trend hinweisen. Es wäre sinnvoll, die Einschränkungen offen zu nennen...',
    minWords: 150
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'In "Das muss stimmen," what does "muss" express?',
      options: ['A near-certain conclusion (subjective)', 'An obligation (objective)', 'Permission'],
      answer: 0,
      explain: 'Subjective "muss" here expresses near-certainty ("this must be true"), not an obligation.'
    },
    gap: {
      sentence: ['Der Professor ', ' ähnliche Bedenken geäußert haben.'],
      gaps: [ { answer: 'soll', accepts: ['soll'] } ],
      explain: '"Soll" reports an unconfirmed claim — common in academic/journalistic hedging.'
    },
    match: {
      q: 'Match each modal verb to its certainty level.',
      pairs: [
        { noun: 'muss', art: '~100% — near-certain' },
        { noun: 'dürfte', art: '~90% — high probability' },
        { noun: 'könnte', art: '~50% — moderate probability' },
        { noun: 'mag', art: 'weak concession' }
      ]
    },
    builder: {
      target: 'Build: "It would be sensible to openly name the limitations." (most polite academic softening)',
      bank: ['Es', 'wäre', 'sinnvoll', ',', 'die', 'Einschränkungen', 'offen', 'zu', 'nennen', '.'],
      answer: ['Es', 'wäre', 'sinnvoll', ',', 'die', 'Einschränkungen', 'offen', 'zu', 'nennen', '.'],
      roles: { 'wäre': 'r-softening', 'sinnvoll': 'r-softening', 'Es': 'r-softening' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Er muss arbeiten heute, deshalb muss er krank sein.',
      right: 'Er muss heute arbeiten. Deshalb dürfte er nicht krank sein.',
      explain: 'The first "muss" is objective necessity; confusing it with subjective "muss sein" (a conclusion) creates a logical contradiction — "dürfte" better expresses probability here.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the difference between "Er muss arbeiten" and "Er muss krank sein"?', options: ['First is objective obligation, second is subjective conclusion', 'Both mean the same thing', 'First is future, second is past'], answer: 0,
      explain: 'The same verb form can express objective necessity or subjective certainty depending on context.' },
    { q: 'Which modal expresses the highest probability short of certainty?', options: ['dürfte', 'könnte', 'mag'], answer: 0,
      explain: '"Dürfte" (~90%) is stronger than "könnte" (~50%) and "mag" (weak concession).' },
    { q: 'What does "soll" mean in "Der Minister soll das gewusst haben"?', options: ['An unconfirmed reported claim', 'A future action', 'A moral obligation'], answer: 0,
      explain: '"Soll" here reports a claim without confirming it as true.' },
    { q: 'Which is the most polite way to make a recommendation?', options: ['Es wäre sinnvoll, ...', 'Sie müssen ...', 'Sie sollen ...'], answer: 0,
      explain: '"Es wäre sinnvoll" is the softest, most tentative recommendation structure.' },
    { q: 'What is the C1 memory trick for modal verbs?', options: ['They express speaker attitude, not just literal meaning', 'They only ever mean ability', 'They are interchangeable'], answer: 0,
      explain: 'The same modal verb can express certainty, doubt, politeness or criticism depending on context.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-subjektiv', html: 'Subjective modality (muss/dürfte/könnte/mag) expresses degrees of certainty about a conclusion, distinct from objective obligation/ability.' },
    { c: 'r-journalistisch', html: 'Reported "soll"/"will" mark unconfirmed claims in journalism and academic writing — never confuse with future tense.' },
    { c: 'r-softening', html: 'The politeness scale (müssen → sollten → könnten → Es wäre sinnvoll) softens recommendations for diplomatic, academic register.' }
  ],
  revisionTips: [
    'Write five sentences ranking the same claim through the certainty scale: muss, dürfte, könnte, mag, vielleicht.',
    'Find a German news article and identify every "soll"/"will" used for reported claims rather than future/volition.',
    'Practise softening a direct command through all four politeness levels: müssen → sollten → könnten → Es wäre sinnvoll.'
  ]
};

window.CHAPTER = CHAPTER;
