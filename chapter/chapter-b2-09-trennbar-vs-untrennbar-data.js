/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 9
   "Trennbar vs. untrennbar (Bedeutungsunterschiede)" — separable
   vs inseparable prefixed verbs, and how prefixes create entirely
   new meanings from the same base verb (kommen → ankommen,
   mitkommen, zurückkommen, bekommen, entkommen). Teaches the
   logic behind prefixes, not memorized lists.
   IMPORTANT: dialogue uses ONLY Insa and Timo.
   Vocabulary source: uploaded chapter-9 list (33 items, user-edited
   general B2 vocabulary bank — weather/communication/conflict themes).
============================================================ */
const CHAPTER = {
  id: 'b2-09-trennbar-vs-untrennbar',
  phase: 'B2 · Phase 1',
  number: 9,
  title: 'Trennbar vs. untrennbar (Bedeutungsunterschiede)',
  titleEn: 'Separable vs inseparable verbs (meaning differences)',
  description: 'Learn the logic behind German prefixes — how ankommen, mitkommen, bekommen, and entkommen all grow from "kommen" but mean something entirely different.',
  xp: 380,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 10, title: 'Häufige B2-Verben (trennbar & untrennbar)', titleEn: 'High-frequency B2 verbs (separable & inseparable)' , href: 'chapter-b2-10-haeufige-b2-verben.html' },

  prevChapter: { number: 8, title: 'Valenz von Verben', titleEn: 'Verb valency', href: 'chapter-b2-08-valenz-von-verben.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'One verb, <em>many prefixes.</em>',
    intro: 'A sudden storm outside mirrors a workplace argument between Insa and Timo — she listens closely, he accepts her opinion, both feel calmer after an "I-message" — every prefixed verb here reveals a different meaning from the same root.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear separable verbs split apart and inseparable verbs stay whole'
    ],
    scene: 'Das Gewitter im Büro',
    femaleSpeakers: ['Insa'],
    dialogue: [
      { speaker: 'Insa', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · formal es' },
        { w: 'gewittert', role: 'r-verb', en: 'is thundering', hi: 'आंधी आ रही है', pron: 'ge-VI-tert', type: 'Verb · gewittern', why: 'gewittern = to have a thunderstorm (this chapter).', ex: 'Es gewittert draußen.', exEn: 'It is thundering outside.' },
        { w: 'draußen', role: 'r-place', en: 'outside', hi: 'बाहर', pron: 'DROW-sen', type: 'Adverb · place' },
        { w: 'stark', role: 'r-akkusativ', en: 'strongly', hi: 'ज़ोर से', pron: 'shtark', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'It is thundering strongly outside.', hi: 'Bahar zor se aandhi aa rahi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'चाहिए', pron: 'MÜ-sen', type: 'Modal · müssen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'uns', role: 'r-akkusativ', en: 'ourselves', hi: 'ख़ुद को', pron: 'uns', type: 'Reflexive pronoun' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'से', pron: 'mit', type: 'Preposition' },
        { w: 'unserem', role: 'r-dativ', en: 'our (masc. dat.)', hi: 'हमारी', pron: 'UN-ze-raym', type: 'Possessive · dative' },
        { w: 'Streit', role: 'r-dativ', en: 'argument (dat.)', hi: 'बहस से', pron: 'shtryte', type: 'Noun · masc. dat.' },
        { w: 'herumschlagen', role: 'r-verb', en: 'deal with', hi: 'निपटना', pron: 'he-RUM-shlah-gen', type: 'Verb · infinitive (Satzende)', why: 'sich mit etwas herumschlagen = to grapple with something, trennbar verb (this chapter).', ex: 'Wir schlagen uns mit dem Streit herum.', exEn: 'We grapple with the argument.' },
        { w: '.', plain: true }
      ], en: 'Then we must deal with our argument.', hi: 'Toh humein apni bahas se nipatna padega.' },
      { speaker: 'Insa', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'höre', role: 'r-verb', en: 'listen', hi: 'सुनती हूँ', pron: 'HÖ-ruh', type: 'Verb · hinhören', lexicalUnit: 'hinhören', why: 'hinhören = to listen closely, trennbar verb (this chapter).', ex: 'Ich höre dir hin.', exEn: 'I listen closely to you.' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'hin', role: 'r-verb', en: '(prefix of hinhören)', hi: '', lexicalUnit: 'hinhören', pron: 'hin', type: 'Separable prefix · Satzende' },
        { w: '.', plain: true }
      ], en: 'Good. I listen closely to you.', hi: 'Achha. Main tumhe dhyaan se sunti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nehme', role: 'r-verb', en: 'accept', hi: 'स्वीकार करता हूँ', pron: 'NAY-muh', type: 'Verb · hinnehmen', lexicalUnit: 'hinnehmen', why: 'hinnehmen = to accept/put up with, trennbar verb (this chapter).', ex: 'Ich nehme deine Meinung hin.', exEn: 'I accept your opinion.' },
        { w: 'deine', role: 'r-akkusativ', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive · acc.' },
        { w: 'Meinung', role: 'r-akkusativ', en: 'opinion', hi: 'राय', pron: 'MY-nung', type: 'Noun · fem.' },
        { w: 'hin', role: 'r-verb', en: '(prefix of hinnehmen)', hi: '', pron: 'hin', type: 'Separable prefix · Satzende', lexicalUnit: 'hinnehmen' },
        { w: '.', plain: true }
      ], en: 'And I accept your opinion.', hi: 'Aur main tumhaari raay sweekaar karta hoon.' },
      { speaker: 'Insa', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'spüre', role: 'r-verb', en: 'feel', hi: 'महसूस करती हूँ', pron: 'SHPÜ-ruh', type: 'Verb · spüren' },
        { w: 'mehr', role: 'r-akkusativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner' },
        { w: 'Ruhe', role: 'r-akkusativ', en: 'calm', hi: 'शांति', pron: 'ROO-uh', type: 'Noun · fem.' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'I feel more calm now.', hi: 'Mujhe ab zyada shaanti mehsoos ho rahi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Eine', role: 'r-akkusativ', en: 'an (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Ich-Botschaft', role: 'r-akkusativ', en: 'I-message', hi: 'मैं-संदेश', pron: 'IKH-boht-shaft', type: 'Noun · fem.', why: 'die Ich-Botschaft = a communication technique (this chapter).', ex: 'eine Ich-Botschaft senden' },
        { w: 'hilft', role: 'r-verb', en: 'helps', hi: 'मदद करती है', pron: 'hilft', type: 'Verb · helfen' },
        { w: 'uns', role: 'r-dativ', en: 'us', hi: 'हमारी', pron: 'uns', type: 'Pronoun · dative' },
        { w: 'beiden', role: 'r-dativ', en: 'both (dat.)', hi: 'दोनों की', pron: 'BY-den', type: 'Pronoun · dative' },
        { w: '.', plain: true }
      ], en: 'A I-message helps both of us.', hi: 'Mai-sandesh hum dono ki madad karta hai.' },
      { speaker: 'Insa', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Wenn', role: 'r-conjunction', en: 'when', hi: 'जब', pron: 'ven', type: 'Conjunction · wenn' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'donnert', role: 'r-verb', en: 'thunders', hi: 'गरजता है', pron: 'DO-nert', type: 'Verb · donnern' },
        { w: ',', plain: true },
        { w: 'reden', role: 'r-verb', en: 'let us talk', hi: 'बात करते हैं', pron: 'RAY-den', type: 'Verb · reden (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'lieber', role: 'r-adverb', en: 'rather', hi: 'ज़्यादा', pron: 'LEE-ber', type: 'Comparative' },
        { w: 'drinnen', role: 'r-place', en: 'inside', hi: 'अंदर', pron: 'DRI-nen', type: 'Adverb · place' },
        { w: '.', plain: true }
      ], en: 'When it thunders, we rather talk inside.', hi: 'Jab gharajta hai, hum andar baat karna behtar samajhte hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Some German verb prefixes <span class="de r-trenn">SPLIT APART</span> in main clauses (<span class="de">Ich stehe auf.</span>); others <span class="de r-untrenn">NEVER SEPARATE</span> (<span class="de">Ich verstehe.</span>). And the same base verb can grow completely different meanings depending on its prefix: <span class="de">kommen → ankommen, mitkommen, bekommen, entkommen</span> — each one different.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is TRENNBAR VS. UNTRENNBAR (B2 level): separable verbs split their prefix to the end of the main clause (Ich stehe auf. / Ich bin aufgestanden.) while inseparable verbs never split (Ich verstehe. / Ich habe verstanden.). Common separable prefixes: ab-, an-, auf-, aus-, ein-, fest-, her-, hin-, los-, mit-, nach-, vor-, weg-, weiter-, zurück-, zusammen-, zu-. Common inseparable prefixes: be-, emp-, ent-, er-, ge-, miss-, ver-, zer-. The key insight: the SAME base verb can carry completely different meanings depending on its prefix (kommen → ankommen [arrive], mitkommen [come along], zurückkommen [come back], bekommen [receive], entkommen [escape]). The learning strategy: never memorize a base verb alone — learn each prefixed verb as its own vocabulary item with its own meaning. ' +
    'Do NOT expect rare/obscure prefixes, linguistic stress theory, or historical word-formation — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Separable verbs must split correctly in main clauses (prefix at the very end) and rejoin correctly in Perfekt/Infinitiv (ge- goes between prefix and stem: aufgestanden, not gestandenauf).\n' +
    '- Inseparable verbs must NEVER split, and take no "ge-" in the participle (verstanden, not geverstanden).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Prefix check:</b> one sentence on whether separable and inseparable verbs were handled correctly.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly split separable verbs and keep inseparable verbs whole, and understand how prefixes change meaning. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the separable vs inseparable prefix table once, then continue.',
    low: 'Worth another pass through the Grammar section — practise the quick decision guide: check the prefix, then learn every new verb together with it.'
  },

  parserSentence: [
    { w: 'Ich', role: 'plain' }, { w: 'stehe', role: 'r-trenn' },
    { w: 'früh', role: 'plain' }, { w: 'auf', role: 'r-trenn' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: separable prefixes split apart, inseparable prefixes never do.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Insa and Timo discuss a workplace conflict during a storm, full of prefixed verbs.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 33 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master separable vs inseparable prefixes and how prefixes change verb meaning.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of separable and inseparable verbs.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify separable verbs, inseparable verbs, base verbs, and prefixes.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe routines and workplace situations using prefixed verbs correctly.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and emails using separable and inseparable verbs correctly.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill trennbar vs untrennbar, prefix-meaning matching, and verb families.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 380 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 33 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '7 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Trennbar/untrennbar drills, prefix-meaning matching, verb-family completion, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete prefix reference — separable and inseparable prefix charts, verb families, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich stehe früh auf.', text: 'Split separable verbs correctly in main clauses' },
    { de: 'Ich verstehe die Aufgabe.', text: 'Keep inseparable verbs whole' },
    { de: 'Ich bin aufgestanden.', text: 'Rejoin separable prefixes correctly in Perfekt' },
    { de: 'kommen → ankommen, bekommen, entkommen', text: 'Recognize how prefixes change meaning' },
    { de: 'ab-, an-, auf- … / be-, ver-, zer- …', text: 'Know the common separable and inseparable prefixes' }
  ],

  // ---------- Vocabulary (33 items — uploaded chapter-9 list) ----------
  vocab: [
    { de: 'bestimmen', pos: 'verb', level: 'B2', en: 'to determine, decide', hi: 'निर्धारित करना', prefix: 'be- (untrennbar)', ex: 'Deshalb bestimmt die Kompetenz des Teams die Lage.', exEn: 'That\'s why the team\'s competence determines the situation.', exHi: 'Isiliye team ki yogyata sthiti ko nirdhaarit karti hai.', conj: { praesens: 'bestimmt', praeteritum: 'bestimmte', perfekt: 'hat bestimmt' } },
    { de: 'betroffen', pos: 'adjective', level: 'B2', en: 'affected, dismayed', hi: 'चिंतित', prefix: 'be- (untrennbar, from betreffen)', ex: 'Manchmal sind die Mitarbeiter betroffen, wenn die Konzentrationsleistung sinkt.', exEn: 'Sometimes the colleagues are affected when the concentration performance declines.', exHi: 'Kabhi-kabhi sahakarmi chintit hote hain jab ekaagrata kshamata girti hai.' },
    { de: 'blamieren', pos: 'verb', level: 'B2', en: 'to embarrass, disgrace', hi: 'शर्मिंदा करना', prefix: '(kein Präfix / untrennbar)', ex: 'Er blamiert sich nicht gern vor Kollegen.', exEn: 'He doesn\'t like embarrassing himself in front of colleagues.', exHi: 'Woh sahakarmiyon ke saamne khud ko sharminda karna pasand nahi karta.', conj: { praesens: 'blamiert', praeteritum: 'blamierte', perfekt: 'hat blamiert' } },
    { de: 'blitzen', pos: 'verb', level: 'B2', en: 'to flash, lightning', hi: 'बिजली चमकना', prefix: '(kein Präfix / untrennbar)', ex: 'Draußen blitzt es und donnert.', exEn: 'Outside it\'s flashing and thundering.', exHi: 'Bahar bijli chamak rahi hai aur garaj rahi hai.', conj: { praesens: 'blitzt', praeteritum: 'blitzte', perfekt: 'hat geblitzt' } },
    { de: 'brillieren', pos: 'verb', level: 'B2', en: 'to shine, excel', hi: 'चमकना', prefix: '(kein Präfix / untrennbar)', ex: 'Manche Kollegen klatschen, wenn jemand in der Präsentation brilliert.', exEn: 'Some colleagues applaud when someone shines in the presentation.', exHi: 'Kuch sahakarmi taaliyaan bajaate hain jab koi presentation mein chamakta hai.', conj: { praesens: 'brilliert', praeteritum: 'brillierte', perfekt: 'hat brilliert' } },
    { de: 'deuten', pos: 'verb', level: 'B2', en: 'to interpret, point', hi: 'व्याख्या करना', prefix: '(kein Präfix / untrennbar)', ex: 'Sie deutet die Ergebnisse sorgfältig.', exEn: 'She interprets the results carefully.', exHi: 'Woh parinaamon ki savdhaani se vyaakhya karti hain.', conj: { praesens: 'deutet', praeteritum: 'deutete', perfekt: 'hat gedeutet' } },
    { de: 'donnern', pos: 'verb', level: 'B2', en: 'to thunder', hi: 'गरजना', prefix: '(kein Präfix / untrennbar)', ex: 'Draußen blitzt es und donnert.', exEn: 'Outside it\'s flashing and thundering.', exHi: 'Bahar bijli chamak rahi hai aur garaj rahi hai.', conj: { praesens: 'donnert', praeteritum: 'donnerte', perfekt: 'hat gedonnert' } },
    { de: 'Dringlichkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'urgency', hi: 'तात्कालिकता', ex: 'Ich höre genau hin, weil ich die Dringlichkeit spüre.', exEn: 'I listen closely because I sense the urgency.', exHi: 'Main dhyaan se sunta hoon kyunki mujhe taatkaalikta mehsoos hoti hai.' },
    { de: 'Emotion', art: 'die', gender: 'f', plural: 'Emotionen', pos: 'noun', level: 'B2', en: 'emotion', hi: 'भावना', ex: 'Die Naturerscheinung erzeugt trotzdem Emotionen.', exEn: 'The natural phenomenon nevertheless produces emotions.', exHi: 'Prakritik ghatna phir bhi bhaavnaayein utpann karti hai.' },
    { de: 'Erledigung', art: 'die', gender: 'f', plural: 'Erledigungen', pos: 'noun', level: 'B2', en: 'completion, handling of a task', hi: 'निपटान', ex: 'Es ist obligatorisch, die Erledigung pünktlich abzuschließen.', exEn: 'It\'s obligatory to complete the task punctually.', exHi: 'Kaam ko samay par poora karna anivaarya hai.' },
    { de: 'erzeugen', pos: 'verb', level: 'B2', en: 'to produce, generate', hi: 'उत्पन्न करना', prefix: 'er- (untrennbar)', ex: 'Die Naturerscheinung erzeugt trotzdem Emotionen.', exEn: 'The natural phenomenon nevertheless produces emotions.', exHi: 'Prakritik ghatna phir bhi bhaavnaayein utpann karti hai.', conj: { praesens: 'erzeugt', praeteritum: 'erzeugte', perfekt: 'hat erzeugt' } },
    { de: 'geduldig', pos: 'adjective', level: 'B2', en: 'patient', hi: 'धैर्यवान', ex: 'Es nervt mich, wenn niemand geduldig bleibt.', exEn: 'It annoys me when nobody stays patient.', exHi: 'Mujhe chidh hoti hai jab koi dhairyavaan nahi rehta.' },
    { de: 'gehen', pos: 'verb', level: 'B2', en: 'to go, walk', hi: 'जाना', prefix: '(kein Präfix / untrennbar)', ex: 'Wir gehen heute früher nach Hause.', exEn: 'We\'re going home earlier today.', exHi: 'Hum aaj jaldi ghar ja rahe hain.', conj: { praesens: 'geht', praeteritum: 'ging', perfekt: 'ist gegangen' } },
    { de: 'gewittern', pos: 'verb', level: 'B2', en: 'to thunder, storm', hi: 'तूफ़ान आना', prefix: '(kein Präfix / untrennbar)', ex: 'Draußen gewittert es schon wieder.', exEn: 'It\'s already storming outside again.', exHi: 'Bahar phir se toofaan aa raha hai.', conj: { praesens: 'gewittert', praeteritum: 'gewitterte', perfekt: 'hat gewittert' } },
    { de: 'hageln', pos: 'verb', level: 'B2', en: 'to hail', hi: 'ओले पड़ना', prefix: '(kein Präfix / untrennbar)', ex: 'Vielleicht hagelt es gleich.', exEn: 'Maybe it will hail soon.', exHi: 'Shaayad jald hi ole padenge.', conj: { praesens: 'hagelt', praeteritum: 'hagelte', perfekt: 'hat gehagelt' } },
    { de: 'herumschlagen (sich)', pos: 'verb', level: 'B2', en: 'to struggle, grapple with', hi: 'जूझना', prefix: 'herum- (trennbar, reflexiv)', ex: 'Ich schlage mich mit der Konfliktlösung herum.', exEn: 'I struggle with the conflict resolution.', exHi: 'Main sangharsh samaadhaan se joojh raha hoon.', conj: { praesens: 'schlägt sich herum', praeteritum: 'schlug sich herum', perfekt: 'hat sich herumgeschlagen' } },
    { de: 'hinhören', pos: 'verb', level: 'B2', en: 'to listen closely', hi: 'ध्यान से सुनना', prefix: 'hin- (trennbar)', ex: 'Ich höre genau hin, weil ich die Dringlichkeit spüre.', exEn: 'I listen closely because I sense the urgency.', exHi: 'Main dhyaan se sunta hoon kyunki mujhe taatkaalikta mehsoos hoti hai.', conj: { praesens: 'hört hin', praeteritum: 'hörte hin', perfekt: 'hat hingehört' } },
    { de: 'hinnehmen', pos: 'verb', level: 'B2', en: 'to accept, put up with', hi: 'स्वीकार करना', prefix: 'hin- (trennbar)', ex: 'Ich nehme es gelassen hin.', exEn: 'I accept it calmly.', exHi: 'Main isse shaanti se sweekaar karta hoon.', conj: { praesens: 'nimmt hin', praeteritum: 'nahm hin', perfekt: 'hat hingenommen' } },
    { de: 'Ich-Botschaft', art: 'die', gender: 'f', plural: 'Ich-Botschaften', pos: 'noun', level: 'B2', en: 'I-message', hi: 'आई-संदेश', ex: 'Eine Ich-Botschaft kann zur Problemlösung beitragen.', exEn: 'An I-message can contribute to problem-solving.', exHi: 'Ek "main-sandesh" samasya samadhaan mein yogdaan de sakta hai.' },
    { de: 'klatschen', pos: 'verb', level: 'B2', en: 'to clap, applaud', hi: 'तालियां बजाना', prefix: '(kein Präfix / untrennbar)', ex: 'Manche Kollegen klatschen, wenn jemand in der Präsentation brilliert.', exEn: 'Some colleagues applaud when someone shines in the presentation.', exHi: 'Kuch sahakarmi taaliyaan bajaate hain jab koi presentation mein chamakta hai.', conj: { praesens: 'klatscht', praeteritum: 'klatschte', perfekt: 'hat geklatscht' } },
    { de: 'kommunizieren', pos: 'verb', level: 'B2', en: 'to communicate', hi: 'संवाद करना', prefix: '(kein Präfix / untrennbar)', ex: 'Ich kommuniziere lieber ruhig, auch wenn es nieselt.', exEn: 'I\'d rather communicate calmly, even if it\'s drizzling.', exHi: 'Main shaanti se sanchaar karna behtar samajhta hoon, bhale hi boondaabaandi ho.', conj: { praesens: 'kommuniziert', praeteritum: 'kommunizierte', perfekt: 'hat kommuniziert' } },
    { de: 'Kompetenz', art: 'die', gender: 'f', plural: 'Kompetenzen', pos: 'noun', level: 'B2', en: 'competence', hi: 'योग्यता', ex: 'Deshalb bestimmt die Kompetenz des Teams die Lage.', exEn: 'That\'s why the team\'s competence determines the situation.', exHi: 'Isiliye team ki yogyata sthiti ko nirdhaarit karti hai.' },
    { de: 'Konfliktlösung', art: 'die', gender: 'f', plural: 'Konfliktlösungen', pos: 'noun', level: 'B2', en: 'conflict resolution', hi: 'संघर्ष समाधान', ex: 'Ich schlage mich mit der Konfliktlösung herum.', exEn: 'I struggle with the conflict resolution.', exHi: 'Main sangharsh samaadhaan se joojh raha hoon.' },
    { de: 'Konzentrationsleistung', art: 'die', gender: 'f', plural: 'Konzentrationsleistungen', pos: 'noun', level: 'B2', en: 'concentration performance', hi: 'एकाग्रता क्षमता', ex: 'Manchmal sind die Mitarbeiter betroffen, wenn die Konzentrationsleistung sinkt.', exEn: 'Sometimes the colleagues are affected when the concentration performance declines.', exHi: 'Kabhi-kabhi sahakarmi chintit hote hain jab ekaagrata kshamata girti hai.' },
    { de: 'Lage', art: 'die', gender: 'f', plural: 'Lagen', pos: 'noun', level: 'B2', en: 'situation, position', hi: 'स्थिति', ex: 'Deshalb bestimmt die Kompetenz des Teams die Lage.', exEn: 'That\'s why the team\'s competence determines the situation.', exHi: 'Isiliye team ki yogyata sthiti ko nirdhaarit karti hai.' },
    { de: 'Naturerscheinung', art: 'die', gender: 'f', plural: 'Naturerscheinungen', pos: 'noun', level: 'B2', en: 'natural phenomenon', hi: 'प्राकृतिक घटना', ex: 'Die Naturerscheinung erzeugt trotzdem Emotionen.', exEn: 'The natural phenomenon nevertheless produces emotions.', exHi: 'Prakritik ghatna phir bhi bhaavnaayein utpann karti hai.' },
    { de: 'nerven', pos: 'verb', level: 'B2', en: 'to annoy, get on one\'s nerves', hi: 'चिढ़ाना', prefix: '(kein Präfix / untrennbar)', ex: 'Es nervt mich, wenn niemand geduldig bleibt.', exEn: 'It annoys me when nobody stays patient.', exHi: 'Mujhe chidh hoti hai jab koi dhairyavaan nahi rehta.', conj: { praesens: 'nervt', praeteritum: 'nervte', perfekt: 'hat genervt' } },
    { de: 'nieseln', pos: 'verb', level: 'B2', en: 'to drizzle', hi: 'बूंदाबांदी होना', prefix: '(kein Präfix / untrennbar)', ex: 'Ich kommuniziere lieber ruhig, auch wenn es nieselt.', exEn: 'I\'d rather communicate calmly, even if it\'s drizzling.', exHi: 'Main shaanti se sanchaar karna behtar samajhta hoon, bhale hi boondaabaandi ho.', conj: { praesens: 'nieselt', praeteritum: 'nieselte', perfekt: 'hat geniselt' } },
    { de: 'obligatorisch', pos: 'adjective', level: 'B2', en: 'obligatory, compulsory', hi: 'अनिवार्य', ex: 'Es ist obligatorisch, die Erledigung pünktlich abzuschließen.', exEn: 'It\'s obligatory to complete the task punctually.', exHi: 'Kaam ko samay par poora karna anivaarya hai.' },
    { de: 'Problemlösung', art: 'die', gender: 'f', plural: 'Problemlösungen', pos: 'noun', level: 'B2', en: 'problem-solving', hi: 'समस्या समाधान', ex: 'Eine Ich-Botschaft kann zur Problemlösung beitragen.', exEn: 'An I-message can contribute to problem-solving.', exHi: 'Ek "main-sandesh" samasya samadhaan mein yogdaan de sakta hai.' },
    { de: 'sich herum', pos: 'adverb', level: 'B2', en: 'around (oneself)', hi: 'अपने आस-पास', ex: 'Er schaut sich herum, bevor er spricht.', exEn: 'He looks around before he speaks.', exHi: 'Woh bolne se pehle apne aas-paas dekhta hai.' },
    { de: 'spüren', pos: 'verb', level: 'B2', en: 'to sense, feel', hi: 'महसूस करना', prefix: '(kein Präfix / untrennbar)', ex: 'Ich höre genau hin, weil ich die Dringlichkeit spüre.', exEn: 'I listen closely because I sense the urgency.', exHi: 'Main dhyaan se sunta hoon kyunki mujhe taatkaalikta mehsoos hoti hai.', conj: { praesens: 'spürt', praeteritum: 'spürte', perfekt: 'hat gespürt' } },
    { de: 'stürmen', pos: 'verb', level: 'B2', en: 'to storm, rush', hi: 'तूफ़ान आना', prefix: '(kein Präfix / untrennbar)', ex: 'Draußen stürmt es heftig.', exEn: 'Outside it\'s storming heavily.', exHi: 'Bahar zor se toofaan aa raha hai.', conj: { praesens: 'stürmt', praeteritum: 'stürmte', perfekt: 'hat gestürmt' } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Trennbare Verben',
      body: [ 'Separable verbs split their prefix off to the very end of a main clause.' ],
      table: {
        head: ['Infinitiv', 'Beispiel'],
        rows: [
          ['aufstehen', '<span class="de">Ich stehe um 7 Uhr auf.</span>'],
          ['ankommen', '<span class="de">Der Zug kommt pünktlich an.</span>'],
          ['mitbringen', '<span class="de">Anna bringt ihren Laptop mit.</span>']
        ]
      },
      hinglish: 'Separable verbs apna prefix main clause ke bilkul aakhir mein alag kar dete hain.'
    },
    {
      title: 'Untrennbare Verben',
      body: [ 'Inseparable verbs never split — the prefix stays attached to the verb everywhere.' ],
      table: {
        head: ['Infinitiv', 'Beispiel'],
        rows: [
          ['besuchen', '<span class="de">Ich besuche meine Oma.</span>'],
          ['verstehen', '<span class="de">Ich verstehe die Aufgabe.</span>'],
          ['bekommen', '<span class="de">Wir bekommen eine E-Mail.</span>']
        ]
      },
      hinglish: 'Inseparable verbs kabhi alag nahi hote — prefix hamesha verb ke saath juda rehta hai.'
    },
    {
      title: 'Die wichtigsten Präfixe',
      body: [ 'Learn which prefixes belong to which group.' ],
      note: 'A third group sits in between: <b>\u00fcber-, unter-, um-, durch-, wider-</b> can go either way. Stress on the prefix \u2192 it separates, and the meaning is literal (<span class="de">Ich ziehe um</span> = I move house). Stress on the stem \u2192 it stays attached, and the meaning is figurative (<span class="de">Ich \u00fcbertrage die Daten</span> = I transfer the data). This is why <i>umziehen</i> splits but <i>\u00fcbertragen</i> does not.',
      table: {
        head: ['Trennbar', 'Untrennbar'],
        rows: [
          ['ab-, an-, auf-, aus-, ein-, fest-, her-, hin-, los-, mit-, nach-, vor-, weg-, weiter-, zurück-, zusammen-, zu-', 'be-, emp-, ent-, er-, ge-, miss-, ver-, zer-']
        ]
      },
      hinglish: 'Yeh do lists yaad kar lo \u2014 kaunsa prefix alag hota hai aur kaunsa nahi. Ek teesra group bhi hai: <b>\u00fcber-, unter-, um-, durch-, wider-</b> dono tarah chalte hain. Jab inpar zor padta hai to yeh alag ho jaate hain aur matlab literal hota hai (<span class="de">Ich ziehe um</span> \u2014 ghar badalna), aur jab zor stem par hota hai to yeh jude rehte hain aur matlab figurative hota hai (<span class="de">Ich \u00fcbertrage die Daten</span>). Isliye \u201cumziehen\u201d separable hai par \u201c\u00fcbertragen\u201d nahi.'
    },
    {
      title: 'Bedeutungsänderung durch Präfixe',
      body: [ 'The same base verb "ziehen" (to pull) creates entirely different meanings with different prefixes.' ],
      table: {
        head: ['Verb', 'Meaning'],
        rows: [
          ['ziehen', 'to pull'],
          ['anziehen', 'to put on clothes'],
          ['ausziehen', 'to take off clothes / move out'],
          ['umziehen', 'to move house / change clothes'],
          ['erziehen', 'to raise (children)'],
          ['verziehen', 'to forgive / warp']
        ]
      },
      hinglish: 'Base verb "ziehen" (khinchna) alag prefixes ke saath bilkul alag meanings banata hai.'
    },
    {
      title: 'Gleiches Basisverb, andere Bedeutungen',
      body: [ 'Compare full verb families built from the same base verb.' ],
      table: {
        head: ['kommen family', 'stellen family'],
        rows: [
          ['ankommen, mitkommen, zurückkommen, bekommen, entkommen, umkommen', 'vorstellen, herstellen, bestellen, einstellen, feststellen, darstellen']
        ]
      },
      hinglish: 'Ek hi base verb se banii poori verb family ko saath mein dekho \u2014 isse pata chalta hai ki prefix badalne se matlab kitna badal jaata hai.'
    },
    {
      title: 'Satzstruktur: Präsens vs Perfekt',
      body: [ 'In Perfekt and past participles, the separable prefix rejoins the verb — with "ge-" inserted between prefix and stem.' ],
      table: {
        head: ['Präsens', 'Perfekt'],
        rows: [
          ['<span class="de">Ich stehe früh auf.</span>', '<span class="de">Ich bin früh aufgestanden.</span>']
        ]
      },
      hinglish: 'Perfekt aur past participles mein, separable prefix verb se wapas jud jaata hai — "ge-" prefix aur stem ke beech mein aata hai.'
    },
    {
      title: 'Häufige Goethe B2 Verben',
      body: [ 'These separable and inseparable verbs are especially common in Goethe B2 material.' ],
      table: {
        head: ['Verbs'],
        rows: [
          ['<span class="de">feststellen, darstellen, vorstellen, durchführen, teilnehmen, mitteilen, übertragen, vermeiden, zerstören, entscheiden, entwickeln, vergleichen, behandeln, verändern</span>']
        ]
      },
      hinglish: 'Yeh separable aur inseparable verbs Goethe B2 material mein khaas taur par common hain.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from splitting an inseparable verb, or forgetting to move the separable prefix.' ],
      mistakes: [
        { wrong: 'Ich aufstehe.', right: 'Ich stehe auf.', why: 'The separable prefix "auf" must move to the end of the main clause.' },
        { wrong: 'Ich stehe aufgestanden.', right: 'Ich bin aufgestanden.', why: 'Perfekt needs an auxiliary ("bin") plus the full participle "aufgestanden" — not the present tense form.' },
        { wrong: 'Ich stehe die Aufgabe ver.', right: 'Ich verstehe die Aufgabe.', why: '"ver-" is an inseparable prefix, so it never moves to the end the way a separable prefix does — it stays attached to the verb.' },
        { wrong: 'Ich besuche auf meine Tante.', right: 'Ich besuche meine Tante.', why: '"besuchen" takes a plain Akkusativ object — no preposition at all. Do not borrow "auf" from verbs like warten auf.' },
        { wrong: 'Der Zug ankommt.', right: 'Der Zug kommt an.', why: 'The separable prefix "an" must move to the end of the main clause.' }
      ],
      hinglish: 'Yeh galtiyaan inseparable verb ko alag karne se, ya separable prefix ko move karna bhool jaane se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Recognizing prefixes instantly helps you read and produce accurate, natural Goethe B2 German.' ],
      note: 'Memory trick: never memorize a base verb alone. Learn ankommen, mitkommen, zurückkommen, bekommen, and entkommen as five separate vocabulary items — each prefix creates a new verb with a new meaning.',
      hinglish: 'Prefix turant pehchaan lo to Goethe B2 ka German padhna aur bolna dono zyaada natural ho jaata hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Ratgeber: Konflikte im Team richtig lösen',
    titleEn: 'Guide: resolving team conflicts the right way',
    tokens: [
      { w: 'Konflikte', role: 'plain', en: 'conflicts', hi: 'संघर्ष', type: 'Noun · plural' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Team', role: 'plain', en: 'team', hi: 'टीम', type: 'Noun · neut.' },
      { w: 'entstehen', role: 'plain', en: 'arise', hi: 'उत्पन्न होते हैं', type: 'Verb · entstehen (untrennbar)' },
      { w: 'oft', role: 'plain', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-connector', en: 'because', hi: 'क्योंकि', type: 'Konjunktion · weil' },
      { w: 'jemand', role: 'plain', en: 'someone', hi: 'कोई', type: 'Pronoun' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Problem', role: 'plain', en: 'problem', hi: 'समस्या', type: 'Noun · neut.' },
      { w: 'einfach', role: 'plain', en: 'simply', hi: 'बस', type: 'Adverb' },
      { w: 'hinnimmt', role: 'r-verb', en: 'accepts (trennbar, Satzende)', hi: 'स्वीकार कर लेता है (Satzende)', type: 'Verb · hinnehmen (trennbar, Nebensatz-Satzende)', why: 'hinnehmen (trennbar) = to accept, put up with — different from the untrennbar verb below.' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Kollege', role: 'plain', en: 'colleague', hi: 'सहयोगी', type: 'Noun · masc.' },
      { w: 'sollte', role: 'plain', en: 'should', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'stattdessen', role: 'plain', en: 'instead', hi: 'इसके बजाय', type: 'Adverb' },
      { w: 'genau', role: 'plain', en: 'closely', hi: 'ध्यान से', type: 'Adverb' },
      { w: 'hinhören', role: 'r-verb', en: 'listen closely (trennbar, Satzende)', hi: 'ध्यान से सुनना (Satzende)', type: 'Verb · hinhören (trennbar, Satzende)', why: 'hinhören (trennbar) = to listen closely — prefix hin- separates.' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'plain', en: 'an (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'Ich-Botschaft', role: 'plain', en: 'I-message', hi: '"मैं"-संदेश', type: 'Noun · fem.', why: 'die Ich-Botschaft (this chapter).' },
      { w: 'antworten', role: 'plain', en: 'respond', hi: 'जवाब देना', type: 'Verb · antworten' },
      { w: '.', plain: true },
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Relativpronomen (indefinit)' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Streit', role: 'plain', en: 'argument', hi: 'झगड़ा', type: 'Noun · masc.' },
      { w: 'übernimmt', role: 'r-verb', en: 'takes on (trennbar? — untrennbar, Satzende)', hi: 'ज़िम्मेदारी लेता है (Satzende)', type: 'Verb · übernehmen (untrennbar, Satzende)', why: 'übernehmen (untrennbar) = to take on/take over — prefix über- never separates, unlike hin- or an-.' },
      { w: ',', plain: true },
      { w: 'statt', role: 'plain', en: 'instead of', hi: 'के बजाय', type: 'Präposition/Konjunktion' },
      { w: 'ihn', role: 'plain', en: 'it', hi: 'उसे', type: 'Pronoun · Akk.' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'umgehen', role: 'r-verb', en: 'avoid (untrennbar, Satzende)', hi: 'टालना (Satzende)', type: 'Verb · umgehen (untrennbar, Satzende)', why: 'um-GE-hen (untrennbar, stress on -gehen) = to avoid — different from UM-gehen (trennbar, stress on um-) = to handle/deal with. Same spelling, different meaning by stress and separability.' },
      { w: ',', plain: true },
      { w: 'löst', role: 'plain', en: 'solves', hi: 'सुलझाता है', type: 'Verb · lösen' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Konfliktlösung', role: 'plain', en: 'conflict resolution', hi: 'संघर्ष समाधान', type: 'Noun · fem.', why: 'die Konfliktlösung (this chapter).' },
      { w: 'meist', role: 'plain', en: 'mostly', hi: 'ज़्यादातर', type: 'Adverb' },
      { w: 'schneller', role: 'plain', en: 'faster (Satzende)', hi: 'तेज़ी से (Satzende)', type: 'Adjective · Komparativ' },
      { w: '.', plain: true },
      { w: 'Manche', role: 'plain', en: 'some', hi: 'कुछ', type: 'Determiner' },
      { w: 'Führungskräfte', role: 'plain', en: 'managers', hi: 'प्रबंधक', type: 'Noun · plural' },
      { w: 'schlagen', role: 'r-verb', en: 'propose (trennbar, Satzende)', hi: 'सुझाते हैं (Satzende)', type: 'Verb · vorschlagen (trennbar, Satzende)' },
      { w: 'deshalb', role: 'plain', en: 'therefore', hi: 'इसलिए', type: 'Adverb' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'kurzes', role: 'plain', en: 'short', hi: 'छोटा', type: 'Adjective' },
      { w: 'Gespräch', role: 'plain', en: 'conversation', hi: 'बातचीत', type: 'Noun · neut.' },
      { w: 'vor', role: 'r-verb', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix · vorschlagen (Satzende)' },
      { w: ',', plain: true },
      { w: 'sobald', role: 'r-connector', en: 'as soon as', hi: 'जैसे ही', type: 'Konjunktion · sobald' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Nom.' },
      { w: 'Spannung', role: 'plain', en: 'tension', hi: 'तनाव', type: 'Noun · fem.' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Team', role: 'plain', en: 'team', hi: 'टीम', type: 'Noun · neut.' },
      { w: 'herumschlägt', role: 'r-verb', en: 'lingers (trennbar, Satzende)', hi: 'बनी रहती है (Satzende)', type: 'Verb · sich herumschlagen mit (trennbar, Nebensatz-Satzende)', why: 'sich herumschlagen (trennbar) = to grapple with something persistently — prefix herum- always separates.' },
      { w: '.', plain: true },
      { w: 'So', role: 'plain', en: 'this way', hi: 'इस तरह', type: 'Adverb' },
      { w: 'lässt', role: 'plain', en: 'lets', hi: 'देता है', type: 'Verb · lassen' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Konzentrationsleistung', role: 'plain', en: 'concentration performance', hi: 'एकाग्रता क्षमता', type: 'Noun · fem.', why: 'die Konzentrationsleistung (this chapter).' },
      { w: 'des', role: 'plain', en: 'of the (neut. gen.)', hi: 'की', type: 'Article · Genitiv' },
      { w: 'ganzen', role: 'plain', en: 'whole', hi: 'पूरी', type: 'Adjective' },
      { w: 'Teams', role: 'plain', en: 'team\'s (Satzende)', hi: 'टीम की (Satzende)', type: 'Noun · neut.' },
      { w: 'schnell', role: 'plain', en: 'quickly', hi: 'जल्दी', type: 'Adjective' },
      { w: 'wiederherstellen', role: 'r-verb', en: 'restore (trennbar, Satzende)', hi: 'फिर से बहाल करना (Satzende)', type: 'Verb · wiederherstellen (trennbar, Infinitiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Pronoun · indefinite' },
      { w: 'Konflikte', role: 'plain', en: 'conflicts', hi: 'संघर्ष', type: 'Noun · plural' },
      { w: 'offen', role: 'plain', en: 'openly', hi: 'खुले तौर पर', type: 'Adverb' },
      { w: 'anspricht', role: 'r-verb', en: 'addresses (trennbar)', hi: 'संबोधित करता है', type: 'Verb · ansprechen (trennbar)', why: 'ansprechen: trennbar, prefix an- splits off in position 2 (this chapter).' },
      { w: ',', plain: true },
      { w: 'statt', role: 'plain', en: 'instead of', hi: 'की बजाय', type: 'Konjunktion' },
      { w: 'sie', role: 'plain', en: 'them', hi: 'उन्हें', type: 'Pronoun · Akk.' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'übergehen', role: 'r-verb', en: 'ignore (untrennbar, Satzende)', hi: 'नज़रअंदाज़ करना (Satzende)', type: 'Verb · übergehen (untrennbar, Infinitiv)', why: 'übergehen here is untrennbar (to ignore) — compare trennbar übergehen (to hand over); stress and meaning shift (this chapter).' },
      { w: ',', plain: true },
      { w: 'übernimmt', role: 'r-verb', en: 'takes on (untrennbar)', hi: 'ज़िम्मेदारी लेता है', type: 'Verb · übernehmen (untrennbar)', why: 'übernehmen: always untrennbar, prefix über- never splits off (this chapter).' },
      { w: 'am', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Ende', role: 'plain', en: 'end', hi: 'अंत', type: 'Noun · neut.' },
      { w: 'mehr', role: 'plain', en: 'more', hi: 'अधिक', type: 'Adjective' },
      { w: 'Verantwortung', role: 'plain', en: 'responsibility (Satzende)', hi: 'ज़िम्मेदारी (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true }
    ],
    translation: 'Conflicts in the team often arise because someone simply accepts a problem. A colleague should instead listen closely and respond with an I-message. Whoever takes on an argument, instead of avoiding it, usually resolves the conflict faster. Some managers therefore propose a short conversation as soon as tension lingers in the team. This way, the whole team\'s ability to concentrate can quickly be restored. Whoever addresses conflicts openly, instead of ignoring them, ends up taking on more responsibility.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_009_L001', speaker: 'Insa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich möchte kurz übergehen, was letzte Woche im Team passiert ist.', en: 'Timo, I\'d like to briefly go over what happened in the team last week.' },
      { id: 'B2_009_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gerne. Ich habe deine Kritik damals nicht sofort verstanden, aber ich unterstütze deine Sicht inzwischen.', en: 'Sure. I didn\'t understand your criticism right away back then, but I support your view by now.' },
      { id: 'B2_009_L003', speaker: 'Insa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Das freut mich zu hören. Können wir das Thema jetzt einfach hinter uns lassen?', en: 'I\'m glad to hear that. Can we just leave the topic behind us now?' },
      { id: 'B2_009_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ja, lass uns das jetzt abschließen.', en: 'Yes, let\'s close this now.' }
    ],
    transcript: 'Timo, ich möchte kurz übergehen, was letzte Woche im Team passiert ist. Gerne. Ich habe deine Kritik damals nicht sofort verstanden, aber ich unterstütze deine Sicht inzwischen. Das freut mich zu hören. Können wir das Thema jetzt einfach hinter uns lassen? Ja, lass uns das jetzt abschließen.',
    translation: 'Timo, I\'d like to briefly go over what happened in the team last week. Sure. I didn\'t understand your criticism right away back then, but I support your view by now. I\'m glad to hear that. Can we just leave the topic behind us now? Yes, let\'s close this now.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'möchte' },
      { w: 'kurz' },
      { w: 'übergehen' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'letzte' },
      { w: 'Woche' },
      { w: 'im' },
      { w: 'Team' },
      { w: 'passiert' },
      { w: 'ist' },
      { w: '.', plain: true },
      { w: 'Gerne' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'deine' },
      { w: 'Kritik' },
      { w: 'damals' },
      { w: 'nicht' },
      { w: 'sofort' },
      { w: 'verstanden' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'unterstütze' },
      { w: 'deine' },
      { w: 'Sicht' },
      { w: 'inzwischen' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'freut' },
      { w: 'mich' },
      { w: 'zu' },
      { w: 'hören' },
      { w: '.', plain: true },
      { w: 'Können' },
      { w: 'wir' },
      { w: 'das' },
      { w: 'Thema' },
      { w: 'jetzt' },
      { w: 'einfach' },
      { w: 'hinter' },
      { w: 'uns' },
      { w: 'lassen' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'lass' },
      { w: 'uns' },
      { w: 'das' },
      { w: 'jetzt' },
      { w: 'abschließen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was möchte Insa kurz ansprechen?', qEn: 'What does Insa want to briefly address?', options: ['ein neues Projekt', 'was letzte Woche passiert ist', 'ihren Urlaub', 'das Wetter'], optionsEn: ['a new project', 'what happened last week', 'her holiday', 'the weather'], answer: 1,
        explain: '"… kurz übergehen, was letzte Woche im Team passiert ist."' },
      { q: 'Wie steht Timo jetzt zu Insas Kritik?', qEn: 'How does Timo feel about Insa\'s criticism now?', options: ['er versteht sie nicht', 'er unterstützt ihre Sicht', 'er ist wütend', 'er ignoriert sie'], optionsEn: ['he doesn\'t understand her', 'he supports her view', 'he is angry', 'he ignores her'], answer: 1,
        explain: '"… ich unterstütze deine Sicht inzwischen."' }
    ]
  },

  

  // ---------- Speaking prompts (Anna/Rohan role-play only) ----------
  speaking: [
    { task: "Du willst im Team über letzte Woche sprechen. Eröffne das Gespräch.", taskEn: "You want to talk to the team about last week. Open the conversation.", de: "Ich möchte kurz übergehen, was letzte Woche im Team passiert ist.", en: "I'd like to move briefly to what happened in the team last week." },
    { task: "Sag deinem Kollegen, wie du seine Kritik jetzt siehst.", taskEn: "Tell your colleague how you see his criticism now.", de: "Ich habe deine Kritik damals nicht verstanden, aber ich unterstütze deine Idee.", en: "I didn't understand your criticism at the time, but I support your idea." },
    { task: "Eine Kollegin fragt, warum du das Thema nicht ansprichst.", taskEn: "A colleague asks why you're not raising the topic.", de: "Ich nehme es nicht hin, aber ich spreche es später an.", en: "I'm not accepting it, but I'll raise it later." },
    { task: "Ein Praktikant fragt, wie er in der Sitzung zuhören soll.", taskEn: "An intern asks how to listen in the meeting.", de: "Hör genau hin und deute die Emotionen nicht zu schnell.", en: "Listen closely and don't interpret the emotions too quickly." },
    { task: "Deine Chefin fragt, wie du mit Dringlichkeit umgehst.", taskEn: "Your boss asks how you handle urgency.", de: "Ich bestimme die Reihenfolge und erledige das Wichtigste zuerst.", en: "I set the order and deal with the most important thing first." },
    { task: "Rollenspiel: Ihr klärt einen Konflikt mit Ich-Botschaften.", taskEn: "Role-play: you settle a conflict using I-statements.", de: "Ich habe mich übergangen gefühlt. — Das wollte ich nicht, ich unterstütze dich.", en: "I felt overlooked. — I didn't intend that, I support you." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short report or diary entry (six to eight sentences) about a workplace situation or the weather — using at least three separable verbs (correctly split in the main clause) and at least two inseparable verbs, plus one sentence in Perfekt with a separable verb.',
    starters: ['Ich stehe … auf.', 'Ich verstehe …', 'Ich bin … aufgestanden.', 'Es gewittert …'],
    placeholder: 'Draußen gewittert es. Ich nehme die Situation gelassen hin …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Is "verstehen" trennbar or untrennbar?',
      options: ['Untrennbar', 'Trennbar', 'Both'],
      answer: 0,
      explain: '"ver-" is always an inseparable prefix.'
    },
    gap: {
      sentence: ['Ich stehe früh ', '.'],
      gaps: [ { answer: 'auf', accepts: ['auf'] } ],
      explain: '"aufstehen" is separable — "auf" moves to the end of the main clause.'
    },
    match: {
      q: 'Match each verb to trennbar or untrennbar.',
      pairs: [
        { noun: 'aufstehen', art: 'trennbar' },
        { noun: 'verstehen', art: 'untrennbar' },
        { noun: 'ankommen', art: 'trennbar' },
        { noun: 'bekommen', art: 'untrennbar' }
      ]
    },
    builder: {
      target: 'Build (Perfekt): "I got up early."',
      bank: ['Ich', 'bin', 'früh', 'aufgestanden', '.'],
      answer: ['Ich', 'bin', 'früh', 'aufgestanden', '.'],
      roles: { 'aufgestanden': 'r-trenn' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich ver stehe.',
      right: 'Ich verstehe.',
      explain: '"ver-" is an inseparable prefix — it never splits from the verb.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which prefix is always inseparable?', options: ['ver-', 'auf-', 'mit-'], answer: 0,
      explain: '"ver-" belongs to the fixed group of inseparable prefixes (be-, emp-, ent-, er-, ge-, miss-, ver-, zer-).' },
    { q: 'Complete: "Der Zug kommt pünktlich ___."', options: ['an', 'ankommt', 'ankam'], answer: 0,
      explain: '"ankommen" is separable — "an" moves to the end of the main clause.' },
    { q: 'What happens to "kommen" with different prefixes?', options: ['Nothing changes', 'Each prefix creates a completely different meaning', 'Only the tense changes'], answer: 1,
      explain: 'ankommen (arrive), mitkommen (come along), bekommen (receive), entkommen (escape) — each prefix creates a new meaning.' },
    { q: 'Where does "ge-" go in the Perfekt of a separable verb?', options: ['Between the prefix and the stem', 'Before the prefix', 'It is never used'], answer: 0,
      explain: '"aufgestanden" — "ge-" goes between "auf" and "standen".' },
    { q: 'Which sentence contains an error?', options: ['Ich verstehe die Aufgabe.', 'Ich stehe auf.', 'Ich aufstehe.'], answer: 2,
      explain: 'The separable prefix "auf" must move to the end — it should be "Ich stehe auf."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-trenn', html: 'Separable prefixes (ab-, an-, auf-, aus-, ein-, mit-, vor-, zurück-, and others) split off to the end of the main clause.' },
    { c: 'r-untrenn', html: 'Inseparable prefixes (be-, emp-, ent-, er-, ge-, miss-, ver-, zer-) never split — the prefix always stays attached.' },
    { c: 'r-trenn', html: 'The same base verb can carry completely different meanings depending on its prefix — never memorize a base verb alone; learn each prefixed verb as its own vocabulary item.' }
  ],
  revisionTips: [
    'Sort every new prefixed verb you learn into "trennbar" or "untrennbar" immediately — do not wait.',
    'Build verb families (kommen, stellen, ziehen) and compare the meanings side by side.',
    'Practise transforming present-tense separable-verb sentences into Perfekt until the "ge-" placement feels automatic.'
  ]
};

window.CHAPTER = CHAPTER;
