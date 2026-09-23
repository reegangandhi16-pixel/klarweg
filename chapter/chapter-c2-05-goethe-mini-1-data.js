/* KLARWEG CHAPTER DATA — C2 · Chapter 5
   "Goethe Mini 1" — comprehensive revision & assessment checkpoint
   covering Chapters 1-4 (Zeitformen der Verben, Verben mit Präfixen,
   Verben und ihre Ergänzungen, Nomen-Verb-Verbindungen). NO new
   grammar, NO new vocabulary — integration and mastery only.
   Dialogue: Roswitha and Timo ONLY. */
const CHAPTER = {
  id: 'c2-05-goethe-mini-1',
  phase: 'C2 · Das Verbalsystem auf C2-Niveau',
  number: 5,
  title: 'Goethe Mini 1',
  titleEn: 'Checkpoint — Chapters 1–4 integrated',
  description: 'A professional orchestra: Chapter 1 taught rhythm (time), Chapter 2 the instruments (prefix verbs), Chapter 3 harmony (complements), Chapter 4 orchestration (nominal style). This is the first full performance.',
  xp: 1300, time: 150, difficulty: 'Checkpoint',
  nextChapter: { number: 6, title: 'Konjunktiv II', titleEn: 'Konjunktiv II as speaker attitude' , href: 'chapter-c2-06-konjunktiv-ii.html' },
  prevChapter: { number: 4, title: 'Nomen-Verb-Verbindungen', titleEn: 'Noun-verb constructions at native level', href: 'chapter-c2-04-nomen-verb-verbindungen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'The first full <em>performance</em> — every instrument together.',
    intro: 'The night before her defense, Roswitha reflects on one point she still doubts, and Timo asks her to set it out more precisely — the first full performance of tense selection, prefix verbs, complements, and nominal style together.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See how tense, prefix verbs, complements, and nominal style combine into one native-level performance'],
    scene: 'Vorbereitung auf die erste Goethe-C2-Simulationsprüfung',
    femaleSpeakers: ['Roswitha'],
    dialogue: [
      { speaker: 'Roswitha', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'reflektiere', role: 'r-verb', en: 'reflect', hi: 'सोचती हूँ', pron: 're-flek-TEE-ruh', type: 'Verb · reflektieren über (ich, recycled C2)' },
        { w: 'über', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'Ü-ber', type: 'Preposition' },
        { w: 'meine', role: 'r-akkusativ', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive · acc.' },
        { w: 'Verteidigung', role: 'r-akkusativ', en: 'defense', hi: 'बचाव', pron: 'fer-TY-di-gung', type: 'Noun · fem.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'I reflect on my defense for tomorrow.', hi: 'Main kal ke bachaav par soch rahi hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Analyse', role: 'r-subject', en: 'analysis', hi: 'विश्लेषण', pron: 'a-na-LÜ-zuh', type: 'Noun · fem.' },
        { w: 'beruht', role: 'r-verb', en: 'is based', hi: 'आधारित है', pron: 'be-ROOT', type: 'Verb · beruhen auf', why: 'beruhen auf + Dativ = to be based on (this chapter).', ex: 'Deine Analyse beruht auf soliden Daten.', exEn: 'Your analysis is based on solid data.' },
        { w: 'auf', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition (part of beruhen auf)' },
        { w: 'soliden', role: 'r-dativ', en: 'solid', hi: 'ठोस', pron: 'zo-LEE-den', type: 'Adjective · dative' },
        { w: 'Daten', role: 'r-dativ', en: 'data (dat.)', hi: 'डेटा पर', pron: 'DAH-ten', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'Your analysis is based on solid data.', hi: 'Tumhaara vishleshan thos data par aadhaarit hai.' },
      { speaker: 'Roswitha', tokens: [
        { w: 'Trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: 'zweifle', role: 'r-verb', en: 'I doubt', hi: 'शक करती हूँ', pron: 'TSVY-fluh', type: 'Verb · zweifeln an (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'an', role: 'r-preposition', en: 'about', hi: 'पर', pron: 'an', type: 'Preposition' },
        { w: 'einem', role: 'r-dativ', en: 'a (neut. dat.)', hi: 'एक', pron: 'EYE-naym', type: 'Article · dative' },
        { w: 'Punkt', role: 'r-dativ', en: 'point (dat.)', hi: 'बिंदु पर', pron: 'punkt', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'Nevertheless I doubt about one point.', hi: 'Phir bhi mujhe ek bindu par shak hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Kannst', role: 'r-modalverb', en: 'can', hi: 'सकती हो', pron: 'KANST', type: 'Modal · können (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'genauer', role: 'r-akkusativ', en: 'more precisely', hi: 'ज़्यादा सटीक', pron: 'ge-NOW-er', type: 'Adverb · Komparativ' },
        { w: 'darlegen', role: 'r-verb', en: 'set out', hi: 'व्यक्त करना', pron: 'DAHR-lay-gen', type: 'Verb · infinitive (Satzende, recycled C2)' },
        { w: '?', plain: true }
      ], en: 'Can you set that out more precisely?', hi: 'Kya tum ise zyaada sateek vyakt kar sakti ho?' },
      { speaker: 'Roswitha', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'muss', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'mus', type: 'Modal · müssen (ich)' },
        { w: 'noch', role: 'r-akkusativ', en: 'still', hi: 'अभी और', pron: 'nokh', type: 'Adverb' },
        { w: 'nachweisen', role: 'r-verb', en: 'prove', hi: 'साबित करना', pron: 'NAHKH-vy-zen', type: 'Verb · infinitive (Satzende)', why: 'nachweisen = to prove/demonstrate (recycled C1/C2).', ex: 'nachweisen' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Methode', role: 'r-subject', en: 'method', hi: 'विधि', pron: 'me-TOH-duh', type: 'Noun · fem.' },
        { w: 'zuverlässig', role: 'r-akkusativ', en: 'reliable', hi: 'भरोसेमंद', pron: 'TSOO-fer-le-sikh', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I must still prove that the method is reliable.', hi: 'Mujhe abhi aur saabit karna hai ki vidhi bharosemand hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'zuversichtlich', role: 'r-akkusativ', en: 'confident', hi: 'आश्वस्त', pron: 'TSOO-fer-zikht-likh', type: 'Adjective (recycled C1)' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'schaffst', role: 'r-verb', en: 'manage', hi: 'कर लोगी', pron: 'SHAFST', type: 'Verb · schaffen (du, Satzende)' },
        { w: '.', plain: true }
      ], en: 'I am confident that you will manage it.', hi: 'Mujhe vishwaas hai ki tum yeh kar logi.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Chapters 1-4 taught four <span class="de r-orchester-metapher">instruments</span> — time, prefixes, complements, nominal style. This checkpoint is the first full performance.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. This is GOETHE MINI 1 — a comprehensive REVISION checkpoint integrating Chapters 1-4: (1) Zeitformen der Verben — stylistic tense choice: Historical Present for narrative immediacy (1939 beginnt der Krieg), Futur as epistemic assumption (er wird schon angekommen sein), register-based tense selection. (2) Verben mit Präfixen — semantic precision of prefix verbs over generic verbs (nachweisen vs. zeigen, darlegen vs. sagen), prefix families from one base verb, literal vs. metaphorical meaning. (3) Verben und ihre Ergänzungen — verb valency, obligatory vs. optional complements (reflektieren über, beruhen auf, zweifeln an), semantic roles, complement alternation for register. (4) Nomen-Verb-Verbindungen — nominal style as a stylistic choice (eine Analyse durchführen vs. analysieren), semantic nuances among near-synonymous constructions, register-based selection across academic/scientific/legal/journalistic contexts. NO new grammar is introduced in this chapter — assess ONLY whether the learner integrates all four skills naturally and simultaneously in one text, not in isolation. The most important things to catch: reverting to default/generic verbs and simple tense choices instead of the more precise, register-appropriate alternatives practiced in Chapters 1-4; inconsistent integration (using a precise nominal construction in one sentence but a generic verb in the next, without stylistic reason); errors specific to any of the four topics (see above) that would have been chapter-specific mistakes. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag issues that could be traced to any of the four chapters\' content; prioritize noting where the learner could have chosen a more native, integrated combination of tense + prefix verb + complement + nominal style, rather than listing chapter-by-chapter grammar rules. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (note which chapter\'s skill it draws on). If none: <li>No errors — well done.</li> 3) <p><b>Integration check:</b> one sentence on whether the four skills work together naturally, like an orchestra, rather than in isolation.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — you integrate tense, prefix verbs, complements, and nominal style like a native speaker. Ready for the next chapter.', mid: 'Good. Revisit the weakest of the four skills (tense, prefixes, complements, nominal style) before continuing.', low: 'Worth revisiting Chapters 1-4 individually — remember: this checkpoint is the first full performance, and every instrument must play together.' },
  parserSentence: [ { w: 'Die', role: 'plain' }, { w: 'Studie', role: 'r-nominalstil' }, { w: 'weist', role: 'r-praefixe' }, { w: 'nach', role: 'r-praefixe' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: this checkpoint is the first full performance where all four C2 skills from Chapters 1-4 play together.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Roswitha and Timo revise together, naturally reviewing tense, prefix verbs, complements, and nominal style.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Review key vocabulary from Chapters 1-4 — no new words, full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Integrated revision of stylistic tense choice, prefix verb precision, verb valency, and nominal style.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze a historical article, scientific publication, government report, and literary essay for integrated C2 features.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify narrative perspective, prefix verbs, complements, and stylistic variation across four listening contexts.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice academic presentation, literary interpretation, scientific explanation, and stylistic justification.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite across narrative perspectives, replace weak verbs, upgrade to academic style, and write a 550-word integrated essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Complete grammar, vocabulary, prefix verb, valency, complement, and nominal style review with error correction and stylistic editing.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions integrating Chapters 1-4. Pass to bank the full 1300 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review your C2 Progress Dashboard across Chapters 1-5.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'Revision vocabulary from Chapters 1-4 with translations, synonyms, antonyms, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '16 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Integrated grammar review, sentence transformation, and stylistic editing drills, plus the full 550-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '20 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Integration Model, Mastery Scale, Revision Flowchart, and a consolidated reference of Chapters 1-4.', pdfUrl: '/pdfs/grammar.pdf', size: '18 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: '1989 fällt die Mauer.', text: 'Recall and apply the Historical Present for narrative immediacy (Chapter 1)' },
    { de: 'Die Studie weist einen Zusammenhang nach.', text: 'Choose the precise prefix verb over the generic alternative (Chapter 2)' },
    { de: 'Die Ergebnisse beruhen auf umfangreichen Daten.', text: 'Supply the obligatory complement a verb requires (Chapter 3)' },
    { de: 'Wir führen eine Analyse durch.', text: 'Choose a nominal construction for academic register (Chapter 4)' },
    { de: 'Vier Instrumente, ein Orchester.', text: 'Integrate all four C2 skills together, naturally, in one performance' }
  ],
  vocab: [
    { de: 'reflektieren über', pos: 'verb + präposition (Akk.)', level: 'C2', register: 'academic', en: 'to reflect on', hi: 'चिंतन करना', synonyms: 'nachdenken über', antonyms: null, ex: 'Die Studie reflektiert über die gesellschaftlichen Konsequenzen.', exEn: 'The study reflects on the societal consequences.', exHi: 'Study samajik parinaamon par chintan karti hai.', ex2: 'Wir sollten gemeinsam über unsere Methodik reflektieren.', ex2En: 'We should reflect together on our methodology.', ex2Hi: 'Humein saath mein apni methodology par chintan karna chahiye.' },
    { de: 'nachweisen', pos: 'verb', level: 'C2', register: 'academic/scientific', en: 'to prove, demonstrate', hi: 'सिद्ध करना', synonyms: 'beweisen, belegen', antonyms: 'widerlegen', ex: 'Du schreibst "zeigen", aber hier passt "nachweisen" besser.', exEn: 'You write "zeigen", but here "nachweisen" fits better.', exHi: 'Tum "zeigen" likhte ho, lekin yahaan "nachweisen" behtar baithta hai.', ex2: 'Die Studie weist einen kausalen Zusammenhang nach.', ex2En: 'The study proves a causal connection.', ex2Hi: 'Study ek kaaranaatmak sambandh sidhh karti hai.' },
    { de: 'darlegen', pos: 'verb', level: 'C2', register: 'academic/formal', en: 'to set out, explain systematically', hi: 'विस्तार से प्रस्तुत करना', synonyms: 'erläutern, ausführen', antonyms: 'verschweigen', ex: 'Statt "sagen" nutze ich "darlegen" für dieses Argument.', exEn: 'Instead of "sagen" I use "darlegen" for this argument.', exHi: '"Sagen" ki jagah main is argument ke liye "darlegen" istemaal karta hoon.', ex2: 'Die Autorin legt ihre Methodik klar dar.', ex2En: 'The author sets out her methodology clearly.', ex2Hi: 'Lekhika apni methodology saaf taur par prastut karti hai.' },
    { de: 'beruhen auf', pos: 'verb + präposition (Dat.)', level: 'C2', register: 'academic/scientific', en: 'to be based on', hi: 'पर आधारित होना', synonyms: 'basieren auf', antonyms: null, ex: 'Die Ergebnisse beruhen auf umfangreichen Daten.', exEn: 'The results are based on extensive data.', exHi: 'Parinaam vyapak data par aadhaarit hain.', ex2: 'Diese Theorie beruht auf jahrzehntelanger Forschung.', ex2En: 'This theory is based on decades of research.', ex2Hi: 'Yeh theory dashkon ke research par aadhaarit hai.' },
    { de: 'zweifeln an', pos: 'verb + präposition (Dat.)', level: 'C2', register: 'both', en: 'to doubt', hi: 'पर संदेह करना', synonyms: 'in Frage stellen', antonyms: 'vertrauen auf', ex: 'Kritiker zweifeln an der Aussagekraft der Ergebnisse.', exEn: 'Critics doubt the significance of the results.', exHi: 'Aalochak parinaamon ki mahatta par sandeh karte hain.', ex2: 'Er zweifelte nie an ihrer Loyalität.', ex2En: 'He never doubted her loyalty.', ex2Hi: 'Use kabhi bhi uski wafaadaari par sandeh nahi hua.' },
    { de: 'eine Analyse durchführen', pos: 'noun-verb construction', level: 'C2', register: 'academic/scientific', en: 'to carry out an analysis', hi: 'विश्लेषण करना', synonyms: 'analysieren', antonyms: null, ex: 'Statt "analysieren" schreibst du besser "eine Analyse durchführen".', exEn: 'Instead of "analysieren" you should better write "eine Analyse durchführen".', exHi: '"Analysieren" ki jagah tum behtar "eine Analyse durchführen" likh sakte ho.', ex2: 'Die Forscher führen eine umfassende Analyse der Daten durch.', ex2En: 'The researchers carry out a comprehensive analysis of the data.', ex2Hi: 'Shodhkarta data ka vyapak vishleshan karte hain.' },
    { de: 'eine Entscheidung herbeiführen', pos: 'noun-verb construction', level: 'C2', register: 'academic/formal', en: 'to bring about a decision', hi: 'निर्णय लाना', synonyms: 'eine Entscheidung treffen', antonyms: null, ex: 'Der Ausschuss führte nach langer Debatte eine Entscheidung herbei.', exEn: 'The committee brought about a decision after a long debate.', exHi: 'Committee ne lambi bahas ke baad nirnay lekar aaya.', ex2: 'Wir müssen eine Entscheidung herbeiführen, bevor die Frist abläuft.', ex2En: 'We must bring about a decision before the deadline expires.', ex2Hi: 'Deadline khatam hone se pehle humein nirnay lekar aana hoga.' }
  ],
  grammar: [
    { title: 'Zeitformen der Verben — Revision (Chapter 1)', body: [ 'Verb tense is not only grammar — it is perspective. Historical Present (1939 beginnt der Krieg) creates narrative immediacy for completed historical events. Futur I/II often expresses epistemic assumption (er wird schon angekommen sein), not literal future time.' ], hinglish: 'Tense ka chunav sirf samay nahi batata \u2014 woh nazariya batata hai. Historical Present se poori hui purani ghatna bhi saamne hoti hui lagti hai: <span class="de">1939 beginnt der Krieg</span>. Aur <b>Futur I/II</b> aksar future ke liye nahi, balki andaaze ke liye aata hai: <span class="de">Er wird schon angekommen sein</span> matlab \u201cwoh pahunch hi gaya hoga\u201d.' },
    { title: 'Verben mit Präfixen — Revision (Chapter 2)', body: [ 'Every verb is the trunk of a tree; each prefix grows into a different branch. Precise academic prefix verbs (nachweisen, darlegen, feststellen) replace generic verbs (zeigen, sagen, machen) for native-level formal writing.' ], hinglish: 'Ek base verb se poori family nikalti hai, aur har prefix matlab ko alag taraf mod deta hai. Academic writing mein precise prefix verbs chahiye \u2014 <b>nachweisen</b>, <b>darlegen</b>, <b>feststellen</b> \u2014 <i>zeigen</i>, <i>sagen</i>, <i>machen</i> ki jagah. Aur saath yeh bhi yaad rakho ki prefix alag hota hai ya nahi, kyunki usi se Partizip II tay hota hai: <b>nachgewiesen</b>, par <b>bekommen</b>.' },
    { title: 'Verben und ihre Ergänzungen — Revision (Chapter 3)', body: [ 'Every verb is a stage director, deciding which complements are obligatory and cannot be omitted. Obligatory complements (reflektieren über, beruhen auf, zweifeln an) cannot be omitted without leaving a verb semantically incomplete.' ], hinglish: 'Har verb tay karta hai ki uske saath kya zaroori hai. Shak ho to us hisse ko <b>hata kar</b> dekho \u2014 sentence toot gaya to woh complement tha, aur sirf detail kam hui to adverbial. Aur har prepositional complement apna case leke aata hai: <b>beruhen auf</b> + Dativ (reflexive nahi), <b>sich beziehen auf</b> + Akkusativ (reflexive), <b>zweifeln an</b> + Dativ.' },
    { title: 'Nomen-Verb-Verbindungen — Revision (Chapter 4)', body: [ 'Every simple verb has a formal twin. The noun-verb construction (eine Analyse durchführen, eine Entscheidung herbeiführen) is chosen when precision, objectivity and formality matter.' ], hinglish: 'Har simple verb ka ek formal roop hota hai \u2014 <i>analysieren</i> se <span class="de">eine Analyse durchf\u00fchren</span>. Yeh tab chuna jaata hai jab precision aur objectivity chahiye ho. Par support verb fix hota hai: <b>Entscheidung treffen</b>, <b>Analyse durchf\u00fchren</b>, <b>Antrag stellen</b> \u2014 <i>machen</i> yahan lagbhag kabhi nahi aata.' },
    { title: 'Integrationsmodell (Integration Model)', body: [ 'Time → Verb Choice → Complement Choice → Nominal Style → Register → Native-Level Expression. This checkpoint tests whether all four skills combine naturally in one text, not whether each is known in isolation.' ], hinglish: 'Yeh checkpoint alag-alag rules nahi poochhta \u2014 yeh dekhta hai ki chaaron cheezein ek hi text mein saath chal rahi hain ya nahi: sahi tense, precise prefix verb, sahi complement, aur register ke hisaab se nominal roop. Isliye ise padhne ka tareeka yeh hai \u2014 neeche wali galtiyan dekho, aur jahan sochna pade wahan us chapter par wapas jao.' },
    { title: 'Meister-Tabelle', body: [ 'Consolidated reference across all four chapters.' ], table: { head: ['Chapter', 'Skill', 'Core Insight'], rows: [ ['1', 'Zeitformen der Verben', 'Tense choice is perspective, not just grammar'], ['2', 'Verben mit Präfixen', 'One trunk, many branches — precise prefix verbs replace generic ones'], ['3', 'Verben und ihre Ergänzungen', 'The verb is a stage director deciding obligatory complements'], ['4', 'Nomen-Verb-Verbindungen', 'Every simple verb has a formal nominal twin'] ] }, hinglish: 'Chaaron chapters ka ek jagah summary \u2014 par asli kaam ki cheez yeh hai ki har row ke saath yeh bhi yaad rahe ki uski sabse aam galti kya hai.' },
    { title: 'Typische Fehler (common learner mistakes across Chapters 1–4)', body: [ 'One error from each of the four chapters, plus one that combines two. If any of these still needs thinking about, the chapter reference in the explanation tells you where to go.' ], mistakes: [
      { wrong: 'Morgen werde ich die Analyse durchf\u00fchren werden.', right: 'Morgen f\u00fchre ich die Analyse durch. / Morgen werde ich die Analyse durchf\u00fchren.', why: 'Ch.1: <b>werden</b> appears once. And with a time word the plain Pr\u00e4sens is the more natural choice \u2014 note the separable prefix closes the clause.' },
      { wrong: 'Die Studie hat gemacht, dass der Effekt existiert.', right: 'Die Studie hat nachgewiesen, dass der Effekt existiert.', why: 'Ch.2: academic German needs the precise prefix verb <b>nachweisen</b>. It is separable, so the Partizip II is <b>nachgewiesen</b>.' },
      { wrong: 'Die Theorie beruht sich auf empirischen Daten.', right: 'Die Theorie beruht auf empirischen Daten.', why: 'Ch.3: <b>beruhen auf</b> is not reflexive \u2014 only <b>sich beziehen auf</b> is. Same preposition, different reflexivity.' },
      { wrong: 'Die Kommission hat eine Entscheidung gemacht.', right: 'Die Kommission hat eine Entscheidung getroffen.', why: 'Ch.4: the support verb for <b>Entscheidung</b> is <b>treffen</b> \u2014 <i>machen</i> is wrong with almost every noun in these constructions.' },
      { wrong: 'Die Beh\u00f6rde warnt \u00fcber die Risiken und hat Ma\u00dfnahmen genommen.', right: 'Die Beh\u00f6rde warnt vor den Risiken und hat Ma\u00dfnahmen ergriffen.', why: 'Ch.3 and Ch.4 together: <b>warnen vor</b> + Dativ, and <b>Ma\u00dfnahmen ergreifen</b>. Both errors come from mapping English straight onto German.' }
    ], hinglish: 'Chaar chapters se ek-ek galti, aur ek aisi jo do ko mila deti hai. Agar inme se kisi par sochna pad raha hai, to explanation mein diya chapter dobara dekh lo.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Read. Analyze. Identify grammar. Identify style. Improve wording. Explain improvement. Produce the native-level version — this is the revision flow for every task in this checkpoint.' ], note: 'Memory trick: imagine building a professional orchestra. Chapter 1 taught rhythm (time). Chapter 2 taught instruments (prefix verbs). Chapter 3 taught harmony (verb complements). Chapter 4 taught orchestration (noun-verb constructions). This chapter is the first full performance, where every instrument must work together naturally.', hinglish: 'Har task mein wahi kram chalao \u2014 padho, grammar dekho, style dekho, phir wording behtar karo aur khud se poochho ki behtar <b>kyun</b> hai. Yahan naya kuch nahi hai; chaar chapters ka saara material pehle padha ja chuka hai, aur yeh sirf dikhata hai ki woh apne aap aa raha hai ya nahi.' }
  ],
  reading: {
    title: 'Zeitungskommentar: Ein Land erinnert sich',
    titleEn: 'Reading A — Newspaper commentary: a country remembers',
    tokens: [
      { w: 'In', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'diesen', role: 'plain', en: 'these (plural dat.)', hi: 'इन', type: 'Determiner · Dat.' },
      { w: 'Tagen', role: 'plain', en: 'days (Satzende)', hi: 'दिनों (Satzende)', type: 'Noun · plural' },
      { w: 'erinnert', role: 'plain', en: 'remembers', hi: 'याद करता है', type: 'Verb · sich erinnern' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'Land', role: 'plain', en: 'country (Satzende)', hi: 'देश (Satzende)', type: 'Noun · neut.' },
      { w: 'an', role: 'plain', en: 'of', hi: 'को', type: 'Preposition · Akk.' },
      { w: 'jene', role: 'plain', en: 'that (fem. akk.)', hi: 'उस', type: 'Determiner' },
      { w: 'Nacht', role: 'plain', en: 'night (Satzende)', hi: 'रात (Satzende)', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'which (fem. dat.)', hi: 'जिसमें', type: 'Relativpronomen · Dat.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Mauer', role: 'r-historisches-praesens', en: 'the Wall (opens a historical-present sentence)', hi: 'दीवार (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'fällt', role: 'r-historisches-praesens', en: 'falls (historical present — narrative immediacy)', hi: 'गिरती है (historical present)', type: 'Verb (Präsens, Historisches Präsens)', why: 'The historical present ("fällt" instead of "fiel") gives the sentence narrative immediacy — a deliberate stylistic choice (this chapter).' },
      { w: '.', plain: true },
      { w: 'Historiker', role: 'plain', en: 'historians', hi: 'इतिहासकार', type: 'Noun · plural' },
      { w: 'weisen', role: 'r-praefixe', en: 'point out (part of "hinweisen" — precise prefix verb)', hi: '', type: 'Verb (Präsens)' },
      { w: 'seit', role: 'plain', en: 'for', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'Jahren', role: 'plain', en: 'years (Satzende)', hi: 'सालों (Satzende)', type: 'Noun · plural' },
      { w: 'darauf', role: 'r-praefixe', en: 'to it (part of "hinweisen auf", Satzende)', hi: '(hinweisen ka prefix, Satzende)', type: 'Pronominaladverb (Satzende)' },
      { w: 'hin', role: 'r-praefixe', en: '(completing "hinweisen auf")', hi: '', type: 'Verbpräfix' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'diese', role: 'plain', en: 'this (fem.)', hi: 'यह', type: 'Determiner' },
      { w: 'Erinnerung', role: 'r-ergaenzungen', en: 'memory (part of an obligatory complement structure)', hi: 'याद', type: 'Noun · fem.' },
      { w: 'ohne', role: 'plain', en: 'without', hi: 'बिना', type: 'Präposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'इन', type: 'Article' },
      { w: 'Berichte', role: 'r-ergaenzungen', en: 'accounts (Satzende, the missing complement if omitted)', hi: 'विवरणों (Satzende)', type: 'Noun · plural (Satzende)', why: '"Ohne die Berichte der Zeitzeugen" is the obligatory complement — without it, "beruhen" would be left semantically incomplete (this chapter).' },
      { w: 'der', role: 'plain', en: 'of the', hi: 'के', type: 'Article · Gen.' },
      { w: 'Zeitzeugen', role: 'plain', en: 'contemporary witnesses (Satzende)', hi: 'प्रत्यक्षदर्शियों (Satzende)', type: 'Noun · plural' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Dat.' },
      { w: 'bloßer', role: 'plain', en: 'mere', hi: 'महज़', type: 'Adjective · Dat.' },
      { w: 'Vermutung', role: 'plain', en: 'speculation (Satzende)', hi: 'अटकल (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'beruhte', role: 'plain', en: 'would have rested (Satzende)', hi: 'टिकी होती (Satzende)', type: 'Verb · beruhen (Konjunktiv II, Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'These days, the country remembers that night in which the Wall falls. Historians have for years pointed out that this memory, without the accounts of contemporary witnesses, would have rested on mere speculation.',
    comprehension: [
      { q: 'Warum steht "fällt" im Präsens statt "fiel"?', options: ['Historisches Präsens für narrative Unmittelbarkeit', 'Grammatikfehler', 'Zufall'], answer: 0 },
      { q: 'Welches Verb zeigt "hinweisen auf"?', options: ['Ein präziser Präfixverb statt eines generischen Verbs', 'Ein einfaches Verb ohne Präfix', 'Eine Nomen-Verb-Verbindung'], answer: 0 },
      { q: 'Was passiert semantisch ohne "die Berichte der Zeitzeugen"?', options: ['Der Satz mit "beruhen" bleibt unvollständig', 'Nichts ändert sich', 'Der Satz wird grammatisch falsch'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Wissenschaftliche Publikation', titleEn: 'Reading B — Scientific publication',
    tokens: [
      { w: 'Wir', role: 'plain', en: 'we', hi: 'hum', type: 'Pronomen · Nom.' },
      { w: 'führen', role: 'r-nominalstil', en: 'carry out (part of "eine Analyse durchführen" — Chapter 4 revision)', hi: '(Chapter 4 revision)', type: 'Verb (Präsens)' },
      { w: 'eine', role: 'r-nominalstil', en: 'an (fem. akk.)', hi: '', type: 'Article' },
      { w: 'Analyse', role: 'r-nominalstil', en: 'analysis (part of the construction)', hi: 'vishleshan', type: 'Noun · fem. · Akk.' },
      { w: 'durch', role: 'r-nominalstil', en: '(separable prefix, Satzende)', hi: '(Satzende)', type: 'Verbpräfix (Satzende)' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'which (fem. nom.)', hi: 'jo', type: 'Relativpronomen · Nom.' },
      { w: 'auf', role: 'r-ergaenzungen', en: 'on (part of "beruhen auf" — Chapter 3 revision)', hi: '(Chapter 3 revision)', type: 'Präposition · Dat.' },
      { w: 'umfangreichen', role: 'plain', en: 'extensive', hi: 'vyapak', type: 'Adjective · Dat.' },
      { w: 'Daten', role: 'plain', en: 'data (Satzende)', hi: '(Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'beruht', role: 'r-ergaenzungen', en: 'is based (Satzende)', hi: 'aadhaarit hai (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'We carry out an analysis, which is based on extensive data.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_005_L001', speaker: 'Roswitha', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, einen Punkt in meiner Verteidigung bezweifle ich noch — die Methodenwahl im dritten Kapitel.', en: 'Timo, there\'s one point in my defense I still doubt — the choice of method in chapter three.' },
      { id: 'C2_005_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Kannst du das genauer eingrenzen? Woran genau zweifelst du?', en: 'Can you narrow that down more precisely? What exactly are you doubting?' },
      { id: 'C2_005_L003', speaker: 'Roswitha', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ob die Stichprobe wirklich repräsentativ genug war, um die Schlussfolgerung zu tragen.', en: 'Whether the sample was really representative enough to carry the conclusion.' },
      { id: 'C2_005_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Dann formulier den Vorbehalt offen — das wirkt souveräner als ihn zu verstecken.', en: 'Then state the reservation openly — that comes across as more assured than hiding it.' }
    ],
    transcript: 'Timo, einen Punkt in meiner Verteidigung bezweifle ich noch — die Methodenwahl im dritten Kapitel. Kannst du das genauer eingrenzen? Woran genau zweifelst du? Ob die Stichprobe wirklich repräsentativ genug war, um die Schlussfolgerung zu tragen. Dann formulier den Vorbehalt offen — das wirkt souveräner als ihn zu verstecken.',
    translation: 'Timo, there\'s one point in my defense I still doubt — the choice of method in chapter three. Can you narrow that down more precisely? What exactly are you doubting? Whether the sample was really representative enough to carry the conclusion. Then state the reservation openly — that comes across as more assured than hiding it.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'einen' },
      { w: 'Punkt' },
      { w: 'in' },
      { w: 'meiner' },
      { w: 'Verteidigung' },
      { w: 'bezweifle' },
      { w: 'ich' },
      { w: 'noch' },
      { w: '—', plain: true },
      { w: 'die' },
      { w: 'Methodenwahl' },
      { w: 'im' },
      { w: 'dritten' },
      { w: 'Kapitel' },
      { w: '.', plain: true },
      { w: 'Kannst' },
      { w: 'du' },
      { w: 'das' },
      { w: 'genauer' },
      { w: 'eingrenzen' },
      { w: '?', plain: true },
      { w: 'Woran' },
      { w: 'genau' },
      { w: 'zweifelst' },
      { w: 'du' },
      { w: '?', plain: true },
      { w: 'Ob' },
      { w: 'die' },
      { w: 'Stichprobe' },
      { w: 'wirklich' },
      { w: 'repräsentativ' },
      { w: 'genug' },
      { w: 'war' },
      { w: ',', plain: true },
      { w: 'um' },
      { w: 'die' },
      { w: 'Schlussfolgerung' },
      { w: 'zu' },
      { w: 'tragen' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'formulier' },
      { w: 'den' },
      { w: 'Vorbehalt' },
      { w: 'offen' },
      { w: '—', plain: true },
      { w: 'das' },
      { w: 'wirkt' },
      { w: 'souveräner' },
      { w: 'als' },
      { w: 'ihn' },
      { w: 'zu' },
      { w: 'verstecken' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welches Kapitel zweifelt Roswitha an?', qEn: 'Which chapter does Roswitha doubt?', options: ['das erste', 'das zweite', 'das dritte', 'das letzte'], optionsEn: ['the first one', 'the second one', 'the third one', 'the last one'], answer: 2,
        explain: '"… die Methodenwahl im dritten Kapitel."' },
      { q: 'Bei was genau ist sie unsicher?', qEn: 'What is she unsure about exactly?', options: ['die Sprache', 'ob die Stichprobe repräsentativ genug war', 'das Layout', 'die Literaturliste'], optionsEn: ['the language', 'whether the sample was representative enough', 'the layout', 'the reading list'], answer: 1,
        explain: '"Ob die Stichprobe wirklich repräsentativ genug war."' }
    ]
  },
  speaking: [
    { task: "Timo bezweifelt die Methodenwahl im dritten Kapitel. Grenze deinen Zweifel ein.", taskEn: "Timo doubts the choice of method in chapter three. Narrow down your doubt.", de: "Ich zweifle an der Stichprobenziehung, nicht an der Auswertung.", en: "I doubt the sampling, not the analysis." },
    { task: "Prüfung, Teil 1: Leg deine Verteidigung strukturiert dar.", taskEn: "Exam, Part 1: set out your defence in a structured way.", de: "Zunächst lege ich die Fragestellung dar, sodann weise ich den Zusammenhang nach.", en: "First I'll set out the research question, then I'll demonstrate the correlation." },
    { task: "Prüfung, Teil 2: Sag, worauf deine Arbeit beruht.", taskEn: "Exam, Part 2: state what your work is based on.", de: "Die Arbeit beruht auf Registerdaten, die wir selbst geprüft haben.", en: "The work is based on register data that we checked ourselves." },
    { task: "Prüfung, Teil 3: Beschreibe deinen methodischen Kern.", taskEn: "Exam, Part 3: describe your methodological core.", de: "Wir haben eine Analyse durchgeführt und daraus eine Empfehlung abgeleitet.", en: "We carried out an analysis and derived a recommendation from it." },
    { task: "Prüfung: Reflektiere über deine eigene Methodenwahl.", taskEn: "Exam: reflect on your own choice of method.", de: "Ich reflektiere über die Wahl, weil sie eine Entscheidung herbeiführt.", en: "I reflect on the choice because it brings about a decision." }
  ],
  writing: {
    prompt: 'TASK 1 — Perspective shift (100 words): Rewrite a historical text using a different narrative perspective (e.g. Präteritum narrative → Historical Present).\n\nTASK 2 — Precision upgrade (100 words): Replace weak verbs with authentic prefix verbs and noun-verb constructions. Explain every improvement.\n\nTASK 3 — Register upgrade (150 words): Rewrite an informal article into an academic text using advanced complement structures.\n\nTASK 4 — Integrated essay (550 words): Write a C2 essay naturally integrating advanced tense usage, sophisticated prefix verbs, verb valency, noun-verb constructions, academic register, and stylistic variation.',
    starters: ['1989 fällt...', 'Die Studie weist nach, dass...', 'Wir führen eine Analyse durch, die auf...'],
    placeholder: 'Wähle eine Aufgabe und integriere alle vier Fähigkeiten aus Kapitel 1-4...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which combination best demonstrates integrated C2 mastery of Chapters 1-4?', options: ['Historical Present + precise prefix verb + obligatory complement + nominal construction, all in one register-consistent text', 'Using only simple verbs throughout a formal essay', 'Randomly switching tenses without stylistic purpose'], answer: 0, explain: 'C2 mastery means all four skills work together consistently, like an orchestra, not in isolation.' },
    gap: { sentence: ['Die Studie ', ' auf umfangreichen Daten.'], gaps: [ { answer: 'beruht', accepts: ['beruht'] } ], explain: '"beruhen auf + Dativ" is the obligatory complement pattern from Chapter 3.' },
    match: { q: 'Match each concept to its source chapter.', pairs: [ { noun: 'Historisches Präsens', art: 'Chapter 1 — Zeitformen der Verben' }, { noun: 'nachweisen vs. zeigen', art: 'Chapter 2 — Verben mit Präfixen' }, { noun: 'beruhen auf + Dativ', art: 'Chapter 3 — Verben und ihre Ergänzungen' }, { noun: 'eine Analyse durchführen', art: 'Chapter 4 — Nomen-Verb-Verbindungen' } ] },
    builder: { target: 'Build: "We carry out an analysis, which proves a connection." (integrating Ch3 & Ch4)', bank: ['Wir', 'führen', 'eine', 'Analyse', 'durch', ',', 'die', 'einen', 'Zusammenhang', 'nachweist', '.'], answer: ['Wir', 'führen', 'eine', 'Analyse', 'durch', ',', 'die', 'einen', 'Zusammenhang', 'nachweist', '.'], roles: { 'führen': 'r-nominalstil', 'durch': 'r-nominalstil', 'nachweist': 'r-praefixe' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Studie zeigt einen Zusammenhang und macht eine Entscheidung.', right: 'Die Studie weist einen Zusammenhang nach und führt zu einer Entscheidung.', explain: 'This combines two Chapter 2/4 fixes: "nachweisen" replaces the generic "zeigen", and "zu einer Entscheidung führen" replaces the incorrect collocation "eine Entscheidung machen".' }
  },
  quiz: [
    { q: 'What does this checkpoint\'s "orchestra" memory trick represent?', options: ['Chapters 1-4 as four instruments (time, prefixes, complements, nominal style) now playing together', 'A literal chapter about music vocabulary', 'A reminder that grammar has no connection to style'], answer: 0, explain: 'Each chapter taught one instrument; this checkpoint is the first full performance where they combine.' },
    { q: 'Which is a Chapter 1 (Zeitformen) mistake to watch for?', options: ['Overusing Futur I where Präsens or Historical Present is more natural', 'Never using any tense but Präteritum', 'Avoiding Perfekt entirely'], answer: 0, explain: 'Native speakers rarely default to Futur I when Präsens with a time expression is available.' },
    { q: 'Which is a Chapter 3 (Ergänzungen) mistake to watch for?', options: ['Omitting an obligatory complement, leaving a verb semantically incomplete', 'Always including too many complements', 'Never using prepositional complements'], answer: 0, explain: 'A verb without its obligatory complement (e.g. "reflektieren" without "über etwas") is semantically incomplete.' },
    { q: 'Why does "eine Analyse durchführen" (Chapter 4) often sound more native than "analysieren" in academic writing?', options: ['It signals formality and precision appropriate to academic register', 'Because "analysieren" is grammatically incorrect', 'Because it is shorter'], answer: 0, explain: 'Register-appropriate nominal style is a hallmark of native academic writing.' },
    { q: 'What is the key integration goal of Goethe Mini 1?', options: ['Combining tense choice, prefix precision, complements, and nominal style consistently in one text', 'Memorizing each chapter\'s rules in isolation', 'Avoiding all four skills in favor of simple grammar'], answer: 0, explain: 'C2 mastery is demonstrated by seamless integration, not isolated recall.' }
  ],
  takeaways: [
    { c: 'r-orchester-metapher', html: 'Chapters 1-4 taught four instruments — time, prefixes, complements, nominal style. This checkpoint is the first full performance where they play together.' },
    { c: 'r-zeitformen', html: 'Revision: verb tense is perspective — Historical Present for narrative immediacy, Futur as epistemic assumption, register-based tense selection.' },
    { c: 'r-praefixe', html: 'Revision: precise prefix verbs (nachweisen, darlegen) replace generic verbs (zeigen, sagen) for native-level academic register.' },
    { c: 'r-ergaenzungen', html: 'Revision: obligatory complements (reflektieren über, beruhen auf, zweifeln an) cannot be omitted without leaving a verb semantically incomplete.' },
    { c: 'r-nominalstil', html: 'Revision: every simple verb has a formal nominal twin (eine Analyse durchführen), chosen for academic, scientific, legal, and journalistic precision.' }
  ],
  revisionTips: [
    'Write one paragraph that deliberately combines all four skills: a Historical Present sentence, a precise prefix verb, an obligatory complement, and a nominal construction.',
    'Revisit your weakest of the four chapters and rewrite three of its example sentences from memory.',
    'Read one academic abstract and identify at least one example each of stylistic tense choice, prefix verb precision, obligatory complement, and nominal construction.'
  ]
};
window.CHAPTER = CHAPTER;
