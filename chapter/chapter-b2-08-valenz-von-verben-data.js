/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 8
   "Valenz von Verben" — every German verb has its own fixed
   "construction blueprint": how many complements it needs and
   in which case/preposition. Builds directly on Chapter 7
   (Verbergänzungen erkennen). Covers valency patterns (subject
   only / +Akk / +Dat / +Gen / +preposition), same-meaning verbs
   with different valency, and the "never memorize a verb alone"
   learning strategy. Does NOT introduce dependency grammar,
   Tesnière terminology, or C1 syntax.
   IMPORTANT: dialogue uses ONLY Runa and Timo.
   Vocabulary source: uploaded chapter-8 list (35 items, user-edited
   general B2 vocabulary bank — science/migration/social themes).
============================================================ */
const CHAPTER = {
  id: 'b2-08-valenz-von-verben',
  phase: 'B2 · Phase 1',
  number: 8,
  title: 'Valenz von Verben',
  titleEn: 'Verb valency',
  description: 'Know how many partners each verb takes — geben needs three, schlafen needs one — and build every sentence around the verb\'s own grammatical blueprint.',
  xp: 370,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 9, title: 'Trennbar vs. untrennbar (Bedeutungsunterschiede)', titleEn: 'Separable vs inseparable verbs (meaning differences)' , href: 'chapter-b2-09-trennbar-vs-untrennbar.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Every verb has a <em>blueprint.</em>',
    intro: 'Runa, a linguist, judges a new study on migrant-family language development as important, and Timo asks whether it contradicts older results — every verb here built around its own blueprint of required partners.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear verbs paired correctly with their required case or preposition'
    ],
    scene: 'Die Forschungsstudie',
    femaleSpeakers: ['Runa'],
    dialogue: [
      { speaker: 'Runa', tokens: [
        { w: 'Als', role: 'r-preposition', en: 'as', hi: 'के रूप में', pron: 'als', type: 'Preposition' },
        { w: 'Sprachwissenschaftlerin', role: 'r-akkusativ', en: 'linguist (f)', hi: 'भाषाविद', pron: 'SHPRAHKH-vi-sen-shaft-le-rin', type: 'Noun · fem.', why: 'die Sprachwissenschaftlerin (this chapter, valency: verb requiring a preposition phrase).', ex: 'als Sprachwissenschaftlerin' },
        { w: 'beurteile', role: 'r-verb', en: 'judge', hi: 'आंकती हूँ', pron: 'be-OOR-ty-luh', type: 'Verb · beurteilen (ich)', why: 'beurteilen + Akkusativ = two-place valency verb (this chapter).', ex: 'Ich beurteile die Studie.', exEn: 'I judge the study.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Studie', role: 'r-akkusativ', en: 'study', hi: 'अध्ययन', pron: 'SHTOO-dyuh', type: 'Noun · fem.' },
        { w: 'als', role: 'r-akkusativ', en: 'as', hi: 'के रूप में', pron: 'als', type: 'Preposition' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'wichtig', role: 'r-akkusativ', en: 'important', hi: 'ज़रूरी', pron: 'VIKH-tikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'As a linguist I judge the study as very important.', hi: 'Bhashavid ke roop mein main is adhyayan ko bahut zaroori maanti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Widerspricht', role: 'r-verb', en: 'does it contradict', hi: 'विरोधाभास करता है', pron: 'VEE-der-shprikht', type: 'Verb · widersprechen', why: 'widersprechen + Dativ = valency requiring a dative object (this chapter).', ex: 'Widerspricht das den alten Ergebnissen?', exEn: 'Does that contradict the old results?' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-dativ', en: 'the (pl. dat.)', hi: '', pron: 'dayn', type: 'Article · dative' },
        { w: 'alten', role: 'r-dativ', en: 'old', hi: 'पुराने', pron: 'AL-ten', type: 'Adjective · dative' },
        { w: 'Ergebnissen', role: 'r-dativ', en: 'results (dat.)', hi: 'परिणामों से', pron: 'er-GAYP-ni-sen', type: 'Noun · plural dat.' },
        { w: '?', plain: true }
      ], en: 'Does that contradict the old results?', hi: 'Kya yeh purane parinaamon se virodhaabhaas karta hai?' },
      { speaker: 'Runa', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Sprachentwicklung', role: 'r-subject', en: 'language development', hi: 'भाषा विकास', pron: 'SHPRAHKH-ent-vik-lung', type: 'Noun · fem.', why: 'die Sprachentwicklung (this chapter).', ex: 'Die Sprachentwicklung ist tatsächlich schneller.', exEn: 'The language development is actually faster.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'tatsächlich', role: 'r-akkusativ', en: 'actually', hi: 'वास्तव में', pron: 'tat-ZEKH-likh', type: 'Adverb' },
        { w: 'schneller', role: 'r-akkusativ', en: 'faster', hi: 'तेज़', pron: 'SHNE-ler', type: 'Adjective · Komparativ' },
        { w: '.', plain: true }
      ], en: 'No, the language development is actually faster.', hi: 'Nahi, bhasha vikaas vaastav mein tez hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Fordert', role: 'r-verb', en: 'does it demand', hi: 'आग्रह करती है', pron: 'FOR-dert', type: 'Verb · auffordern', lexicalUnit: 'auffordern', why: 'auffordern + Akkusativ + zu = valency with two objects (this chapter).', ex: 'Fordert die Studie Familien auf, mehr zu sprechen?', exEn: 'Does the study encourage families to speak more?' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Studie', role: 'r-subject', en: 'study', hi: 'अध्ययन', pron: 'SHTOO-dyuh', type: 'Noun · fem.' },
        { w: 'Familien', role: 'r-akkusativ', en: 'families', hi: 'परिवारों', pron: 'fa-MEE-lyen', type: 'Noun · plural' },
        { w: 'auf', role: 'r-verb', en: '(prefix of auffordern)', hi: '', pron: 'owf', type: 'Separable prefix', lexicalUnit: 'auffordern' },
        { w: ',', plain: true },
        { w: 'mehr', role: 'r-akkusativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'sprechen', role: 'r-verb', en: 'speak', hi: 'बोलना', pron: 'SHPRE-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Does the study encourage families to speak more?', hi: 'Kya adhyayan parivaaron ko zyada bolne ke liye kehta hai?' },
      { speaker: 'Runa', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'sie', role: 'r-subject', en: 'it', hi: 'यह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'zieht', role: 'r-verb', en: 'draws', hi: 'निकालता है', pron: 'tseet', type: 'Verb · ziehen', why: 'ziehen + Akkusativ (ein Resümee ziehen) = fixed valency (this chapter).', ex: 'Sie zieht ein wichtiges Resümee.', exEn: 'It draws an important conclusion.' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'wichtiges', role: 'r-akkusativ', en: 'important', hi: 'ज़रूरी', pron: 'VIKH-ti-ges', type: 'Adjective' },
        { w: 'Resümee', role: 'r-akkusativ', en: 'conclusion', hi: 'निष्कर्ष', pron: 'ray-zü-MAY', type: 'Noun · neut.', why: 'das Resümee (this chapter).', ex: 'ein Resümee ziehen' },
        { w: '.', plain: true }
      ], en: 'Yes, and it draws an important conclusion.', hi: 'Haan, aur yeh ek zaroori nishkarsh nikaalta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sicherlich', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'ZI-kher-likh', type: 'Adverb', why: 'sicherlich = surely (this chapter).', ex: 'Sicherlich ist das wichtig.', exEn: 'Surely that is important.' },
        { w: 'wird', role: 'r-verb', en: 'will', hi: 'होगी', pron: 'virt', type: 'Verb · werden' },
        { w: 'diese', role: 'r-subject', en: 'this (fem.)', hi: 'यह', pron: 'DEE-zuh', type: 'Determiner' },
        { w: 'Studie', role: 'r-subject', en: 'study', hi: 'अध्ययन', pron: 'SHTOO-dyuh', type: 'Noun · fem.' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'diskutiert', role: 'r-verb', en: 'discussed', hi: 'चर्चा में', pron: 'dis-koo-TEERT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Surely this study will be much discussed.', hi: 'Zaroor is adhyayan par bahut charcha hogi.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Every German verb has its own <span class="de r-val">Valenz</span> — a fixed "construction blueprint" of how many complements it needs, and in which case or preposition. <span class="de">schlafen</span> needs only a subject; <span class="de">helfen</span> needs a Dativ; <span class="de">warten</span> needs "auf + Akkusativ". Never memorize a verb alone — always memorize verb + case + preposition together.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is VALENZ VON VERBEN (B2 level): every German verb has its own fixed valency pattern (how many complements it needs and in which case/preposition). Builds directly on Chapter 7 (Verbergänzungen erkennen). Covers valency patterns: subject only (schlafen, arbeiten), subject+Akkusativ (kaufen, sehen, verstehen), subject+Dativ (helfen, folgen, gefallen, gehören, danken, vertrauen), subject+Genitiv (bedürfen, gedenken — rare), and subject+preposition (warten auf, denken an, abhängen von, gehören zu, bestehen aus, sich interessieren für, teilnehmen an, sich kümmern um, sich freuen auf, sich entschuldigen für, verfügen über). Also covers same-looking verbs with different valency, and verbs that change meaning with a different complement (denken vs nachdenken über). The learning strategy taught: never memorize a verb alone — always memorize verb + case + preposition + example sentence together. ' +
    'Do NOT expect dependency grammar theory, Tesnière terminology, or C1 syntax — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Each verb\'s complement must match its fixed valency pattern (case and/or preposition) — check this carefully against the verb list above.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Valency check:</b> one sentence on whether the learner matched each verb to its correct case/preposition.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly match verbs to their required case and preposition. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the valency pattern table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: never memorize a verb alone, always memorize verb + case + preposition.'
  },

  parserSentence: [
    { w: 'Ich', role: 'plain' }, { w: 'helfe', role: 'plain' },
    { w: 'meinem', role: 'r-val' }, { w: 'Freund', role: 'r-val' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: every verb has its own fixed valency blueprint.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Runa and Timo discuss a research study, using verbs with many valency patterns.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 35 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the five valency patterns and the verb+case+preposition learning strategy.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of different valency structures.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the verb, required complement, case, and preposition in spoken German.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give presentations and discuss projects using correct verb valency.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and emails using correct valency patterns naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill verb-case matching, verb-preposition matching, and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 370 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 35 chapter words with their complete valency pattern, translations, and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Verb-case matching, verb-preposition matching, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete Valenz reference — all five patterns, verb→case and verb→preposition charts.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich schlafe.', text: 'Recognize subject-only verbs' },
    { de: 'Ich kaufe ein Buch.', text: 'Use verbs requiring Akkusativ' },
    { de: 'Ich helfe meinem Freund.', text: 'Use verbs requiring Dativ' },
    { de: 'Ich warte auf den Bus.', text: 'Use verbs requiring a fixed preposition' },
    { de: 'Verb + Fall + Präposition', text: 'Memorize every new verb with its full valency pattern' }
  ],

  // ---------- Vocabulary (35 items — uploaded chapter-8 list) ----------
  vocab: [
    { de: 'beurteilen', pos: 'verb', level: 'B2', en: 'to assess, judge', hi: 'मूल्यांकन करना', valency: 'beurteilen + Akkusativ', ex: 'Sie beurteilt auch die Aufgabenteilung zwischen Eltern und Kindern.', exEn: 'She also assesses the division of tasks between parents and children.', exHi: 'Woh maata-pita aur bacchon ke beech kaarya vibhaajan ka bhi moolyaankan karti hain.', conj: { praesens: 'beurteilt', praeteritum: 'beurteilte', perfekt: 'hat beurteilt' } },
    { de: 'bewusst', pos: 'adjective', level: 'B2', en: 'deliberate, conscious, aware', hi: 'सचेत', ex: 'Man kann sie nicht verurteilen, weil ihr Wunsch bewusst ist.', exEn: 'One cannot condemn her, because her wish is deliberate.', exHi: 'Koi unki ninda nahi kar sakta, kyunki unki ichha sachet hai.' },
    { de: 'ernst meinen', pos: 'verb', level: 'B2', en: 'to mean seriously', hi: 'गंभीरता से मानना', valency: 'es ernst meinen (feste Wendung)', ex: 'Ich meine es ernst, wenn ich sage, das ist wichtig.', exEn: 'I mean it seriously when I say this is important.', exHi: 'Jab main kehti hoon ki yeh mahatvapurn hai, toh main gambhirta se kehti hoon.' },
    { de: 'gezeichnet sein', pos: 'verb', level: 'B2', en: 'to be marked, scarred', hi: 'चिह्नित होना', valency: 'gezeichnet sein + von + Dativ', ex: 'Er ist von den Erfahrungen gezeichnet.', exEn: 'He is marked by the experiences.', exHi: 'Woh anubhavon se chihnit hain.' },
    { de: 'nehmen', pos: 'verb', level: 'B2', en: 'to take', hi: 'लेना', valency: 'nehmen + Akkusativ', ex: 'Sie nimmt die Studie sehr ernst.', exEn: 'She takes the study very seriously.', exHi: 'Woh adhyayan ko bahut gambhirta se leti hain.', conj: { praesens: 'nimmt', praeteritum: 'nahm', perfekt: 'hat genommen' } },
    { de: 'Resümee', art: 'das', gender: 'n', plural: 'Resümees', pos: 'noun', level: 'B2', en: 'summary, résumé', hi: 'सारांश', ex: 'Tatsächlich widersprechen manche Wissenschaftler ihrem Resümee.', exEn: 'Actually, some scientists contradict her summary.', exHi: 'Vaastav mein, kuch vaigyaanik unke saaraansh ka virodh karte hain.' },
    { de: 'sicherlich', pos: 'adverb', level: 'B2', en: 'certainly, surely', hi: 'निश्चित रूप से', ex: 'Ihre Beurteilung löst sicherlich eine Diskussion aus.', exEn: 'Her assessment certainly triggers a discussion.', exHi: 'Unka moolyaankan nishchit roop se ek charcha ko bhadkaata hai.' },
    { de: 'Sprachentwicklung', art: 'die', gender: 'f', plural: 'Sprachentwicklungen', pos: 'noun', level: 'B2', en: 'language development', hi: 'भाषा विकास', ex: 'Ihre Forschung hängt völlig von der Sprachentwicklung ab.', exEn: 'Her research depends completely on the language development.', exHi: 'Uska shodh bhaasha vikaas par poori tarah nirbhar karta hai.' },
    { de: 'Sprachwissenschaftler/in', art: 'der/die', gender: 'm/f', plural: 'Sprachwissenschaftler/innen', pos: 'noun', level: 'B2', en: 'linguist', hi: 'भाषाविद', ex: 'Die Sprachwissenschaftlerin hilft den Migrantenfamilien.', exEn: 'The linguist helps the migrant families.', exHi: 'Bhaashaavid pravaasi parivaaron ki madad karti hain.' },
    { de: 'tatsächlich', pos: 'adverb', level: 'B2', en: 'actually, in fact', hi: 'वास्तव में', ex: 'Tatsächlich widersprechen manche Wissenschaftler ihrem Resümee.', exEn: 'Actually, some scientists contradict her summary.', exHi: 'Vaastav mein, kuch vaigyaanik unke saaraansh ka virodh karte hain.' },
    { de: 'üben', pos: 'verb', level: 'B2', en: 'to practise', hi: 'अभ्यास करना', valency: 'üben + Akkusativ', ex: 'Sie übt die neue Grammatik jeden Tag.', exEn: 'She practises the new grammar every day.', exHi: 'Woh har din nayi grammar ka abhyaas karti hain.', conj: { praesens: 'übt', praeteritum: 'übte', perfekt: 'hat geübt' } },
    { de: 'vertraut', pos: 'adjective', level: 'B2', en: 'familiar, intimate', hi: 'परिचित', valency: 'vertraut sein + mit + Dativ', ex: 'Sie bleibt vertraut mit der Verwaltungssprache.', exEn: 'She remains familiar with the administrative language.', exHi: 'Woh prashaasanik bhaasha se parichit banii rehti hain.' },
    { de: 'verurteilen', pos: 'verb', level: 'B2', en: 'to condemn, sentence', hi: 'निंदा करना', valency: 'verurteilen + Akkusativ', ex: 'Man kann sie nicht verurteilen, weil ihr Wunsch bewusst ist.', exEn: 'One cannot condemn her, because her wish is deliberate.', exHi: 'Koi unki ninda nahi kar sakta, kyunki unki ichha sachet hai.', conj: { praesens: 'verurteilt', praeteritum: 'verurteilte', perfekt: 'hat verurteilt' } },
    { de: 'widersprechen', pos: 'verb', level: 'B2', en: 'to contradict', hi: 'विरोध करना', valency: 'widersprechen + Dativ', ex: 'Tatsächlich widersprechen manche Wissenschaftler ihrem Resümee.', exEn: 'Actually, some scientists contradict her summary.', exHi: 'Vaastav mein, kuch vaigyaanik unke saaraansh ka virodh karte hain.', conj: { praesens: 'widerspricht', praeteritum: 'widersprach', perfekt: 'hat widersprochen' } },
    { de: 'Wissenschaftler/in', art: 'der/die', gender: 'm/f', plural: 'Wissenschaftler/innen', pos: 'noun', level: 'B2', en: 'scientist', hi: 'वैज्ञानिक', ex: 'Tatsächlich widersprechen manche Wissenschaftler ihrem Resümee.', exEn: 'Actually, some scientists contradict her summary.', exHi: 'Vaastav mein, kuch vaigyaanik unke saaraansh ka virodh karte hain.' },
    { de: 'Wunsch', art: 'der', gender: 'm', plural: 'Wünsche', pos: 'noun', level: 'B2', en: 'wish', hi: 'इच्छा', ex: 'Man kann sie nicht verurteilen, weil ihr Wunsch bewusst ist.', exEn: 'One cannot condemn her, because her wish is deliberate.', exHi: 'Koi unki ninda nahi kar sakta, kyunki unki ichha sachet hai.' },
    { de: 'ziehen', pos: 'verb', level: 'B2', en: 'to pull, move, draw', hi: 'खींचना, हिलना', valency: 'ziehen + Akkusativ (transitiv) / ziehen nach + Dativ (Bewegung)', ex: 'Sie zieht nächstes Jahr nach Berlin.', exEn: 'She is moving to Berlin next year.', exHi: 'Woh agle saal Berlin ja rahi hain.', conj: { praesens: 'zieht', praeteritum: 'zog', perfekt: 'ist gezogen' } },
    { de: 'zugleich', pos: 'adverb', level: 'B2', en: 'at the same time', hi: 'एक साथ', ex: 'Zugleich gehört die Sprachenvielfalt zu einem wertvollen Thema.', exEn: 'At the same time, linguistic diversity belongs to a valuable topic.', exHi: 'Isi samay, bhaashaayi vividhta ek mulyavaan vishay se sambandhit hai.' },
    { de: 'abgesehen', pos: 'adjective', level: 'B2', en: 'apart from, aside from', hi: 'अलग रखकर', valency: 'abgesehen von + Dativ', ex: 'Abgesehen von den Kosten ist die Studie sehr interessant.', exEn: 'Apart from the costs, the study is very interesting.', exHi: 'Kharch ko alag rakhkar, adhyayan bahut dilchasp hai.' },
    { de: 'anlegen', pos: 'verb', level: 'B2', en: 'to lay out, invest', hi: 'निवेश करना', valency: 'anlegen + Akkusativ', ex: 'Sie legt ihr Geld klug an.', exEn: 'She invests her money wisely.', exHi: 'Woh apna paisa samajhdaari se lagaati hain.', conj: { praesens: 'legt an', praeteritum: 'legte an', perfekt: 'hat angelegt' } },
    { de: 'auffordern', pos: 'verb', level: 'B2', en: 'to call upon, request', hi: 'आह्वान करना', valency: 'auffordern + Akkusativ + zu + Dativ/Infinitiv', ex: 'Deshalb fordert sie die Wanderarbeiter auf, an der Umfrage teilzunehmen.', exEn: 'That\'s why she calls upon the migrant workers to take part in the survey.', exHi: 'Isiliye woh pravaasi mazdooron ko sarvekshan mein bhaag lene ke liye aahvaan karti hain.', conj: { praesens: 'fordert auf', praeteritum: 'forderte auf', perfekt: 'hat aufgefordert' } },
    { de: 'Aufgabenteilung', art: 'die', gender: 'f', plural: 'Aufgabenteilungen', pos: 'noun', level: 'B2', en: 'division of tasks', hi: 'कार्य विभाजन', ex: 'Sie beurteilt auch die Aufgabenteilung zwischen Eltern und Kindern.', exEn: 'She also assesses the division of tasks between parents and children.', exHi: 'Woh maata-pita aur bacchon ke beech kaarya vibhaajan ka bhi moolyaankan karti hain.' },
    { de: 'auslösen', pos: 'verb', level: 'B2', en: 'to trigger, set off', hi: 'भड़काना', valency: 'auslösen + Akkusativ', ex: 'Ihre Beurteilung löst sicherlich eine Diskussion aus.', exEn: 'Her assessment certainly triggers a discussion.', exHi: 'Unka moolyaankan nishchit roop se ek charcha ko bhadkaata hai.', conj: { praesens: 'löst aus', praeteritum: 'löste aus', perfekt: 'hat ausgelöst' } },
    { de: 'austeilen', pos: 'verb', level: 'B2', en: 'to hand out, distribute', hi: 'बाँटना', valency: 'austeilen + Akkusativ', ex: 'Der Lehrer teilt die Ergebnisse aus.', exEn: 'The teacher hands out the results.', exHi: 'Adhyaapak parinaam baantein hain.', conj: { praesens: 'teilt aus', praeteritum: 'teilte aus', perfekt: 'hat ausgeteilt' } },
    { de: 'auszahlen', pos: 'verb', level: 'B2', en: 'to pay off', hi: 'चुकाना', valency: 'sich auszahlen (reflexiv)', ex: 'Die harte Arbeit zahlt sich aus.', exEn: 'The hard work pays off.', exHi: 'Kadi mehnat rang laati hai.', conj: { praesens: 'zahlt aus', praeteritum: 'zahlte aus', perfekt: 'hat ausgezahlt' } },
    { de: 'Kindergartenpflicht', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'compulsory kindergarten', hi: 'अनिवार्य किंडरगार्टन', ex: 'Deshalb fordert sie auf, die Kindergartenpflicht zu überdenken.', exEn: 'That\'s why she calls upon us to reconsider compulsory kindergarten.', exHi: 'Isiliye woh humein anivaarya kindergarten par punarvichaar karne ke liye aahvaan karti hain.' },
    { de: 'Kleinkriminellenstudie', art: 'die', gender: 'f', plural: 'Kleinkriminellenstudien', pos: 'noun', level: 'B2', en: 'petty-criminal study', hi: 'छोटे-अपराधी अध्ययन', ex: 'Ich interessiere mich für die Kleinkriminellenstudie.', exEn: 'I\'m interested in the petty-criminal study.', exHi: 'Mujhe chhote-aparaadhi adhyayan mein ruchi hai.' },
    { de: 'Kneipenbesitzer/in', art: 'der/die', gender: 'm/f', plural: 'Kneipenbesitzer/innen', pos: 'noun', level: 'B2', en: 'pub owner', hi: 'पब मालिक', ex: 'Der Kneipenbesitzer kennt alle Gäste.', exEn: 'The pub owner knows all the guests.', exHi: 'Pub maalik sabhi mehmaanon ko jaante hain.' },
    { de: 'Kommilitone/Kommilitonin', art: 'der/die', gender: 'm/f', plural: 'Kommilitonen/Kommilitoninnen', pos: 'noun', level: 'B2', en: 'fellow student', hi: 'सहपाठी', ex: 'Meine Kommilitonin hilft mir mit der Studie.', exEn: 'My fellow student helps me with the study.', exHi: 'Meri sahapaathi mujhe adhyayan mein madad karti hain.' },
    { de: 'Migrantenfamilie', art: 'die', gender: 'f', plural: 'Migrantenfamilien', pos: 'noun', level: 'B2', en: 'migrant family', hi: 'प्रवासी परिवार', ex: 'Die Sprachwissenschaftlerin hilft den Migrantenfamilien.', exEn: 'The linguist helps the migrant families.', exHi: 'Bhaashaavid pravaasi parivaaron ki madad karti hain.' },
    { de: 'Nichtschwimmer/in', art: 'der/die', gender: 'm/f', plural: 'Nichtschwimmer/innen', pos: 'noun', level: 'B2', en: 'non-swimmer', hi: 'तैरना न जानने वाला', ex: 'Der Nichtschwimmer bleibt im flachen Wasser.', exEn: 'The non-swimmer stays in the shallow water.', exHi: 'Tairna na jaanne waala kam gehre paani mein rehta hai.' },
    { de: 'Sprachenvielfalt', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'linguistic diversity', hi: 'भाषाई विविधता', ex: 'Zugleich gehört die Sprachenvielfalt zu einem wertvollen Thema.', exEn: 'At the same time, linguistic diversity belongs to a valuable topic.', exHi: 'Isi samay, bhaashaayi vividhta ek mulyavaan vishay se sambandhit hai.' },
    { de: 'Verwaltungssprache', art: 'die', gender: 'f', plural: 'Verwaltungssprachen', pos: 'noun', level: 'B2', en: 'administrative language', hi: 'प्रशासनिक भाषा', ex: 'Sie bleibt vertraut mit der Verwaltungssprache.', exEn: 'She remains familiar with the administrative language.', exHi: 'Woh prashaasanik bhaasha se parichit banii rehti hain.' },
    { de: 'Wanderarbeiter/in', art: 'der/die', gender: 'm/f', plural: 'Wanderarbeiter/innen', pos: 'noun', level: 'B2', en: 'migrant worker', hi: 'प्रवासी मज़दूर', ex: 'Deshalb fordert sie die Wanderarbeiter auf, an der Umfrage teilzunehmen.', exEn: 'That\'s why she calls upon the migrant workers to take part in the survey.', exHi: 'Isiliye woh pravaasi mazdooron ko sarvekshan mein bhaag lene ke liye aahvaan karti hain.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Valenz?',
      body: [ 'Every German verb decides how many, and which kind, of complements it needs. Think of every verb as having its own grammar recipe.' ],
      table: {
        head: ['Verb', 'Pattern', 'Example'],
        rows: [
          ['schlafen', 'only subject', '<span class="de">Ich schlafe.</span>'],
          ['kaufen', 'subject + Akkusativ', '<span class="de">Ich kaufe ein Buch.</span>'],
          ['helfen', 'subject + Dativ', '<span class="de">Ich helfe meinem Freund.</span>']
        ]
      },
      hinglish: 'Har German verb khud decide karta hai ki usse kitne aur kis tarah ke complements chahiye. Simple way mein samjho \u2014 har verb ka apna ek grammar recipe hota hai.'
    },
    {
      title: 'Fünf Valenzmuster',
      body: [ 'These are the five most common valency patterns you\'ll encounter at B2.' ],
      table: {
        head: ['Pattern', 'Verbs'],
        rows: [
          ['Subjekt allein', 'schlafen, arbeiten, reisen, leben'],
          ['Subjekt + Akkusativ', 'kaufen, sehen, lesen, verstehen, kennen, besuchen'],
          ['Subjekt + Dativ', 'helfen, folgen, gefallen, gehören, danken, vertrauen'],
          ['Subjekt + Genitiv (selten)', 'bedürfen, gedenken'],
          ['Subjekt + Präposition', 'warten auf, denken an, abhängen von, gehören zu, bestehen aus, sich interessieren für, teilnehmen an, sich kümmern um, sich freuen auf, sich entschuldigen für']
        ]
      },
      hinglish: 'Yeh B2 ke sabse common paanch valency patterns hain.'
    },
    {
      title: 'Gleiche Bedeutung, andere Valenz',
      body: [ 'Verbs with similar meanings can still require completely different complements — the verb decides, not the meaning.' ],
      table: {
        head: ['Wrong assumption', 'Correct valency'],
        rows: [
          ['"warten" + Akk.', '<span class="de">warten auf</span> + Akk.'],
          ['"helfen" + Akk.', '<span class="de">helfen</span> + Dativ'],
          ['"denken" + Akk.', '<span class="de">denken an</span> + Akk.']
        ]
      },
      hinglish: 'Do verbs ka matlab milta-julta ho, phir bhi unke complements bilkul alag ho sakte hain. Yahan faisla verb karta hai, uska meaning nahi — isliye English dekh kar guess karna kaam nahi aata.'
    },
    {
      title: 'Bedeutungsänderung durch Valenz',
      body: [ 'Some verbs keep the same stem but change their meaning completely depending on which preposition or case follows. Here the verb really is the same word \u2014 only the complement moves, and the meaning moves with it.' ],
      table: {
        head: ['Verb + complement', 'Meaning', 'Example'],
        rows: [
          ['bestehen + Akkusativ', 'to pass (an exam)', '<span class="de">Ich habe die Prüfung bestanden.</span>'],
          ['bestehen aus + Dativ', 'to consist of', '<span class="de">Das Team besteht aus vier Personen.</span>'],
          ['bestehen auf + Dativ', 'to insist on', '<span class="de">Er besteht auf seiner Meinung.</span>'],
          ['halten + Akkusativ', 'to hold', '<span class="de">Ich halte das Buch.</span>'],
          ['halten von + Dativ', 'to think of / rate', '<span class="de">Was hältst du von dem Plan?</span>'],
          ['halten für + Akkusativ', 'to consider (to be)', '<span class="de">Ich halte ihn für kompetent.</span>']
        ]
      },
      hinglish: 'Kuch verbs ka stem wahi rehta hai, par complement badalne se matlab poora badal jaata hai. Jaise <b>bestehen</b> \u2014 Akkusativ ke saath matlab \u201cpass karna\u201d, <b>aus</b> ke saath \u201cbanna/consist karna\u201d, aur <b>auf</b> ke saath \u201czid karna\u201d. Isliye verb ke saath uska preposition aur case bhi yaad rakhna zaroori hai.'
    },
    {
      title: 'Ein Verb-Wörterbuch aufbauen',
      body: [ 'The best B2 learning strategy: never learn a verb alone. Always learn it with its full valency pattern.' ],
      table: {
        head: ['Never learn', 'Instead learn'],
        rows: [
          ['helfen', 'helfen + Dativ'],
          ['warten', 'warten auf + Akk.'],
          ['abhängen', 'abhängen von + Dativ']
        ]
      },
      hinglish: 'B2 par sabse kaam ki aadat yeh hai \u2014 verb ko akela mat yaad karo. Hamesha uske saath uska case aur preposition bhi yaad karo, warna sentence banate waqt guess karna padega.'
    },
    {
      title: 'Valenz im Berufsleben',
      body: [ 'These patterns appear constantly in formal, professional, and university German.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Die Entscheidung hängt von mehreren Faktoren ab. Viele Studenten nehmen an dem Seminar teil. Die Ergebnisse beziehen sich auf die aktuelle Studie. Das Unternehmen verfügt über moderne Technologien.</span>']
        ]
      },
      hinglish: 'Yeh patterns formal, professional aur university German mein lagataar aate hain.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from using the wrong case or omitting the required preposition.' ],
      mistakes: [
        { wrong: 'Ich helfe meinen Bruder.', right: 'Ich helfe meinem Bruder.', why: '"helfen" always requires Dativ, not Akkusativ.' },
        { wrong: 'Ich warte den Bus.', right: 'Ich warte auf den Bus.', why: '"warten" requires the fixed preposition "auf" + Akkusativ.' },
        { wrong: 'Ich denke Deutschland.', right: 'Ich denke an Deutschland.', why: '"denken" requires the fixed preposition "an" + Akkusativ.' },
        { wrong: 'Ich interessiere Musik.', right: 'Ich interessiere mich für Musik.', why: '"sich interessieren" is reflexive and requires "für" + Akkusativ.' },
        { wrong: 'Ich nehme das Seminar teil.', right: 'Ich nehme an dem Seminar teil.', why: '"teilnehmen" requires the fixed preposition "an" + Dativ.' }
      ],
      hinglish: 'Yeh galtiyaan galat case use karne se, ya required preposition chhod dene se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Verb valency is essential for building accurate, complex Goethe B2 sentences in reading, writing, and speaking.' ],
      note: 'Memory trick: a German verb is like a lock — only the correct grammatical key (case + preposition) opens it. Learning a new verb? Never memorize only the infinitive — memorize verb + case + preposition + one example sentence.',
      hinglish: 'Verb valency Goethe B2 ke reading, writing aur speaking mein accurate, complex sentences banaane ke liye zaroori hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Wissenschaftsnachricht: Zweisprachigkeit im Kindesalter',
    titleEn: 'Science news: bilingualism in childhood',
    tokens: [
      { w: 'Eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Gruppe', role: 'plain', en: 'group', hi: 'समूह', type: 'Noun · fem.' },
      { w: 'von', role: 'plain', en: 'of', hi: 'के', type: 'Preposition · Dat.' },
      { w: 'Sprachwissenschaftlern', role: 'plain', en: 'linguists', hi: 'भाषाविद', type: 'Noun · plural', why: 'der/die Sprachwissenschaftler/in (this chapter).' },
      { w: 'hat', role: 'plain', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'kürzlich', role: 'plain', en: 'recently', hi: 'हाल ही में', type: 'Adverb' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Studie', role: 'plain', en: 'study', hi: 'अध्ययन', type: 'Noun · fem.' },
      { w: 'zur', role: 'plain', en: 'on the', hi: 'पर', type: 'Contraction · zu der' },
      { w: 'Sprachentwicklung', role: 'plain', en: 'language development', hi: 'भाषा विकास', type: 'Noun · fem.', why: 'die Sprachentwicklung (this chapter).' },
      { w: 'von', role: 'plain', en: 'of', hi: 'के', type: 'Preposition · Dat.' },
      { w: 'Kindern', role: 'plain', en: 'children', hi: 'बच्चों', type: 'Noun · plural' },
      { w: 'aus', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'Migrantenfamilien', role: 'plain', en: 'migrant families (Satzende)', hi: 'प्रवासी परिवारों (Satzende)', type: 'Noun · plural', why: 'die Migrantenfamilie (this chapter).' },
      { w: 'vorgestellt', role: 'plain', en: 'presented (Satzende)', hi: 'प्रस्तुत की (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the', hi: 'ये', type: 'Article' },
      { w: 'Forscher', role: 'r-verb', en: 'researchers (Verb + Dativergänzung folgt)', hi: 'शोधकर्ता', type: 'Noun · plural' },
      { w: 'widersprechen', role: 'r-verb', en: 'contradict (Valenz: + Dativ)', hi: 'विरोध करते हैं (Valenz: + Dativ)', type: 'Verb · widersprechen + Dat.', why: 'widersprechen takes a Dativ object (not Akkusativ) — its Valenz, or valency (this chapter).' },
      { w: 'damit', role: 'plain', en: 'with this', hi: 'इसके साथ', type: 'Pronominaladverb' },
      { w: 'einem', role: 'plain', en: 'a (neut. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'weitverbreiteten', role: 'plain', en: 'widespread', hi: 'व्यापक', type: 'Adjective' },
      { w: 'Vorurteil', role: 'plain', en: 'prejudice (Satzende, Dativobjekt)', hi: 'पूर्वाग्रह (Satzende)', type: 'Noun · neut. · Dativobjekt' },
      { w: ':', plain: true },
      { w: 'Zweisprachigkeit', role: 'plain', en: 'bilingualism', hi: 'द्विभाषिता', type: 'Noun · fem.' },
      { w: 'verzögere', role: 'plain', en: 'supposedly delays (Konjunktiv I)', hi: 'कथित रूप से देरी करती है', type: 'Verb · Konjunktiv I' },
      { w: 'angeblich', role: 'plain', en: 'allegedly', hi: 'कथित रूप से', type: 'Adverb' },
      { w: 'die', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Sprachentwicklung', role: 'plain', en: 'language development', hi: 'भाषा विकास', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Tatsächlich', role: 'plain', en: 'in fact', hi: 'वास्तव में', type: 'Adverb', why: 'tatsächlich (this chapter).' },
      { w: 'zeigt', role: 'plain', en: 'shows', hi: 'दिखाती है', type: 'Verb · zeigen' },
      { w: 'die', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Untersuchung', role: 'plain', en: 'investigation', hi: 'जाँच', type: 'Noun · fem.' },
      { w: 'das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Gegenteil', role: 'plain', en: 'opposite (Satzende, Akkusativobjekt)', hi: 'विपरीत (Satzende)', type: 'Noun · neut. · Akkusativobjekt' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the', hi: 'ये', type: 'Article' },
      { w: 'Wissenschaftler', role: 'plain', en: 'scientists', hi: 'वैज्ञानिक', type: 'Noun · plural', why: 'der/die Wissenschaftler/in (this chapter).' },
      { w: 'beurteilen', role: 'r-verb', en: 'assess (Valenz: + Akk. + als)', hi: 'आँकते हैं (Valenz: + Akk. + als)', type: 'Verb · beurteilen + Akk. + als', why: 'beurteilen takes a direct Akkusativ object plus an "als" phrase — its full valency (this chapter).' },
      { w: 'mehrsprachig', role: 'plain', en: 'multilingually', hi: 'बहुभाषी रूप से', type: 'Adjective' },
      { w: 'aufwachsende', role: 'plain', en: 'growing-up', hi: 'बड़े होते हुए', type: 'Adjective (Partizip I)' },
      { w: 'Kinder', role: 'plain', en: 'children (Akkusativobjekt)', hi: 'बच्चों (Akkusativobjekt)', type: 'Noun · plural · Akkusativobjekt' },
      { w: 'sogar', role: 'plain', en: 'even', hi: 'यहाँ तक कि', type: 'Adverb' },
      { w: 'als', role: 'plain', en: 'as', hi: 'के रूप में', type: 'Präposition (Valenzergänzung)' },
      { w: 'sprachlich', role: 'plain', en: 'linguistically', hi: 'भाषाई रूप से', type: 'Adverb' },
      { w: 'flexibler', role: 'plain', en: 'more flexible (Satzende)', hi: 'अधिक लचीला (Satzende)', type: 'Adjective · Komparativ' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Kommilitone', role: 'plain', en: 'fellow student', hi: 'सहपाठी', type: 'Noun · masc.', why: 'der/die Kommilitone/Kommilitonin (this chapter).' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'की', type: 'Article · Genitiv' },
      { w: 'Studienleiterin', role: 'plain', en: 'study leader (f.)', hi: 'अध्ययन प्रमुख', type: 'Noun · fem.' },
      { w: 'erklärt', role: 'plain', en: 'explains', hi: 'बताता है', type: 'Verb · erklären' },
      { w: ',', plain: true },
      { w: 'man', role: 'plain', en: 'one', hi: 'कोई', type: 'Pronoun · impersonal' },
      { w: 'müsse', role: 'plain', en: 'must (Konjunktiv I)', hi: 'चाहिए', type: 'Verb · Modalverb (Konjunktiv I)' },
      { w: 'den', role: 'plain', en: 'the (dat. pl.)', hi: 'इन', type: 'Article · Dat.' },
      { w: 'Kindern', role: 'plain', en: 'children (Dativobjekt)', hi: 'बच्चों (Dativobjekt)', type: 'Noun · plural · Dativobjekt' },
      { w: 'lediglich', role: 'plain', en: 'merely', hi: 'केवल', type: 'Adverb' },
      { w: 'vertraute', role: 'plain', en: 'familiar', hi: 'परिचित', type: 'Adjective', why: 'vertraut (this chapter).' },
      { w: 'Umgebungen', role: 'plain', en: 'environments (Akkusativobjekt)', hi: 'माहौल (Akkusativobjekt)', type: 'Noun · plural · Akkusativobjekt' },
      { w: 'bieten', role: 'plain', en: 'offer (Satzende)', hi: 'प्रदान करना (Satzende)', type: 'Verb · bieten + Dat. + Akk. (Nebensatz, Satzende)', why: 'bieten takes both a Dativ (den Kindern) and Akkusativ (Umgebungen) object — full valency.' },
      { w: ',', plain: true },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'denen', role: 'plain', en: 'which', hi: 'जिनमें', type: 'Relativpronomen · Dat. Pl.' },
      { w: 'sie', role: 'plain', en: 'they', hi: 'वे', type: 'Pronoun' },
      { w: 'beide', role: 'plain', en: 'both', hi: 'दोनों', type: 'Determiner' },
      { w: 'Sprachen', role: 'plain', en: 'languages', hi: 'भाषाएँ', type: 'Noun · plural' },
      { w: 'üben', role: 'plain', en: 'practise (Satzende)', hi: 'अभ्यास करना (Satzende)', type: 'Verb · üben (Satzende)', why: 'üben (this chapter).' },
      { w: 'können', role: 'plain', en: 'can (Satzende)', hi: 'सकते हैं (Satzende)', type: 'Verb · Modalverb (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the', hi: 'ये', type: 'Article' },
      { w: 'Forscher', role: 'plain', en: 'researchers', hi: 'शोधकर्ता', type: 'Noun · plural' },
      { w: 'fordern', role: 'plain', en: 'demand', hi: 'माँग करते हैं', type: 'Verb · fordern' },
      { w: 'deshalb', role: 'plain', en: 'therefore', hi: 'इसलिए', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Kindergartenpflicht', role: 'plain', en: 'compulsory kindergarten attendance', hi: 'अनिवार्य किंडरगार्टन', type: 'Noun · fem.', why: 'die Kindergartenpflicht (this chapter).' },
      { w: 'stärker', role: 'plain', en: 'more strongly', hi: 'अधिक मज़बूती से', type: 'Adverb · Komparativ' },
      { w: 'an', role: 'plain', en: 'to', hi: 'के अनुसार', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'tatsächliche', role: 'plain', en: 'actual', hi: 'वास्तविक', type: 'Adjective' },
      { w: 'Sprachenvielfalt', role: 'plain', en: 'linguistic diversity', hi: 'भाषाई विविधता', type: 'Noun · fem.', why: 'die Sprachenvielfalt (this chapter).' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (dat. pl.)', hi: 'इन', type: 'Article · Dat.' },
      { w: 'Städten', role: 'plain', en: 'cities', hi: 'शहरों', type: 'Noun · plural' },
      { w: 'anzupassen', role: 'plain', en: 'to adapt (Satzende)', hi: 'अनुकूल बनाना (Satzende)', type: 'Verb · anpassen (Infinitiv mit zu, Satzende)' },
      { w: '.', plain: true },
      { w: 'Im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Resümee', role: 'plain', en: 'summary', hi: 'सारांश', type: 'Noun · neut.', why: 'das Resümee (this chapter).' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'के', type: 'Article · Genitiv' },
      { w: 'Studie', role: 'plain', en: 'study', hi: 'अध्ययन', type: 'Noun · fem.' },
      { w: 'heißt', role: 'plain', en: 'it says', hi: 'कहा गया है', type: 'Verb · es heißt' },
      { w: 'es', role: 'plain', en: 'it', hi: 'यह', type: 'Pronoun' },
      { w: ',', plain: true },
      { w: 'sicherlich', role: 'plain', en: 'certainly', hi: 'निश्चित रूप से', type: 'Adverb', why: 'sicherlich (this chapter).' },
      { w: 'brauche', role: 'plain', en: 'needs (Konjunktiv I)', hi: 'ज़रूरत है', type: 'Verb · brauchen (Konjunktiv I)' },
      { w: 'jedes', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Kind', role: 'plain', en: 'child', hi: 'बच्चा', type: 'Noun · neut.' },
      { w: 'zugleich', role: 'plain', en: 'at once', hi: 'एक साथ', type: 'Adverb', why: 'zugleich (this chapter).' },
      { w: 'Geduld', role: 'plain', en: 'patience', hi: 'धैर्य', type: 'Noun · fem.' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'Übung', role: 'plain', en: 'practice (Satzende)', hi: 'अभ्यास (Satzende)', type: 'Noun · fem.' },
      { w: '–', plain: true },
      { w: 'doch', role: 'plain', en: 'yet', hi: 'फिर भी', type: 'Konjunktion' },
      { w: 'von', role: 'plain', en: 'of', hi: 'की', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (masc. dat.)', hi: 'किसी', type: 'Article · Dat.' },
      { w: 'Nachteil', role: 'plain', en: 'disadvantage', hi: 'नुक़सान', type: 'Noun · masc.' },
      { w: 'könne', role: 'plain', en: 'can (Konjunktiv I, Satzende)', hi: 'सकता (Satzende)', type: 'Verb · Modalverb (Konjunktiv I)' },
      { w: 'keine', role: 'plain', en: 'no', hi: 'कोई नहीं', type: 'Negation' },
      { w: 'Rede', role: 'plain', en: 'talk (Satzende)', hi: 'बात (Satzende)', type: 'Noun · fem.', why: '"keine Rede sein" — a fixed idiom meaning "out of the question".' },
      { w: 'sein', role: 'plain', en: 'be (Satzende)', hi: 'होना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'A group of linguists recently presented a study on the language development of children from migrant families. The researchers thereby contradict a widespread prejudice: bilingualism supposedly delays language development. In fact, the investigation shows the opposite. The scientists even assess multilingually raised children as more linguistically flexible. A fellow student of the study leader explains that one merely needs to offer children familiar environments in which they can practise both languages. The researchers therefore demand that compulsory kindergarten attendance be adapted more strongly to the actual linguistic diversity in cities. The study\'s summary states that certainly every child needs patience and practice at once — but there can be no talk of a disadvantage.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_008_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Runa, wie bewertest du die neue Studie zu Migrantenfamilien?', en: 'Runa, how do you assess the new study on migrant families?' },
      { id: 'B2_008_L002', speaker: 'Runa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich halte sie für sehr wichtig, sie widerlegt einige alte Annahmen.', en: 'I consider it very important, it disproves some old assumptions.' },
      { id: 'B2_008_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Widerspricht sie denn den älteren Ergebnissen komplett?', en: 'Does it contradict the older results completely?' },
      { id: 'B2_008_L004', speaker: 'Runa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nicht komplett, aber sie stellt sie deutlich infrage.', en: 'Not completely, but it clearly questions them.' }
    ],
    transcript: 'Runa, wie bewertest du die neue Studie zu Migrantenfamilien? Ich halte sie für sehr wichtig, sie widerlegt einige alte Annahmen. Widerspricht sie denn den älteren Ergebnissen komplett? Nicht komplett, aber sie stellt sie deutlich infrage.',
    translation: 'Runa, how do you assess the new study on migrant families? I consider it very important, it disproves some old assumptions. Does it contradict the older results completely? Not completely, but it clearly questions them.',
    tokens: [
      { w: 'Runa' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'bewertest' },
      { w: 'du' },
      { w: 'die' },
      { w: 'neue' },
      { w: 'Studie' },
      { w: 'zu' },
      { w: 'Migrantenfamilien' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'halte' },
      { w: 'sie' },
      { w: 'für' },
      { w: 'sehr' },
      { w: 'wichtig' },
      { w: ',', plain: true },
      { w: 'sie' },
      { w: 'widerlegt' },
      { w: 'einige' },
      { w: 'alte' },
      { w: 'Annahmen' },
      { w: '.', plain: true },
      { w: 'Widerspricht' },
      { w: 'sie' },
      { w: 'denn' },
      { w: 'den' },
      { w: 'älteren' },
      { w: 'Ergebnissen' },
      { w: 'komplett' },
      { w: '?', plain: true },
      { w: 'Nicht' },
      { w: 'komplett' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'sie' },
      { w: 'stellt' },
      { w: 'sie' },
      { w: 'deutlich' },
      { w: 'infrage' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie bewertet Runa die Studie?', qEn: 'How does Runa assess the study?', options: ['unwichtig', 'sehr wichtig', 'fehlerhaft', 'uninteressant'], optionsEn: ['unimportant', 'very important', 'faulty', 'uninteresting'], answer: 1,
        explain: '"Ich halte sie für sehr wichtig."' },
      { q: 'Widerspricht die Studie den älteren Ergebnissen vollständig?', qEn: 'Does the study fully contradict older results?', options: ['Ja, komplett', 'Nein, aber sie stellt sie infrage', 'Nein, sie bestätigt sie', 'Das ist unklar'], optionsEn: ['Yes, completely', 'No, but she questions them', 'No, it confirms them', 'That is unclear'], answer: 1,
        explain: '"Nicht komplett, aber sie stellt sie deutlich infrage."' }
    ]
  },

  

  // ---------- Speaking prompts (Anna/Rohan role-play only) ----------
  speaking: [
    { task: "Eine Kollegin fragt, wie du die neue Studie bewertest.", taskEn: "A colleague asks how you assess the new study.", de: "Ich halte sie für sehr wichtig, sie widerlegt einige alte Annahmen.", en: "I consider it very important, it refutes some old assumptions." },
    { task: "Sie fragt, ob die Studie älteren Arbeiten widerspricht.", taskEn: "She asks whether the study contradicts older work.", de: "Sie widerspricht den älteren Arbeiten in zwei Punkten.", en: "It contradicts the older work on two points." },
    { task: "Ein Kollege fragt, was du der Wissenschaftlerin sagst.", taskEn: "A colleague asks what you'll say to the scientist.", de: "Ich danke ihr für die Daten und gratuliere ihr zur Auszeichnung.", en: "I thank her for the data and congratulate her on the award." },
    { task: "Deine Chefin fragt, was du von dem Vorschlag hältst.", taskEn: "Your boss asks what you think of the proposal.", de: "Ich halte den Vorschlag für sinnvoll, aber ich vertraue den Zahlen nicht ganz.", en: "I consider the proposal sensible, but I don't fully trust the figures." },
    { task: "Ein Praktikant fragt, wem du bei der Auswertung hilfst.", taskEn: "An intern asks who you're helping with the analysis.", de: "Ich helfe der Kollegin und erkläre ihr die Sprachentwicklung.", en: "I'm helping the colleague and explaining language development to her." },
    { task: "Rollenspiel: Ihr stellt die Studie im Kolloquium vor.", taskEn: "Role-play: you present the study in the colloquium.", de: "Wir beziehen uns auf die Daten. — Und wir verzichten auf ein Urteil über die Familien.", en: "We refer to the data. — And we refrain from judging the families." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short report or email (six to eight sentences) about a research project or workplace topic — using at least five verbs with different valency patterns (at least one Akkusativ verb, one Dativ verb, and two prepositional verbs like abhängen von, sich interessieren für, teilnehmen an, or bestehen aus).',
    starters: ['Ich helfe …', 'Es hängt von … ab.', 'Ich interessiere mich für …', 'Die Studie besteht aus …'],
    placeholder: 'Die Sprachwissenschaftlerin hilft den Migrantenfamilien. Ihre Forschung hängt von …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which case does "helfen" require?',
      options: ['Dativ', 'Akkusativ', 'Genitiv'],
      answer: 0,
      explain: '"helfen" always requires Dativ — never memorize it without this pattern.'
    },
    gap: {
      sentence: ['Es hängt ', ' der Sprachentwicklung ab.'],
      gaps: [ { answer: 'von', accepts: ['von'] } ],
      explain: '"abhängen von" is the fixed valency pattern — always + Dativ.'
    },
    match: {
      q: 'Match each verb to its valency pattern.',
      pairs: [
        { noun: 'schlafen', art: 'nur Subjekt' },
        { noun: 'kaufen', art: '+ Akkusativ' },
        { noun: 'helfen', art: '+ Dativ' },
        { noun: 'warten', art: 'auf + Akkusativ' }
      ]
    },
    builder: {
      target: 'Build: "I am interested in the study."',
      bank: ['Ich', 'interessiere', 'mich', 'für', 'die', 'Studie', '.'],
      answer: ['Ich', 'interessiere', 'mich', 'für', 'die', 'Studie', '.'],
      roles: { 'für': 'r-val', 'die': 'r-val', 'Studie': 'r-val' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich helfe meinen Bruder.',
      right: 'Ich helfe meinem Bruder.',
      explain: '"helfen" always requires Dativ, not Akkusativ.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which valency pattern does "warten" have?', options: ['auf + Akkusativ', '+ Akkusativ alone', '+ Genitiv'], answer: 0,
      explain: '"warten" always requires the fixed preposition "auf" + Akkusativ.' },
    { q: 'Complete: "Die Studie besteht ___ zwei Teilen."', options: ['aus', 'von', 'für'], answer: 0,
      explain: '"bestehen aus" is the fixed valency pattern — + Dativ.' },
    { q: 'What is the best strategy for learning a new verb?', options: ['Memorize only the infinitive', 'Memorize verb + case + preposition + example', 'Memorize only the meaning'], answer: 1,
      explain: 'Never memorize a verb alone — always learn it with its complete valency pattern and an example sentence.' },
    { q: 'Which case does "widersprechen" require?', options: ['Dativ', 'Akkusativ', 'Genitiv'], answer: 0,
      explain: '"widersprechen" always requires Dativ.' },
    { q: 'Which sentence contains an error?', options: ['Ich helfe meinem Freund.', 'Ich helfe meinen Freund.', 'Ich interessiere mich für Kunst.'], answer: 1,
      explain: '"helfen" requires Dativ — it should be "Ich helfe meinem Freund."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-val', html: 'Every German verb has its own fixed valency pattern — how many complements it needs, and in which case or preposition.' },
    { c: 'r-val', html: 'The five common patterns: subject only, subject+Akkusativ, subject+Dativ, subject+Genitiv (rare), and subject+preposition.' },
    { c: 'r-val', html: 'Never memorize a verb alone — always memorize verb + case + preposition + one example sentence together.' }
  ],
  revisionTips: [
    'Build a personal verb dictionary where every entry includes the full valency pattern, not just the infinitive.',
    'When you learn a new verb, immediately write one example sentence using its correct complement.',
    'Review the five valency patterns until sorting a new verb into its pattern feels automatic.'
  ]
};

window.CHAPTER = CHAPTER;
