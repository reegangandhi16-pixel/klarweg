/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 23
   "Reflexivpronomen: Akkusativ & Dativ" — mich/dich/sich/uns/
   euch/sich (Akkusativ, no second object) vs. mir/dir/sich/
   uns/euch/sich (Dativ, when a second Akkusativ object exists:
   body parts, clothing, purchases). Only ich/du change form;
   all other persons use "sich"/"uns"/"euch" for both cases.
   IMPORTANT: dialogue uses ONLY Frauke and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-23 list (106 items) — a
   hospital/health-care theme (Krankenzimmer, Notaufnahme,
   Pfleger, Schmerzmittel, Versichertenkarte…), an excellent
   natural fit for reflexive self-care verbs (sich waschen, sich
   die Zähne putzen, sich anziehen, sich fühlen) — woven into the
   story and reading passage as a short hospital stay.
   NOTE: content only — existing audio engine, no new assets.
============================================================ */
const CHAPTER = {
  id: 'b1-23-reflexivpronomen-akkusativ-dativ',
  phase: 'B1 · Phase 1',
  number: 23,
  title: 'Reflexivpronomen: Akkusativ & Dativ',
  titleEn: 'Reflexive pronouns: Akkusativ & Dativ',
  description: 'Ich wasche mich. → Ich wasche mir die Hände. Same reflexive verb, two different pronoun forms — because the second sentence already has an Akkusativ object (die Hände), so the reflexive pronoun steps back into Dativ.',
  xp: 270,
  time: 50,
  difficulty: 'Intermediate',
  nextChapter: { number: 24, title: 'Zweiteilige Konnektoren', titleEn: 'Two-part connectors' , href: 'chapter-b1-24-zweiteilige-konnektoren.html' },

  prevChapter: { number: 22, title: 'brauchen + zu + Infinitiv', titleEn: 'Expressing "don\'t need to"', href: 'chapter-b1-22-brauchen-zu-infinitiv.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two voices, <em>one pronoun that shifts.</em>',
    intro: 'Timo is recovering in hospital after a small accident, and Frauke helps him through his morning routine — brushing his teeth, getting his medication, feeding himself — every reflexive verb revealing whether it needs mich/dich or mir/dir.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear mich/mir and dich/dir chosen correctly based on whether a second object is present'
    ],
    scene: 'Im Krankenzimmer',
    femaleSpeakers: ['Frauke'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
        { w: 'geht', role: 'r-verb', en: 'goes', hi: 'है', pron: 'gayt', type: 'Verb · gehen' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: '?', plain: true }
      ], en: 'How are you?', hi: 'Tum kaisi ho?' },
      { speaker: 'Frauke', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'putze', role: 'r-verb', en: 'brush', hi: 'साफ़ करती हूँ', pron: 'PU-tsuh', type: 'Verb · putzen (ich)', why: 'sich dative + akkusativ noun = to do something for oneself (this chapter).', ex: 'Ich putze mir die Zähne.', exEn: 'I brush my teeth.' },
        { w: 'mir', role: 'r-dativ', en: 'myself', hi: 'अपने', pron: 'meer', type: 'Reflexive pronoun · dative' },
        { w: 'gerade', role: 'r-adverb', en: 'right now', hi: 'अभी', pron: 'ge-RAH-duh', type: 'Adverb' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'दांत', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Zähne', role: 'r-akkusativ', en: 'teeth', hi: 'दांत', pron: 'TSAY-nuh', type: 'Noun · plural' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'fühle', role: 'r-verb', en: 'feel', hi: 'महसूस करती हूँ', pron: 'FÜ-luh', type: 'Verb · fühlen (ich)' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun · accusative' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'besser', role: 'r-akkusativ', en: 'better', hi: 'बेहतर', pron: 'BE-ser', type: 'Adjective · Komparativ' },
        { w: '.', plain: true }
      ], en: 'I am brushing my teeth right now and already feel better.', hi: 'Main abhi apne daant saaf kar rahi hoon aur pehle se behtar mehsoos karti hoon.' },
      { speaker: 'Timo', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'freut', role: 'r-verb', en: 'pleases', hi: 'ख़ुशी देता है', pron: 'FROYT', type: 'Verb · freuen' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: '.', plain: true },
        { w: 'Musst', role: 'r-modalverb', en: 'do you have to', hi: 'ज़रूरत है', pron: 'MUST', type: 'Modal · müssen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dir', role: 'r-dativ', en: 'yourself', hi: 'अपने लिए', pron: 'deer', type: 'Reflexive pronoun · dative' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी और', pron: 'nokh', type: 'Adverb' },
        { w: 'Medikamente', role: 'r-akkusativ', en: 'medication', hi: 'दवाइयाँ', pron: 'me-di-ka-MEN-tuh', type: 'Noun · plural' },
        { w: 'holen', role: 'r-verb', en: 'get', hi: 'लाना', pron: 'HO-len', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Do you still have to get yourself medication?', hi: 'Kya tumhe abhi bhi apne liye dawaaiyaan laani hain?' },
      { speaker: 'Frauke', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Pflegerin', role: 'r-subject', en: 'nurse', hi: 'नर्स', pron: 'PFLAY-ge-rin', type: 'Noun · fem.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'दी हैं', pron: 'hat', type: 'Verb · haben' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Reflexive pronoun · dative' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Medikamente', role: 'r-akkusativ', en: 'medication', hi: 'दवाइयाँ', pron: 'me-di-ka-MEN-tuh', type: 'Noun · plural' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'gegeben', role: 'r-verb', en: 'given', hi: 'दी', pron: 'ge-GAY-ben', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'No, the nurse has already given me the medication.', hi: 'Nahi, nurse ne mujhe pehle se dawaaiyaan de di hain.' },
      { speaker: 'Timo', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Kannst', role: 'r-modalverb', en: 'can', hi: 'सकती हो', pron: 'KANST', type: 'Modal · können (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dir', role: 'r-dativ', en: 'yourself', hi: 'अपने लिए', pron: 'deer', type: 'Reflexive pronoun · dative' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Essen', role: 'r-akkusativ', en: 'food', hi: 'खाना', pron: 'E-sen', type: 'Noun · neut.' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'selbst', role: 'r-adverb', en: 'yourself', hi: 'ख़ुद', pron: 'zelpst', type: 'Adverb' },
        { w: 'holen', role: 'r-verb', en: 'get', hi: 'लाना', pron: 'HO-len', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Perfect! Can you already get yourself the food yourself?', hi: 'Badhiya! Kya tum abhi khud apne liye khaana la sakti ho?' },
      { speaker: 'Frauke', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hole', role: 'r-verb', en: 'get', hi: 'लाती हूँ', pron: 'HO-luh', type: 'Verb · holen (ich)' },
        { w: 'mir', role: 'r-dativ', en: 'myself', hi: 'अपने लिए', pron: 'meer', type: 'Reflexive pronoun · dative' },
        { w: 'mein', role: 'r-akkusativ', en: 'my (neut.)', hi: 'अपना', pron: 'mine', type: 'Possessive · acc.' },
        { w: 'Essen', role: 'r-akkusativ', en: 'food', hi: 'खाना', pron: 'E-sen', type: 'Noun · neut.' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'selbst', role: 'r-adverb', en: 'myself', hi: 'ख़ुद', pron: 'zelpst', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Yes! I already get myself my food myself.', hi: 'Haan! Main pehle se khud apna khaana laati hoon.' },
      { speaker: 'Timo', tokens: [
        { w: 'Wunderbar', role: 'r-subject', en: 'wonderful', hi: 'अद्भुत', pron: 'vun-der-BAHR', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'erholst', role: 'r-verb', en: 'recover', hi: 'ठीक हो रही हो', pron: 'er-HOLST', type: 'Verb · sich erholen (du)' },
        { w: 'dich', role: 'r-akkusativ', en: 'yourself', hi: 'ख़ुद को', pron: 'dikh', type: 'Reflexive pronoun · accusative' },
        { w: 'wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Adverb' },
        { w: 'schnell', role: 'r-akkusativ', en: 'quickly', hi: 'जल्दी', pron: 'shnel', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Wonderful! You are really recovering quickly.', hi: 'Adbhut! Tum sach mein jaldi theek ho rahi ho.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Ask ONE question every time: <b>is there already another Akkusativ object in the sentence?</b> No second object? Use <span class="de r-reflexiv-akk">mich/dich</span> (Akkusativ) — <span class="de">Ich wasche mich.</span> A body part, clothing, or possession already fills the Akkusativ slot? Use <span class="de r-reflexiv-dat">mir/dir</span> (Dativ) instead — <span class="de">Ich wasche mir die Hände.</span> Only ich/du change form; er/sie/es/wir/ihr/sie/Sie all use sich/uns/euch/sich for BOTH cases.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is REFLEXIVPRONOMEN: AKKUSATIV & DATIV (B1 level only): reflexive pronouns mich/dich/sich/uns/euch/sich (Akkusativ, when there is no second object — e.g. sich waschen, sich freuen, sich beeilen, sich setzen, sich fühlen, sich anmelden, sich treffen, sich interessieren, sich erinnern, sich entscheiden, sich vorbereiten) vs. mir/dir/sich/uns/euch/sich (Dativ, when another Akkusativ object is already present — e.g. sich die Hände waschen, sich die Zähne putzen, sich die Jacke anziehen, sich etwas kaufen, sich etwas kämmen). Only ich and du change form between the two cases; all other persons use sich/uns/euch/sich for both. ' +
    'Do NOT expect reciprocal pronouns, reflexive passive, or other B2 reflexive constructions — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- If the reflexive verb has no other Akkusativ object in the clause, the pronoun is Akkusativ: mich, dich, sich, uns, euch, sich.\n' +
    '- If the clause ALSO has an Akkusativ object (typically a body part, clothing item, or possession), the reflexive pronoun becomes Dativ: mir, dir, sich, uns, euch, sich.\n' +
    '- Common errors to catch: using mich/dich when a second Akkusativ object is present (e.g. "Ich wasche mich die Hände" should be "Ich wasche mir die Hände"), or the reverse (using mir/dir with no second object, e.g. "Ich freue mir" should be "Ich freue mich").\n' +
    '- Verbs like sich interessieren für, sich erinnern an, sich freuen (über/auf) take a PREPOSITIONAL phrase, not a second Akkusativ noun phrase — they stay Akkusativ (mich/dich) even though a preposition follows.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Reflexive check:</b> one sentence on whether Akkusativ vs. Dativ was chosen correctly based on whether a second object was present.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you choose mich/mir and dich/dir correctly based on whether a second object is present. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the Akkusativ vs. Dativ comparison table once — especially body-part verbs like sich waschen/sich kämmen — then continue.',
    low: 'Worth another pass through the Grammar section — practise the one-question test: is there another Akkusativ object in the sentence?'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'wasche', role: 'plain' },
    { w: 'mir', role: 'r-reflexiv-dat' }, { w: 'die', role: 'plain' },
    { w: 'Hände', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: no second object → Akkusativ; second object present → Dativ.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Anna visits Rohan in the hospital, using reflexive verbs throughout his morning routine.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 106 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the complete reflexive pronoun table and the Akkusativ vs. Dativ decision test.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage about a hospital stay, full of reflexive verbs.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch reflexive pronouns in natural speech and identify Akkusativ vs. Dativ.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe daily routines and self-care using reflexive verbs naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a diary entry using reflexive verbs naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Akkusativ vs. Dativ classification and pronoun fill-ins.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 270 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 106 chapter words — hospital and health-care vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '17 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Akkusativ vs. Dativ classification drills, pronoun fill-ins, error correction, and a routine-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full reflexive pronoun reference — complete table, decision flowchart, 25 common reflexive verbs, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich wasche mich.', text: 'Use Akkusativ reflexive pronouns with no second object' },
    { de: 'Ich wasche mir die Hände.', text: 'Use Dativ reflexive pronouns with a second object' },
    { de: 'mich/dich vs. mir/dir', text: 'Apply the one-question decision test' },
    { de: 'sich freuen, sich erinnern, sich interessieren', text: 'Use the 25 most common B1 reflexive verbs' },
    { de: 'Goethe B1', text: 'Recognize reflexive pronouns correctly in exam texts' }
  ],

  // ---------- Vocabulary (106 items — full chapter-23 upload list) ----------
  vocab: [
    { de: 'grundsätzlich', pos: 'adjective', level: 'B1', en: 'in general', hi: 'सामान्यतः', ex: 'Grundsätzlich ist die Behandlung erfolgreich.', exEn: 'In general, the treatment is successful.', exHi: 'Samanyatah, ilaaj safal hai.' },
    { de: 'atmen', pos: 'verb', level: 'B1', en: 'to breathe', hi: 'साँस लेना', ex: 'Atme tief ein und aus.', exEn: 'Breathe deeply in and out.', exHi: 'Gehri saans lo aur chodo.', conj: { praesens: 'atmet', praeteritum: 'atmete', perfekt: 'hat geatmet' } },
    { de: 'aufbewahren', pos: 'verb', level: 'B1', en: 'to keep safe', hi: 'सुरक्षित रखना', ex: 'Bitte bewahren Sie Ihre Wertsachen auf.', exEn: 'Please keep your valuables safe.', exHi: 'Kripya apna keemti saamaan surakshit rakhein.', conj: { praesens: 'bewahrt auf', praeteritum: 'bewahrte auf', perfekt: 'hat aufbewahrt' } },
    { de: 'auflösen', pos: 'verb', level: 'B1', en: 'to resolve, dissolve', hi: 'घोलना / सुलझाना', ex: 'Lösen Sie das Pulver in Wasser auf.', exEn: 'Dissolve the powder in water.', exHi: 'Powder ko paani mein gholo.', conj: { praesens: 'löst auf', praeteritum: 'löste auf', perfekt: 'hat aufgelöst' } },
    { de: 'aufteilen', pos: 'verb', level: 'B1', en: 'to divide', hi: 'बाँटना', ex: 'Wir teilen die Mahlzeiten auf.', exEn: 'We divide the meals up.', exHi: 'Hum bhojan ko baantte hain.', conj: { praesens: 'teilt auf', praeteritum: 'teilte auf', perfekt: 'hat aufgeteilt' } },
    { de: 'ausreichend', pos: 'adjective', level: 'B1', en: 'sufficient', hi: 'पर्याप्त', ex: 'Die Flüssigkeit war ausreichend.', exEn: 'The fluid was sufficient.', exHi: 'Tarala padaarth paryaapt tha.' },
    { de: 'beschildert', pos: 'adjective', level: 'B1', en: 'marked with signs', hi: 'संकेतों से चिह्नित', ex: 'Der Notausgang ist gut beschildert.', exEn: 'The emergency exit is well marked with signs.', exHi: 'Aapaatkaalin nikaas achhi tarah chinhit hai.' },
    { de: 'betragen', pos: 'verb', level: 'B1', en: 'to come to, amount to', hi: 'योग होना', ex: 'Die Rechnung beträgt hundert Euro.', exEn: 'The bill comes to a hundred euros.', exHi: 'Bill sau euro ka hai.', conj: { praesens: 'beträgt', praeteritum: 'betrug', perfekt: 'hat betragen' } },
    { de: 'bisher', pos: 'adverb', level: 'B1', en: 'so far', hi: 'अब तक', ex: 'Bisher fühle ich mich gut.', exEn: 'So far, I feel well.', exHi: 'Ab tak, main achha mahsoos kar raha hoon.' },
    { de: 'blass', pos: 'adjective', level: 'B1', en: 'pale', hi: 'पीला (चेहरा)', ex: 'Er sah blass aus.', exEn: 'He looked pale.', exHi: 'Woh peela dikh raha tha.' },
    { de: 'brauchen', pos: 'verb', level: 'B1', en: 'to need (zu, recycled — Ch.22)', hi: 'ज़रूरत होना', ex: 'Du brauchst dich nicht zu sorgen.', exEn: 'You don\'t need to worry.', exHi: 'Tumhein chinta karne ki zaroorat nahi hai.' },
    { de: 'Auswertung', art: 'die', gender: 'f', plural: 'Auswertungen', pos: 'noun', level: 'B1', en: 'evaluation', hi: 'मूल्यांकन', ex: 'Die Auswertung der Untersuchung kommt morgen.', exEn: 'The evaluation of the examination comes tomorrow.', exHi: 'Jaanch ka moolyaankan kal aayega.' },
    { de: 'Entlassung', art: 'die', gender: 'f', plural: 'Entlassungen', pos: 'noun', level: 'B1', en: 'discharge', hi: 'छुट्टी', ex: 'Ich warte auf meine Entlassung.', exEn: 'I\'m waiting for my discharge.', exHi: 'Main apni chhutti ka intezaar kar raha hoon.' },
    { de: 'Fernbedienung', art: 'die', gender: 'f', plural: 'Fernbedienungen', pos: 'noun', level: 'B1', en: 'remote control', hi: 'रिमोट कंट्रोल', ex: 'Die Fernbedienung liegt auf dem Nachttisch.', exEn: 'The remote control is on the nightstand.', exHi: 'Remote control nightstand par hai.' },
    { de: 'Flüssigkeit', art: 'die', gender: 'f', plural: 'Flüssigkeiten', pos: 'noun', level: 'B1', en: 'fluid', hi: 'तरल पदार्थ', ex: 'Trink ausreichend Flüssigkeit.', exEn: 'Drink sufficient fluid.', exHi: 'Paryaapt tarala padaarth piyo.' },
    { de: 'diätisch', pos: 'adjective', level: 'B1', en: 'dietary', hi: 'आहार संबंधी', ex: 'Das Essen ist diätisch angepasst.', exEn: 'The food is dietary-adjusted.', exHi: 'Khaana aahar ke anusaar taiyaar kiya gaya hai.' },
    { de: 'einbauen', pos: 'verb', level: 'B1', en: 'to build in', hi: 'लगाना', ex: 'Der Alarmknopf ist eingebaut.', exEn: 'The alarm button is built in.', exHi: 'Alarm button laga hua hai.', conj: { praesens: 'baut ein', praeteritum: 'baute ein', perfekt: 'hat eingebaut' } },
    { de: 'eincremen', pos: 'verb', level: 'B1', en: 'to put on (cream)', hi: 'क्रीम लगाना', ex: 'Sie hat sich die Hände eingecremt.', exEn: 'She put cream on her hands.', exHi: 'Usne apne haathon par cream lagaayi.', conj: { praesens: 'cremt ein', praeteritum: 'cremte ein', perfekt: 'hat eingecremt' } },
    { de: 'einnehmen', pos: 'verb', level: 'B1', en: 'to take (Medikamente einnehmen)', hi: 'लेना (दवा)', ex: 'Er nimmt seine Medikamente ein.', exEn: 'He takes his medication.', exHi: 'Woh apni dawaayi leta hai.', conj: { praesens: 'nimmt ein', praeteritum: 'nahm ein', perfekt: 'hat eingenommen' } },
    { de: 'glatt', pos: 'adjective', level: 'B1', en: 'smooth', hi: 'चिकना', ex: 'Der Boden ist glatt.', exEn: 'The floor is smooth.', exHi: 'Farsh chikna hai.' },
    { de: 'kleben', pos: 'verb', level: 'B1', en: 'to stick', hi: 'चिपकना', ex: 'Das Pflaster klebt gut.', exEn: 'The bandage sticks well.', exHi: 'Patti achhi tarah chipakti hai.', conj: { praesens: 'klebt', praeteritum: 'klebte', perfekt: 'hat geklebt' } },
    { de: 'krankschreiben', pos: 'verb', level: 'B1', en: 'to sign off work, take sick leave', hi: 'बीमारी की छुट्टी देना', ex: 'Der Arzt hat mich krankgeschrieben.', exEn: 'The doctor signed me off work.', exHi: 'Doctor ne mujhe bimaari ki chhutti di.', conj: { praesens: 'schreibt krank', praeteritum: 'schrieb krank', perfekt: 'hat krankgeschrieben' } },
    { de: 'kühlen', pos: 'verb', level: 'B1', en: 'to cool', hi: 'ठंडा करना', ex: 'Kühle die Schulter mit Eis.', exEn: 'Cool the shoulder with ice.', exHi: 'Kandhe ko barf se thanda karo.', conj: { praesens: 'kühlt', praeteritum: 'kühlte', perfekt: 'hat gekühlt' } },
    { de: 'obere', pos: 'adjective', level: 'B1', en: 'upper', hi: 'ऊपरी', ex: 'Der obere Teil der Brust tut weh.', exEn: 'The upper part of the chest hurts.', exHi: 'Seene ka oopri hissa dard karta hai.' },
    { de: 'prinzipiell', pos: 'adjective', level: 'B1', en: 'basically', hi: 'मूल रूप से', ex: 'Prinzipiell ist alles in Ordnung.', exEn: 'Basically, everything is fine.', exHi: 'Moolatah, sab kuch theek hai.' },
    { de: 'sich anstrengen', pos: 'verb', level: 'B1', en: 'to show effort, exert oneself', hi: 'ज़ोर लगाना', ex: 'Du solltest dich nicht zu sehr anstrengen.', exEn: 'You shouldn\'t exert yourself too much.', exHi: 'Tumhein zyada zor nahi lagaana chahiye.', conj: { praesens: 'strengt sich an', praeteritum: 'strengte sich an', perfekt: 'hat sich angestrengt' } },
    { de: 'sich kämmen', pos: 'verb', level: 'B1', en: 'to comb (oneself)', hi: 'बाल संवारना', ex: 'Ich kämme mir die Haare.', exEn: 'I comb my hair.', exHi: 'Main apne baal sanwaarta hoon.', conj: { praesens: 'kämmt sich', praeteritum: 'kämmte sich', perfekt: 'hat sich gekämmt' } },
    { de: 'sichtbar', pos: 'adjective', level: 'B1', en: 'visible', hi: 'दृश्यमान', ex: 'Die Narbe ist kaum sichtbar.', exEn: 'The scar is barely visible.', exHi: 'Nishaan mushkil se dikhta hai.' },
    { de: 'spüren', pos: 'verb', level: 'B1', en: 'to sense', hi: 'महसूस करना', ex: 'Ich spüre keinen Schmerz mehr.', exEn: 'I don\'t sense any pain anymore.', exHi: 'Mujhe ab koi dard mahsoos nahi hota.', conj: { praesens: 'spürt', praeteritum: 'spürte', perfekt: 'hat gespürt' } },
    { de: 'stärken', pos: 'verb', level: 'B1', en: 'to strengthen', hi: 'मज़बूत करना', ex: 'Diese Übung stärkt die Schulter.', exEn: 'This exercise strengthens the shoulder.', exHi: 'Yeh abhyaas kandhe ko mazboot karta hai.', conj: { praesens: 'stärkt', praeteritum: 'stärkte', perfekt: 'hat gestärkt' } },
    { de: 'unbequem', pos: 'adjective', level: 'B1', en: 'uncomfortable', hi: 'असुविधाजनक', ex: 'Das Bett ist unbequem.', exEn: 'The bed is uncomfortable.', exHi: 'Bistar asuvidhajanak hai.' },
    { de: 'untersagt sein', pos: 'idiom', level: 'B1', en: 'to be forbidden', hi: 'निषिद्ध होना', ex: 'Rauchen ist im Krankenzimmer untersagt.', exEn: 'Smoking is forbidden in the hospital room.', exHi: 'Aspataal ke kamre mein dhoomrapaan nishiddh hai.' },
    { de: 'verschreiben', pos: 'verb', level: 'B1', en: 'to prescribe', hi: 'नुस्खा देना', ex: 'Der Arzt hat mir ein Medikament verschrieben.', exEn: 'The doctor prescribed me medication.', exHi: 'Doctor ne mujhe dawaayi likh di.', conj: { praesens: 'verschreibt', praeteritum: 'verschrieb', perfekt: 'hat verschrieben' } },
    { de: 'warnen', pos: 'verb', level: 'B1', en: 'to warn (vor + D.)', hi: 'चेतावनी देना', ex: 'Die Ärztin warnte mich vor der Anstrengung.', exEn: 'The doctor warned me against exertion.', exHi: 'Doctor ne mujhe zyada mehnat ke khilaaf chetaavani di.', conj: { praesens: 'warnt', praeteritum: 'warnte', perfekt: 'hat gewarnt' } },
    { de: 'zu', pos: 'grammar', level: 'B1', en: 'to (infinitive marker, e.g. du brauchst zu helfen)', hi: '— (Infinitiv चिह्न)', ex: 'Du brauchst nicht zu helfen.', exEn: 'You don\'t need to help.', exHi: 'Tumhein madad karne ki zaroorat nahi.' },
    { de: 'zur Verfügung stehen', pos: 'idiom', level: 'B1', en: 'to be available', hi: 'उपलब्ध होना', ex: 'Der Pfleger steht Ihnen zur Verfügung.', exEn: 'The nurse is available to you.', exHi: 'Nurse aapke liye upalabdh hai.' },
    { de: 'zusammenzählen', pos: 'verb', level: 'B1', en: 'to add up', hi: 'जोड़ना', ex: 'Zähl die Kosten zusammen.', exEn: 'Add up the costs.', exHi: 'Lagat jodo.', conj: { praesens: 'zählt zusammen', praeteritum: 'zählte zusammen', perfekt: 'hat zusammengezählt' } },
    { de: 'zuständig', pos: 'adjective', level: 'B1', en: 'responsible (für + A.)', hi: 'ज़िम्मेदार', ex: 'Wer ist für dieses Zimmer zuständig?', exEn: 'Who is responsible for this room?', exHi: 'Is kamre ke liye kaun zimmedaar hai?' },
    { de: 'blutig', pos: 'adjective', level: 'B1', en: 'bloody', hi: 'खूनी', ex: 'Die Wunde war blutig.', exEn: 'The wound was bloody.', exHi: 'Ghaav khooni tha.' },
    { de: 'Apfelmus', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'apple sauce', hi: 'सेब की चटनी', ex: 'Zum Nachtisch gibt es Apfelmus.', exEn: 'For dessert, there\'s apple sauce.', exHi: 'Dessert mein seb ki chatni hai.' },
    { de: 'Fernsehgerät', art: 'das', gender: 'n', plural: 'Fernsehgeräte', pos: 'noun', level: 'B1', en: 'television', hi: 'टेलीविजन', ex: 'Das Fernsehgerät hängt an der Wand.', exEn: 'The television hangs on the wall.', exHi: 'Television deewaar par latka hai.' },
    { de: 'Festnetz', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'landline', hi: 'लैंडलाइन', ex: 'Ruf mich über das Festnetz an.', exEn: 'Call me on the landline.', exHi: 'Mujhe landline par phone karo.' },
    { de: 'Gehirn', art: 'das', gender: 'n', plural: 'Gehirne', pos: 'noun', level: 'B1', en: 'brain', hi: 'मस्तिष्क', ex: 'Das Gehirn braucht Sauerstoff.', exEn: 'The brain needs oxygen.', exHi: 'Mastishk ko oxygen chahiye.' },
    { de: 'Infoblatt', art: 'das', gender: 'n', plural: 'Infoblätter', pos: 'noun', level: 'B1', en: 'fact sheet', hi: 'सूचना पत्र', ex: 'Das Infoblatt erklärt die Regeln.', exEn: 'The fact sheet explains the rules.', exHi: 'Soochana patra niyam samjhaata hai.' },
    { de: 'Krankenzimmer', art: 'das', gender: 'n', plural: 'Krankenzimmer', pos: 'noun', level: 'B1', en: 'hospital room', hi: 'अस्पताल का कमरा', ex: 'Das Krankenzimmer ist ruhig.', exEn: 'The hospital room is quiet.', exHi: 'Aspataal ka kamra shaant hai.' },
    { de: 'Küchenteam', art: 'das', gender: 'n', plural: 'Küchenteams', pos: 'noun', level: 'B1', en: 'kitchen staff', hi: 'रसोई कर्मचारी', ex: 'Das Küchenteam bereitet das Essen vor.', exEn: 'The kitchen staff prepares the food.', exHi: 'Rasoi karmchari khaana taiyaar karte hain.' },
    { de: 'Nachthemd', art: 'das', gender: 'n', plural: 'Nachthemden', pos: 'noun', level: 'B1', en: 'nightgown', hi: 'रात का वस्त्र', ex: 'Sie trägt ein Nachthemd.', exEn: 'She wears a nightgown.', exHi: 'Woh raat ka vastra pehanti hai.' },
    { de: 'Pulver', art: 'das', gender: 'n', plural: 'Pulver', pos: 'noun', level: 'B1', en: 'powder', hi: 'पाउडर', ex: 'Löse das Pulver in Wasser auf.', exEn: 'Dissolve the powder in water.', exHi: 'Powder ko paani mein gholo.' },
    { de: 'Rätsel', art: 'das', gender: 'n', plural: 'Rätsel', pos: 'noun', level: 'B1', en: 'riddle', hi: 'पहेली', ex: 'Löse ein Rätsel, um dich zu unterhalten.', exEn: 'Solve a riddle to entertain yourself.', exHi: 'Khud ka manoranjan karne ke liye ek paheli suljhaao.' },
    { de: 'Schließfach', art: 'das', gender: 'n', plural: 'Schließfächer', pos: 'noun', level: 'B1', en: 'safe, locker', hi: 'लॉकर', ex: 'Leg deine Wertsachen ins Schließfach.', exEn: 'Put your valuables in the locker.', exHi: 'Apna keemti saamaan locker mein rakho.' },
    { de: 'Schmerzmittel', art: 'das', gender: 'n', plural: 'Schmerzmittel', pos: 'noun', level: 'B1', en: 'painkiller', hi: 'दर्द निवारक', ex: 'Der Pfleger hat mir ein Schmerzmittel gegeben.', exEn: 'The nurse gave me a painkiller.', exHi: 'Nurse ne mujhe ek dard nivaarak diya.' },
    { de: 'Shampoo', art: 'das', gender: 'n', plural: 'Shampoos', pos: 'noun', level: 'B1', en: 'shampoo', hi: 'शैंपू', ex: 'Ich brauche neues Shampoo.', exEn: 'I need new shampoo.', exHi: 'Mujhe naya shampoo chahiye.' },
    { de: 'Signal', art: 'das', gender: 'n', plural: 'Signale', pos: 'noun', level: 'B1', en: 'signal', hi: 'संकेत', ex: 'Das Gerät gibt ein Signal.', exEn: 'The device gives a signal.', exHi: 'Yantra ek sanket deta hai.' },
    { de: 'Steak', art: 'das', gender: 'n', plural: 'Steaks', pos: 'noun', level: 'B1', en: 'steak', hi: 'स्टेक', ex: 'Zum Abendessen gibt es Steak.', exEn: 'For dinner, there\'s steak.', exHi: 'Raat ke khaane mein steak hai.' },
    { de: 'Alarmknopf', art: 'der', gender: 'm', plural: 'Alarmknöpfe', pos: 'noun', level: 'B1', en: 'alarm button', hi: 'अलार्म बटन', ex: 'Der Alarmknopf ist neben dem Bett.', exEn: 'The alarm button is next to the bed.', exHi: 'Alarm button bistar ke paas hai.' },
    { de: 'Apparat', art: 'der', gender: 'm', plural: 'Apparate', pos: 'noun', level: 'B1', en: 'apparatus, machine', hi: 'यंत्र', ex: 'Der Apparat misst den Blutdruck.', exEn: 'The apparatus measures blood pressure.', exHi: 'Yantra blood pressure naapta hai.' },
    { de: 'Bademantel', art: 'der', gender: 'm', plural: 'Bademäntel', pos: 'noun', level: 'B1', en: 'bathrobe', hi: 'स्नान वस्त्र', ex: 'Ich ziehe mir den Bademantel an.', exEn: 'I put on the bathrobe.', exHi: 'Main snaan vastra pehanta hoon.' },
    { de: 'Brand', art: 'der', gender: 'm', plural: 'Brände', pos: 'noun', level: 'B1', en: 'fire', hi: 'आग', ex: 'Bei einem Brand nutze den Notausgang.', exEn: 'In case of a fire, use the emergency exit.', exHi: 'Aag lagne par emergency exit ka upyog karo.' },
    { de: 'Diät-Assistent', art: 'der', gender: 'm', plural: 'Diät-Assistenten', pos: 'noun', level: 'B1', en: 'dietary assistant', hi: 'आहार सहायक', ex: 'Der Diät-Assistent erklärte den Speiseplan.', exEn: 'The dietary assistant explained the meal plan.', exHi: 'Aahaar sahayak ne bhojan yojana samjhaayi.' },
    { de: 'Fruchtsaft', art: 'der', gender: 'm', plural: 'Fruchtsäfte', pos: 'noun', level: 'B1', en: 'fruit juice', hi: 'फलों का रस', ex: 'Ich trinke gern Fruchtsaft.', exEn: 'I like drinking fruit juice.', exHi: 'Mujhe phalon ka ras peena pasand hai.' },
    { de: 'Geist', art: 'der', gender: 'm', plural: 'Geister', pos: 'noun', level: 'B1', en: 'soul, mind', hi: 'आत्मा', ex: 'Ein gesunder Geist braucht Ruhe.', exEn: 'A healthy mind needs rest.', exHi: 'Ek swasth mann ko aaraam chahiye.' },
    { de: 'Haupteingang', art: 'der', gender: 'm', plural: 'Haupteingänge', pos: 'noun', level: 'B1', en: 'main entrance', hi: 'मुख्य प्रवेश द्वार', ex: 'Der Haupteingang ist links.', exEn: 'The main entrance is on the left.', exHi: 'Mukhya pravesh dwaar baayen taraf hai.' },
    { de: 'Hausschuh', art: 'der', gender: 'm', plural: 'Hausschuhe', pos: 'noun', level: 'B1', en: 'slipper', hi: 'चप्पल', ex: 'Trag bitte deine Hausschuhe.', exEn: 'Please wear your slippers.', exHi: 'Kripya apni chappal pehno.' },
    { de: 'Klinikaufenthalt', art: 'der', gender: 'm', plural: 'Klinikaufenthalte', pos: 'noun', level: 'B1', en: 'hospital stay', hi: 'अस्पताल में रहना', ex: 'Der Klinikaufenthalt dauerte drei Tage.', exEn: 'The hospital stay lasted three days.', exHi: 'Aspataal mein rehna teen din tak chala.' },
    { de: 'Krankenbesuch', art: 'der', gender: 'm', plural: 'Krankenbesuche', pos: 'noun', level: 'B1', en: 'hospital visit', hi: 'अस्पताल का दौरा', ex: 'Danke für den Krankenbesuch.', exEn: 'Thanks for the hospital visit.', exHi: 'Aspataal ke daure ke liye dhanyavaad.' },
    { de: 'Krankenwagen', art: 'der', gender: 'm', plural: 'Krankenwagen', pos: 'noun', level: 'B1', en: 'ambulance', hi: 'एम्बुलेंस', ex: 'Der Krankenwagen kam schnell.', exEn: 'The ambulance came quickly.', exHi: 'Ambulance jaldi aa gayi.' },
    { de: 'Nachttisch', art: 'der', gender: 'm', plural: 'Nachttische', pos: 'noun', level: 'B1', en: 'nightstand', hi: 'बेडसाइड टेबल', ex: 'Die Fernbedienung liegt auf dem Nachttisch.', exEn: 'The remote control is on the nightstand.', exHi: 'Remote control nightstand par hai.' },
    { de: 'Notausgang', art: 'der', gender: 'm', plural: 'Notausgänge', pos: 'noun', level: 'B1', en: 'emergency exit', hi: 'आपातकालीन निकास', ex: 'Der Notausgang ist beschildert.', exEn: 'The emergency exit is marked.', exHi: 'Aapaatkaalin nikaas chinhit hai.' },
    { de: 'Notruf', art: 'der', gender: 'm', plural: 'Notrufe', pos: 'noun', level: 'B1', en: 'SOS, emergency call', hi: 'आपातकालीन कॉल', ex: 'Erinnerst du dich an den Notruf?', exEn: 'Do you remember the emergency call?', exHi: 'Kya tumhein woh emergency call yaad hai?' },
    { de: 'Pfannkuchen', art: 'der', gender: 'm', plural: 'Pfannkuchen', pos: 'noun', level: 'B1', en: 'pancake', hi: 'पैनकेक', ex: 'Zum Frühstück gibt es Pfannkuchen.', exEn: 'For breakfast, there are pancakes.', exHi: 'Nashte mein pancake hai.' },
    { de: 'Pfleger', art: 'der', gender: 'm', plural: 'Pfleger', pos: 'noun', level: 'B1', en: 'nurse (male)', hi: 'नर्स (पुरुष)', ex: 'Der Pfleger hat mir ein Schmerzmittel gegeben.', exEn: 'The nurse gave me a painkiller.', exHi: 'Nurse ne mujhe ek dard nivaarak diya.' },
    { de: 'Rest', art: 'der', gender: 'm', plural: 'Reste', pos: 'noun', level: 'B1', en: 'rest, remainder', hi: 'बाकी', ex: 'Den Rest esse ich später.', exEn: 'I\'ll eat the rest later.', exHi: 'Baaki main baad mein khaaunga.' },
    { de: 'Schatten', art: 'der', gender: 'm', plural: 'Schatten', pos: 'noun', level: 'B1', en: 'shadow', hi: 'छाया', ex: 'Der Schatten fiel auf die Wand.', exEn: 'The shadow fell on the wall.', exHi: 'Chhaya deewaar par padi.' },
    { de: 'Schlafanzug', art: 'der', gender: 'm', plural: 'Schlafanzüge', pos: 'noun', level: 'B1', en: 'pyjamas', hi: 'पजामा', ex: 'Er trägt einen bequemen Schlafanzug.', exEn: 'He wears comfortable pyjamas.', exHi: 'Woh aaraamdaayak pajama pehanta hai.' },
    { de: 'Schweinebraten', art: 'der', gender: 'm', plural: 'Schweinebraten', pos: 'noun', level: 'B1', en: 'roast pork', hi: 'भुना हुआ सूअर का मांस', ex: 'Der Schweinebraten war lecker.', exEn: 'The roast pork was delicious.', exHi: 'Bhuna hua suar ka maans swaadisht tha.' },
    { de: 'Trainingsanzug', art: 'der', gender: 'm', plural: 'Trainingsanzüge', pos: 'noun', level: 'B1', en: 'track suit', hi: 'ट्रैकसूट', ex: 'Er trägt einen Trainingsanzug.', exEn: 'He wears a track suit.', exHi: 'Woh tracksuit pehanta hai.' },
    { de: 'Zimmernachbar', art: 'der', gender: 'm', plural: 'Zimmernachbarn', pos: 'noun', level: 'B1', en: 'next-door neighbour (in a room)', hi: 'कमरे का पड़ोसी', ex: 'Mein Zimmernachbar ist sehr freundlich.', exEn: 'My room neighbour is very friendly.', exHi: 'Mera kamre ka padosi bahut mitrapoorna hai.' },
    { de: 'Bedienungsanleitung', art: 'die', gender: 'f', plural: 'Bedienungsanleitungen', pos: 'noun', level: 'B1', en: 'instruction manual', hi: 'निर्देश पुस्तिका', ex: 'Lies die Bedienungsanleitung.', exEn: 'Read the instruction manual.', exHi: 'Nirdesh pustika padho.' },
    { de: 'Besuchszeit', art: 'die', gender: 'f', plural: 'Besuchszeiten', pos: 'noun', level: 'B1', en: 'visiting hours', hi: 'मिलने का समय', ex: 'Die Besuchszeit endet um acht.', exEn: 'Visiting hours end at eight.', exHi: 'Milne ka samay aath baje khatm hota hai.' },
    { de: 'Brust', art: 'die', gender: 'f', plural: 'Brüste', pos: 'noun', level: 'B1', en: 'chest', hi: 'छाती', ex: 'Der obere Teil der Brust tut weh.', exEn: 'The upper part of the chest hurts.', exHi: 'Seene ka oopri hissa dard karta hai.' },
    { de: 'Chipkarte', art: 'die', gender: 'f', plural: 'Chipkarten', pos: 'noun', level: 'B1', en: 'keycard', hi: 'चिप कार्ड', ex: 'Die Chipkarte öffnet die Tür.', exEn: 'The keycard opens the door.', exHi: 'Chip card darwaaza kholta hai.' },
    { de: 'Diät-Assistentin', art: 'die', gender: 'f', plural: 'Diät-Assistentinnen', pos: 'noun', level: 'B1', en: 'dietary assistant (female)', hi: 'आहार सहायक (महिला)', ex: 'Die Diät-Assistentin plant die Mahlzeiten.', exEn: 'The dietary assistant plans the meals.', exHi: 'Aahaar sahayak bhojan ki yojana banaati hai.' },
    { de: 'Drogerie', art: 'die', gender: 'f', plural: 'Drogerien', pos: 'noun', level: 'B1', en: 'drug store', hi: 'दवा की दुकान', ex: 'Kauf das Shampoo in der Drogerie.', exEn: 'Buy the shampoo at the drug store.', exHi: 'Shampoo dawa ki dukaan se khareedo.' },
    { de: 'Gymnastik', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'gymnastics', hi: 'व्यायाम', ex: 'Die Gymnastik stärkt die Schulter.', exEn: 'The gymnastics strengthens the shoulder.', exHi: 'Vyayaam kandhe ko mazboot karta hai.' },
    { de: 'Hauptmahlzeit', art: 'die', gender: 'f', plural: 'Hauptmahlzeiten', pos: 'noun', level: 'B1', en: 'main meal', hi: 'मुख्य भोजन', ex: 'Die Hauptmahlzeit ist mittags.', exEn: 'The main meal is at midday.', exHi: 'Mukhya bhojan dopahar mein hai.' },
    { de: 'Notaufnahme', art: 'die', gender: 'f', plural: 'Notaufnahmen', pos: 'noun', level: 'B1', en: 'emergency room', hi: 'आपातकालीन कक्ष', ex: 'Er wurde in die Notaufnahme gebracht.', exEn: 'He was brought to the emergency room.', exHi: 'Use aapaatkaalin kaksh mein le jaaya gaya.' },
    { de: 'Pflegerin', art: 'die', gender: 'f', plural: 'Pflegerinnen', pos: 'noun', level: 'B1', en: 'nurse (female)', hi: 'नर्स (महिला)', ex: 'Die Pflegerin half mir freundlich.', exEn: 'The nurse helped me kindly.', exHi: 'Nurse ne mujhe dayaalu tarike se madad ki.' },
    { de: 'Rücksicht', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'consideration', hi: 'ख्याल', ex: 'Bitte nimm Rücksicht auf andere Patienten.', exEn: 'Please show consideration for other patients.', exHi: 'Kripya doosre mareezon ka khyaal rakho.' },
    { de: 'Schulter', art: 'die', gender: 'f', plural: 'Schultern', pos: 'noun', level: 'B1', en: 'shoulder', hi: 'कंधा', ex: 'Kühle die Schulter mit Eis.', exEn: 'Cool the shoulder with ice.', exHi: 'Kandhe ko barf se thanda karo.' },
    { de: 'Versichertenkarte', art: 'die', gender: 'f', plural: 'Versichertenkarten', pos: 'noun', level: 'B1', en: 'insurance card', hi: 'बीमा कार्ड', ex: 'Zeig deine Versichertenkarte.', exEn: 'Show your insurance card.', exHi: 'Apna beema card dikhaao.' },
    { de: 'Wasserflasche', art: 'die', gender: 'f', plural: 'Wasserflaschen', pos: 'noun', level: 'B1', en: 'water bottle', hi: 'पानी की बोतल', ex: 'Nimm die Wasserflasche mit.', exEn: 'Take the water bottle with you.', exHi: 'Paani ki botal saath le jaao.' },
    { de: 'Wertsachen', pos: 'noun', level: 'B1', en: 'valuables', hi: 'कीमती सामान', ex: 'Ich kümmere mich um die Wertsachen.', exEn: 'I\'ll take care of the valuables.', exHi: 'Main keemti saamaan ka khyaal rakhoonga.' },
    { de: 'Zahnbürste', art: 'die', gender: 'f', plural: 'Zahnbürsten', pos: 'noun', level: 'B1', en: 'toothbrush', hi: 'टूथब्रश', ex: 'Wo ist meine Zahnbürste?', exEn: 'Where\'s my toothbrush?', exHi: 'Mera toothbrush kahan hai?' },
    { de: 'Zahnpasta', art: 'die', gender: 'f', plural: 'Zahnpasten', pos: 'noun', level: 'B1', en: 'toothpaste', hi: 'टूथपेस्ट', ex: 'Die Zahnpasta ist im Bad.', exEn: 'The toothpaste is in the bathroom.', exHi: 'Toothpaste bathroom mein hai.' },
    { de: 'Zimmernachbarin', art: 'die', gender: 'f', plural: 'Zimmernachbarinnen', pos: 'noun', level: 'B1', en: 'next-door neighbour (female, in a room)', hi: 'कमरे की पड़ोसी', ex: 'Meine Zimmernachbarin ist ruhig.', exEn: 'My room neighbour is quiet.', exHi: 'Meri kamre ki padosi shaant hai.' },
    { de: 'Zwischenmahlzeit', art: 'die', gender: 'f', plural: 'Zwischenmahlzeiten', pos: 'noun', level: 'B1', en: 'snack', hi: 'नाश्ता', ex: 'Ich entscheide mich für eine Zwischenmahlzeit.', exEn: 'I\'m deciding on a snack.', exHi: 'Main ek naashte ka faisla kar raha hoon.' },
    { de: 'einigermaßen', pos: 'adverb', level: 'B1', en: 'more or less', hi: 'लगभग', ex: 'Mir geht es einigermaßen gut.', exEn: 'I\'m doing more or less well.', exHi: 'Main lagbhag theek hoon.' },
    { de: 'einschließlich', pos: 'preposition', level: 'B1', en: 'including', hi: 'सहित', ex: 'Der Preis, einschließlich Steuer, ist fair.', exEn: 'The price, including tax, is fair.', exHi: 'Tax sahit keemat uchit hai.' },
    { de: 'eiskalt', pos: 'adjective', level: 'B1', en: 'ice cold', hi: 'बर्फ जैसा ठंडा', ex: 'Das Wasser ist eiskalt.', exEn: 'The water is ice cold.', exHi: 'Paani barf jaisa thanda hai.' },
    { de: 'raten', pos: 'verb', level: 'B1', en: 'to advise (zu + D.)', hi: 'सलाह देना', ex: 'Der Arzt rät zu Ruhe.', exEn: 'The doctor advises rest.', exHi: 'Doctor aaraam ki salaah deta hai.', conj: { praesens: 'rät', praeteritum: 'riet', perfekt: 'hat geraten' } },
    { de: 'roh', pos: 'adjective', level: 'B1', en: 'raw', hi: 'कच्चा', ex: 'Iss kein rohes Fleisch.', exEn: 'Don\'t eat raw meat.', exHi: 'Kaccha maans mat khaao.' },
    { de: 'schwindelig', pos: 'adjective', level: 'B1', en: 'dizzy', hi: 'चक्कर आना', ex: 'Mir ist schwindelig.', exEn: 'I feel dizzy.', exHi: 'Mujhe chakkar aa raha hai.' },
    { de: 'zwischendurch', pos: 'adverb', level: 'B1', en: 'in between', hi: 'बीच-बीच में', ex: 'Iss zwischendurch etwas Obst.', exEn: 'Eat some fruit in between.', exHi: 'Beech-beech mein kuch fal khaao.' },
    { de: 'Akkusativobjekt', art: 'das', gender: 'n', plural: 'Akkusativobjekte', pos: 'noun', level: 'B1', en: 'direct object', hi: 'कर्म कारक', ex: 'Ein Akkusativobjekt braucht keinen Dativ.', exEn: 'An Akkusativ object doesn\'t need Dativ.', exHi: 'Karm kaarak ko Dativ ki zaroorat nahi hoti.' },
    { de: 'Knödel', art: 'der', gender: 'm', plural: 'Knödel', pos: 'noun', level: 'B1', en: 'German dumpling', hi: 'जर्मन पकौड़ी', ex: 'Zum Mittagessen gibt es Knödel.', exEn: 'For lunch, there are dumplings.', exHi: 'Dopahar ke khaane mein dumpling hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was sind Reflexivpronomen?',
      body: [ 'A reflexive pronoun refers back to the subject of the sentence.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['<span class="de">Ich wasche mich.</span>', 'I wash myself.'],
          ['<span class="de">Anna freut sich.</span>', 'Anna is happy.']
        ]
      },
      hinglish: 'Reflexive pronoun sentence ke subject ki taraf wapas ishaara karta hai.'
    },
    {
      title: 'Vollständige Tabelle',
      body: [ 'Only ich and du change form between Akkusativ and Dativ — every other person uses sich/uns/euch/sich for BOTH cases.' ],
      table: {
        head: ['Person', 'Akkusativ', 'Dativ'],
        rows: [
          ['ich', 'mich', 'mir'],
          ['du', 'dich', 'dir'],
          ['er/sie/es', 'sich', 'sich'],
          ['wir', 'uns', 'uns'],
          ['ihr', 'euch', 'euch'],
          ['sie/Sie', 'sich', 'sich']
        ]
      },
      hinglish: 'Sirf ich aur du apna form Akkusativ aur Dativ ke beech badalte hain — baaki sab persons dono cases ke liye sich/uns/euch/sich use karte hain.'
    },
    {
      title: 'Reflexive Verben mit Akkusativ',
      body: [ 'When there is no other Akkusativ object, the reflexive pronoun is Akkusativ.' ],
      table: {
        head: ['Verb', 'Example'],
        rows: [
          ['sich freuen', '<span class="de">Ich freue mich.</span>'],
          ['sich erinnern (an + A.)', '<span class="de">Anna erinnert sich an den Urlaub.</span>'],
          ['sich setzen', '<span class="de">Rohan setzt sich auf den Stuhl.</span>'],
          ['sich vorbereiten (auf + A.)', '<span class="de">Wir bereiten uns auf die Prüfung vor.</span>']
        ]
      },
      hinglish: 'Jab koi doosra Akkusativ object nahi hota, reflexive pronoun Akkusativ hota hai.'
    },
    {
      title: 'Reflexive Verben mit Dativ',
      body: [ 'Dativ is used when another Akkusativ object already exists in the clause — typically a body part, clothing item, or possession.' ],
      table: {
        head: ['Verb', 'Example'],
        rows: [
          ['sich die Hände waschen', '<span class="de">Ich wasche mir die Hände.</span>'],
          ['sich die Zähne putzen', '<span class="de">Anna putzt sich die Zähne.</span>'],
          ['sich die Jacke anziehen', '<span class="de">Rohan zieht sich die Jacke an.</span>'],
          ['sich ein Auto kaufen', '<span class="de">Wir kaufen uns ein neues Auto.</span>']
        ]
      },
      hinglish: 'Dativ tab use hota hai jab clause mein pehle se ek doosra Akkusativ object ho — aksar body part, kapda, ya possession.'
    },
    {
      title: 'Akkusativ vs. Dativ — direkter Vergleich',
      body: [ 'Compare the exact same verb with and without a second object.' ],
      table: {
        head: ['No second object (Akkusativ)', 'Second object present (Dativ)'],
        rows: [
          ['<span class="de">Ich wasche mich.</span>', '<span class="de">Ich wasche mir die Hände.</span>'],
          ['<span class="de">Ich kämme mich.</span>', '<span class="de">Ich kämme mir die Haare.</span>']
        ]
      },
      hinglish: 'Ek hi verb ko doosre object ke saath aur bina dekho.'
    },
    {
      title: 'Entscheidungshilfe (Flowchart)',
      body: [ 'One question decides the case every time.' ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['Is there another Akkusativ object in the sentence?', 'NO → Akkusativ (mich/dich)'],
          ['Is there another Akkusativ object in the sentence?', 'YES → Dativ (mir/dir)']
        ]
      },
      note: 'Memory trick: only ONE object? → mich/dich. Another object already exists? → mir/dir.',
      hinglish: 'Ek sawaal har baar case tay karta hai: kya sentence mein koi aur Akkusativ object hai? Nahi → Akkusativ. Haan → Dativ.'
    },
    {
      title: '25 wichtige B1-Reflexivverben',
      body: [ 'These are the most common reflexive verbs at B1 level — mostly Akkusativ.' ],
      table: {
        head: ['Group', 'Verbs'],
        rows: [
          ['Feelings/attitude', 'sich freuen, sich fühlen, sich interessieren, sich entscheiden'],
          ['Daily routine', 'sich waschen, sich anziehen, sich rasieren, sich kämmen, sich beeilen, sich setzen'],
          ['Social/mental', 'sich erinnern, sich vorbereiten, sich treffen, sich anmelden, sich vorstellen, sich kümmern']
        ]
      },
      hinglish: 'Yeh sabse common reflexive verbs hain B1 level par — zyaadatar Akkusativ.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These five mistakes come from using the wrong case, or forgetting the reflexive pronoun\'s connection to a second object.' ],
      mistakes: [
        { wrong: 'Ich wasche mich die Hände.', right: 'Ich wasche mir die Hände.', why: 'die Hände is a second Akkusativ object, so the reflexive pronoun must be Dativ: mir.' },
        { wrong: 'Ich freue mir.', right: 'Ich freue mich.', why: 'sich freuen has no second object — the reflexive pronoun stays Akkusativ: mich.' },
        { wrong: 'Ich ziehe mich die Jacke an.', right: 'Ich ziehe mir die Jacke an.', why: 'die Jacke is a second Akkusativ object, so the reflexive pronoun must be Dativ: mir.' },
        { wrong: 'Anna interessiert ihr für Musik.', right: 'Anna interessiert sich für Musik.', why: 'Third person always uses "sich" for both Akkusativ and Dativ — never "ihr" here.' },
        { wrong: 'Ich erinnere mich Deutschland.', right: 'Ich erinnere mich an Deutschland.', why: 'sich erinnern requires the preposition an before its object — it can\'t be dropped.' }
      ],
      hinglish: 'Yeh paanch galtiyaan galat case use karne se, ya reflexive pronoun ka doosre object se connection bhoolne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Reflexive verbs appear constantly in Goethe B1 texts about daily routines, health, and self-care.' ],
      note: 'Quick check: only a reflexive pronoun needed? → Akkusativ. A reflexive pronoun PLUS another Akkusativ object? → Dativ.',
      hinglish: 'Reflexive verbs Goethe B1 texts mein baar-baar aate hain — daily routine, health aur self-care ke baare mein.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Ein Tag im Krankenhaus',
    titleEn: 'A day in the hospital',
    tokens: [
      { w: 'Rohan', role: 'plain', en: 'Rohan', hi: 'रोहन', type: 'Name' },
      { w: 'wachte', role: 'plain', en: 'woke up (Satzende)', hi: 'जागा (Satzende)', type: 'Verb · aufwachen (Präteritum, Satzende)' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Krankenzimmer', role: 'plain', en: 'hospital room', hi: 'अस्पताल का कमरा', type: 'Noun · neut.', why: 'das Krankenzimmer (this chapter).' },
      { w: 'auf', role: 'plain', en: '(aufwachen)', hi: '—', type: 'Verbpartikel' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'fühlte', role: 'r-reflexiv-akk', en: 'felt (Satzende)', hi: 'महसूस किया (Satzende)', type: 'Verb · sich fühlen (Präteritum, Satzende)', why: 'sich fühlen — reflexive Akkusativ, no second object.' },
      { w: 'sich', role: 'r-reflexiv-akk', en: 'himself', hi: 'खुद को', type: 'Reflexivpronomen · Akkusativ' },
      { w: 'schwach', role: 'plain', en: 'weak', hi: 'कमज़ोर', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', type: 'Konjunktion' },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'mehr', role: 'plain', en: 'anymore', hi: 'अब', type: 'Adverb' },
      { w: 'schwindelig', role: 'plain', en: 'dizzy', hi: 'चक्कर', type: 'Adjective', why: 'schwindelig (this chapter): dizzy.' },
      { w: '.', plain: true },
      { w: 'Zuerst', role: 'plain', en: 'first', hi: 'पहले', type: 'Adverb' },
      { w: 'wusch', role: 'r-reflexiv-dat', en: 'washed (Satzende)', hi: 'धोए (Satzende)', type: 'Verb · sich waschen (Präteritum, Satzende)', why: 'sich waschen + Akkusativ-Objekt (die Hände) → Dativ.' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'उसने', type: 'Pronoun' },
      { w: 'sich', role: 'r-reflexiv-dat', en: '(for) himself', hi: 'खुद को', type: 'Reflexivpronomen · Dativ' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'यह', type: 'Article' },
      { w: 'Hände', role: 'plain', en: 'hands', hi: 'हाथ', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'dann', role: 'plain', en: 'then', hi: 'फिर', type: 'Adverb' },
      { w: 'putzte', role: 'r-reflexiv-dat', en: 'brushed (Satzende)', hi: 'साफ़ किए (Satzende)', type: 'Verb · sich putzen (Präteritum, Satzende)' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'उसने', type: 'Pronoun' },
      { w: 'sich', role: 'r-reflexiv-dat', en: '(for) himself', hi: 'खुद को', type: 'Reflexivpronomen · Dativ' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'यह', type: 'Article' },
      { w: 'Zähne', role: 'plain', en: 'teeth', hi: 'दाँत', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Da', role: 'r-conjunction', en: 'as/since', hi: 'चूंकि', type: 'Konjunktion · da', why: 'da — formal, already-known reason (recycled — Ch.2).' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'sich', role: 'r-reflexiv-akk', en: 'himself', hi: 'खुद को', type: 'Reflexivpronomen · Akkusativ', why: 'sich anstrengen — reflexive Akkusativ.' },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'zu', role: 'plain', en: 'too', hi: 'बहुत ज़्यादा', type: 'Adverb' },
      { w: 'sehr', role: 'plain', en: 'much', hi: 'ज़्यादा', type: 'Adverb' },
      { w: 'anstrengen', role: 'r-reflexiv-akk', en: 'to exert (Satzende)', hi: 'ज़ोर लगाना (Satzende)', type: 'Infinitiv (Satzende)', why: 'sich anstrengen (this chapter).' },
      { w: 'sollte', role: 'plain', en: 'should (Satzende)', hi: 'चाहिए (Satzende)', type: 'Verb · Modalverb (Präteritum, Satzende)' },
      { w: ',', plain: true },
      { w: 'zog', role: 'r-reflexiv-dat', en: 'put on (Satzende)', hi: 'पहना (Satzende)', type: 'Verb · sich anziehen (Präteritum, Satzende)', why: 'sich anziehen + Akkusativ-Objekt (den Bademantel) → Dativ.' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'उसने', type: 'Pronoun' },
      { w: 'sich', role: 'r-reflexiv-dat', en: '(for) himself', hi: 'खुद को', type: 'Reflexivpronomen · Dativ' },
      { w: 'langsam', role: 'plain', en: 'slowly', hi: 'धीरे-धीरे', type: 'Adjective' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Bademantel', role: 'plain', en: 'bathrobe', hi: 'स्नान वस्त्र', type: 'Noun · masc.', why: 'der Bademantel (this chapter).' },
      { w: 'an', role: 'r-reflexiv-dat', en: '(anziehen)', hi: '—', type: 'Verbpartikel' },
      { w: '.', plain: true },
      { w: 'Später', role: 'plain', en: 'later', hi: 'बाद में', type: 'Adverb' },
      { w: 'erinnerte', role: 'r-reflexiv-akk', en: 'remembered (Satzende)', hi: 'याद किया (Satzende)', type: 'Verb · sich erinnern (Präteritum, Satzende)', why: 'sich erinnern (an + A.) — reflexive Akkusativ.' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'उसने', type: 'Pronoun' },
      { w: 'sich', role: 'r-reflexiv-akk', en: 'himself', hi: 'खुद को', type: 'Reflexivpronomen · Akkusativ' },
      { w: 'an', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Notruf', role: 'plain', en: 'SOS call', hi: 'आपातकालीन कॉल', type: 'Noun · masc.', why: 'der Notruf (this chapter).' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'freute', role: 'r-reflexiv-akk', en: 'was glad (Position 2)', hi: 'खुश हुआ (Position 2)', type: 'Verb · sich freuen (Präteritum, Position 2)' },
      { w: 'sich', role: 'r-reflexiv-akk', en: 'himself', hi: 'खुद', type: 'Reflexivpronomen · Akkusativ' },
      { w: 'über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'schnelle', role: 'plain', en: 'quick', hi: 'तेज़', type: 'Adjective · schwach · Akk.', why: 'Weak declension: die + Akkusativ feminine → -e (recycled — Ch.12).' },
      { w: 'Hilfe', role: 'plain', en: 'help', hi: 'मदद', type: 'Noun · fem.' },
      { w: '.', plain: true }
    ],
    translation: 'Rohan woke up in the hospital room. He felt weak, but no longer dizzy. First he washed his hands, then he brushed his teeth. Since he shouldn\'t exert himself too much, he slowly put on the bathrobe. Later, he remembered the SOS call and was glad about the quick help.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_023_L001', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, wie fühlst du dich jetzt zu Hause? Besser als im Krankenhaus?', en: 'Timo, how do you feel now at home? Better than in the hospital?' },
      { id: 'B1_023_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Viel besser, aber ich kann mir die Schuhe noch nicht selbst binden.', en: 'Much better, but I still can\'t tie my own shoes.' },
      { id: 'B1_023_L003', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Kein Problem, ich helfe dir. Wäschst du dir die Haare schon allein?', en: 'No problem, I\'ll help you. Are you already washing your hair alone?' },
      { id: 'B1_023_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ja, das schaffe ich mir mittlerweile allein, danke der Nachfrage!', en: 'Yes, I manage that myself now, thanks for asking!' }
    ],
    transcript: 'Timo, wie fühlst du dich jetzt zu Hause? Besser als im Krankenhaus? Viel besser, aber ich kann mir die Schuhe noch nicht selbst binden. Kein Problem, ich helfe dir. Wäschst du dir die Haare schon allein? Ja, das schaffe ich mir mittlerweile allein, danke der Nachfrage!',
    translation: 'Timo, how do you feel now at home? Better than in the hospital? Much better, but I still can\'t tie my own shoes. No problem, I\'ll help you. Are you already washing your hair alone? Yes, I manage that myself now, thanks for asking!',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'fühlst' },
      { w: 'du' },
      { w: 'dich' },
      { w: 'jetzt' },
      { w: 'zu' },
      { w: 'Hause' },
      { w: '?', plain: true },
      { w: 'Besser' },
      { w: 'als' },
      { w: 'im' },
      { w: 'Krankenhaus' },
      { w: '?', plain: true },
      { w: 'Viel' },
      { w: 'besser' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'kann' },
      { w: 'mir' },
      { w: 'die' },
      { w: 'Schuhe' },
      { w: 'noch' },
      { w: 'nicht' },
      { w: 'selbst' },
      { w: 'binden' },
      { w: '.', plain: true },
      { w: 'Kein' },
      { w: 'Problem' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'helfe' },
      { w: 'dir' },
      { w: '.', plain: true },
      { w: 'Wäschst' },
      { w: 'du' },
      { w: 'dir' },
      { w: 'die' },
      { w: 'Haare' },
      { w: 'schon' },
      { w: 'allein' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'schaffe' },
      { w: 'ich' },
      { w: 'mir' },
      { w: 'mittlerweile' },
      { w: 'allein' },
      { w: ',', plain: true },
      { w: 'danke' },
      { w: 'der' },
      { w: 'Nachfrage' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was kann Timo noch nicht selbst machen?', qEn: 'What can Timo not yet do himself?', options: ['die Haare waschen', 'die Schuhe binden', 'essen', 'sprechen'], optionsEn: ['wash her hair', 'tie her shoes', 'eat', 'speak'], answer: 1,
        explain: '"… ich kann mir die Schuhe noch nicht selbst binden."' },
      { q: 'Was kann Timo schon allein machen?', qEn: 'What can Timo already do alone?', options: ['die Schuhe binden', 'die Haare waschen', 'laufen', 'kochen'], optionsEn: ['tie her shoes', 'wash her hair', 'run', 'cook'], answer: 1,
        explain: '"Ja, das schaffe ich mir mittlerweile allein."' }
    ]
  },

  speaking: [
    { task: "Dein Freund fragt, wie du dich zu Hause fühlst.", taskEn: "Your friend asks how you feel at home.", de: "Ich fühle mich viel besser als im Krankenhaus.", en: "I feel much better than in hospital." },
    { task: "Sag, was du noch nicht selbst kannst.", taskEn: "Say what you can't do yourself yet.", de: "Ich kann mir die Schuhe noch nicht selbst binden.", en: "I can't tie my shoes myself yet." },
    { task: "Eine Freundin fragt nach deinem Morgen.", taskEn: "A friend asks about your morning.", de: "Ich wasche mich, creme mich ein und ziehe mich langsam an.", en: "I wash, put on cream and get dressed slowly." },
    { task: "Die Ärztin fragt, wie du dich um die Wunde kümmerst.", taskEn: "The doctor asks how you look after the wound.", de: "Ich kühle sie und creme mir die Haut jeden Abend ein.", en: "I cool it and put cream on my skin every evening." },
    { task: "Ein Kollege fragt, wie du dich nach der Arbeit erholst.", taskEn: "A colleague asks how you relax after work.", de: "Ich setze mich hin, atme ruhig und nehme mir Zeit.", en: "I sit down, breathe calmly and take my time." },
    { task: "Deine Mutter fragt, ob du dich ausreichend ausruhst.", taskEn: "Your mother asks whether you rest enough.", de: "Ich ruhe mich mittags aus und nehme mir die Medizin ein.", en: "I rest at midday and take my medicine." },
    { task: "Rollenspiel: Ihr sprecht über die Zeit nach der Entlassung.", taskEn: "Role-play: you talk about the time after being discharged.", de: "Ich wasche mir die Haare allein. — Und ich helfe dir, damit du dich nicht bewegen musst.", en: "I wash my hair on my own. — And I'll help you, so you don't have to move." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short diary entry (six to eight sentences) — a morning routine, a hospital visit, or preparing for something important — using at least five reflexive verbs (a mix of Akkusativ and Dativ).',
    starters: ['Ich wasche mir …', 'Ich freue mich …', 'Ich erinnere mich …'],
    placeholder: 'Heute Morgen wusch ich mir die Hände und putzte mir die Zähne. Danach fühlte ich mich …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Ich wasche ___ die Hände." (second object present)',
      options: ['mich', 'mir', 'mich mir'],
      answer: 1,
      explain: 'die Hände is a second Akkusativ object, so the reflexive pronoun is Dativ: mir.'
    },
    gap: {
      sentence: ['Anna erinnert ', ' an den Urlaub.'],
      gaps: [ { answer: 'sich', accepts: ['sich'] } ],
      explain: 'Third person always uses sich, for both Akkusativ and Dativ.'
    },
    match: {
      q: 'Match each situation to Akkusativ or Dativ.',
      pairs: [
        { noun: 'Ich wasche mich.', art: 'Akkusativ (kein zweites Objekt)' },
        { noun: 'Ich wasche mir die Hände.', art: 'Dativ (zweites Objekt)' },
        { noun: 'Ich kämme mich.', art: 'Akkusativ (kein zweites Objekt)' },
        { noun: 'Ich kämme mir die Haare.', art: 'Dativ (zweites Objekt)' }
      ]
    },
    builder: {
      target: 'Build: "I comb my hair."',
      bank: ['Ich', 'kämme', 'mir', 'die', 'Haare', '.'],
      answer: ['Ich', 'kämme', 'mir', 'die', 'Haare', '.'],
      roles: { 'mir': 'r-reflexiv-dat' }
    },
    classifyAkkDat: {
      title: 'Akkusativ oder Dativ?',
      items: [
        { phrase: 'Ich freue mich.', answer: 'Akkusativ' },
        { phrase: 'Ich putze mir die Zähne.', answer: 'Dativ' },
        { phrase: 'Rohan setzt sich.', answer: 'Akkusativ' },
        { phrase: 'Wir kaufen uns ein Auto.', answer: 'Dativ' }
      ]
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich ziehe mich die Jacke an.',
      right: 'Ich ziehe mir die Jacke an.',
      explain: 'die Jacke is a second Akkusativ object, so the reflexive pronoun must be Dativ: mir.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Ich freue ___."', options: ['mich', 'mir', 'mich mir'], answer: 0,
      explain: 'sich freuen has no second object — Akkusativ: mich.' },
    { q: 'Complete: "Ich kämme ___ die Haare."', options: ['mich', 'mir', 'mich mir'], answer: 1,
      explain: 'die Haare is a second Akkusativ object — Dativ: mir.' },
    { q: 'Which form is used for er/sie/es in BOTH Akkusativ and Dativ?', options: ['ihr/ihm', 'sich', 'ihn/ihr'], answer: 1,
      explain: 'Third person always uses sich for both cases.' },
    { q: 'Complete: "Wir kaufen ___ ein neues Auto."', options: ['uns', 'wir', 'unser'], answer: 0,
      explain: 'ein neues Auto is a second Akkusativ object — Dativ: uns (same form as Akkusativ for wir).' },
    { q: 'Which sentence contains an error?', options: ['Ich wasche mir die Hände.', 'Anna interessiert ihr für Musik.', 'Rohan setzt sich auf den Stuhl.'], answer: 1,
      explain: 'Third person always uses sich — it should be "Anna interessiert sich für Musik."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-reflexiv-akk', html: 'No second Akkusativ object? Use mich/dich/sich/uns/euch/sich — the Akkusativ reflexive pronoun.' },
    { c: 'r-reflexiv-dat', html: 'Another Akkusativ object already present (body part, clothing, possession)? Use mir/dir/sich/uns/euch/sich — the Dativ reflexive pronoun.' },
    { c: 'r-reflexiv-akk', html: 'Only ich and du change form between the two cases — every other person uses sich/uns/euch/sich for both.' }
  ],
  revisionTips: [
    'Whenever you build a reflexive sentence, check: is there already another Akkusativ object? If yes, the reflexive pronoun becomes Dativ.',
    'Practise body-part verbs specifically (sich waschen, sich kämmen, sich putzen) — they\'re the clearest examples of the Dativ pattern.',
    'Remember: only ich/du change form — everyone else uses sich (or uns/euch) for both cases.'
  ]
};

window.CHAPTER = CHAPTER;
