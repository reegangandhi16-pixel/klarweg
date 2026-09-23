/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 16
   "Aufforderung, Empfehlung & Handlungssteuerung" — directing
   others' actions through pragmatics: soft recommendations,
   diplomatic requests, professional instructions, advice,
   warnings, register/directness scale. NOT basic Imperativ.
   Dialogue: Silje and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-16-aufforderung-empfehlung-und-handlungssteuerung',
  phase: 'C1 · Modalität & Nuance',
  number: 16,
  title: 'Aufforderung, Empfehlung & Handlungssteuerung',
  titleEn: 'Directives, recommendations & guiding action',
  description: 'A2 asks "can I tell someone what to do?" C1 asks "how can I influence someone\'s actions while maintaining professionalism, politeness, and register?" Professional German values guidance over commands.',
  xp: 510,
  time: 105,
  difficulty: 'Advanced',
  nextChapter: { number: 17, title: 'Goethe Halbzeit-Test', titleEn: 'Halfway Checkpoint: Chapters 12–16' , href: 'chapter-c1-17-goethe-halbzeit-test.html' },

  prevChapter: { number: 15, title: 'Konjunktiv I & Indirekte Rede', titleEn: 'Konjunktiv I and reported speech', href: 'chapter-c1-15-konjunktiv-i-und-indirekte-rede.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Professional German values <em>guidance</em> over commands.',
    intro: 'Organizing an international academic conference, Silje recommends the safety goggles before inspection and Timo checks the gloves — every instruction softened from a command into a diplomatic recommendation.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See soft recommendations, diplomatic requests, and professional instructions used naturally'
    ],
    scene: 'Organisation einer internationalen Konferenz',
    femaleSpeakers: ['Silje'],
    dialogue: [
      { speaker: 'Silje', tokens: [
        { w: 'Vor', role: 'r-preposition', en: 'before', hi: 'से पहले', pron: 'for', type: 'Preposition' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Inspektion', role: 'r-dativ', en: 'inspection (dat.)', hi: 'निरीक्षण से', pron: 'in-spek-TSYON', type: 'Noun · fem. dat.' },
        { w: 'empfehle', role: 'r-verb', en: 'recommend', hi: 'सलाह देती हूँ', pron: 'emp-FAY-luh', type: 'Verb · empfehlen (ich)', why: 'empfehlen = to recommend (this chapter).', ex: 'Ich empfehle, die Schutzbrille zu tragen.', exEn: 'I recommend wearing the safety goggles.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Schutzbrille', role: 'r-akkusativ', en: 'safety goggles', hi: 'सुरक्षा चश्मा', pron: 'SHUTS-bri-luh', type: 'Noun · fem.', why: 'die Schutzbrille (this chapter).', ex: 'die Schutzbrille tragen' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'tragen', role: 'r-verb', en: 'wear', hi: 'पहनना', pron: 'TRAH-gen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Before the inspection I recommend wearing the safety goggles.', hi: 'Nirikshan se pehle main sifaarish karti hoon ki suraksha chashma pehna jaaye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'ratsam', role: 'r-akkusativ', en: 'advisable', hi: 'सलाह योग्य', pron: 'RAHT-zahm', type: 'Adjective', why: 'ratsam = advisable, fixed expression (this chapter).', ex: 'Es ist ratsam, früh zu kommen.', exEn: 'It is advisable to come early.' },
        { w: ',', plain: true },
        { w: 'auch', role: 'r-akkusativ', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Handschuhe', role: 'r-akkusativ', en: 'gloves', hi: 'दस्ताने', pron: 'HANT-shoo-uh', type: 'Noun · plural' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'kontrollieren', role: 'r-verb', en: 'check', hi: 'जांचना', pron: 'kon-tro-LEE-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'It is also advisable to check the gloves.', hi: 'Dastaane bhi jaanchna salaah yogya hai.' },
      { speaker: 'Silje', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'MÜ-sen', type: 'Modal · müssen (wir)' },
        { w: 'sicherstellen', role: 'r-verb', en: 'ensure', hi: 'सुनिश्चित करना', pron: 'ZI-kher-shte-len', type: 'Verb · infinitive', why: 'sicherstellen = to ensure (this chapter).', ex: 'Wir müssen sicherstellen, dass alle Geräte funktionieren.', exEn: 'We must ensure that all devices function.' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'alle', role: 'r-subject', en: 'all', hi: 'सभी', pron: 'A-luh', type: 'Determiner' },
        { w: 'Geräte', role: 'r-subject', en: 'devices', hi: 'उपकरण', pron: 'ge-RAY-tuh', type: 'Noun · plural' },
        { w: 'funktionieren', role: 'r-verb', en: 'function', hi: 'काम करते हैं', pron: 'funk-tsyo-NEE-ren', type: 'Verb · funktionieren (Satzende)' },
        { w: '.', plain: true }
      ], en: 'We must ensure that all devices function.', hi: 'Humein sunishchit karna hoga ki sabhi upkaran kaam karte hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Welche', role: 'r-subject', en: 'which', hi: 'कौनसा', pron: 'VEL-khuh', type: 'Question word' },
        { w: 'Gefahr', role: 'r-subject', en: 'danger', hi: 'ख़तरा', pron: 'ge-FAHR', type: 'Noun · fem.', why: 'die Gefahr (this chapter).', ex: 'eine mögliche Gefahr' },
        { w: 'besteht', role: 'r-verb', en: 'exists', hi: 'है', pron: 'be-SHTAYT', type: 'Verb · bestehen' },
        { w: 'bei', role: 'r-preposition', en: 'with', hi: 'में', pron: 'by', type: 'Preposition + dative' },
        { w: 'den', role: 'r-dativ', en: 'the (pl. dat.)', hi: '', pron: 'dayn', type: 'Article · dative' },
        { w: 'Chemikalien', role: 'r-dativ', en: 'chemicals (dat.)', hi: 'रसायनों में', pron: 'khe-mi-KAH-lyen', type: 'Noun · plural dat.' },
        { w: '?', plain: true }
      ], en: 'Which danger exists with the chemicals?', hi: 'Rasaayano mein kya khatra hai?' },
      { speaker: 'Silje', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Sicherheitsvorschrift', role: 'r-subject', en: 'safety regulation', hi: 'सुरक्षा नियम', pron: 'ZI-kher-hites-for-shrift', type: 'Noun · fem.', why: 'die Sicherheitsvorschrift (this chapter).', ex: 'die Sicherheitsvorschrift legt nahe' },
        { w: 'legt', role: 'r-verb', en: 'suggests', hi: 'संकेत देता है', pron: 'laykt', type: 'Verb · nahelegen', lexicalUnit: 'nahelegen', why: 'nahelegen = to suggest strongly (this chapter).', ex: 'Die Vorschrift legt eine Pause nahe.', exEn: 'The regulation suggests a break.' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'regelmäßige', role: 'r-akkusativ', en: 'regular', hi: 'नियमित', pron: 'RAY-gel-mai-si-guh', type: 'Adjective' },
        { w: 'Lüftung', role: 'r-akkusativ', en: 'ventilation', hi: 'हवादार', pron: 'LÜF-tung', type: 'Noun · fem.' },
        { w: 'nahe', role: 'r-verb', en: '(prefix of nahelegen)', hi: '', pron: 'NAH-uh', type: 'Separable prefix · Satzende', lexicalUnit: 'nahelegen' },
        { w: '.', plain: true }
      ], en: 'The safety regulation suggests regular ventilation.', hi: 'Suraksha niyam niyamit havaadaari ka sanket deta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'sorge', role: 'r-verb', en: 'take care', hi: 'ध्यान रखता हूँ', pron: 'ZOR-guh', type: 'Verb · sorgen (ich)' },
        { w: 'dafür', role: 'r-akkusativ', en: 'for that', hi: 'उसके लिए', pron: 'da-FÜR', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Good. I will take care of that.', hi: 'Achha. Main uska dhyaan rakhta hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A2 asks: <b>"Can I tell someone what to do?"</b> C1 asks: <b>"How can I influence someone\'s actions while maintaining professionalism, politeness, and register?"</b> Professional German values <span class="de r-empfehlung">guidance</span> over commands.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is AUFFORDERUNG, EMPFEHLUNG & HANDLUNGSSTEUERUNG at C1 level — pragmatics and communication strategy for guiding others\' actions, NOT basic Imperativ, A1 requests, or simple modal verbs (already mastered). Covered: the directness continuum (Information → Suggestion → Recommendation → Request → Instruction → Requirement → Order); soft recommendations (Ich würde empfehlen, Es empfiehlt sich, Es wäre sinnvoll, Ratsam wäre, Es lohnt sich, Es bietet sich an); diplomatic requests (Ich möchte Sie bitten, Wären Sie so freundlich, Könnten Sie bitte, Darf ich Sie bitten); professional instructions (Bitte beachten Sie, Achten Sie darauf, Es ist darauf zu achten, Stellen Sie sicher, Sorgen Sie dafür); advice (Sie sollten, Ich rate Ihnen, Ich würde Ihnen nahelegen); warnings (Es ist davon abzuraten, Es besteht die Gefahr, Man sollte vermeiden); the register scale from "Mach das!" (blunt command) to "Es wird empfohlen" (most formal/impersonal). ' +
    'Do NOT expect or require basic Imperativ forms, A1-level requests, or simple modal verb conjugation — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: overusing Imperativ in professional/formal contexts where softer structures are expected; direct English "you should" translations that sound too blunt in German; mixing recommendation register with obligation register inappropriately; using commands in what should be a formal email or policy document; choosing a register mismatched to the professional/academic/official context. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag Imperativ or blunt commands used where the context calls for diplomatic recommendation/request language.\n' +
    '- Check that recommendation-strength expressions match the intended level of directness (suggestion vs recommendation vs requirement).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Register check:</b> one sentence on whether the learner\'s directive language matched the professionalism and politeness the context required.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you guide action through diplomatic, professional language rather than commands. Ready for Konjunktiv I in academic language next.',
    mid: 'Good. Re-read the Directness Scale and Master Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: professional German values guidance over commands.'
  },

  parserSentence: [
    { w: 'Ich', role: 'plain' }, { w: 'würde', role: 'r-empfehlung' }, { w: 'ein', role: 'plain' }, { w: 'Online-Formular', role: 'plain' }, { w: 'empfehlen', role: 'r-empfehlung' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: professional German values guidance over direct commands.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Silje and Timo organize a conference, using recommendations, requests, and instructions diplomatically.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key directive expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master soft recommendations, diplomatic requests, professional instructions, advice, and warnings.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a university guideline and a company policy, identifying recommendations and instructions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify recommendations, requests, warnings, and instructions in a project meeting and conference briefing.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give recommendations, lead meetings, assign tasks, and make diplomatic requests using authentic structures.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite direct commands into polite professional language, and write a 350-word workplace guideline.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill register selection, recommendation ranking, and instruction transformation.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 510 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 5 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Register selection drills, instruction transformation, and a full workplace guideline writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Table, Directness Scale, Register Scale, and Decision Flowchart.',
      pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Für die Anmeldung würde ich ein Online-Formular empfehlen.', text: 'Make a soft, diplomatic recommendation' },
    { de: 'Könntest du bitte die Referenten kontaktieren?', text: 'Make a polite, diplomatic request' },
    { de: 'Bitte beachte, dass zwei Referenten noch nicht bestätigt haben.', text: 'Give a professional instruction without sounding rude' },
    { de: 'Es ist davon abzuraten, das Programm jetzt schon zu veröffentlichen.', text: 'Issue a formal, diplomatic warning' },
    { de: 'Es ist erforderlich, alle Referenten bis Freitag zu bestätigen.', text: 'State a genuine obligation formally, without a direct command' }
  ],

  vocab: [
    { de: 'empfehlen', pos: 'verb', level: 'C1', register: 'both', en: 'to recommend', hi: 'सुझाव देना', ex: 'Ich würde empfehlen, das Formular vorher zu prüfen.', exEn: 'I would recommend checking the form beforehand.', exHi: 'Main sujhaav dungi ki form ko pehle jaanch liya jaaye.', ex2: 'Die Studie empfiehlt eine größere Stichprobe.', ex2En: 'The study recommends a larger sample.', ex2Hi: 'Adhyayan ek badi namoona size ka sujhaav deta hai.', conj: { praesens: 'empfiehlt', praeteritum: 'empfahl', perfekt: 'hat empfohlen' } },
    { de: 'ratsam', pos: 'adjective', level: 'C1', register: 'written', en: 'advisable', hi: 'सलाह योग्य', ex: 'Ratsam wäre, frühzeitig zu planen.', exEn: 'It would be advisable to plan early.', exHi: 'Jaldi planning karna salaah yogya hoga.', ex2: 'Es ist nicht ratsam, das Risiko einzugehen.', ex2En: 'It is not advisable to take the risk.', ex2Hi: 'Risk lena salaah yogya nahi hai.' },
    { de: 'sicherstellen', pos: 'verb', level: 'C1', register: 'written', en: 'to ensure', hi: 'सुनिश्चित करना', ex: 'Stellen Sie sicher, dass alle Unterlagen vollständig sind.', exEn: 'Ensure that all documents are complete.', exHi: 'Sunishchit karein ki sabhi documents poore hain.', ex2: 'Wir haben sichergestellt, dass alles rechtzeitig ankommt.', ex2En: 'We have ensured that everything arrives on time.', ex2Hi: 'Humne sunishchit kiya hai ki sab kuch samay par pahunche.', conj: { praesens: 'stellt sicher', praeteritum: 'stellte sicher', perfekt: 'hat sichergestellt' } },
    { de: 'die Gefahr', art: 'die', gender: 'f', plural: 'Gefahren', pos: 'noun', level: 'C1', register: 'both', en: 'danger, risk', hi: 'खतरा', ex: 'Es besteht die Gefahr, dass der Zeitplan nicht eingehalten wird.', exEn: 'There is a risk that the schedule will not be kept.', exHi: 'Yeh khatra hai ki schedule maintain nahi ho paayega.', ex2: 'Man sollte diese Gefahr nicht unterschätzen.', ex2En: 'One should not underestimate this danger.', ex2Hi: 'Iss khatre ko kam nahi aankana chahiye.' },
    { de: 'nahelegen', pos: 'verb', level: 'C1', register: 'written', en: 'to suggest strongly, urge', hi: 'दृढ़ता से सुझाव देना', ex: 'Ich würde Ihnen nahelegen, das Angebot anzunehmen.', exEn: 'I would strongly suggest that you accept the offer.', exHi: 'Main aapko dridhtaa se sujhaav dunga ki offer sweekar kar lein.', ex2: 'Der Bericht legt nahe, die Strategie zu überdenken.', ex2En: 'The report suggests reconsidering the strategy.', ex2Hi: 'Report strategy par phir se vichaar karne ka sujhaav deta hai.', conj: { praesens: 'legt nahe', praeteritum: 'legte nahe', perfekt: 'hat nahegelegt' } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Ebenen der Handlungssteuerung',
      body: [ 'Information → Suggestion → Recommendation → Request → Instruction → Requirement → Order. German offers many precise levels for directing someone\'s actions.' ],
      hinglish: 'Kisi se kuch karwane ke kai levels hote hain \u2014 halke sujhav se lekar seedhe order tak. German mein har level ka apna phrase hai, aur galat level chun lene se baat ya to rukhi lagti hai ya bahut dheeli. C1 par yahi control dekha jaata hai.'
    },
    {
      title: 'Sanfte Empfehlungen (Soft Recommendations)',
      body: [ 'Ich würde empfehlen, ... / Es empfiehlt sich, ... / Es wäre sinnvoll, ... / Ratsam wäre, ... / Es lohnt sich, ... / Es bietet sich an, ... — the softest, most common recommendation structures.' ],
      hinglish: 'Yeh sabse narm structures hain. Dhyaan do ki inme se zyada-tar <b>impersonal</b> hain \u2014 <span class="de">Es empfiehlt sich \u2026</span> mein kisi ka naam nahi aata, isliye baat kisi par thopi hui nahi lagti. Yahi wajah hai ki professional writing mein yeh itne common hain.'
    },
    {
      title: 'Diplomatische Bitten (Diplomatic Requests)',
      body: [ 'Ich möchte Sie bitten, ... / Wären Sie so freundlich, ... / Es wäre hilfreich, ... / Könnten Sie bitte... / Darf ich Sie bitten... — increasing levels of politeness for making requests.' ],
      hinglish: 'Request ke liye yeh phrases hain, aur inme politeness badhti jaati hai. <span class="de">K\u00f6nnten Sie bitte \u2026</span> normal polite hai, aur <span class="de">W\u00e4ren Sie so freundlich, \u2026</span> kaafi formal. Sab ke baad <b>zu + Infinitiv</b> aata hai \u2014 yeh yaad rakhna zaroori hai.'
    },
    {
      title: 'Berufliche Anweisungen (Professional Instructions)',
      body: [ 'Bitte beachten Sie, ... / Achten Sie darauf, ... / Es ist darauf zu achten, ... / Stellen Sie sicher, ... / Sorgen Sie dafür, ... / Denken Sie daran, ... — authentic workplace instruction language, softer than direct commands.' ],
      hinglish: 'Office mein instruction dene ke liye yeh phrases chalte hain. Dhyaan do ki <span class="de">Bitte beachten Sie</span> aur <span class="de">Achten Sie darauf</span> Imperativ hi hain, par <b>Sie</b> aur <b>bitte</b> ke saath yeh order nahi lagte. Aur <span class="de">Es ist darauf zu achten</span> sabse impersonal hai \u2014 official notices mein yahi milta hai.'
    },
    {
      title: 'Rat & Empfehlung (Advice)',
      body: [ 'Sie sollten... / Es wäre besser, ... / Ich rate Ihnen, ... / Es empfiehlt sich, ... / Ich würde Ihnen nahelegen, ... — compare increasing strength of advice.' ],
      hinglish: 'Salaah dene ke liye yeh chalte hain, aur inki strength alag hai. <span class="de">Sie sollten</span> halki salaah hai, <span class="de">Ich rate Ihnen</span> zyada seedhi, aur <span class="de">Ich w\u00fcrde Ihnen nahelegen</span> sabse zor wali. Teeno mein insaan <b>Dativ</b> mein aata hai \u2014 <b>Ihnen</b>, na ki <i>Sie</i>.'
    },
    {
      title: 'Warnungen (Warnings & Cautions)',
      body: [ 'Vorsicht bei... / Man sollte vermeiden, ... / Es ist davon abzuraten, ... / Achten Sie darauf, dass... / Es besteht die Gefahr, ... — formal German softens warnings without losing clarity.' ],
      hinglish: 'Warning dene ke liye German seedha \u201cmat karo\u201d nahi kehta. <span class="de">Man sollte vermeiden, \u2026</span> aur <span class="de">Es ist davon abzuraten, \u2026</span> mein baat narm rehti hai par matlab bilkul saaf hai. Yahi formal writing ka andaaz hai \u2014 polite lekin clear.'
    },
    {
      title: 'Meister-Tabelle',
      body: [ 'Function mapped to preferred expression.' ],
      table: {
        head: ['Function', 'Preferred Expression'],
        rows: [
          ['Suggestion', 'Es bietet sich an...'],
          ['Recommendation', 'Es empfiehlt sich...'],
          ['Advice', 'Ich rate Ihnen...'],
          ['Request', 'Ich möchte Sie bitten...'],
          ['Instruction', 'Bitte beachten Sie...'],
          ['Warning', 'Es ist davon abzuraten...'],
          ['Obligation', 'Es ist erforderlich...']
        ]
      },
      hinglish: 'Function aur expression ka table \u2014 pehle tay karo ki tum kya kar rahe ho (sujhav, salaah, request, instruction, warning), phir usi row se phrase uthao.'
    },
    {
      title: 'Welche Struktur folgt?',
      body: [
        'Each of these expressions demands a particular continuation, and that is where nearly all the errors happen. There are three patterns.',
        'Impersonal frames take <b>zu + Infinitiv</b>. Verbs of advising take a <b>Dativ</b> person plus <b>zu + Infinitiv</b>. And a few take a full <b>dass</b>-clause when the subject needs naming.'
      ],
      table: {
        head: ['Expression', 'Continuation', 'Example'],
        rows: [
          ['Es empfiehlt sich / Es w\u00e4re sinnvoll / Es ist ratsam', 'zu + Infinitiv', '<span class="de">Es empfiehlt sich, fr\u00fch <b>zu buchen</b>.</span>'],
          ['Ich m\u00f6chte Sie bitten / W\u00e4ren Sie so freundlich', 'zu + Infinitiv', '<span class="de">Ich m\u00f6chte Sie bitten, mir <b>zu antworten</b>.</span>'],
          ['Ich rate / empfehle / lege nahe', '<b>Dativ</b> + zu + Infinitiv', '<span class="de">Ich rate <b>Ihnen</b>, das <b>zu pr\u00fcfen</b>.</span>'],
          ['Es ist erforderlich / Es ist wichtig', 'dass-clause or zu + Infinitiv', '<span class="de">Es ist erforderlich, <b>dass</b> alle teilnehmen.</span>'],
          ['Bitte beachten Sie / Achten Sie darauf', 'dass-clause', '<span class="de">Achten Sie darauf, <b>dass</b> die Frist eingehalten wird.</span>'],
          ['Es ist darauf zu achten', 'zu + Infinitiv', '<span class="de">Es ist darauf zu achten, die Frist <b>einzuhalten</b>.</span>']
        ]
      },
      note: 'With a separable verb the <b>zu</b> goes inside the word: <i>einhalten \u2192 einzuhalten</i>, <i>anmelden \u2192 anzumelden</i>, <i>teilnehmen \u2192 teilzunehmen</i>.',
      hinglish: 'Har expression apne baad ek khaas structure maangta hai \u2014 aur lagbhag saari galtiyan yahin hoti hain. Teen patterns hain. Impersonal wale (<b>Es empfiehlt sich</b>, <b>Es w\u00e4re sinnvoll</b>) aur request wale (<b>Ich m\u00f6chte Sie bitten</b>) ke baad <b>zu + Infinitiv</b> aata hai \u2014 <i>dass</i> nahi. Salaah dene wale verbs (<b>raten</b>, <b>empfehlen</b>, <b>nahelegen</b>) pehle <b>Dativ</b> mein insaan lete hain, phir zu + Infinitiv: <span class="de">Ich rate Ihnen, \u2026</span> \u2014 <i>Ich rate Sie</i> galat hai. Aur kuch ke saath poora <b>dass</b>-clause aata hai, khaas kar jab subject batana zaroori ho. Ek aakhri baat: separable verb ho to <b>zu</b> word ke <b>andar</b> jaata hai \u2014 <i>einhalten</i> se <b>einzuhalten</b>.'
    },
    {
      title: 'Registerskala (Directness → Register)',
      body: [ 'Mach das! → Du solltest... → Ich würde empfehlen... → Es wäre sinnvoll, ... → Es empfiehlt sich, ... → Es wird empfohlen. Directness decreases while professionalism increases.' ],
      hinglish: 'Yeh directness ki seedhi hai. Upar seedha order hai aur neeche jaate-jaate baat impersonal hoti jaati hai. Dhyaan do ki jaise-jaise \u201cmain\u201d aur \u201ctum\u201d sentence se hatte hain, tone utna hi professional lagta hai \u2014 <span class="de">Es wird empfohlen</span> mein to koi hai hi nahi.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'Most of these break the frame the expression requires \u2014 a dass-clause where <b>zu + Infinitiv</b> belongs, a missing <i>zu</i> inside a separable verb, or the wrong case after a Dativ verb.' ],
      mistakes: [
        { wrong: 'Schicken Sie mir den Bericht bis morgen!', right: 'Ich m\u00f6chte Sie bitten, mir den Bericht bis morgen zu schicken.', why: 'A bare Imperativ in a formal email reads as an order. The <b>bitten \u2026 zu</b> frame keeps the same content and adds the expected politeness.' },
        { wrong: 'Es empfiehlt sich, dass Sie den Text lesen.', right: 'Es empfiehlt sich, den Text zu lesen.', why: '<b>es empfiehlt sich</b> takes <b>zu + Infinitiv</b>, not a dass-clause \u2014 the impersonal frame is what makes it sound professional.' },
        { wrong: 'W\u00e4ren Sie so freundlich und schicken Sie mir die Unterlagen?', right: 'W\u00e4ren Sie so freundlich, mir die Unterlagen zu schicken?', why: 'This frame continues with <b>zu + Infinitiv</b>, not with a second main clause \u2014 the Imperativ breaks the polite structure.' },
        { wrong: 'Es w\u00e4re sinnvoll, dass alle Teilnehmer sich anmelden m\u00fcssen.', right: 'Es ist erforderlich, dass sich alle Teilnehmer anmelden. / Es w\u00e4re sinnvoll, sich fr\u00fch anzumelden.', why: 'Pick one level. <b>es w\u00e4re sinnvoll</b> is a recommendation, so combining it with <i>m\u00fcssen</i> sends two contradictory signals.' },
        { wrong: 'Es ist darauf zu achten, die Frist einhalten.', right: 'Es ist darauf zu achten, die Frist einzuhalten.', why: 'The <b>zu</b> slots INSIDE a separable verb: <i>einhalten</i> becomes <b>einzuhalten</b>.' },
        { wrong: 'Ich rate Sie, das Angebot anzunehmen.', right: 'Ich rate Ihnen, das Angebot anzunehmen.', why: '<b>raten</b> takes the Dativ \u2014 <b>Ihnen</b>, not <i>Sie</i>. The same applies to <i>empfehlen</i> and <i>nahelegen</i>.' }
      ],
      hinglish: 'Inme se zyada-tar galtiyan structure todne se hoti hain \u2014 jahan <b>zu + Infinitiv</b> chahiye wahan <i>dass</i> laga dena, separable verb mein <b>zu</b> andar na daalna, ya Dativ verb ke saath galat case.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to suggest? Es bietet sich an... Need to recommend? Es empfiehlt sich... Need to advise? Ich rate Ihnen... Need to request politely? Ich möchte Sie bitten... Need to instruct formally? Bitte beachten Sie... Need to warn? Es ist davon abzuraten...' ],
      note: 'Memory trick: A2 asks "can I tell someone what to do?" C1 asks "how can I influence someone\'s actions while maintaining professionalism, politeness and the appropriate register?" Professional German values guidance over commands.',
      hinglish: 'Sujhav? <span class="de">Es bietet sich an \u2026</span>. Recommendation? <span class="de">Es empfiehlt sich \u2026</span>. Salaah? <span class="de">Ich rate Ihnen \u2026</span>. Polite request? <span class="de">Ich m\u00f6chte Sie bitten \u2026</span>. Official instruction? <span class="de">Bitte beachten Sie \u2026</span>. Warning? <span class="de">Es ist davon abzuraten \u2026</span>. Phrase chunne ke baad yeh check karo ki uske baad <b>zu + Infinitiv</b> aana hai ya <b>dass</b>.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Prüfungsordnung: Hinweise zur Abgabe von Abschlussarbeiten',
    titleEn: 'Reading A — Examination regulations: notes on submitting theses',
    tokens: [
      { w: 'Es', role: 'r-empfehlung', en: 'it (part of fixed recommendation expression)', hi: '', type: 'Pronomen · Nom.' },
      { w: 'wird', role: 'r-empfehlung', en: 'is (part of impersonal official recommendation)', hi: 'सिफ़ारिश की जाती है', type: 'Verb · werden (Präsens)', why: '"Es wird empfohlen" is the most formal, impersonal recommendation structure, common in official guidelines (this chapter).' },
      { w: 'empfohlen', role: 'r-empfehlung', en: 'recommended (Satzende, impersonal official)', hi: 'कि (Satzende)', type: 'Verb · Partizip II' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'यह', type: 'Article' },
      { w: 'Arbeit', role: 'plain', en: 'thesis (Satzende)', hi: 'शोधकार्य (Satzende)', type: 'Noun · fem.' },
      { w: 'spätestens', role: 'plain', en: 'at the latest', hi: 'देर से देर', type: 'Adverb' },
      { w: 'zwei', role: 'plain', en: 'two', hi: 'दो', type: 'Number' },
      { w: 'Wochen', role: 'plain', en: 'weeks', hi: 'हफ़्ते', type: 'Noun · plural' },
      { w: 'vor', role: 'plain', en: 'before', hi: 'पहले', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'निर्धारित', type: 'Article · Dat.' },
      { w: 'Frist', role: 'plain', en: 'deadline (Satzende)', hi: 'तारीख़ (Satzende)', type: 'Noun · fem.' },
      { w: 'einzureichen', role: 'plain', en: 'to submit (Satzende)', hi: 'जमा करना (Satzende)', type: 'Verb (zu-Infinitiv)' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-erfordernis', en: 'it (part of fixed obligation expression)', hi: '', type: 'Pronomen · Nom.' },
      { w: 'ist', role: 'r-erfordernis', en: 'is (part of fixed obligation expression)', hi: 'ध्यान रखना ज़रूरी है', type: 'Verb · sein (Präsens)' },
      { w: 'zudem', role: 'plain', en: 'moreover', hi: 'इसके अलावा', type: 'Adverb' },
      { w: 'darauf', role: 'plain', en: 'to that', hi: '', type: 'Pronominaladverb' },
      { w: 'zu', role: 'r-erfordernis', en: 'to (part of "zu achten", fixed instruction)', hi: 'कि', type: 'Partikel · Infinitiv' },
      { w: 'achten', role: 'r-erfordernis', en: 'pay attention (Satzende, formal instruction)', hi: '(Satzende)', type: 'Verb (zu-Infinitiv)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'sämtliche', role: 'plain', en: 'all', hi: 'सभी', type: 'Determiner' },
      { w: 'Anlagen', role: 'plain', en: 'appendices (Satzende)', hi: 'परिशिष्ट (Satzende)', type: 'Noun · plural' },
      { w: 'digital', role: 'plain', en: 'digitally', hi: 'डिजिटल रूप से', type: 'Adjective' },
      { w: 'signiert', role: 'plain', en: 'signed (Satzende)', hi: 'हस्ताक्षरित (Satzende)', type: 'Verb · Partizip II' },
      { w: 'werden', role: 'plain', en: 'be (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Infinitiv Passiv)' },
      { w: '.', plain: true },
      { w: 'Verspätete', role: 'plain', en: 'late', hi: 'देर से', type: 'Adjective' },
      { w: 'Abgaben', role: 'plain', en: 'submissions', hi: 'प्रस्तुतियाँ', type: 'Noun · plural' },
      { w: 'können', role: 'plain', en: 'can', hi: 'सकती हैं', type: 'Verb · können' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'केवल', type: 'Adverb' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'ärztlichem', role: 'plain', en: 'medical', hi: 'चिकित्सा', type: 'Adjective · Dat.' },
      { w: 'Attest', role: 'plain', en: 'certificate (Satzende)', hi: 'प्रमाणपत्र (Satzende)', type: 'Noun · neut.' },
      { w: 'akzeptiert', role: 'plain', en: 'accepted (Satzende)', hi: 'स्वीकार की जा सकती हैं (Satzende)', type: 'Verb · Partizip II (Nebensatz, Satzende)' },
      { w: 'werden', role: 'plain', en: 'be (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Infinitiv Passiv)' },
      { w: '.', plain: true }
    ],
    translation: 'It is recommended to submit the thesis at least two weeks before the deadline. It is moreover essential to ensure that all appendices are digitally signed. Late submissions can only be accepted with a medical certificate.',
    comprehension: [
      { q: 'Welche Funktion hat "es wird empfohlen"?', options: ['Formelle, unpersönliche Empfehlung', 'Direkter Befehl', 'Verbot'], answer: 0 },
      { q: 'Welche Funktion hat "es ist darauf zu achten"?', options: ['Formelle Anweisung', 'Höfliche Bitte', 'Persönliche Meinung'], answer: 0 },
      { q: 'Unter welcher Bedingung werden verspätete Abgaben akzeptiert?', options: ['Nur mit ärztlichem Attest', 'Immer', 'Nie'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Unternehmensrichtlinie',
    titleEn: 'Reading B — Company policy',
    tokens: [
      { w: 'Mitarbeitende', role: 'plain', en: 'employees (Satzende)', hi: 'karmachaari (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'werden', role: 'r-anweisung', en: 'are (part of passive professional instruction)', hi: '(passive professional instruction)', type: 'Verb · werden (Präsens)', why: 'Passive instructions ("werden gebeten") sound less direct than active commands.' },
      { w: 'gebeten', role: 'r-anweisung', en: 'asked (Satzende, passive instruction)', hi: 'anurodh kiya jaata hai (Satzende, passive instruction)', type: 'Partizip II (Satzende)' },
      { w: ',', plain: true },
      { w: 'Berichte', role: 'plain', en: 'reports (Satzende)', hi: 'reports (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'bis', role: 'plain', en: 'by', hi: 'tak', type: 'Präposition · Akk.' },
      { w: 'Monatsende', role: 'plain', en: 'end of the month (Satzende)', hi: 'mahine ke ant (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'einzureichen', role: 'plain', en: 'to submit (Satzende)', hi: 'tak jama karna (Satzende)', type: 'Verb (zu-Infinitiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-warnung', en: 'it (part of fixed warning expression)', hi: '(fixed warning expression ka hissa)', type: 'Pronomen · Nom.' },
      { w: 'sollte', role: 'r-warnung', en: 'should (diplomatic warning)', hi: 'chahiye (diplomatic warning)', type: 'Modalverb (Präteritum)' },
      { w: 'vermieden', role: 'r-warnung', en: 'avoided (Satzende, diplomatic warning)', hi: 'bachaana chahiye (Satzende, diplomatic warning)', type: 'Partizip II (Satzende)' },
      { w: 'werden', role: 'r-warnung', en: '(part of passive warning, Satzende)', hi: '(Satzende)', type: 'Verb · werden (Satzende)' },
      { w: ',', plain: true },
      { w: 'Fristen', role: 'plain', en: 'deadlines (Satzende)', hi: 'deadlines (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'zu', role: 'plain', en: 'to (part of zu-Infinitiv)', hi: '(zu-Infinitiv ka hissa)', type: 'Partikel · Infinitiv' },
      { w: 'überschreiten', role: 'plain', en: 'exceed (Satzende)', hi: 'paar karne se (Satzende)', type: 'Verb (zu-Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Employees are asked to submit reports by the end of the month. Exceeding deadlines should be avoided.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_016_L001', speaker: 'Silje', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, bevor wir die Anlage betreten, würde ich dir empfehlen, die Schutzbrille aufzusetzen.', en: 'Timo, before we enter the facility, I would recommend you put on the safety goggles.' },
      { id: 'C1_016_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gute Idee. Sollte ich die Handschuhe auch schon jetzt anziehen?', en: 'Good idea. Should I put the gloves on now already?' },
      { id: 'C1_016_L003', speaker: 'Silje', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, am besten sofort — und könntest du bitte auch den Kollegen dort Bescheid geben?', en: 'Yes, best right away — and could you please also let the colleagues over there know?' },
      { id: 'C1_016_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Mache ich, dann sind wir alle bereit für die Inspektion.', en: 'I\'ll do that, then we\'re all ready for the inspection.' }
    ],
    transcript: 'Timo, bevor wir die Anlage betreten, würde ich dir empfehlen, die Schutzbrille aufzusetzen. Gute Idee. Sollte ich die Handschuhe auch schon jetzt anziehen? Ja, am besten sofort — und könntest du bitte auch den Kollegen dort Bescheid geben? Mache ich, dann sind wir alle bereit für die Inspektion.',
    translation: 'Timo, before we enter the facility, I would recommend you put on the safety goggles. Good idea. Should I put the gloves on now already? Yes, best right away — and could you please also let the colleagues over there know? I\'ll do that, then we\'re all ready for the inspection.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'wir' },
      { w: 'die' },
      { w: 'Anlage' },
      { w: 'betreten' },
      { w: ',', plain: true },
      { w: 'würde' },
      { w: 'ich' },
      { w: 'dir' },
      { w: 'empfehlen' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Schutzbrille' },
      { w: 'aufzusetzen' },
      { w: '.', plain: true },
      { w: 'Gute' },
      { w: 'Idee' },
      { w: '.', plain: true },
      { w: 'Sollte' },
      { w: 'ich' },
      { w: 'die' },
      { w: 'Handschuhe' },
      { w: 'auch' },
      { w: 'schon' },
      { w: 'jetzt' },
      { w: 'anziehen' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'am' },
      { w: 'besten' },
      { w: 'sofort' },
      { w: '—', plain: true },
      { w: 'und' },
      { w: 'könntest' },
      { w: 'du' },
      { w: 'bitte' },
      { w: 'auch' },
      { w: 'den' },
      { w: 'Kollegen' },
      { w: 'dort' },
      { w: 'Bescheid' },
      { w: 'geben' },
      { w: '?', plain: true },
      { w: 'Mache' },
      { w: 'ich' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'sind' },
      { w: 'wir' },
      { w: 'alle' },
      { w: 'bereit' },
      { w: 'für' },
      { w: 'die' },
      { w: 'Inspektion' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was empfiehlt Silje vor dem Betreten?', qEn: 'What does Silje recommend before entering?', options: ['einen Helm tragen', 'die Schutzbrille aufsetzen', 'draußen warten', 'nichts Besonderes'], optionsEn: ['wear a helmet', 'put on the safety goggles', 'wait outside', 'nothing special'], answer: 1,
        explain: '"… würde ich dir empfehlen, die Schutzbrille aufzusetzen."' },
      { q: 'Worum bittet Silje Timo zusätzlich?', qEn: 'What does Silje ask Timo to do in addition?', options: ['die Tür schließen', 'den Kollegen Bescheid geben', 'das Licht ausschalten', 'früher gehen'], optionsEn: ['close the door', 'let the colleague know', 'turn off the light', 'leave earlier'], answer: 1,
        explain: '"… könntest du bitte auch den Kollegen dort Bescheid geben?"' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Ihr betretet die Anlage. Was empfiehlst du Timo?", taskEn: "You're entering the plant. What do you recommend to Timo?", de: "Ich würde dir empfehlen, die Schutzbrille aufzusetzen.", en: "I'd recommend putting on the safety goggles." },
    { task: "Timo fragt, ob er die Handschuhe schon anziehen soll.", taskEn: "Timo asks whether he should put the gloves on already.", de: "Ja, es ist ratsam, sie jetzt anzuziehen.", en: "Yes, it's advisable to put them on now." },
    { task: "Du brauchst die Zahlen einer Kollegin bis morgen.", taskEn: "You need a colleague's figures by tomorrow.", de: "Könntest du mir bitte die Zahlen bis morgen schicken?", en: "Could you please send me the figures by tomorrow?" },
    { task: "Schreib eine Anweisung für die Teilnehmenden der Tagung.", taskEn: "Write an instruction for the conference participants.", de: "Bitte stellen Sie sicher, dass die Anmeldung bis Freitag erfolgt.", en: "Please ensure that registration is completed by Friday." },
    { task: "Warne im Gutachten förmlich vor einem Vorgehen.", taskEn: "Warn formally against a course of action in the review.", de: "Angesichts der Gefahr ist davon abzuraten, die Stichprobe zu verkleinern.", en: "Given the risk, reducing the sample is inadvisable." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Rewrite direct commands into polite C1 professional language (recommendations, diplomatic requests, formal instructions).\n\nTASK 2 — Workplace guideline or policy recommendation (350 words): Write using authentic recommendation, instruction, and advisory language throughout.',
    starters: ['Es wird empfohlen, die Arbeiten frühzeitig einzureichen.', 'Mitarbeitende werden gebeten, Berichte bis Monatsende einzureichen.'],
    placeholder: 'Für die Anmeldung würde ich ein Online-Formular empfehlen. Es bietet sich auch an, eine Warteliste einzurichten...',
    minWords: 150
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which is the softest way to make a professional recommendation?',
      options: ['Ich würde empfehlen, ...', 'Mach das!', 'Du musst das machen.'],
      answer: 0,
      explain: '"Ich würde empfehlen" is the softest, most diplomatic recommendation structure.'
    },
    gap: {
      sentence: ['Es ist davon ', ', das Programm jetzt schon zu veröffentlichen.'],
      gaps: [ { answer: 'abzuraten', accepts: ['abzuraten'] } ],
      explain: '"Es ist davon abzuraten" is the formal, diplomatic warning structure.'
    },
    match: {
      q: 'Match each function to its preferred expression.',
      pairs: [
        { noun: 'Suggestion', art: 'Es bietet sich an...' },
        { noun: 'Recommendation', art: 'Es empfiehlt sich...' },
        { noun: 'Request', art: 'Ich möchte Sie bitten...' },
        { noun: 'Warning', art: 'Es ist davon abzuraten...' }
      ]
    },
    builder: {
      target: 'Build: "Could you please contact the speakers?" (diplomatic request)',
      bank: ['Könntest', 'du', 'bitte', 'die', 'Referenten', 'kontaktieren', '?'],
      answer: ['Könntest', 'du', 'bitte', 'die', 'Referenten', 'kontaktieren', '?'],
      roles: { 'Könntest': 'r-bitte', 'bitte': 'r-bitte' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Mach das Formular jetzt fertig, sonst gibt es Probleme.',
      right: 'Ich würde Sie bitten, das Formular zeitnah fertigzustellen.',
      explain: 'A blunt Imperativ command is inappropriate in professional register — a diplomatic request is expected instead.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does C1-level Handlungssteuerung prioritize?', options: ['Guidance over direct commands', 'Only Imperativ forms', 'Always the strongest possible directive'], answer: 0,
      explain: 'Professional German values politeness and indirectness over blunt commands.' },
    { q: 'Which is the softest recommendation structure?', options: ['Ich würde empfehlen, ...', 'Es ist erforderlich, ...', 'Mach das!'], answer: 0,
      explain: '"Ich würde empfehlen" is the gentlest, most common recommendation opener.' },
    { q: 'What structure is used for a formal, diplomatic warning?', options: ['Es ist davon abzuraten, ...', 'Verboten!', 'Du darfst nicht...'], answer: 0,
      explain: '"Es ist davon abzuraten" softens a warning while remaining clear and formal.' },
    { q: 'What is the most formal, impersonal way to state an official recommendation?', options: ['Es wird empfohlen, ...', 'Ich würde sagen...', 'Mach das bitte.'], answer: 0,
      explain: 'The passive, impersonal "es wird empfohlen" is standard in official guidelines.' },
    { q: 'What is the C1 memory trick for this chapter?', options: ['How can I influence action while maintaining professionalism and register?', 'Can I tell someone what to do?', 'Commands are always best'], answer: 0,
      explain: 'C1 speakers focus on register-appropriate influence, not simply issuing commands.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-empfehlung', html: 'Soft recommendations (Ich würde empfehlen, Es bietet sich an, Es empfiehlt sich) are the default professional way to suggest action.' },
    { c: 'r-bitte', html: 'Diplomatic requests (Könnten Sie bitte, Ich möchte Sie bitten) replace direct Imperativ in professional and formal contexts.' },
    { c: 'r-warnung', html: 'Formal warnings (Es ist davon abzuraten, Es besteht die Gefahr) soften cautions while keeping them clear and actionable.' }
  ],
  revisionTips: [
    'Take five blunt commands and rewrite each at three levels of the directness scale: instruction, recommendation, and gentle suggestion.',
    'Write a short workplace email using at least one soft recommendation, one diplomatic request, and one formal instruction.',
    'Practise the register scale aloud: Mach das! → Du solltest... → Ich würde empfehlen... → Es wird empfohlen.'
  ]
};

window.CHAPTER = CHAPTER;
