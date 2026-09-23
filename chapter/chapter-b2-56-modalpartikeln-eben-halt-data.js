/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 6 · Chapter 56
   "Modalpartikeln: eben / halt" — spoken-German particles for
   acceptance, resignation, explanation, and inevitability.
   "eben" = neutral, standard spoken German; "halt" = more
   colloquial. Does NOT teach eigentlich, wohl, denn, mal, bloß,
   ruhig (later chapters).
   IMPORTANT: dialogue uses ONLY Nike and Timo.
   Vocabulary source: uploaded Chapter 56 list (22 items).
============================================================ */
const CHAPTER = {
  id: 'b2-56-modalpartikeln-eben-halt',
  phase: 'B2 · Phase 6',
  number: 56,
  title: 'Modalpartikeln: eben / halt',
  titleEn: 'Modal particles: eben / halt',
  description: 'So ist das eben. So ist das halt. That\'s just how it is — accept it and move on.',
  xp: 700,
  time: 70,
  difficulty: 'Advanced',
  nextChapter: { number: 57, title: 'Textkohärenz: Verweiswörter', titleEn: 'Text coherence: reference words' , href: 'chapter-b2-57-textkohaerenz-verweiswoerter.html' },

  prevChapter: { number: 55, title: 'Modalpartikeln: doch / ja', titleEn: 'Modal particles: doch / ja', href: 'chapter-b2-55-modalpartikeln-doch-ja.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'That\'s just <em>how it is</em>.',
    intro: 'Nike is disappointed after a national-team loss and a nervous personal setback, and Timo shrugs it off with her — that\'s just how it goes, halt, eben — the two little words native speakers use to simply accept reality.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how eben and halt signal acceptance, not new facts'
    ],
    scene: 'Unerwartete Verzögerung',
    femaleSpeakers: ['Nike'],
    dialogue: [
      { speaker: 'Nike', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'eben', role: 'r-akkusativ', en: 'just', hi: 'बस', pron: 'AY-ben', type: 'Modalpartikel', why: 'eben = expresses resigned acceptance of an unchangeable fact (this chapter).', ex: 'Das war eben Pech.', exEn: 'That was just bad luck.' },
        { w: 'Pech', role: 'r-akkusativ', en: 'bad luck', hi: 'दुर्भाग्य', pron: 'pekh', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'That was just bad luck.', hi: 'Yeh bas durbhagya tha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Nationalmannschaft', role: 'r-subject', en: 'national team', hi: 'राष्ट्रीय टीम', pron: 'na-tsyo-NAHL-man-shaft', type: 'Noun · fem.', why: 'die Nationalmannschaft (this chapter).', ex: 'die Nationalmannschaft' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'halt', role: 'r-akkusativ', en: 'simply', hi: 'बस', pron: 'halt', type: 'Modalpartikel', why: 'halt = similar to eben, expresses matter-of-fact resignation (regional, this chapter).', ex: 'Sie war halt stärker.', exEn: 'They were simply stronger.' },
        { w: 'stärker', role: 'r-akkusativ', en: 'stronger', hi: 'ज़्यादा मज़बूत', pron: 'SHTER-ker', type: 'Adjective · Komparativ' },
        { w: '.', plain: true }
      ], en: 'Yes, the national team was simply stronger.', hi: 'Haan, rashtriya team bas zyada mazboot thi.' },
      { speaker: 'Nike', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'eben', role: 'r-akkusativ', en: 'just', hi: 'बस', pron: 'AY-ben', type: 'Modalpartikel' },
        { w: 'zu', role: 'r-adverb', en: 'too', hi: 'बहुत', pron: 'tsoo', type: 'Adverb' },
        { w: 'nervös', role: 'r-akkusativ', en: 'nervous', hi: 'घबराया हुआ', pron: 'ner-VÖS', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'I was just too nervous.', hi: 'Main bas bahut ghabraaya hua tha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'kann', role: 'r-modalverb', en: 'can', hi: 'सकता है', pron: 'kan', type: 'Modal · können' },
        { w: 'halt', role: 'r-akkusativ', en: 'simply', hi: 'बस', pron: 'halt', type: 'Modalpartikel' },
        { w: 'mal', role: 'r-adverb', en: 'once in a while', hi: 'कभी-कभी', pron: 'mahl', type: 'Adverb' },
        { w: 'passieren', role: 'r-verb', en: 'happen', hi: 'हो जाना', pron: 'pa-SEE-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'That can simply happen sometimes.', hi: 'Yeh bas kabhi-kabhi ho jaata hai.' },
      { speaker: 'Nike', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Nächstes', role: 'r-akkusativ', en: 'next', hi: 'अगला', pron: 'NEKS-tes', type: 'Adjective' },
        { w: 'Mal', role: 'r-akkusativ', en: 'time', hi: 'बार', pron: 'mahl', type: 'Noun · neut.' },
        { w: 'üben', role: 'r-verb', en: 'let us practise', hi: 'अभ्यास करते हैं', pron: 'Ü-ben', type: 'Verb · üben (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'halt', role: 'r-akkusativ', en: 'simply', hi: 'बस', pron: 'halt', type: 'Modalpartikel' },
        { w: 'mehr', role: 'r-akkusativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner' },
        { w: '.', plain: true }
      ], en: 'Thanks! Next time we simply practise more.', hi: 'Dhanyavaad! Agli baar hum bas zyada abhyaas karte hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'eben', role: 'r-akkusativ', en: 'simply', hi: 'बस', pron: 'AY-ben', type: 'Modalpartikel' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'richtige', role: 'r-subject', en: 'right', hi: 'सही', pron: 'RIKH-ti-guh', type: 'Adjective' },
        { w: 'Plan', role: 'r-subject', en: 'plan', hi: 'योजना', pron: 'plahn', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Exactly! That is simply the right plan.', hi: 'Bilkul! Yeh bas sahi yojana hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de">So ist das eben.</span> <span class="de">So ist das halt.</span> Both express calm acceptance — "that\'s just how it is". <span class="de r-eben">eben</span> is more neutral, standard spoken German; <span class="de r-halt">halt</span> is more colloquial and informal.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is MODALPARTIKELN eben and halt at B2 level: these particles signal acceptance, resignation, explanation, or inevitability — "that\'s simply how it is" — without adding new information. Examples: "Das ist eben so" / "Das ist halt so" (acceptance), "Er ist eben müde" (explanation), "Man muss eben warten" (inevitability), "Dann machen wir es eben morgen" (calm conclusion), "Ich habe halt keine Zeit" (resignation, colloquial), "Dann gehen wir halt zu Fuß" (informal conclusion). "eben" is more neutral/standard; "halt" is more colloquial/informal — both are used throughout Germany but rarely in academic writing. ' +
    'Do NOT expect or require eigentlich, wohl, denn, mal, bloß, or ruhig — those are separate topics taught in later chapters; do not flag their absence. Do NOT treat "eben" as always meaning "exactly" or "halt" as always meaning "stop" — context decides. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that eben/halt are placed in the middle field and match one of the taught functions (acceptance, resignation, explanation, inevitability, calm conclusion).\n' +
    '- Do not flag "halt" used as a noun ("der Halt" = hold/grip) or "eben" used as an adjective ("eben" = flat/level) as an error — those are separate, correct uses of the same word, not the Modalpartikel.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Register check:</b> one sentence on whether eben/halt were used with the right register (eben = neutral, halt = colloquial) for the context.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you clearly hear the difference between eben and halt. Ready for eigentlich/wohl next.',
    mid: 'Good. Re-read the Master Usage Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: eben and halt both mean acceptance, just at different registers.'
  },

  parserSentence: [
    { w: 'So', role: 'plain' }, { w: 'ist', role: 'plain' }, { w: 'das', role: 'plain' }, { w: 'eben', role: 'r-eben' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: eben and halt both signal calm acceptance, at different registers.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Nike and Timo face a server outage and other delays, accepting reality with eben and halt.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 22 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the four main uses of eben and halt, and the register difference between them.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a chat conversation and workplace discussion full of eben and halt.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify acceptance, resignation, explanation, and inevitability.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Accept problems, explain reality, and respond to unexpected situations using eben and halt.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite a neutral dialogue to sound more natural by adding eben and halt where appropriate.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill particle choice, register comparison, and emotion identification.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 700 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 22 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '6 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Particle-choice drills, register comparison, and a dialogue-rewriting task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Usage Table, meaning comparisons, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'So ist das eben. / So ist das halt.', text: 'Express calm acceptance — "that\'s just how it is"' },
    { de: 'Er ist eben müde. / Ich habe halt keine Zeit.', text: 'Use eben and halt for explanation and resignation' },
    { de: 'Man muss eben warten. / Dann gehen wir halt zu Fuß.', text: 'Accept inevitable situations and reach calm conclusions' },
    { de: 'eben = neutral; halt = colloquial', text: 'Choose the right register for standard vs informal spoken German' },
    { de: 'eben ≠ "exactly" always; halt ≠ "stop" always', text: 'Stop translating these particles literally — read the speaker\'s attitude instead' }
  ],

  // ---------- Vocabulary (22 items — uploaded chapter-56 list) ----------
  vocab: [
    { de: 'Korrektur', art: 'die', gender: 'f', plural: 'Korrekturen', pos: 'noun', level: 'B2', register: 'both', en: 'correction', hi: 'सुधार', ex: 'Sie machte eine kleine Korrektur.', exEn: 'She made a small correction.', exHi: 'Usne ek chhota sudhaar kiya.', ex2: 'Sie haben die Korrektur akzeptiert.', ex2En: 'They\'ve accepted the correction.', ex2Hi: 'Unhone sudhaar sweekaar kiya hai.' },
    { de: 'Kritikfähigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'ability to take criticism', hi: 'आलोचना स्वीकार करने की क्षमता', ex: 'Meine Kritikfähigkeit wächst aber.', exEn: 'My ability to take criticism is growing, though.', exHi: 'Meri aalochana sweekaar karne ki kshamata badh rahi hai.', ex2: 'Sie haben ihre Kritikfähigkeit verbessert.', ex2En: 'They\'ve improved their ability to take criticism.', ex2Hi: 'Unhone apni aalochana sweekaar karne ki kshamata behtar ki hai.' },
    { de: 'meiden', pos: 'verb', level: 'B2', register: 'written', en: 'to avoid, shun', hi: 'बचना', ex: 'Sie mied das Thema.', exEn: 'She avoided the topic.', exHi: 'Usne vishay se bacha.', ex2: 'Sie haben Konflikte gemieden.', ex2En: 'They\'ve avoided conflicts.', ex2Hi: 'Unhone tanaav se bacha hai.', conj: { praesens: 'meidet', praeteritum: 'mied', perfekt: 'hat gemieden' } },
    { de: 'Musterklausur', art: 'die', gender: 'f', plural: 'Musterklausuren', pos: 'noun', level: 'B2', register: 'written', en: 'sample exam', hi: 'नमूना परीक्षा', ex: 'Ich habe halt keine Zeit für eine Musterklausur.', exEn: 'I just don\'t have time for a sample exam.', exHi: 'Mere paas namoona pareeksha ke liye samay nahi hai.', ex2: 'Sie haben die Musterklausur geübt.', ex2En: 'They\'ve practised the sample exam.', ex2Hi: 'Unhone namoona pareeksha ka abhyaas kiya hai.' },
    { de: 'nachhaken', pos: 'verb', level: 'B2', register: 'both', en: 'to follow up, probe', hi: 'दोबारा पूछना', ex: 'Sie hakte noch einmal nach.', exEn: 'She followed up once more.', exHi: 'Usne ek baar aur dobaara poocha.', ex2: 'Sie haben beim Kunden nachgehakt.', ex2En: 'They\'ve followed up with the customer.', ex2Hi: 'Unhone grahak se dobaara poocha hai.', conj: { praesens: 'hakt nach', praeteritum: 'hakte nach', perfekt: 'hat nachgehakt' } },
    { de: 'Nationalmannschaft', art: 'die', gender: 'f', plural: 'Nationalmannschaften', pos: 'noun', level: 'B2', register: 'written', en: 'national team', hi: 'राष्ट्रीय टीम', ex: 'Die Nationalmannschaft gewann das Spiel.', exEn: 'The national team won the match.', exHi: 'Rashtriya team ne match jeeta.', ex2: 'Sie unterstützen die Nationalmannschaft.', ex2En: 'They support the national team.', ex2Hi: 'Woh rashtriya team ka samarthan karte hain.' },
    { de: 'Nervosität', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'nervousness', hi: 'घबराहट', ex: 'Deine Nervosität ist halt immer hoch vor Prüfungen.', exEn: 'Your nervousness is always high before exams, well, that\'s just how it is.', exHi: 'Tumhaari ghabraahat pareekshaaon se pehle hamesha zyaada rehti hai.', ex2: 'Sie hat ihre Nervosität überwunden.', ex2En: 'She\'s overcome her nervousness.', ex2Hi: 'Usne apni ghabraahat par kaabu paaya hai.' },
    { de: 'Offenheit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'openness', hi: 'खुलापन', ex: 'Deine Offenheit hilft uns sehr.', exEn: 'Your openness helps us a lot.', exHi: 'Tumhaari khulapan humaari bahut madad karti hai.', ex2: 'Sie schätzen seine Offenheit.', ex2En: 'They value his openness.', ex2Hi: 'Woh uske khulepan ki kadar karte hain.' },
    { de: 'Produktbeschreibung', art: 'die', gender: 'f', plural: 'Produktbeschreibungen', pos: 'noun', level: 'B2', register: 'written', en: 'product description', hi: 'उत्पाद विवरण', ex: 'Die Produktbeschreibung war sehr genau.', exEn: 'The product description was very precise.', exHi: 'Utpaad vivaran bahut sateek tha.', ex2: 'Sie haben die Produktbeschreibung überarbeitet.', ex2En: 'They\'ve revised the product description.', ex2Hi: 'Unhone utpaad vivaran mein sudhaar kiya hai.' },
    { de: 'Profimannschaft', art: 'die', gender: 'f', plural: 'Profimannschaften', pos: 'noun', level: 'B2', register: 'written', en: 'professional team', hi: 'पेशेवर टीम', ex: 'Er spielt für eine Profimannschaft.', exEn: 'He plays for a professional team.', exHi: 'Woh ek peshewar team ke liye khelta hai.', ex2: 'Sie haben eine neue Profimannschaft gegründet.', ex2En: 'They\'ve founded a new professional team.', ex2Hi: 'Unhone ek nayi peshewar team banaayi hai.' },
    { de: 'Querschnittslähmung', art: 'die', gender: 'f', plural: 'Querschnittslähmungen', pos: 'noun', level: 'B2', register: 'written', en: 'paraplegia', hi: 'पक्षाघात', ex: 'Er lebt seit einem Unfall mit einer Querschnittslähmung.', exEn: 'He has lived with paraplegia since an accident.', exHi: 'Woh ek durghatna ke baad se pakshaaghaat ke saath jee raha hai.', ex2: 'Sie haben über Querschnittslähmung berichtet.', ex2En: 'They\'ve reported on paraplegia.', ex2Hi: 'Unhone pakshaaghaat ke baare mein report ki hai.' },
    { de: 'Ratgebersendung', art: 'die', gender: 'f', plural: 'Ratgebersendungen', pos: 'noun', level: 'B2', register: 'written', en: 'advice programme', hi: 'सलाह कार्यक्रम', ex: 'Wir brauchen gute Redemittel für diese Ratgebersendung.', exEn: 'We need good speech resources for this advice programme.', exHi: 'Humein is salaah karyakram ke liye achhe baatcheet ke saadhan chaahiye.', ex2: 'Sie moderiert eine Ratgebersendung.', ex2En: 'She hosts an advice programme.', ex2Hi: 'Woh ek salaah karyakram hosti hai.' },
    { de: 'Redemittel', art: 'das', gender: 'n', plural: 'Redemittel', pos: 'noun', level: 'B2', register: 'written', en: 'speech resource, phrase', hi: 'बातचीत का साधन', ex: 'Wir brauchen gute Redemittel für diese Ratgebersendung.', exEn: 'We need good speech resources for this advice programme.', exHi: 'Humein is salaah karyakram ke liye achhe baatcheet ke saadhan chaahiye.', ex2: 'Sie haben nützliche Redemittel gelernt.', ex2En: 'They\'ve learned useful speech resources.', ex2Hi: 'Unhone upyogi baatcheet ke saadhan seekhe hain.' },
    { de: 'reden', pos: 'verb', level: 'B2', register: 'both', en: 'to talk, speak', hi: 'बात करना', ex: 'Sie redeten stundenlang.', exEn: 'They talked for hours.', exHi: 'Woh ghanton baat karte rahe.', ex2: 'Sie haben über das Projekt geredet.', ex2En: 'They\'ve talked about the project.', ex2Hi: 'Unhone project ke baare mein baat ki hai.', conj: { praesens: 'redet', praeteritum: 'redete', perfekt: 'hat geredet' } },
    { de: 'Reklamation', art: 'die', gender: 'f', plural: 'Reklamationen', pos: 'noun', level: 'B2', register: 'written', en: 'complaint, claim', hi: 'शिकायत', ex: 'Sollen wir die Reklamation noch heute bearbeiten?', exEn: 'Should we handle the complaint today still?', exHi: 'Kya humein shikaayat aaj hi nipatani chaahiye?', ex2: 'Sie haben die Reklamation akzeptiert.', ex2En: 'They\'ve accepted the complaint.', ex2Hi: 'Unhone shikaayat sweekaar ki hai.' },
    { de: 'Rückversicherung', art: 'die', gender: 'f', plural: 'Rückversicherungen', pos: 'noun', level: 'B2', register: 'written', en: 'reinsurance, reassurance', hi: 'पुनर्बीमा, आश्वासन', ex: 'Die Rückversicherung deckte den Schaden.', exEn: 'The reinsurance covered the damage.', exHi: 'Punarbeema ne nuksaan cover kiya.', ex2: 'Sie haben eine Rückversicherung abgeschlossen.', ex2En: 'They\'ve taken out reinsurance.', ex2Hi: 'Unhone punarbeema liya hai.' },
    { de: 'Schnelligkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'speed, quickness', hi: 'गति', ex: 'Ihre Schnelligkeit beeindruckte alle.', exEn: 'Her speed impressed everyone.', exHi: 'Uski gati ne sabko prabhaavit kiya.', ex2: 'Sie haben ihre Schnelligkeit trainiert.', ex2En: 'They\'ve trained their speed.', ex2Hi: 'Unhone apni gati par abhyaas kiya hai.' },
    { de: 'Stichpunkt', art: 'der', gender: 'm', plural: 'Stichpunkte', pos: 'noun', level: 'B2', register: 'both', en: 'bullet point', hi: 'मुख्य बिंदु', ex: 'Ich werde noch ein paar Stichpunkte notieren.', exEn: 'I\'ll still note down a few bullet points.', exHi: 'Main abhi bhi kuch mukhya bindu likh lunga.', ex2: 'Sie haben die Stichpunkte zusammengefasst.', ex2En: 'They\'ve summarised the bullet points.', ex2Hi: 'Unhone mukhya bindu ka saaraansh diya hai.' },
    { de: 'Teambesprechung', art: 'die', gender: 'f', plural: 'Teambesprechungen', pos: 'noun', level: 'B2', register: 'written', en: 'team meeting', hi: 'टीम मीटिंग', ex: 'Ich notiere ein paar Stichpunkte zur Teambesprechung.', exEn: 'I\'ll note down a few bullet points for the team meeting.', exHi: 'Main team meeting ke liye kuch mukhya bindu likh lunga.', ex2: 'Die Teambesprechung dauerte eine Stunde.', ex2En: 'The team meeting lasted an hour.', ex2Hi: 'Team meeting ek ghanta chali.' },
    { de: 'Teamfähigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'ability to work in a team', hi: 'टीम में काम करने की क्षमता', ex: 'Deine Teamfähigkeit ist wirklich gut.', exEn: 'Your ability to work in a team is really good.', exHi: 'Tumhaari team mein kaam karne ki kshamata sach mein achhi hai.', ex2: 'Sie haben ihre Teamfähigkeit bewiesen.', ex2En: 'They\'ve proven their ability to work in a team.', ex2Hi: 'Unhone apni team mein kaam karne ki kshamata saabit ki hai.' },
    { de: 'tragen', pos: 'verb', level: 'B2', register: 'both', en: 'to carry, wear, bear', hi: 'ले जाना, पहनना', ex: 'Sie trug eine schwere Tasche.', exEn: 'She carried a heavy bag.', exHi: 'Usne ek bhaari bag utaaya.', ex2: 'Sie haben die Verantwortung getragen.', ex2En: 'They\'ve borne the responsibility.', ex2Hi: 'Unhone zimmedaari uthaayi hai.', conj: { praesens: 'trägt', praeteritum: 'trug', perfekt: 'hat getragen' } },
    { de: 'umformulieren', pos: 'verb', level: 'B2', register: 'written', en: 'to rephrase, reformulate', hi: 'दोबारा लिखना', ex: 'Wir formulieren den Abschnitt zunächst um.', exEn: 'Let\'s rephrase the section for now.', exHi: 'Hum abhi ke liye hissa dobaara likhte hain.', ex2: 'Sie haben den Satz umformuliert.', ex2En: 'They\'ve rephrased the sentence.', ex2Hi: 'Unhone vaakya dobaara likha hai.', conj: { praesens: 'formuliert um', praeteritum: 'formulierte um', perfekt: 'hat umformuliert' } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was drücken "eben" und "halt" aus?',
      body: [ 'Both usually express acceptance, inevitability, resignation — "that\'s simply how it is". They don\'t add new facts; they express that the fact cannot be changed.' ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de r-eben">So ist das eben.</span>', 'That\'s just how it is. (neutral)'],
          ['<span class="de r-halt">So ist das halt.</span>', 'That\'s simply how it is. (colloquial)']
        ]
      },
      hinglish: 'Dono particles ek hi baat batate hain \u2014 "yeh bas aisa hi hai, isme kuch kiya nahi jaa sakta". Yeh koi nayi jaankaari nahi dete; yeh sirf yeh dikhate hain ki bolne wala baat ko maan chuka hai. Chapter 55 wale <b>doch</b> aur <b>ja</b> ki tarah, inka bhi seedha English translation nahi hota.'
    },
    {
      title: 'Modalpartikel eben — vier Hauptfunktionen',
      body: [ '"eben" has four main functions: acceptance, explanation, inevitable situation, and calm conclusion.' ],
      table: {
        head: ['Function', 'Example'],
        rows: [
          ['Acceptance', 'Das ist eben so. ("that\'s just how it is")'],
          ['Explanation', 'Er ist eben müde. ("well, he\'s just tired")'],
          ['Inevitable situation', 'Man muss eben warten. ("we just have to wait")'],
          ['Calm conclusion', 'Dann machen wir es eben morgen. ("then we\'ll just do it tomorrow")']
        ]
      },
      hinglish: '<b>eben</b> ke chaar kaam hain \u2014 baat maan lena, wajah samjhaana, majboori batana, aur shaanti se koi nateeja nikaalna. In sab mein ek common feeling hai: "theek hai, aisa hi hai".'
    },
    {
      title: 'Modalpartikel halt — vier Hauptfunktionen',
      body: [ '"halt" has four main functions: acceptance, resignation, explaining reality, and informal conclusion. It is usually more colloquial than "eben".' ],
      table: {
        head: ['Function', 'Example'],
        rows: [
          ['Acceptance', 'Das ist halt so. ("well, that\'s just how it is")'],
          ['Resignation', 'Ich habe halt keine Zeit. ("I just don\'t have time")'],
          ['Explaining reality', 'Er arbeitet halt viel. ("well, he just works a lot")'],
          ['Informal conclusion', 'Dann gehen wir halt zu Fuß. ("then we\'ll just walk")']
        ]
      },
      hinglish: '<b>halt</b> ke bhi wahi chaar kaam hain \u2014 maan lena, haar maan lena, asliyat batana, aur informal nateeja. Farak sirf register ka hai: <b>halt</b> zyada bolchaal wala lagta hai, aur South Germany mein yeh kaafi zyada sunai deta hai.'
    },
    {
      title: 'eben vs halt',
      body: [ 'In many situations both are possible, but the register differs — "eben" is more neutral, "halt" is more conversational.' ],
      table: {
        head: ['With eben', 'With halt'],
        rows: [
          ['Das ist eben so. (neutral acceptance)', 'Das ist halt so. (more conversational)'],
          ['Er kommt eben später. (neutral explanation)', 'Er kommt halt später. (more informal spoken German)']
        ]
      },
      hinglish: 'Zyada-tar jagah dono chal jaate hain, farak sirf register ka hai \u2014 <b>eben</b> neutral lagta hai aur <b>halt</b> zyada casual. Isliye office ki baat mein <b>eben</b> safe rehta hai, aur dosto ke saath <b>halt</b> natural lagta hai.'
    },
    {
      title: 'Register',
      body: [ '"eben" is more neutral, standard spoken German, heard throughout Germany, acceptable in semi-formal conversation. "halt" is more colloquial, everyday spoken German, frequent among friends and colleagues, uncommon in formal writing. Neither is normally used in scientific or academic writing.' ],
      hinglish: '<b>eben</b> standard spoken German hai \u2014 poore Germany mein chalta hai aur semi-formal baat mein bhi theek lagta hai. <b>halt</b> zyada casual hai, dosto aur colleagues ke beech aata hai. Dono hi scientific ya academic writing mein nahi aate, isliye report likhte waqt inhe chhod do.'
    },
    {
      title: 'Übersetzungsfehler vermeiden',
      body: [ 'Students should NEVER translate "eben" as "exactly" in every sentence, and "halt" does NOT always mean "stop". Meaning depends entirely on context.' ],
      hinglish: 'In particles ka seedha translation dhoondna galti hai. Mittelfeld wala <b>eben</b> "exactly" nahi hota, aur <b>halt</b> "stop" nahi hota \u2014 woh alag shabd hain jo bas ek jaise likhe jaate hain. Yahan matlab context se aata hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These come from using a particle where there is no acceptance to signal, putting it in position 1 instead of the middle field, confusing it with the identically spelled interjection, or stacking two particles that do the same job.' ],
      mistakes: [
        { wrong: 'Das ist halt richtig.', right: 'Das ist richtig.', why: '"halt" only fits when you are signalling acceptance or resignation. A plain factual statement does not need a particle at all.' },
        { wrong: 'Ich eben komme morgen.', right: 'Ich komme eben morgen.', why: 'Modalpartikeln sit in the middle field, after the finite verb \u2014 never squeezed in before it.' },
        { wrong: 'Halt, das ist halt so.', right: 'Das ist halt so.', why: 'Do not mix the interjection <span class="de">Halt!</span> ("stop!") with the Modalpartikel. The particle belongs in the middle field and never opens the sentence.' },
        { wrong: 'Eben ich habe keine Zeit.', right: 'Ich habe eben keine Zeit.', why: 'The particle sits in the middle field, after the verb \u2014 not in position 1. At the start, <span class="de">Eben!</span> is a separate word meaning \u201cexactly!\u201d.' },
        { wrong: 'Das ist eben halt so.', right: 'Das ist eben so. / Das ist halt so.', why: 'Both particles do the same job here, so stacking them is redundant \u2014 pick one.' }
      ],
      hinglish: 'Yeh galtiyan chaar wajah se hoti hain \u2014 particle wahan lagana jahan koi acceptance ka matlab hi nahi hai, use Mittelfeld ki jagah shuru mein rakh dena, use usi spelling wale doosre shabd se mila dena, ya do particles ek saath laga dena jo ek hi kaam karte hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to express "this cannot really be changed"? Use eben for neutral register, halt for more informal conversation. Writing a scientific paper? Usually use neither.' ],
      note: 'Memory trick: eben = "that\'s simply the reality" (neutral acceptance). halt = "well... that\'s just how it is" (more conversational and informal). Don\'t translate literally — understand the speaker\'s attitude.',
      hinglish: 'Batana hai ki "yeh badla nahi jaa sakta"? To neutral baat mein <b>eben</b> use karo, aur casual baat mein <b>halt</b>. Scientific paper likh rahe ho to dono chhod do. Aur dono ko ek saath mat lagao \u2014 ek hi kaafi hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Chat: Eine Reklamation im Kundenservice',
    titleEn: 'Chat: a complaint with customer service',
    tokens: [
      { w: 'Kunde', role: 'plain', en: 'customer', hi: 'ग्राहक', type: 'Noun · masc.' },
      { w: ':', plain: true },
      { w: 'Mein', role: 'plain', en: 'my', hi: 'मेरा', type: 'Possessivartikel' },
      { w: 'Paket', role: 'plain', en: 'package', hi: 'पैकेज', type: 'Noun · neut.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'kaputt', role: 'plain', en: 'broken (Satzende)', hi: 'टूटा हुआ (Satzende)', type: 'Adjective' },
      { w: 'angekommen', role: 'plain', en: 'arrived (Satzende)', hi: 'पहुँचा (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Support', role: 'plain', en: 'support', hi: 'सहायता', type: 'Noun · masc.' },
      { w: ':', plain: true },
      { w: 'Das', role: 'plain', en: 'that', hi: 'यह', type: 'Pronoun' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'halt', role: 'r-connector', en: 'just (Modalpartikel, resignierend)', hi: 'बस (Modalpartikel)', type: 'Modalpartikel · halt', why: 'halt (spoken, resigned) implies "that\'s just how it is" — accepting an unpleasant fact matter-of-factly (this chapter).' },
      { w: 'manchmal', role: 'plain', en: 'sometimes', hi: 'कभी-कभी', type: 'Adverb' },
      { w: 'so', role: 'plain', en: 'so (Satzende)', hi: 'ऐसा (Satzende)', type: 'Adverb' },
      { w: 'beim', role: 'plain', en: 'with', hi: 'में', type: 'Contraction · bei dem' },
      { w: 'Versand', role: 'plain', en: 'shipping (Satzende)', hi: 'शिपिंग (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Bitte', role: 'plain', en: 'please', hi: 'कृपया', type: 'Interjection' },
      { w: 'reichen', role: 'plain', en: 'submit', hi: 'दर्ज करें', type: 'Verb · einreichen' },
      { w: 'Sie', role: 'plain', en: 'you', hi: 'आप', type: 'Pronoun' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Reklamation', role: 'plain', en: 'complaint (Satzende)', hi: 'शिकायत (Satzende)', type: 'Noun · fem.', why: 'die Reklamation (this chapter).' },
      { w: 'ein', role: 'plain', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix · einreichen' },
      { w: '.', plain: true },
      { w: 'Kunde', role: 'plain', en: 'customer', hi: 'ग्राहक', type: 'Noun · masc.' },
      { w: ':', plain: true },
      { w: 'Ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'bin', role: 'plain', en: 'am', hi: 'हूँ', type: 'Verb · sein' },
      { w: 'eben', role: 'r-connector', en: 'simply (Modalpartikel, feststellend)', hi: 'बस (Modalpartikel)', type: 'Modalpartikel · eben', why: 'eben (spoken, matter-of-fact) states something as an unavoidable, obvious truth — very close to halt but slightly more formal (this chapter).' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'bisschen', role: 'plain', en: 'bit', hi: 'थोड़ा', type: 'Adverb' },
      { w: 'nervös', role: 'plain', en: 'nervous (Satzende)', hi: 'घबराया हुआ (Satzende)', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'weil', role: 'plain', en: 'because', hi: 'क्योंकि', type: 'Konjunktion' },
      { w: 'ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'so', role: 'plain', en: 'such', hi: 'ऐसी', type: 'Adverb' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Nervosität', role: 'plain', en: 'nervousness (Satzende)', hi: 'घबराहट (Satzende)', type: 'Noun · fem.', why: 'die Nervosität (this chapter).' },
      { w: 'selten', role: 'plain', en: 'rarely', hi: 'शायद ही कभी', type: 'Adverb' },
      { w: 'habe', role: 'plain', en: 'have (Satzende)', hi: 'रखता हूँ (Satzende)', type: 'Verb · haben (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Support', role: 'plain', en: 'support', hi: 'सहायता', type: 'Noun · masc.' },
      { w: ':', plain: true },
      { w: 'Kein', role: 'plain', en: 'no', hi: 'कोई नहीं', type: 'Negation' },
      { w: 'Problem', role: 'plain', en: 'problem (Satzende)', hi: 'समस्या (Satzende)', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'wir', role: 'plain', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'lösen', role: 'plain', en: 'solve', hi: 'सुलझाते हैं', type: 'Verb · lösen' },
      { w: 'das', role: 'plain', en: 'that', hi: 'यह', type: 'Pronoun' },
      { w: 'schon', role: 'plain', en: 'certainly (Satzende)', hi: 'ज़रूर (Satzende)', type: 'Modalpartikel · schon (beruhigend)', why: 'schon here reassures — a common modal-particle move to calm a worried customer (this chapter).' },
      { w: '.', plain: true },
      { w: 'Kunde', role: 'plain', en: 'customer', hi: 'ग्राहक', type: 'Noun · masc.' },
      { w: ':', plain: true },
      { w: 'Trotzdem', role: 'plain', en: 'still', hi: 'फिर भी', type: 'Adverb' },
      { w: 'ärgere', role: 'plain', en: 'am annoyed', hi: 'नाराज़ हूँ', type: 'Verb · sich ärgern' },
      { w: 'ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'mich', role: 'plain', en: 'myself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'eben', role: 'r-verb', en: 'just', hi: 'बस', type: 'Modalpartikel · eben', why: 'eben admits a small, unavoidable fact (this chapter).' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'bisschen', role: 'plain', en: 'bit', hi: 'ज़रा', type: 'Adverb' },
      { w: 'darüber', role: 'plain', en: 'about it (Satzende)', hi: 'इसके बारे में (Satzende)', type: 'Pronominaladverb' },
      { w: '.', plain: true },
      { w: 'Support', role: 'plain', en: 'support', hi: 'सहायता', type: 'Noun' },
      { w: ':', plain: true },
      { w: 'Das', role: 'plain', en: 'that', hi: 'यह', type: 'Pronoun' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'halt', role: 'r-verb', en: 'just', hi: 'बस', type: 'Modalpartikel · halt', why: 'halt shrugs off a fact as simply the way things are (this chapter).' },
      { w: 'verständlich', role: 'plain', en: 'understandable (Satzende)', hi: 'समझ में आने वाला (Satzende)', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'aber', role: 'plain', en: 'but', hi: 'लेकिन', type: 'Conjunction' },
      { w: 'wir', role: 'plain', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'kümmern', role: 'plain', en: 'take care', hi: 'ध्यान रखेंगे', type: 'Verb · sich kümmern' },
      { w: 'uns', role: 'plain', en: 'ourselves', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'sofort', role: 'plain', en: 'immediately', hi: 'तुरंत', type: 'Adverb' },
      { w: 'darum', role: 'plain', en: 'about it (Satzende)', hi: 'इसके बारे में (Satzende)', type: 'Pronominaladverb' },
      { w: '.', plain: true }
    ],
    translation: 'Customer: My package arrived broken. — Support: That\u2019s just sometimes how it is with shipping. Please submit a complaint. — Customer: I\u2019m simply a bit nervous, because I rarely feel such nervousness. — Support: No problem, we\u2019ll certainly solve this. — Customer: I\u2019m still a bit annoyed about it, though. — Support: That\u2019s understandable, but we\u2019ll take care of it right away.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_056_L001', speaker: 'Nike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, die Nationalmannschaft hat schon wieder verloren.', en: 'Timo, the national team lost again.' },
      { id: 'B2_056_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich weiß, das ist eben ärgerlich, aber so ist Fußball halt manchmal.', en: 'I know, that\'s just annoying, but that\'s just how football sometimes is.' },
      { id: 'B2_056_L003', speaker: 'Nike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und mein Vorstellungsgespräch heute lief auch nicht so gut.', en: 'And my job interview today didn\'t go so well either.' },
      { id: 'B2_056_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ach, das war halt einfach kein guter Tag — morgen sieht das schon wieder anders aus.', en: 'Ah, that was just simply not a good day — tomorrow it\'ll look different again.' }
    ],
    transcript: 'Timo, die Nationalmannschaft hat schon wieder verloren. Ich weiß, das ist eben ärgerlich, aber so ist Fußball halt manchmal. Und mein Vorstellungsgespräch heute lief auch nicht so gut. Ach, das war halt einfach kein guter Tag — morgen sieht das schon wieder anders aus.',
    translation: 'Timo, the national team lost again. I know, that\'s just annoying, but that\'s just how football sometimes is. And my job interview today didn\'t go so well either. Ah, that was just simply not a good day — tomorrow it\'ll look different again.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Nationalmannschaft' },
      { w: 'hat' },
      { w: 'schon' },
      { w: 'wieder' },
      { w: 'verloren' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'weiß' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'ist' },
      { w: 'eben' },
      { w: 'ärgerlich' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'so' },
      { w: 'ist' },
      { w: 'Fußball' },
      { w: 'halt' },
      { w: 'manchmal' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'mein' },
      { w: 'Vorstellungsgespräch' },
      { w: 'heute' },
      { w: 'lief' },
      { w: 'auch' },
      { w: 'nicht' },
      { w: 'so' },
      { w: 'gut' },
      { w: '.', plain: true },
      { w: 'Ach' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'war' },
      { w: 'halt' },
      { w: 'einfach' },
      { w: 'kein' },
      { w: 'guter' },
      { w: 'Tag' },
      { w: '—', plain: true },
      { w: 'morgen' },
      { w: 'sieht' },
      { w: 'das' },
      { w: 'schon' },
      { w: 'wieder' },
      { w: 'anders' },
      { w: 'aus' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was ist mit der Nationalmannschaft passiert?', qEn: 'What happened to the national team?', options: ['sie haben gewonnen', 'sie haben verloren', 'sie haben nicht gespielt', 'unbekannt'], optionsEn: ['they won', 'they lost', 'they didn\'t play', 'unknown'], answer: 1,
        explain: '"Die Nationalmannschaft hat schon wieder verloren."' },
      { q: 'Wie beschreibt Timo den heutigen Tag?', qEn: 'How does Timo describe today?', options: ['ein toller Tag', 'einfach kein guter Tag', 'ein wichtiger Tag', 'ein langer Tag'], optionsEn: ['a great day', 'just not a good day', 'an important day', 'a long day'], answer: 1,
        explain: '"Das war halt einfach kein guter Tag."' }
    ]
  },

  speaking: [
    { task: "Die Nationalmannschaft hat wieder verloren. Reagiere gelassen.", taskEn: "The national team has lost again. React calmly.", de: "Das ist eben ärgerlich, aber so ist Fußball halt manchmal.", en: "That's just annoying, but that's football sometimes." },
    { task: "Dein Freund fragt nach deinem Vorstellungsgespräch.", taskEn: "Your friend asks about your job interview.", de: "Es lief halt nicht gut, ich war eben zu nervös.", en: "It just didn't go well, I was simply too nervous." },
    { task: "Eine Kollegin fragt, warum du nie mitkommst.", taskEn: "A colleague asks why you never come along.", de: "Ich habe halt keine Zeit, ich lerne abends.", en: "I just don't have time, I study in the evening." },
    { task: "Der Termin platzt. Zieh einen ruhigen Schluss.", taskEn: "The appointment falls through. Draw a calm conclusion.", de: "Dann machen wir es eben morgen.", en: "Then we'll just do it tomorrow." },
    { task: "Rollenspiel: Ihr sprecht über eine Reklamation, die nichts brachte.", taskEn: "Role-play: you talk about a complaint that got nowhere.", de: "Das dauert eben. — Und wir müssen halt noch einmal nachhaken.", en: "It just takes time. — And we'll simply have to follow up again." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (6-8 sentences): Take a neutral dialogue and rewrite it to sound more natural by adding eben and halt where appropriate.\n\nTASK 2 — Dialogue (8-10 sentences): Write a conversation between two colleagues discussing a delayed project, using Modalpartikeln naturally without overusing them.',
    starters: ['So ist das eben ...', 'Ich habe halt ...'],
    placeholder: 'Der Server ist schon wieder ausgefallen. So ist das eben. Wir müssen halt warten.',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence uses "eben" for a calm, neutral conclusion?',
      options: ['Dann machen wir es eben morgen.', 'Ich habe halt keine Zeit.', 'Das stimmt doch nicht!'],
      answer: 0,
      explain: '"Dann machen wir es eben morgen" reaches a calm, neutral conclusion after accepting the delay.'
    },
    gap: {
      sentence: ['Ich habe ', ' keine Zeit für eine Musterklausur.'],
      gaps: [ { answer: 'halt', accepts: ['halt', 'eben'] } ],
      explain: 'Both "halt" and "eben" can express resignation here — "halt" sounds more colloquial, "eben" more neutral.'
    },
    match: {
      q: 'Match each sentence to its function.',
      pairs: [
        { noun: 'Das ist eben so.', art: 'Acceptance (neutral)' },
        { noun: 'Ich habe halt keine Zeit.', art: 'Resignation (colloquial)' },
        { noun: 'Man muss eben warten.', art: 'Inevitable situation' },
        { noun: 'Dann gehen wir halt zu Fuß.', art: 'Informal conclusion' }
      ]
    },
    builder: {
      target: 'Build: "Then we\'ll just walk." (informal conclusion with halt)',
      bank: ['Dann', 'gehen', 'wir', 'halt', 'zu', 'Fuß', '.'],
      answer: ['Dann', 'gehen', 'wir', 'halt', 'zu', 'Fuß', '.'],
      roles: { 'halt': 'r-halt' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich eben komme morgen.',
      right: 'Ich komme eben morgen.',
      explain: 'Modalpartikeln sit in the middle field of the sentence, not immediately after the subject and before the finite verb.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What do eben and halt generally express?', options: ['Acceptance, inevitability, resignation — "that\'s just how it is"', 'A new fact the listener didn\'t know', 'A polite question'], answer: 0,
      explain: 'Both particles signal calm acceptance of an unchangeable reality.' },
    { q: 'Which is more colloquial/informal?', options: ['halt', 'eben', 'Both are equally formal'], answer: 0,
      explain: '"halt" is more colloquial and common among friends and colleagues; "eben" is more neutral.' },
    { q: '"Er ist eben müde." is an example of which function?', options: ['Explanation', 'Contradiction', 'Question'], answer: 0,
      explain: '"eben" here explains a fact calmly: "well, he\'s just tired".' },
    { q: '"Ich habe halt keine Zeit." is an example of which function?', options: ['Resignation', 'Encouragement', 'Surprise'], answer: 0,
      explain: '"halt" here expresses mild resignation: "I just don\'t have time, that\'s the reality".' },
    { q: 'Is it correct to always translate "halt" as "stop"?', options: ['No — as a Modalpartikel it means acceptance/resignation, not "stop"', 'Yes, always', 'Only in written German'], answer: 0,
      explain: '"Halt!" as an interjection means "stop!", but the Modalpartikel "halt" has a completely different function.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-eben', html: 'Modalpartikeln eben and halt both signal acceptance, resignation, explanation, or inevitability — "that\'s just how it is".' },
    { c: 'r-eben', html: 'eben = more neutral, standard spoken German. halt = more colloquial, everyday spoken German among friends and colleagues.' },
    { c: 'r-halt', html: 'Never translate eben as "exactly" or halt as "stop" in every sentence — read the speaker\'s attitude, not the dictionary.' }
  ],
  revisionTips: [
    'For every neutral sentence you know, practise adding eben and halt and explaining how the register changes.',
    'Watch a short German conversation clip and count how many times you hear eben or halt — note whether each felt neutral or colloquial.',
    'Ask yourself before using either particle: am I accepting an unchangeable situation calmly, or explaining a known reality?'
  ]
};

window.CHAPTER = CHAPTER;
