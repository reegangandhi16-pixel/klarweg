/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 4
   "Hauptsätze elegant verbinden" — advanced coordination and
   text flow: connector functions (addition/contrast/result/
   parallel), coordination vs subordination, sentence rhythm.
   NOT basic conjunctions or elementary connectors.
   Dialogue: Wenke and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-04-hauptsaetze-elegant-verbinden',
  phase: 'C1 · Präzise Satzarchitektur',
  number: 4,
  title: 'Hauptsätze elegant verbinden',
  titleEn: 'Connecting main clauses elegantly',
  description: 'C1 writing is judged by how ideas flow — not by sentence length alone. B2 asks which connector is correct; C1 asks which connector makes the text flow naturally.',
  xp: 310,
  time: 95,
  difficulty: 'Advanced',
  nextChapter: { number: 5, title: 'Zweiteilige Satzverbindungen', titleEn: 'Correlative & paired sentence connectors' , href: 'chapter-c1-05-zweiteilige-satzverbindungen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Elegant German comes from <em>logical progression</em>, not more words.',
    intro: 'Revising an academic article before submitting it to their professor, Wenke and Timo replace repetitive sentence sequences describing their sustainability initiative with elegantly coordinated main clauses — moreover, beyond that, nevertheless.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See addition, contrast, result and parallel connectors chosen for text flow, not just correctness'
    ],
    scene: 'Überarbeitung eines akademischen Artikels',
    femaleSpeakers: ['Wenke'],
    dialogue: [
      { speaker: 'Wenke', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Nachhaltigkeitsinitiative', role: 'r-subject', en: 'sustainability initiative', hi: 'सततता पहल', pron: 'NAHKH-hal-tikh-kites-i-ni-tsya-tee-vuh', type: 'Noun · fem.', why: 'die Nachhaltigkeitsinitiative (recycled B1/B2 elements).', ex: 'Die Nachhaltigkeitsinitiative läuft gut.', exEn: 'The sustainability initiative is running well.' },
        { w: 'läuft', role: 'r-verb', en: 'is running', hi: 'चल रही है', pron: 'LOYFT', type: 'Verb · laufen' },
        { w: 'gut', role: 'r-akkusativ', en: 'well', hi: 'अच्छी', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'zudem', role: 'r-conjunction', en: 'moreover', hi: 'इसके अलावा', pron: 'TSOO-daym', type: 'Conjunction · zudem', why: 'zudem = moreover, elegant connector for adding information (this chapter).', ex: 'Sie läuft gut, zudem sparen wir Kosten.', exEn: 'It is running well, moreover we save costs.' },
        { w: 'sparen', role: 'r-verb', en: 'save', hi: 'बचाते हैं', pron: 'SHPAH-ren', type: 'Verb · sparen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'Kosten', role: 'r-akkusativ', en: 'costs', hi: 'लागत', pron: 'KOS-ten', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'The sustainability initiative is running well, moreover we save costs.', hi: 'Sattata pahal achhi chal rahi hai, iske alaava hum lagat bhi bachaate hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Darüber', role: 'r-conjunction', en: 'beyond that', hi: 'इसके अलावा', pron: 'da-RÜ-ber', type: 'Conjunction · darüber hinaus', why: 'darüber hinaus = beyond that, moreover, elegant connector (this chapter).', ex: 'Darüber hinaus wächst die Motivation.', exEn: 'Beyond that the motivation grows.' },
        { w: 'hinaus', role: 'r-conjunction', en: 'beyond', hi: 'से आगे', pron: 'hi-NOWS', type: 'Conjunction · part 2 (darüber hinaus)' },
        { w: 'wächst', role: 'r-verb', en: 'grows', hi: 'बढ़ती है', pron: 'vekhst', type: 'Verb · wachsen' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Motivation', role: 'r-subject', en: 'motivation', hi: 'प्रेरणा', pron: 'mo-ti-va-TSYON', type: 'Noun · fem.' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Team', role: 'r-dativ', en: 'team (dat.)', hi: 'टीम में', pron: 'teem', type: 'Noun · neut. dat.' },
        { w: '.', plain: true }
      ], en: 'Beyond that the motivation grows in the team.', hi: 'Iske alaava, team mein prerna badh rahi hai.' },
      { speaker: 'Wenke', tokens: [
        { w: 'Einige', role: 'r-subject', en: 'some', hi: 'कुछ', pron: 'I-ni-guh', type: 'Determiner' },
        { w: 'Kollegen', role: 'r-subject', en: 'colleagues', hi: 'सहकर्मी', pron: 'ko-LAY-gen', type: 'Noun · plural' },
        { w: 'zweifeln', role: 'r-verb', en: 'doubt', hi: 'संदेह करते हैं', pron: 'TSVY-feln', type: 'Verb · zweifeln' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी भी', pron: 'nokh', type: 'Adverb' },
        { w: ',', plain: true },
        { w: 'dennoch', role: 'r-conjunction', en: 'nevertheless', hi: 'फिर भी', pron: 'DE-nokh', type: 'Conjunction · dennoch', why: 'dennoch = nevertheless, elegant contrast connector (this chapter).', ex: 'Sie zweifeln, dennoch unterstützen sie das Projekt.', exEn: 'They doubt, nevertheless they support the project.' },
        { w: 'unterstützen', role: 'r-verb', en: 'support', hi: 'समर्थन करते हैं', pron: 'un-ter-SHTÜ-tsen', type: 'Verb · unterstützen' },
        { w: 'sie', role: 'r-subject', en: 'they', hi: 'वे', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Projekt', role: 'r-akkusativ', en: 'project', hi: 'परियोजना', pron: 'pro-YEKT', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Some colleagues still doubt, nevertheless they support the project.', hi: 'Kuch sahkarmi abhi bhi sandeh karte hain, phir bhi woh pariyojana ka samarthan karte hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'कम किया है', pron: 'HAH-ben', type: 'Verb · haben' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Papierverbrauch', role: 'r-akkusativ', en: 'paper consumption', hi: 'कागज़ की खपत', pron: 'pa-PEER-fer-browkh', type: 'Noun · masc.', why: 'der Papierverbrauch (this chapter).', ex: 'den Papierverbrauch reduzieren' },
        { w: 'reduziert', role: 'r-verb', en: 'reduced', hi: 'कम किया', pron: 're-doo-TSEERT', type: 'Partizip II' },
        { w: ',', plain: true },
        { w: 'folglich', role: 'r-conjunction', en: 'consequently', hi: 'परिणामस्वरूप', pron: 'FOLK-likh', type: 'Conjunction · folglich', why: 'folglich = consequently, elegant result connector (this chapter).', ex: 'Wir haben reduziert, folglich sinken die Kosten.', exEn: 'We have reduced, consequently the costs sink.' },
        { w: 'sinken', role: 'r-verb', en: 'sink', hi: 'कम होती हैं', pron: 'ZIN-ken', type: 'Verb · sinken' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Kosten', role: 'r-subject', en: 'costs', hi: 'लागत', pron: 'KOS-ten', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'We have reduced the paper consumption, consequently the costs sink.', hi: 'Humne kagaz ki khapat kam ki hai, parinaamswaroop lagat kam hoti hai.' },
      { speaker: 'Wenke', tokens: [
        { w: 'Gleichzeitig', role: 'r-conjunction', en: 'at the same time', hi: 'साथ ही', pron: 'GLYKH-tsy-tikh', type: 'Conjunction · gleichzeitig', why: 'gleichzeitig also works as a sentence-initial connector linking two main clauses (this chapter).', ex: 'Gleichzeitig steigt die Zufriedenheit.', exEn: 'At the same time the satisfaction rises.' },
        { w: 'steigt', role: 'r-verb', en: 'rises', hi: 'बढ़ती है', pron: 'SHTYKT', type: 'Verb · steigen' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Zufriedenheit', role: 'r-subject', en: 'satisfaction', hi: 'संतुष्टि', pron: 'tsu-FREE-den-hite', type: 'Noun · fem.', why: 'die Zufriedenheit (this chapter).', ex: 'die Zufriedenheit steigt' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Büro', role: 'r-dativ', en: 'office (dat.)', hi: 'दफ़्तर में', pron: 'bü-RO', type: 'Noun · neut. dat.' },
        { w: '.', plain: true }
      ], en: 'At the same time the satisfaction rises in the office.', hi: 'Saath hi, daftar mein santushti badh rahi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'präsentieren', role: 'r-verb', en: 'let us present', hi: 'प्रस्तुत करते हैं', pron: 'pray-zen-TEE-ren', type: 'Verb · präsentieren (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Ergebnisse', role: 'r-akkusativ', en: 'results', hi: 'परिणाम', pron: 'er-GAYP-ni-suh', type: 'Noun · plural' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'Perfect! Then let us present the results tomorrow.', hi: 'Badhiya! Toh hum kal parinaam prastut karte hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'B2 asks: <b>"Which connector is correct?"</b> C1 asks: <b>"Which connector makes the text flow naturally?"</b> Elegant German comes from <span class="de r-flow">logical progression</span>, not more words.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is HAUPTSÄTZE ELEGANT VERBINDEN at C1 level — advanced coordination and text flow between main clauses, NOT basic conjunctions or elementary connectors (already mastered at B2). Covered: connector functions grouped by logic — Addition (zudem, außerdem, ferner, darüber hinaus), Contrast (dennoch, allerdings, hingegen, dagegen), Result (folglich, somit, infolgedessen, deshalb, daher), Parallel (zugleich, gleichzeitig, ebenfalls, ebenso); connector placement (Connector → Verb → Subject, e.g. "Außerdem wurde...", "Dennoch bleibt...", "Somit ergibt sich..."); coordination vs subordination (coordination = two equal ideas, more dynamic, common in journalism; subordination = one idea depends on another, more analytical, common in academic writing); sentence rhythm (varying short/long sentences, avoiding repetitive openings). ' +
    'Do NOT expect or require basic conjunctions or elementary connector explanations — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: repeating the same connector monotonously throughout a text; mismatched connector logic (e.g. "deshalb weil", "außerdem ich denke" with wrong word order); too many identical sentence openings (e.g. always starting with "Und"); choppy disconnected short sentences where elegant coordination would flow better. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag repeated/monotonous connector use only when the same connector appears three or more times without variation.\n' +
    '- Check verb-second word order immediately after a connector in Position 1 (e.g. "Außerdem wurde sie veröffentlicht", not "Außerdem sie wurde veröffentlicht").\n' +
    '- Check that the connector\'s logical function (addition/contrast/result/parallel) matches the actual relationship between the two ideas.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Text flow check:</b> one sentence on whether the learner varied connectors and sentence rhythm rather than repeating the same pattern.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — your text flows naturally with varied, well-placed connectors. Ready for genitive prepositions next.',
    mid: 'Good. Re-read the Connector Functions table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: elegant German comes from logical progression, not more words.'
  },

  parserSentence: [
    { w: 'Die', role: 'plain' }, { w: 'Studie', role: 'plain' }, { w: 'war', role: 'plain' }, { w: 'erfolgreich', role: 'plain' }, { w: ',', role: 'plain' }, { w: 'zudem', role: 'r-addition' }, { w: 'wurde', role: 'r-addition' }, { w: 'sie', role: 'plain' }, { w: 'veröffentlicht', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: C1 writing is judged by how ideas flow, not by sentence length.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Wenke and Timo revise a repetitive academic paragraph into elegant, coordinated main clauses.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master connector functions (addition, contrast, result, parallel), placement, and coordination vs subordination.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read an academic article and a newspaper editorial, identifying connector choice and text flow.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify connector usage and argument development in a university presentation and a business conference.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Present structured arguments and explain complex ideas using elegant coordinated main clauses.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite a repetitive B2 text with elegant coordination, and write a 350-word analytical article.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill connector selection, sentence linking, and text flow improvement.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 310 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 15 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Connector selection drills, sentence linking, and a full analytical article writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Connector Functions table, Coordination vs Subordination comparison, and Decision Flowchart.',
      pdfUrl: '/pdfs/grammar.pdf', size: '11 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Die Studie war erfolgreich, zudem wurde sie veröffentlicht.', text: 'Connect two ideas with an addition connector in correct position' },
    { de: 'Im nächsten Satz könnten wir stattdessen darüber hinaus schreiben.', text: 'Vary addition connectors instead of repeating the same one' },
    { de: 'Dennoch bleiben einige Fragen offen.', text: 'Use a contrast connector precisely at a concessive turning point' },
    { de: 'Folglich / Somit ergibt sich ein klares Bild.', text: 'Choose a result connector for a logical academic conclusion' },
    { de: 'Gleichzeitig entsteht ein ausgewogener Textfluss.', text: 'Add a parallel idea using a simultaneity connector' }
  ],

  vocab: [
    { de: 'zudem', ipa: '[tsuˈdeːm]', en: 'moreover / in addition', hi: 'iske alaawa', pos: 'Adverb (Konnektor)', register: 'C1 · academic/formal', logicalFunction: 'Addition',
      note: 'Connects a main clause to a preceding idea, adding new supporting information.',
      ex1: { de: 'Die Ergebnisse sind eindeutig; zudem bestätigen sie frühere Studien.', en: 'The results are clear; moreover, they confirm earlier studies.', hi: 'Parinaam spasht hain; iske alaawa, ye pehle ke adhyayanon ki pushti karte hain.' },
      ex2: { de: 'Der Bericht ist gut recherchiert, zudem verständlich geschrieben.', en: 'The report is well researched, and moreover clearly written.', hi: 'Report achhi tarah se shodhit hai, aur iske alaawa spasht roop se likhi gayi hai.' },
      collocations: ['zudem bestätigen', 'zudem zeigt sich'] },
    { de: 'darüber hinaus', ipa: '[daˈʁyːbɐ hɪˈnaʊs]', en: 'furthermore / beyond that', hi: 'aage badhte hue', pos: 'Adverb (Konnektor)', register: 'C1 · academic/formal', logicalFunction: 'Addition',
      note: 'A more formal alternative to "zudem", useful for varying repeated addition connectors.',
      ex1: { de: 'Darüber hinaus zeigt die Studie neue Trends.', en: 'Furthermore, the study shows new trends.', hi: 'Iske alaawa, adhyayan naye trends dikhaata hai.' },
      ex2: { de: 'Das Projekt spart Kosten; darüber hinaus verbessert es die Effizienz.', en: 'The project saves costs; furthermore, it improves efficiency.', hi: 'Project lagat bachaata hai; iske alaawa, yeh kushaltaa bhi badhaata hai.' },
      collocations: ['darüber hinaus zeigt sich', 'darüber hinaus lässt sich sagen'] },
    { de: 'dennoch', ipa: '[ˈdɛnɔx]', en: 'nevertheless', hi: 'phir bhi', pos: 'Adverb (Konnektor)', register: 'C1 · academic/formal', logicalFunction: 'Contrast',
      note: 'Expresses a concessive contrast — something remains true despite a preceding statement.',
      ex1: { de: 'Die Ergebnisse waren positiv; dennoch bleiben Fragen offen.', en: 'The results were positive; nevertheless, questions remain open.', hi: 'Parinaam sakaaraatmak thay; phir bhi, sawaal khule hain.' },
      ex2: { de: 'Er war müde, dennoch arbeitete er weiter.', en: 'He was tired, nevertheless he kept working.', hi: 'Woh thaka hua tha, phir bhi usne kaam jaari rakha.' },
      collocations: ['dennoch bleiben', 'dennoch zeigt sich'] },
    { de: 'folglich', ipa: '[ˈfɔlklɪç]', en: 'consequently', hi: 'parinaamsvaroop', pos: 'Adverb (Konnektor)', register: 'C1 · academic/formal', logicalFunction: 'Result',
      note: 'Marks a logical result or conclusion, common in academic writing.',
      ex1: { de: 'Die Daten waren eindeutig; folglich wurde die Hypothese bestätigt.', en: 'The data were clear; consequently, the hypothesis was confirmed.', hi: 'Data spasht thay; parinaamsvaroop, parikalpanaa ki pushti hui.' },
      ex2: { de: 'Die Kosten stiegen, folglich musste das Budget angepasst werden.', en: 'Costs rose, consequently the budget had to be adjusted.', hi: 'Lagat badhi, parinaamsvaroop budget adjust karna pada.' },
      collocations: ['folglich ergibt sich', 'folglich lässt sich schließen'] },
    { de: 'gleichzeitig', ipa: '[ˈɡlaɪçtsaɪtɪç]', en: 'simultaneously / at the same time', hi: 'ek hi samay mein', pos: 'Adverb (Konnektor)', register: 'C1 · academic/formal', logicalFunction: 'Parallel',
      note: 'As a sentence connector, introduces a parallel idea happening alongside the previous one, not a contrast.',
      ex1: { de: 'Die Kosten sanken; gleichzeitig stieg die Qualität.', en: 'Costs fell; simultaneously, quality rose.', hi: 'Lagat kam hui; isi samay, gunvatta badhi.' },
      ex2: { de: 'Gleichzeitig entsteht ein ausgewogener Textfluss.', en: 'Simultaneously, a balanced text flow emerges.', hi: 'Isi samay, ek santulit text pravaah banta hai.' },
      collocations: ['gleichzeitig entsteht', 'gleichzeitig zeigt sich'] }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Warum Textfluss zählt',
      body: [ 'Disconnected writing → Correct writing → Connected writing → Elegant writing. Compare three choppy sentences with one elegantly coordinated version.' ],
      hinglish: 'Teen chhote alag-alag sentences aur ek jude hue version ko saath rakh kar dekho. Dono mein baat wahi hai, par jude hue version mein reader ko dikhta hai ki ek baat doosri se kaise judi hai \u2014 aur C1 par yahi dekha jaata hai.'
    },
    {
      title: 'Fortgeschrittene koordinierende Konnektoren',
      body: [ 'Includes: zudem, außerdem, darüber hinaus, ferner, ebenfalls, ebenso, zugleich, gleichzeitig, dennoch, allerdings, hingegen, dagegen, folglich, somit, infolgedessen, deshalb, daher.' ],
      hinglish: 'Yeh connectors <i>und</i> aur <i>aber</i> se kahin zyada precise hain. Jodne ke liye <b>zudem, au\u00dferdem, dar\u00fcber hinaus, ferner</b>; ulti baat ke liye <b>dennoch, allerdings, hingegen, dagegen</b>; aur nateeje ke liye <b>folglich, somit, infolgedessen, daher</b>. Dhyaan do ki <b>ferner</b> aur <b>somit</b> kaafi formal hain \u2014 yeh bolchaal mein kam aate hain.'
    },
    {
      title: 'Konnektorposition (Connector Placement)',
      body: [ 'In connectors ke saath order fix hai: connector position 1 par, verb turant uske baad, aur subject phir. Isliye <span class="de">Au\u00dferdem wurde \u2026</span> aur <span class="de">Dennoch bleibt \u2026</span>. Ek galti se bacho \u2014 inke baad comma nahi lagta.' ],
      hinglish: 'In connectors ke saath order fix hai: connector position 1 par, verb turant uske baad, aur subject phir. Isliye <span class="de">Au\u00dferdem wurde \u2026</span> aur <span class="de">Dennoch bleibt \u2026</span>. Ek galti se bacho \u2014 inke baad comma nahi lagta.'
    },
    {
      title: 'Drei Konnektortypen \u2014 drei Wortstellungen',
      body: [
        'The rule \u201cconnector in position 1, verb in position 2\u201d holds for the adverbs in this chapter, but not for every connector in German. Mixing the three types up is the most common source of word-order errors at C1.'
      ],
      table: {
        head: ['Type', 'Word order', 'Examples', 'Sample'],
        rows: [
          ['Konjunktionaladverb', 'position 1 \u2192 <b>verb</b> \u2192 subject', 'zudem, au\u00dferdem, dennoch, folglich, somit, daher', '<span class="de">Zudem <b>ist</b> die Nachfrage gestiegen.</span>'],
          ['Koordinierende Konjunktion', 'occupies NO position \u2014 normal order follows', 'und, aber, denn, sondern, oder', '<span class="de">\u2026, denn <b>die Nachfrage</b> ist gestiegen.</span>'],
          ['Subordinierende Konjunktion', 'verb goes to the END', 'weil, obwohl, da, sodass', '<span class="de">\u2026, weil die Nachfrage gestiegen <b>ist</b>.</span>']
        ]
      },
      note: 'A few adverbs are flexible and can also sit inside the clause: <b>allerdings</b>, <b>jedoch</b>, <b>hingegen</b> \u2014 <span class="de">Die Qualit\u00e4t sinkt jedoch.</span> The rigid ones are folglich, somit, dennoch and zudem.',
      hinglish: 'Yeh rule \u2014 connector position 1 par aur verb position 2 par \u2014 sirf is chapter wale <b>adverbs</b> par lagta hai, har connector par nahi. Teen type hote hain aur teeno ka word order alag hai. <b>Konjunktionaladverb</b> (zudem, dennoch, folglich) position 1 le leta hai, isliye verb turant baad aata hai. <b>Koordinierende Konjunktion</b> (und, aber, denn, sondern, oder) koi position leti hi nahi \u2014 uske baad normal order chalta hai, isliye <span class="de">\u2026, denn die Nachfrage ist gestiegen</span>. Aur <b>subordinierende Konjunktion</b> (weil, obwohl, da) verb ko clause ke end mein bhej deti hai. Kuch adverbs flexible hain \u2014 <b>jedoch</b>, <b>allerdings</b>, <b>hingegen</b> beech mein bhi baith sakte hain.'
    },
    {
      title: 'Logische Beziehungen',
      body: [ 'Cause → Result; Addition → Contrast → Alternative → Conclusion. Choose connectors based on logic, not translation.' ],
      hinglish: 'Connector English translation dekh kar mat chuno \u2014 pehle yeh socho ki dono baaton ka rishta kya hai. Kya doosri baat pehli ka nateeja hai, uske ulat hai, ya usme kuch aur jod rahi hai? Rishta tay ho jaaye to connector apne aap mil jaata hai.'
    },
    {
      title: 'Koordination vs Subordination',
      body: [ 'Compare when native speakers prefer each style.' ],
      table: {
        head: ['Coordination', 'Subordination'],
        rows: [
          ['Two equal ideas', 'One idea depends on another'],
          ['More dynamic', 'More analytical'],
          ['Common in journalism', 'Common in academic writing']
        ]
      },
      hinglish: 'Dono style kab use hote hain, yeh dekho. Coordination do barabar baaton ko jodta hai aur zyada dynamic lagta hai, isliye journalism mein aata hai. Subordination ek baat ko doosri par tikata hai aur zyada analytical lagta hai, isliye academic writing mein.'
    },
    {
      title: 'Satzrhythmus (Sentence Rhythm)',
      body: [ 'Many short sentences vs many long sentences vs balanced rhythm. Alternate structures naturally instead of settling into one pattern.' ],
      hinglish: 'Sirf chhote sentences likho to text tuta-tuta lagta hai, aur sirf lambe likho to bhaari. Behtar yeh hai ki dono mila kar likho \u2014 ek lamba sentence ke baad ek chhota, isse reader ko saans milti hai aur baat saaf rehti hai.'
    },
    {
      title: 'Konnektorfunktionen (Connector Functions)',
      body: [ 'A quick-reference table grouped by logical function.' ],
      table: {
        head: ['Function', 'Connectors'],
        rows: [
          ['Addition', 'zudem, außerdem, ferner, darüber hinaus'],
          ['Contrast', 'dennoch, allerdings, hingegen, dagegen'],
          ['Result', 'folglich, somit, infolgedessen, deshalb'],
          ['Parallel', 'zugleich, gleichzeitig, ebenfalls']
        ]
      },
      hinglish: 'Function ke hisaab se grouped table \u2014 ek hi function ke andar connectors badal-badal kar use karo, taaki ek hi shabd baar-baar na aaye.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'Four of these are the same error in different clothes: forgetting that these connectors are ADVERBS, so they occupy position 1 and push the verb ahead of the subject.' ],
      mistakes: [
        { wrong: 'Außerdem ich denke ...', right: 'Außerdem denke ich ...', why: 'The connector in Position 1 requires the finite verb in Position 2, before the subject.' },
        { wrong: 'Deshalb weil das Projekt teuer war, wurde es abgelehnt.', right: 'Weil das Projekt teuer war, wurde es abgelehnt. / Das Projekt war teuer. Deshalb wurde es abgelehnt.', why: '<b>deshalb</b> opens a main clause and <b>weil</b> opens a subordinate one \u2014 they cannot be stacked. Pick one direction.' },
        { wrong: 'Die Kosten steigen, hingegen die Qualität sinkt.', right: 'Die Kosten steigen, die Qualität hingegen sinkt. / Hingegen sinkt die Qualität.', why: '<b>hingegen</b> is an adverb, not a conjunction. Either front it (then the verb follows) or place it inside the clause \u2014 it cannot sit between the comma and the subject.' },
        { wrong: 'Das Projekt war teuer, folglich es wurde abgelehnt.', right: 'Das Projekt war teuer, folglich wurde es abgelehnt.', why: '<b>folglich</b> takes position 1 of its clause, so the finite verb must come second \u2014 before the subject.' },
        { wrong: 'Zudem, die Nachfrage ist gestiegen.', right: 'Zudem ist die Nachfrage gestiegen.', why: 'No comma after a position-1 connector, and the verb comes immediately after it. The comma here wrongly turns <b>zudem</b> into an afterthought.' }
      ],
      hinglish: 'Inme se chaar galtiyan ek hi jad se aati hain \u2014 yeh bhool jaana ki yeh connectors <b>adverb</b> hain. Isliye woh position 1 le lete hain aur verb ko subject se pehle le aate hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to connect two ideas of equal importance? Coordinate. Need explanation? Use a subordinate clause. Need elegant C1 style? Vary connector and sentence rhythm.' ],
      note: 'Memory trick: B2 asks "Which connector is correct?" C1 asks "Which connector makes the text flow naturally?" Elegant German is created through logical progression, not by adding more words.',
      hinglish: 'Do barabar baatein jodni hain? Coordination use karo. Ek baat doosri par tiki hai? Subordinate clause. Aur C1 style chahiye? Connector badal-badal kar use karo aur sentence ki lambaai mein variety rakho. Sabse pehle yeh check karo ki connector adverb hai ya conjunction \u2014 usi se word order tay hoga.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Kommentar: Streit um die Energiewende',
    titleEn: 'Reading A — Commentary on the energy-transition debate',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Zahlen', role: 'plain', en: 'figures', hi: 'आँकड़े', type: 'Noun · plural' },
      { w: 'bestätigen', role: 'plain', en: 'confirm', hi: 'पुष्टि करते हैं', type: 'Verb (Präsens)' },
      { w: 'den', role: 'plain', en: 'the (masc. akk.)', hi: 'इस', type: 'Article · Akk.' },
      { w: 'Trend', role: 'plain', en: 'trend (Satzende)', hi: 'रुझान (Satzende)', type: 'Noun · masc.' },
      { w: 'zur', role: 'plain', en: 'towards the', hi: 'की ओर', type: 'Contraction · zu der' },
      { w: 'Solarenergie', role: 'plain', en: 'solar energy (Satzende)', hi: 'सौर ऊर्जा (Satzende)', type: 'Noun · fem.' },
      { w: ';', plain: true },
      { w: 'darüber', role: 'r-addition', en: 'about that (part of "darüber hinaus")', hi: '', type: 'Pronominaladverb' },
      { w: 'hinaus', role: 'r-addition', en: 'beyond (addition connector)', hi: 'इसके अलावा', type: 'Adverb', why: '"Darüber hinaus" adds a second supporting point in Position 1, pushing the verb to Position 2 (this chapter).' },
      { w: 'zeigen', role: 'r-addition', en: 'show (Position 2)', hi: '', type: 'Verb (Präsens)' },
      { w: 'sie', role: 'plain', en: 'they', hi: 'ये', type: 'Pronomen' },
      { w: 'ein', role: 'plain', en: 'a (neut.)', hi: 'एक', type: 'Article' },
      { w: 'stetig', role: 'plain', en: 'steadily', hi: 'निरंतर', type: 'Adverb' },
      { w: 'wachsendes', role: 'plain', en: 'growing', hi: 'बढ़ता हुआ', type: 'Adjective (Partizip I)' },
      { w: 'Interesse', role: 'plain', en: 'interest (Satzende)', hi: 'रुचि (Satzende)', type: 'Noun · neut.' },
      { w: 'an', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'privaten', role: 'plain', en: 'private', hi: 'निजी', type: 'Adjective · Dat.' },
      { w: 'Anlagen', role: 'plain', en: 'installations (Satzende)', hi: 'संयंत्रों (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Allerdings', role: 'r-contrast', en: 'however (contrast connector)', hi: 'हालांकि', type: 'Adverb (Konnektor)', why: '"Allerdings" in Position 1 introduces a contrast, so the verb again follows in Position 2 (this chapter).' },
      { w: 'bleiben', role: 'r-contrast', en: 'remain (Position 2)', hi: '', type: 'Verb (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Netzkapazitäten', role: 'plain', en: 'grid capacities', hi: 'ग्रिड क्षमताएँ', type: 'Noun · plural' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'ungelöstes', role: 'plain', en: 'unsolved', hi: 'अनसुलझा', type: 'Adjective' },
      { w: 'Problem', role: 'plain', en: 'problem (Satzende)', hi: 'समस्या (Satzende)', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'denn', role: 'plain', en: 'because (Hauptsatz-Konjunktion, keine Inversion)', hi: 'क्योंकि', type: 'Konjunktion', why: '"denn" links two main clauses without inverting word order, unlike "weil" (this chapter).' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective' },
      { w: 'Regionen', role: 'plain', en: 'regions', hi: 'क्षेत्र', type: 'Noun · plural' },
      { w: 'können', role: 'plain', en: 'can', hi: 'सकते हैं', type: 'Verb · können' },
      { w: 'den', role: 'plain', en: 'the (masc. akk.)', hi: 'इस', type: 'Article · Akk.' },
      { w: 'zusätzlichen', role: 'plain', en: 'additional', hi: 'अतिरिक्त', type: 'Adjective · Akk.' },
      { w: 'Strom', role: 'plain', en: 'electricity (Satzende)', hi: 'बिजली (Satzende)', type: 'Noun · masc.' },
      { w: 'derzeit', role: 'plain', en: 'currently', hi: 'फ़िलहाल', type: 'Adverb' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'aufnehmen', role: 'plain', en: 'absorb (Satzende)', hi: 'ग्रहण कर सकते (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true }
    ],
    translation: 'The figures confirm the trend towards solar energy; furthermore, they show a steadily growing interest in private installations. Grid capacities, however, remain an unsolved problem, because many regions currently cannot absorb the additional electricity.',
    comprehension: [
      { q: 'Welche Funktion hat "darüber hinaus"?', options: ['Addition (weiterer unterstützender Punkt)', 'Kontrast', 'Ergebnis'], answer: 0 },
      { q: 'Was passiert mit der Wortstellung nach "Allerdings"?', options: ['Verb bleibt in Position 2 (Inversion)', 'Verb rückt an den Satzanfang', 'Verb steht am Satzende'], answer: 0 },
      { q: 'Warum verursacht "denn" keine Inversion, "weil" aber schon?', options: ['"denn" verbindet zwei Hauptsätze, "weil" leitet einen Nebensatz ein', 'Es gibt keinen Unterschied', 'Beide sind Nebensatz-Konjunktionen'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungskommentar',
    titleEn: 'Reading B — Newspaper editorial',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Reform', role: 'plain', en: 'reform', hi: 'sudhar', type: 'Noun · fem.' },
      { w: 'verspricht', role: 'plain', en: 'promises', hi: 'vaada karta hai', type: 'Verb (Präsens)' },
      { w: 'Verbesserungen', role: 'plain', en: 'improvements (Satzende)', hi: 'sudhaar (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true },
      { w: 'Somit', role: 'r-result', en: 'thus (result connector)', hi: 'is prakaar (result connector)', type: 'Adverb (Konnektor)', why: '"Somit" precisely marks a logical conclusion drawn from the preceding statement.' },
      { w: 'ergibt', role: 'r-result', en: 'gives (Position 2 after connector)', hi: '(connector ke baad Position 2)', type: 'Verb (Präsens)' },
      { w: 'sich', role: 'plain', en: 'itself (reflexive)', hi: '(reflexive)', type: 'Reflexivpronomen · Akk.' },
      { w: 'eine', role: 'plain', en: 'a (fem. nom.)', hi: 'ek', type: 'Article' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'naya', type: 'Adjective · Nom.' },
      { w: 'Perspektive', role: 'plain', en: 'perspective (Satzende)', hi: 'drishtikon (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The reform promises improvements. Thus, a new perspective emerges.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_004_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wenke, unser Absatz klingt wie eine Aufzählung: Wir sparten Energie. Wir reduzierten Abfall. Wir informierten die Mitarbeiter.', en: 'Wenke, our paragraph sounds like a list: We saved energy. We reduced waste. We informed the staff.' },
      { id: 'C1_004_L002', speaker: 'Wenke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Stimmt, das wirkt abgehackt. Verbinden wir es doch eleganter: Wir sparten nicht nur Energie, sondern reduzierten zudem den Abfall und informierten überdies die Mitarbeiter.', en: 'True, that seems choppy. Let\'s connect it more elegantly instead: We not only saved energy, but also reduced waste and moreover informed the staff.' },
      { id: 'C1_004_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Viel besser, das klingt jetzt richtig professionell.', en: 'Much better, that now sounds really professional.' }
    ],
    transcript: 'Wenke, unser Absatz klingt wie eine Aufzählung: Wir sparten Energie. Wir reduzierten Abfall. Wir informierten die Mitarbeiter. Stimmt, das wirkt abgehackt. Verbinden wir es doch eleganter: Wir sparten nicht nur Energie, sondern reduzierten zudem den Abfall und informierten überdies die Mitarbeiter. Viel besser, das klingt jetzt richtig professionell.',
    translation: 'Wenke, our paragraph sounds like a list: We saved energy. We reduced waste. We informed the staff. True, that seems choppy. Let\'s connect it more elegantly instead: We not only saved energy, but also reduced waste and moreover informed the staff. Much better, that now sounds really professional.',
    tokens: [
      { w: 'Wenke' },
      { w: ',', plain: true },
      { w: 'unser' },
      { w: 'Absatz' },
      { w: 'klingt' },
      { w: 'wie' },
      { w: 'eine' },
      { w: 'Aufzählung' },
      { w: ':', plain: true },
      { w: 'Wir' },
      { w: 'sparten' },
      { w: 'Energie' },
      { w: '.', plain: true },
      { w: 'Wir' },
      { w: 'reduzierten' },
      { w: 'Abfall' },
      { w: '.', plain: true },
      { w: 'Wir' },
      { w: 'informierten' },
      { w: 'die' },
      { w: 'Mitarbeiter' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'wirkt' },
      { w: 'abgehackt' },
      { w: '.', plain: true },
      { w: 'Verbinden' },
      { w: 'wir' },
      { w: 'es' },
      { w: 'doch' },
      { w: 'eleganter' },
      { w: ':', plain: true },
      { w: 'Wir' },
      { w: 'sparten' },
      { w: 'nicht' },
      { w: 'nur' },
      { w: 'Energie' },
      { w: ',', plain: true },
      { w: 'sondern' },
      { w: 'reduzierten' },
      { w: 'zudem' },
      { w: 'den' },
      { w: 'Abfall' },
      { w: 'und' },
      { w: 'informierten' },
      { w: 'überdies' },
      { w: 'die' },
      { w: 'Mitarbeiter' },
      { w: '.', plain: true },
      { w: 'Viel' },
      { w: 'besser' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'klingt' },
      { w: 'jetzt' },
      { w: 'richtig' },
      { w: 'professionell' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welches Problem bemerkt Timo im Absatz?', qEn: 'What problem does Timo notice in the paragraph?', options: ['zu viele Fehler', 'es klingt wie eine Aufzählung', 'es ist zu lang', 'falsches Thema'], optionsEn: ['too many mistakes', 'it sounds like a list', 'it is too long', 'wrong topic'], answer: 1,
        explain: '"Unser Absatz klingt wie eine Aufzählung."' },
      { q: 'Wie behebt Wenke es?', qEn: 'How does Wenke fix it?', options: ['sie kürzt den Text', 'sie verbindet die Sätze elegant', 'sie löscht alles', 'sie fügt neue Fakten hinzu'], optionsEn: ['she shortens the text', 'it links the sentences elegantly', 'she deletes everything', 'she is adding new facts'], answer: 1,
        explain: '"Verbinden wir es doch eleganter."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Wenke sagt, euer Absatz klingt wie eine Aufzählung. Verbinde die Sätze.", taskEn: "Wenke says your paragraph sounds like a list. Join the sentences.", de: "Wir sparten Energie; zudem reduzierten wir den Abfall.", en: "We saved energy; moreover we reduced waste." },
    { task: "Ergänze im Vortrag ein weiteres Argument.", taskEn: "Add a further argument in your talk.", de: "Die Methode ist günstig; darüber hinaus lässt sie sich schnell einführen.", en: "The method is cheap; moreover it can be introduced quickly." },
    { task: "Eine Kollegin fragt, wo die Grenze deines Ergebnisses liegt.", taskEn: "A colleague asks where your finding's limit lies.", de: "Der Effekt ist deutlich; dennoch gilt er nur für Großstädte.", en: "The effect is clear; nevertheless it holds only for large cities." },
    { task: "Zieh im Schlussteil die Konsequenz.", taskEn: "Draw the conclusion in your closing section.", de: "Die Kosten steigen weiter; folglich ist eine Förderung notwendig.", en: "Costs keep rising; consequently funding is necessary." },
    { task: "Beschreibe zwei Entwicklungen, die parallel laufen.", taskEn: "Describe two developments running in parallel.", de: "Die Mieten steigen, und gleichzeitig wächst die Zahl der Pendler.", en: "Rents are rising, and at the same time the number of commuters is growing." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Take a repetitive B2 text made of simple sentence sequences and replace them with elegant coordinated main clauses, using varied connectors.\n\nTASK 2 — Analytical article (350 words): Write an article demonstrating excellent text flow, varied connectors, and balanced sentence rhythm.',
    starters: ['Die Studie war erfolgreich, zudem wurde sie veröffentlicht.', 'Dennoch bleiben einige Fragen offen.'],
    placeholder: 'Die Ergebnisse waren eindeutig; zudem bestätigten sie frühere Studien. Allerdings blieben methodische Fragen offen...',
    minWords: 150
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which connector correctly expresses a logical result?',
      options: ['folglich', 'zudem', 'dennoch'],
      answer: 0,
      explain: '"Folglich" marks a logical consequence, distinct from addition ("zudem") or contrast ("dennoch").'
    },
    gap: {
      sentence: ['Die Studie war erfolgreich, ', ' wurde sie veröffentlicht.'],
      gaps: [ { answer: 'zudem', accepts: ['zudem', 'außerdem', 'darüber hinaus'] } ],
      explain: 'An addition connector (zudem/außerdem/darüber hinaus) elegantly links a second supporting fact.'
    },
    match: {
      q: 'Match each connector to its logical function.',
      pairs: [
        { noun: 'zudem', art: 'Addition' },
        { noun: 'dennoch', art: 'Contrast' },
        { noun: 'folglich', art: 'Result' },
        { noun: 'gleichzeitig', art: 'Parallel' }
      ]
    },
    builder: {
      target: 'Build: "The study was successful; moreover, it was published." (elegant coordination)',
      bank: ['Die', 'Studie', 'war', 'erfolgreich', ',', 'zudem', 'wurde', 'sie', 'veröffentlicht', '.'],
      answer: ['Die', 'Studie', 'war', 'erfolgreich', ',', 'zudem', 'wurde', 'sie', 'veröffentlicht', '.'],
      roles: { 'zudem': 'r-addition', 'wurde': 'r-addition' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Außerdem ich denke, dass die Studie erfolgreich war.',
      right: 'Außerdem denke ich, dass die Studie erfolgreich war.',
      explain: 'A connector in Position 1 requires the finite verb in Position 2, immediately after it, before the subject.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What word order follows a Position-1 connector like "außerdem"?', options: ['Verb, then subject (V2 rule)', 'Subject, then verb', 'Verb at the very end'], answer: 0,
      explain: 'German main clauses always keep the finite verb in Position 2, right after whatever occupies Position 1.' },
    { q: 'Which connector expresses contrast?', options: ['dennoch', 'zudem', 'folglich'], answer: 0,
      explain: '"Dennoch" (nevertheless) expresses a concessive contrast.' },
    { q: 'Why should you vary connectors like "zudem" and "darüber hinaus"?', options: ['To avoid monotonous repetition and create elegant text flow', 'Because "zudem" is grammatically incorrect', 'Because only one connector may be used per text'], answer: 0,
      explain: 'Repeating the same connector throughout a text weakens C1-level stylistic elegance.' },
    { q: 'When is coordination generally preferred over subordination?', options: ['When connecting two equal ideas dynamically, as in journalism', 'When one idea depends entirely on another', 'Never — subordination is always preferred'], answer: 0,
      explain: 'Coordination suits equal, dynamic ideas; subordination suits analytical dependency, common in academic writing.' },
    { q: 'B2 asks "Which connector is correct?" What does C1 ask?', options: ['"Which connector makes the text flow naturally?"', '"Which connector is shortest?"', '"Which connector avoids grammar mistakes only?"'], answer: 0,
      explain: 'C1 writing is judged by how ideas flow, not just by grammatical correctness.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-addition', html: 'Addition connectors (zudem, außerdem, darüber hinaus, ferner) should be varied, not repeated — always followed by verb-second word order.' },
    { c: 'r-contrast', html: 'Contrast connectors (dennoch, allerdings, hingegen, dagegen) precisely mark concessive or opposing ideas.' },
    { c: 'r-result', html: 'Result connectors (folglich, somit, infolgedessen, deshalb) mark logical conclusions; parallel connectors (gleichzeitig, zugleich, ebenfalls) mark simultaneous ideas.' }
  ],
  revisionTips: [
    'Take a paragraph you\'ve written with repeated "und" or "aber" and replace at least three instances with more precise connectors.',
    'Practise connector-first sentences: write five sentences starting with a Position-1 connector followed by correct verb-second order.',
    'Read a German newspaper editorial and highlight every addition, contrast, result and parallel connector you find.'
  ]
};

window.CHAPTER = CHAPTER;
