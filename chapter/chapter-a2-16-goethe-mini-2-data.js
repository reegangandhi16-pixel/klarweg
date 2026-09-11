/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 16
   "Goethe Mini 2"  — the second full A2 checkpoint. NOT a grammar
   chapter: it simulates the Goethe A2 exam while recycling grammar
   from Chapters 11-15 (primary) and 1-10 + A1 (secondary).
   NO new grammar. The vocabulary list below IS this chapter's
   uploaded set (~60 items; admin / traffic / travel / job theme);
   it is woven through the exam-style sections and recycles earlier
   words wherever possible.
   NOTE: content only — existing audio engine, no new assets.

   Recycled grammar under test:
   PRIMARY  — Ch.11 wenn · Ch.12 Reflexive Verben ·
              Ch.13 Pr\u00e4positionen mit Dativ · Ch.14 Wechselpr\u00e4positionen ·
              Ch.15 Positions- & Richtungsverben
   SECONDARY— weil, dass, Perfekt, Modalverben im Pr\u00e4t., Dativ,
              Komparativ, als / wie

   SOURCE TYPOS corrected (flagged, not overridden):
   • "ablgeben" \u2192 abgeben (to submit/hand in)
   • "auslf\u00fcllen" \u2192 ausf\u00fcllen (to fill in)
   • "vorbeilgehen" \u2192 vorbeigehen (to walk past)
   • "weiter|gehen" \u2192 weitergehen (to continue/go on)
   • "an vorbei" is the frame an ... vorbei (past); glossed so.
   • "machen - to cause" kept as machen (here: to cause/make).
   • "Mensch - jeez" kept as the colloquial interjection Mensch!
============================================================ */
const CHAPTER = {
  id: 'a2-16-goethe-mini-2',
  phase: 'A2 · Phase 2',
  number: 16,
  title: 'Goethe Mini 2',
  titleEn: 'Goethe Checkpoint 2',
  description: 'Your second full checkpoint \u2014 no new grammar. A Goethe-A2-style mock that puts Phase 2 to work at once: subordinate clauses with wenn, reflexive verbs, dative prepositions, two-way prepositions and the position/direction verb pairs \u2014 while recycling weil, dass, the Perfekt, modal past, dative and comparisons from Phase 1. Listening, Reading, Writing and Speaking in the real exam formats, plus a scored mini mock test with a readiness indicator and a personalised revision plan.',
  xp: 200,
  time: 45,
  difficulty: 'Checkpoint',
  nextChapter: { number: 17, title: 'werden', titleEn: 'The verb werden' , href: 'chapter-a2-17-werden.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Everything <em>together.</em>',
    intro: 'Two weeks before the real exam, the class runs its second big warm-up — and life is providing the material: Timo needs an ID card from the Behörde, has a job interview coming up, and is planning a car-free city day. Every answer recycles a whole phase of grammar. Frau Wolter, behind the counter, just listens for the click.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear Ch.11\u201315 grammar recycled in one natural conversation'
    ],
    scene: 'Aufw\u00e4rmen vor dem Goethe-Mini-Test 2 \u2014 Sprachschule Berlin',
    femaleSpeakers: ['Frau Wolter'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'möchte', role: 'r-modalverb', en: 'would like', hi: 'चाहता हूँ', pron: 'MÖKH-tuh', type: 'Modal · möchten (ich)' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Personalausweis', role: 'r-akkusativ', en: 'ID card', hi: 'पहचान पत्र', pron: 'per-zo-NAHL-ows-vys', type: 'Noun · masc.', why: 'der Personalausweis (this chapter).', ex: 'Ich brauche einen Personalausweis.', exEn: 'I need an ID card.' },
        { w: 'beantragen', role: 'r-verb', en: 'apply for', hi: 'आवेदन करना', pron: 'be-AN-trah-gen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I would like to apply for an ID card.', hi: 'Main pahchan patra ke liye aavedan karna chahta hoon.' },
      { speaker: 'Frau Wolter', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Füllen', role: 'r-verb', en: 'fill out', hi: 'भरें', pron: 'FÜ-len', type: 'Verb · imperative (Sie)', lexicalUnit: 'ausfüllen' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Politeness' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Formular', role: 'r-akkusativ', en: 'form', hi: 'फ़ॉर्म', pron: 'for-moo-LAHR', type: 'Noun · neut.' },
        { w: 'aus', role: 'r-verb', en: '(prefix of ausfüllen)', hi: 'भरना', pron: 'ows', type: 'Separable prefix · Satzende', lexicalUnit: 'ausfüllen' },
        { w: '.', plain: true }
      ], en: 'Good. Please fill out the form.', hi: 'Achha. Kripya form bhariye.' },
      { speaker: 'Timo', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Brauche', role: 'r-verb', en: 'do I need', hi: 'ज़रूरत है', pron: 'BROW-khuh', type: 'Verb · brauchen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Foto', role: 'r-akkusativ', en: 'photo', hi: 'फ़ोटो', pron: 'FO-to', type: 'Noun · neut.' },
        { w: '?', plain: true }
      ], en: 'Yes, gladly. Do I also need a photo?', hi: 'Haan, khushi se. Kya mujhe photo bhi chahiye?' },
      { speaker: 'Frau Wolter', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'aktuelles', role: 'r-akkusativ', en: 'current', hi: 'हाल का', pron: 'ak-too-EL-es', type: 'Adjective', why: 'aktuell = current (recycled Ch8).', ex: 'ein aktuelles Foto', exEn: 'a current photo' },
        { w: 'Foto', role: 'r-akkusativ', en: 'photo', hi: 'फ़ोटो', pron: 'FO-to', type: 'Noun · neut.' },
        { w: '.', plain: true },
        { w: 'Haben', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben (Sie)' },
        { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आपके', pron: 'zee', type: 'Pronoun · formal' },
        { w: 'eins', role: 'r-akkusativ', en: 'one', hi: 'एक', pron: 'ines', type: 'Pronoun' },
        { w: 'dabei', role: 'r-adverb', en: 'with you', hi: 'साथ', pron: 'da-BY', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'Yes, a current photo. Do you have one with you?', hi: 'Haan, ek recent photo. Kya aapke paas hai?' },
      { speaker: 'Timo', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: '.', plain: true }
      ], en: 'Yes, here it is.', hi: 'Haan, yeh raha.' },
      { speaker: 'Frau Wolter', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Ausweis', role: 'r-subject', en: 'ID card', hi: 'पहचान पत्र', pron: 'ows-VYS', type: 'Noun · masc.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'होगा', pron: 'ist', type: 'Verb · sein' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'drei', role: 'r-dativ', en: 'three', hi: 'तीन', pron: 'dry', type: 'Number' },
        { w: 'Wochen', role: 'r-dativ', en: 'weeks', hi: 'हफ़्तों', pron: 'VO-khen', type: 'Noun · plural dat.' },
        { w: 'fertig', role: 'r-adjective', en: 'ready', hi: 'तैयार', pron: 'FAIR-tikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Perfect! The ID card will be ready in three weeks.', hi: 'Badhiya! Pahchan patra teen hafton mein taiyaar hoga.' },
      { speaker: 'Timo', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Wo', role: 'r-question', en: 'where', hi: 'कहाँ', pron: 'vo', type: 'Question word' },
        { w: 'hole', role: 'r-verb', en: 'do I pick up', hi: 'ले जाऊं', pron: 'HO-luh', type: 'Verb · holen (ich)', lexicalUnit: 'abholen' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'ihn', role: 'r-akkusativ', en: 'it (masc.)', hi: 'उसे', pron: 'een', type: 'Pronoun · acc.' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'ab', role: 'r-verb', en: '(prefix of abholen)', hi: 'लेना', pron: 'ap', type: 'Separable prefix · Satzende', lexicalUnit: 'abholen' },
        { w: '?', plain: true }
      ], en: 'Thanks! Where do I pick it up then?', hi: 'Dhanyavaad! Toh main use kahaan se le jaaun?' },
      { speaker: 'Frau Wolter', side: 'right', tokens: [
        { w: 'Hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'bei', role: 'r-preposition', en: 'at', hi: 'के पास', pron: 'by', type: 'Preposition + dative' },
        { w: 'uns', role: 'r-dativ', en: 'us', hi: 'हमारे', pron: 'uns', type: 'Pronoun · dative' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'rufen', role: 'r-verb', en: 'call', hi: 'फ़ोन करते हैं', pron: 'ROO-fen', type: 'Verb · anrufen (wir)', lexicalUnit: 'anrufen' },
        { w: 'Sie', role: 'r-akkusativ', en: 'you (formal)', hi: 'आपको', pron: 'zee', type: 'Pronoun · formal acc.' },
        { w: 'an', role: 'r-verb', en: '(prefix of anrufen)', hi: 'फ़ोन', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anrufen' },
        { w: '.', plain: true }
      ], en: 'Here with us. We will call you.', hi: 'Yahaan hamaare paas. Hum aapko call karenge.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This is a <strong>checkpoint</strong>, not a new lesson \u2014 no new grammar. It gathers all of Phase 2 into one Goethe-A2-style rehearsal: subordinate clauses with <span class="de r-wenn">wenn</span>, <span class="de">reflexive verbs</span>, the <span class="de">dative prepositions</span>, the <span class="de">two-way prepositions</span> (Wo? \u2192 Dativ, Wohin? \u2192 Akkusativ) and the <span class="de">position/direction verb pairs</span> \u2014 while quietly recycling <span class="de">weil, dass</span>, the <span class="de">Perfekt</span>, the <span class="de">modal past</span>, the <span class="de">Dativ</span> and the whole <span class="de">comparison</span> system from Phase 1. Work through the four exam skills \u2014 <strong>H\u00f6ren, Lesen, Schreiben, Sprechen</strong> \u2014 in their real formats, then take the mini mock test for an estimated score, a readiness check and a short list of exactly which chapters to revise. Treat every task like the real thing: read the instruction, watch the clock, check your endings.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor and Goethe-A2 examiner for a Hindi/English-speaking learner. ' +
    'This is a CHECKPOINT covering Chapters 1-15 \u2014 no new grammar. The learner wrote a short exam-style text (email / invitation / cancellation / complaint / request) below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- wenn-clause: verb to the end; fronted wenn-clause \u2192 main clause starts with the verb ("Wenn ich Zeit habe, gehe ich \u2026").\n' +
    '- Reflexive verbs keep their pronoun (mich/dich/sich/uns/euch) and use haben in the Perfekt ("Ich habe mich gefreut").\n' +
    '- Dative prepositions (aus, bei, mit, nach, seit, von, zu, gegen\u00fcber) always take the dative; contractions zum/zur/vom.\n' +
    '- Two-way prepositions: movement (wohin?) \u2192 Akkusativ; location (wo?) \u2192 Dativ. Position verbs (stehen/liegen/sitzen/h\u00e4ngen/stecken) + Dativ; direction verbs (stellen/legen/setzen/h\u00e4ngen/stecken) + Akkusativ.\n' +
    '- Also honour earlier rules: weil/dass send the verb to the end; modal past (musste, konnte, wollte \u2026); Komparativ + als, (genau)so + positive + wie.\n' +
    '- A polite A2 email opens (Liebe/r \u2026 or Sehr geehrte \u2026), states the reason, and closes (Viele Gr\u00fc\u00dfe / Mit freundlichen Gr\u00fc\u00dfen).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence + a rough band (e.g. "solid A2").</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why. If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>Exam tip:</b> one sentence on structure, register or time management.</p>\n' +
    'Keep it under 140 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong \u2014 you\u2019re ready for the real Goethe A2. Keep your endings tidy under time pressure and you\u2019ll pass comfortably. Next: the verb <span class="de">werden</span>.',
    mid: 'Solid A2. Re-run the weakest section once (usually the two-way prepositions or reflexive word order), then move on.',
    low: 'Good effort \u2014 focus your revision: wenn word order, reflexive pronouns, and Wo?/Wohin? case choice. Redo those chapters\u2019 grammar cards, then retake this checkpoint.'
  },

  parserSentence: [
    { w: 'Wenn', role: 'r-wenn' }, { w: 'ich', role: 'r-subject' },
    { w: 'Zeit', role: 'r-object' }, { w: 'habe', role: 'r-verb' },
    { w: 'gehe', role: 'r-verb' }, { w: 'ich', role: 'r-subject' },
    { w: 'zur', role: 'r-preposition' }, { w: 'Beh\u00f6rde', role: 'r-place' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how Phase 2 fits together \u2014 and how the checkpoint works.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A warm-up conversation recycling Chapters 11\u201315.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Review the exam words: die Beh\u00f6rde, der Personalausweis, umweltfreundlich, das Vorstellungsgespr\u00e4ch.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'Mixed revision of wenn, reflexives, prepositions and verb pairs.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Goethe-style reading: a job ad, an apartment listing, a notice.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Goethe-style listening: announcements, office and appointment scenes.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'The three Goethe A2 parts: introduce, describe, plan together.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Goethe-style writing: an email, an invitation, a cancellation \u2014 with model answers.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Mixed drills across the whole of Phase 2 with instant feedback.' },
    { id: 'quiz',       label: 'Mock Test',  tag: 'assess',
      objective: 'Six mixed questions. Pass to bank the full 200 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Your estimated score, strengths, weaknesses and revision plan.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download checkpoint resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcdd', title: 'Mock Test PDF',
      desc: 'A full Goethe-A2-style mini mock \u2014 H\u00f6ren, Lesen, Schreiben, Sprechen \u2014 with an answer key and a score band.',
      pdfUrl: '/pdfs/homework.pdf', size: '14 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Phase 2 Grammar Recap PDF',
      desc: 'One-page summaries: wenn, reflexive verbs, dative prepositions, two-way prepositions, position/direction verbs.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' },
    { icon: '\ud83d\udcda', title: 'Exam Vocabulary PDF',
      desc: 'The checkpoint\u2019s admin, travel and job words \u2014 die Beh\u00f6rde, der Personalausweis, das Vorstellungsgespr\u00e4ch \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' }
  ],

  outcomes: [
    { de: 'H\u00f6ren \u00b7 Lesen', text: 'Handle Goethe-A2 listening & reading' },
    { de: 'Schreiben', text: 'Write a clean A2 email / invitation' },
    { de: 'Sprechen (Teil 1\u20133)', text: 'Introduce, describe a picture, plan together' },
    { de: 'wenn \u00b7 reflexiv \u00b7 Dativ', text: 'Apply Phase 2 grammar under time pressure' },
    { de: 'Punktzahl & Plan', text: 'Get an estimated score and a revision plan' }
  ],

  // ---------- Vocabulary (~60 items \u2014 this chapter's exam set) ----------
  vocab: [
    // ===== Authorities & documents =====
    { de: 'Beh\u00f6rde', art: 'die', gender: 'f', plural: 'Beh\u00f6rden', pos: 'noun', en: 'authority, government agency', hi: 'सरकारी विभाग', ex: 'Wenn ich Zeit habe, gehe ich zur Beh\u00f6rde.', exEn: 'When I have time, I go to the authority.' },
    { de: 'Personalausweis', art: 'der', gender: 'm', plural: 'Personalausweise', pos: 'noun', en: 'ID card', hi: 'पहचान पत्र', ex: 'Ich muss einen Personalausweis beantragen.', exEn: 'I have to apply for an ID card.' },
    { de: 'Bescheid', art: 'der', gender: 'm', plural: 'Bescheide', pos: 'noun', en: 'notification, official reply', hi: 'सूचना', ex: 'Der Bescheid von der Beh\u00f6rde kommt per Post.', exEn: 'The notification from the authority comes by post.' },
    { de: 'Einb\u00fcrgerung', art: 'die', gender: 'f', plural: 'Einb\u00fcrgerungen', pos: 'noun', en: 'naturalisation', hi: 'नागरिकता', ex: 'F\u00fcr die Einb\u00fcrgerung braucht man viele Unterlagen.', exEn: 'For naturalisation you need many documents.' },
    { de: 'Bezahlung', art: 'die', gender: 'f', plural: 'Bezahlungen', pos: 'noun', en: 'payment', hi: 'भुगतान', ex: 'Die Bezahlung ist am Automaten m\u00f6glich.', exEn: 'Payment is possible at the machine.' },
    { de: 'Artikel', art: 'der', gender: 'm', plural: 'Artikel', pos: 'noun', en: 'article', hi: 'लेख', ex: 'Ich lese einen Artikel \u00fcber die Einb\u00fcrgerung.', exEn: 'I read an article about naturalisation.' },
    { de: 'Stellenanzeige', art: 'die', gender: 'f', plural: 'Stellenanzeigen', pos: 'noun', en: 'job advertisement', hi: 'नौकरी विज्ञापन', ex: 'Die Stellenanzeige steht in der Zeitung.', exEn: 'The job ad is in the newspaper.' },
    { de: 'Vorstellungsgespr\u00e4ch', art: 'das', gender: 'n', plural: 'Vorstellungsgespr\u00e4che', pos: 'noun', en: 'job interview', hi: 'साक्षात्कार', ex: 'Ich bereite mich auf das Vorstellungsgespr\u00e4ch vor.', exEn: 'I prepare for the job interview.' },
    { de: 'Probetag', art: 'der', gender: 'm', plural: 'Probetage', pos: 'noun', en: 'trial day', hi: 'परख दिवस', ex: 'Am Probetag zeige ich, was ich kann.', exEn: 'On the trial day I show what I can do.' },
    { de: 'Bordcomputer', art: 'der', gender: 'm', plural: 'Bordcomputer', pos: 'noun', en: 'on-board computer', hi: 'ऑनबोर्ड कंप्यूटर', ex: 'Der Bordcomputer zeigt die Richtung an.', exEn: 'The on-board computer shows the direction.' },
    { de: 'Platzreservierung', art: 'die', gender: 'f', plural: 'Platzreservierungen', pos: 'noun', en: 'seat reservation', hi: 'सीट आरक्षण', ex: 'Die Platzreservierung steht auf dem Ticket.', exEn: 'The seat reservation is on the ticket.' },
    { de: 'Stra\u00dfenreinigung', art: 'die', gender: 'f', plural: 'Stra\u00dfenreinigungen', pos: 'noun', en: 'street cleaning', hi: 'सड़क सफ़ाई', ex: 'Wegen der Stra\u00dfenreinigung darf man hier nicht parken.', exEn: 'Because of the street cleaning you can\u2019t park here.' },
    // ===== City & travel =====
    { de: 'Innenstadt', art: 'die', gender: 'f', plural: 'Innenst\u00e4dte', pos: 'noun', en: 'city centre', hi: 'शहर का केंद्र', ex: 'Die Firma liegt in der Innenstadt.', exEn: 'The company is in the city centre.' },
    { de: 'Dom', art: 'der', gender: 'm', plural: 'Dome', pos: 'noun', en: 'cathedral', hi: 'गिरजाघर', ex: 'Neben dem Dom steht die Seilbahn.', exEn: 'Next to the cathedral is the cable car.' },
    { de: 'Seilbahn', art: 'die', gender: 'f', plural: 'Seilbahnen', pos: 'noun', en: 'cable car', hi: 'रोपवे', ex: 'Ich fahre mit der Seilbahn in die Stadt.', exEn: 'I take the cable car into the city.' },
    { de: 'Stadtplan', art: 'der', gender: 'm', plural: 'Stadtpl\u00e4ne', pos: 'noun', en: 'city map', hi: 'शहर का नक्शा', ex: 'Der Stadtplan h\u00e4ngt an der Wand.', exEn: 'The city map hangs on the wall.' },
    { de: 'Richtung', art: 'die', gender: 'f', plural: 'Richtungen', pos: 'noun', en: 'direction', hi: 'दिशा', ex: 'In welche Richtung f\u00e4hrt der Bus?', exEn: 'In which direction does the bus go?' },
    { de: 'Grenze', art: 'die', gender: 'f', plural: 'Grenzen', pos: 'noun', en: 'border', hi: 'सीमा', ex: 'Der Zug f\u00e4hrt \u00fcber die Grenze.', exEn: 'The train goes across the border.' },
    { de: 'Schlange', art: 'die', gender: 'f', plural: 'Schlangen', pos: 'noun', en: 'queue; snake', hi: 'कतार', ex: 'An der Beh\u00f6rde steht eine lange Schlange.', exEn: 'At the authority there\u2019s a long queue.' },
    { de: 'M\u00fclltonne', art: 'die', gender: 'f', plural: 'M\u00fclltonnen', pos: 'noun', en: 'rubbish bin', hi: 'कूड़ेदान', ex: 'Die M\u00fclltonne steht hinter dem Haus.', exEn: 'The rubbish bin stands behind the house.' },
    { de: 'Abflug', art: 'der', gender: 'm', plural: 'Abfl\u00fcge', pos: 'noun', en: 'departing flight', hi: 'प्रस्थान उड़ान', ex: 'Der Abflug ist um zehn Uhr.', exEn: 'The departure is at ten o\u2019clock.' },
    // ===== Vehicles & tech =====
    { de: 'Diesel', art: 'der', gender: 'm', plural: '\u2014', pos: 'noun', en: 'diesel (car/fuel)', hi: 'डीज़ल', ex: 'Der Diesel ist nicht umweltfreundlich.', exEn: 'The diesel isn\u2019t environmentally friendly.' },
    { de: 'Reifen', art: 'der', gender: 'm', plural: 'Reifen', pos: 'noun', en: 'tyre', hi: 'टायर', ex: 'Der Reifen ist kaputt, wir brauchen die Werkstatt.', exEn: 'The tyre is broken, we need the garage.' },
    // ===== People & roles =====
    { de: 'Politiker', art: 'der', gender: 'm', plural: 'Politiker', pos: 'noun', en: 'politician', hi: 'राजनेता', ex: 'Der Politiker hat den Plan genehmigt.', exEn: 'The politician approved the plan.' },
    { de: 'Experte', art: 'der', gender: 'm', plural: 'Experten', pos: 'noun', en: 'expert', hi: 'विशेषज्ञ', ex: 'Der Experte erkl\u00e4rt das neue Gesetz.', exEn: 'The expert explains the new law.' },
    { de: 'Fan', art: 'der', gender: 'm', plural: 'Fans', pos: 'noun', en: 'fan', hi: 'प्रशंसक', ex: 'Als Fan reise ich zu jedem Spiel.', exEn: 'As a fan I travel to every game.' },
    { de: 'Touristin', art: 'die', gender: 'f', plural: 'Touristinnen', pos: 'noun', en: 'tourist (f.)', hi: 'पर्यटक', ex: 'Die Touristin fragt nach dem Weg zum Dom.', exEn: 'The tourist asks the way to the cathedral.' },
    { de: 'Radfahrer', art: 'der', gender: 'm', plural: 'Radfahrer', pos: 'noun', en: 'cyclist', hi: 'साइकिल चालक', ex: 'Der Radfahrer f\u00e4hrt auf dem Radweg.', exEn: 'The cyclist rides on the cycle path.' },
    { de: 'Kaiserin', art: 'die', gender: 'f', plural: 'Kaiserinnen', pos: 'noun', en: 'empress', hi: 'महारानी', ex: 'Die Statue zeigt eine Kaiserin.', exEn: 'The statue shows an empress.' },
    { de: 'Feuerwehr', art: 'die', gender: 'f', plural: 'Feuerwehren', pos: 'noun', en: 'fire brigade', hi: 'दमकल', ex: 'Die Feuerwehr muss immer durchkommen.', exEn: 'The fire brigade must always get through.' },
    { de: 'Gefallen', art: 'der', gender: 'm', plural: 'Gefallen', pos: 'noun', en: 'favour', hi: 'एहसान', ex: 'Kannst du mir einen Gefallen tun?', exEn: 'Can you do me a favour?' },
    // ===== Verbs =====
    { de: 'abgeben', pos: 'verb', en: 'to submit, to hand in (separable)', hi: 'जमा करना', ex: 'Ich gebe das Formular bei der Beh\u00f6rde ab.', exEn: 'I hand in the form at the authority.', conj: { praesens: 'gibt ab', praeteritum: 'gab ab', perfekt: 'hat abgegeben' } },
    { de: 'ausf\u00fcllen', pos: 'verb', en: 'to fill in (separable)', hi: 'भरना', ex: 'F\u00fcll bitte das Formular aus.', exEn: 'Please fill in the form.', conj: { praesens: 'f\u00fcllt aus', praeteritum: 'f\u00fcllte aus', perfekt: 'hat ausgef\u00fcllt' } },
    { de: 'erfragen', pos: 'verb', en: 'to ask for, to find out', hi: 'पूछकर पता करना', ex: 'Ich erfrage die \u00d6ffnungszeiten telefonisch.', exEn: 'I find out the opening hours by phone.', conj: { praesens: 'erfragt', praeteritum: 'erfragte', perfekt: 'hat erfragt' } },
    { de: 'erreichen', pos: 'verb', en: 'to reach', hi: 'पहुँचना, संपर्क करना', ex: 'Ich erreiche den Kundenservice nicht.', exEn: 'I can\u2019t reach customer service.', conj: { praesens: 'erreicht', praeteritum: 'erreichte', perfekt: 'hat erreicht' } },
    { de: 'er\u00f6ffnen', pos: 'verb', en: 'to open (an account, a shop)', hi: 'खोलना', ex: 'Ich er\u00f6ffne ein Konto bei der Bank.', exEn: 'I open an account at the bank.', conj: { praesens: 'er\u00f6ffnet', praeteritum: 'er\u00f6ffnete', perfekt: 'hat er\u00f6ffnet' } },
    { de: 'beschützen', pos: 'verb', en: 'to protect', hi: 'रक्षा करना', ex: 'Die Feuerwehr besch\u00fctzt die Stadt.', exEn: 'The fire brigade protects the city.', conj: { praesens: 'besch\u00fctzt', praeteritum: 'besch\u00fctzte', perfekt: 'hat besch\u00fctzt' } },
    { de: 'genehmigen', pos: 'verb', en: 'to approve', hi: 'मंज़ूर करना', ex: 'Der Politiker genehmigt den Plan.', exEn: 'The politician approves the plan.', conj: { praesens: 'genehmigt', praeteritum: 'genehmigte', perfekt: 'hat genehmigt' } },
    { de: 'landen', pos: 'verb', en: 'to land', hi: 'उतरना', ex: 'Das Flugzeug landet um acht Uhr.', exEn: 'The plane lands at eight.', conj: { praesens: 'landet', praeteritum: 'landete', perfekt: 'ist gelandet' } },
    { de: 'l\u00f6sen', pos: 'verb', en: 'to solve', hi: 'हल करना', ex: 'Wir l\u00f6sen das Verkehrsproblem zusammen.', exEn: 'We solve the traffic problem together.', conj: { praesens: 'l\u00f6st', praeteritum: 'l\u00f6ste', perfekt: 'hat gel\u00f6st' } },
    { de: 'machen', pos: 'verb', en: 'to make, to cause', hi: 'करना, पैदा करना', ex: 'Der L\u00e4rm macht mir Stress.', exEn: 'The noise causes me stress.', conj: { praesens: 'macht', praeteritum: 'machte', perfekt: 'hat gemacht' } },
    { de: 'pr\u00fcfen', pos: 'verb', en: 'to check', hi: 'जाँचना', ex: 'Die Beamtin pr\u00fcft meine Unterlagen.', exEn: 'The official checks my documents.', conj: { praesens: 'pr\u00fcft', praeteritum: 'pr\u00fcfte', perfekt: 'hat gepr\u00fcft' } },
    { de: 'registrieren', pos: 'verb', en: 'to register', hi: 'पंजीकरण करना', ex: 'Ich registriere mich online.', exEn: 'I register online.', conj: { praesens: 'registriert', praeteritum: 'registrierte', perfekt: 'hat registriert' } },
    { de: 'sperren', pos: 'verb', en: 'to block, to close off', hi: 'बंद करना', ex: 'Wir sperren die Innenstadt f\u00fcr Autos.', exEn: 'We close the city centre to cars.', conj: { praesens: 'sperrt', praeteritum: 'sperrte', perfekt: 'hat gesperrt' } },
    { de: 'versprechen', pos: 'verb', en: 'to promise', hi: 'वादा करना', ex: 'Ich verspreche, p\u00fcnktlich zu sein.', exEn: 'I promise to be on time.', conj: { praesens: 'verspricht', praeteritum: 'versprach', perfekt: 'hat versprochen' } },
    { de: 'vorbeigehen', pos: 'verb', en: 'to walk past (separable)', hi: 'पास से गुज़रना', ex: 'Ich gehe an der Beh\u00f6rde vorbei.', exEn: 'I walk past the authority.', conj: { praesens: 'geht vorbei', praeteritum: 'ging vorbei', perfekt: 'ist vorbeigegangen' } },
    { de: 'weitergehen', pos: 'verb', en: 'to go on, to continue (separable)', hi: 'आगे बढ़ना', ex: 'Nach der Pause geht es weiter.', exEn: 'After the break it continues.', conj: { praesens: 'geht weiter', praeteritum: 'ging weiter', perfekt: 'ist weitergegangen' } },
    // ===== Adjectives / adverbs / phrases =====
    { de: 'allgemein', pos: 'adjective', en: 'general', hi: 'सामान्य', ex: 'Der Artikel gibt allgemeine Informationen.', exEn: 'The article gives general information.' },
    { de: 'n\u00f6tig', pos: 'adjective', en: 'necessary', hi: 'आवश्यक', ex: 'Ein Personalausweis ist n\u00f6tig.', exEn: 'An ID card is necessary.' },
    { de: 'sinnvoll', pos: 'adjective', en: 'sensible, meaningful', hi: 'समझदारी भरा', ex: 'Ein autofreier Tag ist sinnvoll.', exEn: 'A car-free day is sensible.' },
    { de: 'umweltfreundlich', pos: 'adjective', en: 'environmentally friendly', hi: 'पर्यावरण-हितैषी', ex: 'Die Seilbahn ist umweltfreundlich.', exEn: 'The cable car is environmentally friendly.' },
    { de: 'versichert', pos: 'adjective', en: 'insured', hi: 'बीमाकृत', ex: 'Mein Auto ist versichert.', exEn: 'My car is insured.' },
    { de: 'etwa', pos: 'adverb', en: 'approximately, about', hi: 'लगभग', ex: 'Die Fahrt dauert etwa zwanzig Minuten.', exEn: 'The trip takes about twenty minutes.' },
    { de: 'vorw\u00e4rts', pos: 'adverb', en: 'forward', hi: 'आगे की ओर', ex: 'Der Radfahrer f\u00e4hrt vorw\u00e4rts.', exEn: 'The cyclist rides forward.' },
    { de: 'r\u00fcckw\u00e4rts', pos: 'adverb', en: 'backward', hi: 'पीछे की ओर', ex: 'Das Auto f\u00e4hrt r\u00fcckw\u00e4rts in die L\u00fccke.', exEn: 'The car reverses into the space.' },
    { de: 'dazu', pos: 'adverb', en: 'in addition, to that', hi: 'इसके अलावा', ex: 'Dazu brauche ich noch ein Foto.', exEn: 'In addition I need a photo.' },
    { de: 'recht haben', pos: 'phrase', en: 'to be right', hi: 'सही होना', ex: 'Du hast recht \u2014 die Seilbahn ist besser.', exEn: 'You\u2019re right \u2014 the cable car is better.' },
    { de: 'an \u2026 vorbei', pos: 'phrase', en: 'past (an \u2026 vorbei)', hi: 'के पास से होकर', ex: 'Die Feuerwehr f\u00e4hrt an den B\u00e4nken vorbei.', exEn: 'The fire brigade drives past the benches.' },
    { de: 'Mensch', pos: 'phrase', en: 'jeez!, wow! (interjection)', hi: 'अरे!', ex: 'Mensch, das ist eine gute Idee!', exEn: 'Jeez, that\u2019s a good idea!' }
  ],

  // ---------- Grammar Review (mixed, Phase 2 focus) ----------
  grammar: [
    {
      title: 'wenn \u2014 condition, habit, future',
      body: [
        'A <span class="de r-wenn">wenn</span>-clause sends the verb to the end; if it comes first, the main clause starts with its verb (verb, comma, verb).'
      ],
      table: {
        head: ['Pattern', 'Example'],
        rows: [
          ['main + wenn', '<span class="de">Ich gehe zur Beh\u00f6rde, <span class="r-wenn">wenn</span> ich Zeit <span class="r-verb">habe</span>.</span>'],
          ['wenn first (inversion)', '<span class="de"><span class="r-wenn">Wenn</span> ich Zeit habe, <span class="r-verb">gehe</span> ich zur Beh\u00f6rde.</span>'],
          ['future (with Pr\u00e4sens)', '<span class="de"><span class="r-wenn">Wenn</span> der Bescheid kommt, rufe ich dich an.</span>']
        ]
      },
      note: 'Ch.11. Same verb-final rule as weil and dass. wenn = if / whenever / when (future).',
      hinglish: '<b>wenn</b>-clause mein verb sentence ke end mein aata hai. Aur agar <b>wenn</b> pehle aaye, to main clause apne verb se shuru hoti hai: <b>Wenn ich Zeit habe, gehe ich \u2026</b> (Ch.11)'
    },
    {
      title: 'Reflexive verbs \u2014 pronoun & position',
      body: [
        'Reflexive verbs keep their pronoun and form the Perfekt with <strong>haben</strong>.'
      ],
      table: {
        head: ['Case', 'Example'],
        rows: [
          ['simple', '<span class="de">Ich freue <span class="r-reflexiv">mich</span> auf den Probetag.</span>'],
          ['with modal', '<span class="de">Ich muss <span class="r-reflexiv">mich</span> vorbereiten.</span>'],
          ['Perfekt (haben)', '<span class="de">Ich habe <span class="r-reflexiv">mich</span> beeilt.</span>'],
          ['with object \u2192 Dativ', '<span class="de">Ich w\u00e4sche <span class="r-reflexiv">mir</span> die H\u00e4nde.</span>']
        ]
      },
      note: 'Ch.12. mich/dich/sich/uns/euch; only ich/du switch to mir/dir when there\u2019s already an object.',
      hinglish: 'Reflexive verb apna pronoun leta hai (<b>mich, dich, sich</b> \u2026) aur Perfekt <b>haben</b> se banta hai. Agar sentence mein pehle se object ho, to <b>ich</b> aur <b>du</b> ke pronoun <b>mir</b> aur <b>dir</b> ban jaate hain. (Ch.12)'
    },
    {
      title: 'Dative prepositions & contractions',
      body: [
        'Nine prepositions are always dative; three contract in everyday use.'
      ],
      table: {
        head: ['Preposition / contraction', 'Example'],
        rows: [
          ['<span class="de r-preposition">mit, bei, seit, von, zu \u2026</span>', '<span class="de">Ich fahre mit <span class="r-dativ">der</span> Seilbahn.</span>'],
          ['<span class="de r-preposition">zum</span> (zu + dem)', '<span class="de">Ich gehe zum Dom.</span>'],
          ['<span class="de r-preposition">zur</span> (zu + der)', '<span class="de">Ich gehe zur Beh\u00f6rde.</span>'],
          ['<span class="de r-preposition">vom</span> (von + dem)', '<span class="de">Ich komme vom Amt.</span>']
        ]
      },
      note: 'Ch.13. aus, au\u00dfer, bei, mit, nach, seit, von, zu, gegen\u00fcber \u2192 always Dativ.',
      hinglish: 'Nau prepositions apne baad Dativ lete hain: <b>aus, au\u00dfer, bei, mit, nach, seit, von, zu, gegen\u00fcber</b>. Rozmarra mein inke contractions bahut common hain: <b>zum</b>, <b>zur</b>, <b>vom</b>. (Ch.13)'
    },
    {
      title: 'Two-way prepositions & verb pairs',
      body: [
        'Nine prepositions take either case: <span class="de r-question">Wohin?</span> (movement) \u2192 Akkusativ; <span class="de r-question">Wo?</span> (location) \u2192 Dativ. The verb pair matches.'
      ],
      table: {
        head: ['Movement \u2192 Akk. (direction verb)', 'Location \u2192 Dat. (position verb)'],
        rows: [
          ['<span class="de">Ich stelle die Bank auf <span class="r-akkusativ">den</span> Platz.</span>', '<span class="de">Die Bank steht auf <span class="r-dativ">dem</span> Platz.</span>'],
          ['<span class="de">Ich lege das Formular auf <span class="r-akkusativ">den</span> Tisch.</span>', '<span class="de">Das Formular liegt auf <span class="r-dativ">dem</span> Tisch.</span>'],
          ['<span class="de">Ich h\u00e4nge den Plan an <span class="r-akkusativ">die</span> Wand.</span>', '<span class="de">Der Plan h\u00e4ngt an <span class="r-dativ">der</span> Wand.</span>']
        ]
      },
      note: 'Ch.14\u201315. Ask: moving (wohin? \u2192 Akk, stellen/legen/setzen/h\u00e4ngen) or already there (wo? \u2192 Dat, stehen/liegen/sitzen/h\u00e4ngen)?',
      hinglish: 'Wechselpr\u00e4positionen ke saath ek sawaal poochho. Agar kahin jaana ya kuch rakhna hai (<b>Wohin?</b>), to Akkusativ aayega aur verb <b>stellen</b> ya <b>legen</b> jaisa hoga. Agar batana hai ki cheez kahaan hai (<b>Wo?</b>), to Dativ aayega aur verb <b>stehen</b> ya <b>liegen</b> hoga. (Ch.14\u201315)'
    },
    {
      title: 'From Phase 1 \u2014 still tested',
      body: [ 'The checkpoint also recycles earlier grammar. Keep these sharp.' ],
      table: {
        head: ['Point', 'Example'],
        rows: [
          ['weil / dass (verb last)', '<span class="de">Ich glaube, <span class="r-dass">dass</span> die Seilbahn besser <span class="r-verb">ist</span>.</span>'],
          ['Modal past', '<span class="de">Ich <span class="r-modalverb">musste</span> zur Beh\u00f6rde.</span>'],
          ['Komparativ + als', '<span class="de">Die Seilbahn ist besser <span class="r-vergleich">als</span> der Diesel.</span>'],
          ['(genau)so \u2026 wie', '<span class="de">Der Bus ist genauso schnell <span class="r-vergleich">wie</span> das Auto.</span>']
        ]
      },
      note: 'Ch.4\u20139. weil/dass send the verb to the end; als = "than", wie = "as \u2026 as".',
      hinglish: 'Checkpoint mein Phase 1 bhi aata hai, isliye yeh cheezein taiyaar rakho: <b>weil</b> aur <b>dass</b> (jinme verb sentence ke end mein jaata hai), modals ka past, Komparativ ke saath <b>als</b>, aur equality ke liye <b>(genau)so \u2026 wie</b>. (Ch.4\u20139)'
    }
  ],

  // ---------- Reading (Goethe-style: job ad, clickable) ----------
  reading: {
    title: 'Stellenanzeige: Fahrer/in f\u00fcr die Seilbahn',
    titleEn: 'Job ad: driver for the cable car',
    tokens: [
      { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Stadt', role: 'r-subject', en: 'city', hi: 'शहर', pron: 'shtat', type: 'Noun \u00b7 fem.', why: 'die Stadt (recycled \u2014 Ort).', ex: 'die Stadt', exEn: 'the city' },
      { w: 'sucht', role: 'r-verb', en: 'seeks', hi: 'ढूँढ रही है', pron: 'zookht', type: 'Verb \u00b7 suchen' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'INE-uh', type: 'Article \u00b7 acc.' },
      { w: 'Fahrerin', role: 'r-object', en: 'driver (f.)', hi: 'चालक', pron: 'FAH-ruh-rin', type: 'Noun \u00b7 fem.', why: 'die Fahrerin (recycled \u2014 Wechselpr\u00e4p.).', ex: 'eine Fahrerin', exEn: 'a driver' },
      { w: 'f\u00fcr', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'f\u00fcr', type: 'Preposition' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'इस', pron: 'dee', type: 'Article \u00b7 acc.' },
      { w: 'Seilbahn', role: 'r-object', en: 'cable car', hi: 'रोपवे', pron: 'ZILE-bahn', type: 'Noun \u00b7 fem.', why: 'die Seilbahn (this chapter).', ex: 'die Seilbahn', exEn: 'the cable car' },
      { w: 'in', role: 'r-wechsel', en: 'in', hi: 'में', pron: 'in', type: 'Wechselpr\u00e4position', why: 'in + Dativ (location) (recycled \u2014 Wechselpr\u00e4p.).', ex: 'in der Innenstadt', exEn: 'in the city centre' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article \u00b7 dative' },
      { w: 'Innenstadt', role: 'r-dativ', en: 'city centre', hi: 'शहर का केंद्र', pron: 'I-nen-shtat', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Innenstadt (this chapter).', ex: 'in der Innenstadt', exEn: 'in the city centre' },
      { w: '.', plain: true },
      { w: 'Wenn', role: 'r-wenn', en: 'if', hi: 'अगर', pron: 'ven', type: 'Conjunction \u00b7 wenn', why: 'wenn \u2192 verb last (recycled \u2014 wenn Ch.11).', ex: 'wenn Sie Interesse haben', exEn: 'if you\u2019re interested' },
      { w: 'Sie', role: 'r-subject', en: 'you', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'Interesse', role: 'r-object', en: 'interest', hi: 'रुचि', pron: 'in-te-RE-suh', type: 'Noun \u00b7 neut.', why: 'das Interesse (recycled \u2014 A1).', ex: 'Interesse haben', exEn: 'to be interested' },
      { w: 'haben', role: 'r-verb', en: 'have', hi: 'हो', pron: 'HAH-ben', type: 'Verb \u00b7 haben', why: 'conjugated verb last after wenn (recycled \u2014 wenn Ch.11).', ex: '\u2026, wenn Sie Interesse haben.', exEn: '\u2026 if you\u2019re interested.' },
      { w: ',', plain: true },
      { w: 'f\u00fcllen', role: 'r-verb', en: 'fill in', hi: 'भरें', pron: 'F\u00dC-len', type: 'Verb \u00b7 ausf\u00fcllen', why: 'ausf\u00fcllen (this chapter).', ex: 'das Formular ausf\u00fcllen', exEn: 'to fill in the form' },
      { w: 'Sie', role: 'r-subject', en: 'you', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'इस', pron: 'das', type: 'Article \u00b7 acc.' },
      { w: 'Formular', role: 'r-object', en: 'form', hi: 'फ़ॉर्म', pron: 'for-mu-LAR', type: 'Noun \u00b7 neut.', why: 'das Formular (recycled \u2014 Amt).', ex: 'das Formular', exEn: 'the form' },
      { w: 'aus', role: 'r-verb', en: '(prefix)', hi: '—', pron: 'ows', type: 'Prefix \u00b7 ausf\u00fcllen' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'geben', role: 'r-verb', en: 'submit', hi: 'जमा करें', pron: 'GAY-ben', type: 'Verb \u00b7 abgeben', why: 'abgeben (this chapter).', ex: 'das Formular abgeben', exEn: 'to submit the form' },
      { w: 'Sie', role: 'r-subject', en: 'you', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'इसे', pron: 'es', type: 'Pronoun \u00b7 acc.' },
      { w: 'bei', role: 'r-preposition', en: 'at', hi: 'के पास', pron: 'by', type: 'Pr\u00e4position \u00b7 Dativ', why: 'bei + Dativ (recycled \u2014 Dativ-Pr\u00e4p. Ch.13).', ex: 'bei der Beh\u00f6rde', exEn: 'at the authority' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article \u00b7 dative' },
      { w: 'Beh\u00f6rde', role: 'r-dativ', en: 'authority', hi: 'विभाग', pron: 'buh-H\u00d6R-duh', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Beh\u00f6rde (this chapter).', ex: 'bei der Beh\u00f6rde', exEn: 'at the authority' },
      { w: 'ab', role: 'r-verb', en: '(prefix)', hi: '—', pron: 'ap', type: 'Prefix \u00b7 abgeben' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Probetag', role: 'r-subject', en: 'trial day', hi: 'परख दिवस', pron: 'PRO-buh-tahk', type: 'Noun \u00b7 masc.', why: 'der Probetag (this chapter).', ex: 'der Probetag', exEn: 'the trial day' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'wichtiger', role: 'r-adjective', en: 'more important', hi: 'ज़्यादा महत्वपूर्ण', pron: 'VIKH-ti-ger', type: 'Komparativ \u00b7 wichtig', why: 'wichtig \u2192 wichtiger (recycled \u2014 Komparativ Ch.8).', ex: 'wichtiger als \u2026', exEn: 'more important than \u2026' },
      { w: 'als', role: 'r-vergleich', en: 'than', hi: 'से', pron: 'als', type: 'Comparison \u00b7 difference', why: 'Komparativ + als (recycled \u2014 als/wie Ch.9).', ex: 'wichtiger als das Gespr\u00e4ch', exEn: 'more important than the interview' },
      { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article' },
      { w: 'Gespr\u00e4ch', role: 'r-object', en: 'interview', hi: 'बातचीत', pron: 'guh-SHPRAYKH', type: 'Noun \u00b7 neut.', why: 'das Gespr\u00e4ch (recycled \u2014 Smalltalk).', ex: 'das Gespr\u00e4ch', exEn: 'the interview' },
      { w: '.', plain: true },
      { w: 'Man', role: 'r-subject', en: 'one', hi: 'आप', pron: 'man', type: 'Pronoun' },
      { w: 'muss', role: 'r-modalverb', en: 'must', hi: 'चाहिए', pron: 'mus', type: 'Modalverb \u00b7 m\u00fcssen' },
      { w: 'sich', role: 'r-reflexiv', en: 'oneself', hi: 'खुद को', pron: 'zikh', type: 'Reflexivpronomen \u00b7 Akk.', why: 'sich vorbereiten \u2014 reflexive (recycled \u2014 Reflexive Ch.12).', ex: 'sich vorbereiten', exEn: 'to prepare' },
      { w: 'gut', role: 'r-adverb', en: 'well', hi: 'अच्छे से', pron: 'goot', type: 'Adverb' },
      { w: 'vorbereiten', role: 'r-verb', en: 'prepare', hi: 'तैयारी करना', pron: 'FOR-buh-ry-ten', type: 'Infinitive', why: 'infinitive at the end after the modal (recycled \u2014 Reflexive Ch.12).', ex: 'sich vorbereiten', exEn: 'to prepare' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-weil', en: 'because', hi: 'क्योंकि', pron: 'vile', type: 'Conjunction \u00b7 weil', why: 'weil \u2192 verb last (recycled \u2014 weil Ch.4).', ex: 'weil die Arbeit wichtig ist', exEn: 'because the job is important' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Bezahlung', role: 'r-subject', en: 'payment, pay', hi: 'भुगतान', pron: 'buh-TSAH-lung', type: 'Noun \u00b7 fem.', why: 'die Bezahlung (this chapter).', ex: 'die Bezahlung', exEn: 'the pay' },
      { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein', why: 'conjugated verb last after weil (recycled \u2014 weil Ch.4).', ex: '\u2026, weil die Bezahlung gut ist.', exEn: '\u2026 because the pay is good.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Arbeit', role: 'r-subject', en: 'work', hi: 'काम', pron: 'AR-bite', type: 'Noun \u00b7 fem.', why: 'die Arbeit (recycled \u2014 Arbeit).', ex: 'die Arbeit', exEn: 'the work' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'umweltfreundlich', role: 'r-adjective', en: 'environmentally friendly', hi: 'पर्यावरण-हितैषी', pron: 'UM-velt-froynt-likh', type: 'Adjective', why: 'umweltfreundlich (this chapter).', ex: 'umweltfreundlich', exEn: 'green' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'sinnvoll', role: 'r-adjective', en: 'meaningful', hi: 'सार्थक', pron: 'ZIN-fol', type: 'Adjective', why: 'sinnvoll (this chapter).', ex: 'sinnvoll', exEn: 'meaningful' },
      { w: '.', plain: true }
    ],
    translation: 'The city is seeking a driver for the cable car in the city centre. If you\u2019re interested, fill in the form and submit it at the authority. The trial day is more important than the interview. You have to prepare well, because the pay is good. The work is environmentally friendly and meaningful.'
  },

  // ---------- Listening (Goethe-style) ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_016_L001', speaker: 'Frau Wolter', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Frau Wolter, wenn ich die Prüfung nicht bestehe, was passiert dann?', en: 'Frau Wolter, if I don\'t pass the exam, what happens then?' },
      { id: 'A2_016_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Keine Sorge, du kannst sie einfach wiederholen.', en: 'Don\'t worry, you can simply retake it.' },
      { id: 'A2_016_L003', speaker: 'Frau Wolter', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gut. Ich freue mich schon darauf, es zu schaffen.', en: 'Good. I\'m already looking forward to managing it.' },
      { id: 'A2_016_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Seit dieser Woche übst du sehr fleißig. Das sehe ich.', en: 'You\'ve been practicing very diligently since this week. I can see that.' }
    ],
    transcript: 'Frau Wolter, wenn ich die Prüfung nicht bestehe, was passiert dann? Keine Sorge, du kannst sie einfach wiederholen. Gut. Ich freue mich schon darauf, es zu schaffen. Seit dieser Woche übst du sehr fleißig. Das sehe ich.',
    translation: 'Frau Wolter, if I don\'t pass the exam, what happens then? Don\'t worry, you can simply retake it. Good. I\'m already looking forward to managing it. You\'ve been practicing very diligently since this week. I can see that.',
    tokens: [
      { w: 'Frau' },
      { w: 'Wolter' },
      { w: ',', plain: true },
      { w: 'wenn' },
      { w: 'ich' },
      { w: 'die' },
      { w: 'Prüfung' },
      { w: 'nicht' },
      { w: 'bestehe' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'passiert' },
      { w: 'dann' },
      { w: '?', plain: true },
      { w: 'Keine' },
      { w: 'Sorge' },
      { w: ',', plain: true },
      { w: 'du' },
      { w: 'kannst' },
      { w: 'sie' },
      { w: 'einfach' },
      { w: 'wiederholen' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'freue' },
      { w: 'mich' },
      { w: 'schon' },
      { w: 'darauf' },
      { w: ',', plain: true },
      { w: 'es' },
      { w: 'zu' },
      { w: 'schaffen' },
      { w: '.', plain: true },
      { w: 'Seit' },
      { w: 'dieser' },
      { w: 'Woche' },
      { w: 'übst' },
      { w: 'du' },
      { w: 'sehr' },
      { w: 'fleißig' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'sehe' },
      { w: 'ich' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was kann Timo machen, wenn er durchfällt?', qEn: 'What can Timo do if he fails?', options: ['nichts', 'die Prüfung wiederholen', 'den Kurs verlassen', 'warten'], optionsEn: ['nothing', 'retake the exam', 'leave the course', 'wait'], answer: 1,
        explain: '"Du kannst sie einfach wiederholen."' },
      { q: 'Wie beschreibt Frau Wolter Timos Einsatz?', qEn: 'How does Frau Wolter describe Timo\'s effort?', options: ['faul', 'fleißig', 'müde', 'unsicher'], optionsEn: ['lazy', 'hard-working', 'tired', 'unsure'], answer: 1,
        explain: '"Seit dieser Woche übst du sehr fleißig."' }
    ]
  },

  speaking: [
    { task: "Prüfung, Teil 1: Stell dich vor und sag, was du beruflich machst.", taskEn: "Exam, Part 1: introduce yourself and say what you do for a living.", de: "Ich heiße Timo. Ich arbeite als Aushilfe und suche eine neue Stelle.", en: "My name is Timo. I work as a temp and I'm looking for a new job." },
    { task: "Prüfung, Teil 2: Beschreibe ein Bild — die Innenstadt mit dem Dom.", taskEn: "Exam, Part 2: describe a picture — the city centre with the cathedral.", de: "Auf dem Bild sieht man den Dom. Vor dem Dom stehen viele Touristen.", en: "In the picture you can see the cathedral. Many tourists are standing in front of it." },
    { task: "Prüfung, Teil 3: Deine Partnerin fragt nach dem Vorstellungsgespräch.", taskEn: "Exam, Part 3: your partner asks about the job interview.", de: "Das Vorstellungsgespräch war gut. Nächste Woche habe ich einen Probetag.", en: "The interview went well. Next week I have a trial day." },
    { task: "Prüfung, Teil 3: Plant zusammen einen Ausflug in die Innenstadt.", taskEn: "Exam, Part 3: plan a trip into the city centre together.", de: "Wir nehmen die Seilbahn und treffen uns am Stadtplan beim Dom.", en: "Let's take the cable car and meet at the city map by the cathedral." }
  ],

  // ---------- Writing (Goethe tasks + model answers) ----------
  writing: {
    prompt: 'Goethe A2 writing. Choose ONE task and write ~40 words. (1) EMAIL: invite a friend to your car-free city day \u2014 say when, where and how to get there. (2) CANCELLATION: write to the Beh\u00f6rde that you can\u2019t come to your appointment and ask for a new one. (3) REQUEST: ask a colleague for a favour before your Vorstellungsgespr\u00e4ch. Open and close politely, and use at least one wenn-clause and one reflexive verb. Model: "Liebe Anna, am Samstag mache ich einen autofreien Tag in der Innenstadt. Wenn du Zeit hast, komm mit der Seilbahn! Wir treffen uns um zehn am Dom. Ich freue mich sehr. Viele Gr\u00fc\u00dfe, Rohan."',
    starters: ['Liebe/r \u2026,', 'Sehr geehrte Damen und Herren,', 'Wenn du Zeit hast, \u2026', 'Ich freue mich \u2026'],
    placeholder: 'Liebe Anna, am Samstag \u2026 Wenn du Zeit hast, \u2026 Viele Gr\u00fc\u00dfe, \u2026',
    minWords: 40
  },

  // ---------- Exercises (4 types, mixed Phase 2) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct?',
      options: [
        'Wenn ich habe Zeit, gehe ich zur Beh\u00f6rde.',
        'Wenn ich Zeit habe, ich gehe zur Beh\u00f6rde.',
        'Wenn ich Zeit habe, gehe ich zur Beh\u00f6rde.',
        'Wenn ich Zeit habe, gehe ich zur Beh\u00f6rden.'
      ],
      answer: 2,
      explain: 'wenn-clause: verb last (habe); fronted \u2192 main clause starts with the verb (gehe ich); zu + der \u2192 zur Beh\u00f6rde.'
    },
    gap: {
      // two-way preposition: movement (acc) then location (dat)
      sentence: ['Ich stelle die Bank auf ', ' Platz, und jetzt steht sie auf ', ' Platz.'],
      gaps: [ { answer: 'den', accepts: ['den'] }, { answer: 'dem', accepts: ['dem'] } ],
      explain: 'Movement (wohin?) \u2192 Akkusativ (den); location (wo?) \u2192 Dativ (dem).'
    },
    match: {
      q: 'Match each grammar point to a correct example.',
      pairs: [
        { noun: 'wenn (Ch.11)', art: 'Wenn ich Zeit habe, \u2026' },
        { noun: 'reflexiv (Ch.12)', art: 'Ich freue mich.' },
        { noun: 'Dativ-Pr\u00e4p. (Ch.13)', art: 'mit der Seilbahn' },
        { noun: 'Wechselpr\u00e4p. (Ch.14)', art: 'in die Innenstadt (Akk.)' },
        { noun: 'Positionsverb (Ch.15)', art: 'Das Formular liegt da.' }
      ]
    },
    builder: {
      target: 'Build (reflexive + modal): "I have to prepare for the interview."',
      bank: ['Ich', 'muss', 'mich', 'auf', 'das', 'Gespr\u00e4ch', 'vorbereiten'],
      answer: ['Ich', 'muss', 'mich', 'auf', 'das', 'Gespr\u00e4ch', 'vorbereiten'],
      roles: { 'Ich': 'r-subject', 'muss': 'r-modalverb', 'mich': 'r-reflexiv', 'auf': 'r-preposition', 'das': 'r-akkusativ', 'Gespr\u00e4ch': 'r-object', 'vorbereiten': 'r-verb' }
    }
  },

  // ---------- Mock Test (6 mixed questions) ----------
  quiz: [
    { q: 'wenn-clause first: "___ ich Zeit habe, ___ ich zur Beh\u00f6rde."', options: ['Wenn / gehe', 'Weil / ich gehe', 'Wenn / ich gehe', 'Dass / gehe'], answer: 0,
      explain: 'Fronted wenn-clause \u2192 main clause starts with the verb: Wenn ich Zeit habe, gehe ich \u2026' },
    { q: 'Reflexive Perfekt: "Ich ___ mich gut vorbereitet."', options: ['bin', 'habe', 'hat', 'war'], answer: 1,
      explain: 'Reflexive verbs form the Perfekt with haben: Ich habe mich vorbereitet.' },
    { q: 'Dative preposition: "Ich fahre ___ Seilbahn." (with the)', options: ['mit die', 'mit der', 'mit den', 'mit dem'], answer: 1,
      explain: 'mit + dative; Seilbahn is feminine \u2192 der.' },
    { q: 'Two-way preposition, movement: "Ich h\u00e4nge den Plan ___ Wand."', options: ['an der', 'an die', 'an dem', 'an das'], answer: 1,
      explain: 'Movement (wohin?) \u2192 Akkusativ; Wand feminine \u2192 die.' },
    { q: 'Position vs direction: "Das Formular ___ auf dem Tisch."', options: ['legt', 'liegt', 'lege', 'legen'], answer: 1,
      explain: 'It\u2019s already there = position verb liegen + Dativ.' },
    { q: 'Comparison: "Die Seilbahn ist umweltfreundlicher ___ der Diesel."', options: ['wie', 'als', 'so', 'genauso'], answer: 1,
      explain: 'Komparativ + als for "than".' }
  ],

  // ---------- Summary / readiness ----------
  takeaways: [
    { c: 'r-wenn', html: 'Phase 2 in one place: <span class="de r-wenn">wenn</span> (verb last), reflexive verbs (pronoun + haben), the <span class="de r-preposition">dative prepositions</span>, the two-way prepositions and the position/direction verb pairs.' },
    { c: 'r-akkusativ', html: 'The big case test: <span class="de r-question">Wohin?</span> (movement) \u2192 <b>Akkusativ</b> + direction verb; <span class="de r-question">Wo?</span> (location) \u2192 <b>Dativ</b> + position verb.' },
    { c: 'r-verb', html: 'Exam habits: read the instruction, watch the clock, and check your endings \u2014 that\u2019s where A2 points are won or lost.' }
  ],
  revisionTips: [
    'Weak on word order? Redo Ch.11 (wenn) and re-read the weil/dass cards.',
    'Mixing the cases? Drill Ch.14\u201315: Wohin? \u2192 Akkusativ, Wo? \u2192 Dativ.',
    'For writing: open and close politely, keep sentences short, and use one wenn-clause and one reflexive verb.',
    'Readiness: if you scored 5\u20136 on the mock, you\u2019re ready for the real Goethe A2; 3\u20134, revise the two weakest chapters first.'
  ]
};

window.CHAPTER = CHAPTER;
