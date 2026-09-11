/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 3 · Chapter 35
   "Temporalsätze: bevor / nachdem" — bevor (main clause first, then
   the bevor-clause action) vs nachdem (nachdem-clause action completed first,
   then the main clause).
   nachdem typically pairs earlier action in Plusquamperfekt with
   later action in Präteritum/Perfekt. Does NOT teach sobald, bis,
   or ehe.
   IMPORTANT: dialogue uses ONLY Anke and Timo.
   Vocabulary source: uploaded chapter-35 list (52 items).
============================================================ */
const CHAPTER = {
  id: 'b2-35-temporalsaetze-bevor-nachdem',
  phase: 'B2 · Phase 3',
  number: 35,
  title: 'Temporalsätze: bevor / nachdem',
  titleEn: 'Time clauses: before / after',
  description: 'bevor puts the later action first in the sentence; nachdem puts the earlier, completed action first. Getting the order right matters.',
  xp: 490,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 36, title: 'Goethe Halbzeit-Test (Checkpoint)', titleEn: 'Goethe mid-course test (checkpoint)' , href: 'chapter-b2-36-goethe-halbzeit-test.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Which happened <em>first?</em>',
    intro: 'Before a poetry reading, Anke wants to practise once more, and Timo suggests a walk before the audience arrives and a drink after she\'s read — every plan ordered precisely with bevor (the later action first) and nachdem (the completed one first).',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear bevor and nachdem establish the correct sequence of events, including the Plusquamperfekt pairing'
    ],
    scene: 'Ein typischer Arbeitstag',
    femaleSpeakers: ['Anke'],
    dialogue: [
      { speaker: 'Anke', tokens: [
        { w: 'Bevor', role: 'r-conjunction', en: 'before', hi: 'से पहले', pron: 'be-FOR', type: 'Conjunction · bevor' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Gedicht', role: 'r-akkusativ', en: 'poem', hi: 'कविता', pron: 'ge-DIKHT', type: 'Noun · neut.' },
        { w: 'vorlese', role: 'r-verb', en: 'read out', hi: 'पढ़ूँ', pron: 'FOR-lay-zuh', type: 'Verb · vorlesen (ich, Satzende)' },
        { w: ',', plain: true },
        { w: 'möchte', role: 'r-modalverb', en: 'would like', hi: 'चाहती हूँ', pron: 'MÖKH-tuh', type: 'Modal · möchten (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी और', pron: 'nokh', type: 'Adverb' },
        { w: 'einmal', role: 'r-adverb', en: 'once', hi: 'एक बार', pron: 'INE-mahl', type: 'Adverb' },
        { w: 'üben', role: 'r-verb', en: 'practise', hi: 'अभ्यास करना', pron: 'Ü-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Before I read out the poem, I would like to practise once more.', hi: 'Kavita padhne se pehle, main ek baar aur abhyaas karna chahti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Nachdem', role: 'r-conjunction', en: 'after', hi: 'के बाद', pron: 'NAHKH-daym', type: 'Conjunction · nachdem' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'geübt', role: 'r-verb', en: 'practised', hi: 'अभ्यास किया', pron: 'ge-ÜPT', type: 'Partizip II' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'है', pron: 'hast', type: 'Verb · haben (Satzende)' },
        { w: ',', plain: true },
        { w: 'wirst', role: 'r-verb', en: 'will you', hi: 'होगी', pron: 'VIRST', type: 'Verb · werden (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'sicherer', role: 'r-akkusativ', en: 'more confident', hi: 'ज़्यादा आत्मविश्वासी', pron: 'ZI-khe-rer', type: 'Adjective · Komparativ' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होगी', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'After you have practised, you will be more confident.', hi: 'Abhyaas karne ke baad, tum zyada aatmvishwaasi hogi.' },
      { speaker: 'Anke', tokens: [
        { w: 'Hoffentlich', role: 'r-adverb', en: 'hopefully', hi: 'आशा है', pron: 'HO-fent-likh', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Bevor', role: 'r-conjunction', en: 'before', hi: 'से पहले', pron: 'be-FOR', type: 'Conjunction · bevor' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'वह', pron: 'das', type: 'Article · neut.' },
        { w: 'Publikum', role: 'r-subject', en: 'audience', hi: 'दर्शक', pron: 'pu-bli-KUM', type: 'Noun · neut.' },
        { w: 'kommt', role: 'r-verb', en: 'comes', hi: 'आता है', pron: 'komt', type: 'Verb · kommen (Satzende)' },
        { w: ',', plain: true },
        { w: 'werde', role: 'r-verb', en: 'will', hi: 'जाऊंगी', pron: 'VAIR-duh', type: 'Verb · werden' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'spazieren', role: 'r-verb', en: 'walk', hi: 'टहलने', pron: 'shpa-TSEE-ren', type: 'Verb · infinitive' },
        { w: 'gehen', role: 'r-verb', en: 'go', hi: 'जाना', pron: 'GAY-en', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Before the audience comes, I will go for a walk.', hi: 'Darshak aane se pehle, main taahalne jaungi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Idee', role: 'r-subject', en: 'idea', hi: 'विचार', pron: 'i-DAY', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Nachdem', role: 'r-conjunction', en: 'after', hi: 'के बाद', pron: 'NAHKH-daym', type: 'Conjunction · nachdem' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'vorgelesen', role: 'r-verb', en: 'read out', hi: 'पढ़ लिया', pron: 'FOR-ge-lay-zen', type: 'Partizip II' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'है', pron: 'hast', type: 'Verb · haben (Satzende)' },
        { w: ',', plain: true },
        { w: 'gehen', role: 'r-verb', en: 'let us go', hi: 'जाते हैं', pron: 'GAY-en', type: 'Verb · gehen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'etwas', role: 'r-akkusativ', en: 'something', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · indefinite' },
        { w: 'trinken', role: 'r-verb', en: 'drink', hi: 'पीने', pron: 'TRIN-ken', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Good idea. After you have read out, let us go drink something.', hi: 'Achha vichaar. Padhne ke baad, hum kuch peene jaate hain.' },
      { speaker: 'Anke', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'perfekt', role: 'r-akkusativ', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Adjective' },
        { w: '!', plain: true }
      ], en: 'That sounds perfect!', hi: 'Yeh badhiya lagta hai!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Both connectors describe the ORDER of events. <span class="de r-temporal2">bevor</span> names the LATER action (the main clause happens first). <span class="de r-temporal2">nachdem</span> names the EARLIER, completed action (often in Plusquamperfekt), and the main clause happens after it.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is TEMPORALSÄTZE: BEVOR / NACHDEM (B2 level): bevor names the action that happens LATER ("Ich frühstücke, bevor ich zur Arbeit gehe" — breakfast happens first, then going to work is named by "bevor"). nachdem names the action that happened EARLIER and is completed, typically in Plusquamperfekt, with the main clause (Präteritum/Perfekt) describing what happened next ("Nachdem ich die E-Mail gelesen hatte, antwortete ich sofort"). In spoken German, Perfekt is also common for the later action. ' +
    'Do NOT expect or require sobald, bis, or ehe — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that both "bevor" and "nachdem" send the verb to the end of their clause.\n' +
    '- Check that "nachdem" typically pairs an earlier action in Plusquamperfekt (hatte/war + Partizip II) with a later action in Präteritum or Perfekt — not two actions in the same tense.\n' +
    '- Check that movement/change-of-state verbs use "war/waren" (not "hatte/hatten") for the Plusquamperfekt after "nachdem".\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Sequence check:</b> one sentence on whether the learner correctly ordered which action happened first using bevor vs nachdem.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you clearly order events using bevor and nachdem, with correct tense pairing. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the tense-usage table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: bevor names the LATER action; nachdem names the EARLIER, completed action (usually Plusquamperfekt).'
  },

  parserSentence: [
    { w: 'Ich', role: 'plain' }, { w: 'frühstücke', role: 'plain' }, { w: ',', plain: true },
    { w: 'bevor', role: 'r-temporal2' }, { w: 'ich', role: 'plain' }, { w: 'gehe', role: 'r-temporal2' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: bevor names the later action, nachdem names the earlier completed action.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Anke and Timo walk through their workday and a trip, ordering events with bevor and nachdem.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 52 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master bevor and nachdem, tense pairing, and the full six-connector temporal comparison.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read about a typical workday and a travel experience full of bevor/nachdem sequencing.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify which action happened first, tense usage, and the timeline of events.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Tell stories and explain processes using bevor and nachdem naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write experience reports and project summaries using bevor and nachdem appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill bevor-or-nachdem decisions, event ordering, and correct tense selection.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 490 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 52 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'bevor-or-nachdem drills, event-ordering exercises, and an experience-report writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete six-connector temporal comparison, timeline diagrams, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich frühstücke, bevor ich zur Arbeit gehe.', text: 'Name the later action with bevor' },
    { de: 'Nachdem ich die E-Mail gelesen hatte, antwortete ich.', text: 'Name the earlier, completed action with nachdem' },
    { de: 'Plusquamperfekt (nachdem) + Präteritum/Perfekt (main clause)', text: 'Pair tenses correctly around nachdem' },
    { de: 'als, wenn, während, seitdem, bevor, nachdem', text: 'Distinguish all six temporal connectors' },
    { de: 'Which action happened first?', text: 'Always ask this before choosing bevor or nachdem' }
  ],

  // ---------- Vocabulary (52 items — uploaded chapter-35 list) ----------
  vocab: [
    { de: 'Dichter/in', art: 'der/die', gender: 'm/f', plural: 'Dichter/innen', pos: 'noun', level: 'B2', register: 'written', en: 'poet', hi: 'कवि', ex: 'Der Dichter schrieb über die Natur.', exEn: 'The poet wrote about nature.', exHi: 'Kavi ne prakriti ke baare mein likha.', ex2: 'Sie ist eine bekannte Dichterin.', ex2En: 'She\'s a well-known poet.', ex2Hi: 'Woh ek jaani-maani kavi hai.' },
    { de: 'drauflos', pos: 'adverb', level: 'B2', register: 'spoken', en: 'straight ahead, without thinking', hi: 'बिना सोचे-समझे', ex: 'Er redete einfach drauflos.', exEn: 'He just talked away without thinking.', exHi: 'Woh bina soche-samjhe bolta gaya.', ex2: 'Sie sind drauflosgefahren.', ex2En: 'They\'ve just driven off without a plan.', ex2Hi: 'Woh bina yojana ke chal pade hain.' },
    { de: 'Eigeninitiative', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'personal initiative', hi: 'व्यक्तिगत पहल', ex: 'Sie zeigte viel Eigeninitiative.', exEn: 'She showed a lot of personal initiative.', exHi: 'Usne bahut vyaktigat pehal dikhaayi.', ex2: 'Er hat aus Eigeninitiative gehandelt.', ex2En: 'He\'s acted on his own initiative.', ex2Hi: 'Usne apni pehal se kaam kiya hai.' },
    { de: 'Einnahme', art: 'die', gender: 'f', plural: 'Einnahmen', pos: 'noun', level: 'B2', register: 'both', en: 'income, intake, taking (medicine)', hi: 'आय, सेवन', ex: 'Die Einnahme des Medikaments half schnell.', exEn: 'Taking the medication helped quickly.', exHi: 'Davaai ke sevan se jaldi madad mili.', ex2: 'Sie haben ihre Einnahmen erhöht.', ex2En: 'They\'ve increased their income.', ex2Hi: 'Unhone apni aay badhaayi hai.' },
    { de: 'Essayist/in', art: 'der/die', gender: 'm/f', plural: 'Essayisten/innen', pos: 'noun', level: 'B2', register: 'written', en: 'essayist', hi: 'निबंधकार', ex: 'Der Essayist schrieb kritische Texte.', exEn: 'The essayist wrote critical texts.', exHi: 'Nibandhkaar ne aalochanaatmak lekh likhe.', ex2: 'Sie ist eine bekannte Essayistin.', ex2En: 'She\'s a well-known essayist.', ex2Hi: 'Woh ek jaani-maani nibandhkaar hai.' },
    { de: 'Feuilleton', art: 'der', gender: 'm', plural: 'Feuilletons', pos: 'noun', level: 'B2', register: 'written', en: 'feature section, arts pages', hi: 'सांस्कृतिक पृष्ठ', ex: 'Der Artikel erschien im Feuilleton.', exEn: 'The article appeared in the arts pages.', exHi: 'Lekh saanskritik pristh mein chapaa.', ex2: 'Sie schreiben für das Feuilleton.', ex2En: 'They write for the arts pages.', ex2Hi: 'Woh saanskritik pristh ke liye likhte hain.' },
    { de: 'Friedhof', art: 'der', gender: 'm', plural: 'Friedhöfe', pos: 'noun', level: 'B2', register: 'both', en: 'cemetery', hi: 'कब्रिस्तान', ex: 'Sie besuchten den Friedhof.', exEn: 'They visited the cemetery.', exHi: 'Unhone kabristaan ka daura kiya.', ex2: 'Der Friedhof war sehr ruhig.', ex2En: 'The cemetery was very quiet.', ex2Hi: 'Kabristaan bahut shaant tha.' },
    { de: 'Gedächtnisinhalt', art: 'der', gender: 'm', plural: 'Gedächtnisinhalte', pos: 'noun', level: 'B2', register: 'written', en: 'memory content', hi: 'स्मृति सामग्री', ex: 'Der Gedächtnisinhalt blieb erhalten.', exEn: 'The memory content remained intact.', exHi: 'Smriti saamagri surakshit rahi.', ex2: 'Sie haben den Gedächtnisinhalt untersucht.', ex2En: 'They\'ve examined the memory content.', ex2Hi: 'Unhone smriti saamagri ki jaanch ki hai.' },
    { de: 'Gedankenschritt', art: 'der', gender: 'm', plural: 'Gedankenschritte', pos: 'noun', level: 'B2', register: 'written', en: 'step in reasoning', hi: 'तर्क का कदम', ex: 'Jeder Gedankenschritt war logisch.', exEn: 'Every step in the reasoning was logical.', exHi: 'Tark ka har kadam taarkik tha.', ex2: 'Sie haben den Gedankenschritt erklärt.', ex2En: 'They\'ve explained the step in reasoning.', ex2Hi: 'Unhone tark ka kadam samjhaaya hai.' },
    { de: 'Gelenkschmerzen', art: 'die', gender: 'plural', plural: '— (Pl.)', pos: 'noun', level: 'B2', register: 'both', en: 'joint pain', hi: 'जोड़ों का दर्द', ex: 'Sie litt unter Gelenkschmerzen.', exEn: 'She suffered from joint pain.', exHi: 'Use jodon ka dard tha.', ex2: 'Er hat Medikamente gegen Gelenkschmerzen genommen.', ex2En: 'He\'s taken medication for joint pain.', ex2Hi: 'Usne jodon ke dard ke liye davaayein li hain.' },
    { de: 'Gesetzesreform', art: 'die', gender: 'f', plural: 'Gesetzesreformen', pos: 'noun', level: 'B2', register: 'written', en: 'legal reform', hi: 'कानूनी सुधार', ex: 'Die Gesetzesreform betraf viele Bürger.', exEn: 'The legal reform affected many citizens.', exHi: 'Kaanooni sudhaar ne kai naagrikon ko prabhaavit kiya.', ex2: 'Sie haben die Gesetzesreform diskutiert.', ex2En: 'They\'ve discussed the legal reform.', ex2Hi: 'Unhone kaanooni sudhaar par charcha ki hai.' },
    { de: 'Handelsschule', art: 'die', gender: 'f', plural: 'Handelsschulen', pos: 'noun', level: 'B2', register: 'written', en: 'commercial school', hi: 'व्यापार विद्यालय', ex: 'Sie besuchte eine Handelsschule.', exEn: 'She attended a commercial school.', exHi: 'Woh ek vyaapaar vidyaalay gayi.', ex2: 'Er hat an der Handelsschule unterrichtet.', ex2En: 'He\'s taught at the commercial school.', ex2Hi: 'Usne vyaapaar vidyaalay mein padhaaya hai.' },
    { de: 'Käfig', art: 'der', gender: 'm', plural: 'Käfige', pos: 'noun', level: 'B2', register: 'both', en: 'cage', hi: 'पिंजरा', ex: 'Der Vogel saß im Käfig.', exEn: 'The bird sat in the cage.', exHi: 'Chidiya pinjre mein baithi thi.', ex2: 'Sie haben den Käfig gereinigt.', ex2En: 'They\'ve cleaned the cage.', ex2Hi: 'Unhone pinjra saaf kiya hai.' },
    { de: 'Knospe', art: 'die', gender: 'f', plural: 'Knospen', pos: 'noun', level: 'B2', register: 'both', en: 'bud', hi: 'कली', ex: 'Die Knospe öffnete sich langsam.', exEn: 'The bud opened slowly.', exHi: 'Kali dheere-dheere khuli.', ex2: 'Sie haben die Knospen bewundert.', ex2En: 'They\'ve admired the buds.', ex2Hi: 'Unhone kaliyon ki sarahna ki hai.' },
    { de: 'Kunstform', art: 'die', gender: 'f', plural: 'Kunstformen', pos: 'noun', level: 'B2', register: 'written', en: 'art form', hi: 'कला रूप', ex: 'Diese Kunstform war einzigartig.', exEn: 'This art form was unique.', exHi: 'Yeh kala roop anokha tha.', ex2: 'Sie haben eine neue Kunstform entwickelt.', ex2En: 'They\'ve developed a new art form.', ex2Hi: 'Unhone ek naya kala roop vikasit kiya hai.' },
    { de: 'Lyrik', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'poetry, lyric verse', hi: 'काव्य', ex: 'Sie liebte deutsche Lyrik.', exEn: 'She loved German poetry.', exHi: 'Use German kaavya bahut pasand tha.', ex2: 'Er hat Lyrik studiert.', ex2En: 'He\'s studied poetry.', ex2Hi: 'Usne kaavya ka adhyayan kiya hai.' },
    { de: 'Musiktherapeut/in', art: 'der/die', gender: 'm/f', plural: 'Musiktherapeuten/innen', pos: 'noun', level: 'B2', register: 'written', en: 'music therapist', hi: 'संगीत चिकित्सक', ex: 'Der Musiktherapeut half den Patienten.', exEn: 'The music therapist helped the patients.', exHi: 'Sangeet chikitsak ne mareezon ki madad ki.', ex2: 'Sie arbeitet als Musiktherapeutin.', ex2En: 'She works as a music therapist.', ex2Hi: 'Woh sangeet chikitsak ke roop mein kaam karti hai.' },
    { de: 'mythologisch', pos: 'adjective', level: 'B2', register: 'written', en: 'mythological', hi: 'पौराणिक', ex: 'Die Geschichte hatte mythologische Elemente.', exEn: 'The story had mythological elements.', exHi: 'Kahaani mein pauraanik tatva the.', ex2: 'Sie haben mythologische Figuren untersucht.', ex2En: 'They\'ve studied mythological figures.', ex2Hi: 'Unhone pauraanik paatron ka adhyayan kiya hai.' },
    { de: 'Philosoph/in', art: 'der/die', gender: 'm/f', plural: 'Philosophen/innen', pos: 'noun', level: 'B2', register: 'written', en: 'philosopher', hi: 'दार्शनिक', ex: 'Der Philosoph schrieb über Ethik.', exEn: 'The philosopher wrote about ethics.', exHi: 'Daarshanik ne naitikta ke baare mein likha.', ex2: 'Sie ist eine berühmte Philosophin.', ex2En: 'She\'s a famous philosopher.', ex2Hi: 'Woh ek prasiddh daarshanik hai.' },
    { de: 'rettungslos', pos: 'adjective', level: 'B2', register: 'written', en: 'hopelessly, beyond saving', hi: 'निराशाजनक रूप से', ex: 'Die Lage war rettungslos.', exEn: 'The situation was beyond saving.', exHi: 'Sthiti niraashaajanak thi.', ex2: 'Sie fühlten sich rettungslos verloren.', ex2En: 'They\'ve felt hopelessly lost.', ex2Hi: 'Unhein khud hopeless mahsoos hua hai.' },
    { de: 'Romantik', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'Romanticism, romance', hi: 'रूमानियत', ex: 'Die Romantik prägte die Literatur.', exEn: 'Romanticism shaped literature.', exHi: 'Roomaaniyat ne saahitya ko roop diya.', ex2: 'Sie haben über die Romantik diskutiert.', ex2En: 'They\'ve discussed Romanticism.', ex2Hi: 'Unhone roomaaniyat par charcha ki hai.' },
    { de: 'Romantiker/in', art: 'der/die', gender: 'm/f', plural: 'Romantiker/innen', pos: 'noun', level: 'B2', register: 'written', en: 'romantic, Romanticist', hi: 'रूमानी व्यक्ति', ex: 'Er war ein echter Romantiker.', exEn: 'He was a true romantic.', exHi: 'Woh ek asli roomaani vyakti tha.', ex2: 'Sie haben die Romantiker studiert.', ex2En: 'They\'ve studied the Romanticists.', ex2Hi: 'Unhone roomaani lekhakon ka adhyayan kiya hai.' },
    { de: 'Salat', art: 'der', gender: 'm', plural: 'Salate', pos: 'noun', level: 'B2', register: 'both', en: 'salad', hi: 'सलाद', ex: 'Sie aßen einen frischen Salat.', exEn: 'They ate a fresh salad.', exHi: 'Unhone taaza salad khaayi.', ex2: 'Er hat den Salat zubereitet.', ex2En: 'He\'s prepared the salad.', ex2Hi: 'Usne salad taiyaar ki hai.' },
    { de: 'Satiriker/in', art: 'der/die', gender: 'm/f', plural: 'Satiriker/innen', pos: 'noun', level: 'B2', register: 'written', en: 'satirist', hi: 'व्यंग्यकार', ex: 'Der Satiriker kritisierte die Politik.', exEn: 'The satirist criticised politics.', exHi: 'Vyangyakaar ne rajneeti ki aalochana ki.', ex2: 'Sie ist eine bekannte Satirikerin.', ex2En: 'She\'s a well-known satirist.', ex2Hi: 'Woh ek jaani-maani vyangyakaar hai.' },
    { de: 'satirisch', pos: 'adjective', level: 'B2', register: 'written', en: 'satirical', hi: 'व्यंग्यात्मक', ex: 'Der Text war satirisch geschrieben.', exEn: 'The text was written satirically.', exHi: 'Lekh vyangyaatmak roop se likha gaya tha.', ex2: 'Sie haben einen satirischen Film gesehen.', ex2En: 'They\'ve watched a satirical film.', ex2Hi: 'Unhone ek vyangyaatmak film dekhi hai.' },
    { de: 'Sauerstoffverbrauch', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'oxygen consumption', hi: 'ऑक्सीजन खपत', ex: 'Der Sauerstoffverbrauch stieg beim Sport.', exEn: 'Oxygen consumption rose during sport.', exHi: 'Vyaayaam ke dauraan oxygen ki khapat badhi.', ex2: 'Sie haben den Sauerstoffverbrauch gemessen.', ex2En: 'They\'ve measured the oxygen consumption.', ex2Hi: 'Unhone oxygen ki khapat maapi hai.' },
    { de: 'Schaffensperiode', art: 'die', gender: 'f', plural: 'Schaffensperioden', pos: 'noun', level: 'B2', register: 'written', en: 'creative period', hi: 'सृजनात्मक काल', ex: 'Seine Schaffensperiode dauerte zehn Jahre.', exEn: 'His creative period lasted ten years.', exHi: 'Uska srijanaatmak kaal das saal chala.', ex2: 'Sie haben die Schaffensperiode analysiert.', ex2En: 'They\'ve analysed the creative period.', ex2Hi: 'Unhone srijanaatmak kaal ka vishleshan kiya hai.' },
    { de: 'schlummerlos', pos: 'adjective', level: 'B2', register: 'written', en: 'sleepless', hi: 'नींद रहित', ex: 'Sie verbrachte schlummerlose Nächte.', exEn: 'She spent sleepless nights.', exHi: 'Usne neend rahit raatein bitaayi.', ex2: 'Er hat schlummerlos gearbeitet.', ex2En: 'He\'s worked without sleep.', ex2Hi: 'Usne bina neend ke kaam kiya hai.' },
    { de: 'Schmerzempfinden', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'perception of pain', hi: 'दर्द की अनुभूति', ex: 'Das Schmerzempfinden variierte stark.', exEn: 'The perception of pain varied greatly.', exHi: 'Dard ki anubhooti bahut alag thi.', ex2: 'Sie haben das Schmerzempfinden untersucht.', ex2En: 'They\'ve studied the perception of pain.', ex2Hi: 'Unhone dard ki anubhooti ka adhyayan kiya hai.' },
    { de: 'schrecklich', pos: 'adjective', level: 'B2', register: 'both', en: 'terrible, awful', hi: 'भयानक', ex: 'Das Wetter war schrecklich.', exEn: 'The weather was terrible.', exHi: 'Mausam bhayaanak tha.', ex2: 'Sie haben schreckliche Neuigkeiten gehört.', ex2En: 'They\'ve heard terrible news.', ex2Hi: 'Unhone bhayaanak khabar suni hai.' },
    { de: 'Schriftsteller/in', art: 'der/die', gender: 'm/f', plural: 'Schriftsteller/innen', pos: 'noun', level: 'B2', register: 'written', en: 'writer', hi: 'लेखक', ex: 'Der Schriftsteller veröffentlichte einen neuen Roman.', exEn: 'The writer published a new novel.', exHi: 'Lekhak ne ek naya upanyaas prakaashit kiya.', ex2: 'Sie ist eine erfolgreiche Schriftstellerin.', ex2En: 'She\'s a successful writer.', ex2Hi: 'Woh ek safal lekhika hai.' },
    { de: 'Selbstbewusstsein', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'self-confidence', hi: 'आत्मविश्वास', ex: 'Ihr Selbstbewusstsein wuchs mit der Zeit.', exEn: 'Her self-confidence grew over time.', exHi: 'Uska aatmvishwaas samay ke saath badha.', ex2: 'Sie haben sein Selbstbewusstsein gestärkt.', ex2En: 'They\'ve strengthened his self-confidence.', ex2Hi: 'Unhone uska aatmvishwaas mazboot kiya hai.' },
    { de: 'Spott', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'mockery, ridicule', hi: 'उपहास', ex: 'Sie ertrug den Spott gelassen.', exEn: 'She bore the mockery calmly.', exHi: 'Usne upahaas ko shaanti se sahaa.', ex2: 'Er hat mit Spott reagiert.', ex2En: 'He\'s reacted with ridicule.', ex2Hi: 'Usne upahaas se pratikriya di hai.' },
    { de: 'Spruch', art: 'der', gender: 'm', plural: 'Sprüche', pos: 'noun', level: 'B2', register: 'both', en: 'saying, slogan', hi: 'कहावत', ex: 'Der Spruch stand an der Wand.', exEn: 'The saying was on the wall.', exHi: 'Kahaavat deewaar par likhi thi.', ex2: 'Sie haben einen klugen Spruch zitiert.', ex2En: 'They\'ve quoted a wise saying.', ex2Hi: 'Unhone ek buddhimaan kahaavat udhrit ki hai.' },
    { de: 'stetig', pos: 'adjective', level: 'B2', register: 'both', en: 'steady, constant', hi: 'लगातार', ex: 'Das Wachstum war stetig.', exEn: 'The growth was steady.', exHi: 'Vikaas lagaataar tha.', ex2: 'Sie haben stetig Fortschritte gemacht.', ex2En: 'They\'ve made steady progress.', ex2Hi: 'Unhone lagaataar pragati ki hai.' },
    { de: 'talentlos', pos: 'adjective', level: 'B2', register: 'both', en: 'talentless', hi: 'प्रतिभाहीन', ex: 'Er war keineswegs talentlos.', exEn: 'He was by no means talentless.', exHi: 'Woh bilkul bhi pratibhaaheen nahi tha.', ex2: 'Sie haben ihn fälschlicherweise als talentlos bezeichnet.', ex2En: 'They\'ve wrongly called him talentless.', ex2Hi: 'Unhone use galat tarike se pratibhaaheen kaha hai.' },
    { de: 'talentvoll', pos: 'adjective', level: 'B2', register: 'both', en: 'talented', hi: 'प्रतिभाशाली', ex: 'Sie war eine talentvolle Musikerin.', exEn: 'She was a talented musician.', exHi: 'Woh ek pratibhaashaali sangeetkaar thi.', ex2: 'Er hat talentvolle Schüler unterrichtet.', ex2En: 'He\'s taught talented students.', ex2Hi: 'Usne pratibhaashaali chhaatron ko padhaaya hai.' },
    { de: 'unbewusst', pos: 'adjective', level: 'B2', register: 'both', en: 'unconscious, subconscious', hi: 'अचेतन', ex: 'Das war eine unbewusste Reaktion.', exEn: 'That was an unconscious reaction.', exHi: 'Yeh ek achetan pratikriya thi.', ex2: 'Sie haben unbewusst reagiert.', ex2En: 'They\'ve reacted unconsciously.', ex2Hi: 'Unhone achetan roop se pratikriya di hai.' },
    { de: 'unerfüllt', pos: 'adjective', level: 'B2', register: 'written', en: 'unfulfilled', hi: 'अधूरा', ex: 'Sein Wunsch blieb unerfüllt.', exEn: 'His wish remained unfulfilled.', exHi: 'Uski ichha adhoori rahi.', ex2: 'Sie haben unerfüllte Träume.', ex2En: 'They\'ve got unfulfilled dreams.', ex2Hi: 'Unke sapne adhoore hain.' },
    { de: 'ungehört', pos: 'adjective', level: 'B2', register: 'written', en: 'unheard', hi: 'अनसुना', ex: 'Ihre Bitte blieb ungehört.', exEn: 'Her request remained unheard.', exHi: 'Uski vinati anasuni rahi.', ex2: 'Sie haben ungehörte Stimmen unterstützt.', ex2En: 'They\'ve supported unheard voices.', ex2Hi: 'Unhone anasuni aawaazon ka samarthan kiya hai.' },
    { de: 'üppig', pos: 'adjective', level: 'B2', register: 'both', en: 'lush, abundant', hi: 'भरपूर', ex: 'Der Garten war üppig bewachsen.', exEn: 'The garden was lushly overgrown.', exHi: 'Bagicha bharpoor roop se ug gaya tha.', ex2: 'Sie haben ein üppiges Mahl genossen.', ex2En: 'They\'ve enjoyed an abundant meal.', ex2Hi: 'Unhone ek bharpoor bhojan ka aanand liya hai.' },
    { de: 'Urteilsvermögen', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'power of judgement', hi: 'निर्णय क्षमता', ex: 'Sein Urteilsvermögen war ausgezeichnet.', exEn: 'His power of judgement was excellent.', exHi: 'Uski nirnay kshamata utkrisht thi.', ex2: 'Sie haben ihr Urteilsvermögen geschärft.', ex2En: 'They\'ve sharpened their judgement.', ex2Hi: 'Unhone apni nirnay kshamata tez ki hai.' },
    { de: 'verdeckt', pos: 'adjective', level: 'B2', register: 'written', en: 'covert, hidden', hi: 'छिपा हुआ', ex: 'Die Kamera war verdeckt installiert.', exEn: 'The camera was covertly installed.', exHi: 'Camera chhipe tareeke se lagaaya gaya tha.', ex2: 'Sie haben verdeckte Ermittlungen durchgeführt.', ex2En: 'They\'ve conducted covert investigations.', ex2Hi: 'Unhone chhipi hui jaanch ki hai.' },
    { de: 'verzwickt', pos: 'adjective', level: 'B2', register: 'both', en: 'tricky, complicated', hi: 'पेचीदा', ex: 'Die Situation war verzwickt.', exEn: 'The situation was tricky.', exHi: 'Sthiti pechida thi.', ex2: 'Sie haben ein verzwicktes Problem gelöst.', ex2En: 'They\'ve solved a tricky problem.', ex2Hi: 'Unhone ek pechida samasya suljhaayi hai.' },
    { de: 'Vielzahl', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'multitude, large number', hi: 'बड़ी संख्या', ex: 'Eine Vielzahl von Menschen kam.', exEn: 'A multitude of people came.', exHi: 'Bahut saare log aaye.', ex2: 'Sie haben eine Vielzahl von Optionen angeboten.', ex2En: 'They\'ve offered a large number of options.', ex2Hi: 'Unhone bahut saare vikalp diye hain.' },
    { de: 'Volkslied', art: 'das', gender: 'n', plural: 'Volkslieder', pos: 'noun', level: 'B2', register: 'both', en: 'folk song', hi: 'लोक गीत', ex: 'Sie sangen ein altes Volkslied.', exEn: 'They sang an old folk song.', exHi: 'Unhone ek puraana lok geet gaaya.', ex2: 'Er hat Volkslieder gesammelt.', ex2En: 'He\'s collected folk songs.', ex2Hi: 'Usne lok geet ekatra kiye hain.' },
    { de: 'Volontariat', art: 'das', gender: 'n', plural: 'Volontariate', pos: 'noun', level: 'B2', register: 'written', en: 'traineeship', hi: 'प्रशिक्षुता', ex: 'Sie absolvierte ein Volontariat bei der Zeitung.', exEn: 'She completed a traineeship at the newspaper.', exHi: 'Usne akhbaar mein prashikshuta poorn ki.', ex2: 'Er hat ein Volontariat begonnen.', ex2En: 'He\'s started a traineeship.', ex2Hi: 'Usne prashikshuta shuru ki hai.' },
    { de: 'vorüber', pos: 'adverb', level: 'B2', register: 'both', en: 'over, past', hi: 'बीत गया', ex: 'Der Sturm war vorüber.', exEn: 'The storm was over.', exHi: 'Toofaan beet gaya tha.', ex2: 'Sie haben die schwierige Zeit vorüber gebracht.', ex2En: 'They\'ve gotten the difficult time past them.', ex2Hi: 'Unhone mushkil samay ko peeche chhoda hai.' },
    { de: 'Witwer/Witwe', art: 'der/die', gender: 'm/f', plural: 'Witwer/Witwen', pos: 'noun', level: 'B2', register: 'both', en: 'widower, widow', hi: 'विधुर, विधवा', ex: 'Der Witwer lebte allein.', exEn: 'The widower lived alone.', exHi: 'Vidhur akela rehta tha.', ex2: 'Sie ist seit Jahren Witwe.', ex2En: 'She\'s been a widow for years.', ex2Hi: 'Woh saalon se vidhwa hai.' },
    { de: 'Zweck', art: 'der', gender: 'm', plural: 'Zwecke', pos: 'noun', level: 'B2', register: 'both', en: 'purpose', hi: 'उद्देश्य', ex: 'Der Zweck der Reise war unklar.', exEn: 'The purpose of the trip was unclear.', exHi: 'Yatra ka uddeshya spasht nahi tha.', ex2: 'Sie haben den Zweck erklärt.', ex2En: 'They\'ve explained the purpose.', ex2Hi: 'Unhone uddeshya samjhaaya hai.' },
    { de: 'Zweifel', art: 'der', gender: 'm', plural: 'Zweifel', pos: 'noun', level: 'B2', register: 'both', en: 'doubt', hi: 'संदेह', ex: 'Sie hatte Zweifel an dem Plan.', exEn: 'She had doubts about the plan.', exHi: 'Use yojana par sandeh tha.', ex2: 'Er hat seine Zweifel geäußert.', ex2En: 'He\'s expressed his doubts.', ex2Hi: 'Usne apne sandeh vyakt kiye hain.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was bedeuten diese Konnektoren?',
      body: [ 'Both connectors put two actions in order \u2014 the difference is which one the CLAUSE describes. With <b>bevor</b>, the clause names the LATER action (so the main clause happens first). With <b>nachdem</b>, the clause names the EARLIER, already-completed action (so the main clause happens second).' ],
      table: {
        head: ['Connector', 'Meaning'],
        rows: [
          ['bevor', 'Main clause happens FIRST; the bevor-clause action comes after'],
          ['nachdem', 'The nachdem-clause action happens FIRST and is finished; the main clause follows']
        ]
      },
      hinglish: 'Dono connectors do kaamon ko order mein rakhte hain \u2014 farak sirf itna hai ki clause kaunse kaam ki baat kar raha hai. <b>bevor</b> ke saath clause <b>baad</b> wale kaam ki baat karta hai, isliye main clause pehle hota hai. Aur <b>nachdem</b> ke saath clause <b>pehle</b> wale kaam ki baat karta hai, jo already poora ho chuka hai.'
    },
    {
      title: 'bevor',
      body: [ 'Structure: Main Clause + bevor + Nebensatz, verb at the end.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Ich frühstücke, bevor ich zur Arbeit gehe.</span>'],
          ['<span class="de">Bevor Anna die Präsentation hält, übt sie zu Hause.</span>'],
          ['<span class="de">Rohan liest den Bericht, bevor er eine Entscheidung trifft.</span>']
        ]
      },
      hinglish: 'Structure yeh hai: pehle main clause, phir comma, phir <b>bevor</b>, aur uske clause ka verb sentence ke end mein. Clause ko aage bhi rakh sakte ho \u2014 phir main clause apne verb se shuru hoga.'
    },
    {
      title: 'nachdem',
      body: [ 'One action is completed, then another happens. Usually pairs Plusquamperfekt (earlier action) with Präteritum/Perfekt (later action).' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Nachdem Anna die Prüfung bestanden hatte, feierte sie mit ihren Freunden.</span>'],
          ['<span class="de">Nachdem wir gegessen hatten, gingen wir spazieren.</span>'],
          ['<span class="de">Nachdem Rohan die E-Mail gelesen hatte, antwortete er sofort.</span>']
        ]
      },
      hinglish: 'Yahan ek kaam poora ho jaata hai, phir doosra hota hai. Isliye pehle wale kaam ke liye aksar Plusquamperfekt aata hai, aur baad wale ke liye Pr\u00e4teritum ya Perfekt.'
    },
    {
      title: 'Richtige Zeitkombination (Correct Tense Combination)',
      body: [ 'The earlier action is often Plusquamperfekt; the later action is Präteritum or Perfekt depending on context. Spoken German often uses Perfekt.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Nachdem Anna die Hausaufgaben gemacht hatte, ging sie schlafen.</span>'],
          ['<span class="de">Nachdem wir angekommen waren, haben wir gegessen.</span>']
        ]
      },
      hinglish: 'Pehla kaam aksar Plusquamperfekt mein hota hai, aur doosra context ke hisaab se Pr\u00e4teritum ya Perfekt mein. Bolchaal mein log zyada-tar Perfekt hi use karte hain.'
    },
    {
      title: 'Zeitliche Beziehung (Time Relationship)',
      body: [ 'bevor points to a future/planned order; nachdem points to a past order.' ],
      table: {
        head: ['bevor', 'nachdem'],
        rows: [
          ['main clause → bevor-clause', 'nachdem-clause → main clause']
        ]
      },
      hinglish: '<b>bevor</b> aksar aage ki planning wale sentences mein aata hai, aur <b>nachdem</b> zyada-tar past ki kahani sunate waqt \u2014 kyunki wahan ek kaam pehle se poora ho chuka hota hai.'
    },
    {
      title: 'Vergleich aller sechs Temporalkonnektoren',
      body: [ 'A complete comparison of every temporal connector taught so far.' ],
      table: {
        head: ['Connector', 'Usage'],
        rows: [
          ['als', 'One past event'],
          ['wenn', 'Repeated / Present / Future'],
          ['während', 'Simultaneous actions'],
          ['seitdem', 'Past → Present'],
          ['bevor', 'Before'],
          ['nachdem', 'After']
        ]
      },
      hinglish: 'Ab tak jitne temporal connectors padhe hain, sabka comparison ek jagah \u2014 exam se pehle ise ek baar dekh lena kaafi kaam ka hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These come from the wrong tense after <b>nachdem</b>, a broken verb form inside the clause, forgetting that a fronted clause pushes the main verb forward, or leaving the sentence without a main clause.' ],
      mistakes: [
        { wrong: 'Nachdem ich esse, gehe ich spazieren.', right: 'Nachdem ich gegessen habe, gehe ich spazieren.', why: '"nachdem" requires the earlier action to be completed — use Perfekt or Plusquamperfekt, not plain Präsens.' },
        { wrong: 'Bevor ich gegessen hatte, ging ich schlafen.', right: 'Bevor ich schlafen ging, hatte ich gegessen. (or) Nachdem ich gegessen hatte, ging ich schlafen.', why: '"bevor" does not pair with Plusquamperfekt in this way — this sentence actually describes "after", so "nachdem" is correct.' },
        { wrong: 'Nachdem ich gegessen hatte, ich ging spazieren.', right: 'Nachdem ich gegessen hatte, ging ich spazieren.', why: 'When the nachdem-clause comes first it fills position 1, so the main clause must start with its verb \u2014 before the subject.' },
        { wrong: 'Bevor ich zur Arbeit gehen, frühstücke ich.', right: 'Bevor ich zur Arbeit gehe, frühstücke ich.', why: 'Inside the bevor-clause the verb still agrees with its subject (ich \u2192 gehe) and sits at the end \u2014 it is not an infinitive.' },
        { wrong: 'Bevor ich gehe.', right: 'Bevor ich gehe, räume ich auf.', why: '"bevor" only opens a subordinate clause, so on its own the sentence is unfinished \u2014 it still needs a main clause.' }
      ],
      hinglish: 'Yeh galtiyan chaar wajah se hoti hain \u2014 <b>nachdem</b> ke baad galat tense, clause ke andar verb ka galat form, fronted clause ke baad main clause ko verb se shuru na karna, ya sentence ko main clause ke bina chhod dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Always ask: which action happened first? This single question decides bevor vs nachdem.' ],
      note: 'Memory trick: bevor → think forward ("before something happens..."). nachdem → think backward ("after something had happened...").',
      hinglish: 'Har baar ek sawaal poochho \u2014 kaunsa kaam pehle hua? Isi ek sawaal se pata chal jaata hai ki <b>bevor</b> lagana hai ya <b>nachdem</b>.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Feuilleton: Die vergessene Dichterin der Romantik',
    titleEn: 'Arts feature: the forgotten poet of Romanticism',
    tokens: [
      { w: 'Bevor', role: 'r-connector', en: 'before', hi: 'पहले', type: 'Konjunktion · bevor (temporal)', why: 'bevor introduces the earlier of two past events, even though it stands first in the sentence (this chapter).' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Dichterin', role: 'plain', en: 'poet (f.)', hi: 'कवयित्री', type: 'Noun · fem.', why: 'der/die Dichter/in (this chapter).' },
      { w: 'berühmt', role: 'plain', en: 'famous', hi: 'प्रसिद्ध', type: 'Adjective' },
      { w: 'wurde', role: 'plain', en: 'became (Satzende)', hi: 'हुई (Satzende)', type: 'Verb · werden (Präteritum, Nebensatz-Satzende)' },
      { w: ',', plain: true },
      { w: 'arbeitete', role: 'plain', en: 'worked (linke Klammer)', hi: 'काम किया (बायाँ कोष्ठक)', type: 'Verb · arbeiten (Präteritum, Linke Klammer)' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'उसने', type: 'Pronoun' },
      { w: 'jahrelang', role: 'plain', en: 'for years', hi: 'सालों तक', type: 'Adverb' },
      { w: 'als', role: 'plain', en: 'as a', hi: 'के रूप में', type: 'Preposition' },
      { w: 'Übersetzerin', role: 'plain', en: 'translator (f.) (Satzende)', hi: 'अनुवादक (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Ihre', role: 'plain', en: 'her', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'Lyrik', role: 'plain', en: 'poetry', hi: 'कविता', type: 'Noun · fem.', why: 'die Lyrik (this chapter).' },
      { w: ',', plain: true },
      { w: 'deren', role: 'r-connector', en: 'whose (Genitiv)', hi: 'जिसकी (Genitiv)', type: 'Relativpronomen · Genitiv (feminine/plural Bezugswort)', why: 'deren = whose, referring back to a feminine or plural antecedent in the Genitiv (this chapter).' },
      { w: 'Sprache', role: 'plain', en: 'language', hi: 'भाषा', type: 'Noun · fem.' },
      { w: 'bis', role: 'plain', en: 'until', hi: 'तक', type: 'Preposition · Akk.' },
      { w: 'heute', role: 'plain', en: 'today (Satzende)', hi: 'आज (Satzende)', type: 'Adverb' },
      { w: 'modern', role: 'plain', en: 'modern (Satzende)', hi: 'आधुनिक (Satzende)', type: 'Adjective' },
      { w: 'wirkt', role: 'plain', en: 'seems (Satzende)', hi: 'लगती है (Satzende)', type: 'Verb · wirken (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'blieb', role: 'plain', en: 'remained (linke Klammer)', hi: 'रही (बायाँ कोष्ठक)', type: 'Verb · bleiben (Präteritum, Linke Klammer)' },
      { w: 'zu', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'Lebzeiten', role: 'plain', en: 'lifetime (Satzende)', hi: 'जीवनकाल (Satzende)', type: 'Noun · plural' },
      { w: 'unbekannt', role: 'plain', en: 'unknown (Satzende)', hi: 'अज्ञात (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Nachdem', role: 'plain', en: 'after', hi: 'बाद', type: 'Konjunktion · nachdem (recycled)' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Literaturwissenschaftler', role: 'plain', en: 'literary scholar', hi: 'साहित्य विद्वान', type: 'Noun · masc.' },
      { w: 'ihre', role: 'plain', en: 'her', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'Gedichte', role: 'plain', en: 'poems (Satzende)', hi: 'कविताएँ (Satzende)', type: 'Noun · plural' },
      { w: 'wiederentdeckt', role: 'plain', en: 'rediscovered (Satzende)', hi: 'फिर से खोजा था (Satzende)', type: 'Verb · Partizip II' },
      { w: 'hatte', role: 'plain', en: 'had (Satzende)', hi: 'था (Satzende)', type: 'Verb · haben (Plusquamperfekt, Nebensatz-Satzende)' },
      { w: ',', plain: true },
      { w: 'erschien', role: 'plain', en: 'was published (linke Klammer)', hi: 'प्रकाशित हुआ (बायाँ कोष्ठक)', type: 'Verb · erscheinen (Präteritum, Linke Klammer)' },
      { w: 'endlich', role: 'plain', en: 'finally', hi: 'आख़िरकार', type: 'Adverb' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Gesamtwerk', role: 'plain', en: 'complete works (Satzende)', hi: 'संपूर्ण रचनाएँ (Satzende)', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'dessen', role: 'r-connector', en: 'whose (Genitiv)', hi: 'जिसका (Genitiv)', type: 'Relativpronomen · Genitiv (masculine/neuter Bezugswort)', why: 'dessen = whose, referring back to a masculine or neuter antecedent in the Genitiv — here, Gesamtwerk (this chapter).' },
      { w: 'Einband', role: 'plain', en: 'cover', hi: 'आवरण', type: 'Noun · masc.' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Flügel', role: 'plain', en: 'wing (Satzende)', hi: 'पंख (Satzende)', type: 'Noun · masc.', why: 'der Flügel (this chapter).' },
      { w: 'zeigt', role: 'plain', en: 'shows (Satzende)', hi: 'दिखाता है (Satzende)', type: 'Verb · zeigen (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Bevor', role: 'r-connector', en: 'before', hi: 'से पहले', type: 'Konjunktion · bevor', why: 'bevor introduces the earlier of two past events (this chapter).' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Verlag', role: 'plain', en: 'publishing house', hi: 'प्रकाशक', type: 'Noun · masc.' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article' },
      { w: 'Neuauflage', role: 'plain', en: 'reprint (Satzende)', hi: 'पुनर्मुद्रण (Satzende)', type: 'Noun · fem.' },
      { w: 'entschied', role: 'plain', en: 'decided (Satzende)', hi: 'फ़ैसला किया (Satzende)', type: 'Verb · entscheiden (Präteritum, Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'prüfte', role: 'plain', en: 'examined', hi: 'जाँचा', type: 'Verb · prüfen (Präteritum)' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Team', role: 'plain', en: 'team', hi: 'टीम', type: 'Noun · neut.' },
      { w: 'von', role: 'plain', en: 'of', hi: 'के', type: 'Preposition · Dat.' },
      { w: 'Fachleuten', role: 'plain', en: 'experts', hi: 'विशेषज्ञ', type: 'Noun · plural' },
      { w: 'jedes', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'einzelne', role: 'plain', en: 'single', hi: 'एक-एक', type: 'Adjective' },
      { w: 'Gedicht', role: 'plain', en: 'poem (Satzende)', hi: 'कविता (Satzende)', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Als', role: 'plain', en: 'when', hi: 'जब', type: 'Konjunktion · als (einmaliges Ereignis)' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'Buch', role: 'plain', en: 'book', hi: 'किताब', type: 'Noun · neut.' },
      { w: 'schließlich', role: 'plain', en: 'finally', hi: 'आख़िरकार', type: 'Adverb' },
      { w: 'erschien', role: 'plain', en: 'appeared (Satzende)', hi: 'प्रकाशित हुई (Satzende)', type: 'Verb · erscheinen (Präteritum, Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'war', role: 'plain', en: 'was', hi: 'था', type: 'Verb · sein (Präteritum)' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Auflage', role: 'plain', en: 'print run', hi: 'संस्करण', type: 'Noun · fem.' },
      { w: 'binnen', role: 'plain', en: 'within', hi: 'भीतर', type: 'Preposition · Genitiv' },
      { w: 'weniger', role: 'plain', en: 'a few (gen.)', hi: 'कुछ', type: 'Determiner · Genitiv' },
      { w: 'Tage', role: 'plain', en: 'days (Satzende)', hi: 'दिनों (Satzende)', type: 'Noun · plural' },
      { w: 'vergriffen', role: 'plain', en: 'sold out (Satzende)', hi: 'बिक चुका (Satzende)', type: 'Adjective' },
      { w: '.', plain: true }
    ],
    translation: 'Before the poet became famous, she worked for years as a translator. Her poetry, whose language still seems modern today, remained unknown during her lifetime. After a literary scholar had rediscovered her poems, a complete works finally appeared, whose cover shows a wing. Before the publishing house decided on a reprint, a team of experts examined every single poem. When the book finally appeared, the print run sold out within a few days.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_035_L001', speaker: 'Anke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, bevor die Lesung beginnt, will ich noch einmal alles laut üben.', en: 'Timo, before the reading starts, I want to practice everything out loud once more.' },
      { id: 'B2_035_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gute Idee. Sollen wir vorher noch kurz spazieren gehen, um ruhig zu werden?', en: 'Good idea. Should we go for a short walk beforehand to calm down?' },
      { id: 'B2_035_L003', speaker: 'Anke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, und nachdem das Publikum reingekommen ist, trinke ich noch schnell Wasser.', en: 'Yes, and after the audience has come in, I\'ll quickly drink some water.' },
      { id: 'B2_035_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und nachdem du gelesen hast, gehen wir zusammen etwas trinken, versprochen!', en: 'And after you\'ve read, we\'ll go get a drink together, promise!' }
    ],
    transcript: 'Timo, bevor die Lesung beginnt, will ich noch einmal alles laut üben. Gute Idee. Sollen wir vorher noch kurz spazieren gehen, um ruhig zu werden? Ja, und nachdem das Publikum reingekommen ist, trinke ich noch schnell Wasser. Und nachdem du gelesen hast, gehen wir zusammen etwas trinken, versprochen!',
    translation: 'Timo, before the reading starts, I want to practice everything out loud once more. Good idea. Should we go for a short walk beforehand to calm down? Yes, and after the audience has come in, I\'ll quickly drink some water. And after you\'ve read, we\'ll go get a drink together, promise!',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'die' },
      { w: 'Lesung' },
      { w: 'beginnt' },
      { w: ',', plain: true },
      { w: 'will' },
      { w: 'ich' },
      { w: 'noch' },
      { w: 'einmal' },
      { w: 'alles' },
      { w: 'laut' },
      { w: 'üben' },
      { w: '.', plain: true },
      { w: 'Gute' },
      { w: 'Idee' },
      { w: '.', plain: true },
      { w: 'Sollen' },
      { w: 'wir' },
      { w: 'vorher' },
      { w: 'noch' },
      { w: 'kurz' },
      { w: 'spazieren' },
      { w: 'gehen' },
      { w: ',', plain: true },
      { w: 'um' },
      { w: 'ruhig' },
      { w: 'zu' },
      { w: 'werden' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'nachdem' },
      { w: 'das' },
      { w: 'Publikum' },
      { w: 'reingekommen' },
      { w: 'ist' },
      { w: ',', plain: true },
      { w: 'trinke' },
      { w: 'ich' },
      { w: 'noch' },
      { w: 'schnell' },
      { w: 'Wasser' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'nachdem' },
      { w: 'du' },
      { w: 'gelesen' },
      { w: 'hast' },
      { w: ',', plain: true },
      { w: 'gehen' },
      { w: 'wir' },
      { w: 'zusammen' },
      { w: 'etwas' },
      { w: 'trinken' },
      { w: ',', plain: true },
      { w: 'versprochen' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was möchte Anke vor der Lesung machen?', qEn: 'What does Anke want to do before the reading?', options: ['schlafen', 'alles laut üben', 'essen', 'nach Hause gehen'], optionsEn: ['sleep', 'practise everything out loud', 'eat', 'go home'], answer: 1,
        explain: '"Bevor die Lesung beginnt, will ich noch einmal alles laut üben."' },
      { q: 'Was machen sie, nachdem Anke gelesen hat?', qEn: 'What will they do after Anke has read?', options: ['sofort nach Hause gehen', 'etwas trinken gehen', 'weiterüben', 'schlafen'], optionsEn: ['go home immediately', 'go for a drink', 'keep practising', 'sleep'], answer: 1,
        explain: '"Nachdem du gelesen hast, gehen wir zusammen etwas trinken."' }
    ]
  },

  speaking: [
    { task: "Du willst vor der Lesung noch üben. Sag es deinem Freund.", taskEn: "You want to practise before the reading. Tell your friend.", de: "Bevor die Lesung beginnt, will ich noch einmal alles laut üben.", en: "Before the reading starts, I want to go through it all out loud again." },
    { task: "Er fragt, ob ihr vorher spazieren gehen sollt.", taskEn: "He asks whether you should go for a walk beforehand.", de: "Ja, bevor wir anfangen, gehen wir kurz raus.", en: "Yes, before we start, let's go out briefly." },
    { task: "Eine Kollegin fragt, wie es nach dem Abschluss weiterging.", taskEn: "A colleague asks what happened after you graduated.", de: "Nachdem ich den Abschluss gemacht hatte, habe ich sofort geschrieben.", en: "After I'd graduated, I started writing straight away." },
    { task: "Ein Bekannter fragt nach deinem Morgen.", taskEn: "An acquaintance asks about your morning.", de: "Bevor ich zur Arbeit fahre, trinke ich einen Tee.", en: "Before I go to work, I have a tea." },
    { task: "Rollenspiel: Ihr legt die Reihenfolge für den Abend fest.", taskEn: "Role-play: you set the order for the evening.", de: "Bevor wir lesen, stellen wir die Stühle. — Nachdem alle da sind, fangen wir an.", en: "Before we read, we'll set out the chairs. — After everybody's here, we'll begin." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Experience report (6-8 sentences): Describe a workday or trip, carefully sequencing events with bevor and nachdem, using Plusquamperfekt correctly with nachdem.\n\nTASK 2 — Project summary (6-8 sentences): Summarize a project\'s timeline using bevor and nachdem to establish the correct order of events.',
    starters: ['Bevor ich …', 'Nachdem ich … hatte, …'],
    placeholder: 'Bevor die Sitzung beginnt, bereite ich alle Unterlagen vor. Nachdem wir gegessen hatten, …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'In "Nachdem ich die E-Mail gelesen hatte, antwortete ich sofort," which action happened FIRST?',
      options: ['Reading the email', 'Answering', 'Both at the same time'],
      answer: 0,
      explain: '"nachdem" names the earlier, completed action — reading the email happened first, then the answer followed.'
    },
    gap: {
      sentence: ['Nachdem wir gegessen ', ', gingen wir spazieren.'],
      gaps: [ { answer: 'hatten', accepts: ['hatten'] } ],
      explain: 'The earlier action after "nachdem" is typically expressed with Plusquamperfekt: "hatten...gegessen".'
    },
    match: {
      q: 'Match each connector to which action it names.',
      pairs: [
        { noun: 'bevor', art: 'Names the LATER action' },
        { noun: 'nachdem', art: 'Names the EARLIER, completed action' },
        { noun: 'als', art: 'One completed past event' },
        { noun: 'während', art: 'Simultaneous actions' }
      ]
    },
    builder: {
      target: 'Build: "I have breakfast before I go to work."',
      bank: ['Ich', 'frühstücke', ',', 'bevor', 'ich', 'zur', 'Arbeit', 'gehe', '.'],
      answer: ['Ich', 'frühstücke', ',', 'bevor', 'ich', 'zur', 'Arbeit', 'gehe', '.'],
      roles: { 'bevor': 'r-temporal2', 'gehe': 'r-temporal2' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Nachdem ich esse, gehe ich spazieren.',
      right: 'Nachdem ich gegessen habe, gehe ich spazieren.',
      explain: '"nachdem" requires the earlier action to be completed — use Perfekt or Plusquamperfekt, not plain Präsens.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does "bevor" name?', options: ['The later action', 'The earlier action', 'A simultaneous action'], answer: 0,
      explain: '"bevor" names the action that happens later — the main clause action happens first.' },
    { q: 'What does "nachdem" name?', options: ['The earlier, completed action', 'The later action', 'A repeated action'], answer: 0,
      explain: '"nachdem" names the earlier action, which is completed before the main clause action happens.' },
    { q: 'Which tense typically follows "nachdem" for the earlier action?', options: ['Plusquamperfekt', 'Präsens', 'Futur I'], answer: 0,
      explain: 'The earlier, completed action after "nachdem" is typically expressed with Plusquamperfekt.' },
    { q: 'Which auxiliary does "nachdem" use with movement verbs in Plusquamperfekt?', options: ['war/waren', 'hatte/hatten', 'werde/werden'], answer: 0,
      explain: 'Movement/change-of-state verbs use "war/waren" (sein) for Plusquamperfekt, following the same rule as Perfekt.' },
    { q: 'Is "Bevor ich gehe." a complete sentence?', options: ['No — it needs a main clause', 'Yes, it\'s complete', 'Only in spoken German'], answer: 0,
      explain: '"bevor" introduces a subordinate clause and needs a main clause to complete the sentence.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-temporal2', html: 'bevor names the LATER action; the main clause action happens first.' },
    { c: 'r-temporal2', html: 'nachdem names the EARLIER, completed action — typically in Plusquamperfekt, paired with a later Präteritum/Perfekt main clause.' },
    { c: 'r-temporal2', html: 'Always ask: which action happened first? That single question decides bevor vs nachdem.' }
  ],
  revisionTips: [
    'Practise describing your own daily routine using bevor to sequence morning tasks.',
    'Tell a short story about a past trip using nachdem with Plusquamperfekt for the earlier action.',
    'Compare als, wenn, während, seitdem, bevor, and nachdem side by side until all six functions feel automatic.'
  ]
};

window.CHAPTER = CHAPTER;
