/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 6 · Chapter 60
   "Indirekte Rede: Grundlagen" — WHEN/WHY Konjunktiv I is used
   for objective reported speech: direct vs indirect speech,
   reporting verbs, pronoun change, basic tense overview. Does
   NOT teach Konjunktiv II replacement, reported questions,
   reported commands, or complex tense changes (later chapters).
   IMPORTANT: dialogue uses ONLY Petra and Timo.
   Vocabulary source: uploaded Chapter 60 list (22 items).
============================================================ */
const CHAPTER = {
  id: 'b2-60-indirekte-rede-grundlagen',
  phase: 'B2 · Phase 6',
  number: 60,
  title: 'Indirekte Rede: Grundlagen',
  titleEn: 'Reported speech: basics',
  description: '"Ich bin müde." → Sie sei müde. Report what someone said — without claiming it\'s true.',
  xp: 780,
  time: 80,
  difficulty: 'Advanced',
  nextChapter: { number: 61, title: 'Indirekte Rede: Zeitverschiebung', titleEn: 'Reported speech: time reference' , href: 'chapter-b2-61-indirekte-rede-zeitverschiebung.html' },

  prevChapter: { number: 59, title: 'Konjunktiv I: Formen', titleEn: 'Konjunktiv I: forms', href: 'chapter-b2-59-konjunktiv-i-formen.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Report it. <em>Don\'t</em> confirm it.',
    intro: 'Over the morning paper, Petra reports what her brother said about a tennis pro\'s win, and Timo notices neither of them is claiming it\'s true — every reported statement carried neutrally by Konjunktiv I.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See exactly how direct speech transforms into indirect speech'
    ],
    scene: 'Zeitungslektüre am Morgen',
    femaleSpeakers: ['Petra'],
    dialogue: [
      { speaker: 'Petra', tokens: [
        { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Bruder', role: 'r-subject', en: 'brother', hi: 'भाई', pron: 'BROO-der', type: 'Noun · masc.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'कहा', pron: 'hat', type: 'Verb · haben (helper)' },
        { w: 'gesagt', role: 'r-verb', en: 'said', hi: 'कहा', pron: 'ge-ZAHKT', type: 'Partizip II' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Rennen', role: 'r-subject', en: 'race', hi: 'दौड़', pron: 'RE-nen', type: 'Noun · neut.' },
        { w: 'sei', role: 'r-verb', en: 'was (Konjunktiv I)', hi: 'थी', pron: 'zy', type: 'Verb · sein (Konjunktiv I)', why: 'indirekte Rede uses Konjunktiv I to report what someone said (this chapter).', ex: 'Er hat gesagt, das Rennen sei spannend gewesen.', exEn: 'He said the race was exciting.' },
        { w: 'spannend', role: 'r-akkusativ', en: 'exciting', hi: 'रोमांचक', pron: 'SHPA-nent', type: 'Adjective' },
        { w: 'gewesen', role: 'r-verb', en: 'been', hi: 'थी', pron: 'ge-VAY-zen', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'My brother said the race was exciting.', hi: 'Mere bhai ne kaha ki daud romaanchak thi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Hat', role: 'r-verb', en: 'has', hi: 'कहा', pron: 'hat', type: 'Verb · haben (helper)' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'उसने', pron: 'air', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'erzählt', role: 'r-verb', en: 'told', hi: 'बताया', pron: 'er-TSAILT', type: 'Partizip II' },
        { w: ',', plain: true },
        { w: 'wer', role: 'r-subject', en: 'who', hi: 'कौन', pron: 'vair', type: 'Question word' },
        { w: 'gewonnen', role: 'r-verb', en: 'won', hi: 'जीता', pron: 'ge-VO-nen', type: 'Partizip II' },
        { w: 'habe', role: 'r-verb', en: 'has (Konjunktiv I)', hi: 'था', pron: 'HAH-buh', type: 'Verb · haben (Konjunktiv I)' },
        { w: '?', plain: true }
      ], en: 'Did he also tell who had won?', hi: 'Kya usne yeh bhi bataya ki kaun jeeta?' },
      { speaker: 'Petra', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'उसने', pron: 'air', type: 'Pronoun · subject' },
        { w: 'sagte', role: 'r-verb', en: 'said', hi: 'कहा', pron: 'ZAHK-tuh', type: 'Verb · sagen (Präteritum)' },
        { w: ',', plain: true },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'वह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Tennisprofi', role: 'r-subject', en: 'tennis pro', hi: 'टेनिस प्रो', pron: 'TE-nis-pro-fee', type: 'Noun · masc.' },
        { w: 'habe', role: 'r-verb', en: 'has (Konjunktiv I)', hi: 'जीता था', pron: 'HAH-buh', type: 'Verb · haben (Konjunktiv I)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Pokal', role: 'r-akkusativ', en: 'trophy', hi: 'ट्रॉफ़ी', pron: 'po-KAHL', type: 'Noun · masc.', why: 'der Pokal (this chapter).', ex: 'den Pokal gewinnen' },
        { w: 'gewonnen', role: 'r-verb', en: 'won', hi: 'जीता', pron: 'ge-VO-nen', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Yes, he said the tennis pro had won the trophy.', hi: 'Haan, usne kaha ki tennis pro ne trophy jeeti thi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wusste', role: 'r-verb', en: 'did he know', hi: 'पता था', pron: 'VUS-tuh', type: 'Verb · wissen (Präteritum)' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'उसे', pron: 'air', type: 'Pronoun · subject' },
        { w: ',', plain: true },
        { w: 'ob', role: 'r-conjunction', en: 'whether', hi: 'क्या', pron: 'op', type: 'Conjunction · ob' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Resultat', role: 'r-subject', en: 'result', hi: 'परिणाम', pron: 'ray-zul-TAHT', type: 'Noun · neut.', why: 'das Resultat (this chapter).', ex: 'das Resultat' },
        { w: 'offiziell', role: 'r-akkusativ', en: 'official', hi: 'आधिकारिक', pron: 'o-fi-TSYEL', type: 'Adjective' },
        { w: 'sei', role: 'r-verb', en: 'was (Konjunktiv I)', hi: 'थी', pron: 'zy', type: 'Verb · sein (Konjunktiv I)' },
        { w: '?', plain: true }
      ], en: 'Did he know whether the result was official?', hi: 'Kya use pata tha ki parinaam aadhikaarik tha ya nahi?' },
      { speaker: 'Petra', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'wusste', role: 'r-verb', en: 'knew', hi: 'पता था', pron: 'VUS-tuh', type: 'Verb · wissen (Präteritum)' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'उसे', pron: 'air', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '.', plain: true }
      ], en: 'No, he did not know that.', hi: 'Nahi, use yeh pata nahi tha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'fragen', role: 'r-verb', en: 'let us ask', hi: 'पूछते हैं', pron: 'FRAH-gen', type: 'Verb · fragen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'ihn', role: 'r-akkusativ', en: 'him', hi: 'उससे', pron: 'een', type: 'Pronoun · acc.' },
        { w: 'später', role: 'r-time', en: 'later', hi: 'बाद में', pron: 'SPAY-ter', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'Good, then we ask him later.', hi: 'Achha, toh hum baad mein usse poochte hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de r-direct">"Ich bin müde."</span> (direct — exact words) → <span class="de">Sie sagt,</span> <span class="de r-konji">sie sei müde.</span> (indirect — reported, neutral). Konjunktiv I reports another person\'s words without claiming they are true.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is INDIREKTE REDE: GRUNDLAGEN (basics of reported speech) at B2 level: transforming direct speech ("Ich bin müde.") into indirect speech using Konjunktiv I (Sie sagt, sie sei müde) after reporting verbs (sagen, berichten, erklären, behaupten, erzählen, mitteilen, erwähnen, schreiben, informieren, betonen). Key rules: change the pronoun to match the reported speaker, use Konjunktiv I instead of the Indicative, and do NOT add "dass" before the Konjunktiv I clause (say "Er sagt, er sei krank", not "Er sagt, dass er sei krank"). Basic tense overview: ist→sei, hat→habe, wird→werde, kommt→komme. ' +
    'Do NOT expect or require Konjunktiv II replacement (for identical-to-Indicative forms), reported questions, reported commands, or complex tense changes — those are separate topics taught in later chapters; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that Konjunktiv I forms are used correctly after reporting verbs (sei, habe, werde, komme, etc.), not the Indicative.\n' +
    '- Check that pronouns are correctly changed to reflect the reported speaker\'s perspective (not left as the original "ich").\n' +
    '- Flag "dass" used together with a Konjunktiv I clause as a word-order/style issue — Konjunktiv I clauses normally drop "dass" and keep V2 word order.\n' +
    '- Do not flag mixing direct and indirect speech markers (quotation marks with Konjunktiv I) — that IS an error, flag it directly.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Neutrality check:</b> one sentence on whether the learner\'s reported speech sounds appropriately neutral/objective, without accidentally confirming the statement as true.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you clearly transform direct speech into neutral, objective reported speech. Ready for Konjunktiv II as substitute next.',
    mid: 'Good. Re-read the Direct vs Indirect Speech table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: change the pronoun, use Konjunktiv I, drop "dass".'
  },

  parserSentence: [
    { w: 'Er', role: 'plain' }, { w: 'sagt', role: 'r-reportverb' }, { w: ',', plain: true },
    { w: 'er', role: 'plain' }, { w: 'sei', role: 'r-konji' }, { w: 'krank', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: report someone\'s words with Konjunktiv I, without confirming them.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Petra and Timo discuss a newspaper article, comparing direct and indirect speech.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 22 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master direct vs indirect speech, reporting verbs, basic transformation, and tense overview.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a newspaper article and company meeting report full of reported speech.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify speaker, reporting verb, reported statement, and Konjunktiv I form.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Report what someone said, summarize interviews, and present news using Konjunktiv I.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Transform direct quotations into indirect speech and write a short news report.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill direct→indirect transformation, reporting verb choice, and pronoun change.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 780 XP.' },
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
      desc: 'Direct-to-indirect transformation drills, reporting verb practice, and a news-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Direct vs Indirect Speech table, reporting verbs, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: '"Ich bin müde." → Sie sagt, sie sei müde.', text: 'Transform direct speech into neutral, objective indirect speech' },
    { de: 'sagen, berichten, erklären, behaupten, mitteilen, betonen', text: 'Use common reporting verbs to introduce indirect speech' },
    { de: 'Er sagt, er sei krank. (NOT: dass er sei krank)', text: 'Drop "dass" before Konjunktiv I clauses and keep normal word order' },
    { de: 'ist→sei, hat→habe, wird→werde, kommt→komme', text: 'Apply the basic tense overview when reporting statements' },
    { de: 'Newspapers, radio news, business reports, Goethe B2 Reading', text: 'Recognize why journalists and professionals rely on indirect speech' }
  ],

  // ---------- Vocabulary (22 items — uploaded chapter-60 list) ----------
  vocab: [
    { de: 'Onlineeinkauf', art: 'der', gender: 'm', plural: 'Onlineeinkäufe', pos: 'noun', level: 'B2', register: 'both', en: 'online purchase', hi: 'ऑनलाइन खरीदारी', ex: 'Sie erledigte ihren Onlineeinkauf schnell.', exEn: 'She completed her online purchase quickly.', exHi: 'Usne apni online kharidaari jaldi poori ki.', ex2: 'Sie berichtet, der Onlineeinkauf sei gestiegen.', ex2En: 'She reports that online purchasing has increased.', ex2Hi: 'Woh report karti hai ki online kharidaari badhi hai.' },
    { de: 'Panik', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'panic', hi: 'घबराहट', ex: 'Sie geriet in Panik.', exEn: 'She fell into panic.', exHi: 'Woh ghabraahat mein aa gayi.', ex2: 'Er erklärt, die Panik sei unbegründet.', ex2En: 'He explains the panic is unfounded.', ex2Hi: 'Woh samjhaata hai ki ghabraahat beebuniyaad hai.' },
    { de: 'Passwort', art: 'das', gender: 'n', plural: 'Passwörter', pos: 'noun', level: 'B2', register: 'both', en: 'password', hi: 'पासवर्ड', ex: 'Sie vergaß ihr Passwort.', exEn: 'She forgot her password.', exHi: 'Woh apna password bhool gayi.', ex2: 'Er teilt mit, das Passwort sei geändert worden.', ex2En: 'He informs that the password has been changed.', ex2Hi: 'Woh soochit karta hai ki password badla gaya hai.' },
    { de: 'Pokal', art: 'der', gender: 'm', plural: 'Pokale', pos: 'noun', level: 'B2', register: 'both', en: 'trophy, cup', hi: 'ट्रॉफी', ex: 'Sie gewann den Pokal.', exEn: 'She won the trophy.', exHi: 'Usne trophy jeeti.', ex2: 'Der Trainer behauptet, der Pokal sei verdient.', ex2En: 'The coach claims the trophy is deserved.', ex2Hi: 'Coach dava karta hai ki trophy ke haqdaar hain.' },
    { de: 'Preisvergleich', art: 'der', gender: 'm', plural: 'Preisvergleiche', pos: 'noun', level: 'B2', register: 'written', en: 'price comparison', hi: 'मूल्य तुलना', ex: 'Sie machte einen Preisvergleich.', exEn: 'She did a price comparison.', exHi: 'Usne mulya tulna ki.', ex2: 'Die Firma erklärt, der Preisvergleich sei fair.', ex2En: 'The company explains the price comparison is fair.', ex2Hi: 'Company samjhaati hai ki mulya tulna nishpaksh hai.' },
    { de: 'Prüfer', art: 'der/die', gender: 'm/f', plural: 'Prüfer/innen', pos: 'noun', level: 'B2', register: 'written', en: 'examiner', hi: 'परीक्षक', ex: 'Die Prüferin teilt mit, die Prüfungsangst sei normal.', exEn: 'The examiner tells us that exam anxiety is normal.', exHi: 'Pareekshak batati hai ki pareeksha ki ghabraahat saamaanya hai.', ex2: 'Sie haben mit dem Prüfer gesprochen.', ex2En: 'They\'ve spoken with the examiner.', ex2Hi: 'Unhone pareekshak se baat ki hai.' },
    { de: 'Prüfungsangst', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'exam anxiety', hi: 'परीक्षा की घबराहट', ex: 'Die Prüferin teilt mit, die Prüfungsangst sei normal.', exEn: 'The examiner tells us that exam anxiety is normal.', exHi: 'Pareekshak batati hai ki pareeksha ki ghabraahat saamaanya hai.', ex2: 'Sie haben ihre Prüfungsangst überwunden.', ex2En: 'They\'ve overcome their exam anxiety.', ex2Hi: 'Unhone apni pareeksha ki ghabraahat par kaabu paaya hai.' },
    { de: 'Puffertag', art: 'der', gender: 'm', plural: 'Puffertage', pos: 'noun', level: 'B2', register: 'both', en: 'buffer day', hi: 'बफर दिन', ex: 'Wir sollten einen Puffertag einplanen.', exEn: 'We should plan in a buffer day.', exHi: 'Humein ek buffer din rakhna chaahiye.', ex2: 'Sie haben einen Puffertag eingelegt.', ex2En: 'They\'ve added a buffer day.', ex2Hi: 'Unhone ek buffer din joda hai.' },
    { de: 'recht', pos: 'adverb', level: 'B2', register: 'both', en: 'quite, rather', hi: 'काफी', ex: 'Das war recht schwierig.', exEn: 'That was quite difficult.', exHi: 'Yeh kaafi mushkil tha.', ex2: 'Sie ist recht zufrieden.', ex2En: 'She is quite satisfied.', ex2Hi: 'Woh kaafi santusht hai.' },
    { de: 'rechtzeitig', pos: 'adjective', level: 'B2', register: 'both', en: 'in good time, timely', hi: 'समय पर', ex: 'Sie kam rechtzeitig an.', exEn: 'She arrived in good time.', exHi: 'Woh samay par pahunchi.', ex2: 'Sie haben rechtzeitig reagiert.', ex2En: 'They\'ve reacted in a timely manner.', ex2Hi: 'Unhone samay par pratikriya di hai.' },
    { de: 'Rennen', art: 'das', gender: 'n', plural: 'Rennen', pos: 'noun', level: 'B2', register: 'both', en: 'race', hi: 'दौड़', ex: 'Sie gewann das Rennen.', exEn: 'She won the race.', exHi: 'Usne daud jeeti.', ex2: 'Der Trainer behauptet, das Rennen sei fair gewesen.', ex2En: 'The coach claims the race was fair.', ex2Hi: 'Coach dava karta hai ki daud nishpaksh thi.' },
    { de: 'Resultat', art: 'das', gender: 'n', plural: 'Resultate', pos: 'noun', level: 'B2', register: 'written', en: 'result', hi: 'परिणाम', ex: 'Das Resultat überraschte alle.', exEn: 'The result surprised everyone.', exHi: 'Parinaam ne sabko chaunkaaya.', ex2: 'Sie berichtet, das Resultat sei positiv.', ex2En: 'She reports the result is positive.', ex2Hi: 'Woh report karti hai ki parinaam saakaaratmak hai.' },
    { de: 'Rollstuhl', art: 'der', gender: 'm', plural: 'Rollstühle', pos: 'noun', level: 'B2', register: 'written', en: 'wheelchair', hi: 'व्हीलचेयर', ex: 'Er saß im Rollstuhl.', exEn: 'He sat in a wheelchair.', exHi: 'Woh wheelchair mein baitha tha.', ex2: 'Sie haben einen neuen Rollstuhl gekauft.', ex2En: 'They\'ve bought a new wheelchair.', ex2Hi: 'Unhone ek naya wheelchair khareeda hai.' },
    { de: 'schlimmstenfalls', pos: 'adverb', level: 'B2', register: 'both', en: 'in the worst case', hi: 'सबसे बुरे हाल में', ex: 'Schlimmstenfalls sollten wir einen Puffertag einplanen.', exEn: 'In the worst case, we should plan in a buffer day.', exHi: 'Sabse bure haal mein humein ek buffer din rakhna chaahiye.', ex2: 'Schlimmstenfalls müssen wir absagen.', ex2En: 'In the worst case, we\'ll have to cancel.', ex2Hi: 'Sabse bure haal mein humein cancel karna hoga.' },
    { de: 'Silber', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'silver', hi: 'चांदी', ex: 'Sie gewann Silber.', exEn: 'She won silver.', exHi: 'Usne chaandi jeeti.', ex2: 'Sie behauptet, das Silber sei echt.', ex2En: 'She claims the silver is real.', ex2Hi: 'Woh dava karti hai ki chaandi asli hai.' },
    { de: 'Silvester', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'New Year\'s Eve', hi: 'नए साल की पूर्व संध्या', ex: 'Sie feierten Silvester zusammen.', exEn: 'They celebrated New Year\'s Eve together.', exHi: 'Unhone saath mein Naye Saal ki poorv sandhya manaayi.', ex2: 'Sie berichtet, Silvester sei stressig gewesen.', ex2En: 'She reports New Year\'s Eve was stressful.', ex2Hi: 'Woh report karti hai ki naya saal tanaavpurn tha.' },
    { de: 'Snowboard', art: 'das', gender: 'n', plural: 'Snowboards', pos: 'noun', level: 'B2', register: 'both', en: 'snowboard', hi: 'स्नोबोर्ड', ex: 'Sie fuhr mit dem Snowboard.', exEn: 'She rode the snowboard.', exHi: 'Woh snowboard par chali.', ex2: 'Sie haben ein neues Snowboard gekauft.', ex2En: 'They\'ve bought a new snowboard.', ex2Hi: 'Unhone ek naya snowboard khareeda hai.' },
    { de: 'Startseite', art: 'die', gender: 'f', plural: 'Startseiten', pos: 'noun', level: 'B2', register: 'written', en: 'home page', hi: 'होम पेज', ex: 'Sie öffnete die Startseite.', exEn: 'She opened the home page.', exHi: 'Usne home page khola.', ex2: 'Sie haben die Startseite neu gestaltet.', ex2En: 'They\'ve redesigned the home page.', ex2Hi: 'Unhone home page naya banaaya hai.' },
    { de: 'Stellungnahme', art: 'die', gender: 'f', plural: 'Stellungnahmen', pos: 'noun', level: 'B2', register: 'written', en: 'statement, opinion', hi: 'बयान', ex: 'Die Firma gab eine Stellungnahme ab.', exEn: 'The company gave a statement.', exHi: 'Company ne ek bayaan diya.', ex2: 'Sie erklärt, die Stellungnahme sei vorläufig.', ex2En: 'She explains the statement is preliminary.', ex2Hi: 'Woh samjhaati hai ki bayaan abhi provisional hai.' },
    { de: 'Suchmaschine', art: 'die', gender: 'f', plural: 'Suchmaschinen', pos: 'noun', level: 'B2', register: 'both', en: 'search engine', hi: 'सर्च इंजन', ex: 'Sie benutzte eine Suchmaschine.', exEn: 'She used a search engine.', exHi: 'Usne ek search engine use kiya.', ex2: 'Sie berichten, die Suchmaschine sei schneller geworden.', ex2En: 'They report the search engine has become faster.', ex2Hi: 'Woh report karte hain ki search engine tez ho gaya hai.' },
    { de: 'Tennisplatz', art: 'der', gender: 'm', plural: 'Tennisplätze', pos: 'noun', level: 'B2', register: 'both', en: 'tennis court', hi: 'टेनिस कोर्ट', ex: 'Sie spielten auf dem Tennisplatz.', exEn: 'They played on the tennis court.', exHi: 'Woh tennis court par khele.', ex2: 'Sie haben einen neuen Tennisplatz gebaut.', ex2En: 'They\'ve built a new tennis court.', ex2Hi: 'Unhone ek naya tennis court banaaya hai.' },
    { de: 'Tennisprofi', art: 'der/die', gender: 'm/f', plural: 'Tennisprofis', pos: 'noun', level: 'B2', register: 'both', en: 'tennis pro', hi: 'टेनिस पेशेवर', ex: 'Der Tennisprofi behauptet, er trainiere täglich.', exEn: 'The tennis pro claims he trains daily.', exHi: 'Tennis pro dava karta hai ki woh roz training karta hai.', ex2: 'Sie haben mit einem Tennisprofi trainiert.', ex2En: 'They\'ve trained with a tennis pro.', ex2Hi: 'Unhone ek tennis pro ke saath training ki hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Indirekte Rede?',
      body: [ 'Direct speech repeats the exact words. Indirect speech reports the meaning, using Konjunktiv I to show distance and neutrality — the speaker reports without confirming the statement is true.' ],
      table: {
        head: ['Direct speech', 'Indirect speech'],
        rows: [
          ['Anna sagt: „Ich bin müde."', 'Anna sagt, sie <span class="de r-konji">sei</span> müde.']
        ]
      },
      hinglish: 'Direct speech mein tum kisi ke bilkul wahi shabd dohraate ho. Indirect speech mein sirf baat ka matlab report karte ho, aur uske liye Konjunktiv I lagta hai. Iska ek khaas kaam hai \u2014 yeh dikhata hai ki baat tumhari nahi hai aur tum uski sachai ki guarantee nahi de rahe. Isi wajah se news mein yeh itna aata hai.'
    },
    {
      title: 'Direkte vs Indirekte Rede',
      body: [ 'Comparing direct and indirect versions of the same statement shows the transformation clearly.' ],
      table: {
        head: ['Direct', 'Indirect'],
        rows: [
          ['Er sagt: „Ich habe keine Zeit."', 'Er sagt, er <span class="de r-konji">habe</span> keine Zeit.'],
          ['„Ich komme morgen."', 'Er sagt, er <span class="de r-konji">komme</span> morgen.']
        ]
      },
      hinglish: 'Dono versions saath rakh kar dekho to badlav saaf dikh jaata hai. Teen cheezein badalti hain \u2014 quotation marks hat jaate hain, pronoun badal jaata hai (<i>ich</i> se <i>er</i>), aur verb Konjunktiv I mein chala jaata hai.'
    },
    {
      title: 'Berichtende Verben (reporting verbs)',
      body: [ 'Common reporting verbs introduce indirect speech: sagen, berichten, erklären, behaupten, erzählen, mitteilen, erwähnen, schreiben, informieren, betonen.' ],
      hinglish: 'Yeh verbs reported speech shuru karte hain: <b>sagen, berichten, erkl\u00e4ren, behaupten, erz\u00e4hlen, mitteilen, erw\u00e4hnen, schreiben, informieren, betonen</b>. Inme ek chhota farak dhyaan mein rakho \u2014 <b>behaupten</b> ka matlab hai "dava karna", jisme thoda shak jhalakta hai, jabki <b>berichten</b> aur <b>mitteilen</b> bilkul neutral hain.'
    },
    {
      title: 'Grundlegende Transformation',
      body: [ 'Step by step: identify the speaker → change the pronoun → use Konjunktiv I → remove quotation marks.' ],
      table: {
        head: ['Direct', 'Indirect'],
        rows: [
          ['„Ich komme morgen."', 'Er sagt, er <span class="de r-konji">komme</span> morgen.']
        ]
      },
      hinglish: 'Chaar step mein kaam ho jaata hai: pehle dekho ki bol kaun raha hai, phir pronoun badlo, phir verb ko Konjunktiv I mein daalo, aur ant mein quotation marks hata do.'
    },
    {
      title: 'Mit oder ohne "dass"?',
      body: [
        'You have two ways to build the reported clause, and both are correct \u2014 but they use different word order.',
        'Without <b>dass</b> the clause behaves like a main clause: the verb stays in position 2. With <b>dass</b> it becomes a subordinate clause, so the verb goes to the very end. What you must never do is mix them.'
      ],
      table: {
        head: ['Version', 'Word order', 'Example'],
        rows: [
          ['ohne <b>dass</b>', 'verb in position 2', '<span class="de">Er sagt, er <b>sei</b> krank.</span>'],
          ['mit <b>dass</b>', 'verb at the end', '<span class="de">Er sagt, dass er krank <b>sei</b>.</span>'],
          ['ohne <b>dass</b> (Perfekt)', 'verb in position 2', '<span class="de">Er sagt, er <b>habe</b> gestern gearbeitet.</span>'],
          ['mit <b>dass</b> (Perfekt)', 'verb at the end', '<span class="de">Er sagt, dass er gestern gearbeitet <b>habe</b>.</span>']
        ]
      },
      note: 'In newspapers and formal reports the version WITHOUT <b>dass</b> is far more common \u2014 it sounds lighter and lets several reported sentences follow one another. Use it as your default.',
      hinglish: 'Reported clause banane ke do tareeke hain, aur dono sahi hain \u2014 bas word order alag hota hai. <b>dass</b> ke bina clause main clause jaisa chalta hai, isliye verb doosri position par rehta hai: <span class="de">Er sagt, er sei krank.</span> Aur <b>dass</b> lagao to woh subordinate clause ban jaata hai, isliye verb end mein chala jaata hai: <span class="de">Er sagt, dass er krank sei.</span> Galti tab hoti hai jab dono ko mila diya jaata hai. Newspapers aur formal reports mein <b>dass</b> ke bina wala version zyada aata hai, kyunki woh halka lagta hai \u2014 isliye ise hi default rakho.'
    },
    {
      title: 'Warum Zeitungen Indirekte Rede benutzen',
      body: [ 'The journalist reports what was said but does not confirm the truth of the statement.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Der Minister sagt: „Die Lage ist stabil."', 'The minister says: "The situation is stable."'],
          ['Die Zeitung schreibt, der Minister sage, die Lage sei stabil.', 'The newspaper writes that the minister says the situation is stable.']
        ]
      },
      hinglish: 'Journalist yeh batata hai ki kya kaha gaya, par uski sachai ki zimmedaari nahi leta. Isliye jab tum newspaper mein Konjunktiv I dekho, to samajh lo ki yeh akhbaar ki apni baat nahi hai \u2014 woh kisi aur ka bayaan report kar raha hai.'
    },
    {
      title: 'Berufliche Kommunikation',
      body: [ 'Indirect speech is common in workplace reports — showing neutral, third-party reporting.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Die Personalabteilung erklärt, der Vertrag werde nächste Woche unterschrieben.', 'HR explains the contract will be signed next week.'],
          ['Der Projektleiter berichtet, das Projekt laufe planmäßig.', 'The project manager reports the project is running according to plan.']
        ]
      },
      hinglish: 'Office ke reports mein bhi yahi hota hai \u2014 tum kisi aur ki baat aage pahunchate ho, bina apni raay milaye. Isliye yeh neutral aur professional lagta hai.'
    },
    {
      title: 'Grundlegende Zeitübersicht',
      body: [ 'A simple overview of the most common Konjunktiv I substitutions for the present tense.' ],
      table: {
        head: ['Indicative', 'Konjunktiv I'],
        rows: [
          ['ist', 'sei'],
          ['hat', 'habe'],
          ['wird', 'werde'],
          ['kommt', 'komme']
        ]
      },
      hinglish: 'Yeh sabse common badlav hain jo tumhe baar-baar chahiye honge. <b>ist</b> se <b>sei</b>, <b>hat</b> se <b>habe</b>, <b>wird</b> se <b>werde</b>, aur <b>kommt</b> se <b>komme</b>. Inhe pehle pakka kar lo.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These come from leaving the verb in the Indicative, forgetting to shift the pronoun, mismatching the time reference, mixing direct and indirect punctuation, or using <b>dass</b> with main-clause word order.' ],
      mistakes: [
        { wrong: 'Er sagt, er ist krank.', right: 'Er sagt, er sei krank.', why: 'Reported speech takes Konjunktiv I \u2014 <b>sei</b>, not the Indicative <i>ist</i>.' },
        { wrong: 'Anna sagt, ich sei müde.', right: 'Anna sagt, sie sei müde.', why: 'The pronoun shifts to the reporter\'s perspective. Anna said \u201eich\u201c, but you are reporting about her \u2014 so it becomes <b>sie</b>.' },
        { wrong: 'Er berichtet, er komme gestern.', right: 'Er berichtet, er sei gestern gekommen.', why: '\u201egestern\u201c points to the past, so the reported form must be past too \u2014 not the present-tense <i>komme</i>. (Chapter 61 covers this in full.)' },
        { wrong: 'Er sagt: er sei krank.', right: 'Er sagt: „Ich bin krank." / Er sagt, er sei krank.', why: 'Pick one. A colon and quotation marks belong to direct speech with the Indicative; a comma and Konjunktiv I belong to indirect speech.' },
        { wrong: 'Er sagt, dass er sei krank.', right: 'Er sagt, dass er krank sei. / Er sagt, er sei krank.', why: 'Both versions are correct German. But <b>dass</b> makes it a subordinate clause, so the verb must go to the END \u2014 <i>dass er krank sei</i>. Without <b>dass</b>, normal V2 order applies.' }
      ],
      hinglish: 'Yeh galtiyan paanch tarah se hoti hain \u2014 verb ko Indicative mein chhod dena, pronoun badalna bhool jaana, time reference galat kar dena, direct aur indirect ki punctuation mila dena, ya <b>dass</b> lagane ke baad bhi verb ko doosri position par rakhna.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Quoting exact words? Use direct speech. Reporting someone else\'s statement? Use Indirekte Rede. Need neutrality? Use Konjunktiv I.' ],
      note: 'Memory trick: direct speech = exact words, quotation marks. Indirect speech = meaning only, no quotation marks, use Konjunktiv I. Journalists use it to report information without confirming it.',
      hinglish: 'Faisla aasaan hai \u2014 bilkul wahi shabd dena hain to direct speech, aur sirf baat aage pahunchani hai to Indirekte Rede. Aur agar neutral rehna hai, matlab sachai ki zimmedaari nahi leni, to Konjunktiv I use karo.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Sportnachricht: Der Tennisprofi über sein bestes Rennen',
    titleEn: 'Sports news: the tennis pro on his best race',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Tennisprofi', role: 'plain', en: 'tennis pro', hi: 'टेनिस पेशेवर', type: 'Noun · masc.', why: 'der/die Tennisprofi (this chapter).' },
      { w: 'erklärte', role: 'plain', en: 'explained', hi: 'बताया', type: 'Verb · erklären (Präteritum)' },
      { w: 'nach', role: 'plain', en: 'after', hi: 'बाद', type: 'Preposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'the (neut. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Rennen', role: 'plain', en: 'race (Satzende)', hi: 'दौड़ (Satzende)', type: 'Noun · neut.', why: 'das Rennen (this chapter).' },
      { w: ',', plain: true },
      { w: 'das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Resultat', role: 'plain', en: 'result (Satzende)', hi: 'परिणाम (Satzende)', type: 'Noun · neut.', why: 'das Resultat (this chapter).' },
      { w: 'übertreffe', role: 'r-verb', en: 'exceeded (Konjunktiv I, indirekte Rede)', hi: 'बेहतर था (Konjunktiv I)', type: 'Verb · übertreffen (Konjunktiv I)', why: 'Reported speech converts direct statements ("Es übertrifft…") into Konjunktiv I forms like übertreffe, marking it as someone else\'s claim (this chapter).' },
      { w: 'all', role: 'plain', en: 'all', hi: 'सभी', type: 'Determiner' },
      { w: 'seine', role: 'plain', en: 'his', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'Erwartungen', role: 'plain', en: 'expectations (Satzende)', hi: 'अपेक्षाओं (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Er', role: 'plain', en: 'he', hi: 'उसने', type: 'Pronoun' },
      { w: 'sagte', role: 'plain', en: 'said', hi: 'कहा', type: 'Verb · sagen (Präteritum)' },
      { w: ',', plain: true },
      { w: 'er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'werde', role: 'r-verb', en: 'would (Konjunktiv I Futur)', hi: 'करेगा (Konjunktiv I Futur)', type: 'Verb · werden (Konjunktiv I)' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'Zukunft', role: 'plain', en: 'future (Satzende)', hi: 'भविष्य (Satzende)', type: 'Noun · fem.' },
      { w: 'noch', role: 'plain', en: 'even', hi: 'और भी', type: 'Adverb' },
      { w: 'härter', role: 'plain', en: 'harder', hi: 'कड़ी मेहनत से', type: 'Adjective · Komparativ' },
      { w: 'trainieren', role: 'plain', en: 'train (Satzende)', hi: 'प्रशिक्षण लेना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Sein', role: 'plain', en: 'his', hi: 'उसका', type: 'Possessivartikel' },
      { w: 'Rivale', role: 'plain', en: 'rival', hi: 'प्रतिद्वंद्वी', type: 'Noun · masc.' },
      { w: 'antwortete', role: 'plain', en: 'replied', hi: 'जवाब दिया', type: 'Verb · antworten (Präteritum)' },
      { w: ',', plain: true },
      { w: 'das', role: 'plain', en: 'that', hi: 'यह', type: 'Pronoun' },
      { w: 'Resultat', role: 'plain', en: 'result', hi: 'परिणाम', type: 'Noun · neut.' },
      { w: 'sei', role: 'r-verb', en: 'was (Konjunktiv I, Satzende)', hi: 'था (Konjunktiv I, Satzende)', type: 'Verb · sein (Konjunktiv I, Nebensatz-Satzende)' },
      { w: 'zwar', role: 'plain', en: 'admittedly', hi: 'हालांकि', type: 'Adverb' },
      { w: 'knapp', role: 'plain', en: 'close (Satzende)', hi: 'क़रीबी (Satzende)', type: 'Adjective' },
      { w: 'gewesen', role: 'plain', en: 'been (Satzende)', hi: 'रहा था (Satzende)', type: 'Verb · sein (Konjunktiv I Perfekt, Satzende)' },
      { w: ',', plain: true },
      { w: 'aber', role: 'plain', en: 'but', hi: 'लेकिन', type: 'Conjunction' },
      { w: 'fair', role: 'plain', en: 'fair (Satzende)', hi: 'निष्पक्ष (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Trainer', role: 'plain', en: 'coach', hi: 'कोच', type: 'Noun · masc.' },
      { w: 'fügte', role: 'plain', en: 'added', hi: 'जोड़ा', type: 'Verb · hinzufügen (Präteritum)' },
      { w: 'hinzu', role: 'plain', en: '(Satzende, Präfix)', hi: '', type: 'Separable prefix · hinzufügen' },
      { w: ',', plain: true },
      { w: 'man', role: 'plain', en: 'one', hi: 'कोई', type: 'Pronoun · impersonal' },
      { w: 'müsse', role: 'r-konji', en: 'had to (Konjunktiv I)', hi: '(Konjunktiv I)', type: 'Verb · müssen (Konjunktiv I)', why: 'müsse = Konjunktiv I of müssen: indirect speech keeps this even for a modal verb (this chapter).' },
      { w: 'nun', role: 'plain', en: 'now', hi: 'अब', type: 'Adverb' },
      { w: 'nach', role: 'plain', en: 'towards', hi: 'की ओर', type: 'Preposition · Dat.' },
      { w: 'vorne', role: 'plain', en: 'forward (Satzende)', hi: 'आगे (Satzende)', type: 'Adverb' },
      { w: 'schauen', role: 'plain', en: 'look (Satzende)', hi: 'देखना (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'Sportjournalist', role: 'plain', en: 'sports journalist', hi: 'खेल पत्रकार', type: 'Noun · masc.' },
      { w: 'fügte', role: 'plain', en: 'added', hi: 'जोड़ा', type: 'Verb · hinzufügen (Präteritum)' },
      { w: 'hinzu', role: 'plain', en: '(Satzende, Präfix)', hi: '', type: 'Separable prefix · hinzufügen' },
      { w: ',', plain: true },
      { w: 'dieser', role: 'plain', en: 'this', hi: 'यह', type: 'Determiner' },
      { w: 'Wettkampf', role: 'plain', en: 'competition', hi: 'प्रतियोगिता', type: 'Noun · masc.' },
      { w: 'werde', role: 'r-konji', en: 'would (Konjunktiv I of werden)', hi: '(Konjunktiv I)', type: 'Verb · werden (Konjunktiv I)' },
      { w: 'wohl', role: 'plain', en: 'probably', hi: 'शायद', type: 'Adverb' },
      { w: 'als', role: 'plain', en: 'as', hi: 'के रूप में', type: 'Preposition' },
      { w: 'einer', role: 'plain', en: 'one (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'der', role: 'plain', en: 'of the', hi: 'की', type: 'Article · Genitiv' },
      { w: 'besten', role: 'plain', en: 'best', hi: 'सर्वश्रेष्ठ', type: 'Adjective · Superlativ' },
      { w: 'Saisons', role: 'plain', en: 'seasons (Satzende)', hi: 'सीज़नों (Satzende)', type: 'Noun · plural' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Geschichte', role: 'plain', en: 'history (Satzende)', hi: 'इतिहास (Satzende)', type: 'Noun · fem.' },
      { w: 'eingehen', role: 'plain', en: 'enter (Satzende)', hi: 'दर्ज होगी (Satzende)', type: 'Verb · eingehen (Infinitiv, Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The tennis pro explained after the race that the result exceeded all his expectations. He said he would train even harder in the future. His rival replied that the result had admittedly been close, but fair. The coach added that one now had to look forward. A sports journalist added that this competition would probably go down as one of the best seasons in history.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_060_L001', speaker: 'Petra', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, mein Bruder hat erzählt, der Tennisprofi habe gestern das Finale gewonnen.', en: 'Timo, my brother said the tennis pro won the final yesterday.' },
      { id: 'B2_060_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wirklich? Hast du das selbst gesehen?', en: 'Really? Did you see it yourself?' },
      { id: 'B2_060_L003', speaker: 'Petra', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nein, ich gebe nur weiter, was er gesagt hat — er sei völlig überraschend gewonnen.', en: 'No, I\'m just passing on what he said — he apparently won completely unexpectedly.' },
      { id: 'B2_060_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Interessant, dann schauen wir uns die Highlights später zusammen an.', en: 'Interesting, then let\'s watch the highlights together later.' }
    ],
    transcript: 'Timo, mein Bruder hat erzählt, der Tennisprofi habe gestern das Finale gewonnen. Wirklich? Hast du das selbst gesehen? Nein, ich gebe nur weiter, was er gesagt hat — er sei völlig überraschend gewonnen. Interessant, dann schauen wir uns die Highlights später zusammen an.',
    translation: 'Timo, my brother said the tennis pro won the final yesterday. Really? Did you see it yourself? No, I\'m just passing on what he said — he apparently won completely unexpectedly. Interesting, then let\'s watch the highlights together later.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'mein' },
      { w: 'Bruder' },
      { w: 'hat' },
      { w: 'erzählt' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'Tennisprofi' },
      { w: 'habe' },
      { w: 'gestern' },
      { w: 'das' },
      { w: 'Finale' },
      { w: 'gewonnen' },
      { w: '.', plain: true },
      { w: 'Wirklich' },
      { w: '?', plain: true },
      { w: 'Hast' },
      { w: 'du' },
      { w: 'das' },
      { w: 'selbst' },
      { w: 'gesehen' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'gebe' },
      { w: 'nur' },
      { w: 'weiter' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'er' },
      { w: 'gesagt' },
      { w: 'hat' },
      { w: '—', plain: true },
      { w: 'er' },
      { w: 'sei' },
      { w: 'völlig' },
      { w: 'überraschend' },
      { w: 'gewonnen' },
      { w: '.', plain: true },
      { w: 'Interessant' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'schauen' },
      { w: 'wir' },
      { w: 'uns' },
      { w: 'die' },
      { w: 'Highlights' },
      { w: 'später' },
      { w: 'zusammen' },
      { w: 'an' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was ist laut Petras Bruder passiert?', qEn: 'What did Petra\'s brother say happened?', options: ['der Tennisprofi habe verloren', 'der Tennisprofi habe das Finale gewonnen', 'das Spiel wurde abgesagt', 'niemand hat gespielt'], optionsEn: ['that the tennis pro lost', 'that the tennis pro won the final', 'the match was cancelled', 'nobody played'], answer: 1,
        explain: '"Der Tennisprofi habe gestern das Finale gewonnen."' },
      { q: 'Hat Petra das Spiel selbst gesehen?', qEn: 'Did Petra see the match herself?', options: ['ja', 'nein', 'teilweise', 'unklar'], optionsEn: ['yes', 'no', 'partly', 'unclear'], answer: 1,
        explain: '"Nein, ich gebe nur weiter, was er gesagt hat."' }
    ]
  },

  speaking: [
    { task: "Gib weiter, was dein Bruder über das Finale erzählt hat.", taskEn: "Pass on what your brother said about the final.", de: "Er hat erzählt, der Tennisprofi habe gestern das Finale gewonnen.", en: "He said the tennis pro had won the final yesterday." },
    { task: "Dein Freund fragt, ob du es selbst gesehen hast.", taskEn: "Your friend asks whether you saw it yourself.", de: "Nein, ich gebe nur weiter, was er gesagt hat.", en: "No, I'm only passing on what he said." },
    { task: "Berichte deiner Chefin, was der Kunde am Telefon sagte.", taskEn: "Report to your boss what the customer said on the phone.", de: "Der Kunde sagte, er sei mit dem Resultat nicht zufrieden.", en: "The customer said he wasn't satisfied with the result." },
    { task: "Fass ein Interview für die Lerngruppe zusammen.", taskEn: "Summarise an interview for your study group.", de: "Sie erklärte, sie habe Prüfungsangst gehabt und sei jetzt ruhiger.", en: "She explained she'd had exam nerves and was calmer now." },
    { task: "Deine Kollegin hat den Kunden nicht gehört. Gib seine Zusage weiter.", taskEn: "Your colleague didn't hear the customer. Pass on what he promised.", de: "Er sagte, er komme morgen und bringe die Unterlagen mit.", en: "He said he was coming tomorrow and bringing the documents." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Transform (8-10 sentences): Take direct quotations and transform them into indirect speech, focusing on correct pronoun changes and Konjunktiv I forms.\n\nTASK 2 — News report (8-10 sentences): Write a short news report using at least 10 examples of Indirekte Rede with varied reporting verbs (sagen, berichten, erklären, behaupten, mitteilen).',
    starters: ['Der Sprecher sagt, ...', 'Die Firma erklärt, ...'],
    placeholder: 'Der Minister sagt, die Lage sei stabil. Die Firma berichtet, der Vertrag werde unterschrieben.',
    minWords: 80
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence correctly transforms "Ich bin krank" (Anna) into indirect speech?',
      options: ['Anna sagt, sie sei krank.', 'Anna sagt, ich sei krank.', 'Anna sagt: sie sei krank.'],
      answer: 0,
      explain: 'The pronoun must change to "sie" (referring to Anna) and use Konjunktiv I "sei", with no colon/quotation marks.'
    },
    gap: {
      sentence: ['Er sagt, er ', ' keine Zeit.'],
      gaps: [ { answer: 'habe', accepts: ['habe'] } ],
      explain: '"habe" is the Konjunktiv I form of "haben" for 3rd person singular, replacing the Indicative "hat".'
    },
    match: {
      q: 'Match each reporting verb to its typical use.',
      pairs: [
        { noun: 'sagen', art: 'Neutral, everyday reporting' },
        { noun: 'berichten', art: 'Journalistic/factual reporting' },
        { noun: 'behaupten', art: 'Reporting an unverified claim' },
        { noun: 'erklären', art: 'Reporting an official explanation' }
      ]
    },
    builder: {
      target: 'Build: "He reports the project is running according to plan." (Konjunktiv I)',
      bank: ['Er', 'berichtet', ',', 'das', 'Projekt', 'laufe', 'planmäßig', '.'],
      answer: ['Er', 'berichtet', ',', 'das', 'Projekt', 'laufe', 'planmäßig', '.'],
      roles: { 'berichtet': 'r-reportverb', 'laufe': 'r-konji' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Er sagt, dass er sei krank.',
      right: 'Er sagt, er sei krank.',
      explain: 'Konjunktiv I clauses normally drop "dass" and keep the normal (V2) word order.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does Indirekte Rede report?', options: ['Another person\'s words, without claiming they are true', 'Only facts the speaker knows are correct', 'Only the speaker\'s own opinion'], answer: 0,
      explain: 'Indirect speech reports what was said, remaining neutral about its truth.' },
    { q: 'Which mood is used in German indirect speech?', options: ['Konjunktiv I', 'Konjunktiv II', 'Indicative'], answer: 0,
      explain: 'Konjunktiv I is the standard mood for objective reported speech.' },
    { q: 'Should you use "dass" before a Konjunktiv I clause?', options: ['No — normally omit it', 'Yes, always', 'Only in formal writing'], answer: 0,
      explain: '"Er sagt, er sei krank" — not "Er sagt, dass er sei krank".' },
    { q: 'What must you check when converting direct to indirect speech?', options: ['The pronoun matching the reported speaker', 'The color of the ink', 'The speaker\'s name only'], answer: 0,
      explain: 'Pronouns must shift to reflect who is being reported, not stay as the original speaker\'s "ich".' },
    { q: 'Why do newspapers frequently use Indirekte Rede?', options: ['To report statements without confirming their truth', 'To make the text longer', 'Because it is grammatically required in all writing'], answer: 0,
      explain: 'Journalists use Konjunktiv I to stay neutral while reporting what sources said.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-konji', html: '"Ich bin müde." → Sie sagt, sie sei müde. Indirekte Rede reports another person\'s words using Konjunktiv I, without claiming they are true.' },
    { c: 'r-reportverb', html: 'Reporting verbs (sagen, berichten, erklären, behaupten, mitteilen, betonen) introduce indirect speech.' },
    { c: 'r-konji', html: 'Change the pronoun, use Konjunktiv I, and drop "dass" — "Er sagt, er sei krank", never "Er sagt, dass er sei krank".' }
  ],
  revisionTips: [
    'Take five direct quotations and transform each into indirect speech, checking the pronoun and Konjunktiv I form.',
    'Scan a German newspaper article for reporting verbs (sagen, berichten, erklären...) and the Konjunktiv I forms that follow them.',
    'Practise reading a short news item aloud, converting each direct quote into indirect speech on the fly.'
  ]
};

window.CHAPTER = CHAPTER;
