/* KLARWEG CHAPTER DATA — C2 · Chapter 9
   "Goethe Mini 2" — comprehensive revision & assessment checkpoint
   covering Chapters 6-8 (Konjunktiv II, Konjunktiv I, Modalverben)
   while integrating Chapters 1-4 (Zeitformen, Präfixe, Ergänzungen,
   Nomen-Verb-Verbindungen). NO new grammar, NO new vocabulary —
   integration and mastery only. Dialogue: Brunhilde and Timo ONLY. */
const CHAPTER = {
  id: 'c2-09-goethe-mini-2',
  phase: 'C2 · Modalität, Perspektive & rhetorische Präzision',
  number: 9,
  title: 'Goethe Mini 2',
  titleEn: 'Checkpoint — Chapters 1–8 integrated',
  description: 'Imagine conducting an international symposium. Each speaker represents one major grammar system. Goethe C2 expects you to coordinate the entire conference flawlessly.',
  xp: 1400, time: 150, difficulty: 'Checkpoint',
  nextChapter: { number: 10, title: 'Adverbialsätze & Diskursmarker', titleEn: 'Adverbial clauses & discourse markers' , href: 'chapter-c2-10-adverbialsaetze-und-diskursmarker.html' },
  prevChapter: { number: 8, title: 'Modalverben', titleEn: 'Modal verbs as a pair of glasses', href: 'chapter-c2-08-modalverben.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Conducting a <em>symposium</em> of every grammar system at once.',
    intro: 'Preparing together for the official Goethe C2 mock exam, Brunhilde reports a minister\'s declared success and Timo insists on verifying it before printing — coordinating newspaper, academic, political, and scientific registers like a symposium conductor.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See how tense, reporting, modality, prefixes, complements and nominal style combine into one coordinated performance'],
    scene: 'Gemeinsame Vorbereitung auf die offizielle Goethe-C2-Simulationsprüfung',
    femaleSpeakers: ['Brunhilde'],
    dialogue: [
      { speaker: 'Brunhilde', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Ministerin', role: 'r-subject', en: 'minister (f)', hi: 'मंत्री', pron: 'mi-nis-TAY-rin', type: 'Noun · fem. (recycled C2)' },
        { w: 'erklärte', role: 'r-verb', en: 'declared', hi: 'कहा', pron: 'er-KLAIR-tuh', type: 'Verb · erklären (Präteritum)' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Reform', role: 'r-subject', en: 'reform', hi: 'सुधार', pron: 're-FORM', type: 'Noun · fem. (recycled C2)' },
        { w: 'sei', role: 'r-verb', en: 'is', hi: 'है', pron: 'zy', type: 'Verb · sein (Konjunktiv I, recycled C1/C2)' },
        { w: 'erfolgreich', role: 'r-akkusativ', en: 'successful', hi: 'सफल', pron: 'er-FOLK-ryhh', type: 'Adjective (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The minister declared the reform is successful.', hi: 'Mantri ne kaha ki sudhaar safal hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'muss', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'mus', type: 'Modal · müssen (ich)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'nachweisen', role: 'r-verb', en: 'verify', hi: 'साबित करना', pron: 'NAHKH-vy-zen', type: 'Verb · infinitive (Satzende, recycled C1/C2)' },
        { w: ',', plain: true },
        { w: 'bevor', role: 'r-conjunction', en: 'before', hi: 'से पहले', pron: 'be-FOR', type: 'Conjunction · bevor' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'drucken', role: 'r-verb', en: 'print', hi: 'छापना', pron: 'DRU-ken', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I must verify that before we print it.', hi: 'Chaapne se pehle mujhe yeh saabit karna hoga.' },
      { speaker: 'Brunhilde', tokens: [
        { w: 'Meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Analyse', role: 'r-subject', en: 'analysis', hi: 'विश्लेषण', pron: 'a-na-LÜ-zuh', type: 'Noun · fem. (recycled C2)' },
        { w: 'beruht', role: 'r-verb', en: 'is based', hi: 'आधारित है', pron: 'be-ROOT', type: 'Verb · beruhen auf (recycled C2)' },
        { w: 'auf', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition' },
        { w: 'offiziellen', role: 'r-dativ', en: 'official', hi: 'आधिकारिक', pron: 'o-fi-TSYE-len', type: 'Adjective · dative' },
        { w: 'Zahlen', role: 'r-dativ', en: 'figures (dat.)', hi: 'आंकड़ों पर', pron: 'TSAH-len', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'My analysis is based on official figures.', hi: 'Mera vishleshan aadhikaarik aankdon par aadhaarit hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'führe', role: 'r-verb', en: 'carry out', hi: 'करता हूँ', pron: 'FÜ-ruh', type: 'Verb · durchführen (ich, recycled C1/C2)', lexicalUnit: 'durchführen' },
        { w: 'eine', role: 'r-akkusativ', en: 'an (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'eigene', role: 'r-akkusativ', en: 'own', hi: 'अपनी', pron: 'EYE-ge-nuh', type: 'Adjective' },
        { w: 'Analyse', role: 'r-akkusativ', en: 'analysis', hi: 'विश्लेषण', pron: 'a-na-LÜ-zuh', type: 'Noun · fem.' },
        { w: 'durch', role: 'r-verb', en: '(prefix of durchführen)', hi: '', pron: 'doorkh', type: 'Separable prefix · Satzende', lexicalUnit: 'durchführen' },
        { w: '.', plain: true }
      ], en: 'I carry out my own analysis.', hi: 'Main apna khud ka vishleshan karta hoon.' },
      { speaker: 'Brunhilde', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'dürfte', role: 'r-modalverb', en: 'probably is', hi: 'शायद है', pron: 'DÜR-ftuh', type: 'Modal · dürfte (recycled C1/C2)' },
        { w: 'einige', role: 'r-akkusativ', en: 'a few', hi: 'कुछ', pron: 'EYE-ni-guh', type: 'Determiner' },
        { w: 'Stunden', role: 'r-akkusativ', en: 'hours', hi: 'घंटे', pron: 'SHTUN-den', type: 'Noun · plural' },
        { w: 'dauern', role: 'r-verb', en: 'take', hi: 'लगेंगे', pron: 'DOW-ern', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'It probably will take a few hours.', hi: 'Isme shayad kuch ghante lagenge.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'kein', role: 'r-negation', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Determiner' },
        { w: 'Problem', role: 'r-subject', en: 'problem', hi: 'समस्या', pron: 'pro-BLAYM', type: 'Noun · neut.' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben' },
        { w: 'noch', role: 'r-akkusativ', en: 'still', hi: 'अभी', pron: 'nokh', type: 'Adverb' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: 'bis', role: 'r-preposition', en: 'until', hi: 'तक', pron: 'bis', type: 'Preposition' },
        { w: 'zum', role: 'r-preposition', en: 'the', hi: 'तक', pron: 'tsum', type: 'Preposition + place' },
        { w: 'Redaktionsschluss', role: 'r-dativ', en: 'editorial deadline (dat.)', hi: 'संपादकीय समय सीमा तक', pron: 'ray-dak-TSYONS-shlus', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'That is no problem. We still have time until the editorial deadline.', hi: 'Koi baat nahi. Sampaadkiya samay seema tak hamaare paas abhi samay hai.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Imagine conducting an <span class="de r-symposium-metapher">international symposium</span> — every grammar system is one speaker, and C2 means coordinating them all.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. This is GOETHE MINI 2 — a comprehensive REVISION checkpoint integrating Chapters 1-8: (1) Zeitformen der Verben — Historical Present, epistemic Futur. (2) Verben mit Präfixen — precise prefix verbs (nachweisen, darlegen) over generic ones. (3) Verben und ihre Ergänzungen — obligatory complements (reflektieren über, beruhen auf). (4) Nomen-Verb-Verbindungen — formal nominal twins (eine Analyse durchführen). (6) Konjunktiv II — the "dimmer switch" for certainty/diplomacy/hedging (das dürfte stimmen, es wäre sinnvoll). (7) Konjunktiv I — "invisible quotation marks" for neutral reporting (die Ministerin erklärte, der Plan sei erfolgreich) vs. Indikativ (which implies personal confirmation). (8) Modalverben — the "pair of glasses" for epistemic/deontic modality (er dürfte zu Hause sein vs. er muss zu Hause sein vs. die Regierung sollte handeln). NO new grammar is introduced in this chapter — assess ONLY whether the learner integrates ALL of these skills naturally and simultaneously in one text, not in isolation. The most important things to catch: reverting to Indikativ where Konjunktiv I is needed for neutral reporting (making the writer sound personally convinced of someone else\'s claim); missing epistemic hedging in scientific/academic writing (bare claims instead of dürfte/könnte-hedged ones); confusing müssen and sollen (obligation vs. recommendation); reverting to generic verbs (zeigen, sagen, machen) instead of precise prefix verbs or nominal constructions; omitting obligatory complements; inconsistent register across one text (precise in one sentence, generic in the next). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag issues traceable to any of Chapters 1, 2, 3, 4, 6, 7, or 8; prioritize noting where the learner could combine tense choice + reporting mood + modality + prefix precision + complement completeness + nominal style consistently, rather than listing chapter-by-chapter grammar rules. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (note which chapter\'s skill it draws on). If none: <li>No errors — well done.</li> 3) <p><b>Symposium check:</b> one sentence on whether all the grammar "speakers" (tense, reporting, modality, prefixes, complements, nominal style) coordinate together naturally, like an international symposium.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — you coordinate tense, reporting mood, modality, prefixes, complements, and nominal style like a native speaker. Ready for the next chapter.', mid: 'Good. Revisit the weakest of the eight skills before continuing.', low: 'Worth revisiting Chapters 1-8 individually — remember: this checkpoint is a symposium, and every speaker needs its place.' },
  parserSentence: [ { w: 'Die', role: 'plain' }, { w: 'Ministerin', role: 'plain' }, { w: 'erklärte', role: 'r-konjunktiv1' }, { w: ',', plain: true }, { w: 'der', role: 'plain' }, { w: 'Plan', role: 'plain' }, { w: 'sei', role: 'r-konjunktiv1' }, { w: 'erfolgreich', role: 'r-konjunktiv1' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: this checkpoint is an international symposium where every grammar system from Chapters 1-8 must coordinate together.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Brunhilde and Timo revise together, editing texts across tense, reporting, modality, prefixes, and nominal style.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Review key vocabulary from Chapters 1-4 and 6-8 — no new words, full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Integrated revision of tense selection, Konjunktiv I/II, modal verbs, prefix verbs, complements, and nominal style.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze a newspaper report, scientific article, political commentary, and literary essay for integrated C2 features.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify reporting language, certainty, hypothesis, modality, and register across four listening contexts.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice academic presentation, debate, reporting news, and diplomatic disagreement.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite with Konjunktiv I, improve diplomacy with Konjunktiv II/modals, edit for precision, and write a 600-word integrated essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Complete grammar, vocabulary, tense, prefix, valency, nominal style, Konjunktiv I/II, and modal verb review with error correction and stylistic editing.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions integrating Chapters 1-8. Pass to bank the full 1400 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review your C2 Progress Dashboard across Chapters 1-9.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'Revision vocabulary from Chapters 1-4 and 6-8 with translations, synonyms, antonyms, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '18 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Integrated grammar review, sentence transformation, and stylistic editing drills, plus the full 600-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '22 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Integration Model, Mastery Scale, Revision Flowchart, and a consolidated reference of Chapters 1-8.', pdfUrl: '/pdfs/grammar.pdf', size: '20 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Die Ministerin erklärte, der Plan sei erfolgreich.', text: 'Use Konjunktiv I for neutral reporting instead of Indikativ (Chapter 7)' },
    { de: 'Das dürfte stimmen.', text: 'Recall Konjunktiv II as a dimmer switch for certainty and diplomacy (Chapter 6)' },
    { de: 'Er dürfte zu Hause sein. / Die Regierung sollte handeln.', text: 'Distinguish epistemic modality from diplomatic recommendation (Chapter 8)' },
    { de: 'Die Studie weist einen Zusammenhang nach.', text: 'Choose precise prefix verbs and obligatory complements (Chapters 2-3)' },
    { de: 'Ein Symposium, viele Redner.', text: 'Integrate all eight C2 skills together, naturally, in one performance' }
  ],
  vocab: [
    { de: 'nachweisen', pos: 'verb', level: 'C2', register: 'academic/scientific', en: 'to prove, demonstrate', hi: 'सिद्ध करना', synonyms: 'beweisen, belegen', antonyms: 'widerlegen', ex: 'Die Studie weist einen kausalen Zusammenhang nach.', exEn: 'The study proves a causal connection.', exHi: 'Study ek kaaranaatmak sambandh sidhh karti hai.', ex2: 'Statt "zeigen" nutzen wir hier "nachweisen".', ex2En: 'Instead of "zeigen" we use "nachweisen" here.', ex2Hi: '"Zeigen" ki jagah hum yahaan "nachweisen" istemaal karte hain.' },
    { de: 'beruhen auf', pos: 'verb + präposition (Dat.)', level: 'C2', register: 'academic/scientific', en: 'to be based on', hi: 'पर आधारित होना', synonyms: 'basieren auf', antonyms: null, ex: 'Die Ergebnisse beruhen auf umfangreichen Daten.', exEn: 'The results are based on extensive data.', exHi: 'Parinaam vyapak data par aadhaarit hain.', ex2: 'Diese Theorie beruht auf jahrzehntelanger Forschung.', ex2En: 'This theory is based on decades of research.', ex2Hi: 'Yeh theory dashkon ke research par aadhaarit hai.' },
    { de: 'eine Analyse durchführen', pos: 'noun-verb construction', level: 'C2', register: 'academic/scientific', en: 'to carry out an analysis', hi: 'विश्लेषण करना', synonyms: 'analysieren', antonyms: null, ex: 'Wir führen eine umfassende Analyse der Daten durch.', exEn: 'We carry out a comprehensive analysis of the data.', exHi: 'Hum data ka vyapak vishleshan karte hain.', ex2: 'Statt "analysieren" schreibst du besser "eine Analyse durchführen".', ex2En: 'Instead of "analysieren" you should better write "eine Analyse durchführen".', ex2Hi: '"Analysieren" ki jagah tum behtar "eine Analyse durchführen" likh sakte ho.' },
    { de: 'Das dürfte stimmen.', pos: 'expression (Konjunktiv II, epistemic)', level: 'C2', register: 'academic/formal', en: 'That is likely to be true.', hi: 'यह सही होना चाहिए', synonyms: 'Das müsste stimmen.', antonyms: 'Das stimmt definitiv nicht.', ex: 'Schreib nicht "Das stimmt", schreib lieber "Das dürfte stimmen".', exEn: 'Don\'t write "that\'s true", write instead "that is likely to be true".', exHi: '"Das stimmt" mat likho, behtar hai likho "das dürfte stimmen".', ex2: 'Die Hypothese dürfte sich mit weiteren Daten bestätigen.', ex2En: 'The hypothesis is likely to be confirmed with further data.', ex2Hi: 'Aur data ke saath hypothesis confirm ho sakti hai.' },
    { de: 'die Ministerin erklärte, ... sei ...', pos: 'expression (Konjunktiv I, neutral reporting)', level: 'C2', register: 'journalism/formal', en: 'the minister declared that ... is ...', hi: 'मंत्री ने घोषित किया कि ... है ...', synonyms: null, antonyms: null, ex: 'Die Ministerin erklärte, der Plan sei erfolgreich.', exEn: 'The minister declared that the plan was successful.', exHi: 'Mantri ne ghoshit kiya ki plan safal hai.', ex2: 'Die Staatsanwaltschaft erklärte, der Minister sei schuldig.', ex2En: 'The prosecutor\'s office declared that the minister is guilty.', ex2Hi: 'Abhiyojan ne ghoshit kiya ki mantri doshi hai.' },
    { de: 'Er dürfte zu Hause sein.', pos: 'expression (Modalverb, epistemic)', level: 'C2', register: 'both', en: 'He is likely to be at home.', hi: 'वह घर पर होना चाहिए (उच्च संभावना)', synonyms: 'Er könnte zu Hause sein. (weaker)', antonyms: 'Er ist definitiv nicht zu Hause.', ex: 'Er dürfte zu Hause sein — das ist die epistemische Bedeutung.', exEn: 'He is likely to be at home — that\'s the epistemic meaning.', exHi: '"Er dürfte zu Hause sein" — yeh epistemic matlab hai.', ex2: 'Sie dürfte inzwischen angekommen sein.', ex2En: 'She is likely to have arrived by now.', ex2Hi: 'Voh ab tak pahunch chuki hogi.' },
    { de: 'Die Regierung sollte handeln.', pos: 'expression (Modalverb, diplomatic recommendation)', level: 'C2', register: 'political/diplomatic', en: 'The government should act.', hi: 'सरकार को कार्रवाई करनी चाहिए', synonyms: 'Es wäre sinnvoll, dass die Regierung handelt.', antonyms: 'Die Regierung muss handeln. (stronger obligation)', ex: 'Nutzen wir stattdessen "Die Regierung sollte handeln".', exEn: 'Let\'s use instead "The government should act".', exHi: 'Iske bajaaye hum "Die Regierung sollte handeln" istemaal karte hain.', ex2: 'Man sollte diese Hypothese weiter prüfen.', ex2En: 'One should test this hypothesis further.', ex2Hi: 'Is hypothesis ko aur test karna chahiye.' }
  ],
  grammar: [
    { title: 'Zeitformen — Revision (Chapter 1)', body: [ 'Verb tense is perspective, not just grammar. Historical Present (1939 beginnt der Krieg) creates narrative immediacy; Futur I/II often expresses epistemic assumption, not literal future time.' ], hinglish: 'Tense ka chunav nazariya batata hai, sirf samay nahi. Historical Present se purani ghatna saamne hoti hui lagti hai: <span class="de">1939 beginnt der Krieg</span>. Aur <b>Futur I/II</b> aksar andaaze ke liye aata hai, future ke liye nahi: <span class="de">Er wird schon angekommen sein</span> matlab \u201cwoh pahunch hi gaya hoga\u201d.' },
    { title: 'Präfixverben & Ergänzungen — Revision (Chapters 2-3)', body: [ 'Precise prefix verbs (nachweisen, darlegen) replace generic verbs (zeigen, sagen) for native-level formal writing. Obligatory complements (reflektieren über, beruhen auf, zweifeln an) cannot be omitted without leaving a verb semantically incomplete.' ], hinglish: 'Do cheezein saath. Academic writing mein precise prefix verbs chahiye \u2014 <b>nachweisen</b>, <b>darlegen</b>, <b>feststellen</b> \u2014 aur unka Partizip II separability se tay hota hai (<b>nachgewiesen</b>). Aur har verb apna complement maangta hai, uske case ke saath: <b>beruhen auf</b> + Dativ (reflexive nahi), <b>sich beziehen auf</b> + Akkusativ (reflexive), <b>zweifeln an</b> + Dativ. Shak ho to us hisse ko hata kar dekho \u2014 sentence toot gaya to woh complement tha.' },
    { title: 'Nomen-Verb-Verbindungen — Revision (Chapter 4)', body: [ 'Every simple verb has a formal twin. The noun-verb construction (eine Analyse durchführen, eine Entscheidung herbeiführen) is chosen when precision, objectivity and formality matter.' ], hinglish: 'Har simple verb ka ek formal roop hota hai \u2014 <i>analysieren</i> se <span class="de">eine Analyse durchf\u00fchren</span>. Yeh tab chuna jaata hai jab precision aur objectivity chahiye. Par support verb fix hota hai: <b>Entscheidung treffen</b>, <b>Analyse durchf\u00fchren</b>, <b>Antrag stellen</b> \u2014 <i>machen</i> yahan lagbhag kabhi nahi aata. Aur purana object Genitiv mein chala jaata hai: <span class="de">die Analyse der Daten</span>.' },
    { title: 'Konjunktiv II — Revision (Chapter 6)', body: [ 'Konjunktiv II is a dimmer switch, not an on-off switch. It adjusts certainty (das dürfte/könnte/müsste stimmen), diplomacy (Es wäre sinnvoll...), and academic hedging (Man könnte vermuten, dass...).' ], hinglish: 'Konjunktiv II se tum apni baat ki roshni kam-zyada karte ho \u2014 haqeeqat nahi badalti. Isse certainty adjust hoti hai (<b>d\u00fcrfte</b> se <b>k\u00f6nnte</b> tak), diplomacy aati hai (<span class="de">Es w\u00e4re sinnvoll, \u2026</span>), aur academic hedging bhi. Do forms pakki kar lo \u2014 <b>haben/sein</b> aur modals ke saath synthetic form zaroori hai (<b>h\u00e4tte, w\u00e4re, k\u00f6nnte</b>), aur weak verbs ke saath <b>w\u00fcrde</b>.' },
    { title: 'Konjunktiv I — Revision (Chapter 7)', body: [ 'Konjunktiv I is invisible quotation marks. It carries someone else\'s words (die Ministerin erklärte, der Plan sei erfolgreich) without the writer personally confirming them — critically different from Indikativ.' ], hinglish: 'Konjunktiv I woh quotation marks hain jo dikhte nahi \u2014 yeh batate hain ki shabd tumhare nahi hain. <span class="de">Die Ministerin erkl\u00e4rte, der Plan sei erfolgreich</span> mein tum daava nahi kar rahe, sirf report kar rahe ho. Do baatein yaad rakho \u2014 <b>ich</b>, <b>wir</b> aur <b>sie</b> ki form Indikativ jaisi ho jaati hai, isliye wahan Konjunktiv II lagta hai (<b>h\u00e4tten</b>); aur ek baar reported mode shuru ho to poore passage mein wahi chalta rehna chahiye.' },
    { title: 'Modalverben — Revision (Chapter 8)', body: [ 'Every modal verb is a pair of glasses. Epistemic modality (er dürfte/könnte/mag zu Hause sein) expresses certainty; deontic modality (muss vs. sollte vs. könnte) expresses obligation vs. recommendation.' ], hinglish: 'Ek hi modal do bilkul alag kaam karta hai. <b>Epistemic</b> matlab kitna yakeen hai: <span class="de">Er muss zu Hause sein</span> \u2014 koi majboori nahi, sirf nateeja. Aur <b>deontic</b> matlab majboori ya salaah: <span class="de">Er muss arbeiten</span>. Past ke andaaze ke liye end mein <b>Partizip II + haben/sein</b> lagta hai, aur reported speech ke andar modal Konjunktiv I mein chala jaata hai: <b>m\u00fcsse</b>.' },
    { title: 'Integrationsmodell (Integration Model)', body: [ 'Time → Reporting → Speaker Attitude → Verb Choice → Complement Choice → Nominal Style → Register → Native-Level Expression. This checkpoint tests whether all eight skills combine naturally in one text.' ], hinglish: 'Yeh checkpoint alag-alag rules nahi poochhta \u2014 yeh dekhta hai ki aathon cheezein ek hi text mein saath chal rahi hain ya nahi: sahi tense, reported mood, speaker ka rukh, precise verb, sahi complement, nominal roop, aur register. Isliye neeche wali galtiyan dekho, aur jahan sochna pade wahan us chapter par wapas jao.' },
    { title: 'Meister-Tabelle', body: [ 'Consolidated reference across all eight chapters.' ], table: { head: ['Chapter', 'Skill', 'Core Insight'], rows: [ ['1', 'Zeitformen der Verben', 'Tense choice is perspective, not just grammar'], ['2-3', 'Präfixe & Ergänzungen', 'Precise verbs need their obligatory complements'], ['4', 'Nomen-Verb-Verbindungen', 'Every simple verb has a formal nominal twin'], ['6', 'Konjunktiv II', 'A dimmer switch for certainty and diplomacy'], ['7', 'Konjunktiv I', 'Invisible quotation marks for neutral reporting'], ['8', 'Modalverben', 'A pair of glasses for epistemic/deontic modality'] ] }, hinglish: 'Aathon chapters ka ek jagah summary \u2014 par har row ke saath yeh bhi yaad rakho ki uski sabse aam galti kya hai, kyunki exam mein wahi pakdi jaati hai.' },
    { title: 'Typische Fehler (common learner mistakes across Chapters 1–8)', body: [ 'One error from each major chapter, plus one that combines two. If any of these still needs thinking about, the chapter reference in the explanation tells you where to go.' ], mistakes: [
      { wrong: 'Die Ministerin erkl\u00e4rte, der Plan ist erfolgreich.', right: 'Die Ministerin erkl\u00e4rte, der Plan sei erfolgreich.', why: 'Ch.7: the Indikativ makes the writer vouch for the claim. <b>sei</b> keeps it as the minister\u2019s statement.' },
      { wrong: 'Wenn mehr Daten w\u00fcrden vorliegen, w\u00fcrde das Ergebnis klarer sein.', right: 'Wenn mehr Daten vorl\u00e4gen, w\u00e4re das Ergebnis klarer.', why: 'Ch.6: <b>sein</b> never takes w\u00fcrde \u2014 <b>w\u00e4re</b> is compulsory. And <i>vorliegen</i> is a strong verb, so the synthetic <b>vorl\u00e4gen</b> is preferred in writing.' },
      { wrong: 'Die Firma muss angeblich Verluste gemacht haben.', right: 'Die Firma soll Verluste gemacht haben.', why: 'Ch.8: for an unverified report German uses <b>sollen</b>. <b>m\u00fcssen</b> states the speaker\u2019s own conclusion, which contradicts <i>angeblich</i>.' },
      { wrong: 'Die Studie hat gemacht, dass der Effekt existiert, und eine Analyse gemacht.', right: 'Die Studie hat nachgewiesen, dass der Effekt existiert, und eine Analyse durchgef\u00fchrt.', why: 'Ch.2 and Ch.4: the precise prefix verb is <b>nachweisen</b>, and <b>Analyse</b> takes the support verb <b>durchf\u00fchren</b> \u2014 never <i>machen</i>.' },
      { wrong: 'Laut dem Bericht sei die Lage stabil, und die Kosten sind gesunken.', right: 'Laut dem Bericht sei die Lage stabil, und die Kosten seien gesunken.', why: 'Ch.7: once a passage is in reported mode every verb stays in Konjunktiv I \u2014 slipping back into the Indikativ silently makes the second claim your own.' }
    ], hinglish: 'Har bade chapter se ek galti, aur ek aisi jo do ko mila deti hai. Agar inme se kisi par sochna pad raha hai, to explanation mein diya chapter dobara dekh lo.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Read. Identify register. Identify grammar. Identify speaker attitude. Improve style. Improve precision. Produce the native-level version — this is the revision flow for every task in this checkpoint.' ], note: 'Memory trick: imagine you are conducting an international symposium. Each speaker represents one major grammar system — Zeitformen control time, Konjunktiv I controls reporting, Konjunktiv II controls attitude, Modalverben control certainty, Präfixverben control precision, Ergänzungen control structure, Nomen-Verb-Verbindungen control style. Goethe C2 expects you to coordinate the entire conference flawlessly.', hinglish: 'Har task mein wahi kram chalao \u2014 padho, register dekho, grammar dekho, phir yeh dekho ki bolne wala apni baat se kitni doori rakh raha hai, aur uske baad wording behtar karo. Khud se poochho ki behtar <b>kyun</b> hai. Yahan naya kuch nahi hai; aath chapters ka saara material pehle padha ja chuka hai.' }
  ],
  reading: {
    title: 'Zeitungsbericht: Untreueverfahren gegen Landrat eröffnet',
    titleEn: 'Reading A — Newspaper report: embezzlement proceedings opened against district administrator',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Staatsanwaltschaft', role: 'plain', en: 'prosecutor\'s office', hi: 'अभियोजन कार्यालय', type: 'Noun · fem.' },
      { w: 'erklärte', role: 'r-konjunktiv1', en: 'declared (part of neutral Konjunktiv-I reporting)', hi: '', type: 'Verb (Präteritum)' },
      { w: ',', plain: true },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Landrat', role: 'plain', en: 'district administrator', hi: 'ज़िला प्रशासक', type: 'Noun · masc.' },
      { w: 'sei', role: 'r-konjunktiv1', en: 'is (Konjunktiv I, neutral reporting, Satzende)', hi: '(Konjunktiv I, Satzende)', type: 'Verb · sein (Konjunktiv I)', why: 'The journalist reports the prosecutor\'s claim in Konjunktiv I ("sei"), keeping neutral distance rather than personally confirming guilt (this chapter).' },
      { w: 'seit', role: 'plain', en: 'for', hi: 'से', type: 'Präposition · Dat.' },
      { w: 'Jahren', role: 'plain', en: 'years (Satzende)', hi: 'सालों (Satzende)', type: 'Noun · plural' },
      { w: 'an', role: 'plain', en: 'in', hi: 'में', type: 'Präposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (neut. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'Bestechungssystem', role: 'plain', en: 'bribery system (Satzende)', hi: 'रिश्वत तंत्र (Satzende)', type: 'Noun · neut.' },
      { w: 'beteiligt', role: 'r-konjunktiv1', en: 'involved (Satzende, Konjunktiv I)', hi: 'शामिल (Satzende, Konjunktiv I)', type: 'Adjective (Satzende)' },
      { w: 'gewesen', role: 'r-konjunktiv1', en: '(Satzende, Konjunktiv I Perfekt)', hi: '(Satzende)', type: 'Verb · sein (Konjunktiv I Perfekt, Satzende)' },
      { w: '.', plain: true },
      { w: 'Dies', role: 'plain', en: 'this', hi: 'यह', type: 'Pronomen · Nom.' },
      { w: 'dürfte', role: 'r-epistemisch', en: 'is likely (Konjunktiv II epistemic modality)', hi: '', type: 'Modalverb (Konjunktiv II)' },
      { w: 'weitreichende', role: 'plain', en: 'far-reaching', hi: 'दूरगामी', type: 'Adjective · Akk.' },
      { w: 'Folgen', role: 'plain', en: 'consequences (Satzende)', hi: 'परिणाम (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Präposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'इस', type: 'Article · Akk.' },
      { w: 'Kreisverwaltung', role: 'plain', en: 'district administration (Satzende)', hi: 'ज़िला प्रशासन (Satzende)', type: 'Noun · fem.' },
      { w: 'haben', role: 'r-epistemisch', en: 'have (Satzende)', hi: 'होंगे (Satzende)', type: 'Verb (Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The prosecutor\'s office declared that the district administrator has been involved in a bribery system for years. This is likely to have far-reaching consequences for the district administration.',
    comprehension: [
      { q: 'Warum verwendet die Zeitung Konjunktiv I ("sei")?', options: ['Um die Aussage der Staatsanwaltschaft neutral zu berichten', 'Weil Indikativ grammatisch falsch wäre', 'Aus stilistischem Zufall'], answer: 0 },
      { q: 'Was zeigt "dürfte...haben"?', options: ['Epistemische Vermutung mit hoher Wahrscheinlichkeit', 'Eine strikte Verpflichtung', 'Ein direktes Zitat'], answer: 0 },
      { q: 'Bestätigt die Zeitung selbst, dass der Landrat schuldig ist?', options: ['Nein, sie berichtet nur die Aussage der Staatsanwaltschaft', 'Ja, vollständig', 'Das ist unklar'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Wissenschaftlicher Artikel', titleEn: 'Reading B — Scientific article',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Studie', role: 'plain', en: 'study', hi: 'study', type: 'Noun · fem.' },
      { w: 'weist', role: 'r-praefixe', en: 'proves (precise prefix verb, revising Chapter 2)', hi: '(Chapter 2 revision)', type: 'Verb (Präsens)' },
      { w: 'einen', role: 'plain', en: 'a (masc. akk.)', hi: 'ek', type: 'Article' },
      { w: 'Zusammenhang', role: 'plain', en: 'connection', hi: 'sambandh', type: 'Noun · masc. · Akk.' },
      { w: 'nach', role: 'r-praefixe', en: '(separable prefix, Satzende)', hi: '(Satzende)', type: 'Verbpräfix (Satzende)' },
      { w: ',', plain: true },
      { w: 'der', role: 'plain', en: 'which (masc. nom.)', hi: 'jo', type: 'Relativpronomen · Nom.' },
      { w: 'auf', role: 'r-ergaenzungen', en: 'on (obligatory complement, revising Chapter 3)', hi: '(Chapter 3 revision)', type: 'Präposition · Dat.' },
      { w: 'umfangreichen', role: 'plain', en: 'extensive', hi: 'vyapak', type: 'Adjective · Dat.' },
      { w: 'Daten', role: 'plain', en: 'data (Satzende)', hi: '(Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'beruht', role: 'r-ergaenzungen', en: 'is based (Satzende)', hi: 'aadhaarit hai (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The study proves a connection, which is based on extensive data.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_009_L001', speaker: 'Brunhilde', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, der Minister habe laut Agentur einen historischen Erfolg verkündet.', en: 'Timo, according to the agency, the minister has declared a historic success.' },
      { id: 'C2_009_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Bevor wir das drucken, sollten wir die Zahlen selbst nachprüfen.', en: 'Before we print that, we should verify the figures ourselves.' },
      { id: 'C2_009_L003', speaker: 'Brunhilde', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Einverstanden. Falls sie nicht standhalten, formulieren wir vorsichtiger: der Minister behaupte lediglich einen Erfolg.', en: 'Agreed. If they don\'t hold up, we\'ll phrase it more cautiously: the minister merely claims a success.' },
      { id: 'C2_009_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Genau, so schützen wir uns und bleiben trotzdem sachlich.', en: 'Exactly, that way we protect ourselves and still stay factual.' }
    ],
    transcript: 'Timo, der Minister habe laut Agentur einen historischen Erfolg verkündet. Bevor wir das drucken, sollten wir die Zahlen selbst nachprüfen. Einverstanden. Falls sie nicht standhalten, formulieren wir vorsichtiger: der Minister behaupte lediglich einen Erfolg. Genau, so schützen wir uns und bleiben trotzdem sachlich.',
    translation: 'Timo, according to the agency, the minister has declared a historic success. Before we print that, we should verify the figures ourselves. Agreed. If they don\'t hold up, we\'ll phrase it more cautiously: the minister merely claims a success. Exactly, that way we protect ourselves and still stay factual.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'Minister' },
      { w: 'habe' },
      { w: 'laut' },
      { w: 'Agentur' },
      { w: 'einen' },
      { w: 'historischen' },
      { w: 'Erfolg' },
      { w: 'verkündet' },
      { w: '.', plain: true },
      { w: 'Bevor' },
      { w: 'wir' },
      { w: 'das' },
      { w: 'drucken' },
      { w: ',', plain: true },
      { w: 'sollten' },
      { w: 'wir' },
      { w: 'die' },
      { w: 'Zahlen' },
      { w: 'selbst' },
      { w: 'nachprüfen' },
      { w: '.', plain: true },
      { w: 'Einverstanden' },
      { w: '.', plain: true },
      { w: 'Falls' },
      { w: 'sie' },
      { w: 'nicht' },
      { w: 'standhalten' },
      { w: ',', plain: true },
      { w: 'formulieren' },
      { w: 'wir' },
      { w: 'vorsichtiger' },
      { w: ':', plain: true },
      { w: 'der' },
      { w: 'Minister' },
      { w: 'behaupte' },
      { w: 'lediglich' },
      { w: 'einen' },
      { w: 'Erfolg' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'so' },
      { w: 'schützen' },
      { w: 'wir' },
      { w: 'uns' },
      { w: 'und' },
      { w: 'bleiben' },
      { w: 'trotzdem' },
      { w: 'sachlich' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was will Timo machen, bevor die Geschichte gedruckt wird?', qEn: 'What does Timo want to do before printing the story?', options: ['den Minister anrufen', 'die Zahlen selbst nachprüfen', 'das Thema fallenlassen', 'sofort veröffentlichen'], optionsEn: ['call the minister', 'check the figures themselves', 'drop the topic', 'publish immediately'], answer: 1,
        explain: '"Wir sollten die Zahlen selbst nachprüfen."' },
      { q: 'Wie formulieren sie es, wenn die Zahlen nicht haltbar sind?', qEn: 'How will they phrase it if the numbers don\'t hold up?', options: ['der Minister habe recht', 'der Minister behaupte lediglich einen Erfolg', 'der Minister lüge', 'sie ignorieren die Zahlen'], optionsEn: ['that the minister is right', 'that the minister is merely claiming a success', 'that the minister is lying', 'they ignore the figures'], answer: 1,
        explain: '"Der Minister behaupte lediglich einen Erfolg."' }
    ]
  },
  speaking: [
    { task: "Der Minister hat laut Agentur einen Erfolg verkündet. Was schlägst du vor?", taskEn: "According to the agency the minister announced a success. What do you propose?", de: "Bevor wir das drucken, sollten wir die Zahlen selbst nachprüfen.", en: "Before we print it, we should check the figures ourselves." },
    { task: "Prüfung, Teil 1: Berichte die Meldung neutral.", taskEn: "Exam, Part 1: report the news neutrally.", de: "Nach Angaben der Agentur habe der Minister einen historischen Erfolg verkündet.", en: "According to the agency the minister announced a historic success." },
    { task: "Prüfung, Teil 2: Sag, was du an der Studie nachweisen kannst.", taskEn: "Exam, Part 2: say what you can demonstrate about the study.", de: "Wir können nachweisen, dass der Effekt auf zwei Kohorten beruht.", en: "We can demonstrate that the effect rests on two cohorts." },
    { task: "Prüfung, Teil 3: Formuliere eine vorsichtige Einschätzung.", taskEn: "Exam, Part 3: formulate a cautious assessment.", de: "Das dürfte stimmen, sicher ist es aber nicht.", en: "That's likely right, but it isn't certain." },
    { task: "Prüfung: Widersprich diplomatisch und schlage etwas vor.", taskEn: "Exam: disagree diplomatically and propose something.", de: "Die Regierung sollte handeln; zunächst wäre eine eigene Analyse durchzuführen.", en: "The government should act; first an independent analysis should be carried out." }
  ],
  writing: {
    prompt: 'TASK 1 — Reporting conversion (100 words): Rewrite a newspaper article using authentic Konjunktiv I. Explain every reporting decision.\n\nTASK 2 — Diplomacy upgrade (100 words): Rewrite an argumentative essay using Konjunktiv II and advanced modal verbs to improve diplomacy and academic style.\n\nTASK 3 — Precision editing (150 words): Edit a scientific article by improving tense usage, prefix verbs, complement structures, and noun-verb constructions.\n\nTASK 4 — Integrated essay (600 words): Write a Goethe C2 essay naturally integrating advanced tense selection, Konjunktiv I, Konjunktiv II, sophisticated modal verbs, prefix verbs, verb valency, noun-verb constructions, academic register, scientific register, and journalistic neutrality.',
    starters: ['Die Ministerin erklärte, ...', 'Das dürfte stimmen, weil...', 'Die Studie weist nach, dass...'],
    placeholder: 'Wähle eine Aufgabe und integriere alle acht Fähigkeiten aus Kapitel 1-8...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which combination best demonstrates integrated C2 mastery of Chapters 1-8?', options: ['Konjunktiv I for neutral reporting + epistemic hedging + precise prefix verbs + obligatory complements, all register-consistent', 'Using only Indikativ throughout a formal newspaper report', 'Randomly switching between müssen and sollen without reason'], answer: 0, explain: 'C2 mastery means all eight skills work together consistently, like a symposium, not in isolation.' },
    gap: { sentence: ['Die Ministerin erklärte, der Plan ', ' erfolgreich.'], gaps: [ { answer: 'sei', accepts: ['sei'] } ], explain: '"sei" (Konjunktiv I) reports the claim neutrally, from Chapter 7.' },
    match: { q: 'Match each concept to its source chapter.', pairs: [ { noun: 'Historisches Präsens', art: 'Chapter 1 — Zeitformen der Verben' }, { noun: 'die Ministerin erklärte, ... sei', art: 'Chapter 7 — Konjunktiv I' }, { noun: 'Das dürfte stimmen.', art: 'Chapter 6 — Konjunktiv II' }, { noun: 'Er dürfte zu Hause sein.', art: 'Chapter 8 — Modalverben' } ] },
    builder: { target: 'Build: "The minister declared that the plan is successful." (integrating Ch7)', bank: ['Die', 'Ministerin', 'erklärte', ',', 'der', 'Plan', 'sei', 'erfolgreich', '.'], answer: ['Die', 'Ministerin', 'erklärte', ',', 'der', 'Plan', 'sei', 'erfolgreich', '.'], roles: { 'erklärte': 'r-konjunktiv1', 'sei': 'r-konjunktiv1' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Ministerin sagt, der Plan ist erfolgreich, und die Regierung muss handeln.', right: 'Die Ministerin erklärte, der Plan sei erfolgreich, und die Regierung sollte handeln.', explain: 'This combines two fixes: Konjunktiv I ("sei") for neutral reporting (Chapter 7), and "sollte" instead of "muss" for a diplomatic recommendation rather than a blunt obligation (Chapter 8).' }
  },
  quiz: [
    { q: 'What does this checkpoint\'s "symposium" memory trick represent?', options: ['Chapters 1-8 as speakers (tense, reporting, modality, prefixes, etc.) now coordinating together', 'A literal chapter about conferences', 'A reminder that grammar has no connection to style'], answer: 0, explain: 'Each chapter taught one "speaker"; this checkpoint is the symposium where they must coordinate.' },
    { q: 'Which is a Chapter 7 (Konjunktiv I) mistake to watch for?', options: ['Using Indikativ where neutral reporting is needed, sounding personally convinced', 'Never using Konjunktiv I at all', 'Avoiding reporting verbs entirely'], answer: 0, explain: 'Indikativ collapses the epistemic distance a neutral reporter should maintain.' },
    { q: 'Which is a Chapter 6/8 (Konjunktiv II / Modalverben) mistake to watch for?', options: ['Missing epistemic hedging in scientific/academic claims', 'Always including too much hedging', 'Never using modal verbs'], answer: 0, explain: 'Bare, unhedged claims sound overconfident in academic and scientific German.' },
    { q: 'Why does "eine Studie weist nach" (Chapter 2) often sound more native than "eine Studie zeigt"?', options: ['It signals precision appropriate to academic/scientific register', 'Because "zeigen" is grammatically incorrect', 'Because it is shorter'], answer: 0, explain: 'Precise prefix verbs are a hallmark of native academic writing.' },
    { q: 'What is the key integration goal of Goethe Mini 2?', options: ['Combining tense, reporting, modality, prefixes, complements, and nominal style consistently in one text', 'Memorizing each chapter\'s rules in isolation', 'Avoiding all eight skills in favor of simple grammar'], answer: 0, explain: 'C2 mastery is demonstrated by seamless integration across all eight skills, not isolated recall.' }
  ],
  takeaways: [
    { c: 'r-symposium-metapher', html: 'Chapters 1-8 taught eight "speakers" — tense, prefixes, complements, nominal style, Konjunktiv II, Konjunktiv I, and modal verbs. This checkpoint coordinates them like a symposium.' },
    { c: 'r-konjunktiv1', html: 'Revision: Konjunktiv I is invisible quotation marks, reporting claims (die Ministerin erklärte, ... sei) without personally confirming them.' },
    { c: 'r-epistemisch', html: 'Revision: epistemic modality (dürfte/könnte/mag) and Konjunktiv II (das dürfte stimmen) express degrees of certainty, not literal fact.' },
    { c: 'r-praefixe', html: 'Revision: precise prefix verbs (nachweisen, darlegen) replace generic verbs for native-level formal register.' },
    { c: 'r-ergaenzungen', html: 'Revision: obligatory complements (beruhen auf, zweifeln an) cannot be omitted without leaving a verb semantically incomplete.' }
  ],
  revisionTips: [
    'Write one paragraph that deliberately combines Konjunktiv I reporting, epistemic hedging, a precise prefix verb, and an obligatory complement.',
    'Revisit your weakest of the eight chapters and rewrite three of its example sentences from memory.',
    'Read one newspaper article and identify at least one example each of neutral reporting (Konjunktiv I), epistemic hedging (Konjunktiv II/modals), precise prefix verb, and nominal construction.'
  ]
};
window.CHAPTER = CHAPTER;
