/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 8
   "Anspruchsvolle Präpositionen" — advanced prepositional
   expressions for topic/reference, cause, purpose, method,
   and scope. NOT basic Wechselpräpositionen or elementary
   local prepositions.
   Dialogue: Elke and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-08-anspruchsvolle-praepositionen',
  phase: 'C1 · Kasus & Präpositionen',
  number: 8,
  title: 'Anspruchsvolle Präpositionen',
  titleEn: 'Advanced prepositional expressions',
  description: 'B2 asks "Which preposition is correct?" C1 asks "Which preposition is the most precise, formal and natural in this context?"',
  xp: 370,
  time: 95,
  difficulty: 'Advanced',
  nextChapter: { number: 9, title: 'Adjektive mit Präpositionalergänzungen', titleEn: 'Adjectives with fixed prepositional complements' , href: 'chapter-c1-09-adjektive-mit-praepositionalergaenzungen.html' },

  prevChapter: { number: 7, title: 'Präpositionen mit Genitiv', titleEn: 'Genitive prepositions in formal German', href: 'chapter-c1-07-praepositionen-mit-genitiv.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'At C1, preposition choice is a <em>stylistic</em> decision.',
    intro: 'Refining a research proposal, Elke and Timo replace simple prepositions with sharper alternatives — in view of the results, with the help of new methods, with regard to the questions still open — each one a stylistic upgrade, not just a correct choice.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See hinsichtlich, angesichts, mithilfe, im Rahmen, and zugunsten used precisely in context'
    ],
    scene: 'Verfeinerung eines Forschungsantrags',
    femaleSpeakers: ['Elke'],
    dialogue: [
      { speaker: 'Elke', tokens: [
        { w: 'Angesichts', role: 'r-preposition', en: 'in view of', hi: 'को देखते हुए', pron: 'AN-ge-zikhts', type: 'Preposition + genitive', why: 'angesichts + Genitiv = in view of (this chapter).', ex: 'Angesichts der Ergebnisse haben wir das Budget erhöht.', exEn: 'In view of the results we have raised the budget.' },
        { w: 'der', role: 'r-dativ', en: 'the (pl. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Ergebnisse', role: 'r-dativ', en: 'results (gen.)', hi: 'परिणामों को', pron: 'er-GAYP-ni-suh', type: 'Noun · plural genitive' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-ben', type: 'Verb · haben' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Budget', role: 'r-akkusativ', en: 'budget', hi: 'बजट', pron: 'BUD-shet', type: 'Noun · neut.' },
        { w: 'erhöht', role: 'r-verb', en: 'raised', hi: 'बढ़ाया', pron: 'er-HÖT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'In view of the results we have raised the budget.', hi: 'Parinaamon ko dekhte hue humne budget badhaya hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Mithilfe', role: 'r-preposition', en: 'with the help of', hi: 'की मदद से', pron: 'mit-HIL-fuh', type: 'Preposition + genitive', why: 'mithilfe + Genitiv = with the help of (this chapter).', ex: 'Mithilfe neuer Methoden konnten wir schneller arbeiten.', exEn: 'With the help of new methods we could work faster.' },
        { w: 'neuer', role: 'r-dativ', en: 'new', hi: 'नई', pron: 'NOY-er', type: 'Adjective · genitive' },
        { w: 'Methoden', role: 'r-dativ', en: 'methods (gen.)', hi: 'तरीकों की', pron: 'me-TOH-den', type: 'Noun · plural genitive' },
        { w: 'konnten', role: 'r-modalverb', en: 'could', hi: 'सके', pron: 'KON-ten', type: 'Modal · können (Präteritum, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'schneller', role: 'r-akkusativ', en: 'faster', hi: 'ज़्यादा तेज़ी से', pron: 'SHNE-ler', type: 'Adjective · Komparativ' },
        { w: 'arbeiten', role: 'r-verb', en: 'work', hi: 'काम करना', pron: 'AR-by-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'With the help of new methods we could work faster.', hi: 'Naye tareekon ki madad se hum zyada tezi se kaam kar sake.' },
      { speaker: 'Elke', tokens: [
        { w: 'Im', role: 'r-preposition', en: 'within the', hi: 'के भीतर', pron: 'im', type: 'Preposition + place' },
        { w: 'Rahmen', role: 'r-dativ', en: 'framework (dat.)', hi: 'ढांचे के', pron: 'RAH-men', type: 'Noun · masc. dat.', why: 'im Rahmen (recycled C1).', ex: 'im Rahmen des Projekts' },
        { w: 'des', role: 'r-dativ', en: 'the (neut. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Projekts', role: 'r-dativ', en: 'project (gen.)', hi: 'परियोजना के', pron: 'pro-YEKTS', type: 'Noun · neut. genitive' },
        { w: 'dank', role: 'r-preposition', en: 'thanks to', hi: 'धन्यवाद', pron: 'dank', type: 'Preposition + dative/genitive', why: 'dank + Dativ/Genitiv = thanks to (this chapter).', ex: 'Dank deiner Hilfe haben wir es geschafft.', exEn: 'Thanks to your help we managed it.' },
        { w: 'deiner', role: 'r-dativ', en: 'your (fem. dat.)', hi: 'तुम्हारी', pron: 'DY-ner', type: 'Possessive · dative' },
        { w: 'Hilfe', role: 'r-dativ', en: 'help (dat.)', hi: 'मदद के', pron: 'HIL-fuh', type: 'Noun · fem. dat.' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-ben', type: 'Verb · haben' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'यह', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'geschafft', role: 'r-verb', en: 'managed', hi: 'सफल', pron: 'ge-SHAFT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Within the framework of the project, thanks to your help we managed it.', hi: 'Pariyojana ke dhaanche ke bheetar, tumhaari madad ke dhanyavaad se humne yeh safal kiya.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'In', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'Bezug', role: 'r-akkusativ', en: 'reference', hi: 'संदर्भ', pron: 'be-TSOOK', type: 'Noun · masc.', why: 'in Bezug auf = with regard to (this chapter).', ex: 'In Bezug auf die Ergebnisse gibt es noch Fragen.', exEn: 'With regard to the results there are still questions.' },
        { w: 'auf', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition (part of in Bezug auf)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Ergebnisse', role: 'r-akkusativ', en: 'results', hi: 'परिणाम', pron: 'er-GAYP-ni-suh', type: 'Noun · plural' },
        { w: 'gibt', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'geept', type: 'Verb · geben' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · formal es' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी भी', pron: 'nokh', type: 'Adverb' },
        { w: 'Fragen', role: 'r-akkusativ', en: 'questions', hi: 'सवाल', pron: 'FRAH-gen', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'With regard to the results there are still questions.', hi: 'Parinaamon ke sandarbh mein, abhi bhi sawaal hain.' },
      { speaker: 'Elke', tokens: [
        { w: 'Zufolge', role: 'r-preposition', en: 'according to', hi: 'के अनुसार', pron: 'tsoo-FOL-guh', type: 'Preposition + dative', why: 'zufolge + Dativ = according to, formal preposition placed after its noun (this chapter).', ex: 'Der Studie zufolge sind wir auf dem richtigen Weg.', exEn: 'According to the study we are on the right path.' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Studie', role: 'r-dativ', en: 'study (dat.)', hi: 'अध्ययन के', pron: 'SHTOO-dyuh', type: 'Noun · fem. dat.' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'auf', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'richtigen', role: 'r-dativ', en: 'right', hi: 'सही', pron: 'RIKH-ti-gen', type: 'Adjective · dative' },
        { w: 'Weg', role: 'r-dativ', en: 'path (dat.)', hi: 'रास्ते पर', pron: 'vayk', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'According to the study we are on the right path.', hi: 'Adhyayan ke anusaar hum sahi raste par hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Mangels', role: 'r-preposition', en: 'for lack of', hi: 'की कमी के कारण', pron: 'MAN-gels', type: 'Preposition + genitive', why: 'mangels + Genitiv = for lack of, very formal (this chapter).', ex: 'Mangels finanzieller Mittel müssen wir warten.', exEn: 'For lack of financial means we must wait.' },
        { w: 'finanzieller', role: 'r-dativ', en: 'financial', hi: 'वित्तीय', pron: 'fi-nan-TSYE-ler', type: 'Adjective · genitive' },
        { w: 'Mittel', role: 'r-dativ', en: 'means (gen.)', hi: 'साधनों की', pron: 'MI-tel', type: 'Noun · plural genitive' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'MÜ-sen', type: 'Modal · müssen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'leider', role: 'r-akkusativ', en: 'unfortunately', hi: 'दुर्भाग्य से', pron: 'LY-der', type: 'Adverb' },
        { w: 'warten', role: 'r-verb', en: 'wait', hi: 'इंतज़ार करना', pron: 'VAR-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'For lack of financial means we unfortunately must wait.', hi: 'Vittiya saadhano ki kami ke kaaran humein durbhagya se intezaar karna padega.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'B2 asks: <b>"Which preposition is correct?"</b> C1 asks: <b>"Which preposition is the most precise, formal and natural in this context?"</b> Mastering <span class="de r-topic">anspruchsvolle Präpositionen</span> is one of the clearest signs of professional C1 German.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ANSPRUCHSVOLLE PRÄPOSITIONEN at C1 level — advanced prepositional expressions, NOT basic Wechselpräpositionen or elementary local prepositions (already mastered). Covered categories: Topic/Reference (hinsichtlich, bezüglich, in Bezug auf, im Hinblick auf, was...betrifft, mit Blick auf — precise C1 alternatives to basic "über"); Cause/Reason (aufgrund, infolge, angesichts, dank, mangels, zufolge — with stylistic/semantic nuances, e.g. "dank" for positive cause vs neutral "wegen"); Purpose/Benefit (zugunsten, zum Zwecke, im Interesse, im Dienste); Method/Means (mittels, anhand, mithilfe, unter Verwendung, auf der Grundlage); Scope/Limitation (im Rahmen, im Bereich, innerhalb, außerhalb, im Zusammenhang mit, im Vergleich zu). ' +
    'Do NOT expect or require basic Wechselpräpositionen or elementary local preposition explanations — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: "bezüglich von" (redundant von); "hinsichtlich zu" (wrong preposition combination); "aufgrund von des" (double marking); "mithilfe mit" (redundant); "im Bezug auf" (should be "in Bezug auf" — wrong preposition before "Bezug"); "im Rahmen von bezüglich" (redundant double preposition). The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag redundant "von" after prepositions that already govern their case directly (bezüglich, mithilfe, aufgrund).\n' +
    '- Check "in Bezug auf" is written with "in", not "im".\n' +
    '- Check that overly basic "über" is only flagged as an opportunity for improvement when the context is clearly formal/academic — not in every use.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Precision check:</b> one sentence on whether the learner chose the most precise, formal C1 preposition for the context, rather than a basic B2 alternative.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — your prepositions are precise and formal throughout. Ready for C1 modal particles next.',
    mid: 'Good. Re-read the Master Table of advanced prepositions once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: at C1, preposition choice is a stylistic decision, not just a grammatical one.'
  },

  parserSentence: [
    { w: 'Hinsichtlich', role: 'r-topic' }, { w: 'des', role: 'plain' }, { w: 'Themas', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: at C1, preposition choice is a stylistic decision, not just a grammatical one.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Elke and Timo refine a research proposal, upgrading basic prepositions into precise C1 alternatives.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master advanced prepositions for topic, cause, purpose, method, and scope.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read an academic journal article and a business/newspaper article, identifying advanced prepositions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify advanced prepositions and register in a university seminar and a conference presentation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Present research, discuss policies, and compare viewpoints using authentic C1 prepositional expressions.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite a B2 text with advanced prepositions, and write a 350-word analytical report.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill preposition selection, register selection, and collocation matching.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 370 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 8 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Preposition selection drills, collocation matching, and a full analytical report writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Table, Register Scale, Precision Flow, and Decision Flowchart.',
      pdfUrl: '/pdfs/grammar.pdf', size: '11 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Hinsichtlich des Themas gibt es viele offene Fragen.', text: 'Replace basic "über" with the precise "hinsichtlich"' },
    { de: 'Angesichts der aktuellen Entwicklungen ist Handeln notwendig.', text: 'Express cause precisely with "angesichts"' },
    { de: 'Mithilfe moderner Software lässt sich die Analyse beschleunigen.', text: 'Express method with the academic "mithilfe"' },
    { de: 'Im Rahmen dieses Projekts analysieren wir auch die Auswirkungen.', text: 'Bound scope precisely with "im Rahmen"' },
    { de: 'Dank der Unterstützung der Universität erhielten wir ausreichend Mittel.', text: 'Express positive cause with "dank" (vs neutral "wegen")' }
  ],

  vocab: [
    { de: 'hinsichtlich', pos: 'preposition', level: 'C1', register: 'written', en: 'regarding, with respect to', hi: 'के संबंध में', ex: 'Hinsichtlich des Themas gibt es unterschiedliche Meinungen.', exEn: 'Regarding the topic, there are different opinions.', exHi: 'Vishay ke sambandh mein, alag-alag raayein hain.', ex2: 'Sie haben hinsichtlich der Ergebnisse Zweifel geäußert.', ex2En: 'They\'ve expressed doubts regarding the results.', ex2Hi: 'Unhone parinaamon ke sambandh mein sandeh vyakt kiya hai.' },
    { de: 'angesichts', pos: 'preposition', level: 'C1', register: 'written', en: 'in view of, given', hi: 'को देखते हुए', ex: 'Angesichts der aktuellen Entwicklungen ist Handeln notwendig.', exEn: 'In view of the current developments, action is necessary.', exHi: 'Vartamaan vikaason ko dekhte hue, kaarvaai zaroori hai.', ex2: 'Sie haben angesichts der Risiken vorsichtig gehandelt.', ex2En: 'They\'ve acted cautiously in view of the risks.', ex2Hi: 'Unhone jokhimon ko dekhte hue saavdhaani se kaam kiya hai.' },
    { de: 'mithilfe', pos: 'preposition', level: 'C1', register: 'written', en: 'with the help of', hi: 'की मदद से', ex: 'Mithilfe moderner Software lässt sich die Analyse beschleunigen.', exEn: 'With the help of modern software, the analysis can be sped up.', exHi: 'Aadhunik software ki madad se, vishleshan tez kiya jaa sakta hai.', ex2: 'Sie haben das Problem mithilfe eines Experten gelöst.', ex2En: 'They\'ve solved the problem with the help of an expert.', ex2Hi: 'Unhone ek visheshagya ki madad se samasya hal ki hai.' },
    { de: 'im Rahmen', pos: 'preposition', level: 'C1', register: 'written', en: 'within the framework of', hi: 'के दायरे में', ex: 'Im Rahmen dieses Projekts wurden neue Methoden entwickelt.', exEn: 'Within the framework of this project, new methods were developed.', exHi: 'Iss project ke daayre mein, nayi vidhiyaan vikasit ki gayi.', ex2: 'Sie haben im Rahmen der Konferenz einen Workshop angeboten.', ex2En: 'They\'ve offered a workshop within the framework of the conference.', ex2Hi: 'Unhone sammelan ke daayre mein ek workshop pesh ki hai.' },
    { de: 'dank', pos: 'preposition', level: 'C1', register: 'both', en: 'thanks to', hi: 'की बदौलत', ex: 'Dank der Unterstützung konnten wir das Projekt abschließen.', exEn: 'Thanks to the support, we could complete the project.', exHi: 'Samarthan ki badaulat, hum project poora kar paaye.', ex2: 'Sie haben dank harter Arbeit Erfolg gehabt.', ex2En: 'They\'ve had success thanks to hard work.', ex2Hi: 'Unhein mehnat ki badaulat safaltaa mili hai.' },
    { de: 'in Bezug auf', pos: 'preposition', level: 'C1', register: 'written', en: 'with regard to', hi: 'के संदर्भ में', ex: 'In Bezug auf die Kosten müssen wir noch entscheiden.', exEn: 'With regard to the costs, we still have to decide.', exHi: 'Lagat ke sandarbh mein, hamein abhi faisla lena hai.', ex2: 'Sie haben in Bezug auf die Ergebnisse Fragen gestellt.', ex2En: 'They\'ve asked questions with regard to the results.', ex2Hi: 'Unhone parinaamon ke sandarbh mein sawaal poochhe hain.' },
    { de: 'zufolge', pos: 'preposition', level: 'C1', register: 'written', en: 'according to', hi: 'के अनुसार', ex: 'Einer Studie zufolge steigt die Nachfrage.', exEn: 'According to a study, demand is rising.', exHi: 'Ek adhyayan ke anusaar, maang badh rahi hai.', ex2: 'Sie haben Expertenmeinungen zufolge gehandelt.', ex2En: 'They\'ve acted according to expert opinions.', ex2Hi: 'Unhone visheshagyon ki raay ke anusaar kaam kiya hai.' },
    { de: 'mangels', pos: 'preposition', level: 'C1', register: 'written', en: 'for lack of', hi: 'की कमी के कारण', ex: 'Mangels Beweisen wurde der Fall eingestellt.', exEn: 'For lack of evidence, the case was closed.', exHi: 'Praman ki kami ke kaaran, maamla band kar diya gaya.', ex2: 'Sie haben mangels Zeit die Aufgabe verschoben.', ex2En: 'They\'ve postponed the task for lack of time.', ex2Hi: 'Unhone samay ki kami ke kaaran kaam sthagit kar diya hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Warum anspruchsvolle Präpositionen zählen',
      body: [ 'A2 → B1 → B2 → C1. Advanced German often replaces simple prepositions with more precise alternatives: über → hinsichtlich / bezüglich / im Hinblick auf / in Bezug auf.' ],
      hinglish: 'C1 par simple prepositions ki jagah zyada precise wale aa jaate hain \u2014 jaise <i>\u00fcber</i> ki jagah <b>hinsichtlich</b>, <b>bez\u00fcglich</b> ya <b>in Bezug auf</b>. Par dhyaan rakho: yeh sirf formal writing ke liye hain. Baatcheet mein inhe use karo to bahut bhaari lagta hai.'
    },
    {
      title: 'Thema & Bezug (Topic & Reference)',
      body: [ 'hinsichtlich, bezüglich, in Bezug auf, im Hinblick auf, bezüglich der Frage, was...betrifft, mit Blick auf — each with subtle differences in formality and emphasis.' ],
      hinglish: 'Kisi vishay ki baat karne ke liye yeh sab chalte hain. <b>bez\u00fcglich</b> business emails mein sabse zyada aata hai, <b>hinsichtlich</b> academic writing mein, aur <b>im Hinblick auf</b> tab jab kisi aage ki cheez ko dhyaan mein rakh kar baat ho. <b>was \u2026 betrifft</b> thoda halka aur bolne layak hai. Dhyaan do ki inke case alag-alag hain.'
    },
    {
      title: 'Grund & Ursache (Cause & Reason)',
      body: [ 'aufgrund, infolge, angesichts, dank, mangels, zufolge — stylistic and semantic differences: "dank" for positive cause, "mangels" for lack of something, "zufolge" for reported/attributed cause.' ],
      hinglish: 'Wajah batane wale sab ek jaise nahi hain. <b>aufgrund</b> kisi thos aadhaar par, <b>infolge</b> ek nateeja jo baad mein aaya, <b>angesichts</b> kisi haalat ko dekhte hue, <b>dank</b> sirf achhi wajah ke liye (aur woh Dativ leta hai), <b>mangels</b> kisi cheez ki kami ke liye, aur <b>zufolge</b> jab baat kisi source se aayi ho \u2014 aur woh noun ke baad aata hai.'
    },
    {
      title: 'Zweck & Nutzen (Purpose & Benefit)',
      body: [ 'zugunsten, zum Zwecke, im Interesse, im Dienste, zugunsten von — expressing purpose and benefit formally.' ],
      hinglish: 'Maksad ya faayda batane ke liye: <b>zugunsten</b> (kiske faayde mein), <b>im Interesse</b> (kiske hit mein), <b>zum Zwecke</b> aur <b>im Dienste</b> \u2014 yeh dono kaafi formal hain aur zyada-tar official documents mein aate hain.'
    },
    {
      title: 'Methode & Mittel (Method & Means)',
      body: [ 'mittels, anhand, mithilfe, unter Verwendung, auf der Grundlage — academic ways to express method or means.' ],
      hinglish: 'Tareeka ya zariya batane ke liye yeh academic expressions hain. <b>anhand</b> tab jab kisi cheez ke aadhaar par kuch dikhaya jaa raha ho (<span class="de">anhand eines Beispiels</span>), <b>mittels</b> aur <b>unter Verwendung</b> jab koi tool ya method use hua ho, aur <b>mithilfe</b> thoda kam formal hai.'
    },
    {
      title: 'Einschränkung & Umfang (Limitation & Scope)',
      body: [ 'im Rahmen, im Bereich, innerhalb, außerhalb, im Zusammenhang mit, im Vergleich zu — bounding the scope of a discussion or project.' ],
      hinglish: 'Yeh batate hain ki baat kis daayre ki hai. <b>im Rahmen</b> matlab kisi project ya kaam ke andar, <b>im Bereich</b> kisi field mein, <b>im Zusammenhang mit</b> kisi cheez se jude hue, aur <b>im Vergleich zu</b> tulna ke liye. Aakhri do Dativ lete hain.'
    },
    {
      title: 'Welcher Kasus \u2014 nicht alle nehmen Genitiv',
      body: [
        'It is tempting to assume every advanced preposition takes the Genitiv. Several do not, and mixing them up is the most visible C1 error in formal writing.',
        'The <b>in \u2026 auf</b> and <b>im \u2026</b> phrases are built from ordinary prepositions, so they keep that preposition\u2019s case.'
      ],
      table: {
        head: ['Expression', 'Case', 'Example'],
        rows: [
          ['hinsichtlich, bez\u00fcglich, mittels, anhand, mithilfe, infolge, zugunsten, mangels', 'Genitiv', '<span class="de">hinsichtlich der Qualit\u00e4t</span>'],
          ['in Bezug auf, im Hinblick auf, mit Blick auf', 'Akkusativ', '<span class="de">in Bezug auf <b>die</b> Kosten</span>'],
          ['im Rahmen, im Bereich, im Interesse', 'Genitiv', '<span class="de">im Rahmen des Projekts</span>'],
          ['im Zusammenhang mit, im Vergleich zu', 'Dativ', '<span class="de">im Vergleich zu <b>dem</b> Vorjahr</span>'],
          ['dank', 'Dativ (Genitiv in formal writing)', '<span class="de">dank <b>dem</b> Team</span>'],
          ['zufolge', 'Dativ, and it FOLLOWS the noun', '<span class="de"><b>dem</b> Bericht zufolge</span>']
        ]
      },
      note: 'Quick test: if the expression ends in a small preposition (<i>auf</i>, <i>mit</i>, <i>zu</i>), that preposition decides the case \u2014 not the Genitiv.',
      hinglish: 'Aisa lagta hai ki yeh saare advanced prepositions Genitiv lete hain, par kai nahi lete \u2014 aur yahi galti formal writing mein sabse zyada dikhti hai. Jo <b>in \u2026 auf</b> ya <b>im \u2026</b> se bane hain, woh apne andar wale chhote preposition ka case rakhte hain. Isliye <span class="de">in Bezug auf die Kosten</span> mein Akkusativ hai, aur <span class="de">im Vergleich zu dem Vorjahr</span> mein Dativ. Do exceptions alag se yaad rakho \u2014 <b>dank</b> rozmarra mein Dativ leta hai, aur <b>zufolge</b> apne noun ke <b>baad</b> aata hai. Ek aasaan test: agar expression ke ant mein koi chhota preposition hai (auf, mit, zu), to case wahi tay karega, Genitiv nahi.'
    },
    {
      title: 'Registerunterschiede',
      body: [ 'über → bezüglich → hinsichtlich → im Hinblick auf — a scale from conversational to highly formal/academic.' ],
      hinglish: 'Yeh ek register scale hai \u2014 <i>\u00fcber</i> rozmarra ka hai, <b>bez\u00fcglich</b> business writing ka, <b>hinsichtlich</b> academic, aur <b>im Hinblick auf</b> sabse formal. Poore text mein ek hi level par raho; ek email mein <i>\u00fcber</i> aur <b>im Hinblick auf</b> dono mat mila do.'
    },
    {
      title: 'Meister-Tabelle',
      body: [ 'A quick-reference table of meaning to preferred expressions.' ],
      table: {
        head: ['Meaning', 'Preferred Expressions'],
        rows: [
          ['Topic', 'hinsichtlich, bezüglich, in Bezug auf, im Hinblick auf'],
          ['Cause', 'aufgrund, infolge, angesichts, dank, mangels'],
          ['Method', 'mittels, anhand, mithilfe, unter Verwendung'],
          ['Purpose', 'zugunsten, zum Zwecke, im Interesse'],
          ['Scope', 'im Rahmen, im Bereich, im Zusammenhang mit']
        ]
      },
      hinglish: 'Matlab se expression dhoondne ke liye table \u2014 pehle socho ki tumhe kya batana hai (vishay, wajah, tareeka, maksad, daayra), phir usi row se chuno aur uska case check kar lo.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'Most of these add a preposition the expression already contains. The exceptions worth memorising: <b>dank</b> usually takes the Dativ, and <b>in Bezug auf</b> takes the Akkusativ.' ],
      mistakes: [
        { wrong: 'Bezüglich von Ihrer Anfrage teilen wir mit \u2026', right: 'Bezüglich Ihrer Anfrage teilen wir mit \u2026', why: '<b>bez\u00fcglich</b> governs the Genitiv on its own, so <i>von</i> is not needed \u2014 and with it the case comes out wrong.' },
        { wrong: 'Hinsichtlich zu der Qualität gibt es Fragen.', right: 'Hinsichtlich der Qualität gibt es Fragen.', why: '<b>hinsichtlich</b> is followed directly by a Genitiv noun phrase \u2014 no <i>zu</i> in between.' },
        { wrong: 'Aufgrund von des Berichts wurde entschieden.', right: 'Aufgrund des Berichts wurde entschieden.', why: 'Pick one: <b>aufgrund</b> + Genitiv, or <b>aufgrund von</b> + Dativ (which is the normal choice with a bare plural: <i>aufgrund von Problemen</i>). Never both at once.' },
        { wrong: 'Mithilfe der Analyse konnten wir das Problem lösen, dank des Teams.', right: 'Mithilfe der Analyse konnten wir das Problem lösen \u2014 dank dem Team.', why: '<b>dank</b> is the odd one out in this group: in everyday use it takes the <b>Dativ</b> (<i>dank dem Team</i>), though the Genitiv is also found in formal writing.' },
        { wrong: 'Im Bezug auf die Kosten gibt es Bedenken.', right: 'In Bezug auf die Kosten gibt es Bedenken.', why: 'The fixed form is <b>in Bezug auf</b> \u2014 no contraction. Note it takes the <b>Akkusativ</b>, unlike the Genitiv prepositions around it.' },
        { wrong: 'Mangels an Beweisen wurde das Verfahren eingestellt.', right: 'Mangels Beweisen wurde das Verfahren eingestellt.', why: '<b>mangels</b> takes the Genitiv directly \u2014 <i>an</i> belongs to the noun <i>Mangel an</i>, not to the preposition.' }
      ],
      hinglish: 'Inme se zyada-tar galtiyan ek hi tarah ki hain \u2014 expression mein jo preposition pehle se hai, use dobara laga dena. Aur do exceptions yaad rakho: <b>dank</b> aksar Dativ leta hai, aur <b>in Bezug auf</b> Akkusativ.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to refer to a topic? hinsichtlich/bezüglich/in Bezug auf. Need a cause? aufgrund/infolge/angesichts. Need a method? mittels/anhand/mithilfe. Need a scope? im Rahmen/im Bereich. Need a purpose? zugunsten/im Interesse.' ],
      note: 'Memory trick: B2 asks "Which preposition is correct?" C1 asks "Which preposition is the most precise, formal and natural in this context?"',
      hinglish: 'Vishay ki baat? <b>hinsichtlich/bez\u00fcglich/in Bezug auf</b>. Wajah? <b>aufgrund/infolge/angesichts</b>. Tareeka? <b>mittels/anhand/mithilfe</b>. Daayra? <b>im Rahmen/im Bereich</b>. Maksad? <b>zugunsten/im Interesse</b>. Expression chunne ke baad hamesha ek baar case check karo \u2014 sab Genitiv nahi lete.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Forschungsmagazin: Digitale Werkzeuge in der Altertumsforschung',
    titleEn: 'Reading A — Research magazine: digital tools in classical studies',
    tokens: [
      { w: 'Hinsichtlich', role: 'r-topic', en: 'regarding (precise topic-marking preposition)', hi: 'के संबंध में', type: 'Präposition · Gen.', why: '"Hinsichtlich" precisely names the dimension under discussion — typical of academic register (this chapter).' },
      { w: 'der', role: 'plain', en: 'the (fem. gen.)', hi: 'इस', type: 'Article · Gen.' },
      { w: 'Methodik', role: 'plain', en: 'methodology (Satzende)', hi: 'पद्धति (Satzende)', type: 'Noun · fem.' },
      { w: 'hat', role: 'plain', en: 'has', hi: 'है', type: 'Verb · haben (Präsens)' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Altertumsforschung', role: 'plain', en: 'classical studies (Satzende)', hi: 'पुरातत्व अनुसंधान (Satzende)', type: 'Noun · fem.' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (plural dat.)', hi: 'इन', type: 'Article · Dat.' },
      { w: 'letzten', role: 'plain', en: 'last', hi: 'पिछले', type: 'Adjective · Dat.' },
      { w: 'Jahren', role: 'plain', en: 'years (Satzende)', hi: 'सालों (Satzende)', type: 'Noun · plural' },
      { w: 'grundlegend', role: 'plain', en: 'fundamentally', hi: 'मौलिक रूप से', type: 'Adverb' },
      { w: 'gewandelt', role: 'plain', en: 'changed (Satzende)', hi: 'बदल गई (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Mithilfe', role: 'r-method', en: 'with the help of (precise method preposition)', hi: 'की मदद से', type: 'Präposition · Gen.', why: '"Mithilfe" introduces the exact tool or method used (this chapter).' },
      { w: 'hochauflösender', role: 'plain', en: 'high-resolution', hi: 'उच्च-रिज़ॉल्यूशन', type: 'Adjective · Gen.' },
      { w: '3D-Scans', role: 'plain', en: '3D scans (Satzende)', hi: '3D स्कैन (Satzende)', type: 'Noun · plural' },
      { w: 'lassen', role: 'plain', en: 'let', hi: 'देते हैं', type: 'Verb · lassen' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'heute', role: 'plain', en: 'today', hi: 'आज', type: 'Adverb' },
      { w: 'selbst', role: 'plain', en: 'even', hi: 'यहाँ तक कि', type: 'Adverb' },
      { w: 'stark', role: 'plain', en: 'heavily', hi: 'बुरी तरह', type: 'Adverb' },
      { w: 'beschädigte', role: 'plain', en: 'damaged', hi: 'क्षतिग्रस्त', type: 'Adjective' },
      { w: 'Inschriften', role: 'plain', en: 'inscriptions (Satzende)', hi: 'शिलालेख (Satzende)', type: 'Noun · plural' },
      { w: 'entziffern', role: 'plain', en: 'decipher (Satzende)', hi: 'पढ़े जा सकते हैं (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true },
      { w: 'Angesichts', role: 'r-cause', en: 'in view of (precise cause preposition)', hi: 'को देखते हुए', type: 'Präposition · Gen.' },
      { w: 'dieser', role: 'plain', en: 'of these', hi: 'इन', type: 'Determiner · Gen.' },
      { w: 'Möglichkeiten', role: 'plain', en: 'possibilities (Satzende)', hi: 'संभावनाओं (Satzende)', type: 'Noun · plural' },
      { w: 'investieren', role: 'plain', en: 'invest', hi: 'निवेश कर रहे हैं', type: 'Verb (Präsens)' },
      { w: 'immer', role: 'plain', en: '(part of "immer mehr")', hi: '', type: 'Adverb' },
      { w: 'mehr', role: 'plain', en: 'more and more', hi: 'ज़्यादा से ज़्यादा', type: 'Adverb' },
      { w: 'Institute', role: 'plain', en: 'institutes', hi: 'संस्थान', type: 'Noun · plural' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Akk.' },
      { w: 'entsprechende', role: 'plain', en: 'corresponding', hi: 'संबंधित', type: 'Adjective · Akk.' },
      { w: 'Ausrüstung', role: 'plain', en: 'equipment (Satzende)', hi: 'उपकरण (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true }
    ],
    translation: 'Regarding methodology, classical studies have fundamentally changed in recent years. With the help of high-resolution 3D scans, even severely damaged inscriptions can now be deciphered. In view of these possibilities, more and more institutes are investing in corresponding equipment.',
    comprehension: [
      { q: 'Welches Register hat "hinsichtlich"?', options: ['Formal/akademisch', 'Umgangssprachlich', 'Nur juristisch'], answer: 0 },
      { q: 'Welche Funktion hat "mithilfe hochauflösender 3D-Scans"?', options: ['Methode', 'Grund', 'Zweck'], answer: 0 },
      { q: 'Welchen Kasus verlangt "hinsichtlich"?', options: ['Genitiv', 'Dativ', 'Akkusativ'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Wirtschaftsbericht',
    titleEn: 'Reading B — Business report',
    tokens: [
      { w: 'Angesichts', role: 'r-cause', en: 'in view of (precise C1 cause expression)', hi: 'ko dekhte hue (precise C1 cause expression)', type: 'Präposition · Gen.' },
      { w: 'der', role: 'plain', en: 'the (fem. gen.)', hi: 'is', type: 'Article · Gen.' },
      { w: 'steigenden', role: 'plain', en: 'rising', hi: 'badhti', type: 'Adjective · Gen.' },
      { w: 'Nachfrage', role: 'plain', en: 'demand (Satzende)', hi: 'maang ko (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'plant', role: 'plain', en: 'plans', hi: 'plan karti hai', type: 'Verb (Präsens)' },
      { w: 'das', role: 'plain', en: 'the (neut. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Unternehmen', role: 'plain', en: 'company (Satzende)', hi: 'company (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'eine', role: 'plain', en: 'an (fem. akk.)', hi: 'ek', type: 'Article' },
      { w: 'Expansion', role: 'plain', en: 'expansion (Satzende)', hi: 'vistaar (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Zugunsten', role: 'r-purpose', en: 'in favour of (precise C1 purpose expression)', hi: 'ke paksha mein (precise C1 purpose expression)', type: 'Präposition · Gen.' },
      { w: 'einer', role: 'plain', en: 'a (fem. gen.)', hi: 'ek', type: 'Article · Gen.' },
      { w: 'schnellen', role: 'plain', en: 'quick', hi: 'tez', type: 'Adjective · Gen.' },
      { w: 'Umsetzung', role: 'plain', en: 'implementation (Satzende)', hi: 'karyaanvayan ke (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'wurden', role: 'plain', en: 'were (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Satzende)' },
      { w: 'zusätzliche', role: 'plain', en: 'additional', hi: 'atirikt', type: 'Adjective · Nom.' },
      { w: 'Ressourcen', role: 'plain', en: 'resources (Satzende)', hi: 'sansaadhan (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'bereitgestellt', role: 'plain', en: 'provided (Satzende)', hi: 'uplabdh karaaye gaye (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'In view of the rising demand, the company plans an expansion. In favour of quick implementation, additional resources were provided.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_008_L001', speaker: 'Elke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, angesichts der neuen Ergebnisse sollten wir den Antrag noch einmal überarbeiten.', en: 'Timo, in view of the new results, we should revise the proposal once more.' },
      { id: 'C1_008_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt, und mithilfe der aktuellen Daten lässt sich das Argument viel überzeugender formulieren.', en: 'True, and with the help of the current data, the argument can be formulated much more convincingly.' },
      { id: 'C1_008_L003', speaker: 'Elke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau, und hinsichtlich der noch offenen Fragen erwähnen wir sie im Ausblick.', en: 'Exactly, and regarding the questions still open, we\'ll mention them in the outlook section.' },
      { id: 'C1_008_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Guter Plan, dann ist der Antrag rundum überzeugend.', en: 'Good plan, then the proposal is convincing all around.' }
    ],
    transcript: 'Timo, angesichts der neuen Ergebnisse sollten wir den Antrag noch einmal überarbeiten. Stimmt, und mithilfe der aktuellen Daten lässt sich das Argument viel überzeugender formulieren. Genau, und hinsichtlich der noch offenen Fragen erwähnen wir sie im Ausblick. Guter Plan, dann ist der Antrag rundum überzeugend.',
    translation: 'Timo, in view of the new results, we should revise the proposal once more. True, and with the help of the current data, the argument can be formulated much more convincingly. Exactly, and regarding the questions still open, we\'ll mention them in the outlook section. Good plan, then the proposal is convincing all around.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'angesichts' },
      { w: 'der' },
      { w: 'neuen' },
      { w: 'Ergebnisse' },
      { w: 'sollten' },
      { w: 'wir' },
      { w: 'den' },
      { w: 'Antrag' },
      { w: 'noch' },
      { w: 'einmal' },
      { w: 'überarbeiten' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'mithilfe' },
      { w: 'der' },
      { w: 'aktuellen' },
      { w: 'Daten' },
      { w: 'lässt' },
      { w: 'sich' },
      { w: 'das' },
      { w: 'Argument' },
      { w: 'viel' },
      { w: 'überzeugender' },
      { w: 'formulieren' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'hinsichtlich' },
      { w: 'der' },
      { w: 'noch' },
      { w: 'offenen' },
      { w: 'Fragen' },
      { w: 'erwähnen' },
      { w: 'wir' },
      { w: 'sie' },
      { w: 'im' },
      { w: 'Ausblick' },
      { w: '.', plain: true },
      { w: 'Guter' },
      { w: 'Plan' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'ist' },
      { w: 'der' },
      { w: 'Antrag' },
      { w: 'rundum' },
      { w: 'überzeugend' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum sollten sie den Antrag überarbeiten?', qEn: 'Why should they revise the proposal?', options: ['wegen des Zeitdrucks', 'angesichts der neuen Ergebnisse', 'wegen eines Fehlers', 'ohne besonderen Grund'], optionsEn: ['because of time pressure', 'in view of the new results', 'because of a mistake', 'for no particular reason'], answer: 1,
        explain: '"Angesichts der neuen Ergebnisse sollten wir den Antrag noch einmal überarbeiten."' },
      { q: 'Wo werden die offenen Fragen erwähnt?', qEn: 'Where will the open questions be mentioned?', options: ['in der Einleitung', 'im Ausblick', 'gar nicht', 'im Titel'], optionsEn: ['in the introduction', 'in the outlook section', 'not at all', 'in the title'], answer: 1,
        explain: '"… erwähnen wir sie im Ausblick."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Timo will den Antrag überarbeiten. Begründe es mit den neuen Ergebnissen.", taskEn: "Timo wants to revise the proposal. Justify it with the new results.", de: "Angesichts der neuen Ergebnisse sollten wir den Antrag überarbeiten.", en: "In view of the new results we should revise the proposal." },
    { task: "Erklär, wie sich das Argument stützen lässt.", taskEn: "Explain how the argument can be supported.", de: "Mithilfe der aktuellen Daten lässt sich das Argument besser belegen.", en: "With the help of the current data the argument can be better supported." },
    { task: "Ein Zuhörer fragt, welchen Teil der Kosten du behandelst.", taskEn: "A listener asks which part of the costs you'll cover.", de: "Hinsichtlich der Kosten beschränke ich mich auf die Personalausgaben.", en: "With regard to costs I'll limit myself to staffing expenditure." },
    { task: "Die Kommission fragt, ob das Budget reicht.", taskEn: "The committee asks whether the budget is sufficient.", de: "Im Rahmen des Programms und dank der Vorarbeiten bleiben wir im Budget.", en: "Within the programme and thanks to the preliminary work we stay within budget." },
    { task: "Der Bericht nennt eine fehlende Grundlage. Gib das wieder.", taskEn: "The report names a missing basis. Report it.", de: "Dem Gutachten zufolge scheitert das Projekt mangels Personal.", en: "According to the review the project fails for want of staff." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Take a B2-level text using basic prepositions ("über", "wegen", "mit") and rewrite it using advanced C1 prepositions (hinsichtlich, angesichts, mithilfe, im Rahmen).\n\nTASK 2 — Analytical report (350 words): Write a report using a wide variety of sophisticated prepositional expressions naturally.',
    starters: ['Hinsichtlich der Ergebnisse lässt sich ein klarer Trend feststellen.', 'Angesichts der aktuellen Entwicklungen ist Handeln notwendig.'],
    placeholder: 'Hinsichtlich der Methodik lässt sich feststellen, dass mithilfe digitaler Werkzeuge präzisere Ergebnisse erzielt wurden...',
    minWords: 150
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which is the more precise C1 alternative to "über das Thema"?',
      options: ['hinsichtlich des Themas', 'bezüglich von dem Thema', 'im Bezug auf das Thema'],
      answer: 0,
      explain: '"Hinsichtlich des Themas" is precise, formal, and correctly cased; the other options contain errors.'
    },
    gap: {
      sentence: ['Mithilfe ', ' Software lässt sich die Analyse beschleunigen.'],
      gaps: [ { answer: 'moderner', accepts: ['moderner'] } ],
      explain: '"Mithilfe" takes the Genitive; "moderner Software" is the correctly declined Genitive noun phrase.'
    },
    match: {
      q: 'Match each advanced preposition to its meaning category.',
      pairs: [
        { noun: 'hinsichtlich', art: 'Topic/Reference' },
        { noun: 'angesichts', art: 'Cause/Reason' },
        { noun: 'mithilfe', art: 'Method/Means' },
        { noun: 'im Rahmen', art: 'Scope/Limitation' }
      ]
    },
    builder: {
      target: 'Build: "In view of the current developments, action is necessary." (precise C1 cause expression)',
      bank: ['Angesichts', 'der', 'aktuellen', 'Entwicklungen', 'ist', 'Handeln', 'notwendig', '.'],
      answer: ['Angesichts', 'der', 'aktuellen', 'Entwicklungen', 'ist', 'Handeln', 'notwendig', '.'],
      roles: { 'Angesichts': 'r-cause' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Im Bezug auf die Kosten müssen wir noch entscheiden.',
      right: 'In Bezug auf die Kosten müssen wir noch entscheiden.',
      explain: 'The fixed expression is "in Bezug auf", not "im Bezug auf".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which is the more formal, precise C1 alternative to "über"?', options: ['hinsichtlich', 'mit', 'für'], answer: 0,
      explain: '"Hinsichtlich" is a precise, formal alternative to the basic "über" when referring to a topic.' },
    { q: 'What does "dank" express that "wegen" does not?', options: ['A positive cause', 'A negative cause', 'A method'], answer: 0,
      explain: '"Dank" implies a positive cause, unlike the neutral "wegen".' },
    { q: 'Is "bezüglich von" correct?', options: ['No — "von" is redundant after "bezüglich"', 'Yes, always required', 'Only in legal texts'], answer: 0,
      explain: '"Bezüglich" already governs the Genitive directly; "von" is unnecessary.' },
    { q: 'What does "im Rahmen" express?', options: ['Scope/limitation of a project or discussion', 'A method', 'A positive cause'], answer: 0,
      explain: '"Im Rahmen" precisely bounds the scope of something, like a project or study.' },
    { q: 'What is the C1 memory trick for preposition choice?', options: ['C1 asks which preposition is the most precise, formal and natural', 'C1 asks only if it is grammatically correct', 'C1 avoids all prepositions'], answer: 0,
      explain: 'At C1, preposition choice is a stylistic decision — precision and register matter as much as correctness.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-topic', html: 'Advanced topic expressions (hinsichtlich, bezüglich, in Bezug auf, im Hinblick auf) replace the basic "über" in formal writing.' },
    { c: 'r-cause', html: 'Cause expressions (angesichts, dank, mangels, zufolge) each carry distinct nuances beyond neutral "wegen".' },
    { c: 'r-method', html: 'Method (mithilfe, anhand) and scope (im Rahmen, im Bereich) expressions signal precise, academic C1 style.' }
  ],
  revisionTips: [
    'Rewrite five sentences using "über" or "wegen" into their more precise C1 alternatives.',
    'Read a German academic or business article and underline every advanced preposition, noting its meaning category.',
    'Practise the Master Table categories (topic, cause, purpose, method, scope) until choosing the right preposition feels automatic.'
  ]
};

window.CHAPTER = CHAPTER;
