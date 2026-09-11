/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 5 · Chapter 45
   "Passiversatz: sich lassen" — sich + Infinitiv + lassen
   replaces "können + Passiv" to express possibility/feasibility
   naturally: "Das Problem lässt sich lösen" = "kann gelöst werden".
   Does NOT teach bekommen-Passiv, haben+zu, sein+zu.
   IMPORTANT: dialogue uses ONLY Frau Behrens and Timo.
   Vocabulary source: uploaded Chapter 45 list (62 items).
============================================================ */
const CHAPTER = {
  id: 'b2-45-passiversatz-sich-lassen',
  phase: 'B2 · Phase 5',
  number: 45,
  title: 'Passiversatz: sich lassen',
  titleEn: 'Passive alternative: sich lassen',
  description: 'Das Problem lässt sich lösen — the natural, elegant alternative to "kann gelöst werden".',
  xp: 540,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 46, title: 'Unpersönliches Passiv', titleEn: 'Impersonal passive' , href: 'chapter-b2-46-unpersoenliches-passiv.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: '<em>Lässt sich</em> — the elegant shortcut',
    intro: 'At the doctor\'s, Timo asks whether his symptom can be treated and his blood value checked today — Frau Behrens answers every time with the natural alternative to kann … werden: das lässt sich behandeln, das lässt sich sofort machen.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how "lässt sich" expresses possibility more naturally than passive + können'
    ],
    scene: 'Im Büro',
    femaleSpeakers: ['Frau Behrens'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Lässt', role: 'r-verb', en: 'can', hi: 'सकता है', pron: 'LEST', type: 'Verb · lassen', why: 'sich lassen + Infinitiv = passive alternative, can be done (this chapter).', ex: 'Das lässt sich behandeln.', exEn: 'That can be treated.' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'mein', role: 'r-subject', en: 'my (neut.)', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Symptom', role: 'r-subject', en: 'symptom', hi: 'लक्षण', pron: 'züm-PTOHM', type: 'Noun · neut.' },
        { w: 'behandeln', role: 'r-verb', en: 'treat', hi: 'उपचार करना', pron: 'be-HAN-deln', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Can my symptom be treated?', hi: 'Kya mera lakshan upachaarit kiya ja sakta hai?' },
      { speaker: 'Frau Behrens', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'lässt', role: 'r-verb', en: 'can', hi: 'सकता है', pron: 'LEST', type: 'Verb · lassen' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'gut', role: 'r-akkusativ', en: 'well', hi: 'अच्छी तरह', pron: 'goot', type: 'Adverb' },
        { w: 'behandeln', role: 'r-verb', en: 'treat', hi: 'उपचार करना', pron: 'be-HAN-deln', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes, that can be treated well.', hi: 'Haan, yeh achhi tarah upachaarit kiya ja sakta hai.' },
      { speaker: 'Timo', tokens: [
        { w: 'Lässt', role: 'r-verb', en: 'can', hi: 'सकता है', pron: 'LEST', type: 'Verb · lassen' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Blutwert', role: 'r-subject', en: 'blood value', hi: 'ख़ून की जांच', pron: 'BLOOT-vairt', type: 'Noun · masc.', why: 'der Blutwert (this chapter).', ex: 'der Blutwert' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी', pron: 'nokh', type: 'Adverb' },
        { w: 'checken', role: 'r-verb', en: 'check', hi: 'जांचना', pron: 'CHE-ken', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Can the blood value still be checked today?', hi: 'Kya khoon ki jaanch aaj abhi bhi ho sakti hai?' },
      { speaker: 'Frau Behrens', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'lässt', role: 'r-verb', en: 'can', hi: 'सकता है', pron: 'LEST', type: 'Verb · lassen' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'sofort', role: 'r-akkusativ', en: 'right away', hi: 'अभी', pron: 'zo-FORT', type: 'Adverb' },
        { w: 'machen', role: 'r-verb', en: 'do', hi: 'किया जाना', pron: 'MA-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes, that can be done right away.', hi: 'Haan, yeh abhi kiya ja sakta hai.' },
      { speaker: 'Timo', tokens: [
        { w: 'Woran', role: 'r-question', en: 'on what', hi: 'किस पर', pron: 'vo-RAN', type: 'Question word' },
        { w: 'erkennt', role: 'r-verb', en: 'does one recognize', hi: 'पहचान होती है', pron: 'er-KENT', type: 'Verb · erkennen' },
        { w: 'man', role: 'r-subject', en: 'one', hi: 'कोई', pron: 'man', type: 'Pronoun · indefinite' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Diagnose', role: 'r-akkusativ', en: 'diagnosis', hi: 'निदान', pron: 'dee-a-GNOH-zuh', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'On what does one recognize the diagnosis?', hi: 'Nidaan ki pehchaan kis par hoti hai?' },
      { speaker: 'Frau Behrens', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'lässt', role: 'r-verb', en: 'can', hi: 'सकता है', pron: 'LEST', type: 'Verb · lassen' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'erst', role: 'r-akkusativ', en: 'only', hi: 'ही', pron: 'airst', type: 'Adverb' },
        { w: 'nach', role: 'r-preposition', en: 'after', hi: 'के बाद', pron: 'nahkh', type: 'Preposition' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Test', role: 'r-dativ', en: 'test (dat.)', hi: 'टेस्ट के', pron: 'test', type: 'Noun · masc. dat.' },
        { w: 'genau', role: 'r-akkusativ', en: 'precisely', hi: 'ठीक से', pron: 'ge-NOW', type: 'Adverb' },
        { w: 'vermuten', role: 'r-verb', en: 'suspect', hi: 'अनुमान लगाना', pron: 'fer-MOO-ten', type: 'Verb · infinitive (Satzende)', why: 'vermuten = to suspect/assume (this chapter).', ex: 'Das lässt sich vermuten.', exEn: 'That can be suspected.' },
        { w: '.', plain: true }
      ], en: 'That can only be precisely suspected after the test.', hi: 'Yeh test ke baad hi theek se anumaan lagaaya ja sakta hai.' },
      { speaker: 'Timo', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'froh', role: 'r-akkusativ', en: 'glad', hi: 'ख़ुश', pron: 'froh', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'behandeln', role: 'r-verb', en: 'treat', hi: 'उपचारित करना', pron: 'be-HAN-deln', type: 'Verb · infinitive' },
        { w: 'lässt', role: 'r-verb', en: 'can', hi: 'सकता है', pron: 'LEST', type: 'Verb · lassen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Thanks! I am glad that that can be treated.', hi: 'Dhanyavaad! Mujhe khushi hai ki iska upachaar ho sakta hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de">Das Problem kann gelöst werden.</span> is grammatically fine — but native speakers usually say <span class="de r-lassen">Das Problem lässt sich lösen.</span> Same meaning, more elegant, much more common.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is PASSIVERSATZ MIT SICH LASSEN (B2 level): "sich + Infinitiv + lassen" replaces "können + Passiv" to express possibility/feasibility more naturally. Example: "Das Problem lässt sich lösen" = "Das Problem kann gelöst werden" (the problem can be solved). Negation goes before the infinitive: "Das lässt sich nicht ändern" (that cannot be changed). ' +
    'Do NOT expect or require bekommen-Passiv, haben+zu, or sein+zu — those are separate topics taught later; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that "lassen" is correctly conjugated to agree with the subject (lässt / lässt / lassen).\n' +
    '- Check that "sich" is present and that the infinitive is at the end of the clause.\n' +
    '- Check that negation ("nicht") is placed immediately before the infinitive, not elsewhere.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Passiversatz check:</b> one sentence on whether the learner used "sich lassen" naturally instead of overusing the plain passive.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you use "sich lassen" naturally instead of the clunky können-passive. Ready for the bekommen-passive next.',
    mid: 'Good. Re-read the Main Comparison Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: lässt sich = can be ..., and the infinitive always comes last.'
  },

  parserSentence: [
    { w: 'Das', role: 'plain' }, { w: 'Problem', role: 'plain' }, { w: 'lässt', role: 'r-lassen' },
    { w: 'sich', role: 'r-lassen' }, { w: 'lösen', role: 'r-lassen' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: "sich lassen" is the natural, elegant alternative to können + Passiv.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Frau Behrens and Timo troubleshoot a software rollout using "lässt sich" throughout.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 62 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master Passiversatz formation, negation placement, and idiomatic uses like "das lässt sich hören".' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a software manual and a project report full of "sich lassen" constructions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify passive vs Passiversatz and their shared meaning.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe what is possible or feasible using "sich lassen" naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write user guides and reports using Passiversatz instead of overusing passive.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill passive-to-Passiversatz transformation and negation placement.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 540 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 62 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Passive-to-Passiversatz drills, negation practice, and a user-guide writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full comparison table, structure diagram, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Das Problem lässt sich lösen.', text: 'Use sich lassen as a natural alternative to können + Passiv' },
    { de: 'Der Chip lässt sich nicht ersetzen.', text: 'Place negation correctly, right before the infinitive' },
    { de: 'Das lässt sich hören.', text: 'Recognize idiomatic uses of sich lassen' },
    { de: 'lässt sich = can be ...', text: 'Apply the meaning rule instantly, without overthinking' },
    { de: 'Common in manuals, reports, and formal German', text: 'Recognize the register where Passiversatz thrives' }
  ],

  // ---------- Vocabulary (62 items — uploaded chapter-45 list) ----------
  vocab: [
    { de: 'Nation', art: 'die', gender: 'f', plural: 'Nationen', pos: 'noun', level: 'B2', register: 'written', en: 'nation', hi: 'राष्ट्र', ex: 'Die Nation feierte den Feiertag.', exEn: 'The nation celebrated the holiday.', exHi: 'Rashtra ne chhutti manaayi.', ex2: 'Viele Nationen haben teilgenommen.', ex2En: 'Many nations have participated.', ex2Hi: 'Kai rashtron ne bhaag liya hai.' },
    { de: 'Neuerung', art: 'die', gender: 'f', plural: 'Neuerungen', pos: 'noun', level: 'B2', register: 'written', en: 'innovation, novelty', hi: 'नवाचार', ex: 'Die Neuerung überzeugte alle.', exEn: 'The innovation convinced everyone.', exHi: 'Navaachaar ne sabko manaaya.', ex2: 'Sie haben eine Neuerung eingeführt.', ex2En: 'They\'ve introduced an innovation.', ex2Hi: 'Unhone ek navaachaar laagu kiya hai.' },
    { de: 'Professur', art: 'die', gender: 'f', plural: 'Professuren', pos: 'noun', level: 'B2', register: 'written', en: 'professorship', hi: 'प्रोफेसर पद', ex: 'Sie erhielt eine Professur.', exEn: 'She received a professorship.', exHi: 'Usne professor pad praapt kiya.', ex2: 'Er hat die Professur angenommen.', ex2En: 'He\'s accepted the professorship.', ex2Hi: 'Usne professor pad sweekaar kiya hai.' },
    { de: 'Programmankündigung', art: 'die', gender: 'f', plural: 'Programmankündigungen', pos: 'noun', level: 'B2', register: 'written', en: 'programme announcement', hi: 'कार्यक्रम घोषणा', ex: 'Die Programmankündigung lässt sich noch ändern.', exEn: 'The programme announcement can still be changed.', exHi: 'Karyakram ghoshna abhi bhi badli ja sakti hai.', ex2: 'Sie haben die Programmankündigung veröffentlicht.', ex2En: 'They\'ve published the programme announcement.', ex2Hi: 'Unhone karyakram ghoshna prakaashit ki hai.' },
    { de: 'Putzgewohnheit', art: 'die', gender: 'f', plural: 'Putzgewohnheiten', pos: 'noun', level: 'B2', register: 'written', en: 'cleaning habit', hi: 'सफाई की आदत', ex: 'Ihre Putzgewohnheiten haben sich verändert.', exEn: 'Her cleaning habits have changed.', exHi: 'Uski safaai ki aadatein badal gayi hain.', ex2: 'Sie haben neue Putzgewohnheiten entwickelt.', ex2En: 'They\'ve developed new cleaning habits.', ex2Hi: 'Unhone nayi safaai ki aadatein vikasit ki hain.' },
    { de: 'ratifizieren', pos: 'verb', level: 'B2', register: 'written', en: 'to ratify', hi: 'अनुसमर्थन करना', ex: 'Das Parlament ratifizierte den Vertrag.', exEn: 'Parliament ratified the treaty.', exHi: 'Sansad ne sandhi ka anusamarthan kiya.', ex2: 'Sie haben das Abkommen ratifiziert.', ex2En: 'They\'ve ratified the agreement.', ex2Hi: 'Unhone samjhauta anusamarthit kiya hai.', conj: { praesens: 'ratifiziert', praeteritum: 'ratifizierte', perfekt: 'hat ratifiziert' } },
    { de: 'Raumtemperatur', art: 'die', gender: 'f', plural: 'Raumtemperaturen', pos: 'noun', level: 'B2', register: 'both', en: 'room temperature', hi: 'कमरे का तापमान', ex: 'Die Raumtemperatur lässt sich einstellen.', exEn: 'The room temperature can be adjusted.', exHi: 'Kamre ka taapmaan set kiya ja sakta hai.', ex2: 'Sie haben die Raumtemperatur gemessen.', ex2En: 'They\'ve measured the room temperature.', ex2Hi: 'Unhone kamre ka taapmaan maapa hai.' },
    { de: 'schildern', pos: 'verb', level: 'B2', register: 'written', en: 'to depict, describe', hi: 'चित्रित करना', ex: 'Sie schilderte ihre Erfahrung genau.', exEn: 'She depicted her experience precisely.', exHi: 'Usne apna anubhav sateek roop se bataaya.', ex2: 'Er hat die Situation geschildert.', ex2En: 'He\'s described the situation.', ex2Hi: 'Usne sthiti ka varnan kiya hai.', conj: { praesens: 'schildert', praeteritum: 'schilderte', perfekt: 'hat geschildert' } },
    { de: 'sträuben', pos: 'verb', level: 'B2', register: 'written', en: 'to bristle, resist', hi: 'विरोध करना', ex: 'Er sträubte sich gegen die Änderung.', exEn: 'He resisted the change.', exHi: 'Usne badlaav ka virodh kiya.', ex2: 'Sie haben sich dagegen gesträubt.', ex2En: 'They\'ve resisted against it.', ex2Hi: 'Unhone iske khilaaf virodh kiya hai.', conj: { praesens: 'sträubt sich', praeteritum: 'sträubte sich', perfekt: 'hat sich gesträubt' } },
    { de: 'tierlieb', pos: 'adjective', level: 'B2', register: 'both', en: 'fond of animals', hi: 'जानवरों से प्रेम करने वाला', ex: 'Sie ist sehr tierlieb.', exEn: 'She is very fond of animals.', exHi: 'Woh jaanvaron se bahut pyaar karti hai.', ex2: 'Tierliebe Menschen adoptieren oft Hunde.', ex2En: 'Animal-loving people often adopt dogs.', ex2Hi: 'Jaanvaron se prem karne waale log aksar kutte apnaate hain.' },
    { de: 'Tränenflüssigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'tear fluid', hi: 'आंसू का तरल', ex: 'Die Tränenflüssigkeit schützt das Auge.', exEn: 'Tear fluid protects the eye.', exHi: 'Aansu ka taral aankh ki suraksha karta hai.', ex2: 'Sie haben die Tränenflüssigkeit analysiert.', ex2En: 'They\'ve analysed the tear fluid.', ex2Hi: 'Unhone aansu ke taral ka vishleshan kiya hai.' },
    { de: 'traumatisiert', pos: 'adjective', level: 'B2', register: 'written', en: 'traumatised', hi: 'आघातग्रस्त', ex: 'Der Patient war traumatisiert.', exEn: 'The patient was traumatised.', exHi: 'Mareez aaghaatgrast tha.', ex2: 'Sie helfen traumatisierten Menschen.', ex2En: 'They help traumatised people.', ex2Hi: 'Woh aaghaatgrast logon ki madad karte hain.' },
    { de: 'umbringen', pos: 'verb', level: 'B2', register: 'both', en: 'to kill', hi: 'मार डालना', ex: 'Der Stress könnte ihn umbringen.', exEn: 'The stress could kill him.', exHi: 'Tanaav use maar sakta hai.', ex2: 'Niemand hat ihn umgebracht.', ex2En: 'No one has killed him.', ex2Hi: 'Kisi ne use nahi maara.', conj: { praesens: 'bringt um', praeteritum: 'brachte um', perfekt: 'hat umgebracht' } },
    { de: 'unterbrechen', pos: 'verb', level: 'B2', register: 'both', en: 'to interrupt', hi: 'बाधित करना', ex: 'Sie unterbrach die Sitzung kurz.', exEn: 'She briefly interrupted the meeting.', exHi: 'Usne baithak ko thodi der ke liye baadhit kiya.', ex2: 'Er hat das Gespräch unterbrochen.', ex2En: 'He\'s interrupted the conversation.', ex2Hi: 'Usne baatcheet ko baadhit kiya hai.', conj: { praesens: 'unterbricht', praeteritum: 'unterbrach', perfekt: 'hat unterbrochen' } },
    { de: 'variabel', pos: 'adjective', level: 'B2', register: 'written', en: 'variable', hi: 'परिवर्तनशील', ex: 'Der Preis ist variabel.', exEn: 'The price is variable.', exHi: 'Keemat parivartansheel hai.', ex2: 'Sie haben variable Zinssätze angeboten.', ex2En: 'They\'ve offered variable interest rates.', ex2Hi: 'Unhone parivartansheel byaaj dar di hai.' },
    { de: 'vergleichsweise', pos: 'adverb', level: 'B2', register: 'written', en: 'comparatively', hi: 'तुलनात्मक रूप से', ex: 'Der Chip war vergleichsweise günstig.', exEn: 'The chip was comparatively cheap.', exHi: 'Chip tulnaatmak roop se sasta tha.', ex2: 'Sie haben vergleichsweise wenig Zeit.', ex2En: 'They have comparatively little time.', ex2Hi: 'Unke paas tulnaatmak roop se kam samay hai.' },
    { de: 'Verhältnis', art: 'das', gender: 'n', plural: 'Verhältnisse', pos: 'noun', level: 'B2', register: 'both', en: 'relationship, ratio', hi: 'संबंध, अनुपात', ex: 'Das Verhältnis zwischen den Firmen ist gut.', exEn: 'The relationship between the companies is good.', exHi: 'Companiyon ke beech sambandh achha hai.', ex2: 'Sie haben das Verhältnis verbessert.', ex2En: 'They\'ve improved the relationship.', ex2Hi: 'Unhone sambandh behtar banaaya hai.' },
    { de: 'vermessen', pos: 'verb', level: 'B2', register: 'written', en: 'to measure, survey', hi: 'मापना', ex: 'Der Blutwert lässt sich vermessen.', exEn: 'The blood value can be measured.', exHi: 'Rakt maan maapa ja sakta hai.', ex2: 'Sie haben das Grundstück vermessen.', ex2En: 'They\'ve surveyed the plot.', ex2Hi: 'Unhone zameen ka sarvekshan kiya hai.', conj: { praesens: 'vermisst', praeteritum: 'vermaß', perfekt: 'hat vermessen' } },
    { de: 'vermindern', pos: 'verb', level: 'B2', register: 'written', en: 'to reduce, lessen', hi: 'कम करना', ex: 'Sie verminderten die Kosten.', exEn: 'They reduced the costs.', exHi: 'Unhone lagat kam ki.', ex2: 'Der Fehler hat sich vermindert.', ex2En: 'The error has lessened.', ex2Hi: 'Galti kam ho gayi hai.', conj: { praesens: 'vermindert', praeteritum: 'verminderte', perfekt: 'hat vermindert' } },
    { de: 'vermuten', pos: 'verb', level: 'B2', register: 'both', en: 'to suppose, suspect, presume', hi: 'अनुमान लगाना', ex: 'Sie vermutete einen Defekt.', exEn: 'She suspected a defect.', exHi: 'Usne dosh hone ka anumaan lagaaya.', ex2: 'Er hat das Problem vermutet.', ex2En: 'He\'s suspected the problem.', ex2Hi: 'Usne samasya ka anumaan lagaaya hai.', conj: { praesens: 'vermutet', praeteritum: 'vermutete', perfekt: 'hat vermutet' } },
    { de: 'verringern', pos: 'verb', level: 'B2', register: 'written', en: 'to reduce, diminish', hi: 'घटाना', ex: 'Die Maßnahme verringerte das Risiko.', exEn: 'The measure diminished the risk.', exHi: 'Upaay ne khatre ko ghataaya.', ex2: 'Sie haben den Verbrauch verringert.', ex2En: 'They\'ve reduced the consumption.', ex2Hi: 'Unhone upyog ghataaya hai.', conj: { praesens: 'verringert', praeteritum: 'verringerte', perfekt: 'hat verringert' } },
    { de: 'wegfallen', pos: 'verb', level: 'B2', register: 'written', en: 'to be dropped, cease to apply', hi: 'समाप्त हो जाना', ex: 'Die Gebühr fällt weg.', exEn: 'The fee is being dropped.', exHi: 'Shulk samaapt ho jaata hai.', ex2: 'Diese Regel ist weggefallen.', ex2En: 'This rule has ceased to apply.', ex2Hi: 'Yeh niyam samaapt ho gaya hai.', conj: { praesens: 'fällt weg', praeteritum: 'fiel weg', perfekt: 'ist weggefallen' } },
    { de: 'werfen', pos: 'verb', level: 'B2', register: 'both', en: 'to throw', hi: 'फेंकना', ex: 'Sie warf den Ball.', exEn: 'She threw the ball.', exHi: 'Usne gend phenki.', ex2: 'Er hat einen Blick auf den Bericht geworfen.', ex2En: 'He\'s thrown a glance at the report.', ex2Hi: 'Usne report par nazar daali hai.', conj: { praesens: 'wirft', praeteritum: 'warf', perfekt: 'hat geworfen' } },
    { de: 'Wissensbeschaffung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'knowledge acquisition', hi: 'ज्ञान संग्रहण', ex: 'Die Wissensbeschaffung lässt sich digital organisieren.', exEn: 'Knowledge acquisition can be organised digitally.', exHi: 'Gyaan sangrahan digital roop se organize kiya ja sakta hai.', ex2: 'Sie haben die Wissensbeschaffung verbessert.', ex2En: 'They\'ve improved the knowledge acquisition.', ex2Hi: 'Unhone gyaan sangrahan behtar banaaya hai.' },
    { de: 'zugänglich', pos: 'adjective', level: 'B2', register: 'both', en: 'accessible', hi: 'सुलभ', ex: 'Die Information ist frei zugänglich.', exEn: 'The information is freely accessible.', exHi: 'Jaankaari muft mein sulabh hai.', ex2: 'Sie haben den Bericht zugänglich gemacht.', ex2En: 'They\'ve made the report accessible.', ex2Hi: 'Unhone report sulabh banaayi hai.' },
    { de: 'zukommen', pos: 'verb', level: 'B2', register: 'written', en: 'to approach, come towards', hi: 'निकट आना', ex: 'Die Gefahr kam auf sie zu.', exEn: 'The danger approached her.', exHi: 'Khatra uski taraf badha.', ex2: 'Diese Aufgabe ist ihm zugekommen.', ex2En: 'This task has come to him.', ex2Hi: 'Yeh kaam usko mila hai.', conj: { praesens: 'kommt zu', praeteritum: 'kam zu', perfekt: 'ist zugekommen' } },
    { de: 'Zukunftsvision', art: 'die', gender: 'f', plural: 'Zukunftsvisionen', pos: 'noun', level: 'B2', register: 'written', en: 'vision of the future', hi: 'भविष्य की दृष्टि', ex: 'Die Zukunftsvision lässt sich schwer vorhersagen.', exEn: 'The vision of the future is hard to predict.', exHi: 'Bhavishya ki drishti anumaan lagaana mushkil hai.', ex2: 'Sie haben eine klare Zukunftsvision.', ex2En: 'They have a clear vision of the future.', ex2Hi: 'Unke paas ek spasht bhavishya ki drishti hai.' },
    { de: 'zustande kommen', pos: 'verb', level: 'B2', register: 'written', en: 'to come about, materialise', hi: 'साकार होना', ex: 'Der Vertrag kam zustande.', exEn: 'The contract came about.', exHi: 'Anubandh saakaar hua.', ex2: 'Die Zusammenarbeit ist zustande gekommen.', ex2En: 'The collaboration has materialised.', ex2Hi: 'Sahyog saakaar hua hai.', conj: { praesens: 'kommt zustande', praeteritum: 'kam zustande', perfekt: 'ist zustande gekommen' } },
    { de: 'Akademie', art: 'die', gender: 'f', plural: 'Akademien', pos: 'noun', level: 'B2', register: 'written', en: 'academy', hi: 'अकादमी', ex: 'Er studierte an der Akademie.', exEn: 'He studied at the academy.', exHi: 'Usne academy mein padhaai ki.', ex2: 'Sie haben eine Akademie gegründet.', ex2En: 'They\'ve founded an academy.', ex2Hi: 'Unhone ek academy sthaapit ki hai.' },
    { de: 'andernfalls', pos: 'adverb', level: 'B2', register: 'written', en: 'otherwise', hi: 'अन्यथा', ex: 'Andernfalls lässt sich der Zeitplan nicht einhalten.', exEn: 'Otherwise the schedule cannot be met.', exHi: 'Anyatha samay-saarni poori nahi ki ja sakti.', ex2: 'Sie müssen sich beeilen, andernfalls verpassen sie den Zug.', ex2En: 'They must hurry, otherwise they\'ll miss the train.', ex2Hi: 'Unhein jaldi karni hogi, anyatha train chhoot jaayegi.' },
    { de: 'angesichts', pos: 'preposition', level: 'B2', register: 'written', en: 'in view of, given', hi: 'को देखते हुए', ex: 'Angesichts des Defekts lässt sich das nicht vermeiden.', exEn: 'In view of the defect, that cannot be avoided.', exHi: 'Dosh ko dekhte hue, use tala nahi ja sakta.', ex2: 'Angesichts der Lage haben sie entschieden.', ex2En: 'Given the situation, they\'ve decided.', ex2Hi: 'Sthiti ko dekhte hue, unhone faisla kiya hai.' },
    { de: 'Angriff', art: 'der', gender: 'm', plural: 'Angriffe', pos: 'noun', level: 'B2', register: 'both', en: 'attack', hi: 'हमला', ex: 'Der Angriff überraschte alle.', exEn: 'The attack surprised everyone.', exHi: 'Hamle ne sabko chaunkaaya.', ex2: 'Sie haben den Angriff abgewehrt.', ex2En: 'They\'ve fended off the attack.', ex2Hi: 'Unhone hamle ko rok diya hai.' },
    { de: 'Ankunftsabend', art: 'der', gender: 'm', plural: 'Ankunftsabende', pos: 'noun', level: 'B2', register: 'written', en: 'evening of arrival', hi: 'आगमन की शाम', ex: 'Anlässlich des Ankunftsabends sollten wir bereit sein.', exEn: 'On the occasion of the evening of arrival, we should be ready.', exHi: 'Aagaman ki shaam ke avsar par, humein taiyaar rehna chahiye.', ex2: 'Sie haben den Ankunftsabend gut geplant.', ex2En: 'They\'ve planned the evening of arrival well.', ex2Hi: 'Unhone aagaman ki shaam achhi tarah plan ki hai.' },
    { de: 'anlässlich', pos: 'preposition', level: 'B2', register: 'written', en: 'on the occasion of', hi: 'के अवसर पर', ex: 'Anlässlich des Ankunftsabends gab es ein Fest.', exEn: 'On the occasion of the evening of arrival, there was a celebration.', exHi: 'Aagaman ki shaam ke avsar par, ek samaaroh hua.', ex2: 'Anlässlich seines Geburtstags feierten sie.', ex2En: 'On the occasion of his birthday, they celebrated.', ex2Hi: 'Uske janmadin ke avsar par, unhone jashn manaaya.' },
    { de: 'anormal', pos: 'adjective', level: 'B2', register: 'written', en: 'abnormal', hi: 'असामान्य', ex: 'Der Blutwert war anormal.', exEn: 'The blood value was abnormal.', exHi: 'Rakt maan asaamaanya tha.', ex2: 'Sie haben anormale Ergebnisse festgestellt.', ex2En: 'They\'ve identified abnormal results.', ex2Hi: 'Unhone asaamaanya parinaam paaye hain.' },
    { de: 'App', art: 'die', gender: 'f', plural: 'Apps', pos: 'noun', level: 'B2', register: 'both', en: 'app', hi: 'ऐप', ex: 'Die App lässt sich leicht ausprobieren.', exEn: 'The app can be easily tried out.', exHi: 'App aasaani se aazmaayi ja sakti hai.', ex2: 'Sie haben eine neue App entwickelt.', ex2En: 'They\'ve developed a new app.', ex2Hi: 'Unhone ek nayi app vikasit ki hai.' },
    { de: 'Arbeitsgebiet', art: 'das', gender: 'n', plural: 'Arbeitsgebiete', pos: 'noun', level: 'B2', register: 'written', en: 'field of work', hi: 'कार्य क्षेत्र', ex: 'Unser Arbeitsgebiet lässt sich gut weiterentwickeln.', exEn: 'Our field of work can be developed further well.', exHi: 'Hamaara karya kshetra achhi tarah aage vikasit kiya ja sakta hai.', ex2: 'Sie haben ihr Arbeitsgebiet gewechselt.', ex2En: 'They\'ve changed their field of work.', ex2Hi: 'Unhone apna karya kshetra badla hai.' },
    { de: 'Ärztemangel', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'shortage of doctors', hi: 'डॉक्टरों की कमी', ex: 'Angesichts des Ärztemangels ist das wichtig.', exEn: 'In view of the shortage of doctors, that\'s important.', exHi: 'Doctors ki kami ko dekhte hue, yeh mahatvapurn hai.', ex2: 'Der Ärztemangel betrifft viele Regionen.', ex2En: 'The shortage of doctors affects many regions.', ex2Hi: 'Doctors ki kami kai kshetron ko prabhaavit karti hai.' },
    { de: 'Astronom/in', art: 'der/die', gender: 'm/f', plural: 'Astronomen/Astronominnen', pos: 'noun', level: 'B2', register: 'written', en: 'astronomer', hi: 'खगोलशास्त्री', ex: 'Die Astronomin entdeckte einen neuen Stern.', exEn: 'The astronomer discovered a new star.', exHi: 'Khagolshaastri ne ek naya taara khoja.', ex2: 'Sie haben mit Astronomen zusammengearbeitet.', ex2En: 'They\'ve worked together with astronomers.', ex2Hi: 'Unhone khagolshaastriyon ke saath kaam kiya hai.' },
    { de: 'attackieren', pos: 'verb', level: 'B2', register: 'written', en: 'to attack', hi: 'हमला करना', ex: 'Kritiker attackierten den Plan.', exEn: 'Critics attacked the plan.', exHi: 'Aalochakon ne yojana par hamla kiya.', ex2: 'Sie haben die Entscheidung attackiert.', ex2En: 'They\'ve attacked the decision.', ex2Hi: 'Unhone faisle par hamla kiya hai.', conj: { praesens: 'attackiert', praeteritum: 'attackierte', perfekt: 'hat attackiert' } },
    { de: 'auslöschen', pos: 'verb', level: 'B2', register: 'written', en: 'to extinguish, erase', hi: 'मिटाना', ex: 'Sie löschte die Kerze aus.', exEn: 'She extinguished the candle.', exHi: 'Usne mombatti bujhaayi.', ex2: 'Er hat die Datei ausgelöscht.', ex2En: 'He\'s erased the file.', ex2Hi: 'Usne file mita di hai.', conj: { praesens: 'löscht aus', praeteritum: 'löschte aus', perfekt: 'hat ausgelöscht' } },
    { de: 'ausprobieren', pos: 'verb', level: 'B2', register: 'both', en: 'to try out', hi: 'आज़माना', ex: 'Lässt sich die App ausprobieren?', exEn: 'Can the app be tried out?', exHi: 'Kya app aazmaayi ja sakti hai?', ex2: 'Sie hat das neue Rezept ausprobiert.', ex2En: 'She\'s tried out the new recipe.', ex2Hi: 'Usne naya recipe aazmaaya hai.', conj: { praesens: 'probiert aus', praeteritum: 'probierte aus', perfekt: 'hat ausprobiert' } },
    { de: 'Aussteller/in', art: 'der/die', gender: 'm/f', plural: 'Aussteller/innen', pos: 'noun', level: 'B2', register: 'written', en: 'exhibitor', hi: 'प्रदर्शक', ex: 'Der Aussteller präsentierte seine Produkte.', exEn: 'The exhibitor presented his products.', exHi: 'Pradarshak ne apne utpaad prastut kiye.', ex2: 'Sie haben viele Aussteller eingeladen.', ex2En: 'They\'ve invited many exhibitors.', ex2Hi: 'Unhone kai pradarshakon ko aamantrit kiya hai.' },
    { de: 'Autofahrer/in', art: 'der/die', gender: 'm/f', plural: 'Autofahrer/innen', pos: 'noun', level: 'B2', register: 'both', en: 'car driver', hi: 'कार चालक', ex: 'Der Autofahrer hielt am Zebrastreifen.', exEn: 'The car driver stopped at the crosswalk.', exHi: 'Car driver zebra crossing par ruka.', ex2: 'Viele Autofahrer nutzen die neue Straße.', ex2En: 'Many car drivers use the new road.', ex2Hi: 'Kai car drivers nayi sadak ka upyog karte hain.' },
    { de: 'befürworten', pos: 'verb', level: 'B2', register: 'written', en: 'to advocate, be in favour of', hi: 'समर्थन करना', ex: 'Sie befürwortete die Reform.', exEn: 'She advocated the reform.', exHi: 'Usne sudhaar ka samarthan kiya.', ex2: 'Sie haben die Idee befürwortet.', ex2En: 'They\'ve advocated the idea.', ex2Hi: 'Unhone vichaar ka samarthan kiya hai.', conj: { praesens: 'befürwortet', praeteritum: 'befürwortete', perfekt: 'hat befürwortet' } },
    { de: 'Berater/in', art: 'der/die', gender: 'm/f', plural: 'Berater/innen', pos: 'noun', level: 'B2', register: 'written', en: 'adviser, consultant', hi: 'सलाहकार', ex: 'Der Berater half bei der Entscheidung.', exEn: 'The consultant helped with the decision.', exHi: 'Salaahkaar ne faisle mein madad ki.', ex2: 'Sie haben einen Berater engagiert.', ex2En: 'They\'ve engaged a consultant.', ex2Hi: 'Unhone ek salaahkaar niyukt kiya hai.' },
    { de: 'Berufsbereich', art: 'der', gender: 'm', plural: 'Berufsbereiche', pos: 'noun', level: 'B2', register: 'written', en: 'occupational field', hi: 'व्यावसायिक क्षेत्र', ex: 'Der Berufsbereich lässt sich in der App auswählen.', exEn: 'The occupational field can be selected in the app.', exHi: 'Vyavsaayik kshetra app mein chuna ja sakta hai.', ex2: 'Sie haben ihren Berufsbereich gewechselt.', ex2En: 'They\'ve changed their occupational field.', ex2Hi: 'Unhone apna vyavsaayik kshetra badla hai.' },
    { de: 'Berufswelt', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'working world', hi: 'व्यावसायिक दुनिया', ex: 'Die Berufswelt verändert sich schnell.', exEn: 'The working world is changing fast.', exHi: 'Vyavsaayik duniya tezi se badal rahi hai.', ex2: 'Sie haben sich an die Berufswelt angepasst.', ex2En: 'They\'ve adapted to the working world.', ex2Hi: 'Unhone vyavsaayik duniya ke anusaar khud ko dhaala hai.' },
    { de: 'Berufswunsch', art: 'der', gender: 'm', plural: 'Berufswünsche', pos: 'noun', level: 'B2', register: 'written', en: 'career aspiration', hi: 'करियर की इच्छा', ex: 'Ihr Berufswunsch war klar.', exEn: 'Her career aspiration was clear.', exHi: 'Uski career ki ichha spasht thi.', ex2: 'Sie haben ihren Berufswunsch verwirklicht.', ex2En: 'They\'ve realised their career aspiration.', ex2Hi: 'Unhone apni career ki ichha poori ki hai.' },
    { de: 'beschränken', pos: 'verb', level: 'B2', register: 'written', en: 'to limit, restrict', hi: 'सीमित करना', ex: 'Sie beschränkten den Zugang.', exEn: 'They restricted access.', exHi: 'Unhone pahunch seemit ki.', ex2: 'Er hat sich auf das Wesentliche beschränkt.', ex2En: 'He\'s limited himself to the essentials.', ex2Hi: 'Usne khud ko avashyak baaton tak seemit rakha hai.', conj: { praesens: 'beschränkt', praeteritum: 'beschränkte', perfekt: 'hat beschränkt' } },
    { de: 'Blutwert', art: 'der', gender: 'm', plural: 'Blutwerte', pos: 'noun', level: 'B2', register: 'written', en: 'blood value, reading', hi: 'रक्त मान', ex: 'Der Blutwert lässt sich vermessen.', exEn: 'The blood value can be measured.', exHi: 'Rakt maan maapa ja sakta hai.', ex2: 'Sie haben die Blutwerte überprüft.', ex2En: 'They\'ve checked the blood values.', ex2Hi: 'Unhone rakt maan jaanche hain.' },
    { de: 'Branche', art: 'die', gender: 'f', plural: 'Branchen', pos: 'noun', level: 'B2', register: 'written', en: 'sector, industry', hi: 'क्षेत्र', ex: 'Die Zukunftsvision für unsere Branche lässt sich schwer vorhersagen.', exEn: 'The vision of the future for our sector is hard to predict.', exHi: 'Hamaare kshetra ke liye bhavishya ki drishti anumaan lagaana mushkil hai.', ex2: 'Sie arbeiten in einer wachsenden Branche.', ex2En: 'They work in a growing sector.', ex2Hi: 'Woh ek badhte kshetra mein kaam karte hain.' },
    { de: 'Brustkorb', art: 'der', gender: 'm', plural: 'Brustkörbe', pos: 'noun', level: 'B2', register: 'written', en: 'chest, ribcage', hi: 'छाती, पसली का पिंजरा', ex: 'Der Brustkorb wurde untersucht.', exEn: 'The ribcage was examined.', exHi: 'Chhati ki jaanch ki gayi.', ex2: 'Sie haben den Brustkorb geröntgt.', ex2En: 'They\'ve X-rayed the ribcage.', ex2Hi: 'Unhone chhati ka X-ray kiya hai.' },
    { de: 'Chip', art: 'der', gender: 'm', plural: 'Chips', pos: 'noun', level: 'B2', register: 'both', en: 'chip', hi: 'चिप', ex: 'Der Chip lässt sich nicht ersetzen.', exEn: 'The chip cannot be replaced.', exHi: 'Chip badla nahi ja sakta.', ex2: 'Sie haben einen neuen Chip installiert.', ex2En: 'They\'ve installed a new chip.', ex2Hi: 'Unhone ek naya chip install kiya hai.' },
    { de: 'Daumen', art: 'der', gender: 'm', plural: 'Daumen', pos: 'noun', level: 'B2', register: 'both', en: 'thumb', hi: 'अंगूठा', ex: 'Sie drückte den Daumen.', exEn: 'She held her thumb (crossed fingers).', exHi: 'Usne angootha dabaaya (shubhkaamna ke liye).', ex2: 'Er hat sich am Daumen verletzt.', ex2En: 'He\'s hurt his thumb.', ex2Hi: 'Usne apna angootha choti banaayi hai.' },
    { de: 'Defekt', art: 'der', gender: 'm', plural: 'Defekte', pos: 'noun', level: 'B2', register: 'both', en: 'defect', hi: 'दोष', ex: 'Der Defekt im Chip lässt sich reparieren.', exEn: 'The defect in the chip can be repaired.', exHi: 'Chip mein dosh theek kiya ja sakta hai.', ex2: 'Sie haben den Defekt gefunden.', ex2En: 'They\'ve found the defect.', ex2Hi: 'Unhone dosh dhoondh liya hai.' },
    { de: 'Diagnose', art: 'die', gender: 'f', plural: 'Diagnosen', pos: 'noun', level: 'B2', register: 'written', en: 'diagnosis', hi: 'निदान', ex: 'Die Diagnose lässt sich schneller stellen.', exEn: 'The diagnosis can be made faster.', exHi: 'Nidaan tez kiya ja sakta hai.', ex2: 'Sie haben die Diagnose bestätigt.', ex2En: 'They\'ve confirmed the diagnosis.', ex2Hi: 'Unhone nidaan ki pushti ki hai.' },
    { de: 'diagnostizieren', pos: 'verb', level: 'B2', register: 'written', en: 'to diagnose', hi: 'निदान करना', ex: 'Der Arzt diagnostizierte die Krankheit.', exEn: 'The doctor diagnosed the illness.', exHi: 'Doctor ne beemari ka nidaan kiya.', ex2: 'Sie haben den Defekt diagnostiziert.', ex2En: 'They\'ve diagnosed the defect.', ex2Hi: 'Unhone dosh ka nidaan kiya hai.', conj: { praesens: 'diagnostiziert', praeteritum: 'diagnostizierte', perfekt: 'hat diagnostiziert' } },
    { de: 'Durchmesser', art: 'der', gender: 'm', plural: 'Durchmesser', pos: 'noun', level: 'B2', register: 'written', en: 'diameter', hi: 'व्यास', ex: 'Der Durchmesser des Sensors lässt sich kalibrieren.', exEn: 'The sensor\'s diameter can be calibrated.', exHi: 'Sensor ka vyaas calibrate kiya ja sakta hai.', ex2: 'Sie haben den Durchmesser gemessen.', ex2En: 'They\'ve measured the diameter.', ex2Hi: 'Unhone vyaas maapa hai.' },
    { de: 'eigenständig', pos: 'adjective', level: 'B2', register: 'both', en: 'independent, autonomous', hi: 'स्वतंत्र', ex: 'Sie arbeiten eigenständig an dem Projekt.', exEn: 'They work independently on the project.', exHi: 'Woh project par swatantra roop se kaam karte hain.', ex2: 'Er hat eine eigenständige Lösung entwickelt.', ex2En: 'He\'s developed an independent solution.', ex2Hi: 'Usne ek swatantra samaadhaan vikasit kiya hai.' },
    { de: 'Eindruck', art: 'der', gender: 'm', plural: 'Eindrücke', pos: 'noun', level: 'B2', register: 'both', en: 'impression', hi: 'प्रभाव', ex: 'Sie hinterließ einen guten Eindruck.', exEn: 'She left a good impression.', exHi: 'Usne achha prabhaav chhoda.', ex2: 'Sie haben einen positiven Eindruck gewonnen.', ex2En: 'They\'ve gained a positive impression.', ex2Hi: 'Unhein ek sakaraatmak prabhaav mila hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Passiversatz?',
      body: [ 'German often replaces passive sentences with "sich lassen" because it sounds shorter and more natural, especially when expressing possibility.' ],
      table: {
        head: ['Passiv (können + Partizip II)', 'Passiversatz (sich lassen)'],
        rows: [ ['Der Computer kann repariert werden.', '<span class="de r-lassen">Der Computer lässt sich reparieren.</span>'] ]
      },
      hinglish: 'German aksar passive ki jagah <b>sich lassen</b> use karta hai, kyunki yeh chhota aur zyada natural lagta hai \u2014 khaas kar jab batana ho ki kuch <b>ho sakta hai</b>.'
    },
    {
      title: 'Struktur: sich + Infinitiv + lassen',
      body: [ 'The subject comes first, followed by a conjugated form of "lassen", then "sich", and the infinitive at the end of the clause.' ],
      table: {
        head: ['Example', 'Meaning'],
        rows: [
          ['<span class="de r-lassen">Das Problem lässt sich lösen.</span>', 'The problem can be solved.'],
          ['<span class="de r-lassen">Die Aufgabe lässt sich schnell erledigen.</span>', 'The task can be done quickly.'],
          ['<span class="de r-lassen">Das Fenster lässt sich leicht öffnen.</span>', 'The window can be opened easily.'],
          ['<span class="de r-lassen">Die Software lässt sich einfach installieren.</span>', 'The software can be installed simply.']
        ]
      },
      note: 'Negation sits directly before the infinitive: <span class="de">Das l\u00e4sst sich <b>nicht</b> \u00e4ndern.</span>',
      hinglish: 'Order yeh hai: pehle subject, phir <b>lassen</b> ka conjugated form, phir <b>sich</b>, aur sentence ke end mein infinitive. Agar negative banana ho to <b>nicht</b> infinitive se theek pehle aata hai: <span class="de">Das l\u00e4sst sich nicht \u00e4ndern.</span>'
    },
    {
      title: 'Bedeutung: Möglichkeit, nicht Handlung',
      body: [ '"sich lassen" usually means "can be ...", "is possible to ...", or "is easy/difficult to ...". It focuses on possibility, not on who performs the action.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Der Text lässt sich gut verstehen.', 'The text is easy to understand.'],
          ['Die Maschine lässt sich bedienen.', 'The machine can be operated.']
        ]
      },
      hinglish: '<b>sich lassen</b> ka matlab hota hai "ho sakta hai" ya "karna aasaan/mushkil hai". Iska focus possibility par hota hai \u2014 yeh nahi batata ki kaam kaun karega.'
    },
    {
      title: 'Passiv vs sich lassen',
      body: [ 'Compare the plain passive with können and the Passiversatz alternative — nearly identical meaning, different style.' ],
      table: {
        head: ['Passiv', 'Passiversatz'],
        rows: [
          ['Die Tür kann geöffnet werden.', 'Die Tür lässt sich öffnen.'],
          ['Das Problem kann gelöst werden.', 'Das Problem lässt sich lösen.']
        ]
      },
      hinglish: 'Dono ko saath rakh kar dekho \u2014 matlab lagbhag ek hi hai, bas <b>sich lassen</b> chhota aur zyada natural lagta hai. Writing mein ise thoda use karo to German mature lagta hai.'
    },
    {
      title: 'Häufige Ausdrücke',
      body: [ 'These are extremely common B2 idiomatic expressions with "sich lassen".' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Das lässt sich vermeiden.', 'That can be avoided.'],
          ['Das lässt sich erklären.', 'That can be explained.'],
          ['Das lässt sich nicht ändern.', 'That cannot be changed.'],
          ['Die Situation lässt sich verbessern.', 'The situation can be improved.'],
          ['Der Fehler lässt sich korrigieren.', 'The mistake can be corrected.'],
          ['Das lässt sich hören. (idiom)', 'That sounds good / that\'s acceptable.']
        ]
      },
      hinglish: 'Yeh <b>sich lassen</b> wale phrases B2 mein bahut aate hain. Inhe poore chunk ki tarah yaad kar lo \u2014 khaas kar <span class="de">Das l\u00e4sst sich nicht \u00e4ndern</span>, jo rozmarra mein bahut bolte hain.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These examples reflect authentic Goethe B2 workplace, university, and technology situations.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Die Bewerbung lässt sich online einreichen.', 'The application can be submitted online.'],
          ['Das Dokument lässt sich herunterladen.', 'The document can be downloaded.'],
          ['Die Präsentation lässt sich problemlos aktualisieren.', 'The presentation can be updated without problems.'],
          ['Das Projekt lässt sich erfolgreich umsetzen.', 'The project can be implemented successfully.']
        ]
      },
      hinglish: 'Yeh examples wahi hain jo Goethe B2 ke office, university aur technology wale texts mein asli mein aate hain.'
    },
    {
      title: 'Register',
      body: [ '"sich lassen" appears constantly in business German, manuals, formal emails, reports, newspapers, academic writing, and Goethe B2 writing. It sounds more elegant than repeatedly using passive.' ],
      hinglish: '<b>sich lassen</b> business German, manuals, formal emails aur reports mein bahut common hai. Baar-baar passive likhne se behtar lagta hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These come from dropping <b>sich</b>, using a Partizip II instead of the infinitive, or stacking <i>werden</i> / <i>k\u00f6nnen</i> on top of a construction that already carries the meaning.' ],
      mistakes: [
        { wrong: 'Das Problem lässt sich gelöst.', right: 'Das Problem lässt sich lösen.', why: '"lassen" always takes the infinitive at the end, never a Partizip II.' },
        { wrong: 'Die Tür lässt öffnen.', right: 'Die Tür lässt sich öffnen.', why: 'The reflexive "sich" is required — without it the sentence is incomplete.' },
        { wrong: 'Das Buch lässt sich lesen werden.', right: 'Das Buch lässt sich lesen.', why: '"sich lassen" already expresses possibility — never add "werden" on top.' },
        { wrong: 'Die Aufgabe kann sich lösen.', right: 'Die Aufgabe lässt sich lösen.', why: 'The construction is "lassen", not "können + sich" — these are two different structures.' },
        { wrong: 'Das Auto lässt reparieren.', right: 'Das Auto lässt sich reparieren.', why: 'Without "sich", the sentence would mean someone else is having the car repaired, not that it "can be repaired".' }
      ],
      hinglish: 'Yeh galtiyan teen wajah se hoti hain \u2014 <b>sich</b> chhod dena, infinitive ki jagah Partizip II laga dena, ya <i>werden</i> ya <i>k\u00f6nnen</i> ko upar se jod dena jabki matlab pehle se hi aa raha hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need passive meaning, but want more natural German? Use "sich lassen" instead of "kann ... werden". Negation always goes right before the infinitive.' ],
      note: 'Memory trick: "lässt sich" = "can be ...". Think of it as a shortcut, never a literal "lets itself".',
      hinglish: 'Passive ka matlab chahiye par German natural rakhna hai? To <b>kann \u2026 werden</b> ki jagah <b>sich lassen</b> use karo. Aur negation hamesha infinitive se theek pehle aata hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Technikmagazin: Eine App verändert die Zukunftsvision der Medizin',
    titleEn: 'Tech magazine: an app changes the future vision of medicine',
    tokens: [
      { w: 'Eine', role: 'plain', en: 'an', hi: 'एक', type: 'Article' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'नया', type: 'Adjective' },
      { w: 'App', role: 'plain', en: 'app', hi: 'ऐप', type: 'Noun · fem.', why: 'die App (this chapter).' },
      { w: 'lässt', role: 'r-verb', en: 'lets (Passiversatz: sich lassen + Infinitiv)', hi: 'देती है (Passiversatz)', type: 'Verb · lassen + sich + Infinitiv (Passiversatz)', why: 'sich lassen + Infinitiv is a common alternative to the passive, meaning "can be done" (this chapter).' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'von', role: 'plain', en: 'by', hi: 'द्वारा', type: 'Preposition · Dat.' },
      { w: 'jedem', role: 'plain', en: 'anyone (dat.)', hi: 'किसी के भी', type: 'Pronoun · Dat.' },
      { w: 'Smartphone', role: 'plain', en: 'smartphone (Satzende)', hi: 'स्मार्टफ़ोन (Satzende)', type: 'Noun · neut.' },
      { w: 'aus', role: 'plain', en: 'from (Satzende)', hi: 'से (Satzende)', type: 'Adverb' },
      { w: 'bedienen', role: 'r-verb', en: 'operate (Satzende, Passiversatz)', hi: 'चलाना (Satzende)', type: 'Verb · Infinitiv (Passiversatz, Satzende)', why: '"lässt sich bedienen" = can be operated — equivalent in meaning to "kann bedient werden" (this chapter).' },
      { w: '.', plain: true },
      { w: 'Eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'erste', role: 'plain', en: 'initial', hi: 'प्रारंभिक', type: 'Adjective' },
      { w: 'Diagnose', role: 'plain', en: 'diagnosis (Satzende)', hi: 'निदान (Satzende)', type: 'Noun · fem.', why: 'die Diagnose (this chapter).' },
      { w: 'lässt', role: 'r-verb', en: 'lets (Passiversatz)', hi: 'देती है (Passiversatz)', type: 'Verb · lassen + sich + Infinitiv' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'so', role: 'plain', en: 'this way', hi: 'इस तरह', type: 'Adverb' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'wenigen', role: 'plain', en: 'a few', hi: 'कुछ', type: 'Adjective' },
      { w: 'Minuten', role: 'plain', en: 'minutes (Satzende)', hi: 'मिनटों (Satzende)', type: 'Noun · plural' },
      { w: 'stellen', role: 'r-verb', en: 'establish (Satzende, Passiversatz)', hi: 'तैयार करना (Satzende)', type: 'Verb · Infinitiv (Passiversatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Astronom', role: 'plain', en: 'astronomer', hi: 'खगोलविद', type: 'Noun · masc.', why: 'der/die Astronom/in (this chapter).' },
      { w: 'entwickelte', role: 'plain', en: 'developed', hi: 'विकसित किया', type: 'Verb · entwickeln (Präteritum)' },
      { w: 'überraschenderweise', role: 'plain', en: 'surprisingly', hi: 'आश्चर्यजनक रूप से', type: 'Adverb' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'entscheidenden', role: 'plain', en: 'decisive', hi: 'निर्णायक', type: 'Adjective' },
      { w: 'Algorithmus', role: 'plain', en: 'algorithm (Satzende)', hi: 'एल्गोरिथ्म (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Diese', role: 'plain', en: 'this', hi: 'यह', type: 'Determiner' },
      { w: 'Zukunftsvision', role: 'plain', en: 'future vision', hi: 'भविष्य की दृष्टि', type: 'Noun · fem.', why: 'die Zukunftsvision (this chapter).' },
      { w: 'lässt', role: 'r-verb', en: 'lets (Passiversatz)', hi: 'देती है (Passiversatz)', type: 'Verb · lassen + sich + Infinitiv' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'schwer', role: 'plain', en: 'hardly', hi: 'मुश्किल से', type: 'Adjective' },
      { w: 'noch', role: 'plain', en: 'still', hi: 'अब भी', type: 'Adverb' },
      { w: 'aufhalten', role: 'r-verb', en: 'stop (Satzende, Passiversatz)', hi: 'रोकना (Satzende)', type: 'Verb · Infinitiv (Passiversatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Ob', role: 'plain', en: 'whether', hi: 'क्या', type: 'Konjunktion' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Nachfrage', role: 'plain', en: 'demand', hi: 'माँग', type: 'Noun · fem.' },
      { w: 'langfristig', role: 'plain', en: 'in the long term', hi: 'दीर्घकालिक रूप से', type: 'Adjective' },
      { w: 'halten', role: 'r-verb', en: 'maintain (Satzende, Passiversatz)', hi: 'बनाए रखना (Satzende)', type: 'Verb · Infinitiv (Passiversatz)' },
      { w: 'lässt', role: 'r-verb', en: 'can be (sich lassen, Satzende)', hi: '(Satzende)', type: 'Verb · sich lassen (Nebensatz, Satzende)', why: 'sich lassen + Infinitiv is a passive alternative to können + werden (this chapter).' },
      { w: ',', plain: true },
      { w: 'wird', role: 'plain', en: 'will', hi: 'होगा', type: 'Verb · werden (Futur I)' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'erst', role: 'plain', en: 'only', hi: 'तभी', type: 'Adverb' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (plural dat.)', hi: 'इन', type: 'Article · Dat.' },
      { w: 'kommenden', role: 'plain', en: 'coming', hi: 'आने वाले', type: 'Adjective' },
      { w: 'Jahren', role: 'plain', en: 'years (Satzende)', hi: 'सालों (Satzende)', type: 'Noun · plural' },
      { w: 'zeigen', role: 'r-verb', en: 'show (Satzende, Passiversatz)', hi: 'दिखना (Satzende)', type: 'Verb · Infinitiv (Passiversatz)' },
      { w: 'lassen', role: 'r-verb', en: 'can be (sich lassen, Satzende)', hi: '(Satzende)', type: 'Verb · sich lassen (Satzende)' },
      { w: '.', plain: true },
      { w: 'Erste', role: 'plain', en: 'first', hi: 'पहले', type: 'Adjective' },
      { w: 'Investoren', role: 'plain', en: 'investors', hi: 'निवेशक', type: 'Noun · plural' },
      { w: 'zeigen', role: 'plain', en: 'show', hi: 'दिखाते हैं', type: 'Verb · zeigen' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'jedenfalls', role: 'plain', en: 'in any case', hi: 'किसी भी हाल में', type: 'Adverb' },
      { w: 'beeindruckt', role: 'plain', en: 'impressed (Satzende)', hi: 'प्रभावित (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Kritiker', role: 'plain', en: 'critics', hi: 'आलोचक', type: 'Noun · plural' },
      { w: 'geben', role: 'plain', en: 'give', hi: 'देते हैं', type: 'Verb · geben' },
      { w: 'allerdings', role: 'plain', en: 'however', hi: 'हालांकि', type: 'Adverb' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'Verbzusatz' },
      { w: 'bedenken', role: 'plain', en: 'consider (Satzende)', hi: 'विचार करना (Satzende)', type: 'Verb · zu bedenken geben' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'medizinische', role: 'plain', en: 'medical', hi: 'चिकित्सीय', type: 'Adjective' },
      { w: 'Verantwortung', role: 'plain', en: 'responsibility (Satzende)', hi: 'ज़िम्मेदारी (Satzende)', type: 'Noun · fem.' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'vollständig', role: 'plain', en: 'completely', hi: 'पूरी तरह से', type: 'Adverb' },
      { w: 'delegieren', role: 'r-verb', en: 'delegate (Satzende, Passiversatz)', hi: 'सौंपी जा सकती (Satzende)', type: 'Verb · Infinitiv (Passiversatz, Nebensatz, Satzende)' },
      { w: 'lässt', role: 'r-verb', en: 'can be (sich lassen, Satzende)', hi: '(Satzende)', type: 'Verb · sich lassen (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Entwickler', role: 'plain', en: 'developer', hi: 'डेवलपर', type: 'Noun · masc.' },
      { w: 'selbst', role: 'plain', en: 'himself', hi: 'ख़ुद', type: 'Pronoun' },
      { w: 'bleibt', role: 'plain', en: 'remains', hi: 'रहता है', type: 'Verb · bleiben' },
      { w: 'gelassen', role: 'plain', en: 'calm (Satzende)', hi: 'शांत (Satzende)', type: 'Adjective' },
      { w: ':', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Erfolg', role: 'plain', en: 'success', hi: 'सफलता', type: 'Noun · masc.' },
      { w: 'lasse', role: 'r-verb', en: 'lets (Konjunktiv I, sich lassen)', hi: '(Konjunktiv I)', type: 'Verb · sich lassen (Konjunktiv I)' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'erzwingen', role: 'r-verb', en: 'force (Satzende, Passiversatz)', hi: 'मजबूर किया जाना (Satzende)', type: 'Verb · Infinitiv (Passiversatz, Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'nur', role: 'plain', en: 'only', hi: 'केवल', type: 'Adverb' },
      { w: 'geduldig', role: 'plain', en: 'patiently', hi: 'धैर्यपूर्वक', type: 'Adverb' },
      { w: 'abwarten', role: 'plain', en: 'wait out (Satzende)', hi: 'इंतज़ार करना (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true }
    ],
    translation: 'A new app can be operated by anyone from their smartphone. An initial diagnosis can thus be established in a few minutes. Surprisingly, an astronomer developed the decisive algorithm. This future vision can hardly be stopped anymore. Whether the demand can be maintained in the long term will only become clear in the coming years. First investors, in any case, are impressed. Critics point out, however, that medical responsibility cannot be entirely delegated. The developer himself remains calm: success cannot be forced, he says, only patiently waited out.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_045_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Frau Behrens, lässt sich mein Rückenschmerz eigentlich noch behandeln?', en: 'Frau Behrens, can my back pain still be treated?' },
      { id: 'B2_045_L002', speaker: 'Frau Behrens', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Das lässt sich gut behandeln, mit ein bisschen Physiotherapie.', en: 'That can be treated well, with a bit of physiotherapy.' },
      { id: 'B2_045_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und lässt sich mein Blutwert heute noch prüfen?', en: 'And can my blood value still be checked today?' },
      { id: 'B2_045_L004', speaker: 'Frau Behrens', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, das lässt sich sofort machen, das Labor ist gleich hier.', en: 'Yes, that can be done right away, the lab is right here.' }
    ],
    transcript: 'Frau Behrens, lässt sich mein Rückenschmerz eigentlich noch behandeln? Das lässt sich gut behandeln, mit ein bisschen Physiotherapie. Und lässt sich mein Blutwert heute noch prüfen? Ja, das lässt sich sofort machen, das Labor ist gleich hier.',
    translation: 'Frau Behrens, can my back pain still be treated? That can be treated well, with a bit of physiotherapy. And can my blood value still be checked today? Yes, that can be done right away, the lab is right here.',
    tokens: [
      { w: 'Frau' },
      { w: 'Behrens' },
      { w: ',', plain: true },
      { w: 'lässt' },
      { w: 'sich' },
      { w: 'mein' },
      { w: 'Rückenschmerz' },
      { w: 'eigentlich' },
      { w: 'noch' },
      { w: 'behandeln' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'lässt' },
      { w: 'sich' },
      { w: 'gut' },
      { w: 'behandeln' },
      { w: ',', plain: true },
      { w: 'mit' },
      { w: 'ein' },
      { w: 'bisschen' },
      { w: 'Physiotherapie' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'lässt' },
      { w: 'sich' },
      { w: 'mein' },
      { w: 'Blutwert' },
      { w: 'heute' },
      { w: 'noch' },
      { w: 'prüfen' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'lässt' },
      { w: 'sich' },
      { w: 'sofort' },
      { w: 'machen' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'Labor' },
      { w: 'ist' },
      { w: 'gleich' },
      { w: 'hier' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Lassen sich Timos Rückenschmerzen behandeln?', qEn: 'Can Timo\'s back pain be treated?', options: ['nein, gar nicht', 'ja, gut', 'nur mit Operation', 'unklar'], optionsEn: ['no, not at all', 'yes, well', 'only with surgery', 'unclear'], answer: 1,
        explain: '"Das lässt sich gut behandeln."' },
      { q: 'Wann kann der Blutwert kontrolliert werden?', qEn: 'When can the blood value be checked?', options: ['nächste Woche', 'morgen', 'sofort', 'nie'], optionsEn: ['next week', 'tomorrow', 'immediately', 'never'], answer: 2,
        explain: '"Das lässt sich sofort machen."' }
    ]
  },

  speaking: [
    { task: "Du fragst die Ärztin, ob dein Rückenschmerz behandelbar ist.", taskEn: "You ask the doctor whether your back pain can be treated.", de: "Lässt sich mein Rückenschmerz eigentlich noch behandeln?", en: "Can my back pain still be treated?" },
    { task: "Sie sagt ja. Frag nach der Alternative zur Physiotherapie.", taskEn: "She says yes. Ask about an alternative to physiotherapy.", de: "Und lässt sich das auch ohne Physiotherapie machen?", en: "And can that be done without physiotherapy too?" },
    { task: "Deine Chefin fragt, was am Prozess zu verbessern ist.", taskEn: "Your boss asks what can be improved in the process.", de: "Zwei Schritte lassen sich zusammenlegen, und die Prüfung lässt sich automatisieren.", en: "Two steps can be merged, and the check can be automated." },
    { task: "Ein Kollege fragt, ob die Raumtemperatur einstellbar ist.", taskEn: "A colleague asks whether the room temperature is adjustable.", de: "Sie lässt sich variabel einstellen, aber nicht in jedem Raum.", en: "It can be adjusted variably, but not in every room." },
    { task: "Rollenspiel: Ihr besprecht ein technisches Problem.", taskEn: "Role-play: you discuss a technical problem.", de: "Das Gerät lässt sich reparieren. — Aber der Ausfall lässt sich nicht ganz vermeiden.", en: "The device can be repaired. — But the outage can't be entirely avoided." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — User guide (6-8 sentences): Write a short manual describing what can be done with a piece of software, using "lässt sich" / "lassen sich" naturally.\n\nTASK 2 — Project report (6-8 sentences): Report on a project\'s progress, noting what can still be changed, what cannot be avoided, and what can be implemented successfully.',
    starters: ['Die Software lässt sich …', 'Der Zeitplan lässt sich …'],
    placeholder: 'Die App lässt sich einfach installieren. Der Berufsbereich …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence correctly uses Passiversatz?',
      options: ['Das Problem lässt sich lösen.', 'Das Problem lässt sich gelöst.', 'Das Problem kann sich lösen.'],
      answer: 0,
      explain: '"lassen" always takes a bare infinitive at the end — "lösen", not "gelöst" (Partizip II) or a "können + sich" mix.'
    },
    gap: {
      sentence: ['Die Tür ', ' sich leicht öffnen.'],
      gaps: [ { answer: 'lässt', accepts: ['lässt'] } ],
      explain: '"lässt" agrees with the singular subject "die Tür" — the reflexive "sich" and infinitive "öffnen" follow.'
    },
    match: {
      q: 'Match each passive sentence to its Passiversatz alternative.',
      pairs: [
        { noun: 'Der Computer kann repariert werden.', art: 'Der Computer lässt sich reparieren.' },
        { noun: 'Die Software kann installiert werden.', art: 'Die Software lässt sich installieren.' },
        { noun: 'Das Problem kann gelöst werden.', art: 'Das Problem lässt sich lösen.' },
        { noun: 'Die Tür kann geöffnet werden.', art: 'Die Tür lässt sich öffnen.' }
      ]
    },
    builder: {
      target: 'Build: "The chip cannot be replaced." (Passiversatz, negated)',
      bank: ['Der', 'Chip', 'lässt', 'sich', 'nicht', 'ersetzen', '.'],
      answer: ['Der', 'Chip', 'lässt', 'sich', 'nicht', 'ersetzen', '.'],
      roles: { 'lässt': 'r-lassen', 'sich': 'r-lassen', 'ersetzen': 'r-lassen' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Das Buch lässt sich lesen werden.',
      right: 'Das Buch lässt sich lesen.',
      explain: '"sich lassen" already expresses possibility on its own — never add "werden" on top of it.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does "Passiversatz mit sich lassen" express?', options: ['Possibility or feasibility, as a natural alternative to können + Passiv', 'A finished state', 'An action in progress'], answer: 0,
      explain: '"sich lassen" replaces "kann ... werden" to express what CAN be done, more elegantly.' },
    { q: 'How is Passiversatz formed?', options: ['Subject + lassen + sich + Infinitiv', 'Subject + sein + Partizip II', 'Subject + werden + Partizip II'], answer: 0,
      explain: 'The structure is: subject, conjugated "lassen", "sich", and the infinitive at the end.' },
    { q: '"Das Problem lässt sich lösen" means the same as:', options: ['Das Problem kann gelöst werden', 'Das Problem ist gelöst', 'Das Problem wird gelöst'], answer: 0,
      explain: 'Both express possibility — "the problem can be solved" — but "lässt sich" is more natural.' },
    { q: 'Where does the negation "nicht" go in Passiversatz?', options: ['Directly before the infinitive', 'Directly after "lässt"', 'At the very start of the sentence'], answer: 0,
      explain: '"Der Chip lässt sich nicht ersetzen" — "nicht" sits right before "ersetzen".' },
    { q: 'What does the idiom "das lässt sich hören" mean?', options: ['That sounds good / that\'s acceptable', 'That can literally be heard', 'That is impossible'], answer: 0,
      explain: 'This is a fixed idiomatic expression meaning approval, not literal hearing.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-lassen', html: 'Passiversatz (sich + Infinitiv + lassen) replaces können + Passiv to express possibility more naturally: Das Problem lässt sich lösen.' },
    { c: 'r-lassen', html: 'Negation always goes directly before the infinitive: Der Chip lässt sich nicht ersetzen.' },
    { c: 'r-lassen', html: '"sich lassen" is extremely common in manuals, reports, and formal German — and includes idioms like "das lässt sich hören" (sounds good).' }
  ],
  revisionTips: [
    'For every können + Passiv sentence you know, practise building its "sich lassen" counterpart.',
    'Scan a user manual or report for "lässt sich" / "lassen sich" — count how many you find.',
    'Practise placing "nicht" correctly: always right before the infinitive, never before "sich".'
  ]
};

window.CHAPTER = CHAPTER;
